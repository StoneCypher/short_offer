
{



  function ast(kind, value) {

    const uses_short_nl = false; // todo

    return {
      kind,
      value,
      uses_short_nl,
      loc: location()
    };

  }



}





RawDocument
  = Offer
  / Answer
  / UnknownTerminatingString



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



UnknownRule
 = us:UntilSeparator
 { return ast('unknown_line', us); }



UntilSeparator
 = rl:[^'\r\n']* '\r\n'
 { return rl.join(''); }



UnknownTerminatingString
  = uts:.* { return ast( 'unknown_terminate', uts.join('') ); }
