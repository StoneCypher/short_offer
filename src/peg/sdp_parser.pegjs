
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
  / UnknownTerminatingString



Offer
  = '{"type":"offer","sdp":"' s:.* '"}'
  { return ast('offer', s.join('') ); }



UnknownTerminatingString
  = uts:.* { return ast( 'unknown_terminate', uts.join('') ); }
