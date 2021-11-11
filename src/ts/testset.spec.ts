
import { parse, unpack } from './index';
import * as beacons           from './example_beacons';

import * as fc from 'fast-check';





test('Round trip of random strings is always byte-accurate', () => {

  fc.assert(
    fc.property(

      fc.string(),

      (anyString: string) => unpack(parse(anyString)) === anyString

    )
  );

});





describe('All beacons are strings', () => {

  const labels = [ 'win_10_chrome_92_host', 'win_10_chrome_92_client',
    'win_10_edge_92_client', 'win_10_edge_92_host', 'win_10_ff_90_client',
    'win_10_ff_90_host', 'lin_chr_92_host', 'lin_chr_92_client',
    'mac_saf_14_host', 'mac_saf_14_client', 'mac_chrome_92_host',
    'mac_chrome_92_client', 'mac_ff_90_host', 'mac_ff_90_client',
    'lin_ff_90_host', 'lin_ff_90_client', 'and_chr_92_host',
    'and_chr_92_client', 'ubu_ff_90_host', 'ubu_ff_90_client' ];


  [ beacons.win_10_chrome_92_host,
    beacons.win_10_chrome_92_client,

    beacons.win_10_edge_92_client,
    beacons.win_10_edge_92_host,

    beacons.win_10_ff_90_client,
    beacons.win_10_ff_90_host,

    beacons.lin_chr_92_host,
    beacons.lin_chr_92_client,

    beacons.mac_saf_14_host,
    beacons.mac_saf_14_client,

    beacons.mac_chrome_92_host,
    beacons.mac_chrome_92_client,

    beacons.mac_ff_90_host,
    beacons.mac_ff_90_client,

    beacons.lin_ff_90_host,
    beacons.lin_ff_90_client,

    beacons.and_chr_92_host,
    beacons.and_chr_92_client,

    beacons.ubu_ff_90_host,
    beacons.ubu_ff_90_client
  ].forEach( (s, i) =>
    test.skip(`Beacon style ${labels[i]} is string`, () => expect(typeof s).toBe('string') )
  );

});
