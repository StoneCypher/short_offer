import { parse as peg_parse } from './generated_code/sdp_parser';
import { parse as peg_deparse } from './generated_code/decompiler';
function parse(code) {
    return peg_parse(code);
}
function deparse(bytecode) {
    return peg_deparse(bytecode);
}
export { parse, deparse };
