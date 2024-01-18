var so_viewer = (function (exports) {
    'use strict';

    const win_10_chrome_92_host = '{"type":"offer","sdp":"v=0\r\no=- 1199580080461629164 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 59267 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:2254048910 1 udp 2122262783 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 59265 typ host generation 0 network-id 2\r\na=candidate:794956039 1 udp 2122197247 2601:645:8400:6c20::a610 59266 typ host generation 0 network-id 3\r\na=candidate:1191081017 1 udp 2122129151 10.0.0.163 59267 typ host generation 0 network-id 1\r\na=candidate:3293969885 1 udp 2122063615 172.18.80.1 59268 typ host generation 0 network-id 4\r\na=candidate:3282507946 1 udp 2121998079 172.30.0.1 59269 typ host generation 0 network-id 5\r\na=candidate:3423470964 1 udp 2121932543 172.21.32.1 59270 typ host generation 0 network-id 6\r\na=candidate:2782917333 1 udp 1685921535 73.162.196.213 59267 typ srflx raddr 10.0.0.163 rport 59267 generation 0 network-id 1\r\na=candidate:3369726590 1 tcp 1518283007 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 9 typ host tcptype active generation 0 network-id 2\r\na=candidate:1642196471 1 tcp 1518217471 2601:645:8400:6c20::a610 9 typ host tcptype active generation 0 network-id 3\r\na=candidate:142444745 1 tcp 1518149375 10.0.0.163 9 typ host tcptype active generation 0 network-id 1\r\na=candidate:2329280813 1 tcp 1518083839 172.18.80.1 9 typ host tcptype active generation 0 network-id 4\r\na=candidate:2368005210 1 tcp 1518018303 172.30.0.1 9 typ host tcptype active generation 0 network-id 5\r\na=candidate:2190342532 1 tcp 1517952767 172.21.32.1 9 typ host tcptype active generation 0 network-id 6\r\na=ice-ufrag:h2zg\r\na=ice-pwd:rLDrcPyQHODnE5SBbDM0vAHf\r\na=fingerprint:sha-256 F2:7A:3A:54:09:D3:6B:62:39:A2:21:5E:87:92:12:90:7C:D9:9C:F6:CC:9B:A4:62:BD:99:59:18:88:F7:92:BD\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', win_10_chrome_92_client = '{"type":"answer","sdp":"v=0\r\no=- 3117966035669467040 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 53878 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 10.0.0.163\r\na=candidate:2254048910 1 udp 2122262783 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 53876 typ host generation 0 network-id 2\r\na=candidate:794956039 1 udp 2122197247 2601:645:8400:6c20::a610 53877 typ host generation 0 network-id 3\r\na=candidate:1191081017 1 udp 2122129151 10.0.0.163 53878 typ host generation 0 network-id 1\r\na=candidate:3293969885 1 udp 2122063615 172.18.80.1 53879 typ host generation 0 network-id 4\r\na=candidate:3282507946 1 udp 2121998079 172.30.0.1 53880 typ host generation 0 network-id 5\r\na=candidate:3423470964 1 udp 2121932543 172.21.32.1 53881 typ host generation 0 network-id 6\r\na=ice-ufrag:4brc\r\na=ice-pwd:2RICOsokE48Lr55/YhAD+Bsn\r\na=fingerprint:sha-256 EA:B3:7F:DB:E4:2A:E8:42:5E:E4:99:74:FB:B6:11:5F:95:DF:50:03:9C:21:FA:22:9F:DC:70:61:42:AA:0A:CD\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', win_10_edge_92_host = '{"type":"offer","sdp":"v=0\r\no=- 6739192461737761423 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 57122 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:1191081017 1 udp 2113937151 849e395b-6ab1-47fa-b916-23570842e255.local 57122 typ host generation 0 network-cost 999\r\na=candidate:2254048910 1 udp 2113939711 356e97de-f36d-41e4-8f1f-689025403a0a.local 57123 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 73.162.196.213 57122 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:UnGC\r\na=ice-pwd:o+OTq5G3XG3OZTo95MpYZ2Uv\r\na=fingerprint:sha-256 D9:0A:41:AF:96:AD:8D:4D:92:99:F6:4F:00:2A:A6:D9:CC:4A:66:C7:41:73:91:36:27:AA:F2:D3:83:B7:96:4E\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', win_10_edge_92_client = '{"type":"answer","sdp":"v=0\r\no=- 7915603849260443750 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1191081017 1 udp 2113937151 11e8c070-13e3-4270-9faa-d39303a92c4e.local 55289 typ host generation 0 network-cost 999\r\na=candidate:2254048910 1 udp 2113939711 8aad7c7f-2b5e-426d-9f79-c8e09ed00a57.local 55290 typ host generation 0 network-cost 999\r\na=ice-ufrag:qPHq\r\na=ice-pwd:J3SyqY3dyN7gM4eabGtNWMEl\r\na=fingerprint:sha-256 55:26:A3:DE:C3:39:28:FE:0B:BC:9D:34:2D:2D:9E:C0:82:90:BA:E3:EE:0C:24:88:02:74:38:D8:CC:74:8B:93\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', win_10_ff_90_host = '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 3697521683269937274 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 EE:3F:30:10:5A:DF:03:DB:03:BD:F7:F0:0A:AA:EC:A8:CE:E5:8E:27:2F:D2:C3:98:D5:D0:02:C7:6E:4E:1D:39\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 49715 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:0 1 UDP 2122187007 6e5376c2-8b34-4e8b-b3ad-013226137d7c.local 49715 typ host\r\na=candidate:3 1 UDP 2122252543 65a52bd0-9afc-4644-aeed-71ba737d36f8.local 49716 typ host\r\na=candidate:6 1 TCP 2105458943 6e5376c2-8b34-4e8b-b3ad-013226137d7c.local 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 65a52bd0-9afc-4644-aeed-71ba737d36f8.local 9 typ host tcptype active\r\na=candidate:2 1 UDP 1685986815 73.162.196.213 49715 typ srflx raddr 0.0.0.0 rport 0\r\na=candidate:1 1 UDP 1685987327 73.162.196.213 49715 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:dd7f8829fc1eabc4ee080d8fd7375107\r\na=ice-ufrag:70b33dd9\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', win_10_ff_90_client = '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 4132699980109199001 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 55:03:F5:FC:86:8C:D4:DA:66:C9:8E:A8:48:A2:90:4F:9B:CA:40:20:A4:26:13:EF:11:4B:13:7B:3E:EC:AA:D7\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 53038 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:0 1 UDP 2122187007 3c13a9c1-7c2a-4488-acbb-941b11038490.local 53038 typ host\r\na=candidate:3 1 UDP 2122252543 dd18ee97-62d1-4182-8d9c-bb37c4d81204.local 53039 typ host\r\na=candidate:6 1 TCP 2105458943 3c13a9c1-7c2a-4488-acbb-941b11038490.local 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 dd18ee97-62d1-4182-8d9c-bb37c4d81204.local 9 typ host tcptype active\r\na=candidate:2 1 UDP 1685986815 73.162.196.213 53038 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:310a5c98f47860a105e56e1dd7bed2d6\r\na=ice-ufrag:6db5d205\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', lin_chr_92_host = '{"type":"offer","sdp":"v=0\r\no=- 289338293838051430 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 56494 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 174.76.140.210\r\na=candidate:2124260940 1 udp 2113937151 5aa2112c-8b10-472a-b004-1552ccc8aeb2.local 56494 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 174.76.140.210 56494 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:Y5/M\r\na=ice-pwd:RXGzLLczZGCaCbGpwl7jmogb\r\na=fingerprint:sha-256 8C:6F:89:5E:63:35:D4:4F:23:F3:BB:3D:93:16:7E:52:0F:12:D9:E9:04:87:9A:54:F2:1A:3A:9A:B4:ED:8B:E0\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', lin_chr_92_client = '{"type":"answer","sdp":"v=0\r\no=- 70000675252925255 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 57450 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 174.76.140.210\r\na=candidate:2124260940 1 udp 2113937151 0a84f1cd-ca83-40ef-a739-9741b4e35692.local 57450 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 174.76.140.210 57450 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:x7ol\r\na=ice-pwd:IHaZv0XVPhvI12dHjRZ4hglz\r\na=fingerprint:sha-256 53:E4:1E:59:75:C6:9D:4B:40:10:D4:A2:33:41:62:AE:27:82:A6:B9:66:B1:E6:D2:E7:D0:08:F6:D6:73:CA:D1\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', mac_saf_14_host = '{"type":"offer","sdp":"v=0\r\no=- 7598760969245791746 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=msid-semantic: WMS\r\nm=application 52283 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1889231604 1 udp 2113937151 df01c2bb-ec48-4b45-9a3a-2b0035e4af35.local 52283 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 71.202.120.145 52283 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:2xNs\r\na=ice-pwd:zMt6+BOpWZBZtoByUEvVzaTV\r\na=fingerprint:sha-256 6A:38:D2:22:3A:37:30:FB:FD:BB:D9:2D:03:16:86:92:B8:2E:7B:5C:19:A0:07:87:76:94:42:8B:69:19:78:CD\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', mac_saf_14_client = '{"type":"answer","sdp":"v=0\r\no=- 4209347552723437851 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=msid-semantic: WMS\r\nm=application 60482 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\nb=AS:30\r\na=candidate:1889231604 1 udp 2113937151 2944e419-e8e0-4cd6-ad95-fdc604568fc0.local 60482 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 71.202.120.145 60482 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:tatN\r\na=ice-pwd:m5a4KagaVEyy5hlkYu8v9BOU\r\na=fingerprint:sha-256 52:4B:3F:3C:31:7C:03:DA:07:CE:2B:72:03:47:3C:DC:80:98:DE:3E:05:CF:EA:CF:EA:70:05:B0:F1:35:2D:E6\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', mac_chrome_92_host = '{"type":"offer","sdp":"v=0\r\no=- 6764666962177986141 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 63239 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 71.202.120.145\r\na=candidate:1889231604 1 udp 2113937151 e1164bca-b76a-4485-9abb-1e80551037c5.local 63239 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 71.202.120.145 63239 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:xhDx\r\na=ice-pwd:ROMAYuF1l6IsYoHwN9+9pQDy\r\na=fingerprint:sha-256 6C:20:DB:65:F1:17:D2:B4:B9:21:CD:73:86:69:CE:99:5D:98:01:36:B8:2B:60:AF:7A:06:AE:03:1F:86:66:40\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', mac_chrome_92_client = '{"type":"answer","sdp":"v=0\r\no=- 4226377727938899149 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 54414 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 71.202.120.145\r\na=candidate:1889231604 1 udp 2113937151 6b13d8ce-9ef1-45e3-9a5a-e6274c9aef13.local 54414 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 71.202.120.145 54414 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:R0fi\r\na=ice-pwd:biCmik4OpSuDAhhUBVKaHqOS\r\na=fingerprint:sha-256 9A:EF:BC:44:7B:5F:87:A6:F6:C7:19:EA:C9:0E:3E:BA:C5:63:34:B6:6D:7D:64:AA:D6:FB:84:29:F4:51:B2:AA\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}', mac_ff_90_host = '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 8780481601018288030 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 F2:36:08:79:70:A1:DE:CA:CA:51:36:9A:41:CE:BB:0A:44:AE:E1:E2:25:E6:DF:64:8D:12:F7:F7:63:4F:3D:88\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 58762 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122187007 afc4ef6d-f4c9-b346-818a-71edb74dc5c5.local 58762 typ host\r\na=candidate:3 1 UDP 2122252543 f2bbb2c3-37a1-ba4a-a7da-2b6117683fec.local 62057 typ host\r\na=candidate:6 1 TCP 2105458943 afc4ef6d-f4c9-b346-818a-71edb74dc5c5.local 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 f2bbb2c3-37a1-ba4a-a7da-2b6117683fec.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1685987327 84.60.72.107 58762 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:7a9acb1e1b8628b0326baa18fa5b0041\r\na=ice-ufrag:2f1da5f8\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', mac_ff_90_client = '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 5013133426580299668 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 B0:7F:14:FB:0C:70:6C:28:96:9F:AF:41:72:B2:A9:81:E0:9F:87:E3:A9:65:23:3D:CD:5D:62:1C:E3:37:F0:EC\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 59170 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122252543 84a78e7e-fe7a-7445-b8b5-2a579cbd5515.local 59170 typ host\r\na=candidate:3 1 TCP 2105524479 84a78e7e-fe7a-7445-b8b5-2a579cbd5515.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 84.60.72.107 59170 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:1d16f1682e70a195cc64c3ba2081b252\r\na=ice-ufrag:8042d877\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', lin_ff_90_host = '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-89.0 769404315534291318 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 61:A1:BD:55:C8:30:21:8E:F2:F6:6E:62:2B:AF:DF:AC:85:15:A3:6A:0D:CD:C4:D0:61:E5:C4:D6:C8:B0:5D:23\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 51652 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122187007 221ef227-2e49-4a0b-9b9d-dc8b767523e6.local 51652 typ host\r\na=candidate:3 1 UDP 2122252543 cb0e3d2b-6e98-486d-ae12-20ab92a74a80.local 34432 typ host\r\na=candidate:6 1 TCP 2105458943 221ef227-2e49-4a0b-9b9d-dc8b767523e6.local 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 cb0e3d2b-6e98-486d-ae12-20ab92a74a80.local 9 typ host tcptype active\r\na=candidate:2 1 UDP 1685986815 84.60.72.107 51652 typ srflx raddr 0.0.0.0 rport 0\r\na=candidate:1 1 UDP 1685987327 84.60.72.107 51652 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=ice-pwd:45b553d8a70d0f196317ec012348783c\r\na=ice-ufrag:5f0c2509\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', lin_ff_90_client = '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-89.0 9027965011613987778 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 AE:37:2B:B6:5C:64:77:00:BD:B2:2A:42:04:4D:7D:D5:FA:E8:03:2B:AF:AB:61:83:F9:17:C0:9E:96:F3:6D:81\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 49985 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122252543 d858bb58-9126-49f0-b2df-45d186e2b0bb.local 49985 typ host\r\na=candidate:3 1 TCP 2105524479 d858bb58-9126-49f0-b2df-45d186e2b0bb.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 84.60.72.107 49985 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:49160f549b6e0c83480b28be6ed668b6\r\na=ice-ufrag:c366cce3\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', and_chr_92_host = '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.3 8565418902372167288 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 69:EB:13:1C:19:41:41:BC:FE:38:1B:6F:B3:10:C7:44:47:06:8A:FB:8F:A5:43:CB:16:7E:AA:14:08:31:42:5C\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 43674 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122187007 192.168.178.55 43674 typ host\r\na=candidate:3 1 UDP 2122252543 fd00::1198:ca8:1810:db3d 40173 typ host\r\na=candidate:6 1 TCP 2105458943 192.168.178.55 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 fd00::1198:ca8:1810:db3d 9 typ host tcptype active\r\na=candidate:2 1 UDP 1685986815 84.60.72.107 43674 typ srflx raddr 192.168.178.55 rport 43674\r\na=candidate:1 1 UDP 1685987327 84.60.72.107 43674 typ srflx raddr 192.168.178.55 rport 43674\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:5617ec3ca2b73c041dc1a6dff86919e2\r\na=ice-ufrag:3299cfc8\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', and_chr_92_client = '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.3 2597204330739657318 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 F6:B9:48:44:6C:53:20:AC:E1:B1:79:3C:94:24:B4:FD:01:9D:13:C0:FA:32:FB:F8:F5:C5:8C:18:C2:90:04:AA\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 44719 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122252543 192.168.178.55 44719 typ host\r\na=candidate:3 1 TCP 2105524479 192.168.178.55 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 84.60.72.107 44719 typ srflx raddr 192.168.178.55 rport 44719\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:2a5302daa5d8531e366f8f531d8ec2cb\r\na=ice-ufrag:f8513283\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', ubu_ff_90_host = '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 215548880637133052 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 79:D4:BE:13:F2:B8:FC:8D:15:8B:6F:C7:45:65:19:08:1E:E8:D0:CA:79:8A:9B:E7:99:86:BE:A8:EF:02:D2:59\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 55958 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 188.122.86.210\r\na=candidate:0 1 UDP 2122252543 3b3c0941-3280-4426-aeb5-75a146ac1b75.local 55958 typ host\r\na=candidate:3 1 TCP 2105524479 3b3c0941-3280-4426-aeb5-75a146ac1b75.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 188.122.86.210 55958 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:659d23aa30d4506a6121ab02dadde0ac\r\na=ice-ufrag:9b3c1302\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}', ubu_ff_90_client = '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 3403063738421746048 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 7E:27:9B:95:B9:E7:71:CB:66:57:57:BD:33:0C:C3:27:03:8F:23:EE:20:42:5F:5E:15:ED:3B:BA:6F:75:E2:D5\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 56143 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 188.122.86.210\r\na=candidate:0 1 UDP 2122252543 e9063063-af9e-4565-af1b-8540035660ce.local 56143 typ host\r\na=candidate:3 1 TCP 2105524479 e9063063-af9e-4565-af1b-8540035660ce.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 188.122.86.210 56143 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:444d47a3a580dea4dc769fd7472a6fff\r\na=ice-ufrag:f0bc1731\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}';
    const full_set = {
        win_10_chrome_92_client,
        win_10_chrome_92_host,
        win_10_edge_92_client,
        win_10_edge_92_host,
        win_10_ff_90_client,
        win_10_ff_90_host,
        lin_chr_92_host,
        lin_chr_92_client,
        mac_saf_14_host,
        mac_saf_14_client,
        mac_chrome_92_host,
        mac_chrome_92_client,
        mac_ff_90_host,
        mac_ff_90_client,
        lin_ff_90_host,
        lin_ff_90_client,
        and_chr_92_host,
        and_chr_92_client,
        ubu_ff_90_host,
        ubu_ff_90_client
    };

    function peg$subclass$1(child, parent) {
        function ctor() { this.constructor = child; }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
    }
    function peg$SyntaxError$1(message, expected, found, location) {
        this.message = message;
        this.expected = expected;
        this.found = found;
        this.location = location;
        this.name = "SyntaxError";
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, peg$SyntaxError$1);
        }
    }
    peg$subclass$1(peg$SyntaxError$1, Error);
    peg$SyntaxError$1.buildMessage = function (expected, found) {
        var DESCRIBE_EXPECTATION_FNS = {
            literal: function (expectation) {
                return "\"" + literalEscape(expectation.text) + "\"";
            },
            "class": function (expectation) {
                var escapedParts = "", i;
                for (i = 0; i < expectation.parts.length; i++) {
                    escapedParts += expectation.parts[i] instanceof Array
                        ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
                        : classEscape(expectation.parts[i]);
                }
                return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
            },
            any: function (expectation) {
                return "any character";
            },
            end: function (expectation) {
                return "end of input";
            },
            other: function (expectation) {
                return expectation.description;
            }
        };
        function hex(ch) {
            return ch.charCodeAt(0).toString(16).toUpperCase();
        }
        function literalEscape(s) {
            return s
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function (ch) { return '\\x0' + hex(ch); })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return '\\x' + hex(ch); });
        }
        function classEscape(s) {
            return s
                .replace(/\\/g, '\\\\')
                .replace(/\]/g, '\\]')
                .replace(/\^/g, '\\^')
                .replace(/-/g, '\\-')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function (ch) { return '\\x0' + hex(ch); })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return '\\x' + hex(ch); });
        }
        function describeExpectation(expectation) {
            return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
        }
        function describeExpected(expected) {
            var descriptions = new Array(expected.length), i, j;
            for (i = 0; i < expected.length; i++) {
                descriptions[i] = describeExpectation(expected[i]);
            }
            descriptions.sort();
            if (descriptions.length > 0) {
                for (i = 1, j = 1; i < descriptions.length; i++) {
                    if (descriptions[i - 1] !== descriptions[i]) {
                        descriptions[j] = descriptions[i];
                        j++;
                    }
                }
                descriptions.length = j;
            }
            switch (descriptions.length) {
                case 1:
                    return descriptions[0];
                case 2:
                    return descriptions[0] + " or " + descriptions[1];
                default:
                    return descriptions.slice(0, -1).join(", ")
                        + ", or "
                        + descriptions[descriptions.length - 1];
            }
        }
        function describeFound(found) {
            return found ? "\"" + literalEscape(found) + "\"" : "end of input";
        }
        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };
    function peg$parse(input, options) {
        options = options !== void 0 ? options : {};
        var peg$FAILED = {}, peg$startRuleFunctions = { RawDocument: peg$parseRawDocument }, peg$startRuleFunction = peg$parseRawDocument, peg$c0 = /^[0-9]/, peg$c1 = peg$classExpectation([["0", "9"]], false, false), peg$c2 = function (d) { return BigInt(d.join(''), 10); }, peg$c3 = /^[0-9a-fA-F]/, peg$c4 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false), peg$c5 = function (a, b) { return `${a}${b}`; }, peg$c6 = function (a, b, c, d) { return [a, b, c, d].join(''); }, peg$c7 = function (a, b, c, d, e, f, g, h) { return [a, b, c, d, e, f, g, h].join(''); }, peg$c8 = function (a, b, c, d, e, f, g, h, i, j, k, l) { return [a, b, c, d, e, f, g, h, i, j, k, l].join(''); }, peg$c9 = ":", peg$c10 = peg$literalExpectation(":", false), peg$c11 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F].join(''); }, peg$c12 = /^[0-9a-zA-Z\/+]/, peg$c13 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"], "/", "+"], false, false), peg$c14 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v].join(''); }, peg$c15 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x].join(''); }, peg$c16 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af].join(''); }, peg$c17 = "-", peg$c18 = peg$literalExpectation("-", false), peg$c19 = function (a, b, c, d, e) { return [a, b, c, d, e].join(''); }, peg$c20 = ".", peg$c21 = peg$literalExpectation(".", false), peg$c22 = function (a, b, c, d) { return ((((((a * 256n) + b) * 256n) + c) * 256n) + d).toString(); }, peg$c24 = function (a, b, c, d, e, f, g) { return `${a}:${b}:${c}:${d}:${e}:${f}:${g}`; }, peg$c25 = "::", peg$c26 = peg$literalExpectation("::", false), peg$c27 = function (b, c, d, e, f, g) { return `::${b}:${c}:${d}:${e}:${f}:${g}`; }, peg$c28 = function (b, c, d, e, f) { return `::${b}:${c}:${d}:${e}:${f}`; }, peg$c29 = function (b, c, d, e) { return `::${b}:${c}:${d}:${e}`; }, peg$c30 = function (b, c, d) { return `::${b}:${c}:${d}`; }, peg$c31 = function (b, c) { return `::${b}:${c}`; }, peg$c32 = function (b) { return `::${b}`; }, peg$c33 = function (a, c, d, e, f, g) { return `${a}::${c}:${d}:${e}:${f}:${g}`; }, peg$c34 = function (a, b, d, e, f, g) { return `${a}:${b}::${d}:${e}:${f}:${g}`; }, peg$c35 = function (a, b, c, e, f, g) { return `${a}:${b}:${c}::${e}:${f}:${g}`; }, peg$c36 = function (a, b, c, d, f, g) { return `${a}:${b}:${c}:${d}::${f}:${g}`; }, peg$c37 = function (a, b, c, d, e, g) { return `${a}:${b}:${c}:${d}:${e}::${g}`; }, peg$c38 = function (a, b, c, d, e, f, g) { return `${a}:${b}:${c}:${d}:${e}::${g}`; }, peg$c39 = function (a, b, c, d) { return `${a}${not_null(b)}${not_null(c)}${not_null(d)}`; }, peg$c40 = function (a) { return `${a[0]}:${a[2]}`; }, peg$c41 = "25", peg$c42 = peg$literalExpectation("25", false), peg$c43 = /^[0-5]/, peg$c44 = peg$classExpectation([["0", "5"]], false, false), peg$c45 = "2", peg$c46 = peg$literalExpectation("2", false), peg$c47 = /^[0-4]/, peg$c48 = peg$classExpectation([["0", "4"]], false, false), peg$c49 = "1", peg$c50 = peg$literalExpectation("1", false), peg$c51 = /^[1-9]/, peg$c52 = peg$classExpectation([["1", "9"]], false, false), peg$c53 = "{\"type\":\"offer\",\"sdp\":\"", peg$c54 = peg$literalExpectation("{\"type\":\"offer\",\"sdp\":\"", false), peg$c55 = "\"}", peg$c56 = peg$literalExpectation("\"}", false), peg$c57 = function (s) { return ast('offer', s); }, peg$c58 = "{\"type\":\"answer\",\"sdp\":\"", peg$c59 = peg$literalExpectation("{\"type\":\"answer\",\"sdp\":\"", false), peg$c60 = function (s) { return ast('answer', s); }, peg$c61 = "v=0", peg$c62 = peg$literalExpectation("v=0", false), peg$c63 = function (us) { return ast('version_zero_line', undefined); }, peg$c64 = "v=", peg$c65 = peg$literalExpectation("v=", false), peg$c66 = function (us) { return ast('version_line', us); }, peg$c67 = "a=sendrecv", peg$c68 = peg$literalExpectation("a=sendrecv", false), peg$c69 = function (us) { return ast('a_send_recv', us); }, peg$c70 = "b=AS:30", peg$c71 = peg$literalExpectation("b=AS:30", false), peg$c72 = function () { return ast('b_as_30'); }, peg$c73 = "a=end-of-candidates", peg$c74 = peg$literalExpectation("a=end-of-candidates", false), peg$c75 = function (us) { return ast('a_end_of_candidates', us); }, peg$c76 = "a=msid-semantic:WMS", peg$c77 = peg$literalExpectation("a=msid-semantic:WMS", false), peg$c78 = function () { return ast('a_msid_semantic_ns'); }, peg$c79 = "a=msid-semantic:WMS *", peg$c80 = peg$literalExpectation("a=msid-semantic:WMS *", false), peg$c81 = function () { return ast('a_msid_semantic_star_ns'); }, peg$c82 = "a=msid-semantic: WMS", peg$c83 = peg$literalExpectation("a=msid-semantic: WMS", false), peg$c84 = function () { return ast('a_msid_semantic_ws'); }, peg$c85 = "a=extmap-allow-mixed", peg$c86 = peg$literalExpectation("a=extmap-allow-mixed", false), peg$c87 = function () { return ast('a_extmap_allow_mixed'); }, peg$c88 = "a=setup:actpass", peg$c89 = peg$literalExpectation("a=setup:actpass", false), peg$c90 = function () { return ast('a_setup_actpass'); }, peg$c91 = "a=setup:active", peg$c92 = peg$literalExpectation("a=setup:active", false), peg$c93 = function () { return ast('a_setup_active'); }, peg$c94 = "a=mid:0", peg$c95 = peg$literalExpectation("a=mid:0", false), peg$c96 = function () { return ast('a_mid_zero'); }, peg$c97 = "s=-", peg$c98 = peg$literalExpectation("s=-", false), peg$c99 = function () { return ast('s_dash'); }, peg$c100 = function (maj, min, patch) { return ast('moz_v_num', [maj, min, patch]); }, peg$c101 = function (maj, min) { return ast('moz_v_num', [maj, min, undefined]); }, peg$c102 = "o=- ", peg$c103 = peg$literalExpectation("o=- ", false), peg$c104 = " ", peg$c105 = peg$literalExpectation(" ", false), peg$c106 = " IN IP4 ", peg$c107 = peg$literalExpectation(" IN IP4 ", false), peg$c108 = function (msess, d, i) { return ast('standard_origin', [msess, d, i]); }, peg$c109 = "o=mozilla...THIS_IS_SDPARTA-", peg$c110 = peg$literalExpectation("o=mozilla...THIS_IS_SDPARTA-", false), peg$c111 = " 0 IN IP4 0.0.0.0", peg$c112 = peg$literalExpectation(" 0 IN IP4 0.0.0.0", false), peg$c113 = function (mv, msess) { return ast('standard_moz_origin', [mv, msess]); }, peg$c114 = "t=0 0", peg$c115 = peg$literalExpectation("t=0 0", false), peg$c116 = function () { return ast('t_zero_zero'); }, peg$c117 = "a=sctp-port:5000", peg$c118 = peg$literalExpectation("a=sctp-port:5000", false), peg$c119 = function () { return ast('a_standard_sctp_port'); }, peg$c120 = "a=sctp-port:", peg$c121 = peg$literalExpectation("a=sctp-port:", false), peg$c122 = function (data) { return ast('a_custom_sctp_port', data); }, peg$c123 = "a=max-message-size:262144", peg$c124 = peg$literalExpectation("a=max-message-size:262144", false), peg$c125 = function () { return ast('a_standard_max_message_size'); }, peg$c126 = "a=max-message-size:", peg$c127 = peg$literalExpectation("a=max-message-size:", false), peg$c128 = function (data) { return ast('a_custom_max_message_size', data); }, peg$c129 = "a=candidate:", peg$c130 = peg$literalExpectation("a=candidate:", false), peg$c131 = " udp ", peg$c132 = peg$literalExpectation(" udp ", false), peg$c133 = " typ host generation 0 network-id ", peg$c134 = peg$literalExpectation(" typ host generation 0 network-id ", false), peg$c135 = function (d1, d2, d3, i, p, d4) { return ast('standard_local_candidate', [d1, d2, d3, i, p, d4]); }, peg$c136 = ".local ", peg$c137 = peg$literalExpectation(".local ", false), peg$c138 = " typ host generation 0 network-cost 999", peg$c139 = peg$literalExpectation(" typ host generation 0 network-cost 999", false), peg$c140 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate', [d1, d2, d3, g, d4]); }, peg$c141 = " UDP ", peg$c142 = peg$literalExpectation(" UDP ", false), peg$c143 = " typ host", peg$c144 = peg$literalExpectation(" typ host", false), peg$c145 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate_ffus', [d1, d2, d3, g, d4]); }, peg$c146 = " typ srflx raddr ", peg$c147 = peg$literalExpectation(" typ srflx raddr ", false), peg$c148 = " rport ", peg$c149 = peg$literalExpectation(" rport ", false), peg$c150 = " generation ", peg$c151 = peg$literalExpectation(" generation ", false), peg$c152 = " network-cost 999", peg$c153 = peg$literalExpectation(" network-cost 999", false), peg$c154 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_remote_candidate', [d1, d2, d3, i1, d4, i2, d5, d6]); }, peg$c155 = function (d1, d2, d3, i1, d4, i2, d5) { return ast('standard_remote_candidate_ffus', [d1, d2, d3, i1, d4, i2, d5]); }, peg$c156 = " tcp ", peg$c157 = peg$literalExpectation(" tcp ", false), peg$c158 = " typ host tcptype active generation 0 network-id ", peg$c159 = peg$literalExpectation(" typ host tcptype active generation 0 network-id ", false), peg$c160 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c161 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp6_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c162 = " generation 0 network-id ", peg$c163 = peg$literalExpectation(" generation 0 network-id ", false), peg$c164 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_agen_udp4_candidate', [d1, d2, d3, i1, d4, i2, d5, d6]); }, peg$c165 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_udp6_host_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c166 = "a=ice-pwd:", peg$c167 = peg$literalExpectation("a=ice-pwd:", false), peg$c168 = function (data) { return ast('a_ice_pwd', data); }, peg$c169 = function (data) { return ast('a_ice_pwd_l', data); }, peg$c170 = function (data) { return ast('a_ice_pwd_v', data); }, peg$c171 = "a=ice-ufrag:", peg$c172 = peg$literalExpectation("a=ice-ufrag:", false), peg$c173 = function (data) { return ast('a_ice_ufrag_4', data); }, peg$c174 = function (data) { return ast('a_ice_ufrag_8', data); }, peg$c175 = "a=fingerprint:sha-256 ", peg$c176 = peg$literalExpectation("a=fingerprint:sha-256 ", false), peg$c177 = function (data) { return ast('a_fingerprint_sha1_256', data); }, peg$c178 = "a=group:BUNDLE 0", peg$c179 = peg$literalExpectation("a=group:BUNDLE 0", false), peg$c180 = function () { return ast('a_group_bundle_0'); }, peg$c181 = "c=IN IP4 ", peg$c182 = peg$literalExpectation("c=IN IP4 ", false), peg$c183 = function (data) { return ast('c_claim_ip4', data); }, peg$c184 = "m=application ", peg$c185 = peg$literalExpectation("m=application ", false), peg$c186 = " UDP/DTLS/SCTP webrtc-datachannel", peg$c187 = peg$literalExpectation(" UDP/DTLS/SCTP webrtc-datachannel", false), peg$c188 = function (data) { return ast('standard_m_application', data); }, peg$c189 = function (us) { return ast('unknown_line', us); }, peg$c190 = /^[^'\r\n']/, peg$c191 = peg$classExpectation(["'", "\r", "\n", "'"], true, false), peg$c192 = "\r\n", peg$c193 = peg$literalExpectation("\r\n", false), peg$c194 = function (rl) { return rl.join(''); }, peg$c195 = peg$anyExpectation(), peg$c196 = function (uts) { return ast('unknown_terminate', uts.join('')); }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$result;
        if ("startRule" in options) {
            if (!(options.startRule in peg$startRuleFunctions)) {
                throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
            }
            peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
        }
        function location() {
            return peg$computeLocation(peg$savedPos, peg$currPos);
        }
        function peg$literalExpectation(text, ignoreCase) {
            return { type: "literal", text: text, ignoreCase: ignoreCase };
        }
        function peg$classExpectation(parts, inverted, ignoreCase) {
            return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
        }
        function peg$anyExpectation() {
            return { type: "any" };
        }
        function peg$endExpectation() {
            return { type: "end" };
        }
        function peg$computePosDetails(pos) {
            var details = peg$posDetailsCache[pos], p;
            if (details) {
                return details;
            }
            else {
                p = pos - 1;
                while (!peg$posDetailsCache[p]) {
                    p--;
                }
                details = peg$posDetailsCache[p];
                details = {
                    line: details.line,
                    column: details.column
                };
                while (p < pos) {
                    if (input.charCodeAt(p) === 10) {
                        details.line++;
                        details.column = 1;
                    }
                    else {
                        details.column++;
                    }
                    p++;
                }
                peg$posDetailsCache[pos] = details;
                return details;
            }
        }
        function peg$computeLocation(startPos, endPos) {
            var startPosDetails = peg$computePosDetails(startPos), endPosDetails = peg$computePosDetails(endPos);
            return {
                start: {
                    offset: startPos,
                    line: startPosDetails.line,
                    column: startPosDetails.column
                },
                end: {
                    offset: endPos,
                    line: endPosDetails.line,
                    column: endPosDetails.column
                }
            };
        }
        function peg$fail(expected) {
            if (peg$currPos < peg$maxFailPos) {
                return;
            }
            if (peg$currPos > peg$maxFailPos) {
                peg$maxFailPos = peg$currPos;
                peg$maxFailExpected = [];
            }
            peg$maxFailExpected.push(expected);
        }
        function peg$buildStructuredError(expected, found, location) {
            return new peg$SyntaxError$1(peg$SyntaxError$1.buildMessage(expected, found), expected, found, location);
        }
        function peg$parseRawDocument() {
            var s0;
            s0 = peg$parseOffer();
            if (s0 === peg$FAILED) {
                s0 = peg$parseAnswer();
                if (s0 === peg$FAILED) {
                    s0 = peg$parseUnknownTerminatingString();
                }
            }
            return s0;
        }
        function peg$parseDigit() {
            var s0;
            if (peg$c0.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s0 = peg$FAILED;
                {
                    peg$fail(peg$c1);
                }
            }
            return s0;
        }
        function peg$parseDecimal() {
            var s0, s1, s2;
            s0 = peg$currPos;
            s1 = [];
            s2 = peg$parseDigit();
            if (s2 !== peg$FAILED) {
                while (s2 !== peg$FAILED) {
                    s1.push(s2);
                    s2 = peg$parseDigit();
                }
            }
            else {
                s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c2(s1);
            }
            s0 = s1;
            return s0;
        }
        function peg$parseHex() {
            var s0;
            if (peg$c3.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s0 = peg$FAILED;
                {
                    peg$fail(peg$c4);
                }
            }
            return s0;
        }
        function peg$parseHex2() {
            var s0, s1, s2;
            s0 = peg$currPos;
            s1 = peg$parseHex();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseHex();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c5(s1, s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseHex4() {
            var s0, s1, s2, s3, s4;
            s0 = peg$currPos;
            s1 = peg$parseHex();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseHex();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseHex();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseHex();
                        if (s4 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c6(s1, s2, s3, s4);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseHex8() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8;
            s0 = peg$currPos;
            s1 = peg$parseHex();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseHex();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseHex();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseHex();
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseHex();
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseHex();
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseHex();
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseHex();
                                        if (s8 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c7(s1, s2, s3, s4, s5, s6, s7, s8);
                                            s0 = s1;
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseHex12() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
            s0 = peg$currPos;
            s1 = peg$parseHex();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseHex();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseHex();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseHex();
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseHex();
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseHex();
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseHex();
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseHex();
                                        if (s8 !== peg$FAILED) {
                                            s9 = peg$parseHex();
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseHex();
                                                if (s10 !== peg$FAILED) {
                                                    s11 = peg$parseHex();
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseHex();
                                                        if (s12 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c8(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseCHex64() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, s46, s47, s48, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58, s59, s60, s61, s62, s63;
            s0 = peg$currPos;
            s1 = peg$parseHex2();
            if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 58) {
                    s2 = peg$c9;
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c10);
                    }
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseHex2();
                    if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 58) {
                            s4 = peg$c9;
                            peg$currPos++;
                        }
                        else {
                            s4 = peg$FAILED;
                            {
                                peg$fail(peg$c10);
                            }
                        }
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseHex2();
                            if (s5 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 58) {
                                    s6 = peg$c9;
                                    peg$currPos++;
                                }
                                else {
                                    s6 = peg$FAILED;
                                    {
                                        peg$fail(peg$c10);
                                    }
                                }
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseHex2();
                                    if (s7 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 58) {
                                            s8 = peg$c9;
                                            peg$currPos++;
                                        }
                                        else {
                                            s8 = peg$FAILED;
                                            {
                                                peg$fail(peg$c10);
                                            }
                                        }
                                        if (s8 !== peg$FAILED) {
                                            s9 = peg$parseHex2();
                                            if (s9 !== peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                    s10 = peg$c9;
                                                    peg$currPos++;
                                                }
                                                else {
                                                    s10 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c10);
                                                    }
                                                }
                                                if (s10 !== peg$FAILED) {
                                                    s11 = peg$parseHex2();
                                                    if (s11 !== peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                            s12 = peg$c9;
                                                            peg$currPos++;
                                                        }
                                                        else {
                                                            s12 = peg$FAILED;
                                                            {
                                                                peg$fail(peg$c10);
                                                            }
                                                        }
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseHex2();
                                                            if (s13 !== peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                    s14 = peg$c9;
                                                                    peg$currPos++;
                                                                }
                                                                else {
                                                                    s14 = peg$FAILED;
                                                                    {
                                                                        peg$fail(peg$c10);
                                                                    }
                                                                }
                                                                if (s14 !== peg$FAILED) {
                                                                    s15 = peg$parseHex2();
                                                                    if (s15 !== peg$FAILED) {
                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                            s16 = peg$c9;
                                                                            peg$currPos++;
                                                                        }
                                                                        else {
                                                                            s16 = peg$FAILED;
                                                                            {
                                                                                peg$fail(peg$c10);
                                                                            }
                                                                        }
                                                                        if (s16 !== peg$FAILED) {
                                                                            s17 = peg$parseHex2();
                                                                            if (s17 !== peg$FAILED) {
                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                    s18 = peg$c9;
                                                                                    peg$currPos++;
                                                                                }
                                                                                else {
                                                                                    s18 = peg$FAILED;
                                                                                    {
                                                                                        peg$fail(peg$c10);
                                                                                    }
                                                                                }
                                                                                if (s18 !== peg$FAILED) {
                                                                                    s19 = peg$parseHex2();
                                                                                    if (s19 !== peg$FAILED) {
                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                            s20 = peg$c9;
                                                                                            peg$currPos++;
                                                                                        }
                                                                                        else {
                                                                                            s20 = peg$FAILED;
                                                                                            {
                                                                                                peg$fail(peg$c10);
                                                                                            }
                                                                                        }
                                                                                        if (s20 !== peg$FAILED) {
                                                                                            s21 = peg$parseHex2();
                                                                                            if (s21 !== peg$FAILED) {
                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                    s22 = peg$c9;
                                                                                                    peg$currPos++;
                                                                                                }
                                                                                                else {
                                                                                                    s22 = peg$FAILED;
                                                                                                    {
                                                                                                        peg$fail(peg$c10);
                                                                                                    }
                                                                                                }
                                                                                                if (s22 !== peg$FAILED) {
                                                                                                    s23 = peg$parseHex2();
                                                                                                    if (s23 !== peg$FAILED) {
                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                            s24 = peg$c9;
                                                                                                            peg$currPos++;
                                                                                                        }
                                                                                                        else {
                                                                                                            s24 = peg$FAILED;
                                                                                                            {
                                                                                                                peg$fail(peg$c10);
                                                                                                            }
                                                                                                        }
                                                                                                        if (s24 !== peg$FAILED) {
                                                                                                            s25 = peg$parseHex2();
                                                                                                            if (s25 !== peg$FAILED) {
                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                    s26 = peg$c9;
                                                                                                                    peg$currPos++;
                                                                                                                }
                                                                                                                else {
                                                                                                                    s26 = peg$FAILED;
                                                                                                                    {
                                                                                                                        peg$fail(peg$c10);
                                                                                                                    }
                                                                                                                }
                                                                                                                if (s26 !== peg$FAILED) {
                                                                                                                    s27 = peg$parseHex2();
                                                                                                                    if (s27 !== peg$FAILED) {
                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                            s28 = peg$c9;
                                                                                                                            peg$currPos++;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            s28 = peg$FAILED;
                                                                                                                            {
                                                                                                                                peg$fail(peg$c10);
                                                                                                                            }
                                                                                                                        }
                                                                                                                        if (s28 !== peg$FAILED) {
                                                                                                                            s29 = peg$parseHex2();
                                                                                                                            if (s29 !== peg$FAILED) {
                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                    s30 = peg$c9;
                                                                                                                                    peg$currPos++;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    s30 = peg$FAILED;
                                                                                                                                    {
                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                if (s30 !== peg$FAILED) {
                                                                                                                                    s31 = peg$parseHex2();
                                                                                                                                    if (s31 !== peg$FAILED) {
                                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                            s32 = peg$c9;
                                                                                                                                            peg$currPos++;
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            s32 = peg$FAILED;
                                                                                                                                            {
                                                                                                                                                peg$fail(peg$c10);
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                        if (s32 !== peg$FAILED) {
                                                                                                                                            s33 = peg$parseHex2();
                                                                                                                                            if (s33 !== peg$FAILED) {
                                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                    s34 = peg$c9;
                                                                                                                                                    peg$currPos++;
                                                                                                                                                }
                                                                                                                                                else {
                                                                                                                                                    s34 = peg$FAILED;
                                                                                                                                                    {
                                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                                if (s34 !== peg$FAILED) {
                                                                                                                                                    s35 = peg$parseHex2();
                                                                                                                                                    if (s35 !== peg$FAILED) {
                                                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                            s36 = peg$c9;
                                                                                                                                                            peg$currPos++;
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            s36 = peg$FAILED;
                                                                                                                                                            {
                                                                                                                                                                peg$fail(peg$c10);
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                        if (s36 !== peg$FAILED) {
                                                                                                                                                            s37 = peg$parseHex2();
                                                                                                                                                            if (s37 !== peg$FAILED) {
                                                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                    s38 = peg$c9;
                                                                                                                                                                    peg$currPos++;
                                                                                                                                                                }
                                                                                                                                                                else {
                                                                                                                                                                    s38 = peg$FAILED;
                                                                                                                                                                    {
                                                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                                if (s38 !== peg$FAILED) {
                                                                                                                                                                    s39 = peg$parseHex2();
                                                                                                                                                                    if (s39 !== peg$FAILED) {
                                                                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                            s40 = peg$c9;
                                                                                                                                                                            peg$currPos++;
                                                                                                                                                                        }
                                                                                                                                                                        else {
                                                                                                                                                                            s40 = peg$FAILED;
                                                                                                                                                                            {
                                                                                                                                                                                peg$fail(peg$c10);
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                        if (s40 !== peg$FAILED) {
                                                                                                                                                                            s41 = peg$parseHex2();
                                                                                                                                                                            if (s41 !== peg$FAILED) {
                                                                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                    s42 = peg$c9;
                                                                                                                                                                                    peg$currPos++;
                                                                                                                                                                                }
                                                                                                                                                                                else {
                                                                                                                                                                                    s42 = peg$FAILED;
                                                                                                                                                                                    {
                                                                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                                if (s42 !== peg$FAILED) {
                                                                                                                                                                                    s43 = peg$parseHex2();
                                                                                                                                                                                    if (s43 !== peg$FAILED) {
                                                                                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                            s44 = peg$c9;
                                                                                                                                                                                            peg$currPos++;
                                                                                                                                                                                        }
                                                                                                                                                                                        else {
                                                                                                                                                                                            s44 = peg$FAILED;
                                                                                                                                                                                            {
                                                                                                                                                                                                peg$fail(peg$c10);
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                        if (s44 !== peg$FAILED) {
                                                                                                                                                                                            s45 = peg$parseHex2();
                                                                                                                                                                                            if (s45 !== peg$FAILED) {
                                                                                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                    s46 = peg$c9;
                                                                                                                                                                                                    peg$currPos++;
                                                                                                                                                                                                }
                                                                                                                                                                                                else {
                                                                                                                                                                                                    s46 = peg$FAILED;
                                                                                                                                                                                                    {
                                                                                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                                if (s46 !== peg$FAILED) {
                                                                                                                                                                                                    s47 = peg$parseHex2();
                                                                                                                                                                                                    if (s47 !== peg$FAILED) {
                                                                                                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                            s48 = peg$c9;
                                                                                                                                                                                                            peg$currPos++;
                                                                                                                                                                                                        }
                                                                                                                                                                                                        else {
                                                                                                                                                                                                            s48 = peg$FAILED;
                                                                                                                                                                                                            {
                                                                                                                                                                                                                peg$fail(peg$c10);
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                        if (s48 !== peg$FAILED) {
                                                                                                                                                                                                            s49 = peg$parseHex2();
                                                                                                                                                                                                            if (s49 !== peg$FAILED) {
                                                                                                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                                    s50 = peg$c9;
                                                                                                                                                                                                                    peg$currPos++;
                                                                                                                                                                                                                }
                                                                                                                                                                                                                else {
                                                                                                                                                                                                                    s50 = peg$FAILED;
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                if (s50 !== peg$FAILED) {
                                                                                                                                                                                                                    s51 = peg$parseHex2();
                                                                                                                                                                                                                    if (s51 !== peg$FAILED) {
                                                                                                                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                                            s52 = peg$c9;
                                                                                                                                                                                                                            peg$currPos++;
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                            s52 = peg$FAILED;
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                peg$fail(peg$c10);
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        if (s52 !== peg$FAILED) {
                                                                                                                                                                                                                            s53 = peg$parseHex2();
                                                                                                                                                                                                                            if (s53 !== peg$FAILED) {
                                                                                                                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                                                    s54 = peg$c9;
                                                                                                                                                                                                                                    peg$currPos++;
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                    s54 = peg$FAILED;
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                if (s54 !== peg$FAILED) {
                                                                                                                                                                                                                                    s55 = peg$parseHex2();
                                                                                                                                                                                                                                    if (s55 !== peg$FAILED) {
                                                                                                                                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                                                            s56 = peg$c9;
                                                                                                                                                                                                                                            peg$currPos++;
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                                            s56 = peg$FAILED;
                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                peg$fail(peg$c10);
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        if (s56 !== peg$FAILED) {
                                                                                                                                                                                                                                            s57 = peg$parseHex2();
                                                                                                                                                                                                                                            if (s57 !== peg$FAILED) {
                                                                                                                                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                                                                    s58 = peg$c9;
                                                                                                                                                                                                                                                    peg$currPos++;
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                                    s58 = peg$FAILED;
                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                if (s58 !== peg$FAILED) {
                                                                                                                                                                                                                                                    s59 = peg$parseHex2();
                                                                                                                                                                                                                                                    if (s59 !== peg$FAILED) {
                                                                                                                                                                                                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                                                                            s60 = peg$c9;
                                                                                                                                                                                                                                                            peg$currPos++;
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                                                            s60 = peg$FAILED;
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                peg$fail(peg$c10);
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        if (s60 !== peg$FAILED) {
                                                                                                                                                                                                                                                            s61 = peg$parseHex2();
                                                                                                                                                                                                                                                            if (s61 !== peg$FAILED) {
                                                                                                                                                                                                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                                                                                                                                                                                                    s62 = peg$c9;
                                                                                                                                                                                                                                                                    peg$currPos++;
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                                                    s62 = peg$FAILED;
                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                        peg$fail(peg$c10);
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                if (s62 !== peg$FAILED) {
                                                                                                                                                                                                                                                                    s63 = peg$parseHex2();
                                                                                                                                                                                                                                                                    if (s63 !== peg$FAILED) {
                                                                                                                                                                                                                                                                        peg$savedPos = s0;
                                                                                                                                                                                                                                                                        s1 = peg$c11(s1, s3, s5, s7, s9, s11, s13, s15, s17, s19, s21, s23, s25, s27, s29, s31, s33, s35, s37, s39, s41, s43, s45, s47, s49, s51, s53, s55, s57, s59, s61, s63);
                                                                                                                                                                                                                                                                        s0 = s1;
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                    else {
                                                                                                                                                                                                                                                                        peg$currPos = s0;
                                                                                                                                                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                                                    peg$currPos = s0;
                                                                                                                                                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                            else {
                                                                                                                                                                                                                                                                peg$currPos = s0;
                                                                                                                                                                                                                                                                s0 = peg$FAILED;
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                                                            peg$currPos = s0;
                                                                                                                                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                    else {
                                                                                                                                                                                                                                                        peg$currPos = s0;
                                                                                                                                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                                    peg$currPos = s0;
                                                                                                                                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                            else {
                                                                                                                                                                                                                                                peg$currPos = s0;
                                                                                                                                                                                                                                                s0 = peg$FAILED;
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                                            peg$currPos = s0;
                                                                                                                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                    else {
                                                                                                                                                                                                                                        peg$currPos = s0;
                                                                                                                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                else {
                                                                                                                                                                                                                                    peg$currPos = s0;
                                                                                                                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                            else {
                                                                                                                                                                                                                                peg$currPos = s0;
                                                                                                                                                                                                                                s0 = peg$FAILED;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        else {
                                                                                                                                                                                                                            peg$currPos = s0;
                                                                                                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    else {
                                                                                                                                                                                                                        peg$currPos = s0;
                                                                                                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                                else {
                                                                                                                                                                                                                    peg$currPos = s0;
                                                                                                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                            else {
                                                                                                                                                                                                                peg$currPos = s0;
                                                                                                                                                                                                                s0 = peg$FAILED;
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                        else {
                                                                                                                                                                                                            peg$currPos = s0;
                                                                                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                    else {
                                                                                                                                                                                                        peg$currPos = s0;
                                                                                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                                else {
                                                                                                                                                                                                    peg$currPos = s0;
                                                                                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                            else {
                                                                                                                                                                                                peg$currPos = s0;
                                                                                                                                                                                                s0 = peg$FAILED;
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                        else {
                                                                                                                                                                                            peg$currPos = s0;
                                                                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                    else {
                                                                                                                                                                                        peg$currPos = s0;
                                                                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                                else {
                                                                                                                                                                                    peg$currPos = s0;
                                                                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                            else {
                                                                                                                                                                                peg$currPos = s0;
                                                                                                                                                                                s0 = peg$FAILED;
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                        else {
                                                                                                                                                                            peg$currPos = s0;
                                                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                    else {
                                                                                                                                                                        peg$currPos = s0;
                                                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                                else {
                                                                                                                                                                    peg$currPos = s0;
                                                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                            else {
                                                                                                                                                                peg$currPos = s0;
                                                                                                                                                                s0 = peg$FAILED;
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            peg$currPos = s0;
                                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        peg$currPos = s0;
                                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                                else {
                                                                                                                                                    peg$currPos = s0;
                                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                peg$currPos = s0;
                                                                                                                                                s0 = peg$FAILED;
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            peg$currPos = s0;
                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        peg$currPos = s0;
                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    peg$currPos = s0;
                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                }
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                peg$currPos = s0;
                                                                                                                                s0 = peg$FAILED;
                                                                                                                            }
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            peg$currPos = s0;
                                                                                                                            s0 = peg$FAILED;
                                                                                                                        }
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        peg$currPos = s0;
                                                                                                                        s0 = peg$FAILED;
                                                                                                                    }
                                                                                                                }
                                                                                                                else {
                                                                                                                    peg$currPos = s0;
                                                                                                                    s0 = peg$FAILED;
                                                                                                                }
                                                                                                            }
                                                                                                            else {
                                                                                                                peg$currPos = s0;
                                                                                                                s0 = peg$FAILED;
                                                                                                            }
                                                                                                        }
                                                                                                        else {
                                                                                                            peg$currPos = s0;
                                                                                                            s0 = peg$FAILED;
                                                                                                        }
                                                                                                    }
                                                                                                    else {
                                                                                                        peg$currPos = s0;
                                                                                                        s0 = peg$FAILED;
                                                                                                    }
                                                                                                }
                                                                                                else {
                                                                                                    peg$currPos = s0;
                                                                                                    s0 = peg$FAILED;
                                                                                                }
                                                                                            }
                                                                                            else {
                                                                                                peg$currPos = s0;
                                                                                                s0 = peg$FAILED;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s0;
                                                                                            s0 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseIceChar() {
            var s0;
            if (peg$c12.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s0 = peg$FAILED;
                {
                    peg$fail(peg$c13);
                }
            }
            return s0;
        }
        function peg$parseIceChar4() {
            var s0, s1, s2, s3, s4;
            s0 = peg$currPos;
            s1 = peg$parseIceChar();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseIceChar();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseIceChar();
                        if (s4 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c6(s1, s2, s3, s4);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseIceChar8() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8;
            s0 = peg$currPos;
            s1 = peg$parseIceChar();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseIceChar();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseIceChar();
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseIceChar();
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseIceChar();
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseIceChar();
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIceChar();
                                        if (s8 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c7(s1, s2, s3, s4, s5, s6, s7, s8);
                                            s0 = s1;
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseIceChar22() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22;
            s0 = peg$currPos;
            s1 = peg$parseIceChar();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseIceChar();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseIceChar();
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseIceChar();
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseIceChar();
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseIceChar();
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIceChar();
                                        if (s8 !== peg$FAILED) {
                                            s9 = peg$parseIceChar();
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseIceChar();
                                                if (s10 !== peg$FAILED) {
                                                    s11 = peg$parseIceChar();
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIceChar();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseIceChar();
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseIceChar();
                                                                if (s14 !== peg$FAILED) {
                                                                    s15 = peg$parseIceChar();
                                                                    if (s15 !== peg$FAILED) {
                                                                        s16 = peg$parseIceChar();
                                                                        if (s16 !== peg$FAILED) {
                                                                            s17 = peg$parseIceChar();
                                                                            if (s17 !== peg$FAILED) {
                                                                                s18 = peg$parseIceChar();
                                                                                if (s18 !== peg$FAILED) {
                                                                                    s19 = peg$parseIceChar();
                                                                                    if (s19 !== peg$FAILED) {
                                                                                        s20 = peg$parseIceChar();
                                                                                        if (s20 !== peg$FAILED) {
                                                                                            s21 = peg$parseIceChar();
                                                                                            if (s21 !== peg$FAILED) {
                                                                                                s22 = peg$parseIceChar();
                                                                                                if (s22 !== peg$FAILED) {
                                                                                                    peg$savedPos = s0;
                                                                                                    s1 = peg$c14(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22);
                                                                                                    s0 = s1;
                                                                                                }
                                                                                                else {
                                                                                                    peg$currPos = s0;
                                                                                                    s0 = peg$FAILED;
                                                                                                }
                                                                                            }
                                                                                            else {
                                                                                                peg$currPos = s0;
                                                                                                s0 = peg$FAILED;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s0;
                                                                                            s0 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseIceChar24() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24;
            s0 = peg$currPos;
            s1 = peg$parseIceChar();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseIceChar();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseIceChar();
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseIceChar();
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseIceChar();
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseIceChar();
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIceChar();
                                        if (s8 !== peg$FAILED) {
                                            s9 = peg$parseIceChar();
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseIceChar();
                                                if (s10 !== peg$FAILED) {
                                                    s11 = peg$parseIceChar();
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIceChar();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseIceChar();
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseIceChar();
                                                                if (s14 !== peg$FAILED) {
                                                                    s15 = peg$parseIceChar();
                                                                    if (s15 !== peg$FAILED) {
                                                                        s16 = peg$parseIceChar();
                                                                        if (s16 !== peg$FAILED) {
                                                                            s17 = peg$parseIceChar();
                                                                            if (s17 !== peg$FAILED) {
                                                                                s18 = peg$parseIceChar();
                                                                                if (s18 !== peg$FAILED) {
                                                                                    s19 = peg$parseIceChar();
                                                                                    if (s19 !== peg$FAILED) {
                                                                                        s20 = peg$parseIceChar();
                                                                                        if (s20 !== peg$FAILED) {
                                                                                            s21 = peg$parseIceChar();
                                                                                            if (s21 !== peg$FAILED) {
                                                                                                s22 = peg$parseIceChar();
                                                                                                if (s22 !== peg$FAILED) {
                                                                                                    s23 = peg$parseIceChar();
                                                                                                    if (s23 !== peg$FAILED) {
                                                                                                        s24 = peg$parseIceChar();
                                                                                                        if (s24 !== peg$FAILED) {
                                                                                                            peg$savedPos = s0;
                                                                                                            s1 = peg$c15(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24);
                                                                                                            s0 = s1;
                                                                                                        }
                                                                                                        else {
                                                                                                            peg$currPos = s0;
                                                                                                            s0 = peg$FAILED;
                                                                                                        }
                                                                                                    }
                                                                                                    else {
                                                                                                        peg$currPos = s0;
                                                                                                        s0 = peg$FAILED;
                                                                                                    }
                                                                                                }
                                                                                                else {
                                                                                                    peg$currPos = s0;
                                                                                                    s0 = peg$FAILED;
                                                                                                }
                                                                                            }
                                                                                            else {
                                                                                                peg$currPos = s0;
                                                                                                s0 = peg$FAILED;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s0;
                                                                                            s0 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseIceChar32() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32;
            s0 = peg$currPos;
            s1 = peg$parseIceChar();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseIceChar();
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseIceChar();
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseIceChar();
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseIceChar();
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseIceChar();
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIceChar();
                                        if (s8 !== peg$FAILED) {
                                            s9 = peg$parseIceChar();
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseIceChar();
                                                if (s10 !== peg$FAILED) {
                                                    s11 = peg$parseIceChar();
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIceChar();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseIceChar();
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseIceChar();
                                                                if (s14 !== peg$FAILED) {
                                                                    s15 = peg$parseIceChar();
                                                                    if (s15 !== peg$FAILED) {
                                                                        s16 = peg$parseIceChar();
                                                                        if (s16 !== peg$FAILED) {
                                                                            s17 = peg$parseIceChar();
                                                                            if (s17 !== peg$FAILED) {
                                                                                s18 = peg$parseIceChar();
                                                                                if (s18 !== peg$FAILED) {
                                                                                    s19 = peg$parseIceChar();
                                                                                    if (s19 !== peg$FAILED) {
                                                                                        s20 = peg$parseIceChar();
                                                                                        if (s20 !== peg$FAILED) {
                                                                                            s21 = peg$parseIceChar();
                                                                                            if (s21 !== peg$FAILED) {
                                                                                                s22 = peg$parseIceChar();
                                                                                                if (s22 !== peg$FAILED) {
                                                                                                    s23 = peg$parseIceChar();
                                                                                                    if (s23 !== peg$FAILED) {
                                                                                                        s24 = peg$parseIceChar();
                                                                                                        if (s24 !== peg$FAILED) {
                                                                                                            s25 = peg$parseIceChar();
                                                                                                            if (s25 !== peg$FAILED) {
                                                                                                                s26 = peg$parseIceChar();
                                                                                                                if (s26 !== peg$FAILED) {
                                                                                                                    s27 = peg$parseIceChar();
                                                                                                                    if (s27 !== peg$FAILED) {
                                                                                                                        s28 = peg$parseIceChar();
                                                                                                                        if (s28 !== peg$FAILED) {
                                                                                                                            s29 = peg$parseIceChar();
                                                                                                                            if (s29 !== peg$FAILED) {
                                                                                                                                s30 = peg$parseIceChar();
                                                                                                                                if (s30 !== peg$FAILED) {
                                                                                                                                    s31 = peg$parseIceChar();
                                                                                                                                    if (s31 !== peg$FAILED) {
                                                                                                                                        s32 = peg$parseIceChar();
                                                                                                                                        if (s32 !== peg$FAILED) {
                                                                                                                                            peg$savedPos = s0;
                                                                                                                                            s1 = peg$c16(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32);
                                                                                                                                            s0 = s1;
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            peg$currPos = s0;
                                                                                                                                            s0 = peg$FAILED;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        peg$currPos = s0;
                                                                                                                                        s0 = peg$FAILED;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    peg$currPos = s0;
                                                                                                                                    s0 = peg$FAILED;
                                                                                                                                }
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                peg$currPos = s0;
                                                                                                                                s0 = peg$FAILED;
                                                                                                                            }
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            peg$currPos = s0;
                                                                                                                            s0 = peg$FAILED;
                                                                                                                        }
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        peg$currPos = s0;
                                                                                                                        s0 = peg$FAILED;
                                                                                                                    }
                                                                                                                }
                                                                                                                else {
                                                                                                                    peg$currPos = s0;
                                                                                                                    s0 = peg$FAILED;
                                                                                                                }
                                                                                                            }
                                                                                                            else {
                                                                                                                peg$currPos = s0;
                                                                                                                s0 = peg$FAILED;
                                                                                                            }
                                                                                                        }
                                                                                                        else {
                                                                                                            peg$currPos = s0;
                                                                                                            s0 = peg$FAILED;
                                                                                                        }
                                                                                                    }
                                                                                                    else {
                                                                                                        peg$currPos = s0;
                                                                                                        s0 = peg$FAILED;
                                                                                                    }
                                                                                                }
                                                                                                else {
                                                                                                    peg$currPos = s0;
                                                                                                    s0 = peg$FAILED;
                                                                                                }
                                                                                            }
                                                                                            else {
                                                                                                peg$currPos = s0;
                                                                                                s0 = peg$FAILED;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s0;
                                                                                            s0 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseGUID() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
            s0 = peg$currPos;
            s1 = peg$parseHex8();
            if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 45) {
                    s2 = peg$c17;
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c18);
                    }
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseHex4();
                    if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 45) {
                            s4 = peg$c17;
                            peg$currPos++;
                        }
                        else {
                            s4 = peg$FAILED;
                            {
                                peg$fail(peg$c18);
                            }
                        }
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseHex4();
                            if (s5 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 45) {
                                    s6 = peg$c17;
                                    peg$currPos++;
                                }
                                else {
                                    s6 = peg$FAILED;
                                    {
                                        peg$fail(peg$c18);
                                    }
                                }
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseHex4();
                                    if (s7 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 45) {
                                            s8 = peg$c17;
                                            peg$currPos++;
                                        }
                                        else {
                                            s8 = peg$FAILED;
                                            {
                                                peg$fail(peg$c18);
                                            }
                                        }
                                        if (s8 !== peg$FAILED) {
                                            s9 = peg$parseHex12();
                                            if (s9 !== peg$FAILED) {
                                                peg$savedPos = s0;
                                                s1 = peg$c19(s1, s3, s5, s7, s9);
                                                s0 = s1;
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseIP4() {
            var s0, s1, s2, s3, s4, s5, s6, s7;
            s0 = peg$currPos;
            s1 = peg$parseDecimal();
            if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                    s2 = peg$c20;
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c21);
                    }
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseDecimal();
                    if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 46) {
                            s4 = peg$c20;
                            peg$currPos++;
                        }
                        else {
                            s4 = peg$FAILED;
                            {
                                peg$fail(peg$c21);
                            }
                        }
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseDecimal();
                            if (s5 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 46) {
                                    s6 = peg$c20;
                                    peg$currPos++;
                                }
                                else {
                                    s6 = peg$FAILED;
                                    {
                                        peg$fail(peg$c21);
                                    }
                                }
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseDecimal();
                                    if (s7 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c22(s1, s3, s5, s7);
                                        s0 = s1;
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseIP6() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
            s0 = peg$currPos;
            s1 = peg$parseh16();
            if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 58) {
                    s2 = peg$c9;
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c10);
                    }
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseh16();
                    if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 58) {
                            s4 = peg$c9;
                            peg$currPos++;
                        }
                        else {
                            s4 = peg$FAILED;
                            {
                                peg$fail(peg$c10);
                            }
                        }
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseh16();
                            if (s5 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 58) {
                                    s6 = peg$c9;
                                    peg$currPos++;
                                }
                                else {
                                    s6 = peg$FAILED;
                                    {
                                        peg$fail(peg$c10);
                                    }
                                }
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseh16();
                                    if (s7 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 58) {
                                            s8 = peg$c9;
                                            peg$currPos++;
                                        }
                                        else {
                                            s8 = peg$FAILED;
                                            {
                                                peg$fail(peg$c10);
                                            }
                                        }
                                        if (s8 !== peg$FAILED) {
                                            s9 = peg$parseh16();
                                            if (s9 !== peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                    s10 = peg$c9;
                                                    peg$currPos++;
                                                }
                                                else {
                                                    s10 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c10);
                                                    }
                                                }
                                                if (s10 !== peg$FAILED) {
                                                    s11 = peg$parseh16();
                                                    if (s11 !== peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                            s12 = peg$c9;
                                                            peg$currPos++;
                                                        }
                                                        else {
                                                            s12 = peg$FAILED;
                                                            {
                                                                peg$fail(peg$c10);
                                                            }
                                                        }
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parsels32();
                                                            if (s13 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c24(s1, s3, s5, s7, s9, s11, s13);
                                                                s0 = s1;
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c25) {
                    s1 = peg$c25;
                    peg$currPos += 2;
                }
                else {
                    s1 = peg$FAILED;
                    {
                        peg$fail(peg$c26);
                    }
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseh16();
                    if (s2 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 58) {
                            s3 = peg$c9;
                            peg$currPos++;
                        }
                        else {
                            s3 = peg$FAILED;
                            {
                                peg$fail(peg$c10);
                            }
                        }
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parseh16();
                            if (s4 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 58) {
                                    s5 = peg$c9;
                                    peg$currPos++;
                                }
                                else {
                                    s5 = peg$FAILED;
                                    {
                                        peg$fail(peg$c10);
                                    }
                                }
                                if (s5 !== peg$FAILED) {
                                    s6 = peg$parseh16();
                                    if (s6 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 58) {
                                            s7 = peg$c9;
                                            peg$currPos++;
                                        }
                                        else {
                                            s7 = peg$FAILED;
                                            {
                                                peg$fail(peg$c10);
                                            }
                                        }
                                        if (s7 !== peg$FAILED) {
                                            s8 = peg$parseh16();
                                            if (s8 !== peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                    s9 = peg$c9;
                                                    peg$currPos++;
                                                }
                                                else {
                                                    s9 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c10);
                                                    }
                                                }
                                                if (s9 !== peg$FAILED) {
                                                    s10 = peg$parseh16();
                                                    if (s10 !== peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                            s11 = peg$c9;
                                                            peg$currPos++;
                                                        }
                                                        else {
                                                            s11 = peg$FAILED;
                                                            {
                                                                peg$fail(peg$c10);
                                                            }
                                                        }
                                                        if (s11 !== peg$FAILED) {
                                                            s12 = peg$parsels32();
                                                            if (s12 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c27(s2, s4, s6, s8, s10, s12);
                                                                s0 = s1;
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 2) === peg$c25) {
                        s1 = peg$c25;
                        peg$currPos += 2;
                    }
                    else {
                        s1 = peg$FAILED;
                        {
                            peg$fail(peg$c26);
                        }
                    }
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parseh16();
                        if (s2 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 58) {
                                s3 = peg$c9;
                                peg$currPos++;
                            }
                            else {
                                s3 = peg$FAILED;
                                {
                                    peg$fail(peg$c10);
                                }
                            }
                            if (s3 !== peg$FAILED) {
                                s4 = peg$parseh16();
                                if (s4 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 58) {
                                        s5 = peg$c9;
                                        peg$currPos++;
                                    }
                                    else {
                                        s5 = peg$FAILED;
                                        {
                                            peg$fail(peg$c10);
                                        }
                                    }
                                    if (s5 !== peg$FAILED) {
                                        s6 = peg$parseh16();
                                        if (s6 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 58) {
                                                s7 = peg$c9;
                                                peg$currPos++;
                                            }
                                            else {
                                                s7 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c10);
                                                }
                                            }
                                            if (s7 !== peg$FAILED) {
                                                s8 = peg$parseh16();
                                                if (s8 !== peg$FAILED) {
                                                    if (input.charCodeAt(peg$currPos) === 58) {
                                                        s9 = peg$c9;
                                                        peg$currPos++;
                                                    }
                                                    else {
                                                        s9 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c10);
                                                        }
                                                    }
                                                    if (s9 !== peg$FAILED) {
                                                        s10 = peg$parsels32();
                                                        if (s10 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c28(s2, s4, s6, s8, s10);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 2) === peg$c25) {
                            s1 = peg$c25;
                            peg$currPos += 2;
                        }
                        else {
                            s1 = peg$FAILED;
                            {
                                peg$fail(peg$c26);
                            }
                        }
                        if (s1 !== peg$FAILED) {
                            s2 = peg$parseh16();
                            if (s2 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 58) {
                                    s3 = peg$c9;
                                    peg$currPos++;
                                }
                                else {
                                    s3 = peg$FAILED;
                                    {
                                        peg$fail(peg$c10);
                                    }
                                }
                                if (s3 !== peg$FAILED) {
                                    s4 = peg$parseh16();
                                    if (s4 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 58) {
                                            s5 = peg$c9;
                                            peg$currPos++;
                                        }
                                        else {
                                            s5 = peg$FAILED;
                                            {
                                                peg$fail(peg$c10);
                                            }
                                        }
                                        if (s5 !== peg$FAILED) {
                                            s6 = peg$parseh16();
                                            if (s6 !== peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                    s7 = peg$c9;
                                                    peg$currPos++;
                                                }
                                                else {
                                                    s7 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c10);
                                                    }
                                                }
                                                if (s7 !== peg$FAILED) {
                                                    s8 = peg$parsels32();
                                                    if (s8 !== peg$FAILED) {
                                                        peg$savedPos = s0;
                                                        s1 = peg$c29(s2, s4, s6, s8);
                                                        s0 = s1;
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            if (input.substr(peg$currPos, 2) === peg$c25) {
                                s1 = peg$c25;
                                peg$currPos += 2;
                            }
                            else {
                                s1 = peg$FAILED;
                                {
                                    peg$fail(peg$c26);
                                }
                            }
                            if (s1 !== peg$FAILED) {
                                s2 = peg$parseh16();
                                if (s2 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 58) {
                                        s3 = peg$c9;
                                        peg$currPos++;
                                    }
                                    else {
                                        s3 = peg$FAILED;
                                        {
                                            peg$fail(peg$c10);
                                        }
                                    }
                                    if (s3 !== peg$FAILED) {
                                        s4 = peg$parseh16();
                                        if (s4 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 58) {
                                                s5 = peg$c9;
                                                peg$currPos++;
                                            }
                                            else {
                                                s5 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c10);
                                                }
                                            }
                                            if (s5 !== peg$FAILED) {
                                                s6 = peg$parsels32();
                                                if (s6 !== peg$FAILED) {
                                                    peg$savedPos = s0;
                                                    s1 = peg$c30(s2, s4, s6);
                                                    s0 = s1;
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                            if (s0 === peg$FAILED) {
                                s0 = peg$currPos;
                                if (input.substr(peg$currPos, 2) === peg$c25) {
                                    s1 = peg$c25;
                                    peg$currPos += 2;
                                }
                                else {
                                    s1 = peg$FAILED;
                                    {
                                        peg$fail(peg$c26);
                                    }
                                }
                                if (s1 !== peg$FAILED) {
                                    s2 = peg$parseh16();
                                    if (s2 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 58) {
                                            s3 = peg$c9;
                                            peg$currPos++;
                                        }
                                        else {
                                            s3 = peg$FAILED;
                                            {
                                                peg$fail(peg$c10);
                                            }
                                        }
                                        if (s3 !== peg$FAILED) {
                                            s4 = peg$parsels32();
                                            if (s4 !== peg$FAILED) {
                                                peg$savedPos = s0;
                                                s1 = peg$c31(s2, s4);
                                                s0 = s1;
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                                if (s0 === peg$FAILED) {
                                    s0 = peg$currPos;
                                    if (input.substr(peg$currPos, 2) === peg$c25) {
                                        s1 = peg$c25;
                                        peg$currPos += 2;
                                    }
                                    else {
                                        s1 = peg$FAILED;
                                        {
                                            peg$fail(peg$c26);
                                        }
                                    }
                                    if (s1 !== peg$FAILED) {
                                        s2 = peg$parsels32();
                                        if (s2 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c32(s2);
                                            s0 = s1;
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                    if (s0 === peg$FAILED) {
                                        s0 = peg$currPos;
                                        if (input.substr(peg$currPos, 2) === peg$c25) {
                                            s1 = peg$c25;
                                            peg$currPos += 2;
                                        }
                                        else {
                                            s1 = peg$FAILED;
                                            {
                                                peg$fail(peg$c26);
                                            }
                                        }
                                        if (s1 !== peg$FAILED) {
                                            s2 = peg$parseh16();
                                            if (s2 !== peg$FAILED) {
                                                peg$savedPos = s0;
                                                s1 = peg$c32(s2);
                                                s0 = s1;
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                        if (s0 === peg$FAILED) {
                                            s0 = peg$currPos;
                                            s1 = peg$parseh16();
                                            if (s1 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 2) === peg$c25) {
                                                    s2 = peg$c25;
                                                    peg$currPos += 2;
                                                }
                                                else {
                                                    s2 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c26);
                                                    }
                                                }
                                                if (s2 !== peg$FAILED) {
                                                    s3 = peg$parseh16();
                                                    if (s3 !== peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                            s4 = peg$c9;
                                                            peg$currPos++;
                                                        }
                                                        else {
                                                            s4 = peg$FAILED;
                                                            {
                                                                peg$fail(peg$c10);
                                                            }
                                                        }
                                                        if (s4 !== peg$FAILED) {
                                                            s5 = peg$parseh16();
                                                            if (s5 !== peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                    s6 = peg$c9;
                                                                    peg$currPos++;
                                                                }
                                                                else {
                                                                    s6 = peg$FAILED;
                                                                    {
                                                                        peg$fail(peg$c10);
                                                                    }
                                                                }
                                                                if (s6 !== peg$FAILED) {
                                                                    s7 = peg$parseh16();
                                                                    if (s7 !== peg$FAILED) {
                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                            s8 = peg$c9;
                                                                            peg$currPos++;
                                                                        }
                                                                        else {
                                                                            s8 = peg$FAILED;
                                                                            {
                                                                                peg$fail(peg$c10);
                                                                            }
                                                                        }
                                                                        if (s8 !== peg$FAILED) {
                                                                            s9 = peg$parseh16();
                                                                            if (s9 !== peg$FAILED) {
                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                    s10 = peg$c9;
                                                                                    peg$currPos++;
                                                                                }
                                                                                else {
                                                                                    s10 = peg$FAILED;
                                                                                    {
                                                                                        peg$fail(peg$c10);
                                                                                    }
                                                                                }
                                                                                if (s10 !== peg$FAILED) {
                                                                                    s11 = peg$parsels32();
                                                                                    if (s11 !== peg$FAILED) {
                                                                                        peg$savedPos = s0;
                                                                                        s1 = peg$c33(s1, s3, s5, s7, s9, s11);
                                                                                        s0 = s1;
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                            if (s0 === peg$FAILED) {
                                                s0 = peg$currPos;
                                                s1 = peg$parseh16();
                                                if (s1 !== peg$FAILED) {
                                                    s2 = peg$parseh16();
                                                    if (s2 === peg$FAILED) {
                                                        s2 = null;
                                                    }
                                                    if (s2 !== peg$FAILED) {
                                                        if (input.substr(peg$currPos, 2) === peg$c25) {
                                                            s3 = peg$c25;
                                                            peg$currPos += 2;
                                                        }
                                                        else {
                                                            s3 = peg$FAILED;
                                                            {
                                                                peg$fail(peg$c26);
                                                            }
                                                        }
                                                        if (s3 !== peg$FAILED) {
                                                            s4 = peg$parseh16();
                                                            if (s4 !== peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                    s5 = peg$c9;
                                                                    peg$currPos++;
                                                                }
                                                                else {
                                                                    s5 = peg$FAILED;
                                                                    {
                                                                        peg$fail(peg$c10);
                                                                    }
                                                                }
                                                                if (s5 !== peg$FAILED) {
                                                                    s6 = peg$parseh16();
                                                                    if (s6 !== peg$FAILED) {
                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                            s7 = peg$c9;
                                                                            peg$currPos++;
                                                                        }
                                                                        else {
                                                                            s7 = peg$FAILED;
                                                                            {
                                                                                peg$fail(peg$c10);
                                                                            }
                                                                        }
                                                                        if (s7 !== peg$FAILED) {
                                                                            s8 = peg$parseh16();
                                                                            if (s8 !== peg$FAILED) {
                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                    s9 = peg$c9;
                                                                                    peg$currPos++;
                                                                                }
                                                                                else {
                                                                                    s9 = peg$FAILED;
                                                                                    {
                                                                                        peg$fail(peg$c10);
                                                                                    }
                                                                                }
                                                                                if (s9 !== peg$FAILED) {
                                                                                    s10 = peg$parsels32();
                                                                                    if (s10 !== peg$FAILED) {
                                                                                        peg$savedPos = s0;
                                                                                        s1 = peg$c34(s1, s2, s4, s6, s8, s10);
                                                                                        s0 = s1;
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                                if (s0 === peg$FAILED) {
                                                    s0 = peg$currPos;
                                                    s1 = peg$parseh16();
                                                    if (s1 !== peg$FAILED) {
                                                        s2 = peg$parseh16();
                                                        if (s2 === peg$FAILED) {
                                                            s2 = null;
                                                        }
                                                        if (s2 !== peg$FAILED) {
                                                            s3 = peg$parseh16();
                                                            if (s3 === peg$FAILED) {
                                                                s3 = null;
                                                            }
                                                            if (s3 !== peg$FAILED) {
                                                                if (input.substr(peg$currPos, 2) === peg$c25) {
                                                                    s4 = peg$c25;
                                                                    peg$currPos += 2;
                                                                }
                                                                else {
                                                                    s4 = peg$FAILED;
                                                                    {
                                                                        peg$fail(peg$c26);
                                                                    }
                                                                }
                                                                if (s4 !== peg$FAILED) {
                                                                    s5 = peg$parseh16();
                                                                    if (s5 !== peg$FAILED) {
                                                                        if (input.charCodeAt(peg$currPos) === 58) {
                                                                            s6 = peg$c9;
                                                                            peg$currPos++;
                                                                        }
                                                                        else {
                                                                            s6 = peg$FAILED;
                                                                            {
                                                                                peg$fail(peg$c10);
                                                                            }
                                                                        }
                                                                        if (s6 !== peg$FAILED) {
                                                                            s7 = peg$parseh16();
                                                                            if (s7 !== peg$FAILED) {
                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                    s8 = peg$c9;
                                                                                    peg$currPos++;
                                                                                }
                                                                                else {
                                                                                    s8 = peg$FAILED;
                                                                                    {
                                                                                        peg$fail(peg$c10);
                                                                                    }
                                                                                }
                                                                                if (s8 !== peg$FAILED) {
                                                                                    s9 = peg$parsels32();
                                                                                    if (s9 !== peg$FAILED) {
                                                                                        peg$savedPos = s0;
                                                                                        s1 = peg$c35(s1, s2, s3, s5, s7, s9);
                                                                                        s0 = s1;
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                    if (s0 === peg$FAILED) {
                                                        s0 = peg$currPos;
                                                        s1 = peg$parseh16();
                                                        if (s1 !== peg$FAILED) {
                                                            s2 = peg$parseh16();
                                                            if (s2 === peg$FAILED) {
                                                                s2 = null;
                                                            }
                                                            if (s2 !== peg$FAILED) {
                                                                s3 = peg$parseh16();
                                                                if (s3 === peg$FAILED) {
                                                                    s3 = null;
                                                                }
                                                                if (s3 !== peg$FAILED) {
                                                                    s4 = peg$parseh16();
                                                                    if (s4 === peg$FAILED) {
                                                                        s4 = null;
                                                                    }
                                                                    if (s4 !== peg$FAILED) {
                                                                        if (input.substr(peg$currPos, 2) === peg$c25) {
                                                                            s5 = peg$c25;
                                                                            peg$currPos += 2;
                                                                        }
                                                                        else {
                                                                            s5 = peg$FAILED;
                                                                            {
                                                                                peg$fail(peg$c26);
                                                                            }
                                                                        }
                                                                        if (s5 !== peg$FAILED) {
                                                                            s6 = peg$parseh16();
                                                                            if (s6 !== peg$FAILED) {
                                                                                if (input.charCodeAt(peg$currPos) === 58) {
                                                                                    s7 = peg$c9;
                                                                                    peg$currPos++;
                                                                                }
                                                                                else {
                                                                                    s7 = peg$FAILED;
                                                                                    {
                                                                                        peg$fail(peg$c10);
                                                                                    }
                                                                                }
                                                                                if (s7 !== peg$FAILED) {
                                                                                    s8 = peg$parsels32();
                                                                                    if (s8 !== peg$FAILED) {
                                                                                        peg$savedPos = s0;
                                                                                        s1 = peg$c36(s1, s2, s3, s4, s6, s8);
                                                                                        s0 = s1;
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                        if (s0 === peg$FAILED) {
                                                            s0 = peg$currPos;
                                                            s1 = peg$parseh16();
                                                            if (s1 !== peg$FAILED) {
                                                                s2 = peg$parseh16();
                                                                if (s2 === peg$FAILED) {
                                                                    s2 = null;
                                                                }
                                                                if (s2 !== peg$FAILED) {
                                                                    s3 = peg$parseh16();
                                                                    if (s3 === peg$FAILED) {
                                                                        s3 = null;
                                                                    }
                                                                    if (s3 !== peg$FAILED) {
                                                                        s4 = peg$parseh16();
                                                                        if (s4 === peg$FAILED) {
                                                                            s4 = null;
                                                                        }
                                                                        if (s4 !== peg$FAILED) {
                                                                            s5 = peg$parseh16();
                                                                            if (s5 === peg$FAILED) {
                                                                                s5 = null;
                                                                            }
                                                                            if (s5 !== peg$FAILED) {
                                                                                if (input.substr(peg$currPos, 2) === peg$c25) {
                                                                                    s6 = peg$c25;
                                                                                    peg$currPos += 2;
                                                                                }
                                                                                else {
                                                                                    s6 = peg$FAILED;
                                                                                    {
                                                                                        peg$fail(peg$c26);
                                                                                    }
                                                                                }
                                                                                if (s6 !== peg$FAILED) {
                                                                                    s7 = peg$parsels32();
                                                                                    if (s7 !== peg$FAILED) {
                                                                                        peg$savedPos = s0;
                                                                                        s1 = peg$c37(s1, s2, s3, s4, s5, s7);
                                                                                        s0 = s1;
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                            if (s0 === peg$FAILED) {
                                                                s0 = peg$currPos;
                                                                s1 = peg$parseh16();
                                                                if (s1 !== peg$FAILED) {
                                                                    s2 = peg$parseh16();
                                                                    if (s2 === peg$FAILED) {
                                                                        s2 = null;
                                                                    }
                                                                    if (s2 !== peg$FAILED) {
                                                                        s3 = peg$parseh16();
                                                                        if (s3 === peg$FAILED) {
                                                                            s3 = null;
                                                                        }
                                                                        if (s3 !== peg$FAILED) {
                                                                            s4 = peg$parseh16();
                                                                            if (s4 === peg$FAILED) {
                                                                                s4 = null;
                                                                            }
                                                                            if (s4 !== peg$FAILED) {
                                                                                s5 = peg$parseh16();
                                                                                if (s5 === peg$FAILED) {
                                                                                    s5 = null;
                                                                                }
                                                                                if (s5 !== peg$FAILED) {
                                                                                    s6 = peg$parseh16();
                                                                                    if (s6 === peg$FAILED) {
                                                                                        s6 = null;
                                                                                    }
                                                                                    if (s6 !== peg$FAILED) {
                                                                                        if (input.substr(peg$currPos, 2) === peg$c25) {
                                                                                            s7 = peg$c25;
                                                                                            peg$currPos += 2;
                                                                                        }
                                                                                        else {
                                                                                            s7 = peg$FAILED;
                                                                                            {
                                                                                                peg$fail(peg$c26);
                                                                                            }
                                                                                        }
                                                                                        if (s7 !== peg$FAILED) {
                                                                                            s8 = peg$parseh16();
                                                                                            if (s8 !== peg$FAILED) {
                                                                                                peg$savedPos = s0;
                                                                                                s1 = peg$c38(s1, s2, s3, s4, s5, s6, s8);
                                                                                                s0 = s1;
                                                                                            }
                                                                                            else {
                                                                                                peg$currPos = s0;
                                                                                                s0 = peg$FAILED;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s0;
                                                                                            s0 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                                if (s0 === peg$FAILED) {
                                                                    s0 = peg$currPos;
                                                                    s1 = peg$parseh16();
                                                                    if (s1 !== peg$FAILED) {
                                                                        s2 = peg$parseh16();
                                                                        if (s2 === peg$FAILED) {
                                                                            s2 = null;
                                                                        }
                                                                        if (s2 !== peg$FAILED) {
                                                                            s3 = peg$parseh16();
                                                                            if (s3 === peg$FAILED) {
                                                                                s3 = null;
                                                                            }
                                                                            if (s3 !== peg$FAILED) {
                                                                                s4 = peg$parseh16();
                                                                                if (s4 === peg$FAILED) {
                                                                                    s4 = null;
                                                                                }
                                                                                if (s4 !== peg$FAILED) {
                                                                                    s5 = peg$parseh16();
                                                                                    if (s5 === peg$FAILED) {
                                                                                        s5 = null;
                                                                                    }
                                                                                    if (s5 !== peg$FAILED) {
                                                                                        s6 = peg$parseh16();
                                                                                        if (s6 === peg$FAILED) {
                                                                                            s6 = null;
                                                                                        }
                                                                                        if (s6 !== peg$FAILED) {
                                                                                            s7 = peg$parseh16();
                                                                                            if (s7 === peg$FAILED) {
                                                                                                s7 = null;
                                                                                            }
                                                                                            if (s7 !== peg$FAILED) {
                                                                                                if (input.substr(peg$currPos, 2) === peg$c25) {
                                                                                                    s8 = peg$c25;
                                                                                                    peg$currPos += 2;
                                                                                                }
                                                                                                else {
                                                                                                    s8 = peg$FAILED;
                                                                                                    {
                                                                                                        peg$fail(peg$c26);
                                                                                                    }
                                                                                                }
                                                                                                if (s8 !== peg$FAILED) {
                                                                                                    peg$savedPos = s0;
                                                                                                    s1 = peg$c24(s1, s2, s3, s4, s5, s6, s7);
                                                                                                    s0 = s1;
                                                                                                }
                                                                                                else {
                                                                                                    peg$currPos = s0;
                                                                                                    s0 = peg$FAILED;
                                                                                                }
                                                                                            }
                                                                                            else {
                                                                                                peg$currPos = s0;
                                                                                                s0 = peg$FAILED;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s0;
                                                                                            s0 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return s0;
        }
        function peg$parseh16() {
            var s0, s1, s2, s3, s4;
            s0 = peg$currPos;
            s1 = peg$parseHex();
            if (s1 !== peg$FAILED) {
                s2 = peg$parseHex();
                if (s2 === peg$FAILED) {
                    s2 = null;
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseHex();
                    if (s3 === peg$FAILED) {
                        s3 = null;
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseHex();
                        if (s4 === peg$FAILED) {
                            s4 = null;
                        }
                        if (s4 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c39(s1, s2, s3, s4);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parsels32() {
            var s0, s1, s2, s3, s4;
            s0 = peg$currPos;
            s1 = peg$currPos;
            s2 = peg$parseh16();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 58) {
                    s3 = peg$c9;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c10);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseh16();
                    if (s4 !== peg$FAILED) {
                        s2 = [s2, s3, s4];
                        s1 = s2;
                    }
                    else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s1;
                s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c40(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
                s0 = peg$parseIPv4address();
            }
            return s0;
        }
        function peg$parseIPv4address() {
            var s0, s1, s2, s3, s4, s5, s6, s7;
            s0 = peg$currPos;
            s1 = peg$parsedec_octet();
            if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                    s2 = peg$c20;
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c21);
                    }
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parsedec_octet();
                    if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 46) {
                            s4 = peg$c20;
                            peg$currPos++;
                        }
                        else {
                            s4 = peg$FAILED;
                            {
                                peg$fail(peg$c21);
                            }
                        }
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parsedec_octet();
                            if (s5 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 46) {
                                    s6 = peg$c20;
                                    peg$currPos++;
                                }
                                else {
                                    s6 = peg$FAILED;
                                    {
                                        peg$fail(peg$c21);
                                    }
                                }
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parsedec_octet();
                                    if (s7 !== peg$FAILED) {
                                        s1 = [s1, s2, s3, s4, s5, s6, s7];
                                        s0 = s1;
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parsedec_octet() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c41) {
                s1 = peg$c41;
                peg$currPos += 2;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c42);
                }
            }
            if (s1 !== peg$FAILED) {
                if (peg$c43.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c44);
                    }
                }
                if (s2 !== peg$FAILED) {
                    s1 = [s1, s2];
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 50) {
                    s1 = peg$c45;
                    peg$currPos++;
                }
                else {
                    s1 = peg$FAILED;
                    {
                        peg$fail(peg$c46);
                    }
                }
                if (s1 !== peg$FAILED) {
                    if (peg$c47.test(input.charAt(peg$currPos))) {
                        s2 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s2 = peg$FAILED;
                        {
                            peg$fail(peg$c48);
                        }
                    }
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseDigit();
                        if (s3 !== peg$FAILED) {
                            s1 = [s1, s2, s3];
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 49) {
                        s1 = peg$c49;
                        peg$currPos++;
                    }
                    else {
                        s1 = peg$FAILED;
                        {
                            peg$fail(peg$c50);
                        }
                    }
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parseDigit();
                        if (s2 !== peg$FAILED) {
                            s3 = peg$parseDigit();
                            if (s3 !== peg$FAILED) {
                                s1 = [s1, s2, s3];
                                s0 = s1;
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (peg$c51.test(input.charAt(peg$currPos))) {
                            s1 = input.charAt(peg$currPos);
                            peg$currPos++;
                        }
                        else {
                            s1 = peg$FAILED;
                            {
                                peg$fail(peg$c52);
                            }
                        }
                        if (s1 !== peg$FAILED) {
                            s2 = peg$parseDigit();
                            if (s2 !== peg$FAILED) {
                                s1 = [s1, s2];
                                s0 = s1;
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                            s0 = peg$parseDigit();
                        }
                    }
                }
            }
            return s0;
        }
        function peg$parseOffer() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 23) === peg$c53) {
                s1 = peg$c53;
                peg$currPos += 23;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c54);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$parseRule();
                while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    s3 = peg$parseRule();
                }
                if (s2 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c55) {
                        s3 = peg$c55;
                        peg$currPos += 2;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c56);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c57(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAnswer() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 24) === peg$c58) {
                s1 = peg$c58;
                peg$currPos += 24;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c59);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$parseRule();
                while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    s3 = peg$parseRule();
                }
                if (s2 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c55) {
                        s3 = peg$c55;
                        peg$currPos += 2;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c56);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c60(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseRule() {
            var s0;
            s0 = peg$parseValZeroLine();
            if (s0 === peg$FAILED) {
                s0 = peg$parseValLine();
                if (s0 === peg$FAILED) {
                    s0 = peg$parseAttrMsidSemanticWmsClaimNoSpace();
                    if (s0 === peg$FAILED) {
                        s0 = peg$parseAttrMsidSemanticWmsClaimStarNoSpace();
                        if (s0 === peg$FAILED) {
                            s0 = peg$parseAttrMsidSemanticWmsClaimWithSpace();
                            if (s0 === peg$FAILED) {
                                s0 = peg$parseAttrExtmapAllowMixed();
                                if (s0 === peg$FAILED) {
                                    s0 = peg$parseASetupActpass();
                                    if (s0 === peg$FAILED) {
                                        s0 = peg$parseASetupActive();
                                        if (s0 === peg$FAILED) {
                                            s0 = peg$parseAMid0();
                                            if (s0 === peg$FAILED) {
                                                s0 = peg$parseSDash();
                                                if (s0 === peg$FAILED) {
                                                    s0 = peg$parseBAs30();
                                                    if (s0 === peg$FAILED) {
                                                        s0 = peg$parseTZeroZero();
                                                        if (s0 === peg$FAILED) {
                                                            s0 = peg$parseStandardOrigin();
                                                            if (s0 === peg$FAILED) {
                                                                s0 = peg$parseStandardMozOrigin();
                                                                if (s0 === peg$FAILED) {
                                                                    s0 = peg$parseStandardSctpPort();
                                                                    if (s0 === peg$FAILED) {
                                                                        s0 = peg$parseCustomSctpPort();
                                                                        if (s0 === peg$FAILED) {
                                                                            s0 = peg$parseStandardMaxMessageSize();
                                                                            if (s0 === peg$FAILED) {
                                                                                s0 = peg$parseCustomMaxMessageSize();
                                                                                if (s0 === peg$FAILED) {
                                                                                    s0 = peg$parseCClaimIp4();
                                                                                    if (s0 === peg$FAILED) {
                                                                                        s0 = peg$parseStandardMApplication();
                                                                                        if (s0 === peg$FAILED) {
                                                                                            s0 = peg$parseAStandardLocalCandidate();
                                                                                            if (s0 === peg$FAILED) {
                                                                                                s0 = peg$parseAStandardGuidLocalCandidate();
                                                                                                if (s0 === peg$FAILED) {
                                                                                                    s0 = peg$parseAStandardGuidLocalCandidateFfUS();
                                                                                                    if (s0 === peg$FAILED) {
                                                                                                        s0 = peg$parseAStandardIp4RemoteCandidate();
                                                                                                        if (s0 === peg$FAILED) {
                                                                                                            s0 = peg$parseAStandardIp4RemoteCandidateFfUS();
                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                s0 = peg$parseAStandardAGenTcpCandidate();
                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                    s0 = peg$parseAStandardAGenTcp6Candidate();
                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                        s0 = peg$parseAStandardAGenUdp4Candidate();
                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                            s0 = peg$parseAStandardAGenUdp6HostCandidate();
                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                s0 = peg$parseAIcePwdV();
                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                    s0 = peg$parseAIcePwdL();
                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                        s0 = peg$parseAIcePwd();
                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                            s0 = peg$parseAIceUFrag4();
                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                s0 = peg$parseAIceUFrag8();
                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                    s0 = peg$parseAFingerprint();
                                                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                                                        s0 = peg$parseAGroupBundle0();
                                                                                                                                                        if (s0 === peg$FAILED) {
                                                                                                                                                            s0 = peg$parseASendRecv();
                                                                                                                                                            if (s0 === peg$FAILED) {
                                                                                                                                                                s0 = peg$parseAEndOfCandidates();
                                                                                                                                                                if (s0 === peg$FAILED) {
                                                                                                                                                                    s0 = peg$parseUnknownRule();
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return s0;
        }
        function peg$parseValZeroLine() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 3) === peg$c61) {
                s1 = peg$c61;
                peg$currPos += 3;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c62);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseUntilSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c63();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseValLine() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c64) {
                s1 = peg$c64;
                peg$currPos += 2;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c65);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseUntilSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c66(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseASendRecv() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 10) === peg$c67) {
                s1 = peg$c67;
                peg$currPos += 10;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c68);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseUntilSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c69(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseBAs30() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 7) === peg$c70) {
                s1 = peg$c70;
                peg$currPos += 7;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c71);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c72();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAEndOfCandidates() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 19) === peg$c73) {
                s1 = peg$c73;
                peg$currPos += 19;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c74);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseUntilSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c75(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAttrMsidSemanticWmsClaimNoSpace() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 19) === peg$c76) {
                s1 = peg$c76;
                peg$currPos += 19;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c77);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c78();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAttrMsidSemanticWmsClaimStarNoSpace() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 21) === peg$c79) {
                s1 = peg$c79;
                peg$currPos += 21;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c80);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c81();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAttrMsidSemanticWmsClaimWithSpace() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 20) === peg$c82) {
                s1 = peg$c82;
                peg$currPos += 20;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c83);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c84();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAttrExtmapAllowMixed() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 20) === peg$c85) {
                s1 = peg$c85;
                peg$currPos += 20;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c86);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c87();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseASetupActpass() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 15) === peg$c88) {
                s1 = peg$c88;
                peg$currPos += 15;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c89);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c90();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseASetupActive() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 14) === peg$c91) {
                s1 = peg$c91;
                peg$currPos += 14;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c92);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c93();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAMid0() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 7) === peg$c94) {
                s1 = peg$c94;
                peg$currPos += 7;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c95);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c96();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseSDash() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 3) === peg$c97) {
                s1 = peg$c97;
                peg$currPos += 3;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c98);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c99();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseMozVNum() {
            var s0;
            s0 = peg$parseMozVNum3();
            if (s0 === peg$FAILED) {
                s0 = peg$parseMozVNum2();
            }
            return s0;
        }
        function peg$parseMozVNum3() {
            var s0, s1, s2, s3, s4, s5;
            s0 = peg$currPos;
            s1 = peg$parseDecimal();
            if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                    s2 = peg$c20;
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c21);
                    }
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseDecimal();
                    if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 46) {
                            s4 = peg$c20;
                            peg$currPos++;
                        }
                        else {
                            s4 = peg$FAILED;
                            {
                                peg$fail(peg$c21);
                            }
                        }
                        if (s4 !== peg$FAILED) {
                            s5 = peg$parseDecimal();
                            if (s5 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c100(s1, s3, s5);
                                s0 = s1;
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseMozVNum2() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            s1 = peg$parseDecimal();
            if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                    s2 = peg$c20;
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c21);
                    }
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseDecimal();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c101(s1, s3);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseStandardOrigin() {
            var s0, s1, s2, s3, s4, s5, s6, s7;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 4) === peg$c102) {
                s1 = peg$c102;
                peg$currPos += 4;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c103);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 8) === peg$c106) {
                                s5 = peg$c106;
                                peg$currPos += 8;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c107);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseIP4();
                                if (s6 !== peg$FAILED) {
                                    s7 = peg$parseCapAtSeparator();
                                    if (s7 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c108(s2, s4, s6);
                                        s0 = s1;
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseStandardMozOrigin() {
            var s0, s1, s2, s3, s4, s5, s6;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 28) === peg$c109) {
                s1 = peg$c109;
                peg$currPos += 28;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c110);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseMozVNum();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 17) === peg$c111) {
                                s5 = peg$c111;
                                peg$currPos += 17;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c112);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseCapAtSeparator();
                                if (s6 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c113(s2, s4);
                                    s0 = s1;
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseTZeroZero() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 5) === peg$c114) {
                s1 = peg$c114;
                peg$currPos += 5;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c115);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c116();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseStandardSctpPort() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 16) === peg$c117) {
                s1 = peg$c117;
                peg$currPos += 16;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c118);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c119();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseCustomSctpPort() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c120) {
                s1 = peg$c120;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c121);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c122(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseStandardMaxMessageSize() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 25) === peg$c123) {
                s1 = peg$c123;
                peg$currPos += 25;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c124);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c125();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseCustomMaxMessageSize() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 19) === peg$c126) {
                s1 = peg$c126;
                peg$currPos += 19;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c127);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c128(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardLocalCandidate() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c131) {
                                s5 = peg$c131;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c132);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIP4();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                                s9 = peg$c104;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c105);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 34) === peg$c133) {
                                                        s11 = peg$c133;
                                                        peg$currPos += 34;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c134);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseDecimal();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseCapAtSeparator();
                                                            if (s13 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c135(s2, s4, s6, s8, s10, s12);
                                                                s0 = s1;
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardGuidLocalCandidate() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c131) {
                                s5 = peg$c131;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c132);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseGUID();
                                        if (s8 !== peg$FAILED) {
                                            if (input.substr(peg$currPos, 7) === peg$c136) {
                                                s9 = peg$c136;
                                                peg$currPos += 7;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c137);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 39) === peg$c138) {
                                                        s11 = peg$c138;
                                                        peg$currPos += 39;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c139);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseCapAtSeparator();
                                                        if (s12 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c140(s2, s4, s6, s8, s10);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardGuidLocalCandidateFfUS() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c141) {
                                s5 = peg$c141;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c142);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseGUID();
                                        if (s8 !== peg$FAILED) {
                                            if (input.substr(peg$currPos, 7) === peg$c136) {
                                                s9 = peg$c136;
                                                peg$currPos += 7;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c137);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 9) === peg$c143) {
                                                        s11 = peg$c143;
                                                        peg$currPos += 9;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c144);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseCapAtSeparator();
                                                        if (s12 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c145(s2, s4, s6, s8, s10);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardIp4RemoteCandidate() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c131) {
                                s5 = peg$c131;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c132);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIP4();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                                s9 = peg$c104;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c105);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 17) === peg$c146) {
                                                        s11 = peg$c146;
                                                        peg$currPos += 17;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c147);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIP4();
                                                        if (s12 !== peg$FAILED) {
                                                            if (input.substr(peg$currPos, 7) === peg$c148) {
                                                                s13 = peg$c148;
                                                                peg$currPos += 7;
                                                            }
                                                            else {
                                                                s13 = peg$FAILED;
                                                                {
                                                                    peg$fail(peg$c149);
                                                                }
                                                            }
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseDecimal();
                                                                if (s14 !== peg$FAILED) {
                                                                    if (input.substr(peg$currPos, 12) === peg$c150) {
                                                                        s15 = peg$c150;
                                                                        peg$currPos += 12;
                                                                    }
                                                                    else {
                                                                        s15 = peg$FAILED;
                                                                        {
                                                                            peg$fail(peg$c151);
                                                                        }
                                                                    }
                                                                    if (s15 !== peg$FAILED) {
                                                                        s16 = peg$parseDecimal();
                                                                        if (s16 !== peg$FAILED) {
                                                                            if (input.substr(peg$currPos, 17) === peg$c152) {
                                                                                s17 = peg$c152;
                                                                                peg$currPos += 17;
                                                                            }
                                                                            else {
                                                                                s17 = peg$FAILED;
                                                                                {
                                                                                    peg$fail(peg$c153);
                                                                                }
                                                                            }
                                                                            if (s17 !== peg$FAILED) {
                                                                                s18 = peg$parseCapAtSeparator();
                                                                                if (s18 !== peg$FAILED) {
                                                                                    peg$savedPos = s0;
                                                                                    s1 = peg$c154(s2, s4, s6, s8, s10, s12, s14, s16);
                                                                                    s0 = s1;
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardIp4RemoteCandidateFfUS() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c141) {
                                s5 = peg$c141;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c142);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIP4();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                                s9 = peg$c104;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c105);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 17) === peg$c146) {
                                                        s11 = peg$c146;
                                                        peg$currPos += 17;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c147);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIP4();
                                                        if (s12 !== peg$FAILED) {
                                                            if (input.substr(peg$currPos, 7) === peg$c148) {
                                                                s13 = peg$c148;
                                                                peg$currPos += 7;
                                                            }
                                                            else {
                                                                s13 = peg$FAILED;
                                                                {
                                                                    peg$fail(peg$c149);
                                                                }
                                                            }
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseDecimal();
                                                                if (s14 !== peg$FAILED) {
                                                                    s15 = peg$parseCapAtSeparator();
                                                                    if (s15 !== peg$FAILED) {
                                                                        peg$savedPos = s0;
                                                                        s1 = peg$c155(s2, s4, s6, s8, s10, s12, s14);
                                                                        s0 = s1;
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardAGenTcpCandidate() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c156) {
                                s5 = peg$c156;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c157);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIP4();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                                s9 = peg$c104;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c105);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 49) === peg$c158) {
                                                        s11 = peg$c158;
                                                        peg$currPos += 49;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c159);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseDecimal();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseCapAtSeparator();
                                                            if (s13 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c160(s2, s4, s6, s8, s10, s12);
                                                                s0 = s1;
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardAGenTcp6Candidate() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c156) {
                                s5 = peg$c156;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c157);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIP6();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                                s9 = peg$c104;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c105);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 49) === peg$c158) {
                                                        s11 = peg$c158;
                                                        peg$currPos += 49;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c159);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseDecimal();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseCapAtSeparator();
                                                            if (s13 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c161(s2, s4, s6, s8, s10, s12);
                                                                s0 = s1;
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardAGenUdp4Candidate() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c131) {
                                s5 = peg$c131;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c132);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIP4();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                                s9 = peg$c104;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c105);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 17) === peg$c146) {
                                                        s11 = peg$c146;
                                                        peg$currPos += 17;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c147);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIP4();
                                                        if (s12 !== peg$FAILED) {
                                                            if (input.substr(peg$currPos, 7) === peg$c148) {
                                                                s13 = peg$c148;
                                                                peg$currPos += 7;
                                                            }
                                                            else {
                                                                s13 = peg$FAILED;
                                                                {
                                                                    peg$fail(peg$c149);
                                                                }
                                                            }
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseDecimal();
                                                                if (s14 !== peg$FAILED) {
                                                                    if (input.substr(peg$currPos, 25) === peg$c162) {
                                                                        s15 = peg$c162;
                                                                        peg$currPos += 25;
                                                                    }
                                                                    else {
                                                                        s15 = peg$FAILED;
                                                                        {
                                                                            peg$fail(peg$c163);
                                                                        }
                                                                    }
                                                                    if (s15 !== peg$FAILED) {
                                                                        s16 = peg$parseDecimal();
                                                                        if (s16 !== peg$FAILED) {
                                                                            s17 = peg$parseCapAtSeparator();
                                                                            if (s17 !== peg$FAILED) {
                                                                                peg$savedPos = s0;
                                                                                s1 = peg$c164(s2, s4, s6, s8, s10, s12, s14, s16);
                                                                                s0 = s1;
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAStandardAGenUdp6HostCandidate() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c130);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                        s3 = peg$c104;
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c105);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseDecimal();
                        if (s4 !== peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c131) {
                                s5 = peg$c131;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c132);
                                }
                            }
                            if (s5 !== peg$FAILED) {
                                s6 = peg$parseDecimal();
                                if (s6 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 32) {
                                        s7 = peg$c104;
                                        peg$currPos++;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c105);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseIP6();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 32) {
                                                s9 = peg$c104;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c105);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 34) === peg$c133) {
                                                        s11 = peg$c133;
                                                        peg$currPos += 34;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c134);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseDecimal();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseCapAtSeparator();
                                                            if (s13 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c165(s2, s4, s6, s8, s10, s12);
                                                                s0 = s1;
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAIcePwd() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 10) === peg$c166) {
                s1 = peg$c166;
                peg$currPos += 10;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c167);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar22();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c168(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAIcePwdL() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 10) === peg$c166) {
                s1 = peg$c166;
                peg$currPos += 10;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c167);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar24();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c169(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAIcePwdV() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 10) === peg$c166) {
                s1 = peg$c166;
                peg$currPos += 10;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c167);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar32();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c170(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAIceUFrag4() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c171) {
                s1 = peg$c171;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c172);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar4();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c173(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAIceUFrag8() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c171) {
                s1 = peg$c171;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c172);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar8();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c174(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAFingerprint() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 22) === peg$c175) {
                s1 = peg$c175;
                peg$currPos += 22;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c176);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCHex64();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c177(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseAGroupBundle0() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 16) === peg$c178) {
                s1 = peg$c178;
                peg$currPos += 16;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c179);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c180();
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseCClaimIp4() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 9) === peg$c181) {
                s1 = peg$c181;
                peg$currPos += 9;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c182);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIP4();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c183(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseStandardMApplication() {
            var s0, s1, s2, s3, s4;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 14) === peg$c184) {
                s1 = peg$c184;
                peg$currPos += 14;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c185);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 33) === peg$c186) {
                        s3 = peg$c186;
                        peg$currPos += 33;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c187);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseCapAtSeparator();
                        if (s4 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c188(s2);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseUnknownRule() {
            var s0, s1;
            s0 = peg$currPos;
            s1 = peg$parseUntilSeparator();
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c189(s1);
            }
            s0 = s1;
            return s0;
        }
        function peg$parseUntilSeparator() {
            var s0, s1, s2;
            s0 = peg$currPos;
            s1 = [];
            if (peg$c190.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c191);
                }
            }
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                if (peg$c190.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c191);
                    }
                }
            }
            if (s1 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c192) {
                    s2 = peg$c192;
                    peg$currPos += 2;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c193);
                    }
                }
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c194(s1);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
            return s0;
        }
        function peg$parseCapAtSeparator() {
            var s0;
            if (input.substr(peg$currPos, 2) === peg$c192) {
                s0 = peg$c192;
                peg$currPos += 2;
            }
            else {
                s0 = peg$FAILED;
                {
                    peg$fail(peg$c193);
                }
            }
            return s0;
        }
        function peg$parseUnknownTerminatingString() {
            var s0, s1, s2;
            s0 = peg$currPos;
            s1 = [];
            if (input.length > peg$currPos) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c195);
                }
            }
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                if (input.length > peg$currPos) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c195);
                    }
                }
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c196(s1);
            }
            s0 = s1;
            return s0;
        }
        function not_null(n) {
            return n === null ? '' : n;
        }
        function ast(kind, value) {
            const uses_short_nl = false;
            let retval = {
                kind,
                value,
                uses_short_nl,
                loc: location()
            };
            if (kind === 'standard_moz_origin') {
                retval.moz_ver = value[0].value;
                retval.sess = value[1];
                value = '';
            }
            if (['standard_origin',
                'standard_local_candidate',
                'standard_guid_local_candidate',
                'standard_guid_local_candidate_ffus',
                'standard_remote_candidate',
                'standard_remote_candidate_ffus',
                'standard_agen_tcp_candidate',
                'standard_agen_tcp6_candidate',
                'standard_agen_udp4_candidate',
                'standard_agen_udp6_host_candidate'
            ].includes(kind)) {
                retval.items = value;
                retval.value = '';
            }
            return retval;
        }
        peg$result = peg$startRuleFunction();
        if (peg$result !== peg$FAILED && peg$currPos === input.length) {
            return peg$result;
        }
        else {
            if (peg$result !== peg$FAILED && peg$currPos < input.length) {
                peg$fail(peg$endExpectation());
            }
            throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length
                ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
                : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
        }
    }
    var sdp_parser = {
        SyntaxError: peg$SyntaxError$1,
        parse: peg$parse
    };

    function peg$subclass(child, parent) {
        function ctor() { this.constructor = child; }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
    }
    function peg$SyntaxError(message, expected, found, location) {
        this.message = message;
        this.expected = expected;
        this.found = found;
        this.location = location;
        this.name = "SyntaxError";
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, peg$SyntaxError);
        }
    }
    peg$subclass(peg$SyntaxError, Error);
    peg$SyntaxError.buildMessage = function (expected, found) {
        var DESCRIBE_EXPECTATION_FNS = {
            literal: function (expectation) {
                return "\"" + literalEscape(expectation.text) + "\"";
            },
            "class": function (expectation) {
                var escapedParts = "", i;
                for (i = 0; i < expectation.parts.length; i++) {
                    escapedParts += expectation.parts[i] instanceof Array
                        ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
                        : classEscape(expectation.parts[i]);
                }
                return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
            },
            any: function (expectation) {
                return "any character";
            },
            end: function (expectation) {
                return "end of input";
            },
            other: function (expectation) {
                return expectation.description;
            }
        };
        function hex(ch) {
            return ch.charCodeAt(0).toString(16).toUpperCase();
        }
        function literalEscape(s) {
            return s
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function (ch) { return '\\x0' + hex(ch); })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return '\\x' + hex(ch); });
        }
        function classEscape(s) {
            return s
                .replace(/\\/g, '\\\\')
                .replace(/\]/g, '\\]')
                .replace(/\^/g, '\\^')
                .replace(/-/g, '\\-')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function (ch) { return '\\x0' + hex(ch); })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return '\\x' + hex(ch); });
        }
        function describeExpectation(expectation) {
            return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
        }
        function describeExpected(expected) {
            var descriptions = new Array(expected.length), i, j;
            for (i = 0; i < expected.length; i++) {
                descriptions[i] = describeExpectation(expected[i]);
            }
            descriptions.sort();
            if (descriptions.length > 0) {
                for (i = 1, j = 1; i < descriptions.length; i++) {
                    if (descriptions[i - 1] !== descriptions[i]) {
                        descriptions[j] = descriptions[i];
                        j++;
                    }
                }
                descriptions.length = j;
            }
            switch (descriptions.length) {
                case 1:
                    return descriptions[0];
                case 2:
                    return descriptions[0] + " or " + descriptions[1];
                default:
                    return descriptions.slice(0, -1).join(", ")
                        + ", or "
                        + descriptions[descriptions.length - 1];
            }
        }
        function describeFound(found) {
            return found ? "\"" + literalEscape(found) + "\"" : "end of input";
        }
        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };

    function parse(code) {
        return sdp_parser.parse(code);
    }

    const c_terminal = '\x00';
    const offer = '\x01', answer = '\x02', version_zero_line = '\x03', version_line = '\x04', a_msid_semantic_ns = '\x05', a_msid_semantic_star_ns = '\x06', a_msid_semantic_ws = '\x07', a_extmap_allow_mixed = '\x08', a_standard_sctp_port = '\x09', a_custom_sctp_port = '\x0a', a_standard_max_message_size = '\x0b', a_custom_max_message_size = '\x0c', a_setup_actpass = '\x0d', a_setup_active = '\x0e', a_mid_zero = '\x0f', s_dash = '\x10', t_zero_zero = '\x11', b_as_30 = '\x12', standard_origin = '\x13', standard_moz_origin = '\x14', standard_local_candidate = '\x15', standard_guid_local_candidate = '\x16', standard_guid_local_candidate_ffus = '\x17', standard_remote_candidate = '\x18', standard_remote_candidate_ffus = '\x19', standard_agen_tcp_candidate = '\x1a', standard_agen_tcp6_candidate = '\x1b', standard_agen_udp4_candidate = '\x1c', standard_agen_udp6_host_candidate = '\x1d', a_ice_pwd = '\x1e', a_ice_pwd_l = '\x1f', a_ice_pwd_v = '\x20', a_ice_ufrag_4 = '\x21', a_ice_ufrag_8 = '\x22', a_fingerprint_sha1_256 = '\x23', a_group_bundle_0 = '\x24', a_send_recv = '\x25', a_end_of_candidates = '\x26', c_claim_ip4 = '\x27', standard_m_application = '\x28';
    const unknown_line = '\x7e';
    const unknown_terminate = '\x7f';

    function moz_ver([maj, min, patch]) {
        return `${[maj, min, patch].filter(i => i !== undefined).map(i => i.toString()).join('.')}${c_terminal}`;
    }
    const parseable = {
        'unknown_line': (v) => `${unknown_line}${v.value}${c_terminal}`,
        'version_zero_line': (_) => `${version_zero_line}`,
        'version_line': (v) => `${version_line}${v.value}${c_terminal}`,
        'a_msid_semantic_ns': (_) => `${a_msid_semantic_ns}`,
        'a_msid_semantic_star_ns': (_) => `${a_msid_semantic_star_ns}`,
        'a_msid_semantic_ws': (_) => `${a_msid_semantic_ws}`,
        'a_extmap_allow_mixed': (_) => `${a_extmap_allow_mixed}`,
        'a_standard_sctp_port': (_) => `${a_standard_sctp_port}`,
        'a_custom_sctp_port': (v) => `${a_custom_sctp_port}${v.value}${c_terminal}`,
        'a_standard_max_message_size': (_) => `${a_standard_max_message_size}`,
        'a_custom_max_message_size': (v) => `${a_custom_max_message_size}${v.value}${c_terminal}`,
        'a_setup_actpass': (_) => `${a_setup_actpass}`,
        'a_setup_active': (_) => `${a_setup_active}`,
        'a_mid_zero': (_) => `${a_mid_zero}`,
        'a_group_bundle_0': (_) => `${a_group_bundle_0}`,
        'a_ice_pwd': (v) => `${a_ice_pwd}${v.value}${c_terminal}`,
        'a_ice_pwd_l': (v) => `${a_ice_pwd_l}${v.value}${c_terminal}`,
        'a_ice_pwd_v': (v) => `${a_ice_pwd_v}${v.value}${c_terminal}`,
        'a_ice_ufrag_4': (v) => `${a_ice_ufrag_4}${v.value}${c_terminal}`,
        'a_ice_ufrag_8': (v) => `${a_ice_ufrag_8}${v.value}${c_terminal}`,
        'a_fingerprint_sha1_256': (v) => `${a_fingerprint_sha1_256}${v.value}${c_terminal}`,
        'a_send_recv': (_) => `${a_send_recv}`,
        'a_end_of_candidates': (_) => `${a_end_of_candidates}`,
        's_dash': (_) => `${s_dash}`,
        't_zero_zero': (_) => `${t_zero_zero}`,
        'b_as_30': (_) => `${b_as_30}`,
        'c_claim_ip4': (v) => `${c_claim_ip4}${v.value}${c_terminal}`,
        'standard_m_application': (v) => `${standard_m_application}${v.value}${c_terminal}`,
        'standard_origin': (v) => {
            const { kind, items } = v;
            const [s, d, i] = items;
            if (kind !== 'standard_origin') {
                throw 'impossible';
            }
            return `${standard_origin}${s}${c_terminal}${d}${c_terminal}${i}${c_terminal}`;
        },
        'standard_moz_origin': (v) => {
            const smo = v, mvs = moz_ver(smo.moz_ver);
            return `${standard_moz_origin}${mvs}${smo.sess}${c_terminal}`;
        },
        'standard_guid_local_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i, d4] = items;
            if (kind !== 'standard_guid_local_candidate') {
                throw 'impossible';
            }
            return `${standard_guid_local_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i}${c_terminal}${d4}${c_terminal}`;
        },
        'standard_guid_local_candidate_ffus': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i, d4] = items;
            if (kind !== 'standard_guid_local_candidate_ffus') {
                throw 'impossible';
            }
            return `${standard_guid_local_candidate_ffus}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i}${c_terminal}${d4}${c_terminal}`;
        },
        'standard_local_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, p, d4] = items;
            if (kind !== 'standard_local_candidate') {
                throw 'impossible';
            }
            return `${standard_local_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${p}${c_terminal}${d4}${c_terminal}`;
        },
        'standard_remote_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
            if (kind !== 'standard_remote_candidate') {
                throw 'impossible';
            }
            return `${standard_remote_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${i2}${c_terminal}${d5}${c_terminal}${d6}${c_terminal}`;
        },
        'standard_remote_candidate_ffus': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5] = items;
            if (kind !== 'standard_remote_candidate_ffus') {
                throw 'impossible';
            }
            return `${standard_remote_candidate_ffus}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${i2}${c_terminal}${d5}${c_terminal}`;
        },
        'standard_agen_tcp_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, d5] = items;
            if (kind !== 'standard_agen_tcp_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_tcp_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${d5}${c_terminal}`;
        },
        'standard_agen_tcp6_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, d5] = items;
            if (kind !== 'standard_agen_tcp6_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_tcp6_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${d5}${c_terminal}`;
        },
        'standard_agen_udp4_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
            if (kind !== 'standard_agen_udp4_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_udp4_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${i2}${c_terminal}${d5}${c_terminal}${d6}${c_terminal}`;
        },
        'standard_agen_udp6_host_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, d5] = items;
            if (kind !== 'standard_agen_udp6_host_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_udp6_host_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${d5}${c_terminal}`;
        },
        'unknown_terminate': (v) => `${unknown_terminate}${v.value}`
    };
    function parsed_to_bytestring(parsed) {
        let work = '', ending = '', skip_iter = false;
        if (parsed.kind === 'offer') {
            work += offer;
        }
        else if (parsed.kind === 'answer') {
            work += answer;
        }
        else if (parsed.kind === 'unknown_terminate') {
            work += `${unknown_terminate}${parsed.value}`;
            skip_iter = true;
        }
        if (!skip_iter) {
            parsed.value.forEach(v => {
                if (parseable[v.kind] === undefined) {
                    throw new TypeError(`[pack] Impossible bytestring symbol found: ${JSON.stringify(v.kind)}`);
                }
                else {
                    work += parseable[v.kind](v);
                }
            });
        }
        return `${work}${ending}`;
    }
    function pack(original) {
        if (original === '') {
            return '';
        }
        const ParseTree = parse(original);
        if (Array.isArray(ParseTree)) {
            throw 'Degenerate PEG case - should not be possible, please report';
        }
        else {
            return parsed_to_bytestring(ParseTree);
        }
    }

    function unpack_sha_colons(str) {
        return (str.match(/.{1,2}/g) || []).join(':');
    }
    function unpack_ipv4(str) {
        const e = BigInt(str), d = e % 256n, c = (e >> 8n) % 256n, b = (e >> 16n) % 256n, a = (e >> 24n) % 256n;
        return `${a}.${b}.${c}.${d}`;
    }
    function unpack_guid(guid) {
        return `${guid.substring(0, 8)}-${guid.substring(8, 12)}-${guid.substring(12, 16)}-${guid.substring(16, 20)}-${guid.substring(20, 32)}`;
    }
    function unpack(bytestring) {
        if (bytestring === '') {
            return '';
        }
        let i, iC, work = '', at_end = '';
        function unpack_none(s) { return s; }
        function unpack_decimal(d) { return d; }
        function scan_forward_to_null(prefix, throw_label, unpacker = unpack_none, skip_r_n = false) {
            let found = false, end, finished = false;
            for (end = i + 1; end < iC && (finished === false); ++end) {
                if (bytestring.charAt(end) === c_terminal) {
                    found = end;
                    end = iC;
                    finished = true;
                }
            }
            if (found === false) {
                throw new RangeError(`No terminal null for ${throw_label} at ${i}`);
            }
            const unpacked = unpacker(bytestring.substring(i + 1, found));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i = found;
        }
        for (i = 0, iC = bytestring.length; i < iC; ++i) {
            switch (bytestring.charAt(i)) {
                case offer:
                    work += '{"type":"offer","sdp":"';
                    at_end = '"}' + at_end;
                    break;
                case answer:
                    work += '{"type":"answer","sdp":"';
                    at_end = '"}' + at_end;
                    break;
                case unknown_line:
                    scan_forward_to_null('', 'unknown_line');
                    break;
                case a_msid_semantic_ns:
                    work += `a=msid-semantic:WMS\r\n`;
                    break;
                case a_msid_semantic_star_ns:
                    work += `a=msid-semantic:WMS *\r\n`;
                    break;
                case a_msid_semantic_ws:
                    work += `a=msid-semantic: WMS\r\n`;
                    break;
                case a_extmap_allow_mixed:
                    work += `a=extmap-allow-mixed\r\n`;
                    break;
                case a_standard_sctp_port:
                    work += `a=sctp-port:5000\r\n`;
                    break;
                case a_custom_sctp_port:
                    scan_forward_to_null('a=sctp-port:', 'a_custom_sctp_port', unpack_decimal);
                    break;
                case a_standard_max_message_size:
                    work += 'a=max-message-size:262144\r\n';
                    break;
                case a_custom_max_message_size:
                    scan_forward_to_null('a=max-message-size:', 'a_custom_max_message_size', unpack_decimal);
                    break;
                case a_setup_actpass:
                    work += 'a=setup:actpass\r\n';
                    break;
                case a_setup_active:
                    work += 'a=setup:active\r\n';
                    break;
                case version_zero_line:
                    work += 'v=0\r\n';
                    break;
                case version_line:
                    scan_forward_to_null('v=', 'version_line');
                    break;
                case a_mid_zero:
                    work += 'a=mid:0\r\n';
                    break;
                case s_dash:
                    work += 's=-\r\n';
                    break;
                case t_zero_zero:
                    work += 't=0 0\r\n';
                    break;
                case b_as_30:
                    work += 'b=AS:30\r\n';
                    break;
                case a_group_bundle_0:
                    work += 'a=group:BUNDLE 0\r\n';
                    break;
                case a_send_recv:
                    work += 'a=sendrecv\r\n';
                    break;
                case a_end_of_candidates:
                    work += 'a=end-of-candidates\r\n';
                    break;
                case c_claim_ip4:
                    scan_forward_to_null('c=IN IP4 ', 'c_claim_ip4', unpack_ipv4, true);
                    work += '\r\n';
                    break;
                case standard_m_application:
                    scan_forward_to_null('m=application ', 'standard_m_application', undefined, true);
                    work += ' UDP/DTLS/SCTP webrtc-datachannel\r\n';
                    break;
                case standard_origin:
                    scan_forward_to_null('o=- ', 'standard_moz_origin_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                    scan_forward_to_null(' IN IP4 ', 'standard_moz_origin_3', unpack_ipv4, true);
                    work += '\r\n';
                    break;
                case standard_moz_origin:
                    scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                    work += ' 0 IN IP4 0.0.0.0\r\n';
                    break;
                case unknown_terminate:
                    work += bytestring.substring(i + 1, iC);
                    i = iC;
                    break;
                case standard_guid_local_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_local_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_local_candidate_2', undefined, true);
                    scan_forward_to_null(' udp ', 'standard_local_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_local_candidate_4', unpack_guid, true);
                    scan_forward_to_null('.local ', 'standard_local_candidate_5', undefined, true);
                    work += ' typ host generation 0 network-cost 999\r\n';
                    break;
                case standard_guid_local_candidate_ffus:
                    scan_forward_to_null(`a=candidate:`, 'standard_local_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_local_candidate_2', undefined, true);
                    scan_forward_to_null(' UDP ', 'standard_local_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_local_candidate_4', unpack_guid, true);
                    scan_forward_to_null('.local ', 'standard_local_candidate_5', undefined, true);
                    work += ' typ host\r\n';
                    break;
                case standard_local_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_guid_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_2', undefined, true);
                    scan_forward_to_null(' udp ', 'standard_guid_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', unpack_ipv4, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_tcp_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_guid_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_2', undefined, true);
                    scan_forward_to_null(' tcp ', 'standard_guid_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', unpack_ipv4, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_tcp6_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_guid_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_2', undefined, true);
                    scan_forward_to_null(' tcp ', 'standard_guid_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_udp4_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_guid_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_2', undefined, true);
                    scan_forward_to_null(' udp ', 'standard_guid_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', unpack_ipv4, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_5', undefined, true);
                    scan_forward_to_null(' typ srflx raddr ', 'standard_guid_candidate_6', unpack_ipv4, true);
                    scan_forward_to_null(' rport ', 'standard_guid_candidate_7', undefined, true);
                    scan_forward_to_null(' generation 0 network-id ', 'standard_guid_candidate_8', undefined, false);
                    break;
                case standard_agen_udp6_host_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_guid_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_2', undefined, true);
                    scan_forward_to_null(' udp ', 'standard_guid_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_5', undefined, true);
                    scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_6', undefined, false);
                    break;
                case standard_remote_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_remote_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_2', undefined, true);
                    scan_forward_to_null(' udp ', 'standard_remote_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_4', unpack_ipv4, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_5', undefined, true);
                    scan_forward_to_null(' typ srflx raddr ', 'standard_remote_candidate_6', unpack_ipv4, true);
                    scan_forward_to_null(' rport ', 'standard_remote_candidate_7', undefined, true);
                    scan_forward_to_null(' generation ', 'standard_remote_candidate_8', undefined, true);
                    work += ' network-cost 999\r\n';
                    break;
                case standard_remote_candidate_ffus:
                    scan_forward_to_null(`a=candidate:`, 'standard_remote_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_2', undefined, true);
                    scan_forward_to_null(' UDP ', 'standard_remote_candidate_3', undefined, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_4', unpack_ipv4, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_5', undefined, true);
                    scan_forward_to_null(' typ srflx raddr ', 'standard_remote_candidate_6', unpack_ipv4, true);
                    scan_forward_to_null(' rport ', 'standard_remote_candidate_7', undefined, false);
                    break;
                case a_ice_pwd:
                    scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd', undefined, false);
                    break;
                case a_ice_pwd_l:
                    scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd_l', undefined, false);
                    break;
                case a_ice_pwd_v:
                    scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd_v', undefined, false);
                    break;
                case a_ice_ufrag_4:
                    scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag_4', undefined, false);
                    break;
                case a_ice_ufrag_8:
                    scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag_8', undefined, false);
                    break;
                case a_fingerprint_sha1_256:
                    scan_forward_to_null(`a=fingerprint:sha-256 `, 'a_fingerprint_sha1_256', unpack_sha_colons, false);
                    break;
                default:
                    throw new TypeError(`[unpack] Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);
            }
        }
        return `${work}${at_end}`;
    }

    function byId(id) {
        const test = document.getElementById(id);
        if (test === null) {
            throw new Error(`No such element #${id}`);
        }
        return test;
    }
    function qSA(selector) {
        const test = document.querySelectorAll(selector);
        if (test === null) {
            return [];
        }
        return [...test];
    }
    function el(tag, { inner, className, onclick }) {
        const nTag = document.createElement(tag);
        if (inner) {
            nTag.innerHTML = inner;
        }
        if (className) {
            nTag.className = className;
        }
        if (onclick) {
            nTag.onclick = onclick;
        }
        return nTag;
    }
    function parse_table(parsed) {
        let result = '';
        parsed.value.forEach(v => result += `
    <tr${v.kind === 'unknown_line' ? ' class="unk"' : ''}>
      <td>${v.kind}</td>
      <td>${v.value}</td>
    </tr>
  `);
        return result;
    }
    function click_an_anchor(e, val) {
        if (e === undefined) {
            throw "Can't handle an event without an event (click_an_anchor)";
        }
        byId('example').innerHTML = val;
        if (e) {
            const src = e.target;
            if (src && (src instanceof HTMLAnchorElement)) {
                qSA('#list a').forEach(el => el.className = '');
                src.className = 'sel';
            }
        }
        const ex = document.querySelector('#example'), exp = document.querySelector('#pack'), exu = document.querySelector('#unpack');
        if ((ex !== null) && (exp !== null) && (exu !== null)) {
            ex.innerHTML = val;
            exp.innerHTML = pack(val)
                .split('')
                .map(ch => ch.charCodeAt(0) < 33 ? `<span class="ch">[${ch.charCodeAt(0)}]</span>` : ch)
                .join('&#x200b;');
            exu.innerHTML = unpack(pack(val));
        }
        const parsed = parse(val);
        byId('parse').innerHTML = parse_table(parsed);
    }
    function bootstrap() {
        const oe = Object.entries(full_set);
        oe.forEach(([k, v], _i) => {
            const p = parse(v), q = pack(v), c = p.value.filter(val => val.kind === 'unknown_line').length;
            const a = el('a', {
                inner: `${k} (${c})`,
                href: '#',
                onclick: (e) => click_an_anchor(e, v)
            });
            const tr = el('tr', {}), btd = el('td', {}), atd = el('td', {}), std = el('td', {});
            btd.innerHTML = `${q.length.toLocaleString()}b`;
            tr.appendChild(btd);
            std.innerHTML = `${((q.length / v.length) * 100).toFixed(1)}%`;
            tr.appendChild(std);
            atd.appendChild(a);
            tr.appendChild(atd);
            byId('listtgt')
                .append(tr);
        });
    }

    exports.bootstrap = bootstrap;

    return exports;

})({});
