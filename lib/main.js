const fs = require('fs')
const path = require('path')
const os = require('os')
const process = require('process')

const moment = require('moment-timezone')
const speedDate = require('speed-date')
const pkgDir = require('pkg-dir')

const VERSION = require('../package.json').version

// Max file streamable (in cache) at the same time
const MAX_FILE_LIMIT = 15

// Should LoggerErrors block the execution of the script/app
const blockingErrors = true

// TODO:
//       -> Test writting
//       -> Express middleware support
//       -> Logger Error class
//       -> Multiple streams support & limit
//       -> Make encoding an option
//       -> Add color support (major ?)
//       -> 'Path' alias to 'folder' in option object

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
 * @private
 * @type {String[]} <>
 * Filename known by the logger, to avoid path resolving the name and checking the extension each time
 */
let trustedFiles = []

/**
 * @typedef {Object} OptionsObject
 * @property {string} [filename='logs.log']      The name of the default log file
 * @property {string} [folder='./logs/']         The folder where logs files will be located (sorry for the name, couldn't find more descriptive)
 * @property {string} [extension='.log']         The extension to use for logs files
 * @property {boolean} [useMoment=false]         Use momentjs to format the dates. Allow timezone options but has a performance cost
 * @property {string} [timezone='Europe/Berlin'] The `moment` timezone for the date | Full list available at: https://momentjs.com/timezone
 * @property {boolean} [console_logs=false]      Use console.log to displays logs instead of writting it in a log file
 * @property {string|number} [displayLevel=0]    The level below a log is not displayed
 * @property {boolean} [showPID=false]           Display the PID of the process in the log
 * @property {boolean} [showHostname=false]      Display the hostname in the log
 */
let options = {
    filename: 'logs.log',
    folder: path.resolve(pkgDir.sync(), './logs/'),
    displayLevel: 0,
    extension: '.log',
    useMoment: false,
    timezone: 'Europe/Berlin',
    console_logs: false,
    showPID: false,
    showHostname: false
}


/**
 * @private
 * @param  {Error} err fs write error
 * @throw {Error}
 */
function handleWriteError(err) {
    if (err && blockingErrors) {
        throw err
    } else if (err && !blockingErrors)(
        Logger.error(err, 'logger.log')
    )
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
     * @chainable
     * @example Logger.log('network.log', 'WARN', 'Socket disconnected')
     * Logger.log('network.log', 2, 'Socket disconnected')
     * // --> [10-06-2020 06:43:51] - WARN - Socket disconnected
     */
    static log(filename, level, message) {
        const file = path.resolve(options.folder, filename)

        const date = Logger.getDate()
        let levelStr = 'UNKNOWN_LEVEL'
        if (typeof level === 'string') {
            levelStr = level
        } else if (typeof level === 'number') {
            levelStr = levels[level]
        }
        const msg = `[${date}] - ${levelStr}${options.showPID ? ' - PID ' + process.pid : ''} - ${message}${options.showHostname ? ' @ ' + os.hostname : ''}\n`

        const displayLevelIndex = typeof options.displayLevel === 'number' ? options.displayLevel : Number(Object.keys(levels).find(index => levels[index].includes(options.displayLevel.toUpperCase())))
        const levelIndex = typeof level === 'number' ? level : Number(Object.keys(levels).find(index => levels[index].includes(level.toUpperCase())))
        if (!Number.isNaN(displayLevelIndex) && !Number.isNaN(levelIndex) && displayLevelIndex > levelIndex) {
            return Logger
        }

        if (options.console_logs) {
            console.log(msg.replace('\n', ''))
            return Logger
        }

        if (!trustedFiles.includes(file)) {
            const dirPath = path.dirname(file)
            if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
            if (!fs.existsSync(file)) fs.writeFileSync(file, '', handleWriteError)

            if (path.extname(file) !== `${options.extension}`) {
                throw `Logger error : file: "${file}" extension is not ${options.extension}`
            }
            trustedFiles.push(file)
        }

        if (!this.streams) this.streams = {}
        if (!(file in this.streams)) {
            if (Object.keys(this.streams).length > MAX_FILE_LIMIT) this.streams = {}
            this.streams[file] = fs.createWriteStream(file, {
                'flags': 'a',
                'encoding': 'utf8',
                'mode': 0o666
            })
            this.streams[file].on('error', handleWriteError)
        }
        this.streams[file].write(msg)
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
     * Logger.fatal(`Division by zero`, 'big_errors.log')
     */
    static fatal(error, filename = options.filename) {
        return this.log(filename, 4, error)
    }

    /**
     * @static clear - Clear the log file
     * @param  {string} [options.filename] The filename of the file to clear or 'all' if all the files should be cleaned
     * @chainable
     * @example
     * Logger.clear() // clear the default file (options.filename)
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
        if (fs.existsSync(file)) {
            fs.truncate(file, 0, err => handleWriteError(err))
        }
    }

    /**
     * @private getDate
     * @return {string}  The date of the day formated
     */
    static getDate() {
        const dateFormat = 'DD-MM-YYYY HH:mm:ss'
        if (options.useMoment) {
            return moment().tz(options.timezone).format(dateFormat)
        } else {
            const date = new Date(Date.now())
            return speedDate.cached(dateFormat, date)
        }
    }


    /**
     * @private
     * @static getAllFiles
     *
     * @param  {string} dir directory of log files
     * @return {array}     names of the files
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
     * @static getLevel - Return an array of the index and the level of the level
     * @param  {string|number} level the index or the label of the level
     * @example  const testLevel = Logger.getLevel('warn') // --> ["2", "WARN"]
     * const testLevel = Logger.getLevel(2)      // --> ["2", "WARN"]
     * @return {array}       [index, label]
     */
    static getLevel(level) {
        return Object.entries(levels).find(([key, label]) => {
            if (typeof level == 'string') return label.includes(level.toUpperCase())
            if (typeof level == 'number') return key == level
        })
    }

    /**
     * @static addLevel - Add a new level to the logger
     * @param  {string} newLevel The label of the new level
     * @example const [importantLevel, importantLabel] = Logger.addLevel('Important')
     * Logger.log('logs.log', importantLevel, 'Important message which will be display on top of all other levels')
     * @return {array} the level array : [index, label]
     */
    static addLevel(newLevel) {
        const maxIndex = parseInt(Object.keys(levels)[Object.keys(levels).length - 1]) + 1
        levels[maxIndex] = newLevel.toUpperCase()
        return Logger.getLevel(maxIndex)
    }
}

module.exports = Logger