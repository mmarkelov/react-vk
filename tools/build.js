const fs = require('fs-extra');
const path = require('path');

const execSync = require('child_process').execSync;
const inInstall = require('in-publish').inInstall;

const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');

if (inInstall()) process.exit(0);

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });

console.log('Building CommonJS modules ...');

exec('babel src -d main --ignore __tests__', {
  BABEL_ENV: 'cjs',
});

console.log('\nBuilding ES modules ...');

exec('babel src -d es --ignore __tests__', {
  BABEL_ENV: 'es',
});

console.log('\nBuilding react-vk.js ...');

exec('webpack src/index.js umd/react-vk.js', {
  NODE_ENV: 'production',
});

console.log('\nBuilding react-vk.js ...');

exec('webpack -p src/index.js umd/react-vk.min.js', {
  NODE_ENV: 'production',
});

const size = gzipSize.sync(
  fs.readFileSync(path.join(process.cwd(), 'umd', 'react-vk.min.js')),
);

console.log('\ngzipped, the UMD build is %s', prettyBytes(size));
