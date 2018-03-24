const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const reactVK = path.resolve('../src');

const vendor = ['react', 'react-dom'];

module.exports = {
  entry: {
    vendor: vendor,
    index: './src/index.js',
  },

  resolve: {
    alias: {
      'react-vk': reactVK,
    },
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/react-vk/',
    filename: 'static/js/[name].[chunkhash:8].js',
  },

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
