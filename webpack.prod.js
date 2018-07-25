const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.min.js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
});
