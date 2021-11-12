
import * as symbols from './symbols';





function unpack(bytestring: string): string {

  if (bytestring === '') { return ''; }

  let i      : number,
      iC     : number,
      work   : string = '',
      at_end : string = '';


  function unpack_none(s: string)    { return s; }
  function unpack_decimal(d: string) { return d; }  // eventually this will be a null-not-containing number encoding


  function scan_forward_to_null(prefix: string, throw_label: string, unpacker: Function = unpack_none) {

    let found: false | number = false,
        end;

    for (end=i+1; end<iC; ++end) {
      if (bytestring.charAt(end) === symbols.c_terminal) {
        found = end;
        end   = iC;
      }
    }

    if (found === false) { throw new RangeError(`No terminal null for ${throw_label} at ${i}`); }
    work   += `${prefix}${unpacker(bytestring.substring(i+i, end+1))}\r\n`;  // todo handle soft \n
    i       = end+1;                                                         // skip forward substring's length

  }


  for (i=0, iC = bytestring.length; i<iC; ++i) {

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
        scan_forward_to_null('', 'unknown_line');
        break;

      case symbols.a_msid_semantic_ns:
        work   += `a=msid-semantic:WMS\r\n`;  // todo handle soft \n
        break;

      case symbols.version_zero_line:
        work   += `a=msid-semantic: WMS\r\n`;  // todo handle soft \n
        break;

      case symbols.a_extmap_allow_mixed:
        work   += `a=extmap-allow-mixed\r\n`;  // todo handle soft \n
        break;

      case symbols.a_standard_sctp_port:
        work   += `a=sctp-port:5000\r\n`;  // todo handle soft \n
        break;

      case symbols.a_custom_sctp_port:
        scan_forward_to_null('a=sctp-port:', 'a_custom_sctp_port', unpack_decimal);
        break;

      case symbols.a_standard_max_message_size:
        work   += `a=max-message-size:262144\r\n`;  // todo handle soft \n
        break;

      case symbols.a_custom_max_message_size:
        scan_forward_to_null('a=max-message-size:', 'a_custom_max_message_size', unpack_decimal);
        break;

      case symbols.version_line:
        scan_forward_to_null('v=', 'version_line');
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
