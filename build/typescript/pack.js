import { parse } from './parsers';
import * as symbols from './symbols';
function moz_ver([maj, min, patch]) {
    return `${[maj, min, patch].filter(i => i !== undefined).map(i => i.toString()).join('.')}${symbols.c_terminal}`;
}
function pack_sha256(sha256) {
    let ret = '';
    for (let cursor = 0; cursor < sha256.length; cursor += 2) {
        const hi = parseInt(sha256[cursor] ?? '0', 16), lo = parseInt(sha256[cursor + 1] ?? '0', 16), byte = (hi * 16) + lo;
        ret += String.fromCodePoint(byte);
    }
    return ret;
}
function pack_i32(i32) {
    let val;
    switch (typeof i32) {
        case 'number':
            val = i32;
            break;
        case 'string':
            val = Number(i32);
            break;
        case 'bigint':
            val = Number(i32);
            break;
    }
    const arr = new ArrayBuffer(4), view = new DataView(arr);
    view.setUint32(0, val, false);
    const A = String.fromCodePoint(view.getUint8(0)), B = String.fromCodePoint(view.getUint8(1)), C = String.fromCodePoint(view.getUint8(2)), D = String.fromCodePoint(view.getUint8(3));
    return `${A}${B}${C}${D}`;
}
const parseable = {
    'unknown_line': (v) => `${symbols.unknown_line}${v.value}${symbols.c_terminal}`,
    'version_zero_line': (_) => `${symbols.version_zero_line}`,
    'version_line': (v) => `${symbols.version_line}${v.value}${symbols.c_terminal}`,
    'a_msid_semantic_ns': (_) => `${symbols.a_msid_semantic_ns}`,
    'a_msid_semantic_star_ns': (_) => `${symbols.a_msid_semantic_star_ns}`,
    'a_msid_semantic_ws': (_) => `${symbols.a_msid_semantic_ws}`,
    'a_extmap_allow_mixed': (_) => `${symbols.a_extmap_allow_mixed}`,
    'a_standard_sctp_port': (_) => `${symbols.a_standard_sctp_port}`,
    'a_custom_sctp_port': (v) => `${symbols.a_custom_sctp_port}${v.value}${symbols.c_terminal}`,
    'a_standard_max_message_size': (_) => `${symbols.a_standard_max_message_size}`,
    'a_custom_max_message_size': (v) => `${symbols.a_custom_max_message_size}${v.value}${symbols.c_terminal}`,
    'a_setup_actpass': (_) => `${symbols.a_setup_actpass}`,
    'a_setup_active': (_) => `${symbols.a_setup_active}`,
    'a_mid_zero': (_) => `${symbols.a_mid_zero}`,
    'a_group_bundle_0': (_) => `${symbols.a_group_bundle_0}`,
    'a_ice_pwd': (v) => `${symbols.a_ice_pwd}${v.value}${symbols.c_terminal}`,
    'a_ice_pwd_l': (v) => `${symbols.a_ice_pwd_l}${v.value}${symbols.c_terminal}`,
    'a_ice_pwd_v': (v) => `${symbols.a_ice_pwd_v}${v.value}${symbols.c_terminal}`,
    'a_ice_ufrag_4': (v) => `${symbols.a_ice_ufrag_4}${v.value}${symbols.c_terminal}`,
    'a_ice_ufrag_8': (v) => `${symbols.a_ice_ufrag_8}${v.value}${symbols.c_terminal}`,
    'a_fingerprint_sha1_256': (v) => `${symbols.a_fingerprint_sha1_256}${pack_sha256(v.value)}${symbols.c_terminal}`,
    'a_send_recv': (_) => `${symbols.a_send_recv}`,
    'a_end_of_candidates': (_) => `${symbols.a_end_of_candidates}`,
    's_dash': (_) => `${symbols.s_dash}`,
    't_zero_zero': (_) => `${symbols.t_zero_zero}`,
    'b_as_30': (_) => `${symbols.b_as_30}`,
    'c_claim_ip4': (v) => `${symbols.c_claim_ip4}${pack_i32(v.value)}${symbols.c_terminal}`,
    'standard_m_application': (v) => `${symbols.standard_m_application}${v.value}${symbols.c_terminal}`,
    'standard_origin': (v) => {
        const { kind, items } = v;
        const [s, d, i] = items;
        if (kind !== 'standard_origin') {
            throw 'impossible';
        }
        return `${symbols.standard_origin}${s}${symbols.c_terminal}${d}${symbols.c_terminal}${pack_i32(i)}${symbols.c_terminal}`;
    },
    'standard_moz_origin': (v) => {
        const smo = v, mvs = moz_ver(smo.moz_ver);
        return `${symbols.standard_moz_origin}${mvs}${smo.sess}${symbols.c_terminal}`;
    },
    'standard_guid_local_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        if (kind !== 'standard_guid_local_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_guid_local_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i}${symbols.c_terminal}${d4}${symbols.c_terminal}`;
    },
    'standard_guid_local_candidate_ffus': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        if (kind !== 'standard_guid_local_candidate_ffus') {
            throw 'impossible';
        }
        return `${symbols.standard_guid_local_candidate_ffus}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i}${symbols.c_terminal}${d4}${symbols.c_terminal}`;
    },
    'standard_local_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, p, d4] = items;
        if (kind !== 'standard_local_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_local_candidate}${pack_i32(d1)}${symbols.c_terminal}${pack_i32(d2)}${symbols.c_terminal}${d3}${symbols.c_terminal}${pack_i32(i1)}${symbols.c_terminal}${p}${symbols.c_terminal}${d4}${symbols.c_terminal}`;
    },
    'standard_remote_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
        if (kind !== 'standard_remote_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_remote_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${pack_i32(i1)}${symbols.c_terminal}${d4}${symbols.c_terminal}${pack_i32(i2)}${symbols.c_terminal}${d5}${symbols.c_terminal}${d6}${symbols.c_terminal}`;
    },
    'standard_remote_candidate_ffus': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, i2, d5] = items;
        if (kind !== 'standard_remote_candidate_ffus') {
            throw 'impossible';
        }
        return `${symbols.standard_remote_candidate_ffus}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${pack_i32(i1)}${symbols.c_terminal}${d4}${symbols.c_terminal}${pack_i32(i2)}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
    },
    'standard_agen_tcp_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, d5] = items;
        if (kind !== 'standard_agen_tcp_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_tcp_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${pack_i32(i1)}${symbols.c_terminal}${d4}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
    },
    'standard_agen_tcp6_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, d5] = items;
        if (kind !== 'standard_agen_tcp6_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_tcp6_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
    },
    'standard_agen_udp4_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
        if (kind !== 'standard_agen_udp4_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_udp4_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${pack_i32(i1)}${symbols.c_terminal}${d4}${symbols.c_terminal}${pack_i32(i2)}${symbols.c_terminal}${d5}${symbols.c_terminal}${d6}${symbols.c_terminal}`;
    },
    'standard_agen_udp6_host_candidate': (v) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, d5] = items;
        if (kind !== 'standard_agen_udp6_host_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_udp6_host_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${i1}${symbols.c_terminal}${d4}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
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
                throw new TypeError(`[pack] Impossible bytestring symbol found: ${JSON.stringify(v.kind)}`);
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
