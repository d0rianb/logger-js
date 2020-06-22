const Logger = require('../lib/main.js')


Logger.setOptions({ filename: 'test.log' })
Logger.info('test info', 'test.log')
Logger.warn('test info')
// Logger.clear('all')