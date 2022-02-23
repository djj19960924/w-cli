const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // 多入口配置
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
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
    extensions: ['.js', '.jsx', '.css', '.less', '.scss', '.vue'],
    // 为全路径配置缩写@
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      chunks: ['main']
    }),
    new VueLoaderPlugin()
  ]
}