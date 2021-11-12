import * as symbols from './symbols';
function unpack(bytestring) {
    if (bytestring === '') {
        return '';
    }
    let work = '', at_end = '';
    for (let i = 0, iC = bytestring.length; i < iC; ++i) {
        switch (bytestring.charAt(i)) {
            case symbols.offer:
                work += '{"type":"offer","sdp":"';
                at_end = '"}' + at_end;
                break;
            case symbols.answer:
                work += '{"type":"answer","sdp":"';
                at_end = '"}' + at_end;
                break;
            case symbols.unknown_line:
                let found = false, end;
                for (end = i + 1; end < iC; ++end) {
                    if (bytestring.charAt(end) === symbols.c_terminal) {
                        found = end;
                        end = iC;
                    }
                }
                if (found === false) {
                    throw new RangeError(`No terminal null for unknown_line at ${i}`);
                }
                work += `${bytestring.substring(i + i, end + 1)}\r\n`;
                i = end + 1;
                break;
            case symbols.val_zero_line:
                work += `v=0\r\n`;
                break;
            case symbols.val_line:
                let found2 = false, end2;
                for (end2 = i + 1; end2 < iC; ++end2) {
                    if (bytestring.charAt(end2) === symbols.c_terminal) {
                        found2 = end2;
                        end2 = iC;
                    }
                }
                if (found2 === false) {
                    throw new RangeError(`No terminal null for unknown_line at ${i}`);
                }
                work += `v=${bytestring.substring(i + 1, end2 + 1)}\r\n`;
                i = end2 + 1;
                break;
            case symbols.unknown_terminate:
                work += bytestring.substring(i + 1, iC);
                i = iC;
                break;
            default:
                throw new TypeError(`Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);
        }
    }
    return `${work}${at_end}`;
}
export { unpack };
