## Configuration
### Media breakpoints
Breakpoints values as well as breakpoint names can be overwritten.
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
