var so_viewer = (function (exports) {
    'use strict';

    const full_set = {
        win_10_chrome_92_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=- 3117966035669467040 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 53878 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 10.0.0.163\r\na=candidate:2254048910 1 udp 2122262783 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 53876 typ host generation 0 network-id 2\r\na=candidate:794956039 1 udp 2122197247 2601:645:8400:6c20::a610 53877 typ host generation 0 network-id 3\r\na=candidate:1191081017 1 udp 2122129151 10.0.0.163 53878 typ host generation 0 network-id 1\r\na=candidate:3293969885 1 udp 2122063615 172.18.80.1 53879 typ host generation 0 network-id 4\r\na=candidate:3282507946 1 udp 2121998079 172.30.0.1 53880 typ host generation 0 network-id 5\r\na=candidate:3423470964 1 udp 2121932543 172.21.32.1 53881 typ host generation 0 network-id 6\r\na=ice-ufrag:4brc\r\na=ice-pwd:2RICOsokE48Lr55/YhAD+Bsn\r\na=fingerprint:sha-256 EA:B3:7F:DB:E4:2A:E8:42:5E:E4:99:74:FB:B6:11:5F:95:DF:50:03:9C:21:FA:22:9F:DC:70:61:42:AA:0A:CD\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}',
            replacements: [['2601:645:8400:6c20::a610', '2601:0645:8400:6C20:0000:0000:0000:A610'], ['2601:645:8400:6c20:a0ed:463d:b3d9:2e5b', '2601:0645:8400:6C20:A0ED:463D:B3D9:2E5B']]
        },
        win_10_chrome_92_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=- 1199580080461629164 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 59267 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:2254048910 1 udp 2122262783 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 59265 typ host generation 0 network-id 2\r\na=candidate:794956039 1 udp 2122197247 2601:645:8400:6c20::a610 59266 typ host generation 0 network-id 3\r\na=candidate:1191081017 1 udp 2122129151 10.0.0.163 59267 typ host generation 0 network-id 1\r\na=candidate:3293969885 1 udp 2122063615 172.18.80.1 59268 typ host generation 0 network-id 4\r\na=candidate:3282507946 1 udp 2121998079 172.30.0.1 59269 typ host generation 0 network-id 5\r\na=candidate:3423470964 1 udp 2121932543 172.21.32.1 59270 typ host generation 0 network-id 6\r\na=candidate:2782917333 1 udp 1685921535 73.162.196.213 59267 typ srflx raddr 10.0.0.163 rport 59267 generation 0 network-id 1\r\na=candidate:3369726590 1 tcp 1518283007 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 9 typ host tcptype active generation 0 network-id 2\r\na=candidate:1642196471 1 tcp 1518217471 2601:645:8400:6c20::a610 9 typ host tcptype active generation 0 network-id 3\r\na=candidate:142444745 1 tcp 1518149375 10.0.0.163 9 typ host tcptype active generation 0 network-id 1\r\na=candidate:2329280813 1 tcp 1518083839 172.18.80.1 9 typ host tcptype active generation 0 network-id 4\r\na=candidate:2368005210 1 tcp 1518018303 172.30.0.1 9 typ host tcptype active generation 0 network-id 5\r\na=candidate:2190342532 1 tcp 1517952767 172.21.32.1 9 typ host tcptype active generation 0 network-id 6\r\na=ice-ufrag:h2zg\r\na=ice-pwd:rLDrcPyQHODnE5SBbDM0vAHf\r\na=fingerprint:sha-256 F2:7A:3A:54:09:D3:6B:62:39:A2:21:5E:87:92:12:90:7C:D9:9C:F6:CC:9B:A4:62:BD:99:59:18:88:F7:92:BD\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}',
            replacements: [['2601:645:8400:6c20::a610', '2601:0645:8400:6C20:0000:0000:0000:A610'], ['2601:645:8400:6c20:a0ed:463d:b3d9:2e5b', '2601:0645:8400:6C20:A0ED:463D:B3D9:2E5B']]
        },
        win_10_edge_92_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=- 7915603849260443750 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1191081017 1 udp 2113937151 11e8c070-13e3-4270-9faa-d39303a92c4e.local 55289 typ host generation 0 network-cost 999\r\na=candidate:2254048910 1 udp 2113939711 8aad7c7f-2b5e-426d-9f79-c8e09ed00a57.local 55290 typ host generation 0 network-cost 999\r\na=ice-ufrag:qPHq\r\na=ice-pwd:J3SyqY3dyN7gM4eabGtNWMEl\r\na=fingerprint:sha-256 55:26:A3:DE:C3:39:28:FE:0B:BC:9D:34:2D:2D:9E:C0:82:90:BA:E3:EE:0C:24:88:02:74:38:D8:CC:74:8B:93\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}',
        },
        win_10_edge_92_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=- 6739192461737761423 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 57122 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:1191081017 1 udp 2113937151 849e395b-6ab1-47fa-b916-23570842e255.local 57122 typ host generation 0 network-cost 999\r\na=candidate:2254048910 1 udp 2113939711 356e97de-f36d-41e4-8f1f-689025403a0a.local 57123 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 73.162.196.213 57122 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:UnGC\r\na=ice-pwd:o+OTq5G3XG3OZTo95MpYZ2Uv\r\na=fingerprint:sha-256 D9:0A:41:AF:96:AD:8D:4D:92:99:F6:4F:00:2A:A6:D9:CC:4A:66:C7:41:73:91:36:27:AA:F2:D3:83:B7:96:4E\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        win_10_ff_90_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 4132699980109199001 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 55:03:F5:FC:86:8C:D4:DA:66:C9:8E:A8:48:A2:90:4F:9B:CA:40:20:A4:26:13:EF:11:4B:13:7B:3E:EC:AA:D7\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 53038 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:0 1 UDP 2122187007 3c13a9c1-7c2a-4488-acbb-941b11038490.local 53038 typ host\r\na=candidate:3 1 UDP 2122252543 dd18ee97-62d1-4182-8d9c-bb37c4d81204.local 53039 typ host\r\na=candidate:6 1 TCP 2105458943 3c13a9c1-7c2a-4488-acbb-941b11038490.local 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 dd18ee97-62d1-4182-8d9c-bb37c4d81204.local 9 typ host tcptype active\r\na=candidate:2 1 UDP 1685986815 73.162.196.213 53038 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:310a5c98f47860a105e56e1dd7bed2d6\r\na=ice-ufrag:6db5d205\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}',
        },
        win_10_ff_90_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 3697521683269937274 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 EE:3F:30:10:5A:DF:03:DB:03:BD:F7:F0:0A:AA:EC:A8:CE:E5:8E:27:2F:D2:C3:98:D5:D0:02:C7:6E:4E:1D:39\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 49715 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:0 1 UDP 2122187007 6e5376c2-8b34-4e8b-b3ad-013226137d7c.local 49715 typ host\r\na=candidate:3 1 UDP 2122252543 65a52bd0-9afc-4644-aeed-71ba737d36f8.local 49716 typ host\r\na=candidate:6 1 TCP 2105458943 6e5376c2-8b34-4e8b-b3ad-013226137d7c.local 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 65a52bd0-9afc-4644-aeed-71ba737d36f8.local 9 typ host tcptype active\r\na=candidate:2 1 UDP 1685986815 73.162.196.213 49715 typ srflx raddr 0.0.0.0 rport 0\r\na=candidate:1 1 UDP 1685987327 73.162.196.213 49715 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:dd7f8829fc1eabc4ee080d8fd7375107\r\na=ice-ufrag:70b33dd9\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        },
        win_11_chrome_120_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 2678157242369022542 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:NYA6\r\na=ice-pwd:iZfyfFZxX+gTj9KCIYb0BNix\r\na=ice-options:trickle\r\na=fingerprint:sha-256 F2:4F:AA:1F:8C:BC:53:81:F7:40:FE:62:0E:2E:6B:B1:85:D8:1B:01:64:BF:DA:64:05:C6:54:D8:06:F8:89:38\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        win_11_chrome_120_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 2567065588211027114 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:RgDu\r\na=ice-pwd:rZiEmiBHAHvzyVcAlraBu/kh\r\na=ice-options:trickle\r\na=fingerprint:sha-256 7B:86:40:3D:2E:56:D5:A4:EC:40:E5:AC:E8:93:53:BA:3A:BD:F8:65:61:40:D9:EA:59:B8:00:76:7D:51:20:03\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        win_11_edge_120_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 946328523808010285 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:oOQf\r\na=ice-pwd:VwJUqeNRJymC4q/37dl0xlBC\r\na=ice-options:trickle\r\na=fingerprint:sha-256 71:B3:02:7B:84:93:8C:AE:06:87:AB:19:D8:E0:1A:2B:22:F7:74:BB:4C:60:18:5D:3F:20:14:E4:10:D0:50:6C\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        win_11_edge_120_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 2447170258275893545 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:J6ez\r\na=ice-pwd:WbD6bxCREKg0NqKXwwyNVDlJ\r\na=ice-options:trickle\r\na=fingerprint:sha-256 DB:CF:0B:CE:BA:A5:E7:72:6A:F3:16:97:71:CA:39:41:07:BA:75:7E:14:2D:60:39:5F:99:13:DE:68:F9:8E:1D\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        win_11_ff_121_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 9174982955772535077 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 6E:F7:06:B2:F8:8F:B6:57:B2:B2:3B:3B:20:B7:9B:A9:8D:27:0F:45:00:75:8E:08:1B:E8:3A:E2:05:4E:B7:4B\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=ice-pwd:78c5435f913d7a88ea9e7f86783cab21\r\na=ice-ufrag:4714ca59\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n" }'
        },
        win_11_ff_121_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 3275619132867348731 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 33:39:D1:6E:8B:D9:27:18:EE:5F:9F:40:FB:81:00:69:4F:01:27:43:F6:20:98:F6:87:4F:BD:03:43:00:C2:E5\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=ice-pwd:20b98b73deb06c4134af760a9ab07fbc\r\na=ice-ufrag:aa5be2c1\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n" }'
        },
        win_11_opr_106_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 7837827009204563780 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:37pc\r\na=ice-pwd:yJ2A9h3l0TjU2zUvZs7NfuHt\r\na=ice-options:trickle\r\na=fingerprint:sha-256 6F:44:D1:27:14:6D:B6:85:38:F6:2E:F1:C8:AA:70:E3:59:E4:E9:05:69:AF:D9:01:A6:F9:06:BA:0C:A1:F0:45\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        win_11_opr_106_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 4737882180827498696 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:LCzX\r\na=ice-pwd:KbcGObVElJAIRtgZN5h/OP/4\r\na=ice-options:trickle\r\na=fingerprint:sha-256 90:59:E4:77:D3:4D:ED:38:67:F3:C5:0D:23:B8:11:81:FE:9F:CD:D3:61:7A:E5:9B:9F:B7:31:F0:1C:4B:8C:96\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        and_12_edge_120_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 8831697522041600553 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:jGIA\r\na=ice-pwd:z6xvP9PcoWxDFw8SpJEw3P2Z\r\na=ice-options:trickle\r\na=fingerprint:sha-256 12:29:0D:CD:49:5C:C2:E6:1B:15:66:97:0B:25:7A:A8:77:2F:3D:DC:FD:37:B1:2F:39:E1:A8:8D:30:C5:B8:3A\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        and_12_edge_120_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 9053595198044270296 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:a3TB\r\na=ice-pwd:tO3RxFuGrWJjEU/ElpZRAeXr\r\na=ice-options:trickle\r\na=fingerprint:sha-256 EE:02:7B:0A:8C:0C:71:E2:5D:C7:B1:84:56:FB:41:4A:B1:93:33:B8:80:F3:DF:9C:AD:73:26:CC:62:C7:BF:0B\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        and_12_chrome_120_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 155978072404339633 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:Ekvs\r\na=ice-pwd:h0m4arMSsRLMt0l3ngDlqddt\r\na=ice-options:trickle\r\na=fingerprint:sha-256 35:AF:2E:85:3A:D6:C9:42:57:1F:7F:51:E9:E5:EC:84:0B:64:60:0D:E8:C1:87:7A:43:06:FF:81:FA:E1:1B:7A\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        and_12_chrome_120_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 7318237576516255092 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:z6qQ\r\na=ice-pwd:kbYxh8kvDAkICiWMq9KuY720\r\na=ice-options:trickle\r\na=fingerprint:sha-256 A1:76:47:F9:59:B4:29:8E:59:67:A5:42:7C:E9:D1:78:9E:23:5F:C8:DB:12:56:28:CD:38:F3:16:C6:59:67:54\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        lin_chr_92_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=- 70000675252925255 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 57450 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 174.76.140.210\r\na=candidate:2124260940 1 udp 2113937151 0a84f1cd-ca83-40ef-a739-9741b4e35692.local 57450 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 174.76.140.210 57450 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:x7ol\r\na=ice-pwd:IHaZv0XVPhvI12dHjRZ4hglz\r\na=fingerprint:sha-256 53:E4:1E:59:75:C6:9D:4B:40:10:D4:A2:33:41:62:AE:27:82:A6:B9:66:B1:E6:D2:E7:D0:08:F6:D6:73:CA:D1\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        lin_chr_92_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=- 289338293838051430 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 56494 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 174.76.140.210\r\na=candidate:2124260940 1 udp 2113937151 5aa2112c-8b10-472a-b004-1552ccc8aeb2.local 56494 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 174.76.140.210 56494 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:Y5/M\r\na=ice-pwd:RXGzLLczZGCaCbGpwl7jmogb\r\na=fingerprint:sha-256 8C:6F:89:5E:63:35:D4:4F:23:F3:BB:3D:93:16:7E:52:0F:12:D9:E9:04:87:9A:54:F2:1A:3A:9A:B4:ED:8B:E0\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        mac_saf_14_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=- 7598760969245791746 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=msid-semantic: WMS\r\nm=application 52283 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1889231604 1 udp 2113937151 df01c2bb-ec48-4b45-9a3a-2b0035e4af35.local 52283 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 71.202.120.145 52283 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:2xNs\r\na=ice-pwd:zMt6+BOpWZBZtoByUEvVzaTV\r\na=fingerprint:sha-256 6A:38:D2:22:3A:37:30:FB:FD:BB:D9:2D:03:16:86:92:B8:2E:7B:5C:19:A0:07:87:76:94:42:8B:69:19:78:CD\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        mac_saf_14_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=- 4209347552723437851 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=msid-semantic: WMS\r\nm=application 60482 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\nb=AS:30\r\na=candidate:1889231604 1 udp 2113937151 2944e419-e8e0-4cd6-ad95-fdc604568fc0.local 60482 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 71.202.120.145 60482 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:tatN\r\na=ice-pwd:m5a4KagaVEyy5hlkYu8v9BOU\r\na=fingerprint:sha-256 52:4B:3F:3C:31:7C:03:DA:07:CE:2B:72:03:47:3C:DC:80:98:DE:3E:05:CF:EA:CF:EA:70:05:B0:F1:35:2D:E6\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        mac_chrome_92_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=- 6764666962177986141 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 63239 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 71.202.120.145\r\na=candidate:1889231604 1 udp 2113937151 e1164bca-b76a-4485-9abb-1e80551037c5.local 63239 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 71.202.120.145 63239 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:xhDx\r\na=ice-pwd:ROMAYuF1l6IsYoHwN9+9pQDy\r\na=fingerprint:sha-256 6C:20:DB:65:F1:17:D2:B4:B9:21:CD:73:86:69:CE:99:5D:98:01:36:B8:2B:60:AF:7A:06:AE:03:1F:86:66:40\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        mac_chrome_92_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=- 4226377727938899149 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 54414 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 71.202.120.145\r\na=candidate:1889231604 1 udp 2113937151 6b13d8ce-9ef1-45e3-9a5a-e6274c9aef13.local 54414 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 71.202.120.145 54414 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:R0fi\r\na=ice-pwd:biCmik4OpSuDAhhUBVKaHqOS\r\na=fingerprint:sha-256 9A:EF:BC:44:7B:5F:87:A6:F6:C7:19:EA:C9:0E:3E:BA:C5:63:34:B6:6D:7D:64:AA:D6:FB:84:29:F4:51:B2:AA\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        mac_10_15_arc_1_26_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 5893445047289023509 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:RLTo\r\na=ice-pwd:iRZpBBUBk1MBP1WQKeNNGS+e\r\na=ice-options:trickle\r\na=fingerprint:sha-256 19:09:44:A3:18:4C:09:E6:DB:E4:5C:85:5C:9F:3B:77:F6:7F:D8:5A:32:4B:D4:68:44:56:68:A1:65:49:B5:EE\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        mac_10_15_arc_1_26_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 4779243679514643204 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:E98w\r\na=ice-pwd:q2ESQVw5xlA9gDWtOHynWO/L\r\na=ice-options:trickle\r\na=fingerprint:sha-256 77:D8:46:E3:AF:28:73:4A:CC:E7:23:52:26:35:DA:D0:E6:13:26:C6:07:62:95:86:26:7C:27:94:81:35:6F:3E\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        r_pi_5_chrome_120_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 7636279377729593462 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:6lu5\r\na=ice-pwd:m+2oG0WZdzrJVUlITTkqAF4S\r\na=ice-options:trickle\r\na=fingerprint:sha-256 BE:CE:70:42:E1:F5:C2:2C:F7:DE:85:9D:8A:97:F1:5D:17:5F:50:99:C3:85:5C:86:38:8F:E9:8E:FB:F8:86:3A\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        r_pi_5_chrome_120_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 5938623485897448230 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:FbuN\r\na=ice-pwd:j/PLYBjRrVgK7bwOuZKIt88+\r\na=ice-options:trickle\r\na=fingerprint:sha-256 2B:DD:93:7D:22:47:BC:CD:44:D9:D8:EC:AD:FD:0A:62:8A:28:CB:59:F2:57:3A:88:06:97:9B:96:3C:9B:04:09\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        fbsd_13_2_kde_falkon23_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 8750675112556966473 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 0D:05:08:C5:59:85:C8:A4:22:E4:ED:B0:09:BA:9B:60:57:17:F8:08:30:4E:CE:8D:CD:AE:86:41:FC:62:FB:9F\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=ice-pwd:99c5d2645bbf0e93d3ee0d95ec1247f2\r\na=ice-ufrag:6cdd2f4a\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n" }'
        },
        fbsd_13_2_kde_falkon23_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 8368113761926354517 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\nice-ufrag:JaHm\r\na=ice-pwd:pUUu8yqA96h34g1TvPXYH0JK\r\na=ice-options:trickle\r\na=fingerprint:sha-256 5C:8C:27:25:93:42:83:47:AD:E1:93:12:83:1B:94:9B:0B:15:5D:38:65:5D:D2:A2:5F:A5:5C:A7:48:C6:B1:20\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        arch_6_4_ff_117_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 8750675112556966473 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 0D:05:08:C5:59:85:C8:A4:22:E4:ED:B0:09:BA:9B:60:57:17:F8:08:30:4E:CE:8D:CD:AE:86:41:FC:62:FB:9F\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=ice-pwd:99c5d2645bbf0e93d3ee0d95ec1247f2\r\na=ice-ufrag:6cdd2f4a\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n" }'
        },
        arch_6_4_ff_117_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 3184269940200823856 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 C0:81:4B:2C:2C:EA:8E:A6:91:8C:8E:B1:AC:1E:F6:82:AB:0C:A2:96:18:1D:B3:BE:8C:E3:00:39:F2:76:8F:86\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=ice-pwd:b026a9183afcce301b3ef2a75986b692\r\na=ice-ufrag:efd7d6b2\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n" }'
        },
        mac_10_15_ff_121_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 2934449328706449925 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 A0:83:6B:95:F6:0B:C7:8E:3A:C5:D8:69:F6:82:EB:B5:A6:5F:8E:F5:3C:84:AD:BF:5A:06:9D:32:98:8F:BE:BC\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=ice-pwd:26885a3b683bf26809c230e3a0626ac3\r\na=ice-ufrag:080cfb2c\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n" }'
        },
        mac_10_15_ff_121_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 2750278302785386281 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 64:8B:C7:B3:08:B3:90:9A:33:7F:68:D7:7F:DC:CC:EF:EC:7F:2B:FC:6C:C2:8F:65:53:19:9C:5A:FE:9D:41:A6\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=ice-pwd:69930a8699447968d7e8a9f96e545663\r\na=ice-ufrag:cf11dd9c\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n" }'
        },
        ios_17_ff_121_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 5868179010395214550 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:0Mf0\r\na=ice-pwd:SUMJsN2oECM0yGJjfk14rss0\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D9:84:6C:AD:D2:7A:AE:F6:17:E8:AC:E4:23:4C:F7:C1:DF:E8:04:BF:3E:BE:A5:F4:9B:7A:A9:7A:27:ED:7C:EC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        ios_17_ff_121_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 1261519408056551200 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:bIsA\r\na=ice-pwd:h0GoLt3tT1HRrwZXIElBMYch\r\na=ice-options:trickle\r\na=fingerprint:sha-256 B4:EA:2E:12:C3:FF:BA:4B:0D:2B:F3:2A:BF:F6:AB:34:22:FD:55:6E:FC:B6:96:31:FE:AB:A6:31:79:54:C8:14\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        ios_17_saf_17_1_host: {
            beacon: '{ "type": "offer", "sdp": "v=0\r\no=- 4147558865051687405 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:Cbys\r\na=ice-pwd:wEvvyfUQEL42BbwI20rTgpLP\r\na=ice-options:trickle\r\na=fingerprint:sha-256 DF:75:F3:8C:7F:8C:33:AD:08:FC:67:4F:4E:88:07:57:D1:52:F7:9D:61:97:5F:7F:11:8D:A7:6A:FF:03:1E:C6\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        ios_17_saf_17_1_client: {
            beacon: '{ "type": "answer", "sdp": "v=0\r\no=- 7407518013110035114 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:6xlI\r\na=ice-pwd:47kMarZFB/i8uwooUdJxEK1O\r\na=ice-options:trickle\r\na=fingerprint:sha-256 D7:DA:02:05:E3:23:37:D3:98:B2:37:D0:88:56:9D:7C:0C:62:D9:78:44:B7:7E:D7:63:10:A4:6C:DE:B7:41:6D\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }'
        },
        mac_ff_90_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 8780481601018288030 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 F2:36:08:79:70:A1:DE:CA:CA:51:36:9A:41:CE:BB:0A:44:AE:E1:E2:25:E6:DF:64:8D:12:F7:F7:63:4F:3D:88\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 58762 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122187007 afc4ef6d-f4c9-b346-818a-71edb74dc5c5.local 58762 typ host\r\na=candidate:3 1 UDP 2122252543 f2bbb2c3-37a1-ba4a-a7da-2b6117683fec.local 62057 typ host\r\na=candidate:6 1 TCP 2105458943 afc4ef6d-f4c9-b346-818a-71edb74dc5c5.local 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 f2bbb2c3-37a1-ba4a-a7da-2b6117683fec.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1685987327 84.60.72.107 58762 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:7a9acb1e1b8628b0326baa18fa5b0041\r\na=ice-ufrag:2f1da5f8\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        },
        mac_ff_90_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 5013133426580299668 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 B0:7F:14:FB:0C:70:6C:28:96:9F:AF:41:72:B2:A9:81:E0:9F:87:E3:A9:65:23:3D:CD:5D:62:1C:E3:37:F0:EC\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 59170 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122252543 84a78e7e-fe7a-7445-b8b5-2a579cbd5515.local 59170 typ host\r\na=candidate:3 1 TCP 2105524479 84a78e7e-fe7a-7445-b8b5-2a579cbd5515.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 84.60.72.107 59170 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:1d16f1682e70a195cc64c3ba2081b252\r\na=ice-ufrag:8042d877\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        },
        lin_ff_90_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-89.0 769404315534291318 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 61:A1:BD:55:C8:30:21:8E:F2:F6:6E:62:2B:AF:DF:AC:85:15:A3:6A:0D:CD:C4:D0:61:E5:C4:D6:C8:B0:5D:23\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 51652 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122187007 221ef227-2e49-4a0b-9b9d-dc8b767523e6.local 51652 typ host\r\na=candidate:3 1 UDP 2122252543 cb0e3d2b-6e98-486d-ae12-20ab92a74a80.local 34432 typ host\r\na=candidate:6 1 TCP 2105458943 221ef227-2e49-4a0b-9b9d-dc8b767523e6.local 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 cb0e3d2b-6e98-486d-ae12-20ab92a74a80.local 9 typ host tcptype active\r\na=candidate:2 1 UDP 1685986815 84.60.72.107 51652 typ srflx raddr 0.0.0.0 rport 0\r\na=candidate:1 1 UDP 1685987327 84.60.72.107 51652 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=ice-pwd:45b553d8a70d0f196317ec012348783c\r\na=ice-ufrag:5f0c2509\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        },
        lin_ff_90_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-89.0 9027965011613987778 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 AE:37:2B:B6:5C:64:77:00:BD:B2:2A:42:04:4D:7D:D5:FA:E8:03:2B:AF:AB:61:83:F9:17:C0:9E:96:F3:6D:81\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 49985 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122252543 d858bb58-9126-49f0-b2df-45d186e2b0bb.local 49985 typ host\r\na=candidate:3 1 TCP 2105524479 d858bb58-9126-49f0-b2df-45d186e2b0bb.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 84.60.72.107 49985 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:49160f549b6e0c83480b28be6ed668b6\r\na=ice-ufrag:c366cce3\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        },
        and_chr_92_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.3 8565418902372167288 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 69:EB:13:1C:19:41:41:BC:FE:38:1B:6F:B3:10:C7:44:47:06:8A:FB:8F:A5:43:CB:16:7E:AA:14:08:31:42:5C\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 43674 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122187007 192.168.178.55 43674 typ host\r\na=candidate:3 1 UDP 2122252543 fd00::1198:ca8:1810:db3d 40173 typ host\r\na=candidate:6 1 TCP 2105458943 192.168.178.55 9 typ host tcptype active\r\na=candidate:7 1 TCP 2105524479 fd00::1198:ca8:1810:db3d 9 typ host tcptype active\r\na=candidate:2 1 UDP 1685986815 84.60.72.107 43674 typ srflx raddr 192.168.178.55 rport 43674\r\na=candidate:1 1 UDP 1685987327 84.60.72.107 43674 typ srflx raddr 192.168.178.55 rport 43674\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:5617ec3ca2b73c041dc1a6dff86919e2\r\na=ice-ufrag:3299cfc8\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        },
        and_chr_92_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.3 2597204330739657318 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 F6:B9:48:44:6C:53:20:AC:E1:B1:79:3C:94:24:B4:FD:01:9D:13:C0:FA:32:FB:F8:F5:C5:8C:18:C2:90:04:AA\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 44719 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 84.60.72.107\r\na=candidate:0 1 UDP 2122252543 192.168.178.55 44719 typ host\r\na=candidate:3 1 TCP 2105524479 192.168.178.55 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 84.60.72.107 44719 typ srflx raddr 192.168.178.55 rport 44719\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:2a5302daa5d8531e366f8f531d8ec2cb\r\na=ice-ufrag:f8513283\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        },
        ubu_ff_90_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 215548880637133052 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 79:D4:BE:13:F2:B8:FC:8D:15:8B:6F:C7:45:65:19:08:1E:E8:D0:CA:79:8A:9B:E7:99:86:BE:A8:EF:02:D2:59\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 55958 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 188.122.86.210\r\na=candidate:0 1 UDP 2122252543 3b3c0941-3280-4426-aeb5-75a146ac1b75.local 55958 typ host\r\na=candidate:3 1 TCP 2105524479 3b3c0941-3280-4426-aeb5-75a146ac1b75.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 188.122.86.210 55958 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:659d23aa30d4506a6121ab02dadde0ac\r\na=ice-ufrag:9b3c1302\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        },
        ubu_ff_90_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-90.0.2 3403063738421746048 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 7E:27:9B:95:B9:E7:71:CB:66:57:57:BD:33:0C:C3:27:03:8F:23:EE:20:42:5F:5E:15:ED:3B:BA:6F:75:E2:D5\r\na=group:BUNDLE 0\r\na=msid-semantic:WMS *\r\nm=application 56143 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 188.122.86.210\r\na=candidate:0 1 UDP 2122252543 e9063063-af9e-4565-af1b-8540035660ce.local 56143 typ host\r\na=candidate:3 1 TCP 2105524479 e9063063-af9e-4565-af1b-8540035660ce.local 9 typ host tcptype active\r\na=candidate:1 1 UDP 1686052863 188.122.86.210 56143 typ srflx raddr 0.0.0.0 rport 0\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:444d47a3a580dea4dc769fd7472a6fff\r\na=ice-ufrag:f0bc1731\r\na=mid:0\r\na=setup:active\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}'
        }
    };

    var sdp_parser;
    var hasRequiredSdp_parser;

    function requireSdp_parser () {
    	if (hasRequiredSdp_parser) return sdp_parser;
    	hasRequiredSdp_parser = 1;
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
    	function peg$parse(input, options) {
    	    options = options !== undefined ? options : {};
    	    var peg$FAILED = {}, peg$startRuleFunctions = { RawDocument: peg$parseRawDocument, IP6N: peg$parseIP6N, AStandardTcpGuidLocalCandidateFfUSActive: peg$parseAStandardTcpGuidLocalCandidateFfUSActive }, peg$startRuleFunction = peg$parseRawDocument, peg$c0 = /^[0-9]/, peg$c1 = peg$classExpectation([["0", "9"]], false, false), peg$c2 = function (d) { return BigInt(d.join(''), 10); }, peg$c3 = /^[0-9a-fA-F]/, peg$c4 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false), peg$c5 = function (a, b) { return `${a}${b}`; }, peg$c6 = function (a, b, c, d) { return [a, b, c, d].join(''); }, peg$c7 = function (a, b, c, d, e, f, g, h) { return [a, b, c, d, e, f, g, h].join(''); }, peg$c8 = function (a, b, c, d, e, f, g, h, i, j, k, l) { return [a, b, c, d, e, f, g, h, i, j, k, l].join(''); }, peg$c9 = ":", peg$c10 = peg$literalExpectation(":", false), peg$c11 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F].join(''); }, peg$c12 = /^[0-9a-zA-Z\/+]/, peg$c13 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"], "/", "+"], false, false), peg$c14 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v].join(''); }, peg$c15 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x].join(''); }, peg$c16 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af].join(''); }, peg$c17 = "-", peg$c18 = peg$literalExpectation("-", false), peg$c19 = function (a, b, c, d, e) { return [a, b, c, d, e].join(''); }, peg$c20 = ".", peg$c21 = peg$literalExpectation(".", false), peg$c22 = function (a, b, c, d) { return ((((((a * 256n) + b) * 256n) + c) * 256n) + d).toString(); }, peg$c23 = function (Addr) { return Addr.map(n => n.toString(16).toUpperCase().padStart(4, '0')).join(':'); }, peg$c24 = function (A, B, C, D, E, F, G, H) { return [Number(A), Number(B), Number(C), Number(D), Number(E), Number(F), Number(G), Number(H)]; }, peg$c25 = /^[0-9a-zA-Z]/, peg$c26 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"]], false, false), peg$c27 = function (a, b, c, d) { return parseInt(`${a}${b ?? ''}${c ?? ''}${d ?? ''}`, 16); }, peg$c28 = "::", peg$c29 = peg$literalExpectation("::", false), peg$c30 = function (A, B, C, D, E, F, G, H) { return unelide([], [A, B, C, D, E, F, G, H]); }, peg$c31 = function (A, B, C, D, E, F, G, H) { return unelide([A], [B, C, D, E, F, G, H]); }, peg$c32 = function (A, B, C, D, E, F, G, H) { return unelide([A, B], [C, D, E, F, G, H]); }, peg$c33 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C], [D, E, F, G, H]); }, peg$c34 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D], [E, F, G, H]); }, peg$c35 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E], [F, G, H]); }, peg$c36 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F], [G, H]); }, peg$c37 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F, G], [H]); }, peg$c38 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F, G, H], []); }, peg$c39 = /^[ \r\n\t\x0B]/, peg$c40 = peg$classExpectation([" ", "\r", "\n", "\t", "\x0B"], false, false), peg$c41 = "{", peg$c42 = peg$literalExpectation("{", false), peg$c43 = "\"type\"", peg$c44 = peg$literalExpectation("\"type\"", false), peg$c45 = "\"offer\"", peg$c46 = peg$literalExpectation("\"offer\"", false), peg$c47 = ",", peg$c48 = peg$literalExpectation(",", false), peg$c49 = "\"sdp\"", peg$c50 = peg$literalExpectation("\"sdp\"", false), peg$c51 = "\"", peg$c52 = peg$literalExpectation("\"", false), peg$c53 = "}", peg$c54 = peg$literalExpectation("}", false), peg$c55 = function (s) { return ast('offer', s); }, peg$c56 = "\"answer\"", peg$c57 = peg$literalExpectation("\"answer\"", false), peg$c58 = function (s) { return ast('answer', s); }, peg$c59 = "v=0", peg$c60 = peg$literalExpectation("v=0", false), peg$c61 = function (us) { return ast('version_zero_line', undefined); }, peg$c62 = "v=", peg$c63 = peg$literalExpectation("v=", false), peg$c64 = function (us) { return ast('version_line', us); }, peg$c65 = "a=sendrecv", peg$c66 = peg$literalExpectation("a=sendrecv", false), peg$c67 = function (us) { return ast('a_send_recv', us); }, peg$c68 = "b=AS:30", peg$c69 = peg$literalExpectation("b=AS:30", false), peg$c70 = function () { return ast('b_as_30'); }, peg$c71 = "a=end-of-candidates", peg$c72 = peg$literalExpectation("a=end-of-candidates", false), peg$c73 = function (us) { return ast('a_end_of_candidates', us); }, peg$c74 = "a=msid-semantic:WMS", peg$c75 = peg$literalExpectation("a=msid-semantic:WMS", false), peg$c76 = function () { return ast('a_msid_semantic_ns'); }, peg$c77 = "a=msid-semantic:WMS *", peg$c78 = peg$literalExpectation("a=msid-semantic:WMS *", false), peg$c79 = function () { return ast('a_msid_semantic_star_ns'); }, peg$c80 = "a=msid-semantic: WMS", peg$c81 = peg$literalExpectation("a=msid-semantic: WMS", false), peg$c82 = function () { return ast('a_msid_semantic_ws'); }, peg$c83 = "a=extmap-allow-mixed", peg$c84 = peg$literalExpectation("a=extmap-allow-mixed", false), peg$c85 = function () { return ast('a_extmap_allow_mixed'); }, peg$c86 = "a=setup:actpass", peg$c87 = peg$literalExpectation("a=setup:actpass", false), peg$c88 = function () { return ast('a_setup_actpass'); }, peg$c89 = "a=setup:active", peg$c90 = peg$literalExpectation("a=setup:active", false), peg$c91 = function () { return ast('a_setup_active'); }, peg$c92 = "a=mid:0", peg$c93 = peg$literalExpectation("a=mid:0", false), peg$c94 = function () { return ast('a_mid_zero'); }, peg$c95 = "s=-", peg$c96 = peg$literalExpectation("s=-", false), peg$c97 = function () { return ast('s_dash'); }, peg$c98 = function (maj, min, patch) { return ast('moz_v_num', [maj, min, patch]); }, peg$c99 = function (maj, min) { return ast('moz_v_num', [maj, min, undefined]); }, peg$c100 = "o=- ", peg$c101 = peg$literalExpectation("o=- ", false), peg$c102 = " ", peg$c103 = peg$literalExpectation(" ", false), peg$c104 = " IN IP4 ", peg$c105 = peg$literalExpectation(" IN IP4 ", false), peg$c106 = function (msess, d, i) { return ast('standard_origin', [msess, d, i], [i]); }, peg$c107 = "o=mozilla...THIS_IS_SDPARTA-", peg$c108 = peg$literalExpectation("o=mozilla...THIS_IS_SDPARTA-", false), peg$c109 = " 0 IN IP4 0.0.0.0", peg$c110 = peg$literalExpectation(" 0 IN IP4 0.0.0.0", false), peg$c111 = function (mv, msess) { return ast('standard_moz_origin', [mv, msess]); }, peg$c112 = "t=0 0", peg$c113 = peg$literalExpectation("t=0 0", false), peg$c114 = function () { return ast('t_zero_zero'); }, peg$c115 = "a=ice-options:trickle", peg$c116 = peg$literalExpectation("a=ice-options:trickle", false), peg$c117 = function () { return ast('a_ice_options_trickle'); }, peg$c118 = "a=sctp-port:5000", peg$c119 = peg$literalExpectation("a=sctp-port:5000", false), peg$c120 = function () { return ast('a_standard_sctp_port'); }, peg$c121 = "a=sctp-port:", peg$c122 = peg$literalExpectation("a=sctp-port:", false), peg$c123 = function (data) { return ast('a_custom_sctp_port', data); }, peg$c124 = "a=max-message-size:262144", peg$c125 = peg$literalExpectation("a=max-message-size:262144", false), peg$c126 = function () { return ast('a_standard_max_message_size'); }, peg$c127 = "a=max-message-size:", peg$c128 = peg$literalExpectation("a=max-message-size:", false), peg$c129 = function (data) { return ast('a_custom_max_message_size', data); }, peg$c130 = "a=candidate:", peg$c131 = peg$literalExpectation("a=candidate:", false), peg$c132 = " udp ", peg$c133 = peg$literalExpectation(" udp ", false), peg$c134 = " typ host generation 0 network-id ", peg$c135 = peg$literalExpectation(" typ host generation 0 network-id ", false), peg$c136 = function (d1, d2, d3, i, p, d4) { return ast('standard_local_candidate', [d1, d2, d3, i, p, d4], [i]); }, peg$c137 = ".local ", peg$c138 = peg$literalExpectation(".local ", false), peg$c139 = " typ host generation 0 network-cost 999", peg$c140 = peg$literalExpectation(" typ host generation 0 network-cost 999", false), peg$c141 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate', [d1, d2, d3, g, d4]); }, peg$c142 = " UDP ", peg$c143 = peg$literalExpectation(" UDP ", false), peg$c144 = " typ host", peg$c145 = peg$literalExpectation(" typ host", false), peg$c146 = function (d1, d2, d3, i, d4) { return ast('standard_ip4_local_candidate_ffus', [d1, d2, d3, i, d4]); }, peg$c147 = " TCP ", peg$c148 = peg$literalExpectation(" TCP ", false), peg$c149 = " typ host tcptype active", peg$c150 = peg$literalExpectation(" typ host tcptype active", false), peg$c151 = function (d1, d2, d3, i, d4) { return ast('standard_ip4_local_candidate_ffus_active', [d1, d2, d3, i, d4]); }, peg$c152 = function (d1, d2, d3, g, d4) { return ast('standard_tcp_guid_local_candidate_ffus_active', [d1, d2, d3, g, d4]); }, peg$c153 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate_ffus', [d1, d2, d3, g, d4]); }, peg$c154 = " typ srflx raddr ", peg$c155 = peg$literalExpectation(" typ srflx raddr ", false), peg$c156 = " rport ", peg$c157 = peg$literalExpectation(" rport ", false), peg$c158 = " generation ", peg$c159 = peg$literalExpectation(" generation ", false), peg$c160 = " network-cost 999", peg$c161 = peg$literalExpectation(" network-cost 999", false), peg$c162 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_remote_candidate', [d1, d2, d3, i1, d4, i2, d5, d6], [i1, i2]); }, peg$c163 = function (d1, d2, d3, i1, d4, i2, d5) { return ast('standard_remote_candidate_ffus', [d1, d2, d3, i1, d4, i2, d5], [i1, i2]); }, peg$c164 = " tcp ", peg$c165 = peg$literalExpectation(" tcp ", false), peg$c166 = " typ host tcptype active generation 0 network-id ", peg$c167 = peg$literalExpectation(" typ host tcptype active generation 0 network-id ", false), peg$c168 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp_candidate', [d1, d2, d3, i1, d4, d5], [i1]); }, peg$c169 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp6_candidate', [d1, d2, d3, i1, d4, d5], undefined, [i1]); }, peg$c170 = " generation 0 network-id ", peg$c171 = peg$literalExpectation(" generation 0 network-id ", false), peg$c172 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_agen_udp4_candidate', [d1, d2, d3, i1, d4, i2, d5, d6], [i1]); }, peg$c173 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_udp6_host_candidate', [d1, d2, d3, i1, d4, d5], undefined, [i1]); }, peg$c174 = "a=ice-pwd:", peg$c175 = peg$literalExpectation("a=ice-pwd:", false), peg$c176 = function (data) { return ast('a_ice_pwd', data); }, peg$c177 = function (data) { return ast('a_ice_pwd_l', data); }, peg$c178 = function (data) { return ast('a_ice_pwd_v', data); }, peg$c179 = "a=ice-ufrag:", peg$c180 = peg$literalExpectation("a=ice-ufrag:", false), peg$c181 = function (data) { return ast('a_ice_ufrag_4', data); }, peg$c182 = "ice-ufrag:", peg$c183 = peg$literalExpectation("ice-ufrag:", false), peg$c184 = function (data) { return ast('falkon_a_ice_ufrag_4', data); }, peg$c185 = function (data) { return ast('a_ice_ufrag_8', data); }, peg$c186 = "a=fingerprint:sha-256 ", peg$c187 = peg$literalExpectation("a=fingerprint:sha-256 ", false), peg$c188 = function (data) { return ast('a_fingerprint_sha1_256', data); }, peg$c189 = "a=group:BUNDLE 0", peg$c190 = peg$literalExpectation("a=group:BUNDLE 0", false), peg$c191 = function () { return ast('a_group_bundle_0'); }, peg$c192 = "c=IN IP4 ", peg$c193 = peg$literalExpectation("c=IN IP4 ", false), peg$c194 = function (data) { return ast('c_claim_ip4', data, [data]); }, peg$c195 = "m=application ", peg$c196 = peg$literalExpectation("m=application ", false), peg$c197 = " UDP/DTLS/SCTP webrtc-datachannel", peg$c198 = peg$literalExpectation(" UDP/DTLS/SCTP webrtc-datachannel", false), peg$c199 = function (data) { return ast('standard_m_application', data); }, peg$c200 = function (us) { return ast('unknown_line', us); }, peg$c201 = /^[^'\r\n']/, peg$c202 = peg$classExpectation(["'", "\r", "\n", "'"], true, false), peg$c203 = "\r\n", peg$c204 = peg$literalExpectation("\r\n", false), peg$c205 = function (rl) { return rl.join(''); }, peg$c206 = peg$anyExpectation(), peg$c207 = function (uts) { return ast('unknown_terminate', uts.join('')); }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$result;
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
    	        return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
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
    	        var s0, s1;
    	        s0 = peg$currPos;
    	        s1 = peg$parseIP6N();
    	        if (s1 !== peg$FAILED) {
    	            peg$savedPos = s0;
    	            s1 = peg$c23(s1);
    	        }
    	        s0 = s1;
    	        return s0;
    	    }
    	    function peg$parseIP6N() {
    	        var s0;
    	        s0 = peg$parseIP6N_Full();
    	        if (s0 === peg$FAILED) {
    	            s0 = peg$parseIP6N_Elided();
    	        }
    	        return s0;
    	    }
    	    function peg$parseIP6N_Full() {
    	        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
    	        s0 = peg$currPos;
    	        s1 = peg$parseNQ();
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
    	                s3 = peg$parseNQ();
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
    	                        s5 = peg$parseNQ();
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
    	                                s7 = peg$parseNQ();
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
    	                                        s9 = peg$parseNQ();
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
    	                                                s11 = peg$parseNQ();
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
    	                                                        s13 = peg$parseNQ();
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
    	                                                                s15 = peg$parseNQ();
    	                                                                if (s15 !== peg$FAILED) {
    	                                                                    peg$savedPos = s0;
    	                                                                    s1 = peg$c24(s1, s3, s5, s7, s9, s11, s13, s15);
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
    	    function peg$parseNQ() {
    	        var s0, s1, s2, s3, s4;
    	        s0 = peg$currPos;
    	        if (peg$c25.test(input.charAt(peg$currPos))) {
    	            s1 = input.charAt(peg$currPos);
    	            peg$currPos++;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c26);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            if (peg$c25.test(input.charAt(peg$currPos))) {
    	                s2 = input.charAt(peg$currPos);
    	                peg$currPos++;
    	            }
    	            else {
    	                s2 = peg$FAILED;
    	                {
    	                    peg$fail(peg$c26);
    	                }
    	            }
    	            if (s2 === peg$FAILED) {
    	                s2 = null;
    	            }
    	            if (s2 !== peg$FAILED) {
    	                if (peg$c25.test(input.charAt(peg$currPos))) {
    	                    s3 = input.charAt(peg$currPos);
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c26);
    	                    }
    	                }
    	                if (s3 === peg$FAILED) {
    	                    s3 = null;
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    if (peg$c25.test(input.charAt(peg$currPos))) {
    	                        s4 = input.charAt(peg$currPos);
    	                        peg$currPos++;
    	                    }
    	                    else {
    	                        s4 = peg$FAILED;
    	                        {
    	                            peg$fail(peg$c26);
    	                        }
    	                    }
    	                    if (s4 === peg$FAILED) {
    	                        s4 = null;
    	                    }
    	                    if (s4 !== peg$FAILED) {
    	                        peg$savedPos = s0;
    	                        s1 = peg$c27(s1, s2, s3, s4);
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
    	    function peg$parseNQW() {
    	        var s0, s1, s2, s3, s4, s5;
    	        s0 = peg$currPos;
    	        if (peg$c25.test(input.charAt(peg$currPos))) {
    	            s1 = input.charAt(peg$currPos);
    	            peg$currPos++;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c26);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            if (peg$c25.test(input.charAt(peg$currPos))) {
    	                s2 = input.charAt(peg$currPos);
    	                peg$currPos++;
    	            }
    	            else {
    	                s2 = peg$FAILED;
    	                {
    	                    peg$fail(peg$c26);
    	                }
    	            }
    	            if (s2 === peg$FAILED) {
    	                s2 = null;
    	            }
    	            if (s2 !== peg$FAILED) {
    	                if (peg$c25.test(input.charAt(peg$currPos))) {
    	                    s3 = input.charAt(peg$currPos);
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c26);
    	                    }
    	                }
    	                if (s3 === peg$FAILED) {
    	                    s3 = null;
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    if (peg$c25.test(input.charAt(peg$currPos))) {
    	                        s4 = input.charAt(peg$currPos);
    	                        peg$currPos++;
    	                    }
    	                    else {
    	                        s4 = peg$FAILED;
    	                        {
    	                            peg$fail(peg$c26);
    	                        }
    	                    }
    	                    if (s4 === peg$FAILED) {
    	                        s4 = null;
    	                    }
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
    	                            peg$savedPos = s0;
    	                            s1 = peg$c27(s1, s2, s3, s4);
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
    	    function peg$parseIP6N_Elided() {
    	        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    	        s0 = peg$currPos;
    	        if (input.substr(peg$currPos, 2) === peg$c28) {
    	            s1 = peg$c28;
    	            peg$currPos += 2;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c29);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseNQW();
    	            if (s2 === peg$FAILED) {
    	                s2 = null;
    	            }
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseNQW();
    	                if (s3 === peg$FAILED) {
    	                    s3 = null;
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseNQW();
    	                    if (s4 === peg$FAILED) {
    	                        s4 = null;
    	                    }
    	                    if (s4 !== peg$FAILED) {
    	                        s5 = peg$parseNQW();
    	                        if (s5 === peg$FAILED) {
    	                            s5 = null;
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseNQW();
    	                            if (s6 === peg$FAILED) {
    	                                s6 = null;
    	                            }
    	                            if (s6 !== peg$FAILED) {
    	                                s7 = peg$parseNQW();
    	                                if (s7 === peg$FAILED) {
    	                                    s7 = null;
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseNQW();
    	                                    if (s8 === peg$FAILED) {
    	                                        s8 = null;
    	                                    }
    	                                    if (s8 !== peg$FAILED) {
    	                                        s9 = peg$parseNQ();
    	                                        if (s9 === peg$FAILED) {
    	                                            s9 = null;
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            peg$savedPos = s0;
    	                                            s1 = peg$c30(s2, s3, s4, s5, s6, s7, s8, s9);
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
    	            s1 = peg$parseNQ();
    	            if (s1 === peg$FAILED) {
    	                s1 = null;
    	            }
    	            if (s1 !== peg$FAILED) {
    	                if (input.substr(peg$currPos, 2) === peg$c28) {
    	                    s2 = peg$c28;
    	                    peg$currPos += 2;
    	                }
    	                else {
    	                    s2 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c29);
    	                    }
    	                }
    	                if (s2 !== peg$FAILED) {
    	                    s3 = peg$parseNQW();
    	                    if (s3 === peg$FAILED) {
    	                        s3 = null;
    	                    }
    	                    if (s3 !== peg$FAILED) {
    	                        s4 = peg$parseNQW();
    	                        if (s4 === peg$FAILED) {
    	                            s4 = null;
    	                        }
    	                        if (s4 !== peg$FAILED) {
    	                            s5 = peg$parseNQW();
    	                            if (s5 === peg$FAILED) {
    	                                s5 = null;
    	                            }
    	                            if (s5 !== peg$FAILED) {
    	                                s6 = peg$parseNQW();
    	                                if (s6 === peg$FAILED) {
    	                                    s6 = null;
    	                                }
    	                                if (s6 !== peg$FAILED) {
    	                                    s7 = peg$parseNQW();
    	                                    if (s7 === peg$FAILED) {
    	                                        s7 = null;
    	                                    }
    	                                    if (s7 !== peg$FAILED) {
    	                                        s8 = peg$parseNQW();
    	                                        if (s8 === peg$FAILED) {
    	                                            s8 = null;
    	                                        }
    	                                        if (s8 !== peg$FAILED) {
    	                                            s9 = peg$parseNQ();
    	                                            if (s9 === peg$FAILED) {
    	                                                s9 = null;
    	                                            }
    	                                            if (s9 !== peg$FAILED) {
    	                                                peg$savedPos = s0;
    	                                                s1 = peg$c31(s1, s3, s4, s5, s6, s7, s8, s9);
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
    	                s1 = peg$parseNQW();
    	                if (s1 === peg$FAILED) {
    	                    s1 = null;
    	                }
    	                if (s1 !== peg$FAILED) {
    	                    s2 = peg$parseNQ();
    	                    if (s2 === peg$FAILED) {
    	                        s2 = null;
    	                    }
    	                    if (s2 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 2) === peg$c28) {
    	                            s3 = peg$c28;
    	                            peg$currPos += 2;
    	                        }
    	                        else {
    	                            s3 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c29);
    	                            }
    	                        }
    	                        if (s3 !== peg$FAILED) {
    	                            s4 = peg$parseNQW();
    	                            if (s4 === peg$FAILED) {
    	                                s4 = null;
    	                            }
    	                            if (s4 !== peg$FAILED) {
    	                                s5 = peg$parseNQW();
    	                                if (s5 === peg$FAILED) {
    	                                    s5 = null;
    	                                }
    	                                if (s5 !== peg$FAILED) {
    	                                    s6 = peg$parseNQW();
    	                                    if (s6 === peg$FAILED) {
    	                                        s6 = null;
    	                                    }
    	                                    if (s6 !== peg$FAILED) {
    	                                        s7 = peg$parseNQW();
    	                                        if (s7 === peg$FAILED) {
    	                                            s7 = null;
    	                                        }
    	                                        if (s7 !== peg$FAILED) {
    	                                            s8 = peg$parseNQW();
    	                                            if (s8 === peg$FAILED) {
    	                                                s8 = null;
    	                                            }
    	                                            if (s8 !== peg$FAILED) {
    	                                                s9 = peg$parseNQ();
    	                                                if (s9 === peg$FAILED) {
    	                                                    s9 = null;
    	                                                }
    	                                                if (s9 !== peg$FAILED) {
    	                                                    peg$savedPos = s0;
    	                                                    s1 = peg$c32(s1, s2, s4, s5, s6, s7, s8, s9);
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
    	                    s1 = peg$parseNQW();
    	                    if (s1 === peg$FAILED) {
    	                        s1 = null;
    	                    }
    	                    if (s1 !== peg$FAILED) {
    	                        s2 = peg$parseNQW();
    	                        if (s2 === peg$FAILED) {
    	                            s2 = null;
    	                        }
    	                        if (s2 !== peg$FAILED) {
    	                            s3 = peg$parseNQ();
    	                            if (s3 === peg$FAILED) {
    	                                s3 = null;
    	                            }
    	                            if (s3 !== peg$FAILED) {
    	                                if (input.substr(peg$currPos, 2) === peg$c28) {
    	                                    s4 = peg$c28;
    	                                    peg$currPos += 2;
    	                                }
    	                                else {
    	                                    s4 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c29);
    	                                    }
    	                                }
    	                                if (s4 !== peg$FAILED) {
    	                                    s5 = peg$parseNQW();
    	                                    if (s5 === peg$FAILED) {
    	                                        s5 = null;
    	                                    }
    	                                    if (s5 !== peg$FAILED) {
    	                                        s6 = peg$parseNQW();
    	                                        if (s6 === peg$FAILED) {
    	                                            s6 = null;
    	                                        }
    	                                        if (s6 !== peg$FAILED) {
    	                                            s7 = peg$parseNQW();
    	                                            if (s7 === peg$FAILED) {
    	                                                s7 = null;
    	                                            }
    	                                            if (s7 !== peg$FAILED) {
    	                                                s8 = peg$parseNQW();
    	                                                if (s8 === peg$FAILED) {
    	                                                    s8 = null;
    	                                                }
    	                                                if (s8 !== peg$FAILED) {
    	                                                    s9 = peg$parseNQ();
    	                                                    if (s9 === peg$FAILED) {
    	                                                        s9 = null;
    	                                                    }
    	                                                    if (s9 !== peg$FAILED) {
    	                                                        peg$savedPos = s0;
    	                                                        s1 = peg$c33(s1, s2, s3, s5, s6, s7, s8, s9);
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
    	                        s1 = peg$parseNQW();
    	                        if (s1 === peg$FAILED) {
    	                            s1 = null;
    	                        }
    	                        if (s1 !== peg$FAILED) {
    	                            s2 = peg$parseNQW();
    	                            if (s2 === peg$FAILED) {
    	                                s2 = null;
    	                            }
    	                            if (s2 !== peg$FAILED) {
    	                                s3 = peg$parseNQW();
    	                                if (s3 === peg$FAILED) {
    	                                    s3 = null;
    	                                }
    	                                if (s3 !== peg$FAILED) {
    	                                    s4 = peg$parseNQ();
    	                                    if (s4 === peg$FAILED) {
    	                                        s4 = null;
    	                                    }
    	                                    if (s4 !== peg$FAILED) {
    	                                        if (input.substr(peg$currPos, 2) === peg$c28) {
    	                                            s5 = peg$c28;
    	                                            peg$currPos += 2;
    	                                        }
    	                                        else {
    	                                            s5 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c29);
    	                                            }
    	                                        }
    	                                        if (s5 !== peg$FAILED) {
    	                                            s6 = peg$parseNQW();
    	                                            if (s6 === peg$FAILED) {
    	                                                s6 = null;
    	                                            }
    	                                            if (s6 !== peg$FAILED) {
    	                                                s7 = peg$parseNQW();
    	                                                if (s7 === peg$FAILED) {
    	                                                    s7 = null;
    	                                                }
    	                                                if (s7 !== peg$FAILED) {
    	                                                    s8 = peg$parseNQW();
    	                                                    if (s8 === peg$FAILED) {
    	                                                        s8 = null;
    	                                                    }
    	                                                    if (s8 !== peg$FAILED) {
    	                                                        s9 = peg$parseNQ();
    	                                                        if (s9 === peg$FAILED) {
    	                                                            s9 = null;
    	                                                        }
    	                                                        if (s9 !== peg$FAILED) {
    	                                                            peg$savedPos = s0;
    	                                                            s1 = peg$c34(s1, s2, s3, s4, s6, s7, s8, s9);
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
    	                            s1 = peg$parseNQW();
    	                            if (s1 === peg$FAILED) {
    	                                s1 = null;
    	                            }
    	                            if (s1 !== peg$FAILED) {
    	                                s2 = peg$parseNQW();
    	                                if (s2 === peg$FAILED) {
    	                                    s2 = null;
    	                                }
    	                                if (s2 !== peg$FAILED) {
    	                                    s3 = peg$parseNQW();
    	                                    if (s3 === peg$FAILED) {
    	                                        s3 = null;
    	                                    }
    	                                    if (s3 !== peg$FAILED) {
    	                                        s4 = peg$parseNQW();
    	                                        if (s4 === peg$FAILED) {
    	                                            s4 = null;
    	                                        }
    	                                        if (s4 !== peg$FAILED) {
    	                                            s5 = peg$parseNQ();
    	                                            if (s5 === peg$FAILED) {
    	                                                s5 = null;
    	                                            }
    	                                            if (s5 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 2) === peg$c28) {
    	                                                    s6 = peg$c28;
    	                                                    peg$currPos += 2;
    	                                                }
    	                                                else {
    	                                                    s6 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c29);
    	                                                    }
    	                                                }
    	                                                if (s6 !== peg$FAILED) {
    	                                                    s7 = peg$parseNQW();
    	                                                    if (s7 === peg$FAILED) {
    	                                                        s7 = null;
    	                                                    }
    	                                                    if (s7 !== peg$FAILED) {
    	                                                        s8 = peg$parseNQW();
    	                                                        if (s8 === peg$FAILED) {
    	                                                            s8 = null;
    	                                                        }
    	                                                        if (s8 !== peg$FAILED) {
    	                                                            s9 = peg$parseNQ();
    	                                                            if (s9 === peg$FAILED) {
    	                                                                s9 = null;
    	                                                            }
    	                                                            if (s9 !== peg$FAILED) {
    	                                                                peg$savedPos = s0;
    	                                                                s1 = peg$c35(s1, s2, s3, s4, s5, s7, s8, s9);
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
    	                                s1 = peg$parseNQW();
    	                                if (s1 === peg$FAILED) {
    	                                    s1 = null;
    	                                }
    	                                if (s1 !== peg$FAILED) {
    	                                    s2 = peg$parseNQW();
    	                                    if (s2 === peg$FAILED) {
    	                                        s2 = null;
    	                                    }
    	                                    if (s2 !== peg$FAILED) {
    	                                        s3 = peg$parseNQW();
    	                                        if (s3 === peg$FAILED) {
    	                                            s3 = null;
    	                                        }
    	                                        if (s3 !== peg$FAILED) {
    	                                            s4 = peg$parseNQW();
    	                                            if (s4 === peg$FAILED) {
    	                                                s4 = null;
    	                                            }
    	                                            if (s4 !== peg$FAILED) {
    	                                                s5 = peg$parseNQW();
    	                                                if (s5 === peg$FAILED) {
    	                                                    s5 = null;
    	                                                }
    	                                                if (s5 !== peg$FAILED) {
    	                                                    s6 = peg$parseNQ();
    	                                                    if (s6 === peg$FAILED) {
    	                                                        s6 = null;
    	                                                    }
    	                                                    if (s6 !== peg$FAILED) {
    	                                                        if (input.substr(peg$currPos, 2) === peg$c28) {
    	                                                            s7 = peg$c28;
    	                                                            peg$currPos += 2;
    	                                                        }
    	                                                        else {
    	                                                            s7 = peg$FAILED;
    	                                                            {
    	                                                                peg$fail(peg$c29);
    	                                                            }
    	                                                        }
    	                                                        if (s7 !== peg$FAILED) {
    	                                                            s8 = peg$parseNQ();
    	                                                            if (s8 === peg$FAILED) {
    	                                                                s8 = null;
    	                                                            }
    	                                                            if (s8 !== peg$FAILED) {
    	                                                                s9 = peg$parseNQ();
    	                                                                if (s9 === peg$FAILED) {
    	                                                                    s9 = null;
    	                                                                }
    	                                                                if (s9 !== peg$FAILED) {
    	                                                                    peg$savedPos = s0;
    	                                                                    s1 = peg$c36(s1, s2, s3, s4, s5, s6, s8, s9);
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
    	                                    s1 = peg$parseNQW();
    	                                    if (s1 === peg$FAILED) {
    	                                        s1 = null;
    	                                    }
    	                                    if (s1 !== peg$FAILED) {
    	                                        s2 = peg$parseNQW();
    	                                        if (s2 === peg$FAILED) {
    	                                            s2 = null;
    	                                        }
    	                                        if (s2 !== peg$FAILED) {
    	                                            s3 = peg$parseNQW();
    	                                            if (s3 === peg$FAILED) {
    	                                                s3 = null;
    	                                            }
    	                                            if (s3 !== peg$FAILED) {
    	                                                s4 = peg$parseNQW();
    	                                                if (s4 === peg$FAILED) {
    	                                                    s4 = null;
    	                                                }
    	                                                if (s4 !== peg$FAILED) {
    	                                                    s5 = peg$parseNQW();
    	                                                    if (s5 === peg$FAILED) {
    	                                                        s5 = null;
    	                                                    }
    	                                                    if (s5 !== peg$FAILED) {
    	                                                        s6 = peg$parseNQW();
    	                                                        if (s6 === peg$FAILED) {
    	                                                            s6 = null;
    	                                                        }
    	                                                        if (s6 !== peg$FAILED) {
    	                                                            s7 = peg$parseNQ();
    	                                                            if (s7 === peg$FAILED) {
    	                                                                s7 = null;
    	                                                            }
    	                                                            if (s7 !== peg$FAILED) {
    	                                                                if (input.substr(peg$currPos, 2) === peg$c28) {
    	                                                                    s8 = peg$c28;
    	                                                                    peg$currPos += 2;
    	                                                                }
    	                                                                else {
    	                                                                    s8 = peg$FAILED;
    	                                                                    {
    	                                                                        peg$fail(peg$c29);
    	                                                                    }
    	                                                                }
    	                                                                if (s8 !== peg$FAILED) {
    	                                                                    s9 = peg$parseNQ();
    	                                                                    if (s9 === peg$FAILED) {
    	                                                                        s9 = null;
    	                                                                    }
    	                                                                    if (s9 !== peg$FAILED) {
    	                                                                        peg$savedPos = s0;
    	                                                                        s1 = peg$c37(s1, s2, s3, s4, s5, s6, s7, s9);
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
    	                                        s1 = peg$parseNQW();
    	                                        if (s1 === peg$FAILED) {
    	                                            s1 = null;
    	                                        }
    	                                        if (s1 !== peg$FAILED) {
    	                                            s2 = peg$parseNQW();
    	                                            if (s2 === peg$FAILED) {
    	                                                s2 = null;
    	                                            }
    	                                            if (s2 !== peg$FAILED) {
    	                                                s3 = peg$parseNQW();
    	                                                if (s3 === peg$FAILED) {
    	                                                    s3 = null;
    	                                                }
    	                                                if (s3 !== peg$FAILED) {
    	                                                    s4 = peg$parseNQW();
    	                                                    if (s4 === peg$FAILED) {
    	                                                        s4 = null;
    	                                                    }
    	                                                    if (s4 !== peg$FAILED) {
    	                                                        s5 = peg$parseNQW();
    	                                                        if (s5 === peg$FAILED) {
    	                                                            s5 = null;
    	                                                        }
    	                                                        if (s5 !== peg$FAILED) {
    	                                                            s6 = peg$parseNQW();
    	                                                            if (s6 === peg$FAILED) {
    	                                                                s6 = null;
    	                                                            }
    	                                                            if (s6 !== peg$FAILED) {
    	                                                                s7 = peg$parseNQW();
    	                                                                if (s7 === peg$FAILED) {
    	                                                                    s7 = null;
    	                                                                }
    	                                                                if (s7 !== peg$FAILED) {
    	                                                                    s8 = peg$parseNQ();
    	                                                                    if (s8 === peg$FAILED) {
    	                                                                        s8 = null;
    	                                                                    }
    	                                                                    if (s8 !== peg$FAILED) {
    	                                                                        if (input.substr(peg$currPos, 2) === peg$c28) {
    	                                                                            s9 = peg$c28;
    	                                                                            peg$currPos += 2;
    	                                                                        }
    	                                                                        else {
    	                                                                            s9 = peg$FAILED;
    	                                                                            {
    	                                                                                peg$fail(peg$c29);
    	                                                                            }
    	                                                                        }
    	                                                                        if (s9 !== peg$FAILED) {
    	                                                                            peg$savedPos = s0;
    	                                                                            s1 = peg$c38(s1, s2, s3, s4, s5, s6, s7, s8);
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
    	                                }
    	                            }
    	                        }
    	                    }
    	                }
    	            }
    	        }
    	        return s0;
    	    }
    	    function peg$parseWS() {
    	        var s0, s1;
    	        s0 = [];
    	        if (peg$c39.test(input.charAt(peg$currPos))) {
    	            s1 = input.charAt(peg$currPos);
    	            peg$currPos++;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c40);
    	            }
    	        }
    	        while (s1 !== peg$FAILED) {
    	            s0.push(s1);
    	            if (peg$c39.test(input.charAt(peg$currPos))) {
    	                s1 = input.charAt(peg$currPos);
    	                peg$currPos++;
    	            }
    	            else {
    	                s1 = peg$FAILED;
    	                {
    	                    peg$fail(peg$c40);
    	                }
    	            }
    	        }
    	        return s0;
    	    }
    	    function peg$parseOffer() {
    	        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19;
    	        s0 = peg$currPos;
    	        if (input.charCodeAt(peg$currPos) === 123) {
    	            s1 = peg$c41;
    	            peg$currPos++;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c42);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseWS();
    	            if (s2 !== peg$FAILED) {
    	                if (input.substr(peg$currPos, 6) === peg$c43) {
    	                    s3 = peg$c43;
    	                    peg$currPos += 6;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c44);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseWS();
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
    	                            s6 = peg$parseWS();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.substr(peg$currPos, 7) === peg$c45) {
    	                                    s7 = peg$c45;
    	                                    peg$currPos += 7;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c46);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseWS();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 44) {
    	                                            s9 = peg$c47;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c48);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseWS();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 5) === peg$c49) {
    	                                                    s11 = peg$c49;
    	                                                    peg$currPos += 5;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c50);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseWS();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        if (input.charCodeAt(peg$currPos) === 58) {
    	                                                            s13 = peg$c9;
    	                                                            peg$currPos++;
    	                                                        }
    	                                                        else {
    	                                                            s13 = peg$FAILED;
    	                                                            {
    	                                                                peg$fail(peg$c10);
    	                                                            }
    	                                                        }
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            s14 = peg$parseWS();
    	                                                            if (s14 !== peg$FAILED) {
    	                                                                if (input.charCodeAt(peg$currPos) === 34) {
    	                                                                    s15 = peg$c51;
    	                                                                    peg$currPos++;
    	                                                                }
    	                                                                else {
    	                                                                    s15 = peg$FAILED;
    	                                                                    {
    	                                                                        peg$fail(peg$c52);
    	                                                                    }
    	                                                                }
    	                                                                if (s15 !== peg$FAILED) {
    	                                                                    s16 = [];
    	                                                                    s17 = peg$parseRule();
    	                                                                    while (s17 !== peg$FAILED) {
    	                                                                        s16.push(s17);
    	                                                                        s17 = peg$parseRule();
    	                                                                    }
    	                                                                    if (s16 !== peg$FAILED) {
    	                                                                        if (input.charCodeAt(peg$currPos) === 34) {
    	                                                                            s17 = peg$c51;
    	                                                                            peg$currPos++;
    	                                                                        }
    	                                                                        else {
    	                                                                            s17 = peg$FAILED;
    	                                                                            {
    	                                                                                peg$fail(peg$c52);
    	                                                                            }
    	                                                                        }
    	                                                                        if (s17 !== peg$FAILED) {
    	                                                                            s18 = peg$parseWS();
    	                                                                            if (s18 !== peg$FAILED) {
    	                                                                                if (input.charCodeAt(peg$currPos) === 125) {
    	                                                                                    s19 = peg$c53;
    	                                                                                    peg$currPos++;
    	                                                                                }
    	                                                                                else {
    	                                                                                    s19 = peg$FAILED;
    	                                                                                    {
    	                                                                                        peg$fail(peg$c54);
    	                                                                                    }
    	                                                                                }
    	                                                                                if (s19 !== peg$FAILED) {
    	                                                                                    peg$savedPos = s0;
    	                                                                                    s1 = peg$c55(s16);
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
    	        return s0;
    	    }
    	    function peg$parseAnswer() {
    	        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19;
    	        s0 = peg$currPos;
    	        if (input.charCodeAt(peg$currPos) === 123) {
    	            s1 = peg$c41;
    	            peg$currPos++;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c42);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseWS();
    	            if (s2 !== peg$FAILED) {
    	                if (input.substr(peg$currPos, 6) === peg$c43) {
    	                    s3 = peg$c43;
    	                    peg$currPos += 6;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c44);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseWS();
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
    	                            s6 = peg$parseWS();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.substr(peg$currPos, 8) === peg$c56) {
    	                                    s7 = peg$c56;
    	                                    peg$currPos += 8;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c57);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseWS();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 44) {
    	                                            s9 = peg$c47;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c48);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseWS();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 5) === peg$c49) {
    	                                                    s11 = peg$c49;
    	                                                    peg$currPos += 5;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c50);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseWS();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        if (input.charCodeAt(peg$currPos) === 58) {
    	                                                            s13 = peg$c9;
    	                                                            peg$currPos++;
    	                                                        }
    	                                                        else {
    	                                                            s13 = peg$FAILED;
    	                                                            {
    	                                                                peg$fail(peg$c10);
    	                                                            }
    	                                                        }
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            s14 = peg$parseWS();
    	                                                            if (s14 !== peg$FAILED) {
    	                                                                if (input.charCodeAt(peg$currPos) === 34) {
    	                                                                    s15 = peg$c51;
    	                                                                    peg$currPos++;
    	                                                                }
    	                                                                else {
    	                                                                    s15 = peg$FAILED;
    	                                                                    {
    	                                                                        peg$fail(peg$c52);
    	                                                                    }
    	                                                                }
    	                                                                if (s15 !== peg$FAILED) {
    	                                                                    s16 = [];
    	                                                                    s17 = peg$parseRule();
    	                                                                    while (s17 !== peg$FAILED) {
    	                                                                        s16.push(s17);
    	                                                                        s17 = peg$parseRule();
    	                                                                    }
    	                                                                    if (s16 !== peg$FAILED) {
    	                                                                        if (input.charCodeAt(peg$currPos) === 34) {
    	                                                                            s17 = peg$c51;
    	                                                                            peg$currPos++;
    	                                                                        }
    	                                                                        else {
    	                                                                            s17 = peg$FAILED;
    	                                                                            {
    	                                                                                peg$fail(peg$c52);
    	                                                                            }
    	                                                                        }
    	                                                                        if (s17 !== peg$FAILED) {
    	                                                                            s18 = peg$parseWS();
    	                                                                            if (s18 !== peg$FAILED) {
    	                                                                                if (input.charCodeAt(peg$currPos) === 125) {
    	                                                                                    s19 = peg$c53;
    	                                                                                    peg$currPos++;
    	                                                                                }
    	                                                                                else {
    	                                                                                    s19 = peg$FAILED;
    	                                                                                    {
    	                                                                                        peg$fail(peg$c54);
    	                                                                                    }
    	                                                                                }
    	                                                                                if (s19 !== peg$FAILED) {
    	                                                                                    peg$savedPos = s0;
    	                                                                                    s1 = peg$c58(s16);
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
    	                                                        s0 = peg$parseIceOptionsTrickle();
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
    	                                                                                                        s0 = peg$parseAStandardTcpGuidLocalCandidateFfUSActive();
    	                                                                                                        if (s0 === peg$FAILED) {
    	                                                                                                            s0 = peg$parseAStandardIp4LocalCandidateFfUSActive();
    	                                                                                                            if (s0 === peg$FAILED) {
    	                                                                                                                s0 = peg$parseAStandardIp4LocalCandidateFfUS();
    	                                                                                                                if (s0 === peg$FAILED) {
    	                                                                                                                    s0 = peg$parseAStandardIp4RemoteCandidateFfUS();
    	                                                                                                                    if (s0 === peg$FAILED) {
    	                                                                                                                        s0 = peg$parseAStandardIp4RemoteCandidate();
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
    	                                                                                                                                                        s0 = peg$parseFalkonAIceUFrag4();
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
    	        if (input.substr(peg$currPos, 3) === peg$c59) {
    	            s1 = peg$c59;
    	            peg$currPos += 3;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c60);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseUntilSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c61();
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
    	        if (input.substr(peg$currPos, 2) === peg$c62) {
    	            s1 = peg$c62;
    	            peg$currPos += 2;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c63);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseUntilSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c64(s2);
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
    	        if (input.substr(peg$currPos, 10) === peg$c65) {
    	            s1 = peg$c65;
    	            peg$currPos += 10;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c66);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseUntilSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c67(s2);
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
    	        if (input.substr(peg$currPos, 7) === peg$c68) {
    	            s1 = peg$c68;
    	            peg$currPos += 7;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c69);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c70();
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
    	        if (input.substr(peg$currPos, 19) === peg$c71) {
    	            s1 = peg$c71;
    	            peg$currPos += 19;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c72);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseUntilSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c73(s2);
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
    	        if (input.substr(peg$currPos, 19) === peg$c74) {
    	            s1 = peg$c74;
    	            peg$currPos += 19;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c75);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c76();
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
    	        if (input.substr(peg$currPos, 21) === peg$c77) {
    	            s1 = peg$c77;
    	            peg$currPos += 21;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c78);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c79();
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
    	        if (input.substr(peg$currPos, 20) === peg$c80) {
    	            s1 = peg$c80;
    	            peg$currPos += 20;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c81);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c82();
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
    	        if (input.substr(peg$currPos, 20) === peg$c83) {
    	            s1 = peg$c83;
    	            peg$currPos += 20;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c84);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c85();
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
    	        if (input.substr(peg$currPos, 15) === peg$c86) {
    	            s1 = peg$c86;
    	            peg$currPos += 15;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c87);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c88();
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
    	        if (input.substr(peg$currPos, 14) === peg$c89) {
    	            s1 = peg$c89;
    	            peg$currPos += 14;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c90);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c91();
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
    	        if (input.substr(peg$currPos, 7) === peg$c92) {
    	            s1 = peg$c92;
    	            peg$currPos += 7;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c93);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c94();
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
    	        if (input.substr(peg$currPos, 3) === peg$c95) {
    	            s1 = peg$c95;
    	            peg$currPos += 3;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c96);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c97();
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
    	                            s1 = peg$c98(s1, s3, s5);
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
    	                    s1 = peg$c99(s1, s3);
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
    	        if (input.substr(peg$currPos, 4) === peg$c100) {
    	            s1 = peg$c100;
    	            peg$currPos += 4;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c101);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 8) === peg$c104) {
    	                            s5 = peg$c104;
    	                            peg$currPos += 8;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c105);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseIP4();
    	                            if (s6 !== peg$FAILED) {
    	                                s7 = peg$parseCapAtSeparator();
    	                                if (s7 !== peg$FAILED) {
    	                                    peg$savedPos = s0;
    	                                    s1 = peg$c106(s2, s4, s6);
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
    	        if (input.substr(peg$currPos, 28) === peg$c107) {
    	            s1 = peg$c107;
    	            peg$currPos += 28;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c108);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseMozVNum();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 17) === peg$c109) {
    	                            s5 = peg$c109;
    	                            peg$currPos += 17;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c110);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseCapAtSeparator();
    	                            if (s6 !== peg$FAILED) {
    	                                peg$savedPos = s0;
    	                                s1 = peg$c111(s2, s4);
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
    	        if (input.substr(peg$currPos, 5) === peg$c112) {
    	            s1 = peg$c112;
    	            peg$currPos += 5;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c113);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c114();
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
    	    function peg$parseIceOptionsTrickle() {
    	        var s0, s1, s2;
    	        s0 = peg$currPos;
    	        if (input.substr(peg$currPos, 21) === peg$c115) {
    	            s1 = peg$c115;
    	            peg$currPos += 21;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c116);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c117();
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
    	        if (input.substr(peg$currPos, 16) === peg$c118) {
    	            s1 = peg$c118;
    	            peg$currPos += 16;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c119);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c120();
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
    	        if (input.substr(peg$currPos, 12) === peg$c121) {
    	            s1 = peg$c121;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c122);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
    	                    peg$savedPos = s0;
    	                    s1 = peg$c123(s2);
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
    	        if (input.substr(peg$currPos, 25) === peg$c124) {
    	            s1 = peg$c124;
    	            peg$currPos += 25;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c125);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c126();
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
    	        if (input.substr(peg$currPos, 19) === peg$c127) {
    	            s1 = peg$c127;
    	            peg$currPos += 19;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c128);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
    	                    peg$savedPos = s0;
    	                    s1 = peg$c129(s2);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c132) {
    	                            s5 = peg$c132;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c133);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP4();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 34) === peg$c134) {
    	                                                    s11 = peg$c134;
    	                                                    peg$currPos += 34;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c135);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseDecimal();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        s13 = peg$parseCapAtSeparator();
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            peg$savedPos = s0;
    	                                                            s1 = peg$c136(s2, s4, s6, s8, s10, s12);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c132) {
    	                            s5 = peg$c132;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c133);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseGUID();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.substr(peg$currPos, 7) === peg$c137) {
    	                                            s9 = peg$c137;
    	                                            peg$currPos += 7;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c138);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 39) === peg$c139) {
    	                                                    s11 = peg$c139;
    	                                                    peg$currPos += 39;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c140);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseCapAtSeparator();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        peg$savedPos = s0;
    	                                                        s1 = peg$c141(s2, s4, s6, s8, s10);
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
    	    function peg$parseAStandardIp4LocalCandidateFfUS() {
    	        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
    	        s0 = peg$currPos;
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c142) {
    	                            s5 = peg$c142;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c143);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP4();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 9) === peg$c144) {
    	                                                    s11 = peg$c144;
    	                                                    peg$currPos += 9;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c145);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseCapAtSeparator();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        peg$savedPos = s0;
    	                                                        s1 = peg$c146(s2, s4, s6, s8, s10);
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
    	    function peg$parseAStandardIp4LocalCandidateFfUSActive() {
    	        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
    	        s0 = peg$currPos;
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c147) {
    	                            s5 = peg$c147;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c148);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP4();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 24) === peg$c149) {
    	                                                    s11 = peg$c149;
    	                                                    peg$currPos += 24;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c150);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseCapAtSeparator();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        peg$savedPos = s0;
    	                                                        s1 = peg$c151(s2, s4, s6, s8, s10);
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
    	    function peg$parseAStandardTcpGuidLocalCandidateFfUSActive() {
    	        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
    	        s0 = peg$currPos;
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c147) {
    	                            s5 = peg$c147;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c148);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseGUID();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.substr(peg$currPos, 7) === peg$c137) {
    	                                            s9 = peg$c137;
    	                                            peg$currPos += 7;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c138);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 24) === peg$c149) {
    	                                                    s11 = peg$c149;
    	                                                    peg$currPos += 24;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c150);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseCapAtSeparator();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        peg$savedPos = s0;
    	                                                        s1 = peg$c152(s2, s4, s6, s8, s10);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c142) {
    	                            s5 = peg$c142;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c143);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseGUID();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.substr(peg$currPos, 7) === peg$c137) {
    	                                            s9 = peg$c137;
    	                                            peg$currPos += 7;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c138);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 9) === peg$c144) {
    	                                                    s11 = peg$c144;
    	                                                    peg$currPos += 9;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c145);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseCapAtSeparator();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        peg$savedPos = s0;
    	                                                        s1 = peg$c153(s2, s4, s6, s8, s10);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c132) {
    	                            s5 = peg$c132;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c133);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP4();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 17) === peg$c154) {
    	                                                    s11 = peg$c154;
    	                                                    peg$currPos += 17;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c155);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseIP4();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        if (input.substr(peg$currPos, 7) === peg$c156) {
    	                                                            s13 = peg$c156;
    	                                                            peg$currPos += 7;
    	                                                        }
    	                                                        else {
    	                                                            s13 = peg$FAILED;
    	                                                            {
    	                                                                peg$fail(peg$c157);
    	                                                            }
    	                                                        }
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            s14 = peg$parseDecimal();
    	                                                            if (s14 !== peg$FAILED) {
    	                                                                if (input.substr(peg$currPos, 12) === peg$c158) {
    	                                                                    s15 = peg$c158;
    	                                                                    peg$currPos += 12;
    	                                                                }
    	                                                                else {
    	                                                                    s15 = peg$FAILED;
    	                                                                    {
    	                                                                        peg$fail(peg$c159);
    	                                                                    }
    	                                                                }
    	                                                                if (s15 !== peg$FAILED) {
    	                                                                    s16 = peg$parseDecimal();
    	                                                                    if (s16 !== peg$FAILED) {
    	                                                                        if (input.substr(peg$currPos, 17) === peg$c160) {
    	                                                                            s17 = peg$c160;
    	                                                                            peg$currPos += 17;
    	                                                                        }
    	                                                                        else {
    	                                                                            s17 = peg$FAILED;
    	                                                                            {
    	                                                                                peg$fail(peg$c161);
    	                                                                            }
    	                                                                        }
    	                                                                        if (s17 !== peg$FAILED) {
    	                                                                            s18 = peg$parseCapAtSeparator();
    	                                                                            if (s18 !== peg$FAILED) {
    	                                                                                peg$savedPos = s0;
    	                                                                                s1 = peg$c162(s2, s4, s6, s8, s10, s12, s14, s16);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c142) {
    	                            s5 = peg$c142;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c143);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP4();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 17) === peg$c154) {
    	                                                    s11 = peg$c154;
    	                                                    peg$currPos += 17;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c155);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseIP4();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        if (input.substr(peg$currPos, 7) === peg$c156) {
    	                                                            s13 = peg$c156;
    	                                                            peg$currPos += 7;
    	                                                        }
    	                                                        else {
    	                                                            s13 = peg$FAILED;
    	                                                            {
    	                                                                peg$fail(peg$c157);
    	                                                            }
    	                                                        }
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            s14 = peg$parseDecimal();
    	                                                            if (s14 !== peg$FAILED) {
    	                                                                s15 = peg$parseCapAtSeparator();
    	                                                                if (s15 !== peg$FAILED) {
    	                                                                    peg$savedPos = s0;
    	                                                                    s1 = peg$c163(s2, s4, s6, s8, s10, s12, s14);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c164) {
    	                            s5 = peg$c164;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c165);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP4();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 49) === peg$c166) {
    	                                                    s11 = peg$c166;
    	                                                    peg$currPos += 49;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c167);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseDecimal();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        s13 = peg$parseCapAtSeparator();
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            peg$savedPos = s0;
    	                                                            s1 = peg$c168(s2, s4, s6, s8, s10, s12);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c164) {
    	                            s5 = peg$c164;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c165);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP6();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 49) === peg$c166) {
    	                                                    s11 = peg$c166;
    	                                                    peg$currPos += 49;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c167);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseDecimal();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        s13 = peg$parseCapAtSeparator();
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            peg$savedPos = s0;
    	                                                            s1 = peg$c169(s2, s4, s6, s8, s10, s12);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c132) {
    	                            s5 = peg$c132;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c133);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP4();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 17) === peg$c154) {
    	                                                    s11 = peg$c154;
    	                                                    peg$currPos += 17;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c155);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseIP4();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        if (input.substr(peg$currPos, 7) === peg$c156) {
    	                                                            s13 = peg$c156;
    	                                                            peg$currPos += 7;
    	                                                        }
    	                                                        else {
    	                                                            s13 = peg$FAILED;
    	                                                            {
    	                                                                peg$fail(peg$c157);
    	                                                            }
    	                                                        }
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            s14 = peg$parseDecimal();
    	                                                            if (s14 !== peg$FAILED) {
    	                                                                if (input.substr(peg$currPos, 25) === peg$c170) {
    	                                                                    s15 = peg$c170;
    	                                                                    peg$currPos += 25;
    	                                                                }
    	                                                                else {
    	                                                                    s15 = peg$FAILED;
    	                                                                    {
    	                                                                        peg$fail(peg$c171);
    	                                                                    }
    	                                                                }
    	                                                                if (s15 !== peg$FAILED) {
    	                                                                    s16 = peg$parseDecimal();
    	                                                                    if (s16 !== peg$FAILED) {
    	                                                                        s17 = peg$parseCapAtSeparator();
    	                                                                        if (s17 !== peg$FAILED) {
    	                                                                            peg$savedPos = s0;
    	                                                                            s1 = peg$c172(s2, s4, s6, s8, s10, s12, s14, s16);
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
    	        if (input.substr(peg$currPos, 12) === peg$c130) {
    	            s1 = peg$c130;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c131);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.charCodeAt(peg$currPos) === 32) {
    	                    s3 = peg$c102;
    	                    peg$currPos++;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c103);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseDecimal();
    	                    if (s4 !== peg$FAILED) {
    	                        if (input.substr(peg$currPos, 5) === peg$c132) {
    	                            s5 = peg$c132;
    	                            peg$currPos += 5;
    	                        }
    	                        else {
    	                            s5 = peg$FAILED;
    	                            {
    	                                peg$fail(peg$c133);
    	                            }
    	                        }
    	                        if (s5 !== peg$FAILED) {
    	                            s6 = peg$parseDecimal();
    	                            if (s6 !== peg$FAILED) {
    	                                if (input.charCodeAt(peg$currPos) === 32) {
    	                                    s7 = peg$c102;
    	                                    peg$currPos++;
    	                                }
    	                                else {
    	                                    s7 = peg$FAILED;
    	                                    {
    	                                        peg$fail(peg$c103);
    	                                    }
    	                                }
    	                                if (s7 !== peg$FAILED) {
    	                                    s8 = peg$parseIP6();
    	                                    if (s8 !== peg$FAILED) {
    	                                        if (input.charCodeAt(peg$currPos) === 32) {
    	                                            s9 = peg$c102;
    	                                            peg$currPos++;
    	                                        }
    	                                        else {
    	                                            s9 = peg$FAILED;
    	                                            {
    	                                                peg$fail(peg$c103);
    	                                            }
    	                                        }
    	                                        if (s9 !== peg$FAILED) {
    	                                            s10 = peg$parseDecimal();
    	                                            if (s10 !== peg$FAILED) {
    	                                                if (input.substr(peg$currPos, 34) === peg$c134) {
    	                                                    s11 = peg$c134;
    	                                                    peg$currPos += 34;
    	                                                }
    	                                                else {
    	                                                    s11 = peg$FAILED;
    	                                                    {
    	                                                        peg$fail(peg$c135);
    	                                                    }
    	                                                }
    	                                                if (s11 !== peg$FAILED) {
    	                                                    s12 = peg$parseDecimal();
    	                                                    if (s12 !== peg$FAILED) {
    	                                                        s13 = peg$parseCapAtSeparator();
    	                                                        if (s13 !== peg$FAILED) {
    	                                                            peg$savedPos = s0;
    	                                                            s1 = peg$c173(s2, s4, s6, s8, s10, s12);
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
    	        if (input.substr(peg$currPos, 10) === peg$c174) {
    	            s1 = peg$c174;
    	            peg$currPos += 10;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c175);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseIceChar22();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
    	                    peg$savedPos = s0;
    	                    s1 = peg$c176(s2);
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
    	        if (input.substr(peg$currPos, 10) === peg$c174) {
    	            s1 = peg$c174;
    	            peg$currPos += 10;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c175);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseIceChar24();
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
    	    function peg$parseAIcePwdV() {
    	        var s0, s1, s2, s3;
    	        s0 = peg$currPos;
    	        if (input.substr(peg$currPos, 10) === peg$c174) {
    	            s1 = peg$c174;
    	            peg$currPos += 10;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c175);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseIceChar32();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
    	                    peg$savedPos = s0;
    	                    s1 = peg$c178(s2);
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
    	        if (input.substr(peg$currPos, 12) === peg$c179) {
    	            s1 = peg$c179;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c180);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseIceChar4();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
    	                    peg$savedPos = s0;
    	                    s1 = peg$c181(s2);
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
    	    function peg$parseFalkonAIceUFrag4() {
    	        var s0, s1, s2, s3;
    	        s0 = peg$currPos;
    	        if (input.substr(peg$currPos, 10) === peg$c182) {
    	            s1 = peg$c182;
    	            peg$currPos += 10;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c183);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseIceChar4();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
    	                    peg$savedPos = s0;
    	                    s1 = peg$c184(s2);
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
    	        if (input.substr(peg$currPos, 12) === peg$c179) {
    	            s1 = peg$c179;
    	            peg$currPos += 12;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c180);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseIceChar8();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
    	                    peg$savedPos = s0;
    	                    s1 = peg$c185(s2);
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
    	        if (input.substr(peg$currPos, 22) === peg$c186) {
    	            s1 = peg$c186;
    	            peg$currPos += 22;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c187);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCHex64();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
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
    	        return s0;
    	    }
    	    function peg$parseAGroupBundle0() {
    	        var s0, s1, s2;
    	        s0 = peg$currPos;
    	        if (input.substr(peg$currPos, 16) === peg$c189) {
    	            s1 = peg$c189;
    	            peg$currPos += 16;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c190);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseCapAtSeparator();
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c191();
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
    	        if (input.substr(peg$currPos, 9) === peg$c192) {
    	            s1 = peg$c192;
    	            peg$currPos += 9;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c193);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseIP4();
    	            if (s2 !== peg$FAILED) {
    	                s3 = peg$parseCapAtSeparator();
    	                if (s3 !== peg$FAILED) {
    	                    peg$savedPos = s0;
    	                    s1 = peg$c194(s2);
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
    	        if (input.substr(peg$currPos, 14) === peg$c195) {
    	            s1 = peg$c195;
    	            peg$currPos += 14;
    	        }
    	        else {
    	            s1 = peg$FAILED;
    	            {
    	                peg$fail(peg$c196);
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            s2 = peg$parseDecimal();
    	            if (s2 !== peg$FAILED) {
    	                if (input.substr(peg$currPos, 33) === peg$c197) {
    	                    s3 = peg$c197;
    	                    peg$currPos += 33;
    	                }
    	                else {
    	                    s3 = peg$FAILED;
    	                    {
    	                        peg$fail(peg$c198);
    	                    }
    	                }
    	                if (s3 !== peg$FAILED) {
    	                    s4 = peg$parseCapAtSeparator();
    	                    if (s4 !== peg$FAILED) {
    	                        peg$savedPos = s0;
    	                        s1 = peg$c199(s2);
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
    	            s1 = peg$c200(s1);
    	        }
    	        s0 = s1;
    	        return s0;
    	    }
    	    function peg$parseUntilSeparator() {
    	        var s0, s1, s2;
    	        s0 = peg$currPos;
    	        s1 = [];
    	        if (peg$c201.test(input.charAt(peg$currPos))) {
    	            s2 = input.charAt(peg$currPos);
    	            peg$currPos++;
    	        }
    	        else {
    	            s2 = peg$FAILED;
    	            {
    	                peg$fail(peg$c202);
    	            }
    	        }
    	        while (s2 !== peg$FAILED) {
    	            s1.push(s2);
    	            if (peg$c201.test(input.charAt(peg$currPos))) {
    	                s2 = input.charAt(peg$currPos);
    	                peg$currPos++;
    	            }
    	            else {
    	                s2 = peg$FAILED;
    	                {
    	                    peg$fail(peg$c202);
    	                }
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            if (input.substr(peg$currPos, 2) === peg$c203) {
    	                s2 = peg$c203;
    	                peg$currPos += 2;
    	            }
    	            else {
    	                s2 = peg$FAILED;
    	                {
    	                    peg$fail(peg$c204);
    	                }
    	            }
    	            if (s2 !== peg$FAILED) {
    	                peg$savedPos = s0;
    	                s1 = peg$c205(s1);
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
    	        if (input.substr(peg$currPos, 2) === peg$c203) {
    	            s0 = peg$c203;
    	            peg$currPos += 2;
    	        }
    	        else {
    	            s0 = peg$FAILED;
    	            {
    	                peg$fail(peg$c204);
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
    	                peg$fail(peg$c206);
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
    	                    peg$fail(peg$c206);
    	                }
    	            }
    	        }
    	        if (s1 !== peg$FAILED) {
    	            peg$savedPos = s0;
    	            s1 = peg$c207(s1);
    	        }
    	        s0 = s1;
    	        return s0;
    	    }
    	    function ast(kind, value, addresses4, addresses6) {
    	        const uses_short_nl = false;
    	        let retval = {
    	            kind,
    	            value,
    	            uses_short_nl,
    	            addresses: {
    	                v4: [],
    	                v6: []
    	            },
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
    	            'standard_ip4_local_candidate_ffus_active',
    	            'standard_ip4_local_candidate_ffus',
    	            'standard_tcp_guid_local_candidate_ffus_active',
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
    	        if (addresses4 !== undefined) {
    	            retval.addresses.v4 = [...new Set([...retval.addresses.v4, ...addresses4])];
    	        }
    	        if (addresses6 !== undefined) {
    	            retval.addresses.v6 = [...new Set([...retval.addresses.v6, ...addresses6])];
    	        }
    	        if (Array.isArray(value)) {
    	            value.forEach(item => {
    	                if (typeof item === 'object') {
    	                    if (item.addresses !== undefined) {
    	                        if (item.addresses.v4 !== undefined) {
    	                            retval.addresses.v4 = [...new Set([...retval.addresses.v4, ...item.addresses.v4])];
    	                        }
    	                        if (item.addresses.v6 !== undefined) {
    	                            retval.addresses.v6 = [...new Set([...retval.addresses.v6, ...item.addresses.v6])];
    	                        }
    	                    }
    	                }
    	            });
    	        }
    	        return retval;
    	    }
    	    function unelide(lAddresses, rAddresses) {
    	        const addrL = lAddresses.filter(p => p !== null), addrR = rAddresses.filter(p => p !== null);
    	        const missingCount = 8 - (addrL.length + addrR.length);
    	        if (missingCount < 0) {
    	            throw new Error('More than eight segments found; illegal v6 addr');
    	        }
    	        return [...addrL, ...new Array(missingCount).fill(0), ...addrR];
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
    	sdp_parser = {
    	    SyntaxError: peg$SyntaxError,
    	    parse: peg$parse
    	};
    	return sdp_parser;
    }

    var sdp_parserExports = requireSdp_parser();

    function parse(code, options) {
        return sdp_parserExports.parse(code, options);
    }

    const c_terminal = '\x00';
    const offer = '\x01', answer = '\x02', version_zero_line = '\x03', version_line = '\x04', a_msid_semantic_ns = '\x05', a_msid_semantic_star_ns = '\x06', a_msid_semantic_ws = '\x07', a_extmap_allow_mixed = '\x08', a_standard_sctp_port = '\x09', a_custom_sctp_port = '\x0a', a_standard_max_message_size = '\x0b', a_custom_max_message_size = '\x0c', a_setup_actpass = '\x0d', a_setup_active = '\x0e', a_mid_zero = '\x0f', s_dash = '\x10', t_zero_zero = '\x11', b_as_30 = '\x12', standard_origin = '\x13', standard_moz_origin = '\x14', standard_local_candidate = '\x15', standard_guid_local_candidate = '\x16', standard_guid_local_candidate_ffus = '\x17', standard_tcp_guid_local_candidate_ffus_active = '\x2c', standard_remote_candidate = '\x18', standard_ip4_local_candidate_ffus = '\x19', standard_ip4_local_candidate_ffus_active = '\x2b', standard_remote_candidate_ffus = '\x1a', standard_agen_tcp_candidate = '\x1b', standard_agen_tcp6_candidate = '\x1c', standard_agen_udp4_candidate = '\x1d', standard_agen_udp6_host_candidate = '\x1e', a_ice_pwd = '\x1f', a_ice_pwd_l = '\x20', a_ice_pwd_v = '\x21', falkon_a_ice_ufrag_4 = '\x2d', a_ice_ufrag_4 = '\x22', a_ice_ufrag_8 = '\x23', a_fingerprint_sha1_256 = '\x24', a_group_bundle_0 = '\x25', a_send_recv = '\x26', a_end_of_candidates = '\x27', c_claim_ip4 = '\x28', standard_m_application = '\x29', a_ice_options_trickle = '\x2a';
    const unknown_line = '\x7e';
    const unknown_terminate = '\x7f';

    function moz_ver([maj, min, patch]) {
        return `${[maj, min, patch].filter(i => i !== undefined).map(i => i.toString()).join('.')}${c_terminal}`;
    }
    function pack_sha256(sha256) {
        let ret = '';
        for (let cursor = 0; cursor < sha256.length; cursor += 2) {
            const hi = parseInt(sha256[cursor] ?? '0', 16), lo = parseInt(sha256[cursor + 1] ?? '0', 16), byte = (hi * 16) + lo;
            ret += String.fromCodePoint(byte);
        }
        return ret;
    }
    function pack_i8(i8) {
        let val;
        switch (typeof i8) {
            case 'number':
                val = i8;
                break;
            case 'string':
                val = Number(i8);
                break;
            case 'bigint':
                val = Number(i8);
                break;
        }
        const arr = new ArrayBuffer(1), view = new DataView(arr);
        view.setUint8(0, val);
        return String.fromCodePoint(view.getUint8(0));
    }
    function pack_i16(i16) {
        let val;
        switch (typeof i16) {
            case 'number':
                val = i16;
                break;
            case 'string':
                val = Number(i16);
                break;
            case 'bigint':
                val = Number(i16);
                break;
        }
        const arr = new ArrayBuffer(2), view = new DataView(arr);
        view.setUint16(0, val, false);
        const A = String.fromCodePoint(view.getUint8(0)), B = String.fromCodePoint(view.getUint8(1));
        return `${A}${B}`;
    }
    function pack_i32(i32) {
        let val;
        switch (typeof i32) {
            case 'number':
                val = i32;
                break;
            case 'string':
                val = Number(i32);
                break;
            case 'bigint':
                val = Number(i32);
                break;
        }
        const arr = new ArrayBuffer(4), view = new DataView(arr);
        view.setUint32(0, val, false);
        const A = String.fromCodePoint(view.getUint8(0)), B = String.fromCodePoint(view.getUint8(1)), C = String.fromCodePoint(view.getUint8(2)), D = String.fromCodePoint(view.getUint8(3));
        return `${A}${B}${C}${D}`;
    }
    function pack_i64(i64) {
        let val = BigInt(i64);
        const arr = new ArrayBuffer(8), view = new DataView(arr);
        view.setBigUint64(0, val, false);
        const A = String.fromCodePoint(view.getUint8(0)), B = String.fromCodePoint(view.getUint8(1)), C = String.fromCodePoint(view.getUint8(2)), D = String.fromCodePoint(view.getUint8(3)), E = String.fromCodePoint(view.getUint8(4)), F = String.fromCodePoint(view.getUint8(5)), G = String.fromCodePoint(view.getUint8(6)), H = String.fromCodePoint(view.getUint8(7));
        return `${A}${B}${C}${D}${E}${F}${G}${H}`;
    }
    const parseable = {
        'unknown_line': (v, _addresses4_dsa, _addresses6_csa) => `${unknown_line}${v.value}${c_terminal}`,
        'version_zero_line': (_, _addresses4_dsa, _addresses6_csa) => `${version_zero_line}`,
        'version_line': (v, _addresses4_dsa, _addresses6_csa) => `${version_line}${v.value}${c_terminal}`,
        'a_msid_semantic_ns': (_, _addresses4_dsa, _addresses6_csa) => `${a_msid_semantic_ns}`,
        'a_msid_semantic_star_ns': (_, _addresses4_dsa, _addresses6_csa) => `${a_msid_semantic_star_ns}`,
        'a_msid_semantic_ws': (_, _addresses4_dsa, _addresses6_csa) => `${a_msid_semantic_ws}`,
        'a_extmap_allow_mixed': (_, _addresses4_dsa, _addresses6_csa) => `${a_extmap_allow_mixed}`,
        'a_standard_sctp_port': (_, _addresses4_dsa, _addresses6_csa) => `${a_standard_sctp_port}`,
        'a_custom_sctp_port': (v, _addresses4_dsa, _addresses6_csa) => `${a_custom_sctp_port}${v.value}${c_terminal}`,
        'a_standard_max_message_size': (_, _addresses4_dsa, _addresses6_csa) => `${a_standard_max_message_size}`,
        'a_custom_max_message_size': (v, _addresses4_dsa, _addresses6_csa) => `${a_custom_max_message_size}${v.value}${c_terminal}`,
        'a_setup_actpass': (_, _addresses4_dsa, _addresses6_csa) => `${a_setup_actpass}`,
        'a_setup_active': (_, _addresses4_dsa, _addresses6_csa) => `${a_setup_active}`,
        'a_mid_zero': (_, _addresses4_dsa, _addresses6_csa) => `${a_mid_zero}`,
        'a_group_bundle_0': (_, _addresses4_dsa, _addresses6_csa) => `${a_group_bundle_0}`,
        'a_ice_pwd': (v, _addresses4_dsa, _addresses6_csa) => `${a_ice_pwd}${v.value}${c_terminal}`,
        'a_ice_pwd_l': (v, _addresses4_dsa, _addresses6_csa) => `${a_ice_pwd_l}${v.value}${c_terminal}`,
        'a_ice_pwd_v': (v, _addresses4_dsa, _addresses6_csa) => `${a_ice_pwd_v}${v.value}${c_terminal}`,
        'falkon_a_ice_ufrag_4': (v, _addresses4_dsa, _addresses6_csa) => `${falkon_a_ice_ufrag_4}${v.value}${c_terminal}`,
        'a_ice_ufrag_4': (v, _addresses4_dsa, _addresses6_csa) => `${a_ice_ufrag_4}${v.value}${c_terminal}`,
        'a_ice_ufrag_8': (v, _addresses4_dsa, _addresses6_csa) => `${a_ice_ufrag_8}${v.value}${c_terminal}`,
        'a_fingerprint_sha1_256': (v, _addresses4_dsa, _addresses6_csa) => `${a_fingerprint_sha1_256}${pack_sha256(v.value)}${c_terminal}`,
        'a_send_recv': (_, _addresses4_dsa, _addresses6_csa) => `${a_send_recv}`,
        'a_end_of_candidates': (_, _addresses4_dsa, _addresses6_csa) => `${a_end_of_candidates}`,
        's_dash': (_, _addresses4_dsa, _addresses6_csa) => `${s_dash}`,
        't_zero_zero': (_, _addresses4_dsa, _addresses6_csa) => `${t_zero_zero}`,
        'b_as_30': (_, _addresses4_dsa, _addresses6_csa) => `${b_as_30}`,
        'c_claim_ip4': (v, addresses4_dsa, _addresses6_csa) => {
            const { value } = v;
            let found = addresses4_dsa.indexOf(value);
            if (found === -1) {
                throw new Error(`FATAL: missing address ${value}`);
            }
            return `${c_claim_ip4}${pack_i8(found)}`;
        },
        'standard_m_application': (v, _addresses4_dsa, _addresses6_csa) => `${standard_m_application}${pack_i16(v.value)}`,
        'a_ice_options_trickle': (_, _addresses4_dsa, _addresses6_csa) => `${a_ice_options_trickle}`,
        'standard_origin': (v, addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [s, d, i] = items;
            if (kind !== 'standard_origin') {
                throw 'impossible';
            }
            let found = addresses4_dsa.indexOf(i);
            if (found === -1) {
                throw new Error(`FATAL: missing address ${i}`);
            }
            return `${standard_origin}${pack_i64(s)}${d}${c_terminal}${pack_i8(found)}`;
        },
        'standard_moz_origin': (v, _addresses4_dsa, _addresses6_csa) => {
            const smo = v, mvs = moz_ver(smo.moz_ver);
            return `${standard_moz_origin}${mvs}${pack_i64(smo.sess)}`;
        },
        'standard_guid_local_candidate': (v, _addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i, d4] = items;
            if (kind !== 'standard_guid_local_candidate') {
                throw 'impossible';
            }
            return `${standard_guid_local_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${i}${c_terminal}${pack_i16(d4)}`;
        },
        'standard_ip4_local_candidate_ffus': (v, addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i, d4] = items;
            let found1 = addresses4_dsa.indexOf(i);
            if (found1 === -1) {
                throw new Error(`FATAL: missing address 1 ${i}`);
            }
            if (kind !== 'standard_ip4_local_candidate_ffus') {
                throw 'impossible';
            }
            return `${standard_ip4_local_candidate_ffus}${pack_i8(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found1)}${pack_i16(d4)}`;
        },
        'standard_ip4_local_candidate_ffus_active': (v, addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i, d4] = items;
            let found1 = addresses4_dsa.indexOf(i);
            if (found1 === -1) {
                throw new Error(`FATAL: missing address 1 ${i}`);
            }
            if (kind !== 'standard_ip4_local_candidate_ffus_active') {
                throw 'impossible';
            }
            return `${standard_ip4_local_candidate_ffus_active}${pack_i8(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found1)}${pack_i16(d4)}`;
        },
        'standard_guid_local_candidate_ffus': (v, _addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i, d4] = items;
            if (kind !== 'standard_guid_local_candidate_ffus') {
                throw 'impossible';
            }
            return `${standard_guid_local_candidate_ffus}${pack_i8(d1)}${pack_i8(d2)}${pack_i32(d3)}${i}${c_terminal}${pack_i16(d4)}`;
        },
        'standard_tcp_guid_local_candidate_ffus_active': (v, _addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i, d4] = items;
            if (kind !== 'standard_tcp_guid_local_candidate_ffus_active') {
                throw 'impossible';
            }
            return `${standard_tcp_guid_local_candidate_ffus_active}${pack_i8(d1)}${pack_i8(d2)}${pack_i32(d3)}${i}${c_terminal}${pack_i16(d4)}`;
        },
        'standard_local_candidate': (v, addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, p, d4] = items;
            let found = addresses4_dsa.indexOf(i1);
            if (found === -1) {
                throw new Error(`FATAL: missing address ${i1}`);
            }
            if (kind !== 'standard_local_candidate') {
                throw 'impossible';
            }
            return `${standard_local_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${pack_i16(p)}${d4}${c_terminal}`;
        },
        'standard_remote_candidate': (v, addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
            let found1 = addresses4_dsa.indexOf(i1);
            if (found1 === -1) {
                throw new Error(`FATAL: missing address 1 ${i1}`);
            }
            let found2 = addresses4_dsa.indexOf(i2);
            if (found2 === -1) {
                throw new Error(`FATAL: missing address 2 ${i2}`);
            }
            if (kind !== 'standard_remote_candidate') {
                throw 'impossible';
            }
            return `${standard_remote_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${pack_i8(found1)}${d4}${c_terminal}${pack_i8(found2)}${d5}${c_terminal}${d6}${c_terminal}`;
        },
        'standard_remote_candidate_ffus': (v, addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5] = items;
            let found1 = addresses4_dsa.indexOf(i1);
            if (found1 === -1) {
                throw new Error(`FATAL: missing address 1 ${i1}`);
            }
            let found2 = addresses4_dsa.indexOf(i2);
            if (found2 === -1) {
                throw new Error(`FATAL: missing address 2 ${i2}`);
            }
            if (kind !== 'standard_remote_candidate_ffus') {
                throw 'impossible';
            }
            return `${standard_remote_candidate_ffus}${pack_i32(d1)}${pack_i8(d2)}${c_terminal}${pack_i32(d3)}${pack_i8(found1)}${d4}${c_terminal}${pack_i8(found2)}${d5}${c_terminal}`;
        },
        'standard_agen_tcp_candidate': (v, addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, d5] = items;
            let found = addresses4_dsa.indexOf(i1);
            if (found === -1) {
                throw new Error(`FATAL: missing address ${i1}`);
            }
            if (kind !== 'standard_agen_tcp_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_tcp_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${d4}${c_terminal}${d5}${c_terminal}`;
        },
        'standard_agen_tcp6_candidate': (v, _addresses4_dsa, addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, d5] = items;
            let found = addresses6_csa.indexOf(i1);
            if (found === -1) {
                throw new Error(`FATAL: missing address ${i1}`);
            }
            if (kind !== 'standard_agen_tcp6_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_tcp6_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${d4}${c_terminal}${d5}${c_terminal}`;
        },
        'standard_agen_udp4_candidate': (v, addresses4_dsa, _addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
            let found1 = addresses4_dsa.indexOf(i1);
            if (found1 === -1) {
                throw new Error(`FATAL: missing address 1 ${i1}`);
            }
            let found2 = addresses4_dsa.indexOf(i2);
            if (found2 === -1) {
                throw new Error(`FATAL: missing address 2 ${i2}`);
            }
            if (kind !== 'standard_agen_udp4_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_udp4_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found1)}${pack_i16(d4)}${pack_i8(found2)}${pack_i16(d5)}${pack_i8(d6)}`;
        },
        'standard_agen_udp6_host_candidate': (v, _addresses4_dsa, addresses6_csa) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, p, d5] = items;
            let found = addresses6_csa.indexOf(i1);
            if (found === -1) {
                throw new Error(`FATAL: missing address ${i1}`);
            }
            if (kind !== 'standard_agen_udp6_host_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_udp6_host_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${pack_i16(p)}${pack_i8(d5)}`;
        },
        'unknown_terminate': (v, _addresses4_dsa, _addresses6_csa) => `${unknown_terminate}${v.value}`
    };
    function bitch(bi) {
        return String.fromCharCode(Number(bi));
    }
    function addr4_as_decimal_as_string_to_bytes(addr_as_decimal_as_string) {
        const addr = BigInt(addr_as_decimal_as_string);
        const d = addr % 256n, s8 = addr >> 8n, c = s8 % 256n, s16 = s8 >> 8n, b = s16 % 256n, s24 = s16 >> 8n, a = s24 % 256n;
        return `${bitch(a)}${bitch(b)}${bitch(c)}${bitch(d)}`;
    }
    function biltch(bi) {
        return `${String.fromCharCode((Number(bi) >> 8) % 256)}${String.fromCharCode(Number(bi) % 256)}`;
    }
    function addr6_as_canon_string_to_bytes(addr_as_canon_string) {
        const addr = addr_as_canon_string.split(':').map(aai16 => BigInt(parseInt(aai16, 16))).filter(a => a !== undefined);
        if (addr.length !== 8) {
            throw new Error('invalid address!');
        }
        const queue = [];
        for (let i = 0; i < 8; ++i) {
            queue.push(biltch(addr[i]));
        }
        return queue.join('');
    }
    function parsed_to_bytestring(parsed) {
        let work = '', ending = '', skip_iter = false;
        if (parsed.addresses === undefined) {
            work += '\0';
        }
        else {
            if (parsed.addresses.v4.length > 255) {
                throw new Error('Encoding is limited to 255 ipv4 addresses');
            }
            work += String.fromCodePoint(parsed.addresses.v4.length);
            for (let i = 0; i < parsed.addresses.v4.length; ++i) {
                work += addr4_as_decimal_as_string_to_bytes(parsed.addresses.v4[i]);
            }
        }
        if (parsed.addresses === undefined) {
            work += '\0';
        }
        else {
            if (parsed.addresses.v6.length > 255) {
                throw new Error('Encoding is limited to 255 ipv6 addresses');
            }
            work += String.fromCodePoint(parsed.addresses.v6.length);
            for (let i = 0; i < parsed.addresses.v6.length; ++i) {
                work += addr6_as_canon_string_to_bytes(parsed.addresses.v6[i]);
            }
        }
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
                    work += parseable[v.kind](v, (parsed?.addresses?.v4 ?? []), (parsed?.addresses?.v6 ?? []));
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

    var lzString = {exports: {}};

    lzString.exports;

    var hasRequiredLzString;

    function requireLzString () {
    	if (hasRequiredLzString) return lzString.exports;
    	hasRequiredLzString = 1;
    	(function (module) {
    		// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
    		// This work is free. You can redistribute it and/or modify it
    		// under the terms of the WTFPL, Version 2
    		// For more information see LICENSE.txt or http://www.wtfpl.net/
    		//
    		// For more information, the home page:
    		// http://pieroxy.net/blog/pages/lz-string/testing.html
    		//
    		// LZ-based compression algorithm, version 1.4.5
    		var LZString = (function() {

    		// private property
    		var f = String.fromCharCode;
    		var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    		var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    		var baseReverseDic = {};

    		function getBaseValue(alphabet, character) {
    		  if (!baseReverseDic[alphabet]) {
    		    baseReverseDic[alphabet] = {};
    		    for (var i=0 ; i<alphabet.length ; i++) {
    		      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    		    }
    		  }
    		  return baseReverseDic[alphabet][character];
    		}

    		var LZString = {
    		  compressToBase64 : function (input) {
    		    if (input == null) return "";
    		    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    		    switch (res.length % 4) { // To produce valid Base64
    		    default: // When could this happen ?
    		    case 0 : return res;
    		    case 1 : return res+"===";
    		    case 2 : return res+"==";
    		    case 3 : return res+"=";
    		    }
    		  },

    		  decompressFromBase64 : function (input) {
    		    if (input == null) return "";
    		    if (input == "") return null;
    		    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
    		  },

    		  compressToUTF16 : function (input) {
    		    if (input == null) return "";
    		    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
    		  },

    		  decompressFromUTF16: function (compressed) {
    		    if (compressed == null) return "";
    		    if (compressed == "") return null;
    		    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
    		  },

    		  //compress into uint8array (UCS-2 big endian format)
    		  compressToUint8Array: function (uncompressed) {
    		    var compressed = LZString.compress(uncompressed);
    		    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    		    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
    		      var current_value = compressed.charCodeAt(i);
    		      buf[i*2] = current_value >>> 8;
    		      buf[i*2+1] = current_value % 256;
    		    }
    		    return buf;
    		  },

    		  //decompress from uint8array (UCS-2 big endian format)
    		  decompressFromUint8Array:function (compressed) {
    		    if (compressed===null || compressed===undefined){
    		        return LZString.decompress(compressed);
    		    } else {
    		        var buf=new Array(compressed.length/2); // 2 bytes per character
    		        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
    		          buf[i]=compressed[i*2]*256+compressed[i*2+1];
    		        }

    		        var result = [];
    		        buf.forEach(function (c) {
    		          result.push(f(c));
    		        });
    		        return LZString.decompress(result.join(''));

    		    }

    		  },


    		  //compress into a string that is already URI encoded
    		  compressToEncodedURIComponent: function (input) {
    		    if (input == null) return "";
    		    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
    		  },

    		  //decompress from an output of compressToEncodedURIComponent
    		  decompressFromEncodedURIComponent:function (input) {
    		    if (input == null) return "";
    		    if (input == "") return null;
    		    input = input.replace(/ /g, "+");
    		    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
    		  },

    		  compress: function (uncompressed) {
    		    return LZString._compress(uncompressed, 16, function(a){return f(a);});
    		  },
    		  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    		    if (uncompressed == null) return "";
    		    var i, value,
    		        context_dictionary= {},
    		        context_dictionaryToCreate= {},
    		        context_c="",
    		        context_wc="",
    		        context_w="",
    		        context_enlargeIn= 2, // Compensate for the first entry which should not count
    		        context_dictSize= 3,
    		        context_numBits= 2,
    		        context_data=[],
    		        context_data_val=0,
    		        context_data_position=0,
    		        ii;

    		    for (ii = 0; ii < uncompressed.length; ii += 1) {
    		      context_c = uncompressed.charAt(ii);
    		      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
    		        context_dictionary[context_c] = context_dictSize++;
    		        context_dictionaryToCreate[context_c] = true;
    		      }

    		      context_wc = context_w + context_c;
    		      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
    		        context_w = context_wc;
    		      } else {
    		        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
    		          if (context_w.charCodeAt(0)<256) {
    		            for (i=0 ; i<context_numBits ; i++) {
    		              context_data_val = (context_data_val << 1);
    		              if (context_data_position == bitsPerChar-1) {
    		                context_data_position = 0;
    		                context_data.push(getCharFromInt(context_data_val));
    		                context_data_val = 0;
    		              } else {
    		                context_data_position++;
    		              }
    		            }
    		            value = context_w.charCodeAt(0);
    		            for (i=0 ; i<8 ; i++) {
    		              context_data_val = (context_data_val << 1) | (value&1);
    		              if (context_data_position == bitsPerChar-1) {
    		                context_data_position = 0;
    		                context_data.push(getCharFromInt(context_data_val));
    		                context_data_val = 0;
    		              } else {
    		                context_data_position++;
    		              }
    		              value = value >> 1;
    		            }
    		          } else {
    		            value = 1;
    		            for (i=0 ; i<context_numBits ; i++) {
    		              context_data_val = (context_data_val << 1) | value;
    		              if (context_data_position ==bitsPerChar-1) {
    		                context_data_position = 0;
    		                context_data.push(getCharFromInt(context_data_val));
    		                context_data_val = 0;
    		              } else {
    		                context_data_position++;
    		              }
    		              value = 0;
    		            }
    		            value = context_w.charCodeAt(0);
    		            for (i=0 ; i<16 ; i++) {
    		              context_data_val = (context_data_val << 1) | (value&1);
    		              if (context_data_position == bitsPerChar-1) {
    		                context_data_position = 0;
    		                context_data.push(getCharFromInt(context_data_val));
    		                context_data_val = 0;
    		              } else {
    		                context_data_position++;
    		              }
    		              value = value >> 1;
    		            }
    		          }
    		          context_enlargeIn--;
    		          if (context_enlargeIn == 0) {
    		            context_enlargeIn = Math.pow(2, context_numBits);
    		            context_numBits++;
    		          }
    		          delete context_dictionaryToCreate[context_w];
    		        } else {
    		          value = context_dictionary[context_w];
    		          for (i=0 ; i<context_numBits ; i++) {
    		            context_data_val = (context_data_val << 1) | (value&1);
    		            if (context_data_position == bitsPerChar-1) {
    		              context_data_position = 0;
    		              context_data.push(getCharFromInt(context_data_val));
    		              context_data_val = 0;
    		            } else {
    		              context_data_position++;
    		            }
    		            value = value >> 1;
    		          }


    		        }
    		        context_enlargeIn--;
    		        if (context_enlargeIn == 0) {
    		          context_enlargeIn = Math.pow(2, context_numBits);
    		          context_numBits++;
    		        }
    		        // Add wc to the dictionary.
    		        context_dictionary[context_wc] = context_dictSize++;
    		        context_w = String(context_c);
    		      }
    		    }

    		    // Output the code for w.
    		    if (context_w !== "") {
    		      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
    		        if (context_w.charCodeAt(0)<256) {
    		          for (i=0 ; i<context_numBits ; i++) {
    		            context_data_val = (context_data_val << 1);
    		            if (context_data_position == bitsPerChar-1) {
    		              context_data_position = 0;
    		              context_data.push(getCharFromInt(context_data_val));
    		              context_data_val = 0;
    		            } else {
    		              context_data_position++;
    		            }
    		          }
    		          value = context_w.charCodeAt(0);
    		          for (i=0 ; i<8 ; i++) {
    		            context_data_val = (context_data_val << 1) | (value&1);
    		            if (context_data_position == bitsPerChar-1) {
    		              context_data_position = 0;
    		              context_data.push(getCharFromInt(context_data_val));
    		              context_data_val = 0;
    		            } else {
    		              context_data_position++;
    		            }
    		            value = value >> 1;
    		          }
    		        } else {
    		          value = 1;
    		          for (i=0 ; i<context_numBits ; i++) {
    		            context_data_val = (context_data_val << 1) | value;
    		            if (context_data_position == bitsPerChar-1) {
    		              context_data_position = 0;
    		              context_data.push(getCharFromInt(context_data_val));
    		              context_data_val = 0;
    		            } else {
    		              context_data_position++;
    		            }
    		            value = 0;
    		          }
    		          value = context_w.charCodeAt(0);
    		          for (i=0 ; i<16 ; i++) {
    		            context_data_val = (context_data_val << 1) | (value&1);
    		            if (context_data_position == bitsPerChar-1) {
    		              context_data_position = 0;
    		              context_data.push(getCharFromInt(context_data_val));
    		              context_data_val = 0;
    		            } else {
    		              context_data_position++;
    		            }
    		            value = value >> 1;
    		          }
    		        }
    		        context_enlargeIn--;
    		        if (context_enlargeIn == 0) {
    		          context_enlargeIn = Math.pow(2, context_numBits);
    		          context_numBits++;
    		        }
    		        delete context_dictionaryToCreate[context_w];
    		      } else {
    		        value = context_dictionary[context_w];
    		        for (i=0 ; i<context_numBits ; i++) {
    		          context_data_val = (context_data_val << 1) | (value&1);
    		          if (context_data_position == bitsPerChar-1) {
    		            context_data_position = 0;
    		            context_data.push(getCharFromInt(context_data_val));
    		            context_data_val = 0;
    		          } else {
    		            context_data_position++;
    		          }
    		          value = value >> 1;
    		        }


    		      }
    		      context_enlargeIn--;
    		      if (context_enlargeIn == 0) {
    		        context_enlargeIn = Math.pow(2, context_numBits);
    		        context_numBits++;
    		      }
    		    }

    		    // Mark the end of the stream
    		    value = 2;
    		    for (i=0 ; i<context_numBits ; i++) {
    		      context_data_val = (context_data_val << 1) | (value&1);
    		      if (context_data_position == bitsPerChar-1) {
    		        context_data_position = 0;
    		        context_data.push(getCharFromInt(context_data_val));
    		        context_data_val = 0;
    		      } else {
    		        context_data_position++;
    		      }
    		      value = value >> 1;
    		    }

    		    // Flush the last char
    		    while (true) {
    		      context_data_val = (context_data_val << 1);
    		      if (context_data_position == bitsPerChar-1) {
    		        context_data.push(getCharFromInt(context_data_val));
    		        break;
    		      }
    		      else context_data_position++;
    		    }
    		    return context_data.join('');
    		  },

    		  decompress: function (compressed) {
    		    if (compressed == null) return "";
    		    if (compressed == "") return null;
    		    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
    		  },

    		  _decompress: function (length, resetValue, getNextValue) {
    		    var dictionary = [],
    		        enlargeIn = 4,
    		        dictSize = 4,
    		        numBits = 3,
    		        entry = "",
    		        result = [],
    		        i,
    		        w,
    		        bits, resb, maxpower, power,
    		        c,
    		        data = {val:getNextValue(0), position:resetValue, index:1};

    		    for (i = 0; i < 3; i += 1) {
    		      dictionary[i] = i;
    		    }

    		    bits = 0;
    		    maxpower = Math.pow(2,2);
    		    power=1;
    		    while (power!=maxpower) {
    		      resb = data.val & data.position;
    		      data.position >>= 1;
    		      if (data.position == 0) {
    		        data.position = resetValue;
    		        data.val = getNextValue(data.index++);
    		      }
    		      bits |= (resb>0 ? 1 : 0) * power;
    		      power <<= 1;
    		    }

    		    switch (bits) {
    		      case 0:
    		          bits = 0;
    		          maxpower = Math.pow(2,8);
    		          power=1;
    		          while (power!=maxpower) {
    		            resb = data.val & data.position;
    		            data.position >>= 1;
    		            if (data.position == 0) {
    		              data.position = resetValue;
    		              data.val = getNextValue(data.index++);
    		            }
    		            bits |= (resb>0 ? 1 : 0) * power;
    		            power <<= 1;
    		          }
    		        c = f(bits);
    		        break;
    		      case 1:
    		          bits = 0;
    		          maxpower = Math.pow(2,16);
    		          power=1;
    		          while (power!=maxpower) {
    		            resb = data.val & data.position;
    		            data.position >>= 1;
    		            if (data.position == 0) {
    		              data.position = resetValue;
    		              data.val = getNextValue(data.index++);
    		            }
    		            bits |= (resb>0 ? 1 : 0) * power;
    		            power <<= 1;
    		          }
    		        c = f(bits);
    		        break;
    		      case 2:
    		        return "";
    		    }
    		    dictionary[3] = c;
    		    w = c;
    		    result.push(c);
    		    while (true) {
    		      if (data.index > length) {
    		        return "";
    		      }

    		      bits = 0;
    		      maxpower = Math.pow(2,numBits);
    		      power=1;
    		      while (power!=maxpower) {
    		        resb = data.val & data.position;
    		        data.position >>= 1;
    		        if (data.position == 0) {
    		          data.position = resetValue;
    		          data.val = getNextValue(data.index++);
    		        }
    		        bits |= (resb>0 ? 1 : 0) * power;
    		        power <<= 1;
    		      }

    		      switch (c = bits) {
    		        case 0:
    		          bits = 0;
    		          maxpower = Math.pow(2,8);
    		          power=1;
    		          while (power!=maxpower) {
    		            resb = data.val & data.position;
    		            data.position >>= 1;
    		            if (data.position == 0) {
    		              data.position = resetValue;
    		              data.val = getNextValue(data.index++);
    		            }
    		            bits |= (resb>0 ? 1 : 0) * power;
    		            power <<= 1;
    		          }

    		          dictionary[dictSize++] = f(bits);
    		          c = dictSize-1;
    		          enlargeIn--;
    		          break;
    		        case 1:
    		          bits = 0;
    		          maxpower = Math.pow(2,16);
    		          power=1;
    		          while (power!=maxpower) {
    		            resb = data.val & data.position;
    		            data.position >>= 1;
    		            if (data.position == 0) {
    		              data.position = resetValue;
    		              data.val = getNextValue(data.index++);
    		            }
    		            bits |= (resb>0 ? 1 : 0) * power;
    		            power <<= 1;
    		          }
    		          dictionary[dictSize++] = f(bits);
    		          c = dictSize-1;
    		          enlargeIn--;
    		          break;
    		        case 2:
    		          return result.join('');
    		      }

    		      if (enlargeIn == 0) {
    		        enlargeIn = Math.pow(2, numBits);
    		        numBits++;
    		      }

    		      if (dictionary[c]) {
    		        entry = dictionary[c];
    		      } else {
    		        if (c === dictSize) {
    		          entry = w + w.charAt(0);
    		        } else {
    		          return null;
    		        }
    		      }
    		      result.push(entry);

    		      // Add w+entry[0] to the dictionary.
    		      dictionary[dictSize++] = w + entry.charAt(0);
    		      enlargeIn--;

    		      w = entry;

    		      if (enlargeIn == 0) {
    		        enlargeIn = Math.pow(2, numBits);
    		        numBits++;
    		      }

    		    }
    		  }
    		};
    		  return LZString;
    		})();

    		if( module != null ) {
    		  module.exports = LZString;
    		} else if( typeof angular !== 'undefined' && angular != null ) {
    		  angular.module('LZString', [])
    		  .factory('LZString', function () {
    		    return LZString;
    		  });
    		} 
    	} (lzString));
    	return lzString.exports;
    }

    var lzStringExports = requireLzString();

    function unpack_sha256(packed_sha256) {
        let ret = '';
        for (let cursor = 0; cursor < packed_sha256.length; ++cursor) {
            const byte = packed_sha256.charCodeAt(cursor), high = (byte & 0xf0) >>> 4, low = (byte & 0x0f);
            ret += `${high.toString(16)}${low.toString(16)}`;
        }
        return ret.toUpperCase();
    }
    function unpack_sha_colons(str) {
        const ustr = unpack_sha256(str);
        return (ustr.match(/.{1,2}/g) || []).join(':');
    }
    function bitnstr(bi) {
        return Number(bi);
    }
    function ipv4_decimal_string_to_string_dotted_quad(str) {
        const addr = BigInt(str);
        const d = addr % 256n, s8 = addr >> 8n, c = s8 % 256n, s16 = s8 >> 8n, b = s16 % 256n, s24 = s16 >> 8n, a = s24 % 256n;
        return `${bitnstr(a)}.${bitnstr(b)}.${bitnstr(c)}.${bitnstr(d)}`;
    }
    function unpack_indexed_ipv4_waddr(addresses) {
        return function unpack_indexed_ipv4(str) {
            const idx = str.codePointAt(0);
            if (idx === undefined) {
                throw new Error('Index string was empty');
            }
            const addr = addresses[idx];
            if (addr === undefined) {
                throw new Error(`Referenced index ${idx} for ipv4 addresses doesn't exist`);
            }
            return ipv4_decimal_string_to_string_dotted_quad(addr);
        };
    }
    function unpack_indexed_ipv6_waddr(addresses) {
        return function unpack_indexed_ipv6(str) {
            const idx = str.codePointAt(0);
            if (idx === undefined) {
                throw new Error('Index string was empty');
            }
            const addr = addresses[idx];
            if (addr === undefined) {
                throw new Error(`Referenced index ${idx} for ipv6 addresses doesn't exist`);
            }
            return addr;
        };
    }
    function unpack_i8(str) {
        const d = str.codePointAt(0) ?? 0;
        return (d).toString();
    }
    function unpack_i16(str) {
        const a = str.codePointAt(0) ?? 0, b = str.codePointAt(1) ?? 0;
        return ((a * 256) + b).toString();
    }
    function unpack_i32(str) {
        const a = str.codePointAt(0) ?? 0, b = str.codePointAt(1) ?? 0, c = str.codePointAt(2) ?? 0, d = str.codePointAt(3) ?? 0;
        return ((((((a * 256) + b) * 256) + c) * 256) + d).toString();
    }
    function unpack_i64(str) {
        let out = BigInt(0);
        for (let i = 0; i < 8; ++i) {
            out *= 256n;
            out += BigInt(str.codePointAt(i) ?? 0);
        }
        return out;
    }
    function unpack_guid(guid) {
        return `${guid.substring(0, 8)}-${guid.substring(8, 12)}-${guid.substring(12, 16)}-${guid.substring(16, 20)}-${guid.substring(20, 32)}`;
    }
    function four_bytes_to_decimal_ipv4_string(bytes) {
        const a = bytes.charCodeAt(0), b = bytes.charCodeAt(1), c = bytes.charCodeAt(2), d = bytes.charCodeAt(3);
        return String((((((a * 256) + b) * 256) + c) * 256) + d);
    }
    const hexchars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    function byte_to_two_uppercase_nybbles(byte) {
        const lo = byte % 16, hi = (byte >> 4) % 16;
        return `${hexchars[hi ?? 'Z']}${hexchars[lo] ?? 'Z'}`;
    }
    function even(n) {
        return ((n % 2) == 0);
    }
    function sixteen_bytes_to_canon_ipv6_string(bytes) {
        let res = '';
        for (let i = 0; i < 16; ++i) {
            const thisByte = bytes.charCodeAt(i);
            if (thisByte === undefined) {
                throw new Error('string too short');
            }
            if (even(i) && (i !== 0)) {
                res += ':';
            }
            res += byte_to_two_uppercase_nybbles(thisByte);
        }
        return res;
    }
    function unpack(bytestring) {
        if (bytestring === '') {
            return '';
        }
        let i, iC, work = '', at_end = '', stream_start = 0;
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
        function scan_forward_exactly_one_byte(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 2));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 1;
        }
        function scan_forward_exactly_two_bytes(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 3));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 2;
        }
        function scan_forward_exactly_eight_bytes(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 9));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 8;
        }
        function scan_forward_one_byte(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 2));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 2;
        }
        function scan_forward_exactly_four_bytes(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 5));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 4;
        }
        function scan_forward_32_bytes(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 33));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 33;
        }
        let ipv4_list = [];
        let ipv4_addr_count = bytestring.charCodeAt(0);
        ++stream_start;
        for (let i = 0; i < ipv4_addr_count; ++i) {
            ipv4_list[i] = four_bytes_to_decimal_ipv4_string(bytestring.substring(stream_start, stream_start + 4));
            stream_start += 4;
        }
        const unpack_indexed_ipv4_l = unpack_indexed_ipv4_waddr(ipv4_list);
        let ipv6_list = [];
        let ipv6_addr_count = bytestring.charCodeAt(stream_start);
        ++stream_start;
        for (let i = 0; i < ipv6_addr_count; ++i) {
            ipv6_list[i] = sixteen_bytes_to_canon_ipv6_string(bytestring.substring(stream_start, stream_start + 16));
            stream_start += 16;
        }
        const unpack_indexed_ipv6_l = unpack_indexed_ipv6_waddr(ipv6_list);
        for (i = stream_start, iC = bytestring.length; i < iC; ++i) {
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
                    scan_forward_exactly_one_byte('c=IN IP4 ', unpack_indexed_ipv4_l, true);
                    work += '\r\n';
                    break;
                case standard_m_application:
                    scan_forward_exactly_two_bytes('m=application ', unpack_i16, true);
                    work += ' UDP/DTLS/SCTP webrtc-datachannel\r\n';
                    break;
                case a_ice_options_trickle:
                    work += 'a=ice-options:trickle\r\n';
                    break;
                case standard_origin:
                    scan_forward_exactly_eight_bytes('o=- ', unpack_i64, true);
                    scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                    scan_forward_exactly_one_byte(' IN IP4 ', unpack_indexed_ipv4_l, true);
                    work += '\r\n';
                    break;
                case standard_moz_origin:
                    scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined, true);
                    scan_forward_exactly_eight_bytes(` `, unpack_i64, true);
                    work += ' 0 IN IP4 0.0.0.0\r\n';
                    break;
                case unknown_terminate:
                    work += bytestring.substring(i + 1, iC);
                    i = iC;
                    break;
                case standard_guid_local_candidate:
                    scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                    scan_forward_to_null(' ', 'standard_local_candidate_4', unpack_guid, true);
                    scan_forward_exactly_two_bytes('.local ', unpack_i16, true);
                    work += ' typ host generation 0 network-cost 999\r\n';
                    break;
                case standard_tcp_guid_local_candidate_ffus_active:
                    scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' TCP ', unpack_i32, true);
                    scan_forward_to_null(' ', 'standard_local_candidate_4', unpack_guid, true);
                    scan_forward_exactly_two_bytes('.local ', unpack_i16, true);
                    work += ' typ host tcptype active\r\n';
                    break;
                case standard_guid_local_candidate_ffus:
                    scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' UDP ', unpack_i32, true);
                    scan_forward_to_null(' ', 'standard_local_candidate_4', unpack_guid, true);
                    scan_forward_exactly_two_bytes('.local ', unpack_i16, true);
                    work += ' typ host\r\n';
                    break;
                case standard_ip4_local_candidate_ffus:
                    scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' UDP ', unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                    scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                    work += ' typ host\r\n';
                    break;
                case standard_ip4_local_candidate_ffus_active:
                    scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' TCP ', unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                    scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                    work += ' typ host tcptype active\r\n';
                    break;
                case standard_local_candidate:
                    scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                    scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                    scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_tcp_candidate:
                    scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' tcp ', unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_tcp6_candidate:
                    scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' tcp ', unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv6_l, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_udp4_candidate:
                    scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                    scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                    scan_forward_exactly_one_byte(' typ srflx raddr ', unpack_indexed_ipv4_l, true);
                    scan_forward_exactly_two_bytes(' rport ', unpack_i16, true);
                    scan_forward_exactly_one_byte(' generation 0 network-id ', unpack_i8, false);
                    break;
                case standard_agen_udp6_host_candidate:
                    scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv6_l, true);
                    scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                    scan_forward_exactly_one_byte(' typ host generation 0 network-id ', unpack_i8, false);
                    break;
                case standard_remote_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_remote_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_2', undefined, true);
                    scan_forward_to_null(' udp ', 'standard_remote_candidate_3', undefined, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_5', undefined, true);
                    scan_forward_exactly_one_byte(' typ srflx raddr ', unpack_indexed_ipv4_l, true);
                    scan_forward_to_null(' rport ', 'standard_remote_candidate_7', undefined, true);
                    scan_forward_to_null(' generation ', 'standard_remote_candidate_8', undefined, true);
                    work += ' network-cost 999\r\n';
                    break;
                case standard_remote_candidate_ffus:
                    scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_one_byte(' ', unpack_i8, true);
                    scan_forward_exactly_four_bytes(' UDP ', unpack_i32, true);
                    scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_5', undefined, true);
                    scan_forward_exactly_one_byte(' typ srflx raddr ', unpack_indexed_ipv4_l, true);
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
                case falkon_a_ice_ufrag_4:
                    scan_forward_to_null(`ice-ufrag:`, 'falkon_a_ice_ufrag_4', undefined, false);
                    break;
                case a_ice_ufrag_4:
                    scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag_4', undefined, false);
                    break;
                case a_ice_ufrag_8:
                    scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag_8', undefined, false);
                    break;
                case a_fingerprint_sha1_256:
                    scan_forward_32_bytes(`a=fingerprint:sha-256 `, unpack_sha_colons, false);
                    break;
                default:
                    throw new TypeError(`[unpack] Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);
            }
        }
        return `${work}${at_end}`;
    }

    function compress(original) {
        return lzStringExports.compressToEncodedURIComponent(pack(original));
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
    function el(tag, { inner, className, onclick, dataId, id }) {
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
        if (id) {
            nTag.id = id;
        }
        if (dataId) {
            nTag.setAttribute('data-id', dataId);
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
    function to_claim(bytes, base_bytes) {
        return `${bytes.toLocaleString()} bytes, ${((bytes / base_bytes) * 100).toFixed(1)}%`;
    }
    let cursor = 0;
    async function click_an_anchor(e, val, label) {
        if (e === undefined) {
            throw "Can't handle an event without an event (click_an_anchor)";
        }
        const src = e.target;
        if (src && (src instanceof HTMLAnchorElement)) {
            click_an_anchor_impl(src, val, label);
        }
    }
    async function click_an_anchor_impl(src, val, label) {
        byId('example').innerHTML = val;
        qSA('#list a').forEach(el => el.className = '');
        src.className = 'sel';
        const tit = document.querySelector('#item'), ex = document.querySelector('#example'), exp = document.querySelector('#pack'), exc = document.querySelector('#compress'), exu = document.querySelector('#unpack');
        let ol, pl, cl = 0, ul;
        if ((tit !== null) && (ex !== null) && (exp !== null) && (exu !== null) && (exc !== null)) {
            tit.innerHTML = label;
            ex.innerHTML = val;
            exp.innerHTML = pack(val)
                .split('')
                .map(ch => ch.charCodeAt(0) < 33 ? `<span class="ch">[${ch.charCodeAt(0)}]</span>` : ch)
                .join('&#x200b;');
            const comp = new Uint8ClampedArray(await new Blob([compress(val)]).arrayBuffer()), ecomp = new Array(comp.length);
            cl = ecomp.length;
            for (let i = 0; i < comp.length; ++i) {
                ecomp[i] = String.fromCodePoint(Number(comp[i]));
            }
            exc.innerHTML = ecomp.join('&#x200B;');
            exu.innerHTML = unpack(pack(val));
        }
        const parsed = parse(val);
        byId('parse').innerHTML = parse_table(parsed);
        ol = val.length,
            pl = pack(val).length,
            ul = unpack(pack(val)).length;
        byId('orig_length').innerHTML = to_claim(ol, ol);
        byId('packed_length').innerHTML = to_claim(pl, ol);
        byId('compressed_length').innerHTML = to_claim(cl, ol);
        byId('unpacked_length').innerHTML = to_claim(ul, ol);
    }
    const beacon_keys = [], beacons = [];
    function bootstrap() {
        const header = document.createElement('tr');
        header.innerHTML = '<th>Old</th><th>New</th><th>Pct</th><th>URL</th><th>CPct</th><th>Rem</th><th>ID</th>';
        byId('listtgt')
            .appendChild(header);
        const oe = Object.entries(full_set);
        oe.forEach(([k, v], i) => {
            const p = parse(v.beacon), q = pack(v.beacon), cm = compress(v.beacon), c = p.value.filter(val => val.kind === 'unknown_line').length;
            beacon_keys.push(k);
            beacons.push(v.beacon);
            const a = el('a', {
                inner: `${k}`,
                href: '#',
                id: `item_${i.toString()}`,
                dataId: i.toString(),
                onclick: (e) => click_an_anchor(e, v.beacon, k)
            });
            if (i === 0) {
                setTimeout(() => a.click(), 100);
            }
            const tr = el('tr', {}), btd = el('td', {}), otd = el('td', {}), rtd = el('td', {}), ctd = el('td', {}), ptd = el('td', {}), atd = el('td', {}), std = el('td', {});
            ctd.className = 'comp';
            ptd.className = 'comp';
            otd.innerHTML = `${v.beacon.length.toLocaleString()}<span class="light">b</span>`;
            tr.appendChild(otd);
            btd.innerHTML = `${q.length.toLocaleString()}<span class="light">b</span>`;
            tr.appendChild(btd);
            std.innerHTML = `${(100 - ((q.length / v.beacon.length) * 100)).toFixed(1)}<span class="light">%</span>`;
            tr.appendChild(std);
            ctd.innerHTML = `${cm.length.toLocaleString()}<span class="light">b</span>`;
            tr.appendChild(ctd);
            ptd.innerHTML = `${(100 - ((cm.length / v.beacon.length) * 100)).toFixed(1)}<span class="light">%</span>`;
            tr.appendChild(ptd);
            rtd.innerHTML = `<span${(c > 0 ? ' class="warn"' : '')}>${c.toLocaleString()}</span>`;
            tr.appendChild(rtd);
            atd.appendChild(a);
            tr.appendChild(atd);
            byId('listtgt')
                .appendChild(tr);
        });
        addEventListener("keyup", (event) => {
            const key = event.key;
            let shouldChange = false;
            if (key === 'ArrowUp') {
                if (cursor < 1) ;
                else {
                    --cursor;
                    shouldChange = true;
                }
            }
            if (key === 'ArrowDown') {
                const maxCursor = beacons.length;
                if (cursor >= (maxCursor - 1)) ;
                else {
                    ++cursor;
                    shouldChange = true;
                }
            }
            if (shouldChange) {
                const tgt = byId(`item_${cursor}`);
                click_an_anchor_impl(tgt, beacons[cursor], beacon_keys[cursor]);
            }
        });
    }

    exports.bootstrap = bootstrap;
    exports.pack = pack;
    exports.unpack = unpack;

    return exports;

})({});
