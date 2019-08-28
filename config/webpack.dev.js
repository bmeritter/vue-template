const merge = require('webpack-merge');
const webpackConfig = require('../webpack.config');
module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',// 指定开发者打包模式
  devServer: { //node本地服务器
    host: '127.0.0.1',
    port: 8010
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("autoprefixer") /*自动添加前缀*/
              ]
            }
          }
        ]
      },
    ]
  },
});
