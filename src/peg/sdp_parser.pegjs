
{



  function ast(kind, value, ends_with) {

    return {
      kind,
      value,
      ends_with: ends_with? ends_with.kind : undefined,
      loc: location()
    };

  }



}





RawDocument
  = Offer
  / Answer;


Offer
  = '{"type":"offer","sdp":"' s:SdpDocument '"}'
  { return ast('offer', s); }


Answer
  = '{"type":"answer","sdp":"' s:SdpDocument '"}'
  { return ast('answer', s); }


SdpDocument =
  doc:MaybeKnownLine*;


// separator is '\r\n', but should tolerate '\n', according to 5
//   https://datatracker.ietf.org/doc/html/rfc8866#section-5


Separator
  = '\r\n' { return ast('separator'); }
  / '\n'   { return ast('weak separator'); }


AllNotSeparator
  = ans:[^'\r\n']*
  { return ans.join(''); }


MaybeKnownLine
  = VLine
  / UnknownLine;


// lines are any single letter, case sensitive; then an =; then a separator,
//   according to 5
//   https://datatracker.ietf.org/doc/html/rfc8866#section-5

VLine
  = 'v=' val:AllNotSeparator ends_with:Separator
  { return ast('vline', val, ends_with); }

UnknownLine
  = val:AllNotSeparator ends_with:Separator
  { return ast('unknown-line', val, ends_with); }
