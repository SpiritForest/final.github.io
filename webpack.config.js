const path = require('path');

const conf = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node-modules',
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};

module.exports = conf;
