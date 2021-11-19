import { parse } from './parsers';
import * as symbols from './symbols';
function moz_ver([maj, min, patch]) {
    return `${[maj, min, patch].filter(i => i !== undefined).map(i => i.toString()).join('.')}${symbols.c_terminal}`;
}
function make_src(v) {
    const { kind, items } = v;
    const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
    if (kind !== 'standard_remote_candidate') {
        throw 'impossible';
    }
    return `${symbols.standard_remote_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}${i2}${symbols.c_terminal}${d5}${symbols.c_terminal}${d6}${symbols.c_terminal}`;
}
function make_slc(v) {
    const { kind, items } = v;
    const [d1, d2, d3, i1, d4] = items;
    if (kind !== 'standard_local_candidate') {
        throw 'impossible';
    }
    return `${symbols.standard_local_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}`;
}
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
                    work += `${symbols.unknown_line}${v.value}${symbols.c_terminal}`;
                    break;
                case 'version_zero_line':
                    work += `${symbols.version_zero_line}`;
                    break;
                case 'version_line':
                    work += `${symbols.version_line}${v.value}${symbols.c_terminal}`;
                    break;
                case 'a_msid_semantic_ns':
                    work += `${symbols.a_msid_semantic_ns}`;
                    break;
                case 'a_msid_semantic_ws':
                    work += `${symbols.a_msid_semantic_ws}`;
                    break;
                case 'a_extmap_allow_mixed':
                    work += `${symbols.a_extmap_allow_mixed}`;
                    break;
                case 'a_standard_sctp_port':
                    work += `${symbols.a_standard_sctp_port}`;
                    break;
                case 'a_custom_sctp_port':
                    work += `${symbols.a_custom_sctp_port}${v.value}${symbols.c_terminal}`;
                    break;
                case 'a_standard_max_message_size':
                    work += `${symbols.a_standard_max_message_size}`;
                    break;
                case 'a_custom_max_message_size':
                    work += `${symbols.a_custom_max_message_size}${v.value}${symbols.c_terminal}`;
                    break;
                case 'a_setup_actpass':
                    work += `${symbols.a_setup_actpass}`;
                    break;
                case 'a_setup_active':
                    work += `${symbols.a_setup_active}`;
                    break;
                case 'a_mid_zero':
                    work += `${symbols.a_mid_zero}`;
                    break;
                case 's_dash':
                    work += `${symbols.s_dash}`;
                    break;
                case 't_zero_zero':
                    work += `${symbols.t_zero_zero}`;
                    break;
                case 'standard_moz_origin':
                    const smo = v, mvs = moz_ver(smo.moz_ver);
                    work += `${symbols.standard_moz_origin}${mvs}${smo.sess}${symbols.c_terminal}`;
                    break;
                case 'standard_local_candidate':
                    work += make_slc(v);
                    break;
                case 'standard_remote_candidate':
                    work += make_src(v);
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
