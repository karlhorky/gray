/*! Gray v1.7.0 https://github.com/karlhorky/gray) | MIT */
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-inlinesvg-svgfilters-prefixes-setclasses !*/
!function(e,n,t){if(e.Modernizr)return;function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,l;for(var a in S)if(S.hasOwnProperty(a)){if(e=[],n=S[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],l=i.split("."),1===l.length?Modernizr[l[0]]=s:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=s),C.push((s?"":"no-")+l.join("-"))}}function o(e){var n=T.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?T.className.baseVal=n:T.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?u(s,t||n):s);return!1}function d(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,l,a,u,f="modernizr",d=i("div"),p=c();if(parseInt(r,10))for(;r--;)a=i("div"),a.id=s?s[r]:f+(r+1),d.appendChild(a);return o=i("style"),o.type="text/css",o.id="s"+f,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),l=t(d,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=u,T.offsetHeight):d.parentNode.removeChild(d),!!l}function v(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+p(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function g(e,n,s,o){function u(){d&&(delete j.style,delete j.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var f=v(e,s);if(!r(f,"undefined"))return f}for(var d,p,c,m,g,y=["modernizr","tspan","samp"];!j.style&&y.length;)d=!0,j.modElem=i(y.shift()),j.style=j.modElem.style;for(c=e.length,p=0;c>p;p++)if(m=e[p],g=j.style[m],l(m,"-")&&(m=a(m)),j.style[m]!==t){if(o||r(s,"undefined"))return u(),"pfx"==n?m:!0;try{j.style[m]=s}catch(h){}if(j.style[m]!=g)return u(),"pfx"==n?m:!0}return u(),!1}function y(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?g(l,n,s,o):(l=(e+" "+A.join(i+" ")+i).split(" "),f(l,n,t))}function h(e,n,r){return y(e,t,t,n,r)}var C=[],S=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},_=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=_;var Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("svgfilters",function(){var n=!1;try{n="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return n});var x="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",x||E);var T=n.documentElement,b="svg"===T.nodeName.toLowerCase();Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var P="Moz O ms Webkit",z=w._config.usePrefixes?P.split(" "):[];w._cssomPrefixes=z;var A=w._config.usePrefixes?P.toLowerCase().split(" "):[];w._domPrefixes=A;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var j={style:N.elem.style};Modernizr._q.unshift(function(){delete j.style}),w.testAllProps=y,w.testAllProps=h,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return h("filter","blur(2px)");var e=i("a");return e.style.cssText=_.join("filter:blur(2px); "),!!e.style.length&&(n.documentMode===t||n.documentMode>9)}),s(),o(C),delete w.addTest,delete w.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);

// Throw an error if Modernizr._prefixes is not set
if (!window.Modernizr._prefixes) {
  throw new Error("jquery-gray: Modernizr._prefixes not set!\n\nPlease add the necessary feature detects:\nhttps://github.com/karlhorky/gray#modernizr");
}

;(function ($, window, document, undefined) {

  var pluginName = 'gray',
      defaults = {
        fade   : false,
        classes: {
          fade: 'grayscale-fade'
        }
      },
      id = 0;

  function Plugin (element, options) {
    var classes,
        fadeClass;

    options = options || {};

    classes = options.classes || {};
    fadeClass = classes.fade || defaults.classes.fade;
    options.fade = options.fade || element.className.indexOf(fadeClass) > -1;

    this.element = element;
    this.elementId = id++;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {

    init: function () {
      var element;

      if (!Modernizr.cssfilters &&
        Modernizr.inlinesvg &&
        Modernizr.svgfilters
      ) {
        element = $(this.element);

        if (this.cssFilterDeprecated(element) || this.settings.fade) {
          this.switchImage(element);
        }
      }
    },

    // TODO: Test a freshly made element (modernizr feature test?)
    // instead of testing the active element (fragile)
    cssFilterDeprecated: function(element) {
      return element.css('filter') === 'none';
    },

    elementType: function(element) {
      return element.prop('tagName') === 'IMG' ? 'Img' : 'Bg';
    },

    pxToNumber: function(pxString) {
      return parseInt(pxString.replace('px', ''));
    },

    getComputedStyle: function(element) {
      var computedStyle = {},
          styles        = {};

      computedStyle = window.getComputedStyle(element, null);

      for(var i = 0, length = computedStyle.length; i < length; i++) {
        var prop = computedStyle[i];
        var val = computedStyle.getPropertyValue(prop);
        styles[prop] = val;
      }

      return styles;
    },

    extractUrl: function(backgroundImage) {
      var url,
          regex;

      startRegex = /^url\(["']?/;
      endRegex   = /["']?\)$/;
      url = backgroundImage.replace(startRegex, '')
                           .replace(endRegex, '');

      return url;
    },

    positionToNegativeMargin: function(backgroundPosition) {
      var x,
          y,
          margin;

      x = backgroundPosition.match(/^(-?\d+\S+)/)[0];
      y = backgroundPosition.match(/\s(-?\d+\S+)$/)[0];

      margin = 'margin:' + y + ' 0 0 ' + x;

      return margin;
    },

    getBgSize: function(url, backgroundSize) {
      var img,
          ratio,
          defaultW,
          w,
          defaultH,
          h,
          size;

      img = new Image();
      img.src = url;

      // TODO: Break this up or simplify
      if (backgroundSize !== 'auto' && backgroundSize !== 'cover' && backgroundSize !== 'contain' && backgroundSize !== 'inherit') {
        var $element = $(this.element);

        ratio    = img.width / img.height;
        w        = parseInt((backgroundSize.match(/^(\d+)px/) || [0,0])[1]);
        h        = parseInt((backgroundSize.match(/\s(\d+)px$/) || [0,0])[1]);
        defaultW = $element.height() * ratio;
        defaultH = $element.width() / ratio;
        w        = w || defaultW;
        h        = h || defaultH;
      }

      if (w || h) {
        size = {
          width: w,
          height: h
        };
      } else {
        size = {
          width : img.width,
          height: img.height
        };
      }

      return size;
    },

    getImgParams: function(element) {
      var params = {};

      params.styles = this.getComputedStyle(element[0]);

      var padding = {
        top   : this.pxToNumber(params.styles['padding-top']),
        right : this.pxToNumber(params.styles['padding-right']),
        bottom: this.pxToNumber(params.styles['padding-bottom']),
        left  : this.pxToNumber(params.styles['padding-left'])
      };

      var borderWidth = {
        top   : this.pxToNumber(params.styles['border-top-width']),
        right : this.pxToNumber(params.styles['border-right-width']),
        bottom: this.pxToNumber(params.styles['border-bottom-width']),
        left  : this.pxToNumber(params.styles['border-left-width'])
      };

      params.image = {
        width : this.pxToNumber(params.styles.width),
        height: this.pxToNumber(params.styles.height)
      };

      params.svg = {
        url        : element[0].src,
        padding    : padding,
        borderWidth: borderWidth,
        width:
          params.image.width +
          padding.left +
          padding.right +
          borderWidth.left +
          borderWidth.right,
        height:
          params.image.height +
          padding.top +
          padding.bottom +
          borderWidth.top +
          borderWidth.bottom,
        offset: ''
      };

      return params;
    },

    getBgParams: function(element) {
      var params = {},
          url,
          position;

      url    = this.extractUrl(element.css('background-image'));
      bgSize = this.getBgSize(url, element.css('background-size'));
      offset = this.positionToNegativeMargin(element.css('background-position'));

      params.styles = this.getComputedStyle(element[0]);

      params.svg = $.extend(
        { url   : url },
        bgSize,
        { offset: offset }
      );

      params.image = {
        width : params.svg.width,
        height: params.svg.height
      };

      return params;
    },

    setStyles: function(type, styles, svg, image) {
      styles.display  = 'inline-block';
      styles.overflow =
        styles['overflow-x'] =
        styles['overflow-y'] = 'hidden';
      styles['background-image'] = 'url("' + svg.url + '")';
      styles['background-size']  = image.width + 'px ' + image.height + 'px';

      if (type === 'Img') {
        styles['background-repeat']   = 'no-repeat';
        styles['background-position'] = svg.padding.left + 'px ' + svg.padding.top + 'px';
        styles.width  = svg.width;
        styles.height = svg.height;
      }

      delete styles.filter;

      return styles;
    },

    // TODO: Run this outside of the plugin so that it's not run
    // on every element
    addSVGFilterOnce: function() {
      $body = $('body');
      if (!$body.data('plugin_' + pluginName + '_has_filter')) {
        $body.data('plugin_' + pluginName + '_has_filter', 'true')
          .append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute"><defs><filter id="gray"><feColorMatrix type="saturate" values="0"/></filter></defs></svg>');
      }
    },

    switchImage: function(element) {
      var type,
          params,
          classes,
          labelledby,
          title,
          template;

      type   = this.elementType(element);
      params = this['get' + type + 'Params'](element);

      classes = this.settings.fade ? this.settings.classes.fade : '';

      labelledby = element[0].alt ?
        ' aria-labelledby="gray-title-' + this.elementId + '"' :
        '';

      title = element[0].alt ?
        '<title id="gray-title-' + this.elementId + '">' + element[0].alt + '</title>' :
        '';

      template = $(
        '<div class="grayscale grayscale-replaced ' + classes + '">' +
          '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + params.svg.width + ' ' + params.svg.height + '" width="' + params.svg.width + '" height="' + params.svg.height + '" style="' + params.svg.offset + '" role="img"' + labelledby + '>' +
            title +
            '<image filter="url(&quot;#gray&quot;)" x="0" y="0" width="' + params.image.width + '" height="' + params.image.height + '" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + params.svg.url + '" />' +
          '</svg>' +
        '</div>');

      params.styles = this.setStyles(type, params.styles, params.svg, params.image);

      // TODO: Should this really set all params or should we set only unique ones by comparing to a control element?
      template.css(params.styles);

      this.addSVGFilterOnce();
      element.replaceWith(template);
    }
  });

  $.fn[pluginName] = function (options) {
    this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
    return this;
  };

  $(window).on('load', function() {
    $('.grayscale:not(.grayscale-replaced)')[pluginName]();
  });

})(jQuery, window, document);
