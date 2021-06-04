(self.AMP=self.AMP||[]).push({n:"amp-google-assistant-assistjs",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
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
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";

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
      value: function ampdocServiceFor(window2) {
        return getService(window2, "ampdoc");
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
      value: function batchedXhrFor(window2) {
        return getService(window2, "batched-xhr");
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
      value: function cryptoFor(window2) {
        return getService(window2, "crypto");
      }
    }, {
      key: "documentInfoForDoc",
      value: function documentInfoForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "documentInfo").get();
      }
    }, {
      key: "extensionsFor",
      value: function extensionsFor(window2) {
        return getService(window2, "extensions");
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
      value: function performanceFor(window2) {
        return getService(window2, "performance");
      }
    }, {
      key: "performanceForOrNull",
      value: function performanceForOrNull(window2) {
        return getExistingServiceOrNull(window2, "performance");
      }
    }, {
      key: "platformFor",
      value: function platformFor(window2) {
        return getService(window2, "platform");
      }
    }, {
      key: "positionObserverForDoc",
      value: function positionObserverForDoc(element) {
        return getServiceForDoc(element, "position-observer");
      }
    }, {
      key: "preconnectFor",
      value: function preconnectFor(window2) {
        return getService(window2, "preconnect");
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
      value: function timerFor(window2) {
        return getServiceInEmbedWin(window2, "timer");
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
      value: function vsyncFor(window2) {
        return getService(window2, "vsync");
      }
    }, {
      key: "viewportForDoc",
      value: function viewportForDoc(elementOrAmpDoc) {
        return getServiceForDoc(elementOrAmpDoc, "viewport");
      }
    }, {
      key: "xhrFor",
      value: function xhrFor(window2) {
        return getService(window2, "xhr");
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

  // extensions/amp-google-assistant-assistjs/0.1/amp-google-assistant-inline-suggestion-bar.js
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf5(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf5(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var AmpGoogleAssistantInlineSuggestionBar = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpGoogleAssistantInlineSuggestionBar2, _AMP$BaseElement);
    var _super = _createSuper(AmpGoogleAssistantInlineSuggestionBar2);
    function AmpGoogleAssistantInlineSuggestionBar2(element) {
      var _this;
      _classCallCheck3(this, AmpGoogleAssistantInlineSuggestionBar2);
      _this = _super.call(this, element);
      _this.configService_ = null;
      _this.frameService_ = null;
      return _this;
    }
    _createClass2(AmpGoogleAssistantInlineSuggestionBar2, [{
      key: "buildCallback",
      value: function buildCallback() {
        this.configService_ = Services.assistjsConfigServiceForDoc(this.element);
        this.frameService_ = Services.assistjsFrameServiceForDoc(this.element);
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this2 = this;
        var iframe = this.win.document.createElement("iframe");
        this.configService_.getWidgetIframeUrl("inlinesuggestionbar").then(function(iframeUrl) {
          addAttributesToElement(iframe, {
            src: iframeUrl,
            sandbox: "allow-scripts"
          });
          _this2.applyFillContent(iframe, true);
          _this2.element.appendChild(iframe);
        });
        iframe.addEventListener("load", function() {
          _this2.frameService_.sendTextQuery();
        });
        return this.loadPromise(iframe);
      }
    }]);
    return AmpGoogleAssistantInlineSuggestionBar2;
  }(AMP.BaseElement);

  // third_party/closure-responding-channel/closure-bundle.js
  "use strict";
  var k;
  var m = self;
  function n() {
  }
  function p(a) {
    var b = typeof a;
    return b == "object" && a != null || b == "function";
  }
  function aa(a) {
    a !== null && "removeAttribute" in a && a.removeAttribute(q);
    try {
      delete a[q];
    } catch (b) {
    }
  }
  var q = "closure_uid_" + (1e9 * Math.random() >>> 0);
  var ba = 0;
  function ca(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function da(a, b, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  }
  function r(a, b, c) {
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? r = ca : r = da;
    return r.apply(null, arguments);
  }
  function ea(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function t(a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.A = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.X = function(d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) {
        g[h - 2] = arguments[h];
      }
      return b.prototype[e].apply(d, g);
    };
  }
  function u(a) {
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, u);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  t(u, Error);
  u.prototype.name = "CustomError";
  var fa = Array.prototype.indexOf ? function(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function(a, b) {
    if (typeof a === "string")
      return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) {
      if (c in a && a[c] === b)
        return c;
    }
    return -1;
  };
  var ha = Array.prototype.map ? function(a, b) {
    return Array.prototype.map.call(a, b, void 0);
  } : function(a, b) {
    for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++) {
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    }
    return d;
  };
  var ia = Array.prototype.some ? function(a, b) {
    return Array.prototype.some.call(a, b, void 0);
  } : function(a, b) {
    for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) {
      if (e in d && b.call(void 0, d[e], e, a))
        return true;
    }
    return false;
  };
  var ja = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  };
  function ka(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var v;
  a: {
    la = m.navigator;
    if (la) {
      ma = la.userAgent;
      if (ma) {
        v = ma;
        break a;
      }
    }
    v = "";
  }
  var la;
  var ma;
  function w(a) {
    return v.indexOf(a) != -1;
  }
  function na(a, b) {
    for (var c in a) {
      b.call(void 0, a[c], c, a);
    }
  }
  function oa(a, b, c) {
    var d = {}, e;
    for (e in a) {
      d[e] = b.call(c, a[e], e, a);
    }
    return d;
  }
  var pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function qa(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) {
        a[c] = d[c];
      }
      for (var f = 0; f < pa.length; f++) {
        c = pa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }
  }
  function ra(a) {
    ra[" "](a);
    return a;
  }
  ra[" "] = n;
  var sa = w("Opera");
  var ta = w("Trident") || w("MSIE");
  var ua = w("Edge");
  var va = w("Gecko") && !(v.toLowerCase().indexOf("webkit") != -1 && !w("Edge")) && !(w("Trident") || w("MSIE")) && !w("Edge");
  var wa = v.toLowerCase().indexOf("webkit") != -1 && !w("Edge");
  var xa;
  a: {
    ya = "", za = function() {
      var a = v;
      if (va)
        return /rv:([^\);]+)(\)|;)/.exec(a);
      if (ua)
        return /Edge\/([\d\.]+)/.exec(a);
      if (ta)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (wa)
        return /WebKit\/(\S+)/.exec(a);
      if (sa)
        return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();
    za && (ya = za ? za[1] : "");
    if (ta) {
      Aa = m.document;
      x = Aa ? Aa.documentMode : void 0;
      if (x != null && x > parseFloat(ya)) {
        xa = String(x);
        break a;
      }
    }
    xa = ya;
  }
  var ya;
  var za;
  var x;
  var Aa;
  var Ba = xa;
  function Ca(a) {
    function b(f, g) {
      var h = g + "  ";
      try {
        if (f === void 0)
          c.push("undefined");
        else if (f === null)
          c.push("NULL");
        else if (typeof f === "string")
          c.push('"' + f.replace(/\n/g, "\n" + g) + '"');
        else if (typeof f === "function")
          c.push(String(f).replace(/\n/g, "\n" + g));
        else if (p(f)) {
          f[q] || d.push(f);
          var l = Object.prototype.hasOwnProperty.call(f, q) && f[q] || (f[q] = ++ba);
          if (e[l])
            c.push("*** reference loop detected (id=" + l + ") ***");
          else {
            e[l] = true;
            c.push("{");
            for (var z in f) {
              typeof f[z] !== "function" && (c.push("\n"), c.push(h), c.push(z + " = "), b(f[z], h));
            }
            c.push("\n" + g + "}");
            delete e[l];
          }
        } else
          c.push(f);
      } catch (Kb) {
        c.push("*** " + Kb + " ***");
      }
    }
    var c = [], d = [], e = {};
    b(a, "");
    for (a = 0; a < d.length; a++) {
      aa(d[a]);
    }
  }
  function y(a) {
    a && typeof a.R == "function" && a.R();
  }
  var Da = function() {
    if (!m.addEventListener || !Object.defineProperty)
      return false;
    var a = false, b = Object.defineProperty({}, "passive", {
      get: function get() {
        a = true;
      }
    });
    try {
      m.addEventListener("test", n, b), m.removeEventListener("test", n, b);
    } catch (c) {
    }
    return a;
  }();
  function A() {
    this.h = this.h;
    this.l = this.l;
  }
  A.prototype.h = false;
  A.prototype.R = function() {
    this.h || (this.h = true, this.o());
  };
  A.prototype.o = function() {
    if (this.l)
      for (; this.l.length; ) {
        this.l.shift()();
      }
  };
  function B(a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = false;
  }
  B.prototype.h = function() {
    this.defaultPrevented = true;
  };
  function C(a, b) {
    B.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a) {
      var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.g = b;
      if (b = a.relatedTarget) {
        if (va) {
          a: {
            try {
              ra(b.nodeName);
              var e = true;
              break a;
            } catch (f) {
            }
            e = false;
          }
          e || (b = null);
        }
      } else
        c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = typeof a.pointerType === "string" ? a.pointerType : Ea[a.pointerType] || "";
      this.state = a.state;
      this.i = a;
      a.defaultPrevented && C.A.h.call(this);
    }
  }
  t(C, B);
  var Ea = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  C.prototype.h = function() {
    C.A.h.call(this);
    var a = this.i;
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
  };
  var D = "closure_listenable_" + (1e6 * Math.random() | 0);
  var Fa = 0;
  function Ga(a, b, c, d, e) {
    this.listener = a;
    this.g = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.J = e;
    this.key = ++Fa;
    this.F = this.H = false;
  }
  function E(a) {
    a.F = true;
    a.listener = null;
    a.g = null;
    a.src = null;
    a.J = null;
  }
  function F(a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  }
  F.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var g = Ha(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.H = false)) : (b = new Ga(b, this.src, f, !!d, e), b.H = c, a.push(b));
    return b;
  };
  function Ia(a, b) {
    var c = b.type;
    if (c in a.g) {
      var d = a.g[c], e = fa(d, b), f;
      (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
      f && (E(b), a.g[c].length == 0 && (delete a.g[c], a.h--));
    }
  }
  function Ha(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.F && f.listener == b && f.capture == !!c && f.J == d)
        return e;
    }
    return -1;
  }
  var Ja = "closure_lm_" + (1e6 * Math.random() | 0);
  var Ka = {};
  var La = 0;
  function Ma(a, b, c, d, e) {
    if (d && d.once)
      return Na(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) {
        Ma(a, b[f], c, d, e);
      }
      return null;
    }
    c = Oa(c);
    return a && a[D] ? a.g.add(String(b), c, false, p(d) ? !!d.capture : !!d, e) : Pa(a, b, c, false, d, e);
  }
  function Pa(a, b, c, d, e, f) {
    if (!b)
      throw Error("Invalid event type");
    var g = p(e) ? !!e.capture : !!e, h = Qa(a);
    h || (a[Ja] = h = new F(a));
    c = h.add(b, c, d, g, f);
    if (c.g)
      return c;
    d = Ra();
    c.g = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      Da || (e = g), e === void 0 && (e = false), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
      a.attachEvent(Sa(b.toString()), d);
    else if (a.addListener && a.removeListener)
      a.addListener(d);
    else
      throw Error("addEventListener and attachEvent are unavailable.");
    La++;
    return c;
  }
  function Ra() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    var b = Ta;
    return a;
  }
  function Na(a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) {
        Na(a, b[f], c, d, e);
      }
      return null;
    }
    c = Oa(c);
    return a && a[D] ? a.g.add(String(b), c, true, p(d) ? !!d.capture : !!d, e) : Pa(a, b, c, true, d, e);
  }
  function Ua(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) {
        Ua(a, b[f], c, d, e);
      }
    else
      (d = p(d) ? !!d.capture : !!d, c = Oa(c), a && a[D]) ? (a = a.g, b = String(b).toString(), b in a.g && (f = a.g[b], c = Ha(f, c, d, e), -1 < c && (E(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.g[b], a.h--)))) : a && (a = Qa(a)) && (b = a.g[b.toString()], a = -1, b && (a = Ha(b, c, d, e)), (c = -1 < a ? b[a] : null) && Va(c));
  }
  function Va(a) {
    if (typeof a !== "number" && a && !a.F) {
      var b = a.src;
      if (b && b[D])
        Ia(b.g, a);
      else {
        var c = a.type, d = a.g;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Sa(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        La--;
        (c = Qa(b)) ? (Ia(c, a), c.h == 0 && (c.src = null, b[Ja] = null)) : E(a);
      }
    }
  }
  function Sa(a) {
    return a in Ka ? Ka[a] : Ka[a] = "on" + a;
  }
  function Ta(a, b) {
    if (a.F)
      a = true;
    else {
      b = new C(b, this);
      var c = a.listener, d = a.J || a.src;
      a.H && Va(a);
      a = c.call(d, b);
    }
    return a;
  }
  function Qa(a) {
    a = a[Ja];
    return a instanceof F ? a : null;
  }
  var Wa = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function Oa(a) {
    if (typeof a === "function")
      return a;
    a[Wa] || (a[Wa] = function(b) {
      return a.handleEvent(b);
    });
    return a[Wa];
  }
  function Xa(a) {
    var b = [];
    Ya(new Za(), a, b);
    return b.join("");
  }
  function Za() {
  }
  function Ya(a, b, c) {
    if (b == null)
      c.push("null");
    else {
      if (typeof b == "object") {
        if (Array.isArray(b)) {
          var d = b;
          b = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b; f++) {
            c.push(e), Ya(a, d[f], c), e = ",";
          }
          c.push("]");
          return;
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean)
          b = b.valueOf();
        else {
          c.push("{");
          e = "";
          for (d in b) {
            Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], typeof f != "function" && (c.push(e), $a(d, c), c.push(":"), Ya(a, f, c), e = ","));
          }
          c.push("}");
          return;
        }
      }
      switch (typeof b) {
        case "string":
          $a(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  }
  var ab = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\u000b"
  };
  var bb = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
  function $a(a, b) {
    b.push('"', a.replace(bb, function(c) {
      var d = ab[c];
      d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), ab[c] = d);
      return d;
    }), '"');
  }
  function G() {
    A.call(this);
    this.j = {};
  }
  t(G, A);
  G.prototype.connect = function(a) {
    a && a();
  };
  G.prototype.C = function(a, b, c) {
    this.j[a] = {
      I: b,
      T: !!c
    };
  };
  G.prototype.K = function(a) {
    this.i = a;
  };
  G.prototype.o = function() {
    G.A.o.call(this);
    delete this.j;
    delete this.i;
  };
  function H(a) {
    A.call(this);
    this.g = a;
  }
  t(H, A);
  k = H.prototype;
  k.cancel = function() {
    this.g.cancel();
  };
  k.connect = function(a) {
    a && a();
  };
  k.C = function(a, b, c) {
    cb(this.g, function(d) {
      d.C(a, b, c);
    });
  };
  k.K = function(a) {
    cb(this.g, function(b) {
      b.K(a);
    });
  };
  k.D = function(a, b) {
    cb(this.g, function(c) {
      c.D(a, b);
    });
  };
  k.o = function() {
    this.cancel();
    H.A.o.call(this);
  };
  function db(a, b) {
    this.i = a;
    this.l = b;
    this.h = 0;
    this.g = null;
  }
  db.prototype.get = function() {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else
      a = this.i();
    return a;
  };
  function eb(a, b) {
    a.l(b);
    100 > a.h && (a.h++, b.next = a.g, a.g = b);
  }
  function fb() {
    var a = document;
    var b = "IFRAME";
    a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
    return a.createElement(b);
  }
  var gb;
  function hb() {
    var a = m.MessageChannel;
    typeof a === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener && !w("Presto") && (a = function a2() {
      var e = fb();
      e.style.display = "none";
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.close();
      var g = "callImmediate" + Math.random(), h = f.location.protocol == "file:" ? "*" : f.location.protocol + "//" + f.location.host;
      e = r(function(l) {
        if ((h == "*" || l.origin == h) && l.data == g)
          this.port1.onmessage();
      }, this);
      f.addEventListener("message", e, false);
      this.port1 = {};
      this.port2 = {
        postMessage: function postMessage() {
          f.postMessage(g, h);
        }
      };
    });
    if (typeof a !== "undefined" && !w("Trident") && !w("MSIE")) {
      var b = new a(), c = {}, d = c;
      b.port1.onmessage = function() {
        if (c.next !== void 0) {
          c = c.next;
          var e = c.P;
          c.P = null;
          e();
        }
      };
      return function(e) {
        d.next = {
          P: e
        };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function(e) {
      m.setTimeout(e, 0);
    };
  }
  function ib(a) {
    m.setTimeout(function() {
      throw a;
    }, 0);
  }
  function jb() {
    this.h = this.g = null;
  }
  jb.prototype.add = function(a, b) {
    var c = kb.get();
    c.set(a, b);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  };
  function lb() {
    var a = mb, b = null;
    a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
    return b;
  }
  var kb = new db(function() {
    return new nb();
  }, function(a) {
    return a.reset();
  });
  function nb() {
    this.next = this.g = this.h = null;
  }
  nb.prototype.set = function(a, b) {
    this.h = a;
    this.g = b;
    this.next = null;
  };
  nb.prototype.reset = function() {
    this.next = this.g = this.h = null;
  };
  function ob(a, b) {
    I || pb();
    qb || (I(), qb = true);
    mb.add(a, b);
  }
  var I;
  function pb() {
    if (m.Promise && m.Promise.resolve) {
      var a = m.Promise.resolve(void 0);
      I = function I2() {
        a.then(rb);
      };
    } else
      I = function I2() {
        var b = rb;
        typeof m.setImmediate !== "function" || m.Window && m.Window.prototype && !w("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (gb || (gb = hb()), gb(b)) : m.setImmediate(b);
      };
  }
  var qb = false;
  var mb = new jb();
  function rb() {
    for (var a; a = lb(); ) {
      try {
        a.h.call(a.g);
      } catch (b) {
        ib(b);
      }
      eb(kb, a);
    }
    qb = false;
  }
  function sb(a) {
    if (!a)
      return false;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return false;
    }
  }
  function J(a) {
    this.g = 0;
    this.s = void 0;
    this.l = this.h = this.i = null;
    this.j = this.m = false;
    if (a != n)
      try {
        var b = this;
        a.call(void 0, function(c) {
          K(b, 2, c);
        }, function(c) {
          K(b, 3, c);
        });
      } catch (c) {
        K(this, 3, c);
      }
  }
  function tb() {
    this.next = this.i = this.h = this.l = this.g = null;
    this.j = false;
  }
  tb.prototype.reset = function() {
    this.i = this.h = this.l = this.g = null;
    this.j = false;
  };
  var ub = new db(function() {
    return new tb();
  }, function(a) {
    a.reset();
  });
  function vb(a, b, c) {
    var d = ub.get();
    d.l = a;
    d.h = b;
    d.i = c;
    return d;
  }
  function wb(a) {
    if (a instanceof J)
      return a;
    var b = new J(n);
    K(b, 2, a);
    return b;
  }
  J.prototype.then = function(a, b, c) {
    return xb(this, typeof a === "function" ? a : null, typeof b === "function" ? b : null, c);
  };
  J.prototype.$goog_Thenable = true;
  J.prototype.cancel = function(a) {
    if (this.g == 0) {
      var b = new L(a);
      ob(function() {
        yb(this, b);
      }, this);
    }
  };
  function yb(a, b) {
    if (a.g == 0)
      if (a.i) {
        var c = a.i;
        if (c.h) {
          for (var d = 0, e = null, f = null, g = c.h; g && (g.j || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) {
            e || (f = g);
          }
          e && (c.g == 0 && d == 1 ? yb(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : zb(c), Ab(c, e, 3, b)));
        }
        a.i = null;
      } else
        K(a, 3, b);
  }
  function Bb(a, b) {
    a.h || a.g != 2 && a.g != 3 || Cb(a);
    a.l ? a.l.next = b : a.h = b;
    a.l = b;
  }
  function xb(a, b, c, d) {
    var e = vb(null, null, null);
    e.g = new J(function(f, g) {
      e.l = b ? function(h) {
        try {
          var l = b.call(d, h);
          f(l);
        } catch (z) {
          g(z);
        }
      } : f;
      e.h = c ? function(h) {
        try {
          var l = c.call(d, h);
          l === void 0 && h instanceof L ? g(h) : f(l);
        } catch (z) {
          g(z);
        }
      } : g;
    });
    e.g.i = a;
    Bb(a, e);
    return e.g;
  }
  J.prototype.B = function(a) {
    this.g = 0;
    K(this, 2, a);
  };
  J.prototype.L = function(a) {
    this.g = 0;
    K(this, 3, a);
  };
  function K(a, b, c) {
    if (a.g == 0) {
      a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
      a.g = 1;
      a: {
        var d = c, e = a.B, f = a.L;
        if (d instanceof J) {
          Bb(d, vb(e || n, f || null, a));
          var g = true;
        } else if (sb(d))
          d.then(e, f, a), g = true;
        else {
          if (p(d))
            try {
              var h = d.then;
              if (typeof h === "function") {
                Db(d, h, e, f, a);
                g = true;
                break a;
              }
            } catch (l) {
              f.call(a, l);
              g = true;
              break a;
            }
          g = false;
        }
      }
      g || (a.s = c, a.g = b, a.i = null, Cb(a), b != 3 || c instanceof L || Eb(a, c));
    }
  }
  function Db(a, b, c, d, e) {
    function f(l) {
      h || (h = true, d.call(e, l));
    }
    function g(l) {
      h || (h = true, c.call(e, l));
    }
    var h = false;
    try {
      b.call(a, g, f);
    } catch (l) {
      f(l);
    }
  }
  function Cb(a) {
    a.m || (a.m = true, ob(a.u, a));
  }
  function zb(a) {
    var b = null;
    a.h && (b = a.h, a.h = b.next, b.next = null);
    a.h || (a.l = null);
    return b;
  }
  J.prototype.u = function() {
    for (var a; a = zb(this); ) {
      Ab(this, a, this.g, this.s);
    }
    this.m = false;
  };
  function Ab(a, b, c, d) {
    if (c == 3 && b.h && !b.j)
      for (; a && a.j; a = a.i) {
        a.j = false;
      }
    if (b.g)
      b.g.i = null, Fb(b, c, d);
    else
      try {
        b.j ? b.l.call(b.i) : Fb(b, c, d);
      } catch (e) {
        Gb.call(null, e);
      }
    eb(ub, b);
  }
  function Fb(a, b, c) {
    b == 2 ? a.l.call(a.i, c) : a.h && a.h.call(a.i, c);
  }
  function Eb(a, b) {
    a.j = true;
    ob(function() {
      a.j && Gb.call(null, b);
    });
  }
  var Gb = ib;
  function L(a) {
    u.call(this, a);
  }
  t(L, u);
  L.prototype.name = "cancel";
  function M(a) {
    this.j = [];
    this.O = a;
    this.l = this.i = false;
    this.h = void 0;
    this.B = this.U = this.s = false;
    this.m = 0;
    this.g = null;
    this.u = 0;
  }
  M.prototype.cancel = function(a) {
    if (this.i)
      this.h instanceof M && this.h.cancel();
    else {
      if (this.g) {
        var b = this.g;
        delete this.g;
        a ? b.cancel(a) : (b.u--, 0 >= b.u && b.cancel());
      }
      this.O ? this.O.call(null, this) : this.B = true;
      this.i || (a = new N(this), Hb(this), O(this, false, a));
    }
  };
  M.prototype.L = function(a, b) {
    this.s = false;
    O(this, a, b);
  };
  function O(a, b, c) {
    a.i = true;
    a.h = c;
    a.l = !b;
    Ib(a);
  }
  function Hb(a) {
    if (a.i) {
      if (!a.B)
        throw new P(a);
      a.B = false;
    }
  }
  M.prototype.I = function(a) {
    Hb(this);
    O(this, true, a);
  };
  function cb(a, b) {
    Q(a, b, null, void 0);
  }
  function Q(a, b, c, d) {
    a.j.push([b, c, d]);
    a.i && Ib(a);
  }
  M.prototype.then = function(a, b, c) {
    var d, e, f = new J(function(g, h) {
      d = g;
      e = h;
    });
    Q(this, d, function(g) {
      g instanceof N ? f.cancel() : e(g);
    });
    return f.then(a, b, c);
  };
  M.prototype.$goog_Thenable = true;
  function Jb(a) {
    return ia(a.j, function(b) {
      return typeof b[1] === "function";
    });
  }
  function Ib(a) {
    if (a.m && a.i && Jb(a)) {
      var b = a.m, c = R[b];
      c && (m.clearTimeout(c.g), delete R[b]);
      a.m = 0;
    }
    a.g && (a.g.u--, delete a.g);
    b = a.h;
    for (var d = c = false; a.j.length && !a.s; ) {
      var e = a.j.shift(), f = e[0], g = e[1];
      e = e[2];
      if (f = a.l ? g : f)
        try {
          var h = f.call(e || null, b);
          h !== void 0 && (a.l = a.l && (h == b || h instanceof Error), a.h = b = h);
          if (sb(b) || typeof m.Promise === "function" && b instanceof m.Promise)
            d = true, a.s = true;
        } catch (l) {
          b = l, a.l = true, Jb(a) || (c = true);
        }
    }
    a.h = b;
    d && (h = r(a.L, a, true), d = r(a.L, a, false), b instanceof M ? (Q(b, h, d), b.U = true) : b.then(h, d));
    c && (b = new Lb(b), R[b.g] = b, a.m = b.g);
  }
  function Mb() {
    var a = new M(), b = Error("Invalid origin");
    Hb(a);
    O(a, false, b);
    return a;
  }
  function P() {
    u.call(this);
  }
  t(P, u);
  P.prototype.message = "Deferred has already fired";
  P.prototype.name = "AlreadyCalledError";
  function N() {
    u.call(this);
  }
  t(N, u);
  N.prototype.message = "Deferred was canceled";
  N.prototype.name = "CanceledError";
  function Lb(a) {
    this.g = m.setTimeout(r(this.i, this), 0);
    this.h = a;
  }
  Lb.prototype.i = function() {
    delete R[this.g];
    throw this.h;
  };
  var R = {};
  function S() {
    A.call(this);
    this.g = new F(this);
    this.B = this;
    this.m = null;
  }
  t(S, A);
  S.prototype[D] = true;
  S.prototype.removeEventListener = function(a, b, c, d) {
    Ua(this, a, b, c, d);
  };
  S.prototype.o = function() {
    S.A.o.call(this);
    if (this.g) {
      var a = this.g, b = 0, c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) {
          ++b, E(d[e]);
        }
        delete a.g[c];
        a.h--;
      }
    }
    this.m = null;
  };
  function T(a, b, c, d) {
    b = a.g.g[String(b)];
    if (!b)
      return true;
    b = b.concat();
    for (var e = true, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.F && g.capture == c) {
        var h = g.listener, l = g.J || g.src;
        g.H && Ia(a.g, g);
        e = h.call(l, d) !== false && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function Nb(a, b) {
    S.call(this);
    this.j = a || 1;
    this.i = b || m;
    this.s = r(this.W, this);
    this.u = Date.now();
  }
  t(Nb, S);
  k = Nb.prototype;
  k.G = false;
  k.v = null;
  k.W = function() {
    if (this.G) {
      var a = Date.now() - this.u;
      if (0 < a && a < 0.8 * this.j)
        this.v = this.i.setTimeout(this.s, this.j - a);
      else {
        this.v && (this.i.clearTimeout(this.v), this.v = null);
        var b;
        if (a = this.m)
          for (b = []; a; a = a.m) {
            b.push(a);
          }
        a = this.B;
        var c = "tick", d = c.type || c;
        if (typeof c === "string")
          c = new B(c, a);
        else if (c instanceof B)
          c.target = c.target || a;
        else {
          var e = c;
          c = new B(d, a);
          qa(c, e);
        }
        e = true;
        if (b)
          for (var f = b.length - 1; 0 <= f; f--) {
            var g = c.g = b[f];
            e = T(g, d, true, c) && e;
          }
        g = c.g = a;
        e = T(g, d, true, c) && e;
        e = T(g, d, false, c) && e;
        if (b)
          for (f = 0; f < b.length; f++) {
            g = c.g = b[f], e = T(g, d, false, c) && e;
          }
        this.G && (Ob(this), this.start());
      }
    }
  };
  k.start = function() {
    this.G = true;
    this.v || (this.v = this.i.setTimeout(this.s, this.j), this.u = Date.now());
  };
  function Ob(a) {
    a.G = false;
    a.v && (a.i.clearTimeout(a.v), a.v = null);
  }
  k.o = function() {
    Nb.A.o.call(this);
    Ob(this);
    delete this.i;
  };
  function Pb(a) {
    G.call(this);
    this.g = a;
    this.m = Ma(this.g, "message", this.V, false, this);
  }
  t(Pb, G);
  function Qb(a, b) {
    if (b == "*")
      return new H(Mb());
    var c = new Nb(50), d = ea(y, c), e = new M(d);
    Q(e, d, d, void 0);
    c.start();
    Ma(c, "tick", function() {
      function f() {
        console.log("got back message from iframe. channel created!");
        g.port1.removeEventListener("message", f, true);
        c.h || e.I(new Pb(g.port1));
      }
      var g = new MessageChannel();
      g.port1.start();
      g.port1.addEventListener("message", f, true);
      a.postMessage({
        "--goog.messaging.PortChannel": true
      }, b, [g.port2]);
    });
    return new H(e);
  }
  var Rb;
  if (Rb = wa) {
    for (Sb = 0, Tb = ja(String(Ba)).split("."), Ub = ja("533").split("."), Vb = Math.max(Tb.length, Ub.length), Wb = 0; Sb == 0 && Wb < Vb; Wb++) {
      Xb = Tb[Wb] || "", Yb = Ub[Wb] || "";
      do {
        U = /(\d*)(\D*)(.*)/.exec(Xb) || ["", "", "", ""], V = /(\d*)(\D*)(.*)/.exec(Yb) || ["", "", "", ""];
        if (U[0].length == 0 && V[0].length == 0)
          break;
        Sb = ka(U[1].length == 0 ? 0 : parseInt(U[1], 10), V[1].length == 0 ? 0 : parseInt(V[1], 10)) || ka(U[2].length == 0, V[2].length == 0) || ka(U[2], V[2]);
        Xb = U[3];
        Yb = V[3];
      } while (Sb == 0);
    }
    Rb = 0 > Sb;
  }
  var Xb;
  var Yb;
  var U;
  var V;
  var Sb;
  var Tb;
  var Ub;
  var Vb;
  var Wb;
  var Zb = Rb;
  k = Pb.prototype;
  k.D = function(a, b) {
    var c = [];
    b = this.M(c, b);
    a = {
      serviceName: a,
      payload: b,
      "--goog.messaging.PortChannel": true
    };
    Zb && (a = Xa(a));
    this.g.postMessage(a, c);
  };
  k.V = function(a) {
    a = a.i;
    var b = a.data;
    if (Zb)
      try {
        b = JSON.parse(b);
      } catch (e) {
        return;
      }
    var c;
    if (c = p(b) && b["--goog.messaging.PortChannel"])
      c = b, "serviceName" in c ? "payload" in c ? c = true : (Ca(c), c = false) : (Ca(c), c = false);
    if (c) {
      c = b.serviceName;
      b = b.payload;
      var d = this.j[c];
      if (c = d ? d : this.i ? {
        I: ea(this.i, c),
        T: p(b)
      } : null) {
        a: {
          a = this.N(a.ports || [], b);
          if ((d = c.T) && typeof a === "string")
            try {
              b = JSON.parse(a);
              break a;
            } catch (e) {
              b = null;
              break a;
            }
          else if (!d && typeof a !== "string") {
            b = Xa(a);
            break a;
          }
          b = a;
        }
        b != null && c.I(b);
      }
    }
  };
  k.M = function(a, b) {
    return b && Object.prototype.toString.call(b) == "[object MessagePort]" ? (a.push(b), {
      _port: {
        type: "real",
        index: a.length - 1
      }
    }) : Array.isArray(b) ? ha(b, r(this.M, this, a)) : b && b.constructor == Object ? oa(b, function(c, d) {
      c = this.M(a, c);
      return d == "_port" ? {
        type: "escaped",
        val: c
      } : c;
    }, this) : b;
  };
  k.N = function(a, b) {
    return Array.isArray(b) ? ha(b, r(this.N, this, a)) : b && b.constructor == Object ? b._port && b._port.type == "real" ? a[b._port.index] : oa(b, function(c, d) {
      return this.N(a, d == "_port" ? c.val : c);
    }, this) : b;
  };
  k.o = function() {
    Va(this.m);
    Object.prototype.toString.call(this.g) == "[object MessagePort]" ? this.g.close() : Object.prototype.toString.call(this.g) == "[object Worker]" && this.g.terminate();
    delete this.g;
    Pb.A.o.call(this);
  };
  function $b(a) {
    A.call(this);
    this.i = a;
    this.g = {};
    this.i.K(r(this.j, this));
  }
  t($b, A);
  function ac(a, b) {
    if (b.indexOf(":") != -1)
      throw Error('Virtual channel name "' + b + '" should not contain colons');
    if (b in a.g)
      throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
    var c = new bc(a, b);
    return a.g[b] = c;
  }
  $b.prototype.j = function(a, b) {
    if (a = a.match(/^([^:]*):(.*)/)) {
      var c = a[1];
      a = a[2];
      c in this.g && (c = this.g[c]) && c.j && c.j(a, b);
    }
  };
  $b.prototype.o = function() {
    na(this.g, function(a) {
      y(a);
    });
    y(this.i);
    delete this.g;
    delete this.i;
  };
  function bc(a, b) {
    A.call(this);
    this.g = a;
    this.i = b;
  }
  t(bc, A);
  k = bc.prototype;
  k.connect = function(a) {
    a && a();
  };
  k.C = function(a, b, c) {
    this.g.i.C(this.i + ":" + a, r(this.S, this, b), c);
  };
  k.K = function(a) {
    this.j = r(this.S, this, a);
  };
  k.D = function(a, b) {
    if (this.h)
      throw Error("#send called for disposed VirtualChannel.");
    this.g.i.D(this.i + ":" + a, b);
  };
  k.S = function(a, b) {
    this.h || a.apply({}, Array.prototype.slice.call(arguments, 1));
  };
  k.o = function() {
    this.g = this.g.g[this.i] = null;
  };
  function W(a) {
    A.call(this);
    this.g = new $b(a);
    this.j = {};
    this.i = ac(this.g, "private");
    this.m = ac(this.g, "public");
    this.i.C("mics", r(this.u, this), true);
  }
  t(W, A);
  W.prototype.o = function() {
    y(this.g);
    delete this.g;
    delete this.m;
    delete this.i;
  };
  W.prototype.u = function(a) {
    var b = a.signature;
    a = a.data;
    b in this.j && ((0, this.j[b])(a), delete this.j[b]);
  };
  W.prototype.s = function(a, b) {
    a = a(b.data);
    var c = b.signature;
    wb(a).then(r(function(d) {
      var e = {};
      e.data = d;
      e.signature = c;
      this.i && this.i.D("mics", e);
    }, this));
  };
  function cc(a, b, c) {
    a = Qb(a, b);
    var d = new W(a);
    c.forEach(function(e, f, g) {
      f != null && g.get(f) != null && (g = g.get(f), d.m.C(f, r(d.s, d, g), true));
    });
    return d;
  }
  var X = ["__AMP_createRC"];
  var Y = m;
  X[0] in Y || typeof Y.execScript == "undefined" || Y.execScript("var " + X[0]);
  for (var Z; X.length && (Z = X.shift()); ) {
    X.length || cc === void 0 ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = cc;
  }
  function createRespondingChannel(window2, origin2, serviceHandlersMap) {
    var rc = __AMP_createRC(window2, origin2, serviceHandlersMap);
    console.log("after calling create RC!");
    return rc;
  }

  // extensions/amp-google-assistant-assistjs/0.1/amp-google-assistant-voice-bar.js
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
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p2) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf5(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf2(o, p2);
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf5(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var AmpGoogleAssistantVoiceBar = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpGoogleAssistantVoiceBar2, _AMP$BaseElement);
    var _super = _createSuper2(AmpGoogleAssistantVoiceBar2);
    function AmpGoogleAssistantVoiceBar2(element) {
      var _this;
      _classCallCheck4(this, AmpGoogleAssistantVoiceBar2);
      _this = _super.call(this, element);
      _this.configService_ = null;
      _this.frameService_ = null;
      return _this;
    }
    _createClass3(AmpGoogleAssistantVoiceBar2, [{
      key: "buildCallback",
      value: function buildCallback() {
        this.configService_ = Services.assistjsConfigServiceForDoc(this.element);
        this.frameService_ = Services.assistjsFrameServiceForDoc(this.element);
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this2 = this;
        var iframe = this.win.document.createElement("iframe");
        this.configService_.getWidgetIframeUrl("voicebar").then(function(iframeUrl) {
          addAttributesToElement(iframe, {
            src: iframeUrl,
            sandbox: "allow-scripts"
          });
          _this2.applyFillContent(iframe, true);
          _this2.element.appendChild(iframe);
        });
        var serviceHandlersMap = new Map();
        serviceHandlersMap.set("RuntimeService.TriggerSendTextQuery", function() {
          _this2.frameService_.sendTextQuery();
        });
        serviceHandlersMap.set("RuntimeService.TriggerOpenMic", function() {
          _this2.frameService_.openMic();
        });
        iframe.addEventListener("load", function() {
          createRespondingChannel(iframe.contentWindow, _this2.configService_.getAssistjsServer(), serviceHandlersMap);
        });
        return this.loadPromise(iframe);
      }
    }]);
    return AmpGoogleAssistantVoiceBar2;
  }(AMP.BaseElement);

  // extensions/amp-google-assistant-assistjs/0.1/amp-google-assistant-voice-button.js
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
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p2) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf5(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf3(o, p2);
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf5(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var AmpGoogleAssistantVoiceButton = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits3(AmpGoogleAssistantVoiceButton2, _AMP$BaseElement);
    var _super = _createSuper3(AmpGoogleAssistantVoiceButton2);
    function AmpGoogleAssistantVoiceButton2(element) {
      var _this;
      _classCallCheck5(this, AmpGoogleAssistantVoiceButton2);
      _this = _super.call(this, element);
      _this.configService_ = null;
      _this.frameService_ = null;
      return _this;
    }
    _createClass4(AmpGoogleAssistantVoiceButton2, [{
      key: "buildCallback",
      value: function buildCallback() {
        this.configService_ = Services.assistjsConfigServiceForDoc(this.element);
        this.frameService_ = Services.assistjsFrameServiceForDoc(this.element);
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this2 = this;
        var iframe = this.win.document.createElement("iframe");
        this.configService_.getWidgetIframeUrl("voicebutton").then(function(iframeUrl) {
          addAttributesToElement(iframe, {
            src: iframeUrl,
            sandbox: "allow-scripts"
          });
          _this2.applyFillContent(iframe, true);
          _this2.element.appendChild(iframe);
        });
        iframe.addEventListener("load", function() {
          _this2.frameService_.openMic();
        });
        return this.loadPromise(iframe);
      }
    }]);
    return AmpGoogleAssistantVoiceButton2;
  }(AMP.BaseElement);

  // extensions/amp-google-assistant-assistjs/0.1/assistjs-config-service.js
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
  var AssistjsConfigService = /* @__PURE__ */ function() {
    function AssistjsConfigService2() {
      _classCallCheck6(this, AssistjsConfigService2);
      this.projectId_ = "";
      this.assistjsServer_ = "https://actions.google.com";
      this.devMode_ = false;
      this.hostUrl_ = window.location.href;
      this.initializedDeferred_ = new Deferred();
      this.isInitialized_ = false;
    }
    _createClass5(AssistjsConfigService2, [{
      key: "initializeConfigs",
      value: function initializeConfigs(config) {
        if (this.isInitialized_) {
          return;
        }
        if (!hasOwn(config, "projectId")) {
          throw new Error("Project id is required to embed assist.js.");
        }
        this.projectId_ = config.projectId;
        if (hasOwn(config, "assistjsServer")) {
          this.assistjsServer_ = config.assistjsServer;
        }
        if (hasOwn(config, "devMode")) {
          this.devMode_ = config.devMode;
        }
        if (hasOwn(config, "hostUrl")) {
          this.hostUrl_ = config.hostUrl;
        }
        this.isInitialized_ = true;
        this.initializedDeferred_.resolve();
      }
    }, {
      key: "getWidgetIframeUrl",
      value: function getWidgetIframeUrl(widgetName) {
        var _this = this;
        return this.initializedDeferred_.promise.then(function() {
          return _this.assistjsServer_ + "/assist/" + widgetName + "?origin=" + origin + "&projectId=" + _this.projectId_ + "&dev=" + _this.devMode_ + "&hostUrl=" + _this.hostUrl_;
        });
      }
    }, {
      key: "getAssistjsServer",
      value: function getAssistjsServer() {
        return this.assistjsServer_;
      }
    }]);
    return AssistjsConfigService2;
  }();

  // extensions/amp-google-assistant-assistjs/0.1/assistjs-frame-service.js
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
  var AssistjsFrameService = /* @__PURE__ */ function() {
    function AssistjsFrameService2(ampdoc) {
      _classCallCheck7(this, AssistjsFrameService2);
      this.ampDoc_ = ampdoc;
      this.configService_ = null;
      this.createAssistantIframe_();
    }
    _createClass6(AssistjsFrameService2, [{
      key: "createAssistantIframe_",
      value: function createAssistantIframe_() {
        var _this = this;
        this.ampDoc_.whenFirstVisible().then(function() {
          _this.configService_ = Services.assistjsConfigServiceForDoc(_this.ampDoc_);
          var iframe = _this.ampDoc_.win.document.createElement("iframe");
          _this.configService_.getWidgetIframeUrl("frame").then(function(iframeUrl) {
            addAttributesToElement(iframe, {
              src: iframeUrl,
              allow: "microphone",
              sandbox: "allow-scripts"
            });
            toggle(iframe, false);
            document.body.appendChild(iframe);
          });
        });
      }
    }, {
      key: "openMic",
      value: function openMic() {
      }
    }, {
      key: "sendTextQuery",
      value: function sendTextQuery() {
      }
    }]);
    return AssistjsFrameService2;
  }();

  // build/amp-google-assistant-assistjs-0.1.css.js
  var CSS2 = ".amp-google-assistant-assistjs{display:block}\n/*# sourceURL=/extensions/amp-google-assistant-assistjs/0.1/amp-google-assistant-assistjs.css*/";

  // extensions/amp-google-assistant-assistjs/0.1/amp-google-assistant-assistjs.js
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
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p2) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf5(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf4(o, p2);
  }
  function _createSuper4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct4();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf4(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf4(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn4(this, result);
    };
  }
  function _possibleConstructorReturn4(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized4(self2);
  }
  function _assertThisInitialized4(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct4() {
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
  function _getPrototypeOf4(o) {
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf5(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  var AmpGoogleAssistantAssistjsConfig = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits4(AmpGoogleAssistantAssistjsConfig2, _AMP$BaseElement);
    var _super = _createSuper4(AmpGoogleAssistantAssistjsConfig2);
    function AmpGoogleAssistantAssistjsConfig2() {
      _classCallCheck8(this, AmpGoogleAssistantAssistjsConfig2);
      return _super.apply(this, arguments);
    }
    _createClass7(AmpGoogleAssistantAssistjsConfig2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var config = JSON.parse(this.element.textContent);
        Services.assistjsConfigServiceForDoc(this.element).initializeConfigs(config);
      }
    }]);
    return AmpGoogleAssistantAssistjsConfig2;
  }(AMP.BaseElement);
  AMP.extension("amp-google-assistant-assistjs", "0.1", function(AMP2) {
    AMP2.registerServiceForDoc("assistjs-config-service", AssistjsConfigService);
    AMP2.registerServiceForDoc("assistjs-frame-service", AssistjsFrameService);
    AMP2.registerElement("amp-google-assistant-assistjs-config", AmpGoogleAssistantAssistjsConfig, CSS2);
    AMP2.registerElement("amp-google-assistant-voice-button", AmpGoogleAssistantVoiceButton, CSS2);
    AMP2.registerElement("amp-google-assistant-voice-bar", AmpGoogleAssistantVoiceBar, CSS2);
    AMP2.registerElement("amp-google-assistant-inline-suggestion-bar", AmpGoogleAssistantInlineSuggestionBar, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-google-assistant-assistjs-0.1.max.js.map
