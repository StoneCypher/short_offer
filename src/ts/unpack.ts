
import * as symbols from './symbols';





function unpack_sha256(packed_sha256: string): string {
  // makes F27A3A5409D36B6239A2215E879212907CD99CF6CC9BA462BD99591888F792BD
  // 32 bytes to 32 pairs of UPPERCASE nybbles

  let ret = '';

  for (let cursor = 0; cursor < packed_sha256.length; ++cursor) {

    const byte = packed_sha256.charCodeAt(cursor),
          high = (byte & 0xf0) >>> 4,
          low  = (byte & 0x0f);

    ret += `${high.toString(16)}${low.toString(16)}`;

  }

  return ret.toUpperCase();

}





function unpack_sha_colons(str: string) {
  const ustr = unpack_sha256(str);
  return (ustr.match(/.{1,2}/g) || []).join(':');
}





function unpack_bytized_ipv4(str: string) {

  const a = str.codePointAt(0),
        b = str.codePointAt(1),
        c = str.codePointAt(2),
        d = str.codePointAt(3);

  return `${a}.${b}.${c}.${d}`;

}





function unpack_i16(str: string) {

  const a = str.codePointAt(0) ?? 0,
        b = str.codePointAt(1) ?? 0;

  return ((a * 256) + b).toString();

}





function unpack_i32(str: string) {

  const a = str.codePointAt(0) ?? 0,
        b = str.codePointAt(1) ?? 0,
        c = str.codePointAt(2) ?? 0,
        d = str.codePointAt(3) ?? 0;

  return ((((((a * 256) + b) * 256) + c) * 256) + d).toString();

}





function unpack_i32_hex(str: string) {

  const a = str.codePointAt(0) ?? 0,
        b = str.codePointAt(1) ?? 0,
        c = str.codePointAt(2) ?? 0,
        d = str.codePointAt(3) ?? 0;

  return ((((((a * 256) + b) * 256) + c) * 256) + d).toString(16);

}





function unpack_i8(str: string) {

  const d = str.codePointAt(0) ?? 0;

  return (d).toString();

}





function unpack_i64(str: string) {

  let out = BigInt(0);

  for (let i=0; i<8; ++i) {
    out *= 256n;
    out += BigInt(str.codePointAt(i) ?? 0);
  }

  return out.toString();

}





function leftpad8(str: string) {
  return str.padStart(8, '0');
}





function unpack_guid(guid: string) {

  const as_u16s  = guid.match(/.{1,4}/g);
  if (as_u16s === null) {
    throw new Error('illegal unpacking guid');
  }

  const str_guid = as_u16s.map(unpack_i32_hex)
                          .map(leftpad8)
                          .join('');

  return `${str_guid.substring(0,8)}-${str_guid.substring(8,12)}-${str_guid.substring(12,16)}-${str_guid.substring(16,20)}-${str_guid.substring(20,32)}`;

}





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

    work   += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i       = found;                                           // skip forward to located null

  }


  function scan_forward_one_byte(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+2));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 1;

  }


  function scan_forward_two_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+3));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 2;

  }


  function scan_forward_four_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+5));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 4;

  }


  function scan_forward_eight_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+9));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 8;

  }


  function scan_forward_sixteen_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+17));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 16;

  }


  function scan_forward_32_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+33));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 32;

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
        scan_forward_four_bytes('c=IN IP4 ', unpack_bytized_ipv4, true);
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
        scan_forward_eight_bytes('o=- ', unpack_i64, true);
        scan_forward_to_null(' ', 'standard_moz_origin_2', undefined, true);
        scan_forward_four_bytes(' IN IP4 ', unpack_bytized_ipv4, true);
        work += '\r\n';
        break;

      case symbols.standard_moz_origin:
        scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined, true);
        scan_forward_eight_bytes(' ', unpack_i64, true);
        work += ' 0 IN IP4 0.0.0.0\r\n';
        break;

      case symbols.unknown_terminate:
        work += bytestring.substring(i+1, iC);  // sum everything remaining into the work queue
        i = iC; // end the loop
        break;

      case symbols.standard_guid_local_candidate:
        scan_forward_to_null(`a=candidate:`,      'standard_local_candidate_1', undefined,   true);
        scan_forward_to_null(' ',                 'standard_local_candidate_2', undefined,   true);
        scan_forward_to_null(' udp ',             'standard_local_candidate_3', undefined,   true);
        scan_forward_sixteen_bytes(' ', unpack_guid, true);
        scan_forward_to_null('.local ',           'standard_local_candidate_5', undefined,   true);
        work += ' typ host generation 0 network-cost 999\r\n';
        break;

      case symbols.standard_guid_local_candidate_ffus:
        scan_forward_to_null(`a=candidate:`,      'standard_local_candidate_1', undefined,   true);
        scan_forward_to_null(' ',                 'standard_local_candidate_2', undefined,   true);
        scan_forward_four_bytes(' UDP ', unpack_i32, true);
        scan_forward_sixteen_bytes(' ', unpack_guid, true);
        scan_forward_two_bytes('.local ', unpack_i16, true);
        work += ' typ host\r\n';
        break;

      case symbols.standard_local_candidate:
        scan_forward_four_bytes(`a=candidate:`,                                                    unpack_i32,          true);
        scan_forward_four_bytes(' ',                                                               unpack_i32,          true);
        scan_forward_to_null(   ' udp ',                              'standard_guid_candidate_3', undefined,           true);
        scan_forward_four_bytes(' ',                                                               unpack_bytized_ipv4, true);
        scan_forward_to_null(   ' ',                                  'standard_guid_candidate_4', undefined,           true);
        scan_forward_to_null(   ' typ host generation 0 network-id ', 'standard_guid_candidate_5', undefined,           false);
        break;

      case symbols.standard_agen_tcp_candidate:
        scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
        scan_forward_one_byte(' ', unpack_i8, true);
        scan_forward_four_bytes(' tcp ', unpack_i32, true);
        scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
        scan_forward_to_null(' ',                                                 'standard_guid_candidate_4', undefined,   true);
        scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined,   false);
        break;

      case symbols.standard_agen_tcp6_candidate:
        scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
        scan_forward_one_byte(' ', unpack_i8, true);
        scan_forward_four_bytes(' tcp ', unpack_i32, true);
        scan_forward_to_null(' ',                                                 'standard_guid_candidate_4', undefined, true);
        scan_forward_to_null(' ',                                                 'standard_guid_candidate_4', undefined, true);
        scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined, false);
        break;

      case symbols.standard_agen_udp4_candidate:
        scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
        scan_forward_one_byte(' ', unpack_i8, true);
        scan_forward_four_bytes(' udp ', unpack_i32, true);
        scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
        scan_forward_to_null(' ',                         'standard_guid_candidate_5', undefined,   true);
        scan_forward_four_bytes(' typ srflx raddr ', unpack_bytized_ipv4, true);
        scan_forward_to_null(' rport ',                   'standard_guid_candidate_7', undefined,   true);
        scan_forward_to_null(' generation 0 network-id ', 'standard_guid_candidate_8', undefined,   false);
        break;

      case symbols.standard_agen_udp6_host_candidate:
        scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
        scan_forward_one_byte(' ', unpack_i8, true);
        scan_forward_four_bytes(' udp ', unpack_i32, true);
        scan_forward_to_null(' ',                                  'standard_guid_candidate_4', undefined, true);
        scan_forward_to_null(' ',                                  'standard_guid_candidate_5', undefined, true);
        scan_forward_to_null(' typ host generation 0 network-id ', 'standard_guid_candidate_6', undefined, false);
        break;

      case symbols.standard_remote_candidate:
        scan_forward_to_null(`a=candidate:`,      'standard_remote_candidate_1', undefined,   true);
        scan_forward_to_null(' ',                 'standard_remote_candidate_2', undefined,   true);
        scan_forward_to_null(' udp ',             'standard_remote_candidate_3', undefined,   true);
        scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
        scan_forward_to_null(' ',                 'standard_remote_candidate_5', undefined,   true);
        scan_forward_four_bytes(' typ srflx raddr ', unpack_bytized_ipv4, true);
        scan_forward_to_null(' rport ',           'standard_remote_candidate_7', undefined,   true);
        scan_forward_to_null(' generation ',      'standard_remote_candidate_8', undefined,   true);
        work += ' network-cost 999\r\n';
        break;

      case symbols.standard_remote_candidate_ffus:
        scan_forward_four_bytes(`a=candidate:`, unpack_i32, true);
        scan_forward_one_byte(  ' ',            unpack_i8,  true);
        scan_forward_four_bytes(' UDP ',        unpack_i32, true);
        scan_forward_four_bytes(' ', unpack_bytized_ipv4, true);
        scan_forward_to_null(' ',                 'standard_remote_candidate_5', undefined,   true);
        scan_forward_four_bytes(' typ srflx raddr ', unpack_bytized_ipv4, true);
        scan_forward_to_null(' rport ',           'standard_remote_candidate_7', undefined,   false);
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





export {
  unpack,
  unpack_guid
};





// temporary

export {
  unpack_i64
};
