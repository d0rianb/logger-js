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
<!-- Empty to hide the `**Kind**` tag in documentation -->

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
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Setter**: overwrite the logger options  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | logger default values |

<a name="Logger.options"></a>

### Logger.options ⇒ [<code>OptionsObject</code>](#OptionsObject)
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Getter**: Return the options of the logger  
<a name="Logger.version"></a>

### Logger.version ⇒ <code>string</code>
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>string</code> - the version number of the logger  
**Getter**: Version getter  
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

<a name="Logger.info"></a>

### Logger.info(info, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| info | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.debug"></a>

### Logger.debug(debug, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| debug | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.warn"></a>

### Logger.warn(warn, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| warn | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.error"></a>

### Logger.error(error, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| error | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.fatal"></a>

### Logger.fatal(fatal, [filename]) ↩︎
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fatal | <code>string</code> |  | content of the log |
| [filename] | <code>string</code> | <code>&quot;options.filename&quot;</code> | filename without path |

<a name="Logger.clear"></a>

### Logger.clear([filename]) ⇒ [<code>Logger</code>](#Logger)
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  

| Param | Type | Default |
| --- | --- | --- |
| [filename] | <code>type</code> | <code>options.filename</code> | 

<a name="OptionsObject"></a>

## OptionsObject : <code>Object</code>
Logger options

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [filename] | <code>string</code> | <code>&quot;&#x27;logs.log&#x27;&quot;</code> | 
| [folder] | <code>string</code> | <code>&quot;&#x27;./logs/&#x27;&quot;</code> | 
| [extension] | <code>string</code> | <code>&quot;&#x27;.log&#x27;&quot;</code> | 


* * *

2020 &copy; Dorian
