
import { parse as peg_parse }   from './generated_code/sdp_parser';

import { ParsedSdp }            from './types';





function parse(code: string) {
  return peg_parse(code) as ParsedSdp;
}





export { parse };
