(self.AMP=self.AMP||[]).push({n:"amp-form",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // src/core/data-structures/promise.js
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
  var LastAddedResolver = /* @__PURE__ */ function() {
    function LastAddedResolver2(opt_promises) {
      _classCallCheck(this, LastAddedResolver2);
      this.deferred_ = new Deferred();
      this.count_ = 0;
      if (opt_promises) {
        for (var _iterator = _createForOfIteratorHelperLoose(opt_promises), _step; !(_step = _iterator()).done; ) {
          var promise = _step.value;
          this.add(promise);
        }
      }
    }
    _createClass(LastAddedResolver2, [{
      key: "add",
      value: function add(promise) {
        var _this2 = this;
        var countAtAdd = ++this.count_;
        promise.then(function(result) {
          if (_this2.count_ === countAtAdd) {
            _this2.deferred_.resolve(result);
          }
        }, function(error) {
          if (_this2.count_ === countAtAdd) {
            _this2.deferred_.reject(error);
          }
        });
        return this.deferred_.promise;
      }
    }, {
      key: "then",
      value: function then(opt_resolve, opt_reject) {
        return this.deferred_.promise.then(opt_resolve, opt_reject);
      }
    }]);
    return LastAddedResolver2;
  }();

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
  function fromIterator(iterator) {
    var array = [];
    for (var e = iterator.next(); !e.done; e = iterator.next()) {
      array.push(e.value);
    }
    return array;
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

  // src/core/types/object/index.js
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
    devAssert(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
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
  function ancestorElements(child, predicate) {
    var ancestors = [];
    for (var ancestor = child.parentElement; ancestor; ancestor = ancestor.parentElement) {
      if (predicate(ancestor)) {
        ancestors.push(ancestor);
      }
    }
    return ancestors;
  }
  function ancestorElementsByTag(child, tagName) {
    assertIsName(tagName);
    tagName = tagName.toUpperCase();
    return ancestorElements(child, function(el) {
      return el.tagName == tagName;
    });
  }
  function childElementByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelector(parent, "> [" + attr + "]");
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
  function removeElement(element) {
    if (element.parentElement) {
      element.parentElement.removeChild(element);
    }
  }
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
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
      _classCallCheck2(this, Services2);
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
  function isVar(property) {
    return property.startsWith("--");
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
  function listenOncePromise(element, eventType, opt_evtListenerOpts, opt_cancel) {
    var unlisten;
    var eventPromise = new Promise(function(resolve) {
      unlisten = listenOnce(element, eventType, resolve, opt_evtListenerOpts);
    });
    eventPromise.then(unlisten, unlisten);
    if (opt_cancel) {
      opt_cancel(unlisten);
    }
    return eventPromise;
  }

  // extensions/amp-form/0.1/amp-form-textarea.js
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
  var AMP_FORM_TEXTAREA_EXPAND_ATTR = "autoexpand";
  var MIN_EVENT_INTERVAL_MS = 100;
  var AMP_FORM_TEXTAREA_CLONE_CSS = "i-amphtml-textarea-clone";
  var AMP_FORM_TEXTAREA_MAX_CSS = "i-amphtml-textarea-max";
  var AMP_FORM_TEXTAREA_HAS_EXPANDED_DATA = "iAmphtmlHasExpanded";
  var AmpFormTextarea = /* @__PURE__ */ function() {
    function AmpFormTextarea2(ampdoc) {
      _classCallCheck3(this, AmpFormTextarea2);
      var root = ampdoc.getRootNode();
      this.doc_ = root.ownerDocument || root;
      this.win_ = devAssert2(this.doc_.defaultView);
      this.viewport_ = Services.viewportForDoc(ampdoc);
      this.unlisteners_ = [];
      this.unlisteners_.push(listen(root, "input", function(e) {
        var element = dev().assertElement(e.target);
        if (element.tagName != "TEXTAREA" || !element.hasAttribute(AMP_FORM_TEXTAREA_EXPAND_ATTR)) {
          return;
        }
        maybeResizeTextarea(element);
      }));
      this.unlisteners_.push(listen(root, "mousedown", function(e) {
        if (e.which != 1) {
          return;
        }
        var element = dev().assertElement(e.target);
        if (element.tagName != "TEXTAREA") {
          return;
        }
        handleTextareaDrag(element);
      }));
      var cachedTextareaElements = root.querySelectorAll("textarea");
      this.unlisteners_.push(listen(root, AmpEvents.DOM_UPDATE, function() {
        cachedTextareaElements = root.querySelectorAll("textarea");
      }));
      var throttledResize = throttle(this.win_, function(e) {
        if (e.relayoutAll) {
          resizeTextareaElements(cachedTextareaElements);
        }
      }, MIN_EVENT_INTERVAL_MS);
      this.unlisteners_.push(this.viewport_.onResize(throttledResize));
      handleInitialOverflowElements(cachedTextareaElements);
    }
    _createClass3(AmpFormTextarea2, [{
      key: "dispose",
      value: function dispose() {
        this.unlisteners_.forEach(function(unlistener) {
          return unlistener();
        });
      }
    }], [{
      key: "install",
      value: function install(ampdoc) {
        var root = ampdoc.getRootNode();
        var ampFormTextarea = null;
        var maybeInstall = function maybeInstall2() {
          var autoexpandTextarea = root.querySelector("textarea[autoexpand]");
          if (autoexpandTextarea && !ampFormTextarea) {
            ampFormTextarea = new AmpFormTextarea2(ampdoc);
            return;
          }
          if (!autoexpandTextarea && ampFormTextarea) {
            ampFormTextarea.dispose();
            ampFormTextarea = null;
            return;
          }
        };
        listen(root, AmpEvents.DOM_UPDATE, maybeInstall);
        maybeInstall();
      }
    }]);
    return AmpFormTextarea2;
  }();
  function handleInitialOverflowElements(textareas) {
    return Promise.all(toArray(textareas).map(function(element) {
      return getHasOverflow(element).then(function(hasOverflow) {
        if (hasOverflow) {
          user().warn("AMP-FORM", '"textarea[autoexpand]" with initially scrolling content will not autoexpand.\nSee https://github.com/ampproject/amphtml/issues/20839');
          element.removeAttribute(AMP_FORM_TEXTAREA_EXPAND_ATTR);
        }
      });
    }));
  }
  function getHasOverflow(element) {
    var mutator = Services.mutatorForDoc(element);
    return mutator.measureElement(function() {
      return element.scrollHeight > element.clientHeight;
    });
  }
  function resizeTextareaElements(elements) {
    iterateCursor(elements, function(element) {
      if (element.tagName != "TEXTAREA" || !element.hasAttribute(AMP_FORM_TEXTAREA_EXPAND_ATTR)) {
        return;
      }
      maybeResizeTextarea(element);
    });
  }
  function handleTextareaDrag(element) {
    var mutator = Services.mutatorForDoc(element);
    Promise.all([mutator.measureElement(function() {
      return element.scrollHeight;
    }), listenOncePromise(element, "mouseup")]).then(function(results) {
      var heightMouseDown = results[0];
      var heightMouseUp = 0;
      return mutator.measureMutateElement(element, function() {
        heightMouseUp = element.scrollHeight;
      }, function() {
        maybeRemoveResizeBehavior(element, heightMouseDown, heightMouseUp);
      });
    });
  }
  function maybeRemoveResizeBehavior(element, startHeight, endHeight) {
    if (startHeight != endHeight) {
      element.removeAttribute(AMP_FORM_TEXTAREA_EXPAND_ATTR);
    }
  }
  function maybeResizeTextarea(element) {
    var mutator = Services.mutatorForDoc(element);
    var win = devAssert2(element.ownerDocument.defaultView);
    var offset = 0;
    var scrollHeight = 0;
    var maxHeight = 0;
    var minScrollHeightPromise = getShrinkHeight(element);
    return mutator.measureMutateElement(element, function() {
      var computed = computedStyle(win, element);
      scrollHeight = element.scrollHeight;
      var maybeMaxHeight = parseInt(computed.getPropertyValue("max-height"), 10);
      maxHeight = isNaN(maybeMaxHeight) ? Infinity : maybeMaxHeight;
      if (computed.getPropertyValue("box-sizing") == "content-box") {
        offset = -parseInt(computed.getPropertyValue("padding-top"), 10) + -parseInt(computed.getPropertyValue("padding-bottom"), 10);
      } else {
        offset = parseInt(computed.getPropertyValue("border-top-width"), 10) + parseInt(computed.getPropertyValue("border-bottom-width"), 10);
      }
    }, function() {
      return minScrollHeightPromise.then(function(minScrollHeight) {
        var height = minScrollHeight + offset;
        element.classList.toggle(AMP_FORM_TEXTAREA_MAX_CSS, height > maxHeight);
        var hasExpanded = AMP_FORM_TEXTAREA_HAS_EXPANDED_DATA in element.dataset;
        var errorMargin = /google/i.test(win.navigator.vendor) ? 3 : 0;
        var shouldResize = hasExpanded || scrollHeight <= minScrollHeight + errorMargin;
        if (shouldResize) {
          element.dataset[AMP_FORM_TEXTAREA_HAS_EXPANDED_DATA] = "";
          setStyle(element, "height", px(minScrollHeight + offset));
        }
      });
    });
  }
  function getShrinkHeight(textarea) {
    var doc = devAssert2(textarea.ownerDocument);
    var win = devAssert2(doc.defaultView);
    var body = devAssert2(doc.body);
    var mutator = Services.mutatorForDoc(textarea);
    var clone = textarea.cloneNode(false);
    clone.classList.add(AMP_FORM_TEXTAREA_CLONE_CSS);
    var cloneWidth = 0;
    var resultingHeight = 0;
    var shouldKeepTop = false;
    return mutator.measureMutateElement(body, function() {
      var computed = computedStyle(win, textarea);
      var maxHeight = parseInt(computed.getPropertyValue("max-height"), 10);
      cloneWidth = parseInt(computed.getPropertyValue("width"), 10);
      shouldKeepTop = isNaN(maxHeight) || textarea.scrollHeight < maxHeight;
    }, function() {
      if (shouldKeepTop) {
        textarea.scrollTop = 0;
      }
      setStyle(clone, "width", px(cloneWidth));
      doc.body.appendChild(clone);
    }).then(function() {
      return mutator.measureMutateElement(body, function() {
        resultingHeight = clone.scrollHeight;
      }, function() {
        removeElement(clone);
      });
    }).then(function() {
      return resultingHeight;
    });
  }

  // src/async-input.js
  var AsyncInputAttributes = {
    NAME: "name"
  };
  var AsyncInputClasses = {
    "ASYNC_INPUT": "i-amphtml-async-input",
    "ASYNC_REQUIRED_ACTION": "i-async-require-action"
  };

  // build/amp-form-0.1.css.js
  var CSS2 = 'form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/';

  // src/form.js
  var FORM_PROP_ = "__AMP_FORM";
  function formOrNullForElement(element) {
    return element[FORM_PROP_] || null;
  }
  function setFormForElement(element, form) {
    element[FORM_PROP_] = form;
  }
  function getFormAsObject(form) {
    var elements = form.elements;
    var data = {};
    var submittableTagsRegex = /^(?:input|select|textarea)$/i;
    var unsubmittableTypesRegex = /^(?:submit|button|image|file|reset)$/i;
    var checkableType = /^(?:checkbox|radio)$/i;
    var _loop = function _loop2(i2) {
      var input = elements[i2];
      var checked = input.checked, multiple = input.multiple, name2 = input.name, options = input.options, tagName = input.tagName, type = input.type, value = input.value;
      if (!name2 || isDisabled(input) || !submittableTagsRegex.test(tagName) || unsubmittableTypesRegex.test(type) || checkableType.test(type) && !checked) {
        return "continue";
      }
      if (data[name2] === void 0) {
        data[name2] = [];
      }
      if (multiple) {
        iterateCursor(options, function(option) {
          if (option.selected) {
            data[name2].push(option.value);
          }
        });
        return "continue";
      }
      data[name2].push(value);
    };
    for (var i = 0; i < elements.length; i++) {
      var _ret = _loop(i);
      if (_ret === "continue")
        continue;
    }
    var submitButton = getSubmitButtonUsed(form);
    if (submitButton && submitButton.name) {
      var name = submitButton.name;
      if (data[name] === void 0) {
        data[name] = [];
      }
      data[submitButton.name].push(submitButton.value);
    }
    Object.keys(data).forEach(function(key) {
      if (data[key].length == 0) {
        delete data[key];
      }
    });
    return data;
  }
  function getSubmitButtonUsed(form) {
    var elements = form.elements;
    var length = elements.length;
    var activeElement = form.ownerDocument.activeElement;
    var firstSubmitButton = null;
    for (var i = 0; i < length; i++) {
      var element = elements[i];
      if (!isSubmitButton(element)) {
        continue;
      }
      if (!firstSubmitButton) {
        firstSubmitButton = element;
      }
      if (activeElement == element) {
        return activeElement;
      }
    }
    return firstSubmitButton;
  }
  function isSubmitButton(element) {
    var tagName = element.tagName, type = element.type;
    return tagName == "BUTTON" || type == "submit";
  }
  function isDisabled(element) {
    if (element.disabled) {
      return true;
    }
    var ancestors = ancestorElementsByTag(element, "fieldset");
    for (var i = 0; i < ancestors.length; i++) {
      if (ancestors[i].disabled) {
        return true;
      }
    }
    return false;
  }
  function isFieldDefault(field) {
    switch (field.type) {
      case "select-multiple":
      case "select-one":
        var options = field.options;
        for (var j = 0; j < options.length; j++) {
          if (options[j].selected !== options[j].defaultSelected) {
            return false;
          }
        }
        break;
      case "checkbox":
      case "radio":
        return field.checked === field.defaultChecked;
      default:
        return field.value === field.defaultValue;
    }
    return true;
  }
  function isFieldEmpty(field) {
    switch (field.tagName) {
      case "INPUT":
        if (field.type == "checkbox" || field.type == "radio") {
          return !field.checked;
        } else {
          return !field.value;
        }
      case "TEXTAREA":
        return !field.value;
      case "SELECT":
        return false;
      default:
        throw new Error("isFieldEmpty: " + field.tagName + " is not a supported field element.");
    }
  }

  // extensions/amp-form/0.1/form-verifiers.js
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
  var FORM_VERIFY_PARAM = "__amp_form_verify";
  var FORM_VERIFY_OPTOUT = "no-verify";
  function getFormVerifier(form, xhr) {
    if (form.hasAttribute("verify-xhr")) {
      return new AsyncVerifier(form, xhr);
    } else {
      return new DefaultVerifier(form);
    }
  }
  var FormVerifier = /* @__PURE__ */ function() {
    function FormVerifier2(form) {
      _classCallCheck4(this, FormVerifier2);
      this.form_ = form;
    }
    _createClass4(FormVerifier2, [{
      key: "onCommit",
      value: function onCommit() {
        this.clearVerificationErrors_();
        if (this.isDirty_()) {
          return this.verify_();
        } else {
          return Promise.resolve({
            updatedElements: [],
            errors: []
          });
        }
      }
    }, {
      key: "verify_",
      value: function verify_() {
        return Promise.resolve({
          updatedElements: [],
          errors: []
        });
      }
    }, {
      key: "isDirty_",
      value: function isDirty_() {
        var elements = this.form_.elements;
        for (var i = 0; i < elements.length; i++) {
          var field = elements[i];
          if (field.disabled) {
            continue;
          }
          if (!isFieldDefault(field)) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "clearVerificationErrors_",
      value: function clearVerificationErrors_() {
        var elements = this.form_.elements;
        if (elements) {
          iterateCursor(elements, function(e) {
            e.setCustomValidity("");
          });
        }
      }
    }]);
    return FormVerifier2;
  }();
  var DefaultVerifier = /* @__PURE__ */ function(_FormVerifier) {
    _inherits(DefaultVerifier2, _FormVerifier);
    var _super = _createSuper(DefaultVerifier2);
    function DefaultVerifier2() {
      _classCallCheck4(this, DefaultVerifier2);
      return _super.apply(this, arguments);
    }
    return DefaultVerifier2;
  }(FormVerifier);
  var AsyncVerifier = /* @__PURE__ */ function(_FormVerifier2) {
    _inherits(AsyncVerifier2, _FormVerifier2);
    var _super2 = _createSuper(AsyncVerifier2);
    function AsyncVerifier2(form, xhr) {
      var _this;
      _classCallCheck4(this, AsyncVerifier2);
      _this = _super2.call(this, form);
      _this.doXhr_ = xhr;
      _this.xhrResolver_ = null;
      _this.previousErrors_ = [];
      return _this;
    }
    _createClass4(AsyncVerifier2, [{
      key: "verify_",
      value: function verify_() {
        var _this2 = this;
        var xhrConsumeErrors = this.doXhr_().then(function() {
          return [];
        }, function(error) {
          return getResponseErrorData_(error);
        });
        return this.addToResolver_(xhrConsumeErrors).then(function(errors) {
          return _this2.applyErrors_(errors);
        });
      }
    }, {
      key: "addToResolver_",
      value: function addToResolver_(promise) {
        var _this3 = this;
        if (!this.xhrResolver_) {
          this.xhrResolver_ = new LastAddedResolver();
          var cleanup = function cleanup2() {
            return _this3.xhrResolver_ = null;
          };
          this.xhrResolver_.then(cleanup, cleanup);
        }
        return this.xhrResolver_.add(promise);
      }
    }, {
      key: "applyErrors_",
      value: function applyErrors_(errors) {
        var _this4 = this;
        var errorElements = [];
        var previousErrors = this.previousErrors_;
        this.previousErrors_ = errors;
        for (var i = 0; i < errors.length; i++) {
          var error = errors[i];
          var name = user().assertString(error.name, "Verification errors must have a name property");
          var message = user().assertString(error.message, "Verification errors must have a message property");
          var element = user().assertElement(this.form_.querySelector('[name="' + name + '"]'), "Verification error name property must match a field name");
          if (element.checkValidity()) {
            element.setCustomValidity(message);
            errorElements.push(element);
          }
        }
        var isFixed = function isFixed2(previousError) {
          return errors.every(function(error2) {
            return previousError.name !== error2.name;
          });
        };
        var fixedElements = previousErrors.filter(isFixed).map(function(e) {
          return _this4.form_.querySelector('[name="' + e.name + '"]');
        });
        return {
          updatedElements: errorElements.concat(fixedElements),
          errors
        };
      }
    }]);
    return AsyncVerifier2;
  }(FormVerifier);
  function getResponseErrorData_(error) {
    var response = error.response;
    if (!response) {
      return Promise.resolve([]);
    }
    return response.json().then(function(json) {
      return json.verifyErrors || [];
    }, function() {
      return [];
    });
  }

  // src/form-data-wrapper.js
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
  function _classCallCheck5(instance, Constructor) {
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
  function createFormDataWrapper(win, opt_form) {
    var platform = Services.platformFor(win);
    if (platform.isIos() && platform.getMajorVersion() == 11) {
      return new Ios11NativeFormDataWrapper(opt_form);
    } else if (FormData.prototype.entries && FormData.prototype.delete) {
      return new NativeFormDataWrapper(opt_form);
    } else {
      return new PolyfillFormDataWrapper(opt_form);
    }
  }
  function isFormDataWrapper(o) {
    return !!o && typeof o.getFormData == "function";
  }
  var PolyfillFormDataWrapper = /* @__PURE__ */ function() {
    function PolyfillFormDataWrapper2(opt_form) {
      if (opt_form === void 0) {
        opt_form = void 0;
      }
      _classCallCheck5(this, PolyfillFormDataWrapper2);
      this.fieldValues_ = opt_form ? getFormAsObject(opt_form) : map();
    }
    _createClass5(PolyfillFormDataWrapper2, [{
      key: "append",
      value: function append(name, value, opt_filename) {
        var nameString = String(name);
        this.fieldValues_[nameString] = this.fieldValues_[nameString] || [];
        this.fieldValues_[nameString].push(String(value));
      }
    }, {
      key: "delete",
      value: function _delete(name) {
        delete this.fieldValues_[name];
      }
    }, {
      key: "entries",
      value: function entries() {
        var _this = this;
        var fieldEntries = [];
        Object.keys(this.fieldValues_).forEach(function(name) {
          var values = _this.fieldValues_[name];
          values.forEach(function(value) {
            return fieldEntries.push([name, value]);
          });
        });
        var nextIndex = 0;
        return {
          next: function next() {
            return nextIndex < fieldEntries.length ? {
              value: fieldEntries[nextIndex++],
              done: false
            } : {
              value: void 0,
              done: true
            };
          }
        };
      }
    }, {
      key: "getFormData",
      value: function getFormData() {
        var _this2 = this;
        var formData = new FormData();
        Object.keys(this.fieldValues_).forEach(function(name) {
          var values = _this2.fieldValues_[name];
          values.forEach(function(value) {
            return formData.append(name, value);
          });
        });
        return formData;
      }
    }]);
    return PolyfillFormDataWrapper2;
  }();
  var NativeFormDataWrapper = /* @__PURE__ */ function() {
    function NativeFormDataWrapper2(opt_form) {
      _classCallCheck5(this, NativeFormDataWrapper2);
      this.formData_ = new FormData(opt_form);
      this.maybeIncludeSubmitButton_(opt_form);
    }
    _createClass5(NativeFormDataWrapper2, [{
      key: "maybeIncludeSubmitButton_",
      value: function maybeIncludeSubmitButton_(opt_form) {
        if (!opt_form) {
          return;
        }
        var button = getSubmitButtonUsed(opt_form);
        if (button && button.name) {
          this.append(button.name, button.value);
        }
      }
    }, {
      key: "append",
      value: function append(name, value, opt_filename) {
        this.formData_.append(name, value);
      }
    }, {
      key: "delete",
      value: function _delete(name) {
        this.formData_.delete(name);
      }
    }, {
      key: "entries",
      value: function entries() {
        return this.formData_.entries();
      }
    }, {
      key: "getFormData",
      value: function getFormData() {
        return this.formData_;
      }
    }]);
    return NativeFormDataWrapper2;
  }();
  var Ios11NativeFormDataWrapper = /* @__PURE__ */ function(_NativeFormDataWrappe) {
    _inherits2(Ios11NativeFormDataWrapper2, _NativeFormDataWrappe);
    var _super = _createSuper2(Ios11NativeFormDataWrapper2);
    function Ios11NativeFormDataWrapper2(opt_form) {
      var _this3;
      _classCallCheck5(this, Ios11NativeFormDataWrapper2);
      _this3 = _super.call(this, opt_form);
      if (opt_form) {
        iterateCursor(opt_form.elements, function(input) {
          if (input.type == "file" && input.files.length == 0) {
            _this3.formData_.delete(input.name);
            _this3.formData_.append(input.name, new Blob([]), "");
          }
        });
      }
      return _this3;
    }
    _createClass5(Ios11NativeFormDataWrapper2, [{
      key: "append",
      value: function append(name, value, opt_filename) {
        if (value && typeof value == "object" && isEmptyFile(value)) {
          this.formData_.append(name, new Blob([]), opt_filename || "");
        } else {
          this.formData_.append(name, value);
        }
      }
    }]);
    return Ios11NativeFormDataWrapper2;
  }(NativeFormDataWrapper);
  function isEmptyFile(file) {
    return file.name == "" && file.size == 0;
  }

  // extensions/amp-form/0.1/form-dirtiness.js
  function _classCallCheck6(instance, Constructor) {
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
  var DIRTINESS_INDICATOR_CLASS = "amp-form-dirty";
  var SUPPORTED_TAG_NAMES = {
    "INPUT": true,
    "SELECT": true,
    "TEXTAREA": true
  };
  var FormDirtiness = /* @__PURE__ */ function() {
    function FormDirtiness2(form, win) {
      _classCallCheck6(this, FormDirtiness2);
      this.form_ = form;
      this.win_ = win;
      this.dirtyFieldCount_ = 0;
      this.isFieldNameDirty_ = map();
      this.submittedFormData_ = null;
      this.isSubmitting_ = false;
      this.wasDirty_ = false;
      this.installEventHandlers_();
      this.determineInitialDirtiness_();
    }
    _createClass6(FormDirtiness2, [{
      key: "onSubmitting",
      value: function onSubmitting() {
        this.isSubmitting_ = true;
        this.updateClassAndDispatchEventIfDirtyStateChanged_();
      }
    }, {
      key: "onSubmitError",
      value: function onSubmitError() {
        this.isSubmitting_ = false;
        this.updateClassAndDispatchEventIfDirtyStateChanged_();
      }
    }, {
      key: "onSubmitSuccess",
      value: function onSubmitSuccess() {
        this.isSubmitting_ = false;
        this.submittedFormData_ = this.takeFormDataSnapshot_();
        this.clearDirtyFields_();
        this.updateClassAndDispatchEventIfDirtyStateChanged_();
      }
    }, {
      key: "takeFormDataSnapshot_",
      value: function takeFormDataSnapshot_() {
        return createFormDataWrapper(this.win_, this.form_).getFormData();
      }
    }, {
      key: "updateClassAndDispatchEventIfDirtyStateChanged_",
      value: function updateClassAndDispatchEventIfDirtyStateChanged_() {
        var isDirty = this.dirtyFieldCount_ > 0 && !this.isSubmitting_;
        if (isDirty !== this.wasDirty_) {
          this.form_.classList.toggle(DIRTINESS_INDICATOR_CLASS, isDirty);
          var formDirtinessChangeEvent = createCustomEvent(this.win_, AmpEvents.FORM_DIRTINESS_CHANGE, dict({
            "isDirty": isDirty
          }), {
            bubbles: true
          });
          this.form_.dispatchEvent(formDirtinessChangeEvent);
        }
        this.wasDirty_ = isDirty;
      }
    }, {
      key: "installEventHandlers_",
      value: function installEventHandlers_() {
        this.form_.addEventListener("input", this.onInput_.bind(this));
        this.form_.addEventListener("reset", this.onReset_.bind(this));
        this.form_.addEventListener(AmpEvents.FORM_VALUE_CHANGE, this.onInput_.bind(this));
      }
    }, {
      key: "determineInitialDirtiness_",
      value: function determineInitialDirtiness_() {
        for (var i = 0; i < this.form_.elements.length; ++i) {
          this.checkDirtinessAfterUserInteraction_(this.form_.elements[i]);
        }
        this.updateClassAndDispatchEventIfDirtyStateChanged_();
      }
    }, {
      key: "onInput_",
      value: function onInput_(event) {
        var field = dev().assertElement(event.target);
        this.checkDirtinessAfterUserInteraction_(field);
        this.updateClassAndDispatchEventIfDirtyStateChanged_();
      }
    }, {
      key: "onReset_",
      value: function onReset_(unusedEvent) {
        this.clearDirtyFields_();
        this.updateClassAndDispatchEventIfDirtyStateChanged_();
      }
    }, {
      key: "checkDirtinessAfterUserInteraction_",
      value: function checkDirtinessAfterUserInteraction_(field) {
        if (shouldSkipDirtinessCheck(field)) {
          return;
        }
        if (isFieldEmpty(field) || isFieldDefault(field) || this.isFieldSameAsLastSubmission_(field)) {
          this.removeDirtyField_(field.name);
        } else {
          this.addDirtyField_(field.name);
        }
      }
    }, {
      key: "isFieldSameAsLastSubmission_",
      value: function isFieldSameAsLastSubmission_(field) {
        if (!this.submittedFormData_) {
          return false;
        }
        var name = field.name, value = field.value;
        return this.submittedFormData_.get(name) === value;
      }
    }, {
      key: "addDirtyField_",
      value: function addDirtyField_(fieldName) {
        if (!this.isFieldNameDirty_[fieldName]) {
          this.isFieldNameDirty_[fieldName] = true;
          ++this.dirtyFieldCount_;
        }
      }
    }, {
      key: "removeDirtyField_",
      value: function removeDirtyField_(fieldName) {
        if (this.isFieldNameDirty_[fieldName]) {
          this.isFieldNameDirty_[fieldName] = false;
          --this.dirtyFieldCount_;
        }
      }
    }, {
      key: "clearDirtyFields_",
      value: function clearDirtyFields_() {
        this.isFieldNameDirty_ = map();
        this.dirtyFieldCount_ = 0;
      }
    }]);
    return FormDirtiness2;
  }();
  function shouldSkipDirtinessCheck(field) {
    var hidden = field.hidden, name = field.name, tagName = field.tagName;
    if (!SUPPORTED_TAG_NAMES[tagName]) {
      return true;
    }
    return !name || hidden || isDisabled(field);
  }

  // extensions/amp-form/0.1/form-events.js
  var FormEvents = {
    INVALID: "invalid",
    SERVICE_INIT: "amp:form-service:initialize",
    SUBMIT_ERROR: "submit-error",
    SUBMIT_SUCCESS: "submit-success",
    SUBMIT: "submit",
    VALID: "valid",
    VERIFY_ERROR: "verify-error",
    VERIFY: "verify"
  };

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
  function _classCallCheck7(instance, Constructor) {
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
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck7(this, Observable2);
      this.handlers_ = null;
    }
    _createClass7(Observable2, [{
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

  // extensions/amp-form/0.1/form-submit-service.js
  function _classCallCheck8(instance, Constructor) {
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
  var FormSubmitService = /* @__PURE__ */ function() {
    function FormSubmitService2() {
      _classCallCheck8(this, FormSubmitService2);
      this.observable_ = new Observable();
    }
    _createClass8(FormSubmitService2, [{
      key: "beforeSubmit",
      value: function beforeSubmit(cb) {
        return this.observable_.add(cb);
      }
    }, {
      key: "fire",
      value: function fire(event) {
        this.observable_.fire(event);
      }
    }]);
    return FormSubmitService2;
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

  // src/core/data-structures/lru-cache.js
  function _classCallCheck9(instance, Constructor) {
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck9(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass9(LruCache2, [{
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
  function getWinOrigin(win) {
    return win.origin || parseUrlDeprecated(win.location.href).origin;
  }
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
  function addParamToUrl(url, key, value, opt_addToFront) {
    var field = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    return appendEncodedParamStringToUrl(url, field, opt_addToFront);
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
  function getCorsUrl(win, url) {
    checkCorsUrl(url);
    var sourceOrigin = getSourceOrigin(win.location.href);
    return addParamToUrl(url, SOURCE_ORIGIN_PARAM, sourceOrigin);
  }
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query = parseQueryString(parsedUrl.search);
    userAssert(!(SOURCE_ORIGIN_PARAM in query), "Source origin is not allowed in %s", url);
  }

  // src/utils/xhr-utils.js
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
  var allowedMethods_ = ["GET", "POST"];
  function toStructuredCloneable(input, init) {
    var newInit = _extends({}, init);
    if (isFormDataWrapper(init.body)) {
      var wrapper = init.body;
      newInit.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
      newInit.body = fromIterator(wrapper.entries());
    }
    return {
      input,
      init: newInit
    };
  }
  function setupInput(win, input, init) {
    devAssert(typeof input == "string", "Only URL supported: %s", input);
    if (init.ampCors !== false) {
      input = getCorsUrl(win, input);
    }
    return input;
  }
  function setupInit(opt_init, opt_accept) {
    var init = opt_init || {};
    var creds = init.credentials;
    devAssert(creds === void 0 || creds == "include" || creds == "omit", "Only credentials=include|omit support: %s", creds);
    init.method = normalizeMethod_(init.method);
    init.headers = init.headers || dict({});
    if (opt_accept) {
      init.headers["Accept"] = opt_accept;
    }
    devAssert(init.body !== null, "fetch `body` can not be `null`");
    return init;
  }
  function setupAMPCors(win, input, init) {
    init = init || {};
    var currentOrigin = getWinOrigin(win);
    var targetOrigin = parseUrlDeprecated(input).origin;
    if (currentOrigin == targetOrigin) {
      init["headers"] = init["headers"] || {};
      init["headers"]["AMP-Same-Origin"] = "true";
    }
    return init;
  }
  function normalizeMethod_(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    devAssert(allowedMethods_.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods_.join(", "), method);
    return method;
  }

  // src/ssr-template-helper.js
  function _classCallCheck10(instance, Constructor) {
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
  var SsrTemplateHelper = /* @__PURE__ */ function() {
    function SsrTemplateHelper2(sourceComponent, viewer, templates) {
      _classCallCheck10(this, SsrTemplateHelper2);
      this.viewer_ = viewer;
      this.templates_ = templates;
      this.sourceComponent_ = sourceComponent;
    }
    _createClass10(SsrTemplateHelper2, [{
      key: "isEnabled",
      value: function isEnabled() {
        var ampdoc = this.viewer_.getAmpDoc();
        if (ampdoc.isSingleDoc()) {
          var htmlElement = ampdoc.getRootNode().documentElement;
          if (htmlElement.hasAttribute("allow-viewer-render-template")) {
            return this.viewer_.hasCapability("viewerRenderTemplate");
          }
        }
        return false;
      }
    }, {
      key: "assertTrustedViewer",
      value: function assertTrustedViewer(element) {
        return this.viewer_.isTrustedViewer().then(function(trusted) {
          userAssert(trusted, "Refused to attempt SSR in untrusted viewer: ", element);
        });
      }
    }, {
      key: "ssr",
      value: function ssr(element, request, opt_templates, opt_attributes) {
        var _this = this;
        if (opt_templates === void 0) {
          opt_templates = null;
        }
        if (opt_attributes === void 0) {
          opt_attributes = {};
        }
        var mustacheTemplate;
        if (!opt_templates) {
          mustacheTemplate = this.templates_.maybeFindTemplate(element);
        }
        return this.assertTrustedViewer(element).then(function() {
          return _this.viewer_.sendMessageAwaitResponse("viewerRenderTemplate", _this.buildPayload_(request, mustacheTemplate, opt_templates, opt_attributes));
        });
      }
    }, {
      key: "applySsrOrCsrTemplate",
      value: function applySsrOrCsrTemplate(element, data) {
        var _this2 = this;
        var renderTemplatePromise;
        if (this.isEnabled()) {
          userAssert(typeof data["html"] === "string", "Server side html response must be defined");
          renderTemplatePromise = this.assertTrustedViewer(element).then(function() {
            return _this2.templates_.findAndSetHtmlForTemplate(element, data["html"]);
          });
        } else if (isArray(data)) {
          renderTemplatePromise = this.templates_.findAndRenderTemplateArray(element, data);
        } else {
          renderTemplatePromise = this.templates_.findAndRenderTemplate(element, data);
        }
        return renderTemplatePromise;
      }
    }, {
      key: "buildPayload_",
      value: function buildPayload_(request, mustacheTemplate, opt_templates, opt_attributes) {
        if (opt_attributes === void 0) {
          opt_attributes = {};
        }
        var ampComponent = dict({
          "type": this.sourceComponent_
        });
        var successTemplateKey = "successTemplate";
        var successTemplate = opt_templates && opt_templates[successTemplateKey] ? opt_templates[successTemplateKey] : mustacheTemplate;
        if (successTemplate) {
          ampComponent[successTemplateKey] = {
            "type": "amp-mustache",
            "payload": successTemplate.innerHTML
          };
        }
        var errorTemplateKey = "errorTemplate";
        var errorTemplate = opt_templates && opt_templates[errorTemplateKey] ? opt_templates[errorTemplateKey] : null;
        if (errorTemplate) {
          ampComponent[errorTemplateKey] = {
            "type": "amp-mustache",
            "payload": errorTemplate.innerHTML
          };
        }
        if (opt_attributes) {
          Object.assign(ampComponent, opt_attributes);
        }
        var data = dict({
          "originalRequest": toStructuredCloneable(request.xhrUrl, request.fetchOpt),
          "ampComponent": ampComponent
        });
        return data;
      }
    }]);
    return SsrTemplateHelper2;
  }();

  // extensions/amp-form/0.1/validation-bubble.js
  function _classCallCheck11(instance, Constructor) {
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
  var OBJ_PROP = "__BUBBLE_OBJ";
  var ValidationBubble = /* @__PURE__ */ function() {
    function ValidationBubble2(ampdoc, id) {
      _classCallCheck11(this, ValidationBubble2);
      this.id_ = id;
      this.viewport_ = Services.viewportForDoc(ampdoc);
      this.vsync_ = Services.vsyncFor(ampdoc.win);
      this.currentTargetElement_ = null;
      this.currentMessage_ = "";
      this.isVisible_ = false;
      this.bubbleElement_ = ampdoc.win.document.createElement("div");
      toggle(this.bubbleElement_, false);
      this.bubbleElement_.classList.add("i-amphtml-validation-bubble");
      this.bubbleElement_[OBJ_PROP] = this;
      ampdoc.getBody().appendChild(this.bubbleElement_);
    }
    _createClass11(ValidationBubble2, [{
      key: "isActiveOn",
      value: function isActiveOn(element) {
        return this.isVisible_ && element == this.currentTargetElement_;
      }
    }, {
      key: "hide",
      value: function hide() {
        if (!this.isVisible_) {
          return;
        }
        this.isVisible_ = false;
        this.currentTargetElement_ = null;
        this.currentMessage_ = "";
        this.vsync_.run({
          measure: void 0,
          mutate: hideBubble
        }, {
          bubbleElement: this.bubbleElement_
        });
      }
    }, {
      key: "show",
      value: function show(targetElement, message) {
        if (this.isActiveOn(targetElement) && message == this.currentMessage_) {
          return;
        }
        this.isVisible_ = true;
        this.currentTargetElement_ = targetElement;
        this.currentMessage_ = message;
        var state = {
          message,
          targetElement,
          bubbleElement: this.bubbleElement_,
          viewport: this.viewport_,
          id: this.id_
        };
        this.vsync_.run({
          measure: measureTargetElement,
          mutate: showBubbleElement
        }, state);
      }
    }]);
    return ValidationBubble2;
  }();
  function hideBubble(state) {
    state.bubbleElement.removeAttribute("aria-alert");
    state.bubbleElement.removeAttribute("role");
    removeChildren(state.bubbleElement);
    toggle(state.bubbleElement, false);
  }
  function measureTargetElement(state) {
    state.targetRect = state.viewport.getLayoutRect(state.targetElement);
  }
  function showBubbleElement(state) {
    removeChildren(state.bubbleElement);
    var messageDiv = state.bubbleElement.ownerDocument.createElement("div");
    messageDiv.id = "bubble-message-" + state.id;
    messageDiv.textContent = state.message;
    state.bubbleElement.setAttribute("aria-labeledby", messageDiv.id);
    state.bubbleElement.setAttribute("role", "alert");
    state.bubbleElement.setAttribute("aria-live", "assertive");
    state.bubbleElement.appendChild(messageDiv);
    toggle(state.bubbleElement, true);
    setStyles(state.bubbleElement, {
      top: state.targetRect.top - 10 + "px",
      left: state.targetRect.left + state.targetRect.width / 2 + "px"
    });
  }

  // extensions/amp-form/0.1/form-validators.js
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
      object = _getPrototypeOf3(object);
      if (object === null)
        break;
    }
    return object;
  }
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
  function _classCallCheck12(instance, Constructor) {
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
  var VALIDATION_CACHE_PREFIX = "__AMP_VALIDATION_";
  var VISIBLE_VALIDATION_CACHE = "__AMP_VISIBLE_VALIDATION";
  var ARIA_DESC_ID_PREFIX = "i-amphtml-aria-desc-";
  var CUSTOM_PATTERN_ERROR = "Please match the requested format.";
  var reportValiditySupported;
  var checkValiditySupported;
  var validationBubbleCount = 0;
  var CustomValidationTypes = {
    AsYouGo: "as-you-go",
    ShowAllOnSubmit: "show-all-on-submit",
    InteractAndSubmit: "interact-and-submit",
    ShowFirstOnSubmit: "show-first-on-submit"
  };
  var FormValidator = /* @__PURE__ */ function() {
    function FormValidator2(form) {
      _classCallCheck12(this, FormValidator2);
      this.form = form;
      this.ampdoc = Services.ampdoc(form);
      this.mutator = Services.mutatorForDoc(form);
      this.root = this.ampdoc.getRootNode();
      this.formValidity_ = null;
    }
    _createClass12(FormValidator2, [{
      key: "report",
      value: function report() {
      }
    }, {
      key: "onBlur",
      value: function onBlur(unusedEvent) {
      }
    }, {
      key: "onInput",
      value: function onInput(unusedEvent) {
      }
    }, {
      key: "inputs",
      value: function inputs() {
        return this.form.querySelectorAll("input,select,textarea");
      }
    }, {
      key: "checkInputValidity",
      value: function checkInputValidity(input) {
        if (input.tagName === "TEXTAREA" && input.hasAttribute("pattern")) {
          if (input.checkValidity() || input.validationMessage === CUSTOM_PATTERN_ERROR) {
            var pattern = input.getAttribute("pattern");
            var re = new RegExp("^" + pattern + "$", "m");
            var valid = re.test(input.value);
            input.setCustomValidity(valid ? "" : CUSTOM_PATTERN_ERROR);
          }
        }
        return input.checkValidity();
      }
    }, {
      key: "checkFormValidity",
      value: function checkFormValidity(form) {
        this.checkTextAreaValidityInForm_(form);
        return form.checkValidity();
      }
    }, {
      key: "reportFormValidity",
      value: function reportFormValidity(form) {
        this.checkTextAreaValidityInForm_(form);
        return form.reportValidity();
      }
    }, {
      key: "checkTextAreaValidityInForm_",
      value: function checkTextAreaValidityInForm_(form) {
        var _this = this;
        iterateCursor(form.elements, function(element) {
          if (element.tagName == "TEXTAREA") {
            _this.checkInputValidity(element);
          }
        });
      }
    }, {
      key: "fireValidityEventIfNecessary",
      value: function fireValidityEventIfNecessary() {
        var previousValidity = this.formValidity_;
        this.formValidity_ = this.checkFormValidity(this.form);
        if (previousValidity !== this.formValidity_) {
          var win = toWin(this.form.ownerDocument.defaultView);
          var type = this.formValidity_ ? FormEvents.VALID : FormEvents.INVALID;
          var event = createCustomEvent(win, type, null, {
            bubbles: true
          });
          this.form.dispatchEvent(event);
        }
      }
    }]);
    return FormValidator2;
  }();
  var DefaultValidator = /* @__PURE__ */ function(_FormValidator) {
    _inherits3(DefaultValidator2, _FormValidator);
    var _super = _createSuper3(DefaultValidator2);
    function DefaultValidator2() {
      _classCallCheck12(this, DefaultValidator2);
      return _super.apply(this, arguments);
    }
    _createClass12(DefaultValidator2, [{
      key: "report",
      value: function report() {
        this.reportFormValidity(this.form);
        this.fireValidityEventIfNecessary();
      }
    }]);
    return DefaultValidator2;
  }(FormValidator);
  var PolyfillDefaultValidator = /* @__PURE__ */ function(_FormValidator2) {
    _inherits3(PolyfillDefaultValidator2, _FormValidator2);
    var _super2 = _createSuper3(PolyfillDefaultValidator2);
    function PolyfillDefaultValidator2(form) {
      var _this2;
      _classCallCheck12(this, PolyfillDefaultValidator2);
      _this2 = _super2.call(this, form);
      var bubbleId = "i-amphtml-validation-bubble-" + validationBubbleCount++;
      _this2.validationBubble_ = new ValidationBubble(_this2.ampdoc, bubbleId);
      return _this2;
    }
    _createClass12(PolyfillDefaultValidator2, [{
      key: "report",
      value: function report() {
        var inputs = this.inputs();
        for (var i = 0; i < inputs.length; i++) {
          if (!this.checkInputValidity(inputs[i])) {
            inputs[i].focus();
            this.validationBubble_.show(inputs[i], inputs[i].validationMessage);
            break;
          }
        }
        this.fireValidityEventIfNecessary();
      }
    }, {
      key: "onBlur",
      value: function onBlur(e) {
        if (e.target.type == "submit") {
          return;
        }
        this.validationBubble_.hide();
      }
    }, {
      key: "onInput",
      value: function onInput(event) {
        var input = dev().assertElement(event.target);
        if (!this.validationBubble_.isActiveOn(input)) {
          return;
        }
        if (this.checkInputValidity(input)) {
          input.removeAttribute("aria-invalid");
          this.validationBubble_.hide();
        } else {
          input.setAttribute("aria-invalid", "true");
          this.validationBubble_.show(input, input.validationMessage);
        }
      }
    }]);
    return PolyfillDefaultValidator2;
  }(FormValidator);
  var AbstractCustomValidator = /* @__PURE__ */ function(_FormValidator3) {
    _inherits3(AbstractCustomValidator2, _FormValidator3);
    var _super3 = _createSuper3(AbstractCustomValidator2);
    function AbstractCustomValidator2(form) {
      var _this3;
      _classCallCheck12(this, AbstractCustomValidator2);
      _this3 = _super3.call(this, form);
      _this3.uniqueFormId_ = _this3.form.id ? _this3.form.id : String(Date.now() + Math.floor(Math.random() * 100));
      _this3.ariaDescCounter_ = 0;
      return _this3;
    }
    _createClass12(AbstractCustomValidator2, [{
      key: "reportInput",
      value: function reportInput(input) {
        var invalidType = getInvalidType(input);
        if (invalidType) {
          this.showValidationFor(input, invalidType);
        }
      }
    }, {
      key: "createUniqueAriaDescId_",
      value: function createUniqueAriaDescId_() {
        return "" + ARIA_DESC_ID_PREFIX + this.uniqueFormId_ + "-" + this.ariaDescCounter_++;
      }
    }, {
      key: "hideAllValidations",
      value: function hideAllValidations() {
        var inputs = this.inputs();
        for (var i = 0; i < inputs.length; i++) {
          this.hideValidationFor(dev().assertElement(inputs[i]));
        }
      }
    }, {
      key: "getValidationFor",
      value: function getValidationFor(input, inputInvalidType) {
        if (inputInvalidType === void 0) {
          inputInvalidType = void 0;
        }
        if (!input.id) {
          return null;
        }
        var invalidType = this.getInvalidType_(input, inputInvalidType);
        var property = VALIDATION_CACHE_PREFIX + invalidType;
        if (!(property in input)) {
          var selector = "[visible-when-invalid=" + invalidType + "]" + ("[validation-for=" + input.id + "]");
          input[property] = this.root.querySelector(selector);
        }
        return input[property];
      }
    }, {
      key: "getInvalidType_",
      value: function getInvalidType_(input, inputInvalidType) {
        if (inputInvalidType === void 0) {
          inputInvalidType = void 0;
        }
        var tagName = input.tagName, validationMessage = input.validationMessage;
        if (tagName === "TEXTAREA" && inputInvalidType === "customError" && validationMessage === CUSTOM_PATTERN_ERROR) {
          return "patternMismatch";
        }
        return inputInvalidType;
      }
    }, {
      key: "showValidationFor",
      value: function showValidationFor(input, invalidType) {
        var validation = this.getValidationFor(input, invalidType);
        if (!validation) {
          return;
        }
        if (!validation.textContent.trim()) {
          validation.textContent = input.validationMessage;
        }
        input[VISIBLE_VALIDATION_CACHE] = validation;
        var validationId = validation.getAttribute("id");
        if (!validationId) {
          validationId = this.createUniqueAriaDescId_();
          validation.setAttribute("id", validationId);
        }
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", validationId);
        this.mutator.mutateElement(validation, function() {
          return validation.classList.add("visible");
        });
      }
    }, {
      key: "hideValidationFor",
      value: function hideValidationFor(input) {
        var visibleValidation = this.getVisibleValidationFor(input);
        if (!visibleValidation) {
          return;
        }
        delete input[VISIBLE_VALIDATION_CACHE];
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
        this.mutator.mutateElement(visibleValidation, function() {
          return visibleValidation.classList.remove("visible");
        });
      }
    }, {
      key: "getVisibleValidationFor",
      value: function getVisibleValidationFor(input) {
        return input[VISIBLE_VALIDATION_CACHE];
      }
    }, {
      key: "shouldValidateOnInteraction",
      value: function shouldValidateOnInteraction(unusedInput) {
        throw Error("Not Implemented");
      }
    }, {
      key: "onInteraction",
      value: function onInteraction(event) {
        var input = dev().assertElement(event.target);
        var shouldValidate = !!input.checkValidity && this.shouldValidateOnInteraction(input);
        this.hideValidationFor(input);
        if (shouldValidate && !this.checkInputValidity(input)) {
          this.reportInput(input);
        }
      }
    }, {
      key: "onBlur",
      value: function onBlur(event) {
        this.onInteraction(event);
      }
    }, {
      key: "onInput",
      value: function onInput(event) {
        this.onInteraction(event);
      }
    }]);
    return AbstractCustomValidator2;
  }(FormValidator);
  var ShowFirstOnSubmitValidator = /* @__PURE__ */ function(_AbstractCustomValida) {
    _inherits3(ShowFirstOnSubmitValidator2, _AbstractCustomValida);
    var _super4 = _createSuper3(ShowFirstOnSubmitValidator2);
    function ShowFirstOnSubmitValidator2() {
      _classCallCheck12(this, ShowFirstOnSubmitValidator2);
      return _super4.apply(this, arguments);
    }
    _createClass12(ShowFirstOnSubmitValidator2, [{
      key: "report",
      value: function report() {
        this.hideAllValidations();
        var inputs = this.inputs();
        for (var i = 0; i < inputs.length; i++) {
          if (!this.checkInputValidity(inputs[i])) {
            this.reportInput(inputs[i]);
            inputs[i].focus();
            break;
          }
        }
        this.fireValidityEventIfNecessary();
      }
    }, {
      key: "shouldValidateOnInteraction",
      value: function shouldValidateOnInteraction(input) {
        return !!this.getVisibleValidationFor(input);
      }
    }]);
    return ShowFirstOnSubmitValidator2;
  }(AbstractCustomValidator);
  var ShowAllOnSubmitValidator = /* @__PURE__ */ function(_AbstractCustomValida2) {
    _inherits3(ShowAllOnSubmitValidator2, _AbstractCustomValida2);
    var _super5 = _createSuper3(ShowAllOnSubmitValidator2);
    function ShowAllOnSubmitValidator2() {
      _classCallCheck12(this, ShowAllOnSubmitValidator2);
      return _super5.apply(this, arguments);
    }
    _createClass12(ShowAllOnSubmitValidator2, [{
      key: "report",
      value: function report() {
        this.hideAllValidations();
        var firstInvalidInput = null;
        var inputs = this.inputs();
        for (var i = 0; i < inputs.length; i++) {
          if (!this.checkInputValidity(inputs[i])) {
            firstInvalidInput = firstInvalidInput || inputs[i];
            this.reportInput(inputs[i]);
          }
        }
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        this.fireValidityEventIfNecessary();
      }
    }, {
      key: "shouldValidateOnInteraction",
      value: function shouldValidateOnInteraction(input) {
        return !!this.getVisibleValidationFor(input);
      }
    }]);
    return ShowAllOnSubmitValidator2;
  }(AbstractCustomValidator);
  var AsYouGoValidator = /* @__PURE__ */ function(_AbstractCustomValida3) {
    _inherits3(AsYouGoValidator2, _AbstractCustomValida3);
    var _super6 = _createSuper3(AsYouGoValidator2);
    function AsYouGoValidator2() {
      _classCallCheck12(this, AsYouGoValidator2);
      return _super6.apply(this, arguments);
    }
    _createClass12(AsYouGoValidator2, [{
      key: "shouldValidateOnInteraction",
      value: function shouldValidateOnInteraction(unusedInput) {
        return true;
      }
    }, {
      key: "onInteraction",
      value: function onInteraction(event) {
        _get(_getPrototypeOf3(AsYouGoValidator2.prototype), "onInteraction", this).call(this, event);
        this.fireValidityEventIfNecessary();
      }
    }]);
    return AsYouGoValidator2;
  }(AbstractCustomValidator);
  var InteractAndSubmitValidator = /* @__PURE__ */ function(_ShowAllOnSubmitValid) {
    _inherits3(InteractAndSubmitValidator2, _ShowAllOnSubmitValid);
    var _super7 = _createSuper3(InteractAndSubmitValidator2);
    function InteractAndSubmitValidator2() {
      _classCallCheck12(this, InteractAndSubmitValidator2);
      return _super7.apply(this, arguments);
    }
    _createClass12(InteractAndSubmitValidator2, [{
      key: "shouldValidateOnInteraction",
      value: function shouldValidateOnInteraction(unusedInput) {
        return true;
      }
    }, {
      key: "onInteraction",
      value: function onInteraction(event) {
        _get(_getPrototypeOf3(InteractAndSubmitValidator2.prototype), "onInteraction", this).call(this, event);
        this.fireValidityEventIfNecessary();
      }
    }]);
    return InteractAndSubmitValidator2;
  }(ShowAllOnSubmitValidator);
  function getFormValidator(form) {
    var customValidation = form.getAttribute("custom-validation-reporting");
    switch (customValidation) {
      case CustomValidationTypes.AsYouGo:
        return new AsYouGoValidator(form);
      case CustomValidationTypes.ShowAllOnSubmit:
        return new ShowAllOnSubmitValidator(form);
      case CustomValidationTypes.InteractAndSubmit:
        return new InteractAndSubmitValidator(form);
      case CustomValidationTypes.ShowFirstOnSubmit:
        return new ShowFirstOnSubmitValidator(form);
    }
    if (isReportValiditySupported(form.ownerDocument)) {
      return new DefaultValidator(form);
    }
    return new PolyfillDefaultValidator(form);
  }
  function isReportValiditySupported(doc) {
    if (doc && reportValiditySupported === void 0) {
      reportValiditySupported = !!document.createElement("form").reportValidity;
    }
    return !!reportValiditySupported;
  }
  function isCheckValiditySupported(doc) {
    if (checkValiditySupported === void 0) {
      checkValiditySupported = !!doc.createElement("input").checkValidity;
    }
    return checkValiditySupported;
  }
  function getInvalidType(input) {
    var validityTypes = ["badInput"];
    for (var invalidType in input.validity) {
      if (!validityTypes.includes(invalidType)) {
        validityTypes.push(invalidType);
      }
    }
    var response = validityTypes.filter(function(type) {
      return input.validity[type] === true;
    });
    return response.length ? response[0] : null;
  }

  // extensions/amp-form/0.1/form-proxy.js
  var denylistedProperties = null;
  function installFormProxy(form) {
    var constr = getFormProxyConstr(toWin(form.ownerDocument.defaultView));
    var proxy = new constr(form);
    if (!("action" in proxy)) {
      setupLegacyProxy(form, proxy);
    }
    form["$p"] = proxy;
    return proxy;
  }
  function getFormProxyConstr(win) {
    if (!win.FormProxy) {
      win.FormProxy = createFormProxyConstr(win);
    }
    return win.FormProxy;
  }
  function createFormProxyConstr(win) {
    function FormProxy(form) {
      this.form_ = form;
    }
    var FormProxyProto = FormProxy.prototype;
    var Object2 = win.Object;
    var ObjectProto = Object2.prototype;
    var baseClasses = [win.HTMLFormElement, win.EventTarget];
    var inheritance = baseClasses.reduce(function(all, klass) {
      var proto = klass && klass.prototype;
      while (proto && proto !== ObjectProto) {
        if (all.indexOf(proto) >= 0) {
          break;
        }
        all.push(proto);
        proto = Object2.getPrototypeOf(proto);
      }
      return all;
    }, []);
    inheritance.forEach(function(proto) {
      var _loop = function _loop2(name2) {
        var property = win.Object.getOwnPropertyDescriptor(proto, name2);
        if (!property || name2.toUpperCase() == name2 || name2.startsWith("on") || ObjectProto.hasOwnProperty.call(FormProxyProto, name2) || denylistedProperties && denylistedProperties.includes(name2)) {
          return "continue";
        }
        if (typeof property.value == "function") {
          var method = property.value;
          FormProxyProto[name2] = function() {
            return method.apply(this.form_, arguments);
          };
        } else {
          var spec = {};
          if (property.get) {
            spec.get = function() {
              return property.get.call(this.form_);
            };
          }
          if (property.set) {
            spec.set = function(v) {
              return property.set.call(this.form_, v);
            };
          }
          win.Object.defineProperty(FormProxyProto, name2, spec);
        }
      };
      for (var name in proto) {
        var _ret = _loop(name);
        if (_ret === "continue")
          continue;
      }
    });
    return FormProxy;
  }
  function setupLegacyProxy(form, proxy) {
    var win = form.ownerDocument.defaultView;
    var proto = win.HTMLFormElement.prototype.cloneNode.call(form, false);
    var _loop2 = function _loop22(name2) {
      if (name2 in proxy || name2.toUpperCase() == name2 || name2.startsWith("on")) {
        return "continue";
      }
      var desc = LEGACY_PROPS[name2];
      var current = form[name2];
      if (desc) {
        if (desc.access == LegacyPropAccessType.READ_ONCE) {
          var actual;
          if (current && current.nodeType) {
            var element = dev().assertElement(current);
            var nextSibling = element.nextSibling, parent = element.parentNode;
            parent.removeChild(element);
            try {
              actual = form[name2];
            } finally {
              parent.insertBefore(element, nextSibling);
            }
          } else {
            actual = current;
          }
          Object.defineProperty(proxy, name2, {
            get: function get() {
              return actual;
            }
          });
        } else if (desc.access == LegacyPropAccessType.ATTR) {
          var attr = desc.attr || name2;
          Object.defineProperty(proxy, name2, {
            get: function get() {
              var value = proxy.getAttribute(attr);
              if (value == null && desc.def !== void 0) {
                return desc.def;
              }
              if (desc.type == LegacyPropDataType.BOOL) {
                return value === "true";
              }
              if (desc.type == LegacyPropDataType.TOGGLE) {
                return value != null;
              }
              if (desc.type == LegacyPropDataType.URL) {
                var str = value || "";
                return Services.urlForDoc(form).parse(str).href;
              }
              return value;
            },
            set: function set(value) {
              if (desc.type == LegacyPropDataType.TOGGLE) {
                if (value) {
                  value = "";
                } else {
                  value = null;
                }
              }
              if (value != null) {
                proxy.setAttribute(attr, value);
              } else {
                proxy.removeAttribute(attr);
              }
            }
          });
        } else {
          devAssert2(false, "unknown property access type: %s", desc.access);
        }
      } else {
        Object.defineProperty(proxy, name2, {
          get: function get() {
            return form[name2];
          },
          set: function set(value) {
            form[name2] = value;
          }
        });
      }
    };
    for (var name in proto) {
      var _ret2 = _loop2(name);
      if (_ret2 === "continue")
        continue;
    }
  }
  var LegacyPropAccessType = {
    ATTR: 1,
    READ_ONCE: 2
  };
  var LegacyPropDataType = {
    URL: 1,
    BOOL: 2,
    TOGGLE: 3
  };
  var LEGACY_PROPS = {
    "acceptCharset": {
      access: LegacyPropAccessType.ATTR,
      attr: "accept-charset"
    },
    "accessKey": {
      access: LegacyPropAccessType.ATTR,
      attr: "accesskey"
    },
    "action": {
      access: LegacyPropAccessType.ATTR,
      type: LegacyPropDataType.URL
    },
    "attributes": {
      access: LegacyPropAccessType.READ_ONCE
    },
    "autocomplete": {
      access: LegacyPropAccessType.ATTR,
      def: "on"
    },
    "children": {
      access: LegacyPropAccessType.READ_ONCE
    },
    "dataset": {
      access: LegacyPropAccessType.READ_ONCE
    },
    "dir": {
      access: LegacyPropAccessType.ATTR
    },
    "draggable": {
      access: LegacyPropAccessType.ATTR,
      type: LegacyPropDataType.BOOL,
      def: false
    },
    "elements": {
      access: LegacyPropAccessType.READ_ONCE
    },
    "encoding": {
      access: LegacyPropAccessType.READ_ONCE
    },
    "enctype": {
      access: LegacyPropAccessType.ATTR
    },
    "hidden": {
      access: LegacyPropAccessType.ATTR,
      type: LegacyPropDataType.TOGGLE,
      def: false
    },
    "id": {
      access: LegacyPropAccessType.ATTR,
      def: ""
    },
    "lang": {
      access: LegacyPropAccessType.ATTR
    },
    "localName": {
      access: LegacyPropAccessType.READ_ONCE
    },
    "method": {
      access: LegacyPropAccessType.ATTR,
      def: "get"
    },
    "name": {
      access: LegacyPropAccessType.ATTR
    },
    "noValidate": {
      access: LegacyPropAccessType.ATTR,
      attr: "novalidate",
      type: LegacyPropDataType.TOGGLE,
      def: false
    },
    "prefix": {
      access: LegacyPropAccessType.READ_ONCE
    },
    "spellcheck": {
      access: LegacyPropAccessType.ATTR
    },
    "style": {
      access: LegacyPropAccessType.READ_ONCE
    },
    "target": {
      access: LegacyPropAccessType.ATTR,
      def: ""
    },
    "title": {
      access: LegacyPropAccessType.ATTR
    },
    "translate": {
      access: LegacyPropAccessType.ATTR
    }
  };

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  var STYLE_MAP_PROP = "__AMP_CSS_SM";
  function installStylesForDoc(ampdoc, cssText, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = ampdoc.getHeadNode();
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText), opt_isRuntimeCss || false, opt_ext || null);
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
  function insertStyleElement(cssRoot, cssText, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "amp-custom" && ext != "amp-keyframes";
    var key = isRuntimeCss ? "amp-runtime" : isExtCss ? "amp-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.textContent !== cssText) {
          existing.textContent = cssText;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText;
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
  function maybeTransform(cssRoot, cssText) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText) : cssText;
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

  // extensions/amp-form/0.1/amp-form.js
  function _classCallCheck13(instance, Constructor) {
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
  var TAG = "amp-form";
  var EXTERNAL_DEPS = ["amp-selector"];
  var FormState = {
    INITIAL: "initial",
    VERIFYING: "verifying",
    VERIFY_ERROR: "verify-error",
    SUBMITTING: "submitting",
    SUBMIT_ERROR: "submit-error",
    SUBMIT_SUCCESS: "submit-success"
  };
  var UserValidityState = {
    NONE: "none",
    USER_VALID: "valid",
    USER_INVALID: "invalid"
  };
  var REDIRECT_TO_HEADER = "AMP-Redirect-To";
  var SUBMIT_TIMEOUT = 1e4;
  var AmpForm = /* @__PURE__ */ function() {
    function AmpForm2(element, id) {
      var _this = this;
      _classCallCheck13(this, AmpForm2);
      try {
        installFormProxy(element);
      } catch (e) {
        dev().error(TAG, "form proxy failed to install", e);
      }
      setFormForElement(element, this);
      this.id_ = id;
      this.doc_ = element.ownerDocument;
      this.win_ = toWin(this.doc_.defaultView);
      this.timer_ = Services.timerFor(this.win_);
      this.form_ = element;
      this.ampdoc_ = Services.ampdoc(this.form_);
      this.dependenciesPromise_ = null;
      this.urlReplacement_ = Services.urlReplacementsForDoc(this.ampdoc_);
      this.templates_ = Services.templatesForDoc(this.ampdoc_);
      this.xhr_ = Services.xhrFor(this.win_);
      this.actions_ = Services.actionServiceForDoc(this.ampdoc_);
      this.mutator_ = Services.mutatorForDoc(this.ampdoc_);
      this.viewer_ = Services.viewerForDoc(this.ampdoc_);
      this.ssrTemplateHelper_ = new SsrTemplateHelper(TAG, this.viewer_, this.templates_);
      this.method_ = (this.form_.getAttribute("method") || "GET").toUpperCase();
      this.target_ = this.form_.getAttribute("target");
      this.xhrAction_ = this.getXhrUrl_("action-xhr");
      this.xhrVerify_ = this.getXhrUrl_("verify-xhr");
      this.encType_ = this.getEncType_("enctype");
      this.shouldValidate_ = !this.form_.hasAttribute("novalidate");
      this.form_.setAttribute("novalidate", "");
      if (!this.shouldValidate_) {
        this.form_.setAttribute("amp-novalidate", "");
      }
      this.form_.classList.add("i-amphtml-form");
      this.state_ = FormState.INITIAL;
      var inputs = this.form_.elements;
      for (var i = 0; i < inputs.length; i++) {
        var name = inputs[i].name;
        userAssert(name != SOURCE_ORIGIN_PARAM && name != FORM_VERIFY_PARAM, "Illegal input name, %s found: %s", name, inputs[i]);
      }
      this.dirtinessHandler_ = new FormDirtiness(this.form_, this.win_);
      this.validator_ = getFormValidator(this.form_);
      this.verifier_ = getFormVerifier(this.form_, function() {
        return _this.handleXhrVerify_();
      });
      this.actions_.addToAllowlist("FORM", ["clear", "submit"], ["email"]);
      this.actions_.installActionHandler(this.form_, this.actionHandler_.bind(this));
      this.installEventHandlers_();
      this.installInputMasking_();
      this.maybeInitializeFromUrl_();
      this.xhrSubmitPromise_ = null;
      this.renderTemplatePromise_ = null;
      this.formSubmitService_ = null;
      Services.formSubmitForDoc(element).then(function(service) {
        _this.formSubmitService_ = service;
      });
      this.isAmp4Email_ = this.doc_ && isAmp4Email(this.doc_);
    }
    _createClass13(AmpForm2, [{
      key: "getXhrUrl_",
      value: function getXhrUrl_(attribute) {
        var url = this.form_.getAttribute(attribute);
        if (url) {
          var urlService = Services.urlForDoc(this.ampdoc_);
          urlService.assertHttpsUrl(url, this.form_, attribute);
          userAssert(!urlService.isProxyOrigin(url), "form %s should not be on AMP CDN: %s", attribute, this.form_);
        }
        return url;
      }
    }, {
      key: "getEncType_",
      value: function getEncType_(attribute) {
        var encType = this.form_.getAttribute(attribute);
        if (encType === "application/x-www-form-urlencoded" || encType === "multipart/form-data") {
          return encType;
        } else if (encType !== null) {
          user().warn(TAG, "Unexpected enctype: " + encType + ". Defaulting to 'multipart/form-data'.");
        }
        return "multipart/form-data";
      }
    }, {
      key: "getXssiPrefix",
      value: function getXssiPrefix() {
        return this.form_.getAttribute("xssi-prefix");
      }
    }, {
      key: "requestForFormFetch",
      value: function requestForFormFetch(url, method, opt_extraFields, opt_fieldDenylist) {
        var xhrUrl, body;
        var headers = dict({
          "Accept": "application/json"
        });
        var isHeadOrGet = method == "GET" || method == "HEAD";
        if (isHeadOrGet) {
          this.assertNoSensitiveFields_();
          var values = this.getFormAsObject_();
          if (opt_fieldDenylist) {
            opt_fieldDenylist.forEach(function(name) {
              return delete values[name];
            });
          }
          if (opt_extraFields) {
            deepMerge(values, opt_extraFields);
          }
          xhrUrl = addParamsToUrl(url, values);
        } else {
          xhrUrl = url;
          if (this.encType_ === "application/x-www-form-urlencoded") {
            body = serializeQueryString(this.getFormAsObject_());
            headers = dict({
              "Accept": "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            });
          } else {
            devAssert2(this.encType_ === "multipart/form-data");
            body = createFormDataWrapper(this.win_, this.form_);
          }
          if (opt_fieldDenylist) {
            opt_fieldDenylist.forEach(function(name) {
              return body.delete(name);
            });
          }
          for (var key in opt_extraFields) {
            body.append(key, opt_extraFields[key]);
          }
        }
        var request = {
          xhrUrl,
          fetchOpt: dict({
            "body": body,
            "method": method,
            "credentials": "include",
            "headers": headers
          })
        };
        return request;
      }
    }, {
      key: "setXhrAction",
      value: function setXhrAction(url) {
        this.xhrAction_ = url;
      }
    }, {
      key: "actionHandler_",
      value: function actionHandler_(invocation) {
        var _this2 = this;
        if (!invocation.satisfiesTrust(ActionTrust.DEFAULT)) {
          return null;
        }
        if (invocation.method == "submit") {
          return this.whenDependenciesReady_().then(function() {
            return _this2.handleSubmitAction_(invocation);
          });
        } else if (invocation.method === "clear") {
          this.handleClearAction_();
        }
        return null;
      }
    }, {
      key: "whenDependenciesReady_",
      value: function whenDependenciesReady_() {
        if (this.dependenciesPromise_) {
          return this.dependenciesPromise_;
        }
        var depElements = this.form_.querySelectorAll(EXTERNAL_DEPS.join(","));
        var promises = toArray(depElements).map(function(el) {
          return el.build();
        });
        return this.dependenciesPromise_ = this.waitOnPromisesOrTimeout_(promises, 2e3);
      }
    }, {
      key: "installEventHandlers_",
      value: function installEventHandlers_() {
        var _this3 = this;
        this.ampdoc_.whenNextVisible().then(function() {
          var autofocus = _this3.form_.querySelector("[autofocus]");
          if (autofocus) {
            tryFocus(autofocus);
          }
        });
        this.form_.addEventListener("submit", this.handleSubmitEvent_.bind(this), true);
        this.form_.addEventListener("blur", function(e) {
          checkUserValidityAfterInteraction_(dev().assertElement(e.target));
          _this3.validator_.onBlur(e);
        }, true);
        this.form_.addEventListener(AmpEvents.FORM_VALUE_CHANGE, function(e) {
          checkUserValidityAfterInteraction_(dev().assertElement(e.target));
          _this3.validator_.onInput(e);
        }, true);
        if (!this.ssrTemplateHelper_.isEnabled()) {
          this.form_.addEventListener("change", function(e) {
            _this3.verifier_.onCommit().then(function(updatedErrors) {
              var errors = updatedErrors.errors, updatedElements = updatedErrors.updatedElements;
              updatedElements.forEach(checkUserValidityAfterInteraction_);
              _this3.validator_.onBlur(e);
              if (_this3.state_ === FormState.VERIFYING) {
                if (errors.length) {
                  _this3.setState_(FormState.VERIFY_ERROR);
                  _this3.renderTemplate_(dict({
                    "verifyErrors": errors
                  })).then(function() {
                    _this3.triggerAction_(FormEvents.VERIFY_ERROR, errors, ActionTrust.DEFAULT);
                  });
                } else {
                  _this3.setState_(FormState.INITIAL);
                }
              }
            });
          });
        }
        this.form_.addEventListener("input", function(e) {
          checkUserValidityAfterInteraction_(dev().assertElement(e.target));
          _this3.validator_.onInput(e);
        });
      }
    }, {
      key: "installInputMasking_",
      value: function installInputMasking_() {
        Services.inputmaskServiceForDocOrNull(this.ampdoc_).then(function(inputmaskService) {
          if (inputmaskService) {
            inputmaskService.install();
          }
        });
      }
    }, {
      key: "triggerFormSubmitInAnalytics_",
      value: function triggerFormSubmitInAnalytics_(eventType) {
        this.assertSsrTemplate_(false, "Form analytics not supported");
        var formDataForAnalytics = dict({});
        var formObject = this.getFormAsObject_();
        for (var k in formObject) {
          if (Object.prototype.hasOwnProperty.call(formObject, k)) {
            formDataForAnalytics["formFields[" + k + "]"] = formObject[k].join(",");
          }
        }
        formDataForAnalytics["formId"] = this.form_.id;
        try {
          this.analyticsEvent_(eventType, formDataForAnalytics);
        } catch (err) {
          dev().error(TAG, "Sending analytics failed:", err);
        }
      }
    }, {
      key: "handleSubmitAction_",
      value: function handleSubmitAction_(invocation) {
        if (this.state_ == FormState.SUBMITTING || !this.checkValidity_()) {
          return Promise.resolve(null);
        }
        return this.submit_(invocation.trust, null);
      }
    }, {
      key: "handleClearAction_",
      value: function handleClearAction_() {
        this.form_.reset();
        this.setState_(FormState.INITIAL);
        this.form_.classList.remove("user-valid");
        this.form_.classList.remove("user-invalid");
        var validityElements = this.form_.querySelectorAll(".user-valid, .user-invalid");
        iterateCursor(validityElements, function(element) {
          element.classList.remove("user-valid");
          element.classList.remove("user-invalid");
        });
        var messageElements = this.form_.querySelectorAll(".visible[validation-for]");
        iterateCursor(messageElements, function(element) {
          element.classList.remove("visible");
        });
        removeValidityStateClasses(this.form_);
      }
    }, {
      key: "handleSubmitEvent_",
      value: function handleSubmitEvent_(event) {
        if (this.state_ == FormState.SUBMITTING || !this.checkValidity_()) {
          event.stopImmediatePropagation();
          event.preventDefault();
          return Promise.resolve(null);
        }
        if (this.xhrAction_ || this.method_ == "POST") {
          event.preventDefault();
        }
        return this.submit_(ActionTrust.HIGH, event);
      }
    }, {
      key: "submit_",
      value: function submit_(trust, event) {
        var _this4 = this;
        try {
          var _event = {
            form: this.form_,
            actionXhrMutator: this.setXhrAction.bind(this)
          };
          devAssert2(this.formSubmitService_).fire(_event);
        } catch (e) {
          dev().error(TAG, "Form submit service failed: %s", e);
        }
        var varSubsFields = this.getVarSubsFields_();
        var asyncInputs = this.form_.getElementsByClassName(AsyncInputClasses.ASYNC_INPUT);
        this.dirtinessHandler_.onSubmitting();
        if (!this.xhrAction_ && this.method_ == "GET") {
          this.assertSsrTemplate_(false, "Non-XHR GETs not supported.");
          this.assertNoSensitiveFields_();
          if (asyncInputs.length === 0) {
            for (var i = 0; i < varSubsFields.length; i++) {
              this.urlReplacement_.expandInputValueSync(varSubsFields[i]);
            }
            var shouldSubmitFormElement = !event;
            this.handleNonXhrGet_(shouldSubmitFormElement);
            this.dirtinessHandler_.onSubmitSuccess();
            return resolvedPromise();
          }
          if (event) {
            event.preventDefault();
          }
        }
        this.setState_(FormState.SUBMITTING);
        var requiredActionPromises = [];
        var presubmitPromises = [];
        presubmitPromises.push(this.doVarSubs_(varSubsFields));
        iterateCursor(asyncInputs, function(asyncInput) {
          var asyncCall = _this4.getValueForAsyncInput_(asyncInput);
          if (asyncInput.classList.contains(AsyncInputClasses.ASYNC_REQUIRED_ACTION)) {
            requiredActionPromises.push(asyncCall);
          } else {
            presubmitPromises.push(asyncCall);
          }
        });
        return Promise.all(requiredActionPromises).then(function() {
          return _this4.waitOnPromisesOrTimeout_(presubmitPromises, SUBMIT_TIMEOUT).then(function() {
            return _this4.handlePresubmitSuccess_(trust);
          }, function(error) {
            return _this4.handlePresubmitError_(error, trust);
          });
        }, function(error) {
          return _this4.handlePresubmitError_(error, trust);
        });
      }
    }, {
      key: "handlePresubmitError_",
      value: function handlePresubmitError_(error, trust) {
        var detail = dict();
        if (error && error.message) {
          detail["error"] = error.message;
        }
        return this.handleSubmitFailure_(error, detail, trust);
      }
    }, {
      key: "getVarSubsFields_",
      value: function getVarSubsFields_() {
        return this.form_.querySelectorAll('[type="hidden"][data-amp-replace]');
      }
    }, {
      key: "handlePresubmitSuccess_",
      value: function handlePresubmitSuccess_(trust) {
        if (this.xhrAction_) {
          return this.handleXhrSubmit_(trust);
        } else if (this.method_ == "POST") {
          this.handleNonXhrPost_();
        } else if (this.method_ == "GET") {
          this.handleNonXhrGet_(true);
        }
        return resolvedPromise();
      }
    }, {
      key: "handleXhrVerify_",
      value: function handleXhrVerify_() {
        var _this5 = this;
        if (this.state_ === FormState.SUBMITTING) {
          return resolvedPromise();
        }
        this.setState_(FormState.VERIFYING);
        this.triggerAction_(FormEvents.VERIFY, null, ActionTrust.HIGH);
        return this.doVarSubs_(this.getVarSubsFields_()).then(function() {
          return _this5.doVerifyXhr_();
        });
      }
    }, {
      key: "handleXhrSubmit_",
      value: function handleXhrSubmit_(trust) {
        var _this6 = this;
        var p;
        if (this.ssrTemplateHelper_.isEnabled()) {
          p = this.handleSsrTemplate_(trust);
        } else {
          this.submittingWithTrust_(trust);
          p = this.doActionXhr_().then(function(response) {
            return _this6.handleXhrSubmitSuccess_(response, trust);
          }, function(error) {
            return _this6.handleXhrSubmitFailure_(error, trust);
          });
        }
        if (getMode().test) {
          this.xhrSubmitPromise_ = p;
        }
        return p;
      }
    }, {
      key: "handleSsrTemplate_",
      value: function handleSsrTemplate_(trust) {
        var _this7 = this;
        var values = this.getFormAsObject_();
        return this.renderTemplate_(values).then(function() {
          return _this7.actions_.trigger(_this7.form_, FormEvents.SUBMIT, null, trust);
        }).then(function() {
          var request = _this7.requestForFormFetch(dev().assertString(_this7.xhrAction_), _this7.method_);
          request.fetchOpt = setupInit(request.fetchOpt);
          request.fetchOpt = setupAMPCors(_this7.win_, request.xhrUrl, request.fetchOpt);
          request.xhrUrl = setupInput(_this7.win_, request.xhrUrl, request.fetchOpt);
          return _this7.ssrTemplateHelper_.ssr(_this7.form_, request, _this7.templatesForSsr_());
        }).then(function(response) {
          return _this7.handleSsrTemplateResponse_(response, trust);
        }, function(error) {
          var detail = dict();
          if (error && error.message) {
            detail["error"] = error.message;
          }
          return _this7.handleSubmitFailure_(error, detail, trust);
        });
      }
    }, {
      key: "templatesForSsr_",
      value: function templatesForSsr_() {
        var successTemplate;
        var successContainer = this.form_.querySelector("[submit-success]");
        if (successContainer) {
          successTemplate = this.templates_.maybeFindTemplate(successContainer);
        }
        var errorTemplate;
        var errorContainer = this.form_.querySelector("[submit-error]");
        if (errorContainer) {
          errorTemplate = this.templates_.maybeFindTemplate(errorContainer);
        }
        return {
          successTemplate,
          errorTemplate
        };
      }
    }, {
      key: "handleSsrTemplateResponse_",
      value: function handleSsrTemplateResponse_(response, trust) {
        var init = response["init"];
        var body = tryParseJson(response["body"], function(error) {
          return user().error(TAG, "Failed to parse response JSON: %s", error);
        });
        if (init) {
          var status = init["status"];
          if (status >= 300) {
            return this.handleSubmitFailure_(status, response, trust, body);
          }
        }
        return this.handleSubmitSuccess_(response, trust, body);
      }
    }, {
      key: "submittingWithTrust_",
      value: function submittingWithTrust_(trust) {
        var _this8 = this;
        this.triggerFormSubmitInAnalytics_("amp-form-submit");
        var values = this.getFormAsObject_();
        this.renderTemplate_(values).then(function() {
          _this8.actions_.trigger(_this8.form_, FormEvents.SUBMIT, null, trust);
        });
      }
    }, {
      key: "doVarSubs_",
      value: function doVarSubs_(varSubsFields) {
        var varSubPromises = [];
        for (var i = 0; i < varSubsFields.length; i++) {
          varSubPromises.push(this.urlReplacement_.expandInputValueAsync(varSubsFields[i]));
        }
        return this.waitOnPromisesOrTimeout_(varSubPromises, 100);
      }
    }, {
      key: "getValueForAsyncInput_",
      value: function getValueForAsyncInput_(asyncInput) {
        var _this9 = this;
        return asyncInput.getImpl().then(function(implementation) {
          return implementation.getValue();
        }).then(function(value) {
          var name = asyncInput.getAttribute(AsyncInputAttributes.NAME);
          var input = _this9.form_.querySelector("input[name=" + escapeCssSelectorIdent(name) + "]");
          if (!input) {
            input = createElementWithAttributes(_this9.win_.document, "input", dict({
              "name": asyncInput.getAttribute(AsyncInputAttributes.NAME),
              "hidden": "true"
            }));
          }
          input.setAttribute("value", value);
          _this9.form_.appendChild(input);
        });
      }
    }, {
      key: "doActionXhr_",
      value: function doActionXhr_() {
        return this.doXhr_(dev().assertString(this.xhrAction_), this.method_);
      }
    }, {
      key: "doVerifyXhr_",
      value: function doVerifyXhr_() {
        var _this$doXhr_;
        var noVerifyFields = toArray(this.form_.querySelectorAll("[" + escapeCssSelectorIdent(FORM_VERIFY_OPTOUT) + "]"));
        var denylist = noVerifyFields.map(function(field) {
          return field.name || field.id;
        });
        return this.doXhr_(dev().assertString(this.xhrVerify_), this.method_, (_this$doXhr_ = {}, _this$doXhr_[FORM_VERIFY_PARAM] = true, _this$doXhr_), denylist);
      }
    }, {
      key: "doXhr_",
      value: function doXhr_(url, method, opt_extraFields, opt_fieldDenylist) {
        this.assertSsrTemplate_(false, "XHRs should be proxied.");
        var request = this.requestForFormFetch(url, method, opt_extraFields, opt_fieldDenylist);
        return this.xhr_.fetch(request.xhrUrl, request.fetchOpt);
      }
    }, {
      key: "trustForSubmitResponse_",
      value: function trustForSubmitResponse_(incomingTrust) {
        return incomingTrust - 1;
      }
    }, {
      key: "handleXhrSubmitSuccess_",
      value: function handleXhrSubmitSuccess_(response, incomingTrust) {
        var _this10 = this;
        return this.xhr_.xssiJson(response, this.getXssiPrefix()).then(function(json) {
          return _this10.handleSubmitSuccess_(json, incomingTrust);
        }, function(error) {
          return user().error(TAG, "Failed to parse response JSON: %s", error);
        }).then(function() {
          _this10.triggerFormSubmitInAnalytics_("amp-form-submit-success");
          _this10.maybeHandleRedirect_(response);
        });
      }
    }, {
      key: "handleSubmitSuccess_",
      value: function handleSubmitSuccess_(result, incomingTrust, opt_eventData) {
        var _this11 = this;
        this.setState_(FormState.SUBMIT_SUCCESS);
        return tryResolve(function() {
          _this11.renderTemplate_(result || {}).then(function() {
            var outgoingTrust = _this11.trustForSubmitResponse_(incomingTrust);
            _this11.triggerAction_(FormEvents.SUBMIT_SUCCESS, opt_eventData === void 0 ? result : opt_eventData, outgoingTrust);
            _this11.dirtinessHandler_.onSubmitSuccess();
          });
        });
      }
    }, {
      key: "handleXhrSubmitFailure_",
      value: function handleXhrSubmitFailure_(e, incomingTrust) {
        var _this12 = this;
        var promise;
        if (e && e.response) {
          var error = e;
          promise = this.xhr_.xssiJson(error.response, this.getXssiPrefix()).catch(function() {
            return null;
          });
        } else {
          promise = Promise.resolve(null);
        }
        return promise.then(function(responseJson) {
          _this12.handleSubmitFailure_(e, responseJson, incomingTrust);
          _this12.triggerFormSubmitInAnalytics_("amp-form-submit-error");
          _this12.maybeHandleRedirect_(e.response);
        });
      }
    }, {
      key: "handleSubmitFailure_",
      value: function handleSubmitFailure_(error, json, incomingTrust, opt_eventData) {
        var _this13 = this;
        this.setState_(FormState.SUBMIT_ERROR);
        user().error(TAG, "Form submission failed: %s", error);
        return tryResolve(function() {
          _this13.renderTemplate_(json).then(function() {
            var outgoingTrust = _this13.trustForSubmitResponse_(incomingTrust);
            _this13.triggerAction_(FormEvents.SUBMIT_ERROR, opt_eventData === void 0 ? json : opt_eventData, outgoingTrust);
            _this13.dirtinessHandler_.onSubmitError();
          });
        });
      }
    }, {
      key: "handleNonXhrPost_",
      value: function handleNonXhrPost_() {
        userAssert(false, "Only XHR based (via action-xhr attribute) submissions are supported for POST requests. %s", this.form_);
      }
    }, {
      key: "handleNonXhrGet_",
      value: function handleNonXhrGet_(shouldSubmitFormElement) {
        this.triggerFormSubmitInAnalytics_("amp-form-submit");
        if (shouldSubmitFormElement) {
          this.form_.submit();
        }
        this.setState_(FormState.INITIAL);
      }
    }, {
      key: "assertSsrTemplate_",
      value: function assertSsrTemplate_(value, msg) {
        var supported = this.ssrTemplateHelper_.isEnabled();
        userAssert(supported === value, "[amp-form]: viewerRenderTemplate | %s", msg);
      }
    }, {
      key: "assertNoSensitiveFields_",
      value: function assertNoSensitiveFields_() {
        var fields = this.form_.querySelectorAll("input[type=password],input[type=file]");
        userAssert(fields.length == 0, "input[type=password] or input[type=file] may only appear in form[method=post]");
      }
    }, {
      key: "checkValidity_",
      value: function checkValidity_() {
        if (isCheckValiditySupported(this.win_.document)) {
          var isValid = checkUserValidityOnSubmission(this.form_);
          if (this.shouldValidate_) {
            this.validator_.report();
            return isValid;
          }
        }
        return true;
      }
    }, {
      key: "maybeHandleRedirect_",
      value: function maybeHandleRedirect_(response) {
        this.assertSsrTemplate_(false, "Redirects not supported.");
        if (!response || !response.headers) {
          return;
        }
        var redirectTo = response.headers.get(REDIRECT_TO_HEADER);
        if (redirectTo) {
          userAssert(!this.isAmp4Email_, "Redirects not supported in AMP4Email.", this.form_);
          userAssert(this.target_ != "_blank", "Redirecting to target=_blank using AMP-Redirect-To is currently not supported, use target=_top instead. %s", this.form_);
          try {
            var urlService = Services.urlForDoc(this.ampdoc_);
            urlService.assertAbsoluteHttpOrHttpsUrl(redirectTo);
            urlService.assertHttpsUrl(redirectTo, "AMP-Redirect-To", "Url");
          } catch (e) {
            userAssert(false, "The `AMP-Redirect-To` header value must be an absolute URL starting with https://. Found %s", redirectTo);
          }
          var navigator = Services.navigationForDoc(this.ampdoc_);
          navigator.navigateTo(this.win_, redirectTo, REDIRECT_TO_HEADER);
        }
      }
    }, {
      key: "triggerAction_",
      value: function triggerAction_(name, detail, trust) {
        var event = createCustomEvent(this.win_, TAG + "." + name, dict({
          "response": detail
        }));
        this.actions_.trigger(this.form_, name, event, trust);
      }
    }, {
      key: "waitOnPromisesOrTimeout_",
      value: function waitOnPromisesOrTimeout_(promises, timeout) {
        return Promise.race([Promise.all(promises), this.timer_.promise(timeout)]);
      }
    }, {
      key: "analyticsEvent_",
      value: function analyticsEvent_(eventType, opt_vars) {
        triggerAnalyticsEvent(this.form_, eventType, opt_vars);
      }
    }, {
      key: "getFormAsObject_",
      value: function getFormAsObject_() {
        return getFormAsObject(this.form_);
      }
    }, {
      key: "setState_",
      value: function setState_(newState) {
        var previousState = this.state_;
        this.form_.classList.remove("amp-form-" + previousState);
        this.form_.classList.add("amp-form-" + newState);
        this.cleanupRenderedTemplate_(previousState);
        this.state_ = newState;
      }
    }, {
      key: "renderTemplate_",
      value: function renderTemplate_(data) {
        var _this14 = this;
        if (isArray(data)) {
          data = dict();
          user().warn(TAG, "Unexpected data type: " + data + ". Expected non JSON array.");
        }
        var container = this.form_.querySelector("[" + this.state_ + "]");
        var p = resolvedPromise();
        if (container) {
          var messageId = "rendered-message-" + this.id_;
          container.setAttribute("role", "alert");
          container.setAttribute("aria-labeledby", messageId);
          container.setAttribute("aria-live", "assertive");
          if (this.templates_.hasTemplate(container)) {
            p = this.ssrTemplateHelper_.applySsrOrCsrTemplate(devAssert2(container), data).then(function(rendered) {
              var renderContainer;
              if (isArray(rendered)) {
                if (rendered.length === 1) {
                  renderContainer = rendered[0];
                } else {
                  renderContainer = document.createElement("div");
                  rendered.forEach(function(child) {
                    return renderContainer.appendChild(child);
                  });
                }
              } else {
                renderContainer = rendered;
              }
              renderContainer.id = messageId;
              renderContainer.setAttribute("i-amphtml-rendered", "");
              return _this14.mutator_.mutateElement(dev().assertElement(container), function() {
                container.appendChild(dev().assertElement(renderContainer));
                var renderedEvent = createCustomEvent(_this14.win_, AmpEvents.DOM_UPDATE, null, {
                  bubbles: true
                });
                container.dispatchEvent(renderedEvent);
              });
            });
          } else {
            this.mutator_.mutateElement(container, function() {
            });
          }
        }
        if (getMode().test) {
          this.renderTemplatePromise_ = p;
        }
        return p;
      }
    }, {
      key: "cleanupRenderedTemplate_",
      value: function cleanupRenderedTemplate_(state) {
        var container = this.form_.querySelector("[" + state + "]");
        if (!container) {
          return;
        }
        var previousRender = childElementByAttr(container, "i-amphtml-rendered");
        if (previousRender) {
          removeElement(previousRender);
        }
      }
    }, {
      key: "maybeInitializeFromUrl_",
      value: function maybeInitializeFromUrl_() {
        var _this15 = this;
        if (isProxyOrigin(this.win_.location) || !this.form_.hasAttribute("data-initialize-from-url")) {
          return;
        }
        var valueTags = ["SELECT", "TEXTAREA"];
        var valueInputTypes = ["color", "date", "datetime-local", "email", "hidden", "month", "number", "range", "search", "tel", "text", "time", "url", "week"];
        var checkedInputTypes = ["checkbox", "radio"];
        var maybeFillField = function maybeFillField2(field, name) {
          if (field.hasAttribute("data-amp-replace")) {
            return;
          }
          if (!field.hasAttribute("data-allow-initialization")) {
            return;
          }
          var value = queryParams[name] || "";
          var type = field.getAttribute("type") || "text";
          var tag = field.tagName;
          if (tag === "INPUT") {
            if (valueInputTypes.includes(type.toLocaleLowerCase())) {
              if (field.value !== value) {
                field.value = value;
              }
            } else if (checkedInputTypes.includes(type)) {
              var checked = field.value === value;
              if (field.checked !== checked) {
                field.checked = checked;
              }
            }
          } else if (valueTags.includes(tag)) {
            if (field.value !== value) {
              field.value = value;
            }
          }
        };
        var queryParams = parseQueryString(this.win_.location.search);
        Object.keys(queryParams).forEach(function(key) {
          var formControls = _this15.form_.elements[key];
          if (!formControls) {
            return;
          }
          if (formControls.nodeType === Node.ELEMENT_NODE) {
            var field = dev().assertElement(formControls);
            maybeFillField(field, key);
          } else if (formControls.length) {
            var fields = formControls;
            iterateCursor(fields, function(field2) {
              return maybeFillField(field2, key);
            });
          }
        });
      }
    }, {
      key: "renderTemplatePromiseForTesting",
      value: function renderTemplatePromiseForTesting() {
        return this.renderTemplatePromise_;
      }
    }, {
      key: "xhrSubmitPromiseForTesting",
      value: function xhrSubmitPromiseForTesting() {
        return this.xhrSubmitPromise_;
      }
    }]);
    return AmpForm2;
  }();
  function checkUserValidityOnSubmission(form) {
    var elements = form.querySelectorAll("input,select,textarea,fieldset");
    iterateCursor(elements, function(element) {
      return checkUserValidity(element);
    });
    return checkUserValidity(form);
  }
  function getUserValidityStateFor(element) {
    if (element.classList.contains("user-valid")) {
      return UserValidityState.USER_VALID;
    } else if (element.classList.contains("user-invalid")) {
      return UserValidityState.USER_INVALID;
    }
    return UserValidityState.NONE;
  }
  function updateInvalidTypesClasses(element) {
    if (!element.validity) {
      return;
    }
    for (var validationType in element.validity) {
      element.classList.toggle(validationType, element.validity[validationType]);
    }
  }
  function removeValidityStateClasses(form) {
    var dummyInput = document.createElement("input");
    var _loop = function _loop2(validityState2) {
      var elements = form.querySelectorAll("." + escapeCssSelectorIdent(validityState2));
      iterateCursor(elements, function(element) {
        dev().assertElement(element).classList.remove(validityState2);
      });
    };
    for (var validityState in dummyInput.validity) {
      _loop(validityState);
    }
  }
  function checkUserValidity(element, propagate) {
    if (propagate === void 0) {
      propagate = false;
    }
    if (!element.checkValidity) {
      return true;
    }
    var shouldPropagate = false;
    var previousValidityState = getUserValidityStateFor(element);
    var isCurrentlyValid = element.checkValidity();
    if (previousValidityState != UserValidityState.USER_VALID && isCurrentlyValid) {
      element.classList.add("user-valid");
      element.classList.remove("user-invalid");
      shouldPropagate = previousValidityState == UserValidityState.USER_INVALID;
    } else if (previousValidityState != UserValidityState.USER_INVALID && !isCurrentlyValid) {
      element.classList.add("user-invalid");
      element.classList.remove("user-valid");
      shouldPropagate = true;
    }
    updateInvalidTypesClasses(element);
    if (propagate && shouldPropagate) {
      var ancestors = ancestorElementsByTag(element, "fieldset");
      for (var i = 0; i < ancestors.length; i++) {
        checkUserValidity(ancestors[i]);
      }
      if (element.form) {
        checkUserValidity(element.form);
      }
    }
    return isCurrentlyValid;
  }
  function checkUserValidityAfterInteraction_(input) {
    checkUserValidity(input, true);
  }
  var AmpFormService = /* @__PURE__ */ function() {
    function AmpFormService2(ampdoc) {
      var _this16 = this;
      _classCallCheck13(this, AmpFormService2);
      this.whenInitialized_ = this.installStyles_(ampdoc).then(function() {
        return _this16.installHandlers_(ampdoc);
      });
      if (getMode().test) {
        this.whenInitialized_.then(function() {
          var win = ampdoc.win;
          var event = createCustomEvent(win, FormEvents.SERVICE_INIT, null, {
            bubbles: true
          });
          win.dispatchEvent(event);
        });
      }
    }
    _createClass13(AmpFormService2, [{
      key: "whenInitialized",
      value: function whenInitialized() {
        return this.whenInitialized_;
      }
    }, {
      key: "installStyles_",
      value: function installStyles_(ampdoc) {
        var deferred = new Deferred();
        installStylesForDoc(ampdoc, CSS2, deferred.resolve, false, TAG);
        return deferred.promise;
      }
    }, {
      key: "installHandlers_",
      value: function installHandlers_(ampdoc) {
        var _this17 = this;
        return ampdoc.whenReady().then(function() {
          var root = ampdoc.getRootNode();
          _this17.installSubmissionHandlers_(root.querySelectorAll("form"));
          AmpFormTextarea.install(ampdoc);
          _this17.installDomUpdateEventListener_(root);
          _this17.installFormSubmissionShortcutForTextarea_(root);
        });
      }
    }, {
      key: "installSubmissionHandlers_",
      value: function installSubmissionHandlers_(forms) {
        if (!forms) {
          return;
        }
        iterateCursor(forms, function(form, index) {
          var existingAmpForm = formOrNullForElement(form);
          if (!existingAmpForm) {
            new AmpForm(form, "amp-form-" + index);
          }
        });
      }
    }, {
      key: "installDomUpdateEventListener_",
      value: function installDomUpdateEventListener_(doc) {
        var _this18 = this;
        doc.addEventListener(AmpEvents.DOM_UPDATE, function() {
          _this18.installSubmissionHandlers_(doc.querySelectorAll("form"));
        });
      }
    }, {
      key: "installFormSubmissionShortcutForTextarea_",
      value: function installFormSubmissionShortcutForTextarea_(doc) {
        doc.addEventListener("keydown", function(e) {
          if (e.defaultPrevented || e.key != Keys.ENTER || !(e.ctrlKey || e.metaKey) || e.target.tagName !== "TEXTAREA") {
            return;
          }
          var form = e.target.form;
          var ampForm = form ? formOrNullForElement(form) : null;
          if (!ampForm) {
            return;
          }
          ampForm.handleSubmitEvent_(e);
          e.preventDefault();
        });
      }
    }]);
    return AmpFormService2;
  }();
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerServiceForDoc("form-submit-service", FormSubmitService);
    AMP2.registerServiceForDoc(TAG, AmpFormService);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-form-0.1.max.js.map
