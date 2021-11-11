
// because of the high flag, the space-efficiently representable character table
// in unicode is actually seven bits.  therefore so are our flags.



const c_terminal              = '\u0000';

const offer                   = '\u0001',
      answer                  = '\u0002',
      vline                   = '\u0003';

const short_separator_follows = '\u007c',
      short_separators_all    = '\u007d';

const unknown_line            = '\u007e';

// consumes the rest of the bytestring into the output, *then* the after-queue
const unknown_terminate       = '\u007f';  // 127 is the highest efficient value



export {
  c_terminal,
  offer, answer,
  vline, unknown_line,
  short_separator_follows, short_separators_all,
  unknown_terminate
};
