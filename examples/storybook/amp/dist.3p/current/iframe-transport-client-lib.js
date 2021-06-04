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
      _classCallCheck(this, Log2);
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
  function _classCallCheck2(instance, Constructor) {
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
      _classCallCheck2(this, Observable2);
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
  function _classCallCheck3(instance, Constructor) {
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
      _classCallCheck3(this, IframeMessagingClient2);
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

  // 3p/iframe-transport-client.js
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
  function _classCallCheck4(instance, Constructor) {
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
  var TAG_ = "iframe-transport-client";
  var IframeTransportClient = /* @__PURE__ */ function() {
    function IframeTransportClient2(win) {
      var _this = this;
      _classCallCheck4(this, IframeTransportClient2);
      this.win_ = win;
      this.creativeIdToContext_ = {};
      var parsedFrameName = tryParseJson(this.win_.name);
      this.vendor_ = dev().assertString(parsedFrameName["type"], "Parent frame must supply vendor name as type in " + this.win_.location.href);
      devAssert(this.vendor_.length, "Vendor name cannot be empty in " + this.win_.location.href);
      this.iframeMessagingClient_ = new IframeMessagingClient(win, win.parent);
      this.iframeMessagingClient_.setSentinel(dev().assertString(parsedFrameName["sentinel"], "Invalid/missing sentinel on iframe name attribute" + this.win_.name));
      this.iframeMessagingClient_.makeRequest(MessageType.SEND_IFRAME_TRANSPORT_EVENTS, MessageType.IFRAME_TRANSPORT_EVENTS, function(eventData) {
        var events = eventData["events"];
        devAssert(events, "Received malformed events list in " + _this.win_.location.href);
        devAssert(events.length, "Received empty events list in " + _this.win_.location.href);
        events.forEach(function(event) {
          try {
            devAssert(event.creativeId, "Received malformed event in " + _this.win_.location.href);
            _this.contextFor_(event.creativeId).dispatch(event.message);
          } catch (e) {
            user().error(TAG_, "Exception in callback passed to onAnalyticsEvent", e);
          }
        });
      });
    }
    _createClass4(IframeTransportClient2, [{
      key: "contextFor_",
      value: function contextFor_(creativeId) {
        return this.creativeIdToContext_[creativeId] || (this.creativeIdToContext_[creativeId] = new IframeTransportContext(this.win_, this.iframeMessagingClient_, creativeId, this.vendor_));
      }
    }, {
      key: "getIframeMessagingClient",
      value: function getIframeMessagingClient() {
        return this.iframeMessagingClient_;
      }
    }]);
    return IframeTransportClient2;
  }();
  var IframeTransportContext = /* @__PURE__ */ function() {
    function IframeTransportContext2(win, iframeMessagingClient, creativeId, vendor) {
      _classCallCheck4(this, IframeTransportContext2);
      this.iframeMessagingClient_ = iframeMessagingClient;
      this.baseMessage_ = {
        creativeId,
        vendor
      };
      this.listener_ = null;
      userAssert(win["onNewContextInstance"] && typeof win["onNewContextInstance"] == "function", "Must implement onNewContextInstance in " + win.location.href);
      win["onNewContextInstance"](this);
    }
    _createClass4(IframeTransportContext2, [{
      key: "onAnalyticsEvent",
      value: function onAnalyticsEvent(listener) {
        this.listener_ = listener;
      }
    }, {
      key: "dispatch",
      value: function dispatch(event) {
        this.listener_ && this.listener_(event);
      }
    }, {
      key: "sendResponseToCreative",
      value: function sendResponseToCreative(data) {
        this.iframeMessagingClient_.sendMessage(MessageType.IFRAME_TRANSPORT_RESPONSE, _extends({
          message: data
        }, this.baseMessage_));
      }
    }]);
    return IframeTransportContext2;
  }();

  // 3p/iframe-transport-client-lib.js
  initLogConstructor();
  setReportError(function() {
  });
  try {
    new IframeTransportClient(window);
  } catch (err) {
  }
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=iframe-transport-client-lib.js.map
