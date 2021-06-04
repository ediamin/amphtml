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
  function executeAfterWriteScript(win, fn) {
    var index = syncScriptLoads++;
    win["__runScript" + index] = fn;
    win.document.write("<script>__runScript" + index + "()<\/script>");
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
  function validateData(data, mandatoryFields, opt_optionalFields) {
    var allowedFields = opt_optionalFields || [];
    for (var i = 0; i < mandatoryFields.length; i++) {
      var field = mandatoryFields[i];
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
    var clearInterval = win.clearInterval;
    win.clearInterval = function(id) {
      clearInterval(id);
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

  // ads/vendors/oblivki.js
  var oblivkiFields = ["id"];
  function oblivki(global, data) {
    validateData(data, oblivkiFields, []);
    global.oblivkiParam = data;
    writeScript(global, "https://oblivki.biz/ads/amp.js");
  }

  // 3p/vendors/oblivki.js
  init(window);
  register("oblivki", oblivki);
  window.draw3p = draw3p;
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=oblivki.max.js.map
