const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const constant = require('./config/constant'); // 引入常量文件
module.exports = {
  entry: './src/main.js',//入口文件
  output: {//输出文件
    filename: 'index.js',//输出文件名
    path: __dirname + '/public',//输出文件路径
    // publicPath: "public", // 虚拟目录，自动指向path编译目录，放在内存中，所以在硬盘上是找不到的 默认是：/
  },
  module: { // 当执行require或import命令时匹配下面的加载规则
    rules: [
      {/*将js或者jsx文件转码成es5*/
        test: /\.jsx?$/,// 正则惰性匹配后缀名为js或者jsx的文件
        exclude: /node_modules/,//排除这个文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { // vue文件处理
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        use: [{
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: "public/assets/", // 输出目录
            limit: 8192,
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackplugin({
      filename: 'index.html', // 打包后的文件名，默认是index.html
      template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({ // 定义全局变量
      CONSTANT: JSON.stringify(constant)
    })
  ],
};
