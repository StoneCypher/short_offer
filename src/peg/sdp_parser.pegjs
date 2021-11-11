
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
  = UnknownTerminatingString

UnknownTerminatingString
  = uts:.* { return ast('unknown_terminate', uts.join('') ); }
