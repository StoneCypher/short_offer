
import * as symbols from './symbols';





function unpack(bytestring: string): string {

  if (bytestring === '') { return ''; }

  let work   : string = '',
      at_end : string = '';

  for (let i=0, iC = bytestring.length; i<iC; ++i) {

    switch (bytestring.charAt(i)) {

      case symbols.offer:
        work   += '{"type":"offer","sdp":"';
        at_end  = '"}' + at_end;
        break;

      case symbols.answer:
        work   += '{"type":"answer","sdp":"';
        at_end  = '"}' + at_end;
        break;

      case symbols.unknown_line:
        let found: false | number = false,
            end;
        for (end=i+i; end<iC; ++end) {
          if (bytestring.charAt(end) === symbols.c_terminal) {
            found = end;
            end   = iC;
          }
        }
        if (found === false) { throw new RangeError(`No terminal null for unknown_line at ${i}`); }
        work   += `${bytestring.substring(i+i, end+1)}\r\n`;  // todo handle soft \n
        i       = end+1;                                      // skip forward substring's length
        break;

      case symbols.unknown_terminate:
        work += bytestring.substring(i+1, iC);  // sum everything remaining into the work queue
        i = iC; // end the loop
        break;

      default:
        throw new TypeError(`Unknown symbol at ${i} '${bytestring.charAt(i)}' [${bytestring.charCodeAt(i)}], corrupt encoding'`);

    }

  }

  return `${work}${at_end}`;

}





export { unpack };
