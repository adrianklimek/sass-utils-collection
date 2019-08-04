const fs = require('fs')
const sassdoc = require('sassdoc')
const template = require('./docs/template')

const createDocData = entry => ({
  description: entry.description,
  name: entry.context.name,
  parameters: entry.parameter,
  type: entry.context.type,
})

const build = async (path) => {
  const layout = await sassdoc.parse('./lib/layout')
  const resets = await sassdoc.parse('./lib/resets')
  const misc = await sassdoc.parse('./lib/misc')

  fs.writeFile(path, template({
    layout: layout.map(createDocData),
    resets: resets.map(createDocData),
    misc: misc.map(createDocData),
  }), err => {
    if (err) throw err
  })
}

build('./README.md')

