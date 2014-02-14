;(function ($, window, document, undefined) {

  var pluginName = 'gray',
      defaults = {};

  function Plugin (element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {

    init: function () {
      // TODO: better feature detection
      if (this.isIE10() || this.isIE11()) {
        this.switchImage();
      }
    },

    isIE10: function() {
      return Function('/*@cc_on return document.documentMode===10.0@*/')();
    },

    isIE11: function() {
      return !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    },

    elementType: function(element) {
      var type;

      if (element.prop('tagName') === 'IMG') {
        type = 'Img';
      } else {
        type = 'Bg';
      }

      return type;
    },

    extractUrl: function(cssValue) {
      var url,
          regex;

      startRegex = /^url\(["']?/;
      endRegex   = /["']?\)$/;
      url = cssValue.replace(startRegex, '')
                    .replace(endRegex, '');

      return url;
    },

    getParams: function(element) {
      var type = this.elementType(element);
      return this['get' + type + 'Params'](element);
    },

    getImgParams: function(element) {
      var params = {};

      params.width  = element.width();
      params.height = element.height();
      params.url    = element[0].src;

      return params;
    },

    getBgParams: function(element) {
      var params = {};

      params.width  = element.width();
      params.height = element.height();
      params.url    = this.extractUrl(element.css('background-image'));

      return params;
    },

    switchImage: function () {
      var template,
          element = $(this.element);

      params = this.getParams(element);

      // TODO: use templating here
      template = $(
        '<svg xmlns="http://www.w3.org/2000/svg" id="svgroot" viewBox="0 0 '+params.width+' '+params.height+'" width="'+params.width+'" height="'+params.height+'">' +
          '<defs>' +
            '<filter id="gray">' +
              '<feComposite in="SourceGraphic" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" />' +
              '<feColorMatrix type="saturate" values="0" />' +
            '</filter>' +
          '</defs>' +
          '<image filter="url(&quot;#gray&quot;)" x="0" y="0" width="'+params.width+'" height="'+params.height+'" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+params.url+'" />' +
        '</svg>');

      element.replaceWith(template);
    }
  };

  $.fn[pluginName] = function (options) {
    this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
    return this;
  };

  $(window).on('load', function() {
    $('.grayscale')[pluginName]();
  });

})(jQuery, window, document);
