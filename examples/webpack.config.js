const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const reactVK = path.resolve('../src');

const vendor = ['react', 'react-dom'];

const isDebug = process.argv[1].indexOf('webpack-dev-server') !== -1;

module.exports = {
  devServer: {
    open: true,
    compress: true,
    port: 3004,
  },

  entry: {
    vendor: vendor,
    index: './src/index.js',
  },

  output: {
    path: __dirname + '/build',
    publicPath: isDebug ? '/' : '/react-vk/',
    filename: isDebug ? '[name].js' : 'static/js/[name].[chunkhash:8].js',
  },

  resolve: {
    alias: {
      'react-vk': reactVK,
    },
  },

  cache: isDebug,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
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
