(function() {
  // src/polyfills/math-sign.js
  function sign(x) {
    x = Number(x);
    if (!x) {
      return x;
    }
    return x > 0 ? 1 : -1;
  }
  function install(win) {
    if (!win.Math.sign) {
      win.Object.defineProperty(win.Math, "sign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: sign
      });
    }
  }

  // src/polyfills/object-assign.js
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function assign(target, var_args) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      if (source != null) {
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            output[key] = source[key];
          }
        }
      }
    }
    return output;
  }
  function install2(win) {
    if (!win.Object.assign) {
      win.Object.defineProperty(win.Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
      });
    }
  }

  // src/polyfills/object-values.js
  function values(target) {
    return Object.keys(target).map(function(k) {
      return target[k];
    });
  }
  function install3(win) {
    if (!win.Object.values) {
      win.Object.defineProperty(win.Object, "values", {
        configurable: true,
        writable: true,
        value: values
      });
    }
  }

  // node_modules/promise-pjs/promise.mjs
  "use strict";
  function Promise2(resolver) {
    if (!(this instanceof Promise2)) {
      throw new TypeError("Constructor Promise requires `new`");
    }
    if (!isFunction(resolver)) {
      throw new TypeError("Must pass resolver function");
    }
    this._state = PendingPromise;
    this._value = [];
    this._isChainEnd = true;
    doResolve(this, adopter(this, FulfilledPromise), adopter(this, RejectedPromise), {
      then: resolver
    });
  }
  Promise2.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : void 0;
    onRejected = isFunction(onRejected) ? onRejected : void 0;
    if (onFulfilled || onRejected) {
      this._isChainEnd = false;
    }
    return this._state(this._value, onFulfilled, onRejected);
  };
  Promise2.prototype.catch = function(onRejected) {
    return this.then(void 0, onRejected);
  };
  Promise2.resolve = function(value) {
    var Constructor = this;
    var promise;
    if (isObject(value) && value instanceof this) {
      promise = value;
    } else {
      promise = new Constructor(function(resolve) {
        resolve(value);
      });
    }
    return promise;
  };
  Promise2.reject = function(reason) {
    var Constructor = this;
    var promise = new Constructor(function(_, reject) {
      reject(reason);
    });
    return promise;
  };
  Promise2.all = function(promises) {
    var Constructor = this;
    var promise = new Constructor(function(resolve, reject) {
      var length = promises.length;
      var values2 = new Array(length);
      if (length === 0) {
        return resolve(values2);
      }
      each(promises, function(promise2, index) {
        Constructor.resolve(promise2).then(function(value) {
          values2[index] = value;
          if (--length === 0) {
            resolve(values2);
          }
        }, reject);
      });
    });
    return promise;
  };
  Promise2.race = function(promises) {
    var Constructor = this;
    var promise = new Constructor(function(resolve, reject) {
      for (var i = 0; i < promises.length; i++) {
        Constructor.resolve(promises[i]).then(resolve, reject);
      }
    });
    return promise;
  };
  var onPossiblyUnhandledRejection = function onPossiblyUnhandledRejection2(reason, promise) {
    throw reason;
  };
  Promise2._overrideUnhandledExceptionHandler = function(handler) {
    onPossiblyUnhandledRejection = handler;
  };
  function FulfilledPromise(value, onFulfilled, unused, deferred) {
    if (!onFulfilled) {
      deferredAdopt(deferred, FulfilledPromise, value);
      return this;
    }
    if (!deferred) {
      deferred = new Deferred(this.constructor);
    }
    defer(tryCatchDeferred(deferred, onFulfilled, value));
    return deferred.promise;
  }
  function RejectedPromise(reason, unused, onRejected, deferred) {
    if (!onRejected) {
      deferredAdopt(deferred, RejectedPromise, reason);
      return this;
    }
    if (!deferred) {
      deferred = new Deferred(this.constructor);
    }
    defer(tryCatchDeferred(deferred, onRejected, reason));
    return deferred.promise;
  }
  function PendingPromise(queue, onFulfilled, onRejected, deferred) {
    if (!deferred) {
      if (!onFulfilled && !onRejected) {
        return this;
      }
      deferred = new Deferred(this.constructor);
    }
    queue.push({
      deferred: deferred,
      onFulfilled: onFulfilled || deferred.resolve,
      onRejected: onRejected || deferred.reject
    });
    return deferred.promise;
  }
  function Deferred(Promise3) {
    var deferred = this;
    this.promise = new Promise3(function(resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  }
  function adopt(promise, state, value, adoptee) {
    var queue = promise._value;
    promise._state = state;
    promise._value = value;
    if (adoptee && state === PendingPromise) {
      adoptee._state(value, void 0, void 0, {
        promise: promise,
        resolve: void 0,
        reject: void 0
      });
    }
    for (var i = 0; i < queue.length; i++) {
      var next = queue[i];
      promise._state(value, next.onFulfilled, next.onRejected, next.deferred);
    }
    queue.length = 0;
    if (adoptee) {
      adoptee._isChainEnd = false;
    }
    if (state === RejectedPromise && promise._isChainEnd) {
      setTimeout(function() {
        if (promise._isChainEnd) {
          onPossiblyUnhandledRejection(value, promise);
        }
      }, 0);
    }
  }
  function adopter(promise, state) {
    return function(value) {
      adopt(promise, state, value);
    };
  }
  function deferredAdopt(deferred, state, value) {
    if (deferred) {
      var promise = deferred.promise;
      promise._state = state;
      promise._value = value;
    }
  }
  function noop() {
  }
  function isFunction(fn) {
    return typeof fn === "function";
  }
  function isObject(obj) {
    return obj === Object(obj);
  }
  function each(collection, iterator) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i);
    }
  }
  function tryCatchDeferred(deferred, fn, arg) {
    var promise = deferred.promise;
    var resolve = deferred.resolve;
    var reject = deferred.reject;
    return function() {
      try {
        var result = fn(arg);
        doResolve(promise, resolve, reject, result, result);
      } catch (e) {
        reject(e);
      }
    };
  }
  var defer = function() {
    var scheduleFlush;
    if (typeof window !== "undefined" && window.postMessage) {
      window.addEventListener("message", flush);
      scheduleFlush = function scheduleFlush2() {
        window.postMessage("macro-task", "*");
      };
    } else {
      scheduleFlush = function scheduleFlush2() {
        setTimeout(flush, 0);
      };
    }
    var queue = new Array(16);
    var length = 0;
    function flush() {
      for (var i = 0; i < length; i++) {
        var fn = queue[i];
        queue[i] = null;
        fn();
      }
      length = 0;
    }
    function defer2(fn) {
      if (length === 0) {
        scheduleFlush();
      }
      queue[length++] = fn;
    }
    return defer2;
  }();
  function doResolve(promise, resolve, reject, value, context) {
    var _reject2 = reject;
    var then;
    var _resolve2;
    try {
      if (value === promise) {
        throw new TypeError("Cannot fulfill promise with itself");
      }
      var isObj = isObject(value);
      if (isObj && value instanceof promise.constructor) {
        adopt(promise, value._state, value._value, value);
      } else if (isObj && (then = value.then) && isFunction(then)) {
        _resolve2 = function _resolve(value2) {
          _resolve2 = _reject2 = noop;
          doResolve(promise, resolve, reject, value2, value2);
        };
        _reject2 = function _reject(reason) {
          _resolve2 = _reject2 = noop;
          reject(reason);
        };
        then.call(context, function(value2) {
          _resolve2(value2);
        }, function(reason) {
          _reject2(reason);
        });
      } else {
        resolve(value);
      }
    } catch (e) {
      _reject2(e);
    }
  }
  var promise_default = Promise2;

  // src/polyfills/promise.js
  function install4(win) {
    if (!win.Promise) {
      win.Promise = promise_default;
      if (promise_default.default) {
        win.Promise = promise_default.default;
      }
      win.Promise.resolve = promise_default.resolve;
      win.Promise.reject = promise_default.reject;
      win.Promise.all = promise_default.all;
      win.Promise.race = promise_default.race;
    }
  }

  // src/polyfills/string-starts-with.js
  function startsWith(search, rawPos) {
    var pos = rawPos > 0 ? rawPos | 0 : 0;
    return this.substr(pos, search.length) === search;
  }
  function install5(win) {
    if (!win.String.prototype.startsWith) {
      win.Object.defineProperty(win.String.prototype, "startsWith", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: startsWith
      });
    }
  }

  // 3p/polyfills.js
  if (true) {
    install(self);
    install2(self);
    install3(self);
    install4(self);
    install5(self);
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

  // src/core/data-structures/promise.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Deferred2 = function Deferred3() {
    var _this = this;
    _classCallCheck(this, Deferred3);
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
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
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
  function isString(s) {
    return typeof s == "string";
  }

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;
  function isObject2(value) {
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
  function assertString(assertFn, shouldBeString, opt_message) {
    return assertType_(assertFn, shouldBeString, isString(shouldBeString), "String expected", opt_message);
  }
  function assertNumber(assertFn, shouldBeNumber, opt_message) {
    return assertType_(assertFn, shouldBeNumber, typeof shouldBeNumber == "number", "Number expected", opt_message);
  }
  function assertArray(assertFn, shouldBeArray, opt_message) {
    return assertType_(assertFn, shouldBeArray, isArray(shouldBeArray), "Array expected", opt_message);
  }
  function assertBoolean(assertFn, shouldBeBoolean, opt_message) {
    return assertType_(assertFn, shouldBeBoolean, !!shouldBeBoolean === shouldBeBoolean, "Boolean expected", opt_message);
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
      rtvVersion: rtvVersion
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
    thirdPartyFrameRegex: thirdPartyFrameRegex,
    cdn: env["cdnUrl"] || getMetaUrl("runtime-host") || "https://cdn.ampproject.org",
    cdnProxyRegex: cdnProxyRegex,
    localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
    errorReporting: env["errorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
    betaErrorReporting: env["betaErrorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
    localDev: env["localDev"] || false,
    trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
    geoApi: env["geoApiUrl"] || getMetaUrl("amp-geo-api")
  };

  // src/log.js
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
  var noop2 = function noop3() {
  };
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";
  var LogLevel = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    FINE: 4
  };
  function setReportError(fn) {
    self.__AMP_REPORT_ERROR = fn;
  }
  var levelOverride_ = void 0;
  var messageUrlRtv = function messageUrlRtv2() {
    return "01" + internalRuntimeVersion();
  };
  var externalMessageUrl = function externalMessageUrl2(id, interpolatedParts) {
    return interpolatedParts.reduce(function(prefix, arg) {
      return prefix + "&s[]=" + messageArgToEncodedComponent(arg);
    }, "https://log.amp.dev/?v=" + messageUrlRtv() + "&id=" + encodeURIComponent(id));
  };
  var externalMessagesSimpleTableUrl = function externalMessagesSimpleTableUrl2() {
    return urls.cdn + "/rtv/" + messageUrlRtv() + "/log-messages.simple.json";
  };
  var messageArgToEncodedComponent = function messageArgToEncodedComponent2(arg) {
    return encodeURIComponent(String(elementStringOrPassThru(arg)));
  };
  var Log = /* @__PURE__ */ function() {
    function Log2(win, levelFunc, opt_suffix) {
      var _this = this;
      if (opt_suffix === void 0) {
        opt_suffix = "";
      }
      _classCallCheck2(this, Log2);
      this.win = getMode().test && win.__AMP_TEST_IFRAME ? win.parent : win;
      this.levelFunc_ = levelFunc;
      this.level_ = this.defaultLevel_();
      this.suffix_ = opt_suffix;
      this.messages_ = null;
      this.fetchExternalMessagesOnce_ = once(function() {
        win.fetch(externalMessagesSimpleTableUrl()).then(function(response) {
          return response.json();
        }, noop2).then(function(opt_messages) {
          if (opt_messages) {
            _this.messages_ = opt_messages;
          }
        });
      });
      this.boundAssertFn_ = this.assert.bind(this);
    }
    _createClass(Log2, [{
      key: "getLevel_",
      value: function getLevel_() {
        return levelOverride_ !== void 0 ? levelOverride_ : this.level_;
      }
    }, {
      key: "defaultLevel_",
      value: function defaultLevel_() {
        if (!this.win.console || !this.win.console.log) {
          return LogLevel.OFF;
        }
        if (getMode().log == "0") {
          return LogLevel.OFF;
        }
        if (getMode().test && this.win.ENABLE_LOG) {
          return LogLevel.FINE;
        }
        if (getMode().localDev && !getMode().log) {
          return LogLevel.INFO;
        }
        return this.defaultLevelWithFunc_();
      }
    }, {
      key: "defaultLevelWithFunc_",
      value: function defaultLevelWithFunc_() {
        return this.levelFunc_(parseInt(getMode().log, 10), getMode().development);
      }
    }, {
      key: "msg_",
      value: function msg_(tag, level, messages) {
        if (this.getLevel_() < level) {
          return false;
        }
        var fn = this.win.console.log;
        if (level == LogLevel.ERROR) {
          fn = this.win.console.error || fn;
        } else if (level == LogLevel.INFO) {
          fn = this.win.console.info || fn;
        } else if (level == LogLevel.WARN) {
          fn = this.win.console.warn || fn;
        }
        var args = this.maybeExpandMessageArgs_(messages);
        var prefix = "[" + tag + "]";
        if (typeof args[0] === "string") {
          args[0] = prefix + " " + args[0];
        } else {
          args.unshift(prefix);
        }
        fn.apply(this.win.console, args);
        return true;
      }
    }, {
      key: "isEnabled",
      value: function isEnabled() {
        return this.getLevel_() != LogLevel.OFF;
      }
    }, {
      key: "fine",
      value: function fine(tag) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        this.msg_(tag, LogLevel.FINE, args);
      }
    }, {
      key: "info",
      value: function info(tag) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        this.msg_(tag, LogLevel.INFO, args);
      }
    }, {
      key: "warn",
      value: function warn(tag) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        this.msg_(tag, LogLevel.WARN, args);
      }
    }, {
      key: "error_",
      value: function error_(tag) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        if (!this.msg_(tag, LogLevel.ERROR, args)) {
          return this.createError.apply(this, args);
        }
      }
    }, {
      key: "error",
      value: function error(tag, var_args) {
        var error2 = this.error_.apply(this, arguments);
        if (error2) {
          error2.name = tag || error2.name;
          self.__AMP_REPORT_ERROR(error2);
        }
      }
    }, {
      key: "expectedError",
      value: function expectedError(unusedTag, var_args) {
        var error = this.error_.apply(this, arguments);
        if (error) {
          error.expected = true;
          self.__AMP_REPORT_ERROR(error);
        }
      }
    }, {
      key: "createError",
      value: function createError(var_args) {
        var error = createErrorVargs.apply(null, arguments);
        this.prepareError_(error);
        return error;
      }
    }, {
      key: "createExpectedError",
      value: function createExpectedError(var_args) {
        var error = createErrorVargs.apply(null, arguments);
        this.prepareError_(error);
        error.expected = true;
        return error;
      }
    }, {
      key: "assert",
      value: function assert2(shouldBeTrueish, opt_message, var_args) {
        if (isArray(opt_message)) {
          return this.assert.apply(this, [shouldBeTrueish].concat(this.expandMessageArgs_(opt_message)));
        }
        return assert.apply(null, [this.suffix_].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "assertElement",
      value: function assertElement2(shouldBeElement, opt_message) {
        return assertElement(this.boundAssertFn_, shouldBeElement, opt_message);
      }
    }, {
      key: "assertString",
      value: function assertString2(shouldBeString, opt_message) {
        return assertString(this.boundAssertFn_, shouldBeString, opt_message);
      }
    }, {
      key: "assertNumber",
      value: function assertNumber2(shouldBeNumber, opt_message) {
        return assertNumber(this.boundAssertFn_, shouldBeNumber, opt_message);
      }
    }, {
      key: "assertArray",
      value: function assertArray2(shouldBeArray, opt_message) {
        return assertArray(this.boundAssertFn_, shouldBeArray, opt_message);
      }
    }, {
      key: "assertBoolean",
      value: function assertBoolean2(shouldBeBoolean, opt_message) {
        return assertBoolean(this.boundAssertFn_, shouldBeBoolean, opt_message);
      }
    }, {
      key: "prepareError_",
      value: function prepareError_(error) {
        error = duplicateErrorIfNecessary(error);
        if (this.suffix_) {
          if (!error.message) {
            error.message = this.suffix_;
          } else if (error.message.indexOf(this.suffix_) == -1) {
            error.message += this.suffix_;
          }
        } else if (isUserErrorMessage(error.message)) {
          error.message = error.message.replace(USER_ERROR_SENTINEL, "");
        }
      }
    }, {
      key: "maybeExpandMessageArgs_",
      value: function maybeExpandMessageArgs_(args) {
        if (isArray(args[0])) {
          return this.expandMessageArgs_(args[0]);
        }
        return args;
      }
    }, {
      key: "expandMessageArgs_",
      value: function expandMessageArgs_(parts) {
        var id = parts.shift();
        if (getMode(this.win).development) {
          this.fetchExternalMessagesOnce_();
        }
        if (this.messages_ && id in this.messages_) {
          return [this.messages_[id]].concat(parts);
        }
        return ["More info at " + externalMessageUrl(id, parts)];
      }
    }]);
    return Log2;
  }();
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;
  var logConstructor = null;
  function initLogConstructor() {
    logConstructor = Log;
    dev();
    user();
  }
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

  // src/3p-frame-messaging.js
  var AMP_MESSAGE_PREFIX = "amp-";
  var CONSTANTS = {
    responseTypeSuffix: "-result",
    messageIdFieldName: "messageId",
    payloadFieldName: "payload",
    contentFieldName: "content"
  };
  var MessageType = {
    SEND_EMBED_STATE: "send-embed-state",
    EMBED_STATE: "embed-state",
    SEND_EMBED_CONTEXT: "send-embed-context",
    EMBED_CONTEXT: "embed-context",
    SEND_INTERSECTIONS: "send-intersections",
    INTERSECTION: "intersection",
    EMBED_SIZE: "embed-size",
    EMBED_SIZE_CHANGED: "embed-size-changed",
    EMBED_SIZE_DENIED: "embed-size-denied",
    NO_CONTENT: "no-content",
    GET_HTML: "get-html",
    GET_CONSENT_STATE: "get-consent-state",
    SIGNAL_INTERACTIVE: "signal-interactive",
    FULL_OVERLAY_FRAME: "full-overlay-frame",
    FULL_OVERLAY_FRAME_RESPONSE: "full-overlay-frame-response",
    CANCEL_FULL_OVERLAY_FRAME: "cancel-full-overlay-frame",
    CANCEL_FULL_OVERLAY_FRAME_RESPONSE: "cancel-full-overlay-frame-response",
    SEND_POSITIONS: "send-positions",
    POSITION: "position",
    SEND_IFRAME_TRANSPORT_EVENTS: "send-iframe-transport-events",
    IFRAME_TRANSPORT_EVENTS: "iframe-transport-events",
    IFRAME_TRANSPORT_RESPONSE: "iframe-transport-response",
    USER_ERROR_IN_IFRAME: "user-error-in-iframe",
    SEND_CONSENT_DATA: "send-consent-data",
    CONSENT_DATA: "consent-data"
  };
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function serializeMessage(type, sentinel, data, rtvVersion2) {
    if (data === void 0) {
      data = dict();
    }
    if (rtvVersion2 === void 0) {
      rtvVersion2 = null;
    }
    var message = data;
    message["type"] = type;
    message["sentinel"] = sentinel;
    return AMP_MESSAGE_PREFIX + (rtvVersion2 || "") + JSON.stringify(message);
  }
  function deserializeMessage(message) {
    if (!isAmpMessage(message)) {
      return null;
    }
    var startPos = message.indexOf("{");
    devAssert(startPos != -1, "JSON missing in %s", message);
    return tryParseJson(message.substr(startPos), function(e) {
      return dev().error("MESSAGING", "Failed to parse message: " + message, e);
    });
  }
  function isAmpMessage(message) {
    return typeof message == "string" && message.indexOf(AMP_MESSAGE_PREFIX) == 0 && message.indexOf("{") != -1;
  }

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
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck3(this, Observable2);
      this.handlers_ = null;
    }
    _createClass2(Observable2, [{
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

  // src/event-helper.js
  function getData(event) {
    return event.data;
  }

  // 3p/iframe-messaging-client.js
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
  var IframeMessagingClient = /* @__PURE__ */ function() {
    function IframeMessagingClient2(win, hostWindow) {
      _classCallCheck4(this, IframeMessagingClient2);
      this.win_ = win;
      this.rtvVersion_ = getMode().rtvVersion || null;
      this.hostWindow_ = hostWindow || null;
      this.sentinel_ = null;
      this.nextMessageId_ = 1;
      this.observableFor_ = map();
      this.setupEventListener_();
    }
    _createClass3(IframeMessagingClient2, [{
      key: "getData",
      value: function getData2(requestType, payload, callback) {
        var responseType = requestType + CONSTANTS.responseTypeSuffix;
        var messageId = this.nextMessageId_++;
        var unlisten = this.registerCallback(responseType, function(result) {
          if (result[CONSTANTS.messageIdFieldName] === messageId) {
            unlisten();
            callback(result[CONSTANTS.contentFieldName]);
          }
        });
        var data = dict();
        data[CONSTANTS.payloadFieldName] = payload;
        data[CONSTANTS.messageIdFieldName] = messageId;
        this.sendMessage(requestType, data);
      }
    }, {
      key: "makeRequest",
      value: function makeRequest(requestType, responseType, callback) {
        var unlisten = this.registerCallback(responseType, callback);
        this.sendMessage(requestType);
        return unlisten;
      }
    }, {
      key: "requestOnce",
      value: function requestOnce(requestType, responseType, callback) {
        var unlisten = this.registerCallback(responseType, function(event) {
          unlisten();
          callback(event);
        });
        this.sendMessage(requestType);
        return unlisten;
      }
    }, {
      key: "registerCallback",
      value: function registerCallback(messageType, callback) {
        return this.getOrCreateObservableFor_(messageType).add(callback);
      }
    }, {
      key: "sendMessage",
      value: function sendMessage(type, opt_payload) {
        var msg = serializeMessage(type, dev().assertString(this.sentinel_), opt_payload, this.rtvVersion_);
        if (!this.hostWindow_) {
          for (var j = 0, hostWin = this.win_; j < 10 && hostWin != this.win_.top; j++) {
            hostWin = hostWin.parent;
            this.sendMessageInternal_(hostWin, msg);
            j++;
          }
        } else {
          this.sendMessageInternal_(this.hostWindow_, msg);
        }
      }
    }, {
      key: "sendMessageInternal_",
      value: function sendMessageInternal_(win, msg) {
        if (this.isMessageOptionsSupported_(win)) {
          this.postMessageWithUserActivation_(win, msg);
        } else {
          win.postMessage(msg, "*");
        }
      }
    }, {
      key: "postMessageWithUserActivation_",
      value: function postMessageWithUserActivation_(win, msg) {
        win.postMessage(msg, dict({
          "targetOrigin": "*",
          "includeUserActivation": true
        }));
      }
    }, {
      key: "setupEventListener_",
      value: function setupEventListener_() {
        var _this = this;
        listen(this.win_, "message", function(event) {
          if (_this.hostWindow_ && event.source != _this.hostWindow_) {
            return;
          }
          var message = deserializeMessage(getData(event));
          if (!message || message["sentinel"] != _this.sentinel_) {
            return;
          }
          message["origin"] = event.origin;
          if (!_this.hostWindow_) {
            _this.hostWindow_ = event.source;
          }
          _this.fireObservable_(message["type"], message);
        });
      }
    }, {
      key: "setSentinel",
      value: function setSentinel(sentinel) {
        this.sentinel_ = sentinel;
      }
    }, {
      key: "getOrCreateObservableFor_",
      value: function getOrCreateObservableFor_(messageType) {
        if (!(messageType in this.observableFor_)) {
          this.observableFor_[messageType] = new Observable();
        }
        return this.observableFor_[messageType];
      }
    }, {
      key: "fireObservable_",
      value: function fireObservable_(messageType, message) {
        if (messageType in this.observableFor_) {
          this.observableFor_[messageType].fire(message);
        }
      }
    }, {
      key: "isMessageOptionsSupported_",
      value: function isMessageOptionsSupported_(win) {
        return win.postMessage.length == 1;
      }
    }]);
    return IframeMessagingClient2;
  }();

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck5(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass4(LruCache2, [{
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
          payload: payload,
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

  // 3p/ampcontext.js
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
  var AbstractAmpContext = /* @__PURE__ */ function() {
    function AbstractAmpContext2(win) {
      _classCallCheck6(this, AbstractAmpContext2);
      devAssert(!this.isAbstractImplementation_(), "Should not construct AbstractAmpContext instances directly");
      this.win_ = win;
      this.cachedFrameName_ = this.win_.name || null;
      this.embedType_ = null;
      this.canary = null;
      this.canonicalUrl = null;
      this.clientId = null;
      this.container = null;
      this.consentSharedData = null;
      this.data = null;
      this.domFingerprint = null;
      this.hidden = null;
      this.initialConsentState = null;
      this.initialConsentValue = null;
      this.initialConsentMetadata = null;
      this.initialLayoutRect = null;
      this.initialIntersection = null;
      this.location = null;
      this.mode = null;
      this.pageViewId = null;
      this.referrer = null;
      this.sentinel = null;
      this.sourceUrl = null;
      this.startTime = null;
      this.tagName = null;
      this.resizeIdToDeferred_ = map();
      this.nextResizeRequestId_ = 0;
      this.findAndSetMetadata_();
      this.client_ = new IframeMessagingClient(win, this.getHostWindow_());
      this.client_.setSentinel(devAssert(this.sentinel));
      this.listenForPageVisibility_();
      this.listenToResizeResponse_();
    }
    _createClass5(AbstractAmpContext2, [{
      key: "isAbstractImplementation_",
      value: function isAbstractImplementation_() {
        return true;
      }
    }, {
      key: "listenForPageVisibility_",
      value: function listenForPageVisibility_() {
        var _this = this;
        this.client_.makeRequest(MessageType.SEND_EMBED_STATE, MessageType.EMBED_STATE, function(data) {
          _this.hidden = data["pageHidden"];
          _this.dispatchVisibilityChangeEvent_();
        });
      }
    }, {
      key: "dispatchVisibilityChangeEvent_",
      value: function dispatchVisibilityChangeEvent_() {
        var event = this.win_.document.createEvent("Event");
        event.data = {
          hidden: this.hidden
        };
        event.initEvent(AmpEvents.VISIBILITY_CHANGE, true, true);
        this.win_.dispatchEvent(event);
      }
    }, {
      key: "onPageVisibilityChange",
      value: function onPageVisibilityChange(callback) {
        return this.client_.registerCallback(MessageType.EMBED_STATE, function(data) {
          callback({
            hidden: data["pageHidden"]
          });
        });
      }
    }, {
      key: "observeIntersection",
      value: function observeIntersection(callback) {
        return this.client_.makeRequest(MessageType.SEND_INTERSECTIONS, MessageType.INTERSECTION, function(intersection) {
          callback(intersection["changes"]);
        });
      }
    }, {
      key: "getHtml",
      value: function getHtml(selector, attributes, callback) {
        this.client_.getData(MessageType.GET_HTML, dict({
          "selector": selector,
          "attributes": attributes
        }), callback);
      }
    }, {
      key: "getConsentState",
      value: function getConsentState(callback) {
        this.client_.getData(MessageType.GET_CONSENT_STATE, null, callback);
      }
    }, {
      key: "requestResize",
      value: function requestResize(width, height, hasOverflow) {
        var requestId = this.nextResizeRequestId_++;
        this.client_.sendMessage(MessageType.EMBED_SIZE, dict({
          "id": requestId,
          "width": width,
          "height": height,
          "hasOverflow": hasOverflow
        }));
        var deferred = new Deferred2();
        this.resizeIdToDeferred_[requestId] = deferred;
        return deferred.promise;
      }
    }, {
      key: "listenToResizeResponse_",
      value: function listenToResizeResponse_() {
        var _this2 = this;
        this.client_.registerCallback(MessageType.EMBED_SIZE_CHANGED, function(data) {
          var id = data["id"];
          if (id !== void 0) {
            _this2.resizeIdToDeferred_[id].resolve();
            delete _this2.resizeIdToDeferred_[id];
          }
        });
        this.client_.registerCallback(MessageType.EMBED_SIZE_DENIED, function(data) {
          var id = data["id"];
          if (id !== void 0) {
            _this2.resizeIdToDeferred_[id].reject("Resizing is denied");
            delete _this2.resizeIdToDeferred_[id];
          }
        });
      }
    }, {
      key: "sendDeprecationNotice_",
      value: function sendDeprecationNotice_(endpoint) {
        this.client_.sendMessage(MessageType.USER_ERROR_IN_IFRAME, dict({
          "message": endpoint + " is deprecated",
          "expected": true
        }));
      }
    }, {
      key: "onResizeSuccess",
      value: function onResizeSuccess(callback) {
        this.client_.registerCallback(MessageType.EMBED_SIZE_CHANGED, function(obj) {
          callback(obj["requestedHeight"], obj["requestedWidth"]);
        });
        this.sendDeprecationNotice_("onResizeSuccess");
      }
    }, {
      key: "onResizeDenied",
      value: function onResizeDenied(callback) {
        this.client_.registerCallback(MessageType.EMBED_SIZE_DENIED, function(obj) {
          callback(obj["requestedHeight"], obj["requestedWidth"]);
        });
        this.sendDeprecationNotice_("onResizeDenied");
      }
    }, {
      key: "signalInteractive",
      value: function signalInteractive() {
        this.client_.sendMessage(MessageType.SIGNAL_INTERACTIVE);
      }
    }, {
      key: "addContextToIframe",
      value: function addContextToIframe(iframe) {
        iframe.name = dev().assertString(this.cachedFrameName_);
      }
    }, {
      key: "noContentAvailable",
      value: function noContentAvailable() {
        this.client_.sendMessage(MessageType.NO_CONTENT);
      }
    }, {
      key: "setupMetadata_",
      value: function setupMetadata_(data) {
        var dataObject = devAssert(typeof data === "string" ? tryParseJson(data) : data, "Could not setup metadata.");
        var context = dataObject._context || dataObject.attributes._context;
        this.data = dataObject.attributes || dataObject;
        if ("_context" in this.data) {
          delete this.data["_context"];
        }
        this.canary = context.canary;
        this.canonicalUrl = context.canonicalUrl;
        this.clientId = context.clientId;
        this.consentSharedData = context.consentSharedData;
        this.container = context.container;
        this.domFingerprint = context.domFingerprint;
        this.hidden = context.hidden;
        this.initialConsentState = context.initialConsentState;
        this.initialConsentValue = context.initialConsentValue;
        this.initialConsentMetadata = context.initialConsentMetadata;
        this.initialLayoutRect = context.initialLayoutRect;
        this.initialIntersection = context.initialIntersection;
        this.location = parseUrlDeprecated(context.location.href);
        this.mode = context.mode;
        this.pageViewId = context.pageViewId;
        this.referrer = context.referrer;
        this.sentinel = context.sentinel;
        this.sourceUrl = context.sourceUrl;
        this.startTime = context.startTime;
        this.tagName = context.tagName;
        this.embedType_ = dataObject.type || null;
      }
    }, {
      key: "getHostWindow_",
      value: function getHostWindow_() {
        var sentinelMatch = this.sentinel.match(/((\d+)-\d+)/);
        devAssert(sentinelMatch, "Incorrect sentinel format");
        var depth = Number(sentinelMatch[2]);
        var ancestors = [];
        for (var win = this.win_; win && win != win.parent; win = win.parent) {
          ancestors.push(win.parent);
        }
        return ancestors[ancestors.length - 1 - depth];
      }
    }, {
      key: "findAndSetMetadata_",
      value: function findAndSetMetadata_() {
        if (isObject2(this.win_.sf_) && this.win_.sf_.cfg) {
          this.setupMetadata_(this.win_.sf_.cfg);
        } else if (this.win_.AMP_CONTEXT_DATA) {
          if (typeof this.win_.AMP_CONTEXT_DATA == "string") {
            this.sentinel = this.win_.AMP_CONTEXT_DATA;
          } else if (isObject2(this.win_.AMP_CONTEXT_DATA)) {
            this.setupMetadata_(this.win_.AMP_CONTEXT_DATA);
          }
        } else {
          this.setupMetadata_(this.win_.name);
        }
      }
    }, {
      key: "report3pError",
      value: function report3pError(e) {
        if (!e.message) {
          return;
        }
        this.client_.sendMessage(MessageType.USER_ERROR_IN_IFRAME, dict({
          "message": e.message
        }));
      }
    }]);
    return AbstractAmpContext2;
  }();

  // 3p/3p.js
  var registrations;
  function getRegistrations() {
    if (!registrations) {
      registrations = map();
    }
    return registrations;
  }
  function register(id, draw) {
    var registrations2 = getRegistrations();
    devAssert(!registrations2[id], "Double registration %s", id);
    registrations2[id] = draw;
  }
  function run(id, win, data) {
    var fn = registrations[id];
    userAssert(fn, "Unknown 3p: " + id);
    fn(win, data);
  }
  function loadScript(win, url, opt_cb, opt_errorCb) {
    var s = win.document.createElement("script");
    s.src = url;
    if (opt_cb) {
      s.onload = opt_cb;
    }
    if (opt_errorCb) {
      s.onerror = opt_errorCb;
    }
    win.document.body.appendChild(s);
  }
  function computeInMasterFrame(global, taskId, work, cb) {
    var master = global.context.master;
    var tasks = master.__ampMasterTasks;
    if (!tasks) {
      tasks = master.__ampMasterTasks = {};
    }
    var cbs = tasks[taskId];
    if (!tasks[taskId]) {
      cbs = tasks[taskId] = [];
    }
    cbs.push(cb);
    if (!global.context.isMaster) {
      return;
    }
    work(function(result) {
      for (var i = 0; i < cbs.length; i++) {
        cbs[i].call(null, result);
      }
      tasks[taskId] = {
        push: function push(cb2) {
          cb2(result);
        }
      };
    });
  }
  var experimentToggles = {};
  function setExperimentToggles(toggles) {
    experimentToggles = toggles;
  }

  // 3p/ampcontext-integration.js
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
  function masterSelection(win, type) {
    type = type.toLowerCase();
    var masterName = "frame_" + type + "_master";
    var master;
    try {
      master = win.parent.frames[masterName];
    } catch (expected) {
    }
    if (!master) {
      win.name = masterName;
      master = win;
    }
    return master;
  }
  var IntegrationAmpContext = /* @__PURE__ */ function(_AbstractAmpContext) {
    _inherits(IntegrationAmpContext2, _AbstractAmpContext);
    var _super = _createSuper(IntegrationAmpContext2);
    function IntegrationAmpContext2() {
      _classCallCheck7(this, IntegrationAmpContext2);
      return _super.apply(this, arguments);
    }
    _createClass6(IntegrationAmpContext2, [{
      key: "isAbstractImplementation_",
      value: function isAbstractImplementation_() {
        return false;
      }
    }, {
      key: "updateDimensionsEnabled_",
      value: function updateDimensionsEnabled_() {
        return this.embedType_ === "facebook" || this.embedType_ === "twitter" || this.embedType_ === "github" || this.embedType_ === "mathml" || this.embedType_ === "reddit" || this.embedType_ === "yotpo" || this.embedType_ === "embedly";
      }
    }, {
      key: "master",
      get: function get() {
        return this.master_();
      }
    }, {
      key: "master_",
      value: function master_() {
        return masterSelection(this.win_, dev().assertString(this.embedType_));
      }
    }, {
      key: "isMaster",
      get: function get() {
        return this.isMaster_();
      }
    }, {
      key: "isMaster_",
      value: function isMaster_() {
        return this.master == this.win_;
      }
    }, {
      key: "updateDimensions",
      value: function updateDimensions(width, height) {
        userAssert(this.updateDimensionsEnabled_(), "Not available.");
        this.requestResize(width, height);
      }
    }, {
      key: "bootstrapLoaded",
      value: function bootstrapLoaded() {
        this.client_.sendMessage("bootstrap-loaded");
      }
    }, {
      key: "renderStart",
      value: function renderStart(opt_data) {
        this.client_.sendMessage("render-start", opt_data);
      }
    }, {
      key: "reportRenderedEntityIdentifier",
      value: function reportRenderedEntityIdentifier(entityId) {
        this.client_.sendMessage("entity-id", dict({
          "id": user().assertString(entityId)
        }));
      }
    }, {
      key: "computeInMasterFrame",
      value: function computeInMasterFrame2(global, taskId, work, cb) {
        computeInMasterFrame(global, taskId, work, cb);
      }
    }]);
    return IntegrationAmpContext2;
  }(AbstractAmpContext);

  // 3p/frame-metadata.js
  var FALLBACK = dict({
    "attributes": dict({
      "_context": dict()
    })
  });
  var allMetadata = once(function() {
    var iframeName = window.name;
    try {
      return parseJson(iframeName);
    } catch (err) {
      if (!getMode().test) {
        dev().info("INTEGRATION", "Could not parse context from:", iframeName);
      }
      return FALLBACK;
    }
  });
  function getAmpConfig() {
    var metadata = allMetadata();
    return {
      mode: metadata["attributes"]["_context"].mode,
      experimentToggles: metadata["attributes"]["_context"].experimentToggles
    };
  }
  var getAttributeDataImpl_ = once(function() {
    var data = Object.assign(dict({}), allMetadata()["attributes"]);
    if ("_context" in data) {
      delete data["_context"];
    }
    return data;
  });
  function getAttributeData() {
    return getAttributeDataImpl_();
  }
  var getLocationImpl_ = once(function() {
    var href = allMetadata()["attributes"]["_context"]["location"]["href"];
    return parseUrlDeprecated(href);
  });
  function getLocation() {
    return getLocationImpl_();
  }
  function getEmbedType() {
    return getAttributeData()["type"];
  }

  // 3p/messaging.js
  var listeners = [];
  function listenParent(win, type, callback) {
    var listener = {
      type: type,
      cb: callback
    };
    listeners.push(listener);
    startListening(win);
    return function() {
      var index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }
  function startListening(win) {
    if (win.AMP_LISTENING) {
      return;
    }
    win.AMP_LISTENING = true;
    win.addEventListener("message", function(event) {
      var eventData = getData(event);
      if (event.source != win.parent || event.origin != win.context.location.origin || typeof eventData != "string" || eventData.indexOf("amp-") != 0) {
        return;
      }
      var data = parseJson(getData(event).substr(4));
      if (win.context.sentinel && data["sentinel"] != win.context.sentinel) {
        return;
      }
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      }
      for (var i = 0; i < listeners.length; i++) {
        if (listeners[i].type != data["type"]) {
          continue;
        }
        var cb = listeners[i].cb;
        try {
          cb(data);
        } catch (e) {
          setTimeout(function() {
            throw e;
          });
        }
      }
    });
  }

  // 3p/environment.js
  var inViewport = true;
  var intervals = {};
  var intervalId = 1;
  function manageWin(win) {
    try {
      manageWin_(win);
    } catch (e) {
      console.error(e.message, e.stack);
    }
  }
  function manageWin_(win) {
    if (win.ampSeen) {
      return;
    }
    win.ampSeen = true;
    instrumentEntryPoints(win);
    installObserver(win);
    maybeInstrumentsNodes(win, win.document.querySelectorAll("iframe"));
    blockSyncPopups(win);
  }
  function instrumentDocWrite(parent2, win) {
    var doc = win.document;
    var close = doc.close;
    doc.close = function() {
      parent2.ampManageWin = function(win2) {
        manageWin(win2);
      };
      if (!parent2.ampSeen) {
        doc.write("<script>window.parent.ampManageWin(window)<\/script>");
      }
      doc._close = close;
      return doc._close();
    };
  }
  function instrumentSrcdoc(parent2, iframe) {
    var srcdoc = iframe.getAttribute("srcdoc");
    parent2.ampManageWin = function(win) {
      manageWin(win);
    };
    srcdoc += "<script>window.parent.ampManageWin(window)<\/script>";
    iframe.setAttribute("srcdoc", srcdoc);
  }
  function maybeInstrumentsNodes(win, addedNodes) {
    var _loop = function _loop2(n2) {
      var node = addedNodes[n2];
      try {
        if (node.tagName != "IFRAME") {
          return "continue";
        }
        var src = node.getAttribute("src");
        var srcdoc = node.getAttribute("srcdoc");
        if (src == null || /^(about:|javascript:)/i.test(src.trim()) || srcdoc) {
          if (node.contentWindow) {
            instrumentIframeWindow(node, win, node.contentWindow);
            node.addEventListener("load", function() {
              try {
                instrumentIframeWindow(node, win, node.contentWindow);
              } catch (e) {
                console.error(e.message, e.stack);
              }
            });
          } else if (srcdoc) {
            instrumentSrcdoc(parent, node);
          }
        }
      } catch (e) {
        console.error(e.message, e.stack);
      }
    };
    for (var n = 0; n < addedNodes.length; n++) {
      var _ret = _loop(n);
      if (_ret === "continue")
        continue;
    }
  }
  function instrumentIframeWindow(node, parent2, win) {
    if (win.ampSeen) {
      return;
    }
    var doc = win.document;
    instrumentDocWrite(parent2, win);
    if (doc.body && doc.body.childNodes.length) {
      manageWin(win);
    }
  }
  function installObserver(win) {
    if (!window.MutationObserver) {
      return;
    }
    var observer = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i++) {
        maybeInstrumentsNodes(win, mutations[i].addedNodes);
      }
    });
    observer.observe(win.document.documentElement, {
      subtree: true,
      childList: true
    });
  }
  function instrumentEntryPoints(win) {
    var setTimeout2 = win.setTimeout;
    win.setTimeout = function(fn, time) {
      time = minTime(time);
      arguments[1] = time;
      return setTimeout2.apply(this, arguments);
    };
    win.setInterval = function(fn) {
      var id = intervalId++;
      var args = Array.prototype.slice.call(arguments);
      function wrapper() {
        next();
        if (typeof fn == "string") {
          return (0, win.eval).call(win, fn);
        } else {
          return fn.apply(this, arguments);
        }
      }
      args[0] = wrapper;
      function next() {
        intervals[id] = win.setTimeout.apply(win, args);
      }
      next();
      return id;
    };
    var clearInterval2 = win.clearInterval;
    win.clearInterval = function(id) {
      clearInterval2(id);
      win.clearTimeout(intervals[id]);
      delete intervals[id];
    };
  }
  function blockSyncPopups(win) {
    var count = 0;
    function maybeThrow() {
      if (count++ > 2) {
        throw new Error("security error");
      }
    }
    try {
      win.alert = maybeThrow;
      win.prompt = function() {
        maybeThrow();
        return "";
      };
      win.confirm = function() {
        maybeThrow();
        return false;
      };
    } catch (e) {
      console.error(e.message, e.stack);
    }
  }
  function minTime(time) {
    if (!inViewport) {
      time += 1e3;
    }
    return time;
  }
  function installEmbedStateListener() {
    listenParent(window, "embed-state", function(data) {
      inViewport = data["inViewport"];
    });
  }

  // 3p/integration-lib.js
  var AMP_EMBED_ALLOWED = {
    _ping_: true,
    "1wo": true,
    "24smi": true,
    adsloom: true,
    adstyle: true,
    bringhub: true,
    dable: true,
    engageya: true,
    epeex: true,
    firstimpression: true,
    forkmedia: true,
    glomex: true,
    idealmedia: true,
    insticator: true,
    jubna: true,
    kuadio: true,
    "mantis-recommend": true,
    mediaad: true,
    mgid: true,
    miximedia: true,
    mywidget: true,
    nativery: true,
    lentainform: true,
    opinary: true,
    outbrain: true,
    plista: true,
    postquare: true,
    ppstudio: true,
    pubexchange: true,
    pulse: true,
    rbinfox: true,
    rcmwidget: true,
    readmo: true,
    recreativ: true,
    runative: true,
    smartclip: true,
    smi2: true,
    speakol: true,
    strossle: true,
    svknative: true,
    taboola: true,
    temedya: true,
    vlyby: true,
    whopainfeed: true,
    yahoofedads: true,
    yahoonativeads: true,
    yektanet: true,
    zen: true,
    zergnet: true
  };
  var defaultAllowedTypesInCustomFrame = [
    "facebook",
    "twitter",
    "doubleclick",
    "yieldbot",
    "_ping_"
  ];
  function init(win) {
    initLogConstructor();
    var config = getAmpConfig();
    win.__AMP_MODE = config.mode;
    setReportError(console.error.bind(console));
    setExperimentToggles(config.experimentToggles);
  }
  function draw3pInternal(win, data, configCallback) {
    var type = data["type"];
    userAssert(isTagNameAllowed(type, win.context.tagName), "Embed type %s not allowed with tag %s", type, win.context.tagName);
    if (configCallback) {
      configCallback(data, function(data2) {
        userAssert(data2, "Expected configuration to be passed as first argument");
        run(type, win, data2);
      });
    } else {
      run(type, win, data);
    }
  }
  function draw3p(opt_configCallback, opt_allowed3pTypes, opt_allowedEmbeddingOrigins) {
    try {
      var location = getLocation();
      ensureFramed(window);
      validateParentOrigin(window, location);
      validateAllowedTypes(window, getEmbedType(), opt_allowed3pTypes);
      if (opt_allowedEmbeddingOrigins) {
        validateAllowedEmbeddingOrigins(window, opt_allowedEmbeddingOrigins);
      }
      window.context = new IntegrationAmpContext(window);
      manageWin(window);
      installEmbedStateListener();
      draw3pInternal(window, window.context.data || {}, opt_configCallback);
      window.context.bootstrapLoaded();
    } catch (e) {
      if (window.context && window.context.report3pError) {
        if (e.message && isUserErrorMessage(e.message)) {
          window.context.report3pError(e);
        }
      }
      var c = window.context || {
        mode: {
          test: false
        }
      };
      if (!c.mode.test) {
        lightweightErrorReport(e, c.canary);
        throw e;
      }
    }
  }
  function validateParentOrigin(window2, parentLocation) {
    var ancestors = window2.location.ancestorOrigins;
    if (!ancestors || !ancestors.length) {
      return;
    }
    userAssert(ancestors[0] == parentLocation.origin, "Parent origin mismatch: %s, %s", ancestors[0], parentLocation.origin);
  }
  function validateAllowedTypes(window2, type, allowedTypes) {
    var thirdPartyHost = parseUrlDeprecated(urls.thirdParty).hostname;
    if (window2.location.hostname == thirdPartyHost) {
      return;
    }
    if (urls.thirdPartyFrameRegex.test(window2.location.hostname)) {
      return;
    }
    if (window2.location.hostname == "ads.localhost") {
      return;
    }
    if (defaultAllowedTypesInCustomFrame.indexOf(type) != -1) {
      return;
    }
    userAssert(allowedTypes && allowedTypes.indexOf(type) != -1, "3p type for custom iframe not allowed: %s", type);
  }
  function validateAllowedEmbeddingOrigins(window2, allowedHostnames) {
    if (!window2.document.referrer) {
      throw new Error("Referrer expected: " + window2.location.href);
    }
    var ancestors = window2.location.ancestorOrigins;
    var ancestor = ancestors ? ancestors[0] : window2.document.referrer;
    var _parseUrlDeprecated = parseUrlDeprecated(ancestor), hostname = _parseUrlDeprecated.hostname;
    if (isProxyOrigin(ancestor)) {
      hostname = parseUrlDeprecated(getSourceUrl(window2.document.referrer)).hostname;
    }
    for (var i = 0; i < allowedHostnames.length; i++) {
      if (allowedHostnames[i] == hostname) {
        return;
      }
      if (endsWith(hostname, "." + allowedHostnames[i])) {
        return;
      }
    }
    throw new Error("Invalid embedding hostname: " + hostname + " not in " + allowedHostnames);
  }
  function ensureFramed(window2) {
    if (window2 == window2.parent) {
      throw new Error("Must be framed: " + window2.location.href);
    }
  }
  function isTagNameAllowed(type, tagName) {
    if (tagName == "AMP-EMBED") {
      return !!AMP_EMBED_ALLOWED[type];
    }
    return true;
  }
  function lightweightErrorReport(e, isCanary) {
    new Image().src = urls.errorReporting + "?3p=1&v=" + encodeURIComponent(internalRuntimeVersion()) + "&m=" + encodeURIComponent(e.message) + "&ca=" + (isCanary ? 1 : 0) + "&r=" + encodeURIComponent(document.referrer) + "&s=" + encodeURIComponent(e.stack || "");
  }

  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };

  // ads/google/ima/ima-player-data.js
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
  var ImaPlayerData = /* @__PURE__ */ function() {
    function ImaPlayerData2() {
      _classCallCheck8(this, ImaPlayerData2);
      this.currentTime = 0;
      this.duration = 1;
      this.playedRanges = [];
    }
    _createClass7(ImaPlayerData2, [{
      key: "update",
      value: function update(videoPlayer) {
        this.currentTime = videoPlayer.currentTime;
        this.duration = videoPlayer.duration;
        var played = videoPlayer.played;
        var length = played.length;
        this.playedRanges = [];
        for (var i = 0; i < length; i++) {
          this.playedRanges.push([played.start(i), played.end(i)]);
        }
      }
    }]);
    return ImaPlayerData2;
  }();
  ImaPlayerData.IMA_PLAYER_DATA = "imaPlayerData";

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

  // src/static-template.js
  var htmlContainer;
  var svgContainer;
  function htmlFor(nodeOrDoc) {
    var doc = nodeOrDoc.ownerDocument || nodeOrDoc;
    if (!htmlContainer || htmlContainer.ownerDocument !== doc) {
      htmlContainer = doc.createElement("div");
    }
    return html;
  }
  function svgFor(nodeOrDoc) {
    var doc = nodeOrDoc.ownerDocument || nodeOrDoc;
    if (!svgContainer || svgContainer.ownerDocument !== svgContainer) {
      svgContainer = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    }
    return svg;
  }
  function svg(strings) {
    return createNode(svgContainer, strings);
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
  function htmlRefs(root) {
    var elements2 = root.querySelectorAll("[ref]");
    var refs = map();
    for (var i = 0; i < elements2.length; i++) {
      var element = elements2[i];
      var ref = devAssert(element.getAttribute("ref"), "Empty ref attr");
      element.removeAttribute("ref");
      devAssert(refs[ref] === void 0, "Duplicate ref");
      refs[ref] = element;
    }
    return refs;
  }

  // build/amp-ima-video-iframe.css.js
  var cssText = '[hidden]{display:none!important}.video,body{background:#000}.fill,.video{width:100%;height:100%}.fill{position:absolute;top:0;left:0}button{cursor:pointer;-webkit-appearance:none;appearance:none;padding:0;border:none;background:transparent;display:block}.controls{position:absolute;bottom:0;width:100%;background-color:rgba(7,20,30,0.7);background:linear-gradient(0,rgba(7,20,30,0.7),rgba(7,20,30,0));box-sizing:border-box;padding:60px 10px 10px;color:#fff;display:-ms-flexbox;display:flex;font-family:Helvetica,Arial,Sans-serif;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.controls>:not(:last-child){margin-right:20px}button>svg{width:100%;height:100%;filter:drop-shadow(0 0 14px rgba(0,0,0,0.4));fill:#fff}.countdownWrapper{-ms-flex-align:center;align-items:center;box-sizing:border-box;display:none;-ms-flex-positive:1;flex-grow:1;font-size:12px;height:20px;overflow:hidden;padding:5px;white-space:nowrap}.countdownWrapper,.time{text-shadow:0 0 10px #000}.time{text-align:center;font-size:14px}.progress,.time{margin-right:20px}.progress{height:30px;-ms-flex-positive:1;flex-grow:1;position:relative}.progress:after{display:block;content:"";background-color:hsla(0,0%,100%,0.45);height:2px;width:100%;margin-top:14px}.progressLine{background-color:#fff;height:2px;margin-top:14px;width:0%;float:left}.progressMarker{height:14px;width:14px;position:absolute;left:0%;top:50%;margin-top:-7px;cursor:pointer;border-radius:14px;background:#fff}.controls>button{width:30px;height:30px;-ms-flex-negative:0;flex-shrink:0}.overlayButton{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.overlayButton>svg{max-width:120px;max-height:120px}.root:not([data-muted]) .muteButton>svg:last-child,.root:not([data-playing]) .playButton>svg:last-child,.root[data-muted] .muteButton>svg:first-child,.root[data-playing] .playButton>svg:first-child{display:none}.root[data-ad]>.controls{height:30px;-ms-flex-pack:end;justify-content:flex-end;padding:10px}.root[data-ad]>.controls>button{height:22px}.root[data-ad]>.controls .muteButton{margin-right:10px}@media screen and (max-width:400){.root[data-skippable]>.controls{height:20px}.root[data-skippable]>.controls>button{height:18px}}.root[data-ad]>.controls>.countdownWrapper{display:-ms-flexbox;display:flex}.root[data-ad]>.controls>.progress,.root[data-ad]>.controls>.time{display:none}\n/*# sourceURL=/css/amp-ima-video-iframe.css*/';

  // ads/google/ima/ima-video.js
  var _templateObject;
  var _templateObject2;
  var _templateObject3;
  var _templateObject4;
  var _templateObject5;
  var _templateObject6;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var PlayerStates = {
    PLAYING: 1,
    PAUSED: 2
  };
  var icons = {
    play: function play(svg2) {
      return svg2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n    <svg viewBox="0 0 24 24">\n      <path d="M8 5v14l11-7z"></path>\n    </svg>\n  '])));
    },
    pause: function pause(svg2) {
      return svg2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n    <svg viewBox="0 0 24 24">\n      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>\n      <path d="M0 0h24v24H0z" fill="none"></path>\n    </svg>\n  '])));
    },
    fullscreen: function fullscreen(svg2) {
      return svg2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(['\n    <svg viewBox="0 0 24 24">\n      <path d="M0 0h24v24H0z" fill="none"></path>\n      <path\n        d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"\n      ></path>\n    </svg>\n  '])));
    },
    muted: function muted(svg2) {
      return svg2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(['\n    <svg viewBox="0 0 24 24">\n      <path\n        d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"\n      ></path>\n      <path d="M0 0h24v24H0z" fill="none"></path>\n    </svg>\n  '])));
    },
    volumeMax: function volumeMax(svg2) {
      return svg2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(['\n    <svg viewBox="0 0 24 24">\n      <path\n        d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"\n      ></path>\n      <path d="M0 0h24v24H0z" fill="none"></path>\n    </svg>\n  '])));
    }
  };
  var elements;
  var interactEvent;
  var mouseDownEvent;
  var mouseMoveEvent;
  var mouseUpEvent;
  var seekPercent;
  var contentComplete;
  var allAdsCompleted;
  var adRequestFailed;
  var currentAd;
  var adDisplayContainer;
  var adsRequest;
  var adsLoader;
  var adsManager;
  var uiTicker;
  var playerState;
  var fullscreen2;
  var fullscreenWidth;
  var fullscreenHeight;
  var adLabel;
  var adsActive;
  var playbackStarted;
  var showControlsFirstCalled;
  var hideControlsQueued;
  var controlsVisible;
  var hideControlsTimeout;
  var muteAdsManagerOnLoaded;
  var nativeFullscreen;
  var imaLoadAllowed;
  var adsManagerWidthOnLoad;
  var adsManagerHeightOnLoad;
  var videoWidth;
  var videoHeight;
  var imaSettings;
  var playerData = new ImaPlayerData();
  var adsRequested;
  var userTappedAndDragged;
  var consentState;
  var showControlsThrottled = throttle(window, showControls, 1e3);
  function insertCss(parent2, css) {
    var style = parent2.ownerDocument.createElement("style");
    style.textContent = css;
    parent2.appendChild(style);
  }
  function toggleRootDataAttribute(state, active) {
    var _elements = elements, root = _elements["root"];
    var attributeName = "data-" + state;
    if (active) {
      root.setAttribute(attributeName, "");
    } else {
      root.removeAttribute(attributeName);
    }
  }
  function renderElements(elementOrDoc) {
    var html2 = htmlFor(elementOrDoc);
    var root = html2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(['\n    <div class="fill">\n      <div class="fill">\n        <video\n          ref="video"\n          playsinline\n          controlslist="nodownload nofullscreen noremoteplayback"\n        >\n          <!-- Video children are later propagated from the iframe\'s name. -->\n        </video>\n      </div>\n\n      <div ref="adContainer" class="fill" hidden>\n        <!-- This subtree may be modified by the IMA SDK. -->\n      </div>\n\n      <div ref="controls" hidden>\n        <button ref="playButton"></button>\n\n        <div class="countdownWrapper">\n          <div ref="countdown">\n            <!-- Text content updated using data-ad-label onAdProgress(). -->\n          </div>\n        </div>\n\n        <div ref="time">\n          <!-- Text content must match format in updateTime(). -->\n          -:- / 0:00\n        </div>\n\n        <div ref="progress">\n          <div ref="progressLine"></div>\n          <div ref="progressMarker"></div>\n        </div>\n\n        <button ref="muteButton"></button>\n        <button ref="fullscreenButton"></button>\n      </div>\n\n      <button ref="overlayButton" class="fill"></button>\n    </div>\n  '])));
    var elements2 = htmlRefs(root);
    elements2["root"] = root;
    for (var ref in elements2) {
      elements2[ref].classList.add(ref);
    }
    var svg2 = svgFor(elementOrDoc);
    elements2["overlayButton"].appendChild(icons.play(svg2));
    elements2["fullscreenButton"].appendChild(icons.fullscreen(svg2));
    var muteButton = elements2["muteButton"], playButton = elements2["playButton"];
    playButton.appendChild(icons.play(svg2));
    playButton.appendChild(icons.pause(svg2));
    muteButton.appendChild(icons.volumeMax(svg2));
    muteButton.appendChild(icons.muted(svg2));
    return elements2;
  }
  function maybeAppendChildren(document2, parent2, childrenDef) {
    if (!isArray(childrenDef)) {
      return;
    }
    childrenDef.forEach(function(child) {
      var tagName = child[0];
      var attributes = child[1];
      if (!(typeof tagName === "string" && typeof attributes === "object" && attributes != null)) {
        throw new Error(child);
      }
      var element = document2.createElement(tagName);
      for (var attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
      }
      parent2.appendChild(element);
    });
  }
  function imaVideo(global, data) {
    insertCss(global.document.head, cssText);
    videoWidth = global.innerWidth;
    videoHeight = global.innerHeight;
    adLabel = data.adLabel || "Ad (%s of %s)";
    elements = renderElements(global.document);
    controlsVisible = false;
    var _elements2 = elements, video = _elements2["video"];
    video.setAttribute("poster", data.poster);
    if (data["crossorigin"] != null) {
      video.setAttribute("crossorigin", data["crossorigin"]);
    }
    if (data.src) {
      var sourceElement = document.createElement("source");
      sourceElement.setAttribute("src", data.src);
      video.appendChild(sourceElement);
    }
    maybeAppendChildren(global.document, video, tryParseJson(data["sourceChildren"]));
    if (data.imaSettings) {
      imaSettings = tryParseJson(data.imaSettings);
    }
    global.document.getElementById("c").appendChild(elements["root"]);
    window.addEventListener("message", onMessage.bind(null, global));
    hideControlsQueued = false;
    showControlsFirstCalled = false;
    contentComplete = false;
    adsActive = false;
    allAdsCompleted = false;
    playbackStarted = false;
    nativeFullscreen = false;
    imaLoadAllowed = true;
    var _elements3 = elements, fullscreenButton = _elements3["fullscreenButton"], muteButton = _elements3["muteButton"], playButton = _elements3["playButton"], progress = _elements3["progress"];
    var mobileBrowser = false;
    interactEvent = "click";
    mouseDownEvent = "mousedown";
    mouseMoveEvent = "mousemove";
    mouseUpEvent = "mouseup";
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i)) {
      mobileBrowser = true;
      interactEvent = "touchend";
      mouseDownEvent = "touchstart";
      mouseMoveEvent = "touchmove";
      mouseUpEvent = "touchend";
    }
    var _elements4 = elements, overlayButton = _elements4["overlayButton"];
    if (mobileBrowser) {
      overlayButton.addEventListener(mouseMoveEvent, onOverlayButtonTouchMove);
      overlayButton.addEventListener(mouseUpEvent, onOverlayButtonTouchEnd);
      overlayButton.addEventListener("tapwithoutdrag", onOverlayButtonInteract.bind(null, global));
    } else {
      overlayButton.addEventListener(interactEvent, onOverlayButtonInteract.bind(null, global));
    }
    playButton.addEventListener(interactEvent, onPlayPauseClick);
    progress.addEventListener(mouseDownEvent, onProgressClick);
    muteButton.addEventListener(interactEvent, onMuteUnmuteClick);
    fullscreenButton.addEventListener(interactEvent, toggleFullscreen.bind(null, global));
    showControlsThrottled = throttle(window, showControls, 1e3);
    var fullScreenEvents = ["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange"];
    fullScreenEvents.forEach(function(fsEvent) {
      global.document.addEventListener(fsEvent, onFullscreenChange.bind(null, global), false);
    });
    consentState = global.context.initialConsentState;
    if (consentState == 4) {
      onImaLoadFail();
    } else {
      loadScript(global, "https://imasdk.googleapis.com/js/sdkloader/ima3.js", function() {
        return onImaLoadSuccess(global, data);
      }, onImaLoadFail);
    }
  }
  function addHoverEventToElement(element, callback) {
    element.addEventListener(interactEvent, callback);
    element.addEventListener(mouseMoveEvent, callback);
  }
  function removeHoverEventFromElement(element, callback) {
    element.removeEventListener(interactEvent, callback);
    element.removeEventListener(mouseMoveEvent, callback);
  }
  function onImaLoadSuccess(global, data) {
    if (imaSettings) {
      if (imaSettings["locale"]) {
        global.google.ima.settings.setLocale(imaSettings["locale"]);
      }
      if (imaSettings["vpaidMode"]) {
        global.google.ima.settings.setVpaidMode(imaSettings["vpaidMode"]);
      }
    }
    var _elements5 = elements, adContainer = _elements5["adContainer"], video = _elements5["video"];
    adDisplayContainer = new global.google.ima.AdDisplayContainer(adContainer, video);
    adsLoader = new global.google.ima.AdsLoader(adDisplayContainer);
    adsLoader.getSettings().setPlayerType("amp-ima");
    adsLoader.getSettings().setPlayerVersion("0.1");
    var skippedSettings = ["locale", "vpaidMode", "playerType", "playerVersion"];
    for (var setting in imaSettings) {
      if (!skippedSettings.includes(setting)) {
        var methodName = "set" + camelCaseToTitleCase(setting);
        if (typeof adsLoader.getSettings()[methodName] === "function") {
          adsLoader.getSettings()[methodName](imaSettings[setting]);
        }
      }
    }
    adsLoader.addEventListener(global.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded.bind(null, global), false);
    adsLoader.addEventListener(global.google.ima.AdErrorEvent.Type.AD_ERROR, onAdsLoaderError, false);
    video.addEventListener("ended", onContentEnded);
    adsRequest = new global.google.ima.AdsRequest();
    adsRequest.adTagUrl = data.tag;
    adsRequest.linearAdSlotWidth = videoWidth;
    adsRequest.linearAdSlotHeight = videoHeight;
    adsRequest.nonLinearAdSlotWidth = videoWidth;
    adsRequest.nonLinearAdSlotHeight = videoHeight / 3;
    if (!data["delayAdRequest"]) {
      requestAds();
    } else {
      postMessage({
        event: VideoEvents.LOAD
      });
    }
  }
  function onImaLoadFail() {
    addHoverEventToElement(elements["video"], showControlsThrottled);
    imaLoadAllowed = false;
    postMessage({
      event: VideoEvents.LOAD
    });
  }
  function onOverlayButtonInteract(global) {
    var _elements6 = elements, overlayButton = _elements6["overlayButton"], video = _elements6["video"];
    if (playbackStarted) {
      playVideo();
    } else {
      playbackStarted = true;
      uiTicker = setInterval(uiTickerClick, 500);
      setInterval(playerDataTick, 1e3);
      if (adDisplayContainer) {
        adDisplayContainer.initialize();
      }
      video.load();
      playAds(global);
    }
    toggle(overlayButton, false);
  }
  function onOverlayButtonTouchEnd(event) {
    if (userTappedAndDragged) {
      userTappedAndDragged = false;
    } else {
      var tapWithoutDragEvent = new Event("tapwithoutdrag");
      event.currentTarget.dispatchEvent(tapWithoutDragEvent);
    }
  }
  function onOverlayButtonTouchMove() {
    userTappedAndDragged = true;
  }
  function requestAds() {
    adsRequested = true;
    adRequestFailed = false;
    if (consentState == CONSENT_POLICY_STATE.UNKNOWN) {
      imaLoadAllowed = false;
      return;
    } else if (consentState == CONSENT_POLICY_STATE.INSUFFICIENT) {
      adsRequest.adTagUrl += "&npa=1";
    }
    adsLoader.requestAds(adsRequest);
  }
  function playAds(global) {
    if (!imaLoadAllowed) {
      playVideo();
      return;
    }
    if (!adsRequested) {
      requestAds();
      playAds(global);
      return;
    } else if (adsManager) {
      try {
        adsManager.init(videoWidth, videoHeight, global.google.ima.ViewMode.NORMAL);
        adsManager.start();
      } catch (adError) {
        playVideo();
      }
    } else if (!adRequestFailed) {
      setTimeout(playAds.bind(null, global), 250);
    } else {
      playVideo();
    }
  }
  function onContentEnded() {
    contentComplete = true;
    if (adsLoader) {
      adsLoader.contentComplete();
    }
    if (allAdsCompleted) {
      toggle(elements["overlayButton"], true);
    }
    postMessage({
      event: VideoEvents.PAUSE
    });
    postMessage({
      event: VideoEvents.ENDED
    });
  }
  function onAdsManagerLoaded(global, adsManagerLoadedEvent) {
    var adsRenderingSettings = new global.google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    adsManager = adsManagerLoadedEvent.getAdsManager(elements["video"], adsRenderingSettings);
    adsManager.addEventListener(global.google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
    adsManager.addEventListener(global.google.ima.AdEvent.Type.LOADED, onAdLoad);
    adsManager.addEventListener(global.google.ima.AdEvent.Type.PAUSED, onAdPaused);
    adsManager.addEventListener(global.google.ima.AdEvent.Type.RESUMED, onAdResumed);
    adsManager.addEventListener(global.google.ima.AdEvent.Type.AD_PROGRESS, onAdProgress);
    adsManager.addEventListener(global.google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested.bind(null, global));
    adsManager.addEventListener(global.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested);
    adsManager.addEventListener(global.google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAllAdsCompleted);
    if (muteAdsManagerOnLoaded) {
      adsManager.setVolume(0);
    }
    postMessage({
      event: VideoEvents.LOAD
    });
  }
  function onAdsLoaderError() {
    adRequestFailed = true;
    postMessage({
      event: VideoEvents.LOAD
    });
    addHoverEventToElement(elements["video"], showControlsThrottled);
    if (playbackStarted) {
      playVideo();
    }
  }
  function onAdError() {
    postMessage({
      event: VideoEvents.AD_END
    });
    currentAd = null;
    if (adsManager) {
      adsManager.destroy();
    }
    addHoverEventToElement(elements["video"], showControlsThrottled);
    playVideo();
  }
  function onAdLoad(global) {
    currentAd = global.getAd();
  }
  function onAdProgress(unusedEvent) {
    var adPodInfo = currentAd.getAdPodInfo();
    var adPosition = adPodInfo.getAdPosition();
    var totalAds = adPodInfo.getTotalAds();
    var remainingTime = adsManager.getRemainingTime();
    var remainingMinutes = Math.floor(remainingTime / 60);
    var remainingSeconds = Math.floor(remainingTime % 60);
    if (remainingSeconds.toString().length < 2) {
      remainingSeconds = "0" + remainingSeconds;
    }
    var label = adLabel.replace("%s", adPosition).replace("%s", totalAds);
    var _elements7 = elements, countdown = _elements7["countdown"];
    countdown.textContent = label + ": " + remainingMinutes + ":" + remainingSeconds;
  }
  function onContentPauseRequested(global) {
    if (adsManagerWidthOnLoad) {
      adsManager.resize(adsManagerWidthOnLoad, adsManagerHeightOnLoad, global.google.ima.ViewMode.NORMAL);
      adsManagerWidthOnLoad = null;
      adsManagerHeightOnLoad = null;
    }
    adsActive = true;
    playerState = PlayerStates.PLAYING;
    postMessage({
      event: VideoEvents.AD_START
    });
    toggle(elements["adContainer"], true);
    showAdControls();
    var _elements8 = elements, video = _elements8["video"];
    video.removeEventListener("ended", onContentEnded);
    video.pause();
    removeHoverEventFromElement(video, showControlsThrottled);
  }
  function onContentResumeRequested() {
    var _elements9 = elements, overlayButton = _elements9["overlayButton"], video = _elements9["video"];
    adsActive = false;
    addHoverEventToElement(video, showControlsThrottled);
    postMessage({
      event: VideoEvents.AD_END
    });
    resetControlsAfterAd();
    if (!contentComplete) {
      playVideo();
    } else {
      toggle(overlayButton, true);
    }
    video.addEventListener("ended", onContentEnded);
  }
  function onAdPaused() {
    toggleRootDataAttribute("playing", false);
    playerState = PlayerStates.PAUSE;
  }
  function onAdResumed() {
    toggleRootDataAttribute("playing", true);
    playerState = PlayerStates.PLAYING;
  }
  function onAllAdsCompleted() {
    currentAd = null;
    allAdsCompleted = true;
  }
  function uiTickerClick() {
    var _elements$video = elements["video"], currentTime = _elements$video.currentTime, duration = _elements$video.duration;
    updateTime(currentTime, duration);
  }
  function playerDataTick() {
    var _elements10 = elements, video = _elements10["video"];
    if (video && !adsActive) {
      playerData.update(video);
      postMessage({
        event: ImaPlayerData.IMA_PLAYER_DATA,
        data: playerData
      });
    }
  }
  function updateTime(currentTime, duration) {
    var _elements11 = elements, progressLine = _elements11["progressLine"], progressMarker = _elements11["progressMarker"], time = _elements11["time"];
    time.textContent = formatTime(currentTime) + " / " + formatTime(duration);
    var progressPercent = Math.floor(currentTime / duration * 100);
    setStyle(progressLine, "width", progressPercent + "%");
    setStyle(progressMarker, "left", progressPercent - 1 + "%");
  }
  function formatTime(time) {
    if (isNaN(time)) {
      return "0:00";
    }
    var timeString = "";
    var hours = Math.floor(time / 3600);
    if (hours > 0) {
      timeString += hours + ":";
    }
    var minutes = Math.floor(time % 3600 / 60);
    if (hours > 0) {
      timeString += zeroPad(minutes) + ":";
    } else {
      timeString += minutes + ":";
    }
    var seconds = Math.floor(time - (hours * 3600 + minutes * 60));
    timeString += zeroPad(seconds);
    return timeString;
  }
  function zeroPad(input) {
    input = String(input);
    return input.length == 1 ? "0" + input : input;
  }
  function onProgressClick(event) {
    clearTimeout(hideControlsTimeout);
    onProgressMove(event);
    event.preventDefault();
    event.stopPropagation();
    clearInterval(uiTicker);
    document.addEventListener(mouseMoveEvent, onProgressMove);
    document.addEventListener(mouseUpEvent, onProgressClickEnd);
  }
  function onProgressClickEnd() {
    document.removeEventListener(mouseMoveEvent, onProgressMove);
    document.removeEventListener(mouseUpEvent, onProgressClickEnd);
    uiTicker = setInterval(uiTickerClick, 500);
    var _elements12 = elements, video = _elements12["video"];
    video.currentTime = video.duration * seekPercent;
    showControls();
  }
  function onProgressMove(event) {
    var _elements13 = elements, progress = _elements13["progress"], video = _elements13["video"];
    var progressWrapperPosition = getPagePosition(progress);
    var progressListStart = progressWrapperPosition.x;
    var progressListWidth = progress.offsetWidth;
    var eventX = event.clientX || event.touches[0].pageX;
    seekPercent = (eventX - progressListStart) / progressListWidth;
    if (seekPercent < 0) {
      seekPercent = 0;
    } else if (seekPercent > 1) {
      seekPercent = 1;
    }
    updateTime(video.duration * seekPercent, video.duration);
  }
  function getPagePosition(el) {
    var lx, ly;
    for (lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent) {
    }
    return {
      x: lx,
      y: ly
    };
  }
  function onPlayPauseClick() {
    if (playerState == PlayerStates.PLAYING) {
      pauseVideo();
    } else {
      playVideo();
    }
  }
  function playVideo() {
    var _elements14 = elements, adContainer = _elements14["adContainer"], video = _elements14["video"];
    if (adsActive) {
      adsManager.resume();
    } else {
      toggle(adContainer, false);
      showControls();
      video.play();
    }
    playerState = PlayerStates.PLAYING;
    postMessage({
      event: VideoEvents.PLAYING
    });
    toggleRootDataAttribute("playing", true);
  }
  function pauseVideo(event) {
    if (event === void 0) {
      event = null;
    }
    if (adsActive) {
      adsManager.pause();
    } else {
      var _elements15 = elements, video = _elements15["video"];
      video.pause();
      clearTimeout(hideControlsTimeout);
      showControls();
      if (event && event.type == "webkitendfullscreen") {
        video.removeEventListener("webkitendfullscreen", pauseVideo);
        fullscreen2 = false;
      }
    }
    playerState = PlayerStates.PAUSED;
    postMessage({
      event: VideoEvents.PAUSE
    });
    toggleRootDataAttribute("playing", false);
  }
  function onMuteUnmuteClick() {
    if (elements["video"].muted) {
      unmuteVideo();
    } else {
      muteVideo();
    }
  }
  function muteVideo() {
    toggleMuted(elements["video"], true);
  }
  function unmuteVideo() {
    toggleMuted(elements["video"], false);
  }
  function toggleMuted(video, muted2) {
    if (video.muted == muted2) {
      return;
    }
    var volume = muted2 ? 0 : 1;
    video.volume = volume;
    video.muted = muted2;
    if (adsManager) {
      adsManager.setVolume(volume);
    } else {
      muteAdsManagerOnLoaded = muted2;
    }
    toggleRootDataAttribute("muted", muted2);
    postMessage({
      event: muted2 ? VideoEvents.MUTED : VideoEvents.UNMUTED
    });
  }
  function exitFullscreen(global) {
    var cancelFullscreen = global.document.exitFullscreen || global.document.exitFullScreen || global.document.webkitCancelFullScreen || global.document.mozCancelFullScreen;
    if (cancelFullscreen) {
      cancelFullscreen.call(document);
    }
  }
  function enterFullscreen(global) {
    var requestFullscreen = global.document.documentElement.requestFullscreen || global.document.documentElement.webkitRequestFullscreen || global.document.documentElement.mozRequestFullscreen || global.document.documentElement.requestFullScreen || global.document.documentElement.webkitRequestFullScreen || global.document.documentElement.mozRequestFullScreen;
    if (requestFullscreen) {
      fullscreenWidth = window.screen.width;
      fullscreenHeight = window.screen.height;
      requestFullscreen.call(global.document.documentElement);
    } else {
      var _elements16 = elements, video = _elements16["video"];
      video.webkitEnterFullscreen();
      video.addEventListener("webkitendfullscreen", pauseVideo);
      nativeFullscreen = true;
      onFullscreenChange(global);
    }
  }
  function toggleFullscreen(global) {
    if (fullscreen2) {
      exitFullscreen(global);
      return;
    }
    enterFullscreen(global);
  }
  function onFullscreenChange(global) {
    if (fullscreen2) {
      if (adsManager) {
        adsManager.resize(videoWidth, videoHeight, global.google.ima.ViewMode.NORMAL);
        adsManagerWidthOnLoad = null;
        adsManagerHeightOnLoad = null;
      }
      fullscreen2 = false;
    } else {
      if (!nativeFullscreen) {
        if (adsManager) {
          adsManager.resize(fullscreenWidth, fullscreenHeight, global.google.ima.ViewMode.FULLSCREEN);
          adsManagerWidthOnLoad = null;
          adsManagerHeightOnLoad = null;
        }
        hideControls();
      }
      fullscreen2 = true;
    }
    postMessage({
      event: "fullscreenchange",
      isFullscreen: fullscreen2
    });
  }
  function showAdControls() {
    var _currentAd;
    showControls(true);
    toggleRootDataAttribute("playing", true);
    toggleRootDataAttribute("ad", true);
    toggleRootDataAttribute("skippable", currentAd ? ((_currentAd = currentAd) == null ? void 0 : _currentAd.getSkipTimeOffset()) !== -1 : false);
  }
  function resetControlsAfterAd() {
    toggleRootDataAttribute("ad", false);
    toggleRootDataAttribute("skippable", false);
  }
  function showControls(opt_adsForce) {
    showControlsFirstCalled = true;
    if (!controlsVisible) {
      if (hideControlsQueued && !opt_adsForce) {
        hideControlsQueued = false;
        return;
      }
      toggle(elements["controls"], true);
      controlsVisible = true;
    }
    if (playerState == PlayerStates.PLAYING) {
      clearTimeout(hideControlsTimeout);
      hideControlsTimeout = setTimeout(hideControls, 3e3);
    }
  }
  function hideControls() {
    if (controlsVisible && !adsActive) {
      toggle(elements["controls"], false);
      controlsVisible = false;
    } else if (!showControlsFirstCalled) {
      hideControlsQueued = true;
    }
  }
  function onMessage(global, event) {
    var eventData = getData(event);
    if (!eventData) {
      return;
    }
    var msg = isObject2(eventData) ? eventData : tryParseJson(eventData);
    if (!msg) {
      return;
    }
    if (!msg["event"] || !msg["func"]) {
      return;
    }
    switch (msg["func"]) {
      case "play":
        if (adsActive || playbackStarted) {
          playVideo();
        } else {
          onOverlayButtonInteract(global);
        }
        break;
      case "pause":
        pauseVideo();
        break;
      case "mute":
        muteVideo();
        break;
      case "unmute":
        unmuteVideo();
        break;
      case "hideControls":
        if (!adsActive) {
          hideControls();
        }
        break;
      case "showControls":
        if (!adsActive) {
          showControls();
        }
        break;
      case "resize":
        var args = msg["args"];
        if (args && args.width && args.height) {
          if (adsActive && !fullscreen2) {
            adsManager.resize(args.width, args.height, global.google.ima.ViewMode.NORMAL);
          } else {
            adsManagerWidthOnLoad = args.width;
            adsManagerHeightOnLoad = args.height;
          }
        }
        break;
      case "onFirstScroll":
      case "onAdRequestDelayTimeout":
        if (!adsRequested && imaLoadAllowed) {
          requestAds();
        }
        break;
      case "requestFullscreen":
        if (fullscreen2) {
          return;
        }
        enterFullscreen(global);
        break;
      case "exitFullscreen":
        if (!fullscreen2) {
          return;
        }
        exitFullscreen(global);
        break;
    }
  }
  function postMessage(data) {
    window.parent.postMessage(data, "*");
  }
  var VideoEvents = {
    LOAD: "load",
    PLAYING: "playing",
    PAUSE: "pause",
    ENDED: "ended",
    MUTED: "muted",
    UNMUTED: "unmuted",
    VISIBILITY: "amp:video:visibility",
    RELOAD: "reloaded",
    AD_START: "ad_start",
    AD_END: "ad_end"
  };

  // 3p/vendors/ima-video.js
  init(window);
  register("ima-video", imaVideo);
  window.draw3p = draw3p;
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=ima-video.max.js.map
