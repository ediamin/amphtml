(self.AMP=self.AMP||[]).push({n:"amp-position-observer",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // src/core/types/array.js
  var isArray = Array.isArray;

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
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";

  // src/core/constants/action-constants.js
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

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
  function debounce(win, callback, minInterval) {
    var locker = 0;
    var timestamp = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      var remaining = minInterval - (win.Date.now() - timestamp);
      if (remaining > 0) {
        locker = win.setTimeout(waiter, remaining);
      } else {
        fire(nextCallArgs);
      }
    }
    return function() {
      timestamp = win.Date.now();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      nextCallArgs = args;
      if (!locker) {
        locker = win.setTimeout(waiter, minInterval);
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

  // src/core/math/layout-rect.js
  var RelativePositions = {
    INSIDE: "inside",
    TOP: "top",
    BOTTOM: "bottom"
  };
  function layoutRectLtwh(left, top, width, height) {
    return {
      left,
      top,
      width,
      height,
      bottom: top + height,
      right: left + width,
      x: left,
      y: top
    };
  }
  function rectsOverlap(r1, r2) {
    return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
  }
  function layoutRectsRelativePos(r1, r2) {
    if (r1.top < r2.top) {
      return RelativePositions.TOP;
    } else if (r1.bottom > r2.bottom) {
      return RelativePositions.BOTTOM;
    } else {
      return RelativePositions.INSIDE;
    }
  }
  function layoutRectEquals(r1, r2) {
    if (!r1 || !r2) {
      return false;
    }
    return r1.left == r2.left && r1.top == r2.top && r1.width == r2.width && r1.height == r2.height;
  }

  // src/service/position-observer/position-observer-worker.js
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
  var PositionObserverFidelity = {
    HIGH: 1,
    LOW: 0
  };
  var LOW_FIDELITY_FRAME_COUNT = 4;
  var PositionObserverWorker = /* @__PURE__ */ function() {
    function PositionObserverWorker2(ampdoc, element, fidelity, handler) {
      _classCallCheck3(this, PositionObserverWorker2);
      this.element = element;
      this.handler_ = handler;
      this.fidelity = fidelity;
      this.turn = fidelity == PositionObserverFidelity.LOW ? Math.floor(Math.random() * LOW_FIDELITY_FRAME_COUNT) : 0;
      this.prevPosition_ = null;
      this.viewport_ = Services.viewportForDoc(ampdoc);
    }
    _createClass2(PositionObserverWorker2, [{
      key: "trigger_",
      value: function trigger_(position) {
        var prevPos = this.prevPosition_;
        if (prevPos && layoutRectEquals(prevPos.positionRect, position.positionRect) && layoutRectEquals(prevPos.viewportRect, position.viewportRect)) {
          return;
        }
        devAssert2(position.positionRect, "PositionObserver should always trigger entry with clientRect");
        var positionRect = position.positionRect;
        position.relativePos = layoutRectsRelativePos(positionRect, position.viewportRect);
        if (rectsOverlap(positionRect, position.viewportRect)) {
          this.prevPosition_ = position;
          this.handler_(position);
        } else if (this.prevPosition_) {
          this.prevPosition_ = null;
          position.positionRect = null;
          this.handler_(position);
        }
      }
    }, {
      key: "update",
      value: function update(opt_force) {
        var _this = this;
        if (!opt_force) {
          if (this.turn != 0) {
            this.turn--;
            return;
          }
          if (this.fidelity == PositionObserverFidelity.LOW) {
            this.turn = LOW_FIDELITY_FRAME_COUNT;
          }
        }
        var viewportSize = this.viewport_.getSize();
        var viewportBox = layoutRectLtwh(0, 0, viewportSize.width, viewportSize.height);
        this.viewport_.getClientRectAsync(this.element).then(function(elementBox) {
          _this.trigger_({
            positionRect: elementBox,
            viewportRect: viewportBox,
            relativePos: null
          });
        });
      }
    }]);
    return PositionObserverWorker2;
  }();

  // src/layout.js
  function parseLength(s) {
    if (typeof s == "number") {
      return s + "px";
    }
    if (!s) {
      return void 0;
    }
    if (!/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(s)) {
      return void 0;
    }
    if (/^\d+(\.\d+)?$/.test(s)) {
      return s + "px";
    }
    return s;
  }
  function assertLength(length) {
    userAssert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(length), "Invalid length value: %s", length);
    return length;
  }
  function getLengthUnits(length) {
    assertLength(length);
    var m = userAssert(/[a-z]+/i.exec(length), "Failed to read units from %s", length);
    return m[0];
  }
  function getLengthNumeral(length) {
    var res = parseFloat(length);
    return isFiniteNumber(res) ? res : void 0;
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

  // src/service/position-observer/position-observer-impl.js
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
  var TAG = "POSITION_OBSERVER";
  var SCROLL_TIMEOUT = 500;
  var PositionObserver = /* @__PURE__ */ function() {
    function PositionObserver2(ampdoc) {
      var _this = this;
      _classCallCheck4(this, PositionObserver2);
      this.ampdoc_ = ampdoc;
      this.win_ = ampdoc.win;
      this.workers_ = [];
      this.vsync_ = Services.vsyncFor(this.win_);
      this.viewport_ = Services.viewportForDoc(ampdoc);
      this.unlisteners_ = [];
      this.inScroll_ = false;
      this.measure_ = false;
      this.callbackStarted_ = false;
      this.boundStopScroll_ = debounce(this.win_, function() {
        _this.inScroll_ = false;
      }, SCROLL_TIMEOUT);
    }
    _createClass3(PositionObserver2, [{
      key: "observe",
      value: function observe(element, fidelity, handler) {
        var _this2 = this;
        var worker = new PositionObserverWorker(this.ampdoc_, element, fidelity, handler);
        this.workers_.push(worker);
        if (!this.callbackStarted_) {
          this.startCallback_();
        }
        worker.update();
        return function() {
          for (var i = 0; i < _this2.workers_.length; i++) {
            if (_this2.workers_[i] == worker) {
              _this2.removeWorker_(i);
              return;
            }
          }
        };
      }
    }, {
      key: "unobserve",
      value: function unobserve(element) {
        for (var i = 0; i < this.workers_.length; i++) {
          if (this.workers_[i].element == element) {
            this.removeWorker_(i);
            return;
          }
        }
        dev().error(TAG, "cannot unobserve unobserved element");
      }
    }, {
      key: "removeWorker_",
      value: function removeWorker_(index) {
        this.workers_.splice(index, 1);
        if (this.workers_.length == 0) {
          this.stopCallback_();
        }
      }
    }, {
      key: "startCallback_",
      value: function startCallback_() {
        var _this3 = this;
        this.callbackStarted_ = true;
        this.unlisteners_.push(this.viewport_.onScroll(function() {
          _this3.onScrollHandler_();
        }));
        this.unlisteners_.push(this.viewport_.onResize(function() {
          _this3.onResizeHandler_();
        }));
      }
    }, {
      key: "stopCallback_",
      value: function stopCallback_() {
        this.callbackStarted_ = false;
        while (this.unlisteners_.length) {
          var unlisten = this.unlisteners_.pop();
          unlisten();
        }
      }
    }, {
      key: "updateAllEntries",
      value: function updateAllEntries(opt_force) {
        for (var i = 0; i < this.workers_.length; i++) {
          var worker = this.workers_[i];
          worker.update(opt_force);
        }
      }
    }, {
      key: "onScrollHandler_",
      value: function onScrollHandler_() {
        this.boundStopScroll_();
        this.inScroll_ = true;
        if (!this.measure_) {
          this.schedulePass_();
        }
      }
    }, {
      key: "onResizeHandler_",
      value: function onResizeHandler_() {
        this.updateAllEntries(true);
      }
    }, {
      key: "schedulePass_",
      value: function schedulePass_() {
        var _this4 = this;
        this.updateAllEntries();
        this.measure_ = true;
        if (!this.inScroll_) {
          this.measure_ = false;
          return;
        }
        this.vsync_.measure(function() {
          _this4.schedulePass_();
        });
      }
    }]);
    return PositionObserver2;
  }();
  function installPositionObserverServiceForDoc(ampdoc) {
    registerServiceBuilderForDoc(ampdoc, "position-observer", PositionObserver);
  }

  // extensions/amp-position-observer/0.1/amp-position-observer.js
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
  var TAG2 = "amp-position-observer";
  var RESIZE_THRESHOLD = 150;
  var AmpVisibilityObserver = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpVisibilityObserver2, _AMP$BaseElement);
    var _super = _createSuper(AmpVisibilityObserver2);
    function AmpVisibilityObserver2(element) {
      var _this;
      _classCallCheck5(this, AmpVisibilityObserver2);
      _this = _super.call(this, element);
      _this.action_ = null;
      _this.positionObserver_ = null;
      _this.viewport_ = null;
      _this.isVisible_ = false;
      _this.topRatio_ = 0;
      _this.bottomRatio_ = 0;
      _this.topMarginExpr_ = "0";
      _this.bottomMarginExpr_ = "0";
      _this.resolvedTopMargin_ = 0;
      _this.resolvedBottomMargin_ = 0;
      _this.viewportRect_ = null;
      _this.targetId_ = null;
      _this.initialViewportHeight_ = null;
      _this.scrollProgress_ = 0;
      _this.remainingScrollToExit_ = 0;
      _this.runOnce_ = false;
      _this.firstIterationComplete_ = false;
      return _this;
    }
    _createClass4(AmpVisibilityObserver2, [{
      key: "buildCallback",
      value: function buildCallback() {
        this.getAmpDoc().whenFirstVisible().then(this.init_.bind(this));
        this.runOnce_ = this.element.hasAttribute("once");
      }
    }, {
      key: "init_",
      value: function init_() {
        var _this2 = this;
        this.parseAttributes_();
        this.action_ = Services.actionServiceForDoc(this.element);
        this.viewport_ = Services.viewportForDoc(this.element);
        this.maybeInstallPositionObserver_();
        this.getAmpDoc().whenReady().then(function() {
          var scene = _this2.discoverScene_();
          _this2.positionObserver_.observe(scene, PositionObserverFidelity.HIGH, _this2.positionChanged_.bind(_this2));
        });
      }
    }, {
      key: "triggerEnter_",
      value: function triggerEnter_() {
        var name = "enter";
        var event = createCustomEvent(this.win, TAG2 + "." + name, dict({}));
        this.action_.trigger(this.element, name, event, ActionTrust.LOW);
      }
    }, {
      key: "triggerExit_",
      value: function triggerExit_() {
        var name = "exit";
        var event = createCustomEvent(this.win, TAG2 + "." + name, dict({}));
        this.action_.trigger(this.element, name, event, ActionTrust.LOW);
      }
    }, {
      key: "triggerScroll_",
      value: function triggerScroll_() {
        var scrolltop = this.viewport_.getScrollTop();
        var positionObserverData = dict({
          "start-scroll-offset": scrolltop,
          "end-scroll-offset": scrolltop + this.remainingScrollToExit_,
          "initial-inview-percent": this.scrollProgress_
        });
        var name = "scroll";
        var event = createCustomEvent(this.win, TAG2 + "." + name, dict({
          "percent": this.scrollProgress_,
          "positionObserverData": positionObserverData
        }));
        this.action_.trigger(this.element, name, event, ActionTrust.LOW);
      }
    }, {
      key: "positionChanged_",
      value: function positionChanged_(entry) {
        if (this.runOnce_ && this.firstIterationComplete_) {
          return;
        }
        var wasVisible = this.isVisible_;
        var prevViewportHeight = this.viewportRect_ && this.viewportRect_.height;
        this.adjustForSmallViewportResize_(entry);
        this.viewportRect_ = entry.viewportRect;
        if (prevViewportHeight != entry.viewportRect.height) {
          this.recalculateMargins_();
        }
        var adjViewportRect = this.applyMargins_(entry.viewportRect);
        var positionRect = entry.positionRect;
        var relPos;
        if (!positionRect) {
          this.isVisible_ = false;
          relPos = entry.relativePos;
        } else {
          relPos = layoutRectsRelativePos(positionRect, adjViewportRect);
          this.updateVisibility_(positionRect, adjViewportRect, relPos);
        }
        if (wasVisible && !this.isVisible_) {
          this.scrollProgress_ = relPos == RelativePositions.BOTTOM ? 0 : 1;
          this.triggerScroll_();
          this.triggerExit_();
          this.firstIterationComplete_ = true;
        }
        if (!wasVisible && this.isVisible_) {
          this.triggerEnter_();
        }
        if (this.isVisible_) {
          this.updateScrollProgress_(positionRect, adjViewportRect);
          this.triggerScroll_();
        }
      }
    }, {
      key: "updateVisibility_",
      value: function updateVisibility_(positionRect, adjustedViewportRect, relativePos) {
        if (relativePos == RelativePositions.INSIDE) {
          this.isVisible_ = true;
          return;
        }
        var ratioToUse = relativePos == RelativePositions.TOP ? this.topRatio_ : this.bottomRatio_;
        var offset = positionRect.height * ratioToUse;
        if (relativePos == RelativePositions.BOTTOM) {
          this.isVisible_ = positionRect.top <= adjustedViewportRect.bottom - offset;
        } else {
          this.isVisible_ = positionRect.bottom >= adjustedViewportRect.top + offset;
        }
      }
    }, {
      key: "updateScrollProgress_",
      value: function updateScrollProgress_(positionRect, adjustedViewportRect) {
        if (!positionRect) {
          return;
        }
        var totalProgressOffset = positionRect.height * this.bottomRatio_ + positionRect.height * this.topRatio_;
        var totalProgress = adjustedViewportRect.height + positionRect.height - totalProgressOffset;
        var topOffset = Math.abs(positionRect.top - this.resolvedTopMargin_ - (adjustedViewportRect.height - positionRect.height * this.bottomRatio_));
        this.scrollProgress_ = topOffset / totalProgress;
        this.remainingScrollToExit_ = totalProgress - topOffset;
      }
    }, {
      key: "parseAttributes_",
      value: function parseAttributes_() {
        var ratios = this.element.getAttribute("intersection-ratios");
        if (ratios) {
          var topBottom = ratios.trim().split(" ");
          this.topRatio_ = this.validateAndResolveRatio_(topBottom[0]);
          this.bottomRatio_ = this.topRatio_;
          if (topBottom[1]) {
            this.bottomRatio_ = this.validateAndResolveRatio_(topBottom[1]);
          }
        }
        var margins = this.element.getAttribute("viewport-margins");
        if (margins) {
          var _topBottom = margins.trim().split(" ");
          this.topMarginExpr_ = _topBottom[0];
          this.bottomMarginExpr_ = this.topMarginExpr_;
          if (_topBottom[1]) {
            this.bottomMarginExpr_ = _topBottom[1];
          }
        }
        this.targetId_ = this.element.getAttribute("target");
      }
    }, {
      key: "discoverScene_",
      value: function discoverScene_() {
        var scene;
        if (this.targetId_) {
          scene = user().assertElement(this.win.document.getElementById(this.targetId_), "No element found with id:" + this.targetId_);
        } else {
          scene = this.element.parentNode;
        }
        if (this.win.document.body === scene) {
          scene = this.win.document.documentElement;
        }
        return dev().assertElement(scene);
      }
    }, {
      key: "validateAndResolveMargin_",
      value: function validateAndResolveMargin_(val) {
        val = assertLength(parseLength(val));
        var unit = getLengthUnits(val);
        var num = getLengthNumeral(val);
        if (!num) {
          return 0;
        }
        userAssert(unit == "px" || unit == "vh", "Only pixel or vh are valid as units for exclusion margins: " + val);
        if (unit == "vh") {
          num = num / 100 * this.viewportRect_.height;
        }
        return num;
      }
    }, {
      key: "validateAndResolveRatio_",
      value: function validateAndResolveRatio_(val) {
        var num = parseFloat(val);
        userAssert(num >= 0 && num <= 1, "Ratios must be a decimal between 0 and 1: " + val);
        return num;
      }
    }, {
      key: "recalculateMargins_",
      value: function recalculateMargins_() {
        devAssert2(this.viewportRect_);
        devAssert2(this.bottomMarginExpr_);
        devAssert2(this.topMarginExpr_);
        this.resolvedTopMargin_ = this.validateAndResolveMargin_(this.topMarginExpr_);
        this.resolvedBottomMargin_ = this.validateAndResolveMargin_(this.bottomMarginExpr_);
      }
    }, {
      key: "applyMargins_",
      value: function applyMargins_(rect) {
        devAssert2(rect);
        rect = layoutRectLtwh(rect.left, rect.top + this.resolvedTopMargin_, rect.width, rect.height - this.resolvedBottomMargin_ - this.resolvedTopMargin_);
        return rect;
      }
    }, {
      key: "adjustForSmallViewportResize_",
      value: function adjustForSmallViewportResize_(entry) {
        if (!this.initialViewportHeight_) {
          this.initialViewportHeight_ = entry.viewportRect.height;
        }
        var viewportHeightChangeDelta = this.initialViewportHeight_ - entry.viewportRect.height;
        var resizeOffset = 0;
        if (Math.abs(viewportHeightChangeDelta) < RESIZE_THRESHOLD) {
          resizeOffset = viewportHeightChangeDelta;
        } else {
          this.initialViewportHeight_ = null;
        }
        entry.viewportRect = layoutRectLtwh(entry.viewportRect.left, entry.viewportRect.top, entry.viewportRect.width, entry.viewportRect.height + resizeOffset);
      }
    }, {
      key: "maybeInstallPositionObserver_",
      value: function maybeInstallPositionObserver_() {
        if (!this.positionObserver_) {
          installPositionObserverServiceForDoc(this.getAmpDoc());
          this.positionObserver_ = Services.positionObserverForDoc(this.element);
        }
      }
    }, {
      key: "maybeUninstallPositionObserver_",
      value: function maybeUninstallPositionObserver_() {
        if (this.positionObserver_) {
          var scene = this.discoverScene_();
          this.positionObserver_.unobserve(scene);
          this.positionObserver_ = null;
        }
      }
    }]);
    return AmpVisibilityObserver2;
  }(AMP.BaseElement);
  AMP.extension(TAG2, "0.1", function(AMP2) {
    AMP2.registerElement(TAG2, AmpVisibilityObserver);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-position-observer-0.1.max.js.map
