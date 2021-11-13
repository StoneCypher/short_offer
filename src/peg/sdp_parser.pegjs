
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

    return retval;

  }



}





RawDocument
  = Offer
  / Answer
  / UnknownTerminatingString



Decimal
  = d:[0-9]+ { return BigInt(d.join(''), 10); }



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
 / StandardMozOrigin
 / StandardSctpPort
 / CustomSctpPort
 / StandardMaxMessageSize
 / CustomMaxMessageSize
 / UnknownRule



ValZeroLine
 = 'v=0\r\n'
 { return ast('version_zero_line', undefined); }



ValLine
 = 'v=' us:UntilSeparator
 { return ast('version_line', us); }



AttrMsidSemanticWmsClaimNoSpace
  = 'a=msid-semantic:WMS'
  { return ast('a_msid_semantic_ns', undefined); }



AttrMsidSemanticWmsClaimWithSpace
  = 'a=msid-semantic: WMS'
  { return ast('a_msid_semantic_ws', undefined); }



AttrExtmapAllowMixed
  = 'a=extmap-allow-mixed'
  { return ast('a_extmap_allow_mixed', undefined); }



ASetupActpass
  = 'a=setup:actpass'
  { return ast('a_setup_actpass'); }



ASetupActive
  = 'a=setup:active'
  { return ast('a_setup_active'); }



AMid0
  = 'a=mid:0'
  { return ast('a_mid_zero'); }



SDash
  = 's=-'
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



// o=mozilla...THIS_IS_SDPARTA-90.0.2 4132699980109199001 0 IN IP4 0.0.0.0
StandardMozOrigin
  = 'o=mozilla...THIS_IS_SDPARTA-' mv:MozVNum ' ' msess:Decimal ' 0 IN IP4 0.0.0.0'
  { return ast('standard_moz_origin', [mv, msess]); }



TZeroZero
  = 't=0 0'
  { return ast('t_zero_zero'); }



StandardSctpPort
  = 'a=sctp-port:5000'
  { return ast('a_standard_sctp_port'); }



CustomSctpPort
  = 'a=sctp-port:' data:Decimal
  { return ast('a_custom_sctp_port', data); }



StandardMaxMessageSize
  = 'a=max-message-size:262144'
  { return ast('a_standard_max_message_size'); }



CustomMaxMessageSize
  = 'a=max-message-size:' data:Decimal
  { return ast('a_custom_max_message_size', data); }



UnknownRule
 = us:UntilSeparator
 { return ast('unknown_line', us); }



UntilSeparator
 = rl:[^'\r\n']* '\r\n'
 { return rl.join(''); }



UnknownTerminatingString
  = uts:.* { return ast( 'unknown_terminate', uts.join('') ); }
