const path = require('path');

module.exports = {
  // entry: './src/index.js',
  output: {
  	// filename: 'index.js',
    library: {
      root: 'WFL',
      amd: 'wire-frame-landscape',
      commonjs: 'wire-frame-landscape'
    },
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
            presets: ['env']
          }
        }
      }
    ]
  }
};
