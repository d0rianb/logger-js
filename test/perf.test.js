const Logger = require('../lib/main.js')

// Performance test
const n = 10000
Logger.setOptions({ filename: 'perf.log', useMoment: true })
Logger.clear()

let start = Date.now()
for (let i = 0; i < n; i++) {
    Logger.info(`info n°${i}`)
}

console.log(`PERFORMANCE | time to run ${n} logs : ${Date.now() - start}ms`)