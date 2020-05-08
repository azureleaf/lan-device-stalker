import subprocess
import psutil
import re
import socket
import sqlalchemy as db
from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData
from datetime import datetime


def get_interface():
    '''
    Scan network interfaces, return name of the active valid one
    '''
    addrs = psutil.net_if_addrs()
    interfaces = addrs.keys()
    for interface in interfaces:
        # Ignore loopback & docker
        if "docker" not in interface and "lo" not in interface:
            return interface


def get_devices(interface):
    '''
    Get list of devices on the LAN, then record it to database
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
    '''

    # turn plain string \t \n into actual tab & line break
    scan_result = re.sub(r'\\t', r'\t', scan_result)
    scan_result = re.sub(r'\\n', r'\n', scan_result)

    now = str(datetime.now())

    # convert multiline str into list,
    # then extract the lines of IP addrs & MAC addrs
    devices = []
    for line in scan_result.splitlines():
        # convert tab-deliminated items into array,
        # then remove whitespaces
        words = [x.strip() for x in line.split("\t")]
        if len(words[0].split(".")) == 4:
            # check if the string has the valid IPv4 format
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


def save_to_db(new_devices, db_path, devices):
    engine = create_engine(db_path)
    conn = engine.connect()
    meta = MetaData(engine)

    if not engine.dialect.has_table(engine, "devices"):
        meta.create_all(engine)
        print("DB created.")

    query = db.insert(devices)
    conn.execute(query, new_devices)


def summarize_db(db_path, devices):
    """
    Check the records of devices responded to ARP-SCAN,
    return occurences summary of every device
    """
    engine = create_engine(db_path)
    conn = engine.connect()

    # Fetch all the mac addresses
    query = db.select([devices.columns.mac_addr.distinct()]
                      ).order_by(db.desc(devices.columns.mac_addr))
    mac_addrs = conn.execute(query).fetchall()

    # Get occurences of every device
    devices_occs = []  # Occurences of all the devices
    for mac_addr in mac_addrs:
        query = db.select([devices]) \
            .where(devices.columns.mac_addr == mac_addr.mac_addr) \
            .order_by(db.desc(devices.columns.created_at))
        # Occurence of this device
        device_occs = conn.execute(query).fetchall()

        devices_occs.append({
            "mac_addr": mac_addr.mac_addr,
            "occ": [device_occ.created_at for device_occ in device_occs]
        })

    return devices_occs


def wrapper(isScanMode=False):
    db_path = "sqlite:///devices.db"

    # define the table
    engine = create_engine(db_path)
    meta = MetaData(engine)
    devices_table = Table('devices', meta,
                          Column('id', Integer, primary_key=True),
                          Column('ip_addr', String),
                          Column('mac_addr', String),
                          Column('created_at', String)
                          )

    if isScanMode is True:
        interface = get_interface()
        devices = get_devices(interface)
        save_to_db(devices, db_path, devices_table)
        return

    summary = summarize_db(db_path, devices_table)
    print(summary)
    return summary


if __name__ == "__main__":
    wrapper()
