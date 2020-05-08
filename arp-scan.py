import subprocess
import psutil
import re
import socket
import sqlalchemy as db
from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData
from datetime import datetime


def get_interface():
    addrs = psutil.net_if_addrs()
    interfaces = addrs.keys()
    for interface in interfaces:
        # Ignore loopback & docker
        if "docker" not in interface and "lo" not in interface:
            return interface


def get_devices(interface):
    """ Get list of devices on the LAN, then record it to database
    """

    # run shell command of this computer
    cmd = subprocess.Popen(
        ["sudo", "arp-scan", "-l", "-q", "-I", interface],
        stdout=subprocess.PIPE)
    scan_result = cmd.communicate()[0]

    devices = format_arp_scan_result(str(scan_result))

    return devices


def format_arp_scan_result(scan_result):

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


def save_to_db(new_devices, db_path):
    engine = create_engine(db_path)
    conn = engine.connect()
    meta = MetaData(engine)
    devices = Table('devices', meta,
                    Column('id', Integer, primary_key=True),
                    Column('ip_addr', String),
                    Column('mac_addr', String),
                    Column('created_at', String)
                    )
    if not engine.dialect.has_table(engine, "devices"):
        meta.create_all(engine)
        print("DB created.")

    query = db.insert(devices)
    ResultProxy = conn.execute(query, new_devices)

    results = conn.execute(db.select([devices])).fetchall()
    return results


def wrapper():
    interface = get_interface()
    devices = get_devices(interface)
    save_to_db(devices, "sqlite:///devices.db")


if __name__ == "__main__":
    wrapper()
