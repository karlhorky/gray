gray
====

Make an image gray in all browsers. [Demo](http://kununu.github.io/gray/).

Support:

* IE 6-9
* IE 10-11 (inline SVG via JavaScript)
* Firefox 10+, Firefox on Android
* Chrome 19+, Chrome for Android 25+
* Safari 6+, Safari iOS 6+
* Opera 15+

How to Use
----------

[Download](https://github.com/kununu/gray/archive/master.zip) or install using [Bower](http://bower.io).

```shell
bower install --save gray
```

1. Add the CSS from [gray.css](https://github.com/kununu/gray/blob/master/css/gray.css).
2. Add the plugin after jQuery at the bottom of the body.

    ```html
    <script src="/js/jquery.gray.min.js"></script>
    ```

3. Add your image with a class of ```grayscale```.

    ```html
    <img src="/img/color.jpg" class="grayscale">
    ```

    Images with CSS background-image, background-size and (numeric) background-position are also supported:

    ```html
    <div style="
      background-image   : url(/img/color-sprite-lg.png);
      background-size    : auto 72px;
      background-position: -180px 0;
      display            : inline-block;
      width              : 180px;
      height             : 72px;
    " class="grayscale"></div>
    ```

4. Revel in your absolute and utter awesomeness.

Changelog
---------

* v1.2.0: IE shim: Copy styles from element to replacement element
* v1.1.1: Improve documentation and demo
* v1.1.0: Support for background images with basic background-size and background-position
* v1.0.0: First basic version with support for &lt;img&gt; tags

TODO
----

* background-size: cover, background-size: contain
* feature detection for SVG filters instead of client detection
* better JavaScript templating for SVG
* support for transitioning back to color


License
-------

MIT &copy; kununu