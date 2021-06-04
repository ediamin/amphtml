(self.AMP=self.AMP||[]).push({n:"amp-fit-text",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // build/amp-fit-text-0.1.css.js
  var CSS = ".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/";

  // src/core/types/array.js
  var isArray = Array.isArray;

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;
  function map(opt_initial) {
    var obj = Object.create(null);
    if (opt_initial) {
      Object.assign(obj, opt_initial);
    }
    return obj;
  }

  // src/core/types/index.js
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  // src/core/types/function/index.js
  function throttle(win, callback, minInterval) {
    var locker = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      locker = win.setTimeout(waiter, minInterval);
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      if (nextCallArgs) {
        fire(nextCallArgs);
      }
    }
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (locker) {
        nextCallArgs = args;
      } else {
        fire(args);
      }
    };
  }

  // src/config.js
  var env = self.AMP_CONFIG || {};
  var thirdPartyFrameRegex = (typeof env["thirdPartyFrameRegex"] == "string" ? new RegExp(env["thirdPartyFrameRegex"]) : env["thirdPartyFrameRegex"]) || /^d-\d+\.ampproject\.net$/;
  var cdnProxyRegex = (typeof env["cdnProxyRegex"] == "string" ? new RegExp(env["cdnProxyRegex"]) : env["cdnProxyRegex"]) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
  function getMetaUrl(name) {
    if (!self.document || !self.document.head) {
      return null;
    }
    if (self.location && cdnProxyRegex.test(self.location.origin)) {
      return null;
    }
    var metaEl = self.document.head.querySelector('meta[name="' + name + '"]');
    return metaEl && metaEl.getAttribute("content") || null;
  }
  var urls = {
    thirdParty: env["thirdPartyUrl"] || "https://3p.ampproject.net",
    thirdPartyFrameHost: env["thirdPartyFrameHost"] || "ampproject.net",
    thirdPartyFrameRegex,
    cdn: env["cdnUrl"] || getMetaUrl("runtime-host") || "https://cdn.ampproject.org",
    cdnProxyRegex,
    localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
    errorReporting: env["errorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
    betaErrorReporting: env["betaErrorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
    localDev: env["localDev"] || false,
    trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
    geoApi: env["geoApiUrl"] || getMetaUrl("amp-geo-api")
  };

  // src/log.js
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;

  // src/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  function camelCaseToTitleCase(camelCase) {
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  }
  function getVendorJsPropertyName_(style, titleCase) {
    for (var i = 0; i < vendorPrefixes.length; i++) {
      var propertyName = vendorPrefixes[i] + titleCase;
      if (style[propertyName] !== void 0) {
        return propertyName;
      }
    }
    return "";
  }
  function getVendorJsPropertyName(style, camelCase, opt_bypassCache) {
    if (isVar(camelCase)) {
      return camelCase;
    }
    if (!propertyNameCache) {
      propertyNameCache = map();
    }
    var propertyName = propertyNameCache[camelCase];
    if (!propertyName || opt_bypassCache) {
      propertyName = camelCase;
      if (style[camelCase] === void 0) {
        var titleCase = camelCaseToTitleCase(camelCase);
        var prefixedPropertyName = getVendorJsPropertyName_(style, titleCase);
        if (style[prefixedPropertyName] !== void 0) {
          propertyName = prefixedPropertyName;
        }
      }
      if (!opt_bypassCache) {
        propertyNameCache[camelCase] = propertyName;
      }
    }
    return propertyName;
  }
  function setStyle(element, property, value, opt_units, opt_bypassCache) {
    var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
    if (!propertyName) {
      return;
    }
    var styleValue = opt_units ? value + opt_units : value;
    if (isVar(propertyName)) {
      element.style.setProperty(propertyName, styleValue);
    } else {
      element.style[propertyName] = styleValue;
    }
  }
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
  }
  function px(value) {
    return value + "px";
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/layout.js
  var Layout = {
    NODISPLAY: "nodisplay",
    FIXED: "fixed",
    FIXED_HEIGHT: "fixed-height",
    RESPONSIVE: "responsive",
    CONTAINER: "container",
    FILL: "fill",
    FLEX_ITEM: "flex-item",
    FLUID: "fluid",
    INTRINSIC: "intrinsic"
  };
  function isLayoutSizeDefined(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID || layout == Layout.INTRINSIC;
  }
  function getLengthNumeral(length) {
    var res = parseFloat(length);
    return isFiniteNumber(res) ? res : void 0;
  }

  // extensions/amp-fit-text/0.1/amp-fit-text.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var TAG = "amp-fit-text";
  var LINE_HEIGHT_EM_ = 1.15;
  var RESIZE_THROTTLE_MS = 100;
  var AmpFitText = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpFitText2, _AMP$BaseElement);
    var _super = _createSuper(AmpFitText2);
    function AmpFitText2(element) {
      var _this;
      _classCallCheck(this, AmpFitText2);
      _this = _super.call(this, element);
      _this.content_ = null;
      _this.contentWrapper_ = null;
      _this.measurer_ = null;
      _this.minFontSize_ = -1;
      _this.maxFontSize_ = -1;
      _this.resizeObserverUnlistener_ = null;
      _this.textContent_ = "";
      return _this;
    }
    _createClass(AmpFitText2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.content_ = this.element.ownerDocument.createElement("div");
        this.applyFillContent(this.content_);
        this.content_.classList.add("i-amphtml-fit-text-content");
        setStyles(this.content_, {
          zIndex: 2
        });
        this.contentWrapper_ = this.element.ownerDocument.createElement("div");
        setStyles(this.contentWrapper_, {
          lineHeight: LINE_HEIGHT_EM_ + "em"
        });
        this.content_.appendChild(this.contentWrapper_);
        this.measurer_ = this.element.ownerDocument.createElement("div");
        setStyles(this.measurer_, {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          visibility: "hidden",
          lineHeight: LINE_HEIGHT_EM_ + "em"
        });
        this.getRealChildNodes().forEach(function(node) {
          _this2.contentWrapper_.appendChild(node);
        });
        this.updateMeasurerContent_();
        this.element.appendChild(this.content_);
        this.element.appendChild(this.measurer_);
        this.minFontSize_ = getLengthNumeral(this.element.getAttribute("min-font-size")) || 6;
        this.maxFontSize_ = getLengthNumeral(this.element.getAttribute("max-font-size")) || 72;
        Object.defineProperty(this.element, "textContent", {
          set: function set(v) {
            _this2.textContent_ = v;
            _this2.mutateElement(function() {
              _this2.contentWrapper_.textContent = v;
              _this2.updateMeasurerContent_();
              _this2.updateFontSize_();
            });
          },
          get: function get() {
            return _this2.textContent_ || _this2.contentWrapper_.textContent;
          }
        });
      }
    }, {
      key: "isRelayoutNeeded",
      value: function isRelayoutNeeded() {
        return true;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this3 = this;
        if (this.win.ResizeObserver && this.resizeObserverUnlistener_ === null) {
          var observer = new this.win.ResizeObserver(throttle(this.win, function() {
            return _this3.mutateElement(function() {
              _this3.updateMeasurerContent_();
              _this3.updateFontSize_();
            });
          }, RESIZE_THROTTLE_MS));
          observer.observe(this.content_);
          observer.observe(this.measurer_);
          this.resizeObserverUnlistener_ = function() {
            observer.disconnect();
          };
        }
        return this.mutateElement(function() {
          _this3.updateFontSize_();
        });
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        if (this.resizeObserverUnlistener_ !== null) {
          this.resizeObserverUnlistener_();
          this.resizeObserverUnlistener_ = null;
        }
      }
    }, {
      key: "updateMeasurerContent_",
      value: function updateMeasurerContent_() {
        this.measurer_.innerHTML = this.contentWrapper_.innerHTML;
      }
    }, {
      key: "updateFontSize_",
      value: function updateFontSize_() {
        var maxHeight = this.content_.offsetHeight;
        var maxWidth = this.content_.offsetWidth;
        var fontSize = calculateFontSize_(this.measurer_, maxHeight, maxWidth, this.minFontSize_, this.maxFontSize_);
        setStyle(this.contentWrapper_, "fontSize", px(fontSize));
        updateOverflow_(this.contentWrapper_, this.measurer_, maxHeight, fontSize);
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }]);
    return AmpFitText2;
  }(AMP.BaseElement);
  function calculateFontSize_(measurer, expectedHeight, expectedWidth, minFontSize, maxFontSize) {
    maxFontSize++;
    while (maxFontSize - minFontSize > 1) {
      var mid = Math.floor((minFontSize + maxFontSize) / 2);
      setStyle(measurer, "fontSize", px(mid));
      var height = measurer.offsetHeight;
      var width = measurer.offsetWidth;
      if (height > expectedHeight || width > expectedWidth) {
        maxFontSize = mid;
      } else {
        minFontSize = mid;
      }
    }
    return minFontSize;
  }
  function updateOverflow_(content, measurer, maxHeight, fontSize) {
    setStyle(measurer, "fontSize", px(fontSize));
    var overflown = measurer.offsetHeight > maxHeight;
    var lineHeight = fontSize * LINE_HEIGHT_EM_;
    var numberOfLines = Math.floor(maxHeight / lineHeight);
    content.classList.toggle("i-amphtml-fit-text-content-overflown", overflown);
    setStyles(content, {
      lineClamp: overflown ? numberOfLines : "",
      maxHeight: overflown ? px(lineHeight * numberOfLines) : ""
    });
  }
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerElement(TAG, AmpFitText, CSS);
  });
})();

})});
//# sourceMappingURL=amp-fit-text-0.1.max.js.map
