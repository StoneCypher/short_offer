
import { parse }             from './parsers';
import * as symbols          from './symbols';
import { StandardMozOrigin } from './types';





import {
//  UnknownLine, VLine,
//  PegCoord, PegLocation,
  ParsedLine, ParsedSdp
} from './types';





const nl_or_cr_nl = (pl: ParsedLine): string =>

  pl.uses_short_nl
    ? symbols.short_separator_follows
    : '';





function moz_ver([ maj, min, patch ]: [ number, number, number ]): string {
  // todo these could be bytes with no null terminators
  return `${maj}.${min}.${patch}${symbols.c_terminal}`
}





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

        // todo - wait, shouldn't the c terminal be before the newline status track?

        case 'unknown_line':
          work += `${symbols.unknown_line}${v.value}${nl_or_cr_nl(v)}${symbols.c_terminal}`;
          break;

        case 'version_zero_line':
          work += `${symbols.version_zero_line}${nl_or_cr_nl(v)}`;
          break;

        case 'version_line':
          work += `${symbols.version_line}${v.value}${nl_or_cr_nl(v)}${symbols.c_terminal}`;
          break;

        case 'a_msid_semantic_ns':
          work += `${symbols.a_msid_semantic_ns}${nl_or_cr_nl(v)}`;
          break;

        case 'a_msid_semantic_ws':
          work += `${symbols.a_msid_semantic_ws}${nl_or_cr_nl(v)}`;
          break;

        case 'a_extmap_allow_mixed':
          work += `${symbols.a_extmap_allow_mixed}${nl_or_cr_nl(v)}`;
          break;

        case 'a_standard_sctp_port':
          work += `${symbols.a_standard_sctp_port}${nl_or_cr_nl(v)}`;
          break;

        case 'a_custom_sctp_port':
          work += `${symbols.a_custom_sctp_port}${v.value}${nl_or_cr_nl(v)}${symbols.c_terminal}`;
          break;

        case 'a_standard_max_message_size':
          work += `${symbols.a_standard_max_message_size}${nl_or_cr_nl(v)}`;
          break;

        case 'a_custom_max_message_size':
          work += `${symbols.a_custom_max_message_size}${v.value}${nl_or_cr_nl(v)}${symbols.c_terminal}`;
          break;

        case 'a_setup_actpass':
          work += `${symbols.a_setup_actpass}${nl_or_cr_nl(v)}`;
          break;

        case 'a_setup_active':
          work += `${symbols.a_setup_active}${nl_or_cr_nl(v)}`;
          break;

        case 'a_mid_zero':
          work += `${symbols.a_mid_zero}${nl_or_cr_nl(v)}`;
          break;

        case 's_dash':
          work += `${symbols.s_dash}${nl_or_cr_nl(v)}`;
          break;

        case 't_zero_zero':
          work += `${symbols.t_zero_zero}${nl_or_cr_nl(v)}`;
          break;

        case 'standard_moz_origin':
          const smo = v as StandardMozOrigin,
                mvs = moz_ver(smo.moz_ver);
//        work += `${symbols.standard_moz_origin}${moz_ver(smo.moz_ver)}${smo.sess}${symbols.c_terminal}${nl_or_cr_nl(v)}`;
          work += `${symbols.standard_moz_origin}${mvs}${smo.sess}${symbols.c_terminal}${nl_or_cr_nl(v)}`;
          break;

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
