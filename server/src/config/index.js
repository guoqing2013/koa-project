/**
 * 参考： https://github.com/Ma63d/kov-blog/blob/master/server/index.js
     * https://github.com/lybenson/bilibili-vue/blob/master/config/index.js
 */
'use strict';
const path = require('path'),
  serverRoot = path.dirname(__dirname),
  root = path.resolve(serverRoot, '../'),
  staticDir = path.join(root, 'static'),
  dev = require('./dev.js'),
  fs = require('fs'),
  _ = require('C:/Users/GuoQing/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/lodash')
//默认生产环境
let config = {
  app: {
    name: 'kov-blog',
    port: 5000,
    adminPath: '/api' // 后台路径
  },
  debug: false,
  env: 'production',
  mysql: { // 数据库配置
    url: 'mongodb://localhost:27017/kov-blog',
    opts: {
      user: 'root',
      pass: '123456'
    }
  },
  'jwt': {
    'cert': 'kov-blog'
  },
  dir: { // 目录配置
    root,
    log: path.join(__dirname, '..', 'logs'),
    server: serverRoot,
    static: staticDir,
    resource: path.join(serverRoot, 'resource'),
    upload: path.join(serverRoot, 'resource', 'upload')
  }
}
//本地调试环境
if (process.env.NODE_ENV === 'development') {
  config = _.merge(config, dev)
}
// 私有配置
if (process.env.NODE_ENV === 'production') {
  if (fs.existsSync(__dirname + '/private.js')) {
    config = _.merge(config, require('./private.js'))
  }
}

module.exports = config
