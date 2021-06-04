(self.AMP=self.AMP||[]).push({n:"amp-pan-zoom",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
  function dict(opt_initial) {
    return opt_initial || {};
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
  function devAssert(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinifiedMode()) {
      return shouldBeTruthy;
    }
    devAssertDceCheck();
    return assert("", shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/constants/action-constants.js
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

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

  // src/core/error/index.js
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
  function duplicateErrorIfNecessary(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty != null && messageProperty.writable) {
      return error;
    }
    var message = error.message, stack = error.stack;
    var e = new Error(message);
    for (var prop in error) {
      e[prop] = error[prop];
    }
    e.stack = stack;
    return e;
  }
  function createErrorVargs(var_args) {
    var error = null;
    var message = "";
    for (var _iterator = _createForOfIteratorHelperLoose(arguments), _step; !(_step = _iterator()).done; ) {
      var arg = _step.value;
      if (arg instanceof Error && !error) {
        error = duplicateErrorIfNecessary(arg);
      } else {
        if (message) {
          message += " ";
        }
        message += arg;
      }
    }
    if (!error) {
      error = new Error(message);
    } else if (message) {
      error.message = message + ": " + error.message;
    }
    return error;
  }
  function rethrowAsync(var_args) {
    var error = createErrorVargs.apply(null, arguments);
    setTimeout(function() {
      self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(error);
      throw error;
    });
  }
  function tryCallback(callback) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return callback.apply(null, args);
    } catch (e) {
      rethrowAsync(e);
    }
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
  function devAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
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
    devAssert2(isServiceRegistered(holder, id), "Expected service " + id + " to be registered");
    var services = getServices(holder);
    var s = services[id];
    if (!s.obj) {
      devAssert2(s.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert2(s.context, "Service " + id + " registered without context.");
      s.obj = new s.ctor(s.context);
      devAssert2(s.obj, "Service " + id + " constructed to null.");
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

  // src/dom.js
  var DEFAULT_CUSTOM_EVENT_OPTIONS = {
    bubbles: true,
    cancelable: true
  };
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
  function dispatchCustomEvent(node, name, opt_data, opt_options) {
    var data = opt_data || {};
    var event = node.ownerDocument.createEvent("Event");
    event.data = data;
    var _ref = opt_options || DEFAULT_CUSTOM_EVENT_OPTIONS, bubbles = _ref.bubbles, cancelable = _ref.cancelable;
    event.initEvent(name, bubbles, cancelable);
    node.dispatchEvent(event);
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

  // build/amp-pan-zoom-0.1.css.js
  var CSS2 = `.i-amphtml-pan-zoom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-pan-zoom-child{position:absolute}.i-amphtml-pan-zoom-scrollable{cursor:all-scroll}.amp-pan-zoom-button{position:absolute;right:12px;width:36px;height:36px;bottom:12px;background-repeat:no-repeat;background-position:50%;box-shadow:1px 1px 2px;background-color:#fff;border-radius:3px}.amp-pan-zoom-in-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")}.amp-pan-zoom-out-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 13H5v-2h14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")}
/*# sourceURL=/extensions/amp-pan-zoom/0.1/amp-pan-zoom.css*/`;

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
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
        for (var _iterator = _createForOfIteratorHelperLoose2(this.handlers_), _step; !(_step = _iterator()).done; ) {
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
  var optsSupported;
  var passiveSupported;
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
        devAssert2(this.eventing_ == recognizer, "Recognizer is not currently allowed: %s", recognizer.getType());
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
  var PINCH_ACCEPT_THRESHOLD = 4;
  var PINCH_REJECT_THRESHOLD = 10;
  var PinchRecognizer = /* @__PURE__ */ function(_GestureRecognizer5) {
    _inherits(PinchRecognizer2, _GestureRecognizer5);
    var _super8 = _createSuper(PinchRecognizer2);
    function PinchRecognizer2(manager) {
      var _this5;
      _classCallCheck9(this, PinchRecognizer2);
      _this5 = _super8.call(this, "pinch", manager);
      _this5.eventing_ = false;
      _this5.startX1_ = 0;
      _this5.startY1_ = 0;
      _this5.startX2_ = 0;
      _this5.startY2_ = 0;
      _this5.lastX1_ = 0;
      _this5.lastY1_ = 0;
      _this5.lastX2_ = 0;
      _this5.lastY2_ = 0;
      _this5.prevDeltaX_ = 0;
      _this5.prevDeltaY_ = 0;
      _this5.centerClientX_ = 0;
      _this5.centerClientY_ = 0;
      _this5.startTime_ = 0;
      _this5.lastTime_ = 0;
      _this5.prevTime_ = 0;
      _this5.velocityX_ = 0;
      _this5.velocityY_ = 0;
      return _this5;
    }
    _createClass8(PinchRecognizer2, [{
      key: "onTouchStart",
      value: function onTouchStart(e) {
        var touches = e.touches;
        if (!touches) {
          return false;
        }
        if (touches.length == 1) {
          return true;
        }
        if (this.eventing_ && touches.length > 2) {
          return true;
        }
        if (touches.length == 2) {
          this.startTime_ = Date.now();
          this.startX1_ = touches[0].clientX;
          this.startY1_ = touches[0].clientY;
          this.startX2_ = touches[1].clientX;
          this.startY2_ = touches[1].clientY;
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        var touches = e.touches;
        if (!touches || touches.length == 0) {
          return false;
        }
        if (touches.length == 1) {
          return true;
        }
        this.lastX1_ = touches[0].clientX;
        this.lastY1_ = touches[0].clientY;
        this.lastX2_ = touches[1].clientX;
        this.lastY2_ = touches[1].clientY;
        if (this.eventing_) {
          this.emit_(false, false, e);
          return true;
        }
        if (this.isPinchRejected_()) {
          return false;
        }
        if (this.isPinchReady_()) {
          this.signalReady(0);
        }
        return true;
      }
    }, {
      key: "isPinchReady_",
      value: function isPinchReady_() {
        var dx1 = this.lastX1_ - this.startX1_;
        var dy1 = this.lastY1_ - this.startY1_;
        var dx2 = this.lastX2_ - this.startX2_;
        var dy2 = this.lastY2_ - this.startY2_;
        var pinchDirectionCorrect = dx1 * dx2 <= 0 && dy1 * dy2 <= 0;
        var xPinchRecognized = Math.abs(dx1 - dx2) >= PINCH_ACCEPT_THRESHOLD;
        var yPinchRecognized = Math.abs(dy1 - dy2) >= PINCH_ACCEPT_THRESHOLD;
        return pinchDirectionCorrect && (xPinchRecognized || yPinchRecognized);
      }
    }, {
      key: "isPinchRejected_",
      value: function isPinchRejected_() {
        var dx1 = this.lastX1_ - this.startX1_;
        var dy1 = this.lastY1_ - this.startY1_;
        var dx2 = this.lastX2_ - this.startX2_;
        var dy2 = this.lastY2_ - this.startY2_;
        var pinchDirectionIncorrect = dx1 * dx2 > 0 || dy1 * dy2 > 0;
        var xPinchRejected = Math.abs(dx1 + dx2) >= PINCH_REJECT_THRESHOLD;
        var yPinchRejected = Math.abs(dy1 + dy2) >= PINCH_REJECT_THRESHOLD;
        return pinchDirectionIncorrect && (xPinchRejected || yPinchRejected);
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(e) {
        var touches = e.touches;
        if (touches && touches.length < 2) {
          this.end_(e);
        }
      }
    }, {
      key: "acceptStart",
      value: function acceptStart() {
        this.eventing_ = true;
        this.prevTime_ = this.startTime_;
        this.prevDeltaX_ = 0;
        this.prevDeltaY_ = 0;
        this.centerClientX_ = (this.startX1_ + this.startX2_) * 0.5;
        this.centerClientY_ = (this.startY1_ + this.startY2_) * 0.5;
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
        var deltaX = this.deltaX_();
        var deltaY = this.deltaY_();
        if (!last && deltaTime > 4 || last && deltaTime > 16) {
          this.velocityX_ = calcVelocity(deltaX - this.prevDeltaX_, deltaTime, this.velocityX_);
          this.velocityY_ = calcVelocity(deltaY - this.prevDeltaY_, deltaTime, this.velocityY_);
          this.velocityX_ = Math.abs(this.velocityX_) > 1e-4 ? this.velocityX_ : 0;
          this.velocityY_ = Math.abs(this.velocityY_) > 1e-4 ? this.velocityY_ : 0;
          this.prevDeltaX_ = deltaX;
          this.prevDeltaY_ = deltaY;
          this.prevTime_ = this.lastTime_;
        }
        var startSq = this.sqDist_(this.startX1_, this.startX2_, this.startY1_, this.startY2_);
        var lastSq = this.sqDist_(this.lastX1_, this.lastX2_, this.lastY1_, this.lastY2_);
        this.signalEmit({
          first,
          last,
          time: this.lastTime_,
          centerClientX: this.centerClientX_,
          centerClientY: this.centerClientY_,
          dir: Math.sign(lastSq - startSq),
          deltaX: deltaX * 0.5,
          deltaY: deltaY * 0.5,
          velocityX: this.velocityX_ * 0.5,
          velocityY: this.velocityY_ * 0.5
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
    }, {
      key: "sqDist_",
      value: function sqDist_(x1, x2, y1, y2) {
        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
      }
    }, {
      key: "deltaX_",
      value: function deltaX_() {
        return Math.abs(this.lastX1_ - this.startX1_ - (this.lastX2_ - this.startX2_));
      }
    }, {
      key: "deltaY_",
      value: function deltaY_() {
        return Math.abs(this.lastY1_ - this.startY1_ - (this.lastY2_ - this.startY2_));
      }
    }]);
    return PinchRecognizer2;
  }(GestureRecognizer);

  // src/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
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

  // src/core/math/index.js
  function clamp(val, min, max) {
    devAssert(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }
  function boundValue(val, min, max, extent) {
    devAssert(min <= max, "Lower bound is greater than the upper bound.");
    return clamp(val, min - extent, max + extent);
  }
  function magnitude(deltaX, deltaY) {
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  function distance(x1, y1, x2, y2) {
    return magnitude(x2 - x1, y2 - y1);
  }

  // src/event-helper.js
  function createCustomEvent(win, type, detail, opt_eventInit) {
    var eventInit = {
      detail
    };
    Object.assign(eventInit, opt_eventInit);
    if (typeof win.CustomEvent == "function") {
      return new win.CustomEvent(type, eventInit);
    } else {
      var e = win.document.createEvent("CustomEvent");
      e.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
      return e;
    }
  }
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
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

  // src/transition.js
  function numeric(start, end) {
    return function(time) {
      return start + (end - start) * time;
    };
  }

  // src/utils/size-observer.js
  var Type = {
    CONTENT: 0,
    BORDER_BOX: 1
  };
  var VERTICAL_RE = /vertical/;
  var observers = new WeakMap();
  var targetObserverMultimap = new WeakMap();
  var targetEntryMap = new WeakMap();
  function observeContentSize(element, callback) {
    observeSize(element, Type.CONTENT, callback);
  }
  function unobserveContentSize(element, callback) {
    unobserveSize(element, Type.CONTENT, callback);
  }
  function observeSize(element, type, callback) {
    var win = element.ownerDocument.defaultView;
    if (!win) {
      return;
    }
    var callbacks = targetObserverMultimap.get(element);
    if (!callbacks) {
      callbacks = [];
      targetObserverMultimap.set(element, callbacks);
      getObserver(win).observe(element);
    }
    var exists = callbacks.some(function(cb) {
      return cb.callback === callback && cb.type === type;
    });
    if (!exists) {
      callbacks.push({
        type,
        callback
      });
      var entry = targetEntryMap.get(element);
      if (entry) {
        setTimeout(function() {
          return computeAndCall(type, callback, entry);
        });
      }
    }
  }
  function unobserveSize(element, type, callback) {
    var callbacks = targetObserverMultimap.get(element);
    if (!callbacks) {
      return;
    }
    remove(callbacks, function(cb) {
      return cb.callback === callback && cb.type === type;
    });
    if (callbacks.length == 0) {
      targetObserverMultimap.delete(element);
      targetEntryMap.delete(element);
      var win = element.ownerDocument.defaultView;
      if (win) {
        getObserver(win).unobserve(element);
      }
    }
  }
  function getObserver(win) {
    var observer = observers.get(win);
    if (!observer) {
      observer = new win.ResizeObserver(processEntries);
      observers.set(win, observer);
    }
    return observer;
  }
  function processEntries(entries) {
    var seen = new Set();
    for (var i = entries.length - 1; i >= 0; i--) {
      var entry = entries[i];
      var target = entry.target;
      if (seen.has(target)) {
        continue;
      }
      seen.add(target);
      var callbacks = targetObserverMultimap.get(target);
      if (!callbacks) {
        continue;
      }
      targetEntryMap.set(target, entry);
      for (var k = 0; k < callbacks.length; k++) {
        var _callbacks$k = callbacks[k], callback = _callbacks$k.callback, type = _callbacks$k.type;
        computeAndCall(type, callback, entry);
      }
    }
  }
  function computeAndCall(type, callback, entry) {
    if (type == Type.CONTENT) {
      var contentRect = entry.contentRect;
      var height = contentRect.height, width = contentRect.width;
      var size = {
        width,
        height
      };
      tryCallback(callback, size);
    } else if (type == Type.BORDER_BOX) {
      var borderBoxSizeArray = entry.borderBoxSize;
      var borderBoxSize;
      if (borderBoxSizeArray) {
        if (borderBoxSizeArray.length > 0) {
          borderBoxSize = borderBoxSizeArray[0];
        } else {
          borderBoxSize = {
            inlineSize: 0,
            blockSize: 0
          };
        }
      } else {
        var target = entry.target;
        var win = toWin(target.ownerDocument.defaultView);
        var isVertical = VERTICAL_RE.test(computedStyle(win, target)["writing-mode"]);
        var offsetHeight = target.offsetHeight, offsetWidth = target.offsetWidth;
        var inlineSize, blockSize;
        if (isVertical) {
          blockSize = offsetWidth;
          inlineSize = offsetHeight;
        } else {
          inlineSize = offsetWidth;
          blockSize = offsetHeight;
        }
        borderBoxSize = {
          inlineSize,
          blockSize
        };
      }
      tryCallback(callback, borderBoxSize);
    }
  }

  // extensions/amp-pan-zoom/0.1/amp-pan-zoom.js
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
  var PAN_ZOOM_CURVE_ = bezierCurve(0.4, 0, 0.2, 1.4);
  var TAG = "amp-pan-zoom";
  var DEFAULT_MAX_SCALE = 3;
  var MAX_ANIMATION_DURATION = 250;
  var ELIGIBLE_TAGS = {
    "svg": true,
    "DIV": true,
    "AMP-IMG": true,
    "AMP-LAYOUT": true,
    "AMP-SELECTOR": true
  };
  var AmpPanZoom = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpPanZoom2, _AMP$BaseElement);
    var _super = _createSuper2(AmpPanZoom2);
    function AmpPanZoom2(element) {
      var _this;
      _classCallCheck10(this, AmpPanZoom2);
      _this = _super.call(this, element);
      _this.content_ = null;
      _this.action_ = null;
      _this.sourceWidth_ = 0;
      _this.sourceHeight_ = 0;
      _this.elementBox_ = null;
      _this.contentBox_ = null;
      _this.unlistenOnSwipePan_ = null;
      _this.scale_ = 1;
      _this.startScale_ = 1;
      _this.minScale_ = 1;
      _this.maxScale_ = DEFAULT_MAX_SCALE;
      _this.initialX_ = 0;
      _this.initialY_ = 0;
      _this.initialScale_ = 1;
      _this.startX_ = 0;
      _this.startY_ = 0;
      _this.posX_ = 0;
      _this.posY_ = 0;
      _this.minX_ = 0;
      _this.minY_ = 0;
      _this.maxX_ = 0;
      _this.maxY_ = 0;
      _this.gestures_ = null;
      _this.motion_ = null;
      _this.resetOnResize_ = false;
      _this.zoomButton_ = null;
      _this.disableDoubleTap_ = false;
      _this.unlistenMouseDown_ = null;
      _this.unlistenMouseUp_ = null;
      _this.unlistenMouseMove_ = null;
      _this.mouseStartY_ = 0;
      _this.mouseStartX_ = 0;
      _this.onResize_ = _this.onResize_.bind(_assertThisInitialized2(_this));
      return _this;
    }
    _createClass9(AmpPanZoom2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.action_ = Services.actionServiceForDoc(this.element);
        var children = this.getRealChildren();
        userAssert(children.length == 1, "%s should have its target element as its one and only child", TAG);
        userAssert(this.elementIsSupported_(children[0]), "%s is not supported by %s", children[0].tagName, TAG);
        this.element.classList.add("i-amphtml-pan-zoom");
        this.content_ = children[0];
        this.content_.classList.add("i-amphtml-pan-zoom-child");
        this.maxScale_ = this.getNumberAttributeOr_("max-scale", DEFAULT_MAX_SCALE);
        this.initialScale_ = this.getNumberAttributeOr_("initial-scale", 1);
        this.initialX_ = this.getNumberAttributeOr_("initial-x", 0);
        this.initialY_ = this.getNumberAttributeOr_("initial-y", 0);
        this.resetOnResize_ = this.element.hasAttribute("reset-on-resize");
        this.disableDoubleTap_ = this.element.hasAttribute("disable-double-tap");
        this.registerAction("transform", function(invocation) {
          var args = invocation.args;
          if (!args) {
            return;
          }
          var scale2 = args["scale"] || 1;
          var x = args["x"] || 0;
          var y = args["y"] || 0;
          return _this2.transform(x, y, scale2);
        });
      }
    }, {
      key: "transform",
      value: function transform(x, y, scale2) {
        var _this3 = this;
        this.updatePanZoomBounds_(scale2);
        var boundX = this.boundX_(x, false);
        var boundY = this.boundY_(y, false);
        return this.set_(scale2, boundX, boundY, true).then(function() {
          return _this3.onZoomRelease_();
        });
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        this.createZoomButton_();
        Services.ownersForDoc(this.element).scheduleLayout(this.element, dev().assertElement(this.content_));
        return this.resetContentDimensions_().then(this.setupEvents_());
      }
    }, {
      key: "pauseCallback",
      value: function pauseCallback() {
        this.cleanupEvents_();
      }
    }, {
      key: "resumeCallback",
      value: function resumeCallback() {
        if (this.content_) {
          Services.ownersForDoc(this.element).scheduleLayout(this.element, this.content_);
        }
        this.setupEvents_();
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        this.cleanupEvents_();
        return true;
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.FILL || layout == Layout.RESPONSIVE;
      }
    }, {
      key: "onResize_",
      value: function onResize_() {
        if (this.resetOnResize_) {
          this.resetContentDimensions_();
        }
      }
    }, {
      key: "elementIsSupported_",
      value: function elementIsSupported_(element) {
        return ELIGIBLE_TAGS[element.tagName];
      }
    }, {
      key: "createZoomButton_",
      value: function createZoomButton_() {
        var _this4 = this;
        this.zoomButton_ = this.element.ownerDocument.createElement("div");
        this.zoomButton_.classList.add("amp-pan-zoom-in-icon");
        this.zoomButton_.classList.add("amp-pan-zoom-button");
        this.zoomButton_.addEventListener("click", function() {
          if (_this4.zoomButton_.classList.contains("amp-pan-zoom-in-icon")) {
            _this4.transform(0, 0, _this4.maxScale_);
            _this4.toggleZoomButtonOut_();
          } else {
            _this4.transform(0, 0, _this4.minScale_);
            _this4.toggleZoomButtonIn_();
          }
        });
        this.element.appendChild(this.zoomButton_);
      }
    }, {
      key: "getNumberAttributeOr_",
      value: function getNumberAttributeOr_(attribute, defaultValue) {
        var element = this.element;
        return element.hasAttribute(attribute) ? parseInt(element.getAttribute(attribute), 10) : defaultValue;
      }
    }, {
      key: "updateContentDimensions_",
      value: function updateContentDimensions_(aspectRatio) {
        var heightToFit = this.elementBox_.width / aspectRatio;
        var widthToFit = this.elementBox_.height * aspectRatio;
        var height = Math.min(heightToFit, this.elementBox_.height);
        var width = Math.min(widthToFit, this.elementBox_.width);
        if (Math.abs(width - this.sourceWidth_) <= 16 && Math.abs(height - this.sourceHeight_) <= 16) {
          width = this.sourceWidth_;
          height = this.sourceHeight_;
        }
        this.contentBox_ = layoutRectLtwh(0, 0, Math.round(width), Math.round(height));
      }
    }, {
      key: "updateMaxScale_",
      value: function updateMaxScale_(sourceAspectRatio) {
        var _this$elementBox_ = this.elementBox_, height = _this$elementBox_.height, width = _this$elementBox_.width;
        var elementBoxRatio = width / height;
        var maxScale = Math.max(elementBoxRatio / sourceAspectRatio, sourceAspectRatio / elementBoxRatio);
        if (!isNaN(maxScale)) {
          this.maxScale_ = Math.max(this.maxScale_, maxScale);
        }
      }
    }, {
      key: "measure_",
      value: function measure_() {
        this.sourceWidth_ = this.content_.scrollWidth;
        this.sourceHeight_ = this.content_.scrollHeight;
        var sourceAspectRatio = this.sourceWidth_ / this.sourceHeight_;
        this.elementBox_ = this.getViewport().getLayoutRect(this.element);
        this.updateContentDimensions_(sourceAspectRatio);
        this.updateMaxScale_(sourceAspectRatio);
        this.startScale_ = this.scale_ = this.initialScale_;
        this.startX_ = this.posX_ = this.initialX_;
        this.startY_ = this.posY_ = this.initialY_;
      }
    }, {
      key: "resetContentDimensions_",
      value: function resetContentDimensions_() {
        var _this5 = this;
        return this.mutateElement(function() {
          return _this5.clearDimensions_();
        }).then(function() {
          return _this5.measureMutateElement(function() {
            return _this5.measure_();
          }, function() {
            return _this5.setDimensions_();
          }, dev().assertElement(_this5.content_));
        }).then(function() {
          _this5.setContentBoxOffsets_();
          _this5.updatePanZoomBounds_(_this5.scale_);
          return _this5.updatePanZoom_();
        });
      }
    }, {
      key: "setContentBoxOffsets_",
      value: function setContentBoxOffsets_() {
        var contentBox = layoutRectFromDomRect(dev().assertElement(this.content_).getBoundingClientRect());
        this.contentBox_.top = contentBox.top - this.elementBox_.top;
        this.contentBox_.left = contentBox.left - this.elementBox_.left;
      }
    }, {
      key: "setDimensions_",
      value: function setDimensions_() {
        setStyles(dev().assertElement(this.content_), {
          width: px(this.contentBox_.width),
          height: px(this.contentBox_.height)
        });
      }
    }, {
      key: "clearDimensions_",
      value: function clearDimensions_() {
        setStyles(dev().assertElement(this.content_), {
          width: "",
          height: ""
        });
      }
    }, {
      key: "getOffsetX_",
      value: function getOffsetX_(clientX) {
        var left = this.elementBox_.left;
        return clientX - (left - this.getViewport().getScrollLeft());
      }
    }, {
      key: "getOffsetY_",
      value: function getOffsetY_(clientY) {
        var top = this.elementBox_.top;
        return clientY - (top - this.getViewport().getScrollTop());
      }
    }, {
      key: "setupEvents_",
      value: function setupEvents_() {
        var _this6 = this;
        this.setupGestures_();
        this.unlistenMouseDown_ = listen(this.element, "mousedown", function(e) {
          return _this6.onMouseDown_(e);
        });
        observeContentSize(this.element, this.onResize_);
      }
    }, {
      key: "unlisten_",
      value: function unlisten_(handle) {
        if (handle) {
          handle();
          handle = null;
        }
      }
    }, {
      key: "cleanupEvents_",
      value: function cleanupEvents_() {
        this.cleanupGestures_();
        this.unlisten_(this.unlistenMouseDown_);
        this.unlisten_(this.unlistenMouseMove_);
        this.unlisten_(this.unlistenMouseUp_);
        unobserveContentSize(this.element, this.onResize_);
      }
    }, {
      key: "onMouseDown_",
      value: function onMouseDown_(e) {
        var _this7 = this;
        if (e.button == 2) {
          return;
        }
        e.preventDefault();
        var clientX = e.clientX, clientY = e.clientY;
        this.unlisten_(this.unlistenMouseMove_);
        this.unlisten_(this.unlistenMouseUp_);
        this.mouseStartX_ = clientX;
        this.mouseStartY_ = clientY;
        this.unlistenMouseMove_ = listen(this.element, "mousemove", function(e2) {
          return _this7.onMouseMove_(e2);
        });
        this.unlistenMouseUp_ = listen(this.win, "mouseup", function(e2) {
          return _this7.onMouseUp_(e2);
        });
      }
    }, {
      key: "onMouseMove_",
      value: function onMouseMove_(e) {
        e.preventDefault();
        var clientX = e.clientX, clientY = e.clientY;
        var deltaX = clientX - this.mouseStartX_;
        var deltaY = clientY - this.mouseStartY_;
        this.onMove_(deltaX, deltaY, false);
      }
    }, {
      key: "onMouseUp_",
      value: function onMouseUp_(e) {
        e.preventDefault();
        this.release_();
        this.unlisten_(this.unlistenMouseMove_);
        this.unlisten_(this.unlistenMouseUp_);
      }
    }, {
      key: "cleanupGestures_",
      value: function cleanupGestures_() {
        if (this.gestures_) {
          this.gestures_.cleanup();
          this.gestures_ = null;
        }
      }
    }, {
      key: "setupGestures_",
      value: function setupGestures_() {
        var _this8 = this;
        if (this.gestures_) {
          return;
        }
        this.gestures_ = Gestures.get(this.element);
        this.gestures_.onPointerDown(function() {
          if (_this8.motion_) {
            _this8.motion_.halt();
          }
        });
        this.gestures_.onGesture(PinchRecognizer, function(e) {
          return _this8.handlePinch(e.data);
        });
        if (!this.disableDoubleTap_) {
          this.gestures_.onGesture(DoubletapRecognizer, function(e) {
            return _this8.handleDoubleTap(e.data);
          });
          this.gestures_.onGesture(TapRecognizer, function(e) {
            return _this8.handleTap_(e.data);
          });
        }
      }
    }, {
      key: "handleDoubleTap",
      value: function handleDoubleTap(data) {
        var _this9 = this;
        var clientX = data.clientX, clientY = data.clientY;
        return this.onDoubletapZoom_(clientX, clientY).then(function() {
          return _this9.onZoomRelease_();
        });
      }
    }, {
      key: "handlePinch",
      value: function handlePinch(data) {
        var _this10 = this;
        var centerClientX = data.centerClientX, centerClientY = data.centerClientY, deltaX = data.deltaX, deltaY = data.deltaY, dir = data.dir, last = data.last;
        return this.onPinchZoom_(centerClientX, centerClientY, deltaX, deltaY, dir).then(function() {
          if (last) {
            return _this10.onZoomRelease_();
          }
        });
      }
    }, {
      key: "handleSwipe",
      value: function handleSwipe(data) {
        var _this11 = this;
        var deltaX = data.deltaX, deltaY = data.deltaY, last = data.last, velocityX = data.velocityX, velocityY = data.velocityY;
        return this.onMove_(deltaX, deltaY, false).then(function() {
          if (last) {
            return _this11.onMoveRelease_(velocityX, velocityY);
          }
        });
      }
    }, {
      key: "handleTap_",
      value: function handleTap_(data) {
        var event = createCustomEvent(this.win, "click", null, {
          bubbles: true
        });
        data.target.dispatchEvent(event);
      }
    }, {
      key: "registerPanningGesture_",
      value: function registerPanningGesture_() {
        var _this12 = this;
        this.unlistenOnSwipePan_ = this.gestures_.onGesture(SwipeXYRecognizer, function(e) {
          return _this12.handleSwipe(e.data);
        });
      }
    }, {
      key: "unregisterPanningGesture_",
      value: function unregisterPanningGesture_() {
        if (this.unlistenOnSwipePan_) {
          this.unlistenOnSwipePan_();
          this.unlistenOnSwipePan_ = null;
          this.gestures_.removeGesture(SwipeXYRecognizer);
        }
      }
    }, {
      key: "boundScale_",
      value: function boundScale_(s, allowExtent) {
        var extent = allowExtent ? 0.25 : 0;
        return boundValue(s, this.minScale_, this.maxScale_, extent);
      }
    }, {
      key: "boundX_",
      value: function boundX_(x, allowExtent) {
        var maxExtent = this.elementBox_.width * 0.25;
        var extent = allowExtent && this.scale_ > 1 ? maxExtent : 0;
        return boundValue(x, this.minX_, this.maxX_, extent);
      }
    }, {
      key: "boundY_",
      value: function boundY_(y, allowExtent) {
        var maxExtent = this.elementBox_.height * 0.25;
        var extent = allowExtent && this.scale_ > 1 ? maxExtent : 0;
        return boundValue(y, this.minY_, this.maxY_, extent);
      }
    }, {
      key: "updatePanZoomBounds_",
      value: function updatePanZoomBounds_(scale2) {
        var _this$contentBox_ = this.contentBox_, cHeight = _this$contentBox_.height, xOffset = _this$contentBox_.left, yOffset = _this$contentBox_.top, cWidth = _this$contentBox_.width;
        var _this$elementBox_2 = this.elementBox_, eHeight = _this$elementBox_2.height, eWidth = _this$elementBox_2.width;
        this.minX_ = Math.min(0, eWidth - (xOffset + cWidth * (scale2 + 1) / 2));
        this.maxX_ = Math.max(0, (cWidth * scale2 - cWidth) / 2 - xOffset);
        this.minY_ = Math.min(0, eHeight - (yOffset + cHeight * (scale2 + 1) / 2));
        this.maxY_ = Math.max(0, (cHeight * scale2 - cHeight) / 2 - yOffset);
      }
    }, {
      key: "updatePanZoom_",
      value: function updatePanZoom_() {
        var content = this.content_, x = this.posX_, y = this.posY_, s = this.scale_;
        return this.mutateElement(function() {
          setStyles(dev().assertElement(content), {
            transform: translate(x, y) + " " + scale(s)
          });
        }, content);
      }
    }, {
      key: "triggerTransformEnd_",
      value: function triggerTransformEnd_(scale2, x, y) {
        var event = createCustomEvent(this.win, TAG + ".transformEnd", dict({
          "scale": scale2,
          "x": x,
          "y": y
        }));
        this.action_.trigger(this.element, "transformEnd", event, ActionTrust.HIGH);
        dispatchCustomEvent(this.element, "transformEnd");
      }
    }, {
      key: "onMove_",
      value: function onMove_(deltaX, deltaY, animate) {
        var newPosX = this.boundX_(this.startX_ + deltaX, true);
        var newPosY = this.boundY_(this.startY_ + deltaY, true);
        return this.set_(this.scale_, newPosX, newPosY, animate);
      }
    }, {
      key: "onMoveRelease_",
      value: function onMoveRelease_(veloX, veloY) {
        var _this13 = this;
        this.motion_ = continueMotion(dev().assertElement(this.content_), this.posX_, this.posY_, veloX, veloY, function(x, y) {
          var newPosX = _this13.boundX_(x, true);
          var newPosY = _this13.boundY_(y, true);
          if (Math.abs(newPosX - _this13.posX_) < 1 && Math.abs(newPosY - _this13.posY_) < 1) {
            return false;
          }
          _this13.set_(_this13.scale_, newPosX, newPosY, false);
          return true;
        });
        return this.motion_.thenAlways(function() {
          _this13.motion_ = null;
          return _this13.release_();
        });
      }
    }, {
      key: "onDoubletapZoom_",
      value: function onDoubletapZoom_(clientX, clientY) {
        var newScale = this.scale_ == this.minScale_ ? this.maxScale_ : this.minScale_;
        var dx = this.elementBox_.width / 2 - this.getOffsetX_(clientX);
        var dy = this.elementBox_.height / 2 - this.getOffsetY_(clientY);
        return this.onZoom_(newScale, dx, dy, true);
      }
    }, {
      key: "onPinchZoom_",
      value: function onPinchZoom_(centerClientX, centerClientY, deltaX, deltaY, dir) {
        if (dir == 0) {
          return resolvedPromise();
        }
        var _this$elementBox_3 = this.elementBox_, height = _this$elementBox_3.height, width = _this$elementBox_3.width;
        var dist = magnitude(deltaX, deltaY);
        var newScale = this.startScale_ * (1 + dir * dist / 100);
        var deltaCenterX = width / 2 - this.getOffsetX_(centerClientX);
        var deltaCenterY = height / 2 - this.getOffsetY_(centerClientY);
        var dx = Math.min(dist / 100, 1) * deltaCenterX;
        var dy = Math.min(dist / 100, 1) * deltaCenterY;
        return this.onZoom_(newScale, dx, dy, false);
      }
    }, {
      key: "onZoom_",
      value: function onZoom_(scale2, deltaX, deltaY, animate) {
        var newScale = this.boundScale_(scale2, true);
        if (newScale == this.scale_) {
          return resolvedPromise();
        }
        this.updatePanZoomBounds_(newScale);
        var newPosX = this.boundX_(this.startX_ + deltaX * newScale, false);
        var newPosY = this.boundY_(this.startY_ + deltaY * newScale, false);
        return this.set_(newScale, newPosX, newPosY, animate);
      }
    }, {
      key: "toggleZoomButtonIn_",
      value: function toggleZoomButtonIn_() {
        if (this.zoomButton_) {
          this.zoomButton_.classList.add("amp-pan-zoom-in-icon");
          this.zoomButton_.classList.remove("amp-pan-zoom-out-icon");
        }
      }
    }, {
      key: "toggleZoomButtonOut_",
      value: function toggleZoomButtonOut_() {
        if (this.zoomButton_) {
          this.zoomButton_.classList.remove("amp-pan-zoom-in-icon");
          this.zoomButton_.classList.add("amp-pan-zoom-out-icon");
        }
      }
    }, {
      key: "onZoomRelease_",
      value: function onZoomRelease_() {
        var _this14 = this;
        return this.release_().then(function() {
          if (_this14.scale_ <= _this14.minScale_) {
            _this14.unregisterPanningGesture_();
            _this14.toggleZoomButtonIn_();
            _this14.content_.classList.remove("i-amphtml-pan-zoom-scrollable");
          } else {
            _this14.registerPanningGesture_();
            _this14.toggleZoomButtonOut_();
            _this14.content_.classList.add("i-amphtml-pan-zoom-scrollable");
          }
        });
      }
    }, {
      key: "set_",
      value: function set_(newScale, newPosX, newPosY, animate) {
        var _this15 = this;
        var ds = newScale - this.scale_;
        var dist = distance(this.posX_, this.posY_, newPosX, newPosY);
        var dur = animate ? Math.min(1, Math.max(dist * 0.01, Math.abs(ds))) * MAX_ANIMATION_DURATION : 0;
        if (dur > 16 && animate) {
          var scaleFunc = numeric(this.scale_, newScale);
          var xFunc = numeric(this.posX_, newPosX);
          var yFunc = numeric(this.posY_, newPosY);
          return Animation.animate(dev().assertElement(this.content_), function(time) {
            _this15.scale_ = scaleFunc(time);
            _this15.posX_ = xFunc(time);
            _this15.posY_ = yFunc(time);
            _this15.updatePanZoom_();
          }, dur, PAN_ZOOM_CURVE_).thenAlways(function() {
            _this15.scale_ = newScale;
            _this15.posX_ = newPosX;
            _this15.posY_ = newPosY;
            _this15.updatePanZoom_();
          });
        } else {
          this.scale_ = newScale;
          this.posX_ = newPosX;
          this.posY_ = newPosY;
          return this.updatePanZoom_();
        }
      }
    }, {
      key: "release_",
      value: function release_() {
        var _this16 = this;
        var newScale = this.boundScale_(this.scale_, false);
        if (newScale != this.scale_) {
          this.updatePanZoomBounds_(newScale);
        }
        var newPosX = this.boundX_(this.posX_ / this.scale_ * newScale, false);
        var newPosY = this.boundY_(this.posY_ / this.scale_ * newScale, false);
        return this.set_(newScale, newPosX, newPosY, true).then(function() {
          _this16.startScale_ = _this16.scale_;
          _this16.startX_ = _this16.posX_;
          _this16.startY_ = _this16.posY_;
          _this16.triggerTransformEnd_(_this16.scale_, _this16.posX_, _this16.posY_);
        });
      }
    }]);
    return AmpPanZoom2;
  }(AMP.BaseElement);
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerElement(TAG, AmpPanZoom, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-pan-zoom-0.1.max.js.map
