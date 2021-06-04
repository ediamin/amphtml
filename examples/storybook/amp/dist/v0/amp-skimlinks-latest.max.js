(self.AMP=self.AMP||[]).push({n:"amp-skimlinks",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
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
  function scopedQuerySelectorAll(root, selector) {
    if (isScopeSelectorSupported(root)) {
      return root.querySelectorAll(prependSelectorsWith(selector, ":scope"));
    }
    return scopedQuerySelectionFallback(root, selector);
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

  // src/extension-analytics.js
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
  var CustomEventReporter = /* @__PURE__ */ function() {
    function CustomEventReporter2(parent, config) {
      var _this = this;
      _classCallCheck3(this, CustomEventReporter2);
      devAssert(config["triggers"], "Config must have triggers defined");
      this.id_ = parent.getResourceId();
      this.parent_ = parent;
      this.config_ = config;
      for (var event in config["triggers"]) {
        var eventType = config["triggers"][event]["on"];
        devAssert(eventType, "CustomEventReporter config must specify trigger eventType");
        var newEventType = this.getEventTypeInSandbox_(eventType);
        config["triggers"][event]["on"] = newEventType;
      }
      this.parent_.signals().whenSignal(CommonSignals.LOAD_START).then(function() {
        insertAnalyticsElement(_this.parent_, config, true);
      });
    }
    _createClass2(CustomEventReporter2, [{
      key: "trigger",
      value: function trigger(eventType, opt_vars) {
        devAssert(this.config_["triggers"][eventType], "Cannot trigger non initiated eventType");
        triggerAnalyticsEvent(this.parent_, this.getEventTypeInSandbox_(eventType), opt_vars, false);
      }
    }, {
      key: "getEventTypeInSandbox_",
      value: function getEventTypeInSandbox_(eventType) {
        return "sandbox-" + this.id_ + "-" + eventType;
      }
    }]);
    return CustomEventReporter2;
  }();
  var CustomEventReporterBuilder = /* @__PURE__ */ function() {
    function CustomEventReporterBuilder2(parent) {
      _classCallCheck3(this, CustomEventReporterBuilder2);
      this.parent_ = parent;
      this.config_ = {
        "requests": {},
        "triggers": {}
      };
    }
    _createClass2(CustomEventReporterBuilder2, [{
      key: "setTransportConfig",
      value: function setTransportConfig(transportConfig) {
        this.config_["transport"] = transportConfig;
      }
    }, {
      key: "setExtraUrlParams",
      value: function setExtraUrlParams(extraUrlParamsConfig) {
        this.config_["extraUrlParams"] = extraUrlParamsConfig;
      }
    }, {
      key: "track",
      value: function track(eventType, request) {
        request = isArray(request) ? request : [request];
        devAssert(!this.config_["triggers"][eventType], "customEventReporterBuilder should not track same eventType twice");
        var requestList = [];
        for (var i = 0; i < request.length; i++) {
          var requestName = eventType + "-request-" + i;
          this.config_["requests"][requestName] = request[i];
          requestList.push(requestName);
        }
        this.config_["triggers"][eventType] = {
          "on": eventType,
          "request": requestList
        };
        return this;
      }
    }, {
      key: "build",
      value: function build() {
        devAssert(this.config_, "CustomEventReporter already built");
        var report = new CustomEventReporter(this.parent_, this.config_);
        this.config_ = null;
        return report;
      }
    }]);
    return CustomEventReporterBuilder2;
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

  // extensions/amp-skimlinks/0.1/utils.js
  function generatePageImpressionId() {
    var str = "";
    for (var i = 0; i < 8; i++) {
      str += Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
    }
    return str;
  }
  function getNormalizedHostnameFromUrl(url) {
    var _parseUrlDeprecated = parseUrlDeprecated(url), hostname = _parseUrlDeprecated.hostname;
    return hostname.replace(/^www\./, "");
  }
  function getNormalizedHostnameFromAnchor(anchor) {
    if (!anchor) {
      return "";
    }
    return anchor.hostname.replace(/^www\./, "");
  }
  function isExcludedDomain(domain, skimOptions) {
    var excludedDomains = skimOptions.excludedDomains;
    return excludedDomains && excludedDomains.indexOf(domain) !== -1;
  }
  function isExcludedAnchorUrl(anchor, skimOptions) {
    var domain = getNormalizedHostnameFromAnchor(anchor);
    return isExcludedDomain(domain, skimOptions);
  }

  // extensions/amp-skimlinks/0.1/constants.js
  var AMP_SKIMLINKS_VERSION = "1.0.3";
  var XCUST_ATTRIBUTE_NAME = "data-skimlinks-custom-tracking-id";
  var WAYPOINT_BASE_URL = "https://go.skimresources.com";
  var PLATFORM_NAME = "amp@" + AMP_SKIMLINKS_VERSION;
  var SKIMLINKS_REWRITER_ID = "amp-skimlinks";
  var DOMAIN_RESOLVER_API_URL = "https://r.skimresources.com/api";
  var TRACKING_API_URL = "https://t.skimresources.com/api";
  var PAGE_IMPRESSION_TRACKING_URL = TRACKING_API_URL + "/track.php?data=${data}";
  var LINKS_IMPRESSIONS_TRACKING_URL = TRACKING_API_URL + "/link?data=${data}";
  var NA_CLICK_TRACKING_URL = TRACKING_API_URL + "/?call=track&rnd=${rnd}&data=${data}";
  var DEFAULT_CONFIG = {
    pageTrackingUrl: PAGE_IMPRESSION_TRACKING_URL,
    linksTrackingUrl: LINKS_IMPRESSIONS_TRACKING_URL,
    nonAffiliateTrackingUrl: NA_CLICK_TRACKING_URL,
    beaconUrl: DOMAIN_RESOLVER_API_URL
  };
  var GLOBAL_DOMAIN_DENYLIST = ["facebook.com", "go.redirectingat.com", "go.skimresources.com", "instagram.com", "twitter.com", "youtube.com"];
  var OPTIONS_ERRORS = {
    INVALID_PUBCODE: '"publisher-code" is required.',
    INVALID_XCUST: '"custom-tracking-id" should be <=50 characters and only contain upper and lowercase characters, numbers, underscores and pipes.',
    INVALID_TRACKING_STATUS: '"tracking" possible values are "true" or "false".'
  };

  // extensions/amp-skimlinks/0.1/tracking.js
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
  var PAGE_IMPRESSIONS = "page-impressions";
  var LINK_IMPRESSIONS = "link-impressions";
  var NON_AFFILIATE_CLICK = "non-affiliate-click";
  var Tracking = /* @__PURE__ */ function() {
    function Tracking2(element, skimOptions, referrer) {
      _classCallCheck5(this, Tracking2);
      this.tracking_ = skimOptions.tracking;
      this.trackingInfo_ = {
        customTrackingId: skimOptions.customTrackingId,
        guid: null,
        pageImpressionId: generatePageImpressionId(),
        pageUrl: "CANONICAL_URL",
        pubcode: skimOptions.pubcode,
        referrer,
        timezone: "TIMEZONE"
      };
      this.skimOptions_ = skimOptions;
      this.analytics_ = this.setupAnalytics_(element);
    }
    _createClass4(Tracking2, [{
      key: "getTrackingInfo",
      value: function getTrackingInfo() {
        return this.trackingInfo_;
      }
    }, {
      key: "setTrackingInfo",
      value: function setTrackingInfo(newInfo) {
        Object.assign(this.trackingInfo_, newInfo);
      }
    }, {
      key: "sendImpressionTracking",
      value: function sendImpressionTracking(anchorReplacementList) {
        if (!this.tracking_) {
          return;
        }
        var _this$trackingInfo_ = this.trackingInfo_, guid = _this$trackingInfo_.guid, pageImpressionId = _this$trackingInfo_.pageImpressionId, pageUrl = _this$trackingInfo_.pageUrl, pubcode = _this$trackingInfo_.pubcode, timezone = _this$trackingInfo_.timezone;
        var commonData = dict({
          "pub": pubcode,
          "pag": pageUrl,
          "guid": guid,
          "uuid": pageImpressionId,
          "tz": timezone,
          "jv": PLATFORM_NAME
        });
        var _this$extractAnchorTr = this.extractAnchorTrackingInfo_(anchorReplacementList), numberAffiliateLinks = _this$extractAnchorTr.numberAffiliateLinks, urls2 = _this$extractAnchorTr.urls;
        this.sendPageImpressionTracking_(commonData, numberAffiliateLinks);
        this.sendLinkImpressionTracking_(commonData, numberAffiliateLinks, urls2);
      }
    }, {
      key: "sendNaClickTracking",
      value: function sendNaClickTracking(anchor) {
        if (!this.tracking_ || isExcludedAnchorUrl(anchor, this.skimOptions_)) {
          return;
        }
        var _this$trackingInfo_2 = this.trackingInfo_, customTrackingId = _this$trackingInfo_2.customTrackingId, pageImpressionId = _this$trackingInfo_2.pageImpressionId, pageUrl = _this$trackingInfo_2.pageUrl, pubcode = _this$trackingInfo_2.pubcode, referrer = _this$trackingInfo_2.referrer, timezone = _this$trackingInfo_2.timezone;
        var data = dict({
          "pubcode": pubcode,
          "referrer": pageUrl,
          "pref": referrer,
          "site": "false",
          "url": anchor.href,
          "custom": anchor.getAttribute(XCUST_ATTRIBUTE_NAME) || customTrackingId,
          "xtz": timezone,
          "uuid": pageImpressionId,
          "product": "1",
          "jv": PLATFORM_NAME
        });
        this.analytics_.trigger(NON_AFFILIATE_CLICK, dict({
          "data": JSON.stringify(data),
          "rnd": "RANDOM"
        }));
      }
    }, {
      key: "sendPageImpressionTracking_",
      value: function sendPageImpressionTracking_(commonData, numberAffiliateLinks) {
        var _this$trackingInfo_3 = this.trackingInfo_, customTrackingId = _this$trackingInfo_3.customTrackingId, referrer = _this$trackingInfo_3.referrer;
        var data = Object.assign(dict({
          "slc": numberAffiliateLinks,
          "jsl": 0,
          "pref": referrer,
          "uc": customTrackingId,
          "t": 1
        }), commonData);
        this.analytics_.trigger(PAGE_IMPRESSIONS, dict({
          "data": JSON.stringify(data)
        }));
      }
    }, {
      key: "sendLinkImpressionTracking_",
      value: function sendLinkImpressionTracking_(commonData, numberAffiliateLinks, urls2) {
        if (numberAffiliateLinks === 0) {
          return;
        }
        var data = Object.assign(dict({
          "dl": urls2,
          "hae": numberAffiliateLinks ? 1 : 0,
          "typ": "l"
        }), commonData);
        this.analytics_.trigger(LINK_IMPRESSIONS, dict({
          "data": JSON.stringify(data)
        }));
      }
    }, {
      key: "setupAnalytics_",
      value: function setupAnalytics_(element) {
        var analyticsBuilder = new CustomEventReporterBuilder(element);
        var _this$skimOptions_$co = this.skimOptions_.config, linksTrackingUrl = _this$skimOptions_$co.linksTrackingUrl, nonAffiliateTrackingUrl = _this$skimOptions_$co.nonAffiliateTrackingUrl, pageTrackingUrl = _this$skimOptions_$co.pageTrackingUrl;
        analyticsBuilder.track(PAGE_IMPRESSIONS, pageTrackingUrl);
        analyticsBuilder.track(LINK_IMPRESSIONS, linksTrackingUrl);
        analyticsBuilder.track(NON_AFFILIATE_CLICK, nonAffiliateTrackingUrl);
        analyticsBuilder.setTransportConfig(dict({
          "beacon": true,
          "image": true,
          "xhrpost": false
        }));
        return analyticsBuilder.build();
      }
    }, {
      key: "extractAnchorTrackingInfo_",
      value: function extractAnchorTrackingInfo_(anchorReplacementList) {
        var _this = this;
        var numberAffiliateLinks = 0;
        var urls2 = dict({});
        anchorReplacementList.forEach(function(anchorReplacement) {
          var anchor = anchorReplacement.anchor, replacementUrl = anchorReplacement.replacementUrl;
          var isExcluded = isExcludedAnchorUrl(anchor, _this.skimOptions_);
          var isAffiliate = Boolean(replacementUrl);
          if (!isAffiliate || isExcluded) {
            return;
          }
          urls2[anchor.href] = urls2[anchor.href] || dict({
            "ae": 1,
            "count": 0
          });
          urls2[anchor.href]["count"] += 1;
          numberAffiliateLinks += 1;
        });
        return {
          numberAffiliateLinks,
          urls: urls2
        };
      }
    }]);
    return Tracking2;
  }();

  // extensions/amp-skimlinks/0.1/link-rewriter/two-steps-response.js
  function _classCallCheck6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var TwoStepsResponse = function TwoStepsResponse2(syncResponse, asyncResponse) {
    _classCallCheck6(this, TwoStepsResponse2);
    this.syncResponse = syncResponse;
    this.asyncResponse = asyncResponse;
  };

  // extensions/amp-skimlinks/0.1/affiliate-link-resolver.js
  function _classCallCheck7(instance, Constructor) {
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
  var AFFILIATE_STATUS = {
    AFFILIATE: "affiliate",
    NON_AFFILIATE: "non-affiliate",
    IGNORE: "ignore",
    UNKNOWN: "unknown"
  };
  var AffiliateLinkResolver = /* @__PURE__ */ function() {
    function AffiliateLinkResolver2(xhr, skimOptions, waypoint) {
      _classCallCheck7(this, AffiliateLinkResolver2);
      this.xhr_ = xhr;
      this.skimOptions_ = skimOptions;
      this.waypoint_ = waypoint;
      this.domains_ = dict({});
      this.firstRequest = null;
    }
    _createClass5(AffiliateLinkResolver2, [{
      key: "fetchDomainResolverApi",
      value: function fetchDomainResolverApi(domains) {
        var data = dict({
          "pubcode": this.skimOptions_.pubcode,
          "page": "",
          "domains": domains
        });
        var beaconUrl = this.skimOptions_.config.beaconUrl;
        beaconUrl = beaconUrl + "?data=" + JSON.stringify(data);
        var fetchOptions = {
          method: "GET",
          ampCors: false,
          credentials: "include"
        };
        return this.xhr_.fetchJson(beaconUrl, fetchOptions).then(function(res) {
          return res.json();
        });
      }
    }, {
      key: "resolveUnknownAnchors",
      value: function resolveUnknownAnchors(anchorList) {
        var alreadyResolvedResponse = this.associateWithReplacementUrl_(anchorList);
        var willBeResolvedPromise = null;
        var domainsToAsk = this.getNewDomains_(anchorList);
        if (domainsToAsk.length) {
          this.markDomainsAsUnknown_(domainsToAsk);
          var unknownAnchors = this.getUnknownAnchors_(anchorList, domainsToAsk);
          willBeResolvedPromise = this.resolvedUnknownAnchorsAsync_(unknownAnchors, domainsToAsk);
        }
        return new TwoStepsResponse(alreadyResolvedResponse, willBeResolvedPromise);
      }
    }, {
      key: "associateWithReplacementUrl_",
      value: function associateWithReplacementUrl_(anchorList) {
        var _this = this;
        return anchorList.map(function(anchor) {
          var replacementUrl = null;
          var status = _this.getDomainAffiliateStatus_(_this.getAnchorDomain_(anchor));
          var shouldReplace = status === AFFILIATE_STATUS.AFFILIATE || status === AFFILIATE_STATUS.UNKNOWN;
          if (shouldReplace) {
            replacementUrl = _this.waypoint_.getAffiliateUrl(anchor);
          }
          return {
            anchor,
            replacementUrl
          };
        });
      }
    }, {
      key: "getDomainAffiliateStatus_",
      value: function getDomainAffiliateStatus_(domain) {
        if (isExcludedDomain(domain, this.skimOptions_)) {
          return AFFILIATE_STATUS.IGNORE;
        }
        return this.domains_[domain] || AFFILIATE_STATUS.UNKNOWN;
      }
    }, {
      key: "getNewDomains_",
      value: function getNewDomains_(anchorList) {
        var _this2 = this;
        return anchorList.reduce(function(acc, anchor) {
          var domain = _this2.getAnchorDomain_(anchor);
          var isResolved = _this2.domains_[domain];
          var isExcluded = isExcludedDomain(domain, _this2.skimOptions_);
          var isDuplicate = acc.indexOf(domain) !== -1;
          if (!isResolved && !isExcluded && !isDuplicate) {
            acc.push(domain);
          }
          return acc;
        }, []);
      }
    }, {
      key: "markDomainsAsUnknown_",
      value: function markDomainsAsUnknown_(domains) {
        var _this3 = this;
        domains.forEach(function(domain) {
          if (_this3.domains_[domain]) {
            return;
          }
          if (isExcludedDomain(domain, _this3.skimOptions_)) {
            _this3.domains_[domain] = AFFILIATE_STATUS.IGNORE;
          }
          _this3.domains_[domain] = AFFILIATE_STATUS.UNKNOWN;
        });
      }
    }, {
      key: "getUnknownAnchors_",
      value: function getUnknownAnchors_(anchorList, unknownDomains) {
        var _this4 = this;
        return anchorList.filter(function(anchor) {
          var anchorDomain = _this4.getAnchorDomain_(anchor);
          return unknownDomains.indexOf(anchorDomain) !== -1;
        });
      }
    }, {
      key: "resolvedUnknownAnchorsAsync_",
      value: function resolvedUnknownAnchorsAsync_(anchorList, domainsToAsk) {
        var _this5 = this;
        var promise = this.fetchDomainResolverApi(domainsToAsk);
        if (!this.firstRequest) {
          this.firstRequest = promise;
        }
        return promise.then(function(data) {
          var merchantDomains = data["merchant_domains"] || [];
          _this5.updateDomainsStatusMap_(domainsToAsk, merchantDomains);
          return _this5.associateWithReplacementUrl_(anchorList);
        });
      }
    }, {
      key: "updateDomainsStatusMap_",
      value: function updateDomainsStatusMap_(allDomains, affiliateDomains) {
        var _this6 = this;
        allDomains.forEach(function(domain) {
          var isAffiliateDomain = affiliateDomains.indexOf(domain) !== -1;
          _this6.domains_[domain] = isAffiliateDomain ? AFFILIATE_STATUS.AFFILIATE : AFFILIATE_STATUS.NON_AFFILIATE;
        });
      }
    }, {
      key: "getAnchorDomain_",
      value: function getAnchorDomain_(anchor) {
        return getNormalizedHostnameFromAnchor(anchor);
      }
    }]);
    return AffiliateLinkResolver2;
  }();

  // extensions/amp-skimlinks/0.1/link-rewriter/constants.js
  var EVENTS = {
    PAGE_SCANNED: "PAGE_SCANNED",
    CLICK: "CLICK"
  };
  var ORIGINAL_URL_ATTRIBUTE = "data-link-rewriter-original-url";
  var PRIORITY_META_TAG_NAME = "amp-link-rewriter-priorities";

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

  // src/event-helper.js
  function getData(event) {
    return event.data;
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
  function isVar(property) {
    return property.startsWith("--");
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
  var PriorityQueue = /* @__PURE__ */ function() {
    function PriorityQueue2() {
      _classCallCheck8(this, PriorityQueue2);
      this.queue_ = [];
    }
    _createClass6(PriorityQueue2, [{
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
  function _classCallCheck9(instance, Constructor) {
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
  var TAG = "CHUNK";
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
    _createClass7(Task2, [{
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
    _inherits(StartupTask2, _Task);
    var _super = _createSuper(StartupTask2);
    function StartupTask2(fn, win, chunks) {
      var _this;
      _classCallCheck9(this, StartupTask2);
      _this = _super.call(this, fn);
      _this.chunks_ = chunks;
      return _this;
    }
    _createClass7(StartupTask2, [{
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
    _createClass7(Chunks2, [{
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
            dev().fine(TAG, t.getName_(), "Chunk duration", Date.now() - before, _this3.durationOfLastExecution_);
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
          dev().fine(TAG, "Timed out", timeout, info.didTimeout);
          fn(info);
        } else {
          dev().fine(TAG, "Rescheduling with", remainingTimeout, info.timeRemaining());
          win.requestIdleCallback(rIC, {
            timeout: remainingTimeout
          });
        }
      } else {
        dev().fine(TAG, "Running idle callback with ", minimumTimeRemaining);
        fn(info);
      }
    }
    win.requestIdleCallback(rIC, {
      timeout
    });
  }

  // extensions/amp-skimlinks/0.1/link-rewriter/link-replacement-cache.js
  function _classCallCheck10(instance, Constructor) {
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
  var LinkReplacementCache = /* @__PURE__ */ function() {
    function LinkReplacementCache2() {
      _classCallCheck10(this, LinkReplacementCache2);
      this.anchorList_ = [];
      this.replacementList_ = [];
    }
    _createClass8(LinkReplacementCache2, [{
      key: "updateLinkList",
      value: function updateLinkList(newAnchorList) {
        this.replacementList_ = newAnchorList.map(this.getReplacementUrlForAnchor.bind(this));
        this.anchorList_ = newAnchorList;
      }
    }, {
      key: "updateReplacementUrls",
      value: function updateReplacementUrls(replacementList) {
        var _this = this;
        replacementList.forEach(function(replacementItem) {
          var anchor = replacementItem.anchor, replacementUrl = replacementItem.replacementUrl;
          var anchorIndex = _this.anchorList_.indexOf(anchor);
          if (anchorIndex !== -1) {
            _this.replacementList_[anchorIndex] = replacementUrl;
          }
        });
      }
    }, {
      key: "getReplacementUrlForAnchor",
      value: function getReplacementUrlForAnchor(anchor) {
        var index = this.anchorList_.indexOf(anchor);
        return index !== -1 ? this.replacementList_[index] : null;
      }
    }, {
      key: "isInCache",
      value: function isInCache(anchor) {
        return this.anchorList_.indexOf(anchor) !== -1;
      }
    }, {
      key: "getAnchorReplacementList",
      value: function getAnchorReplacementList() {
        var _this2 = this;
        return this.anchorList_.map(function(anchor) {
          return {
            anchor,
            replacementUrl: _this2.getReplacementUrlForAnchor(anchor)
          };
        });
      }
    }]);
    return LinkReplacementCache2;
  }();

  // src/core/data-structures/observable.js
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
  function _classCallCheck11(instance, Constructor) {
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
      _classCallCheck11(this, Observable2);
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
        for (var _iterator = _createForOfIteratorHelperLoose(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // extensions/amp-skimlinks/0.1/link-rewriter/link-rewriter.js
  function _classCallCheck12(instance, Constructor) {
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
  var LinkRewriter = /* @__PURE__ */ function() {
    function LinkRewriter2(rootNode, id, resolveUnknownLinks, options) {
      _classCallCheck12(this, LinkRewriter2);
      this.events = new Observable();
      this.id = id;
      this.rootNode_ = rootNode;
      this.resolveUnknownLinks_ = resolveUnknownLinks;
      this.linkSelector_ = options.linkSelector || "a";
      this.restoreDelay_ = 300;
      this.anchorReplacementCache_ = new LinkReplacementCache();
    }
    _createClass10(LinkRewriter2, [{
      key: "getReplacementUrl",
      value: function getReplacementUrl(anchor) {
        if (!this.isWatchingLink(anchor)) {
          return null;
        }
        return this.anchorReplacementCache_.getReplacementUrlForAnchor(anchor);
      }
    }, {
      key: "getAnchorReplacementList",
      value: function getAnchorReplacementList() {
        return this.anchorReplacementCache_.getAnchorReplacementList();
      }
    }, {
      key: "isWatchingLink",
      value: function isWatchingLink(anchor) {
        return this.anchorReplacementCache_.isInCache(anchor);
      }
    }, {
      key: "rewriteAnchorUrl",
      value: function rewriteAnchorUrl(anchor) {
        var newUrl = this.getReplacementUrl(anchor);
        if (!newUrl || newUrl === anchor.href) {
          return false;
        }
        anchor.setAttribute(ORIGINAL_URL_ATTRIBUTE, anchor.href);
        anchor.href = newUrl;
        setTimeout(function() {
          anchor.href = anchor.getAttribute(ORIGINAL_URL_ATTRIBUTE);
          anchor.removeAttribute(ORIGINAL_URL_ATTRIBUTE);
        }, this.restoreDelay_);
        return true;
      }
    }, {
      key: "onDomUpdated",
      value: function onDomUpdated() {
        var _this = this;
        return new Promise(function(resolve) {
          var task = function task2() {
            return _this.scanLinksOnPage_().then(function() {
              _this.events.fire({
                type: EVENTS.PAGE_SCANNED
              });
              resolve();
            });
          };
          var elementOrShadowRoot = _this.rootNode_.nodeType == Node.DOCUMENT_NODE ? _this.rootNode_.documentElement : _this.rootNode_;
          chunk(elementOrShadowRoot, task, ChunkPriority.LOW);
        });
      }
    }, {
      key: "scanLinksOnPage_",
      value: function scanLinksOnPage_() {
        var _this2 = this;
        var anchorList = this.getLinksInDOM_();
        var unknownAnchors = this.getUnknownAnchors_(anchorList);
        this.anchorReplacementCache_.updateLinkList(anchorList);
        if (!unknownAnchors.length) {
          return resolvedPromise();
        }
        this.anchorReplacementCache_.updateReplacementUrls(unknownAnchors.map(function(anchor) {
          return {
            anchor,
            replacementUrl: null
          };
        }));
        var twoStepsResponse = this.resolveUnknownLinks_(unknownAnchors);
        userAssert(twoStepsResponse instanceof TwoStepsResponse, 'Invalid response from provided "resolveUnknownLinks" function."resolveUnknownLinks" should return an instance of TwoStepsResponse');
        if (twoStepsResponse.syncResponse) {
          this.anchorReplacementCache_.updateReplacementUrls(twoStepsResponse.syncResponse);
        }
        if (twoStepsResponse.asyncResponse) {
          return twoStepsResponse.asyncResponse.then(function(data) {
            _this2.anchorReplacementCache_.updateReplacementUrls(data);
          });
        }
        return resolvedPromise();
      }
    }, {
      key: "getUnknownAnchors_",
      value: function getUnknownAnchors_(anchorList) {
        var _this3 = this;
        var unknownAnchors = [];
        anchorList.forEach(function(anchor) {
          if (!_this3.isWatchingLink(anchor)) {
            unknownAnchors.push(anchor);
          }
        });
        return unknownAnchors;
      }
    }, {
      key: "getLinksInDOM_",
      value: function getLinksInDOM_() {
        var q = this.rootNode_.querySelectorAll(this.linkSelector_);
        return [].slice.call(q);
      }
    }]);
    return LinkRewriter2;
  }();

  // src/service/navigation.js
  var Priority = {
    LINK_REWRITER_MANAGER: 0,
    ANALYTICS_LINKER: 2
  };

  // extensions/amp-skimlinks/0.1/link-rewriter/link-rewriter-manager.js
  function _classCallCheck13(instance, Constructor) {
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
  var LinkRewriterManager = /* @__PURE__ */ function() {
    function LinkRewriterManager2(ampdoc) {
      _classCallCheck13(this, LinkRewriterManager2);
      this.rootNode_ = ampdoc.getRootNode();
      this.priorityList_ = this.getPriorityList_(ampdoc);
      this.linkRewriters_ = [];
      this.installGlobalEventListener_(this.rootNode_);
      var navigation = Services.navigationForDoc(ampdoc);
      navigation.registerAnchorMutator(this.maybeRewriteLink.bind(this), Priority.LINK_REWRITER_MANAGER);
    }
    _createClass11(LinkRewriterManager2, [{
      key: "registerLinkRewriter",
      value: function registerLinkRewriter(linkRewriterId, resolveUnknownLinks, options) {
        var linkRewriter = new LinkRewriter(this.rootNode_, linkRewriterId, resolveUnknownLinks, options);
        this.insertInListBasedOnPriority_(this.linkRewriters_, linkRewriter, this.priorityList_);
        linkRewriter.onDomUpdated();
        return linkRewriter;
      }
    }, {
      key: "maybeRewriteLink",
      value: function maybeRewriteLink(anchor, event) {
        var suitableLinkRewriters = this.getSuitableLinkRewritersForLink_(anchor);
        if (suitableLinkRewriters.length) {
          var chosenLinkRewriter = null;
          for (var i = 0; i < suitableLinkRewriters.length; i++) {
            var hasReplaced = suitableLinkRewriters[i].rewriteAnchorUrl(anchor);
            if (hasReplaced) {
              chosenLinkRewriter = suitableLinkRewriters[i];
              break;
            }
          }
          var linkRewriterId = chosenLinkRewriter ? chosenLinkRewriter.id : null;
          var eventData = {
            linkRewriterId,
            anchor,
            clickType: event.type
          };
          suitableLinkRewriters.forEach(function(linkRewriter) {
            var event2 = {
              type: EVENTS.CLICK,
              eventData
            };
            linkRewriter.events.fire(event2);
          });
        }
      }
    }, {
      key: "getPriorityList_",
      value: function getPriorityList_(ampdoc) {
        var value = ampdoc.getMetaByName(PRIORITY_META_TAG_NAME);
        return value ? value.trim().split(/\s+/) : [];
      }
    }, {
      key: "installGlobalEventListener_",
      value: function installGlobalEventListener_(rootNode) {
        rootNode.addEventListener(AmpEvents.DOM_UPDATE, this.onDomChanged_.bind(this));
      }
    }, {
      key: "onDomChanged_",
      value: function onDomChanged_() {
        this.linkRewriters_.forEach(function(linkRewriter) {
          linkRewriter.onDomUpdated();
        });
      }
    }, {
      key: "parseLinkRewriterPriorityForAnchor_",
      value: function parseLinkRewriterPriorityForAnchor_(anchor) {
        var dataValue = anchor.hasAttribute("data-link-rewriters") ? anchor.getAttribute("data-link-rewriters").trim() : null;
        if (!dataValue) {
          return [];
        }
        return dataValue.split(/\s+/);
      }
    }, {
      key: "insertInListBasedOnPriority_",
      value: function insertInListBasedOnPriority_(linkRewriterList, linkRewriter, idPriorityList) {
        var B_HAS_PRIORITY = 1;
        var A_HAS_PRIORITY = -1;
        var compareFunction = function compareFunction2(linkRewriterA, linkRewriterB) {
          var indexA = idPriorityList.indexOf(linkRewriterA.id);
          var indexB = idPriorityList.indexOf(linkRewriterB.id);
          if (indexA === -1 && indexB === -1) {
            return 0;
          }
          if (indexA === -1) {
            return B_HAS_PRIORITY;
          }
          if (indexB === -1) {
            return A_HAS_PRIORITY;
          }
          return indexA > indexB ? B_HAS_PRIORITY : A_HAS_PRIORITY;
        };
        linkRewriterList.push(linkRewriter);
        linkRewriterList.sort(compareFunction);
        return linkRewriterList;
      }
    }, {
      key: "getSuitableLinkRewritersForLink_",
      value: function getSuitableLinkRewritersForLink_(anchor) {
        var _this = this;
        var linkPriorityList = this.parseLinkRewriterPriorityForAnchor_(anchor);
        return this.linkRewriters_.reduce(function(acc, linkRewriter) {
          if (linkRewriter.isWatchingLink(anchor)) {
            _this.insertInListBasedOnPriority_(acc, linkRewriter, linkPriorityList);
          }
          return acc;
        }, []);
      }
    }]);
    return LinkRewriterManager2;
  }();

  // extensions/amp-skimlinks/0.1/waypoint.js
  function _classCallCheck14(instance, Constructor) {
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
  var Waypoint = /* @__PURE__ */ function() {
    function Waypoint2(ampdoc, skimOptions, tracking, referrer) {
      _classCallCheck14(this, Waypoint2);
      this.tracking_ = tracking;
      this.documentReferrer_ = referrer;
      this.canonicalUrl_ = Services.documentInfoForDoc(ampdoc).canonicalUrl;
      this.timezone_ = "" + new Date().getTimezoneOffset();
      this.skimOptions_ = skimOptions;
    }
    _createClass12(Waypoint2, [{
      key: "getAffiliateUrl",
      value: function getAffiliateUrl(anchor) {
        if (!anchor) {
          return null;
        }
        var _this$tracking_$getTr = this.tracking_.getTrackingInfo(), customTrackingId = _this$tracking_$getTr.customTrackingId, guid = _this$tracking_$getTr.guid, pageImpressionId = _this$tracking_$getTr.pageImpressionId, pubcode = _this$tracking_$getTr.pubcode;
        var xcust = anchor.getAttribute(XCUST_ATTRIBUTE_NAME) || customTrackingId;
        var queryParams = dict({
          "id": pubcode,
          "url": anchor.href,
          "sref": this.canonicalUrl_,
          "pref": this.documentReferrer_,
          "xguid": guid,
          "xuuid": pageImpressionId,
          "xtz": this.timezone_,
          "xs": "1",
          "jv": PLATFORM_NAME
        });
        if (xcust) {
          queryParams["xcust"] = xcust;
        }
        var affiliationUrl = this.skimOptions_.waypointBaseUrl;
        return addParamsToUrl(affiliationUrl, queryParams);
      }
    }]);
    return Waypoint2;
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

  // extensions/amp-skimlinks/0.1/skim-options.js
  function assertSkimOption(condition, message) {
    userAssert(condition, "<amp-skimlinks> Invalid option => " + message);
  }
  function getAmpSkimlinksOptions(element, docInfo) {
    return {
      pubcode: getPubCode_(element),
      excludedDomains: getExcludedDomains_(element, getInternalDomains_(docInfo)),
      tracking: getTrackingStatus_(element),
      customTrackingId: getCustomTrackingId_(element),
      linkSelector: getLinkSelector_(element),
      waypointBaseUrl: getWaypointBaseUrl(element),
      config: getConfig_(element)
    };
  }
  function getExcludedDomains_(element, internalDomains) {
    var excludedDomains = [].concat(internalDomains).concat(GLOBAL_DOMAIN_DENYLIST);
    var excludedDomainsAttr = element.getAttribute("excluded-domains");
    if (excludedDomainsAttr) {
      excludedDomains = excludedDomains.concat(excludedDomainsAttr.trim().split(/\s+/).map(function(domain) {
        return domain.replace(/^www\./, "");
      }));
    }
    return excludedDomains;
  }
  function getPubCode_(element) {
    var pubCode = element.getAttribute("publisher-code");
    assertSkimOption(pubCode, OPTIONS_ERRORS.INVALID_PUBCODE);
    return pubCode;
  }
  function getTrackingStatus_(element) {
    var tracking = element.getAttribute("tracking");
    if (tracking) {
      var isValidValue = tracking === "true" || tracking === "false";
      assertSkimOption(isValidValue, OPTIONS_ERRORS.INVALID_TRACKING_STATUS);
      return tracking === "true";
    }
    return true;
  }
  function getCustomTrackingId_(element) {
    var customTrackingId = element.getAttribute("custom-tracking-id");
    if (customTrackingId) {
      var isValidXcust = customTrackingId.length <= 50;
      assertSkimOption(isValidXcust, OPTIONS_ERRORS.INVALID_XCUST);
    }
    return customTrackingId;
  }
  function getLinkSelector_(element) {
    var linkSelector = element.getAttribute("link-selector");
    return linkSelector || null;
  }
  function getInternalDomains_(docInfo) {
    var internalDomains = [];
    if (docInfo.canonicalUrl) {
      internalDomains.push(getNormalizedHostnameFromUrl(docInfo.canonicalUrl));
    }
    if (docInfo.sourceUrl) {
      internalDomains.push(getNormalizedHostnameFromUrl(docInfo.sourceUrl));
    }
    return internalDomains;
  }
  function getWaypointBaseUrl(element) {
    var customSubDomain = element.getAttribute("custom-redirect-domain");
    if (customSubDomain) {
      customSubDomain = customSubDomain.replace(/^\/\/|^https?:\/\/|\/$/g, "");
      return "http://" + customSubDomain;
    }
    return WAYPOINT_BASE_URL;
  }
  function getConfig_(element) {
    try {
      var customConfigJson = getChildJsonConfig(element);
      return {
        pageTrackingUrl: customConfigJson["pageTrackingUrl"] || DEFAULT_CONFIG.pageTrackingUrl,
        linksTrackingUrl: customConfigJson["linksTrackingUrl"] || DEFAULT_CONFIG.linksTrackingUrl,
        nonAffiliateTrackingUrl: customConfigJson["nonAffiliateTrackingUrl"] || DEFAULT_CONFIG.nonAffiliateTrackingUrl,
        beaconUrl: customConfigJson["beaconUrl"] || DEFAULT_CONFIG.beaconUrl
      };
    } catch (err) {
      return DEFAULT_CONFIG;
    }
  }

  // extensions/amp-skimlinks/0.1/amp-skimlinks.js
  function _classCallCheck15(instance, Constructor) {
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
  var AmpSkimlinks = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpSkimlinks2, _AMP$BaseElement);
    var _super = _createSuper2(AmpSkimlinks2);
    function AmpSkimlinks2(element) {
      var _this;
      _classCallCheck15(this, AmpSkimlinks2);
      _this = _super.call(this, element);
      _this.xhr_ = null;
      _this.ampDoc_ = null;
      _this.docInfo_ = null;
      _this.viewer_ = null;
      _this.linkRewriterService_ = null;
      _this.skimOptions_ = {};
      _this.trackingService_ = null;
      _this.affiliateLinkResolver_ = null;
      _this.waypoint_ = null;
      _this.skimlinksLinkRewriter_ = null;
      _this.referrer_ = null;
      return _this;
    }
    _createClass13(AmpSkimlinks2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.xhr_ = Services.xhrFor(this.win);
        this.ampDoc_ = this.getAmpDoc();
        this.docInfo_ = Services.documentInfoForDoc(this.ampDoc_);
        this.viewer_ = Services.viewerForDoc(this.ampDoc_);
        this.linkRewriterService_ = new LinkRewriterManager(this.ampDoc_);
        this.skimOptions_ = getAmpSkimlinksOptions(this.element, this.docInfo_);
        return this.ampDoc_.waitForBodyOpen().then(function() {
          return _this2.viewer_.getReferrerUrl();
        }).then(function(referrer) {
          _this2.referrer_ = referrer;
          _this2.startSkimcore_();
        });
      }
    }, {
      key: "startSkimcore_",
      value: function startSkimcore_() {
        this.trackingService_ = this.initTracking_();
        this.waypoint_ = new Waypoint(this.ampDoc_, this.skimOptions_, this.trackingService_, this.referrer_);
        this.affiliateLinkResolver_ = new AffiliateLinkResolver(this.xhr_, this.skimOptions_, this.waypoint_);
        this.skimlinksLinkRewriter_ = this.initSkimlinksLinkRewriter_();
      }
    }, {
      key: "sendImpressionTracking_",
      value: function sendImpressionTracking_(beaconData) {
        var _this3 = this;
        this.trackingService_.setTrackingInfo({
          guid: beaconData["guid"]
        });
        this.ampDoc_.whenFirstVisible().then(function() {
          _this3.trackingService_.sendImpressionTracking(_this3.skimlinksLinkRewriter_.getAnchorReplacementList());
        });
      }
    }, {
      key: "onPageScanned_",
      value: function onPageScanned_() {
        var beaconApiPromise = this.affiliateLinkResolver_.firstRequest || this.affiliateLinkResolver_.fetchDomainResolverApi([]);
        return beaconApiPromise.then(this.sendImpressionTracking_.bind(this));
      }
    }, {
      key: "initSkimlinksLinkRewriter_",
      value: function initSkimlinksLinkRewriter_() {
        var _this4 = this, _eventHandlers;
        var options = {
          linkSelector: this.skimOptions_.linkSelector
        };
        var linkRewriter = this.linkRewriterService_.registerLinkRewriter(SKIMLINKS_REWRITER_ID, function(anchorList) {
          return _this4.affiliateLinkResolver_.resolveUnknownAnchors(anchorList);
        }, options);
        var eventHandlers = (_eventHandlers = {}, _eventHandlers[EVENTS.PAGE_SCANNED] = once(this.onPageScanned_.bind(this)), _eventHandlers[EVENTS.CLICK] = this.onClick_.bind(this), _eventHandlers);
        linkRewriter.events.add(function(event) {
          var handler = eventHandlers[event.type];
          if (handler) {
            handler(event.eventData);
          }
        });
        return linkRewriter;
      }
    }, {
      key: "initTracking_",
      value: function initTracking_() {
        this.signals().signal(CommonSignals.LOAD_START);
        return new Tracking(this.element, this.skimOptions_, this.referrer_);
      }
    }, {
      key: "onClick_",
      value: function onClick_(eventData) {
        var doClickTracking = eventData.linkRewriterId !== SKIMLINKS_REWRITER_ID && eventData.clickType !== "contextmenu";
        if (doClickTracking) {
          this.trackingService_.sendNaClickTracking(eventData.anchor);
        }
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported() {
        return true;
      }
    }]);
    return AmpSkimlinks2;
  }(AMP.BaseElement);
  AMP.extension("amp-skimlinks", "0.1", function(AMP2) {
    AMP2.registerElement("amp-skimlinks", AmpSkimlinks);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-skimlinks-0.1.max.js.map
