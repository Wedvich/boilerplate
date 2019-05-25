/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config();

const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production';

const entry = ['./src/index.tsx'];
if (!isProduction) {
  entry.unshift('react-hot-loader/patch');
}

const plugins = [
  new HtmlPlugin({
    template: './src/index.html',
  }),
];

if (process.env.ANALYZE) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      generateStatsFile: true,
      reportFilename: path.resolve(__dirname, 'analysis/report.html'),
      statsFilename: path.resolve(__dirname, 'analysis/stats.json'),
    }),
  );
}

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  entry,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
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
    alias: {
      'react-dom': !isProduction ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  plugins,
  devServer: {
    compress: isProduction,
    historyApiFallback: true,
    hot: !isProduction,
    http2: true,
    open: true,
    stats: 'minimal',
  },
};
