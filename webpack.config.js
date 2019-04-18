/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config();

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const entry = ['./src/index.tsx'];
if (!isProduction) {
  entry.unshift('react-hot-loader/patch');
}

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry,
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    hot: !isProduction,
  },
};
