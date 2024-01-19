
import * as beacons from '../example_beacons';





describe('All beacons are strings', () => {

  const labels = [ 'win_10_chrome_92_host', 'win_10_chrome_92_client',
    'win_10_edge_92_client', 'win_10_edge_92_host', 'win_10_ff_90_client',
    'win_10_ff_90_host', 'lin_chr_92_host', 'lin_chr_92_client',
    'mac_saf_14_host', 'mac_saf_14_client', 'mac_chrome_92_host',
    'mac_chrome_92_client', 'mac_ff_90_host', 'mac_ff_90_client',
    'lin_ff_90_host', 'lin_ff_90_client', 'and_chr_92_host',
    'and_chr_92_client', 'ubu_ff_90_host', 'ubu_ff_90_client',
    'win_11_chrome_120_host', 'win_11_chrome_120_client',
    'win_11_edge_120_host', 'win_11_edge_120_client',
    'win_11_ff_121_host', 'win_11_ff_121_client',
    'win_11_opr_106_host', 'win_11_opr_106_client',
    'mac_10_15_ff_121_host', 'mac_10_15_ff_121_client',
    'ios_17_ff_121_host', 'ios_17_ff_121_client',
    'ios_17_saf_17_1_host', 'ios_17_saf_17_1_client',
    'and_12_edge_120_host', 'and_12_edge_120_client',
    'and_12_chrome_120_host', 'and_12_chrome_120_client'

  ];



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
    beacons.ubu_ff_90_client,

    beacons.win_11_chrome_120_host,
    beacons.win_11_chrome_120_client,

    beacons.win_11_edge_120_host,
    beacons.win_11_edge_120_client,

    beacons.win_11_ff_121_host,
    beacons.win_11_ff_121_client,

    beacons.win_11_opr_106_host,
    beacons.win_11_opr_106_client,

    beacons.mac_10_15_ff_121_host,
    beacons.mac_10_15_ff_121_client,

    beacons.ios_17_ff_121_host,
    beacons.ios_17_ff_121_client,

    beacons.ios_17_saf_17_1_host,
    beacons.ios_17_saf_17_1_client


  ].forEach( (s, i) =>

    test(
      `Beacon style ${labels[i]} is string`,
      () => expect(typeof s).toBe('string')
    )

  );

});
