const Logger = require('../lib/main.js')


Logger.setOptions({ filename: 'perf.log' })
Logger.clear()

let start = Date.now()
for (let i = 0; i < 10000; i++) {
    Logger.info(`info n°${i}`)
}

console.log(`time : ${Date.now() - start}ms`)