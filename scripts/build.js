const fs = require('fs')
const sassdoc = require('sassdoc')

const createDocData = entry => ({
  description: entry.description,
  name: entry.context.name,
  parameters: entry.parameter,
  type: entry.context.type,
})

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

const createList = items => {
  const createEntryDetails = item =>
    `#### ${ item.name }\n*type: ${ item.type }*\n\n${ item.description }\n`

  return items
    .map(item => createEntryDetails(item) + createParamsTable(item.parameters))
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
const createDocs = ({ layout, resets, misc }) => (
`
  # Sass utils collection
  :zap: A collection of sass mixins and functions 

  ## Table of contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Configuration](#configuration)
     1. [Media breakpoints](#media-breakpoints)
     2. [Grid](#grid)
  4. [Utils](#utils)
     1. [Layout](#layout) 
        ${ applyIndent(createAnchorList(layout), 8)}
     2. [Resets](#resets)
        ${ applyIndent(createAnchorList(resets), 8) }
     3. [Misc](#misc)
        ${ applyIndent(createAnchorList(misc), 8) }
  5. [License](#license)

  ## Installation

  ### Install with npm:
  \`\`\`
  npm install sass-utils-collection
  \`\`\`

  ### Install with yarn:
  \`\`\`
  yarn add sass-utils-collection
  \`\`\`

  ## Usage
  Import it in your main sass file

  \`\`\`
  @import '~sass-utils-collection';
  \`\`\`

  Depending on your configuration, you may need to include a full path:

  \`\`\`
  @import './node_modules/sass-utils-collection/lib/index';
  \`\`\`

  ## Configuration
  ### Media breakpoints
  Breakpoints values as well as breakpoint names can be overwritten 
  but has to correspond to breakpoint names in the grid configuration.
  ##### Default
  \`\`\`
  $media-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 1170px,
    xl: 1440px,
  );
  \`\`\`
  ### Grid
  Grid's breakpoint names has to correspond to names from the media configuration.

  The \`$grid-columns\` map has to have a \`default\` property.

  ##### Default
  \`\`\`
  $grid-gutter: (
    xs: 16px,
    md: 24px,
  );

  $grid-space-around: (
    xs: 24px,
    md: 64px,
    lg: 40px,
  );

  $grid-columns: (
    default: 12,
  );

  $grid-container-width: (
    xs: 1440px,
  );
  \`\`\`

  ## Utils

  ### Layout
  ${ applyIndent(createList(layout), 2) }

  ### Resets
  ${ applyIndent(createList(resets), 2) }

  ### Misc
  ${ applyIndent(createList(misc), 2) }

  ## License
  sass-utils-collection is licensed under [MIT license](https://opensource.org/licenses/MIT).
`)

const build = async (path) => {
  const layout = await sassdoc.parse('./lib/layout')
  const resets = await sassdoc.parse('./lib/resets')
  const misc = await sassdoc.parse('./lib/misc')

  fs.writeFile(path, createDocs({
    layout: layout.map(createDocData),
    resets: resets.map(createDocData),
    misc: misc.map(createDocData),
  }), err => {
    if (err) throw err
  })
}

build('./README.md')

