
import { readFileSync, writeFileSync } from 'node:fs';

import { gen }                         from 'unreasonable_phi';
import { ChartJSNodeCanvas }           from 'chartjs-node-canvas';

import { full_set }                    from '../ts/example_beacons.js';


const logfile               = './src/maintained_artifacts/stats_by_version.json',
      log                   = JSON.parse(`${ readFileSync(logfile) }`),
      versions              = Object.keys(log),
      version_count         = versions.length,
      styles                = Object.keys(full_set);

const image_target_filename = './src/maintained_artifacts/stats_by_version';

const r63 = n => Math.floor(n*192)+64;
const seq = n => new Array(n).fill(false).map( (_, i) => i );

const fcolors =
  gen( styles.length, 3 )
    .map( ([rf, gf, bf]) => `rgb(${r63(rf)},${r63(gf)},${r63(bf)})` );

const rand = n =>
  Math.floor( Math.random() * n );





const toRowAbsolute = n =>
  ({
    label           : styles[n],
    borderColor     : fcolors[n],
    backgroundColor : 'transparent',
    data            : versions.map(
                        v => log[v][styles[n]].final_length )
  });

const toRowRelative = n =>
  ({
    label           : styles[n],
    borderColor     : fcolors[n],
    backgroundColor : 'transparent',
    data            : versions.map(
                        v =>
                          100
                          * (log[v][styles[n]].final_length
                          / log[v][styles[n]].original_length) )
  });

const toRowUnhandled = n =>
  ({
    label           : styles[n],
    borderColor     : fcolors[n],
    backgroundColor : 'transparent',
    data            : versions.map(
                        v =>
                          100
                          * (log[v][styles[n]].failed_claims) )
  });




async function to_image(fname, data, ylabel, title) {

  const crs_conf            = { width: 1800, height: 1200, type: 'png' },
        canvasRenderService = new ChartJSNodeCanvas(crs_conf);

  const chart_configuration = {
    "type": "line",
    "data": {
      "labels": versions,
      "datasets": data
    },
    "options": {
      "title": { "display": true, "text": title },
      "scales": {
        "xAxis": {
          "scaleLabel": {
            "display": true,
            "labelString": "Month"
          }
        },
        "yAxis": {
          "stacked": false,
          "scaleLabel": {
            "display": true,
            "labelString": ylabel
          }
        }
      }
    }
  };

  // Create outputs
  const image = canvasRenderService.renderToBufferSync(chart_configuration);
  writeFileSync(fname, image);

};





async function to_image_absolute() {

  to_image(
    image_target_filename + '_absolute.png',
    seq( styles.length ).map(toRowAbsolute),
    "Bytes",
    "Byte savings by version"
  );

};




async function to_image_relative() {

  to_image(
    image_target_filename + '_relative.png',
    seq( styles.length ).map(toRowRelative),
    "Percent",
    "Size savings percentage by version"
  );

};




async function to_image_unhandled() {

  to_image(
    image_target_filename + '_unhandled.png',
    seq( styles.length ).map(toRowUnhandled),
    "Count",
    "Unhandled failed claims by version"
  );

};





to_image_absolute();
to_image_relative();
to_image_unhandled();





export {
  log,
  versions, version_count,
  full_set, styles,
  r63,
  fcolors,
  toRowRelative,
  toRowAbsolute
};
