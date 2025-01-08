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
	    var peg$FAILED = {}, peg$startRuleFunctions = { RawDocument: peg$parseRawDocument, IP6N: peg$parseIP6N }, peg$startRuleFunction = peg$parseRawDocument, peg$c0 = /^[0-9]/, peg$c1 = peg$classExpectation([["0", "9"]], false, false), peg$c2 = function (d) { return BigInt(d.join(''), 10); }, peg$c3 = /^[0-9a-fA-F]/, peg$c4 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false), peg$c5 = function (a, b) { return `${a}${b}`; }, peg$c6 = function (a, b, c, d) { return [a, b, c, d].join(''); }, peg$c7 = function (a, b, c, d, e, f, g, h) { return [a, b, c, d, e, f, g, h].join(''); }, peg$c8 = function (a, b, c, d, e, f, g, h, i, j, k, l) { return [a, b, c, d, e, f, g, h, i, j, k, l].join(''); }, peg$c9 = ":", peg$c10 = peg$literalExpectation(":", false), peg$c11 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F].join(''); }, peg$c12 = /^[0-9a-zA-Z\/+]/, peg$c13 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"], "/", "+"], false, false), peg$c14 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v].join(''); }, peg$c15 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x].join(''); }, peg$c16 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af].join(''); }, peg$c17 = "-", peg$c18 = peg$literalExpectation("-", false), peg$c19 = function (a, b, c, d, e) { return [a, b, c, d, e].join(''); }, peg$c20 = ".", peg$c21 = peg$literalExpectation(".", false), peg$c22 = function (a, b, c, d) { return ((((((a * 256n) + b) * 256n) + c) * 256n) + d).toString(); }, peg$c23 = function (Addr) { return Addr.map(n => n.toString(16).toUpperCase().padStart(4, '0')).join(':'); }, peg$c24 = function (A, B, C, D, E, F, G, H) { return [Number(A), Number(B), Number(C), Number(D), Number(E), Number(F), Number(G), Number(H)]; }, peg$c25 = /^[0-9a-zA-Z]/, peg$c26 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"]], false, false), peg$c27 = function (a, b, c, d) { return parseInt(`${a}${b ?? ''}${c ?? ''}${d ?? ''}`, 16); }, peg$c28 = "::", peg$c29 = peg$literalExpectation("::", false), peg$c30 = function (A, B, C, D, E, F, G, H) { return unelide([], [A, B, C, D, E, F, G, H]); }, peg$c31 = function (A, B, C, D, E, F, G, H) { return unelide([A], [B, C, D, E, F, G, H]); }, peg$c32 = function (A, B, C, D, E, F, G, H) { return unelide([A, B], [C, D, E, F, G, H]); }, peg$c33 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C], [D, E, F, G, H]); }, peg$c34 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D], [E, F, G, H]); }, peg$c35 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E], [F, G, H]); }, peg$c36 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F], [G, H]); }, peg$c37 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F, G], [H]); }, peg$c38 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F, G, H], []); }, peg$c39 = /^[ \r\n\t\x0B]/, peg$c40 = peg$classExpectation([" ", "\r", "\n", "\t", "\x0B"], false, false), peg$c41 = "{", peg$c42 = peg$literalExpectation("{", false), peg$c43 = "\"type\"", peg$c44 = peg$literalExpectation("\"type\"", false), peg$c45 = "\"offer\"", peg$c46 = peg$literalExpectation("\"offer\"", false), peg$c47 = ",", peg$c48 = peg$literalExpectation(",", false), peg$c49 = "\"sdp\"", peg$c50 = peg$literalExpectation("\"sdp\"", false), peg$c51 = "\"", peg$c52 = peg$literalExpectation("\"", false), peg$c53 = "}", peg$c54 = peg$literalExpectation("}", false), peg$c55 = function (s) { return ast('offer', s); }, peg$c56 = "\"answer\"", peg$c57 = peg$literalExpectation("\"answer\"", false), peg$c58 = function (s) { return ast('answer', s); }, peg$c59 = "v=0", peg$c60 = peg$literalExpectation("v=0", false), peg$c61 = function (us) { return ast('version_zero_line', undefined); }, peg$c62 = "v=", peg$c63 = peg$literalExpectation("v=", false), peg$c64 = function (us) { return ast('version_line', us); }, peg$c65 = "a=sendrecv", peg$c66 = peg$literalExpectation("a=sendrecv", false), peg$c67 = function (us) { return ast('a_send_recv', us); }, peg$c68 = "b=AS:30", peg$c69 = peg$literalExpectation("b=AS:30", false), peg$c70 = function () { return ast('b_as_30'); }, peg$c71 = "a=end-of-candidates", peg$c72 = peg$literalExpectation("a=end-of-candidates", false), peg$c73 = function (us) { return ast('a_end_of_candidates', us); }, peg$c74 = "a=msid-semantic:WMS", peg$c75 = peg$literalExpectation("a=msid-semantic:WMS", false), peg$c76 = function () { return ast('a_msid_semantic_ns'); }, peg$c77 = "a=msid-semantic:WMS *", peg$c78 = peg$literalExpectation("a=msid-semantic:WMS *", false), peg$c79 = function () { return ast('a_msid_semantic_star_ns'); }, peg$c80 = "a=msid-semantic: WMS", peg$c81 = peg$literalExpectation("a=msid-semantic: WMS", false), peg$c82 = function () { return ast('a_msid_semantic_ws'); }, peg$c83 = "a=extmap-allow-mixed", peg$c84 = peg$literalExpectation("a=extmap-allow-mixed", false), peg$c85 = function () { return ast('a_extmap_allow_mixed'); }, peg$c86 = "a=setup:actpass", peg$c87 = peg$literalExpectation("a=setup:actpass", false), peg$c88 = function () { return ast('a_setup_actpass'); }, peg$c89 = "a=setup:active", peg$c90 = peg$literalExpectation("a=setup:active", false), peg$c91 = function () { return ast('a_setup_active'); }, peg$c92 = "a=mid:0", peg$c93 = peg$literalExpectation("a=mid:0", false), peg$c94 = function () { return ast('a_mid_zero'); }, peg$c95 = "s=-", peg$c96 = peg$literalExpectation("s=-", false), peg$c97 = function () { return ast('s_dash'); }, peg$c98 = function (maj, min, patch) { return ast('moz_v_num', [maj, min, patch]); }, peg$c99 = function (maj, min) { return ast('moz_v_num', [maj, min, undefined]); }, peg$c100 = "o=- ", peg$c101 = peg$literalExpectation("o=- ", false), peg$c102 = " ", peg$c103 = peg$literalExpectation(" ", false), peg$c104 = " IN IP4 ", peg$c105 = peg$literalExpectation(" IN IP4 ", false), peg$c106 = function (msess, d, i) { return ast('standard_origin', [msess, d, i], [i]); }, peg$c107 = "o=mozilla...THIS_IS_SDPARTA-", peg$c108 = peg$literalExpectation("o=mozilla...THIS_IS_SDPARTA-", false), peg$c109 = " 0 IN IP4 0.0.0.0", peg$c110 = peg$literalExpectation(" 0 IN IP4 0.0.0.0", false), peg$c111 = function (mv, msess) { return ast('standard_moz_origin', [mv, msess]); }, peg$c112 = "t=0 0", peg$c113 = peg$literalExpectation("t=0 0", false), peg$c114 = function () { return ast('t_zero_zero'); }, peg$c115 = "a=ice-options:trickle", peg$c116 = peg$literalExpectation("a=ice-options:trickle", false), peg$c117 = function () { return ast('a_ice_options_trickle'); }, peg$c118 = "a=sctp-port:5000", peg$c119 = peg$literalExpectation("a=sctp-port:5000", false), peg$c120 = function () { return ast('a_standard_sctp_port'); }, peg$c121 = "a=sctp-port:", peg$c122 = peg$literalExpectation("a=sctp-port:", false), peg$c123 = function (data) { return ast('a_custom_sctp_port', data); }, peg$c124 = "a=max-message-size:262144", peg$c125 = peg$literalExpectation("a=max-message-size:262144", false), peg$c126 = function () { return ast('a_standard_max_message_size'); }, peg$c127 = "a=max-message-size:", peg$c128 = peg$literalExpectation("a=max-message-size:", false), peg$c129 = function (data) { return ast('a_custom_max_message_size', data); }, peg$c130 = "a=candidate:", peg$c131 = peg$literalExpectation("a=candidate:", false), peg$c132 = " udp ", peg$c133 = peg$literalExpectation(" udp ", false), peg$c134 = " typ host generation 0 network-id ", peg$c135 = peg$literalExpectation(" typ host generation 0 network-id ", false), peg$c136 = function (d1, d2, d3, i, p, d4) { return ast('standard_local_candidate', [d1, d2, d3, i, p, d4], [i]); }, peg$c137 = ".local ", peg$c138 = peg$literalExpectation(".local ", false), peg$c139 = " typ host generation 0 network-cost 999", peg$c140 = peg$literalExpectation(" typ host generation 0 network-cost 999", false), peg$c141 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate', [d1, d2, d3, g, d4]); }, peg$c142 = " UDP ", peg$c143 = peg$literalExpectation(" UDP ", false), peg$c144 = " typ host", peg$c145 = peg$literalExpectation(" typ host", false), peg$c146 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate_ffus', [d1, d2, d3, g, d4]); }, peg$c147 = " typ srflx raddr ", peg$c148 = peg$literalExpectation(" typ srflx raddr ", false), peg$c149 = " rport ", peg$c150 = peg$literalExpectation(" rport ", false), peg$c151 = " generation ", peg$c152 = peg$literalExpectation(" generation ", false), peg$c153 = " network-cost 999", peg$c154 = peg$literalExpectation(" network-cost 999", false), peg$c155 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_remote_candidate', [d1, d2, d3, i1, d4, i2, d5, d6], [i1, i2]); }, peg$c156 = function (d1, d2, d3, i1, d4, i2, d5) { return ast('standard_remote_candidate_ffus', [d1, d2, d3, i1, d4, i2, d5], [i1, i2]); }, peg$c157 = " tcp ", peg$c158 = peg$literalExpectation(" tcp ", false), peg$c159 = " typ host tcptype active generation 0 network-id ", peg$c160 = peg$literalExpectation(" typ host tcptype active generation 0 network-id ", false), peg$c161 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp_candidate', [d1, d2, d3, i1, d4, d5], [i1]); }, peg$c162 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp6_candidate', [d1, d2, d3, i1, d4, d5], undefined, [i1]); }, peg$c163 = " generation 0 network-id ", peg$c164 = peg$literalExpectation(" generation 0 network-id ", false), peg$c165 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_agen_udp4_candidate', [d1, d2, d3, i1, d4, i2, d5, d6], [i1]); }, peg$c166 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_udp6_host_candidate', [d1, d2, d3, i1, d4, d5], undefined, [i1]); }, peg$c167 = "a=ice-pwd:", peg$c168 = peg$literalExpectation("a=ice-pwd:", false), peg$c169 = function (data) { return ast('a_ice_pwd', data); }, peg$c170 = function (data) { return ast('a_ice_pwd_l', data); }, peg$c171 = function (data) { return ast('a_ice_pwd_v', data); }, peg$c172 = "a=ice-ufrag:", peg$c173 = peg$literalExpectation("a=ice-ufrag:", false), peg$c174 = function (data) { return ast('a_ice_ufrag_4', data); }, peg$c175 = function (data) { return ast('a_ice_ufrag_8', data); }, peg$c176 = "a=fingerprint:sha-256 ", peg$c177 = peg$literalExpectation("a=fingerprint:sha-256 ", false), peg$c178 = function (data) { return ast('a_fingerprint_sha1_256', data); }, peg$c179 = "a=group:BUNDLE 0", peg$c180 = peg$literalExpectation("a=group:BUNDLE 0", false), peg$c181 = function () { return ast('a_group_bundle_0'); }, peg$c182 = "c=IN IP4 ", peg$c183 = peg$literalExpectation("c=IN IP4 ", false), peg$c184 = function (data) { return ast('c_claim_ip4', data, [data]); }, peg$c185 = "m=application ", peg$c186 = peg$literalExpectation("m=application ", false), peg$c187 = " UDP/DTLS/SCTP webrtc-datachannel", peg$c188 = peg$literalExpectation(" UDP/DTLS/SCTP webrtc-datachannel", false), peg$c189 = function (data) { return ast('standard_m_application', data); }, peg$c190 = function (us) { return ast('unknown_line', us); }, peg$c191 = /^[^'\r\n']/, peg$c192 = peg$classExpectation(["'", "\r", "\n", "'"], true, false), peg$c193 = "\r\n", peg$c194 = peg$literalExpectation("\r\n", false), peg$c195 = function (rl) { return rl.join(''); }, peg$c196 = peg$anyExpectation(), peg$c197 = function (uts) { return ast('unknown_terminate', uts.join('')); }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$result;
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
	                                                if (input.substr(peg$currPos, 17) === peg$c147) {
	                                                    s11 = peg$c147;
	                                                    peg$currPos += 17;
	                                                }
	                                                else {
	                                                    s11 = peg$FAILED;
	                                                    {
	                                                        peg$fail(peg$c148);
	                                                    }
	                                                }
	                                                if (s11 !== peg$FAILED) {
	                                                    s12 = peg$parseIP4();
	                                                    if (s12 !== peg$FAILED) {
	                                                        if (input.substr(peg$currPos, 7) === peg$c149) {
	                                                            s13 = peg$c149;
	                                                            peg$currPos += 7;
	                                                        }
	                                                        else {
	                                                            s13 = peg$FAILED;
	                                                            {
	                                                                peg$fail(peg$c150);
	                                                            }
	                                                        }
	                                                        if (s13 !== peg$FAILED) {
	                                                            s14 = peg$parseDecimal();
	                                                            if (s14 !== peg$FAILED) {
	                                                                if (input.substr(peg$currPos, 12) === peg$c151) {
	                                                                    s15 = peg$c151;
	                                                                    peg$currPos += 12;
	                                                                }
	                                                                else {
	                                                                    s15 = peg$FAILED;
	                                                                    {
	                                                                        peg$fail(peg$c152);
	                                                                    }
	                                                                }
	                                                                if (s15 !== peg$FAILED) {
	                                                                    s16 = peg$parseDecimal();
	                                                                    if (s16 !== peg$FAILED) {
	                                                                        if (input.substr(peg$currPos, 17) === peg$c153) {
	                                                                            s17 = peg$c153;
	                                                                            peg$currPos += 17;
	                                                                        }
	                                                                        else {
	                                                                            s17 = peg$FAILED;
	                                                                            {
	                                                                                peg$fail(peg$c154);
	                                                                            }
	                                                                        }
	                                                                        if (s17 !== peg$FAILED) {
	                                                                            s18 = peg$parseCapAtSeparator();
	                                                                            if (s18 !== peg$FAILED) {
	                                                                                peg$savedPos = s0;
	                                                                                s1 = peg$c155(s2, s4, s6, s8, s10, s12, s14, s16);
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
	                                                if (input.substr(peg$currPos, 17) === peg$c147) {
	                                                    s11 = peg$c147;
	                                                    peg$currPos += 17;
	                                                }
	                                                else {
	                                                    s11 = peg$FAILED;
	                                                    {
	                                                        peg$fail(peg$c148);
	                                                    }
	                                                }
	                                                if (s11 !== peg$FAILED) {
	                                                    s12 = peg$parseIP4();
	                                                    if (s12 !== peg$FAILED) {
	                                                        if (input.substr(peg$currPos, 7) === peg$c149) {
	                                                            s13 = peg$c149;
	                                                            peg$currPos += 7;
	                                                        }
	                                                        else {
	                                                            s13 = peg$FAILED;
	                                                            {
	                                                                peg$fail(peg$c150);
	                                                            }
	                                                        }
	                                                        if (s13 !== peg$FAILED) {
	                                                            s14 = peg$parseDecimal();
	                                                            if (s14 !== peg$FAILED) {
	                                                                s15 = peg$parseCapAtSeparator();
	                                                                if (s15 !== peg$FAILED) {
	                                                                    peg$savedPos = s0;
	                                                                    s1 = peg$c156(s2, s4, s6, s8, s10, s12, s14);
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
	                        if (input.substr(peg$currPos, 5) === peg$c157) {
	                            s5 = peg$c157;
	                            peg$currPos += 5;
	                        }
	                        else {
	                            s5 = peg$FAILED;
	                            {
	                                peg$fail(peg$c158);
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
	                                                if (input.substr(peg$currPos, 49) === peg$c159) {
	                                                    s11 = peg$c159;
	                                                    peg$currPos += 49;
	                                                }
	                                                else {
	                                                    s11 = peg$FAILED;
	                                                    {
	                                                        peg$fail(peg$c160);
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
	                        if (input.substr(peg$currPos, 5) === peg$c157) {
	                            s5 = peg$c157;
	                            peg$currPos += 5;
	                        }
	                        else {
	                            s5 = peg$FAILED;
	                            {
	                                peg$fail(peg$c158);
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
	                                                if (input.substr(peg$currPos, 49) === peg$c159) {
	                                                    s11 = peg$c159;
	                                                    peg$currPos += 49;
	                                                }
	                                                else {
	                                                    s11 = peg$FAILED;
	                                                    {
	                                                        peg$fail(peg$c160);
	                                                    }
	                                                }
	                                                if (s11 !== peg$FAILED) {
	                                                    s12 = peg$parseDecimal();
	                                                    if (s12 !== peg$FAILED) {
	                                                        s13 = peg$parseCapAtSeparator();
	                                                        if (s13 !== peg$FAILED) {
	                                                            peg$savedPos = s0;
	                                                            s1 = peg$c162(s2, s4, s6, s8, s10, s12);
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
	                                                if (input.substr(peg$currPos, 17) === peg$c147) {
	                                                    s11 = peg$c147;
	                                                    peg$currPos += 17;
	                                                }
	                                                else {
	                                                    s11 = peg$FAILED;
	                                                    {
	                                                        peg$fail(peg$c148);
	                                                    }
	                                                }
	                                                if (s11 !== peg$FAILED) {
	                                                    s12 = peg$parseIP4();
	                                                    if (s12 !== peg$FAILED) {
	                                                        if (input.substr(peg$currPos, 7) === peg$c149) {
	                                                            s13 = peg$c149;
	                                                            peg$currPos += 7;
	                                                        }
	                                                        else {
	                                                            s13 = peg$FAILED;
	                                                            {
	                                                                peg$fail(peg$c150);
	                                                            }
	                                                        }
	                                                        if (s13 !== peg$FAILED) {
	                                                            s14 = peg$parseDecimal();
	                                                            if (s14 !== peg$FAILED) {
	                                                                if (input.substr(peg$currPos, 25) === peg$c163) {
	                                                                    s15 = peg$c163;
	                                                                    peg$currPos += 25;
	                                                                }
	                                                                else {
	                                                                    s15 = peg$FAILED;
	                                                                    {
	                                                                        peg$fail(peg$c164);
	                                                                    }
	                                                                }
	                                                                if (s15 !== peg$FAILED) {
	                                                                    s16 = peg$parseDecimal();
	                                                                    if (s16 !== peg$FAILED) {
	                                                                        s17 = peg$parseCapAtSeparator();
	                                                                        if (s17 !== peg$FAILED) {
	                                                                            peg$savedPos = s0;
	                                                                            s1 = peg$c165(s2, s4, s6, s8, s10, s12, s14, s16);
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
	                                                            s1 = peg$c166(s2, s4, s6, s8, s10, s12);
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
	        if (input.substr(peg$currPos, 10) === peg$c167) {
	            s1 = peg$c167;
	            peg$currPos += 10;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c168);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseIceChar22();
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
	    function peg$parseAIcePwdL() {
	        var s0, s1, s2, s3;
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 10) === peg$c167) {
	            s1 = peg$c167;
	            peg$currPos += 10;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c168);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseIceChar24();
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
	    function peg$parseAIcePwdV() {
	        var s0, s1, s2, s3;
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 10) === peg$c167) {
	            s1 = peg$c167;
	            peg$currPos += 10;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c168);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseIceChar32();
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
	    function peg$parseAIceUFrag4() {
	        var s0, s1, s2, s3;
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 12) === peg$c172) {
	            s1 = peg$c172;
	            peg$currPos += 12;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c173);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseIceChar4();
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
	    function peg$parseAIceUFrag8() {
	        var s0, s1, s2, s3;
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 12) === peg$c172) {
	            s1 = peg$c172;
	            peg$currPos += 12;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c173);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseIceChar8();
	            if (s2 !== peg$FAILED) {
	                s3 = peg$parseCapAtSeparator();
	                if (s3 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c175(s2);
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
	        if (input.substr(peg$currPos, 22) === peg$c176) {
	            s1 = peg$c176;
	            peg$currPos += 22;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c177);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseCHex64();
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
	    function peg$parseAGroupBundle0() {
	        var s0, s1, s2;
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 16) === peg$c179) {
	            s1 = peg$c179;
	            peg$currPos += 16;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c180);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseCapAtSeparator();
	            if (s2 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c181();
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
	        if (input.substr(peg$currPos, 9) === peg$c182) {
	            s1 = peg$c182;
	            peg$currPos += 9;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c183);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseIP4();
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
	    function peg$parseStandardMApplication() {
	        var s0, s1, s2, s3, s4;
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 14) === peg$c185) {
	            s1 = peg$c185;
	            peg$currPos += 14;
	        }
	        else {
	            s1 = peg$FAILED;
	            {
	                peg$fail(peg$c186);
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            s2 = peg$parseDecimal();
	            if (s2 !== peg$FAILED) {
	                if (input.substr(peg$currPos, 33) === peg$c187) {
	                    s3 = peg$c187;
	                    peg$currPos += 33;
	                }
	                else {
	                    s3 = peg$FAILED;
	                    {
	                        peg$fail(peg$c188);
	                    }
	                }
	                if (s3 !== peg$FAILED) {
	                    s4 = peg$parseCapAtSeparator();
	                    if (s4 !== peg$FAILED) {
	                        peg$savedPos = s0;
	                        s1 = peg$c189(s2);
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
	            s1 = peg$c190(s1);
	        }
	        s0 = s1;
	        return s0;
	    }
	    function peg$parseUntilSeparator() {
	        var s0, s1, s2;
	        s0 = peg$currPos;
	        s1 = [];
	        if (peg$c191.test(input.charAt(peg$currPos))) {
	            s2 = input.charAt(peg$currPos);
	            peg$currPos++;
	        }
	        else {
	            s2 = peg$FAILED;
	            {
	                peg$fail(peg$c192);
	            }
	        }
	        while (s2 !== peg$FAILED) {
	            s1.push(s2);
	            if (peg$c191.test(input.charAt(peg$currPos))) {
	                s2 = input.charAt(peg$currPos);
	                peg$currPos++;
	            }
	            else {
	                s2 = peg$FAILED;
	                {
	                    peg$fail(peg$c192);
	                }
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            if (input.substr(peg$currPos, 2) === peg$c193) {
	                s2 = peg$c193;
	                peg$currPos += 2;
	            }
	            else {
	                s2 = peg$FAILED;
	                {
	                    peg$fail(peg$c194);
	                }
	            }
	            if (s2 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c195(s1);
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
	        if (input.substr(peg$currPos, 2) === peg$c193) {
	            s0 = peg$c193;
	            peg$currPos += 2;
	        }
	        else {
	            s0 = peg$FAILED;
	            {
	                peg$fail(peg$c194);
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
	                peg$fail(peg$c196);
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
	                    peg$fail(peg$c196);
	                }
	            }
	        }
	        if (s1 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c197(s1);
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
        return `${standard_moz_origin}${mvs}${smo.sess}${c_terminal}`;
    },
    'standard_guid_local_candidate': (v, _addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        if (kind !== 'standard_guid_local_candidate') {
            throw 'impossible';
        }
        return `${standard_guid_local_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i}${c_terminal}${d4}${c_terminal}`;
    },
    'standard_guid_local_candidate_ffus': (v, _addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        if (kind !== 'standard_guid_local_candidate_ffus') {
            throw 'impossible';
        }
        return `${standard_guid_local_candidate_ffus}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i}${c_terminal}${d4}${c_terminal}`;
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
        return `${standard_agen_udp4_candidate}${pack_i32(d1)}${pack_i8(d2)}${c_terminal}${pack_i32(d3)}${pack_i8(found1)}${d4}${c_terminal}${pack_i8(found2)}${d5}${c_terminal}${d6}${c_terminal}`;
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
        return `${standard_agen_udp6_host_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${pack_i16(p)}${d5}${c_terminal}`;
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
                scan_forward_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_5', undefined, true);
                scan_forward_exactly_one_byte(' typ srflx raddr ', unpack_indexed_ipv4_l, true);
                scan_forward_to_null(' rport ', 'standard_guid_candidate_7', undefined, true);
                scan_forward_to_null(' generation 0 network-id ', 'standard_guid_candidate_8', undefined, false);
                break;
            case standard_agen_udp6_host_candidate:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv6_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_6', undefined, false);
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

function compress(original) {
    return lzStringExports.compressToEncodedURIComponent(pack(original));
}
function decompress(compressed) {
    return unpack(lzStringExports.decompressFromEncodedURIComponent(compressed));
}

export { compress, decompress, pack, parse, unpack };
