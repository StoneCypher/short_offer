'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
    var peg$FAILED = {}, peg$startRuleFunctions = { RawDocument: peg$parseRawDocument }, peg$startRuleFunction = peg$parseRawDocument, peg$c0 = /^[0-9]/, peg$c1 = peg$classExpectation([["0", "9"]], false, false), peg$c2 = function (d) { return BigInt(d.join(''), 10); }, peg$c3 = "{\"type\":\"offer\",\"sdp\":\"", peg$c4 = peg$literalExpectation("{\"type\":\"offer\",\"sdp\":\"", false), peg$c5 = "\"}", peg$c6 = peg$literalExpectation("\"}", false), peg$c7 = function (s) { return ast('offer', s); }, peg$c8 = "{\"type\":\"answer\",\"sdp\":\"", peg$c9 = peg$literalExpectation("{\"type\":\"answer\",\"sdp\":\"", false), peg$c10 = function (s) { return ast('answer', s); }, peg$c11 = "v=0\r\n", peg$c12 = peg$literalExpectation("v=0\r\n", false), peg$c13 = function () { return ast('version_zero_line', undefined); }, peg$c14 = "v=", peg$c15 = peg$literalExpectation("v=", false), peg$c16 = function (us) { return ast('version_line', us); }, peg$c17 = "a=msid-semantic:WMS", peg$c18 = peg$literalExpectation("a=msid-semantic:WMS", false), peg$c19 = function () { return ast('a_msid_semantic_ns', undefined); }, peg$c20 = "a=msid-semantic: WMS", peg$c21 = peg$literalExpectation("a=msid-semantic: WMS", false), peg$c22 = function () { return ast('a_msid_semantic_ws', undefined); }, peg$c23 = "a=extmap-allow-mixed", peg$c24 = peg$literalExpectation("a=extmap-allow-mixed", false), peg$c25 = function () { return ast('a_extmap_allow_mixed', undefined); }, peg$c26 = "a=setup:actpass", peg$c27 = peg$literalExpectation("a=setup:actpass", false), peg$c28 = function () { return ast('a_setup_actpass'); }, peg$c29 = "a=setup:active", peg$c30 = peg$literalExpectation("a=setup:active", false), peg$c31 = function () { return ast('a_setup_active'); }, peg$c32 = "a=mid:0", peg$c33 = peg$literalExpectation("a=mid:0", false), peg$c34 = function () { return ast('a_mid_zero'); }, peg$c35 = "s=-", peg$c36 = peg$literalExpectation("s=-", false), peg$c37 = function () { return ast('s_dash'); }, peg$c38 = ".", peg$c39 = peg$literalExpectation(".", false), peg$c40 = function (maj, min, patch) { return ast('moz_v_num', [maj, min, patch]); }, peg$c41 = "o=mozilla...THIS_IS_SDPARTA-", peg$c42 = peg$literalExpectation("o=mozilla...THIS_IS_SDPARTA-", false), peg$c43 = " ", peg$c44 = peg$literalExpectation(" ", false), peg$c45 = " 0 IN IP4 0.0.0.0", peg$c46 = peg$literalExpectation(" 0 IN IP4 0.0.0.0", false), peg$c47 = function (mv, msess) { return ast('standard_moz_origin', [mv, msess]); }, peg$c48 = "t=0 0", peg$c49 = peg$literalExpectation("t=0 0", false), peg$c50 = function () { return ast('t_zero_zero'); }, peg$c51 = "a=sctp-port:5000", peg$c52 = peg$literalExpectation("a=sctp-port:5000", false), peg$c53 = function () { return ast('a_standard_sctp_port'); }, peg$c54 = "a=sctp-port:", peg$c55 = peg$literalExpectation("a=sctp-port:", false), peg$c56 = function (data) { return ast('a_custom_sctp_port', data); }, peg$c57 = "a=max-message-size:262144", peg$c58 = peg$literalExpectation("a=max-message-size:262144", false), peg$c59 = function () { return ast('a_standard_max_message_size'); }, peg$c60 = "a=max-message-size:", peg$c61 = peg$literalExpectation("a=max-message-size:", false), peg$c62 = function (data) { return ast('a_custom_max_message_size', data); }, peg$c63 = function (us) { return ast('unknown_line', us); }, peg$c64 = /^[^'\r\n']/, peg$c65 = peg$classExpectation(["'", "\r", "\n", "'"], true, false), peg$c66 = "\r\n", peg$c67 = peg$literalExpectation("\r\n", false), peg$c68 = function (rl) { return rl.join(''); }, peg$c69 = peg$anyExpectation(), peg$c70 = function (uts) { return ast('unknown_terminate', uts.join('')); }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$result;
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
            {
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
                    {
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
    function peg$parseOffer() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 23) === peg$c3) {
            s1 = peg$c3;
            peg$currPos += 23;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c4);
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
                if (input.substr(peg$currPos, 2) === peg$c5) {
                    s3 = peg$c5;
                    peg$currPos += 2;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c6);
                    }
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c7(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 24) === peg$c8) {
            s1 = peg$c8;
            peg$currPos += 24;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c9);
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
                if (input.substr(peg$currPos, 2) === peg$c5) {
                    s3 = peg$c5;
                    peg$currPos += 2;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c6);
                    }
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c10(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        return s0;
    }
    function peg$parseValZeroLine() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c11) {
            s1 = peg$c11;
            peg$currPos += 5;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c12);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c13();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseValLine() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c14) {
            s1 = peg$c14;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c15);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c16(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 19) === peg$c17) {
            s1 = peg$c17;
            peg$currPos += 19;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c18);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c19();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseAttrMsidSemanticWmsClaimWithSpace() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 20) === peg$c20) {
            s1 = peg$c20;
            peg$currPos += 20;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c21);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c22();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseAttrExtmapAllowMixed() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 20) === peg$c23) {
            s1 = peg$c23;
            peg$currPos += 20;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c24);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c25();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseASetupActpass() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 15) === peg$c26) {
            s1 = peg$c26;
            peg$currPos += 15;
        }
        else {
            s1 = peg$FAILED;
            {
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
    function peg$parseASetupActive() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 14) === peg$c29) {
            s1 = peg$c29;
            peg$currPos += 14;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c30);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c31();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseAMid0() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 7) === peg$c32) {
            s1 = peg$c32;
            peg$currPos += 7;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c33);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c34();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseSDash() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c35) {
            s1 = peg$c35;
            peg$currPos += 3;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c36);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c37();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseMozVNum() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parseDecimal();
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
                s2 = peg$c38;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c39);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseDecimal();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                        s4 = peg$c38;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        {
                            peg$fail(peg$c39);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseDecimal();
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c40(s1, s3, s5);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 28) === peg$c41) {
            s1 = peg$c41;
            peg$currPos += 28;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c42);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseMozVNum();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 32) {
                    s3 = peg$c43;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    {
                        peg$fail(peg$c44);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 17) === peg$c45) {
                            s5 = peg$c45;
                            peg$currPos += 17;
                        }
                        else {
                            s5 = peg$FAILED;
                            {
                                peg$fail(peg$c46);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c47(s2, s4);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c48) {
            s1 = peg$c48;
            peg$currPos += 5;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c49);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c50();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseStandardSctpPort() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 16) === peg$c51) {
            s1 = peg$c51;
            peg$currPos += 16;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c52);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c53();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseCustomSctpPort() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c54) {
            s1 = peg$c54;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c55);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c56(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 25) === peg$c57) {
            s1 = peg$c57;
            peg$currPos += 25;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c58);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c59();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseCustomMaxMessageSize() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 19) === peg$c60) {
            s1 = peg$c60;
            peg$currPos += 19;
        }
        else {
            s1 = peg$FAILED;
            {
                peg$fail(peg$c61);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c62(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
            s1 = peg$c63(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseUntilSeparator() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        if (peg$c64.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            {
                peg$fail(peg$c65);
            }
        }
        while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c64.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c65);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c66) {
                s2 = peg$c66;
                peg$currPos += 2;
            }
            else {
                s2 = peg$FAILED;
                {
                    peg$fail(peg$c67);
                }
            }
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c68(s1);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
                peg$fail(peg$c69);
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
                    peg$fail(peg$c69);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c70(s1);
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
const offer = '\x01', answer = '\x02', version_zero_line = '\x03', version_line = '\x04', a_msid_semantic_ns = '\x05', a_msid_semantic_ws = '\x06', a_extmap_allow_mixed = '\x07', a_standard_sctp_port = '\x08', a_custom_sctp_port = '\x09', a_standard_max_message_size = '\x0a', a_custom_max_message_size = '\x0b', a_setup_actpass = '\x0c', a_setup_active = '\x0d', a_mid_zero = '\x0e', s_dash = '\x0f', t_zero_zero = '\x10', standard_moz_origin = '\x11';
const short_separator_follows = '\x7c';
const unknown_line = '\x7e';
const unknown_terminate = '\x7f';

const nl_or_cr_nl = (pl) => pl.uses_short_nl
    ? short_separator_follows
    : '';
function moz_ver([maj, min, patch]) {
    return `${maj}.${min}.${patch}${c_terminal}`;
}
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
            const v_kind = v.kind;
            switch (v_kind) {
                case 'unknown_line':
                    work += `${unknown_line}${v.value}${nl_or_cr_nl(v)}${c_terminal}`;
                    break;
                case 'version_zero_line':
                    work += `${version_zero_line}${nl_or_cr_nl(v)}`;
                    break;
                case 'version_line':
                    work += `${version_line}${v.value}${nl_or_cr_nl(v)}${c_terminal}`;
                    break;
                case 'a_msid_semantic_ns':
                    work += `${a_msid_semantic_ns}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_msid_semantic_ws':
                    work += `${a_msid_semantic_ws}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_extmap_allow_mixed':
                    work += `${a_extmap_allow_mixed}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_standard_sctp_port':
                    work += `${a_standard_sctp_port}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_custom_sctp_port':
                    work += `${a_custom_sctp_port}${v.value}${nl_or_cr_nl(v)}${c_terminal}`;
                    break;
                case 'a_standard_max_message_size':
                    work += `${a_standard_max_message_size}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_custom_max_message_size':
                    work += `${a_custom_max_message_size}${v.value}${nl_or_cr_nl(v)}${c_terminal}`;
                    break;
                case 'a_setup_actpass':
                    work += `${a_setup_actpass}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_setup_active':
                    work += `${a_setup_active}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_mid_zero':
                    work += `${a_mid_zero}${nl_or_cr_nl(v)}`;
                    break;
                case 's_dash':
                    work += `${s_dash}${nl_or_cr_nl(v)}`;
                    break;
                case 't_zero_zero':
                    work += `${t_zero_zero}${nl_or_cr_nl(v)}`;
                    break;
                case 'standard_moz_origin':
                    const smo = v, mvs = moz_ver(smo.moz_ver);
                    work += `${standard_moz_origin}${mvs}${smo.sess}${c_terminal}${nl_or_cr_nl(v)}`;
                    break;
                case 'unknown_terminate':
                    work += `${unknown_terminate}${v.value}`;
                    break;
                default:
                    const exhaustiveCheck = v_kind;
                    throw new TypeError(`Impossible bytestring symbol found: ${JSON.stringify(exhaustiveCheck)}`);
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
            case version_zero_line:
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
                work += `a=max-message-size:262144\r\n`;
                break;
            case a_custom_max_message_size:
                scan_forward_to_null('a=max-message-size:', 'a_custom_max_message_size', unpack_decimal);
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
            case standard_moz_origin:
                scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined, true);
                scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                work += ' 0 IN IP4 0.0.0.0\r\n';
                break;
            case unknown_terminate:
                work += bytestring.substring(i + 1, iC);
                i = iC;
                break;
            default:
                throw new TypeError(`Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);
        }
    }
    return `${work}${at_end}`;
}

exports.deparse = deparse;
exports.pack = pack;
exports.parse = parse;
exports.unpack = unpack;
