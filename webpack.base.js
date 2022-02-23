const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 多入口配置
  entry: {
    index: './src/index.js',
    test: './src/test.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
    ]
  },
  resolve: {
    // 配置免后缀的文件类型
    extensions: ['.js', '.jsx', '.css', '.less', '.scss'],
    // 为全路径配置缩写@
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      chunks: ['index', 'test']
    })
  ]
}