const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const baseConfig = require('./webpack.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
});
