
// because of the high flag, the space-efficiently representable character table
// in unicode is actually seven bits.  therefore so are our flags.



const c_terminal                  = '\x00';

const offer                       = '\x01',
      answer                      = '\x02',
      version_zero_line           = '\x03',
      version_line                = '\x04',
      a_msid_semantic_ns          = '\x05',
      a_msid_semantic_ws          = '\x06',
      a_extmap_allow_mixed        = '\x07',
      a_standard_sctp_port        = '\x08',
      a_custom_sctp_port          = '\x09',
      a_standard_max_message_size = '\x0a',
      a_custom_max_message_size   = '\x0b',
      a_setup_actpass             = '\x0c',
      a_setup_active              = '\x0d',
      a_mid_zero                  = '\x0e',
      s_dash                      = '\x0f',
      t_zero_zero                 = '\x10';

const short_separator_follows     = '\x7c',
      short_separators_all        = '\x7d';

const unknown_line                = '\x7e';

// consumes the rest of the bytestring into the output, *then* the after-queue
const unknown_terminate           = '\x7f';  // 127 is the highest efficient value



export {
  c_terminal,
  offer, answer,
  version_zero_line, version_line,
  a_msid_semantic_ns, a_msid_semantic_ws, a_extmap_allow_mixed,
  a_standard_sctp_port, a_custom_sctp_port,
  a_standard_max_message_size, a_custom_max_message_size,
  a_setup_actpass, a_setup_active, a_mid_zero,
  s_dash,
  t_zero_zero,
  short_separator_follows, short_separators_all,
  unknown_line, unknown_terminate
};
