const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')

const docsFilePath = 'docs/documentation.md'

jsdoc2md.render({
    files: 'src/main.js'
}).then(docs => fs.writeFileSync(docsFilePath, docs))