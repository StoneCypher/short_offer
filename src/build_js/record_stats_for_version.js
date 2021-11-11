
const fs = require('fs');

const package = JSON.parse(`${ fs.readFileSync('./package.json') }`);

const logfile = './src/maintained_artifacts/stats_by_version.json',
      log     = JSON.parse(`${ fs.readFileSync(logfile) }`);

const full_set = require('../ts/example_beacons.js').full_set,
      styles   = Object.keys(full_set);

const so = require('../../build/rollup/index.cjs.js');





function count_unknowns_in_parse(le_parse) {
  return le_parse.value.filter(v => v.kind === 'unknown-line').length;
}





function generate_test_log() {

  console.log(`Running test log results`);

  const ret = {};

  let orig   = 0,
      final  = 0,
      failed = 0,
      time   = 0

  styles.map( s => {

    const start_time      = new Date().getTime(),
          le_parse        = so.parse(full_set[s]),
          le_pack         = so.pack(le_parse),
          end_time        = new Date().getTime();

    const original_length = full_set[s].length,
          final_length    = le_pack.length,
          failed_claims   = count_unknowns_in_parse(le_parse),
          ltime           = end_time - start_time;

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

  } )

  ret['total'] = {
    variations      : styles.length,
    original_length : orig,
    final_length    : final,
    failed_claims   : failed,
    time
  }

  return ret;

}





log[ package.version ] = generate_test_log();

fs.writeFileSync( logfile, JSON.stringify(log, undefined, 2) );
