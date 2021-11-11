
import { parse as peg_parse }   from './generated_code/sdp_parser';
import { parse as peg_deparse } from './generated_code/decompiler';

import { ParsedSdp }            from './types';





function parse(code: string) {
  return peg_parse(code) as ParsedSdp;
}

function deparse(bytecode: string) {
  return peg_deparse(bytecode);
}





export { parse, deparse };
