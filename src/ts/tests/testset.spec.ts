
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

  Object.entries<string>(full_set).forEach( ([ key, rule ]) => {

    test(`Round trip of ${key}`, async () => {

      const x_normal   = normalize( rule.beacon ),
            x_p_up     = normalize( unpack(pack(rule.beacon)) );

      let   x_replaced = x_normal;


      if (rule.replacements !== undefined) {
        if (!(Array.isArray(rule.replacements))) {
          throw new Error('Replacements must be undefined or an array of 2-tuples of string (target and replacement)');
        }

        rule.replacements.forEach( (rep_rule: string[]) => {
          const [ r_from, r_to ] = rep_rule;
          if (r_from === undefined) { throw new Error('Rep rule missing first argument'); }
          if (r_to   === undefined) { throw new Error('Rep rule missing second argument'); }
          x_replaced = x_replaced.replaceAll(r_from, r_to);
        } );

      }

      expect( x_p_up ).toBe( x_replaced )

    })

  });

});
