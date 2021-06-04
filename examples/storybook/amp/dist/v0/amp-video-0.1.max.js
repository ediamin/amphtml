(self.AMP=self.AMP||[]).push({n:"amp-video",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // src/core/data-structures/promise.js
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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

  // src/core/dom/query.js
  function assertIsName(name) {
    devAssert2(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
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
  function childElement(parent, callback) {
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function isIframed(win) {
    return win.parent && win.parent != win;
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
  function _classCallCheck2(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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

  // src/mediasession-helper.js
  var EMPTY_METADATA = {
    "title": "",
    "artist": "",
    "album": "",
    "artwork": [{
      "src": ""
    }]
  };
  function setMediaSession(win, metadata, playHandler, pauseHandler) {
    var navigator = win.navigator;
    if ("mediaSession" in navigator && win.MediaMetadata) {
      navigator.mediaSession.metadata = new win.MediaMetadata(EMPTY_METADATA);
      navigator.mediaSession.metadata = new win.MediaMetadata(metadata);
      navigator.mediaSession.setActionHandler("play", playHandler);
      navigator.mediaSession.setActionHandler("pause", pauseHandler);
    }
  }
  function parseSchemaImage(doc) {
    var schema = doc.querySelector('script[type="application/ld+json"]');
    if (!schema) {
      return;
    }
    var schemaJson = tryParseJson(schema.textContent);
    if (!schemaJson || !schemaJson["image"]) {
      return;
    }
    if (typeof schemaJson["image"] === "string") {
      return schemaJson["image"];
    } else if (schemaJson["image"]["@list"] && typeof schemaJson["image"]["@list"][0] === "string") {
      return schemaJson["image"]["@list"][0];
    } else if (typeof schemaJson["image"]["url"] === "string") {
      return schemaJson["image"]["url"];
    } else if (typeof schemaJson["image"][0] === "string") {
      return schemaJson["image"][0];
    } else {
      return;
    }
  }
  function parseOgImage(doc) {
    var metaTag = doc.querySelector('meta[property="og:image"]');
    if (metaTag) {
      return metaTag.getAttribute("content");
    } else {
      return;
    }
  }
  function parseFavicon(doc) {
    var linkTag = doc.querySelector('link[rel="shortcut icon"]') || doc.querySelector('link[rel="icon"]');
    if (linkTag) {
      return linkTag.getAttribute("href");
    } else {
      return;
    }
  }
  function validateMediaMetadata(element, metadata) {
    var urlService = Services.urlForDoc(element);
    if (metadata && metadata.artwork) {
      var artwork = metadata.artwork;
      devAssert(isArray(artwork));
      artwork.forEach(function(item) {
        if (item) {
          var src = isObject(item) ? item.src : item;
          userAssert(urlService.isProtocolValid(src));
        }
      });
    }
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
  function propagateObjectFitStyles(fromEl, toEl) {
    if (fromEl.hasAttribute("object-fit")) {
      setStyle(toEl, "object-fit", fromEl.getAttribute("object-fit"));
    }
    if (fromEl.hasAttribute("object-position")) {
      setStyle(toEl, "object-position", fromEl.getAttribute("object-position"));
    }
  }
  function isVar(property) {
    return property.startsWith("--");
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
  function observeBorderBoxSize(element, callback) {
    observeSize(element, Type.BORDER_BOX, callback);
  }
  function unobserveBorderBoxSize(element, callback) {
    unobserveSize(element, Type.BORDER_BOX, callback);
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

  // src/utils/pause-helper.js
  function _classCallCheck3(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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
  var PauseHelper = /* @__PURE__ */ function() {
    function PauseHelper2(element) {
      _classCallCheck3(this, PauseHelper2);
      this.element_ = element;
      this.isPlaying_ = false;
      this.hasSize_ = false;
      this.pauseWhenNoSize_ = this.pauseWhenNoSize_.bind(this);
    }
    _createClass2(PauseHelper2, [{
      key: "updatePlaying",
      value: function updatePlaying(isPlaying) {
        if (isPlaying === this.isPlaying_) {
          return;
        }
        this.isPlaying_ = isPlaying;
        if (isPlaying) {
          this.hasSize_ = false;
          observeBorderBoxSize(this.element_, this.pauseWhenNoSize_);
        } else {
          unobserveBorderBoxSize(this.element_, this.pauseWhenNoSize_);
        }
      }
    }, {
      key: "pauseWhenNoSize_",
      value: function pauseWhenNoSize_(_ref) {
        var blockSize = _ref.blockSize, inlineSize = _ref.inlineSize;
        var hasSize = inlineSize > 0 && blockSize > 0;
        if (hasSize === this.hasSize_) {
          return;
        }
        this.hasSize_ = hasSize;
        if (!hasSize) {
          this.element_.pause();
        }
      }
    }]);
    return PauseHelper2;
  }();

  // src/video-interface.js
  function _classCallCheck4(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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
  var MIN_VISIBILITY_RATIO_FOR_AUTOPLAY = 0.5;
  var VideoInterface = /* @__PURE__ */ function() {
    function VideoInterface2() {
      _classCallCheck4(this, VideoInterface2);
    }
    _createClass3(VideoInterface2, [{
      key: "signals",
      value: function signals() {
      }
    }, {
      key: "mutateElementSkipRemeasure",
      value: function mutateElementSkipRemeasure(unusedMutator) {
      }
    }, {
      key: "supportsPlatform",
      value: function supportsPlatform() {
      }
    }, {
      key: "isInteractive",
      value: function isInteractive() {
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
      }
    }, {
      key: "getPlayedRanges",
      value: function getPlayedRanges() {
      }
    }, {
      key: "play",
      value: function play(unusedIsAutoplay) {
      }
    }, {
      key: "pause",
      value: function pause() {
      }
    }, {
      key: "mute",
      value: function mute() {
      }
    }, {
      key: "unmute",
      value: function unmute() {
      }
    }, {
      key: "showControls",
      value: function showControls() {
      }
    }, {
      key: "hideControls",
      value: function hideControls() {
      }
    }, {
      key: "getMetadata",
      value: function getMetadata() {
      }
    }, {
      key: "preimplementsAutoFullscreen",
      value: function preimplementsAutoFullscreen() {
      }
    }, {
      key: "preimplementsMediaSessionAPI",
      value: function preimplementsMediaSessionAPI() {
      }
    }, {
      key: "fullscreenEnter",
      value: function fullscreenEnter2() {
      }
    }, {
      key: "fullscreenExit",
      value: function fullscreenExit2() {
      }
    }, {
      key: "isFullscreen",
      value: function isFullscreen() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(unusedTimeSeconds) {
      }
    }]);
    return VideoInterface2;
  }();
  VideoInterface.prototype.element;
  VideoInterface.prototype.win;
  var VideoAttributes = {
    AUTOPLAY: "autoplay",
    DOCK: "dock",
    ROTATE_TO_FULLSCREEN: "rotate-to-fullscreen",
    NO_AUDIO: "noaudio"
  };
  var VideoEvents = {
    REGISTERED: "registered",
    LOAD: "load",
    LOADEDMETADATA: "loadedmetadata",
    LOADEDDATA: "loadeddata",
    PLAY: "play",
    PLAYING: "playing",
    PAUSE: "pause",
    ENDED: "ended",
    MUTED: "muted",
    UNMUTED: "unmuted",
    VISIBILITY: "amp:video:visibility",
    RELOAD: "reloaded",
    AD_START: "ad_start",
    AD_END: "ad_end",
    CUSTOM_TICK: "amp:video:tick"
  };
  var PlayingStates = {
    PLAYING_MANUAL: "playing_manual",
    PLAYING_AUTO: "playing_auto",
    PAUSED: "paused"
  };
  var VideoAnalyticsEvents = {
    ENDED: "video-ended",
    PAUSE: "video-pause",
    PLAY: "video-play",
    SESSION: "video-session",
    SESSION_VISIBLE: "video-session-visible",
    SECONDS_PLAYED: "video-seconds-played",
    CUSTOM: "video-hosted-custom",
    PERCENTAGE_PLAYED: "video-percentage-played",
    AD_START: "video-ad-start",
    AD_END: "video-ad-end"
  };
  var videoAnalyticsCustomEventTypeKey = "__amp:eventType";
  var VideoServiceSignals = {
    USER_INTERACTED: "user-interacted",
    PLAYBACK_DELEGATED: "playback-delegated"
  };
  function userInteractedWith(video) {
    video.signals().signal(VideoServiceSignals.USER_INTERACTED);
  }
  var MEDIA_COMPONENT_CLASSNAME = "i-amphtml-media-component";
  function setIsMediaComponent(element) {
    element.classList.add(MEDIA_COMPONENT_CLASSNAME);
  }

  // src/core/constants/visibility-state.js
  var VisibilityState = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/core/data-structures/lru-cache.js
  function _classCallCheck5(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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

  // src/utils/story.js
  function descendsFromStory(element) {
    return !!closestAncestorElementBySelector(element, "amp-story");
  }

  // extensions/amp-video/0.1/video-cache.js
  function fetchCachedSources(videoEl, ampdoc) {
    var _videoEl$querySelecto;
    var win = ampdoc.win;
    if (!(videoEl.getAttribute("src") || (_videoEl$querySelecto = videoEl.querySelector("source[src]")) != null && _videoEl$querySelecto.getAttribute("src"))) {
      user().error("AMP-VIDEO", "Video cache not properly configured");
      return resolvedPromise();
    }
    var _Services$documentInf = Services.documentInfoForDoc(win.document), canonicalUrl = _Services$documentInf.canonicalUrl, sourceUrl = _Services$documentInf.sourceUrl;
    maybeReplaceSrcWithSourceElement(videoEl, win);
    var videoUrl = resolveRelativeUrl(selectVideoSource(videoEl), sourceUrl);
    return getCacheUrlService(videoEl, ampdoc).then(function(service) {
      return service.createCacheUrl(videoUrl);
    }).then(function(cacheUrl) {
      var requestUrl = addParamsToUrl(cacheUrl.replace("/c/", "/mbv/"), {
        "amp_video_host_url": canonicalUrl
      });
      return Services.xhrFor(win).fetch(requestUrl);
    }).then(function(response) {
      return response.json();
    }).then(function(jsonResponse) {
      return applySourcesToVideo(videoEl, jsonResponse["sources"]);
    }).catch(function() {
    });
  }
  function selectVideoSource(videoEl) {
    var _possibleSources$;
    var possibleSources = toArray(videoEl.querySelectorAll("source[src]"));
    for (var i = 0; i < possibleSources.length; i++) {
      if (matches(possibleSources[i], '[type*="video/mp4"]')) {
        return possibleSources[i].getAttribute("src");
      }
    }
    return (_possibleSources$ = possibleSources[0]) == null ? void 0 : _possibleSources$.getAttribute("src");
  }
  function applySourcesToVideo(videoEl, sources2) {
    sources2.sort(function(a2, b) {
      return a2["bitrate_kbps"] - b["bitrate_kbps"];
    }).forEach(function(source) {
      var sourceEl = createElementWithAttributes(videoEl.ownerDocument, "source", {
        "src": source["url"],
        "type": source["type"],
        "data-bitrate": source["bitrate_kbps"]
      });
      videoEl.insertBefore(sourceEl, videoEl.firstChild);
    });
  }
  function maybeReplaceSrcWithSourceElement(videoEl, win) {
    if (!videoEl.hasAttribute("src")) {
      return;
    }
    var sourceEl = win.document.createElement("source");
    var srcAttr = videoEl.getAttribute("src");
    sourceEl.setAttribute("src", srcAttr);
    var typeAttr = videoEl.getAttribute("type");
    if (typeAttr) {
      sourceEl.setAttribute("type", typeAttr);
    }
    videoEl.removeAttribute("src");
    videoEl.removeAttribute("type");
    var sourceEls = videoEl.querySelectorAll("source");
    iterateCursor(sourceEls, function(el) {
      return removeElement(el);
    });
    videoEl.insertBefore(sourceEl, videoEl.firstChild);
  }
  function getCacheUrlService(videoEl, ampdoc) {
    return Services.extensionsFor(ampdoc.win).installExtensionForDoc(ampdoc, "amp-cache-url").then(function() {
      return Services.cacheUrlServicePromiseForDoc(videoEl);
    });
  }

  // src/core/dom/fullscreen.js
  function fullscreenEnter(element) {
    var requestFs = element.requestFullscreen || element.requestFullScreen || element.webkitRequestFullscreen || element.webkitEnterFullscreen || element.msRequestFullscreen || element.mozRequestFullScreen;
    if (requestFs) {
      requestFs.call(element);
    }
  }
  function fullscreenExit(element) {
    var elementBoundExit = element.cancelFullScreen || element.exitFullscreen || element.webkitExitFullscreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.msExitFullscreen;
    if (elementBoundExit) {
      elementBoundExit.call(element);
      return;
    }
    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
      return;
    }
    var docBoundExit = ownerDocument.cancelFullScreen || ownerDocument.exitFullscreen || ownerDocument.webkitExitFullscreen || ownerDocument.webkitCancelFullScreen || ownerDocument.mozCancelFullScreen || ownerDocument.msExitFullscreen;
    if (docBoundExit) {
      docBoundExit.call(ownerDocument);
    }
  }
  function isFullscreenElement(element) {
    var webkitDisplayingFullscreen = element.webkitDisplayingFullscreen;
    if (webkitDisplayingFullscreen !== void 0) {
      return webkitDisplayingFullscreen;
    }
    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
      return false;
    }
    var fullscreenElement = ownerDocument.fullscreenElement || ownerDocument.webkitFullscreenElement || ownerDocument.mozFullScreenElement || ownerDocument.webkitCurrentFullScreenElement;
    return fullscreenElement == element;
  }

  // src/core/dom/weakref.js
  function _classCallCheck6(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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
  var DomBasedWeakRef = /* @__PURE__ */ function() {
    function DomBasedWeakRef2(win, id) {
      _classCallCheck6(this, DomBasedWeakRef2);
      this.win = win;
      this.id_ = id;
    }
    _createClass5(DomBasedWeakRef2, [{
      key: "deref",
      value: function deref() {
        return this.win.document.getElementById(this.id_) || void 0;
      }
    }], [{
      key: "make",
      value: function make(win, element) {
        if (win.WeakRef) {
          return new win.WeakRef(element);
        }
        if (!element.id) {
          var index = win.__AMP_WEAKREF_ID = (win.__AMP_WEAKREF_ID || 0) + 1;
          element.id = "weakref-id-" + index;
        }
        return new DomBasedWeakRef2(win, element.id);
      }
    }]);
    return DomBasedWeakRef2;
  }();

  // src/experiments/index.js
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
  var TAG = "EXPERIMENTS";
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
        for (var _iterator = _createForOfIteratorHelperLoose2(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose2(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
      dev().warn(TAG, "Failed to retrieve experiments from localStorage.");
    }
    var tokens = ((_experimentsString = experimentsString) == null ? void 0 : _experimentsString.split(/\s*,\s*/g)) || [];
    var toggles = map();
    for (var _iterator3 = _createForOfIteratorHelperLoose2(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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

  // extensions/amp-video/0.1/flexible-bitrate.js
  function _classCallCheck7(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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
  var TAG2 = "amp-video";
  var BITRATE_BY_EFFECTIVE_TYPE = {
    "slow-2g": 50,
    "2g": 50,
    "3g": 1e3,
    "4g": 2500,
    "5g": 5e3
  };
  var BUFFERED_THRESHOLD_PERCENTAGE = 0.8;
  var IS_VIDEO_FULLY_LOADED_OVERRIDE_FOR_TESTING = "i-amphtml-is-video-fully-loaded-override-for-testing";
  var instance;
  function getBitrateManager(win) {
    if (instance) {
      return instance;
    }
    if (isExperimentOn(win, "flexible-bitrate")) {
      Services.performanceFor(win).addEnabledExperiment("flexible-bitrate");
    }
    return instance = new BitrateManager(win);
  }
  var BitrateManager = /* @__PURE__ */ function() {
    function BitrateManager2(win) {
      _classCallCheck7(this, BitrateManager2);
      this.win = win;
      this.effectiveConnectionType_ = "";
      this.acceptableBitrate_ = this.getAcceptableBitrate_();
      this.videos_ = [];
    }
    _createClass6(BitrateManager2, [{
      key: "manage",
      value: function manage(video) {
        var _this = this;
        if (!isExperimentOn(this.win, "flexible-bitrate")) {
          return;
        }
        if (video.changedSources) {
          return;
        }
        onNontrivialWait(video, function() {
          return _this.downgradeVideo_(video);
        });
        listen(video, "downgrade", function() {
          return _this.downgradeVideo_(video);
        });
        video.changedSources = function() {
          _this.sortSources_(video);
        };
        this.videos_.push(DomBasedWeakRef.make(this.win, video));
      }
    }, {
      key: "downgradeVideo_",
      value: function downgradeVideo_(video) {
        var current = currentSource(video);
        var newBitrate = current.bitrate_ - 1;
        if (newBitrate >= this.acceptableBitrate_) {
          return;
        }
        this.acceptableBitrate_ = newBitrate;
        this.switchToLowerBitrate_(video, current.bitrate_);
        this.updateOtherManagedAndPausedVideos_();
      }
    }, {
      key: "getCurrentEffectiveConnectionType_",
      value: function getCurrentEffectiveConnectionType_() {
        var connection = this.win.navigator.connection;
        if (connection && connection.effectiveType) {
          return connection.effectiveType;
        }
        return "4g";
      }
    }, {
      key: "getAcceptableBitrate_",
      value: function getAcceptableBitrate_() {
        if (this.effectiveConnectionType_ != this.getCurrentEffectiveConnectionType_()) {
          this.effectiveConnectionType_ = this.getCurrentEffectiveConnectionType_();
          this.acceptableBitrate_ = BITRATE_BY_EFFECTIVE_TYPE[this.effectiveConnectionType_] || BITRATE_BY_EFFECTIVE_TYPE["4g"];
        }
        return this.acceptableBitrate_;
      }
    }, {
      key: "sortSources_",
      value: function sortSources_(video) {
        var _this2 = this;
        var sources2 = toArray(childElementsByTag(video, "source"));
        sources2.forEach(function(source) {
          if (source.bitrate_) {
            return;
          }
          var bitrate = source.getAttribute("data-bitrate");
          source.bitrate_ = bitrate ? parseInt(bitrate, 10) : Number.POSITIVE_INFINITY;
        });
        var hasChanges = false;
        sources2.sort(function(a2, b) {
          var value = _this2.getBitrateForComparison_(b) - _this2.getBitrateForComparison_(a2);
          if (value < 0) {
            hasChanges = true;
          }
          return value;
        });
        if (hasChanges) {
          sources2.forEach(function(source) {
            video.appendChild(source);
          });
        }
        return hasChanges;
      }
    }, {
      key: "getBitrateForComparison_",
      value: function getBitrateForComparison_(source) {
        var rate = source.bitrate_;
        if (rate > this.getAcceptableBitrate_()) {
          rate *= -1;
        }
        return rate;
      }
    }, {
      key: "hasLowerBitrate_",
      value: function hasLowerBitrate_(video, bitrate) {
        var lowerBitrateSource = sources(video, function(source) {
          return source.bitrate_ < bitrate;
        });
        return !!lowerBitrateSource;
      }
    }, {
      key: "switchToLowerBitrate_",
      value: function switchToLowerBitrate_(video, currentBitrate) {
        if (!this.hasLowerBitrate_(video, currentBitrate)) {
          dev().fine(TAG2, "No lower bitrate available");
          return;
        }
        var currentTime = video.currentTime;
        video.pause();
        var hasChanges = this.sortSources_(video);
        if (!hasChanges) {
          video.play();
          return;
        }
        video.load();
        listenOnce(video, "loadedmetadata", function() {
          video.currentTime = currentTime;
          video.play();
          dev().fine(TAG2, "Playing at lower bitrate %s", video.currentSrc);
        });
      }
    }, {
      key: "updateOtherManagedAndPausedVideos_",
      value: function updateOtherManagedAndPausedVideos_() {
        for (var i = this.videos_.length - 1; i >= 0; i--) {
          var weakref = this.videos_[i];
          var video = weakref.deref();
          if (!video) {
            this.videos_.splice(i, 1);
            continue;
          }
          if (!video.paused || isVideoLoaded(video)) {
            continue;
          }
          var hasChanges = this.sortSources_(video);
          if (hasChanges) {
            video.load();
          }
        }
      }
    }]);
    return BitrateManager2;
  }();
  function onNontrivialWait(video, callback) {
    listen(video, "waiting", function() {
      if (video.readyState < 1 || getBufferedPercentage(video) > 0.99) {
        return;
      }
      var timer = null;
      var unlisten = listenOnce(video, "playing", function() {
        clearTimeout(timer);
      });
      timer = setTimeout(function() {
        unlisten();
        callback();
      }, 100);
    });
  }
  function sources(video, fn) {
    return childElement(video, function(source) {
      if (source.tagName != "SOURCE") {
        return false;
      }
      return fn(source);
    });
  }
  function currentSource(video) {
    return devAssert(sources(video, function(source) {
      return source.src == video.currentSrc;
    }));
  }
  function getBufferedPercentage(videoEl) {
    if (!videoEl.duration) {
      return 0;
    }
    var bufferedSum = 0;
    for (var i = 0; i < videoEl.buffered.length; i++) {
      bufferedSum += videoEl.buffered.end(i) - videoEl.buffered.start(i);
    }
    return bufferedSum / videoEl.duration;
  }
  function isVideoLoaded(videoEl) {
    if (videoEl.hasAttribute(IS_VIDEO_FULLY_LOADED_OVERRIDE_FOR_TESTING)) {
      return videoEl.getAttribute(IS_VIDEO_FULLY_LOADED_OVERRIDE_FOR_TESTING) === "true";
    }
    return getBufferedPercentage(videoEl) > BUFFERED_THRESHOLD_PERCENTAGE;
  }

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

  // src/core/constants/action-constants.js
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

  // src/core/data-structures/observable.js
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
  function _classCallCheck8(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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
      _classCallCheck8(this, Observable2);
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
        for (var _iterator = _createForOfIteratorHelperLoose3(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // src/service/video-session-manager.js
  function _classCallCheck9(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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
  var VideoSessionManager = /* @__PURE__ */ function() {
    function VideoSessionManager2() {
      _classCallCheck9(this, VideoSessionManager2);
      this.isSessionActive_ = false;
      this.endSessionObservable_ = new Observable();
    }
    _createClass8(VideoSessionManager2, [{
      key: "onSessionEnd",
      value: function onSessionEnd(listener) {
        this.endSessionObservable_.add(listener);
      }
    }, {
      key: "beginSession",
      value: function beginSession() {
        this.isSessionActive_ = true;
      }
    }, {
      key: "endSession",
      value: function endSession() {
        if (this.isSessionActive_) {
          this.endSessionObservable_.fire();
        }
        this.isSessionActive_ = false;
      }
    }, {
      key: "isSessionActive",
      value: function isSessionActive() {
        return this.isSessionActive_;
      }
    }]);
    return VideoSessionManager2;
  }();

  // src/core/math/index.js
  function clamp(val, min, max) {
    devAssert2(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }

  // src/viewport-observer.js
  function createViewportObserver(ioCallback, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, needsRootBounds = _opts.needsRootBounds, threshold = _opts.threshold;
    var root = isIframed(win) && needsRootBounds ? win.document : void 0;
    return new win.IntersectionObserver(ioCallback, {
      threshold,
      root
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();

  // src/utils/video.js
  function detectIsAutoplaySupported(win) {
    var detectionElement = win.document.createElement("video");
    detectionElement.setAttribute("muted", "");
    detectionElement.setAttribute("playsinline", "");
    detectionElement.setAttribute("webkit-playsinline", "");
    detectionElement.setAttribute("height", "0");
    detectionElement.setAttribute("width", "0");
    detectionElement.muted = true;
    detectionElement.playsInline = true;
    detectionElement["playsinline"] = true;
    detectionElement["webkitPlaysinline"] = true;
    setStyles(detectionElement, {
      position: "fixed",
      top: "0",
      width: "0",
      height: "0",
      opacity: "0"
    });
    new Promise(function(resolve) {
      return resolve(detectionElement.play());
    }).catch(function() {
    });
    return Promise.resolve(!detectionElement.paused);
  }
  var AUTOPLAY_SUPPORTED_WIN_PROP = "__AMP_AUTOPLAY";
  function isAutoplaySupported(win) {
    if (win[AUTOPLAY_SUPPORTED_WIN_PROP] == null) {
      win[AUTOPLAY_SUPPORTED_WIN_PROP] = detectIsAutoplaySupported(win);
    }
    return win[AUTOPLAY_SUPPORTED_WIN_PROP];
  }
  function getInternalVideoElementFor(element) {
    return dev().assertElement(element.querySelector("video, iframe"));
  }

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

  // build/video-autoplay.css.js
  var cssText = ".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";

  // src/service/video/install-autoplay-styles.js
  function installAutoplayStylesForDoc(ampdoc) {
    installStylesForDoc(ampdoc, cssText, null, false, "amp-video-autoplay");
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

  // src/service/video/autoplay.js
  var _templateObject;
  var _templateObject2;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function cloneDeep(node) {
    return dev().assertElement(node.cloneNode(true));
  }
  function renderInteractionOverlay(elOrDoc, metadata) {
    var html2 = htmlFor(elOrDoc);
    var element = html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n    <button\n      aria-label="Unmute video"\n      class="i-amphtml-video-mask i-amphtml-fill-content"\n      tabindex="0"\n    ></button>\n  '])));
    if (metadata && metadata.title) {
      element.setAttribute("aria-label", metadata.title);
    }
    return element;
  }
  function renderIcon(win, elOrDoc) {
    var html2 = htmlFor(elOrDoc);
    var icon = html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n    <i-amphtml-video-icon class="amp-video-eq">\n      <div class="amp-video-eq-col">\n        <div class="amp-video-eq-filler"></div>\n        <div class="amp-video-eq-filler"></div>\n      </div>\n    </i-amphtml-video-icon>\n  '])));
    var firstCol = dev().assertElement(icon.firstElementChild);
    for (var i = 0; i < 4; i++) {
      var col = cloneDeep(firstCol);
      var fillers = col.children;
      for (var j = 0; j < fillers.length; j++) {
        var filler = fillers[j];
        filler.classList.add("amp-video-eq-" + (i + 1) + "-" + (j + 1));
      }
      icon.appendChild(col);
    }
    removeElement(firstCol);
    return icon;
  }

  // src/service/video-manager-impl.js
  function _classCallCheck10(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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
  var TAG3 = "video-manager";
  var SECONDS_PLAYED_MIN_DELAY = 1e3;
  var VideoManager = /* @__PURE__ */ function() {
    function VideoManager2(ampdoc) {
      var _this = this;
      _classCallCheck10(this, VideoManager2);
      this.ampdoc = ampdoc;
      this.installAutoplayStyles = once(function() {
        return installAutoplayStylesForDoc(_this.ampdoc);
      });
      this.entries_ = null;
      this.viewportObserver_ = null;
      this.lastFoundEntry_ = null;
      this.timer_ = Services.timerFor(ampdoc.win);
      this.actions_ = Services.actionServiceForDoc(ampdoc.getHeadNode());
      this.boundSecondsPlaying_ = function() {
        return _this.secondsPlaying_();
      };
      this.getAutoFullscreenManager_ = once(function() {
        return new AutoFullscreenManager(_this.ampdoc, _this);
      });
      this.timer_.delay(this.boundSecondsPlaying_, SECONDS_PLAYED_MIN_DELAY);
    }
    _createClass9(VideoManager2, [{
      key: "dispose",
      value: function dispose() {
        this.getAutoFullscreenManager_().dispose();
        this.viewportObserver_.disconnect();
        this.viewportObserver_ = null;
        if (!this.entries_) {
          return;
        }
        for (var i = 0; i < this.entries_.length; i++) {
          var entry = this.entries_[i];
          entry.dispose();
        }
      }
    }, {
      key: "secondsPlaying_",
      value: function secondsPlaying_() {
        for (var i = 0; i < this.entries_.length; i++) {
          var entry = this.entries_[i];
          if (entry.getPlayingState() !== PlayingStates.PAUSED) {
            analyticsEvent(entry, VideoAnalyticsEvents.SECONDS_PLAYED);
            this.timeUpdateActionEvent_(entry);
          }
        }
        this.timer_.delay(this.boundSecondsPlaying_, SECONDS_PLAYED_MIN_DELAY);
      }
    }, {
      key: "timeUpdateActionEvent_",
      value: function timeUpdateActionEvent_(entry) {
        var name = "timeUpdate";
        var currentTime = entry.video.getCurrentTime();
        var duration = entry.video.getDuration();
        if (isFiniteNumber(currentTime) && isFiniteNumber(duration) && duration > 0) {
          var perc = currentTime / duration;
          var event = createCustomEvent(this.ampdoc.win, TAG3 + "." + name, dict({
            "time": currentTime,
            "percent": perc
          }));
          this.actions_.trigger(entry.video.element, name, event, ActionTrust.LOW);
        }
      }
    }, {
      key: "register",
      value: function register(video) {
        var _this2 = this;
        devAssert(video);
        var videoBE = video;
        this.registerCommonActions_(video);
        if (!video.supportsPlatform()) {
          return;
        }
        if (this.getEntryOrNull_(video)) {
          return;
        }
        if (!this.viewportObserver_) {
          var viewportCallback = function viewportCallback2(records) {
            return records.forEach(function(_ref) {
              var isIntersecting = _ref.isIntersecting, target = _ref.target;
              _this2.getEntry_(target).updateVisibility(isIntersecting);
            });
          };
          this.viewportObserver_ = createViewportObserver(viewportCallback, this.ampdoc.win, {
            threshold: MIN_VISIBILITY_RATIO_FOR_AUTOPLAY
          });
        }
        this.viewportObserver_.observe(videoBE.element);
        listen(videoBE.element, VideoEvents.RELOAD, function() {
          return entry.videoLoaded();
        });
        this.entries_ = this.entries_ || [];
        var entry = new VideoEntry(this, video);
        this.entries_.push(entry);
        var element = entry.video.element;
        dispatchCustomEvent(element, VideoEvents.REGISTERED);
        setIsMediaComponent(element);
        var signals = video.signals();
        signals.signal(VideoEvents.REGISTERED);
        element.classList.add("i-amphtml-video-interface");
      }
    }, {
      key: "registerCommonActions_",
      value: function registerCommonActions_(video) {
        var trust = ActionTrust.LOW;
        registerAction("play", function() {
          return video.play(false);
        });
        registerAction("pause", function() {
          return video.pause();
        });
        registerAction("mute", function() {
          return video.mute();
        });
        registerAction("unmute", function() {
          return video.unmute();
        });
        var fullscreenEnter2 = function fullscreenEnter3() {
          return video.fullscreenEnter();
        };
        registerAction("fullscreenenter", fullscreenEnter2);
        registerAction("fullscreen", fullscreenEnter2);
        function registerAction(action, fn) {
          var videoBE = video;
          videoBE.registerAction(action, function() {
            userInteractedWith(video);
            fn();
          }, trust);
        }
      }
    }, {
      key: "getEntryOrNull_",
      value: function getEntryOrNull_(videoOrElement) {
        if (isEntryFor(this.lastFoundEntry_, videoOrElement)) {
          return this.lastFoundEntry_;
        }
        for (var i = 0; this.entries_ && i < this.entries_.length; i++) {
          var entry = this.entries_[i];
          if (isEntryFor(entry, videoOrElement)) {
            this.lastFoundEntry_ = entry;
            return entry;
          }
        }
        return null;
      }
    }, {
      key: "getEntry_",
      value: function getEntry_(videoOrElement) {
        return devAssert(this.getEntryOrNull_(videoOrElement), "%s not registered to VideoManager", videoOrElement.element || videoOrElement);
      }
    }, {
      key: "registerForAutoFullscreen",
      value: function registerForAutoFullscreen(entry) {
        this.getAutoFullscreenManager_().register(entry);
      }
    }, {
      key: "getAutoFullscreenManagerForTesting_",
      value: function getAutoFullscreenManagerForTesting_() {
        return this.getAutoFullscreenManager_();
      }
    }, {
      key: "getVideoStateProperty",
      value: function getVideoStateProperty(id, property) {
        var root = this.ampdoc.getRootNode();
        var videoElement = user().assertElement(root.getElementById(id), 'Could not find an element with id="' + id + '" for VIDEO_STATE');
        var entry = this.getEntry_(videoElement);
        return (entry ? entry.getAnalyticsDetails() : resolvedPromise()).then(function(details) {
          return details ? details[property] : "";
        });
      }
    }, {
      key: "getPlayingState",
      value: function getPlayingState(videoOrElement) {
        return this.getEntry_(videoOrElement).getPlayingState();
      }
    }, {
      key: "isMuted",
      value: function isMuted(videoOrElement) {
        return this.getEntry_(videoOrElement).isMuted();
      }
    }, {
      key: "userInteracted",
      value: function userInteracted(videoOrElement) {
        return this.getEntry_(videoOrElement).userInteracted();
      }
    }, {
      key: "isRollingAd",
      value: function isRollingAd(videoOrElement) {
        return this.getEntry_(videoOrElement).isRollingAd();
      }
    }, {
      key: "pauseOtherVideos",
      value: function pauseOtherVideos(entryBeingPlayed) {
        this.entries_.forEach(function(entry) {
          if (entry.isPlaybackManaged() && entry !== entryBeingPlayed && entry.getPlayingState() == PlayingStates.PLAYING_MANUAL) {
            entry.video.pause();
          }
        });
      }
    }]);
    return VideoManager2;
  }();
  var isEntryFor = function isEntryFor2(entry, videoOrElement) {
    return !!entry && (entry.video === videoOrElement || entry.video.element === videoOrElement);
  };
  var VideoEntry = /* @__PURE__ */ function() {
    function VideoEntry2(manager, video) {
      var _this3 = this;
      _classCallCheck10(this, VideoEntry2);
      this.manager_ = manager;
      this.ampdoc_ = manager.ampdoc;
      this.video = video;
      this.managePlayback_ = true;
      this.loaded_ = false;
      this.isPlaying_ = false;
      this.isRollingAd_ = false;
      this.isVisible_ = false;
      this.actionSessionManager_ = new VideoSessionManager();
      this.actionSessionManager_.onSessionEnd(function() {
        return analyticsEvent(_this3, VideoAnalyticsEvents.SESSION);
      });
      this.visibilitySessionManager_ = new VideoSessionManager();
      this.visibilitySessionManager_.onSessionEnd(function() {
        return analyticsEvent(_this3, VideoAnalyticsEvents.SESSION_VISIBLE);
      });
      this.getAnalyticsPercentageTracker_ = once(function() {
        return new AnalyticsPercentageTracker(_this3.ampdoc_.win, _this3);
      });
      this.playCalledByAutoplay_ = false;
      this.pauseCalledByAutoplay_ = false;
      this.internalElement_ = null;
      this.muted_ = false;
      this.hasSeenPlayEvent_ = false;
      this.hasAutoplay = video.element.hasAttribute(VideoAttributes.AUTOPLAY);
      if (this.hasAutoplay) {
        this.manager_.installAutoplayStyles();
      }
      this.metadata_ = EMPTY_METADATA;
      this.boundMediasessionPlay_ = function() {
        _this3.video.play(false);
      };
      this.boundMediasessionPause_ = function() {
        _this3.video.pause();
      };
      listen(video.element, VideoEvents.LOAD, function() {
        return _this3.videoLoaded();
      });
      listen(video.element, VideoEvents.PAUSE, function() {
        return _this3.videoPaused_();
      });
      listen(video.element, VideoEvents.PLAY, function() {
        _this3.hasSeenPlayEvent_ = true;
        analyticsEvent(_this3, VideoAnalyticsEvents.PLAY);
      });
      listen(video.element, VideoEvents.PLAYING, function() {
        return _this3.videoPlayed_();
      });
      listen(video.element, VideoEvents.MUTED, function() {
        return _this3.muted_ = true;
      });
      listen(video.element, VideoEvents.UNMUTED, function() {
        _this3.muted_ = false;
        _this3.manager_.pauseOtherVideos(_this3);
      });
      listen(video.element, VideoEvents.CUSTOM_TICK, function(e) {
        var data = getData(e);
        var eventType = data["eventType"];
        if (!eventType) {
          return;
        }
        _this3.logCustomAnalytics_(eventType, data["vars"]);
      });
      listen(video.element, VideoEvents.ENDED, function() {
        _this3.isRollingAd_ = false;
        analyticsEvent(_this3, VideoAnalyticsEvents.ENDED);
      });
      listen(video.element, VideoEvents.AD_START, function() {
        _this3.isRollingAd_ = true;
        analyticsEvent(_this3, VideoAnalyticsEvents.AD_START);
      });
      listen(video.element, VideoEvents.AD_END, function() {
        _this3.isRollingAd_ = false;
        analyticsEvent(_this3, VideoAnalyticsEvents.AD_END);
      });
      video.signals().whenSignal(VideoEvents.REGISTERED).then(function() {
        return _this3.onRegister_();
      });
      this.firstPlayEventOrNoop_ = once(function() {
        var firstPlay = "firstPlay";
        var trust = ActionTrust.LOW;
        var event = createCustomEvent(_this3.ampdoc_.win, firstPlay, dict({}));
        var element = _this3.video.element;
        var actions = Services.actionServiceForDoc(element);
        actions.trigger(element, firstPlay, event, trust);
      });
      this.listenForPlaybackDelegation_();
    }
    _createClass9(VideoEntry2, [{
      key: "dispose",
      value: function dispose() {
        this.getAnalyticsPercentageTracker_().stop();
      }
    }, {
      key: "logCustomAnalytics_",
      value: function logCustomAnalytics_(eventType, vars) {
        var _prefixedVars;
        var prefixedVars = (_prefixedVars = {}, _prefixedVars[videoAnalyticsCustomEventTypeKey] = eventType, _prefixedVars);
        Object.keys(vars).forEach(function(key) {
          prefixedVars["custom_" + key] = vars[key];
        });
        analyticsEvent(this, VideoAnalyticsEvents.CUSTOM, prefixedVars);
      }
    }, {
      key: "listenForPlaybackDelegation_",
      value: function listenForPlaybackDelegation_() {
        var _this4 = this;
        var signals = this.video.signals();
        signals.whenSignal(VideoServiceSignals.PLAYBACK_DELEGATED).then(function() {
          _this4.managePlayback_ = false;
          if (_this4.isPlaying_) {
            _this4.video.pause();
          }
        });
      }
    }, {
      key: "isMuted",
      value: function isMuted() {
        return this.muted_;
      }
    }, {
      key: "isPlaybackManaged",
      value: function isPlaybackManaged() {
        return this.managePlayback_;
      }
    }, {
      key: "onRegister_",
      value: function onRegister_() {
        if (this.requiresAutoFullscreen_()) {
          this.manager_.registerForAutoFullscreen(this);
        }
        if (this.hasAutoplay) {
          this.autoplayVideoBuilt_();
        }
      }
    }, {
      key: "requiresAutoFullscreen_",
      value: function requiresAutoFullscreen_() {
        var element = this.video.element;
        if (this.video.preimplementsAutoFullscreen() || !element.hasAttribute(VideoAttributes.ROTATE_TO_FULLSCREEN)) {
          return false;
        }
        return userAssert(this.video.isInteractive(), "Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.", element);
      }
    }, {
      key: "videoPlayed_",
      value: function videoPlayed_() {
        this.isPlaying_ = true;
        if (this.getPlayingState() == PlayingStates.PLAYING_MANUAL) {
          this.firstPlayEventOrNoop_();
          this.manager_.pauseOtherVideos(this);
        }
        var video = this.video;
        var element = video.element;
        if (!video.preimplementsMediaSessionAPI() && !element.classList.contains("i-amphtml-disable-mediasession")) {
          validateMediaMetadata(element, this.metadata_);
          setMediaSession(this.ampdoc_.win, this.metadata_, this.boundMediasessionPlay_, this.boundMediasessionPause_);
        }
        this.actionSessionManager_.beginSession();
        if (this.isVisible_) {
          this.visibilitySessionManager_.beginSession();
        }
        if (!this.hasSeenPlayEvent_) {
          analyticsEvent(this, VideoAnalyticsEvents.PLAY);
        }
      }
    }, {
      key: "videoPaused_",
      value: function videoPaused_() {
        analyticsEvent(this, VideoAnalyticsEvents.PAUSE);
        this.isPlaying_ = false;
        if (!this.pauseCalledByAutoplay_) {
          this.actionSessionManager_.endSession();
        } else {
          this.pauseCalledByAutoplay_ = false;
        }
      }
    }, {
      key: "videoLoaded",
      value: function videoLoaded() {
        this.loaded_ = true;
        this.internalElement_ = getInternalVideoElementFor(this.video.element);
        this.fillMediaSessionMetadata_();
        this.getAnalyticsPercentageTracker_().start();
        if (this.isVisible_) {
          this.loadedVideoVisibilityChanged_();
        }
      }
    }, {
      key: "fillMediaSessionMetadata_",
      value: function fillMediaSessionMetadata_() {
        if (this.video.preimplementsMediaSessionAPI()) {
          return;
        }
        if (this.video.getMetadata()) {
          this.metadata_ = map(this.video.getMetadata());
        }
        var doc = this.ampdoc_.win.document;
        if (!this.metadata_.artwork || this.metadata_.artwork.length == 0) {
          var posterUrl = parseSchemaImage(doc) || parseOgImage(doc) || parseFavicon(doc);
          if (posterUrl) {
            this.metadata_.artwork = [{
              "src": posterUrl
            }];
          }
        }
        if (!this.metadata_.title) {
          var title = this.video.element.getAttribute("title") || this.video.element.getAttribute("aria-label") || this.internalElement_.getAttribute("title") || this.internalElement_.getAttribute("aria-label") || doc.title;
          if (title) {
            this.metadata_.title = title;
          }
        }
      }
    }, {
      key: "videoVisibilityChanged_",
      value: function videoVisibilityChanged_() {
        if (this.loaded_) {
          this.loadedVideoVisibilityChanged_();
        }
      }
    }, {
      key: "loadedVideoVisibilityChanged_",
      value: function loadedVideoVisibilityChanged_() {
        var _this5 = this;
        if (!this.ampdoc_.isVisible()) {
          return;
        }
        isAutoplaySupported(this.ampdoc_.win).then(function(isAutoplaySupported2) {
          var canAutoplay = _this5.hasAutoplay && !_this5.userInteracted();
          if (canAutoplay && isAutoplaySupported2) {
            _this5.autoplayLoadedVideoVisibilityChanged_();
          } else {
            _this5.nonAutoplayLoadedVideoVisibilityChanged_();
          }
        });
      }
    }, {
      key: "autoplayVideoBuilt_",
      value: function autoplayVideoBuilt_() {
        var _this6 = this;
        if (this.video.isInteractive()) {
          this.video.hideControls();
        }
        isAutoplaySupported(this.ampdoc_.win).then(function(isAutoplaySupported2) {
          if (!isAutoplaySupported2 && _this6.video.isInteractive()) {
            _this6.video.showControls();
            return;
          }
          _this6.video.mute();
          _this6.installAutoplayElements_();
        });
      }
    }, {
      key: "installAutoplayElements_",
      value: function installAutoplayElements_() {
        var _this7 = this;
        var video = this.video;
        var _this$video = this.video, element = _this$video.element, win = _this$video.win;
        if (element.hasAttribute(VideoAttributes.NO_AUDIO) || element.signals().get(VideoServiceSignals.USER_INTERACTED)) {
          return;
        }
        var animation = renderIcon(win, element);
        var children = [animation];
        function toggleElements(shouldDisplay) {
          video.mutateElementSkipRemeasure(function() {
            children.forEach(function(child) {
              toggle(child, shouldDisplay);
            });
          });
        }
        function toggleAnimation(isPlaying) {
          video.mutateElementSkipRemeasure(function() {
            return animation.classList.toggle("amp-video-eq-play", isPlaying);
          });
        }
        var unlisteners = [listen(element, VideoEvents.PAUSE, function() {
          return toggleAnimation(false);
        }), listen(element, VideoEvents.PLAYING, function() {
          return toggleAnimation(true);
        }), listen(element, VideoEvents.AD_START, function() {
          toggleElements(false);
          video.showControls();
        }), listen(element, VideoEvents.AD_END, function() {
          toggleElements(true);
          video.hideControls();
        }), listen(element, VideoEvents.UNMUTED, function() {
          return userInteractedWith(video);
        })];
        if (video.isInteractive()) {
          video.hideControls();
          var mask = renderInteractionOverlay(element, this.metadata_);
          children.push(mask);
          unlisteners.push(listen(mask, "click", function() {
            return userInteractedWith(video);
          }));
        }
        video.mutateElementSkipRemeasure(function() {
          children.forEach(function(child) {
            element.appendChild(child);
          });
        });
        if (this.isRollingAd_) {
          toggleElements(false);
        }
        video.signals().whenSignal(VideoServiceSignals.USER_INTERACTED).then(function() {
          _this7.firstPlayEventOrNoop_();
          if (video.isInteractive()) {
            video.showControls();
          }
          video.unmute();
          unlisteners.forEach(function(unlistener) {
            unlistener();
          });
          video.mutateElementSkipRemeasure(function() {
            children.forEach(function(child) {
              removeElement(child);
            });
          });
        });
      }
    }, {
      key: "autoplayLoadedVideoVisibilityChanged_",
      value: function autoplayLoadedVideoVisibilityChanged_() {
        if (!this.managePlayback_) {
          return;
        }
        if (this.isVisible_) {
          this.visibilitySessionManager_.beginSession();
          this.video.play(true);
          this.playCalledByAutoplay_ = true;
        } else {
          if (this.isPlaying_) {
            this.visibilitySessionManager_.endSession();
          }
          this.video.pause();
          this.pauseCalledByAutoplay_ = true;
        }
      }
    }, {
      key: "nonAutoplayLoadedVideoVisibilityChanged_",
      value: function nonAutoplayLoadedVideoVisibilityChanged_() {
        if (this.isVisible_) {
          this.visibilitySessionManager_.beginSession();
        } else if (this.isPlaying_) {
          this.visibilitySessionManager_.endSession();
        }
      }
    }, {
      key: "updateVisibility",
      value: function updateVisibility(isVisible) {
        var wasVisible = this.isVisible_;
        this.isVisible_ = isVisible;
        if (isVisible != wasVisible) {
          this.videoVisibilityChanged_();
        }
      }
    }, {
      key: "getPlayingState",
      value: function getPlayingState() {
        if (!this.isPlaying_) {
          return PlayingStates.PAUSED;
        }
        if (this.isPlaying_ && this.playCalledByAutoplay_ && !this.userInteracted()) {
          return PlayingStates.PLAYING_AUTO;
        }
        return PlayingStates.PLAYING_MANUAL;
      }
    }, {
      key: "isRollingAd",
      value: function isRollingAd() {
        return this.isRollingAd_;
      }
    }, {
      key: "userInteracted",
      value: function userInteracted() {
        return this.video.signals().get(VideoServiceSignals.USER_INTERACTED) != null;
      }
    }, {
      key: "getAnalyticsDetails",
      value: function getAnalyticsDetails() {
        var _this8 = this;
        var video = this.video;
        return Promise.all([isAutoplaySupported(this.ampdoc_.win), measureIntersection(video.element)]).then(function(responses) {
          var isAutoplaySupported2 = responses[0];
          var intersection = responses[1];
          var _intersection$boundin = intersection.boundingClientRect, height = _intersection$boundin.height, width = _intersection$boundin.width;
          var autoplay = _this8.hasAutoplay && isAutoplaySupported2;
          var playedRanges = video.getPlayedRanges();
          var playedTotal = playedRanges.reduce(function(acc, range) {
            return acc + range[1] - range[0];
          }, 0);
          return {
            "autoplay": autoplay,
            "currentTime": video.getCurrentTime(),
            "duration": video.getDuration(),
            "height": height,
            "id": video.element.id,
            "muted": _this8.muted_,
            "playedTotal": playedTotal,
            "playedRangesJson": JSON.stringify(playedRanges),
            "state": _this8.getPlayingState(),
            "width": width
          };
        });
      }
    }]);
    return VideoEntry2;
  }();
  function supportsFullscreenViaApi(video) {
    return !!{
      "amp-dailymotion": true,
      "amp-ima-video": true
    }[video.tagName.toLowerCase()];
  }
  var AutoFullscreenManager = /* @__PURE__ */ function() {
    function AutoFullscreenManager2(ampdoc, manager) {
      var _this9 = this;
      _classCallCheck10(this, AutoFullscreenManager2);
      this.manager_ = manager;
      this.ampdoc_ = ampdoc;
      this.currentlyInFullscreen_ = null;
      this.currentlyCentered_ = null;
      this.entries_ = [];
      this.unlisteners_ = [];
      this.boundSelectBestCentered_ = function() {
        return _this9.selectBestCenteredInPortrait_();
      };
      this.boundIncludeOnlyPlaying_ = function(video) {
        return _this9.getPlayingState_(video) == PlayingStates.PLAYING_MANUAL;
      };
      this.boundCompareEntries_ = function(a2, b) {
        return _this9.compareEntries_(a2, b);
      };
      this.installOrientationObserver_();
      this.installFullscreenListener_();
    }
    _createClass9(AutoFullscreenManager2, [{
      key: "dispose",
      value: function dispose() {
        this.unlisteners_.forEach(function(unlisten) {
          return unlisten();
        });
        this.unlisteners_.length = 0;
      }
    }, {
      key: "register",
      value: function register(entry) {
        var video = entry.video;
        var element = video.element;
        if (!this.canFullscreen_(element)) {
          return;
        }
        this.entries_.push(video);
        listen(element, VideoEvents.PAUSE, this.boundSelectBestCentered_);
        listen(element, VideoEvents.PLAYING, this.boundSelectBestCentered_);
        listen(element, VideoEvents.ENDED, this.boundSelectBestCentered_);
        video.signals().whenSignal(VideoServiceSignals.USER_INTERACTED).then(this.boundSelectBestCentered_);
        this.selectBestCenteredInPortrait_();
      }
    }, {
      key: "installFullscreenListener_",
      value: function installFullscreenListener_() {
        var _this10 = this;
        var root = this.ampdoc_.getRootNode();
        var exitHandler = function exitHandler2() {
          return _this10.onFullscreenExit_();
        };
        this.unlisteners_.push(listen(root, "webkitfullscreenchange", exitHandler), listen(root, "mozfullscreenchange", exitHandler), listen(root, "fullscreenchange", exitHandler), listen(root, "MSFullscreenChange", exitHandler));
      }
    }, {
      key: "isInLandscape",
      value: function isInLandscape() {
        return isLandscape(this.ampdoc_.win);
      }
    }, {
      key: "canFullscreen_",
      value: function canFullscreen_(video) {
        var internalElement = getInternalVideoElementFor(video);
        if (internalElement.tagName.toLowerCase() == "video") {
          return true;
        }
        var platform = Services.platformFor(this.ampdoc_.win);
        if (!(platform.isIos() || platform.isSafari())) {
          return true;
        }
        return supportsFullscreenViaApi(video);
      }
    }, {
      key: "onFullscreenExit_",
      value: function onFullscreenExit_() {
        this.currentlyInFullscreen_ = null;
      }
    }, {
      key: "installOrientationObserver_",
      value: function installOrientationObserver_() {
        var _this11 = this;
        var win = this.ampdoc_.win;
        var screen = win.screen;
        if (screen && "orientation" in screen) {
          var orient = screen.orientation;
          this.unlisteners_.push(listen(orient, "change", function() {
            return _this11.onRotation_();
          }));
        }
        this.unlisteners_.push(listen(win, "orientationchange", function() {
          return _this11.onRotation_();
        }));
      }
    }, {
      key: "onRotation_",
      value: function onRotation_() {
        if (this.isInLandscape()) {
          if (this.currentlyCentered_ != null) {
            this.enter_(this.currentlyCentered_);
          }
          return;
        }
        if (this.currentlyInFullscreen_) {
          this.exit_(this.currentlyInFullscreen_);
        }
      }
    }, {
      key: "enter_",
      value: function enter_(video) {
        var platform = Services.platformFor(this.ampdoc_.win);
        this.currentlyInFullscreen_ = video;
        if (platform.isAndroid() && platform.isChrome()) {
          video.fullscreenEnter();
          return;
        }
        this.scrollIntoIfNotVisible_(video).then(function() {
          return video.fullscreenEnter();
        });
      }
    }, {
      key: "exit_",
      value: function exit_(video) {
        this.currentlyInFullscreen_ = null;
        this.scrollIntoIfNotVisible_(video, "center").then(function() {
          return video.fullscreenExit();
        });
      }
    }, {
      key: "scrollIntoIfNotVisible_",
      value: function scrollIntoIfNotVisible_(video, optPos) {
        if (optPos === void 0) {
          optPos = null;
        }
        var element = video.element;
        var viewport = this.getViewport_();
        return this.onceOrientationChanges_().then(function() {
          return measureIntersection(element);
        }).then(function(_ref2) {
          var boundingClientRect = _ref2.boundingClientRect;
          var bottom = boundingClientRect.bottom, top = boundingClientRect.top;
          var vh = viewport.getSize().height;
          var fullyVisible = top >= 0 && bottom <= vh;
          if (fullyVisible) {
            return resolvedPromise();
          }
          var pos = optPos ? dev().assertString(optPos) : bottom > vh ? "bottom" : "top";
          return viewport.animateScrollIntoView(element, pos);
        });
      }
    }, {
      key: "getViewport_",
      value: function getViewport_() {
        return Services.viewportForDoc(this.ampdoc_);
      }
    }, {
      key: "onceOrientationChanges_",
      value: function onceOrientationChanges_() {
        var magicNumber = 330;
        return Services.timerFor(this.ampdoc_.win).promise(magicNumber);
      }
    }, {
      key: "selectBestCenteredInPortrait_",
      value: function selectBestCenteredInPortrait_() {
        var _this12 = this;
        if (this.isInLandscape()) {
          return Promise.resolve(this.currentlyCentered_);
        }
        this.currentlyCentered_ = null;
        var intersectionsPromise = this.entries_.filter(this.boundIncludeOnlyPlaying_).map(function(e) {
          return measureIntersection(e.element);
        });
        return Promise.all(intersectionsPromise).then(function(intersections) {
          var selected = intersections.sort(_this12.boundCompareEntries_)[0];
          if (selected && selected.intersectionRatio > MIN_VISIBILITY_RATIO_FOR_AUTOPLAY) {
            return selected.target.getImpl().then(function(video) {
              return _this12.currentlyCentered_ = video;
            });
          }
          return _this12.currentlyCentered_;
        });
      }
    }, {
      key: "compareEntries_",
      value: function compareEntries_(a2, b) {
        var rectA = a2.boundingClientRect, ratioA = a2.intersectionRatio;
        var rectB = b.boundingClientRect, ratioB = b.intersectionRatio;
        var ratioTolerance = 0.1;
        var ratioDelta = ratioA - ratioB;
        if (Math.abs(ratioDelta) > ratioTolerance) {
          return ratioDelta;
        }
        var viewport = Services.viewportForDoc(this.ampdoc_);
        var centerA = centerDist(viewport, rectA);
        var centerB = centerDist(viewport, rectB);
        if (centerA < centerB || centerA > centerB) {
          return centerA - centerB;
        }
        return rectA.top - rectB.top;
      }
    }, {
      key: "getPlayingState_",
      value: function getPlayingState_(video) {
        return this.manager_.getPlayingState(video);
      }
    }]);
    return AutoFullscreenManager2;
  }();
  function centerDist(viewport, rect) {
    var centerY = rect.top + rect.height / 2;
    var centerViewport = viewport.getSize().height / 2;
    return Math.abs(centerY - centerViewport);
  }
  function isLandscape(win) {
    if (win.screen && "orientation" in win.screen) {
      return win.screen.orientation.type.startsWith("landscape");
    }
    return Math.abs(win.orientation) == 90;
  }
  var PERCENTAGE_INTERVAL = 5;
  var PERCENTAGE_FREQUENCY_WHEN_PAUSED_MS = 500;
  var PERCENTAGE_FREQUENCY_MIN_MS = 250;
  var PERCENTAGE_FREQUENCY_MAX_MS = 4e3;
  function calculateIdealPercentageFrequencyMs(durationSeconds) {
    return durationSeconds * 10 * PERCENTAGE_INTERVAL;
  }
  function calculateActualPercentageFrequencyMs(durationSeconds) {
    return clamp(calculateIdealPercentageFrequencyMs(durationSeconds), PERCENTAGE_FREQUENCY_MIN_MS, PERCENTAGE_FREQUENCY_MAX_MS);
  }
  var isDurationFiniteNonZero = function isDurationFiniteNonZero2(duration) {
    return !!duration && !isNaN(duration) && duration > 1;
  };
  var AnalyticsPercentageTracker = /* @__PURE__ */ function() {
    function AnalyticsPercentageTracker2(win, entry) {
      _classCallCheck10(this, AnalyticsPercentageTracker2);
      this.timer_ = Services.timerFor(win);
      this.entry_ = entry;
      this.unlisteners_ = null;
      this.last_ = 0;
      this.triggerId_ = 0;
    }
    _createClass9(AnalyticsPercentageTracker2, [{
      key: "start",
      value: function start() {
        var _this13 = this;
        var element = this.entry_.video.element;
        this.stop();
        this.unlisteners_ = this.unlisteners_ || [];
        if (this.hasDuration_()) {
          this.calculate_(this.triggerId_);
        } else {
          this.unlisteners_.push(listenOnce(element, VideoEvents.LOADEDMETADATA, function() {
            if (_this13.hasDuration_()) {
              _this13.calculate_(_this13.triggerId_);
            }
          }));
        }
        this.unlisteners_.push(listen(element, VideoEvents.ENDED, function() {
          if (_this13.hasDuration_()) {
            _this13.maybeTrigger_(100);
          }
        }));
      }
    }, {
      key: "stop",
      value: function stop() {
        if (!this.unlisteners_) {
          return;
        }
        while (this.unlisteners_.length > 0) {
          this.unlisteners_.pop()();
        }
        this.triggerId_++;
      }
    }, {
      key: "hasDuration_",
      value: function hasDuration_() {
        var video = this.entry_.video;
        var duration = video.getDuration();
        if (!isDurationFiniteNonZero(duration)) {
          return false;
        }
        if (calculateIdealPercentageFrequencyMs(duration) < PERCENTAGE_FREQUENCY_MIN_MS) {
          var bestResultLength = Math.ceil(PERCENTAGE_FREQUENCY_MIN_MS * (100 / PERCENTAGE_INTERVAL) / 1e3);
          this.warnForTesting_("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over", bestResultLength, "seconds long.", video.element);
        }
        return true;
      }
    }, {
      key: "warnForTesting_",
      value: function warnForTesting_() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        user().warn.apply(user(), [TAG3].concat(args));
      }
    }, {
      key: "calculate_",
      value: function calculate_(triggerId) {
        var _this14 = this;
        if (triggerId != this.triggerId_) {
          return;
        }
        var entry = this.entry_, timer = this.timer_;
        var video = entry.video;
        var calculateAgain = function calculateAgain2() {
          return _this14.calculate_(triggerId);
        };
        if (entry.getPlayingState() == PlayingStates.PAUSED) {
          timer.delay(calculateAgain, PERCENTAGE_FREQUENCY_WHEN_PAUSED_MS);
          return;
        }
        var duration = video.getDuration();
        if (!isDurationFiniteNonZero(duration)) {
          timer.delay(calculateAgain, PERCENTAGE_FREQUENCY_WHEN_PAUSED_MS);
          return;
        }
        var frequencyMs = calculateActualPercentageFrequencyMs(duration);
        var percentage = video.getCurrentTime() / duration * 100;
        var normalizedPercentage = Math.floor(percentage / PERCENTAGE_INTERVAL) * PERCENTAGE_INTERVAL;
        devAssert(isFiniteNumber(normalizedPercentage));
        this.maybeTrigger_(normalizedPercentage);
        timer.delay(calculateAgain, frequencyMs);
      }
    }, {
      key: "maybeTrigger_",
      value: function maybeTrigger_(normalizedPercentage) {
        if (normalizedPercentage <= 0) {
          return;
        }
        if (this.last_ == normalizedPercentage) {
          return;
        }
        this.last_ = normalizedPercentage;
        this.analyticsEventForTesting_(normalizedPercentage);
      }
    }, {
      key: "analyticsEventForTesting_",
      value: function analyticsEventForTesting_(normalizedPercentage) {
        analyticsEvent(this.entry_, VideoAnalyticsEvents.PERCENTAGE_PLAYED, {
          "normalizedPercentage": normalizedPercentage.toString()
        });
      }
    }]);
    return AnalyticsPercentageTracker2;
  }();
  function analyticsEvent(entry, eventType, opt_vars) {
    var video = entry.video;
    entry.getAnalyticsDetails().then(function(details) {
      if (opt_vars) {
        Object.assign(details, opt_vars);
      }
      dispatchCustomEvent(video.element, eventType, details);
    });
  }
  function installVideoManagerForDoc(nodeOrDoc) {
    registerServiceBuilderForDoc(nodeOrDoc, "video-manager", VideoManager);
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
  function isLayoutSizeDefined(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID || layout == Layout.INTRINSIC;
  }

  // src/iframe-video.js
  function mutedOrUnmutedEvent(isMuted) {
    return isMuted ? VideoEvents.MUTED : VideoEvents.UNMUTED;
  }

  // extensions/amp-video/0.1/amp-video.js
  var _templateObject3;
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _classCallCheck11(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
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
  var TAG4 = "amp-video";
  var ATTRS_TO_PROPAGATE_ON_BUILD = ["aria-describedby", "aria-label", "aria-labelledby", "controls", "crossorigin", "disableremoteplayback", "controlsList", "title"];
  var AMP_VIDEO_QUALITY_BITRATES = {
    "high": 2e3,
    "medium": 720,
    "low": 400
  };
  var ATTRS_TO_PROPAGATE_ON_LAYOUT = ["loop", "poster", "preload"];
  var ATTRS_TO_PROPAGATE = ATTRS_TO_PROPAGATE_ON_BUILD.concat(ATTRS_TO_PROPAGATE_ON_LAYOUT);
  var AmpVideo = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpVideo2, _AMP$BaseElement);
    var _super = _createSuper(AmpVideo2);
    function AmpVideo2(element) {
      var _this;
      _classCallCheck11(this, AmpVideo2);
      _this = _super.call(this, element);
      _this.video_ = null;
      _this.muted_ = false;
      _this.metadata_ = EMPTY_METADATA;
      _this.unlisteners_ = [];
      _this.posterDummyImageForTesting_ = null;
      _this.hasBitrateSources_ = null;
      _this.pauseHelper_ = new PauseHelper(_this.element);
      return _this;
    }
    _createClass10(AmpVideo2, [{
      key: "preconnectCallback",
      value: function preconnectCallback(opt_onLayout) {
        var _this2 = this;
        this.getVideoSourcesForPreconnect_().forEach(function(videoSrc) {
          Services.preconnectFor(_this2.win).url(_this2.getAmpDoc(), videoSrc, opt_onLayout);
        });
      }
    }, {
      key: "getVideoSourcesForPreconnect_",
      value: function getVideoSourcesForPreconnect_() {
        var videoSrc = this.element.getAttribute("src");
        if (videoSrc) {
          return [videoSrc];
        }
        var srcs = [];
        toArray(childElementsByTag(this.element, "source")).forEach(function(source) {
          var src = source.getAttribute("src");
          if (src) {
            srcs.push(src);
          }
          var origSrc = source.getAttribute("amp-orig-src");
          if (origSrc) {
            srcs.push(origSrc);
          }
        });
        return srcs;
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var element = this.element;
        this.configure_();
        this.video_ = element.ownerDocument.createElement("video");
        var poster = element.getAttribute("poster");
        if (!poster && getMode().development) {
          console.error('No "poster" attribute has been provided for amp-video.');
        }
        this.video_.setAttribute("playsinline", "");
        this.video_.setAttribute("webkit-playsinline", "");
        this.video_.setAttribute("preload", "none");
        this.checkA11yAttributeText_();
        this.propagateAttributes(ATTRS_TO_PROPAGATE_ON_BUILD, this.video_, true);
        this.installEventHandlers_();
        this.applyFillContent(this.video_, true);
        propagateObjectFitStyles(this.element, this.video_);
        element.appendChild(this.video_);
        var artist = element.getAttribute("artist");
        var title = element.getAttribute("title");
        var album = element.getAttribute("album");
        var artwork = element.getAttribute("artwork");
        this.metadata_ = {
          "title": title || "",
          "artist": artist || "",
          "album": album || "",
          "artwork": [{
            "src": artwork || poster || ""
          }]
        };
        this.hasBitrateSources_ = !!this.element.querySelector("source[data-bitrate]") || this.hasAnyCachedSources_() || this.element.hasAttribute("cache");
        installVideoManagerForDoc(element);
        Services.videoManagerForDoc(element).register(this);
        if (this.element.hasAttribute("cache") && !this.hasAnyCachedSources_()) {
          return fetchCachedSources(this.element, this.getAmpDoc());
        }
      }
    }, {
      key: "checkA11yAttributeText_",
      value: function checkA11yAttributeText_() {
        var altText = this.element.getAttribute("alt");
        var hasTitle = this.element.hasAttribute("title");
        var hasAriaLabel = this.element.hasAttribute("aria-label");
        if (altText && !hasTitle && !hasAriaLabel) {
          this.element.setAttribute("aria-label", altText);
        }
      }
    }, {
      key: "detachedCallback",
      value: function detachedCallback() {
        this.updateIsPlaying_(false);
      }
    }, {
      key: "configure_",
      value: function configure_() {
        var element = this.element;
        if (!descendsFromStory(element)) {
          return;
        }
        ["i-amphtml-disable-mediasession", "i-amphtml-poolbound"].forEach(function(className) {
          element.classList.add(className);
        });
      }
    }, {
      key: "mutatedAttributesCallback",
      value: function mutatedAttributesCallback(mutations) {
        if (!this.video_) {
          return;
        }
        var element = this.element;
        if (mutations["src"]) {
          var urlService = this.getUrlService_();
          urlService.assertHttpsUrl(element.getAttribute("src"), element);
          this.propagateAttributes(["src"], dev().assertElement(this.video_));
        }
        var attrs = ATTRS_TO_PROPAGATE.filter(function(value) {
          return mutations[value] !== void 0;
        });
        this.propagateAttributes(attrs, dev().assertElement(this.video_), true);
        if (mutations["src"]) {
          dispatchCustomEvent(element, VideoEvents.RELOAD);
        }
        if (mutations["artwork"] || mutations["poster"]) {
          var artwork = element.getAttribute("artwork");
          var poster = element.getAttribute("poster");
          this.metadata_["artwork"] = [{
            "src": artwork || poster || ""
          }];
        }
        if (mutations["album"]) {
          var album = element.getAttribute("album");
          this.metadata_["album"] = album || "";
        }
        if (mutations["title"]) {
          var title = element.getAttribute("title");
          this.metadata_["title"] = title || "";
        }
        if (mutations["artist"]) {
          var artist = element.getAttribute("artist");
          this.metadata_["artist"] = artist || "";
        }
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this3 = this;
        this.video_ = dev().assertElement(this.video_);
        if (!this.isVideoSupported_()) {
          this.toggleFallback(true);
          return resolvedPromise();
        }
        this.propagateAttributes(ATTRS_TO_PROPAGATE_ON_LAYOUT, dev().assertElement(this.video_), true);
        this.createPosterForAndroidBug_();
        this.onPosterLoaded_(function() {
          return _this3.hideBlurryPlaceholder_();
        });
        this.propagateCachedSources_();
        var pendingOriginPromise;
        if (this.getAmpDoc().getVisibilityState() == VisibilityState.PRERENDER) {
          if (!this.element.hasAttribute("preload")) {
            this.video_.setAttribute("preload", "auto");
          }
          pendingOriginPromise = this.getAmpDoc().whenFirstVisible().then(function() {
            _this3.propagateLayoutChildren_();
            return Services.timerFor(_this3.win).promise(1).then(function() {
              if (_this3.isManagedByPool_()) {
                return;
              }
              return _this3.loadPromise(_this3.video_);
            });
          });
        } else {
          this.propagateLayoutChildren_();
        }
        var promise = this.loadPromise(this.video_).then(null, function(reason) {
          if (pendingOriginPromise) {
            return pendingOriginPromise;
          }
          throw reason;
        }).then(function() {
          return _this3.onVideoLoaded_();
        });
        if (this.element.getAttribute("preload") === "none") {
          return;
        }
        if (this.isManagedByPool_()) {
          return pendingOriginPromise;
        }
        return promise;
      }
    }, {
      key: "handleMediaError_",
      value: function handleMediaError_(event) {
        var _this4 = this;
        if (!this.video_.error || this.video_.error.code != MediaError.MEDIA_ERR_DECODE) {
          return;
        }
        user().error(TAG4, "Decode error in " + this.video_.currentSrc, this.element);
        if (this.video_.src) {
          return;
        }
        var sourceCount = 0;
        var currentSource2 = childElement(this.video_, function(source) {
          if (source.tagName != "SOURCE") {
            return false;
          }
          sourceCount++;
          return source.src == _this4.video_.currentSrc;
        });
        if (sourceCount == 0) {
          return;
        }
        dev().assertElement(currentSource2, "Can't find source element for currentSrc " + this.video_.currentSrc);
        removeElement(dev().assertElement(currentSource2));
        event.stopImmediatePropagation();
        this.video_.load();
        this.play(false);
      }
    }, {
      key: "propagateCachedSources_",
      value: function propagateCachedSources_() {
        var _this5 = this;
        devAssert(this.video_);
        var sources2 = toArray(childElementsByTag(this.element, "source"));
        if (this.element.hasAttribute("src") && isCachedByCdn(this.element)) {
          var src = this.element.getAttribute("src");
          var type = this.element.getAttribute("type");
          var srcSource = this.createSourceElement_(src, type);
          var ampOrigSrc = this.element.getAttribute("amp-orig-src");
          srcSource.setAttribute("amp-orig-src", ampOrigSrc);
          this.element.removeAttribute("src");
          this.element.removeAttribute("type");
          sources2.unshift(srcSource);
        }
        sources2.forEach(function(source) {
          if (isCachedByCdn(source, _this5.element)) {
            source.remove();
            var qualities = Object.keys(AMP_VIDEO_QUALITY_BITRATES);
            var origType = source.getAttribute("type");
            var origSrc = source.getAttribute("amp-orig-src");
            qualities.forEach(function(quality, index) {
              var cachedSource = addParamsToUrl(source.src, {
                "amp_video_quality": quality
              });
              var currSource = _this5.createSourceElement_(cachedSource, origType, AMP_VIDEO_QUALITY_BITRATES[quality]);
              if (index === qualities.length - 1) {
                currSource.setAttribute("amp-orig-src", origSrc);
              }
              _this5.video_.appendChild(currSource);
            });
          }
        });
        if (this.video_.changedSources) {
          this.video_.changedSources();
        }
      }
    }, {
      key: "propagateLayoutChildren_",
      value: function propagateLayoutChildren_() {
        var _this6 = this;
        devAssert(this.video_);
        var sources2 = toArray(childElementsByTag(this.element, "source"));
        var element = this.element;
        var urlService = this.getUrlService_();
        if (element.hasAttribute("src") && !isCachedByCdn(element)) {
          urlService.assertHttpsUrl(element.getAttribute("src"), element);
          this.propagateAttributes(["src"], dev().assertElement(this.video_));
        }
        sources2.forEach(function(source) {
          devAssert(!isCachedByCdn(source, element));
          urlService.assertHttpsUrl(source.getAttribute("src"), source);
          _this6.video_.appendChild(source);
        });
        var cached = toArray(this.video_.querySelectorAll("[amp-orig-src]"));
        cached.forEach(function(cachedSource) {
          var origSrc = cachedSource.getAttribute("amp-orig-src");
          var origType = cachedSource.getAttribute("type");
          var origSource = _this6.createSourceElement_(origSrc, origType);
          insertAfterOrAtStart(dev().assertElement(_this6.video_), origSource, cachedSource);
        });
        var tracks = toArray(childElementsByTag(element, "track"));
        tracks.forEach(function(track) {
          _this6.video_.appendChild(track);
        });
        if (this.video_.changedSources) {
          this.video_.changedSources();
        }
      }
    }, {
      key: "createSourceElement_",
      value: function createSourceElement_(src, type, bitrate) {
        if (bitrate === void 0) {
          bitrate = null;
        }
        var element = this.element;
        this.getUrlService_().assertHttpsUrl(src, element);
        var source = element.ownerDocument.createElement("source");
        source.setAttribute("src", src);
        if (type) {
          source.setAttribute("type", type);
        }
        if (bitrate !== null) {
          source.setAttribute("data-bitrate", bitrate);
        }
        return source;
      }
    }, {
      key: "hasAnyCachedSources_",
      value: function hasAnyCachedSources_() {
        var element = this.element;
        var sources2 = toArray(childElementsByTag(element, "source"));
        sources2.push(element);
        for (var i = 0; i < sources2.length; i++) {
          if (isCachedByCdn(sources2[i])) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "installEventHandlers_",
      value: function installEventHandlers_() {
        var _this7 = this;
        var video = dev().assertElement(this.video_);
        video.addEventListener("error", function(e) {
          return _this7.handleMediaError_(e);
        });
        this.unlisteners_.push(this.forwardEvents([VideoEvents.ENDED, VideoEvents.LOADEDMETADATA, VideoEvents.LOADEDDATA, VideoEvents.PAUSE, VideoEvents.PLAYING, VideoEvents.PLAY], video));
        this.unlisteners_.push(listen(video, "volumechange", function() {
          var muted = _this7.video_.muted;
          if (_this7.muted_ == muted) {
            return;
          }
          _this7.muted_ = muted;
          dispatchCustomEvent(_this7.element, mutedOrUnmutedEvent(_this7.muted_));
        }));
        ["play", "pause", "ended"].forEach(function(type) {
          _this7.unlisteners_.push(listen(video, type, function() {
            return _this7.updateIsPlaying_(type == "play");
          }));
        });
      }
    }, {
      key: "uninstallEventHandlers_",
      value: function uninstallEventHandlers_() {
        this.updateIsPlaying_(false);
        while (this.unlisteners_.length) {
          this.unlisteners_.pop().call();
        }
      }
    }, {
      key: "resetOnDomChange",
      value: function resetOnDomChange() {
        var _this8 = this;
        this.video_ = dev().assertElement(childElementByTag(this.element, "video"), "Tried to reset amp-video without an underlying <video>.");
        this.uninstallEventHandlers_();
        this.installEventHandlers_();
        if (this.hasBitrateSources_) {
          getBitrateManager(this.win).manage(this.video_);
        }
        if (this.video_.readyState >= 1) {
          this.onVideoLoaded_();
          return;
        }
        listenOncePromise(this.video_, "loadedmetadata").then(function() {
          return _this8.onVideoLoaded_();
        });
      }
    }, {
      key: "onVideoLoaded_",
      value: function onVideoLoaded_() {
        dispatchCustomEvent(this.element, VideoEvents.LOAD);
      }
    }, {
      key: "pauseCallback",
      value: function pauseCallback() {
        if (this.video_) {
          this.video_.pause();
        }
      }
    }, {
      key: "updateIsPlaying_",
      value: function updateIsPlaying_(isPlaying) {
        if (this.isManagedByPool_()) {
          return;
        }
        this.pauseHelper_.updatePlaying(isPlaying);
      }
    }, {
      key: "isVideoSupported_",
      value: function isVideoSupported_() {
        return !!this.video_.play;
      }
    }, {
      key: "supportsPlatform",
      value: function supportsPlatform() {
        return this.isVideoSupported_();
      }
    }, {
      key: "isInteractive",
      value: function isInteractive() {
        return this.element.hasAttribute("controls");
      }
    }, {
      key: "play",
      value: function play(unusedIsAutoplay) {
        var ret = this.video_.play();
        if (ret && ret.catch) {
          ret.catch(function() {
          });
        }
      }
    }, {
      key: "createPosterForAndroidBug_",
      value: function createPosterForAndroidBug_() {
        if (!Services.platformFor(this.win).isAndroid()) {
          return;
        }
        var element = this.element;
        if (element.querySelector("i-amphtml-poster")) {
          return;
        }
        var poster = htmlFor(element)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose2(["<i-amphtml-poster></i-amphtml-poster>"])));
        var src = element.getAttribute("poster");
        setInitialDisplay(poster, "block");
        setStyles(poster, {
          "background-image": "url(" + src + ")",
          "background-size": "cover",
          "background-position": "center"
        });
        poster.classList.add("i-amphtml-android-poster-bug");
        this.applyFillContent(poster);
        element.appendChild(poster);
      }
    }, {
      key: "pause",
      value: function pause() {
        this.video_.pause();
      }
    }, {
      key: "mute",
      value: function mute() {
        if (this.isManagedByPool_()) {
          return;
        }
        this.video_.muted = true;
      }
    }, {
      key: "unmute",
      value: function unmute() {
        if (this.isManagedByPool_()) {
          return;
        }
        this.video_.muted = false;
      }
    }, {
      key: "isManagedByPool_",
      value: function isManagedByPool_() {
        return this.element.classList.contains("i-amphtml-poolbound");
      }
    }, {
      key: "showControls",
      value: function showControls() {
        this.video_.controls = true;
      }
    }, {
      key: "hideControls",
      value: function hideControls() {
        this.video_.controls = false;
      }
    }, {
      key: "fullscreenEnter",
      value: function fullscreenEnter2() {
        fullscreenEnter(dev().assertElement(this.video_));
      }
    }, {
      key: "fullscreenExit",
      value: function fullscreenExit2() {
        fullscreenExit(dev().assertElement(this.video_));
      }
    }, {
      key: "isFullscreen",
      value: function isFullscreen() {
        return isFullscreenElement(dev().assertElement(this.video_));
      }
    }, {
      key: "getMetadata",
      value: function getMetadata() {
        return this.metadata_;
      }
    }, {
      key: "preimplementsMediaSessionAPI",
      value: function preimplementsMediaSessionAPI() {
        return false;
      }
    }, {
      key: "preimplementsAutoFullscreen",
      value: function preimplementsAutoFullscreen() {
        return false;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.video_.currentTime;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.video_.duration;
      }
    }, {
      key: "getPlayedRanges",
      value: function getPlayedRanges() {
        var played = this.video_.played;
        var length = played.length;
        var ranges = [];
        for (var i = 0; i < length; i++) {
          ranges.push([played.start(i), played.end(i)]);
        }
        return ranges;
      }
    }, {
      key: "firstLayoutCompleted",
      value: function firstLayoutCompleted() {
        if (!this.hideBlurryPlaceholder_()) {
          this.togglePlaceholder(false);
        }
        this.removePosterForAndroidBug_();
      }
    }, {
      key: "removePosterForAndroidBug_",
      value: function removePosterForAndroidBug_() {
        var poster = this.element.querySelector("i-amphtml-poster");
        if (!poster) {
          return;
        }
        removeElement(poster);
      }
    }, {
      key: "getUrlService_",
      value: function getUrlService_() {
        return Services.urlForDoc(this.element);
      }
    }, {
      key: "hideBlurryPlaceholder_",
      value: function hideBlurryPlaceholder_() {
        var placeholder = this.getPlaceholder();
        if (placeholder) {
          if (placeholder.classList.contains("i-amphtml-blurry-placeholder")) {
            setImportantStyles(placeholder, {
              "opacity": 0
            });
            return true;
          }
        }
        return false;
      }
    }, {
      key: "onPosterLoaded_",
      value: function onPosterLoaded_(callback) {
        var poster = this.video_.getAttribute("poster");
        if (poster) {
          var posterImg = new Image();
          if (getMode().test) {
            this.posterDummyImageForTesting_ = posterImg;
          }
          posterImg.onload = callback;
          posterImg.src = poster;
        }
      }
    }, {
      key: "seekTo",
      value: function seekTo(timeSeconds) {
        this.video_.currentTime = timeSeconds;
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed(element) {
        if (element.getAttribute("poster")) {
          return true;
        }
        var sources2 = toArray(childElementsByTag(element, "source"));
        sources2.push(element);
        for (var i = 0; i < sources2.length; i++) {
          if (isCachedByCdn(sources2[i], element)) {
            return true;
          }
        }
        return false;
      }
    }]);
    return AmpVideo2;
  }(AMP.BaseElement);
  function isCachedByCdn(element, opt_videoElement) {
    var src = element.getAttribute("src");
    var hasOrigSrcAttr = element.hasAttribute("amp-orig-src");
    if (!hasOrigSrcAttr) {
      return false;
    }
    var urlService = Services.urlForDoc(opt_videoElement || element);
    return urlService.isProxyOrigin(src);
  }
  AMP.extension(TAG4, "0.1", function(AMP2) {
    AMP2.registerElement(TAG4, AmpVideo);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-video-0.1.max.js.map
