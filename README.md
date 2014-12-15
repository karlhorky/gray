gray
====

Make an image gray in all browsers.

#### [Demo](http://work.karlhorky.com/gray/)

Support:

- IE 6-9
- IE 10-11 (inline SVG via JavaScript)
- Firefox 10+, Firefox on Android
- Chrome 19+, Chrome for Android 25+
- Android Browser 4.4+
- Safari 6+, Safari iOS 6+
- Opera 15+, Opera Mobile 16+
- BlackBerry Browser 10+

Installation
------------

You can install with [Bower](http://bower.io):

```shell
bower install --save gray
```

Or use the CDN links:

```
//cdn.jsdelivr.net/jquery.gray/1.4.1/gray.min.css
//cdn.jsdelivr.net/jquery.gray/1.4.1/jquery.gray.min.js
```

Or you can just [download](https://github.com/karlhorky/gray/archive/gh-pages.zip) it.

How to Use
----------

1. Add the CSS from [gray.css](https://github.com/karlhorky/gray/blob/gh-pages/css/gray.css).
2. Add the plugin after jQuery at the bottom of the body.

    ```html
    <script src="/js/jquery.gray.min.js"></script>
    ```

    The plugin automatically initializes for all elements with a class of ```grayscale```.

    The plugin can also be called manually with:

    ```javascript
    $('.my-grayscale-class').gray();
    ```

    The effect can be toggled with the `grayscale-off` class:

    ```javascript
    $('.grayscale').toggleClass('grayscale-off');
    ```

3. Add your image with a class of ```grayscale```.

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

4. (Optional) Add class of ```grayscale-fade``` if you want transitioning from grayscale back to color on hover

    ```html
    <img src="/img/color.jpg" class="grayscale grayscale-fade">
    ```

5. Revel in your absolute and utter awesomeness.

How it Works
------------

In [browsers that support css filters](http://caniuse.com/#feat=css-filters), the styles in ```gray.css``` will use CSS filters to turn the image gray.

The ```jquery.gray``` plugin uses the ```Modernizr._prefixes```, ```css-filters```, ```Inline SVG``` and ```svg-filters``` feature detects from Modernizr to determine browser support. If a browser supports inline SVG and SVG filters but not CSS filters, the plugin replaces the elements with SVG elements with filters.

Changelog
---------

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

TODO
----

- background-size: cover
- background-size: contain

License
-------

MIT &copy; Karl Horky
