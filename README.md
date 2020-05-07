# Lan Device Stalker

Periodically scan MAC addresses of the devices on the same local LAN

## ToC

- [Lan Device Stalker](#lan-device-stalker)
  - [ToC](#toc)
  - [Dev Notes](#dev-notes)
  - [About Scapy](#about-scapy)
    - [Interactive Shell](#interactive-shell)
  - [Terms](#terms)
  - [Review TCP/IP](#review-tcpip)

## Dev Notes

1. `pipenv shell`
2. `pipenv install`

## About Scapy

### Interactive Shell

```sh
pipenv install --pre scapy[basic]
sudo $(pipenv --venv)"/bin/scapy"
conf.color_theme = BrightTheme()
IP().show()
```

## Terms

MISC

- Netmask
- CIDR: Classless inter-domain routing
- Frame
- 802.11 Frame
- VLAN hopping
- ARP cache poisoning
- VOIP decoding
- WEP encrypted channel
- TTL: Time-to-live
- MTU: Maximum Transmission Unit
- Unix Domain Socket
- IPC: Interprocess Communication

Tools

- nmap
- tcpdump

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

## Review TCP/IP

Layers

- 4. Application Layer
  - HTTP
  - SMTP: Send mails to the mail servers of the recipient
  - IMAP: Get copy of mails from the mail server
  - POP3: Get mails from the mail server; no copy left on the server
  - DNS
  - DHCP
  - FTP
  - RIP
  - SNMP
  - TLS/SSL
  - Telnet
  - SSH
- 3. Transport Layer
  - TCP: Reliable
  - UDP: Fast
  - SCTP
- 2. Internet Layer (aka Network Layer)
  - IP
  - ARP
  - ICMP
- 1. Network Interface Layer (aka Network Access Layer / Link Layer)
  - Ethernet
  - PPP

Example

- 4. Application layer
  - HTTP Message Body +  HTTP header = Application Data
- 3. Transport layer
  - Application data is segmented into small parts
  - A partial data + TCP header = Segment
- 2. Internet layer
  - Every segment + IP header = Packet (for TCP, and "Datagram" for UDP, maybe?)
- 1. Network Interface Layer
  - Every packet + Frame Trailer + Frame Header = Frame

Application Layer - Transport Layer

- DHCP uses UDP

Three-way Handshake


DHCP

- DISCOVER ->
- OFFER <-
- REQUEST ->
- ACK, NAK <-

IPv4 vs Ipv6

Port Number

