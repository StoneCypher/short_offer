
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs    from '@rollup/plugin-commonjs';





const es6_config = {

  input   : 'build/typescript/index.js',

  output  : {
    file   : 'build/rollup/index.js',
    format : 'es',
    name   : 'short_offer'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      extensions     : [ '.js', '.ts' ],
      preferBuiltins : false
    }),

    commonjs()

  ]

};





const cjs_config = {

  input   : 'build/typescript/index.js',

  output  : {
    file   : 'build/rollup/index.cjs',
    format : 'cjs',
    name   : 'short_offer'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      extensions     : [ '.js', '.ts' ],
      preferBuiltins : false
    }),

    commonjs()

  ]


};





const iife_config = {

  input   : 'build/typescript/index.js',

  output  : {
    file   : 'build/rollup/index.iife.js',
    format : 'iife',
    name   : 'short_offer'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js', '.ts' ],
      preferBuiltins : false
    }),

    commonjs()

  ]


};





const viewer_config = {

  input   : 'build/typescript/viewer.js',

  output  : {
    file   : 'build/rollup/viewer.iife.js',
    format : 'iife',
    name   : 'so_viewer'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js', '.ts' ],
      preferBuiltins : false
    }),

    commonjs()

  ]


};





export default [ es6_config, cjs_config, iife_config, viewer_config ];
