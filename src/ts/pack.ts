
import { parse } from "./generated_code/sdp_parser";

import {
//  UnknownLine, VLine, ParsedLine,
//  PegCoord, PegLocation,
  ParsedSdp
} from './types';





function parsed_to_bytestring( _parsed: ParsedSdp ): string {

  let ending = '';

  throw 'todo';

  return `${ending}`;

}





function pack( original: string ): string {
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
