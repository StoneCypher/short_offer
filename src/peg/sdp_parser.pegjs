
{



  function ast(kind, value) {

    const uses_short_nl = false; // todo

    let retval = {
      kind,
      value,
      uses_short_nl,
      loc: location()
    };

    if (kind === 'standard_moz_origin') {
      retval.moz_ver = value[0].value;
      retval.sess    = value[1];
      value          = '';
    }

    if (['standard_origin',
         'standard_local_candidate',
         'standard_guid_candidate',
         'standard_remote_candidate',
         'standard_agen_tcp_candidate',
         'standard_agen_tcp6_candidate'
        ].includes(kind)) {
      retval.items = value;
      retval.value = '';
    }

    return retval;

  }



}





RawDocument
  = Offer
  / Answer
  / UnknownTerminatingString



Digit
  = [0-9]



Decimal
  = d:Digit+ { return BigInt(d.join(''), 10); }



Hex
  = [0-9a-fA-F]



Hex2
  = a:Hex b:Hex { return `${a}${b}`; }



Hex4
  = a:Hex b:Hex c:Hex d:Hex
  { return [a,b,c,d].join(''); }



Hex8
  = a:Hex b:Hex c:Hex d:Hex e:Hex f:Hex g:Hex h:Hex
  { return [a,b,c,d,e,f,g,h].join(''); }



Hex12
  = a:Hex b:Hex c:Hex d:Hex e:Hex f:Hex g:Hex h:Hex i:Hex j:Hex k:Hex l:Hex
  { return [a,b,c,d,e,f,g,h,i,j,k,l].join(''); }



CHex64
  = a:Hex2 ':' b:Hex2 ':' c:Hex2 ':' d:Hex2 ':' e:Hex2 ':' f:Hex2 ':' g:Hex2 ':' h:Hex2 ':'
    i:Hex2 ':' j:Hex2 ':' k:Hex2 ':' l:Hex2 ':' m:Hex2 ':' n:Hex2 ':' o:Hex2 ':' p:Hex2 ':'
    q:Hex2 ':' r:Hex2 ':' s:Hex2 ':' t:Hex2 ':' u:Hex2 ':' v:Hex2 ':' w:Hex2 ':' x:Hex2 ':'
    y:Hex2 ':' z:Hex2 ':' A:Hex2 ':' B:Hex2 ':' C:Hex2 ':' D:Hex2 ':' E:Hex2 ':' F:Hex2
  { return [ a,b,c,d,e,f,g,h, i,j,k,l,m,n,o,p, q,r,s,t,u,v,w,x, y,z,A,B,C,D,E,F ].join(''); }



IceChar
  = [0-9a-zA-Z/+]



IceChar4
  = a:IceChar b:IceChar c:IceChar d:IceChar
  { return [a,b,c,d].join(''); }



IceChar22
  = a:IceChar b:IceChar c:IceChar d:IceChar e:IceChar f:IceChar
    g:IceChar h:IceChar i:IceChar j:IceChar k:IceChar l:IceChar
    m:IceChar n:IceChar o:IceChar p:IceChar q:IceChar r:IceChar
    s:IceChar t:IceChar u:IceChar v:IceChar
  { return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v].join(''); }



IceChar24
  = a:IceChar b:IceChar c:IceChar d:IceChar e:IceChar f:IceChar
    g:IceChar h:IceChar i:IceChar j:IceChar k:IceChar l:IceChar
    m:IceChar n:IceChar o:IceChar p:IceChar q:IceChar r:IceChar
    s:IceChar t:IceChar u:IceChar v:IceChar w:IceChar x:IceChar
  { return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x].join(''); }



GUID
  = a:Hex8 '-' b:Hex4 '-' c:Hex4 '-' d:Hex4 '-' e:Hex12
  { return [a,b,c,d,e].join(''); }



IP4
  = a:Decimal '.' b:Decimal '.' c:Decimal '.' d:Decimal
  { return ((((( (a*256n) +b) *256n) +c) *256n) +d).toString(); }



// cribbed from https://git.insoft.cz/insoft/modified-sip.js/-/blob/3081a21bd47215679f7f1dac8c771ae6f3d7193b/src/grammar/src/grammar.pegjs
IP6
  = h16 ":" h16 ":" h16 ":" h16 ":" h16 ":" h16 ":" ls32
  /    "::" h16 ":" h16 ":" h16 ":" h16 ":" h16 ":" ls32
  /    "::" h16 ":" h16 ":" h16 ":" h16 ":" ls32
  /    "::" h16 ":" h16 ":" h16 ":" ls32
  /    "::" h16 ":" h16 ":" ls32
  /    "::" h16 ":" ls32
  /    "::" ls32
  /    "::" h16
  / h16                                                                   "::" h16 ":" h16 ":" h16 ":" h16 ":" ls32
  / h16 (":" h16)?                                                        "::" h16 ":" h16 ":" h16 ":" ls32
  / h16 (":" h16)? (":" h16)?                                             "::" h16 ":" h16 ":" ls32
  / h16 (":" h16)? (":" h16)? (":" h16)?                                  "::" h16 ":" ls32
  / h16 (":" h16)? (":" h16)? (":" h16)? (":" h16)?                       "::" ls32
  / h16 (":" h16)? (":" h16)? (":" h16)? (":" h16)? (":" h16)?            "::" h16
  / h16 (":" h16)? (":" h16)? (":" h16)? (":" h16)? (":" h16)? (":" h16)? "::"


h16
  = Hex Hex? Hex? Hex?



ls32
  = ( h16 ":" h16 ) / IPv4address



IPv4address
  = dec_octet "." dec_octet "." dec_octet "." dec_octet



dec_octet
  = "25"                    [\x30-\x35] // 250-255
  / "2"         [\x30-\x34] Digit       // 200-249
  / "1"         Digit       Digit       // 100-199
  / [\x31-\x39] Digit                   //  10-99
  / Digit                               //   0-9



Offer
  = '{"type":"offer","sdp":"' s:Rule* '"}'
  { return ast('offer', s ); }



Answer
  = '{"type":"answer","sdp":"' s:Rule* '"}'
  { return ast('answer', s ); }



// todo: modify this to tolerate \n instead of \r\n
Rule
 = ValZeroLine
 / ValLine
 / AttrMsidSemanticWmsClaimNoSpace
 / AttrMsidSemanticWmsClaimWithSpace
 / AttrExtmapAllowMixed
 / ASetupActpass
 / ASetupActive
 / AMid0
 / SDash
 / TZeroZero
 / StandardOrigin
 / StandardMozOrigin
 / StandardSctpPort
 / CustomSctpPort
 / StandardMaxMessageSize
 / CustomMaxMessageSize
 / AStandardLocalCandidate
 / AStandardGuidCandidate
 / AStandardIp4RemoteCandidate
 / AStandardAGenTcpCandidate
 / AStandardAGenTcp6Candidate
 / AIcePwd
 / AIcePwdL
 / AIceUFrag
 / AFingerprint
 / AGroupBundle0
 / ASendRecv
 / AEndOfCandidates
 / UnknownRule



ValZeroLine
 = 'v=0' us:UntilSeparator
 { return ast('version_zero_line', undefined); }



ValLine
 = 'v=' us:UntilSeparator
 { return ast('version_line', us); }



ASendRecv
 = 'a=sendrecv' us:UntilSeparator
 { return ast('a_send_recv', us); }



AEndOfCandidates
 = 'a=end-of-candidates' us:UntilSeparator
 { return ast('a_end_of_candidates', us); }



AttrMsidSemanticWmsClaimNoSpace
  = 'a=msid-semantic:WMS' us:UntilSeparator
  { return ast('a_msid_semantic_ns', undefined); }



AttrMsidSemanticWmsClaimWithSpace
  = 'a=msid-semantic: WMS' us:UntilSeparator
  { return ast('a_msid_semantic_ws', undefined); }



AttrExtmapAllowMixed
  = 'a=extmap-allow-mixed' us:UntilSeparator
  { return ast('a_extmap_allow_mixed', undefined); }



ASetupActpass
  = 'a=setup:actpass' us:UntilSeparator
  { return ast('a_setup_actpass'); }



ASetupActive
  = 'a=setup:active' us:UntilSeparator
  { return ast('a_setup_active'); }



AMid0
  = 'a=mid:0' us:UntilSeparator
  { return ast('a_mid_zero'); }



SDash
  = 's=-' us:UntilSeparator
  { return ast('s_dash'); }



MozVNum
  = MozVNum3
  / MozVNum2



MozVNum3
  = maj:Decimal '.' min:Decimal '.' patch:Decimal
  { return ast('moz_v_num', [maj, min, patch]); }



MozVNum2
  = maj:Decimal '.' min:Decimal
  { return ast('moz_v_num', [maj, min, undefined]); }



// o=- 1199580080461629164 2 IN IP4 127.0.0.1
StandardOrigin
  = 'o=- ' msess:Decimal ' ' d:Decimal ' IN IP4 ' i:IP4 us:UntilSeparator
  { return ast('standard_origin', [msess, d, i]); }



// o=mozilla...THIS_IS_SDPARTA-90.0.2 4132699980109199001 0 IN IP4 0.0.0.0
StandardMozOrigin
  = 'o=mozilla...THIS_IS_SDPARTA-' mv:MozVNum ' ' msess:Decimal ' 0 IN IP4 0.0.0.0' us:UntilSeparator
  { return ast('standard_moz_origin', [mv, msess]); }



TZeroZero
  = 't=0 0' us:UntilSeparator
  { return ast('t_zero_zero'); }



StandardSctpPort
  = 'a=sctp-port:5000' us:UntilSeparator
  { return ast('a_standard_sctp_port'); }



CustomSctpPort
  = 'a=sctp-port:' data:Decimal us:UntilSeparator
  { return ast('a_custom_sctp_port', data); }



StandardMaxMessageSize
  = 'a=max-message-size:262144' us:UntilSeparator
  { return ast('a_standard_max_message_size'); }



CustomMaxMessageSize
  = 'a=max-message-size:' data:Decimal us:UntilSeparator
  { return ast('a_custom_max_message_size', data); }



AStandardGuidCandidate
  = 'a=candidate:' d1:Decimal ' ' d2:Decimal ' udp ' d3:Decimal ' ' i:IP4
    ' ' p:Decimal ' typ host generation 0 network-id ' d4:Decimal us:UntilSeparator
  { return ast('standard_guid_candidate', [ d1, d2, d3, i, p, d4 ]); }



AStandardLocalCandidate
  = 'a=candidate:' d1:Decimal ' ' d2:Decimal ' udp ' d3:Decimal ' ' g:GUID
    '.local ' d4:Decimal ' typ host generation 0 network-cost 999' us:UntilSeparator
  { return ast('standard_local_candidate', [ d1, d2, d3, g, d4 ]); }



AStandardIp4RemoteCandidate
  = 'a=candidate:' d1:Decimal ' ' d2:Decimal ' udp ' d3:Decimal ' ' i1:IP4
    ' ' d4:Decimal ' typ srflx raddr ' i2:IP4 ' rport ' d5:Decimal ' generation '
    d6:Decimal ' network-cost 999' us:UntilSeparator
  { return ast('standard_remote_candidate', [ d1, d2, d3, i1, d4, i2, d5, d6 ]); }



AStandardAGenTcpCandidate
  = 'a=candidate:' d1:Decimal ' ' d2:Decimal ' tcp ' d3:Decimal ' ' i1:IP4
    ' ' d4:Decimal ' typ host tcptype active generation 0 network-id ' d5:Decimal us:UntilSeparator
  { return ast('standard_agen_tcp_candidate', [ d1, d2, d3, i1, d4, d5 ]); }



AStandardAGenTcp6Candidate
  = 'a=candidate:' d1:Decimal ' ' d2:Decimal ' tcp ' d3:Decimal ' ' i1:IP6
    ' ' d4:Decimal ' typ host tcptype active generation 0 network-id ' d5:Decimal us:UntilSeparator
  { return ast('standard_agen_tcp6_candidate', [ d1, d2, d3, i1, d4, d5 ]); }



AIcePwd
  = 'a=ice-pwd:' data:IceChar22 us:UntilSeparator
  { return ast('a_ice_pwd', data); }



AIcePwdL
  = 'a=ice-pwd:' data:IceChar24 us:UntilSeparator
  { return ast('a_ice_pwd_l', data); }



AIceUFrag
  = 'a=ice-ufrag:' data:IceChar4 us:UntilSeparator
  { return ast('a_ice_ufrag', data); }



AFingerprint
  = 'a=fingerprint:sha-256 ' data:CHex64 us:UntilSeparator
  { return ast('a_fingerprint_sha1_256', data); }



AGroupBundle0
  = 'a=group:BUNDLE 0' us:UntilSeparator
  { return ast('a_group_bundle_0'); }



// a=candidate:142444745 1 tcp 1518149375 10.0.0.163 9 typ host tcptype active generation 0 network-id 1


// a=candidate:2190342532 1 tcp 1517952767 172.21.32.1 9 typ host tcptype active generation 0 network-id 6
// AStandardIp4RemoteCandidate
//   = 'a=candidate:' d1:Decimal ' ' d2:Decimal ' udp ' d3:Decimal ' ' i1:IP4
//     ' ' d4:Decimal ' typ srflx raddr ' i2:IP4 ' rport ' d5:Decimal ' generation '
//     d6:Decimal ' network-cost 999'
//   { return ast('AStandardIp4RemoteCandidate', [ d1, d2, d3, i1, d4, i2, d5, d6 ]); }



UnknownRule
 = us:UntilSeparator
 { return ast('unknown_line', us); }



UntilSeparator
 = rl:[^'\r\n']* '\r\n'
 { return rl.join(''); }



UnknownTerminatingString
  = uts:.* { return ast( 'unknown_terminate', uts.join('') ); }
