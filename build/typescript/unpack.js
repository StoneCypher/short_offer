import * as symbols from './symbols';
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
function unpack_indexed_guid_waddr(addresses) {
    return function unpack_indexed_guid(str) {
        const idx = str.codePointAt(0);
        if (idx === undefined) {
            throw new Error('Index string was empty');
        }
        const addr = addresses[idx];
        if (addr === undefined) {
            throw new Error(`Referenced index ${idx} for ipv6 addresses doesn't exist`);
        }
        const ret = addr.trim().split(':').join('');
        return `${ret.substring(0, 8)}-${ret.substring(8, 12)}-${ret.substring(12, 16)}-${ret.substring(16, 20)}-${ret.substring(20, 32)}`;
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
            if (bytestring.charAt(end) === symbols.c_terminal) {
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
    function scan_forward_exactly_32_bytes(prefix, unpacker = unpack_none, skip_r_n = false) {
        const unpacked = unpacker(bytestring.substring(i + 1, i + 33));
        work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
        i += 32;
    }
    let ipv4_list = ['0', '2130706433'];
    let ipv4_addr_count = bytestring.charCodeAt(0);
    ++stream_start;
    for (let i = 0; i < ipv4_addr_count; ++i) {
        ipv4_list[i + 2] = four_bytes_to_decimal_ipv4_string(bytestring.substring(stream_start, stream_start + 4));
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
    const unpack_indexed_guid_l = unpack_indexed_guid_waddr(ipv6_list);
    for (i = stream_start, iC = bytestring.length; i < iC; ++i) {
        switch (bytestring.charAt(i)) {
            case symbols.offer:
                work += '{"type":"offer","sdp":"';
                at_end = '"}' + at_end;
                break;
            case symbols.answer:
                work += '{"type":"answer","sdp":"';
                at_end = '"}' + at_end;
                break;
            case symbols.unknown_line:
                scan_forward_to_null('', 'unknown_line');
                break;
            case symbols.a_msid_semantic_ns:
                work += `a=msid-semantic:WMS\r\n`;
                break;
            case symbols.a_msid_semantic_star_ns:
                work += `a=msid-semantic:WMS *\r\n`;
                break;
            case symbols.a_msid_semantic_ws:
                work += `a=msid-semantic: WMS\r\n`;
                break;
            case symbols.a_extmap_allow_mixed:
                work += `a=extmap-allow-mixed\r\n`;
                break;
            case symbols.a_standard_sctp_port:
                work += `a=sctp-port:5000\r\n`;
                break;
            case symbols.a_custom_sctp_port:
                scan_forward_to_null('a=sctp-port:', 'a_custom_sctp_port', unpack_decimal);
                break;
            case symbols.a_standard_max_message_size:
                work += 'a=max-message-size:262144\r\n';
                break;
            case symbols.a_custom_max_message_size:
                scan_forward_exactly_eight_bytes('a=max-message-size:', unpack_i64, false);
                break;
            case symbols.a_setup_actpass:
                work += 'a=setup:actpass\r\n';
                break;
            case symbols.a_setup_active:
                work += 'a=setup:active\r\n';
                break;
            case symbols.version_zero_line:
                work += 'v=0\r\n';
                break;
            case symbols.version_line:
                scan_forward_to_null('v=', 'version_line');
                break;
            case symbols.a_mid_zero:
                work += 'a=mid:0\r\n';
                break;
            case symbols.s_dash:
                work += 's=-\r\n';
                break;
            case symbols.t_zero_zero:
                work += 't=0 0\r\n';
                break;
            case symbols.b_as_30:
                work += 'b=AS:30\r\n';
                break;
            case symbols.a_group_bundle_0:
                work += 'a=group:BUNDLE 0\r\n';
                break;
            case symbols.a_send_recv:
                work += 'a=sendrecv\r\n';
                break;
            case symbols.a_end_of_candidates:
                work += 'a=end-of-candidates\r\n';
                break;
            case symbols.c_claim_ip4:
                scan_forward_exactly_one_byte('c=IN IP4 ', unpack_indexed_ipv4_l, true);
                work += '\r\n';
                break;
            case symbols.standard_m_application:
                scan_forward_exactly_two_bytes('m=application ', unpack_i16, true);
                work += ' UDP/DTLS/SCTP webrtc-datachannel\r\n';
                break;
            case symbols.a_ice_options_trickle:
                work += 'a=ice-options:trickle\r\n';
                break;
            case symbols.standard_origin:
                scan_forward_exactly_eight_bytes('o=- ', unpack_i64, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_one_byte(' IN IP4 ', unpack_indexed_ipv4_l, true);
                work += '\r\n';
                break;
            case symbols.standard_moz_origin:
                scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined, true);
                scan_forward_exactly_eight_bytes(` `, unpack_i64, true);
                work += ' 0 IN IP4 0.0.0.0\r\n';
                break;
            case symbols.unknown_terminate:
                work += bytestring.substring(i + 1, iC);
                i = iC;
                break;
            case symbols.standard_guid_local_candidate:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_guid_l, true);
                scan_forward_exactly_two_bytes('.local ', unpack_i16, true);
                work += ' typ host generation 0 network-cost 999\r\n';
                break;
            case symbols.standard_tcp_guid_local_candidate_ffus_active:
                scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' TCP ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_guid_l, true);
                scan_forward_exactly_two_bytes('.local ', unpack_i16, true);
                work += ' typ host tcptype active\r\n';
                break;
            case symbols.standard_guid_local_candidate_ffus:
                scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' UDP ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_guid_l, true);
                scan_forward_exactly_two_bytes('.local ', unpack_i16, true);
                work += ' typ host\r\n';
                break;
            case symbols.standard_ip6_local_candidate_ffus:
                scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' UDP ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv6_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                work += ' typ host\r\n';
                break;
            case symbols.standard_ip6_local_candidate_ffus_active:
                scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' TCP ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv6_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                work += ' typ host tcptype active\r\n';
                break;
            case symbols.standard_ip4_local_candidate_ffus:
                scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' UDP ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                work += ' typ host\r\n';
                break;
            case symbols.standard_ip4_local_candidate_ffus_active:
                scan_forward_exactly_one_byte(`a=candidate:`, unpack_i8, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' TCP ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                work += ' typ host tcptype active\r\n';
                break;
            case symbols.standard_local_candidate:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                scan_forward_exactly_one_byte(' typ host generation 0 network-id ', unpack_i8, false);
                break;
            case symbols.standard_agen_tcp_candidate:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' tcp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                break;
            case symbols.standard_agen_tcp6_candidate:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' tcp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv6_l, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                break;
            case symbols.standard_agen_udp4_candidate:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                scan_forward_exactly_one_byte(' typ srflx raddr ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' rport ', unpack_i16, true);
                scan_forward_exactly_one_byte(' generation 0 network-id ', unpack_i8, false);
                break;
            case symbols.standard_agen_udp6_host_candidate:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv6_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                scan_forward_exactly_one_byte(' typ host generation 0 network-id ', unpack_i8, false);
                break;
            case symbols.standard_remote_candidate:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' udp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                scan_forward_exactly_one_byte(' typ srflx raddr ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' rport ', unpack_i16, true);
                scan_forward_exactly_two_bytes(' generation ', unpack_i16, true);
                work += ' network-cost 999\r\n';
                break;
            case symbols.standard_remote_candidate_ffus:
                scan_forward_exactly_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_one_byte(' ', unpack_i8, true);
                scan_forward_exactly_four_bytes(' UDP ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' ', unpack_i16, true);
                scan_forward_exactly_one_byte(' typ srflx raddr ', unpack_indexed_ipv4_l, true);
                scan_forward_exactly_two_bytes(' rport ', unpack_i16, false);
                break;
            case symbols.a_ice_pwd:
                scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd', undefined, false);
                break;
            case symbols.a_ice_pwd_l:
                scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd_l', undefined, false);
                break;
            case symbols.a_ice_pwd_v:
                scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd_v', undefined, false);
                break;
            case symbols.falkon_a_ice_ufrag_4:
                scan_forward_to_null(`ice-ufrag:`, 'falkon_a_ice_ufrag_4', undefined, false);
                break;
            case symbols.a_ice_ufrag_4:
                scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag_4', undefined, false);
                break;
            case symbols.a_ice_ufrag_8:
                scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag_8', undefined, false);
                break;
            case symbols.a_fingerprint_sha1_256:
                scan_forward_exactly_32_bytes(`a=fingerprint:sha-256 `, unpack_sha_colons, false);
                break;
            default:
                throw new TypeError(`[unpack] Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding or unhandled symbol'`);
        }
    }
    return `${work}${at_end}`;
}
export { unpack };
