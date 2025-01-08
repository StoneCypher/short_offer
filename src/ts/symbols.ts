
// because of the high flag, the space-efficiently representable character table
// in unicode is actually seven bits.  therefore so are our flags.



const c_terminal                         = '\x00';

const offer                              = '\x01',
      answer                             = '\x02',
      version_zero_line                  = '\x03',
      version_line                       = '\x04',
      a_msid_semantic_ns                 = '\x05',
      a_msid_semantic_star_ns            = '\x06',
      a_msid_semantic_ws                 = '\x07',
      a_extmap_allow_mixed               = '\x08',
      a_standard_sctp_port               = '\x09',
      a_custom_sctp_port                 = '\x0a',
      a_standard_max_message_size        = '\x0b',
      a_custom_max_message_size          = '\x0c',
      a_setup_actpass                    = '\x0d',
      a_setup_active                     = '\x0e',
      a_mid_zero                         = '\x0f',
      s_dash                             = '\x10',
      t_zero_zero                        = '\x11',
      b_as_30                            = '\x12',
      standard_origin                    = '\x13',
      standard_moz_origin                = '\x14',
      standard_local_candidate           = '\x15',
      standard_guid_local_candidate      = '\x16',
      standard_guid_local_candidate_ffus = '\x17',
      standard_tcp_guid_local_candidate_ffus_active = '\x2c',
      standard_remote_candidate          = '\x18',
      standard_ip4_local_candidate_ffus  = '\x19',
      standard_ip4_local_candidate_ffus_active = '\x2b',
      standard_remote_candidate_ffus     = '\x1a',
      standard_agen_tcp_candidate        = '\x1b',
      standard_agen_tcp6_candidate       = '\x1c',
      standard_agen_udp4_candidate       = '\x1d',
      standard_agen_udp6_host_candidate  = '\x1e',
      a_ice_pwd                          = '\x1f',
      a_ice_pwd_l                        = '\x20',
      a_ice_pwd_v                        = '\x21',
      a_ice_ufrag_4                      = '\x22',
      a_ice_ufrag_8                      = '\x23',
      a_fingerprint_sha1_256             = '\x24',
      a_group_bundle_0                   = '\x25',
      a_send_recv                        = '\x26',
      a_end_of_candidates                = '\x27',
      c_claim_ip4                        = '\x28',
      standard_m_application             = '\x29',
      a_ice_options_trickle              = '\x2a';

const short_separator_follows            = '\x7c',
      short_separators_all               = '\x7d';

const unknown_line                       = '\x7e';

// consumes the rest of the bytestring into the output, *then* the after-queue
const unknown_terminate                  = '\x7f';  // 127 is the highest efficient value



export {
  c_terminal,
  offer, answer,
  version_zero_line, version_line,
  a_msid_semantic_ns, a_msid_semantic_star_ns, a_msid_semantic_ws,
  a_extmap_allow_mixed,
  a_standard_sctp_port, a_custom_sctp_port,
  a_standard_max_message_size, a_custom_max_message_size,
  a_setup_actpass, a_setup_active, a_mid_zero,
  s_dash, t_zero_zero, b_as_30,
  standard_origin, standard_moz_origin,
  standard_local_candidate, standard_guid_local_candidate,
  standard_ip4_local_candidate_ffus, standard_ip4_local_candidate_ffus_active,
  standard_tcp_guid_local_candidate_ffus_active, standard_guid_local_candidate_ffus,
  standard_remote_candidate, standard_remote_candidate_ffus,
  standard_agen_tcp_candidate, standard_agen_tcp6_candidate,
  standard_agen_udp4_candidate, standard_agen_udp6_host_candidate,
  a_ice_pwd, a_ice_pwd_l, a_ice_pwd_v,
  a_ice_ufrag_4, a_ice_ufrag_8, a_fingerprint_sha1_256,
  a_group_bundle_0,
  a_send_recv, a_end_of_candidates,
  c_claim_ip4, standard_m_application, a_ice_options_trickle,
  short_separator_follows, short_separators_all,
  unknown_line, unknown_terminate
};
