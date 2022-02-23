const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    //配置本地的静态资源文件夹，用来让这两个文件夹内部的文件可以通过访问http地址直接展示
    static: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public')
    ],
    host: 'localhost',
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          'postcss-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})