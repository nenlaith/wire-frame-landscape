const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
  	filename: 'index.js',
  	path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', "stage-0", "es2015"],
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  devtool: 'source-map'
};
