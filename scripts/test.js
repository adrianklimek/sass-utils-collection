const path = require('path')
const glob = require('glob')
const True = require('sass-true')

glob
  .sync(path.resolve(__dirname, '../', '**/*.spec.scss'))
  .forEach(file => True.runSass({ file }, describe, it))
