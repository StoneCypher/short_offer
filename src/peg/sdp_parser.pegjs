
{



  function ast(kind, value) {

    return {
      kind,
      value,
      loc: location()
    };

  }



}





RawDocument
  = UnknownTerminatingString

UnknownTerminatingString
  = uts:.* { return ast('unknown terminating string', uts); }
