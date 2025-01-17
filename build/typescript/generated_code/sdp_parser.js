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
    var peg$FAILED = {}, peg$startRuleFunctions = { RawDocument: peg$parseRawDocument, IP6N: peg$parseIP6N, AStandardTcpGuidLocalCandidateFfUSActive: peg$parseAStandardTcpGuidLocalCandidateFfUSActive }, peg$startRuleFunction = peg$parseRawDocument, peg$c0 = /^[0-9]/, peg$c1 = peg$classExpectation([["0", "9"]], false, false), peg$c2 = function (d) { return BigInt(d.join(''), 10); }, peg$c3 = /^[0-9a-fA-F]/, peg$c4 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false), peg$c5 = function (a, b) { return `${a}${b}`; }, peg$c6 = function (a, b, c, d) { return [a, b, c, d].join(''); }, peg$c7 = function (a, b, c, d, e, f, g, h) { return [a, b, c, d, e, f, g, h].join(''); }, peg$c8 = function (a, b, c, d, e, f, g, h, i, j, k, l) { return [a, b, c, d, e, f, g, h, i, j, k, l].join(''); }, peg$c9 = ":", peg$c10 = peg$literalExpectation(":", false), peg$c11 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F].join(''); }, peg$c12 = /^[0-9a-zA-Z\/+]/, peg$c13 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"], "/", "+"], false, false), peg$c14 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v].join(''); }, peg$c15 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x].join(''); }, peg$c16 = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af) { return [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af].join(''); }, peg$c17 = "-", peg$c18 = peg$literalExpectation("-", false), peg$c19 = function (a, b, c, d, e) { return [a, b, c, d, e].join(''); }, peg$c20 = ".", peg$c21 = peg$literalExpectation(".", false), peg$c22 = function (a, b, c, d) { return ((((((a * 256n) + b) * 256n) + c) * 256n) + d).toString(); }, peg$c23 = function (Addr) { return Addr.map(n => n.toString(16).toUpperCase().padStart(4, '0')).join(':'); }, peg$c24 = function (A, B, C, D, E, F, G, H) { return [Number(A), Number(B), Number(C), Number(D), Number(E), Number(F), Number(G), Number(H)]; }, peg$c25 = /^[0-9a-zA-Z]/, peg$c26 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"]], false, false), peg$c27 = function (a, b, c, d) { return parseInt(`${a}${b ?? ''}${c ?? ''}${d ?? ''}`, 16); }, peg$c28 = "::", peg$c29 = peg$literalExpectation("::", false), peg$c30 = function (A, B, C, D, E, F, G, H) { return unelide([], [A, B, C, D, E, F, G, H]); }, peg$c31 = function (A, B, C, D, E, F, G, H) { return unelide([A], [B, C, D, E, F, G, H]); }, peg$c32 = function (A, B, C, D, E, F, G, H) { return unelide([A, B], [C, D, E, F, G, H]); }, peg$c33 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C], [D, E, F, G, H]); }, peg$c34 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D], [E, F, G, H]); }, peg$c35 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E], [F, G, H]); }, peg$c36 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F], [G, H]); }, peg$c37 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F, G], [H]); }, peg$c38 = function (A, B, C, D, E, F, G, H) { return unelide([A, B, C, D, E, F, G, H], []); }, peg$c39 = /^[ \r\n\t\x0B]/, peg$c40 = peg$classExpectation([" ", "\r", "\n", "\t", "\x0B"], false, false), peg$c41 = "{", peg$c42 = peg$literalExpectation("{", false), peg$c43 = "\"type\"", peg$c44 = peg$literalExpectation("\"type\"", false), peg$c45 = "\"offer\"", peg$c46 = peg$literalExpectation("\"offer\"", false), peg$c47 = ",", peg$c48 = peg$literalExpectation(",", false), peg$c49 = "\"sdp\"", peg$c50 = peg$literalExpectation("\"sdp\"", false), peg$c51 = "\"", peg$c52 = peg$literalExpectation("\"", false), peg$c53 = "}", peg$c54 = peg$literalExpectation("}", false), peg$c55 = function (s) { return ast('offer', s); }, peg$c56 = "\"answer\"", peg$c57 = peg$literalExpectation("\"answer\"", false), peg$c58 = function (s) { return ast('answer', s); }, peg$c59 = "v=0", peg$c60 = peg$literalExpectation("v=0", false), peg$c61 = function (us) { return ast('version_zero_line', undefined); }, peg$c62 = "v=", peg$c63 = peg$literalExpectation("v=", false), peg$c64 = function (us) { return ast('version_line', us); }, peg$c65 = "a=sendrecv", peg$c66 = peg$literalExpectation("a=sendrecv", false), peg$c67 = function (us) { return ast('a_send_recv', us); }, peg$c68 = "b=AS:30", peg$c69 = peg$literalExpectation("b=AS:30", false), peg$c70 = function () { return ast('b_as_30'); }, peg$c71 = "a=end-of-candidates", peg$c72 = peg$literalExpectation("a=end-of-candidates", false), peg$c73 = function (us) { return ast('a_end_of_candidates', us); }, peg$c74 = "a=msid-semantic:WMS", peg$c75 = peg$literalExpectation("a=msid-semantic:WMS", false), peg$c76 = function () { return ast('a_msid_semantic_ns'); }, peg$c77 = "a=msid-semantic:WMS *", peg$c78 = peg$literalExpectation("a=msid-semantic:WMS *", false), peg$c79 = function () { return ast('a_msid_semantic_star_ns'); }, peg$c80 = "a=msid-semantic: WMS", peg$c81 = peg$literalExpectation("a=msid-semantic: WMS", false), peg$c82 = function () { return ast('a_msid_semantic_ws'); }, peg$c83 = "a=extmap-allow-mixed", peg$c84 = peg$literalExpectation("a=extmap-allow-mixed", false), peg$c85 = function () { return ast('a_extmap_allow_mixed'); }, peg$c86 = "a=setup:actpass", peg$c87 = peg$literalExpectation("a=setup:actpass", false), peg$c88 = function () { return ast('a_setup_actpass'); }, peg$c89 = "a=setup:active", peg$c90 = peg$literalExpectation("a=setup:active", false), peg$c91 = function () { return ast('a_setup_active'); }, peg$c92 = "a=mid:0", peg$c93 = peg$literalExpectation("a=mid:0", false), peg$c94 = function () { return ast('a_mid_zero'); }, peg$c95 = "s=-", peg$c96 = peg$literalExpectation("s=-", false), peg$c97 = function () { return ast('s_dash'); }, peg$c98 = function (maj, min, patch) { return ast('moz_v_num', [maj, min, patch]); }, peg$c99 = function (maj, min) { return ast('moz_v_num', [maj, min, undefined]); }, peg$c100 = "o=- ", peg$c101 = peg$literalExpectation("o=- ", false), peg$c102 = " ", peg$c103 = peg$literalExpectation(" ", false), peg$c104 = " IN IP4 ", peg$c105 = peg$literalExpectation(" IN IP4 ", false), peg$c106 = function (msess, d, i) { return ast('standard_origin', [msess, d, i], [i]); }, peg$c107 = "o=mozilla...THIS_IS_SDPARTA-", peg$c108 = peg$literalExpectation("o=mozilla...THIS_IS_SDPARTA-", false), peg$c109 = " 0 IN IP4 0.0.0.0", peg$c110 = peg$literalExpectation(" 0 IN IP4 0.0.0.0", false), peg$c111 = function (mv, msess) { return ast('standard_moz_origin', [mv, msess]); }, peg$c112 = "t=0 0", peg$c113 = peg$literalExpectation("t=0 0", false), peg$c114 = function () { return ast('t_zero_zero'); }, peg$c115 = "a=ice-options:trickle", peg$c116 = peg$literalExpectation("a=ice-options:trickle", false), peg$c117 = function () { return ast('a_ice_options_trickle'); }, peg$c118 = "a=sctp-port:5000", peg$c119 = peg$literalExpectation("a=sctp-port:5000", false), peg$c120 = function () { return ast('a_standard_sctp_port'); }, peg$c121 = "a=sctp-port:", peg$c122 = peg$literalExpectation("a=sctp-port:", false), peg$c123 = function (data) { return ast('a_custom_sctp_port', data); }, peg$c124 = "a=max-message-size:262144", peg$c125 = peg$literalExpectation("a=max-message-size:262144", false), peg$c126 = function () { return ast('a_standard_max_message_size'); }, peg$c127 = "a=max-message-size:", peg$c128 = peg$literalExpectation("a=max-message-size:", false), peg$c129 = function (data) { return ast('a_custom_max_message_size', data); }, peg$c130 = "a=candidate:", peg$c131 = peg$literalExpectation("a=candidate:", false), peg$c132 = " udp ", peg$c133 = peg$literalExpectation(" udp ", false), peg$c134 = " typ host generation 0 network-id ", peg$c135 = peg$literalExpectation(" typ host generation 0 network-id ", false), peg$c136 = function (d1, d2, d3, i, p, d4) { return ast('standard_local_candidate', [d1, d2, d3, i, p, d4], [i]); }, peg$c137 = ".local ", peg$c138 = peg$literalExpectation(".local ", false), peg$c139 = " typ host generation 0 network-cost 999", peg$c140 = peg$literalExpectation(" typ host generation 0 network-cost 999", false), peg$c141 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate', [d1, d2, d3, g, d4], undefined, [g]); }, peg$c142 = " UDP ", peg$c143 = peg$literalExpectation(" UDP ", false), peg$c144 = " typ host", peg$c145 = peg$literalExpectation(" typ host", false), peg$c146 = function (d1, d2, d3, i, d4) { return ast('standard_ip6_local_candidate_ffus', [d1, d2, d3, i, d4], undefined, [i]); }, peg$c147 = " TCP ", peg$c148 = peg$literalExpectation(" TCP ", false), peg$c149 = " typ host tcptype active", peg$c150 = peg$literalExpectation(" typ host tcptype active", false), peg$c151 = function (d1, d2, d3, i, d4) { return ast('standard_ip6_local_candidate_ffus_active', [d1, d2, d3, i, d4], undefined, [i]); }, peg$c152 = function (d1, d2, d3, i, d4) { return ast('standard_ip4_local_candidate_ffus', [d1, d2, d3, i, d4]); }, peg$c153 = function (d1, d2, d3, i, d4) { return ast('standard_ip4_local_candidate_ffus_active', [d1, d2, d3, i, d4]); }, peg$c154 = function (d1, d2, d3, g, d4) { return ast('standard_tcp_guid_local_candidate_ffus_active', [d1, d2, d3, g, d4], undefined, [g]); }, peg$c155 = function (d1, d2, d3, g, d4) { return ast('standard_guid_local_candidate_ffus', [d1, d2, d3, g, d4], undefined, [g]); }, peg$c156 = " typ srflx raddr ", peg$c157 = peg$literalExpectation(" typ srflx raddr ", false), peg$c158 = " rport ", peg$c159 = peg$literalExpectation(" rport ", false), peg$c160 = " generation ", peg$c161 = peg$literalExpectation(" generation ", false), peg$c162 = " network-cost 999", peg$c163 = peg$literalExpectation(" network-cost 999", false), peg$c164 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_remote_candidate', [d1, d2, d3, i1, d4, i2, d5, d6], [i1, i2]); }, peg$c165 = function (d1, d2, d3, i1, d4, i2, d5) { return ast('standard_remote_candidate_ffus', [d1, d2, d3, i1, d4, i2, d5], [i1, i2]); }, peg$c166 = " tcp ", peg$c167 = peg$literalExpectation(" tcp ", false), peg$c168 = " typ host tcptype active generation 0 network-id ", peg$c169 = peg$literalExpectation(" typ host tcptype active generation 0 network-id ", false), peg$c170 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp_candidate', [d1, d2, d3, i1, d4, d5], [i1]); }, peg$c171 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_tcp6_candidate', [d1, d2, d3, i1, d4, d5], undefined, [i1]); }, peg$c172 = " generation 0 network-id ", peg$c173 = peg$literalExpectation(" generation 0 network-id ", false), peg$c174 = function (d1, d2, d3, i1, d4, i2, d5, d6) { return ast('standard_agen_udp4_candidate', [d1, d2, d3, i1, d4, i2, d5, d6], [i1]); }, peg$c175 = function (d1, d2, d3, i1, d4, d5) { return ast('standard_agen_udp6_host_candidate', [d1, d2, d3, i1, d4, d5], undefined, [i1]); }, peg$c176 = "a=ice-pwd:", peg$c177 = peg$literalExpectation("a=ice-pwd:", false), peg$c178 = function (data) { return ast('a_ice_pwd', data); }, peg$c179 = function (data) { return ast('a_ice_pwd_l', data); }, peg$c180 = function (data) { return ast('a_ice_pwd_v', data); }, peg$c181 = "a=ice-ufrag:", peg$c182 = peg$literalExpectation("a=ice-ufrag:", false), peg$c183 = function (data) { return ast('a_ice_ufrag_4', data); }, peg$c184 = "ice-ufrag:", peg$c185 = peg$literalExpectation("ice-ufrag:", false), peg$c186 = function (data) { return ast('falkon_a_ice_ufrag_4', data); }, peg$c187 = function (data) { return ast('a_ice_ufrag_8', data); }, peg$c188 = "a=fingerprint:sha-256 ", peg$c189 = peg$literalExpectation("a=fingerprint:sha-256 ", false), peg$c190 = function (data) { return ast('a_fingerprint_sha1_256', data); }, peg$c191 = "a=group:BUNDLE 0", peg$c192 = peg$literalExpectation("a=group:BUNDLE 0", false), peg$c193 = function () { return ast('a_group_bundle_0'); }, peg$c194 = "c=IN IP4 ", peg$c195 = peg$literalExpectation("c=IN IP4 ", false), peg$c196 = function (data) { return ast('c_claim_ip4', data, [data]); }, peg$c197 = "m=application ", peg$c198 = peg$literalExpectation("m=application ", false), peg$c199 = " UDP/DTLS/SCTP webrtc-datachannel", peg$c200 = peg$literalExpectation(" UDP/DTLS/SCTP webrtc-datachannel", false), peg$c201 = function (data) { return ast('standard_m_application', data); }, peg$c202 = function (us) { return ast('unknown_line', us); }, peg$c203 = /^[^'\r\n']/, peg$c204 = peg$classExpectation(["'", "\r", "\n", "'"], true, false), peg$c205 = "\r\n", peg$c206 = peg$literalExpectation("\r\n", false), peg$c207 = function (rl) { return rl.join(''); }, peg$c208 = peg$anyExpectation(), peg$c209 = function (uts) { return ast('unknown_terminate', uts.join('')); }, peg$currPos = 0, peg$savedPos = 0, peg$posDetailsCache = [{ line: 1, column: 1 }], peg$maxFailPos = 0, peg$maxFailExpected = [], peg$silentFails = 0, peg$result;
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
    function peg$parseDigit() {
        var s0;
        if (peg$c0.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
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
    function peg$parseIceChar() {
        var s0;
        if (peg$c12.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
                        if (peg$silentFails === 0) {
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
                                if (peg$silentFails === 0) {
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
                                        if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
                        if (peg$silentFails === 0) {
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
                                if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
                        if (peg$silentFails === 0) {
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
                                if (peg$silentFails === 0) {
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
                                        if (peg$silentFails === 0) {
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
                                                if (peg$silentFails === 0) {
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
                                                        if (peg$silentFails === 0) {
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
                                                                if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                        if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                        if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
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
                                                            if (peg$silentFails === 0) {
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
                                                                    if (peg$silentFails === 0) {
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
                                                                            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
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
                                                            if (peg$silentFails === 0) {
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
                                                                    if (peg$silentFails === 0) {
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
                                                                            if (peg$silentFails === 0) {
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
                                                                                    if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
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
                                                            if (peg$silentFails === 0) {
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
                                                                    if (peg$silentFails === 0) {
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
                                                                            if (peg$silentFails === 0) {
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
                                                                                    if (peg$silentFails === 0) {
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
                                                                                                                    s0 = peg$parseAStandardIp6LocalCandidateFfUS();
                                                                                                                    if (s0 === peg$FAILED) {
                                                                                                                        s0 = peg$parseAStandardIp6LocalCandidateFfUSActive();
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
            if (peg$silentFails === 0) {
                peg$fail(peg$c60);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseUntilSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c61(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
                        if (peg$silentFails === 0) {
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
                if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
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
    function peg$parseAStandardIp6LocalCandidateFfUS() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c130) {
            s1 = peg$c130;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
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
    function peg$parseAStandardIp6LocalCandidateFfUSActive() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c130) {
            s1 = peg$c130;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
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
    function peg$parseAStandardIp4LocalCandidateFfUS() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c130) {
            s1 = peg$c130;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c145);
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
    function peg$parseAStandardIp4LocalCandidateFfUSActive() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c130) {
            s1 = peg$c130;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c150);
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
    function peg$parseAStandardTcpGuidLocalCandidateFfUSActive() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c130) {
            s1 = peg$c130;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c150);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseCapAtSeparator();
                                                    if (s12 !== peg$FAILED) {
                                                        peg$savedPos = s0;
                                                        s1 = peg$c154(s2, s4, s6, s8, s10);
                                                        s0 = s1;
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c145);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseCapAtSeparator();
                                                    if (s12 !== peg$FAILED) {
                                                        peg$savedPos = s0;
                                                        s1 = peg$c155(s2, s4, s6, s8, s10);
                                                        s0 = s1;
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c103);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 17) === peg$c156) {
                                                    s11 = peg$c156;
                                                    peg$currPos += 17;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c157);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseIP4();
                                                    if (s12 !== peg$FAILED) {
                                                        if (input.substr(peg$currPos, 7) === peg$c158) {
                                                            s13 = peg$c158;
                                                            peg$currPos += 7;
                                                        }
                                                        else {
                                                            s13 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                                peg$fail(peg$c159);
                                                            }
                                                        }
                                                        if (s13 !== peg$FAILED) {
                                                            s14 = peg$parseDecimal();
                                                            if (s14 !== peg$FAILED) {
                                                                if (input.substr(peg$currPos, 12) === peg$c160) {
                                                                    s15 = peg$c160;
                                                                    peg$currPos += 12;
                                                                }
                                                                else {
                                                                    s15 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                        peg$fail(peg$c161);
                                                                    }
                                                                }
                                                                if (s15 !== peg$FAILED) {
                                                                    s16 = peg$parseDecimal();
                                                                    if (s16 !== peg$FAILED) {
                                                                        if (input.substr(peg$currPos, 17) === peg$c162) {
                                                                            s17 = peg$c162;
                                                                            peg$currPos += 17;
                                                                        }
                                                                        else {
                                                                            s17 = peg$FAILED;
                                                                            if (peg$silentFails === 0) {
                                                                                peg$fail(peg$c163);
                                                                            }
                                                                        }
                                                                        if (s17 !== peg$FAILED) {
                                                                            s18 = peg$parseCapAtSeparator();
                                                                            if (s18 !== peg$FAILED) {
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c103);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 17) === peg$c156) {
                                                    s11 = peg$c156;
                                                    peg$currPos += 17;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c157);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseIP4();
                                                    if (s12 !== peg$FAILED) {
                                                        if (input.substr(peg$currPos, 7) === peg$c158) {
                                                            s13 = peg$c158;
                                                            peg$currPos += 7;
                                                        }
                                                        else {
                                                            s13 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                                peg$fail(peg$c159);
                                                            }
                                                        }
                                                        if (s13 !== peg$FAILED) {
                                                            s14 = peg$parseDecimal();
                                                            if (s14 !== peg$FAILED) {
                                                                s15 = peg$parseCapAtSeparator();
                                                                if (s15 !== peg$FAILED) {
                                                                    peg$savedPos = s0;
                                                                    s1 = peg$c165(s2, s4, s6, s8, s10, s12, s14);
                                                                    s0 = s1;
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c103);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c166) {
                            s5 = peg$c166;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c167);
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c103);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 49) === peg$c168) {
                                                    s11 = peg$c168;
                                                    peg$currPos += 49;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c169);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseDecimal();
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parseCapAtSeparator();
                                                        if (s13 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c170(s2, s4, s6, s8, s10, s12);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c103);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseDecimal();
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 5) === peg$c166) {
                            s5 = peg$c166;
                            peg$currPos += 5;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c167);
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c103);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 49) === peg$c168) {
                                                    s11 = peg$c168;
                                                    peg$currPos += 49;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c169);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseDecimal();
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parseCapAtSeparator();
                                                        if (s13 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c171(s2, s4, s6, s8, s10, s12);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c103);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parseDecimal();
                                            if (s10 !== peg$FAILED) {
                                                if (input.substr(peg$currPos, 17) === peg$c156) {
                                                    s11 = peg$c156;
                                                    peg$currPos += 17;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c157);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseIP4();
                                                    if (s12 !== peg$FAILED) {
                                                        if (input.substr(peg$currPos, 7) === peg$c158) {
                                                            s13 = peg$c158;
                                                            peg$currPos += 7;
                                                        }
                                                        else {
                                                            s13 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                                peg$fail(peg$c159);
                                                            }
                                                        }
                                                        if (s13 !== peg$FAILED) {
                                                            s14 = peg$parseDecimal();
                                                            if (s14 !== peg$FAILED) {
                                                                if (input.substr(peg$currPos, 25) === peg$c172) {
                                                                    s15 = peg$c172;
                                                                    peg$currPos += 25;
                                                                }
                                                                else {
                                                                    s15 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                        peg$fail(peg$c173);
                                                                    }
                                                                }
                                                                if (s15 !== peg$FAILED) {
                                                                    s16 = peg$parseDecimal();
                                                                    if (s16 !== peg$FAILED) {
                                                                        s17 = peg$parseCapAtSeparator();
                                                                        if (s17 !== peg$FAILED) {
                                                                            peg$savedPos = s0;
                                                                            s1 = peg$c174(s2, s4, s6, s8, s10, s12, s14, s16);
                                                                            s0 = s1;
                                                                        }
                                                                        else {
                                                                            peg$currPos = s0;
                                                                            s0 = peg$FAILED;
                                                                        }
                                                                    }
                                                                    else {
                                                                        peg$currPos = s0;
                                                                        s0 = peg$FAILED;
                                                                    }
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
            if (peg$silentFails === 0) {
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
                    if (peg$silentFails === 0) {
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
                            if (peg$silentFails === 0) {
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
                                    if (peg$silentFails === 0) {
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
                                            if (peg$silentFails === 0) {
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
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c135);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parseDecimal();
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = peg$parseCapAtSeparator();
                                                        if (s13 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c175(s2, s4, s6, s8, s10, s12);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 10) === peg$c176) {
            s1 = peg$c176;
            peg$currPos += 10;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c177);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar22();
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
    function peg$parseAIcePwdL() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 10) === peg$c176) {
            s1 = peg$c176;
            peg$currPos += 10;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c177);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar24();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseCapAtSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c179(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 10) === peg$c176) {
            s1 = peg$c176;
            peg$currPos += 10;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c177);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar32();
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
    function peg$parseAIceUFrag4() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c181) {
            s1 = peg$c181;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c182);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar4();
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
    function peg$parseFalkonAIceUFrag4() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 10) === peg$c184) {
            s1 = peg$c184;
            peg$currPos += 10;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c185);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar4();
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
    function peg$parseAIceUFrag8() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c181) {
            s1 = peg$c181;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c182);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIceChar8();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseCapAtSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c187(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 22) === peg$c188) {
            s1 = peg$c188;
            peg$currPos += 22;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c189);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseCHex64();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseCapAtSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c190(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 16) === peg$c191) {
            s1 = peg$c191;
            peg$currPos += 16;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c192);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseCapAtSeparator();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c193();
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 9) === peg$c194) {
            s1 = peg$c194;
            peg$currPos += 9;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c195);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseIP4();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseCapAtSeparator();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c196(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 14) === peg$c197) {
            s1 = peg$c197;
            peg$currPos += 14;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c198);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseDecimal();
            if (s2 !== peg$FAILED) {
                if (input.substr(peg$currPos, 33) === peg$c199) {
                    s3 = peg$c199;
                    peg$currPos += 33;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c200);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseCapAtSeparator();
                    if (s4 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c201(s2);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
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
            s1 = peg$c202(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseUntilSeparator() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        if (peg$c203.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c204);
            }
        }
        while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c203.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c204);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c205) {
                s2 = peg$c205;
                peg$currPos += 2;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c206);
                }
            }
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c207(s1);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
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
        if (input.substr(peg$currPos, 2) === peg$c205) {
            s0 = peg$c205;
            peg$currPos += 2;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c206);
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
            if (peg$silentFails === 0) {
                peg$fail(peg$c208);
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
                    peg$fail(peg$c208);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c209(s1);
        }
        s0 = s1;
        return s0;
    }
    function not_null(n) {
        return n === null ? '' : n;
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
            'standard_ip6_local_candidate_ffus_active',
            'standard_ip6_local_candidate_ffus',
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
        retval.addresses.v4 = retval.addresses.v4.filter(r => r !== '0');
        retval.addresses.v4 = retval.addresses.v4.filter(r => r !== '2130706433');
        retval.addresses.v4.unshift('2130706433');
        retval.addresses.v4.unshift('0');
        return retval;
    }
    function repeat(count, item) {
        return new Array(count).fill(item);
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
module.exports = {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
};
