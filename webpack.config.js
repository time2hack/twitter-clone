const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'raw-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') })
  ]
};
