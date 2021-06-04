(self.AMP=self.AMP||[]).push({n:"amp-story-360",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";

  // src/internal-version.js
  function internalRuntimeVersion() {
    return "2106040012000";
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
  function closest(element, callback, opt_stopAt) {
    for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
      if (callback(el)) {
        return el;
      }
    }
    return null;
  }

  // src/dom.js
  var UPGRADE_TO_CUSTOMELEMENT_PROMISE = "__AMP_UPG_PRM";
  var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = "__AMP_UPG_RES";
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
  function whenUpgradedToCustomElement(element) {
    devAssert(isAmpElement(element), "element is not AmpElement");
    if (element.createdCallback) {
      return Promise.resolve(element);
    }
    if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
      var deferred = new Deferred();
      element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = deferred.promise;
      element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = deferred.resolve;
    }
    return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
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

  // src/core/types/object/json.js
  function deepEquals(a, b, depth) {
    if (depth === void 0) {
      depth = 5;
    }
    if (!isFinite(depth) || depth < 0) {
      throw new Error("Invalid depth: " + depth);
    }
    if (a === b) {
      return true;
    }
    var queue = [{
      a,
      b,
      depth
    }];
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), _a = _queue$shift.a, _b = _queue$shift.b, _depth = _queue$shift.depth;
      if (_depth > 0) {
        if (typeof _a !== typeof _b) {
          return false;
        } else if (isArray(_a) && isArray(_b)) {
          if (_a.length !== _b.length) {
            return false;
          }
          for (var i = 0; i < _a.length; i++) {
            queue.push({
              a: _a[i],
              b: _b[i],
              depth: _depth - 1
            });
          }
          continue;
        } else if (_a && _b && typeof _a === "object" && typeof _b === "object") {
          var keysA = Object.keys(_a);
          var keysB = Object.keys(_b);
          if (keysA.length !== keysB.length) {
            return false;
          }
          for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
            var k = _keysA[_i];
            queue.push({
              a: _a[k],
              b: _b[k],
              depth: _depth - 1
            });
          }
          continue;
        }
      }
      if (_a !== _b) {
        return false;
      }
    }
    return true;
  }

  // extensions/amp-story/1.0/amp-story-store-service.js
  var _stateComparisonFunct;
  var StateProperty = {
    CAN_INSERT_AUTOMATIC_AD: "canInsertAutomaticAd",
    CAN_SHOW_AUDIO_UI: "canShowAudioUi",
    CAN_SHOW_NAVIGATION_OVERLAY_HINT: "canShowNavigationOverlayHint",
    CAN_SHOW_PAGINATION_BUTTONS: "canShowPaginationButtons",
    CAN_SHOW_PREVIOUS_PAGE_HELP: "canShowPreviousPageHelp",
    CAN_SHOW_SHARING_UIS: "canShowSharingUis",
    CAN_SHOW_SYSTEM_LAYER_BUTTONS: "canShowSystemLayerButtons",
    VIEWER_CUSTOM_CONTROLS: "viewerCustomControls",
    ACCESS_STATE: "accessState",
    AD_STATE: "adState",
    PAGE_ATTACHMENT_STATE: "pageAttachmentState",
    AFFILIATE_LINK_STATE: "affiliateLinkState",
    DESKTOP_STATE: "desktopState",
    EDUCATION_STATE: "educationState",
    GYROSCOPE_PERMISSION_STATE: "gyroscopePermissionState",
    HAS_SIDEBAR_STATE: "hasSidebarState",
    INFO_DIALOG_STATE: "infoDialogState",
    INTERACTIVE_COMPONENT_STATE: "interactiveEmbeddedComponentState",
    INTERACTIVE_REACT_STATE: "interactiveReactState",
    KEYBOARD_ACTIVE_STATE: "keyboardActiveState",
    MUTED_STATE: "mutedState",
    PAGE_HAS_AUDIO_STATE: "pageAudioState",
    PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE: "pageHasElementsWithPlaybackState",
    PANNING_MEDIA_STATE: "panningMediaState",
    PAUSED_STATE: "pausedState",
    PREVIEW_STATE: "previewState",
    RTL_STATE: "rtlState",
    SHARE_MENU_STATE: "shareMenuState",
    SIDEBAR_STATE: "sidebarState",
    SUPPORTED_BROWSER_STATE: "supportedBrowserState",
    STORY_HAS_AUDIO_STATE: "storyHasAudioState",
    STORY_HAS_BACKGROUND_AUDIO_STATE: "storyHasBackgroundAudioState",
    STORY_HAS_PLAYBACK_UI_STATE: "storyHasPlaybackUiState",
    SYSTEM_UI_IS_VISIBLE_STATE: "systemUiIsVisibleState",
    UI_STATE: "uiState",
    VIEWPORT_WARNING_STATE: "viewportWarningState",
    ACTIONS_ALLOWLIST: "actionsAllowlist",
    CONSENT_ID: "consentId",
    CURRENT_PAGE_ID: "currentPageId",
    CURRENT_PAGE_INDEX: "currentPageIndex",
    ADVANCEMENT_MODE: "advancementMode",
    NAVIGATION_PATH: "navigationPath",
    NEW_PAGE_AVAILABLE_ID: "newPageAvailableId",
    PAGE_IDS: "pageIds",
    PAGE_SIZE: "pageSize"
  };
  var Action = {
    ADD_INTERACTIVE_REACT: "addInteractiveReact",
    ADD_TO_ACTIONS_ALLOWLIST: "addToActionsAllowlist",
    CHANGE_PAGE: "setCurrentPageId",
    SET_CONSENT_ID: "setConsentId",
    SET_ADVANCEMENT_MODE: "setAdvancementMode",
    SET_NAVIGATION_PATH: "setNavigationPath",
    SET_PAGE_IDS: "setPageIds",
    TOGGLE_ACCESS: "toggleAccess",
    TOGGLE_AD: "toggleAd",
    TOGGLE_AFFILIATE_LINK: "toggleAffiliateLink",
    TOGGLE_EDUCATION: "toggleEducation",
    TOGGLE_HAS_SIDEBAR: "toggleHasSidebar",
    TOGGLE_INFO_DIALOG: "toggleInfoDialog",
    TOGGLE_INTERACTIVE_COMPONENT: "toggleInteractiveComponent",
    TOGGLE_KEYBOARD_ACTIVE_STATE: "toggleKeyboardActiveState",
    TOGGLE_MUTED: "toggleMuted",
    TOGGLE_PAGE_ATTACHMENT_STATE: "togglePageAttachmentState",
    TOGGLE_PAGE_HAS_AUDIO: "togglePageHasAudio",
    TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK: "togglePageHasElementWithPlayblack",
    TOGGLE_PAUSED: "togglePaused",
    TOGGLE_RTL: "toggleRtl",
    TOGGLE_SHARE_MENU: "toggleShareMenu",
    TOGGLE_SIDEBAR: "toggleSidebar",
    TOGGLE_SUPPORTED_BROWSER: "toggleSupportedBrowser",
    TOGGLE_STORY_HAS_AUDIO: "toggleStoryHasAudio",
    TOGGLE_STORY_HAS_BACKGROUND_AUDIO: "toggleStoryHasBackgroundAudio",
    TOGGLE_STORY_HAS_PLAYBACK_UI: "toggleStoryHasPlaybackUi",
    TOGGLE_SYSTEM_UI_IS_VISIBLE: "toggleSystemUiIsVisible",
    TOGGLE_UI: "toggleUi",
    SET_GYROSCOPE_PERMISSION: "setGyroscopePermission",
    TOGGLE_VIEWPORT_WARNING: "toggleViewportWarning",
    ADD_NEW_PAGE_ID: "addNewPageId",
    SET_PAGE_SIZE: "updatePageSize",
    ADD_PANNING_MEDIA_STATE: "addPanningMediaState",
    SET_VIEWER_CUSTOM_CONTROLS: "setCustomControls"
  };
  var stateComparisonFunctions = (_stateComparisonFunct = {}, _stateComparisonFunct[StateProperty.ACTIONS_ALLOWLIST] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_COMPONENT_STATE] = function(old, curr) {
    return old.element !== curr.element || old.state !== curr.state;
  }, _stateComparisonFunct[StateProperty.NAVIGATION_PATH] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_IDS] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_SIZE] = function(old, curr) {
    return old === null || curr === null || old.width !== curr.width || old.height !== curr.height;
  }, _stateComparisonFunct[StateProperty.PANNING_MEDIA_STATE] = function(old, curr) {
    return old === null || curr === null || !deepEquals(old, curr, 2);
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_REACT_STATE] = function(old, curr) {
    return !deepEquals(old, curr, 3);
  }, _stateComparisonFunct);

  // build/amp-story-360-0.1.css.js
  var CSS2 = 'amp-story-360 canvas{position:absolute;width:100%!important;height:100%!important}amp-story-360 amp-img{opacity:0!important}.i-amphtml-story-360-activate-button{position:absolute!important;bottom:12px!important;right:12px!important;background:rgba(0,0,0,.8)!important;color:#fff!important;outline:none!important;border:none!important;padding:6px 6px 6px 10px!important;border-radius:18px!important;font-size:12px!important;font-family:Roboto,sans-serif!important;z-index:100000!important}.i-amphtml-story-360-activate-button,.i-amphtml-story-360-activate-button-icon{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-360-activate-button-icon{box-sizing:border-box!important;margin-left:5px!important;font-size:6px!important;width:24px!important;height:24px!important;border:1px solid #fff!important;border-radius:100%!important;-ms-flex-pack:center!important;justify-content:center!important;font-weight:700!important;position:relative!important}.i-amphtml-story-360-activate-button-icon-svg{position:absolute!important;width:calc(100% + 2px)!important;height:calc(100% + 2px)!important;left:-1px!important;top:-1px!important}[active] .i-amphtml-story-360-activate-button-icon-svg{animation:rotate 1s 1s!important}@keyframes rotate{to{transform:rotate(360deg)}}.i-amphtml-story-360-discovery{pointer-events:none!important;position:absolute!important;bottom:0!important;left:0!important;width:100%!important;height:66%!important;perspective:550px!important;perspective-origin:center calc(100% - 145px)!important;background:linear-gradient(transparent,rgba(0,0,0,.9))!important;animation:fadeOut 1s ease-in-out 4s forwards!important;z-index:100000!important}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.i-amphtml-story-360-discovery-animation{position:absolute!important;bottom:95px!important;left:calc(50% - 30px)!important;width:55px!important;height:100px!important;border:1px solid #fff!important;border-radius:10px!important;animation:lookAround 4s!important}.i-amphtml-story-360-discovery-animation:before{content:""!important;position:absolute!important;border-top:1px solid #fff!important;width:10px!important;top:5px!important;left:calc(50% - 5px)!important}@keyframes lookAround{0%{animation-timing-function:ease-in-out;transform:rotate3d(0,0,0,0) translateZ(0)}25%{animation-timing-function:ease-in-out;transform:rotateY(45deg) rotateX(20deg) translate3d(-100px,10px,0)}50%{animation-timing-function:ease-in-out;transform:rotateX(-40deg) translate3d(0,-50px,0)}75%{animation-timing-function:ease-in-out;transform:rotateY(-45deg) rotateX(20deg) translate3d(100px,10px,0)}to{animation-timing-function:ease-in-out;transform:rotate3d(0,0,0,0) translateZ(0)}}.i-amphtml-story-360-discovery-text{font-family:Roboto,sans-serif!important;position:absolute!important;bottom:40px!important;width:100%!important;font-size:16px!important;text-align:center!important;color:#fff!important}\n/*# sourceURL=/extensions/amp-story-360/0.1/amp-story-360.css*/';

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

  // src/localized-strings.js
  var LocalizedStringId = {
    AMP_STORY_ACTIVATE_BUTTON_TEXT: "83",
    AMP_STORY_AUDIO_MUTE_BUTTON_LABEL: "66",
    AMP_STORY_AUDIO_MUTE_BUTTON_TEXT: "31",
    AMP_STORY_AUDIO_UNMUTE_BUTTON_LABEL: "67",
    AMP_STORY_AUDIO_UNMUTE_NO_SOUND_TEXT: "33",
    AMP_STORY_AUDIO_UNMUTE_SOUND_TEXT: "32",
    AMP_STORY_CLOSE_BUTTON_LABEL: "87",
    AMP_STORY_CONSENT_ACCEPT_BUTTON_LABEL: "22",
    AMP_STORY_CONSENT_DECLINE_BUTTON_LABEL: "23",
    AMP_STORY_CONTINUE_ANYWAY_BUTTON_LABEL: "27",
    AMP_STORY_DISCOVERY_DIALOG_TEXT: "96",
    AMP_STORY_DOMAIN_DIALOG_HEADING_LABEL: "25",
    AMP_STORY_DOMAIN_DIALOG_HEADING_LINK: "26",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_PROGRESS: "78",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_INSTRUCTIONS: "79",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_DISMISS: "80",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_PROGRESS: "75",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_PROGRESS_SINGLE: "81",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_INSTRUCTIONS: "76",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_DISMISS: "77",
    AMP_STORY_HAS_NEW_PAGE_TEXT: "64",
    AMP_STORY_HINT_UI_NEXT_LABEL: "2",
    AMP_STORY_HINT_UI_PREVIOUS_LABEL: "3",
    AMP_STORY_INFO_BUTTON_LABEL: "68",
    AMP_STORY_NEXT_PAGE: "91",
    AMP_STORY_NEXT_STORY: "90",
    AMP_STORY_OPEN_OUTLINK_TEXT: "97",
    AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL: "35",
    AMP_STORY_PAGINATION_BUTTON_PREVIOUS_PAGE_LABEL: "82",
    AMP_STORY_PAGE_ERROR_VIDEO: "65",
    AMP_STORY_PAGE_PLAY_VIDEO: "34",
    AMP_STORY_PAUSE_BUTTON_LABEL: "85",
    AMP_STORY_PLAY_BUTTON_LABEL: "86",
    AMP_STORY_PREVIOUS_PAGE: "93",
    AMP_STORY_REPLAY: "92",
    AMP_STORY_SHARE_BUTTON_LABEL: "69",
    AMP_STORY_SHARING_CLIPBOARD_FAILURE_TEXT: "4",
    AMP_STORY_SHARING_CLIPBOARD_SUCCESS_TEXT: "5",
    AMP_STORY_SHARING_PAGE_LABEL: "62",
    AMP_STORY_SHARING_PROVIDER_NAME_EMAIL: "6",
    AMP_STORY_SHARING_PROVIDER_NAME_FACEBOOK: "7",
    AMP_STORY_SHARING_PROVIDER_NAME_GOOGLE_PLUS: "8",
    AMP_STORY_SHARING_PROVIDER_NAME_LINE: "63",
    AMP_STORY_SHARING_PROVIDER_NAME_LINK: "9",
    AMP_STORY_SHARING_PROVIDER_NAME_LINKEDIN: "10",
    AMP_STORY_SHARING_PROVIDER_NAME_PINTEREST: "11",
    AMP_STORY_SHARING_PROVIDER_NAME_SMS: "12",
    AMP_STORY_SHARING_PROVIDER_NAME_SYSTEM: "13",
    AMP_STORY_SHARING_PROVIDER_NAME_TUMBLR: "14",
    AMP_STORY_SHARING_PROVIDER_NAME_TWITTER: "15",
    AMP_STORY_SHARING_PROVIDER_NAME_WHATSAPP: "16",
    AMP_STORY_SIDEBAR_BUTTON_LABEL: "70",
    AMP_STORY_SKIP_TO_NEXT_BUTTON_LABEL: "88",
    AMP_STORY_TOOLTIP_EXPAND_TWEET: "36",
    AMP_STORY_WARNING_DESKTOP_HEIGHT_SIZE_TEXT: "37",
    AMP_STORY_WARNING_DESKTOP_SIZE_TEXT: "18",
    AMP_STORY_WARNING_DESKTOP_WIDTH_SIZE_TEXT: "38",
    AMP_STORY_WARNING_EXPERIMENT_DISABLED_TEXT: "19",
    AMP_STORY_WARNING_LANDSCAPE_ORIENTATION_TEXT: "20",
    AMP_STORY_WARNING_UNSUPPORTED_BROWSER_TEXT: "21",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_APPLY_NOW: "39",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_BOOK_NOW: "40",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_BUY_TICKETS: "41",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_DOWNLOAD: "42",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_EXPLORE: "43",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_GET_NOW: "44",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_INSTALL: "45",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_LEARN_MORE: "46",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_LISTEN: "47",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_MORE: "48",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_OPEN_APP: "49",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_ORDER_NOW: "50",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_PLAY: "51",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_READ: "52",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOP: "53",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOW: "54",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOWTIMES: "55",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SIGN_UP: "56",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SUBSCRIBE: "57",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_USE_APP: "58",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_VIEW: "59",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH: "60",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH_EPISODE: "61",
    AMP_STORY_INTERACTIVE_DISCLAIMER_NOTE: "89",
    AMP_STORY_INTERACTIVE_RESULTS_SCORE: "84",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_A: "71",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_B: "72",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_C: "73",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_D: "74"
  };

  // third_party/zuho/zuho.js
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
  var SHADERS = {
    fragSourceCommon: "\n    #ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp   float;\n    #else\n      precision mediump float;\n    #endif\n\n    const   float     pi = 3.14159265359;\n    uniform float     uPxSize;\n    uniform mat3      uRot;\n    uniform sampler2D uTex;\n    varying vec2      vPos;\n\n    vec4 sample(float dx, float dy) {\n      vec3 q = vec3(vPos + uPxSize * vec2(dx, dy), -1.0);\n      vec3 dir = normalize(uRot * q);\n      float u = (-0.5 / pi) * atan(dir[1], dir[0]) + 0.5;\n      float v = (1.0 / pi) * acos(dir[2]);\n      return texture2D(uTex, vec2(u, v));\n    }\n  ",
    fragSourceFast: "\n    void main() {\n      gl_FragColor = sample(0.0, 0.0);\n    }\n  ",
    fragSourceSlow: "\n    vec4 sampleSq(float dx, float dy) {\n      vec4 s = sample(dx, dy);\n      return vec4(s.xyz * s.xyz, s.w);\n    }\n\n    void main() {\n      // (2, 3) halton vector sequences.\n      vec4 acc = (1.0 / 16.0) * (\n        (((sampleSq(1.0 / 2.0 - 0.5,  1.0 / 3.0 - 0.5) +\n           sampleSq(1.0 / 4.0 - 0.5,  2.0 / 3.0 - 0.5)) +\n          (sampleSq(3.0 / 4.0 - 0.5,  1.0 / 9.0 - 0.5) +\n           sampleSq(1.0 / 8.0 - 0.5,  4.0 / 9.0 - 0.5))) +\n         ((sampleSq(5.0 / 8.0 - 0.5,  7.0 / 9.0 - 0.5) +\n           sampleSq(3.0 / 8.0 - 0.5,  2.0 / 9.0 - 0.5)) +\n          (sampleSq(7.0 / 8.0 - 0.5,  5.0 / 9.0 - 0.5) +\n           sampleSq(1.0 / 16.0 - 0.5,  8.0 / 9.0 - 0.5)))) +\n        (((sampleSq(9.0 / 16.0 - 0.5,  1.0 / 27.0 - 0.5) +\n           sampleSq(5.0 / 16.0 - 0.5, 10.0 / 27.0 - 0.5)) +\n          (sampleSq(13.0 / 16.0 - 0.5, 19.0 / 27.0 - 0.5) +\n           sampleSq(3.0 / 16.0 - 0.5,  4.0 / 27.0 - 0.5))) +\n         ((sampleSq(11.0 / 16.0 - 0.5, 13.0 / 27.0 - 0.5) +\n           sampleSq(7.0 / 16.0 - 0.5, 22.0 / 27.0 - 0.5)) +\n          (sampleSq(15.0 / 16.0 - 0.5,  7.0 / 27.0 - 0.5) +\n           sampleSq(1.0 / 32.0 - 0.5, 16.0 / 27.0 - 0.5))))\n     );\n      gl_FragColor = vec4(sqrt(acc.xyz), acc.w);\n    }\n  ",
    vertSource: "\n    uniform   vec2 uScale;\n    attribute vec2 aPos;\n    varying   vec2 vPos;\n\n    void main() {\n      gl_Position = vec4(aPos, 0.0, 1.0);\n      vPos = uScale * aPos;\n    }\n  "
  };
  var Matrix = /* @__PURE__ */ function() {
    function Matrix2() {
      _classCallCheck3(this, Matrix2);
    }
    _createClass2(Matrix2, null, [{
      key: "mul",
      value: function mul(n, x, y) {
        console.assert(x.length == n * n && y.length == n * n);
        var z = new Float32Array(n * n);
        for (var i = 0; i < n; ++i) {
          for (var j = 0; j < n; ++j) {
            var sum = 0;
            for (var k = 0; k < n; ++k) {
              sum += x[i * n + k] * y[k * n + j];
            }
            z[i * n + j] = sum;
          }
        }
        return z;
      }
    }, {
      key: "identity",
      value: function identity(n) {
        var z = new Float32Array(n * n);
        z.fill(0);
        for (var i = 0; i < n; ++i) {
          z[i * n + i] = 1;
        }
        return z;
      }
    }, {
      key: "rotation",
      value: function rotation(n, i, j, arg) {
        console.assert(i < n && j < n);
        var z = Matrix2.identity(n);
        var cos = Math.cos(arg);
        var sin = Math.sin(arg);
        z[i * n + i] = +cos;
        z[i * n + j] = -sin;
        z[j * n + i] = +sin;
        z[j * n + j] = +cos;
        return z;
      }
    }]);
    return Matrix2;
  }();
  var Renderer = /* @__PURE__ */ function() {
    function Renderer2(canvas) {
      _classCallCheck3(this, Renderer2);
      var params = {
        alpha: true,
        depth: false,
        stencil: false,
        antialias: false,
        premultipliedAlpha: true,
        preserveDrawingBuffer: window.__AMP_TEST || false
      };
      this.gl = canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params);
      this.canvas = canvas;
      this.rotation = null;
      this.scale = 1;
      this.orientation = null;
      this.vertShader = null;
      this.fragShaderFast = null;
      this.fragShaderSlow = null;
      this.progFast = null;
      this.progSlow = null;
      this.vbo = null;
      this.tex = null;
    }
    _createClass2(Renderer2, [{
      key: "init",
      value: function init() {
        var gl = this.gl;
        this.vertShader = gl.createShader(gl.VERTEX_SHADER);
        this.fragShaderFast = gl.createShader(gl.FRAGMENT_SHADER);
        this.fragShaderSlow = gl.createShader(gl.FRAGMENT_SHADER);
        this.progFast = gl.createProgram();
        this.progSlow = gl.createProgram();
        this.compile_(this.vertShader, SHADERS.vertSource);
        gl.attachShader(this.progFast, this.vertShader);
        gl.attachShader(this.progFast, this.fragShaderFast);
        gl.attachShader(this.progSlow, this.vertShader);
        gl.attachShader(this.progSlow, this.fragShaderSlow);
        this.setMapping();
        this.setCamera(Matrix.identity(3), 1);
        this.vbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        var vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        this.tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.resize();
      }
    }, {
      key: "setImage",
      value: function setImage(img) {
        var gl = this.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.bindTexture(gl.TEXTURE_2D, null);
      }
    }, {
      key: "setImageOrientation",
      value: function setImageOrientation(heading, pitch, roll) {
        if (heading === void 0) {
          heading = 0;
        }
        if (pitch === void 0) {
          pitch = 0;
        }
        if (roll === void 0) {
          roll = 0;
        }
        var RAD = Math.PI / 180;
        this.orientation = this.euler_(RAD * heading, RAD * pitch, RAD * roll);
      }
    }, {
      key: "setMapping",
      value: function setMapping(code) {
        if (code === void 0) {
          code = "";
        }
        this.compile_(this.fragShaderFast, SHADERS.fragSourceCommon + SHADERS.fragSourceFast + code);
        this.compile_(this.fragShaderSlow, SHADERS.fragSourceCommon + SHADERS.fragSourceSlow + code);
        this.link_(this.progFast);
        this.link_(this.progSlow);
      }
    }, {
      key: "setCamera",
      value: function setCamera(rot, scale) {
        this.rotation = rot;
        this.scale = scale;
      }
    }, {
      key: "resize",
      value: function resize() {
        var rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * devicePixelRatio;
        this.canvas.height = rect.height * devicePixelRatio;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
      }
    }, {
      key: "render",
      value: function render(fast) {
        var gl = this.gl;
        gl.disable(gl.BLEND);
        var prog = fast ? this.progFast : this.progSlow;
        gl.useProgram(prog);
        var f = this.scale / Math.sqrt(gl.drawingBufferWidth * gl.drawingBufferHeight);
        var sx = f * gl.drawingBufferWidth;
        var sy = f * gl.drawingBufferHeight;
        gl.uniformMatrix3fv(gl.getUniformLocation(prog, "uRot"), false, this.rotation);
        gl.uniform2f(gl.getUniformLocation(prog, "uScale"), sx, sy);
        gl.uniform1f(gl.getUniformLocation(prog, "uPxSize"), 2 * f);
        if (!this.orientation) {
          this.orientation = Matrix.identity(3);
        }
        gl.uniformMatrix3fv(gl.getUniformLocation(prog, "uRot"), false, Matrix.mul(3, this.rotation, this.orientation));
        gl.enableVertexAttribArray(0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.uniform1i(gl.getUniformLocation(prog, "uTex"), 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.useProgram(null);
      }
    }, {
      key: "compile_",
      value: function compile_(shader, src) {
        var gl = this.gl;
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        var log = gl.getShaderInfoLog(shader);
        if (log.length > 0) {
          console.log(log);
        }
      }
    }, {
      key: "link_",
      value: function link_(prog) {
        var gl = this.gl;
        gl.linkProgram(prog);
        var log = gl.getProgramInfoLog(prog);
        if (log.length > 0) {
          console.log(log);
        }
      }
    }, {
      key: "euler_",
      value: function euler_(heading, pitch, roll) {
        var te = Matrix.identity(3);
        var x = -roll, y = -pitch, z = -heading;
        var a = Math.cos(x), b = Math.sin(x);
        var c = Math.cos(y), d = Math.sin(y);
        var e = Math.cos(z), f = Math.sin(z);
        var ae = a * e, af = a * f, be = b * e, bf = b * f;
        te[0] = c * e;
        te[3] = -c * f;
        te[6] = d;
        te[1] = af + be * d;
        te[4] = ae - bf * d;
        te[7] = -b * c;
        te[2] = bf - ae * d;
        te[5] = be + af * d;
        te[8] = a * c;
        return te;
      }
    }]);
    return Renderer2;
  }();

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

  // src/url.js
  var SERVING_TYPE_PREFIX = dict({
    "c": true,
    "v": true,
    "a": true,
    "ad": true
  });

  // third_party/webcomponentsjs/ShadowCSS.js
  var polyfillHost = "-shadowcsshost";
  var polyfillHostContext = "-shadowcsscontext";
  var parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim");
  var cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim");
  var polyfillHostNoCombinator = polyfillHost + "-no-combinator";
  var polyfillHostRe = new RegExp(polyfillHost, "gim");
  var polyfillHostContextRe = new RegExp(polyfillHostContext, "gim");

  // extensions/amp-story/1.0/utils.js
  function timeStrToMillis(time, fallbackMs) {
    if (fallbackMs === void 0) {
      fallbackMs = NaN;
    }
    var match = time.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/);
    var num = match ? match[1] : void 0;
    var units = match ? match[2] : void 0;
    if (!match || match.length !== 3 || units !== "s" && units !== "ms") {
      return fallbackMs;
    }
    return Math.round((units == "s" ? 1e3 : 1) * parseFloat(num));
  }
  var TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME = "data-text-background-color";
  var TEXT_BACKGROUND_COLOR_SELECTOR = "[" + TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME + "]";

  // extensions/amp-story-360/0.1/amp-story-360.js
  var _templateObject;
  var _templateObject2;
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
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var TAG = "AMP_STORY_360";
  var HAVE_CURRENT_DATA = 2;
  var CENTER_OFFSET = 90;
  var MIN_WEBGL_DISTANCE = 2;
  var buildActivateButtonTemplate = function buildActivateButtonTemplate2(element) {
    return htmlFor(element)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n    <button class="i-amphtml-story-360-activate-button" role="button">\n      <span class="i-amphtml-story-360-activate-text"></span>\n      <span class="i-amphtml-story-360-activate-button-icon"\n        >360\xB0\n        <svg\n          class="i-amphtml-story-360-activate-button-icon-svg"\n          xmlns="http://www.w3.org/2000/svg"\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          fill="none"\n        >\n          <defs>\n            <linearGradient id="i-amphtml-story-360-activate-gradient">\n              <stop stop-color="white" stop-opacity=".3"></stop>\n              <stop offset="1" stop-color="white"></stop>\n            </linearGradient>\n            <ellipse\n              id="i-amphtml-story-360-activate-ellipse"\n              ry="11.5"\n              rx="7.5"\n              cy="12"\n              cx="12"\n              stroke="url(#i-amphtml-story-360-activate-gradient)"\n            ></ellipse>\n          </defs>\n          <use xlink:href="#i-amphtml-story-360-activate-ellipse"></use>\n          <use\n            xlink:href="#i-amphtml-story-360-activate-ellipse"\n            transform="rotate(90, 12, 12)"\n          ></use>\n        </svg>\n      </span>\n    </button>\n  '])));
  };
  var buildDiscoveryTemplate = function buildDiscoveryTemplate2(element) {
    return htmlFor(element)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n    <div class="i-amphtml-story-360-discovery" aria-live="polite">\n      <div class="i-amphtml-story-360-discovery-animation"></div>\n      <span class="i-amphtml-story-360-discovery-text"></span>\n    </div>\n  '])));
  };
  function deg2rad(deg) {
    return deg * Math.PI / 180;
  }
  var CameraOrientation = /* @__PURE__ */ function() {
    function CameraOrientation2(theta, phi, scale) {
      _classCallCheck4(this, CameraOrientation2);
      this.theta = theta;
      this.phi = phi;
      this.scale = scale;
    }
    _createClass3(CameraOrientation2, [{
      key: "rotation",
      get: function get() {
        return Matrix.mul(3, Matrix.rotation(3, 1, 2, this.theta), Matrix.rotation(3, 0, 1, this.phi));
      }
    }], [{
      key: "fromDegrees",
      value: function fromDegrees(heading, pitch, zoom) {
        return new CameraOrientation2(deg2rad(-pitch - CENTER_OFFSET), deg2rad(CENTER_OFFSET + heading), 1 / zoom);
      }
    }]);
    return CameraOrientation2;
  }();
  var CameraAnimation = /* @__PURE__ */ function() {
    function CameraAnimation2(durationMs, orientations) {
      _classCallCheck4(this, CameraAnimation2);
      this.maxFrame = 60 / 1e3 * durationMs;
      this.orientations = orientations;
      this.currentHeadingIndex = 0;
      this.currentFrame = 0;
      this.framesPerSection = this.maxFrame / (orientations.length - 1);
    }
    _createClass3(CameraAnimation2, [{
      key: "easeInOutQuad_",
      value: function easeInOutQuad_(x) {
        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
      }
    }, {
      key: "getNextOrientation",
      value: function getNextOrientation() {
        if (this.currentHeadingIndex < 0 || this.currentFrame == this.maxFrame - 1) {
          return null;
        }
        this.currentFrame++;
        var lastFrameOfCurrentSection = (this.currentHeadingIndex + 1) * this.framesPerSection;
        if (this.currentFrame >= lastFrameOfCurrentSection) {
          this.currentHeadingIndex++;
          if (this.currentHeadingIndex == this.orientations.length) {
            this.currentHeadingIndex = -1;
            return null;
          } else {
            return this.orientations[this.currentHeadingIndex];
          }
        }
        var toNext = this.orientations[this.currentHeadingIndex + 1];
        var from = this.orientations[this.currentHeadingIndex];
        if (!toNext) {
          this.currentHeadingIndex = -1;
          return null;
        }
        var easing = this.easeInOutQuad_(this.currentFrame % this.framesPerSection / this.framesPerSection);
        return new CameraOrientation(from.theta + (toNext.theta - from.theta) * easing, from.phi + (toNext.phi - from.phi) * easing, from.scale + (toNext.scale - from.scale) * easing);
      }
    }]);
    return CameraAnimation2;
  }();
  var AmpStory360 = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStory3602, _AMP$BaseElement);
    var _super = _createSuper(AmpStory3602);
    function AmpStory3602(element) {
      var _this;
      _classCallCheck4(this, AmpStory3602);
      _this = _super.call(this, element);
      _this.localizationService_ = null;
      _this.orientations_ = [];
      _this.duration_ = 0;
      _this.canvas_ = null;
      _this.renderer_ = null;
      _this.animation_ = null;
      _this.isPlaying_ = false;
      _this.isReady_ = false;
      _this.gyroscopeControls_ = false;
      _this.activateButton_ = null;
      _this.storeService_ = null;
      _this.pageId_ = null;
      _this.isOnActivePage_ = false;
      _this.distance_ = null;
      _this.sceneHeading_ = 0;
      _this.scenePitch_ = 0;
      _this.sceneRoll_ = 0;
      _this.ampVideoEl_ = null;
      _this.image_ = null;
      _this.headingOffset_ = 0;
      _this.lostGlContext_ = null;
      _this.rot_ = null;
      return _this;
    }
    _createClass3(AmpStory3602, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        var attr = function attr2(name) {
          return _this2.element.getAttribute(name);
        };
        var attrAsFloat = function attrAsFloat2(name, fallbackValue) {
          if (fallbackValue === void 0) {
            fallbackValue = 0;
          }
          return parseFloat(attr(name) || fallbackValue);
        };
        if (attr("duration")) {
          this.duration_ = timeStrToMillis(attr("duration")) || 0;
        }
        var startHeading = attrAsFloat("heading-start");
        var startPitch = attrAsFloat("pitch-start");
        var startZoom = attrAsFloat("zoom-start", 1);
        this.orientations_.push(CameraOrientation.fromDegrees(startHeading, startPitch, startZoom));
        if (attr("heading-end") !== void 0 || attr("pitch-end") !== void 0 || attr("zoom-end") !== void 0) {
          var endHeading = attrAsFloat("heading-end", startHeading);
          var endPitch = attrAsFloat("pitch-end", startPitch);
          var endZoom = attrAsFloat("zoom-end", startZoom);
          this.orientations_.push(CameraOrientation.fromDegrees(endHeading, endPitch, endZoom));
        }
        if (attr("scene-heading") !== void 0 || attr("scene-pitch") !== void 0 || attr("scene-roll") !== void 0) {
          this.sceneHeading_ = attrAsFloat("scene-heading");
          this.scenePitch_ = attrAsFloat("scene-pitch");
          this.sceneRoll_ = attrAsFloat("scene-roll");
        }
        var container = this.element.ownerDocument.createElement("div");
        this.canvas_ = this.element.ownerDocument.createElement("canvas");
        this.element.appendChild(container);
        container.appendChild(this.canvas_);
        this.applyFillContent(container, true);
        var config = {
          attributes: true,
          attributeFilter: ["distance"]
        };
        var callback = function callback2(mutationsList) {
          _this2.distance_ = parseInt(mutationsList[0].target.getAttribute("distance"), 10);
          _this2.restoreOrLoseGlContext_();
        };
        var observer = new MutationObserver(callback);
        this.getPage_() && observer.observe(this.getPage_(), config);
        return Promise.all([Services.storyStoreServiceForOrNull(this.win).then(function(storeService) {
          _this2.storeService_ = storeService;
          storeService.subscribe(StateProperty.PAGE_SIZE, function() {
            return _this2.resizeRenderer_();
          });
          if (attr("controls") === "gyroscope") {
            storeService.subscribe(StateProperty.GYROSCOPE_PERMISSION_STATE, function(permissionState) {
              return _this2.onPermissionState_(permissionState);
            });
            _this2.checkGyroscopePermissions_();
          }
          storeService.subscribe(StateProperty.CURRENT_PAGE_ID, function(currPageId) {
            _this2.isOnActivePage_ = currPageId === _this2.getPageId_();
            _this2.onPageNavigation_();
            _this2.maybeShowDiscoveryAnimation_();
          });
          _this2.storeService_.subscribe(StateProperty.PAUSED_STATE, function(isPaused) {
            if (_this2.isOnActivePage_) {
              isPaused ? _this2.pause_() : _this2.play_();
            }
          });
        }), Services.localizationServiceForOrNull(this.element).then(function(localizationService) {
          _this2.localizationService_ = localizationService;
        })]).then(function() {
          return resolvedPromise();
        });
      }
    }, {
      key: "getPageId_",
      value: function getPageId_() {
        if (this.pageId_ == null) {
          this.pageId_ = this.getPage_().getAttribute("id");
        }
        return this.pageId_;
      }
    }, {
      key: "getPage_",
      value: function getPage_() {
        return closest(dev().assertElement(this.element), function(el) {
          return el.tagName.toLowerCase() === "amp-story-page";
        });
      }
    }, {
      key: "onPageNavigation_",
      value: function onPageNavigation_() {
        if (this.isOnActivePage_) {
          this.play_();
        } else {
          this.pause_();
          this.rewind_();
        }
      }
    }, {
      key: "restoreOrLoseGlContext_",
      value: function restoreOrLoseGlContext_() {
        if (!this.renderer_) {
          return;
        }
        if (this.distance_ < MIN_WEBGL_DISTANCE) {
          if (this.renderer_.gl.isContextLost()) {
            this.lostGlContext_.restoreContext();
          }
        } else if (!this.renderer_.gl.isContextLost()) {
          this.lostGlContext_.loseContext();
        }
      }
    }, {
      key: "onPermissionState_",
      value: function onPermissionState_(permissionState) {
        var _this3 = this;
        if (this.activateButton_) {
          this.mutateElement(function() {
            _this3.getPage_().removeChild(_this3.activateButton_);
            _this3.activateButton_ = null;
          });
        }
        if (permissionState === "granted") {
          this.enableGyroscope_();
        } else if (permissionState === "denied") {
          this.gyroscopeControls_ = false;
        }
      }
    }, {
      key: "checkGyroscopePermissions_",
      value: function checkGyroscopePermissions_() {
        var _this4 = this;
        if (typeof this.win.DeviceOrientationEvent === "undefined") {
          return;
        }
        if (typeof this.win.DeviceOrientationEvent.requestPermission === "undefined") {
          this.enableGyroscope_();
        }
        if (typeof this.win.DeviceOrientationEvent.requestPermission === "function") {
          this.win.DeviceOrientationEvent.requestPermission().catch(function() {
            _this4.renderActivateButton_();
          }).then(function(permissionState) {
            permissionState && _this4.setPermissionState_(permissionState);
          });
        }
      }
    }, {
      key: "enableGyroscope_",
      value: function enableGyroscope_() {
        var _this5 = this;
        listenOncePromise(this.win, "deviceorientation").then(function(e) {
          _this5.gyroscopeControls_ = true;
          _this5.setGyroscopeDefaultHeading_(e.alpha);
          var rafTimeout;
          _this5.win.addEventListener("deviceorientation", function(e2) {
            if (_this5.isReady_ && _this5.distance_ < MIN_WEBGL_DISTANCE) {
              rafTimeout && _this5.win.cancelAnimationFrame(rafTimeout);
              rafTimeout = _this5.win.requestAnimationFrame(function() {
                if (!_this5.isOnActivePage_) {
                  _this5.setGyroscopeDefaultHeading_(e2.alpha);
                }
                _this5.onDeviceOrientation_(e2);
              });
            }
          });
          _this5.maybeShowDiscoveryAnimation_();
        });
      }
    }, {
      key: "setGyroscopeDefaultHeading_",
      value: function setGyroscopeDefaultHeading_(orientationAlpha) {
        this.headingOffset_ = parseFloat(this.element.getAttribute("heading-end") || this.element.getAttribute("heading-start") || 0) + CENTER_OFFSET + orientationAlpha;
      }
    }, {
      key: "maybeShowDiscoveryAnimation_",
      value: function maybeShowDiscoveryAnimation_() {
        var _this6 = this;
        if (this.isOnActivePage_ && this.gyroscopeControls_ && !this.element.ownerDocument.querySelector(".i-amphtml-story-360-discovery")) {
          var page = this.getPage_();
          var discoveryTemplate = page && buildDiscoveryTemplate(page);
          this.mutateElement(function() {
            discoveryTemplate.querySelector(".i-amphtml-story-360-discovery-text").textContent = _this6.localizationService_.getLocalizedString(LocalizedStringId.AMP_STORY_DISCOVERY_DIALOG_TEXT);
          });
          this.mutateElement(function() {
            return page.appendChild(discoveryTemplate);
          });
        }
      }
    }, {
      key: "onDeviceOrientation_",
      value: function onDeviceOrientation_(e) {
        var _this7 = this;
        var rot = Matrix.identity(3);
        rot = Matrix.mul(3, Matrix.rotation(3, 1, 0, deg2rad(e.alpha - this.headingOffset_)), rot);
        rot = Matrix.mul(3, Matrix.rotation(3, 2, 1, deg2rad(e.beta)), rot);
        rot = Matrix.mul(3, Matrix.rotation(3, 0, 2, deg2rad(e.gamma)), rot);
        this.rot_ = this.rot_ ? rot.map(function(val, i) {
          return (val + _this7.rot_[i]) / 2;
        }) : rot;
        this.renderer_.setCamera(this.rot_, 1);
        this.renderer_.render(true);
      }
    }, {
      key: "renderActivateButton_",
      value: function renderActivateButton_() {
        var _this8 = this;
        var ampStoryPage = this.getPage_();
        this.activateButton_ = ampStoryPage && buildActivateButtonTemplate(ampStoryPage);
        this.activateButton_.querySelector(".i-amphtml-story-360-activate-text").textContent = this.localizationService_.getLocalizedString(LocalizedStringId.AMP_STORY_ACTIVATE_BUTTON_TEXT);
        this.activateButton_.addEventListener("click", function() {
          return _this8.requestGyroscopePermissions_();
        });
        this.mutateElement(function() {
          return ampStoryPage.appendChild(_this8.activateButton_);
        });
      }
    }, {
      key: "requestGyroscopePermissions_",
      value: function requestGyroscopePermissions_() {
        var _this9 = this;
        if (this.win.DeviceOrientationEvent.requestPermission) {
          this.win.DeviceOrientationEvent.requestPermission().then(function(permissionState) {
            _this9.setPermissionState_(permissionState);
          }).catch(function(error) {
            dev().error(TAG, "Gyroscope permission error: " + error.message);
          });
        }
      }
    }, {
      key: "setPermissionState_",
      value: function setPermissionState_(permissionState) {
        if (permissionState === "granted") {
          this.storeService_.dispatch(Action.SET_GYROSCOPE_PERMISSION, "granted");
        } else if (permissionState === "denied") {
          this.storeService_.dispatch(Action.SET_GYROSCOPE_PERMISSION, "denied");
        }
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "checkImageReSize_",
      value: function checkImageReSize_(imgEl) {
        var MAX_TEXTURE_SIZE = this.renderer_.gl.getParameter(this.renderer_.gl.MAX_TEXTURE_SIZE);
        if (imgEl.naturalWidth > MAX_TEXTURE_SIZE || imgEl.naturalHeight > MAX_TEXTURE_SIZE) {
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = Math.min(imgEl.naturalWidth, MAX_TEXTURE_SIZE);
          canvas.height = Math.min(imgEl.naturalHeight, MAX_TEXTURE_SIZE);
          ctx.drawImage(imgEl, 0, 0, canvas.width, canvas.height);
          return canvas;
        } else {
          return imgEl;
        }
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var ampImgEl = this.element.querySelector("amp-img");
        this.ampVideoEl_ = this.element.querySelector("amp-video");
        var mediaEl = ampImgEl || this.ampVideoEl_;
        userAssert(mediaEl, "amp-story-360 must contain an amp-img or amp-video element.");
        if (mediaEl) {
          this.setAccessibleText_(mediaEl);
        }
        if (ampImgEl) {
          return this.setupAmpImgRenderer_(ampImgEl);
        }
        if (this.ampVideoEl_) {
          return this.setupAmpVideoRenderer_();
        }
      }
    }, {
      key: "setAccessibleText_",
      value: function setAccessibleText_(mediaEl) {
        var altTags = ["alt", "title", "aria-label"];
        var altTag = altTags.find(function(attr) {
          return mediaEl.getAttribute(attr);
        });
        if (altTag) {
          var altText = mediaEl.getAttribute(altTag);
          this.canvas_.setAttribute("role", "img");
          this.canvas_.setAttribute("aria-label", altText);
        }
      }
    }, {
      key: "setupAmpImgRenderer_",
      value: function setupAmpImgRenderer_(ampImgEl) {
        var _this10 = this;
        var owners = Services.ownersForDoc(this.element);
        owners.setOwner(ampImgEl, this.element);
        owners.scheduleLayout(this.element, ampImgEl);
        return whenUpgradedToCustomElement(ampImgEl).then(function() {
          return ampImgEl.signals().whenSignal(CommonSignals.LOAD_END);
        }).then(function() {
          _this10.renderer_ = new Renderer(_this10.canvas_);
          _this10.setupGlContextListeners_();
          _this10.image_ = _this10.checkImageReSize_(dev().assertElement(_this10.element.querySelector("img")));
          _this10.initRenderer_();
        }, function() {
          user().error(TAG, "Failed to load the amp-img.");
        });
      }
    }, {
      key: "setupAmpVideoRenderer_",
      value: function setupAmpVideoRenderer_() {
        var _this11 = this;
        return whenUpgradedToCustomElement(dev().assertElement(this.ampVideoEl_)).then(function() {
          return _this11.ampVideoEl_.signals().whenSignal(CommonSignals.LOAD_END);
        }).then(function() {
          var alreadyHasData = dev().assertElement(_this11.ampVideoEl_.querySelector("video")).readyState >= HAVE_CURRENT_DATA;
          return alreadyHasData ? resolvedPromise() : listenOncePromise(_this11.ampVideoEl_, "loadeddata");
        }).then(function() {
          _this11.renderer_ = new Renderer(_this11.canvas_);
          _this11.setupGlContextListeners_();
          _this11.initRenderer_();
        }, function() {
          user().error(TAG, "Failed to load the amp-video.");
        });
      }
    }, {
      key: "setupGlContextListeners_",
      value: function setupGlContextListeners_() {
        var _this12 = this;
        this.lostGlContext_ = this.renderer_.gl.getExtension("WEBGL_lose_context");
        this.renderer_.canvas.addEventListener("webglcontextlost", function(e) {
          e.preventDefault();
          _this12.isReady_ = false;
        });
        this.renderer_.canvas.addEventListener("webglcontextrestored", function() {
          return _this12.initRenderer_();
        });
      }
    }, {
      key: "initRenderer_",
      value: function initRenderer_() {
        this.renderer_.init();
        this.renderer_.setImageOrientation(this.sceneHeading_, this.scenePitch_, this.sceneRoll_);
        this.renderer_.setImage(this.image_ ? this.image_ : dev().assertElement(this.ampVideoEl_.querySelector("video")));
        this.renderer_.resize();
        if (this.orientations_.length < 1) {
          return;
        }
        this.renderInitialPosition_();
        this.isReady_ = true;
        if (this.isPlaying_) {
          this.animate_();
        }
        this.markAsLoaded_();
      }
    }, {
      key: "markAsLoaded_",
      value: function markAsLoaded_() {
        var _this13 = this;
        this.mutateElement(function() {
          _this13.element.classList.add("i-amphtml-story-360-loaded");
        });
      }
    }, {
      key: "resizeRenderer_",
      value: function resizeRenderer_() {
        var _this14 = this;
        this.mutateElement(function() {
          if (_this14.renderer_) {
            _this14.renderer_.resize();
            if (!_this14.isPlaying_) {
              _this14.renderer_.render(false);
            }
          }
        });
      }
    }, {
      key: "renderInitialPosition_",
      value: function renderInitialPosition_() {
        var _this15 = this;
        if (this.gyroscopeControls_) {
          return;
        }
        this.mutateElement(function() {
          _this15.renderer_.setCamera(_this15.orientations_[0].rotation, _this15.orientations_[0].scale);
          _this15.renderer_.render(false);
        });
      }
    }, {
      key: "canAnimate",
      get: function get() {
        return this.duration_ > 0 && this.orientations_.length > 1;
      }
    }, {
      key: "animate_",
      value: function animate_() {
        var _this16 = this;
        if (!this.animation_) {
          this.animation_ = new CameraAnimation(this.duration_, this.orientations_);
        }
        var loop = function loop2() {
          if (!_this16.isPlaying_ || !_this16.animation_) {
            _this16.renderer_.render(false);
            return;
          }
          var nextOrientation = _this16.animation_.getNextOrientation();
          _this16.win.requestAnimationFrame(function() {
            if (!nextOrientation && !_this16.ampVideoEl_) {
              _this16.isPlaying_ = false;
              _this16.renderer_.render(false);
              return;
            }
            if (nextOrientation && !_this16.gyroscopeControls_) {
              _this16.renderer_.setCamera(nextOrientation.rotation, nextOrientation.scale);
            }
            if (_this16.ampVideoEl_) {
              var videoEl = dev().assertElement(_this16.ampVideoEl_.querySelector("video"));
              if (videoEl.readyState >= HAVE_CURRENT_DATA) {
                _this16.renderer_.setImage(videoEl);
              }
            }
            _this16.renderer_.render(true);
            loop2();
          });
        };
        this.mutateElement(function() {
          return loop();
        });
      }
    }, {
      key: "pause_",
      value: function pause_() {
        this.isPlaying_ = false;
      }
    }, {
      key: "play_",
      value: function play_() {
        if (!this.canAnimate) {
          return;
        }
        userAssert(this.canAnimate, "amp-story-360 is either not configured to play an animation or still loading content.");
        this.isPlaying_ = true;
        if (this.isReady_) {
          this.animate_();
        }
      }
    }, {
      key: "rewind_",
      value: function rewind_() {
        var _this17 = this;
        if (!this.canAnimate) {
          return;
        }
        this.animation_ = null;
        if (this.isReady_) {
          this.win.requestAnimationFrame(function() {
            _this17.renderInitialPosition_();
            if (_this17.isPlaying_) {
              _this17.animate_();
            }
          });
        }
      }
    }]);
    return AmpStory3602;
  }(AMP.BaseElement);
  AMP.extension("amp-story-360", "0.1", function(AMP2) {
    AMP2.registerElement("amp-story-360", AmpStory360, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
/**
* @license
* Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
* Use of this source code is governed by a BSD-style
* license that can be found in the LICENSE file or at
* https://developers.google.com/open-source/licenses/bsd
*/

})});
//# sourceMappingURL=amp-story-360-0.1.max.js.map
