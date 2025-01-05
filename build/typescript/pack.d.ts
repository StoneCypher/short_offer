import { ParsedSdp } from './types';
declare function pack_i16(i16: number | string): string;
declare function pack_i64(i64: number | bigint | string): string;
declare function pack_guid(guid_hex_8_4_4_4_12: string | number): string;
declare function parsed_to_bytestring(parsed: ParsedSdp): string;
declare function pack(original: string): string;
export { pack, pack_guid, parsed_to_bytestring };
export { pack_i16, pack_i64 };
