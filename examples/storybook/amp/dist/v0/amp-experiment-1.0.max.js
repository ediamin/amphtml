(self.AMP=self.AMP||[]).push({n:"amp-experiment",ev:"1.0",l:false,v:"2106040012000",m:0,f:(function(AMP,_){

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
  function isAmpElement(element) {
    var tag = element.tagName;
    return tag.startsWith("AMP-") && !(tag == "AMP-STICKY-AD-TOP-PADDING" || tag == "AMP-BODY");
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

  // extensions/amp-experiment/1.0/variant.js
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
  var ATTR_PREFIX = "amp-x-";
  var nameValidator = /^[\w-]+$/;
  var Variants = /* @__PURE__ */ function() {
    function Variants2(ampdoc) {
      _classCallCheck3(this, Variants2);
      this.ampdoc = ampdoc;
      this.variantsDeferred_ = new Deferred();
    }
    _createClass2(Variants2, [{
      key: "init",
      value: function init(variants) {
        var _this = this;
        variants.then(function(result) {
          return _this.variantsDeferred_.resolve(result);
        });
      }
    }, {
      key: "getVariants",
      value: function getVariants() {
        return this.variantsDeferred_.promise;
      }
    }, {
      key: "whenReady",
      value: function whenReady() {
        return this.getVariants();
      }
    }]);
    return Variants2;
  }();
  function allocateVariant(ampdoc, viewer, experimentName, experimentObject) {
    assertName(experimentName);
    validateExperiment(experimentName, experimentObject);
    var override = ampdoc.getParam(ATTR_PREFIX + experimentName);
    if (override && hasOwn(experimentObject["variants"], override)) {
      return Promise.resolve(override);
    }
    var sticky = experimentObject["sticky"] !== false;
    var cidScope = experimentObject["cidScope"] || "amp-experiment";
    var hasConsentPromise = Promise.resolve(true);
    if (sticky && experimentObject["consentNotificationId"]) {
      var element = ampdoc.getHeadNode();
      hasConsentPromise = Services.userNotificationManagerForDoc(element).then(function(manager) {
        return manager.getNotification(experimentObject["consentNotificationId"]);
      }).then(function(userNotification) {
        userAssert(userNotification, "Notification not found: " + ("" + experimentObject["consentNotificationId"]));
        return userNotification.isDismissed();
      });
    }
    return hasConsentPromise.then(function(hasConsent) {
      if (!hasConsent) {
        return null;
      }
      var group = experimentObject["group"] || experimentName;
      return getBucketTicket(ampdoc, group, sticky ? cidScope : null).then(function(ticket) {
        var upperBound = 0;
        var variants = experimentObject["variants"];
        var variantNames = Object.keys(variants).sort();
        for (var i = 0; i < variantNames.length; i++) {
          upperBound += variants[variantNames[i]]["weight"];
          if (ticket < upperBound) {
            return variantNames[i];
          }
        }
        return null;
      });
    });
  }
  function validateExperiment(experimentName, experimentObject) {
    var variants = experimentObject["variants"];
    userAssert(isObject(variants) && Object.keys(variants).length > 0, "Missing variants object from experiment.");
    if (experimentObject["group"]) {
      assertName(experimentObject["group"]);
    }
    var totalPercentage = 0;
    for (var variantName in variants) {
      if (hasOwn(variants, variantName)) {
        assertName(variantName);
        var variant = variants[variantName];
        assertVariant(variant, experimentName, variantName);
        var percentage = variant["weight"];
        totalPercentage += percentage;
      }
    }
    userAssert(totalPercentage.toFixed(6) <= 100, "Total percentage is bigger than 100: " + totalPercentage);
  }
  function getBucketTicket(ampdoc, group, opt_cidScope) {
    if (!opt_cidScope) {
      return Promise.resolve(ampdoc.win.Math.random() * 100);
    }
    var cidPromise = Services.cidForDoc(ampdoc).then(function(cidService) {
      return cidService.get({
        scope: dev().assertString(opt_cidScope),
        createCookieIfNotPresent: true
      }, resolvedPromise());
    });
    return Promise.all([cidPromise, Services.cryptoFor(ampdoc.win)]).then(function(results) {
      return results[1].uniform(group + ":" + results[0]);
    }).then(function(hash) {
      return hash * 100;
    });
  }
  function assertName(name) {
    userAssert(nameValidator.test(name), "Invalid name: %s. Allowed chars are [a-zA-Z0-9-_].", name);
  }
  function assertVariant(variant, experimentName, variantName) {
    userAssert(isObject(variant), experimentName + ".variants." + variantName + " must be an object.");
    userAssert(variant["weight"] !== void 0 && typeof variant["weight"] === "number", experimentName + ".variants." + variantName + " must have a number weight.");
    var percentage = variant["weight"];
    userAssert(percentage > 0 && percentage < 100, "Invalid weight percentage %s." + (" " + experimentName + ".variants." + variantName) + " Has to be greater than 0 and less than 100", percentage);
    userAssert(variant["mutations"] && isArray(variant["mutations"]), experimentName + ".variants." + variantName + " must have a mutations array.");
  }

  // src/experiments/index.js
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
        for (var _iterator = _createForOfIteratorHelperLoose(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
    for (var _iterator3 = _createForOfIteratorHelperLoose(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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
  function assertDoesNotContainDisplay(styles) {
    if ("display" in styles) {
      dev().error("STYLE", "`display` style detected in styles. You must use toggle instead.");
    }
    return styles;
  }
  function isVar(property) {
    return property.startsWith("--");
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

  // extensions/amp-experiment/1.0/mutation/mutation.js
  function assertAttributeMutationFormat(mutationRecord) {
    var stringifiedMutation = JSON.stringify(mutationRecord);
    userAssert(mutationRecord["value"] !== void 0 && typeof mutationRecord["value"] === "string", "Mutation %s must have a value.", stringifiedMutation);
    userAssert(mutationRecord["attributeName"] !== void 0 && typeof mutationRecord["attributeName"] === "string", "Mutation %s must have a attributeName.", stringifiedMutation);
  }
  function assertCharacterDataMutationFormat(mutationRecord) {
    var stringifiedMutation = JSON.stringify(mutationRecord);
    userAssert(mutationRecord["value"] !== void 0 && typeof mutationRecord["value"] === "string", "Mutation %s must have a value.", stringifiedMutation);
  }

  // extensions/amp-experiment/1.0/mutation/attribute-mutation-default-class.js
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
  var AttributeMutationDefaultClass = /* @__PURE__ */ function() {
    function AttributeMutationDefaultClass2(mutationRecord, elements) {
      _classCallCheck4(this, AttributeMutationDefaultClass2);
      this.mutationRecord_ = mutationRecord;
      this.elements_ = elements;
      assertAttributeMutationFormat(this.mutationRecord_);
    }
    _createClass3(AttributeMutationDefaultClass2, [{
      key: "parseAndValidate",
      value: function parseAndValidate() {
        var value = this.mutationRecord_["value"];
        if (value.match(/(^|\\W)i-amphtml-/)) {
          return false;
        }
        return true;
      }
    }, {
      key: "mutate",
      value: function mutate() {
        var _this = this;
        this.elements_.forEach(function(element) {
          element.setAttribute(_this.mutationRecord_["attributeName"], _this.mutationRecord_["value"]);
        });
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.mutationRecord_);
      }
    }]);
    return AttributeMutationDefaultClass2;
  }();

  // extensions/amp-experiment/1.0/mutation/attribute-mutation-default-style.js
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
  var NON_SPACE_REGEX = /\S/;
  var ALL_VALUE_REGEX = /.*/;
  var SUPPORTED_STYLE_VALUE = {
    "color": ALL_VALUE_REGEX,
    "background-color": ALL_VALUE_REGEX,
    "visibility": /^hidden$/,
    "display": /^none$/,
    "position": /^(static|relative|absolute|initial|inherit)$/,
    "font-size": ALL_VALUE_REGEX,
    "background-image": ALL_VALUE_REGEX,
    "border-width": ALL_VALUE_REGEX,
    "border-style": ALL_VALUE_REGEX,
    "border-color": ALL_VALUE_REGEX
  };
  var SUPPORTE_NON_AMP_STYLE_VALUE = {
    "width": ALL_VALUE_REGEX,
    "height": ALL_VALUE_REGEX
  };
  var TAG2 = "amp-experiment/style";
  var AttributeMutationDefaultStyle = /* @__PURE__ */ function() {
    function AttributeMutationDefaultStyle2(mutationRecord, elements) {
      _classCallCheck5(this, AttributeMutationDefaultStyle2);
      this.mutationRecord_ = mutationRecord;
      this.elements_ = elements;
      this.styles_ = dict({});
      this.hasAmpElement_ = false;
      assertAttributeMutationFormat(this.mutationRecord_);
    }
    _createClass4(AttributeMutationDefaultStyle2, [{
      key: "parseAndValidate",
      value: function parseAndValidate() {
        var value = this.mutationRecord_["value"];
        if (value.match(/(!\s*important|<)/)) {
          return false;
        }
        for (var i = 0; i < this.elements_.length; i++) {
          if (isAmpElement(dev().assertElement(this.elements_[i]))) {
            this.hasAmpElement_ = true;
            break;
          }
        }
        var pairs = value.split(";");
        for (var _i = 0; _i < pairs.length; _i++) {
          if (!NON_SPACE_REGEX.test(pairs[_i])) {
            continue;
          }
          var pair = pairs[_i].split(":");
          if (pair.length != 2) {
            return false;
          }
          var key = pair[0].trim();
          var _value = pair[1].trim();
          if (!this.validateStylePair_(key, _value)) {
            user().error(TAG2, "Unsupported style mutation property: %s, value: %s", key, _value);
            return false;
          }
          this.styles_[key] = _value;
        }
        return true;
      }
    }, {
      key: "mutate",
      value: function mutate() {
        var _this = this;
        this.elements_.forEach(function(element) {
          setStyles(dev().assertElement(element), assertDoesNotContainDisplay(_this.styles_));
        });
      }
    }, {
      key: "validateStylePair_",
      value: function validateStylePair_(key, value) {
        if (!this.hasAmpElement_ && hasOwn(SUPPORTE_NON_AMP_STYLE_VALUE, key)) {
          if (value.match(SUPPORTE_NON_AMP_STYLE_VALUE[key])) {
            return true;
          }
        }
        if (!hasOwn(SUPPORTED_STYLE_VALUE, key)) {
          return false;
        }
        if (value.match(SUPPORTED_STYLE_VALUE[key])) {
          return true;
        }
        return false;
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.mutationRecord_);
      }
    }]);
    return AttributeMutationDefaultStyle2;
  }();

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck6(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass5(LruCache2, [{
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

  // extensions/amp-experiment/1.0/mutation/attribute-mutation-default-url.js
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
  var TAG3 = "amp-experiment attribute-mutation-default-url";
  var SUPPORTED_TAG_NAMES = ["AMP-IMG", "AMP-IFRAME", "A"];
  var AttributeMutationDefaultUrl = /* @__PURE__ */ function() {
    function AttributeMutationDefaultUrl2(mutationRecord, elements) {
      _classCallCheck7(this, AttributeMutationDefaultUrl2);
      this.mutationRecord_ = mutationRecord;
      this.elements_ = elements;
      assertAttributeMutationFormat(this.mutationRecord_);
    }
    _createClass6(AttributeMutationDefaultUrl2, [{
      key: "parseAndValidate",
      value: function parseAndValidate() {
        for (var i = 0; i < this.elements_.length; i++) {
          var element = this.elements_[i];
          if (SUPPORTED_TAG_NAMES.indexOf(element.tagName) < 0) {
            return false;
          }
        }
        try {
          assertHttpsUrl(this.mutationRecord_["value"], this.mutationRecord_["target"], "attributes mutation");
        } catch (e) {
          user().error(TAG3, e.message);
          return false;
        }
        return true;
      }
    }, {
      key: "mutate",
      value: function mutate() {
        var _this = this;
        this.elements_.forEach(function(element) {
          var name = _this.mutationRecord_["attributeName"];
          var value = _this.mutationRecord_["value"];
          element.setAttribute(name, value);
          if (typeof element.mutatedAttributesCallback === "function") {
            var mutations = map();
            mutations[name] = value;
            element.mutatedAttributesCallback(mutations);
          }
        });
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.mutationRecord_);
      }
    }]);
    return AttributeMutationDefaultUrl2;
  }();

  // extensions/amp-experiment/1.0/mutation/character-data-mutation.js
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
  var CharacterDataMutation = /* @__PURE__ */ function() {
    function CharacterDataMutation2(mutationRecord, elements) {
      _classCallCheck8(this, CharacterDataMutation2);
      this.mutationRecord_ = mutationRecord;
      this.elements_ = elements;
      assertCharacterDataMutationFormat(this.mutationRecord_);
    }
    _createClass7(CharacterDataMutation2, [{
      key: "parseAndValidate",
      value: function parseAndValidate() {
        return true;
      }
    }, {
      key: "mutate",
      value: function mutate() {
        var _this = this;
        this.elements_.forEach(function(element) {
          element.textContent = _this.mutationRecord_["value"];
        });
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.mutationRecord_);
      }
    }]);
    return CharacterDataMutation2;
  }();

  // extensions/amp-experiment/1.0/mutation-record.js
  var MUTATION_TYPES = ["attributes", "characterData", "childList"];
  function assertMutationRecordFormat(mutationRecord) {
    userAssert(isObject(mutationRecord), "Mutation %s must be an object.", JSON.stringify(mutationRecord));
    userAssert(mutationRecord["type"] !== void 0 && typeof mutationRecord["type"] === "string", "Mutation %s must have a type.", JSON.stringify(mutationRecord));
    userAssert(MUTATION_TYPES.indexOf(mutationRecord["type"]) >= 0, "Mutation %s must have a valid type.", JSON.stringify(mutationRecord));
    userAssert(mutationRecord["target"] !== void 0 && typeof mutationRecord["target"] === "string", "Mutation %s must have a target.", JSON.stringify(mutationRecord));
    return mutationRecord;
  }
  function getElementsFromMutationRecordSelector(document, mutationRecord) {
    var selector = mutationRecord["target"];
    userAssert(!selector.match(/(^|\\W)i-amphtml-/), "target %s cannot select i-amphtml-", selector);
    var targetElements = document.querySelectorAll(selector);
    userAssert(targetElements.length > 0, "No element on the document matches the selector, %s .", mutationRecord["target"]);
    return toArray(targetElements);
  }

  // extensions/amp-experiment/1.0/apply-experiment.js
  var TAG4 = "amp-experiment apply-experiment";
  var MAX_MUTATIONS = 70;
  function applyExperimentToVariant(ampdoc, config, experimentToVariant) {
    var mutationRecords = getMutationRecordsFromExperimentToVariant(config, experimentToVariant);
    return ampdoc.whenReady().then(function() {
      var mutationRecordsAndElements = [];
      var totalMutations = 0;
      mutationRecords.forEach(function(mutationRecord) {
        assertMutationRecordFormat(mutationRecord);
        var elements = getElementsFromMutationRecordSelector(ampdoc.win.document, mutationRecord);
        totalMutations += elements.length;
        mutationRecordsAndElements.push({
          mutationRecord,
          elements
        });
      });
      if (totalMutations > MAX_MUTATIONS) {
        var numMutationsError = "Max number of mutations for the total " + ("applied experiments exceeded: " + totalMutations + " > ") + MAX_MUTATIONS;
        user().error(TAG4, numMutationsError);
        throw new Error(numMutationsError);
      }
      var mutations = createMutationsFromMutationRecordsAndElements(mutationRecordsAndElements);
      mutations.forEach(function(mutation) {
        userAssert(mutation.parseAndValidate(), "Mutation %s has an an unsupported value.", mutation.toString());
      });
      mutations.forEach(function(mutation) {
        mutation.mutate();
      });
    });
  }
  function getMutationRecordsFromExperimentToVariant(config, experimentToVariant) {
    var mutationRecords = [];
    for (var experimentName in experimentToVariant) {
      var variantName = experimentToVariant[experimentName];
      if (variantName) {
        var variantObject = config[experimentName]["variants"][variantName];
        mutationRecords = mutationRecords.concat(variantObject["mutations"]);
      }
    }
    return mutationRecords;
  }
  function createMutationsFromMutationRecordsAndElements(mutationRecordsAndElements) {
    var mutations = [];
    mutationRecordsAndElements.forEach(function(mutationRecordAndElements) {
      var elements = mutationRecordAndElements.elements, mutationRecord = mutationRecordAndElements.mutationRecord;
      var mutation = void 0;
      if (mutationRecord["type"] === "characterData") {
        mutation = new CharacterDataMutation(mutationRecord, elements);
      } else if (mutationRecord["type"] === "attributes") {
        if (mutationRecord["attributeName"] === "style") {
          mutation = new AttributeMutationDefaultStyle(mutationRecord, elements);
        } else if (mutationRecord["attributeName"] === "href" || mutationRecord["attributeName"] === "src") {
          mutation = new AttributeMutationDefaultUrl(mutationRecord, elements);
        } else if (mutationRecord["attributeName"] === "class") {
          mutation = new AttributeMutationDefaultClass(mutationRecord, elements);
        } else {
          throw new Error("Mutation " + JSON.stringify(mutationRecord) + " has an unsupported attributeName.");
        }
      } else {
        user().error(TAG4, "childList mutations not supported in the current experiment state.");
        mutation = {
          parseAndValidate: function parseAndValidate() {
            return true;
          },
          mutate: function mutate() {
          }
        };
      }
      mutations.push(mutation);
    });
    return mutations;
  }

  // src/core/types/string/bytes.js
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

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/service/origin-experiments-impl.js
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
  var TAG5 = "OriginExperiments";
  var PUBLIC_JWK = {
    "alg": "RS256",
    "e": "AQAB",
    "ext": true,
    "key_ops": ["verify"],
    "kty": "RSA",
    "n": "uAGSMYKze8Fit508UaGHz1eZowfX4YsA0lmyi-65xQfjF7nMo61c4Iz4erdqgRp-ov662yVPquhPmTxgB-nzNcTPrj15Jo05Js78Q9hS2hrPIjKMlzcKSYQN_08QieWKOSmVbLSv_-4n9Ms5ta8nRs4pwc_2nX5n7m5B5GH4VerGbqIWIn9FRNYMShBRQ9TCHpb6BIUTwUn6iwmJLenq0A1xhGrQ9rswGC1QJhjotkeReKXZDLLWaFr0uRw-IyvRa5RiiEGntgOvcbvamM5TnbKavc2rxvg2TWTCNQnb7lWSAzldJA_yAOYet_MjnHMyj2srUdbQSDCk8kPWWuafiQ"
  };
  var OriginExperiments = /* @__PURE__ */ function() {
    function OriginExperiments2(ampdoc) {
      _classCallCheck9(this, OriginExperiments2);
      this.ampdoc_ = ampdoc;
      this.crypto_ = Services.cryptoFor(ampdoc.win);
      this.url_ = Services.urlForDoc(ampdoc.getHeadNode());
      this.tokenMaster_ = new TokenMaster(this.crypto_, this.url_);
      this.scanPromise_ = null;
    }
    _createClass8(OriginExperiments2, [{
      key: "getExperiments",
      value: function getExperiments(opt_rescan, publicJwk) {
        if (opt_rescan === void 0) {
          opt_rescan = false;
        }
        if (publicJwk === void 0) {
          publicJwk = PUBLIC_JWK;
        }
        if (!this.crypto_.isPkcsAvailable()) {
          user().error(TAG5, "Crypto is unavailable.");
          return Promise.resolve([]);
        }
        if (!this.scanPromise_ || opt_rescan) {
          this.scanPromise_ = this.scanForTokens_(publicJwk);
        }
        return this.scanPromise_;
      }
    }, {
      key: "scanForTokens_",
      value: function scanForTokens_(publicJwk) {
        var _this = this;
        var head = this.ampdoc_.getHeadNode();
        var metas = head.querySelectorAll('meta[name="amp-experiment-token"]');
        if (metas.length == 0) {
          return resolvedPromise();
        }
        var win = this.ampdoc_.win;
        var crypto = Services.cryptoFor(win);
        return crypto.importPkcsKey(publicJwk).then(function(publicKey) {
          var promises = [];
          for (var i = 0; i < metas.length; i++) {
            var meta = metas[i];
            var token = meta.getAttribute("content");
            if (token) {
              var p = _this.tokenMaster_.verifyToken(token, win.location, publicKey).catch(function(error) {
                user().error(TAG5, "Failed to verify experiment token:", error);
              });
              promises.push(p);
            } else {
              user().error(TAG5, "Missing content for experiment token: ", meta);
            }
          }
          return Promise.all(promises);
        });
      }
    }]);
    return OriginExperiments2;
  }();
  var TokenMaster = /* @__PURE__ */ function() {
    function TokenMaster2(crypto, url) {
      _classCallCheck9(this, TokenMaster2);
      this.crypto_ = crypto;
      this.url_ = url;
    }
    _createClass8(TokenMaster2, [{
      key: "generateKeys",
      value: function generateKeys() {
        var generationAlgo = _extends({
          modulusLength: 2048,
          publicExponent: Uint8Array.of(1, 0, 1)
        }, this.crypto_.pkcsAlgo);
        return this.crypto_.subtle.generateKey(generationAlgo, true, ["sign", "verify"]);
      }
    }, {
      key: "generateToken",
      value: function generateToken(version, json, privateKey) {
        var _this2 = this;
        var config = stringToBytes(JSON.stringify(json));
        var data = this.prepend_(version, config);
        return this.sign_(data, privateKey).then(function(signature) {
          return _this2.append_(data, new Uint8Array(signature));
        });
      }
    }, {
      key: "verifyToken",
      value: function verifyToken(token, location, publicKey) {
        var _this3 = this;
        return new Promise(function(resolve) {
          var i = 0;
          var bytes = stringToBytes(atob(token));
          var version = bytes[i];
          if (version !== 0) {
            throw new Error("Unrecognized token version: " + version);
          }
          i += 1;
          var length = new DataView(bytes.buffer).getUint32(i);
          i += 4;
          if (length > bytes.length - i) {
            throw new Error("Unexpected config length: " + length);
          }
          var configBytes = bytes.subarray(i, i + length);
          i += length;
          var data = bytes.subarray(0, i);
          var signature = bytes.subarray(i);
          resolve(_this3.verify_(signature, data, publicKey).then(function(verified) {
            if (!verified) {
              throw new Error("Failed to verify token signature.");
            }
            var configStr = bytesToString(configBytes);
            var config = parseJson(configStr);
            var approvedOrigin = _this3.url_.parse(config["origin"]).origin;
            var sourceOrigin = getSourceOrigin(location);
            if (approvedOrigin !== sourceOrigin) {
              throw new Error("Config origin (" + approvedOrigin + ") does not match " + ("window (" + sourceOrigin + ")."));
            }
            var experimentId = config["experiment"];
            var expiration = config["expiration"];
            if (expiration >= Date.now()) {
              return experimentId;
            } else {
              throw new Error('Experiment "' + experimentId + '" has expired.');
            }
          }));
        });
      }
    }, {
      key: "prepend_",
      value: function prepend_(version, config) {
        var data = new Uint8Array(config.length + 5);
        data[0] = version;
        new DataView(data.buffer).setUint32(1, config.length, false);
        data.set(config, 5);
        return data;
      }
    }, {
      key: "append_",
      value: function append_(data, signature) {
        var string = bytesToString(data) + bytesToString(signature);
        return btoa(string);
      }
    }, {
      key: "sign_",
      value: function sign_(data, privateKey) {
        return this.crypto_.subtle.sign(this.crypto_.pkcsAlgo, privateKey, data);
      }
    }, {
      key: "verify_",
      value: function verify_(signature, data, publicKey) {
        return this.crypto_.verifyPkcs(publicKey, signature, data);
      }
    }]);
    return TokenMaster2;
  }();
  function installOriginExperimentsForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "origin-experiments", OriginExperiments);
  }
  function originExperimentsForDoc(element) {
    return getServiceForDoc(element, "origin-experiments");
  }

  // extensions/amp-experiment/1.0/amp-experiment.js
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
  var TAG6 = "amp-experiment";
  var AmpExperiment = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpExperiment2, _AMP$BaseElement);
    var _super = _createSuper(AmpExperiment2);
    function AmpExperiment2() {
      _classCallCheck10(this, AmpExperiment2);
      return _super.apply(this, arguments);
    }
    _createClass9(AmpExperiment2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.NODISPLAY || layout == Layout.CONTAINER;
      }
    }, {
      key: "isBuildRenderBlocking",
      value: function isBuildRenderBlocking() {
        return true;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this = this;
        var buildCallbackPromises = [getServicePromiseForDoc(this.getAmpDoc(), "variant"), this.isExperimentEnabled_()];
        return Promise.all(buildCallbackPromises).then(function(responses) {
          var variantsService = responses[0];
          var enabled = responses[1];
          var config = dict({});
          try {
            config = _this.getConfig_();
            if (!enabled) {
              user().error(TAG6, "Experiment amp-experiment-1.0 is not enabled.");
              variantsService.init(Promise.resolve(_this.getEmptyExperimentToVariant_(config)));
              return;
            }
            var ampdoc = _this.getAmpDoc();
            var viewer = Services.viewerForDoc(ampdoc);
            var override = ampdoc.getParam(ATTR_PREFIX + "disable-all-experiments");
            if (override != null) {
              variantsService.init(Promise.resolve(_this.getEmptyExperimentToVariant_(config)));
              return;
            }
            var experimentToVariant = Object.create(null);
            var variants = Object.keys(config).map(function(experimentName) {
              return allocateVariant(ampdoc, viewer, experimentName, config[experimentName]).then(function(variantName) {
                experimentToVariant[experimentName] = variantName;
              });
            });
            var experimentVariants = Promise.all(variants).then(function() {
              var ampdoc2 = _this.getAmpDoc();
              var applyExperimentsPromise = applyExperimentToVariant(ampdoc2, config, experimentToVariant);
              var experimentToVariantPromise = applyExperimentsPromise.then(function() {
                return experimentToVariant;
              });
              variantsService.init(experimentToVariantPromise);
              return experimentToVariantPromise;
            }).catch(function(e) {
              variantsService.init(Promise.resolve(_this.getEmptyExperimentToVariant_(config)));
              throw e;
            });
            return experimentVariants;
          } catch (e) {
            variantsService.init(Promise.resolve({}));
            throw e;
          }
        });
      }
    }, {
      key: "getConfig_",
      value: function getConfig_() {
        var children = this.element.children;
        userAssert(children.length == 1 && children[0].tagName == "SCRIPT" && children[0].getAttribute("type").toUpperCase() == "APPLICATION/JSON", '<amp-experiment> should contain exactly one <script type="application/json"> child.');
        return devAssert(parseJson(children[0].textContent));
      }
    }, {
      key: "getEmptyExperimentToVariant_",
      value: function getEmptyExperimentToVariant_(config) {
        var experimentToVariant = Object.create(null);
        Object.keys(config).map(function(experimentName) {
          experimentToVariant[experimentName] = null;
        });
        return experimentToVariant;
      }
    }, {
      key: "isExperimentEnabled_",
      value: function isExperimentEnabled_() {
        if (isExperimentOn(this.win, "amp-experiment-1.0")) {
          return Promise.resolve(true);
        }
        installOriginExperimentsForDoc(this.getAmpDoc());
        return originExperimentsForDoc(this.element).getExperiments().then(function(trials) {
          return trials && trials.includes("amp-experiment-1.0");
        });
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }]);
    return AmpExperiment2;
  }(AMP.BaseElement);
  AMP.extension(TAG6, "1.0", function(AMP2) {
    AMP2.registerServiceForDoc("variant", Variants);
    AMP2.registerElement(TAG6, AmpExperiment);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-experiment-1.0.max.js.map
