'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_PRODUCTION = process.env.npm_lifecycle_event === 'build';

const baseConf = {
  entry: [
    path.join(__dirname, 'src/js/index.js')
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};

const productionConf = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

const developmentConf = {
  devtool: 'source-map',
  devServer: {
    contentBase: 'static/'
  },
  plugins: [
  ]
};

module.exports = merge(
  baseConf,
  IS_PRODUCTION ? productionConf : developmentConf
);
