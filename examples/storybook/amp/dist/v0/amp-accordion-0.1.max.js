(self.AMP=self.AMP||[]).push({n:"amp-accordion",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
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

  // src/core/dom/query.js
  function closest(element, callback, opt_stopAt) {
    for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
      if (callback(el)) {
        return el;
      }
    }
    return null;
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
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
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

  // build/amp-accordion-0.1.css.js
  var CSS2 = "amp-accordion>section>:last-child{display:none!important}amp-accordion>section[expanded]>:last-child{display:block!important}.i-amphtml-accordion-content,.i-amphtml-accordion-header{margin:0}.i-amphtml-accordion-header{cursor:pointer;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}amp-accordion>section:not([expanded]) .i-amphtml-media-component,amp-accordion>section:not([expanded]) .i-amphtml-media-component *{display:none!important;visibility:hidden!important}\n/*# sourceURL=/extensions/amp-accordion/0.1/amp-accordion.css*/";

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
  function setImportantStyles(element, styles) {
    var style = element.style;
    for (var k in styles) {
      style.setProperty(getVendorJsPropertyName(style, k), String(styles[k]), "important");
    }
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
  function getStyle(element, property, opt_bypassCache) {
    var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
    if (!propertyName) {
      return void 0;
    }
    if (isVar(propertyName)) {
      return element.style.getPropertyValue(propertyName);
    }
    return element.style[propertyName];
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

  // src/transition.js
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
  function px2(transition) {
    return function(time) {
      return transition(time) + "px";
    };
  }

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/url.js
  var SERVING_TYPE_PREFIX = dict({
    "c": true,
    "v": true,
    "a": true,
    "ad": true
  });
  function removeFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return url;
    }
    return url.substring(0, index);
  }

  // extensions/amp-accordion/0.1/amp-accordion.js
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
  var TAG = "amp-accordion";
  var MAX_TRANSITION_DURATION = 500;
  var MIN_TRANSITION_DURATION = 200;
  var EXPAND_CURVE_ = bezierCurve(0.47, 0, 0.745, 0.715);
  var COLLAPSE_CURVE_ = bezierCurve(0.39, 0.575, 0.565, 1);
  var AmpAccordion = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpAccordion2, _AMP$BaseElement);
    var _super = _createSuper(AmpAccordion2);
    function AmpAccordion2(element) {
      var _this;
      _classCallCheck5(this, AmpAccordion2);
      _this = _super.call(this, element);
      _this.headers_ = [];
      _this.sessionId_ = null;
      _this.currentState_ = null;
      _this.sessionOptOut_ = false;
      _this.sections_ = null;
      _this.action_ = null;
      _this.prefix_ = element.id ? element.id : Math.floor(Math.random() * 100);
      return _this;
    }
    _createClass4(AmpAccordion2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.CONTAINER;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.action_ = Services.actionServiceForDoc(this.element);
        this.sessionOptOut_ = this.element.hasAttribute("disable-session-states");
        this.sessionId_ = this.getSessionStorageKey_();
        this.currentState_ = this.getSessionState_();
        this.sections_ = this.getRealChildren();
        this.sections_.forEach(function(section, index) {
          userAssert(section.tagName.toLowerCase() == "section", "Sections should be enclosed in a <section> tag, See https://github.com/ampproject/amphtml/blob/main/extensions/amp-accordion/amp-accordion.md. Found in: %s", _this2.element);
          var sectionComponents = section.children;
          userAssert(sectionComponents.length == 2, "Each section must have exactly two children. See https://github.com/ampproject/amphtml/blob/main/extensions/amp-accordion/amp-accordion.md. Found in: %s", _this2.element);
          var header = sectionComponents[0], content = sectionComponents[1];
          content.classList.add("i-amphtml-accordion-content");
          var contentId = content.getAttribute("id");
          if (!contentId) {
            contentId = _this2.prefix_ + "_AMP_content_" + index;
            content.setAttribute("id", contentId);
          }
          var headerId = header.getAttribute("id");
          if (!headerId) {
            headerId = _this2.prefix_ + "_AMP_header_" + index;
            header.setAttribute("id", headerId);
          }
          _this2.registerAction("toggle", function(i) {
            return _this2.handleAction_(i);
          });
          _this2.registerAction("expand", function(i) {
            return _this2.handleAction_(i);
          });
          _this2.registerAction("collapse", function(i) {
            return _this2.handleAction_(i);
          });
          _this2.action_.addToAllowlist(TAG, ["toggle", "expand", "collapse"], ["email"]);
          var expandObserver = new _this2.win.MutationObserver(function(mutations) {
            _this2.toggleExpandMutations_(mutations, ActionTrust.DEFAULT);
          });
          expandObserver.observe(section, {
            attributes: true,
            attributeFilter: ["data-expand"]
          });
          if (_this2.currentState_[contentId]) {
            section.setAttribute("expanded", "");
          } else if (_this2.currentState_[contentId] === false) {
            section.removeAttribute("expanded");
          }
          _this2.mutateElement(function() {
          });
          userAssert(!section.hasAttribute("[expanded]") && !section.hasAttribute("data-amp-bind-expanded"), 'The "expanded" attribute cannot be used with amp-bind in version 0.1 of amp-accordion. Please bind to [data-expand] instead. Found in: %s', _this2.element);
          var isExpanded = section.hasAttribute("expanded");
          header.classList.add("i-amphtml-accordion-header");
          if (!header.hasAttribute("role")) {
            header.setAttribute("role", "button");
          }
          header.setAttribute("aria-controls", contentId);
          header.setAttribute("aria-expanded", String(isExpanded));
          if (!header.hasAttribute("tabindex")) {
            header.setAttribute("tabindex", 0);
          }
          _this2.headers_.push(header);
          content.setAttribute("aria-labelledby", headerId);
          if (!content.hasAttribute("role")) {
            content.setAttribute("role", "region");
          }
          userAssert(_this2.action_.hasAction(header, "tap", section) == false, "amp-accordion headings should not have tap actions registered.");
          header.addEventListener("click", _this2.clickHandler_.bind(_this2));
          header.addEventListener("keydown", _this2.keyDownHandler_.bind(_this2));
        });
      }
    }, {
      key: "handleAction_",
      value: function handleAction_(invocation) {
        var args = invocation.args, method = invocation.method, trust = invocation.trust;
        var toExpand = void 0;
        if (method === "expand") {
          toExpand = true;
        } else if (method === "collapse") {
          toExpand = false;
        }
        if (args) {
          var sectionId = args["section"];
          var sectionEl = this.getAmpDoc().getElementById(sectionId);
          sectionEl = user().assertElement(sectionEl);
          userAssert(sectionEl, "No element found with id: %s", sectionId);
          this.toggle_(sectionEl, trust, toExpand);
        } else {
          for (var i = 0; i < this.sections_.length; i++) {
            this.toggle_(this.sections_[i], trust, toExpand);
          }
        }
      }
    }, {
      key: "getSessionStorageKey_",
      value: function getSessionStorageKey_() {
        var id_ = this.element.id || this.element.getResourceId();
        var url = removeFragment(this.win.location.href);
        return "amp-" + id_ + "-" + url;
      }
    }, {
      key: "getSessionState_",
      value: function getSessionState_() {
        if (this.sessionOptOut_) {
          return dict();
        }
        try {
          var sessionStr = this.win.sessionStorage.getItem(dev().assertString(this.sessionId_));
          return sessionStr ? devAssert2(parseJson(dev().assertString(sessionStr))) : dict();
        } catch (e) {
          dev().fine("AMP-ACCORDION", "Error setting session state: %s, %s", e.message, e.stack);
          return dict();
        }
      }
    }, {
      key: "setSessionState_",
      value: function setSessionState_() {
        if (this.sessionOptOut_) {
          return;
        }
        var sessionStr = JSON.stringify(this.currentState_);
        try {
          this.win.sessionStorage.setItem(dev().assertString(this.sessionId_), sessionStr);
        } catch (e) {
          dev().fine("AMP-ACCORDION", "Error setting session state: %s, %s", e.message, e.stack);
        }
      }
    }, {
      key: "triggerEvent_",
      value: function triggerEvent_(name, section, trust) {
        var event = createCustomEvent(this.win, "accordionSection." + name, dict({}));
        this.action_.trigger(section, name, event, trust);
        dispatchCustomEvent(this.element, name);
      }
    }, {
      key: "toggle_",
      value: function toggle_(section, trust, opt_forceExpand) {
        var _this3 = this;
        var sectionComponents = section.children;
        var header = sectionComponents[0];
        var content = sectionComponents[1];
        var contentId = content.getAttribute("id");
        var isSectionClosedAfterClick = section.hasAttribute("expanded");
        var toExpand = opt_forceExpand == void 0 ? !section.hasAttribute("expanded") : opt_forceExpand;
        if (toExpand && section.hasAttribute("expanded") || !toExpand && !section.hasAttribute("expanded")) {
          return;
        }
        if (this.element.hasAttribute("animate")) {
          if (toExpand) {
            header.setAttribute("aria-expanded", "true");
            this.animateExpand_(section, trust);
            if (this.element.hasAttribute("expand-single-section")) {
              this.sections_.forEach(function(sectionIter) {
                if (sectionIter != section) {
                  _this3.animateCollapse_(sectionIter, trust);
                  sectionIter.children[0].setAttribute("aria-expanded", "false");
                }
              });
            }
          } else {
            header.setAttribute("aria-expanded", "false");
            this.animateCollapse_(section, trust);
          }
        } else {
          this.mutateElement(function() {
            if (toExpand) {
              _this3.triggerEvent_("expand", section, trust);
              section.setAttribute("expanded", "");
              header.setAttribute("aria-expanded", "true");
              if (_this3.element.hasAttribute("expand-single-section")) {
                _this3.sections_.forEach(function(sectionIter) {
                  if (sectionIter != section) {
                    if (sectionIter.hasAttribute("expanded")) {
                      _this3.triggerEvent_("collapse", sectionIter, trust);
                      sectionIter.removeAttribute("expanded");
                    }
                    sectionIter.children[0].setAttribute("aria-expanded", "false");
                  }
                });
              }
            } else {
              _this3.triggerEvent_("collapse", section, trust);
              section.removeAttribute("expanded");
              header.setAttribute("aria-expanded", "false");
            }
          }, section);
        }
        this.currentState_[contentId] = !isSectionClosedAfterClick;
        this.setSessionState_();
      }
    }, {
      key: "animateExpand_",
      value: function animateExpand_(section, trust) {
        var _this4 = this;
        var sectionWidth;
        var headerHeight;
        var contentHeight;
        var duration;
        var originalWidthStyle;
        var sectionChild = section.children[1];
        return this.measureMutateElement(function() {
          sectionWidth = section.offsetWidth;
          originalWidthStyle = getStyle(sectionChild, "width");
        }, function() {
          setImportantStyles(sectionChild, {
            "position": "fixed",
            "width": sectionWidth + "px",
            "opacity": "0"
          });
          if (!section.hasAttribute("expanded")) {
            section.setAttribute("expanded", "");
          }
        }).then(function() {
          return _this4.measureMutateElement(function() {
            headerHeight = section.offsetHeight;
            contentHeight = sectionChild.offsetHeight;
            var viewportHeight = _this4.getViewport().getHeight();
            duration = _this4.getTransitionDuration_(Math.abs(contentHeight), viewportHeight);
          }, function() {
            setStyles(section, {
              "overflow": "hidden",
              "height": headerHeight + "px"
            });
            setStyles(sectionChild, {
              "position": "",
              "opacity": "",
              "width": originalWidthStyle
            });
          });
        }).then(function() {
          var animation = new Animation(_this4.element);
          animation.setCurve(EXPAND_CURVE_);
          animation.add(0, setStyles2(section, {
            "height": px2(numeric(headerHeight, headerHeight + contentHeight))
          }), 1);
          animation.add(0, setStyles2(sectionChild, {
            "opacity": numeric(0, 1)
          }), 1);
          return animation.start(duration).thenAlways(function() {
            _this4.mutateElement(function() {
              _this4.triggerEvent_("expand", section, trust);
              setStyles(section, {
                "overflow": "",
                "height": ""
              });
              setStyles(sectionChild, {
                "opacity": ""
              });
            });
          });
        });
      }
    }, {
      key: "animateCollapse_",
      value: function animateCollapse_(section, trust) {
        var _this5 = this;
        var sectionHeight;
        var headerHeight;
        var duration;
        var sectionHeader = section.firstElementChild;
        return this.measureMutateElement(function() {
          sectionHeight = section.offsetHeight;
          headerHeight = sectionHeader.offsetHeight;
          var viewportHeight = _this5.getViewport().getSize().height;
          duration = _this5.getTransitionDuration_(Math.abs(sectionHeight), viewportHeight);
        }, function() {
          setStyles(section, {
            "overflow": "hidden"
          });
        }).then(function() {
          return Animation.animate(section, setStyles2(section, {
            "height": px2(numeric(sectionHeight, headerHeight))
          }), duration, COLLAPSE_CURVE_).thenAlways(function() {
            return _this5.mutateElement(function() {
              if (section.hasAttribute("expanded")) {
                _this5.triggerEvent_("collapse", section, trust);
                section.removeAttribute("expanded");
              }
              setStyles(section, {
                "height": "",
                "overflow": ""
              });
            });
          });
        });
      }
    }, {
      key: "getTransitionDuration_",
      value: function getTransitionDuration_(dy, maxY, opt_minDur, opt_maxDur) {
        if (opt_minDur === void 0) {
          opt_minDur = MIN_TRANSITION_DURATION;
        }
        if (opt_maxDur === void 0) {
          opt_maxDur = MAX_TRANSITION_DURATION;
        }
        var distanceAdjustedDuration = Math.abs(dy) / maxY * opt_maxDur;
        return clamp(distanceAdjustedDuration, opt_minDur, opt_maxDur);
      }
    }, {
      key: "onHeaderPicked_",
      value: function onHeaderPicked_(event) {
        event.preventDefault();
        var header = dev().assertElement(event.currentTarget);
        var section = dev().assertElement(header.parentElement);
        this.toggle_(section, ActionTrust.HIGH);
      }
    }, {
      key: "clickHandler_",
      value: function clickHandler_(event) {
        if (this.shouldHandleClick_(event)) {
          this.onHeaderPicked_(event);
        }
      }
    }, {
      key: "shouldHandleClick_",
      value: function shouldHandleClick_(event) {
        var target = dev().assertElement(event.target);
        var header = dev().assertElement(event.currentTarget);
        var hasAnchor = !!closest(target, function(e) {
          return e.tagName == "A";
        }, header);
        var hasTapAction = this.action_.hasAction(target, "tap", header);
        return !hasAnchor && !hasTapAction;
      }
    }, {
      key: "keyDownHandler_",
      value: function keyDownHandler_(event) {
        if (event.defaultPrevented) {
          return;
        }
        var key = event.key;
        switch (key) {
          case Keys.UP_ARROW:
          case Keys.DOWN_ARROW:
            this.navigationKeyDownHandler_(event);
            return;
          case Keys.ENTER:
          case Keys.SPACE:
            if (event.target == event.currentTarget) {
              this.onHeaderPicked_(event);
            }
            return;
        }
      }
    }, {
      key: "navigationKeyDownHandler_",
      value: function navigationKeyDownHandler_(event) {
        var header = dev().assertElement(event.currentTarget);
        var index = this.headers_.indexOf(header);
        if (index !== -1) {
          event.preventDefault();
          var diff = event.key == Keys.UP_ARROW ? -1 : 1;
          var newFocusIndex = (index + diff) % this.headers_.length;
          if (newFocusIndex < 0) {
            newFocusIndex = newFocusIndex + this.headers_.length;
          }
          var newFocusHeader = this.headers_[newFocusIndex];
          tryFocus(newFocusHeader);
        }
      }
    }, {
      key: "toggleExpandMutations_",
      value: function toggleExpandMutations_(mutations, trust) {
        var _this6 = this;
        mutations.forEach(function(mutation) {
          var sectionEl = dev().assertElement(mutation.target);
          var toExpand = sectionEl.hasAttribute("data-expand");
          var isExpanded = sectionEl.hasAttribute("expanded");
          if (isExpanded !== toExpand) {
            _this6.toggle_(sectionEl, trust, toExpand);
          }
        });
      }
    }, {
      key: "getActionServiceForTesting",
      value: function getActionServiceForTesting() {
        return this.action_;
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }]);
    return AmpAccordion2;
  }(AMP.BaseElement);
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerElement(TAG, AmpAccordion, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-accordion-0.1.max.js.map
