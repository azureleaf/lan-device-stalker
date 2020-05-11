# Lan Device Stalker

Periodically scan MAC addresses of the devices on the same local LAN

## ToC

- [Lan Device Stalker](#lan-device-stalker)
  - [ToC](#toc)
  - [Run](#run)
    - [(alternative) Scan with Scapy](#alternative-scan-with-scapy)
  - [Reference](#reference)
  - [About Scapy](#about-scapy)
    - [Interactive Shell](#interactive-shell)
  - [Terms](#terms)
  - [Review TCP/IP](#review-tcpip)
    - [Layers](#layers)
    - [Example: HTTP-TCP-IP](#example-http-tcp-ip)
    - [TCP Header](#tcp-header)
    - [UDP Datagram Header](#udp-datagram-header)
    - [IPv4 Header](#ipv4-header)
    - [Protocol Combination](#protocol-combination)
    - [Three-way Handshake](#three-way-handshake)
    - [DHCP](#dhcp)
    - [IPv4 vs Ipv6](#ipv4-vs-ipv6)
    - [Port Number](#port-number)

## Run

1. `sudo apt install arp-scan`
   - You need to install arp-scan in your local env
2. `pipenv shell`
3. `pipenv install`
4. `sudo $(PIPENV_IGNORE_VIRTUALENVS=1 pipenv --venv)/bin/python3 arp-scan.py`
   - Scapy requires `sudo`, however you can't use `sudo python3 app.py` with pipenv
   - Therefore you need to specify the Python of the pipenv directly

### (alternative) Scan with Scapy

This script is like `arp-can.py`, but only can retrieve MAC address of devices. Seemingly `arp-scan` is much faster than this script.

1. `sudo $(PIPENV_IGNORE_VIRTUALENVS=1 pipenv --venv)/bin/python3 scapy-scan.py`

## Reference

- MAC address vendor list: https://macaddress.io/database-download

## About Scapy

### Interactive Shell

```sh
pipenv install --pre scapy[basic]
sudo $(PIPENV_IGNORE_VIRTUALENVS=1 pipenv --venv)"/bin/scapy"
conf.color_theme = BrightTheme()
IP().show()
```

## Terms

MISC

- 802.11 Frame
- ARP cache poisoning
- VOIP decoding
- WEP encrypted channel
- MTU: Maximum Transmission Unit
- Unix Domain Socket
- IPC: Interprocess Communication

Tools

- nmap
- tcpdump
- arping
- ping

Protocols

- TCP
- IP
- SCTP
  - Like TCP & UDP, SCTP is a transport layer protocol
- PROFINET

Manipulations

- Scanning
- Sniffing
- Fingerprinting
- Packet Forging

Hopping

- Hop Count
- TTL: Time-to-live
- Hop Limit
- VLAN hopping
- Next Hop

## Review TCP/IP

### Layers

- 4 Application Layer
  - HTTP
  - SMTP: Send mails to the mail servers of the recipient
  - IMAP: Get copy of mails from the mail server
  - POP3: Get mails from the mail server; no copy left on the server
  - DNS
  - DHCP
  - FTP
  - RIP: Routing. Find the shortest route by hop count
  - SNMP
  - TLS/SSL
  - Telnet
  - SSH
- 3 Transport Layer
  - TCP: Reliable, Bilateral
  - UDP: Efficient, Unilateral
- 2 Internet Layer (aka Network Layer)
  - IP: (Send IP Packet)
  - ARP
  - NDP
  - ICMP: (Send IP packet)
  - ICMPv6: (Send IP Packet)
  - OSPF: (Send IP Packet) Routing for IP
- 1 Network Interface Layer (aka Network Access Layer / Link Layer)
  - Ethernet
  - PPP

### Example: HTTP-TCP-IP

- 4 Application layer
  - HTTP Message Body + HTTP header = Application Data
- 3 Transport layer
  - Application data is segmented into small parts
  - A segmented data + TCP header = A Segment
- 2 Internet layer
  - (A segment) + (IP header) = (Packet)
  - THe name "Packet" is for TCP, and "Datagram" is for UDP, maybe?
  - A Packet is fragmented into small fragments
  - Every fragmented packets has copy of original IP header
  - (IP Header Size) + (Fragment size) = (MTU) ~= (Max frame size of the network access layer)
- 1 Network Interface Layer
  - (A packet fragment) + (Frame Trailer) + (Frame Header) = (Frame)

### TCP Header

- Source Port
- Destination Port
- Sequence Number
- Acknowledgment Number
- URG (urgent): rarely used
- ACK (acknowledgment): on for all the packet but the 1st packet
- PSH (push): rarely used
- RST (reset): reject / abort TCP connection
- SYN (synchronize): request TCP connection
- FIN (finish): tell that this is the last packet

### UDP Datagram Header

UDP header is quite simple

- Source Port: Specify sender application
- Destination Port: Specify recipient application
- Length
- Checksum

### IPv4 Header

- Identification: All the fragments from the same packet shares the identical ID
- Fragment Offset: Tell the position of the packet fragment in the entire packet
- TTL
- Protocol: Tell the protocol number of transport layer
  - e.g. TCP, UDP
  - However, ICMP & OSPF protocol (both are Internet layer) also has the number here; because these 2 uses also IP packet and it's not recognizable without the number
- Source IP Address
- Destination IP Address

### Protocol Combination

- (DNS DHCP) uses UDP

### Three-way Handshake

1. SYN ->
   - SYN_SENT
2. <- ACK + SYN
   - SYN_RECEIVED
3. ACK ->
   - ESTABLISHED

### DHCP

1. DISCOVER ->
1. <- OFFER
1. REQUEST ->
1. <- ACK, NAK

### IPv4 vs Ipv6

- Netmask
- CIDR: Classless inter-domain routing
-

### Port Number
