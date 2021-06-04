(self.AMP=self.AMP||[]).push({n:"amp-iframely",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
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
  function dict(opt_initial) {
    return opt_initial || {};
  }
  function omit(o, props) {
    return Object.keys(o).reduce(function(acc, key) {
      if (!props.includes(key)) {
        acc[key] = o[key];
      }
      return acc;
    }, {});
  }

  // src/core/types/array.js
  var isArray = Array.isArray;

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

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";

  // src/log.js
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";
  var LogLevel = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    FINE: 4
  };
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;
  var logConstructor = null;
  function user(opt_element) {
    if (!logs.user) {
      logs.user = getUserLogger(USER_ERROR_SENTINEL);
    }
    if (!isFromEmbed(logs.user.win, opt_element)) {
      return logs.user;
    } else {
      if (logs.userForEmbed) {
        return logs.userForEmbed;
      }
      return logs.userForEmbed = getUserLogger(USER_ERROR_EMBED_SENTINEL);
    }
  }
  function getUserLogger(suffix) {
    if (!logConstructor) {
      throw new Error("failed to call initLogConstructor");
    }
    return new logConstructor(self, function(logNum, development) {
      if (development || logNum >= 1) {
        return LogLevel.FINE;
      }
      return LogLevel.WARN;
    }, suffix);
  }
  function isFromEmbed(win, opt_element) {
    if (!opt_element) {
      return false;
    }
    return opt_element.ownerDocument.defaultView != win;
  }
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/url.js
  var SERVING_TYPE_PREFIX = dict({
    "c": true,
    "v": true,
    "a": true,
    "ad": true
  });
  function appendEncodedParamStringToUrl(url, paramString, opt_addToFront) {
    if (!paramString) {
      return url;
    }
    var mainAndFragment = url.split("#", 2);
    var mainAndQuery = mainAndFragment[0].split("?", 2);
    var newUrl = mainAndQuery[0] + (mainAndQuery[1] ? opt_addToFront ? "?" + paramString + "&" + mainAndQuery[1] : "?" + mainAndQuery[1] + "&" + paramString : "?" + paramString);
    newUrl += mainAndFragment[1] ? "#" + mainAndFragment[1] : "";
    return newUrl;
  }
  function addParamsToUrl(url, params) {
    return appendEncodedParamStringToUrl(url, serializeQueryString(params));
  }
  function serializeQueryString(params) {
    var s = [];
    for (var k in params) {
      var v = params[k];
      if (v == null) {
        continue;
      } else if (isArray(v)) {
        for (var i = 0; i < v.length; i++) {
          var sv = v[i];
          s.push(encodeURIComponent(k) + "=" + encodeURIComponent(sv));
        }
      } else {
        var _sv = v;
        s.push(encodeURIComponent(k) + "=" + encodeURIComponent(_sv));
      }
    }
    return s.join("&");
  }

  // src/core/data-structures/promise.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Deferred = function Deferred2() {
    var _this = this;
    _classCallCheck(this, Deferred2);
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }

  // src/dom.js
  function removeElement(element) {
    if (element.parentElement) {
      element.parentElement.removeChild(element);
    }
  }
  function addAttributesToElement(element, attributes) {
    for (var attr in attributes) {
      element.setAttribute(attr, attributes[attr]);
    }
    return element;
  }
  function createElementWithAttributes(doc, tagName, attributes) {
    var element = doc.createElement(tagName);
    return addAttributesToElement(element, attributes);
  }
  function isIframed(win) {
    return win.parent && win.parent != win;
  }

  // src/core/dom/event-helper-listen.js
  var optsSupported;
  function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
    var localElement = element;
    var localListener = listener;
    var wrapped = function wrapped2(event) {
      try {
        return localListener(event);
      } catch (e) {
        self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(e);
        throw e;
      }
    };
    var optsSupported2 = detectEvtListenerOptsSupport();
    var capture = !!(opt_evtListenerOpts != null && opt_evtListenerOpts.capture);
    localElement.addEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
    return function() {
      var _localElement;
      (_localElement = localElement) == null ? void 0 : _localElement.removeEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
      localListener = null;
      localElement = null;
      wrapped = null;
    };
  }
  function detectEvtListenerOptsSupport() {
    if (optsSupported !== void 0) {
      return optsSupported;
    }
    optsSupported = false;
    try {
      var options = {
        get capture() {
          optsSupported = true;
        }
      };
      self.addEventListener("test-options", null, options);
      self.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return optsSupported;
  }

  // src/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }

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

  // src/viewport-observer.js
  function createViewportObserver(ioCallback, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, needsRootBounds = _opts.needsRootBounds, threshold = _opts.threshold;
    var root = isIframed(win) && needsRootBounds ? win.document : void 0;
    return new win.IntersectionObserver(ioCallback, {
      threshold,
      root
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();

  // src/utils/intersection.js
  var intersectionDeferreds;
  var intersectionObservers;
  function getInOb(win) {
    if (!intersectionDeferreds) {
      intersectionDeferreds = new WeakMap();
      intersectionObservers = new WeakMap();
    }
    var observer = intersectionObservers.get(win);
    if (!observer) {
      observer = createViewportObserver(function(entries) {
        var seen = new Set();
        for (var i = entries.length - 1; i >= 0; i--) {
          var target = entries[i].target;
          if (seen.has(target)) {
            continue;
          }
          seen.add(target);
          observer.unobserve(target);
          intersectionDeferreds.get(target).resolve(entries[i]);
          intersectionDeferreds.delete(target);
        }
      }, win, {
        needsRootBounds: true
      });
      intersectionObservers.set(win, observer);
    }
    return observer;
  }
  function measureIntersection(el) {
    if (intersectionDeferreds && intersectionDeferreds.has(el)) {
      return intersectionDeferreds.get(el).promise;
    }
    var inOb = getInOb(toWin(el.ownerDocument.defaultView));
    inOb.observe(el);
    var deferred = new Deferred();
    intersectionDeferreds.set(el, deferred);
    return deferred.promise;
  }

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }
  function tryParseJson(json, opt_onFailed) {
    try {
      return parseJson(json);
    } catch (e) {
      opt_onFailed == null ? void 0 : opt_onFailed(e);
      return null;
    }
  }

  // extensions/amp-iframely/0.1/amp-iframely.js
  function _classCallCheck2(instance, Constructor) {
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
  var TAG = "amp-iframely";
  var AmpIframely = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpIframely2, _AMP$BaseElement);
    var _super = _createSuper(AmpIframely2);
    function AmpIframely2(element) {
      var _this;
      _classCallCheck2(this, AmpIframely2);
      _this = _super.call(this, element);
      _this.src_ = null;
      _this.iframe_ = null;
      _this.widgetId_ = null;
      _this.base_ = null;
      _this.url_ = null;
      _this.key_ = null;
      _this.options_ = null;
      return _this;
    }
    _createClass(AmpIframely2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.widgetId_ = this.element.getAttribute("data-id");
        this.url_ = this.element.getAttribute("data-url");
        this.key_ = this.element.getAttribute("data-key");
        this.options_ = this.parseOptions_();
        var domain = "cdn.iframe.ly";
        var requestedDomain = this.element.getAttribute("data-domain");
        if (requestedDomain && this.isValidDomain_(requestedDomain)) {
          domain = requestedDomain;
        }
        this.base_ = "https://" + domain + "/";
        this.parseAttributes_();
      }
    }, {
      key: "preconnectCallback",
      value: function preconnectCallback(opt_onLayout) {
        if (this.preconnect && this.preconnect.url_) {
          this.preconnect.url(this.base_, opt_onLayout);
        }
      }
    }, {
      key: "createPlaceholderCallback",
      value: function createPlaceholderCallback() {
        var layout = this.getLayout();
        if (this.element.hasAttribute("data-img") || layout === "responsive" && !this.element.hasAttribute("resizable")) {
          var src = addParamsToUrl(this.constructSrc_("/thumbnail"), this.options_);
          var element = createElementWithAttributes(this.element.ownerDocument, "img", {
            "src": src,
            "loading": "lazy",
            "placeholder": ""
          });
          this.applyFillContent(element);
          return element;
        }
        return null;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this2 = this;
        this.iframe_ = this.element.ownerDocument.createElement("iframe");
        setStyle(this.iframe_, "border", "0px");
        this.iframe_.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-forms allow-presentation");
        this.src_ = addParamsToUrl(this.src_, this.options_);
        this.iframe_.src = this.src_;
        this.applyFillContent(this.iframe_);
        this.element.appendChild(this.iframe_);
        this.unlistener_ = listen(this.win, "message", function(event) {
          if (event.source === _this2.iframe_.contentWindow) {
            _this2.handleEvent_(event);
          }
        });
        return this.loadPromise(this.iframe_);
      }
    }, {
      key: "handleEvent_",
      value: function handleEvent_(event) {
        var _this3 = this;
        var data = tryParseJson(getData(event));
        if (!data) {
          return;
        }
        if (data.method === "resize" && data.height > 50) {
          this.attemptChangeHeight(data["height"]).catch(function() {
          });
        } else if (data.method === "setIframelyEmbedData") {
          var media = data["data"]["media"] || null;
          if (media && media["aspect-ratio"]) {
            var intersection = measureIntersection(this.element);
            intersection.then(function(box) {
              if (media["padding-bottom"]) {
                var height = box.boundingClientRect.width / media["aspect-ratio"] + media["padding-bottom"];
                _this3.attemptChangeHeight(Math.round(height)).catch(function() {
                });
              } else {
                var _height = box.boundingClientRect.width / media["aspect-ratio"];
                if (Math.abs(box.boundingClientRect.height - _height) > 1) {
                  _this3.attemptChangeHeight(Math.round(_height)).catch(function() {
                  });
                }
              }
            });
          }
        }
        if (data.method === "cancelWidget") {
          this.attemptCollapse().catch(function() {
          });
        }
      }
    }, {
      key: "constructSrc_",
      value: function constructSrc_(slug) {
        if (this.widgetId_) {
          return "" + this.base_ + this.widgetId_ + (slug !== "/iframe" ? slug : "") + "?amp=1";
        } else {
          return addParamsToUrl(this.base_ + "api" + slug, {
            "url": this.url_,
            "key": this.key_,
            "amp": "1"
          });
        }
      }
    }, {
      key: "parseAttributes_",
      value: function parseAttributes_() {
        userAssert(this.element.getAttribute("data-id") || this.element.getAttribute("data-url"), '<%s> requires either "data-id" or a pair of "data-url" and "data-key" attributes for %s', TAG, this.element);
        if (!this.widgetId_) {
          if (this.url_) {
            userAssert(this.key_, "Iframely data-key must also be set when you specify data-url parameter at <%s> %s", TAG, this.element);
          }
          if (this.key_) {
            userAssert(this.url_, "Iframely data-url must also be set when you specify data-key parameter at <%s> %s", TAG, this.element);
          }
          if (this.key_ || this.url_) {
            userAssert(!this.widgetId_, "Iframely data-id should not be set when there is already a pair of data-url and data-key for <%s> %s", TAG, this.element);
          }
        }
        if (this.widgetId_ && this.url_ || this.widgetId_ && this.key_) {
          userAssert(!this.widgetId_, "Only one way of setting either data-id or data-url and data-key supported for <%s> %s", TAG, this.element);
        }
        this.src_ = this.constructSrc_("/iframe");
      }
    }, {
      key: "parseOptions_",
      value: function parseOptions_() {
        return omit(this.element.dataset, ["id", "domain", "key", "url", "img"]);
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        if (this.iframe_) {
          removeElement(this.iframe_);
          this.iframe_ = null;
        }
        if (this.unlisten_) {
          this.unlisten_();
          this.unlisten_ = null;
        }
        return true;
      }
    }, {
      key: "isValidDomain_",
      value: function isValidDomain_(domainName) {
        var allowedDomains = [/^(?:[^\.\/]+\.)?iframe\.ly$/i, /^if\-cdn\.com$/i, /^iframely\.net$/i, /^oembed\.vice\.com$/i, /^iframe\.nbcnews\.com$/i];
        return allowedDomains.reduce(function(allowed, re) {
          return allowed || re.test(domainName);
        }, false);
      }
    }]);
    return AmpIframely2;
  }(AMP.BaseElement);
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerElement(TAG, AmpIframely);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-iframely-0.1.max.js.map
