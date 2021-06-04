(self.AMP=self.AMP||[]).push({n:"amp-image-lightbox",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // src/core/data-structures/promise.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var resolved;
  function resolvedPromise() {
    if (resolved) {
      return resolved;
    }
    resolved = Promise.resolve(void 0);
    return resolved;
  }
  var Deferred = function Deferred2() {
    var _this = this;
    _classCallCheck(this, Deferred2);
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };

  // src/core/types/array.js
  var isArray = Array.isArray;
  function remove(array, shouldRemove) {
    var removed = [];
    var index = 0;
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      if (shouldRemove(item, i, array)) {
        removed.push(item);
      } else {
        if (index < i) {
          array[index] = item;
        }
        index++;
      }
    }
    if (index < array.length) {
      array.length = index;
    }
    return removed;
  }
  function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  }
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  // src/core/types/string/index.js
  function includes(string, substring, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + substring.length > string.length) {
      return false;
    }
    return string.indexOf(substring, start) !== -1;
  }
  function isString(s) {
    return typeof s == "string";
  }

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
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  function elementStringOrPassThru(val) {
    if (isElement(val)) {
      val = val;
      return val.tagName.toLowerCase() + (val.id ? "#" + val.id : "");
    }
    return val;
  }

  // src/core/assert/base.js
  function assert(sentinel, shouldBeTruthy, opt_message, var_args) {
    if (opt_message === void 0) {
      opt_message = "Assertion failed";
    }
    if (shouldBeTruthy) {
      return shouldBeTruthy;
    }
    if (sentinel && !includes(opt_message, sentinel)) {
      opt_message += sentinel;
    }
    var i = 3;
    var splitMessage = opt_message.split("%s");
    var message = splitMessage.shift();
    var messageArray = [message];
    while (splitMessage.length) {
      var subValue = arguments[i++];
      var nextConstant = splitMessage.shift();
      message += elementStringOrPassThru(subValue) + nextConstant;
      messageArray.push(subValue, nextConstant.trim());
    }
    var error = new Error(message);
    error.messageArray = remove(messageArray, function(x) {
      return x !== "";
    });
    self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(error);
    throw error;
  }

  // src/internal-version.js
  function internalRuntimeVersion() {
    return "2106040012000";
  }

  // src/core/types/string/url.js
  var QUERY_STRING_REGEX = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
  function tryDecodeUriComponent(component, fallback) {
    if (fallback === void 0) {
      fallback = "";
    }
    try {
      return decodeURIComponent(component);
    } catch (e) {
      return fallback;
    }
  }
  function parseQueryString(queryString) {
    var params = map();
    if (!queryString) {
      return params;
    }
    var match;
    while (match = QUERY_STRING_REGEX.exec(queryString)) {
      var name = tryDecodeUriComponent(match[1], match[1]);
      var value = match[2] ? tryDecodeUriComponent(match[2].replace(/\+/g, " "), match[2]) : "";
      params[name] = value;
    }
    return params;
  }

  // src/mode.js
  var rtvVersion = "";
  function getMode(opt_win) {
    var win = opt_win || self;
    if (win.__AMP_MODE) {
      return win.__AMP_MODE;
    }
    return win.__AMP_MODE = getMode_(win);
  }
  function getMode_(win) {
    var AMP_CONFIG = self.AMP_CONFIG || {};
    var IS_FORTESTING = true;
    var IS_MINIFIED2 = false;
    var runningTests = IS_FORTESTING && !!(AMP_CONFIG.test || win.__AMP_TEST || win["__karma__"]);
    var isLocalDev = IS_FORTESTING && (!!AMP_CONFIG.localDev || runningTests);
    var hashQuery = parseQueryString(win.location["originalHash"] || win.location.hash);
    if (!rtvVersion) {
      rtvVersion = getRtvVersion(win);
    }
    return {
      localDev: isLocalDev,
      development: isModeDevelopment(win),
      examiner: hashQuery["development"] == "2",
      esm: false,
      geoOverride: hashQuery["amp-geo"],
      minified: IS_MINIFIED2,
      test: runningTests,
      log: hashQuery["log"],
      version: internalRuntimeVersion(),
      rtvVersion
    };
  }
  function getRtvVersion(win) {
    if (win.AMP_CONFIG && win.AMP_CONFIG.v) {
      return win.AMP_CONFIG.v;
    }
    return "01" + internalRuntimeVersion();
  }
  function isModeDevelopment(win) {
    var hashQuery = parseQueryString(win.location["originalHash"] || win.location.hash);
    return !!(["1", "actions", "amp", "amp4ads", "amp4email"].includes(hashQuery["development"]) || win.AMP_DEV_MODE);
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
  function dev() {
    if (logs.dev) {
      return logs.dev;
    }
    if (!logConstructor) {
      throw new Error("failed to call initLogConstructor");
    }
    return logs.dev = new logConstructor(self, function(logNum) {
      if (logNum >= 3) {
        return LogLevel.FINE;
      }
      if (logNum >= 2) {
        return LogLevel.INFO;
      }
      return LogLevel.OFF;
    });
  }
  function isFromEmbed(win, opt_element) {
    if (!opt_element) {
      return false;
    }
    return opt_element.ownerDocument.defaultView != win;
  }
  function devAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (getMode().minified) {
      return shouldBeTrueish;
    }
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
    return dev().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/minified-mode.js
  var IS_MINIFIED = false;
  function isMinifiedMode() {
    return IS_MINIFIED;
  }

  // src/core/assert/dev.js
  function devAssertDceCheck() {
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
  }
  function devAssert2(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinifiedMode()) {
      return shouldBeTruthy;
    }
    devAssertDceCheck();
    return assert("", shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/assert/user.js
  function userAssert2(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return assert(USER_ERROR_SENTINEL, shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/dom/css-selectors.js
  var scopeSelectorSupported;
  function isScopeSelectorSupported(el) {
    if (scopeSelectorSupported !== void 0) {
      return scopeSelectorSupported;
    }
    return scopeSelectorSupported = testScopeSelector(el);
  }
  function testScopeSelector(el) {
    try {
      var doc = el.ownerDocument;
      var testElement = doc.createElement("div");
      var testChild = doc.createElement("div");
      testElement.appendChild(testChild);
      return testElement.querySelector(":scope div") === testChild;
    } catch (e) {
      return false;
    }
  }
  function prependSelectorsWith(selector, distribute) {
    return selector.replace(/^|,/g, "$&" + distribute + " ");
  }

  // src/core/dom/query.js
  function assertIsName(name) {
    devAssert2(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function scopedQuerySelectionFallback(root, selector) {
    var unique = "i-amphtml-scoped";
    root.classList.add(unique);
    var scopedSelector = prependSelectorsWith(selector, "." + unique);
    var elements = root.querySelectorAll(scopedSelector);
    root.classList.remove(unique);
    return elements;
  }
  function scopedQuerySelector(root, selector) {
    if (isScopeSelectorSupported(root)) {
      return root.querySelector(prependSelectorsWith(selector, ":scope"));
    }
    var fallbackResult = scopedQuerySelectionFallback(root, selector);
    return fallbackResult[0] === void 0 ? null : fallbackResult[0];
  }
  function matches(el, selector) {
    var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
    if (matcher) {
      return matcher.call(el, selector);
    }
    return false;
  }
  function closest(element, callback, opt_stopAt) {
    for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
      if (callback(el)) {
        return el;
      }
    }
    return null;
  }
  function closestAncestorElementBySelector(element, selector) {
    return element.closest ? element.closest(selector) : closest(element, function(el) {
      return matches(el, selector);
    });
  }
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
  }
  function elementByTag(element, tagName) {
    assertIsName(tagName);
    return element.querySelector(tagName);
  }

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }

  // src/dom.js
  function waitForChild(parent, checkFunc, callback) {
    if (checkFunc(parent)) {
      callback();
      return;
    }
    var win = toWin(parent.ownerDocument.defaultView);
    if (win.MutationObserver) {
      var observer = new win.MutationObserver(function() {
        if (checkFunc(parent)) {
          observer.disconnect();
          callback();
        }
      });
      observer.observe(parent, {
        childList: true
      });
    } else {
      var interval = win.setInterval(function() {
        if (checkFunc(parent)) {
          win.clearInterval(interval);
          callback();
        }
      }, 5);
    }
  }
  function waitForBodyOpen(doc, callback) {
    waitForChild(doc.documentElement, function() {
      return !!doc.body;
    }, callback);
  }
  function waitForBodyOpenPromise(doc) {
    return new Promise(function(resolve) {
      return waitForBodyOpen(doc, resolve);
    });
  }
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  function copyChildren(from, to) {
    var frag = to.ownerDocument.createDocumentFragment();
    for (var n = from.firstChild; n; n = n.nextSibling) {
      frag.appendChild(n.cloneNode(true));
    }
    to.appendChild(frag);
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
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
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
  }
  function assertNotDisplay(style) {
    if (style === "display") {
      dev().error("STYLE", "`display` style detected. You must use toggle instead.");
    }
    return style;
  }
  function toggle(element, opt_display) {
    if (opt_display === void 0) {
      opt_display = element.hasAttribute("hidden");
    }
    if (opt_display) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "");
    }
  }
  function px(value) {
    return value + "px";
  }
  function translate(x, opt_y) {
    if (typeof x == "number") {
      x = px(x);
    }
    if (opt_y === void 0) {
      return "translate(" + x + ")";
    }
    if (typeof opt_y == "number") {
      opt_y = px(opt_y);
    }
    return "translate(" + x + ", " + opt_y + ")";
  }
  function scale(value) {
    return "scale(" + value + ")";
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/core/data-structures/curve.js
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
  function bezierCurve(x1, y1, x2, y2) {
    return function(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, x1, y1, x2, y2, 1, 1);
    };
  }
  var Bezier = /* @__PURE__ */ function() {
    function Bezier2() {
      _classCallCheck2(this, Bezier2);
    }
    _createClass(Bezier2, null, [{
      key: "solveYValueFromXValue",
      value: function solveYValueFromXValue(xVal, x0, y0, x1, y1, x2, y2, x3, y3) {
        return Bezier2.getPointY_(Bezier2.solvePositionFromXValue_(xVal, x0, x1, x2, x3), y0, y1, y2, y3);
      }
    }, {
      key: "solvePositionFromXValue_",
      value: function solvePositionFromXValue_(xVal, x0, x1, x2, x3) {
        var epsilon = 1e-6;
        var t = (xVal - x0) / (x3 - x0);
        if (t <= 0) {
          return 0;
        } else if (t >= 1) {
          return 1;
        }
        var tMin = 0;
        var tMax = 1;
        var value = 0;
        for (var i = 0; i < 8; i++) {
          value = Bezier2.getPointX_(t, x0, x1, x2, x3);
          var derivative = (Bezier2.getPointX_(t + epsilon, x0, x1, x2, x3) - value) / epsilon;
          if (Math.abs(value - xVal) < epsilon) {
            return t;
          } else if (Math.abs(derivative) < epsilon) {
            break;
          } else {
            if (value < xVal) {
              tMin = t;
            } else {
              tMax = t;
            }
            t -= (value - xVal) / derivative;
          }
        }
        for (var _i = 0; Math.abs(value - xVal) > epsilon && _i < 8; _i++) {
          if (value < xVal) {
            tMin = t;
            t = (t + tMax) / 2;
          } else {
            tMax = t;
            t = (t + tMin) / 2;
          }
          value = Bezier2.getPointX_(t, x0, x1, x2, x3);
        }
        return t;
      }
    }, {
      key: "getPointX_",
      value: function getPointX_(t, x0, x1, x2, x3) {
        if (t == 0) {
          return x0;
        } else if (t == 1) {
          return x3;
        }
        var ix0 = Bezier2.lerp_(x0, x1, t);
        var ix1 = Bezier2.lerp_(x1, x2, t);
        var ix2 = Bezier2.lerp_(x2, x3, t);
        ix0 = Bezier2.lerp_(ix0, ix1, t);
        ix1 = Bezier2.lerp_(ix1, ix2, t);
        return Bezier2.lerp_(ix0, ix1, t);
      }
    }, {
      key: "getPointY_",
      value: function getPointY_(t, y0, y1, y2, y3) {
        if (t == 0) {
          return y0;
        } else if (t == 1) {
          return y3;
        }
        var iy0 = Bezier2.lerp_(y0, y1, t);
        var iy1 = Bezier2.lerp_(y1, y2, t);
        var iy2 = Bezier2.lerp_(y2, y3, t);
        iy0 = Bezier2.lerp_(iy0, iy1, t);
        iy1 = Bezier2.lerp_(iy1, iy2, t);
        return Bezier2.lerp_(iy0, iy1, t);
      }
    }, {
      key: "lerp_",
      value: function lerp_(a, b, x) {
        return a + x * (b - a);
      }
    }]);
    return Bezier2;
  }();
  var Curves = {
    LINEAR: function LINEAR(xVal) {
      return xVal;
    },
    EASE: function EASE(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.25, 0.1, 0.25, 1, 1, 1);
    },
    EASE_IN: function EASE_IN(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.42, 0, 1, 1, 1, 1);
    },
    EASE_OUT: function EASE_OUT(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0, 0, 0.58, 1, 1, 1);
    },
    EASE_IN_OUT: function EASE_IN_OUT(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, 0.42, 0, 0.58, 1, 1, 1);
    }
  };
  var NAME_MAP = {
    "linear": Curves.LINEAR,
    "ease": Curves.EASE,
    "ease-in": Curves.EASE_IN,
    "ease-out": Curves.EASE_OUT,
    "ease-in-out": Curves.EASE_IN_OUT
  };
  function getCurve(curve) {
    if (!curve) {
      return null;
    }
    if (isString(curve)) {
      curve = curve;
      if (curve.indexOf("cubic-bezier") != -1) {
        var match = curve.match(/cubic-bezier\((.+)\)/);
        if (match) {
          var values = match[1].split(",").map(parseFloat);
          if (values.length == 4) {
            for (var i = 0; i < 4; i++) {
              if (isNaN(values[i])) {
                return null;
              }
            }
            return bezierCurve(values[0], values[1], values[2], values[3]);
          }
        }
        return null;
      }
      return NAME_MAP[curve];
    }
    return curve;
  }

  // src/transition.js
  function concat(transitions, opt_delimiter) {
    if (opt_delimiter === void 0) {
      opt_delimiter = " ";
    }
    return function(time, complete) {
      var results = [];
      for (var i = 0; i < transitions.length; i++) {
        var tr2 = transitions[i];
        var result = tr2(time, complete);
        if (typeof result == "string") {
          results.push(result);
        }
      }
      return results.join(opt_delimiter);
    };
  }
  function setStyles2(element, styles) {
    return function(time, complete) {
      for (var k in styles) {
        setStyle(element, assertNotDisplay(k), styles[k](time, complete));
      }
    };
  }
  function numeric(start, end) {
    return function(time) {
      return start + (end - start) * time;
    };
  }
  function translate2(transitionX, opt_transitionY) {
    return function(time) {
      var x = transitionX(time);
      if (typeof x == "number") {
        x = px(x);
      }
      if (!opt_transitionY) {
        return "translate(" + x + ")";
      }
      var y = opt_transitionY(time);
      if (typeof y == "number") {
        y = px(y);
      }
      return "translate(" + x + "," + y + ")";
    };
  }
  function scale2(transition) {
    return function(time) {
      return "scale(" + transition(time) + ")";
    };
  }

  // src/service.js
  function getService(win, id) {
    win = getTopWindow(win);
    return getServiceInternal(win, id);
  }
  function getServiceInEmbedWin(win, id) {
    return getServiceInternal(win, id);
  }
  function getServicePromise(win, id) {
    return getServicePromiseInternal(win, id);
  }
  function getExistingServiceOrNull(win, id) {
    win = getTopWindow(win);
    if (isServiceRegistered(win, id)) {
      return getServiceInternal(win, id);
    } else {
      return null;
    }
  }
  function getServicePromiseOrNull(win, id) {
    return getServicePromiseOrNullInternal(win, id);
  }
  function getServiceForDoc(elementOrAmpDoc, id) {
    var ampdoc = getAmpdoc(elementOrAmpDoc);
    var holder = getAmpdocServiceHolder(ampdoc);
    return getServiceInternal(holder, id);
  }
  function getServiceForDocOrNull(elementOrAmpDoc, id) {
    var ampdoc = getAmpdoc(elementOrAmpDoc);
    var holder = getAmpdocServiceHolder(ampdoc);
    if (isServiceRegistered(holder, id)) {
      return getServiceInternal(holder, id);
    } else {
      return null;
    }
  }
  function getServicePromiseForDoc(elementOrAmpDoc, id) {
    return getServicePromiseInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
  }
  function getServicePromiseOrNullForDoc(elementOrAmpDoc, id) {
    return getServicePromiseOrNullInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
  }
  function getTopWindow(win) {
    return win.__AMP_TOP || (win.__AMP_TOP = win);
  }
  function getAmpdoc(nodeOrDoc) {
    if (nodeOrDoc.nodeType) {
      var win = toWin((nodeOrDoc.ownerDocument || nodeOrDoc).defaultView);
      return getAmpdocService(win).getAmpDoc(nodeOrDoc);
    }
    return nodeOrDoc;
  }
  function getAmpdocServiceHolder(nodeOrDoc) {
    var ampdoc = getAmpdoc(nodeOrDoc);
    return ampdoc.isSingleDoc() ? ampdoc.win : ampdoc;
  }
  function getAmpdocService(win) {
    return getService(win, "ampdoc");
  }
  function getServiceInternal(holder, id) {
    devAssert(isServiceRegistered(holder, id), "Expected service " + id + " to be registered");
    var services = getServices(holder);
    var s = services[id];
    if (!s.obj) {
      devAssert(s.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert(s.context, "Service " + id + " registered without context.");
      s.obj = new s.ctor(s.context);
      devAssert(s.obj, "Service " + id + " constructed to null.");
      s.context = null;
      if (s.resolve) {
        s.resolve(s.obj);
      }
    }
    return s.obj;
  }
  function getServicePromiseInternal(holder, id) {
    var cached = getServicePromiseOrNullInternal(holder, id);
    if (cached) {
      return cached;
    }
    var services = getServices(holder);
    services[id] = emptyServiceHolderWithPromise();
    return services[id].promise;
  }
  function getServicePromiseOrNullInternal(holder, id) {
    var services = getServices(holder);
    var s = services[id];
    if (s) {
      if (s.promise) {
        return s.promise;
      } else {
        getServiceInternal(holder, id);
        return s.promise = Promise.resolve(s.obj);
      }
    }
    return null;
  }
  function getServices(holder) {
    var services = holder.__AMP_SERVICES;
    if (!services) {
      services = holder.__AMP_SERVICES = {};
    }
    return services;
  }
  function isServiceRegistered(holder, id) {
    var service = holder.__AMP_SERVICES && holder.__AMP_SERVICES[id];
    return !!(service && service.ctor);
  }
  function emptyServiceHolderWithPromise() {
    var deferred = new Deferred();
    var promise = deferred.promise, reject = deferred.reject, resolve = deferred.resolve;
    promise.catch(function() {
    });
    return {
      obj: null,
      promise,
      resolve,
      reject,
      context: null,
      ctor: null
    };
  }

  // src/service/extension-script.js
  function parseExtensionUrl(scriptUrl) {
    if (!scriptUrl) {
      return null;
    }
    var matches2 = scriptUrl.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
    var extensionId = matches2 ? matches2[2] : void 0;
    var extensionVersion = matches2 ? matches2[3] : void 0;
    if (!extensionId || !extensionVersion) {
      return null;
    }
    return {
      extensionId,
      extensionVersion
    };
  }
  function extensionScriptsInNode(head) {
    if (!head) {
      return [];
    }
    var list = head.querySelectorAll("script[custom-element],script[custom-template]");
    var scripts = [];
    for (var i = 0; i < list.length; i++) {
      var script = list[i];
      var extensionId = script.getAttribute("custom-element") || script.getAttribute("custom-template");
      var urlParts = parseExtensionUrl(script.src);
      if (extensionId && urlParts) {
        scripts.push({
          extensionId,
          extensionVersion: urlParts.extensionVersion
        });
      }
    }
    return scripts;
  }
  function extensionScriptInNode(win, id, version) {
    return extensionScriptsInNode(win.document.head).some(function(_ref) {
      var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
      return id == extensionId && version == extensionVersion;
    });
  }

  // src/element-service.js
  function getElementServiceIfAvailable(win, id, extension, version, opt_element) {
    var s = getServicePromiseOrNull(win, id);
    if (s) {
      return s;
    }
    return getElementServicePromiseOrNull(win, id, extension, version, opt_element);
  }
  function getElementServiceForDoc(element, id, extension, opt_element) {
    return getElementServiceIfAvailableForDoc(element, id, extension, opt_element).then(function(service) {
      return assertService(service, id, extension);
    });
  }
  function getElementServiceIfAvailableForDoc(element, id, extension, opt_element) {
    var s = getServicePromiseOrNullForDoc(element, id);
    if (s) {
      return s;
    }
    var ampdoc = getAmpdoc(element);
    return ampdoc.whenExtensionsKnown().then(function() {
      var version = ampdoc.getExtensionVersion(extension);
      if (!version) {
        return null;
      }
      var extensions = getService(ampdoc.win, "extensions");
      return extensions.waitForExtension(extension, version);
    }).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNullForDoc(element, id);
      }
      return getServicePromiseForDoc(element, id);
    });
  }
  function getElementServiceIfAvailableForDocInEmbedScope(element, id, extension) {
    var s = getServiceForDocOrNull(element, id);
    if (s) {
      return Promise.resolve(s);
    }
    return getElementServiceIfAvailableForDoc(element, id, extension);
  }
  function assertService(service, id, extension) {
    return userAssert(service, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", id, extension, extension, extension);
  }
  function getElementServicePromiseOrNull(win, id, extension, version, opt_element) {
    return waitForBodyOpenPromise(win.document).then(function() {
      var extensions = getService(win, "extensions");
      if (!extensionScriptInNode(extensions.win, extension, version)) {
        return null;
      }
      return extensions.waitForExtension(extension, version);
    }).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNull(win, id);
      }
      return getServicePromise(win, id);
    });
  }

  // src/services.js
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  var Services = /* @__PURE__ */ function() {
    function Services2() {
      _classCallCheck3(this, Services2);
    }
    _createClass2(Services2, null, [{
      key: "accessServiceForDoc",
      value: function accessServiceForDoc(element) {
        return getElementServiceForDoc(element, "access", "amp-access");
      }
    }, {
      key: "accessServiceForDocOrNull",
      value: function accessServiceForDocOrNull(element) {
        return getElementServiceIfAvailableForDoc(element, "access", "amp-access");
      }
    }, {
      key: "subscriptionsServiceForDoc",
      value: function subscriptionsServiceForDoc(element) {
        return getElementServiceForDoc(element, "subscriptions", "amp-subscriptions");
      }
    }, {
      key: "subscriptionsServiceForDocOrNull",
      value: function subscriptionsServiceForDocOrNull(element) {
        return getElementServiceIfAvailableForDoc(element, "subscriptions", "amp-subscriptions");
      }
    }, {
      key: "actionServiceForDoc",
      value: function actionServiceForDoc(element) {
        return getServiceForDocOrNull(element, "action");
      }
    }, {
      key: "standardActionsForDoc",
      value: function standardActionsForDoc(element) {
        return getServiceForDocOrNull(element, "standard-actions");
      }
    }, {
      key: "activityForDoc",
      value: function activityForDoc(element) {
        return getElementServiceForDoc(element, "activity", "amp-analytics");
      }
    }, {
      key: "ampdocServiceFor",
      value: function ampdocServiceFor(window) {
        return getService(window, "ampdoc");
      }
    }, {
      key: "ampdoc",
      value: function ampdoc(nodeOrAmpDoc) {
        return getAmpdoc(nodeOrAmpDoc);
      }
    }, {
      key: "analyticsForDoc",
      value: function analyticsForDoc(element, loadAnalytics) {
        if (loadAnalytics === void 0) {
          loadAnalytics = false;
        }
        if (loadAnalytics) {
          var ampdoc = getAmpdoc(element);
          Services2.extensionsFor(ampdoc.win).installExtensionForDoc(ampdoc, "amp-analytics");
        }
        return getElementServiceForDoc(element, "amp-analytics-instrumentation", "amp-analytics");
      }
    }, {
      key: "analyticsForDocOrNull",
      value: function analyticsForDocOrNull(element) {
        return getElementServiceIfAvailableForDoc(element, "amp-analytics-instrumentation", "amp-analytics");
      }
    }, {
      key: "batchedXhrFor",
      value: function batchedXhrFor(window) {
        return getService(window, "batched-xhr");
      }
    }, {
      key: "bindForDocOrNull",
      value: function bindForDocOrNull(element) {
        return getElementServiceIfAvailableForDocInEmbedScope(element, "bind", "amp-bind");
      }
    }, {
      key: "scriptForDocOrNull",
      value: function scriptForDocOrNull(element) {
        return getElementServiceIfAvailableForDocInEmbedScope(element, "amp-script", "amp-script");
      }
    }, {
      key: "cidForDoc",
      value: function cidForDoc(elementOrAmpDoc) {
        return getServicePromiseForDoc(elementOrAmpDoc, "cid");
      }
    }, {
      key: "navigationForDoc",
      value: function navigationForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "navigation");
      }
    }, {
      key: "loaderServiceForDoc",
      value: function loaderServiceForDoc(element) {
        return getElementServiceForDoc(element, "loader", "amp-loader");
      }
    }, {
      key: "standaloneServiceForDoc",
      value: function standaloneServiceForDoc(element) {
        return getElementServiceForDoc(element, "standalone", "amp-standalone");
      }
    }, {
      key: "cryptoFor",
      value: function cryptoFor(window) {
        return getService(window, "crypto");
      }
    }, {
      key: "documentInfoForDoc",
      value: function documentInfoForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "documentInfo").get();
      }
    }, {
      key: "extensionsFor",
      value: function extensionsFor(window) {
        return getService(window, "extensions");
      }
    }, {
      key: "formSubmitForDoc",
      value: function formSubmitForDoc(elementOrAmpDoc) {
        return getServicePromiseForDoc(elementOrAmpDoc, "form-submit-service");
      }
    }, {
      key: "hiddenObserverForDoc",
      value: function hiddenObserverForDoc(element) {
        return getServiceForDocOrNull(element, "hidden-observer");
      }
    }, {
      key: "historyForDoc",
      value: function historyForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "history");
      }
    }, {
      key: "inputFor",
      value: function inputFor(win) {
        return getService(win, "input");
      }
    }, {
      key: "inputmaskServiceForDocOrNull",
      value: function inputmaskServiceForDocOrNull(element) {
        return getElementServiceIfAvailableForDoc(element, "inputmask", "amp-inputmask");
      }
    }, {
      key: "loadingIndicatorOrNull",
      value: function loadingIndicatorOrNull(elementOrAmpDoc) {
        return getServiceForDocOrNull(elementOrAmpDoc, "loadingIndicator");
      }
    }, {
      key: "nextPageServiceForDoc",
      value: function nextPageServiceForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "next-page");
      }
    }, {
      key: "mutatorForDoc",
      value: function mutatorForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "mutator");
      }
    }, {
      key: "ownersForDoc",
      value: function ownersForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "owners");
      }
    }, {
      key: "performanceFor",
      value: function performanceFor(window) {
        return getService(window, "performance");
      }
    }, {
      key: "performanceForOrNull",
      value: function performanceForOrNull(window) {
        return getExistingServiceOrNull(window, "performance");
      }
    }, {
      key: "platformFor",
      value: function platformFor(window) {
        return getService(window, "platform");
      }
    }, {
      key: "positionObserverForDoc",
      value: function positionObserverForDoc(element) {
        return getServiceForDoc(element, "position-observer");
      }
    }, {
      key: "preconnectFor",
      value: function preconnectFor(window) {
        return getService(window, "preconnect");
      }
    }, {
      key: "resourcesForDoc",
      value: function resourcesForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "resources");
      }
    }, {
      key: "resourcesPromiseForDoc",
      value: function resourcesPromiseForDoc(elementOrAmpDoc) {
        return getServicePromiseForDoc(elementOrAmpDoc, "resources");
      }
    }, {
      key: "storyVariableServiceForOrNull",
      value: function storyVariableServiceForOrNull(win) {
        return getElementServiceIfAvailable(win, "story-variable", "amp-story", "1.0");
      }
    }, {
      key: "storyVariableService",
      value: function storyVariableService(win) {
        return getExistingServiceOrNull(win, "story-variable");
      }
    }, {
      key: "storyStoreServiceForOrNull",
      value: function storyStoreServiceForOrNull(win) {
        return getElementServiceIfAvailable(win, "story-store", "amp-story", "1.0");
      }
    }, {
      key: "storyStoreService",
      value: function storyStoreService(win) {
        return getExistingServiceOrNull(win, "story-store");
      }
    }, {
      key: "storyMediaQueryService",
      value: function storyMediaQueryService(win) {
        return getExistingServiceOrNull(win, "story-media-query");
      }
    }, {
      key: "storyRequestServiceForOrNull",
      value: function storyRequestServiceForOrNull(win) {
        return getElementServiceIfAvailable(win, "story-request", "amp-story", "1.0");
      }
    }, {
      key: "storyRequestService",
      value: function storyRequestService(win) {
        return getExistingServiceOrNull(win, "story-request");
      }
    }, {
      key: "mediaPerformanceMetricsService",
      value: function mediaPerformanceMetricsService(win) {
        return getExistingServiceOrNull(win, "media-performance-metrics");
      }
    }, {
      key: "localizationServiceForOrNull",
      value: function localizationServiceForOrNull(el) {
        return getServicePromiseForDoc(el, "localization");
      }
    }, {
      key: "localizationForDoc",
      value: function localizationForDoc(element) {
        return getServiceForDocOrNull(element, "localization");
      }
    }, {
      key: "storyAnalyticsServiceForOrNull",
      value: function storyAnalyticsServiceForOrNull(win) {
        return getElementServiceIfAvailable(win, "story-analytics", "amp-story", "1.0", true);
      }
    }, {
      key: "storyAnalyticsService",
      value: function storyAnalyticsService(win) {
        return getExistingServiceOrNull(win, "story-analytics");
      }
    }, {
      key: "webAnimationServiceFor",
      value: function webAnimationServiceFor(element) {
        return getElementServiceForDoc(element, "web-animation", "amp-animation");
      }
    }, {
      key: "realTimeConfigForDoc",
      value: function realTimeConfigForDoc(elementOrAmpDoc) {
        return getServicePromiseForDoc(elementOrAmpDoc, "real-time-config");
      }
    }, {
      key: "storageForDoc",
      value: function storageForDoc(elementOrAmpDoc) {
        return getServicePromiseForDoc(elementOrAmpDoc, "storage");
      }
    }, {
      key: "storageForTopLevelDoc",
      value: function storageForTopLevelDoc(elementOrAmpDoc) {
        var thisAmpdoc = Services2.ampdoc(elementOrAmpDoc);
        var ampdocService = Services2.ampdocServiceFor(thisAmpdoc.win);
        var topAmpdoc = ampdocService.isSingleDoc() ? ampdocService.getSingleDoc() : null;
        var ampdoc = topAmpdoc && topAmpdoc.win == thisAmpdoc.win ? topAmpdoc : thisAmpdoc;
        return getServicePromiseForDoc(ampdoc, "storage");
      }
    }, {
      key: "templatesForDoc",
      value: function templatesForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "templates");
      }
    }, {
      key: "timerFor",
      value: function timerFor(window) {
        return getServiceInEmbedWin(window, "timer");
      }
    }, {
      key: "urlReplacementsForDoc",
      value: function urlReplacementsForDoc(element) {
        return getServiceForDocOrNull(element, "url-replace");
      }
    }, {
      key: "userNotificationManagerForDoc",
      value: function userNotificationManagerForDoc(element) {
        return getElementServiceForDoc(element, "userNotificationManager", "amp-user-notification");
      }
    }, {
      key: "consentPolicyServiceForDocOrNull",
      value: function consentPolicyServiceForDocOrNull(element) {
        return getElementServiceIfAvailableForDoc(element, "consentPolicyManager", "amp-consent");
      }
    }, {
      key: "geoForDocOrNull",
      value: function geoForDocOrNull(element) {
        return getElementServiceIfAvailableForDoc(element, "geo", "amp-geo", true);
      }
    }, {
      key: "urlForDoc",
      value: function urlForDoc(element) {
        return getServiceForDocOrNull(element, "url");
      }
    }, {
      key: "variantsForDocOrNull",
      value: function variantsForDocOrNull(element) {
        return getElementServiceIfAvailableForDoc(element, "variant", "amp-experiment", true);
      }
    }, {
      key: "videoManagerForDoc",
      value: function videoManagerForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "video-manager");
      }
    }, {
      key: "viewerForDoc",
      value: function viewerForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "viewer");
      }
    }, {
      key: "viewerPromiseForDoc",
      value: function viewerPromiseForDoc(elementOrAmpDoc) {
        return getServicePromiseForDoc(elementOrAmpDoc, "viewer");
      }
    }, {
      key: "vsyncFor",
      value: function vsyncFor(window) {
        return getService(window, "vsync");
      }
    }, {
      key: "viewportForDoc",
      value: function viewportForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "viewport");
      }
    }, {
      key: "xhrFor",
      value: function xhrFor(window) {
        return getService(window, "xhr");
      }
    }, {
      key: "assistjsFrameServiceForDoc",
      value: function assistjsFrameServiceForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "assistjs-frame-service");
      }
    }, {
      key: "assistjsConfigServiceForDoc",
      value: function assistjsConfigServiceForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "assistjs-config-service");
      }
    }, {
      key: "cacheUrlServicePromiseForDoc",
      value: function cacheUrlServicePromiseForDoc(elementOrAmpDoc) {
        return getServicePromiseForDoc(elementOrAmpDoc, "cache-url");
      }
    }]);
    return Services2;
  }();

  // src/animation.js
  function _classCallCheck4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    return Constructor;
  }
  var TAG_ = "Animation";
  var NOOP_CALLBACK = function NOOP_CALLBACK2() {
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(contextNode, opt_vsync) {
      _classCallCheck4(this, Animation2);
      this.contextNode_ = contextNode;
      this.vsync_ = opt_vsync || Services.vsyncFor(self);
      this.curve_ = null;
      this.segments_ = [];
    }
    _createClass3(Animation2, [{
      key: "setCurve",
      value: function setCurve(curve) {
        if (curve) {
          this.curve_ = getCurve(curve);
        }
        return this;
      }
    }, {
      key: "add",
      value: function add(delay, transition, duration, opt_curve) {
        this.segments_.push({
          delay,
          func: transition,
          duration,
          curve: getCurve(opt_curve)
        });
        return this;
      }
    }, {
      key: "start",
      value: function start(duration) {
        var player = new AnimationPlayer(this.vsync_, this.contextNode_, this.segments_, this.curve_, duration);
        return player;
      }
    }], [{
      key: "animate",
      value: function animate(contextNode, transition, duration, opt_curve) {
        return new Animation2(contextNode).setCurve(opt_curve).add(0, transition, 1).start(duration);
      }
    }]);
    return Animation2;
  }();
  var AnimationPlayer = /* @__PURE__ */ function() {
    function AnimationPlayer2(vsync, contextNode, segments, defaultCurve, duration) {
      _classCallCheck4(this, AnimationPlayer2);
      this.vsync_ = vsync;
      this.contextNode_ = contextNode;
      this.segments_ = [];
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        this.segments_.push({
          delay: segment.delay,
          func: segment.func,
          duration: segment.duration,
          curve: segment.curve || defaultCurve,
          started: false,
          completed: false
        });
      }
      this.duration_ = duration;
      this.startTime_ = Date.now();
      this.running_ = true;
      this.state_ = {};
      var deferred = new Deferred();
      this.promise_ = deferred.promise;
      this.resolve_ = deferred.resolve;
      this.reject_ = deferred.reject;
      this.task_ = this.vsync_.createAnimTask(this.contextNode_, {
        mutate: this.stepMutate_.bind(this)
      });
      if (this.vsync_.canAnimate(this.contextNode_)) {
        this.task_(this.state_);
      } else {
        dev().warn(TAG_, "cannot animate");
        this.complete_(false, 0);
      }
    }
    _createClass3(AnimationPlayer2, [{
      key: "then",
      value: function then(opt_resolve, opt_reject) {
        if (!opt_resolve && !opt_reject) {
          return this.promise_;
        }
        return this.promise_.then(opt_resolve, opt_reject);
      }
    }, {
      key: "thenAlways",
      value: function thenAlways(opt_callback) {
        var callback = opt_callback || NOOP_CALLBACK;
        return this.then(callback, callback);
      }
    }, {
      key: "halt",
      value: function halt(opt_dir) {
        this.complete_(false, opt_dir || 0);
      }
    }, {
      key: "complete_",
      value: function complete_(success, dir) {
        if (!this.running_) {
          return;
        }
        this.running_ = false;
        if (dir != 0) {
          if (this.segments_.length > 1) {
            this.segments_.sort(function(s1, s2) {
              return s1.delay + s1.duration - (s2.delay + s2.duration);
            });
          }
          try {
            if (dir > 0) {
              for (var i = 0; i < this.segments_.length; i++) {
                this.segments_[i].func(1, true);
              }
            } else {
              for (var _i = this.segments_.length - 1; _i >= 0; _i--) {
                this.segments_[_i].func(0, false);
              }
            }
          } catch (e) {
            dev().error(TAG_, "completion failed: " + e, e);
            success = false;
          }
        }
        if (success) {
          this.resolve_();
        } else {
          this.reject_();
        }
      }
    }, {
      key: "stepMutate_",
      value: function stepMutate_(unusedState) {
        if (!this.running_) {
          return;
        }
        var currentTime = Date.now();
        var normLinearTime = Math.min((currentTime - this.startTime_) / this.duration_, 1);
        for (var i = 0; i < this.segments_.length; i++) {
          var segment = this.segments_[i];
          if (!segment.started && normLinearTime >= segment.delay) {
            segment.started = true;
          }
        }
        for (var _i2 = 0; _i2 < this.segments_.length; _i2++) {
          var _segment = this.segments_[_i2];
          if (!_segment.started || _segment.completed) {
            continue;
          }
          this.mutateSegment_(_segment, normLinearTime);
        }
        if (normLinearTime == 1) {
          this.complete_(true, 0);
        } else {
          if (this.vsync_.canAnimate(this.contextNode_)) {
            this.task_(this.state_);
          } else {
            dev().warn(TAG_, "cancel animation");
            this.complete_(false, 0);
          }
        }
      }
    }, {
      key: "mutateSegment_",
      value: function mutateSegment_(segment, totalLinearTime) {
        var normLinearTime;
        var normTime;
        if (segment.duration > 0) {
          normLinearTime = Math.min((totalLinearTime - segment.delay) / segment.duration, 1);
          normTime = normLinearTime;
          if (segment.curve && normTime != 1) {
            try {
              normTime = segment.curve(normLinearTime);
            } catch (e) {
              dev().error(TAG_, "step curve failed: " + e, e);
              this.complete_(false, 0);
              return;
            }
          }
        } else {
          normLinearTime = 1;
          normTime = 1;
        }
        if (normLinearTime == 1) {
          segment.completed = true;
        }
        try {
          segment.func(normTime, segment.completed);
        } catch (e) {
          dev().error(TAG_, "step mutate failed: " + e, e);
          this.complete_(false, 0);
          return;
        }
      }
    }]);
    return AnimationPlayer2;
  }();

  // build/amp-image-lightbox-0.1.css.js
  var CSS2 = "amp-image-lightbox{position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;margin:0!important;padding:0!important;overflow:hidden!important;transform:translateZ(0)!important;-ms-touch-action:none!important;touch-action:none!important;z-index:1000;background:rgba(0,0,0,0.95);color:#f2f2f2}.i-amphtml-image-lightbox-container{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-trans{pointer-events:none!important;position:fixed;z-index:1001;top:0;left:0;bottom:0;right:0}.i-amphtml-image-lightbox-caption{position:absolute!important;z-index:2;bottom:0!important;left:0!important;right:0!important}.i-amphtml-image-lightbox-caption.i-amphtml-empty,.i-amphtml-image-lightbox-view-mode .i-amphtml-image-lightbox-caption{visibility:hidden}.amp-image-lightbox-caption{background:rgba(0,0,0,0.5);max-height:25%;padding:8px}.i-amphtml-image-lightbox-viewer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-viewer-image{position:absolute;z-index:1;display:block;transform-origin:50% 50%}\n/*# sourceURL=/extensions/amp-image-lightbox/0.1/amp-image-lightbox.css*/";

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _classCallCheck5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties4(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass4(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties4(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties4(Constructor, staticProps);
    return Constructor;
  }
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck5(this, Observable2);
      this.handlers_ = null;
    }
    _createClass4(Observable2, [{
      key: "add",
      value: function add(handler) {
        var _this = this;
        if (!this.handlers_) {
          this.handlers_ = [];
        }
        this.handlers_.push(handler);
        return function() {
          _this.remove(handler);
        };
      }
    }, {
      key: "remove",
      value: function remove2(handler) {
        if (!this.handlers_) {
          return;
        }
        removeItem(this.handlers_, handler);
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        if (!this.handlers_) {
          return;
        }
        this.handlers_.length = 0;
      }
    }, {
      key: "fire",
      value: function fire(opt_event) {
        if (!this.handlers_) {
          return;
        }
        for (var _iterator = _createForOfIteratorHelperLoose(this.handlers_), _step; !(_step = _iterator()).done; ) {
          var handler = _step.value;
          handler(opt_event);
        }
      }
    }, {
      key: "getHandlerCount",
      value: function getHandlerCount() {
        var _this$handlers_$lengt, _this$handlers_;
        return (_this$handlers_$lengt = (_this$handlers_ = this.handlers_) == null ? void 0 : _this$handlers_.length) != null ? _this$handlers_$lengt : 0;
      }
    }]);
    return Observable2;
  }();

  // src/pass.js
  function _classCallCheck6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties5(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass5(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties5(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties5(Constructor, staticProps);
    return Constructor;
  }
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      _classCallCheck6(this, Pass2);
      this.timer_ = Services.timerFor(win);
      this.handler_ = handler;
      this.defaultDelay_ = opt_defaultDelay || 0;
      this.scheduled_ = -1;
      this.nextTime_ = 0;
      this.running_ = false;
      this.boundPass_ = function() {
        _this.pass_();
      };
    }
    _createClass5(Pass2, [{
      key: "isPending",
      value: function isPending() {
        return this.scheduled_ != -1;
      }
    }, {
      key: "schedule",
      value: function schedule(opt_delay) {
        var delay = opt_delay || this.defaultDelay_;
        if (this.running_ && delay < 10) {
          delay = 10;
        }
        var nextTime = Date.now() + delay;
        if (!this.isPending() || nextTime - this.nextTime_ < -10) {
          this.cancel();
          this.nextTime_ = nextTime;
          this.scheduled_ = this.timer_.delay(this.boundPass_, delay);
          return true;
        }
        return false;
      }
    }, {
      key: "pass_",
      value: function pass_() {
        this.scheduled_ = -1;
        this.nextTime_ = 0;
        this.running_ = true;
        this.handler_();
        this.running_ = false;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (this.isPending()) {
          this.timer_.cancel(this.scheduled_);
          this.scheduled_ = -1;
        }
      }
    }]);
    return Pass2;
  }();

  // src/core/dom/event-helper-listen.js
  var passiveSupported;
  function supportsPassiveEventListener(win) {
    if (passiveSupported !== void 0) {
      return passiveSupported;
    }
    passiveSupported = false;
    try {
      var options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      win.addEventListener("test-options", null, options);
      win.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return passiveSupported;
  }

  // src/gesture.js
  function _defineProperties6(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass6(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties6(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties6(Constructor, staticProps);
    return Constructor;
  }
  function _classCallCheck7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var PROP_ = "__AMP_Gestures";
  var Gesture = function Gesture2(type, data, time, event) {
    _classCallCheck7(this, Gesture2);
    this.type = type;
    this.data = data;
    this.time = time;
    this.event = event;
  };
  var Gestures = /* @__PURE__ */ function() {
    function Gestures2(element, shouldNotPreventDefault, shouldStopPropagation) {
      _classCallCheck7(this, Gestures2);
      this.element_ = element;
      this.recognizers_ = [];
      this.tracking_ = [];
      this.ready_ = [];
      this.pending_ = [];
      this.eventing_ = null;
      this.shouldNotPreventDefault_ = shouldNotPreventDefault;
      this.shouldStopPropagation_ = shouldStopPropagation;
      this.wasEventing_ = false;
      this.pass_ = new Pass(toWin(element.ownerDocument.defaultView), this.doPass_.bind(this));
      this.pointerDownObservable_ = new Observable();
      this.overservers_ = Object.create(null);
      this.boundOnTouchStart_ = this.onTouchStart_.bind(this);
      this.boundOnTouchEnd_ = this.onTouchEnd_.bind(this);
      this.boundOnTouchMove_ = this.onTouchMove_.bind(this);
      this.boundOnTouchCancel_ = this.onTouchCancel_.bind(this);
      var win = element.ownerDocument.defaultView;
      var passiveSupported2 = supportsPassiveEventListener(toWin(win));
      this.element_.addEventListener("touchstart", this.boundOnTouchStart_, passiveSupported2 ? {
        passive: true
      } : false);
      this.element_.addEventListener("touchend", this.boundOnTouchEnd_);
      this.element_.addEventListener("touchmove", this.boundOnTouchMove_, passiveSupported2 ? {
        passive: true
      } : false);
      this.element_.addEventListener("touchcancel", this.boundOnTouchCancel_);
      this.passAfterEvent_ = false;
    }
    _createClass6(Gestures2, [{
      key: "cleanup",
      value: function cleanup() {
        this.element_.removeEventListener("touchstart", this.boundOnTouchStart_);
        this.element_.removeEventListener("touchend", this.boundOnTouchEnd_);
        this.element_.removeEventListener("touchmove", this.boundOnTouchMove_);
        this.element_.removeEventListener("touchcancel", this.boundOnTouchCancel_);
        delete this.element_[PROP_];
        this.pass_.cancel();
      }
    }, {
      key: "onGesture",
      value: function onGesture(recognizerConstr, handler) {
        var recognizer = new recognizerConstr(this);
        var type = recognizer.getType();
        var overserver = this.overservers_[type];
        if (!overserver) {
          this.recognizers_.push(recognizer);
          overserver = new Observable();
          this.overservers_[type] = overserver;
        }
        return overserver.add(handler);
      }
    }, {
      key: "removeGesture",
      value: function removeGesture(recognizerConstr) {
        var type = new recognizerConstr(this).getType();
        var overserver = this.overservers_[type];
        if (overserver) {
          overserver.removeAll();
          var index = findIndex(this.recognizers_, function(e) {
            return e.getType() == type;
          });
          if (index < 0) {
            return false;
          }
          this.recognizers_.splice(index, 1);
          this.ready_.splice(index, 1);
          this.pending_.splice(index, 1);
          this.tracking_.splice(index, 1);
          delete this.overservers_[type];
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onPointerDown",
      value: function onPointerDown(handler) {
        return this.pointerDownObservable_.add(handler);
      }
    }, {
      key: "onTouchStart_",
      value: function onTouchStart_(event) {
        var now = Date.now();
        this.wasEventing_ = false;
        this.pointerDownObservable_.fire(event);
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.ready_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
          }
          if (this.recognizers_[i].onTouchStart(event)) {
            this.startTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchMove_",
      value: function onTouchMove_(event) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.tracking_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
            continue;
          }
          if (!this.recognizers_[i].onTouchMove(event)) {
            this.stopTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchEnd_",
      value: function onTouchEnd_(event) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.tracking_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
            continue;
          }
          this.recognizers_[i].onTouchEnd(event);
          var isReady = !this.pending_[i];
          var isExpired = this.pending_[i] < now;
          var isEventing = this.eventing_ == this.recognizers_[i];
          if (!isEventing && (isReady || isExpired)) {
            this.stopTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchCancel_",
      value: function onTouchCancel_(event) {
        for (var i = 0; i < this.recognizers_.length; i++) {
          this.cancelEventing_(i);
        }
        this.afterEvent_(event);
      }
    }, {
      key: "signalReady_",
      value: function signalReady_(recognizer, offset) {
        if (this.eventing_) {
          recognizer.acceptCancel();
          return;
        }
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.recognizers_[i] == recognizer) {
            this.ready_[i] = now + offset;
            this.pending_[i] = 0;
          }
        }
        this.passAfterEvent_ = true;
      }
    }, {
      key: "signalPending_",
      value: function signalPending_(recognizer, timeLeft) {
        if (this.eventing_) {
          recognizer.acceptCancel();
          return;
        }
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.recognizers_[i] == recognizer) {
            this.pending_[i] = now + timeLeft;
          }
        }
      }
    }, {
      key: "signalEnd_",
      value: function signalEnd_(recognizer) {
        if (this.eventing_ == recognizer) {
          this.eventing_ = null;
          this.wasEventing_ = true;
        }
      }
    }, {
      key: "signalEmit_",
      value: function signalEmit_(recognizer, data, event) {
        devAssert(this.eventing_ == recognizer, "Recognizer is not currently allowed: %s", recognizer.getType());
        var overserver = this.overservers_[recognizer.getType()];
        if (overserver) {
          overserver.fire(new Gesture(recognizer.getType(), data, Date.now(), event));
        }
      }
    }, {
      key: "afterEvent_",
      value: function afterEvent_(event) {
        var cancelEvent = !!this.eventing_ || this.wasEventing_;
        this.wasEventing_ = false;
        if (!cancelEvent) {
          var now = Date.now();
          for (var i = 0; i < this.recognizers_.length; i++) {
            if (this.ready_[i] || this.pending_[i] && this.pending_[i] >= now) {
              cancelEvent = true;
              break;
            }
          }
        }
        if (cancelEvent) {
          event.stopPropagation();
          if (!this.shouldNotPreventDefault_) {
            event.preventDefault();
          }
        } else if (this.shouldStopPropagation_) {
          event.stopPropagation();
        }
        if (this.passAfterEvent_) {
          this.passAfterEvent_ = false;
          this.doPass_();
        }
      }
    }, {
      key: "doPass_",
      value: function doPass_() {
        var now = Date.now();
        var readyIndex = -1;
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.ready_[i]) {
            if (this.pending_[i] && this.pending_[i] < now) {
              this.stopTracking_(i);
            }
            continue;
          }
          if (readyIndex == -1 || this.ready_[i] > this.ready_[readyIndex]) {
            readyIndex = i;
          }
        }
        if (readyIndex == -1) {
          return;
        }
        var waitTime = 0;
        for (var _i = 0; _i < this.recognizers_.length; _i++) {
          if (this.ready_[_i] || !this.tracking_[_i]) {
            continue;
          }
          waitTime = Math.max(waitTime, this.pending_[_i] - now);
        }
        if (waitTime < 2) {
          this.startEventing_(readyIndex);
          return;
        }
        this.pass_.schedule(waitTime);
      }
    }, {
      key: "startEventing_",
      value: function startEventing_(index) {
        var recognizer = this.recognizers_[index];
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (i != index) {
            this.cancelEventing_(i);
          }
        }
        this.ready_[index] = 0;
        this.pending_[index] = 0;
        this.eventing_ = recognizer;
        recognizer.acceptStart();
      }
    }, {
      key: "startTracking_",
      value: function startTracking_(index) {
        this.tracking_[index] = true;
        this.pending_[index] = 0;
      }
    }, {
      key: "stopTracking_",
      value: function stopTracking_(index) {
        this.tracking_[index] = false;
        this.pending_[index] = 0;
        if (!this.ready_[index]) {
          this.recognizers_[index].acceptCancel();
        }
      }
    }, {
      key: "cancelEventing_",
      value: function cancelEventing_(index) {
        this.ready_[index] = 0;
        this.stopTracking_(index);
      }
    }], [{
      key: "get",
      value: function get(element, opt_shouldNotPreventDefault, opt_shouldStopPropagation) {
        if (opt_shouldNotPreventDefault === void 0) {
          opt_shouldNotPreventDefault = false;
        }
        if (opt_shouldStopPropagation === void 0) {
          opt_shouldStopPropagation = false;
        }
        var res = element[PROP_];
        if (!res) {
          res = new Gestures2(element, opt_shouldNotPreventDefault, opt_shouldStopPropagation);
          element[PROP_] = res;
        }
        return res;
      }
    }]);
    return Gestures2;
  }();
  var GestureRecognizer = /* @__PURE__ */ function() {
    function GestureRecognizer2(type, manager) {
      _classCallCheck7(this, GestureRecognizer2);
      this.type_ = type;
      this.manager_ = manager;
    }
    _createClass6(GestureRecognizer2, [{
      key: "getType",
      value: function getType() {
        return this.type_;
      }
    }, {
      key: "signalReady",
      value: function signalReady(offset) {
        this.manager_.signalReady_(this, offset);
      }
    }, {
      key: "signalPending",
      value: function signalPending(timeLeft) {
        this.manager_.signalPending_(this, timeLeft);
      }
    }, {
      key: "signalEnd",
      value: function signalEnd() {
        this.manager_.signalEnd_(this);
      }
    }, {
      key: "signalEmit",
      value: function signalEmit(data, event) {
        this.manager_.signalEmit_(this, data, event);
      }
    }, {
      key: "acceptStart",
      value: function acceptStart() {
      }
    }, {
      key: "acceptCancel",
      value: function acceptCancel() {
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(unusedEvent) {
        return false;
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(unusedEvent) {
        return false;
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(unusedEvent) {
      }
    }]);
    return GestureRecognizer2;
  }();

  // src/motion.js
  function _classCallCheck8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties7(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass7(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties7(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties7(Constructor, staticProps);
    return Constructor;
  }
  var NOOP_CALLBACK_ = function NOOP_CALLBACK_2() {
  };
  var MIN_VELOCITY_ = 0.02;
  var FRAME_CONST_ = 16.67;
  var EXP_FRAME_CONST_ = Math.round(-FRAME_CONST_ / Math.log(0.95));
  var VELOCITY_DEPR_FACTOR_ = FRAME_CONST_ * 2;
  function calcVelocity(deltaV, deltaTime, prevVelocity) {
    if (deltaTime < 1) {
      deltaTime = 1;
    }
    var speed = deltaV / deltaTime;
    var depr = 0.5 + Math.min(deltaTime / VELOCITY_DEPR_FACTOR_, 0.5);
    return speed * depr + prevVelocity * (1 - depr);
  }
  function continueMotion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync) {
    return new Motion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync).start();
  }
  var Motion = /* @__PURE__ */ function() {
    function Motion2(contextNode, startX, startY, veloX, veloY, callback, opt_vsync) {
      _classCallCheck8(this, Motion2);
      this.vsync_ = opt_vsync || Services.vsyncFor(self);
      this.contextNode_ = contextNode;
      this.callback_ = callback;
      this.lastX_ = startX;
      this.lastY_ = startY;
      this.maxVelocityX_ = veloX;
      this.maxVelocityY_ = veloY;
      this.velocityX_ = 0;
      this.velocityY_ = 0;
      var deferred = new Deferred();
      this.promise_ = deferred.promise;
      this.resolve_ = deferred.resolve;
      this.reject_ = deferred.reject;
      this.continuing_ = false;
    }
    _createClass7(Motion2, [{
      key: "start",
      value: function start() {
        this.continuing_ = true;
        if (Math.abs(this.maxVelocityX_) <= MIN_VELOCITY_ && Math.abs(this.maxVelocityY_) <= MIN_VELOCITY_) {
          this.fireMove_();
          this.completeContinue_(true);
        } else {
          this.runContinuing_();
        }
        return this;
      }
    }, {
      key: "halt",
      value: function halt() {
        if (this.continuing_) {
          this.completeContinue_(false);
        }
      }
    }, {
      key: "then",
      value: function then(opt_resolve, opt_reject) {
        if (!opt_resolve && !opt_reject) {
          return this.promise_;
        }
        return this.promise_.then(opt_resolve, opt_reject);
      }
    }, {
      key: "thenAlways",
      value: function thenAlways(opt_callback) {
        var callback = opt_callback || NOOP_CALLBACK_;
        return this.then(callback, callback);
      }
    }, {
      key: "runContinuing_",
      value: function runContinuing_() {
        this.velocityX_ = this.maxVelocityX_;
        this.velocityY_ = this.maxVelocityY_;
        var boundStep = this.stepContinue_.bind(this);
        var boundComplete = this.completeContinue_.bind(this, true);
        return this.vsync_.runAnimMutateSeries(this.contextNode_, boundStep, 5e3).then(boundComplete, boundComplete);
      }
    }, {
      key: "stepContinue_",
      value: function stepContinue_(timeSinceStart, timeSincePrev) {
        if (!this.continuing_) {
          return false;
        }
        this.lastX_ += timeSincePrev * this.velocityX_;
        this.lastY_ += timeSincePrev * this.velocityY_;
        if (!this.fireMove_()) {
          return false;
        }
        var decel = Math.exp(-timeSinceStart / EXP_FRAME_CONST_);
        this.velocityX_ = this.maxVelocityX_ * decel;
        this.velocityY_ = this.maxVelocityY_ * decel;
        return Math.abs(this.velocityX_) > MIN_VELOCITY_ || Math.abs(this.velocityY_) > MIN_VELOCITY_;
      }
    }, {
      key: "completeContinue_",
      value: function completeContinue_(success) {
        if (!this.continuing_) {
          return;
        }
        this.continuing_ = false;
        this.fireMove_();
        if (success) {
          this.resolve_();
        } else {
          this.reject_();
        }
      }
    }, {
      key: "fireMove_",
      value: function fireMove_() {
        return this.callback_(this.lastX_, this.lastY_);
      }
    }]);
    return Motion2;
  }();

  // src/gesture-recognizers.js
  function _classCallCheck9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties8(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass8(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties8(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties8(Constructor, staticProps);
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var DOUBLETAP_DELAY = 200;
  var TapRecognizer = /* @__PURE__ */ function(_GestureRecognizer) {
    _inherits(TapRecognizer2, _GestureRecognizer);
    var _super = _createSuper(TapRecognizer2);
    function TapRecognizer2(manager) {
      var _this;
      _classCallCheck9(this, TapRecognizer2);
      _this = _super.call(this, "tap", manager);
      _this.startX_ = 0;
      _this.startY_ = 0;
      _this.lastX_ = 0;
      _this.lastY_ = 0;
      _this.target_ = null;
      return _this;
    }
    _createClass8(TapRecognizer2, [{
      key: "onTouchStart",
      value: function onTouchStart(e) {
        var touches = e.touches;
        this.target_ = e.target;
        if (touches && touches.length == 1) {
          this.startX_ = touches[0].clientX;
          this.startY_ = touches[0].clientY;
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        var touches = e.changedTouches || e.touches;
        if (touches && touches.length == 1) {
          this.lastX_ = touches[0].clientX;
          this.lastY_ = touches[0].clientY;
          var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
          var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
          if (dx || dy) {
            return false;
          }
        }
        return true;
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(unusedE) {
        this.signalReady(0);
      }
    }, {
      key: "acceptStart",
      value: function acceptStart() {
        this.signalEmit({
          clientX: this.lastX_,
          clientY: this.lastY_,
          target: this.target_
        }, null);
        this.signalEnd();
      }
    }]);
    return TapRecognizer2;
  }(GestureRecognizer);
  var DoubletapRecognizer = /* @__PURE__ */ function(_GestureRecognizer2) {
    _inherits(DoubletapRecognizer2, _GestureRecognizer2);
    var _super2 = _createSuper(DoubletapRecognizer2);
    function DoubletapRecognizer2(manager) {
      var _this2;
      _classCallCheck9(this, DoubletapRecognizer2);
      _this2 = _super2.call(this, "doubletap", manager);
      _this2.startX_ = 0;
      _this2.startY_ = 0;
      _this2.lastX_ = 0;
      _this2.lastY_ = 0;
      _this2.tapCount_ = 0;
      _this2.event_ = null;
      return _this2;
    }
    _createClass8(DoubletapRecognizer2, [{
      key: "onTouchStart",
      value: function onTouchStart(e) {
        if (this.tapCount_ > 1) {
          return false;
        }
        var touches = e.touches;
        if (touches && touches.length == 1) {
          this.startX_ = touches[0].clientX;
          this.startY_ = touches[0].clientY;
          this.lastX_ = touches[0].clientX;
          this.lastY_ = touches[0].clientY;
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        var touches = e.touches;
        if (touches && touches.length == 1) {
          this.lastX_ = touches[0].clientX;
          this.lastY_ = touches[0].clientY;
          var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
          var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
          if (dx || dy) {
            this.acceptCancel();
            return false;
          }
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(e) {
        this.tapCount_++;
        if (this.tapCount_ < 2) {
          this.signalPending(DOUBLETAP_DELAY);
        } else {
          this.event_ = e;
          this.signalReady(0);
        }
      }
    }, {
      key: "acceptStart",
      value: function acceptStart() {
        this.tapCount_ = 0;
        this.signalEmit({
          clientX: this.lastX_,
          clientY: this.lastY_
        }, this.event_);
        this.signalEnd();
      }
    }, {
      key: "acceptCancel",
      value: function acceptCancel() {
        this.tapCount_ = 0;
      }
    }]);
    return DoubletapRecognizer2;
  }(GestureRecognizer);
  var SwipeRecognizer = /* @__PURE__ */ function(_GestureRecognizer3) {
    _inherits(SwipeRecognizer2, _GestureRecognizer3);
    var _super3 = _createSuper(SwipeRecognizer2);
    function SwipeRecognizer2(type, manager, horiz, vert) {
      var _this3;
      _classCallCheck9(this, SwipeRecognizer2);
      _this3 = _super3.call(this, type, manager);
      _this3.horiz_ = horiz;
      _this3.vert_ = vert;
      _this3.eventing_ = false;
      _this3.startX_ = 0;
      _this3.startY_ = 0;
      _this3.lastX_ = 0;
      _this3.lastY_ = 0;
      _this3.prevX_ = 0;
      _this3.prevY_ = 0;
      _this3.startTime_ = 0;
      _this3.lastTime_ = 0;
      _this3.prevTime_ = 0;
      _this3.velocityX_ = 0;
      _this3.velocityY_ = 0;
      return _this3;
    }
    _createClass8(SwipeRecognizer2, [{
      key: "onTouchStart",
      value: function onTouchStart(e) {
        var touches = e.touches;
        if (this.eventing_ && touches && touches.length > 1) {
          return true;
        }
        if (touches && touches.length == 1) {
          this.startTime_ = Date.now();
          this.startX_ = touches[0].clientX;
          this.startY_ = touches[0].clientY;
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        var touches = e.touches;
        if (touches && touches.length >= 1) {
          var _touches$ = touches[0], x = _touches$.clientX, y = _touches$.clientY;
          this.lastX_ = x;
          this.lastY_ = y;
          if (this.eventing_) {
            this.emit_(false, false, e);
          } else {
            var dx = Math.abs(x - this.startX_);
            var dy = Math.abs(y - this.startY_);
            if (this.horiz_ && this.vert_) {
              if (dx >= 8 || dy >= 8) {
                this.signalReady(-10);
              }
            } else if (this.horiz_) {
              if (dx >= 8 && dx > dy) {
                this.signalReady(-10);
              } else if (dy >= 8) {
                return false;
              }
            } else if (this.vert_) {
              if (dy >= 8 && dy > dx) {
                this.signalReady(-10);
              } else if (dx >= 8) {
                return false;
              }
            } else {
              return false;
            }
          }
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(e) {
        var touches = e.touches;
        if (touches && touches.length == 0) {
          this.end_(e);
        }
      }
    }, {
      key: "acceptStart",
      value: function acceptStart() {
        this.eventing_ = true;
        this.prevX_ = this.startX_;
        this.prevY_ = this.startY_;
        this.prevTime_ = this.startTime_;
        this.startX_ = this.lastX_;
        this.startY_ = this.lastY_;
        this.emit_(true, false, null);
      }
    }, {
      key: "acceptCancel",
      value: function acceptCancel() {
        this.eventing_ = false;
      }
    }, {
      key: "emit_",
      value: function emit_(first, last, event) {
        this.lastTime_ = Date.now();
        var deltaTime = this.lastTime_ - this.prevTime_;
        if (!last && deltaTime > 4 || last && deltaTime > 16) {
          var velocityX = calcVelocity(this.lastX_ - this.prevX_, deltaTime, this.velocityX_);
          var velocityY = calcVelocity(this.lastY_ - this.prevY_, deltaTime, this.velocityY_);
          if (!last || deltaTime > 32 || velocityX != 0 || velocityY != 0) {
            this.velocityX_ = Math.abs(velocityX) > 1e-4 ? velocityX : 0;
            this.velocityY_ = Math.abs(velocityY) > 1e-4 ? velocityY : 0;
          }
          this.prevX_ = this.lastX_;
          this.prevY_ = this.lastY_;
          this.prevTime_ = this.lastTime_;
        }
        this.signalEmit({
          first,
          last,
          time: this.lastTime_,
          deltaX: this.lastX_ - this.startX_,
          deltaY: this.lastY_ - this.startY_,
          startX: this.startX_,
          startY: this.startY_,
          lastX: this.lastX_,
          lastY: this.lastY_,
          velocityX: this.velocityX_,
          velocityY: this.velocityY_
        }, event);
      }
    }, {
      key: "end_",
      value: function end_(event) {
        if (this.eventing_) {
          this.eventing_ = false;
          this.emit_(false, true, event);
          this.signalEnd();
        }
      }
    }]);
    return SwipeRecognizer2;
  }(GestureRecognizer);
  var SwipeXYRecognizer = /* @__PURE__ */ function(_SwipeRecognizer) {
    _inherits(SwipeXYRecognizer2, _SwipeRecognizer);
    var _super4 = _createSuper(SwipeXYRecognizer2);
    function SwipeXYRecognizer2(manager) {
      _classCallCheck9(this, SwipeXYRecognizer2);
      return _super4.call(this, "swipe-xy", manager, true, true);
    }
    return SwipeXYRecognizer2;
  }(SwipeRecognizer);
  var TapzoomRecognizer = /* @__PURE__ */ function(_GestureRecognizer4) {
    _inherits(TapzoomRecognizer2, _GestureRecognizer4);
    var _super7 = _createSuper(TapzoomRecognizer2);
    function TapzoomRecognizer2(manager) {
      var _this4;
      _classCallCheck9(this, TapzoomRecognizer2);
      _this4 = _super7.call(this, "tapzoom", manager);
      _this4.eventing_ = false;
      _this4.startX_ = 0;
      _this4.startY_ = 0;
      _this4.lastX_ = 0;
      _this4.lastY_ = 0;
      _this4.tapCount_ = 0;
      _this4.prevX_ = 0;
      _this4.prevY_ = 0;
      _this4.lastTime_ = 0;
      _this4.prevTime_ = 0;
      _this4.velocityX_ = 0;
      _this4.velocityY_ = 0;
      return _this4;
    }
    _createClass8(TapzoomRecognizer2, [{
      key: "onTouchStart",
      value: function onTouchStart(e) {
        if (this.eventing_) {
          return false;
        }
        var touches = e.touches;
        if (touches && touches.length == 1) {
          this.startX_ = touches[0].clientX;
          this.startY_ = touches[0].clientY;
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        var touches = e.touches;
        if (touches && touches.length == 1) {
          this.lastX_ = touches[0].clientX;
          this.lastY_ = touches[0].clientY;
          if (this.eventing_) {
            this.emit_(false, false, e);
          } else {
            var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
            var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
            if (dx || dy) {
              if (this.tapCount_ == 0) {
                this.acceptCancel();
                return false;
              } else {
                this.signalReady(0);
              }
            }
          }
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(e) {
        if (this.eventing_) {
          this.end_(e);
          return;
        }
        this.tapCount_++;
        if (this.tapCount_ == 1) {
          this.signalPending(400);
          return;
        }
        this.acceptCancel();
      }
    }, {
      key: "acceptStart",
      value: function acceptStart() {
        this.tapCount_ = 0;
        this.eventing_ = true;
        this.emit_(true, false, null);
      }
    }, {
      key: "acceptCancel",
      value: function acceptCancel() {
        this.tapCount_ = 0;
        this.eventing_ = false;
      }
    }, {
      key: "emit_",
      value: function emit_(first, last, event) {
        this.lastTime_ = Date.now();
        if (first) {
          this.velocityX_ = this.velocityY_ = 0;
        } else if (this.lastTime_ - this.prevTime_ > 2) {
          this.velocityX_ = calcVelocity(this.lastX_ - this.prevX_, this.lastTime_ - this.prevTime_, this.velocityX_);
          this.velocityY_ = calcVelocity(this.lastY_ - this.prevY_, this.lastTime_ - this.prevTime_, this.velocityY_);
        }
        this.prevX_ = this.lastX_;
        this.prevY_ = this.lastY_;
        this.prevTime_ = this.lastTime_;
        this.signalEmit({
          first,
          last,
          centerClientX: this.startX_,
          centerClientY: this.startY_,
          deltaX: this.lastX_ - this.startX_,
          deltaY: this.lastY_ - this.startY_,
          velocityX: this.velocityX_,
          velocityY: this.velocityY_
        }, event);
      }
    }, {
      key: "end_",
      value: function end_(event) {
        if (this.eventing_) {
          this.eventing_ = false;
          this.emit_(false, true, event);
          this.signalEnd();
        }
      }
    }]);
    return TapzoomRecognizer2;
  }(GestureRecognizer);

  // src/core/constants/key-codes.js
  var Keys = {
    ENTER: "Enter",
    ESCAPE: "Escape",
    SPACE: " ",
    LEFT_ARROW: "ArrowLeft",
    UP_ARROW: "ArrowUp",
    RIGHT_ARROW: "ArrowRight",
    DOWN_ARROW: "ArrowDown",
    TAB: "Tab",
    BACKSPACE: "Backspace",
    HOME: "Home",
    END: "End"
  };

  // src/core/window/interface.js
  function _classCallCheck10(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties9(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass9(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties9(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties9(Constructor, staticProps);
    return Constructor;
  }
  var WindowInterface = /* @__PURE__ */ function() {
    function WindowInterface2() {
      _classCallCheck10(this, WindowInterface2);
    }
    _createClass9(WindowInterface2, null, [{
      key: "getTop",
      value: function getTop(win) {
        return win.top;
      }
    }, {
      key: "getLocation",
      value: function getLocation(win) {
        return win.location;
      }
    }, {
      key: "getDocumentReferrer",
      value: function getDocumentReferrer(win) {
        return win.document.referrer;
      }
    }, {
      key: "getHostname",
      value: function getHostname(win) {
        return win.location.hostname;
      }
    }, {
      key: "getUserAgent",
      value: function getUserAgent(win) {
        return win.navigator.userAgent;
      }
    }, {
      key: "getUserLanguage",
      value: function getUserLanguage(win) {
        return win.navigator["userLanguage"] || win.navigator.language;
      }
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return self.devicePixelRatio || 1;
      }
    }, {
      key: "getSendBeacon",
      value: function getSendBeacon(win) {
        if (!win.navigator.sendBeacon) {
          return void 0;
        }
        return win.navigator.sendBeacon.bind(win.navigator);
      }
    }, {
      key: "getXMLHttpRequest",
      value: function getXMLHttpRequest(win) {
        return win.XMLHttpRequest;
      }
    }, {
      key: "getImage",
      value: function getImage(win) {
        return win.Image;
      }
    }]);
    return WindowInterface2;
  }();

  // src/core/math/index.js
  function clamp(val, min, max) {
    devAssert2(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }
  function boundValue(val, min, max, extent) {
    devAssert2(min <= max, "Lower bound is greater than the upper bound.");
    return clamp(val, min - extent, max + extent);
  }
  function magnitude(deltaX, deltaY) {
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  function distance(x1, y1, x2, y2) {
    return magnitude(x2 - x1, y2 - y1);
  }

  // src/event-helper.js
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }

  // src/core/math/layout-rect.js
  function layoutRectLtwh(left, top, width, height) {
    return {
      left,
      top,
      width,
      height,
      bottom: top + height,
      right: left + width,
      x: left,
      y: top
    };
  }
  function layoutRectFromDomRect(rect) {
    return layoutRectLtwh(Number(rect.left), Number(rect.top), Number(rect.width), Number(rect.height));
  }
  function moveLayoutRect(rect, dx, dy) {
    if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
      return rect;
    }
    return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
  }

  // src/core/dom/srcset.js
  function _classCallCheck11(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties10(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass10(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties10(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties10(Constructor, staticProps);
    return Constructor;
  }
  var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
  function srcsetFromElement(element) {
    var srcsetAttr = element.getAttribute("srcset");
    if (srcsetAttr) {
      return parseSrcset(srcsetAttr);
    }
    var srcAttr = userAssert2(element.getAttribute("src"), 'Either non-empty "srcset" or "src" attribute must be specified: %s', element);
    return srcsetFromSrc(srcAttr);
  }
  function srcsetFromSrc(src) {
    return new Srcset([{
      url: src,
      width: void 0,
      dpr: 1
    }]);
  }
  function parseSrcset(s) {
    var sources = [];
    var match;
    while (match = srcsetRegex.exec(s)) {
      var url = match[1];
      var width = void 0, dpr = void 0;
      if (match[2]) {
        var type = match[3].toLowerCase();
        if (type == "w") {
          width = parseInt(match[2], 10);
        } else if (type == "x") {
          dpr = parseFloat(match[2]);
        } else {
          continue;
        }
      } else {
        dpr = 1;
      }
      sources.push({
        url,
        width,
        dpr
      });
    }
    return new Srcset(sources);
  }
  var Srcset = /* @__PURE__ */ function() {
    function Srcset2(sources) {
      _classCallCheck11(this, Srcset2);
      userAssert2(sources.length > 0, "Srcset must have at least one source");
      this.sources_ = sources;
      var hasWidth = false;
      var hasDpr = false;
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        hasWidth = hasWidth || !!source.width;
        hasDpr = hasDpr || !!source.dpr;
      }
      userAssert2(!!(hasWidth ^ hasDpr), "Srcset must have width or dpr sources, but not both");
      sources.sort(hasWidth ? sortByWidth : sortByDpr);
      this.widthBased_ = hasWidth;
    }
    _createClass10(Srcset2, [{
      key: "select",
      value: function select(width, dpr) {
        devAssert2(width, "width=%s", width);
        devAssert2(dpr, "dpr=%s", dpr);
        var index = 0;
        if (this.widthBased_) {
          index = this.selectByWidth_(width * dpr);
        } else {
          index = this.selectByDpr_(dpr);
        }
        return this.sources_[index].url;
      }
    }, {
      key: "selectByWidth_",
      value: function selectByWidth_(width) {
        var sources = this.sources_;
        var minIndex = 0;
        var minScore = Infinity;
        var minWidth = Infinity;
        for (var i = 0; i < sources.length; i++) {
          var sWidth = sources[i].width;
          var score = Math.abs(sWidth - width);
          if (score <= minScore * 1.1 || width / minWidth > 1.2) {
            minIndex = i;
            minScore = score;
            minWidth = sWidth;
          } else {
            break;
          }
        }
        return minIndex;
      }
    }, {
      key: "selectByDpr_",
      value: function selectByDpr_(dpr) {
        var sources = this.sources_;
        var minIndex = 0;
        var minScore = Infinity;
        for (var i = 0; i < sources.length; i++) {
          var score = Math.abs(sources[i].dpr - dpr);
          if (score <= minScore) {
            minIndex = i;
            minScore = score;
          } else {
            break;
          }
        }
        return minIndex;
      }
    }, {
      key: "getUrls",
      value: function getUrls() {
        return this.sources_.map(function(s) {
          return s.url;
        });
      }
    }, {
      key: "stringify",
      value: function stringify(opt_mapper) {
        var res = [];
        var sources = this.sources_;
        for (var i = 0; i < sources.length; i++) {
          var source = sources[i];
          var src = source.url;
          if (opt_mapper) {
            src = opt_mapper(src);
          }
          if (this.widthBased_) {
            src += " " + source.width + "w";
          } else {
            src += " " + source.dpr + "x";
          }
          res.push(src);
        }
        return res.join(", ");
      }
    }]);
    return Srcset2;
  }();
  function sortByWidth(s1, s2) {
    userAssert2(s1.width != s2.width, "Duplicate width: %s", s1.width);
    return s1.width - s2.width;
  }
  function sortByDpr(s1, s2) {
    userAssert2(s1.dpr != s2.dpr, "Duplicate dpr: %s", s1.dpr);
    return s1.dpr - s2.dpr;
  }

  // extensions/amp-image-lightbox/0.1/amp-image-lightbox.js
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
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
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  function _classCallCheck12(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties11(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass11(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties11(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties11(Constructor, staticProps);
    return Constructor;
  }
  var TAG = "amp-image-lightbox";
  var SUPPORTED_ELEMENTS_ = {
    "amp-img": true,
    "amp-anim": true
  };
  var ARIA_ATTRIBUTES = ["aria-label", "aria-describedby", "aria-labelledby"];
  var ENTER_CURVE_ = bezierCurve(0.4, 0, 0.2, 1);
  var EXIT_CURVE_ = bezierCurve(0.4, 0, 0.2, 1);
  var PAN_ZOOM_CURVE_ = bezierCurve(0.4, 0, 0.2, 1.4);
  var DEFAULT_MAX_SCALE = 2;
  var ImageViewer = /* @__PURE__ */ function() {
    function ImageViewer2(lightbox, win, loadPromise) {
      _classCallCheck12(this, ImageViewer2);
      this.lightbox_ = lightbox;
      this.win = win;
      this.loadPromise_ = loadPromise;
      this.viewer_ = lightbox.element.ownerDocument.createElement("div");
      this.viewer_.classList.add("i-amphtml-image-lightbox-viewer");
      this.image_ = lightbox.element.ownerDocument.createElement("img");
      this.image_.classList.add("i-amphtml-image-lightbox-viewer-image");
      this.viewer_.appendChild(this.image_);
      this.srcset_ = null;
      this.sourceWidth_ = 0;
      this.sourceHeight_ = 0;
      this.viewerBox_ = layoutRectLtwh(0, 0, 0, 0);
      this.imageBox_ = layoutRectLtwh(0, 0, 0, 0);
      this.scale_ = 1;
      this.startScale_ = 1;
      this.maxSeenScale_ = 1;
      this.minScale_ = 1;
      this.maxScale_ = DEFAULT_MAX_SCALE;
      this.startX_ = 0;
      this.startY_ = 0;
      this.posX_ = 0;
      this.posY_ = 0;
      this.minX_ = 0;
      this.minY_ = 0;
      this.maxX_ = 0;
      this.maxY_ = 0;
      this.motion_ = null;
      this.setupGestures_();
    }
    _createClass11(ImageViewer2, [{
      key: "getElement",
      value: function getElement() {
        return this.viewer_;
      }
    }, {
      key: "getImage",
      value: function getImage() {
        return this.image_;
      }
    }, {
      key: "getViewerBox",
      value: function getViewerBox() {
        return this.viewerBox_;
      }
    }, {
      key: "getImageBox",
      value: function getImageBox() {
        return this.imageBox_;
      }
    }, {
      key: "getImageBoxWithOffset",
      value: function getImageBoxWithOffset() {
        if (this.posX_ == 0 && this.posY_ == 0) {
          return this.imageBox_;
        }
        return moveLayoutRect(this.imageBox_, this.posX_, this.posY_);
      }
    }, {
      key: "reset",
      value: function reset() {
        var _this = this;
        this.image_.setAttribute("src", "");
        ARIA_ATTRIBUTES.forEach(function(key) {
          _this.image_.removeAttribute(key);
        });
        this.image_.removeAttribute("aria-describedby");
        this.srcset_ = null;
        this.imageBox_ = layoutRectLtwh(0, 0, 0, 0);
        this.sourceWidth_ = 0;
        this.sourceHeight_ = 0;
        this.maxSeenScale_ = 1;
        this.scale_ = 1;
        this.startScale_ = 1;
        this.maxScale_ = 2;
        this.startX_ = 0;
        this.startY_ = 0;
        this.posX_ = 0;
        this.posY_ = 0;
        this.minX_ = 0;
        this.minY_ = 0;
        this.maxX_ = 0;
        this.maxY_ = 0;
        if (this.motion_) {
          this.motion_.halt();
        }
        this.motion_ = null;
      }
    }, {
      key: "setSourceDimensions_",
      value: function setSourceDimensions_(ampImg, img) {
        if (img) {
          this.sourceWidth_ = img.naturalWidth || ampImg.offsetWidth;
          this.sourceHeight_ = img.naturalHeight || ampImg.offsetHeight;
        } else {
          this.sourceWidth_ = ampImg.offsetWidth;
          this.sourceHeight_ = ampImg.offsetHeight;
        }
      }
    }, {
      key: "init",
      value: function init(sourceElement, sourceImage) {
        var _this2 = this;
        this.setSourceDimensions_(sourceElement, sourceImage);
        this.srcset_ = srcsetFromElement(sourceElement);
        sourceElement.getImpl().then(function(elem) {
          elem.propagateAttributes(ARIA_ATTRIBUTES, _this2.image_);
        });
        if (sourceImage && isLoaded(sourceImage) && sourceImage.src) {
          this.image_.setAttribute("src", sourceImage.src);
        }
      }
    }, {
      key: "measure",
      value: function measure() {
        this.viewerBox_ = layoutRectFromDomRect(this.viewer_.getBoundingClientRect());
        var sourceAspectRatio = this.sourceWidth_ / this.sourceHeight_;
        var height = Math.min(this.viewerBox_.width / sourceAspectRatio, this.viewerBox_.height);
        var width = Math.min(this.viewerBox_.height * sourceAspectRatio, this.viewerBox_.width);
        if (Math.abs(width - this.sourceWidth_) <= 16 && Math.abs(height - this.sourceHeight_) <= 16) {
          width = this.sourceWidth_;
          height = this.sourceHeight_;
        }
        this.imageBox_ = layoutRectLtwh(Math.round((this.viewerBox_.width - width) / 2), Math.round((this.viewerBox_.height - height) / 2), Math.round(width), Math.round(height));
        setStyles(this.image_, {
          top: px(this.imageBox_.top),
          left: px(this.imageBox_.left),
          width: px(this.imageBox_.width),
          height: px(this.imageBox_.height)
        });
        var viewerBoxRatio = this.viewerBox_.width / this.viewerBox_.height;
        var maxScale = Math.max(viewerBoxRatio / sourceAspectRatio, sourceAspectRatio / viewerBoxRatio);
        this.maxScale_ = Math.max(DEFAULT_MAX_SCALE, maxScale);
        this.startScale_ = this.scale_ = 1;
        this.startX_ = this.posX_ = 0;
        this.startY_ = this.posY_ = 0;
        this.updatePanZoomBounds_(this.scale_);
        this.updatePanZoom_();
        return this.updateSrc_();
      }
    }, {
      key: "updateSrc_",
      value: function updateSrc_() {
        var _this3 = this;
        if (!this.srcset_) {
          return resolvedPromise();
        }
        this.maxSeenScale_ = Math.max(this.maxSeenScale_, this.scale_);
        var width = this.imageBox_.width * this.maxSeenScale_;
        var src = this.srcset_.select(width, WindowInterface.getDevicePixelRatio());
        if (src == this.image_.getAttribute("src")) {
          return resolvedPromise();
        }
        return Services.timerFor(this.win).promise(1).then(function() {
          _this3.image_.setAttribute("src", src);
          return _this3.loadPromise_(_this3.image_);
        });
      }
    }, {
      key: "setupGestures_",
      value: function setupGestures_() {
        var _this4 = this;
        var gestures = Gestures.get(this.image_);
        gestures.onGesture(TapRecognizer, function() {
          _this4.lightbox_.toggleViewMode();
        });
        gestures.onGesture(SwipeXYRecognizer, function(e) {
          _this4.onMove_(e.data.deltaX, e.data.deltaY, false);
          if (e.data.last) {
            _this4.onMoveRelease_(e.data.velocityX, e.data.velocityY);
          }
        });
        gestures.onPointerDown(function() {
          if (_this4.motion_) {
            _this4.motion_.halt();
          }
        });
        gestures.onGesture(DoubletapRecognizer, function(e) {
          var newScale;
          if (_this4.scale_ == 1) {
            newScale = _this4.maxScale_;
          } else {
            newScale = _this4.minScale_;
          }
          var deltaX = _this4.viewerBox_.width / 2 - e.data.clientX;
          var deltaY = _this4.viewerBox_.height / 2 - e.data.clientY;
          _this4.onZoom_(newScale, deltaX, deltaY, true).then(function() {
            return _this4.onZoomRelease_(0, 0, 0, 0, 0, 0);
          });
        });
        gestures.onGesture(TapzoomRecognizer, function(e) {
          _this4.onZoomInc_(e.data.centerClientX, e.data.centerClientY, e.data.deltaX, e.data.deltaY);
          if (e.data.last) {
            _this4.onZoomRelease_(e.data.centerClientX, e.data.centerClientY, e.data.deltaX, e.data.deltaY, e.data.velocityY, e.data.velocityY);
          }
        });
      }
    }, {
      key: "boundScale_",
      value: function boundScale_(s, allowExtent) {
        return boundValue(s, this.minScale_, this.maxScale_, allowExtent ? 0.25 : 0);
      }
    }, {
      key: "boundX_",
      value: function boundX_(x, allowExtent) {
        return boundValue(x, this.minX_, this.maxX_, allowExtent && this.scale_ > 1 ? this.viewerBox_.width * 0.25 : 0);
      }
    }, {
      key: "boundY_",
      value: function boundY_(y, allowExtent) {
        return boundValue(y, this.minY_, this.maxY_, allowExtent ? this.viewerBox_.height * 0.25 : 0);
      }
    }, {
      key: "updatePanZoomBounds_",
      value: function updatePanZoomBounds_(scale3) {
        var maxY = 0;
        var minY = 0;
        var dh = this.viewerBox_.height - this.imageBox_.height * scale3;
        if (dh >= 0) {
          minY = maxY = 0;
        } else {
          minY = dh / 2;
          maxY = -minY;
        }
        var maxX = 0;
        var minX = 0;
        var dw = this.viewerBox_.width - this.imageBox_.width * scale3;
        if (dw >= 0) {
          minX = maxX = 0;
        } else {
          minX = dw / 2;
          maxX = -minX;
        }
        this.minX_ = minX;
        this.minY_ = minY;
        this.maxX_ = maxX;
        this.maxY_ = maxY;
      }
    }, {
      key: "updatePanZoom_",
      value: function updatePanZoom_() {
        setStyles(this.image_, {
          transform: translate(this.posX_, this.posY_) + " " + scale(this.scale_)
        });
        if (this.scale_ != 1) {
          this.lightbox_.toggleViewMode(true);
        }
      }
    }, {
      key: "onMove_",
      value: function onMove_(deltaX, deltaY, animate) {
        var newPosX = this.boundX_(this.startX_ + deltaX, true);
        var newPosY = this.boundY_(this.startY_ + deltaY, true);
        this.set_(this.scale_, newPosX, newPosY, animate);
      }
    }, {
      key: "onMoveRelease_",
      value: function onMoveRelease_(veloX, veloY) {
        var _this5 = this;
        var deltaY = this.posY_ - this.startY_;
        if (this.scale_ == 1 && Math.abs(deltaY) > 10) {
          this.lightbox_.close();
          return;
        }
        this.motion_ = continueMotion(this.image_, this.posX_, this.posY_, veloX, veloY, function(x, y) {
          var newPosX = _this5.boundX_(x, true);
          var newPosY = _this5.boundY_(y, true);
          if (Math.abs(newPosX - _this5.posX_) < 1 && Math.abs(newPosY - _this5.posY_) < 1) {
            return false;
          }
          _this5.set_(_this5.scale_, newPosX, newPosY, false);
          return true;
        });
        this.motion_.thenAlways(function() {
          _this5.motion_ = null;
          return _this5.release_();
        });
      }
    }, {
      key: "onZoomInc_",
      value: function onZoomInc_(centerClientX, centerClientY, deltaX, deltaY) {
        var dist = magnitude(deltaX, deltaY);
        var zoomSign = Math.abs(deltaY) > Math.abs(deltaX) ? Math.sign(deltaY) : Math.sign(-deltaX);
        if (zoomSign == 0) {
          return;
        }
        var newScale = this.startScale_ * (1 + zoomSign * dist / 100);
        var deltaCenterX = this.viewerBox_.width / 2 - centerClientX;
        var deltaCenterY = this.viewerBox_.height / 2 - centerClientY;
        deltaX = Math.min(deltaCenterX, deltaCenterX * (dist / 100));
        deltaY = Math.min(deltaCenterY, deltaCenterY * (dist / 100));
        this.onZoom_(newScale, deltaX, deltaY, false);
      }
    }, {
      key: "onZoom_",
      value: function onZoom_(scale3, deltaX, deltaY, animate) {
        var newScale = this.boundScale_(scale3, true);
        if (newScale == this.scale_) {
          return;
        }
        this.updatePanZoomBounds_(newScale);
        var newPosX = this.boundX_(this.startX_ + deltaX * newScale, false);
        var newPosY = this.boundY_(this.startY_ + deltaY * newScale, false);
        return this.set_(newScale, newPosX, newPosY, animate);
      }
    }, {
      key: "onZoomRelease_",
      value: function onZoomRelease_(centerClientX, centerClientY, deltaX, deltaY, veloX, veloY) {
        var _this6 = this;
        var promise;
        if (veloX == 0 && veloY == 0) {
          promise = resolvedPromise();
        } else {
          promise = continueMotion(this.image_, deltaX, deltaY, veloX, veloY, function(x, y) {
            _this6.onZoomInc_(centerClientX, centerClientY, x, y);
            return true;
          }).thenAlways();
        }
        var relayout = this.scale_ > this.startScale_;
        return promise.then(function() {
          return _this6.release_();
        }).then(function() {
          if (relayout) {
            _this6.updateSrc_();
          }
        });
      }
    }, {
      key: "set_",
      value: function set_(newScale, newPosX, newPosY, animate) {
        var _this7 = this;
        var ds = newScale - this.scale_;
        var dist = distance(this.posX_, this.posY_, newPosX, newPosY);
        var dur = 0;
        if (animate) {
          var maxDur = 250;
          dur = Math.min(maxDur, Math.max(maxDur * dist * 0.01, maxDur * Math.abs(ds)));
        }
        var promise;
        if (dur > 16 && animate) {
          var scaleFunc = numeric(this.scale_, newScale);
          var xFunc = numeric(this.posX_, newPosX);
          var yFunc = numeric(this.posY_, newPosY);
          promise = Animation.animate(this.image_, function(time) {
            _this7.scale_ = scaleFunc(time);
            _this7.posX_ = xFunc(time);
            _this7.posY_ = yFunc(time);
            _this7.updatePanZoom_();
          }, dur, PAN_ZOOM_CURVE_).thenAlways(function() {
            _this7.scale_ = newScale;
            _this7.posX_ = newPosX;
            _this7.posY_ = newPosY;
            _this7.updatePanZoom_();
          });
        } else {
          this.scale_ = newScale;
          this.posX_ = newPosX;
          this.posY_ = newPosY;
          this.updatePanZoom_();
          if (animate) {
            promise = resolvedPromise();
          } else {
            promise = void 0;
          }
        }
        return promise;
      }
    }, {
      key: "release_",
      value: function release_() {
        var _this8 = this;
        var newScale = this.boundScale_(this.scale_, false);
        if (newScale != this.scale_) {
          this.updatePanZoomBounds_(newScale);
        }
        var newPosX = this.boundX_(this.posX_ / this.scale_ * newScale, false);
        var newPosY = this.boundY_(this.posY_ / this.scale_ * newScale, false);
        return this.set_(newScale, newPosX, newPosY, true).then(function() {
          _this8.startScale_ = _this8.scale_;
          _this8.startX_ = _this8.posX_;
          _this8.startY_ = _this8.posY_;
        });
      }
    }]);
    return ImageViewer2;
  }();
  var AmpImageLightbox = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpImageLightbox2, _AMP$BaseElement);
    var _super = _createSuper2(AmpImageLightbox2);
    function AmpImageLightbox2(element) {
      var _this9;
      _classCallCheck12(this, AmpImageLightbox2);
      _this9 = _super.call(this, element);
      _this9.historyId_ = -1;
      _this9.active_ = false;
      _this9.entering_ = false;
      _this9.sourceElement_ = null;
      _this9.sourceImage_ = null;
      _this9.unlistenViewport_ = null;
      _this9.container_ = null;
      _this9.imageViewer_ = null;
      _this9.captionElement_ = null;
      _this9.boundCloseOnEscape_ = _this9.closeOnEscape_.bind(_assertThisInitialized2(_this9));
      _this9.registerDefaultAction(function(invocation) {
        return _this9.open_(invocation);
      }, "open");
      return _this9;
    }
    _createClass11(AmpImageLightbox2, [{
      key: "buildCallback",
      value: function buildCallback() {
        Services.actionServiceForDoc(this.element).addToAllowlist("AMP-IMAGE-LIGHTBOX", "open", ["email"]);
      }
    }, {
      key: "buildLightbox_",
      value: function buildLightbox_() {
        var _this10 = this;
        if (this.container_) {
          return;
        }
        this.container_ = this.element.ownerDocument.createElement("div");
        this.container_.classList.add("i-amphtml-image-lightbox-container");
        this.element.appendChild(this.container_);
        this.imageViewer_ = new ImageViewer(this, this.win, this.loadPromise.bind(this));
        this.container_.appendChild(this.imageViewer_.getElement());
        this.captionElement_ = this.element.ownerDocument.createElement("div");
        this.captionElement_.setAttribute("id", this.element.getAttribute("id") + "-caption");
        this.captionElement_.classList.add("amp-image-lightbox-caption");
        this.captionElement_.classList.add("i-amphtml-image-lightbox-caption");
        this.container_.appendChild(this.captionElement_);
        var screenReaderCloseButton = this.element.ownerDocument.createElement("button");
        var ariaLabel = this.element.getAttribute("data-close-button-aria-label") || "Close the lightbox";
        screenReaderCloseButton.textContent = ariaLabel;
        screenReaderCloseButton.classList.add("i-amphtml-screen-reader");
        screenReaderCloseButton.tabIndex = -1;
        screenReaderCloseButton.addEventListener("click", function() {
          _this10.close();
        });
        this.element.appendChild(screenReaderCloseButton);
        var gestures = Gestures.get(this.element);
        this.element.addEventListener("click", function(e) {
          if (!_this10.entering_ && !_this10.imageViewer_.getImage().contains(e.target)) {
            _this10.close();
          }
        });
        gestures.onGesture(TapRecognizer, function() {
          if (!_this10.entering_) {
            _this10.close();
          }
        });
        gestures.onGesture(SwipeXYRecognizer, function() {
        });
      }
    }, {
      key: "open_",
      value: function open_(invocation) {
        var _this11 = this;
        if (this.active_) {
          return;
        }
        this.buildLightbox_();
        var source = invocation.caller;
        userAssert(source && SUPPORTED_ELEMENTS_[source.tagName.toLowerCase()], "Unsupported element: %s", source.tagName);
        this.active_ = true;
        this.reset_();
        this.init_(source);
        this.win.document.documentElement.addEventListener("keydown", this.boundCloseOnEscape_);
        this.getViewport().enterLightboxMode();
        this.enter_();
        this.unlistenViewport_ = this.getViewport().onChanged(function() {
          if (_this11.active_) {
            if (Services.platformFor(_this11.win).getIosVersionString().startsWith("10.3")) {
              Services.timerFor(_this11.win).delay(function() {
                _this11.imageViewer_.measure();
              }, 500);
            } else {
              _this11.imageViewer_.measure();
            }
          }
        });
        this.getHistory_().push(this.close.bind(this)).then(function(historyId) {
          _this11.historyId_ = historyId;
        });
      }
    }, {
      key: "closeOnEscape_",
      value: function closeOnEscape_(event) {
        if (event.key == Keys.ESCAPE) {
          event.preventDefault();
          this.close();
        }
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.active_) {
          return;
        }
        this.active_ = false;
        this.entering_ = false;
        this.exit_();
        if (this.unlistenViewport_) {
          this.unlistenViewport_();
          this.unlistenViewport_ = null;
        }
        this.getViewport().leaveLightboxMode();
        if (this.historyId_ != -1) {
          this.getHistory_().pop(this.historyId_);
        }
        this.win.document.documentElement.removeEventListener("keydown", this.boundCloseOnEscape_);
        if (this.sourceElement_) {
          tryFocus(this.sourceElement_);
        }
      }
    }, {
      key: "toggleViewMode",
      value: function toggleViewMode(opt_on) {
        if (opt_on !== void 0) {
          this.container_.classList.toggle("i-amphtml-image-lightbox-view-mode", opt_on);
        } else {
          this.container_.classList.toggle("i-amphtml-image-lightbox-view-mode");
        }
      }
    }, {
      key: "init_",
      value: function init_(sourceElement) {
        this.sourceElement_ = sourceElement;
        this.sourceImage_ = childElementByTag(sourceElement, "img");
        this.imageViewer_.init(this.sourceElement_, this.sourceImage_);
        var caption = null;
        var figure = closestAncestorElementBySelector(sourceElement, "figure");
        if (figure) {
          caption = elementByTag(figure, "figcaption");
        }
        if (!caption) {
          var describedBy = sourceElement.getAttribute("aria-describedby");
          caption = this.element.ownerDocument.getElementById(describedBy);
        }
        if (caption) {
          copyChildren(caption, dev().assertElement(this.captionElement_));
          this.imageViewer_.getImage().setAttribute("aria-describedby", this.captionElement_.getAttribute("id"));
        }
        this.captionElement_.classList.toggle("i-amphtml-empty", !caption);
      }
    }, {
      key: "reset_",
      value: function reset_() {
        this.imageViewer_.reset();
        removeChildren(dev().assertElement(this.captionElement_));
        this.sourceElement_ = null;
        this.sourceImage_ = null;
        this.toggleViewMode(false);
      }
    }, {
      key: "enter_",
      value: function enter_() {
        var _this12 = this;
        this.entering_ = true;
        toggle(this.element, true);
        setStyles(this.element, {
          opacity: 0
        });
        this.imageViewer_.measure();
        var anim = new Animation(this.element);
        var dur = 500;
        anim.add(0, setStyles2(this.element, {
          opacity: numeric(0, 1)
        }), 0.6, ENTER_CURVE_);
        var transLayer = null;
        if (this.sourceImage_ && isLoaded(this.sourceImage_) && this.sourceImage_.src) {
          transLayer = this.element.ownerDocument.createElement("div");
          transLayer.classList.add("i-amphtml-image-lightbox-trans");
          this.getAmpDoc().getBody().appendChild(transLayer);
          var rect = layoutRectFromDomRect(this.sourceImage_.getBoundingClientRect());
          var imageBox = this.imageViewer_.getImageBox();
          var clone = this.sourceImage_.cloneNode(true);
          clone.className = "";
          setStyles(clone, {
            position: "absolute",
            top: px(rect.top),
            left: px(rect.left),
            width: px(rect.width),
            height: px(rect.height),
            transformOrigin: "top left",
            willChange: "transform"
          });
          transLayer.appendChild(clone);
          this.sourceImage_.classList.add("i-amphtml-ghost");
          var dx = imageBox.left - rect.left;
          var dy = imageBox.top - rect.top;
          var scaleX = rect.width != 0 ? imageBox.width / rect.width : 1;
          var motionTime = clamp(Math.abs(dy) / 250 * 0.8, 0.2, 0.8);
          anim.add(0, setStyles2(clone, {
            transform: concat([translate2(numeric(0, dx), numeric(0, dy)), scale2(numeric(1, scaleX))])
          }), motionTime, ENTER_CURVE_);
          setStyles(dev().assertElement(this.container_), {
            opacity: 0
          });
          anim.add(0.8, setStyles2(dev().assertElement(this.container_), {
            opacity: numeric(0, 1)
          }), 0.1, ENTER_CURVE_);
          anim.add(0.9, setStyles2(transLayer, {
            opacity: numeric(1, 0.01)
          }), 0.1, EXIT_CURVE_);
        }
        return anim.start(dur).thenAlways(function() {
          _this12.entering_ = false;
          setStyles(_this12.element, {
            opacity: ""
          });
          setStyles(dev().assertElement(_this12.container_), {
            opacity: ""
          });
          if (transLayer) {
            _this12.getAmpDoc().getBody().removeChild(transLayer);
          }
        });
      }
    }, {
      key: "exit_",
      value: function exit_() {
        var _this13 = this;
        var image = this.imageViewer_.getImage();
        var imageBox = this.imageViewer_.getImageBoxWithOffset();
        var anim = new Animation(this.element);
        var dur = 500;
        anim.add(0, setStyles2(this.element, {
          opacity: numeric(1, 0)
        }), 0.9, EXIT_CURVE_);
        var transLayer = null;
        if (isLoaded(image) && image.src && this.sourceImage_) {
          transLayer = this.element.ownerDocument.createElement("div");
          transLayer.classList.add("i-amphtml-image-lightbox-trans");
          this.getAmpDoc().getBody().appendChild(transLayer);
          var rect = layoutRectFromDomRect(this.sourceImage_.getBoundingClientRect());
          var clone = image.cloneNode(true);
          setStyles(clone, {
            position: "absolute",
            top: px(imageBox.top),
            left: px(imageBox.left),
            width: px(imageBox.width),
            height: px(imageBox.height),
            transform: "",
            transformOrigin: "top left",
            willChange: "transform"
          });
          transLayer.appendChild(clone);
          anim.add(0, setStyles2(dev().assertElement(this.container_), {
            opacity: numeric(1, 0)
          }), 0.1, EXIT_CURVE_);
          var dx = rect.left - imageBox.left;
          var dy = rect.top - imageBox.top;
          var scaleX = imageBox.width != 0 ? rect.width / imageBox.width : 1;
          var moveAndScale = setStyles2(clone, {
            transform: concat([translate2(numeric(0, dx), numeric(0, dy)), scale2(numeric(1, scaleX))])
          });
          var motionTime = clamp(Math.abs(dy) / 250 * 0.8, 0.2, 0.8);
          anim.add(Math.min(0.8 - motionTime, 0.2), function(time, complete) {
            moveAndScale(time);
            if (complete) {
              _this13.sourceImage_.classList.remove("i-amphtml-ghost");
            }
          }, motionTime, EXIT_CURVE_);
          anim.add(0.8, setStyles2(transLayer, {
            opacity: numeric(1, 0.01)
          }), 0.2, EXIT_CURVE_);
          dur = clamp(Math.abs(dy) / 250 * dur, 300, dur);
        }
        return anim.start(dur).thenAlways(function() {
          if (_this13.sourceImage_) {
            _this13.sourceImage_.classList.remove("i-amphtml-ghost");
          }
          _this13.collapse();
          setStyles(_this13.element, {
            opacity: ""
          });
          setStyles(dev().assertElement(_this13.container_), {
            opacity: ""
          });
          if (transLayer) {
            _this13.getAmpDoc().getBody().removeChild(transLayer);
          }
          _this13.reset_();
        });
      }
    }, {
      key: "getHistory_",
      value: function getHistory_() {
        return Services.historyForDoc(this.getAmpDoc());
      }
    }]);
    return AmpImageLightbox2;
  }(AMP.BaseElement);
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerElement(TAG, AmpImageLightbox, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-image-lightbox-0.1.max.js.map
