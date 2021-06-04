(self.AMP=self.AMP||[]).push({n:"amp-audio",ev:"0.1",l:true,v:"2106040012001",m:0,f:(function(AMP,_){

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

  // src/core/types/string/index.js
  function endsWith(string, suffix) {
    var index = string.length - suffix.length;
    return index >= 0 && string.indexOf(suffix, index) == index;
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

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";

  // src/internal-version.js
  function internalRuntimeVersion() {
    return "2106040012001";
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

  // src/core/dom/query.js
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
  function isLayoutSizeFixed(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT;
  }

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck3(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass2(LruCache2, [{
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

  // src/video-interface.js
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
      value: function fullscreenEnter() {
      }
    }, {
      key: "fullscreenExit",
      value: function fullscreenExit() {
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
  var MEDIA_COMPONENT_CLASSNAME = "i-amphtml-media-component";
  function setIsMediaComponent(element) {
    element.classList.add(MEDIA_COMPONENT_CLASSNAME);
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

  // extensions/amp-audio/0.1/amp-audio.js
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
  var TAG = "amp-audio";
  var AmpAudio = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpAudio2, _AMP$BaseElement);
    var _super = _createSuper(AmpAudio2);
    function AmpAudio2(element) {
      var _this;
      _classCallCheck5(this, AmpAudio2);
      _this = _super.call(this, element);
      _this.audio_ = null;
      _this.metadata_ = EMPTY_METADATA;
      _this.isPlaying = false;
      return _this;
    }
    _createClass4(AmpAudio2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeFixed(layout);
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var layout = this.getLayout();
        if (layout === Layout.NODISPLAY) {
          this.element.removeAttribute("autoplay");
          this.buildAudioElement();
        }
        setIsMediaComponent(this.element);
        this.registerAction("play", this.play_.bind(this));
        this.registerAction("pause", this.pause_.bind(this));
      }
    }, {
      key: "mutatedAttributesCallback",
      value: function mutatedAttributesCallback(mutations) {
        if (!this.audio_) {
          return;
        }
        var src = mutations["src"];
        var controlsList = mutations["controlsList"];
        var loop = mutations["loop"];
        if (src !== void 0 || controlsList !== void 0 || loop !== void 0) {
          if (src !== void 0) {
            assertHttpsUrl(src, this.element);
          }
          this.propagateAttributes(["src", "loop", "controlsList"], this.audio_);
        }
        var artist = mutations["artist"];
        var title = mutations["title"];
        var album = mutations["album"];
        var artwork = mutations["artwork"];
        if (artist !== void 0 || title !== void 0 || album !== void 0 || artwork !== void 0) {
          this.updateMetadata_();
        }
      }
    }, {
      key: "buildAudioElement",
      value: function buildAudioElement() {
        var _this2 = this;
        var audio = this.element.ownerDocument.createElement("audio");
        if (!audio.play) {
          this.toggleFallback(true);
          return;
        }
        audio.controls = true;
        var src = this.getElementAttribute_("src");
        if (src) {
          assertHttpsUrl(src, this.element);
        }
        this.propagateAttributes(["src", "preload", "autoplay", "muted", "loop", "aria-label", "aria-describedby", "aria-labelledby", "controlsList"], audio);
        this.applyFillContent(audio);
        this.getRealChildNodes().forEach(function(child) {
          if (child.getAttribute && child.getAttribute("src")) {
            assertHttpsUrl(child.getAttribute("src"), dev().assertElement(child));
          }
          audio.appendChild(child);
        });
        this.element.appendChild(audio);
        this.audio_ = audio;
        listen(this.audio_, "playing", function() {
          return _this2.audioPlaying_();
        });
        listen(this.audio_, "play", function() {
          return triggerAnalyticsEvent(_this2.element, "audio-play");
        });
        listen(this.audio_, "pause", function() {
          return triggerAnalyticsEvent(_this2.element, "audio-pause");
        });
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var layout = this.getLayout();
        if (layout !== Layout.NODISPLAY) {
          this.buildAudioElement();
        }
        this.updateMetadata_();
        if (this.element.getAttribute("preload") === "none") {
          return this.audio_;
        }
        return this.loadPromise(this.audio_);
      }
    }, {
      key: "updateMetadata_",
      value: function updateMetadata_() {
        var document = this.getAmpDoc().win.document;
        var artist = this.getElementAttribute_("artist") || "";
        var title = this.getElementAttribute_("title") || this.getElementAttribute_("aria-label") || document.title || "";
        var album = this.getElementAttribute_("album") || "";
        var artwork = this.getElementAttribute_("artwork") || parseSchemaImage(document) || parseOgImage(document) || parseFavicon(document) || "";
        this.metadata_ = {
          title,
          artist,
          album,
          artwork: [{
            src: artwork
          }]
        };
      }
    }, {
      key: "renderOutsideViewport",
      value: function renderOutsideViewport() {
        return true;
      }
    }, {
      key: "getElementAttribute_",
      value: function getElementAttribute_(attr) {
        return this.element.getAttribute(attr);
      }
    }, {
      key: "pauseCallback",
      value: function pauseCallback() {
        if (this.audio_) {
          this.audio_.pause();
          this.setPlayingStateForTesting_(false);
        }
      }
    }, {
      key: "isInvocationValid_",
      value: function isInvocationValid_() {
        if (!this.audio_) {
          return false;
        }
        if (this.isStoryDescendant_()) {
          user().warn(TAG, "<amp-story> elements do not support actions on <amp-audio> elements");
          return false;
        }
        return true;
      }
    }, {
      key: "pause_",
      value: function pause_() {
        if (!this.isInvocationValid_()) {
          return;
        }
        this.audio_.pause();
        this.setPlayingStateForTesting_(false);
      }
    }, {
      key: "play_",
      value: function play_() {
        if (!this.isInvocationValid_()) {
          return;
        }
        this.audio_.play();
        this.setPlayingStateForTesting_(true);
      }
    }, {
      key: "setPlayingStateForTesting_",
      value: function setPlayingStateForTesting_(isPlaying) {
        if (getMode().test) {
          this.isPlaying = isPlaying;
        }
      }
    }, {
      key: "isStoryDescendant_",
      value: function isStoryDescendant_() {
        return closestAncestorElementBySelector(this.element, "AMP-STORY");
      }
    }, {
      key: "audioPlaying_",
      value: function audioPlaying_() {
        var _this3 = this;
        var playHandler = function playHandler2() {
          _this3.audio_.play();
          _this3.setPlayingStateForTesting_(true);
        };
        var pauseHandler = function pauseHandler2() {
          _this3.audio_.pause();
          _this3.setPlayingStateForTesting_(false);
        };
        validateMediaMetadata(this.element, this.metadata_);
        setMediaSession(this.win, this.metadata_, playHandler, pauseHandler);
      }
    }]);
    return AmpAudio2;
  }(AMP.BaseElement);
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerElement(TAG, AmpAudio);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-audio-0.1.max.js.map
