
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
 = rl:[^'\r\n']* '\r\n' { return ast('unknown_line', rl.join('')); }



UnknownTerminatingString
  = uts:.* { return ast( 'unknown_terminate', uts.join('') ); }
