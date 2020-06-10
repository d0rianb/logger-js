const Logger = require('../src/main.js')

// Logger
//     .info('test d\'info', 'info.log')
//     .debug('test de debug', 'debug.log')
//     .warn('test de warn', 'warn.log')
//     .error('test d\'erreur', 'error.log')
//     .fatal('test de fatal', 'fatal.log')
//     .info('test de défaut')
//
// Logger.options = { filename: 'newLogs.log' }
// Logger.info('test de défaut dans Newlog.log')
// Logger.clear()
Logger.options = { displayLevel: 3 }

Logger.info('test info')
Logger.warn('test warn')
Logger.error('test error')
Logger.fatal('test fatal')