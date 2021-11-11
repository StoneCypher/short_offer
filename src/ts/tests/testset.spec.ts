
// import { parse, decompile } from '../index';

import * as fc from 'fast-check';





test('Round trip of random strings is always byte-accurate', () => {

  fc.assert(
    fc.property(

      fc.string(),

      (_anyString: string) => {

        throw 'todo';

        // const [ compiled_raw, _fail_ranges ] = parse(anyString),
        //       compiled                       = compiled_raw as string,
        //       decompiled                     = decompile(compiled) as string;

        // return (decompiled === anyString);

      }

    )
  );

});
