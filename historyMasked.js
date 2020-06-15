const recordsByDevice = [
  {'mac_addr': 'Device #00000 (f8:a2:d6:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169']},
  {'mac_addr': 'Device #00001 (f8:62:14:xx:xx:xx)', 'occ': ['2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00002 (f8:2d:7c:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:30:01.981902', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00003 (ec:5c:68:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00004 (ec:5c:68:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 14:30:01.997997', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572']},
  {'mac_addr': 'Device #00005 (d8:3b:bf:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00006 (d8:3b:bf:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094']},
  {'mac_addr': 'Device #00007 (d4:38:9c:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00008 (d4:38:9c:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00009 (b0:19:c6:xx:xx:xx)', 'occ': ['2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461']},
  {'mac_addr': 'Device #00010 (a8:b8:6e:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00011 (a8:b2:da:xx:xx:xx)', 'occ': ['2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032']},
  {'mac_addr': 'Device #00012 (a4:d1:d2:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00013 (a4:83:e7:xx:xx:xx)', 'occ': ['2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461']},
  {'mac_addr': 'Device #00014 (9c:5c:f9:xx:xx:xx)', 'occ': ['2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169']},
  {'mac_addr': 'Device #00015 (98:54:1b:xx:xx:xx)', 'occ': ['2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00016 (96:e9:f8:xx:xx:xx)', 'occ': ['2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00017 (94:e9:79:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075']},
  {'mac_addr': 'Device #00018 (94:0c:98:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 13:15:02.004461', '2020-06-12 11:00:01.964085', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00019 (90:dd:5d:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00020 (90:94:97:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997']},
  {'mac_addr': 'Device #00021 (90:61:ae:xx:xx:xx)', 'occ': ['2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546']},
  {'mac_addr': 'Device #00022 (88:15:44:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00023 (7c:94:2a:xx:xx:xx)', 'occ': ['2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00024 (7c:76:35:xx:xx:xx)', 'occ': ['2020-06-11 12:00:02.146504', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122']},
  {'mac_addr': 'Device #00025 (7c:76:35:xx:xx:xx)', 'occ': ['2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781']},
  {'mac_addr': 'Device #00026 (7c:76:35:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122']},
  {'mac_addr': 'Device #00027 (7c:76:35:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094']},
  {'mac_addr': 'Device #00028 (7c:76:35:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00029 (7c:76:35:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00030 (7c:76:35:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00031 (7c:76:35:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00032 (70:ef:00:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00033 (70:8b:cd:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00034 (64:b0:a6:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546']},
  {'mac_addr': 'Device #00035 (60:14:b3:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00036 (60:14:b3:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00037 (60:14:b3:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00038 (60:14:b3:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00039 (40:a3:cc:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00040 (3c:91:80:xx:xx:xx)', 'occ': ['2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282']},
  {'mac_addr': 'Device #00041 (3c:91:80:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00042 (38:89:2c:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00043 (38:78:62:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00044 (2c:59:8a:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00045 (20:3c:ae:xx:xx:xx)', 'occ': ['2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00046 (18:56:80:xx:xx:xx)', 'occ': ['2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00047 (14:a5:1a:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00048 (00:be:3b:xx:xx:xx)', 'occ': ['2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997']},
  {'mac_addr': 'Device #00049 (00:26:73:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
  {'mac_addr': 'Device #00050 (00:02:2b:xx:xx:xx)', 'occ': ['2020-06-10 11:30:01.982251', '2020-06-10 11:45:02.033700', '2020-06-10 11:45:02.033700', '2020-06-10 12:00:02.002495', '2020-06-10 12:15:02.005417', '2020-06-10 12:30:01.997164', '2020-06-10 12:45:02.016560', '2020-06-10 13:00:01.988075', '2020-06-10 13:15:01.992882', '2020-06-10 13:30:02.026546', '2020-06-11 12:00:02.146504', '2020-06-11 12:15:02.008822', '2020-06-11 12:30:02.141849', '2020-06-11 12:45:01.949547', '2020-06-11 13:00:02.066187', '2020-06-11 13:15:02.004461', '2020-06-11 13:30:01.981902', '2020-06-11 13:45:02.025558', '2020-06-11 14:00:02.158032', '2020-06-11 14:15:02.009487', '2020-06-11 14:30:01.997997', '2020-06-12 10:30:02.129957', '2020-06-12 10:45:01.994282', '2020-06-12 10:45:01.994282', '2020-06-12 11:00:01.964085', '2020-06-12 11:15:02.003369', '2020-06-12 11:30:01.955781', '2020-06-12 11:45:01.904572', '2020-06-12 12:00:01.992122', '2020-06-12 12:15:01.992094', '2020-06-12 12:30:02.012177', '2020-06-12 12:45:02.016169', '2020-06-12 13:00:02.000655']},
];

const timestamps = [
  '2020-06-10 11:30:01.982251',
  '2020-06-10 11:45:02.033700',
  '2020-06-10 12:00:02.002495',
  '2020-06-10 12:15:02.005417',
  '2020-06-10 12:30:01.997164',
  '2020-06-10 12:45:02.016560',
  '2020-06-10 13:00:01.988075',
  '2020-06-10 13:15:01.992882',
  '2020-06-10 13:30:02.026546',
  '2020-06-11 12:00:02.146504',
  '2020-06-11 12:15:02.008822',
  '2020-06-11 12:30:02.141849',
  '2020-06-11 12:45:01.949547',
  '2020-06-11 13:00:02.066187',
  '2020-06-11 13:15:02.004461',
  '2020-06-11 13:30:01.981902',
  '2020-06-11 13:45:02.025558',
  '2020-06-11 14:00:02.158032',
  '2020-06-11 14:15:02.009487',
  '2020-06-11 14:30:01.997997',
  '2020-06-12 10:30:02.129957',
  '2020-06-12 10:45:01.994282',
  '2020-06-12 11:00:01.964085',
  '2020-06-12 11:15:02.003369',
  '2020-06-12 11:30:01.955781',
  '2020-06-12 11:45:01.904572',
  '2020-06-12 12:00:01.992122',
  '2020-06-12 12:15:01.992094',
  '2020-06-12 12:30:02.012177',
  '2020-06-12 12:45:02.016169',
  '2020-06-12 13:00:02.000655',
];

const macAddrs = [
  'Device #00000 (f8:a2:d6:xx:xx:xx)',
  'Device #00001 (f8:62:14:xx:xx:xx)',
  'Device #00002 (f8:2d:7c:xx:xx:xx)',
  'Device #00003 (ec:5c:68:xx:xx:xx)',
  'Device #00004 (ec:5c:68:xx:xx:xx)',
  'Device #00005 (d8:3b:bf:xx:xx:xx)',
  'Device #00006 (d8:3b:bf:xx:xx:xx)',
  'Device #00007 (d4:38:9c:xx:xx:xx)',
  'Device #00008 (d4:38:9c:xx:xx:xx)',
  'Device #00009 (b0:19:c6:xx:xx:xx)',
  'Device #00010 (a8:b8:6e:xx:xx:xx)',
  'Device #00011 (a8:b2:da:xx:xx:xx)',
  'Device #00012 (a4:d1:d2:xx:xx:xx)',
  'Device #00013 (a4:83:e7:xx:xx:xx)',
  'Device #00014 (9c:5c:f9:xx:xx:xx)',
  'Device #00015 (98:54:1b:xx:xx:xx)',
  'Device #00016 (96:e9:f8:xx:xx:xx)',
  'Device #00017 (94:e9:79:xx:xx:xx)',
  'Device #00018 (94:0c:98:xx:xx:xx)',
  'Device #00019 (90:dd:5d:xx:xx:xx)',
  'Device #00020 (90:94:97:xx:xx:xx)',
  'Device #00021 (90:61:ae:xx:xx:xx)',
  'Device #00022 (88:15:44:xx:xx:xx)',
  'Device #00023 (7c:94:2a:xx:xx:xx)',
  'Device #00024 (7c:76:35:xx:xx:xx)',
  'Device #00025 (7c:76:35:xx:xx:xx)',
  'Device #00026 (7c:76:35:xx:xx:xx)',
  'Device #00027 (7c:76:35:xx:xx:xx)',
  'Device #00028 (7c:76:35:xx:xx:xx)',
  'Device #00029 (7c:76:35:xx:xx:xx)',
  'Device #00030 (7c:76:35:xx:xx:xx)',
  'Device #00031 (7c:76:35:xx:xx:xx)',
  'Device #00032 (70:ef:00:xx:xx:xx)',
  'Device #00033 (70:8b:cd:xx:xx:xx)',
  'Device #00034 (64:b0:a6:xx:xx:xx)',
  'Device #00035 (60:14:b3:xx:xx:xx)',
  'Device #00036 (60:14:b3:xx:xx:xx)',
  'Device #00037 (60:14:b3:xx:xx:xx)',
  'Device #00038 (60:14:b3:xx:xx:xx)',
  'Device #00039 (40:a3:cc:xx:xx:xx)',
  'Device #00040 (3c:91:80:xx:xx:xx)',
  'Device #00041 (3c:91:80:xx:xx:xx)',
  'Device #00042 (38:89:2c:xx:xx:xx)',
  'Device #00043 (38:78:62:xx:xx:xx)',
  'Device #00044 (2c:59:8a:xx:xx:xx)',
  'Device #00045 (20:3c:ae:xx:xx:xx)',
  'Device #00046 (18:56:80:xx:xx:xx)',
  'Device #00047 (14:a5:1a:xx:xx:xx)',
  'Device #00048 (00:be:3b:xx:xx:xx)',
  'Device #00049 (00:26:73:xx:xx:xx)',
  'Device #00050 (00:02:2b:xx:xx:xx)',
];
