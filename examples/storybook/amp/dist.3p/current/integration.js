(() => {
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
  var hasOwnProperty2 = Object.prototype.hasOwnProperty;
  function assign(target, var_args) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      if (source != null) {
        for (var key in source) {
          if (hasOwnProperty2.call(source, key)) {
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
      deferred,
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
        promise,
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
  function doResolve(promise, resolve, reject, value, context2) {
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
        then.call(context2, function(value2) {
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
  function dashToUnderline(name) {
    return name.replace("-", "_");
  }
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
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
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
    var n4 = Object.prototype.toString.call(o).slice(8, -1);
    if (n4 === "Object" && o.constructor)
      n4 = o.constructor.name;
    if (n4 === "Map" || n4 === "Set")
      return Array.from(o);
    if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4))
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
    var callback2 = fn;
    return function() {
      if (!evaluated) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        retValue = callback2.apply(self, args);
        evaluated = true;
        callback2 = null;
      }
      return retValue;
    };
  }
  function throttle(win, callback2, minInterval) {
    var locker = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      locker = win.setTimeout(waiter, minInterval);
      callback2.apply(null, args);
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
    return interpolatedParts.reduce(function(prefix2, arg) {
      return prefix2 + "&s[]=" + messageArgToEncodedComponent(arg);
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
      value: function msg_(tag2, level, messages) {
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
        var prefix2 = "[" + tag2 + "]";
        if (typeof args[0] === "string") {
          args[0] = prefix2 + " " + args[0];
        } else {
          args.unshift(prefix2);
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
      value: function fine(tag2) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        this.msg_(tag2, LogLevel.FINE, args);
      }
    }, {
      key: "info",
      value: function info(tag2) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        this.msg_(tag2, LogLevel.INFO, args);
      }
    }, {
      key: "warn",
      value: function warn(tag2) {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        this.msg_(tag2, LogLevel.WARN, args);
      }
    }, {
      key: "error_",
      value: function error_(tag2) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        if (!this.msg_(tag2, LogLevel.ERROR, args)) {
          return this.createError.apply(this, args);
        }
      }
    }, {
      key: "error",
      value: function error(tag2, var_args) {
        var error2 = this.error_.apply(this, arguments);
        if (error2) {
          error2.name = tag2 || error2.name;
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
    var n4 = Object.prototype.toString.call(o).slice(8, -1);
    if (n4 === "Object" && o.constructor)
      n4 = o.constructor.name;
    if (n4 === "Map" || n4 === "Set")
      return Array.from(o);
    if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4))
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
      value: function getData2(requestType, payload, callback2) {
        var responseType = requestType + CONSTANTS.responseTypeSuffix;
        var messageId = this.nextMessageId_++;
        var unlisten = this.registerCallback(responseType, function(result) {
          if (result[CONSTANTS.messageIdFieldName] === messageId) {
            unlisten();
            callback2(result[CONSTANTS.contentFieldName]);
          }
        });
        var data = dict();
        data[CONSTANTS.payloadFieldName] = payload;
        data[CONSTANTS.messageIdFieldName] = messageId;
        this.sendMessage(requestType, data);
      }
    }, {
      key: "makeRequest",
      value: function makeRequest(requestType, responseType, callback2) {
        var unlisten = this.registerCallback(responseType, callback2);
        this.sendMessage(requestType);
        return unlisten;
      }
    }, {
      key: "requestOnce",
      value: function requestOnce(requestType, responseType, callback2) {
        var unlisten = this.registerCallback(responseType, function(event) {
          unlisten();
          callback2(event);
        });
        this.sendMessage(requestType);
        return unlisten;
      }
    }, {
      key: "registerCallback",
      value: function registerCallback(messageType, callback2) {
        return this.getOrCreateObservableFor_(messageType).add(callback2);
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
    var prefix2 = path[1];
    userAssert(SERVING_TYPE_PREFIX[prefix2], "Unknown path prefix in url %s", url.href);
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
      value: function onPageVisibilityChange(callback2) {
        return this.client_.registerCallback(MessageType.EMBED_STATE, function(data) {
          callback2({
            hidden: data["pageHidden"]
          });
        });
      }
    }, {
      key: "observeIntersection",
      value: function observeIntersection(callback2) {
        return this.client_.makeRequest(MessageType.SEND_INTERSECTIONS, MessageType.INTERSECTION, function(intersection) {
          callback2(intersection["changes"]);
        });
      }
    }, {
      key: "getHtml",
      value: function getHtml(selector, attributes, callback2) {
        this.client_.getData(MessageType.GET_HTML, dict({
          "selector": selector,
          "attributes": attributes
        }), callback2);
      }
    }, {
      key: "getConsentState",
      value: function getConsentState(callback2) {
        this.client_.getData(MessageType.GET_CONSENT_STATE, null, callback2);
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
      value: function onResizeSuccess(callback2) {
        this.client_.registerCallback(MessageType.EMBED_SIZE_CHANGED, function(obj) {
          callback2(obj["requestedHeight"], obj["requestedWidth"]);
        });
        this.sendDeprecationNotice_("onResizeSuccess");
      }
    }, {
      key: "onResizeDenied",
      value: function onResizeDenied(callback2) {
        this.client_.registerCallback(MessageType.EMBED_SIZE_DENIED, function(obj) {
          callback2(obj["requestedHeight"], obj["requestedWidth"]);
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
        var context2 = dataObject._context || dataObject.attributes._context;
        this.data = dataObject.attributes || dataObject;
        if ("_context" in this.data) {
          delete this.data["_context"];
        }
        this.canary = context2.canary;
        this.canonicalUrl = context2.canonicalUrl;
        this.clientId = context2.clientId;
        this.consentSharedData = context2.consentSharedData;
        this.container = context2.container;
        this.domFingerprint = context2.domFingerprint;
        this.hidden = context2.hidden;
        this.initialConsentState = context2.initialConsentState;
        this.initialConsentValue = context2.initialConsentValue;
        this.initialConsentMetadata = context2.initialConsentMetadata;
        this.initialLayoutRect = context2.initialLayoutRect;
        this.initialIntersection = context2.initialIntersection;
        this.location = parseUrlDeprecated(context2.location.href);
        this.mode = context2.mode;
        this.pageViewId = context2.pageViewId;
        this.referrer = context2.referrer;
        this.sentinel = context2.sentinel;
        this.sourceUrl = context2.sourceUrl;
        this.startTime = context2.startTime;
        this.tagName = context2.tagName;
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
  var syncScriptLoads = 0;
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
  function writeScript(win, url, opt_cb) {
    win.document.write('<script src="' + encodeURI(url) + '"><\/script>');
    if (opt_cb) {
      executeAfterWriteScript(win, opt_cb);
    }
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
  function executeAfterWriteScript(win, fn) {
    var index = syncScriptLoads++;
    win["__runScript" + index] = fn;
    win.document.write("<script>__runScript" + index + "()<\/script>");
  }
  function validateSrcPrefix(prefix2, src) {
    if (!isArray(prefix2)) {
      prefix2 = [prefix2];
    }
    if (src !== void 0) {
      for (var p = 0; p < prefix2.length; p++) {
        var protocolIndex = src.indexOf(prefix2[p]);
        if (protocolIndex == 0) {
          return;
        }
      }
    }
    throw new Error("Invalid src " + src);
  }
  function validateSrcContains(string, src) {
    if (src.indexOf(string) === -1) {
      throw new Error("Invalid src " + src);
    }
  }
  function computeInMasterFrame(global2, taskId, work, cb) {
    var master = global2.context.master;
    var tasks = master.__ampMasterTasks;
    if (!tasks) {
      tasks = master.__ampMasterTasks = {};
    }
    var cbs = tasks[taskId];
    if (!tasks[taskId]) {
      cbs = tasks[taskId] = [];
    }
    cbs.push(cb);
    if (!global2.context.isMaster) {
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
  function validateData(data, mandatoryFields2, opt_optionalFields) {
    var allowedFields = opt_optionalFields || [];
    for (var i = 0; i < mandatoryFields2.length; i++) {
      var field = mandatoryFields2[i];
      if (Array.isArray(field)) {
        validateExactlyOne(data, field);
        allowedFields = allowedFields.concat(field);
      } else {
        userAssert(data[field] != null, "Missing attribute for %s: %s.", data.type, field);
        allowedFields.push(field);
      }
    }
    if (opt_optionalFields) {
      validateAllowedFields(data, allowedFields);
    }
  }
  function validateExactlyOne(data, alternativeFields) {
    userAssert(alternativeFields.filter(function(field) {
      return data[field];
    }).length === 1, "%s must contain exactly one of attributes: %s.", data.type, alternativeFields.join(", "));
  }
  function validateAllowedFields(data, allowedFields) {
    var defaultAvailableFields = {
      width: true,
      height: true,
      type: true,
      referrer: true,
      canonicalUrl: true,
      pageViewId: true,
      location: true,
      mode: true,
      consentNotificationId: true,
      blockOnConsent: true,
      ampSlotIndex: true,
      adHolderText: true,
      loadingStrategy: true,
      htmlAccessAllowed: true,
      adContainerId: true
    };
    for (var field in data) {
      if (!hasOwn(data, field) || field in defaultAvailableFields) {
        continue;
      }
      if (allowedFields.indexOf(field) < 0) {
        rethrowAsync(new Error("Unknown attribute for " + data.type + ": " + field + "."));
      }
    }
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
      value: function computeInMasterFrame2(global2, taskId, work, cb) {
        computeInMasterFrame(global2, taskId, work, cb);
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
  function nonSensitiveDataPostMessage(type, opt_object) {
    if (window.parent == window) {
      return;
    }
    var object = opt_object || {};
    object["type"] = type;
    object["sentinel"] = window.context.sentinel;
    window.parent.postMessage(object, window.context.location.origin);
  }
  var listeners = [];
  function listenParent(win, type, callback2) {
    var listener = {
      type,
      cb: callback2
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
    var _loop = function _loop2(n5) {
      var node = addedNodes[n5];
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
    for (var n4 = 0; n4 < addedNodes.length; n4++) {
      var _ret = _loop(n4);
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
      var location2 = getLocation();
      ensureFramed(window);
      validateParentOrigin(window, location2);
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

  // 3p/beopinion.js
  function getBeOpinion(global2) {
    loadScript(global2, "https://widget.beop.io/sdk.js", function() {
    });
  }
  function addCanonicalLinkTag(global2) {
    var canonicalUrl = global2.context.canonicalUrl;
    if (canonicalUrl) {
      var link = global2.document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonicalUrl);
      global2.document.head.appendChild(link);
    }
  }
  function createContainer(global2, data) {
    addCanonicalLinkTag(global2);
    var container = global2.document.createElement("container");
    container.className = "BeOpinionWidget";
    if (data["content"] !== null) {
      container.setAttribute("data-content", data["content"]);
    }
    if (global2.context.tagName === "AMP-BEOPINION") {
      container.setAttribute("data-my-content", "1");
    } else if (data["my-content"] !== null) {
      container.setAttribute("data-my-content", data["my-content"]);
    }
    if (data["name"] !== null) {
      container.setAttribute("data-name", data["name"]);
    }
    setStyles(container, {
      width: "100%",
      display: "block"
    });
    return container;
  }
  function getBeOpinionAsyncInit(global2, accountId) {
    var context2 = global2.context;
    return function() {
      global2.BeOpinionSDK.init({
        account: accountId,
        onContentReceive: function onContentReceive(hasContent) {
          if (hasContent) {
            context2.renderStart();
          } else {
            context2.noContentAvailable();
          }
        },
        onHeightChange: function onHeightChange(newHeight) {
          var c = global2.document.getElementById("c");
          var boundingClientRect = c.getBoundingClientRect();
          context2.requestResize(boundingClientRect.width, newHeight).catch(function() {
            context2.requestResize(boundingClientRect.width, newHeight);
          });
        }
      });
      global2.BeOpinionSDK["watch"]();
    };
  }
  function beopinion(global2, data) {
    var container = createContainer(global2, data);
    var c = global2.document.getElementById("c");
    c.appendChild(container);
    global2.beOpinionAsyncInit = getBeOpinionAsyncInit(global2, data.account);
    getBeOpinion(global2);
  }

  // 3p/bodymovinanimation.js
  var libSourceUrl = dict({
    "canvas": "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.6/lottie_canvas.min.js",
    "html": "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.6/lottie_html.min.js",
    "svg": "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.6/lottie_svg.min.js"
  });
  var animationHandler;
  function getBodymovinAnimationSdk(global2, renderer, cb) {
    var _libSourceUrl$rendere;
    var scriptToLoad = (_libSourceUrl$rendere = libSourceUrl[renderer]) != null ? _libSourceUrl$rendere : libSourceUrl["svg"];
    loadScript(global2, scriptToLoad, function() {
      cb(global2.bodymovin);
    });
  }
  function parseMessage(event) {
    var eventMessage = parseJson(getData(event));
    var action = eventMessage["action"];
    if (action == "play") {
      animationHandler.play();
    } else if (action == "pause") {
      animationHandler.pause();
    } else if (action == "stop") {
      animationHandler.stop();
    } else if (action == "seekTo") {
      if (eventMessage["valueType"] === "time") {
        animationHandler.goToAndStop(eventMessage["value"]);
      } else {
        var frameNumber = Math.round(eventMessage["value"] * animationHandler.totalFrames);
        animationHandler.goToAndStop(frameNumber, true);
      }
    }
  }
  function bodymovinanimation(global2) {
    var dataReceived = parseJson(global2.name)["attributes"]._context;
    var dataLoop = dataReceived["loop"];
    var animatingContainer = global2.document.createElement("div");
    setStyles(animatingContainer, {
      width: "100%",
      height: "100%"
    });
    global2.document.getElementById("c").appendChild(animatingContainer);
    var shouldLoop = dataLoop != "false";
    var loop = !isNaN(dataLoop) ? dataLoop : shouldLoop;
    var renderer = dataReceived["renderer"];
    getBodymovinAnimationSdk(global2, renderer, function(bodymovin) {
      animationHandler = bodymovin.loadAnimation({
        container: animatingContainer,
        renderer,
        loop,
        autoplay: dataReceived["autoplay"],
        animationData: dataReceived["animationData"]
      });
      var message = JSON.stringify(dict({
        "action": "ready"
      }));
      global2.addEventListener("message", parseMessage, false);
      global2.parent.postMessage(message, "*");
    });
  }

  // 3p/embedly.js
  var EMBEDLY_SDK_URL = "https://cdn.embedly.com/widgets/platform.js";
  var RESIZE_EVENT_NAME = "card.resize";
  var CARD_CSS_CLASS = "embedly-card";
  var CardOptions = {
    cardVia: "card-via",
    cardTheme: "card-theme",
    cardImage: "card-image",
    cardControls: "card-controls",
    cardAlign: "card-align",
    cardRecommend: "card-recommend",
    cardEmbed: "card-embed",
    cardKey: "card-key"
  };
  function getEmbedly(global2, callback2) {
    loadScript(global2, EMBEDLY_SDK_URL, function() {
      callback2();
    });
  }
  function embedly(global2, data) {
    var card = global2.document.createElement("a");
    card.href = data.url;
    card.classList.add(CARD_CSS_CLASS);
    for (var key in CardOptions) {
      if (hasOwn(CardOptions, key) && typeof data[key] !== "undefined") {
        card.setAttribute("data-" + CardOptions[key], data[key]);
      }
    }
    var container = global2.document.getElementById("c");
    if (data["cardTheme"] === "dark") {
      setStyle(container, "background", "rgba(51, 51, 51)");
    }
    container.appendChild(card);
    getEmbedly(global2, function() {
      delete data.width;
      delete data.height;
      global2.window["embedly"]("card", card);
      global2.window["embedly"]("on", RESIZE_EVENT_NAME, function(iframe) {
        context.requestResize(iframe.width, parseInt(iframe.height, 10) + 5);
      });
    });
  }

  // 3p/facebook.js
  var FacebookEmbedType = {
    COMMENT: "comment",
    COMMENTS: "comments",
    LIKE: "like",
    PAGE: "page",
    POST: "post",
    VIDEO: "video"
  };
  function getFacebookSdk(global2, cb, locale) {
    loadScript(global2, "https://connect.facebook.net/" + locale + "/sdk.js", function() {
      cb(global2.FB);
    });
  }
  function createContainer2(global2, classNameSuffix, href) {
    var container = global2.document.createElement("div");
    container.className = "fb-" + classNameSuffix;
    container.setAttribute("data-href", href);
    return container;
  }
  function getPostContainer(global2, data) {
    if (data.alignCenter) {
      var c = global2.document.getElementById("c");
      setStyle(c, "text-align", "center");
    }
    return createContainer2(global2, "post", data.href);
  }
  function getVideoContainer(global2, data) {
    var container = createContainer2(global2, "video", data.href);
    if (!data.embedAs) {
      container.setAttribute("data-embed-as", "video");
      container.setAttribute("data-show-text", "true");
    }
    return container;
  }
  function getCommentContainer(global2, data) {
    var c = global2.document.getElementById("c");
    var container = createContainer2(global2, "comment-embed", data.href);
    container.setAttribute("data-include-parent", data.includeCommentParent || "false");
    container.setAttribute("data-width", c.offsetWidth);
    return container;
  }
  function getDefaultEmbedAs(href) {
    return href.match(/\/videos\/\d+\/?$/) ? "video" : "post";
  }
  function getPageContainer(global2, data) {
    var container = createContainer2(global2, "page", data.href);
    container.setAttribute("data-tabs", data.tabs);
    container.setAttribute("data-hide-cover", data.hideCover);
    container.setAttribute("data-show-facepile", data.showFacepile);
    container.setAttribute("data-hide-cta", data.hideCta);
    container.setAttribute("data-small-header", data.smallHeader);
    container.setAttribute("data-adapt-container-width", true);
    var c = global2.document.getElementById("c");
    container.setAttribute("data-width", c.offsetWidth);
    return container;
  }
  function getCommentsContainer(global2, data) {
    var container = createContainer2(global2, "comments", data.href);
    container.setAttribute("data-numposts", data.numposts || 10);
    container.setAttribute("data-colorscheme", data.colorscheme || "light");
    container.setAttribute("data-order-by", data.orderBy || "social");
    container.setAttribute("data-width", "100%");
    return container;
  }
  function getLikeContainer(global2, data) {
    var container = createContainer2(global2, "like", data.href);
    container.setAttribute("data-action", data.action || "like");
    container.setAttribute("data-colorscheme", data.colorscheme || "light");
    container.setAttribute("data-kd_site", data.kd_site || "false");
    container.setAttribute("data-layout", data.layout || "standard");
    container.setAttribute("data-ref", data.ref || "");
    container.setAttribute("data-share", data.share || "false");
    container.setAttribute("data-show_faces", data.show_faces || "false");
    container.setAttribute("data-size", data.size || "small");
    return container;
  }
  function getEmbedContainer(global2, data, embedAs) {
    devAssert(isEnumValue(FacebookEmbedType, embedAs));
    switch (embedAs) {
      case FacebookEmbedType.PAGE:
        return getPageContainer(global2, data);
      case FacebookEmbedType.LIKE:
        return getLikeContainer(global2, data);
      case FacebookEmbedType.COMMENTS:
        return getCommentsContainer(global2, data);
      case FacebookEmbedType.COMMENT:
        return getCommentContainer(global2, data);
      case FacebookEmbedType.VIDEO:
        return getVideoContainer(global2, data);
      default:
        return getPostContainer(global2, data);
    }
  }
  function facebook(global2, data) {
    var container = getEmbedContainer(global2, data, data.embedAs || getDefaultEmbedAs(data.href));
    global2.document.getElementById("c").appendChild(container);
    getFacebookSdk(global2, function(FB) {
      delete data.width;
      delete data.height;
      FB.Event.subscribe("xfbml.resize", function(event) {
        context.updateDimensions(parseInt(event.width, 10), parseInt(event.height, 10) + 20);
      });
      FB.init({
        xfbml: true,
        version: "v2.5"
      });
      var message = JSON.stringify(dict({
        "action": "ready"
      }));
      global2.parent.postMessage(message, "*");
    }, data.locale ? data.locale : dashToUnderline(window.navigator.language));
  }

  // 3p/github.js
  function getGistJs(global2, scriptSource, cb) {
    writeScript(global2, scriptSource, function() {
      cb();
    });
  }
  function github(global2, data) {
    userAssert(data.gistid, "The data-gistid attribute is required for <amp-gist> %s", data.element);
    var gistUrl = "https://gist.github.com/" + encodeURIComponent(data.gistid) + ".js";
    if (data.file) {
      gistUrl += "?file=" + encodeURIComponent(data.file);
    }
    getGistJs(global2, gistUrl, function() {
      delete data.width;
      delete data.height;
      var gistContainer = global2.document.querySelector("#c .gist");
      var gistLinks = global2.document.querySelectorAll(".gist-meta a");
      for (var i = 0; i < gistLinks.length; i++) {
        gistLinks[i].target = "_BLANK";
      }
      context.updateDimensions(gistContainer.offsetWidth, gistContainer.offsetHeight);
    });
  }

  // 3p/3d-gltf/animation-loop.js
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
  var AnimationLoop = /* @__PURE__ */ function() {
    function AnimationLoop2(task) {
      _classCallCheck8(this, AnimationLoop2);
      this.task_ = task;
      this.isRunning_ = false;
      this.currentRAF_ = 0;
      this.needsUpdate = true;
      this.loop_ = this.loop_.bind(this);
    }
    _createClass7(AnimationLoop2, [{
      key: "run",
      value: function run2() {
        if (this.isRunning_) {
          return false;
        }
        this.isRunning_ = true;
        this.loop_();
        return true;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.isRunning_ = false;
        if (this.currentRAF_ !== 0) {
          cancelAnimationFrame(this.currentRAF_);
          this.currentRAF_ = 0;
        }
      }
    }, {
      key: "loop_",
      value: function loop_() {
        if (!this.isRunning_) {
          return;
        }
        if (this.needsUpdate) {
          this.needsUpdate = false;
          this.task_();
        }
        this.currentRAF_ = requestAnimationFrame(this.loop_);
      }
    }]);
    return AnimationLoop2;
  }();

  // 3p/3d-gltf/viewer.js
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
  var CAMERA_DISTANCE_FACTOR = 1;
  var CAMERA_FAR_FACTOR = 50;
  var CAMERA_NEAR_FACTOR = 0.1;
  var GltfViewer = /* @__PURE__ */ function() {
    function GltfViewer2(options, handlers) {
      var _this = this;
      _classCallCheck9(this, GltfViewer2);
      this.options_ = options;
      this.handlers_ = handlers;
      this.renderer_ = new THREE.WebGLRenderer(options["renderer"]);
      this.camera_ = new THREE.PerspectiveCamera();
      this.controls_ = new THREE.OrbitControls(this.camera_, this.renderer_.domElement);
      this.scene_ = new THREE.Scene();
      this.animationLoop_ = new AnimationLoop(function() {
        return _this.step_();
      });
      this.ampPlay_ = true;
      this.ampInViewport_ = false;
      this.setSize_ = this.setupSize_();
      this.model_ = new THREE.Group();
      this.setupRenderer_();
      this.setupControls_();
      this.setupLight_();
      this.loadObject_();
      this.reconcileAnimationLoop_();
      this.actions = {
        "setSize": this.setSize_,
        "toggleAmpPlay": this.toggleAmpPlay_.bind(this),
        "toggleAmpViewport": this.toggleAmpViewport_.bind(this),
        "setModelRotation": this.setModelRotation_.bind(this)
      };
    }
    _createClass8(GltfViewer2, [{
      key: "setModelRotation_",
      value: function setModelRotation_(args) {
        var xAngle = "x" in args ? this.getModelRotationOnAxis_(args, "x") : this.model_.rotation.x;
        var yAngle = "y" in args ? this.getModelRotationOnAxis_(args, "y") : this.model_.rotation.y;
        var zAngle = "z" in args ? this.getModelRotationOnAxis_(args, "z") : this.model_.rotation.z;
        this.model_.rotation.set(xAngle, yAngle, zAngle);
        this.animationLoop_.needsUpdate = true;
      }
    }, {
      key: "getModelRotationOnAxis_",
      value: function getModelRotationOnAxis_(args, axisName) {
        var value = args[axisName], _args = args[axisName + "Min"], min = _args === void 0 ? 0 : _args, _args2 = args[axisName + "Max"], max = _args2 === void 0 ? Math.PI * 2 : _args2;
        return value * max + (1 - value) * min;
      }
    }, {
      key: "setupSize_",
      value: function setupSize_() {
        var _this2 = this;
        var oldW = null;
        var oldH = null;
        var setSize = function setSize2(box) {
          var w = box["width"];
          var h = box["height"];
          if (oldW === w && oldH === h) {
            return;
          }
          _this2.camera_.aspect = w / h;
          _this2.camera_.updateProjectionMatrix();
          _this2.renderer_.setSize(w, h);
          _this2.animationLoop_.needsUpdate = true;
          oldW = w;
          oldH = h;
        };
        setSize(this.options_["initialLayoutRect"]);
        return setSize;
      }
    }, {
      key: "setupControls_",
      value: function setupControls_() {
        var _this3 = this;
        Object.assign(this.controls_, this.options_["controls"]);
        this.controls_.addEventListener("change", function() {
          _this3.animationLoop_.needsUpdate = true;
        });
      }
    }, {
      key: "setupLight_",
      value: function setupLight_() {
        var amb = new THREE.AmbientLight(15592661, 0.5);
        var dir1 = new THREE.DirectionalLight(16777215, 0.5);
        dir1.position.set(0, 5, 3);
        var dir2 = new THREE.DirectionalLight(11455958, 0.4);
        dir2.position.set(-1, -2, 4);
        var light = new THREE.Group();
        light.add(amb, dir1, dir2);
        this.scene_.add(light);
      }
    }, {
      key: "setupRenderer_",
      value: function setupRenderer_() {
        var el = this.renderer_.domElement;
        setStyle(el, "position", "absolute");
        setStyle(el, "top", 0);
        setStyle(el, "right", 0);
        setStyle(el, "bottom", 0);
        setStyle(el, "left", 0);
        document.body.appendChild(this.renderer_.domElement);
        this.renderer_.gammaOutput = true;
        this.renderer_.gammaFactor = 2.2;
        this.renderer_.setPixelRatio(Math.min(this.options_["rendererSettings"]["maxPixelRatio"], devicePixelRatio));
        this.renderer_.setClearColor(this.options_["rendererSettings"]["clearColor"], this.options_["rendererSettings"]["clearAlpha"]);
      }
    }, {
      key: "setupCameraForObject_",
      value: function setupCameraForObject_(object) {
        var center = new THREE.Vector3();
        var size = new THREE.Vector3();
        var bbox = new THREE.Box3();
        bbox.setFromObject(object);
        bbox.getCenter(center);
        bbox.getSize(size);
        var sizeLength = size.length();
        this.camera_.far = sizeLength * CAMERA_FAR_FACTOR;
        this.camera_.near = sizeLength * CAMERA_NEAR_FACTOR;
        this.camera_.position.lerpVectors(center, bbox.max, 1 + CAMERA_DISTANCE_FACTOR);
        this.camera_.lookAt(center);
        this.camera_.updateProjectionMatrix();
        this.camera_.updateMatrixWorld();
        this.controls_.target.copy(center);
      }
    }, {
      key: "loadObject_",
      value: function loadObject_() {
        var _this4 = this;
        var loader = new THREE.GLTFLoader();
        loader.crossOrigin = true;
        loader.load(this.options_["src"], function(gltfData) {
          _this4.setupCameraForObject_(gltfData.scene);
          gltfData.scene.children.slice().forEach(function(child) {
            _this4.model_.add(child);
          });
          _this4.scene_.add(_this4.model_);
          _this4.animationLoop_.needsUpdate = true;
          _this4.handlers_.onload();
        }, this.handlers_.onprogress, this.handlers_.onerror);
      }
    }, {
      key: "step_",
      value: function step_() {
        this.controls_.update();
        this.renderer_.render(this.scene_, this.camera_);
      }
    }, {
      key: "toggleAmpPlay_",
      value: function toggleAmpPlay_(value) {
        this.ampPlay_ = value;
        this.reconcileAnimationLoop_();
      }
    }, {
      key: "toggleAmpViewport_",
      value: function toggleAmpViewport_(inVp) {
        this.ampInViewport_ = inVp;
        this.reconcileAnimationLoop_();
      }
    }, {
      key: "reconcileAnimationLoop_",
      value: function reconcileAnimationLoop_() {
        if (this.ampInViewport_ && this.ampPlay_) {
          this.animationLoop_.needsUpdate = true;
          this.animationLoop_.run();
        } else {
          this.animationLoop_.stop();
        }
      }
    }]);
    return GltfViewer2;
  }();

  // 3p/3d-gltf/index.js
  var seq = function seq2(taskA, taskB) {
    return function(cb) {
      return taskA(function() {
        return taskB(cb);
      });
    };
  };
  var parallel = function parallel2(taskA, taskB) {
    return function(cb) {
      var n4 = 0;
      var finish = function finish2() {
        n4++;
        if (n4 === 2) {
          cb();
        }
      };
      taskA(finish);
      taskB(finish);
    };
  };
  var loadThree = function loadThree2(global2, cb) {
    var loadScriptCb = function loadScriptCb2(url) {
      return function(cb2) {
        return loadScript(global2, url, cb2);
      };
    };
    var loadThreeExample = function loadThreeExample2(examplePath) {
      return loadScriptCb("https://cdn.jsdelivr.net/npm/three@0.91/examples/js/" + examplePath);
    };
    seq(loadScriptCb("https://cdnjs.cloudflare.com/ajax/libs/three.js/91/three.js"), parallel(loadThreeExample("loaders/GLTFLoader.js"), loadThreeExample("controls/OrbitControls.js")))(cb);
  };
  function gltfViewer(global2) {
    var dataReceived = parseJson(global2.name)["attributes"]._context;
    loadThree(global2, function() {
      var viewer = new GltfViewer(dataReceived, {
        onload: function onload() {
          nonSensitiveDataPostMessage("loaded");
        },
        onprogress: function onprogress(e) {
          if (!e.lengthComputable) {
            return;
          }
          nonSensitiveDataPostMessage("progress", dict({
            "total": e.total,
            "loaded": e.loaded
          }));
        },
        onerror: function onerror(err) {
          user().error("3DGLTF", err);
          nonSensitiveDataPostMessage("error", dict({
            "error": (err || "").toString()
          }));
        }
      });
      listenParent(global2, "action", function(msg) {
        viewer.actions[msg["action"]](msg["args"]);
      });
      nonSensitiveDataPostMessage("ready");
    });
  }

  // 3p/mathml.js
  function getMathmlJs(global2, scriptSource, cb) {
    writeScript(global2, scriptSource, function() {
      cb(global2.MathJax);
    });
  }
  function mathml(global2, data) {
    userAssert(data.formula, "The formula attribute is required for <amp-mathml> %s", data.element);
    getMathmlJs(global2, "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML", function(mathjax) {
      delete data.width;
      delete data.height;
      var div = document.createElement("div");
      div.setAttribute("id", "mathmlformula");
      div.textContent = data.formula;
      setStyle(div, "visibility", "hidden");
      global2.document.body.appendChild(div);
      mathjax.Hub.Config({
        showMathMenu: false,
        menuSettings: {
          inTabOrder: false
        }
      });
      mathjax.Hub.Queue(function() {
        var rendered = document.getElementById("MathJax-Element-1-Frame");
        var display = document.getElementsByClassName("MJXc-display");
        if (!display[0]) {
          var span = document.createElement("span");
          span.setAttribute("class", "mjx-chtml MJXc-display");
          span.appendChild(rendered);
          div.appendChild(span);
          display = document.getElementsByClassName("MJXc-display");
        }
        display[0].setAttribute("style", "margin-top:0;margin-bottom:0");
        context.requestResize(rendered.offsetWidth, rendered.offsetHeight);
        setStyle(div, "visibility", "visible");
      });
    });
  }

  // 3p/reddit.js
  function getContainerScript(global2, scriptSource) {
    loadScript(global2, scriptSource, function() {
    });
  }
  function getPostContainer2(global2) {
    var blockquote = global2.document.createElement("blockquote");
    blockquote.classList.add("reddit-card");
    blockquote.setAttribute("data-card-created", Math.floor(Date.now() / 1e3));
    return blockquote;
  }
  function getCommentContainer2(global2, data) {
    var div = global2.document.createElement("div");
    div.classList.add("reddit-embed");
    div.setAttribute("data-embed-media", "www.redditmedia.com");
    div.setAttribute("data-embed-uuid", data.uuid);
    div.setAttribute("data-embed-created", data.embedcreated);
    div.setAttribute("data-embed-parent", data.embedparent || "false");
    div.setAttribute("data-embed-live", data.embedlive || "false");
    return div;
  }
  function reddit(global2, data) {
    var embedtype = data.embedtype || "post";
    var container;
    var scriptSource = "";
    if (embedtype === "post") {
      container = getPostContainer2(global2);
      scriptSource = "https://embed.redditmedia.com/widgets/platform.js";
    } else if (embedtype === "comment") {
      container = getCommentContainer2(global2, data);
      scriptSource = "https://www.redditstatic.com/comment-embed.js";
    }
    var link = global2.document.createElement("a");
    link.href = data.src;
    container.appendChild(link);
    global2.document.getElementById("c").appendChild(container);
    getContainerScript(global2, scriptSource);
    global2.addEventListener("resize", function(event) {
      global2.context.updateDimensions(event.target.outerWidth, event.target.outerHeight);
    });
  }

  // 3p/twitter.js
  function getTwttr(global2, cb) {
    loadScript(global2, "https://platform.twitter.com/widgets.js", function() {
      cb(global2.twttr);
    });
  }
  function twitter(global2, data) {
    var tweet = global2.document.createElement("div");
    tweet.id = "tweet";
    setStyles(tweet, {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    });
    global2.document.getElementById("c").appendChild(tweet);
    getTwttr(global2, function(twttr) {
      delete data.width;
      delete data.height;
      if (data.tweetid) {
        twttr.widgets.createTweet(cleanupTweetId_(data.tweetid), tweet, data).then(function(el) {
          return tweetCreated(twttr, el);
        });
      } else if (data.momentid) {
        twttr.widgets.createMoment(data.momentid, tweet, data).then(function(el) {
          return tweetCreated(twttr, el);
        });
      } else if (data.timelineSourceType) {
        var timelineData = Object.keys(data).filter(function(prop) {
          return prop.startsWith("timeline");
        }).reduce(function(newData, prop) {
          newData[stripPrefixCamelCase(prop, "timeline")] = data[prop];
          return newData;
        }, {});
        twttr.widgets.createTimeline(timelineData, tweet, data).then(function(el) {
          return tweetCreated(twttr, el);
        });
      }
    });
    function tweetCreated(twttr, el) {
      if (!el) {
        global2.context.noContentAvailable();
        return;
      }
      resize(el);
      twttr.events.bind("resize", function(event) {
        if (el === event.target) {
          resize(el);
        }
      });
    }
    function resize(container) {
      var height = container.offsetHeight;
      if (height == 0) {
        return;
      }
      context.updateDimensions(container.offsetWidth, height + 20);
    }
    function stripPrefixCamelCase(input, prefix2) {
      var stripped = input.replace(new RegExp("^" + prefix2), "");
      return stripped.charAt(0).toLowerCase() + stripped.substr(1);
    }
  }
  function cleanupTweetId_(tweetid) {
    tweetid = tweetid.toLowerCase();
    var match = tweetid.match(/https:\/\/twitter.com\/[^\/]+\/status\/(\d+)/);
    if (match) {
      return match[1];
    }
    match = tweetid.match(/^(\d+)\?ref.*/);
    if (match) {
      return match[1];
    }
    return tweetid;
  }

  // 3p/viqeoplayer.js
  function viqeoPlayerInitLoaded(global2, VIQEO) {
    var _global$context = global2.context, canonicalUrl = _global$context.canonicalUrl, pageViewId = _global$context.pageViewId, sourceUrl = _global$context.sourceUrl;
    var data = getData(global2.context);
    var viqeoPlayerInstance;
    VIQEO["setConfig"]({
      url: sourceUrl,
      amp: {
        pageViewId,
        canonicalUrl
      }
    });
    VIQEO["subscribeTracking"](function(params) {
      viqeoPlayerInstance = params["player"];
    }, "Player:added");
    VIQEO["subscribeTracking"](function() {
      sendMessage("updatePlayedRanges", viqeoPlayerInstance["getPlayedRanges"]());
      sendMessage("updateCurrentTime", viqeoPlayerInstance["getCurrentTime"]());
    }, "Player:currentTimeUpdated");
    VIQEO["subscribeTracking"](function() {
      sendMessage("updateDuration", viqeoPlayerInstance["getDuration"]());
    }, "Player:durationUpdated");
    VIQEO["createPlayer"]({
      videoId: data["videoid"],
      profileId: data["profileid"],
      parent: global2.document.getElementById("c")
    });
    global2.addEventListener("message", parseMessage2, false);
    subscribe("ready", "ready");
    subscribe("paused", "pause");
    subscribe("started", "play");
    subscribe("played", "play");
    subscribe("replayed", "play");
    subscribe("ended", "end");
    subscribe("advStarted", "startAdvert");
    subscribe("advEnded", "endAdvert");
    subscribe("muted", "mute");
    subscribe("unmuted", "unmute");
    function subscribe(playerEventName, targetEventName) {
      VIQEO["subscribeTracking"](function() {
        sendMessage(targetEventName);
      }, "Player:" + playerEventName);
    }
    var sendMessage = function sendMessage2(eventName, value) {
      if (value === void 0) {
        value = null;
      }
      var parent2 = global2.parent;
      var message = {
        source: "ViqeoPlayer",
        action: eventName,
        value
      };
      parent2.postMessage(message, "*");
    };
    function parseMessage2(event) {
      var eventData = getData(event);
      var action = eventData["action"];
      if (!action) {
        return;
      }
      if (action === "play") {
        viqeoPlayerInstance.play();
      } else if (action === "pause") {
        viqeoPlayerInstance.pause();
      } else if (action === "stop") {
        viqeoPlayerInstance.stop();
      } else if (action === "mute") {
        viqeoPlayerInstance.setVolume(0);
      } else if (action === "unmute") {
        viqeoPlayerInstance.setVolume(1);
      }
    }
  }
  function viqeoplayer(global2) {
    var data = getData(global2.context);
    var kindIsProd = data["data-kind"] !== "stage";
    var scriptPlayerInit = data["script-url"];
    scriptPlayerInit = scriptPlayerInit && tryDecodeUriComponent(scriptPlayerInit) || (kindIsProd ? "https://cdn.viqeo.tv/js/vq_starter.js" : "https://static.viqeo.tv/js/vq_player_init.js?branch=dev1");
    global2["onViqeoLoad"] = function(VIQEO) {
      return viqeoPlayerInitLoaded(global2, VIQEO);
    };
    loadScript(global2, scriptPlayerInit);
  }

  // 3p/yotpo.js
  function getContainerScript2(global2, scriptSource, cb) {
    loadScript(global2, scriptSource, function() {
      global2.Yotpo = global2.Yotpo || {};
      delete global2.Yotpo.widgets["testimonials"];
      var yotpoWidget = typeof global2.yotpo === "undefined" ? void 0 : global2.yotpo;
      yotpoWidget.on("CssReady", function() {
        cb(yotpoWidget, "cssLoaded");
      });
      yotpoWidget.on("BatchReady", function() {
        cb(yotpoWidget, "batchLoaded");
      });
    });
  }
  function getBottomLineContainer(global2, data) {
    var container = global2.document.createElement("div");
    container.className = "preview-only-full-height";
    var childDiv = global2.document.createElement("div");
    childDiv.className = "preview-only-flex-center preview-only-full-height";
    container.appendChild(childDiv);
    var bottomLine = global2.document.createElement("div");
    bottomLine.className = "yotpo bottomLine";
    bottomLine.setAttribute("data-product-id", data.productId);
    childDiv.appendChild(bottomLine);
    return container;
  }
  function getMainWidgetContainer(global2, data) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-main-widget";
    container.setAttribute("data-product-id", data.productId);
    container.setAttribute("data-name", data.name);
    container.setAttribute("data-url", data.url);
    container.setAttribute("data-image-url", data.imageUrl);
    container.setAttribute("data-description", data.description);
    container.setAttribute("data-yotpo-element-id", data.yotpoElementId);
    return container;
  }
  function getReviewsCarouselContainer(global2, data) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-reviews-carousel yotpo-size-7";
    container.setAttribute("data-background-color", data.backgroudColor);
    container.setAttribute("data-mode", data.mode);
    container.setAttribute("data-review-ids", data.reviewIds);
    container.setAttribute("data-show-bottomline", data.showBottomLine);
    container.setAttribute("data-autoplay-enabled", data.autoplayEnabled);
    container.setAttribute("data-autoplay-speed", data.autoplaySpeed);
    container.setAttribute("data-show-navigation", data.showNavigation);
    container.setAttribute("data-yotpo-element-id", data.yotpoElementId);
    container.setAttribute("style", "max-width: 1250px;");
    return container;
  }
  function getUgcGalleryContainer(global2, data) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-pictures-gallery";
    container.setAttribute("data-layout", data.layout);
    container.setAttribute("data-layout-scroll", data.layoutScroll);
    container.setAttribute("data-spacing", data.spacing);
    container.setAttribute("data-source", data.source);
    container.setAttribute("data-title", data.title);
    container.setAttribute("data-hover-color", data.hoverColor);
    container.setAttribute("data-hover-opacity", data.hoverOpacity);
    container.setAttribute("data-hover-icon", data.hoverIcon);
    container.setAttribute("data-cta-text", data.ctaText);
    container.setAttribute("data-cta-color", data.ctaColor);
    return container;
  }
  function getBadgetsContainer(global2) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-badge badge-init";
    container.setAttribute("id", "y-badges");
    return container;
  }
  function getReviewsTabContainer(global2) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-modal";
    return container;
  }
  function getProductGalleryContainer(global2, data) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-pictures-gallery yotpo-product-gallery yotpo-size-6";
    container.setAttribute("data-product-id", data.productId);
    container.setAttribute("data-demo", data.demo);
    container.setAttribute("data-layout-rows", data.layoutRows);
    container.setAttribute("data-layout-scroll", data.layoutScroll);
    container.setAttribute("data-spacing", data.spacing);
    container.setAttribute("data-source", data.source);
    container.setAttribute("data-title", data.title);
    container.setAttribute("data-hover-color", data.hoverColor);
    container.setAttribute("data-hover-opacity", data.hoverOpacity);
    container.setAttribute("data-hover-icon", data.hoverIcon);
    container.setAttribute("data-upload-button", data.uploadButton);
    container.setAttribute("data-preview", data.preview);
    container.setAttribute("data-yotpo-element-id", data.yotpoElementId);
    return container;
  }
  function getVisualUgcGalleryContainer(global2) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-preview-pictures-gallery";
    var childDiv = global2.document.createElement("div");
    childDiv.className = "yotpo yotpo-pictures-gallery";
    container.appendChild(childDiv);
    return container;
  }
  function getEmbeddedWidgetContainer(global2, data) {
    var container = global2.document.createElement("div");
    container.className = "preview-only-table";
    var cellCentered = global2.document.createElement("div");
    cellCentered.className = "preview-only-table-cell-centered";
    container.appendChild(cellCentered);
    var embeddedWidget = global2.document.createElement("div");
    embeddedWidget.className = "yotpo embedded-widget";
    cellCentered.appendChild(embeddedWidget);
    embeddedWidget.setAttribute("data-product-id", data.productId);
    embeddedWidget.setAttribute("data-demo", data.demo);
    embeddedWidget.setAttribute("data-layout", data.layout);
    embeddedWidget.setAttribute("data-width", data.width);
    embeddedWidget.setAttribute("data-reviews", data.reviews);
    embeddedWidget.setAttribute("data-header-text", data.headerText);
    embeddedWidget.setAttribute("data-header-background-color", data.headerBackgroundColor);
    embeddedWidget.setAttribute("data-body-background-color", data.bodyBackgroundColor);
    embeddedWidget.setAttribute("data-font-size", data.fontSize);
    embeddedWidget.setAttribute("data-font-color", data.fontColor);
    embeddedWidget.setAttribute("data-yotpo-element-id", data.yotpoElementId);
    return container;
  }
  function getPhotosCarouselContainer(global2, data) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-preview-slider";
    var photosCarousel = global2.document.createElement("div");
    photosCarousel.className = "yotpo yotpo-slider";
    container.appendChild(photosCarousel);
    photosCarousel.setAttribute("data-product-id", data.productId);
    photosCarousel.setAttribute("data-demo", data.demo);
    return container;
  }
  function getPromotedProductsContainer(global2, data) {
    var container = global2.document.createElement("div");
    container.className = "yotpo yotpo-main-widget yotpo-promoted-product yotpo-medium promoted-products-box";
    container.setAttribute("id", "widget-div-id");
    container.setAttribute("data-demo", data.demo);
    container.setAttribute("data-product-id", data.productId);
    return container;
  }
  function yotpo(global2, data) {
    var widgetType = data.widgetType;
    var container;
    if (widgetType == "BottomLine") {
      container = getBottomLineContainer(global2, data);
    } else if (widgetType == "ReviewsCarousel") {
      container = getReviewsCarouselContainer(global2, data);
    } else if (widgetType == "PicturesGallery") {
      container = getUgcGalleryContainer(global2, data);
    } else if (widgetType == "Badge") {
      container = getBadgetsContainer(global2);
    } else if (widgetType == "ReviewsTab") {
      container = getReviewsTabContainer(global2);
    } else if (widgetType == "ProductGallery") {
      container = getProductGalleryContainer(global2, data);
    } else if (widgetType == "VisualUgcGallery") {
      container = getVisualUgcGalleryContainer(global2);
    } else if (widgetType == "EmbeddedWidget") {
      container = getEmbeddedWidgetContainer(global2, data);
    } else if (widgetType == "PhotosCarousel") {
      container = getPhotosCarouselContainer(global2, data);
    } else if (widgetType == "PromotedProducts") {
      container = getPromotedProductsContainer(global2, data);
    } else {
      container = getMainWidgetContainer(global2, data);
    }
    global2.document.getElementById("c").appendChild(container);
    var cssLoaded = false;
    var batchLoaded = false;
    var scriptSource = "https://staticw2.yotpo.com/" + data.appKey + "/widget.js";
    getContainerScript2(global2, scriptSource, function(yotpoWidget, eventType) {
      if (eventType === "cssLoaded") {
        cssLoaded = true;
      }
      if (eventType === "batchLoaded") {
        batchLoaded = true;
      }
      if (batchLoaded && cssLoaded) {
        setTimeout(function() {
          if (yotpoWidget.widgets[0]) {
            context.updateDimensions(yotpoWidget.widgets[0].element.offsetWidth, yotpoWidget.widgets[0].element.offsetHeight);
          }
        }, 100);
      }
    });
  }

  // ads/vendors/_ping_.js
  function _ping_(global2, data) {
    global2.networkIntegrationDataParamForTesting = data;
    validateData(data, ["url"], ["valid", "adHeight", "adWidth", "enableIo"]);
    userAssert(!data["error"], "Fake user error!");
    global2.document.getElementById("c").textContent = data.ping;
    global2.ping = Object.create(null);
    if (data.ad_container) {
      devAssert(global2.context.container == data.ad_container, "wrong container");
    }
    if (data.valid == "false") {
      global2.context.noContentAvailable();
    }
    if (data.valid && data.valid == "true") {
      var img = document.createElement("img");
      if (data.url) {
        img.setAttribute("src", data.url);
        img.setAttribute("width", data.width);
        img.setAttribute("height", data.height);
      }
      var width, height;
      if (data.adHeight) {
        img.setAttribute("height", data.adHeight);
        height = Number(data.adHeight);
      }
      if (data.adWidth) {
        img.setAttribute("width", data.adWidth);
        width = Number(data.adWidth);
      }
      document.body.appendChild(img);
      if (width || height) {
        global2.context.renderStart({
          width,
          height
        });
      } else {
        global2.context.renderStart();
      }
      if (data.enableIo) {
        global2.context.observeIntersection(function(changes) {
          changes.forEach(function(c) {
            dev().info("AMP-AD", "Intersection: (WxH)" + (c.intersectionRect.width + "x" + c.intersectionRect.height));
          });
          global2.ping.lastIO = changes[changes.length - 1];
        });
      }
      global2.context.getHtml("a", ["href"], function(html2) {
        dev().info("GET-HTML", html2);
      });
      global2.context.getConsentState(function(consentState2) {
        dev().info("GET-CONSENT-STATE", consentState2);
      });
      if (global2.context.consentSharedData) {
        var TAG4 = "consentSharedData";
        dev().info(TAG4, global2.context.consentSharedData);
      }
      if (global2.context.initialConsentValue) {
        var _TAG = "consentStringValue";
        dev().info(_TAG, global2.context.initialConsentValue);
      }
      if (global2.context.initialConsentMetadata) {
        var _TAG2 = "consentMetadata";
        dev().info(_TAG2, global2.context.initialConsentMetadata);
      }
    } else {
      global2.setTimeout(function() {
        global2.context.noContentAvailable();
      }, 1e3);
    }
  }

  // ads/vendors/1wo.js
  function _1wo(global2, data) {
    validateData(data, ["src", "owoType", "owoCode", "owoMode"]);
    var src = data.src;
    createContainer3(global2, data);
    loadScript(global2, src);
  }
  function createContainer3(global2, data) {
    var d = global2.document.createElement("div");
    d.setAttribute("data-owo-type", data["owoType"]);
    d.setAttribute("data-owo-code", data["owoCode"]);
    d.setAttribute("data-owo-mode", data["owoMode"]);
    global2.document.getElementById("c").appendChild(d);
  }

  // ads/vendors/24smi.js
  var jsnPrefix = "https://jsn.24smi.net/";
  var smiJs = jsnPrefix + "smi.js";
  function _24smi(global2, data) {
    validateData(data, [["blockid", "src"]]);
    var src = data.src;
    var blockId = data["blockid"];
    if (!blockId) {
      validateSrcPrefix(jsnPrefix, src);
      blockId = getBlockId(src);
    }
    var element = createContainer4(global2);
    (global2.smiq = global2.smiq || []).push({
      element,
      blockId
    });
    loadScript(global2, smiJs);
  }
  function createContainer4(global2) {
    var d = global2.document.createElement("div");
    global2.document.getElementById("c").appendChild(d);
    return d;
  }
  function getBlockId(src) {
    var parts = src.split("/");
    return parts[parts.length - 1].split(".")[0];
  }

  // ads/vendors/a8.js
  function a8(global2, data) {
    validateData(data, ["aid"], ["wid", "eno", "mid", "mat", "type"]);
    global2.a8Param = data;
    writeScript(global2, "https://statics.a8.net/amp/ad.js");
  }

  // ads/vendors/a9.js
  var mandatoryParams = [];
  var optionalParams = ["ad_mode", "placement", "tracking_id", "ad_type", "marketplace", "region", "title", "default_search_phrase", "default_category", "linkid", "search_bar", "search_bar_position", "rows", "design", "asins", "debug", "aax_src_id", "header_style", "link_style", "link_hover_style", "text_style", "random_permute", "render_full_page", "axf_exp_name", "axf_treatment", "disable_borders", "attributes", "carousel", "feedback_enable", "max_ads_in_a_row", "list_price", "prime", "prime_position", "widget_padding", "strike_text_style", "brand_text_link", "brand_position", "large_rating", "rating_position", "max_title_height", "enable_swipe_on_mobile", "overrides", "ead", "force_win_bid", "fallback_mode", "url", "regionurl", "divid", "recomtype", "adinstanceid"];
  var prefix = "amzn_assoc_";
  function a9(global2, data) {
    var i;
    for (i = 0; i < 46; i++) {
      optionalParams[i] = prefix + optionalParams[i];
    }
    validateData(data, mandatoryParams, optionalParams);
    var publisherUrl = global2.context.canonicalUrl || global2.context.sourceUrl;
    if (data.amzn_assoc_ad_mode) {
      if (data.amzn_assoc_ad_mode === "auto") {
        if (data.adinstanceid && data.adinstanceid !== "") {
          loadRecTag(global2, data, publisherUrl);
        } else {
          loadSearTag(global2, data, publisherUrl);
        }
      } else if (data.amzn_assoc_ad_mode === "search" || data.amzn_assoc_ad_mode === "manual") {
        loadSearTag(global2, data, publisherUrl);
      }
    } else {
      loadSearTag(global2, data, publisherUrl);
    }
  }
  function getURL(data) {
    var url = "https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US";
    if (data.regionurl && data.regionurl !== "") {
      url = data.regionurl;
    }
    return url;
  }
  function loadRecTag(global2, data, publisherUrl) {
    var url = getURL(data);
    url += "&adInstanceId=" + data["adinstanceid"];
    global2["amzn_assoc_URL"] = publisherUrl;
    if (data["recomtype"] === "sync") {
      writeScript(global2, url);
    } else if (data["recomtype"] === "async") {
      var d = global2.document.createElement("div");
      d.setAttribute("id", data["divid"]);
      global2.document.getElementById("c").appendChild(d);
      loadScript(global2, url);
    }
  }
  function loadSearTag(global2, data, publisherUrl) {
    function setMacro(type) {
      if (!type) {
        return;
      }
      if (hasOwn(data, type)) {
        global2[type] = data[type];
      }
    }
    function setParams() {
      var url = getURL(data);
      var i;
      for (i = 0; i < 44; i++) {
        setMacro(optionalParams[i]);
      }
      if (data.amzn_assoc_fallback_mode) {
        var str = data.amzn_assoc_fallback_mode.split(",");
        var types = str[0].split(":");
        var typev = str[1].split(":");
        types = parseJson(types[1]);
        typev = parseJson(typev[1]);
        global2["amzn_assoc_fallback_mode"] = {
          "type": types,
          "value": typev
        };
      }
      if (data.amzn_assoc_url) {
        global2["amzn_assoc_URL"] = data["amzn_assoc_url"];
      } else {
        global2["amzn_assoc_URL"] = publisherUrl;
      }
      writeScript(global2, url);
    }
    function init2() {
      setParams();
    }
    init2();
  }

  // ads/vendors/accesstrade.js
  function accesstrade(global2, data) {
    validateData(data, ["atops", "atrotid"]);
    global2.atParams = data;
    writeScript(global2, "https://h.accesstrade.net/js/amp/amp.js");
  }

  // ads/vendors/adagio.js
  function adagio(global2, data) {
    validateData(data, ["sid", "loc"]);
    var $neodata = global2;
    $neodata._adagio = {};
    $neodata._adagio.amp = data;
    loadScript($neodata, "https://js-ssl.neodatagroup.com/adagio_amp.js");
  }

  // ads/vendors/adblade.js
  var adbladeFields = ["width", "height", "cid"];
  var adbladeHostname = "web.adblade.com";
  var industrybrainsHostname = "web.industrybrains.com";
  function addAdiantUnit(hostname, global2, data) {
    validateData(data, adbladeFields, []);
    var ins = global2.document.createElement("ins");
    ins.setAttribute("class", "adbladeads");
    ins.setAttribute("data-width", data.width);
    ins.setAttribute("data-height", data.height);
    ins.setAttribute("data-cid", data.cid);
    ins.setAttribute("data-host", hostname);
    ins.setAttribute("data-protocol", "https");
    ins.setAttribute("data-tag-type", 1);
    global2.document.getElementById("c").appendChild(ins);
    ins.parentNode.addEventListener("eventAdbladeRenderStart", global2.context.renderStart());
    writeScript(global2, "https://" + hostname + "/js/ads/async/show.js");
  }
  function adblade(global2, data) {
    addAdiantUnit(adbladeHostname, global2, data);
  }
  function industrybrains(global2, data) {
    addAdiantUnit(industrybrainsHostname, global2, data);
  }

  // ads/vendors/adbutler.js
  function adbutler(global2, data) {
    validateData(data, ["account", "zone", "width", "height"], ["keyword", "place"]);
    data["place"] = data["place"] || 0;
    var placeholderID = "placement_" + data["zone"] + "_" + data["place"];
    var d = global2.document.createElement("div");
    d.setAttribute("id", placeholderID);
    global2.document.getElementById("c").appendChild(d);
    global2.AdButler = global2.AdButler || {};
    global2.AdButler.ads = global2.AdButler.ads || [];
    global2.AdButler.ads.push({
      handler: function handler(opt) {
        global2.AdButler.register(data["account"], data["zone"], [data["width"], data["height"]], placeholderID, opt);
      },
      opt: {
        place: data["place"],
        pageKey: global2.context.pageViewId,
        keywords: data["keyword"],
        domain: "servedbyadbutler.com",
        click: "CLICK_MACRO_PLACEHOLDER"
      }
    });
    loadScript(global2, "https://servedbyadbutler.com/app.js");
  }

  // ads/vendors/adform.js
  var hosts = {
    track: "https://track.adform.net",
    adx: "https://adx.adform.net",
    a2: "https://a2.adform.net",
    adx2: "https://adx2.adform.net",
    asia: "https://asia.adform.net",
    adx3: "https://adx3.adform.net"
  };
  function adform(global2, data) {
    validateData(data, [["src", "bn", "mid"]]);
    global2.Adform = {
      ampData: data
    };
    var bn = data.bn, mid = data.mid, src = data.src;
    var url;
    if (src) {
      validateSrcPrefix(Object.keys(hosts).map(function(type) {
        return hosts[type];
      }), src);
      url = src;
    } else if (bn) {
      url = hosts.track + "/adfscript/?bn=" + encodeURIComponent(bn) + ";msrc=1";
    } else if (mid) {
      url = hosts.adx + "/adx/?mid=" + encodeURIComponent(mid);
    }
    writeScript(global2, url);
  }

  // ads/vendors/yandex.js
  var n = "yandexContextAsyncCallbacks";
  var renderTo = "yandex_rtb";
  function yandex(global2, data) {
    validateData(data, ["blockId"], ["data", "onRender", "onError"]);
    addToQueue(global2, data);
    loadScript(global2, "https://an.yandex.ru/system/context_amp.js");
  }
  function addToQueue(global2, data) {
    global2[n] = global2[n] || [];
    global2[n].push(function() {
      createContainer5(global2, renderTo);
      global2.Ya.Context.AdvManager.render({
        blockId: data.blockId,
        statId: data.statId,
        renderTo,
        data: data.data,
        async: true,
        onRender: function onRender() {
          if (typeof data.onRender === "function") {
            data.onRender();
          }
          global2.context.renderStart();
        }
      }, function() {
        if (typeof data.onError === "function") {
          data.onError();
        } else {
          global2.context.noContentAvailable();
        }
      });
    });
  }
  function createContainer5(global2, id) {
    var d = global2.document.createElement("div");
    d.id = id;
    global2.document.getElementById("c").appendChild(d);
  }

  // ads/vendors/adfox.js
  function adfox(global2, data) {
    validateData(data, ["adfoxParams", "ownerId"]);
    loadScript(global2, "https://yastatic.net/pcode/adfox/loader.js", function() {
      return initAdFox(global2, data);
    });
  }
  function initAdFox(global2, data) {
    var params = JSON.parse(data.adfoxParams);
    createContainer6(global2, "adfox_container");
    global2.Ya.adfoxCode.create({
      ownerId: data.ownerId,
      containerId: "adfox_container",
      params,
      onLoad: function onLoad(data2, onRender, onError) {
        checkLoading(global2, data2, onRender, onError);
      },
      onRender: function onRender() {
        return global2.context.renderStart();
      },
      onError: function onError() {
        return global2.context.noContentAvailable();
      },
      onStub: function onStub() {
        return global2.context.noContentAvailable();
      }
    });
  }
  function checkLoading(global2, data, onRender, onError) {
    if (data.bundleName === "banner.direct") {
      var dblParams = {
        blockId: data.bundleParams.blockId,
        data: data.bundleParams.data,
        onRender,
        onError
      };
      yandex(global2, dblParams);
      return false;
    }
    return true;
  }
  function createContainer6(global2, id) {
    var container = global2.document.createElement("div");
    container.setAttribute("id", id);
    global2.document.getElementById("c").appendChild(container);
  }

  // ads/vendors/adgeneration.js
  function adgeneration(global2, data) {
    validateData(data, ["id"], ["targetid", "displayid", "adtype", "option"]);
    var option = data.option ? encodeQueryValue(data.option) : null;
    var url = "https://i.socdm.com/sdk/js/adg-script-loader.js?id=" + encodeURIComponent(data.id) + "&width=" + encodeURIComponent(data.width) + "&height=" + encodeURIComponent(data.height) + "&async=true&adType=" + validateAdType(data.adType) + "&displayid=" + (data.displayid ? encodeURIComponent(data.displayid) : "1") + "&tagver=2.0.0" + (data.targetid ? "&targetID=" + encodeURIComponent(data.targetid) : "") + (option ? "&" + option : "");
    writeScript(global2, url);
  }
  function encodeQueryValue(str) {
    return str.split("&").map(function(v) {
      var key = v.split("=")[0], val = v.split("=")[1];
      return encodeURIComponent(key) + "=" + encodeURIComponent(val);
    }).join("&");
  }
  function validateAdType(str) {
    if (str != null) {
      var upperStr = encodeURIComponent(str.toUpperCase());
      if (upperStr === "RECTANGLE") {
        return "RECT";
      } else {
        return upperStr;
      }
    }
    return "FREE";
  }

  // ads/vendors/adglare.js
  function adglare(global2, data) {
    validateData(data, ["host", "zid"], ["keywords"]);
    var adglareSpan = global2.document.createElement("span");
    adglareSpan.id = "zone" + data.zid;
    global2.document.getElementById("c").appendChild(adglareSpan);
    var url = "https://" + data.host + ".engine.adglare.net/?" + data.zid + "&ampad&rnd=" + Date.now() + Math.random();
    if (data.keywords) {
      url = url + "&keywords=" + data.keywords;
    }
    writeScript(global2, url);
  }

  // ads/vendors/adhese.js
  function adhese(global2, data) {
    validateData(data, ["location", "format", "account", "requestType"]);
    var targetParam = "";
    var gctx = global2.context;
    if (data["targeting"]) {
      var targetList = data["targeting"];
      for (var category in targetList) {
        targetParam += encodeURIComponent(category);
        var targets = targetList[category];
        for (var x = 0; x < targets.length; x++) {
          targetParam += encodeURIComponent(targets[x]) + (targets.length - 1 > x ? ";" : "");
        }
        targetParam += "/";
      }
    }
    if (gctx.consentSharedData) {
      if (gctx.consentSharedData.consentStateValue && gctx.consentSharedData.consentStateValue == "accepted") {
        targetParam += "tlall/";
      }
      if (gctx.consentSharedData.consentString && gctx.consentSharedData.consentString !== "") {
        targetParam += "xt" + gctx.consentSharedData.consentString + "/";
      }
    }
    targetParam += "?t=" + Date.now();
    writeScript(window, "https://ads-" + encodeURIComponent(data["account"]) + ".adhese.com/" + encodeURIComponent(data["requestType"]) + "/sl" + encodeURIComponent(data["location"]) + encodeURIComponent(data["position"]) + "-" + encodeURIComponent(data["format"]) + "/" + targetParam);
    var co = global2.document.querySelector("#c");
    co.width = data["width"];
    co.height = data["height"];
    co.addEventListener("adhLoaded", getAdInfo.bind(null, global2), false);
  }
  function getAdInfo(global2, e) {
    if (e.detail.isReady && e.detail.width == e.target.width && e.detail.height == e.target.height) {
      global2.context.renderStart();
    } else if (e.detail.isReady && (e.detail.width != e.target.width || e.detail.height != e.target.height)) {
      global2.context.renderStart({
        width: e.detail.width,
        height: e.detail.height
      });
    } else {
      global2.context.noContentAvailable();
    }
  }

  // ads/vendors/adincube.js
  function adincube(global2, data) {
    validateData(data, ["adType", "siteKey"], ["params"]);
    var url = global2.context.location.protocol;
    url += "//tag.adincube.com/tag/1.0/next?";
    url += "ad_type=" + encodeURIComponent(String(data["adType"]).toUpperCase());
    url += "&ad_subtype=" + encodeURIComponent(data["width"]);
    url += "x" + encodeURIComponent(data["height"]);
    url += "&site_key=" + encodeURIComponent(data["siteKey"]);
    url += "&r=" + encodeURIComponent(global2.context.referrer);
    url += "&h=" + encodeURIComponent(global2.context.location.href);
    url += "&c=amp";
    url += "&t=" + Date.now();
    if (data["params"]) {
      url += parseParams(data["params"]);
    }
    loadScript(global2, url);
  }
  function parseParams(data) {
    try {
      var params = JSON.parse(data);
      var queryParams = "";
      for (var p in params) {
        if (hasOwn(params, p)) {
          queryParams += "&" + p + "=" + encodeURIComponent(params[p]);
        }
      }
      return queryParams;
    } catch (e) {
      return "";
    }
  }

  // ads/vendors/adition.js
  function adition(global2, data) {
    validateData(data, ["version"]);
    global2.data = data;
    writeScript(global2, "https://imagesrv.adition.com/js/amp/v" + encodeURIComponent(data["version"]) + ".js");
  }

  // ads/vendors/adman.js
  function adman(global2, data) {
    validateData(data, ["ws", "host", "s"], []);
    var script = global2.document.createElement("script");
    script.setAttribute("data-ws", data.ws);
    script.setAttribute("data-h", data.host);
    script.setAttribute("data-s", data.s);
    script.setAttribute("data-tech", "amp");
    script.src = "https://static.adman.gr/adman.js";
    global2.document.body.appendChild(script);
  }

  // ads/vendors/admanmedia.js
  function admanmedia(global2, data) {
    validateData(data, ["id"]);
    var encodedId = encodeURIComponent(data.id);
    loadScript(global2, "https://pub.admanmedia.com/go?id=" + encodedId, function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/admixer.js
  function admixer(global2, data) {
    validateData(data, ["zone"], ["sizes"]);
    var payload = {
      imps: [],
      referrer: window.context.referrer
    };
    var imp = {
      params: {
        zone: data.zone
      }
    };
    if (data.sizes) {
      imp.sizes = tryParseJson(data.sizes);
    }
    payload.imps.push(imp);
    var json = JSON.stringify(payload);
    writeScript(global2, "https://inv-nets.admixer.net/ampsrc.js?data=" + json);
  }

  // ads/vendors/adnuntius.js
  function adnuntius(global2, data) {
    validateData(data, ["auId"]);
    loadScript(global2, "https://cdn.adnuntius.com/adn.js", function() {
      global2.adn = global2.adn || {};
      global2.adn.calls = global2.adn.calls || [];
      global2.adn.calls.push(function() {
        global2.adn.request({
          amp: {
            data
          }
        });
      });
    });
  }

  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };

  // ads/vendors/adocean.js
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
  var ADO_JS_PATHS = {
    "sync": "/files/js/ado.js",
    "buffered": "/files/js/ado.FIF.test.js"
  };
  function isFalseString(str) {
    return /^(?:false|off)?$/i.test(str);
  }
  function setupAdoConfig(mode, global2, consent) {
    if (global2["ado"]) {
      var config = {
        mode: mode == "sync" ? "old" : "new",
        protocol: "https:",
        fif: {
          enabled: mode != "sync"
        },
        consent
      };
      global2["ado"]["config"](config);
    }
  }
  function setupPreview(global2, data) {
    if (global2.ado && data.aoPreview && !isFalseString(data.aoPreview)) {
      global2.ado.preview({
        enabled: true
      });
    }
  }
  function parseJSONObj(str) {
    return str.match(/^\s*{/) ? parseJson(str) : void 0;
  }
  function buildKeys(keys) {
    return keys || void 0;
  }
  function buildVars(vars) {
    try {
      return parseJSONObj(vars);
    } catch (e) {
      return vars || void 0;
    }
  }
  function buildClusters(clusters) {
    try {
      return parseJSONObj(clusters);
    } catch (e) {
    }
  }
  var runSyncCount = 0;
  function runSync(global2, cb) {
    global2["__aoPrivFnct" + ++runSyncCount] = cb;
    global2.document.write("<script>__aoPrivFnct" + runSyncCount + "();<\/script>");
  }
  function appendPlacement(mode, global2, data) {
    var doc = global2.document;
    var placement = doc.createElement("div");
    placement.id = data["aoId"];
    var dom = doc.getElementById("c");
    dom.appendChild(placement);
    var config = {
      id: data["aoId"],
      server: data["aoEmitter"],
      keys: buildKeys(data["aoKeys"]),
      vars: buildVars(data["aoVars"]),
      clusters: buildClusters(data["aoClusters"])
    };
    if (global2.ado) {
      if (mode == "sync") {
        runSync(global2, function() {
          global2["ado"]["placement"](config);
        });
        runSync(global2, function() {
          if (!config["_hasAd"]) {
            window.context.noContentAvailable();
          }
        });
      } else {
        global2["ado"]["onAd"](data["aoId"], function(isAd) {
          if (!isAd) {
            window.context.noContentAvailable();
          }
        });
        global2["ado"]["placement"](config);
      }
    }
  }
  function executeMaster(masterId, data, global2, callback2) {
    var config = {
      id: masterId,
      server: data["aoEmitter"],
      keys: buildKeys(data["aoKeys"]),
      vars: buildVars(data["aoVars"]),
      clusters: buildClusters(data["aoClusters"])
    };
    if (global2["ado"]) {
      global2["ado"]["onEmit"](function(masterId2, instanceId, codes) {
        callback2(codes);
      });
      global2["ado"]["master"](config);
    }
  }
  function requestCodes(masterId, data, global2, callback2) {
    var slaveId = data["aoId"];
    computeInMasterFrame(global2, "ao-master-exec", function(done) {
      executeMaster(masterId, data, global2, function(codes) {
        return done(codes);
      });
    }, function(codes) {
      var creative = codes[slaveId];
      if (codes[slaveId + "_second_phase"]) {
        creative["code"] += "\n" + codes[slaveId + "_second_phase"]["code"];
      }
      callback2(creative);
    });
  }
  var AdoBuffer = /* @__PURE__ */ function() {
    function AdoBuffer2(container, global2) {
      _classCallCheck10(this, AdoBuffer2);
      this.container = container;
      this.global = global2;
      this.callback = null;
    }
    _createClass9(AdoBuffer2, [{
      key: "render",
      value: function render(callback2) {
        this.callback = callback2;
        if (this.global.document.readyState === "loading") {
          this.global.document.addEventListener("DOMContentLoaded", this._init.bind(this));
        } else {
          this._init();
        }
      }
    }, {
      key: "_init",
      value: function _init() {
        var ado = this.global["ado"];
        var gao = this.global["gao"];
        if (ado["busy"] || typeof gao !== "undefined" && gao["busy"]) {
          ado["queue"].unshift(this._execute.bind(this));
        } else {
          this._execute();
        }
      }
    }, {
      key: "_execute",
      value: function _execute() {
        var adoElement = new this.global["AdoElement"]({
          "id": this.container.id,
          "orgId": this.container.id,
          "clearId": this.container.id,
          "_isBuffer": true
        });
        this.global["AdoElems"] = this.global["AdoElems"] || [];
        this.global["AdoElems"].push(adoElement);
        adoElement["getDOMElement"]();
        adoElement["initBuffor"]();
        this.global["ado"]["elems"][this.container.id] = adoElement;
        this.callback(adoElement);
        adoElement["rewriteBuffor"]();
        adoElement["dispatch"]();
      }
    }]);
    return AdoBuffer2;
  }();
  function executeSlave(slaveId, config, global2) {
    var doc = global2.document;
    var placement = doc.createElement("div");
    placement["id"] = slaveId;
    var dom = doc.getElementById("c");
    dom.appendChild(placement);
    if (global2["ado"]) {
      if (!config || config["isEmpty"]) {
        global2.context.noContentAvailable();
      } else {
        var buffer = new AdoBuffer(placement, global2);
        buffer.render(function() {
          new Function(config["sendHitsDef"] + config["code"])();
        });
      }
    }
  }
  function adocean(global2, data) {
    validateData(data, ["aoEmitter", "aoId"], ["aoMode", "aoPreview", "aoKeys", "aoVars", "aoClusters", "aoMaster"]);
    var masterId = data["aoMaster"];
    var mode = data["aoMode"] !== "sync" || masterId ? "buffered" : "sync";
    var adoUrl = "https://" + data["aoEmitter"] + ADO_JS_PATHS[mode];
    var ctx = global2.context;
    var consent = ctx.initialConsentState === null || ctx.initialConsentState === CONSENT_POLICY_STATE.SUFFICIENT || ctx.initialConsentState === CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED;
    writeScript(global2, adoUrl, function() {
      setupAdoConfig(mode, global2, consent);
      setupPreview(global2, data);
      if (masterId) {
        var ado = global2["ado"];
        if (ado && ado["features"] && ado["features"]["passback"]) {
          ado["features"]["passback"] = false;
        }
        requestCodes(masterId, data, global2, function(codes) {
          executeSlave(data["aoId"], codes, global2);
        });
      } else {
        appendPlacement(mode, global2, data);
      }
    });
  }

  // ads/vendors/adop.js
  function adop(global2, data) {
    validateData(data, ["z"]);
    global2.adop = data;
    writeScript(global2, "https://compass.adop.cc/assets/js/adop/amp.js");
  }

  // ads/vendors/adpicker.js
  function adpicker(global2, data) {
    validateData(data, ["ph"]);
    var url = "https://cdn.adpicker.net/ads/main.js?et=amp&ph=" + encodeURIComponent(data.ph) + "&cb=" + Math.floor(89999999 * Math.random() + 1e7);
    writeScript(global2, url);
  }

  // ads/vendors/adplugg.js
  function adplugg(global2, data) {
    loadScript(global2, "https://www.adplugg.com/serve/js/ad.js");
    validateData(data, ["accessCode", "width", "height"], ["zone"]);
    var ampwrapper = global2.document.getElementById("c");
    var adTag = global2.document.createElement("div");
    adTag.setAttribute("class", "adplugg-tag");
    adTag.setAttribute("data-adplugg-access-code", data["accessCode"]);
    if (data["zone"]) {
      adTag.setAttribute("data-adplugg-zone", data["zone"]);
    }
    ampwrapper.appendChild(adTag);
    global2.AdPlugg = global2.AdPlugg || [];
    var AdPlugg = global2.AdPlugg;
    AdPlugg.push(function() {
      var AdPlugg2 = global2.AdPlugg;
      AdPlugg2.on(adTag, "adplugg:renderStart", function(event) {
        var optData = {};
        if (hasOwn(event, "width")) {
          optData.width = event.width;
        }
        if (hasOwn(event, "height")) {
          optData.height = event.height;
        }
        global2.context.renderStart(optData);
      });
      AdPlugg2.on(adTag, "adplugg:noContentAvailable", function() {
        global2.context.noContentAvailable();
      });
    });
    AdPlugg.push({
      "command": "run"
    });
  }

  // ads/vendors/adpon.js
  function adpon(global2, data) {
    validateData(data, ["fid"], ["debugScript"]);
    global2._adpon = {
      fid: data["fid"]
    };
    writeScript(global2, data["debugScript"] || "https://ad.adpon.jp/amp.js");
  }

  // ads/vendors/adpushup.js
  function adpushup(global2, data) {
    validateData(data, ["siteid", "slotpath", "width", "height"], ["totalampslots", "jsontargeting", "extras"]);
    loadScript(global2, "https://securepubads.g.doubleclick.net/tag/js/gpt.js", function() {
      loadScript(global2, "https://cdn.adpushup.com/" + data.siteid + "/amp.js", function() {
        window.adpushup.initAmp(global2, data.width, data.height, data.siteid, data.slotpath, data.totalampslots, data.jsontargeting, data.extras);
      });
    });
  }

  // ads/vendors/adreactor.js
  function adreactor(global2, data) {
    validateData(data, [], ["zid", "pid", "custom3"]);
    var url = "https://adserver.adreactor.com/servlet/view/banner/javascript/zone?zid=" + encodeURIComponent(data.zid) + "&pid=" + encodeURIComponent(data.pid) + "&custom3=" + encodeURIComponent(data.custom3) + "&random=" + Math.floor(89999999 * Math.random() + 1e7) + "&millis=" + Date.now();
    writeScript(global2, url);
  }

  // ads/vendors/adsensor.js
  function adsensor(global2) {
    writeScript(global2, "https://wfpscripts.webspectator.com/amp/adsensor-amp.js");
  }

  // ads/vendors/adservsolutions.js
  function adservsolutions(global2, data) {
    validateData(data, [], ["client", "zid"]);
    global2["ABNS"] = global2["ABNS"] || function() {
      (global2["ABNSl"] = global2["ABNSl"] || []).push(arguments);
    };
    global2["ABNSh"] = data.client;
    writeScript(global2, "https://cdn." + global2["ABNSh"] + "/libs/b.js");
    global2["ABNS"]("c", {
      id: data.zid + "&o=a"
    });
  }

  // ads/vendors/adsloom.js
  function adsloom(global2, data) {
    validateData(data, ["widgetId"]);
    global2._adsLoom = global2._adsLoom || {
      widgetId: data["widgetId"],
      clientId: global2.context.clientId,
      sourceUrl: global2.context.sourceUrl
    };
    loadScript(global2, "https://adsloomwebservices.adsloom.com/scripts/amp-loader.js");
  }

  // ads/vendors/adsnative.js
  function adsnative(global2, data) {
    try {
      validateData(data, ["anapiid"], ["ankv", "ancat", "antid"]);
    } catch (e) {
      validateData(data, ["annid", "anwid"], ["ankv", "ancat", "antid"]);
    }
    var actualkv = void 0;
    if (data.ankv) {
      actualkv = {};
      var arraykv = data.ankv.split(",");
      for (var k in arraykv) {
        var kv = arraykv[k].split(":");
        actualkv[kv.pop()] = kv.pop();
      }
    }
    var actualcat = data.ancat ? data.ancat.split(",") : void 0;
    global2._AdsNativeOpts = {
      apiKey: data.anapiid,
      networkKey: data.annid,
      nativeAdElementId: "adsnative_ampad",
      currentPageUrl: global2.context.location.href,
      widgetId: data.anwid,
      templateKey: data.antid,
      categories: actualcat,
      keyValues: actualkv,
      amp: true
    };
    var ad = global2.document.createElement("div");
    var ampwrapper = global2.document.getElementById("c");
    ad.id = global2._AdsNativeOpts.nativeAdElementId;
    ampwrapper.appendChild(ad);
    writeScript(global2, "https://static.adsnative.com/static/js/render.v1.js");
  }

  // ads/vendors/adspeed.js
  function adspeed(global2, data) {
    validateData(data, ["zone", "client"]);
    var url = "https://g.adspeed.net/ad.php?do=amphtml&zid=" + data.zone + "&oid=" + data.client + "&cb=" + Math.random();
    writeScript(global2, url);
  }

  // ads/vendors/adspirit.js
  function adspirit(global2, data) {
    validateData(data, [], ["asmParams", "asmHost"]);
    var i = global2.document.createElement("ins");
    i.setAttribute("data-asm-params", data["asmParams"]);
    i.setAttribute("data-asm-host", data["asmHost"]);
    i.setAttribute("class", "asm_async_creative");
    setStyles(i, {
      display: "inline-block",
      "text-align": "left"
    });
    global2.document.getElementById("c").appendChild(i);
    var s = global2.document.createElement("script");
    s.src = "https://" + data["asmHost"] + "/adasync.js";
    global2.document.body.appendChild(s);
  }

  // ads/vendors/adstir.js
  function adstir(global2, data) {
    validateData(data, [], ["appId", "adSpot"]);
    var v = "4.0";
    var d = global2.document.createElement("div");
    d.setAttribute("class", "adstir-ad-async");
    d.setAttribute("data-ver", v);
    d.setAttribute("data-app-id", data["appId"]);
    d.setAttribute("data-ad-spot", data["adSpot"]);
    d.setAttribute("data-amp", true);
    d.setAttribute("data-origin", global2.context.location.href);
    global2.document.getElementById("c").appendChild(d);
    loadScript(global2, "https://js.ad-stir.com/js/adstir_async.js");
  }

  // ads/vendors/adstyle.js
  function adstyle(global2, data) {
    validateData(data, ["widget"]);
    global2._adstyle = global2._adstyle || {
      viewId: global2.context.pageViewId,
      widgetIds: [],
      referrer: global2.context.referrer,
      url: global2.context.canonicalUrl,
      source: global2.context.sourceUrl
    };
    global2._adstyle.widgetIds.push(data.widget);
    var url = "https://widgets.ad.style/amp.js";
    window.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        window["intersectionRect" + data.widget] = c.intersectionRect;
        window["boundingClientRect" + data.widget] = c.boundingClientRect;
      });
    });
    loadScript(global2, url);
  }

  // ads/vendors/adtech.js
  function adtech(global2, data) {
    var adsrc = data.src;
    if (typeof adsrc != "undefined") {
      validateSrcPrefix("https:", adsrc);
      validateSrcContains("/addyn/", adsrc);
      writeScript(global2, adsrc);
    } else {
      validateData(data, ["atwmn", "atwdiv"], ["atwco", "atwheight", "atwhtnmat", "atwmoat", "atwnetid", "atwothat", "atwplid", "atwpolar", "atwsizes", "atwwidth"]);
      global2.atwco = data.atwco;
      global2.atwdiv = data.atwdiv;
      global2.atwheight = data.atwheight;
      global2.atwhtnmat = data.atwhtnmat;
      global2.atwmn = data.atwmn;
      global2.atwmoat = data.atwmoat;
      global2.atwnetid = data.atwnetid;
      global2.atwothat = data.atwothat;
      global2.atwplid = data.atwplid;
      global2.atwpolar = data.atwpolar;
      global2.atwsizes = data.atwsizes;
      global2.atwwidth = data.atwwidth;
      writeScript(global2, "https://s.aolcdn.com/os/ads/adsWrapper3.js");
    }
  }

  // ads/vendors/adtelligent.js
  function adtelligent(global2, data) {
    validateData(data, [], ["source", "floor", "hbmpPubId", "hbmpSiteId", "hbmpUnitId"]);
    var doc = global2.document;
    var container = doc.createElement("div");
    var ctx = window.context;
    doc.body.appendChild(container);
    if (data.source) {
      var url = "https://s.adtelligent.com/?floor=" + (data.floor || 0) + ("&content_page_url=" + encodeURIComponent(ctx.location)) + ("&width=" + data.width) + ("&height=" + data.height) + ("&cb=" + Date.now()) + ("&aid=" + data.source);
      container.id = "PDS" + data.source;
      loadScript(global2, url, function() {
        ctx.renderStart({
          width: data.width,
          height: data.height
        });
      });
    } else {
      var HTML_ELEMENT_ID = "adt-placement";
      var vpbSrc = "//player.adtelligent.com/prebid/wrapper_hb_" + data["hbmpPubId"] + "_" + data["hbmpSiteId"] + ".js";
      var pbSrc = vpbSrc.replace("wrapper_hb", "hb");
      container.id = HTML_ELEMENT_ID;
      global2.vpb = window.vpb || {
        cmd: [],
        fastLoad: true,
        amp: true,
        startAuction: 1
      };
      loadScript(global2, vpbSrc);
      loadScript(global2, pbSrc);
      global2.vpb.cmd.push(function() {
        global2.vpb.startAuction({
          code: HTML_ELEMENT_ID,
          adUnitId: parseInt(data["hbmpUnitId"], 10),
          sizes: [[data.width, data.height]],
          render: true,
          onEnd: function onEnd(winner) {
            ctx.renderStart({
              width: winner.width,
              height: winner.height
            });
          }
        });
      });
    }
  }

  // ads/vendors/adthrive.js
  function adthrive(global2, data) {
    validateData(data, ["siteId", "adUnit"], ["sizes"]);
    loadScript(global2, "https://ads.adthrive.com/sites/" + encodeURIComponent(data.siteId) + "/amp.min.js");
  }

  // ads/vendors/adunity.js
  function adunity(global2, data) {
    var doc = global2.document;
    validateData(data, ["auAccount", "auSite"], ["auSection", "auZone", "auDemo", "auIsdemo", "auAd", "auOrder", "auSegment", "auOptions", "auSources", "auAds", "auTriggerFn", "auTriggerVal", "auCallbackVal", "auCallbackFn", "auPassbackFn", "auPassbackVal", "auClick", "auDual", "auImpression", "auVideo"]);
    var tag2 = doc.createElement("div");
    tag2.classList.add("au-tag");
    tag2.setAttribute("data-au-width", data["width"]);
    tag2.setAttribute("data-au-height", data["height"]);
    if (data != null) {
      for (var key in data) {
        if (!hasOwnProperty.call(data, key)) {
          continue;
        }
        if (key.startsWith("type") || key.startsWith("ampSlotIndex")) {
          continue;
        }
        if (key.startsWith("au")) {
          if (key == "auVideo") {
            tag2.setAttribute("class", "au-video");
          } else {
            var auKey = key.substring(2).toLowerCase();
            tag2.setAttribute("data-au-" + auKey, data[key]);
          }
        }
      }
    }
    var libAd = false;
    var inViewCb = global2.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        if (!libAd && c.intersectionRect.height > data["height"] / 2) {
          libAd = true;
          inViewCb();
          renderTags(global2, data);
        }
      });
    });
    var tagPh = doc.getElementById("c");
    tagPh.appendChild(tag2);
  }
  function renderTags(global2, data) {
    if (data == null) {
      return;
    }
    global2.context.renderStart({
      width: data.width,
      height: data.height
    });
    loadScript(global2, "https://content.adunity.com/aulib.js");
  }

  // ads/vendors/aduptech.js
  var ADUPTECH_ELEMENT_ID = "aduptech";
  var ADUPTECH_API_URL = "https://s.d.adup-tech.com/jsapi";
  function aduptech(global2, data) {
    var context2 = global2.context, document2 = global2.document;
    validateData(data, ["placementkey"], ["mincpc", "query", "pageurl", "gdpr", "gdpr_consent", "adtest"]);
    document2.getElementById("c").setAttribute("id", ADUPTECH_ELEMENT_ID);
    var options = {
      amp: true,
      responsive: true,
      placementkey: data.placementkey,
      onAds: function onAds() {
        return context2.renderStart();
      },
      onNoAds: function onNoAds() {
        return context2.noContentAvailable();
      }
    };
    if ("mincpc" in data) {
      options.mincpc = data.mincpc;
    }
    if ("query" in data) {
      options.query = data.query;
    }
    if ("adtest" in data) {
      options.adtest = data.adtest;
    }
    if ("pageurl" in data) {
      options.pageurl = data.pageurl;
    } else if (context2.sourceUrl) {
      options.pageurl = context2.sourceUrl;
    } else if (context2.location && context2.location.href) {
      options.pageurl = context2.location.href;
    }
    if ("gdpr" in data) {
      options.gdpr = data.gdpr;
    }
    if (context2.consentSharedData !== null && typeof context2.consentSharedData === "object" && context2.consentSharedData.consentString && context2.consentSharedData.consentString !== "") {
      options.gdpr_consent = context2.consentSharedData.consentString;
    } else if ("gdpr_consent" in data) {
      options.gdpr_consent = data.gdpr_consent;
    }
    loadScript(global2, ADUPTECH_API_URL, function() {
      return global2.uAd.embed(ADUPTECH_ELEMENT_ID, options);
    });
  }

  // ads/vendors/adventive.js
  function adventive(global2, data) {
    if (hasOwn(data, "isDev")) {
      adventive_(global2, data);
    } else {
      validateData(data, ["src"], ["isDev"]);
      writeScript(global2, data.src + "&isAmp=1");
    }
  }
  var adv = {
    addInstance: function addInstance() {
    },
    args: {},
    isLibLoaded: false,
    mode: {
      dev: false,
      live: false,
      localDev: false,
      preview: false,
      prod: false,
      testing: false
    }
  };
  var requiredData = ["pid"];
  var optionalData = ["click", "async", "isDev"];
  var sld = {
    true: "adventivedev",
    false: "adventive"
  };
  var thld = {
    true: "amp",
    false: "ads"
  };
  var cacheTime = 5;
  function adventive_(global2, data) {
    validateData(data, requiredData, optionalData);
    if (!hasOwn(global2, "adventive")) {
      global2.adventive = adv;
    }
    var ns = global2.adventive;
    if (!hasOwn(ns, "context")) {
      ns.context = global2.context;
    }
    if (!Object.isFrozen(ns.mode)) {
      updateMode(ns.mode, global2.context.location.hostname);
    }
    var cb = callback.bind(this, data.pid, ns), url = getUrl(global2.context, data, ns);
    url ? (hasOwn(data, "async") ? loadScript : writeScript)(global2, url, cb) : cb();
  }
  function updateMode(mode, hostname) {
    mode.localDev = hostname === "localhost";
    mode.dev = !mode.localDev && endsWith(hostname, sld[false] + ".com");
    mode.prod = !mode.localDev && endsWith(hostname, sld[true] + ".com");
    mode.preview = (mode.dev || mode.prod) && hostname.startsWith("/ad");
    mode.testing = (mode.dev || mode.prod) && hostname.startsWith("/testing");
    mode.live = (mode.testing || !mode.preview) && !mode.localDev;
    Object.freeze(mode);
  }
  function callback(id, ns) {
    ns.addInstance(id);
  }
  function getUrl(context2, data, ns) {
    var mode = ns.mode, isDev = hasOwn(data, "isDev"), sld_ = sld[!mode.dev], thld_ = thld[isDev && !mode.live], search = reduceSearch(ns, data.pid, data.click, context2.referrer), url = search ? addParamsToUrl("https://" + thld_ + "." + sld_ + ".com/ad", search) : false;
    return url;
  }
  function reduceSearch(ns, placementId, click, referrer) {
    var isRecipeLoaded = hasOwn(ns.args, "placementId");
    var isRecipeStale = true;
    if (isRecipeLoaded) {
      var info = ns.args[placementId];
      isRecipeStale = Date.now() - info["requestTime"] > 60 * cacheTime;
    }
    var needsRequest = !isRecipeLoaded || isRecipeStale;
    return !needsRequest ? null : dict({
      "click": click,
      "referrer": referrer,
      "isAmp": "1",
      "lib": !ns.isLibLoaded ? "1" : "",
      "pid": needsRequest ? placementId : ""
    });
  }

  // ads/vendors/adverline.js
  function adverline(global2, data) {
    validateData(data, ["id", "plc"], ["s", "section"]);
    writeScript(global2, "https://ads.adverline.com/richmedias/amp.js");
  }

  // ads/vendors/adverticum.js
  function adverticum(global2, data) {
    validateData(data, ["goa3zone"], ["costumetargetstring"]);
    var zoneid = "zone" + data["goa3zone"];
    var d = global2.document.createElement("div");
    d.id = zoneid;
    d.classList.add("goAdverticum");
    document.getElementById("c").appendChild(d);
    if (data["costumetargetstring"]) {
      var s = global2.document.createTextNode(data["costumetargetstring"]);
      var v = global2.document.createElement("var");
      v.setAttribute("id", "cT");
      v.setAttribute("class", "customtarget");
      setStyle(v, "display", "none");
      v.appendChild(s);
      document.getElementById(zoneid).appendChild(v);
    }
    writeScript(global2, "//ad.adverticum.net/g3.js");
  }

  // ads/vendors/advertserve.js
  function advertserve(global2, data) {
    validateData(data, ["zid", "pid", "client"], ["custom1", "custom2", "custom3", "custom4", "custom5", "custom6", "custom7", "custom8", "custom9", "custom10"]);
    var customFields = function() {
      var params = "";
      for (var i = 1; i <= 10; i++) {
        var fieldName = "custom" + i;
        if (data[fieldName] !== void 0) {
          params += "&" + fieldName + "=" + encodeURIComponent(data[fieldName]);
        }
      }
      return params;
    }();
    var url = "https://" + data.client + ".advertserve.com/servlet/view/banner/javascript/zone?amp=true&zid=" + encodeURIComponent(data.zid) + "&pid=" + encodeURIComponent(data.pid) + customFields + "&random=" + Math.floor(89999999 * Math.random() + 1e7) + "&millis=" + Date.now();
    writeScript(global2, url);
  }

  // ads/vendors/adyoulike.js
  function adyoulike(global2, data) {
    validateData(data, ["placement"], ["dc", "campaign"]);
    global2.adyoulikeParams = data;
    writeScript(global2, "https://fo-static.omnitagjs.com/amp.js");
  }

  // ads/vendors/affiliateb.js
  function affiliateb(global2, data) {
    validateData(data, ["afb_a", "afb_p", "afb_t"]);
    global2.afbParam = data;
    writeScript(global2, "https://track.affiliate-b.com/amp/a.js");
  }

  // ads/vendors/aja.js
  function aja(global2, data) {
    validateData(data, ["asi"]);
    var document2 = global2.document;
    var asi = data["asi"];
    var d = document2.createElement("div");
    d.dataset["ajaAd"] = "";
    d.dataset["ajaAsi"] = asi;
    document2.getElementById("c").appendChild(d);
    loadScript(global2, "https://cdn.as.amanad.adtdp.com/sdk/asot-amp.js");
  }

  // ads/vendors/amoad.js
  function amoad(global2, data) {
    validateData(data, ["sid"], ["adType"]);
    var script;
    var attrs = {};
    if (data["adType"] === "native") {
      script = "https://j.amoad.com/js/n.js";
      attrs["class"] = "amoad_native";
      attrs["data-sid"] = data.sid;
    } else {
      script = "https://j.amoad.com/js/a.js";
      attrs["class"] = "amoad_frame sid_" + data.sid + " container_div sp";
    }
    global2.amoadOption = {
      ampData: data
    };
    var d = global2.document.createElement("div");
    Object.keys(attrs).forEach(function(k) {
      d.setAttribute(k, attrs[k]);
    });
    global2.document.getElementById("c").appendChild(d);
    loadScript(global2, script);
  }

  // ads/vendors/aniview.js
  function aniview(global2, data) {
    var requiredParams3 = ["publisherid", "channelid"];
    validateData(data, requiredParams3);
    global2.avampdata = data;
    var scpdomain = data.scriptdomain || "player.aniview.com";
    var scpurl = "https://" + scpdomain + "/script/6.1/ampaniview.js";
    writeScript(global2, scpurl);
  }

  // ads/vendors/anyclip.js
  var requiredParams = ["pubname", "widgetname"];
  var scriptHost = "player.anyclip.com";
  var scriptPath = "anyclip-widget/lre-widget/prod/v1/src";
  var scriptName = "aclre-amp-loader.js";
  var scriptUrl = "https://" + scriptHost + "/" + scriptPath + "/" + scriptName;
  function anyclip(global2, data) {
    validateData(data, requiredParams);
    global2.addEventListener("message", function() {
      global2.context.renderStart();
    });
    loadScript(global2, scriptUrl, function() {
      global2.anyclip = global2.anyclip || {};
      global2.anyclip.getWidget = global2.anyclip.getWidget || function() {
      };
    });
  }

  // ads/vendors/appnexus.js
  var APPNEXUS_AST_URL = "https://acdn.adnxs.com/ast/ast.js";
  function appnexus(global2, data) {
    var args = [];
    args.push("size=" + data.width + "x" + data.height);
    if (data.tagid) {
      validateData(data, ["tagid"]);
      args.push("id=" + encodeURIComponent(data.tagid));
      writeScript(global2, constructTtj(args));
      return;
    } else if (data.member && data.code) {
      validateData(data, ["member", "code"]);
      args.push("member=" + encodeURIComponent(data.member));
      args.push("inv_code=" + encodeURIComponent(data.code));
      writeScript(global2, constructTtj(args));
      return;
    }
    function constructTtj(args2) {
      var url = "https://ib.adnxs.com/ttj?";
      for (var i = 0; i < args2.length; i++) {
        url += args2[i] + "&";
      }
      return url;
    }
    appnexusAst(global2, data);
  }
  function appnexusAst(global2, data) {
    validateData(data, ["adUnits"]);
    var apntag;
    if (context.isMaster) {
      context.master.apntag = context.master.apntag || {};
      context.master.apntag.anq = context.master.apntag.anq || [];
      apntag = context.master.apntag;
      context.master.adUnitTargetIds = context.master.adUnitTargetIds || [];
      context.master.adUnitTargetIds = data.adUnits.map(function(adUnit) {
        return adUnit.targetId;
      });
      apntag.anq.push(function() {
        if (data.pageOpts) {
          apntag.anq.push(function() {
            apntag.debug = data.debug || false;
            apntag.setPageOpts(data.pageOpts);
          });
        }
        data.adUnits.forEach(function(adUnit) {
          apntag.defineTag(adUnit);
        });
      });
      loadScript(global2, APPNEXUS_AST_URL, function() {
        apntag.anq.push(function() {
          apntag.loadTags();
        });
      });
    }
    var div = global2.document.createElement("div");
    div.setAttribute("id", data.target);
    var divContainer = global2.document.getElementById("c");
    if (divContainer) {
      divContainer.appendChild(div);
      setStyles(divContainer, {
        top: "50%",
        left: "50%",
        bottom: "",
        right: "",
        transform: "translate(-50%, -50%)"
      });
    }
    if (!apntag) {
      apntag = context.master.apntag;
      global2.apntag = context.master.apntag;
    }
    if (!context.isMaster && data.adUnits) {
      var newAddUnits = data.adUnits.filter(function(adUnit) {
        return context.master.adUnitTargetIds.indexOf(adUnit.targetId) === -1;
      });
      if (newAddUnits.length) {
        apntag.anq.push(function() {
          newAddUnits.forEach(function(adUnit) {
            apntag.defineTag(adUnit);
            context.master.adUnitTargetIds.push(adUnit.targetId);
          });
          apntag.loadTags();
        });
      }
    }
    apntag.anq.push(function() {
      if (typeof apntag.checkAdAvailable === "function") {
        var getAd = apntag.checkAdAvailable(data.target);
        getAd({
          resolve: isAdAvailable,
          reject: context.noContentAvailable
        });
      }
    });
    apntag.anq.push(function() {
      apntag.onEvent("adAvailable", data.target, isAdAvailable);
      apntag.onEvent("adNoBid", data.target, context.noContentAvailable);
    });
    function isAdAvailable(adObj) {
      global2.context.renderStart({
        width: adObj.width,
        height: adObj.height
      });
      global2.apntag.showTag(adObj.targetId, global2.window);
    }
  }

  // ads/vendors/appvador.js
  function appvador(global2, data) {
    validateData(data, ["id"], ["options", "jsType", "customScriptSrc"]);
    var container = global2.document.getElementById("c");
    var apvDiv = global2.document.createElement("div");
    apvDiv.setAttribute("id", "apvad-" + data.id);
    container.appendChild(apvDiv);
    var scriptUrl2 = data.customScriptSrc ? data.customScriptSrc : "https://cdn.apvdr.com/js/" + (data.jsType ? encodeURIComponent(data.jsType) : "VastAdUnit") + ".min.js";
    var apvScript = "new APV." + (data.jsType ? data.jsType : "VASTAdUnit") + '({s:"' + data.id + '",isAmpAd:true' + (data.options ? "," + data.options : "") + "}).load();";
    var cb = function cb2() {
      var apvLoadScript = global2.document.createElement("script");
      apvLoadScript.text = apvScript;
      container.appendChild(apvLoadScript);
    };
    writeScript(global2, scriptUrl2, cb);
  }

  // ads/vendors/atomx.js
  function atomx(global2, data) {
    var optionals = ["click", "uv1", "uv2", "uv3", "context"];
    validateData(data, ["id"], optionals);
    var args = ["size=" + data.width + "x" + data.height, "id=" + encodeURIComponent(data.id)];
    for (var i = 0; i < optionals.length; i++) {
      var optional = optionals[i];
      if (optional in data) {
        args.push(optional + "=" + encodeURIComponent(data[optional]));
      }
    }
    writeScript(global2, "https://s.ato.mx/p.js#" + args.join("&"));
  }

  // ads/vendors/baidu.js
  function baidu(global2, data) {
    validateData(data, ["cproid"]);
    var id = "_" + Math.random().toString(36).slice(2);
    var container = global2.document.createElement("div");
    container.id = id;
    global2.document.getElementById("c").appendChild(container);
    global2.slotbydup = global2.slotbydup || [];
    global2.slotbydup.push({
      id: data["cproid"],
      container: id,
      display: "inlay-fix",
      async: true
    });
    global2.addEventListener("message", function() {
      global2.context.renderStart();
    });
    loadScript(global2, "https://dup.baidustatic.com/js/dm.js", function() {
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/beaverads.js
  function beaverads(global2, data) {
    validateData(data, ["blockId"]);
    var url = "https://code.beaverads.com/data/" + encodeURIComponent(data["blockId"]) + ".js?async=1&div=c";
    loadScript(global2, url, function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/bidtellect.js
  function bidtellect(global2, data) {
    var requiredParams3 = ["t", "pid", "sid"];
    var optionalParams4 = ["sname", "pubid", "pubname", "renderid", "bestrender", "autoplay", "playbutton", "videotypeid", "videocloseicon", "targetid", "bustframe"];
    validateData(data, requiredParams3, optionalParams4);
    var params = "?t=" + encodeURIComponent(data.t);
    params += "&pid=" + encodeURIComponent(data.pid);
    params += "&sid=" + encodeURIComponent(data.sid);
    if (data.width) {
      params += "&w=" + encodeURIComponent(data.width);
    }
    if (data.height) {
      params += "&h=" + encodeURIComponent(data.height);
    }
    optionalParams4.forEach(function(param) {
      if (data[param]) {
        params += "&" + param + "=" + encodeURIComponent(data[param]);
      }
    });
    var url = "https://cdn.bttrack.com/js/infeed/2.0/infeed.min.js" + params;
    writeScript(global2, url);
  }

  // ads/vendors/blade.js
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
  function blade(global2, data) {
    validateData(data, ["width", "height", "blade_api_key", "blade_player_id", "blade_player_type"]);
    var marcosObj = tryParseJson(data["blade_macros"]) || {};
    marcosObj["rand"] = Math.random().toString();
    marcosObj["page_url"] = marcosObj["page_url"] || global2.context.canonicalUrl;
    var macros = _extends({}, marcosObj);
    macros.width = data.width;
    macros.height = data.height;
    var containerId = "player-" + data["blade_api_key"] + "-" + data["blade_player_id"];
    createContainer14(containerId);
    var bladeConfig = "_bladeConfig-" + containerId;
    global2[bladeConfig] = {
      playerId: data["blade_player_id"],
      apiKey: data["blade_api_key"],
      version: "1.0",
      macros
    };
    var ctx = global2.context;
    var bladeOnLoad = "_bladeOnLoad-" + containerId;
    global2[bladeOnLoad] = function(error, player) {
      if (error) {
        global2.context.noContentAvailable();
        return;
      }
      ctx.reportRenderedEntityIdentifier(containerId);
      ctx.renderStart({
        width: player.width,
        height: player.height
      });
    };
    var servingDomain = data.servingDomain ? encodeURIComponent(data.servingDomain) : "ssr.streamrail.net";
    loadScript(global2, "https://" + servingDomain + "/js/" + data["blade_api_key"] + "/" + data["blade_player_id"] + "/player.js?t=" + data["blade_player_type"] + "&callback=" + bladeOnLoad + "&config=" + bladeConfig + "&c=" + containerId, void 0, function() {
      global2.context.noContentAvailable();
    });
    function createContainer14(elemId) {
      var d = global2.document.createElement("div");
      d.id = elemId;
      d.classList.add("blade");
      global2.document.getElementById("c").appendChild(d);
    }
  }

  // ads/vendors/brainy.js
  function brainy(global2, data) {
    validateData(data, [], ["aid", "slotId"]);
    var url = "https://proparm.jp/ssp/p/js1?_aid=" + encodeURIComponent(data["aid"]) + "&amp;_slot=" + encodeURIComponent(data["slotId"]);
    writeScript(global2, url);
  }

  // ads/vendors/bringhub.js
  function bringhub(global2, data) {
    global2._bringhub = global2._bringhub || {
      viewId: global2.context.pageViewId,
      htmlURL: data["htmlurl"] || global2.context.canonicalUrl,
      ampURL: data["ampurl"] || global2.context.sourceUrl,
      referrer: data["referrer"] || global2.context.referrer
    };
    writeScript(global2, "https://static.bh-cdn.com/msf/amp-loader.js?v=" + Date.now(), function() {
      loadScript(global2, "https://static.bh-cdn.com/msf/amp-widget.js?v=" + global2._bringhub.hash);
    });
  }

  // ads/vendors/broadstreetads.js
  function broadstreetads(global2, data) {
    validateData(data, ["network", "zone", "width", "height"], ["keywords", "place"]);
    data.place = data.place || 0;
    var placeholderID = "placement_" + data.zone + "_" + data.place;
    var d = global2.document.createElement("div");
    d.setAttribute("id", placeholderID);
    global2.document.getElementById("c").appendChild(d);
    global2.broadstreet = global2.broadstreet || {};
    global2.broadstreet.loadAMPZone = global2.broadstreet.loadAMPZone || function() {
      return {};
    };
    global2.broadstreet.run = global2.broadstreet.run || [];
    global2.broadstreet.run.push(function() {
      global2.broadstreet.loadAMPZone(d, {
        amp: true,
        ampGlobal: global2,
        ampData: data,
        height: data.height,
        keywords: data.keywords,
        networkId: data.network,
        place: data.place,
        softKeywords: true,
        width: data.width,
        zoneId: data.zone
      });
    });
    loadScript(global2, "https://cdn.broadstreetads.com/init-2.min.js");
  }

  // ads/vendors/byplay.js
  function byplay(global2, data) {
    validateData(data, ["vastUrl"]);
    global2.BYPLAY_VAST_URL = data["vastUrl"];
    loadScript(global2, "https://cdn.byplay.net/amp-byplay-v2.js");
  }

  // ads/vendors/caajainfeed.js
  function caajainfeed(global2, data) {
    validateData(data, [], ["adSpot", "format", "test", "optout", "offset", "ipv4", "ipv6", "networkReachability", "osName", "osVersion", "osLang", "osTimezone", "deviceVersion", "appId", "appVersion", "kv", "uids", "template", "protocol", "fields"]);
    global2.caAjaInfeedConfig = data;
    loadScript(global2, "https://cdn.amanad.adtdp.com/sdk/ajaamp.js");
  }

  // ads/vendors/capirs.js
  function capirs(global2, data) {
    validateData(data, ["begunAutoPad", "begunBlockId"]);
    if (data["customCss"]) {
      var style = global2.document.createElement("style");
      if (style.styleSheet) {
        style.styleSheet.cssText = data["customCss"];
      } else {
        style.appendChild(global2.document.createTextNode(data["customCss"]));
      }
      global2.document.getElementById("c").appendChild(style);
    }
    global2["begun_callbacks"] = {
      lib: {
        init: function init2() {
          var block = global2.document.createElement("div");
          block.id = "x-" + Math.round(Math.random() * 1e8).toString(36);
          global2.document.getElementById("c").appendChild(block);
          global2["Adf"]["banner"]["ssp"](block.id, data["params"], {
            "begun-auto-pad": data["begunAutoPad"],
            "begun-block-id": data["begunBlockId"]
          });
        }
      },
      block: {
        draw: function draw(feed) {
          var banner = feed["banners"]["graph"][0];
          global2.context.renderStart({
            width: getWidth(global2, banner),
            height: banner.height
          });
          var reportId = "capirs-" + banner["banner_id"];
          global2.context.reportRenderedEntityIdentifier(reportId);
        },
        unexist: function unexist() {
          global2.context.noContentAvailable();
        }
      }
    };
    loadScript(global2, "//ssp.rambler.ru/capirs_async.js");
  }
  function getWidth(global2, banner) {
    var width;
    if (isResponsiveAd(banner)) {
      width = Math.max(global2.document.documentElement.clientWidth, global2.window.innerWidth || 0);
    } else {
      width = banner.width;
    }
    return width;
  }
  function isResponsiveAd(banner) {
    return banner.width.indexOf("%") !== -1;
  }

  // ads/vendors/caprofitx.js
  function caprofitx(global2, data) {
    global2.caprofitxConfig = data;
    loadScript(global2, "https://cdn.caprofitx.com/tags/amp/profitx_amp.js");
  }

  // ads/vendors/cedato.js
  function cedato(global2, data) {
    var requiredParams3 = ["id"];
    var optionalParams4 = ["domain", "servingDomain", "subid", "version", "extraParams"];
    validateData(data, requiredParams3, optionalParams4);
    if (!data || !data.id) {
      global2.context.noContentAvailable();
      return;
    }
    var cb = Math.floor(Math.random() * 1e4);
    var domain = data.domain || parseUrlDeprecated(global2.context.sourceUrl).origin;
    var playerDiv = global2.document.createElement("div");
    playerDiv.id = "video" + data.id + cb;
    setStyles(playerDiv, {
      width: "100%",
      height: "100%"
    });
    var playerScript = global2.document.createElement("script");
    var servingDomain = data.servingDomain ? encodeURIComponent(data.servingDomain) : "algovid.com";
    var srcParams = [
      "https://p." + servingDomain + "/player/player.js",
      "?p=" + encodeURIComponent(data.id),
      "&cb=" + cb,
      "&w=" + encodeURIComponent(data.width),
      "&h=" + encodeURIComponent(data.height),
      data.version ? "&pv=" + encodeURIComponent(data.version) : "",
      data.subid ? "&subid=" + encodeURIComponent(data.subid) : "",
      domain ? "&d=" + encodeURIComponent(domain) : "",
      data.extraParams || ""
    ];
    playerScript.onload = function() {
      global2.context.renderStart();
    };
    playerScript.src = srcParams.join("");
    playerDiv.appendChild(playerScript);
    global2.document.getElementById("c").appendChild(playerDiv);
  }

  // ads/vendors/nws.js
  function nws(global2, data) {
    var src = data.src;
    validateSrcPrefix(["https://tags.nws.ai/", "https://echo.nws.press/", "https://stories.nws.ai/"], src);
    writeScript(global2, src);
  }
  function chargeads(global2, data) {
    var src = data.src;
    validateSrcPrefix(["https://www.chargeplatform.com/", "https://tags.chargeplatform.com/"], src);
    writeScript(global2, src);
  }

  // ads/vendors/colombia.js
  function colombia(global2, data) {
    validateData(data, ["clmb_slot", "clmb_position", "clmb_section", "clmb_divid", "loadingStrategy"]);
    (global2._colombia = global2._colombia || []).push({
      clmbslot: data.clmb_slot,
      clmbposition: data.clmb_position,
      clmbsection: data.clmb_section,
      clmbdivid: data.clmb_divid
    });
    global2.context.observeIntersection(function(newrequest) {
      newrequest.forEach(function(d) {
        if (d.intersectionRect.height > 0) {
          global2._colombia.push({
            visible: true,
            rect: d
          });
        }
      });
    });
    loadScript(global2, "https://static.clmbtech.com/ad/commons/js/colombia-amp.js");
  }

  // ads/vendors/conative.js
  function conative(global2, data) {
    validateData(data, ["domain", "adslot", "height"], ["preview"]);
    data.domain = data.domain || null;
    data.adslot = data.adslot || null;
    data.preview = data.preview || null;
    window.dmConativeData = window.dmConativeData || {};
    window.dmConativeData.domain = window.dmConativeData.domain || data.domain;
    window.dmConativeData.adslot = window.dmConativeData.adslot || data.adslot;
    window.dmConativeData.preview = window.dmConativeData.preview || data.preview;
    window.dmConativeData.visibility = window.dmConativeData.visibility || 0;
    window.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        window.dmConativeData.visibility = parseInt(c.intersectionRect.height / c.boundingClientRect.height * 100, 10);
      });
    });
    if (data.domain) {
      writeScript(global2, "//s3-eu-west-1.amazonaws.com/ccc-adscript/serve/domain/" + data.domain + "/config.js");
    }
  }

  // ads/vendors/connatix.js
  function connatix(global2, data) {
    validateData(data, ["connatix"]);
    var script = global2.document.createElement("script");
    var cnxData = Object.assign(Object(tryParseJson(data["connatix"])));
    global2.cnxAmpAd = true;
    for (var key in cnxData) {
      if (hasOwn(cnxData, key)) {
        script.setAttribute(key, cnxData[key]);
      }
    }
    window.addEventListener("connatix_no_content", function() {
      window.context.noContentAvailable();
    }, false);
    script.onload = function() {
      global2.context.renderStart();
    };
    script.src = "https://cdn.connatix.com/min/connatix.renderer.infeed.min.js";
    global2.document.getElementById("c").appendChild(script);
  }

  // ads/vendors/contentad.js
  function contentad(global2, data) {
    validateData(data, [], ["id", "d", "wid", "url"]);
    global2.id = data.id;
    global2.d = data.d;
    global2.wid = data.wid;
    global2.url = data.url;
    var cadDiv = window.document.createElement("div");
    cadDiv.id = "contentad" + global2.wid;
    window.document.body.appendChild(cadDiv);
    var sourceUrl = window.context.sourceUrl;
    if (data.url) {
      var domain = data.url || window.atob(data.d);
      sourceUrl = sourceUrl.replace(parseUrlDeprecated(sourceUrl).host, domain);
    }
    var cadApi = "https://api.content-ad.net/Scripts/widget2.aspx?id=" + encodeURIComponent(global2.id) + "&d=" + encodeURIComponent(global2.d) + "&wid=" + global2.wid + "&url=" + encodeURIComponent(sourceUrl) + "&cb=" + Date.now();
    writeScript(global2, cadApi);
  }

  // ads/vendors/criteo.js
  var TAG = "CRITEO";
  function criteo(global2, data) {
    loadScript(global2, "https://static.criteo.net/js/ld/publishertag.js", function() {
      if (!data.tagtype || data.tagtype === "passback") {
        Criteo.DisplayAd({
          zoneid: data.zone,
          containerid: "c",
          integrationmode: "amp"
        });
      } else if (data.tagtype === "rta" || data.tagtype === "standalone") {
        dev().error(TAG, "You are using a deprecated Criteo integration", data.tagtype);
      } else {
        dev().error(TAG, "You are using an unknown Criteo integration", data.tagtype);
      }
    });
  }

  // ads/vendors/csa.js
  var currentAmpHeight = null;
  var overflowHeight = 40;
  var AD_TYPE = {
    UNSUPPORTED: 0,
    AFS: 1,
    AFSH: 2,
    AFSH_BACKFILL: 3
  };
  function csa(global2, data) {
    var width = global2.document.body.clientWidth;
    validateData(data, [], ["afshPageOptions", "afshAdblockOptions", "afsPageOptions", "afsAdblockOptions", "ampSlotIndex"]);
    var containerDiv = global2.document.createElement("div");
    var containerId = "csacontainer";
    containerDiv.id = containerId;
    global2.document.getElementById("c").appendChild(containerDiv);
    var pageOptions = {
      source: "amp",
      referer: global2.context.referrer
    };
    var adblockOptions = {
      container: containerId
    };
    var afshPage = Object.assign(Object(tryParseJson(data["afshPageOptions"])), pageOptions);
    var afsPage = Object.assign(Object(tryParseJson(data["afsPageOptions"])), pageOptions);
    var afshAd = Object.assign(Object(tryParseJson(data["afshAdblockOptions"])), adblockOptions);
    var afsAd = Object.assign(Object(tryParseJson(data["afsAdblockOptions"])), adblockOptions);
    if (afshAd["width"] == "auto") {
      afshAd["width"] = width;
    }
    global2.addEventListener("orientationchange", orientationChangeHandler.bind(null, global2, containerDiv));
    loadScript(global2, "https://www.google.com/adsense/search/ads.js", requestCsaAds.bind(null, global2, data, afsPage, afsAd, afshPage, afshAd));
  }
  function orientationChangeHandler(global2, containerDiv) {
    var oldHeight = getStyle(containerDiv, "height");
    global2.setTimeout(function() {
      var ignore = global2.document.body.offsetHeight;
      var newHeight = getStyle(containerDiv, "height");
      if (oldHeight != newHeight && newHeight != currentAmpHeight) {
        var newHeightPx = parseInt(newHeight, 10);
        var overflow = global2.document.getElementById("overflow");
        if (overflow) {
          overflow.onclick = function() {
            return requestResizeInternal(global2, containerDiv, newHeightPx);
          };
        }
        requestResizeInternal(global2, containerDiv, newHeightPx);
      }
    }, 250);
  }
  function resizeSuccessHandler(global2, container, requestedHeight) {
    currentAmpHeight = requestedHeight;
    var overflow = global2.document.getElementById("overflow");
    if (overflow) {
      setStyle(overflow, "display", "none");
      resizeCsa(container, requestedHeight);
    }
  }
  function resizeDeniedHandler(global2, container, requestedHeight) {
    var overflow = global2.document.getElementById("overflow");
    var containerHeight = parseInt(getStyle(container, "height"), 10);
    if (containerHeight > currentAmpHeight) {
      if (overflow) {
        setStyle(overflow, "display", "");
        resizeCsa(container, currentAmpHeight - overflowHeight);
      } else {
        createOverflow(global2, container, requestedHeight);
      }
    }
  }
  function requestCsaAds(global2, data, afsP, afsA, afshP, afshA) {
    var type = getAdType(data);
    var callback2 = callbackWithNoBackfill.bind(null, global2);
    var callbackBackfill = callbackWithBackfill.bind(null, global2, afsP, afsA);
    switch (type) {
      case AD_TYPE.AFS:
        afsA["adLoadedCallback"] = callback2;
        global2._googCsa("ads", afsP, afsA);
        break;
      case AD_TYPE.AFSH:
        afshA["adLoadedCallback"] = callback2;
        global2._googCsa("plas", afshP, afshA);
        break;
      case AD_TYPE.AFSH_BACKFILL:
        afshA["adLoadedCallback"] = callbackBackfill;
        global2._googCsa("plas", afshP, afshA);
        break;
    }
  }
  function getAdType(data) {
    if (data["afsPageOptions"] != null && data["afshPageOptions"] == null) {
      return AD_TYPE.AFS;
    }
    if (data["afsPageOptions"] == null && data["afshPageOptions"] != null) {
      return AD_TYPE.AFSH;
    }
    if (data["afsPageOptions"] != null && data["afshPageOptions"] != null) {
      return AD_TYPE.AFSH_BACKFILL;
    } else {
      return AD_TYPE.UNSUPPORTED;
    }
  }
  function callbackWithNoBackfill(global2, containerName, hasAd) {
    if (hasAd) {
      resizeIframe(global2, containerName);
    } else {
      global2.context.noContentAvailable();
    }
  }
  function callbackWithBackfill(global2, page, ad, containerName, hasAd) {
    if (hasAd) {
      resizeIframe(global2, containerName);
    } else {
      ad["adLoadedCallback"] = callbackWithNoBackfill.bind(null, global2);
      global2["_googCsa"]("ads", page, ad);
    }
  }
  function resizeIframe(global2, containerName) {
    var container = global2.document.getElementById(containerName);
    var height = container.offsetHeight;
    currentAmpHeight = global2.context.initialIntersection.boundingClientRect.height;
    if (height > currentAmpHeight) {
      createOverflow(global2, container, height);
    }
    requestResizeInternal(global2, devAssert(container), height);
  }
  function requestResizeInternal(global2, container, height) {
    global2.context.requestResize(void 0, height).then(function() {
      resizeSuccessHandler(global2, container, height);
    }).catch(function() {
      resizeDeniedHandler(global2, container, height);
    });
  }
  function createOverflow(global2, container, height) {
    var overflow = getOverflowElement(global2);
    overflow.onclick = function() {
      return requestResizeInternal(global2, container, height);
    };
    global2.document.getElementById("c").appendChild(overflow);
    resizeCsa(container, currentAmpHeight - overflowHeight);
  }
  function getOverflowElement(global2) {
    var overflow = global2.document.createElement("div");
    overflow.id = "overflow";
    setStyles(overflow, {
      position: "absolute",
      height: overflowHeight + "px",
      width: "100%"
    });
    overflow.appendChild(getOverflowLine(global2));
    overflow.appendChild(getOverflowChevron(global2));
    return overflow;
  }
  function getOverflowLine(global2) {
    var line = global2.document.createElement("div");
    setStyles(line, {
      background: "rgba(0,0,0,.16)",
      height: "1px"
    });
    return line;
  }
  function getOverflowChevron(global2) {
    var svg2 = '<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 48 48" fill="#757575"><path d="M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z"/><path d="M0-.75h48v48H0z" fill="none"/> </svg>';
    var chevron = global2.document.createElement("div");
    setStyles(chevron, {
      width: "36px",
      height: "36px",
      marginLeft: "auto",
      marginRight: "auto",
      display: "block"
    });
    chevron.innerHTML = svg2;
    return chevron;
  }
  function resizeCsa(container, height) {
    var iframe = container.firstElementChild;
    if (iframe) {
      setStyles(iframe, {
        height: height + "px",
        width: "100%"
      });
    }
    setStyle(container, "height", height + "px");
  }

  // ads/vendors/dable.js
  function dable(global2, data) {
    validateData(data, ["widgetId"]);
    global2.dable = global2.dable || function() {
      (global2.dable.q = global2.dable.q || []).push(arguments);
    };
    global2.dable("setService", data["serviceName"] || global2.window.context.location.hostname);
    global2.dable("setURL", global2.window.context.sourceUrl);
    global2.dable("setRef", global2.window.context.referrer);
    var slot = global2.document.createElement("div");
    slot.id = "_dbl_" + Math.floor(Math.random() * 1e5);
    slot.setAttribute("data-widget_id", data["widgetId"]);
    var divContainer = global2.document.getElementById("c");
    if (divContainer) {
      divContainer.appendChild(slot);
    }
    var itemId = data["itemId"] || "";
    var opts = {};
    if (itemId) {
      global2.dable("sendLog", "view", {
        id: itemId
      });
    } else {
      opts.ignoreItems = true;
    }
    global2.dable("renderWidget", slot.id, itemId, opts, function(hasAd) {
      if (hasAd) {
        global2.context.renderStart();
      } else {
        global2.context.noContentAvailable();
      }
    });
    loadScript(global2, "https://static.dable.io/dist/plugin.min.js");
  }

  // ads/vendors/digiteka.js
  function digiteka(global2, data) {
    global2._digiteka_amp = {
      allowed_data: ["mdtk", "zone", "adunit", "params"],
      mandatory_data: ["mdtk", "zone"],
      data
    };
    validateData(data, global2._digiteka_amp.mandatory_data, global2._digiteka_amp.allowed_data);
    loadScript(global2, "https://ot.digiteka.com/amp.js");
  }

  // ads/vendors/directadvert.js
  function directadvert(global2, data) {
    validateData(data, ["blockId"]);
    var params = {
      "async": 1,
      "div": "c"
    };
    if (global2.context.referrer) {
      params["amp_rref"] = encodeURIComponent(global2.context.referrer);
    }
    if (global2.context.canonicalUrl) {
      params["amp_rurl"] = encodeURIComponent(global2.context.canonicalUrl);
    }
    var serverName = data["serverName"] || "code.directadvert.ru";
    var url = "//" + encodeURIComponent(serverName) + "/data/" + encodeURIComponent(data["blockId"]) + ".js?" + serializeQueryString(params);
    loadScript(global2, url, function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/distroscale.js
  function distroscale(global2, data) {
    validateData(data, ["pid"], ["zid", "tid"]);
    var src = "//c.jsrdn.com/s/cs.js?p=" + encodeURIComponent(data.pid);
    if (data.zid) {
      src += "&z=" + encodeURIComponent(data.zid);
    } else {
      src += "&z=amp";
    }
    if (data.tid) {
      src += "&t=" + encodeURIComponent(data.tid);
    }
    var srcUrl = global2.context.sourceUrl;
    srcUrl = srcUrl.replace(/#.+/, "").replace(/\?.+/, "");
    src += "&f=" + encodeURIComponent(srcUrl);
    global2.dsAMPCallbacks = {
      renderStart: global2.context.renderStart,
      noContentAvailable: global2.context.noContentAvailable
    };
    loadScript(global2, src, function() {
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/dotandads.js
  function dotandads(global2, data) {
    global2.data = data;
    writeScript(global2, "https://amp.ad.dotandad.com/dotandadsAmp.js");
  }

  // ads/vendors/dynad.js
  function dynad(global2, data) {
    validateData(data, ["src"], []);
    validateSrcPrefix("https:", data.src);
    validateSrcContains("/t.dynad.net/", data.src);
    writeScript(global2, data.src);
  }

  // ads/vendors/eadv.js
  function eadv(global2, data) {
    validateData(data, ["x", "u"], []);
    writeScript(global2, "https://www.eadv.it/track/?x=" + data.x + "&u=" + data.u);
  }

  // ads/vendors/empower.js
  function empower(global2, data) {
    validateData(data, ["site", "zone"], ["category"]);
    global2.category = data.category || "general";
    global2.site = data.site + ":general";
    global2.zone = data.zone;
    global2.iwidth = data.width;
    global2.iheight = data.height;
    writeScript(global2, "https://cdn.empower.net/sdk/amp-ad.min.js");
  }

  // ads/vendors/engageya.js
  function engageya(global2, data) {
    validateData(data, ["widgetids"]);
    global2._engageya = global2._engageya || {
      viewId: global2.context.pageViewId,
      widgetIds: data["widgetids"],
      websiteId: data["websiteid"],
      publisherId: data["publisherid"],
      url: data["url"] || global2.context.canonicalUrl,
      ampURL: data["ampurl"] || global2.context.sourceUrl,
      mode: data["mode"] || 1,
      style: data["stylecss"] || "",
      referrer: global2.context.referrer
    };
    loadScript(global2, "https://widget.engageya.com/engageya_amp_loader.js");
  }

  // ads/vendors/epeex.js
  function epeex(global2, data) {
    global2._epeex = global2._epeex || {
      account: data["account"] || "demoepeex",
      channel: data["channel"] || "1",
      htmlURL: data["htmlurl"] || encodeURIComponent(global2.context.canonicalUrl),
      ampURL: data["ampurl"] || encodeURIComponent(global2.context.sourceUrl),
      testMode: data["testmode"] || "false"
    };
    loadScript(global2, "https://epeex.com/related/service/widget/amp/remote.js");
  }

  // ads/vendors/eplanning.js
  function eplanning(global2, data) {
    validateData(data, ["epl_si", "epl_isv", "epl_sv", "epl_sec", "epl_kvs", "epl_e"]);
    (global2._eplanning = global2._eplanning || []).push({
      sI: data.epl_si,
      isV: data.epl_isv,
      sV: data.epl_sv,
      sec: data.epl_sec,
      kVs: data.epl_kvs,
      e: data.epl_e
    });
    loadScript(global2, "https://us.img.e-planning.net/layers/epl-amp.js");
  }

  // ads/vendors/ezoic.js
  function ezoic(global2, data) {
    validateData(data, [], ["slot", "targeting", "extras"]);
    loadScript(global2, "https://g.ezoic.net/ezoic/ampad.js", function() {
      loadScript(global2, "https://www.googletagservices.com/tag/js/gpt.js", function() {
        global2.googletag.cmd.push(function() {
          new window.EzoicAmpAd(global2, data).createAd();
        });
      });
    });
  }

  // ads/vendors/f1e.js
  function f1e(global2, data) {
    validateData(data, ["url", "target"], []);
    global2.f1eData = data;
    writeScript(global2, "https://img.ak.impact-ad.jp/util/f1e_amp.min.js");
  }

  // ads/vendors/f1h.js
  function f1h(global2, data) {
    validateData(data, ["sectionId", "slot"]);
    var scriptUrl2 = data["debugsrc"] || "https://img.ak.impact-ad.jp/fh/f1h_amp.js";
    global2.f1hData = data;
    loadScript(global2, scriptUrl2);
  }

  // ads/vendors/_fakedelayed_.js
  function fakeDelayed(global2, data) {
    validateData(data, ["src", "bootstrapScript"]);
    var iframe = global2.document.createElement("iframe");
    iframe.setAttribute("id", "creative");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("marginheight", "0");
    iframe.setAttribute("marginwidth", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("src", data["src"]);
    setStyles(iframe, {
      border: "0 none transparent",
      position: "relative",
      height: "100%",
      width: "100%"
    });
    global2.document.getElementById("c").appendChild(iframe);
    writeScript(global2, data["bootstrapScript"]);
  }

  // ads/vendors/feedad.js
  function feedad(global2, data) {
    validateData(data, ["clientToken", "placementId"], ["background"]);
    global2.feedad = global2.feedad || {
      cmd: []
    };
    global2.feedad.cmd.push(function() {
      global2.feedad.sdk.init(data.clientToken).then(function() {
        return global2.feedad.sdk.requestAd(data.placementId);
      }).then(function(response) {
        var ad = response.createAdContainer();
        var container = global2.document.getElementById("c");
        applyContainerStyle(container, data);
        container.appendChild(ad);
        global2.context.renderStart();
        global2.context.reportRenderedEntityIdentifier("FeedAd");
        return response.promise;
      }).catch(function() {
        global2.context.noContentAvailable();
      });
    });
    loadScript(global2, "https://web.feedad.com/sdk/feedad-async.js");
  }
  function applyContainerStyle(container, data) {
    setStyle(container, "display", "flex");
    setStyle(container, "flexDirection", "row");
    setStyle(container, "justifyContent", "stretch");
    setStyle(container, "alignItems", "center");
    if (data.background) {
      setStyle(container, "backgroundColor", data.background);
    }
  }

  // ads/vendors/felmat.js
  function felmat(global2, data) {
    validateData(data, ["host", "fmt", "fmk", "fmp"]);
    global2.fmParam = data;
    writeScript(global2, "https://t." + encodeURIComponent(data.host) + "/js/fmamp.js");
  }

  // ads/vendors/finative.js
  function finative(global2, data) {
    writeScript(global2, "https://d.finative.cloud/cds/delivery/init?url=" + encodeURIComponent(data.url));
  }

  // ads/vendors/firstimpression.js
  function firstimpression(global2, data) {
    validateData(data, ["zoneId", "websiteId"]);
    var _global$context$locat = global2.context.location, hash = _global$context$locat.hash, search = _global$context$locat.search;
    var parameters = Object.assign(parseQueryString(hash), parseQueryString(search));
    var cdnHost = "https://" + (parameters["fi_ecdnhost"] || "ecdn.firstimpression.io");
    var cdnpath = parameters["fi_ecdnpath"] || "/static/js/fiamp.js";
    global2.params = data;
    writeScript(global2, cdnHost + cdnpath);
  }

  // ads/vendors/flite.js
  function flite(global2, data) {
    validateData(data, [], ["guid", "mixins"]);
    var guid = data.guid, o = global2, e = encodeURIComponent, x = 0;
    var r = "", dep = "";
    o.FLITE = o.FLITE || {};
    o.FLITE.config = o.FLITE.config || {};
    o.FLITE.config[guid] = o.FLITE.config[guid] || {};
    o.FLITE.config[guid].cb = Math.random();
    o.FLITE.config[guid].ts = +Number(new Date());
    r = global2.context.location.href;
    var m = r.match(new RegExp("[A-Za-z]+:[/][/][A-Za-z0-9.-]+"));
    dep = data.mixins ? "&dep=" + data.mixins : "";
    var url = ["https://r.flite.com/syndication/uscript.js?i=", e(guid), "&v=3", dep, "&x=us", x, "&cb=", o.FLITE.config[guid].cb, "&d=", e(m && m[0] || r), "&tz=", new Date().getTimezoneOffset()].join("");
    loadScript(o, url);
  }

  // ads/vendors/fluct.js
  function fluct(global2, data) {
    validateData(data, ["g", "u"]);
    if (data["tagtype"] === "api") {
      var cls = "fluct-unit-" + data["u"];
      var d = global2.document.createElement("div");
      d.setAttribute("class", cls);
      global2.document.getElementById("c").appendChild(d);
      loadScript(global2, "https://pdn.adingo.jp/p.js", function() {
        fluctAdScript.cmd.push(function(cmd) {
          cmd.loadByGroup(data["g"]);
          cmd.display("." + cls, data["u"]);
        });
      });
    } else {
      writeScript(global2, "https://cdn-fluct.sh.adingo.jp/f.js?G=" + encodeURIComponent(data["g"]), function() {
        adingoFluct.showAd(data["u"]);
      });
    }
  }

  // ads/vendors/forkmedia.js
  function forkmedia(global2, data) {
    var src = null;
    if (data.product === "contextads") {
      switch (data.format) {
        case "inread":
          src = "https://amp.contextads.live/inread/inread.js";
          break;
        case "vibe":
          src = "https://amp.contextads.live/vibe/iav_ia.js";
          break;
        case "display":
          src = "https://amp.contextads.live/display/display.js";
          break;
        case "impulse":
          src = "https://amp.contextads.live/impulse/impulse.js";
          break;
        case "interscroller":
          src = "https://amp.contextads.live/interscroller/fis.js";
          break;
        case "spark":
          src = "https://amp.contextads.live/spark/spark.js";
          break;
        default:
          src = "https://amp.contextads.live/default.js";
      }
    } else {
      src = "https://amp.contextads.live/default.js";
    }
    loadScript(global2, src, function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/freewheel.js
  function freewheel(global2, data) {
    global2._freewheel_amp = {
      data
    };
    validateData(data, ["zone"], ["zone", "gdpr", "gdpr_consent", "gdpr_consented_providers", "useCCPA_USPAPI", "_fw_us_privacy", "useCMP", "zIndex", "blurDisplay", "timeline", "soundButton", "defaultMute", "onOver", "closeAction", "errorAction", "pauseRatio", "label", "vastUrlParams"]);
    loadScript(global2, "https://cdn.stickyadstv.com/prime-time/fw-amp.min.js");
  }

  // ads/vendors/fusion.js
  function queryParametersToObject(input) {
    if (!input) {
      return void 0;
    }
    return input.split("&").filter(Boolean).reduce(function(obj, val) {
      var _Object$assign;
      var kv = val.split("=");
      return Object.assign(obj, (_Object$assign = {}, _Object$assign[kv[0]] = kv[1] || true, _Object$assign));
    }, {});
  }
  function fusion(global2, data) {
    validateData(data, [], ["mediaZone", "layout", "adServer", "space", "parameters"]);
    var container = global2.document.getElementById("c");
    var ad = global2.document.createElement("div");
    ad.setAttribute("data-fusion-space", data.space);
    container.appendChild(ad);
    var parameters = queryParametersToObject(data.parameters);
    writeScript(global2, "https://assets.adtomafusion.net/fusion/latest/fusion-amp.min.js", function() {
      global2.Fusion.apply(container, global2.Fusion.loadAds(data, parameters));
      global2.Fusion.on.warning.run(function(ev) {
        if (ev.msg === "Space not present in response.") {
          global2.context.noContentAvailable();
        }
      });
    });
  }

  // ads/vendors/genieessp.js
  function genieessp(global2, data) {
    validateData(data, ["vid", "zid"]);
    global2.data = data;
    writeScript(global2, "https://js.gsspcln.jp/l/amp.js");
  }

  // ads/vendors/giraff.js
  function giraff(global2, data) {
    validateData(data, ["blockName"]);
    var serverName = data["serverName"] || "code.giraff.io";
    var url = "//" + encodeURIComponent(serverName) + "/data/widget-" + encodeURIComponent(data["blockName"]) + ".js";
    loadScript(global2, url, function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
    var anchorEl = global2.document.createElement("div");
    var widgetId = data["widgetId"] ? "_" + data["widgetId"] : "";
    anchorEl.id = "grf_" + data["blockName"] + widgetId;
    global2.document.getElementById("c").appendChild(anchorEl);
  }

  // ads/vendors/glomex.js
  function glomex(global2, data) {
    validateData(data, ["integrationId"]);
    loadScript(global2, "https://player.glomex.com/integration/1/amp-embed.js");
  }

  // ads/vendors/gmossp.js
  var gmosspFields = ["id"];
  function gmossp(global2, data) {
    validateData(data, gmosspFields, []);
    global2.gmosspParam = data;
    writeScript(global2, "https://cdn.gmossp-sp.jp/ads/amp.js");
  }

  // ads/vendors/gumgum.js
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
  function gumgum(global2, data) {
    validateData(data, ["zone", "slot"]);
    var win = window, ctx = win.context, dom = global2.document.getElementById("c"), ampWidth = parseInt(data.width || "0", 10), ampHeight = parseInt(data.height || "0", 10), ggevents = global2.ggevents || [];
    var max = Math.max, slotId = parseInt(data.slot, 10), onLoad = function onLoad2(type) {
      return function(evt) {
        var ad = _extends2({
          width: 0,
          height: 0
        }, evt.ad || {}), identifier = ["GUMGUM", type, evt.id].join("_");
        ctx.reportRenderedEntityIdentifier(identifier);
        ctx.renderStart({
          width: max(ampWidth, ad.width),
          height: max(ampHeight, ad.height)
        });
      };
    }, noFill = function noFill2() {
      ctx.noContentAvailable();
    };
    global2.ggv2id = data.zone;
    global2.ggevents = ggevents;
    global2.sourceUrl = context.sourceUrl;
    global2.sourceReferrer = context.referrer;
    if (slotId) {
      var ins = global2.document.createElement("div");
      setStyles(ins, {
        display: "block",
        width: "100%",
        height: "100%"
      });
      ins.setAttribute("data-gg-slot", slotId);
      ins.setAttribute("pl", 2);
      dom.appendChild(ins);
      ggevents.push({
        "slot.nofill": noFill,
        "slot.close": noFill,
        "slot.load": onLoad("SLOT")
      });
      loadScript(global2, "https://js.gumgum.com/slot.js");
    } else {
      ctx.noContentAvailable();
    }
  }

  // ads/vendors/holder.js
  function holder(global2, data) {
    validateData(data, ["block"], []);
    var wcl = global2.context.location;
    var n4 = navigator.userAgent;
    var l = "&r" + Math.round(Math.random() * 1e7) + "&h" + wcl.href;
    if (!(n4.indexOf("Safari") != -1 && n4.indexOf("Chrome") == -1)) {
      l += "&c1";
    }
    data.queue = l;
    writeScript(global2, "https://i.holder.com.ua/js2/holder/ajax/ampv1.js");
  }

  // ads/vendors/ibillboard.js
  var validHosts = ["https://go.eu.bbelements.com", "https://go.idnes.bbelements.com", "https://go.goldbachpoland.bbelements.com", "https://go.pol.bbelements.com", "https://go.idmnet.bbelements.com"];
  function ibillboard(global2, data) {
    validateData(data, ["src"]);
    var src = data.src;
    validateSrcPrefix(validHosts, src);
    writeScript(global2, src);
  }

  // ads/vendors/idealmedia.js
  function idealmedia(global2, data) {
    validateData(data, ["publisher", "widget", "container"], ["url", "options"]);
    var scriptRoot = document.createElement("div");
    scriptRoot.id = data.container;
    document.body.appendChild(scriptRoot);
    function getResourceFilePath(publisher) {
      var publisherStr = publisher.replace(/[^A-z0-9]/g, "");
      return publisherStr[0] + "/" + publisherStr[1];
    }
    var url = "https://jsc.idealmedia.io/" + getResourceFilePath(data.publisher) + "/" + (encodeURIComponent(data.publisher) + ".") + (encodeURIComponent(data.widget) + ".js?t=") + Math.floor(Date.now() / 36e5);
    global2.uniqId = ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5);
    window["ampOptions" + data.widget + "_" + global2.uniqId] = data.options;
    global2.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        window["intersectionRect" + data.widget + "_" + global2.uniqId] = c.intersectionRect;
        window["boundingClientRect" + data.widget + "_" + global2.uniqId] = c.boundingClientRect;
      });
    });
    loadScript(global2, data.url || url);
  }

  // ads/google/ima/ima-player-data.js
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
  var ImaPlayerData = /* @__PURE__ */ function() {
    function ImaPlayerData2() {
      _classCallCheck11(this, ImaPlayerData2);
      this.currentTime = 0;
      this.duration = 1;
      this.playedRanges = [];
    }
    _createClass10(ImaPlayerData2, [{
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
    var root = html2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose([`
    <div class="fill">
      <div class="fill">
        <video
          ref="video"
          playsinline
          controlslist="nodownload nofullscreen noremoteplayback"
        >
          <!-- Video children are later propagated from the iframe's name. -->
        </video>
      </div>

      <div ref="adContainer" class="fill" hidden>
        <!-- This subtree may be modified by the IMA SDK. -->
      </div>

      <div ref="controls" hidden>
        <button ref="playButton"></button>

        <div class="countdownWrapper">
          <div ref="countdown">
            <!-- Text content updated using data-ad-label onAdProgress(). -->
          </div>
        </div>

        <div ref="time">
          <!-- Text content must match format in updateTime(). -->
          -:- / 0:00
        </div>

        <div ref="progress">
          <div ref="progressLine"></div>
          <div ref="progressMarker"></div>
        </div>

        <button ref="muteButton"></button>
        <button ref="fullscreenButton"></button>
      </div>

      <button ref="overlayButton" class="fill"></button>
    </div>
  `])));
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
  function imaVideo(global2, data) {
    insertCss(global2.document.head, cssText);
    videoWidth = global2.innerWidth;
    videoHeight = global2.innerHeight;
    adLabel = data.adLabel || "Ad (%s of %s)";
    elements = renderElements(global2.document);
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
    maybeAppendChildren(global2.document, video, tryParseJson(data["sourceChildren"]));
    if (data.imaSettings) {
      imaSettings = tryParseJson(data.imaSettings);
    }
    global2.document.getElementById("c").appendChild(elements["root"]);
    window.addEventListener("message", onMessage.bind(null, global2));
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
      overlayButton.addEventListener("tapwithoutdrag", onOverlayButtonInteract.bind(null, global2));
    } else {
      overlayButton.addEventListener(interactEvent, onOverlayButtonInteract.bind(null, global2));
    }
    playButton.addEventListener(interactEvent, onPlayPauseClick);
    progress.addEventListener(mouseDownEvent, onProgressClick);
    muteButton.addEventListener(interactEvent, onMuteUnmuteClick);
    fullscreenButton.addEventListener(interactEvent, toggleFullscreen.bind(null, global2));
    showControlsThrottled = throttle(window, showControls, 1e3);
    var fullScreenEvents = ["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange"];
    fullScreenEvents.forEach(function(fsEvent) {
      global2.document.addEventListener(fsEvent, onFullscreenChange.bind(null, global2), false);
    });
    consentState = global2.context.initialConsentState;
    if (consentState == 4) {
      onImaLoadFail();
    } else {
      loadScript(global2, "https://imasdk.googleapis.com/js/sdkloader/ima3.js", function() {
        return onImaLoadSuccess(global2, data);
      }, onImaLoadFail);
    }
  }
  function addHoverEventToElement(element, callback2) {
    element.addEventListener(interactEvent, callback2);
    element.addEventListener(mouseMoveEvent, callback2);
  }
  function removeHoverEventFromElement(element, callback2) {
    element.removeEventListener(interactEvent, callback2);
    element.removeEventListener(mouseMoveEvent, callback2);
  }
  function onImaLoadSuccess(global2, data) {
    if (imaSettings) {
      if (imaSettings["locale"]) {
        global2.google.ima.settings.setLocale(imaSettings["locale"]);
      }
      if (imaSettings["vpaidMode"]) {
        global2.google.ima.settings.setVpaidMode(imaSettings["vpaidMode"]);
      }
    }
    var _elements5 = elements, adContainer = _elements5["adContainer"], video = _elements5["video"];
    adDisplayContainer = new global2.google.ima.AdDisplayContainer(adContainer, video);
    adsLoader = new global2.google.ima.AdsLoader(adDisplayContainer);
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
    adsLoader.addEventListener(global2.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded.bind(null, global2), false);
    adsLoader.addEventListener(global2.google.ima.AdErrorEvent.Type.AD_ERROR, onAdsLoaderError, false);
    video.addEventListener("ended", onContentEnded);
    adsRequest = new global2.google.ima.AdsRequest();
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
  function onOverlayButtonInteract(global2) {
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
      playAds(global2);
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
  function playAds(global2) {
    if (!imaLoadAllowed) {
      playVideo();
      return;
    }
    if (!adsRequested) {
      requestAds();
      playAds(global2);
      return;
    } else if (adsManager) {
      try {
        adsManager.init(videoWidth, videoHeight, global2.google.ima.ViewMode.NORMAL);
        adsManager.start();
      } catch (adError) {
        playVideo();
      }
    } else if (!adRequestFailed) {
      setTimeout(playAds.bind(null, global2), 250);
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
  function onAdsManagerLoaded(global2, adsManagerLoadedEvent) {
    var adsRenderingSettings = new global2.google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    adsManager = adsManagerLoadedEvent.getAdsManager(elements["video"], adsRenderingSettings);
    adsManager.addEventListener(global2.google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
    adsManager.addEventListener(global2.google.ima.AdEvent.Type.LOADED, onAdLoad);
    adsManager.addEventListener(global2.google.ima.AdEvent.Type.PAUSED, onAdPaused);
    adsManager.addEventListener(global2.google.ima.AdEvent.Type.RESUMED, onAdResumed);
    adsManager.addEventListener(global2.google.ima.AdEvent.Type.AD_PROGRESS, onAdProgress);
    adsManager.addEventListener(global2.google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested.bind(null, global2));
    adsManager.addEventListener(global2.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested);
    adsManager.addEventListener(global2.google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAllAdsCompleted);
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
  function onAdLoad(global2) {
    currentAd = global2.getAd();
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
  function onContentPauseRequested(global2) {
    if (adsManagerWidthOnLoad) {
      adsManager.resize(adsManagerWidthOnLoad, adsManagerHeightOnLoad, global2.google.ima.ViewMode.NORMAL);
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
  function exitFullscreen(global2) {
    var cancelFullscreen = global2.document.exitFullscreen || global2.document.exitFullScreen || global2.document.webkitCancelFullScreen || global2.document.mozCancelFullScreen;
    if (cancelFullscreen) {
      cancelFullscreen.call(document);
    }
  }
  function enterFullscreen(global2) {
    var requestFullscreen = global2.document.documentElement.requestFullscreen || global2.document.documentElement.webkitRequestFullscreen || global2.document.documentElement.mozRequestFullscreen || global2.document.documentElement.requestFullScreen || global2.document.documentElement.webkitRequestFullScreen || global2.document.documentElement.mozRequestFullScreen;
    if (requestFullscreen) {
      fullscreenWidth = window.screen.width;
      fullscreenHeight = window.screen.height;
      requestFullscreen.call(global2.document.documentElement);
    } else {
      var _elements16 = elements, video = _elements16["video"];
      video.webkitEnterFullscreen();
      video.addEventListener("webkitendfullscreen", pauseVideo);
      nativeFullscreen = true;
      onFullscreenChange(global2);
    }
  }
  function toggleFullscreen(global2) {
    if (fullscreen2) {
      exitFullscreen(global2);
      return;
    }
    enterFullscreen(global2);
  }
  function onFullscreenChange(global2) {
    if (fullscreen2) {
      if (adsManager) {
        adsManager.resize(videoWidth, videoHeight, global2.google.ima.ViewMode.NORMAL);
        adsManagerWidthOnLoad = null;
        adsManagerHeightOnLoad = null;
      }
      fullscreen2 = false;
    } else {
      if (!nativeFullscreen) {
        if (adsManager) {
          adsManager.resize(fullscreenWidth, fullscreenHeight, global2.google.ima.ViewMode.FULLSCREEN);
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
  function onMessage(global2, event) {
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
          onOverlayButtonInteract(global2);
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
            adsManager.resize(args.width, args.height, global2.google.ima.ViewMode.NORMAL);
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
        enterFullscreen(global2);
        break;
      case "exitFullscreen":
        if (!fullscreen2) {
          return;
        }
        exitFullscreen(global2);
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

  // ads/vendors/imedia.js
  function imedia(global2, data) {
    validateData(data, ["id", "positions"]);
    var positions = JSON.parse(data.positions);
    var mW = context.isMaster ? global2 : context.master;
    var parentElement = document.createElement("div");
    parentElement.id = data.id;
    global2.document.getElementById("c").appendChild(parentElement);
    if (!mW.inPagePositions) {
      mW.inPagePositions = [];
    }
    mW.inPagePositions.push({
      parentElement,
      context: global2.context
    });
    computeInMasterFrame(global2, "imedia-load", function(done) {
      loadScript(global2, "https://i.imedia.cz/js/im3.js", function() {
        if (global2.im != null) {
          mW.im = global2.im;
          mW.im.conf.referer = context.canonicalUrl;
          mW.im.getAds(positions, {
            AMPcallback: function AMPcallback(ads) {
              mW.ads = ads;
              done(null);
            }
          });
        }
      });
    }, function() {
      mW.inPagePositions = mW.inPagePositions.filter(function(inPagePostion) {
        var used = true;
        positions.filter(function(position, index) {
          if (inPagePostion.parentElement.id == position.id) {
            used = false;
            position.id = inPagePostion.parentElement;
            if (mW.im.writeAd) {
              mW.im.writeAd(mW.ads[index], position);
              if (mW.ads[index].impress) {
                inPagePostion.context.renderStart();
              } else {
                inPagePostion.context.noContentAvailable();
              }
            }
            return false;
          }
        });
        return used;
      });
    });
  }

  // ads/vendors/imobile.js
  function imobile(global2, data) {
    global2.imobileParam = data;
    writeScript(global2, "https://spamp.i-mobile.co.jp/script/amp.js");
  }

  // ads/google/doubleclick.js
  var TAG2 = "DOUBLECLICK - DEPRECATED";
  function doubleclick(opt_global, opt_data) {
    dev().error(TAG2, "The use of doubleclick.js has been deprecated. Please switch to Fast Fetch. See documentation here: https://github.com/ampproject/amphtml/issues/11834");
  }

  // ads/vendors/imonomy.js
  var DEFAULT_TIMEOUT = 500;
  var EVENT_SUCCESS = 0;
  var EVENT_TIMEOUT = 1;
  var EVENT_ERROR = 2;
  var EVENT_BADTAG = 3;
  var imonomyData = ["pid", "subId", "timeout"];
  function imonomy(global2, data) {
    if (!("slot" in data)) {
      global2.CasaleArgs = data;
      writeScript(global2, "//tag.imonomy.com/" + data.pid + "/indexJTag.js");
    } else {
      var calledDoubleclick = false;
      data.timeout = isNaN(data.timeout) ? DEFAULT_TIMEOUT : data.timeout;
      var timer = setTimeout(function() {
        callDoubleclick(EVENT_TIMEOUT);
      }, data.timeout);
      var callDoubleclick = function callDoubleclick2(code) {
        if (calledDoubleclick) {
          return;
        }
        calledDoubleclick = true;
        clearTimeout(timer);
        reportStats(data, code);
        prepareData(data);
        doubleclick(global2, data);
      };
      if (typeof data.pid === "undefined" || isNaN(data.pid)) {
        callDoubleclick(EVENT_BADTAG);
        return;
      }
      global2.IndexArgs = {
        ampCallback: callDoubleclick,
        ampSuccess: EVENT_SUCCESS,
        ampError: EVENT_ERROR
      };
      loadScript(global2, "//tag.imonomy.com/amp/" + data.pid + "/amp.js", function() {
        global2.context.renderStart();
      }, function() {
        global2.context.noContentAvailable();
      });
    }
  }
  function prepareData(data) {
    for (var attr in data) {
      if (hasOwn(data, attr) && imonomyData.indexOf(attr) >= 0) {
        delete data[attr];
      }
    }
    data.targeting = data.targeting || {};
    data.targeting["IMONOMY_AMP"] = "1";
  }
  function reportStats(data, code) {
    try {
      if (code == EVENT_BADTAG) {
        return;
      }
      var xhttp = new XMLHttpRequest();
      xhttp.withCredentials = true;
      var unitFormat = "";
      var pageLocation = "";
      if (typeof window.context.location.href !== "undefined") {
        pageLocation = encodeURIComponent(window.context.location.href);
      }
      var pid = data.pid, subId = data.subId, trackId = "AMP", notFirst = true, cid = "", abLabel = "", rand = Math.random();
      if (!isNaN(data.width) && !isNaN(data.height)) {
        unitFormat = data.width + "x" + data.height;
      }
      var uid = "", isLocked = false, isTrackable = false, isClient = false, tier = 0;
      var baseUrl = "//srv.imonomy.com/internal/reporter";
      var unitCodeUrl = baseUrl + "?v=2&subid=" + subId + "&sid=" + pid + "&";
      unitCodeUrl = unitCodeUrl + ("format=" + unitFormat + "&ai=");
      unitCodeUrl = unitCodeUrl + (trackId + "&ctxu=" + pageLocation + "&");
      unitCodeUrl = unitCodeUrl + ("fb=" + notFirst + "&");
      unitCodeUrl = unitCodeUrl + ("cid=" + cid + " &ab=" + abLabel + "&cbs=" + rand);
      if (uid) {
        unitCodeUrl = unitCodeUrl + ("&uid=" + uid);
      }
      if (isLocked) {
        unitCodeUrl = unitCodeUrl + ("&is_locked=" + isLocked);
      }
      if (isTrackable) {
        unitCodeUrl = unitCodeUrl + ("&istrk=" + isTrackable);
      }
      if (isClient) {
        unitCodeUrl = unitCodeUrl + ("&is_client=" + isClient);
        if (tier) {
          unitCodeUrl = unitCodeUrl + ("&tier=" + tier);
        }
      }
      xhttp.open("GET", unitCodeUrl, true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send();
    } catch (e) {
    }
  }

  // ads/vendors/improvedigital.js
  function improvedigital(global2, data) {
    validateData(data, ["placement"], ["width", "height", "optin", "keyvalue"]);
    var url = "https://ad.360yield.com/adj?p=" + encodeURIComponent(data.placement) + "&w=" + encodeURIComponent(data.width) + "&h=" + encodeURIComponent(data.height) + "&optin=" + encodeURIComponent(data.optin) + "&tz=" + new Date().getTimezoneOffset();
    var value = data.keyvalue;
    var newData = "";
    var amps = "&";
    var validKey = 0;
    if (value && value.length > 0) {
      var keys = value.split("&");
      for (var i = 0; i < keys.length; i++) {
        if (!keys[i]) {
          continue;
        }
        var segment = keys[i].split("=");
        var segment1 = segment[1] ? encodeURIComponent(segment[1]) : "";
        if (validKey > 0) {
          newData += amps;
        }
        validKey++;
        newData += segment[0] + "=" + segment1;
      }
    }
    if (newData) {
      url += "&" + newData;
    }
    writeScript(global2, url);
  }

  // ads/vendors/inmobi.js
  function inmobi(global2, data) {
    validateData(data, ["siteid", "slotid"], []);
    var inmobiConf = {
      siteid: data.siteid,
      slot: data.slotid,
      manual: true,
      onError: function onError(code) {
        if (code == "nfr") {
          global2.context.noContentAvailable();
          setStyle(document.getElementById("my-ad-slot"), "display", "none");
        }
      },
      onSuccess: function onSuccess() {
        global2.context.renderStart();
      }
    };
    writeScript(global2, "https://cf.cdn.inmobi.com/ad/inmobi.secure.js", function() {
      global2.document.write("<div id='my-ad-slot'></div>");
      global2._inmobi.getNewAd(document.getElementById("my-ad-slot"), inmobiConf);
    });
  }

  // ads/vendors/innity.js
  function innity(global2, data) {
    validateData(data, ["pub", "zone"], ["channel"]);
    writeScript(global2, "https://cdn.innity.net/admanager.js", function() {
      var innityAMPZone = global2.innity_adZone;
      var innityAMPTag = new innityAMPZone(encodeURIComponent(data.pub), encodeURIComponent(data.zone), {
        width: data.width,
        height: data.height,
        channel: data.channel ? encodeURIComponent(data.channel) : ""
      });
      innityAMPTag.amp(global2.context);
      global2.context.renderStart();
    });
  }

  // ads/vendors/insticator.js
  function insticator(global2, data) {
    validateData(data, ["siteId", "embedId"]);
    global2.document.getElementById("c").appendChild(createTemplate(data["embedId"]));
    createAdsAndEmbed(data["siteId"], data["embedId"]);
  }
  function createTemplate(embedId) {
    var template = document.createElement("template");
    template.innerHTML = '\n    <div id="insticator-container">\n      <div id="div-insticator-ad-1"></div>\n      <div id="insticator-embed" embed-id="' + embedId + '"></div>\n      <div id="div-insticator-ad-2"></div>\n    </div>\n  ';
    return template.content;
  }
  function createAdsAndEmbed(siteId, embedId) {
    var a2 = window;
    var c = document;
    var s = "script";
    var u = "//d3lcz8vpax4lo2.cloudfront.net/ads-code/" + siteId + ".js";
    "Insticator" in a2 || (a2.Insticator = {
      ad: {
        loadAd: function loadAd(b2) {
          a2.Insticator.ad.q.push(b2);
        },
        q: []
      },
      helper: {},
      embed: {},
      version: "4.0",
      q: [],
      amp: null,
      load: function load(t, o) {
        a2.Insticator.amp = window.context;
        a2.Insticator.q.push({
          t,
          o
        });
      }
    });
    var b = c.createElement(s);
    b.src = u;
    b.async = true;
    var d = c.getElementsByTagName(s)[0];
    d.parentNode.insertBefore(b, d);
    a2.Insticator.ad.loadAd("div-insticator-ad-1");
    a2.Insticator.ad.loadAd("div-insticator-ad-2");
    a2.Insticator.load("em", {
      id: embedId
    });
    window.context.renderStart();
  }

  // ads/vendors/invibes.js
  function invibes(global2, data) {
    global2.invibesAmp = {
      allowedData: ["adCateg", "pid", "customEndpoint"],
      mandatoryData: [],
      data
    };
    validateData(data, global2.invibesAmp.mandatoryData, global2.invibesAmp.allowedData);
    var url = data.customEndpoint || "https://k.r66net.com/GetAmpLink";
    if (data.adCateg) {
      url = addQueryParam(url, "adCateg", data.adCateg);
    }
    if (data.pid) {
      url = addQueryParam(url, "pid", data.pid);
    }
    if (window && window.context && window.context.location && window.context.location.href) {
      url = addQueryParam(url, "referrerUrl", window.context.location.href);
    }
    loadScript(global2, url);
  }
  function addQueryParam(url, param, value) {
    var paramValue = encodeURIComponent(param) + "=" + encodeURIComponent(value);
    if (url.indexOf("?") > -1) {
      url += "&" + paramValue;
    } else {
      url += "?" + paramValue;
    }
    return url;
  }

  // ads/vendors/iprom.js
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
  function iprom(global2, data) {
    validateData(data, ["zone", "sitepath"], ["keywords", "channels"]);
    var ampdata = _extends3({
      sitepath: "[]",
      zone: [],
      keywords: "",
      channels: ""
    }, data);
    function namespaceLoaded() {
      var ipromNS = window.ipromNS || {};
      ipromNS.AdTag = ipromNS.AdTag || {};
      var config = {
        sitePath: parseJson(ampdata.sitepath),
        containerId: "c",
        zoneId: ampdata.zone,
        prebid: true,
        amp: true,
        keywords: ampdata.keywords ? ampdata.keywords.split(",") : [],
        channels: ampdata.channels ? ampdata.channels.split(",") : []
      };
      var tag2 = new ipromNS.AdTag(config);
      tag2.init();
    }
    writeScript(global2, "https://cdn.ipromcloud.com/ipromNS.js", namespaceLoaded);
  }

  // ads/vendors/ix.js
  var DEFAULT_TIMEOUT2 = 500;
  var EVENT_SUCCESS2 = 0;
  var EVENT_TIMEOUT2 = 1;
  var EVENT_ERROR2 = 2;
  var EVENT_BADTAG2 = 3;
  function ix(global2, data) {
    if (!("slot" in data)) {
      global2.CasaleArgs = data;
      writeScript(global2, "https://js-sec.indexww.com/indexJTag.js");
    } else {
      var start = Date.now();
      var calledDoubleclick = false;
      data.ixTimeout = isNaN(data.ixTimeout) ? DEFAULT_TIMEOUT2 : data.ixTimeout;
      var timer = setTimeout(function() {
        callDoubleclick(EVENT_TIMEOUT2);
      }, data.ixTimeout);
      var callDoubleclick = function callDoubleclick2(code) {
        if (calledDoubleclick) {
          return;
        }
        calledDoubleclick = true;
        clearTimeout(timer);
        reportStats2(data.ixId, data.ixSlot, data.slot, start, code);
        prepareData2(data);
        doubleclick(global2, data);
      };
      if (typeof data.ixId === "undefined" || isNaN(data.ixId)) {
        callDoubleclick(EVENT_BADTAG2);
        return;
      }
      global2.IndexArgs = {
        ampCallback: callDoubleclick,
        ampSuccess: EVENT_SUCCESS2,
        ampError: EVENT_ERROR2
      };
      loadScript(global2, "https://js-sec.indexww.com/apl/amp.js", void 0, function() {
        callDoubleclick(EVENT_ERROR2);
      });
    }
  }
  function prepareData2(data) {
    for (var attr in data) {
      if (hasOwn(data, attr) && /^ix[A-Z]/.test(attr)) {
        delete data[attr];
      }
    }
    data.targeting = data.targeting || {};
    data.targeting["IX_AMP"] = "1";
  }
  function reportStats2(siteID, slotID, dfpSlot, start, code) {
    try {
      if (code == EVENT_BADTAG2) {
        return;
      }
      var xhttp = new XMLHttpRequest();
      xhttp.withCredentials = true;
      var deltat = Date.now() - start;
      var ts = start / 1e3 >> 0;
      var ets = Date.now() / 1e3 >> 0;
      var url = "https://as-sec.casalemedia.com/headerstats?s=" + siteID;
      if (typeof window.context.location.href !== "undefined") {
        url += "&u=" + encodeURIComponent(window.context.location.href);
      }
      var stats = '{"p":"display","d":"mobile","t":' + ts + ",";
      stats += '"sl":[{"s": "' + slotID + '",';
      stats += '"t":' + ets + ",";
      stats += '"e": [{';
      if (code == EVENT_SUCCESS2) {
        stats += '"n":"amp-s",';
      } else if (code == EVENT_TIMEOUT2) {
        stats += '"n":"amp-t",';
      } else {
        stats += '"n":"amp-e",';
      }
      stats += '"v":"' + deltat + '",';
      stats += '"b": "INDX","x": "' + dfpSlot.substring(0, 64) + '"}]}]}';
      xhttp.open("POST", url, true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send(stats);
    } catch (e) {
    }
  }

  // ads/vendors/jubna.js
  function jubna(global2, data) {
    validateData(data, ["wid", "pid"]);
    global2._jubna = global2._jubna || {
      widgetID: data["wid"],
      pubID: data["pid"],
      referrer: global2.context.referrer
    };
    loadScript(global2, "https://cdn.jubna.com/adscripts/jb_amp_loader.js");
  }

  // ads/vendors/kargo.js
  function kargo(global2, data) {
    validateData(data, ["site", "slot"], ["options"]);
    var kargoScriptUrl = "https://storage.cloud.kargo.com/ad/network/tag/v3/" + data.site + ".js";
    var options = {};
    if (data.options != null) {
      try {
        options = JSON.parse(data.options);
      } catch (e) {
      }
    }
    options.source_window = global2;
    computeInMasterFrame(global2, "kargo-load", function(done) {
      loadScript(global2, kargoScriptUrl, function() {
        var success = false;
        if (global2.Kargo != null && global2.Kargo.loaded) {
          success = true;
        }
        done(success);
      });
    }, function(success) {
      if (success) {
        var w = options.source_window;
        if (!w.context.isMaster) {
          w.Kargo = w.context.master.Kargo;
        }
        w.Kargo.getAd(data.slot, options);
      } else {
        throw new Error("Kargo AdTag failed to load");
      }
    });
  }

  // ads/vendors/ketshwa.js
  function ketshwa(global2, data) {
    validateData(data, ["widgetid", "externalid"], []);
    var externalid = data.externalid, widgetid = data.widgetid;
    var skey = "widget_" + widgetid;
    var dv = global2.document.createElement("div");
    dv.id = skey;
    global2.document.getElementById("c").appendChild(dv);
    writeScript(global2, "https://widget-cdn.ketshwa.com/m/p/" + widgetid + "/" + externalid + ".js", function() {
      global2.KetshwaSDK.showWidget(widgetid, skey);
    });
  }

  // ads/vendors/kiosked.js
  function kiosked(global2, data) {
    var scriptId;
    validateData(data, ["scriptid"], []);
    if (hasOwn(data, "scriptid")) {
      scriptId = data["scriptid"];
    }
    window.addEventListener("kioskedAdRender", function() {
      global2.context.renderStart();
    }, false);
    window.addEventListener("kioskedAdNoFill", function() {
      global2.context.noContentAvailable();
    }, false);
    writeScript(global2, "https://scripts.kiosked.com/loader/kiosked-ad.js?staticTagId=" + scriptId);
  }

  // ads/vendors/kixer.js
  function kixer(global2, data) {
    validateData(data, ["adslot"], []);
    var inView = false;
    var viewed = false;
    var viewTimer = null;
    var d = global2.document.createElement("div");
    d.id = "__kx_ad_" + data.adslot;
    global2.document.getElementById("c").appendChild(d);
    var kxload = function kxload2() {
      d.removeEventListener("load", kxload2, false);
      if (d.childNodes.length > 0) {
        global2.context.renderStart();
      } else {
        global2.context.noContentAvailable();
      }
    };
    d.addEventListener("load", kxload, false);
    var kxviewCheck = function kxviewCheck2(intersectionEntry) {
      inView = intersectionEntry.intersectionRatio > 0.5;
      if (inView) {
        if (!viewed && viewTimer == null) {
          viewTimer = setTimeout(kxviewFire, 900);
        }
      } else {
        if (viewTimer) {
          clearTimeout(viewTimer);
          viewTimer = null;
        }
      }
    };
    var kxviewFire = function kxviewFire2() {
      if (inView) {
        if (typeof __kx_viewability.process_locked === "function") {
          viewed = true;
          __kx_viewability.process_locked(data.adslot);
        }
      }
    };
    global2.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        kxviewCheck(c);
      });
    });
    loadScript(global2, "https://cdn.kixer.com/ad/load.js", function() {
      global2.__kx_domain = parseUrlDeprecated(global2.context.sourceUrl).hostname;
      __kxamp[data.adslot] = 1;
      __kx_ad_slots.push(data.adslot);
      __kx_ad_start();
    });
  }

  // ads/vendors/kuadio.js
  function kuadio(global2, data) {
    validateData(data, ["widgetId"], ["region", "baseUrl", "betaMode", "debugMode", "fastParse", "ref"]);
    global2._pvmax = {
      region: data.region,
      baseUrl: data.baseUrl,
      betaMode: data.betaMode === "true",
      debugMode: data.debugMode === "true",
      fastParse: data.fastParse !== "false"
    };
    var e = global2.document.createElement("div");
    e.className = "_pvmax_recommend";
    e.setAttribute("data-widget-id", data.widgetId);
    e.setAttribute("data-ref", data.ref || global2.context.canonicalUrl);
    global2.document.getElementById("c").appendChild(e);
    loadScript(global2, "https://api.pvmax.net/v1.0/pvmax.js");
  }

  // ads/vendors/lentainform.js
  function lentainform(global2, data) {
    validateData(data, ["publisher", "widget", "container"], ["url", "options"]);
    var scriptRoot = document.createElement("div");
    scriptRoot.id = data.container;
    document.body.appendChild(scriptRoot);
    var publisherStr = data.publisher.replace(/[^A-z0-9]/g, "");
    var url = "https://jsc.lentainform.com/" + encodeURIComponent(publisherStr[0]) + "/" + (encodeURIComponent(publisherStr[1]) + "/") + (encodeURIComponent(data.publisher) + ".") + (encodeURIComponent(data.widget) + ".js?t=") + Math.floor(Date.now() / 36e5);
    global2.uniqId = ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5);
    window["ampOptions" + data.widget + "_" + global2.uniqId] = data.options;
    global2.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        window["intersectionRect" + data.widget + "_" + global2.uniqId] = c.intersectionRect;
        window["boundingClientRect" + data.widget + "_" + global2.uniqId] = c.boundingClientRect;
      });
    });
    loadScript(global2, data.url || url);
  }

  // ads/vendors/ligatus.js
  function ligatus(global2, data) {
    var src = data.src;
    validateSrcPrefix("https://a-ssl.ligatus.com/", src);
    writeScript(global2, src);
  }

  // ads/vendors/lockerdome.js
  function lockerdome(global2, data) {
    validateData(data, ["slot"]);
    global2.SLOT = data.slot;
    loadScript(global2, "https://cdn2.lockerdomecdn.com/_js/amp.js");
  }

  // ads/vendors/logly.js
  function logly(global2, data) {
    validateData(data, ["adspotid"]);
    var d = global2.document.createElement("div");
    d.id = "logly-lift-" + data["adspotid"];
    global2.document.getElementById("c").appendChild(d);
    var url = "https://l.logly.co.jp/lift_widget.js" + ("?adspot_id=" + encodeURIComponent(data["adspotid"]));
    loadScript(global2, url);
  }

  // ads/vendors/loka.js
  function loka(global2, data) {
    validateData(data, ["unitParams"], []);
    global2.lokaParams = data;
    var container = global2.document.querySelector("#c");
    container.addEventListener("lokaUnitLoaded", function(e) {
      if (e.detail.isReady) {
        global2.context.renderStart();
      } else {
        global2.context.noContentAvailable();
      }
    });
    loadScript(global2, "https://loka-cdn.akamaized.net/scene/amp.js");
  }

  // ads/vendors/luckyads.js
  function luckyads(global2, data) {
    validateData(data, ["src", "laBlock"]);
    var src = data.src;
    createContainer7(global2, data);
    loadScript(global2, src);
  }
  function createContainer7(global2, data) {
    var d = global2.document.createElement("div");
    d.setAttribute("data-la-block", data["laBlock"]);
    global2.document.getElementById("c").appendChild(d);
  }

  // ads/vendors/macaw.js
  function macaw(global2, data) {
    validateData(data, ["blockId"]);
    var url = "https://code.macaw.is/data/" + encodeURIComponent(data["blockId"]) + ".js?async=1&div=c";
    loadScript(global2, url, function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/mads.js
  function mads(global2, data) {
    validateData(data, ["adrequest"], []);
    writeScript(global2, "https://eu2.madsone.com/js/tags.js", function() {
      window.MADSAdrequest.adrequest(JSON.parse(data.adrequest));
    });
  }

  // ads/vendors/mantis.js
  function mantisDisplay(global2, data) {
    validateData(data, ["property", "zone"], []);
    global2.mantis = global2.mantis || [];
    global2.mantis.push(["display", "load", {
      property: data["property"]
    }]);
    var d = global2.document.createElement("div");
    d.setAttribute("data-mantis-zone", data["zone"]);
    global2.document.getElementById("c").appendChild(d);
    loadScript(global2, "https://assets.mantisadnetwork.com/mantodea.min.js");
  }
  function mantisRecommend(global2, data) {
    validateData(data, ["property"], ["css"]);
    global2.mantis = global2.mantis || [];
    global2.mantis.push(["recommend", "load", {
      property: data["property"],
      render: "recommended",
      css: data["css"]
    }]);
    var d = global2.document.createElement("div");
    d.setAttribute("id", "recommended");
    global2.document.getElementById("c").appendChild(d);
    loadScript(global2, "https://assets.mantisadnetwork.com/recommend.min.js");
  }

  // ads/vendors/marfeel.js
  function marfeel(global2, data) {
    validateData(data, ["tenant"]);
    var tenant = data.tenant, version = data.version;
    var versionQS = version ? "?v=" + version : "";
    loadScript(global2, "https://live.mrf.io/amp-ad/" + tenant + "/index" + versionQS);
  }

  // ads/vendors/mediaad.js
  function mediaad(global2, data) {
    validateData(data, ["medtag", "publisher"]);
    var d = document.getElementById("c");
    var meddiv = document.createElement("div");
    meddiv.setAttribute("id", data["medtag"]);
    d.appendChild(meddiv);
    global2._mediaad = global2._mediaad || [];
    global2.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        if (c.intersectionRect.height) {
          global2._mediaad.push({
            medtag: data["medtag"],
            publisher: data.publisher
          });
        }
      });
    });
    loadScript(global2, "https://s1.mediaad.org/serve/" + encodeURIComponent(data.publisher) + "/loader.js");
  }

  // ads/vendors/medianet.js
  var mandatoryParams2 = ["tagtype", "cid"];
  var optionalParams2 = ["timeout", "crid", "misc", "slot", "targeting", "categoryExclusions", "tagForChildDirectedTreatment", "cookieOptions", "overrideWidth", "overrideHeight", "loadingStrategy", "consentNotificationId", "useSameDomainRenderingUntilDeprecated", "experimentId", "multiSize", "multiSizeValidation"];
  function medianet(global2, data) {
    validateData(data, mandatoryParams2, optionalParams2);
    var publisherUrl = global2.context.canonicalUrl || getSourceUrl(global2.context.location.href), referrerUrl = global2.context.referrer;
    if (data.tagtype === "headerbidder") {
      loadHBTag(global2, data, publisherUrl, referrerUrl);
    } else if (data.tagtype === "cm" && data.crid) {
      loadCMTag(global2, data, publisherUrl, referrerUrl);
    } else {
      global2.context.noContentAvailable();
    }
  }
  function getCallbacksObject() {
    return {
      renderStartCb: function renderStartCb(opt_data) {
        global.context.renderStart(opt_data);
      },
      reportRenderedEntityIdentifierCb: function reportRenderedEntityIdentifierCb(ampId) {
        global.context.reportRenderedEntityIdentifier(ampId);
      },
      noContentAvailableCb: function noContentAvailableCb() {
        global.context.noContentAvailable();
      }
    };
  }
  function loadCMTag(global2, data, publisherUrl, referrerUrl) {
    function setMacro(type) {
      if (!type) {
        return;
      }
      var name = "medianet_" + type;
      if (hasOwn(data, type)) {
        global2[name] = data[type];
      }
    }
    function setAdditionalData() {
      data.requrl = publisherUrl || "";
      data.refurl = referrerUrl || "";
      data.versionId = "211213";
      setMacro("width");
      setMacro("height");
      setMacro("crid");
      setMacro("requrl");
      setMacro("refurl");
      setMacro("versionId");
      setMacro("misc");
    }
    function setCallbacks() {
      global2._mNAmp = getCallbacksObject();
    }
    function loadScript2() {
      var url = "https://contextual.media.net/ampnmedianet.js?";
      url += "cid=" + encodeURIComponent(data.cid);
      url += "&https=1";
      url += "&requrl=" + encodeURIComponent(data.requrl);
      url += "&refurl=" + encodeURIComponent(data.refurl);
      writeScript(global2, url);
    }
    function init2() {
      setAdditionalData();
      setCallbacks();
      loadScript2();
    }
    init2();
  }
  function loadHBTag(global2, data, publisherUrl, referrerUrl) {
    function loadMNETAd() {
      if (loadMNETAd.alreadyCalled) {
        return;
      }
      loadMNETAd.alreadyCalled = true;
      global2.advBidxc = global2.context.master.advBidxc;
      if (global2.advBidxc && typeof global2.advBidxc.renderAmpAd === "function") {
        global2.addEventListener("message", function(event) {
          global2.advBidxc.renderAmpAd(event, global2);
        });
      }
      data.targeting = data.targeting || {};
      if (global2.advBidxc && typeof global2.advBidxc.setAmpTargeting === "function") {
        global2.advBidxc.setAmpTargeting(global2, data);
      }
      global2.advBidxc.loadAmpAd(global2, data);
    }
    function mnetHBHandle() {
      global2.advBidxc = global2.context.master.advBidxc;
      if (global2.advBidxc && typeof global2.advBidxc.registerAmpSlot === "function") {
        global2.advBidxc.registerAmpSlot({
          cb: loadMNETAd,
          data,
          winObj: global2
        });
      }
    }
    computeInMasterFrame(global2, "medianet-hb-load", function(done) {
      global2.advBidxc_requrl = publisherUrl;
      global2.advBidxc_refurl = referrerUrl;
      global2.advBidxc = {
        registerAmpSlot: function registerAmpSlot() {
        },
        setAmpTargeting: function setAmpTargeting() {
        },
        renderAmpAd: function renderAmpAd() {
        },
        loadAmpAd: function loadAmpAd() {
          global2.context.noContentAvailable();
        }
      };
      global2.advBidxc.amp = getCallbacksObject();
      var publisherDomain = parseUrlDeprecated(publisherUrl).hostname;
      writeScript(global2, "https://contextual.media.net/bidexchange.js?https=1&amp=1&cid=" + encodeURIComponent(data.cid) + "&dn=" + encodeURIComponent(publisherDomain), function() {
        done(null);
      });
    }, mnetHBHandle);
  }

  // ads/vendors/mediavine.js
  function mediavine(global2, data) {
    validateData(data, ["site"]);
    global2.$mediavine = {
      slug: data.site
    };
    loadScript(global2, "https://amp.mediavine.com/wrapper.min.js");
  }

  // ads/vendors/medyanet.js
  function medyanet(global2, data) {
    validateData(data, ["slot", "domain"]);
    global2.adunit = data.slot;
    global2.size = "[" + data.width + "," + data.height + "]";
    global2.domain = data.domain;
    medyanetAds(global2, data);
  }
  function medyanetAds(global2, data) {
    var f = global2.document.createElement("iframe");
    f.setAttribute("id", "adframe");
    f.setAttribute("width", data.width);
    f.setAttribute("height", data.height);
    f.setAttribute("frameborder", "0");
    f.setAttribute("marginheight", "0");
    f.setAttribute("marginwidth", "0");
    f.setAttribute("allowfullscreen", "true");
    f.setAttribute("scrolling", "no");
    setStyles(f, {
      border: "0 none transparent",
      position: "relative"
    });
    f.onload = function() {
      window.context.renderStart();
    };
    f.src = "https://app.medyanetads.com/amp/medyanetads.html?bidderData=" + global2.domain + "&adunit=" + global2.adunit + "&size=" + global2.size;
    var url = window.top.location.search.substring(1);
    if (url && url.indexOf("hb=true") !== -1) {
      f.src = f.src + "&hb=true";
    }
    global2.document.body.appendChild(f);
  }

  // ads/vendors/meg.js
  function meg(global2, data) {
    validateData(data, ["code"]);
    var code = data.code;
    var lang = global2.encodeURIComponent(global2.navigator.language);
    var ref = global2.encodeURIComponent(global2.context.referrer);
    var params = ["lang=" + lang, "ref=" + ref].join("&");
    var url = "https://apps.meg.com/embedjs/" + code + "?" + params;
    global2._megAdsLoaderCallbacks = {
      onSuccess: function onSuccess() {
        global2.context.renderStart();
      },
      onError: function onError() {
        global2.context.noContentAvailable();
      }
    };
    loadScript(global2, url, function() {
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/mgid.js
  function mgid(global2, data) {
    validateData(data, ["publisher", "widget", "container"], ["url", "options"]);
    var scriptRoot = document.createElement("div");
    scriptRoot.id = data.container;
    document.body.appendChild(scriptRoot);
    function getResourceFilePath(publisher) {
      var publisherStr = publisher.replace(/[^A-z0-9]/g, "");
      return publisherStr[0] + "/" + publisherStr[1];
    }
    var url = "https://jsc.mgid.com/" + getResourceFilePath(data.publisher) + "/" + (encodeURIComponent(data.publisher) + ".") + (encodeURIComponent(data.widget) + ".js?t=") + Math.floor(Date.now() / 36e5);
    global2.uniqId = ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5);
    window["ampOptions" + data.widget + "_" + global2.uniqId] = data.options;
    global2.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        window["intersectionRect" + data.widget + "_" + global2.uniqId] = c.intersectionRect;
        window["boundingClientRect" + data.widget + "_" + global2.uniqId] = c.boundingClientRect;
      });
    });
    loadScript(global2, data.url || url);
  }

  // ads/vendors/microad.js
  function microad(global2, data) {
    validateData(data, [], ["spot", "url", "referrer", "ifa", "appid", "geo"]);
    global2.document.getElementById("c").setAttribute("id", data.spot);
    loadScript(global2, "https://j.microad.net/js/camp.js", function() {
      MicroAd.Compass.showAd(data);
    });
  }

  // ads/vendors/miximedia.js
  function miximedia(global2, data) {
    validateData(data, ["blockid"]);
    global2._miximedia = global2._miximedia || {
      viewId: global2.context.pageViewId,
      blockId: data["blockid"],
      htmlURL: data["canonical"] || global2.context.canonicalUrl,
      ampURL: data["ampurl"] || global2.context.sourceUrl,
      testMode: data["testmode"] || "false",
      referrer: data["referrer"] || global2.context.referrer,
      hostname: global2.window.context.location.hostname,
      clientId: window.context.clientId,
      domFingerprint: window.context.domFingerprint,
      location: window.context.location,
      startTime: window.context.startTime
    };
    global2._miximedia.AMPCallbacks = {
      renderStart: global2.context.renderStart,
      noContentAvailable: global2.context.noContentAvailable
    };
    var rand = Math.round(Math.random() * 1e8);
    loadScript(global2, "https://amp.mixi.media/ampclient/mixi.js?rand=" + rand, function() {
    }, global2.context.noContentAvailable);
  }

  // ads/vendors/mixpo.js
  function mixpo(global2, data) {
    validateData(data, ["guid", "subdomain"]);
    var g = global2, cdnSubdomain = data.subdomain == "www" ? "cdn" : data.subdomain + "-cdn", url = data.loader || "https://" + cdnSubdomain + ".mixpo.com/js/loader.js";
    g.mixpoAd = {
      amp: true,
      noflash: true,
      width: data.width,
      height: data.height,
      guid: data.guid,
      subdomain: data.subdomain,
      embedv: data.embedv,
      clicktag: data.clicktag,
      customTarget: data.customtarget,
      dynClickthrough: data.dynclickthrough,
      viewTracking: data.viewtracking,
      customCSS: data.customcss,
      local: data.local,
      enableMRAID: data.enablemraid,
      jsPlayer: data.jsplayer
    };
    writeScript(g, url);
  }

  // ads/vendors/monetizer101.js
  function monetizer101(global2, data) {
    validateData(data, ["widget", "config"]);
    global2.widget = data.widget;
    global2.config = data.config;
    writeScript(global2, "https://link.monetizer101.com/widget/amp/amp.js");
  }

  // ads/vendors/mox.js
  function mox(global2, config) {
    validateData(config, ["z", "w", "h"], ["u"]);
    global2.config = config;
    loadScript(global2, config.u || "https://ad.mox.tv/js/amp.min.js");
  }

  // ads/vendors/my6sense.js
  function my6sense(global2, data) {
    validateData(data, ["widgetKey"]);
    var widgetTag = global2.document.createElement("script");
    widgetTag.src = "//web-clients.mynativeplatform.com/web-clients/bootloaders/" + data["widgetKey"] + "/bootloader.js";
    var url = data["url"] && data["url"] !== "[PAGE_URL]" ? data["url"] : global2.context.sourceUrl;
    widgetTag.setAttribute("async", "true");
    widgetTag.setAttribute("data-version", "3");
    widgetTag.setAttribute("data-url", url);
    widgetTag.setAttribute("data-zone", data["zone"] || "[ZONE]");
    widgetTag.setAttribute("data-google-amp", "true");
    widgetTag.setAttribute("data-organic-clicks", data["organicClicks"] || "[ORGANIC_TRACKING_PIXEL]");
    widgetTag.setAttribute("data-paid-clicks", data["paidClicks"] || "[PAID_TRACKING_PIXEL]");
    widgetTag.setAttribute("data-display-within-iframe", "true");
    global2.document.body.appendChild(widgetTag);
  }

  // ads/vendors/myfinance.js
  var mandatoryFields = ["adType"];
  var adUrl = "https://www.myfinance.com/amp/ad";
  function myfinance(global2, data) {
    validateData(data, mandatoryFields);
    if (!data["mf_referrer"]) {
      data["mf_referrer"] = global2.context.canonicalUrl || global2.context.sourceUrl;
    }
    if (!data["ampClientId"]) {
      data["ampClientId"] = global2.context.clientId;
    }
    var url = buildUrl(data);
    global2.MF_AMP_DATA = data;
    writeScript(global2, url);
  }
  function buildUrl(data) {
    var url = new URL(adUrl);
    Object.entries(data).forEach(function(entry) {
      return url.searchParams.set(entry[0], entry[1]);
    });
    return url.toString();
  }

  // ads/vendors/myoffrz.js
  function myoffrz(global2, data) {
    validateData(data, ["config"], ["script"]);
    global2.config = data.config;
    global2.sourceUrl = global2.context.sourceUrl;
    var d = global2.document.createElement("div");
    d.setAttribute("id", "myoffrz");
    global2.document.getElementById("c").appendChild(d);
    writeScript(global2, data.script || "https://cdn.myoffrz.io/amp/script.js");
  }

  // ads/vendors/mytarget.js
  function mytarget(global2, data) {
    validateData(data, ["adSlot"], ["adQuery"]);
    var container = global2.document.createElement("ins");
    container.setAttribute("class", "mrg-tag");
    container.setAttribute("data-ad-slot", data["adSlot"]);
    if (data["adQuery"]) {
      container.setAttribute("data-ad-query", data["adQuery"]);
    }
    setStyles(container, {
      display: "inline-block",
      width: "100%",
      height: "100%"
    });
    global2.document.getElementById("c").appendChild(container);
    (global2.MRGtag = global2.MRGtag || []).push({
      onNoAds: function onNoAds() {
        return global2.context.noContentAvailable();
      },
      onAdsSuccess: function onAdsSuccess() {
        return global2.context.renderStart();
      }
    });
    loadScript(global2, "https://ad.mail.ru/static/ads-async.js");
  }

  // ads/vendors/mywidget.js
  function mywidget(global2, data) {
    validateData(data, ["cid"]);
    global2.myWidgetInit = data;
    loadScript(global2, "https://likemore-go.imgsmail.ru/widget_amp.js");
  }

  // ads/vendors/nativeroll.js
  function nativeroll(global2, data) {
    validateData(data, ["gid"]);
    loadScript(global2, "https://cdn01.nativeroll.tv/js/seedr-player.min.js", function() {
      initPlayer(global2, data);
    });
  }
  function initPlayer(global2, data) {
    var config = {
      container: "#c",
      desiredOffset: 50,
      gid: data.gid,
      onError: function onError() {
        global2.context.noContentAvailable();
      },
      onLoad: function onLoad() {
        var height = global2.document.getElementsByClassName("nr-player")[0].offsetHeight;
        global2.context.requestResize(void 0, height);
      },
      onDestroy: function onDestroy() {
        global2.context.noContentAvailable();
      }
    };
    SeedrPlayer(config);
  }

  // ads/vendors/nativery.js
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
  function nativery(global2, data) {
    validateData(data, ["wid"]);
    var params = _extends4({}, data);
    global2._nativery = global2._nativery || {
      wid: data.wid,
      referrer: data.referrer || global2.context.referrer,
      url: data.url || global2.context.canonicalUrl,
      viewId: global2.context.pageViewId,
      visible: 0,
      params
    };
    global2.addEventListener("amp-widgetCreated", function(e) {
      if (e && e.detail) {
        global2.context.requestResize(void 0, e.detail.height);
      }
    });
    var unlisten = global2.context.observeIntersection(function(changes) {
      toArray(changes).forEach(function(c) {
        global2._nativery.visible = Math.floor(c.intersectionRect.height / c.boundingClientRect.height * 100);
        if (global2._nativery.visible) {
          unlisten();
        }
      });
    });
    writeScript(global2, "https://cdn.nativery.com/widget/js/natamp.js");
  }

  // ads/vendors/nativo.js
  function nativo(global2, data) {
    var ntvAd;
    (function(ntvAd2, global3, data2) {
      global3.history.replaceState(null, "", location.pathname + location.hash.replace(/({).*(})/, ""));
      var delayedAdLoad = false;
      var percentageOfadViewed;
      var loc = global3.context.location;
      function isValidDelayTime(delay) {
        return typeof delay != "undefined" && !isNaN(delay) && parseInt(delay, 10) >= 0;
      }
      function isDelayedTimeStart(data3) {
        return isValidDelayTime(data3.delayByTime) && "delay" in data3 && !("delayByView" in data3);
      }
      function isDelayedViewStart(data3) {
        return isValidDelayTime(data3.delayByTime) && "delayByView" in data3;
      }
      function loadAdWhenViewed() {
        var g = global3;
        global3.context.observeIntersection(function(positions) {
          var coordinates = getLastPositionCoordinates(positions);
          if (typeof coordinates.rootBounds != "undefined" && coordinates.intersectionRect.top == coordinates.rootBounds.top + coordinates.boundingClientRect.y) {
            if (isDelayedViewStart(data2) && !delayedAdLoad) {
              g.PostRelease.Start();
              delayedAdLoad = true;
            }
          }
        });
      }
      function loadAdWhenTimedout() {
        var g = global3;
        setTimeout(function() {
          g.PostRelease.Start();
          delayedAdLoad = true;
        }, parseInt(data2.delayByTime, 10));
      }
      function getLastPositionCoordinates(positions) {
        return positions[positions.length - 1];
      }
      function setPercentageOfadViewed(percentage) {
        percentageOfadViewed = percentage;
      }
      function viewabilityConfiguration(positions) {
        var coordinates = getLastPositionCoordinates(positions);
        setPercentageOfadViewed(coordinates.intersectionRect.height * 100 / coordinates.boundingClientRect.height / 100);
        global3.PostRelease.checkIsAdVisible();
      }
      ntvAd2.getPercentageOfadViewed = function() {
        return percentageOfadViewed;
      };
      ntvAd2.getScriptURL = function() {
        return "https://s.ntv.io/serve/load.js";
      };
      ntvAd2.setupAd = function() {
        global3._prx = [["cfg.Amp"]];
        global3._prx.push(["cfg.RequestUrl", data2["requestUrl"] || loc.href]);
        for (var key in data2) {
          switch (key) {
            case "premium":
              global3._prx.push(["cfg.SetUserPremium"]);
              break;
            case "debug":
              global3._prx.push(["cfg.Debug"]);
              break;
            case "delay":
              if (isValidDelayTime(data2.delayByTime)) {
                global3._prx.push(["cfg.SetNoAutoStart"]);
              }
              break;
          }
        }
      };
      ntvAd2.Start = function() {
        if (isDelayedTimeStart(data2)) {
          loadAdWhenTimedout();
        } else if (isDelayedViewStart(data2)) {
          loadAdWhenViewed();
        }
        global3.PostRelease.checkAmpViewability = function() {
          return ntvAd2.getPercentageOfadViewed();
        };
        global3.context.observeIntersection(viewabilityConfiguration);
      };
    })(ntvAd || (ntvAd = {}), global2, data);
    ntvAd.setupAd();
    loadScript(global2, ntvAd.getScriptURL(), ntvAd.Start);
  }

  // ads/vendors/navegg.js
  function navegg(global2, data) {
    validateData(data, ["acc"]);
    var acc = data.acc;
    var seg, nvg = function nvg2() {
    };
    delete data.acc;
    nvg.prototype.getProfile = function() {
    };
    data.targeting = data.targeting || {};
    loadScript(global2, "https://tag.navdmp.com/amp.1.0.0.min.js", function() {
      nvg = global2["nvg" + acc] = new global2["AMPNavegg"]({
        acc
      });
      nvg.getProfile(function(nvgTargeting) {
        for (seg in nvgTargeting) {
          data.targeting[seg] = nvgTargeting[seg];
        }
        doubleclick(global2, data);
      });
    });
  }

  // ads/vendors/nend.js
  var nendFields = ["nend_params"];
  function nend(global2, data) {
    validateData(data, nendFields, []);
    global2.nendParam = data;
    writeScript(global2, "https://js1.nend.net/js/amp.js");
  }

  // ads/vendors/netletix.js
  var NX_URL_HOST = "https://call.adadapter.netzathleten-media.de";
  var NX_URL_PATHPREFIX = "/pb/";
  var NX_URL_FULL = NX_URL_HOST + NX_URL_PATHPREFIX;
  var DEFAULT_NX_KEY = "default";
  var DEFAULT_NX_UNIT = "default";
  var DEFAULT_NX_WIDTH = "fluid";
  var DEFAULT_NX_HEIGHT = "fluid";
  var DEFAULT_NX_V = "0002";
  var DEFAULT_NX_SITE = "none";
  function netletix(global2, data) {
    global2._netletix_amp = {
      allowed_data: ["nxasync", "nxv", "nxsite", "nxid", "nxscript"],
      mandatory_data: ["nxkey", "nxunit", "nxwidth", "nxheight"],
      data
    };
    validateData(data, global2._netletix_amp.mandatory_data, global2._netletix_amp.allowed_data);
    var nxh = data.nxheight || DEFAULT_NX_HEIGHT;
    var nxw = data.nxwidth || DEFAULT_NX_WIDTH;
    var url = assertHttpsUrl(addParamsToUrl(NX_URL_FULL + encodeURIComponent(data.nxkey || DEFAULT_NX_KEY), dict({
      "unit": data.nxunit || DEFAULT_NX_UNIT,
      "width": data.nxwidth || DEFAULT_NX_WIDTH,
      "height": data.nxheight || DEFAULT_NX_HEIGHT,
      "v": data.nxv || DEFAULT_NX_V,
      "site": data.nxsite || DEFAULT_NX_SITE,
      "ord": Math.round(Math.random() * 1e8)
    })), data.ampSlotIndex);
    window.addEventListener("message", function(event) {
      if (event.data.type && dev().assertString(event.data.type).startsWith("nx-")) {
        switch (event.data.type) {
          case "nx-resize":
            var renderconfig = {
              "width": event.data.width,
              "height": event.data.height
            };
            global2.context.renderStart(renderconfig);
            if (event.data.width && event.data.height && (event.data.width != nxw || event.data.height != nxh)) {
              global2.context.requestResize(event.data.width, event.data.height);
            }
            break;
          case "nx-empty":
            global2.context.noContentAvailable();
            break;
          case "nx-identifier":
            global2.context.reportRenderedEntityIdentifier(event.data.identifier);
            break;
          default:
            break;
        }
      }
    });
    if (data.async && data.async.toLowerCase() === "true") {
      loadScript(global2, url);
    } else {
      writeScript(global2, url);
    }
  }

  // ads/vendors/noddus.js
  function noddus(global2, data) {
    validateData(data, ["token"]);
    global2.noddus = data;
    writeScript(global2, "https://noddus.com/amp_loader.js");
  }

  // ads/vendors/nokta.js
  function nokta(global2, data) {
    validateData(data, ["category", "site", "zone"]);
    global2.category = data.category;
    global2.site = data.site;
    global2.zone = data.zone;
    global2.iwidth = data.width;
    global2.iheight = data.height;
    writeScript(global2, "https://static.virgul.com/theme/mockups/noktaamp/ampjs.js");
  }

  // ads/vendors/oblivki.js
  var oblivkiFields = ["id"];
  function oblivki(global2, data) {
    validateData(data, oblivkiFields, []);
    global2.oblivkiParam = data;
    writeScript(global2, "https://oblivki.biz/ads/amp.js");
  }

  // ads/vendors/onead.js
  function onead(global2, data) {
    validateData(data, [], ["playmode", "uid", "pid", "host"]);
    global2.Guoshi = {
      queryAd: {
        amp: {}
      }
    };
    global2.ONEAD_AMP = {
      playmode: data.playmode,
      uid: data.uid,
      pid: data.pid,
      host: data.host
    };
    createOneadSlot(global2);
    createAdUnit(global2);
  }
  function createOneadSlot(win) {
    var slot = document.createElement("div");
    slot.id = "onead-amp";
    win.document.getElementById("c").appendChild(slot);
  }
  function createAdUnit(win) {
    win.ONEAD_AMP.isAMP = true;
    var src = "https://ad-specs.guoshipartners.com/static/js/onead-amp.min.js";
    var jsLoadCb = function jsLoadCb2() {
      win.Guoshi.queryAd.amp.setup({
        playMode: win.ONEAD_AMP.playMode,
        uid: win.ONEAD_AMP.uid,
        pid: win.ONEAD_AMP.pid,
        host: win.ONEAD_AMP.host
      });
    };
    loadScript(win, src, jsLoadCb);
  }

  // ads/vendors/onnetwork.js
  var hosts2 = {
    video: "https://video.onnetwork.tv",
    cdn: "https://cdn.onnetwork.tv",
    cdnx: "https://cdnx.onnetwork.tv",
    vast: "https://vast.onnetwork.tv"
  };
  function onnetwork(global2, data) {
    validateData(data, [["src", "sid", "mid"]]);
    global2.onnetwork = {
      ampData: data
    };
    var mid = data.mid, sid = data.sid, src = data.src;
    var url;
    if (src) {
      validateSrcPrefix(Object.keys(hosts2).map(function(type) {
        return hosts2[type];
      }), src);
      url = src;
    } else if (sid) {
      url = hosts2.video + "/embed.php?ampsrc=1&sid=" + encodeURIComponent(sid);
    } else if (mid) {
      url = hosts2.video + "/embed.php?ampsrc=1&mid=" + encodeURIComponent(mid);
    }
    writeScript(global2, url);
  }

  // ads/vendors/openadstream.js
  function openadstream(global2, data) {
    validateData(data, ["adhost", "sitepage", "pos"], ["query"]);
    var url = "https://" + encodeURIComponent(data.adhost) + "/3/" + data.sitepage + "/1" + String(Math.random()).substring(2, 11) + "@" + data.pos;
    if (data.query) {
      url = url + "?" + data.query;
    }
    writeScript(global2, url);
  }

  // ads/vendors/openx.js
  var hasOwnProperty3 = Object.prototype.hasOwnProperty;
  function assign2(target, source) {
    for (var prop in source) {
      if (hasOwnProperty3.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function openx(global2, data) {
    var openxData = ["host", "nc", "auid", "dfpSlot", "dfp", "openx"];
    var dfpData = assign2({}, data);
    validateData(data, [], openxData);
    if (data.dfpSlot) {
      openxData.forEach(function(openxKey) {
        if (openxKey in dfpData && openxKey !== "dfp") {
          if (openxKey.startsWith("dfp")) {
            var fixKey = openxKey.substring(3);
            fixKey = fixKey.substring(0, 1).toLowerCase() + fixKey.substring(1);
            dfpData[fixKey] = data[openxKey];
          }
          delete dfpData[openxKey];
        }
      });
      if ("dfp" in data) {
        assign2(dfpData, dfpData.dfp);
        delete dfpData["dfp"];
      }
    }
    if (data.host) {
      var jssdk = "https://" + data.host + "/mw/1.0/jstag";
      if (data.nc && data.dfpSlot) {
        jssdk += "?nc=" + encodeURIComponent(data.nc);
        if (data.auid) {
          advanceImplementation(global2, jssdk, dfpData, data);
        } else {
          standardImplementation(global2, jssdk, dfpData);
        }
      } else if (data.auid) {
        global2.OX_cmds = [function() {
          var oxRequest = OX();
          var oxAnchor = global2.document.createElement("div");
          global2.document.body.appendChild(oxAnchor);
          OX._requestArgs["bc"] = "amp";
          oxRequest.addAdUnit(data.auid);
          oxRequest.setAdSizes([data.width + "x" + data.height]);
          if (data.openx && data.openx.customVars) {
            setCustomVars(oxRequest, filterCustomVar(data.openx.customVars));
          }
          oxRequest.getOrCreateAdUnit(data.auid).set("anchor", oxAnchor);
          global2.context.renderStart();
          oxRequest.load();
        }];
        loadScript(global2, jssdk);
      }
    } else if (data.dfpSlot) {
      doubleclick(global2, dfpData);
    }
  }
  function standardImplementation(global2, jssdk, dfpData) {
    writeScript(global2, jssdk, function() {
      doubleclick(global2, dfpData);
    });
  }
  function advanceImplementation(global2, jssdk, dfpData, data) {
    var size = [data.width + "x" + data.height];
    var customVars = {};
    if (data.openx && data.openx.customVars) {
      customVars = filterCustomVar(data.openx.customVars);
    }
    global2.OX_bidder_options = {
      bidderType: "hb_amp",
      callback: function callback2() {
        var priceMap = global2.oxhbjs && global2.oxhbjs.getPriceMap();
        var slot = priceMap && priceMap["c"];
        var targeting = slot ? slot.size + "_" + slot.price + ",hb-bid-" + slot.bid_id : "none_t";
        dfpData.targeting = dfpData.targeting || {};
        assign2(dfpData.targeting, {
          oxb: targeting
        });
        doubleclick(global2, dfpData);
      }
    };
    global2.OX_bidder_ads = [[data.dfpSlot, size, "c", customVars]];
    loadScript(global2, jssdk);
  }
  function setCustomVars(oxRequest, customVars) {
    var customVarKeys = Object.keys(customVars);
    customVarKeys.forEach(function(customVarKey) {
      var customVarValue = customVars[customVarKey];
      if (Array.isArray(customVarValue)) {
        customVarValue.forEach(function(value) {
          oxRequest.addVariable(customVarKey, value);
        });
      } else {
        oxRequest.addVariable(customVarKey, customVarValue);
      }
    });
  }
  function filterCustomVar(customVars) {
    var filterPattern = /^[A-Za-z0-9._]{1,20}$/;
    var filteredKeys = Object.keys(customVars).filter(function(key) {
      return filterPattern.test(key);
    });
    var filteredCustomVar = {};
    filteredKeys.forEach(function(key) {
      filteredCustomVar[key.toLowerCase()] = customVars[key];
    });
    return filteredCustomVar;
  }

  // ads/vendors/opinary.js
  function addCanonicalLinkTag2(global2) {
    if (global2.context.canonicalUrl) {
      var link = global2.document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", global2.context.canonicalUrl);
      global2.document.head.appendChild(link);
    }
  }
  function createContainer8(global2, data) {
    var div = global2.document.createElement("div");
    if (data.poll) {
      div.className = "opinary-widget-embed";
      div.dataset.customer = data.client;
      div.dataset.poll = data.poll;
    } else {
      div.setAttribute("id", "opinary-automation-placeholder");
    }
    return div;
  }
  function opinary(global2, data) {
    validateData(data, ["client"]);
    addCanonicalLinkTag2(global2);
    var c = global2.document.getElementById("c");
    var isAmp = global2.document.createElement("div");
    isAmp.setAttribute("id", "opinaryAMP");
    c.appendChild(isAmp);
    c.appendChild(createContainer8(global2, data));
    if (data.poll) {
      loadScript(global2, "https://widgets.opinary.com/embed.js");
    } else {
      loadScript(global2, "https://widgets.opinary.com/a/" + data.client + ".js");
    }
  }

  // ads/vendors/outbrain.js
  function outbrain(global2, data) {
    validateData(data, ["widgetids"]);
    global2._outbrain = global2._outbrain || {
      viewId: global2.context.pageViewId,
      widgetIds: data["widgetids"],
      htmlURL: data["htmlurl"] || global2.context.canonicalUrl,
      ampURL: data["ampurl"] || global2.context.sourceUrl,
      fbk: data["fbk"] || "",
      testMode: data["testmode"] || "false",
      styleFile: data["stylefile"] || "",
      referrer: data["referrer"] || global2.context.referrer
    };
    loadScript(global2, "https://widgets.outbrain.com/widgetAMP/outbrainAMP.min.js");
  }

  // ads/vendors/pixels.js
  function pixels(global2, data) {
    validateData(data, ["origin", "sid", "tag"], ["clickTracker", "viewability"]);
    data.tag = data.tag.toString().toLowerCase();
    global2._pixelsParam = data;
    if (data.tag === "sync") {
      writeScript(global2, "https://cdn.adsfactor.net/amp/pixels-amp.min.js", function() {
        var pixelsAMPAd = global2.pixelsAd;
        var pixelsAMPTag = new pixelsAMPAd(data);
        pixelsAMPTag.renderAmp(global2.context);
        global2.context.renderStart();
      });
    } else {
      global2.context.noContentAvailable();
    }
  }

  // ads/vendors/playstream.js
  var mandatoryParams3 = ["id"];
  var optionalParams3 = ["fluid"];
  function playstream(global2, data) {
    global2.playstream = {
      unitData: data["id"],
      fluid: data["fluid"]
    };
    validateData(data, mandatoryParams3, optionalParams3);
    var searchParams = new URLSearchParams(data);
    loadScript(global2, "https://app.playstream.media/js/amp.js?" + searchParams.toString());
  }

  // ads/vendors/plista.js
  function plista(global2, data) {
    validateData(data, [], ["publickey", "widgetname", "urlprefix", "item", "geo", "categories", "countrycode"]);
    var div = global2.document.createElement("div");
    div.setAttribute("data-display", "plista_widget_" + data.widgetname);
    global2.document.getElementById("c").appendChild(div);
    window.PLISTA = {
      publickey: data.publickey,
      widgets: [{
        name: data.widgetname,
        pre: data.urlprefix
      }],
      item: data.item,
      geo: data.geo,
      categories: data.categories,
      noCache: true,
      useDocumentReady: false,
      dataMode: "data-display"
    };
    loadScript(global2, "https://static" + (data.countrycode ? "-" + encodeURIComponent(data.countrycode) : "") + ".plista.com/async.js");
  }

  // ads/vendors/polymorphicads.js
  function polymorphicads(global2, data) {
    validateData(data, ["adunit", "params"]);
    global2.polyParam = data;
    writeScript(global2, "https://www.polymorphicads.jp/js/amp.js");
  }

  // ads/vendors/popin.js
  function popin(global2, data) {
    validateData(data, ["mediaid"]);
    var d = global2.document.createElement("div");
    d.id = "_popIn_amp_recommend";
    global2.document.getElementById("c").appendChild(d);
    var url = "https://api.popin.cc/searchbox/" + encodeURIComponent(data["mediaid"]) + ".js";
    loadScript(global2, url);
  }

  // ads/vendors/postquare.js
  function postquare(global2, data) {
    validateData(data, ["widgetids"]);
    global2._postquare = global2._postquare || {
      viewId: global2.context.pageViewId,
      widgetIds: data["widgetids"],
      websiteId: data["websiteid"],
      publisherId: data["publisherid"],
      url: data["url"] || global2.context.canonicalUrl,
      ampURL: data["ampurl"] || global2.context.sourceUrl,
      mode: data["mode"] || 1,
      style: data["stylecss"] || "",
      referrer: global2.context.referrer
    };
    if (data["mode"] == 100) {
      loadScript(global2, "https://widget.engageya.com/pos_amp_loader.js");
    } else {
      loadScript(global2, "https://widget.postquare.com/postquare_amp_loader.js");
    }
  }

  // ads/vendors/ppstudio.js
  function ppstudio(global2, data) {
    validateData(data, ["crid", "width", "height", "holderScript"], []);
    global2._ppstudio = {
      crid: data.crid,
      width: data.width,
      height: data.height,
      holderScript: data.holderScript
    };
    var e = global2.document.createElement("script");
    e.id = "pps-script-" + data.crid;
    e.setAttribute("data-width", data.width);
    e.setAttribute("data-height", data.height);
    e.setAttribute("data-click-url", "");
    e.src = data.holderScript;
    global2.document.getElementById("c").appendChild(e);
    var i = global2.document.createElement("ins");
    i.classList.add("ppstudio");
    i.setAttribute("data-pps-target-id", "cr-" + data.crid);
    global2.document.getElementById("c").appendChild(i);
    loadScript(global2, "https://ads-cdn.tenmax.io/code/ppstudio.js", function() {
      global2.context.renderStart();
    });
  }

  // ads/vendors/pressboard.js
  function pressboard(global2, data) {
    validateData(data, ["media"]);
    data.baseUrl = "https://sr.studiostack.com";
    global2.pbParams = data;
    loadScript(global2, data.baseUrl + "/js/amp-ad.js", function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/promoteiq.js
  var TAG3 = "PROMOTEIQ";
  var mandatoryDataFields = ["src", "params", "sfcallback"];
  function promoteiq(global2, data) {
    validateData(data, mandatoryDataFields, []);
    var sfInputs = parseJson(data["params"]);
    loadScript(global2, data["src"], function() {
      if (!!global2["TagDeliveryContent"]) {
        var sfCallback = new Function("response", data["sfcallback"]);
        global2["TagDeliveryContent"]["request"](sfInputs, sfCallback);
      } else {
        user().error(TAG3, "TagDeliveryContent object not loaded on page");
      }
    });
  }

  // ads/vendors/pubexchange.js
  function pubexchange(global2, data) {
    validateData(data, ["publication", "moduleId", "moduleNum"], ["test"]);
    global2.PUBX = global2.PUBX || {
      pub: data["publication"],
      modNum: data["moduleNum"],
      modId: data["moduleId"],
      test: data["test"]
    };
    loadScript(global2, "https://main.pubexchange.com/loader-amp.min.js");
  }

  // ads/vendors/pubguru.js
  function pubguru(global2, data) {
    validateData(data, ["publisher", "slot"]);
    global2.$pubguru = data;
    var el = global2.document.createElement("div");
    el.setAttribute("id", "the-ad-unit");
    global2.document.getElementById("c").appendChild(el);
    loadScript(global2, "https://amp.pubguru.org/amp." + encodeURIComponent(data.publisher) + ".min.js");
  }

  // ads/vendors/pubmatic.js
  function pubmatic(global2, data) {
    loadScript(global2, "https://ads.pubmatic.com/AdServer/js/amp.js", function() {
      data.kadpageurl = global2.context.sourceUrl || global2.context.location.href;
      PubMatic.showAd(data);
    });
  }

  // ads/vendors/pubmine.js
  var pubmineOptional = ["section", "pt", "ht", "npaOnUnknownConsent"];
  var pubmineRequired = ["siteid"];
  var pubmineURL = "https://s.pubmine.com/head.js";
  function initMasterFrame(data, global2) {
    var paUnknown = data["npaOnUnknownConsent"] !== void 0 && data["npaOnUnknownConsent"] == "false";
    var ctxt = global2.context;
    var consent = ctxt.initialConsentState === null || ctxt.initialConsentState === CONSENT_POLICY_STATE.SUFFICIENT || ctxt.initialConsentState === CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED || ctxt.initialConsentState === CONSENT_POLICY_STATE.UNKNOWN && paUnknown;
    global2["__ATA_PP"] = {
      pt: data["pt"] || 1,
      ht: data["ht"] || 1,
      tn: "amp",
      amp: true,
      consent: consent ? 1 : 0,
      siteid: Number(data["siteid"]) || void 0
    };
    global2["__ATA"] = global2["__ATA"] || {};
    global2["__ATA"]["cmd"] = global2["__ATA"]["cmd"] || [];
    loadScript(global2, pubmineURL);
  }
  function createSlot(slotId, global2) {
    var containerEl = global2.document.getElementById("c");
    var adSlot = global2.document.createElement("div");
    adSlot.setAttribute("id", slotId);
    containerEl.appendChild(adSlot);
  }
  function pubmine(global2, data) {
    validateData(data, pubmineRequired, pubmineOptional);
    var sectionId = data["siteid"] + (data["section"] || "1");
    var slotConfig = {
      sectionId,
      height: data.height == 250 ? 250 : data.height - 15,
      width: data.width,
      window: global2
    };
    var slotId = "atatags-" + sectionId;
    createSlot(slotId, global2);
    var isMaster = global2.context.isMaster;
    if (isMaster) {
      initMasterFrame(data, global2);
    }
    var master = isMaster ? global2 : global2.context.master;
    master["__ATA"]["cmd"]["push"](function() {
      master["__ATA"]["insertStyles"](global2);
      master["__ATA"]["initSlot"](slotId, slotConfig);
    });
  }

  // ads/vendors/puffnetwork.js
  function puffnetwork(global2, data) {
    validateData(data, ["chid"]);
    global2.pn = data;
    writeScript(global2, "https://static.puffnetwork.com/amp_ad.js");
  }

  // ads/vendors/pulse.js
  function pulse(global2, data) {
    validateData(data, ["sid"]);
    global2.pulseInit = data;
    loadScript(global2, "https://static.pulse.mail.ru/pulse-widget-amp.js");
  }

  // ads/vendors/pulsepoint.js
  function pulsepoint(global2, data) {
    validateData(data, [], ["pid", "tagid", "tagtype", "slot", "timeout"]);
    if (data.tagtype === "hb") {
      headerBidding(global2, data);
    } else {
      tag(global2, data);
    }
  }
  function tag(global2, data) {
    writeScript(global2, "https://tag.contextweb.com/getjs.aspx?action=VIEWAD&cwpid=" + encodeURIComponent(data.pid) + "&cwtagid=" + encodeURIComponent(data.tagid) + "&cwadformat=" + encodeURIComponent(data.width + "X" + data.height));
  }
  function headerBidding(global2, data) {
    loadScript(global2, "https://ads.contextweb.com/ht.js", function() {
      var hbConfig = {
        timeout: data.timeout || 1e3,
        slots: [{
          cp: data.pid,
          ct: data.tagid,
          cf: data.width + "x" + data.height,
          placement: data.slot,
          elementId: "c"
        }],
        done: function done(targeting) {
          doubleclick(global2, {
            width: data.width,
            height: data.height,
            slot: data.slot,
            targeting: targeting[data.slot]
          });
        }
      };
      new window.PulsePointHeaderTag(hbConfig).init();
    });
  }

  // ads/vendors/purch.js
  function purch(global2, data) {
    validateData(data, [], ["pid", "divid", "config"]);
    global2.data = data;
    var adsrc = "https://ramp.purch.com/serve/creative_amp.js";
    validateSrcPrefix("https:", adsrc);
    writeScript(global2, adsrc);
  }

  // ads/vendors/quoraad.js
  function quoraad(global2, data) {
    validateData(data, ["adid"]);
    global2.ampAdParam = data;
    writeScript(global2, "https://a.quora.com/amp_ad.js");
  }

  // ads/vendors/rakutenunifiedads.js
  function rakutenunifiedads(global2, data) {
    validateData(data, ["id"]);
    if (hasOwn(data, "env")) {
      data.env = data.env + "-";
    } else {
      data.env = "";
    }
    global2.runa = data;
    writeScript(global2, "https://" + data.env + "s-cdn.rmp.rakuten.co.jp/js/amp.js");
  }

  // ads/vendors/rbinfox.js
  var jsnPrefix2 = "https://rb.infox.sg/";
  var n2 = "infoxContextAsyncCallbacks";
  function rbinfox(global2, data) {
    validateData(data, ["src"]);
    var src = data.src;
    validateSrcPrefix(jsnPrefix2, src);
    addToQueue2(global2, src);
    loadScript(global2, src);
  }
  function createContainer9(global2, renderTo4) {
    var d = global2.document.createElement("div");
    d.id = renderTo4;
    global2.document.getElementById("c").appendChild(d);
  }
  function getBlockId2(src) {
    var parts = src.split("/");
    return parts[parts.length - 1];
  }
  function addToQueue2(global2, src) {
    var blockId = getBlockId2(src);
    var ctx = n2 + blockId;
    global2[ctx] = global2[ctx] || [];
    global2[ctx].push(function() {
      var renderTo4 = "infox_" + blockId;
      createContainer9(global2, renderTo4);
      global2["INFOX" + blockId].renderTo(renderTo4);
    });
  }

  // ads/vendors/rcmwidget.js
  var WIDGET_DEFAULT_NODE_ID = "rcm-widget";
  function rcmwidget(global2, data) {
    validateData(data, ["rcmId", "nodeId", "blockId", "templateName", "projectId"], ["contextItemId"]);
    global2.rcmWidgetInit = data;
    createContainer10(global2, data.nodeId);
    loadScript(global2, "https://rcmjs.rambler.ru/static/rcmw/rcmw-amp.js");
  }
  function createContainer10(global2, nodeId) {
    if (nodeId === void 0) {
      nodeId = WIDGET_DEFAULT_NODE_ID;
    }
    var container = global2.document.createElement("div");
    container.id = nodeId;
    global2.document.getElementById("c").appendChild(container);
  }

  // ads/vendors/readmo.js
  function readmo(global2, data) {
    validateData(data, ["section"]);
    var config = {
      container: "#c",
      amp: true
    };
    if (data.url) {
      global2.publisherUrl = data.url;
    }
    Object.keys(data).forEach(function(property) {
      config[property] = data[property];
    });
    (global2.readmo = global2.readmo || []).push(config);
    loadScript(global2, "https://s.yimg.com/dy/ads/readmo.js", function() {
      return global2.context.renderStart();
    });
  }

  // ads/vendors/realclick.js
  function realclick(global2, data) {
    validateData(data, ["mcode"]);
    global2.rcParams = data;
    loadScript(global2, "https://ssp.realclick.co.kr/amp/ad.js");
  }

  // ads/vendors/recomad.js
  function createWidgetContainer(container, appId, widgetId, searchTerm, origin, baseUrl, puid) {
    container.className = "s24widget";
    container.setAttribute("data-app-id", appId);
    container.setAttribute("data-widget-id", widgetId);
    searchTerm && container.setAttribute("data-search-term", searchTerm);
    origin && container.setAttribute("data-origin", origin);
    baseUrl && container.setAttribute("data-base-url", baseUrl);
    puid && container.setAttribute("data-puid", puid);
    window.document.body.appendChild(container);
  }
  function recomad(global2, data) {
    validateData(data, ["appId", "widgetId", ["searchTerm", "origin"]]);
    createWidgetContainer(window.document.createElement("div"), data["appId"], data["widgetId"], data["searchTerm"] || "", data["origin"] || "", data["baseUrl"] || "", data["puid"] || "");
    loadScript(window, "https://widget.s24.com/js/s24widget.min.js");
  }

  // ads/vendors/recreativ.js
  function recreativ(global2, data) {
    validateData(data, ["bn"]);
    var target = global2.document.createElement("div");
    target.id = "bn_" + data["bn"];
    global2.document.getElementById("c").appendChild(target);
    loadScript(global2, "https://go.rcvlink.com/static/amp.js", function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/relap.js
  function relap(global2, data) {
    validateData(data, [], ["token", "url", "anchorid", "version"]);
    var urlParam = data["url"] || window.context.canonicalUrl;
    if (data["version"] === "v7") {
      window.onRelapAPIReady = function(relapAPI) {
        relapAPI["init"]({
          token: data["token"],
          url: urlParam
        });
      };
      window.onRelapAPIInit = function(relapAPI) {
        relapAPI["addWidget"]({
          cfgId: data["anchorid"],
          anchorEl: global2.document.getElementById("c"),
          position: "append",
          events: {
            onReady: function onReady() {
              window.context.renderStart();
            },
            onNoContent: function onNoContent() {
              window.context.noContentAvailable();
            }
          }
        });
      };
      loadScript(global2, "https://relap.io/v7/relap.js");
    } else {
      window.relapV6WidgetReady = function() {
        window.context.renderStart();
      };
      window.relapV6WidgetNoSimilarPages = function() {
        window.context.noContentAvailable();
      };
      var anchorEl = global2.document.createElement("div");
      anchorEl.id = data["anchorid"];
      global2.document.getElementById("c").appendChild(anchorEl);
      var url = "https://relap.io/api/v6/head.js?token=" + encodeURIComponent(data["token"]) + "&url=" + encodeURIComponent(urlParam);
      loadScript(global2, url);
    }
  }

  // ads/vendors/relappro.js
  function relappro(global2, data) {
    validateData(data, [], ["slotId", "nameAdUnit", "requirements"]);
    global2.params = data;
    loadScript(global2, "https://cdn.relappro.com/adservices/amp/relappro.amp.min.js");
  }

  // ads/vendors/remixd.js
  function remixd(global2, data) {
    global2._rmxd = {};
    global2._rmxd.url = data.url || global2.context.sourceUrl;
    global2._rmxd.amp = true;
    var sriptVersion = data.version || "5";
    var tagUrl = "https://tags.remixd.com/player/v" + sriptVersion + "/index.js?cb=" + Math.random();
    document.write('<script src="' + encodeURI(tagUrl) + '" id="remixd-audio-player-script"><\/script>');
    global2.context.renderStart();
  }

  // ads/vendors/revcontent.js
  function revcontent(global2, data) {
    var endpoint = "https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js";
    if (typeof data.revcontent !== "undefined") {
      if (typeof data.env === "undefined") {
        endpoint = "https://assets.revcontent.com/master/delivery.js";
      } else if (data.env == "dev") {
        endpoint = "https://performante.revcontent.dev/delivery.js";
      } else {
        endpoint = "https://assets.revcontent.com/" + data.env + "/delivery.js";
      }
    }
    var required = ["id", "height"];
    var optional = ["wrapper", "subIds", "revcontent", "env", "loadscript", "api", "key", "ssl", "adxw", "adxh", "rows", "cols", "domain", "source", "testing", "endpoint", "publisher", "branding", "font", "css", "sizer", "debug", "ampcreative", "gdpr", "gdprConsent", "usPrivacy"];
    data.endpoint = data.endpoint ? data.endpoint : "trends.revcontent.com";
    validateData(data, required, optional);
    global2.data = data;
    if (data.loadscript) {
      loadScript(window, endpoint);
    } else {
      writeScript(window, endpoint);
    }
  }

  // ads/vendors/revjet.js
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
  function revjet(global2, data) {
    validateData(data, ["tag", "key"], ["plc", "opts", "params"]);
    global2._revjetData = _extends5({}, data);
    loadScript(global2, "https://cdn.revjet.com/~cdn/JS/03/amp.js", void 0, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/rfp.js
  function rfp(global2, data) {
    validateData(data, ["adspotId"], ["stylesheetUrl", "country"]);
    global2.rfpData = data;
    writeScript(global2, "https://js.rfp.fout.jp/rfp-amp.js");
  }

  // ads/vendors/rnetplus.js
  var jsnPrefix3 = "https://api.rnet.plus/";
  function rnetplus(global2, data) {
    validateData(data, ["src"]);
    var src = data.src;
    validateSrcPrefix(jsnPrefix3, src);
    createContainer11(global2, "rnetplus_" + getBlockId3(src));
    loadScript(global2, src);
  }
  function createContainer11(global2, renderTo4) {
    var d = global2.document.createElement("div");
    d.id = renderTo4;
    global2.document.getElementById("c").appendChild(d);
  }
  function getBlockId3(src) {
    var parts = src.split("?");
    var vars = parts[1].split("&");
    for (var j = 0; j < vars.length; ++j) {
      var pair = vars[j].split("=");
      if (pair[0] == "blockId") {
        return pair[1];
      }
    }
    return "660";
  }

  // ads/vendors/rubicon.js
  function rubicon(global2, data) {
    validateData(data, [], ["account", "site", "zone", "size", "kw", "visitor", "inventory", "method", "callback"]);
    if (data.method === "smartTag") {
      smartTag(global2, data);
    }
  }
  function smartTag(global2, data) {
    global2.rp_account = data.account;
    global2.rp_site = data.site;
    global2.rp_zonesize = data.zone + "-" + data.size;
    global2.rp_adtype = "js";
    global2.rp_page = context.sourceUrl;
    global2.rp_kw = data.kw;
    global2.rp_visitor = data.visitor;
    global2.rp_inventory = data.inventory;
    global2.rp_amp = "st";
    global2.rp_callback = data.callback;
    writeScript(global2, "https://ads.rubiconproject.com/ad/" + encodeURIComponent(data.account) + ".js");
  }

  // ads/vendors/runative.js
  var requiredParams2 = ["spot"];
  var optionsParams = ["keywords", "adType", "param1", "param2", "param3", "subid", "cols", "rows", "title", "titlePosition", "adsByPosition"];
  var adContainerId = "runative_id";
  function runative(global2, data) {
    validateData(data, requiredParams2, optionsParams);
    var adContainer = global2.document.getElementById("c");
    var adNativeContainer = getAdContainer(global2);
    var initScript = getInitAdScript(global2, data);
    adContainer.appendChild(adNativeContainer);
    loadScript(global2, "//cdn.run-syndicate.com/sdk/v1/n.js", function() {
      global2.document.body.appendChild(initScript);
    });
  }
  function getInitData(data) {
    var initKeys = requiredParams2.concat(optionsParams);
    var initParams = {};
    initKeys.forEach(function(key) {
      if (key in data) {
        var initKey = key === "adType" ? "type" : key;
        initParams[initKey] = data[key];
      }
    });
    initParams["element_id"] = adContainerId;
    return parseJson(initParams);
  }
  function getAdContainer(global2) {
    var container = global2.document.createElement("div");
    container["id"] = adContainerId;
    return container;
  }
  function getInitAdScript(global2, data) {
    var scriptElement = global2.document.createElement("script");
    var initData = getInitData(data);
    var initScript = global2.document.createTextNode("NativeAd(" + JSON.stringify(initData) + ");");
    scriptElement.appendChild(initScript);
    return scriptElement;
  }

  // ads/google/a4a/shared/content-recommendation.js
  var _LAYOUT_ASPECT_RATIO_;
  var _LAYOUT_TEXT_HEIGHT_M;
  var _LAYOUT_AD_WIDTH_MAP;
  var LayoutType = {
    IMAGE_STACKED: "image_stacked",
    IMAGE_SIDEBYSIDE: "image_sidebyside",
    MOBILE_BANNER_IMAGE_SIDEBYSIDE: "mobile_banner_image_sidebyside",
    PUB_CONTROL_IMAGE_STACKED: "pub_control_image_stacked",
    PUB_CONTROL_IMAGE_SIDEBYSIDE: "pub_control_image_sidebyside",
    PUB_CONTROL_IMAGE_CARD_STACKED: "pub_control_image_card_stacked",
    PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE: "pub_control_image_card_sidebyside",
    PUB_CONTROL_TEXT: "pub_control_text",
    PUB_CONTROL_TEXT_CARD: "pub_control_text_card",
    PEDESTAL: "pedestal"
  };
  var LAYOUT_ASPECT_RATIO_MAP = (_LAYOUT_ASPECT_RATIO_ = {}, _LAYOUT_ASPECT_RATIO_[LayoutType.IMAGE_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.MOBILE_BANNER_IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 1 / 3.74, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_TEXT] = 0, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_TEXT_CARD] = 0, _LAYOUT_ASPECT_RATIO_);
  var LAYOUT_TEXT_HEIGHT_MAP = (_LAYOUT_TEXT_HEIGHT_M = {}, _LAYOUT_TEXT_HEIGHT_M[LayoutType.IMAGE_STACKED] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.MOBILE_BANNER_IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 85, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_TEXT] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_TEXT_CARD] = 80, _LAYOUT_TEXT_HEIGHT_M);
  var LAYOUT_AD_WIDTH_MAP = (_LAYOUT_AD_WIDTH_MAP = {}, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 100, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 200, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 150, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 250, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_TEXT] = 100, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_TEXT_CARD] = 150, _LAYOUT_AD_WIDTH_MAP);

  // ads/google/utils.js
  function getMultiSizeDimensions(multiSizeDataStr, primaryWidth, primaryHeight, multiSizeValidation, isFluidPrimary) {
    if (isFluidPrimary === void 0) {
      isFluidPrimary = false;
    }
    var dimensions = [];
    var arrayOfSizeStrs = multiSizeDataStr.split(",");
    for (var i = 0; i < arrayOfSizeStrs.length; i++) {
      var sizeStr = arrayOfSizeStrs[i];
      if (sizeStr.toLowerCase() == "fluid") {
        continue;
      }
      var size = sizeStr.split("x");
      if (size.length != 2) {
        user().error("AMP-AD", "Invalid multi-size data format '" + sizeStr + "'.");
        continue;
      }
      var width = Number(size[0]);
      var height = Number(size[1]);
      if (!validateDimensions(width, height, function(w) {
        return isNaN(w) || w <= 0;
      }, function(h) {
        return isNaN(h) || h <= 0;
      }, function(badParams) {
        return badParams.map(function(badParam) {
          return "Invalid " + badParam.dim + " of " + badParam.val + " given for secondary size.";
        }).join(" ");
      })) {
        continue;
      }
      if (!isFluidPrimary && !validateDimensions(width, height, function(w) {
        return w > primaryWidth;
      }, function(h) {
        return h > primaryHeight;
      }, function(badParams) {
        return badParams.map(function(badParam) {
          return "Secondary " + badParam.dim + " " + badParam.val + " " + ("can't be larger than the primary " + badParam.dim + ".");
        }).join(" ");
      })) {
        continue;
      }
      if (multiSizeValidation) {
        var _ret = function() {
          var minRatio = 2 / 3;
          var minWidth = minRatio * primaryWidth;
          var minHeight = minRatio * primaryHeight;
          if (!validateDimensions(width, height, function(w) {
            return w < minWidth;
          }, function(h) {
            return h < minHeight;
          }, function(badParams) {
            return badParams.map(function(badParam) {
              return "Secondary " + badParam.dim + " " + badParam.val + " is " + ("smaller than 2/3rds of the primary " + badParam.dim + ".");
            }).join(" ");
          })) {
            return "continue";
          }
        }();
        if (_ret === "continue")
          continue;
      }
      dimensions.push([width, height]);
    }
    return dimensions;
  }
  function validateDimensions(width, height, widthCond, heightCond, errorBuilder) {
    var badParams = [];
    if (widthCond(width)) {
      badParams.push({
        dim: "width",
        val: width
      });
    }
    if (heightCond(height)) {
      badParams.push({
        dim: "height",
        val: height
      });
    }
    if (badParams.length) {
      user().warn("AMP-AD", errorBuilder(badParams));
    }
    return !badParams.length;
  }

  // ads/vendors/sas.js
  function sas(global2, data) {
    var url, adHost, whSize;
    var plainFields = ["site", "area", "mid"];
    validateData(data, ["customerName"], ["adHost", "site", "size", "area", "mid", "tags", "multiSize"]);
    if (typeof data.adHost === "undefined") {
      adHost = encodeURIComponent(data["customerName"]) + "-ads.aimatch.com";
    } else {
      adHost = encodeURIComponent(data["adHost"]);
    }
    url = "//" + adHost + "/" + data["customerName"] + "/jserver";
    var multiSize = data.multiSize;
    var primaryWidth = parseInt(data.width, 10);
    var primaryHeight = parseInt(data.height, 10);
    var dimensions;
    var multiSizeValid = false;
    if (multiSize) {
      try {
        dimensions = getMultiSizeDimensions(multiSize, primaryWidth, primaryHeight, true);
        multiSizeValid = true;
        dimensions.unshift([primaryWidth, primaryHeight]);
      } catch (e) {
      }
    }
    for (var idx = 0; idx < plainFields.length; idx++) {
      if (data[plainFields[idx]]) {
        if (typeof data[plainFields[idx]] !== "undefined") {
          url += "/" + plainFields[idx] + "=" + encodeURIComponent(data[plainFields[idx]]);
        }
      }
    }
    if (typeof data.size !== "undefined") {
      url += "/SIZE=" + encodeURIComponent(data.size);
      if (typeof multiSize !== "undefined" && multiSizeValid) {
        url += "," + encodeURIComponent(multiSize);
      }
    } else if (typeof multiSize !== "undefined" && multiSizeValid) {
      whSize = primaryWidth + "x" + primaryHeight;
      url += "/SIZE=" + encodeURIComponent(whSize) + "," + encodeURIComponent(multiSize);
    }
    if (typeof data.tags !== "undefined") {
      var tags = parseJson(data.tags);
      for (var tag2 in tags) {
        url += "/" + tag2 + "=" + encodeURIComponent(tags[tag2]);
      }
    }
    writeScript(global2, url, function() {
      global2.context.renderStart();
    });
  }

  // ads/vendors/seedingalliance.js
  function seedingalliance(global2, data) {
    writeScript(global2, "https://d.nativendo.de/cds/delivery/init?url=" + encodeURIComponent(data.url));
  }

  // ads/vendors/sekindo.js
  function sekindo(global2, data) {
    validateData(data, ["spaceid"]);
    var pubUrl = encodeURIComponent(global2.context.sourceUrl);
    var excludesSet = {
      ampSlotIndex: 1,
      type: 1
    };
    var customParamMap = {
      spaceid: "s",
      width: "x",
      height: "y"
    };
    var query = "isAmpProject=1&pubUrl=" + pubUrl + "&cbuster=" + global2.context.startTime + "&";
    var getParam = "";
    for (var key in data) {
      if (hasOwn(data, key)) {
        if (typeof excludesSet[key] == "undefined") {
          getParam = typeof customParamMap[key] == "undefined" ? key : customParamMap[key];
          query += getParam + "=" + encodeURIComponent(data[key]) + "&";
        }
      }
    }
    loadScript(global2, "https://live.sekindo.com/live/liveView.php?" + query, function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/sharethrough.js
  function sharethrough(global2, data) {
    validateData(data, ["pkey"], []);
    global2.pkey = data.pkey;
    writeScript(global2, "https://sdk.sharethrough.com/amp.js");
  }

  // ads/vendors/shemedia.js
  function shemedia(global2, data) {
    validateData(data, ["slotType", "boomerangPath"]);
    loadScript(global2, "https://ads.shemedia.com/static/amp.js");
  }

  // ads/vendors/sklik.js
  function sklik(global2, data) {
    loadScript(global2, "https://c.imedia.cz/js/amp.js", function() {
      var parentId = "sklik_parent";
      var parentElement = document.createElement("div");
      parentElement.id = parentId;
      window.document.body.appendChild(parentElement);
      data.elm = parentId;
      data.url = global2.context.canonicalUrl;
      sklikProvider.show(data);
    });
  }

  // ads/vendors/slimcutmedia.js
  function slimcutmedia(global2, data) {
    global2._scm_amp = {
      allowed_data: ["pid", "ffc"],
      mandatory_data: ["pid"],
      data
    };
    validateData(data, global2._scm_amp.mandatory_data, global2._scm_amp.allowed_data);
    loadScript(global2, "https://static.freeskreen.com/publisher/" + encodeURIComponent(data.pid) + "/freeskreen.min.js");
  }

  // ads/vendors/smartadserver.js
  function smartadserver(global2, data) {
    loadScript(global2, "https://ec-ns.sascdn.com/diff/js/amp.v0.js", function() {
      global2.sas.callAmpAd(data);
    });
  }

  // ads/vendors/smartclip.js
  function smartclip(global2, data) {
    global2._smartclip_amp = {
      allowed_data: ["extra"],
      mandatory_data: ["plc", "sz"],
      data
    };
    validateData(data, global2._smartclip_amp.mandatory_data, global2._smartclip_amp.allowed_data);
    var rand = Math.round(Math.random() * 1e8);
    loadScript(global2, "https://des.smartclip.net/ads?type=dyn&plc=" + encodeURIComponent(data.plc) + "&sz=" + encodeURIComponent(data.sz) + (data.extra ? "&" + encodeURI(data.extra) : "") + "&rnd=" + rand);
  }

  // ads/vendors/smi2.js
  function smi2(global2, data) {
    validateData(data, ["blockid"]);
    global2._smi2 = global2._smi2 || {
      viewId: global2.context.pageViewId,
      blockId: data["blockid"],
      htmlURL: data["canonical"] || global2.context.canonicalUrl,
      ampURL: data["ampurl"] || global2.context.sourceUrl,
      testMode: data["testmode"] || "false",
      referrer: data["referrer"] || global2.context.referrer,
      hostname: global2.window.context.location.hostname,
      clientId: window.context.clientId,
      domFingerprint: window.context.domFingerprint,
      location: window.context.location,
      startTime: window.context.startTime
    };
    global2._smi2.AMPCallbacks = {
      renderStart: global2.context.renderStart,
      noContentAvailable: global2.context.noContentAvailable
    };
    var rand = Math.round(Math.random() * 1e8);
    loadScript(global2, "https://amp.smi2.ru/ampclient/ampfecth.js?rand=" + rand, function() {
    }, global2.context.noContentAvailable);
  }

  // ads/vendors/smilewanted.js
  function smilewanted(global2, data) {
    global2.smilewantedConfig = data;
    loadScript(global2, "https://prebid.smilewanted.com/amp/amp.js");
  }

  // ads/vendors/sogouad.js
  function sogouad(global2, data) {
    validateData(data, ["slot", "w", "h"], ["responsive"]);
    var slot = global2.document.getElementById("c");
    var ad = global2.document.createElement("div");
    var sogouUn = "sogou_un";
    global2[sogouUn] = window[sogouUn] || [];
    if (data.w === "100%") {
      global2[sogouUn].push({
        id: data.slot,
        ele: ad
      });
    } else {
      global2[sogouUn].push({
        id: data.slot,
        ele: ad,
        w: data.w,
        h: data.h
      });
    }
    slot.appendChild(ad);
    loadScript(global2, "https://theta.sogoucdn.com/wap/js/aw.js");
  }

  // ads/vendors/sona.js
  function sona(global2, data) {
    validateData(data, ["config"], ["responsive"]);
    var dataConfig = data["config"];
    var adConfig = parseJson(dataConfig);
    var configScript = global2.document.createElement("SCRIPT");
    var config = global2.document.createTextNode("(sona = window.sona || " + JSON.stringify(adConfig) + ")");
    configScript.appendChild(config);
    var slot = global2.document.getElementById("c");
    var ad = global2.document.createElement("SONA-WIDGET");
    ad.setAttribute("auto-responsive", "");
    ad.className = "ad-tag";
    slot.appendChild(ad);
    slot.appendChild(configScript);
    var scriptUrl2 = "https://cdn.sonaserve.com/v1.1/dist.js";
    loadScript(global2, scriptUrl2);
  }

  // ads/vendors/sortable.js
  function sortable(global2, data) {
    validateData(data, ["site", "name"], ["responsive"]);
    var slot = global2.document.getElementById("c");
    var ad = global2.document.createElement("div");
    var size = data.responsive === "true" ? "auto" : data.width + "x" + data.height;
    ad.className = "ad-tag";
    ad.setAttribute("data-ad-name", data.name);
    ad.setAttribute("data-ad-size", size);
    slot.appendChild(ad);
    loadScript(global2, "https://tags-cdn.deployads.com/a/" + encodeURIComponent(data.site) + ".js");
  }

  // ads/vendors/sovrn.js
  function sovrn(global2, data) {
    global2.width = data.width;
    global2.height = data.height;
    global2.domain = data.domain;
    global2.u = data.u;
    global2.iid = data.iid;
    global2.aid = data.aid;
    global2.z = data.z;
    global2.tf = data.tf;
    writeScript(global2, "https://ap.lijit.com/www/sovrn_amp/sovrn_ads.js");
  }

  // ads/vendors/speakol.js
  function speakol(global2, data) {
    validateData(data, ["widgetid"]);
    (global2.spksdk = global2.spksdk || []).push({
      widget_id: "wi-" + data["widgetid"],
      element: "wi-" + data["widgetid"]
    });
    var d = global2.document.createElement("div");
    d.classList.add("speakol-widget");
    d.id = "wi-" + data["widgetid"];
    global2.document.getElementById("c").appendChild(d);
    loadScript(global2, "https://cdn.speakol.com/widget/js/speakol-widget-v2.js");
  }

  // ads/vendors/spotx.js
  function spotx(global2, data) {
    validateData(data, ["spotx_channel_id", "width", "height"]);
    var script = global2.document.createElement("script");
    data["spotx_content_width"] = data.spotx_content_width || data.width;
    data["spotx_content_height"] = data.spotx_content_height || data.height;
    data["spotx_content_page_url"] = global2.context.location.href || global2.context.sourceUrl;
    for (var key in data) {
      if (hasOwn(data, key) && key.startsWith("spotx_")) {
        script.setAttribute("data-" + key, data[key]);
      }
    }
    global2["spotx_ad_done_function"] = function(spotxAdFound) {
      if (!spotxAdFound) {
        global2.context.noContentAvailable();
      }
    };
    script.onload = global2.context.renderStart;
    script.src = "//js.spotx.tv/easi/v1/" + data["spotx_channel_id"] + ".js";
    global2.document.body.appendChild(script);
  }

  // ads/vendors/springAds.js
  var initSlotList = function initSlotList2(context2) {
    context2.master.availableSlots = context2.master.availableSlots || {};
  };
  var registerSlot = function registerSlot2(slot) {
    context.master.availableSlots[slot.slotName] = slot;
  };
  function springAds(global2, data) {
    computeInMasterFrame(global2, "springAds", function() {
      initSlotList(context);
    }, function() {
    });
    if (data.adssetup) {
      var adSSetup = parseJson(data.adssetup);
      adSSetup["isAMP"] = true;
      adSSetup["availableSlots"] = context.master.availableSlots;
      context.master.adSSetup = global2.adSSetup = adSSetup;
      var sitename = adSSetup["publisher"].match(/(.*)\..*/)[1];
      loadScript(global2, "https://www.asadcdn.com/adlib/pages/" + sitename + "_amp.js");
    } else {
      registerSlot({
        global: global2,
        document,
        context,
        slotName: data["adslot"]
      });
      var adlib = window.ASCDP || context.master.ASCDP || "";
      adlib && adlib.adS.renderAd(data.adslot);
    }
  }

  // ads/vendors/ssp.js
  function _extends6() {
    _extends6 = Object.assign || function(target) {
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
    return _extends6.apply(this, arguments);
  }
  function keyBy(array, iteratee) {
    return array.reduce(function(itemById, item) {
      var _Object$assign;
      return Object.assign(itemById, (_Object$assign = {}, _Object$assign[iteratee(item)] = item, _Object$assign));
    }, {});
  }
  function runWhenFetchingSettled(fetchingSSPs, cb) {
    var sspCleanupInterval = setInterval(function() {
      if (!Object.keys(fetchingSSPs).length) {
        clearInterval(sspCleanupInterval);
        cb();
      }
    }, 100);
  }
  function handlePosition(element, center, dimensions) {
    var styles = _extends6({}, center ? {
      position: "absolute",
      top: "50%",
      left: "50%",
      "max-width": "100%",
      transform: "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)"
    } : {}, dimensions || {});
    setStyles(element, styles);
  }
  function handlePositionResponsive(e, element) {
    try {
      var _JSON$parse = JSON.parse(e.data), height = _JSON$parse.height;
      if (height) {
        handlePosition(element, true, {
          height: height + "px"
        });
      }
    } catch (e2) {
    }
  }
  function sizeAgainstWindow(availableWidth, data) {
    if (data.width > availableWidth) {
      var newWidth = availableWidth;
      var newHeight = data.height / (data.width / availableWidth);
      return {
        width: newWidth,
        height: newHeight
      };
    }
  }
  function forceElementReflow(element) {
    setStyle(element, "display", "none");
    element.offsetHeight;
    setStyle(element, "display", "block");
  }
  function ssp(global2, data) {
    validateData(data, ["position"], ["site"]);
    var position = {
      id: -1
    };
    try {
      position = parseJson(data.position);
      if (position["id"] === void 0) {
        position = {
          id: -1
        };
      }
    } catch (error) {
      global2.context.noContentAvailable();
      return;
    }
    if (position["id"] === -1) {
      global2.context.noContentAvailable();
      return;
    }
    var mW = global2.context.isMaster ? global2 : global2.context.master;
    var parentElement = document.createElement("div");
    parentElement.id = position["id"];
    global2.document.getElementById("c").appendChild(parentElement);
    var sizing = sizeAgainstWindow(parentElement.clientWidth, data);
    computeInMasterFrame(global2, "ssp-load", function(done) {
      loadScript(global2, "https://ssp.imedia.cz/static/js/ssp.js", function() {
        if (!global2["sssp"]) {
          done(false);
          return;
        }
        var sssp = global2["sssp"];
        sssp.config({
          site: data.site || global2.context.canonicalUrl
        });
        mW.sssp = sssp;
        mW.fetchingSSPs = {};
        done(true);
      });
    }, function(loaded) {
      if (!loaded) {
        global2.context.noContentAvailable();
        return;
      }
      var noContent = function noContent2() {
        runWhenFetchingSettled(mW.fetchingSSPs, function() {
          return global2.context.noContentAvailable();
        });
      };
      mW.fetchingSSPs[position.zoneId] = true;
      mW.sssp.getAds([position], {
        AMPcallback: function AMPcallback(ads) {
          var adById = keyBy(ads, function(item) {
            return item.id;
          });
          var ad = adById[position["id"]];
          if (!ad || ["error", "empty"].includes(ad.type)) {
            noContent();
          } else {
            if (ad.responsive) {
              global2.addEventListener("message", function(e) {
                handlePositionResponsive(e, parentElement);
              });
            }
            if (["APPNEXUS", "PUBMATIC"].includes(ad.dsp)) {
              global2.context.observeIntersection(function() {
                forceElementReflow(parentElement);
              });
            }
            mW.sssp.writeAd(ad, _extends6({}, position, {
              id: parentElement
            }));
            var d = ad.responsive ? {
              width: "100%",
              height: "100%"
            } : null;
            handlePosition(parentElement, true, d);
            global2.context.renderStart(sizing);
          }
          delete mW.fetchingSSPs[position.zoneId];
        }
      });
    });
  }

  // ads/vendors/strossle.js
  var renderTo2 = "strossle-widget";
  function strossle(global2, data) {
    validateData(data, ["widgetid"]);
    global2._strossle = global2._strossle || {
      widgetId: data["widgetid"]
    };
    createContainer12(global2, data);
    loadScript(global2, "https://widgets.sprinklecontent.com/v2/sprinkle.js", function() {
    });
  }
  function createContainer12(global2, data) {
    var d = global2.document.createElement("div");
    d.className = renderTo2;
    d.setAttribute("data-spklw-widget", data["widgetid"]);
    global2.document.getElementById("c").appendChild(d);
  }

  // ads/vendors/sulvo.js
  function sulvo(global2, data) {
    global2.sulvoAmpAdData = data;
    loadScript(global2, "https://live.demand.supply/up.amp.js");
  }

  // ads/vendors/sunmedia.js
  function sunmedia(global2, data) {
    global2._sunmedia_amp = {
      allowed_data: ["cskp", "crst", "cdb", "cid"],
      mandatory_data: ["cid"],
      data
    };
    validateData(data, global2._sunmedia_amp.mandatory_data, global2._sunmedia_amp.allowed_data);
    loadScript(global2, "https://vod.addevweb.com/sunmedia/amp/ads/SMIntextAMP.js");
  }

  // ads/vendors/svknative.js
  function svknative(global2, data) {
    validateData(data, ["widgetid"]);
    var s = global2.document.createElement("script");
    var scriptKey = "svknativeampwidget_" + Math.floor(Math.random() * 1e7);
    s.setAttribute("data-key", scriptKey);
    global2.document.getElementById("c").appendChild(s);
    (function(w, a2) {
      (w[a2] = w[a2] || []).push({
        "script_key": scriptKey,
        "settings": {
          "w": data["widgetid"],
          "amp": true
        }
      });
    })(global2, "_svk_n_widgets");
    loadScript(global2, "https://widget.svk-native.ru/js/embed.js");
  }

  // ads/vendors/swoop.js
  function swoop(global2, data) {
    validateData(data, ["layout", "placement", "publisher", "slot"]);
    computeInMasterFrame(global2, "swoop-load", function(done) {
      global2.swoopIabConfig = data;
      loadScript(global2, "https://www.swoop-amp.com/amp.js", function() {
        return done(global2.Swoop != null);
      });
    }, function(success) {
      if (success) {
        if (!global2.context.isMaster) {
          global2.context.master.Swoop.announcePlace(global2, data);
        }
      } else {
        global2.context.noContentAvailable();
        throw new Error("Swoop failed to load");
      }
    });
  }

  // ads/vendors/taboola.js
  function taboola(global2, data) {
    var denylist = ["height", "type", "width", "placement", "mode"];
    validateData(data, ["publisher", "placement", "mode", ["article", "video", "photo", "search", "category", "homepage", "other"]]);
    var params = {
      referrer: data.referrer || global2.context.referrer,
      url: data.url || global2.context.canonicalUrl
    };
    Object.keys(data).forEach(function(k) {
      if (denylist.indexOf(k) === -1) {
        params[k] = data[k];
      }
    });
    (global2._taboola = global2._taboola || []).push([{
      viewId: global2.context.pageViewId,
      publisher: data.publisher,
      placement: data.placement,
      mode: data.mode,
      framework: "amp",
      container: "c"
    }, params, {
      flush: true
    }]);
    global2.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        if (c.intersectionRect.height) {
          global2._taboola.push({
            visible: true,
            rects: c,
            placement: data.placement
          });
        }
      });
    });
    loadScript(global2, "https://cdn.taboola.com/libtrc/" + encodeURIComponent(data.publisher) + "/loader.js");
  }

  // ads/vendors/tail.js
  function tail(global2, data) {
    validateData(data, [], ["account"]);
    global2._ttprofiles = {};
    data.targeting = data.targeting || {};
    var CATEGORIES = {
      "E": "equipment",
      "A": "age",
      "X": "expandedage",
      "G": "gender",
      "U": "keywordsubject",
      "T": "soccerteam",
      "C": "socialclass",
      "S": "subject"
    };
    global2._ttprofiles._setTTProfile = function(profiles) {
      var profileVars = profiles[0].split("_");
      if (typeof profileVars === "undefined" || typeof profileVars[0] === "undefined" || profileVars[0] === "disabled") {
        return;
      }
      var parts = profileVars[0].split("|");
      for (var i = 0; i < parts.length; i++) {
        var part = parts[i].split(":");
        if (part.length === 2) {
          switch (part[0]) {
            case "S":
            case "U":
              var tmpValues = part[1].split(",");
              var value = [];
              for (var j = 0; j < tmpValues.length; j++) {
                var valueAndOccurrences = tmpValues[j].split(".");
                if (valueAndOccurrences.length >= 2) {
                  value.push(valueAndOccurrences[0]);
                } else {
                  value.push(tmpValues[j]);
                }
                data.targeting[CATEGORIES[part[0]]] = value;
              }
              break;
            default:
              data.targeting[CATEGORIES[part[0]]] = [part[1]];
          }
        }
      }
    };
    global2._ttprofiles._setProfile = function(args) {
      if (args.length > 0 && args[0] !== "disabled") {
        data.targeting["lifestyle"] = args[0].split(",");
      }
    };
    global2._ttprofiles._setCustomAudience = function(args) {
      if (args.length > 1) {
        var cas = args.slice(1);
        var values2 = [];
        if (cas.length > 0) {
          cas = cas[0].split(",");
          for (var i = 0; i < cas.length; i++) {
            var ca = cas[i].split("_");
            if (ca[0].length > 0) {
              values2.push(ca[0]);
            }
          }
        }
        if (values2.length > 0) {
          data.targeting["customaudience"] = values2;
        }
      }
    };
    global2._ttprofiles.push = function(args) {
      if (args.length > 1) {
        var fn = args[0];
        var fnArgs = args.slice(1);
        if (fnArgs.length > 0 && fnArgs[0].length > 0) {
          global2._ttprofiles[fn](fnArgs);
        }
      }
    };
    loadScript(global2, "https://d.t.tailtarget.com/profile");
    if (data.account) {
      loadScript(global2, "https://" + data.account + ".seg.t.tailtarget.com/ca?env=_ttprofiles");
    }
  }

  // ads/vendors/tcsemotion.js
  function tcsemotion(global2, d) {
    validateData(d, ["zone", "delhost"]);
    global2.djaxData = d;
    if (d.hb && d.hb == "true") {
      global2.djaxData.hb = true;
    } else {
      global2.djaxData.hb = false;
    }
    writeScript(global2, "https://ads.tcsemotion.com/www/delivery/amphb.js");
  }

  // ads/vendors/teads.js
  function teads(global2, data) {
    global2._teads_amp = {
      allowed_data: ["pid", "tag"],
      mandatory_data: ["pid"],
      mandatory_tag_data: ["tta", "ttp"],
      data
    };
    validateData(data, global2._teads_amp.mandatory_data, global2._teads_amp.allowed_data);
    if (data.tag) {
      validateData(data.tag, global2._teads_amp.mandatory_tag_data);
      global2._tta = data.tag.tta;
      global2._ttp = data.tag.ttp;
      loadScript(global2, "https://s8t.teads.tv/media/format/" + encodeURI(data.tag.js || "v3/teads-format.min.js"));
    } else {
      loadScript(global2, "https://a.teads.tv/page/" + encodeURIComponent(data.pid) + "/tag");
    }
  }

  // ads/vendors/temedya.js
  function temedya(global2, data) {
    validateData(data, ["widgetid"]);
    global2._temedya = global2._temedya || {
      widgetId: data["widgetid"]
    };
    global2._temedya.AMPCallbacks = {
      renderStart: global2.context.renderStart,
      noContentAvailable: global2.context.noContentAvailable
    };
    loadScript(global2, "https://widget.cdn.vidyome.com/builds/loader-amp.js", function() {
    }, global2.context.noContentAvailable);
  }

  // ads/vendors/torimochi.js
  function torimochi(global2, data) {
    validateData(data, ["area", "adtype"]);
    if (data.width < global2.width) {
      global2.width = data.width;
    }
    global2.height = data.height;
    global2.area = data["area"];
    global2.adtype = data["adtype"];
    global2.tcid = data["tcid"];
    global2.wid = data["wid"];
    global2.extra = parseJson(data["extra"] || "{}");
    global2.context.renderStart({
      width: global2.width,
      height: global2.height
    });
    var url = "https://asset.torimochi-ad.net/js/torimochi_ad_amp.min.js?v=" + Date.now();
    writeScript(global2, url);
  }

  // ads/vendors/tracdelight.js
  function tracdelight(global2, data) {
    var mandatoryFields2 = ["widget_id", "access_key"];
    var optionalFields = ["mode"];
    validateData(data, mandatoryFields2, optionalFields);
    global2.tdData = data;
    writeScript(global2, "https://scripts.tracdelight.io/amp.js");
  }

  // ads/vendors/triplelift.js
  function triplelift(global2, data) {
    var src = data.src;
    validateSrcPrefix("https://ib.3lift.com/", src);
    loadScript(global2, src);
  }

  // ads/vendors/trugaze.js
  function trugaze(global2) {
    loadScript(global2, "https://cdn.trugaze.io/amp-init-v1.js");
  }

  // ads/vendors/uas.js
  function forEachOnObject(theObject, callback2) {
    if (typeof theObject === "object" && theObject !== null) {
      if (typeof callback2 === "function") {
        for (var key in theObject) {
          if (hasOwn(theObject, key)) {
            callback2(key, theObject[key]);
          }
        }
      }
    }
  }
  function centerAd(global2) {
    var e = global2.document.getElementById("c");
    if (e) {
      setStyles(e, {
        top: "50%",
        left: "50%",
        bottom: "",
        right: "",
        transform: "translate(-50%, -50%)"
      });
    }
  }
  function uas(global2, data) {
    validateData(data, ["accId", "adUnit", "sizes"], ["locLat", "locLon", "locSrc", "pageURL", "targetings", "extraParams", "visibility"]);
    global2.Phoenix = {
      EQ: []
    };
    var uasDivId = "uas-amp-slot";
    global2.document.write('<div id="' + uasDivId + '"></div>');
    loadScript(global2, "https://ads.pubmatic.com/AdServer/js/phoenix.js", function() {
      global2.Phoenix.EQ.push(function() {
        global2.Phoenix.enableSingleRequestCallMode();
        global2.Phoenix.setInfo("AMP", 1);
        global2.Phoenix.setInfo("ACCID", data.accId);
        global2.Phoenix.setInfo("PAGEURL", global2.context.sourceUrl || global2.context.location.href);
        data.pageURL && global2.Phoenix.setInfo("PAGEURL", data.pageURL);
        data.locLat && global2.Phoenix.setInfo("LAT", data.locLat);
        data.locLon && global2.Phoenix.setInfo("LON", data.locLon);
        data.locSrc && global2.Phoenix.setInfo("LOC_SRC", data.locSrc);
        var slot = global2.Phoenix.defineAdSlot(data.adUnit, data.sizes, uasDivId);
        slot.setVisibility(1);
        forEachOnObject(data.targetings, function(key, value) {
          slot.setTargeting(key, value);
        });
        forEachOnObject(data.extraParams, function(key, value) {
          slot.setExtraParameters(key, value);
        });
        global2.Phoenix.display(uasDivId);
      });
    });
    centerAd(global2);
  }

  // ads/vendors/ucfunnel.js
  function ucfunnel(global2, data) {
    validateData(data, ["siteId"]);
    loadScript(window, "https://ads.aralego.com/ampsdk");
    window.context.renderStart();
  }

  // ads/vendors/unruly.js
  function unruly(global2, data, scriptLoader) {
    if (scriptLoader === void 0) {
      scriptLoader = loadScript;
    }
    validateData(data, ["siteId"]);
    global2.unruly = global2.unruly || {};
    global2.unruly.native = {
      siteId: data.siteId
    };
    scriptLoader(global2, "https://video.unrulymedia.com/native/native-loader.js");
  }

  // ads/vendors/uzou.js
  function uzou(global2, data) {
    validateData(data, ["widgetParams"], []);
    var prefixMap = {
      test: "dev-",
      development: "dev-",
      staging: "staging-",
      production: ""
    };
    var widgetParams = parseJson(data["widgetParams"]);
    var akamaiHost = widgetParams["akamaiHost"] || "speee-ad.akamaized.net";
    var placementCode = widgetParams["placementCode"];
    var mode = widgetParams["mode"] || "production";
    var entryPoint = "https://" + prefixMap[mode] + akamaiHost + "/tag/" + placementCode + "/js/outer-frame.min.js";
    var d = global2.document.createElement("div");
    d.className = "uz-" + placementCode + " uz-ny";
    var container = global2.document.getElementById("c");
    container.appendChild(d);
    var uzouInjector = {
      url: fixedEncodeURIComponent(widgetParams["url"] || global2.context.canonicalUrl || global2.context.sourceUrl),
      referer: widgetParams["referer"] || global2.context.referrer
    };
    ["adServerHost", "akamaiHost", "iframeSrcPath"].forEach(function(elem) {
      if (widgetParams[elem]) {
        uzouInjector[elem] = widgetParams[elem];
      }
    });
    global2.UzouInjector = uzouInjector;
    loadScript(global2, entryPoint, function() {
      global2.context.renderStart();
    });
  }
  function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  }

  // ads/vendors/valuecommerce.js
  function valuecommerce(global2, data) {
    validateData(data, ["pid"], ["sid", "vcptn", "om"]);
    global2.vcParam = data;
    writeScript(global2, "https://amp.valuecommerce.com/amp_bridge.js");
  }

  // ads/vendors/vdoai.js
  function vdoai(global2, data) {
    global2.vdo_ai_ = {
      unitData: data["unitid"],
      unitTagname: data["tagname"]
    };
    loadScript(global2, "https://a.vdo.ai/core/dependencies_amp/remote.js");
  }

  // ads/vendors/verizonmedia.js
  function verizonmedia(global2, data) {
    validateData(data, ["config"]);
    global2.jacData = data;
    writeScript(global2, "https://jac.yahoosandbox.com/amp/jac.js");
  }

  // ads/vendors/videointelligence.js
  function videointelligence(global2, data) {
    validateData(data, ["publisherId", "channelId"]);
    loadScript(global2, "https://s.vi-serve.com/tagLoaderAmp.js");
  }

  // ads/vendors/videonow.js
  function videonow(global2, data) {
    var mandatoryAttributes = ["pid"];
    var optionalAttributes = ["kind", "src"];
    var customTag = "";
    var logLevel = null;
    var vnModule = "";
    if (global2 && global2.name) {
      var p = parseJson(global2.name);
      if (p && p["attributes"] && p["attributes"]["_context"] && p["attributes"]["_context"]["location"] && p["attributes"]["_context"]["location"]["href"]) {
        var href = p["attributes"]["_context"]["location"].href;
        var logLevelParsed = /[?&]vn_debug\b(?:=(\d+))?/.exec(href);
        var vnModuleParsed = /vn_module=([^&]*)/.exec(href);
        var customTagParsed = /vn_init_module=([^&]*)/.exec(href);
        logLevel = logLevelParsed && logLevelParsed[1] || null;
        vnModule = vnModuleParsed && vnModuleParsed[1] || "";
        customTag = customTagParsed && customTagParsed[1] || "";
      }
    }
    validateData(data, mandatoryAttributes, optionalAttributes);
    var profileId = data.pid || 1;
    var script = customTag && tryDecodeUriComponent(customTag) || data.src && tryDecodeUriComponent(data.src) || "https://cdn.videonow.ru/vn_init_module.js";
    script = addParam(script, "amp", 1);
    script = addParam(script, "profileId", profileId);
    if (logLevel !== null) {
      script = addParam(script, "vn_debug", String(logLevel));
    }
    if (vnModule) {
      script = addParam(script, "vn_module", vnModule);
    }
    loadScript(global2, script);
  }
  function addParam(script, name, value) {
    if (script.indexOf(name) < 0) {
      script += (~script.indexOf("?") ? "&" : "?") + name + "=" + value;
    }
    return script;
  }

  // ads/vendors/viralize.js
  function viralize(global2, data) {
    var endpoint = "https://ads.viralize.tv/display/";
    var required = ["zid"];
    var optional = ["extra"];
    validateData(data, required, optional);
    var defaultLocation = "sel-#c>script";
    var pubPlatform = "amp";
    var queryParams = parseJson(data.extra || "{}");
    queryParams["zid"] = data.zid;
    queryParams["pub_platform"] = pubPlatform;
    if (!queryParams["location"]) {
      queryParams["location"] = defaultLocation;
    }
    if (!queryParams["u"]) {
      queryParams["u"] = global2.context.sourceUrl;
    }
    var scriptUrl2 = addParamsToUrl(endpoint, queryParams);
    loadScript(global2, scriptUrl2, function() {
      return global2.context.renderStart();
    }, function() {
      return global2.context.noContentAvailable();
    });
  }

  // ads/vendors/vlyby.js
  function _extends7() {
    _extends7 = Object.assign || function(target) {
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
    return _extends7.apply(this, arguments);
  }
  function vlyby(global2, data) {
    global2._vlyby_amp = {
      allowed_data: ["publisherid", "placementid", "pubref"],
      mandatory_data: ["publisherid", "placementid"],
      data: _extends7({
        pubref: "",
        publisherid: "",
        placementid: ""
      }, data)
    };
    validateData(data, global2._vlyby_amp.mandatory_data);
    var rand = Math.round(Math.random() * 1e8);
    global2.context.observeIntersection(function(changes) {
      changes.forEach(function(c) {
        if (global2._vlyby_amp) {
          global2._vlyby_amp.rects = c;
        }
      });
    });
    var containerId = "qad" + rand;
    createContainer14(global2, containerId);
    createScript(global2, containerId);
    function createScript(global3, id) {
      var s = global3.document.createElement("script");
      var referrer = data["pubref"] || global3.context.canonicalUrl;
      s.setAttribute("type", "text/javascript");
      s.setAttribute("async", "true");
      s.setAttribute("src", "//cdn.vlyby.com/amp/qad/qad-outer2.js");
      s.setAttribute("data-PubId", data["publisherid"]);
      s.setAttribute("data-PlacementId", data["placementid"]);
      s.setAttribute("data-DivId", id);
      s.setAttribute("data-PubRef", referrer);
      global3.document.getElementById("c").appendChild(s);
    }
    function createContainer14(global3, id) {
      var d = global3.document.createElement("div");
      d.id = id;
      global3.document.getElementById("c").appendChild(d);
    }
  }

  // ads/vendors/vmfive.js
  function vmfive(global2, data) {
    var mandatory_fields = ["appKey", "placementId", "adType"];
    var optional_fields = [];
    var adType = data.adType, appKey = data.appKey, placementId = data.placementId;
    global2._vmfive_amp = {
      appKey,
      placementId,
      adType
    };
    validateData(data, mandatory_fields, optional_fields);
    createAdUnit2(global2, placementId, adType);
    setupSDKReadyCallback(global2, appKey);
    parallelDownloadScriptsAndExecuteInOrder(global2);
  }
  function parallelDownloadScriptsAndExecuteInOrder(win) {
    ["https://vawpro.vm5apis.com/man.js", "https://man.vm5apis.com/dist/adn-web-sdk.js"].forEach(function(src) {
      var script = document.createElement("script");
      script.src = src;
      script.async = false;
      win.document.head.appendChild(script);
    });
  }
  function createAdUnit2(win, placementId, adType) {
    var el = document.createElement("vmfive-ad-unit");
    el.setAttribute("placement-id", placementId);
    el.setAttribute("ad-type", adType);
    win.document.getElementById("c").appendChild(el);
  }
  function setupSDKReadyCallback(win, appKey) {
    win.onVM5AdSDKReady = function(sdk) {
      return sdk.init({
        appKey
      });
    };
  }

  // ads/vendors/webediads.js
  function webediads(global2, data) {
    validateData(data, ["site", "page", "position"], ["query"]);
    loadScript(global2, "https://eu1.wbdds.com/amp.min.js", function() {
      global2.wads.amp.init({
        "site": data.site,
        "page": data.page,
        "position": data.position,
        "query": data.query ? data.query : ""
      });
    });
  }

  // ads/vendors/weborama.js
  function weboramaDisplay(global2, data) {
    var mandatoryFields2 = ["width", "height", "wbo_account_id", "wbo_tracking_element_id", "wbo_fullhost"];
    var optionalFields = [
      "wbo_bid_price",
      "wbo_price_paid",
      "wbo_random",
      "wbo_debug",
      "wbo_host",
      "wbo_publisherclick",
      "wbo_customparameter",
      "wbo_disable_unload_event",
      "wbo_donottrack",
      "wbo_script_variant",
      "wbo_is_mobile",
      "wbo_vars",
      "wbo_weak_encoding"
    ];
    validateData(data, mandatoryFields2, optionalFields);
    global2.weborama_display_tag = {
      forcesecure: true,
      bursttarget: "self",
      burst: "never",
      width: data.width,
      height: data.height,
      account_id: data.wbo_account_id,
      customparameter: data.wbo_customparameter,
      tracking_element_id: data.wbo_tracking_element_id,
      host: data.wbo_host,
      fullhost: data.wbo_fullhost,
      bid_price: data.wbo_bid_price,
      price_paid: data.wbo_price_paid,
      random: data.wbo_random,
      debug: data.wbo_debug,
      publisherclick: data.wbo_publisherclick,
      disable_unload_event: data.wbo_disable_unload_event,
      donottrack: data.wbo_donottrack,
      script_variant: data.wbo_script_variant,
      is_mobile: data.wbo_is_mobile,
      vars: data.wbo_vars,
      weak_encoding: data.wbo_weak_encoding
    };
    writeScript(global2, "https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js");
  }

  // ads/vendors/whopainfeed.js
  function whopainfeed(global2, data) {
    validateData(data, ["siteid"]);
    global2._whopainfeed = global2._whopainfeed || {
      viewId: global2.context.pageViewId,
      siteId: data["siteid"],
      testMode: data["testmode"] || "false",
      template: data["template"] || "default"
    };
    loadScript(global2, "https://widget.infeed.com.ar/widget/widget-amp.js");
  }

  // ads/vendors/widespace.js
  function widespace(global2, data) {
    var WS_AMP_CODE_VER = "1.0.1";
    var demo = [];
    demo = ["Gender", "Country", "Region", "City", "Postal", "Yob"].map(function(d) {
      return "demo" + d;
    });
    validateData(data, ["sid"], demo);
    var url = "https://engine.widespace.com/map/engine/dynamic?isamp=1&ampver=" + WS_AMP_CODE_VER + "&#sid=" + encodeURIComponent(data.sid);
    writeScript(global2, url);
  }

  // ads/vendors/wisteria.js
  function wisteria(global2, data) {
    var d = global2.document.createElement("div");
    d.id = "_wisteria_recommend_contents";
    global2.document.getElementById("c").appendChild(d);
    var originalUrl = global2.context.canonicalUrl;
    validateData(data, ["siteId", "templateNumber"]);
    loadScript(global2, "https://wisteria-js.excite.co.jp/wisteria.js?site_id=" + data["siteId"] + "&template_no=" + data["templateNumber"] + "&original_url=" + originalUrl);
  }

  // ads/vendors/wpmedia.js
  function wpmedia(global2, data) {
    validateData(data, ["slot", "bunch"], ["sn", "slots"]);
    var url = "https://std.wpcdn.pl/wpjslib/wpjslib-amp.js";
    writeScript(global2, url, function() {
      window.run(data);
    });
  }

  // ads/vendors/xlift.js
  function xlift(global2, data) {
    validateData(data, ["mediaid"]);
    global2.xliftParams = data;
    var d = global2.document.createElement("div");
    d.id = "_XL_recommend";
    global2.document.getElementById("c").appendChild(d);
    d.addEventListener("SuccessLoadedXliftAd", function(e) {
      e.detail = e.detail || {
        adSizeInfo: {}
      };
      global2.context.renderStart(e.detail.adSizeInfo);
    });
    d.addEventListener("FailureLoadedXliftAd", function() {
      global2.context.noContentAvailable();
    });
    global2.XliftAmpHelper = null;
    loadScript(global2, "https://cdn.x-lift.jp/resources/common/xlift_amp.js", function() {
      if (!global2.XliftAmpHelper) {
        global2.context.noContentAvailable();
      } else {
        global2.XliftAmpHelper.show();
      }
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/yahoo.js
  function yahoo(global2, data) {
    validateData(data, ["sid", "site", "sa"]);
    global2.yadData = data;
    writeScript(global2, "https://s.yimg.com/aaq/ampad/display.js");
  }

  // ads/vendors/yahoofedads.js
  function yahoofedads(global2, data) {
    validateData(data, ["adUnit", "site", "region", "lang", "sa", "spaceId", "url"]);
    global2.amp = true;
    global2.adConfig = {
      "adPositionOverride": data.adPositionOverride,
      "adUnit": data.adUnit,
      "forceSource": data.forceSource,
      "height": data.height,
      "lang": data.lang,
      "publisherUrl": data.url,
      "region": data.region,
      "sa": data.sa,
      "sectionId": data.sectionId,
      "site": data.site,
      "spaceId": data.spaceId,
      "width": data.width
    };
    loadScript(global2, "https://s.yimg.com/aaq/ampyahoofedads/yahoofedads.js", function() {
      return global2.context.renderStart();
    });
  }

  // ads/vendors/yahoojp.js
  function yahoojp(global2, data) {
    validateData(data, ["yadsid"], []);
    global2.yahoojpParam = data;
    writeScript(global2, "https://s.yimg.jp/images/listing/tool/yads/ydn/amp/amp.js");
  }

  // ads/vendors/yahoonativeads.js
  function yahoonativeads(global2, data) {
    validateData(data, ["code", "url"]);
    global2.publisherUrl = data.url;
    global2.amp = true;
    var config = {};
    if (data.key) {
      config.apiKey = data.key;
    }
    Object.keys(data).forEach(function(property) {
      config[property] = data[property];
    });
    (global2.native = global2.native || []).push(config);
    loadScript(global2, "https://s.yimg.com/dy/ads/native.js", function() {
      return global2.context.renderStart();
    });
  }

  // ads/vendors/yektanet.js
  function yektanet(global2, data) {
    validateData(data, ["publisherName", "scriptName", "posId"], ["adType"]);
    var isBanner = data["adType"] === "banner";
    var container = document.getElementById("c");
    var adDiv = document.createElement("div");
    adDiv.setAttribute("id", data["posId"]);
    if (isBanner) {
      adDiv.setAttribute("class", "yn-bnr");
    }
    container.appendChild(adDiv);
    var now = new Date();
    var version = [now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()].join("0");
    var scriptSrc = isBanner ? "https://cdn.yektanet.com/template/bnrs/yn_bnr.min.js" : "https://cdn.yektanet.com/js/" + encodeURIComponent(data["publisherName"]) + "/" + encodeURIComponent(data["scriptName"]);
    loadScript(global2, scriptSrc + "?v=" + version);
  }

  // ads/vendors/yengo.js
  function yengo(global2, data) {
    validateData(data, ["blockId"]);
    var url = "https://code.yengo.com/data/" + encodeURIComponent(data["blockId"]) + ".js?async=1&div=c";
    loadScript(global2, url, function() {
      global2.context.renderStart();
    }, function() {
      global2.context.noContentAvailable();
    });
  }

  // ads/vendors/yieldbot.js
  function yieldbot(global2, data) {
    validateData(data, ["psn", "ybSlot", "slot"]);
    global2.ybotq = global2.ybotq || [];
    loadScript(global2, "https://cdn.yldbt.com/js/yieldbot.intent.amp.js", function() {
      global2.ybotq.push(function() {
        try {
          var multiSizeDataStr = data.multiSize || null;
          var primaryWidth = parseInt(data.overrideWidth || data.width, 10);
          var primaryHeight = parseInt(data.overrideHeight || data.height, 10);
          var dimensions;
          if (multiSizeDataStr) {
            dimensions = getMultiSizeDimensions(multiSizeDataStr, primaryWidth, primaryHeight, false);
            dimensions.unshift([primaryWidth, primaryHeight]);
          } else {
            dimensions = [[primaryWidth, primaryHeight]];
          }
          global2.yieldbot.psn(data.psn);
          global2.yieldbot.enableAsync();
          if (window.context.isMaster) {
            global2.yieldbot.defineSlot(data.ybSlot, {
              sizes: dimensions
            });
            global2.yieldbot.go();
          } else {
            var slots = {};
            slots[data.ybSlot] = dimensions;
            global2.yieldbot.nextPageview(slots);
          }
        } catch (e) {
          rethrowAsync(e);
        }
      });
      global2.ybotq.push(function() {
        try {
          var targeting = global2.yieldbot.getSlotCriteria(data["ybSlot"]);
          data["targeting"] = data["targeting"] || {};
          for (var key in targeting) {
            data.targeting[key] = targeting[key];
          }
        } catch (e) {
          rethrowAsync(e);
        }
        user().warn("AMP-AD", 'type="yieldbot" will no longer be supported starting on March 29, 2018. Please use your amp-ad-network and RTC to configure a Yieldbot callout vendor. Refer to https://github.com/ampproject/amphtml/blob/main/extensions/amp-a4a/rtc-publisher-implementation-guide.md#setting-up-rtc-config for more information.');
      });
    });
  }

  // ads/vendors/yieldmo.js
  function yieldmo(global2, data) {
    var ymElem = global2.document.createElement("div");
    ymElem.id = "ym_" + data.ymid;
    ymElem.className = "ym";
    ymElem.dataset["ampEnabled"] = true;
    global2.document.getElementById("c").appendChild(ymElem);
    var swimLane = Math.round(5 * Math.random() / 3);
    var ymJs = "https://static.yieldmo.com/ym." + swimLane + ".js";
    loadScript(global2, ymJs);
  }

  // ads/vendors/yieldone.js
  function yieldone(global2, data) {
    validateData(data, ["pubid", "pid", "width", "height"], []);
    global2.yieldoneParam = data;
    writeScript(global2, "https://img.ak.impact-ad.jp/ic/pone/commonjs/yone-amp.js");
  }

  // ads/vendors/yieldpro.js
  function yieldpro(global2, data) {
    validateData(data, ["sectionId", "slot", "pubnetwork"], ["instance", "custom", "adServerUrl", "cacheSafe", "pageIdModifier", "click3rd", "debugsrc"]);
    var SCRIPT_HOST = "creatives.yieldpro.eu/showad_";
    var scriptUrl2 = "https://" + SCRIPT_HOST + data["pubnetwork"] + ".js";
    if (data["debugsrc"]) {
      scriptUrl2 = data["debugsrc"];
    }
    computeInMasterFrame(global2, "yieldpro-request", function(done) {
      var success = false;
      if (!global2.showadAMPAdapter) {
        global2.showadAMPAdapter = {
          registerSlot: function registerSlot3() {
          }
        };
        loadScript(global2, scriptUrl2, function() {
          if (global2.showadAMPAdapter.inited) {
            success = true;
          }
          done(success);
        });
      } else {
        done(true);
      }
    }, function(success) {
      if (success) {
        global2.showadAMPAdapter = global2.context.master.showadAMPAdapter;
        global2.showadAMPAdapter.registerSlot(data, global2);
      } else {
        throw new Error("Yieldpro AdTag failed to load");
      }
    });
  }

  // ads/vendors/zedo.js
  function zedo(global2, data) {
    validateData(data, ["superId", "network", "placementId", "channel", "publisher", "dim"], ["charset", "callback", "renderer"]);
    loadScript(global2, "https://ss3.zedo.com/gecko/tag/Gecko.amp.min.js", function() {
      var ZGTag = global2.ZGTag;
      var charset = data.charset || "";
      var callback2 = data.callback || function() {
      };
      var geckoTag = new ZGTag(data.superId, data.network, "", "", charset, callback2);
      geckoTag.setAMP();
      var placement = geckoTag.addPlacement(data.placementId, data.channel, data.publisher, data.dim, data.width, data.height);
      if (data.renderer) {
        for (var key in data.renderer) {
          placement.includeRenderer(data.renderer[key].name, data.renderer[key].value);
        }
      } else {
        placement.includeRenderer("display", {});
      }
      var slot = global2.document.createElement("div");
      slot.id = "zdt_" + data.placementId;
      var divContainer = global2.document.getElementById("c");
      if (divContainer) {
        divContainer.appendChild(slot);
      }
      geckoTag.loadAds();
      geckoTag.placementReady(data.placementId);
    });
  }

  // ads/vendors/zen.js
  var n3 = "yandexZenAsyncCallbacks";
  var renderTo3 = "zen-widget";
  function zen(global2, data) {
    validateData(data, ["clid"], ["size", "orientation", "successCallback", "failCallback"]);
    addToQueue3(global2, data);
    loadScript(global2, "https://zen.yandex.ru/widget-loader");
  }
  function addToQueue3(global2, data) {
    global2[n3] = global2[n3] || [];
    global2[n3].push(function() {
      createContainer13(global2, renderTo3);
      var YandexZen = global2.YandexZen;
      var config = Object.assign(data, {
        clid: JSON.parse(data.clid),
        container: "#" + renderTo3,
        isAMP: true,
        successCallback: function successCallback() {
          if (typeof data.successCallback === "function") {
            data.successCallback();
          }
        },
        failCallback: function failCallback() {
          if (typeof data.failCallback === "function") {
            data.failCallback();
          }
        }
      });
      YandexZen.renderWidget(config);
    });
  }
  function createContainer13(global2, id) {
    var d = global2.document.createElement("div");
    d.id = id;
    global2.document.getElementById("c").appendChild(d);
  }

  // ads/vendors/zergnet.js
  function zergnet(global2, data) {
    validateData(data, ["zergid"], []);
    global2.zergnetWidgetId = data.zergid;
    writeScript(global2, "https://www.zergnet.com/zerg-amp.js");
  }

  // ads/vendors/zucks.js
  function zucks(global2, data) {
    validateData(data, ["frameId"]);
    if (data["adtype"] === "zoe") {
      loadScript(global2, "https://j.zoe.zucks.net/zoe.min.js", function() {
        var frameId = data["frameId"];
        var elementId = "zucks-widget-parent";
        var d = global2.document.createElement("ins");
        d.id = elementId;
        global2.document.getElementById("c").appendChild(d);
        if (data["zoeMultiAd"] !== "true") {
          (global2.gZgokZoeQueue = global2.gZgokZoeQueue || []).push({
            frameId
          });
        }
        (global2.gZgokZoeWidgetQueue = global2.gZgokZoeWidgetQueue || []).push({
          frameId,
          parent: "#" + elementId
        });
      });
    } else if (data["adtype"] === "native") {
      var s = global2.document.createElement("script");
      s.src = "https://j.zucks.net.zimg.jp/n?f=" + data["frameId"];
      global2.document.getElementById("c").appendChild(s);
    } else {
      writeScript(global2, "https://j.zucks.net.zimg.jp/j?f=" + data["frameId"]);
    }
  }

  // 3p/integration.js
  init(window);
  if (getMode().test || getMode().localDev) {
    register("_ping_", _ping_);
    register("fake-delayed", fakeDelayed);
  }
  register("1wo", _1wo);
  register("24smi", _24smi);
  register("3d-gltf", gltfViewer);
  register("a8", a8);
  register("a9", a9);
  register("accesstrade", accesstrade);
  register("adagio", adagio);
  register("adblade", adblade);
  register("adbutler", adbutler);
  register("adform", adform);
  register("adfox", adfox);
  register("adgeneration", adgeneration);
  register("adglare", adglare);
  register("adhese", adhese);
  register("adincube", adincube);
  register("adition", adition);
  register("adman", adman);
  register("admanmedia", admanmedia);
  register("admixer", admixer);
  register("adnuntius", adnuntius);
  register("adocean", adocean);
  register("adop", adop);
  register("adpicker", adpicker);
  register("adplugg", adplugg);
  register("adpon", adpon);
  register("adpushup", adpushup);
  register("adreactor", adreactor);
  register("adsensor", adsensor);
  register("adservsolutions", adservsolutions);
  register("adsloom", adsloom);
  register("adsnative", adsnative);
  register("adspeed", adspeed);
  register("adspirit", adspirit);
  register("adstir", adstir);
  register("adstyle", adstyle);
  register("adtech", adtech);
  register("adtelligent", adtelligent);
  register("adthrive", adthrive);
  register("adunity", adunity);
  register("aduptech", aduptech);
  register("adventive", adventive);
  register("adverline", adverline);
  register("adverticum", adverticum);
  register("advertserve", advertserve);
  register("adyoulike", adyoulike);
  register("affiliateb", affiliateb);
  register("aja", aja);
  register("amoad", amoad);
  register("aniview", aniview);
  register("anyclip", anyclip);
  register("appnexus", appnexus);
  register("appvador", appvador);
  register("atomx", atomx);
  register("baidu", baidu);
  register("beaverads", beaverads);
  register("beopinion", beopinion);
  register("bidtellect", bidtellect);
  register("blade", blade);
  register("bodymovinanimation", bodymovinanimation);
  register("brainy", brainy);
  register("bringhub", bringhub);
  register("broadstreetads", broadstreetads);
  register("byplay", byplay);
  register("caajainfeed", caajainfeed);
  register("capirs", capirs);
  register("caprofitx", caprofitx);
  register("cedato", cedato);
  register("chargeads", chargeads);
  register("colombia", colombia);
  register("conative", conative);
  register("connatix", connatix);
  register("contentad", contentad);
  register("criteo", criteo);
  register("csa", csa);
  register("dable", dable);
  register("digiteka", digiteka);
  register("directadvert", directadvert);
  register("distroscale", distroscale);
  register("dotandads", dotandads);
  register("dynad", dynad);
  register("eadv", eadv);
  register("embedly", embedly);
  register("empower", empower);
  register("engageya", engageya);
  register("epeex", epeex);
  register("eplanning", eplanning);
  register("ezoic", ezoic);
  register("f1e", f1e);
  register("f1h", f1h);
  register("facebook", facebook);
  register("feedad", feedad);
  register("felmat", felmat);
  register("finative", finative);
  register("firstimpression", firstimpression);
  register("flite", flite);
  register("fluct", fluct);
  register("forkmedia", forkmedia);
  register("freewheel", freewheel);
  register("fusion", fusion);
  register("genieessp", genieessp);
  register("giraff", giraff);
  register("github", github);
  register("glomex", glomex);
  register("gmossp", gmossp);
  register("gumgum", gumgum);
  register("holder", holder);
  register("ibillboard", ibillboard);
  register("idealmedia", idealmedia);
  register("ima-video", imaVideo);
  register("imedia", imedia);
  register("imobile", imobile);
  register("imonomy", imonomy);
  register("improvedigital", improvedigital);
  register("industrybrains", industrybrains);
  register("inmobi", inmobi);
  register("innity", innity);
  register("insticator", insticator);
  register("invibes", invibes);
  register("iprom", iprom);
  register("ix", ix);
  register("jubna", jubna);
  register("kargo", kargo);
  register("ketshwa", ketshwa);
  register("kiosked", kiosked);
  register("kixer", kixer);
  register("kuadio", kuadio);
  register("lentainform", lentainform);
  register("ligatus", ligatus);
  register("lockerdome", lockerdome);
  register("logly", logly);
  register("loka", loka);
  register("luckyads", luckyads);
  register("macaw", macaw);
  register("mads", mads);
  register("mantis-display", mantisDisplay);
  register("mantis-recommend", mantisRecommend);
  register("marfeel", marfeel);
  register("mathml", mathml);
  register("mediaad", mediaad);
  register("medianet", medianet);
  register("mediavine", mediavine);
  register("medyanet", medyanet);
  register("meg", meg);
  register("mgid", mgid);
  register("microad", microad);
  register("miximedia", miximedia);
  register("mixpo", mixpo);
  register("monetizer101", monetizer101);
  register("mox", mox);
  register("my6sense", my6sense);
  register("myfinance", myfinance);
  register("myoffrz", myoffrz);
  register("mytarget", mytarget);
  register("mywidget", mywidget);
  register("nativeroll", nativeroll);
  register("nativery", nativery);
  register("nativo", nativo);
  register("navegg", navegg);
  register("nend", nend);
  register("netletix", netletix);
  register("noddus", noddus);
  register("nokta", nokta);
  register("nws", nws);
  register("oblivki", oblivki);
  register("onead", onead);
  register("onnetwork", onnetwork);
  register("openadstream", openadstream);
  register("openx", openx);
  register("opinary", opinary);
  register("outbrain", outbrain);
  register("pixels", pixels);
  register("playstream", playstream);
  register("plista", plista);
  register("polymorphicads", polymorphicads);
  register("popin", popin);
  register("postquare", postquare);
  register("ppstudio", ppstudio);
  register("pressboard", pressboard);
  register("promoteiq", promoteiq);
  register("pubexchange", pubexchange);
  register("pubguru", pubguru);
  register("pubmatic", pubmatic);
  register("pubmine", pubmine);
  register("puffnetwork", puffnetwork);
  register("pulse", pulse);
  register("pulsepoint", pulsepoint);
  register("purch", purch);
  register("quoraad", quoraad);
  register("rakutenunifiedads", rakutenunifiedads);
  register("rbinfox", rbinfox);
  register("rcmwidget", rcmwidget);
  register("readmo", readmo);
  register("realclick", realclick);
  register("reddit", reddit);
  register("recomad", recomad);
  register("recreativ", recreativ);
  register("relap", relap);
  register("relappro", relappro);
  register("remixd", remixd);
  register("revcontent", revcontent);
  register("revjet", revjet);
  register("rfp", rfp);
  register("rnetplus", rnetplus);
  register("rubicon", rubicon);
  register("runative", runative);
  register("sas", sas);
  register("seedingalliance", seedingalliance);
  register("sekindo", sekindo);
  register("sharethrough", sharethrough);
  register("shemedia", shemedia);
  register("sklik", sklik);
  register("ssp", ssp);
  register("slimcutmedia", slimcutmedia);
  register("smartadserver", smartadserver);
  register("smartclip", smartclip);
  register("smi2", smi2);
  register("smilewanted", smilewanted);
  register("sogouad", sogouad);
  register("sona", sona);
  register("sortable", sortable);
  register("sovrn", sovrn);
  register("speakol", speakol);
  register("spotx", spotx);
  register("springAds", springAds);
  register("strossle", strossle);
  register("sulvo", sulvo);
  register("sunmedia", sunmedia);
  register("svknative", svknative);
  register("swoop", swoop);
  register("taboola", taboola);
  register("tail", tail);
  register("tcsemotion", tcsemotion);
  register("teads", teads);
  register("temedya", temedya);
  register("torimochi", torimochi);
  register("tracdelight", tracdelight);
  register("triplelift", triplelift);
  register("trugaze", trugaze);
  register("twitter", twitter);
  register("uas", uas);
  register("ucfunnel", ucfunnel);
  register("unruly", unruly);
  register("uzou", uzou);
  register("valuecommerce", valuecommerce);
  register("vdoai", vdoai);
  register("verizonmedia", verizonmedia);
  register("videointelligence", videointelligence);
  register("videonow", videonow);
  register("viqeoplayer", viqeoplayer);
  register("viralize", viralize);
  register("vlyby", vlyby);
  register("vmfive", vmfive);
  register("webediads", webediads);
  register("weborama-display", weboramaDisplay);
  register("whopainfeed", whopainfeed);
  register("widespace", widespace);
  register("wisteria", wisteria);
  register("wpmedia", wpmedia);
  register("xlift", xlift);
  register("yahoo", yahoo);
  register("yahoofedads", yahoofedads);
  register("yahoojp", yahoojp);
  register("yahoonativeads", yahoonativeads);
  register("yandex", yandex);
  register("yektanet", yektanet);
  register("yengo", yengo);
  register("yieldbot", yieldbot);
  register("yieldmo", yieldmo);
  register("yieldone", yieldone);
  register("yieldpro", yieldpro);
  register("yotpo", yotpo);
  register("zedo", zedo);
  register("zen", zen);
  register("zergnet", zergnet);
  register("zucks", zucks);
  window.draw3p = draw3p;
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=integration.js.map
