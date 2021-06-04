(self.AMP=self.AMP||[]).push({n:"amp-viewer-integration",ev:"0.1",l:true,p:"high",v:"2106040012000",m:0,f:(function(AMP,_){

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

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
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
      value: function lerp_(a2, b, x) {
        return a2 + x * (b - a2);
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

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";

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
    var IS_MINIFIED = false;
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
      minified: IS_MINIFIED,
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

  // src/core/types/function/index.js
  function once(fn) {
    var evaluated = false;
    var retValue = null;
    var callback = fn;
    return function() {
      if (!evaluated) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        retValue = callback.apply(self, args);
        evaluated = true;
        callback = null;
      }
      return retValue;
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

  // src/core/dom/query.js
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
  function isIframed(win) {
    return win.parent && win.parent != win;
  }
  function domOrderComparator(element1, element2) {
    if (element1 === element2) {
      return 0;
    }
    var pos = element1.compareDocumentPosition(element2);
    var precedingOrContains = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS;
    if (pos & precedingOrContains) {
      return 1;
    }
    return -1;
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

  // src/pass.js
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
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      _classCallCheck5(this, Pass2);
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
    _createClass4(Pass2, [{
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
  function assertDoesNotContainDisplay(styles) {
    if ("display" in styles) {
      dev().error("STYLE", "`display` style detected in styles. You must use toggle instead.");
    }
    return styles;
  }
  function setInitialDisplay(el, value) {
    var style = el.style;
    devAssert(value !== "" && value !== "none", 'Initial display value must not be "none". Use toggle instead.');
    devAssert(!style["display"], "setInitialDisplay MUST NOT be used for resetting the display style. If you are looking for display:none toggling, use toggle instead.");
    style["display"] = value;
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function resetStyles(element, properties) {
    for (var i = 0; i < properties.length; i++) {
      setStyle(element, properties[i], null);
    }
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/service/fixed-layer.js
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
  var TAG = "FixedLayer";
  var DECLARED_FIXED_PROP = "__AMP_DECLFIXED";
  var DECLARED_STICKY_PROP = "__AMP_DECLSTICKY";
  var LIGHTBOX_MODE_ATTR = "i-amphtml-lightbox";
  var LIGHTBOX_ELEMENT_CLASS = "i-amphtml-lightbox-element";
  function isLightbox(el) {
    return el.tagName.indexOf("LIGHTBOX") !== -1;
  }
  var FixedLayer = /* @__PURE__ */ function() {
    function FixedLayer2(ampdoc, vsync, borderTop, paddingTop, transfer) {
      var _this = this;
      _classCallCheck6(this, FixedLayer2);
      this.ampdoc = ampdoc;
      this.vsync_ = vsync;
      this.borderTop_ = borderTop;
      this.paddingTop_ = paddingTop;
      this.committedPaddingTop_ = paddingTop;
      this.transfer_ = transfer && ampdoc.isSingleDoc();
      this.transferLayer_ = null;
      this.counter_ = 0;
      this.elements_ = [];
      this.updatePass_ = new Pass(ampdoc.win, function() {
        return _this.update();
      });
      this.hiddenObserverUnlistener_ = null;
      this.fixedSelectors_ = [];
      this.stickySelectors_ = [];
    }
    _createClass5(FixedLayer2, [{
      key: "enterLightbox",
      value: function enterLightbox(opt_lightbox, opt_onComplete) {
        var _this2 = this;
        var transferLayer = this.getTransferLayer_();
        if (transferLayer) {
          transferLayer.setLightboxMode(true);
        }
        if (opt_lightbox && opt_onComplete) {
          opt_onComplete.then(function() {
            return _this2.scanNode_(dev().assertElement(opt_lightbox), true);
          });
        }
      }
    }, {
      key: "leaveLightbox",
      value: function leaveLightbox() {
        var transferLayer = this.getTransferLayer_();
        if (transferLayer) {
          transferLayer.setLightboxMode(false);
        }
        var fes = remove(this.elements_, function(fe) {
          return !!fe.lightboxed;
        });
        this.returnFixedElements_(fes);
        if (!this.elements_.length) {
          this.unobserveHiddenMutations_();
        }
      }
    }, {
      key: "setup",
      value: function setup() {
        var viewer = Services.viewerForDoc(this.ampdoc);
        if (!getMode().localDev && !viewer.isEmbedded()) {
          return false;
        }
        var root = this.ampdoc.getRootNode();
        var stylesheets = root.styleSheets;
        if (!stylesheets) {
          return true;
        }
        this.fixedSelectors_.length = 0;
        this.stickySelectors_.length = 0;
        for (var i = 0; i < stylesheets.length; i++) {
          var stylesheet = stylesheets[i];
          if (!stylesheet) {
            dev().error(TAG, "Aborting setup due to null stylesheet.");
            return true;
          }
          var disabled = stylesheet.disabled, ownerNode = stylesheet.ownerNode;
          if (disabled || !ownerNode || ownerNode.tagName != "STYLE" || ownerNode.hasAttribute("amp-boilerplate") || ownerNode.hasAttribute("amp-runtime") || ownerNode.hasAttribute("amp-extension")) {
            continue;
          }
          this.discoverSelectors_(stylesheet.cssRules);
        }
        this.scanNode_(root);
        if (this.elements_.length > 0) {
          this.observeHiddenMutations();
        }
        var platform = Services.platformFor(this.ampdoc.win);
        if (this.elements_.length > 0 && !this.transfer_ && platform.isIos()) {
          user().warn(TAG, "Please test this page inside of an AMP Viewer such as Google's because the fixed or sticky positioning might have slightly different layout.");
        }
        return true;
      }
    }, {
      key: "scanNode_",
      value: function scanNode_(node, opt_lightboxMode) {
        this.trySetupSelectors_(node, opt_lightboxMode);
        this.sortInDomOrder_();
        this.update();
      }
    }, {
      key: "observeHiddenMutations",
      value: function observeHiddenMutations() {
        this.initHiddenObserver_();
      }
    }, {
      key: "unobserveHiddenMutations_",
      value: function unobserveHiddenMutations_() {
        this.updatePass_.cancel();
        var unlisten = this.hiddenObserverUnlistener_;
        if (unlisten) {
          unlisten();
          this.hiddenObserverUnlistener_ = null;
        }
      }
    }, {
      key: "initHiddenObserver_",
      value: function initHiddenObserver_() {
        var _this3 = this;
        if (this.hiddenObserverUnlistener_) {
          return;
        }
        var root = this.ampdoc.getRootNode();
        var element = root.documentElement || root;
        var hiddenObserver = Services.hiddenObserverForDoc(element);
        this.hiddenObserverUnlistener_ = hiddenObserver.add(function() {
          if (!_this3.updatePass_.isPending()) {
            _this3.updatePass_.schedule(16);
          }
        });
      }
    }, {
      key: "updatePaddingTop",
      value: function updatePaddingTop(paddingTop, opt_transient) {
        this.paddingTop_ = paddingTop;
        if (!opt_transient) {
          this.committedPaddingTop_ = paddingTop;
        }
        this.update();
      }
    }, {
      key: "transformMutate",
      value: function transformMutate(transform) {
        if (transform) {
          this.elements_.forEach(function(e) {
            if (e.fixedNow && e.top) {
              setStyle(e.element, "transition", "none");
              if (e.transform && e.transform != "none") {
                setStyle(e.element, "transform", e.transform + " " + transform);
              } else {
                setStyle(e.element, "transform", transform);
              }
            }
          });
        } else {
          this.elements_.forEach(function(e) {
            if (e.fixedNow && e.top) {
              setStyles(e.element, {
                transform: "",
                transition: ""
              });
            }
          });
        }
      }
    }, {
      key: "addElement",
      value: function addElement(element, opt_forceTransfer) {
        var added = this.setupElement_(element, "*", "fixed", opt_forceTransfer);
        if (!added) {
          return resolvedPromise();
        }
        this.sortInDomOrder_();
        this.observeHiddenMutations();
        return this.update();
      }
    }, {
      key: "removeElement",
      value: function removeElement(element) {
        var fes = this.tearDownElement_(element);
        this.returnFixedElements_(fes);
      }
    }, {
      key: "returnFixedElements_",
      value: function returnFixedElements_(fes) {
        var _this4 = this;
        if (fes.length > 0 && this.transferLayer_) {
          this.vsync_.mutate(function() {
            for (var i = 0; i < fes.length; i++) {
              var fe = fes[i];
              if (fe.position == "fixed") {
                _this4.transferLayer_.returnFrom(fe);
              }
            }
          });
        }
      }
    }, {
      key: "isDeclaredFixed",
      value: function isDeclaredFixed(element) {
        return !!element[DECLARED_FIXED_PROP];
      }
    }, {
      key: "isDeclaredSticky",
      value: function isDeclaredSticky(element) {
        return !!element[DECLARED_STICKY_PROP];
      }
    }, {
      key: "update",
      value: function update() {
        var _this5 = this;
        var toRemove = this.elements_.filter(function(fe) {
          return !_this5.ampdoc.contains(fe.element);
        });
        toRemove.forEach(function(fe) {
          return _this5.tearDownElement_(fe.element);
        });
        if (this.elements_.length == 0) {
          return resolvedPromise();
        }
        this.updatePass_.cancel();
        var hasTransferables = false;
        return this.vsync_.runPromise({
          measure: function measure(state) {
            var elements = _this5.elements_;
            var autoTops = [];
            var win = _this5.ampdoc.win;
            for (var i = 0; i < elements.length; i++) {
              setImportantStyles(elements[i].element, {
                top: "",
                bottom: "-9999vh",
                transition: "none"
              });
            }
            for (var _i = 0; _i < elements.length; _i++) {
              autoTops.push(computedStyle(win, elements[_i].element).top);
            }
            for (var _i2 = 0; _i2 < elements.length; _i2++) {
              setStyle(elements[_i2].element, "bottom", "");
            }
            for (var _i3 = 0; _i3 < elements.length; _i3++) {
              var fe = elements[_i3];
              var element = fe.element, forceTransfer = fe.forceTransfer;
              var style = computedStyle(win, element);
              var offsetHeight = element.offsetHeight, offsetTop = element.offsetTop, offsetWidth = element.offsetWidth;
              var bottom = style.bottom, _style$display = style.display, display = _style$display === void 0 ? "" : _style$display, _style$position = style.position, position = _style$position === void 0 ? "" : _style$position, zIndex = style.zIndex;
              var opacity = parseFloat(style.opacity);
              var transform = style[getVendorJsPropertyName(style, "transform")];
              var top = style.top;
              var isFixed = position === "fixed" && (forceTransfer || offsetWidth > 0 && offsetHeight > 0);
              var isSticky = endsWith(position, "sticky");
              var isDisplayed = display !== "none";
              if (!isDisplayed || !(isFixed || isSticky)) {
                state[fe.id] = {
                  fixed: false,
                  sticky: false,
                  transferrable: false,
                  top: "",
                  zIndex: ""
                };
                continue;
              }
              if (top === "auto" || autoTops[_i3] !== top) {
                if (isFixed && offsetTop === _this5.committedPaddingTop_ + _this5.borderTop_) {
                  top = "0px";
                } else {
                  top = "";
                }
              }
              var isTransferrable = false;
              if (isFixed) {
                if (forceTransfer === true) {
                  isTransferrable = true;
                } else if (forceTransfer === false) {
                  isTransferrable = false;
                } else {
                  isTransferrable = opacity > 0 && offsetHeight < 300 && !!(top || bottom);
                }
              }
              if (isTransferrable) {
                hasTransferables = true;
              }
              state[fe.id] = {
                fixed: isFixed,
                sticky: isSticky,
                transferrable: isTransferrable,
                top,
                zIndex,
                transform
              };
            }
          },
          mutate: function mutate(state) {
            if (hasTransferables && _this5.transfer_) {
              _this5.getTransferLayer_().update();
            }
            var elements = _this5.elements_;
            for (var i = 0; i < elements.length; i++) {
              var fe = elements[i];
              var feState = state[fe.id];
              setStyle(fe.element, "transition", "none");
              setStyle(fe.element, "transition", "");
              if (feState) {
                _this5.mutateElement_(fe, i, feState);
              }
            }
          }
        }, {}).catch(function(error) {
          dev().error(TAG, "Failed to mutate fixed elements:", error);
        });
      }
    }, {
      key: "trySetupSelectors_",
      value: function trySetupSelectors_(root, opt_lightboxMode) {
        try {
          this.setupSelectors_(root, opt_lightboxMode);
        } catch (e) {
          dev().error(TAG, "Failed to setup fixed elements:", e);
        }
      }
    }, {
      key: "setupSelectors_",
      value: function setupSelectors_(root, opt_lightboxMode) {
        for (var i = 0; i < this.fixedSelectors_.length; i++) {
          var fixedSelector = this.fixedSelectors_[i];
          var elements = root.querySelectorAll(fixedSelector);
          for (var j = 0; j < elements.length; j++) {
            if (this.elements_.length > 10) {
              break;
            }
            this.setupElement_(elements[j], fixedSelector, "fixed", void 0, opt_lightboxMode);
          }
        }
        for (var _i4 = 0; _i4 < this.stickySelectors_.length; _i4++) {
          var stickySelector = this.stickySelectors_[_i4];
          var _elements = root.querySelectorAll(stickySelector);
          for (var _j = 0; _j < _elements.length; _j++) {
            this.setupElement_(_elements[_j], stickySelector, "sticky", void 0, opt_lightboxMode);
          }
        }
      }
    }, {
      key: "warnAboutInlineStylesIfNecessary_",
      value: function warnAboutInlineStylesIfNecessary_(element) {
        if (element.hasAttribute("style") && (getStyle(element, "top") || getStyle(element, "bottom"))) {
          user().error(TAG, "Inline styles with `top`, `bottom` and other CSS rules are not supported yet for fixed or sticky elements (#14186). Unexpected behavior may occur.", element);
        }
      }
    }, {
      key: "setupElement_",
      value: function setupElement_(element, selector, position, opt_forceTransfer, opt_lightboxMode) {
        if (!opt_forceTransfer) {
          this.warnAboutInlineStylesIfNecessary_(element);
        }
        if (isLightbox(element)) {
          return false;
        }
        var isLightboxDescendant = closest(element, isLightbox);
        if (!opt_lightboxMode && isLightboxDescendant) {
          return false;
        }
        var elements = this.elements_;
        var removals = [];
        for (var i = 0; i < elements.length; i++) {
          var el = elements[i].element;
          if (el === element) {
            break;
          }
          if (el.contains(element)) {
            return false;
          }
          if (element.contains(el)) {
            removals.push(el);
          }
        }
        for (var _i5 = 0; _i5 < removals.length; _i5++) {
          this.removeElement(removals[_i5]);
        }
        var fe = null;
        for (var _i6 = 0; _i6 < elements.length; _i6++) {
          var _el = elements[_i6];
          if (_el.element == element && _el.position == position) {
            fe = _el;
            break;
          }
        }
        var isFixed = position == "fixed";
        if (fe) {
          if (!fe.selectors.includes(selector)) {
            fe.selectors.push(selector);
          }
        } else {
          var id = "F" + this.counter_++;
          element.setAttribute("i-amphtml-fixedid", id);
          if (isFixed) {
            element[DECLARED_FIXED_PROP] = true;
          } else {
            element[DECLARED_STICKY_PROP] = true;
          }
          fe = {
            id,
            element,
            position,
            selectors: [selector],
            fixedNow: false,
            stickyNow: false,
            lightboxed: !!isLightboxDescendant
          };
          elements.push(fe);
        }
        fe.forceTransfer = isFixed ? opt_forceTransfer : false;
        return true;
      }
    }, {
      key: "tearDownElement_",
      value: function tearDownElement_(element) {
        var removed = [];
        for (var i = 0; i < this.elements_.length; i++) {
          var fe = this.elements_[i];
          if (fe.element === element) {
            if (!fe.lightboxed) {
              this.vsync_.mutate(function() {
                setStyle(element, "top", "");
              });
            }
            this.elements_.splice(i, 1);
            removed.push(fe);
          }
        }
        if (!this.elements_.length) {
          this.unobserveHiddenMutations_();
        }
        return removed;
      }
    }, {
      key: "sortInDomOrder_",
      value: function sortInDomOrder_() {
        this.elements_.sort(function(fe1, fe2) {
          return domOrderComparator(fe1.element, fe2.element);
        });
      }
    }, {
      key: "mutateElement_",
      value: function mutateElement_(fe, index, state) {
        var element = fe.element, oldFixed = fe.fixedNow;
        fe.fixedNow = state.fixed;
        fe.stickyNow = state.sticky;
        fe.top = state.fixed || state.sticky ? state.top : "";
        fe.transform = state.transform;
        if (oldFixed && (!state.fixed || !state.transferrable) && this.transferLayer_) {
          this.transferLayer_.returnFrom(fe);
        }
        if (state.top && (state.fixed || state.sticky) && !fe.lightboxed) {
          if (state.fixed || !this.transfer_) {
            setStyle(element, "top", "calc(" + state.top + " + " + this.paddingTop_ + "px)");
          } else {
            if (this.committedPaddingTop_ === this.paddingTop_) {
              setStyle(element, "top", state.top);
            } else {
              setStyle(element, "top", "calc(" + state.top + " - " + this.committedPaddingTop_ + "px)");
            }
          }
        }
        if (this.transfer_ && state.fixed && state.transferrable) {
          this.getTransferLayer_().transferTo(fe, index, state);
        }
      }
    }, {
      key: "getTransferLayer_",
      value: function getTransferLayer_() {
        if (!this.transfer_ || this.transferLayer_) {
          return this.transferLayer_;
        }
        var doc = this.ampdoc.win.document;
        this.transferLayer_ = new TransferLayerBody(doc, this.vsync_);
        return this.transferLayer_;
      }
    }, {
      key: "discoverSelectors_",
      value: function discoverSelectors_(rules) {
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i];
          if (rule.type == 4 || rule.type == 12) {
            this.discoverSelectors_(rule.cssRules);
            continue;
          }
          if (rule.type == 1) {
            var selectorText = rule.selectorText;
            var position = rule.style.position;
            if (selectorText === "*" || !position) {
              continue;
            }
            if (position === "fixed") {
              this.fixedSelectors_.push(selectorText);
            } else if (endsWith(position, "sticky")) {
              this.stickySelectors_.push(selectorText);
            }
          }
        }
      }
    }, {
      key: "animateFixedElements",
      value: function animateFixedElements(paddingTop, lastPaddingTop, duration, curve, transient) {
        var _this6 = this;
        this.updatePaddingTop(paddingTop, transient);
        if (duration <= 0) {
          return resolvedPromise();
        }
        var tr = function tr2(time) {
          return lastPaddingTop - paddingTop + (paddingTop - lastPaddingTop) * time;
        };
        return Animation.animate(this.ampdoc.getRootNode(), function(time) {
          var p = tr(time);
          _this6.transformMutate("translateY(" + p + "px)");
        }, duration, curve).thenAlways(function() {
          _this6.transformMutate(null);
        });
      }
    }]);
    return FixedLayer2;
  }();
  var TransferLayerBody = /* @__PURE__ */ function() {
    function TransferLayerBody2(doc, vsync) {
      _classCallCheck6(this, TransferLayerBody2);
      this.doc_ = doc;
      this.vsync_ = vsync;
      this.layer_ = doc.body.cloneNode(false);
      this.layer_.removeAttribute("style");
      var styles = {
        position: "absolute",
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        pointerEvents: "none",
        overflow: "hidden",
        animation: "none",
        background: "none",
        border: "none",
        borderImage: "none",
        boxSizing: "border-box",
        boxShadow: "none",
        float: "none",
        margin: 0,
        opacity: 1,
        outline: "none",
        padding: "none",
        transform: "none",
        transition: "none"
      };
      setStyles(this.layer_, assertDoesNotContainDisplay(styles));
      setInitialDisplay(this.layer_, "block");
      doc.documentElement.appendChild(this.layer_);
    }
    _createClass5(TransferLayerBody2, [{
      key: "getRoot",
      value: function getRoot() {
        return this.layer_;
      }
    }, {
      key: "setLightboxMode",
      value: function setLightboxMode(on) {
        var _this7 = this;
        this.vsync_.mutate(function() {
          var root = _this7.getRoot();
          if (on) {
            root.setAttribute(LIGHTBOX_MODE_ATTR, "");
          } else {
            root.removeAttribute(LIGHTBOX_MODE_ATTR);
          }
        });
      }
    }, {
      key: "update",
      value: function update() {
        var body = this.doc_.body;
        var layer = this.layer_;
        var bodyAttrs = body.attributes;
        var layerAttrs = layer.attributes;
        for (var i = 0; i < bodyAttrs.length; i++) {
          var attr = bodyAttrs[i];
          if (attr.name === "style") {
            continue;
          }
          layerAttrs.setNamedItem(attr.cloneNode(false));
        }
        for (var _i7 = 0; _i7 < layerAttrs.length; _i7++) {
          var name = layerAttrs[_i7].name;
          if (name === "style" || name === LIGHTBOX_MODE_ATTR || body.hasAttribute(name)) {
            continue;
          }
          layer.removeAttribute(name);
          _i7--;
        }
      }
    }, {
      key: "transferTo",
      value: function transferTo(fe, index, state) {
        var _this8 = this;
        var element = fe.element;
        if (element.parentElement == this.layer_) {
          return;
        }
        dev().fine(TAG, "transfer to fixed:", fe.id, fe.element);
        user().warn(TAG, "In order to improve scrolling performance in Safari, we now move the element to a fixed positioning layer:", fe.element);
        if (!fe.placeholder) {
          setStyle(element, "pointer-events", "initial");
          var placeholder = fe.placeholder = this.doc_.createElement("i-amphtml-fpa");
          toggle(placeholder, false);
          placeholder.setAttribute("i-amphtml-fixedid", fe.id);
        }
        setStyle(element, "zIndex", "calc(" + (1e4 + index) + " + " + (state.zIndex || 0) + ")");
        if (fe.lightboxed) {
          element.classList.add(LIGHTBOX_ELEMENT_CLASS);
        }
        element.parentElement.replaceChild(fe.placeholder, element);
        this.layer_.appendChild(element);
        var matches2 = fe.selectors.some(function(selector) {
          return _this8.matches_(element, selector);
        });
        if (!matches2) {
          user().warn(TAG, "Failed to move the element to the fixed position layer. This is most likely due to the compound CSS selector:", fe.element);
          this.returnFrom(fe);
        }
      }
    }, {
      key: "returnFrom",
      value: function returnFrom(fe) {
        if (!fe.placeholder || !this.doc_.contains(fe.placeholder)) {
          return;
        }
        var element = fe.element, placeholder = fe.placeholder;
        dev().fine(TAG, "return from fixed:", fe.id, element);
        if (fe.lightboxed) {
          element.classList.remove(LIGHTBOX_ELEMENT_CLASS);
        }
        if (this.doc_.contains(element)) {
          setStyle(fe.element, "zIndex", "");
          placeholder.parentElement.replaceChild(element, placeholder);
        } else {
          placeholder.parentElement.removeChild(placeholder);
        }
      }
    }, {
      key: "matches_",
      value: function matches_(element, selector) {
        try {
          return matches(element, selector);
        } catch (e) {
          dev().error(TAG, "Failed to test query match:", e);
          return false;
        }
      }
    }]);
    return TransferLayerBody2;
  }();

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
  function listenOnce(element, eventType, listener, opt_evtListenerOpts) {
    var localListener = listener;
    var unlisten = internalListenImplementation(element, eventType, function(event) {
      try {
        localListener(event);
      } finally {
        localListener = null;
        unlisten();
      }
    }, opt_evtListenerOpts);
    return unlisten;
  }

  // extensions/amp-viewer-integration/0.1/focus-handler.js
  function _classCallCheck7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
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
  var FocusHandler = /* @__PURE__ */ function() {
    function FocusHandler2(win, messaging) {
      _classCallCheck7(this, FocusHandler2);
      this.win = win;
      this.messaging_ = messaging;
      this.listenForFocusEvents_();
    }
    _createClass6(FocusHandler2, [{
      key: "listenForFocusEvents_",
      value: function listenForFocusEvents_() {
        var doc = this.win.document;
        listen(doc, "focusin", this.forwardEventToViewer_.bind(this), {
          capture: false
        });
      }
    }, {
      key: "forwardEventToViewer_",
      value: function forwardEventToViewer_(e) {
        if (e.defaultPrevented) {
          return;
        }
        this.messaging_.sendRequest(e.type, dict({
          "focusTargetRect": e.target.getBoundingClientRect()
        }), false);
      }
    }]);
    return FocusHandler2;
  }();

  // extensions/amp-viewer-integration/0.1/findtext.js
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
  var CircularBuffer = /* @__PURE__ */ function() {
    function CircularBuffer2(max) {
      _classCallCheck8(this, CircularBuffer2);
      this.max_ = max;
      this.buff_ = [];
      this.next_ = 0;
    }
    _createClass7(CircularBuffer2, [{
      key: "push",
      value: function push(item) {
        this.buff_[this.next_] = item;
        this.next_ = (this.next_ + 1) % this.max_;
      }
    }, {
      key: "get",
      value: function get(index) {
        if (this.buff_.length >= this.max_) {
          index = (this.next_ + index) % this.max_;
        }
        return this.buff_[index];
      }
    }, {
      key: "size",
      value: function size() {
        return this.buff_.length;
      }
    }]);
    return CircularBuffer2;
  }();
  function textPosChar(pos) {
    return pos.node.wholeText[pos.offset];
  }
  var skipCharRe = /[,.\s\u2022()]/;
  function canonicalizeChar(c) {
    if (c == "\u2019" || c == "\u2018") {
      return "'";
    }
    if (c == "\u201C" || c == "\u201D") {
      return '"';
    }
    return c.toLowerCase();
  }
  function canonicalizeString(s) {
    var buf = [];
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (skipCharRe.test(c)) {
        continue;
      }
      buf.push(canonicalizeChar(c));
    }
    return buf.join("");
  }
  function canonicalizeSentences(sentences) {
    var ret = [];
    for (var i = 0; i < sentences.length; i++) {
      var sen = canonicalizeString(sentences[i]);
      if (sen) {
        ret.push(sen);
      }
    }
    return ret;
  }
  var Matcher = /* @__PURE__ */ function() {
    function Matcher2(sen, buf) {
      _classCallCheck8(this, Matcher2);
      this.sen_ = sen;
      this.buf_ = buf;
      this.matches = [];
      this.skipTable_ = {};
      this.skip_ = sen.length - 1;
      for (var i = 0; i < sen.length; i++) {
        var c = sen[i];
        this.skipTable_[c] = sen.length - 1 - i;
      }
    }
    _createClass7(Matcher2, [{
      key: "update",
      value: function update() {
        if (this.skip_ > 0) {
          this.skip_--;
          return;
        }
        var buf = this.buf_, sen = this.sen_;
        var bufSize = buf.size();
        for (var j = 0; j < sen.length; j++) {
          var c = canonicalizeChar(textPosChar(buf.get(bufSize - 1 - j).pos));
          if (sen[sen.length - 1 - j] == c) {
            continue;
          }
          var skip = this.skipTable_[c];
          if (skip == null) {
            skip = sen.length;
          }
          skip -= j;
          if (skip < 1) {
            skip = 1;
          }
          this.skip_ = skip - 1;
          return;
        }
        var endPosIdx = buf.get(bufSize - 1);
        var endPos = endPosIdx.pos;
        this.matches.push({
          start: buf.get(bufSize - sen.length),
          end: {
            pos: {
              node: endPos.node,
              offset: endPos.offset + 1
            },
            idx: endPosIdx.idx + 1
          }
        });
      }
    }]);
    return Matcher2;
  }();
  function findSentences(win, node, sentences) {
    sentences = canonicalizeSentences(sentences);
    if (sentences.length <= 0) {
      return null;
    }
    var scanner = new TextScanner(win, node);
    var buf = new CircularBuffer(sentences.map(function(sen) {
      return sen.length;
    }).reduce(function(x, y) {
      return Math.max(x, y);
    }));
    var matchers = [new Matcher(sentences[0], buf)];
    var posIdx = -1;
    while (true) {
      posIdx++;
      var pos = scanner.next();
      if (pos == null) {
        return null;
      }
      if (skipCharRe.test(textPosChar(pos))) {
        continue;
      }
      buf.push({
        pos,
        idx: posIdx
      });
      for (var i = 0; i < matchers.length; i++) {
        matchers[i].update();
      }
      var lastMatcher = matchers[matchers.length - 1];
      if (lastMatcher.matches.length == 0) {
        continue;
      }
      if (matchers.length == sentences.length) {
        break;
      }
      matchers.push(new Matcher(sentences[matchers.length], buf));
    }
    var matches2 = [];
    outerLoop:
      for (var _i = sentences.length - 1; _i >= 0; _i--) {
        var mm = matchers[_i].matches;
        if (matches2.length == 0) {
          matches2.push(mm[mm.length - 1]);
          continue;
        }
        var prev = matches2[matches2.length - 1];
        for (var j = mm.length - 1; j >= 0; j--) {
          var match = mm[j];
          if (prev.start.idx >= match.end.idx) {
            matches2.push(match);
            continue outerLoop;
          }
        }
        devAssert(false, "missing valid match");
      }
    var ret = [];
    for (var _i2 = matches2.length - 1; _i2 >= 0; _i2--) {
      var _match = matches2[_i2];
      ret.push({
        start: _match.start.pos,
        end: _match.end.pos
      });
    }
    return ret;
  }
  function markTextRangeList(win, ranges) {
    ranges = concatContinuousRanges(ranges);
    var marked = [];
    for (var i = 0; i < ranges.length; i++) {
      var r = ranges[i];
      markTextRange(win, r.start, r.end, ranges, i, marked);
    }
    return marked;
  }
  function concatContinuousRanges(ranges) {
    var ret = [];
    var prev = null;
    for (var i = 0; i < ranges.length; i++) {
      var r = ranges[i];
      if (prev && prev.end.node == r.start.node && prev.end.offset == r.start.offset) {
        prev.end = r.end;
        continue;
      }
      prev = r;
      ret.push(r);
      continue;
    }
    return ret;
  }
  function fixTextRangesWithRemovedText(pos, newText, from, ranges) {
    for (var i = from; i < ranges.length; i++) {
      var r = ranges[i];
      if (pos.node != r.start.node) {
        return;
      }
      r.start.node = newText;
      r.start.offset -= pos.offset;
      if (pos.node != r.end.node) {
        return;
      }
      r.end.node = newText;
      r.end.offset -= pos.offset;
    }
  }
  function markTextRange(win, start, end, ranges, idx, marked) {
    while (true) {
      if (start.node == end.node) {
        var newText = markSingleTextNode(win, start.node, start.offset, end.offset, marked);
        if (newText) {
          fixTextRangesWithRemovedText(end, newText, idx + 1, ranges);
        }
        return;
      }
      var next = nextTextNode(win, start.node);
      markSingleTextNode(win, start.node, start.offset, start.node.wholeText.length, marked);
      if (!next) {
        break;
      }
      start = {
        node: next,
        offset: 0
      };
    }
  }
  function markSingleTextNode(win, node, start, end, marked) {
    if (start >= end) {
      return null;
    }
    var doc = win.document;
    var parent = node.parentNode, text = node.wholeText;
    if (start > 0) {
      parent.insertBefore(doc.createTextNode(text.substring(0, start)), node);
    }
    var span = doc.createElement("span");
    span.appendChild(doc.createTextNode(text.substring(start, end)));
    parent.insertBefore(span, node);
    marked.push(span);
    var endText = null;
    if (end < text.length) {
      endText = doc.createTextNode(text.substring(end));
      parent.insertBefore(endText, node);
    }
    parent.removeChild(node);
    return endText;
  }
  function nextTextNode(win, textNode) {
    var leaving = true;
    var node = textNode;
    while (true) {
      if (node == null) {
        return null;
      }
      if (leaving) {
        var next = node.nextSibling;
        if (next) {
          node = next;
          leaving = false;
        } else {
          node = node.parentNode;
        }
        continue;
      }
      if (node instanceof win.Text) {
        return node;
      }
      if (!node.firstChild) {
        leaving = true;
      } else {
        node = node.firstChild;
      }
    }
  }
  var TextScanner = /* @__PURE__ */ function() {
    function TextScanner2(win, node) {
      _classCallCheck8(this, TextScanner2);
      this.win_ = win;
      this.node_ = node;
      this.textIdx_ = -1;
      this.child_ = null;
      if (node instanceof win.Text) {
        this.textIdx_ = 0;
      } else if (node instanceof win.Element) {
        var _computedStyle = computedStyle(win, node), display = _computedStyle.display;
        if (display == "none") {
          return;
        }
        var child = node.firstChild;
        if (child != null) {
          this.child_ = new TextScanner2(win, child);
        }
      }
    }
    _createClass7(TextScanner2, [{
      key: "next",
      value: function next() {
        if (this.textIdx_ >= 0) {
          return this.nextTextPos_();
        }
        while (this.child_ != null) {
          var pos = this.child_.next();
          if (pos != null) {
            return pos;
          }
          var sibling = this.child_.node_.nextSibling;
          this.child_ = sibling != null ? new TextScanner2(this.win_, sibling) : null;
        }
        return null;
      }
    }, {
      key: "nextTextPos_",
      value: function nextTextPos_() {
        var text = this.node_.wholeText;
        if (this.textIdx_ < text.length) {
          var idx = this.textIdx_;
          this.textIdx_++;
          return {
            node: this.node_,
            offset: idx
          };
        }
        return null;
      }
    }]);
    return TextScanner2;
  }();

  // src/experiments/index.js
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
  var TAG2 = "EXPERIMENTS";
  var LOCAL_STORAGE_KEY = "amp-experiment-toggles";
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isExperimentOn(win, experimentId) {
    var toggles = experimentToggles(win);
    return !!toggles[experimentId];
  }
  function experimentToggles(win) {
    var _win$AMP_CONFIG3, _win$AMP_CONFIG4;
    if (win[TOGGLES_WINDOW_PROPERTY]) {
      return win[TOGGLES_WINDOW_PROPERTY];
    }
    win[TOGGLES_WINDOW_PROPERTY] = map();
    var toggles = win[TOGGLES_WINDOW_PROPERTY];
    if (win.AMP_CONFIG) {
      for (var experimentId in win.AMP_CONFIG) {
        var frequency = win.AMP_CONFIG[experimentId];
        if (typeof frequency === "number" && frequency >= 0 && frequency <= 1) {
          toggles[experimentId] = Math.random() < frequency;
        }
      }
    }
    var allowedDocOptIn = (_win$AMP_CONFIG3 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG3["allow-doc-opt-in"];
    if (isArray(allowedDocOptIn) && allowedDocOptIn.length) {
      var meta = win.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
      if (meta) {
        var optedInExperiments = meta.getAttribute("content").split(",");
        for (var _iterator = _createForOfIteratorHelperLoose(optedInExperiments), _step; !(_step = _iterator()).done; ) {
          var experiment = _step.value;
          if (dev().assertArray(allowedDocOptIn).includes(experiment)) {
            toggles[experiment] = true;
          }
        }
      }
    }
    Object.assign(toggles, getExperimentToggles(win));
    var allowedUrlOptIn = (_win$AMP_CONFIG4 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG4["allow-url-opt-in"];
    if (isArray(allowedUrlOptIn) && allowedUrlOptIn.length) {
      var hash = win.location["originalHash"] || win.location.hash;
      var params = parseQueryString(hash);
      for (var _iterator2 = _createForOfIteratorHelperLoose(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
        var _experiment = _step2.value;
        var param = params["e-" + _experiment];
        if (param == "1") {
          toggles[_experiment] = true;
        }
        if (param == "0") {
          toggles[_experiment] = false;
        }
      }
    }
    return toggles;
  }
  function getExperimentToggles(win) {
    var _experimentsString;
    var experimentsString = "";
    try {
      if ("localStorage" in win) {
        experimentsString = win.localStorage.getItem(LOCAL_STORAGE_KEY);
      }
    } catch (_unused) {
      dev().warn(TAG2, "Failed to retrieve experiments from localStorage.");
    }
    var tokens = ((_experimentsString = experimentsString) == null ? void 0 : _experimentsString.split(/\s*,\s*/g)) || [];
    var toggles = map();
    for (var _iterator3 = _createForOfIteratorHelperLoose(tokens), _step3; !(_step3 = _iterator3()).done; ) {
      var token = _step3.value;
      if (!token) {
        continue;
      }
      if (token[0] == "-") {
        toggles[token.substr(1)] = false;
      } else {
        toggles[token] = true;
      }
    }
    return toggles;
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
  function moveLayoutRect(rect, dx, dy) {
    if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
      return rect;
    }
    return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
  }

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/core/document-ready.js
  function isDocumentReady(doc) {
    return doc.readyState != "loading" && doc.readyState != "uninitialized";
  }
  function onDocumentReady(doc, callback) {
    onDocumentState(doc, isDocumentReady, callback);
  }
  function onDocumentState(doc, stateFn, callback) {
    var ready = stateFn(doc);
    if (ready) {
      callback(doc);
    } else {
      var readyListener = function readyListener2() {
        if (stateFn(doc)) {
          if (!ready) {
            ready = true;
            callback(doc);
          }
          doc.removeEventListener("readystatechange", readyListener2);
        }
      };
      doc.addEventListener("readystatechange", readyListener);
    }
  }
  function whenDocumentReady(doc) {
    return new Promise(function(resolve) {
      onDocumentReady(doc, resolve);
    });
  }

  // extensions/amp-viewer-integration/0.1/highlight-handler.js
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
  var HIGHLIGHT_DISMISS = "highlightDismiss";
  var HIGHLIGHT_STATE = "highlightState";
  var PARAM_OLD_TOP_DISCREPANCY = "od";
  var PARAM_NEW_TOP_DISCREPANCY = "nd";
  var HIGHLIGHT_PARAM_LENGTH_LIMIT = 100 << 10;
  var NUM_SENTENCES_LIMIT = 15;
  var NUM_ALL_CHARS_LIMIT = 1500;
  var SCROLL_ANIMATION_HEIGHT = 500;
  var PAGE_TOP_MARGIN = 80;
  var TEXT_FRAGMENT_PREFIX = ":~:";
  function getHighlightParam(ampdoc) {
    var param = parseQueryString(ampdoc.win.location.hash)["highlight"];
    if (!param || param.length > HIGHLIGHT_PARAM_LENGTH_LIMIT) {
      return null;
    }
    var highlight = parseJson(param);
    var sens = highlight["s"];
    if (!(sens instanceof Array) || sens.length > NUM_SENTENCES_LIMIT) {
      return null;
    }
    var sum = 0;
    for (var i = 0; i < sens.length; i++) {
      var sen = sens[i];
      if (typeof sen != "string" || !sen) {
        return null;
      }
      sum += sen.length;
      if (sum > NUM_ALL_CHARS_LIMIT) {
        return null;
      }
    }
    var skipRendering = false;
    if (highlight["n"]) {
      skipRendering = true;
    }
    var skipScrollAnimation = false;
    if (highlight["na"]) {
      skipScrollAnimation = true;
    }
    return {
      sentences: sens,
      skipScrollAnimation,
      skipRendering
    };
  }
  var HighlightHandler = /* @__PURE__ */ function() {
    function HighlightHandler2(ampdoc, highlightInfo) {
      var _this = this;
      _classCallCheck9(this, HighlightHandler2);
      this.ampdoc_ = ampdoc;
      this.viewer_ = Services.viewerForDoc(ampdoc);
      this.viewport_ = Services.viewportForDoc(this.ampdoc_);
      this.highlightedNodes_ = null;
      if ("fragmentDirective" in document && isExperimentOn(ampdoc.win, "use-text-fragments-for-highlights")) {
        ampdoc.whenFirstVisible().then(function() {
          return _this.highlightUsingTextFragments_(highlightInfo);
        });
      } else {
        whenDocumentReady(ampdoc.win.document).then(function() {
          _this.initHighlight_(highlightInfo);
        });
      }
    }
    _createClass8(HighlightHandler2, [{
      key: "highlightUsingTextFragments_",
      value: function highlightUsingTextFragments_(highlightInfo) {
        var sentences = highlightInfo.sentences;
        if (!(sentences != null && sentences.length)) {
          return;
        }
        var fragment = sentences.map(function(text) {
          return "text=" + encodeURIComponent(text);
        }).join("&");
        this.updateUrlWithTextFragment_(fragment);
      }
    }, {
      key: "updateUrlWithTextFragment_",
      value: function updateUrlWithTextFragment_(fragment) {
        var hash = this.ampdoc_.win.location.hash;
        if (hash) {
          this.ampdoc_.win.location.replace(hash + TEXT_FRAGMENT_PREFIX + fragment);
        } else {
          this.ampdoc_.win.location.replace("#" + TEXT_FRAGMENT_PREFIX + fragment);
        }
      }
    }, {
      key: "sendHighlightState_",
      value: function sendHighlightState_(state, opt_params) {
        var params = dict({
          "state": state
        });
        for (var key in opt_params) {
          params[key] = opt_params[key];
        }
        this.viewer_.sendMessage(HIGHLIGHT_STATE, params);
      }
    }, {
      key: "findHighlightedNodes_",
      value: function findHighlightedNodes_(highlightInfo) {
        var win = this.ampdoc_.win;
        var sens = findSentences(win, this.ampdoc_.getBody(), highlightInfo.sentences);
        if (!sens) {
          return;
        }
        var nodes = markTextRangeList(win, sens);
        if (!nodes || nodes.length == 0) {
          return;
        }
        this.highlightedNodes_ = nodes;
      }
    }, {
      key: "onVisibleOnce",
      value: function onVisibleOnce(handler) {
        var _this2 = this;
        handler = once(handler);
        this.ampdoc_.onVisibilityChanged(function() {
          if (_this2.ampdoc_.getVisibilityState() != "visible") {
            return;
          }
          handler();
        });
      }
    }, {
      key: "initHighlight_",
      value: function initHighlight_(highlightInfo) {
        var _this3 = this;
        if (this.ampdoc_.win.document.querySelector('script[id="amp-access"]')) {
          this.sendHighlightState_("has_amp_access");
          return;
        }
        this.findHighlightedNodes_(highlightInfo);
        if (!this.highlightedNodes_) {
          this.sendHighlightState_("not_found");
          return;
        }
        var scrollTop = this.calcTopToCenterHighlightedNodes_();
        this.sendHighlightState_("found", dict({
          "scroll": scrollTop
        }));
        if (highlightInfo.skipRendering) {
          return;
        }
        for (var i = 0; i < this.highlightedNodes_.length; i++) {
          var n = this.highlightedNodes_[i];
          setStyles(n, {
            backgroundColor: "#fcff00",
            color: "#000"
          });
        }
        var visibility = this.ampdoc_.getVisibilityState();
        if (!highlightInfo.skipScrollAnimation) {
          if (visibility == "visible") {
            this.animateScrollToTop_(scrollTop);
          } else {
            this.scrollToAnimationStart_(scrollTop);
            this.onVisibleOnce(function() {
              _this3.animateScrollToTop_(_this3.calcTopToCenterHighlightedNodes_());
            });
          }
        } else {
          if (visibility == "visible") {
            this.scrollToTopWitoutAnimation_(scrollTop);
          } else {
            this.viewport_.setScrollTop(scrollTop);
            this.onVisibleOnce(function() {
              _this3.scrollToTopWitoutAnimation_(_this3.calcTopToCenterHighlightedNodes_());
            });
          }
        }
        listenOnce(this.ampdoc_.getBody(), "click", this.dismissHighlight_.bind(this));
      }
    }, {
      key: "calcTopToCenterHighlightedNodes_",
      value: function calcTopToCenterHighlightedNodes_() {
        var nodes = this.highlightedNodes_;
        if (!nodes) {
          return 0;
        }
        var viewport = this.viewport_;
        var minTop = Number.MAX_VALUE;
        var maxBottom = 0;
        var paddingTop = viewport.getPaddingTop();
        for (var i = 0; i < nodes.length; i++) {
          var _moveLayoutRect = moveLayoutRect(viewport.getLayoutRect(nodes[i]), 0, -paddingTop), bottom = _moveLayoutRect.bottom, top = _moveLayoutRect.top;
          minTop = Math.min(minTop, top);
          maxBottom = Math.max(maxBottom, bottom);
        }
        if (minTop >= maxBottom) {
          return 0;
        }
        var height = viewport.getHeight() - paddingTop;
        var pos = (maxBottom + minTop - height) / 2;
        if (pos > minTop - PAGE_TOP_MARGIN) {
          pos = minTop - PAGE_TOP_MARGIN;
        }
        return pos > 0 ? pos : 0;
      }
    }, {
      key: "scrollToTopWitoutAnimation_",
      value: function scrollToTopWitoutAnimation_(top) {
        this.sendHighlightState_("auto_scroll");
        this.viewport_.setScrollTop(top);
        this.sendHighlightState_("shown");
      }
    }, {
      key: "scrollToAnimationStart_",
      value: function scrollToAnimationStart_(top) {
        var start = Math.max(0, top - SCROLL_ANIMATION_HEIGHT);
        this.viewport_.setScrollTop(start);
      }
    }, {
      key: "mayAdjustTop_",
      value: function mayAdjustTop_(oldTop) {
        var newTop = this.calcTopToCenterHighlightedNodes_();
        var current = this.viewport_.getScrollTop();
        if (current == newTop && current == oldTop) {
          return null;
        }
        var shownParam = dict();
        if (current != newTop) {
          this.viewport_.setScrollTop(newTop);
          shownParam[PARAM_NEW_TOP_DISCREPANCY] = current - newTop;
        }
        if (current != oldTop) {
          shownParam[PARAM_OLD_TOP_DISCREPANCY] = current - oldTop;
        }
        return shownParam;
      }
    }, {
      key: "animateScrollToTop_",
      value: function animateScrollToTop_(top) {
        var _this4 = this;
        this.scrollToAnimationStart_(top);
        var sentinel = this.ampdoc_.win.document.createElement("div");
        setInitialDisplay(sentinel, "block");
        setStyles(sentinel, {
          "position": "absolute",
          "top": Math.floor(top) + "px",
          "height": "1px",
          "left": "0",
          "width": "1px",
          "pointer-events": "none"
        });
        var body = this.ampdoc_.getBody();
        body.appendChild(sentinel);
        this.sendHighlightState_("auto_scroll");
        this.viewport_.animateScrollIntoView(sentinel).then(function() {
          body.removeChild(sentinel);
          _this4.sendHighlightState_("shown", _this4.mayAdjustTop_(top));
        });
      }
    }, {
      key: "setupMessaging",
      value: function setupMessaging(messaging) {
        messaging.registerHandler(HIGHLIGHT_DISMISS, this.dismissHighlight_.bind(this));
      }
    }, {
      key: "dismissHighlight_",
      value: function dismissHighlight_() {
        if (!this.highlightedNodes_) {
          return;
        }
        for (var i = 0; i < this.highlightedNodes_.length; i++) {
          resetStyles(this.highlightedNodes_[i], ["backgroundColor", "color"]);
        }
      }
    }]);
    return HighlightHandler2;
  }();

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

  // extensions/amp-viewer-integration/0.1/keyboard-handler.js
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
  var eventProperties = [
    "key",
    "code",
    "location",
    "ctrlKey",
    "shiftKey",
    "altKey",
    "metaKey",
    "repeat",
    "isComposing",
    "charCode",
    "keyCode",
    "which"
  ];
  var KeyboardHandler = /* @__PURE__ */ function() {
    function KeyboardHandler2(win, messaging) {
      _classCallCheck10(this, KeyboardHandler2);
      this.win = win;
      this.messaging_ = messaging;
      this.listenForKeyboardEvents_();
    }
    _createClass9(KeyboardHandler2, [{
      key: "listenForKeyboardEvents_",
      value: function listenForKeyboardEvents_() {
        var handleEvent = this.handleEvent_.bind(this);
        listen(this.win, "keydown", handleEvent);
        listen(this.win, "keypress", handleEvent);
        listen(this.win, "keyup", handleEvent);
      }
    }, {
      key: "handleEvent_",
      value: function handleEvent_(e) {
        if (isHandledByEventTarget(e)) {
          return;
        }
        this.forwardEventToViewer_(e);
      }
    }, {
      key: "forwardEventToViewer_",
      value: function forwardEventToViewer_(e) {
        this.messaging_.sendRequest(e.type, getKeyboardEventInit(e), false);
      }
    }]);
    return KeyboardHandler2;
  }();
  function isHandledByEventTarget(e) {
    if (e.defaultPrevented) {
      return true;
    }
    if (e.key == Keys.ESCAPE) {
      return false;
    }
    switch (e.target.nodeName) {
      case "INPUT":
        return e.target.type != "checkbox" || e.key == Keys.SPACE;
      case "TEXTAREA":
      case "BUTTON":
      case "SELECT":
      case "OPTION":
        return true;
    }
    return e.target.hasAttribute && e.target.hasAttribute("contenteditable");
  }
  function getKeyboardEventInit(e) {
    var copiedEvent = dict();
    eventProperties.forEach(function(eventProperty) {
      if (e[eventProperty] !== void 0) {
        copiedEvent[eventProperty] = e[eventProperty];
      }
    });
    return copiedEvent;
  }

  // extensions/amp-viewer-integration/0.1/messaging/messaging.js
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
  var TAG3 = "amp-viewer-messaging";
  var CHANNEL_OPEN_MSG = "channelOpen";
  var HANDSHAKE_POLL_MSG = "handshake-poll";
  var APP = "__AMPHTML__";
  var MessageType = {
    REQUEST: "q",
    RESPONSE: "s"
  };
  function parseMessage(message) {
    if (typeof message != "string") {
      return message;
    }
    if (message.charAt(0) != "{") {
      return null;
    }
    try {
      return JSON.parse(message);
    } catch (e) {
      return null;
    }
  }
  var WindowPortEmulator = /* @__PURE__ */ function() {
    function WindowPortEmulator2(win, origin, target) {
      _classCallCheck11(this, WindowPortEmulator2);
      this.win_ = win;
      this.origin_ = origin;
      this.target_ = target;
    }
    _createClass10(WindowPortEmulator2, [{
      key: "addEventListener",
      value: function addEventListener(eventType, handler) {
        var _this = this;
        this.win_.addEventListener("message", function(event) {
          if (event.origin == _this.origin_ && event.source == _this.target_) {
            handler(event);
          }
        });
      }
    }, {
      key: "postMessage",
      value: function postMessage(data) {
        var targetOrigin = this.origin_ === "null" ? "*" : this.origin_;
        this.target_.postMessage(data, targetOrigin);
      }
    }, {
      key: "start",
      value: function start() {
      }
    }]);
    return WindowPortEmulator2;
  }();
  var Messaging = /* @__PURE__ */ function() {
    function Messaging2(win, port, opt_isWebview, opt_token, opt_verifyToken) {
      _classCallCheck11(this, Messaging2);
      this.win_ = win;
      this.port_ = port;
      this.isWebview_ = !!opt_isWebview;
      this.token_ = opt_token || null;
      this.verifyToken_ = !!opt_verifyToken;
      this.requestIdCounter_ = 0;
      this.waitingForResponse_ = {};
      this.messageHandlers_ = {};
      this.defaultHandler_ = null;
      this.port_.addEventListener("message", this.handleMessage_.bind(this));
      this.port_.start();
    }
    _createClass10(Messaging2, [{
      key: "registerHandler",
      value: function registerHandler(messageName, requestHandler) {
        this.messageHandlers_[messageName] = requestHandler;
      }
    }, {
      key: "unregisterHandler",
      value: function unregisterHandler(messageName) {
        delete this.messageHandlers_[messageName];
      }
    }, {
      key: "setDefaultHandler",
      value: function setDefaultHandler(requestHandler) {
        this.defaultHandler_ = requestHandler;
      }
    }, {
      key: "handleMessage_",
      value: function handleMessage_(event) {
        var message = parseMessage(event.data);
        if (!message || message.app !== APP) {
          return;
        }
        if (this.token_ && this.verifyToken_ && message.messagingToken !== this.token_) {
          this.logError_(TAG3 + ": handleMessage_ error: ", "invalid token");
          return;
        }
        if (message.type === MessageType.REQUEST) {
          this.handleRequest_(message);
        } else if (message.type === MessageType.RESPONSE) {
          this.handleResponse_(message);
        }
      }
    }, {
      key: "sendRequest",
      value: function sendRequest(messageName, messageData, awaitResponse) {
        var _this2 = this;
        var requestId = ++this.requestIdCounter_;
        var promise = void 0;
        if (awaitResponse) {
          promise = new Promise(function(resolve, reject) {
            _this2.waitingForResponse_[requestId] = {
              resolve,
              reject
            };
          });
        }
        this.sendMessage_({
          app: APP,
          requestid: requestId,
          type: MessageType.REQUEST,
          name: messageName,
          data: messageData,
          rsvp: awaitResponse
        });
        return promise;
      }
    }, {
      key: "sendResponse_",
      value: function sendResponse_(requestId, messageName, messageData) {
        this.sendMessage_({
          app: APP,
          requestid: requestId,
          type: MessageType.RESPONSE,
          name: messageName,
          data: messageData
        });
      }
    }, {
      key: "sendResponseError_",
      value: function sendResponseError_(requestId, messageName, reason) {
        var errString = this.errorToString_(reason);
        this.logError_(TAG3 + ": sendResponseError_, message name: " + messageName, errString);
        this.sendMessage_({
          app: APP,
          requestid: requestId,
          type: MessageType.RESPONSE,
          name: messageName,
          data: null,
          error: errString
        });
      }
    }, {
      key: "sendMessage_",
      value: function sendMessage_(message) {
        var finalMessage = Object.assign(message, {});
        if (this.token_ && !this.verifyToken_) {
          finalMessage.messagingToken = this.token_;
        }
        this.port_.postMessage(this.isWebview_ ? JSON.stringify(finalMessage) : finalMessage);
      }
    }, {
      key: "handleRequest_",
      value: function handleRequest_(message) {
        var _this3 = this;
        var handler = this.messageHandlers_[message.name];
        if (!handler) {
          handler = this.defaultHandler_;
        }
        if (!handler) {
          var error = new Error("Cannot handle request because no default handler is set!");
          error.args = message.name;
          throw error;
        }
        var promise = handler(message.name, message.data, !!message.rsvp);
        if (message.rsvp) {
          var requestId = message.requestid;
          if (!promise) {
            this.sendResponseError_(requestId, message.name, new Error("no response"));
            throw new Error("expected response but none given: " + message.name);
          }
          promise.then(function(data) {
            _this3.sendResponse_(requestId, message.name, data);
          }, function(reason) {
            _this3.sendResponseError_(requestId, message.name, reason);
          });
        }
      }
    }, {
      key: "handleResponse_",
      value: function handleResponse_(message) {
        var requestId = message.requestid;
        var pending = this.waitingForResponse_[requestId];
        if (pending) {
          delete this.waitingForResponse_[requestId];
          if (message.error) {
            this.logError_(TAG3 + ": handleResponse_ error: ", message.error);
            pending.reject(new Error("Request " + message.name + " failed: " + message.error));
          } else {
            pending.resolve(message.data);
          }
        }
      }
    }, {
      key: "logError_",
      value: function logError_(state, opt_data) {
        if (!this.win_) {
          return;
        }
        var stateStr = "amp-messaging-error-logger: " + state;
        var dataStr = " data: " + this.errorToString_(opt_data);
        stateStr += dataStr;
        this.win_["viewerState"] = stateStr;
      }
    }, {
      key: "errorToString_",
      value: function errorToString_(err) {
        return err ? err.message ? err.message : String(err) : "unknown error";
      }
    }], [{
      key: "initiateHandshakeWithDocument",
      value: function initiateHandshakeWithDocument(target, opt_token) {
        return new Promise(function(resolve) {
          var intervalRef = setInterval(function() {
            var channel = new MessageChannel();
            var pollMessage = {
              app: APP,
              name: HANDSHAKE_POLL_MSG
            };
            target.postMessage(pollMessage, "*", [channel.port2]);
            var port = channel.port1;
            var listener = function listener2(event) {
              var message = parseMessage(event.data);
              if (!message) {
                return;
              }
              if (message.app === APP && message.name === CHANNEL_OPEN_MSG) {
                clearInterval(intervalRef);
                port.removeEventListener("message", listener2);
                var messaging = new Messaging2(null, port, false, opt_token, true);
                messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
                resolve(messaging);
              }
            };
            port.addEventListener("message", listener);
            port.start();
          }, 1e3);
        });
      }
    }, {
      key: "waitForHandshakeFromDocument",
      value: function waitForHandshakeFromDocument(source, target, origin, opt_token, opt_cdnProxyRegex) {
        return new Promise(function(resolve) {
          var listener = function listener2(event) {
            var message = parseMessage(event.data);
            if (!message) {
              return;
            }
            if ((event.origin == origin || opt_cdnProxyRegex && opt_cdnProxyRegex.test(event.origin)) && (!event.source || event.source == target) && message.app === APP && message.name === CHANNEL_OPEN_MSG) {
              source.removeEventListener("message", listener2);
              var port = new WindowPortEmulator(source, event.origin, target);
              var messaging = new Messaging2(null, port, false, opt_token, true);
              messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
              resolve(messaging);
            }
          };
          source.addEventListener("message", listener);
        });
      }
    }]);
    return Messaging2;
  }();

  // extensions/amp-viewer-integration/0.1/touch-handler.js
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
  var EVENT_PROPERTIES = ["altKey", "charCode", "ctrlKey", "detail", "eventPhase", "key", "layerX", "layerY", "metaKey", "pageX", "pageY", "returnValue", "shiftKey", "timeStamp", "type", "which"];
  var TOUCH_PROPERTIES = ["clientX", "clientY", "force", "identifier", "pageX", "pageY", "radiusX", "radiusY", "screenX", "screenY"];
  var SCROLL_LOCK = "scrollLock";
  var TouchHandler = /* @__PURE__ */ function() {
    function TouchHandler2(win, messaging) {
      _classCallCheck12(this, TouchHandler2);
      this.win = win;
      this.messaging_ = messaging;
      this.scrollLocked_ = false;
      this.unlistenHandlers_ = [];
      messaging.registerHandler(SCROLL_LOCK, this.scrollLockHandler_.bind(this));
      this.listenForTouchEvents_();
    }
    _createClass11(TouchHandler2, [{
      key: "listenForTouchEvents_",
      value: function listenForTouchEvents_() {
        var handleEvent = this.handleEvent_.bind(this);
        var doc = this.win.document;
        var options = {
          capture: false,
          passive: !this.scrollLocked_
        };
        this.unlistenHandlers_.push(listen(doc, "touchstart", handleEvent, options), listen(doc, "touchend", handleEvent, options), listen(doc, "touchmove", handleEvent, options));
      }
    }, {
      key: "unlisten_",
      value: function unlisten_() {
        this.unlistenHandlers_.forEach(function(unlisten) {
          return unlisten();
        });
        this.unlistenHandlers_.length = 0;
      }
    }, {
      key: "handleEvent_",
      value: function handleEvent_(e) {
        switch (e.type) {
          case "touchstart":
          case "touchend":
          case "touchmove":
            this.forwardEvent_(e);
            break;
          default:
            return;
        }
      }
    }, {
      key: "forwardEvent_",
      value: function forwardEvent_(e) {
        if (e != null && e.shouldViewerCancelPropagation) {
          e.stopImmediatePropagation();
          return;
        }
        if (e && e.type) {
          var msg = this.copyTouchEvent_(e);
          this.messaging_.sendRequest(e.type, msg, false);
        }
        if (this.scrollLocked_ && e.cancelable) {
          e.preventDefault();
        }
      }
    }, {
      key: "copyTouchEvent_",
      value: function copyTouchEvent_(e) {
        var copiedEvent = this.copyProperties_(e, EVENT_PROPERTIES);
        if (e.touches) {
          copiedEvent["touches"] = this.copyTouches_(e.touches);
        }
        if (e.changedTouches) {
          copiedEvent["changedTouches"] = this.copyTouches_(e.changedTouches);
        }
        return copiedEvent;
      }
    }, {
      key: "copyTouches_",
      value: function copyTouches_(touchList) {
        var copiedTouches = [];
        for (var i = 0; i < touchList.length; i++) {
          copiedTouches.push(this.copyProperties_(touchList[i], TOUCH_PROPERTIES));
        }
        return copiedTouches;
      }
    }, {
      key: "copyProperties_",
      value: function copyProperties_(o, properties) {
        var copy = dict();
        for (var i = 0; i < properties.length; i++) {
          var p = properties[i];
          if (o[p] !== void 0) {
            copy[p] = o[p];
          }
        }
        return copy;
      }
    }, {
      key: "scrollLockHandler_",
      value: function scrollLockHandler_(type, payload, awaitResponse) {
        this.scrollLocked_ = !!payload;
        this.unlisten_();
        this.listenForTouchEvents_();
        return awaitResponse ? Promise.resolve({}) : void 0;
      }
    }]);
    return TouchHandler2;
  }();

  // src/core/data-structures/lru-cache.js
  function _classCallCheck13(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties12(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass12(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties12(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties12(Constructor, staticProps);
    return Constructor;
  }
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck13(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass12(LruCache2, [{
      key: "has",
      value: function has(key) {
        return !!this.cache_[key];
      }
    }, {
      key: "get",
      value: function get(key) {
        var cacheable = this.cache_[key];
        if (cacheable) {
          cacheable.access = ++this.access_;
          return cacheable.payload;
        }
        return void 0;
      }
    }, {
      key: "put",
      value: function put(key, payload) {
        if (!this.has(key)) {
          this.size_++;
        }
        this.cache_[key] = {
          payload,
          access: this.access_
        };
        this.evict_();
      }
    }, {
      key: "evict_",
      value: function evict_() {
        if (this.size_ <= this.capacity_) {
          return;
        }
        var cache2 = this.cache_;
        var oldest = this.access_ + 1;
        var oldestKey;
        for (var key in cache2) {
          var access = cache2[key].access;
          if (access < oldest) {
            oldest = access;
            oldestKey = key;
          }
        }
        if (oldestKey !== void 0) {
          delete cache2[oldestKey];
          this.size_--;
        }
      }
    }]);
    return LruCache2;
  }();

  // src/url.js
  var SERVING_TYPE_PREFIX = dict({
    "c": true,
    "v": true,
    "a": true,
    "ad": true
  });
  var a;
  var cache;
  var AMP_JS_PARAMS_REGEX = /[?&]amp_js[^&]*/;
  var AMP_GSA_PARAMS_REGEX = /[?&]amp_gsa[^&]*/;
  var AMP_R_PARAMS_REGEX = /[?&]amp_r[^&]*/;
  var AMP_KIT_PARAMS_REGEX = /[?&]amp_kit[^&]*/;
  var GOOGLE_EXPERIMENT_PARAMS_REGEX = /[?&]usqp[^&]*/;
  function parseUrlDeprecated(url, opt_nocache) {
    if (!a) {
      a = self.document.createElement("a");
      cache = false ? null : self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new LruCache(100));
    }
    return parseUrlWithA(a, url, opt_nocache ? null : cache);
  }
  function parseUrlWithA(a2, url, opt_cache) {
    if (false) {
      a2.href = "";
      return new URL(url, a2.href);
    }
    if (opt_cache && opt_cache.has(url)) {
      return opt_cache.get(url);
    }
    a2.href = url;
    if (!a2.protocol) {
      a2.href = a2.href;
    }
    var info = {
      href: a2.href,
      protocol: a2.protocol,
      host: a2.host,
      hostname: a2.hostname,
      port: a2.port == "0" ? "" : a2.port,
      pathname: a2.pathname,
      search: a2.search,
      hash: a2.hash,
      origin: null
    };
    if (info.pathname[0] !== "/") {
      info.pathname = "/" + info.pathname;
    }
    if (info.protocol == "http:" && info.port == 80 || info.protocol == "https:" && info.port == 443) {
      info.port = "";
      info.host = info.hostname;
    }
    var origin;
    if (a2.origin && a2.origin != "null") {
      origin = a2.origin;
    } else if (info.protocol == "data:" || !info.host) {
      origin = info.href;
    } else {
      origin = info.protocol + "//" + info.host;
    }
    info.origin = origin;
    var frozen = getMode().test && Object.freeze ? Object.freeze(info) : info;
    if (opt_cache) {
      opt_cache.put(url, frozen);
    }
    return frozen;
  }
  function isProxyOrigin(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return urls.cdnProxyRegex.test(url.origin);
  }
  function removeAmpJsParamsFromSearch(urlSearch) {
    if (!urlSearch || urlSearch == "?") {
      return "";
    }
    var search = urlSearch.replace(AMP_JS_PARAMS_REGEX, "").replace(AMP_GSA_PARAMS_REGEX, "").replace(AMP_R_PARAMS_REGEX, "").replace(AMP_KIT_PARAMS_REGEX, "").replace(GOOGLE_EXPERIMENT_PARAMS_REGEX, "").replace(/^[?&]/, "");
    return search ? "?" + search : "";
  }
  function getSourceUrl(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    if (!isProxyOrigin(url)) {
      return url.href;
    }
    var path = url.pathname.split("/");
    var prefix = path[1];
    userAssert(SERVING_TYPE_PREFIX[prefix], "Unknown path prefix in url %s", url.href);
    var domainOrHttpsSignal = path[2];
    var origin = domainOrHttpsSignal == "s" ? "https://" + decodeURIComponent(path[3]) : "http://" + decodeURIComponent(domainOrHttpsSignal);
    userAssert(origin.indexOf(".") > 0, "Expected a . in origin %s", origin);
    path.splice(1, domainOrHttpsSignal == "s" ? 3 : 2);
    return origin + path.join("/") + removeAmpJsParamsFromSearch(url.search) + (url.hash || "");
  }

  // extensions/amp-viewer-integration/0.1/amp-viewer-integration.js
  function _classCallCheck14(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties13(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass13(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties13(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties13(Constructor, staticProps);
    return Constructor;
  }
  var TAG4 = "amp-viewer-integration";
  var APP2 = "__AMPHTML__";
  var RequestNames = {
    CHANNEL_OPEN: "channelOpen",
    UNLOADED: "unloaded"
  };
  var AmpViewerIntegration = /* @__PURE__ */ function() {
    function AmpViewerIntegration2(win) {
      _classCallCheck14(this, AmpViewerIntegration2);
      this.win = win;
      this.isWebView_ = false;
      this.isHandShakePoll_ = false;
      this.highlightHandler_ = null;
    }
    _createClass13(AmpViewerIntegration2, [{
      key: "init",
      value: function init() {
        var _this = this;
        dev().fine(TAG4, "handshake init()");
        var ampdoc = getAmpdoc(this.win.document);
        var viewer = Services.viewerForDoc(ampdoc);
        this.isWebView_ = viewer.getParam("webview") == "1";
        this.isHandShakePoll_ = viewer.hasCapability("handshakepoll");
        var messagingToken = viewer.getParam("messagingToken");
        var origin = viewer.getParam("origin") || "";
        if (!this.isWebView_ && !origin) {
          return resolvedPromise();
        }
        var viewport = Services.viewportForDoc(ampdoc);
        viewport.createFixedLayer(FixedLayer);
        if (this.isWebView_ || this.isHandShakePoll_) {
          var source = isIframed(this.win) ? this.win.parent : null;
          return this.webviewPreHandshakePromise_(source, origin).then(function(receivedPort) {
            return _this.openChannelAndStart_(viewer, ampdoc, origin, new Messaging(_this.win, receivedPort, _this.isWebView_, messagingToken));
          });
        }
        var highlightInfo = getHighlightParam(ampdoc);
        if (highlightInfo) {
          this.highlightHandler_ = new HighlightHandler(ampdoc, highlightInfo);
        }
        var port = new WindowPortEmulator(this.win, origin, this.win.parent);
        return this.openChannelAndStart_(viewer, ampdoc, origin, new Messaging(this.win, port, this.isWebView_, messagingToken));
      }
    }, {
      key: "webviewPreHandshakePromise_",
      value: function webviewPreHandshakePromise_(source, origin) {
        var _this2 = this;
        return new Promise(function(resolve) {
          var unlisten = listen(_this2.win, "message", function(e) {
            dev().fine(TAG4, "AMPDOC got a pre-handshake message:", e.type, getData(e));
            var data = parseMessage(getData(e));
            if (!data) {
              return;
            }
            if (e.origin === origin && e.source === source && data.app == APP2 && data.name == "handshake-poll") {
              if (_this2.isWebView_ && (!e.ports || !e.ports.length)) {
                throw new Error("Did not receive communication port from the Viewer!");
              }
              var port = e.ports && e.ports.length > 0 ? e.ports[0] : new WindowPortEmulator(_this2.win, origin, _this2.win.parent);
              resolve(port);
              unlisten();
            }
          });
        });
      }
    }, {
      key: "openChannelAndStart_",
      value: function openChannelAndStart_(viewer, ampdoc, origin, messaging) {
        var _this3 = this;
        dev().fine(TAG4, "Send a handshake request");
        var ampdocUrl = ampdoc.getUrl();
        var srcUrl = getSourceUrl(ampdocUrl);
        return messaging.sendRequest(RequestNames.CHANNEL_OPEN, dict({
          "url": ampdocUrl,
          "sourceUrl": srcUrl
        }), true).then(function() {
          dev().fine(TAG4, "Channel has been opened!");
          _this3.setup_(messaging, viewer, origin);
        });
      }
    }, {
      key: "setup_",
      value: function setup_(messaging, viewer, origin) {
        messaging.setDefaultHandler(function(type, payload, awaitResponse) {
          return viewer.receiveMessage(type, payload, awaitResponse);
        });
        viewer.setMessageDeliverer(messaging.sendRequest.bind(messaging), origin);
        listenOnce(this.win, "unload", this.handleUnload_.bind(this, messaging));
        if (viewer.hasCapability("swipe") || viewer.hasCapability("touch")) {
          this.initTouchHandler_(messaging);
        }
        if (viewer.hasCapability("keyboard")) {
          this.initKeyboardHandler_(messaging);
        }
        if (viewer.hasCapability("focus-rect")) {
          this.initFocusHandler_(messaging);
        }
        if (this.highlightHandler_ != null) {
          this.highlightHandler_.setupMessaging(messaging);
        }
      }
    }, {
      key: "handleUnload_",
      value: function handleUnload_(messaging) {
        return messaging.sendRequest(RequestNames.UNLOADED, dict(), true);
      }
    }, {
      key: "initFocusHandler_",
      value: function initFocusHandler_(messaging) {
        new FocusHandler(this.win, messaging);
      }
    }, {
      key: "initTouchHandler_",
      value: function initTouchHandler_(messaging) {
        new TouchHandler(this.win, messaging);
      }
    }, {
      key: "initKeyboardHandler_",
      value: function initKeyboardHandler_(messaging) {
        new KeyboardHandler(this.win, messaging);
      }
    }]);
    return AmpViewerIntegration2;
  }();
  AMP.extension(TAG4, "0.1", function(AMP2) {
    new AmpViewerIntegration(AMP2.win).init();
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-viewer-integration-0.1.max.js.map
