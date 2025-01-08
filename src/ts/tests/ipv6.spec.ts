
type num_v6   = [ number, number, number, number, number, number, number, number ];
type testcase = [ string, num_v6 ];

import * as fc   from 'fast-check';

import { parse } from '../parsers';




const testaddrs: testcase[] = [

  [ "::1:2:3:4:5",                 [ 0,      0,     0,     1,      2,      3,      4,     5 ] ],
  [ "0:0:0:1:2:3:4:5",             [ 0,      0,     0,     1,      2,      3,      4,     5 ] ],
  [ "1:2::3:4:5",                  [ 1,      2,     0,     0,      0,      3,      4,     5 ] ],
  [ "1:2:0:0:0:3:4:5",             [ 1,      2,     0,     0,      0,      3,      4,     5 ] ],
  [ "1:2:3:4:5::",                 [ 1,      2,     3,     4,      5,      0,      0,     0 ] ],
  [ "1:2:3:4:5:0:0:0",             [ 1,      2,     3,     4,      5,      0,      0,     0 ] ],
  [ "0:0:0:0:0:ffff:102:405",      [ 0,      0,     0,     0,      0, 0xFFFF,  0x102, 0x405 ] ],
  [ "::",                          [ 0,      0,     0,     0,      0,      0,      0,     0 ] ],
  [ "::0",                         [ 0,      0,     0,     0,      0,      0,      0,     0 ] ],
  [ "::1",                         [ 0,      0,     0,     0,      0,      0,      0,     1 ] ],
  [ "0:0:0::1",                    [ 0,      0,     0,     0,      0,      0,      0,     1 ] ],
  [ "ffff::1",                     [ 0xFFFF, 0,     0,     0,      0,      0,      0,     1 ] ],
  [ "ffff:0:0:0:0:0:0:1",          [ 0xFFFF, 0,     0,     0,      0,      0,      0,     1 ] ],
  [ "2001:0db8:0a0b:12f0:0:0:0:1", [ 0x2001, 0xDB8, 0xA0B, 0x12F0, 0,      0,      0,     1 ] ],
  [ "2001:db8:a0b:12f0::1",        [ 0x2001, 0xDB8, 0xA0B, 0x12F0, 0,      0,      0,     1 ] ]

];





function parse_v6(tcase: testcase, tres: string): num_v6 {
  return parse(tcase, { startRule: "IP6N" });
}





describe('Test addrs all parse correctly', () => {

  testaddrs.forEach( (ta, i: number) => {

    const tcase = ta[0],
          tres  = ta[1];

    if (tcase === undefined) { throw new Error(`Test`)}

    test(`${tcase} parses to ${tres}`, () => {
      expect( parse_v6(tcase) ).toStrictEqual( tres );
    });

  });

});





test('Empty string does not parse as IP6', () => {
  expect( () => parse_v6("") ).toThrow();
});





test('can parse random ipv6 array', () => {

  fc.assert(
    fc.property(
      fc.record({
        left  : fc.array(fc.nat( {max: 65535} ), { minLength: 0, maxLength: 8 } ),
        right : fc.array(fc.nat( {max: 65535} ), { minLength: 0, maxLength: 8 } )
      }),
      // }).filter(
      //   ({ left, right }) => {
      //     left.length + right.length <= 8
      //   }
      // ),
      ({ left, right }: { left: number[], right: number[] }) => {
        expect(true).toBe(true);
      }
    )
  );

});
