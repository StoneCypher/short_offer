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
function peg$parse$1(input, options) {
    options = options !== void 0 ? options : {};
    var peg$FAILED = {}, peg$startRuleFunctions = { RawDocument: peg$parseRawDocument }, peg$startRuleFunction = peg$parseRawDocument, peg$c0 = /^[0-9]/, peg$c1 = peg$classExpectation([["0", "9"]], false, false), peg$c2 = function (d) { return BigInt(d.join(''), 10); }, peg$c3 = /^[0-9a-fA-F]/, peg$c4 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false), peg$c5 = function (a, b) { return `${a}${b}`; }, peg$c6 = function (a, b, c, d) { return [a, b, c, d].join(''); }, peg$c7 = function (a, b, c, d, e, f, g, h) { return [a, b, c, d, e, f, g, h].join(''); }, peg$c8 = function (a, b, c, d, e, f, g, h, i, j, k, l) { return [a, b, c, d, e, f, g, h, i, j, k, l].join(''); }, peg$c9 = ":", peg$c10 = peg$literalExpectation(":", false), peg$c11 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F].join(''); }, peg$c12 = /^[0-9a-zA-Z\/+]/, peg$c13 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"], "/", "+"], false, false), peg$c14 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v].join(''); }, peg$c15 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x].join(''); }, peg$c16 = "-", peg$c17 = peg$literalExpectation("-", false), peg$c18 = function (a, b, c, d, e) { return [a, b, c, d, e].join(''); }, peg$c19 = ".", peg$c20 = peg$literalExpectation(".", false), peg$c21 = function (a, b, c, d) { return ((((((a * 256n) + b) * 256n) + c) * 256n) + d).toString(); }, peg$c22 = "::", peg$c23 = peg$literalExpectation("::", false), peg$c24 = "25", peg$c25 = peg$literalExpectation("25", false), peg$c26 = /^[0-5]/, peg$c27 = peg$classExpectation([["0", "5"]], false, false), peg$c28 = "2", peg$c29 = peg$literalExpectation("2", false), peg$c30 = /^[0-4]/, peg$c31 = peg$classExpectation([["0", "4"]], false, false), peg$c32 = "1", peg$c33 = peg$literalExpectation("1", false), peg$c34 = /^[1-9]/, peg$c35 = peg$classExpectation([["1", "9"]], false, false), peg$c36 = "{\"type\":\"offer\",\"sdp\":\"", peg$c37 = peg$literalExpectation("{\"type\":\"offer\",\"sdp\":\"", false), peg$c38 = "\"}", peg$c39 = peg$literalExpectation("\"}", false), peg$c40 = function (s) { return ast('offer', s); }, peg$c41 = "{\"type\":\"answer\",\"sdp\":\"", peg$c42 = peg$literalExpectation("{\"type\":\"answer\",\"sdp\":\"", false), peg$c43 = function (s) { return ast('answer', s); }, peg$c44 = "v=0", peg$c45 = peg$literalExpectation("v=0", false), peg$c46 = function (us) { return ast('version_zero_line', undefined); }, peg$c47 = "v=", peg$c48 = peg$literalExpectation("v=", false), peg$c49 = function (us) { return ast('version_line', us); }, peg$c50 = "a=sendrecv", peg$c51 = peg$literalExpectation("a=sendrecv", false), peg$c52 = function (us) { return ast('a_send_recv', us); }, peg$c53 = "a=end-of-candidates", peg$c54 = peg$literalExpectation("a=end-of-candidates", false), peg$c55 = function (us) { return ast('a_end_of_candidates', us); }, peg$c56 = "a=msid-semantic:WMS", peg$c57 = peg$literalExpectation("a=msid-semantic:WMS", false), peg$c58 = function (us) { return ast('a_msid_semantic_ns', undefined); }, peg$c59 = "a=msid-semantic: WMS", peg$c60 = peg$literalExpectation("a=msid-semantic: WMS", false), peg$c61 = function (us) { return ast('a_msid_semantic_ws', undefined); }, peg$c62 = "a=extmap-allow-mixed", peg$c63 = peg$literalExpectation("a=extmap-allow-mixed", false), peg$c64 = function (us) { return ast('a_extmap_allow_mixed', undefined); }, peg$c65 = "a=setup:actpass", peg$c66 = peg$literalExpectation("a=setup:actpass", false), peg$c67 = function (us) { return ast('a_setup_actpass'); }, peg$c68 = "a=setup:active", peg$c69 = peg$literalExpectation("a=setup:active", false), peg$c70 = function (us) { return ast('a_setup_active'); }, peg$c71 = "a=mid:0", peg$c72 = peg$literalExpectation("a=mid:0", false), peg$c73 = function (us) { return ast('a_mid_zero'); }, peg$c74 = "s=-", peg$c75 = peg$literalExpectation("s=-", false), peg$c76 = function (us) { return ast('s_dash'); }, peg$c77 = function (maj, min, patch) { return ast('moz_v_num', [maj, min, patch]); }, peg$c78 = function (maj, min) { return ast('moz_v_num', [maj, min, undefined]); }, peg$c79 = "o=- ", peg$c80 = peg$literalExpectation("o=- ", false), peg$c81 = " ", peg$c82 = peg$literalExpectation(" ", false), peg$c83 = " IN IP4 ", peg$c84 = peg$literalExpectation(" IN IP4 ", false), peg$c85 = function (msess, d, i, us) { return ast('standard_origin', [msess, d, i]); }, peg$c86 = "o=mozilla...THIS_IS_SDPARTA-", peg$c87 = peg$literalExpectation("o=mozilla...THIS_IS_SDPARTA-", false), peg$c88 = " 0 IN IP4 0.0.0.0", peg$c89 = peg$literalExpectation(" 0 IN IP4 0.0.0.0", false), peg$c90 = function (mv, msess, us) { return ast('standard_moz_origin', [mv, msess]); }, peg$c91 = "t=0 0", peg$c92 = peg$literalExpectation("t=0 0", false), peg$c93 = function (us) { return ast('t_zero_zero'); }, peg$c94 = "a=sctp-port:5000", peg$c95 = peg$literalExpectation("a=sctp-port:5000", false), peg$c96 = function (us) { return ast('a_standard_sctp_port'); }, peg$c97 = "a=sctp-port:", peg$c98 = peg$literalExpectation("a=sctp-port:", false), peg$c99 = function (data, us) { return ast('a_custom_sctp_port', data); }, peg$c100 = "a=max-message-size:262144", peg$c101 = peg$literalExpectation("a=max-message-size:262144", false), peg$c102 = function (us) { return ast('a_standard_max_message_size'); }, peg$c103 = "a=max-message-size:", peg$c104 = peg$literalExpectation("a=max-message-size:", false), peg$c105 = function (data, us) { return ast('a_custom_max_message_size', data); }, peg$c106 = "a=candidate:", peg$c107 = peg$literalExpectation("a=candidate:", false), peg$c108 = " udp ", peg$c109 = peg$literalExpectation(" udp ", false), peg$c110 = " typ host generation 0 network-id ", peg$c111 = peg$literalExpectation(" typ host generation 0 network-id ", false), peg$c112 = function (d1, d2, d3, i, p, d4, us) { return ast('standard_guid_candidate', [d1, d2, d3, i, p, d4]); }, peg$c113 = ".local ", peg$c114 = peg$literalExpectation(".local ", false), peg$c115 = " typ host generation 0 network-cost 999", peg$c116 = peg$literalExpectation(" typ host generation 0 network-cost 999", false), peg$c117 = function (d1, d2, d3, g, d4, us) { return ast('standard_local_candidate', [d1, d2, d3, g, d4]); }, peg$c118 = " typ srflx raddr ", peg$c119 = peg$literalExpectation(" typ srflx raddr ", false), peg$c120 = " rport ", peg$c121 = peg$literalExpectation(" rport ", false), peg$c122 = " generation ", peg$c123 = peg$literalExpectation(" generation ", false), peg$c124 = " network-cost 999", peg$c125 = peg$literalExpectation(" network-cost 999", false), peg$c126 = function (d1, d2, d3, i1, d4, i2, d5, d6, us) { return ast('standard_remote_candidate', [d1, d2, d3, i1, d4, i2, d5, d6]); }, peg$c127 = " tcp ", peg$c128 = peg$literalExpectation(" tcp ", false), peg$c129 = " typ host tcptype active generation 0 network-id ", peg$c130 = peg$literalExpectation(" typ host tcptype active generation 0 network-id ", false), peg$c131 = function (d1, d2, d3, i1, d4, d5, us) { return ast('standard_agen_tcp_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c132 = function (d1, d2, d3, i1, d4, d5, us) { return ast('standard_agen_tcp6_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c133 = "a=ice-pwd:", peg$c134 = peg$literalExpectation("a=ice-pwd:", false), peg$c135 = function (data, us) { return ast('a_ice_pwd', data); }, peg$c136 = function (data, us) { return ast('a_ice_pwd_l', data); }, peg$c137 = "a=ice-ufrag:", peg$c138 = peg$literalExpectation("a=ice-ufrag:", false), peg$c139 = function (data, us) { return ast('a_ice_ufrag', data); }, peg$c140 = "a=fingerprint:sha-256 ", peg$c141 = peg$literalExpectation("a=fingerprint:sha-256 ", false), peg$c142 = function (data, us) { return ast('a_fingerprint_sha1_256', data); }, peg$c143 = "a=group:BUNDLE 0", peg$c144 = peg$literalExpectation("a=group:BUNDLE 0", false), peg$c145 = function (us) { return ast('a_group_bundle_0'); }, peg$c146 = function (us) { return ast('unknown_line', us); }, peg$c147 = /^[^'\r\n']/, peg$c148 = peg$classExpectation(["'", "\r", "\n", "'"], true, false), peg$c149 = "\r\n", peg$c150 = peg$literalExpectation("\r\n", false), peg$c151 = function (rl) { return rl.join(''); }, peg$c152 = peg$anyExpectation(), peg$c153 = function (uts) { return ast('unknown_terminate', uts.join('')); }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$result;
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
    function peg$parseGUID() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
        s0 = peg$currPos;
        s1 = peg$parseHex8();
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
                s2 = peg$c16;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c17);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseHex4();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 45) {
                        s4 = peg$c16;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        {
                            peg$fail(peg$c17);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseHex4();
                        if (s5 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 45) {
                                s6 = peg$c16;
                                peg$currPos++;
                            }
                            else {
                                s6 = peg$FAILED;
                                {
                                    peg$fail(peg$c17);
                                }
                            }
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseHex4();
                                if (s7 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 45) {
                                        s8 = peg$c16;
                                        peg$currPos++;
                                    }
                                    else {
                                        s8 = peg$FAILED;
                                        {
                                            peg$fail(peg$c17);
                                        }
                                    }
                                    if (s8 !== peg$FAILED) {
                                        s9 = peg$parseHex12();
                                        if (s9 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c18(s1, s3, s5, s7, s9);
                                            s0 = s1;
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
                s2 = peg$c19;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c20);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseDecimal();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                        s4 = peg$c19;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        {
                            peg$fail(peg$c20);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseDecimal();
                        if (s5 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 46) {
                                s6 = peg$c19;
                                peg$currPos++;
                            }
                            else {
                                s6 = peg$FAILED;
                                {
                                    peg$fail(peg$c20);
                                }
                            }
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseDecimal();
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c21(s1, s3, s5, s7);
                                    s0 = s1;
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
                                                            s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
            if (input.substr(peg$currPos, 2) === peg$c22) {
                s1 = peg$c22;
                peg$currPos += 2;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c23);
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
                                                            s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
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
                if (input.substr(peg$currPos, 2) === peg$c22) {
                    s1 = peg$c22;
                    peg$currPos += 2;
                }
                else {
                    s1 = peg$FAILED;
                    {
                        peg$fail(peg$c23);
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
                                                        s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
                                                        s0 = s1;
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
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
                    if (input.substr(peg$currPos, 2) === peg$c22) {
                        s1 = peg$c22;
                        peg$currPos += 2;
                    }
                    else {
                        s1 = peg$FAILED;
                        {
                            peg$fail(peg$c23);
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
                                                    s1 = [s1, s2, s3, s4, s5, s6, s7, s8];
                                                    s0 = s1;
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
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
                        if (input.substr(peg$currPos, 2) === peg$c22) {
                            s1 = peg$c22;
                            peg$currPos += 2;
                        }
                        else {
                            s1 = peg$FAILED;
                            {
                                peg$fail(peg$c23);
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
                                                s1 = [s1, s2, s3, s4, s5, s6];
                                                s0 = s1;
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
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
                            if (input.substr(peg$currPos, 2) === peg$c22) {
                                s1 = peg$c22;
                                peg$currPos += 2;
                            }
                            else {
                                s1 = peg$FAILED;
                                {
                                    peg$fail(peg$c23);
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
                                            s1 = [s1, s2, s3, s4];
                                            s0 = s1;
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
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
                                if (input.substr(peg$currPos, 2) === peg$c22) {
                                    s1 = peg$c22;
                                    peg$currPos += 2;
                                }
                                else {
                                    s1 = peg$FAILED;
                                    {
                                        peg$fail(peg$c23);
                                    }
                                }
                                if (s1 !== peg$FAILED) {
                                    s2 = peg$parsels32();
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
                                    if (input.substr(peg$currPos, 2) === peg$c22) {
                                        s1 = peg$c22;
                                        peg$currPos += 2;
                                    }
                                    else {
                                        s1 = peg$FAILED;
                                        {
                                            peg$fail(peg$c23);
                                        }
                                    }
                                    if (s1 !== peg$FAILED) {
                                        s2 = peg$parseh16();
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
                                        s1 = peg$parseh16();
                                        if (s1 !== peg$FAILED) {
                                            if (input.substr(peg$currPos, 2) === peg$c22) {
                                                s2 = peg$c22;
                                                peg$currPos += 2;
                                            }
                                            else {
                                                s2 = peg$FAILED;
                                                {
                                                    peg$fail(peg$c23);
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
                                                                                    s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11];
                                                                                    s0 = s1;
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
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
                                                s2 = peg$currPos;
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
                                                        s3 = [s3, s4];
                                                        s2 = s3;
                                                    }
                                                    else {
                                                        peg$currPos = s2;
                                                        s2 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s2;
                                                    s2 = peg$FAILED;
                                                }
                                                if (s2 === peg$FAILED) {
                                                    s2 = null;
                                                }
                                                if (s2 !== peg$FAILED) {
                                                    if (input.substr(peg$currPos, 2) === peg$c22) {
                                                        s3 = peg$c22;
                                                        peg$currPos += 2;
                                                    }
                                                    else {
                                                        s3 = peg$FAILED;
                                                        {
                                                            peg$fail(peg$c23);
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
                                                                                    s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
                                                                                    s0 = s1;
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
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
                                                    s2 = peg$currPos;
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
                                                            s3 = [s3, s4];
                                                            s2 = s3;
                                                        }
                                                        else {
                                                            peg$currPos = s2;
                                                            s2 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s2;
                                                        s2 = peg$FAILED;
                                                    }
                                                    if (s2 === peg$FAILED) {
                                                        s2 = null;
                                                    }
                                                    if (s2 !== peg$FAILED) {
                                                        s3 = peg$currPos;
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
                                                                s4 = [s4, s5];
                                                                s3 = s4;
                                                            }
                                                            else {
                                                                peg$currPos = s3;
                                                                s3 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s3;
                                                            s3 = peg$FAILED;
                                                        }
                                                        if (s3 === peg$FAILED) {
                                                            s3 = null;
                                                        }
                                                        if (s3 !== peg$FAILED) {
                                                            if (input.substr(peg$currPos, 2) === peg$c22) {
                                                                s4 = peg$c22;
                                                                peg$currPos += 2;
                                                            }
                                                            else {
                                                                s4 = peg$FAILED;
                                                                {
                                                                    peg$fail(peg$c23);
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
                                                                                    s1 = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
                                                                                    s0 = s1;
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
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
                                                        s2 = peg$currPos;
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
                                                                s3 = [s3, s4];
                                                                s2 = s3;
                                                            }
                                                            else {
                                                                peg$currPos = s2;
                                                                s2 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s2;
                                                            s2 = peg$FAILED;
                                                        }
                                                        if (s2 === peg$FAILED) {
                                                            s2 = null;
                                                        }
                                                        if (s2 !== peg$FAILED) {
                                                            s3 = peg$currPos;
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
                                                                    s4 = [s4, s5];
                                                                    s3 = s4;
                                                                }
                                                                else {
                                                                    peg$currPos = s3;
                                                                    s3 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s3;
                                                                s3 = peg$FAILED;
                                                            }
                                                            if (s3 === peg$FAILED) {
                                                                s3 = null;
                                                            }
                                                            if (s3 !== peg$FAILED) {
                                                                s4 = peg$currPos;
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
                                                                        s5 = [s5, s6];
                                                                        s4 = s5;
                                                                    }
                                                                    else {
                                                                        peg$currPos = s4;
                                                                        s4 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s4;
                                                                    s4 = peg$FAILED;
                                                                }
                                                                if (s4 === peg$FAILED) {
                                                                    s4 = null;
                                                                }
                                                                if (s4 !== peg$FAILED) {
                                                                    if (input.substr(peg$currPos, 2) === peg$c22) {
                                                                        s5 = peg$c22;
                                                                        peg$currPos += 2;
                                                                    }
                                                                    else {
                                                                        s5 = peg$FAILED;
                                                                        {
                                                                            peg$fail(peg$c23);
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
                                                                                    s1 = [s1, s2, s3, s4, s5, s6, s7, s8];
                                                                                    s0 = s1;
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
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
                                                            s2 = peg$currPos;
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
                                                                    s3 = [s3, s4];
                                                                    s2 = s3;
                                                                }
                                                                else {
                                                                    peg$currPos = s2;
                                                                    s2 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s2;
                                                                s2 = peg$FAILED;
                                                            }
                                                            if (s2 === peg$FAILED) {
                                                                s2 = null;
                                                            }
                                                            if (s2 !== peg$FAILED) {
                                                                s3 = peg$currPos;
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
                                                                        s4 = [s4, s5];
                                                                        s3 = s4;
                                                                    }
                                                                    else {
                                                                        peg$currPos = s3;
                                                                        s3 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s3;
                                                                    s3 = peg$FAILED;
                                                                }
                                                                if (s3 === peg$FAILED) {
                                                                    s3 = null;
                                                                }
                                                                if (s3 !== peg$FAILED) {
                                                                    s4 = peg$currPos;
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
                                                                            s5 = [s5, s6];
                                                                            s4 = s5;
                                                                        }
                                                                        else {
                                                                            peg$currPos = s4;
                                                                            s4 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s4;
                                                                        s4 = peg$FAILED;
                                                                    }
                                                                    if (s4 === peg$FAILED) {
                                                                        s4 = null;
                                                                    }
                                                                    if (s4 !== peg$FAILED) {
                                                                        s5 = peg$currPos;
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
                                                                                s6 = [s6, s7];
                                                                                s5 = s6;
                                                                            }
                                                                            else {
                                                                                peg$currPos = s5;
                                                                                s5 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s5;
                                                                            s5 = peg$FAILED;
                                                                        }
                                                                        if (s5 === peg$FAILED) {
                                                                            s5 = null;
                                                                        }
                                                                        if (s5 !== peg$FAILED) {
                                                                            if (input.substr(peg$currPos, 2) === peg$c22) {
                                                                                s6 = peg$c22;
                                                                                peg$currPos += 2;
                                                                            }
                                                                            else {
                                                                                s6 = peg$FAILED;
                                                                                {
                                                                                    peg$fail(peg$c23);
                                                                                }
                                                                            }
                                                                            if (s6 !== peg$FAILED) {
                                                                                s7 = peg$parsels32();
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
                                                        if (s0 === peg$FAILED) {
                                                            s0 = peg$currPos;
                                                            s1 = peg$parseh16();
                                                            if (s1 !== peg$FAILED) {
                                                                s2 = peg$currPos;
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
                                                                        s3 = [s3, s4];
                                                                        s2 = s3;
                                                                    }
                                                                    else {
                                                                        peg$currPos = s2;
                                                                        s2 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s2;
                                                                    s2 = peg$FAILED;
                                                                }
                                                                if (s2 === peg$FAILED) {
                                                                    s2 = null;
                                                                }
                                                                if (s2 !== peg$FAILED) {
                                                                    s3 = peg$currPos;
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
                                                                            s4 = [s4, s5];
                                                                            s3 = s4;
                                                                        }
                                                                        else {
                                                                            peg$currPos = s3;
                                                                            s3 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s3;
                                                                        s3 = peg$FAILED;
                                                                    }
                                                                    if (s3 === peg$FAILED) {
                                                                        s3 = null;
                                                                    }
                                                                    if (s3 !== peg$FAILED) {
                                                                        s4 = peg$currPos;
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
                                                                                s5 = [s5, s6];
                                                                                s4 = s5;
                                                                            }
                                                                            else {
                                                                                peg$currPos = s4;
                                                                                s4 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s4;
                                                                            s4 = peg$FAILED;
                                                                        }
                                                                        if (s4 === peg$FAILED) {
                                                                            s4 = null;
                                                                        }
                                                                        if (s4 !== peg$FAILED) {
                                                                            s5 = peg$currPos;
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
                                                                                    s6 = [s6, s7];
                                                                                    s5 = s6;
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s5;
                                                                                    s5 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s5;
                                                                                s5 = peg$FAILED;
                                                                            }
                                                                            if (s5 === peg$FAILED) {
                                                                                s5 = null;
                                                                            }
                                                                            if (s5 !== peg$FAILED) {
                                                                                s6 = peg$currPos;
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
                                                                                        s7 = [s7, s8];
                                                                                        s6 = s7;
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s6;
                                                                                        s6 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s6;
                                                                                    s6 = peg$FAILED;
                                                                                }
                                                                                if (s6 === peg$FAILED) {
                                                                                    s6 = null;
                                                                                }
                                                                                if (s6 !== peg$FAILED) {
                                                                                    if (input.substr(peg$currPos, 2) === peg$c22) {
                                                                                        s7 = peg$c22;
                                                                                        peg$currPos += 2;
                                                                                    }
                                                                                    else {
                                                                                        s7 = peg$FAILED;
                                                                                        {
                                                                                            peg$fail(peg$c23);
                                                                                        }
                                                                                    }
                                                                                    if (s7 !== peg$FAILED) {
                                                                                        s8 = peg$parseh16();
                                                                                        if (s8 !== peg$FAILED) {
                                                                                            s1 = [s1, s2, s3, s4, s5, s6, s7, s8];
                                                                                            s0 = s1;
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s0;
                                                                                            s0 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
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
                                                                    s2 = peg$currPos;
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
                                                                            s3 = [s3, s4];
                                                                            s2 = s3;
                                                                        }
                                                                        else {
                                                                            peg$currPos = s2;
                                                                            s2 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s2;
                                                                        s2 = peg$FAILED;
                                                                    }
                                                                    if (s2 === peg$FAILED) {
                                                                        s2 = null;
                                                                    }
                                                                    if (s2 !== peg$FAILED) {
                                                                        s3 = peg$currPos;
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
                                                                                s4 = [s4, s5];
                                                                                s3 = s4;
                                                                            }
                                                                            else {
                                                                                peg$currPos = s3;
                                                                                s3 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s3;
                                                                            s3 = peg$FAILED;
                                                                        }
                                                                        if (s3 === peg$FAILED) {
                                                                            s3 = null;
                                                                        }
                                                                        if (s3 !== peg$FAILED) {
                                                                            s4 = peg$currPos;
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
                                                                                    s5 = [s5, s6];
                                                                                    s4 = s5;
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s4;
                                                                                    s4 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s4;
                                                                                s4 = peg$FAILED;
                                                                            }
                                                                            if (s4 === peg$FAILED) {
                                                                                s4 = null;
                                                                            }
                                                                            if (s4 !== peg$FAILED) {
                                                                                s5 = peg$currPos;
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
                                                                                        s6 = [s6, s7];
                                                                                        s5 = s6;
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s5;
                                                                                        s5 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s5;
                                                                                    s5 = peg$FAILED;
                                                                                }
                                                                                if (s5 === peg$FAILED) {
                                                                                    s5 = null;
                                                                                }
                                                                                if (s5 !== peg$FAILED) {
                                                                                    s6 = peg$currPos;
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
                                                                                            s7 = [s7, s8];
                                                                                            s6 = s7;
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s6;
                                                                                            s6 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s6;
                                                                                        s6 = peg$FAILED;
                                                                                    }
                                                                                    if (s6 === peg$FAILED) {
                                                                                        s6 = null;
                                                                                    }
                                                                                    if (s6 !== peg$FAILED) {
                                                                                        s7 = peg$currPos;
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
                                                                                                s8 = [s8, s9];
                                                                                                s7 = s8;
                                                                                            }
                                                                                            else {
                                                                                                peg$currPos = s7;
                                                                                                s7 = peg$FAILED;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s7;
                                                                                            s7 = peg$FAILED;
                                                                                        }
                                                                                        if (s7 === peg$FAILED) {
                                                                                            s7 = null;
                                                                                        }
                                                                                        if (s7 !== peg$FAILED) {
                                                                                            if (input.substr(peg$currPos, 2) === peg$c22) {
                                                                                                s8 = peg$c22;
                                                                                                peg$currPos += 2;
                                                                                            }
                                                                                            else {
                                                                                                s8 = peg$FAILED;
                                                                                                {
                                                                                                    peg$fail(peg$c23);
                                                                                                }
                                                                                            }
                                                                                            if (s8 !== peg$FAILED) {
                                                                                                s1 = [s1, s2, s3, s4, s5, s6, s7, s8];
                                                                                                s0 = s1;
                                                                                            }
                                                                                            else {
                                                                                                peg$currPos = s0;
                                                                                                s0 = peg$FAILED;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            peg$currPos = s0;
                                                                                            s0 = peg$FAILED;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        peg$currPos = s0;
                                                                                        s0 = peg$FAILED;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    peg$currPos = s0;
                                                                                    s0 = peg$FAILED;
                                                                                }
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
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
                        s1 = [s1, s2, s3, s4];
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        var s0, s1, s2, s3;
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
                s2 = peg$c19;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c20);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parsedec_octet();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                        s4 = peg$c19;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        {
                            peg$fail(peg$c20);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parsedec_octet();
                        if (s5 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 46) {
                                s6 = peg$c19;
                                peg$currPos++;
                            }
                            else {
                                s6 = peg$FAILED;
                                {
                                    peg$fail(peg$c20);
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
        if (input.substr(peg$currPos, 2) === peg$c24) {
            s1 = peg$c24;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c25);
            }
        }
        if (s1 !== peg$FAILED) {
            if (peg$c26.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c27);
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
                s1 = peg$c28;
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                {
                    peg$fail(peg$c29);
                }
            }
            if (s1 !== peg$FAILED) {
                if (peg$c30.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    {
                        peg$fail(peg$c31);
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
                    s1 = peg$c32;
                    peg$currPos++;
                }
                else {
                    s1 = peg$FAILED;
                    {
                        peg$fail(peg$c33);
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
                    if (peg$c34.test(input.charAt(peg$currPos))) {
                        s1 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s1 = peg$FAILED;
                        {
                            peg$fail(peg$c35);
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
        if (input.substr(peg$currPos, 23) === peg$c36) {
            s1 = peg$c36;
            peg$currPos += 23;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c37);
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
                if (input.substr(peg$currPos, 2) === peg$c38) {
                    s3 = peg$c38;
                    peg$currPos += 2;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c39);
                    }
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c40(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 24) === peg$c41) {
            s1 = peg$c41;
            peg$currPos += 24;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c42);
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
                if (input.substr(peg$currPos, 2) === peg$c38) {
                    s3 = peg$c38;
                    peg$currPos += 2;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c39);
                    }
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c43(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
                                                                        s0 = peg$parseAStandardLocalCandidate();
                                                                        if (s0 === peg$FAILED) {
                                                                            s0 = peg$parseAStandardGuidCandidate();
                                                                            if (s0 === peg$FAILED) {
                                                                                s0 = peg$parseAStandardIp4RemoteCandidate();
                                                                                if (s0 === peg$FAILED) {
                                                                                    s0 = peg$parseAStandardAGenTcpCandidate();
                                                                                    if (s0 === peg$FAILED) {
                                                                                        s0 = peg$parseAStandardAGenTcp6Candidate();
                                                                                        if (s0 === peg$FAILED) {
                                                                                            s0 = peg$parseAIcePwd();
                                                                                            if (s0 === peg$FAILED) {
                                                                                                s0 = peg$parseAIcePwdL();
                                                                                                if (s0 === peg$FAILED) {
                                                                                                    s0 = peg$parseAIceUFrag();
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
        return s0;
    }
    function peg$parseValZeroLine() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c44) {
            s1 = peg$c44;
            peg$currPos += 3;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c45);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c46();
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 2) === peg$c47) {
            s1 = peg$c47;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c48);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c49(s2);
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 10) === peg$c50) {
            s1 = peg$c50;
            peg$currPos += 10;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c51);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c52(s2);
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 19) === peg$c53) {
            s1 = peg$c53;
            peg$currPos += 19;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c54);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c55(s2);
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 19) === peg$c56) {
            s1 = peg$c56;
            peg$currPos += 19;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c57);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c58();
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 20) === peg$c59) {
            s1 = peg$c59;
            peg$currPos += 20;
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
    function peg$parseAttrExtmapAllowMixed() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 20) === peg$c62) {
            s1 = peg$c62;
            peg$currPos += 20;
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
                s1 = peg$c64();
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 15) === peg$c65) {
            s1 = peg$c65;
            peg$currPos += 15;
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
                s1 = peg$c67();
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 14) === peg$c68) {
            s1 = peg$c68;
            peg$currPos += 14;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c69);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
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
    function peg$parseAMid0() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 7) === peg$c71) {
            s1 = peg$c71;
            peg$currPos += 7;
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
                s1 = peg$c73();
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 3) === peg$c74) {
            s1 = peg$c74;
            peg$currPos += 3;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c75);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
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
                s2 = peg$c19;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c20);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseDecimal();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                        s4 = peg$c19;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        {
                            peg$fail(peg$c20);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseDecimal();
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c77(s1, s3, s5);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
                s2 = peg$c19;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c20);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseDecimal();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c78(s1, s3);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 4) === peg$c79) {
            s1 = peg$c79;
            peg$currPos += 4;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c80);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c81;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c82);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 8) === peg$c83) {
                            s5 = peg$c83;
                            peg$currPos += 8;
                        }
                        else {
                            s5 = peg$FAILED;
                            {
                                peg$fail(peg$c84);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseIP4();
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseUntilSeparator();
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c85(s2, s4, s6);
                                    s0 = s1;
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 28) === peg$c86) {
            s1 = peg$c86;
            peg$currPos += 28;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c87);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseMozVNum();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c81;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c82);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 17) === peg$c88) {
                            s5 = peg$c88;
                            peg$currPos += 17;
                        }
                        else {
                            s5 = peg$FAILED;
                            {
                                peg$fail(peg$c89);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseUntilSeparator();
                            if (s6 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c90(s2, s4);
                                s0 = s1;
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 5) === peg$c91) {
            s1 = peg$c91;
            peg$currPos += 5;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c92);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
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
    function peg$parseStandardSctpPort() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 16) === peg$c94) {
            s1 = peg$c94;
            peg$currPos += 16;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c95);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
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
    function peg$parseCustomSctpPort() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c97) {
            s1 = peg$c97;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c98);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseUntilSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c99(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 25) === peg$c100) {
            s1 = peg$c100;
            peg$currPos += 25;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c101);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c102();
                s0 = s1;
            }
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
        if (input.substr(peg$currPos, 19) === peg$c103) {
            s1 = peg$c103;
            peg$currPos += 19;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c104);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseUntilSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c105(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
    function peg$parseAStandardGuidCandidate() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c106) {
            s1 = peg$c106;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c107);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c81;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c82);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c108) {
                            s5 = peg$c108;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            {
                                peg$fail(peg$c109);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c81;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    {
                                        peg$fail(peg$c82);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseIP4();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 32) {
                                            s9 = peg$c81;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            {
                                                peg$fail(peg$c82);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 34) === peg$c110) {
                                                    s11 = peg$c110;
                                                    peg$currPos += 34;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c111);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseDecimal();
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parseUntilSeparator();
                                                        if (s13 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c112(s2, s4, s6, s8, s10, s12);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c106) {
            s1 = peg$c106;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c107);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c81;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c82);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c108) {
                            s5 = peg$c108;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            {
                                peg$fail(peg$c109);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c81;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    {
                                        peg$fail(peg$c82);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseGUID();
                                    if (s8 !== peg$FAILED) {
                                        if (input.substr(peg$currPos, 7) === peg$c113) {
                                            s9 = peg$c113;
                                            peg$currPos += 7;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            {
                                                peg$fail(peg$c114);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 39) === peg$c115) {
                                                    s11 = peg$c115;
                                                    peg$currPos += 39;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c116);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseUntilSeparator();
                                                    if (s12 !== peg$FAILED) {
                                                        peg$savedPos = s0;
                                                        s1 = peg$c117(s2, s4, s6, s8, s10);
                                                        s0 = s1;
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 12) === peg$c106) {
            s1 = peg$c106;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c107);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c81;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c82);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c108) {
                            s5 = peg$c108;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            {
                                peg$fail(peg$c109);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c81;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    {
                                        peg$fail(peg$c82);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseIP4();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 32) {
                                            s9 = peg$c81;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            {
                                                peg$fail(peg$c82);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 17) === peg$c118) {
                                                    s11 = peg$c118;
                                                    peg$currPos += 17;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c119);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseIP4();
                                                    if (s12 !== peg$FAILED) {
                                                        if (input.substr(peg$currPos, 7) === peg$c120) {
                                                            s13 = peg$c120;
                                                            peg$currPos += 7;
                                                        }
                                                        else {
                                                            s13 = peg$FAILED;
                                                            {
                                                                peg$fail(peg$c121);
                                                            }
                                                        }
                                                        if (s13 !== peg$FAILED) {
                                                            s14 = peg$parseDecimal();
                                                            if (s14 !== peg$FAILED) {
                                                                if (input.substr(peg$currPos, 12) === peg$c122) {
                                                                    s15 = peg$c122;
                                                                    peg$currPos += 12;
                                                                }
                                                                else {
                                                                    s15 = peg$FAILED;
                                                                    {
                                                                        peg$fail(peg$c123);
                                                                    }
                                                                }
                                                                if (s15 !== peg$FAILED) {
                                                                    s16 = peg$parseDecimal();
                                                                    if (s16 !== peg$FAILED) {
                                                                        if (input.substr(peg$currPos, 17) === peg$c124) {
                                                                            s17 = peg$c124;
                                                                            peg$currPos += 17;
                                                                        }
                                                                        else {
                                                                            s17 = peg$FAILED;
                                                                            {
                                                                                peg$fail(peg$c125);
                                                                            }
                                                                        }
                                                                        if (s17 !== peg$FAILED) {
                                                                            s18 = peg$parseUntilSeparator();
                                                                            if (s18 !== peg$FAILED) {
                                                                                peg$savedPos = s0;
                                                                                s1 = peg$c126(s2, s4, s6, s8, s10, s12, s14, s16);
                                                                                s0 = s1;
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 12) === peg$c106) {
            s1 = peg$c106;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c107);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c81;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c82);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c127) {
                            s5 = peg$c127;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            {
                                peg$fail(peg$c128);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c81;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    {
                                        peg$fail(peg$c82);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseIP4();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 32) {
                                            s9 = peg$c81;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            {
                                                peg$fail(peg$c82);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 49) === peg$c129) {
                                                    s11 = peg$c129;
                                                    peg$currPos += 49;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c130);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseDecimal();
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parseUntilSeparator();
                                                        if (s13 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c131(s2, s4, s6, s8, s10, s12);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 12) === peg$c106) {
            s1 = peg$c106;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c107);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c81;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c82);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c127) {
                            s5 = peg$c127;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            {
                                peg$fail(peg$c128);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c81;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    {
                                        peg$fail(peg$c82);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseIP6();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 32) {
                                            s9 = peg$c81;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            {
                                                peg$fail(peg$c82);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 49) === peg$c129) {
                                                    s11 = peg$c129;
                                                    peg$currPos += 49;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    {
                                                        peg$fail(peg$c130);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseDecimal();
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parseUntilSeparator();
                                                        if (s13 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c132(s2, s4, s6, s8, s10, s12);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 10) === peg$c133) {
            s1 = peg$c133;
            peg$currPos += 10;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c134);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar22();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseUntilSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c135(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 10) === peg$c133) {
            s1 = peg$c133;
            peg$currPos += 10;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c134);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar24();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseUntilSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c136(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
    function peg$parseAIceUFrag() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c137) {
            s1 = peg$c137;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c138);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar4();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseUntilSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c139(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 22) === peg$c140) {
            s1 = peg$c140;
            peg$currPos += 22;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c141);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseCHex64();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseUntilSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c142(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
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
        if (input.substr(peg$currPos, 16) === peg$c143) {
            s1 = peg$c143;
            peg$currPos += 16;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c144);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c145();
                s0 = s1;
            }
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
            s1 = peg$c146(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseUntilSeparator() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        if (peg$c147.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            {
                peg$fail(peg$c148);
            }
        }
        while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c147.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c148);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c149) {
                s2 = peg$c149;
                peg$currPos += 2;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c150);
                }
            }
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c151(s1);
                s0 = s1;
            }
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
                peg$fail(peg$c152);
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
                    peg$fail(peg$c152);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c153(s1);
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
            'standard_guid_candidate',
            'standard_remote_candidate',
            'standard_agen_tcp_candidate',
            'standard_agen_tcp6_candidate'
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
    parse: peg$parse$1
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
function peg$parse(input, options) {
    options = options !== void 0 ? options : {};
    var peg$FAILED = {}, peg$startRuleFunctions = { CompiledDocument: peg$parseCompiledDocument }, peg$startRuleFunction = peg$parseCompiledDocument, peg$c0 = peg$anyExpectation(), peg$c1 = function (doc) { return doc.join(''); }, peg$currPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$result;
    if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
            throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }
        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
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
    function peg$parseCompiledDocument() {
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
                peg$fail(peg$c0);
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
                    peg$fail(peg$c0);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            s1 = peg$c1(s1);
        }
        s0 = s1;
        return s0;
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
var decompiler = {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
};

function parse(code) {
    return sdp_parser.parse(code);
}
function deparse(bytecode) {
    return decompiler.parse(bytecode);
}

const c_terminal = '\x00';
const offer = '\x01', answer = '\x02', version_zero_line = '\x03', version_line = '\x04', a_msid_semantic_ns = '\x05', a_msid_semantic_ws = '\x06', a_extmap_allow_mixed = '\x07', a_standard_sctp_port = '\x08', a_custom_sctp_port = '\x09', a_standard_max_message_size = '\x0a', a_custom_max_message_size = '\x0b', a_setup_actpass = '\x0c', a_setup_active = '\x0d', a_mid_zero = '\x0e', s_dash = '\x0f', t_zero_zero = '\x10', standard_origin = '\x11', standard_moz_origin = '\x12', standard_local_candidate = '\x13', standard_guid_candidate = '\x14', standard_remote_candidate = '\x15', standard_agen_tcp_candidate = '\x16', standard_agen_tcp6_candidate = '\x17', a_ice_pwd = '\x18', a_ice_pwd_l = '\x19', a_ice_ufrag = '\x20', a_fingerprint_sha1_256 = '\x21', a_group_bundle_0 = '\x22', a_send_recv = '\x23', a_end_of_candidates = '\x24';
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
    'a_ice_ufrag': (v) => `${a_ice_ufrag}${v.value}${c_terminal}`,
    'a_fingerprint_sha1_256': (v) => `${a_fingerprint_sha1_256}${v.value}${c_terminal}`,
    'a_send_recv': (_) => `${a_send_recv}`,
    'a_end_of_candidates': (_) => `${a_end_of_candidates}`,
    's_dash': (_) => `${s_dash}`,
    't_zero_zero': (_) => `${t_zero_zero}`,
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
    'standard_guid_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, p, d4] = items;
        if (kind !== 'standard_guid_candidate') {
            throw 'impossible';
        }
        return `${standard_guid_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i}${c_terminal}${p}${c_terminal}${d4}${c_terminal}`;
    },
    'standard_local_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4] = items;
        if (kind !== 'standard_local_candidate') {
            throw 'impossible';
        }
        return `${standard_local_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}`;
    },
    'standard_remote_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
        if (kind !== 'standard_remote_candidate') {
            throw 'impossible';
        }
        return `${standard_remote_candidate}${d1}${c_terminal}${d2}${c_terminal}${d3}${c_terminal}${i1}${c_terminal}${d4}${c_terminal}${i2}${c_terminal}${d5}${c_terminal}${d6}${c_terminal}`;
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
            case a_group_bundle_0:
                work += 'a=group:BUNDLE 0\r\n';
                break;
            case a_send_recv:
                work += 'a=sendrecv\r\n';
                break;
            case a_end_of_candidates:
                work += 'a=end-of-candidates\r\n';
                break;
            case standard_origin:
                scan_forward_to_null('o=- ', 'standard_moz_origin_1', undefined, true);
                scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                scan_forward_to_null(' IN IP4 ', 'standard_moz_origin_3', undefined, true);
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
            case standard_local_candidate:
                scan_forward_to_null(`a=candidate:`, 'standard_local_candidate_1', undefined, true);
                scan_forward_to_null(' ', 'standard_local_candidate_2', undefined, true);
                scan_forward_to_null(' udp ', 'standard_local_candidate_3', undefined, true);
                scan_forward_to_null(' ', 'standard_local_candidate_4', undefined, true);
                scan_forward_to_null('.local ', 'standard_local_candidate_5', undefined, true);
                work += ' typ host generation 0 network-cost 999';
                break;
            case standard_guid_candidate:
                scan_forward_to_null(`a=candidate:`, 'standard_guid_candidate_1', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_2', undefined, true);
                scan_forward_to_null(' udp ', 'standard_guid_candidate_3', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_5', undefined, true);
                break;
            case standard_agen_tcp_candidate:
                scan_forward_to_null(`a=candidate:`, 'standard_guid_candidate_1', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_2', undefined, true);
                scan_forward_to_null(' tcp ', 'standard_guid_candidate_3', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, true);
                break;
            case standard_agen_tcp6_candidate:
                scan_forward_to_null(`a=candidate:`, 'standard_guid_candidate_1', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_2', undefined, true);
                scan_forward_to_null(' tcp ', 'standard_guid_candidate_3', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, true);
                break;
            case standard_remote_candidate:
                scan_forward_to_null(`a=candidate:`, 'standard_remote_candidate_1', undefined, true);
                scan_forward_to_null(' ', 'standard_remote_candidate_2', undefined, true);
                scan_forward_to_null(' udp ', 'standard_remote_candidate_3', undefined, true);
                scan_forward_to_null(' ', 'standard_remote_candidate_4', undefined, true);
                scan_forward_to_null(' ', 'standard_remote_candidate_5', undefined, true);
                scan_forward_to_null(' typ srflx raddr ', 'standard_remote_candidate_6', undefined, true);
                scan_forward_to_null(' rport ', 'standard_remote_candidate_7', undefined, true);
                scan_forward_to_null(' generation ', 'standard_remote_candidate_8', undefined, true);
                work += ' network-cost 999';
                break;
            case a_ice_pwd:
                scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd', undefined, true);
                break;
            case a_ice_pwd_l:
                scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd_l', undefined, true);
                break;
            case a_ice_ufrag:
                scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag', undefined, true);
                break;
            case a_fingerprint_sha1_256:
                scan_forward_to_null(`a=fingerprint:sha-256 `, 'a_fingerprint_sha1_256', undefined, true);
                break;
            default:
                throw new TypeError(`Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);
        }
    }
    return `${work}${at_end}`;
}

export { deparse, pack, parse, unpack };
