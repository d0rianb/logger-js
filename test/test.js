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
// Logger.addLevel('ULTIMATE')


function performanceTest() {
    const start = Date.now()
    Logger.setOptions({ useMoment: false })
    for (let i = 0; i < 10000; i++) {
        Logger.info(`test n°${i}`)
    }
    console.log(`${Date.now() - start} ms`) // 75ms --> 10ms

}

function run() {
    Logger.clear()
    performanceTest()
}

run()