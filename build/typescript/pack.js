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
                case 'a_extmap_allow_mixed':
                    work += `${symbols.a_extmap_allow_mixed}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_standard_sctp_port':
                    work += `${symbols.a_standard_sctp_port}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_custom_sctp_port':
                    work += `${symbols.a_custom_sctp_port}${v.value}${nl_or_cr_nl(v)}${symbols.c_terminal}`;
                    break;
                case 'a_standard_max_message_size':
                    work += `${symbols.a_standard_max_message_size}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_custom_max_message_size':
                    work += `${symbols.a_custom_max_message_size}${v.value}${nl_or_cr_nl(v)}${symbols.c_terminal}`;
                    break;
                case 'a_setup_actpass':
                    work += `${symbols.a_setup_actpass}${nl_or_cr_nl(v)}`;
                    break;
                case 'a_setup_active':
                    work += `${symbols.a_setup_active}${nl_or_cr_nl(v)}`;
                    break;
                case 'unknown_terminate':
                    work += `${symbols.unknown_terminate}${v.value}`;
                    break;
                default:
                    const exhaustiveCheck = v_kind;
                    throw new TypeError(`Impossible bytestring symbol found: ${JSON.stringify(exhaustiveCheck)}`);
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
