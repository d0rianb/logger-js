# Logger library

[![npm version](https://badge.fury.io/js/%40dorianb%2Flogger-js.svg)](https://badge.fury.io/js/%40dorianb%2Flogger-js)
[![npm downloads](https://badgen.net/npm/dt/@dorianb/logger-js)](https://www.npmjs.com/package/@dorianb/logger-js)

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
</dl>

## Typedefs

<dl>
<dt><a href="#OptionsObject">OptionsObject</a> : <code>Object</code></dt>
<dd><p>Logger options</p>
</dd>
</dl>

<a name="Logger"></a>

## Logger
**Kind**: global class  

* [Logger](#Logger)
    * [.options](#Logger.options)
    * [.options](#Logger.options) ⇒ [<code>OptionsObject</code>](#OptionsObject)
    * [.version](#Logger.version) ⇒ <code>string</code>
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
**Setter**: overwrite the logger options  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | logger default values |

<a name="Logger.options"></a>

### Logger.options ⇒ [<code>OptionsObject</code>](#OptionsObject)
**Kind**: static property of [<code>Logger</code>](#Logger)  
**Getter**: get the logger options  
<a name="Logger.version"></a>

### Logger.version ⇒ <code>string</code>
**Kind**: static property of [<code>Logger</code>](#Logger)  
**Returns**: <code>string</code> - the version number of the logger in use  
**Getter**: Version getter  
<a name="Logger.log"></a>

### Logger.log(filename, level, message) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  
**Returns**: [<code>Logger</code>](#Logger) - Return the logger to chain methods  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | file where the log is written |
| level | <code>number</code> \| <code>string</code> | level of the log |
| message | <code>string</code> | content of the log |

<a name="Logger.info"></a>

### Logger.info(info, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| info | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.debug"></a>

### Logger.debug(debug, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| debug | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.warn"></a>

### Logger.warn(warn, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| warn | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.error"></a>

### Logger.error(error, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| error | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.fatal"></a>

### Logger.fatal(fatal, [filename]) ↩︎
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fatal | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.clear"></a>

### Logger.clear([filename]) ⇒ [<code>Logger</code>](#Logger)
**Kind**: static method of [<code>Logger</code>](#Logger)  
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [filename] | <code>type</code> | <code>options.filename</code> | 

<a name="OptionsObject"></a>

## OptionsObject : <code>Object</code>
Logger options

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| filemane? | <code>string</code> | 
| folder? | <code>string</code> | 


* * *

2020 &copy; Dorian
