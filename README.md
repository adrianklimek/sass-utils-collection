![License](https://img.shields.io/npm/l/sass-utils-collection)
# Sass utils collection
:zap: A collection of sass mixins and functions 


## Table of contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Configuration](#configuration)
   1. [Media breakpoints](#media-breakpoints)
   2. [Flexbox Grid](#flexbox-grid)
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
        5. [fluid-property](#fluid-property)
        6. [fluid-value](#fluid-value)
        7. [font-smoothing](#font-smoothing)
        8. [media-property](#media-property)
        9. [prefix](#prefix)
        10. [property](#property)
        11. [random-color](#random-color)
        12. [responsive-img](#responsive-img)
        13. [sideways-text](#sideways-text)
        14. [size](#size)
        15. [system-font](#system-font)
        16. [truncate-line](#truncate-line)
        17. [visually-hidden](#visually-hidden)
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
Import it in your main sass file:

```
@import '~sass-utils-collection';
```

Depending on your configuration, you may need to include a full path:

```
@import './node_modules/sass-utils-collection/index';
```

Or import modules manually:

```
@import '~sass-utils-collection/lib/layout/media';
@import '~sass-utils-collection/lib/layout/hide';
@import '~sass-utils-collection/lib/layout/flexbox-grid';
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
### Flexbox Grid
*From version 1.0.0 grid module has to be imported manually* `lib/layout/flexbox-grid`


Grid's breakpoint names has to correspond to the media breakpoints.

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
  default: 1440px,
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
##### Example 
```scss
// Usage
.element-1 {
  @include center-content;
}

.element-2 {
  @include center-content(vertically);
}

// Output
.element-1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.element-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```
#### center-self
*type: mixin*

Centers an element

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|type|string|both|one of: both, horizontally, vertically|
|position|string|absolute|-|
##### Example 
```scss
// Usage
.element-1 {
  @include center-self;
}

.element-2 {
  @include center-self(vertically, relative);
}

// Output
.element-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.element-2 {
  position: relative;
  top: 50%;
  transform: translate(0, -50%)
}
```
#### fill-space
*type: mixin*

Stretch an element to fill its parent

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|size|string|100%|when it is smaller or greater than 100% content is also centered|
|position|string|absolute|-|
##### Example 
```scss
// Usage
.element-1 {
  @include fill-space;
}

.element-2 {
  @include fill-space(80%, relative);
}

// Output
.element-1 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.element-2 {
  position: relative;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
}
```
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
##### Example 
```scss
// Usage
.element-1 {
  @include hide-up(md);
}

.element-2 {
  @include hide-up($width: 1044px);
}

// Output
@media (min-width: 768px) {
  .element-1 {
    display: none;
  }
}

@media (min-width: 1044px) {
  .element-2 {
    display: none;
  }
}
```
#### hide-down
*type: mixin*

Hides element on a screen resolution smaller than given one

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|breakpoint-name|string|null|one of breakpoint names declared in the media configuration|
|width|string|null|custom width can be used instead of breakpoint name|
##### Example 
```scss
// Usage
.element-1 {
  @include hide-down(md);
}

.element-2 {
  @include hide-down($width: 1044px);
}

// Output
@media (max-width: 767px) {
  .element-1 {
    display: none;
  }
}

@media (max-width: 1043px) {
  .element-2 {
    display: none;
  }
}
```
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
##### Example 
```scss
// Usage
.element-1 {
  @include media-up(md) {
    width: 50%;
  }
}

.element-2 {
  @include media-up($width: 1500px) {
    width: 1000px;
  }
}

// Output
@media (min-width: 768px) {
  .element-1 {
    width: 50%;
  }
}

@media (min-width: 1500px) {
  .element-2 {
    width: 1000px;
  }
}
```
#### media-down
*type: mixin*

Applies styles to screen resolutions smaller than given one

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|breakpoint|string|null|one of breakpoint names declared in the media configuration|
|width|string|null|custom width can be used instead of breakpoint name|
##### Example 
```scss
// Usage
.element-1 {
  @include media-down(md) {
    width: 100%;
  }
}

.element-2 {
  @include media-down($width: 1500px) {
    width: 500px;
  }
}

// Output
@media (max-width: 767px) {
  .element-1 {
    width: 100%;
  }
}

@media (max-width: 1499px) {
  .element-2 {
    width: 500px;
  }
}
```
#### sticky-footer
*type: mixin*

Makes an element stay always at the bottom

Note: for cross-browser support additional code may be needed: https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|content-selector|string|-|selector like `.content` or `&__content`|
##### Example 
```scss
// Usage
.element {
  @include sticky-footer('.content');
}

// Output
.element {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.element .content {
  flex: 1;
}
```

### Resets
#### reset-appearance
*type: mixin*

Resets the appearance property

##### Example 
```scss
// Usage
.element {
  @include reset-appearance;
}

// Output
.element {
  -webkit-appearance: none;
  -moz-appearance: none;
}
```
#### reset-button
*type: mixin*

Resets a button's default styles

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|cursor|string|pointer|-|
##### Example 
```scss
// Usage
.el {
  @include reset-button;
}

// Output
.el {
  background: none;

  border: 0;
  border-radius: 0;
  outline: none;
  padding: 0;

  color: inherit;
  font: inherit;
  cursor: pointer;
}
```
#### reset-input
*type: mixin*

 Resets an input's default styles

##### Example 
```scss
// Usage
.element {
  @include reset-input;
}

// Output
.element {
  background: none;
  background-clip: content-box;

  border: 0;
  border-radius: 0;

  padding: 0;
  outline: none;

  box-shadow: none;
}
```
#### reset-link
*type: mixin*

Resets a link's default styles

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|color|string|inherit|-|
##### Example 
```scss
// Usage
.element {
  @include reset-link;
}

// Output
.element {
  text-decoration: none;
  color: inherit;
}
```
#### reset-list
*type: mixin*

Resets a list's default styles

##### Example 
```scss
// Usage
.element {
  @include reset-list;
}

// Output
.element {
  list-style: none;
  padding: 0;
  margin: 0;
}
```
#### reset-placeholder
*type: mixin*

Resets a placeholder's default style

##### Example 
```scss
// Usage
.element {
  @include reset-placeholder;
}

// Output
.element::placeholder {
  opacity: 1;
  color: inherit;
}
```

### Misc
#### aspect-ratio
*type: mixin*

Sets width to height size ratio

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|width|number|1|-|
|height|number|1|-|
|grow|boolean|false|allows content to increase element size when content takes more space|
##### Example 
```scss
// Usage
.element-1 {
  @include aspect-ratio(16, 9);
}

.element-2 {
  @include aspect-ratio(4, 3, true);
}

// Output
.element-1 {
  position: relative;
}
.element-1::before {
  content: '';
  display: block;
  padding-top: 0.5625%;
}

.element-2::before,
.element-2::after {
  content: '';
}

.element-2::before {
  padding-top: 75%;
  float: left;
}

.element-2::after {
  display: block;
  clear: both;
}
```
#### clearfix
*type: mixin*

Forces an element to self-clear its children

##### Example 
```scss
// Usage
.element {
  @include clearfix;
}

// Output
.element::after {
  content: '';
  display: table;
  clear: both;
}
```
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
##### Example 
```scss
// Usage
.element {
  @include dynamic-shadow(20px, 20px, 5px);
}

// Output
.element {
  position: relative;
  z-index: 1;
}

.element::after {
  content: '';
  position: absolute;
  top: 20px;
  left: 20px;

  width: 100%;
  height: 100%;

  filter: blur(5px);
  opacity: 0.75;

  background: inherit;
  border-radius: inherit;
  z-index: -1;
}
```
#### enable-kerning
*type: mixin*

Enables font kerning — improves spacing and fit of specific pairs of letters

##### Example 
```scss
// Usage
.element {
  @include enable-kerning;
}

// Output
.element {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
#### fluid-property
*type: mixin*

Returns property with fluid value based on viewport size

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|property|string|-|-|
|from|number|-|-|
|to|number|-|-|
|media-from|number|-|-|
|media-to|number|-|-|
|media-type|number|width|`width` or `height`|
##### Example 
```scss
// Usage
.el-1 {
  @include fluid-property(font-size, 10px, 23px, 375px, 1440px);
}

.el-2 {
  @include fluid-property(height, 100px, 200px, 768px, 1280px, height);
}

// Output
.el-1 {
  font-size: 10px;
}
@media (min-width: 375px) {
  .el-1 {
    font-size: calc(1.22066vw + 5.42254px);
  }
}
@media (min-width: 1440px) {
  .el-1 {
    font-size: 23px;
   }
}

.el-2 {
  height: 100px;
}
@media (min-height: 768px) {
  .el-2 {
    height: calc(19.53125vh + -50px);
  }
}
@media (min-height: 1280px) {
  .el-2 {
    height: 200px;
  }
}
```
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
##### Example 
```scss
// Usage
.element-1 {
  font-size: fluid-value(16px, 24px, 320px, 768px);
}

.element-2 {
  font-size: fluid-value(16px, 24px, 320px, 768px, vh);
}

// Output
.element-1 {
  font-size: calc(1.78571429vw + 10.2857142857px);
}

.element-2 {
  font-size: calc(1.78571429vh + 10.2857142857px);
}
```
#### font-smoothing
*type: mixin*

Enables anti-aliasing effect

##### Example 
```scss
// Usage
.element {
  @include font-smoothing;
}

// Output
.element {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
#### media-property
*type: mixin*

Sets a property for multiple breakpoints

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|property|string|-|-|
|values|map|()|-|
##### Example 
```scss
// Usage
.el-1 {
  @include media-property(font-size, (xs: 12px, md: 14px, lg: 16px));
}

// Output
.el-1 {
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1170px) {
    font-size: 16px;
  }
}
```
#### prefix
*type: mixin*

Applies prefixes to given property

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|property|string|-|-|
|value|string|-|-|
|prefixes...|string|-|any number of arguments with prefixes|
##### Example 
```scss
// Usage
.element {
  @include prefix(appearance, none, moz, webkit);
}

// Output
.element {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
```
#### property
*type: mixin*

Sets the same value to multiple properties

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|value|string|-|-|
|properties...|string|-|any number of arguments with properties|
##### Example 
```scss
// Usage
.element {
  @include property(inherit, background-color, color, font);
}

// Output
.element {
  background-color: inherit;
  colo: inherit;
  font: inherit;
}
```
#### random-color
*type: function*

Generates random rgba color

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|alpha|number|1|-|
##### Example 
```scss
// Usage
.element-1 {
  background-color: random-color();
}

.element-2 {
  background-color: random-color(0.8);
}

// Output
.element-1 {
  background-color: #8399f2;
}

.element-2 {
  background-color: rgba(218, 230, 202, 0.8);
}
```
#### responsive-img
*type: mixin*

Makes an image responsive

##### Example 
```scss
// Usage
.element {
  @include responsive-img;
}

// Output
.element {
  width: 100%;
  display: block;
}
```
#### sideways-text
*type: mixin*

Turns a text sideways

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|bottom-to-top|boolean|false|-|
|align|string|left|-|
##### Example 
```scss
// Usage
.el-1 {
  @include sideways-text;
}

.el-2 {
  @include sideways-text(true);
}

.el-3 {
  @include sideways-text(true, right);
}

// Output
.el-1 {
  writing-mode: vertical-lr;
}

.el-2 {
  writing-mode: vertical-rl;
  transform: scale(-1);
}

.el-3 {
  writing-mode: vertical-lr;
  transform: scale(-1);
}
```
#### size
*type: mixin*

Sets width and height

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|width|string|-|-|
|height|string|-|if not supplied `width` parameter is used instead|
##### Example 
```scss
// Usage
.element-1 {
  @include size(200px);
}

.element-2 {
  @include size(100%, 200px);
}

// Output
.element-1 {
  width: 200px;
  height: 200px;
}

.element-2 {
  width: 100%;
  height: 200px;
}
```
#### system-font
*type: mixin*

Sets system's default font

##### Example 
```scss
// Usage
.el {
  @include system-font;
}

// Output
.el {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
```
#### truncate-line
*type: mixin*

Truncates one line text

##### Example 
```scss
// Usage
.element {
  @include truncate-line;
}

// Output
.element {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
#### visually-hidden
*type: mixin*

Applies visually hidden utility — https://a11yproject.com/posts/how-to-hide-content/

##### Parameters
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
|focusable|boolean|false|-|
##### Example 
```scss
// Usage
.element-1 {
  @include visually-hidden;
}
.element-2 {
  @include visually-hidden($focusable: true);
}

// Output
.element-1 {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

.element-2:not(:focus):not(:active) {
  position: absolute !important;
   height: 1px;
   width: 1px;
   overflow: hidden;
   clip: rect(1px, 1px, 1px, 1px);
   white-space: nowrap;
}
```

## License
sass-utils-collection is licensed under [MIT license](https://opensource.org/licenses/MIT).

