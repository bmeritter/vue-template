const NODE_ENV = process.env.NODE_ENV; // webpack编译是获取node环境的配置信息
const config = {
  production: 'http://production',
  development: 'http://development',
};
module.exports = config[NODE_ENV];
