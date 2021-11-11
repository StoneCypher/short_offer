
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
  = UnknownTerminatingString*

UnknownCharacter
  = uts:.* { return ast('unknown terminating string', value: uts); }
