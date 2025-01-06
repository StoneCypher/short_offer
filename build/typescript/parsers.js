import { parse as peg_parse } from './generated_code/sdp_parser';
function parse(code) {
    return peg_parse(code);
}
export { parse };
