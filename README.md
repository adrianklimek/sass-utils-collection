
  # Sass utils collection
  :zap: A collection of sass mixins and functions 

  ## Table of contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Configuration](#configuration)
     1. [Media](#media)
     2. [Grid](#grid)
  4. [Utils](#utils)
     1. [Layout](#layout) 
        1. [center-content](#center-content)
        2. [center-self](#center-self)
        3. [grid-container](#grid-container)
        4. [grid-row](#grid-row)
        5. [set-grid-column-width](#set-grid-column-width)
        6. [set-nested-column-width](#set-nested-column-width)
        7. [grid-column-width](#grid-column-width)
        8. [grid-column](#grid-column)
        9. [grid-offset](#grid-offset)
        10. [hide-up](#hide-up)
        11. [hide-down](#hide-down)
        12. [media](#media)
        13. [media-up](#media-up)
        14. [media-down](#media-down)
        15. [sticky-footer](#sticky-footer)
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
        5. [font-smoothing](#font-smoothing)
        6. [hide-visually](#hide-visually)
        7. [prefix](#prefix)
        8. [random-color](#random-color)
        9. [responsive-img](#responsive-img)
        10. [truncate-text-line](#truncate-text-line)
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
  ### Media
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
  
  #### grid-column-width
  *type: function*
  
  Gets a column width
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint-name|string|-|one of breakpoint names declared in the media configuration|
  |columns-count|number|-|-|
  
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
  |breakpoint-name|string|-|one of breakpoint names declared in the media configuration|
  
  #### hide-down
  *type: mixin*
  
  Hides element on a screen resolution smaller than given one
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint-name|string|-|one of breakpoint names declared in the media configuration|
  
  #### media
  *type: mixin*
  
  Applies styles to given media query
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint|string|-|one of breakpoint names declared in the media configuration|
  |is-mobile-first|boolean|true|-|
  
  #### media-up
  *type: mixin*
  
  Applies styles to screen resolutions equal or greater than given one
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint|string|-|one of breakpoint names declared in the media configuration|
  
  #### media-down
  *type: mixin*
  
  Applies styles to screen resolutions smaller than given one
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |breakpoint|string|-|one of breakpoint names declared in the media configuration|
  
  #### sticky-footer
  *type: mixin*
  
  Makes an element stay always at the bottom
  
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
  
  Enables font's kerning - improves spacing and fit of spe­cific pairs of let­ters
  
  
  #### font-smoothing
  *type: mixin*
  
  Enables anti-aliasing effect
  
  
  #### hide-visually
  *type: mixin*
  
  Applies visually hidden utility (A11Y)
  
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
  |prefixes...|string|-|any number of prefixes|
  
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
  
  
  #### truncate-text-line
  *type: mixin*
  
  Truncates text line
  
  ##### Parameters
  | name | type | default | description |
  | ---- | ---- | ------- | ----------- |
  |width|string|null|-|

  ## License
  sass-utils-collection is licensed under [MIT license](https://opensource.org/licenses/MIT).
