const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './config/index.html',
      hash: true,
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
