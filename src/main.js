const fs = require('fs')
const path = require('path')
const moment = require('moment-timezone')

const packageJSON = require('../package.json')

const VERSION = packageJSON.version

// TODO:
//       In 0.3.3 -> Clear multiple file at once
//       In 0.3.4 -> display by level system (levelling)
//       In 0.4.0 -> CUSTUM level ?, change locale timezone
//       In 0.4.1 -> Add examples
//       In 0.4.2 -> Body partial for the doc
//       In 0.5.0 -> Test writting

const levels = {
    0: 'INFO',
    1: 'DEBUG',
    2: 'WARNING',
    3: 'ERROR',
    4: 'FATAL'
}

/**
 * Logger options
 * @typedef {Object} OptionsObject
 * @property {string} [filename='logs.log']
 * @property {string} [folder='./logs/']
 * @property {string} [extension='.log']
 */
let options = {
    filename: 'logs.log',
    folder: path.resolve(__dirname, '../logs/'),
    extension: '.log',
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


/**
 * @class Logger
 */
class Logger {

    /**
     * @setter overwrite the logger options
     * @param  {object} opts logger default values
     */
    static set options(opts) {
        options = Object.assign(options, opts)
    }

    /**
     * @getter Return the options of the logger
     * @return {OptionsObject}
     */
    static get options() {
        return options
    }

    /**
     * @static log - Write a new line in the log file
     * @param  {string} filename file where the log is written
     * @param  {number|string} level    level of the log
     * @param  {string} message  content of the log
     * @chainable
     * @return {Logger}          Return the logger to chain methods
     */
    static log(filename, level, message) {
        const dirPath = options.folder
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
            if (path.extname(file) === `${options.extension}`) {
                fs.appendFile(file, msg, err => handdleWriteError(err))
            } else {
                throw `Logger error : file: "${file}" extension is not ${options.extension}`
            }
        } else {
            fs.writeFile(file, msg, err => handdleWriteError(err))
        }
        return Logger // to chain methods
    }

    /**
     * @param  {string} info                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     */
    static info(info, filename = options.filename) {
        return this.log(filename, 0, info)
    }

    /**
     * @param  {string} debug                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     */
    static debug(debug, filename = options.filename) {
        return this.log(filename, 1, debug)
    }

    /**
     * @param  {string} warn                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     */
    static warn(warning, filename = options.filename) {
        return this.log(filename, 2, warning)
    }

    /**
     * @param  {string} error                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     */
    static error(error, filename = options.filename) {
        return this.log(filename, 3, error)
    }

    /**
     * @param  {string} fatal                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     */
    static fatal(error, filename = options.filename) {
        return this.log(filename, 4, error)
    }

    /**
     * @static clear - Clear the log file
     * @param  {string} [options.filename]
     * @chainable
     * @return {Logger}
     */
    static clear(...filename) {
        if (!filename.length) this.clearFile(options.filename)
        if (Array.isArray(filename)) {
            filename.forEach(file => this.clearFile(file))
        } else {
            this.clearFile(filename)
        }
        return Logger
    }

    /**
     * Clear the file
     * @private
     * @param {string}
     */
    static clearFile(filename) {
        const file = path.resolve(options.folder, filename)
        if (fs.existsSync(file)) {
            fs.truncate(file, 0, err => handdleWriteError(err))
        } else {
            throw `Logger Error : Unknown path ${file}`
        }
    }

    /**
     * @getter Version getter
     * @return {string}  the version number of the logger
     */
    static get version() {
        return VERSION
    }
}

module.exports = Logger