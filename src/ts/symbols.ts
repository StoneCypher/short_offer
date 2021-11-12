
// because of the high flag, the space-efficiently representable character table
// in unicode is actually seven bits.  therefore so are our flags.



const c_terminal              = '\x00';

const offer                   = '\x01',
      answer                  = '\x02',
      val_zero_line           = '\x03',
      val_line                = '\x04';

const short_separator_follows = '\x7c',
      short_separators_all    = '\x7d';

const unknown_line            = '\x7e';

// consumes the rest of the bytestring into the output, *then* the after-queue
const unknown_terminate       = '\x7f';  // 127 is the highest efficient value



export {
  c_terminal,
  offer, answer,
  val_zero_line, val_line,
  short_separator_follows, short_separators_all,
  unknown_line, unknown_terminate
};
