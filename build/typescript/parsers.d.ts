import { ParsedSdp } from './types';
declare function parse(code: string): ParsedSdp;
declare function deparse(bytecode: string): any;
export { parse, deparse };
