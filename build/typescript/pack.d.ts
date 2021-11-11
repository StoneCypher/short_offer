import { ParsedSdp } from './types';
declare function parsed_to_bytestring(parsed: ParsedSdp): string;
declare function pack(original: string): string;
export { pack, parsed_to_bytestring };
