
import * as fc from 'fast-check';

import { pack, unpack } from '../index';
import { full_set }     from '../example_beacons';





function normalize(str: string): string {
  return str.toLowerCase().replaceAll(' ', '');
}





test('Round trip of random strings is always byte-accurate after lowercasing and space removal', () => {

  fc.assert(
    fc.property(

      fc.string(),

      (anyString: string) => {

        return normalize(unpack( pack( anyString ))) === normalize(anyString);

      }

    )
  );

});





describe('Round trip of beacon strings is always byte-accurate after lowercasing and space removal', () => {

  Object.entries<string>(full_set).forEach( ([ key, beacon ]) => {

    test(`Round trip of ${key}`, async () =>
      expect( normalize(unpack( pack( beacon ))) ).toBe(normalize(beacon))
    )

  });

});
