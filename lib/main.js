const fs = require('fs')
const path = require('path')
const moment = require('moment-timezone')
const pkgDir = require('pkg-dir')

const VERSION = require('../package.json').version

// TODO:
//       In 0.3.3 -> Clear multiple file at once
//       In 0.3.4 -> display by level system (levelling)
//       In 0.4.0 -> Add examples
//       In 0.5.0 -> CUSTUM level ?, change locale timezone
//       In 0.5.1 -> Body partial for the doc
//       In 0.6.0 -> Test writting


/**
 * A dictionnary of the logger levels indexed by priority
 * @typedef {{number: string}} LevelsObject
 * @example levels = {
     0: 'INFO',
     1: 'DEBUG',
     2: 'WARNING',
     3: 'ERROR',
     4: 'FATAL'
 }
 */
let levels = {
    0: 'INFO',
    1: 'DEBUG',
    2: 'WARNING',
    3: 'ERROR',
    4: 'FATAL'
}

/**
 * @typedef {Object} OptionsObject
 * @property {string} [filename='logs.log']      The name of the default log file
 * @property {string} [folder='./logs/']         The folder where logs files will be located
 * @property {string} [extension='.log']         The extension to use for logs files
 * @property {boolean} [useMoment=false]         Use momentjs to format the dates. Allow timezone options but has a performance cost
 * @property {string} [timezone='Europe/Berlin'] The `moment` timezone for the date | Full list available at: https://momentjs.com/timezone
 * @property {boolean} [console_logs=false]      Use console.log to displays logs instead of writting it in a log file
 * @property {string|number} [displayLevel=0]    The level below a log is not displayed
 */
let options = {
    filename: 'logs.log',
    folder: path.resolve(pkgDir.sync(), './logs/'),
    displayLevel: 0,
    extension: '.log',
    useMoment: false,
    timezone: 'Europe/Berlin',
    console_logs: false,
    showPID: false, // Not implemented yet
    showHostname: false // Not implemented yet
}


/**
 * @private
 * @param  {Error} err fs write error
 * @throw {Error}
 */
function handleWriteError(err) {
    if (err) {
        throw err
    }
}


/**
 * @class Logger
 */
class Logger {

    /**
     * @static overwrite the logger options
     * @param  {OptionsObject} opts logger default values
     * @example Logger.setOptions({filename: 'production.log'})
     */
    static setOptions(opts) {
        options = Object.assign(options, opts)
    }

    /**
     * @getter Return the options of the logger
     * @return {OptionsObject}
     * @example const loggerOptions = Logger.options
     */
    static get options() {
        return options
    }

    /**
     * @static log - Write a new line in the log file
     * @param  {string}        filename file where the log is written
     * @param  {number|string} level    level of the log
     * @param  {string}        message  content of the log
     * @return {Logger}        Return the logger to chain methods
     * @chainable
     * @example Logger.log('network.log', 'WARN', 'Socket disconnected')
     * // --> [10-06-2020 06:43:51] - WARN - Socket disconnected
     */
    static log(filename, level, message) {
        const dirPath = options.folder
        const file = path.resolve(dirPath, filename)

        const date = Logger.getDate() // perf issues
        let levelStr = 'UNKNOWN_LEVEL'
        if (typeof level === 'string') {
            levelStr = level
        } else if (typeof level === 'number') {
            levelStr = levels[level]
        }
        const msg = `[${date}] - ${levelStr} - ${message} \n`

        const displayLevelIndex = typeof options.displayLevel === 'number' ? options.displayLevel : Number(Object.keys(levels).find(index => levels[index].includes(options.displayLevel.toUpperCase())))
        const levelIndex = typeof level === 'number' ? level : Number(Object.keys(levels).find(index => levels[index].includes(level.toUpperCase())))
        if (!Number.isNaN(displayLevelIndex) && !Number.isNaN(levelIndex) && displayLevelIndex > levelIndex) {
            return Logger
        }

        if (options.console_logs) {
            console.log(msg.replace('\n', ''))
            return Logger
        }

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true })
        }
        if (fs.existsSync(file)) {
            if (path.extname(file) === `${options.extension}`) {
                fs.appendFile(file, msg, err => handleWriteError(err))
            } else {
                throw `Logger error : file: "${file}" extension is not ${options.extension}`
            }
        } else {
            fs.writeFile(file, msg, err => handleWriteError(err))
        }
        return Logger
    }

    /**
     * @param  {string} info                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     * @example
     * Logger.info('Server has started')
     * Logger.info('Server has started', 'server.log')
     */
    static info(info, filename = options.filename) {
        return this.log(filename, 0, info)
    }

    /**
     * @param  {string} debug                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     * @example
     * Logger.debug(`Client ID = ${clientID}`)
     * Logger.debug(`Client ID = ${clientID}`, 'clients.log')
     */
    static debug(debug, filename = options.filename) {
        return this.log(filename, 1, debug)
    }

    /**
     * @param  {string} warn                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     * @example
     * Logger.warn(`Database disconnected`)
     * Logger.warn(`Database disconnected`, 'connections.log')
     */
    static warn(warning, filename = options.filename) {
        return this.log(filename, 2, warning)
    }

    /**
     * @param  {string} error                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     * @example
     * Logger.error(`Connection to 127.0.0.1:2000 refused`)
     * Logger.error(`Connection to 127.0.0.1:2000 refused`, 'logs.log')
     */
    static error(error, filename = options.filename) {
        return this.log(filename, 3, error)
    }

    /**
     * @param  {string} fatal                       content of the log
     * @param  {string} [filename=options.filename] filename without path
     * @chainable
     * @example
     * Logger.fatal(`Division by zero`)
     * Logger.fatal(`Division by zero`, 'logs.log')
     */
    static fatal(error, filename = options.filename) {
        return this.log(filename, 4, error)
    }

    /**
     * @static clear - Clear the log file
     * @param  {string} [options.filename] The filename of the file to clear or 'all' if all the file should be cleaned
     * @chainable
     * @return {Logger}
     * @example
     * Logger.clear()
     * Logger.clear('client.log')
     * Logger.clear('client.log', 'connections.log', 'logs.log')
     * Logger.clear('all')
     */
    static clear(...filename) {
        if (!filename.length) Logger.clearFile(options.filename)
        if (filename[0] == 'all') {
            Logger.getAllFiles().forEach(file => Logger.clearFile(file))
        } else {
            filename.forEach(file => Logger.clearFile(file))
        }
        return Logger
    }

    /**
     * Clear the file
     * @private
     * @param {string} filename
     */
    static clearFile(filename) {
        const file = path.resolve(options.folder, filename)
        console.log(`clear file : ${filename}`)
        if (fs.existsSync(file)) {
            fs.truncate(file, 0, err => handleWriteError(err))
        } else {
            throw `Logger Error : Unknown path ${file}`
        }
    }

    /**
     * @private getDate
     * @return {string}  The date of the day formated
     */
    static getDate() {
        const dateFormat = 'DD-MM-YYYY HH:mm:ss'
        return moment().tz(options.timezone).format(dateFormat)
    }


    /**
     * @private
     * @static getAllFiles
     *
     * @param  {string} dir directory of log files
     * @return {array}     name of the files
     */
    static getAllFiles(dir) {
        const dirname = dir ? dir : options.folder
        const filenames = fs.readdirSync(path.resolve(dirname))
        const logsFilenames = Array.from(filenames).filter(file => path.extname(file) === `${options.extension}`)
        return logsFilenames
    }

    /**
     * @getter Version getter
     * @return {string}  the version number of the logger
     * @example const version = Logger.version
     */
    static get version() {
        return VERSION
    }

    /**
     * @getter Levels object getter - All the lovels of the logger
     * @return {LevelsObject}
     * @example const levels = Logger.levels
     */
    static get levels() {
        return levels
    }

    /**
     * @static getLevel - description
     * @param  {string|number} level the index or the label of the level
     * @example  const testLevel = Logger.getLevel('warn') // --> ["2", "WARN"]
     * @example  const testLevel = Logger.getLevel(2)      // --> ["2", "WARN"]
     * @return {array}       [index, label]
     */
    static getLevel(level) {
        return Object.entries(levels).filter(([key, label]) => key == level || label == level.toUpperCase())[0]
    }

    /**
     * @static addLevel - Add a new level to the logger
     * @param  {string} newLevel The label of the new level
     * @example const importnantLevel = Logger.addLevel('Important')
     * @return {int} the level number
     */
    static addLevel(newLevel) {
        const maxIndex = parseInt(Object.keys(levels)[Object.keys(levels).length - 1]) + 1
        levels[maxIndex] = newLevel.toUpperCase()
        return maxIndex
    }
}

module.exports = Logger