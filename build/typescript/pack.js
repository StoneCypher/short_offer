import { parse } from './parsers';
import * as symbols from './symbols';
const nl_or_cr_nl = (pl) => pl.uses_short_nl
    ? symbols.short_separator_follows
    : '';
function parsed_to_bytestring(parsed) {
    let work = '', ending = '', skip_iter = false;
    if (parsed.kind === 'offer') {
        work += symbols.offer;
    }
    else if (parsed.kind === 'answer') {
        work += symbols.answer;
    }
    else if (parsed.kind === 'unknown_terminate') {
        work += `${symbols.unknown_terminate}${parsed.value}`;
        skip_iter = true;
    }
    if (!skip_iter) {
        parsed.value.forEach(v => {
            const v_kind = v.kind;
            switch (v_kind) {
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
                case 'unknown_terminate':
                    work += `${symbols.unknown_terminate}${v.value}`;
                    break;
                default:
                    const exhaustiveCheck = v_kind;
                    throw new TypeError(`Impossible bytestring symbol found: ${exhaustiveCheck}`);
            }
        });
    }
    return `${work}${ending}`;
}
function pack(original) {
    if (original === '') {
        return '';
    }
    const ParseTree = parse(original);
    if (Array.isArray(ParseTree)) {
        throw 'Degenerate PEG case - should not be possible, please report';
    }
    else {
        return parsed_to_bytestring(ParseTree);
    }
}
export { pack, parsed_to_bytestring };
