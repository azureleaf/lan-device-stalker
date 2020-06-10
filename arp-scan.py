import subprocess
import psutil
import re
import socket
import sched
import time
import logging
import sqlalchemy as db
from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData
from datetime import datetime, timedelta

# Set up the logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)  # function name


def get_interface():
    '''
    Scan network interfaces, return name of the active valid one
    Returns:
        (str): Name of the active interface
    '''
    addrs = psutil.net_if_addrs()
    interfaces = addrs.keys()  # lo, docker0, wlp2s0, enp1s0, etc.

    # Return the network interface name which is up
    for interface in interfaces:
        # Ignore loopback & docker
        # "lo" shares the same AF (Address Family) with active network interface
        if "docker" not in interface and interface != "lo":

            # Without adding "[]",
            # it may bring syntax error in the following processes
            interface_addrs = psutil.net_if_addrs().get(interface) or []

            # Seemingly, socket.AF_INET returns
            # the address family of the active network interface.
            # Result of net_if_addrs() also
            # contains the address family for each interface
            if socket.AF_INET in [snicaddr.family for snicaddr in interface_addrs]:
                return interface

    logger.error("Error: No network interface is up!")
    return None


def get_devices(interface):
    '''
    Get list of devices on the LAN, then record it to database
    Args:
        interface (str): Name of the interface to be arp-scan
    Returns:
        devices (list): List of dict of devices & their props
    '''

    # run shell command of this computer
    cmd = subprocess.Popen(
        ["sudo", "arp-scan", "-l", "-q", "-I", interface],
        stdout=subprocess.PIPE)
    scan_result = cmd.communicate()[0]

    devices = format_arp_scan_result(str(scan_result))

    return devices


def format_arp_scan_result(scan_result):
    '''
    Parse the result text of the arp-scan, return it as a dict
    Args:
        scan_result(str): Multi-line text of arp-scan output
    Returns:
        devices (list): List of dict of devices scanned
    '''

    # Convert plain string \t \n into actual tab & line break
    scan_result = re.sub(r'\\t', r'\t', scan_result)
    scan_result = re.sub(r'\\n', r'\n', scan_result)

    now = str(datetime.now())

    # Convert multiline str into list,
    # then extract the lines of IP addrs & MAC addrs
    devices = []
    for line in scan_result.splitlines():
        # convert tab-deliminated items into array,
        # then remove whitespaces
        words = [x.strip() for x in line.split("\t")]

        # check if the 1st word looks like an IPv4 address
        if len(words[0].split(".")) == 4:
            # check if the string is the valid IPv4 address
            try:
                socket.inet_aton(words[0])
                devices.append({
                    "ip_addr": words[0],
                    "mac_addr": words[1],
                    "created_at": now
                })
            except socket.error:
                continue

    return devices


def save_to_db(new_devices, db_path, devices_table):
    """
    Add new scan result to the DB
    Args:
        new_devices (list): List of dict
        db_path (str): SQLite DB name
        devices_table (obj): SQLAlchemy Table object
    """
    engine = create_engine(db_path)
    conn = engine.connect()
    meta = MetaData(engine)

    if not engine.dialect.has_table(engine, "devices"):
        meta.create_all(engine)
        print("DB created.")

    query = db.insert(devices_table)
    conn.execute(query, new_devices)


def summarize_db(db_path, devices):
    """
    Check the records of devices responded to ARP-SCAN,
    return occurences summary of every device
    """
    engine = create_engine(db_path)
    conn = engine.connect()

    # Fetch all the unique mac addresses
    query = db.select([devices.columns.mac_addr.distinct()]
                      ).order_by(db.desc(devices.columns.mac_addr))
    mac_addrs = conn.execute(query).fetchall()  # list of tuples

    # Fetch all the unique timestamps
    query = db.select([devices.columns.created_at.distinct()]
                      ).order_by(db.desc(devices.columns.created_at))
    timestamps = conn.execute(query).fetchall()  # list of tuples

    # Get occurences of every device
    deviceStats = {
        "occs": [],
        "macAddrs": [list(a_tuple)[0] for a_tuple in mac_addrs],
        "timestamps": [list(a_tuple)[0] for a_tuple in timestamps]
    }
    devices_occs = []  # Occurences of all the devices
    for mac_addr in mac_addrs:
        query = db.select([devices]) \
            .where(devices.columns.mac_addr == mac_addr.mac_addr) \
            .order_by(db.desc(devices.columns.created_at))
        # Occurence of this device
        device_occs = conn.execute(query).fetchall()

        deviceStats["occs"].append({
            "mac_addr": mac_addr.mac_addr,
            "occ": [device_occ.created_at for device_occ in device_occs]
        })

    return deviceStats


def next_run_time(interval_min):
    """
    Schedule the next running time.
    Args:
        interval_min (int): interval between runs in minutes.
            Should be the divisor of 60: 60, 30, 20, 10, 6, 3, 2, 1
    Returns
        (obj) datetime object of the next run time
    """
    now = datetime.now()
    min0 = now.replace(minute=0, second=0, microsecond=0)
    next_time = min0
    while True:
        if next_time > now:
            print("Next run:", str(next_time))
            return next_time
        else:
            # When it's almost the end of the hour
            if next_time.minute + interval_min >= 60:
                next_time += timedelta(hours=1)
                next_time = next_time.replace(minute=0)
            else:
                next_time += timedelta(minutes=interval_min)
            continue


def wrapper():
    # params
    db_path = "sqlite:///devices.db"
    js_path = "history.js"
    interval_min = 0
    cycle_total = 0

    # define the table
    engine = create_engine(db_path)
    meta = MetaData(engine)
    devices_table = Table('devices', meta,
                          Column('id', Integer, primary_key=True),
                          Column('ip_addr', String),
                          Column('mac_addr', String),
                          Column('created_at', String)
                          )
    meta.create_all(engine)

    def cycle():
        '''scanning process'''
        interface = get_interface()
        devices = get_devices(interface)
        save_to_db(devices, db_path, devices_table)

    cycle_count = 0
    while cycle_count < cycle_total:
        s = sched.scheduler(time.time, time.sleep)
        s.enterabs(next_run_time(interval_min).timestamp(), 1, cycle)
        s.run()
        cycle_count += 1

    # Save DB contents as a constant in the JS file
    # to embed them in the web page
    deviceStats = summarize_db(db_path, devices_table)
    with open(js_path, "w") as fo:

        # Write occurences
        fo.write("const recordsByDevice = [\n")
        for occs_device in deviceStats["occs"]:
            fo.write(f"  {str(occs_device)},\n")
        fo.write("];\n\n")


        # Write Timestamps
        fo.write("const timestamps = [\n")
        for timestamp in deviceStats["timestamps"]:
            fo.write(f"  \'{str(timestamp)}\',\n")
        fo.write("];\n\n")

        # Write Mac Addresses
        fo.write("const macAddrs = [\n")
        for macAddr in deviceStats["macAddrs"]:
            fo.write(f"  \'{str(macAddr)}\',\n")
        fo.write("];\n")

    logger.info(
        "Successfully summarized the scan results to the JS file.")


if __name__ == "__main__":
    wrapper()
