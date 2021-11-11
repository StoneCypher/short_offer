
import { parse } from "./generated_code/compiler";

import {
//  UnknownLine, VLine, ParsedLine,
//  PegCoord, PegLocation,
  ParsedSdp
} from './types';





function parsed_to_bytestring( _parsed: ParsedSdp ): string {

//  return ${};
  throw 'todo';

}





function pack( original: string ): string {
  // todo needs compression
  return parsed_to_bytestring( parse( original ) );
}





export {
  pack,
  parsed_to_bytestring
}
