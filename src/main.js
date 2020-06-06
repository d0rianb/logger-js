const fs = require('fs')
const path = require('path')
const moment = require('moment-timezone')

const VERSION = '0.3.0'

// TODO:
//       In 0.3.0 -> Add doc
//       In 0.3.1 -> display by level system (levelling)
//       In 0.3.2 -> Custum level ?, change locale timezone
//       In 0.4.0 -> Optimization for npm
//       In 0.5.0 -> Test writting

const levels = {
    0: 'INFO',
    1: 'DEBUG',
    2: 'WARNING',
    3: 'ERROR',
    4: 'FATAL'
}


const options = {
    logFile: 'logs.log',
    logsFolder: path.resolve(__dirname, '../logs/'),
    extension: 'log',
    timezone: 'Europe/Berlin', // Not implemented yet
    heroku_logs: false,
    showPID: false, // Not implemented yet
    showHostname: false // Not implemented yet
}

function handdleWriteError(err) {
    if (err) {
        throw err
    }
}

class Logger {

    /**
     * @static setOptions - Overwrite the logger options
     * @param  {object} opts an Options Object
     */
    static setOptions(opts) {
        options = Object.assign(options, opts)
    }


    /**
     * @static log - Write a new line in the log file
     *
     * @param  {string} filename file where the log is written
     * @param  {number|string} level    level of the log
     * @param  {string} message  content of the log
     * @return {Logger}          Return the logger to chain methods
     */
    static log(filename, level, message) {
        const dirPath = options.logsFolder
        const file = path.resolve(dirPath, filename)

        const date = moment().tz('Europe/Berlin').format("DD-MM-YYYY HH:mm:ss")
        let levelStr = 'UNKNOWN_LEVEL'
        if (typeof level === 'string') {
            levelStr = level
        } else if (typeof level === 'number') {
            levelStr = levels[level]
        }
        const msg = `[${date}] - ${levelStr} - ${message} \n`

        if (options.heroku_logs) {
            console.log(msg.replace('\n', ''))
            return Logger
        }

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true })
        }
        if (fs.existsSync(file)) {
            if (path.extname(file) === `.${options.extension}`) {
                fs.appendFile(file, msg, err => handdleWriteError(err))
            } else {
                throw `Logger error : file ${file} extension is not .log`
            }
        } else {
            fs.writeFile(file, msg, err => handdleWriteError(err))
        }
        return Logger // to chain methods
    }


    /**
     * @param  {string} info                       content of the log
     * @param  {string} [filename=options.logFile] filename without path
     */
    static info(info, filename = options.logFile) {
        return this.log(filename, 0, info)
    }


    /**
     * @param  {string} debug                       content of the log
     * @param  {string} [filename=options.logFile] filename without path
     */
    static debug(debug, filename = options.logFile) {
        return this.log(filename, 1, debug)
    }

    /**
     * @param  {string} warn                       content of the log
     * @param  {string} [filename=options.logFile] filename without path
     */
    static warn(warning, filename = options.logFile) {
        return this.log(filename, 2, warning)
    }

    /**
     * @param  {string} error                       content of the log
     * @param  {string} [filename=options.logFile] filename without path
     */
    static error(error, filename = options.logFile) {
        return this.log(filename, 3, error)
    }

    /**
     * @param  {string} fatal                       content of the log
     * @param  {string} [filename=options.logFile] filename without path
     */
    static fatal(error, filename = options.logFile) {
        return this.log(filename, 4, error)
    }


    /**
     * @static clear - Clear the log file
     *
     * @param  {type} [filename = options.logFile]
     * @return {Logger}
     */
    static clear(filename = options.logFile) {
        if (!filename) throw 'Logger Error : No filename specified'
        let file = path.resolve(options.logsFolder, filename)
        if (fs.existsSync(file)) {
            fs.writeFile(file, '', err => handdleWriteError(err))
        } else {
            throw `Logger Error : Unknown path ${file}`
        }
        return Logger
    }
}

module.exports = Logger