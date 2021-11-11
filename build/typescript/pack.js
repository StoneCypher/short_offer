import { parse } from "./generated_code/sdp_parser";
function parsed_to_bytestring(_parsed) {
    let ending = '';
    throw 'todo';
    return `${ending}`;
}
function pack(original) {
    const ParseTree = parse(original);
    if (Array.isArray(ParseTree)) {
        throw 'Degenerate PEG case';
    }
    else {
        return parsed_to_bytestring(ParseTree);
    }
}
export { pack, parsed_to_bytestring };
