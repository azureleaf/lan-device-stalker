import subprocess
import psutil
import re


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

    # convert multiline str into list
    devices = []
    for line in scan_result.splitlines():

        # extract lines which has IP data, thereby remove unnecessary lines
        if re.match(r'192', line) is not None:
            # convert tab-deliminated items into array,
            #   then remove whitespaces
            device = [x.strip() for x in line.split("\t")]
            devices.append(device)

    return devices


def wrapper():
    interface = get_interface()
    devices = get_devices(interface)
    print(devices)


if __name__ == "__main__":
    wrapper()
