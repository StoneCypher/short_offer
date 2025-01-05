
'use strict';

import { readFileSync, writeFileSync } from 'node:fs';
import { full_set }                    from '../ts/example_beacons.js';
import { parse, pack }                 from '../../build/rollup/index.js';





const pkg = JSON.parse(`${ readFileSync('./package.json') }`);

const logfile = './src/maintained_artifacts/stats_by_version.json',
      log     = JSON.parse(`${ readFileSync(logfile) }`),
      styles  = Object.keys(full_set);






function count_unknowns_in_parse(le_parse) {
  return (le_parse?.value ?? []).filter(v => v.kind === 'unknown-line').length;
}





function pct1(num) {
  return `${(num*100).toFixed(1)}%`;
}





function generate_test_log() {

  console.log(`Running test log results`);

  const ret = {};

  let orig     = 0,
      final    = 0,
      failed   = 0,
      time     = 0,

      worstp   = 0,
      worstpS  = '',
      worstpSo = 0,
      worstpSn = 0,

      worstb   = Number.POSITIVE_INFINITY,
      worstbS  = '',
      worstbSo = 0,
      worstbSn = 0,

      worstu   = '';


  styles.map( s => {

    const start_time      = new Date().getTime(),
          le_parse        = parse(full_set[s].beacon),
          le_pack         = pack(full_set[s].beacon),
          end_time        = new Date().getTime();

    const original_length = full_set[s].beacon.length,
          final_length    = le_pack.length,
          failed_claims   = count_unknowns_in_parse(le_parse),
          ltime           = end_time - start_time;

    const worst_ui_list   = le_parse.value
                                    .filter(v => v.kind === 'unknown_line')
                                    .sort( (l,r) => l.value.length < r.value.length );

    if (worst_ui_list.length) {

      const wulv = worst_ui_list[0].value;

      if (wulv.length > worstu.length) {
        worstu = wulv;
      }

    }

    ret[s] = {

      original_length,
      final_length,
      failed_claims,
      time: ltime

    };

    orig   += original_length;
    final  += final_length;
    failed += failed_claims;
    time   += ltime;

    const bd = original_length - final_length;
    if (bd < worstb) {
      worstb   = bd;
      worstbS  = s;
      worstbSo = original_length;
      worstbSn = final_length;
    }

    const pd = final_length / original_length;
    if (pd > worstp) {
      worstp   = pd;
      worstpS  = s;
      worstpSo = original_length;
      worstpSn = final_length;
    }

  } )

  ret['total'] = {
    variations      : styles.length,
    original_length : orig,
    final_length    : final,
    failed_claims   : failed,
    time
  }

  console.log(` - Avg improvement         : ${pct1(1 - (final/orig))} (${orig} to ${final})`);
  console.log(` - Bytewise least improved : ${worstbS} (${worstbSo} to ${worstbSn}, ${pct1(1 - worstbSn/worstbSo)})`);
  console.log(` - Pctwise least improved  : ${worstpS} (${worstpSo} to ${worstpSn}, ${pct1(1 - worstpSn/worstpSo)})`);
  console.log(` - Single worst unknown    : ${worstu}`);

  return ret;

}





log[ pkg.version ] = generate_test_log();

writeFileSync( logfile, JSON.stringify(log, undefined, 2) );
