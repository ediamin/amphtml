(self.AMP=self.AMP||[]).push({n:"amp-link-rewriter",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
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

  // src/core/data-structures/promise.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
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
  function getDataParamsFromAttributes(element, opt_computeParamNameFunc, opt_paramPattern) {
    var computeParamNameFunc = opt_computeParamNameFunc || function(key2) {
      return key2;
    };
    var dataset = element.dataset;
    var params = dict();
    var paramPattern = opt_paramPattern ? opt_paramPattern : /^param(.+)/;
    for (var key in dataset) {
      var _matches = key.match(paramPattern);
      if (_matches) {
        var param = _matches[1][0].toLowerCase() + _matches[1].substr(1);
        params[computeParamNameFunc(param)] = dataset[key];
      }
    }
    return params;
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

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/json.js
  function getChildJsonConfig(element) {
    var scripts = childElementsByTag(element, "script");
    var n = scripts.length;
    if (n !== 1) {
      throw new Error("Found " + scripts.length + " <script> children. Expected 1.");
    }
    var script = scripts[0];
    if (!isJsonScriptTag(script)) {
      throw new Error('<script> child must have type="application/json"');
    }
    try {
      return parseJson(script.textContent);
    } catch (unusedError) {
      throw new Error("Failed to parse <script> contents. Is it valid JSON?");
    }
  }

  // extensions/amp-link-rewriter/0.1/config-options.js
  function getConfigOpts(element) {
    var _config$scopeDocument;
    var config = getConfigJson(element);
    userAssert(config["output"], "amp-link-rewriter: output config property is required");
    return {
      output: config["output"].toString(),
      section: hasOwn(config, "section") ? config["section"] : [],
      attribute: hasOwn(config, "attribute") ? parseAttribute(config["attribute"]) : {},
      vars: hasOwn(config, "vars") ? config["vars"] : {},
      scopeDocument: (_config$scopeDocument = config["scopeDocument"]) != null ? _config$scopeDocument : true
    };
  }
  function getConfigJson(element) {
    var TAG = "amp-link-rewriter";
    try {
      return getChildJsonConfig(element);
    } catch (e) {
      throw user(element).createError("%s: %s", TAG, e);
    }
  }
  function parseAttribute(attribute) {
    var newAttr = {};
    Object.keys(attribute).forEach(function(key) {
      newAttr[key] = "^" + attribute[key] + "$";
    });
    return newAttr;
  }

  // extensions/amp-link-rewriter/0.1/scope.js
  function getScopeElements(ampDoc, configOpts) {
    var doc = ampDoc.getRootNode();
    var cssSelector = configOpts.section.join(" a, ");
    var selection = doc.querySelectorAll("a");
    var filteredSelection = [];
    if (configOpts.section.length !== 0) {
      cssSelector = cssSelector + " a";
      selection = doc.querySelectorAll(cssSelector);
    }
    iterateCursor(selection, function(element) {
      if (hasAttributeValues(element, configOpts)) {
        filteredSelection.push(element);
      }
    });
    return filteredSelection;
  }
  function isElementInScope(htmlElement, configOpts) {
    return !!hasAttributeValues(htmlElement, configOpts) && isBelongsToContainer(htmlElement, configOpts);
  }
  function isBelongsToContainer(htmlElement, configOpts) {
    if (configOpts.section.length === 0) {
      return true;
    }
    return !!closestAncestorElementBySelector(htmlElement, configOpts.section.join(","));
  }
  function hasAttributeValues(htmlElement, configOpts) {
    var anchorAttr = configOpts.attribute;
    var attrKeys = Object.keys(anchorAttr);
    return attrKeys.every(function(key) {
      var reg = new RegExp(anchorAttr[key]);
      return reg.test(htmlElement.getAttribute(key));
    });
  }

  // extensions/amp-link-rewriter/0.1/link-rewriter.js
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
  var WL_ANCHOR_ATTR = ["href", "id", "rel", "rev"];
  var PREFIX_DATA_ATTR = /^vars(.+)/;
  var REG_DOMAIN_URL = /^(?:https?:)?(?:\/\/)?([^\/?]+)/i;
  var PAGE_PROP_ALLOWLIST = {
    "SOURCE_URL": true,
    "DOCUMENT_REFERRER": true
  };
  var LinkRewriter = /* @__PURE__ */ function() {
    function LinkRewriter2(referrer, ampElement, ampDoc) {
      _classCallCheck3(this, LinkRewriter2);
      this.ampDoc_ = ampDoc;
      this.configOpts_ = getConfigOpts(ampElement);
      this.listElements_ = getScopeElements(this.ampDoc_, this.configOpts_);
      this.referrer_ = referrer;
      this.rewrittenUrl_ = "";
      this.urlReplacementService_ = Services.urlReplacementsForDoc(ampElement);
    }
    _createClass2(LinkRewriter2, [{
      key: "handleClick",
      value: function handleClick(anchor) {
        if (!anchor) {
          return;
        }
        this.rewrittenUrl_ = this.configOpts_.output;
        if (this.isRewritten_(anchor)) {
          return;
        }
        if (!this.isNotFiltered_(anchor)) {
          return;
        }
        var sourceTrimmedDomain = Services.documentInfoForDoc(this.ampDoc_).sourceUrl.match(REG_DOMAIN_URL)[1];
        var canonicalTrimmedDomain = Services.documentInfoForDoc(this.ampDoc_).canonicalUrl.match(REG_DOMAIN_URL)[1];
        if (this.isInternalLink_(anchor, [sourceTrimmedDomain, canonicalTrimmedDomain])) {
          return;
        }
        this.setRedirectUrl_(anchor);
      }
    }, {
      key: "isRewritten_",
      value: function isRewritten_(anchor) {
        return anchor.href.match(REG_DOMAIN_URL)[1] === this.rewrittenUrl_.match(REG_DOMAIN_URL)[1];
      }
    }, {
      key: "isNotFiltered_",
      value: function isNotFiltered_(anchor) {
        if (!this.configOpts_.scopeDocument) {
          return isElementInScope(anchor, this.configOpts_);
        }
        return this.isListed_(anchor);
      }
    }, {
      key: "isListed_",
      value: function isListed_(anchor) {
        if (this.listElements_ === null || this.listElements_.length === 0) {
          return true;
        }
        var filtered = this.listElements_.filter(function(element) {
          return element === anchor;
        });
        if (filtered.length > 0) {
          return true;
        }
        return false;
      }
    }, {
      key: "isInternalLink_",
      value: function isInternalLink_(htmlElement, trimmedDomains) {
        var href = htmlElement.href;
        return trimmedDomains.some(function(domain) {
          var domainHrefMatch = href.match(REG_DOMAIN_URL);
          if (!domainHrefMatch) {
            return true;
          }
          return REG_DOMAIN_URL.test(href) && domainHrefMatch[1] === domain;
        });
      }
    }, {
      key: "setRedirectUrl_",
      value: function setRedirectUrl_(htmlElement) {
        this.rewrittenUrl_ = this.replacePageProp_();
        var vars = this.configOpts_.vars;
        if (vars instanceof Object) {
          htmlElement.href = this.replaceVars_(htmlElement, vars);
        }
      }
    }, {
      key: "replacePageProp_",
      value: function replacePageProp_() {
        return this.urlReplacementService_.expandUrlSync(this.rewrittenUrl_, {
          DOCUMENT_REFERRER: this.referrer_
        }, PAGE_PROP_ALLOWLIST);
      }
    }, {
      key: "replaceVars_",
      value: function replaceVars_(htmlElement, vars) {
        var _this = this;
        WL_ANCHOR_ATTR.forEach(function(val) {
          if (htmlElement.getAttribute(val)) {
            vars[val] = htmlElement.getAttribute(val);
          }
        });
        var dataset = getDataParamsFromAttributes(htmlElement, void 0, PREFIX_DATA_ATTR);
        Object.assign(vars, dataset);
        vars["random"] = Math.random().toString(32).substr(2);
        Object.keys(vars).forEach(function(key) {
          if (vars[key]) {
            _this.rewrittenUrl_ = _this.rewrittenUrl_.replace("${" + key + "}", encodeURIComponent(vars[key]));
          }
        });
        this.rewrittenUrl_ = this.rewrittenUrl_.replace(/\${[A-Za-z0-9]+}+/, function() {
          return "";
        });
        return this.rewrittenUrl_;
      }
    }]);
    return LinkRewriter2;
  }();

  // src/url.js
  var SERVING_TYPE_PREFIX = dict({
    "c": true,
    "v": true,
    "a": true,
    "ad": true
  });

  // src/service/navigation.js
  var Priority = {
    LINK_REWRITER_MANAGER: 0,
    ANALYTICS_LINKER: 2
  };

  // extensions/amp-link-rewriter/0.1/amp-link-rewriter.js
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
  var AmpLinkRewriter = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpLinkRewriter2, _AMP$BaseElement);
    var _super = _createSuper(AmpLinkRewriter2);
    function AmpLinkRewriter2(element) {
      var _this;
      _classCallCheck4(this, AmpLinkRewriter2);
      _this = _super.call(this, element);
      _this.rewriter_ = null;
      _this.referrer_ = "";
      return _this;
    }
    _createClass3(AmpLinkRewriter2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        var viewer = Services.viewerForDoc(this.getAmpDoc());
        return this.getAmpDoc().whenReady().then(function() {
          return viewer.getReferrerUrl();
        }).then(function(referrer) {
          return _this2.referrer_ = referrer;
        }).then(this.letsRockIt_.bind(this));
      }
    }, {
      key: "letsRockIt_",
      value: function letsRockIt_() {
        this.rewriter_ = new LinkRewriter(this.referrer_, this.element, this.getAmpDoc());
        this.attachClickEvent_();
      }
    }, {
      key: "attachClickEvent_",
      value: function attachClickEvent_() {
        var _this3 = this;
        var nav = Services.navigationForDoc(this.getAmpDoc());
        nav.registerAnchorMutator(function(anchor) {
          _this3.rewriter_.handleClick(anchor);
        }, Priority.LINK_REWRITER_MANAGER);
        return true;
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout === Layout.NODISPLAY;
      }
    }]);
    return AmpLinkRewriter2;
  }(AMP.BaseElement);
  AMP.extension("amp-link-rewriter", "0.1", function(AMP2) {
    AMP2.registerElement("amp-link-rewriter", AmpLinkRewriter);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-link-rewriter-0.1.max.js.map
