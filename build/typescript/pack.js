import { parse } from './parsers';
import * as symbols from './symbols';
function moz_ver([maj, min, patch]) {
    return `${[maj, min, patch].filter(i => i !== undefined).map(i => i.toString()).join('.')}${symbols.c_terminal}`;
}
const parseable = {
    'unknown_line': (v) => `${symbols.unknown_line}${v.value}${symbols.c_terminal}`,
    'version_zero_line': (_) => `${symbols.version_zero_line}`,
    'version_line': (v) => `${symbols.version_line}${v.value}${symbols.c_terminal}`,
    'a_msid_semantic_ns': (_) => `${symbols.a_msid_semantic_ns}`,
    'a_msid_semantic_ws': (_) => `${symbols.a_msid_semantic_ws}`,
    'a_extmap_allow_mixed': (_) => `${symbols.a_extmap_allow_mixed}`,
    'a_standard_sctp_port': (_) => `${symbols.a_standard_sctp_port}`,
    'a_custom_sctp_port': (v) => `${symbols.a_custom_sctp_port}${v.value}${symbols.c_terminal}`,
    'a_standard_max_message_size': (_) => `${symbols.a_standard_max_message_size}`,
    'a_custom_max_message_size': (v) => `${symbols.a_custom_max_message_size}${v.value}${symbols.c_terminal}`,
    'a_setup_actpass': (_) => `${symbols.a_setup_actpass}`,
    'a_setup_active': (_) => `${symbols.a_setup_active}`,
    'a_mid_zero': (_) => `${symbols.a_mid_zero}`,
    'a_ice_pwd': (v) => `${symbols.a_ice_pwd}${v.value}${symbols.c_terminal}`,
    'a_ice_pwd_l': (v) => `${symbols.a_ice_pwd_l}${v.value}${symbols.c_terminal}`,
    'a_ice_ufrag': (v) => `${symbols.a_ice_ufrag}${v.value}${symbols.c_terminal}`,
    'a_fingerprint_sha1_256': (v) => `${symbols.a_fingerprint_sha1_256}${v.value}${symbols.c_terminal}`,
    's_dash': (_) => `${symbols.s_dash}`,
    't_zero_zero': (_) => `${symbols.t_zero_zero}`,
    'standard_origin': (v) => {
        const { kind, items } = v;
        const [s, d, i] = items;
        if (kind !== 'standard_origin') {
            throw 'impossible';
        }
        return `${symbols.standard_origin}${s}${symbols.c_terminal}${d}${symbols.c_terminal}${i}${symbols.c_terminal}`;
    },
    'standard_moz_origin': (v) => {
        const smo = v, mvs = moz_ver(smo.moz_ver);
        return `${symbols.standard_moz_origin}${mvs}${smo.sess}${symbols.c_terminal}`;
    },
    'standard_guid_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, p, d4] = items;
        if (kind !== 'standard_guid_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_guid_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i}${symbols.c_terminal}${p}${symbols.c_terminal}${d4}${symbols.c_terminal}`;
    },
    'standard_local_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4] = items;
        if (kind !== 'standard_local_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_local_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}`;
    },
    'standard_remote_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
        if (kind !== 'standard_remote_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_remote_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}${i2}${symbols.c_terminal}${d5}${symbols.c_terminal}${d6}${symbols.c_terminal}`;
    },
    'standard_agen_tcp_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, d5] = items;
        if (kind !== 'standard_agen_tcp_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_tcp_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
    },
    'unknown_terminate': (v) => `${symbols.unknown_terminate}${v.value}`
};
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
            if (parseable[v.kind] === undefined) {
                throw new TypeError(`Impossible bytestring symbol found: ${JSON.stringify(v.kind)}`);
            }
            else {
                work += parseable[v.kind](v);
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
