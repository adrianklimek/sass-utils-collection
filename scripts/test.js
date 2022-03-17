const path = require('path')
const glob = require('glob')
const sassTrue = require('sass-true')

glob
  .sync(path.resolve(__dirname, '../', '**/*.spec.scss'))
  .forEach(file => sassTrue.runSass({ file }, { describe, it }))
