"use strict";
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
    var peg$FAILED = {}, peg$startRuleFunctions = { RawDocument: peg$parseRawDocument }, peg$startRuleFunction = peg$parseRawDocument, peg$c0 = /^[0-9]/, peg$c1 = peg$classExpectation([["0", "9"]], false, false), peg$c2 = function (d) { return BigInt(d.join(''), 10); }, peg$c3 = /^[0-9a-fA-F]/, peg$c4 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false), peg$c5 = function (a, b) { return `${a}${b}`; }, peg$c6 = function (a, b, c, d) { return [a, b, c, d].join(''); }, peg$c7 = function (a, b, c, d, e, f, g, h) { return [a, b, c, d, e, f, g, h].join(''); }, peg$c8 = function (a, b, c, d, e, f, g, h, i, j, k, l) { return [a, b, c, d, e, f, g, h, i, j, k, l].join(''); }, peg$c9 = ":", peg$c10 = peg$literalExpectation(":", false), peg$c11 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F].join(''); }, peg$c12 = "-", peg$c13 = peg$literalExpectation("-", false), peg$c14 = function (a, b, c, d, e) { return [a, b, c, d, e].join(''); }, peg$c15 = ".", peg$c16 = peg$literalExpectation(".", false), peg$c17 = function (a, b, c, d) { return ((((((a * 256n) + b) * 256n) + c) * 256n) + d).toString(); }, peg$c18 = "{\"type\":\"offer\",\"sdp\":\"", peg$c19 = peg$literalExpectation("{\"type\":\"offer\",\"sdp\":\"", false), peg$c20 = "\"}", peg$c21 = peg$literalExpectation("\"}", false), peg$c22 = function (s) { return ast('offer', s); }, peg$c23 = "{\"type\":\"answer\",\"sdp\":\"", peg$c24 = peg$literalExpectation("{\"type\":\"answer\",\"sdp\":\"", false), peg$c25 = function (s) { return ast('answer', s); }, peg$c26 = "v=0\r\n", peg$c27 = peg$literalExpectation("v=0\r\n", false), peg$c28 = function () { return ast('version_zero_line', undefined); }, peg$c29 = "v=", peg$c30 = peg$literalExpectation("v=", false), peg$c31 = function (us) { return ast('version_line', us); }, peg$c32 = "a=msid-semantic:WMS", peg$c33 = peg$literalExpectation("a=msid-semantic:WMS", false), peg$c34 = function (us) { return ast('a_msid_semantic_ns', undefined); }, peg$c35 = "a=msid-semantic: WMS", peg$c36 = peg$literalExpectation("a=msid-semantic: WMS", false), peg$c37 = function (us) { return ast('a_msid_semantic_ws', undefined); }, peg$c38 = "a=extmap-allow-mixed", peg$c39 = peg$literalExpectation("a=extmap-allow-mixed", false), peg$c40 = function (us) { return ast('a_extmap_allow_mixed', undefined); }, peg$c41 = "a=setup:actpass", peg$c42 = peg$literalExpectation("a=setup:actpass", false), peg$c43 = function (us) { return ast('a_setup_actpass'); }, peg$c44 = "a=setup:active", peg$c45 = peg$literalExpectation("a=setup:active", false), peg$c46 = function (us) { return ast('a_setup_active'); }, peg$c47 = "a=mid:0", peg$c48 = peg$literalExpectation("a=mid:0", false), peg$c49 = function (us) { return ast('a_mid_zero'); }, peg$c50 = "s=-", peg$c51 = peg$literalExpectation("s=-", false), peg$c52 = function (us) { return ast('s_dash'); }, peg$c53 = function (maj, min, patch) { return ast('moz_v_num', [maj, min, patch]); }, peg$c54 = function (maj, min) { return ast('moz_v_num', [maj, min, undefined]); }, peg$c55 = "o=- ", peg$c56 = peg$literalExpectation("o=- ", false), peg$c57 = " ", peg$c58 = peg$literalExpectation(" ", false), peg$c59 = " IN IP4 ", peg$c60 = peg$literalExpectation(" IN IP4 ", false), peg$c61 = function (msess, d, i, us) { return ast('standard_origin', [msess, d, i]); }, peg$c62 = "o=mozilla...THIS_IS_SDPARTA-", peg$c63 = peg$literalExpectation("o=mozilla...THIS_IS_SDPARTA-", false), peg$c64 = " 0 IN IP4 0.0.0.0", peg$c65 = peg$literalExpectation(" 0 IN IP4 0.0.0.0", false), peg$c66 = function (mv, msess, us) { return ast('standard_moz_origin', [mv, msess]); }, peg$c67 = "t=0 0", peg$c68 = peg$literalExpectation("t=0 0", false), peg$c69 = function (us) { return ast('t_zero_zero'); }, peg$c70 = "a=sctp-port:5000", peg$c71 = peg$literalExpectation("a=sctp-port:5000", false), peg$c72 = function (us) { return ast('a_standard_sctp_port'); }, peg$c73 = "a=sctp-port:", peg$c74 = peg$literalExpectation("a=sctp-port:", false), peg$c75 = function (data, us) { return ast('a_custom_sctp_port', data); }, peg$c76 = "a=max-message-size:262144", peg$c77 = peg$literalExpectation("a=max-message-size:262144", false), peg$c78 = function (us) { return ast('a_standard_max_message_size'); }, peg$c79 = "a=max-message-size:", peg$c80 = peg$literalExpectation("a=max-message-size:", false), peg$c81 = function (data, us) { return ast('a_custom_max_message_size', data); }, peg$c82 = "a=candidate:", peg$c83 = peg$literalExpectation("a=candidate:", false), peg$c84 = " udp ", peg$c85 = peg$literalExpectation(" udp ", false), peg$c86 = " typ host generation 0 network-id ", peg$c87 = peg$literalExpectation(" typ host generation 0 network-id ", false), peg$c88 = function (d1, d2, d3, i, p, d4, us) { return ast('standard_guid_candidate', [d1, d2, d3, i, p, d4]); }, peg$c89 = ".local ", peg$c90 = peg$literalExpectation(".local ", false), peg$c91 = " typ host generation 0 network-cost 999", peg$c92 = peg$literalExpectation(" typ host generation 0 network-cost 999", false), peg$c93 = function (d1, d2, d3, g, d4, us) { return ast('standard_local_candidate', [d1, d2, d3, g, d4]); }, peg$c94 = " typ srflx raddr ", peg$c95 = peg$literalExpectation(" typ srflx raddr ", false), peg$c96 = " rport ", peg$c97 = peg$literalExpectation(" rport ", false), peg$c98 = " generation ", peg$c99 = peg$literalExpectation(" generation ", false), peg$c100 = " network-cost 999", peg$c101 = peg$literalExpectation(" network-cost 999", false), peg$c102 = function (d1, d2, d3, i1, d4, i2, d5, d6, us) { return ast('standard_remote_candidate', [d1, d2, d3, i1, d4, i2, d5, d6]); }, peg$c103 = " tcp ", peg$c104 = peg$literalExpectation(" tcp ", false), peg$c105 = " typ host tcptype active generation 0 network-id ", peg$c106 = peg$literalExpectation(" typ host tcptype active generation 0 network-id ", false), peg$c107 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp_candidate', [d1, d2, d3, i1, d4, d5]); }, peg$c108 = function (us) { return ast('unknown_line', us); }, peg$c109 = /^[^'\r\n']/, peg$c110 = peg$classExpectation(["'", "\r", "\n", "'"], true, false), peg$c111 = "\r\n", peg$c112 = peg$literalExpectation("\r\n", false), peg$c113 = function (rl) { return rl.join(''); }, peg$c114 = peg$anyExpectation(), peg$c115 = function (uts) { return ast('unknown_terminate', uts.join('')); }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$silentFails = 0, peg$result;
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
    function expected(description, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
    }
    function error(message, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildSimpleError(message, location);
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
    function peg$otherExpectation(description) {
        return { type: "other", description: description };
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
    function peg$buildSimpleError(message, location) {
        return new peg$SyntaxError(message, null, null, location);
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
    function peg$parseDecimal() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        if (peg$c0.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c1);
            }
        }
        if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                if (peg$c0.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c1);
                    }
                }
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
            if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
                        if (peg$silentFails === 0) {
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
                                if (peg$silentFails === 0) {
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
                                        if (peg$silentFails === 0) {
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
                                                if (peg$silentFails === 0) {
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
                                                        if (peg$silentFails === 0) {
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
                                                                if (peg$silentFails === 0) {
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
                                                                        if (peg$silentFails === 0) {
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
                                                                                if (peg$silentFails === 0) {
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
                                                                                        if (peg$silentFails === 0) {
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
                                                                                                if (peg$silentFails === 0) {
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
                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                                                                                                                                if (peg$silentFails === 0) {
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
                                                                                                                                                                                                                                                        if (peg$silentFails === 0) {
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
                                                                                                                                                                                                                                                                if (peg$silentFails === 0) {
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
    function peg$parseGUID() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
        s0 = peg$currPos;
        s1 = peg$parseHex8();
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
                s2 = peg$c12;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseHex4();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 45) {
                        s4 = peg$c12;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c13);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseHex4();
                        if (s5 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 45) {
                                s6 = peg$c12;
                                peg$currPos++;
                            }
                            else {
                                s6 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                    peg$fail(peg$c13);
                                }
                            }
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseHex4();
                                if (s7 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 45) {
                                        s8 = peg$c12;
                                        peg$currPos++;
                                    }
                                    else {
                                        s8 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                            peg$fail(peg$c13);
                                        }
                                    }
                                    if (s8 !== peg$FAILED) {
                                        s9 = peg$parseHex12();
                                        if (s9 !== peg$FAILED) {
                                            peg$savedPos = s0;
                                            s1 = peg$c14(s1, s3, s5, s7, s9);
                                            s0 = s1;
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
                s2 = peg$c15;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c16);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseDecimal();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                        s4 = peg$c15;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c16);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseDecimal();
                        if (s5 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 46) {
                                s6 = peg$c15;
                                peg$currPos++;
                            }
                            else {
                                s6 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                    peg$fail(peg$c16);
                                }
                            }
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseDecimal();
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c17(s1, s3, s5, s7);
                                    s0 = s1;
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseOffer() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 23) === peg$c18) {
            s1 = peg$c18;
            peg$currPos += 23;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c19);
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
                if (input.substr(peg$currPos, 2) === peg$c20) {
                    s3 = peg$c20;
                    peg$currPos += 2;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c21);
                    }
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c22(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 24) === peg$c23) {
            s1 = peg$c23;
            peg$currPos += 24;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c24);
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
                if (input.substr(peg$currPos, 2) === peg$c20) {
                    s3 = peg$c20;
                    peg$currPos += 2;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c21);
                    }
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c25(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        return s0;
    }
    function peg$parseValZeroLine() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c26) {
            s1 = peg$c26;
            peg$currPos += 5;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c27);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c28();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseValLine() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c29) {
            s1 = peg$c29;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c30);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c31(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 19) === peg$c32) {
            s1 = peg$c32;
            peg$currPos += 19;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c33);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c34(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 20) === peg$c35) {
            s1 = peg$c35;
            peg$currPos += 20;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c36);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c37(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 20) === peg$c38) {
            s1 = peg$c38;
            peg$currPos += 20;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c39);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
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
        return s0;
    }
    function peg$parseASetupActpass() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 15) === peg$c41) {
            s1 = peg$c41;
            peg$currPos += 15;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c42);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
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
        return s0;
    }
    function peg$parseASetupActive() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 14) === peg$c44) {
            s1 = peg$c44;
            peg$currPos += 14;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c45);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c46(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 7) === peg$c47) {
            s1 = peg$c47;
            peg$currPos += 7;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
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
    function peg$parseSDash() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c50) {
            s1 = peg$c50;
            peg$currPos += 3;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
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
                s2 = peg$c15;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c16);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseDecimal();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                        s4 = peg$c15;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c16);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseDecimal();
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c53(s1, s3, s5);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
                s2 = peg$c15;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c16);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseDecimal();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c54(s1, s3);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 4) === peg$c55) {
            s1 = peg$c55;
            peg$currPos += 4;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c56);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c57;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 8) === peg$c59) {
                            s5 = peg$c59;
                            peg$currPos += 8;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c60);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseIP4();
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseUntilSeparator();
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c61(s2, s4, s6, s7);
                                    s0 = s1;
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 28) === peg$c62) {
            s1 = peg$c62;
            peg$currPos += 28;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c63);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseMozVNum();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c57;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 17) === peg$c64) {
                            s5 = peg$c64;
                            peg$currPos += 17;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c65);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseUntilSeparator();
                            if (s6 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c66(s2, s4, s6);
                                s0 = s1;
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 5) === peg$c67) {
            s1 = peg$c67;
            peg$currPos += 5;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
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
    function peg$parseStandardSctpPort() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 16) === peg$c70) {
            s1 = peg$c70;
            peg$currPos += 16;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c71);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c72(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 12) === peg$c73) {
            s1 = peg$c73;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c74);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseUntilSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c75(s2, s3);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 25) === peg$c76) {
            s1 = peg$c76;
            peg$currPos += 25;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c77);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c78(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 19) === peg$c79) {
            s1 = peg$c79;
            peg$currPos += 19;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c80);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseUntilSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c81(s2, s3);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 12) === peg$c82) {
            s1 = peg$c82;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c83);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c57;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c84) {
                            s5 = peg$c84;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c85);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c57;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c58);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseIP4();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 32) {
                                            s9 = peg$c57;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c58);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 34) === peg$c86) {
                                                    s11 = peg$c86;
                                                    peg$currPos += 34;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c87);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseDecimal();
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parseUntilSeparator();
                                                        if (s13 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c88(s2, s4, s6, s8, s10, s12, s13);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 12) === peg$c82) {
            s1 = peg$c82;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c83);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c57;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c84) {
                            s5 = peg$c84;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c85);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c57;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c58);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseGUID();
                                    if (s8 !== peg$FAILED) {
                                        if (input.substr(peg$currPos, 7) === peg$c89) {
                                            s9 = peg$c89;
                                            peg$currPos += 7;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c90);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 39) === peg$c91) {
                                                    s11 = peg$c91;
                                                    peg$currPos += 39;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c92);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseUntilSeparator();
                                                    if (s12 !== peg$FAILED) {
                                                        peg$savedPos = s0;
                                                        s1 = peg$c93(s2, s4, s6, s8, s10, s12);
                                                        s0 = s1;
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 12) === peg$c82) {
            s1 = peg$c82;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c83);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c57;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c84) {
                            s5 = peg$c84;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c85);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c57;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c58);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseIP4();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 32) {
                                            s9 = peg$c57;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c58);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 17) === peg$c94) {
                                                    s11 = peg$c94;
                                                    peg$currPos += 17;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c95);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseIP4();
                                                    if (s12 !== peg$FAILED) {
                                                        if (input.substr(peg$currPos, 7) === peg$c96) {
                                                            s13 = peg$c96;
                                                            peg$currPos += 7;
                                                        }
                                                        else {
                                                            s13 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                                peg$fail(peg$c97);
                                                            }
                                                        }
                                                        if (s13 !== peg$FAILED) {
                                                            s14 = peg$parseDecimal();
                                                            if (s14 !== peg$FAILED) {
                                                                if (input.substr(peg$currPos, 12) === peg$c98) {
                                                                    s15 = peg$c98;
                                                                    peg$currPos += 12;
                                                                }
                                                                else {
                                                                    s15 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                        peg$fail(peg$c99);
                                                                    }
                                                                }
                                                                if (s15 !== peg$FAILED) {
                                                                    s16 = peg$parseDecimal();
                                                                    if (s16 !== peg$FAILED) {
                                                                        if (input.substr(peg$currPos, 17) === peg$c100) {
                                                                            s17 = peg$c100;
                                                                            peg$currPos += 17;
                                                                        }
                                                                        else {
                                                                            s17 = peg$FAILED;
                                                                            if (peg$silentFails === 0) {
                                                                                peg$fail(peg$c101);
                                                                            }
                                                                        }
                                                                        if (s17 !== peg$FAILED) {
                                                                            s18 = peg$parseUntilSeparator();
                                                                            if (s18 !== peg$FAILED) {
                                                                                peg$savedPos = s0;
                                                                                s1 = peg$c102(s2, s4, s6, s8, s10, s12, s14, s16, s18);
                                                                                s0 = s1;
                                                                            }
                                                                            else {
                                                                                peg$currPos = s0;
                                                                                s0 = peg$FAILED;
                                                                            }
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c82) {
            s1 = peg$c82;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c83);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c57;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c103) {
                            s5 = peg$c103;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c104);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseDecimal();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 32) {
                                    s7 = peg$c57;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c58);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseIP4();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 32) {
                                            s9 = peg$c57;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c58);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 49) === peg$c105) {
                                                    s11 = peg$c105;
                                                    peg$currPos += 49;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c106);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseDecimal();
                                                    if (s12 !== peg$FAILED) {
                                                        peg$savedPos = s0;
                                                        s1 = peg$c107(s2, s4, s6, s8, s10, s12);
                                                        s0 = s1;
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
            s1 = peg$c108(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseUntilSeparator() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        if (peg$c109.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c110);
            }
        }
        while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c109.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c110);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c111) {
                s2 = peg$c111;
                peg$currPos += 2;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c112);
                }
            }
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c113(s1);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
            if (peg$silentFails === 0) {
                peg$fail(peg$c114);
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
                if (peg$silentFails === 0) {
                    peg$fail(peg$c114);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c115(s1);
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
            'standard_agen_tcp_candidate'
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
module.exports = {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
};
