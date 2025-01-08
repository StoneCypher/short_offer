
import { parse as peg_parse }   from './generated_code/sdp_parser';

import { ParsedSdp }            from './types';





function parse(code: string, options?: any | undefined) {
  return peg_parse(code, options) as ParsedSdp;
}





export { parse };
