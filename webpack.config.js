const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  resolve: {
    extensions: ['.js', '.acx']
  },
  module: {
    rules: [
      {
        test: /\.(acx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['test']),
  ],
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'test')
  }
};