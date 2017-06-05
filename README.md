# gray

CSS Styles and jQuery plugin to display images in grayscale.<img align="right" src="https://img.shields.io/npm/v/jquery-gray.svg?style=flat" alt="npm version">

#### [Demo](https://work.karlhorky.com/gray/)

Support:

- IE 6-11 (10 and 11 use the JavaScript polyfill)
- Edge 12+ (12 uses the JavaScript polyfill)
- Firefox 10+, Firefox on Android
- Chrome 19+, Chrome for Android 25+
- Android Browser 4.4+
- Safari 6+, Safari iOS 6+
- Opera 15+, Opera Mobile 16+
- BlackBerry Browser 10+

## Installation

You can install with [npm](https://www.npmjs.com/):

```shell
npm install --save jquery-gray
```

Or [Bower](http://bower.io):

```shell
bower install --save gray
```

Or use the CDN links:

```
https://npmcdn.com/jquery-gray@1.6.0/css/gray.min.css
https://npmcdn.com/jquery-gray@1.6.0/js/jquery.gray.min.js
```

Or you can just [download](https://github.com/karlhorky/gray/archive/gh-pages.zip) it.

## How to Use

1. Add the CSS from [gray.css](https://github.com/karlhorky/gray/blob/gh-pages/css/gray.css).

    If you want to use your own CSS selector instead of `.grayscale`, edit or copy the CSS.

2. Add the plugin after jQuery at the bottom of the body.

    ```html
    <script src="/js/jquery.gray.min.js"></script>
    ```

    The plugin automatically initializes for all elements with a class of `grayscale`.

    The plugin can also be called manually with:

    ```javascript
    $('.my-grayscale-class').gray();
    ```

    The effect can be toggled with the `grayscale-off` class:

    ```javascript
    $('.grayscale').toggleClass('grayscale-off');
    ```

3. Add your image with a class of `grayscale`.

    ```html
    <img src="/img/color.jpg" class="grayscale">
    ```

    Images with CSS background-image, background-size and (numeric) background-position are also supported:

    ```html
    <div style="
      background-image   : url(/img/color-sprite-lg.jpg);
      background-size    : auto 72px;
      background-position: -180px 0;
      display            : inline-block;
      width              : 180px;
      height             : 72px;
    " class="grayscale"></div>
    ```

    Non-numeric background-size (cover, contain, ...) and background-position (center, ...) are not currently supported (pull requests welcome!).

4. (Optional) Add class of `grayscale-fade` if you want transitioning from grayscale back to color on hover

    ```html
    <img src="/img/color.jpg" class="grayscale grayscale-fade">
    ```

5. If you are using Modernizr already, make sure that the [required feature detects](https://github.com/karlhorky/gray#modernizr) are included in your build.

6. Revel in your absolute and utter awesomeness.

## Caveats

### Non-numeric background-size and background-position

Non-numeric background-size (`cover`, `contain`, ...) and background-position (`center`, ...) are not currently supported.

### Percentage-based background-position

Percentage-based background-position (ex. `50% 50%`, ...) is not currently supported.

### Non-visible elements will not be correctly initialized

Calling the plugin on hidden images (or other images that cannot have their size calculated) will fail in polyfill browsers. Workarounds can be found in the discussions at [#57](https://github.com/karlhorky/gray/issues/57#issuecomment-193702953) and [#40](https://github.com/karlhorky/gray/issues/40#issuecomment-136187306).

### Child elements removed in browsers without support for CSS filters

Target elements with child elements will have those child elements removed in browsers without support for CSS filters. [#61](https://github.com/karlhorky/gray/issues/61)

### Event listeners removed in browsers without support for CSS filters

Target elements with event listeners removed in browsers without support for CSS filters. [#65](https://github.com/karlhorky/gray/issues/65)

### Colored borders

Colored borders will be also converted to grayscale in non-polyfill browsers. To also convert to grayscale in polyfill browsers, the class `grayscale-replaced` can be used:

```css
.grayscale-replaced {
  border-color: #494949 !important;
}
```

## How it Works

In [browsers that support css filters](http://caniuse.com/#feat=css-filters), the styles in `gray.css` will use CSS filters to turn the image gray.

### Modernizr

The `jquery.gray` plugin uses the [`Modernizr._prefixes`, `css-filters`, `Inline SVG` and `svg-filters` feature detects](https://modernizr.com/download/?cssfilters-inlinesvg-svgfilters-prefixes-setclasses) from Modernizr to determine browser support. If a browser supports inline SVG and SVG filters but not CSS filters, the plugin replaces the elements with SVG elements with filters.

## Changelog

- v1.6.0: Throw error when modernizr feature detects not in build [#71](https://github.com/karlhorky/gray/issues/71) [#72](https://github.com/karlhorky/gray/issues/72)
- v1.5.0: Add SVG &lt;title&gt; to polyfill for accessibility ([demo](https://work.karlhorky.com/gray/#img-alt))
- v1.4.5: Fix sizing of img tags with padding
- v1.4.4: Fix bug with missing padding properties with background images
- v1.4.3: Fix bug with padding on img tag
- v1.4.2: Add Firefox 35+ support, normalize cross-browser rendering
- v1.4.1: Fix bug with `display: none` on parents
- v1.4.0: Add support for programmatic toggling of grayscale
- v1.3.6: Fix image size with resized img tag and grayscale-fade in polyfill
- v1.3.5: Declare variables to fix error in strict mode
- v1.3.4: Don't override existing modernizr
- v1.3.3: Update minified js to match source
- v1.3.2: Remove grayscale on hover in ie6-9 (fade option), use same svg filter in polyfill as in css
- v1.3.1: Bugfix for empty gray class name
- v1.3.0: Rename fade class to grayscale-fade to resolve conflict with bootstrap
- v1.2.0: IE shim: Copy styles from element to replacement element
- v1.1.1: Improve documentation and demo
- v1.1.0: Support for background images with basic background-size and background-position
- v1.0.0: First basic version with support for &lt;img&gt; tags

## License

MIT &copy; Karl Horky
