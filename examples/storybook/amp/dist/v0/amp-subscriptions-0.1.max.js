(self.AMP=self.AMP||[]).push({n:"amp-subscriptions",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
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
  function waitForChildPromise(parent, checkFunc) {
    return new Promise(function(resolve) {
      waitForChild(parent, checkFunc, resolve);
    });
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

  // extensions/amp-subscriptions/0.1/analytics.js
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
  var TAG = "amp-subscriptions";
  var SubscriptionAnalyticsEvents = {
    PLATFORM_ACTIVATED: "subscriptions-service-activated",
    PLATFORM_ACTIVATED_DEPRECATED: "subscriptions-platform-activated",
    PAYWALL_ACTIVATED: "subscriptions-paywall-activated",
    PLATFORM_REGISTERED: "subscriptions-service-registered",
    PLATFORM_REGISTERED_DEPRECATED: "subscriptions-platform-registered",
    PLATFORM_REAUTHORIZED: "subscriptions-service-re-authorized",
    PLATFORM_REAUTHORIZED_DEPRECATED: "subscriptions-platform-re-authorized",
    ACTION_DELEGATED: "subscriptions-action-delegated",
    ENTITLEMENT_RESOLVED: "subscriptions-entitlement-resolved",
    STARTED: "subscriptions-started",
    ACCESS_GRANTED: "subscriptions-access-granted",
    ACCESS_DENIED: "subscriptions-access-denied",
    LINK_REQUESTED: "subscriptions-link-requested",
    LINK_COMPLETE: "subscriptions-link-complete",
    LINK_CANCELED: "subscriptions-link-canceled",
    SUBSCRIPTIONS_ACTION: "subscriptions-action"
  };
  var Action = {
    LOGIN: "login",
    LOGOUT: "logout",
    LINK: "link",
    SUBSCRIBE: "subscribe",
    CONTRIBUTE: "contribute",
    SHOW_CONTRIBUTION_OPTIONS: "showContributionOptions",
    SHOW_OFFERS: "showOffers"
  };
  var ActionStatus = {
    STARTED: "started",
    REJECTED: "rejected",
    FAILED: "failed",
    SUCCESS: "success"
  };
  var SubscriptionAnalytics = /* @__PURE__ */ function() {
    function SubscriptionAnalytics2(element) {
      _classCallCheck3(this, SubscriptionAnalytics2);
      this.element_ = element;
      this.listeners_ = [];
    }
    _createClass2(SubscriptionAnalytics2, [{
      key: "registerEventListener",
      value: function registerEventListener(listener) {
        this.listeners_.push(listener);
      }
    }, {
      key: "serviceEvent",
      value: function serviceEvent(eventType, platformKey, opt_vars, internalVars) {
        this.event(eventType, Object.assign(dict({
          "serviceId": platformKey
        }), opt_vars), internalVars);
      }
    }, {
      key: "event",
      value: function event(eventType, opt_vars, internalVars) {
        internalVars = internalVars || dict({});
        var loggedString = eventType !== SubscriptionAnalyticsEvents.SUBSCRIPTIONS_ACTION ? eventType : eventType + ("-" + internalVars["action"] + "-" + internalVars["status"]);
        user().info(TAG, loggedString, opt_vars || "");
        opt_vars = opt_vars || dict({});
        triggerAnalyticsEvent(this.element_, loggedString, opt_vars, false);
        for (var l = 0; l < this.listeners_.length; l++) {
          this.listeners_[l](eventType, opt_vars, internalVars);
        }
      }
    }, {
      key: "actionEvent",
      value: function actionEvent(platformKey, action, status, opt_vars) {
        this.serviceEvent(SubscriptionAnalyticsEvents.SUBSCRIPTIONS_ACTION, platformKey, opt_vars, dict({
          "action": action,
          "status": status
        }));
      }
    }]);
    return SubscriptionAnalytics2;
  }();

  // build/amp-subscriptions-0.1.css.js
  var CSS2 = `[subscriptions-action]:not(.i-amphtml-subs-display),[subscriptions-actions]:not(.i-amphtml-subs-display),[subscriptions-section=actions]:not(.i-amphtml-subs-display),body.i-amphtml-subs-delegated [subscriptions-section=actions],body.i-amphtml-subs-grant-unk [subscriptions-action],body.i-amphtml-subs-grant-unk [subscriptions-section=actions],body:not(.i-amphtml-subs-grant-no) [subscriptions-section=content-not-granted],body:not(.i-amphtml-subs-grant-yes) [subscriptions-section=content],body:not(.i-amphtml-subs-loading) [subscriptions-section=loading]{display:none!important}amp-subscriptions-dialog{display:block!important;position:fixed!important;bottom:0!important;left:0!important;margin-left:0!important;width:100%!important;z-index:2147483641!important;max-height:90vh;box-sizing:border-box;opacity:1;background-image:none;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,0.2);margin-bottom:0;transition:transform 0.3s ease-in}.i-amphtml-subs-dialog-close-button{position:absolute;width:28px;height:28px;top:-28px;right:0;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31 352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0;cursor:pointer}body:not(.i-amphtml-subs-grant-yes) .i-amphtml-subs-dialog-close-button{display:none}.i-amphtml-subs-progress{height:2px;background-color:#ccc;position:relative;margin:8px;overflow:hidden}.i-amphtml-subs-progress:after{content:"";background-color:#2196f3;height:2px;position:absolute;left:0;top:0;width:20%;animation:i-amphtml-subs-loading-progress 1500ms ease-in-out infinite}@keyframes i-amphtml-subs-loading-progress{0%{transform:translateX(-100%)}to{transform:translateX(500%)}}@media (min-width:480px){amp-subscriptions-dialog{width:480px!important;left:-240px!important;margin-left:50vw!important}}
/*# sourceURL=/extensions/amp-subscriptions/0.1/amp-subscriptions.css*/`;

  // third_party/subscriptions-project/aes_gcm.js
  function decryptAesGcmImpl(key, iv, text) {
    var isIE = !!self.msCrypto;
    var subtle = isIE ? self.msCrypto.subtle : self.crypto.subtle;
    return wrapCryptoOp(subtle.decrypt({
      name: "AES-GCM",
      iv,
      tag: isIE ? text.slice(text.byteLength - 16) : void 0,
      tagLength: 128
    }, key, isIE ? text.slice(0, text.byteLength - 16) : text)).then(function(buffer) {
      return utf8Decode(new Uint8Array(buffer));
    });
  }
  function safeAesGcmImportKey(key) {
    var isIE = !!self.msCrypto;
    var subtle = isIE ? self.msCrypto.subtle : self.crypto.subtle;
    return wrapCryptoOp(subtle.importKey("raw", key, "AES-GCM", true, ["decrypt"]));
  }
  function wrapCryptoOp(op) {
    if (typeof op.then == "function") {
      return op;
    }
    return new Promise(function(resolve, reject) {
      op.oncomplete = function(e) {
        resolve(op.result);
      };
      op.onerror = reject;
    });
  }
  function utf8Decode(bytes) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(bytes);
    }
    var bytesBuffer = new Uint8Array(bytes.buffer || bytes);
    var array = new Array(bytesBuffer.length);
    for (var i = 0; i < bytesBuffer.length; i++) {
      array[i] = String.fromCharCode(bytesBuffer[i]);
    }
    var asciiString = array.join("");
    return decodeURIComponent(escape(asciiString));
  }
  function base64Decode(str) {
    var bytes = atob(str);
    var len = bytes.length;
    var array = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      array[i] = bytes.charCodeAt(i);
    }
    return array;
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

  // src/core/types/string/bytes.js
  function utf8Decode2(bytes) {
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

  // extensions/amp-subscriptions/0.1/crypto-handler.js
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
  var CryptoHandler = /* @__PURE__ */ function() {
    function CryptoHandler2(ampdoc) {
      _classCallCheck4(this, CryptoHandler2);
      this.ampdoc_ = ampdoc;
      this.decryptionPromise_ = null;
      var parsedEncryptedKeys = this.ampdoc_.getRootNode().querySelector("script[cryptokeys]");
      this.shaKeyHash_ = null;
      if (parsedEncryptedKeys && parsedEncryptedKeys.hasAttribute("sha-256-hash")) {
        this.shaKeyHash_ = parsedEncryptedKeys.getAttribute("sha-256-hash");
      }
      this.encryptedKeys_ = parsedEncryptedKeys && tryParseJson(parsedEncryptedKeys.textContent) || null;
    }
    _createClass3(CryptoHandler2, [{
      key: "isDocumentEncrypted",
      value: function isDocumentEncrypted() {
        return !!this.encryptedKeys_ && Object.keys(this.encryptedKeys_).length > 0;
      }
    }, {
      key: "getEncryptedKeys",
      value: function getEncryptedKeys() {
        return this.encryptedKeys_;
      }
    }, {
      key: "getEncryptedDocumentKey",
      value: function getEncryptedDocumentKey(platformKey) {
        var encryptedKeys = this.getEncryptedKeys();
        if (!encryptedKeys) {
          return null;
        }
        return encryptedKeys[platformKey] || null;
      }
    }, {
      key: "tryToDecryptDocument",
      value: function tryToDecryptDocument(decryptedDocumentKey) {
        var _this = this;
        if (!this.shaKeyHash_) {
          return this.tryToDecryptDocumentImpl_(decryptedDocumentKey);
        }
        var docKeyUint8 = utf8Encode(decryptedDocumentKey);
        return crypto.subtle.digest("SHA-256", docKeyUint8).then(function(val) {
          var hashArray = toArray(new Uint8Array(val));
          var hashHex = hashArray.map(function(b) {
            return padStart(b.toString(16), 2, "0");
          }).join("");
          if (hashHex != _this.shaKeyHash_) {
            return Promise.reject(new Error("Invalid Document Key"));
          }
          return _this.tryToDecryptDocumentImpl_(decryptedDocumentKey);
        });
      }
    }, {
      key: "tryToDecryptDocumentImpl_",
      value: function tryToDecryptDocumentImpl_(decryptedDocumentKey) {
        var _this2 = this;
        if (this.decryptionPromise_) {
          return this.decryptionPromise_;
        }
        this.decryptionPromise_ = this.ampdoc_.whenReady().then(function() {
          var keybytes = base64Decode(decryptedDocumentKey);
          return safeAesGcmImportKey(keybytes.buffer).then(function(formattedkey) {
            var encryptedSections = _this2.ampdoc_.getRootNode().querySelectorAll("script[ciphertext]");
            var promises = [];
            iterateCursor(encryptedSections, function(encryptedSection) {
              var text = encryptedSection.textContent.replace(/\s+/g, "");
              var contentBuffer = base64Decode(text).buffer;
              var iv = contentBuffer.slice(0, 12);
              var bytesToDecrypt = contentBuffer.slice(12);
              promises.push(decryptAesGcmImpl(formattedkey, iv, bytesToDecrypt).then(function(decryptedContent) {
                encryptedSection.outerHTML = decryptedContent;
              }));
            });
            return Promise.all(promises);
          });
        });
        return this.decryptionPromise_;
      }
    }]);
    return CryptoHandler2;
  }();

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

  // extensions/amp-subscriptions/0.1/dialog.js
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
  var Dialog = /* @__PURE__ */ function() {
    function Dialog2(ampdoc) {
      var _this = this;
      _classCallCheck5(this, Dialog2);
      this.ampdoc_ = ampdoc;
      this.vsync_ = Services.vsyncFor(ampdoc.win);
      this.timer_ = Services.timerFor(ampdoc.win);
      this.viewport_ = Services.viewportForDoc(ampdoc);
      this.visible_ = false;
      this.content_ = null;
      this.lastAction_ = resolvedPromise();
      var doc = this.ampdoc_.win.document;
      this.wrapper_ = createElementWithAttributes(doc, "amp-subscriptions-dialog", {
        "role": "dialog"
      });
      toggle(this.wrapper_, false);
      this.closeButton_ = createElementWithAttributes(doc, "button", {
        "class": "i-amphtml-subs-dialog-close-button"
      });
      this.showCloseAction(false);
      this.wrapper_.appendChild(this.closeButton_);
      this.closeButton_.addEventListener("click", function() {
        _this.close();
      });
      this.ampdoc_.getBody().appendChild(this.wrapper_);
      setImportantStyles(this.wrapper_, {
        transform: "translateY(100%)"
      });
    }
    _createClass4(Dialog2, [{
      key: "getRoot",
      value: function getRoot() {
        return this.wrapper_;
      }
    }, {
      key: "isVisible",
      value: function isVisible() {
        return this.visible_;
      }
    }, {
      key: "open",
      value: function open(content, showCloseAction) {
        var _this2 = this;
        if (showCloseAction === void 0) {
          showCloseAction = true;
        }
        return this.action_(function() {
          return _this2.open_(content, showCloseAction);
        });
      }
    }, {
      key: "close",
      value: function close() {
        var _this3 = this;
        return this.action_(function() {
          return _this3.close_();
        });
      }
    }, {
      key: "action_",
      value: function action_(action) {
        return this.lastAction_ = this.lastAction_.then(action);
      }
    }, {
      key: "open_",
      value: function open_(content, showCloseAction) {
        var _this4 = this;
        if (showCloseAction === void 0) {
          showCloseAction = true;
        }
        if (this.content_) {
          this.wrapper_.replaceChild(content, this.content_);
        } else {
          this.wrapper_.appendChild(content);
        }
        this.content_ = content;
        if (this.visible_) {
          return resolvedPromise();
        }
        this.visible_ = true;
        return this.vsync_.mutatePromise(function() {
          toggle(_this4.wrapper_, true);
          _this4.showCloseAction(showCloseAction);
        }).then(function() {
          return _this4.vsync_.mutatePromise(function() {
            setImportantStyles(_this4.wrapper_, {
              transform: "translateY(0)"
            });
          }).then(function() {
            return _this4.timer_.promise(300);
          });
        }).then(function() {
          var offsetHeight;
          return _this4.vsync_.runPromise({
            measure: function measure() {
              offsetHeight = _this4.wrapper_.offsetHeight;
            },
            mutate: function mutate() {
              _this4.viewport_.updatePaddingBottom(offsetHeight);
              _this4.viewport_.addToFixedLayer(_this4.wrapper_, true);
            }
          });
        });
      }
    }, {
      key: "close_",
      value: function close_() {
        var _this5 = this;
        if (!this.visible_) {
          return resolvedPromise();
        }
        return this.vsync_.mutatePromise(function() {
          setImportantStyles(_this5.wrapper_, {
            transform: "translateY(100%)"
          });
        }).then(function() {
          return _this5.timer_.promise(300);
        }).then(function() {
          return _this5.vsync_.mutatePromise(function() {
            toggle(_this5.wrapper_, false);
            _this5.viewport_.updatePaddingBottom(0);
            _this5.visible_ = false;
          });
        });
      }
    }, {
      key: "showCloseAction",
      value: function showCloseAction(show) {
        toggle(this.closeButton_, show);
      }
    }]);
    return Dialog2;
  }();

  // third_party/subscriptions-project/config.js
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
  function getReadyState(doc) {
    return doc["readyState"];
  }
  function isDocumentReady(doc) {
    var readyState = getReadyState(doc);
    return readyState != "loading" && readyState != "uninitialized";
  }
  function onDocumentReady(doc, callback) {
    onDocumentState(doc, isDocumentReady, callback);
  }
  function onDocumentState(doc, condition, callback) {
    if (condition(doc)) {
      callback(doc);
      return;
    }
    var callbackHasExecuted = false;
    var readyListener = function readyListener2() {
      if (condition(doc) && !callbackHasExecuted) {
        callback(doc);
        callbackHasExecuted = true;
        doc.removeEventListener("readystatechange", readyListener2);
      }
    };
    doc.addEventListener("readystatechange", readyListener);
  }
  function whenDocumentReady(doc) {
    return new Promise(function(resolve) {
      onDocumentReady(doc, resolve);
    });
  }
  var GlobalDoc = /* @__PURE__ */ function() {
    function GlobalDoc2(winOrDoc) {
      _classCallCheck6(this, GlobalDoc2);
      var isWin = !!winOrDoc.document;
      this.win_ = isWin ? winOrDoc : winOrDoc.defaultView;
      this.doc_ = isWin ? winOrDoc.document : winOrDoc;
    }
    _createClass5(GlobalDoc2, [{
      key: "getWin",
      value: function getWin() {
        return this.win_;
      }
    }, {
      key: "getRootNode",
      value: function getRootNode() {
        return this.doc_;
      }
    }, {
      key: "getRootElement",
      value: function getRootElement() {
        return this.doc_.documentElement;
      }
    }, {
      key: "getHead",
      value: function getHead() {
        return this.doc_.head;
      }
    }, {
      key: "getBody",
      value: function getBody() {
        return this.doc_.body;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return isDocumentReady(this.doc_);
      }
    }, {
      key: "whenReady",
      value: function whenReady() {
        return whenDocumentReady(this.doc_);
      }
    }, {
      key: "addToFixedLayer",
      value: function addToFixedLayer(unusedElement) {
        return resolvedPromise();
      }
    }]);
    return GlobalDoc2;
  }();
  function resolveDoc(input) {
    if (input.nodeType === 9) {
      return new GlobalDoc(input);
    }
    if (input.document) {
      return new GlobalDoc(input);
    }
    return input;
  }
  var AMP_USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  function duplicateErrorIfNecessary2(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty && messageProperty.writable) {
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
  function createErrorVargs2(var_args) {
    var error = null;
    var message = "";
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg instanceof Error && !error) {
        error = duplicateErrorIfNecessary2(arg);
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
  var ErrorLogger = /* @__PURE__ */ function() {
    function ErrorLogger2(opt_suffix) {
      if (opt_suffix === void 0) {
        opt_suffix = "";
      }
      _classCallCheck6(this, ErrorLogger2);
      this.suffix_ = opt_suffix;
    }
    _createClass5(ErrorLogger2, [{
      key: "prepareError_",
      value: function prepareError_(error) {
        if (this.suffix_) {
          if (!error.message) {
            error.message = this.suffix_;
          } else if (error.message.indexOf(this.suffix_) === -1) {
            error.message = this.suffix_;
          }
        }
      }
    }, {
      key: "createError",
      value: function createError(var_args) {
        var error = createErrorVargs2.apply(null, Array.prototype.slice.call(arguments));
        this.prepareError_(error);
        return error;
      }
    }, {
      key: "createExpectedError",
      value: function createExpectedError(var_args) {
        var error = createErrorVargs2.apply(null, Array.prototype.slice.call(arguments));
        this.prepareError_(error);
        error.expected = true;
        return error;
      }
    }, {
      key: "error",
      value: function error(var_args) {
        throw this.createError.apply(this, arguments);
      }
    }, {
      key: "expectedError",
      value: function expectedError(var_args) {
        throw this.createExpectedError.apply(this, arguments);
      }
    }]);
    return ErrorLogger2;
  }();
  var userLogger = new ErrorLogger(self.__AMP_TOP ? AMP_USER_ERROR_SENTINEL : "");
  new ErrorLogger();
  var user2 = function user3() {
    return userLogger;
  };
  var PageConfig = /* @__PURE__ */ function() {
    function PageConfig2(productOrPublicationId, locked) {
      _classCallCheck6(this, PageConfig2);
      var publicationId, productId, label;
      var div = productOrPublicationId.indexOf(":");
      if (div != -1) {
        productId = productOrPublicationId;
        publicationId = productId.substring(0, div);
        label = productId.substring(div + 1);
        if (label == "*") {
          user2().expectedError("wildcard disallowed");
        }
      } else {
        publicationId = productOrPublicationId;
        productId = null;
        label = null;
      }
      this.publicationId_ = publicationId;
      this.productId_ = productId;
      this.label_ = label;
      this.locked_ = locked;
    }
    _createClass5(PageConfig2, [{
      key: "getPublicationId",
      value: function getPublicationId() {
        return this.publicationId_;
      }
    }, {
      key: "getProductId",
      value: function getProductId() {
        return this.productId_;
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        return this.label_;
      }
    }, {
      key: "isLocked",
      value: function isLocked() {
        return this.locked_;
      }
    }]);
    return PageConfig2;
  }();
  function debugLog(var_args) {
    if (/swg.debug=1/.test(self.location.hash)) {
      var logArgs = Array.prototype.slice.call(arguments, 0);
      logArgs.unshift("[Subscriptions]");
      log.apply(log, logArgs);
    }
  }
  function log(var_args) {
    console.log.apply(console, arguments);
  }
  function hasNextNodeInDocumentOrder(element, stopNode) {
    var currentElement = element;
    do {
      if (currentElement.nextSibling) {
        return true;
      }
    } while ((currentElement = currentElement.parentNode) && currentElement != stopNode);
    return false;
  }
  function parseJson2(json) {
    return JSON.parse(json);
  }
  function tryParseJson2(json, onFailed) {
    try {
      return parseJson2(json);
    } catch (e) {
      if (onFailed) {
        onFailed(e);
      }
      return void 0;
    }
  }
  var ALREADY_SEEN = "__SWG-SEEN__";
  var ALLOWED_TYPES = ["CreativeWork", "Article", "NewsArticle", "Blog", "Comment", "Course", "HowTo", "Message", "Review", "WebPage"];
  var RE_ALLOWED_TYPES = new RegExp(ALLOWED_TYPES.join("|"));
  var PageConfigResolver = /* @__PURE__ */ function() {
    function PageConfigResolver2(winOrDoc) {
      var _this = this;
      _classCallCheck6(this, PageConfigResolver2);
      this.doc_ = resolveDoc(winOrDoc);
      this.configResolver_ = null;
      this.configPromise_ = new Promise(function(resolve) {
        _this.configResolver_ = resolve;
      });
      this.metaParser_ = new MetaParser(this.doc_);
      this.ldParser_ = new JsonLdParser(this.doc_);
      this.microdataParser_ = new MicrodataParser(this.doc_);
    }
    _createClass5(PageConfigResolver2, [{
      key: "resolveConfig",
      value: function resolveConfig() {
        resolvedPromise().then(this.check.bind(this));
        this.doc_.whenReady().then(this.check.bind(this));
        return this.configPromise_;
      }
    }, {
      key: "check",
      value: function check() {
        if (!this.configResolver_) {
          return null;
        }
        var config = this.metaParser_.check();
        if (!config) {
          config = this.ldParser_.check();
        }
        if (!config) {
          config = this.microdataParser_.check();
        }
        if (config) {
          this.configResolver_(config);
          this.configResolver_ = null;
        } else if (this.doc_.isReady()) {
          this.configResolver_(Promise.reject(user2().createError("No config could be discovered in the page")));
          this.configResolver_ = null;
        }
        debugLog(config);
        return config;
      }
    }]);
    return PageConfigResolver2;
  }();
  var TypeChecker = /* @__PURE__ */ function() {
    function TypeChecker2() {
      _classCallCheck6(this, TypeChecker2);
    }
    _createClass5(TypeChecker2, [{
      key: "checkValue",
      value: function checkValue(value, expectedTypes) {
        if (!value) {
          return false;
        }
        return this.checkArray(this.toArray_(value), expectedTypes);
      }
    }, {
      key: "checkString",
      value: function checkString(itemtype, expectedTypes) {
        if (!itemtype) {
          return false;
        }
        return this.checkArray(itemtype.split(/\s+/), expectedTypes);
      }
    }, {
      key: "checkArray",
      value: function checkArray(typeArray, expectedTypes) {
        var found = false;
        typeArray.forEach(function(candidateType) {
          found = found || expectedTypes.includes(candidateType.replace(/^http:\/\/schema.org\//i, ""));
        });
        return found;
      }
    }, {
      key: "toArray_",
      value: function toArray_(value) {
        return Array.isArray(value) ? value : [value];
      }
    }]);
    return TypeChecker2;
  }();
  var MetaParser = /* @__PURE__ */ function() {
    function MetaParser2(doc) {
      _classCallCheck6(this, MetaParser2);
      this.doc_ = doc;
    }
    _createClass5(MetaParser2, [{
      key: "check",
      value: function check() {
        if (!this.doc_.getBody()) {
          return null;
        }
        var productId = getMetaTag(this.doc_.getRootNode(), "subscriptions-product-id");
        if (!productId) {
          return null;
        }
        var accessibleForFree = getMetaTag(this.doc_.getRootNode(), "subscriptions-accessible-for-free");
        var locked = !!(accessibleForFree && accessibleForFree.toLowerCase() === "false");
        return new PageConfig(productId, locked);
      }
    }]);
    return MetaParser2;
  }();
  var JsonLdParser = /* @__PURE__ */ function() {
    function JsonLdParser2(doc) {
      _classCallCheck6(this, JsonLdParser2);
      this.doc_ = doc;
      this.checkType_ = new TypeChecker();
    }
    _createClass5(JsonLdParser2, [{
      key: "check",
      value: function check() {
        if (!this.doc_.getBody()) {
          return null;
        }
        var domReady = this.doc_.isReady();
        var elements = this.doc_.getRootNode().querySelectorAll('script[type="application/ld+json"]');
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          if (element[ALREADY_SEEN] || !element.textContent || !domReady && !hasNextNodeInDocumentOrder(element)) {
            continue;
          }
          element[ALREADY_SEEN] = true;
          if (!RE_ALLOWED_TYPES.test(element.textContent)) {
            continue;
          }
          var possibleConfig = this.tryExtractConfig_(element);
          if (possibleConfig) {
            return possibleConfig;
          }
        }
        return null;
      }
    }, {
      key: "tryExtractConfig_",
      value: function tryExtractConfig_(element) {
        var possibleConfigs = tryParseJson2(element.textContent);
        if (!possibleConfigs) {
          return null;
        }
        if (!Array.isArray(possibleConfigs)) {
          possibleConfigs = [possibleConfigs];
        }
        var configs = possibleConfigs;
        for (var i = 0; i < configs.length; i++) {
          var config = configs[i];
          if (!this.checkType_.checkValue(config["@type"], ALLOWED_TYPES)) {
            continue;
          }
          var productId = null;
          var partOfArray = this.valueArray_(config, "isPartOf");
          if (partOfArray) {
            for (var j = 0; j < partOfArray.length; j++) {
              productId = this.discoverProductId_(partOfArray[j]);
              if (productId) {
                break;
              }
            }
          }
          if (!productId) {
            continue;
          }
          var isAccessibleForFree = this.bool_(this.singleValue_(config, "isAccessibleForFree"), true);
          return new PageConfig(productId, !isAccessibleForFree);
        }
        return null;
      }
    }, {
      key: "bool_",
      value: function bool_(value, def) {
        if (value == null || value === "") {
          return def;
        }
        if (typeof value == "boolean") {
          return value;
        }
        if (typeof value == "string") {
          var lowercase = value.toLowerCase();
          if (lowercase == "false") {
            return false;
          }
          if (lowercase == "true") {
            return true;
          }
        }
        return def;
      }
    }, {
      key: "discoverProductId_",
      value: function discoverProductId_(json) {
        if (!this.checkType_.checkValue(json["@type"], ["Product"])) {
          return null;
        }
        return this.singleValue_(json, "productID");
      }
    }, {
      key: "valueArray_",
      value: function valueArray_(json, name) {
        var value = json[name];
        if (value == null || value === "") {
          return null;
        }
        return Array.isArray(value) ? value : [value];
      }
    }, {
      key: "singleValue_",
      value: function singleValue_(json, name) {
        var valueArray = this.valueArray_(json, name);
        var value = valueArray && valueArray[0];
        return value == null || value === "" ? null : value;
      }
    }]);
    return JsonLdParser2;
  }();
  var MicrodataParser = /* @__PURE__ */ function() {
    function MicrodataParser2(doc) {
      _classCallCheck6(this, MicrodataParser2);
      this.doc_ = doc;
      this.access_ = null;
      this.productId_ = null;
      this.checkType_ = new TypeChecker();
    }
    _createClass5(MicrodataParser2, [{
      key: "discoverAccess_",
      value: function discoverAccess_(root) {
        var ALREADY_SEEN2 = "alreadySeenForAccessInfo";
        var nodeList = root.querySelectorAll("[itemprop='isAccessibleForFree']");
        for (var i = 0; nodeList[i]; i++) {
          var element = nodeList[i];
          var content = element.getAttribute("content") || element.textContent;
          if (!content) {
            continue;
          }
          if (this.isValidElement_(element, root, ALREADY_SEEN2)) {
            var accessForFree = null;
            if (content.toLowerCase() == "true") {
              accessForFree = true;
            } else if (content.toLowerCase() == "false") {
              accessForFree = false;
            }
            return accessForFree;
          }
        }
        return null;
      }
    }, {
      key: "isValidElement_",
      value: function isValidElement_(current, root, alreadySeen) {
        for (var node = current; node && !node[alreadySeen]; node = node.parentNode) {
          node[alreadySeen] = true;
          if (node.hasAttribute && node.hasAttribute("itemscope")) {
            var type = node.getAttribute("itemtype");
            return this.checkType_.checkString(type, ALLOWED_TYPES);
          }
        }
        return false;
      }
    }, {
      key: "discoverProductId_",
      value: function discoverProductId_(root) {
        var ALREADY_SEEN2 = "alreadySeenForProductInfo";
        var nodeList = root.querySelectorAll('[itemprop="productID"]');
        for (var i = 0; nodeList[i]; i++) {
          var element = nodeList[i];
          var content = element.getAttribute("content") || element.textContent;
          var item = element.closest("[itemtype][itemscope]");
          var type = item.getAttribute("itemtype");
          if (type.indexOf("http://schema.org/Product") <= -1) {
            continue;
          }
          if (this.isValidElement_(item.parentElement, root, ALREADY_SEEN2)) {
            return content;
          }
        }
        return null;
      }
    }, {
      key: "getPageConfig_",
      value: function getPageConfig_() {
        var locked = null;
        if (this.access_ != null) {
          locked = !this.access_;
        } else if (this.doc_.isReady()) {
          locked = false;
        }
        if (this.productId_ != null && locked != null) {
          return new PageConfig(this.productId_, locked);
        }
        return null;
      }
    }, {
      key: "tryExtractConfig_",
      value: function tryExtractConfig_() {
        var _this2 = this;
        var config = this.getPageConfig_();
        if (config) {
          return config;
        }
        var nodeList = Array.prototype.slice.call(this.doc_.getRootNode().querySelectorAll("[itemscope][itemtype]")).filter(function(node) {
          return _this2.checkType_.checkString(node.getAttribute("itemtype"), ALLOWED_TYPES);
        });
        for (var i = 0; nodeList[i] && config == null; i++) {
          var element = nodeList[i];
          if (this.access_ == null) {
            this.access_ = this.discoverAccess_(element);
          }
          if (!this.productId_) {
            this.productId_ = this.discoverProductId_(element);
          }
          config = this.getPageConfig_();
        }
        return config;
      }
    }, {
      key: "check",
      value: function check() {
        if (!this.doc_.getBody()) {
          return null;
        }
        return this.tryExtractConfig_();
      }
    }]);
    return MicrodataParser2;
  }();
  function getMetaTag(rootNode, name) {
    var el = rootNode.querySelector('meta[name="' + name + '"]');
    if (el) {
      return el.getAttribute("content");
    }
    return null;
  }

  // extensions/amp-subscriptions/0.1/doc-impl.js
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
  var DocImpl = /* @__PURE__ */ function() {
    function DocImpl2(ampdoc) {
      _classCallCheck7(this, DocImpl2);
      this.ampdoc_ = ampdoc;
      this.viewport_ = Services.viewportForDoc(this.ampdoc_);
    }
    _createClass6(DocImpl2, [{
      key: "getWin",
      value: function getWin() {
        return this.ampdoc_.win;
      }
    }, {
      key: "getRootNode",
      value: function getRootNode() {
        return this.ampdoc_.getRootNode();
      }
    }, {
      key: "getRootElement",
      value: function getRootElement() {
        var root = this.ampdoc_.getRootNode();
        return dev().assertElement(root.documentElement || root.body || root);
      }
    }, {
      key: "getHead",
      value: function getHead() {
        return dev().assertElement(this.ampdoc_.getHeadNode());
      }
    }, {
      key: "getBody",
      value: function getBody() {
        return this.ampdoc_.isBodyAvailable() ? this.ampdoc_.getBody() : null;
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return this.ampdoc_.isReady();
      }
    }, {
      key: "whenReady",
      value: function whenReady() {
        return this.ampdoc_.whenReady();
      }
    }, {
      key: "addToFixedLayer",
      value: function addToFixedLayer(element) {
        return this.viewport_.addToFixedLayer(element, true);
      }
    }]);
    return DocImpl2;
  }();

  // extensions/amp-subscriptions/0.1/constants.js
  var ENTITLEMENTS_REQUEST_TIMEOUT = 3e3;
  var SubscriptionsScoreFactor = {
    IS_READY_TO_PAY: "isReadyToPay",
    SUPPORTS_VIEWER: "supportsViewer"
  };
  var DEFAULT_SCORE_CONFIG = {};

  // extensions/amp-subscriptions/0.1/entitlement.js
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
  var GrantReason = {
    "SUBSCRIBER": "SUBSCRIBER",
    "METERING": "METERING",
    "FREE": "UNLOCKED",
    "LAA": "LAA"
  };
  var Entitlement = /* @__PURE__ */ function() {
    function Entitlement2(input) {
      _classCallCheck8(this, Entitlement2);
      var dataObject = input.dataObject, decryptedDocumentKey = input.decryptedDocumentKey, _input$grantReason = input.grantReason, grantReason = _input$grantReason === void 0 ? "" : _input$grantReason, _input$granted = input.granted, granted = _input$granted === void 0 ? false : _input$granted, _input$raw = input.raw, raw = _input$raw === void 0 ? "" : _input$raw, service = input.service, source = input.source;
      this.raw = raw;
      this.source = source;
      this.service = service;
      this.granted = granted;
      this.grantReason = grantReason;
      this.data = dataObject;
      this.decryptedDocumentKey = decryptedDocumentKey;
    }
    _createClass7(Entitlement2, [{
      key: "json",
      value: function json() {
        var entitlementJson = dict({
          "source": this.source,
          "service": this.service,
          "granted": this.granted,
          "grantReason": this.grantReason,
          "data": this.data
        });
        return entitlementJson;
      }
    }, {
      key: "jsonForPingback",
      value: function jsonForPingback() {
        return _extends({
          "raw": this.raw
        }, this.json());
      }
    }, {
      key: "isSubscriber",
      value: function isSubscriber() {
        return this.granted && this.grantReason === GrantReason.SUBSCRIBER;
      }
    }, {
      key: "isFree",
      value: function isFree() {
        return this.granted && this.grantReason === GrantReason.FREE;
      }
    }], [{
      key: "empty",
      value: function empty(service) {
        return new Entitlement2({
          source: "",
          raw: "",
          service,
          granted: false
        });
      }
    }, {
      key: "parseFromJson",
      value: function parseFromJson(json, rawData) {
        if (rawData === void 0) {
          rawData = null;
        }
        if (!json) {
          json = dict();
        }
        var raw = rawData || JSON.stringify(json);
        var source = json["source"] || "";
        var granted = json["granted"] || false;
        var grantReason = json["grantReason"];
        var dataObject = json["data"] || null;
        var decryptedDocumentKey = json["decryptedDocumentKey"] || null;
        return new Entitlement2({
          source,
          raw,
          service: "",
          granted,
          grantReason,
          dataObject,
          decryptedDocumentKey
        });
      }
    }]);
    return Entitlement2;
  }();

  // extensions/amp-subscriptions/0.1/metering.js
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
  var TAG2 = "amp-subscriptions";
  var Metering = /* @__PURE__ */ function() {
    function Metering2(_ref) {
      var platformKey = _ref.platformKey;
      _classCallCheck9(this, Metering2);
      this.entitlementsWereFetchedWithCurrentMeteringState = false;
      this.platformKey = platformKey;
      this.meteringStateString_ = "";
    }
    _createClass8(Metering2, [{
      key: "saveMeteringState",
      value: function saveMeteringState(meteringState) {
        var _this = this;
        var meteringStateString = JSON.stringify(meteringState);
        var meteringStateChangedPromise = Promise.resolve(this.meteringStateString_).then(function(existingMeteringStateString) {
          var changed = meteringStateString !== existingMeteringStateString;
          if (existingMeteringStateString && changed) {
            user().info(TAG2, "Meter state changed from " + existingMeteringStateString + " to " + meteringStateString);
          }
          return changed;
        });
        return meteringStateChangedPromise.then(function(meteringStateChanged) {
          if (!meteringStateChanged) {
            return;
          }
          _this.meteringStateString_ = meteringStateString;
          _this.entitlementsWereFetchedWithCurrentMeteringState = false;
        });
      }
    }, {
      key: "loadMeteringState",
      value: function loadMeteringState() {
        if (!this.meteringStateString_) {
          return Promise.resolve(null);
        }
        return Promise.resolve(JSON.parse(this.meteringStateString_));
      }
    }]);
    return Metering2;
  }();

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
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck10(this, Observable2);
      this.handlers_ = null;
    }
    _createClass9(Observable2, [{
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

  // extensions/amp-subscriptions/0.1/platform-store.js
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
  var TAG3 = "amp-subscriptions";
  var PlatformStore = /* @__PURE__ */ function() {
    function PlatformStore2(platformKeys, scoreConfig, fallbackEntitlement, opt_Platforms) {
      var _this = this;
      _classCallCheck11(this, PlatformStore2);
      this.subscriptionPlatforms_ = opt_Platforms || dict();
      this.platformKeys_ = platformKeys;
      this.entitlements_ = {};
      this.entitlementDeferredMap_ = {};
      platformKeys.forEach(function(platformKey) {
        _this.entitlementDeferredMap_[platformKey] = new Deferred();
      });
      this.onEntitlementResolvedCallbacks_ = new Observable();
      this.onPlatformResolvedCallbacks_ = new Observable();
      this.grantStatusPromise_ = null;
      this.grantStatusEntitlement_ = null;
      this.grantStatusEntitlementDeferred_ = null;
      this.allResolvedDeferred_ = null;
      this.failedPlatforms_ = [];
      this.fallbackEntitlement_ = fallbackEntitlement;
      this.scoreConfig_ = Object.assign(DEFAULT_SCORE_CONFIG, scoreConfig);
    }
    _createClass10(PlatformStore2, [{
      key: "resolvePlatform",
      value: function resolvePlatform(platformKey, platform) {
        this.subscriptionPlatforms_[platformKey] = platform;
        this.onPlatformResolvedCallbacks_.fire({
          platformKey
        });
      }
    }, {
      key: "resetPlatformStore",
      value: function resetPlatformStore() {
        for (var platformKey in this.subscriptionPlatforms_) {
          this.subscriptionPlatforms_[platformKey].reset();
        }
        return new PlatformStore2(this.platformKeys_, this.scoreConfig_, this.fallbackEntitlement_, this.subscriptionPlatforms_);
      }
    }, {
      key: "resetPlatform",
      value: function resetPlatform(platformKey) {
        delete this.entitlements_[platformKey];
        this.entitlementDeferredMap_[platformKey] = new Deferred();
        this.subscriptionPlatforms_[platformKey].reset();
        this.grantStatusPromise_ = null;
        this.grantStatusEntitlement_ = null;
        this.grantStatusEntitlementDeferred_ = null;
        this.allResolvedDeferred_ = null;
      }
    }, {
      key: "onPlatformResolves",
      value: function onPlatformResolves(platformKey, callback) {
        var _this2 = this;
        var platform = this.subscriptionPlatforms_[platformKey];
        if (platform) {
          callback(platform);
        } else {
          this.onPlatformResolvedCallbacks_.add(function(e) {
            if (e.platformKey === platformKey) {
              callback(_this2.getPlatform(platformKey));
            }
          });
        }
      }
    }, {
      key: "getPlatform",
      value: function getPlatform(platformKey) {
        var platform = this.subscriptionPlatforms_[platformKey];
        devAssert(platform, "Platform for id " + platformKey + " is not resolved");
        return platform;
      }
    }, {
      key: "getLocalPlatform_",
      value: function getLocalPlatform_() {
        var localPlatform = this.getPlatform("local");
        return localPlatform;
      }
    }, {
      key: "getAvailablePlatforms",
      value: function getAvailablePlatforms() {
        var platforms = [];
        for (var platformKey in this.subscriptionPlatforms_) {
          var subscriptionPlatform = this.subscriptionPlatforms_[platformKey];
          platforms.push(subscriptionPlatform);
        }
        return platforms;
      }
    }, {
      key: "onChange",
      value: function onChange(callback) {
        this.onEntitlementResolvedCallbacks_.add(callback);
      }
    }, {
      key: "resolveEntitlement",
      value: function resolveEntitlement(platformKey, entitlement) {
        if (entitlement) {
          entitlement.service = platformKey;
        }
        this.entitlements_[platformKey] = entitlement;
        var deferred = this.entitlementDeferredMap_[platformKey];
        if (deferred) {
          deferred.resolve(entitlement);
        }
        if (this.failedPlatforms_.indexOf(platformKey) !== -1) {
          this.failedPlatforms_.splice(this.failedPlatforms_.indexOf(platformKey), 1);
        }
        if (entitlement.granted) {
          this.saveGrantEntitlement_(entitlement);
        }
        this.onEntitlementResolvedCallbacks_.fire({
          platformKey,
          entitlement
        });
      }
    }, {
      key: "getResolvedEntitlementFor",
      value: function getResolvedEntitlementFor(platformKey) {
        devAssert(this.entitlements_[platformKey], "Platform " + platformKey + " has not yet resolved with entitlements");
        return this.entitlements_[platformKey];
      }
    }, {
      key: "getEntitlementPromiseFor",
      value: function getEntitlementPromiseFor(platformKey) {
        devAssert(this.entitlementDeferredMap_[platformKey], "Platform " + platformKey + " is not declared");
        return this.entitlementDeferredMap_[platformKey].promise;
      }
    }, {
      key: "getScoreFactorStates",
      value: function getScoreFactorStates() {
        var _this3 = this;
        var states = dict({});
        return Promise.all(this.platformKeys_.map(function(platformId) {
          states[platformId] = dict();
          return Promise.all(Object.values(SubscriptionsScoreFactor).map(function(scoreFactor) {
            return _this3.getScoreFactorPromiseFor_(platformId, scoreFactor).then(function(factorValue) {
              states[platformId][scoreFactor] = factorValue;
            });
          }));
        })).then(function() {
          return states;
        });
      }
    }, {
      key: "getScoreFactorPromiseFor_",
      value: function getScoreFactorPromiseFor_(platformKey, scoreFactor) {
        var _this4 = this;
        return this.getEntitlementPromiseFor(platformKey).then(function() {
          return _this4.subscriptionPlatforms_[platformKey].getSupportedScoreFactor(scoreFactor);
        });
      }
    }, {
      key: "getGrantStatus",
      value: function getGrantStatus() {
        var _this5 = this;
        if (this.grantStatusPromise_ !== null) {
          return this.grantStatusPromise_.promise;
        }
        this.grantStatusPromise_ = new Deferred();
        for (var key in this.entitlements_) {
          var entitlement = this.entitlements_[key];
          if (entitlement.granted) {
            this.saveGrantEntitlement_(entitlement);
            this.grantStatusPromise_.resolve(true);
          }
        }
        if (this.areAllPlatformsResolved_()) {
          this.grantStatusPromise_.resolve(false);
        } else {
          this.onChange(function(e) {
            var entitlement2 = e.entitlement;
            if (entitlement2.granted) {
              _this5.grantStatusPromise_.resolve(true);
            } else if (_this5.areAllPlatformsResolved_()) {
              _this5.grantStatusPromise_.resolve(false);
            }
          });
        }
        return this.grantStatusPromise_.promise;
      }
    }, {
      key: "saveGrantEntitlement_",
      value: function saveGrantEntitlement_(entitlement) {
        if (!this.grantStatusEntitlement_ && entitlement.granted || this.grantStatusEntitlement_ && !this.grantStatusEntitlement_.isSubscriber() && entitlement.isSubscriber()) {
          this.grantStatusEntitlement_ = entitlement;
        }
      }
    }, {
      key: "getGrantEntitlement",
      value: function getGrantEntitlement() {
        var _this6 = this;
        var canResolveImmediately = function canResolveImmediately2() {
          return _this6.grantStatusEntitlement_ && (_this6.grantStatusEntitlement_.isSubscriber() || _this6.grantStatusEntitlement_.isFree());
        };
        var canResolve = function canResolve2() {
          return canResolveImmediately() || _this6.areAllPlatformsResolved_();
        };
        if (this.grantStatusEntitlementDeferred_) {
          return this.grantStatusEntitlementDeferred_.promise;
        }
        this.grantStatusEntitlementDeferred_ = new Deferred();
        if (canResolve()) {
          this.grantStatusEntitlementDeferred_.resolve(this.grantStatusEntitlement_);
        } else {
          this.onEntitlementResolvedCallbacks_.add(function() {
            if (canResolve()) {
              _this6.grantStatusEntitlementDeferred_.resolve(_this6.grantStatusEntitlement_);
            }
          });
        }
        return this.grantStatusEntitlementDeferred_.promise;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.grantStatusPromise_ = null;
      }
    }, {
      key: "getAllPlatformsEntitlements",
      value: function getAllPlatformsEntitlements() {
        var _this7 = this;
        if (this.allResolvedDeferred_) {
          return this.allResolvedDeferred_.promise;
        }
        this.allResolvedDeferred_ = new Deferred();
        if (this.areAllPlatformsResolved_()) {
          this.allResolvedDeferred_.resolve(this.getAvailablePlatformsEntitlements_());
        } else {
          this.onChange(function() {
            if (_this7.areAllPlatformsResolved_()) {
              _this7.allResolvedDeferred_.resolve(_this7.getAvailablePlatformsEntitlements_());
            }
          });
        }
        return this.allResolvedDeferred_.promise;
      }
    }, {
      key: "getAvailablePlatformsEntitlements_",
      value: function getAvailablePlatformsEntitlements_() {
        var entitlements = [];
        for (var platform in this.entitlements_) {
          if (hasOwn(this.entitlements_, platform)) {
            entitlements.push(this.entitlements_[platform]);
          }
        }
        return entitlements;
      }
    }, {
      key: "selectPlatform",
      value: function selectPlatform() {
        var _this8 = this;
        return this.getAllPlatformsEntitlements().then(function() {
          return _this8.selectApplicablePlatform_();
        });
      }
    }, {
      key: "areAllPlatformsResolved_",
      value: function areAllPlatformsResolved_() {
        var entitlementsResolved = Object.keys(this.entitlements_).length;
        return entitlementsResolved === this.platformKeys_.length;
      }
    }, {
      key: "getSupportedFactorWeight_",
      value: function getSupportedFactorWeight_(factorName, platform) {
        var factorValue = platform.getSupportedScoreFactor(factorName);
        if (typeof factorValue !== "number") {
          return 0;
        }
        return this.scoreConfig_[factorName] * Math.min(1, Math.max(-1, factorValue));
      }
    }, {
      key: "selectApplicablePlatform_",
      value: function selectApplicablePlatform_() {
        devAssert(this.areAllPlatformsResolved_(), "All platforms are not resolved yet");
        var availablePlatforms = this.getAvailablePlatforms();
        while (availablePlatforms.length) {
          var platform = availablePlatforms.pop();
          var entitlement = this.getResolvedEntitlementFor(platform.getPlatformKey());
          if (entitlement.isSubscriber() || entitlement.isFree()) {
            return platform;
          }
        }
        return this.rankPlatformsByWeight_(this.getAllPlatformWeights_());
      }
    }, {
      key: "getAllPlatformWeights_",
      value: function getAllPlatformWeights_() {
        var _this9 = this;
        return this.getAvailablePlatforms().map(function(platform) {
          return {
            platform,
            weight: _this9.calculatePlatformWeight_(platform)
          };
        });
      }
    }, {
      key: "calculatePlatformWeight_",
      value: function calculatePlatformWeight_(platform) {
        var factorWeights = [0];
        var weight = platform.getBaseScore();
        for (var factor in this.scoreConfig_) {
          if (hasOwn(this.scoreConfig_, factor)) {
            factorWeights.push(this.getSupportedFactorWeight_(factor, platform));
          }
        }
        return weight + factorWeights.reduce(function(a2, b) {
          return a2 + b;
        });
      }
    }, {
      key: "rankPlatformsByWeight_",
      value: function rankPlatformsByWeight_(platformWeights) {
        var localPlatform = this.getLocalPlatform_();
        platformWeights.sort(function(platform1, platform2) {
          if (platform2.weight === platform1.weight && platform1.platform === localPlatform) {
            return -1;
          }
          return platform2.weight - platform1.weight;
        });
        return platformWeights[0].platform;
      }
    }, {
      key: "selectApplicablePlatformForFactor_",
      value: function selectApplicablePlatformForFactor_(factor) {
        var platformWeights = this.getAvailablePlatforms().map(function(platform) {
          var factorValue = platform.getSupportedScoreFactor(factor);
          var weight = typeof factorValue === "number" ? factorValue : 0;
          return {
            platform,
            weight
          };
        });
        return this.rankPlatformsByWeight_(platformWeights);
      }
    }, {
      key: "reportPlatformFailureAndFallback",
      value: function reportPlatformFailureAndFallback(platformKey) {
        if (platformKey === this.getLocalPlatform_().getPlatformKey() && this.fallbackEntitlement_) {
          this.resolveEntitlement(this.getLocalPlatform_().getPlatformKey(), this.fallbackEntitlement_);
          user().warn(TAG3, "Local platform has failed to resolve,  using fallback entitlement.");
        } else if (this.failedPlatforms_.indexOf(platformKey) === -1) {
          var entitlement = Entitlement.empty(platformKey);
          this.resolveEntitlement(platformKey, entitlement);
          this.failedPlatforms_.push(platformKey);
        }
      }
    }, {
      key: "selectPlatformForLogin",
      value: function selectPlatformForLogin() {
        return this.selectApplicablePlatformForFactor_(SubscriptionsScoreFactor.SUPPORTS_VIEWER);
      }
    }]);
    return PlatformStore2;
  }();

  // extensions/amp-subscriptions/0.1/renderer.js
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
  var CSS_PREFIX = "i-amphtml-subs";
  var Renderer = /* @__PURE__ */ function() {
    function Renderer2(ampdoc) {
      _classCallCheck12(this, Renderer2);
      this.ampdoc_ = ampdoc;
      this.mutator_ = Services.mutatorForDoc(ampdoc);
      this.setGrantState(null);
      this.getBodyElement_().classList.add(CSS_PREFIX + "-ready");
      this.addLoadingBar();
    }
    _createClass11(Renderer2, [{
      key: "getBodyElement_",
      value: function getBodyElement_() {
        return this.ampdoc_.getBody();
      }
    }, {
      key: "setState_",
      value: function setState_(type, state) {
        var _this = this;
        this.mutator_.mutateElement(this.ampdoc_.getBody(), function() {
          _this.getBodyElement_().classList.toggle(CSS_PREFIX + "-" + type + "-unk", state === null);
          _this.getBodyElement_().classList.toggle(CSS_PREFIX + "-" + type + "-yes", state === true);
          _this.getBodyElement_().classList.toggle(CSS_PREFIX + "-" + type + "-no", state === false);
        });
      }
    }, {
      key: "addLoadingBar",
      value: function addLoadingBar() {
        var _this2 = this;
        return this.ampdoc_.whenReady().then(function() {
          var body = _this2.ampdoc_.getBody();
          if (!body.querySelector("[subscriptions-section=loading]")) {
            var element = createElementWithAttributes(_this2.ampdoc_.win.document, "div", dict({
              "class": "i-amphtml-subs-progress",
              "subscriptions-section": "loading"
            }));
            body.insertBefore(element, childElementByTag(body, "footer"));
          }
        });
      }
    }, {
      key: "toggleState_",
      value: function toggleState_(type, state) {
        var _this3 = this;
        this.mutator_.mutateElement(this.ampdoc_.getBody(), function() {
          _this3.getBodyElement_().classList.toggle(CSS_PREFIX + "-" + type, state);
        });
      }
    }, {
      key: "setGrantState",
      value: function setGrantState(state) {
        this.setState_("grant", state);
      }
    }, {
      key: "toggleLoading",
      value: function toggleLoading(loading) {
        this.toggleState_("loading", loading);
      }
    }]);
    return Renderer2;
  }();

  // extensions/amp-subscriptions/0.1/service-adapter.js
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
  var ServiceAdapter = /* @__PURE__ */ function() {
    function ServiceAdapter2(subscriptionService) {
      _classCallCheck13(this, ServiceAdapter2);
      this.subscriptionService_ = subscriptionService;
    }
    _createClass12(ServiceAdapter2, [{
      key: "getAnalytics",
      value: function getAnalytics() {
        return this.subscriptionService_.getAnalytics();
      }
    }, {
      key: "getDialog",
      value: function getDialog() {
        return this.subscriptionService_.getDialog();
      }
    }, {
      key: "getEncryptedDocumentKey",
      value: function getEncryptedDocumentKey(platformKey) {
        return this.subscriptionService_.getEncryptedDocumentKey(platformKey);
      }
    }, {
      key: "getPageConfig",
      value: function getPageConfig() {
        return this.subscriptionService_.getPageConfig();
      }
    }, {
      key: "getReaderId",
      value: function getReaderId(platformKey) {
        return this.subscriptionService_.getReaderId(platformKey);
      }
    }, {
      key: "getScoreFactorStates",
      value: function getScoreFactorStates() {
        return this.subscriptionService_.getScoreFactorStates();
      }
    }, {
      key: "delegateActionToLocal",
      value: function delegateActionToLocal(action, sourceId) {
        return this.delegateActionToService(action, "local", sourceId);
      }
    }, {
      key: "delegateActionToService",
      value: function delegateActionToService(action, platformKey, sourceId) {
        return this.subscriptionService_.delegateActionToService(action, platformKey, sourceId);
      }
    }, {
      key: "decorateServiceAction",
      value: function decorateServiceAction(element, platformKey, action, options) {
        this.subscriptionService_.decorateServiceAction(element, platformKey, action, options);
      }
    }, {
      key: "resetPlatforms",
      value: function resetPlatforms() {
        this.subscriptionService_.resetPlatforms();
      }
    }, {
      key: "selectPlatformForLogin",
      value: function selectPlatformForLogin() {
        return this.subscriptionService_.selectPlatformForLogin();
      }
    }, {
      key: "loadMeteringState",
      value: function loadMeteringState() {
        if (!this.subscriptionService_.metering_) {
          return Promise.resolve(null);
        }
        return this.subscriptionService_.metering_.loadMeteringState();
      }
    }, {
      key: "saveMeteringState",
      value: function saveMeteringState(meteringState) {
        if (!this.subscriptionService_.metering_) {
          return resolvedPromise();
        }
        return this.subscriptionService_.metering_.saveMeteringState(meteringState);
      }
    }, {
      key: "rememberMeteringEntitlementsWereFetched",
      value: function rememberMeteringEntitlementsWereFetched() {
        if (!this.subscriptionService_.metering_) {
          return;
        }
        this.subscriptionService_.metering_.entitlementsWereFetchedWithCurrentMeteringState = true;
      }
    }]);
    return ServiceAdapter2;
  }();

  // src/core/types/string/base64.js
  var base64UrlDecodeSubs = {
    "-": "+",
    "_": "/",
    ".": "="
  };
  function base64UrlDecodeToBytes(str) {
    var encoded = atob(str.replace(/[-_.]/g, function(ch) {
      return base64UrlDecodeSubs[ch];
    }));
    return stringToBytes(encoded);
  }
  function base64DecodeToBytes(str) {
    return stringToBytes(atob(str));
  }

  // extensions/amp-access/0.1/jwt.js
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
  function pemToBytes(pem) {
    var key = pem.trim().replace(/^-+BEGIN[^-]*-+/, "").replace(/-+END[^-]*-+$/, "").replace(/[\r\n]/g, "").trim();
    return base64DecodeToBytes(key);
  }
  var JwtHelper = /* @__PURE__ */ function() {
    function JwtHelper2(win) {
      _classCallCheck14(this, JwtHelper2);
      this.win = win;
      this.subtle_ = win.crypto && (win.crypto.subtle || win.crypto.webkitSubtle) || null;
    }
    _createClass13(JwtHelper2, [{
      key: "decode",
      value: function decode(encodedToken) {
        return this.decodeInternal_(encodedToken).payload;
      }
    }, {
      key: "isVerificationSupported",
      value: function isVerificationSupported() {
        return !!this.subtle_;
      }
    }, {
      key: "decodeAndVerify",
      value: function decodeAndVerify(encodedToken, pemPromise) {
        var _this = this;
        if (!this.subtle_) {
          throw new Error("Crypto is not supported on this platform");
        }
        var decodedPromise = new Promise(function(resolve) {
          return resolve(_this.decodeInternal_(encodedToken));
        });
        return decodedPromise.then(function(decoded) {
          var alg = decoded.header["alg"];
          if (!alg || alg != "RS256") {
            throw new Error("Only alg=RS256 is supported");
          }
          return _this.importKey_(pemPromise).then(function(key) {
            var sig = base64UrlDecodeToBytes(decoded.sig);
            return _this.subtle_.verify({
              name: "RSASSA-PKCS1-v1_5"
            }, key, sig, stringToBytes(decoded.verifiable));
          }).then(function(isValid) {
            if (isValid) {
              return decoded.payload;
            }
            throw new Error("Signature verification failed");
          });
        });
      }
    }, {
      key: "decodeInternal_",
      value: function decodeInternal_(encodedToken) {
        function invalidToken() {
          throw new Error('Invalid token: "' + encodedToken + '"');
        }
        var parts = encodedToken.split(".");
        if (parts.length != 3) {
          invalidToken();
        }
        var headerUtf8Bytes = base64UrlDecodeToBytes(parts[0]);
        var payloadUtf8Bytes = base64UrlDecodeToBytes(parts[1]);
        return {
          header: tryParseJson(utf8Decode2(headerUtf8Bytes), invalidToken),
          payload: tryParseJson(utf8Decode2(payloadUtf8Bytes), invalidToken),
          verifiable: parts[0] + "." + parts[1],
          sig: parts[2]
        };
      }
    }, {
      key: "importKey_",
      value: function importKey_(pemPromise) {
        var _this2 = this;
        return pemPromise.then(function(pem) {
          return _this2.subtle_.importKey("spki", pemToBytes(pem), {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
              name: "SHA-256"
            }
          }, false, ["verify"]);
        });
      }
    }]);
    return JwtHelper2;
  }();

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck15(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass14(LruCache2, [{
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

  // extensions/amp-access/0.1/login-dialog.js
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
  var TAG4 = "amp-access-login";
  var RETURN_URL_REGEX = new RegExp("RETURN_URL");
  function createLoginDialog(ampdoc, urlOrPromise) {
    var viewer = Services.viewerForDoc(ampdoc);
    var overrideDialog = parseInt(ampdoc.getParam("dialog"), 10);
    if (overrideDialog) {
      return new ViewerLoginDialog(viewer, urlOrPromise);
    }
    return new WebLoginDialog(ampdoc.win, viewer, urlOrPromise);
  }
  function openLoginDialog(ampdoc, urlOrPromise) {
    return createLoginDialog(ampdoc, urlOrPromise).open();
  }
  var ViewerLoginDialog = /* @__PURE__ */ function() {
    function ViewerLoginDialog2(viewer, urlOrPromise) {
      _classCallCheck16(this, ViewerLoginDialog2);
      this.viewer = viewer;
      this.urlOrPromise = urlOrPromise;
    }
    _createClass15(ViewerLoginDialog2, [{
      key: "getLoginUrl",
      value: function getLoginUrl() {
        var urlPromise;
        if (typeof this.urlOrPromise == "string") {
          urlPromise = Promise.resolve(this.urlOrPromise);
        } else {
          urlPromise = this.urlOrPromise;
        }
        return urlPromise.then(function(url) {
          return buildLoginUrl(url, "RETURN_URL");
        });
      }
    }, {
      key: "open",
      value: function open() {
        var _this = this;
        return this.getLoginUrl().then(function(loginUrl) {
          dev().fine(TAG4, "Open viewer dialog: ", loginUrl);
          return _this.viewer.sendMessageAwaitResponse("openDialog", dict({
            "url": loginUrl
          }));
        });
      }
    }]);
    return ViewerLoginDialog2;
  }();
  var WebLoginDialog = /* @__PURE__ */ function() {
    function WebLoginDialog2(win, viewer, urlOrPromise) {
      _classCallCheck16(this, WebLoginDialog2);
      this.win = win;
      this.viewer = viewer;
      this.urlOrPromise = urlOrPromise;
      this.resolve_ = null;
      this.reject_ = null;
      this.dialog_ = null;
      this.dialogReadyPromise_ = null;
      this.heartbeatInterval_ = null;
      this.messageUnlisten_ = null;
    }
    _createClass15(WebLoginDialog2, [{
      key: "open",
      value: function open() {
        var _this2 = this;
        userAssert(!this.resolve_, "Dialog already opened");
        return new Promise(function(resolve, reject) {
          _this2.resolve_ = resolve;
          _this2.reject_ = reject;
          _this2.openInternal_();
        }).then(function(result) {
          _this2.cleanup_();
          return result;
        }, function(error) {
          _this2.cleanup_();
          throw error;
        });
      }
    }, {
      key: "cleanup_",
      value: function cleanup_() {
        this.resolve_ = null;
        this.reject_ = null;
        if (this.dialog_) {
          try {
            this.dialog_.close();
          } catch (e) {
          }
          this.dialog_ = null;
        }
        if (this.heartbeatInterval_) {
          this.win.clearInterval(this.heartbeatInterval_);
          this.heartbeatInterval_ = null;
        }
        if (this.messageUnlisten_) {
          this.messageUnlisten_();
          this.messageUnlisten_ = null;
        }
      }
    }, {
      key: "getLoginUrl",
      value: function getLoginUrl() {
        var _this3 = this;
        var urlPromise;
        if (typeof this.urlOrPromise == "string") {
          urlPromise = Promise.resolve(this.urlOrPromise);
        } else {
          urlPromise = this.urlOrPromise;
        }
        return urlPromise.then(function(url) {
          return buildLoginUrl(url, _this3.getReturnUrl_());
        });
      }
    }, {
      key: "openInternal_",
      value: function openInternal_() {
        var _this4 = this;
        var screen = this.win.screen;
        var w = Math.floor(Math.min(700, screen.width * 0.9));
        var h = Math.floor(Math.min(450, screen.height * 0.9));
        var x = Math.floor((screen.width - w) / 2);
        var y = Math.floor((screen.height - h) / 2);
        var sizing = "height=" + h + ",width=" + w + ",left=" + x + ",top=" + y;
        var options = sizing + ",resizable=yes,scrollbars=yes";
        var returnUrl = this.getReturnUrl_();
        this.dialogReadyPromise_ = null;
        if (typeof this.urlOrPromise == "string") {
          var loginUrl = buildLoginUrl(this.urlOrPromise, returnUrl);
          dev().fine(TAG4, "Open dialog: ", loginUrl, returnUrl, w, h, x, y);
          this.dialog_ = openWindowDialog(this.win, loginUrl, "_blank", options);
          if (this.dialog_) {
            this.dialogReadyPromise_ = resolvedPromise();
          }
        } else {
          dev().fine(TAG4, "Open dialog: ", "about:blank", returnUrl, w, h, x, y);
          this.dialog_ = openWindowDialog(this.win, "", "_blank", options);
          if (this.dialog_) {
            this.dialogReadyPromise_ = this.urlOrPromise.then(function(url) {
              var loginUrl2 = buildLoginUrl(url, returnUrl);
              dev().fine(TAG4, "Set dialog url: ", loginUrl2);
              _this4.dialog_.location.replace(loginUrl2);
            }, function(error) {
              throw new Error("failed to resolve url: " + error);
            });
          }
        }
        if (this.dialogReadyPromise_) {
          this.dialogReadyPromise_.then(function() {
            _this4.setupDialog_(returnUrl);
          }, function(error) {
            _this4.loginDone_(null, error);
          });
        } else {
          this.loginDone_(null, new Error("failed to open dialog"));
        }
      }
    }, {
      key: "setupDialog_",
      value: function setupDialog_(returnUrl) {
        var _this5 = this;
        var returnOrigin = parseUrlDeprecated(returnUrl).origin;
        this.heartbeatInterval_ = this.win.setInterval(function() {
          if (_this5.dialog_.closed) {
            _this5.win.clearInterval(_this5.heartbeatInterval_);
            _this5.heartbeatInterval_ = null;
            _this5.win.setTimeout(function() {
              _this5.loginDone_("");
            }, 3e3);
          }
        }, 500);
        this.messageUnlisten_ = listen(this.win, "message", function(e) {
          dev().fine(TAG4, "MESSAGE:", e);
          if (e.origin != returnOrigin) {
            return;
          }
          if (!getData(e) || getData(e)["sentinel"] != "amp") {
            return;
          }
          dev().fine(TAG4, "Received message from dialog: ", getData(e));
          if (getData(e)["type"] == "result") {
            if (_this5.dialog_) {
              _this5.dialog_.postMessage(dict({
                "sentinel": "amp",
                "type": "result-ack"
              }), returnOrigin);
            }
            _this5.loginDone_(getData(e)["result"]);
          }
        });
      }
    }, {
      key: "loginDone_",
      value: function loginDone_(result, opt_error) {
        if (!this.resolve_) {
          return;
        }
        dev().fine(TAG4, "Login done: ", result, opt_error);
        if (opt_error) {
          this.reject_(opt_error);
        } else {
          this.resolve_(result);
        }
        this.cleanup_();
      }
    }, {
      key: "getReturnUrl_",
      value: function getReturnUrl_() {
        var currentUrl = this.viewer.getResolvedViewerUrl();
        var returnUrl;
        if (getMode().localDev) {
          var loc = this.win.location;
          returnUrl = loc.protocol + "//" + loc.host + "/extensions/amp-access/0.1/amp-login-done.html";
        } else {
          returnUrl = urls.cdn + "/v0/amp-login-done-0.1.html";
        }
        return returnUrl + "?url=" + encodeURIComponent(currentUrl);
      }
    }]);
    return WebLoginDialog2;
  }();
  function buildLoginUrl(url, returnUrl) {
    if (RETURN_URL_REGEX.test(url)) {
      return url.replace(RETURN_URL_REGEX, encodeURIComponent(returnUrl));
    }
    return url + (url.indexOf("?") == -1 ? "?" : "&") + "return=" + encodeURIComponent(returnUrl);
  }

  // extensions/amp-subscriptions/0.1/actions.js
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
  var TAG5 = "amp-subscriptions";
  var LOCAL = "local";
  var Actions = /* @__PURE__ */ function() {
    function Actions2(ampdoc, urlBuilder, analytics, actionMap) {
      _classCallCheck17(this, Actions2);
      for (var k in actionMap) {
        assertHttpsUrl(actionMap[k], "action " + k);
      }
      this.actionsConfig_ = actionMap;
      this.builtActionUrlMap_ = dict();
      this.urlBuilder_ = urlBuilder;
      this.analytics_ = analytics;
      this.actionPromise_ = null;
      this.actionStartTime_ = 0;
      this.openPopup_ = openLoginDialog.bind(null, ampdoc);
      this.build();
    }
    _createClass16(Actions2, [{
      key: "build",
      value: function build() {
        var _this = this;
        if (Object.keys(this.actionsConfig_).length == 0) {
          return null;
        }
        var promises = [];
        var _loop = function _loop2(k2) {
          promises.push(_this.urlBuilder_.buildUrl(_this.actionsConfig_[k2], true).then(function(url) {
            _this.builtActionUrlMap_[k2] = url;
          }));
        };
        for (var k in this.actionsConfig_) {
          _loop(k);
        }
        return Promise.all(promises).then(function() {
          return _this.builtActionUrlMap_;
        });
      }
    }, {
      key: "execute",
      value: function execute(action) {
        userAssert(this.actionsConfig_[action], "Action URL is not configured: %s", action);
        var url = userAssert(this.builtActionUrlMap_[action], "Action URL is not ready: %s", action);
        return this.execute_(url, action);
      }
    }, {
      key: "execute_",
      value: function execute_(url, action) {
        var _this2 = this;
        var now = Date.now();
        if (this.actionPromise_ && now - this.actionStartTime_ < 1e3) {
          return this.actionPromise_;
        }
        dev().fine(TAG5, "Start action: ", url, action);
        this.analytics_.actionEvent(LOCAL, action, ActionStatus.STARTED);
        var dialogPromise = this.openPopup_(url);
        var actionPromise = dialogPromise.then(function(result) {
          dev().fine(TAG5, "Action completed: ", action, result);
          _this2.actionPromise_ = null;
          var query = parseQueryString(result);
          var s = query["success"];
          var success = s == "true" || s == "yes" || s == "1";
          if (success) {
            _this2.analytics_.actionEvent(LOCAL, action, ActionStatus.SUCCESS);
          } else {
            _this2.analytics_.actionEvent(LOCAL, action, ActionStatus.REJECTED);
          }
          return success || !s;
        }).catch(function(reason) {
          dev().fine(TAG5, "Action failed: ", action, reason);
          _this2.analytics_.actionEvent(LOCAL, action, ActionStatus.FAILED);
          if (_this2.actionPromise_ == actionPromise) {
            _this2.actionPromise_ = null;
          }
          throw reason;
        });
        this.actionPromise_ = actionPromise;
        this.actionStartTime_ = now;
        return this.actionPromise_;
      }
    }]);
    return Actions2;
  }();

  // build/parsers/access-expr-impl.js
  var parser = function() {
    var o = function o2(k, v, _o, l) {
      for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {
        ;
      }
      return _o;
    }, $V0 = [1, 3], $V1 = [1, 4], $V2 = [1, 18], $V3 = [1, 19], $V4 = [1, 14], $V5 = [1, 15], $V6 = [1, 16], $V7 = [1, 17], $V8 = [1, 21], $V9 = [1, 22], $Va = [5, 6, 7, 10], $Vb = [5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21], $Vc = [5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21, 25, 27];
    var parser2 = {
      trace: function trace() {
      },
      yy: {},
      symbols_: {
        "error": 2,
        "result": 3,
        "search_condition": 4,
        "EOF": 5,
        "OR": 6,
        "AND": 7,
        "NOT": 8,
        "(": 9,
        ")": 10,
        "predicate": 11,
        "comparison_predicate": 12,
        "truthy_predicate": 13,
        "scalar_exp": 14,
        "EQ": 15,
        "DEQ": 16,
        "NEQ": 17,
        "LT": 18,
        "LTE": 19,
        "GT": 20,
        "GTE": 21,
        "atom": 22,
        "field_ref": 23,
        "literal": 24,
        "DOT": 25,
        "field_name": 26,
        "[": 27,
        "string": 28,
        "]": 29,
        "NAME": 30,
        "STRING": 31,
        "NUMERIC": 32,
        "TRUE": 33,
        "FALSE": 34,
        "NULL": 35,
        "$accept": 0,
        "$end": 1
      },
      terminals_: {
        2: "error",
        5: "EOF",
        6: "OR",
        7: "AND",
        8: "NOT",
        9: "(",
        10: ")",
        15: "EQ",
        16: "DEQ",
        17: "NEQ",
        18: "LT",
        19: "LTE",
        20: "GT",
        21: "GTE",
        25: "DOT",
        27: "[",
        29: "]",
        30: "NAME",
        31: "STRING",
        32: "NUMERIC",
        33: "TRUE",
        34: "FALSE",
        35: "NULL"
      },
      productions_: [0, [3, 2], [4, 3], [4, 3], [4, 2], [4, 3], [4, 1], [11, 1], [11, 1], [12, 3], [12, 3], [12, 3], [12, 3], [12, 3], [12, 3], [12, 3], [13, 1], [14, 1], [14, 1], [22, 1], [23, 3], [23, 4], [23, 1], [26, 1], [28, 1], [24, 1], [24, 1], [24, 1], [24, 1], [24, 1]],
      performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
        var $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            return $$[$0 - 1];
            break;
          case 2:
            this.$ = $$[$0 - 2] || $$[$0];
            break;
          case 3:
            this.$ = $$[$0 - 2] && $$[$0];
            break;
          case 4:
            this.$ = !$$[$0];
            break;
          case 5:
            this.$ = $$[$0 - 1];
            break;
          case 6:
          case 7:
          case 8:
          case 17:
          case 18:
          case 19:
            this.$ = $$[$0];
            break;
          case 9:
            this.$ = $$[$0 - 2] === $$[$0];
            break;
          case 10:
            throw new Error('"==" is not allowed, use "="');
            break;
          case 11:
            this.$ = $$[$0 - 2] !== $$[$0];
            break;
          case 12:
            this.$ = typeof $$[$0 - 2] == typeof $$[$0] && $$[$0 - 2] < $$[$0];
            break;
          case 13:
            this.$ = typeof $$[$0 - 2] == typeof $$[$0] && $$[$0 - 2] <= $$[$0];
            break;
          case 14:
            this.$ = typeof $$[$0 - 2] == typeof $$[$0] && $$[$0 - 2] > $$[$0];
            break;
          case 15:
            this.$ = typeof $$[$0 - 2] == typeof $$[$0] && $$[$0 - 2] >= $$[$0];
            break;
          case 16:
            this.$ = $$[$0] !== void 0 && $$[$0] !== null && $$[$0] !== "" && $$[$0] !== 0 && $$[$0] !== false;
            break;
          case 20:
            this.$ = Object.prototype.toString.call($$[$0 - 2]) == "[object Object]" && $$[$0 - 2].hasOwnProperty($$[$0]) ? $$[$0 - 2][$$[$0]] : null;
            break;
          case 21:
            this.$ = Object.prototype.toString.call($$[$0 - 3]) == "[object Object]" && $$[$0 - 3].hasOwnProperty($$[$0 - 1]) ? $$[$0 - 3][$$[$0 - 1]] : null;
            break;
          case 22:
            this.$ = yy[$$[$0]] !== void 0 ? yy[$$[$0]] : null;
            break;
          case 23:
            this.$ = yytext;
            break;
          case 24:
            this.$ = yytext.substring(1, yytext.length - 1);
            break;
          case 26:
            this.$ = Number(yytext);
            break;
          case 27:
            this.$ = true;
            break;
          case 28:
            this.$ = false;
            break;
          case 29:
            this.$ = null;
            break;
        }
      },
      table: [{
        3: 1,
        4: 2,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        1: [3]
      }, {
        5: [1, 20],
        6: $V8,
        7: $V9
      }, {
        4: 23,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        4: 24,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, o($Va, [2, 6]), o($Va, [2, 7]), o($Va, [2, 8]), o($Va, [2, 16], {
        15: [1, 25],
        16: [1, 26],
        17: [1, 27],
        18: [1, 28],
        19: [1, 29],
        20: [1, 30],
        21: [1, 31]
      }), o($Vb, [2, 17]), o($Vb, [2, 18], {
        25: [1, 32],
        27: [1, 33]
      }), o($Vb, [2, 19]), o($Vc, [2, 22]), o($Vb, [2, 25]), o($Vb, [2, 26]), o($Vb, [2, 27]), o($Vb, [2, 28]), o($Vb, [2, 29]), o($Vc, [2, 23]), o([5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 21, 29], [2, 24]), {
        1: [2, 1]
      }, {
        4: 34,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        4: 35,
        8: $V0,
        9: $V1,
        11: 5,
        12: 6,
        13: 7,
        14: 8,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, o($Va, [2, 4]), {
        6: $V8,
        7: $V9,
        10: [1, 36]
      }, {
        14: 37,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 38,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 39,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 40,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 41,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 42,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        14: 43,
        22: 9,
        23: 10,
        24: 11,
        26: 12,
        28: 13,
        30: $V2,
        31: $V3,
        32: $V4,
        33: $V5,
        34: $V6,
        35: $V7
      }, {
        26: 44,
        30: $V2
      }, {
        28: 45,
        31: $V3
      }, o([5, 6, 10], [2, 2], {
        7: $V9
      }), o($Va, [2, 3]), o($Va, [2, 5]), o($Va, [2, 9]), o($Va, [2, 10]), o($Va, [2, 11]), o($Va, [2, 12]), o($Va, [2, 13]), o($Va, [2, 14]), o($Va, [2, 15]), o($Vc, [2, 20]), {
        29: [1, 46]
      }, o($Vc, [2, 21])],
      defaultActions: {
        20: [2, 1]
      },
      parseError: function parseError(str, hash) {
        if (hash.recoverable) {
          this.trace(str);
        } else {
          var error = new Error(str);
          error.hash = hash;
          throw error;
        }
      },
      parse: function parse(input) {
        var self2 = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
        var args = lstack.slice.call(arguments, 1);
        var lexer2 = Object.create(this.lexer);
        var sharedState = {
          yy: {}
        };
        for (var k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
          }
        }
        lexer2.setInput(input, sharedState.yy);
        sharedState.yy.lexer = lexer2;
        sharedState.yy.parser = this;
        if (typeof lexer2.yylloc == "undefined") {
          lexer2.yylloc = {};
        }
        var yyloc = lexer2.yylloc;
        lstack.push(yyloc);
        var ranges = lexer2.options && lexer2.options.ranges;
        if (typeof sharedState.yy.parseError === "function") {
          this.parseError = sharedState.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
        }
        var lex = function lex2() {
          var token;
          token = lexer2.lex() || EOF;
          if (typeof token !== "number") {
            token = self2.symbols_[token] || token;
          }
          return token;
        };
        var symbol, preErrorSymbol, state, action, a2, r, yyval = {}, p, len, newState, expected;
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            expected = [];
            for (p in table[state]) {
              if (this.terminals_[p] && p > TERROR) {
                expected.push("'" + this.terminals_[p] + "'");
              }
            }
            if (lexer2.showPosition) {
              errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
            } else {
              errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
            }
            this.parseError(errStr, {
              text: lexer2.match,
              token: this.terminals_[symbol] || symbol,
              line: lexer2.yylineno,
              loc: yyloc,
              expected
            });
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(lexer2.yytext);
              lstack.push(lexer2.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                yyleng = lexer2.yyleng;
                yytext = lexer2.yytext;
                yylineno = lexer2.yylineno;
                yyloc = lexer2.yylloc;
                if (recovering > 0) {
                  recovering--;
                }
              } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
              };
              if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }
    };
    var lexer = function() {
      var lexer2 = {
        EOF: 1,
        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
        setInput: function setInput(input, yy) {
          this.yy = yy || this.yy || {};
          this._input = input;
          this._more = this._backtrack = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          };
          if (this.options.ranges) {
            this.yylloc.range = [0, 0];
          }
          this.offset = 0;
          return this;
        },
        input: function input() {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges) {
            this.yylloc.range[1]++;
          }
          this._input = this._input.slice(1);
          return ch;
        },
        unput: function unput(ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len);
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
          }
          var r = this.yylloc.range;
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
          };
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          this.yyleng = this.yytext.length;
          return this;
        },
        more: function more() {
          this._more = true;
          return this;
        },
        reject: function reject() {
          if (this.options.backtrack_lexer) {
            this._backtrack = true;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
          return this;
        },
        less: function less(n) {
          this.unput(this.match.slice(n));
        },
        pastInput: function pastInput() {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function upcomingInput() {
          var next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        showPosition: function showPosition() {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },
        test_match: function test_match(match, indexed_rule) {
          var token, lines, backup;
          if (this.options.backtrack_lexer) {
            backup = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            };
            if (this.options.ranges) {
              backup.yylloc.range = this.yylloc.range.slice(0);
            }
          }
          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno += lines.length;
          }
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
          }
          this._more = false;
          this._backtrack = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) {
            this.done = false;
          }
          if (token) {
            return token;
          } else if (this._backtrack) {
            for (var k in backup) {
              this[k] = backup[k];
            }
            return false;
          }
          return false;
        },
        next: function next() {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input) {
            this.done = true;
          }
          var token, match, tempMatch, index;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
              match = tempMatch;
              index = i;
              if (this.options.backtrack_lexer) {
                token = this.test_match(tempMatch, rules[i]);
                if (token !== false) {
                  return token;
                } else if (this._backtrack) {
                  match = false;
                  continue;
                } else {
                  return false;
                }
              } else if (!this.options.flex) {
                break;
              }
            }
          }
          if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
              return token;
            }
            return false;
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
        },
        lex: function lex() {
          var r = this.next();
          if (r) {
            return r;
          } else {
            return this.lex();
          }
        },
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },
        popState: function popState() {
          var n = this.conditionStack.length - 1;
          if (n > 0) {
            return this.conditionStack.pop();
          } else {
            return this.conditionStack[0];
          }
        },
        _currentRules: function _currentRules() {
          if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          } else {
            return this.conditions["INITIAL"].rules;
          }
        },
        topState: function topState(n) {
          n = this.conditionStack.length - 1 - Math.abs(n || 0);
          if (n >= 0) {
            return this.conditionStack[n];
          } else {
            return "INITIAL";
          }
        },
        pushState: function pushState(condition) {
          this.begin(condition);
        },
        stateStackSize: function stateStackSize() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
          var YYSTATE = YY_START;
          switch ($avoiding_name_collisions) {
            case 0:
              break;
            case 1:
              return 7;
              break;
            case 2:
              return 6;
              break;
            case 3:
              return 8;
              break;
            case 4:
              return 35;
              break;
            case 5:
              return 33;
              break;
            case 6:
              return 33;
              break;
            case 7:
              return 34;
              break;
            case 8:
              return 34;
              break;
            case 9:
              return 9;
              break;
            case 10:
              return 10;
              break;
            case 11:
              return 27;
              break;
            case 12:
              return 29;
              break;
            case 13:
              return "|";
              break;
            case 14:
              return 19;
              break;
            case 15:
              return 18;
              break;
            case 16:
              return 21;
              break;
            case 17:
              return 20;
              break;
            case 18:
              return 17;
              break;
            case 19:
              return 16;
              break;
            case 20:
              return 15;
              break;
            case 21:
              return 32;
              break;
            case 22:
              return 30;
              break;
            case 23:
              return 31;
              break;
            case 24:
              return 31;
              break;
            case 25:
              return 25;
              break;
            case 26:
              return "INVALID";
              break;
            case 27:
              return 5;
              break;
          }
        },
        rules: [/^(?:\s+)/, /^(?:AND\b)/, /^(?:OR\b)/, /^(?:NOT\b)/, /^(?:NULL\b)/, /^(?:TRUE\b)/, /^(?:true\b)/, /^(?:FALSE\b)/, /^(?:false\b)/, /^(?:\()/, /^(?:\))/, /^(?:\[)/, /^(?:\])/, /^(?:\|)/, /^(?:<=)/, /^(?:<)/, /^(?:>=)/, /^(?:>)/, /^(?:!=)/, /^(?:==)/, /^(?:=)/, /^(?:-?[0-9]+(\.[0-9]+)?\b)/, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/, /^(?:'[^\']*')/, /^(?:"[^\"]*")/, /^(?:\.)/, /^(?:.)/, /^(?:$)/],
        conditions: {
          "INITIAL": {
            "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
            "inclusive": true
          }
        }
      };
      return lexer2;
    }();
    parser2.lexer = lexer;
    function Parser() {
      this.yy = {};
    }
    Parser.prototype = parser2;
    parser2.Parser = Parser;
    return new Parser();
  }();
  var accessParser = parser;

  // extensions/amp-access/0.1/access-expr.js
  function evaluateAccessExpr(expr, data) {
    try {
      accessParser.yy = data;
      return !!accessParser.parse(expr);
    } finally {
      accessParser.yy = null;
    }
  }

  // extensions/amp-subscriptions/0.1/expr.js
  function evaluateExpr(expr, data) {
    return evaluateAccessExpr(expr, data);
  }

  // extensions/amp-subscriptions/0.1/local-subscription-platform-renderer.js
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
  var LocalSubscriptionPlatformRenderer = /* @__PURE__ */ function() {
    function LocalSubscriptionPlatformRenderer2(ampdoc, dialog, serviceAdapter) {
      _classCallCheck18(this, LocalSubscriptionPlatformRenderer2);
      this.ampdoc_ = ampdoc;
      this.rootNode_ = ampdoc.getRootNode();
      this.dialog_ = dialog;
      this.templates_ = Services.templatesForDoc(ampdoc);
      this.serviceAdapter_ = serviceAdapter;
    }
    _createClass17(LocalSubscriptionPlatformRenderer2, [{
      key: "render",
      value: function render(renderState) {
        return Promise.all([this.renderActions_(renderState), this.renderDialog_(renderState)]);
      }
    }, {
      key: "reset",
      value: function reset() {
        this.dialog_.close();
        return this.renderActionsInNode_(dict(), this.rootNode_, function() {
          return false;
        });
      }
    }, {
      key: "renderActions_",
      value: function renderActions_(renderState) {
        this.renderActionsInNode_(renderState, this.rootNode_, evaluateExpr);
      }
    }, {
      key: "renderDialog_",
      value: function renderDialog_(authResponse) {
        var _this = this;
        return this.ampdoc_.whenReady().then(function() {
          var candidates = _this.ampdoc_.getRootNode().querySelectorAll("[subscriptions-dialog][subscriptions-display]");
          for (var i = 0; i < candidates.length; i++) {
            var candidate = candidates[i];
            var expr = candidate.getAttribute("subscriptions-display");
            if (expr && evaluateExpr(expr, authResponse)) {
              return candidate;
            }
          }
        }).then(function(candidate) {
          if (!candidate) {
            return;
          }
          if (candidate.tagName == "TEMPLATE") {
            return _this.templates_.renderTemplate(candidate, authResponse).then(function(element) {
              var renderState = authResponse;
              return _this.renderActionsInNode_(renderState, element, evaluateExpr);
            });
          }
          var clone = candidate.cloneNode(true);
          clone.removeAttribute("subscriptions-dialog");
          clone.removeAttribute("subscriptions-display");
          return clone;
        }).then(function(element) {
          if (!element) {
            return;
          }
          return _this.dialog_.open(element, true);
        });
      }
    }, {
      key: "renderActionsInNode_",
      value: function renderActionsInNode_(renderState, rootNode, evaluateExpr2) {
        var _this2 = this;
        return this.ampdoc_.whenReady().then(function() {
          var querySelectors = '[subscriptions-action], [subscriptions-section="actions"], [subscriptions-actions]';
          var actionCandidates = rootNode.querySelectorAll(querySelectors);
          for (var i = 0; i < actionCandidates.length; i++) {
            var candidate = actionCandidates[i];
            var expr = candidate.getAttribute("subscriptions-display");
            if (expr && evaluateExpr2(expr, renderState)) {
              candidate.classList.add("i-amphtml-subs-display");
              if (candidate.getAttribute("subscriptions-service") && candidate.getAttribute("subscriptions-action") && candidate.getAttribute("subscriptions-decorate") !== "false" && !candidate.hasAttribute("i-amphtml-subs-decorated")) {
                _this2.serviceAdapter_.decorateServiceAction(candidate, candidate.getAttribute("subscriptions-service"), candidate.getAttribute("subscriptions-action"), null);
                candidate.setAttribute("i-amphtml-subs-decorated", true);
              }
            } else {
              candidate.classList.remove("i-amphtml-subs-display");
            }
          }
          return rootNode;
        });
      }
    }]);
    return LocalSubscriptionPlatformRenderer2;
  }();

  // extensions/amp-subscriptions/0.1/url-builder.js
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
  var UrlBuilder = /* @__PURE__ */ function() {
    function UrlBuilder2(ampdoc, readerIdPromise) {
      _classCallCheck19(this, UrlBuilder2);
      var headNode = ampdoc.getHeadNode();
      this.urlReplacements_ = Services.urlReplacementsForDoc(headNode);
      this.readerIdPromise_ = readerIdPromise;
      this.authResponse_ = null;
    }
    _createClass18(UrlBuilder2, [{
      key: "setAuthResponse",
      value: function setAuthResponse(authResponse) {
        this.authResponse_ = authResponse;
      }
    }, {
      key: "buildUrl",
      value: function buildUrl(url, useAuthData) {
        var _this = this;
        return this.prepareUrlVars_(useAuthData).then(function(vars) {
          return _this.urlReplacements_.expandUrlAsync(url, vars);
        });
      }
    }, {
      key: "collectUrlVars",
      value: function collectUrlVars(url, useAuthData) {
        var _this2 = this;
        return this.prepareUrlVars_(useAuthData).then(function(vars) {
          return _this2.urlReplacements_.collectVars(url, vars);
        });
      }
    }, {
      key: "prepareUrlVars_",
      value: function prepareUrlVars_(useAuthData) {
        var _this3 = this;
        return this.readerIdPromise_.then(function(readerId) {
          var vars = {
            "READER_ID": readerId,
            "ACCESS_READER_ID": readerId
          };
          if (useAuthData) {
            vars["AUTHDATA"] = function(field) {
              if (_this3.authResponse_) {
                return getValueForExpr(_this3.authResponse_, field);
              }
              return void 0;
            };
          }
          return vars;
        });
      }
    }]);
    return UrlBuilder2;
  }();

  // extensions/amp-subscriptions/0.1/local-subscription-platform-base.js
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
  var CLICK_HANDLED_EVENT_PROPERTY = "_AMP_SUBSCRIPTIONS_CLICK_HANDLED";
  var LocalSubscriptionBasePlatform = /* @__PURE__ */ function() {
    function LocalSubscriptionBasePlatform2(ampdoc, platformConfig, serviceAdapter) {
      _classCallCheck20(this, LocalSubscriptionBasePlatform2);
      this.ampdoc_ = ampdoc;
      this.rootNode_ = ampdoc.getRootNode();
      this.serviceConfig_ = platformConfig;
      this.pingbackAllEntitlements_ = !!this.serviceConfig_["pingbackAllEntitlements"];
      this.serviceAdapter_ = serviceAdapter;
      this.urlBuilder_ = new UrlBuilder(this.ampdoc_, this.serviceAdapter_.getReaderId("local"));
      this.subscriptionAnalytics_ = serviceAdapter.getAnalytics();
      userAssert(this.serviceConfig_["actions"], "Actions have not been defined in the service config");
      this.actions_ = new Actions(this.ampdoc_, this.urlBuilder_, this.subscriptionAnalytics_, this.validateActionMap(this.serviceConfig_["actions"]));
      this.renderer_ = new LocalSubscriptionPlatformRenderer(this.ampdoc_, serviceAdapter.getDialog(), this.serviceAdapter_);
    }
    _createClass19(LocalSubscriptionBasePlatform2, [{
      key: "getPlatformKey",
      value: function getPlatformKey() {
        return "local";
      }
    }, {
      key: "validateActionMap",
      value: function validateActionMap(actionMap) {
        userAssert(actionMap[Action.LOGIN], 'Action "login" is not present in action map');
        userAssert(actionMap[Action.SUBSCRIBE], 'Action "subscribe" is not present in action map');
        return actionMap;
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this = this;
        var handleClickOncePerEvent = function handleClickOncePerEvent2(e) {
          if (e[CLICK_HANDLED_EVENT_PROPERTY]) {
            return;
          }
          e[CLICK_HANDLED_EVENT_PROPERTY] = true;
          var element = closestAncestorElementBySelector(dev().assertElement(e.target), "[subscriptions-action]");
          _this.handleClick_(element);
        };
        this.rootNode_.addEventListener("click", handleClickOncePerEvent);
        if (this.rootNode_.body) {
          this.rootNode_.body.addEventListener("click", handleClickOncePerEvent);
        }
      }
    }, {
      key: "handleClick_",
      value: function handleClick_(element) {
        if (element) {
          var action = element.getAttribute("subscriptions-action");
          var serviceAttr = element.getAttribute("subscriptions-service");
          if (serviceAttr == "local") {
            this.executeAction(action, element.id);
          } else if ((serviceAttr || "auto") == "auto") {
            if (action == Action.LOGIN) {
              var platform = this.serviceAdapter_.selectPlatformForLogin();
              this.serviceAdapter_.delegateActionToService(action, platform.getPlatformKey(), element.id);
            } else {
              this.executeAction(action, element.id);
            }
          } else if (serviceAttr) {
            this.serviceAdapter_.delegateActionToService(action, serviceAttr, element.id);
          }
        }
      }
    }, {
      key: "activate",
      value: function activate(entitlement) {
        var _this2 = this;
        this.createRenderState_(entitlement).then(function(renderState) {
          _this2.renderer_.render(renderState);
        });
      }
    }, {
      key: "createRenderState_",
      value: function createRenderState_(entitlement) {
        var _this3 = this;
        var renderState = entitlement.json();
        return this.serviceAdapter_.getScoreFactorStates().then(function(scoresValues) {
          renderState["factors"] = scoresValues;
          return _this3.urlBuilder_.setAuthResponse(renderState);
        }).then(function() {
          return _this3.actions_.build();
        }).then(function() {
          return renderState;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.renderer_.reset();
      }
    }, {
      key: "executeAction",
      value: function executeAction(action) {
        var _this4 = this;
        var actionExecution = this.actions_.execute(action);
        return actionExecution.then(function(result) {
          if (result) {
            _this4.serviceAdapter_.resetPlatforms();
          }
          return !!result;
        });
      }
    }, {
      key: "isPrerenderSafe",
      value: function isPrerenderSafe() {
        return false;
      }
    }, {
      key: "getSupportedScoreFactor",
      value: function getSupportedScoreFactor(unusedFactor) {
        return 0;
      }
    }, {
      key: "getBaseScore",
      value: function getBaseScore() {
        return this.serviceConfig_["baseScore"] || 0;
      }
    }, {
      key: "getEntitlements",
      value: function getEntitlements() {
      }
    }, {
      key: "pingback",
      value: function pingback(unusedEntitlement) {
      }
    }, {
      key: "pingbackReturnsAllEntitlements",
      value: function pingbackReturnsAllEntitlements() {
        return this.pingbackAllEntitlements_;
      }
    }, {
      key: "isPingbackEnabled",
      value: function isPingbackEnabled() {
        return false;
      }
    }, {
      key: "decorateUI",
      value: function decorateUI(unusedNode, unusedAction, unusedOptions) {
      }
    }]);
    return LocalSubscriptionBasePlatform2;
  }();

  // extensions/amp-access/0.1/iframe-api/messenger.js
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
  var SENTINEL = "__AMP__";
  var Messenger = /* @__PURE__ */ function() {
    function Messenger2(win, targetOrCallback, targetOrigin) {
      _classCallCheck21(this, Messenger2);
      this.win_ = win;
      this.targetOrCallback_ = targetOrCallback;
      this.targetOrigin_ = targetOrigin;
      this.target_ = null;
      this.onCommand_ = null;
      this.boundHandleEvent_ = this.handleEvent_.bind(this);
      this.requestId_ = 0;
      this.waiting_ = {};
    }
    _createClass20(Messenger2, [{
      key: "connect",
      value: function connect(onCommand) {
        if (this.onCommand_) {
          throw new Error("already connected");
        }
        this.onCommand_ = onCommand;
        this.win_.addEventListener("message", this.boundHandleEvent_);
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.onCommand_) {
          this.onCommand_ = null;
          this.win_.removeEventListener("message", this.boundHandleEvent_);
        }
      }
    }, {
      key: "isConnected",
      value: function isConnected() {
        return this.targetOrigin_ != null;
      }
    }, {
      key: "getTarget",
      value: function getTarget() {
        var target = this.getOptionalTarget_();
        if (!target) {
          throw new Error("not connected");
        }
        return target;
      }
    }, {
      key: "getOptionalTarget_",
      value: function getOptionalTarget_() {
        if (this.onCommand_ && !this.target_) {
          if (typeof this.targetOrCallback_ == "function") {
            this.target_ = this.targetOrCallback_();
          } else {
            this.target_ = this.targetOrCallback_;
          }
        }
        return this.target_;
      }
    }, {
      key: "getTargetOrigin",
      value: function getTargetOrigin() {
        if (this.targetOrigin_ == null) {
          throw new Error("not connected");
        }
        return this.targetOrigin_;
      }
    }, {
      key: "sendCommand",
      value: function sendCommand(cmd, opt_payload) {
        this.sendCommand_(void 0, cmd, opt_payload);
      }
    }, {
      key: "sendCommandRsvp",
      value: function sendCommandRsvp(cmd, opt_payload) {
        var rsvpId = String(++this.requestId_);
        var resolver = null;
        var promise = new Promise(function(resolve) {
          resolver = resolve;
        });
        this.waiting_[rsvpId] = {
          promise,
          resolver
        };
        this.sendCommand_(rsvpId, cmd, opt_payload);
        return promise;
      }
    }, {
      key: "sendCommand_",
      value: function sendCommand_(rsvpId, cmd, opt_payload) {
        var target = this.getTarget();
        var targetOrigin = cmd == "connect" ? this.targetOrigin_ != null ? this.targetOrigin_ : "*" : this.getTargetOrigin();
        target.postMessage({
          "sentinel": SENTINEL,
          "_rsvp": rsvpId,
          "cmd": cmd,
          "payload": opt_payload || null
        }, targetOrigin);
      }
    }, {
      key: "handleEvent_",
      value: function handleEvent_(e) {
        var _this = this;
        var event = e;
        var data = event.data;
        if (!data || data["sentinel"] != SENTINEL) {
          return;
        }
        var origin = event.origin;
        var cmd = data["cmd"];
        var payload = data["payload"] || null;
        if (this.targetOrigin_ == null && cmd == "start") {
          this.targetOrigin_ = origin;
        }
        if (this.targetOrigin_ == null && event.source) {
          if (this.getOptionalTarget_() == event.source) {
            this.targetOrigin_ = origin;
          }
        }
        if (origin != this.targetOrigin_) {
          return;
        }
        var rsvpId = data["_rsvp"];
        var rsvp = !!rsvpId && cmd != "rsvp";
        var result = this.handleCommand_(rsvpId, cmd, payload);
        if (rsvp) {
          Promise.resolve(result).then(function(result2) {
            _this.sendCommand_(rsvpId, "rsvp", {
              "result": result2
            });
          }, function(reason) {
            _this.sendCommand_(rsvpId, "rsvp", {
              "error": String(reason)
            });
          });
        }
      }
    }, {
      key: "handleCommand_",
      value: function handleCommand_(rsvpId, cmd, payload) {
        if (cmd == "rsvp") {
          var waiting = rsvpId && this.waiting_[rsvpId];
          if (waiting) {
            if ("error" in payload) {
              waiting.resolver(Promise.reject(new Error(payload["error"])));
            } else {
              waiting.resolver(payload["result"]);
            }
            delete this.waiting_[rsvpId];
          }
          return;
        }
        return this.onCommand_(cmd, payload);
      }
    }]);
    return Messenger2;
  }();

  // extensions/amp-subscriptions/0.1/local-subscription-platform-iframe.js
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var LocalSubscriptionIframePlatform = /* @__PURE__ */ function(_LocalSubscriptionBas) {
    _inherits(LocalSubscriptionIframePlatform2, _LocalSubscriptionBas);
    var _super = _createSuper(LocalSubscriptionIframePlatform2);
    function LocalSubscriptionIframePlatform2(ampdoc, platformConfig, serviceAdapter) {
      var _this;
      _classCallCheck22(this, LocalSubscriptionIframePlatform2);
      _this = _super.call(this, ampdoc, platformConfig, serviceAdapter);
      devAssert(_this.serviceConfig_["type"] == "iframe", "iframe initialized called without iframe config type");
      _this.iframeSrc_ = userAssert(_this.serviceConfig_["iframeSrc"], '"iframeSrc" URL must be specified');
      assertHttpsUrl(_this.iframeSrc_, "iframe Url");
      _this.iframeVars_ = _this.serviceConfig_["iframeVars"] || null;
      if (_this.iframeVars_) {
        userAssert(isArray(_this.iframeVars_), '"iframeVars" must be an array');
      }
      _this.targetOrigin_ = parseUrlDeprecated(_this.iframeSrc_).origin;
      _this.connectedResolver_ = null;
      _this.connectedPromise_ = null;
      _this.iframe_ = ampdoc.win.document.createElement("iframe");
      toggle(_this.iframe_, false);
      _this.messenger_ = new Messenger(_this.ampdoc_.win, function() {
        return _this.iframe_.contentWindow;
      }, _this.targetOrigin_);
      _this.configPromise_ = null;
      _this.initializeListeners_();
      return _this;
    }
    _createClass21(LocalSubscriptionIframePlatform2, [{
      key: "getEntitlements",
      value: function getEntitlements() {
        var _this2 = this;
        return this.connect().then(function() {
          return _this2.messenger_.sendCommandRsvp("authorize", {}).then(function(res) {
            res.source = "local-iframe";
            return res;
          }).then(function(resJson) {
            return Entitlement.parseFromJson(resJson);
          });
        });
      }
    }, {
      key: "isPingbackEnabled",
      value: function isPingbackEnabled() {
        return true;
      }
    }, {
      key: "pingback",
      value: function pingback(selectedEntitlement) {
        var _this3 = this;
        return this.connect().then(function() {
          return _this3.messenger_.sendCommandRsvp("pingback", {
            entitlement: selectedEntitlement
          });
        });
      }
    }, {
      key: "connect",
      value: function connect() {
        if (!this.connectedPromise_) {
          var deferred = new Deferred();
          this.connectedPromise_ = deferred.promise;
          this.connectedResolver_ = deferred.resolve;
          this.configPromise_ = this.resolveConfig_();
          this.messenger_.connect(this.handleCommand_.bind(this));
          this.ampdoc_.getBody().appendChild(this.iframe_);
          this.iframe_.src = this.iframeSrc_;
        }
        return this.connectedPromise_;
      }
    }, {
      key: "resolveConfig_",
      value: function resolveConfig_() {
        var _this4 = this;
        return new Promise(function(resolve) {
          var configJson = parseJson(JSON.stringify(_this4.serviceConfig_));
          var pageConfig = _this4.serviceAdapter_.getPageConfig();
          configJson["pageConfig"] = {
            publicationId: pageConfig.getPublicationId(),
            productId: pageConfig.getProductId(),
            encryptedDocumentKey: _this4.serviceAdapter_.getEncryptedDocumentKey("local") || null
          };
          if (_this4.iframeVars_) {
            var varsString = _this4.iframeVars_.join("&");
            _this4.urlBuilder_.collectUrlVars(varsString, false).then(function(vars) {
              configJson["iframeVars"] = vars;
              resolve(configJson);
            });
          } else {
            resolve(configJson);
          }
        });
      }
    }, {
      key: "handleCommand_",
      value: function handleCommand_(cmd, unusedPayload) {
        var _this5 = this;
        if (cmd === "connect") {
          this.configPromise_.then(function(configJson) {
            _this5.messenger_.sendCommandRsvp("start", {
              "protocol": "amp-subscriptions",
              "config": configJson
            }).then(function() {
              if (_this5.connectedResolver_) {
                _this5.connectedResolver_();
                _this5.connectedResolver_ = null;
              }
            });
          });
        }
      }
    }]);
    return LocalSubscriptionIframePlatform2;
  }(LocalSubscriptionBasePlatform);

  // extensions/amp-subscriptions/0.1/local-subscription-platform-remote.js
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
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var LocalSubscriptionRemotePlatform = /* @__PURE__ */ function(_LocalSubscriptionBas) {
    _inherits2(LocalSubscriptionRemotePlatform2, _LocalSubscriptionBas);
    var _super = _createSuper2(LocalSubscriptionRemotePlatform2);
    function LocalSubscriptionRemotePlatform2(ampdoc, platformConfig, serviceAdapter) {
      var _this;
      _classCallCheck23(this, LocalSubscriptionRemotePlatform2);
      _this = _super.call(this, ampdoc, platformConfig, serviceAdapter);
      _this.authorizationUrl_ = assertHttpsUrl(userAssert(_this.serviceConfig_["authorizationUrl"], "Service config does not have authorization Url"), "Authorization Url");
      _this.xhr_ = Services.xhrFor(_this.ampdoc_.win);
      _this.pingbackUrl_ = _this.serviceConfig_["pingbackUrl"] || null;
      _this.initializeListeners_();
      return _this;
    }
    _createClass22(LocalSubscriptionRemotePlatform2, [{
      key: "getEntitlements",
      value: function getEntitlements() {
        var _this2 = this;
        var fetchUrlPromise = this.urlBuilder_.buildUrl(this.authorizationUrl_, false);
        var meteringStatePromise = this.serviceAdapter_.loadMeteringState();
        return Promise.all([fetchUrlPromise, meteringStatePromise]).then(function(results) {
          var fetchUrl = results[0];
          var meteringState = results[1];
          if (meteringState) {
            fetchUrl = addParamToUrl(fetchUrl, "meteringState", btoa(JSON.stringify(meteringState)));
          }
          var encryptedDocumentKey = _this2.serviceAdapter_.getEncryptedDocumentKey("local");
          if (encryptedDocumentKey) {
            fetchUrl = addParamToUrl(fetchUrl, "crypt", encryptedDocumentKey);
          }
          return _this2.xhr_.fetchJson(fetchUrl, {
            credentials: "include"
          }).then(function(res) {
            return res.json();
          }).then(function(resJson) {
            var promises = [];
            if (resJson.metering && resJson.metering.state) {
              promises.push(_this2.serviceAdapter_.saveMeteringState(resJson.metering.state));
            }
            return Promise.all(promises).then(function() {
              return Entitlement.parseFromJson(resJson);
            });
          });
        });
      }
    }, {
      key: "isPingbackEnabled",
      value: function isPingbackEnabled() {
        return !!this.pingbackUrl_;
      }
    }, {
      key: "stringifyPingbackData_",
      value: function stringifyPingbackData_(entitlements) {
        if (isArray(entitlements)) {
          var entitlementArray = [];
          entitlements.forEach(function(ent) {
            entitlementArray.push(ent.jsonForPingback());
          });
          return JSON.stringify(entitlementArray);
        }
        return JSON.stringify(entitlements.jsonForPingback());
      }
    }, {
      key: "pingback",
      value: function pingback(selectedEntitlement) {
        var _this3 = this;
        if (!this.isPingbackEnabled) {
          return;
        }
        var pingbackUrl = devAssert(this.pingbackUrl_, "pingbackUrl is null");
        var promise = this.urlBuilder_.buildUrl(pingbackUrl, true);
        return promise.then(function(url) {
          return _this3.xhr_.sendSignal(url, {
            method: "POST",
            credentials: "include",
            headers: dict({
              "Content-Type": "text/plain"
            }),
            body: _this3.stringifyPingbackData_(selectedEntitlement)
          });
        });
      }
    }]);
    return LocalSubscriptionRemotePlatform2;
  }(LocalSubscriptionBasePlatform);

  // extensions/amp-subscriptions/0.1/local-subscription-platform.js
  function localSubscriptionPlatformFactory(ampdoc, platformConfig, serviceAdapter) {
    if (platformConfig["type"] === "iframe") {
      return new LocalSubscriptionIframePlatform(ampdoc, platformConfig, serviceAdapter);
    }
    return new LocalSubscriptionRemotePlatform(ampdoc, platformConfig, serviceAdapter);
  }

  // extensions/amp-subscriptions/0.1/viewer-subscription-platform.js
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
  var ViewerSubscriptionPlatform = /* @__PURE__ */ function() {
    function ViewerSubscriptionPlatform2(ampdoc, platformConfig, serviceAdapter, origin) {
      _classCallCheck24(this, ViewerSubscriptionPlatform2);
      this.ampdoc_ = ampdoc;
      this.serviceAdapter_ = serviceAdapter;
      this.pageConfig_ = serviceAdapter.getPageConfig();
      this.platform_ = localSubscriptionPlatformFactory(ampdoc, platformConfig, serviceAdapter);
      this.viewer_ = Services.viewerForDoc(this.ampdoc_);
      this.viewer_.onMessage("subscriptionchange", this.subscriptionChange_.bind(this));
      this.jwtHelper_ = new JwtHelper(ampdoc.win);
      this.publicationId_ = this.pageConfig_.getPublicationId();
      this.currentProductId_ = this.pageConfig_.getProductId();
      this.origin_ = origin;
      this.timer_ = Services.timerFor(ampdoc.win);
    }
    _createClass23(ViewerSubscriptionPlatform2, [{
      key: "isPrerenderSafe",
      value: function isPrerenderSafe() {
        return true;
      }
    }, {
      key: "getEntitlements",
      value: function getEntitlements() {
        var _this = this;
        devAssert(this.currentProductId_, "Current product is not set");
        var authRequest = dict({
          "publicationId": this.publicationId_,
          "productId": this.currentProductId_,
          "origin": this.origin_
        });
        var encryptedDocumentKey;
        var cryptokeysNames = this.viewer_.getParam("cryptokeys") || "google.com";
        if (cryptokeysNames) {
          var keyNames = cryptokeysNames.split(",");
          for (var i = 0; i != keyNames.length; i++) {
            encryptedDocumentKey = this.serviceAdapter_.getEncryptedDocumentKey(keyNames[i]);
            if (encryptedDocumentKey) {
              break;
            }
          }
        }
        if (encryptedDocumentKey) {
          authRequest["encryptedDocumentKey"] = encryptedDocumentKey;
        }
        return this.timer_.timeoutPromise(ENTITLEMENTS_REQUEST_TIMEOUT, this.viewer_.sendMessageAwaitResponse("auth", authRequest)).then(function(entitlementData) {
          entitlementData = entitlementData || {};
          var deprecatedError = entitlementData["error"];
          var authData = entitlementData["authorization"];
          var decryptedDocumentKey = entitlementData["decryptedDocumentKey"];
          if (deprecatedError) {
            throw new Error(deprecatedError.message);
          }
          if (!authData) {
            return Entitlement.empty("local");
          }
          return _this.verifyAuthToken_(authData, decryptedDocumentKey).catch(function(reason) {
            _this.sendAuthTokenErrorToViewer_(reason.message);
            throw reason;
          });
        });
      }
    }, {
      key: "verifyAuthToken_",
      value: function verifyAuthToken_(token, decryptedDocumentKey) {
        var _this2 = this;
        return new Promise(function(resolve) {
          var origin = getWinOrigin(_this2.ampdoc_.win);
          var sourceOrigin = getSourceOrigin(_this2.ampdoc_.win.location);
          var decodedData = _this2.jwtHelper_.decode(token);
          var currentProductId = userAssert(_this2.pageConfig_.getProductId(), "Product id is null");
          if (decodedData["aud"] != origin && decodedData["aud"] != sourceOrigin) {
            throw user().createError('The mismatching "aud" field: ' + decodedData["aud"]);
          }
          if (decodedData["exp"] < Math.floor(Date.now() / 1e3)) {
            throw user().createError("Payload is expired");
          }
          var entitlements = decodedData["entitlements"];
          var entitlement = Entitlement.empty("local");
          var entitlementObject;
          if (entitlements) {
            if (Array.isArray(entitlements)) {
              for (var index = 0; index < entitlements.length; index++) {
                if (entitlements[index]["products"].indexOf(currentProductId) !== -1) {
                  entitlementObject = entitlements[index];
                  break;
                }
              }
            } else if (entitlements["products"].indexOf(currentProductId) !== -1) {
              entitlementObject = entitlements;
            }
            if (entitlementObject) {
              entitlement = new Entitlement({
                source: "viewer",
                raw: token,
                granted: true,
                grantReason: entitlementObject.subscriptionToken ? GrantReason.SUBSCRIBER : "",
                dataObject: entitlementObject,
                decryptedDocumentKey
              });
            }
          }
          if (decodedData["metering"] && !entitlement.granted) {
            entitlement = new Entitlement({
              source: decodedData["iss"] || "",
              raw: token,
              granted: true,
              grantReason: GrantReason.METERING,
              dataObject: decodedData["metering"],
              decryptedDocumentKey
            });
          }
          entitlement.service = "local";
          resolve(entitlement);
        });
      }
    }, {
      key: "sendAuthTokenErrorToViewer_",
      value: function sendAuthTokenErrorToViewer_(errorString) {
        this.viewer_.sendMessage("auth-rejected", dict({
          "reason": errorString
        }));
      }
    }, {
      key: "getPlatformKey",
      value: function getPlatformKey() {
        return this.platform_.getPlatformKey();
      }
    }, {
      key: "activate",
      value: function activate() {
      }
    }, {
      key: "reset",
      value: function reset() {
      }
    }, {
      key: "isPingbackEnabled",
      value: function isPingbackEnabled() {
        return this.platform_.isPingbackEnabled();
      }
    }, {
      key: "pingbackReturnsAllEntitlements",
      value: function pingbackReturnsAllEntitlements() {
        return this.platform_.pingbackReturnsAllEntitlements();
      }
    }, {
      key: "pingback",
      value: function pingback(selectedPlatform) {
        this.platform_.pingback(selectedPlatform);
      }
    }, {
      key: "getSupportedScoreFactor",
      value: function getSupportedScoreFactor(factorName) {
        return this.platform_.getSupportedScoreFactor(factorName);
      }
    }, {
      key: "getBaseScore",
      value: function getBaseScore() {
        return 0;
      }
    }, {
      key: "executeAction",
      value: function executeAction(action, sourceId) {
        return this.platform_.executeAction(action, sourceId);
      }
    }, {
      key: "decorateUI",
      value: function decorateUI(element, action, options) {
        return this.platform_.decorateUI(element, action, options);
      }
    }, {
      key: "subscriptionChange_",
      value: function subscriptionChange_() {
        this.serviceAdapter_.resetPlatforms();
      }
    }]);
    return ViewerSubscriptionPlatform2;
  }();

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

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;
  function cancellation() {
    return new Error(CANCELLED);
  }

  // extensions/amp-subscriptions/0.1/viewer-tracker.js
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
  var TAG6 = "local-viewer";
  var ViewerTracker = /* @__PURE__ */ function() {
    function ViewerTracker2(ampdoc) {
      _classCallCheck25(this, ViewerTracker2);
      this.ampdoc_ = ampdoc;
      this.reportViewPromise_ = null;
      this.timer_ = Services.timerFor(ampdoc.win);
      this.viewport_ = Services.viewportForDoc(ampdoc);
    }
    _createClass24(ViewerTracker2, [{
      key: "scheduleView",
      value: function scheduleView(timeToView) {
        var _this = this;
        this.reportViewPromise_ = null;
        return this.ampdoc_.whenReady().then(function() {
          return new Promise(function(resolve) {
            if (_this.ampdoc_.isVisible()) {
              resolve();
            }
            _this.ampdoc_.onVisibilityChanged(function() {
              if (_this.ampdoc_.isVisible()) {
                resolve();
              }
            });
          }).then(function() {
            return _this.reportWhenViewed_(timeToView);
          });
        });
      }
    }, {
      key: "reportWhenViewed_",
      value: function reportWhenViewed_(timeToView) {
        var _this2 = this;
        if (this.reportViewPromise_) {
          return this.reportViewPromise_;
        }
        dev().fine(TAG6, "start view monitoring");
        this.reportViewPromise_ = this.whenViewed_(timeToView).catch(function(reason) {
          dev().fine(TAG6, "view cancelled:", reason);
          _this2.reportViewPromise_ = null;
          throw reason;
        });
        return this.reportViewPromise_;
      }
    }, {
      key: "whenViewed_",
      value: function whenViewed_(timeToView) {
        var _this3 = this;
        if (timeToView == 0) {
          return resolvedPromise();
        }
        var unlistenSet = [];
        return new Promise(function(resolve, reject) {
          unlistenSet.push(_this3.ampdoc_.onVisibilityChanged(function() {
            if (!_this3.ampdoc_.isVisible()) {
              reject(cancellation());
            }
          }));
          var timeoutId = _this3.timer_.delay(resolve, timeToView);
          unlistenSet.push(function() {
            return _this3.timer_.cancel(timeoutId);
          });
          unlistenSet.push(_this3.viewport_.onScroll(resolve));
          unlistenSet.push(listenOnce(_this3.ampdoc_.getRootNode(), "click", resolve));
        }).then(function() {
          unlistenSet.forEach(function(unlisten) {
            return unlisten();
          });
        }, function(reason) {
          unlistenSet.forEach(function(unlisten) {
            return unlisten();
          });
          throw reason;
        });
      }
    }]);
    return ViewerTracker2;
  }();

  // src/utils/story.js
  function isStoryDocument(ampdoc) {
    return ampdoc.waitForBodyOpen().then(function() {
      var body = ampdoc.getBody();
      var childPromise = waitForChildPromise(body, function() {
        return !!body.firstElementChild;
      });
      return Services.timerFor(ampdoc.win).timeoutPromise(2e3, childPromise).then(function() {
        return body.firstElementChild.tagName === "AMP-STORY";
      }, function() {
        return false;
      });
    });
  }

  // extensions/amp-subscriptions/0.1/amp-subscriptions.js
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
  var TAG7 = "amp-subscriptions";
  var SubscriptionService = /* @__PURE__ */ function() {
    function SubscriptionService2(ampdoc) {
      _classCallCheck26(this, SubscriptionService2);
      var configElement = ampdoc.getElementById(TAG7);
      this.ampdoc_ = ampdoc;
      installStylesForDoc(ampdoc, CSS2, function() {
      }, false, TAG7);
      this.initialized_ = null;
      this.renderer_ = new Renderer(ampdoc);
      this.pageConfig_ = null;
      this.platformConfig_ = null;
      this.platformStore_ = null;
      this.configElement_ = user().assertElement(configElement);
      this.subscriptionAnalytics_ = new SubscriptionAnalytics(this.configElement_);
      this.serviceAdapter_ = new ServiceAdapter(this);
      this.dialog_ = new Dialog(ampdoc);
      this.viewerTracker_ = new ViewerTracker(ampdoc);
      this.viewer_ = Services.viewerForDoc(ampdoc);
      this.viewTrackerPromise_ = null;
      this.timer_ = Services.timerFor(ampdoc.win);
      this.doesViewerProvideAuth_ = this.viewer_.hasCapability("auth");
      this.doesViewerProvidePaywall_ = this.doesViewerProvideAuth_ && this.viewer_.hasCapability("paywall");
      this.cid_ = Services.cidForDoc(ampdoc);
      this.platformKeyToReaderIdPromiseMap_ = {};
      this.cryptoHandler_ = new CryptoHandler(ampdoc);
      this.metering_ = null;
    }
    _createClass25(SubscriptionService2, [{
      key: "start",
      value: function start() {
        var _this = this;
        this.initialize_().then(function() {
          _this.subscriptionAnalytics_.event(SubscriptionAnalyticsEvents.STARTED);
          _this.renderer_.toggleLoading(true);
          userAssert(_this.pageConfig_, "Page config is null");
          if (_this.doesViewerProvideAuth_) {
            _this.delegateAuthToViewer_();
            _this.startAuthorizationFlow_(false);
            return;
          }
          userAssert(_this.platformConfig_["services"], "Services not configured in service config");
          var platformKeys = _this.platformConfig_["services"].map(function(service) {
            return service["serviceId"] || "local";
          });
          _this.initializePlatformStore_(platformKeys);
          _this.platformConfig_["services"].forEach(function(service) {
            _this.initializeLocalPlatforms_(service);
          });
          _this.platformStore_.getAvailablePlatforms().forEach(function(subscriptionPlatform) {
            _this.fetchEntitlements_(subscriptionPlatform);
          });
          isStoryDocument(_this.ampdoc_).then(function(isStory) {
            _this.startAuthorizationFlow_(!isStory);
          });
        });
        return this;
      }
    }, {
      key: "getAccessReaderId",
      value: function getAccessReaderId() {
        var _this2 = this;
        return this.initialize_().then(function() {
          return _this2.getReaderId("local");
        });
      }
    }, {
      key: "getAnalytics",
      value: function getAnalytics() {
        return this.subscriptionAnalytics_;
      }
    }, {
      key: "getAuthdataField",
      value: function getAuthdataField(field) {
        var _this3 = this;
        return this.initialize_().then(function() {
          return _this3.platformStore_.getEntitlementPromiseFor("local");
        }).then(function(entitlement) {
          return getValueForExpr(entitlement.json(), field);
        });
      }
    }, {
      key: "getDialog",
      value: function getDialog() {
        return this.dialog_;
      }
    }, {
      key: "getEncryptedDocumentKey",
      value: function getEncryptedDocumentKey(platformKey) {
        return this.cryptoHandler_.getEncryptedDocumentKey(platformKey);
      }
    }, {
      key: "getPageConfig",
      value: function getPageConfig() {
        var pageConfig = devAssert(this.pageConfig_, "Page config is not yet fetched");
        return pageConfig;
      }
    }, {
      key: "getReaderId",
      value: function getReaderId(platformKey) {
        var readerIdPromise = this.platformKeyToReaderIdPromiseMap_[platformKey];
        if (!readerIdPromise) {
          var consent = resolvedPromise();
          var scope = "amp-access" + (platformKey == "local" ? "" : "-" + platformKey);
          readerIdPromise = this.cid_.then(function(cid) {
            return cid.get({
              scope,
              createCookieIfNotPresent: true
            }, consent);
          });
          this.platformKeyToReaderIdPromiseMap_[platformKey] = readerIdPromise;
        }
        return readerIdPromise;
      }
    }, {
      key: "getScoreFactorStates",
      value: function getScoreFactorStates() {
        return this.platformStore_.getScoreFactorStates();
      }
    }, {
      key: "registerPlatform",
      value: function registerPlatform(platformKey, subscriptionPlatformFactory) {
        var _this4 = this;
        return this.initialize_().then(function() {
          if (_this4.doesViewerProvideAuth_) {
            return;
          }
          var matchedServices = _this4.platformConfig_["services"].filter(function(service) {
            return (service.serviceId || "local") === platformKey;
          });
          var matchedServiceConfig = userAssert(matchedServices[0], "No matching services for the ID found");
          var subscriptionPlatform = subscriptionPlatformFactory(matchedServiceConfig, _this4.serviceAdapter_);
          _this4.platformStore_.resolvePlatform(subscriptionPlatform.getPlatformKey(), subscriptionPlatform);
          _this4.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.PLATFORM_REGISTERED, subscriptionPlatform.getPlatformKey());
          _this4.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.PLATFORM_REGISTERED_DEPRECATED, subscriptionPlatform.getPlatformKey());
          _this4.fetchEntitlements_(subscriptionPlatform);
        });
      }
    }, {
      key: "selectPlatformForLogin",
      value: function selectPlatformForLogin() {
        return this.platformStore_.selectPlatformForLogin();
      }
    }, {
      key: "initialize_",
      value: function initialize_() {
        var _this5 = this;
        if (!this.initialized_) {
          var doc = new DocImpl(this.ampdoc_);
          var pageConfigResolver = new PageConfigResolver(doc);
          this.initialized_ = Promise.all([this.getPlatformConfig_(), pageConfigResolver.resolveConfig()]).then(function(promiseValues) {
            _this5.platformConfig_ = promiseValues[0];
            _this5.pageConfig_ = promiseValues[1];
          }).then(function() {
            _this5.maybeEnableMetering_();
          });
        }
        return this.initialized_;
      }
    }, {
      key: "initializeLocalPlatforms_",
      value: function initializeLocalPlatforms_(serviceConfig) {
        if ((serviceConfig["serviceId"] || "local") == "local") {
          this.platformStore_.resolvePlatform("local", localSubscriptionPlatformFactory(this.ampdoc_, serviceConfig, this.serviceAdapter_));
        }
      }
    }, {
      key: "getPlatformConfig_",
      value: function getPlatformConfig_() {
        var _this6 = this;
        return new Promise(function(resolve) {
          var rawContent = tryParseJson(_this6.configElement_.textContent, function(e) {
            throw user().createError('Failed to parse "amp-subscriptions" JSON: ', e);
          });
          resolve(rawContent);
        });
      }
    }, {
      key: "processGrantState_",
      value: function processGrantState_(grantState) {
        this.renderer_.toggleLoading(false);
        this.viewTrackerPromise_ = this.viewerTracker_.scheduleView(2e3);
        if (this.doesViewerProvidePaywall_ && !grantState) {
          return;
        }
        this.renderer_.setGrantState(grantState);
      }
    }, {
      key: "resolveEntitlementsToStore_",
      value: function resolveEntitlementsToStore_(platformKey, entitlement) {
        this.platformStore_.resolveEntitlement(platformKey, entitlement);
        if (entitlement.decryptedDocumentKey) {
          this.cryptoHandler_.tryToDecryptDocument(entitlement.decryptedDocumentKey);
        }
        this.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.ENTITLEMENT_RESOLVED, platformKey);
      }
    }, {
      key: "getEntitlements_",
      value: function getEntitlements_(platform) {
        var _this7 = this;
        return platform.getEntitlements().then(function(entitlements) {
          if (entitlements && entitlements.granted && _this7.cryptoHandler_.isDocumentEncrypted() && !entitlements.decryptedDocumentKey) {
            var logChannel = platform.getPlatformKey() == "local" ? user() : dev();
            logChannel.error(TAG7, platform.getPlatformKey() + ": Subscription granted and encryption enabled, but no decrypted document key returned.");
            return null;
          }
          return entitlements;
        });
      }
    }, {
      key: "fetchEntitlements_",
      value: function fetchEntitlements_(subscriptionPlatform) {
        var _this8 = this;
        if (this.isPageFree_()) {
          return resolvedPromise();
        }
        var timeout = ENTITLEMENTS_REQUEST_TIMEOUT;
        if (getMode().development || getMode().localDev) {
          timeout = ENTITLEMENTS_REQUEST_TIMEOUT * 2;
        }
        var visiblePromise = subscriptionPlatform.isPrerenderSafe() ? resolvedPromise() : this.ampdoc_.whenFirstVisible();
        return visiblePromise.then(function() {
          return _this8.timer_.timeoutPromise(timeout, _this8.getEntitlements_(subscriptionPlatform)).then(function(entitlement) {
            entitlement = entitlement || Entitlement.empty(subscriptionPlatform.getPlatformKey());
            _this8.resolveEntitlementsToStore_(subscriptionPlatform.getPlatformKey(), entitlement);
            return entitlement;
          }).catch(function(reason) {
            var platformKey = subscriptionPlatform.getPlatformKey();
            _this8.platformStore_.reportPlatformFailureAndFallback(platformKey);
            throw user().createError("fetch entitlements failed for " + platformKey, reason);
          });
        });
      }
    }, {
      key: "initializePlatformStore_",
      value: function initializePlatformStore_(platformKeys) {
        var fallbackEntitlement = this.platformConfig_["fallbackEntitlement"] ? Entitlement.parseFromJson(this.platformConfig_["fallbackEntitlement"]) : Entitlement.empty("local");
        this.platformStore_ = new PlatformStore(platformKeys, this.platformConfig_["score"], fallbackEntitlement);
        this.maybeAddFreeEntitlement_(this.platformStore_);
      }
    }, {
      key: "delegateAuthToViewer_",
      value: function delegateAuthToViewer_() {
        var _this9 = this;
        var platformKeys = ["local"];
        var origin = getWinOrigin(this.ampdoc_.win);
        this.initializePlatformStore_(platformKeys);
        this.platformConfig_["services"].forEach(function(service) {
          if ((service["serviceId"] || "local") == "local") {
            var viewerPlatform = new ViewerSubscriptionPlatform(_this9.ampdoc_, service, _this9.serviceAdapter_, origin);
            _this9.platformStore_.resolvePlatform("local", viewerPlatform);
            _this9.getEntitlements_(viewerPlatform).then(function(entitlement) {
              devAssert(entitlement, "Entitlement is null");
              _this9.resolveEntitlementsToStore_("local", entitlement);
            }).catch(function(reason) {
              _this9.platformStore_.reportPlatformFailureAndFallback("local");
              dev().error(TAG7, "Viewer auth failed:", reason);
            });
          }
        });
      }
    }, {
      key: "startAuthorizationFlow_",
      value: function startAuthorizationFlow_(shouldActivatePlatform) {
        var _this10 = this;
        if (shouldActivatePlatform === void 0) {
          shouldActivatePlatform = true;
        }
        var grantStatusPromise = this.platformStore_.getGrantStatus();
        var grantEntitlementPromise = this.platformStore_.getGrantEntitlement();
        var promises = Promise.all([grantStatusPromise, grantEntitlementPromise]);
        return promises.then(function(results) {
          var granted = results[0];
          var entitlement = results[1];
          var continueAuthorizationFlow = function continueAuthorizationFlow2() {
            return _this10.handleGrantState_({
              granted,
              shouldActivatePlatform
            });
          };
          if (!_this10.metering_) {
            continueAuthorizationFlow();
            return;
          }
          var meteringPlatform = _this10.platformStore_.getPlatform(_this10.metering_.platformKey);
          if (granted) {
            var grantCameFromAmpMetering = entitlement && entitlement.grantReason === GrantReason.METERING && entitlement.service === _this10.metering_.platformKey;
            if (!grantCameFromAmpMetering) {
              continueAuthorizationFlow();
              return;
            }
            var finishAuthorizationFlow = function finishAuthorizationFlow2() {
              _this10.handleGrantState_({
                granted: true,
                shouldActivatePlatform: false
              });
            };
            meteringPlatform.activate(entitlement, entitlement, finishAuthorizationFlow);
            return;
          }
          if (_this10.metering_.entitlementsWereFetchedWithCurrentMeteringState) {
            continueAuthorizationFlow();
            return;
          }
          _this10.metering_.loadMeteringState().then(function(meteringState) {
            if (meteringState) {
              _this10.resetPlatform(_this10.metering_.platformKey);
            } else {
              var emptyEntitlement = Entitlement.empty("local");
              var restartAuthorizationFlow = function restartAuthorizationFlow2() {
                return _this10.startAuthorizationFlow_();
              };
              meteringPlatform.activate(emptyEntitlement, emptyEntitlement, restartAuthorizationFlow);
            }
          });
        });
      }
    }, {
      key: "handleGrantState_",
      value: function handleGrantState_(_ref) {
        var granted = _ref.granted, shouldActivatePlatform = _ref.shouldActivatePlatform;
        this.processGrantState_(granted);
        this.performPingback_();
        if (shouldActivatePlatform) {
          this.selectAndActivatePlatform_();
        }
      }
    }, {
      key: "selectAndActivatePlatform_",
      value: function selectAndActivatePlatform_() {
        var _this11 = this;
        var requireValuesPromise = Promise.all([this.platformStore_.getGrantStatus(), this.platformStore_.selectPlatform(), this.platformStore_.getGrantEntitlement()]);
        return requireValuesPromise.then(function(resolvedValues) {
          var selectedPlatform = resolvedValues[1];
          var grantEntitlement = resolvedValues[2];
          var selectedEntitlement = _this11.platformStore_.getResolvedEntitlementFor(selectedPlatform.getPlatformKey());
          var bestEntitlement = grantEntitlement || selectedEntitlement;
          selectedPlatform.activate(selectedEntitlement, grantEntitlement);
          _this11.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.PLATFORM_ACTIVATED, selectedPlatform.getPlatformKey());
          _this11.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.PLATFORM_ACTIVATED_DEPRECATED, selectedPlatform.getPlatformKey());
          if (bestEntitlement.granted) {
            _this11.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.ACCESS_GRANTED, bestEntitlement.service);
          } else {
            _this11.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.PAYWALL_ACTIVATED, selectedPlatform.getPlatformKey());
            _this11.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.ACCESS_DENIED, selectedPlatform.getPlatformKey());
          }
        });
      }
    }, {
      key: "performPingback_",
      value: function performPingback_() {
        var _this12 = this;
        if (this.viewTrackerPromise_) {
          return this.viewTrackerPromise_.then(function() {
            _this12.platformStore_.getAvailablePlatforms().forEach(function(subscriptionPlatform) {
              if (subscriptionPlatform.isPingbackEnabled()) {
                if (subscriptionPlatform.pingbackReturnsAllEntitlements()) {
                  _this12.platformStore_.getAllPlatformsEntitlements().then(function(resolvedEntitlments) {
                    return subscriptionPlatform.pingback(resolvedEntitlments);
                  });
                } else {
                  _this12.platformStore_.getGrantEntitlement().then(function(grantStateEntitlement) {
                    return subscriptionPlatform.pingback(grantStateEntitlement || Entitlement.empty("local"));
                  });
                }
              }
            });
          });
        }
        return null;
      }
    }, {
      key: "resetPlatforms",
      value: function resetPlatforms() {
        var _this13 = this;
        this.platformStore_ = this.platformStore_.resetPlatformStore();
        this.renderer_.toggleLoading(true);
        if (this.metering_) {
          this.metering_.entitlementsWereFetchedWithCurrentMeteringState = false;
        }
        this.platformStore_.getAvailablePlatforms().forEach(function(subscriptionPlatform) {
          _this13.fetchEntitlements_(subscriptionPlatform);
        });
        this.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.PLATFORM_REAUTHORIZED, "");
        this.subscriptionAnalytics_.serviceEvent(SubscriptionAnalyticsEvents.PLATFORM_REAUTHORIZED_DEPRECATED, "");
        this.startAuthorizationFlow_();
      }
    }, {
      key: "resetPlatform",
      value: function resetPlatform(platformId) {
        this.renderer_.toggleLoading(true);
        this.platformStore_.resetPlatform(platformId);
        var platform = this.platformStore_.getPlatform(platformId);
        this.fetchEntitlements_(platform);
        this.startAuthorizationFlow_();
      }
    }, {
      key: "delegateActionToLocal",
      value: function delegateActionToLocal(action, sourceId) {
        return this.delegateActionToService(action, "local", sourceId);
      }
    }, {
      key: "delegateActionToService",
      value: function delegateActionToService(action, platformKey, sourceId) {
        var _this14 = this;
        if (sourceId === void 0) {
          sourceId = null;
        }
        return new Promise(function(resolve) {
          _this14.platformStore_.onPlatformResolves(platformKey, function(platform) {
            devAssert(platform, "Platform is not registered");
            _this14.subscriptionAnalytics_.event(SubscriptionAnalyticsEvents.ACTION_DELEGATED, dict({
              "action": action,
              "serviceId": platformKey
            }), dict({
              "action": action,
              "status": ActionStatus.STARTED
            }));
            resolve(platform.executeAction(action, sourceId));
          });
        });
      }
    }, {
      key: "decorateServiceAction",
      value: function decorateServiceAction(element, platformKey, action, options) {
        this.platformStore_.onPlatformResolves(platformKey, function(platform) {
          devAssert(platform, "Platform is not registered");
          platform.decorateUI(element, action, options);
        });
      }
    }, {
      key: "maybeAddFreeEntitlement_",
      value: function maybeAddFreeEntitlement_(platformStore) {
        if (!this.isPageFree_()) {
          return;
        }
        platformStore.resolveEntitlement("local", new Entitlement({
          source: "",
          raw: "",
          granted: true,
          grantReason: GrantReason.FREE,
          dataObject: {}
        }));
      }
    }, {
      key: "isPageFree_",
      value: function isPageFree_() {
        return !this.pageConfig_.isLocked() || this.platformConfig_["alwaysGrant"];
      }
    }, {
      key: "maybeEnableMetering_",
      value: function maybeEnableMetering_() {
        var services = this.platformConfig_.services;
        var meteringPlatform = services.find(function(service) {
          return service["enableMetering"];
        });
        if (meteringPlatform) {
          this.metering_ = new Metering({
            platformKey: meteringPlatform.serviceId
          });
        }
      }
    }]);
    return SubscriptionService2;
  }();
  AMP.extension(TAG7, "0.1", function(AMP2) {
    AMP2.registerServiceForDoc("subscriptions", function(ampdoc) {
      return new SubscriptionService(ampdoc).start();
    });
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-subscriptions-0.1.max.js.map
