declare function unpack_i16(str: string): string;
declare function unpack_i16_hex_padded(str: string): string;
declare function unpack_i64(str: string): string;
declare function unpack_guid(guid: string): string;
declare function unpack(bytestring: string): string;
export { unpack, unpack_guid };
export { unpack_i16, unpack_i16_hex_padded, unpack_i64 };
