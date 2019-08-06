const fs = require('fs')
const path = require('path')

const introduction = fs.readFileSync(path.join(__dirname, '/introduction.md'))
const installation = fs.readFileSync(path.join(__dirname, './installation.md'))
const configuration = fs.readFileSync(path.join(__dirname, './configuration.md'))
const license = fs.readFileSync(path.join(__dirname, './license.md'))

const createParamsTable = (content = []) => {
  if (!content.length) return ''

  const heading = '##### Parameters'
  const tableHeading = '| name | type | default | description |'
  const divider = '| ---- | ---- | ------- | ----------- |'
  const rows = content.map(param => (
    `|${ param.name }|${ param.type }|${ param.default || '-' }|${ param.description || '-' }|`
  )).join('\n')
  return `${ heading }\n${ tableHeading }\n${ divider }\n${ rows }\n`
}

const createExample = examples => {
  const example = examples && examples[0]
  if (example) {
    const heading = `##### Example \n`
    const codeTag = '```'
    const content = `${codeTag}scss\n${example.code}\n${codeTag}`
    return heading + content
  }

  return ''
}

const createList = items => {
  const createEntryDetails = item =>
    `#### ${ item.name }\n*type: ${ item.type }*\n\n${ item.description }\n`

  return items
    .map(item => createEntryDetails(item) + createParamsTable(item.parameters) + createExample(item.examples))
    .join('\n')
    .trim()
}

const createAnchorList = items => (
  items
    .map(({ name }, i) => `${ i + 1 }. [${ name }](#${ name })`)
    .join('\n')
    .trim()
)

const applyIndent = (template, size) => (
  template.replace(/\n/g, `\n${ Array(size).fill(' ').join('') }`)
)

// Docs template
const template = ({ layout, resets, misc }) => (`
${introduction}

## Table of contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Configuration](#configuration)
   1. [Media breakpoints](#media-breakpoints)
   2. [Flexbox Grid](#flexbox-grid)
4. [Utils](#utils)
   1. [Layout](#layout) 
      ${ applyIndent(createAnchorList(layout), 8)}
   2. [Resets](#resets)
      ${ applyIndent(createAnchorList(resets), 8) }
   3. [Misc](#misc)
      ${ applyIndent(createAnchorList(misc), 8) }
5. [License](#license)

${installation}

${configuration}

## Utils

### Layout
${ createList(layout) }

### Resets
${ createList(resets) }

### Misc
${ createList(misc) }

${license}
`)

module.exports = template
