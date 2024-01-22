var so_viewer = (function (exports) {
    'use strict';

    const full_set = {
        win_10_chrome_92_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=- 1199580080461629164 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 59267 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:2254048910 1 udp 2122262783 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 59265 typ host generation 0 network-id 2\r\na=candidate:794956039 1 udp 2122197247 2601:645:8400:6c20::a610 59266 typ host generation 0 network-id 3\r\na=candidate:1191081017 1 udp 2122129151 10.0.0.163 59267 typ host generation 0 network-id 1\r\na=candidate:3293969885 1 udp 2122063615 172.18.80.1 59268 typ host generation 0 network-id 4\r\na=candidate:3282507946 1 udp 2121998079 172.30.0.1 59269 typ host generation 0 network-id 5\r\na=candidate:3423470964 1 udp 2121932543 172.21.32.1 59270 typ host generation 0 network-id 6\r\na=candidate:2782917333 1 udp 1685921535 73.162.196.213 59267 typ srflx raddr 10.0.0.163 rport 59267 generation 0 network-id 1\r\na=candidate:3369726590 1 tcp 1518283007 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 9 typ host tcptype active generation 0 network-id 2\r\na=candidate:1642196471 1 tcp 1518217471 2601:645:8400:6c20::a610 9 typ host tcptype active generation 0 network-id 3\r\na=candidate:142444745 1 tcp 1518149375 10.0.0.163 9 typ host tcptype active generation 0 network-id 1\r\na=candidate:2329280813 1 tcp 1518083839 172.18.80.1 9 typ host tcptype active generation 0 network-id 4\r\na=candidate:2368005210 1 tcp 1518018303 172.30.0.1 9 typ host tcptype active generation 0 network-id 5\r\na=candidate:2190342532 1 tcp 1517952767 172.21.32.1 9 typ host tcptype active generation 0 network-id 6\r\na=ice-ufrag:h2zg\r\na=ice-pwd:rLDrcPyQHODnE5SBbDM0vAHf\r\na=fingerprint:sha-256 F2:7A:3A:54:09:D3:6B:62:39:A2:21:5E:87:92:12:90:7C:D9:9C:F6:CC:9B:A4:62:BD:99:59:18:88:F7:92:BD\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        win_10_chrome_92_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=- 3117966035669467040 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 53878 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 10.0.0.163\r\na=candidate:2254048910 1 udp 2122262783 2601:645:8400:6c20:a0ed:463d:b3d9:2e5b 53876 typ host generation 0 network-id 2\r\na=candidate:794956039 1 udp 2122197247 2601:645:8400:6c20::a610 53877 typ host generation 0 network-id 3\r\na=candidate:1191081017 1 udp 2122129151 10.0.0.163 53878 typ host generation 0 network-id 1\r\na=candidate:3293969885 1 udp 2122063615 172.18.80.1 53879 typ host generation 0 network-id 4\r\na=candidate:3282507946 1 udp 2121998079 172.30.0.1 53880 typ host generation 0 network-id 5\r\na=candidate:3423470964 1 udp 2121932543 172.21.32.1 53881 typ host generation 0 network-id 6\r\na=ice-ufrag:4brc\r\na=ice-pwd:2RICOsokE48Lr55/YhAD+Bsn\r\na=fingerprint:sha-256 EA:B3:7F:DB:E4:2A:E8:42:5E:E4:99:74:FB:B6:11:5F:95:DF:50:03:9C:21:FA:22:9F:DC:70:61:42:AA:0A:CD\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
        win_10_edge_92_client: {
            beacon: '{"type":"answer","sdp":"v=0\r\no=- 7915603849260443750 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:1191081017 1 udp 2113937151 11e8c070-13e3-4270-9faa-d39303a92c4e.local 55289 typ host generation 0 network-cost 999\r\na=candidate:2254048910 1 udp 2113939711 8aad7c7f-2b5e-426d-9f79-c8e09ed00a57.local 55290 typ host generation 0 network-cost 999\r\na=ice-ufrag:qPHq\r\na=ice-pwd:J3SyqY3dyN7gM4eabGtNWMEl\r\na=fingerprint:sha-256 55:26:A3:DE:C3:39:28:FE:0B:BC:9D:34:2D:2D:9E:C0:82:90:BA:E3:EE:0C:24:88:02:74:38:D8:CC:74:8B:93\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}',
        },
        win_10_edge_92_host: {
            beacon: '{"type":"offer","sdp":"v=0\r\no=- 6739192461737761423 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 57122 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 73.162.196.213\r\na=candidate:1191081017 1 udp 2113937151 849e395b-6ab1-47fa-b916-23570842e255.local 57122 typ host generation 0 network-cost 999\r\na=candidate:2254048910 1 udp 2113939711 356e97de-f36d-41e4-8f1f-689025403a0a.local 57123 typ host generation 0 network-cost 999\r\na=candidate:842163049 1 udp 1677729535 73.162.196.213 57122 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:UnGC\r\na=ice-pwd:o+OTq5G3XG3OZTo95MpYZ2Uv\r\na=fingerprint:sha-256 D9:0A:41:AF:96:AD:8D:4D:92:99:F6:4F:00:2A:A6:D9:CC:4A:66:C7:41:73:91:36:27:AA:F2:D3:83:B7:96:4E\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}'
        },
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
        var peg$FAILED = {}, peg$startRuleFunctions = { RawDocument: peg$parseRawDocument }, peg$startRuleFunction = peg$parseRawDocument, peg$c0 = /^[0-9]/, peg$c1 = peg$classExpectation([["0", "9"]], false, false), peg$c2 = function (d) { return BigInt(d.join(''), 10); }, peg$c3 = /^[0-9a-fA-F]/, peg$c4 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false), peg$c5 = function (a, b) { return `${a}${b}`; }, peg$c6 = function (a, b, c, d) { return [a, b, c, d].join(''); }, peg$c7 = function (a, b, c, d, e, f, g, h) { return [a, b, c, d, e, f, g, h].join(''); }, peg$c8 = function (a, b, c, d, e, f, g, h, i, j, k, l) { return [a, b, c, d, e, f, g, h, i, j, k, l].join(''); }, peg$c9 = ":", peg$c10 = peg$literalExpectation(":", false), peg$c11 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F].join(''); }, peg$c12 = /^[0-9a-zA-Z\/+]/, peg$c13 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"], "/", "+"], false, false), peg$c14 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v].join(''); }, peg$c15 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x].join(''); }, peg$c16 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af].join(''); }, peg$c17 = "-", peg$c18 = peg$literalExpectation("-", false), peg$c19 = function (a, b, c, d, e) { return [a, b, c, d, e].join(''); }, peg$c20 = ".", peg$c21 = peg$literalExpectation(".", false), peg$c22 = function (a, b, c, d) { return ((((((a * 256n) + b) * 256n) + c) * 256n) + d).toString(); }, peg$c23 = function (pre, post, last) {
            const lead = pre ? pre[0] : [], follow = [...post, last], gap = 8 - (lead.length + follow.length);
            if (gap < 0) {
                throw new Error('address may have at most 8 segments');
            }
            return ([...lead, ...repeat(gap, 0), ...follow]
                .map(n => n.toString(16))
                .join(':')
                .toLowerCase());
        }, peg$c24 = function (q) { return q; }, peg$c25 = function () { return parseInt(text(), 16); }, peg$c41 = /^[ \r\n\t\x0B]/, peg$c42 = peg$classExpectation([" ", "\r", "\n", "\t", "\x0B"], false, false), peg$c43 = "{", peg$c44 = peg$literalExpectation("{", false), peg$c45 = "\"type\"", peg$c46 = peg$literalExpectation("\"type\"", false), peg$c47 = "\"offer\"", peg$c48 = peg$literalExpectation("\"offer\"", false), peg$c49 = ",", peg$c50 = peg$literalExpectation(",", false), peg$c51 = "\"sdp\"", peg$c52 = peg$literalExpectation("\"sdp\"", false), peg$c53 = "\"", peg$c54 = peg$literalExpectation("\"", false), peg$c55 = "}", peg$c56 = peg$literalExpectation("}", false), peg$c57 = function (s) { return ast('offer', s); }, peg$c58 = "\"answer\"", peg$c59 = peg$literalExpectation("\"answer\"", false), peg$c60 = function (s) { return ast('answer', s); }, peg$c61 = "v=0", peg$c62 = peg$literalExpectation("v=0", false), peg$c63 = function (us) { return ast('version_zero_line', undefined); }, peg$c64 = "v=", peg$c65 = peg$literalExpectation("v=", false), peg$c66 = function (us) { return ast('version_line', us); }, peg$c67 = "a=sendrecv", peg$c68 = peg$literalExpectation("a=sendrecv", false), peg$c69 = function (us) { return ast('a_send_recv', us); }, peg$c70 = "b=AS:30", peg$c71 = peg$literalExpectation("b=AS:30", false), peg$c72 = function () { return ast('b_as_30'); }, peg$c73 = "a=end-of-candidates", peg$c74 = peg$literalExpectation("a=end-of-candidates", false), peg$c75 = function (us) { return ast('a_end_of_candidates', us); }, peg$c76 = "a=msid-semantic:WMS", peg$c77 = peg$literalExpectation("a=msid-semantic:WMS", false), peg$c78 = function () { return ast('a_msid_semantic_ns'); }, peg$c79 = "a=msid-semantic:WMS *", peg$c80 = peg$literalExpectation("a=msid-semantic:WMS *", false), peg$c81 = function () { return ast('a_msid_semantic_star_ns'); }, peg$c82 = "a=msid-semantic: WMS", peg$c83 = peg$literalExpectation("a=msid-semantic: WMS", false), peg$c84 = function () { return ast('a_msid_semantic_ws'); }, peg$c85 = "a=extmap-allow-mixed", peg$c86 = peg$literalExpectation("a=extmap-allow-mixed", false), peg$c87 = function () { return ast('a_extmap_allow_mixed'); }, peg$c88 = "a=setup:actpass", peg$c89 = peg$literalExpectation("a=setup:actpass", false), peg$c90 = function () { return ast('a_setup_actpass'); }, peg$c91 = "a=setup:active", peg$c92 = peg$literalExpectation("a=setup:active", false), peg$c93 = function () { return ast('a_setup_active'); }, peg$c94 = "a=mid:0", peg$c95 = peg$literalExpectation("a=mid:0", false), peg$c96 = function () { return ast('a_mid_zero'); }, peg$c97 = "s=-", peg$c98 = peg$literalExpectation("s=-", false), peg$c99 = function () { return ast('s_dash'); }, peg$c100 = function (maj, min, patch) { return ast('moz_v_num', [maj, min, patch]); }, peg$c101 = function (maj, min) { return ast('moz_v_num', [maj, min, undefined]); }, peg$c102 = "o=- ", peg$c103 = peg$literalExpectation("o=- ", false), peg$c104 = " ", peg$c105 = peg$literalExpectation(" ", false), peg$c106 = " IN IP4 ", peg$c107 = peg$literalExpectation(" IN IP4 ", false), peg$c108 = function (msess, d, i) { return ast('standard_origin', [msess, d, i]); }, peg$c109 = "o=mozilla...THIS_IS_SDPARTA-", peg$c110 = peg$literalExpectation("o=mozilla...THIS_IS_SDPARTA-", false), peg$c111 = " 0 IN IP4 0.0.0.0", peg$c112 = peg$literalExpectation(" 0 IN IP4 0.0.0.0", false), peg$c113 = function (mv, msess) { return ast('standard_moz_origin', [mv, msess]); }, peg$c114 = "t=0 0", peg$c115 = peg$literalExpectation("t=0 0", false), peg$c116 = function () { return ast('t_zero_zero'); }, peg$c117 = "a=ice-options:trickle", peg$c118 = peg$literalExpectation("a=ice-options:trickle", false), peg$c119 = function () { return ast('a_ice_options_trickle'); }, peg$c120 = "a=sctp-port:5000", peg$c121 = peg$literalExpectation("a=sctp-port:5000", false), peg$c122 = function () { return ast('a_standard_sctp_port'); }, peg$c123 = "a=sctp-port:", peg$c124 = peg$literalExpectation("a=sctp-port:", false), peg$c125 = function (data) { return ast('a_custom_sctp_port', data); }, peg$c126 = "a=max-message-size:262144", peg$c127 = peg$literalExpectation("a=max-message-size:262144", false), peg$c128 = function () { return ast('a_standard_max_message_size'); }, peg$c129 = "a=max-message-size:", peg$c130 = peg$literalExpectation("a=max-message-size:", false), peg$c131 = function (data) { return ast('a_custom_max_message_size', data); }, peg$c132 = "a=candidate:", peg$c133 = peg$literalExpectation("a=candidate:", false), peg$c134 = " udp ", peg$c135 = peg$literalExpectation(" udp ", false), peg$c136 = " typ host generation 0 network-id ", peg$c137 = peg$literalExpectation(" typ host generation 0 network-id ", false), peg$c138 = function (d1, d2, d3, i, p, d4) { return ast('standard_local_candidate', [d1, d2, d3, i, p, d4]); }, peg$c139 = ".local ", peg$c140 = peg$literalExpectation(".local ", false), peg$c141 = " typ host generation 0 network-cost 999", peg$c142 = peg$literalExpectation(" typ host generation 0 network-cost 999", false), peg$c143 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate', [d1, d2, d3, g, d4]); }, peg$c144 = " UDP ", peg$c145 = peg$literalExpectation(" UDP ", false), peg$c146 = " typ host", peg$c147 = peg$literalExpectation(" typ host", false), peg$c148 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate_ffus', [d1, d2, d3, g, d4]); }, peg$c149 = " typ srflx raddr ", peg$c150 = peg$literalExpectation(" typ srflx raddr ", false), peg$c151 = " rport ", peg$c152 = peg$literalExpectation(" rport ", false), peg$c153 = " generation ", peg$c154 = peg$literalExpectation(" generation ", false), peg$c155 = " network-cost 999", peg$c156 = peg$literalExpectation(" network-cost 999", false), peg$c157 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_remote_candidate', [d1, d2, d3, i1, d4, i2, d5, d6]); }, peg$c158 = function (d1, d2, d3, i1, d4, i2, d5) { return ast('standard_remote_candidate_ffus', [d1, d2, d3, i1, d4, i2, d5]); }, peg$c159 = " tcp ", peg$c160 = peg$literalExpectation(" tcp ", false), peg$c161 = " typ host tcptype active generation 0 network-id ", peg$c162 = peg$literalExpectation(" typ host tcptype active generation 0 network-id ", false), peg$c163 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c164 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp6_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c165 = " generation 0 network-id ", peg$c166 = peg$literalExpectation(" generation 0 network-id ", false), peg$c167 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_agen_udp4_candidate', [d1, d2, d3, i1, d4, i2, d5, d6]); }, peg$c168 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_udp6_host_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c169 = "a=ice-pwd:", peg$c170 = peg$literalExpectation("a=ice-pwd:", false), peg$c171 = function (data) { return ast('a_ice_pwd', data); }, peg$c172 = function (data) { return ast('a_ice_pwd_l', data); }, peg$c173 = function (data) { return ast('a_ice_pwd_v', data); }, peg$c174 = "a=ice-ufrag:", peg$c175 = peg$literalExpectation("a=ice-ufrag:", false), peg$c176 = function (data) { return ast('a_ice_ufrag_4', data); }, peg$c177 = function (data) { return ast('a_ice_ufrag_8', data); }, peg$c178 = "a=fingerprint:sha-256 ", peg$c179 = peg$literalExpectation("a=fingerprint:sha-256 ", false), peg$c180 = function (data) { return ast('a_fingerprint_sha1_256', data); }, peg$c181 = "a=group:BUNDLE 0", peg$c182 = peg$literalExpectation("a=group:BUNDLE 0", false), peg$c183 = function () { return ast('a_group_bundle_0'); }, peg$c184 = "c=IN IP4 ", peg$c185 = peg$literalExpectation("c=IN IP4 ", false), peg$c186 = function (data) { return ast('c_claim_ip4', data); }, peg$c187 = "m=application ", peg$c188 = peg$literalExpectation("m=application ", false), peg$c189 = " UDP/DTLS/SCTP webrtc-datachannel", peg$c190 = peg$literalExpectation(" UDP/DTLS/SCTP webrtc-datachannel", false), peg$c191 = function (data) { return ast('standard_m_application', data); }, peg$c192 = function (us) { return ast('unknown_line', us); }, peg$c193 = /^[^'\r\n']/, peg$c194 = peg$classExpectation(["'", "\r", "\n", "'"], true, false), peg$c195 = "\r\n", peg$c196 = peg$literalExpectation("\r\n", false), peg$c197 = function (rl) { return rl.join(''); }, peg$c198 = peg$anyExpectation(), peg$c199 = function (uts) { return ast('unknown_terminate', uts.join('')); }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$result;
        if ("startRule" in options) {
            if (!(options.startRule in peg$startRuleFunctions)) {
                throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
            }
            peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
        }
        function text() {
            return input.substring(peg$savedPos, peg$currPos);
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
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            s1 = peg$currPos;
            s2 = [];
            s3 = peg$parsequadlet();
            while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parsequadlet();
            }
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
                    s2 = [s2, s3];
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
            if (s1 === peg$FAILED) {
                s1 = null;
            }
            if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$parsequadlet();
                while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    s3 = peg$parsequadlet();
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseup_quad();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c23(s1, s2, s3);
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
        function peg$parsequadlet() {
            var s0, s1, s2;
            s0 = peg$currPos;
            s1 = peg$parseup_quad();
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
                    peg$savedPos = s0;
                    s1 = peg$c24(s1);
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
        function peg$parseup_quad() {
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
                            s1 = peg$c25();
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
        function peg$parseWS() {
            var s0, s1;
            s0 = [];
            if (peg$c41.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c42);
                }
            }
            while (s1 !== peg$FAILED) {
                s0.push(s1);
                if (peg$c41.test(input.charAt(peg$currPos))) {
                    s1 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s1 = peg$FAILED;
                    {
                        peg$fail(peg$c42);
                    }
                }
            }
            return s0;
        }
        function peg$parseOffer() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19;
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 123) {
                s1 = peg$c43;
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c44);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseWS();
                if (s2 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 6) === peg$c45) {
                        s3 = peg$c45;
                        peg$currPos += 6;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c46);
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
                                    if (input.substr(peg$currPos, 7) === peg$c47) {
                                        s7 = peg$c47;
                                        peg$currPos += 7;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c48);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseWS();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 44) {
                                                s9 = peg$c49;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c50);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseWS();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 5) === peg$c51) {
                                                        s11 = peg$c51;
                                                        peg$currPos += 5;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c52);
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
                                                                        s15 = peg$c53;
                                                                        peg$currPos++;
                                                                    }
                                                                    else {
                                                                        s15 = peg$FAILED;
                                                                        {
                                                                            peg$fail(peg$c54);
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
                                                                                s17 = peg$c53;
                                                                                peg$currPos++;
                                                                            }
                                                                            else {
                                                                                s17 = peg$FAILED;
                                                                                {
                                                                                    peg$fail(peg$c54);
                                                                                }
                                                                            }
                                                                            if (s17 !== peg$FAILED) {
                                                                                s18 = peg$parseWS();
                                                                                if (s18 !== peg$FAILED) {
                                                                                    if (input.charCodeAt(peg$currPos) === 125) {
                                                                                        s19 = peg$c55;
                                                                                        peg$currPos++;
                                                                                    }
                                                                                    else {
                                                                                        s19 = peg$FAILED;
                                                                                        {
                                                                                            peg$fail(peg$c56);
                                                                                        }
                                                                                    }
                                                                                    if (s19 !== peg$FAILED) {
                                                                                        peg$savedPos = s0;
                                                                                        s1 = peg$c57(s16);
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
                s1 = peg$c43;
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c44);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseWS();
                if (s2 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 6) === peg$c45) {
                        s3 = peg$c45;
                        peg$currPos += 6;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c46);
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
                                    if (input.substr(peg$currPos, 8) === peg$c58) {
                                        s7 = peg$c58;
                                        peg$currPos += 8;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        {
                                            peg$fail(peg$c59);
                                        }
                                    }
                                    if (s7 !== peg$FAILED) {
                                        s8 = peg$parseWS();
                                        if (s8 !== peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 44) {
                                                s9 = peg$c49;
                                                peg$currPos++;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c50);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseWS();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 5) === peg$c51) {
                                                        s11 = peg$c51;
                                                        peg$currPos += 5;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c52);
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
                                                                        s15 = peg$c53;
                                                                        peg$currPos++;
                                                                    }
                                                                    else {
                                                                        s15 = peg$FAILED;
                                                                        {
                                                                            peg$fail(peg$c54);
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
                                                                                s17 = peg$c53;
                                                                                peg$currPos++;
                                                                            }
                                                                            else {
                                                                                s17 = peg$FAILED;
                                                                                {
                                                                                    peg$fail(peg$c54);
                                                                                }
                                                                            }
                                                                            if (s17 !== peg$FAILED) {
                                                                                s18 = peg$parseWS();
                                                                                if (s18 !== peg$FAILED) {
                                                                                    if (input.charCodeAt(peg$currPos) === 125) {
                                                                                        s19 = peg$c55;
                                                                                        peg$currPos++;
                                                                                    }
                                                                                    else {
                                                                                        s19 = peg$FAILED;
                                                                                        {
                                                                                            peg$fail(peg$c56);
                                                                                        }
                                                                                    }
                                                                                    if (s19 !== peg$FAILED) {
                                                                                        peg$savedPos = s0;
                                                                                        s1 = peg$c60(s16);
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
        function peg$parseIceOptionsTrickle() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 21) === peg$c117) {
                s1 = peg$c117;
                peg$currPos += 21;
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
        function peg$parseStandardSctpPort() {
            var s0, s1, s2;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 16) === peg$c120) {
                s1 = peg$c120;
                peg$currPos += 16;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c121);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c122();
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
            if (input.substr(peg$currPos, 12) === peg$c123) {
                s1 = peg$c123;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c124);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c125(s2);
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
            if (input.substr(peg$currPos, 25) === peg$c126) {
                s1 = peg$c126;
                peg$currPos += 25;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c127);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c128();
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
            if (input.substr(peg$currPos, 19) === peg$c129) {
                s1 = peg$c129;
                peg$currPos += 19;
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
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c131(s2);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c134) {
                                s5 = peg$c134;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c135);
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
                                                    if (input.substr(peg$currPos, 34) === peg$c136) {
                                                        s11 = peg$c136;
                                                        peg$currPos += 34;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c137);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseDecimal();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseCapAtSeparator();
                                                            if (s13 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c138(s2, s4, s6, s8, s10, s12);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c134) {
                                s5 = peg$c134;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c135);
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
                                            if (input.substr(peg$currPos, 7) === peg$c139) {
                                                s9 = peg$c139;
                                                peg$currPos += 7;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c140);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 39) === peg$c141) {
                                                        s11 = peg$c141;
                                                        peg$currPos += 39;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c142);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseCapAtSeparator();
                                                        if (s12 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c143(s2, s4, s6, s8, s10);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c144) {
                                s5 = peg$c144;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c145);
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
                                            if (input.substr(peg$currPos, 7) === peg$c139) {
                                                s9 = peg$c139;
                                                peg$currPos += 7;
                                            }
                                            else {
                                                s9 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c140);
                                                }
                                            }
                                            if (s9 !== peg$FAILED) {
                                                s10 = peg$parseDecimal();
                                                if (s10 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 9) === peg$c146) {
                                                        s11 = peg$c146;
                                                        peg$currPos += 9;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c147);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseCapAtSeparator();
                                                        if (s12 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c148(s2, s4, s6, s8, s10);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c134) {
                                s5 = peg$c134;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c135);
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
                                                    if (input.substr(peg$currPos, 17) === peg$c149) {
                                                        s11 = peg$c149;
                                                        peg$currPos += 17;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c150);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIP4();
                                                        if (s12 !== peg$FAILED) {
                                                            if (input.substr(peg$currPos, 7) === peg$c151) {
                                                                s13 = peg$c151;
                                                                peg$currPos += 7;
                                                            }
                                                            else {
                                                                s13 = peg$FAILED;
                                                                {
                                                                    peg$fail(peg$c152);
                                                                }
                                                            }
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseDecimal();
                                                                if (s14 !== peg$FAILED) {
                                                                    if (input.substr(peg$currPos, 12) === peg$c153) {
                                                                        s15 = peg$c153;
                                                                        peg$currPos += 12;
                                                                    }
                                                                    else {
                                                                        s15 = peg$FAILED;
                                                                        {
                                                                            peg$fail(peg$c154);
                                                                        }
                                                                    }
                                                                    if (s15 !== peg$FAILED) {
                                                                        s16 = peg$parseDecimal();
                                                                        if (s16 !== peg$FAILED) {
                                                                            if (input.substr(peg$currPos, 17) === peg$c155) {
                                                                                s17 = peg$c155;
                                                                                peg$currPos += 17;
                                                                            }
                                                                            else {
                                                                                s17 = peg$FAILED;
                                                                                {
                                                                                    peg$fail(peg$c156);
                                                                                }
                                                                            }
                                                                            if (s17 !== peg$FAILED) {
                                                                                s18 = peg$parseCapAtSeparator();
                                                                                if (s18 !== peg$FAILED) {
                                                                                    peg$savedPos = s0;
                                                                                    s1 = peg$c157(s2, s4, s6, s8, s10, s12, s14, s16);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c144) {
                                s5 = peg$c144;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c145);
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
                                                    if (input.substr(peg$currPos, 17) === peg$c149) {
                                                        s11 = peg$c149;
                                                        peg$currPos += 17;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c150);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIP4();
                                                        if (s12 !== peg$FAILED) {
                                                            if (input.substr(peg$currPos, 7) === peg$c151) {
                                                                s13 = peg$c151;
                                                                peg$currPos += 7;
                                                            }
                                                            else {
                                                                s13 = peg$FAILED;
                                                                {
                                                                    peg$fail(peg$c152);
                                                                }
                                                            }
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseDecimal();
                                                                if (s14 !== peg$FAILED) {
                                                                    s15 = peg$parseCapAtSeparator();
                                                                    if (s15 !== peg$FAILED) {
                                                                        peg$savedPos = s0;
                                                                        s1 = peg$c158(s2, s4, s6, s8, s10, s12, s14);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c159) {
                                s5 = peg$c159;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c160);
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
                                                    if (input.substr(peg$currPos, 49) === peg$c161) {
                                                        s11 = peg$c161;
                                                        peg$currPos += 49;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c162);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseDecimal();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseCapAtSeparator();
                                                            if (s13 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c163(s2, s4, s6, s8, s10, s12);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c159) {
                                s5 = peg$c159;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c160);
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
                                                    if (input.substr(peg$currPos, 49) === peg$c161) {
                                                        s11 = peg$c161;
                                                        peg$currPos += 49;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c162);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseDecimal();
                                                        if (s12 !== peg$FAILED) {
                                                            s13 = peg$parseCapAtSeparator();
                                                            if (s13 !== peg$FAILED) {
                                                                peg$savedPos = s0;
                                                                s1 = peg$c164(s2, s4, s6, s8, s10, s12);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c134) {
                                s5 = peg$c134;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c135);
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
                                                    if (input.substr(peg$currPos, 17) === peg$c149) {
                                                        s11 = peg$c149;
                                                        peg$currPos += 17;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c150);
                                                        }
                                                    }
                                                    if (s11 !== peg$FAILED) {
                                                        s12 = peg$parseIP4();
                                                        if (s12 !== peg$FAILED) {
                                                            if (input.substr(peg$currPos, 7) === peg$c151) {
                                                                s13 = peg$c151;
                                                                peg$currPos += 7;
                                                            }
                                                            else {
                                                                s13 = peg$FAILED;
                                                                {
                                                                    peg$fail(peg$c152);
                                                                }
                                                            }
                                                            if (s13 !== peg$FAILED) {
                                                                s14 = peg$parseDecimal();
                                                                if (s14 !== peg$FAILED) {
                                                                    if (input.substr(peg$currPos, 25) === peg$c165) {
                                                                        s15 = peg$c165;
                                                                        peg$currPos += 25;
                                                                    }
                                                                    else {
                                                                        s15 = peg$FAILED;
                                                                        {
                                                                            peg$fail(peg$c166);
                                                                        }
                                                                    }
                                                                    if (s15 !== peg$FAILED) {
                                                                        s16 = peg$parseDecimal();
                                                                        if (s16 !== peg$FAILED) {
                                                                            s17 = peg$parseCapAtSeparator();
                                                                            if (s17 !== peg$FAILED) {
                                                                                peg$savedPos = s0;
                                                                                s1 = peg$c167(s2, s4, s6, s8, s10, s12, s14, s16);
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
            if (input.substr(peg$currPos, 12) === peg$c132) {
                s1 = peg$c132;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c133);
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
                            if (input.substr(peg$currPos, 5) === peg$c134) {
                                s5 = peg$c134;
                                peg$currPos += 5;
                            }
                            else {
                                s5 = peg$FAILED;
                                {
                                    peg$fail(peg$c135);
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
                                                    if (input.substr(peg$currPos, 34) === peg$c136) {
                                                        s11 = peg$c136;
                                                        peg$currPos += 34;
                                                    }
                                                    else {
                                                        s11 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c137);
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
        function peg$parseAIcePwd() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 10) === peg$c169) {
                s1 = peg$c169;
                peg$currPos += 10;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c170);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar22();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c171(s2);
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
            if (input.substr(peg$currPos, 10) === peg$c169) {
                s1 = peg$c169;
                peg$currPos += 10;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c170);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar24();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c172(s2);
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
            if (input.substr(peg$currPos, 10) === peg$c169) {
                s1 = peg$c169;
                peg$currPos += 10;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c170);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar32();
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
        function peg$parseAIceUFrag4() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c174) {
                s1 = peg$c174;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c175);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar4();
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
        function peg$parseAIceUFrag8() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 12) === peg$c174) {
                s1 = peg$c174;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c175);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIceChar8();
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
        function peg$parseAFingerprint() {
            var s0, s1, s2, s3;
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 22) === peg$c178) {
                s1 = peg$c178;
                peg$currPos += 22;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c179);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCHex64();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c180(s2);
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
            if (input.substr(peg$currPos, 16) === peg$c181) {
                s1 = peg$c181;
                peg$currPos += 16;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c182);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseCapAtSeparator();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c183();
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
            if (input.substr(peg$currPos, 9) === peg$c184) {
                s1 = peg$c184;
                peg$currPos += 9;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c185);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseIP4();
                if (s2 !== peg$FAILED) {
                    s3 = peg$parseCapAtSeparator();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c186(s2);
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
            if (input.substr(peg$currPos, 14) === peg$c187) {
                s1 = peg$c187;
                peg$currPos += 14;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c188);
                }
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parseDecimal();
                if (s2 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 33) === peg$c189) {
                        s3 = peg$c189;
                        peg$currPos += 33;
                    }
                    else {
                        s3 = peg$FAILED;
                        {
                            peg$fail(peg$c190);
                        }
                    }
                    if (s3 !== peg$FAILED) {
                        s4 = peg$parseCapAtSeparator();
                        if (s4 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c191(s2);
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
                s1 = peg$c192(s1);
            }
            s0 = s1;
            return s0;
        }
        function peg$parseUntilSeparator() {
            var s0, s1, s2;
            s0 = peg$currPos;
            s1 = [];
            if (peg$c193.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c194);
                }
            }
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                if (peg$c193.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c194);
                    }
                }
            }
            if (s1 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c195) {
                    s2 = peg$c195;
                    peg$currPos += 2;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c196);
                    }
                }
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c197(s1);
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
            if (input.substr(peg$currPos, 2) === peg$c195) {
                s0 = peg$c195;
                peg$currPos += 2;
            }
            else {
                s0 = peg$FAILED;
                {
                    peg$fail(peg$c196);
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
                    peg$fail(peg$c198);
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
                        peg$fail(peg$c198);
                    }
                }
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c199(s1);
            }
            s0 = s1;
            return s0;
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
        function repeat(count, item) {
            return new Array(count).fill(item);
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
    const offer = '\x01', answer = '\x02', version_zero_line = '\x03', version_line = '\x04', a_msid_semantic_ns = '\x05', a_msid_semantic_star_ns = '\x06', a_msid_semantic_ws = '\x07', a_extmap_allow_mixed = '\x08', a_standard_sctp_port = '\x09', a_custom_sctp_port = '\x0a', a_standard_max_message_size = '\x0b', a_custom_max_message_size = '\x0c', a_setup_actpass = '\x0d', a_setup_active = '\x0e', a_mid_zero = '\x0f', s_dash = '\x10', t_zero_zero = '\x11', b_as_30 = '\x12', standard_origin = '\x13', standard_moz_origin = '\x14', standard_local_candidate = '\x15', standard_guid_local_candidate = '\x16', standard_guid_local_candidate_ffus = '\x17', standard_remote_candidate = '\x18', standard_remote_candidate_ffus = '\x19', standard_agen_tcp_candidate = '\x1a', standard_agen_tcp6_candidate = '\x1b', standard_agen_udp4_candidate = '\x1c', standard_agen_udp6_host_candidate = '\x1d', a_ice_pwd = '\x1e', a_ice_pwd_l = '\x1f', a_ice_pwd_v = '\x20', a_ice_ufrag_4 = '\x21', a_ice_ufrag_8 = '\x22', a_fingerprint_sha1_256 = '\x23', a_group_bundle_0 = '\x24', a_send_recv = '\x25', a_end_of_candidates = '\x26', c_claim_ip4 = '\x27', standard_m_application = '\x28', a_ice_options_trickle = '\x29';
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
        'a_fingerprint_sha1_256': (v) => `${a_fingerprint_sha1_256}${pack_sha256(v.value)}${c_terminal}`,
        'a_send_recv': (_) => `${a_send_recv}`,
        'a_end_of_candidates': (_) => `${a_end_of_candidates}`,
        's_dash': (_) => `${s_dash}`,
        't_zero_zero': (_) => `${t_zero_zero}`,
        'b_as_30': (_) => `${b_as_30}`,
        'c_claim_ip4': (v) => `${c_claim_ip4}${pack_i32(v.value)}${c_terminal}`,
        'standard_m_application': (v) => `${standard_m_application}${v.value}${c_terminal}`,
        'a_ice_options_trickle': (_) => `${a_ice_options_trickle}`,
        'standard_origin': (v) => {
            const { kind, items } = v;
            const [s, d, i] = items;
            if (kind !== 'standard_origin') {
                throw 'impossible';
            }
            return `${standard_origin}${s}${c_terminal}${d}${c_terminal}${pack_i32(i)}${c_terminal}`;
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
            return `${standard_local_candidate}${pack_i32(d1)}${c_terminal}${pack_i32(d2)}${c_terminal}${d3}${c_terminal}${pack_i32(i1)}${c_terminal}${p}${c_terminal}${d4}${c_terminal}`;
        },
        'standard_remote_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
            if (kind !== 'standard_remote_candidate') {
                throw 'impossible';
            }
            return `${standard_remote_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${pack_i32(i1)}${c_terminal}${d4}${c_terminal}${pack_i32(i2)}${c_terminal}${d5}${c_terminal}${d6}${c_terminal}`;
        },
        'standard_remote_candidate_ffus': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5] = items;
            if (kind !== 'standard_remote_candidate_ffus') {
                throw 'impossible';
            }
            return `${standard_remote_candidate_ffus}${pack_i32(d1)}${c_terminal}${pack_i8(d2)}${c_terminal}${pack_i32(d3)}${c_terminal}${pack_i32(i1)}${c_terminal}${d4}${c_terminal}${pack_i32(i2)}${c_terminal}${d5}${c_terminal}`;
        },
        'standard_agen_tcp_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, d5] = items;
            if (kind !== 'standard_agen_tcp_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_tcp_candidate}${pack_i32(d1)}${c_terminal}${pack_i8(d2)}${c_terminal}${pack_i32(d3)}${c_terminal}${pack_i32(i1)}${c_terminal}${d4}${c_terminal}${d5}${c_terminal}`;
        },
        'standard_agen_tcp6_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, d5] = items;
            if (kind !== 'standard_agen_tcp6_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_tcp6_candidate}${pack_i32(d1)}${c_terminal}${pack_i8(d2)}${c_terminal}${pack_i32(d3)}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${d5}${c_terminal}`;
        },
        'standard_agen_udp4_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
            if (kind !== 'standard_agen_udp4_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_udp4_candidate}${pack_i32(d1)}${c_terminal}${pack_i8(d2)}${c_terminal}${pack_i32(d3)}${c_terminal}${pack_i32(i1)}${c_terminal}${d4}${c_terminal}${pack_i32(i2)}${c_terminal}${d5}${c_terminal}${d6}${c_terminal}`;
        },
        'standard_agen_udp6_host_candidate': (v) => {
            const { kind, items } = v;
            const [d1, d2, d3, i1, d4, d5] = items;
            if (kind !== 'standard_agen_udp6_host_candidate') {
                throw 'impossible';
            }
            return `${standard_agen_udp6_host_candidate}${pack_i32(d1)}${c_terminal}${pack_i8(d2)}${c_terminal}${pack_i32(d3)}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${d5}${c_terminal}`;
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

    var lzString = {exports: {}};

    lzString.exports;

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

    var lzStringExports = lzString.exports;

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
    function unpack_bytized_ipv4(str) {
        const a = str.codePointAt(0), b = str.codePointAt(1), c = str.codePointAt(2), d = str.codePointAt(3);
        return `${a}.${b}.${c}.${d}`;
    }
    function unpack_i32(str) {
        const a = str.codePointAt(0) ?? 0, b = str.codePointAt(1) ?? 0, c = str.codePointAt(2) ?? 0, d = str.codePointAt(3) ?? 0;
        return ((((((a * 256) + b) * 256) + c) * 256) + d).toString();
    }
    function unpack_i8(str) {
        const d = str.codePointAt(0) ?? 0;
        return (d).toString();
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
        function scan_forward_one_byte(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 2));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 2;
        }
        function scan_forward_four_bytes(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 5));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 5;
        }
        function scan_forward_32_bytes(prefix, unpacker = unpack_none, skip_r_n = false) {
            const unpacked = unpacker(bytestring.substring(i + 1, i + 33));
            work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
            i += 33;
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
                    scan_forward_four_bytes('c=IN IP4 ', unpack_bytized_ipv4, true);
                    work += '\r\n';
                    break;
                case standard_m_application:
                    scan_forward_to_null('m=application ', 'standard_m_application', undefined, true);
                    work += ' UDP/DTLS/SCTP webrtc-datachannel\r\n';
                    break;
                case a_ice_options_trickle:
                    work += 'a=ice-options:trickle\r\n';
                    break;
                case standard_origin:
                    scan_forward_to_null('o=- ', 'standard_moz_origin_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                    scan_forward_four_bytes(' IN IP4 ', unpack_bytized_ipv4, true);
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
                    scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_four_bytes(' ', unpack_i32, true);
                    scan_forward_to_null(' udp ', 'standard_guid_candidate_3', undefined, true);
                    scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_tcp_candidate:
                    scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_one_byte(' ', unpack_i8, true);
                    scan_forward_four_bytes(' tcp ', unpack_i32, true);
                    scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_tcp6_candidate:
                    scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_one_byte(' ', unpack_i8, true);
                    scan_forward_four_bytes(' tcp ', unpack_i32, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                    break;
                case standard_agen_udp4_candidate:
                    scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_one_byte(' ', unpack_i8, true);
                    scan_forward_four_bytes(' udp ', unpack_i32, true);
                    scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_5', undefined, true);
                    scan_forward_four_bytes(' typ srflx raddr ', unpack_bytized_ipv4, true);
                    scan_forward_to_null(' rport ', 'standard_guid_candidate_7', undefined, true);
                    scan_forward_to_null(' generation 0 network-id ', 'standard_guid_candidate_8', undefined, false);
                    break;
                case standard_agen_udp6_host_candidate:
                    scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_one_byte(' ', unpack_i8, true);
                    scan_forward_four_bytes(' udp ', unpack_i32, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                    scan_forward_to_null(' ', 'standard_guid_candidate_5', undefined, true);
                    scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_6', undefined, false);
                    break;
                case standard_remote_candidate:
                    scan_forward_to_null(`a=candidate:`, 'standard_remote_candidate_1', undefined, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_2', undefined, true);
                    scan_forward_to_null(' udp ', 'standard_remote_candidate_3', undefined, true);
                    scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_5', undefined, true);
                    scan_forward_four_bytes(' typ srflx raddr ', unpack_bytized_ipv4, true);
                    scan_forward_to_null(' rport ', 'standard_remote_candidate_7', undefined, true);
                    scan_forward_to_null(' generation ', 'standard_remote_candidate_8', undefined, true);
                    work += ' network-cost 999\r\n';
                    break;
                case standard_remote_candidate_ffus:
                    scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                    scan_forward_one_byte(' ', unpack_i8, true);
                    scan_forward_four_bytes(' UDP ', unpack_i32, true);
                    scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
                    scan_forward_to_null(' ', 'standard_remote_candidate_5', undefined, true);
                    scan_forward_four_bytes(' typ srflx raddr ', unpack_bytized_ipv4, true);
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
    async function click_an_anchor(e, val, label) {
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
        const tit = document.querySelector('#item'), ex = document.querySelector('#example'), exp = document.querySelector('#pack'), exc = document.querySelector('#compress'), exu = document.querySelector('#unpack');
        if ((tit !== null) && (ex !== null) && (exp !== null) && (exu !== null) && (exc !== null)) {
            tit.innerHTML = label;
            ex.innerHTML = val;
            exp.innerHTML = pack(val)
                .split('')
                .map(ch => ch.charCodeAt(0) < 33 ? `<span class="ch">[${ch.charCodeAt(0)}]</span>` : ch)
                .join('&#x200b;');
            const comp = new Uint8ClampedArray(await new Blob([compress(val)]).arrayBuffer()), ecomp = new Array(comp.length);
            for (let i = 0; i < comp.length; ++i) {
                ecomp[i] = String.fromCodePoint(Number(comp[i]));
            }
            exc.innerHTML = ecomp.join('&#x200B;');
            exu.innerHTML = unpack(pack(val));
        }
        const parsed = parse(val);
        byId('parse').innerHTML = parse_table(parsed);
    }
    function bootstrap() {
        const header = document.createElement('tr');
        header.innerHTML = '<th>Old</th><th>New</th><th>Pct</th><th>URL</th><th>CPct</th><th>Rem</th><th>ID</th>';
        byId('listtgt')
            .appendChild(header);
        const oe = Object.entries(full_set);
        oe.forEach(([k, v], i) => {
            const p = parse(v.beacon), q = pack(v.beacon), cm = compress(v.beacon), c = p.value.filter(val => val.kind === 'unknown_line').length;
            const a = el('a', {
                inner: `${k}`,
                href: '#',
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
            rtd.innerHTML = `${c.toLocaleString()}`;
            tr.appendChild(rtd);
            atd.appendChild(a);
            tr.appendChild(atd);
            byId('listtgt')
                .appendChild(tr);
        });
    }

    exports.bootstrap = bootstrap;
    exports.pack = pack;
    exports.unpack = unpack;

    return exports;

})({});
