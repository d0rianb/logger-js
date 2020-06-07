# Logger library

[![npm version](https://badge.fury.io/js/%40dorianb%2Flogger-js.svg)](https://badge.fury.io/js/%40dorianb%2Flogger-js)
[![npm downloads](https://badgen.net/npm/dt/@dorianb/logger-js)](https://badgen.net/npm/dt/@dorianb/logger-js)

`logger-js` is a npm logger library for JS and NodeJS

## Installation
To install the package, just run :
`npm install --save @dorianb/logger-js`

Then in the `.js` file :
`const Logger = require('@dorianb/logger-js')`

## Documentation

## Classes

<dl>
<dt><a href="#Logger">Logger</a></dt>
<dd></dd>
<dt><a href="#Logger">Logger</a></dt>
<dd></dd>
</dl>

<a name="Logger"></a>

## Logger
**Kind**: global class  

* [Logger](#Logger)
    * [.options](#Logger.options)
    * [.version](#Logger.version) ⇒ <code>string</code>
    * [.options](#Logger.options)
    * [.version](#Logger.version) ⇒ <code>string</code>
    * [.log(filename, level, message)](#Logger.log) ⇒ [<code>Logger</code>](#Logger)
    * [.info(info, [filename])](#Logger.info) ↩︎
    * [.debug(debug, [filename])](#Logger.debug) ↩︎
    * [.warn(warn, [filename])](#Logger.warn) ↩︎
    * [.error(error, [filename])](#Logger.error) ↩︎
    * [.fatal(fatal, [filename])](#Logger.fatal) ↩︎
    * [.clear([filename])](#Logger.clear) ⇒ [<code>Logger</code>](#Logger)
    * [.log(filename, level, message)](#Logger.log) ⇒ [<code>Logger</code>](#Logger)
    * [.info(info, [filename])](#Logger.info) ↩︎
    * [.debug(debug, [filename])](#Logger.debug) ↩︎
    * [.warn(warn, [filename])](#Logger.warn) ↩︎
    * [.error(error, [filename])](#Logger.error) ↩︎
    * [.fatal(fatal, [filename])](#Logger.fatal) ↩︎
    * [.clear([filename])](#Logger.clear) ⇒ [<code>Logger</code>](#Logger)

<a name="Logger.options"></a>

### Logger.options
**Kind**: static property of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>type</code> | <p>an OptionsObject</p> |

<a name="Logger.version"></a>

### Logger.version ⇒ <code>string</code>
**Kind**: static property of [<code>Logger</code>](#Logger)  
**Returns**: <code>string</code> - <p>the version number of the logger in use</p>  
<a name="Logger.options"></a>

### Logger.options
**Kind**: static property of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>type</code> | <p>an OptionsObject</p> |

<a name="Logger.version"></a>

### Logger.version ⇒ <code>string</code>
**Kind**: static property of [<code>Logger</code>](#Logger)  
**Returns**: <code>string</code> - <p>the version number of the logger in use</p>  
<a name="Logger.log"></a>

### Logger.log(filename, level, message) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  
**Returns**: [<code>Logger</code>](#Logger) - <p>Return the logger to chain methods</p>  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | <p>file where the log is written</p> |
| level | <code>number</code> \| <code>string</code> | <p>level of the log</p> |
| message | <code>string</code> | <p>content of the log</p> |

<a name="Logger.info"></a>

### Logger.info(info, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| info | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.debug"></a>

### Logger.debug(debug, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| debug | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.warn"></a>

### Logger.warn(warn, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| warn | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.error"></a>

### Logger.error(error, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| error | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.fatal"></a>

### Logger.fatal(fatal, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fatal | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.clear"></a>

### Logger.clear([filename]) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [filename] | <code>type</code> | <code>options.logFile</code> | 

<a name="Logger.log"></a>

### Logger.log(filename, level, message) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  
**Returns**: [<code>Logger</code>](#Logger) - <p>Return the logger to chain methods</p>  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | <p>file where the log is written</p> |
| level | <code>number</code> \| <code>string</code> | <p>level of the log</p> |
| message | <code>string</code> | <p>content of the log</p> |

<a name="Logger.info"></a>

### Logger.info(info, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| info | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.debug"></a>

### Logger.debug(debug, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| debug | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.warn"></a>

### Logger.warn(warn, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| warn | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.error"></a>

### Logger.error(error, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| error | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.fatal"></a>

### Logger.fatal(fatal, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fatal | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.clear"></a>

### Logger.clear([filename]) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [filename] | <code>type</code> | <code>options.logFile</code> | 

<a name="Logger"></a>

## Logger
**Kind**: global class  

* [Logger](#Logger)
    * [.options](#Logger.options)
    * [.version](#Logger.version) ⇒ <code>string</code>
    * [.options](#Logger.options)
    * [.version](#Logger.version) ⇒ <code>string</code>
    * [.log(filename, level, message)](#Logger.log) ⇒ [<code>Logger</code>](#Logger)
    * [.info(info, [filename])](#Logger.info) ↩︎
    * [.debug(debug, [filename])](#Logger.debug) ↩︎
    * [.warn(warn, [filename])](#Logger.warn) ↩︎
    * [.error(error, [filename])](#Logger.error) ↩︎
    * [.fatal(fatal, [filename])](#Logger.fatal) ↩︎
    * [.clear([filename])](#Logger.clear) ⇒ [<code>Logger</code>](#Logger)
    * [.log(filename, level, message)](#Logger.log) ⇒ [<code>Logger</code>](#Logger)
    * [.info(info, [filename])](#Logger.info) ↩︎
    * [.debug(debug, [filename])](#Logger.debug) ↩︎
    * [.warn(warn, [filename])](#Logger.warn) ↩︎
    * [.error(error, [filename])](#Logger.error) ↩︎
    * [.fatal(fatal, [filename])](#Logger.fatal) ↩︎
    * [.clear([filename])](#Logger.clear) ⇒ [<code>Logger</code>](#Logger)

<a name="Logger.options"></a>

### Logger.options
**Kind**: static property of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>type</code> | <p>an OptionsObject</p> |

<a name="Logger.version"></a>

### Logger.version ⇒ <code>string</code>
**Kind**: static property of [<code>Logger</code>](#Logger)  
**Returns**: <code>string</code> - <p>the version number of the logger in use</p>  
<a name="Logger.options"></a>

### Logger.options
**Kind**: static property of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>type</code> | <p>an OptionsObject</p> |

<a name="Logger.version"></a>

### Logger.version ⇒ <code>string</code>
**Kind**: static property of [<code>Logger</code>](#Logger)  
**Returns**: <code>string</code> - <p>the version number of the logger in use</p>  
<a name="Logger.log"></a>

### Logger.log(filename, level, message) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  
**Returns**: [<code>Logger</code>](#Logger) - <p>Return the logger to chain methods</p>  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | <p>file where the log is written</p> |
| level | <code>number</code> \| <code>string</code> | <p>level of the log</p> |
| message | <code>string</code> | <p>content of the log</p> |

<a name="Logger.info"></a>

### Logger.info(info, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| info | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.debug"></a>

### Logger.debug(debug, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| debug | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.warn"></a>

### Logger.warn(warn, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| warn | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.error"></a>

### Logger.error(error, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| error | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.fatal"></a>

### Logger.fatal(fatal, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fatal | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.clear"></a>

### Logger.clear([filename]) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [filename] | <code>type</code> | <code>options.logFile</code> | 

<a name="Logger.log"></a>

### Logger.log(filename, level, message) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  
**Returns**: [<code>Logger</code>](#Logger) - <p>Return the logger to chain methods</p>  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | <p>file where the log is written</p> |
| level | <code>number</code> \| <code>string</code> | <p>level of the log</p> |
| message | <code>string</code> | <p>content of the log</p> |

<a name="Logger.info"></a>

### Logger.info(info, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| info | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.debug"></a>

### Logger.debug(debug, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| debug | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.warn"></a>

### Logger.warn(warn, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| warn | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.error"></a>

### Logger.error(error, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| error | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.fatal"></a>

### Logger.fatal(fatal, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fatal | <code>string</code> |  | <p>content of the log</p> |
| [filename] | <code>string</code> | <code>&quot;options.logFile&quot;</code> | <p>filename without path</p> |

<a name="Logger.clear"></a>

### Logger.clear([filename]) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [filename] | <code>type</code> | <code>options.logFile</code> | 


* * *

2020 &copy; Dorian
