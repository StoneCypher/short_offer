import { parse as peg_parse } from './generated_code/sdp_parser';
function parse(code, options) {
    return peg_parse(code, options);
}
export { parse };
