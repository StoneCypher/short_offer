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
function unpack_bytized_ipv4(str) {
    const a = str.codePointAt(0), b = str.codePointAt(1), c = str.codePointAt(2), d = str.codePointAt(3);
    return `${a}.${b}.${c}.${d}`;
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
function four_bytes_to_decimal_ipv4_string(bytes) {
    const a = bytes.charCodeAt(0), b = bytes.charCodeAt(1), c = bytes.charCodeAt(2), d = bytes.charCodeAt(3);
    return String((((((a * 256) + b) * 256) + c) * 256) + d);
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
    function scan_forward_one_byte(prefix, unpacker = unpack_none, skip_r_n = false) {
        const unpacked = unpacker(bytestring.substring(i + 1, i + 2));
        work += `${prefix}${unpacked}${skip_r_n ? '' : '\r\n'}`;
        i += 2;
    }
    function scan_forward_four_bytes(prefix, unpacker = unpack_none, skip_r_n = false) {
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
    console.log(`Reading ${ipv4_addr_count} addresses`);
    for (let i = 0; i < ipv4_addr_count; ++i) {
        ipv4_list[i] = four_bytes_to_decimal_ipv4_string(bytestring.substring(stream_start, stream_start + 4));
        stream_start += 4;
    }
    const unpack_indexed_ipv4_l = unpack_indexed_ipv4_waddr(ipv4_list);
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
                scan_forward_to_null('a=max-message-size:', 'a_custom_max_message_size', unpack_decimal);
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
                scan_forward_to_null('m=application ', 'standard_m_application', undefined, true);
                work += ' UDP/DTLS/SCTP webrtc-datachannel\r\n';
                break;
            case symbols.a_ice_options_trickle:
                work += 'a=ice-options:trickle\r\n';
                break;
            case symbols.standard_origin:
                scan_forward_to_null('o=- ', 'standard_moz_origin_1', undefined, true);
                scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                scan_forward_exactly_one_byte(' IN IP4 ', unpack_indexed_ipv4_l, true);
                work += '\r\n';
                break;
            case symbols.standard_moz_origin:
                scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined, true);
                scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                work += ' 0 IN IP4 0.0.0.0\r\n';
                break;
            case symbols.unknown_terminate:
                work += bytestring.substring(i + 1, iC);
                i = iC;
                break;
            case symbols.standard_guid_local_candidate:
                scan_forward_to_null(`a=candidate:`, 'standard_local_candidate_1', undefined, true);
                scan_forward_to_null(' ', 'standard_local_candidate_2', undefined, true);
                scan_forward_to_null(' udp ', 'standard_local_candidate_3', undefined, true);
                scan_forward_to_null(' ', 'standard_local_candidate_4', unpack_guid, true);
                scan_forward_to_null('.local ', 'standard_local_candidate_5', undefined, true);
                work += ' typ host generation 0 network-cost 999\r\n';
                break;
            case symbols.standard_guid_local_candidate_ffus:
                scan_forward_to_null(`a=candidate:`, 'standard_local_candidate_1', undefined, true);
                scan_forward_to_null(' ', 'standard_local_candidate_2', undefined, true);
                scan_forward_to_null(' UDP ', 'standard_local_candidate_3', undefined, true);
                scan_forward_to_null(' ', 'standard_local_candidate_4', unpack_guid, true);
                scan_forward_to_null('.local ', 'standard_local_candidate_5', undefined, true);
                work += ' typ host\r\n';
                break;
            case symbols.standard_local_candidate:
                scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_four_bytes(' ', unpack_i32, true);
                scan_forward_to_null(' udp ', 'standard_guid_candidate_3', undefined, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                break;
            case symbols.standard_agen_tcp_candidate:
                scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_one_byte(' ', unpack_i8, true);
                scan_forward_four_bytes(' tcp ', unpack_i32, true);
                scan_forward_exactly_one_byte(' ', unpack_indexed_ipv4_l, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                break;
            case symbols.standard_agen_tcp6_candidate:
                scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_one_byte(' ', unpack_i8, true);
                scan_forward_four_bytes(' tcp ', unpack_i32, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
                break;
            case symbols.standard_agen_udp4_candidate:
                scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_one_byte(' ', unpack_i8, true);
                scan_forward_four_bytes(' udp ', unpack_i32, true);
                scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_5', undefined, true);
                scan_forward_four_bytes(' typ srflx raddr ', unpack_bytized_ipv4, true);
                scan_forward_to_null(' rport ', 'standard_guid_candidate_7', undefined, true);
                scan_forward_to_null(' generation 0 network-id ', 'standard_guid_candidate_8', undefined, false);
                break;
            case symbols.standard_agen_udp6_host_candidate:
                scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_one_byte(' ', unpack_i8, true);
                scan_forward_four_bytes(' udp ', unpack_i32, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_4', undefined, true);
                scan_forward_to_null(' ', 'standard_guid_candidate_5', undefined, true);
                scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_6', undefined, false);
                break;
            case symbols.standard_remote_candidate:
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
            case symbols.standard_remote_candidate_ffus:
                scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
                scan_forward_one_byte(' ', unpack_i8, true);
                scan_forward_four_bytes(' UDP ', unpack_i32, true);
                scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
                scan_forward_to_null(' ', 'standard_remote_candidate_5', undefined, true);
                scan_forward_four_bytes(' typ srflx raddr ', unpack_bytized_ipv4, true);
                scan_forward_to_null(' rport ', 'standard_remote_candidate_7', undefined, false);
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
            case symbols.a_ice_ufrag_4:
                scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag_4', undefined, false);
                break;
            case symbols.a_ice_ufrag_8:
                scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag_8', undefined, false);
                break;
            case symbols.a_fingerprint_sha1_256:
                scan_forward_32_bytes(`a=fingerprint:sha-256 `, unpack_sha_colons, false);
                break;
            default:
                throw new TypeError(`[unpack] Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);
        }
    }
    return `${work}${at_end}`;
}
export { unpack };
