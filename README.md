# Logger library

[![npm version](https://badge.fury.io/js/%40dorianb%2Flogger-js.svg)](https://badge.fury.io/js/%40dorianb%2Flogger-js)
[![npm downloads](https://badgen.net/npm/dt/@dorianb/logger-js)](https://www.npmjs.com/package/@dorianb/logger-js)

`logger-js` is a npm logger library for NodeJS

## Installation
To install the package, just run :
```bash
npm install --save @dorianb/logger-js
```

Then in the `.js` file :
```js
const Logger = require('@dorianb/logger-js')
```

## Documentation

## Classes

<dl>
<dt><a href="#Logger">Logger</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#LevelsObject">LevelsObject</a> : <code>Object</code></dt>
<dd><p>A dictionnary of the logger levels indexed by priority</p>
</dd>
<dt><a href="#OptionsObject">OptionsObject</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Logger"></a>

## Logger
<!-- Empty to hide the `**Kind**` tag in documentation -->

* [Logger](#Logger)
    * [.options](#Logger.options)
    * [.options](#Logger.options) ⇒ [<code>OptionsObject</code>](#OptionsObject)
    * [.version](#Logger.version) ⇒ <code>string</code>
    * [.levels](#Logger.levels) ⇒ [<code>LevelsObject</code>](#LevelsObject)
    * [.log(filename, level, message)](#Logger.log) ⇒ [<code>Logger</code>](#Logger)
    * [.info(info, [filename])](#Logger.info) ↩︎
    * [.debug(debug, [filename])](#Logger.debug) ↩︎
    * [.warn(warn, [filename])](#Logger.warn) ↩︎
    * [.error(error, [filename])](#Logger.error) ↩︎
    * [.fatal(fatal, [filename])](#Logger.fatal) ↩︎
    * [.clear()](#Logger.clear) ⇒ [<code>Logger</code>](#Logger)
    * [.addLevel(newLevel)](#Logger.addLevel) ⇒ <code>int</code>

<a name="Logger.options"></a>

### Logger.options
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Setter**: overwrite the logger options  

| Param | Type | Description |
| --- | --- | --- |
| opts | [<code>OptionsObject</code>](#OptionsObject) | logger default values |

**Example**  
```js
Logger.options = {filename: 'production.log'}
```
<a name="Logger.options"></a>

### Logger.options ⇒ [<code>OptionsObject</code>](#OptionsObject)
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Getter**: Return the options of the logger  
**Example**  
```js
const loggerOptions = Logger.options
```
<a name="Logger.version"></a>

### Logger.version ⇒ <code>string</code>
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>string</code> - the version number of the logger  
**Getter**: Version getter  
**Example**  
```js
const version = Logger.version
```
<a name="Logger.levels"></a>

### Logger.levels ⇒ [<code>LevelsObject</code>](#LevelsObject)
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Getter**: Levels getter  
**Example**  
```js
const levels = Logger.levels
```
<a name="Logger.log"></a>

### Logger.log(filename, level, message) ⇒ [<code>Logger</code>](#Logger)
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  
**Returns**: [<code>Logger</code>](#Logger) - Return the logger to chain methods  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | file where the log is written |
| level | <code>number</code> \| <code>string</code> | level of the log |
| message | <code>string</code> | content of the log |

**Example**  
```js
Logger.log('network.log', 'WARN', 'Socket disconnected')
// --> [10-06-2020 06:43:51] - WARN - Socket disconnected
```
<a name="Logger.info"></a>

### Logger.info(info, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| info | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

**Example**  
```js
Logger.info('Server has started')
Logger.info('Server has started', 'server.log')
```
<a name="Logger.debug"></a>

### Logger.debug(debug, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| debug | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

**Example**  
```js
Logger.debug(`Client ID = ${clientID}`)
Logger.debug(`Client ID = ${clientID}`, 'clients.log')
```
<a name="Logger.warn"></a>

### Logger.warn(warn, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| warn | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

**Example**  
```js
Logger.warn(`Database disconnected`)
Logger.warn(`Database disconnected`, 'connections.log')
```
<a name="Logger.error"></a>

### Logger.error(error, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| error | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

**Example**  
```js
Logger.error(`Connection to 127.0.0.1:2000 refused`)
Logger.error(`Connection to 127.0.0.1:2000 refused`, 'logs.log')
```
<a name="Logger.fatal"></a>

### Logger.fatal(fatal, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fatal | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

**Example**  
```js
Logger.fatal(`Division by zero`)
Logger.fatal(`Division by zero`, 'logs.log')
```
<a name="Logger.clear"></a>

### Logger.clear() ⇒ [<code>Logger</code>](#Logger)
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type |
| --- | --- |
| [options.filename] | <code>string</code> | 

**Example**  
```js
Logger.clear()
Logger.clear('client.log')
Logger.clear('client.log', 'connections.log', 'logs.log')
```
<a name="Logger.addLevel"></a>

### Logger.addLevel(newLevel) ⇒ <code>int</code>
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>int</code> - the level number  

| Param | Type | Description |
| --- | --- | --- |
| newLevel | <code>string</code> | The label of the new level |

**Example**  
```js
const importnantLevel = Logger.addLevel('Important')
```
<a name="LevelsObject"></a>

## LevelsObject : <code>Object</code>
A dictionnary of the logger levels indexed by priority

<!-- Empty to hide the `**Kind**` tag in documentation -->
<a name="OptionsObject"></a>

## OptionsObject : <code>Object</code>
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [filename] | <code>string</code> | <code>&quot;&#x27;logs.log&#x27;&quot;</code> |  |
| [folder] | <code>string</code> | <code>&quot;&#x27;./logs/&#x27;&quot;</code> |  |
| [extension] | <code>string</code> | <code>&quot;&#x27;.log&#x27;&quot;</code> |  |
| [timezone] | <code>string</code> | <code>&quot;&#x27;Europe/Berlin&#x27;&quot;</code> | A moment timezone --> Full list at: https://momentjs.com/timezone |
| [displayLevel] | <code>string</code> \| <code>number</code> | <code>0</code> | The level below a log is not displayed |


* * *

2020 &copy; Dorian
