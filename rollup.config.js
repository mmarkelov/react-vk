const path = require('path');

const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const replace = require('rollup-plugin-replace');

const { name, peerDependencies } = require('./package.json');

const NODE_ENV = process.env.NODE_ENV || 'production';

const formats = ['cjs', 'esm', 'umd'];

const outputs = formats.map(format => ({
  file: [
    name,
    format,
    NODE_ENV === 'production' ? 'production.min' : false,
    'js',
  ]
    .filter(Boolean)
    .join('.'),
  dir: path.resolve(__dirname, 'dist'),
  format: format,
  sourcemap: NODE_ENV === 'production',
  globals: {
    react: 'React',
  },
  exports: 'named',
  ...(format === 'umd' && { name: 'ReactVK' }),
}));

const commonConfig = {
  input: path.resolve(__dirname, 'src/index.js'),
  plugins: [
    NODE_ENV === 'production' &&
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),

    babel({
      exclude: 'node_modules/**',
    }),

    commonjs({
      include: 'node_modules/**',
    }),

    nodeResolve({
      module: true,
      jsnext: true,
      browser: true,
    }),

    NODE_ENV === 'production' && terser(),
  ].filter(Boolean),
  external: Object.keys(peerDependencies),
};

module.exports = outputs.map(output => ({ ...commonConfig, output }));
