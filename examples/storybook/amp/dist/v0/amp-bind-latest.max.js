(self.AMP=self.AMP||[]).push({n:"amp-bind",ev:"0.1",l:true,v:"2106040012001",m:0,f:(function(AMP,_){

(() => {
  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
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

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
  }
  function includes(string, substring, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + substring.length > string.length) {
      return false;
    }
    return string.indexOf(substring, start) !== -1;
  }

  // src/core/types/object/index.js
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
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;
  function isObject(value) {
    return toString_.call(value) === "[object Object]";
  }
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
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
  }
  function ownProperty(obj, key) {
    if (hasOwn(obj, key)) {
      return obj[key];
    } else {
      return void 0;
    }
  }
  function deepMerge(target, source, depth) {
    if (depth === void 0) {
      depth = 10;
    }
    var seen = [];
    var queue = [];
    queue.push({
      t: target,
      s: source,
      d: 0
    });
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), d = _queue$shift.d, s = _queue$shift.s, t = _queue$shift.t;
      if (seen.includes(s)) {
        throw new Error("Source object has a circular reference.");
      }
      seen.push(s);
      if (t === s) {
        continue;
      }
      if (d > depth) {
        Object.assign(t, s);
        continue;
      }
      for (var _i = 0, _Object$keys = Object.keys(s); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var newValue = s[key];
        if (hasOwn(t, key)) {
          var oldValue = t[key];
          if (isObject(newValue) && isObject(oldValue)) {
            queue.push({
              t: oldValue,
              s: newValue,
              d: d + 1
            });
            continue;
          }
        }
        t[key] = newValue;
      }
    }
    return target;
  }
  function getValueForExpr(obj, expr) {
    if (expr == ".") {
      return obj;
    }
    var parts = expr.split(".");
    var value = obj;
    for (var _iterator = _createForOfIteratorHelperLoose(parts), _step; !(_step = _iterator()).done; ) {
      var part = _step.value;
      if (part && value && value[part] !== void 0 && typeof value == "object" && hasOwn(value, part)) {
        value = value[part];
        continue;
      }
      value = void 0;
      break;
    }
    return value;
  }

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
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
  function isUserErrorMessage(message) {
    return message.indexOf(USER_ERROR_SENTINEL) >= 0;
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

  // src/core/error/index.js
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

  // src/internal-version.js
  function internalRuntimeVersion() {
    return "2106040012001";
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

  // src/core/types/function/index.js
  function debounce(win, callback, minInterval) {
    var locker = 0;
    var timestamp = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      var remaining = minInterval - (win.Date.now() - timestamp);
      if (remaining > 0) {
        locker = win.setTimeout(waiter, remaining);
      } else {
        fire(nextCallArgs);
      }
    }
    return function() {
      timestamp = win.Date.now();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      nextCallArgs = args;
      if (!locker) {
        locker = win.setTimeout(waiter, minInterval);
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }

  // src/service.js
  function registerServiceBuilder(win, id, constructor, opt_instantiate) {
    win = getTopWindow(win);
    registerServiceInternal(win, win, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(win, id);
    }
  }
  function registerServiceBuilderForDoc(nodeOrDoc, id, constructor, opt_instantiate) {
    var ampdoc = getAmpdoc(nodeOrDoc);
    var holder = getAmpdocServiceHolder(ampdoc);
    registerServiceInternal(holder, ampdoc, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(holder, id);
    }
  }
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
  function registerServiceInternal(holder, context, id, ctor, opt_override, opt_sharedInstance) {
    var services = getServices(holder);
    var s = services[id];
    if (!s) {
      s = services[id] = {
        obj: null,
        promise: null,
        resolve: null,
        reject: null,
        context: null,
        ctor: null,
        sharedInstance: opt_sharedInstance || false
      };
    }
    if (!opt_override && s.ctor) {
      return;
    }
    s.ctor = ctor;
    s.context = context;
    s.sharedInstance = opt_sharedInstance || false;
    if (s.resolve) {
      getServiceInternal(holder, id);
    }
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

  // src/experiments/index.js
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isCanary(win) {
    var _win$AMP_CONFIG;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.canary);
  }
  function getBinaryType(win) {
    var _win$AMP_CONFIG2;
    return ((_win$AMP_CONFIG2 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG2.type) || "unknown";
  }
  function experimentTogglesOrNull(win) {
    return win[TOGGLES_WINDOW_PROPERTY] || null;
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
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/layout.js
  var LayoutPriority = {
    CONTENT: 0,
    METADATA: 1,
    ADS: 2,
    BACKGROUND: 3
  };

  // extensions/amp-bind/0.1/amp-bind-macro.js
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var AmpBindMacro = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpBindMacro2, _AMP$BaseElement);
    var _super = _createSuper(AmpBindMacro2);
    function AmpBindMacro2() {
      _classCallCheck2(this, AmpBindMacro2);
      return _super.apply(this, arguments);
    }
    _createClass(AmpBindMacro2, [{
      key: "getLayoutPriority",
      value: function getLayoutPriority() {
        return LayoutPriority.METADATA;
      }
    }, {
      key: "isAlwaysFixed",
      value: function isAlwaysFixed() {
        return true;
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(unusedLayout) {
        return true;
      }
    }, {
      key: "renderOutsideViewport",
      value: function renderOutsideViewport() {
        return true;
      }
    }, {
      key: "getName_",
      value: function getName_() {
        return "<amp-bind-macro> " + (this.element.getAttribute("id") || "<unknown id>");
      }
    }]);
    return AmpBindMacro2;
  }(AMP.BaseElement);

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

  // src/core/constants/action-constants.js
  var RAW_OBJECT_ARGS_KEY = "__AMP_OBJECT_STRING__";
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

  // third_party/css-escape/css-escape.js
  var regex = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
  function escaper(match, nil, dash, hexEscape, chars) {
    if (chars) {
      return chars;
    }
    if (nil) {
      return "\uFFFD";
    }
    if (hexEscape) {
      return match.slice(0, -1) + "\\" + match.slice(-1).charCodeAt(0).toString(16) + " ";
    }
    return "\\" + match;
  }
  function cssEscape(value) {
    return String(value).replace(regex, escaper);
  }

  // src/core/dom/css-selectors.js
  function escapeCssSelectorIdent(ident) {
    if (false) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
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
  function closestAncestorElementBySelector(element, selector) {
    return element.closest ? element.closest(selector) : closest(element, function(el) {
      return matches(el, selector);
    });
  }

  // src/dom.js
  var UPGRADE_TO_CUSTOMELEMENT_PROMISE = "__AMP_UPG_PRM";
  var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = "__AMP_UPG_RES";
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function isJsonScriptTag(element) {
    return element.tagName == "SCRIPT" && element.hasAttribute("type") && element.getAttribute("type").toUpperCase() == "APPLICATION/JSON";
  }
  function isAmpElement(element) {
    var tag = element.tagName;
    return tag.startsWith("AMP-") && !(tag == "AMP-STICKY-AD-TOP-PADDING" || tag == "AMP-BODY");
  }
  function whenUpgradedToCustomElement(element) {
    devAssert(isAmpElement(element), "element is not AmpElement");
    if (element.createdCallback) {
      return Promise.resolve(element);
    }
    if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
      var deferred = new Deferred();
      element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = deferred.promise;
      element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = deferred.resolve;
    }
    return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
  }

  // src/service/extension-script.js
  function calculateScriptBaseUrl(location, opt_isLocalDev) {
    if (opt_isLocalDev) {
      var prefix = location.protocol + "//" + location.host;
      if (location.protocol == "about:" || location.protocol == "blob:" || location.protocol == "data:") {
        prefix = "";
      }
      return prefix + "/dist";
    }
    return urls.cdn;
  }
  function calculateEntryPointScriptUrl(location, entryPoint, isLocalDev, opt_rtv) {
    var fileExtension = getMode().esm ? ".mjs" : ".js";
    var base = calculateScriptBaseUrl(location, isLocalDev);
    if (isLocalDev) {
      return base + "/" + entryPoint + fileExtension;
    }
    if (opt_rtv) {
      return base + "/rtv/" + getMode().rtvVersion + "/" + entryPoint + fileExtension;
    }
    return base + "/" + entryPoint + fileExtension;
  }
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

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck4(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass3(LruCache2, [{
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
  var SOURCE_ORIGIN_PARAM = "__amp_source_origin";
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
  function isSecureUrlDeprecated(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return url.protocol == "https:" || url.hostname == "localhost" || url.hostname == "127.0.0.1" || endsWith(url.hostname, ".localhost");
  }
  function assertHttpsUrl(urlString, elementContext, sourceName) {
    if (sourceName === void 0) {
      sourceName = "source";
    }
    userAssert(urlString != null, "%s %s must be available", elementContext, sourceName);
    var theUrlString = urlString;
    userAssert(isSecureUrlDeprecated(theUrlString) || /^(\/\/)/.test(theUrlString), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', elementContext, sourceName, theUrlString);
    return theUrlString;
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
  function getSourceOrigin(url) {
    return parseUrlDeprecated(getSourceUrl(url)).origin;
  }
  function resolveRelativeUrl(relativeUrlString, baseUrl) {
    if (typeof baseUrl == "string") {
      baseUrl = parseUrlDeprecated(baseUrl);
    }
    if (typeof URL == "function") {
      return new URL(relativeUrlString, baseUrl.href).toString();
    }
    return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
  }
  function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
    if (typeof baseUrl == "string") {
      baseUrl = parseUrlDeprecated(baseUrl);
    }
    relativeUrlString = relativeUrlString.replace(/\\/g, "/");
    var relativeUrl = parseUrlDeprecated(relativeUrlString);
    if (relativeUrlString.toLowerCase().startsWith(relativeUrl.protocol)) {
      return relativeUrl.href;
    }
    if (relativeUrlString.startsWith("//")) {
      return baseUrl.protocol + relativeUrlString;
    }
    if (relativeUrlString.startsWith("/")) {
      return baseUrl.origin + relativeUrlString;
    }
    return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, "/") + relativeUrlString;
  }
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query = parseQueryString(parsedUrl.search);
    userAssert(!(SOURCE_ORIGIN_PARAM in query), "Source origin is not allowed in %s", url);
  }

  // src/batched-json.js
  var UrlReplacementPolicy = {
    NONE: 0,
    OPT_IN: 1,
    ALL: 2
  };
  function batchFetchJsonFor(ampdoc, element, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$expr = _options.expr, expr = _options$expr === void 0 ? "." : _options$expr, _options$urlReplaceme = _options.urlReplacement, urlReplacement = _options$urlReplaceme === void 0 ? UrlReplacementPolicy.NONE : _options$urlReplaceme, _options$refresh = _options.refresh, refresh = _options$refresh === void 0 ? false : _options$refresh, _options$xssiPrefix = _options.xssiPrefix, xssiPrefix = _options$xssiPrefix === void 0 ? void 0 : _options$xssiPrefix;
    assertHttpsUrl(element.getAttribute("src"), element);
    var xhr = Services.batchedXhrFor(ampdoc.win);
    return requestForBatchFetch(element, urlReplacement, refresh).then(function(data) {
      return xhr.fetchJson(data.xhrUrl, data.fetchOpt);
    }).then(function(res) {
      return Services.xhrFor(ampdoc.win).xssiJson(res, xssiPrefix);
    }).then(function(data) {
      if (data == null) {
        throw new Error("Response is undefined.");
      }
      return getValueForExpr(data, expr || ".");
    }).catch(function(err) {
      throw user().createError("failed fetching JSON data", err);
    });
  }
  function requestForBatchFetch(element, replacement, refresh) {
    var url = element.getAttribute("src");
    var urlReplacements = Services.urlReplacementsForDoc(element);
    var promise = replacement >= UrlReplacementPolicy.OPT_IN ? urlReplacements.expandUrlAsync(url) : Promise.resolve(url);
    return promise.then(function(xhrUrl) {
      if (replacement == UrlReplacementPolicy.OPT_IN) {
        var invalid = urlReplacements.collectDisallowedVarsSync(element);
        if (invalid.length > 0) {
          throw user().createError("URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. " + ('Please add data-amp-replace="' + invalid.join(" ") + '" to the ') + ("<" + element.tagName + "> element. See https://bit.ly/amp-var-subs."));
        }
      }
      var fetchOpt = {};
      if (element.hasAttribute("credentials")) {
        fetchOpt.credentials = element.getAttribute("credentials");
      }
      if (refresh) {
        fetchOpt.cache = "reload";
      }
      return {
        "xhrUrl": xhrUrl,
        "fetchOpt": fetchOpt
      };
    });
  }

  // src/event-helper.js
  var LOAD_FAILURE_PREFIX = "Failed to load:";
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
  function getData(event) {
    return event.data;
  }
  function getDetail(event) {
    return event.detail;
  }
  function isLoadErrorMessage(message) {
    return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
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
  function deepEquals(a2, b, depth) {
    if (depth === void 0) {
      depth = 5;
    }
    if (!isFinite(depth) || depth < 0) {
      throw new Error("Invalid depth: " + depth);
    }
    if (a2 === b) {
      return true;
    }
    var queue = [{
      a: a2,
      b,
      depth
    }];
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), _a = _queue$shift.a, _b = _queue$shift.b, _depth = _queue$shift.depth;
      if (_depth > 0) {
        if (typeof _a !== typeof _b) {
          return false;
        } else if (isArray(_a) && isArray(_b)) {
          if (_a.length !== _b.length) {
            return false;
          }
          for (var i = 0; i < _a.length; i++) {
            queue.push({
              a: _a[i],
              b: _b[i],
              depth: _depth - 1
            });
          }
          continue;
        } else if (_a && _b && typeof _a === "object" && typeof _b === "object") {
          var keysA = Object.keys(_a);
          var keysB = Object.keys(_b);
          if (keysA.length !== keysB.length) {
            return false;
          }
          for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
            var k = _keysA[_i];
            queue.push({
              a: _a[k],
              b: _b[k],
              depth: _depth - 1
            });
          }
          continue;
        }
      }
      if (_a !== _b) {
        return false;
      }
    }
    return true;
  }

  // extensions/amp-bind/0.1/amp-state.js
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
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var AmpState = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpState2, _AMP$BaseElement);
    var _super = _createSuper2(AmpState2);
    function AmpState2(element) {
      var _this;
      _classCallCheck5(this, AmpState2);
      _this = _super.call(this, element);
      _this.localData_ = void 0;
      _this.loadingDeferred_ = new Deferred();
      return _this;
    }
    _createClass4(AmpState2, [{
      key: "getLayoutPriority",
      value: function getLayoutPriority() {
        return LayoutPriority.METADATA;
      }
    }, {
      key: "isAlwaysFixed",
      value: function isAlwaysFixed() {
        return true;
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(unusedLayout) {
        return true;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        toggle(this.element, false);
        this.element.setAttribute("aria-hidden", "true");
        var element = this.element;
        if (element.hasAttribute("overridable")) {
          Services.bindForDocOrNull(element).then(function(bind) {
            devAssert(bind);
            bind.addOverridableKey(element.getAttribute("id"));
          });
        }
        this.parseAndUpdate();
        if (this.element.hasAttribute("src")) {
          this.fetchAndUpdate_(true);
        }
        this.registerAction("refresh", function() {
          userAssert(_this2.element.hasAttribute("src"), `Can't refresh <amp-state> without "src" attribute.`);
          _this2.fetchAndUpdate_(false, true);
        });
      }
    }, {
      key: "mutatedAttributesCallback",
      value: function mutatedAttributesCallback(mutations) {
        if (!this.getAmpDoc().hasBeenVisible()) {
          var TAG7 = this.getName_();
          dev().error(TAG7, "ampdoc must be visible before mutation.");
          return;
        }
        if (mutations["src"] !== void 0 && this.element.hasAttribute("src")) {
          this.fetchAndUpdate_(false);
        }
      }
    }, {
      key: "renderOutsideViewport",
      value: function renderOutsideViewport() {
        return true;
      }
    }, {
      key: "parseAndUpdate",
      value: function parseAndUpdate() {
        if (this.localData_ === void 0) {
          this.localData_ = this.parse_();
          if (this.localData_ !== null) {
            return this.updateState_(this.localData_, true);
          }
        }
        return resolvedPromise();
      }
    }, {
      key: "parse_",
      value: function parse_() {
        var _this3 = this;
        var children = this.element.children;
        if (children.length == 0) {
          return null;
        }
        var TAG7 = this.getName_();
        if (children.length != 1) {
          this.user().error(TAG7, "Should contain exactly one <script> child.");
          return null;
        }
        var firstChild = children[0];
        if (!isJsonScriptTag(firstChild)) {
          this.user().error(TAG7, 'State should be in a <script> tag with type="application/json".');
          return null;
        }
        return tryParseJson(firstChild.textContent, function(e) {
          _this3.user().error(TAG7, "Failed to parse state. Is it valid JSON?", e);
        });
      }
    }, {
      key: "fetch_",
      value: function fetch_(ampdoc, policy, opt_refresh) {
        return batchFetchJsonFor(ampdoc, this.element, {
          urlReplacement: policy,
          refresh: opt_refresh
        });
      }
    }, {
      key: "prepareAndSendFetch_",
      value: function prepareAndSendFetch_(isInit, opt_refresh) {
        var _this4 = this;
        var element = this.element;
        var ampdoc = this.getAmpDoc();
        var src = element.getAttribute("src");
        var isCorsFetch = getSourceOrigin(src) !== getSourceOrigin(ampdoc.win.location);
        var policy = isCorsFetch && !isInit ? UrlReplacementPolicy.OPT_IN : UrlReplacementPolicy.ALL;
        return this.fetch_(ampdoc, policy, opt_refresh).catch(function(error) {
          var event = error ? createCustomEvent(_this4.win, "amp-state.error", dict({
            "response": error.response
          })) : null;
          var actions = Services.actionServiceForDoc(element);
          actions.trigger(element, "fetch-error", event, ActionTrust.LOW);
        });
      }
    }, {
      key: "fetchAndUpdate_",
      value: function fetchAndUpdate_(isInit, opt_refresh) {
        var _this5 = this;
        if (!isInit) {
          this.loadingDeferred_ = new Deferred();
        }
        var loadingDeferred = this.loadingDeferred_;
        return this.getAmpDoc().whenFirstVisible().then(function() {
          return _this5.prepareAndSendFetch_(isInit, opt_refresh);
        }).then(function(json) {
          return _this5.updateState_(json, isInit);
        }).then(function() {
          return loadingDeferred.resolve();
        }).catch(function(err) {
          loadingDeferred.resolve();
          throw err;
        });
      }
    }, {
      key: "getFetchingPromise",
      value: function getFetchingPromise() {
        if (!this.element.hasAttribute("src")) {
          return resolvedPromise();
        }
        return this.loadingDeferred_.promise;
      }
    }, {
      key: "updateState_",
      value: function updateState_(json, isInit) {
        if (json === void 0 || json === null) {
          return resolvedPromise();
        }
        var id = userAssert(this.element.id, "<amp-state> must have an id.");
        return Services.bindForDocOrNull(this.element).then(function(bind) {
          devAssert(bind);
          var state = map();
          state[id] = json;
          bind.setState(state, {
            skipEval: isInit,
            skipAmpState: !isInit
          });
        });
      }
    }, {
      key: "getName_",
      value: function getName_() {
        return "<amp-state> " + (this.element.getAttribute("id") || "<unknown id>");
      }
    }]);
    return AmpState2;
  }(AMP.BaseElement);

  // src/core/constants/amp-events.js
  var AmpEvents = {
    DOM_UPDATE: "amp:dom-update",
    FORM_DIRTINESS_CHANGE: "amp:form-dirtiness-change",
    FORM_VALUE_CHANGE: "amp:form-value-change",
    VISIBILITY_CHANGE: "amp:visibilitychange",
    ATTACHED: "amp:attached",
    STUBBED: "amp:stubbed",
    LOAD_START: "amp:load-start",
    LOAD_END: "amp:load-end",
    ERROR: "amp:error",
    SIZE_CHANGED: "amp:size-changed",
    UNLOAD: "amp:unload"
  };

  // extensions/amp-bind/0.1/bind-events.js
  var BindEvents = {
    INITIALIZE: "amp:bind:initialize",
    RESCAN_TEMPLATE: "amp:bind:rescan-template",
    SET_STATE: "amp:bind:setState"
  };

  // src/core/dom/srcset.js
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
  var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
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
      _classCallCheck6(this, Srcset2);
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
    _createClass5(Srcset2, [{
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

  // extensions/amp-bind/0.1/bind-validator.js
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
  var TAG = "amp-bind";
  var GLOBAL_PROPERTY_RULES = {
    "class": {
      denylistedValueRegex: "(^|\\W)i-amphtml-"
    },
    "hidden": null,
    "text": null
  };
  var AMP_PROPERTY_RULES = {
    "width": null,
    "height": null
  };
  var ELEMENT_RULES = createElementRules_();
  var URL_PROPERTIES = {
    "src": true,
    "srcset": true,
    "href": true,
    "xlink:href": true
  };
  var BindValidator = /* @__PURE__ */ function() {
    function BindValidator2(allowUrlBindings) {
      _classCallCheck7(this, BindValidator2);
      this.allowUrlBindings_ = allowUrlBindings;
    }
    _createClass6(BindValidator2, [{
      key: "canBind",
      value: function canBind(tag, property) {
        return this.rulesForTagAndProperty_(tag, property) !== void 0;
      }
    }, {
      key: "isResultValid",
      value: function isResultValid(tag, property, value) {
        var rules = this.rulesForTagAndProperty_(tag, property);
        if (rules && rules.alternativeName) {
          rules = this.rulesForTagAndProperty_(tag, rules.alternativeName);
        }
        if (rules === void 0) {
          return false;
        }
        if (rules === null) {
          return true;
        }
        if (value && ownProperty(URL_PROPERTIES, property)) {
          var urls2;
          if (property === "srcset") {
            var srcset;
            try {
              srcset = parseSrcset(value);
            } catch (e) {
              user().error(TAG, "Failed to parse srcset: ", e);
              return false;
            }
            urls2 = srcset.getUrls();
          } else {
            urls2 = [value];
          }
          for (var i = 0; i < urls2.length; i++) {
            if (!this.isUrlValid_(urls2[i], rules)) {
              return false;
            }
          }
        }
        var _rules = rules, denylistedValueRegex = _rules.denylistedValueRegex;
        if (value && denylistedValueRegex) {
          var re = new RegExp(denylistedValueRegex, "i");
          if (re.test(value)) {
            return false;
          }
        }
        return true;
      }
    }, {
      key: "isUrlValid_",
      value: function isUrlValid_(url, rules) {
        if (url) {
          if (/__amp_source_origin/.test(url)) {
            return false;
          }
          var allowedProtocols = rules.allowedProtocols;
          if (allowedProtocols) {
            var re = /^([^:\/?#.]+):[\s\S]*$/;
            var match = re.exec(url);
            if (match !== null) {
              var protocol = match[1].toLowerCase().trim();
              if (!hasOwn(allowedProtocols, protocol)) {
                return false;
              }
            }
          }
        }
        return true;
      }
    }, {
      key: "rulesForTagAndProperty_",
      value: function rulesForTagAndProperty_(tag, property) {
        if (property.startsWith("aria-")) {
          return null;
        }
        if (ownProperty(URL_PROPERTIES, property) && !this.allowUrlBindings_) {
          return void 0;
        }
        var globalRules = ownProperty(GLOBAL_PROPERTY_RULES, property);
        if (globalRules !== void 0) {
          return globalRules;
        }
        var ampPropertyRules = ownProperty(AMP_PROPERTY_RULES, property);
        if (tag.startsWith("AMP-") && ampPropertyRules !== void 0) {
          return ampPropertyRules;
        }
        var tagRules = ownProperty(ELEMENT_RULES, tag);
        if (tagRules) {
          return tagRules[property];
        }
        return void 0;
      }
    }]);
    return BindValidator2;
  }();
  function createElementRules_() {
    var rules = {
      "AMP-AUDIO": {
        "album": null,
        "artist": null,
        "artwork": null,
        "controlsList": null,
        "loop": null,
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "title": null
      },
      "AMP-AUTOCOMPLETE": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        }
      },
      "AMP-BASE-CAROUSEL": {
        "advance-count": null,
        "auto-advance-count": null,
        "auto-advance-interval": null,
        "auto-advance-loops": null,
        "auto-advance": null,
        "horizontal": null,
        "initial-index": null,
        "loop": null,
        "mixed-length": null,
        "side-slide-count": null,
        "slide": null,
        "snap-align": null,
        "snap-by": null,
        "snap": null,
        "visible-count": null
      },
      "AMP-BRIGHTCOVE": {
        "data-account": null,
        "data-embed": null,
        "data-player": null,
        "data-player-id": null,
        "data-playlist-id": null,
        "data-video-id": null
      },
      "AMP-CAROUSEL": {
        "slide": null
      },
      "AMP-DATE-PICKER": {
        "max": null,
        "min": null,
        "src": {
          "allowedProtocols": {
            "https": true
          }
        }
      },
      "AMP-GOOGLE-DOCUMENT-EMBED": {
        "src": null,
        "title": null
      },
      "AMP-IFRAME": {
        "src": null,
        "title": null
      },
      "AMP-IMG": {
        "alt": null,
        "attribution": null,
        "src": {
          "allowedProtocols": {
            "data": true,
            "http": true,
            "https": true
          }
        },
        "srcset": {
          "alternativeName": "src"
        }
      },
      "AMP-LIGHTBOX": {
        "open": null
      },
      "AMP-LIST": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "state": null,
        "is-layout-container": null
      },
      "AMP-RENDER": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        }
      },
      "AMP-SELECTOR": {
        "disabled": null,
        "selected": null
      },
      "AMP-STATE": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        }
      },
      "AMP-TIMEAGO": {
        "datetime": null,
        "title": null
      },
      "AMP-TWITTER": {
        "data-tweetid": null
      },
      "AMP-VIDEO": {
        "album": null,
        "alt": null,
        "artist": null,
        "artwork": null,
        "attribution": null,
        "controls": null,
        "controlslist": null,
        "loop": null,
        "poster": null,
        "preload": null,
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "title": null
      },
      "AMP-YOUTUBE": {
        "data-videoid": null
      },
      "A": {
        "href": {
          "allowedProtocols": {
            "ftp": true,
            "geo": true,
            "http": true,
            "https": true,
            "mailto": true,
            "maps": true,
            "bip": true,
            "bbmi": true,
            "chrome": true,
            "itms-services": true,
            "facetime": true,
            "fb-me": true,
            "fb-messenger": true,
            "intent": true,
            "line": true,
            "skype": true,
            "sms": true,
            "snapchat": true,
            "tel": true,
            "tg": true,
            "threema": true,
            "twitter": true,
            "viber": true,
            "webcal": true,
            "web+mastodon": true,
            "wh": true,
            "whatsapp": true
          }
        }
      },
      "BUTTON": {
        "disabled": null,
        "type": null,
        "value": null
      },
      "DETAILS": {
        "open": null
      },
      "FIELDSET": {
        "disabled": null
      },
      "IMAGE": {
        "xlink:href": {
          "allowedProtocols": {
            "http": true,
            "https": true
          }
        }
      },
      "INPUT": {
        "accept": null,
        "accesskey": null,
        "autocomplete": null,
        "checked": null,
        "disabled": null,
        "height": null,
        "inputmode": null,
        "max": null,
        "maxlength": null,
        "min": null,
        "minlength": null,
        "multiple": null,
        "pattern": null,
        "placeholder": null,
        "readonly": null,
        "required": null,
        "selectiondirection": null,
        "size": null,
        "spellcheck": null,
        "step": null,
        "type": {
          denylistedValueRegex: "(^|\\s)(button|image|)(\\s|$)"
        },
        "value": null,
        "width": null
      },
      "OPTION": {
        "disabled": null,
        "label": null,
        "selected": null,
        "value": null
      },
      "OPTGROUP": {
        "disabled": null,
        "label": null
      },
      "SECTION": {
        "data-expand": null,
        "expanded": null
      },
      "SELECT": {
        "autofocus": null,
        "disabled": null,
        "multiple": null,
        "required": null,
        "size": null
      },
      "SOURCE": {
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "type": null
      },
      "TRACK": {
        "label": null,
        "src": {
          "allowedProtocols": {
            "https": true
          }
        },
        "srclang": null
      },
      "TEXTAREA": {
        "autocomplete": null,
        "autofocus": null,
        "cols": null,
        "disabled": null,
        "maxlength": null,
        "minlength": null,
        "pattern": null,
        "placeholder": null,
        "readonly": null,
        "required": null,
        "rows": null,
        "selectiondirection": null,
        "selectionend": null,
        "selectionstart": null,
        "spellcheck": null,
        "wrap": null,
        "defaulttext": null
      }
    };
    return rules;
  }

  // src/style-installer.js
  var bodyMadeVisible = false;
  function makeBodyVisibleRecovery(doc) {
    devAssert(doc.defaultView, "Passed in document must have a defaultView");
    if (bodyMadeVisible) {
      return;
    }
    bodyMadeVisible = true;
    setBodyVisibleStyles(doc);
  }
  function setBodyVisibleStyles(doc) {
    setStyles(dev().assertElement(doc.body), {
      opacity: 1,
      visibility: "visible",
      "animation": "none"
    });
  }

  // src/core/data-structures/priority-queue.js
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
  var PriorityQueue = /* @__PURE__ */ function() {
    function PriorityQueue2() {
      _classCallCheck8(this, PriorityQueue2);
      this.queue_ = [];
    }
    _createClass7(PriorityQueue2, [{
      key: "peek",
      value: function peek() {
        var l = this.length;
        if (!l) {
          return null;
        }
        return this.queue_[l - 1].item;
      }
    }, {
      key: "enqueue",
      value: function enqueue(item, priority) {
        if (isNaN(priority)) {
          throw new Error("Priority must not be NaN.");
        }
        var i = this.binarySearch_(priority);
        this.queue_.splice(i, 0, {
          item,
          priority
        });
      }
    }, {
      key: "binarySearch_",
      value: function binarySearch_(target) {
        var i = -1;
        var lo = 0;
        var hi = this.length;
        while (lo <= hi) {
          i = Math.floor((lo + hi) / 2);
          if (i === this.length) {
            break;
          }
          if (this.queue_[i].priority < target) {
            lo = i + 1;
          } else if (i > 0 && this.queue_[i - 1].priority >= target) {
            hi = i - 1;
          } else {
            break;
          }
        }
        return i;
      }
    }, {
      key: "forEach",
      value: function forEach(callback) {
        var index = this.length;
        while (index--) {
          callback(this.queue_[index].item);
        }
      }
    }, {
      key: "dequeue",
      value: function dequeue() {
        if (!this.length) {
          return null;
        }
        return this.queue_.pop().item;
      }
    }, {
      key: "length",
      get: function get() {
        return this.queue_.length;
      }
    }]);
    return PriorityQueue2;
  }();

  // src/chunk.js
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf3(o, p);
  }
  function _createSuper3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct3();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf3(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf3(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn3(this, result);
    };
  }
  function _possibleConstructorReturn3(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized3(self2);
  }
  function _assertThisInitialized3(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct3() {
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
  function _getPrototypeOf3(o) {
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
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
  var TAG2 = "CHUNK";
  var deactivated = /nochunking=1/.test(self.location.hash);
  var allowLongTasks = false;
  var resolved2 = resolvedPromise();
  function chunkServiceForDoc(elementOrAmpDoc) {
    registerServiceBuilderForDoc(elementOrAmpDoc, "chunk", Chunks);
    return getServiceForDoc(elementOrAmpDoc, "chunk");
  }
  function chunk(elementOrAmpDoc, fn, priority) {
    if (deactivated) {
      resolved2.then(fn);
      return;
    }
    var service = chunkServiceForDoc(elementOrAmpDoc);
    service.run(fn, priority);
  }
  var ChunkPriority = {
    HIGH: 20,
    LOW: 10,
    BACKGROUND: 0
  };
  var TaskState = {
    NOT_RUN: "not_run",
    RUN: "run"
  };
  var Task = /* @__PURE__ */ function() {
    function Task2(fn) {
      _classCallCheck9(this, Task2);
      this.state = TaskState.NOT_RUN;
      this.fn_ = fn;
    }
    _createClass8(Task2, [{
      key: "runTask_",
      value: function runTask_(idleDeadline) {
        if (this.state == TaskState.RUN) {
          return;
        }
        this.state = TaskState.RUN;
        try {
          this.fn_(idleDeadline);
        } catch (e) {
          this.onTaskError_(e);
          throw e;
        }
      }
    }, {
      key: "getName_",
      value: function getName_() {
        return this.fn_.displayName || this.fn_.name;
      }
    }, {
      key: "onTaskError_",
      value: function onTaskError_(unusedError) {
      }
    }, {
      key: "immediateTriggerCondition_",
      value: function immediateTriggerCondition_() {
        return false;
      }
    }, {
      key: "useRequestIdleCallback_",
      value: function useRequestIdleCallback_() {
        return false;
      }
    }]);
    return Task2;
  }();
  var StartupTask = /* @__PURE__ */ function(_Task) {
    _inherits3(StartupTask2, _Task);
    var _super = _createSuper3(StartupTask2);
    function StartupTask2(fn, win, chunks) {
      var _this;
      _classCallCheck9(this, StartupTask2);
      _this = _super.call(this, fn);
      _this.chunks_ = chunks;
      return _this;
    }
    _createClass8(StartupTask2, [{
      key: "onTaskError_",
      value: function onTaskError_(unusedError) {
        makeBodyVisibleRecovery(self.document);
      }
    }, {
      key: "immediateTriggerCondition_",
      value: function immediateTriggerCondition_() {
        return this.isVisible_();
      }
    }, {
      key: "useRequestIdleCallback_",
      value: function useRequestIdleCallback_() {
        return this.chunks_.coreReady_;
      }
    }, {
      key: "isVisible_",
      value: function isVisible_() {
        return this.chunks_.ampdoc.isVisible();
      }
    }]);
    return StartupTask2;
  }(Task);
  var Chunks = /* @__PURE__ */ function() {
    function Chunks2(ampDoc) {
      var _this2 = this;
      _classCallCheck9(this, Chunks2);
      this.ampdoc = ampDoc;
      this.win_ = ampDoc.win;
      this.tasks_ = new PriorityQueue();
      this.boundExecute_ = this.execute_.bind(this);
      this.durationOfLastExecution_ = 0;
      this.supportsInputPending_ = !!(this.win_.navigator.scheduling && this.win_.navigator.scheduling.isInputPending);
      this.scheduledImmediateInvocation_ = false;
      this.bodyIsVisible_ = this.win_.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
      this.win_.addEventListener("message", function(e) {
        if (getData(e) == "amp-macro-task") {
          _this2.execute_(null);
        }
      });
      this.coreReady_ = false;
      Services.viewerPromiseForDoc(ampDoc).then(function() {
        _this2.coreReady_ = true;
      });
      ampDoc.onVisibilityChanged(function() {
        if (ampDoc.isVisible()) {
          _this2.schedule_();
        }
      });
    }
    _createClass8(Chunks2, [{
      key: "run",
      value: function run(fn, priority) {
        var t = new Task(fn);
        this.enqueueTask_(t, priority);
      }
    }, {
      key: "runForStartup",
      value: function runForStartup(fn) {
        var t = new StartupTask(fn, this.win_, this);
        this.enqueueTask_(t, Number.POSITIVE_INFINITY);
      }
    }, {
      key: "enqueueTask_",
      value: function enqueueTask_(task, priority) {
        this.tasks_.enqueue(task, priority);
        this.schedule_();
      }
    }, {
      key: "nextTask_",
      value: function nextTask_(opt_dequeue) {
        var t = this.tasks_.peek();
        while (t && t.state !== TaskState.NOT_RUN) {
          this.tasks_.dequeue();
          t = this.tasks_.peek();
        }
        if (t && opt_dequeue) {
          this.tasks_.dequeue();
        }
        return t;
      }
    }, {
      key: "execute_",
      value: function execute_(idleDeadline) {
        var _this3 = this;
        var t = this.nextTask_(true);
        if (!t) {
          this.scheduledImmediateInvocation_ = false;
          this.durationOfLastExecution_ = 0;
          return false;
        }
        var before;
        try {
          before = Date.now();
          t.runTask_(idleDeadline);
        } finally {
          resolved2.then().then().then().then().then().then().then().then().then(function() {
            _this3.scheduledImmediateInvocation_ = false;
            _this3.durationOfLastExecution_ += Date.now() - before;
            dev().fine(TAG2, t.getName_(), "Chunk duration", Date.now() - before, _this3.durationOfLastExecution_);
            _this3.schedule_();
          });
        }
        return true;
      }
    }, {
      key: "executeAsap_",
      value: function executeAsap_(idleDeadline) {
        var _this4 = this;
        if (!allowLongTasks && this.bodyIsVisible_ && (this.supportsInputPending_ ? this.win_.navigator.scheduling.isInputPending() : this.durationOfLastExecution_ > 5)) {
          this.durationOfLastExecution_ = 0;
          this.requestMacroTask_();
          return;
        }
        resolved2.then(function() {
          _this4.boundExecute_(idleDeadline);
        });
      }
    }, {
      key: "schedule_",
      value: function schedule_() {
        if (this.scheduledImmediateInvocation_) {
          return;
        }
        var nextTask = this.nextTask_();
        if (!nextTask) {
          return;
        }
        if (nextTask.immediateTriggerCondition_()) {
          this.scheduledImmediateInvocation_ = true;
          this.executeAsap_(null);
          return;
        }
        if (nextTask.useRequestIdleCallback_() && this.win_.requestIdleCallback) {
          onIdle(this.win_, 15, 2e3, this.boundExecute_);
          return;
        }
        this.requestMacroTask_();
      }
    }, {
      key: "requestMacroTask_",
      value: function requestMacroTask_() {
        this.win_.postMessage("amp-macro-task", "*");
      }
    }]);
    return Chunks2;
  }();
  function onIdle(win, minimumTimeRemaining, timeout, fn) {
    var startTime = Date.now();
    function rIC(info) {
      if (info.timeRemaining() < minimumTimeRemaining) {
        var remainingTimeout = timeout - (Date.now() - startTime);
        if (remainingTimeout <= 0 || info.didTimeout) {
          dev().fine(TAG2, "Timed out", timeout, info.didTimeout);
          fn(info);
        } else {
          dev().fine(TAG2, "Rescheduling with", remainingTimeout, info.timeRemaining());
          win.requestIdleCallback(rIC, {
            timeout: remainingTimeout
          });
        }
      } else {
        dev().fine(TAG2, "Running idle callback with ", minimumTimeRemaining);
        fn(info);
      }
    }
    win.requestIdleCallback(rIC, {
      timeout
    });
  }

  // src/core/data-structures/signals.js
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
  var Signals = /* @__PURE__ */ function() {
    function Signals2() {
      _classCallCheck10(this, Signals2);
      this.map_ = map();
      this.promiseMap_ = null;
    }
    _createClass9(Signals2, [{
      key: "get",
      value: function get(name) {
        var v = this.map_[name];
        return v == null ? null : v;
      }
    }, {
      key: "whenSignal",
      value: function whenSignal(name) {
        var _this$promiseMap_;
        var promiseStruct = (_this$promiseMap_ = this.promiseMap_) == null ? void 0 : _this$promiseMap_[name];
        if (!promiseStruct) {
          var result = this.map_[name];
          if (result != null) {
            var promise = typeof result == "number" ? Promise.resolve(result) : Promise.reject(result);
            promiseStruct = {
              promise
            };
          } else {
            promiseStruct = new Deferred();
          }
          if (!this.promiseMap_) {
            this.promiseMap_ = map();
          }
          this.promiseMap_[name] = promiseStruct;
        }
        return promiseStruct.promise;
      }
    }, {
      key: "signal",
      value: function signal(name, opt_time) {
        var _this$promiseMap_2;
        if (this.map_[name] != null) {
          return;
        }
        var time = opt_time != null ? opt_time : Date.now();
        this.map_[name] = time;
        var promiseStruct = (_this$promiseMap_2 = this.promiseMap_) == null ? void 0 : _this$promiseMap_2[name];
        if (promiseStruct != null && promiseStruct.resolve) {
          promiseStruct.resolve(time);
          promiseStruct.resolve = void 0;
          promiseStruct.reject = void 0;
        }
      }
    }, {
      key: "rejectSignal",
      value: function rejectSignal(name, error) {
        var _this$promiseMap_3;
        if (this.map_[name] != null) {
          return;
        }
        this.map_[name] = error;
        var promiseStruct = (_this$promiseMap_3 = this.promiseMap_) == null ? void 0 : _this$promiseMap_3[name];
        if (promiseStruct != null && promiseStruct.reject) {
          promiseStruct.reject(error);
          promiseStruct.promise.catch(function() {
          });
          promiseStruct.resolve = void 0;
          promiseStruct.reject = void 0;
        }
      }
    }, {
      key: "reset",
      value: function reset(name) {
        var _this$promiseMap_4;
        if (this.map_[name]) {
          delete this.map_[name];
        }
        var promiseStruct = (_this$promiseMap_4 = this.promiseMap_) == null ? void 0 : _this$promiseMap_4[name];
        if (promiseStruct && !promiseStruct.resolve) {
          delete this.promiseMap_[name];
        }
      }
    }]);
    return Signals2;
  }();

  // src/web-worker/amp-worker.js
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
  var TAG3 = "web-worker";
  function invokeWebWorker(win, method, opt_args, opt_localWin) {
    if (!win.Worker) {
      return Promise.reject("Worker not supported in window.");
    }
    registerServiceBuilder(win, "amp-worker", AmpWorker);
    var worker = getService(win, "amp-worker");
    return worker.sendMessage_(method, opt_args || [], opt_localWin);
  }
  var AmpWorker = /* @__PURE__ */ function() {
    function AmpWorker2(win) {
      var _this = this;
      _classCallCheck11(this, AmpWorker2);
      this.win_ = win;
      this.xhr_ = Services.xhrFor(win);
      var loc = win.location;
      if (getMode().test && win.testLocation) {
        loc = win.testLocation;
      }
      var useLocal = getMode().localDev || getMode().test;
      var useRtvVersion = !useLocal;
      var url = calculateEntryPointScriptUrl(loc, "ww", useLocal, useRtvVersion);
      dev().fine(TAG3, "Fetching web worker from", url);
      this.worker_ = null;
      this.fetchPromise_ = this.xhr_.fetchText(url, {
        ampCors: false,
        bypassInterceptorForDev: getMode().localDev
      }).then(function(res) {
        return res.text();
      }).then(function(text) {
        var sourceMappingUrl = url + ".map";
        text = text.replace(/^\/\/# sourceMappingURL=.*/, "//# sourceMappingURL=" + sourceMappingUrl);
        var blob = new win.Blob([text + "\n//# sourceurl=" + url], {
          type: "text/javascript"
        });
        var blobUrl = win.URL.createObjectURL(blob);
        _this.worker_ = new win.Worker(blobUrl);
        _this.worker_.onmessage = _this.receiveMessage_.bind(_this);
      });
      this.messages_ = {};
      this.counter_ = 0;
      this.windows_ = [win];
    }
    _createClass10(AmpWorker2, [{
      key: "sendMessage_",
      value: function sendMessage_(method, args, opt_localWin) {
        var _this2 = this;
        return this.fetchPromise_.then(function() {
          return new Promise(function(resolve, reject) {
            var id = _this2.counter_++;
            _this2.messages_[id] = {
              method,
              resolve,
              reject
            };
            var scope = _this2.idForWindow_(opt_localWin || _this2.win_);
            var message = {
              method,
              args,
              scope,
              id
            };
            _this2.worker_.postMessage(message);
          });
        });
      }
    }, {
      key: "receiveMessage_",
      value: function receiveMessage_(event) {
        var _event$data = event.data, id = _event$data.id, method = _event$data.method, returnValue = _event$data.returnValue;
        var message = this.messages_[id];
        if (!message) {
          dev().error(TAG3, "Received unexpected message (" + method + ", " + id + ") from worker.");
          return;
        }
        devAssert2(method == message.method, "Received mismatched method " + ("(" + method + ", " + id + "), expected " + message.method + "."));
        message.resolve(returnValue);
        delete this.messages_[id];
      }
    }, {
      key: "hasPendingMessages",
      value: function hasPendingMessages() {
        return Object.keys(this.messages_).length > 0;
      }
    }, {
      key: "idForWindow_",
      value: function idForWindow_(win) {
        var index = this.windows_.indexOf(win);
        if (index >= 0) {
          return index;
        } else {
          return this.windows_.push(win) - 1;
        }
      }
    }, {
      key: "fetchPromiseForTesting",
      value: function fetchPromiseForTesting() {
        return this.fetchPromise_;
      }
    }]);
    return AmpWorker2;
  }();

  // src/format.js
  function isAmpFormatType(formats, doc) {
    var html = doc.documentElement;
    var isFormatType = formats.some(function(format) {
      return html.hasAttribute(format);
    });
    return isFormatType;
  }
  function isAmp4Email(doc) {
    return isAmpFormatType(["\u26A14email", "amp4email"], doc);
  }

  // src/core/types/function/exponential-backoff.js
  function exponentialBackoff(opt_base) {
    var getTimeout = exponentialBackoffClock(opt_base);
    return function(work) {
      return setTimeout(work, getTimeout());
    };
  }
  function exponentialBackoffClock(opt_base) {
    var base = opt_base || 2;
    var count = 0;
    return function() {
      var wait = Math.pow(base, count++);
      wait += getJitter(wait);
      return wait * 1e3;
    };
  }
  function getJitter(wait, opt_perc) {
    opt_perc = opt_perc || 0.3;
    var jitter = wait * opt_perc * Math.random();
    if (Math.random() > 0.5) {
      jitter *= -1;
    }
    return jitter;
  }

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
  var NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD = 1e-3;
  var USER_ERROR_THROTTLE_THRESHOLD = 0.1;
  var BETA_ERROR_REPORT_URL_FREQ = 0.1;
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;
  function pushLimit(array, element, limit) {
    if (array.length >= limit) {
      array.splice(0, array.length - limit + 1);
    }
    array.push(element);
  }
  var _reportingBackoff = function reportingBackoff(work) {
    _reportingBackoff = exponentialBackoff(1.5);
    return _reportingBackoff(work);
  };
  function tryJsonStringify(value) {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return String(value);
    }
  }
  function reportError(error, opt_associatedElement) {
    try {
      var isValidError;
      if (error) {
        if (error.message !== void 0) {
          error = duplicateErrorIfNecessary(error);
          isValidError = true;
        } else {
          var origError = error;
          error = new Error(tryJsonStringify(origError));
          error.origError = origError;
        }
      } else {
        error = new Error("Unknown error");
      }
      if (!isValidError && getMode().localDev && !getMode().test) {
        setTimeout(function() {
          var rethrow = new Error("_reported_ Error reported incorrectly: " + error);
          throw rethrow;
        });
      }
      if (error.reported) {
        return error;
      }
      error.reported = true;
      if (error.messageArray) {
        var elIndex = findIndex(error.messageArray, function(item) {
          return item == null ? void 0 : item.tagName;
        });
        if (elIndex > -1) {
          error.associatedElement = error.messageArray[elIndex];
        }
      }
      var element = opt_associatedElement || error.associatedElement;
      if (element && element.classList) {
        element.classList.add("i-amphtml-error");
        if (getMode().development) {
          element.classList.add("i-amphtml-element-error");
          element.setAttribute("error-message", error.message);
        }
      }
      if (self.console && (isUserErrorMessage(error.message) || !error.expected || getMode().localDev)) {
        var output = console.error || console.log;
        if (error.messageArray) {
          output.apply(console, error.messageArray);
        } else {
          if (element) {
            output.call(console, error.message, element);
          } else if (!getMode().minified) {
            output.call(console, error.stack);
          } else {
            output.call(console, error.message);
          }
        }
      }
      if (element && element.dispatchCustomEventForTesting) {
        element.dispatchCustomEventForTesting(AmpEvents.ERROR, error.message);
      }
      onError["call"](self, void 0, void 0, void 0, void 0, error);
    } catch (errorReportingError) {
      setTimeout(function() {
        throw errorReportingError;
      });
    }
    return error;
  }
  function onError(message, filename, line, col, error) {
    var _this = this;
    if (this && this.document && (!error || !error.expected)) {
      makeBodyVisibleRecovery(this.document);
    }
    if (getMode().localDev || getMode().development || getMode().test) {
      return;
    }
    var hasNonAmpJs = false;
    try {
      hasNonAmpJs = detectNonAmpJs(self);
    } catch (ignore) {
    }
    if (hasNonAmpJs && Math.random() > 0.01) {
      return;
    }
    var data = getErrorReportData(message, filename, line, col, error, hasNonAmpJs);
    if (data) {
      _reportingBackoff(function() {
        try {
          return reportErrorToServerOrViewer(_this, data).catch(function() {
          });
        } catch (e) {
        }
      });
    }
  }
  function chooseReportingUrl_() {
    return Math.random() < BETA_ERROR_REPORT_URL_FREQ ? urls.betaErrorReporting : urls.errorReporting;
  }
  function reportErrorToServerOrViewer(win, data) {
    if (data["pt"] && Math.random() < 0.9) {
      return resolvedPromise();
    }
    return maybeReportErrorToViewer(win, data).then(function(reportedErrorToViewer) {
      if (!reportedErrorToViewer) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", chooseReportingUrl_(), true);
        xhr.send(JSON.stringify(data));
      }
    });
  }
  function maybeReportErrorToViewer(win, data) {
    var ampdocService = Services.ampdocServiceFor(win);
    if (!ampdocService.isSingleDoc()) {
      return Promise.resolve(false);
    }
    var ampdocSingle = ampdocService.getSingleDoc();
    var htmlElement = ampdocSingle.getRootNode().documentElement;
    var docOptedIn = htmlElement.hasAttribute("report-errors-to-viewer");
    if (!docOptedIn) {
      return Promise.resolve(false);
    }
    var viewer = Services.viewerForDoc(ampdocSingle);
    if (!viewer.hasCapability("errorReporter")) {
      return Promise.resolve(false);
    }
    return viewer.isTrustedViewer().then(function(viewerTrusted) {
      if (!viewerTrusted) {
        return false;
      }
      viewer.sendMessage("error", errorReportingDataForViewer(data));
      return true;
    });
  }
  function errorReportingDataForViewer(errorReportData) {
    return dict({
      "m": errorReportData["m"],
      "a": errorReportData["a"],
      "s": errorReportData["s"],
      "el": errorReportData["el"],
      "ex": errorReportData["ex"],
      "v": errorReportData["v"],
      "pt": errorReportData["pt"]
    });
  }
  function buildErrorMessage_(message, error) {
    if (error) {
      if (error.message) {
        message = error.message;
      } else {
        message = String(error);
      }
    }
    if (!message) {
      message = "Unknown error";
    }
    return message;
  }
  function getErrorReportData(message, filename, line, col, error, hasNonAmpJs) {
    message = buildErrorMessage_(message, error);
    var expected = !!(error && error.expected);
    if (/_reported_/.test(message)) {
      return;
    }
    if (message == CANCELLED) {
      return;
    }
    var detachedWindow = !(self && self.window);
    var throttleBase = Math.random();
    if (isLoadErrorMessage(message) || message == "Script error." || detachedWindow) {
      expected = true;
      if (throttleBase > NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD) {
        return;
      }
    }
    var isUserError = isUserErrorMessage(message);
    if (isUserError && throttleBase > USER_ERROR_THROTTLE_THRESHOLD) {
      return;
    }
    var data = Object.create(null);
    data["v"] = getMode().rtvVersion;
    data["noAmp"] = hasNonAmpJs ? "1" : "0";
    data["m"] = message.replace(USER_ERROR_SENTINEL, "");
    data["a"] = isUserError ? "1" : "0";
    data["ex"] = expected ? "1" : "0";
    data["dw"] = detachedWindow ? "1" : "0";
    var runtime = "1p";
    if (false) {
      runtime = "sxg";
      data["sxg"] = "1";
    } else if (false) {
      runtime = "esm";
      data["esm"] = "1";
    } else if (self.context && self.context.location) {
      data["3p"] = "1";
      runtime = "3p";
    } else if (getMode().runtime) {
      runtime = getMode().runtime;
    }
    data["rt"] = runtime;
    if (runtime === "inabox") {
      data["adid"] = getMode().a4aId;
    }
    data["ca"] = isCanary(self) ? "1" : "0";
    data["bt"] = getBinaryType(self);
    if (self.location.ancestorOrigins && self.location.ancestorOrigins[0]) {
      data["or"] = self.location.ancestorOrigins[0];
    }
    if (self.viewerState) {
      data["vs"] = self.viewerState;
    }
    if (self.parent && self.parent != self) {
      data["iem"] = "1";
    }
    if (self.AMP && self.AMP.viewer) {
      var resolvedViewerUrl = self.AMP.viewer.getResolvedViewerUrl();
      var messagingOrigin = self.AMP.viewer.maybeGetMessagingOrigin();
      if (resolvedViewerUrl) {
        data["rvu"] = resolvedViewerUrl;
      }
      if (messagingOrigin) {
        data["mso"] = messagingOrigin;
      }
    }
    var exps = [];
    var experiments = experimentTogglesOrNull(self);
    for (var exp in experiments) {
      var on = experiments[exp];
      exps.push(exp + "=" + (on ? "1" : "0"));
    }
    data["exps"] = exps.join(",");
    if (error) {
      var _error$associatedElem;
      data["el"] = ((_error$associatedElem = error.associatedElement) == null ? void 0 : _error$associatedElem.tagName) || "u";
      if (error.args) {
        data["args"] = JSON.stringify(error.args);
      }
      if (!isUserError && !error.ignoreStack && error.stack) {
        data["s"] = error.stack;
      }
      if (error.message) {
        error.message += " _reported_";
      }
    } else {
      data["f"] = filename || "";
      data["l"] = line || "";
      data["c"] = col || "";
    }
    data["r"] = self.document ? self.document.referrer : "";
    data["ae"] = accumulatedErrorMessages.join(",");
    data["fr"] = self.location["originalHash"] || self.location.hash;
    if (data["bt"] === "production") {
      data["pt"] = "1";
    }
    pushLimit(accumulatedErrorMessages, message, 25);
    return data;
  }
  function detectNonAmpJs(win) {
    if (!win.document) {
      return false;
    }
    var scripts = win.document.querySelectorAll("script[src]");
    for (var i = 0; i < scripts.length; i++) {
      if (!isProxyOrigin(scripts[i].src.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  // src/url-rewrite.js
  var TAG4 = "URL-REWRITE";
  var ORIGINAL_TARGET_VALUE = "__AMP_ORIGINAL_TARGET_VALUE_";
  function rewriteAttributesForElement(element, attrName, attrValue, opt_location, opt_updateProperty) {
    var tag = element.tagName.toLowerCase();
    var attr = attrName.toLowerCase();
    var rewrittenValue = rewriteAttributeValue(tag, attr, attrValue);
    var isProxy = isProxyOrigin(opt_location || self.location);
    if (isProxy && tag === "a" && attr === "href") {
      var oldValue = element.getAttribute(attr);
      var newValueIsHash = rewrittenValue[0] === "#";
      var oldValueIsHash = oldValue && oldValue[0] === "#";
      if (newValueIsHash && !oldValueIsHash) {
        if (!element[ORIGINAL_TARGET_VALUE]) {
          element[ORIGINAL_TARGET_VALUE] = element.getAttribute("target");
        }
        element.removeAttribute("target");
      } else if (oldValueIsHash && !newValueIsHash) {
        element.setAttribute("target", element[ORIGINAL_TARGET_VALUE] || "_top");
      }
    }
    if (opt_updateProperty) {
      element[attr] = rewrittenValue;
    }
    element.setAttribute(attr, rewrittenValue);
    return rewrittenValue;
  }
  function rewriteAttributeValue(tagName, attrName, attrValue) {
    if (isUrlAttribute(attrName)) {
      return resolveUrlAttr(tagName, attrName, attrValue, self.location);
    }
    return attrValue;
  }
  function isUrlAttribute(attrName) {
    return attrName == "src" || attrName == "href" || attrName == "xlink:href" || attrName == "srcset";
  }
  function resolveUrlAttr(tagName, attrName, attrValue, windowLocation) {
    checkCorsUrl(attrValue);
    var isProxyHost = isProxyOrigin(windowLocation);
    var baseUrl = parseUrlDeprecated(getSourceUrl(windowLocation));
    if (attrName == "href" && !attrValue.startsWith("#")) {
      return resolveRelativeUrl(attrValue, baseUrl);
    }
    if (attrName == "src") {
      if (tagName == "amp-img") {
        return resolveImageUrlAttr(attrValue, baseUrl, isProxyHost);
      }
      return resolveRelativeUrl(attrValue, baseUrl);
    }
    if (attrName == "srcset") {
      var srcset;
      try {
        srcset = parseSrcset(attrValue);
      } catch (e) {
        user().error(TAG4, "Failed to parse srcset: ", e);
        return attrValue;
      }
      return srcset.stringify(function(url) {
        return resolveImageUrlAttr(url, baseUrl, isProxyHost);
      });
    }
    return attrValue;
  }
  function resolveImageUrlAttr(attrValue, baseUrl, isProxyHost) {
    var src = parseUrlDeprecated(resolveRelativeUrl(attrValue, baseUrl));
    if (src.protocol == "data:" || isProxyOrigin(src) || !isProxyHost) {
      return src.href;
    }
    return urls.cdn + "/i/" + (src.protocol == "https:" ? "s/" : "") + encodeURIComponent(src.host) + src.pathname + (src.search || "") + (src.hash || "");
  }

  // extensions/amp-bind/0.1/bind-impl.js
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
  var TAG5 = "amp-bind";
  var AMP_CSS_RE = /^(i?-)?amp(html)?-/;
  var MAX_MERGE_DEPTH = 10;
  var FORM_VALUE_PROPERTIES = {
    "INPUT": {
      "checked": true,
      "value": true
    },
    "OPTION": {
      "selected": true
    },
    "TEXTAREA": {
      "text": true,
      "disabled": true
    }
  };
  var BIND_ONLY_ATTRIBUTES = map({
    "AMP-CAROUSEL": ["slide"],
    "AMP-LIST": ["is-layout-container"],
    "AMP-SELECTOR": ["selected"]
  });
  var FAST_RESCAN_TAGS = ["AMP-LIST", "AMP-RENDER"];
  var Bind = /* @__PURE__ */ function() {
    function Bind2(ampdoc) {
      var _this = this;
      _classCallCheck12(this, Bind2);
      this.ampdoc = ampdoc;
      this.win_ = ampdoc.win;
      this.localWin_ = ampdoc.win;
      this.actionSequenceIds_ = [];
      this.eventuallyClearActionSequenceIds_ = debounce(this.win_, function() {
        _this.actionSequenceIds_.length = 0;
      }, 5e3);
      this.boundElements_ = [];
      this.expressionToElements_ = map();
      this.history_ = Services.historyForDoc(ampdoc);
      this.overridableKeys_ = [];
      this.maxNumberOfBindings_ = 1e3;
      this.mutator_ = Services.mutatorForDoc(ampdoc);
      this.state_ = map();
      this.timer_ = Services.timerFor(this.win_);
      this.validator_ = null;
      this.viewer_ = Services.viewerForDoc(this.ampdoc);
      this.viewer_.onMessageRespond("premutate", this.premutate_.bind(this));
      this.rootNodePromise_ = ampdoc.whenFirstVisible().then(function() {
        return ampdoc.whenReady().then(function() {
          return ampdoc.getRootNode();
        });
      });
      this.initializePromise_ = this.rootNodePromise_.then(function(root) {
        return _this.initialize_(root);
      });
      this.addMacrosDeferred_ = new Deferred();
      this.setStatePromise_ = null;
      this.signals_ = new Signals();
      var g = self.AMP;
      g.printState = g.printState || this.debugPrintState_.bind(this);
      g.setState = g.setState || function(state) {
        return _this.setState(state);
      };
      g.eval = g.eval || this.debugEvaluate_.bind(this);
    }
    _createClass11(Bind2, [{
      key: "signals",
      value: function signals() {
        return this.signals_;
      }
    }, {
      key: "setState",
      value: function setState(state, opts) {
        var _this2 = this;
        if (opts === void 0) {
          opts = {};
        }
        dev().info(TAG5, "setState (init=%s):", opts.skipEval, state);
        try {
          deepMerge(this.state_, state, MAX_MERGE_DEPTH);
        } catch (e) {
          user().error(TAG5, "Failed to merge result from AMP.setState().", e);
        }
        if (opts.skipEval) {
          return resolvedPromise();
        }
        var promise = this.initializePromise_.then(function() {
          return _this2.evaluate_();
        }).then(function(results) {
          return _this2.apply_(results, {
            skipAmpState: opts.skipAmpState,
            constrain: opts.constrain
          });
        });
        if (getMode().test) {
          promise.then(function() {
            _this2.dispatchEventForTesting_(BindEvents.SET_STATE);
          });
        }
        return this.setStatePromise_ = promise;
      }
    }, {
      key: "invoke",
      value: function invoke(invocation) {
        var args = invocation.args, event = invocation.event, method = invocation.method, sequenceId = invocation.sequenceId, tagOrTarget = invocation.tagOrTarget;
        if (this.actionSequenceIds_.includes(sequenceId)) {
          user().error(TAG5, "One state action allowed per event.");
          return resolvedPromise();
        }
        this.actionSequenceIds_.push(sequenceId);
        this.eventuallyClearActionSequenceIds_();
        var expression = args[RAW_OBJECT_ARGS_KEY];
        if (expression) {
          this.maxNumberOfBindings_ = Math.min(2e3, Math.max(1e3, this.maxNumberOfBindings_ + 500));
          this.signals_.signal("FIRST_MUTATE");
          var scope = dict();
          if (event && getDetail(event)) {
            scope["event"] = getDetail(event);
          }
          switch (method) {
            case "setState":
              return this.setStateWithExpression(expression, scope);
            case "pushState":
              return this.pushStateWithExpression(expression, scope);
            default:
              return Promise.reject(dev().createError("Unrecognized method: %s.%s", tagOrTarget, method));
          }
        } else {
          user().error("AMP-BIND", `Please use the object-literal syntax, e.g. "AMP.setState({foo: 'bar'})" instead of "AMP.setState(foo='bar')".`);
        }
        return resolvedPromise();
      }
    }, {
      key: "setStateWithExpression",
      value: function setStateWithExpression(expression, scope) {
        var _this3 = this;
        return this.evaluateExpression_(expression, scope).then(function(result) {
          return _this3.setStateAndUpdateHistory_(result);
        });
      }
    }, {
      key: "setStateWithObject",
      value: function setStateWithObject(state) {
        var result = this.copyJsonObject_(state);
        if (!result) {
          return Promise.reject("Invalid state");
        }
        return this.setStateAndUpdateHistory_(result);
      }
    }, {
      key: "setStateAndUpdateHistory_",
      value: function setStateAndUpdateHistory_(state) {
        var _this4 = this;
        dev().info(TAG5, "setState:", state);
        this.setStatePromise_ = this.setState(state).then(function() {
          return _this4.getDataForHistory_();
        }).then(function(data) {
          if (data) {
            _this4.history_.replace(data);
          }
        });
        return this.setStatePromise_;
      }
    }, {
      key: "pushStateWithExpression",
      value: function pushStateWithExpression(expression, scope) {
        var _this5 = this;
        dev().info(TAG5, "pushState:", expression);
        return this.evaluateExpression_(expression, scope).then(function(result) {
          var oldState = map();
          Object.keys(result).forEach(function(variable) {
            var value = _this5.state_[variable];
            oldState[variable] = _this5.copyJsonObject_(value);
          });
          var onPop = function onPop2() {
            return _this5.setState(oldState);
          };
          return _this5.setState(result).then(function() {
            return _this5.getDataForHistory_();
          }).then(function(data) {
            _this5.history_.push(onPop, data);
          });
        });
      }
    }, {
      key: "getDataForHistory_",
      value: function getDataForHistory_() {
        var data = dict({
          "data": dict({
            "amp-bind": this.state_
          }),
          "title": this.localWin_.document.title
        });
        if (!this.viewer_.isEmbedded()) {
          return Promise.resolve(data);
        }
        return this.viewer_.isTrustedViewer().then(function(trusted) {
          return trusted ? data : null;
        });
      }
    }, {
      key: "rescan",
      value: function rescan(addedElements, removedElements, options) {
        var _this6 = this;
        if (options === void 0) {
          options = {};
        }
        var waitFor = options.fast ? this.addMacrosDeferred_.promise : this.initializePromise_;
        return waitFor.then(function() {
          return _this6.timer_.timeoutPromise(options.timeout || 2e3, _this6.rescan_(addedElements, removedElements, options), "Timed out waiting for amp-bind to rescan.");
        });
      }
    }, {
      key: "rescan_",
      value: function rescan_(addedElements, removedElements, options) {
        var _this7 = this;
        dev().info(TAG5, "rescan: ", addedElements, removedElements, options);
        var rescanPromise = options.fast ? this.fastScan_(addedElements, removedElements) : this.slowScan_(addedElements, removedElements);
        return rescanPromise.then(function() {
          if (options.update) {
            return _this7.evaluate_().then(function(results) {
              return _this7.apply_(results, {
                constrain: addedElements,
                evaluateOnly: options.update === "evaluate"
              });
            });
          }
        });
      }
    }, {
      key: "fastScan_",
      value: function fastScan_(addedElements, removedElements) {
        var _this8 = this;
        var removePromise = this.removeBindingsForNodes_(removedElements);
        var bindings = [];
        var elementsToScan = addedElements.filter(function(el2) {
          return el2.hasAttribute("i-amphtml-binding");
        });
        addedElements.forEach(function(el2) {
          var children = el2.querySelectorAll("[i-amphtml-binding]");
          Array.prototype.push.apply(elementsToScan, children);
        });
        var quota = this.maxNumberOfBindings_ - this.numberOfBindings();
        for (var i = 0; i < elementsToScan.length; i++) {
          var el = elementsToScan[i];
          if (this.scanElement_(el, quota - bindings.length, bindings)) {
            break;
          }
        }
        removePromise.then(function(removed) {
          dev().info(TAG5, "rescan.fast: delta=%s, total=%s", bindings.length - removed, _this8.numberOfBindings());
        });
        if (bindings.length > 0) {
          return this.sendBindingsToWorker_(bindings);
        } else {
          return resolvedPromise();
        }
      }
    }, {
      key: "getState",
      value: function getState(expr) {
        var value = expr ? getValueForExpr(this.state_, expr) : void 0;
        if (isObject(value) || isArray(value)) {
          return this.copyJsonObject_(value);
        }
        return value;
      }
    }, {
      key: "getStateAsync",
      value: function getStateAsync(expr) {
        var _this9 = this;
        var stateId = /^[^.]*/.exec(expr)[0];
        return this.rootNodePromise_.then(function(root) {
          var ampStateEl = root.querySelector("#" + escapeCssSelectorIdent(stateId));
          if (!ampStateEl) {
            throw new Error("#" + stateId + " does not exist.");
          }
          return whenUpgradedToCustomElement(ampStateEl).then(function(el) {
            return el.getImpl(true);
          }).then(function(ampState) {
            return ampState.getFetchingPromise();
          }).catch(function() {
          }).then(function() {
            return _this9.getState(expr);
          });
        });
      }
    }, {
      key: "getStateValue",
      value: function getStateValue(expr) {
        var value = getValueForExpr(this.state_, expr);
        if (value === void 0 || value === null) {
          return null;
        } else if (isObject(value) || isArray(value)) {
          return JSON.stringify(value);
        } else {
          return String(value);
        }
      }
    }, {
      key: "initialize_",
      value: function initialize_(root) {
        var _this10 = this;
        var allowUrlProperties = !isAmp4Email(this.localWin_.document);
        this.validator_ = new BindValidator(allowUrlProperties);
        return this.ww_("bind.init", [allowUrlProperties]).then(function() {
          return Promise.all([_this10.addMacros_().then(function() {
            return _this10.addMacrosDeferred_.resolve();
          }), _this10.addBindingsForNodes_([root])]);
        }).then(function() {
          root.addEventListener(AmpEvents.DOM_UPDATE, function(e) {
            return _this10.onDomUpdate_(e);
          });
        }).then(function() {
          var ampStates = root.querySelectorAll("AMP-STATE");
          var whenBuilt = false;
          var whenParsed = toArray(ampStates).map(function(el) {
            return whenUpgradedToCustomElement(el).then(function() {
              return el.getImpl(whenBuilt);
            }).then(function(impl) {
              return impl.parseAndUpdate();
            });
          });
          return Promise.all(whenParsed);
        }).then(function() {
          _this10.viewer_.sendMessage("bindReady", void 0);
          _this10.dispatchEventForTesting_(BindEvents.INITIALIZE);
          if (getMode().development) {
            return _this10.evaluate_().then(function(results) {
              return _this10.verify_(results);
            });
          }
        });
      }
    }, {
      key: "numberOfBindings",
      value: function numberOfBindings() {
        return this.boundElements_.reduce(function(number, boundElement) {
          return number + boundElement.boundProperties.length;
        }, 0);
      }
    }, {
      key: "setMaxNumberOfBindingsForTesting",
      value: function setMaxNumberOfBindingsForTesting(value) {
        this.maxNumberOfBindings_ = value;
      }
    }, {
      key: "historyForTesting",
      value: function historyForTesting() {
        return this.history_;
      }
    }, {
      key: "premutate_",
      value: function premutate_(data) {
        var _this11 = this;
        var ignoredKeys = [];
        return this.initializePromise_.then(function() {
          Object.keys(data["state"]).forEach(function(key) {
            if (!_this11.overridableKeys_.includes(key)) {
              delete data["state"][key];
              ignoredKeys.push(key);
            }
          });
          if (ignoredKeys.length > 0) {
            user().warn(TAG5, "Some state keys could not be premutated because they are missing the overridable attribute: " + ignoredKeys.join(", "));
          }
          return _this11.setState(data["state"]);
        });
      }
    }, {
      key: "addOverridableKey",
      value: function addOverridableKey(key) {
        this.overridableKeys_.push(key);
      }
    }, {
      key: "addMacros_",
      value: function addMacros_() {
        var _this12 = this;
        var elements = this.ampdoc.getBody().querySelectorAll("AMP-BIND-MACRO");
        var macros = [];
        iterateCursor(elements, function(element) {
          var argumentNames = (element.getAttribute("arguments") || "").split(",").map(function(s) {
            return s.trim();
          });
          macros.push({
            id: element.getAttribute("id"),
            argumentNames,
            expressionString: element.getAttribute("expression")
          });
        });
        if (macros.length == 0) {
          return Promise.resolve(0);
        } else {
          return this.ww_("bind.addMacros", [macros]).then(function(errors) {
            errors.forEach(function(e, i) {
              _this12.reportWorkerError_(e, TAG5 + ": Parsing amp-bind-macro failed.", elements[i]);
            });
            return macros.length;
          });
        }
      }
    }, {
      key: "addBindingsForNodes_",
      value: function addBindingsForNodes_(nodes) {
        var _this13 = this;
        if (!nodes.length) {
          return Promise.resolve(0);
        }
        var scanPromises = nodes.map(function(node) {
          var limit = getMode().localDev && !getMode().test ? Number.POSITIVE_INFINITY : _this13.maxNumberOfBindings_ - _this13.numberOfBindings();
          return _this13.scanNode_(node, limit).then(function(results) {
            var bindings = results.bindings, limitExceeded = results.limitExceeded;
            if (limitExceeded) {
              _this13.emitMaxBindingsExceededError_();
            }
            return bindings;
          });
        });
        return Promise.all(scanPromises).then(function(results) {
          var bindings = Array.prototype.concat.apply([], results);
          return bindings.length > 0 ? _this13.sendBindingsToWorker_(bindings) : 0;
        });
      }
    }, {
      key: "emitMaxBindingsExceededError_",
      value: function emitMaxBindingsExceededError_() {
        dev().expectedError(TAG5, "Maximum number of bindings reached (%s). Additional elements with bindings will be ignored.", this.maxNumberOfBindings_);
      }
    }, {
      key: "sendBindingsToWorker_",
      value: function sendBindingsToWorker_(bindings) {
        var _this14 = this;
        return this.ww_("bind.addBindings", [bindings]).then(function(parseErrors) {
          Object.keys(parseErrors).forEach(function(expressionString) {
            var elements = _this14.expressionToElements_[expressionString];
            if (elements.length > 0) {
              _this14.reportWorkerError_(parseErrors[expressionString], TAG5 + ': Expression compile error in "' + expressionString + '".', elements[0]);
            }
          });
          return bindings.length;
        });
      }
    }, {
      key: "removeBindingsForNodes_",
      value: function removeBindingsForNodes_(nodes) {
        if (!nodes.length) {
          return Promise.resolve(0);
        }
        remove(this.boundElements_, function(boundElement) {
          for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].contains(boundElement.element)) {
              return true;
            }
          }
          return false;
        });
        var deletedExpressions = [];
        for (var expression in this.expressionToElements_) {
          var elements = this.expressionToElements_[expression];
          remove(elements, function(element) {
            for (var i = 0; i < nodes.length; i++) {
              if (nodes[i].contains(element)) {
                return true;
              }
            }
            return false;
          });
          if (elements.length == 0) {
            deletedExpressions.push(expression);
            delete this.expressionToElements_[expression];
          }
        }
        var removed = deletedExpressions.length;
        if (removed > 0) {
          return this.ww_("bind.removeBindingsWithExpressionStrings", [deletedExpressions]).then(function() {
            return removed;
          });
        } else {
          return Promise.resolve(0);
        }
      }
    }, {
      key: "scanNode_",
      value: function scanNode_(node, limit) {
        var _this15 = this;
        var bindings = [];
        var walker = new BindWalker(node);
        var limitExceeded = false;
        var scanNextNode_ = function scanNextNode_2() {
          var node2 = walker.currentNode;
          if (node2.nodeType !== Node.ELEMENT_NODE) {
            return !walker.nextNode();
          }
          var element = dev().assertElement(node2);
          var remainingQuota = limit - bindings.length;
          if (_this15.scanElement_(element, remainingQuota, bindings)) {
            limitExceeded = true;
          }
          var next = FAST_RESCAN_TAGS.includes(node2.nodeName) ? walker.skipSubtree() : walker.nextNode();
          return !next || limitExceeded;
        };
        return new Promise(function(resolve) {
          var chunktion = function chunktion2(idleDeadline) {
            var completed = false;
            if (idleDeadline && !idleDeadline.didTimeout) {
              while (idleDeadline.timeRemaining() > 1 && !completed) {
                completed = scanNextNode_();
              }
            } else {
              var bucketSize = 250;
              for (var i = 0; i < bucketSize && !completed; i++) {
                completed = scanNextNode_();
              }
            }
            if (completed) {
              resolve({
                bindings,
                limitExceeded
              });
            } else {
              chunk(_this15.ampdoc, chunktion2, ChunkPriority.LOW);
            }
          };
          chunk(_this15.ampdoc, chunktion, ChunkPriority.LOW);
        });
      }
    }, {
      key: "scanElement_",
      value: function scanElement_(element, quota, outBindings) {
        var _this16 = this;
        var quotaExceeded = false;
        var boundProperties = this.boundPropertiesInElement_(element);
        if (boundProperties.length > quota) {
          boundProperties.length = quota;
          quotaExceeded = true;
        }
        if (boundProperties.length > 0) {
          this.boundElements_.push({
            element,
            boundProperties
          });
        }
        var tagName = element.tagName;
        boundProperties.forEach(function(boundProperty) {
          var expressionString = boundProperty.expressionString, property = boundProperty.property;
          outBindings.push({
            tagName,
            property,
            expressionString
          });
          if (!_this16.expressionToElements_[expressionString]) {
            _this16.expressionToElements_[expressionString] = [];
          }
          _this16.expressionToElements_[expressionString].push(element);
        });
        return quotaExceeded;
      }
    }, {
      key: "boundPropertiesInElement_",
      value: function boundPropertiesInElement_(element) {
        var boundProperties = [];
        var attrs = element.attributes;
        for (var i = 0, numberOfAttrs = attrs.length; i < numberOfAttrs; i++) {
          var attr = attrs[i];
          var boundProperty = this.boundPropertyInAttribute_(attr, element);
          if (boundProperty) {
            boundProperties.push(boundProperty);
          }
        }
        return boundProperties;
      }
    }, {
      key: "boundPropertyInAttribute_",
      value: function boundPropertyInAttribute_(attribute, element) {
        var tag = element.tagName;
        var attr = attribute.name;
        var property;
        if (attr.length > 2 && attr[0] === "[" && attr[attr.length - 1] === "]") {
          property = attr.substr(1, attr.length - 2);
        } else if (attr.startsWith("data-amp-bind-")) {
          property = attr.substr(14);
          if (element.hasAttribute("[" + property + "]")) {
            return null;
          }
        }
        if (property) {
          if (this.validator_.canBind(tag, property)) {
            return {
              property,
              expressionString: attribute.value
            };
          } else {
            var err = user().createError("%s: Binding to [%s] on <%s> is not allowed.", TAG5, property, tag);
            this.reportError_(err, element);
          }
        }
        return null;
      }
    }, {
      key: "evaluateExpression_",
      value: function evaluateExpression_(expression, scope) {
        var _this17 = this;
        return this.initializePromise_.then(function() {
          Object.assign(scope, _this17.state_);
          return _this17.ww_("bind.evaluateExpression", [expression, scope]);
        }).then(function(returnValue) {
          var error = returnValue.error, result = returnValue.result;
          if (error) {
            throw _this17.reportWorkerError_(error, TAG5 + ": Expression eval failed.");
          } else {
            return result;
          }
        });
      }
    }, {
      key: "evaluate_",
      value: function evaluate_() {
        var _this18 = this;
        var evaluatePromise = this.ww_("bind.evaluateBindings", [this.state_]);
        return evaluatePromise.then(function(returnValue) {
          var errors = returnValue.errors, results = returnValue.results;
          Object.keys(errors).forEach(function(expressionString) {
            var elements = _this18.expressionToElements_[expressionString];
            if (elements.length > 0) {
              var evalError = errors[expressionString];
              var userError = user().createError('%s: Expression evaluation error in "%s". %s', TAG5, expressionString, evalError.message);
              userError.stack = evalError.stack;
              _this18.reportError_(userError, elements[0]);
            }
          });
          dev().info(TAG5, "evaluation:", results);
          return results;
        });
      }
    }, {
      key: "verify_",
      value: function verify_(results, elements, warn) {
        var _this19 = this;
        if (elements === void 0) {
          elements = null;
        }
        if (warn === void 0) {
          warn = true;
        }
        var mismatches = {};
        this.boundElements_.forEach(function(boundElement) {
          var boundProperties = boundElement.boundProperties, element = boundElement.element;
          if (elements && !_this19.elementsContains_(elements, element)) {
            return;
          }
          boundProperties.forEach(function(boundProperty) {
            var newValue = results[boundProperty.expressionString];
            if (newValue === void 0) {
              return;
            }
            var mismatch = _this19.verifyBinding_(boundProperty, element, newValue);
            if (!mismatch) {
              return;
            }
            var tagName = element.tagName;
            var expressionString = boundProperty.expressionString, property = boundProperty.property;
            var actual = mismatch.actual, expected = mismatch.expected;
            mismatches[tagName + "[" + property + "]" + expected + ":" + actual] = true;
            if (warn) {
              user().warn(TAG5, "Default value (" + actual + ") does not match first " + ("result (" + expected + ") for <" + tagName + " [" + property + ']="') + (expressionString + '">. We recommend writing expressions with ') + "matching default values, but this can be safely ignored if intentional.");
            }
          });
        });
        return Object.keys(mismatches);
      }
    }, {
      key: "elementsContains_",
      value: function elementsContains_(elements, el) {
        for (var i = 0; i < elements.length; i++) {
          if (elements[i].contains(el)) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "calculateUpdates_",
      value: function calculateUpdates_(boundProperties, results) {
        var updates = [];
        boundProperties.forEach(function(boundProperty) {
          var expressionString = boundProperty.expressionString, previousResult = boundProperty.previousResult;
          var newValue = results[expressionString];
          if (newValue === void 0 || deepEquals(newValue, previousResult, 20)) {
          } else {
            boundProperty.previousResult = newValue;
            updates.push({
              boundProperty,
              newValue
            });
          }
        });
        return updates;
      }
    }, {
      key: "apply_",
      value: function apply_(results, opts) {
        var _this20 = this;
        var promises = [];
        this.boundElements_.forEach(function(boundElement) {
          if (opts.skipAmpState && boundElement.element.tagName === "AMP-STATE") {
            return;
          }
          if (opts.constrain && !opts.constrain.some(function(el) {
            return el.contains(boundElement.element);
          })) {
            return;
          }
          var boundProperties = boundElement.boundProperties, element = boundElement.element;
          var updates = _this20.calculateUpdates_(boundProperties, results);
          if (opts.evaluateOnly) {
            return;
          }
          promises.push(_this20.applyUpdatesToElement_(element, updates));
        });
        return Promise.all(promises);
      }
    }, {
      key: "applyUpdatesToElement_",
      value: function applyUpdatesToElement_(element, updates) {
        var _this21 = this;
        if (updates.length === 0) {
          return resolvedPromise();
        }
        return this.mutator_.mutateElement(element, function() {
          var mutations = map();
          var width, height;
          updates.forEach(function(update) {
            var boundProperty = update.boundProperty, newValue = update.newValue;
            var property = boundProperty.property;
            var mutation = _this21.applyBinding_(boundProperty, element, newValue);
            if (mutation) {
              mutations[mutation.name] = mutation.value;
              if (property == "width") {
                width = isFiniteNumber(newValue) ? Number(newValue) : width;
              } else if (property == "height") {
                height = isFiniteNumber(newValue) ? Number(newValue) : height;
              }
            }
            _this21.dispatchFormValueChangeEventIfNecessary_(element, property);
          });
          if (width !== void 0 || height !== void 0) {
            _this21.mutator_.forceChangeSize(element, height, width);
          }
          if (typeof element.mutatedAttributesCallback === "function") {
            try {
              element.mutatedAttributesCallback(mutations);
            } catch (e) {
              var error = user().createError("%s: Applying expression results (%s) failed with error,", TAG5, JSON.stringify(mutations), e);
              _this21.reportError_(error, element);
            }
          }
        });
      }
    }, {
      key: "dispatchFormValueChangeEventIfNecessary_",
      value: function dispatchFormValueChangeEventIfNecessary_(element, property) {
        var isPropertyAFormValue = FORM_VALUE_PROPERTIES[element.tagName];
        if (!isPropertyAFormValue || !isPropertyAFormValue[property]) {
          return;
        }
        var dispatchAt = element.tagName === "OPTION" ? closestAncestorElementBySelector(element, "SELECT") : element;
        if (dispatchAt) {
          var ampValueChangeEvent = createCustomEvent(this.localWin_, AmpEvents.FORM_VALUE_CHANGE, null, {
            bubbles: true
          });
          dispatchAt.dispatchEvent(ampValueChangeEvent);
        }
      }
    }, {
      key: "applyBinding_",
      value: function applyBinding_(boundProperty, element, newValue) {
        var property = boundProperty.property;
        var tag = element.tagName;
        switch (property) {
          case "defaulttext":
            element.textContent = String(newValue);
            break;
          case "text":
            var stringValue = String(newValue);
            if (tag === "TITLE" && element.parentNode === this.localWin_.document.head) {
              this.localWin_.document.title = stringValue;
            }
            if (tag === "TEXTAREA") {
              element.value = stringValue;
            } else {
              element.textContent = stringValue;
            }
            break;
          case "class":
            var ampClasses = [];
            for (var i = 0; i < element.classList.length; i++) {
              var cssClass = element.classList[i];
              if (AMP_CSS_RE.test(cssClass)) {
                ampClasses.push(cssClass);
              }
            }
            if (Array.isArray(newValue) || typeof newValue === "string") {
              element.setAttribute("class", ampClasses.concat(newValue).join(" "));
            } else if (newValue === null) {
              element.setAttribute("class", ampClasses.join(" "));
            } else {
              var err = user().createError('%s: "%s" is not a valid result for [class].', TAG5, newValue);
              this.reportError_(err, element);
            }
            break;
          default:
            var updateProperty = tag === "INPUT" && property in element;
            var oldValue = element.getAttribute(property);
            var mutated = false;
            if (typeof newValue === "boolean") {
              if (updateProperty && element[property] !== newValue) {
                element[property] = newValue;
                mutated = true;
              }
              if (newValue && oldValue !== "") {
                element.setAttribute(property, "");
                mutated = true;
              } else if (!newValue && oldValue !== null) {
                element.removeAttribute(property);
                mutated = true;
              }
              if (mutated) {
                this.updateSelectForSafari_(element, property, newValue);
              }
            } else if (typeof newValue === "object" && newValue !== null) {
              mutated = true;
            } else if (newValue !== oldValue) {
              mutated = this.rewriteAttributes_(element, property, String(newValue), updateProperty);
            }
            if (mutated) {
              return {
                name: property,
                value: newValue
              };
            }
            break;
        }
        return null;
      }
    }, {
      key: "updateSelectForSafari_",
      value: function updateSelectForSafari_(element, property, newValue) {
        if (element.tagName !== "OPTION" || property !== "selected") {
          return;
        }
        if (!newValue) {
          return;
        }
        if (!Services.platformFor(this.win_).isSafari()) {
          return;
        }
        var select = closestAncestorElementBySelector(element, "select");
        if (!select) {
          return;
        }
        var index = toArray(select.options).indexOf(element);
        if (index >= 0) {
          select.selectedIndex = index;
        }
      }
    }, {
      key: "rewriteAttributes_",
      value: function rewriteAttributes_(element, attrName, value, updateProperty) {
        try {
          rewriteAttributesForElement(element, attrName, value, void 0, updateProperty);
          return true;
        } catch (e) {
          var error = user().createError('%s: "%s" is not a valid result for [%]', TAG5, value, attrName, e);
          this.reportError_(error, element);
        }
        return false;
      }
    }, {
      key: "verifyBinding_",
      value: function verifyBinding_(boundProperty, element, expectedValue) {
        var property = boundProperty.property;
        var tagName = element.tagName;
        var bindOnlyAttrs = BIND_ONLY_ATTRIBUTES[tagName];
        if (bindOnlyAttrs && bindOnlyAttrs.includes(property)) {
          return null;
        }
        var initialValue;
        var match;
        switch (property) {
          case "text":
            initialValue = element.textContent;
            expectedValue = String(expectedValue);
            match = initialValue.trim() === expectedValue.trim();
            break;
          case "class":
            initialValue = [];
            for (var i = 0; i < element.classList.length; i++) {
              var cssClass = element.classList[i];
              if (AMP_CSS_RE.test(cssClass)) {
                continue;
              }
              initialValue.push(cssClass);
            }
            var classes = [];
            if (Array.isArray(expectedValue)) {
              classes = expectedValue;
            } else if (typeof expectedValue === "string") {
              var trimmed = expectedValue.trim();
              if (trimmed.length > 0) {
                classes = trimmed.split(" ");
              }
            } else {
              var err = user().createError('%s: "%s" is not a valid result for [class].', TAG5, expectedValue);
              this.reportError_(err, element);
            }
            match = this.compareStringArrays_(initialValue, classes);
            break;
          default:
            initialValue = element.getAttribute(property);
            if (expectedValue === true) {
              match = initialValue === "";
            } else if (expectedValue === false) {
              match = initialValue === null;
            } else if (typeof expectedValue === "number") {
              match = Number(initialValue) === expectedValue;
            } else {
              match = initialValue === expectedValue;
            }
            break;
        }
        return match ? null : {
          expected: expectedValue,
          actual: initialValue
        };
      }
    }, {
      key: "onDomUpdate_",
      value: function onDomUpdate_(event) {
        var _this22 = this;
        var target = dev().assertElement(event.target);
        var parent = target.parentNode;
        if (parent && FAST_RESCAN_TAGS.includes(parent.nodeName)) {
          return;
        }
        dev().info(TAG5, "dom_update:", target);
        this.slowScan_([target], [target], "dom_update.end").then(function() {
          _this22.dispatchEventForTesting_(BindEvents.RESCAN_TEMPLATE);
        });
      }
    }, {
      key: "slowScan_",
      value: function slowScan_(addedNodes, removedNodes, label) {
        var _this23 = this;
        if (label === void 0) {
          label = "rescan.slow";
        }
        var removed = 0;
        return this.removeBindingsForNodes_(removedNodes).then(function(r) {
          removed = r;
          return _this23.addBindingsForNodes_(addedNodes);
        }).then(function(added) {
          dev().info(TAG5, "%s: delta=%s, total=%s", label, added - removed, _this23.numberOfBindings());
        });
      }
    }, {
      key: "ww_",
      value: function ww_(method, opt_args) {
        return invokeWebWorker(this.win_, method, opt_args, this.localWin_);
      }
    }, {
      key: "reportWorkerError_",
      value: function reportWorkerError_(e, message, opt_element) {
        var userError = user().createError("%s %s", message, e.message);
        userError.stack = e.stack;
        this.reportError_(userError, opt_element);
        return userError;
      }
    }, {
      key: "reportError_",
      value: function reportError_(error, opt_element) {
        if (getMode().test) {
          return;
        }
        reportError(error, opt_element);
      }
    }, {
      key: "compareStringArrays_",
      value: function compareStringArrays_(a2, b) {
        if (a2.length !== b.length) {
          return false;
        }
        var sortedA = (isArray(a2) ? a2 : toArray(a2)).sort();
        var sortedB = (isArray(b) ? b : toArray(b)).sort();
        for (var i = 0; i < a2.length; i++) {
          if (sortedA[i] !== sortedB[i]) {
            return false;
          }
        }
        return true;
      }
    }, {
      key: "copyJsonObject_",
      value: function copyJsonObject_(o) {
        if (o === void 0) {
          return null;
        }
        try {
          return parseJson(JSON.stringify(o));
        } catch (e) {
          dev().error(TAG5, "Failed to copy JSON (" + o + ") with error: " + e);
        }
        return null;
      }
    }, {
      key: "debugPrintState_",
      value: function debugPrintState_(opt_elementOrExpr) {
        if (opt_elementOrExpr) {
          if (typeof opt_elementOrExpr == "string") {
            var value = getValueForExpr(this.state_, opt_elementOrExpr);
            user().info(TAG5, value);
          } else if (opt_elementOrExpr.nodeType == Node.ELEMENT_NODE) {
            var element = user().assertElement(opt_elementOrExpr);
            this.debugPrintElement_(element);
          } else {
            user().info(TAG5, 'Invalid argument. Pass a JSON expression or an element instead e.g. AMP.printState("foo.bar") or AMP.printState($0) after selecting an element.');
          }
        } else {
          user().info(TAG5, this.state_);
        }
      }
    }, {
      key: "debugPrintElement_",
      value: function debugPrintElement_(element) {
        var _this24 = this;
        var index = findIndex(this.boundElements_, function(boundElement) {
          return boundElement.element == element;
        });
        if (index < 0) {
          user().info(TAG5, "Element has no bindings:", element);
          return;
        }
        var promises = [];
        var boundProperties = this.boundElements_[index].boundProperties;
        boundProperties.forEach(function(boundProperty) {
          var expressionString = boundProperty.expressionString;
          promises.push(_this24.evaluateExpression_(expressionString, _this24.state_));
        });
        Promise.all(promises).then(function(results) {
          var output = map();
          boundProperties.forEach(function(boundProperty, i) {
            var property = boundProperty.property;
            output[property] = results[i];
          });
          user().info(TAG5, output);
        });
      }
    }, {
      key: "debugEvaluate_",
      value: function debugEvaluate_(expression) {
        this.evaluateExpression_(expression, this.state_).then(function(result) {
          user().info(TAG5, result);
        });
      }
    }, {
      key: "initializePromiseForTesting",
      value: function initializePromiseForTesting() {
        return this.initializePromise_;
      }
    }, {
      key: "setStatePromiseForTesting",
      value: function setStatePromiseForTesting() {
        return this.setStatePromise_;
      }
    }, {
      key: "dispatchEventForTesting_",
      value: function dispatchEventForTesting_(name) {
        if (getMode().test) {
          var event;
          if (typeof this.localWin_.Event === "function") {
            event = new Event(name, {
              bubbles: true,
              cancelable: true
            });
          } else {
            event = this.localWin_.document.createEvent("Event");
            event.initEvent(name, true, true);
          }
          this.localWin_.dispatchEvent(event);
        }
      }
    }]);
    return Bind2;
  }();
  var BindWalker = /* @__PURE__ */ function() {
    function BindWalker2(root) {
      _classCallCheck12(this, BindWalker2);
      var doc = devAssert(root.nodeType == Node.DOCUMENT_NODE ? root : root.ownerDocument, "ownerDocument is null.");
      var useQuerySelector = doc.documentElement.hasAttribute("i-amphtml-binding");
      this.useQuerySelector_ = useQuerySelector;
      this.currentNode = root;
      this.index_ = 0;
      this.nodeList_ = useQuerySelector ? toArray(root.querySelectorAll("[i-amphtml-binding]")) : [];
      if (useQuerySelector && root.nodeType === Node.ELEMENT_NODE && root.hasAttribute("i-amphtml-binding")) {
        this.nodeList_.unshift(root);
      }
      this.treeWalker_ = useQuerySelector ? null : doc.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null, false);
    }
    _createClass11(BindWalker2, [{
      key: "nextNode",
      value: function nextNode() {
        if (this.useQuerySelector_) {
          if (this.index_ == this.nodeList_.length) {
            return null;
          }
          var _next = this.nodeList_[this.index_++];
          this.currentNode = _next;
          return _next;
        }
        var walker = this.treeWalker_;
        var next = walker.nextNode();
        if (next !== null) {
          this.currentNode = next;
        }
        return next;
      }
    }, {
      key: "skipSubtree",
      value: function skipSubtree() {
        if (this.useQuerySelector_) {
          var currentNode = this.currentNode;
          var next = null;
          do {
            next = this.nextNode();
          } while (next !== null && currentNode.contains(next));
          return next;
        }
        var walker = this.treeWalker_;
        for (var n = walker.currentNode; n; n = walker.parentNode()) {
          var sibling = walker.nextSibling();
          if (sibling !== null) {
            this.currentNode = sibling;
            return sibling;
          }
        }
        return null;
      }
    }]);
    return BindWalker2;
  }();

  // extensions/amp-bind/0.1/amp-bind.js
  var TAG6 = "amp-bind";
  AMP.extension(TAG6, "0.1", function(AMP2) {
    AMP2.registerServiceForDoc("bind", Bind);
    AMP2.registerElement("amp-state", AmpState);
    AMP2.registerElement("amp-bind-macro", AmpBindMacro);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-bind-0.1.max.js.map
