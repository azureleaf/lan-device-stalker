import subprocess
import psutil


def get_interface():
    addrs = psutil.net_if_addrs()
    interfaces = addrs.keys()
    for interface in interfaces:
        # Ignore loopback & docker
        if "docker" not in interface and "lo" not in interface:
            return interface


def get_devices_list(interface):
    """ Get list of devices on the LAN, then record it to database
    """

    # run shell command of this computer
    test = subprocess.Popen(
        ["sudo", "arp-scan", "-l", "-I", interface],
        stdout=subprocess.PIPE)
    output = test.communicate()[0]
    return str(output)


def wrapper():
    interface = get_interface()
    result = get_devices_list(interface)
    print(result)


if __name__ == "__main__":
    wrapper()
