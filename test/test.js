const Logger = require('../src/main.js')

Logger.options = { filename: 'test.log' }
Logger
    .warn('test d\'options', 'logs.log')
    .info('test vener')
    .fatal('hey ça marche', 'fatal.log')