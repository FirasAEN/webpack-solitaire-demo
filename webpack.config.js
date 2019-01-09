'use strict';

const path = require('path');

module.exports = {
  entry: './app/app.js',
  mode: 'development',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'app.bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    port: 8080,
    publicPath: '/dist/',
    watchContentBase: true
  },
  devtool: 'source-map',
  plugins: [
  ]
};
