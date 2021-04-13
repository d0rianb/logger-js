const process = require('process')
const Logger = require('../lib/main.js')

const levels = ['info', 'warn', 'error', 'fatal']

Logger.clear('logs.log')

for (let i = 0; i < 5; i++)
    levels.forEach(level => Logger[level]('test de level'))