
import * as symbols from './symbols';





function unpack(bytestring: string): string {

  if (bytestring === '') { return ''; }

  let i      : number,
      iC     : number,
      work   : string = '',
      at_end : string = '';


  function unpack_none(s: string)    { return s; }
  function unpack_decimal(d: string) { return d; }  // eventually this will be a null-not-containing number encoding


  function scan_forward_to_null(prefix: string, throw_label: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    let found: false | number = false,
        end,
        finished: boolean = false;

    for (end=i+1; end<iC && (finished === false); ++end) {
      if (bytestring.charAt(end) === symbols.c_terminal) {
        found    = end;
        end      = iC;
        finished = true;
      }
    }

    if (found === false) { throw new RangeError(`No terminal null for ${throw_label} at ${i}`); }
    const unpacked = unpacker(bytestring.substring(i+1, found));

    work   += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;  // todo handle soft \n
    i       = found;                                           // skip forward to located null

  }


  for (i=0, iC = bytestring.length; i<iC; ++i) {

    switch (bytestring.charAt(i)) {

      case symbols.offer:
        work   += '{"type":"offer","sdp":"';
        at_end  = '"}' + at_end;
        break;

      case symbols.answer:
        work   += '{"type":"answer","sdp":"';
        at_end  = '"}' + at_end;
        break;

      case symbols.unknown_line:
        scan_forward_to_null('', 'unknown_line');
        break;

      case symbols.a_msid_semantic_ns:
        work += `a=msid-semantic:WMS\r\n`;  // todo handle soft \n
        break;

      case symbols.a_msid_semantic_ws:
        work += `a=msid-semantic: WMS\r\n`;  // todo handle soft \n
        break;

      case symbols.a_extmap_allow_mixed:
        work += `a=extmap-allow-mixed\r\n`;  // todo handle soft \n
        break;

      case symbols.a_standard_sctp_port:
        work += `a=sctp-port:5000\r\n`;  // todo handle soft \n
        break;

      case symbols.a_custom_sctp_port:
        scan_forward_to_null('a=sctp-port:', 'a_custom_sctp_port', unpack_decimal);
        break;

      case symbols.a_standard_max_message_size:
        work += 'a=max-message-size:262144\r\n';  // todo handle soft \n
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

      case symbols.standard_origin:
        scan_forward_to_null('o=- ',     'standard_moz_origin_1', undefined, true);
        scan_forward_to_null(' ',        'standard_moz_origin_2', undefined, true);
        scan_forward_to_null(' IN IP4 ', 'standard_moz_origin_3', undefined, true);
        work += '\r\n';
        break;

      case symbols.standard_moz_origin:
        scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined, true);
        scan_forward_to_null(' ',                            'standard_moz_origin_2', undefined, true);
        work += ' 0 IN IP4 0.0.0.0\r\n';
        break;

      case symbols.unknown_terminate:
        work += bytestring.substring(i+1, iC);  // sum everything remaining into the work queue
        i = iC; // end the loop
        break;

      case symbols.standard_local_candidate:
        scan_forward_to_null(`a=candidate:`,      'standard_local_candidate_1', undefined, true);
        scan_forward_to_null(' ',                 'standard_local_candidate_2', undefined, true);
        scan_forward_to_null(' udp ',             'standard_local_candidate_3', undefined, true);
        scan_forward_to_null(' ',                 'standard_local_candidate_4', undefined, true);
        scan_forward_to_null('.local ',           'standard_local_candidate_5', undefined, true);
        work += ' typ host generation 0 network-cost 999';
        break;

      case symbols.standard_guid_candidate:
        scan_forward_to_null(`a=candidate:`,                       'standard_guid_candidate_1', undefined, true);
        scan_forward_to_null(' ',                                  'standard_guid_candidate_2', undefined, true);
        scan_forward_to_null(' udp ',                              'standard_guid_candidate_3', undefined, true);
        scan_forward_to_null(' ',                                  'standard_guid_candidate_4', undefined, true);
        scan_forward_to_null(' ',                                  'standard_guid_candidate_4', undefined, true);
        scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_5', undefined, true);
        break;

      case symbols.standard_agen_tcp_candidate:
        scan_forward_to_null(`a=candidate:`,                                      'standard_guid_candidate_1', undefined, true);
        scan_forward_to_null(' ',                                                 'standard_guid_candidate_2', undefined, true);
        scan_forward_to_null(' tcp ',                                             'standard_guid_candidate_3', undefined, true);
        scan_forward_to_null(' ',                                                 'standard_guid_candidate_4', undefined, true);
        scan_forward_to_null(' ',                                                 'standard_guid_candidate_4', undefined, true);
        scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, true);
        break;

      case symbols.standard_remote_candidate:
        scan_forward_to_null(`a=candidate:`,      'standard_remote_candidate_1', undefined, true);
        scan_forward_to_null(' ',                 'standard_remote_candidate_2', undefined, true);
        scan_forward_to_null(' udp ',             'standard_remote_candidate_3', undefined, true);
        scan_forward_to_null(' ',                 'standard_remote_candidate_4', undefined, true);
        scan_forward_to_null(' ',                 'standard_remote_candidate_5', undefined, true);
        scan_forward_to_null(' typ srflx raddr ', 'standard_remote_candidate_6', undefined, true);
        scan_forward_to_null(' rport ',           'standard_remote_candidate_7', undefined, true);
        scan_forward_to_null(' generation ',      'standard_remote_candidate_8', undefined, true);
        work += ' network-cost 999';
        break;

      case symbols.a_ice_pwd:
        scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd', undefined, true);
        break;

      case symbols.a_ice_pwd_l:
        scan_forward_to_null(`a=ice-pwd:`, 'a_ice_pwd_l', undefined, true);
        break;

      case symbols.a_ice_ufrag:
        scan_forward_to_null(`a=ice-ufrag:`, 'a_ice_ufrag', undefined, true);
        break;

      case symbols.a_fingerprint_sha1_256:
        scan_forward_to_null(`a=fingerprint:sha-256 `, 'a_fingerprint_sha1_256', undefined, true);
        break;

      default:
        throw new TypeError(`Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);

    }

  }

  return `${work}${at_end}`;

}





export { unpack };
