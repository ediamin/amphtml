(self.AMP=self.AMP||[]).push({n:"amp-ad-network-adzerk-impl",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
    });
  }

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
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  // src/core/types/enum.js
  function isEnumValue(enumObj, val) {
    for (var k in enumObj) {
      if (enumObj[k] === val) {
        return true;
      }
    }
    return false;
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
  function stringHash32(str) {
    var length = str.length;
    var hash = 5381;
    for (var i = 0; i < length; i++) {
      hash = hash * 33 ^ str.charCodeAt(i);
    }
    return String(hash >>> 0);
  }
  function trimStart(str) {
    if (str.trimStart) {
      return str.trimStart();
    }
    return (str + "_").trim().slice(0, -1);
  }
  function padStart(s, targetLength, padString) {
    if (s.length >= targetLength) {
      return s;
    }
    targetLength = targetLength - s.length;
    var padding = padString;
    while (targetLength > padding.length) {
      padding += padString;
    }
    return padding.slice(0, targetLength) + s;
  }
  function isString(s) {
    return typeof s == "string";
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
  function memo(obj, prop, factory) {
    var result = obj[prop];
    if (result === void 0) {
      result = factory(obj, prop);
      obj[prop] = result;
    }
    return result;
  }
  function recreateNonProtoObject(obj) {
    var copy = map();
    for (var k in obj) {
      if (!hasOwn(obj, k)) {
        continue;
      }
      var v = obj[k];
      copy[k] = isObject(v) ? recreateNonProtoObject(v) : v;
    }
    return copy;
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
  function stripUserError(message) {
    return message.replace(USER_ERROR_SENTINEL, "");
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
  function assertType_(assertFn, subject, shouldBeTruthy, defaultMessage, opt_message) {
    if (isArray(opt_message)) {
      assertFn(shouldBeTruthy, opt_message.concat([subject]));
    } else {
      assertFn(shouldBeTruthy, (opt_message || defaultMessage) + ": %s", subject);
    }
    return subject;
  }
  function assertElement(assertFn, shouldBeElement, opt_message) {
    return assertType_(assertFn, shouldBeElement, isElement(shouldBeElement), "Element expected", opt_message);
  }

  // src/core/error/index.js
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
    for (var _iterator = _createForOfIteratorHelperLoose2(arguments), _step; !(_step = _iterator()).done; ) {
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

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }

  // src/service.js
  function installServiceInEmbedDoc(ampdoc, id, service) {
    registerServiceInternal(getAmpdocServiceHolder(ampdoc), ampdoc, id, function() {
      return service;
    }, true);
  }
  function registerServiceBuilderInEmbedWin(embedWin, id, constructor) {
    registerServiceInternal(embedWin, embedWin, id, constructor, true);
  }
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
  function setParentWindow(win, parentWin) {
    win.__AMP_PARENT = parentWin;
    win.__AMP_TOP = getTopWindow(parentWin);
  }
  function getTopWindow(win) {
    return win.__AMP_TOP || (win.__AMP_TOP = win);
  }
  function getParentWindowFrameElement(node, opt_topWin) {
    var childWin = (node.ownerDocument || node).defaultView;
    var topWin = opt_topWin || getTopWindow(childWin);
    if (childWin && childWin != topWin && getTopWindow(childWin) == topWin) {
      try {
        return childWin.frameElement;
      } catch (e) {
      }
    }
    return null;
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
  function isDisposable(service) {
    return typeof service.dispose == "function";
  }
  function assertDisposable(service) {
    devAssert(isDisposable(service), "required to implement Disposable");
    return service;
  }
  function disposeServicesForEmbed(embedWin) {
    disposeServicesInternal(embedWin);
  }
  function disposeServicesInternal(holder) {
    var services = getServices(holder);
    var _loop = function _loop2(id2) {
      if (!Object.prototype.hasOwnProperty.call(services, id2)) {
        return "continue";
      }
      var serviceHolder = services[id2];
      if (serviceHolder.sharedInstance) {
        return "continue";
      }
      if (serviceHolder.obj) {
        disposeServiceInternal(id2, serviceHolder.obj);
      } else if (serviceHolder.promise) {
        serviceHolder.promise.then(function(instance) {
          return disposeServiceInternal(id2, instance);
        });
      }
    };
    for (var id in services) {
      var _ret = _loop(id);
      if (_ret === "continue")
        continue;
    }
  }
  function disposeServiceInternal(id, service) {
    if (!isDisposable(service)) {
      return;
    }
    try {
      assertDisposable(service).dispose();
    } catch (e) {
      dev().error("SERVICE", "failed to dispose service", id, e);
    }
  }
  function adoptServiceForEmbedDoc(ampdoc, id) {
    var service = getServiceInternal(getAmpdocServiceHolder(devAssert(ampdoc.getParent())), id);
    registerServiceInternal(getAmpdocServiceHolder(ampdoc), ampdoc, id, function() {
      return service;
    }, false, true);
  }
  function adoptServiceFactoryForEmbedDoc(ampdoc, id) {
    var parentHolder = getAmpdocServiceHolder(devAssert(ampdoc.getParent()));
    devAssert(isServiceRegistered(parentHolder, id), "Expected service " + id + " to be registered");
    var service = getServices(parentHolder)[id];
    registerServiceInternal(getAmpdocServiceHolder(ampdoc), ampdoc, id, devAssert(service.ctor));
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
  function devAssertElement(shouldBeElement, opt_message) {
    if (isMinifiedMode()) {
      return shouldBeElement;
    }
    devAssertDceCheck();
    return assertElement(devAssert2, shouldBeElement, opt_message);
  }

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
  function escapeCssSelectorIdent(ident) {
    if (false) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
  }

  // src/core/dom/query.js
  function assertIsName(name) {
    devAssert2(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function scopedQuerySelectionFallback(root, selector) {
    var unique = "i-amphtml-scoped";
    root.classList.add(unique);
    var scopedSelector = prependSelectorsWith(selector, "." + unique);
    var elements2 = root.querySelectorAll(scopedSelector);
    root.classList.remove(unique);
    return elements2;
  }
  function scopedQuerySelector(root, selector) {
    if (isScopeSelectorSupported(root)) {
      return root.querySelector(prependSelectorsWith(selector, ":scope"));
    }
    var fallbackResult = scopedQuerySelectionFallback(root, selector);
    return fallbackResult[0] === void 0 ? null : fallbackResult[0];
  }
  function scopedQuerySelectorAll(root, selector) {
    if (isScopeSelectorSupported(root)) {
      return root.querySelectorAll(prependSelectorsWith(selector, ":scope"));
    }
    return scopedQuerySelectionFallback(root, selector);
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
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
  }

  // src/dom.js
  var HTML_ESCAPE_CHARS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };
  var HTML_ESCAPE_REGEX = /(&|<|>|"|'|`)/g;
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
  function removeElement(element) {
    if (element.parentElement) {
      element.parentElement.removeChild(element);
    }
  }
  function insertAfterOrAtStart(root, element, after) {
    if (after === void 0) {
      after = null;
    }
    if (!after) {
      insertAtStart(root, element);
      return;
    }
    var before = after.nextSibling;
    root.insertBefore(element, before);
  }
  function insertAtStart(root, element) {
    root.insertBefore(element, root.firstChild);
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
  function rootNodeFor(node) {
    if (Node.prototype.getRootNode) {
      return node.getRootNode() || node;
    }
    var n;
    for (n = node; !!n.parentNode && !isShadowRoot(n); n = n.parentNode) {
    }
    return n;
  }
  function isShadowRoot(value) {
    if (!value) {
      return false;
    }
    if (value.tagName == "I-AMPHTML-SHADOW-ROOT") {
      return true;
    }
    return value.nodeType == 11 && Object.prototype.toString.call(value) === "[object ShadowRoot]";
  }
  function hasNextNodeInDocumentOrder(element, opt_stopNode) {
    var currentElement = element;
    do {
      if (currentElement.nextSibling) {
        return true;
      }
    } while ((currentElement = currentElement.parentNode) && currentElement != opt_stopNode);
    return false;
  }
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function openWindowDialog(win, url, target, opt_features) {
    var res;
    try {
      res = win.open(url, target, opt_features);
    } catch (e) {
      dev().error("DOM", "Failed to open url on target: ", target, e);
    }
    if (!res && target != "_top" && !includes(opt_features || "", "noopener")) {
      res = win.open(url, "_top");
    }
    return res;
  }
  function escapeHtml(text) {
    if (!text) {
      return text;
    }
    return text.replace(HTML_ESCAPE_REGEX, escapeHtmlChar);
  }
  function escapeHtmlChar(c) {
    return HTML_ESCAPE_CHARS[c];
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }
  function isIframed(win) {
    return win.parent && win.parent != win;
  }
  function isEnabled(element) {
    return !(element.disabled || matches(element, ":disabled"));
  }
  function getVerticalScrollbarWidth(win) {
    var documentElement = win.document.documentElement;
    var windowWidth = win.innerWidth;
    var documentWidth = documentElement.clientWidth;
    return windowWidth - documentWidth;
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
  var Services = /* @__PURE__ */ function() {
    function Services2() {
      _classCallCheck2(this, Services2);
    }
    _createClass(Services2, null, [{
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
      value: function ampdocServiceFor(window2) {
        return getService(window2, "ampdoc");
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
      value: function batchedXhrFor(window2) {
        return getService(window2, "batched-xhr");
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
      value: function cryptoFor(window2) {
        return getService(window2, "crypto");
      }
    }, {
      key: "documentInfoForDoc",
      value: function documentInfoForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "documentInfo").get();
      }
    }, {
      key: "extensionsFor",
      value: function extensionsFor(window2) {
        return getService(window2, "extensions");
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
      value: function performanceFor(window2) {
        return getService(window2, "performance");
      }
    }, {
      key: "performanceForOrNull",
      value: function performanceForOrNull(window2) {
        return getExistingServiceOrNull(window2, "performance");
      }
    }, {
      key: "platformFor",
      value: function platformFor(window2) {
        return getService(window2, "platform");
      }
    }, {
      key: "positionObserverForDoc",
      value: function positionObserverForDoc(element) {
        return getServiceForDoc(element, "position-observer");
      }
    }, {
      key: "preconnectFor",
      value: function preconnectFor(window2) {
        return getService(window2, "preconnect");
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
      value: function timerFor(window2) {
        return getServiceInEmbedWin(window2, "timer");
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
      value: function vsyncFor(window2) {
        return getService(window2, "vsync");
      }
    }, {
      key: "viewportForDoc",
      value: function viewportForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "viewport");
      }
    }, {
      key: "xhrFor",
      value: function xhrFor(window2) {
        return getService(window2, "xhr");
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

  // src/format.js
  function isAmpFormatType(formats, doc) {
    var html2 = doc.documentElement;
    var isFormatType = formats.some(function(format) {
      return html2.hasAttribute(format);
    });
    return isFormatType;
  }
  function isAmp4Email(doc) {
    return isAmpFormatType(["\u26A14email", "amp4email"], doc);
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
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__AMP_MEDIA_LOAD_FAILURE_SRC";
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }
  function getDetail(event) {
    return event.detail;
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
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function loadPromise(eleOrWindow) {
    var unlistenLoad;
    var unlistenError;
    if (isLoaded(eleOrWindow)) {
      return Promise.resolve(eleOrWindow);
    }
    var isMediaElement = isHTMLMediaElement(eleOrWindow);
    if (isMediaElement && eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] === eleOrWindow.currentSrc) {
      return Promise.reject(eleOrWindow);
    }
    var loadingPromise = new Promise(function(resolve, reject) {
      if (isMediaElement) {
        unlistenLoad = listenOnce(eleOrWindow, "loadedmetadata", resolve, {
          capture: true
        });
      } else {
        unlistenLoad = listenOnce(eleOrWindow, "load", resolve);
      }
      if (!eleOrWindow.tagName) {
        return;
      }
      var errorTarget = eleOrWindow;
      if (isMediaElement && !eleOrWindow.hasAttribute("src")) {
        errorTarget = lastChildElement(eleOrWindow, function(child) {
          return child.tagName === "SOURCE";
        });
        if (!errorTarget) {
          return reject(new Error("Media has no source."));
        }
      }
      unlistenError = listenOnce(errorTarget, "error", reject);
    });
    return loadingPromise.then(function() {
      if (unlistenError) {
        unlistenError();
      }
      return eleOrWindow;
    }, function() {
      if (unlistenLoad) {
        unlistenLoad();
      }
      failedToLoad(eleOrWindow);
    });
  }
  function failedToLoad(eleOrWindow) {
    if (isHTMLMediaElement(eleOrWindow)) {
      eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] = eleOrWindow.currentSrc || true;
    }
    var target = eleOrWindow;
    if (target && target.src) {
      target = target.src;
    }
    throw user().createError(LOAD_FAILURE_PREFIX, target);
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }
  function isLoadErrorMessage(message) {
    return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
  }

  // src/core/document-ready.js
  function isDocumentReady(doc) {
    return doc.readyState != "loading" && doc.readyState != "uninitialized";
  }
  function isDocumentComplete(doc) {
    return doc.readyState == "complete";
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
  function whenDocumentComplete(doc) {
    return new Promise(function(resolve) {
      onDocumentState(doc, isDocumentComplete, resolve);
    });
  }

  // src/service/variable-source.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
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
  var WAITFOR_EVENTS = {
    VIEWER_FIRST_VISIBLE: 1,
    DOCUMENT_COMPLETE: 2,
    LOAD: 3,
    LOAD_END: 4
  };
  var NAV_TIMING_WAITFOR_EVENTS = {
    "navigationStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "redirectStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "redirectEnd": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "fetchStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "domainLookupStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "domainLookupEnd": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "connectStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "secureConnectionStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "connectEnd": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "requestStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "responseStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "responseEnd": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "domLoading": WAITFOR_EVENTS.DOCUMENT_COMPLETE,
    "domInteractive": WAITFOR_EVENTS.DOCUMENT_COMPLETE,
    "domContentLoaded": WAITFOR_EVENTS.DOCUMENT_COMPLETE,
    "domComplete": WAITFOR_EVENTS.DOCUMENT_COMPLETE,
    "loadEventStart": WAITFOR_EVENTS.LOAD,
    "loadEventEnd": WAITFOR_EVENTS.LOAD_END
  };
  function getTimingDataAsync(win, startEvent, endEvent) {
    var startWaitForEvent = NAV_TIMING_WAITFOR_EVENTS[startEvent] || WAITFOR_EVENTS.LOAD;
    var endWaitForEvent = endEvent ? NAV_TIMING_WAITFOR_EVENTS[endEvent] || WAITFOR_EVENTS.LOAD : startWaitForEvent;
    var waitForEvent = Math.max(startWaitForEvent, endWaitForEvent);
    var readyPromise;
    if (waitForEvent === WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE) {
      readyPromise = resolvedPromise();
    } else if (waitForEvent === WAITFOR_EVENTS.DOCUMENT_COMPLETE) {
      readyPromise = whenDocumentComplete(win.document);
    } else if (waitForEvent === WAITFOR_EVENTS.LOAD) {
      readyPromise = loadPromise(win);
    } else if (waitForEvent === WAITFOR_EVENTS.LOAD_END) {
      var timer = Services.timerFor(win);
      readyPromise = loadPromise(win).then(function() {
        return timer.promise(1);
      });
    }
    devAssert(readyPromise, "waitForEvent not supported " + waitForEvent);
    return readyPromise.then(function() {
      return getTimingDataSync(win, startEvent, endEvent);
    });
  }
  function getTimingDataSync(win, startEvent, endEvent) {
    var timingInfo = win["performance"] && win["performance"]["timing"];
    if (!timingInfo || timingInfo["navigationStart"] == 0) {
      return;
    }
    var metric = endEvent === void 0 ? timingInfo[startEvent] : timingInfo[endEvent] - timingInfo[startEvent];
    if (!isFiniteNumber(metric) || metric < 0) {
      return;
    } else {
      return metric;
    }
  }
  function getNavigationData(win, attribute) {
    var navigationInfo = win["performance"] && win["performance"]["navigation"];
    if (!navigationInfo || navigationInfo[attribute] === void 0) {
      return;
    }
    return navigationInfo[attribute];
  }
  var VariableSource = /* @__PURE__ */ function() {
    function VariableSource2(ampdoc) {
      _classCallCheck3(this, VariableSource2);
      this.ampdoc = ampdoc;
      this.replacements_ = Object.create(null);
      this.initialized_ = false;
      this.getUrlMacroAllowlist_();
    }
    _createClass2(VariableSource2, [{
      key: "initialize_",
      value: function initialize_() {
        this.initialize();
        this.initialized_ = true;
      }
    }, {
      key: "initialize",
      value: function initialize() {
      }
    }, {
      key: "get",
      value: function get(name) {
        if (!this.initialized_) {
          this.initialize_();
        }
        return this.replacements_[name];
      }
    }, {
      key: "set",
      value: function set(varName, syncResolver) {
        devAssert(varName.indexOf("RETURN") == -1);
        this.replacements_[varName] = this.replacements_[varName] || {
          sync: void 0,
          async: void 0
        };
        this.replacements_[varName].sync = syncResolver;
        return this;
      }
    }, {
      key: "setAsync",
      value: function setAsync(varName, asyncResolver) {
        devAssert(varName.indexOf("RETURN") == -1);
        this.replacements_[varName] = this.replacements_[varName] || {
          sync: void 0,
          async: void 0
        };
        this.replacements_[varName].async = asyncResolver;
        return this;
      }
    }, {
      key: "setBoth",
      value: function setBoth(varName, syncResolver, asyncResolver) {
        return this.set(varName, syncResolver).setAsync(varName, asyncResolver);
      }
    }, {
      key: "getExpr",
      value: function getExpr(opt_bindings, opt_allowlist) {
        if (!this.initialized_) {
          this.initialize_();
        }
        var all = _extends({}, this.replacements_, opt_bindings);
        return this.buildExpr_(Object.keys(all), opt_allowlist);
      }
    }, {
      key: "buildExpr_",
      value: function buildExpr_(keys, opt_allowlist) {
        var _this = this;
        if (this.getUrlMacroAllowlist_()) {
          keys = keys.filter(function(key) {
            return _this.getUrlMacroAllowlist_().includes(key);
          });
        }
        if (opt_allowlist) {
          keys = keys.filter(function(key) {
            return opt_allowlist[key];
          });
        }
        if (keys.length === 0) {
          var regexThatMatchesNothing = /_^/g;
          return regexThatMatchesNothing;
        }
        keys.sort(function(s1, s2) {
          return s2.length - s1.length;
        });
        var escaped = keys.map(function(key) {
          if (key[0] === "$") {
            return "\\" + key;
          }
          return key;
        });
        var all = escaped.join("|");
        var regexStr = "\\$?(" + all + ")";
        return new RegExp(regexStr, "g");
      }
    }, {
      key: "getUrlMacroAllowlist_",
      value: function getUrlMacroAllowlist_() {
        if (this.variableAllowlist_) {
          return this.variableAllowlist_;
        }
        if (this.ampdoc.isSingleDoc()) {
          var doc = this.ampdoc.getRootNode();
          if (isAmp4Email(doc)) {
            this.variableAllowlist_ = [""];
            return this.variableAllowlist_;
          }
        }
      }
    }]);
    return VariableSource2;
  }();

  // extensions/amp-a4a/0.1/a4a-variable-source.js
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
  function _inherits(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass2, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var ALLOWLISTED_VARIABLES = ["AMPDOC_HOST", "AMPDOC_HOSTNAME", "AMPDOC_URL", "AMP_VERSION", "AVAILABLE_SCREEN_HEIGHT", "AVAILABLE_SCREEN_WIDTH", "BACKGROUND_STATE", "BROWSER_LANGUAGE", "CANONICAL_HOST", "CANONICAL_HOSTNAME", "CANONICAL_PATH", "CANONICAL_URL", "COUNTER", "DOCUMENT_CHARSET", "DOCUMENT_REFERRER", "PAGE_VIEW_ID", "RANDOM", "SCREEN_COLOR_DEPTH", "SCREEN_HEIGHT", "SCREEN_WIDTH", "SCROLL_HEIGHT", "SCROLL_WIDTH", "SOURCE_HOST", "SOURCE_HOSTNAME", "SOURCE_PATH", "SOURCE_URL", "TIMESTAMP", "TIMEZONE", "TITLE", "TOTAL_ENGAGED_TIME", "USER_AGENT", "VARIANT", "VARIANTS", "VIEWER", "VIEWPORT_HEIGHT", "VIEWPORT_WIDTH"];
  var A4AVariableSource = /* @__PURE__ */ function(_VariableSource) {
    _inherits(A4AVariableSource2, _VariableSource);
    var _super = _createSuper(A4AVariableSource2);
    function A4AVariableSource2(parentAmpdoc, embedWin) {
      var _this;
      _classCallCheck4(this, A4AVariableSource2);
      _this = _super.call(this, parentAmpdoc);
      var headNode = parentAmpdoc.getHeadNode();
      var urlReplacements = Services.urlReplacementsForDoc(headNode);
      _this.globalVariableSource_ = urlReplacements.getVariableSource();
      _this.win_ = embedWin;
      return _this;
    }
    _createClass3(A4AVariableSource2, [{
      key: "initialize",
      value: function initialize() {
        var _this2 = this;
        for (var v = 0; v < ALLOWLISTED_VARIABLES.length; v++) {
          var varName = ALLOWLISTED_VARIABLES[v];
          var resolvers = this.globalVariableSource_.get(varName);
          this.set(varName, resolvers.sync).setAsync(varName, resolvers.async);
        }
        this.set("NAV_TIMING", function(startAttribute, endAttribute) {
          userAssert(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
          return getTimingDataSync(_this2.win_, startAttribute, endAttribute);
        }).setAsync("NAV_TIMING", function(startAttribute, endAttribute) {
          userAssert(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
          return getTimingDataAsync(_this2.win_, startAttribute, endAttribute);
        });
        this.set("NAV_TYPE", function() {
          return getNavigationData(_this2.win_, "type");
        });
        this.set("NAV_REDIRECT_COUNT", function() {
          return getNavigationData(_this2.win_, "redirectCount");
        });
        this.set("HTML_ATTR", this.htmlAttributeBinding_.bind(this));
        this.set("CLIENT_ID", function() {
          return null;
        });
      }
    }, {
      key: "htmlAttributeBinding_",
      value: function htmlAttributeBinding_(cssSelector, var_args) {
        var HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE = 20;
        var HTML_ATTR_MAX_ELEMENTS_TO_RETURN = 10;
        var HTML_ATTR_MAX_ATTRS = 10;
        var TAG17 = "A4AVariableSource";
        var attributeNames = Array.prototype.slice.call(arguments, 1);
        if (!cssSelector || !attributeNames.length) {
          return "[]";
        }
        if (attributeNames.length > HTML_ATTR_MAX_ATTRS) {
          user().error(TAG17, "At most " + HTML_ATTR_MAX_ATTRS + " may be requested.");
          return "[]";
        }
        cssSelector = decodeURI(cssSelector);
        var elements2;
        try {
          elements2 = this.win_.document.querySelectorAll(cssSelector);
        } catch (e) {
          user().error(TAG17, "Invalid selector: " + cssSelector);
          return "[]";
        }
        if (elements2.length > HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE) {
          user().error(TAG17, "CSS selector may match at most " + (HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE + " elements."));
          return "[]";
        }
        var result = [];
        for (var i = 0; i < elements2.length && result.length < HTML_ATTR_MAX_ELEMENTS_TO_RETURN; ++i) {
          var currentResult = {};
          var foundAtLeastOneAttr = false;
          for (var j = 0; j < attributeNames.length; ++j) {
            var attributeName = attributeNames[j];
            if (elements2[i].hasAttribute(attributeName)) {
              currentResult[attributeName] = elements2[i].getAttribute(attributeName);
              foundAtLeastOneAttr = true;
            }
          }
          if (foundAtLeastOneAttr) {
            result.push(currentResult);
          }
        }
        return JSON.stringify(result);
      }
    }]);
    return A4AVariableSource2;
  }(VariableSource);

  // src/experiments/ads-initial-intersection-exp.js
  var ADS_INITIAL_INTERSECTION_EXP = {
    id: "ads-initialIntersection",
    control: "31060065",
    experiment: "31060066"
  };

  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };

  // src/core/dom/stream/detached.js
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
  var DetachedDomStream = /* @__PURE__ */ function() {
    function DetachedDomStream2(win, onChunk, onEnd) {
      _classCallCheck5(this, DetachedDomStream2);
      this.onChunk_ = onChunk;
      this.onEnd_ = onEnd;
      this.detachedDoc_ = win.document.implementation.createHTMLDocument("");
      this.detachedDoc_.open();
      this.eof_ = false;
    }
    _createClass4(DetachedDomStream2, [{
      key: "write",
      value: function write(chunk) {
        devAssert2(!this.eof_, "Detached doc already closed.");
        if (chunk) {
          this.detachedDoc_.write(chunk);
        }
        this.onChunk_(this.detachedDoc_);
      }
    }, {
      key: "close",
      value: function close() {
        this.eof_ = true;
        this.detachedDoc_.close();
        this.onEnd_(this.detachedDoc_);
      }
    }]);
    return DetachedDomStream2;
  }();

  // src/core/dom/stream/response.js
  function streamResponseToWriter(win, response, writer) {
    var hasContentDeferred = new Deferred();
    if (win.TextDecoder && win.ReadableStream) {
      var firstRead = true;
      var reader = response.body.getReader();
      var decoder = new TextDecoder();
      reader.read().then(function handleChunk(_ref) {
        var done = _ref.done, value = _ref.value;
        if (firstRead) {
          hasContentDeferred.resolve(!done);
          firstRead = false;
        }
        value = value || new Uint8Array(0);
        var text = decoder.decode(value, {
          stream: !done
        });
        if (text) {
          writer.write(text);
        }
        if (!done) {
          return reader.read().then(handleChunk);
        }
        writer.close();
      });
    } else {
      response.text().then(function(text) {
        hasContentDeferred.resolve(!!text);
        writer.write(text);
        writer.close();
      });
    }
    return hasContentDeferred.promise;
  }

  // src/utils/dom-writer.js
  function removeNoScriptElements(parent) {
    var noscriptElements = childElementsByTag(parent, "noscript");
    iterateCursor(noscriptElements, function(element) {
      removeElement(element);
    });
  }

  // src/utils/dom-tranform-stream.js
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
  var DEFAULT_TRANSFER_THROTTLE_FUNC = function DEFAULT_TRANSFER_THROTTLE_FUNC2(cb) {
    return Promise.resolve(cb());
  };
  var DomTransformStream = /* @__PURE__ */ function() {
    function DomTransformStream2(win, opt_transferThrottleFunc) {
      _classCallCheck6(this, DomTransformStream2);
      var headDefer = new Deferred();
      this.headPromise_ = headDefer.promise;
      this.headResolver_ = headDefer.resolve;
      var transferDefer = new Deferred();
      this.bodyTransferPromise_ = transferDefer.promise;
      this.bodyTransferResolver_ = transferDefer.resolve;
      this.detachedBody_ = null;
      var targetBodyDefer = new Deferred();
      this.targetBodyPromise_ = targetBodyDefer.promise;
      this.targetBodyResolver_ = targetBodyDefer.resolve;
      this.currentChunkTransferPromise_ = null;
      this.shouldTransfer_ = false;
      this.transferThrottle_ = opt_transferThrottleFunc || DEFAULT_TRANSFER_THROTTLE_FUNC;
    }
    _createClass5(DomTransformStream2, [{
      key: "onChunk",
      value: function onChunk(detachedDoc) {
        if (!this.detachedBody_ && detachedDoc.body) {
          this.detachedBody_ = detachedDoc.body;
          this.headResolver_(devAssertElement(detachedDoc.head));
        }
        if (this.shouldTransfer_) {
          this.transferBodyChunk_();
        }
      }
    }, {
      key: "onEnd",
      value: function onEnd(unusedCompleteDoc) {
        this.bodyTransferResolver_(this.transferBodyChunk_());
      }
    }, {
      key: "waitForHead",
      value: function waitForHead() {
        return this.headPromise_;
      }
    }, {
      key: "transferBody",
      value: function transferBody(targetBody) {
        var _this = this;
        devAssertElement(targetBody, "No target body given to DomTransformStream.transferBody");
        devAssert2(!this.shouldTransfer_, "DomTransformStream.transferBody should only be called once");
        this.shouldTransfer_ = true;
        this.targetBodyResolver_(targetBody);
        this.headPromise_.then(function() {
          var attrs = _this.detachedBody_.attributes;
          for (var i = 0; i < attrs.length; i++) {
            var _attrs$i = attrs[i], name = _attrs$i.name, value = _attrs$i.value;
            targetBody.setAttribute(name, value);
          }
        });
        this.transferBodyChunk_();
        return this.bodyTransferPromise_;
      }
    }, {
      key: "transferBodyChunk_",
      value: function transferBodyChunk_() {
        var _this2 = this;
        if (this.currentChunkTransferPromise_) {
          return this.currentChunkTransferPromise_;
        }
        this.currentChunkTransferPromise_ = Promise.all([this.targetBodyPromise_, this.headPromise_]).then(function(resolvedElements) {
          var transferThrottle = _this2.transferThrottle_;
          return transferThrottle(function() {
            _this2.currentChunkTransferPromise_ = null;
            var targetBody = resolvedElements[0];
            removeNoScriptElements(devAssertElement(_this2.detachedBody_));
            while (_this2.detachedBody_.firstChild) {
              targetBody.appendChild(_this2.detachedBody_.firstChild);
            }
          });
        });
        return this.currentChunkTransferPromise_;
      }
    }]);
    return DomTransformStream2;
  }();

  // extensions/amp-geo/0.1/amp-geo-in-group.js
  var GEO_IN_GROUP = {
    NOT_DEFINED: 1,
    IN: 2,
    NOT_IN: 3
  };

  // src/static-template.js
  var htmlContainer;
  function htmlFor(nodeOrDoc) {
    var doc = nodeOrDoc.ownerDocument || nodeOrDoc;
    if (!htmlContainer || htmlContainer.ownerDocument !== doc) {
      htmlContainer = doc.createElement("div");
    }
    return html;
  }
  function html(strings) {
    return createNode(htmlContainer, strings);
  }
  function createNode(container, strings) {
    devAssert(strings.length === 1, "Improper html template tag usage.");
    container.innerHTML = strings[0];
    var el = container.firstElementChild;
    devAssert(el, "No elements in template");
    devAssert(!el.nextElementSibling, "Too many root elements in template");
    container.removeChild(el);
    return el;
  }

  // src/experiments/index.js
  function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray3(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var TAG = "EXPERIMENTS";
  var LOCAL_STORAGE_KEY = "amp-experiment-toggles";
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isCanary(win) {
    var _win$AMP_CONFIG;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.canary);
  }
  function getBinaryType(win) {
    var _win$AMP_CONFIG2;
    return ((_win$AMP_CONFIG2 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG2.type) || "unknown";
  }
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
        for (var _iterator = _createForOfIteratorHelperLoose3(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose3(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
  function experimentTogglesOrNull(win) {
    return win[TOGGLES_WINDOW_PROPERTY] || null;
  }
  function getExperimentToggles(win) {
    var _experimentsString;
    var experimentsString = "";
    try {
      if ("localStorage" in win) {
        experimentsString = win.localStorage.getItem(LOCAL_STORAGE_KEY);
      }
    } catch (_unused) {
      dev().warn(TAG, "Failed to retrieve experiments from localStorage.");
    }
    var tokens = ((_experimentsString = experimentsString) == null ? void 0 : _experimentsString.split(/\s*,\s*/g)) || [];
    var toggles = map();
    for (var _iterator3 = _createForOfIteratorHelperLoose3(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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
  function getExperimentBranch(win, experimentName) {
    return win.__AMP_EXPERIMENT_BRANCHES ? win.__AMP_EXPERIMENT_BRANCHES[experimentName] : null;
  }

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
  function px(value) {
    return value + "px";
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

  // src/core/dom/img.js
  function transparentPng(doc, width, height) {
    var canvas = doc.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas.toDataURL();
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
  var LayoutPriority = {
    CONTENT: 0,
    METADATA: 1,
    ADS: 2,
    BACKGROUND: 3
  };
  function getLayoutClass(layout) {
    return "i-amphtml-layout-" + layout;
  }
  function isLayoutSizeDefined(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID || layout == Layout.INTRINSIC;
  }
  function getLengthNumeral(length) {
    var res = parseFloat(length);
    return isFiniteNumber(res) ? res : void 0;
  }

  // src/core/types/string/bytes.js
  function utf8Decode(bytes) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(bytes);
    }
    var asciiString = bytesToString(new Uint8Array(bytes.buffer || bytes));
    return decodeURIComponent(escape(asciiString));
  }
  function utf8Encode(string) {
    if (typeof TextEncoder !== "undefined") {
      return new TextEncoder("utf-8").encode(string);
    }
    return stringToBytes(unescape(encodeURIComponent(string)));
  }
  function stringToBytes(str) {
    var bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      devAssert2(charCode <= 255, "Characters must be in range [0,255]");
      bytes[i] = charCode;
    }
    return bytes;
  }
  function bytesToString(bytes) {
    var array = new Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
      array[i] = String.fromCharCode(bytes[i]);
    }
    return array.join("");
  }
  function getCryptoRandomBytesArray(win, length) {
    var crypto = win.crypto;
    if (true) {
      crypto = crypto || win.msCrypto;
      if (!crypto || !crypto.getRandomValues) {
        return null;
      }
    }
    var uint8array = new Uint8Array(length);
    crypto.getRandomValues(uint8array);
    return uint8array;
  }

  // src/core/types/string/base64.js
  var base64UrlEncodeSubs = {
    "+": "-",
    "/": "_",
    "=": "."
  };
  function base64DecodeToBytes(str) {
    return stringToBytes(atob(str));
  }
  function base64UrlEncodeFromBytes(bytes) {
    var str = bytesToString(bytes);
    return btoa(str).replace(/[+/=]/g, function(ch) {
      return base64UrlEncodeSubs[ch];
    });
  }

  // extensions/amp-a4a/0.1/signature-verifier.js
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
  var AMP_SIGNATURE_HEADER = "AMP-Fast-Fetch-Signature";
  var VerificationStatus = {
    OK: 0,
    UNVERIFIED: 1,
    ERROR_KEY_NOT_FOUND: 2,
    ERROR_SIGNATURE_MISMATCH: 3,
    CRYPTO_UNAVAILABLE: 4
  };
  var SignatureVerifier = /* @__PURE__ */ function() {
    function SignatureVerifier2(win, signingServerURLs2) {
      _classCallCheck7(this, SignatureVerifier2);
      this.win_ = win;
      this.signingServerURLs_ = signingServerURLs2;
      this.signers_ = Services.cryptoFor(win).isPkcsAvailable() ? {} : null;
      this.getNow_ = win.performance && win.performance.now ? win.performance.now.bind(win.performance) : Date.now;
    }
    _createClass6(SignatureVerifier2, [{
      key: "loadKeyset",
      value: function loadKeyset(signingServiceName) {
        if (this.signers_ && !this.signers_[signingServiceName]) {
          var keys = {};
          var promise = this.fetchAndAddKeys_(keys, signingServiceName, null);
          this.signers_[signingServiceName] = {
            promise,
            keys
          };
        }
      }
    }, {
      key: "verify",
      value: function verify(creative, headers) {
        var signatureFormat = /^([A-Za-z0-9._-]+):([A-Za-z0-9._-]+):([A-Za-z0-9+/]{341}[AQgw]==)$/;
        if (!headers.has(AMP_SIGNATURE_HEADER)) {
          return Promise.resolve(VerificationStatus.UNVERIFIED);
        }
        var headerValue = headers.get(AMP_SIGNATURE_HEADER);
        var match = signatureFormat.exec(headerValue);
        if (!match) {
          user().error("AMP-A4A", "Invalid signature header: " + headerValue.split(":")[0]);
          return Promise.resolve(VerificationStatus.ERROR_SIGNATURE_MISMATCH);
        }
        return this.verifyCreativeAndSignature(match[1], match[2], base64DecodeToBytes(match[3]), creative);
      }
    }, {
      key: "verifyCreativeAndSignature",
      value: function verifyCreativeAndSignature(signingServiceName, keypairId, signature, creative) {
        var _this = this;
        if (!this.signers_) {
          return Promise.resolve(VerificationStatus.CRYPTO_UNAVAILABLE);
        }
        var signer = this.signers_[signingServiceName];
        devAssert(signer, "Keyset for service %s not loaded before verification", signingServiceName);
        return signer.promise.then(function(success) {
          if (!success) {
            return VerificationStatus.UNVERIFIED;
          }
          var keyPromise = signer.keys[keypairId];
          if (keyPromise === void 0) {
            signer.promise = _this.fetchAndAddKeys_(signer.keys, signingServiceName, keypairId).then(function(success2) {
              if (signer.keys[keypairId] === void 0) {
                signer.keys[keypairId] = null;
              }
              return success2;
            });
            return _this.verifyCreativeAndSignature(signingServiceName, keypairId, signature, creative);
          } else if (keyPromise === null) {
            return VerificationStatus.ERROR_KEY_NOT_FOUND;
          } else {
            return keyPromise.then(function(key) {
              if (!key) {
                return VerificationStatus.UNVERIFIED;
              }
              var crypto = Services.cryptoFor(_this.win_);
              return crypto.verifyPkcs(key, signature, creative).then(function(result) {
                return result ? VerificationStatus.OK : VerificationStatus.ERROR_SIGNATURE_MISMATCH;
              }, function(err) {
                var message = err && err.message;
                dev().error("AMP-A4A", "Failed to verify signature: " + message);
                return VerificationStatus.UNVERIFIED;
              });
            });
          }
        });
      }
    }, {
      key: "fetchAndAddKeys_",
      value: function fetchAndAddKeys_(keys, signingServiceName, keypairId) {
        var _this2 = this;
        var url = this.signingServerURLs_[signingServiceName];
        if (keypairId != null) {
          url += "?kid=" + encodeURIComponent(keypairId);
        }
        return Services.xhrFor(this.win_).fetchJson(url, {
          mode: "cors",
          method: "GET",
          ampCors: false,
          credentials: "omit"
        }).then(function(response) {
          devAssert(response.status === 200, "Fast Fetch keyset spec requires status code 200");
          devAssert(response.headers.get("Content-Type") == "application/jwk-set+json", "Fast Fetch keyset spec requires Content-Type: application/jwk-set+json");
          return response.json().then(function(jsonResponse) {
            var jwkSet = jsonResponse;
            if (!jwkSet || !isArray(jwkSet["keys"])) {
              signingServiceError(signingServiceName, "Key set (" + JSON.stringify(jwkSet) + ') has no "keys"');
              return false;
            }
            jwkSet["keys"].forEach(function(jwk) {
              if (!jwk || typeof jwk["kid"] != "string") {
                signingServiceError(signingServiceName, "Key (" + JSON.stringify(jwk) + ') has no "kid"');
              } else if (keys[jwk["kid"]] === void 0) {
                keys[jwk["kid"]] = Services.cryptoFor(_this2.win_).importPkcsKey(jwk).catch(function(err) {
                  var jwkData = JSON.stringify(jwk);
                  var message = err && err.message;
                  signingServiceError(signingServiceName, "Failed to import key (" + jwkData + "): " + message);
                  return null;
                });
              }
            });
            return true;
          }, function(err) {
            signingServiceError(signingServiceName, "Failed to parse JSON: " + (err && err.response));
            return false;
          });
        }, function(err) {
          if (err && err.response) {
            signingServiceError(signingServiceName, "Status code " + err.response.status);
          }
          return false;
        });
      }
    }]);
    return SignatureVerifier2;
  }();
  function signingServiceError(signingServiceName, message) {
    dev().error("AMP-A4A", "Signing service error for " + signingServiceName + ": " + message);
  }

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck8(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass7(LruCache2, [{
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
  var INVALID_PROTOCOLS = [
    "javascript:",
    "data:",
    "vbscript:"
  ];
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
  function addMissingParamsToUrl(url, params) {
    var location = parseUrlDeprecated(url);
    var existingParams = parseQueryString(location.search);
    var paramsToAdd = dict({});
    var keys = Object.keys(params);
    for (var i = 0; i < keys.length; i++) {
      if (!hasOwn(existingParams, keys[i])) {
        paramsToAdd[keys[i]] = params[keys[i]];
      }
    }
    return addParamsToUrl(url, paramsToAdd);
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
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    userAssert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function removeFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return url;
    }
    return url.substring(0, index);
  }
  function isProxyOrigin(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return urls.cdnProxyRegex.test(url.origin);
  }
  function isAmpScriptUri(uri) {
    return uri.startsWith("amp-script:");
  }
  function getProxyServingType(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    if (!isProxyOrigin(url)) {
      return null;
    }
    var path = url.pathname.split("/", 2);
    return path[1];
  }
  function isLocalhostOrigin(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return urls.localhostRegex.test(url.origin);
  }
  function isProtocolValid(url) {
    if (!url) {
      return true;
    }
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return !INVALID_PROTOCOLS.includes(url.protocol);
  }
  function removeAmpJsParamsFromUrl(url) {
    var parsed = parseUrlDeprecated(url);
    var search = removeAmpJsParamsFromSearch(parsed.search);
    return parsed.origin + parsed.pathname + search + parsed.hash;
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
    var query2 = parseQueryString(parsedUrl.search);
    userAssert(!(SOURCE_ORIGIN_PARAM in query2), "Source origin is not allowed in %s", url);
  }

  // src/core/dom/fingerprint.js
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
  function domFingerprintPlain(element) {
    var ids = [];
    var level = 0;
    while (isElement(element) && level < 25) {
      var id = "";
      if (element.id) {
        id = "/" + element.id;
      }
      var nodeName = element.nodeName.toLowerCase();
      ids.push("" + nodeName + id + indexWithinParent(element));
      level++;
      element = element.parentElement;
    }
    return ids.join();
  }
  var DomFingerprint = /* @__PURE__ */ function() {
    function DomFingerprint2() {
      _classCallCheck9(this, DomFingerprint2);
    }
    _createClass8(DomFingerprint2, null, [{
      key: "generate",
      value: function generate(element) {
        return stringHash32(domFingerprintPlain(element));
      }
    }]);
    return DomFingerprint2;
  }();
  function indexWithinParent(element) {
    var nodeName = element.nodeName;
    var i = 0;
    var count = 0;
    var sibling = element.previousElementSibling;
    while (sibling && count < 25 && i < 100) {
      if (sibling.nodeName == nodeName) {
        count++;
      }
      i++;
      sibling = sibling.previousElementSibling;
    }
    return count < 25 && i < 100 ? "." + count : "";
  }

  // src/mode-object.js
  function getModeObject(opt_win) {
    return {
      localDev: getMode(opt_win).localDev,
      development: getMode(opt_win).development,
      esm: false,
      minified: getMode(opt_win).minified,
      test: getMode(opt_win).test,
      log: getMode(opt_win).log,
      version: getMode(opt_win).version,
      rtvVersion: getMode(opt_win).rtvVersion
    };
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
  function rectsOverlap(r1, r2) {
    return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
  }
  function expandLayoutRect(rect, dw, dh) {
    return layoutRectLtwh(rect.left - rect.width * dw, rect.top - rect.height * dh, rect.width * (1 + dw * 2), rect.height * (1 + dh * 2));
  }
  function moveLayoutRect(rect, dx, dy) {
    if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
      return rect;
    }
    return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
  }
  function areMarginsChanged(margins, change) {
    return change.top !== void 0 && change.top != margins.top || change.right !== void 0 && change.right != margins.right || change.bottom !== void 0 && change.bottom != margins.bottom || change.left !== void 0 && change.left != margins.left;
  }
  function layoutRectSizeEquals(from, to) {
    return from.width == to.width && from.height === to.height;
  }
  function layoutSizeFromRect(rect) {
    var height = rect.height, width = rect.width;
    return {
      width,
      height
    };
  }

  // src/core/dom/page-layout-box.js
  function getPageLayoutBoxBlocking(element) {
    var stop = element.ownerDocument.body;
    var left = 0;
    var top = 0;
    for (var n = element; n && n != stop; n = n.offsetParent) {
      left += n.offsetLeft;
      top += n.offsetTop;
    }
    var offsetHeight = element.offsetHeight, offsetWidth = element.offsetWidth;
    return layoutRectLtwh(left, top, offsetWidth, offsetHeight);
  }

  // src/iframe-attributes.js
  function getContextMetadata(parentWindow, element, sentinel, attributes) {
    var startTime = Date.now();
    var width = element.getAttribute("width");
    var height = element.getAttribute("height");
    attributes = attributes ? attributes : dict();
    attributes["width"] = getLengthNumeral(width);
    attributes["height"] = getLengthNumeral(height);
    if (element.getAttribute("title")) {
      attributes["title"] = element.getAttribute("title");
    }
    var locationHref = parentWindow.location.href;
    if (locationHref == "about:srcdoc") {
      locationHref = parentWindow.parent.location.href;
    }
    var ampdoc = Services.ampdoc(element);
    var docInfo = Services.documentInfoForDoc(element);
    var viewer = Services.viewerForDoc(element);
    var referrer = viewer.getUnconfirmedReferrerUrl();
    var layoutRect = getPageLayoutBoxBlocking(element);
    attributes["_context"] = dict({
      "ampcontextVersion": internalRuntimeVersion(),
      "ampcontextFilepath": urls.thirdParty + "/" + internalRuntimeVersion() + "/ampcontext-v0.js",
      "sourceUrl": docInfo.sourceUrl,
      "referrer": referrer,
      "canonicalUrl": docInfo.canonicalUrl,
      "pageViewId": docInfo.pageViewId,
      "location": {
        "href": locationHref
      },
      "startTime": startTime,
      "tagName": element.tagName,
      "mode": getModeObject(),
      "canary": isCanary(parentWindow),
      "hidden": !ampdoc.isVisible(),
      "initialLayoutRect": layoutRect ? {
        "left": layoutRect.left,
        "top": layoutRect.top,
        "width": layoutRect.width,
        "height": layoutRect.height
      } : null,
      "domFingerprint": DomFingerprint.generate(element),
      "experimentToggles": experimentToggles(parentWindow),
      "sentinel": sentinel
    });
    var adSrc = element.getAttribute("src");
    if (adSrc) {
      attributes["src"] = adSrc;
    }
    return attributes;
  }

  // src/core/3p-frame.js
  var getRequiredSandboxFlags = function getRequiredSandboxFlags2() {
    return [
      "allow-top-navigation-by-user-activation",
      "allow-popups-to-escape-sandbox"
    ];
  };
  var getOptionalSandboxFlags = function getOptionalSandboxFlags2() {
    return [
      "allow-forms",
      "allow-modals",
      "allow-pointer-lock",
      "allow-popups",
      "allow-same-origin",
      "allow-scripts"
    ];
  };

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

  // src/3p-frame.js
  var overrideBootstrapBaseUrl;
  var TAG2 = "3p-frame";
  function getDefaultBootstrapBaseUrl(parentWindow, opt_srcFileBasename) {
    var srcFileBasename = opt_srcFileBasename || "frame";
    if (getMode().localDev || getMode().test) {
      return getDevelopmentBootstrapBaseUrl(parentWindow, srcFileBasename);
    }
    parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN = parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN || getSubDomain(parentWindow);
    return "https://" + parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN + ("." + urls.thirdPartyFrameHost + "/" + internalRuntimeVersion() + "/") + (srcFileBasename + ".html");
  }
  function getDevelopmentBootstrapBaseUrl(parentWindow, srcFileBasename) {
    return overrideBootstrapBaseUrl || getAdsLocalhost(parentWindow) + "/dist.3p/" + (getMode().minified ? internalRuntimeVersion() + "/" + srcFileBasename : "current/" + srcFileBasename + ".max") + ".html";
  }
  function getAdsLocalhost(win) {
    var adsUrl = urls.thirdParty;
    if (adsUrl == "https://3p.ampproject.net") {
      adsUrl = "http://ads.localhost";
    }
    return adsUrl + ":" + (win.location.port || win.parent.location.port);
  }
  function getSubDomain(win) {
    return "d-" + getRandom(win);
  }
  function getRandom(win) {
    var rand;
    if (win.crypto && win.crypto.getRandomValues) {
      var uint32array = new Uint32Array(2);
      win.crypto.getRandomValues(uint32array);
      rand = String(uint32array[0]) + uint32array[1];
    } else {
      rand = String(win.Math.random()).substr(2) + "0";
    }
    return rand;
  }
  function applySandbox(iframe) {
    if (!iframe.sandbox || !iframe.sandbox.supports) {
      return;
    }
    var requiredFlags = getRequiredSandboxFlags();
    for (var i = 0; i < requiredFlags.length; i++) {
      var flag = requiredFlags[i];
      if (!iframe.sandbox.supports(flag)) {
        dev().info(TAG2, "Iframe doesn't support %s", flag);
        return;
      }
    }
    iframe.sandbox = requiredFlags.join(" ") + " " + getOptionalSandboxFlags().join(" ");
  }
  function generateSentinel(parentWindow) {
    var windowDepth = 0;
    for (var win = parentWindow; win && win != win.parent; win = win.parent) {
      windowDepth++;
    }
    return String(windowDepth) + "-" + getRandom(parentWindow);
  }

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

  // src/core/constants/common-signals.js
  var CommonSignals = {
    READY_TO_UPGRADE: "ready-upgrade",
    UPGRADED: "upgraded",
    BUILT: "built",
    MOUNTED: "mounted",
    LOAD_START: "load-start",
    RENDER_START: "render-start",
    LOAD_END: "load-end",
    INI_LOAD: "ini-load",
    UNLOAD: "unload"
  };

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  var STYLE_MAP_PROP = "__AMP_CSS_SM";
  function installStylesForDoc(ampdoc, cssText2, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = ampdoc.getHeadNode();
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText2), opt_isRuntimeCss || false, opt_ext || null);
    if (cb) {
      var rootNode = ampdoc.getRootNode();
      if (styleLoaded(rootNode, style)) {
        cb(style);
        return style;
      }
      var interval = setInterval(function() {
        if (styleLoaded(rootNode, style)) {
          clearInterval(interval);
          cb(style);
        }
      }, 4);
    }
    return style;
  }
  function insertStyleElement(cssRoot, cssText2, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "amp-custom" && ext != "amp-keyframes";
    var key = isRuntimeCss ? "amp-runtime" : isExtCss ? "amp-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.textContent !== cssText2) {
          existing.textContent = cssText2;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText2;
    var afterElement = null;
    if (isRuntimeCss) {
      style.setAttribute("amp-runtime", "");
    } else if (isExtCss) {
      style.setAttribute("amp-extension", ext || "");
      afterElement = dev().assertElement(getExistingStyleElement(cssRoot, styleMap, "amp-runtime"));
    } else {
      if (ext) {
        style.setAttribute(ext, "");
      }
      afterElement = cssRoot.lastChild;
    }
    insertAfterOrAtStart(cssRoot, style, afterElement);
    if (key) {
      styleMap[key] = style;
    }
    return style;
  }
  function getExistingStyleElement(cssRoot, styleMap, key) {
    if (styleMap[key]) {
      return styleMap[key];
    }
    var existing = cssRoot.querySelector("style[" + key + "]");
    if (existing) {
      styleMap[key] = existing;
      return existing;
    }
    return null;
  }
  function maybeTransform(cssRoot, cssText2) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText2) : cssText2;
  }
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
  function styleLoaded(doc, style) {
    var sheets = doc.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.ownerNode == style) {
        return true;
      }
    }
    return false;
  }

  // src/analytics.js
  function triggerAnalyticsEvent(target, eventType, vars, enableDataVars) {
    if (vars === void 0) {
      vars = dict();
    }
    if (enableDataVars === void 0) {
      enableDataVars = true;
    }
    Services.analyticsForDocOrNull(target).then(function(analytics) {
      if (!analytics) {
        return;
      }
      analytics.triggerEventForTarget(target, eventType, vars, enableDataVars);
    });
  }

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
  var BLOCK_BY_CONSENT = "BLOCK_BY_CONSENT";
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
  function cancellation() {
    return new Error(CANCELLED);
  }
  function isCancellation(errorOrMessage) {
    if (!errorOrMessage) {
      return false;
    }
    if (typeof errorOrMessage == "string") {
      return errorOrMessage.startsWith(CANCELLED);
    }
    if (typeof errorOrMessage.message == "string") {
      return errorOrMessage.message.startsWith(CANCELLED);
    }
    return false;
  }
  function isBlockedByConsent(errorOrMessage) {
    if (!errorOrMessage) {
      return false;
    }
    if (typeof errorOrMessage == "string") {
      return errorOrMessage.startsWith(BLOCK_BY_CONSENT);
    }
    if (typeof errorOrMessage.message == "string") {
      return errorOrMessage.message.startsWith(BLOCK_BY_CONSENT);
    }
    return false;
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

  // src/iframe-helper.js
  var FIE_EMBED_PROP = "__AMP_EMBED__";
  function getFriendlyIframeEmbedOptional(iframe) {
    return iframe[FIE_EMBED_PROP];
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

  // src/core/constants/visibility-state.js
  var VisibilityState = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // build/ampshared.css.js
  var cssText = "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img.i-amphtml-ssr:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/";

  // src/polyfills/abort-controller.js
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
  var AbortController2 = /* @__PURE__ */ function() {
    function AbortController3() {
      _classCallCheck11(this, AbortController3);
      this.signal_ = new AbortSignal();
    }
    _createClass10(AbortController3, [{
      key: "abort",
      value: function abort() {
        if (this.signal_.isAborted_) {
          return;
        }
        this.signal_.isAborted_ = true;
        if (this.signal_.onabort_) {
          var event = {
            "type": "abort",
            "bubbles": false,
            "cancelable": false,
            "target": this.signal_,
            "currentTarget": this.signal_
          };
          this.signal_.onabort_(event);
        }
      }
    }, {
      key: "signal",
      get: function get() {
        return this.signal_;
      }
    }]);
    return AbortController3;
  }();
  var AbortSignal = /* @__PURE__ */ function() {
    function AbortSignal2() {
      _classCallCheck11(this, AbortSignal2);
      this.isAborted_ = false;
      this.onabort_ = null;
    }
    _createClass10(AbortSignal2, [{
      key: "aborted",
      get: function get() {
        return this.isAborted_;
      }
    }, {
      key: "onabort",
      get: function get() {
        return this.onabort_;
      },
      set: function set(value) {
        this.onabort_ = value;
      }
    }]);
    return AbortSignal2;
  }();
  function install(win) {
    if (win.AbortController) {
      return;
    }
    Object.defineProperty(win, "AbortController", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: AbortController2
    });
    Object.defineProperty(win, "AbortSignal", {
      configurable: true,
      enumerable: false,
      writable: true,
      value: AbortSignal
    });
  }

  // src/core/constants/action-constants.js
  var RAW_OBJECT_ARGS_KEY = "__AMP_OBJECT_STRING__";
  var DEFAULT_ACTION = "activate";
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };
  function actionTrustToString(actionTrust) {
    switch (actionTrust) {
      case ActionTrust.LOW:
        return "low";
      case ActionTrust.HIGH:
        return "high";
      default:
        devAssert2(actionTrust === ActionTrust.DEFAULT);
        return "default";
    }
  }

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

  // src/service/action-impl.js
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
  var TAG_ = "Action";
  var ACTION_MAP_ = "__AMP_ACTION_MAP__" + Math.random();
  var ACTION_QUEUE_ = "__AMP_ACTION_QUEUE__";
  var ACTION_HANDLER_ = "__AMP_ACTION_HANDLER__";
  var DEFAULT_DEBOUNCE_WAIT = 300;
  var DEFAULT_THROTTLE_INTERVAL = 100;
  var NON_AMP_ELEMENTS_ACTIONS_ = {
    "form": ["submit", "clear"]
  };
  var DEFAULT_EMAIL_ALLOWLIST = [{
    tagOrTarget: "AMP",
    method: "setState"
  }, {
    tagOrTarget: "*",
    method: "focus"
  }, {
    tagOrTarget: "*",
    method: "hide"
  }, {
    tagOrTarget: "*",
    method: "show"
  }, {
    tagOrTarget: "*",
    method: "toggleClass"
  }, {
    tagOrTarget: "*",
    method: "toggleVisibility"
  }];
  var TAPPABLE_ARIA_ROLES = {
    "button": true,
    "checkbox": true,
    "link": true,
    "listbox": true,
    "menuitem": true,
    "menuitemcheckbox": true,
    "menuitemradio": true,
    "option": true,
    "radio": true,
    "scrollbar": true,
    "slider": true,
    "spinbutton": true,
    "switch": true,
    "tab": true,
    "treeitem": true
  };
  var ActionInvocation = /* @__PURE__ */ function() {
    function ActionInvocation2(node, method, args, source, caller, event, trust, actionEventType, tagOrTarget, sequenceId) {
      if (actionEventType === void 0) {
        actionEventType = "?";
      }
      if (tagOrTarget === void 0) {
        tagOrTarget = null;
      }
      if (sequenceId === void 0) {
        sequenceId = Math.random();
      }
      _classCallCheck12(this, ActionInvocation2);
      this.node = node;
      this.method = method;
      this.args = args;
      this.source = source;
      this.caller = caller;
      this.event = event;
      this.trust = trust;
      this.actionEventType = actionEventType;
      this.tagOrTarget = tagOrTarget || node.tagName;
      this.sequenceId = sequenceId;
    }
    _createClass11(ActionInvocation2, [{
      key: "satisfiesTrust",
      value: function satisfiesTrust(minimumTrust) {
        if (!isFiniteNumber(this.trust)) {
          dev().error(TAG_, "Invalid trust for '" + this.method + "': " + this.trust);
          return false;
        }
        if (this.trust < minimumTrust) {
          var t = actionTrustToString(this.trust);
          user().error(TAG_, '"' + this.actionEventType + '" event with "' + t + '" trust is not allowed to ' + ('invoke "' + this.tagOrTarget.toLowerCase() + "." + this.method + '".'));
          return false;
        }
        return true;
      }
    }]);
    return ActionInvocation2;
  }();
  var ActionService = /* @__PURE__ */ function() {
    function ActionService2(ampdoc, opt_root) {
      _classCallCheck12(this, ActionService2);
      this.ampdoc = ampdoc;
      this.root_ = opt_root || ampdoc.getRootNode();
      this.isEmail_ = this.ampdoc.isSingleDoc() && isAmp4Email(this.root_);
      this.allowlist_ = this.isEmail_ ? DEFAULT_EMAIL_ALLOWLIST : null;
      this.globalTargets_ = map();
      this.globalMethodHandlers_ = map();
      this.addEvent("tap");
      this.addEvent("submit");
      this.addEvent("change");
      this.addEvent("input-debounced");
      this.addEvent("input-throttled");
      this.addEvent("valid");
      this.addEvent("invalid");
    }
    _createClass11(ActionService2, [{
      key: "addEvent",
      value: function addEvent(name) {
        var _this = this;
        if (name == "tap") {
          this.root_.addEventListener("click", function(event) {
            if (!event.defaultPrevented) {
              var element = dev().assertElement(event.target);
              _this.trigger(element, name, event, ActionTrust.HIGH);
            }
          });
          this.root_.addEventListener("keydown", function(event) {
            var key = event.key, target = event.target;
            var element = dev().assertElement(target);
            if (key == Keys.ENTER || key == Keys.SPACE) {
              var role = element.getAttribute("role");
              var isTapEventRole = role && hasOwn(TAPPABLE_ARIA_ROLES, role.toLowerCase());
              if (!event.defaultPrevented && isTapEventRole) {
                var hasAction = _this.trigger(element, name, event, ActionTrust.HIGH);
                if (hasAction) {
                  event.preventDefault();
                }
              }
            }
          });
        } else if (name == "submit") {
          this.root_.addEventListener(name, function(event) {
            var element = dev().assertElement(event.target);
            _this.trigger(element, name, event, ActionTrust.HIGH);
          });
        } else if (name == "change") {
          this.root_.addEventListener(name, function(event) {
            var element = dev().assertElement(event.target);
            _this.addTargetPropertiesAsDetail_(event);
            _this.trigger(element, name, event, ActionTrust.HIGH);
          });
        } else if (name == "input-debounced") {
          var debouncedInput = debounce(this.ampdoc.win, function(event) {
            var target = dev().assertElement(event.target);
            _this.trigger(target, name, event, ActionTrust.HIGH);
          }, DEFAULT_DEBOUNCE_WAIT);
          this.root_.addEventListener("input", function(event) {
            var deferredEvent = new DeferredEvent(event);
            _this.addTargetPropertiesAsDetail_(deferredEvent);
            debouncedInput(deferredEvent);
          });
        } else if (name == "input-throttled") {
          var throttledInput = throttle(this.ampdoc.win, function(event) {
            var target = dev().assertElement(event.target);
            _this.trigger(target, name, event, ActionTrust.HIGH);
          }, DEFAULT_THROTTLE_INTERVAL);
          this.root_.addEventListener("input", function(event) {
            var deferredEvent = new DeferredEvent(event);
            _this.addTargetPropertiesAsDetail_(deferredEvent);
            throttledInput(deferredEvent);
          });
        } else if (name == "valid" || name == "invalid") {
          this.root_.addEventListener(name, function(event) {
            var element = dev().assertElement(event.target);
            _this.trigger(element, name, event, ActionTrust.HIGH);
          });
        }
      }
    }, {
      key: "addGlobalTarget",
      value: function addGlobalTarget(name, handler) {
        this.globalTargets_[name] = handler;
      }
    }, {
      key: "addGlobalMethodHandler",
      value: function addGlobalMethodHandler(name, handler, minTrust) {
        if (minTrust === void 0) {
          minTrust = ActionTrust.DEFAULT;
        }
        this.globalMethodHandlers_[name] = {
          handler,
          minTrust
        };
      }
    }, {
      key: "trigger",
      value: function trigger(target, eventType, event, trust, opt_args) {
        return this.action_(target, eventType, event, trust, opt_args);
      }
    }, {
      key: "execute",
      value: function execute(target, method, args, source, caller, event, trust) {
        var invocation = new ActionInvocation(target, method, args, source, caller, event, trust);
        this.invoke_(invocation);
      }
    }, {
      key: "installActionHandler",
      value: function installActionHandler(target, handler) {
        var targetId = target.getAttribute("id") || "";
        devAssert(isAmpTagName(targetId) || target.tagName.toLowerCase() in NON_AMP_ELEMENTS_ACTIONS_, "AMP or special element expected: %s", target.tagName + "#" + targetId);
        if (target[ACTION_HANDLER_]) {
          dev().error(TAG_, "Action handler already installed for " + target);
          return;
        }
        target[ACTION_HANDLER_] = handler;
        var queuedInvocations = target[ACTION_QUEUE_];
        if (isArray(queuedInvocations)) {
          Services.timerFor(toWin(target.ownerDocument.defaultView)).delay(function() {
            queuedInvocations.forEach(function(invocation) {
              try {
                handler(invocation);
              } catch (e) {
                dev().error(TAG_, "Action execution failed:", invocation, e);
              }
            });
            target[ACTION_QUEUE_].length = 0;
          }, 1);
        }
      }
    }, {
      key: "hasAction",
      value: function hasAction(element, actionEventType, opt_stopAt) {
        return !!this.findAction_(element, actionEventType, opt_stopAt);
      }
    }, {
      key: "hasResolvableAction",
      value: function hasResolvableAction(element, actionEventType, opt_stopAt) {
        var _this2 = this;
        var action = this.findAction_(element, actionEventType, opt_stopAt);
        if (!action) {
          return false;
        }
        return action.actionInfos.some(function(action2) {
          var target = action2.target;
          return !!_this2.getActionNode_(target);
        });
      }
    }, {
      key: "hasResolvableActionForTarget",
      value: function hasResolvableActionForTarget(element, actionEventType, targetElement, opt_stopAt) {
        var _this3 = this;
        var action = this.findAction_(element, actionEventType, opt_stopAt);
        if (!action) {
          return false;
        }
        return action.actionInfos.some(function(actionInfo) {
          var target = actionInfo.target;
          return _this3.getActionNode_(target) == targetElement;
        });
      }
    }, {
      key: "getActionNode_",
      value: function getActionNode_(target) {
        return this.globalTargets_[target] ? this.root_ : this.root_.getElementById(target);
      }
    }, {
      key: "setAllowlist",
      value: function setAllowlist(allowlist) {
        devAssert(allowlist.every(function(v) {
          return v.tagOrTarget && v.method;
        }), "Action allowlist entries should be of shape { tagOrTarget: string, method: string }");
        this.allowlist_ = allowlist;
      }
    }, {
      key: "addToAllowlist",
      value: function addToAllowlist(tagOrTarget, methods, opt_forFormat) {
        var _this4 = this;
        if (opt_forFormat && opt_forFormat.includes("email") !== this.isEmail_) {
          return;
        }
        if (!this.allowlist_) {
          this.allowlist_ = [];
        }
        if (!isArray(methods)) {
          methods = [methods];
        }
        methods.forEach(function(method) {
          if (_this4.allowlist_.some(function(v) {
            return v.tagOrTarget == tagOrTarget && v.method == method;
          })) {
            return;
          }
          _this4.allowlist_.push({
            tagOrTarget,
            method
          });
        });
      }
    }, {
      key: "action_",
      value: function action_(source, actionEventType, event, trust, opt_args) {
        var _this5 = this;
        var action = this.findAction_(source, actionEventType);
        if (!action) {
          return false;
        }
        var sequenceId = Math.random();
        var currentPromise = null;
        action.actionInfos.forEach(function(actionInfo) {
          var args = actionInfo.args, method = actionInfo.method, str = actionInfo.str, target = actionInfo.target;
          var dereferencedArgs = dereferenceArgsVariables(args, event, opt_args);
          var invokeAction = function invokeAction2() {
            var node = _this5.getActionNode_(target);
            if (!node) {
              _this5.error_('Target "' + target + '" not found for action [' + str + "].");
              return;
            }
            var invocation = new ActionInvocation(node, method, dereferencedArgs, source, action.node, event, trust, actionEventType, node.tagName || target, sequenceId);
            return _this5.invoke_(invocation);
          };
          currentPromise = currentPromise ? currentPromise.then(invokeAction) : invokeAction();
        });
        return action.actionInfos.length >= 1;
      }
    }, {
      key: "error_",
      value: function error_(message, opt_element) {
        if (opt_element) {
          var e = user().createError("[" + TAG_ + "] " + message);
          reportError(e, opt_element);
          throw e;
        } else {
          user().error(TAG_, message);
        }
      }
    }, {
      key: "invoke_",
      value: function invoke_(invocation) {
        var method = invocation.method, tagOrTarget = invocation.tagOrTarget;
        if (this.allowlist_) {
          if (!isActionAllowlisted(invocation, this.allowlist_)) {
            this.error_('"' + tagOrTarget + "." + method + '" is not allowlisted ' + JSON.stringify(this.allowlist_) + ".");
            return null;
          }
        }
        var globalTarget = this.globalTargets_[tagOrTarget];
        if (globalTarget) {
          return globalTarget(invocation);
        }
        var node = dev().assertElement(invocation.node);
        var globalMethod = this.globalMethodHandlers_[method];
        if (globalMethod && invocation.satisfiesTrust(globalMethod.minTrust)) {
          return globalMethod.handler(invocation);
        }
        var lowerTagName = node.tagName.toLowerCase();
        if (isAmpTagName(lowerTagName)) {
          if (node.enqueAction) {
            node.enqueAction(invocation);
          } else {
            this.error_('Unrecognized AMP element "' + lowerTagName + '".', node);
          }
          return null;
        }
        var nonAmpActions = NON_AMP_ELEMENTS_ACTIONS_[lowerTagName];
        var targetId = node.getAttribute("id") || "";
        if (isAmpTagName(targetId) || nonAmpActions && nonAmpActions.indexOf(method) > -1) {
          var handler = node[ACTION_HANDLER_];
          if (handler) {
            handler(invocation);
          } else {
            node[ACTION_QUEUE_] = node[ACTION_QUEUE_] || [];
            node[ACTION_QUEUE_].push(invocation);
          }
          return null;
        }
        this.error_("Target (" + tagOrTarget + `) doesn't support "` + method + '" action.', invocation.caller);
        return null;
      }
    }, {
      key: "findAction_",
      value: function findAction_(target, actionEventType, opt_stopAt) {
        var n = target;
        while (n) {
          if (opt_stopAt && n == opt_stopAt) {
            return null;
          }
          var actionInfos = this.matchActionInfos_(n, actionEventType);
          if (actionInfos && isEnabled(n)) {
            return {
              node: n,
              actionInfos: devAssert(actionInfos)
            };
          }
          n = n.parentElement;
        }
        return null;
      }
    }, {
      key: "matchActionInfos_",
      value: function matchActionInfos_(node, actionEventType) {
        var actionMap = this.getActionMap_(node, actionEventType);
        if (!actionMap) {
          return null;
        }
        return actionMap[actionEventType] || null;
      }
    }, {
      key: "getActionMap_",
      value: function getActionMap_(node, actionEventType) {
        var actionMap = node[ACTION_MAP_];
        if (actionMap === void 0) {
          actionMap = null;
          if (node.hasAttribute("on")) {
            var action = node.getAttribute("on");
            actionMap = parseActionMap(action, node);
            node[ACTION_MAP_] = actionMap;
          } else if (node.hasAttribute("execute")) {
            var _action = node.getAttribute("execute");
            actionMap = parseActionMap(actionEventType + ":" + _action, node);
            node[ACTION_MAP_] = actionMap;
          }
        }
        return actionMap;
      }
    }, {
      key: "setActions",
      value: function setActions(node, actionsStr) {
        node.setAttribute("on", actionsStr);
        delete node[ACTION_MAP_];
      }
    }, {
      key: "addTargetPropertiesAsDetail_",
      value: function addTargetPropertiesAsDetail_(event) {
        var detail = map();
        var target = event.target;
        if (target.value !== void 0) {
          detail["value"] = target.value;
        }
        if (target.tagName == "INPUT") {
          detail["valueAsNumber"] = Number(target.value);
        }
        if (target.checked !== void 0) {
          detail["checked"] = target.checked;
        }
        if (target.min !== void 0 || target.max !== void 0) {
          detail["min"] = target.min;
          detail["max"] = target.max;
        }
        if (target.files) {
          detail["files"] = toArray(target.files).map(function(file) {
            return {
              "name": file.name,
              "size": file.size,
              "type": file.type
            };
          });
        }
        if (Object.keys(detail).length > 0) {
          try {
            event.detail = detail;
          } catch (_unused) {
          }
        }
      }
    }]);
    return ActionService2;
  }();
  function isAmpTagName(lowercaseTagName) {
    return lowercaseTagName.substring(0, 4) === "amp-";
  }
  function isActionAllowlisted(invocation, allowlist) {
    var method = invocation.method;
    var node = invocation.node, tagOrTarget = invocation.tagOrTarget;
    if (method === DEFAULT_ACTION && typeof node.getDefaultActionAlias == "function") {
      method = node.getDefaultActionAlias();
    }
    var lcMethod = method.toLowerCase();
    var lcTagOrTarget = tagOrTarget.toLowerCase();
    return allowlist.some(function(w) {
      if (w.tagOrTarget.toLowerCase() === lcTagOrTarget || w.tagOrTarget === "*") {
        if (w.method.toLowerCase() === lcMethod) {
          return true;
        }
      }
      return false;
    });
  }
  var DeferredEvent = function DeferredEvent2(event) {
    _classCallCheck12(this, DeferredEvent2);
    this.detail = null;
    cloneWithoutFunctions(event, this);
  };
  function cloneWithoutFunctions(original, opt_dest) {
    var clone = opt_dest || map();
    for (var prop in original) {
      var value = original[prop];
      if (typeof value === "function") {
        clone[prop] = notImplemented;
      } else {
        clone[prop] = original[prop];
      }
    }
    return clone;
  }
  function notImplemented() {
    devAssert(null, "Deferred events cannot access native event functions.");
  }
  function parseActionMap(action, context) {
    var assertAction = assertActionForParser.bind(null, action, context);
    var assertToken = assertTokenForParser.bind(null, action, context);
    var actionMap = null;
    var toks = new ParserTokenizer(action);
    var tok;
    var peek;
    do {
      tok = toks.next();
      if (tok.type == TokenType.EOF || tok.type == TokenType.SEPARATOR && tok.value == ";") {
      } else if (tok.type == TokenType.LITERAL || tok.type == TokenType.ID) {
        var event = tok.value;
        assertToken(toks.next(), [TokenType.SEPARATOR], ":");
        var actions = [];
        do {
          var target = assertToken(toks.next(), [TokenType.LITERAL, TokenType.ID]).value;
          var method = DEFAULT_ACTION;
          var args = null;
          peek = toks.peek();
          if (peek.type == TokenType.SEPARATOR && peek.value == ".") {
            toks.next();
            method = assertToken(toks.next(), [TokenType.LITERAL, TokenType.ID]).value || method;
            peek = toks.peek();
            if (peek.type == TokenType.SEPARATOR && peek.value == "(") {
              toks.next();
              args = tokenizeMethodArguments(toks, assertToken, assertAction);
            }
          }
          actions.push({
            event,
            target,
            method,
            args: args && getMode().test && Object.freeze ? Object.freeze(args) : args,
            str: action
          });
          peek = toks.peek();
        } while (peek.type == TokenType.SEPARATOR && peek.value == "," && toks.next());
        if (!actionMap) {
          actionMap = map();
        }
        actionMap[event] = actions;
      } else {
        assertAction(false, "; unexpected token [" + (tok.value || "") + "]");
      }
    } while (tok.type != TokenType.EOF);
    return actionMap;
  }
  function tokenizeMethodArguments(toks, assertToken, assertAction) {
    var peek = toks.peek();
    var tok;
    var args = null;
    if (peek.type == TokenType.OBJECT) {
      args = map();
      var _toks$next = toks.next(), value = _toks$next.value;
      args[RAW_OBJECT_ARGS_KEY] = value;
      assertToken(toks.next(), [TokenType.SEPARATOR], ")");
    } else {
      do {
        tok = toks.next();
        var _tok = tok, type = _tok.type, _value = _tok.value;
        if (type == TokenType.SEPARATOR && (_value == "," || _value == ")")) {
        } else if (type == TokenType.LITERAL || type == TokenType.ID) {
          assertToken(toks.next(), [TokenType.SEPARATOR], "=");
          tok = assertToken(toks.next(true), [TokenType.LITERAL, TokenType.ID]);
          var argValueTokens = [tok];
          if (tok.type == TokenType.ID) {
            for (peek = toks.peek(); peek.type == TokenType.SEPARATOR && peek.value == "."; peek = toks.peek()) {
              toks.next();
              tok = assertToken(toks.next(false), [TokenType.ID]);
              argValueTokens.push(tok);
            }
          }
          var argValue = argValueForTokens(argValueTokens);
          if (!args) {
            args = map();
          }
          args[_value] = argValue;
          peek = toks.peek();
          assertAction(peek.type == TokenType.SEPARATOR && (peek.value == "," || peek.value == ")"), "Expected either [,] or [)]");
        } else {
          assertAction(false, "; unexpected token [" + (tok.value || "") + "]");
        }
      } while (!(tok.type == TokenType.SEPARATOR && tok.value == ")"));
    }
    return args;
  }
  function argValueForTokens(tokens) {
    if (tokens.length == 0) {
      return null;
    } else if (tokens.length == 1) {
      return tokens[0].value;
    } else {
      var values = tokens.map(function(token) {
        return token.value;
      });
      var expression = values.join(".");
      return {
        expression
      };
    }
  }
  function dereferenceArgsVariables(args, event, opt_args) {
    if (!args) {
      return args;
    }
    var data = opt_args || dict({});
    if (event) {
      var detail = getDetail(event);
      if (detail) {
        data["event"] = detail;
      }
    }
    var applied = map();
    Object.keys(args).forEach(function(key) {
      var value = args[key];
      if (typeof value == "object" && value.expression) {
        var expr = value.expression;
        var exprValue = getValueForExpr(data, expr);
        value = exprValue === void 0 ? null : exprValue;
      }
      if (data[value]) {
        applied[key] = data[value];
      } else {
        applied[key] = value;
      }
    });
    return applied;
  }
  function assertActionForParser(s, context, condition, opt_message) {
    return userAssert(condition, "Invalid action definition in %s: [%s] %s", context, s, opt_message || "");
  }
  function assertTokenForParser(s, context, tok, types, opt_value) {
    if (opt_value !== void 0) {
      assertActionForParser(s, context, types.includes(tok.type) && tok.value == opt_value, "; expected [" + opt_value + "]");
    } else {
      assertActionForParser(s, context, types.includes(tok.type));
    }
    return tok;
  }
  var TokenType = {
    INVALID: 0,
    EOF: 1,
    SEPARATOR: 2,
    LITERAL: 3,
    ID: 4,
    OBJECT: 5
  };
  var WHITESPACE_SET = " 	\n\r\f\v\xA0\u2028\u2029";
  var SEPARATOR_SET = ";:.()=,|!";
  var STRING_SET = `"'`;
  var OBJECT_SET = "{}";
  var SPECIAL_SET = WHITESPACE_SET + SEPARATOR_SET + STRING_SET + OBJECT_SET;
  var ParserTokenizer = /* @__PURE__ */ function() {
    function ParserTokenizer2(str) {
      _classCallCheck12(this, ParserTokenizer2);
      this.str_ = str;
      this.index_ = -1;
    }
    _createClass11(ParserTokenizer2, [{
      key: "next",
      value: function next(opt_convertValues) {
        var tok = this.next_(opt_convertValues || false);
        this.index_ = tok.index;
        return tok;
      }
    }, {
      key: "peek",
      value: function peek(opt_convertValues) {
        return this.next_(opt_convertValues || false);
      }
    }, {
      key: "next_",
      value: function next_(convertValues) {
        var newIndex = this.index_ + 1;
        if (newIndex >= this.str_.length) {
          return {
            type: TokenType.EOF,
            index: this.index_
          };
        }
        var c = this.str_.charAt(newIndex);
        if (WHITESPACE_SET.indexOf(c) != -1) {
          newIndex++;
          for (; newIndex < this.str_.length; newIndex++) {
            if (WHITESPACE_SET.indexOf(this.str_.charAt(newIndex)) == -1) {
              break;
            }
          }
          if (newIndex >= this.str_.length) {
            return {
              type: TokenType.EOF,
              index: newIndex
            };
          }
          c = this.str_.charAt(newIndex);
        }
        if (convertValues && (isNum(c) || c == "." && newIndex + 1 < this.str_.length && isNum(this.str_[newIndex + 1]))) {
          var hasFraction = c == ".";
          var _end = newIndex + 1;
          for (; _end < this.str_.length; _end++) {
            var c2 = this.str_.charAt(_end);
            if (c2 == ".") {
              hasFraction = true;
              continue;
            }
            if (!isNum(c2)) {
              break;
            }
          }
          var _s = this.str_.substring(newIndex, _end);
          var value = hasFraction ? parseFloat(_s) : parseInt(_s, 10);
          newIndex = _end - 1;
          return {
            type: TokenType.LITERAL,
            value,
            index: newIndex
          };
        }
        if (SEPARATOR_SET.indexOf(c) != -1) {
          return {
            type: TokenType.SEPARATOR,
            value: c,
            index: newIndex
          };
        }
        if (STRING_SET.indexOf(c) != -1) {
          var _end2 = -1;
          for (var i = newIndex + 1; i < this.str_.length; i++) {
            if (this.str_.charAt(i) == c) {
              _end2 = i;
              break;
            }
          }
          if (_end2 == -1) {
            return {
              type: TokenType.INVALID,
              index: newIndex
            };
          }
          var _value2 = this.str_.substring(newIndex + 1, _end2);
          newIndex = _end2;
          return {
            type: TokenType.LITERAL,
            value: _value2,
            index: newIndex
          };
        }
        if (c == "{") {
          var numberOfBraces = 1;
          var _end3 = -1;
          for (var _i = newIndex + 1; _i < this.str_.length; _i++) {
            var char = this.str_[_i];
            if (char == "{") {
              numberOfBraces++;
            } else if (char == "}") {
              numberOfBraces--;
            }
            if (numberOfBraces <= 0) {
              _end3 = _i;
              break;
            }
          }
          if (_end3 == -1) {
            return {
              type: TokenType.INVALID,
              index: newIndex
            };
          }
          var _value3 = this.str_.substring(newIndex, _end3 + 1);
          newIndex = _end3;
          return {
            type: TokenType.OBJECT,
            value: _value3,
            index: newIndex
          };
        }
        var end = newIndex + 1;
        for (; end < this.str_.length; end++) {
          if (SPECIAL_SET.indexOf(this.str_.charAt(end)) != -1) {
            break;
          }
        }
        var s = this.str_.substring(newIndex, end);
        newIndex = end - 1;
        if (convertValues && (s == "true" || s == "false")) {
          var _value4 = s == "true";
          return {
            type: TokenType.LITERAL,
            value: _value4,
            index: newIndex
          };
        }
        if (!isNum(s.charAt(0))) {
          return {
            type: TokenType.ID,
            value: s,
            index: newIndex
          };
        }
        return {
          type: TokenType.LITERAL,
          value: s,
          index: newIndex
        };
      }
    }]);
    return ParserTokenizer2;
  }();
  function isNum(c) {
    return c >= "0" && c <= "9";
  }
  function installActionServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "action", ActionService, true);
  }

  // src/service/cache-cid-api.js
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
  var SERVICE_KEY_ = "AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc";
  var TAG_2 = "CacheCidApi";
  var CACHE_API_URL = "https://ampcid.google.com/v1/cache:getClientId?key=";
  var TIMEOUT_ = 3e4;
  var CacheCidApi = /* @__PURE__ */ function() {
    function CacheCidApi2(ampdoc) {
      _classCallCheck13(this, CacheCidApi2);
      this.ampdoc_ = ampdoc;
      this.viewer_ = Services.viewerForDoc(this.ampdoc_);
      this.publisherCidPromise_ = null;
      this.timer_ = Services.timerFor(this.ampdoc_.win);
    }
    _createClass12(CacheCidApi2, [{
      key: "isSupported",
      value: function isSupported() {
        return this.viewer_.isCctEmbedded() && this.viewer_.isProxyOrigin();
      }
    }, {
      key: "getScopedCid",
      value: function getScopedCid(scope) {
        var _this = this;
        if (!this.viewer_.isCctEmbedded()) {
          return Promise.resolve(null);
        }
        if (!this.publisherCidPromise_) {
          var url = CACHE_API_URL + SERVICE_KEY_;
          this.publisherCidPromise_ = this.fetchCid_(url);
        }
        return this.publisherCidPromise_.then(function(publisherCid) {
          return publisherCid ? _this.scopeCid_(publisherCid, scope) : null;
        });
      }
    }, {
      key: "fetchCid_",
      value: function fetchCid_(url, useAlternate) {
        var _this2 = this;
        if (useAlternate === void 0) {
          useAlternate = true;
        }
        var payload = dict({
          "publisherOrigin": getSourceOrigin(this.ampdoc_.win.location)
        });
        var timeoutMessage = "fetchCidTimeout";
        return this.timer_.timeoutPromise(TIMEOUT_, Services.xhrFor(this.ampdoc_.win).fetchJson(url, {
          method: "POST",
          ampCors: false,
          credentials: "include",
          mode: "cors",
          body: payload
        }), timeoutMessage).then(function(res) {
          return res.json().then(function(response) {
            if (response["optOut"]) {
              return null;
            }
            var cid = response["publisherClientId"];
            if (!cid && useAlternate && response["alternateUrl"]) {
              var alt = response["alternateUrl"] + "?key=" + SERVICE_KEY_;
              return _this2.fetchCid_(dev().assertString(alt), false);
            }
            return cid;
          });
        }).catch(function(e) {
          if (e && e.response) {
            e.response.json().then(function(res) {
              dev().error(TAG_2, JSON.stringify(res));
            });
          } else {
            var isTimeout = e && e.message == timeoutMessage;
            if (isTimeout) {
              dev().expectedError(TAG_2, e);
            } else {
              dev().error(TAG_2, e);
            }
          }
          return null;
        });
      }
    }, {
      key: "scopeCid_",
      value: function scopeCid_(publisherCid, scope) {
        var text = publisherCid + ";" + scope;
        return Services.cryptoFor(this.ampdoc_.win).sha384Base64(text).then(function(enc) {
          return "amp-" + enc;
        });
      }
    }]);
    return CacheCidApi2;
  }();

  // src/core/window/interface.js
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
  var WindowInterface = /* @__PURE__ */ function() {
    function WindowInterface2() {
      _classCallCheck14(this, WindowInterface2);
    }
    _createClass13(WindowInterface2, null, [{
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

  // src/cookies.js
  var TEST_COOKIE_NAME = "-test-amp-cookie-tmp";
  function getCookie(win, name) {
    var cookieString = tryGetDocumentCookie_(win);
    if (!cookieString) {
      return null;
    }
    var cookies = cookieString.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var eq = cookie.indexOf("=");
      if (eq == -1) {
        continue;
      }
      if (tryDecodeUriComponent(cookie.substring(0, eq).trim()) == name) {
        var value = cookie.substring(eq + 1).trim();
        return tryDecodeUriComponent(value, value);
      }
    }
    return null;
  }
  function tryGetDocumentCookie_(win) {
    try {
      return win.document.cookie;
    } catch (e) {
      return "";
    }
  }
  function setCookie(win, name, value, expirationTime, options) {
    if (options === void 0) {
      options = {};
    }
    checkOriginForSettingCookie(win, options, name);
    var domain = void 0;
    if (options.domain) {
      domain = options.domain;
    } else if (options.highestAvailableDomain) {
      domain = getHighestAvailableDomain(win);
    }
    trySetCookie(win, name, value, expirationTime, domain, options.sameSite, options.secure);
  }
  function getHighestAvailableDomain(win) {
    var metaTag = win.document.head && win.document.head.querySelector("meta[name='amp-cookie-scope']");
    if (metaTag) {
      var cookieScope = metaTag.getAttribute("content") || "";
      var sourceOrigin = getSourceOrigin(win.location.href);
      if (endsWith(sourceOrigin, "." + cookieScope)) {
        return cookieScope;
      } else {
        return sourceOrigin.split("://")[1];
      }
    }
    if (!isProxyOrigin(win.location.href)) {
      var parts = win.location.hostname.split(".");
      var domain = parts[parts.length - 1];
      var testCookieName = getTempCookieName(win);
      for (var i = parts.length - 2; i >= 0; i--) {
        domain = parts[i] + "." + domain;
        trySetCookie(win, testCookieName, "delete", Date.now() + 1e3, domain);
        if (getCookie(win, testCookieName) == "delete") {
          trySetCookie(win, testCookieName, "delete", Date.now() - 1e3, domain);
          return domain;
        }
      }
    }
    return null;
  }
  function trySetCookie(win, name, value, expirationTime, domain, sameSite, secure) {
    if (domain == "ampproject.org") {
      value = "delete";
      expirationTime = 0;
    }
    var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/" + (domain ? "; domain=" + domain : "") + "; expires=" + new Date(expirationTime).toUTCString() + getSameSiteString(win, sameSite) + (secure ? "; Secure" : "");
    try {
      win.document.cookie = cookie;
    } catch (ignore) {
    }
  }
  function getSameSiteString(win, sameSite) {
    if (!sameSite) {
      return "";
    }
    return "; SameSite=" + sameSite;
  }
  function checkOriginForSettingCookie(win, options, name) {
    if (options.allowOnProxyOrigin) {
      userAssert(!options.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
      return;
    }
    userAssert(!isProxyOrigin(win.location.href), "Should never attempt to set cookie on proxy origin: " + name);
    var current = parseUrlDeprecated(win.location.href).hostname.toLowerCase();
    var proxy = parseUrlDeprecated(urls.cdn).hostname.toLowerCase();
    userAssert(!(current == proxy || endsWith(current, "." + proxy)), "Should never attempt to set cookie on proxy origin. (in depth check): " + name);
  }
  function getTempCookieName(win) {
    var testCookieName = TEST_COOKIE_NAME;
    var counter = 0;
    while (getCookie(win, testCookieName)) {
      testCookieName = TEST_COOKIE_NAME + counter;
    }
    return testCookieName;
  }

  // src/service/cid-api.js
  function _classCallCheck15(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties14(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass14(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties14(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties14(Constructor, staticProps);
    return Constructor;
  }
  var GOOGLE_API_URL = "https://ampcid.google.com/v1/publisher:getClientId?key=";
  var TAG3 = "GoogleCidApi";
  var AMP_TOKEN = "AMP_TOKEN";
  var TokenStatus = {
    RETRIEVING: "$RETRIEVING",
    OPT_OUT: "$OPT_OUT",
    NOT_FOUND: "$NOT_FOUND",
    ERROR: "$ERROR"
  };
  var TIMEOUT = 3e4;
  var HOUR = 60 * 60 * 1e3;
  var DAY = 24 * HOUR;
  var YEAR = 365 * DAY;
  var GoogleCidApi = /* @__PURE__ */ function() {
    function GoogleCidApi2(ampdoc) {
      _classCallCheck15(this, GoogleCidApi2);
      this.win_ = ampdoc.win;
      this.timer_ = Services.timerFor(this.win_);
      this.cidPromise_ = {};
      var _Services$documentInf = Services.documentInfoForDoc(ampdoc), canonicalUrl = _Services$documentInf.canonicalUrl;
      this.canonicalOrigin_ = canonicalUrl ? parseUrlDeprecated(canonicalUrl).origin : null;
    }
    _createClass14(GoogleCidApi2, [{
      key: "getScopedCid",
      value: function getScopedCid(apiKey, scope) {
        var _this = this;
        if (this.cidPromise_[scope]) {
          return this.cidPromise_[scope];
        }
        var token;
        return this.cidPromise_[scope] = this.timer_.poll(200, function() {
          token = getCookie(_this.win_, AMP_TOKEN);
          return token !== TokenStatus.RETRIEVING;
        }).then(function() {
          if (token === TokenStatus.OPT_OUT) {
            return TokenStatus.OPT_OUT;
          }
          var forceFetch = token === TokenStatus.NOT_FOUND && _this.isReferrerProxyOrigin_();
          if (!forceFetch && _this.isStatusToken_(token)) {
            return null;
          }
          if (!token || _this.isStatusToken_(token)) {
            _this.persistToken_(TokenStatus.RETRIEVING, TIMEOUT);
          }
          var url = GOOGLE_API_URL + apiKey;
          return _this.fetchCid_(dev().assertString(url), scope, token).then(function(response) {
            var cid = _this.handleResponse_(response);
            if (!cid && response["alternateUrl"]) {
              var altUrl = response["alternateUrl"] + "?key=" + apiKey;
              return _this.fetchCid_(dev().assertString(altUrl), scope, token).then(_this.handleResponse_.bind(_this));
            }
            return cid;
          }).catch(function(e) {
            _this.persistToken_(TokenStatus.ERROR, TIMEOUT);
            if (e && e.response) {
              e.response.json().then(function(res) {
                dev().error(TAG3, JSON.stringify(res));
              });
            } else {
              dev().error(TAG3, e);
            }
            return null;
          });
        });
      }
    }, {
      key: "fetchCid_",
      value: function fetchCid_(url, scope, token) {
        var payload = dict({
          "originScope": scope,
          "canonicalOrigin": this.canonicalOrigin_
        });
        if (token) {
          payload["securityToken"] = token;
        }
        return this.timer_.timeoutPromise(TIMEOUT, Services.xhrFor(this.win_).fetchJson(url, {
          method: "POST",
          ampCors: false,
          credentials: "include",
          mode: "cors",
          body: payload
        }).then(function(res) {
          return res.json();
        }));
      }
    }, {
      key: "handleResponse_",
      value: function handleResponse_(res) {
        if (res["optOut"]) {
          this.persistToken_(TokenStatus.OPT_OUT, YEAR);
          return TokenStatus.OPT_OUT;
        }
        if (res["clientId"]) {
          this.persistToken_(res["securityToken"], YEAR);
          return res["clientId"];
        }
        if (res["alternateUrl"]) {
          return null;
        }
        this.persistToken_(TokenStatus.NOT_FOUND, HOUR);
        return null;
      }
    }, {
      key: "persistToken_",
      value: function persistToken_(tokenValue, expires) {
        if (tokenValue) {
          setCookie(this.win_, AMP_TOKEN, tokenValue, this.expiresIn_(expires), {
            highestAvailableDomain: true
          });
        }
      }
    }, {
      key: "expiresIn_",
      value: function expiresIn_(time) {
        return this.win_.Date.now() + time;
      }
    }, {
      key: "isReferrerProxyOrigin_",
      value: function isReferrerProxyOrigin_() {
        return isProxyOrigin(WindowInterface.getDocumentReferrer(this.win_));
      }
    }, {
      key: "isStatusToken_",
      value: function isStatusToken_(token) {
        return token && token[0] === "$";
      }
    }]);
    return GoogleCidApi2;
  }();

  // src/service/viewer-cid-api.js
  function _classCallCheck16(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties15(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass15(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties15(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties15(Constructor, staticProps);
    return Constructor;
  }
  var ViewerCidApi = /* @__PURE__ */ function() {
    function ViewerCidApi2(ampdoc) {
      _classCallCheck16(this, ViewerCidApi2);
      this.ampdoc_ = ampdoc;
      this.viewer_ = Services.viewerForDoc(this.ampdoc_);
      var _Services$documentInf = Services.documentInfoForDoc(this.ampdoc_), canonicalUrl = _Services$documentInf.canonicalUrl;
      this.canonicalOrigin_ = canonicalUrl ? parseUrlDeprecated(canonicalUrl).origin : null;
    }
    _createClass15(ViewerCidApi2, [{
      key: "isSupported",
      value: function isSupported() {
        if (!this.viewer_.hasCapability("cid")) {
          return Promise.resolve(false);
        }
        return this.viewer_.isTrustedViewer();
      }
    }, {
      key: "getScopedCid",
      value: function getScopedCid(apiKey, scope) {
        var payload = dict({
          "scope": scope,
          "clientIdApi": !!apiKey,
          "canonicalOrigin": this.canonicalOrigin_
        });
        if (apiKey) {
          payload["apiKey"] = apiKey;
        }
        return this.viewer_.sendMessageAwaitResponse("cid", payload);
      }
    }]);
    return ViewerCidApi2;
  }();

  // src/service/cid-impl.js
  function _classCallCheck17(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties16(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass16(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties16(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties16(Constructor, staticProps);
    return Constructor;
  }
  var ONE_DAY_MILLIS = 24 * 3600 * 1e3;
  var BASE_CID_MAX_AGE_MILLIS = 365 * ONE_DAY_MILLIS;
  var SCOPE_NAME_VALIDATOR = /^[a-zA-Z0-9-_.]+$/;
  var CID_OPTOUT_STORAGE_KEY = "amp-cid-optout";
  var CID_OPTOUT_VIEWER_MESSAGE = "cidOptOut";
  var CID_BACKUP_STORAGE_KEY = "amp-cid:";
  var TAG_3 = "CID";
  var GOOGLE_CID_API_META_NAME = "amp-google-client-id-api";
  var CID_API_SCOPE_ALLOWLIST = {
    "googleanalytics": "AMP_ECID_GOOGLE"
  };
  var API_KEYS = {
    "googleanalytics": "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM"
  };
  var Cid = /* @__PURE__ */ function() {
    function Cid2(ampdoc) {
      _classCallCheck17(this, Cid2);
      this.ampdoc = ampdoc;
      this.baseCid_ = null;
      this.externalCidCache_ = Object.create(null);
      this.cacheCidApi_ = new CacheCidApi(ampdoc);
      this.viewerCidApi_ = new ViewerCidApi(ampdoc);
      this.cidApi_ = new GoogleCidApi(ampdoc);
      this.apiKeyMap_ = null;
      this.isBackupCidExpOn = isExperimentOn(this.ampdoc.win, "amp-cid-backup");
    }
    _createClass16(Cid2, [{
      key: "get",
      value: function get(getCidStruct, consent, opt_persistenceConsent) {
        var _this = this;
        userAssert(SCOPE_NAME_VALIDATOR.test(getCidStruct.scope) && SCOPE_NAME_VALIDATOR.test(getCidStruct.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", getCidStruct.scope);
        return consent.then(function() {
          return _this.ampdoc.whenFirstVisible();
        }).then(function() {
          return isOptedOutOfCid(_this.ampdoc);
        }).then(function(optedOut) {
          if (optedOut) {
            return "";
          }
          var cidPromise = _this.getExternalCid_(getCidStruct, opt_persistenceConsent || consent);
          return Services.timerFor(_this.ampdoc.win).timeoutPromise(1e4, cidPromise, 'Getting cid for "' + getCidStruct.scope + '" timed out').catch(function(error) {
            rethrowAsync(error);
          });
        });
      }
    }, {
      key: "optOut",
      value: function optOut() {
        return optOutOfCid(this.ampdoc);
      }
    }, {
      key: "getExternalCid_",
      value: function getExternalCid_(getCidStruct, persistenceConsent) {
        var _this2 = this;
        var scope = getCidStruct.scope;
        var url = parseUrlDeprecated(this.ampdoc.win.location.href);
        if (!isProxyOrigin(url)) {
          var apiKey = this.isScopeOptedIn_(scope);
          if (apiKey) {
            return this.cidApi_.getScopedCid(apiKey, scope).then(function(scopedCid) {
              if (scopedCid == TokenStatus.OPT_OUT) {
                return null;
              }
              if (scopedCid) {
                var cookieName = getCidStruct.cookieName || scope;
                setCidCookie(_this2.ampdoc.win, cookieName, scopedCid);
                return scopedCid;
              }
              return getOrCreateCookie(_this2, getCidStruct, persistenceConsent);
            });
          }
          return getOrCreateCookie(this, getCidStruct, persistenceConsent);
        }
        return this.viewerCidApi_.isSupported().then(function(supported) {
          if (supported) {
            var _apiKey = _this2.isScopeOptedIn_(scope);
            return _this2.viewerCidApi_.getScopedCid(_apiKey, scope);
          }
          if (_this2.cacheCidApi_.isSupported() && _this2.isScopeOptedIn_(scope)) {
            return _this2.cacheCidApi_.getScopedCid(scope).then(function(scopedCid) {
              if (scopedCid) {
                return scopedCid;
              }
              return _this2.scopeBaseCid_(persistenceConsent, scope, url);
            });
          }
          return _this2.scopeBaseCid_(persistenceConsent, scope, url);
        });
      }
    }, {
      key: "scopeBaseCid_",
      value: function scopeBaseCid_(persistenceConsent, scope, url) {
        var _this3 = this;
        return getBaseCid(this, persistenceConsent).then(function(baseCid) {
          return Services.cryptoFor(_this3.ampdoc.win).sha384Base64(baseCid + getProxySourceOrigin(url) + scope);
        });
      }
    }, {
      key: "isScopeOptedIn_",
      value: function isScopeOptedIn_(scope) {
        if (!this.apiKeyMap_) {
          this.apiKeyMap_ = this.getOptedInScopes_();
        }
        return this.apiKeyMap_[scope];
      }
    }, {
      key: "getOptedInScopes_",
      value: function getOptedInScopes_() {
        var apiKeyMap = {};
        var optInMeta = this.ampdoc.getMetaByName(GOOGLE_CID_API_META_NAME);
        if (optInMeta) {
          optInMeta.split(",").forEach(function(item) {
            item = item.trim();
            if (item.indexOf("=") > 0) {
              var pair = item.split("=");
              var scope = pair[0].trim();
              apiKeyMap[scope] = pair[1].trim();
            } else {
              var clientName = item;
              var _scope = CID_API_SCOPE_ALLOWLIST[clientName];
              if (_scope) {
                apiKeyMap[_scope] = API_KEYS[clientName];
              } else {
                user().warn(TAG_3, "Unsupported client for Google CID API: " + clientName + "." + ('Please remove or correct meta[name="' + GOOGLE_CID_API_META_NAME + '"]'));
              }
            }
          });
        }
        return apiKeyMap;
      }
    }]);
    return Cid2;
  }();
  function optOutOfCid(ampdoc) {
    Services.viewerForDoc(ampdoc).sendMessage(CID_OPTOUT_VIEWER_MESSAGE, dict());
    return Services.storageForDoc(ampdoc).then(function(storage) {
      return storage.set(CID_OPTOUT_STORAGE_KEY, true);
    });
  }
  function isOptedOutOfCid(ampdoc) {
    return Services.storageForDoc(ampdoc).then(function(storage) {
      return storage.get(CID_OPTOUT_STORAGE_KEY).then(function(val) {
        return !!val;
      });
    }).catch(function() {
      return false;
    });
  }
  function setCidCookie(win, scope, cookie) {
    var expiration = Date.now() + BASE_CID_MAX_AGE_MILLIS;
    setCookie(win, scope, cookie, expiration, {
      highestAvailableDomain: true
    });
  }
  function setCidBackup(ampdoc, cookieName, cookie) {
    Services.storageForDoc(ampdoc).then(function(storage) {
      var isViewerStorage = storage.isViewerStorage();
      if (!isViewerStorage) {
        var key = getStorageKey(cookieName);
        storage.setNonBoolean(key, cookie);
      }
    });
  }
  function getStorageKey(cookieName) {
    return CID_BACKUP_STORAGE_KEY + cookieName;
  }
  function maybeGetCidFromCookieOrBackup(cid, getCidStruct) {
    var ampdoc = cid.ampdoc, isBackupCidExpOn = cid.isBackupCidExpOn;
    var win = ampdoc.win;
    var disableBackup = getCidStruct.disableBackup, scope = getCidStruct.scope;
    var cookieName = getCidStruct.cookieName || scope;
    var existingCookie = getCookie(win, cookieName);
    if (existingCookie) {
      return Promise.resolve(existingCookie);
    }
    if (isBackupCidExpOn && !disableBackup) {
      return Services.storageForDoc(ampdoc).then(function(storage) {
        var key = getStorageKey(cookieName);
        return storage.get(key, BASE_CID_MAX_AGE_MILLIS);
      }).then(function(backupCid) {
        if (!backupCid || typeof backupCid != "string") {
          return null;
        }
        return backupCid;
      });
    }
    return Promise.resolve(null);
  }
  function getOrCreateCookie(cid, getCidStruct, persistenceConsent) {
    var ampdoc = cid.ampdoc, isBackupCidExpOn = cid.isBackupCidExpOn;
    var win = ampdoc.win;
    var disableBackup = getCidStruct.disableBackup, scope = getCidStruct.scope;
    var cookieName = getCidStruct.cookieName || scope;
    return maybeGetCidFromCookieOrBackup(cid, getCidStruct).then(function(existingCookie) {
      if (!existingCookie && !getCidStruct.createCookieIfNotPresent) {
        return Promise.resolve(null);
      }
      if (existingCookie) {
        if (/^amp-/.test(existingCookie)) {
          setCidCookie(win, cookieName, existingCookie);
          if (isBackupCidExpOn && !disableBackup) {
            setCidBackup(ampdoc, cookieName, existingCookie);
          }
        }
        return Promise.resolve(existingCookie);
      }
      if (cid.externalCidCache_[scope]) {
        return cid.externalCidCache_[scope];
      }
      var newCookiePromise = getRandomString64(win).then(function(randomStr) {
        return "amp-" + randomStr;
      });
      Promise.all([newCookiePromise, persistenceConsent]).then(function(results) {
        var newCookie = results[0];
        var relookup = getCookie(win, cookieName);
        if (!relookup) {
          setCidCookie(win, cookieName, newCookie);
          if (isBackupCidExpOn && !disableBackup) {
            setCidBackup(ampdoc, cookieName, newCookie);
          }
        }
      });
      return cid.externalCidCache_[scope] = newCookiePromise;
    });
  }
  function getProxySourceOrigin(url) {
    userAssert(isProxyOrigin(url), "Expected proxy origin %s", url.origin);
    return getSourceOrigin(url);
  }
  function getBaseCid(cid, persistenceConsent) {
    if (cid.baseCid_) {
      return cid.baseCid_;
    }
    var win = cid.ampdoc.win;
    return cid.baseCid_ = read(cid.ampdoc).then(function(stored) {
      var needsToStore = false;
      var baseCid;
      if (stored && !isExpired(stored)) {
        baseCid = Promise.resolve(stored.cid);
        if (shouldUpdateStoredTime(stored)) {
          needsToStore = true;
        }
      } else {
        baseCid = Services.cryptoFor(win).sha384Base64(getEntropy(win));
        needsToStore = true;
      }
      if (needsToStore) {
        baseCid.then(function(baseCid2) {
          store(cid.ampdoc, persistenceConsent, baseCid2);
        });
      }
      return baseCid;
    });
  }
  function store(ampdoc, persistenceConsent, cidString) {
    var win = ampdoc.win;
    if (isIframed(win)) {
      viewerBaseCid(ampdoc, createCidData(cidString));
    } else {
      persistenceConsent.then(function() {
        try {
          win.localStorage.setItem("amp-cid", createCidData(cidString));
        } catch (ignore) {
        }
      });
    }
  }
  function viewerBaseCid(ampdoc, opt_data) {
    var viewer = Services.viewerForDoc(ampdoc);
    return viewer.isTrustedViewer().then(function(trusted) {
      if (!trusted) {
        return void 0;
      }
      dev().expectedError("CID", "Viewer does not provide cap=cid");
      return viewer.sendMessageAwaitResponse("cid", opt_data).then(function(data) {
        if (data && !tryParseJson(data)) {
          dev().expectedError("CID", "invalid cid format");
          return JSON.stringify(dict({
            "time": Date.now(),
            "cid": data
          }));
        }
        return data;
      });
    });
  }
  function createCidData(cidString) {
    return JSON.stringify(dict({
      "time": Date.now(),
      "cid": cidString
    }));
  }
  function read(ampdoc) {
    var win = ampdoc.win;
    var data;
    try {
      data = win.localStorage.getItem("amp-cid");
    } catch (ignore) {
    }
    var dataPromise = Promise.resolve(data);
    if (!data && isIframed(win)) {
      dataPromise = viewerBaseCid(ampdoc);
    }
    return dataPromise.then(function(data2) {
      if (!data2) {
        return null;
      }
      var item = parseJson(data2);
      return {
        time: item["time"],
        cid: item["cid"]
      };
    });
  }
  function isExpired(storedCidInfo) {
    var createdTime = storedCidInfo.time;
    var now = Date.now();
    return createdTime + BASE_CID_MAX_AGE_MILLIS < now;
  }
  function shouldUpdateStoredTime(storedCidInfo) {
    var createdTime = storedCidInfo.time;
    var now = Date.now();
    return createdTime + ONE_DAY_MILLIS < now;
  }
  function getEntropy(win) {
    var uint8array = getCryptoRandomBytesArray(win, 16);
    if (uint8array) {
      return uint8array;
    }
    return String(win.location.href + Date.now() + win.Math.random() + win.screen.width + win.screen.height);
  }
  function getRandomString64(win) {
    var entropy = getEntropy(win);
    if (typeof entropy == "string") {
      return Services.cryptoFor(win).sha384Base64(entropy);
    } else {
      var cast = entropy;
      return tryResolve(function() {
        return base64UrlEncodeFromBytes(cast).replace(/\.+$/, "");
      });
    }
  }
  function installCidService(ampdoc) {
    return registerServiceBuilderForDoc(ampdoc, "cid", Cid);
  }

  // src/service/document-info-impl.js
  function _classCallCheck18(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties17(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass17(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties17(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties17(Constructor, staticProps);
    return Constructor;
  }
  var filteredLinkRels = ["prefetch", "preload", "preconnect", "dns-prefetch"];
  function installDocumentInfoServiceForDoc(nodeOrDoc) {
    return registerServiceBuilderForDoc(nodeOrDoc, "documentInfo", DocInfo);
  }
  var DocInfo = /* @__PURE__ */ function() {
    function DocInfo2(ampdoc) {
      _classCallCheck18(this, DocInfo2);
      this.ampdoc_ = ampdoc;
      this.info_ = null;
      this.pageViewId64_ = null;
    }
    _createClass17(DocInfo2, [{
      key: "get",
      value: function get() {
        if (this.info_) {
          return this.info_;
        }
        var ampdoc = this.ampdoc_;
        var url = ampdoc.getUrl();
        var sourceUrl = getSourceUrl(url);
        var rootNode = ampdoc.getRootNode();
        var canonicalUrl = rootNode && rootNode.AMP && rootNode.AMP.canonicalUrl;
        if (!canonicalUrl) {
          var canonicalTag = rootNode.querySelector("link[rel=canonical]");
          canonicalUrl = canonicalTag ? parseUrlDeprecated(canonicalTag.href).href : sourceUrl;
        }
        var pageViewId = getPageViewId(ampdoc.win);
        var linkRels = getLinkRels(ampdoc.win.document);
        var viewport = getViewport(ampdoc.win.document);
        var replaceParams = getReplaceParams(ampdoc);
        return this.info_ = {
          get sourceUrl() {
            return getSourceUrl(ampdoc.getUrl());
          },
          canonicalUrl,
          pageViewId,
          get pageViewId64() {
            if (!this.pageViewId64_) {
              this.pageViewId64_ = getRandomString64(ampdoc.win);
            }
            return this.pageViewId64_;
          },
          linkRels,
          viewport,
          replaceParams
        };
      }
    }]);
    return DocInfo2;
  }();
  function getPageViewId(win) {
    return String(Math.floor(win.Math.random() * 1e4));
  }
  function getLinkRels(doc) {
    var linkRels = map();
    if (doc.head) {
      var links = doc.head.querySelectorAll("link[rel]");
      var _loop = function _loop2(i2) {
        var link = links[i2];
        var href = link.href;
        var rels = link.getAttribute("rel");
        if (!rels || !href) {
          return "continue";
        }
        rels.split(/\s+/).forEach(function(rel) {
          if (filteredLinkRels.indexOf(rel) != -1) {
            return;
          }
          var value = linkRels[rel];
          if (value) {
            if (!isArray(value)) {
              value = linkRels[rel] = [value];
            }
            value.push(href);
          } else {
            linkRels[rel] = href;
          }
        });
      };
      for (var i = 0; i < links.length; i++) {
        var _ret = _loop(i);
        if (_ret === "continue")
          continue;
      }
    }
    return linkRels;
  }
  function getViewport(doc) {
    var viewportEl = doc.head.querySelector('meta[name="viewport"]');
    return viewportEl ? viewportEl.getAttribute("content") : null;
  }
  function getReplaceParams(ampdoc) {
    if (!ampdoc.isSingleDoc() || getProxyServingType(ampdoc.win.location.href) != "a") {
      return null;
    }
    var url = parseUrlDeprecated(ampdoc.win.location.href);
    var replaceRaw = parseQueryString(url.search)["amp_r"];
    if (replaceRaw === void 0) {
      return null;
    }
    return parseQueryString(replaceRaw);
  }

  // src/impression.js
  var trackImpressionPromise = null;
  var DEFAULT_APPEND_URL_PARAM = ["gclid", "gclsrc"];
  function getTrackImpressionPromise() {
    return userAssert(trackImpressionPromise, "E#19457 trackImpressionPromise");
  }
  function shouldAppendExtraParams(ampdoc) {
    return ampdoc.whenReady().then(function() {
      return !!ampdoc.getBody().querySelector("amp-analytics[type=googleanalytics]");
    });
  }
  function getExtraParamsUrl(win, target) {
    var url = parseUrlDeprecated(WindowInterface.getLocation(win).href);
    var params = parseQueryString(url.search);
    var appendParams = [];
    for (var i = 0; i < DEFAULT_APPEND_URL_PARAM.length; i++) {
      var param = DEFAULT_APPEND_URL_PARAM[i];
      if (typeof params[param] !== "undefined") {
        appendParams.push(param);
      }
    }
    var additionalUrlParams = target.getAttribute("data-amp-addparams");
    var href = target.href;
    if (additionalUrlParams) {
      href = addParamsToUrl(href, parseQueryString(additionalUrlParams));
    }
    var loc = parseUrlDeprecated(href);
    var existParams = parseQueryString(loc.search);
    for (var _i = appendParams.length - 1; _i >= 0; _i--) {
      var _param = appendParams[_i];
      if (typeof existParams[_param] !== "undefined") {
        appendParams.splice(_i, 1);
      }
    }
    return getQueryParamUrl(appendParams);
  }
  function getQueryParamUrl(params) {
    var url = "";
    for (var i = 0; i < params.length; i++) {
      var param = params[i];
      url += i == 0 ? param + "=QUERY_PARAM(" + param + ")" : "&" + param + "=QUERY_PARAM(" + param + ")";
    }
    return url;
  }

  // src/core/data-structures/priority-queue.js
  function _classCallCheck19(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties18(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass18(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties18(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties18(Constructor, staticProps);
    return Constructor;
  }
  var PriorityQueue = /* @__PURE__ */ function() {
    function PriorityQueue2() {
      _classCallCheck19(this, PriorityQueue2);
      this.queue_ = [];
    }
    _createClass18(PriorityQueue2, [{
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

  // src/service/navigation.js
  function _classCallCheck20(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties19(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass19(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties19(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties19(Constructor, staticProps);
    return Constructor;
  }
  var TAG4 = "navigation";
  var EVENT_TYPE_CLICK = "click";
  var EVENT_TYPE_CONTEXT_MENU = "contextmenu";
  var VALID_TARGETS = ["_top", "_blank"];
  var ORIG_HREF_ATTRIBUTE = "data-a4a-orig-href";
  var AMP_CUSTOM_LINKER_TARGET = "__AMP_CUSTOM_LINKER_TARGET__";
  function installGlobalNavigationHandlerForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, TAG4, Navigation, true);
  }
  var Navigation = /* @__PURE__ */ function() {
    function Navigation2(ampdoc) {
      var _this = this;
      _classCallCheck20(this, Navigation2);
      this.ampdoc = ampdoc;
      this.rootNode_ = ampdoc.getRootNode();
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.viewer_ = Services.viewerForDoc(this.ampdoc);
      this.history_ = Services.historyForDoc(this.ampdoc);
      this.platform_ = Services.platformFor(this.ampdoc.win);
      this.isIosSafari_ = this.platform_.isIos() && this.platform_.isSafari();
      this.isIframed_ = isIframed(this.ampdoc.win) && this.viewer_.isOvertakeHistory();
      this.isEmbed_ = this.rootNode_ != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
      this.isInABox_ = getMode(this.ampdoc.win).runtime == "inabox";
      this.serviceContext_ = this.rootNode_.nodeType == Node.DOCUMENT_NODE ? this.rootNode_.documentElement : this.rootNode_;
      this.boundHandle_ = this.handle_.bind(this);
      this.rootNode_.addEventListener(EVENT_TYPE_CLICK, this.boundHandle_);
      this.rootNode_.addEventListener(EVENT_TYPE_CONTEXT_MENU, this.boundHandle_);
      this.appendExtraParams_ = false;
      shouldAppendExtraParams(this.ampdoc).then(function(res) {
        _this.appendExtraParams_ = res;
      });
      this.isTrustedViewer_ = false;
      this.isLocalViewer_ = false;
      Promise.all([this.viewer_.isTrustedViewer(), this.viewer_.getViewerOrigin()]).then(function(values) {
        _this.isTrustedViewer_ = values[0];
        _this.isLocalViewer_ = isLocalhostOrigin(values[1]);
      });
      this.a2aFeatures_ = null;
      this.anchorMutators_ = new PriorityQueue();
      this.navigateToMutators_ = new PriorityQueue();
    }
    _createClass19(Navigation2, [{
      key: "cleanup",
      value: function cleanup() {
        if (this.boundHandle_) {
          this.rootNode_.removeEventListener(EVENT_TYPE_CLICK, this.boundHandle_);
          this.rootNode_.removeEventListener(EVENT_TYPE_CONTEXT_MENU, this.boundHandle_);
        }
      }
    }, {
      key: "openWindow",
      value: function openWindow(win, url, target, opener) {
        var options = "";
        if ((this.platform_.isIos() || !this.platform_.isChrome()) && !opener) {
          options += "noopener";
        }
        var newWin = openWindowDialog(win, url, target, options);
        if (newWin && !opener) {
          newWin.opener = null;
        }
      }
    }, {
      key: "navigateTo",
      value: function navigateTo(win, url, opt_requestedBy, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$opener = _options.opener, opener = _options$opener === void 0 ? false : _options$opener, _options$target = _options.target, target = _options$target === void 0 ? "_top" : _options$target;
        url = this.applyNavigateToMutators_(url);
        var urlService = Services.urlForDoc(this.serviceContext_);
        if (!urlService.isProtocolValid(url)) {
          user().error(TAG4, "Cannot navigate to invalid protocol: " + url);
          return;
        }
        userAssert(VALID_TARGETS.includes(target), "Target '" + target + "' not supported.");
        var sourceUrl = urlService.getSourceUrl(win.location);
        url = urlService.resolveRelativeUrl(url, sourceUrl);
        if (target == "_blank") {
          this.openWindow(win, url, target, opener);
          return;
        }
        if (opt_requestedBy) {
          if (!this.a2aFeatures_) {
            this.a2aFeatures_ = this.queryA2AFeatures_();
          }
          if (this.a2aFeatures_.includes(opt_requestedBy)) {
            if (this.navigateToAmpUrl(url, opt_requestedBy)) {
              return;
            }
          }
        }
        win.top.location.href = url;
      }
    }, {
      key: "navigateToAmpUrl",
      value: function navigateToAmpUrl(url, requestedBy) {
        if (this.viewer_.hasCapability("a2a")) {
          this.viewer_.sendMessage("a2aNavigate", dict({
            "url": url,
            "requestedBy": requestedBy
          }));
          return true;
        }
        return false;
      }
    }, {
      key: "queryA2AFeatures_",
      value: function queryA2AFeatures_() {
        var meta = this.rootNode_.querySelector('meta[name="amp-to-amp-navigation"]');
        if (meta && meta.hasAttribute("content")) {
          return meta.getAttribute("content").split(",").map(function(s) {
            return s.trim();
          });
        }
        return [];
      }
    }, {
      key: "handle_",
      value: function handle_(e) {
        if (e.defaultPrevented) {
          return;
        }
        var element = dev().assertElement(e[AMP_CUSTOM_LINKER_TARGET] || e.target);
        var target = closestAncestorElementBySelector(element, "A");
        if (!target || !target.href) {
          return;
        }
        if (e.type == EVENT_TYPE_CLICK) {
          this.handleClick_(target, e);
        } else if (e.type == EVENT_TYPE_CONTEXT_MENU) {
          this.handleContextMenuClick_(target, e);
        }
      }
    }, {
      key: "handleClick_",
      value: function handleClick_(element, e) {
        this.expandVarsForAnchor_(element);
        var toLocation = this.parseUrl_(element.href);
        if (this.handleA2AClick_(e, element, toLocation)) {
          return;
        }
        if (this.handleCustomProtocolClick_(e, element, toLocation)) {
          return;
        }
        var fromLocation = this.getLocation_();
        if (getHrefMinusHash(toLocation) != getHrefMinusHash(fromLocation)) {
          this.applyAnchorMutators_(element, e);
          toLocation = this.parseUrl_(element.href);
        }
        this.handleNavigation_(e, element, toLocation, fromLocation);
      }
    }, {
      key: "handleContextMenuClick_",
      value: function handleContextMenuClick_(element, e) {
        this.expandVarsForAnchor_(element);
        this.applyAnchorMutators_(element, e);
      }
    }, {
      key: "applyAnchorMutators_",
      value: function applyAnchorMutators_(element, e) {
        this.anchorMutators_.forEach(function(anchorMutator) {
          anchorMutator(element, e);
        });
      }
    }, {
      key: "applyNavigateToMutators_",
      value: function applyNavigateToMutators_(url) {
        this.navigateToMutators_.forEach(function(mutator) {
          url = mutator(url);
        });
        return url;
      }
    }, {
      key: "expandVarsForAnchor_",
      value: function expandVarsForAnchor_(el) {
        var defaultExpandParamsUrl = null;
        if (this.appendExtraParams_ && !this.isEmbed_) {
          defaultExpandParamsUrl = getExtraParamsUrl(this.ampdoc.win, el);
        }
        var urlReplacements = Services.urlReplacementsForDoc(el);
        urlReplacements.maybeExpandLink(el, defaultExpandParamsUrl);
      }
    }, {
      key: "handleCustomProtocolClick_",
      value: function handleCustomProtocolClick_(e, element, location) {
        if (!this.isIframed_) {
          return false;
        }
        var win = toWin(element.ownerDocument.defaultView);
        var url = element.href;
        var protocol = location.protocol;
        var isFTP = protocol == "ftp:";
        if (isFTP) {
          openWindowDialog(win, url, "_blank");
          e.preventDefault();
          return true;
        }
        var isNormalProtocol = /^(https?|mailto):$/.test(protocol);
        if (this.isIosSafari_ && !isNormalProtocol) {
          openWindowDialog(win, url, "_top");
          e.preventDefault();
          return true;
        }
        return false;
      }
    }, {
      key: "handleA2AClick_",
      value: function handleA2AClick_(e, element, location) {
        if (!element.hasAttribute("rel")) {
          return false;
        }
        var relations = element.getAttribute("rel").split(" ").map(function(s) {
          return s.trim();
        });
        if (!relations.includes("amphtml")) {
          return false;
        }
        if (this.navigateToAmpUrl(location.href, "<a rel=amphtml>")) {
          e.preventDefault();
          return true;
        }
        return false;
      }
    }, {
      key: "handleNavigation_",
      value: function handleNavigation_(e, element, toLocation, fromLocation) {
        var to = getHrefMinusHash(toLocation);
        var from = getHrefMinusHash(fromLocation);
        if (toLocation.hash && to == from) {
          this.handleHashNavigation_(e, toLocation, fromLocation);
        } else {
          var target = (element.getAttribute("target") || "").toLowerCase();
          if (this.isEmbed_ || this.isInABox_) {
            if (target != "_top" && target != "_blank") {
              target = "_blank";
              element.setAttribute("target", target);
            }
          }
          var win = this.ampdoc.win;
          var platform = Services.platformFor(win);
          var viewer = Services.viewerForDoc(element);
          if (fromLocation.search && platform.isSafari() && platform.getMajorVersion() >= 13 && viewer.isProxyOrigin() && viewer.isEmbedded()) {
            this.removeViewerQueryBeforeNavigation_(win, fromLocation, target);
          }
          if (this.viewerInterceptsNavigation(to, "intercept_click")) {
            e.preventDefault();
          }
        }
      }
    }, {
      key: "removeViewerQueryBeforeNavigation_",
      value: function removeViewerQueryBeforeNavigation_(win, fromLocation, target) {
        dev().info(TAG4, "Removing iframe query string before navigation:", fromLocation.search);
        var original = fromLocation.href;
        var noQuery = "" + fromLocation.origin + fromLocation.pathname + fromLocation.hash;
        win.history.replaceState(null, "", noQuery);
        var restoreQuery = function restoreQuery2() {
          var currentHref = win.location.href;
          if (currentHref == noQuery) {
            dev().info(TAG4, "Restored iframe URL with query string:", original);
            win.history.replaceState(null, "", original);
          } else {
            dev().error(TAG4, "Unexpected iframe URL change:", currentHref, noQuery);
          }
        };
        if (target === "_blank") {
          win.setTimeout(restoreQuery, 0);
        } else {
          win.addEventListener("pageshow", function onPageShow(e) {
            if (e.persisted) {
              restoreQuery();
              win.removeEventListener("pageshow", onPageShow);
            }
          });
        }
      }
    }, {
      key: "handleHashNavigation_",
      value: function handleHashNavigation_(e, toLocation, fromLocation) {
        var _this2 = this;
        if (Services.platformFor(this.ampdoc.win).isIe()) {
          var id = toLocation.hash.substring(1);
          var elementWithId = this.ampdoc.getElementById(id);
          if (elementWithId) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(elementWithId.tagName)) {
              elementWithId.tabIndex = -1;
            }
            tryFocus(elementWithId);
          }
        }
        e.preventDefault();
        if (this.isEmbed_) {
          return;
        }
        var hash = toLocation.hash.slice(1);
        var el = null;
        if (hash) {
          var escapedHash = escapeCssSelectorIdent(hash);
          el = this.rootNode_.getElementById(hash) || this.rootNode_.querySelector('a[name="' + escapedHash + '"]');
        }
        if (toLocation.hash != fromLocation.hash) {
          this.history_.replaceStateForTarget(toLocation.hash).then(function() {
            _this2.scrollToElement_(el, hash);
          });
        } else {
          this.scrollToElement_(el, hash);
        }
      }
    }, {
      key: "registerAnchorMutator",
      value: function registerAnchorMutator(callback, priority) {
        this.anchorMutators_.enqueue(callback, priority);
      }
    }, {
      key: "registerNavigateToMutator",
      value: function registerNavigateToMutator(callback, priority) {
        this.navigateToMutators_.enqueue(callback, priority);
      }
    }, {
      key: "scrollToElement_",
      value: function scrollToElement_(elem, hash) {
        var _this3 = this;
        if (elem) {
          this.viewport_.scrollIntoView(elem);
          Services.timerFor(this.ampdoc.win).delay(function() {
            return _this3.viewport_.scrollIntoView(dev().assertElement(elem));
          }, 1);
        } else {
          dev().warn(TAG4, "failed to find element with id=" + hash + " or a[name=" + hash + "]");
        }
      }
    }, {
      key: "parseUrl_",
      value: function parseUrl_(url) {
        return Services.urlForDoc(this.serviceContext_).parse(url);
      }
    }, {
      key: "getLocation_",
      value: function getLocation_() {
        var baseHref = getMode().test && !this.isEmbed_ ? this.ampdoc.win.location.href : "";
        return this.parseUrl_(baseHref);
      }
    }, {
      key: "viewerInterceptsNavigation",
      value: function viewerInterceptsNavigation(url, requestedBy) {
        var viewerHasCapability = this.viewer_.hasCapability("interceptNavigation");
        var docOptedIn = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
        if (!viewerHasCapability || !docOptedIn || !(this.isTrustedViewer_ || this.isLocalViewer_)) {
          return false;
        }
        this.viewer_.sendMessage("navigateTo", dict({
          "url": url,
          "requestedBy": requestedBy
        }));
        return true;
      }
    }], [{
      key: "installAnchorClickInterceptor",
      value: function installAnchorClickInterceptor(ampdoc, win) {
        win.document.documentElement.addEventListener("click", maybeExpandUrlParams.bind(null, ampdoc), true);
      }
    }]);
    return Navigation2;
  }();
  function maybeExpandUrlParams(ampdoc, e) {
    var target = closestAncestorElementBySelector(dev().assertElement(e.target), "A");
    if (!target || !target.href) {
      return;
    }
    var hrefToExpand = target.getAttribute(ORIG_HREF_ATTRIBUTE) || target.getAttribute("href");
    if (!hrefToExpand) {
      return;
    }
    var vars = {
      "CLICK_X": function CLICK_X() {
        return e.pageX;
      },
      "CLICK_Y": function CLICK_Y() {
        return e.pageY;
      }
    };
    var newHref = Services.urlReplacementsForDoc(target).expandUrlSync(hrefToExpand, vars, {
      "CLICK_X": true,
      "CLICK_Y": true
    });
    if (newHref != hrefToExpand) {
      if (!target.getAttribute(ORIG_HREF_ATTRIBUTE)) {
        target.setAttribute(ORIG_HREF_ATTRIBUTE, hrefToExpand);
      }
      target.setAttribute("href", newHref);
    }
  }
  function getHrefMinusHash(location) {
    return "" + location.origin + location.pathname + location.search;
  }

  // src/document-submit.js
  function installGlobalSubmitListenerForDoc(ampdoc) {
    return ampdoc.whenExtensionsKnown().then(function() {
      if (ampdoc.declaresExtension("amp-form")) {
        ampdoc.getRootNode().addEventListener("submit", onDocumentFormSubmit_, true);
      }
    });
  }
  function onDocumentFormSubmit_(e) {
    if (e.defaultPrevented) {
      return;
    }
    var form = dev().assertElement(e.target);
    if (!form || form.tagName != "FORM") {
      return;
    }
    var isAmpFormMarked = form.classList.contains("i-amphtml-form");
    var shouldValidate;
    if (isAmpFormMarked) {
      shouldValidate = !form.hasAttribute("amp-novalidate");
    } else {
      shouldValidate = !form.hasAttribute("novalidate");
    }
    if (shouldValidate && form.checkValidity && !form.checkValidity()) {
      e.preventDefault();
    }
    var inputs = form.elements;
    for (var i = 0; i < inputs.length; i++) {
      userAssert(!inputs[i].name || inputs[i].name != SOURCE_ORIGIN_PARAM, "Illegal input name, %s found: %s", SOURCE_ORIGIN_PARAM, inputs[i]);
    }
    var action = form.getAttribute("action");
    var actionXhr = form.getAttribute("action-xhr");
    var method = (form.getAttribute("method") || "GET").toUpperCase();
    if (actionXhr) {
      assertHttpsUrl(actionXhr, form, "action-xhr");
      userAssert(!isProxyOrigin(actionXhr), "form action-xhr should not be on AMP CDN: %s", form);
      checkCorsUrl(actionXhr);
    }
    if (action) {
      assertHttpsUrl(action, form, "action");
      userAssert(!isProxyOrigin(action), "form action should not be on AMP CDN: %s", form);
      checkCorsUrl(action);
    }
    if (method == "GET") {
      userAssert(actionXhr || action, "form action-xhr or action attribute is required for method=GET: %s", form);
    } else if (method == "POST") {
      if (action) {
        var TAG17 = "form";
        user().error(TAG17, "action attribute is invalid for method=POST: %s", form);
      }
      if (!actionXhr) {
        e.preventDefault();
        userAssert(false, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", form);
      }
    }
    var target = form.getAttribute("target");
    if (target) {
      userAssert(target == "_blank" || target == "_top", "form target=%s is invalid can only be _blank or _top: %s", target, form);
    } else {
      form.setAttribute("target", "_top");
    }
    if (actionXhr) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var actions = Services.actionServiceForDoc(form);
      actions.execute(form, "submit", null, form, form, e, ActionTrust.HIGH);
    }
  }

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray4(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _classCallCheck21(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties20(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass20(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties20(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties20(Constructor, staticProps);
    return Constructor;
  }
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck21(this, Observable2);
      this.handlers_ = null;
    }
    _createClass20(Observable2, [{
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
        for (var _iterator = _createForOfIteratorHelperLoose4(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // src/service/hidden-observer-impl.js
  function _classCallCheck22(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties21(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass21(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties21(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties21(Constructor, staticProps);
    return Constructor;
  }
  var OBSERVER_OPTIONS = {
    attributes: true,
    attributeFilter: ["hidden"],
    subtree: true
  };
  var HiddenObserver = /* @__PURE__ */ function() {
    function HiddenObserver2(ampdoc) {
      _classCallCheck22(this, HiddenObserver2);
      this.root_ = ampdoc.getRootNode();
      var doc = this.root_.ownerDocument || this.root_;
      this.win_ = devAssert(doc.defaultView);
      this.mutationObserver_ = null;
      this.observable_ = null;
    }
    _createClass21(HiddenObserver2, [{
      key: "add",
      value: function add(handler) {
        var _this = this;
        this.init_();
        var remove2 = this.observable_.add(handler);
        return function() {
          remove2();
          if (_this.observable_.getHandlerCount() === 0) {
            _this.dispose();
          }
        };
      }
    }, {
      key: "init_",
      value: function init_() {
        var _this2 = this;
        if (this.mutationObserver_) {
          return;
        }
        this.observable_ = new Observable();
        var mo = new this.win_.MutationObserver(function(mutations) {
          if (mutations) {
            _this2.observable_.fire(mutations);
          }
        });
        this.mutationObserver_ = mo;
        mo.observe(this.root_, OBSERVER_OPTIONS);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (!this.mutationObserver_) {
          return;
        }
        this.mutationObserver_.disconnect();
        this.observable_.removeAll();
        this.mutationObserver_ = null;
        this.observable_ = null;
      }
    }]);
    return HiddenObserver2;
  }();
  function installHiddenObserverForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "hidden-observer", HiddenObserver);
  }

  // src/core/window/history.js
  function getState(history) {
    try {
      return history.state;
    } catch (e) {
      return null;
    }
  }

  // src/service/history-impl.js
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _classCallCheck23(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties22(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass22(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties22(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties22(Constructor, staticProps);
    return Constructor;
  }
  var TAG_4 = "History";
  var HISTORY_PROP_ = "AMP.History";
  var History = /* @__PURE__ */ function() {
    function History2(ampdoc, binding) {
      _classCallCheck23(this, History2);
      this.ampdoc_ = ampdoc;
      this.timer_ = Services.timerFor(ampdoc.win);
      this.binding_ = binding;
      this.stackIndex_ = 0;
      this.stackOnPop_ = [];
      this.queue_ = [];
      this.binding_.setOnStateUpdated(this.onStateUpdated_.bind(this));
    }
    _createClass22(History2, [{
      key: "cleanup",
      value: function cleanup() {
        this.binding_.cleanup();
      }
    }, {
      key: "push",
      value: function push(opt_onPop, opt_stateUpdate) {
        var _this = this;
        return this.enque_(function() {
          return _this.binding_.push(opt_stateUpdate).then(function(historyState) {
            _this.onStateUpdated_(historyState);
            if (opt_onPop) {
              _this.stackOnPop_[historyState.stackIndex] = opt_onPop;
            }
            return historyState.stackIndex;
          });
        }, "push");
      }
    }, {
      key: "pop",
      value: function pop(stateId) {
        var _this2 = this;
        return this.enque_(function() {
          return _this2.binding_.pop(stateId).then(function(historyState) {
            _this2.onStateUpdated_(historyState);
          });
        }, "pop");
      }
    }, {
      key: "replace",
      value: function replace(opt_stateUpdate) {
        var _this3 = this;
        return this.enque_(function() {
          return _this3.binding_.replace(opt_stateUpdate);
        }, "replace");
      }
    }, {
      key: "get",
      value: function get() {
        var _this4 = this;
        return this.enque_(function() {
          return _this4.binding_.get();
        }, "get");
      }
    }, {
      key: "goBack",
      value: function goBack(navigate) {
        var _this5 = this;
        return this.enque_(function() {
          if (_this5.stackIndex_ <= 0 && !navigate) {
            return resolvedPromise();
          }
          return _this5.binding_.pop(_this5.stackIndex_).then(function(historyState) {
            _this5.onStateUpdated_(historyState);
          });
        }, "goBack");
      }
    }, {
      key: "replaceStateForTarget",
      value: function replaceStateForTarget(target) {
        var _this6 = this;
        devAssert(target[0] == "#", "target should start with a #");
        var previousHash = this.ampdoc_.win.location.hash;
        return this.push(function() {
          _this6.ampdoc_.win.location.replace(previousHash || "#");
        }).then(function() {
          _this6.binding_.replaceStateForTarget(target);
        });
      }
    }, {
      key: "getFragment",
      value: function getFragment() {
        return this.binding_.getFragment();
      }
    }, {
      key: "updateFragment",
      value: function updateFragment(fragment) {
        if (fragment[0] == "#") {
          fragment = fragment.substr(1);
        }
        return this.binding_.updateFragment(fragment);
      }
    }, {
      key: "onStateUpdated_",
      value: function onStateUpdated_(historyState) {
        this.stackIndex_ = historyState.stackIndex;
        this.doPop_(historyState);
      }
    }, {
      key: "doPop_",
      value: function doPop_(historyState) {
        var _this7 = this;
        if (this.stackIndex_ >= this.stackOnPop_.length - 1) {
          return;
        }
        var toPop = [];
        for (var i = this.stackOnPop_.length - 1; i > this.stackIndex_; i--) {
          if (this.stackOnPop_[i]) {
            toPop.push(this.stackOnPop_[i]);
            this.stackOnPop_[i] = void 0;
          }
        }
        this.stackOnPop_.splice(this.stackIndex_ + 1);
        if (toPop.length > 0) {
          var _loop = function _loop2(_i2) {
            _this7.timer_.delay(function() {
              return toPop[_i2](historyState);
            }, 1);
          };
          for (var _i = 0; _i < toPop.length; _i++) {
            _loop(_i);
          }
        }
      }
    }, {
      key: "enque_",
      value: function enque_(callback, name) {
        var deferred = new Deferred();
        var promise = deferred.promise, reject = deferred.reject, resolve = deferred.resolve;
        var trace = new Error("history trace for " + name + ": ");
        this.queue_.push({
          callback,
          resolve,
          reject,
          trace
        });
        if (this.queue_.length == 1) {
          this.deque_();
        }
        return promise;
      }
    }, {
      key: "deque_",
      value: function deque_() {
        var _this8 = this;
        if (this.queue_.length == 0) {
          return;
        }
        var task = this.queue_[0];
        var promise;
        try {
          promise = task.callback();
        } catch (e) {
          promise = Promise.reject(e);
        }
        promise.then(function(result) {
          task.resolve(result);
        }, function(reason) {
          dev().error(TAG_4, "failed to execute a task:", reason);
          if (task.trace) {
            task.trace.message += reason;
            dev().error(TAG_4, task.trace);
          }
          task.reject(reason);
        }).then(function() {
          _this8.queue_.splice(0, 1);
          _this8.deque_();
        });
      }
    }]);
    return History2;
  }();
  var HistoryBindingNatural_ = /* @__PURE__ */ function() {
    function HistoryBindingNatural_2(win) {
      var _this9 = this;
      _classCallCheck23(this, HistoryBindingNatural_2);
      this.win = win;
      this.timer_ = Services.timerFor(win);
      var history = this.win.history;
      this.startIndex_ = history.length - 1;
      var state = getState(history);
      if (state && state[HISTORY_PROP_] !== void 0) {
        this.startIndex_ = Math.min(state[HISTORY_PROP_], this.startIndex_);
      }
      this.stackIndex_ = this.startIndex_;
      this.waitingState_;
      this.onStateUpdated_ = null;
      this.supportsState_ = "state" in history;
      this.unsupportedState_ = this.historyState_(this.stackIndex_);
      var pushState, replaceState;
      if (history.pushState && history.replaceState) {
        this.origPushState_ = history.originalPushState || history.pushState.bind(history);
        this.origReplaceState_ = history.originalReplaceState || history.replaceState.bind(history);
        pushState = function pushState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
          _this9.origPushState_(state2, opt_title, opt_url || null);
        };
        replaceState = function replaceState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
          if (opt_url !== void 0) {
            _this9.origReplaceState_(state2, opt_title, opt_url);
          } else {
            _this9.origReplaceState_(state2, opt_title);
          }
        };
        if (!history.originalPushState) {
          history.originalPushState = this.origPushState_;
        }
        if (!history.originalReplaceState) {
          history.originalReplaceState = this.origReplaceState_;
        }
      } else {
        pushState = function pushState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
        };
        replaceState = function replaceState2(state2, opt_title, opt_url) {
          _this9.unsupportedState_ = state2;
        };
      }
      this.pushState_ = pushState;
      this.replaceState_ = replaceState;
      try {
        this.replaceState_(this.historyState_(this.stackIndex_, true));
      } catch (e) {
        dev().error(TAG_4, "Initial replaceState failed: " + e.message);
      }
      history.pushState = this.historyPushState_.bind(this);
      history.replaceState = this.historyReplaceState_.bind(this);
      this.popstateHandler_ = function(e) {
        var event = e;
        var state2 = event.state;
        dev().fine(TAG_4, "popstate event: " + _this9.win.history.length + ", " + JSON.stringify(state2));
        _this9.onHistoryEvent_();
      };
      this.win.addEventListener("popstate", this.popstateHandler_);
    }
    _createClass22(HistoryBindingNatural_2, [{
      key: "cleanup",
      value: function cleanup() {
        if (this.origPushState_) {
          this.win.history.pushState = this.origPushState_;
        }
        if (this.origReplaceState_) {
          this.win.history.replaceState = this.origReplaceState_;
        }
        this.win.removeEventListener("popstate", this.popstateHandler_);
      }
    }, {
      key: "historyState_",
      value: function historyState_(stackIndex, opt_replace) {
        var state = map(opt_replace ? this.getState_() : void 0);
        state[HISTORY_PROP_] = stackIndex;
        return state;
      }
    }, {
      key: "setOnStateUpdated",
      value: function setOnStateUpdated(callback) {
        this.onStateUpdated_ = callback;
      }
    }, {
      key: "push",
      value: function push(opt_stateUpdate) {
        var _this10 = this;
        return this.whenReady_(function() {
          var newState = _this10.mergeStateUpdate_(_this10.getState_(), opt_stateUpdate || {});
          _this10.historyPushState_(newState, void 0, newState.fragment ? "#" + newState.fragment : void 0);
          return tryResolve(function() {
            return _this10.mergeStateUpdate_(newState, {
              stackIndex: _this10.stackIndex_
            });
          });
        });
      }
    }, {
      key: "pop",
      value: function pop(stackIndex) {
        var _this11 = this;
        stackIndex = Math.max(stackIndex, this.startIndex_);
        return this.whenReady_(function() {
          return _this11.back_(_this11.stackIndex_ - stackIndex + 1);
        }).then(function(newStackIndex) {
          return _this11.mergeStateUpdate_(_this11.getState_(), {
            stackIndex: newStackIndex
          });
        });
      }
    }, {
      key: "replace",
      value: function replace(opt_stateUpdate) {
        var _this12 = this;
        if (opt_stateUpdate === void 0) {
          opt_stateUpdate = {};
        }
        return this.whenReady_(function() {
          var newState = _this12.mergeStateUpdate_(_this12.getState_(), opt_stateUpdate || {});
          var url = (newState.url || "").replace(/#.*/, "");
          var fragment = newState.fragment ? "#" + newState.fragment : "";
          _this12.historyReplaceState_(newState, newState.title, url || fragment ? url + fragment : void 0);
          return tryResolve(function() {
            return _this12.mergeStateUpdate_(newState, {
              stackIndex: _this12.stackIndex_
            });
          });
        });
      }
    }, {
      key: "get",
      value: function get() {
        var _this13 = this;
        return tryResolve(function() {
          return _this13.mergeStateUpdate_(_this13.getState_(), {
            stackIndex: _this13.stackIndex_
          });
        });
      }
    }, {
      key: "backTo",
      value: function backTo(stackIndex) {
        var _this14 = this;
        stackIndex = Math.max(stackIndex, this.startIndex_);
        return this.whenReady_(function() {
          return _this14.back_(_this14.stackIndex_ - stackIndex);
        });
      }
    }, {
      key: "onHistoryEvent_",
      value: function onHistoryEvent_() {
        var state = this.getState_();
        dev().fine(TAG_4, "history event: " + this.win.history.length + ", " + JSON.stringify(state));
        var stackIndex = state ? state[HISTORY_PROP_] : void 0;
        var newStackIndex = this.stackIndex_;
        var waitingState = this.waitingState_;
        this.waitingState_ = void 0;
        if (newStackIndex > this.win.history.length - 2) {
          newStackIndex = this.win.history.length - 2;
          this.updateHistoryState_(this.mergeStateUpdate_(state, {
            stackIndex: newStackIndex
          }));
        }
        if (stackIndex == void 0) {
          newStackIndex = newStackIndex + 1;
        } else if (stackIndex < this.win.history.length) {
          newStackIndex = stackIndex;
        } else {
          newStackIndex = this.win.history.length - 1;
        }
        if (!state) {
          state = {};
        }
        state[HISTORY_PROP_] = newStackIndex;
        this.replaceState_(state, void 0, void 0);
        if (newStackIndex != this.stackIndex_) {
          this.updateHistoryState_(this.mergeStateUpdate_(state, {
            stackIndex: newStackIndex
          }));
        }
        if (newStackIndex < this.startIndex_) {
          this.startIndex_ = newStackIndex;
        }
        if (waitingState) {
          waitingState.resolve();
        }
      }
    }, {
      key: "getState_",
      value: function getState_() {
        if (this.supportsState_) {
          return getState(this.win.history);
        }
        return this.unsupportedState_;
      }
    }, {
      key: "assertReady_",
      value: function assertReady_() {
        devAssert(!this.waitingState_, "The history must not be in the waiting state");
      }
    }, {
      key: "whenReady_",
      value: function whenReady_(callback) {
        if (!this.waitingState_) {
          return callback();
        }
        return this.waitingState_.promise.then(callback, callback);
      }
    }, {
      key: "wait_",
      value: function wait_() {
        this.assertReady_();
        var deferred = new Deferred();
        var reject = deferred.reject, resolve = deferred.resolve;
        var promise = this.timer_.timeoutPromise(500, deferred.promise);
        this.waitingState_ = {
          promise,
          resolve,
          reject
        };
        return promise;
      }
    }, {
      key: "back_",
      value: function back_(steps) {
        var _this15 = this;
        this.assertReady_();
        if (steps <= 0) {
          return Promise.resolve(this.stackIndex_);
        }
        this.unsupportedState_ = this.historyState_(this.stackIndex_ - steps);
        var promise = this.wait_();
        this.win.history.go(-steps);
        return promise.then(function() {
          return Promise.resolve(_this15.stackIndex_);
        });
      }
    }, {
      key: "historyPushState_",
      value: function historyPushState_(state, title, url) {
        this.assertReady_();
        if (!state) {
          state = {};
        }
        var stackIndex = this.stackIndex_ + 1;
        state[HISTORY_PROP_] = stackIndex;
        this.pushState_(state, title, url);
        if (stackIndex != this.win.history.length - 1) {
          stackIndex = this.win.history.length - 1;
          state[HISTORY_PROP_] = stackIndex;
          this.replaceState_(state);
        }
        var newState = this.mergeStateUpdate_(state, {
          stackIndex
        });
        this.updateHistoryState_(newState);
      }
    }, {
      key: "replaceStateForTarget",
      value: function replaceStateForTarget(target) {
        var _this16 = this;
        devAssert(target[0] == "#", "target should start with a #");
        this.whenReady_(function() {
          _this16.win.removeEventListener("popstate", _this16.popstateHandler_);
          try {
            _this16.win.location.replace(target);
          } finally {
            _this16.win.addEventListener("popstate", _this16.popstateHandler_);
          }
          _this16.historyReplaceState_();
          return resolvedPromise();
        });
      }
    }, {
      key: "historyReplaceState_",
      value: function historyReplaceState_(state, title, url) {
        this.assertReady_();
        if (!state) {
          state = {};
        }
        var stackIndex = Math.min(this.stackIndex_, this.win.history.length - 1);
        state[HISTORY_PROP_] = stackIndex;
        this.replaceState_(state, title, url);
        var newState = this.mergeStateUpdate_(state, {
          stackIndex
        });
        this.updateHistoryState_(newState);
      }
    }, {
      key: "updateHistoryState_",
      value: function updateHistoryState_(historyState) {
        this.assertReady_();
        historyState.stackIndex = Math.min(historyState.stackIndex, this.win.history.length - 1);
        if (this.stackIndex_ != historyState.stackIndex) {
          dev().fine(TAG_4, "stack index changed: " + this.stackIndex_ + " -> " + historyState.stackIndex);
          this.stackIndex_ = historyState.stackIndex;
          if (this.onStateUpdated_) {
            this.onStateUpdated_(historyState);
          }
        }
      }
    }, {
      key: "getFragment",
      value: function getFragment() {
        var hash = this.win.location.hash;
        hash = hash.substr(1);
        return Promise.resolve(hash);
      }
    }, {
      key: "updateFragment",
      value: function updateFragment(fragment) {
        return this.replace({
          fragment
        });
      }
    }, {
      key: "mergeStateUpdate_",
      value: function mergeStateUpdate_(state, update) {
        var mergedData = _extends2({}, state && state.data || {}, update.data || {});
        return _extends2({}, state || {}, update, {
          data: mergedData
        });
      }
    }]);
    return HistoryBindingNatural_2;
  }();
  var HistoryBindingVirtual_ = /* @__PURE__ */ function() {
    function HistoryBindingVirtual_2(win, viewer) {
      var _this17 = this;
      _classCallCheck23(this, HistoryBindingVirtual_2);
      this.win = win;
      this.viewer_ = viewer;
      this.stackIndex_ = 0;
      this.onStateUpdated_ = null;
      this.unlistenOnHistoryPopped_ = this.viewer_.onMessage("historyPopped", function(data) {
        return _this17.onHistoryPopped_(data);
      });
    }
    _createClass22(HistoryBindingVirtual_2, [{
      key: "replaceStateForTarget",
      value: function replaceStateForTarget(target) {
        devAssert(target[0] == "#", "target should start with a #");
        this.win.location.replace(target);
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.unlistenOnHistoryPopped_();
      }
    }, {
      key: "setOnStateUpdated",
      value: function setOnStateUpdated(callback) {
        this.onStateUpdated_ = callback;
      }
    }, {
      key: "toHistoryState_",
      value: function toHistoryState_(maybeHistoryState, fallbackState, debugId) {
        if (this.isHistoryState_(maybeHistoryState)) {
          return maybeHistoryState;
        } else {
          dev().warn(TAG_4, 'Ignored unexpected "%s" data:', debugId, maybeHistoryState);
        }
        return fallbackState;
      }
    }, {
      key: "isHistoryState_",
      value: function isHistoryState_(maybeHistoryState) {
        return !!maybeHistoryState && maybeHistoryState["stackIndex"] !== void 0;
      }
    }, {
      key: "push",
      value: function push(opt_stateUpdate) {
        var _this18 = this;
        var message = _extends2({
          "stackIndex": this.stackIndex_ + 1
        }, opt_stateUpdate || {});
        var push2 = "pushHistory";
        return this.viewer_.sendMessageAwaitResponse(push2, message).then(function(response) {
          var fallbackState = message;
          var newState = _this18.toHistoryState_(response, fallbackState, push2);
          _this18.updateHistoryState_(newState);
          return newState;
        });
      }
    }, {
      key: "pop",
      value: function pop(stackIndex) {
        var _this19 = this;
        if (stackIndex > this.stackIndex_) {
          return this.get();
        }
        var message = dict({
          "stackIndex": this.stackIndex_
        });
        var pop2 = "popHistory";
        return this.viewer_.sendMessageAwaitResponse(pop2, message).then(function(response) {
          var fallbackState = dict({
            "stackIndex": _this19.stackIndex_ - 1
          });
          var newState = _this19.toHistoryState_(response, fallbackState, pop2);
          _this19.updateHistoryState_(newState);
          return newState;
        });
      }
    }, {
      key: "replace",
      value: function replace(opt_stateUpdate) {
        var _this20 = this;
        if (opt_stateUpdate && opt_stateUpdate.url) {
          if (!this.viewer_.hasCapability("fullReplaceHistory")) {
            var curState = dict({
              "stackIndex": this.stackIndex_
            });
            return Promise.resolve(curState);
          }
          var url = opt_stateUpdate.url.replace(/#.*/, "");
          opt_stateUpdate.url = url;
        }
        var message = _extends2({
          "stackIndex": this.stackIndex_
        }, opt_stateUpdate || {});
        var replace2 = "replaceHistory";
        return this.viewer_.sendMessageAwaitResponse(replace2, message, true).then(function(response) {
          var fallbackState = message;
          var newState = _this20.toHistoryState_(response, fallbackState, replace2);
          _this20.updateHistoryState_(newState);
          return newState;
        });
      }
    }, {
      key: "get",
      value: function get() {
        return Promise.resolve({
          data: void 0,
          fragment: "",
          stackIndex: this.stackIndex_,
          title: ""
        });
      }
    }, {
      key: "onHistoryPopped_",
      value: function onHistoryPopped_(data) {
        if (data["newStackIndex"] !== void 0) {
          data["stackIndex"] = data["newStackIndex"];
        }
        if (this.isHistoryState_(data)) {
          this.updateHistoryState_(data);
        } else {
          dev().warn(TAG_4, 'Ignored unexpected "historyPopped" data:', data);
        }
      }
    }, {
      key: "updateHistoryState_",
      value: function updateHistoryState_(state) {
        var stackIndex = state.stackIndex;
        if (this.stackIndex_ != stackIndex) {
          dev().fine(TAG_4, "stackIndex: " + this.stackIndex_ + " -> " + stackIndex);
          this.stackIndex_ = stackIndex;
          if (this.onStateUpdated_) {
            this.onStateUpdated_(state);
          }
        }
      }
    }, {
      key: "getFragment",
      value: function getFragment() {
        if (!this.viewer_.hasCapability("fragment")) {
          return Promise.resolve("");
        }
        return this.viewer_.sendMessageAwaitResponse("getFragment", void 0, true).then(function(data) {
          if (!data) {
            return "";
          }
          var hash = dev().assertString(data);
          if (hash[0] == "#") {
            hash = hash.substr(1);
          }
          return hash;
        });
      }
    }, {
      key: "updateFragment",
      value: function updateFragment(fragment) {
        if (!this.viewer_.hasCapability("fragment")) {
          return resolvedPromise();
        }
        return this.viewer_.sendMessageAwaitResponse("replaceHistory", dict({
          "fragment": fragment
        }), true);
      }
    }]);
    return HistoryBindingVirtual_2;
  }();
  function createHistory(ampdoc) {
    var viewer = Services.viewerForDoc(ampdoc);
    var binding;
    if (viewer.isOvertakeHistory() || getMode(ampdoc.win).test || ampdoc.win.__AMP_TEST_IFRAME) {
      binding = new HistoryBindingVirtual_(ampdoc.win, viewer);
    } else {
      registerServiceBuilder(ampdoc.win, "global-history-binding", HistoryBindingNatural_);
      binding = getService(ampdoc.win, "global-history-binding");
    }
    return new History(ampdoc, binding);
  }
  function installHistoryServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "history", createHistory);
  }

  // src/service/resource.js
  function _classCallCheck24(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties23(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass23(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties23(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties23(Constructor, staticProps);
    return Constructor;
  }
  var TAG5 = "Resource";
  var RESOURCE_PROP_ = "__AMP__RESOURCE";
  var OWNER_PROP_ = "__AMP__OWNER";
  var ResourceState = {
    NOT_BUILT: 0,
    NOT_LAID_OUT: 1,
    READY_FOR_LAYOUT: 2,
    LAYOUT_SCHEDULED: 3,
    LAYOUT_COMPLETE: 4,
    LAYOUT_FAILED: 5
  };
  var Resource = /* @__PURE__ */ function() {
    function Resource2(id, element, resources) {
      _classCallCheck24(this, Resource2);
      element[RESOURCE_PROP_] = this;
      this.id_ = id;
      this.element = element;
      this.debugid = element.tagName.toLowerCase() + "#" + id;
      this.hostWin = toWin(element.ownerDocument.defaultView);
      this.resources_ = resources;
      this.isPlaceholder_ = element.hasAttribute("placeholder");
      this.isBuilding_ = false;
      this.owner_ = void 0;
      this.state_ = element.isBuilt() ? ResourceState.NOT_LAID_OUT : ResourceState.NOT_BUILT;
      if (this.state_ == ResourceState.NOT_BUILT && element.isBuilding()) {
        this.build();
      }
      this.priorityOverride_ = -1;
      this.layoutCount_ = 0;
      this.abortController_ = null;
      this.lastLayoutError_ = null;
      this.isFixed_ = false;
      this.layoutBox_ = layoutRectLtwh(-1e4, -1e4, 0, 0);
      this.initialLayoutBox_ = null;
      this.isMeasureRequested_ = false;
      this.withViewportDeferreds_ = null;
      this.layoutPromise_ = null;
      this.pendingChangeSize_ = void 0;
      var deferred = new Deferred();
      this.loadPromise_ = deferred.promise;
      this.loadPromiseResolve_ = deferred.resolve;
      this.isInViewport_ = false;
    }
    _createClass23(Resource2, [{
      key: "getId",
      value: function getId() {
        return this.id_;
      }
    }, {
      key: "updateOwner",
      value: function updateOwner(owner) {
        this.owner_ = owner;
      }
    }, {
      key: "getOwner",
      value: function getOwner() {
        if (this.owner_ === void 0) {
          for (var n = this.element; n; n = n.parentElement) {
            if (n[OWNER_PROP_]) {
              this.owner_ = n[OWNER_PROP_];
              break;
            }
          }
          if (this.owner_ === void 0) {
            this.owner_ = null;
          }
        }
        return this.owner_;
      }
    }, {
      key: "hasOwner",
      value: function hasOwner() {
        return !!this.getOwner();
      }
    }, {
      key: "getLayoutPriority",
      value: function getLayoutPriority() {
        if (this.priorityOverride_ != -1) {
          return this.priorityOverride_;
        }
        return this.element.getLayoutPriority();
      }
    }, {
      key: "updateLayoutPriority",
      value: function updateLayoutPriority(newPriority) {
        this.priorityOverride_ = newPriority;
      }
    }, {
      key: "getState",
      value: function getState2() {
        return this.state_;
      }
    }, {
      key: "isBuilt",
      value: function isBuilt() {
        return this.element.isBuilt();
      }
    }, {
      key: "isBuilding",
      value: function isBuilding() {
        return this.isBuilding_;
      }
    }, {
      key: "whenBuilt",
      value: function whenBuilt() {
        return this.element.signals().whenSignal("res-built");
      }
    }, {
      key: "build",
      value: function build() {
        var _this = this;
        if (this.isBuilding_ || !this.element.isUpgraded()) {
          return null;
        }
        this.isBuilding_ = true;
        return this.element.buildInternal().then(function() {
          _this.isBuilding_ = false;
          _this.state_ = ResourceState.NOT_LAID_OUT;
          _this.element.signals().signal("res-built");
        }, function(reason) {
          _this.maybeReportErrorOnBuildFailure(reason);
          _this.isBuilding_ = false;
          _this.element.signals().rejectSignal("res-built", reason);
          throw reason;
        });
      }
    }, {
      key: "maybeReportErrorOnBuildFailure",
      value: function maybeReportErrorOnBuildFailure(reason) {
        if (!isBlockedByConsent(reason)) {
          dev().error(TAG5, "failed to build:", this.debugid, reason);
        }
      }
    }, {
      key: "changeSize",
      value: function changeSize(newHeight, newWidth, opt_newMargins) {
        this.element.applySize(newHeight, newWidth, opt_newMargins);
        this.requestMeasure();
      }
    }, {
      key: "overflowCallback",
      value: function overflowCallback(overflown, requestedHeight, requestedWidth, requestedMargins) {
        if (overflown) {
          this.pendingChangeSize_ = {
            height: requestedHeight,
            width: requestedWidth,
            margins: requestedMargins
          };
        }
        this.element.overflowCallback(overflown, requestedHeight, requestedWidth, requestedMargins);
      }
    }, {
      key: "resetPendingChangeSize",
      value: function resetPendingChangeSize() {
        this.pendingChangeSize_ = void 0;
      }
    }, {
      key: "getPendingChangeSize",
      value: function getPendingChangeSize() {
        return this.pendingChangeSize_;
      }
    }, {
      key: "getUpgradeDelayMs",
      value: function getUpgradeDelayMs() {
        return this.element.getUpgradeDelayMs();
      }
    }, {
      key: "measure",
      value: function measure() {
        if (this.isPlaceholder_ && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-") && !(RESOURCE_PROP_ in this.element.parentElement)) {
          return;
        }
        if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView) {
          this.state_ = ResourceState.NOT_LAID_OUT;
          return;
        }
        this.isMeasureRequested_ = false;
        var oldBox = this.layoutBox_;
        this.computeMeasurements_();
        var newBox = this.layoutBox_;
        var sizeChanges = !layoutRectSizeEquals(oldBox, newBox);
        if (this.state_ == ResourceState.NOT_LAID_OUT || oldBox.top != newBox.top || sizeChanges) {
          if (this.element.isUpgraded()) {
            if (this.state_ == ResourceState.NOT_LAID_OUT) {
              this.state_ = ResourceState.READY_FOR_LAYOUT;
            } else if ((this.state_ == ResourceState.LAYOUT_COMPLETE || this.state_ == ResourceState.LAYOUT_FAILED) && this.element.isRelayoutNeeded()) {
              this.state_ = ResourceState.READY_FOR_LAYOUT;
            }
          }
        }
        if (!this.hasBeenMeasured()) {
          this.initialLayoutBox_ = newBox;
        }
        this.element.updateLayoutBox(newBox, sizeChanges);
      }
    }, {
      key: "ensureMeasured",
      value: function ensureMeasured() {
        var _this2 = this;
        if (this.hasBeenMeasured()) {
          return resolvedPromise();
        }
        return Services.vsyncFor(this.hostWin).measure(function() {
          return _this2.measure();
        });
      }
    }, {
      key: "computeMeasurements_",
      value: function computeMeasurements_() {
        var viewport = Services.viewportForDoc(this.element);
        this.layoutBox_ = viewport.getLayoutRect(this.element);
        var isFixed = false;
        if (viewport.supportsPositionFixed() && this.isDisplayed()) {
          var _this$resources_$getA = this.resources_.getAmpdoc(), win = _this$resources_$getA.win;
          var body = win.document.body;
          for (var n = this.element; n && n != body; n = n.offsetParent) {
            if (n.isAlwaysFixed && n.isAlwaysFixed()) {
              isFixed = true;
              break;
            }
            if (viewport.isDeclaredFixed(n) && computedStyle(win, n).position == "fixed") {
              isFixed = true;
              break;
            }
          }
        }
        this.isFixed_ = isFixed;
        if (isFixed) {
          this.layoutBox_ = moveLayoutRect(this.layoutBox_, -viewport.getScrollLeft(), -viewport.getScrollTop());
        }
      }
    }, {
      key: "completeCollapse",
      value: function completeCollapse() {
        toggle(this.element, false);
        this.layoutBox_ = layoutRectLtwh(this.layoutBox_.left, this.layoutBox_.top, 0, 0);
        this.isFixed_ = false;
        this.element.updateLayoutBox(this.getLayoutBox());
        var owner = this.getOwner();
        if (owner) {
          owner.collapsedCallback(this.element);
        }
      }
    }, {
      key: "completeExpand",
      value: function completeExpand() {
        toggle(this.element, true);
        this.requestMeasure();
      }
    }, {
      key: "isMeasureRequested",
      value: function isMeasureRequested() {
        return this.isMeasureRequested_;
      }
    }, {
      key: "hasBeenMeasured",
      value: function hasBeenMeasured() {
        return !!this.initialLayoutBox_;
      }
    }, {
      key: "requestMeasure",
      value: function requestMeasure() {
        this.isMeasureRequested_ = true;
      }
    }, {
      key: "getLayoutSize",
      value: function getLayoutSize() {
        return layoutSizeFromRect(this.layoutBox_);
      }
    }, {
      key: "getLayoutBox",
      value: function getLayoutBox() {
        if (!this.isFixed_) {
          return this.layoutBox_;
        }
        var viewport = Services.viewportForDoc(this.element);
        return moveLayoutRect(this.layoutBox_, viewport.getScrollLeft(), viewport.getScrollTop());
      }
    }, {
      key: "getInitialLayoutBox",
      value: function getInitialLayoutBox() {
        return this.initialLayoutBox_ || this.layoutBox_;
      }
    }, {
      key: "isDisplayed",
      value: function isDisplayed() {
        var isConnected = this.element.ownerDocument && this.element.ownerDocument.defaultView;
        if (!isConnected) {
          return false;
        }
        var isFluid = this.element.getLayout() == Layout.FLUID;
        var box = this.getLayoutBox();
        var hasNonZeroSize = box.height > 0 && box.width > 0;
        return isFluid || hasNonZeroSize;
      }
    }, {
      key: "isFixed",
      value: function isFixed() {
        return this.isFixed_;
      }
    }, {
      key: "overlaps",
      value: function overlaps(rect) {
        return rectsOverlap(this.getLayoutBox(), rect);
      }
    }, {
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return this.element.prerenderAllowed();
      }
    }, {
      key: "isBuildRenderBlocking",
      value: function isBuildRenderBlocking() {
        return this.element.isBuildRenderBlocking();
      }
    }, {
      key: "whenWithinViewport",
      value: function whenWithinViewport2(viewport) {
        devAssert(viewport !== false);
        if (!this.isLayoutPending() || viewport === true) {
          return resolvedPromise();
        }
        var viewportNum = dev().assertNumber(viewport);
        var key = String(viewportNum);
        if (this.withViewportDeferreds_ && this.withViewportDeferreds_[key]) {
          return this.withViewportDeferreds_[key].promise;
        }
        if (this.isWithinViewportRatio(viewportNum)) {
          return resolvedPromise();
        }
        this.withViewportDeferreds_ = this.withViewportDeferreds_ || {};
        this.withViewportDeferreds_[key] = new Deferred();
        return this.withViewportDeferreds_[key].promise;
      }
    }, {
      key: "resolveDeferredsWhenWithinViewports_",
      value: function resolveDeferredsWhenWithinViewports_() {
        if (!this.withViewportDeferreds_) {
          return;
        }
        var viewportRatio = this.getDistanceViewportRatio();
        for (var key in this.withViewportDeferreds_) {
          if (this.isWithinViewportRatio(parseFloat(key), viewportRatio)) {
            this.withViewportDeferreds_[key].resolve();
            delete this.withViewportDeferreds_[key];
          }
        }
      }
    }, {
      key: "getDistanceViewportRatio",
      value: function getDistanceViewportRatio() {
        var viewport = Services.viewportForDoc(this.element);
        var viewportBox = viewport.getRect();
        var layoutBox = this.getLayoutBox();
        var scrollDirection = this.resources_.getScrollDirection();
        var scrollPenalty = 1;
        var distance = 0;
        if (viewportBox.right < layoutBox.left || viewportBox.left > layoutBox.right) {
          return {
            distance: false
          };
        }
        if (viewportBox.bottom < layoutBox.top) {
          distance = layoutBox.top - viewportBox.bottom;
          if (scrollDirection == -1) {
            scrollPenalty = 2;
          }
        } else if (viewportBox.top > layoutBox.bottom) {
          distance = viewportBox.top - layoutBox.bottom;
          if (scrollDirection == 1) {
            scrollPenalty = 2;
          }
        } else {
          return {
            distance: true
          };
        }
        return {
          distance,
          scrollPenalty,
          viewportHeight: viewportBox.height
        };
      }
    }, {
      key: "isWithinViewportRatio",
      value: function isWithinViewportRatio(multiplier, opt_viewportRatio) {
        if (typeof multiplier === "boolean") {
          return multiplier;
        }
        var _ref = opt_viewportRatio || this.getDistanceViewportRatio(), distance = _ref.distance, scrollPenalty = _ref.scrollPenalty, viewportHeight = _ref.viewportHeight;
        if (typeof distance == "boolean") {
          return distance;
        }
        return distance < viewportHeight * multiplier / scrollPenalty;
      }
    }, {
      key: "renderOutsideViewport",
      value: function renderOutsideViewport() {
        this.resolveDeferredsWhenWithinViewports_();
        return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport());
      }
    }, {
      key: "idleRenderOutsideViewport",
      value: function idleRenderOutsideViewport() {
        return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport());
      }
    }, {
      key: "layoutScheduled",
      value: function layoutScheduled(scheduleTime) {
        this.state_ = ResourceState.LAYOUT_SCHEDULED;
        this.element.layoutScheduleTime = scheduleTime;
      }
    }, {
      key: "layoutCanceled",
      value: function layoutCanceled() {
        this.state_ = this.hasBeenMeasured() ? ResourceState.READY_FOR_LAYOUT : ResourceState.NOT_LAID_OUT;
      }
    }, {
      key: "startLayout",
      value: function startLayout() {
        var _this3 = this;
        if (this.layoutPromise_) {
          return this.layoutPromise_;
        }
        if (this.state_ == ResourceState.LAYOUT_COMPLETE) {
          return resolvedPromise();
        }
        if (this.state_ == ResourceState.LAYOUT_FAILED) {
          return Promise.reject(this.lastLayoutError_);
        }
        devAssert(this.state_ != ResourceState.NOT_BUILT, "Not ready to start layout: %s (%s)", this.debugid, this.state_);
        devAssert(this.isDisplayed(), "Not displayed for layout: %s", this.debugid);
        if (this.state_ != ResourceState.LAYOUT_SCHEDULED) {
          var err = dev().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.state_);
          reportError(err, this.element);
          return Promise.reject(err);
        }
        if (this.layoutCount_ > 0 && !this.element.isRelayoutNeeded()) {
          dev().fine(TAG5, "layout canceled since it wasn't requested:", this.debugid, this.state_);
          this.state_ = ResourceState.LAYOUT_COMPLETE;
          return resolvedPromise();
        }
        dev().fine(TAG5, "start layout:", this.debugid, "count:", this.layoutCount_);
        this.layoutCount_++;
        this.state_ = ResourceState.LAYOUT_SCHEDULED;
        this.abortController_ = new AbortController();
        var signal = this.abortController_.signal;
        var promise = new Promise(function(resolve, reject) {
          Services.vsyncFor(_this3.hostWin).mutate(function() {
            var callbackResult;
            try {
              callbackResult = _this3.element.layoutCallback(signal);
            } catch (e) {
              reject(e);
            }
            Promise.resolve(callbackResult).then(resolve, reject);
          });
          signal.onabort = function() {
            return reject(cancellation());
          };
        }).then(function() {
          return _this3.layoutComplete_(true, signal);
        }, function(reason) {
          return _this3.layoutComplete_(false, signal, reason);
        });
        return this.layoutPromise_ = promise;
      }
    }, {
      key: "layoutComplete_",
      value: function layoutComplete_(success, signal, opt_reason) {
        this.abortController_ = null;
        if (signal.aborted) {
          var err = dev().createError("layoutComplete race");
          err.associatedElement = this.element;
          dev().expectedError(TAG5, err);
          throw cancellation();
        }
        if (this.loadPromiseResolve_) {
          this.loadPromiseResolve_();
          this.loadPromiseResolve_ = null;
        }
        this.layoutPromise_ = null;
        this.state_ = success ? ResourceState.LAYOUT_COMPLETE : ResourceState.LAYOUT_FAILED;
        this.lastLayoutError_ = opt_reason;
        if (success) {
          dev().fine(TAG5, "layout complete:", this.debugid);
        } else {
          dev().fine(TAG5, "loading failed:", this.debugid, opt_reason);
          return Promise.reject(opt_reason);
        }
      }
    }, {
      key: "isLayoutPending",
      value: function isLayoutPending() {
        return this.state_ != ResourceState.LAYOUT_COMPLETE && this.state_ != ResourceState.LAYOUT_FAILED;
      }
    }, {
      key: "loadedOnce",
      value: function loadedOnce() {
        if (this.element.R1()) {
          return this.element.whenLoaded();
        }
        return this.loadPromise_;
      }
    }, {
      key: "isInViewport",
      value: function isInViewport() {
        if (this.isInViewport_) {
          this.resolveDeferredsWhenWithinViewports_();
        }
        return this.isInViewport_;
      }
    }, {
      key: "setInViewport",
      value: function setInViewport(inViewport) {
        this.isInViewport_ = inViewport;
      }
    }, {
      key: "unlayout",
      value: function unlayout() {
        if (this.state_ == ResourceState.NOT_BUILT || this.state_ == ResourceState.NOT_LAID_OUT || this.state_ == ResourceState.READY_FOR_LAYOUT) {
          return;
        }
        if (this.abortController_) {
          this.abortController_.abort();
          this.abortController_ = null;
        }
        this.setInViewport(false);
        if (this.element.unlayoutCallback()) {
          this.element.togglePlaceholder(true);
          this.state_ = ResourceState.NOT_LAID_OUT;
          this.layoutCount_ = 0;
          this.layoutPromise_ = null;
        }
      }
    }, {
      key: "getTaskId",
      value: function getTaskId(localId) {
        return this.debugid + "#" + localId;
      }
    }, {
      key: "pause",
      value: function pause() {
        this.element.pause();
      }
    }, {
      key: "pauseOnRemove",
      value: function pauseOnRemove() {
        this.element.pause();
      }
    }, {
      key: "resume",
      value: function resume() {
        this.element.resume();
      }
    }, {
      key: "unload",
      value: function unload() {
        this.element.unmount();
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        delete this.element[RESOURCE_PROP_];
        this.element.disconnect(true);
      }
    }], [{
      key: "forElement",
      value: function forElement(element) {
        return devAssert(Resource2.forElementOptional(element), "Missing resource prop on %s", element);
      }
    }, {
      key: "forElementOptional",
      value: function forElementOptional(element) {
        return element[RESOURCE_PROP_];
      }
    }, {
      key: "setOwner",
      value: function setOwner(element, owner) {
        devAssert(owner.contains(element), "Owner must contain the element");
        if (Resource2.forElementOptional(element)) {
          Resource2.forElementOptional(element).updateOwner(owner);
        }
        element[OWNER_PROP_] = owner;
        var cachedElements = element.getElementsByClassName("i-amphtml-element");
        for (var i = 0; i < cachedElements.length; i++) {
          var ele = cachedElements[i];
          if (Resource2.forElementOptional(ele)) {
            Resource2.forElementOptional(ele).updateOwner(void 0);
          }
        }
      }
    }]);
    return Resource2;
  }();

  // src/utils/intersection-observer-3p-host.js
  var INIT_TIME = Date.now();

  // src/service/resources-interface.js
  var READY_SCAN_SIGNAL = "ready-scan";

  // src/consent.js
  function getConsentPolicyState(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.whenPolicyResolved(policyId);
    });
  }
  function getConsentPolicyInfo(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getConsentStringInfo(policyId);
    });
  }
  function getConsentMetadata(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getConsentMetadataInfo(policyId);
    });
  }

  // src/chunk.js
  function _inherits2(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass2, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  function _classCallCheck25(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties24(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass24(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties24(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties24(Constructor, staticProps);
    return Constructor;
  }
  var TAG6 = "CHUNK";
  var deactivated = /nochunking=1/.test(self.location.hash);
  var allowLongTasks = false;
  var resolved2 = resolvedPromise();
  function chunkServiceForDoc(elementOrAmpDoc) {
    registerServiceBuilderForDoc(elementOrAmpDoc, "chunk", Chunks);
    return getServiceForDoc(elementOrAmpDoc, "chunk");
  }
  function startupChunk(doc, fn, opt_makesBodyVisible) {
    if (deactivated) {
      resolved2.then(fn);
      return;
    }
    var service = chunkServiceForDoc(doc.documentElement || doc);
    service.runForStartup(fn);
    if (opt_makesBodyVisible) {
      service.runForStartup(function() {
        service.bodyIsVisible_ = true;
      });
    }
  }
  var TaskState = {
    NOT_RUN: "not_run",
    RUN: "run"
  };
  var Task = /* @__PURE__ */ function() {
    function Task2(fn) {
      _classCallCheck25(this, Task2);
      this.state = TaskState.NOT_RUN;
      this.fn_ = fn;
    }
    _createClass24(Task2, [{
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
    _inherits2(StartupTask2, _Task);
    var _super = _createSuper2(StartupTask2);
    function StartupTask2(fn, win, chunks) {
      var _this;
      _classCallCheck25(this, StartupTask2);
      _this = _super.call(this, fn);
      _this.chunks_ = chunks;
      return _this;
    }
    _createClass24(StartupTask2, [{
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
      _classCallCheck25(this, Chunks2);
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
    _createClass24(Chunks2, [{
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
            dev().fine(TAG6, t.getName_(), "Chunk duration", Date.now() - before, _this3.durationOfLastExecution_);
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
          dev().fine(TAG6, "Timed out", timeout, info.didTimeout);
          fn(info);
        } else {
          dev().fine(TAG6, "Rescheduling with", remainingTimeout, info.timeRemaining());
          win.requestIdleCallback(rIC, {
            timeout: remainingTimeout
          });
        }
      } else {
        dev().fine(TAG6, "Running idle callback with ", minimumTimeRemaining);
        fn(info);
      }
    }
    win.requestIdleCallback(rIC, {
      timeout
    });
  }

  // src/service/custom-element-registry.js
  var docInitializedMap = new WeakMap();

  // src/pass.js
  function _classCallCheck26(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties25(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass25(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties25(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties25(Constructor, staticProps);
    return Constructor;
  }
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      _classCallCheck26(this, Pass2);
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
    _createClass25(Pass2, [{
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

  // src/inabox/inabox-resources.js
  function _classCallCheck27(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties26(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass26(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties26(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties26(Constructor, staticProps);
    return Constructor;
  }
  var TAG7 = "inabox-resources";
  var FOUR_FRAME_DELAY = 70;
  var InaboxResources = /* @__PURE__ */ function() {
    function InaboxResources2(ampdoc) {
      var _this = this;
      _classCallCheck27(this, InaboxResources2);
      this.ampdoc_ = ampdoc;
      this.win = ampdoc.win;
      this.resources_ = [];
      this.resourceIdCounter_ = 0;
      this.pass_ = new Pass(this.win, this.doPass_.bind(this), FOUR_FRAME_DELAY);
      this.passObservable_ = new Observable();
      this.firstPassDone_ = new Deferred();
      this.inViewportObserver_ = null;
      var input = Services.inputFor(this.win);
      input.setupInputModeClasses(ampdoc);
      if (getMode(this.win).runtime != "inabox") {
        ampdoc.onVisibilityChanged(function() {
          switch (ampdoc.getVisibilityState()) {
            case VisibilityState.PAUSED:
              _this.resources_.forEach(function(r) {
                return r.pause();
              });
              break;
            case VisibilityState.VISIBLE:
              _this.resources_.forEach(function(r) {
                return r.resume();
              });
              _this.schedulePass();
              break;
          }
        });
      }
      this.pendingBuildResources_ = [];
      this.documentReady_ = false;
      this.ampdoc_.whenReady().then(function() {
        _this.documentReady_ = true;
        _this.buildReadyResources_();
        _this.schedulePass(1);
      });
    }
    _createClass26(InaboxResources2, [{
      key: "dispose",
      value: function dispose() {
        this.resources_.forEach(function(r) {
          return r.unload();
        });
        this.resources_.length = 0;
        if (this.inViewportObserver_) {
          this.inViewportObserver_.disconnect();
          this.inViewportObserver_ = null;
        }
      }
    }, {
      key: "get",
      value: function get() {
        return this.resources_.slice(0);
      }
    }, {
      key: "getAmpdoc",
      value: function getAmpdoc2() {
        return this.ampdoc_;
      }
    }, {
      key: "getResourceForElement",
      value: function getResourceForElement(element) {
        return Resource.forElement(element);
      }
    }, {
      key: "getResourceForElementOptional",
      value: function getResourceForElementOptional(element) {
        return Resource.forElementOptional(element);
      }
    }, {
      key: "getScrollDirection",
      value: function getScrollDirection() {
        return 1;
      }
    }, {
      key: "add",
      value: function add(element) {
        var resource = new Resource(++this.resourceIdCounter_, element, this);
        this.resources_.push(resource);
        dev().fine(TAG7, "resource added:", resource.debugid);
      }
    }, {
      key: "upgraded",
      value: function upgraded(element) {
        var resource = Resource.forElement(element);
        this.pendingBuildResources_.push(resource);
        this.buildReadyResources_();
      }
    }, {
      key: "remove",
      value: function remove2(element) {
        var resource = Resource.forElementOptional(element);
        if (!resource) {
          return;
        }
        if (this.inViewportObserver_) {
          this.inViewportObserver_.unobserve(element);
        }
        var index = this.resources_.indexOf(resource);
        if (index !== -1) {
          this.resources_.splice(index, 1);
        }
        dev().fine(TAG7, "element removed:", resource.debugid);
      }
    }, {
      key: "scheduleLayoutOrPreload",
      value: function scheduleLayoutOrPreload(unusedResource) {
        this.pass_.schedule();
      }
    }, {
      key: "schedulePass",
      value: function schedulePass(opt_delay) {
        return this.pass_.schedule(opt_delay);
      }
    }, {
      key: "updateOrEnqueueMutateTask",
      value: function updateOrEnqueueMutateTask(unusedResource, unusedNewRequest) {
      }
    }, {
      key: "schedulePassVsync",
      value: function schedulePassVsync() {
      }
    }, {
      key: "onNextPass",
      value: function onNextPass(callback) {
        this.passObservable_.add(callback);
      }
    }, {
      key: "ampInitComplete",
      value: function ampInitComplete() {
      }
    }, {
      key: "updateLayoutPriority",
      value: function updateLayoutPriority(unusedElement, unusedNewLayoutPriority) {
      }
    }, {
      key: "setRelayoutTop",
      value: function setRelayoutTop(unusedRelayoutTop) {
      }
    }, {
      key: "maybeHeightChanged",
      value: function maybeHeightChanged() {
      }
    }, {
      key: "whenFirstPass",
      value: function whenFirstPass() {
        return this.firstPassDone_.promise;
      }
    }, {
      key: "doPass_",
      value: function doPass_() {
        var now = Date.now();
        dev().fine(TAG7, "doPass");
        this.resources_.forEach(function(resource) {
          if (!resource.isLayoutPending() || resource.element.R1()) {
            return;
          }
          resource.measure();
        });
        this.resources_.forEach(function(resource) {
          if (!resource.element.R1() && resource.getState() === ResourceState.READY_FOR_LAYOUT && resource.isDisplayed()) {
            resource.layoutScheduled(now);
            resource.startLayout();
          }
        });
        this.ampdoc_.signals().signal(READY_SCAN_SIGNAL);
        this.passObservable_.fire();
        this.firstPassDone_.resolve();
      }
    }, {
      key: "buildReadyResources_",
      value: function buildReadyResources_() {
        var _this2 = this;
        for (var i = this.pendingBuildResources_.length - 1; i >= 0; i--) {
          var resource = this.pendingBuildResources_[i];
          if (this.documentReady_ || hasNextNodeInDocumentOrder(resource.element, this.ampdoc_.getRootNode())) {
            this.pendingBuildResources_.splice(i, 1);
            resource.build().then(function() {
              return _this2.schedulePass();
            });
            dev().fine(TAG7, "resource upgraded:", resource.debugid);
          }
        }
      }
    }]);
    return InaboxResources2;
  }();
  function installInaboxResourcesServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "resources", InaboxResources);
  }

  // src/service/loader-element.js
  function getLoaderServicePromise(ampDoc, element) {
    return Services.extensionsFor(ampDoc.win).installExtensionForDoc(ampDoc, "amp-loader").then(function() {
      return Services.loaderServiceForDoc(element);
    });
  }
  function createLoaderElement(ampDoc, element, elementWidth, elementHeight, startTime) {
    if (startTime === void 0) {
      startTime = ampDoc.win.Date.now();
    }
    var loaderRoot = element.ownerDocument.createElement("div");
    getLoaderServicePromise(ampDoc, element).then(function(loaderService) {
      var endTime = ampDoc.win.Date.now();
      var initDelay = endTime - startTime;
      loaderService.initializeLoader(element, loaderRoot, initDelay, elementWidth, elementHeight);
    });
    return loaderRoot;
  }

  // src/viewport-observer.js
  function createViewportObserver(ioCallback2, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, needsRootBounds = _opts.needsRootBounds, threshold = _opts.threshold;
    var root = isIframed(win) && needsRootBounds ? win.document : void 0;
    return new win.IntersectionObserver(ioCallback2, {
      threshold,
      root
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();
  function observeWithSharedInOb(element, viewportCallback) {
    if (getMode().localDev) {
      devAssert(!viewportCallbacks.has(element) || viewportCallbacks.get(element) === viewportCallback);
    }
    var win = toWin(element.ownerDocument.defaultView);
    var viewportObserver = viewportObservers.get(win);
    if (!viewportObserver) {
      viewportObservers.set(win, viewportObserver = createViewportObserver(ioCallback, win));
    }
    viewportCallbacks.set(element, viewportCallback);
    viewportObserver.observe(element);
  }
  function unobserveWithSharedInOb(element) {
    var win = toWin(element.ownerDocument.defaultView);
    var viewportObserver = viewportObservers.get(win);
    if (viewportObserver) {
      viewportObserver.unobserve(element);
    }
    viewportCallbacks.delete(element);
  }
  function ioCallback(entries) {
    for (var i = 0; i < entries.length; i++) {
      var _entries$i = entries[i], isIntersecting = _entries$i.isIntersecting, target = _entries$i.target;
      var viewportCallback = viewportCallbacks.get(target);
      if (viewportCallback) {
        viewportCallback(isIntersecting);
      }
    }
  }

  // src/service/loading-indicator.js
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _classCallCheck28(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties27(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass27(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties27(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties27(Constructor, staticProps);
    return Constructor;
  }
  var MIN_SIZE = 20;
  function installLoadingIndicatorForDoc(nodeOrDoc) {
    registerServiceBuilderForDoc(nodeOrDoc, "loadingIndicator", LoadingIndicatorImpl);
  }
  var LoadingIndicatorImpl = /* @__PURE__ */ function() {
    function LoadingIndicatorImpl2(ampdoc) {
      _classCallCheck28(this, LoadingIndicatorImpl2);
      this.ampdoc_ = ampdoc;
      var win = ampdoc.win;
      var inViewport = this.inViewport_.bind(this);
      var ioCallback2 = function ioCallback3(records) {
        return records.forEach(inViewport);
      };
      this.io_ = createViewportObserver(ioCallback2, win);
      this.states_ = new WeakMap();
    }
    _createClass27(LoadingIndicatorImpl2, [{
      key: "dispose",
      value: function dispose() {
        this.io_.disconnect();
      }
    }, {
      key: "track",
      value: function track(element) {
        this.io_.observe(element);
      }
    }, {
      key: "untrack",
      value: function untrack(element) {
        this.io_.unobserve(element);
        this.cleanup_(element);
      }
    }, {
      key: "inViewport_",
      value: function inViewport_(record) {
        var boundingClientRect = record.boundingClientRect, isIntersecting = record.isIntersecting, target = record.target;
        var height = boundingClientRect.height, width = boundingClientRect.width;
        var element = target;
        var show = isIntersecting && width > MIN_SIZE && height > MIN_SIZE;
        var state = this.states_.get(element);
        var isCurrentlyShown = state && state.shown || false;
        if (show === isCurrentlyShown) {
          return;
        }
        if (show && !state) {
          state = this.createLoaderState_(element, width, height);
          this.states_.set(element, state);
        }
        if (state) {
          state.shown = show;
          state.container.classList.toggle("amp-hidden", !show);
          state.loader.classList.toggle("amp-active", show);
        }
      }
    }, {
      key: "createLoaderState_",
      value: function createLoaderState_(element, width, height) {
        var startTime = Date.now();
        var loader = createLoaderElement(this.ampdoc_, element, width, height, startTime);
        var container = htmlFor(this.ampdoc_.win.document)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n        <div slot="i-amphtml-svc" class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content\n            amp-hidden"></div>\n      '])));
        container.appendChild(loader);
        element.appendChild(container);
        return {
          shown: false,
          loader,
          container
        };
      }
    }, {
      key: "cleanup_",
      value: function cleanup_(element) {
        var state = this.states_.get(element);
        if (!state) {
          return;
        }
        this.states_.delete(element);
        removeElement(state.container);
      }
    }]);
    return LoadingIndicatorImpl2;
  }();

  // src/focus-history.js
  function _classCallCheck29(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties28(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass28(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties28(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties28(Constructor, staticProps);
    return Constructor;
  }
  var FocusHistory = /* @__PURE__ */ function() {
    function FocusHistory2(win, purgeTimeout) {
      var _this = this;
      _classCallCheck29(this, FocusHistory2);
      this.win = win;
      this.purgeTimeout_ = purgeTimeout;
      this.history_ = [];
      this.observeFocus_ = new Observable();
      this.captureFocus_ = function(e) {
        if (isElement(e.target)) {
          _this.pushFocus_(dev().assertElement(e.target));
        }
      };
      this.captureBlur_ = function(unusedE) {
        Services.timerFor(win).delay(function() {
          if (_this.win.document.activeElement) {
            _this.pushFocus_(_this.win.document.activeElement);
          }
        }, 500);
      };
      this.win.document.addEventListener("focus", this.captureFocus_, true);
      this.win.addEventListener("blur", this.captureBlur_);
    }
    _createClass28(FocusHistory2, [{
      key: "cleanup_",
      value: function cleanup_() {
        this.win.document.removeEventListener("focus", this.captureFocus_, true);
        this.win.removeEventListener("blur", this.captureBlur_);
      }
    }, {
      key: "onFocus",
      value: function onFocus(handler) {
        return this.observeFocus_.add(handler);
      }
    }, {
      key: "pushFocus_",
      value: function pushFocus_(element) {
        var now = Date.now();
        if (this.history_.length == 0 || this.history_[this.history_.length - 1].el != element) {
          this.history_.push({
            el: element,
            time: now
          });
        } else {
          this.history_[this.history_.length - 1].time = now;
        }
        this.purgeBefore(now - this.purgeTimeout_);
        this.observeFocus_.fire(element);
      }
    }, {
      key: "getLast",
      value: function getLast() {
        if (this.history_.length == 0) {
          return null;
        }
        return this.history_[this.history_.length - 1].el;
      }
    }, {
      key: "purgeBefore",
      value: function purgeBefore(time) {
        var index = this.history_.length - 1;
        for (var i = 0; i < this.history_.length; i++) {
          if (this.history_[i].time >= time) {
            index = i - 1;
            break;
          }
        }
        if (index != -1) {
          this.history_.splice(0, index + 1);
        }
      }
    }, {
      key: "hasDescendantsOf",
      value: function hasDescendantsOf(element) {
        if (this.win.document.activeElement) {
          this.pushFocus_(this.win.document.activeElement);
        }
        for (var i = 0; i < this.history_.length; i++) {
          if (element.contains(this.history_[i].el)) {
            return true;
          }
        }
        return false;
      }
    }]);
    return FocusHistory2;
  }();

  // src/service/mutator-impl.js
  function _classCallCheck30(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties29(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass29(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties29(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties29(Constructor, staticProps);
    return Constructor;
  }
  var FOUR_FRAME_DELAY_ = 70;
  var FOCUS_HISTORY_TIMEOUT_ = 1e3 * 60;
  var TAG_5 = "Mutator";
  var MutatorImpl = /* @__PURE__ */ function() {
    function MutatorImpl2(ampdoc) {
      var _this = this;
      _classCallCheck30(this, MutatorImpl2);
      this.ampdoc = ampdoc;
      this.win = ampdoc.win;
      this.resources_ = Services.resourcesForDoc(ampdoc);
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.vsync_ = Services.vsyncFor(this.win);
      this.activeHistory_ = new FocusHistory(this.win, FOCUS_HISTORY_TIMEOUT_);
      this.activeHistory_.onFocus(function(element) {
        _this.checkPendingChangeSize_(element);
      });
    }
    _createClass29(MutatorImpl2, [{
      key: "forceChangeSize",
      value: function forceChangeSize(element, newHeight, newWidth, opt_callback, opt_newMargins) {
        this.scheduleChangeSize_(Resource.forElement(element), newHeight, newWidth, opt_newMargins, void 0, true, opt_callback);
      }
    }, {
      key: "requestChangeSize",
      value: function requestChangeSize(element, newHeight, newWidth, opt_newMargins, opt_event) {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          _this2.scheduleChangeSize_(Resource.forElement(element), newHeight, newWidth, opt_newMargins, opt_event, false, function(success) {
            if (success) {
              resolve();
            } else {
              reject(new Error("changeSize attempt denied"));
            }
          });
        });
      }
    }, {
      key: "expandElement",
      value: function expandElement(element) {
        var resource = Resource.forElement(element);
        resource.completeExpand();
        this.resources_.schedulePass(FOUR_FRAME_DELAY_);
      }
    }, {
      key: "attemptCollapse",
      value: function attemptCollapse(element) {
        var _this3 = this;
        return new Promise(function(resolve, reject) {
          _this3.scheduleChangeSize_(Resource.forElement(element), 0, 0, void 0, void 0, false, function(success) {
            if (success) {
              var resource = Resource.forElement(element);
              resource.completeCollapse();
              resolve();
            } else {
              reject(dev().createExpectedError("collapse attempt denied"));
            }
          });
        });
      }
    }, {
      key: "collapseElement",
      value: function collapseElement(element) {
        var box = this.viewport_.getLayoutRect(element);
        if (box.width != 0 && box.height != 0) {
          if (isExperimentOn(this.win, "dirty-collapse-element")) {
            this.dirtyElement(element);
          } else {
            this.resources_.setRelayoutTop(box.top);
          }
        }
        var resource = Resource.forElement(element);
        resource.completeCollapse();
        this.resources_.schedulePass(FOUR_FRAME_DELAY_);
      }
    }, {
      key: "measureElement",
      value: function measureElement(measurer) {
        return this.vsync_.measurePromise(measurer);
      }
    }, {
      key: "mutateElement",
      value: function mutateElement(element, mutator, skipRemeasure) {
        return this.measureMutateElementResources_(element, null, mutator, skipRemeasure);
      }
    }, {
      key: "measureMutateElement",
      value: function measureMutateElement(element, measurer, mutator) {
        return this.measureMutateElementResources_(element, measurer, mutator);
      }
    }, {
      key: "getLayoutMargins_",
      value: function getLayoutMargins_(resource) {
        var style = computedStyle(this.win, resource.element);
        return {
          top: parseInt(style.marginTop, 10) || 0,
          right: parseInt(style.marginRight, 10) || 0,
          bottom: parseInt(style.marginBottom, 10) || 0,
          left: parseInt(style.marginLeft, 10) || 0
        };
      }
    }, {
      key: "measureMutateElementResources_",
      value: function measureMutateElementResources_(element, measurer, mutator, skipRemeasure) {
        var _this4 = this;
        if (skipRemeasure === void 0) {
          skipRemeasure = false;
        }
        var calcRelayoutTop = function calcRelayoutTop2() {
          var box = _this4.viewport_.getLayoutRect(element);
          if (box.width != 0 && box.height != 0) {
            return box.top;
          }
          return -1;
        };
        var relayoutTop = -1;
        return this.vsync_.runPromise({
          measure: function measure() {
            if (measurer) {
              measurer();
            }
            if (!skipRemeasure) {
              relayoutTop = calcRelayoutTop();
            }
          },
          mutate: function mutate() {
            mutator();
            if (skipRemeasure) {
              return;
            }
            if (element.classList.contains("i-amphtml-element")) {
              var r = Resource.forElement(element);
              r.requestMeasure();
            }
            var ampElements = element.getElementsByClassName("i-amphtml-element");
            for (var i = 0; i < ampElements.length; i++) {
              var _r = Resource.forElement(ampElements[i]);
              _r.requestMeasure();
            }
            _this4.resources_.schedulePass(FOUR_FRAME_DELAY_);
            if (relayoutTop != -1) {
              _this4.resources_.setRelayoutTop(relayoutTop);
            }
            _this4.vsync_.measure(function() {
              var updatedRelayoutTop = calcRelayoutTop();
              if (updatedRelayoutTop != -1 && updatedRelayoutTop != relayoutTop) {
                _this4.resources_.setRelayoutTop(updatedRelayoutTop);
                _this4.resources_.schedulePass(FOUR_FRAME_DELAY_);
              }
              _this4.resources_.maybeHeightChanged();
            });
          }
        });
      }
    }, {
      key: "dirtyElement",
      value: function dirtyElement(element) {
        var relayoutAll = false;
        var isAmpElement = element.classList.contains("i-amphtml-element");
        if (isAmpElement) {
          var r = Resource.forElement(element);
          this.resources_.setRelayoutTop(r.getLayoutBox().top);
        } else {
          relayoutAll = true;
        }
        this.resources_.schedulePass(FOUR_FRAME_DELAY_, relayoutAll);
      }
    }, {
      key: "checkPendingChangeSize_",
      value: function checkPendingChangeSize_(element) {
        var resourceElement = closest(element, function(el) {
          return !!Resource.forElementOptional(el);
        });
        if (!resourceElement) {
          return;
        }
        var resource = Resource.forElement(resourceElement);
        var pendingChangeSize = resource.getPendingChangeSize();
        if (pendingChangeSize !== void 0) {
          this.scheduleChangeSize_(resource, pendingChangeSize.height, pendingChangeSize.width, pendingChangeSize.margins, void 0, true);
        }
      }
    }, {
      key: "scheduleChangeSize_",
      value: function scheduleChangeSize_(resource, newHeight, newWidth, newMargins, event, force, opt_callback) {
        var _this5 = this;
        if (resource.hasBeenMeasured() && !newMargins) {
          this.completeScheduleChangeSize_(resource, newHeight, newWidth, void 0, event, force, opt_callback);
        } else {
          this.vsync_.measure(function() {
            if (!resource.hasBeenMeasured()) {
              resource.measure();
            }
            var marginChange = newMargins ? {
              newMargins,
              currentMargins: _this5.getLayoutMargins_(resource)
            } : void 0;
            _this5.completeScheduleChangeSize_(resource, newHeight, newWidth, marginChange, event, force, opt_callback);
          });
        }
      }
    }, {
      key: "completeScheduleChangeSize_",
      value: function completeScheduleChangeSize_(resource, newHeight, newWidth, marginChange, event, force, opt_callback) {
        resource.resetPendingChangeSize();
        var layoutSize = resource.getLayoutSize();
        if ((newHeight === void 0 || newHeight == layoutSize.height) && (newWidth === void 0 || newWidth == layoutSize.width) && (marginChange === void 0 || !areMarginsChanged(marginChange.currentMargins, marginChange.newMargins))) {
          if (newHeight === void 0 && newWidth === void 0 && marginChange === void 0) {
            dev().error(TAG_5, "attempting to change size with undefined dimensions", resource.debugid);
          }
          if (opt_callback) {
            opt_callback(true);
          }
          return;
        }
        this.resources_.updateOrEnqueueMutateTask(resource, {
          resource,
          newHeight,
          newWidth,
          marginChange,
          event,
          force,
          callback: opt_callback
        });
        this.resources_.schedulePassVsync();
      }
    }]);
    return MutatorImpl2;
  }();
  function installMutatorServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "mutator", MutatorImpl);
  }

  // src/service/owners-impl.js
  function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray5(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
  function _arrayLikeToArray5(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _classCallCheck31(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties30(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass30(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties30(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties30(Constructor, staticProps);
    return Constructor;
  }
  function elements(elements2) {
    return isArray(elements2) ? elements2 : [elements2];
  }
  var OwnersImpl = /* @__PURE__ */ function() {
    function OwnersImpl2(ampdoc) {
      _classCallCheck31(this, OwnersImpl2);
      this.resources_ = Services.resourcesForDoc(ampdoc);
    }
    _createClass30(OwnersImpl2, [{
      key: "setOwner",
      value: function setOwner(element, owner) {
        Resource.setOwner(element, owner);
      }
    }, {
      key: "schedulePreload",
      value: function schedulePreload(parentElement, subElements) {
        this.scheduleLayoutOrPreloadForSubresources_(this.resources_.getResourceForElement(parentElement), false, elements(subElements));
      }
    }, {
      key: "scheduleLayout",
      value: function scheduleLayout(parentElement, subElements) {
        this.scheduleLayoutOrPreloadForSubresources_(this.resources_.getResourceForElement(parentElement), true, elements(subElements));
      }
    }, {
      key: "schedulePause",
      value: function schedulePause(parentElement, subElements) {
        var parentResource = this.resources_.getResourceForElement(parentElement);
        subElements = elements(subElements);
        this.findResourcesInElements_(parentResource, subElements, function(resource) {
          resource.pause();
        });
      }
    }, {
      key: "scheduleResume",
      value: function scheduleResume(parentElement, subElements) {
        var parentResource = this.resources_.getResourceForElement(parentElement);
        subElements = elements(subElements);
        this.findResourcesInElements_(parentResource, subElements, function(resource) {
          resource.resume();
        });
      }
    }, {
      key: "scheduleUnlayout",
      value: function scheduleUnlayout(parentElement, subElements) {
        var parentResource = this.resources_.getResourceForElement(parentElement);
        subElements = elements(subElements);
        this.findResourcesInElements_(parentResource, subElements, function(resource) {
          resource.unlayout();
        });
      }
    }, {
      key: "requireLayout",
      value: function requireLayout(element, opt_parentPriority) {
        var promises = [];
        this.discoverResourcesForElement_(element, function(resource) {
          promises.push(resource.element.ensureLoaded());
        });
        return Promise.all(promises);
      }
    }, {
      key: "findResourcesInElements_",
      value: function findResourcesInElements_(parentResource, elements2, callback) {
        for (var _iterator = _createForOfIteratorHelperLoose5(elements2), _step; !(_step = _iterator()).done; ) {
          var element = _step.value;
          devAssert(parentResource.element.contains(element));
          this.discoverResourcesForElement_(element, callback);
        }
      }
    }, {
      key: "discoverResourcesForElement_",
      value: function discoverResourcesForElement_(element, callback) {
        if (element.classList.contains("i-amphtml-element")) {
          callback(this.resources_.getResourceForElement(element));
          var placeholder = element.getPlaceholder();
          if (placeholder) {
            this.discoverResourcesForElement_(placeholder, callback);
          }
        } else {
          var ampElements = element.getElementsByClassName("i-amphtml-element");
          var seen = [];
          for (var i = 0; i < ampElements.length; i++) {
            var ampElement = ampElements[i];
            var covered = false;
            for (var j = 0; j < seen.length; j++) {
              if (seen[j].contains(ampElement)) {
                covered = true;
                break;
              }
            }
            if (!covered) {
              seen.push(ampElement);
              callback(this.resources_.getResourceForElement(ampElement));
            }
          }
        }
      }
    }, {
      key: "scheduleLayoutOrPreloadForSubresources_",
      value: function scheduleLayoutOrPreloadForSubresources_(parentResource, layout, subElements) {
        this.findResourcesInElements_(parentResource, subElements, function(resource) {
          resource.element.ensureLoaded(parentResource.getLayoutPriority());
        });
      }
    }]);
    return OwnersImpl2;
  }();
  function installOwnersServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "owners", OwnersImpl);
  }

  // src/preconnect.js
  var ACTIVE_CONNECTION_TIMEOUT_MS = 180 * 1e3;
  var PRECONNECT_TIMEOUT_MS = 10 * 1e3;

  // src/core/data-structures/finite-state-machine.js
  function _classCallCheck32(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties31(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass31(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties31(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties31(Constructor, staticProps);
    return Constructor;
  }
  var FiniteStateMachine = /* @__PURE__ */ function() {
    function FiniteStateMachine2(initialState) {
      _classCallCheck32(this, FiniteStateMachine2);
      this.state_ = initialState;
      this.transitions_ = map();
    }
    _createClass31(FiniteStateMachine2, [{
      key: "addTransition",
      value: function addTransition(oldState, newState, callback) {
        var transition = this.statesToTransition_(oldState, newState);
        devAssert2(!this.transitions_[transition], "cannot define a duplicate transition callback");
        this.transitions_[transition] = callback;
      }
    }, {
      key: "setState",
      value: function setState(newState) {
        var oldState = this.state_;
        this.state_ = newState;
        var transition = this.statesToTransition_(oldState, newState);
        var callback = this.transitions_[transition];
        callback == null ? void 0 : callback();
      }
    }, {
      key: "statesToTransition_",
      value: function statesToTransition_(oldState, newState) {
        return oldState + "|" + newState;
      }
    }]);
    return FiniteStateMachine2;
  }();

  // src/service/task-queue.js
  function _classCallCheck33(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties32(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass32(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties32(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties32(Constructor, staticProps);
    return Constructor;
  }
  var TaskQueue = /* @__PURE__ */ function() {
    function TaskQueue2() {
      _classCallCheck33(this, TaskQueue2);
      this.tasks_ = [];
      this.taskIdMap_ = {};
      this.lastEnqueueTime_ = 0;
      this.lastDequeueTime_ = 0;
    }
    _createClass32(TaskQueue2, [{
      key: "getSize",
      value: function getSize() {
        return this.tasks_.length;
      }
    }, {
      key: "getLastEnqueueTime",
      value: function getLastEnqueueTime() {
        return this.lastEnqueueTime_;
      }
    }, {
      key: "getLastDequeueTime",
      value: function getLastDequeueTime() {
        return this.lastDequeueTime_;
      }
    }, {
      key: "getTaskById",
      value: function getTaskById(taskId) {
        return this.taskIdMap_[taskId] || null;
      }
    }, {
      key: "enqueue",
      value: function enqueue(task) {
        devAssert(!this.taskIdMap_[task.id], "Task already enqueued: %s", task.id);
        this.tasks_.push(task);
        this.taskIdMap_[task.id] = task;
        this.lastEnqueueTime_ = Date.now();
      }
    }, {
      key: "dequeue",
      value: function dequeue(task) {
        var existing = this.taskIdMap_[task.id];
        var dequeued = this.removeAtIndex(task, this.tasks_.indexOf(existing));
        if (!dequeued) {
          return false;
        }
        this.lastDequeueTime_ = Date.now();
        return true;
      }
    }, {
      key: "peek",
      value: function peek(scorer) {
        var minScore = 1e6;
        var minTask = null;
        for (var i = 0; i < this.tasks_.length; i++) {
          var task = this.tasks_[i];
          var score = scorer(task);
          if (score < minScore) {
            minScore = score;
            minTask = task;
          }
        }
        return minTask;
      }
    }, {
      key: "forEach",
      value: function forEach(callback) {
        this.tasks_.forEach(callback);
      }
    }, {
      key: "removeAtIndex",
      value: function removeAtIndex(task, index) {
        var existing = this.taskIdMap_[task.id];
        if (!existing || this.tasks_[index] != existing) {
          return false;
        }
        this.tasks_.splice(index, 1);
        delete this.taskIdMap_[task.id];
        return true;
      }
    }, {
      key: "purge",
      value: function purge(callback) {
        var index = this.tasks_.length;
        while (index--) {
          if (callback(this.tasks_[index])) {
            this.removeAtIndex(this.tasks_[index], index);
          }
        }
      }
    }]);
    return TaskQueue2;
  }();

  // src/service/ie-intrinsic-bug.js
  function ieIntrinsicCheckAndFix(win, opt_platform) {
    var platform = opt_platform || Services.platformFor(win);
    if (!platform.isIe()) {
      return;
    }
    var document = win.document;
    var intrinsics = document.querySelectorAll('.i-amphtml-intrinsic-sizer[src^="data:image/svg"]');
    for (var i = 0; i < intrinsics.length; i++) {
      var intrinsic = intrinsics[i];
      var element = closestAncestorElementBySelector(intrinsic, ".i-amphtml-element");
      if (!element) {
        continue;
      }
      var width = getLengthNumeral(element.getAttribute("width"));
      var height = getLengthNumeral(element.getAttribute("height"));
      if (width && height) {
        intrinsic.src = transparentPng(document, width, height);
      }
    }
  }

  // src/service/ie-media-bug.js
  var TAG8 = "ie-media-bug";
  function ieMediaCheckAndFix(win, opt_platform) {
    var platform = opt_platform || Services.platformFor(win);
    if (!platform.isIe() || matchMediaIeQuite(win)) {
      return null;
    }
    return new Promise(function(resolve) {
      var endTime = Date.now() + 2e3;
      var interval = win.setInterval(function() {
        var now = Date.now();
        var matches2 = matchMediaIeQuite(win);
        if (matches2 || now > endTime) {
          win.clearInterval(interval);
          resolve();
          if (!matches2) {
            dev().error(TAG8, "IE media never resolved");
          }
        }
      }, 10);
    });
  }
  function matchMediaIeQuite(win) {
    var q = "(min-width: " + (win.innerWidth - 1) + "px)" + (" AND (max-width: " + (win.innerWidth + 1) + "px)");
    try {
      return win.matchMedia(q).matches;
    } catch (e) {
      dev().error(TAG8, "IE matchMedia failed: ", e);
      return true;
    }
  }

  // src/service/resources-impl.js
  function _classCallCheck34(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties33(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass33(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties33(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties33(Constructor, staticProps);
    return Constructor;
  }
  var TAG_6 = "Resources";
  var LAYOUT_TASK_ID_ = "L";
  var LAYOUT_TASK_OFFSET_ = 0;
  var PRELOAD_TASK_ID_ = "P";
  var PRELOAD_TASK_OFFSET_ = 2;
  var PRIORITY_BASE_ = 10;
  var PRIORITY_PENALTY_TIME_ = 1e3;
  var POST_TASK_PASS_DELAY_ = 1e3;
  var MUTATE_DEFER_DELAY_ = 500;
  var FOCUS_HISTORY_TIMEOUT_2 = 1e3 * 60;
  var FOUR_FRAME_DELAY_2 = 70;
  var ResourcesImpl = /* @__PURE__ */ function() {
    function ResourcesImpl2(ampdoc) {
      var _this = this;
      _classCallCheck34(this, ResourcesImpl2);
      this.ampdoc = ampdoc;
      this.win = ampdoc.win;
      this.viewer_ = Services.viewerForDoc(ampdoc);
      this.isRuntimeOn_ = this.viewer_.isRuntimeOn();
      this.isBuildOn_ = false;
      this.resourceIdCounter_ = 0;
      this.resources_ = [];
      this.addCount_ = 0;
      this.buildAttemptsCount_ = 0;
      this.buildsThisPass_ = 0;
      this.visible_ = this.ampdoc.isVisible();
      this.documentReady_ = false;
      this.firstPassAfterDocumentReady_ = true;
      this.ampInitialized_ = false;
      this.firstVisibleTime_ = -1;
      this.relayoutAll_ = true;
      this.relayoutTop_ = -1;
      this.lastScrollTime_ = 0;
      this.lastVelocity_ = 0;
      this.pass_ = new Pass(this.win, function() {
        return _this.doPass();
      });
      this.remeasurePass_ = new Pass(this.win, function() {
        _this.relayoutAll_ = true;
        _this.schedulePass();
      });
      this.exec_ = new TaskQueue();
      this.queue_ = new TaskQueue();
      this.boundTaskScorer_ = this.calcTaskScore_.bind(this);
      this.requestsChangeSize_ = [];
      this.pendingBuildResources_ = [];
      this.isCurrentlyBuildingPendingResources_ = false;
      this.viewport_ = Services.viewportForDoc(this.ampdoc);
      this.vsync_ = Services.vsyncFor(this.win);
      this.activeHistory_ = new FocusHistory(this.win, FOCUS_HISTORY_TIMEOUT_2);
      this.vsyncScheduled_ = false;
      this.contentHeight_ = 0;
      this.maybeChangeHeight_ = false;
      this.passCallbacks_ = [];
      this.elementsThatScrolled_ = [];
      this.firstPassDone_ = new Deferred();
      this.visibilityStateMachine_ = new FiniteStateMachine(this.ampdoc.getVisibilityState());
      this.viewport_.onChanged(function(event) {
        _this.lastScrollTime_ = _this.win.Date.now();
        _this.lastVelocity_ = event.velocity;
        if (event.relayoutAll) {
          _this.relayoutAll_ = true;
          _this.maybeChangeHeight_ = true;
        }
        _this.schedulePass();
      });
      this.viewport_.onScroll(function() {
        _this.lastScrollTime_ = _this.win.Date.now();
      });
      this.ampdoc.onVisibilityChanged(function() {
        if (_this.firstVisibleTime_ == -1 && _this.ampdoc.isVisible()) {
          _this.firstVisibleTime_ = _this.win.Date.now();
        }
        _this.schedulePass();
      });
      this.viewer_.onRuntimeState(function(state) {
        dev().fine(TAG_6, "Runtime state:", state);
        _this.isRuntimeOn_ = state;
        _this.schedulePass(1);
      });
      startupChunk(this.ampdoc, function() {
        _this.setupVisibilityStateMachine_(_this.visibilityStateMachine_);
        _this.schedulePass(0);
      });
      this.rebuildDomWhenReady_();
      this.throttledScroll_ = throttle(this.win, function(e) {
        return _this.scrolled_(e);
      }, 250);
      listen(this.win.document, "scroll", this.throttledScroll_, {
        capture: true,
        passive: true
      });
    }
    _createClass33(ResourcesImpl2, [{
      key: "rebuildDomWhenReady_",
      value: function rebuildDomWhenReady_() {
        var _this2 = this;
        this.ampdoc.whenReady().then(function() {
          _this2.documentReady_ = true;
          _this2.buildReadyResources_();
          _this2.pendingBuildResources_ = null;
          var input = Services.inputFor(_this2.win);
          input.setupInputModeClasses(_this2.ampdoc);
          if (false) {
            return;
          }
          ieIntrinsicCheckAndFix(_this2.win);
          var fixPromise = ieMediaCheckAndFix(_this2.win);
          var remeasure = function remeasure2() {
            return _this2.remeasurePass_.schedule();
          };
          if (fixPromise) {
            fixPromise.then(remeasure);
          } else {
            remeasure();
          }
          Promise.race([loadPromise(_this2.win), Services.timerFor(_this2.win).promise(3100)]).then(remeasure);
          if (_this2.win.document.fonts && _this2.win.document.fonts.status != "loaded") {
            _this2.win.document.fonts.ready.then(remeasure);
          }
        });
      }
    }, {
      key: "get",
      value: function get() {
        return this.resources_.slice(0);
      }
    }, {
      key: "getAmpdoc",
      value: function getAmpdoc2() {
        return this.ampdoc;
      }
    }, {
      key: "getResourceForElement",
      value: function getResourceForElement(element) {
        return Resource.forElement(element);
      }
    }, {
      key: "getResourceForElementOptional",
      value: function getResourceForElementOptional(element) {
        return Resource.forElementOptional(element);
      }
    }, {
      key: "getScrollDirection",
      value: function getScrollDirection() {
        return Math.sign(this.lastVelocity_) || 1;
      }
    }, {
      key: "add",
      value: function add(element) {
        this.addCount_++;
        if (this.addCount_ == 1) {
          this.viewport_.ensureReadyForElements();
        }
        var resource = Resource.forElementOptional(element);
        if (resource && resource.getState() != ResourceState.NOT_BUILT && !element.reconstructWhenReparented()) {
          resource.requestMeasure();
          dev().fine(TAG_6, "resource reused:", resource.debugid);
        } else {
          resource = new Resource(++this.resourceIdCounter_, element, this);
          dev().fine(TAG_6, "resource added:", resource.debugid);
        }
        this.resources_.push(resource);
        this.remeasurePass_.schedule(1e3);
      }
    }, {
      key: "isUnderBuildQuota_",
      value: function isUnderBuildQuota_() {
        return this.buildAttemptsCount_ < 20 || this.ampdoc.hasBeenVisible();
      }
    }, {
      key: "buildOrScheduleBuildForResource_",
      value: function buildOrScheduleBuildForResource_(resource, checkForDupes, ignoreQuota) {
        if (checkForDupes === void 0) {
          checkForDupes = false;
        }
        if (ignoreQuota === void 0) {
          ignoreQuota = false;
        }
        var buildingEnabled = this.isRuntimeOn_ || this.isBuildOn_;
        if (!buildingEnabled) {
          return;
        }
        var shouldBuildResource = this.ampdoc.getVisibilityState() != VisibilityState.PRERENDER || resource.prerenderAllowed();
        if (!shouldBuildResource) {
          return;
        }
        if (this.documentReady_) {
          this.buildResourceUnsafe_(resource, ignoreQuota);
        } else if (!resource.isBuilt() && !resource.isBuilding()) {
          if (!checkForDupes || !this.pendingBuildResources_.includes(resource)) {
            this.pendingBuildResources_.push(resource);
            this.buildReadyResources_();
          }
        }
      }
    }, {
      key: "buildReadyResources_",
      value: function buildReadyResources_() {
        if (this.isCurrentlyBuildingPendingResources_) {
          return;
        }
        try {
          this.isCurrentlyBuildingPendingResources_ = true;
          this.buildReadyResourcesUnsafe_();
        } finally {
          this.isCurrentlyBuildingPendingResources_ = false;
        }
      }
    }, {
      key: "buildReadyResourcesUnsafe_",
      value: function buildReadyResourcesUnsafe_() {
        for (var i = 0; i < this.pendingBuildResources_.length; i++) {
          var resource = this.pendingBuildResources_[i];
          if (this.documentReady_ || hasNextNodeInDocumentOrder(resource.element, this.ampdoc.getRootNode())) {
            this.pendingBuildResources_.splice(i--, 1);
            this.buildResourceUnsafe_(resource);
          }
        }
      }
    }, {
      key: "buildResourceUnsafe_",
      value: function buildResourceUnsafe_(resource, ignoreQuota) {
        var _this3 = this;
        if (ignoreQuota === void 0) {
          ignoreQuota = false;
        }
        if (!ignoreQuota && !this.isUnderBuildQuota_() && !resource.isBuildRenderBlocking()) {
          return null;
        }
        var promise = resource.build();
        if (!promise) {
          return null;
        }
        dev().fine(TAG_6, "build resource:", resource.debugid);
        this.buildAttemptsCount_++;
        this.buildsThisPass_++;
        return promise.then(function() {
          return _this3.schedulePass();
        }, function(error) {
          _this3.removeResource_(resource);
          if (!isBlockedByConsent(error)) {
            throw error;
          }
        });
      }
    }, {
      key: "remove",
      value: function remove2(element) {
        var resource = Resource.forElementOptional(element);
        if (!resource) {
          return;
        }
        this.removeResource_(resource);
      }
    }, {
      key: "removeResource_",
      value: function removeResource_(resource) {
        var index = this.resources_.indexOf(resource);
        if (index != -1) {
          this.resources_.splice(index, 1);
        }
        if (resource.isBuilt()) {
          resource.pauseOnRemove();
        }
        if (resource.getState() === ResourceState.LAYOUT_SCHEDULED) {
          resource.layoutCanceled();
        }
        this.cleanupTasks_(resource, true);
        dev().fine(TAG_6, "resource removed:", resource.debugid);
      }
    }, {
      key: "upgraded",
      value: function upgraded(element) {
        var resource = Resource.forElement(element);
        this.buildOrScheduleBuildForResource_(resource);
        dev().fine(TAG_6, "resource upgraded:", resource.debugid);
      }
    }, {
      key: "updateLayoutPriority",
      value: function updateLayoutPriority(element, newLayoutPriority) {
        var resource = Resource.forElement(element);
        resource.updateLayoutPriority(newLayoutPriority);
        this.queue_.forEach(function(task) {
          if (task.resource == resource) {
            task.priority = newLayoutPriority;
          }
        });
        this.schedulePass();
      }
    }, {
      key: "schedulePass",
      value: function schedulePass(opt_delay) {
        return this.pass_.schedule(opt_delay);
      }
    }, {
      key: "updateOrEnqueueMutateTask",
      value: function updateOrEnqueueMutateTask(resource, newRequest) {
        var request = null;
        for (var i = 0; i < this.requestsChangeSize_.length; i++) {
          if (this.requestsChangeSize_[i].resource == resource) {
            request = this.requestsChangeSize_[i];
            break;
          }
        }
        if (request) {
          request.newHeight = newRequest.newHeight;
          request.newWidth = newRequest.newWidth;
          request.marginChange = newRequest.marginChange;
          request.event = newRequest.event;
          request.force = newRequest.force || request.force;
          request.callback = newRequest.callback;
        } else {
          this.requestsChangeSize_.push(newRequest);
        }
      }
    }, {
      key: "schedulePassVsync",
      value: function schedulePassVsync() {
        var _this4 = this;
        if (this.vsyncScheduled_) {
          return;
        }
        this.vsyncScheduled_ = true;
        this.vsync_.mutate(function() {
          return _this4.doPass();
        });
      }
    }, {
      key: "ampInitComplete",
      value: function ampInitComplete() {
        this.ampInitialized_ = true;
        dev().fine(TAG_6, "ampInitComplete");
        this.schedulePass();
      }
    }, {
      key: "setRelayoutTop",
      value: function setRelayoutTop(relayoutTop) {
        if (this.relayoutTop_ == -1) {
          this.relayoutTop_ = relayoutTop;
        } else {
          this.relayoutTop_ = Math.min(relayoutTop, this.relayoutTop_);
        }
      }
    }, {
      key: "maybeHeightChanged",
      value: function maybeHeightChanged() {
        this.maybeChangeHeight_ = true;
      }
    }, {
      key: "onNextPass",
      value: function onNextPass(callback) {
        this.passCallbacks_.push(callback);
      }
    }, {
      key: "doPass",
      value: function doPass() {
        var _this5 = this;
        if (!this.isRuntimeOn_) {
          dev().fine(TAG_6, "runtime is off");
          return;
        }
        this.visible_ = this.ampdoc.isVisible();
        this.buildsThisPass_ = 0;
        var firstPassAfterDocumentReady = this.documentReady_ && this.firstPassAfterDocumentReady_ && this.ampInitialized_;
        if (firstPassAfterDocumentReady) {
          var _doc$body$firstElemen;
          this.firstPassAfterDocumentReady_ = false;
          var doc = this.win.document;
          var documentInfo = Services.documentInfoForDoc(this.ampdoc);
          this.viewer_.sendMessage("documentLoaded", dict({
            "title": doc.title,
            "sourceUrl": getSourceUrl(this.ampdoc.getUrl()),
            "isStory": ((_doc$body$firstElemen = doc.body.firstElementChild) == null ? void 0 : _doc$body$firstElemen.tagName) === "AMP-STORY",
            "serverLayout": doc.documentElement.hasAttribute("i-amphtml-element"),
            "linkRels": documentInfo.linkRels,
            "metaTags": {
              "viewport": documentInfo.viewport
            },
            "viewport": documentInfo.viewport
          }), true);
          this.contentHeight_ = this.viewport_.getContentHeight();
          this.viewer_.sendMessage("documentHeight", dict({
            "height": this.contentHeight_
          }), true);
          dev().fine(TAG_6, "document height on load: %s", this.contentHeight_);
        }
        var firstPassAfterAllBuilt = !this.firstPassAfterDocumentReady_ && this.firstPassAfterAllBuilt_ && this.resources_.every(function(r) {
          return r.getState() != Resource.NOT_BUILT || r.element.R1();
        });
        if (firstPassAfterAllBuilt) {
          this.firstPassAfterAllBuilt_ = false;
          this.maybeChangeHeight_ = true;
        }
        var viewportSize = this.viewport_.getSize();
        dev().fine(TAG_6, "PASS: visible=", this.visible_, ", relayoutAll=", this.relayoutAll_, ", relayoutTop=", this.relayoutTop_, ", viewportSize=", viewportSize.width, viewportSize.height);
        this.pass_.cancel();
        this.vsyncScheduled_ = false;
        this.visibilityStateMachine_.setState(this.ampdoc.getVisibilityState());
        this.signalIfReady_();
        if (this.maybeChangeHeight_) {
          this.maybeChangeHeight_ = false;
          this.vsync_.measure(function() {
            var measuredContentHeight = _this5.viewport_.getContentHeight();
            if (measuredContentHeight != _this5.contentHeight_) {
              _this5.viewer_.sendMessage("documentHeight", dict({
                "height": measuredContentHeight
              }), true);
              _this5.contentHeight_ = measuredContentHeight;
              dev().fine(TAG_6, "document height changed: %s", _this5.contentHeight_);
              _this5.viewport_.contentHeightChanged();
            }
          });
        }
        for (var i = 0; i < this.passCallbacks_.length; i++) {
          var fn = this.passCallbacks_[i];
          fn();
        }
        this.passCallbacks_.length = 0;
      }
    }, {
      key: "signalIfReady_",
      value: function signalIfReady_() {
        if (this.documentReady_ && this.ampInitialized_ && !this.ampdoc.signals().get(READY_SCAN_SIGNAL)) {
          this.ampdoc.signals().signal(READY_SCAN_SIGNAL);
          dev().fine(TAG_6, "signal: ready-scan");
        }
      }
    }, {
      key: "hasMutateWork_",
      value: function hasMutateWork_() {
        return this.requestsChangeSize_.length > 0;
      }
    }, {
      key: "mutateWork_",
      value: function mutateWork_() {
        var _this6 = this;
        var now = this.win.Date.now();
        var viewportRect = this.viewport_.getRect();
        var topOffset = viewportRect.height / 10;
        var bottomOffset = viewportRect.height / 10;
        var isScrollingStopped = Math.abs(this.lastVelocity_) < 0.01 && now - this.lastScrollTime_ > MUTATE_DEFER_DELAY_ || now - this.lastScrollTime_ > MUTATE_DEFER_DELAY_ * 2;
        if (this.requestsChangeSize_.length > 0) {
          dev().fine(TAG_6, "change size requests:", this.requestsChangeSize_.length);
          var requestsChangeSize = this.requestsChangeSize_;
          this.requestsChangeSize_ = [];
          var minTop = -1;
          var scrollAdjSet = [];
          var aboveVpHeightChange = 0;
          var _loop = function _loop2(i2) {
            var request = requestsChangeSize[i2];
            var event = request.event, resource = request.resource;
            var box = resource.getLayoutBox();
            var topMarginDiff = 0;
            var bottomMarginDiff = 0;
            var leftMarginDiff = 0;
            var rightMarginDiff = 0;
            var bottomDisplacedBoundary = box.bottom, topUnchangedBoundary = box.top;
            var newMargins = void 0;
            if (request.marginChange) {
              newMargins = request.marginChange.newMargins;
              var margins = request.marginChange.currentMargins;
              if (newMargins.top != void 0) {
                topMarginDiff = newMargins.top - margins.top;
              }
              if (newMargins.bottom != void 0) {
                bottomMarginDiff = newMargins.bottom - margins.bottom;
              }
              if (newMargins.left != void 0) {
                leftMarginDiff = newMargins.left - margins.left;
              }
              if (newMargins.right != void 0) {
                rightMarginDiff = newMargins.right - margins.right;
              }
              if (topMarginDiff) {
                topUnchangedBoundary = box.top - margins.top;
              }
              if (bottomMarginDiff) {
                bottomDisplacedBoundary = box.bottom + margins.bottom;
              }
            }
            var heightDiff = request.newHeight - box.height;
            var widthDiff = request.newWidth - box.width;
            var resize = false;
            if (heightDiff == 0 && topMarginDiff == 0 && bottomMarginDiff == 0 && widthDiff == 0 && leftMarginDiff == 0 && rightMarginDiff == 0) {
            } else if (request.force || !_this6.visible_) {
              resize = true;
            } else if (_this6.activeHistory_.hasDescendantsOf(resource.element) || event && event.userActivation && event.userActivation.hasBeenActive) {
              resize = true;
            } else if (topUnchangedBoundary >= viewportRect.bottom - bottomOffset || topMarginDiff == 0 && box.bottom + Math.min(heightDiff, 0) >= viewportRect.bottom - bottomOffset) {
              resize = true;
            } else if (viewportRect.top > 1 && bottomDisplacedBoundary <= viewportRect.top + topOffset) {
              if (heightDiff < 0 && viewportRect.top + aboveVpHeightChange < -heightDiff) {
                return "continue";
              }
              if (isScrollingStopped) {
                aboveVpHeightChange = aboveVpHeightChange + heightDiff;
                scrollAdjSet.push(request);
              } else {
                _this6.requestsChangeSize_.push(request);
              }
              return "continue";
            } else if (_this6.elementNearBottom_(resource, box)) {
              resize = true;
            } else if (heightDiff < 0 || topMarginDiff < 0 || bottomMarginDiff < 0) {
            } else if (request.newHeight == box.height) {
              _this6.vsync_.run({
                measure: function measure(state) {
                  state.resize = false;
                  var parent = resource.element.parentElement;
                  if (!parent) {
                    return;
                  }
                  var parentWidth = parent.getLayoutSize && parent.getLayoutSize().width || parent.offsetWidth;
                  var cumulativeWidth = widthDiff;
                  for (var _i = 0; _i < parent.childElementCount; _i++) {
                    cumulativeWidth += parent.children[_i].offsetWidth;
                    if (cumulativeWidth > parentWidth) {
                      return;
                    }
                  }
                  state.resize = true;
                },
                mutate: function mutate(state) {
                  if (state.resize) {
                    request.resource.changeSize(request.newHeight, request.newWidth, newMargins);
                  }
                  request.resource.overflowCallback(!state.resize, request.newHeight, request.newWidth, newMargins);
                }
              }, {});
            } else {
              request.resource.overflowCallback(true, request.newHeight, request.newWidth, newMargins);
            }
            if (resize) {
              if (box.top >= 0) {
                minTop = minTop == -1 ? box.top : Math.min(minTop, box.top);
              }
              request.resource.changeSize(request.newHeight, request.newWidth, newMargins);
              request.resource.overflowCallback(false, request.newHeight, request.newWidth, newMargins);
              _this6.maybeChangeHeight_ = true;
            }
            if (request.callback) {
              request.callback(resize);
            }
          };
          for (var i = 0; i < requestsChangeSize.length; i++) {
            var _ret = _loop(i);
            if (_ret === "continue")
              continue;
          }
          if (minTop != -1) {
            this.setRelayoutTop(minTop);
          }
          if (scrollAdjSet.length > 0) {
            this.vsync_.run({
              measure: function measure(state) {
                state.scrollHeight = _this6.viewport_.getScrollHeight();
                state.scrollTop = _this6.viewport_.getScrollTop();
              },
              mutate: function mutate(state) {
                var minTop2 = -1;
                scrollAdjSet.forEach(function(request) {
                  var box = request.resource.getLayoutBox();
                  minTop2 = minTop2 == -1 ? box.top : Math.min(minTop2, box.top);
                  request.resource.changeSize(request.newHeight, request.newWidth, request.marginChange ? request.marginChange.newMargins : void 0);
                  if (request.callback) {
                    request.callback(true);
                  }
                });
                if (minTop2 != -1) {
                  _this6.setRelayoutTop(minTop2);
                }
                var newScrollHeight = _this6.viewport_.getScrollHeight();
                if (newScrollHeight != state.scrollHeight) {
                  _this6.viewport_.setScrollTop(state.scrollTop + (newScrollHeight - state.scrollHeight));
                }
                _this6.maybeChangeHeight_ = true;
              }
            }, {});
          }
        }
      }
    }, {
      key: "elementNearBottom_",
      value: function elementNearBottom_(resource, opt_layoutBox, opt_initialLayoutBox) {
        var contentHeight = this.viewport_.getContentHeight();
        var threshold = Math.max(contentHeight * 0.85, contentHeight - 1e3);
        var box = opt_layoutBox || resource.getLayoutBox();
        var initialBox = opt_initialLayoutBox || resource.getInitialLayoutBox();
        return box.bottom >= threshold || initialBox.bottom >= threshold;
      }
    }, {
      key: "measureResource_",
      value: function measureResource_(r) {
        var wasDisplayed = r.isDisplayed();
        r.measure();
        return !(wasDisplayed && !r.isDisplayed());
      }
    }, {
      key: "unloadResources_",
      value: function unloadResources_(resources) {
        var _this7 = this;
        if (resources.length) {
          this.vsync_.mutate(function() {
            resources.forEach(function(r) {
              r.unload();
              _this7.cleanupTasks_(r);
            });
            dev().fine(TAG_6, "unload:", resources);
          });
        }
      }
    }, {
      key: "discoverWork_",
      value: function discoverWork_() {
        var now = this.win.Date.now();
        var elementsThatScrolled = this.elementsThatScrolled_, relayoutAll = this.relayoutAll_, relayoutTop = this.relayoutTop_;
        this.relayoutAll_ = false;
        this.relayoutTop_ = -1;
        var relayoutCount = 0;
        var remeasureCount = 0;
        for (var i = 0; i < this.resources_.length; i++) {
          var r = this.resources_[i];
          if (r.getState() == ResourceState.NOT_BUILT && !r.isBuilding() && !r.element.R1()) {
            this.buildOrScheduleBuildForResource_(r, true);
          }
          if (relayoutAll || !r.hasBeenMeasured() || r.getState() == ResourceState.NOT_LAID_OUT) {
            relayoutCount++;
          }
          if (r.isMeasureRequested()) {
            remeasureCount++;
          }
        }
        var toUnload;
        if (relayoutCount > 0 || remeasureCount > 0 || relayoutAll || relayoutTop != -1 || elementsThatScrolled.length > 0) {
          for (var _i2 = 0; _i2 < this.resources_.length; _i2++) {
            var _r = this.resources_[_i2];
            if (_r.hasOwner() && !_r.isMeasureRequested() || _r.element.R1()) {
              continue;
            }
            var needsMeasure = relayoutAll || _r.getState() == ResourceState.NOT_LAID_OUT || !_r.hasBeenMeasured() || _r.isMeasureRequested() || relayoutTop != -1 && _r.getLayoutBox().bottom >= relayoutTop;
            if (!needsMeasure) {
              for (var _i3 = 0; _i3 < elementsThatScrolled.length; _i3++) {
                if (elementsThatScrolled[_i3].contains(_r.element)) {
                  needsMeasure = true;
                  break;
                }
              }
            }
            if (needsMeasure) {
              var isDisplayed = this.measureResource_(_r);
              if (!isDisplayed) {
                if (!toUnload) {
                  toUnload = [];
                }
                toUnload.push(_r);
              }
            }
          }
        }
        elementsThatScrolled.length = 0;
        if (toUnload) {
          this.unloadResources_(toUnload);
        }
        var viewportRect = this.viewport_.getRect();
        var loadRect;
        if (this.visible_) {
          loadRect = expandLayoutRect(viewportRect, 0.25, 2);
        } else {
          loadRect = viewportRect;
        }
        var visibleRect = this.visible_ ? expandLayoutRect(viewportRect, 0.25, 0.25) : viewportRect;
        for (var _i4 = 0; _i4 < this.resources_.length; _i4++) {
          var _r2 = this.resources_[_i4];
          if (_r2.getState() == ResourceState.NOT_BUILT || _r2.hasOwner() || _r2.element.R1()) {
            continue;
          }
          var shouldBeInViewport = this.visible_ && _r2.isDisplayed() && _r2.overlaps(visibleRect);
          _r2.setInViewport(shouldBeInViewport);
        }
        if (loadRect) {
          for (var _i5 = 0; _i5 < this.resources_.length; _i5++) {
            var _r3 = this.resources_[_i5];
            if (!_r3.isBuilt() && !_r3.isBuilding() && !_r3.hasOwner() && !_r3.element.R1() && _r3.hasBeenMeasured() && _r3.isDisplayed() && _r3.overlaps(loadRect)) {
              this.buildOrScheduleBuildForResource_(_r3, true, true);
            }
            if (_r3.getState() != ResourceState.READY_FOR_LAYOUT || _r3.hasOwner()) {
              continue;
            }
            if (_r3.isDisplayed() && _r3.overlaps(loadRect)) {
              this.scheduleLayoutOrPreload(_r3, true);
            }
          }
        }
        if (this.visible_ && this.isIdle_(now)) {
          var idleScheduledCount = 0;
          for (var _i6 = 0; _i6 < this.resources_.length && idleScheduledCount < 4; _i6++) {
            var _r4 = this.resources_[_i6];
            if (_r4.getState() == ResourceState.READY_FOR_LAYOUT && !_r4.hasOwner() && !_r4.element.R1() && _r4.isDisplayed() && _r4.idleRenderOutsideViewport()) {
              dev().fine(TAG_6, "idleRenderOutsideViewport layout:", _r4.debugid);
              this.scheduleLayoutOrPreload(_r4, false);
              idleScheduledCount++;
            }
          }
          for (var _i7 = 0; _i7 < this.resources_.length && idleScheduledCount < 4; _i7++) {
            var _r5 = this.resources_[_i7];
            if (_r5.getState() == ResourceState.READY_FOR_LAYOUT && !_r5.hasOwner() && !_r5.element.R1() && _r5.isDisplayed()) {
              dev().fine(TAG_6, "idle layout:", _r5.debugid);
              this.scheduleLayoutOrPreload(_r5, false);
              idleScheduledCount++;
            }
          }
        }
      }
    }, {
      key: "isIdle_",
      value: function isIdle_(now) {
        if (now === void 0) {
          now = Date.now();
        }
        var lastDequeueTime = this.exec_.getLastDequeueTime();
        return this.exec_.getSize() == 0 && this.queue_.getSize() == 0 && now > lastDequeueTime + 5e3 && lastDequeueTime > 0;
      }
    }, {
      key: "work_",
      value: function work_() {
        var now = this.win.Date.now();
        var timeout = -1;
        var task = this.queue_.peek(this.boundTaskScorer_);
        while (task) {
          timeout = this.calcTaskTimeout_(task);
          dev().fine(TAG_6, "peek from queue:", task.id, "sched at", task.scheduleTime, "score", this.boundTaskScorer_(task), "timeout", timeout);
          if (timeout > 16) {
            break;
          }
          this.queue_.dequeue(task);
          var executing = this.exec_.getTaskById(task.id);
          if (executing) {
            var reschedule = this.reschedule_.bind(this, task);
            executing.promise.then(reschedule, reschedule);
          } else {
            var _task = task, resource = _task.resource;
            var stillDisplayed = true;
            resource.measure();
            if (stillDisplayed && this.isLayoutAllowed_(resource, task.forceOutsideViewport)) {
              task.promise = task.callback();
              task.startTime = now;
              dev().fine(TAG_6, "exec:", task.id, "at", task.startTime);
              this.exec_.enqueue(task);
              task.promise.then(this.taskComplete_.bind(this, task, true), this.taskComplete_.bind(this, task, false)).catch(reportError);
            } else {
              dev().fine(TAG_6, "cancelled", task.id);
              resource.layoutCanceled();
            }
          }
          task = this.queue_.peek(this.boundTaskScorer_);
          timeout = -1;
        }
        dev().fine(TAG_6, "queue size:", this.queue_.getSize(), "exec size:", this.exec_.getSize());
        if (timeout >= 0) {
          return timeout;
        }
        var nextPassDelay = (now - this.exec_.getLastDequeueTime()) * 2;
        nextPassDelay = Math.max(Math.min(3e4, nextPassDelay), 5e3);
        return nextPassDelay;
      }
    }, {
      key: "calcTaskScore_",
      value: function calcTaskScore_(task) {
        var viewport = this.viewport_.getRect();
        var box = task.resource.getLayoutBox();
        var posPriority = Math.floor((box.top - viewport.top) / viewport.height);
        if (Math.sign(posPriority) != this.getScrollDirection()) {
          posPriority *= 2;
        }
        posPriority = Math.abs(posPriority);
        return task.priority * PRIORITY_BASE_ + posPriority;
      }
    }, {
      key: "calcTaskTimeout_",
      value: function calcTaskTimeout_(task) {
        var now = this.win.Date.now();
        if (this.exec_.getSize() == 0) {
          if (this.firstVisibleTime_ === -1) {
            return 0;
          }
          var penalty = task.priority * PRIORITY_PENALTY_TIME_;
          return Math.max(penalty - (now - this.firstVisibleTime_), 0);
        }
        var timeout = 0;
        this.exec_.forEach(function(other) {
          var penalty2 = Math.max((task.priority - other.priority) * PRIORITY_PENALTY_TIME_, 0);
          timeout = Math.max(timeout, penalty2 - (now - other.startTime));
        });
        return timeout;
      }
    }, {
      key: "reschedule_",
      value: function reschedule_(task) {
        if (!this.queue_.getTaskById(task.id)) {
          this.queue_.enqueue(task);
        }
      }
    }, {
      key: "taskComplete_",
      value: function taskComplete_(task, success, opt_reason) {
        this.exec_.dequeue(task);
        this.schedulePass(POST_TASK_PASS_DELAY_);
        if (!success) {
          dev().info(TAG_6, "task failed:", task.id, task.resource.debugid, opt_reason);
          return Promise.reject(opt_reason);
        }
      }
    }, {
      key: "isLayoutAllowed_",
      value: function isLayoutAllowed_(resource, forceOutsideViewport) {
        if (resource.getState() == ResourceState.NOT_BUILT || !resource.isDisplayed()) {
          return false;
        }
        if (!this.visible_) {
          if (this.ampdoc.getVisibilityState() != VisibilityState.PRERENDER || !resource.prerenderAllowed()) {
            return false;
          }
        }
        if (!forceOutsideViewport && !resource.isInViewport() && !resource.renderOutsideViewport() && !resource.idleRenderOutsideViewport()) {
          return false;
        }
        return true;
      }
    }, {
      key: "scheduleLayoutOrPreload",
      value: function scheduleLayoutOrPreload(resource, layout, opt_parentPriority, opt_forceOutsideViewport) {
        if (resource.element.R1()) {
          return;
        }
        var isBuilt = resource.getState() != ResourceState.NOT_BUILT;
        var isDisplayed = resource.isDisplayed();
        if (!isBuilt || !isDisplayed) {
          devAssert(false, "Not ready for layout: %s (%s)", resource.debugid, resource.getState());
        }
        var forceOutsideViewport = opt_forceOutsideViewport || false;
        if (!this.isLayoutAllowed_(resource, forceOutsideViewport)) {
          return;
        }
        if (layout) {
          this.schedule_(resource, LAYOUT_TASK_ID_, LAYOUT_TASK_OFFSET_, opt_parentPriority || 0, forceOutsideViewport, resource.startLayout.bind(resource));
        } else {
          this.schedule_(resource, PRELOAD_TASK_ID_, PRELOAD_TASK_OFFSET_, opt_parentPriority || 0, forceOutsideViewport, resource.startLayout.bind(resource));
        }
      }
    }, {
      key: "schedule_",
      value: function schedule_(resource, localId, priorityOffset, parentPriority, forceOutsideViewport, callback) {
        var taskId = resource.getTaskId(localId);
        var task = {
          id: taskId,
          resource,
          priority: Math.max(resource.getLayoutPriority(), parentPriority) + priorityOffset,
          forceOutsideViewport,
          callback,
          scheduleTime: this.win.Date.now(),
          startTime: 0,
          promise: null
        };
        dev().fine(TAG_6, "schedule:", task.id, "at", task.scheduleTime);
        var queued = this.queue_.getTaskById(taskId);
        if (!queued || task.priority < queued.priority) {
          if (queued) {
            this.queue_.dequeue(queued);
          }
          this.queue_.enqueue(task);
          this.schedulePass(this.calcTaskTimeout_(task));
        }
        task.resource.layoutScheduled(task.scheduleTime);
      }
    }, {
      key: "whenFirstPass",
      value: function whenFirstPass() {
        return this.firstPassDone_.promise;
      }
    }, {
      key: "setupVisibilityStateMachine_",
      value: function setupVisibilityStateMachine_(vsm) {
        var _this8 = this;
        var hidden = VisibilityState.HIDDEN, inactive = VisibilityState.INACTIVE, paused = VisibilityState.PAUSED, prerender = VisibilityState.PRERENDER, visible = VisibilityState.VISIBLE;
        var doWork = function doWork2() {
          var viewportSize = _this8.viewport_.getSize();
          if (viewportSize.height > 0 && viewportSize.width > 0) {
            if (_this8.hasMutateWork_()) {
              _this8.mutateWork_();
            }
            _this8.discoverWork_();
            var delay = _this8.work_();
            if (_this8.hasMutateWork_()) {
              delay = Math.min(delay, MUTATE_DEFER_DELAY_);
            }
            if (_this8.visible_) {
              if (_this8.schedulePass(delay)) {
                dev().fine(TAG_6, "next pass:", delay);
              } else {
                dev().fine(TAG_6, "pass already scheduled");
              }
            } else {
              dev().fine(TAG_6, "document is not visible: no scheduling");
            }
            _this8.firstPassDone_.resolve();
          }
        };
        var noop = function noop2() {
        };
        var pause = function pause2() {
          _this8.resources_.forEach(function(r) {
            return r.pause();
          });
        };
        var unload = function unload2() {
          _this8.resources_.forEach(function(r) {
            r.unload();
            _this8.cleanupTasks_(r);
          });
          _this8.unselectText_();
        };
        var resume = function resume2() {
          _this8.resources_.forEach(function(r) {
            return r.resume();
          });
          doWork();
        };
        vsm.addTransition(prerender, prerender, doWork);
        vsm.addTransition(prerender, visible, doWork);
        vsm.addTransition(prerender, hidden, doWork);
        vsm.addTransition(prerender, inactive, doWork);
        vsm.addTransition(prerender, paused, doWork);
        vsm.addTransition(visible, visible, doWork);
        vsm.addTransition(visible, hidden, doWork);
        vsm.addTransition(visible, inactive, unload);
        vsm.addTransition(visible, paused, pause);
        vsm.addTransition(hidden, visible, doWork);
        vsm.addTransition(hidden, hidden, doWork);
        vsm.addTransition(hidden, inactive, unload);
        vsm.addTransition(hidden, paused, pause);
        vsm.addTransition(inactive, visible, resume);
        vsm.addTransition(inactive, hidden, resume);
        vsm.addTransition(inactive, inactive, noop);
        vsm.addTransition(inactive, paused, doWork);
        vsm.addTransition(paused, visible, resume);
        vsm.addTransition(paused, hidden, doWork);
        vsm.addTransition(paused, inactive, unload);
        vsm.addTransition(paused, paused, noop);
      }
    }, {
      key: "unselectText_",
      value: function unselectText_() {
        try {
          this.win.getSelection().removeAllRanges();
        } catch (e) {
        }
      }
    }, {
      key: "cleanupTasks_",
      value: function cleanupTasks_(resource, opt_removePending) {
        if (resource.getState() == ResourceState.NOT_LAID_OUT || resource.getState() == ResourceState.READY_FOR_LAYOUT) {
          this.queue_.purge(function(task) {
            return task.resource == resource;
          });
          this.exec_.purge(function(task) {
            return task.resource == resource;
          });
          remove(this.requestsChangeSize_, function(request) {
            return request.resource === resource;
          });
        }
        if (resource.getState() == ResourceState.NOT_BUILT && opt_removePending && this.pendingBuildResources_) {
          var pendingIndex = this.pendingBuildResources_.indexOf(resource);
          if (pendingIndex != -1) {
            this.pendingBuildResources_.splice(pendingIndex, 1);
          }
        }
      }
    }, {
      key: "scrolled_",
      value: function scrolled_(event) {
        var target = event.target;
        if (target.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        if (target === this.viewport_.getScrollingElement()) {
          return;
        }
        var scrolled = dev().assertElement(target);
        if (!this.elementsThatScrolled_.includes(scrolled)) {
          this.elementsThatScrolled_.push(scrolled);
          this.schedulePass(FOUR_FRAME_DELAY_2);
        }
      }
    }]);
    return ResourcesImpl2;
  }();
  function installResourcesServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "resources", ResourcesImpl);
  }

  // src/service/standard-actions-impl.js
  function _classCallCheck35(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties34(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass34(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties34(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties34(Constructor, staticProps);
    return Constructor;
  }
  function isShowable(element) {
    return element.hasAttribute("hidden");
  }
  function getAutofocusElementForShowAction(element) {
    if (element.hasAttribute("autofocus")) {
      return element;
    }
    return element.querySelector("[autofocus]");
  }
  var TAG9 = "STANDARD-ACTIONS";
  var AMP_CSS_RE = /^i-amphtml-/;
  var StandardActions = /* @__PURE__ */ function() {
    function StandardActions2(ampdoc) {
      _classCallCheck35(this, StandardActions2);
      this.ampdoc = ampdoc;
      var context = ampdoc.getHeadNode();
      this.mutator_ = Services.mutatorForDoc(ampdoc);
      this.viewport_ = Services.viewportForDoc(ampdoc);
      this.installActions_(Services.actionServiceForDoc(context));
    }
    _createClass34(StandardActions2, [{
      key: "installActions_",
      value: function installActions_(actionService) {
        actionService.addGlobalTarget("AMP", this.handleAmpTarget_.bind(this));
        actionService.addGlobalMethodHandler("hide", this.handleHide_.bind(this));
        actionService.addGlobalMethodHandler("show", this.handleShow_.bind(this));
        actionService.addGlobalMethodHandler("toggleVisibility", this.handleToggle_.bind(this));
        actionService.addGlobalMethodHandler("scrollTo", this.handleScrollTo_.bind(this));
        actionService.addGlobalMethodHandler("focus", this.handleFocus_.bind(this));
        actionService.addGlobalMethodHandler("toggleClass", this.handleToggleClass_.bind(this));
      }
    }, {
      key: "handleAmpTarget_",
      value: function handleAmpTarget_(invocation) {
        if (!invocation.satisfiesTrust(ActionTrust.DEFAULT)) {
          return null;
        }
        var args = invocation.args, method = invocation.method, node = invocation.node;
        var win = getWin(node);
        switch (method) {
          case "pushState":
          case "setState":
            var element = node.nodeType === Node.DOCUMENT_NODE ? node.documentElement : dev().assertElement(node);
            return Services.bindForDocOrNull(element).then(function(bind) {
              userAssert(bind, "AMP-BIND is not installed.");
              return bind.invoke(invocation);
            });
          case "navigateTo":
            return this.handleNavigateTo_(invocation);
          case "closeOrNavigateTo":
            return this.handleCloseOrNavigateTo_(invocation);
          case "scrollTo":
            userAssert(args["id"], "AMP.scrollTo must provide element ID");
            invocation.node = dev().assertElement(getAmpdoc(node).getElementById(args["id"]), "scrollTo element ID must exist on page");
            return this.handleScrollTo_(invocation);
          case "goBack":
            Services.historyForDoc(this.ampdoc).goBack(!!(args && args["navigate"] === true));
            return null;
          case "print":
            win.print();
            return null;
          case "optoutOfCid":
            return Services.cidForDoc(this.ampdoc).then(function(cid) {
              return cid.optOut();
            }).catch(function(reason) {
              dev().error(TAG9, "Failed to opt out of CID", reason);
            });
        }
        throw user().createError("Unknown AMP action ", method);
      }
    }, {
      key: "handleNavigateTo_",
      value: function handleNavigateTo_(invocation) {
        var _this = this;
        var args = invocation.args, caller = invocation.caller, method = invocation.method, node = invocation.node;
        var win = getWin(node);
        var permission = resolvedPromise();
        if (caller.tagName.startsWith("AMP-")) {
          var ampElement = caller;
          permission = ampElement.getImpl().then(function(impl) {
            if (typeof impl.throwIfCannotNavigate == "function") {
              impl.throwIfCannotNavigate();
            }
          });
        }
        return permission.then(function() {
          Services.navigationForDoc(_this.ampdoc).navigateTo(win, args["url"], "AMP." + method, {
            target: args["target"],
            opener: args["opener"]
          });
        }, function(e) {
          user().error(TAG9, e);
        });
      }
    }, {
      key: "handleCloseOrNavigateTo_",
      value: function handleCloseOrNavigateTo_(invocation) {
        var node = invocation.node;
        var win = getWin(node);
        var hasParent = win.parent != win;
        var canBeClosed = win.opener && this.ampdoc.isSingleDoc() && !hasParent;
        var wasClosed = false;
        if (canBeClosed) {
          win.close();
          wasClosed = win.closed;
        }
        if (!wasClosed) {
          return this.handleNavigateTo_(invocation);
        }
        return resolvedPromise();
      }
    }, {
      key: "handleScrollTo_",
      value: function handleScrollTo_(invocation) {
        var node = dev().assertElement(invocation.node);
        var args = invocation.args;
        var posOrUndef = args && args["position"];
        var durationOrUndef = args && args["duration"];
        if (posOrUndef && !["top", "bottom", "center"].includes(posOrUndef)) {
          posOrUndef = void 0;
        }
        if (!isFiniteNumber(durationOrUndef)) {
          durationOrUndef = void 0;
        }
        return this.viewport_.animateScrollIntoView(node, posOrUndef, durationOrUndef);
      }
    }, {
      key: "handleFocus_",
      value: function handleFocus_(invocation) {
        var node = dev().assertElement(invocation.node);
        tryFocus(node);
        return null;
      }
    }, {
      key: "handleHide_",
      value: function handleHide_(invocation) {
        var target = dev().assertElement(invocation.node);
        if (target.classList.contains("i-amphtml-element")) {
          var ampElement = target;
          this.mutator_.mutateElement(ampElement, function() {
            return ampElement.collapse();
          }, true);
        } else {
          this.mutator_.mutateElement(target, function() {
            return toggle(target, false);
          });
        }
        return null;
      }
    }, {
      key: "handleShow_",
      value: function handleShow_(invocation) {
        var _this2 = this;
        var node = invocation.node;
        var target = dev().assertElement(node);
        var ownerWindow = toWin(target.ownerDocument.defaultView);
        if (target.classList.contains(getLayoutClass(Layout.NODISPLAY))) {
          user().warn(TAG9, "Elements with layout=nodisplay cannot be dynamically shown.", target);
          return null;
        }
        this.mutator_.measureElement(function() {
          if (computedStyle(ownerWindow, target).display == "none" && !isShowable(target)) {
            user().warn(TAG9, 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', target);
          }
        });
        var autofocusElOrNull = getAutofocusElementForShowAction(target);
        if (autofocusElOrNull && Services.platformFor(ownerWindow).isIos()) {
          this.handleShowSync_(target, autofocusElOrNull);
          this.mutator_.mutateElement(target, function() {
          });
        } else {
          this.mutator_.mutateElement(target, function() {
            _this2.handleShowSync_(target, autofocusElOrNull);
          });
        }
        return null;
      }
    }, {
      key: "handleShowSync_",
      value: function handleShowSync_(target, autofocusElOrNull) {
        if (target.classList.contains("i-amphtml-element")) {
          var ampElement = target;
          ampElement.expand();
        } else {
          toggle(target, true);
        }
        if (autofocusElOrNull) {
          tryFocus(autofocusElOrNull);
        }
      }
    }, {
      key: "handleToggle_",
      value: function handleToggle_(invocation) {
        if (isShowable(dev().assertElement(invocation.node))) {
          return this.handleShow_(invocation);
        }
        return this.handleHide_(invocation);
      }
    }, {
      key: "handleToggleClass_",
      value: function handleToggleClass_(invocation) {
        var target = dev().assertElement(invocation.node);
        var args = invocation.args;
        var className = user().assertString(args["class"], "Argument 'class' must be a string.");
        if (AMP_CSS_RE.test(className)) {
          return null;
        }
        this.mutator_.mutateElement(target, function() {
          if (args["force"] !== void 0) {
            var shouldForce = user().assertBoolean(args["force"], "Optional argument 'force' must be a boolean.");
            target.classList.toggle(className, shouldForce);
          } else {
            target.classList.toggle(className);
          }
        });
        return null;
      }
    }]);
    return StandardActions2;
  }();
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }
  function installStandardActionsForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "standard-actions", StandardActions, true);
  }

  // src/service/storage-impl.js
  function _classCallCheck36(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties35(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass35(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties35(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties35(Constructor, staticProps);
    return Constructor;
  }
  var TAG10 = "Storage";
  var MAX_VALUES_PER_ORIGIN = 8;
  var Storage = /* @__PURE__ */ function() {
    function Storage2(ampdoc, viewer, binding) {
      _classCallCheck36(this, Storage2);
      this.ampdoc = ampdoc;
      this.viewer_ = viewer;
      this.binding_ = binding;
      this.isViewerStorage_ = binding instanceof ViewerStorageBinding;
      this.origin_ = getSourceOrigin(this.ampdoc.win.location);
      this.storePromise_ = null;
    }
    _createClass35(Storage2, [{
      key: "start_",
      value: function start_() {
        this.listenToBroadcasts_();
        return this;
      }
    }, {
      key: "get",
      value: function get(name, opt_duration) {
        return this.getStore_().then(function(store2) {
          return store2.get(name, opt_duration);
        });
      }
    }, {
      key: "set",
      value: function set(name, value, opt_isUpdate) {
        devAssert(typeof value == "boolean", "Only boolean values accepted");
        return this.setNonBoolean(name, value, opt_isUpdate);
      }
    }, {
      key: "setNonBoolean",
      value: function setNonBoolean(name, value, opt_isUpdate) {
        return this.saveStore_(function(store2) {
          return store2.set(name, value, opt_isUpdate);
        });
      }
    }, {
      key: "remove",
      value: function remove2(name) {
        return this.saveStore_(function(store2) {
          return store2.remove(name);
        });
      }
    }, {
      key: "isViewerStorage",
      value: function isViewerStorage() {
        return this.isViewerStorage_;
      }
    }, {
      key: "getStore_",
      value: function getStore_() {
        if (!this.storePromise_) {
          this.storePromise_ = this.binding_.loadBlob(this.origin_).then(function(blob) {
            return blob ? parseJson(atob(blob)) : {};
          }).catch(function(reason) {
            dev().expectedError(TAG10, "Failed to load store: ", reason);
            return {};
          }).then(function(obj) {
            return new Store(obj);
          });
        }
        return this.storePromise_;
      }
    }, {
      key: "saveStore_",
      value: function saveStore_(mutator) {
        var _this = this;
        return this.getStore_().then(function(store2) {
          mutator(store2);
          var blob = btoa(JSON.stringify(store2.obj));
          return _this.binding_.saveBlob(_this.origin_, blob);
        }).then(this.broadcastReset_.bind(this));
      }
    }, {
      key: "listenToBroadcasts_",
      value: function listenToBroadcasts_() {
        var _this2 = this;
        this.viewer_.onBroadcast(function(message) {
          if (message["type"] == "amp-storage-reset" && message["origin"] == _this2.origin_) {
            dev().fine(TAG10, "Received reset message");
            _this2.storePromise_ = null;
          }
        });
      }
    }, {
      key: "broadcastReset_",
      value: function broadcastReset_() {
        dev().fine(TAG10, "Broadcasted reset message");
        this.viewer_.broadcast({
          "type": "amp-storage-reset",
          "origin": this.origin_
        });
      }
    }]);
    return Storage2;
  }();
  var Store = /* @__PURE__ */ function() {
    function Store2(obj, opt_maxValues) {
      _classCallCheck36(this, Store2);
      this.obj = recreateNonProtoObject(obj);
      this.maxValues_ = opt_maxValues || MAX_VALUES_PER_ORIGIN;
      this.values_ = this.obj["vv"] || Object.create(null);
      if (!this.obj["vv"]) {
        this.obj["vv"] = this.values_;
      }
    }
    _createClass35(Store2, [{
      key: "get",
      value: function get(name, opt_duration) {
        var item = this.values_[name];
        var timestamp = item ? item["t"] : void 0;
        var isNotExpired = opt_duration && timestamp != void 0 ? timestamp + opt_duration > Date.now() : true;
        var value = item && isNotExpired ? item["v"] : void 0;
        return value;
      }
    }, {
      key: "set",
      value: function set(name, value, opt_isUpdate) {
        devAssert(name != "__proto__" && name != "prototype", "Name is not allowed: %s", name);
        if (this.values_[name] !== void 0) {
          var item = this.values_[name];
          var timestamp = Date.now();
          if (opt_isUpdate) {
            timestamp = item["t"];
          }
          item["v"] = value;
          item["t"] = timestamp;
        } else {
          this.values_[name] = dict({
            "v": value,
            "t": Date.now()
          });
        }
        var keys = Object.keys(this.values_);
        if (keys.length > this.maxValues_) {
          var minTime = Infinity;
          var minKey = null;
          for (var i = 0; i < keys.length; i++) {
            var _item = this.values_[keys[i]];
            if (_item["t"] < minTime) {
              minKey = keys[i];
              minTime = _item["t"];
            }
          }
          if (minKey) {
            delete this.values_[minKey];
          }
        }
      }
    }, {
      key: "remove",
      value: function remove2(name) {
        delete this.values_[name];
      }
    }]);
    return Store2;
  }();
  var LocalStorageBinding = /* @__PURE__ */ function() {
    function LocalStorageBinding2(win) {
      _classCallCheck36(this, LocalStorageBinding2);
      this.win = win;
      this.isLocalStorageSupported_ = this.checkIsLocalStorageSupported_();
      if (!this.isLocalStorageSupported_) {
        var error = new Error("localStorage not supported.");
        dev().expectedError(TAG10, error);
      }
    }
    _createClass35(LocalStorageBinding2, [{
      key: "checkIsLocalStorageSupported_",
      value: function checkIsLocalStorageSupported_() {
        try {
          if (!("localStorage" in this.win)) {
            return false;
          }
          this.win.localStorage.getItem("test");
          return true;
        } catch (e) {
          return false;
        }
      }
    }, {
      key: "getKey_",
      value: function getKey_(origin) {
        return "amp-store:" + origin;
      }
    }, {
      key: "loadBlob",
      value: function loadBlob(origin) {
        var _this3 = this;
        return new Promise(function(resolve) {
          if (!_this3.isLocalStorageSupported_) {
            resolve(null);
            return;
          }
          resolve(_this3.win.localStorage.getItem(_this3.getKey_(origin)));
        });
      }
    }, {
      key: "saveBlob",
      value: function saveBlob(origin, blob) {
        var _this4 = this;
        return new Promise(function(resolve) {
          if (!_this4.isLocalStorageSupported_) {
            resolve();
            return;
          }
          _this4.win.localStorage.setItem(_this4.getKey_(origin), blob);
          resolve();
        });
      }
    }]);
    return LocalStorageBinding2;
  }();
  var ViewerStorageBinding = /* @__PURE__ */ function() {
    function ViewerStorageBinding2(viewer) {
      _classCallCheck36(this, ViewerStorageBinding2);
      this.viewer_ = viewer;
    }
    _createClass35(ViewerStorageBinding2, [{
      key: "loadBlob",
      value: function loadBlob(origin) {
        return this.viewer_.sendMessageAwaitResponse("loadStore", dict({
          "origin": origin
        })).then(function(response) {
          return response["blob"];
        });
      }
    }, {
      key: "saveBlob",
      value: function saveBlob(origin, blob) {
        return this.viewer_.sendMessageAwaitResponse("saveStore", dict({
          "origin": origin,
          "blob": blob
        })).catch(function(reason) {
          throw dev().createExpectedError(TAG10, "Failed to save store: ", reason);
        });
      }
    }]);
    return ViewerStorageBinding2;
  }();
  function installStorageServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "storage", function() {
      var viewer = Services.viewerForDoc(ampdoc);
      var overrideStorage = parseInt(viewer.getParam("storage"), 10);
      var binding = overrideStorage ? new ViewerStorageBinding(viewer) : new LocalStorageBinding(ampdoc.win);
      return new Storage(ampdoc, viewer, binding).start_();
    }, true);
  }

  // src/service/template-impl.js
  function _classCallCheck37(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties36(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass36(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties36(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties36(Constructor, staticProps);
    return Constructor;
  }
  var PROP_ = "__AMP_IMPL_";
  var PROP_PROMISE_ = "__AMP_WAIT_";
  var EMPTY_FUNC = function EMPTY_FUNC2() {
  };
  var Templates = /* @__PURE__ */ function() {
    function Templates2(ampdoc) {
      _classCallCheck37(this, Templates2);
      this.ampdoc_ = ampdoc;
      this.templateClassMap_ = {};
      this.templateClassResolvers_ = {};
    }
    _createClass36(Templates2, [{
      key: "whenReady",
      value: function whenReady(templateElement) {
        return this.getImplementation_(templateElement).then(EMPTY_FUNC);
      }
    }, {
      key: "setHtmlForTemplate",
      value: function setHtmlForTemplate(templateElement, html2) {
        var _this = this;
        return this.getImplementation_(templateElement).then(function(impl) {
          return _this.setHtml_(impl, html2);
        });
      }
    }, {
      key: "renderTemplate",
      value: function renderTemplate(templateElement, data) {
        var _this2 = this;
        return this.getImplementation_(templateElement).then(function(impl) {
          return _this2.render_(impl, data);
        });
      }
    }, {
      key: "renderTemplateAsString",
      value: function renderTemplateAsString(templateElement, data) {
        return this.getImplementation_(templateElement).then(function(impl) {
          return impl.renderAsString(data);
        });
      }
    }, {
      key: "renderTemplateArray",
      value: function renderTemplateArray(templateElement, array) {
        var _this3 = this;
        if (array.length == 0) {
          return Promise.resolve([]);
        }
        return this.getImplementation_(templateElement).then(function(impl) {
          return array.map(function(item) {
            return _this3.render_(impl, item);
          });
        });
      }
    }, {
      key: "findAndRenderTemplate",
      value: function findAndRenderTemplate(parent, data, opt_querySelector) {
        return this.renderTemplate(this.findTemplate(parent, opt_querySelector), data);
      }
    }, {
      key: "findAndSetHtmlForTemplate",
      value: function findAndSetHtmlForTemplate(parent, html2, opt_querySelector) {
        return this.setHtmlForTemplate(this.findTemplate(parent, opt_querySelector), html2);
      }
    }, {
      key: "findAndRenderTemplateArray",
      value: function findAndRenderTemplateArray(parent, array, opt_querySelector) {
        return this.renderTemplateArray(this.findTemplate(parent, opt_querySelector), array);
      }
    }, {
      key: "hasTemplate",
      value: function hasTemplate(parent, opt_querySelector) {
        return !!this.maybeFindTemplate(parent, opt_querySelector);
      }
    }, {
      key: "findTemplate",
      value: function findTemplate(parent, opt_querySelector) {
        var templateElement = this.maybeFindTemplate(parent, opt_querySelector);
        userAssert(templateElement, "Template not found for %s", parent);
        var templateTagName = templateElement.tagName;
        userAssert(templateTagName == "TEMPLATE" || templateTagName == "SCRIPT" && templateElement.getAttribute("type") === "text/plain", 'Template must be defined in a <template> or <script type="text/plain"> tag');
        return templateElement;
      }
    }, {
      key: "maybeFindTemplate",
      value: function maybeFindTemplate(parent, opt_querySelector) {
        var templateId = parent.getAttribute("template");
        if (templateId) {
          var rootNode = rootNodeFor(parent);
          return rootNode.getElementById(templateId);
        } else if (opt_querySelector) {
          return scopedQuerySelector(parent, opt_querySelector);
        } else {
          return parent.querySelector('template[type], script[type="text/plain"]');
        }
      }
    }, {
      key: "getImplementation_",
      value: function getImplementation_(element) {
        var _this4 = this;
        var impl = element[PROP_];
        if (impl) {
          return Promise.resolve(impl);
        }
        var type = "";
        var tagName = element.tagName;
        if (tagName == "TEMPLATE") {
          type = element.getAttribute("type");
        } else if (tagName == "SCRIPT") {
          type = element.getAttribute("template");
        }
        userAssert(type, "Type must be specified: %s", element);
        var promise = element[PROP_PROMISE_];
        if (promise) {
          return promise;
        }
        promise = this.waitForTemplateClass_(element, type).then(function(templateClass) {
          var Constr = templateClass;
          var impl2 = element[PROP_] = new Constr(element, _this4.ampdoc_.win);
          delete element[PROP_PROMISE_];
          return impl2;
        });
        element[PROP_PROMISE_] = promise;
        return promise;
      }
    }, {
      key: "waitForTemplateClass_",
      value: function waitForTemplateClass_(element, type) {
        if (this.templateClassMap_[type]) {
          return this.templateClassMap_[type];
        }
        var deferred = new Deferred();
        var promise = deferred.promise, resolve = deferred.resolve;
        this.templateClassMap_[type] = promise;
        this.templateClassResolvers_[type] = resolve;
        return promise;
      }
    }, {
      key: "registerTemplate_",
      value: function registerTemplate_(type, templateClass) {
        if (!this.templateClassMap_[type]) {
          this.templateClassMap_[type] = Promise.resolve(templateClass);
        } else {
          var resolver = this.templateClassResolvers_[type];
          userAssert(resolver, "Duplicate template type: %s", type);
          delete this.templateClassResolvers_[type];
          resolver(templateClass);
        }
      }
    }, {
      key: "render_",
      value: function render_(impl, data) {
        return impl.render(data);
      }
    }, {
      key: "setHtml_",
      value: function setHtml_(impl, html2) {
        return impl.setHtml(html2);
      }
    }]);
    return Templates2;
  }();
  function installTemplatesServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "templates", Templates);
  }

  // src/service/timer-impl.js
  function _classCallCheck38(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties37(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass37(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties37(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties37(Constructor, staticProps);
    return Constructor;
  }
  var TAG11 = "timer";
  var timersForTesting;
  var Timer = /* @__PURE__ */ function() {
    function Timer2(win) {
      _classCallCheck38(this, Timer2);
      this.win = win;
      this.resolved_ = this.win.Promise.resolve();
      this.taskCount_ = 0;
      this.canceled_ = {};
      this.startTime_ = Date.now();
    }
    _createClass37(Timer2, [{
      key: "timeSinceStart",
      value: function timeSinceStart() {
        return Date.now() - this.startTime_;
      }
    }, {
      key: "delay",
      value: function delay(callback, opt_delay) {
        var _this = this;
        if (!opt_delay) {
          var id = "p" + this.taskCount_++;
          this.resolved_.then(function() {
            if (_this.canceled_[id]) {
              delete _this.canceled_[id];
              return;
            }
            callback();
          }).catch(reportError);
          return id;
        }
        var wrapped = function wrapped2() {
          try {
            callback();
          } catch (e) {
            reportError(e);
            throw e;
          }
        };
        var index = this.win.setTimeout(wrapped, opt_delay);
        if (getMode().test) {
          if (!timersForTesting) {
            timersForTesting = [];
          }
          timersForTesting.push(index);
        }
        return index;
      }
    }, {
      key: "cancel",
      value: function cancel(timeoutId) {
        if (typeof timeoutId == "string") {
          this.canceled_[timeoutId] = true;
          return;
        }
        this.win.clearTimeout(timeoutId);
      }
    }, {
      key: "promise",
      value: function promise(opt_delay) {
        var _this2 = this;
        return new this.win.Promise(function(resolve) {
          var timerKey = _this2.delay(resolve, opt_delay);
          if (timerKey == -1) {
            throw new Error("Failed to schedule timer.");
          }
        });
      }
    }, {
      key: "timeoutPromise",
      value: function timeoutPromise(delay, opt_racePromise, opt_message) {
        var _this3 = this;
        var timerKey;
        var delayPromise = new this.win.Promise(function(_resolve, reject) {
          timerKey = _this3.delay(function() {
            reject(user().createError(opt_message || "timeout"));
          }, delay);
          if (timerKey == -1) {
            throw new Error("Failed to schedule timer.");
          }
        });
        if (!opt_racePromise) {
          return delayPromise;
        }
        var cancel = function cancel2() {
          _this3.cancel(timerKey);
        };
        opt_racePromise.then(cancel, cancel);
        return this.win.Promise.race([delayPromise, opt_racePromise]);
      }
    }, {
      key: "poll",
      value: function poll(delay, predicate) {
        var _this4 = this;
        return new this.win.Promise(function(resolve) {
          var interval = _this4.win.setInterval(function() {
            if (predicate()) {
              _this4.win.clearInterval(interval);
              resolve();
            }
          }, delay);
        });
      }
    }]);
    return Timer2;
  }();
  function installTimerInEmbedWindow(embedWin) {
    registerServiceBuilderInEmbedWin(embedWin, TAG11, Timer);
  }

  // src/service/url-impl.js
  function _classCallCheck39(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties38(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass38(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties38(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties38(Constructor, staticProps);
    return Constructor;
  }
  var SERVICE = "url";
  var Url = /* @__PURE__ */ function() {
    function Url2(ampdoc) {
      _classCallCheck39(this, Url2);
      var root = ampdoc.getRootNode();
      var doc = root.ownerDocument || root;
      this.anchor_ = doc.createElement("a");
      this.cache_ = false ? null : new LruCache(100);
    }
    _createClass38(Url2, [{
      key: "parse",
      value: function parse(url, opt_nocache) {
        return parseUrlWithA(this.anchor_, url, opt_nocache ? null : this.cache_);
      }
    }, {
      key: "parse_",
      value: function parse_(url) {
        if (typeof url !== "string") {
          return url;
        }
        return this.parse(url);
      }
    }, {
      key: "isProtocolValid",
      value: function isProtocolValid2(url) {
        return isProtocolValid(url);
      }
    }, {
      key: "getSourceOrigin",
      value: function getSourceOrigin2(url) {
        return getSourceOrigin(this.parse_(url));
      }
    }, {
      key: "getSourceUrl",
      value: function getSourceUrl2(url) {
        return getSourceUrl(this.parse_(url));
      }
    }, {
      key: "resolveRelativeUrl",
      value: function resolveRelativeUrl2(relativeUrlString, baseUrl) {
        return resolveRelativeUrl(relativeUrlString, this.parse_(baseUrl));
      }
    }, {
      key: "assertHttpsUrl",
      value: function assertHttpsUrl2(urlString, elementContext, sourceName) {
        if (sourceName === void 0) {
          sourceName = "source";
        }
        return assertHttpsUrl(urlString, elementContext, sourceName);
      }
    }, {
      key: "assertAbsoluteHttpOrHttpsUrl",
      value: function assertAbsoluteHttpOrHttpsUrl2(urlString) {
        return assertAbsoluteHttpOrHttpsUrl(urlString);
      }
    }, {
      key: "isProxyOrigin",
      value: function isProxyOrigin2(url) {
        return isProxyOrigin(this.parse_(url));
      }
    }, {
      key: "isSecure",
      value: function isSecure(url) {
        return isSecureUrlDeprecated(this.parse_(url));
      }
    }, {
      key: "getWinOrigin",
      value: function getWinOrigin2(win) {
        return win.origin || this.parse_(win.location.href).origin;
      }
    }, {
      key: "getCdnUrlOnOrigin",
      value: function getCdnUrlOnOrigin(resourceUrl) {
        if (isProxyOrigin(resourceUrl)) {
          return resourceUrl;
        }
        var _this$parse_ = this.parse_(resourceUrl), hash = _this$parse_.hash, host = _this$parse_.host, pathname = _this$parse_.pathname, search = _this$parse_.search;
        var encodedHost = encodeURIComponent(host);
        return urls.cdn + "/c/" + encodedHost + pathname + search + hash;
      }
    }]);
    return Url2;
  }();
  function installUrlForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, SERVICE, Url, true);
  }

  // src/service/url-expander/expander.js
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  function _classCallCheck40(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties39(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass39(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties39(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties39(Constructor, staticProps);
    return Constructor;
  }
  var PARSER_IGNORE_FLAG = "`";
  var TAG12 = "Expander";
  var Expander = /* @__PURE__ */ function() {
    function Expander2(variableSource, opt_bindings, opt_collectVars, opt_sync, opt_allowlist, opt_noEncode) {
      _classCallCheck40(this, Expander2);
      this.variableSource_ = variableSource;
      this.bindings_ = opt_bindings;
      this.collectVars_ = opt_collectVars;
      this.sync_ = opt_sync;
      this.allowlist_ = opt_allowlist;
      this.encode_ = !opt_noEncode;
    }
    _createClass39(Expander2, [{
      key: "expand",
      value: function expand(url) {
        if (!url.length) {
          return this.sync_ ? url : Promise.resolve(url);
        }
        var expr = this.variableSource_.getExpr(this.bindings_, this.allowlist_);
        var matches2 = this.findMatches_(url, expr);
        if (!matches2.length) {
          return this.sync_ ? url : Promise.resolve(url);
        }
        return this.parseUrlRecursively_(url, matches2);
      }
    }, {
      key: "getMacroNames",
      value: function getMacroNames(url) {
        var expr = this.variableSource_.getExpr(this.bindings_, this.allowlist_);
        var matches2 = url.match(expr);
        if (matches2) {
          return matches2;
        }
        return [];
      }
    }, {
      key: "findMatches_",
      value: function findMatches_(url, expression) {
        var matches2 = [];
        url.replace(expression, function(match, name, startPosition) {
          var length = match.length;
          var stopPosition = length + startPosition - 1;
          var info = {
            start: startPosition,
            stop: stopPosition,
            name,
            length
          };
          matches2.push(info);
        });
        return matches2;
      }
    }, {
      key: "parseUrlRecursively_",
      value: function parseUrlRecursively_(url, matches2) {
        var _this = this;
        var stack = [];
        var urlIndex = 0;
        var matchIndex = 0;
        var match = matches2[matchIndex];
        var numOfPendingCalls = 0;
        var ignoringChars = false;
        var evaluateNextLevel = function evaluateNextLevel2(encode) {
          var builder = "";
          var results = [];
          var args = [];
          while (urlIndex < url.length && matchIndex <= matches2.length) {
            var trimmedBuilder = builder.trim();
            if (match && urlIndex === match.start) {
              if (trimmedBuilder) {
                results.push(numOfPendingCalls ? trimStart(builder) : builder);
              }
              var binding = void 0;
              if (_this.bindings_ && hasOwn(_this.bindings_, match.name)) {
                binding = {
                  name: match.name,
                  prioritized: _this.bindings_[match.name],
                  encode
                };
              } else {
                binding = _extends3({}, _this.variableSource_.get(match.name), {
                  name: match.name,
                  encode
                });
              }
              urlIndex = match.stop + 1;
              match = matches2[++matchIndex];
              if (url[urlIndex] === "(") {
                urlIndex++;
                numOfPendingCalls++;
                stack.push(binding);
                results.push(evaluateNextLevel2(false));
              } else {
                results.push(_this.evaluateBinding_(binding));
              }
              builder = "";
            } else if (url[urlIndex] === PARSER_IGNORE_FLAG) {
              if (!ignoringChars) {
                ignoringChars = true;
                if (trimmedBuilder) {
                  results.push(trimmedBuilder);
                }
              } else {
                ignoringChars = false;
                if (builder.length) {
                  results.push(builder);
                }
              }
              builder = "";
              urlIndex++;
            } else if (numOfPendingCalls && url[urlIndex] === "," && !ignoringChars) {
              if (trimmedBuilder) {
                results.push(trimmedBuilder);
              }
              args.push(results);
              results = [];
              if (url[urlIndex + 1] === ",") {
                args.push([""]);
                urlIndex++;
              }
              builder = "";
              urlIndex++;
            } else if (numOfPendingCalls && url[urlIndex] === ")" && !ignoringChars) {
              urlIndex++;
              numOfPendingCalls--;
              var _binding = stack.pop();
              if (trimmedBuilder) {
                results.push(trimmedBuilder);
              }
              args.push(results);
              var value = _this.evaluateBinding_(_binding, args);
              return value;
            } else {
              builder += url[urlIndex];
              urlIndex++;
            }
            if (urlIndex === url.length && builder.length) {
              results.push(builder);
            }
          }
          if (_this.sync_) {
            return results.join("");
          }
          return Promise.all(results).then(function(promiseArray) {
            return promiseArray.join("");
          }).catch(function(e) {
            rethrowAsync(e);
            return "";
          });
        };
        return evaluateNextLevel(this.encode_);
      }
    }, {
      key: "evaluateBinding_",
      value: function evaluateBinding_(bindingInfo, opt_args) {
        var encode = bindingInfo.encode, name = bindingInfo.name;
        var binding;
        if (bindingInfo.prioritized != void 0) {
          binding = bindingInfo.prioritized;
        } else if (this.sync_ && bindingInfo.sync != void 0) {
          binding = bindingInfo.sync;
        } else if (this.sync_) {
          user().error(TAG12, "ignoring async replacement key: ", bindingInfo.name);
          binding = "";
        } else {
          binding = bindingInfo.async || bindingInfo.sync;
        }
        if (this.sync_) {
          var result = this.evaluateBindingSync_(binding, name, opt_args);
          return encode ? encodeURIComponent(result) : result;
        } else {
          return this.evaluateBindingAsync_(binding, name, opt_args).then(function(result2) {
            return encode ? encodeURIComponent(result2) : result2;
          });
        }
      }
    }, {
      key: "evaluateBindingAsync_",
      value: function evaluateBindingAsync_(binding, name, opt_args) {
        var _this2 = this;
        var value;
        try {
          if (typeof binding === "function") {
            var bindingFunc = binding;
            if (opt_args) {
              value = this.processArgsAsync_(opt_args).then(function(args) {
                return bindingFunc.apply(null, args);
              });
            } else {
              value = tryResolve(bindingFunc);
            }
          } else {
            value = Promise.resolve(binding);
          }
          return value.then(function(val) {
            _this2.maybeCollectVars_(name, val, opt_args);
            var result;
            if (val == null) {
              result = "";
            } else {
              result = val;
            }
            return result;
          }).catch(function(e) {
            rethrowAsync(e);
            _this2.maybeCollectVars_(name, "", opt_args);
            return Promise.resolve("");
          });
        } catch (e) {
          rethrowAsync(e);
          this.maybeCollectVars_(name, "", opt_args);
          return Promise.resolve("");
        }
      }
    }, {
      key: "processArgsAsync_",
      value: function processArgsAsync_(argsArray) {
        return Promise.all(argsArray.map(function(argArray) {
          return Promise.all(argArray).then(function(resolved3) {
            return resolved3.join("");
          });
        }));
      }
    }, {
      key: "evaluateBindingSync_",
      value: function evaluateBindingSync_(binding, name, opt_args) {
        try {
          var value = binding;
          if (typeof binding === "function") {
            value = binding.apply(null, this.processArgsSync_(opt_args));
          }
          var result;
          if (value && typeof value.then == "function") {
            user().error(TAG12, "ignoring async macro resolution");
            result = "";
          } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
            this.maybeCollectVars_(name, value, opt_args);
            result = value.toString();
          } else {
            this.maybeCollectVars_(name, "", opt_args);
            result = "";
          }
          return result;
        } catch (e) {
          rethrowAsync(e);
          this.maybeCollectVars_(name, "", opt_args);
          return "";
        }
      }
    }, {
      key: "processArgsSync_",
      value: function processArgsSync_(argsArray) {
        if (!argsArray) {
          return argsArray;
        }
        return argsArray.map(function(argArray) {
          return argArray.join("");
        });
      }
    }, {
      key: "maybeCollectVars_",
      value: function maybeCollectVars_(name, value, opt_args) {
        if (!this.collectVars_) {
          return;
        }
        var args = "";
        if (opt_args) {
          var rawArgs = opt_args.filter(function(arg) {
            return arg !== "";
          }).join(",");
          args = "(" + rawArgs + ")";
        }
        this.collectVars_["" + name + args] = value || "";
      }
    }]);
    return Expander2;
  }();

  // src/service/url-replacements-impl.js
  function _classCallCheck41(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties40(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass40(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties40(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties40(Constructor, staticProps);
    return Constructor;
  }
  function _inherits3(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass2, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var TAG13 = "UrlReplacements";
  var EXPERIMENT_DELIMITER = "!";
  var VARIANT_DELIMITER = ".";
  var GEO_DELIM = ",";
  var ORIGINAL_HREF_PROPERTY = "amp-original-href";
  var ORIGINAL_VALUE_PROPERTY = "amp-original-value";
  function dateMethod(method) {
    return function() {
      return new Date()[method]();
    };
  }
  function screenProperty(screen, property) {
    return function() {
      return screen[property];
    };
  }
  var GlobalVariableSource = /* @__PURE__ */ function(_VariableSource) {
    _inherits3(GlobalVariableSource2, _VariableSource);
    var _super = _createSuper3(GlobalVariableSource2);
    function GlobalVariableSource2() {
      _classCallCheck41(this, GlobalVariableSource2);
      return _super.apply(this, arguments);
    }
    _createClass40(GlobalVariableSource2, [{
      key: "setTimingResolver_",
      value: function setTimingResolver_(varName, startEvent, endEvent) {
        var _this = this;
        return this.setBoth(varName, function() {
          return getTimingDataSync(_this.ampdoc.win, startEvent, endEvent);
        }, function() {
          return getTimingDataAsync(_this.ampdoc.win, startEvent, endEvent);
        });
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var _this2 = this;
        var win = this.ampdoc.win;
        var element = this.ampdoc.getHeadNode();
        var viewport = Services.viewportForDoc(this.ampdoc);
        this.set("RANDOM", function() {
          return Math.random();
        });
        var counterStore = Object.create(null);
        this.set("COUNTER", function(scope) {
          return counterStore[scope] = (counterStore[scope] | 0) + 1;
        });
        this.set("CANONICAL_URL", function() {
          return _this2.getDocInfo_().canonicalUrl;
        });
        this.set("CANONICAL_HOST", function() {
          return parseUrlDeprecated(_this2.getDocInfo_().canonicalUrl).host;
        });
        this.set("CANONICAL_HOSTNAME", function() {
          return parseUrlDeprecated(_this2.getDocInfo_().canonicalUrl).hostname;
        });
        this.set("CANONICAL_PATH", function() {
          return parseUrlDeprecated(_this2.getDocInfo_().canonicalUrl).pathname;
        });
        this.setAsync("DOCUMENT_REFERRER", function() {
          return Services.viewerForDoc(_this2.ampdoc).getReferrerUrl();
        });
        this.setAsync("EXTERNAL_REFERRER", function() {
          return Services.viewerForDoc(_this2.ampdoc).getReferrerUrl().then(function(referrer) {
            if (!referrer) {
              return null;
            }
            var referrerHostname = parseUrlDeprecated(getSourceUrl(referrer)).hostname;
            var currentHostname = WindowInterface.getHostname(win);
            return referrerHostname === currentHostname ? null : referrer;
          });
        });
        this.set("TITLE", function() {
          var doc = win.document;
          return doc["originalTitle"] || doc.title;
        });
        this.set("AMPDOC_URL", function() {
          return removeFragment(_this2.addReplaceParamsIfMissing_(win.location.href));
        });
        this.set("AMPDOC_HOST", function() {
          var url = parseUrlDeprecated(win.location.href);
          return url && url.host;
        });
        this.set("AMPDOC_HOSTNAME", function() {
          var url = parseUrlDeprecated(win.location.href);
          return url && url.hostname;
        });
        var expandSourceUrl = function expandSourceUrl2() {
          var docInfo = _this2.getDocInfo_();
          return removeFragment(_this2.addReplaceParamsIfMissing_(docInfo.sourceUrl));
        };
        this.setBoth("SOURCE_URL", function() {
          return expandSourceUrl();
        }, function() {
          return getTrackImpressionPromise().then(function() {
            return expandSourceUrl();
          });
        });
        this.set("SOURCE_HOST", function() {
          return parseUrlDeprecated(_this2.getDocInfo_().sourceUrl).host;
        });
        this.set("SOURCE_HOSTNAME", function() {
          return parseUrlDeprecated(_this2.getDocInfo_().sourceUrl).hostname;
        });
        this.set("SOURCE_PATH", function() {
          return parseUrlDeprecated(_this2.getDocInfo_().sourceUrl).pathname;
        });
        this.set("PAGE_VIEW_ID", function() {
          return _this2.getDocInfo_().pageViewId;
        });
        this.setAsync("PAGE_VIEW_ID_64", function() {
          return _this2.getDocInfo_().pageViewId64;
        });
        this.setBoth("QUERY_PARAM", function(param, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = "";
          }
          return _this2.getQueryParamData_(param, defaultValue);
        }, function(param, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = "";
          }
          return getTrackImpressionPromise().then(function() {
            return _this2.getQueryParamData_(param, defaultValue);
          });
        });
        this.set("FRAGMENT_PARAM", function(param, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = "";
          }
          return _this2.getFragmentParamData_(param, defaultValue);
        });
        var clientIds = null;
        this.setBoth("CLIENT_ID", function(scope) {
          if (!clientIds) {
            return null;
          }
          return clientIds[scope];
        }, function(scope, opt_userNotificationId, opt_cookieName, opt_disableBackup) {
          userAssert(scope, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
          var consent = resolvedPromise();
          if (opt_userNotificationId) {
            consent = Services.userNotificationManagerForDoc(element).then(function(service) {
              return service.get(opt_userNotificationId);
            });
          }
          return Services.cidForDoc(_this2.ampdoc).then(function(cid) {
            opt_disableBackup = opt_disableBackup == "true" ? true : false;
            return cid.get({
              scope,
              createCookieIfNotPresent: true,
              cookieName: opt_cookieName || void 0,
              disableBackup: opt_disableBackup
            }, consent);
          }).then(function(cid) {
            if (!clientIds) {
              clientIds = Object.create(null);
            }
            var cookieName = opt_cookieName || scope;
            if (cid && cookieName == "_ga") {
              if (typeof cid === "string") {
                cid = extractClientIdFromGaCookie(cid);
              } else {
                dev().error(TAG13, "non-string cid, what is it?", Object.keys(cid));
              }
            }
            clientIds[scope] = cid;
            return cid;
          });
        });
        this.setAsync("VARIANT", function(experiment) {
          return _this2.getVariantsValue_(function(variants) {
            var variant = variants[experiment];
            userAssert(variant !== void 0, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + experiment);
            return variant === null ? "none" : variant;
          }, "VARIANT");
        });
        this.setAsync("VARIANTS", function() {
          return _this2.getVariantsValue_(function(variants) {
            var experiments = [];
            for (var experiment in variants) {
              var variant = variants[experiment];
              experiments.push(experiment + VARIANT_DELIMITER + (variant || "none"));
            }
            return experiments.join(EXPERIMENT_DELIMITER);
          }, "VARIANTS");
        });
        this.setAsync("AMP_GEO", function(geoType) {
          return _this2.getGeo_(function(geos) {
            if (geoType) {
              userAssert(geoType === "ISOCountry", "The value passed to AMP_GEO() is not valid name:" + geoType);
              return geos[geoType] || "unknown";
            }
            return geos.matchedISOCountryGroups.join(GEO_DELIM);
          }, "AMP_GEO");
        });
        this.set("TIMESTAMP", dateMethod("getTime"));
        this.set("TIMESTAMP_ISO", dateMethod("toISOString"));
        this.set("TIMEZONE", dateMethod("getTimezoneOffset"));
        this.set("SCROLL_HEIGHT", function() {
          return viewport.getScrollHeight();
        });
        this.set("SCROLL_WIDTH", function() {
          return viewport.getScrollWidth();
        });
        this.set("VIEWPORT_HEIGHT", function() {
          return viewport.getHeight();
        });
        this.set("VIEWPORT_WIDTH", function() {
          return viewport.getWidth();
        });
        var screen = win.screen;
        this.set("SCREEN_WIDTH", screenProperty(screen, "width"));
        this.set("SCREEN_HEIGHT", screenProperty(screen, "height"));
        this.set("AVAILABLE_SCREEN_HEIGHT", screenProperty(screen, "availHeight"));
        this.set("AVAILABLE_SCREEN_WIDTH", screenProperty(screen, "availWidth"));
        this.set("SCREEN_COLOR_DEPTH", screenProperty(screen, "colorDepth"));
        this.set("DOCUMENT_CHARSET", function() {
          var doc = win.document;
          return doc.characterSet || doc.charset;
        });
        this.set("BROWSER_LANGUAGE", function() {
          var nav = win.navigator;
          return (nav.language || nav["userLanguage"] || nav.browserLanguage || "").toLowerCase();
        });
        this.set("USER_AGENT", function() {
          return win.navigator.userAgent;
        });
        this.setTimingResolver_("PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
        this.setTimingResolver_("DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
        this.setTimingResolver_("TCP_CONNECT_TIME", "connectStart", "connectEnd");
        this.setTimingResolver_("SERVER_RESPONSE_TIME", "requestStart", "responseStart");
        this.setTimingResolver_("PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
        this.setTimingResolver_("REDIRECT_TIME", "navigationStart", "fetchStart");
        this.setTimingResolver_("DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
        this.setTimingResolver_("CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
        this.setAsync("ACCESS_READER_ID", function() {
          return _this2.getAccessValue_(function(accessService) {
            return accessService.getAccessReaderId();
          }, "ACCESS_READER_ID");
        });
        this.setAsync("AUTHDATA", function(field) {
          userAssert(field, "The first argument to AUTHDATA, the field, is required");
          return _this2.getAccessValue_(function(accessService) {
            return accessService.getAuthdataField(field);
          }, "AUTHDATA");
        });
        this.setAsync("VIEWER", function() {
          return Services.viewerForDoc(_this2.ampdoc).getViewerOrigin().then(function(viewer) {
            return viewer == void 0 ? "" : viewer;
          });
        });
        this.setAsync("TOTAL_ENGAGED_TIME", function() {
          return Services.activityForDoc(element).then(function(activity) {
            return activity.getTotalEngagedTime();
          });
        });
        this.setAsync("INCREMENTAL_ENGAGED_TIME", function(name, reset) {
          return Services.activityForDoc(element).then(function(activity) {
            return activity.getIncrementalEngagedTime(name, reset !== "false");
          });
        });
        this.set("NAV_TIMING", function(startAttribute, endAttribute) {
          userAssert(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
          return getTimingDataSync(win, startAttribute, endAttribute);
        });
        this.setAsync("NAV_TIMING", function(startAttribute, endAttribute) {
          userAssert(startAttribute, "The first argument to NAV_TIMING, the start attribute name, is required");
          return getTimingDataAsync(win, startAttribute, endAttribute);
        });
        this.set("NAV_TYPE", function() {
          return getNavigationData(win, "type");
        });
        this.set("NAV_REDIRECT_COUNT", function() {
          return getNavigationData(win, "redirectCount");
        });
        this.set("AMP_VERSION", function() {
          return internalRuntimeVersion();
        });
        this.set("BACKGROUND_STATE", function() {
          return _this2.ampdoc.isVisible() ? "0" : "1";
        });
        this.setAsync("VIDEO_STATE", function(id, property) {
          return Services.videoManagerForDoc(_this2.ampdoc).getVideoStateProperty(id, property);
        });
        this.setAsync("AMP_STATE", function(key) {
          var root = _this2.ampdoc.getRootNode();
          var element2 = root.documentElement || root;
          return Services.bindForDocOrNull(element2).then(function(bind) {
            if (!bind) {
              return "";
            }
            return bind.getStateValue(key) || "";
          });
        });
      }
    }, {
      key: "addReplaceParamsIfMissing_",
      value: function addReplaceParamsIfMissing_(orig) {
        var _this$getDocInfo_ = this.getDocInfo_(), replaceParams = _this$getDocInfo_.replaceParams;
        if (!replaceParams) {
          return orig;
        }
        return addMissingParamsToUrl(removeAmpJsParamsFromUrl(orig), replaceParams);
      }
    }, {
      key: "getDocInfo_",
      value: function getDocInfo_() {
        return Services.documentInfoForDoc(this.ampdoc);
      }
    }, {
      key: "getAccessValue_",
      value: function getAccessValue_(getter, expr) {
        var element = this.ampdoc.getHeadNode();
        return Promise.all([Services.accessServiceForDocOrNull(element), Services.subscriptionsServiceForDocOrNull(element)]).then(function(services) {
          var accessService = services[0];
          var subscriptionService = services[1];
          var service = accessService || subscriptionService;
          if (!service) {
            user().error(TAG13, "Access or subsciptions service is not installed to access: ", expr);
            return null;
          }
          if (accessService && subscriptionService) {
            return getter(subscriptionService) || getter(accessService);
          }
          return getter(service);
        });
      }
    }, {
      key: "getQueryParamData_",
      value: function getQueryParamData_(param, defaultValue) {
        userAssert(param, "The first argument to QUERY_PARAM, the query string param is required");
        var url = parseUrlDeprecated(removeAmpJsParamsFromUrl(this.ampdoc.win.location.href));
        var params = parseQueryString(url.search);
        var _this$getDocInfo_2 = this.getDocInfo_(), replaceParams = _this$getDocInfo_2.replaceParams;
        if (typeof params[param] !== "undefined") {
          return params[param];
        }
        if (replaceParams && typeof replaceParams[param] !== "undefined") {
          return replaceParams[param];
        }
        return defaultValue;
      }
    }, {
      key: "getFragmentParamData_",
      value: function getFragmentParamData_(param, defaultValue) {
        userAssert(param, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
        userAssert(typeof param == "string", "param should be a string");
        var hash = this.ampdoc.win.location["originalHash"];
        var params = parseQueryString(hash);
        return params[param] === void 0 ? defaultValue : params[param];
      }
    }, {
      key: "getVariantsValue_",
      value: function getVariantsValue_(getter, expr) {
        return Services.variantsForDocOrNull(this.ampdoc.getHeadNode()).then(function(variants) {
          userAssert(variants, "To use variable %s, amp-experiment should be configured", expr);
          return variants.getVariants();
        }).then(function(variantsMap) {
          return getter(variantsMap);
        });
      }
    }, {
      key: "getGeo_",
      value: function getGeo_(getter, expr) {
        var element = this.ampdoc.getHeadNode();
        return Services.geoForDocOrNull(element).then(function(geo) {
          userAssert(geo, "To use variable %s, amp-geo should be configured", expr);
          return getter(geo);
        });
      }
    }]);
    return GlobalVariableSource2;
  }(VariableSource);
  var UrlReplacements = /* @__PURE__ */ function() {
    function UrlReplacements2(ampdoc, variableSource) {
      _classCallCheck41(this, UrlReplacements2);
      this.ampdoc = ampdoc;
      this.variableSource_ = variableSource;
    }
    _createClass40(UrlReplacements2, [{
      key: "expandStringSync",
      value: function expandStringSync(source, opt_bindings, opt_allowlist) {
        return new Expander(this.variableSource_, opt_bindings, void 0, true, opt_allowlist, true).expand(source);
      }
    }, {
      key: "expandStringAsync",
      value: function expandStringAsync(source, opt_bindings, opt_allowlist) {
        return new Expander(this.variableSource_, opt_bindings, void 0, void 0, opt_allowlist, true).expand(source);
      }
    }, {
      key: "expandUrlSync",
      value: function expandUrlSync(url, opt_bindings, opt_allowlist) {
        return this.ensureProtocolMatches_(url, new Expander(this.variableSource_, opt_bindings, void 0, true, opt_allowlist).expand(url));
      }
    }, {
      key: "expandUrlAsync",
      value: function expandUrlAsync(url, opt_bindings, opt_allowlist, opt_noEncode) {
        var _this3 = this;
        return new Expander(this.variableSource_, opt_bindings, void 0, void 0, opt_allowlist, opt_noEncode).expand(url).then(function(replacement) {
          return _this3.ensureProtocolMatches_(url, replacement);
        });
      }
    }, {
      key: "expandInputValueAsync",
      value: function expandInputValueAsync(element) {
        return this.expandInputValue_(element, false);
      }
    }, {
      key: "expandInputValueSync",
      value: function expandInputValueSync(element) {
        return this.expandInputValue_(element, true);
      }
    }, {
      key: "expandInputValue_",
      value: function expandInputValue_(element, opt_sync) {
        devAssert(element.tagName == "INPUT" && (element.getAttribute("type") || "").toLowerCase() == "hidden", "Input value expansion only works on hidden input fields: %s", element);
        var allowlist = this.getAllowlistForElement_(element);
        if (!allowlist) {
          return opt_sync ? element.value : Promise.resolve(element.value);
        }
        if (element[ORIGINAL_VALUE_PROPERTY] === void 0) {
          element[ORIGINAL_VALUE_PROPERTY] = element.value;
        }
        var result = new Expander(this.variableSource_, void 0, void 0, opt_sync, allowlist).expand(element[ORIGINAL_VALUE_PROPERTY] || element.value);
        if (opt_sync) {
          return element.value = result;
        }
        return result.then(function(newValue) {
          element.value = newValue;
          return newValue;
        });
      }
    }, {
      key: "getAllowlistForElement_",
      value: function getAllowlistForElement_(element, opt_supportedReplacement) {
        var allowlist = element.getAttribute("data-amp-replace");
        if (!allowlist) {
          return;
        }
        var requestedReplacements = {};
        allowlist.trim().split(/\s+/).forEach(function(replacement) {
          if (!opt_supportedReplacement || hasOwn(opt_supportedReplacement, replacement)) {
            requestedReplacements[replacement] = true;
          } else {
            user().warn("URL", "Ignoring unsupported replacement", replacement);
          }
        });
        return requestedReplacements;
      }
    }, {
      key: "isAllowedOrigin_",
      value: function isAllowedOrigin_(url) {
        var docInfo = Services.documentInfoForDoc(this.ampdoc);
        if (url.origin == parseUrlDeprecated(docInfo.canonicalUrl).origin || url.origin == parseUrlDeprecated(docInfo.sourceUrl).origin) {
          return true;
        }
        var meta = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin");
        if (meta) {
          var allowlist = meta.trim().split(/\s+/);
          for (var i = 0; i < allowlist.length; i++) {
            if (url.origin == parseUrlDeprecated(allowlist[i]).origin) {
              return true;
            }
          }
        }
        return false;
      }
    }, {
      key: "maybeExpandLink",
      value: function maybeExpandLink(element, defaultUrlParams) {
        devAssert(element.tagName == "A");
        var aElement = element;
        var supportedReplacements = {
          "CLIENT_ID": true,
          "QUERY_PARAM": true,
          "PAGE_VIEW_ID": true,
          "PAGE_VIEW_ID_64": true,
          "NAV_TIMING": true
        };
        var additionalUrlParameters = aElement.getAttribute("data-amp-addparams") || "";
        var allowlist = this.getAllowlistForElement_(aElement, supportedReplacements);
        if (!allowlist && !additionalUrlParameters && !defaultUrlParams) {
          return;
        }
        var href = dev().assertString(aElement[ORIGINAL_HREF_PROPERTY] || aElement.getAttribute("href"));
        var url = parseUrlDeprecated(href);
        if (aElement[ORIGINAL_HREF_PROPERTY] == null) {
          aElement[ORIGINAL_HREF_PROPERTY] = href;
        }
        var isAllowedOrigin = this.isAllowedOrigin_(url);
        if (additionalUrlParameters) {
          additionalUrlParameters = isAllowedOrigin ? this.expandSyncIfAllowedList_(additionalUrlParameters, allowlist) : additionalUrlParameters;
          href = addParamsToUrl(href, parseQueryString(additionalUrlParameters));
        }
        if (!isAllowedOrigin) {
          if (allowlist) {
            user().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", href);
          }
          return aElement.href = href;
        }
        if (defaultUrlParams) {
          if (!allowlist || !allowlist["QUERY_PARAM"]) {
            var overrideAllowlist = {
              "QUERY_PARAM": true
            };
            defaultUrlParams = this.expandUrlSync(defaultUrlParams, void 0, overrideAllowlist);
          }
          href = addParamsToUrl(href, parseQueryString(defaultUrlParams));
        }
        href = this.expandSyncIfAllowedList_(href, allowlist);
        return aElement.href = href;
      }
    }, {
      key: "expandSyncIfAllowedList_",
      value: function expandSyncIfAllowedList_(href, allowlist) {
        return allowlist ? this.expandUrlSync(href, void 0, allowlist) : href;
      }
    }, {
      key: "collectVars",
      value: function collectVars(url, opt_bindings) {
        var vars = Object.create(null);
        return new Expander(this.variableSource_, opt_bindings, vars).expand(url).then(function() {
          return vars;
        });
      }
    }, {
      key: "collectDisallowedVarsSync",
      value: function collectDisallowedVarsSync(element) {
        var url = element.getAttribute("src");
        var macroNames = new Expander(this.variableSource_).getMacroNames(url);
        var allowlist = this.getAllowlistForElement_(element);
        if (allowlist) {
          return macroNames.filter(function(v) {
            return !allowlist[v];
          });
        } else {
          return macroNames;
        }
      }
    }, {
      key: "ensureProtocolMatches_",
      value: function ensureProtocolMatches_(url, replacement) {
        var newProtocol = parseUrlDeprecated(replacement, true).protocol;
        var oldProtocol = parseUrlDeprecated(url, true).protocol;
        if (newProtocol != oldProtocol) {
          user().error(TAG13, "Illegal replacement of the protocol: ", url);
          return url;
        }
        userAssert(isProtocolValid(replacement), "The replacement url has invalid protocol: %s", replacement);
        return replacement;
      }
    }, {
      key: "getVariableSource",
      value: function getVariableSource() {
        return this.variableSource_;
      }
    }]);
    return UrlReplacements2;
  }();
  function extractClientIdFromGaCookie(gaCookie) {
    return gaCookie.replace(/^(GA1|1)\.[\d-]+\./, "");
  }
  function installUrlReplacementsServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "url-replace", function(doc) {
      return new UrlReplacements(doc, new GlobalVariableSource(doc));
    });
  }
  function installUrlReplacementsForEmbed(ampdoc, varSource) {
    installServiceInEmbedDoc(ampdoc, "url-replace", new UrlReplacements(ampdoc, varSource));
  }

  // src/service/viewer-impl.js
  function _classCallCheck42(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties41(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass41(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties41(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties41(Constructor, staticProps);
    return Constructor;
  }
  var TAG_7 = "Viewer";
  var RECEIVED_MESSAGE_QUEUE_MAX_LENGTH = 50;
  var VIEWER_ORIGIN_TIMEOUT_ = 1e3;
  var TRIM_ORIGIN_PATTERN_ = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;
  var ViewerImpl = /* @__PURE__ */ function() {
    function ViewerImpl2(ampdoc) {
      var _this = this;
      _classCallCheck42(this, ViewerImpl2);
      this.ampdoc = ampdoc;
      this.win = ampdoc.win;
      this.isIframed_ = isIframed(this.win);
      this.isRuntimeOn_ = true;
      this.overtakeHistory_ = false;
      this.messageObservables_ = map();
      this.messageResponders_ = map();
      this.runtimeOnObservable_ = new Observable();
      this.broadcastObservable_ = new Observable();
      this.messageDeliverer_ = null;
      this.messagingOrigin_ = null;
      this.messageQueue_ = [];
      this.receivedMessageQueue_ = map();
      this.hashParams_ = map();
      if (ampdoc.isSingleDoc()) {
        Object.assign(this.hashParams_, parseQueryString(this.win.location.hash));
      }
      this.isRuntimeOn_ = !parseInt(ampdoc.getParam("off"), 10);
      dev().fine(TAG_7, "- runtimeOn:", this.isRuntimeOn_);
      this.overtakeHistory_ = !!(parseInt(ampdoc.getParam("history"), 10) || this.overtakeHistory_);
      dev().fine(TAG_7, "- history:", this.overtakeHistory_);
      dev().fine(TAG_7, "- visibilityState:", this.ampdoc.getVisibilityState());
      this.isCctEmbedded_ = null;
      this.isProxyOrigin_ = isProxyOrigin(parseUrlDeprecated(this.ampdoc.win.location.href));
      var messagingDeferred = new Deferred();
      this.messagingReadyResolver_ = messagingDeferred.resolve;
      this.messagingReadyPromise_ = this.initMessagingChannel_(messagingDeferred.promise);
      this.isTrustedViewer_ = null;
      this.viewerOrigin_ = null;
      var referrerParam = ampdoc.getParam("referrer");
      this.unconfirmedReferrerUrl_ = this.isEmbedded() && referrerParam != null && this.isTrustedAncestorOrigins_() !== false ? referrerParam : this.win.document.referrer;
      this.referrerUrl_ = new Promise(function(resolve) {
        if (_this.isEmbedded() && ampdoc.getParam("referrer") != null) {
          _this.isTrustedViewer().then(function(isTrusted) {
            if (isTrusted) {
              resolve(ampdoc.getParam("referrer"));
            } else {
              resolve(_this.win.document.referrer);
              if (_this.unconfirmedReferrerUrl_ != _this.win.document.referrer) {
                dev().expectedError(TAG_7, "Untrusted viewer referrer override: " + _this.unconfirmedReferrerUrl_ + " at " + _this.messagingOrigin_);
                _this.unconfirmedReferrerUrl_ = _this.win.document.referrer;
              }
            }
          });
        } else {
          resolve(_this.win.document.referrer);
        }
      });
      this.resolvedViewerUrl_ = removeFragment(this.win.location.href || "");
      this.viewerUrl_ = new Promise(function(resolve) {
        var viewerUrlOverride = ampdoc.getParam("viewerUrl");
        if (_this.isEmbedded() && viewerUrlOverride) {
          _this.isTrustedViewer().then(function(isTrusted) {
            if (isTrusted) {
              _this.resolvedViewerUrl_ = devAssert(viewerUrlOverride);
            } else {
              dev().expectedError(TAG_7, "Untrusted viewer url override: " + viewerUrlOverride + " at " + _this.messagingOrigin_);
            }
            resolve(_this.resolvedViewerUrl_);
          });
        } else {
          resolve(_this.resolvedViewerUrl_);
        }
      });
      if (this.hashParams_["click"]) {
        var newUrl = removeFragment(this.win.location.href);
        if (newUrl != this.win.location.href && this.win.history.replaceState) {
          if (!this.win.location["originalHash"]) {
            this.win.location["originalHash"] = this.win.location.hash;
          }
          this.win.history.replaceState({}, "", newUrl);
          delete this.hashParams_["click"];
          dev().fine(TAG_7, "replace fragment:" + this.win.location.href);
        }
      }
      this.ampdoc.whenFirstVisible().then(function() {
        _this.maybeUpdateFragmentForCct();
      });
      if (this.ampdoc.isSingleDoc()) {
        this.visibleOnUserAction_();
      }
    }
    _createClass41(ViewerImpl2, [{
      key: "initMessagingChannel_",
      value: function initMessagingChannel_(messagingPromise) {
        var isEmbedded = !!(this.isIframed_ && !this.win.__AMP_TEST_IFRAME && (this.ampdoc.getParam("origin") || this.ampdoc.getParam("visibilityState") || this.win.location.search.indexOf("amp_js_v") != -1) || this.isWebviewEmbedded() || this.isCctEmbedded() || !this.ampdoc.isSingleDoc());
        if (!isEmbedded) {
          return null;
        }
        var timeoutMessage = "initMessagingChannel timeout";
        return Services.timerFor(this.win).timeoutPromise(2e4, messagingPromise, timeoutMessage).catch(function(reason) {
          var error = getChannelError(reason);
          if (error && endsWith(error.message, timeoutMessage)) {
            error = dev().createExpectedError(error);
          }
          reportError(error);
          throw error;
        });
      }
    }, {
      key: "getAmpDoc",
      value: function getAmpDoc() {
        return this.ampdoc;
      }
    }, {
      key: "getParam",
      value: function getParam(name) {
        return this.ampdoc.getParam(name);
      }
    }, {
      key: "hasCapability",
      value: function hasCapability(name) {
        var capabilities = this.ampdoc.getParam("cap");
        if (!capabilities) {
          return false;
        }
        return capabilities.split(",").indexOf(name) != -1;
      }
    }, {
      key: "isEmbedded",
      value: function isEmbedded() {
        return !!this.messagingReadyPromise_;
      }
    }, {
      key: "isWebviewEmbedded",
      value: function isWebviewEmbedded() {
        return !this.isIframed_ && this.ampdoc.getParam("webview") == "1";
      }
    }, {
      key: "isCctEmbedded",
      value: function isCctEmbedded() {
        if (this.isCctEmbedded_ != null) {
          return this.isCctEmbedded_;
        }
        this.isCctEmbedded_ = false;
        if (!this.isIframed_) {
          var queryParams = parseQueryString(this.win.location.search);
          this.isCctEmbedded_ = queryParams["amp_gsa"] === "1" && (queryParams["amp_js_v"] || "").startsWith("a");
        }
        return this.isCctEmbedded_;
      }
    }, {
      key: "isProxyOrigin",
      value: function isProxyOrigin2() {
        return this.isProxyOrigin_;
      }
    }, {
      key: "maybeUpdateFragmentForCct",
      value: function maybeUpdateFragmentForCct() {
        if (!this.isCctEmbedded()) {
          return;
        }
        if (!this.win.history.replaceState) {
          return;
        }
        var sourceOrigin = getSourceOrigin(this.win.location.href);
        var _Services$documentInf = Services.documentInfoForDoc(this.ampdoc), canonicalUrl = _Services$documentInf.canonicalUrl;
        var canonicalSourceOrigin = getSourceOrigin(canonicalUrl);
        if (this.hasRoughlySameOrigin_(sourceOrigin, canonicalSourceOrigin)) {
          this.hashParams_["ampshare"] = canonicalUrl;
          this.win.history.replaceState({}, "", "#" + serializeQueryString(this.hashParams_));
        }
      }
    }, {
      key: "hasRoughlySameOrigin_",
      value: function hasRoughlySameOrigin_(first, second) {
        var trimOrigin = function trimOrigin2(origin) {
          if (origin.split(".").length > 2) {
            return origin.replace(TRIM_ORIGIN_PATTERN_, "$1");
          }
          return origin;
        };
        return trimOrigin(first) == trimOrigin(second);
      }
    }, {
      key: "isRuntimeOn",
      value: function isRuntimeOn() {
        return this.isRuntimeOn_;
      }
    }, {
      key: "toggleRuntime",
      value: function toggleRuntime() {
        this.isRuntimeOn_ = !this.isRuntimeOn_;
        dev().fine(TAG_7, "Runtime state:", this.isRuntimeOn_);
        this.runtimeOnObservable_.fire(this.isRuntimeOn_);
      }
    }, {
      key: "onRuntimeState",
      value: function onRuntimeState(handler) {
        return this.runtimeOnObservable_.add(handler);
      }
    }, {
      key: "isOvertakeHistory",
      value: function isOvertakeHistory() {
        return this.overtakeHistory_;
      }
    }, {
      key: "getVisibilityState",
      value: function getVisibilityState() {
        return this.ampdoc.getVisibilityState();
      }
    }, {
      key: "isVisible",
      value: function isVisible() {
        return this.ampdoc.isVisible();
      }
    }, {
      key: "hasBeenVisible",
      value: function hasBeenVisible() {
        return this.ampdoc.hasBeenVisible();
      }
    }, {
      key: "whenFirstVisible",
      value: function whenFirstVisible() {
        return this.ampdoc.whenFirstVisible();
      }
    }, {
      key: "whenNextVisible",
      value: function whenNextVisible() {
        return this.ampdoc.whenNextVisible();
      }
    }, {
      key: "getFirstVisibleTime",
      value: function getFirstVisibleTime() {
        return this.ampdoc.getFirstVisibleTime();
      }
    }, {
      key: "getLastVisibleTime",
      value: function getLastVisibleTime() {
        return this.ampdoc.getLastVisibleTime();
      }
    }, {
      key: "onVisibilityChanged",
      value: function onVisibilityChanged(handler) {
        return this.ampdoc.onVisibilityChanged(handler);
      }
    }, {
      key: "setVisibilityState_",
      value: function setVisibilityState_(state) {
        if (!state) {
          return;
        }
        devAssert(isEnumValue(VisibilityState, state));
        if (state === VisibilityState.HIDDEN) {
          state = this.ampdoc.getLastVisibleTime() != null ? VisibilityState.INACTIVE : VisibilityState.PRERENDER;
        }
        this.ampdoc.overrideVisibilityState(state);
        dev().fine(TAG_7, "visibilitychange event:", this.ampdoc.getVisibilityState());
      }
    }, {
      key: "getResolvedViewerUrl",
      value: function getResolvedViewerUrl() {
        return this.resolvedViewerUrl_;
      }
    }, {
      key: "getViewerUrl",
      value: function getViewerUrl() {
        return this.viewerUrl_;
      }
    }, {
      key: "maybeGetMessagingOrigin",
      value: function maybeGetMessagingOrigin() {
        return this.messagingOrigin_;
      }
    }, {
      key: "getUnconfirmedReferrerUrl",
      value: function getUnconfirmedReferrerUrl() {
        return this.unconfirmedReferrerUrl_;
      }
    }, {
      key: "getReferrerUrl",
      value: function getReferrerUrl() {
        return this.referrerUrl_;
      }
    }, {
      key: "isTrustedViewer",
      value: function isTrustedViewer() {
        var _this2 = this;
        if (!this.isTrustedViewer_) {
          var isTrustedAncestorOrigins = this.isTrustedAncestorOrigins_();
          this.isTrustedViewer_ = isTrustedAncestorOrigins !== void 0 ? Promise.resolve(isTrustedAncestorOrigins) : this.messagingReadyPromise_.then(function(origin) {
            return origin ? _this2.isTrustedViewerOrigin_(origin) : false;
          });
        }
        return this.isTrustedViewer_;
      }
    }, {
      key: "isTrustedAncestorOrigins_",
      value: function isTrustedAncestorOrigins_() {
        if (!this.isEmbedded()) {
          return false;
        } else if (this.win.location.ancestorOrigins && !this.isWebviewEmbedded() && !this.isCctEmbedded()) {
          return this.win.location.ancestorOrigins.length > 0 && this.isTrustedViewerOrigin_(this.win.location.ancestorOrigins[0]);
        }
      }
    }, {
      key: "getViewerOrigin",
      value: function getViewerOrigin() {
        if (!this.viewerOrigin_) {
          var origin;
          if (!this.isEmbedded()) {
            origin = "";
          } else if (this.win.location.ancestorOrigins && this.win.location.ancestorOrigins.length > 0) {
            origin = this.win.location.ancestorOrigins[0];
          }
          this.viewerOrigin_ = origin !== void 0 ? Promise.resolve(origin) : Services.timerFor(this.win).timeoutPromise(VIEWER_ORIGIN_TIMEOUT_, this.messagingReadyPromise_).catch(function() {
            return "";
          });
        }
        return this.viewerOrigin_;
      }
    }, {
      key: "isTrustedViewerOrigin_",
      value: function isTrustedViewerOrigin_(urlString) {
        var url = parseUrlDeprecated(urlString);
        var protocol = url.protocol;
        if (protocol == "x-thread:") {
          return true;
        }
        if (protocol != "https:") {
          return false;
        }
        return urls.trustedViewerHosts.some(function(th) {
          return th.test(url.hostname);
        });
      }
    }, {
      key: "onMessage",
      value: function onMessage(eventType, handler) {
        var observable = this.messageObservables_[eventType];
        if (!observable) {
          observable = new Observable();
          this.messageObservables_[eventType] = observable;
        }
        var unlistenFn = observable.add(handler);
        if (this.receivedMessageQueue_[eventType]) {
          this.receivedMessageQueue_[eventType].forEach(function(message) {
            observable.fire(message.data);
            message.deferred.resolve();
          });
          this.receivedMessageQueue_[eventType] = [];
        }
        return unlistenFn;
      }
    }, {
      key: "onMessageRespond",
      value: function onMessageRespond(eventType, responder) {
        var _this3 = this;
        this.messageResponders_[eventType] = responder;
        if (this.receivedMessageQueue_[eventType]) {
          this.receivedMessageQueue_[eventType].forEach(function(message) {
            message.deferred.resolve(responder(message.data));
          });
          this.receivedMessageQueue_[eventType] = [];
        }
        return function() {
          if (_this3.messageResponders_[eventType] === responder) {
            delete _this3.messageResponders_[eventType];
          }
        };
      }
    }, {
      key: "receiveMessage",
      value: function receiveMessage(eventType, data, unusedAwaitResponse) {
        if (eventType == "visibilitychange") {
          this.setVisibilityState_(data["state"]);
          return resolvedPromise();
        }
        if (eventType == "broadcast") {
          this.broadcastObservable_.fire(data);
          return resolvedPromise();
        }
        var observable = this.messageObservables_[eventType];
        var responder = this.messageResponders_[eventType];
        if (!observable && !responder) {
          this.receivedMessageQueue_[eventType] = this.receivedMessageQueue_[eventType] || [];
          if (this.receivedMessageQueue_[eventType].length >= RECEIVED_MESSAGE_QUEUE_MAX_LENGTH) {
            return void 0;
          }
          var deferred = new Deferred();
          this.receivedMessageQueue_[eventType].push({
            data,
            deferred
          });
          return deferred.promise;
        }
        if (observable) {
          observable.fire(data);
        }
        if (responder) {
          return responder(data);
        } else if (observable) {
          return resolvedPromise();
        }
      }
    }, {
      key: "setMessageDeliverer",
      value: function setMessageDeliverer(deliverer, origin) {
        var _this4 = this;
        if (this.messageDeliverer_) {
          throw new Error("message channel can only be initialized once");
        }
        if (origin == null) {
          throw new Error("message channel must have an origin");
        }
        dev().fine(TAG_7, "message channel established with origin: ", origin);
        this.messageDeliverer_ = deliverer;
        this.messagingOrigin_ = origin;
        this.messagingReadyResolver_(origin);
        if (this.messageQueue_.length > 0) {
          var queue = this.messageQueue_.slice(0);
          this.messageQueue_ = [];
          queue.forEach(function(message) {
            var responsePromise = _this4.messageDeliverer_(message.eventType, message.data, message.awaitResponse);
            if (message.awaitResponse) {
              message.responseResolver(responsePromise);
            }
          });
        }
      }
    }, {
      key: "sendMessage",
      value: function sendMessage(eventType, data, cancelUnsent) {
        if (cancelUnsent === void 0) {
          cancelUnsent = false;
        }
        this.sendMessageInternal_(eventType, data, cancelUnsent, false);
      }
    }, {
      key: "sendMessageAwaitResponse",
      value: function sendMessageAwaitResponse(eventType, data, cancelUnsent) {
        if (cancelUnsent === void 0) {
          cancelUnsent = false;
        }
        return this.sendMessageInternal_(eventType, data, cancelUnsent, true);
      }
    }, {
      key: "sendMessageInternal_",
      value: function sendMessageInternal_(eventType, data, cancelUnsent, awaitResponse) {
        var _this5 = this;
        if (this.messageDeliverer_) {
          return tryResolve(function() {
            return _this5.messageDeliverer_(eventType, data, awaitResponse);
          });
        }
        if (!this.messagingReadyPromise_) {
          if (awaitResponse) {
            return Promise.reject(getChannelError());
          } else {
            return resolvedPromise();
          }
        }
        if (!cancelUnsent) {
          return this.messagingReadyPromise_.then(function() {
            return _this5.messageDeliverer_(eventType, data, awaitResponse);
          });
        }
        var found = findIndex(this.messageQueue_, function(m) {
          return m.eventType == eventType;
        });
        var message;
        if (found != -1) {
          message = this.messageQueue_.splice(found, 1)[0];
          message.data = data;
          message.awaitResponse = message.awaitResponse || awaitResponse;
        } else {
          var deferred = new Deferred();
          var responsePromise = deferred.promise, responseResolver = deferred.resolve;
          message = {
            eventType,
            data,
            awaitResponse,
            responsePromise,
            responseResolver
          };
        }
        this.messageQueue_.push(message);
        return message.responsePromise;
      }
    }, {
      key: "broadcast",
      value: function broadcast(message) {
        if (!this.messagingReadyPromise_) {
          return Promise.resolve(false);
        }
        return this.sendMessageInternal_("broadcast", message, false, false).then(function() {
          return true;
        }, function() {
          return false;
        });
      }
    }, {
      key: "onBroadcast",
      value: function onBroadcast(handler) {
        return this.broadcastObservable_.add(handler);
      }
    }, {
      key: "whenMessagingReady",
      value: function whenMessagingReady() {
        return this.messagingReadyPromise_;
      }
    }, {
      key: "replaceUrl",
      value: function replaceUrl(newUrl) {
        if (!newUrl || !this.ampdoc.isSingleDoc() || !this.win.history.replaceState) {
          return;
        }
        try {
          var url = parseUrlDeprecated(this.win.location.href);
          var replaceUrl2 = parseUrlDeprecated(removeFragment(newUrl) + this.win.location.hash);
          if (url.origin == replaceUrl2.origin && getSourceOrigin(url) == getSourceOrigin(replaceUrl2)) {
            this.win.history.replaceState({}, "", replaceUrl2.href);
            this.win.location["originalHref"] = url.href;
            dev().fine(TAG_7, "replace url:" + replaceUrl2.href);
          }
        } catch (e) {
          dev().error(TAG_7, "replaceUrl failed", e);
        }
      }
    }, {
      key: "visibleOnUserAction_",
      value: function visibleOnUserAction_() {
        var _this6 = this;
        if (this.ampdoc.getVisibilityState() == VisibilityState.VISIBLE) {
          return;
        }
        var unlisten = [];
        var doUnlisten = function doUnlisten2() {
          return unlisten.forEach(function(fn) {
            return fn();
          });
        };
        var makeVisible = function makeVisible2() {
          _this6.setVisibilityState_(VisibilityState.VISIBLE);
          doUnlisten();
          dev().expectedError(TAG_7, "Received user action in non-visible doc");
        };
        var options = {
          capture: true,
          passive: true
        };
        unlisten.push(listen(this.win, "keydown", makeVisible, options), listen(this.win, "touchstart", makeVisible, options), listen(this.win, "mousedown", makeVisible, options));
        this.whenFirstVisible().then(doUnlisten);
      }
    }]);
    return ViewerImpl2;
  }();
  function getChannelError(opt_reason) {
    var channelError;
    if (opt_reason instanceof Error) {
      opt_reason = duplicateErrorIfNecessary(opt_reason);
      opt_reason.message = "No messaging channel: " + opt_reason.message;
      channelError = opt_reason;
    } else {
      channelError = new Error("No messaging channel: " + opt_reason);
    }
    channelError.message = stripUserError(channelError.message);
    return channelError;
  }
  function installViewerServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "viewer", ViewerImpl, true);
  }

  // src/core/data-structures/curve.js
  function _classCallCheck43(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties42(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass42(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties42(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties42(Constructor, staticProps);
    return Constructor;
  }
  function bezierCurve(x1, y1, x2, y2) {
    return function(xVal) {
      return Bezier.solveYValueFromXValue(xVal, 0, 0, x1, y1, x2, y2, 1, 1);
    };
  }
  var Bezier = /* @__PURE__ */ function() {
    function Bezier2() {
      _classCallCheck43(this, Bezier2);
    }
    _createClass42(Bezier2, null, [{
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

  // src/animation.js
  function _classCallCheck44(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties43(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass43(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties43(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties43(Constructor, staticProps);
    return Constructor;
  }
  var TAG_8 = "Animation";
  var NOOP_CALLBACK = function NOOP_CALLBACK2() {
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(contextNode, opt_vsync) {
      _classCallCheck44(this, Animation2);
      this.contextNode_ = contextNode;
      this.vsync_ = opt_vsync || Services.vsyncFor(self);
      this.curve_ = null;
      this.segments_ = [];
    }
    _createClass43(Animation2, [{
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
      _classCallCheck44(this, AnimationPlayer2);
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
        dev().warn(TAG_8, "cannot animate");
        this.complete_(false, 0);
      }
    }
    _createClass43(AnimationPlayer2, [{
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
            dev().error(TAG_8, "completion failed: " + e, e);
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
            dev().warn(TAG_8, "cancel animation");
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
              dev().error(TAG_8, "step curve failed: " + e, e);
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
          dev().error(TAG_8, "step mutate failed: " + e, e);
          this.complete_(false, 0);
          return;
        }
      }
    }]);
    return AnimationPlayer2;
  }();

  // src/service/viewport/viewport-binding-def.js
  function marginBottomOfLastChild(win, element) {
    var style;
    for (var n = element.lastElementChild; n; n = n.previousElementSibling) {
      var r = n.getBoundingClientRect();
      if (r.height > 0) {
        var s = computedStyle(win, n);
        if (s.position == "static" || s.position == "relative") {
          style = s;
          break;
        }
      }
    }
    return style ? parseInt(style.marginBottom, 10) : 0;
  }

  // src/service/viewport/viewport-binding-ios-embed-wrapper.js
  function _classCallCheck45(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties44(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass44(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties44(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties44(Constructor, staticProps);
    return Constructor;
  }
  var TAG_9 = "Viewport";
  var ViewportBindingIosEmbedWrapper_ = /* @__PURE__ */ function() {
    function ViewportBindingIosEmbedWrapper_2(win) {
      var _this = this;
      _classCallCheck45(this, ViewportBindingIosEmbedWrapper_2);
      this.win = win;
      this.vsync_ = Services.vsyncFor(win);
      var doc = this.win.document;
      var documentElement = doc.documentElement;
      var topClasses = documentElement.className;
      documentElement.classList.add("i-amphtml-ios-embed");
      var wrapper = doc.createElement("html");
      this.wrapper_ = wrapper;
      wrapper.id = "i-amphtml-wrapper";
      wrapper.className = topClasses;
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.boundScrollEventListener_ = this.onScrolled_.bind(this);
      this.boundResizeEventListener_ = function() {
        return _this.resizeObservable_.fire();
      };
      this.paddingTop_ = 0;
      this.setupDone_ = false;
      waitForBodyOpen(doc, this.setup_.bind(this));
      whenDocumentReady(doc).then(function() {
        documentElement.classList.add("i-amphtml-ios-overscroll");
      });
      dev().fine(TAG_9, "initialized ios-embed-wrapper viewport");
    }
    _createClass44(ViewportBindingIosEmbedWrapper_2, [{
      key: "ensureReadyForElements",
      value: function ensureReadyForElements() {
        this.setup_();
      }
    }, {
      key: "setup_",
      value: function setup_() {
        if (this.setupDone_) {
          return;
        }
        this.setupDone_ = true;
        var doc = this.win.document;
        var body = dev().assertElement(doc.body, "body is not available");
        doc.documentElement.appendChild(this.wrapper_);
        this.wrapper_.appendChild(body);
        Object.defineProperty(doc, "body", {
          get: function get() {
            return body;
          }
        });
        this.onScrolled_();
      }
    }, {
      key: "connect",
      value: function connect() {
        this.win.addEventListener("resize", this.boundResizeEventListener_);
        this.wrapper_.addEventListener("scroll", this.boundScrollEventListener_);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        this.win.removeEventListener("resize", this.boundResizeEventListener_);
        this.wrapper_.removeEventListener("scroll", this.boundScrollEventListener_);
      }
    }, {
      key: "getBorderTop",
      value: function getBorderTop() {
        return 1;
      }
    }, {
      key: "requiresFixedLayerTransfer",
      value: function requiresFixedLayerTransfer() {
        if (!isExperimentOn(this.win, "ios-fixed-no-transfer")) {
          return true;
        }
        var iosVersion = parseFloat(Services.platformFor(this.win).getIosVersionString());
        return iosVersion < 12.2;
      }
    }, {
      key: "overrideGlobalScrollTo",
      value: function overrideGlobalScrollTo() {
        return true;
      }
    }, {
      key: "supportsPositionFixed",
      value: function supportsPositionFixed() {
        return true;
      }
    }, {
      key: "onScroll",
      value: function onScroll(callback) {
        this.scrollObservable_.add(callback);
      }
    }, {
      key: "onResize",
      value: function onResize(callback) {
        this.resizeObservable_.add(callback);
      }
    }, {
      key: "updatePaddingTop",
      value: function updatePaddingTop(paddingTop) {
        this.paddingTop_ = paddingTop;
        setImportantStyles(this.wrapper_, {
          "padding-top": px(paddingTop)
        });
      }
    }, {
      key: "hideViewerHeader",
      value: function hideViewerHeader(transient, unusedLastPaddingTop) {
        if (!transient) {
          this.updatePaddingTop(0);
        }
      }
    }, {
      key: "showViewerHeader",
      value: function showViewerHeader(transient, paddingTop) {
        if (!transient) {
          this.updatePaddingTop(paddingTop);
        }
      }
    }, {
      key: "disableScroll",
      value: function disableScroll() {
        this.wrapper_.classList.add("i-amphtml-scroll-disabled");
      }
    }, {
      key: "resetScroll",
      value: function resetScroll() {
        this.wrapper_.classList.remove("i-amphtml-scroll-disabled");
      }
    }, {
      key: "updateLightboxMode",
      value: function updateLightboxMode(unusedLightboxMode) {
        return resolvedPromise();
      }
    }, {
      key: "getSize",
      value: function getSize() {
        return {
          width: this.win.innerWidth,
          height: this.win.innerHeight
        };
      }
    }, {
      key: "getScrollTop",
      value: function getScrollTop() {
        return this.wrapper_.scrollTop;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return 0;
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return this.wrapper_.scrollWidth;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.wrapper_.scrollHeight;
      }
    }, {
      key: "getContentHeight",
      value: function getContentHeight() {
        var content = this.win.document.body;
        var _content$getBoundingC = content.getBoundingClientRect(), height = _content$getBoundingC.height;
        var childMarginBottom = marginBottomOfLastChild(this.win, content);
        var style = computedStyle(this.win, content);
        return parseInt(style.marginTop, 10) + this.paddingTop_ + height + childMarginBottom + parseInt(style.marginBottom, 10);
      }
    }, {
      key: "contentHeightChanged",
      value: function contentHeightChanged() {
      }
    }, {
      key: "getLayoutRect",
      value: function getLayoutRect(el, opt_scrollLeft, opt_scrollTop) {
        var b = el.getBoundingClientRect();
        var scrollTop = opt_scrollTop != void 0 ? opt_scrollTop : this.getScrollTop();
        var scrollLeft = opt_scrollLeft != void 0 ? opt_scrollLeft : this.getScrollLeft();
        return layoutRectLtwh(Math.round(b.left + scrollLeft), Math.round(b.top + scrollTop), Math.round(b.width), Math.round(b.height));
      }
    }, {
      key: "getRootClientRectAsync",
      value: function getRootClientRectAsync() {
        return Promise.resolve(null);
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(scrollTop) {
        this.wrapper_.scrollTop = scrollTop || 1;
      }
    }, {
      key: "onScrolled_",
      value: function onScrolled_(opt_event) {
        if (this.wrapper_.scrollTop == 0) {
          this.wrapper_.scrollTop = 1;
          if (opt_event) {
            opt_event.preventDefault();
          }
        }
        if (opt_event) {
          this.scrollObservable_.fire();
        }
      }
    }, {
      key: "getScrollingElement",
      value: function getScrollingElement() {
        return this.wrapper_;
      }
    }, {
      key: "getScrollingElementScrollsLikeViewport",
      value: function getScrollingElementScrollsLikeViewport() {
        return false;
      }
    }]);
    return ViewportBindingIosEmbedWrapper_2;
  }();

  // src/service/viewport/viewport-binding-natural.js
  function _classCallCheck46(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties45(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass45(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties45(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties45(Constructor, staticProps);
    return Constructor;
  }
  var TAG_10 = "Viewport";
  var ViewportBindingNatural_ = /* @__PURE__ */ function() {
    function ViewportBindingNatural_2(ampdoc) {
      var _this = this;
      _classCallCheck46(this, ViewportBindingNatural_2);
      this.ampdoc = ampdoc;
      this.win = ampdoc.win;
      this.platform_ = Services.platformFor(this.win);
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.boundScrollEventListener_ = this.handleScrollEvent_.bind(this);
      this.boundResizeEventListener_ = function() {
        return _this.resizeObservable_.fire();
      };
      dev().fine(TAG_10, "initialized natural viewport");
    }
    _createClass45(ViewportBindingNatural_2, [{
      key: "handleScrollEvent_",
      value: function handleScrollEvent_() {
        this.scrollObservable_.fire();
      }
    }, {
      key: "connect",
      value: function connect() {
        this.win.addEventListener("scroll", this.boundScrollEventListener_);
        this.win.addEventListener("resize", this.boundResizeEventListener_);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        this.win.removeEventListener("scroll", this.boundScrollEventListener_);
        this.win.removeEventListener("resize", this.boundResizeEventListener_);
      }
    }, {
      key: "ensureReadyForElements",
      value: function ensureReadyForElements() {
      }
    }, {
      key: "getBorderTop",
      value: function getBorderTop() {
        return 0;
      }
    }, {
      key: "requiresFixedLayerTransfer",
      value: function requiresFixedLayerTransfer() {
        return false;
      }
    }, {
      key: "overrideGlobalScrollTo",
      value: function overrideGlobalScrollTo() {
        return false;
      }
    }, {
      key: "supportsPositionFixed",
      value: function supportsPositionFixed() {
        return true;
      }
    }, {
      key: "onScroll",
      value: function onScroll(callback) {
        this.scrollObservable_.add(callback);
      }
    }, {
      key: "onResize",
      value: function onResize(callback) {
        this.resizeObservable_.add(callback);
      }
    }, {
      key: "updatePaddingTop",
      value: function updatePaddingTop(paddingTop) {
        setImportantStyles(this.win.document.documentElement, {
          "padding-top": px(paddingTop)
        });
      }
    }, {
      key: "hideViewerHeader",
      value: function hideViewerHeader(transient, unusedLastPaddingTop) {
        if (!transient) {
          this.updatePaddingTop(0);
        }
      }
    }, {
      key: "showViewerHeader",
      value: function showViewerHeader(transient, paddingTop) {
        if (!transient) {
          this.updatePaddingTop(paddingTop);
        }
      }
    }, {
      key: "disableScroll",
      value: function disableScroll() {
        this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled");
      }
    }, {
      key: "resetScroll",
      value: function resetScroll() {
        this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled");
      }
    }, {
      key: "updateLightboxMode",
      value: function updateLightboxMode(unusedLightboxMode) {
        return resolvedPromise();
      }
    }, {
      key: "getSize",
      value: function getSize() {
        var winWidth = this.win.innerWidth;
        var winHeight = this.win.innerHeight;
        if (winWidth && winHeight) {
          return {
            width: winWidth,
            height: winHeight
          };
        }
        var el = this.win.document.documentElement;
        return {
          width: el.clientWidth,
          height: el.clientHeight
        };
      }
    }, {
      key: "getScrollTop",
      value: function getScrollTop() {
        var pageScrollTop = this.getScrollingElement().scrollTop || this.win.pageYOffset;
        var _this$ampdoc$getRootN = this.ampdoc.getRootNode(), host = _this$ampdoc$getRootN.host;
        return host ? pageScrollTop - host.offsetTop : pageScrollTop;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return 0;
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return this.getScrollingElement().scrollWidth;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.getScrollingElement().scrollHeight;
      }
    }, {
      key: "getContentHeight",
      value: function getContentHeight() {
        var content = this.getScrollingElement();
        var rect = content.getBoundingClientRect();
        var top = rect.top + this.getScrollTop();
        var childMarginBottom = Services.platformFor(this.win).isSafari() ? marginBottomOfLastChild(this.win, content) : 0;
        var style = computedStyle(this.win, content);
        return top + parseInt(style.marginTop, 10) + rect.height + childMarginBottom + parseInt(style.marginBottom, 10);
      }
    }, {
      key: "contentHeightChanged",
      value: function contentHeightChanged() {
      }
    }, {
      key: "getLayoutRect",
      value: function getLayoutRect(el, opt_scrollLeft, opt_scrollTop) {
        var b = el.getBoundingClientRect();
        var scrollTop = opt_scrollTop != void 0 ? opt_scrollTop : this.getScrollTop();
        var scrollLeft = opt_scrollLeft != void 0 ? opt_scrollLeft : this.getScrollLeft();
        return layoutRectLtwh(Math.round(b.left + scrollLeft), Math.round(b.top + scrollTop), Math.round(b.width), Math.round(b.height));
      }
    }, {
      key: "getRootClientRectAsync",
      value: function getRootClientRectAsync() {
        return Promise.resolve(null);
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(scrollTop) {
        this.getScrollingElement().scrollTop = scrollTop;
      }
    }, {
      key: "getScrollingElement",
      value: function getScrollingElement() {
        var doc = this.win.document;
        if (doc.scrollingElement) {
          return doc.scrollingElement;
        }
        if (doc.body && this.platform_.isWebKit()) {
          return doc.body;
        }
        return doc.documentElement;
      }
    }, {
      key: "getScrollingElementScrollsLikeViewport",
      value: function getScrollingElementScrollsLikeViewport() {
        return true;
      }
    }]);
    return ViewportBindingNatural_2;
  }();

  // src/core/math/index.js
  function clamp(val, min, max) {
    devAssert2(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }

  // src/transition.js
  function numeric(start, end) {
    return function(time) {
      return start + (end - start) * time;
    };
  }

  // src/service/viewport/viewport-impl.js
  function _classCallCheck47(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties46(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass46(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties46(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties46(Constructor, staticProps);
    return Constructor;
  }
  var TAG_11 = "Viewport";
  var ViewportImpl = /* @__PURE__ */ function() {
    function ViewportImpl2(ampdoc, binding, viewer) {
      var _this = this;
      _classCallCheck47(this, ViewportImpl2);
      var win = ampdoc.win;
      this.ampdoc = ampdoc;
      this.globalDoc_ = this.ampdoc.win.document;
      this.binding_ = binding;
      this.viewer_ = viewer;
      this.rect_ = null;
      this.size_ = null;
      this.scrollTop_ = null;
      this.scrollAnimationFrameThrottled_ = false;
      this.scrollLeft_ = null;
      this.paddingTop_ = Number(viewer.getParam("paddingTop") || 0);
      this.lastPaddingTop_ = 0;
      this.timer_ = Services.timerFor(win);
      this.vsync_ = Services.vsyncFor(win);
      this.scrollTracking_ = false;
      this.scrollingElement_ = null;
      this.scrollCount_ = 0;
      this.changeObservable_ = new Observable();
      this.scrollObservable_ = new Observable();
      this.resizeObservable_ = new Observable();
      this.viewportMeta_ = void 0;
      this.originalViewportMetaString_ = void 0;
      this.fixedLayer_ = null;
      this.viewer_.onMessage("viewport", this.updateOnViewportEvent_.bind(this));
      this.viewer_.onMessage("scroll", this.viewerSetScrollTop_.bind(this));
      this.viewer_.onMessage("disableScroll", this.disableScrollEventHandler_.bind(this));
      if (this.viewer_.isEmbedded()) {
        this.binding_.updatePaddingTop(this.paddingTop_);
      }
      this.binding_.onScroll(this.scroll_.bind(this));
      this.binding_.onResize(this.resize_.bind(this));
      this.onScroll(this.sendScrollMessage_.bind(this));
      this.visible_ = false;
      this.ampdoc.onVisibilityChanged(this.updateVisibility_.bind(this));
      this.updateVisibility_();
      var globalDocElement = this.globalDoc_.documentElement;
      if (ampdoc.isSingleDoc()) {
        globalDocElement.classList.add("i-amphtml-singledoc");
      }
      if (viewer.isEmbedded()) {
        globalDocElement.classList.add("i-amphtml-embedded");
      } else {
        globalDocElement.classList.add("i-amphtml-standalone");
      }
      if (isIframed(win)) {
        globalDocElement.classList.add("i-amphtml-iframed");
      }
      if (viewer.getParam("webview") === "1") {
        globalDocElement.classList.add("i-amphtml-webview");
      }
      if (isIframed(win) && "scrollRestoration" in win.history) {
        win.history.scrollRestoration = "manual";
      }
      if (this.binding_.overrideGlobalScrollTo()) {
        try {
          Object.defineProperty(win, "scrollTo", {
            value: function value(x, y) {
              return _this.setScrollTop(y);
            }
          });
          ["pageYOffset", "scrollY"].forEach(function(prop) {
            Object.defineProperty(win, prop, {
              get: function get() {
                return _this.getScrollTop();
              }
            });
          });
        } catch (e) {
        }
      }
      var isIframedIos = Services.platformFor(win).isIos() && isIframed(win);
      if (isIframedIos && this.ampdoc.isSingleDoc()) {
        this.ampdoc.whenReady().then(function() {
          win.scrollTo(-0.1, 0);
        });
      }
    }
    _createClass46(ViewportImpl2, [{
      key: "dispose",
      value: function dispose() {
        this.binding_.disconnect();
      }
    }, {
      key: "ensureReadyForElements",
      value: function ensureReadyForElements() {
        this.binding_.ensureReadyForElements();
      }
    }, {
      key: "updateVisibility_",
      value: function updateVisibility_() {
        var visible = this.ampdoc.isVisible();
        if (visible != this.visible_) {
          this.visible_ = visible;
          if (visible) {
            this.binding_.connect();
            if (this.size_) {
              this.resize_();
            }
            if (this.scrollTop_) {
              this.scrollTop_ = null;
              this.getScrollTop();
            }
          } else {
            this.binding_.disconnect();
          }
        }
      }
    }, {
      key: "getPaddingTop",
      value: function getPaddingTop() {
        return this.paddingTop_;
      }
    }, {
      key: "getScrollTop",
      value: function getScrollTop() {
        if (this.scrollTop_ == null) {
          this.scrollTop_ = this.binding_.getScrollTop();
        }
        return this.scrollTop_;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        if (this.scrollLeft_ == null) {
          this.scrollLeft_ = this.binding_.getScrollLeft();
        }
        return this.scrollLeft_;
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(scrollPos) {
        this.scrollTop_ = null;
        this.binding_.setScrollTop(scrollPos);
      }
    }, {
      key: "updatePaddingBottom",
      value: function updatePaddingBottom(paddingBottom) {
        this.ampdoc.waitForBodyOpen().then(function(body) {
          setStyle(body, "borderBottom", paddingBottom + "px solid transparent");
        });
      }
    }, {
      key: "getSize",
      value: function getSize() {
        if (this.size_) {
          return this.size_;
        }
        this.size_ = this.binding_.getSize();
        if (this.size_.width == 0 || this.size_.height == 0) {
          var visibilityState = this.ampdoc.getVisibilityState();
          if (visibilityState == VisibilityState.PRERENDER || visibilityState == VisibilityState.VISIBLE) {
            if (Math.random() < 0.01) {
              dev().error(TAG_11, "viewport has zero dimensions");
            }
          }
        }
        return this.size_;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.getSize().height;
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.getSize().width;
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return this.binding_.getScrollWidth();
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.binding_.getScrollHeight();
      }
    }, {
      key: "getContentHeight",
      value: function getContentHeight() {
        return this.binding_.getContentHeight();
      }
    }, {
      key: "contentHeightChanged",
      value: function contentHeightChanged() {
        this.binding_.contentHeightChanged();
      }
    }, {
      key: "getRect",
      value: function getRect() {
        if (this.rect_ == null) {
          var scrollTop = this.getScrollTop();
          var scrollLeft = this.getScrollLeft();
          var size = this.getSize();
          this.rect_ = layoutRectLtwh(scrollLeft, scrollTop, size.width, size.height);
        }
        return this.rect_;
      }
    }, {
      key: "getLayoutRect",
      value: function getLayoutRect(el) {
        var scrollLeft = this.getScrollLeft();
        var scrollTop = this.getScrollTop();
        var frameElement = getParentWindowFrameElement(el, this.ampdoc.win);
        if (frameElement) {
          var b = this.binding_.getLayoutRect(el, 0, 0);
          var c = this.binding_.getLayoutRect(frameElement, scrollLeft, scrollTop);
          return layoutRectLtwh(Math.round(b.left + c.left), Math.round(b.top + c.top), Math.round(b.width), Math.round(b.height));
        }
        return this.binding_.getLayoutRect(el, scrollLeft, scrollTop);
      }
    }, {
      key: "getClientRectAsync",
      value: function getClientRectAsync(el) {
        var local = this.vsync_.measurePromise(function() {
          return el.getBoundingClientRect();
        });
        var root = this.binding_.getRootClientRectAsync();
        var frameElement = getParentWindowFrameElement(el, this.ampdoc.win);
        if (frameElement) {
          root = this.vsync_.measurePromise(function() {
            return frameElement.getBoundingClientRect();
          });
        }
        return Promise.all([local, root]).then(function(values) {
          var l = values[0];
          var r = values[1];
          if (!r) {
            return layoutRectFromDomRect(l);
          }
          return moveLayoutRect(l, r.left, r.top);
        });
      }
    }, {
      key: "supportsPositionFixed",
      value: function supportsPositionFixed() {
        return this.binding_.supportsPositionFixed();
      }
    }, {
      key: "isDeclaredFixed",
      value: function isDeclaredFixed(element) {
        if (!this.fixedLayer_) {
          return false;
        }
        return this.fixedLayer_.isDeclaredFixed(element);
      }
    }, {
      key: "scrollIntoView",
      value: function scrollIntoView(element) {
        var _this2 = this;
        if (false) {
          element.scrollIntoView();
          return resolvedPromise();
        } else {
          return this.getScrollingContainerFor_(element).then(function(parent) {
            return _this2.scrollIntoViewInternal_(element, parent);
          });
        }
      }
    }, {
      key: "scrollIntoViewInternal_",
      value: function scrollIntoViewInternal_(element, parent) {
        var _this3 = this;
        var elementTop = this.binding_.getLayoutRect(element).top;
        var newScrollTopPromise = tryResolve(function() {
          return Math.max(0, elementTop - _this3.paddingTop_);
        });
        newScrollTopPromise.then(function(newScrollTop) {
          return _this3.setElementScrollTop_(parent, newScrollTop);
        });
      }
    }, {
      key: "animateScrollIntoView",
      value: function animateScrollIntoView(element, pos, opt_duration, opt_curve) {
        var _this4 = this;
        if (pos === void 0) {
          pos = "top";
        }
        if (false) {
          return new Promise(function(resolve, opt_) {
            element.scrollIntoView({
              block: SCROLL_POS_TO_BLOCK[pos],
              behavior: "smooth"
            });
            setTimeout(resolve, SMOOTH_SCROLL_DELAY_);
          });
        } else {
          devAssert(!opt_curve || opt_duration !== void 0, "Curve without duration doesn't make sense.");
          return this.getScrollingContainerFor_(element).then(function(parent) {
            return _this4.animateScrollWithinParent(element, parent, dev().assertString(pos), opt_duration, opt_curve);
          });
        }
      }
    }, {
      key: "animateScrollWithinParent",
      value: function animateScrollWithinParent(element, parent, pos, opt_duration, opt_curve) {
        var _this5 = this;
        devAssert(!opt_curve || opt_duration !== void 0, "Curve without duration doesn't make sense.");
        var elementRect = this.binding_.getLayoutRect(element);
        var _ref = this.isScrollingElement_(parent) ? this.getSize() : this.getLayoutRect(parent), parentHeight = _ref.height;
        var offset;
        switch (pos) {
          case "bottom":
            offset = -parentHeight + elementRect.height;
            break;
          case "center":
            offset = -parentHeight / 2 + elementRect.height / 2;
            break;
          default:
            offset = 0;
            break;
        }
        return this.getElementScrollTop_(parent).then(function(curScrollTop) {
          var calculatedScrollTop = elementRect.top - _this5.paddingTop_ + offset;
          var newScrollTop = Math.max(0, calculatedScrollTop);
          if (newScrollTop == curScrollTop) {
            return;
          }
          return _this5.interpolateScrollIntoView_(parent, curScrollTop, newScrollTop, opt_duration, opt_curve);
        });
      }
    }, {
      key: "interpolateScrollIntoView_",
      value: function interpolateScrollIntoView_(parent, curScrollTop, newScrollTop, opt_duration, curve) {
        var _this6 = this;
        if (curve === void 0) {
          curve = "ease-in";
        }
        var duration = opt_duration !== void 0 ? dev().assertNumber(opt_duration) : getDefaultScrollAnimationDuration(curScrollTop, newScrollTop);
        var interpolate = numeric(curScrollTop, newScrollTop);
        return Animation.animate(parent, function(position) {
          _this6.setElementScrollTop_(parent, interpolate(position));
        }, duration, curve).thenAlways(function() {
          _this6.setElementScrollTop_(parent, newScrollTop);
        });
      }
    }, {
      key: "getScrollingContainerFor_",
      value: function getScrollingContainerFor_(element) {
        var _this7 = this;
        return this.vsync_.measurePromise(function() {
          return closestAncestorElementBySelector(element, ".i-amphtml-scrollable") || _this7.binding_.getScrollingElement();
        });
      }
    }, {
      key: "setElementScrollTop_",
      value: function setElementScrollTop_(element, scrollTop) {
        if (this.isScrollingElement_(element)) {
          this.binding_.setScrollTop(scrollTop);
          return;
        }
        this.vsync_.mutate(function() {
          element.scrollTop = scrollTop;
        });
      }
    }, {
      key: "getElementScrollTop_",
      value: function getElementScrollTop_(element) {
        var _this8 = this;
        if (this.isScrollingElement_(element)) {
          return tryResolve(function() {
            return _this8.getScrollTop();
          });
        }
        return this.vsync_.measurePromise(function() {
          return element.scrollTop;
        });
      }
    }, {
      key: "isScrollingElement_",
      value: function isScrollingElement_(element) {
        return element == this.binding_.getScrollingElement();
      }
    }, {
      key: "getScrollingElement",
      value: function getScrollingElement() {
        if (this.scrollingElement_) {
          return this.scrollingElement_;
        }
        return this.scrollingElement_ = this.binding_.getScrollingElement();
      }
    }, {
      key: "onChanged",
      value: function onChanged(handler) {
        return this.changeObservable_.add(handler);
      }
    }, {
      key: "onScroll",
      value: function onScroll(handler) {
        return this.scrollObservable_.add(handler);
      }
    }, {
      key: "onResize",
      value: function onResize(handler) {
        return this.resizeObservable_.add(handler);
      }
    }, {
      key: "enterLightboxMode",
      value: function enterLightboxMode(opt_requestingElement, opt_onComplete) {
        this.viewer_.sendMessage("requestFullOverlay", dict(), true);
        this.enterOverlayMode();
        if (this.fixedLayer_) {
          this.fixedLayer_.enterLightbox(opt_requestingElement, opt_onComplete);
        }
        if (opt_requestingElement) {
          this.maybeEnterFieLightboxMode(dev().assertElement(opt_requestingElement));
        }
        return this.binding_.updateLightboxMode(true);
      }
    }, {
      key: "leaveLightboxMode",
      value: function leaveLightboxMode(opt_requestingElement) {
        this.viewer_.sendMessage("cancelFullOverlay", dict(), true);
        if (this.fixedLayer_) {
          this.fixedLayer_.leaveLightbox();
        }
        this.leaveOverlayMode();
        if (opt_requestingElement) {
          this.maybeLeaveFieLightboxMode(dev().assertElement(opt_requestingElement));
        }
        return this.binding_.updateLightboxMode(false);
      }
    }, {
      key: "isLightboxExperimentOn",
      value: function isLightboxExperimentOn() {
        return isExperimentOn(this.ampdoc.win, "amp-lightbox-a4a-proto");
      }
    }, {
      key: "maybeEnterFieLightboxMode",
      value: function maybeEnterFieLightboxMode(requestingElement) {
        var fieOptional = this.getFriendlyIframeEmbed_(requestingElement);
        if (fieOptional) {
          devAssert(this.isLightboxExperimentOn(), "Lightbox mode for A4A is only available when 'amp-lightbox-a4a-proto' experiment is on");
          fieOptional.enterFullOverlayMode();
        }
      }
    }, {
      key: "maybeLeaveFieLightboxMode",
      value: function maybeLeaveFieLightboxMode(requestingElement) {
        var fieOptional = this.getFriendlyIframeEmbed_(requestingElement);
        if (fieOptional) {
          devAssert(fieOptional).leaveFullOverlayMode();
        }
      }
    }, {
      key: "getFriendlyIframeEmbed_",
      value: function getFriendlyIframeEmbed_(element) {
        var iframeOptional = getParentWindowFrameElement(element, this.ampdoc.win);
        return iframeOptional && getFriendlyIframeEmbedOptional(dev().assertElement(iframeOptional));
      }
    }, {
      key: "enterOverlayMode",
      value: function enterOverlayMode() {
        this.disableTouchZoom();
        this.disableScroll();
      }
    }, {
      key: "leaveOverlayMode",
      value: function leaveOverlayMode() {
        this.resetScroll();
        this.restoreOriginalTouchZoom();
      }
    }, {
      key: "disableScroll",
      value: function disableScroll() {
        var _this9 = this;
        var win = this.ampdoc.win;
        var documentElement = win.document.documentElement;
        var requestedMarginRight;
        this.vsync_.measure(function() {
          var existingMargin = computedStyle(win, documentElement).marginRight;
          var scrollbarWidth = getVerticalScrollbarWidth(_this9.ampdoc.win);
          requestedMarginRight = parseInt(existingMargin, 10) + scrollbarWidth;
        });
        this.vsync_.mutate(function() {
          setStyle(documentElement, "margin-right", requestedMarginRight, "px");
          _this9.binding_.disableScroll();
        });
      }
    }, {
      key: "resetScroll",
      value: function resetScroll() {
        var _this10 = this;
        var win = this.ampdoc.win;
        var documentElement = win.document.documentElement;
        this.vsync_.mutate(function() {
          setStyle(documentElement, "margin-right", "");
          _this10.binding_.resetScroll();
        });
      }
    }, {
      key: "resetTouchZoom",
      value: function resetTouchZoom() {
        var _this11 = this;
        var windowHeight = this.ampdoc.win.innerHeight;
        var documentHeight = this.globalDoc_.documentElement.clientHeight;
        if (windowHeight && documentHeight && windowHeight === documentHeight) {
          return;
        }
        if (this.disableTouchZoom()) {
          this.timer_.delay(function() {
            _this11.restoreOriginalTouchZoom();
          }, 50);
        }
      }
    }, {
      key: "disableTouchZoom",
      value: function disableTouchZoom() {
        var viewportMeta = this.getViewportMeta_();
        if (!viewportMeta) {
          return false;
        }
        var newValue = updateViewportMetaString(viewportMeta.content, {
          "maximum-scale": "1",
          "user-scalable": "no"
        });
        return this.setViewportMetaString_(newValue);
      }
    }, {
      key: "restoreOriginalTouchZoom",
      value: function restoreOriginalTouchZoom() {
        if (this.originalViewportMetaString_ !== void 0) {
          return this.setViewportMetaString_(this.originalViewportMetaString_);
        }
        return false;
      }
    }, {
      key: "updateFixedLayer",
      value: function updateFixedLayer() {
        if (!this.fixedLayer_) {
          return resolvedPromise();
        }
        return this.fixedLayer_.update();
      }
    }, {
      key: "addToFixedLayer",
      value: function addToFixedLayer(element, opt_forceTransfer) {
        if (!this.fixedLayer_) {
          return resolvedPromise();
        }
        return this.fixedLayer_.addElement(element, opt_forceTransfer);
      }
    }, {
      key: "removeFromFixedLayer",
      value: function removeFromFixedLayer(element) {
        if (!this.fixedLayer_) {
          return;
        }
        this.fixedLayer_.removeElement(element);
      }
    }, {
      key: "createFixedLayer",
      value: function createFixedLayer(constructor) {
        var _this12 = this;
        this.fixedLayer_ = new constructor(this.ampdoc, this.vsync_, this.binding_.getBorderTop(), this.paddingTop_, this.binding_.requiresFixedLayerTransfer());
        this.ampdoc.whenReady().then(function() {
          return _this12.fixedLayer_.setup();
        });
      }
    }, {
      key: "setViewportMetaString_",
      value: function setViewportMetaString_(viewportMetaString) {
        var viewportMeta = this.getViewportMeta_();
        if (viewportMeta && viewportMeta.content != viewportMetaString) {
          dev().fine(TAG_11, "changed viewport meta to:", viewportMetaString);
          viewportMeta.content = viewportMetaString;
          return true;
        }
        return false;
      }
    }, {
      key: "getViewportMeta_",
      value: function getViewportMeta_() {
        if (isIframed(this.ampdoc.win)) {
          return null;
        }
        if (this.viewportMeta_ === void 0) {
          this.viewportMeta_ = this.globalDoc_.querySelector("meta[name=viewport]");
          if (this.viewportMeta_) {
            this.originalViewportMetaString_ = this.viewportMeta_.content;
          }
        }
        return this.viewportMeta_;
      }
    }, {
      key: "viewerSetScrollTop_",
      value: function viewerSetScrollTop_(data) {
        var targetScrollTop = data["scrollTop"];
        this.setScrollTop(targetScrollTop);
      }
    }, {
      key: "updateOnViewportEvent_",
      value: function updateOnViewportEvent_(data) {
        var _this13 = this;
        var paddingTop = data["paddingTop"];
        var duration = data["duration"] || 0;
        var curve = data["curve"];
        var transient = data["transient"];
        if (paddingTop == void 0 || paddingTop == this.paddingTop_) {
          return;
        }
        this.lastPaddingTop_ = this.paddingTop_;
        this.paddingTop_ = paddingTop;
        if (this.fixedLayer_) {
          var animPromise = this.fixedLayer_.animateFixedElements(this.paddingTop_, this.lastPaddingTop_, duration, curve, transient);
          if (paddingTop < this.lastPaddingTop_) {
            this.binding_.hideViewerHeader(transient, this.lastPaddingTop_);
          } else {
            animPromise.then(function() {
              _this13.binding_.showViewerHeader(transient, paddingTop);
            });
          }
        }
      }
    }, {
      key: "disableScrollEventHandler_",
      value: function disableScrollEventHandler_(data) {
        if (!!data) {
          this.disableScroll();
        } else {
          this.resetScroll();
        }
      }
    }, {
      key: "changed_",
      value: function changed_(relayoutAll, velocity) {
        var size = this.getSize();
        var scrollTop = this.getScrollTop();
        var scrollLeft = this.getScrollLeft();
        dev().fine(TAG_11, "changed event:", "relayoutAll=", relayoutAll, "top=", scrollTop, "left=", scrollLeft, "bottom=", scrollTop + size.height, "velocity=", velocity);
        this.changeObservable_.fire({
          relayoutAll,
          top: scrollTop,
          left: scrollLeft,
          width: size.width,
          height: size.height,
          velocity
        });
      }
    }, {
      key: "scroll_",
      value: function scroll_() {
        var _this14 = this;
        this.rect_ = null;
        this.scrollCount_++;
        this.scrollLeft_ = this.binding_.getScrollLeft();
        var newScrollTop = this.binding_.getScrollTop();
        if (newScrollTop < 0) {
          return;
        }
        this.scrollTop_ = newScrollTop;
        if (!this.scrollTracking_) {
          this.scrollTracking_ = true;
          var now = Date.now();
          this.timer_.delay(function() {
            _this14.vsync_.measure(function() {
              _this14.throttledScroll_(now, newScrollTop);
            });
          }, 36);
        }
        this.scrollObservable_.fire();
      }
    }, {
      key: "throttledScroll_",
      value: function throttledScroll_(referenceTime, referenceTop) {
        var _this15 = this;
        this.scrollTop_ = this.binding_.getScrollTop();
        var newScrollTop = this.scrollTop_;
        var now = Date.now();
        var velocity = 0;
        if (now != referenceTime) {
          velocity = (newScrollTop - referenceTop) / (now - referenceTime);
        }
        dev().fine(TAG_11, "scroll: scrollTop=" + newScrollTop + "; velocity=" + velocity);
        if (Math.abs(velocity) < 0.03) {
          this.changed_(false, velocity);
          this.scrollTracking_ = false;
        } else {
          this.timer_.delay(function() {
            return _this15.vsync_.measure(_this15.throttledScroll_.bind(_this15, now, newScrollTop));
          }, 20);
        }
      }
    }, {
      key: "sendScrollMessage_",
      value: function sendScrollMessage_() {
        var _this16 = this;
        if (!this.scrollAnimationFrameThrottled_) {
          this.scrollAnimationFrameThrottled_ = true;
          this.vsync_.measure(function() {
            _this16.scrollAnimationFrameThrottled_ = false;
            _this16.viewer_.sendMessage("scroll", dict({
              "scrollTop": _this16.getScrollTop()
            }), true);
          });
        }
      }
    }, {
      key: "resize_",
      value: function resize_() {
        var _this17 = this;
        this.rect_ = null;
        var oldSize = this.size_;
        this.size_ = null;
        var newSize = this.getSize();
        this.updateFixedLayer().then(function() {
          var widthChanged = !oldSize || oldSize.width != newSize.width;
          _this17.changed_(widthChanged, 0);
          var sizeChanged = widthChanged || oldSize.height != newSize.height;
          if (sizeChanged) {
            _this17.resizeObservable_.fire({
              relayoutAll: widthChanged,
              width: newSize.width,
              height: newSize.height
            });
          }
        });
      }
    }]);
    return ViewportImpl2;
  }();
  function parseViewportMeta(content) {
    var params = Object.create(null);
    if (!content) {
      return params;
    }
    var pairs = content.split(/,|;/);
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      var split = pair.split("=");
      var name = split[0].trim();
      var value = split[1];
      value = (value || "").trim();
      if (name) {
        params[name] = value;
      }
    }
    return params;
  }
  function stringifyViewportMeta(params) {
    var content = "";
    for (var k in params) {
      if (content.length > 0) {
        content += ",";
      }
      if (params[k]) {
        content += k + "=" + params[k];
      } else {
        content += k;
      }
    }
    return content;
  }
  function updateViewportMetaString(currentValue, updateParams) {
    var params = parseViewportMeta(currentValue);
    var changed = false;
    for (var k in updateParams) {
      if (params[k] !== updateParams[k]) {
        changed = true;
        if (updateParams[k] !== void 0) {
          params[k] = updateParams[k];
        } else {
          delete params[k];
        }
      }
    }
    if (!changed) {
      return currentValue;
    }
    return stringifyViewportMeta(params);
  }
  function getDefaultScrollAnimationDuration(scrollTopA, scrollTopB, max) {
    if (max === void 0) {
      max = 500;
    }
    return Math.floor(clamp(0.65 * Math.abs(scrollTopA - scrollTopB), 0, max));
  }
  function createViewport(ampdoc) {
    var viewer = Services.viewerForDoc(ampdoc);
    var win = ampdoc.win;
    var binding;
    if (ampdoc.isSingleDoc() && getViewportType(win, viewer) == ViewportType.NATURAL_IOS_EMBED && true) {
      binding = new ViewportBindingIosEmbedWrapper_(win);
    } else {
      binding = new ViewportBindingNatural_(ampdoc);
    }
    return new ViewportImpl(ampdoc, binding, viewer);
  }
  var ViewportType = {
    NATURAL: "natural",
    NATURAL_IOS_EMBED: "natural-ios-embed"
  };
  function getViewportType(win, viewer) {
    var isIframedIos = Services.platformFor(win).isIos() && isIframed(win);
    if (getMode(win).test && isIframedIos) {
      return ViewportType.NATURAL_IOS_EMBED;
    }
    if (isIframedIos && viewer.isEmbedded() && !viewer.hasCapability("iframeScroll")) {
      return ViewportType.NATURAL_IOS_EMBED;
    }
    return ViewportType.NATURAL;
  }
  function installViewportServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "viewport", createViewport, true);
  }

  // src/service/core-services.js
  function installAmpdocServicesForEmbed(ampdoc) {
    devAssert(!!ampdoc.getParent());
    installAmpdocServicesInternal(ampdoc, true);
  }
  function installAmpdocServicesInternal(ampdoc, isEmbedded) {
    installUrlForDoc(ampdoc);
    isEmbedded ? adoptServiceFactoryForEmbedDoc(ampdoc, "templates") : installTemplatesServiceForDoc(ampdoc);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc, "documentInfo") : installDocumentInfoServiceForDoc(ampdoc);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc, "cid") : installCidService(ampdoc);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc, "viewer") : installViewerServiceForDoc(ampdoc);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc, "viewport") : installViewportServiceForDoc(ampdoc);
    installHiddenObserverForDoc(ampdoc);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc, "history") : installHistoryServiceForDoc(ampdoc);
    isEmbedded ? installInaboxResourcesServiceForDoc(ampdoc) : installResourcesServiceForDoc(ampdoc);
    installOwnersServiceForDoc(ampdoc);
    installMutatorServiceForDoc(ampdoc);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc, "url-replace") : installUrlReplacementsServiceForDoc(ampdoc);
    installActionServiceForDoc(ampdoc);
    installStandardActionsForDoc(ampdoc);
    isEmbedded ? adoptServiceForEmbedDoc(ampdoc, "storage") : installStorageServiceForDoc(ampdoc);
    installGlobalNavigationHandlerForDoc(ampdoc);
    installGlobalSubmitListenerForDoc(ampdoc);
    if (!isEmbedded) {
      installLoadingIndicatorForDoc(ampdoc);
    }
  }

  // src/polyfills/custom-elements.js
  function _createForOfIteratorHelperLoose6(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray6(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
  function _arrayLikeToArray6(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _classCallCheck48(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties47(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass47(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties47(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties47(Constructor, staticProps);
    return Constructor;
  }
  var VALID_NAME = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/;
  var INVALID_NAMES = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];
  var TRACK_SUBTREE = {
    "childList": true,
    "subtree": true
  };
  function assertValidName(SyntaxError, name) {
    if (!VALID_NAME.test(name) || INVALID_NAMES.includes(name)) {
      throw new SyntaxError('invalid custom element name "' + name + '"');
    }
  }
  function hasCustomElements(win) {
    var customElements = win.customElements;
    return !!(customElements && customElements.define && customElements.get && customElements.whenDefined);
  }
  function isPatched(win) {
    var tag = win.HTMLElement.toString();
    return tag.indexOf("[native code]") === -1;
  }
  var CustomElementRegistry = /* @__PURE__ */ function() {
    function CustomElementRegistry2(win, registry) {
      _classCallCheck48(this, CustomElementRegistry2);
      this.win_ = win;
      this.registry_ = registry;
      this.pendingDefines_ = map();
    }
    _createClass47(CustomElementRegistry2, [{
      key: "define",
      value: function define(name, ctor, options) {
        this.registry_.define(name, ctor, options);
        var pending = this.pendingDefines_;
        var deferred = pending[name];
        if (deferred) {
          deferred.resolve();
          delete pending[name];
        }
      }
    }, {
      key: "get",
      value: function get(name) {
        var def = this.registry_.getByName(name);
        if (def) {
          return def.ctor;
        }
      }
    }, {
      key: "whenDefined",
      value: function whenDefined(name) {
        var _this$win_ = this.win_, Promise2 = _this$win_.Promise, SyntaxError = _this$win_.SyntaxError;
        assertValidName(SyntaxError, name);
        if (this.registry_.getByName(name)) {
          return resolvedPromise();
        }
        var pending = this.pendingDefines_;
        var deferred = pending[name];
        if (!deferred) {
          deferred = new Deferred();
          pending[name] = deferred;
        }
        return deferred.promise;
      }
    }, {
      key: "upgrade",
      value: function upgrade(root) {
        this.registry_.upgrade(root);
      }
    }]);
    return CustomElementRegistry2;
  }();
  var Registry = /* @__PURE__ */ function() {
    function Registry2(win) {
      _classCallCheck48(this, Registry2);
      this.win_ = win;
      this.definitions_ = map();
      this.query_ = "";
      this.current_ = null;
      this.mutationObserver_ = null;
      this.roots_ = [win.document];
    }
    _createClass47(Registry2, [{
      key: "current",
      value: function current() {
        var current2 = this.current_;
        this.current_ = null;
        return current2;
      }
    }, {
      key: "getByName",
      value: function getByName(name) {
        var definition = this.definitions_[name];
        if (definition) {
          return definition;
        }
      }
    }, {
      key: "getByConstructor",
      value: function getByConstructor(ctor) {
        var definitions = this.definitions_;
        for (var name in definitions) {
          var def = definitions[name];
          if (def.ctor === ctor) {
            return def;
          }
        }
      }
    }, {
      key: "define",
      value: function define(name, ctor, options) {
        var _this$win_2 = this.win_, Error2 = _this$win_2.Error, SyntaxError = _this$win_2.SyntaxError;
        if (options) {
          throw new Error2("Extending native custom elements is not supported");
        }
        assertValidName(SyntaxError, name);
        if (this.getByName(name) || this.getByConstructor(ctor)) {
          throw new Error2('duplicate definition "' + name + '"');
        }
        this.definitions_[name] = {
          name,
          ctor
        };
        this.observe_(name);
        for (var _iterator = _createForOfIteratorHelperLoose6(this.roots_), _step; !(_step = _iterator()).done; ) {
          var tree = _step.value;
          this.upgrade(tree, name);
        }
      }
    }, {
      key: "upgrade",
      value: function upgrade(root, opt_query) {
        var newlyDefined = !!opt_query;
        var query2 = opt_query || this.query_;
        var upgradeCandidates = this.queryAll_(root, query2);
        for (var _iterator2 = _createForOfIteratorHelperLoose6(upgradeCandidates), _step2; !(_step2 = _iterator2()).done; ) {
          var candidate = _step2.value;
          if (newlyDefined) {
            this.connectedCallback_(candidate);
          } else {
            this.upgradeSelf(candidate);
          }
        }
      }
    }, {
      key: "upgradeSelf",
      value: function upgradeSelf(node) {
        var def = this.getByName(node.localName);
        if (!def) {
          return;
        }
        this.upgradeSelf_(node, def);
      }
    }, {
      key: "queryAll_",
      value: function queryAll_(root, query2) {
        if (!query2 || !root.querySelectorAll) {
          return [];
        }
        return root.querySelectorAll(query2);
      }
    }, {
      key: "upgradeSelf_",
      value: function upgradeSelf_(node, def) {
        var ctor = def.ctor;
        if (node instanceof ctor) {
          return;
        }
        this.current_ = node;
        try {
          var el = new ctor();
          if (el !== node) {
            throw new this.win_.Error("Constructor illegally returned a different instance.");
          }
        } catch (e) {
          rethrowAsync(e);
        }
      }
    }, {
      key: "connectedCallback_",
      value: function connectedCallback_(node) {
        var def = this.getByName(node.localName);
        if (!def) {
          return;
        }
        node = node;
        this.upgradeSelf_(node, def);
        if (node.connectedCallback) {
          try {
            node.connectedCallback();
          } catch (e) {
            rethrowAsync(e);
          }
        }
      }
    }, {
      key: "disconnectedCallback_",
      value: function disconnectedCallback_(node) {
        node = node;
        if (node.disconnectedCallback) {
          try {
            node.disconnectedCallback();
          } catch (e) {
            rethrowAsync(e);
          }
        }
      }
    }, {
      key: "observe_",
      value: function observe_(name) {
        var _this = this;
        if (this.query_) {
          this.query_ += "," + name;
          return;
        }
        this.query_ = name;
        var mo = new this.win_.MutationObserver(function(records) {
          if (records) {
            _this.handleRecords_(records);
          }
        });
        this.mutationObserver_ = mo;
        for (var _iterator3 = _createForOfIteratorHelperLoose6(this.roots_), _step3; !(_step3 = _iterator3()).done; ) {
          var tree = _step3.value;
          mo.observe(tree, TRACK_SUBTREE);
        }
        installPatches(this.win_, this);
      }
    }, {
      key: "observe",
      value: function observe(tree) {
        this.roots_.push(tree);
        if (this.mutationObserver_) {
          this.mutationObserver_.observe(tree, TRACK_SUBTREE);
        }
      }
    }, {
      key: "sync",
      value: function sync() {
        if (this.mutationObserver_) {
          this.handleRecords_(this.mutationObserver_.takeRecords());
        }
      }
    }, {
      key: "handleRecords_",
      value: function handleRecords_(records) {
        for (var _iterator4 = _createForOfIteratorHelperLoose6(records), _step4; !(_step4 = _iterator4()).done; ) {
          var record = _step4.value;
          if (!record) {
            continue;
          }
          var addedNodes = record.addedNodes, removedNodes = record.removedNodes;
          for (var _iterator5 = _createForOfIteratorHelperLoose6(addedNodes), _step5; !(_step5 = _iterator5()).done; ) {
            var node = _step5.value;
            var connectedCandidates = this.queryAll_(node, this.query_);
            this.connectedCallback_(node);
            for (var _iterator7 = _createForOfIteratorHelperLoose6(connectedCandidates), _step7; !(_step7 = _iterator7()).done; ) {
              var candidate = _step7.value;
              this.connectedCallback_(candidate);
            }
          }
          for (var _iterator6 = _createForOfIteratorHelperLoose6(removedNodes), _step6; !(_step6 = _iterator6()).done; ) {
            var _node = _step6.value;
            var disconnectedCandidates = this.queryAll_(_node, this.query_);
            this.disconnectedCallback_(_node);
            for (var _iterator8 = _createForOfIteratorHelperLoose6(disconnectedCandidates), _step8; !(_step8 = _iterator8()).done; ) {
              var _candidate = _step8.value;
              this.disconnectedCallback_(_candidate);
            }
          }
        }
      }
    }]);
    return Registry2;
  }();
  function installPatches(win, registry) {
    var _innerHTMLDesc;
    var Document = win.Document, Element = win.Element, Node2 = win.Node, document = win.document;
    var docProto = Document.prototype;
    var elProto = Element.prototype;
    var nodeProto = Node2.prototype;
    var createElement = docProto.createElement, importNode = docProto.importNode;
    var appendChild = nodeProto.appendChild, cloneNode = nodeProto.cloneNode, insertBefore = nodeProto.insertBefore, removeChild = nodeProto.removeChild, replaceChild = nodeProto.replaceChild;
    docProto.createElement = function(name) {
      var def = registry.getByName(name);
      if (def) {
        return new def.ctor();
      }
      return createElement.apply(this, arguments);
    };
    docProto.importNode = function() {
      var imported = importNode.apply(this, arguments);
      if (imported && this === document) {
        registry.upgradeSelf(imported);
        registry.upgrade(imported);
      }
      return imported;
    };
    nodeProto.appendChild = function() {
      var appended = appendChild.apply(this, arguments);
      registry.sync();
      return appended;
    };
    nodeProto.insertBefore = function() {
      var inserted = insertBefore.apply(this, arguments);
      registry.sync();
      return inserted;
    };
    nodeProto.removeChild = function() {
      var removed = removeChild.apply(this, arguments);
      registry.sync();
      return removed;
    };
    nodeProto.replaceChild = function() {
      var replaced = replaceChild.apply(this, arguments);
      registry.sync();
      return replaced;
    };
    nodeProto.cloneNode = function() {
      var cloned = cloneNode.apply(this, arguments);
      if (cloned.ownerDocument === document) {
        registry.upgradeSelf(cloned);
        registry.upgrade(cloned);
      }
      return cloned;
    };
    var innerHTMLProto = elProto;
    var innerHTMLDesc = Object.getOwnPropertyDescriptor(innerHTMLProto, "innerHTML");
    if (!innerHTMLDesc) {
      innerHTMLProto = Object.getPrototypeOf(win.HTMLElement.prototype);
      innerHTMLDesc = Object.getOwnPropertyDescriptor(innerHTMLProto, "innerHTML");
    }
    if ((_innerHTMLDesc = innerHTMLDesc) != null && _innerHTMLDesc.configurable) {
      var innerHTMLSetter = innerHTMLDesc.set;
      innerHTMLDesc.set = function(html2) {
        innerHTMLSetter.call(this, html2);
        registry.upgrade(this);
      };
      Object.defineProperty(innerHTMLProto, "innerHTML", innerHTMLDesc);
    }
  }
  function polyfill(win) {
    var Element = win.Element, HTMLElement = win.HTMLElement, document = win.document;
    var createElement = document.createElement;
    var registry = new Registry(win);
    var customElements = new CustomElementRegistry(win, registry);
    Object.defineProperty(win, "customElements", {
      enumerable: true,
      configurable: true,
      value: customElements
    });
    var elProto = Element.prototype;
    var attachShadow = elProto.attachShadow, createShadowRoot = elProto.createShadowRoot;
    if (attachShadow) {
      elProto.attachShadow = function(unused) {
        var shadow = attachShadow.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.attachShadow.toString = function() {
        return attachShadow.toString();
      };
    }
    if (createShadowRoot) {
      elProto.createShadowRoot = function() {
        var shadow = createShadowRoot.apply(this, arguments);
        registry.observe(shadow);
        return shadow;
      };
      elProto.createShadowRoot.toString = function() {
        return createShadowRoot.toString();
      };
    }
    function HTMLElementPolyfill() {
      var constructor = this.constructor;
      var el = registry.current();
      if (!el) {
        var def = registry.getByConstructor(constructor);
        el = createElement.call(document, def.name);
      }
      setPrototypeOf(el, constructor.prototype);
      return el;
    }
    subClass(HTMLElement, HTMLElementPolyfill);
    win.HTMLElementOrig = win.HTMLElement;
    win.HTMLElement = HTMLElementPolyfill;
    if (!HTMLElementPolyfill.call) {
      HTMLElementPolyfill.apply = win.Function.apply;
      HTMLElementPolyfill.bind = win.Function.bind;
      HTMLElementPolyfill.call = win.Function.call;
    }
  }
  function wrapHTMLElement(win) {
    var HTMLElement = win.HTMLElement, Reflect2 = win.Reflect;
    function HTMLElementWrapper() {
      var ctor = this.constructor;
      return Reflect2.construct(HTMLElement, [], ctor);
    }
    subClass(HTMLElement, HTMLElementWrapper);
    win.HTMLElementOrig = win.HTMLElement;
    win.HTMLElement = HTMLElementWrapper;
  }
  function subClass(superClass, subClass2) {
    subClass2.prototype = Object.create(superClass.prototype, {
      constructor: {
        configurable: true,
        writable: true,
        value: subClass2
      }
    });
    setPrototypeOf(subClass2, superClass);
  }
  function supportsUnderProto() {
    var proto = {
      "test": true
    };
    var obj = {};
    obj.__proto__ = proto;
    return !!obj["test"];
  }
  function setPrototypeOf(obj, prototype) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(obj, prototype);
    } else if (supportsUnderProto()) {
      obj.__proto__ = prototype;
    } else {
      copyProperties(obj, prototype);
    }
  }
  function copyProperties(obj, prototype) {
    var current = prototype;
    while (current !== null) {
      if (Object.isPrototypeOf.call(current, obj)) {
        break;
      }
      for (var _iterator9 = _createForOfIteratorHelperLoose6(Object.getOwnPropertyNames(current)), _step9; !(_step9 = _iterator9()).done; ) {
        var prop = _step9.value;
        if (Object.hasOwnProperty.call(obj, prop)) {
          continue;
        }
        var desc = Object.getOwnPropertyDescriptor(current, prop);
        Object.defineProperty(obj, prop, desc);
      }
      current = Object.getPrototypeOf(current);
    }
  }
  function install2(win, ctor) {
    var shouldInstall = win.document;
    var hasCE = hasCustomElements(win);
    if (!shouldInstall || hasCE && isPatched(win)) {
      return;
    }
    var install5 = true;
    var installWrapper = false;
    if (ctor && hasCE) {
      try {
        var _Reflect = win.Reflect;
        var instance = Object.create(ctor.prototype);
        Function.call.call(ctor, instance);
        installWrapper = !!(_Reflect != null && _Reflect.construct);
      } catch (e) {
        install5 = false;
      }
    }
    if (installWrapper) {
      wrapHTMLElement(win);
    } else if (install5) {
      polyfill(win);
    }
  }

  // src/polyfills/domtokenlist.js
  function domTokenListTogglePolyfill(token, opt_force) {
    var remove2 = opt_force === void 0 ? this.contains(token) : !opt_force;
    if (remove2) {
      this.remove(token);
      return false;
    } else {
      this.add(token);
      return true;
    }
  }
  function install3(win) {
    if (isIe(win) && win.DOMTokenList) {
      win.Object.defineProperty(win.DOMTokenList.prototype, "toggle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: domTokenListTogglePolyfill
      });
      var add = win.DOMTokenList.prototype.add;
      win.DOMTokenList.prototype.add = function() {
        for (var i = 0; i < arguments.length; i++) {
          add.call(this, arguments[i]);
        }
      };
    }
  }
  function isIe(win) {
    return /Trident|MSIE|IEMobile/i.test(win.navigator.userAgent);
  }

  // src/polyfills/document-contains.js
  function documentContainsPolyfill(node) {
    return node == this || this.documentElement.contains(node);
  }
  function install4(win) {
    var documentClass = win.HTMLDocument || win.Document;
    if (documentClass && !documentClass.prototype.contains) {
      win.Object.defineProperty(documentClass.prototype, "contains", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: documentContainsPolyfill
      });
    }
  }

  // src/polyfills/stubs/intersection-observer-stub.js
  function _createForOfIteratorHelperLoose7(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray7(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray7(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
  function _arrayLikeToArray7(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _extends4() {
    _extends4 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends4.apply(this, arguments);
  }
  function _classCallCheck49(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties48(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass48(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties48(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties48(Constructor, staticProps);
    return Constructor;
  }
  var UPGRADERS = "_upgraders";
  var STUB = "_stub";
  function shouldLoadPolyfill(win) {
    return !win.IntersectionObserver || !win.IntersectionObserverEntry || !!win.IntersectionObserver[STUB] || !supportsDocumentRoot(win) || isWebkit(win);
  }
  function isWebkit(win) {
    return /apple/i.test(win.navigator.vendor);
  }
  function supportsDocumentRoot(win) {
    try {
      new win.IntersectionObserver(function() {
      }, {
        root: win.document
      });
      return true;
    } catch (_unused) {
      return false;
    }
  }
  var IntersectionObserverStub = /* @__PURE__ */ function() {
    function IntersectionObserverStub2(callback, options) {
      _classCallCheck49(this, IntersectionObserverStub2);
      this.callback_ = callback;
      this.options_ = _extends4({
        root: null,
        rootMargin: "0px 0px 0px 0px"
      }, options);
      this.elements_ = [];
      this.inst_ = null;
      IntersectionObserverStub2[UPGRADERS].push(this.upgrade_.bind(this));
    }
    _createClass48(IntersectionObserverStub2, [{
      key: "root",
      get: function get() {
        if (this.inst_) {
          return this.inst_.root;
        }
        return this.options_.root || null;
      }
    }, {
      key: "rootMargin",
      get: function get() {
        if (this.inst_) {
          return this.inst_.rootMargin;
        }
        return this.options_.rootMargin;
      }
    }, {
      key: "thresholds",
      get: function get() {
        if (this.inst_) {
          return this.inst_.thresholds;
        }
        return [].concat(this.options_.threshold || 0);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.inst_) {
          this.inst_.disconnect();
        } else {
          this.elements_.length = 0;
        }
      }
    }, {
      key: "takeRecords",
      value: function takeRecords() {
        if (this.inst_) {
          return this.inst_.takeRecords();
        }
        return [];
      }
    }, {
      key: "observe",
      value: function observe(target) {
        if (this.inst_) {
          this.inst_.observe(target);
        } else {
          if (this.elements_.indexOf(target) == -1) {
            this.elements_.push(target);
          }
        }
      }
    }, {
      key: "unobserve",
      value: function unobserve(target) {
        if (this.inst_) {
          this.inst_.unobserve(target);
        } else {
          var index = this.elements_.indexOf(target);
          if (index != -1) {
            this.elements_.splice(index, 1);
          }
        }
      }
    }, {
      key: "upgrade_",
      value: function upgrade_(Ctor) {
        var inst = new Ctor(this.callback_, this.options_);
        this.inst_ = inst;
        for (var _iterator = _createForOfIteratorHelperLoose7(this.elements_), _step; !(_step = _iterator()).done; ) {
          var e = _step.value;
          inst.observe(e);
        }
        this.elements_.length = 0;
      }
    }]);
    return IntersectionObserverStub2;
  }();
  IntersectionObserverStub[UPGRADERS] = [];

  // src/polyfills/intersection-observer.js
  function installForChildWin(parentWin, childWin) {
    if (shouldLoadPolyfill(childWin)) {
      Object.defineProperties(childWin, {
        IntersectionObserver: {
          get: function get() {
            return parentWin.IntersectionObserver;
          }
        },
        IntersectionObserverEntry: {
          get: function get() {
            return parentWin.IntersectionObserverEntry;
          }
        }
      });
    } else {
      fixEntry(childWin);
    }
  }
  function fixEntry(win) {
    if (win.IntersectionObserverEntry && !("isIntersecting" in win.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(win.IntersectionObserverEntry.prototype, "isIntersecting", {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }
  }

  // src/polyfills/stubs/resize-observer-stub.js
  function _classCallCheck50(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties49(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass49(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties49(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties49(Constructor, staticProps);
    return Constructor;
  }
  function _createForOfIteratorHelperLoose8(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray8(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
  function _arrayLikeToArray8(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var UPGRADERS2 = "_upgraders";
  var ResizeObserverStub = /* @__PURE__ */ function() {
    function ResizeObserverStub2(callback) {
      _classCallCheck50(this, ResizeObserverStub2);
      this.callback_ = callback;
      this.elements_ = [];
      this.inst_ = null;
      ResizeObserverStub2[UPGRADERS2].push(this.upgrade_.bind(this));
    }
    _createClass49(ResizeObserverStub2, [{
      key: "disconnect",
      value: function disconnect() {
        if (this.inst_) {
          this.inst_.disconnect();
        } else {
          this.elements_.length = 0;
        }
      }
    }, {
      key: "observe",
      value: function observe(target) {
        if (this.inst_) {
          this.inst_.observe(target);
        } else {
          if (this.elements_.indexOf(target) == -1) {
            this.elements_.push(target);
          }
        }
      }
    }, {
      key: "unobserve",
      value: function unobserve(target) {
        if (this.inst_) {
          this.inst_.unobserve(target);
        } else {
          var index = this.elements_.indexOf(target);
          if (index != -1) {
            this.elements_.splice(index, 1);
          }
        }
      }
    }, {
      key: "upgrade_",
      value: function upgrade_(Ctor) {
        var inst = new Ctor(this.callback_);
        this.inst_ = inst;
        for (var _iterator2 = _createForOfIteratorHelperLoose8(this.elements_), _step2; !(_step2 = _iterator2()).done; ) {
          var e = _step2.value;
          inst.observe(e);
        }
        this.elements_.length = 0;
      }
    }]);
    return ResizeObserverStub2;
  }();
  ResizeObserverStub[UPGRADERS2] = [];

  // src/polyfills/resize-observer.js
  function installForChildWin2(parentWin, childWin) {
    if (!childWin.ResizeObserver && parentWin.ResizeObserver) {
      Object.defineProperties(childWin, {
        ResizeObserver: {
          get: function get() {
            return parentWin.ResizeObserver;
          }
        },
        ResizeObserverEntry: {
          get: function get() {
            return parentWin.ResizeObserverEntry;
          }
        }
      });
    }
  }

  // src/ini-load.js
  var EXCLUDE_INI_LOAD = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
  function whenContentIniLoad(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly) {
    if (true) {
      return whenContentIniLoadInOb(elementOrAmpDoc, opt_prerenderableOnly);
    }
    return whenContentIniLoadMeasure(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly);
  }
  function whenContentIniLoadMeasure(elementOrAmpDoc, hostWin, rect, opt_prerenderableOnly) {
    var ampdoc = Services.ampdoc(elementOrAmpDoc);
    return getMeasuredResources(ampdoc, hostWin, function(r) {
      if (!r.isDisplayed() || !r.overlaps(rect) && !r.isFixed() || opt_prerenderableOnly && !r.prerenderAllowed()) {
        return false;
      }
      return true;
    }).then(function(resources) {
      var promises = [];
      resources.forEach(function(r) {
        if (!EXCLUDE_INI_LOAD.includes(r.element.tagName)) {
          promises.push(r.loadedOnce());
        }
      });
      return Promise.all(promises);
    });
  }
  function whenContentIniLoadInOb(elementOrAmpDoc, opt_prerenderableOnly) {
    var ampdoc = Services.ampdoc(elementOrAmpDoc);
    var whenReady = ampdoc.signals().whenSignal(READY_SCAN_SIGNAL);
    return whenReady.then(function() {
      var resources = Services.resourcesForDoc(ampdoc);
      var elements2 = resources.get().filter(function(r) {
        if (opt_prerenderableOnly && !r.prerenderAllowed()) {
          return false;
        }
        return !EXCLUDE_INI_LOAD.includes(r.element.tagName);
      }).map(function(r) {
        return r.element;
      });
      if (elements2.length === 0) {
        return Promise.resolve([]);
      }
      return new Promise(function(resolve) {
        var win = ampdoc.win;
        var io = new win.IntersectionObserver(function(entries) {
          io.disconnect();
          var intersecting = [];
          for (var i2 = 0; i2 < entries.length; i2++) {
            var _entries$i = entries[i2], isIntersecting = _entries$i.isIntersecting, target = _entries$i.target;
            if (isIntersecting) {
              intersecting.push(target);
            }
          }
          resolve(intersecting);
        }, {
          root: isIframed(win) ? win.document : null,
          threshold: 0.01
        });
        for (var i = 0; i < Math.min(elements2.length, 100); i++) {
          io.observe(elements2[i]);
        }
      }).then(function(elements3) {
        return Promise.all(elements3.map(function(element) {
          return element.whenLoaded();
        }));
      });
    });
  }
  function getMeasuredResources(ampdoc, hostWin, filterFn) {
    return ampdoc.signals().whenSignal(READY_SCAN_SIGNAL).then(function() {
      var measurePromiseArray = [];
      var resources = Services.resourcesForDoc(ampdoc);
      resources.get().forEach(function(r) {
        if (!r.hasBeenMeasured() && r.hostWin == hostWin && !r.hasOwner()) {
          measurePromiseArray.push(r.ensureMeasured());
        }
      });
      return Promise.all(measurePromiseArray);
    }).then(function() {
      var resources = Services.resourcesForDoc(ampdoc);
      return resources.get().filter(function(r) {
        return r.hostWin == hostWin && !r.hasOwner() && r.hasBeenMeasured() && filterFn(r);
      });
    });
  }

  // src/friendly-iframe-embed.js
  function _classCallCheck51(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties50(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass50(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties50(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties50(Constructor, staticProps);
    return Constructor;
  }
  var srcdocSupported;
  function getDelayPromiseProducer() {
    return function(val) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          return resolve(val);
        }, 1);
      });
    };
  }
  function isSrcdocSupported() {
    if (srcdocSupported === void 0) {
      srcdocSupported = "srcdoc" in HTMLIFrameElement.prototype;
    }
    return srcdocSupported;
  }
  function getFieSafeScriptSrcs() {
    var cdnBase = getMode().localDev ? "http://localhost:8000/dist" : urls.cdn;
    return cdnBase + "/lts/ " + cdnBase + "/rtv/ " + cdnBase + "/sw/";
  }
  function preloadFriendlyIframeEmbedExtensions(win, extensions) {
    var extensionsService = Services.extensionsFor(win);
    extensions.forEach(function(_ref) {
      var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
      return extensionsService.preloadExtension(extensionId, extensionVersion);
    });
  }
  function installFriendlyIframeEmbed(iframe, container, spec, opt_preinstallCallback) {
    var win = getTopWindow(toWin(iframe.ownerDocument.defaultView));
    var extensionsService = Services.extensionsFor(win);
    var ampdocService = Services.ampdocServiceFor(win);
    setStyle(iframe, "visibility", "hidden");
    iframe.setAttribute("referrerpolicy", "unsafe-url");
    iframe.setAttribute("marginheight", "0");
    iframe.setAttribute("marginwidth", "0");
    var extensions = spec.extensions || [];
    preloadFriendlyIframeEmbedExtensions(win, extensions);
    var html2 = spec.skipHtmlMerge ? spec.html : mergeHtml(spec);
    iframe.onload = function() {
      iframe.readyState = "complete";
    };
    var registerViolationListener = function registerViolationListener2() {
      iframe.contentWindow.addEventListener("securitypolicyviolation", function(violationEvent) {
        dev().warn("FIE", "security policy violation", violationEvent);
      });
    };
    var loadedPromise;
    if (isSrcdocSupported()) {
      iframe.srcdoc = html2;
      loadedPromise = loadPromise(iframe);
      container.appendChild(iframe);
      registerViolationListener();
    } else {
      iframe.src = "about:blank";
      container.appendChild(iframe);
      var childDoc = iframe.contentWindow.document;
      registerViolationListener();
      childDoc.open();
      childDoc.write(devAssert(html2));
      loadedPromise = loadPromise(iframe.contentWindow);
      childDoc.close();
    }
    var readyPromise;
    if (isIframeReady(iframe)) {
      readyPromise = resolvedPromise();
    } else {
      readyPromise = new Promise(function(resolve) {
        var interval = win.setInterval(function() {
          if (isIframeReady(iframe)) {
            resolve();
            win.clearInterval(interval);
          }
        }, 5);
        loadedPromise.catch(function(error) {
          rethrowAsync(error);
        }).then(function() {
          resolve();
          win.clearInterval(interval);
        });
      });
    }
    return readyPromise.then(function() {
      var childWin = iframe.contentWindow;
      var signals = spec.host && spec.host.signals();
      var ampdoc = ampdocService.installFieDoc(spec.url, childWin, {
        signals
      });
      var embed = new FriendlyIframeEmbed(iframe, spec, loadedPromise, ampdoc);
      iframe[FIE_EMBED_PROP] = embed;
      if (!childWin.frameElement) {
        return null;
      }
      return Installers.installExtensionsInEmbed(embed, extensionsService, ampdoc, extensions, opt_preinstallCallback).then(function() {
        if (!childWin.frameElement) {
          return null;
        }
        return embed;
      });
    });
  }
  function isIframeReady(iframe) {
    var childDoc = iframe.contentWindow && iframe.contentWindow.document;
    return !!(childDoc && isDocumentReady(childDoc) && childDoc.body && childDoc.body.firstChild);
  }
  function mergeHtml(spec) {
    var originalHtml = spec.html;
    var originalHtmlUp = originalHtml.toUpperCase();
    var ip = originalHtmlUp.indexOf("<HEAD");
    if (ip != -1) {
      ip = originalHtmlUp.indexOf(">", ip + 1) + 1;
    }
    if (ip == -1) {
      ip = originalHtmlUp.indexOf("<BODY");
    }
    if (ip == -1) {
      ip = originalHtmlUp.indexOf("<HTML");
      if (ip != -1) {
        ip = originalHtmlUp.indexOf(">", ip + 1) + 1;
      }
    }
    var result = [];
    if (ip > 0) {
      result.push(originalHtml.substring(0, ip));
    }
    result.push('<base href="' + escapeHtml(spec.url) + '">');
    if (spec.fonts) {
      spec.fonts.forEach(function(font) {
        result.push('<link href="' + escapeHtml(font) + '" rel="stylesheet" type="text/css">');
      });
    }
    var cspScriptSrc = getFieSafeScriptSrcs();
    result.push("<meta http-equiv=Content-Security-Policy " + ('content="script-src ' + cspScriptSrc + `;object-src 'none';child-src 'none'">`));
    if (ip > 0) {
      result.push(originalHtml.substring(ip));
    } else {
      result.push(originalHtml);
    }
    return result.join("");
  }
  var FriendlyIframeEmbed = /* @__PURE__ */ function() {
    function FriendlyIframeEmbed2(iframe, spec, loadedPromise, ampdoc) {
      var _this = this;
      _classCallCheck51(this, FriendlyIframeEmbed2);
      this.iframe = iframe;
      this.win = iframe.contentWindow;
      this.ampdoc = ampdoc;
      this.spec = spec;
      this.host = spec.host || null;
      this.startTime_ = Date.now();
      this.signals_ = this.ampdoc ? this.ampdoc.signals() : this.host ? this.host.signals() : new Signals();
      this.renderComplete_ = new Deferred();
      this.winLoadedPromise_ = Promise.all([loadedPromise, this.whenRenderStarted()]);
      if (this.ampdoc) {
        this.whenRenderComplete().then(function() {
          return _this.ampdoc.setReady();
        });
      }
      this.win.addEventListener("resize", function() {
        return _this.handleResize_();
      });
    }
    _createClass50(FriendlyIframeEmbed2, [{
      key: "destroy",
      value: function destroy() {
        disposeServicesForEmbed(this.win);
        if (this.ampdoc) {
          this.ampdoc.dispose();
        }
      }
    }, {
      key: "getStartTime",
      value: function getStartTime() {
        return this.startTime_;
      }
    }, {
      key: "getUrl",
      value: function getUrl() {
        return this.spec.url;
      }
    }, {
      key: "signals",
      value: function signals() {
        return this.signals_;
      }
    }, {
      key: "whenRenderStarted",
      value: function whenRenderStarted() {
        return this.signals_.whenSignal(CommonSignals.RENDER_START);
      }
    }, {
      key: "whenWindowLoaded",
      value: function whenWindowLoaded() {
        return this.winLoadedPromise_;
      }
    }, {
      key: "whenIniLoaded",
      value: function whenIniLoaded() {
        return this.signals_.whenSignal(CommonSignals.INI_LOAD);
      }
    }, {
      key: "whenRenderComplete",
      value: function whenRenderComplete() {
        return this.renderComplete_.promise;
      }
    }, {
      key: "renderCompleted",
      value: function renderCompleted() {
        this.renderComplete_.resolve();
      }
    }, {
      key: "pause",
      value: function pause() {
        if (this.ampdoc) {
          this.ampdoc.overrideVisibilityState(VisibilityState.PAUSED);
        }
      }
    }, {
      key: "resume",
      value: function resume() {
        if (this.ampdoc) {
          this.ampdoc.overrideVisibilityState(VisibilityState.VISIBLE);
        }
      }
    }, {
      key: "startRender_",
      value: function startRender_() {
        var _this2 = this;
        if (this.host) {
          this.host.renderStarted();
        } else {
          this.signals_.signal(CommonSignals.RENDER_START);
        }
        if (!this.spec.skipHtmlMerge) {
          this.renderComplete_.resolve();
        }
        setStyle(this.iframe, "visibility", "");
        if (this.win.document && this.win.document.body) {
          this.win.document.documentElement.classList.add("i-amphtml-fie");
          setStyles(dev().assertElement(this.win.document.body), {
            opacity: 1,
            visibility: "visible",
            animation: "none"
          });
        }
        var rect;
        if (this.host) {
          rect = this.host.getLayoutBox();
        } else {
          rect = layoutRectLtwh(0, 0, this.win.innerWidth, this.win.innerHeight);
        }
        Promise.all([this.whenRenderComplete(), whenContentIniLoad(this.ampdoc, this.win, rect)]).then(function() {
          _this2.signals_.signal(CommonSignals.INI_LOAD);
        });
      }
    }, {
      key: "getBodyElement",
      value: function getBodyElement() {
        return (this.iframe.contentDocument || this.iframe.contentWindow.document).body;
      }
    }, {
      key: "handleResize_",
      value: function handleResize_() {
        this.getMutator_().mutateElement(this.win.document.documentElement, function() {
        });
      }
    }, {
      key: "getMutator_",
      value: function getMutator_() {
        return Services.mutatorForDoc(this.iframe);
      }
    }, {
      key: "measureMutate_",
      value: function measureMutate_(task) {
        return this.getMutator_().measureMutateElement(this.iframe, task.measure || null, task.mutate);
      }
    }, {
      key: "enterFullOverlayMode",
      value: function enterFullOverlayMode() {
        var _this3 = this;
        var ampAdParent = dev().assertElement(this.iframe.parentNode);
        userAssert(ampAdParent.tagName.toLowerCase() == "amp-ad", "Only <amp-ad> is allowed to enter lightbox mode.");
        var bodyStyle;
        return this.measureMutate_({
          measure: function measure() {
            var rect = _this3.host ? _this3.host.getLayoutBox() : _this3.iframe.getBoundingClientRect();
            var dy = -Services.viewportForDoc(_this3.iframe).getScrollTop();
            var _moveLayoutRect = moveLayoutRect(rect, 0, dy), height = _moveLayoutRect.height, left = _moveLayoutRect.left, top = _moveLayoutRect.top, width = _moveLayoutRect.width;
            bodyStyle = {
              top: px(top),
              left: px(left),
              width: px(width),
              height: px(height)
            };
          },
          mutate: function mutate() {
            setImportantStyles(_this3.iframe, {
              "position": "fixed",
              "left": 0,
              "right": 0,
              "bottom": 0,
              "width": "100vw",
              "top": 0,
              "height": "100vh"
            });
            setImportantStyles(_this3.getBodyElement(), {
              "background": "transparent",
              "position": "absolute",
              "bottom": "auto",
              "right": "auto",
              "top": bodyStyle.top,
              "left": bodyStyle.left,
              "width": bodyStyle.width,
              "height": bodyStyle.height
            });
          }
        });
      }
    }, {
      key: "leaveFullOverlayMode",
      value: function leaveFullOverlayMode() {
        var _this4 = this;
        return this.measureMutate_({
          mutate: function mutate() {
            resetStyles(_this4.iframe, ["position", "left", "right", "top", "bottom", "width", "height"]);
            resetStyles(_this4.getBodyElement(), ["position", "top", "left", "width", "height", "bottom", "right"]);
          }
        });
      }
    }]);
    return FriendlyIframeEmbed2;
  }();
  function installPolyfillsInChildWindow(parentWin, childWin) {
    if (true) {
      install4(childWin);
      install3(childWin);
    }
    if (true) {
      install2(childWin, /* @__PURE__ */ function() {
        function _class() {
          _classCallCheck51(this, _class);
        }
        return _class;
      }());
      installForChildWin(parentWin, childWin);
      installForChildWin2(parentWin, childWin);
      install(childWin);
    }
  }
  var Installers = /* @__PURE__ */ function() {
    function Installers2() {
      _classCallCheck51(this, Installers2);
    }
    _createClass50(Installers2, null, [{
      key: "installExtensionsInEmbed",
      value: function installExtensionsInEmbed(embed, extensionsService, ampdoc, extensions, preinstallCallback, opt_installComplete) {
        var childWin = ampdoc.win;
        var parentWin = toWin(childWin.frameElement.ownerDocument.defaultView);
        setParentWindow(childWin, parentWin);
        var getDelayPromise = getDelayPromiseProducer();
        return getDelayPromise(void 0).then(function() {
          installPolyfillsInChildWindow(parentWin, childWin);
        }).then(getDelayPromise).then(function() {
          if (false) {
            installStylesForDoc(ampdoc, cssText, null, true, "amp-runtime");
          } else {
            installStylesForDoc(ampdoc, cssText, null, true, "amp-runtime");
          }
        }).then(getDelayPromise).then(function() {
          if (!childWin.frameElement) {
            return;
          }
          if (preinstallCallback) {
            preinstallCallback(ampdoc.win, ampdoc);
          }
        }).then(getDelayPromise).then(function() {
          if (!childWin.frameElement) {
            return;
          }
          Installers2.installStandardServicesInEmbed(ampdoc);
        }).then(getDelayPromise).then(function() {
          if (!childWin.frameElement) {
            return;
          }
          extensionsService.preinstallEmbed(ampdoc, extensions);
        }).then(getDelayPromise).then(function() {
          if (!childWin.frameElement) {
            return;
          }
          embed.startRender_();
        }).then(getDelayPromise).then(function() {
          if (!childWin.frameElement) {
            return;
          }
          var promise = extensionsService.installExtensionsInDoc(ampdoc, extensions);
          ampdoc.setExtensionsKnown();
          if (opt_installComplete) {
            opt_installComplete(promise);
          }
        });
      }
    }, {
      key: "installStandardServicesInEmbed",
      value: function installStandardServicesInEmbed(ampdoc) {
        installTimerInEmbedWindow(ampdoc.win);
        installAmpdocServicesForEmbed(ampdoc);
      }
    }]);
    return Installers2;
  }();

  // extensions/amp-a4a/0.1/secure-frame.js
  var fontProviderAllowList = ["https://cdn.materialdesignicons.com", "https://cloud.typography.com", "https://fast.fonts.net", "https://fonts.googleapis.com", "https://maxcdn.bootstrapcdn.com", "https://p.typekit.net", "https://pro.fontawesome.com", "https://use.fontawesome.com", "https://use.typekit.net"].join(" ");
  var sandboxVals = "allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation";
  var createSecureDocSkeleton = function createSecureDocSkeleton2(url, sanitizedHeadElements, body) {
    return '<!DOCTYPE html>\n  <html \u26A14ads lang="en">\n  <head>\n    <base href="' + escapeHtml(url) + '">\n    <meta charset="UTF-8">\n    <meta http-equiv=Content-Security-Policy content="\n      img-src * data:;\n      media-src *;\n      font-src *;\n      connect-src *;\n      script-src ' + getFieSafeScriptSrcs() + ";\n      object-src 'none';\n      child-src 'none';\n      default-src 'none';\n      style-src " + fontProviderAllowList + ` 'unsafe-inline';
    ">
    ` + sanitizedHeadElements + "\n  </head>\n  <body>" + body + "</body>\n  </html>";
  };
  function createSecureFrame(win, title, height, width) {
    var document = win.document;
    var iframe = createElementWithAttributes(document, "iframe", dict({
      "height": height,
      "width": width,
      "title": title,
      "frameborder": "0",
      "allowfullscreen": "",
      "allowtransparency": "",
      "scrolling": "no",
      "sandbox": sandboxVals
    }));
    return iframe;
  }

  // extensions/amp-ad/0.1/concurrent-load.js
  var LOADING_ADS_WIN_ID_ = "3pla";
  var throttlePromise_ = null;
  var throttlePromiseResolver_ = null;
  function is3pThrottled(win) {
    return !!win[LOADING_ADS_WIN_ID_];
  }
  function getAmpAdRenderOutsideViewport(element) {
    var rawValue = element.getAttribute("data-loading-strategy");
    if (rawValue == null) {
      return null;
    }
    if (rawValue == "prefer-viewability-over-views" || rawValue == "") {
      return 1.25;
    }
    var errorMessage = "Value of data-loading-strategy should be a float number in range of [0, 3], but got " + rawValue;
    var viewportNumber = user().assertNumber(parseFloat(rawValue), errorMessage);
    userAssert(viewportNumber >= 0 && viewportNumber <= 3, errorMessage);
    return viewportNumber;
  }
  function incrementLoadingAds(win, opt_loadingPromise) {
    if (win[LOADING_ADS_WIN_ID_] === void 0) {
      win[LOADING_ADS_WIN_ID_] = 0;
    }
    win[LOADING_ADS_WIN_ID_]++;
    if (!throttlePromise_) {
      var deferred = new Deferred();
      throttlePromise_ = deferred.promise;
      throttlePromiseResolver_ = deferred.resolve;
    }
    Services.timerFor(win).timeoutPromise(1e3, opt_loadingPromise).catch(function() {
    }).then(function() {
      if (!--win[LOADING_ADS_WIN_ID_]) {
        throttlePromiseResolver_();
        throttlePromise_ = null;
        throttlePromiseResolver_ = null;
      }
    });
  }

  // extensions/amp-a4a/0.1/amp-ad-utils.js
  function mergeExtensionsMetadata(extensions, customElementExtensions) {
    for (var i = 0; i < customElementExtensions.length; i++) {
      var extensionId = customElementExtensions[i];
      if (!extensionsHasElement(extensions, extensionId)) {
        extensions.push({
          "custom-element": extensionId,
          src: urls.cdn + "/v0/" + extensionId + "-0.1.js"
        });
      }
    }
  }
  function extensionsHasElement(extensions, id) {
    return extensions.some(function(entry) {
      return entry["custom-element"] === id;
    });
  }
  function getExtensionsFromMetadata(creativeMetadata) {
    var parsedExtensions = [];
    var extensions = creativeMetadata.extensions;
    if (!extensions || !isArray(extensions)) {
      return parsedExtensions;
    }
    for (var i = 0; i < extensions.length; i++) {
      var extension = extensions[i];
      var extensionData = parseExtensionUrl(extension.src);
      if (extensionData) {
        parsedExtensions.push(extensionData);
      }
    }
    return parsedExtensions;
  }

  // src/extension-analytics.js
  function insertAnalyticsElement(parentElement, config, loadAnalytics, disableImmediate) {
    if (loadAnalytics === void 0) {
      loadAnalytics = false;
    }
    if (disableImmediate === void 0) {
      disableImmediate = false;
    }
    var doc = parentElement.ownerDocument;
    var analyticsElem = createElementWithAttributes(doc, "amp-analytics", dict({
      "sandbox": "true",
      "trigger": disableImmediate ? "" : "immediate"
    }));
    var scriptElem = createElementWithAttributes(doc, "script", dict({
      "type": "application/json"
    }));
    scriptElem.textContent = JSON.stringify(config);
    analyticsElem.appendChild(scriptElem);
    analyticsElem.CONFIG = config;
    if (loadAnalytics) {
      var extensions = Services.extensionsFor(toWin(parentElement.ownerDocument.defaultView));
      var ampdoc = Services.ampdoc(parentElement);
      extensions.installExtensionForDoc(ampdoc, "amp-analytics");
    } else {
      Services.analyticsForDocOrNull(parentElement).then(function(analytics) {
        devAssert(analytics);
      });
    }
    parentElement.appendChild(analyticsElem);
    return analyticsElem;
  }

  // src/service/real-time-config/callout-vendors.js
  var RTC_VENDORS = JSON.parse('{"newspassid":{"url":"https://bidder.newspassid.com/openrtb2/amp?tag_id=TAG_ID&placement_id=PLACEMENT_ID&gdpr_consent=CONSENT_STRING&ad_unit_code=AD_UNIT_CODE&site_id=SITE_ID&publisher_id=PUBLISHER_ID&custom_data=TGT&pubcid=PUBCID&adcid=ADCID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&curl=CANONICAL_URL&timeout=TIMEOUT&purl=HREF","macros":["TAG_ID","PLACEMENT_ID","SITE_ID","PUBLISHER_ID","AD_UNIT_CODE","PUBCID"],"errorReportingUrl":"https://bidder.newspassid.com/amp_error?err=ERROR_TYPE&url=HREF","disableKeyAppend":true},"ozone":{"url":"https://elb.the-ozone-project.com/openrtb2/amp?tag_id=TAG_ID&placement_id=PLACEMENT_ID&gdpr_consent=CONSENT_STRING&ad_unit_code=AD_UNIT_CODE&site_id=SITE_ID&publisher_id=PUBLISHER_ID&custom_data=TGT&pubcid=PUBCID&adcid=ADCID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&curl=CANONICAL_URL&timeout=TIMEOUT&purl=HREF","macros":["TAG_ID","PLACEMENT_ID","SITE_ID","PUBLISHER_ID","AD_UNIT_CODE","PUBCID"],"errorReportingUrl":"https://elb.the-ozone-project.com/amp_error?err=ERROR_TYPE&url=HREF","disableKeyAppend":true},"medianet":{"url":"https://amprtc.media.net/rtb/getrtc?cid=CID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&tgt=TGT&curl=CANONICAL_URL&to=TIMEOUT&purl=HREF&cste=CONSENT_STATE&cstr=CONSENT_STRING&adcid=ADCID&dmsv=ATTR(data-multi-size-validation)&ep=ELEMENT_POS&st=SCROLL_TOP&ph=PAGE_HEIGHT&bks=BKG_STATE&ref=REFERRER&dj=ATTR(data-json)","macros":["CID"],"errorReportingUrl":"https://qsearch-a.akamaihd.net/log?logid=kfk&evtid=projectevents&project=amprtc_error&error=ERROR_TYPE&rd=HREF","disableKeyAppend":true},"prebidappnexus":{"url":"https://prebid.adnxs.com/pbs/v1/openrtb2/amp?tag_id=PLACEMENT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["PLACEMENT_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"prebidappnexuspsp":{"url":"https://ib.adnxs.com/prebid/amp?tag_id=PLACEMENT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["PLACEMENT_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"prebidrubicon":{"url":"https://prebid-server.rubiconproject.com/openrtb2/amp?tag_id=REQUEST_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["REQUEST_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"indexexchange":{"url":"https://amp.casalemedia.com/amprtc?v=1&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&s=SITE_ID&p=CANONICAL_URL&consent_state=CONSENT_STATE&consent_string=CONSENT_STRING","macros":["SITE_ID","CONSENT_STATE","CONSENT_STRING"],"disableKeyAppend":true},"lotame":{"url":"https://ad.crwdcntrl.net/5/pe=y/c=CLIENT_ID/an=AD_NETWORK/ma=MAX_AUDIENCES","macros":["CLIENT_ID","AD_NETWORK","MAX_AUDIENCES"],"disableKeyAppend":true},"yieldbot":{"url":"https://i.yldbt.com/m/YB_PSN/v1/amp/init?curl=CANONICAL_URL&sn=YB_SLOT&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&aup=ATTR(data-slot)&pvi=PAGEVIEWID&tgt=TGT&adcid=ADCID&href=HREF","macros":["YB_PSN","YB_SLOT"],"disableKeyAppend":true},"salesforcedmp":{"url":"https://cdn.krxd.net/userdata/v2/amp/ORGANIZATION_ID?segments_key=SEGMENTS_KEY&kuid_key=USER_KEY","macros":["ORGANIZATION_ID","SEGMENTS_KEY","USER_KEY"],"disableKeyAppend":true},"purch":{"url":"https://ads.servebom.com/tmntag.js?v=1.2&fmt=amp&o={%22p%22%3APLACEMENT_ID}&div_id=DIV_ID","macros":["PLACEMENT_ID","DIV_ID"],"disableKeyAppend":true},"future":{"url":"https://ads.servebom.com/amp?adunit=ADUNIT&gdpr_consent=CONSENT_STRING","macros":["ADUNIT","CONSENT_STRING"],"disableKeyAppend":true},"glxm":{"url":"https://pbserver.galaxiemedia.fr/openrtb2/amp?tag_id=REQUEST_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["REQUEST_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"aps":{"url":"https://aax.amazon-adsystem.com/e/dtb/bid?src=PUB_ID&pubid=PUB_UUID&amp=1&u=CANONICAL_URL&slots=%5B%7B%22sd%22%3A%22ATTR(data-slot)%22%2C%22s%22%3A%5B%22ATTR(width)xATTR(height)%22%5D%2C%22ms%22%3A%22ATTR(data-multi-size)%22%7D%5D&pj=PARAMS&gdprc=CONSENT_STRING","macros":["PUB_ID","PARAMS","PUB_UUID","CONSENT_STRING"],"disableKeyAppend":true},"openwrap":{"url":"https://ow.pubmatic.com/amp?v=1&w=ATTR(width)&h=ATTR(height)&ms=ATTR(data-multi-size)&auId=ATTR(data-slot)&purl=HREF&pubId=PUB_ID&profId=PROFILE_ID&consent_string=CONSENT_STRING&gdpr_applies=CONSENT_METADATA(gdprApplies)&addtl_consent=CONSENT_METADATA(additionalConsent)&consent_type=CONSENT_METADATA(consentStringType)","macros":["PUB_ID","PROFILE_ID","CONSENT_STRING"],"errorReportingUrl":"https://ow.pubmatic.com/amp_error?e=ERROR_TYPE&h=HREF","disableKeyAppend":true},"criteo":{"url":"https://bidder.criteo.com/amp/rtc?zid=ZONE_ID&nid=NETWORK_ID&psubid=PUBLISHER_SUB_ID&lir=LINE_ITEM_RANGES&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&timeout=TIMEOUT&curl=CANONICAL_URL&href=HREF&cst=CONSENT_STATE&cst_str=CONSENT_STRING&cst_type=CONSENT_METADATA(consentStringType)","macros":["ZONE_ID","NETWORK_ID","PUBLISHER_SUB_ID","LINE_ITEM_RANGES","CONSENT_STATE","CONSENT_STRING"],"disableKeyAppend":true},"navegg":{"url":"https://usr.navdmp.com/usr?acc=NVG_ACC&wst=0&v=10","macros":["NVG_ACC"],"disableKeyAppend":true},"sonobi":{"url":"https://apex.go.sonobi.com/trinity.json?key_maker=%7B%22_DIVIDER_ATTR(data-slot)%7C1%22%3A%22PLACEMENT_ID_DIVIDER_ATTR(width)xATTR(height)%2CATTR(data-multi-size)%22%7D&ref=CANONICAL_URL&lib_name=amp&lib_v=0.1&pv=PAGEVIEWID&amp=1","disableKeyAppend":true,"macros":["PLACEMENT_ID","_DIVIDER_"]},"kargo":{"url":"https://krk.kargo.com/api/v1/amprtc?slot=SLOT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&pslot=ATTR(data-slot)&pvid=PAGEVIEWID&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&acid=ADCID&purl=HREF","macros":["SLOT_ID"],"errorReportingUrl":"https://krk.kargo.com/api/v1/event/amprtc-error?error_type=ERROR_TYPE&url=HREF","disableKeyAppend":true},"yieldlab":{"url":"https://ad.yieldlab.net/yp/ADSLOT_ID?content=amp&consent=CONSENT_STRING&t=amp%3D1","macros":["ADSLOT_ID","CONSENT_STRING"],"disableKeyAppend":true},"automatad":{"url":"https://pbs01.automatad.com/openrtb2/amp?tag_id=TAG_ID","macros":["TAG_ID"],"disableKeyAppend":true},"prebidflux":{"url":"https://prebid-server.flux-adserver.com/openrtb2/amp?tag_id=TAG_ID","macros":["TAG_ID"],"disableKeyAppend":true},"browsi":{"url":"https://amp.browsiprod.com/predict?pvid=PAGEVIEWID_64&ot=ELEMENT_POS&ul=SCROLL_TOP&pl=PAGE_HEIGHT&bks=BKG_STATE&pk=PUB_KEY&sk=SITE_KEY&h=ATTR(height)&adix=ATTR(data-amp-slot-index)&ref=REFERRER&url=HREF","macros":["PUB_KEY","SITE_KEY"],"errorReportingUrl":"https://events.browsiprod.com/events/amp?e=ERROR_TYPE&h=HREF&et=predict_error","disableKeyAppend":true},"freestar":{"url":"https://prebid-amp.pub.network/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["TAG_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"hubvisor":{"url":"https://pbs.hubvisor.io/openrtb2/amp?tag_id=PLACEMENT_ID&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING","macros":["PLACEMENT_ID","CONSENT_STRING"],"disableKeyAppend":true},"t13":{"url":"https://s2s.t13.io/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["TAG_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"andbeyond":{"url":"https://prebid.andbeyond.media/amp.php?tag_id=TAG_ID","macros":["TAG_ID"],"disableKeyAppend":true},"adpushup":{"url":"https://amp.adpushup.com/prebidserver/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&curl=CANONICAL_URL&gdpr_consent=CONSENT_STRING&adc=ADCID&purl=HREF","macros":["TAG_ID","CONSENT_STRING"],"disableKeyAppend":true},"admax":{"url":"https://prebid.admaxmedia.io/openrtb2/amp?tag_id=PLACEMENT_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["PLACEMENT_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"nexx360":{"url":"https://pbs.nexx360.io/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["TAG_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"prebidopenx":{"url":"https://prebid.openx.net/openrtb2/amp?tag_id=REQUEST_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["REQUEST_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"highfivve":{"url":"https://prebid-server.h5v.eu/openrtb2/amp?tag_id=TAG_ID&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adc=ADCID&purl=HREF&gdpr_consent=CONSENT_STRING&account=ACCOUNT_ID","macros":["TAG_ID","CONSENT_STRING","ACCOUNT_ID"],"disableKeyAppend":true},"tail":{"url":"https://ACCOUNT_ID.seg.t.tailtarget.com/amp","macros":["ACCOUNT_ID"],"disableKeyAppend":true}}');
  if (getMode().localDev || getMode().test) {
    RTC_VENDORS["fakevendor"] = {
      url: "https://localhost:8000/examples/rtcE1.json?slot_id=SLOT_ID&page_id=PAGE_ID&foo_id=FOO_ID",
      macros: ["SLOT_ID", "PAGE_ID", "FOO_ID"]
    };
    RTC_VENDORS["fakevendor2"] = {
      url: "https://localhost:8000/examples/rtcE1.json?slot_id=SLOT_ID&page_id=PAGE_ID&foo_id=FOO_ID",
      errorReportingUrl: "https://localhost:8000/examples/ERROR_TYPE",
      disableKeyAppend: true
    };
  }

  // src/service/real-time-config/real-time-config-impl.js
  function _extends5() {
    _extends5 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends5.apply(this, arguments);
  }
  function _classCallCheck52(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties51(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass51(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties51(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties51(Constructor, staticProps);
    return Constructor;
  }
  var TAG14 = "real-time-config";
  var MAX_RTC_CALLOUTS = 5;
  var MAX_URL_LENGTH = 16384;
  var RTC_ERROR_ENUM = {
    MALFORMED_JSON_RESPONSE: "4",
    DUPLICATE_URL: "5",
    INSECURE_URL: "6",
    MAX_CALLOUTS_EXCEEDED: "7",
    NETWORK_FAILURE: "8",
    UNKNOWN_VENDOR: "9",
    TIMEOUT: "10",
    MACRO_EXPAND_TIMEOUT: "11"
  };
  var GLOBAL_MACRO_ALLOWLIST = {
    CLIENT_ID: true
  };
  var RealTimeConfigService = /* @__PURE__ */ function() {
    function RealTimeConfigService2(ampDoc) {
      _classCallCheck52(this, RealTimeConfigService2);
      this.ampDoc_ = ampDoc;
    }
    _createClass51(RealTimeConfigService2, [{
      key: "maybeExecuteRealTimeConfig",
      value: function maybeExecuteRealTimeConfig(element, customMacros, consentState, consentString, consentMetadata, checkStillCurrent) {
        return new RealTimeConfigManager(this.ampDoc_).execute(element, customMacros, consentState, consentString, consentMetadata, checkStillCurrent);
      }
    }]);
    return RealTimeConfigService2;
  }();
  var RealTimeConfigManager = /* @__PURE__ */ function() {
    function RealTimeConfigManager2(ampDoc) {
      _classCallCheck52(this, RealTimeConfigManager2);
      this.ampDoc_ = ampDoc;
      this.win_ = ampDoc.win;
      this.seenUrls_ = {};
      this.rtcStartTime_ = null;
      this.promiseArray_ = [];
      this.rtcConfig_ = null;
      this.consentState_ = null;
      this.consentString_ = null;
      this.consentMetadata_ = null;
    }
    _createClass51(RealTimeConfigManager2, [{
      key: "buildErrorResponse_",
      value: function buildErrorResponse_(error, callout, errorReportingUrl, opt_rtcTime) {
        dev().warn(TAG14, "RTC callout to " + callout + " caused " + error);
        if (errorReportingUrl) {
          this.sendErrorMessage(error, errorReportingUrl);
        }
        return Promise.resolve({
          error,
          callout,
          rtcTime: opt_rtcTime || 0
        });
      }
    }, {
      key: "sendErrorMessage",
      value: function sendErrorMessage(errorType, errorReportingUrl) {
        if (!getMode(this.win_).localDev && !getMode(this.win_).test && Math.random() >= 0.01) {
          return;
        }
        var allowlist = {
          ERROR_TYPE: true,
          HREF: true
        };
        var macros = {
          ERROR_TYPE: errorType,
          HREF: this.win_.location.href
        };
        var service = Services.urlReplacementsForDoc(this.ampDoc_);
        var url = service.expandUrlSync(errorReportingUrl, macros, allowlist);
        new this.win_.Image().src = url;
      }
    }, {
      key: "getCalloutParam_",
      value: function getCalloutParam_(url) {
        var urlService = Services.urlForDoc(this.ampDoc_);
        var parsedUrl = urlService.parse(url);
        return (parsedUrl.hostname + parsedUrl.pathname).substr(0, 50);
      }
    }, {
      key: "isValidCalloutForConsentState",
      value: function isValidCalloutForConsentState(calloutConfig, optIsGloballyValid) {
        var sendRegardlessOfConsentState = calloutConfig.sendRegardlessOfConsentState;
        if (!isObject(calloutConfig) || !sendRegardlessOfConsentState) {
          return !!optIsGloballyValid;
        }
        if (typeof sendRegardlessOfConsentState == "boolean") {
          return sendRegardlessOfConsentState;
        }
        if (isArray(sendRegardlessOfConsentState)) {
          for (var i = 0; i < sendRegardlessOfConsentState.length; i++) {
            if (this.consentState_ == CONSENT_POLICY_STATE[sendRegardlessOfConsentState[i]]) {
              return true;
            } else if (!CONSENT_POLICY_STATE[sendRegardlessOfConsentState[i]]) {
              dev().warn(TAG14, "Invalid RTC consent state given: " + ("" + sendRegardlessOfConsentState[i]));
            }
          }
          return false;
        }
        user().warn(TAG14, "Invalid value for sendRegardlessOfConsentState:" + ("" + sendRegardlessOfConsentState));
        return !!optIsGloballyValid;
      }
    }, {
      key: "modifyRtcConfigForConsentStateSettings",
      value: function modifyRtcConfigForConsentStateSettings() {
        var _this = this;
        if (this.consentState_ == void 0 || this.consentState_ == CONSENT_POLICY_STATE.SUFFICIENT || this.consentState_ == CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED) {
          return;
        }
        var isGloballyValid = this.isValidCalloutForConsentState(this.rtcConfig_);
        this.rtcConfig_.urls = (this.rtcConfig_.urls || []).filter(function(url) {
          return _this.isValidCalloutForConsentState(url, isGloballyValid);
        });
        Object.keys(this.rtcConfig_.vendors || {}).forEach(function(vendor) {
          if (!_this.isValidCalloutForConsentState(_this.rtcConfig_.vendors[vendor], isGloballyValid)) {
            delete _this.rtcConfig_.vendors[vendor];
          }
        });
      }
    }, {
      key: "assignMacros",
      value: function assignMacros(macros) {
        var _this2 = this;
        macros["TIMEOUT"] = function() {
          return _this2.rtcConfig_.timeoutMillis;
        };
        macros["CONSENT_STATE"] = function() {
          return _this2.consentState_;
        };
        macros["CONSENT_STRING"] = function() {
          return _this2.consentString_;
        };
        macros["CONSENT_METADATA"] = function(key) {
          userAssert(key, "CONSENT_METADATA macro must contian a key");
          return _this2.consentMetadata_ ? _this2.consentMetadata_[key] : null;
        };
        return macros;
      }
    }, {
      key: "handleRtcForCustomUrls",
      value: function handleRtcForCustomUrls(customMacros, checkStillCurrent, element) {
        var _this3 = this;
        (this.rtcConfig_.urls || []).forEach(function(urlObj) {
          var url, errorReportingUrl;
          if (isObject(urlObj)) {
            url = urlObj.url;
            errorReportingUrl = urlObj.errorReportingUrl;
          } else if (typeof urlObj == "string") {
            url = urlObj;
          } else {
            dev().warn(TAG14, "Invalid url: " + urlObj);
          }
          _this3.inflateAndSendRtc_(url, customMacros, errorReportingUrl, checkStillCurrent, void 0, element);
        });
      }
    }, {
      key: "handleRtcForVendorUrls",
      value: function handleRtcForVendorUrls(customMacros, checkStillCurrent) {
        var _this4 = this;
        Object.keys(this.rtcConfig_.vendors || []).forEach(function(vendor) {
          var vendorObject = RTC_VENDORS[vendor.toLowerCase()];
          var url = vendorObject ? vendorObject.url : "";
          var errorReportingUrl = vendorObject && vendorObject.errorReportingUrl ? vendorObject.errorReportingUrl : "";
          if (!url) {
            return _this4.promiseArray_.push(_this4.buildErrorResponse_(RTC_ERROR_ENUM.UNKNOWN_VENDOR, vendor, errorReportingUrl));
          }
          var vendorMacros = isObject(_this4.rtcConfig_.vendors[vendor]["macros"]) ? _this4.rtcConfig_.vendors[vendor]["macros"] : _this4.rtcConfig_.vendors[vendor];
          var validVendorMacros = {};
          Object.keys(vendorMacros).forEach(function(macro) {
            if (!(vendorObject.macros && vendorObject.macros.includes(macro))) {
              user().error(TAG14, "Unknown macro: " + macro + " for vendor: " + vendor);
            } else {
              var value = vendorMacros[macro];
              validVendorMacros[macro] = isObject(value) || isArray(value) ? JSON.stringify(value) : value;
            }
          });
          var macros = Object.assign(validVendorMacros, customMacros);
          _this4.inflateAndSendRtc_(url, macros, errorReportingUrl, checkStillCurrent, vendor.toLowerCase());
        });
      }
    }, {
      key: "inflateAndSendRtc_",
      value: function inflateAndSendRtc_(url, macros, errorReportingUrl, checkStillCurrent, opt_vendor, opt_element) {
        var _this5 = this;
        var timeoutMillis = this.rtcConfig_.timeoutMillis;
        var callout = opt_vendor || this.getCalloutParam_(url);
        var send = function send2(url2) {
          if (Object.keys(_this5.seenUrls_).length == MAX_RTC_CALLOUTS) {
            return _this5.buildErrorResponse_(RTC_ERROR_ENUM.MAX_CALLOUTS_EXCEEDED, callout, errorReportingUrl);
          }
          if (!Services.urlForDoc(_this5.ampDoc_).isSecure(url2) && !isAmpScriptUri(url2)) {
            return _this5.buildErrorResponse_(RTC_ERROR_ENUM.INSECURE_URL, callout, errorReportingUrl);
          }
          if (_this5.seenUrls_[url2]) {
            return _this5.buildErrorResponse_(RTC_ERROR_ENUM.DUPLICATE_URL, callout, errorReportingUrl);
          }
          _this5.seenUrls_[url2] = true;
          if (url2.length > MAX_URL_LENGTH) {
            url2 = _this5.truncUrl_(url2);
          }
          return _this5.sendRtcCallout_(url2, timeoutMillis, callout, checkStillCurrent, errorReportingUrl, opt_element);
        };
        var allowlist = _extends5({}, GLOBAL_MACRO_ALLOWLIST);
        Object.keys(macros).forEach(function(key) {
          return allowlist[key] = true;
        });
        var urlReplacementStartTime = Date.now();
        this.promiseArray_.push(Services.timerFor(this.win_).timeoutPromise(timeoutMillis, Services.urlReplacementsForDoc(this.ampDoc_).expandUrlAsync(url, macros, allowlist)).then(function(url2) {
          checkStillCurrent();
          timeoutMillis -= urlReplacementStartTime - Date.now();
          return send(url2);
        }).catch(function(error) {
          return isCancellation(error) ? void 0 : _this5.buildErrorResponse_(RTC_ERROR_ENUM.MACRO_EXPAND_TIMEOUT, callout, errorReportingUrl);
        }));
      }
    }, {
      key: "truncUrl_",
      value: function truncUrl_(url) {
        url = url.substr(0, MAX_URL_LENGTH - 12).replace(/%\w?$/, "");
        return url + "&__trunc__=1";
      }
    }, {
      key: "sendRtcCallout_",
      value: function sendRtcCallout_(url, timeoutMillis, callout, checkStillCurrent, errorReportingUrl, opt_element) {
        var _this6 = this;
        var rtcFetch;
        if (isAmpScriptUri(url)) {
          rtcFetch = Services.scriptForDocOrNull(opt_element).then(function(service) {
            userAssert(service, "AMP-SCRIPT is not installed.");
            return service.fetch(url);
          }).then(function(json) {
            checkStillCurrent();
            var rtcTime = Date.now() - _this6.rtcStartTime_;
            if (typeof json !== "object") {
              return _this6.buildErrorResponse_(RTC_ERROR_ENUM.MALFORMED_JSON_RESPONSE, callout, errorReportingUrl, rtcTime);
            }
            return {
              response: json,
              rtcTime,
              callout
            };
          });
        } else {
          rtcFetch = Services.xhrFor(this.win_).fetchJson(url, {
            credentials: "include"
          }).then(function(res) {
            checkStillCurrent();
            return res.text().then(function(text) {
              checkStillCurrent();
              var rtcTime = Date.now() - _this6.rtcStartTime_;
              if (!text) {
                return {
                  rtcTime,
                  callout
                };
              }
              var response = tryParseJson(text);
              return response ? {
                response,
                rtcTime,
                callout
              } : _this6.buildErrorResponse_(RTC_ERROR_ENUM.MALFORMED_JSON_RESPONSE, callout, errorReportingUrl, rtcTime);
            });
          });
        }
        return Services.timerFor(this.win_).timeoutPromise(timeoutMillis, rtcFetch).catch(function(error) {
          return isCancellation(error) ? void 0 : _this6.buildErrorResponse_(/^timeout/.test(error.message) ? RTC_ERROR_ENUM.TIMEOUT : RTC_ERROR_ENUM.NETWORK_FAILURE, callout, errorReportingUrl, Date.now() - _this6.rtcStartTime_);
        });
      }
    }, {
      key: "execute",
      value: function execute(element, customMacros, consentState, consentString, consentMetadata, checkStillCurrent) {
        if (!this.validateRtcConfig_(element)) {
          return;
        }
        this.consentState_ = consentState;
        this.consentString_ = consentString;
        this.consentMetadata_ = consentMetadata;
        this.modifyRtcConfigForConsentStateSettings();
        customMacros = this.assignMacros(customMacros);
        this.rtcStartTime_ = Date.now();
        this.handleRtcForCustomUrls(customMacros, checkStillCurrent, element);
        this.handleRtcForVendorUrls(customMacros, checkStillCurrent);
        return Promise.all(this.promiseArray_);
      }
    }, {
      key: "validateRtcConfig_",
      value: function validateRtcConfig_(element) {
        var _this7 = this;
        var defaultTimeoutMillis = 1e3;
        var unparsedRtcConfig = element.getAttribute("rtc-config");
        if (!unparsedRtcConfig) {
          return false;
        }
        var rtcConfig = tryParseJson(unparsedRtcConfig);
        if (!rtcConfig) {
          user().warn(TAG14, "Could not JSON parse rtc-config attribute");
          return false;
        }
        var timeout;
        try {
          userAssert(rtcConfig["vendors"] || rtcConfig["urls"], "RTC Config must specify vendors or urls");
          Object.keys(rtcConfig).forEach(function(key) {
            switch (key) {
              case "vendors":
                userAssert(isObject(rtcConfig[key]), "RTC invalid vendors");
                break;
              case "urls":
                userAssert(isArray(rtcConfig[key]), "RTC invalid urls");
                break;
              case "timeoutMillis":
                timeout = parseInt(rtcConfig[key], 10);
                if (isNaN(timeout)) {
                  user().warn(TAG14, "Invalid RTC timeout is NaN, " + ("using default timeout " + defaultTimeoutMillis + "ms"));
                  timeout = void 0;
                } else if (timeout > defaultTimeoutMillis || timeout < 0) {
                  user().warn(TAG14, "Invalid RTC timeout: " + timeout + "ms, " + ("using default timeout " + defaultTimeoutMillis + "ms"));
                  timeout = void 0;
                }
                break;
              default:
                user().warn(TAG14, "Unknown RTC Config key: " + key);
                break;
            }
          });
          if (!Object.keys(rtcConfig["vendors"] || {}).length && !(rtcConfig["urls"] || []).length) {
            return false;
          }
          var validateErrorReportingUrl = function validateErrorReportingUrl2(urlObj) {
            var errorUrl = urlObj["errorReportingUrl"];
            if (errorUrl && !Services.urlForDoc(_this7.ampDoc_).isSecure(errorUrl)) {
              dev().warn(TAG14, "Insecure RTC errorReportingUrl: " + errorUrl);
              urlObj["errorReportingUrl"] = void 0;
            }
          };
          (rtcConfig["urls"] || []).forEach(function(urlObj) {
            if (isObject(urlObj)) {
              validateErrorReportingUrl(urlObj);
            }
          });
          validateErrorReportingUrl(rtcConfig);
        } catch (unusedErr) {
          return false;
        }
        rtcConfig["timeoutMillis"] = timeout !== void 0 ? timeout : defaultTimeoutMillis;
        this.rtcConfig_ = rtcConfig;
        return true;
      }
    }]);
    return RealTimeConfigManager2;
  }();
  function installRealTimeConfigServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "real-time-config", function(doc) {
      return new RealTimeConfigService(doc);
    });
  }

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
  function intersectionEntryToJson(entry) {
    return dict({
      "time": entry.time,
      "rootBounds": safeLayoutRectFromDomRect(entry.rootBounds),
      "boundingClientRect": safeLayoutRectFromDomRect(entry.boundingClientRect),
      "intersectionRect": safeLayoutRectFromDomRect(entry.intersectionRect),
      "intersectionRatio": entry.intersectionRatio
    });
  }
  function safeLayoutRectFromDomRect(rect) {
    if (rect === null) {
      return null;
    }
    return layoutRectFromDomRect(rect);
  }

  // src/ad-helper.js
  var CONTAINERS = {
    "AMP-FX-FLYING-CARPET": true,
    "AMP-LIGHTBOX": true,
    "AMP-STICKY-AD": true,
    "AMP-LIGHTBOX-GALLERY": true
  };
  function isPositionFixed(el, win) {
    var _computedStyle = computedStyle(win, el), position = _computedStyle.position;
    return position == "fixed" || position == "sticky";
  }
  function isAdPositionAllowed(element, win) {
    var hasFixedAncestor = false;
    var containers = 0;
    var el = element;
    do {
      if (CONTAINERS[el.tagName]) {
        containers++;
        hasFixedAncestor = false;
      } else if (isPositionFixed(dev().assertElement(el), win)) {
        hasFixedAncestor = true;
      }
      el = el.parentElement;
    } while (el && el.tagName != "BODY");
    return !hasFixedAncestor && containers <= 1;
  }

  // extensions/amp-a4a/0.1/head-validation.js
  var ALLOWED_FONT_REGEX = new RegExp("https://cdn\\.materialdesignicons\\.com/([0-9]+\\.?)+/css/materialdesignicons\\.min\\.css|https://cloud\\.typography\\.com/[0-9]*/[0-9]*/css/fonts\\.css|https://fast\\.fonts\\.net/.*|https://fonts\\.googleapis\\.com/css2?\\?.*|https://fonts\\.googleapis\\.com/icon\\?.*|https://fonts\\.googleapis\\.com/earlyaccess/.*\\.css|https://maxcdn\\.bootstrapcdn\\.com/font-awesome/([0-9]+\\.?)+/css/font-awesome\\.min\\.css(\\?.*)?|https://(use|pro)\\.fontawesome\\.com/releases/v([0-9]+\\.?)+/css/[0-9a-zA-Z-]+\\.css|https://(use|pro)\\.fontawesome\\.com/[0-9a-zA-Z-]+\\.css|https://use\\.typekit\\.net/[\\w\\p{L}\\p{N}_]+\\.css");
  var EXTENSION_ALLOWLIST = map({
    "amp-accordion": true,
    "amp-ad-exit": true,
    "amp-analytics": true,
    "amp-anim": true,
    "amp-animation": true,
    "amp-audio": true,
    "amp-bind": true,
    "amp-carousel": true,
    "amp-fit-text": true,
    "amp-font": true,
    "amp-form": true,
    "amp-gwd-animation": true,
    "amp-img": true,
    "amp-layout": true,
    "amp-lightbox": true,
    "amp-mraid": true,
    "amp-mustache": true,
    "amp-pixel": true,
    "amp-position-observer": true,
    "amp-selector": true,
    "amp-social-share": true,
    "amp-video": true
  });
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  var EXTENSION_URL_PREFIX = new RegExp("^" + escapeRegExp(urls.cdn) + "/(rtv/\\d+/)?v0/");
  function processHead(win, adElement, head) {
    if (!head || !head.firstChild) {
      return null;
    }
    var root = rootNodeFor(head);
    var htmlTag = root.documentElement;
    if (!htmlTag || !htmlTag.hasAttribute("amp4ads") && !htmlTag.hasAttribute("\u26A1\uFE0F4ads") && !htmlTag.hasAttribute("\u26A14ads")) {
      return null;
    }
    var urlService = Services.urlForDoc(adElement);
    var extensions = [];
    var fonts = [];
    var images = [];
    var element = head.firstElementChild;
    while (element) {
      var nextElement = element.nextElementSibling;
      switch (element.tagName.toUpperCase()) {
        case "SCRIPT":
          handleScript(extensions, element);
          break;
        case "STYLE":
          handleStyle(element);
          break;
        case "LINK":
          handleLink(fonts, images, element);
          break;
        case "META":
        case "TITLE":
          break;
        default:
          removeElement(element);
          break;
      }
      element = nextElement;
    }
    preloadFriendlyIframeEmbedExtensions(win, extensions);
    fonts.forEach(function(fontUrl) {
      return Services.preconnectFor(win).preload(adElement.getAmpDoc(), fontUrl);
    });
    images.forEach(function(imageUrl) {
      return urlService.isSecure(imageUrl) && Services.preconnectFor(win).preload(adElement.getAmpDoc(), imageUrl);
    });
    return {
      extensions,
      head
    };
  }
  function handleScript(extensions, script) {
    if (script.type === "application/json") {
      return;
    }
    var src = script.src;
    var isTesting = getMode().test || getMode().localDev;
    if (EXTENSION_URL_PREFIX.test(src) || isTesting && includes(src, "/dist/")) {
      var extensionInfo = parseExtensionUrl(src);
      if (extensionInfo && EXTENSION_ALLOWLIST[extensionInfo.extensionId]) {
        extensions.push(extensionInfo);
      }
    }
    removeElement(script);
  }
  function handleLink(fonts, images, link) {
    var as = link.as, href = link.href, rel = link.rel;
    if (rel === "preload" && as === "image") {
      images.push(href);
      return;
    }
    if (rel === "stylesheet" && ALLOWED_FONT_REGEX.test(href)) {
      fonts.push(href);
      return;
    }
    removeElement(link);
  }
  function handleStyle(style) {
    if (style.hasAttribute("amp-custom") || style.hasAttribute("amp-keyframes") || style.hasAttribute("amp4ads-boilerplate")) {
      return;
    }
    removeElement(style);
  }

  // ads/_a4a-config.js
  var signingServerURLs = {
    "google": "https://cdn.ampproject.org/amp-ad-verifying-keyset.json",
    "google-dev": "https://cdn.ampproject.org/amp-ad-verifying-keyset-dev.json"
  };

  // extensions/amp-a4a/0.1/within-viewport.js
  var OBSERVERS_MAP_PROP = "__AMP_A4A_VP_MAP";
  function whenWithinViewport(element, viewportNum) {
    if (!(getMode().localDev || getMode().test)) {
      return Promise.reject("!WITHIN_VIEWPORT_INOB");
    }
    var win = toWin(element.ownerDocument.defaultView);
    var observersMap = memo(win, OBSERVERS_MAP_PROP, createObserversMap);
    var observer = observersMap.get(viewportNum);
    if (!observer) {
      observer = createObserver(win, viewportNum);
      observersMap.set(viewportNum, observer);
    }
    return observer(element);
  }
  var createObserversMap = function createObserversMap2() {
    return new Map();
  };
  function createObserver(win, viewportNum) {
    var elements2 = new WeakMap();
    var callback = function callback2(records) {
      for (var i = 0; i < records.length; i++) {
        var _records$i = records[i], isIntersecting = _records$i.isIntersecting, element = _records$i.target;
        var deferred = elements2.get(element);
        if (deferred && isIntersecting) {
          deferred.resolve();
          observer.unobserve(element);
          elements2.delete(element);
        }
      }
    };
    var iframed = isIframed(win);
    var root = iframed ? win.document : null;
    var observer = new win.IntersectionObserver(callback, {
      root,
      rootMargin: (viewportNum - 1) * 100 + "%"
    });
    return function(element) {
      var deferred = elements2.get(element);
      if (!deferred) {
        deferred = new Deferred();
        elements2.set(element, deferred);
        observer.observe(element);
      }
      return deferred.promise;
    };
  }

  // extensions/amp-a4a/0.1/amp-a4a.js
  function _classCallCheck53(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties52(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass52(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties52(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties52(Constructor, staticProps);
    return Constructor;
  }
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target2, property2, receiver2) {
        var base = _superPropBase(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf4(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _inherits4(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass2, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf4(o, p);
  }
  function _createSuper4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct4();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf4(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf4(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn4(this, result);
    };
  }
  function _possibleConstructorReturn4(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized4(self2);
  }
  function _assertThisInitialized4(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct4() {
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
  function _getPrototypeOf4(o) {
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  var METADATA_STRINGS = ["<script amp-ad-metadata type=application/json>", '<script type="application/json" amp-ad-metadata>', "<script type=application/json amp-ad-metadata>"];
  var DEFAULT_SAFEFRAME_VERSION = "1-0-37";
  var CREATIVE_SIZE_HEADER = "X-CreativeSize";
  var RENDERING_TYPE_HEADER = "X-AmpAdRender";
  var SAFEFRAME_VERSION_HEADER = "X-AmpSafeFrameVersion";
  var EXPERIMENT_FEATURE_HEADER_NAME = "amp-ff-exps";
  var TAG15 = "amp-a4a";
  var NO_CONTENT_RESPONSE = "NO-CONTENT-RESPONSE";
  var NETWORK_FAILURE = "NETWORK-FAILURE";
  var INVALID_SPSA_RESPONSE = "INVALID-SPSA-RESPONSE";
  var IFRAME_GET = "IFRAME-GET";
  var XORIGIN_MODE = {
    CLIENT_CACHE: "client_cache",
    SAFEFRAME: "safeframe",
    NAMEFRAME: "nameframe",
    IFRAME_GET: "iframe_get"
  };
  var SHARED_IFRAME_PROPERTIES = dict({
    "frameborder": "0",
    "allowfullscreen": "",
    "allowtransparency": "",
    "scrolling": "no",
    "marginwidth": "0",
    "marginheight": "0"
  });
  var AnalyticsTrigger = {
    AD_REQUEST_START: "ad-request-start",
    AD_RESPONSE_END: "ad-response-end",
    AD_RENDER_START: "ad-render-start",
    AD_RENDER_END: "ad-render-end",
    AD_IFRAME_LOADED: "ad-iframe-loaded",
    AD_REFRESH: "ad-refresh"
  };
  var LIFECYCLE_STAGE_TO_ANALYTICS_TRIGGER = {
    "adRequestStart": AnalyticsTrigger.AD_REQUEST_START,
    "adRequestEnd": AnalyticsTrigger.AD_RESPONSE_END,
    "renderFriendlyStart": AnalyticsTrigger.AD_RENDER_START,
    "renderCrossDomainStart": AnalyticsTrigger.AD_RENDER_START,
    "renderSafeFrameStart": AnalyticsTrigger.AD_RENDER_START,
    "renderFriendlyEnd": AnalyticsTrigger.AD_RENDER_END,
    "renderCrossDomainEnd": AnalyticsTrigger.AD_RENDER_END,
    "friendlyIframeIniLoad": AnalyticsTrigger.AD_IFRAME_LOADED,
    "crossDomainIframeLoaded": AnalyticsTrigger.AD_IFRAME_LOADED
  };
  var MODULE_NOMODULE_PARAMS_EXP = {
    ID: "module-nomodule",
    CONTROL: "21066677",
    EXPERIMENT: "21066678"
  };
  function protectFunctionWrapper(fn, inThis, onError2) {
    if (inThis === void 0) {
      inThis = void 0;
    }
    if (onError2 === void 0) {
      onError2 = void 0;
    }
    return function() {
      for (var _len = arguments.length, fnArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        fnArgs[_key] = arguments[_key];
      }
      try {
        return fn.apply(inThis, fnArgs);
      } catch (err) {
        if (onError2) {
          try {
            fnArgs.unshift(err);
            return onError2.apply(inThis, fnArgs);
          } catch (captureErr) {
          }
        }
        return void 0;
      }
    };
  }
  var AmpA4A = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits4(AmpA4A2, _AMP$BaseElement);
    var _super = _createSuper4(AmpA4A2);
    function AmpA4A2(element) {
      var _this;
      _classCallCheck53(this, AmpA4A2);
      _this = _super.call(this, element);
      devAssert(AMP.AmpAdUIHandler);
      devAssert(AMP.AmpAdXOriginIframeHandler);
      _this.keysetPromise_ = null;
      _this.adPromise_ = null;
      _this.promiseId_ = 0;
      _this.adUrl_ = null;
      _this.friendlyIframeEmbed_ = null;
      _this.uiHandler = null;
      _this.xOriginIframeHandler_ = null;
      _this.isVerifiedAmpCreative_ = false;
      _this.creativeBody_ = null;
      _this.creativeSize_ = null;
      _this.originalSlotSize_ = null;
      _this.initialIntersectionPromise_ = null;
      _this.experimentalNonAmpCreativeRenderMethod_ = _this.getNonAmpCreativeRenderingMethod();
      _this.getNow_ = _this.win.performance && _this.win.performance.now ? _this.win.performance.now.bind(_this.win.performance) : Date.now;
      _this.sentinel = generateSentinel(window);
      _this.isCollapsed_ = false;
      _this.iframe = null;
      _this.safeframeVersion = DEFAULT_SAFEFRAME_VERSION;
      _this.isRefreshing = false;
      _this.isRelayoutNeededFlag = false;
      _this.postAdResponseExperimentFeatures = {};
      _this.a4aAnalyticsConfig_ = null;
      _this.a4aAnalyticsElement_ = null;
      _this.isSinglePageStoryAd = false;
      _this.transferDomBody_ = null;
      _this.boundViewportCallback_ = _this.viewportCallbackTemp.bind(_assertThisInitialized4(_this));
      return _this;
    }
    _createClass52(AmpA4A2, [{
      key: "getLayoutPriority",
      value: function getLayoutPriority() {
        var isPWA = !this.element.getAmpDoc().isSingleDoc();
        return isPWA ? LayoutPriority.METADATA : LayoutPriority.ADS;
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "isRelayoutNeeded",
      value: function isRelayoutNeeded() {
        return this.isRelayoutNeededFlag;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.creativeSize_ = {
          width: this.element.getAttribute("width"),
          height: this.element.getAttribute("height")
        };
        var upgradeDelayMs = Math.round(this.getResource().getUpgradeDelayMs());
        dev().info(TAG15, "upgradeDelay " + this.element.getAttribute("type") + ": " + upgradeDelayMs);
        this.uiHandler = new AMP.AmpAdUIHandler(this);
        var verifier = signatureVerifierFor(this.win);
        this.keysetPromise_ = this.getAmpDoc().whenFirstVisible().then(function() {
          _this2.getSigningServiceNames().forEach(function(signingServiceName) {
            verifier.loadKeyset(signingServiceName);
          });
        });
        this.a4aAnalyticsConfig_ = this.getA4aAnalyticsConfig();
        if (this.a4aAnalyticsConfig_) {
          this.a4aAnalyticsElement_ = insertAnalyticsElement(this.element, this.a4aAnalyticsConfig_, true);
        }
        this.isSinglePageStoryAd = this.element.hasAttribute("amp-story");
        var asyncIntersection = getExperimentBranch(this.win, ADS_INITIAL_INTERSECTION_EXP.id) === ADS_INITIAL_INTERSECTION_EXP.experiment;
        this.initialIntersectionPromise_ = asyncIntersection ? measureIntersection(this.element) : Promise.resolve(this.element.getIntersectionChangeEntry());
      }
    }, {
      key: "renderOutsideViewport",
      value: function renderOutsideViewport() {
        if (!this.isVerifiedAmpCreative_ && is3pThrottled(this.win) && !this.inNonAmpPreferenceExp()) {
          return false;
        }
        var elementCheck = getAmpAdRenderOutsideViewport(this.element);
        return elementCheck !== null ? elementCheck : _get(_getPrototypeOf4(AmpA4A2.prototype), "renderOutsideViewport", this).call(this);
      }
    }, {
      key: "isValidElement",
      value: function isValidElement() {
        return true;
      }
    }, {
      key: "getCreativeSize",
      value: function getCreativeSize() {
        return this.creativeSize_;
      }
    }, {
      key: "delayAdRequestEnabled",
      value: function delayAdRequestEnabled() {
        return false;
      }
    }, {
      key: "getPreconnectUrls",
      value: function getPreconnectUrls() {
        return [];
      }
    }, {
      key: "getPrefetchUrls",
      value: function getPrefetchUrls() {
        return [];
      }
    }, {
      key: "isAmpAdElement",
      value: function isAmpAdElement() {
        return this.element.tagName == "AMP-AD" || this.element.tagName == "AMP-EMBED";
      }
    }, {
      key: "preconnectCallback",
      value: function preconnectCallback(unusedOnLayout) {
        var _this3 = this;
        var preconnect = this.getPreconnectUrls();
        if (preconnect) {
          preconnect.forEach(function(p) {
            Services.preconnectFor(_this3.win).url(_this3.getAmpDoc(), p, true);
          });
        }
      }
    }, {
      key: "pauseCallback",
      value: function pauseCallback() {
        if (this.friendlyIframeEmbed_) {
          this.friendlyIframeEmbed_.pause();
        }
      }
    }, {
      key: "resumeCallback",
      value: function resumeCallback() {
        if (this.friendlyIframeEmbed_) {
          this.friendlyIframeEmbed_.resume();
          return;
        }
        var resource = this.getResource();
        if (resource.hasBeenMeasured() && !resource.isMeasureRequested()) {
          this.onLayoutMeasure();
        }
      }
    }, {
      key: "getResource",
      value: function getResource() {
        return this.element.getResources().getResourceForElement(this.element);
      }
    }, {
      key: "hasAdPromise",
      value: function hasAdPromise() {
        return !!this.adPromise_;
      }
    }, {
      key: "inNonAmpPreferenceExp",
      value: function inNonAmpPreferenceExp() {
        return !!this.postAdResponseExperimentFeatures["pref_neutral_enabled"] && ["adsense", "doubleclick"].includes(this.element.getAttribute("type"));
      }
    }, {
      key: "shouldInitializePromiseChain_",
      value: function shouldInitializePromiseChain_() {
        var slotRect = this.getIntersectionElementLayoutBox();
        var fixedSizeZeroHeightOrWidth = this.getLayout() != Layout.FLUID && (slotRect.height == 0 || slotRect.width == 0);
        if (fixedSizeZeroHeightOrWidth || this.element.hasAttribute("hidden") || this.element.classList.contains("i-amphtml-hidden-by-media-query")) {
          dev().fine(TAG15, "onLayoutMeasure canceled due height/width 0", this.element);
          return false;
        }
        if (!isAdPositionAllowed(this.element, this.win)) {
          user().warn(TAG15, "<" + this.element.tagName + "> is not allowed to be " + ("placed in elements with position: fixed or sticky: " + this.element));
          return false;
        }
        if (!this.isValidElement()) {
          user().warn(TAG15, this.element.getAttribute("type"), "Amp ad element ignored as invalid", this.element);
          return false;
        }
        return true;
      }
    }, {
      key: "onLayoutMeasure",
      value: function onLayoutMeasure() {
        this.initiateAdRequest();
      }
    }, {
      key: "whenWithinViewport",
      value: function whenWithinViewport2(viewport) {
        devAssert(viewport !== false);
        var resource = this.getResource();
        if (getMode().localDev || getMode().test) {
          if (!resource.isLayoutPending() || viewport === true) {
            return resolvedPromise();
          }
          var viewportNum = dev().assertNumber(viewport);
          return whenWithinViewport(this.element, viewportNum);
        }
        return resource.whenWithinViewport(viewport);
      }
    }, {
      key: "initiateAdRequest",
      value: function initiateAdRequest() {
        var _this4 = this;
        if (this.xOriginIframeHandler_) {
          this.xOriginIframeHandler_.onLayoutMeasure();
        }
        if (this.adPromise_ || !this.shouldInitializePromiseChain_()) {
          return;
        }
        ++this.promiseId_;
        var checkStillCurrent = this.verifyStillCurrent();
        this.adPromise_ = this.getAmpDoc().whenFirstVisible().then(function() {
          checkStillCurrent();
          var delay = _this4.delayAdRequestEnabled();
          if (delay) {
            return _this4.whenWithinViewport(typeof delay == "number" ? delay : _this4.renderOutsideViewport());
          }
        }).then(function() {
          checkStillCurrent();
          var consentPolicyId = _get(_getPrototypeOf4(AmpA4A2.prototype), "getConsentPolicy", _this4).call(_this4);
          if (consentPolicyId) {
            var consentStatePromise = getConsentPolicyState(_this4.element, consentPolicyId).catch(function(err) {
              user().error(TAG15, "Error determining consent state", err);
              return CONSENT_POLICY_STATE.UNKNOWN;
            });
            var consentStringPromise = getConsentPolicyInfo(_this4.element, consentPolicyId).catch(function(err) {
              user().error(TAG15, "Error determining consent string", err);
              return null;
            });
            var consentMetadataPromise = getConsentMetadata(_this4.element, consentPolicyId).catch(function(err) {
              user().error(TAG15, "Error determining consent metadata", err);
              return null;
            });
            return Promise.all([consentStatePromise, consentStringPromise, consentMetadataPromise]);
          }
          return Promise.resolve([null, null, null]);
        }).then(function(consentResponse) {
          checkStillCurrent();
          var consentState = consentResponse[0];
          var consentString = consentResponse[1];
          var consentMetadata = consentResponse[2];
          var gdprApplies = consentMetadata ? consentMetadata["gdprApplies"] : consentMetadata;
          var additionalConsent = consentMetadata ? consentMetadata["additionalConsent"] : consentMetadata;
          var consentStringType = consentMetadata ? consentMetadata["consentStringType"] : consentMetadata;
          return _this4.getServeNpaSignal().then(function(npaSignal) {
            return _this4.getAdUrl({
              consentState,
              consentString,
              consentStringType,
              gdprApplies,
              additionalConsent
            }, _this4.tryExecuteRealTimeConfig_(consentState, consentString, consentMetadata), npaSignal);
          });
        }).then(function(adUrl) {
          checkStillCurrent();
          _this4.adUrl_ = adUrl;
          if (!_this4.isXhrAllowed() && !!_this4.adUrl_) {
            _this4.experimentalNonAmpCreativeRenderMethod_ = XORIGIN_MODE.IFRAME_GET;
            return Promise.reject(IFRAME_GET);
          }
          return adUrl && _this4.sendXhrRequest(adUrl);
        }).then(function(fetchResponse) {
          checkStillCurrent();
          _this4.maybeTriggerAnalyticsEvent_("adRequestEnd");
          if (!fetchResponse || !fetchResponse.arrayBuffer || fetchResponse.headers.has("amp-ff-empty-creative")) {
            _this4.forceCollapse();
            return Promise.reject(NO_CONTENT_RESPONSE);
          }
          if (fetchResponse.headers && fetchResponse.headers.has(EXPERIMENT_FEATURE_HEADER_NAME)) {
            _this4.populatePostAdResponseExperimentFeatures_(fetchResponse.headers.get(EXPERIMENT_FEATURE_HEADER_NAME));
          }
          if (getMode().localDev && _this4.win.location && _this4.win.location.search) {
            var match = /(?:\?|&)a4a_feat_exp=([^&]+)/.exec(_this4.win.location.search);
            if (match && match[1]) {
              dev().info(TAG15, "Using debug exp features: " + match[1]);
              _this4.populatePostAdResponseExperimentFeatures_(tryDecodeUriComponent(match[1]));
            }
          }
          var method = _this4.getNonAmpCreativeRenderingMethod(fetchResponse.headers.get(RENDERING_TYPE_HEADER));
          _this4.experimentalNonAmpCreativeRenderMethod_ = method;
          if (_this4.experimentalNonAmpCreativeRenderMethod_ == XORIGIN_MODE.NAMEFRAME) {
            Services.preconnectFor(_this4.win).preload(_this4.getAmpDoc(), getDefaultBootstrapBaseUrl(_this4.win, "nameframe"));
          }
          var safeframeVersionHeader = fetchResponse.headers.get(SAFEFRAME_VERSION_HEADER);
          if (/^[0-9-]+$/.test(safeframeVersionHeader) && safeframeVersionHeader != DEFAULT_SAFEFRAME_VERSION) {
            _this4.safeframeVersion = safeframeVersionHeader;
            Services.preconnectFor(_this4.win).preload(_this4.getAmpDoc(), _this4.getSafeframePath());
          }
          return fetchResponse;
        }).then(function(fetchResponse) {
          return _this4.isInNoSigningExp() ? _this4.streamResponse_(fetchResponse, checkStillCurrent) : _this4.startValidationFlow_(fetchResponse, checkStillCurrent);
        }).catch(function(error) {
          switch (error.message || error) {
            case IFRAME_GET:
            case NETWORK_FAILURE:
              return null;
            case INVALID_SPSA_RESPONSE:
            case NO_CONTENT_RESPONSE:
              return {
                minifiedCreative: "",
                customElementExtensions: [],
                customStylesheets: []
              };
          }
          _this4.promiseErrorHandler_(error);
          return null;
        });
      }
    }, {
      key: "isInNoSigningExp",
      value: function isInNoSigningExp() {
        return true;
      }
    }, {
      key: "skipClientSideValidation",
      value: function skipClientSideValidation(unusedHeaders) {
        return false;
      }
    }, {
      key: "streamResponse_",
      value: function streamResponse_(httpResponse, checkStillCurrent) {
        var _this5 = this;
        if (httpResponse.status === 204) {
          this.forceCollapse();
          return Promise.reject(NO_CONTENT_RESPONSE);
        }
        var size = this.extractSize(httpResponse.headers);
        this.creativeSize_ = size || this.creativeSize_;
        if (!isPlatformSupported(this.win) || this.skipClientSideValidation(httpResponse.headers)) {
          return this.handleFallback_(httpResponse, checkStillCurrent);
        }
        var fallbackHttpResponse = httpResponse.clone();
        var transformStream = new DomTransformStream(this.win);
        var detachedStream = new DetachedDomStream(this.win, function(chunk) {
          return transformStream.onChunk(chunk);
        }, function(doc) {
          return transformStream.onEnd(doc);
        });
        this.transferDomBody_ = transformStream.transferBody.bind(transformStream);
        return streamResponseToWriter(this.win, httpResponse, detachedStream).then(function(responseBodyHasContent) {
          checkStillCurrent();
          if (!responseBodyHasContent) {
            _this5.forceCollapse();
            return Promise.reject(NO_CONTENT_RESPONSE);
          }
        }).then(function() {
          checkStillCurrent();
          return transformStream.waitForHead();
        }).then(function(head) {
          checkStillCurrent();
          return _this5.validateHeadElement_(head);
        }).then(function(sanitizedHeadElement) {
          checkStillCurrent();
          if (!sanitizedHeadElement) {
            return _this5.handleFallback_(fallbackHttpResponse, checkStillCurrent);
          }
          _this5.updateLayoutPriority(LayoutPriority.CONTENT);
          _this5.isVerifiedAmpCreative_ = true;
          return sanitizedHeadElement;
        });
      }
    }, {
      key: "handleFallback_",
      value: function handleFallback_(fallbackHttpResponse, checkStillCurrent) {
        var _this6 = this;
        if (this.inNonAmpPreferenceExp()) {
          this.updateLayoutPriority(LayoutPriority.CONTENT);
        }
        return fallbackHttpResponse.arrayBuffer().then(function(domTextContent) {
          checkStillCurrent();
          _this6.creativeBody_ = domTextContent;
          return null;
        });
      }
    }, {
      key: "validateHeadElement_",
      value: function validateHeadElement_(headElement) {
        return processHead(this.win, this.element, headElement);
      }
    }, {
      key: "startValidationFlow_",
      value: function startValidationFlow_(fetchResponse, checkStillCurrent) {
        var _this7 = this;
        return fetchResponse.arrayBuffer().then(function(bytes) {
          if (bytes.byteLength == 0) {
            _this7.forceCollapse();
            return Promise.reject(NO_CONTENT_RESPONSE);
          }
          return {
            bytes,
            headers: fetchResponse.headers
          };
        }).then(function(responseParts) {
          checkStillCurrent();
          if (!responseParts) {
            return null;
          }
          var bytes = responseParts.bytes, headers = responseParts.headers;
          var size = _this7.extractSize(responseParts.headers);
          _this7.creativeSize_ = size || _this7.creativeSize_;
          if (_this7.experimentalNonAmpCreativeRenderMethod_ != XORIGIN_MODE.CLIENT_CACHE && bytes) {
            _this7.creativeBody_ = bytes;
          }
          return _this7.maybeValidateAmpCreative(bytes, headers);
        }).then(function(creative) {
          checkStillCurrent();
          _this7.isVerifiedAmpCreative_ = !!creative;
          return creative && utf8Decode(creative);
        }).then(function(creativeDecoded) {
          checkStillCurrent();
          var creativeMetaDataDef;
          if (!isPlatformSupported(_this7.win) || !creativeDecoded || !(creativeMetaDataDef = _this7.getAmpAdMetadata(creativeDecoded))) {
            if (_this7.inNonAmpPreferenceExp()) {
              _this7.updateLayoutPriority(LayoutPriority.CONTENT);
            }
            return null;
          }
          _this7.updateLayoutPriority(LayoutPriority.CONTENT);
          var extensions = getExtensionsFromMetadata(creativeMetaDataDef);
          preloadFriendlyIframeEmbedExtensions(_this7.win, extensions);
          (creativeMetaDataDef.customStylesheets || []).forEach(function(font) {
            return Services.preconnectFor(_this7.win).preload(_this7.getAmpDoc(), font.href);
          });
          var urls2 = Services.urlForDoc(_this7.element);
          (creativeMetaDataDef.images || []).forEach(function(image) {
            return urls2.isSecure(image) && Services.preconnectFor(_this7.win).preload(_this7.getAmpDoc(), image);
          });
          return creativeMetaDataDef;
        });
      }
    }, {
      key: "maybeValidateAmpCreative",
      value: function maybeValidateAmpCreative(bytes, headers) {
        var _this8 = this;
        var checkStillCurrent = this.verifyStillCurrent();
        return this.keysetPromise_.then(function() {
          if (_this8.element.getAttribute("type") == "fake" && !_this8.element.getAttribute("checksig")) {
            return Promise.resolve(VerificationStatus.OK);
          }
          return signatureVerifierFor(_this8.win).verify(bytes, headers);
        }).then(function(status) {
          checkStillCurrent();
          var result = null;
          switch (status) {
            case VerificationStatus.OK:
              result = bytes;
              break;
            case VerificationStatus.CRYPTO_UNAVAILABLE:
              result = _this8.shouldPreferentialRenderWithoutCrypto() ? bytes : null;
              break;
            case VerificationStatus.ERROR_KEY_NOT_FOUND:
            case VerificationStatus.ERROR_SIGNATURE_MISMATCH:
              user().error(TAG15, _this8.element.getAttribute("type"), "Signature verification failed");
            case VerificationStatus.UNVERIFIED:
          }
          if (_this8.isSinglePageStoryAd && !result) {
            throw new Error(INVALID_SPSA_RESPONSE);
          }
          return result;
        });
      }
    }, {
      key: "populatePostAdResponseExperimentFeatures_",
      value: function populatePostAdResponseExperimentFeatures_(input) {
        var _this9 = this;
        input.split(",").forEach(function(line) {
          if (!line) {
            return;
          }
          var parts = line.split("=");
          if (parts.length != 2 || !parts[0]) {
            dev().warn(TAG15, "invalid experiment feature " + line);
            return;
          }
          _this9.postAdResponseExperimentFeatures[parts[0]] = parts[1];
        });
      }
    }, {
      key: "refresh",
      value: function refresh(refreshEndCallback) {
        var _this10 = this;
        devAssert(!this.isRefreshing);
        this.isRefreshing = true;
        this.tearDownSlot();
        this.initiateAdRequest();
        if (!this.adPromise_) {
          return resolvedPromise();
        }
        var promiseId = this.promiseId_;
        return devAssert(this.adPromise_).then(function() {
          if (!_this10.isRefreshing || promiseId != _this10.promiseId_) {
            refreshEndCallback();
            return;
          }
          return _this10.mutateElement(function() {
            triggerAnalyticsEvent(_this10.element, AnalyticsTrigger.AD_REFRESH);
            _this10.togglePlaceholder(true);
            return Services.timerFor(_this10.win).promise(1e3).then(function() {
              _this10.isRelayoutNeededFlag = true;
              _this10.getResource().layoutCanceled();
              _this10.getAmpDoc().whenNextVisible().then(function() {
                Services.ownersForDoc(_this10.getAmpDoc()).requireLayout(_this10.element);
              });
            });
          });
        });
      }
    }, {
      key: "promiseErrorHandler_",
      value: function promiseErrorHandler_(error, opt_ignoreStack) {
        if (isCancellation(error)) {
          throw error;
        }
        if (error && error.message) {
          error = duplicateErrorIfNecessary(error);
        } else {
          error = new Error("unknown error " + error);
        }
        if (opt_ignoreStack) {
          error.ignoreStack = opt_ignoreStack;
        }
        var type = this.element.getAttribute("type") || "notype";
        if (error.message.indexOf(TAG15 + ": " + type + ":") != 0) {
          error.message = TAG15 + ": " + type + ": " + error.message;
        }
        assignAdUrlToError(error, this.adUrl_);
        if (getMode().development || getMode().localDev || getMode().log) {
          user().error(TAG15, error);
        } else {
          user().warn(TAG15, error);
          if (Math.random() < 0.01) {
            dev().expectedError(TAG15, error);
          }
        }
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this11 = this;
        if (this.isRefreshing) {
          this.destroyFrame(true);
        }
        return this.attemptToRenderCreative().then(function() {
          observeWithSharedInOb(_this11.element, _this11.boundViewportCallback_);
        });
      }
    }, {
      key: "attemptToRenderCreative",
      value: function attemptToRenderCreative() {
        var _this12 = this;
        if (!this.adPromise_) {
          if (this.shouldInitializePromiseChain_()) {
            dev().error(TAG15, "Null promise in layoutCallback");
          }
          return resolvedPromise();
        }
        var checkStillCurrent = this.verifyStillCurrent();
        return Promise.all([this.adPromise_, this.uiHandler.getScrollPromiseForStickyAd()]).then(function(values) {
          checkStillCurrent();
          _this12.uiHandler.maybeInitStickyAd();
          var creativeMetaData = values[0];
          if (_this12.isCollapsed_) {
            return resolvedPromise();
          }
          if (_this12.iframe && !_this12.isRefreshing) {
            return resolvedPromise();
          }
          if (!creativeMetaData) {
            return _this12.renderNonAmpCreative();
          }
          var friendlyRenderPromise;
          if (_this12.isInNoSigningExp()) {
            friendlyRenderPromise = _this12.renderFriendlyTrustless_(creativeMetaData, checkStillCurrent);
          } else {
            friendlyRenderPromise = _this12.renderAmpCreative_(creativeMetaData);
          }
          return friendlyRenderPromise.catch(function(err) {
            checkStillCurrent();
            user().warn(TAG15, _this12.element.getAttribute("type"), "Error injecting creative in friendly frame", err);
            return _this12.renderNonAmpCreative();
          });
        }).catch(function(error) {
          _this12.promiseErrorHandler_(error);
          throw cancellation();
        });
      }
    }, {
      key: "isXhrAllowed",
      value: function isXhrAllowed() {
        return true;
      }
    }, {
      key: "attemptChangeSize",
      value: function attemptChangeSize(newHeight, newWidth) {
        this.originalSlotSize_ = this.originalSlotSize_ || this.getLayoutSize();
        return _get(_getPrototypeOf4(AmpA4A2.prototype), "attemptChangeSize", this).call(this, newHeight, newWidth);
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        unobserveWithSharedInOb(this.element);
        this.tearDownSlot();
        return true;
      }
    }, {
      key: "tearDownSlot",
      value: function tearDownSlot() {
        var _this13 = this;
        this.promiseId_++;
        this.uiHandler.applyUnlayoutUI();
        if (this.originalSlotSize_) {
          _get(_getPrototypeOf4(AmpA4A2.prototype), "attemptChangeSize", this).call(this, this.originalSlotSize_.height, this.originalSlotSize_.width).then(function() {
            _this13.originalSlotSize_ = null;
          }).catch(function(err) {
            dev().warn(TAG15, "unable to revert to original size", err);
          });
        }
        this.isCollapsed_ = false;
        this.destroyFrame();
        this.adPromise_ = null;
        this.adUrl_ = null;
        this.creativeBody_ = null;
        this.isVerifiedAmpCreative_ = false;
        this.transferDomBody_ = null;
        this.experimentalNonAmpCreativeRenderMethod_ = this.getNonAmpCreativeRenderingMethod();
        this.postAdResponseExperimentFeatures = {};
      }
    }, {
      key: "detachedCallback",
      value: function detachedCallback() {
        _get(_getPrototypeOf4(AmpA4A2.prototype), "detachedCallback", this).call(this);
        this.destroyFrame(true);
      }
    }, {
      key: "destroyFrame",
      value: function destroyFrame(force) {
        if (force === void 0) {
          force = false;
        }
        if (!force && this.isRefreshing) {
          return;
        }
        if (this.friendlyIframeEmbed_) {
          this.friendlyIframeEmbed_.destroy();
          this.friendlyIframeEmbed_ = null;
        }
        if (this.iframe && this.iframe.parentElement) {
          this.iframe.parentElement.removeChild(this.iframe);
          this.iframe = null;
        }
        if (this.xOriginIframeHandler_) {
          this.xOriginIframeHandler_.freeXOriginIframe();
          this.xOriginIframeHandler_ = null;
        }
        if (this.uiHandler) {
          this.uiHandler.cleanup();
        }
      }
    }, {
      key: "viewportCallbackTemp",
      value: function viewportCallbackTemp(inViewport) {
        if (this.xOriginIframeHandler_) {
          this.xOriginIframeHandler_.viewportCallback(inViewport);
        }
      }
    }, {
      key: "getAdUrl",
      value: function getAdUrl(opt_ununsedConsentTuple, opt_rtcResponsesPromise, opt_serveNpaSignal) {
        throw new Error("getAdUrl not implemented!");
      }
    }, {
      key: "getServeNpaSignal",
      value: function getServeNpaSignal() {
        return Promise.resolve(false);
      }
    }, {
      key: "getBlockRtc_",
      value: function getBlockRtc_() {
        var _this14 = this;
        if (!this.element.getAttribute("block-rtc")) {
          return Promise.resolve(false);
        }
        return Services.geoForDocOrNull(this.element).then(function(geoService) {
          userAssert(geoService, "%s: requires <amp-geo> to use `block-rtc`", TAG15);
          var blockRtcLocations = _this14.element.getAttribute("block-rtc");
          var locations = blockRtcLocations.split(",");
          for (var i = 0; i < locations.length; i++) {
            var geoGroup = geoService.isInCountryGroup(locations[i]);
            if (geoGroup === GEO_IN_GROUP.IN) {
              return true;
            } else if (geoGroup === GEO_IN_GROUP.NOT_DEFINED) {
              user().warn("AMP-AD", 'Geo group "' + locations[i] + '" was not defined.');
            }
          }
          return false;
        });
      }
    }, {
      key: "resetAdUrl",
      value: function resetAdUrl() {
        this.adUrl_ = null;
      }
    }, {
      key: "verifyStillCurrent",
      value: function verifyStillCurrent() {
        var _this15 = this;
        var promiseId = this.promiseId_;
        return function() {
          if (promiseId != _this15.promiseId_) {
            throw cancellation();
          }
        };
      }
    }, {
      key: "extractSize",
      value: function extractSize(responseHeaders) {
        var headerValue = responseHeaders.get(CREATIVE_SIZE_HEADER);
        if (!headerValue) {
          return null;
        }
        var match = /^([0-9]+)x([0-9]+)$/.exec(headerValue);
        if (!match) {
          user().error(TAG15, "Invalid size header: " + headerValue);
          return null;
        }
        return {
          width: Number(match[1]),
          height: Number(match[2])
        };
      }
    }, {
      key: "forceCollapse",
      value: function forceCollapse() {
        if (this.isRefreshing) {
          this.isRefreshing = false;
          return;
        }
        devAssert(this.uiHandler);
        this.originalSlotSize_ = this.originalSlotSize_ || this.getLayoutSize();
        this.uiHandler.applyNoContentUI();
        this.isCollapsed_ = true;
      }
    }, {
      key: "onCreativeRender",
      value: function onCreativeRender(creativeMetaData, opt_onLoadPromise) {
        this.maybeTriggerAnalyticsEvent_(creativeMetaData ? "renderFriendlyEnd" : "renderCrossDomainEnd");
      }
    }, {
      key: "onCrossDomainIframeCreated",
      value: function onCrossDomainIframeCreated(iframe) {
        dev().info(TAG15, this.element.getAttribute("type"), "onCrossDomainIframeCreated " + iframe);
      }
    }, {
      key: "sandboxHTMLCreativeFrame",
      value: function sandboxHTMLCreativeFrame() {
        return true;
      }
    }, {
      key: "sendXhrRequest",
      value: function sendXhrRequest(adUrl) {
        var _this16 = this;
        this.maybeTriggerAnalyticsEvent_("adRequestStart");
        var xhrInit = {
          mode: "cors",
          method: "GET",
          credentials: "include"
        };
        return Services.xhrFor(this.win).fetch(adUrl, xhrInit).catch(function(error) {
          if (error.response && error.response.status > 200) {
            return null;
          }
          var networkFailureHandlerResult = _this16.onNetworkFailure(error, _this16.adUrl_);
          devAssert(!!networkFailureHandlerResult);
          if (networkFailureHandlerResult.frameGetDisabled) {
            dev().info(TAG15, "frame get disabled as part of network failure handler");
            _this16.resetAdUrl();
          } else {
            _this16.adUrl_ = networkFailureHandlerResult.adUrl || _this16.adUrl_;
            return Promise.reject(NETWORK_FAILURE);
          }
          return null;
        });
      }
    }, {
      key: "onNetworkFailure",
      value: function onNetworkFailure(unusedError, unusedAdUrl) {
        return {};
      }
    }, {
      key: "getSigningServiceNames",
      value: function getSigningServiceNames() {
        return getMode().localDev ? ["google", "google-dev"] : ["google"];
      }
    }, {
      key: "renderNonAmpCreative",
      value: function renderNonAmpCreative(throttleApplied) {
        var _this17 = this;
        if (this.element.getAttribute("disable3pfallback") == "true") {
          user().warn(TAG15, this.element.getAttribute("type"), "fallback to 3p disabled");
          return Promise.resolve(false);
        }
        dev().warn(TAG15, "fallback to 3p");
        var method = this.experimentalNonAmpCreativeRenderMethod_;
        var renderPromise = Promise.resolve(false);
        if ((method == XORIGIN_MODE.SAFEFRAME || method == XORIGIN_MODE.NAMEFRAME) && this.creativeBody_) {
          renderPromise = this.renderViaNameAttrOfXOriginIframe_(this.creativeBody_);
          this.creativeBody_ = null;
        } else if (this.adUrl_) {
          assertHttpsUrl(this.adUrl_, this.element);
          renderPromise = this.renderViaIframeGet_(this.adUrl_);
        } else {
          user().warn(TAG15, this.element.getAttribute("type"), "No creative or URL available -- A4A can't render any ad");
        }
        if (!throttleApplied && !this.inNonAmpPreferenceExp()) {
          incrementLoadingAds(this.win, renderPromise);
        }
        return renderPromise.then(function(result) {
          _this17.maybeTriggerAnalyticsEvent_("crossDomainIframeLoaded");
          return result;
        });
      }
    }, {
      key: "renderFriendlyTrustless_",
      value: function renderFriendlyTrustless_(headData, checkStillCurrent) {
        var _this18 = this;
        checkStillCurrent();
        devAssert(this.element.ownerDocument);
        this.maybeTriggerAnalyticsEvent_("renderFriendlyStart");
        var _this$creativeSize_ = this.creativeSize_, height = _this$creativeSize_.height, width = _this$creativeSize_.width;
        var extensions = headData.extensions, fonts = headData.fonts, head = headData.head;
        this.iframe = createSecureFrame(this.win, this.getIframeTitle(), height, width);
        if (!this.uiHandler.isStickyAd()) {
          this.applyFillContent(this.iframe);
        }
        var body = "";
        var transferComplete = new Deferred();
        if (!isSrcdocSupported()) {
          body = head.ownerDocument.body.outerHTML;
          transferComplete.resolve();
        } else {
          listenOnce(this.iframe, "load", function() {
            var fieBody = _this18.iframe.contentDocument.body;
            _this18.transferDomBody_(devAssert(fieBody)).then(transferComplete.resolve);
          });
        }
        var secureDoc = createSecureDocSkeleton(devAssert(this.adUrl_), head.outerHTML, body);
        var fieInstallPromise = this.installFriendlyIframeEmbed_(secureDoc, extensions, fonts, true);
        Promise.all([fieInstallPromise, transferComplete.promise]).then(function(values) {
          var friendlyIframeEmbed = values[0];
          friendlyIframeEmbed && friendlyIframeEmbed.renderCompleted();
        });
        var extensionIds = extensions.map(function(extension) {
          return extension.extensionId;
        });
        return fieInstallPromise.then(function(friendlyIframeEmbed) {
          checkStillCurrent();
          _this18.makeFieVisible_(friendlyIframeEmbed, {
            minifiedCreative: "",
            customStylesheets: [],
            customElementExtensions: extensionIds
          }, checkStillCurrent);
        });
      }
    }, {
      key: "renderAmpCreative_",
      value: function renderAmpCreative_(creativeMetaData) {
        var _this19 = this;
        devAssert(creativeMetaData.minifiedCreative, "missing minified creative");
        devAssert(!!this.element.ownerDocument, "missing owner document?!");
        this.maybeTriggerAnalyticsEvent_("renderFriendlyStart");
        this.iframe = createElementWithAttributes(this.element.ownerDocument, "iframe", dict({
          "height": this.creativeSize_.height,
          "width": this.creativeSize_.width,
          "frameborder": "0",
          "allowfullscreen": "",
          "allowtransparency": "",
          "scrolling": "no",
          "title": this.getIframeTitle()
        }));
        if (!this.uiHandler.isStickyAd()) {
          this.applyFillContent(this.iframe);
        }
        var fontsArray = [];
        if (creativeMetaData.customStylesheets) {
          creativeMetaData.customStylesheets.forEach(function(s) {
            var href = s["href"];
            if (href) {
              fontsArray.push(href);
            }
          });
        }
        var checkStillCurrent = this.verifyStillCurrent();
        var minifiedCreative = creativeMetaData.minifiedCreative;
        var extensions = getExtensionsFromMetadata(creativeMetaData);
        return this.installFriendlyIframeEmbed_(minifiedCreative, extensions, fontsArray || [], false).then(function(friendlyIframeEmbed) {
          return _this19.makeFieVisible_(friendlyIframeEmbed, creativeMetaData, checkStillCurrent);
        });
      }
    }, {
      key: "installFriendlyIframeEmbed_",
      value: function installFriendlyIframeEmbed_(html2, extensions, fonts, skipHtmlMerge) {
        var _this20 = this;
        return installFriendlyIframeEmbed(devAssert(this.iframe), this.element, {
          host: this.element,
          url: devAssert(this.adUrl_),
          html: html2,
          extensions,
          fonts,
          skipHtmlMerge
        }, function(embedWin, ampdoc) {
          return _this20.preinstallCallback_(embedWin, ampdoc);
        });
      }
    }, {
      key: "preinstallCallback_",
      value: function preinstallCallback_(embedWin, ampdoc) {
        var parentAmpdoc = this.getAmpDoc();
        installUrlReplacementsForEmbed(ampdoc, new A4AVariableSource(parentAmpdoc, embedWin));
      }
    }, {
      key: "makeFieVisible_",
      value: function makeFieVisible_(friendlyIframeEmbed, creativeMetaData, checkStillCurrent) {
        var _this21 = this;
        checkStillCurrent();
        this.friendlyIframeEmbed_ = friendlyIframeEmbed;
        var frameBody = this.getFieBody_(friendlyIframeEmbed);
        setStyle(frameBody, "visibility", "visible");
        protectFunctionWrapper(this.onCreativeRender, this, function(err) {
          dev().error(TAG15, _this21.element.getAttribute("type"), "Error executing onCreativeRender", err);
        })(creativeMetaData, friendlyIframeEmbed.whenWindowLoaded());
        friendlyIframeEmbed.whenIniLoaded().then(function() {
          checkStillCurrent();
          _this21.maybeTriggerAnalyticsEvent_("friendlyIframeIniLoad");
        });
      }
    }, {
      key: "getFieBody_",
      value: function getFieBody_(friendlyIframeEmbed) {
        var frameDoc = friendlyIframeEmbed.iframe.contentDocument || friendlyIframeEmbed.win.document;
        return devAssert(frameDoc.body);
      }
    }, {
      key: "iframeRenderHelper_",
      value: function iframeRenderHelper_(attributes) {
        var _this22 = this;
        var mergedAttributes = Object.assign(attributes, dict({
          "height": this.creativeSize_.height,
          "width": this.creativeSize_.width,
          "title": this.getIframeTitle()
        }));
        if (this.sentinel) {
          mergedAttributes["data-amp-3p-sentinel"] = this.sentinel;
        }
        mergedAttributes["allow"] = "sync-xhr 'none';";
        this.iframe = createElementWithAttributes(this.element.ownerDocument, "iframe", Object.assign(mergedAttributes, SHARED_IFRAME_PROPERTIES));
        if (this.sandboxHTMLCreativeFrame()) {
          applySandbox(this.iframe);
        }
        this.xOriginIframeHandler_ = new AMP.AmpAdXOriginIframeHandler(this);
        var frameLoadPromise = this.xOriginIframeHandler_.init(this.iframe, true, this.letCreativeTriggerRenderStart());
        protectFunctionWrapper(this.onCreativeRender, this, function(err) {
          dev().error(TAG15, _this22.element.getAttribute("type"), "Error executing onCreativeRender", err);
        })(null);
        return frameLoadPromise;
      }
    }, {
      key: "renderViaIframeGet_",
      value: function renderViaIframeGet_(adUrl) {
        var _this23 = this;
        this.maybeTriggerAnalyticsEvent_("renderCrossDomainStart");
        var contextMetadata = getContextMetadata(this.win, this.element, this.sentinel);
        return this.initialIntersectionPromise_.then(function(intersection) {
          contextMetadata["_context"]["initialIntersection"] = intersectionEntryToJson(intersection);
          return _this23.iframeRenderHelper_(dict({
            "src": Services.xhrFor(_this23.win).getCorsUrl(_this23.win, adUrl),
            "name": JSON.stringify(contextMetadata)
          }));
        });
      }
    }, {
      key: "letCreativeTriggerRenderStart",
      value: function letCreativeTriggerRenderStart() {
        return false;
      }
    }, {
      key: "renderViaNameAttrOfXOriginIframe_",
      value: function renderViaNameAttrOfXOriginIframe_(creativeBody) {
        var _this24 = this;
        var method = this.experimentalNonAmpCreativeRenderMethod_;
        devAssert(method == XORIGIN_MODE.SAFEFRAME || method == XORIGIN_MODE.NAMEFRAME, "Unrecognized A4A cross-domain rendering mode: %s", method);
        this.maybeTriggerAnalyticsEvent_("renderSafeFrameStart");
        var checkStillCurrent = this.verifyStillCurrent();
        return tryResolve(function() {
          return utf8Decode(creativeBody);
        }).then(function(creative) {
          checkStillCurrent();
          var srcPath;
          var name = "";
          switch (method) {
            case XORIGIN_MODE.SAFEFRAME:
              srcPath = _this24.getSafeframePath() + "?n=0";
              break;
            case XORIGIN_MODE.NAMEFRAME:
              srcPath = getDefaultBootstrapBaseUrl(_this24.win, "nameframe");
              break;
            default:
              user().error("A4A", "A4A received unrecognized cross-domain name attribute iframe rendering mode request: %s.  Unable to render a creative for slot %s.", method, _this24.element.getAttribute("id"));
              return Promise.reject("Unrecognized rendering mode request");
          }
          var contextMetadata = getContextMetadata(_this24.win, _this24.element, _this24.sentinel, _this24.getAdditionalContextMetadata(method == XORIGIN_MODE.SAFEFRAME));
          return _this24.initialIntersectionPromise_.then(function(intersection) {
            contextMetadata["initialIntersection"] = intersectionEntryToJson(intersection);
            if (method == XORIGIN_MODE.NAMEFRAME) {
              contextMetadata["creative"] = creative;
              name = JSON.stringify(contextMetadata);
            } else if (method == XORIGIN_MODE.SAFEFRAME) {
              contextMetadata = JSON.stringify(contextMetadata);
              name = _this24.safeframeVersion + ";" + creative.length + ";" + creative + ("" + contextMetadata);
            }
            return _this24.iframeRenderHelper_(dict({
              "src": srcPath,
              "name": name
            }));
          });
        });
      }
    }, {
      key: "getAmpAdMetadata",
      value: function getAmpAdMetadata(creative) {
        var metadataStart = -1;
        var metadataString;
        for (var i = 0; i < METADATA_STRINGS.length; i++) {
          metadataString = METADATA_STRINGS[i];
          metadataStart = creative.lastIndexOf(metadataString);
          if (metadataStart >= 0) {
            break;
          }
        }
        if (metadataStart < 0) {
          dev().warn(TAG15, this.element.getAttribute("type"), "Could not locate start index for amp meta data in: %s", creative);
          return null;
        }
        var metadataEnd = creative.lastIndexOf("<\/script>");
        if (metadataEnd < 0) {
          dev().warn(TAG15, this.element.getAttribute("type"), "Could not locate closing script tag for amp meta data in: %s", creative);
          return null;
        }
        try {
          var metaDataObj = parseJson(creative.slice(metadataStart + metadataString.length, metadataEnd));
          var ampRuntimeUtf16CharOffsets = metaDataObj["ampRuntimeUtf16CharOffsets"];
          if (!isArray(ampRuntimeUtf16CharOffsets) || ampRuntimeUtf16CharOffsets.length != 2 || typeof ampRuntimeUtf16CharOffsets[0] !== "number" || typeof ampRuntimeUtf16CharOffsets[1] !== "number") {
            throw new Error("Invalid runtime offsets");
          }
          var metaData = {};
          if (metaDataObj["customElementExtensions"]) {
            metaData.customElementExtensions = metaDataObj["customElementExtensions"];
            if (!isArray(metaData.customElementExtensions)) {
              throw new Error("Invalid extensions", metaData.customElementExtensions);
            }
          } else {
            metaData.customElementExtensions = [];
          }
          if (metaDataObj["extensions"]) {
            metaData.extensions = metaDataObj["extensions"];
          }
          if (metaDataObj["customStylesheets"]) {
            metaData.customStylesheets = metaDataObj["customStylesheets"];
            var errorMsg = "Invalid custom stylesheets";
            if (!isArray(metaData.customStylesheets)) {
              throw new Error(errorMsg);
            }
            var urls2 = Services.urlForDoc(this.element);
            metaData.customStylesheets.forEach(function(stylesheet) {
              if (!isObject(stylesheet) || !stylesheet["href"] || typeof stylesheet["href"] !== "string" || !urls2.isSecure(stylesheet["href"])) {
                throw new Error(errorMsg);
              }
            });
          }
          if (isArray(metaDataObj["images"])) {
            metaData.images = metaDataObj["images"].splice(0, 5);
          }
          if (this.isSinglePageStoryAd) {
            if (!metaDataObj["ctaType"]) {
              throw new Error(INVALID_SPSA_RESPONSE);
            }
            this.element.setAttribute("data-vars-ctatype", metaDataObj["ctaType"]);
            this.element.setAttribute("data-vars-ctaurl", metaDataObj["ctaUrl"]);
          }
          metaData.minifiedCreative = creative.slice(0, ampRuntimeUtf16CharOffsets[0]) + creative.slice(ampRuntimeUtf16CharOffsets[1], metadataStart) + creative.slice(metadataEnd + "<\/script>".length);
          return metaData;
        } catch (err) {
          dev().warn(TAG15, this.element.getAttribute("type"), "Invalid amp metadata: %s", creative.slice(metadataStart + metadataString.length, metadataEnd));
          if (this.isSinglePageStoryAd) {
            throw err;
          }
          return null;
        }
      }
    }, {
      key: "getSafeframePath",
      value: function getSafeframePath() {
        return "https://tpc.googlesyndication.com/safeframe/" + (this.safeframeVersion + "/html/container.html");
      }
    }, {
      key: "isStickyAd",
      value: function isStickyAd() {
        return false;
      }
    }, {
      key: "maybeTriggerAnalyticsEvent_",
      value: function maybeTriggerAnalyticsEvent_(lifecycleStage) {
        if (!this.a4aAnalyticsConfig_) {
          return;
        }
        var analyticsEvent = devAssert(LIFECYCLE_STAGE_TO_ANALYTICS_TRIGGER[lifecycleStage]);
        var analyticsVars = Object.assign(dict({
          "time": Math.round(this.getNow_())
        }), this.getA4aAnalyticsVars(analyticsEvent));
        triggerAnalyticsEvent(this.element, analyticsEvent, analyticsVars);
      }
    }, {
      key: "getA4aAnalyticsVars",
      value: function getA4aAnalyticsVars(unusedAnalyticsEvent) {
        return dict({});
      }
    }, {
      key: "getA4aAnalyticsConfig",
      value: function getA4aAnalyticsConfig() {
        return null;
      }
    }, {
      key: "tryExecuteRealTimeConfig_",
      value: function tryExecuteRealTimeConfig_(consentState, consentString, consentMetadata) {
        var _this25 = this;
        if (this.element.getAttribute("rtc-config")) {
          installRealTimeConfigServiceForDoc(this.getAmpDoc());
          return this.getBlockRtc_().then(function(shouldBlock) {
            return shouldBlock ? void 0 : Services.realTimeConfigForDoc(_this25.getAmpDoc()).then(function(realTimeConfig) {
              return realTimeConfig.maybeExecuteRealTimeConfig(_this25.element, _this25.getCustomRealTimeConfigMacros_(), consentState, consentString, consentMetadata, _this25.verifyStillCurrent());
            });
          });
        }
      }
    }, {
      key: "getCustomRealTimeConfigMacros_",
      value: function getCustomRealTimeConfigMacros_() {
        return {};
      }
    }, {
      key: "shouldPreferentialRenderWithoutCrypto",
      value: function shouldPreferentialRenderWithoutCrypto() {
        return false;
      }
    }, {
      key: "getNonAmpCreativeRenderingMethod",
      value: function getNonAmpCreativeRenderingMethod(headerValue) {
        if (headerValue) {
          if (!isEnumValue(XORIGIN_MODE, headerValue)) {
            dev().error("AMP-A4A", "cross-origin render mode header " + headerValue);
          } else {
            return headerValue;
          }
        }
        return Services.platformFor(this.win).isIos() ? XORIGIN_MODE.NAMEFRAME : null;
      }
    }, {
      key: "getAdditionalContextMetadata",
      value: function getAdditionalContextMetadata(opt_isSafeframe) {
      }
    }, {
      key: "isVerifiedAmpCreative",
      value: function isVerifiedAmpCreative() {
        return this.isVerifiedAmpCreative_;
      }
    }, {
      key: "getIframeTitle",
      value: function getIframeTitle() {
        return this.element.getAttribute("title") || "3rd party ad content";
      }
    }, {
      key: "getModuleNomoduleExpIds_",
      value: function getModuleNomoduleExpIds_() {
        var runtimeType = this.getAmpDoc().getMetaByName("runtime-type");
        if (runtimeType === "10") {
          return MODULE_NOMODULE_PARAMS_EXP.CONTROL;
        }
        if (runtimeType === "2") {
          return MODULE_NOMODULE_PARAMS_EXP.EXPERIMENT;
        }
        return null;
      }
    }, {
      key: "getSsrExpIds_",
      value: function getSsrExpIds_() {
        var exps = [];
        var meta = this.getAmpDoc().getMetaByName("amp-usqp");
        if (meta) {
          var keyValues = meta.split(",");
          for (var i = 0; i < keyValues.length; i++) {
            var kv = keyValues[i].split("=");
            if (kv.length !== 2) {
              continue;
            }
            var val = Number(kv[1]);
            if (!isNaN(kv[0]) && val >= 0 && val < 100) {
              var padded = padStart(kv[1], 2, "0");
              exps.push(kv[0] + padded);
            }
          }
        }
        return exps;
      }
    }]);
    return AmpA4A2;
  }(AMP.BaseElement);
  function assignAdUrlToError(error, adUrl) {
    if (!adUrl || error.args && error.args["au"]) {
      return;
    }
    var adQueryIdx = adUrl.indexOf("?");
    if (adQueryIdx == -1) {
      return;
    }
    (error.args || (error.args = {}))["au"] = adUrl.substring(adQueryIdx + 1, adQueryIdx + 251);
  }
  function signatureVerifierFor(win) {
    var propertyName = "AMP_FAST_FETCH_SIGNATURE_VERIFIER_";
    return win[propertyName] || (win[propertyName] = new SignatureVerifier(win, signingServerURLs));
  }
  function isPlatformSupported(win) {
    if (!isNative(win.Element.prototype.attachShadow) && isExperimentOn(win, "disable-a4a-non-sd")) {
      return false;
    }
    return true;
  }
  function isNative(func) {
    return !!func && func.toString().indexOf("[native code]") != -1;
  }

  // extensions/amp-a4a/0.1/amp-ad-template-helper.js
  function _classCallCheck54(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties53(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass53(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties53(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties53(Constructor, staticProps);
    return Constructor;
  }
  var TEMPLATE_CORS_CONFIG = {
    mode: "cors",
    method: "GET",
    ampCors: false,
    credentials: "omit"
  };
  var SERVICE_ID = "AmpAdTemplateHelper";
  var AmpAdTemplateHelper = /* @__PURE__ */ function() {
    function AmpAdTemplateHelper2(ampdoc) {
      _classCallCheck54(this, AmpAdTemplateHelper2);
      this.parentAmpdoc_ = ampdoc;
      this.cache_ = new LruCache(5);
    }
    _createClass53(AmpAdTemplateHelper2, [{
      key: "fetch",
      value: function fetch(templateUrl) {
        var win = this.parentAmpdoc_.win;
        var proxyUrl = getMode(win).localDev && !isNaN(templateUrl) ? "http://ads.localhost:" + win.location.port + ("/a4a_template/adzerk/" + templateUrl) : this.getTemplateProxyUrl_(templateUrl);
        var templatePromise = this.cache_.get(proxyUrl);
        if (!templatePromise) {
          templatePromise = Services.xhrFor(win).fetchText(proxyUrl, TEMPLATE_CORS_CONFIG).then(function(response) {
            return response.text();
          });
          this.cache_.put(proxyUrl, templatePromise);
        }
        devAssert(templatePromise);
        return templatePromise;
      }
    }, {
      key: "render",
      value: function render(templateValues, element) {
        return Services.templatesForDoc(element).findAndRenderTemplate(element, templateValues);
      }
    }, {
      key: "insertAnalytics",
      value: function insertAnalytics(element, analyticsValue) {
        analyticsValue = isArray(analyticsValue) ? analyticsValue : [analyticsValue];
        for (var i = 0; i < analyticsValue.length; i++) {
          var config = analyticsValue[i];
          var analyticsEle = element.ownerDocument.createElement("amp-analytics");
          if (config["remote"]) {
            analyticsEle.setAttribute("config", config["remote"]);
          }
          if (config["type"]) {
            analyticsEle.setAttribute("type", config["type"]);
          }
          if (config["inline"]) {
            var scriptElem = createElementWithAttributes(element.ownerDocument, "script", dict({
              "type": "application/json"
            }));
            scriptElem.textContent = JSON.stringify(config["inline"]);
            analyticsEle.appendChild(scriptElem);
          }
          element.appendChild(analyticsEle);
        }
      }
    }, {
      key: "getTemplateProxyUrl_",
      value: function getTemplateProxyUrl_(url) {
        var cdnUrlSuffix = urls.cdn.slice(8);
        var loc = parseUrlDeprecated(url);
        return loc.origin.indexOf(cdnUrlSuffix) > 0 ? url : "https://" + loc.hostname.replace(/-/g, "--").replace(/\./g, "-") + "." + cdnUrlSuffix + "/ad/s/" + loc.hostname + loc.pathname;
      }
    }]);
    return AmpAdTemplateHelper2;
  }();
  function getAmpAdTemplateHelper(target) {
    registerServiceBuilderForDoc(target, SERVICE_ID, AmpAdTemplateHelper);
    return getServiceForDoc(target, SERVICE_ID);
  }

  // extensions/amp-ad-network-adzerk-impl/0.1/amp-ad-network-adzerk-impl.js
  function _classCallCheck55(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties54(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass54(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties54(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties54(Constructor, staticProps);
    return Constructor;
  }
  function _inherits5(subClass2, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass2.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass2, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass2, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf5(o, p);
  }
  function _createSuper5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct5();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf5(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf5(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn5(this, result);
    };
  }
  function _possibleConstructorReturn5(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized5(self2);
  }
  function _assertThisInitialized5(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct5() {
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
  function _getPrototypeOf5(o) {
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  var TAG16 = "amp-ad-network-adzerk-impl";
  var AMP_TEMPLATED_CREATIVE_HEADER_NAME = "AMP-template-amp-creative";
  var AmpAdNetworkAdzerkImpl = /* @__PURE__ */ function(_AmpA4A) {
    _inherits5(AmpAdNetworkAdzerkImpl2, _AmpA4A);
    var _super = _createSuper5(AmpAdNetworkAdzerkImpl2);
    function AmpAdNetworkAdzerkImpl2(element) {
      var _this;
      _classCallCheck55(this, AmpAdNetworkAdzerkImpl2);
      _this = _super.call(this, element);
      _this.creativeMetadata_ = null;
      _this.ampCreativeJson_ = null;
      return _this;
    }
    _createClass54(AmpAdNetworkAdzerkImpl2, [{
      key: "isValidElement",
      value: function isValidElement() {
        return !!this.getAdUrl();
      }
    }, {
      key: "getSigningServiceNames",
      value: function getSigningServiceNames() {
        return [];
      }
    }, {
      key: "getAdUrl",
      value: function getAdUrl() {
        var data = this.element.getAttribute("data-r");
        devAssert(data, "Expected data-r attribte on amp-ad tag");
        if (getMode(this.win).localDev) {
          return "http://ads.localhost:" + this.win.location.port + "/adzerk/" + data;
        }
        return "https://engine.adzerk.net/amp?r=" + encodeURIComponent(data);
      }
    }, {
      key: "maybeValidateAmpCreative",
      value: function maybeValidateAmpCreative(bytes, headers) {
        var _this2 = this;
        if (headers.get(AMP_TEMPLATED_CREATIVE_HEADER_NAME) !== "amp-mustache") {
          return Promise.resolve(null);
        }
        var checkStillCurrent = this.verifyStillCurrent();
        return tryResolve(function() {
          return utf8Decode(bytes);
        }).then(function(body) {
          checkStillCurrent();
          _this2.ampCreativeJson_ = tryParseJson(body) || {};
          var ampAdTemplateHelper = getAmpAdTemplateHelper(_this2.element);
          return ampAdTemplateHelper.fetch(_this2.ampCreativeJson_.templateUrl).then(function(parsedTemplate) {
            return utf8Encode(_this2.parseMetadataFromCreative(parsedTemplate));
          }).catch(function(error) {
            dev().warn(TAG16, "Error fetching/expanding template", _this2.ampCreativeJson_, error);
            _this2.forceCollapse();
            return Promise.reject(NO_CONTENT_RESPONSE);
          });
        });
      }
    }, {
      key: "parseMetadataFromCreative",
      value: function parseMetadataFromCreative(creative) {
        var minifiedCreative = creative.replace(/<script async.+?<\/script>/g, "");
        this.creativeMetadata_ = {
          minifiedCreative,
          customElementExtensions: [],
          extensions: []
        };
        return minifiedCreative;
      }
    }, {
      key: "getAmpAdMetadata",
      value: function getAmpAdMetadata(unusedCreative) {
        if (!this.creativeMetadata_) {
          this.creativeMetadata_ = {};
        }
        if (!this.creativeMetadata_["customElementExtensions"]) {
          this.creativeMetadata_["customElementExtensions"] = [];
        }
        if (this.ampCreativeJson_.analytics) {
          pushIfNotExist(this.creativeMetadata_["customElementExtensions"], "amp-analytics");
        }
        pushIfNotExist(this.creativeMetadata_["customElementExtensions"], "amp-mustache");
        this.creativeMetadata_["extensions"] = this.creativeMetadata_["extensions"] || [];
        mergeExtensionsMetadata(this.creativeMetadata_["extensions"], this.creativeMetadata_["customElementExtensions"]);
        return this.creativeMetadata_;
      }
    }, {
      key: "onCreativeRender",
      value: function onCreativeRender(unusedMetadata) {
        var _this3 = this;
        if (this.ampCreativeJson_ && this.ampCreativeJson_.data) {
          var ampAdTemplateHelper = getAmpAdTemplateHelper(this.element);
          ampAdTemplateHelper.render(this.ampCreativeJson_.data, this.iframe.contentWindow.document.body).then(function(renderedElement) {
            if (_this3.ampCreativeJson_.analytics) {
              ampAdTemplateHelper.insertAnalytics(renderedElement, _this3.ampCreativeJson_.analytics);
            }
            _this3.iframe.contentWindow.document.body.innerHTML = renderedElement.innerHTML;
          });
        }
      }
    }]);
    return AmpAdNetworkAdzerkImpl2;
  }(AmpA4A);
  function pushIfNotExist(array, item) {
    if (array.indexOf(item) < 0) {
      array.push(item);
    }
  }
  AMP.extension("amp-ad-network-adzerk-impl", "0.1", function(AMP2) {
    AMP2.registerElement("amp-ad-network-adzerk-impl", AmpAdNetworkAdzerkImpl);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-ad-network-adzerk-impl-0.1.max.js.map
