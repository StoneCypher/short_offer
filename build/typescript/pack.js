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
function pack_i8(i8) {
    let val;
    switch (typeof i8) {
        case 'number':
            val = i8;
            break;
        case 'string':
            val = Number(i8);
            break;
        case 'bigint':
            val = Number(i8);
            break;
    }
    const arr = new ArrayBuffer(1), view = new DataView(arr);
    view.setUint8(0, val);
    return String.fromCodePoint(view.getUint8(0));
}
function pack_i16(i16) {
    let val;
    switch (typeof i16) {
        case 'number':
            val = i16;
            break;
        case 'string':
            val = Number(i16);
            break;
        case 'bigint':
            val = Number(i16);
            break;
    }
    const arr = new ArrayBuffer(2), view = new DataView(arr);
    view.setUint16(0, val, false);
    const A = String.fromCodePoint(view.getUint8(0)), B = String.fromCodePoint(view.getUint8(1));
    return `${A}${B}`;
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
function pack_i64(i64) {
    let val = BigInt(i64);
    const arr = new ArrayBuffer(8), view = new DataView(arr);
    view.setBigUint64(0, val, false);
    const A = String.fromCodePoint(view.getUint8(0)), B = String.fromCodePoint(view.getUint8(1)), C = String.fromCodePoint(view.getUint8(2)), D = String.fromCodePoint(view.getUint8(3)), E = String.fromCodePoint(view.getUint8(4)), F = String.fromCodePoint(view.getUint8(5)), G = String.fromCodePoint(view.getUint8(6)), H = String.fromCodePoint(view.getUint8(7));
    return `${A}${B}${C}${D}${E}${F}${G}${H}`;
}
const parseable = {
    'unknown_line': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.unknown_line}${v.value}${symbols.c_terminal}`,
    'version_zero_line': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.version_zero_line}`,
    'version_line': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.version_line}${v.value}${symbols.c_terminal}`,
    'a_msid_semantic_ns': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_msid_semantic_ns}`,
    'a_msid_semantic_star_ns': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_msid_semantic_star_ns}`,
    'a_msid_semantic_ws': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_msid_semantic_ws}`,
    'a_extmap_allow_mixed': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_extmap_allow_mixed}`,
    'a_standard_sctp_port': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_standard_sctp_port}`,
    'a_custom_sctp_port': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.a_custom_sctp_port}${v.value}${symbols.c_terminal}`,
    'a_standard_max_message_size': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_standard_max_message_size}`,
    'a_custom_max_message_size': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.a_custom_max_message_size}${v.value}${symbols.c_terminal}`,
    'a_setup_actpass': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_setup_actpass}`,
    'a_setup_active': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_setup_active}`,
    'a_mid_zero': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_mid_zero}`,
    'a_group_bundle_0': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_group_bundle_0}`,
    'a_ice_pwd': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.a_ice_pwd}${v.value}${symbols.c_terminal}`,
    'a_ice_pwd_l': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.a_ice_pwd_l}${v.value}${symbols.c_terminal}`,
    'a_ice_pwd_v': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.a_ice_pwd_v}${v.value}${symbols.c_terminal}`,
    'a_ice_ufrag_4': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.a_ice_ufrag_4}${v.value}${symbols.c_terminal}`,
    'a_ice_ufrag_8': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.a_ice_ufrag_8}${v.value}${symbols.c_terminal}`,
    'a_fingerprint_sha1_256': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.a_fingerprint_sha1_256}${pack_sha256(v.value)}${symbols.c_terminal}`,
    'a_send_recv': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_send_recv}`,
    'a_end_of_candidates': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_end_of_candidates}`,
    's_dash': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.s_dash}`,
    't_zero_zero': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.t_zero_zero}`,
    'b_as_30': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.b_as_30}`,
    'c_claim_ip4': (v, addresses4_dsa, _addresses6_csa) => {
        const { value } = v;
        let found = addresses4_dsa.indexOf(value);
        if (found === -1) {
            throw new Error(`FATAL: missing address ${value}`);
        }
        return `${symbols.c_claim_ip4}${pack_i8(found)}`;
    },
    'standard_m_application': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.standard_m_application}${pack_i16(v.value)}`,
    'a_ice_options_trickle': (_, _addresses4_dsa, _addresses6_csa) => `${symbols.a_ice_options_trickle}`,
    'standard_origin': (v, addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [s, d, i] = items;
        if (kind !== 'standard_origin') {
            throw 'impossible';
        }
        let found = addresses4_dsa.indexOf(i);
        if (found === -1) {
            throw new Error(`FATAL: missing address ${i}`);
        }
        return `${symbols.standard_origin}${pack_i64(s)}${d}${symbols.c_terminal}${pack_i8(found)}`;
    },
    'standard_moz_origin': (v, _addresses4_dsa, _addresses6_csa) => {
        const smo = v, mvs = moz_ver(smo.moz_ver);
        return `${symbols.standard_moz_origin}${mvs}${pack_i64(smo.sess)}`;
    },
    'standard_guid_local_candidate': (v, _addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        if (kind !== 'standard_guid_local_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_guid_local_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${i}${symbols.c_terminal}${pack_i16(d4)}`;
    },
    'standard_ip4_local_candidate_ffus': (v, addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        let found1 = addresses4_dsa.indexOf(i);
        if (found1 === -1) {
            throw new Error(`FATAL: missing address 1 ${i}`);
        }
        if (kind !== 'standard_ip4_local_candidate_ffus') {
            throw 'impossible';
        }
        return `${symbols.standard_ip4_local_candidate_ffus}${pack_i8(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found1)}${pack_i16(d4)}`;
    },
    'standard_ip4_local_candidate_ffus_active': (v, addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        let found1 = addresses4_dsa.indexOf(i);
        if (found1 === -1) {
            throw new Error(`FATAL: missing address 1 ${i}`);
        }
        if (kind !== 'standard_ip4_local_candidate_ffus_active') {
            throw 'impossible';
        }
        return `${symbols.standard_ip4_local_candidate_ffus_active}${pack_i8(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found1)}${pack_i16(d4)}`;
    },
    'standard_guid_local_candidate_ffus': (v, _addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        if (kind !== 'standard_guid_local_candidate_ffus') {
            throw 'impossible';
        }
        return `${symbols.standard_guid_local_candidate_ffus}${pack_i8(d1)}${pack_i8(d2)}${pack_i32(d3)}${i}${symbols.c_terminal}${pack_i16(d4)}`;
    },
    'standard_tcp_guid_local_candidate_ffus_active': (v, _addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i, d4] = items;
        if (kind !== 'standard_tcp_guid_local_candidate_ffus_active') {
            throw 'impossible';
        }
        return `${symbols.standard_tcp_guid_local_candidate_ffus_active}${pack_i8(d1)}${pack_i8(d2)}${pack_i32(d3)}${i}${symbols.c_terminal}${pack_i16(d4)}`;
    },
    'standard_local_candidate': (v, addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, p, d4] = items;
        let found = addresses4_dsa.indexOf(i1);
        if (found === -1) {
            throw new Error(`FATAL: missing address ${i1}`);
        }
        if (kind !== 'standard_local_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_local_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${pack_i16(p)}${d4}${symbols.c_terminal}`;
    },
    'standard_remote_candidate': (v, addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
        let found1 = addresses4_dsa.indexOf(i1);
        if (found1 === -1) {
            throw new Error(`FATAL: missing address 1 ${i1}`);
        }
        let found2 = addresses4_dsa.indexOf(i2);
        if (found2 === -1) {
            throw new Error(`FATAL: missing address 2 ${i2}`);
        }
        if (kind !== 'standard_remote_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_remote_candidate}${d1}${symbols.c_terminal}${d2}${symbols.c_terminal}${d3}${symbols.c_terminal}${pack_i8(found1)}${d4}${symbols.c_terminal}${pack_i8(found2)}${d5}${symbols.c_terminal}${d6}${symbols.c_terminal}`;
    },
    'standard_remote_candidate_ffus': (v, addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, i2, d5] = items;
        let found1 = addresses4_dsa.indexOf(i1);
        if (found1 === -1) {
            throw new Error(`FATAL: missing address 1 ${i1}`);
        }
        let found2 = addresses4_dsa.indexOf(i2);
        if (found2 === -1) {
            throw new Error(`FATAL: missing address 2 ${i2}`);
        }
        if (kind !== 'standard_remote_candidate_ffus') {
            throw 'impossible';
        }
        return `${symbols.standard_remote_candidate_ffus}${pack_i32(d1)}${pack_i8(d2)}${symbols.c_terminal}${pack_i32(d3)}${pack_i8(found1)}${d4}${symbols.c_terminal}${pack_i8(found2)}${d5}${symbols.c_terminal}`;
    },
    'standard_agen_tcp_candidate': (v, addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, d5] = items;
        let found = addresses4_dsa.indexOf(i1);
        if (found === -1) {
            throw new Error(`FATAL: missing address ${i1}`);
        }
        if (kind !== 'standard_agen_tcp_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_tcp_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${d4}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
    },
    'standard_agen_tcp6_candidate': (v, _addresses4_dsa, addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, d5] = items;
        let found = addresses6_csa.indexOf(i1);
        if (found === -1) {
            throw new Error(`FATAL: missing address ${i1}`);
        }
        if (kind !== 'standard_agen_tcp6_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_tcp6_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${d4}${symbols.c_terminal}${d5}${symbols.c_terminal}`;
    },
    'standard_agen_udp4_candidate': (v, addresses4_dsa, _addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, d4, i2, d5, d6] = items;
        let found1 = addresses4_dsa.indexOf(i1);
        if (found1 === -1) {
            throw new Error(`FATAL: missing address 1 ${i1}`);
        }
        let found2 = addresses4_dsa.indexOf(i2);
        if (found2 === -1) {
            throw new Error(`FATAL: missing address 2 ${i2}`);
        }
        if (kind !== 'standard_agen_udp4_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_udp4_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found1)}${pack_i16(d4)}${pack_i8(found2)}${pack_i16(d5)}${pack_i8(d6)}`;
    },
    'standard_agen_udp6_host_candidate': (v, _addresses4_dsa, addresses6_csa) => {
        const { kind, items } = v;
        const [d1, d2, d3, i1, p, d5] = items;
        let found = addresses6_csa.indexOf(i1);
        if (found === -1) {
            throw new Error(`FATAL: missing address ${i1}`);
        }
        if (kind !== 'standard_agen_udp6_host_candidate') {
            throw 'impossible';
        }
        return `${symbols.standard_agen_udp6_host_candidate}${pack_i32(d1)}${pack_i8(d2)}${pack_i32(d3)}${pack_i8(found)}${pack_i16(p)}${pack_i8(d5)}`;
    },
    'unknown_terminate': (v, _addresses4_dsa, _addresses6_csa) => `${symbols.unknown_terminate}${v.value}`
};
function bitch(bi) {
    return String.fromCharCode(Number(bi));
}
function addr4_as_decimal_as_string_to_bytes(addr_as_decimal_as_string) {
    const addr = BigInt(addr_as_decimal_as_string);
    const d = addr % 256n, s8 = addr >> 8n, c = s8 % 256n, s16 = s8 >> 8n, b = s16 % 256n, s24 = s16 >> 8n, a = s24 % 256n;
    return `${bitch(a)}${bitch(b)}${bitch(c)}${bitch(d)}`;
}
function biltch(bi) {
    return `${String.fromCharCode((Number(bi) >> 8) % 256)}${String.fromCharCode(Number(bi) % 256)}`;
}
function addr6_as_canon_string_to_bytes(addr_as_canon_string) {
    const addr = addr_as_canon_string.split(':').map(aai16 => BigInt(parseInt(aai16, 16))).filter(a => a !== undefined);
    if (addr.length !== 8) {
        throw new Error('invalid address!');
    }
    const queue = [];
    for (let i = 0; i < 8; ++i) {
        queue.push(biltch(addr[i]));
    }
    return queue.join('');
}
function parsed_to_bytestring(parsed) {
    let work = '', ending = '', skip_iter = false;
    if (parsed.addresses === undefined) {
        work += '\0';
    }
    else {
        if (parsed.addresses.v4.length > 255) {
            throw new Error('Encoding is limited to 255 ipv4 addresses');
        }
        work += String.fromCodePoint(parsed.addresses.v4.length);
        for (let i = 0; i < parsed.addresses.v4.length; ++i) {
            work += addr4_as_decimal_as_string_to_bytes(parsed.addresses.v4[i]);
        }
    }
    if (parsed.addresses === undefined) {
        work += '\0';
    }
    else {
        if (parsed.addresses.v6.length > 255) {
            throw new Error('Encoding is limited to 255 ipv6 addresses');
        }
        work += String.fromCodePoint(parsed.addresses.v6.length);
        for (let i = 0; i < parsed.addresses.v6.length; ++i) {
            work += addr6_as_canon_string_to_bytes(parsed.addresses.v6[i]);
        }
    }
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
                work += parseable[v.kind](v, (parsed?.addresses?.v4 ?? []), (parsed?.addresses?.v6 ?? []));
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
