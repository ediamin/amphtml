(self.AMP=self.AMP||[]).push({n:"amp-selector",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
  function areEqualOrdered(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  // src/core/types/enum.js
  function isEnumValue(enumObj, val) {
    for (var k in enumObj) {
      if (enumObj[k] === val) {
        return true;
      }
    }
    return false;
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

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";

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

  // build/amp-selector-0.1.css.js
  var CSS2 = "amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector[multiple] [option][selected]{cursor:pointer;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/";

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
  function isRTL(doc) {
    var dir = doc.body.getAttribute("dir") || doc.documentElement.getAttribute("dir") || "ltr";
    return dir == "rtl";
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

  // src/core/math/index.js
  function mod(a, b) {
    return a > 0 && b > 0 ? a % b : (a % b + b) % b;
  }

  // extensions/amp-selector/0.1/amp-selector.js
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
  var TAG = "amp-selector";
  var KEYBOARD_SELECT_MODES = {
    NONE: "none",
    FOCUS: "focus",
    SELECT: "select"
  };
  var AmpSelector = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpSelector2, _AMP$BaseElement);
    var _super = _createSuper(AmpSelector2);
    function AmpSelector2(element) {
      var _this;
      _classCallCheck3(this, AmpSelector2);
      _this = _super.call(this, element);
      _this.isMultiple_ = false;
      _this.selectedElements_ = [];
      _this.elements_ = [];
      _this.inputs_ = [];
      _this.action_ = null;
      _this.focusedIndex_ = 0;
      _this.kbSelectMode_ = KEYBOARD_SELECT_MODES.NONE;
      return _this;
    }
    _createClass2(AmpSelector2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported() {
        return true;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.action_ = Services.actionServiceForDoc(this.element);
        this.isMultiple_ = this.element.hasAttribute("multiple");
        if (!this.element.hasAttribute("role")) {
          this.element.setAttribute("role", "listbox");
        }
        if (this.isMultiple_) {
          this.element.setAttribute("aria-multiselectable", "true");
        }
        if (this.element.hasAttribute("disabled")) {
          this.element.setAttribute("aria-disabled", "true");
        }
        var kbSelectMode = this.element.getAttribute("keyboard-select-mode");
        if (kbSelectMode) {
          kbSelectMode = kbSelectMode.toLowerCase();
          userAssert(isEnumValue(KEYBOARD_SELECT_MODES, kbSelectMode), "Unknown keyboard-select-mode: " + kbSelectMode);
          userAssert(!(this.isMultiple_ && kbSelectMode == KEYBOARD_SELECT_MODES.SELECT), "[keyboard-select-mode=select] not supported for multiple selection amp-selector");
        } else {
          kbSelectMode = KEYBOARD_SELECT_MODES.NONE;
        }
        this.kbSelectMode_ = kbSelectMode;
        this.registerAction("clear", this.clearAllSelections_.bind(this));
        this.init_();
        this.element.addEventListener("click", this.clickHandler_.bind(this));
        this.element.addEventListener("keydown", this.keyDownHandler_.bind(this));
        this.registerAction("selectUp", function(invocation) {
          var args = invocation.args, trust = invocation.trust;
          var delta = args && args["delta"] !== void 0 ? -args["delta"] : -1;
          _this2.select_(delta, trust);
        }, ActionTrust.LOW);
        this.registerAction("selectDown", function(invocation) {
          var args = invocation.args, trust = invocation.trust;
          var delta = args && args["delta"] !== void 0 ? args["delta"] : 1;
          _this2.select_(delta, trust);
        }, ActionTrust.LOW);
        this.registerAction("toggle", function(invocation) {
          var args = invocation.args, trust = invocation.trust;
          userAssert(args["index"] >= 0, "'index' must be greater than 0");
          userAssert(args["index"] < _this2.elements_.length, "'index' must be less than the length of options in the <amp-selector>");
          if (args && args["index"] !== void 0) {
            return _this2.toggle_(args["index"], args["value"], trust);
          } else {
            return Promise.reject("'index' must be specified");
          }
        }, ActionTrust.LOW);
        this.action_.addToAllowlist(TAG, ["clear", "selectDown", "selectUp", "toggle"], ["email"]);
        this.element.addEventListener(AmpEvents.DOM_UPDATE, this.maybeRefreshOnUpdate_.bind(this));
      }
    }, {
      key: "mutatedAttributesCallback",
      value: function mutatedAttributesCallback(mutations) {
        var selected = mutations["selected"];
        if (selected !== void 0) {
          this.selectedAttributeMutated_(selected);
        }
        var disabled = mutations["disabled"];
        if (disabled !== void 0) {
          if (disabled) {
            this.element.setAttribute("aria-disabled", "true");
          } else {
            this.element.removeAttribute("aria-disabled");
          }
        }
      }
    }, {
      key: "selectedAttributeMutated_",
      value: function selectedAttributeMutated_(newValue) {
        var selected = Array.isArray(newValue) ? newValue : [newValue];
        if (newValue === null || selected.length == 0) {
          this.clearAllSelections_();
          return;
        }
        if (!this.isMultiple_) {
          selected = selected.slice(0, 1);
        }
        var current = this.selectedOptions_();
        if (areEqualOrdered(current.sort(), selected.sort())) {
          return;
        }
        var isSelected = selected.reduce(function(map2, value) {
          map2[value] = true;
          return map2;
        }, Object.create(null));
        for (var i = 0; i < this.elements_.length; i++) {
          var element = this.elements_[i];
          var option = element.getAttribute("option");
          if (isSelected[option]) {
            this.setSelection_(element);
          } else {
            this.clearSelection_(element);
          }
        }
        this.updateFocus_();
        this.setInputs_();
      }
    }, {
      key: "updateFocus_",
      value: function updateFocus_(opt_focusEl) {
        if (this.kbSelectMode_ == KEYBOARD_SELECT_MODES.NONE) {
          return;
        }
        this.elements_.forEach(function(option) {
          option.tabIndex = -1;
        });
        var focusElement = opt_focusEl;
        if (!focusElement) {
          if (this.isMultiple_) {
            focusElement = this.elements_[0];
          } else {
            focusElement = this.selectedElements_[0] || this.elements_[0];
          }
        }
        if (focusElement) {
          this.focusedIndex_ = this.elements_.indexOf(focusElement);
          focusElement.tabIndex = 0;
        }
      }
    }, {
      key: "maybeRefreshOnUpdate_",
      value: function maybeRefreshOnUpdate_(unusedEvent) {
        var newElements = toArray(this.element.querySelectorAll("[option]"));
        if (areEqualOrdered(this.elements_, newElements)) {
          return;
        }
        this.init_(newElements);
      }
    }, {
      key: "init_",
      value: function init_(opt_elements) {
        var _this3 = this;
        this.selectedElements_.length = 0;
        var elements = opt_elements ? opt_elements : toArray(this.element.querySelectorAll("[option]"));
        elements.forEach(function(el) {
          if (!el.hasAttribute("role")) {
            el.setAttribute("role", "option");
          }
          if (el.hasAttribute("disabled")) {
            el.setAttribute("aria-disabled", "true");
          }
          if (el.hasAttribute("selected")) {
            _this3.setSelection_(el);
          } else {
            _this3.clearSelection_(el);
          }
          el.tabIndex = 0;
        });
        this.elements_ = elements;
        this.updateFocus_();
        this.setInputs_();
      }
    }, {
      key: "setInputs_",
      value: function setInputs_() {
        var _this4 = this;
        var selectedValues = [];
        var elementName = this.element.getAttribute("name");
        if (!elementName || this.element.hasAttribute("disabled")) {
          return selectedValues;
        }
        var formId = this.element.getAttribute("form");
        this.inputs_.forEach(function(input) {
          _this4.element.removeChild(input);
        });
        this.inputs_ = [];
        var doc = this.win.document;
        var fragment = doc.createDocumentFragment();
        this.selectedElements_.forEach(function(option) {
          if (!option.hasAttribute("disabled")) {
            var hidden = doc.createElement("input");
            var value = option.getAttribute("option");
            hidden.setAttribute("type", "hidden");
            hidden.setAttribute("name", elementName);
            hidden.setAttribute("value", value);
            if (formId) {
              hidden.setAttribute("form", formId);
            }
            _this4.inputs_.push(hidden);
            fragment.appendChild(hidden);
            selectedValues.push(value);
          }
        });
        this.element.appendChild(fragment);
        return selectedValues;
      }
    }, {
      key: "onOptionPicked_",
      value: function onOptionPicked_(el) {
        var _this5 = this;
        if (el.hasAttribute("disabled")) {
          return;
        }
        this.mutateElement(function() {
          if (el.hasAttribute("selected")) {
            if (_this5.isMultiple_) {
              _this5.clearSelection_(el);
              _this5.setInputs_();
            }
          } else {
            _this5.setSelection_(el);
            _this5.setInputs_();
          }
          _this5.updateFocus_(el);
          _this5.fireSelectEvent_(el, ActionTrust.HIGH);
        });
      }
    }, {
      key: "selectedOptions_",
      value: function selectedOptions_() {
        return this.selectedElements_.map(function(el) {
          return el.getAttribute("option");
        });
      }
    }, {
      key: "clickHandler_",
      value: function clickHandler_(event) {
        if (this.element.hasAttribute("disabled")) {
          return;
        }
        var el = dev().assertElement(event.target);
        if (!el) {
          return;
        }
        if (!el.hasAttribute("option")) {
          el = closestAncestorElementBySelector(el, "[option]");
        }
        if (el) {
          this.onOptionPicked_(el);
        }
      }
    }, {
      key: "toggle_",
      value: function toggle_(index, value, trust) {
        var _this6 = this;
        var el = this.elements_[index];
        var indexCurrentStatus = el.hasAttribute("selected");
        var indexFinalStatus = value !== void 0 ? value : !indexCurrentStatus;
        var selectedIndex = this.elements_.indexOf(this.selectedElements_[0]);
        if (indexFinalStatus === indexCurrentStatus) {
          return resolvedPromise();
        }
        return this.mutateElement(function() {
          if (selectedIndex !== index) {
            _this6.setSelection_(el);
            var selectedEl = _this6.elements_[selectedIndex];
            if (selectedEl) {
              _this6.clearSelection_(selectedEl);
            }
          } else {
            _this6.clearSelection_(el);
          }
          _this6.fireSelectEvent_(el, trust);
        });
      }
    }, {
      key: "fireSelectEvent_",
      value: function fireSelectEvent_(el, trust) {
        var name = "select";
        var selectEvent = createCustomEvent(this.win, "amp-selector." + name, dict({
          "targetOption": el.getAttribute("option"),
          "selectedOptions": this.selectedOptions_()
        }));
        this.action_.trigger(this.element, name, selectEvent, trust);
      }
    }, {
      key: "select_",
      value: function select_(delta, trust) {
        var previousIndex = this.elements_.indexOf(this.selectedElements_[0]);
        var selectUpWhenNoneSelected = previousIndex === -1 && delta < 0;
        var index = selectUpWhenNoneSelected ? delta : previousIndex + delta;
        var normalizedIndex = mod(index, this.elements_.length);
        var el = this.elements_[normalizedIndex];
        this.setSelection_(el);
        var previousEl = this.elements_[previousIndex];
        if (previousEl) {
          this.clearSelection_(previousEl);
        }
        this.setInputs_();
        this.fireSelectEvent_(el, trust);
      }
    }, {
      key: "keyDownHandler_",
      value: function keyDownHandler_(event) {
        if (this.element.hasAttribute("disabled")) {
          return resolvedPromise();
        }
        var key = event.key;
        switch (key) {
          case Keys.LEFT_ARROW:
          case Keys.UP_ARROW:
          case Keys.RIGHT_ARROW:
          case Keys.DOWN_ARROW:
          case Keys.HOME:
          case Keys.END:
            if (this.kbSelectMode_ != KEYBOARD_SELECT_MODES.NONE) {
              return this.navigationKeyDownHandler_(event);
            }
            return resolvedPromise();
          case Keys.ENTER:
          case Keys.SPACE:
            this.selectionKeyDownHandler_(event);
            return resolvedPromise();
        }
        return resolvedPromise();
      }
    }, {
      key: "navigationKeyDownHandler_",
      value: function navigationKeyDownHandler_(event) {
        var _this7 = this;
        var doc = this.win.document;
        var dir = 0;
        switch (event.key) {
          case Keys.LEFT_ARROW:
            dir = isRTL(doc) ? 1 : -1;
            break;
          case Keys.UP_ARROW:
            dir = -1;
            break;
          case Keys.RIGHT_ARROW:
            dir = isRTL(doc) ? -1 : 1;
            break;
          case Keys.DOWN_ARROW:
            dir = 1;
            break;
          case Keys.HOME:
            dir = 1;
            break;
          case Keys.END:
            dir = -1;
            break;
          default:
            return resolvedPromise();
        }
        event.preventDefault();
        this.elements_[this.focusedIndex_].tabIndex = -1;
        return this.getElementsSizes_().then(function(sizes) {
          var originalIndex = _this7.focusedIndex_;
          switch (event.key) {
            case Keys.HOME:
              _this7.focusedIndex_ = _this7.elements_.length - 1;
              break;
            case Keys.END:
              _this7.focusedIndex_ = 0;
              break;
          }
          do {
            _this7.focusedIndex_ = (_this7.focusedIndex_ + dir) % _this7.elements_.length;
            if (_this7.focusedIndex_ < 0) {
              _this7.focusedIndex_ = _this7.focusedIndex_ + _this7.elements_.length;
            }
          } while (isElementHidden(_this7.elements_[_this7.focusedIndex_], sizes[_this7.focusedIndex_]) && _this7.focusedIndex_ != originalIndex);
          var newSelectedOption = _this7.elements_[_this7.focusedIndex_];
          newSelectedOption.tabIndex = 0;
          tryFocus(newSelectedOption);
          var focusedOption = _this7.elements_[_this7.focusedIndex_];
          if (_this7.kbSelectMode_ == KEYBOARD_SELECT_MODES.SELECT) {
            _this7.onOptionPicked_(focusedOption);
          }
        });
      }
    }, {
      key: "selectionKeyDownHandler_",
      value: function selectionKeyDownHandler_(event) {
        var key = event.key;
        if (key == Keys.SPACE || key == Keys.ENTER) {
          if (this.elements_.includes(dev().assertElement(event.target))) {
            event.preventDefault();
            var el = dev().assertElement(event.target);
            this.onOptionPicked_(el);
          }
        }
      }
    }, {
      key: "clearSelection_",
      value: function clearSelection_(element) {
        element.removeAttribute("selected");
        element.setAttribute("aria-selected", "false");
        var selIndex = this.selectedElements_.indexOf(element);
        if (selIndex !== -1) {
          this.selectedElements_.splice(selIndex, 1);
        }
      }
    }, {
      key: "clearAllSelections_",
      value: function clearAllSelections_() {
        while (this.selectedElements_.length > 0) {
          var el = this.selectedElements_.pop();
          this.clearSelection_(el);
        }
        this.setInputs_();
      }
    }, {
      key: "setSelection_",
      value: function setSelection_(element) {
        if (this.selectedElements_.includes(element)) {
          return;
        }
        if (!this.isMultiple_) {
          this.clearAllSelections_();
        }
        element.setAttribute("selected", "");
        element.setAttribute("aria-selected", "true");
        this.selectedElements_.push(element);
      }
    }, {
      key: "getElementsForTesting",
      value: function getElementsForTesting() {
        return this.elements_;
      }
    }, {
      key: "getSelectedElementsForTesting",
      value: function getSelectedElementsForTesting() {
        return this.selectedElements_;
      }
    }, {
      key: "getElementsSizes_",
      value: function getElementsSizes_() {
        var _this8 = this;
        return this.measureElement(function() {
          return _this8.elements_.map(function(element) {
            return element.getBoundingClientRect();
          });
        });
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }]);
    return AmpSelector2;
  }(AMP.BaseElement);
  function isElementHidden(element, rect) {
    var height = rect.height, width = rect.width;
    return element.hidden || width == 0 || height == 0;
  }
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerElement(TAG, AmpSelector, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-selector-0.1.max.js.map
