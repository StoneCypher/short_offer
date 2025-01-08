
import { parse }             from './parsers';
import * as symbols          from './symbols';

import {
  StandardOrigin,
  StandardMozOrigin,
  StandardLocalCandidate,
  StandardGuidLocalCandidate,
  StandardGuidLocalCandidateFfUS,
  StandardRemoteCandidate,
  StandardRemoteCandidateFfUS,
  StandardAGenTcpCandidate,
  StandardAGenTcp6Candidate,
  StandardAGenUdp4Candidate,
  StandardAGenUdp6HostCandidate,
  CClaimIp4,
  ParsedLine,
  ParsedSdp
} from './types';





function moz_ver([ maj, min, patch ]: [ number, number, number ]): string {
  // todo these could be bytes with no null terminators
  return `${[ maj, min, patch ].filter(i => i !== undefined).map(i => i.toString()).join('.')}${symbols.c_terminal}`;
}





function pack_sha256(sha256: string): string {
  // eg F27A3A5409D36B6239A2215E879212907CD99CF6CC9BA462BD99591888F792BD
  // 32 pairs of nybbles, or 32 bytes

  let ret = '';

  for (let cursor = 0; cursor < sha256.length; cursor += 2) {

    const hi   = parseInt(sha256[cursor]   ?? '0', 16),
          lo   = parseInt(sha256[cursor+1] ?? '0', 16),
          byte = (hi * 16) + lo;

    ret += String.fromCodePoint(byte);

  }

  return ret;

}





function pack_i8(i8: number | string): string {

  let val: number;

  switch (typeof i8) {
    case 'number':
      val = i8;
      break;
    case 'string':
      val = Number(i8);
      break;
    case 'bigint':
      val = Number(i8);
      break;
  }

  const arr  = new ArrayBuffer(1),
        view = new DataView(arr);

  view.setUint8(0, val); // byteOffset = 0

  return String.fromCodePoint(view.getUint8(0));

}





function pack_i16(i16: number | string): string {

  let val: number;

  switch (typeof i16) {
    case 'number':
      val = i16;
      break;
    case 'string':
      val = Number(i16);
      break;
    case 'bigint':
      val = Number(i16);
      break;
  }

  const arr  = new ArrayBuffer(2),
        view = new DataView(arr);

  view.setUint16(0, val, false); // byteOffset = 0; litteEndian = false

  const A = String.fromCodePoint(view.getUint8(0)),
        B = String.fromCodePoint(view.getUint8(1));

  return `${A}${B}`;

}





function pack_i32(i32: number | string): string {

  let val: number;

  switch (typeof i32) {
    case 'number':
      val = i32;
      break;
    case 'string':
      val = Number(i32);
      break;
    case 'bigint':
      val = Number(i32);
      break;
  }

  const arr  = new ArrayBuffer(4),
        view = new DataView(arr);

  view.setUint32(0, val, false); // byteOffset = 0; litteEndian = false

  const A = String.fromCodePoint(view.getUint8(0)),
        B = String.fromCodePoint(view.getUint8(1)),
        C = String.fromCodePoint(view.getUint8(2)),
        D = String.fromCodePoint(view.getUint8(3));

  return `${A}${B}${C}${D}`;

}





function pack_i64(i64: bigint | string): string {

  let val = BigInt(i64);

  const arr  = new ArrayBuffer(8),
        view = new DataView(arr);

  view.setBigUint64(0, val, false); // byteOffset = 0; litteEndian = false

  const A = String.fromCodePoint(view.getUint8(0)),
        B = String.fromCodePoint(view.getUint8(1)),
        C = String.fromCodePoint(view.getUint8(2)),
        D = String.fromCodePoint(view.getUint8(3)),
        E = String.fromCodePoint(view.getUint8(4)),
        F = String.fromCodePoint(view.getUint8(5)),
        G = String.fromCodePoint(view.getUint8(6)),
        H = String.fromCodePoint(view.getUint8(7));

  return `${A}${B}${C}${D}${E}${F}${G}${H}`;

}





// addresses4_dsa is a decimal string array
// addresses6_csa is a canonical string array
// so not 127.0.0.1, not [127,0,0,1], not 2130706433, but '2130706433'

const parseable = {

  'unknown_line': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.unknown_line}${v.value}${symbols.c_terminal}`,

  'version_zero_line': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.version_zero_line}`,

  'version_line': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.version_line}${v.value}${symbols.c_terminal}`,

  'a_msid_semantic_ns': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_msid_semantic_ns}`,

  'a_msid_semantic_star_ns': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_msid_semantic_star_ns}`,

  'a_msid_semantic_ws': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_msid_semantic_ws}`,

  'a_extmap_allow_mixed': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_extmap_allow_mixed}`,

  'a_standard_sctp_port': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_standard_sctp_port}`,

  'a_custom_sctp_port': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_custom_sctp_port}${v.value}${symbols.c_terminal}`,

  'a_standard_max_message_size': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_standard_max_message_size}`,

  'a_custom_max_message_size': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_custom_max_message_size}${v.value}${symbols.c_terminal}`,

  'a_setup_actpass': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_setup_actpass}`,

  'a_setup_active': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_setup_active}`,

  'a_mid_zero': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_mid_zero}`,

  'a_group_bundle_0': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_group_bundle_0}`,

  'a_ice_pwd': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_ice_pwd}${v.value}${symbols.c_terminal}`,

  'a_ice_pwd_l': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_ice_pwd_l}${v.value}${symbols.c_terminal}`,

  'a_ice_pwd_v': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_ice_pwd_v}${v.value}${symbols.c_terminal}`,

  'a_ice_ufrag_4': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_ice_ufrag_4}${v.value}${symbols.c_terminal}`,

  'a_ice_ufrag_8': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_ice_ufrag_8}${v.value}${symbols.c_terminal}`,

  'a_fingerprint_sha1_256': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_fingerprint_sha1_256}${pack_sha256(v.value)}${symbols.c_terminal}`,

  'a_send_recv': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_send_recv}`,

  'a_end_of_candidates': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_end_of_candidates}`,

  's_dash': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.s_dash}`,

  't_zero_zero': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.t_zero_zero}`,

  'b_as_30': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.b_as_30}`,

  // v.value is the *integer* form of the ipv4
  'c_claim_ip4': (v: ParsedLine, addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { value } = (v as CClaimIp4);
    let found = addresses4_dsa.indexOf(value);
    if (found === -1) { throw new Error(`FATAL: missing address ${value}`); }
    return `${symbols.c_claim_ip4}${pack_i8(found)}`;
  },

  'standard_m_application': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.standard_m_application}${pack_i16(v.value)}`,

  'a_ice_options_trickle': (_: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.a_ice_options_trickle}`,

  'standard_origin': (v: ParsedLine, addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardOrigin);
    const [ s, d, i ] = items;
    if (kind !== 'standard_origin') { throw 'impossible'; }
    let found = addresses4_dsa.indexOf(i);
    if (found === -1) { throw new Error(`FATAL: missing address ${i}`); }
    return `${symbols.standard_origin}${pack_i64(s)}${d}${symbols.c_terminal}${pack_i8(found)}`;
  },

  'standard_moz_origin': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const smo = v as StandardMozOrigin,
          mvs = moz_ver(smo.moz_ver);
    return `${symbols.standard_moz_origin}${mvs}${pack_i64(smo.sess)}`;
  },

  'standard_guid_local_candidate': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardGuidLocalCandidate);
    const [ d1, d2, d3, i, d4 ] = items;
    if (kind !== 'standard_guid_local_candidate') { throw 'impossible'; }
    return `${symbols.standard_guid_local_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${i}${symbols.c_terminal}${pack_i16(d4)}`;
  },

  'standard_guid_local_candidate_ffus': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardGuidLocalCandidateFfUS);
    const [ d1, d2, d3, i, d4 ] = items;
    if (kind !== 'standard_guid_local_candidate_ffus') { throw 'impossible'; }
    return `${symbols.standard_guid_local_candidate_ffus}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i}${symbols.c_terminal}${d4}${symbols.c_terminal}`;
  },

  'standard_local_candidate': (v: ParsedLine, addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardLocalCandidate);
    const [ d1, d2, d3, i1, p, d4 ] = items;
    let found = addresses4_dsa.indexOf(i1);
    if (found === -1) { throw new Error(`FATAL: missing address ${i1}`); }
    if (kind !== 'standard_local_candidate') { throw 'impossible'; }
    return `${symbols.standard_local_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${pack_i16(p)}${d4}${symbols.c_terminal}`;
  },

  'standard_remote_candidate': (v: ParsedLine, addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardRemoteCandidate);
    const [ d1, d2, d3, i1, d4, i2, d5, d6 ] = items;
    let found1 = addresses4_dsa.indexOf(i1);
    if (found1 === -1) { throw new Error(`FATAL: missing address 1 ${i1}`); }
    let found2 = addresses4_dsa.indexOf(i2);
    if (found2 === -1) { throw new Error(`FATAL: missing address 2 ${i2}`); }
    if (kind !== 'standard_remote_candidate') { throw 'impossible'; }
    return `${symbols.standard_remote_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${pack_i8(found1)}${d4}${symbols.c_terminal}${pack_i8(found2)}${d5}${symbols.c_terminal}${d6}${symbols.c_terminal}`;
  },

  'standard_remote_candidate_ffus': (v: ParsedLine, addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardRemoteCandidateFfUS);
    const [ d1, d2, d3, i1, d4, i2, d5 ] = items;
    let found1 = addresses4_dsa.indexOf(i1);
    if (found1 === -1) { throw new Error(`FATAL: missing address 1 ${i1}`); }
    let found2 = addresses4_dsa.indexOf(i2);
    if (found2 === -1) { throw new Error(`FATAL: missing address 2 ${i2}`); }
    if (kind !== 'standard_remote_candidate_ffus') { throw 'impossible'; }
    return `${symbols.standard_remote_candidate_ffus}${pack_i32(d1)}${pack_i8(d2)}${symbols.c_terminal}${pack_i32(d3)}${pack_i8(found1)}${d4}${symbols.c_terminal}${pack_i8(found2)}${d5}${symbols.c_terminal}`;
  },

  'standard_agen_tcp_candidate': (v: ParsedLine, addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardAGenTcpCandidate);
    const [ d1, d2, d3, i1, d4, d5 ] = items;
    let found = addresses4_dsa.indexOf(i1);
    if (found === -1) { throw new Error(`FATAL: missing address ${i1}`); }
    if (kind !== 'standard_agen_tcp_candidate') { throw 'impossible'; }
    return `${symbols.standard_agen_tcp_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${d4}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
  },

  'standard_agen_tcp6_candidate': (v: ParsedLine, _addresses4_dsa: string[], addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardAGenTcp6Candidate);
    const [ d1, d2, d3, i1, d4, d5 ] = items;
    let found = addresses6_csa.indexOf(i1);
    if (found === -1) { throw new Error(`FATAL: missing address ${i1}`); }
    if (kind !== 'standard_agen_tcp6_candidate') { throw 'impossible'; }
    return `${symbols.standard_agen_tcp6_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${d4}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
  },

  'standard_agen_udp4_candidate': (v: ParsedLine, addresses4_dsa: string[], _addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardAGenUdp4Candidate);
    const [ d1, d2, d3, i1, d4, i2, d5, d6 ] = items;
    let found1 = addresses4_dsa.indexOf(i1);
    if (found1 === -1) { throw new Error(`FATAL: missing address 1 ${i1}`); }
    let found2 = addresses4_dsa.indexOf(i2);
    if (found2 === -1) { throw new Error(`FATAL: missing address 2 ${i2}`); }
    if (kind !== 'standard_agen_udp4_candidate') { throw 'impossible'; }
    return `${symbols.standard_agen_udp4_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found1)}${pack_i16(d4)}${pack_i8(found2)}${pack_i16(d5)}${pack_i8(d6)}`;
  },

  'standard_agen_udp6_host_candidate': (v: ParsedLine, _addresses4_dsa: string[], addresses6_csa: string[]) => {
    const { kind, items } = (v as StandardAGenUdp6HostCandidate);
    const [ d1, d2, d3, i1, p, d5 ] = items;
    let found = addresses6_csa.indexOf(i1);
    if (found === -1) { throw new Error(`FATAL: missing address ${i1}`); }
    if (kind !== 'standard_agen_udp6_host_candidate') { throw 'impossible'; }
    return `${symbols.standard_agen_udp6_host_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${pack_i16(p)}${pack_i8(d5)}`;
  },

  'unknown_terminate': (v: ParsedLine, _addresses4_dsa: string[], _addresses6_csa: string[]) =>
    `${symbols.unknown_terminate}${v.value}`

};





// what?  bigint to character.  what?

function bitch(bi: bigint) {
  return String.fromCharCode(Number(bi));
}





// receives '2130706433', converts to 2130706433, converts to 127.0.0.1, converts to \127\0\0\1, returns

function addr4_as_decimal_as_string_to_bytes(addr_as_decimal_as_string: string): string {

  const addr: bigint    = BigInt(addr_as_decimal_as_string);

  const d   : bigint    = addr % 256n,
        s8  : bigint    = addr >> 8n,

        c   : bigint    = s8   % 256n,
        s16 : bigint    = s8   >> 8n,

        b   : bigint    = s16  % 256n,
        s24 : bigint    = s16  >> 8n,

        a   : bigint    = s24  % 256n;

  return `${bitch(a)}${bitch(b)}${bitch(c)}${bitch(d)}`;

}





// what?  bigint long to character.  what?

function biltch(bi: bigint) {
  return `${String.fromCharCode((Number(bi) >> 8) % 256)}${String.fromCharCode(Number(bi) % 256)}`;
}





// receives 'AAAA:BBBB:CCCC:DDDD:EEEE:FFFF:0000:1111', converts to 16 dense bytes, returns

function addr6_as_canon_string_to_bytes(addr_as_canon_string: string): string {

  const addr: bigint[] = addr_as_canon_string.split(':').map(aai16 => BigInt(parseInt(aai16, 16))).filter(a => a !== undefined);
  if (addr.length !== 8) { throw new Error('invalid address!'); }

  const queue : string[] = [];

  for (let i=0; i<8; ++i) {
    queue.push( biltch(addr[i]!) );
  }

  return queue.join('');

}





// todo - we removed the nl or cr/nl thing.  was this right?
// it still compresses correctly for weird stuff, just not efficiently
// but nobody uses it?

function parsed_to_bytestring( parsed: ParsedSdp ): string {

  let work      : string  = '',
      ending    : string  = '',
      skip_iter : boolean = false;



  // ipv4 header

  if (parsed.addresses === undefined) {
    work += '\0';
  } else {
    if (parsed.addresses.v4.length > 255) {
      throw new Error('Encoding is limited to 255 ipv4 addresses');
    }
    work += String.fromCodePoint(parsed.addresses.v4.length);
    for (let i=0; i<parsed.addresses.v4.length; ++i) {
      work += addr4_as_decimal_as_string_to_bytes(parsed.addresses.v4[i]!);
    }
  }



  // ipv6 header

  if (parsed.addresses === undefined) {
    work += '\0';
  } else {
    if (parsed.addresses.v6.length > 255) {
      throw new Error('Encoding is limited to 255 ipv6 addresses');
    }
    work += String.fromCodePoint(parsed.addresses.v6.length);
    for (let i=0; i<parsed.addresses.v6.length; ++i) {
      work += addr6_as_canon_string_to_bytes(parsed.addresses.v6[i]!);
    }
  }



  // pack string

  if      (parsed.kind === 'offer')  { work += symbols.offer;  }
  else if (parsed.kind === 'answer') { work += symbols.answer; }

  else if (parsed.kind === 'unknown_terminate') {
    work      += `${symbols.unknown_terminate}${parsed.value}`;
    skip_iter  = true;
  }

  if (!skip_iter) {

    parsed.value.forEach( v => {

      if (parseable[v.kind] === undefined) {
        throw new TypeError(`[pack] Impossible bytestring symbol found: ${JSON.stringify(v.kind)}`);
      } else {
        work += parseable[v.kind](v, (parsed?.addresses?.v4 ?? []), (parsed?.addresses?.v6 ?? []));
      }

    });

  }

  return `${work}${ending}`;  // yes, ending is meant to go on *after* unknown terminate.

}





function pack( original: string ): string {

  // todo needs compression

  if (original === '') { return ''; }

  const ParseTree = parse( original );

  if (Array.isArray(ParseTree)) {  // this is just a TS type inference error
    throw 'Degenerate PEG case - should not be possible, please report';
  } else {
    return parsed_to_bytestring( ParseTree );
  }

}





export {
  pack,
  parsed_to_bytestring
}
