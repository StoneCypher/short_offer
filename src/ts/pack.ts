
import { parse }             from './parsers';
import * as symbols          from './symbols';

import {
  StandardMozOrigin,
  StandardRemoteCandidate,
  StandardLocalCandidate
} from './types';





import {
//  UnknownLine, VLine,
//  PegCoord, PegLocation,
  ParsedLine, ParsedSdp
} from './types';





function moz_ver([ maj, min, patch ]: [ number, number, number ]): string {
  // todo these could be bytes with no null terminators
  return `${[ maj, min, patch ].filter(i => i !== undefined).map(i => i.toString()).join('.')}${symbols.c_terminal}`;
}





function make_src(v: ParsedLine) {

  const { kind, items } = (v as StandardRemoteCandidate);
  const [ d1, d2, d3, i1, d4, i2, d5, d6 ] = items;
  if (kind !== 'standard_remote_candidate') { throw 'impossible'; }
  return `${symbols.standard_remote_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}${i2}${symbols.c_terminal}${d5}${symbols.c_terminal}${d6}${symbols.c_terminal}`;

}





// function make_sic(v: ParsedLine) {

//   const { kind, items } = (v as StandardIpV4Candidate);
//   const [ d1, d2, d3, i1, d4, i2, d5, d6 ] = items;
//   if (kind !== 'standard_ipv4_candidate') { throw 'impossible'; }
//   return `${symbols.standard_ipv4_candidate}:${d1} ${d2} udp ${d3} ${i1} ${d4} typ srflx raddr ${i2} rport ${d5} generation ${d6} network-cost 999`;

// }





function make_slc(v: ParsedLine) {

  const { kind, items } = (v as StandardLocalCandidate);
  const [ d1, d2, d3, i1, d4 ] = items;
  if (kind !== 'standard_local_candidate') { throw 'impossible'; }
  return `${symbols.standard_local_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}`;

}





// todo - we removed the nl or cr/nl thing.  was this right?
// it still compresses correctly for weird stuff, just not efficiently
// but nobody uses it?

function parsed_to_bytestring( parsed: ParsedSdp ): string {

  let work      : string  = '',
      ending    : string  = '',
      skip_iter : boolean = false;

  if      (parsed.kind === 'offer')  { work += symbols.offer;  }
  else if (parsed.kind === 'answer') { work += symbols.answer; }

  else if (parsed.kind === 'unknown_terminate') {
    work      += `${symbols.unknown_terminate}${parsed.value}`;
    skip_iter  = true;
  }

  if (!skip_iter) {

    parsed.value.forEach( v => {

      const v_kind = v.kind;

      switch (v_kind) {

        case 'unknown_line':
          work += `${symbols.unknown_line}${v.value}${symbols.c_terminal}`;
          break;

        case 'version_zero_line':
          work += `${symbols.version_zero_line}`;
          break;

        case 'version_line':
          work += `${symbols.version_line}${v.value}${symbols.c_terminal}`;
          break;

        case 'a_msid_semantic_ns':
          work += `${symbols.a_msid_semantic_ns}`;
          break;

        case 'a_msid_semantic_ws':
          work += `${symbols.a_msid_semantic_ws}`;
          break;

        case 'a_extmap_allow_mixed':
          work += `${symbols.a_extmap_allow_mixed}`;
          break;

        case 'a_standard_sctp_port':
          work += `${symbols.a_standard_sctp_port}`;
          break;

        case 'a_custom_sctp_port':
          work += `${symbols.a_custom_sctp_port}${v.value}${symbols.c_terminal}`;
          break;

        case 'a_standard_max_message_size':
          work += `${symbols.a_standard_max_message_size}`;
          break;

        case 'a_custom_max_message_size':
          work += `${symbols.a_custom_max_message_size}${v.value}${symbols.c_terminal}`;
          break;

        case 'a_setup_actpass':
          work += `${symbols.a_setup_actpass}`;
          break;

        case 'a_setup_active':
          work += `${symbols.a_setup_active}`;
          break;

        case 'a_mid_zero':
          work += `${symbols.a_mid_zero}`;
          break;

        case 's_dash':
          work += `${symbols.s_dash}`;
          break;

        case 't_zero_zero':
          work += `${symbols.t_zero_zero}`;
          break;

        case 'standard_moz_origin':
          const smo = v as StandardMozOrigin,
                mvs = moz_ver(smo.moz_ver);
          work += `${symbols.standard_moz_origin}${mvs}${smo.sess}${symbols.c_terminal}`;
          break;

        case 'standard_local_candidate':
          work += make_slc(v);
          break;

        case 'standard_remote_candidate':
          work += make_src(v);
          break;

        // case 'standard_ipv4_candidate':
        //   work += make_sic(v);
        //   break;

        case 'unknown_terminate':
          // newline stance is irrelevant
          work += `${symbols.unknown_terminate}${v.value}`;
          break;

        default:
          const exhaustiveCheck: never = v_kind;
          throw new TypeError(`Impossible bytestring symbol found: ${JSON.stringify(exhaustiveCheck)}`);

      }

    });

  }

  return `${work}${ending}`;  // yes, ending is meant to go on *after* unknown terminate.

}





function pack( original: string ): string {

  if (original === '') { return ''; }

  // todo needs compression

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
