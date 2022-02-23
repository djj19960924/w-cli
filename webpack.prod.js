const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map', //生成源代码映射
  output: {
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          'postcss-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css'
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/index.html'] // 忽略index.html防止重名文件报错
          }
        }
      ],
      options: {
        concurrency: 100,
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
  ],
  // 公共依赖提取
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100
        }
      },
    },
  },
})