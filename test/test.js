const Logger = require('../src/main.js')

Logger
    .info('test d\info', 'info.log')
    .debug('test de debug', 'debug.log')
    .warn('test de warn', 'warn.log')
    .error('test d\'erreur', 'error.log')
    .fatal('test de fatal', 'fatal.log')

Logger
    .info('test de défaut')
    .options = { filename: 'newLogs.log' }

Logger
    .info('test de défaut dans Newlog.log')