from scapy.all import srp, Ether, ARP, scapy


def get_interface():
    for network, netmask, gateway, interface, output_ip, metric \
            in scapy.config.conf.route.routes:
        print(interface, output_ip)


def ip2mac(ip_addr, mac_list):
    ans, unans = srp(
        Ether(dst="ff:ff:ff:ff:ff:ff")/ARP(pdst=ip_addr),
        timeout=0.5,
        retry=0)
    for s, r in ans:
        mac_list.append(r[Ether].src)
    return mac_list


def wrapper():
    get_interface()

    mac_list = []
    for num in range(0, 10):
        mac_list = ip2mac("192.168.22." + str(num), mac_list)
    print("list", mac_list)


if __name__ == "__main__":
    wrapper()
