import * as symbols from './symbols';
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
    for (i = 0, iC = bytestring.length; i < iC; ++i) {
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
            case symbols.standard_moz_origin:
                scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined, true);
                scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
                work += ' 0 IN IP4 0.0.0.0\r\n';
                break;
            case symbols.unknown_terminate:
                work += bytestring.substring(i + 1, iC);
                i = iC;
                break;
            case symbols.standard_local_candidate:
                scan_forward_to_null(`a=candidate:`, 'standard_local_candidate_1', undefined, true);
                scan_forward_to_null(' ', 'standard_local_candidate_2', undefined, true);
                scan_forward_to_null(' udp ', 'standard_local_candidate_3', undefined, true);
                scan_forward_to_null(' ', 'standard_local_candidate_4', undefined, true);
                scan_forward_to_null('.local ', 'standard_local_candidate_5', undefined, true);
                work += ' typ host generation 0 network-cost 999';
                break;
            case symbols.standard_remote_candidate:
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
            default:
                throw new TypeError(`Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);
        }
    }
    return `${work}${at_end}`;
}
export { unpack };