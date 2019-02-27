var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'website.bundle.js'
  },
 
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            "@babel/preset-env"
          ]
        }
      }
    ]
  },
};