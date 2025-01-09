
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





// function unpack_bytized_ipv4(str: string) {

//   const a = str.codePointAt(0),
//         b = str.codePointAt(1),
//         c = str.codePointAt(2),
//         d = str.codePointAt(3);

//   return `${a}.${b}.${c}.${d}`;

// }





// function unpack_indexed_ipv4(str: string) {
//   return str.codePointAt(0);
// }





function bitnstr(bi: bigint) {
  return Number(bi);
}





// receives '2130706433', converts to 2130706433, converts to 127.0.0.1, converts to `127.0.0.1`, returns

function ipv4_decimal_string_to_string_dotted_quad(str: string): string {

  const addr: bigint    = BigInt(str);

  const d   : bigint    = addr % 256n,
        s8  : bigint    = addr >> 8n,

        c   : bigint    = s8   % 256n,
        s16 : bigint    = s8   >> 8n,

        b   : bigint    = s16  % 256n,
        s24 : bigint    = s16  >> 8n,

        a   : bigint    = s24  % 256n;

  return `${bitnstr(a)}.${bitnstr(b)}.${bitnstr(c)}.${bitnstr(d)}`;

}





function unpack_indexed_ipv4_waddr(addresses: string[]) {
  return function unpack_indexed_ipv4(str: string) {
    const idx = str.codePointAt(0);
    if (idx === undefined) { throw new Error('Index string was empty'); }
    const addr = addresses[idx];
    if (addr === undefined) { throw new Error(`Referenced index ${idx} for ipv4 addresses doesn't exist`); }
    return ipv4_decimal_string_to_string_dotted_quad(addr);
  }
}





function unpack_indexed_ipv6_waddr(addresses: string[]) {
  return function unpack_indexed_ipv6(str: string) {
    const idx = str.codePointAt(0);
    if (idx === undefined) { throw new Error('Index string was empty'); }
    const addr = addresses[idx];
    if (addr === undefined) { throw new Error(`Referenced index ${idx} for ipv6 addresses doesn't exist`); }
    return addr;  // already in desired format
  }
}





function unpack_indexed_guid_waddr(addresses: string[]) {
  return function unpack_indexed_guid(str: string) {
    const idx = str.codePointAt(0);
    if (idx === undefined) { throw new Error('Index string was empty'); }
    const addr = addresses[idx];
    if (addr === undefined) { throw new Error(`Referenced index ${idx} for ipv6 addresses doesn't exist`); }

    // it's stored as if it was an ipv6, so reformat it as a guid
    // do the insertions in reverse so you don't have to count the hyphens in position
    const ret = addr.trim().split(':').join('');

    return `${ret.substring(0,8)}-${ret.substring(8,12)}-${ret.substring(12,16)}-${ret.substring(16,20)}-${ret.substring(20,32)}`;
  }
}





function unpack_i8(str: string) {

  const d = str.codePointAt(0) ?? 0;

  return (d).toString();

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





function unpack_i64(str: string) {

  let out = BigInt(0);

  for (let i=0; i<8; ++i) {
    out *= 256n;
    out += BigInt(str.codePointAt(i) ?? 0);
  }

  return out;

}





// function unpack_guid(guid: string) {
//   return `${guid.substring(0,8)}-${guid.substring(8,12)}-${guid.substring(12,16)}-${guid.substring(16,20)}-${guid.substring(20,32)}`;
// }





// not 127.0.0.1, but '2130706433'

function four_bytes_to_decimal_ipv4_string(bytes: string): string {

  const a = bytes.charCodeAt(0),
        b = bytes.charCodeAt(1),
        c = bytes.charCodeAt(2),
        d = bytes.charCodeAt(3);

  return String( (((((a*256)+b)*256)+c)*256)+d );

}





const hexchars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function byte_to_two_uppercase_nybbles(byte: number): string {

  const lo = byte % 16,
        hi = (byte >> 4) % 16;

  return `${hexchars[hi ?? 'Z']}${hexchars[lo] ?? 'Z'}`;

}





function even(n: number): boolean {
  return ((n%2)==0);
}





// 'AAAA:BBBB:CCCC:DDDD:EEEE:FFFF:0000:1111'

function sixteen_bytes_to_canon_ipv6_string(bytes: string): string {

  let res = '';

  for (let i=0; i<16; ++i) {
    const thisByte = bytes.charCodeAt(i);
    if (thisByte === undefined) { throw new Error('string too short'); }
    if (even(i) && (i !== 0)) { res += ':'; }
    res += byte_to_two_uppercase_nybbles(thisByte);
  }

  return res;

}





function unpack(bytestring: string): string {

  if (bytestring === '') { return ''; }

  let i            : number,
      iC           : number,
      work         : string = '',
      at_end       : string = '',
      stream_start : number = 0;


  function unpack_none(s: string)    { return s; }
  function unpack_decimal(d: string) { return d; }  // eventually this will be a null-not-containing number encoding


  function scan_forward_to_null(prefix: string, throw_label: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    let found        : false | number = false,
        end          : number,
        finished     : boolean        = false;

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


  function scan_forward_exactly_one_byte(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+2));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 1;

  }


  function scan_forward_exactly_two_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+3));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 2;

  }


  function scan_forward_exactly_eight_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+9));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 8;

  }


  // function scan_forward_exactly_sixteen_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

  //   const unpacked = unpacker(bytestring.substring(i+1, i+17));

  //   work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
  //   i    += 16;

  // }


  function scan_forward_one_byte(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+2));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 2;

  }


  function scan_forward_exactly_four_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+5));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 4;  // TODO: should this be 5?

  }


  function scan_forward_exactly_32_bytes(prefix: string, unpacker: Function = unpack_none, skip_r_n: boolean = false) {

    const unpacked = unpacker(bytestring.substring(i+1, i+33));

    work += `${prefix}${unpacked}${skip_r_n? '' : '\r\n'}`;
    i    += 32;

  }





  // ipv4 header

  let ipv4_list: string[] = ['0', '2130706433'];    // 2130706433 is 127.0.0.1

  let ipv4_addr_count = bytestring.charCodeAt(0);
  ++stream_start;

  for (let i=0; i<ipv4_addr_count; ++i) {
    // they need to come out as decimal strings - not 127.0.0.1, but '2130706433'
    // i+2 because we started with 0 and 127.0.0.1 pre-loaded
    ipv4_list[i+2]  = four_bytes_to_decimal_ipv4_string(bytestring.substring(stream_start, stream_start+4));
    stream_start += 4;
  }

  const unpack_indexed_ipv4_l = unpack_indexed_ipv4_waddr(ipv4_list);



  // ipv6 header

  let ipv6_list: string[] = [];

  let ipv6_addr_count = bytestring.charCodeAt(stream_start);
  ++stream_start;

  for (let i=0; i<ipv6_addr_count; ++i) {
    // they need to come out as full canon uppercase strings - not '1.2a::3;, but '0001:002A:0000:0000:0000:0000:0000:0003'
    ipv6_list[i]  = sixteen_bytes_to_canon_ipv6_string(bytestring.substring(stream_start, stream_start+16));
    stream_start += 16;
  }

  const unpack_indexed_ipv6_l = unpack_indexed_ipv6_waddr(ipv6_list);
  const unpack_indexed_guid_l = unpack_indexed_guid_waddr(ipv6_list);



  // bytestream

  for (i=stream_start, iC = bytestring.length; i<iC; ++i) {

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
//        scan_forward_to_null('m=application ', 'standard_m_application', undefined, true);
        work += ' UDP/DTLS/SCTP webrtc-datachannel\r\n';
        break;

      case symbols.a_ice_options_trickle:
        work += 'a=ice-options:trickle\r\n';
        break;

      case symbols.standard_origin:
        scan_forward_exactly_eight_bytes('o=- ',     unpack_i64, true);
        scan_forward_exactly_one_byte(   ' ',        unpack_i8,  true);
        scan_forward_exactly_one_byte(   ' IN IP4 ', unpack_indexed_ipv4_l, true);
        work += '\r\n';
        break;

      case symbols.standard_moz_origin:
        scan_forward_to_null('o=mozilla...THIS_IS_SDPARTA-', 'standard_moz_origin_1', undefined,  true);
        scan_forward_exactly_eight_bytes(` `,                                         unpack_i64, true);
        work += ' 0 IN IP4 0.0.0.0\r\n';
        break;

      case symbols.unknown_terminate:
        work += bytestring.substring(i+1, iC);  // sum everything remaining into the work queue
        i = iC; // end the loop
        break;

      case symbols.standard_guid_local_candidate:
        scan_forward_exactly_four_bytes(`a=candidate:`,                                            unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                                                         unpack_i8,             true);
        scan_forward_exactly_four_bytes(' udp ',                                                   unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                                                         unpack_indexed_guid_l, true);
        scan_forward_exactly_two_bytes( '.local ',                                                 unpack_i16,            true);
//        scan_forward_to_null('.local ',           'standard_local_candidate_5', undefined,   true);
        work += ' typ host generation 0 network-cost 999\r\n';
        break;

      case symbols.standard_tcp_guid_local_candidate_ffus_active:
        scan_forward_exactly_one_byte(`a=candidate:`,           unpack_i8,             true);
        scan_forward_exactly_one_byte(' ',                      unpack_i8,             true);
        scan_forward_exactly_four_bytes(' TCP ',                unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                      unpack_indexed_guid_l, true);
        scan_forward_exactly_two_bytes('.local ',               unpack_i16,            true);
        work += ' typ host tcptype active\r\n';
        break;

      case symbols.standard_guid_local_candidate_ffus:
        scan_forward_exactly_one_byte(`a=candidate:`,           unpack_i8,             true);
        scan_forward_exactly_one_byte(' ',                      unpack_i8,             true);
        scan_forward_exactly_four_bytes(' UDP ',                unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                      unpack_indexed_guid_l, true);
        scan_forward_exactly_two_bytes('.local ',               unpack_i16,            true);
        work += ' typ host\r\n';
        break;

      case symbols.standard_ip6_local_candidate_ffus:
        scan_forward_exactly_one_byte(`a=candidate:`,           unpack_i8,             true);
        scan_forward_exactly_one_byte(' ',                      unpack_i8,             true);
        scan_forward_exactly_four_bytes(' UDP ',                unpack_i32,            true);
        scan_forward_exactly_one_byte( ' ',                     unpack_indexed_ipv6_l, true);
        scan_forward_exactly_two_bytes(' ',                     unpack_i16,            true);
        work += ' typ host\r\n';
        break;

      case symbols.standard_ip6_local_candidate_ffus_active:
        scan_forward_exactly_one_byte(`a=candidate:`,           unpack_i8,             true);
        scan_forward_exactly_one_byte(' ',                      unpack_i8,             true);
        scan_forward_exactly_four_bytes(' TCP ',                unpack_i32,            true);
        scan_forward_exactly_one_byte( ' ',                     unpack_indexed_ipv6_l, true);
        scan_forward_exactly_two_bytes(' ',                     unpack_i16,            true);
        work += ' typ host tcptype active\r\n';
        break;

      case symbols.standard_ip4_local_candidate_ffus:
        scan_forward_exactly_one_byte(`a=candidate:`,           unpack_i8,             true);
        scan_forward_exactly_one_byte(' ',                      unpack_i8,             true);
        scan_forward_exactly_four_bytes(' UDP ',                unpack_i32,            true);
        scan_forward_exactly_one_byte( ' ',                     unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes(' ',                     unpack_i16,            true);
        work += ' typ host\r\n';
        break;

      case symbols.standard_ip4_local_candidate_ffus_active:
        scan_forward_exactly_one_byte(`a=candidate:`,           unpack_i8,             true);
        scan_forward_exactly_one_byte(' ',                      unpack_i8,             true);
        scan_forward_exactly_four_bytes(' TCP ',                unpack_i32,            true);
        scan_forward_exactly_one_byte( ' ',                     unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes(' ',                     unpack_i16,            true);
        work += ' typ host tcptype active\r\n';
        break;

      case symbols.standard_local_candidate:
        scan_forward_exactly_four_bytes(`a=candidate:`,                       unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                                    unpack_i8,             true);
        scan_forward_exactly_four_bytes(' udp ',                              unpack_i32,            true);
        scan_forward_exactly_one_byte(  ' ',                                  unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes( ' ',                                  unpack_i16,            true);
        scan_forward_exactly_one_byte(  ' typ host generation 0 network-id ', unpack_i8,             false);
        break;

      case symbols.standard_agen_tcp_candidate:
        scan_forward_exactly_four_bytes(`a=candidate:`,                                                        unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                                                                     unpack_i8,             true);
        scan_forward_exactly_four_bytes(' tcp ',                                                               unpack_i32,            true);
        scan_forward_exactly_one_byte( ' ',                                                                    unpack_indexed_ipv4_l, true);
        scan_forward_to_null(' ',                                                 'standard_guid_candidate_4', undefined,             true);
        scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined,             false);
        break;

      case symbols.standard_agen_tcp6_candidate:
        scan_forward_exactly_four_bytes(`a=candidate:`,                                                        unpack_i32, true);
        scan_forward_exactly_one_byte(' ',                                                                     unpack_i8,  true);
        scan_forward_exactly_four_bytes(' tcp ',                                                               unpack_i32, true);
        scan_forward_exactly_one_byte( ' ',                                                                    unpack_indexed_ipv6_l, true);
        scan_forward_to_null(' ',                                                 'standard_guid_candidate_4', undefined,  true);
        scan_forward_to_null(' typ host tcptype active generation 0 network-id ', 'standard_guid_candidate_5', undefined,  false);
        break;

      case symbols.standard_agen_udp4_candidate:
        scan_forward_exactly_four_bytes(`a=candidate:`,            unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                         unpack_i8,             true);
        scan_forward_exactly_four_bytes(' udp ',                   unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                         unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes( ' ',                       unpack_i16,            true);
        scan_forward_exactly_one_byte(' typ srflx raddr ',         unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes( ' rport ',                 unpack_i16,            true);
        scan_forward_exactly_one_byte(' generation 0 network-id ', unpack_i8,             false);
        break;

      case symbols.standard_agen_udp6_host_candidate:
        scan_forward_exactly_four_bytes(`a=candidate:`,                     unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                                  unpack_i8,             true);
        scan_forward_exactly_four_bytes(' udp ',                            unpack_i32,            true);
        scan_forward_exactly_one_byte( ' ',                                 unpack_indexed_ipv6_l, true);
        scan_forward_exactly_two_bytes( ' ',                                unpack_i16,            true);
        scan_forward_exactly_one_byte(' typ host generation 0 network-id ', unpack_i8,             false);
        break;

      case symbols.standard_remote_candidate:
        scan_forward_exactly_four_bytes(`a=candidate:`,      unpack_i32,            true);
        scan_forward_exactly_one_byte(  ' ',                 unpack_i8,             true);
        scan_forward_exactly_four_bytes(' udp ',             unpack_i32,            true);
        scan_forward_exactly_one_byte(  ' ',                 unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes( ' ',                 unpack_i16,            true);
        scan_forward_exactly_one_byte(' typ srflx raddr ',   unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes(' rport ',            unpack_i16,            true);
        scan_forward_exactly_two_bytes(' generation ',       unpack_i16,            true);
        work += ' network-cost 999\r\n';
        break;

      case symbols.standard_remote_candidate_ffus:
        scan_forward_exactly_four_bytes(`a=candidate:`,                          unpack_i32,            true);
        scan_forward_one_byte(  ' ',                                             unpack_i8,             true);
        scan_forward_exactly_four_bytes(' UDP ',                                 unpack_i32,            true);
        scan_forward_exactly_one_byte(' ',                                       unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes( ' ',                                     unpack_i16,            true);
        scan_forward_exactly_one_byte(' typ srflx raddr ',                       unpack_indexed_ipv4_l, true);
        scan_forward_exactly_two_bytes(' rport ',                                unpack_i16,            false);
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
