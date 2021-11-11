import * as symbols from './symbols';
function unpack(bytestring) {
    if (bytestring === '') {
        return '';
    }
    let work = '', at_end = '';
    for (let i = 0, iC = bytestring.length; i < iC; ++i) {
        switch (bytestring.charAt(i)) {
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
