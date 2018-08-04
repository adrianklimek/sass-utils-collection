# Sass utils collection
:zap: A collection of sass mixins and functions 

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

Depending on your configuration, you may need to include the full path:

```
@import './node_modules/sass-utils-collection/lib/index';
```

## Configuration
### Media
Breakpoints values as well as breakpoints names can be overwritten 
but has to correspond to breakpoints names in the grid configuration.
#### Default
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
Grid's breakpoints names has to correspond to names from the media configuration.
The `$grid-columns` map has to have a `default` property.

#### Default
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

## License
sass-utils-collection is licensed under [MIT license](https://opensource.org/licenses/MIT).
