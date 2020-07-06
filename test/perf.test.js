const Logger = require('../lib/main.js')

const n = 10000

// 10000 - 461 ms - 0.5.6

describe('Performance test', () => {
    it(`Time to run ${n} logs`, () => {
        Logger.setOptions({ filename: 'perf.log', useMoment: true })
        Logger.clear()
        const start = Date.now()
        for (let i = 0; i < n; i++) {
            Logger.info(`info n°${i}`)
        }
        console.log(`PERFORMANCE | time to run ${n} logs : ${Date.now() - start}ms`)
    })
})