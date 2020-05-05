const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './lib/index.js'),
  output: {
    filename: './index.js',
    library: ['synse'],
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
