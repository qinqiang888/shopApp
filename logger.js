const log4js = require('log4js')
const path = require('path')
log4js.configure({
  appenders: {
    request: { //访问日志
      type: 'file',
      filename: path.join('logs/', 'request.log'), 
      maxLogSize: 10485760,
      backups: 20, 
      alwaysIncludePattern: true,
      pattern: 'yyyy-MM-dd.log',
      compress: true 
    },
    response: { //响应日志
      type: 'file',
      filename: path.join('logs/', 'response.log'), 
      maxLogSize: 10485760, 
      backups: 20,
      alwaysIncludePattern: true,
      pattern: 'yyyy-MM-dd.log', 
      compress: true 
    },
    console: {
      type: 'console'
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'info' }, //默认级别info 
    request: { appenders: ['request'], level: 'info' },//默认级别info 
    response: { appenders: ['response'], level: 'info' }//默认级别info 
  }
})
exports.requestlog = log4js.getLogger('request')
exports.responselog = log4js.getLogger('response')
