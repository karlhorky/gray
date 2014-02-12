gray
====

Make an image gray in all browsers. [Demo](http://kununu-labs.github.io/gray/).

Support:

* IE 6-9
* IE 10-11 (inline SVG via JavaScript)
* Firefox 10+, Firefox on Android
* Chrome 19+, Chrome for Android 25+
* Safari 6+, Safari iOS 6+

How to Use
----------

1. Add the CSS in [gray.css](https://github.com/kununu-labs/gray/blob/master/css/gray.css).
2. Add the plugin after jQuery at the bottom of the document.

    ```html
    <script src="/js/gray.js"></script>
    ```

3. Add your image with a class of ```grayscale```.
   ```html
   <img src="/img/color.jpg" class="grayscale">
   ```

4. Revel in your absolute and utter awesomeness.

TODO
----

* feature detection for SVG filters (increased compat?)
* better JavaScript templating for SVG
* bower component
