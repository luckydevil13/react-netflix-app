const merge = require('webpack-merge');// eslint-disable-line import/no-extraneous-dependencies
const webpack = require('webpack');// eslint-disable-line import/no-extraneous-dependencies
const path = require('path');
const baseConfig = require('./webpack.base');

const devConfig = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    path.resolve(__dirname, './../src/client/app/index.jsx')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge.strategy({
  entry: 'replace'
})(baseConfig, devConfig);
