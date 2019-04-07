require('@babel/polyfill');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const examples = path.resolve(process.cwd());

const reactVK = path.resolve('../src');
const react = path.resolve('../node_modules/react');
const reactDOM = path.resolve('../node_modules/react-dom');

const devServer = process.argv[1].indexOf('webpack-dev-server') !== -1;

const vendor = ['react', 'react-dom'];

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: NODE_ENV === 'development' ? 'source-map' : '',

  devServer: {
    historyApiFallback: true,
    port: 3004,
  },

  entry: {
    vendor,
    index: ['@babel/polyfill', examples + '/src/index.js'],
  },

  resolve: {
    alias: {
      'react-vk': reactVK,
      'react': react,
      'react-dom': reactDOM
    },
  },

  output: {
    path: examples + '/build',
    publicPath: devServer ? '/' : '/react-vk/',
    filename: 'static/js/[name].[chunkhash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{ loader: 'source-map-loader' }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                    },
                  },
                ],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        ],
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
