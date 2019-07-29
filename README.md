
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
        1. [center-content](#center-content)
        2. [center-self](#center-self)
        3. [fill-space](#fill-space)
        4. [grid-column-width](#grid-column-width)
        5. [grid-container](#grid-container)
        6. [grid-row](#grid-row)
        7. [set-grid-column-width](#set-grid-column-width)
        8. [set-nested-column-width](#set-nested-column-width)
        9. [grid-column](#grid-column)
        10. [grid-offset](#grid-offset)
        11. [hide-up](#hide-up)
        12. [hide-down](#hide-down)
        13. [media](#media)
        14. [media-up](#media-up)
        15. [media-down](#media-down)
        16. [sticky-footer](#sticky-footer)
     2. [Resets](#resets)
        1. [reset-appearance](#reset-appearance)
        2. [reset-button](#reset-button)
        3. [reset-input](#reset-input)
        4. [reset-link](#reset-link)
        5. [reset-list](#reset-list)
        6. [reset-placeholder](#reset-placeholder)
     3. [Misc](#misc)
        1. [aspect-ratio](#aspect-ratio)
        2. [clearfix](#clearfix)
        3. [dynamic-shadow](#dynamic-shadow)
        4. [enable-kerning](#enable-kerning)
        5. [fluid-value](#fluid-value)
        6. [font-smoothing](#font-smoothing)
        7. [hide-visually](#hide-visually)
        8. [prefix](#prefix)
        9. [property](#property)
        10. [random-color](#random-color)
        11. [responsive-img](#responsive-img)
        12. [size](#size)
        13. [truncate-line](#truncate-line)
  5. [License](#license)

  ## Installation

  ### Install with npm:
  ```
  npm install sass-utils-collection
  ```

  ### Install with yarn:
  ```
  yarn add sass-utils-collection
  ```

  ## Usage
  Import it in your main sass file

  ```
  @import 'sass-utils-collection';
  ```

  Depending on your configuration, you may need to include a full path:

  ```
  @import './node_modules/sass-utils-collection/lib/index';
  ```

  ## Configuration
  ### Media breakpoints
  Breakpoints values as well as breakpoint names can be overwritten 
  but has to correspond to breakpoint names in the grid configuration.
  ##### Default
  ```
  $media-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 1170px,
    xl: 1440px,
  );
  ```
  ### Grid
  Grid's breakpoint names has to correspond to names from the media configuration.

  The `$grid-columns` map has to have a `default` property.

  ##### Default
  ```
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
  ```

  ## Utils

  ### Layout
  #### center-content
  *type: mixin*
  
  Centers an element's content
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |type|string|both|one of: both, vertically, horizontally|
  
  #### center-self
  *type: mixin*
  
  Centers an element
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |type|string|both|one of: both, horizontally, vertically|
  |position|string|absolute|-|
  
  #### fill-space
  *type: mixin*
  
  Fills the space of it's parent
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |size|string|100%|when it is smaller or greater than 100% content will be also centered|
  |position|string|absolute|-|
  
  #### grid-column-width
  *type: function*
  
  Gets a column width
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint-name|string|-|one of breakpoint names declared in the media configuration|
  |columns-count|number|-|-|
  
  #### grid-container
  *type: mixin*
  
  Creates a grid container
  
  
  #### grid-row
  *type: mixin*
  
  Creates a grid row
  
  
  #### set-grid-column-width
  *type: mixin*
  
  Sets a grid column width properties
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |width|string|-|-|
  
  #### set-nested-column-width
  *type: mixin*
  
  Sets a grid column width properties for nested column
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |columns-count|number|-|-|
  |container-size|number|-|container size in columns|
  |breakpoint-name|string|-|one of breakpoint names declared in the media configuration|
  
  #### grid-column
  *type: mixin*
  
  Creates a grid column
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |columns|map|()|columns map like: `(xs: 12, md: 6, xl: 4)`|
  
  #### grid-offset
  *type: mixin*
  
  Creates a grid column's offset
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |columns|map|()|columns map like: `(xs: 12, md: 6, xl: 4)`|
  
  #### hide-up
  *type: mixin*
  
  Hides element on a screen resolution equal or greater than given one
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint-name|string|null|one of breakpoint names declared in the media configuration|
  |width|string|null|custom width can be used instead of breakpoint name|
  
  #### hide-down
  *type: mixin*
  
  Hides element on a screen resolution smaller than given one
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint-name|string|null|one of breakpoint names declared in the media configuration|
  |width|string|null|custom width can be used instead of breakpoint name|
  
  #### media
  *type: mixin*
  
  Applies styles to given media query
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint|string|null|one of breakpoint names declared in the media configuration|
  |is-mobile-first|boolean|true|-|
  |width|string|null|custom width can be used instead of breakpoint name|
  
  #### media-up
  *type: mixin*
  
  Applies styles to screen resolutions equal or greater than given one
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint|string|null|one of breakpoint names declared in the media configuration|
  |width|string|null|custom width can be used instead of breakpoint name|
  
  #### media-down
  *type: mixin*
  
  Applies styles to screen resolutions smaller than given one
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint|string|null|one of breakpoint names declared in the media configuration|
  |width|string|null|custom width can be used instead of breakpoint name|
  
  #### sticky-footer
  *type: mixin*
  
  Makes an element stay always at the bottom\
  Note: for cross-browser support additional code is needed: https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |content-selector|string|-|selector like `.content` or `&__content`|

  ### Resets
  #### reset-appearance
  *type: mixin*
  
  Resets the appearance property
  
  
  #### reset-button
  *type: mixin*
  
  Resets a button's default styles
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |cursor|string|pointer|-|
  
  #### reset-input
  *type: mixin*
  
   Resets an input's default styles
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |type|string|text|input's type, one of: text, number|
  
  #### reset-link
  *type: mixin*
  
  Resets a link's default styles
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |color|string|inherit|-|
  
  #### reset-list
  *type: mixin*
  
  Resets a list's default styles
  
  
  #### reset-placeholder
  *type: mixin*
  
  Resets a placeholder's default style

  ### Misc
  #### aspect-ratio
  *type: mixin*
  
  Sets width to height size ratio
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |width|number|1|-|
  |height|number|1|-|
  |content-selector|string|null|used only when `$grow` parameter is set to `false`|
  |grow|boolean|false|allows content to increase element size when content takes more space|
  
  #### clearfix
  *type: mixin*
  
  Forces an element to self-clear its children
  
  
  #### dynamic-shadow
  *type: mixin*
  
  Creates shadow based on an element's background
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |offset-x|string|-|-|
  |offset-y|string|-|-|
  |blur-radius|string|-|-|
  |opacity|number|0.75|-|
  
  #### enable-kerning
  *type: mixin*
  
  Enables font's kerning – improves spacing and fit of specific pairs of letters
  
  
  #### fluid-value
  *type: function*
  
  Returns fluid value based on viewport size
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |from|number|-|-|
  |to|number|-|-|
  |media-from|number|-|-|
  |media-to|number|-|-|
  |unit|number|vw|`vw` or `vh`|
  
  #### font-smoothing
  *type: mixin*
  
  Enables anti-aliasing effect
  
  
  #### hide-visually
  *type: mixin*
  
  Applies visually hidden utility — https://a11yproject.com/posts/how-to-hide-content/
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |is-focusable|boolean|false|-|
  
  #### prefix
  *type: mixin*
  
  Applies prefixes to given property
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |property|string|-|-|
  |value|string|-|-|
  |prefixes...|string|-|any number of arguments with prefixes|
  
  #### property
  *type: mixin*
  
  Applies the same value to multiple properties
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |value|string|-|-|
  |properties...|string|-|any number of arguments with properties|
  
  #### random-color
  *type: function*
  
  Generates random rgba color
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |alpha|number|1|-|
  
  #### responsive-img
  *type: mixin*
  
  Makes an image responsive
  
  
  #### size
  *type: mixin*
  
  Sets width and height
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |width|string|-|-|
  |height|string|-|if not supplied `width` parameter is used instead|
  
  #### truncate-line
  *type: mixin*
  
  Truncates text in a one line

  ## License
  sass-utils-collection is licensed under [MIT license](https://opensource.org/licenses/MIT).
