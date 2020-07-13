const process = require('process')
const Logger = require('../lib/main.js')

// Logger
//     .clear()
//     .setOptions({ showHostname: true, showPID: true })
// Logger.info(`Process PID : ${process.pid}`)
//     .setOptions({ showHostname: false, showPID: false })
Logger.setOptions({ folder: 'logs/testPath' })
Logger.info('test2')