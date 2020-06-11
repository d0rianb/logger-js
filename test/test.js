const Logger = require('../lib/main.js')


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
// Logger.options = { displayLevel: 3 }

Logger
    .addLevel('ULTIMATE')
    .addLevel('ULTIMATE2')
    .addLevel('ULTIMATE3')
    .info('test info')
    .warn('test warn')
    .error('test error')
    .fatal('test fatal')