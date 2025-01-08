
type num_v6   = [ number, number, number, number, number, number, number, number ];
type testcase = [ string, num_v6 ];

const testaddrs: testcase[] = [

  [ "::1:2:3:4:5",                 [ 0,      0,      0,      1,      2,      3,      4,     5 ] ],
  [ "0:0:0:1:2:3:4:5",             [ 0,      0,      0,      1,      2,      3,      4,     5 ] ],
  [ "1:2::3:4:5",                  [ 1,      2,      0,      0,      0,      3,      4,     5 ] ],
  [ "1:2:0:0:0:3:4:5",             [ 1,      2,      0,      0,      0,      3,      4,     5 ] ],
  [ "1:2:3:4:5::",                 [ 1,      2,      3,      4,      5,      0,      0,     0 ] ],
  [ "1:2:3:4:5:0:0:0",             [ 1,      2,      3,      4,      5,      0,      0,     0 ] ],
  [ "0:0:0:0:0:ffff:102:405",      [ 0,      0,      0,      0,      0, 0xffff,  0x102, 0x405 ] ],
  [ "::",                          [ 0,      0,      0,      0,      0,      0,      0,     0 ] ],
  [ "::0",                         [ 0,      0,      0,      0,      0,      0,      0,     0 ] ],
  [ "::1",                         [ 0,      0,      0,      0,      0,      0,      0,     1 ] ],
  [ "0:0:0::1",                    [ 0,      0,      0,      0,      0,      0,      0,     1 ] ],
  [ "ffff::1",                     [ 0xffff, 0,      0,      0,      0,      0,      0,     1 ] ],
  [ "ffff:0:0:0:0:0:0:1",          [ 0xffff, 0,      0,      0,      0,      0,      0,     1 ] ],
  [ "2001:0db8:0a0b:12f0:0:0:0:1", [ 0x2001, 0x0db8, 0x0a0b, 0x12f0, 0,      0,      0,     1 ] ],
  [ "2001:db8:a0b:12f0::1",        [ 0x2001, 0xdb8,  0xa0b,  0x12f0, 0,      0,      0,     1 ] ]

];





function parse_v6(tcase: testcase, tres: string): num_v6 {
  return [ 0, 0, 0, 1, 2, 3, 4, 5 ];
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
