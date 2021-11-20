
import * as fc from 'fast-check';

import { pack, unpack } from '../index';
import { full_set }     from '../example_beacons';





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





describe('Round trip of beacon strings is always byte-accurate', () => {

  Object.entries<string>(full_set).forEach( ([ key, beacon ]) => {

    test(`Round trip of ${key}`, async () =>
      expect( unpack( pack( beacon )) ).toBe(beacon)
    )

  });

});
