
import { pack, unpack } from '../index';

import * as fc from 'fast-check';





test('Round trip of random strings is always byte-accurate', () => {

  fc.assert(
    fc.property(

      fc.string(),

      (anyString: string) => {

        return unpack( pack( anyString )) === anyString;

      }

    )
  );

});
