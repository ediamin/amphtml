(self.AMP=self.AMP||[]).push({n:"amp-mega-menu",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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

  // build/amp-mega-menu-0.1.css.js
  var CSS2 = "amp-mega-menu{z-index:1000!important;white-space:nowrap!important}amp-mega-menu.i-amphtml-layout-size-defined[open]{overflow:visible!important}amp-mega-menu nav{background:#fff}amp-mega-menu nav>*{margin:0}amp-mega-menu .i-amphtml-mega-menu-item{display:inline-block!important}amp-mega-menu .i-amphtml-mega-menu-heading{cursor:pointer!important}amp-mega-menu .i-amphtml-mega-menu-content{position:absolute!important;left:0;width:100vw;opacity:0!important;visibility:hidden!important;background:#fff}amp-mega-menu .i-amphtml-mega-menu-item[open]>.i-amphtml-mega-menu-content{visibility:visible!important;opacity:1!important}amp-mega-menu .i-amphtml-mega-menu-item:not([open]) .i-amphtml-screen-reader{display:none!important}.i-amphtml-mega-menu-mask-parent{z-index:1000!important;position:relative}.i-amphtml-mega-menu-mask{position:fixed!important;z-index:-1!important;visibility:hidden!important;opacity:0!important;top:0!important;bottom:0!important;left:0!important;right:0!important;background:rgba(0,0,0,0.5);transition:opacity 200ms,visibility 0s 200ms}.i-amphtml-mega-menu-mask[open]{opacity:1!important;visibility:visible!important;transition:opacity 200ms}\n/*# sourceURL=/extensions/amp-mega-menu/0.1/amp-mega-menu.css*/";

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

  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
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

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
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
  function isConnectedNode(node) {
    var connected = node.isConnected;
    if (connected !== void 0) {
      return connected;
    }
    var n = node;
    do {
      n = rootNodeFor(n);
      if (n.host) {
        n = n.host;
      } else {
        break;
      }
    } while (true);
    return n.nodeType === Node.DOCUMENT_NODE;
  }
  function rootNodeFor(node) {
    if (Node.prototype.getRootNode) {
      return node.getRootNode() || node;
    }
    var n;
    for (n = node; !!n.parentNode && !isShadowRoot(n); n = n.parentNode) {
    }
    return n;
  }
  function isShadowRoot(value) {
    if (!value) {
      return false;
    }
    if (value.tagName == "I-AMPHTML-SHADOW-ROOT") {
      return true;
    }
    return value.nodeType == 11 && Object.prototype.toString.call(value) === "[object ShadowRoot]";
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

  // src/core/math/index.js
  function mod(a, b) {
    return a > 0 && b > 0 ? a % b : (a % b + b) % b;
  }

  // src/modal.js
  var modalEntryStack = [];
  var SAVED_TAB_INDEX = "__AMP_MODAL_SAVED_TAB_INDEX";
  function getElementsToAriaHide(element) {
    var arr = [];
    var ancestors = getAncestors(element);
    var _loop = function _loop2(i2) {
      var cur = ancestors[i2];
      if (!cur.parentNode) {
        return "continue";
      }
      toArray(cur.parentNode.children).filter(function(c) {
        return c != cur;
      }).forEach(function(c) {
        return arr.push(c);
      });
    };
    for (var i = 0; i < ancestors.length; i++) {
      var _ret = _loop(i);
      if (_ret === "continue")
        continue;
    }
    return arr;
  }
  function getAncestors(element) {
    var ancestry = [];
    for (var cur = element; cur; cur = cur.parentNode || cur.host) {
      ancestry.push(cur);
    }
    return ancestry;
  }
  function getPotentiallyFocusableElements(element) {
    var arr = [];
    var cur = element;
    while (cur) {
      var root = rootNodeFor(cur);
      var potentiallyFocusable = root.querySelectorAll(["a[href]", "area[href]", "button", "details summary", "iframe", "input", "select", "textarea", "[contenteditable]", "[draggable]", "[tabindex]"].join(","));
      Array.prototype.push.apply(arr, potentiallyFocusable);
      cur = root.host;
    }
    return arr;
  }
  function restoreAttributeValue(element, attribute, value) {
    if (value === null) {
      element.removeAttribute(attribute);
    } else {
      element.setAttribute(attribute, value);
    }
  }
  function setModalAsOpen(element) {
    devAssert(modalEntryStack.every(function(info) {
      return info.element !== element;
    }));
    devAssert(isConnectedNode(element));
    var elements = getElementsToAriaHide(element);
    var ancestry = getAncestors(element).filter(isElement);
    var focusableElements = getPotentiallyFocusableElements(element);
    var focusableInternalElements = focusableElements.filter(function(e) {
      return element.contains(e) && e[SAVED_TAB_INDEX] !== void 0;
    });
    var focusableExternalElements = focusableElements.filter(function(e) {
      return !element.contains(e) && e[SAVED_TAB_INDEX] === void 0;
    });
    var hiddenElementInfos = elements.concat(ancestry).map(function(element2) {
      return {
        element: element2,
        prevValue: element2.getAttribute("aria-hidden")
      };
    });
    ancestry.forEach(function(e) {
      return e.removeAttribute("aria-hidden");
    });
    elements.forEach(function(e) {
      return e.setAttribute("aria-hidden", "true");
    });
    focusableExternalElements.forEach(function(e) {
      e[SAVED_TAB_INDEX] = e.getAttribute("tabindex");
      e.setAttribute("tabindex", "-1");
    });
    focusableInternalElements.forEach(function(e) {
      devAssert(e[SAVED_TAB_INDEX] !== void 0);
      restoreAttributeValue(e, "tabindex", e[SAVED_TAB_INDEX]);
    });
    modalEntryStack.push({
      element,
      hiddenElementInfos,
      focusableExternalElements,
      focusableInternalElements
    });
  }
  function setModalAsClosed(element) {
    var _modalEntryStack$pop = modalEntryStack.pop(), topModalElement = _modalEntryStack$pop.element, focusableExternalElements = _modalEntryStack$pop.focusableExternalElements, focusableInternalElements = _modalEntryStack$pop.focusableInternalElements, hiddenElementInfos = _modalEntryStack$pop.hiddenElementInfos;
    devAssert(isConnectedNode(element));
    devAssert(topModalElement === element);
    hiddenElementInfos.forEach(function(hiddenElementInfo) {
      var element2 = hiddenElementInfo.element, prevValue = hiddenElementInfo.prevValue;
      restoreAttributeValue(element2, "aria-hidden", prevValue);
    });
    focusableInternalElements.forEach(function(e) {
      e.setAttribute("tabindex", "-1");
    });
    focusableExternalElements.forEach(function(e) {
      devAssert(e[SAVED_TAB_INDEX] !== void 0);
      restoreAttributeValue(e, "tabindex", e[SAVED_TAB_INDEX]);
      e[SAVED_TAB_INDEX] = void 0;
    });
  }

  // extensions/amp-mega-menu/0.1/amp-mega-menu.js
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
  var TAG = "amp-mega-menu";
  var ARIA_LABEL_CLOSE = "Close the menu";
  var AmpMegaMenu = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpMegaMenu2, _AMP$BaseElement);
    var _super = _createSuper(AmpMegaMenu2);
    function AmpMegaMenu2(element) {
      var _this;
      _classCallCheck3(this, AmpMegaMenu2);
      _this = _super.call(this, element);
      _this.items_ = [];
      _this.itemCount_ = 0;
      _this.expandedItem_ = null;
      _this.maskElement_ = null;
      _this.document_ = _this.win.document;
      _this.documentElement_ = _this.document_.documentElement;
      _this.action_ = null;
      _this.prefix_ = element.id || Math.floor(Math.random() * 100);
      _this.domUpdateHandler_ = _this.registerMenuItems_.bind(_assertThisInitialized(_this));
      _this.rootClickHandler_ = _this.handleRootClick_.bind(_assertThisInitialized(_this));
      _this.rootKeyDownHandler_ = _this.handleRootKeyDown_.bind(_assertThisInitialized(_this));
      return _this;
    }
    _createClass2(AmpMegaMenu2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout === Layout.FIXED_HEIGHT;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.action_ = Services.actionServiceForDoc(this.element);
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        this.registerMenuItems_();
        this.element.addEventListener(AmpEvents.DOM_UPDATE, this.domUpdateHandler_);
        if (!this.maskElement_) {
          this.maskElement_ = this.createMaskElement_();
        }
        return resolvedPromise();
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        this.element.removeEventListener(AmpEvents.DOM_UPDATE, this.domUpdateHandler_);
        this.collapse_();
        return true;
      }
    }, {
      key: "createMaskElement_",
      value: function createMaskElement_() {
        var mask = this.document_.createElement("div");
        mask.classList.add("i-amphtml-mega-menu-mask");
        mask.setAttribute("aria-hidden", "true");
        var maskParent = closestAncestorElementBySelector(this.element, "header") || this.element;
        maskParent.classList.add("i-amphtml-mega-menu-mask-parent");
        maskParent.appendChild(mask);
        return mask;
      }
    }, {
      key: "registerMenuItems_",
      value: function registerMenuItems_() {
        var _this2 = this;
        this.items_ = toArray(scopedQuerySelectorAll(this.element, "nav > * > li"));
        this.items_.filter(function(item) {
          return !item.classList.contains("i-amphtml-mega-menu-item");
        }).forEach(function(item) {
          if (item.childElementCount == 1) {
            var _heading = dev().assertElement(item.firstElementChild);
            _this2.registerMenuItem_(item, _heading, null);
            return;
          }
          var heading = scopedQuerySelector(item, "> button") || scopedQuerySelector(item, "> [role=button]");
          var content = scopedQuerySelector(item, "> [role=dialog]");
          userAssert(heading, TAG + " requires each expandable item to include a button that toggles it.");
          _this2.registerMenuItem_(item, heading, content);
        });
      }
    }, {
      key: "registerMenuItem_",
      value: function registerMenuItem_(item, heading, content) {
        var _this3 = this;
        item.classList.add("i-amphtml-mega-menu-item");
        this.itemCount_++;
        heading.classList.add("i-amphtml-mega-menu-heading");
        if (!heading.hasAttribute("tabindex")) {
          heading.setAttribute("tabindex", 0);
        }
        heading.addEventListener("click", function(e) {
          return _this3.handleHeadingClick_(e);
        });
        heading.addEventListener("keydown", function(e) {
          return _this3.handleHeadingKeyDown_(e);
        });
        if (!content || this.action_.hasAction(heading, "tap", item)) {
          return;
        }
        content.classList.add("i-amphtml-mega-menu-content");
        content.setAttribute("aria-modal", "false");
        var contentId = content.getAttribute("id");
        if (!contentId) {
          contentId = this.prefix_ + "_AMP_content_" + this.itemCount_;
          content.setAttribute("id", contentId);
        }
        content.insertBefore(this.createScreenReaderCloseButton_(), content.firstChild);
        content.appendChild(this.createScreenReaderCloseButton_());
        heading.setAttribute("aria-haspopup", "dialog");
        heading.setAttribute("aria-controls", contentId);
        heading.setAttribute("aria-expanded", "false");
      }
    }, {
      key: "handleRootClick_",
      value: function handleRootClick_(event) {
        var target = dev().assertElement(event.target);
        if (this.expandedItem_ && !this.expandedItem_.contains(target) && isConnectedNode(target)) {
          this.collapse_();
        }
      }
    }, {
      key: "handleRootKeyDown_",
      value: function handleRootKeyDown_(event) {
        if (event.key === Keys.ESCAPE && this.collapse_()) {
          event.preventDefault();
        }
      }
    }, {
      key: "handleHeadingClick_",
      value: function handleHeadingClick_(event) {
        if (!this.shouldHandleClick_(event)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        var item = dev().assertElement(event.currentTarget.parentElement);
        var previousItem = this.collapse_();
        if (item != previousItem) {
          this.expand_(item);
        }
      }
    }, {
      key: "shouldHandleClick_",
      value: function shouldHandleClick_(event) {
        var target = dev().assertElement(event.target);
        var currentTarget = dev().assertElement(event.currentTarget);
        var hasAnchor = !!closest(target, function(e) {
          return e.tagName == "A";
        }, currentTarget);
        if (hasAnchor) {
          return false;
        }
        var hasTapAction = this.action_.hasAction(target, "tap", currentTarget);
        if (hasTapAction) {
          return false;
        }
        return currentTarget.hasAttribute("aria-haspopup");
      }
    }, {
      key: "handleHeadingKeyDown_",
      value: function handleHeadingKeyDown_(event) {
        if (event.defaultPrevented) {
          return;
        }
        var key = event.key;
        switch (key) {
          case Keys.LEFT_ARROW:
          case Keys.RIGHT_ARROW:
            this.handleNavigationKeyDown_(event);
            return;
          case Keys.ENTER:
          case Keys.SPACE:
            if (event.target == event.currentTarget) {
              this.handleHeadingClick_(event);
            }
            return;
        }
      }
    }, {
      key: "handleNavigationKeyDown_",
      value: function handleNavigationKeyDown_(event) {
        var item = dev().assertElement(event.currentTarget.parentElement);
        var index = this.items_.indexOf(item);
        if (index !== -1) {
          event.preventDefault();
          var dir = event.key == Keys.LEFT_ARROW ? -1 : 1;
          if (isRTL(this.document_)) {
            dir = -dir;
          }
          var newIndex = mod(index + dir, this.items_.length);
          tryFocus(this.getItemHeading_(this.items_[newIndex]));
        }
      }
    }, {
      key: "expand_",
      value: function expand_(item) {
        var _this4 = this;
        this.mutateElement(function() {
          var content = _this4.getItemContent_(item);
          setModalAsOpen(content);
          content.setAttribute("aria-modal", "true");
        });
        item.setAttribute("open", "");
        this.element.setAttribute("open", "");
        this.maskElement_.setAttribute("open", "");
        var heading = this.getItemHeading_(item);
        heading.setAttribute("aria-expanded", "true");
        var screenReaderCloseButton = dev().assertElement(item.querySelector(".i-amphtml-screen-reader"));
        tryFocus(screenReaderCloseButton);
        this.documentElement_.addEventListener("click", this.rootClickHandler_);
        this.documentElement_.addEventListener("keydown", this.rootKeyDownHandler_);
        this.expandedItem_ = item;
      }
    }, {
      key: "collapse_",
      value: function collapse_() {
        var _this5 = this;
        if (!this.expandedItem_) {
          return null;
        }
        var item = dev().assertElement(this.expandedItem_);
        this.mutateElement(function() {
          var content = _this5.getItemContent_(item);
          setModalAsClosed(content);
          content.setAttribute("aria-modal", "false");
        });
        item.removeAttribute("open");
        this.element.removeAttribute("open");
        this.maskElement_.removeAttribute("open");
        var heading = this.getItemHeading_(item);
        heading.setAttribute("aria-expanded", "false");
        if (item.contains(this.document_.activeElement)) {
          tryFocus(heading);
        }
        this.documentElement_.removeEventListener("click", this.rootClickHandler_);
        this.documentElement_.removeEventListener("keydown", this.rootKeyDownHandler_);
        this.expandedItem_ = null;
        return item;
      }
    }, {
      key: "getItemHeading_",
      value: function getItemHeading_(item) {
        var heading = scopedQuerySelector(item, "> .i-amphtml-mega-menu-heading");
        return dev().assertElement(heading);
      }
    }, {
      key: "getItemContent_",
      value: function getItemContent_(item) {
        var content = scopedQuerySelector(item, "> .i-amphtml-mega-menu-content");
        return dev().assertElement(content);
      }
    }, {
      key: "createScreenReaderCloseButton_",
      value: function createScreenReaderCloseButton_() {
        var _this6 = this;
        var ariaLabel = this.element.getAttribute("data-close-button-aria-label") || ARIA_LABEL_CLOSE;
        var screenReaderCloseButton = this.document_.createElement("button");
        screenReaderCloseButton.textContent = ariaLabel;
        screenReaderCloseButton.classList.add("i-amphtml-screen-reader");
        screenReaderCloseButton.addEventListener("click", function() {
          return _this6.collapse_();
        });
        return screenReaderCloseButton;
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }]);
    return AmpMegaMenu2;
  }(AMP.BaseElement);
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerElement(TAG, AmpMegaMenu, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-mega-menu-0.1.max.js.map
