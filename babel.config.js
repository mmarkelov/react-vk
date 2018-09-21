module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: process.env.BABEL_ENV === 'browser' ? false : 'commonjs',
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      ['transform-react-remove-prop-types', { removeImport: true }],
    ],
  };
};
