(self.AMP=self.AMP||[]).push({n:"amp-story-interactive",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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

  // third_party/css-escape/css-escape.js
  var regex = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
  function escaper(match, nil, dash, hexEscape, chars) {
    if (chars) {
      return chars;
    }
    if (nil) {
      return "\uFFFD";
    }
    if (hexEscape) {
      return match.slice(0, -1) + "\\" + match.slice(-1).charCodeAt(0).toString(16) + " ";
    }
    return "\\" + match;
  }
  function cssEscape(value) {
    return String(value).replace(regex, escaper);
  }

  // src/core/dom/css-selectors.js
  function escapeCssSelectorIdent(ident) {
    if (false) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
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

  // src/core/types/object/json.js
  function deepEquals(a2, b, depth) {
    if (depth === void 0) {
      depth = 5;
    }
    if (!isFinite(depth) || depth < 0) {
      throw new Error("Invalid depth: " + depth);
    }
    if (a2 === b) {
      return true;
    }
    var queue = [{
      a: a2,
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

  // extensions/amp-story/1.0/variable-service.js
  var AnalyticsVariable = {
    STORY_INTERACTIVE_ID: "storyInteractiveId",
    STORY_INTERACTIVE_RESPONSE: "storyInteractiveResponse",
    STORY_INTERACTIVE_TYPE: "storyInteractiveType",
    STORY_PAGE_ID: "storyPageId",
    STORY_PAGE_INDEX: "storyPageIndex",
    STORY_PAGE_COUNT: "storyPageCount",
    STORY_IS_MUTED: "storyIsMuted",
    STORY_PROGRESS: "storyProgress",
    STORY_PREVIOUS_PAGE_ID: "storyPreviousPageId",
    STORY_ADVANCEMENT_MODE: "storyAdvancementMode"
  };

  // extensions/amp-story/1.0/story-analytics.js
  var ANALYTICS_TAG_NAME = "__AMP_ANALYTICS_TAG_NAME__";
  var StoryAnalyticsEvent = {
    CLICK_THROUGH: "story-click-through",
    FOCUS: "story-focus",
    LAST_PAGE_VISIBLE: "story-last-page-visible",
    OPEN: "story-open",
    CLOSE: "story-close",
    PAGE_ATTACHMENT_ENTER: "story-page-attachment-enter",
    PAGE_ATTACHMENT_EXIT: "story-page-attachment-exit",
    PAGE_VISIBLE: "story-page-visible",
    INTERACTIVE: "story-interactive",
    STORY_CONTENT_LOADED: "story-content-loaded",
    STORY_MUTED: "story-audio-muted",
    STORY_UNMUTED: "story-audio-unmuted"
  };

  // build/amp-story-interactive-0.1.css.js
  var CSS2 = `.i-amphtml-story-interactive-container{font-family:Poppins,sans-serif!important;background:var(--interactive-prompt-background)!important;border-radius:2em!important}.i-amphtml-story-interactive-prompt-container{display:-ms-flexbox!important;display:flex!important;justify-items:center!important;padding:1.25em!important;color:var(--interactive-prompt-text-color)!important}.i-amphtml-story-interactive-prompt{margin:0px!important;overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:var(--i-amphtml-interactive-prompt-clamp)!important;-webkit-box-orient:vertical!important;visibility:visible!important;font-size:var(--i-amphtml-interactive-prompt-text-size)!important;line-height:var(--i-amphtml-interactive-prompt-line-height)!important;font-weight:700!important;text-align:var(--interactive-prompt-alignment)!important;width:100%!important}@keyframes i-amphtml-interactive-animation-flash-background{0%{opacity:.4}to{opacity:.2}}@keyframes i-amphtml-interactive-animation-flash-background-color{0%{background-color:var(--i-amphtml-interactive-theme-shading-flash)}to{background-color:var(--i-amphtml-interactive-theme-shading-base)}}.i-amphtml-story-interactive-container:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option{cursor:pointer!important;pointer-events:all}.i-amphtml-story-interactive-confetti-wrapper{position:absolute!important;top:50%!important;left:50%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center;justify-content:center;z-index:1!important;transform:scale(0)!important;transition:transform .5s var(--i-amphtml-interactive-ease-out-curve),opacity .5s var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-confetti-wrapper.i-amphtml-story-interactive-confetti-wrapper-animate-in{transform:scale(1)!important}.i-amphtml-story-interactive-confetti-wrapper.i-amphtml-story-interactive-confetti-wrapper-animate-out{transform:scale(1.2)!important;opacity:0!important}.i-amphtml-story-interactive-confetti{position:absolute!important}.i-amphtml-story-interactive-active{--i-amphtml-interactive-landing-animation-delay:.5s;--i-amphtml-interactive-landing-animation-offset:.9;--i-amphtml-interactive-landing-animation-delay-offset-el1:var(--i-amphtml-interactive-landing-animation-delay);--i-amphtml-interactive-landing-animation-delay-offset-el2:calc(var(--i-amphtml-interactive-landing-animation-delay) + var(--i-amphtml-interactive-animation-time)*var(--i-amphtml-interactive-landing-animation-offset)*1);--i-amphtml-interactive-landing-animation-delay-offset-el3:calc(var(--i-amphtml-interactive-landing-animation-delay) + var(--i-amphtml-interactive-animation-time)*var(--i-amphtml-interactive-landing-animation-offset)*2);--i-amphtml-interactive-landing-animation-delay-offset-el4:calc(var(--i-amphtml-interactive-landing-animation-delay) + var(--i-amphtml-interactive-animation-time)*var(--i-amphtml-interactive-landing-animation-offset)*3)}@keyframes i-amphtml-interactive-animation-landing-animation-flash-background{30%{opacity:.4}}.i-amphtml-story-interactive-disclaimer{position:absolute!important;color:#000!important;bottom:calc(100% - 1.75em)!important;right:0!important;z-index:1!important;--i-amphtml-story-interactive-disclaimer-black-transparent:#00000040!important;--i-amphtml-story-interactive-disclaimer-blue:#005af0!important;pointer-events:all!important}.i-amphtml-story-interactive-disclaimer-alert{width:1.75em!important;height:1.75em!important;position:absolute!important;right:0!important;bottom:0!important;padding:.25em!important;font-size:inherit!important;transform-origin:bottom right!important;background-color:#fff!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='12'%3E%3Cpath d='M2 0a1.357 1.357 0 0 0-.97.408 1.34 1.34 0 0 0-.38.977l.271 5.497c.009.278.127.542.328.736a1.083 1.083 0 0 0 1.502 0 1.07 1.07 0 0 0 .328-.736l.27-5.497a1.334 1.334 0 0 0-.38-.977A1.35 1.35 0 0 0 2 0zM2 9.3A1.35 1.35 0 1 0 2 12a1.35 1.35 0 0 0 0-2.7z'/%3E%3C/svg%3E")!important;background-repeat:no-repeat!important;background-position:50%!important;background-size:0.25em!important;border:.25em solid var(--interactive-accent-color)!important;border-radius:50%!important;box-shadow:0 .2em .2em 0 var(--i-amphtml-story-interactive-disclaimer-black-transparent)!important;box-sizing:border-box!important;cursor:pointer!important}.i-amphtml-story-interactive-disclaimer[active] .i-amphtml-story-interactive-disclaimer-alert{display:none!important}.i-amphtml-story-interactive-disclaimer-dialog{overflow:hidden!important;padding:1em!important;text-align:initial!important;box-sizing:border-box!important;font-size:1em!important;background:#fff;border-radius:1em;box-shadow:0px .2em .2em 0px var(--i-amphtml-story-interactive-disclaimer-black-transparent)!important}.i-amphtml-story-interactive-disclaimer:not([active]) .i-amphtml-story-interactive-disclaimer-dialog{display:none!important}.i-amphtml-story-interactive-disclaimer-url{color:#5f6368!important;padding-bottom:0.2em!important}.i-amphtml-story-interactive-disclaimer-link{color:var(--i-amphtml-story-interactive-disclaimer-blue)!important;font-weight:700!important;text-decoration:none!important}.i-amphtml-story-interactive-disclaimer-close{position:absolute!important;bottom:0!important;right:0!important;cursor:pointer!important;background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%239AA0A6'%3E%3Crect x='.788' y='1.833' width='1.479' height='13.264' rx='.739' transform='rotate(-45 .788 1.833)'/%3E%3Crect x='10.167' y='.788' width='1.479' height='13.264' rx='.739' transform='rotate(45 10.167 .788)'/%3E%3C/svg%3E")!important;width:3em!important;height:3em!important;background-size:1em!important;background-repeat:no-repeat!important;background-position:50%!important;border:none!important;font-size:inherit!important}
/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive.css*/`;

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
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    userAssert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function appendPathToUrl(url, path) {
    var pathname = url.pathname.replace(/\/?$/, "/") + path.replace(/^\//, "");
    return url.origin + pathname + url.search + url.hash;
  }

  // src/core/types/string/bytes.js
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

  // src/core/types/string/base64.js
  var base64UrlEncodeSubs = {
    "+": "-",
    "/": "_",
    "=": "."
  };
  function base64UrlEncodeFromBytes(bytes) {
    var str = bytesToString(bytes);
    return btoa(str).replace(/[+/=]/g, function(ch) {
      return base64UrlEncodeSubs[ch];
    });
  }
  function base64UrlEncodeFromString(str) {
    var bytes = utf8Encode(str);
    return base64UrlEncodeFromBytes(bytes);
  }

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

  // extensions/amp-story-interactive/0.1/interactive-disclaimer.js
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var DisclaimerBackendsList = JSON.parse('{"webstoriesinteractivity-beta.web.app":{"learnMoreUrl":"https://amp.dev/stories","entityName":"AMP Disclaimer Testing Site"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  function buildDisclaimerLayout(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['<div class="i-amphtml-story-interactive-disclaimer">\n    <button\n      class="i-amphtml-story-interactive-disclaimer-alert"\n      aria-label="Open disclaimer"\n    ></button>\n    <div\n      class="i-amphtml-story-interactive-disclaimer-dialog"\n      role="alertdialog"\n    >\n      <div class="i-amphtml-story-interactive-disclaimer-description">\n        <span class="i-amphtml-story-interactive-disclaimer-note"\n          >Your response will be sent to\n        </span>\n        <span class="i-amphtml-story-interactive-disclaimer-entity"></span>\n        <div class="i-amphtml-story-interactive-disclaimer-url"></div>\n      </div>\n      <div>\n        <a target="_blank" class="i-amphtml-story-interactive-disclaimer-link"\n          >Learn more</a\n        >\n      </div>\n      <button\n        class="i-amphtml-story-interactive-disclaimer-close"\n        aria-label="Close disclaimer"\n      ></button>\n    </div>\n  </div>'])));
  }
  function buildInteractiveDisclaimer(interactive) {
    var element = interactive.element;
    var backendUrl = element.getAttribute("endpoint").replace("https://", "");
    var disclaimer = buildDisclaimerLayout(element);
    var dialogEl = disclaimer.querySelector(".i-amphtml-story-interactive-disclaimer-dialog");
    var descriptionEl = disclaimer.querySelector(".i-amphtml-story-interactive-disclaimer-description");
    var urlEl = disclaimer.querySelector(".i-amphtml-story-interactive-disclaimer-url");
    var linkEl = disclaimer.querySelector(".i-amphtml-story-interactive-disclaimer-link");
    var entityEl = disclaimer.querySelector(".i-amphtml-story-interactive-disclaimer-entity");
    var noteEl = disclaimer.querySelector(".i-amphtml-story-interactive-disclaimer-note");
    var backendSpecs = getBackendSpecs(backendUrl, DisclaimerBackendsList);
    var disclaimerDescriptionId = "i-amphtml-story-disclaimer-" + interactive.element.id + "-description";
    interactive.mutateElement(function() {
      if (backendSpecs) {
        entityEl.textContent = backendSpecs[1].entityName;
        urlEl.textContent = backendSpecs[0];
        backendSpecs[1].learnMoreUrl ? linkEl.href = backendSpecs[1].learnMoreUrl : linkEl.remove();
      } else {
        entityEl.remove();
        urlEl.textContent = backendUrl;
        linkEl.remove();
      }
      noteEl.textContent = interactive.localizationService.getLocalizedString(LocalizedStringId.AMP_STORY_INTERACTIVE_DISCLAIMER_NOTE);
      descriptionEl.id = disclaimerDescriptionId;
      dialogEl.setAttribute("aria-describedby", disclaimerDescriptionId);
      return closeDisclaimer(interactive, disclaimer);
    });
    disclaimer.addEventListener("click", function(event) {
      if (event.target.classList.contains("i-amphtml-story-interactive-disclaimer-close")) {
        closeDisclaimer(interactive, disclaimer);
      } else if (event.target.classList.contains("i-amphtml-story-interactive-disclaimer-alert")) {
        openDisclaimer(interactive, disclaimer);
      }
    });
    return disclaimer;
  }
  function openDisclaimer(interactive, disclaimerEl) {
    interactive.mutateElement(function() {
      disclaimerEl.setAttribute("active", "");
    });
  }
  function closeDisclaimer(interactive, disclaimerEl) {
    return interactive.mutateElement(function() {
      disclaimerEl.removeAttribute("active");
    });
  }
  function tryCloseDisclaimer(interactive, disclaimerEl) {
    if (disclaimerEl && disclaimerEl.hasAttribute("active")) {
      return closeDisclaimer(interactive, disclaimerEl);
    }
    return resolvedPromise();
  }
  function getBackendSpecs(backendUrl, backendsList) {
    return Object.entries(backendsList).find(function(element) {
      return element[0] === backendUrl.substring(0, element[0].length);
    });
  }

  // third_party/webcomponentsjs/ShadowCSS.js
  var ShadowCSS = {
    strictStyling: false,
    scopeRules: function scopeRules(cssRules, scopeSelector2, opt_transformer) {
      var cssText = "";
      if (cssRules) {
        Array.prototype.forEach.call(cssRules, function(rule) {
          if (rule.selectorText && rule.style && rule.style.cssText !== void 0) {
            cssText += this.scopeSelector(rule.selectorText, scopeSelector2, this.strictStyling, opt_transformer) + " {\n	";
            cssText += this.propertiesFromRule(rule) + "\n}\n\n";
          } else if (rule.type === CSSRule.MEDIA_RULE) {
            cssText += "@media " + rule.media.mediaText + " {\n";
            cssText += this.scopeRules(rule.cssRules, scopeSelector2);
            cssText += "\n}\n\n";
          } else {
            try {
              if (rule.cssText) {
                cssText += rule.cssText + "\n\n";
              }
            } catch (x) {
              if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
                cssText += this.ieSafeCssTextFromKeyFrameRule(rule);
              }
            }
          }
        }, this);
      }
      return cssText;
    },
    ieSafeCssTextFromKeyFrameRule: function ieSafeCssTextFromKeyFrameRule(rule) {
      var cssText = "@keyframes " + rule.name + " {";
      Array.prototype.forEach.call(rule.cssRules, function(rule2) {
        cssText += " " + rule2.keyText + " {" + rule2.style.cssText + "}";
      });
      cssText += " }";
      return cssText;
    },
    scopeSelector: function scopeSelector(selector, _scopeSelector, strict, opt_transformer) {
      var r = [], parts = selector.split(",");
      parts.forEach(function(p) {
        p = p.trim();
        if (opt_transformer) {
          p = opt_transformer(p);
        }
        if (this.selectorNeedsScoping(p, _scopeSelector)) {
          p = strict && !p.match(polyfillHostNoCombinator) ? this.applyStrictSelectorScope(p, _scopeSelector) : this.applySelectorScope(p, _scopeSelector);
        }
        r.push(p);
      }, this);
      return r.join(", ");
    },
    selectorNeedsScoping: function selectorNeedsScoping(selector, scopeSelector2) {
      if (Array.isArray(scopeSelector2)) {
        return true;
      }
      var re = this.makeScopeMatcher(scopeSelector2);
      return !selector.match(re);
    },
    makeScopeMatcher: function makeScopeMatcher(scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
      return new RegExp("^(" + scopeSelector2 + ")" + selectorReSuffix, "m");
    },
    applySelectorScope: function applySelectorScope(selector, selectorScope) {
      return Array.isArray(selectorScope) ? this.applySelectorScopeList(selector, selectorScope) : this.applySimpleSelectorScope(selector, selectorScope);
    },
    applySelectorScopeList: function applySelectorScopeList(selector, scopeSelectorList) {
      var r = [];
      for (var i = 0, s; s = scopeSelectorList[i]; i++) {
        r.push(this.applySimpleSelectorScope(selector, s));
      }
      return r.join(", ");
    },
    applySimpleSelectorScope: function applySimpleSelectorScope(selector, scopeSelector2) {
      if (selector.match(polyfillHostRe)) {
        selector = selector.replace(polyfillHostNoCombinator, scopeSelector2);
        return selector.replace(polyfillHostRe, scopeSelector2 + " ");
      } else {
        return scopeSelector2 + " " + selector;
      }
    },
    applyStrictSelectorScope: function applyStrictSelectorScope(selector, scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[is=([^\]]*)\]/g, "$1");
      var splits = [" ", ">", "+", "~"], scoped = selector, attrName = "[" + scopeSelector2 + "]";
      splits.forEach(function(sep) {
        var parts = scoped.split(sep);
        scoped = parts.map(function(p) {
          var t = p.trim().replace(polyfillHostRe, "");
          if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
            p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
          }
          return p;
        }).join(sep);
      });
      return scoped;
    },
    propertiesFromRule: function propertiesFromRule(rule) {
      var cssText = rule.style.cssText;
      if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
        cssText = cssText.replace(/content:[^;]*;/g, "content: '" + rule.style.content + "';");
      }
      var style = rule.style;
      for (var i in style) {
        if (style[i] === "initial") {
          cssText += i + ": initial; ";
        }
      }
      return cssText;
    }
  };
  var polyfillHost = "-shadowcsshost";
  var polyfillHostContext = "-shadowcsscontext";
  var parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim");
  var cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim");
  var selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
  var polyfillHostNoCombinator = polyfillHost + "-no-combinator";
  var polyfillHostRe = new RegExp(polyfillHost, "gim");
  var polyfillHostContextRe = new RegExp(polyfillHostContext, "gim");

  // src/core/dom/web-components.js
  var ShadowDomVersion = {
    NONE: "none",
    V0: "v0",
    V1: "v1"
  };
  var shadowDomSupportedVersion;
  var shadowCssSupported;
  function isShadowDomSupported() {
    return getShadowDomSupportedVersion() != ShadowDomVersion.NONE;
  }
  function isShadowCssSupported() {
    if (shadowCssSupported === void 0) {
      shadowCssSupported = isShadowDomSupported() && (isNative(Element.prototype.attachShadow) || isNative(Element.prototype.createShadowRoot));
    }
    return shadowCssSupported;
  }
  function isNative(func) {
    return !!func && func.toString().indexOf("[native code]") != -1;
  }
  function getShadowDomSupportedVersion(opt_elementClass) {
    if (shadowDomSupportedVersion === void 0) {
      shadowDomSupportedVersion = getShadowDomVersion(opt_elementClass || Element);
    }
    return shadowDomSupportedVersion;
  }
  function getShadowDomVersion(element) {
    if (!!element.prototype.attachShadow) {
      return ShadowDomVersion.V1;
    } else if (!!element.prototype.createShadowRoot) {
      return ShadowDomVersion.V0;
    }
    return ShadowDomVersion.NONE;
  }

  // src/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  function installCssTransformer(cssRoot, transformer) {
    cssRoot[TRANSFORMER_PROP] = transformer;
  }

  // src/shadow-embed.js
  var CSS_SELECTOR_BEG_REGEX = /[^\.\-\_0-9a-zA-Z]/;
  var CSS_SELECTOR_END_REGEX = /[^\-\_0-9a-zA-Z]/;
  function createShadowRoot(hostElement) {
    var win = toWin(hostElement.ownerDocument.defaultView);
    var existingRoot = hostElement.shadowRoot || hostElement.__AMP_SHADOW_ROOT;
    if (existingRoot) {
      existingRoot.innerHTML = "";
      return existingRoot;
    }
    var shadowRoot;
    var shadowDomSupported = getShadowDomSupportedVersion();
    if (shadowDomSupported == ShadowDomVersion.V1) {
      shadowRoot = hostElement.attachShadow({
        mode: "open"
      });
      if (!shadowRoot.styleSheets) {
        Object.defineProperty(shadowRoot, "styleSheets", {
          get: function get() {
            var items = [];
            iterateCursor(shadowRoot.childNodes, function(child) {
              if (child.tagName === "STYLE") {
                items.push(child.sheet);
              }
            });
            return items;
          }
        });
      }
    } else if (shadowDomSupported == ShadowDomVersion.V0) {
      shadowRoot = hostElement.createShadowRoot();
    } else {
      shadowRoot = createShadowRootPolyfill(hostElement);
    }
    if (!isShadowCssSupported()) {
      var rootId = "i-amphtml-sd-" + win.Math.floor(win.Math.random() * 1e4);
      shadowRoot["id"] = rootId;
      shadowRoot.host.classList.add(rootId);
      installCssTransformer(shadowRoot, function(css) {
        return transformShadowCss(shadowRoot, css);
      });
    }
    return shadowRoot;
  }
  function createShadowRootPolyfill(hostElement) {
    var doc = hostElement.ownerDocument;
    hostElement.classList.add("i-amphtml-shadow-host-polyfill");
    var hostStyle = doc.createElement("style");
    hostStyle.textContent = ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}";
    hostElement.appendChild(hostStyle);
    var shadowRoot = doc.createElement("i-amphtml-shadow-root");
    hostElement.appendChild(shadowRoot);
    hostElement.__AMP_SHADOW_ROOT = shadowRoot;
    Object.defineProperty(hostElement, "shadowRoot", {
      enumerable: true,
      configurable: true,
      value: shadowRoot
    });
    shadowRoot.host = hostElement;
    shadowRoot.getElementById = function(id) {
      var escapedId = escapeCssSelectorIdent(id);
      return shadowRoot.querySelector("#" + escapedId);
    };
    Object.defineProperty(shadowRoot, "styleSheets", {
      get: function get() {
        if (!doc.styleSheets) {
          return [];
        }
        return toArray(doc.styleSheets).filter(function(styleSheet) {
          return shadowRoot.contains(styleSheet.ownerNode);
        });
      }
    });
    return shadowRoot;
  }
  function transformShadowCss(shadowRoot, css) {
    return scopeShadowCss(shadowRoot, css);
  }
  function scopeShadowCss(shadowRoot, css) {
    var id = devAssert(shadowRoot["id"]);
    var doc = shadowRoot.ownerDocument;
    var rules = null;
    try {
      rules = getStylesheetRules(doc.implementation.createHTMLDocument(""), css);
    } catch (e) {
    }
    if (!rules) {
      try {
        rules = getStylesheetRules(doc, css);
      } catch (e) {
      }
    }
    if (!rules) {
      return css;
    }
    var scopeRules2 = ShadowCSS.scopeRules;
    return scopeRules2.call(ShadowCSS, rules, "." + id, transformRootSelectors);
  }
  function transformRootSelectors(selector) {
    return selector.replace(/(html|body)/g, rootSelectorPrefixer);
  }
  function rootSelectorPrefixer(match, name, pos, selector) {
    var prev = selector.charAt(pos - 1);
    var next = selector.charAt(pos + match.length);
    if ((!prev || CSS_SELECTOR_BEG_REGEX.test(prev)) && (!next || CSS_SELECTOR_END_REGEX.test(next))) {
      return "amp-" + match;
    }
    return match;
  }
  function getStylesheetRules(doc, css) {
    var style = doc.createElement("style");
    style.textContent = css;
    try {
      (doc.head || doc.documentElement).appendChild(style);
      if (style.sheet) {
        return style.sheet.cssRules;
      }
      return null;
    } finally {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }
  }

  // extensions/amp-story/1.0/utils.js
  function createShadowRootWithStyle(container, element, css) {
    var style = self.document.createElement("style");
    style.textContent = css;
    var containerToUse = getMode().test ? container : createShadowRoot(container);
    containerToUse.appendChild(style);
    containerToUse.appendChild(element);
  }
  var TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME = "data-text-background-color";
  var TEXT_BACKGROUND_COLOR_SELECTOR = "[" + TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME + "]";

  // extensions/amp-story-interactive/0.1/utils.js
  var deduplicatedIds = false;
  var deduplicateInteractiveIds = function deduplicateInteractiveIds2(doc) {
    if (deduplicatedIds) {
      return;
    }
    deduplicatedIds = true;
    var interactiveEls = doc.querySelectorAll("amp-story-interactive-binary-poll, amp-story-interactive-poll, amp-story-interactive-quiz");
    var idsMap = map();
    for (var i = 0; i < interactiveEls.length; i++) {
      var currId = interactiveEls[i].id || "interactive-id";
      if (idsMap[currId] === void 0) {
        idsMap[currId] = 0;
      } else {
        user().error("AMP-STORY-INTERACTIVE", "Duplicate interactive ID " + currId);
        var newId = currId + "__" + ++idsMap[currId];
        interactiveEls[i].id = newId;
      }
    }
  };

  // extensions/amp-story-interactive/0.1/interactive-confetti.js
  var _templateObject2;
  var _templateObject22;
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildConfettiWrapperTemplate = function buildConfettiWrapperTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose2(['\n    <div\n      class="i-amphtml-story-interactive-confetti-wrapper"\n      aria-hidden="true"\n    ></div>\n  '])));
  };
  var buildconfettiTemplate = function buildconfettiTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose2([' <div class="i-amphtml-story-interactive-confetti"></div> '])));
  };
  function emojiConfetti(rootEl, win, confettiEmoji) {
    var confettiCount = 5;
    var angleSlice = Math.PI * 2 / confettiCount;
    var angleRandomness = angleSlice * 0.2;
    var fontSizeRandomRange = [30, 50];
    var rotationRandomness = 20;
    var additionalDistance = 5;
    var animationTime = 300;
    var animationOutDelay = 1e3;
    var rootElRect = rootEl.getBoundingClientRect();
    var timer = Services.timerFor(win);
    var confettiWrapper = buildConfettiWrapperTemplate(rootEl);
    rootEl.appendChild(confettiWrapper);
    timer.delay(function() {
      for (var i = 0; i < confettiCount; i++) {
        var confetti = buildconfettiTemplate(rootEl);
        confettiWrapper.appendChild(confetti);
        confetti.textContent = confettiEmoji;
        var fontSize = randomInRange(fontSizeRandomRange[0], fontSizeRandomRange[1]) + "px";
        var angle = angleSlice * i + randomInRange(-angleRandomness, angleRandomness);
        var x = Math.sin(angle) * (rootElRect.width / 2 + additionalDistance);
        var y = Math.cos(angle) * (rootElRect.height / 2 + additionalDistance);
        var rotation = randomInRange(-rotationRandomness, rotationRandomness);
        setStyles(confetti, {
          fontSize,
          transform: "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg)"
        });
      }
      confettiWrapper.classList.add("i-amphtml-story-interactive-confetti-wrapper-animate-in");
      timer.delay(function() {
        confettiWrapper.classList.add("i-amphtml-story-interactive-confetti-wrapper-animate-out");
        timer.delay(function() {
          return rootEl.removeChild(confettiWrapper);
        }, animationTime);
      }, animationOutDelay);
    }, animationTime);
  }
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
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

  // extensions/amp-story-interactive/0.1/amp-story-interactive-abstract.js
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var TAG2 = "amp-story-interactive";
  var InteractiveType = {
    QUIZ: 0,
    POLL: 1,
    RESULTS: 2
  };
  var ENDPOINT_INVALID_ERROR = "The publisher has specified an invalid datastore endpoint";
  var INTERACTIVE_ACTIVE_CLASS = "i-amphtml-story-interactive-active";
  var fontsToLoad = [{
    family: "Poppins",
    weight: "400",
    src: "url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2')"
  }, {
    family: "Poppins",
    weight: "700",
    src: "url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2')"
  }];
  var AmpStoryInteractive = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStoryInteractive2, _AMP$BaseElement);
    var _super = _createSuper(AmpStoryInteractive2);
    function AmpStoryInteractive2(element, type, bounds) {
      var _this;
      if (bounds === void 0) {
        bounds = [2, 4];
      }
      _classCallCheck4(this, AmpStoryInteractive2);
      _this = _super.call(this, element);
      _this.interactiveType_ = type;
      _this.analyticsService_ = null;
      _this.backendDataPromise_ = null;
      _this.clientIdPromise_ = null;
      _this.hasUserSelection_ = false;
      _this.optionBounds_ = bounds;
      _this.optionElements_ = null;
      _this.options_ = null;
      _this.optionsData_ = null;
      _this.pageId_ = null;
      _this.rootEl_ = null;
      _this.localizationService = null;
      _this.requestService_ = null;
      _this.storeService_ = null;
      _this.urlService_ = null;
      _this.variableService_ = null;
      return _this;
    }
    _createClass3(AmpStoryInteractive2, [{
      key: "getRootElement",
      value: function getRootElement() {
        return this.rootEl_;
      }
    }, {
      key: "getOptionElements",
      value: function getOptionElements() {
        if (!this.optionElements_) {
          this.optionElements_ = toArray(this.rootEl_.querySelectorAll(".i-amphtml-story-interactive-option"));
        }
        return this.optionElements_;
      }
    }, {
      key: "getInteractiveId_",
      value: function getInteractiveId_() {
        if (!AmpStoryInteractive2.canonicalUrl64) {
          deduplicateInteractiveIds(this.win.document);
          AmpStoryInteractive2.canonicalUrl64 = base64UrlEncodeFromString(Services.documentInfoForDoc(this.element).canonicalUrl);
        }
        return AmpStoryInteractive2.canonicalUrl64 + "+" + this.element.id;
      }
    }, {
      key: "getPageId_",
      value: function getPageId_() {
        if (this.pageId_ == null) {
          this.pageId_ = closest(dev().assertElement(this.element), function(el) {
            return el.tagName.toLowerCase() === "amp-story-page";
          }).getAttribute("id");
        }
        return this.pageId_;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback(concreteCSS) {
        var _this2 = this;
        if (concreteCSS === void 0) {
          concreteCSS = "";
        }
        this.loadFonts_();
        this.options_ = this.parseOptions_();
        this.element.classList.add("i-amphtml-story-interactive-component");
        this.adjustGridLayer_();
        devAssert(this.element.children.length == 0, "Too many children");
        this.urlService_ = Services.urlForDoc(this.element);
        return Promise.all([Services.storyVariableServiceForOrNull(this.win).then(function(service) {
          _this2.variableService_ = service;
        }), Services.storyStoreServiceForOrNull(this.win).then(function(service) {
          _this2.storeService_ = service;
          _this2.updateStoryStoreState_(null);
        }), Services.storyRequestServiceForOrNull(this.win).then(function(service) {
          _this2.requestService_ = service;
        }), Services.storyAnalyticsServiceForOrNull(this.win).then(function(service) {
          _this2.analyticsService_ = service;
        }), Services.localizationServiceForOrNull(this.element).then(function(service) {
          _this2.localizationService = service;
        })]).then(function() {
          _this2.rootEl_ = _this2.buildComponent();
          _this2.rootEl_.classList.add("i-amphtml-story-interactive-container");
          createShadowRootWithStyle(_this2.element, dev().assertElement(_this2.rootEl_), CSS2 + concreteCSS);
          return resolvedPromise();
        });
      }
    }, {
      key: "loadFonts_",
      value: function loadFonts_() {
        var _this3 = this;
        if (!AmpStoryInteractive2.loadedFonts && this.win.document.fonts && FontFace) {
          fontsToLoad.forEach(function(fontProperties) {
            var font = new FontFace(fontProperties.family, fontProperties.src, {
              weight: fontProperties.weight,
              style: "normal"
            });
            font.load().then(function() {
              _this3.win.document.fonts.add(font);
            });
          });
        }
        AmpStoryInteractive2.loadedFonts = true;
      }
    }, {
      key: "parseOptions_",
      value: function parseOptions_() {
        var options = [];
        toArray(this.element.attributes).forEach(function(attr) {
          if (attr.name.match(/^option-\d+(-\w+)+$/)) {
            var splitParts = attr.name.split("-");
            var optionNumber = parseInt(splitParts[1], 10);
            while (options.length < optionNumber) {
              options.push({
                "optionIndex": options.length
              });
            }
            options[optionNumber - 1][splitParts.slice(2).join("")] = attr.value;
          }
        });
        if (options.length >= this.optionBounds_[0] && options.length <= this.optionBounds_[1]) {
          return options;
        }
        devAssert(options.length >= this.optionBounds_[0] && options.length <= this.optionBounds_[1], "Improper number of options. Expected " + this.optionBounds_[0] + " <= options <= " + this.optionBounds_[1] + " but got " + options.length + ".");
        dev().error(TAG2, "Improper number of options. Expected " + this.optionBounds_[0] + " <= options <= " + this.optionBounds_[1] + " but got " + options.length + ".");
      }
    }, {
      key: "attachPrompt_",
      value: function attachPrompt_(root) {
        var promptContainer = root.querySelector(".i-amphtml-story-interactive-prompt-container");
        if (!this.element.hasAttribute("prompt-text")) {
          this.rootEl_.removeChild(promptContainer);
        } else {
          var prompt = document.createElement("p");
          prompt.textContent = this.element.getAttribute("prompt-text");
          prompt.classList.add("i-amphtml-story-interactive-prompt");
          promptContainer.appendChild(prompt);
        }
      }
    }, {
      key: "buildComponent",
      value: function buildComponent() {
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        if (isExperimentOn(this.win, "amp-story-interactive-disclaimer") && this.element.hasAttribute("endpoint")) {
          this.disclaimerEl_ = buildInteractiveDisclaimer(this);
          this.rootEl_.prepend(this.disclaimerEl_);
        }
        this.initializeListeners_();
        return this.backendDataPromise_ = this.element.hasAttribute("endpoint") ? this.retrieveInteractiveData_() : resolvedPromise();
      }
    }, {
      key: "getClientId_",
      value: function getClientId_() {
        if (!this.clientIdPromise_) {
          this.clientIdPromise_ = Services.cidForDoc(this.element).then(function(data) {
            return data.get({
              scope: "amp-story",
              createCookieIfNotPresent: true
            }, resolvedPromise());
          });
        }
        return this.clientIdPromise_;
      }
    }, {
      key: "onRtlStateUpdate_",
      value: function onRtlStateUpdate_(rtlState) {
        var _this4 = this;
        this.mutateElement(function() {
          rtlState ? _this4.rootEl_.setAttribute("dir", "rtl") : _this4.rootEl_.removeAttribute("dir");
        });
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout === "container";
      }
    }, {
      key: "adjustGridLayer_",
      value: function adjustGridLayer_() {
        var gridLayer = closest(dev().assertElement(this.element), function(el) {
          return el.tagName.toLowerCase() === "amp-story-grid-layer";
        });
        gridLayer.classList.add("i-amphtml-story-has-interactive");
        if (gridLayer.parentElement.querySelector("amp-story-cta-layer")) {
          gridLayer.classList.add("i-amphtml-story-has-CTA-layer");
        }
        if (gridLayer.parentElement.querySelector("amp-story-page-attachment")) {
          gridLayer.classList.add("i-amphtml-story-has-page-attachment");
        }
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this5 = this;
        this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
          _this5.onRtlStateUpdate_(rtlState);
        }, true);
        this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(currPageId) {
          _this5.mutateElement(function() {
            _this5.rootEl_.classList.toggle(INTERACTIVE_ACTIVE_CLASS, currPageId === _this5.getPageId_());
            _this5.toggleTabbableElements_(currPageId === _this5.getPageId_());
          });
          tryCloseDisclaimer(_this5, _this5.disclaimerEl_);
        }, true);
        this.rootEl_.addEventListener("click", function(e) {
          return _this5.handleTap_(e);
        });
      }
    }, {
      key: "handleTap_",
      value: function handleTap_(e) {
        if (this.hasUserSelection_) {
          return;
        }
        var optionEl = closest(dev().assertElement(e.target), function(element) {
          return element.classList.contains("i-amphtml-story-interactive-option");
        }, this.rootEl_);
        if (optionEl) {
          this.updateStoryStoreState_(optionEl.optionIndex_);
          this.handleOptionSelection_(optionEl);
          var confettiEmoji = this.options_[optionEl.optionIndex_].confetti;
          if (confettiEmoji) {
            emojiConfetti(dev().assertElement(this.rootEl_), this.win, confettiEmoji);
          }
          tryCloseDisclaimer(this, this.disclaimerEl_);
        }
      }
    }, {
      key: "triggerAnalytics_",
      value: function triggerAnalytics_(optionEl) {
        this.variableService_.onVariableUpdate(AnalyticsVariable.STORY_INTERACTIVE_ID, this.element.getAttribute("id"));
        this.variableService_.onVariableUpdate(AnalyticsVariable.STORY_INTERACTIVE_RESPONSE, optionEl.optionIndex_);
        this.variableService_.onVariableUpdate(AnalyticsVariable.STORY_INTERACTIVE_TYPE, this.interactiveType_);
        this.element[ANALYTICS_TAG_NAME] = this.element.tagName;
        this.analyticsService_.triggerEvent(StoryAnalyticsEvent.INTERACTIVE, this.element);
      }
    }, {
      key: "displayOptionsData",
      value: function displayOptionsData(unusedOptionsData) {
      }
    }, {
      key: "preprocessPercentages_",
      value: function preprocessPercentages_(optionsData) {
        var totalResponseCount = optionsData.reduce(function(acc, response) {
          return acc + response["count"];
        }, 0);
        var percentages = optionsData.map(function(e) {
          return (100 * e["count"] / totalResponseCount).toFixed(2);
        });
        var total = percentages.reduce(function(acc, x) {
          return acc + Math.round(x);
        }, 0);
        if (total > 100) {
          percentages = percentages.map(function(percentage) {
            return (percentage - 2 * (percentage - Math.floor(percentage)) / 3).toFixed(2);
          });
          total = percentages.reduce(function(acc, x) {
            return acc += Math.round(x);
          }, 0);
        }
        if (total === 100) {
          return percentages.map(function(percentage) {
            return Math.round(percentage);
          });
        }
        var remainder = 100 - total;
        var preserveOriginal = percentages.map(function(percentage, index) {
          return {
            originalIndex: index,
            value: percentage,
            remainder: (percentage - Math.floor(percentage)).toFixed(2)
          };
        });
        preserveOriginal.sort(function(left, right) {
          return right.remainder - left.remainder || right.value - left.value;
        });
        var finalPercentages = [];
        var _loop = function _loop2() {
          var highestRemainderObj = preserveOriginal[0];
          var ties = preserveOriginal.filter(function(percentageObj) {
            return percentageObj.value === highestRemainderObj.value;
          });
          preserveOriginal = preserveOriginal.filter(function(percentageObj) {
            return percentageObj.value !== highestRemainderObj.value;
          });
          var toRoundUp = ties.length <= remainder && highestRemainderObj.remainder !== "0.00";
          ties.forEach(function(percentageObj) {
            finalPercentages[percentageObj.originalIndex] = Math.floor(percentageObj.value) + (toRoundUp ? 1 : 0);
          });
          remainder -= toRoundUp ? ties.length : 0;
        };
        while (remainder > 0 && preserveOriginal.length !== 0) {
          _loop();
        }
        preserveOriginal.forEach(function(percentageObj) {
          finalPercentages[percentageObj.originalIndex] = Math.floor(percentageObj.value);
        });
        return finalPercentages;
      }
    }, {
      key: "handleOptionSelection_",
      value: function handleOptionSelection_(optionEl) {
        var _this6 = this;
        this.backendDataPromise_.then(function() {
          if (_this6.hasUserSelection_) {
            return;
          }
          _this6.triggerAnalytics_(optionEl);
          _this6.hasUserSelection_ = true;
          if (_this6.optionsData_) {
            _this6.optionsData_[optionEl.optionIndex_]["count"]++;
            _this6.optionsData_[optionEl.optionIndex_]["selected"] = true;
          }
          _this6.mutateElement(function() {
            _this6.updateToPostSelectionState_(optionEl);
          });
          if (_this6.element.hasAttribute("endpoint")) {
            _this6.executeInteractiveRequest_("POST", optionEl.optionIndex_);
          }
        }).catch(function() {
          _this6.triggerAnalytics_(optionEl);
          _this6.hasUserSelection_ = true;
          _this6.mutateElement(function() {
            _this6.updateToPostSelectionState_(optionEl);
          });
        });
      }
    }, {
      key: "retrieveInteractiveData_",
      value: function retrieveInteractiveData_() {
        var _this7 = this;
        return this.executeInteractiveRequest_("GET").then(function(response) {
          _this7.handleSuccessfulDataRetrieval_(response);
        });
      }
    }, {
      key: "executeInteractiveRequest_",
      value: function executeInteractiveRequest_(method, optionSelected) {
        var _this8 = this;
        if (optionSelected === void 0) {
          optionSelected = void 0;
        }
        var url = this.element.getAttribute("endpoint");
        if (!assertAbsoluteHttpOrHttpsUrl(url)) {
          return Promise.reject(ENDPOINT_INVALID_ERROR);
        }
        return this.getClientId_().then(function(clientId) {
          var requestOptions = {
            "method": method
          };
          var requestParams = dict({
            "type": _this8.interactiveType_,
            "client": clientId
          });
          url = appendPathToUrl(_this8.urlService_.parse(url), _this8.getInteractiveId_());
          if (requestOptions["method"] === "POST") {
            requestOptions["body"] = {
              "option_selected": optionSelected
            };
            requestOptions["headers"] = {
              "Content-Type": "application/json"
            };
            url = appendPathToUrl(_this8.urlService_.parse(url), ":vote");
          }
          url = addParamsToUrl(url, requestParams);
          return _this8.requestService_.executeRequest(url, requestOptions).catch(function(err) {
            return dev().error(TAG2, err);
          });
        });
      }
    }, {
      key: "handleSuccessfulDataRetrieval_",
      value: function handleSuccessfulDataRetrieval_(response) {
        if (!(response && response["options"])) {
          devAssert(response && "options" in response, "Invalid interactive response, expected { data: InteractiveResponseType, ...} but received " + response);
          dev().error(TAG2, "Invalid interactive response, expected { data: InteractiveResponseType, ...} but received " + response);
          return;
        }
        var numOptions = this.rootEl_.querySelectorAll(".i-amphtml-story-interactive-option").length;
        this.updateComponentOnDataRetrieval_(response["options"].slice(0, numOptions));
      }
    }, {
      key: "updateComponentOnDataRetrieval_",
      value: function updateComponentOnDataRetrieval_(data) {
        var _this9 = this;
        var options = this.rootEl_.querySelectorAll(".i-amphtml-story-interactive-option");
        this.optionsData_ = data;
        data.forEach(function(response, index) {
          if (response.selected) {
            _this9.hasUserSelection_ = true;
            _this9.updateStoryStoreState_(index);
            _this9.mutateElement(function() {
              _this9.updateToPostSelectionState_(options[index]);
            });
          }
        });
      }
    }, {
      key: "updateToPostSelectionState_",
      value: function updateToPostSelectionState_(selectedOption) {
        this.rootEl_.classList.add("i-amphtml-story-interactive-post-selection");
        if (selectedOption != null) {
          selectedOption.classList.add("i-amphtml-story-interactive-option-selected");
        }
        if (this.optionsData_) {
          this.rootEl_.classList.add("i-amphtml-story-interactive-has-data");
          this.displayOptionsData(this.optionsData_);
        }
        this.getOptionElements().forEach(function(el) {
          el.setAttribute("tabindex", -1);
        });
      }
    }, {
      key: "updateStoryStoreState_",
      value: function updateStoryStoreState_(option) {
        if (option === void 0) {
          option = null;
        }
        var update = {
          option: option != null ? this.options_[option] : null,
          interactiveId: this.getInteractiveId_(),
          type: this.interactiveType_
        };
        this.storeService_.dispatch(Action.ADD_INTERACTIVE_REACT, update);
      }
    }, {
      key: "toggleTabbableElements_",
      value: function toggleTabbableElements_(toggle2) {
        var _this10 = this;
        this.rootEl_.querySelectorAll("button, a").forEach(function(el) {
          if (el.classList.contains("i-amphtml-story-interactive-option") && _this10.hasUserSelection_) {
            el.setAttribute("tabindex", -1);
          } else {
            el.setAttribute("tabindex", toggle2 ? 0 : -1);
          }
        });
      }
    }]);
    return AmpStoryInteractive2;
  }(AMP.BaseElement);

  // build/amp-story-interactive-binary-poll-0.1.css.js
  var CSS3 = '.i-amphtml-story-interactive-binary-poll-container{color:var(--i-amphtml-interactive-option-accent-color)!important;--post-select-scale:0.5!important;--post-select-scale-variable:1;border-radius:2em!important}.i-amphtml-story-interactive-binary-poll-option-container{background:var(--i-amphtml-interactive-option-background-color)!important;height:5.625em!important;border-radius:1em!important;overflow:hidden!important;box-shadow:var(--i-amphtml-interactive-component-shadow)!important;transform:translateZ(0)!important}.i-amphtml-story-interactive-binary-poll-option-container,.i-amphtml-story-interactive-option{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-interactive-option{-ms-flex-align:center!important;align-items:center!important;text-align:center!important;-ms-flex-direction:column!important;flex-direction:column!important;width:50%;position:relative!important;background-color:transparent!important;font:inherit!important;border:none!important;outline:none!important;color:inherit!important}.i-amphtml-story-interactive-prompt{text-align:center!important}.i-amphtml-story-interactive-option-text-container{width:100%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-direction:column!important;flex-direction:column!important;transform:translateY(calc(1em + 1px))!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-text-container{transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve),opacity var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;transform:translateY(0)!important}.i-amphtml-story-interactive-binary-poll-container:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option-divider{height:100%!important;width:1px!important;opacity:0.3!important;background-color:var(--i-amphtml-interactive-theme-border)!important}.i-amphtml-story-interactive-option .i-amphtml-story-interactive-option-percent-bar{height:100%!important;width:100%!important;position:absolute!important;opacity:0!important;transform-origin:left!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-option:last-child .i-amphtml-story-interactive-option-percent-bar,[dir=rtl] .i-amphtml-story-interactive-option .i-amphtml-story-interactive-option-percent-bar{transform-origin:right!important}[dir=rtl] .i-amphtml-story-interactive-option:last-child .i-amphtml-story-interactive-option-percent-bar{transform-origin:left!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option.i-amphtml-story-interactive-option-selected .i-amphtml-story-interactive-option-percent-bar{background-color:var(--i-amphtml-interactive-option-accent-color)!important;opacity:0.2!important;animation:i-amphtml-interactive-animation-flash-background forwards var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)}.i-amphtml-story-interactive-option-title{font-weight:800!important;font-size:1.75em!important;margin:0!important;line-height:1.3em!important;width:4.42em!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;height:2.6em!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-title{transform:scale(var(--post-select-scale))!important}.i-amphtml-story-interactive-option-title-text{overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;max-height:2.6em!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-title-text{transform:scale(var(--post-select-scale-variable))!important}.i-amphtml-story-interactive-option-percentage-text{font-weight:700!important;font-size:1.375em!important;transform:scale(0)!important;display:inline-block!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-percentage-text{transform:scale(1) translateY(-0.75em)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:before{background-color:var(--i-amphtml-interactive-theme-shading-flash)!important;content:""!important;position:absolute!important;width:100%!important;height:100%!important;left:0!important;opacity:0!important;animation:i-amphtml-interactive-animation-landing-animation-flash-background var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2):before{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:focus:before{opacity:1!important;background-color:var(--i-amphtml-interactive-theme-shading)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option .i-amphtml-story-interactive-option-title-text{animation:i-amphtml-story-interactive-option-title-text-landing-animation var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2) .i-amphtml-story-interactive-option-title-text{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}@keyframes i-amphtml-story-interactive-option-title-text-landing-animation{33%{transform:scale(.95)}}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-binary-poll.css*/';

  // extensions/amp-story-interactive/0.1/amp-story-interactive-binary-poll.js
  var _templateObject3;
  var _templateObject23;
  var _templateObject32;
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
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get5(target2, property2, receiver2) {
        var base = _superPropBase(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf2(object);
      if (object === null)
        break;
    }
    return object;
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
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  function _taggedTemplateLiteralLoose3(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var FontSize = {
    EMOJI: 28,
    SINGLE_LINE: 16,
    DOUBLE_LINE: 14
  };
  var MIN_HORIZONTAL_TRANSFORM = -20;
  var buildBinaryPollTemplate = function buildBinaryPollTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose3(['\n    <div class="i-amphtml-story-interactive-binary-poll-container">\n      <div class="i-amphtml-story-interactive-prompt-container"></div>\n      <div\n        class="i-amphtml-story-interactive-binary-poll-option-container"\n      ></div>\n    </div>\n  '])));
  };
  var buildOptionTemplate = function buildOptionTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose3(['\n    <button class="i-amphtml-story-interactive-option" aria-live="polite">\n      <span class="i-amphtml-story-interactive-option-percent-bar"></span>\n      <span class="i-amphtml-story-interactive-option-text-container">\n        <span class="i-amphtml-story-interactive-option-title"\n          ><span class="i-amphtml-story-interactive-option-title-text"></span\n        ></span>\n        <span\n          class="i-amphtml-story-interactive-option-percentage-text"\n          aria-hidden="true"\n          >0%</span\n        >\n      </span>\n    </button>\n  '])));
  };
  var buildBinaryOptionDividerTemplate = function buildBinaryOptionDividerTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject32 || (_templateObject32 = _taggedTemplateLiteralLoose3(['\n    <span class="i-amphtml-story-interactive-option-divider"></span>\n  '])));
  };
  var AmpStoryInteractiveBinaryPoll = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits2(AmpStoryInteractiveBinaryPoll2, _AmpStoryInteractive);
    var _super = _createSuper2(AmpStoryInteractiveBinaryPoll2);
    function AmpStoryInteractiveBinaryPoll2(element) {
      _classCallCheck5(this, AmpStoryInteractiveBinaryPoll2);
      return _super.call(this, element, InteractiveType.POLL, [2, 2]);
    }
    _createClass4(AmpStoryInteractiveBinaryPoll2, [{
      key: "buildCallback",
      value: function buildCallback() {
        return _get(_getPrototypeOf2(AmpStoryInteractiveBinaryPoll2.prototype), "buildCallback", this).call(this, CSS3);
      }
    }, {
      key: "buildComponent",
      value: function buildComponent() {
        this.rootEl_ = buildBinaryPollTemplate(this.element);
        this.attachContent_(this.rootEl_);
        return this.rootEl_;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this = this;
        return this.adaptFontSize_(dev().assertElement(this.rootEl_)).then(function() {
          return _get(_getPrototypeOf2(AmpStoryInteractiveBinaryPoll2.prototype), "layoutCallback", _this).call(_this);
        });
      }
    }, {
      key: "attachContent_",
      value: function attachContent_(root) {
        this.attachPrompt_(root);
        var options = root.querySelector(".i-amphtml-story-interactive-binary-poll-option-container");
        options.appendChild(this.generateOption_(this.options_[0]));
        options.appendChild(buildBinaryOptionDividerTemplate(root));
        options.appendChild(this.generateOption_(this.options_[1]));
      }
    }, {
      key: "adaptFontSize_",
      value: function adaptFontSize_(root) {
        var _this2 = this;
        var largestFontSize = FontSize.EMOJI;
        var allTitles = toArray(root.querySelectorAll(".i-amphtml-story-interactive-option-title-text"));
        return this.measureMutateElement(function() {
          allTitles.forEach(function(e) {
            var lines = Math.round(e.clientHeight / parseFloat(computedStyle(_this2.win, e)["line-height"].replace("px", "")));
            if (e.textContent.length <= 3 && largestFontSize >= FontSize.EMOJI) {
              largestFontSize = FontSize.EMOJI;
            } else if (lines == 1 && largestFontSize >= FontSize.SINGLE_LINE) {
              largestFontSize = FontSize.SINGLE_LINE;
            } else if (lines == 2) {
              largestFontSize = FontSize.DOUBLE_LINE;
            }
          });
        }, function() {
          setStyle(root, "--post-select-scale-variable", "" + (largestFontSize / FontSize.DOUBLE_LINE).toFixed(2));
        }, root);
      }
    }, {
      key: "generateOption_",
      value: function generateOption_(option) {
        var convertedOption = buildOptionTemplate(this.element);
        var optionText = convertedOption.querySelector(".i-amphtml-story-interactive-option-title-text");
        optionText.textContent = option["text"];
        convertedOption.optionIndex_ = option["optionIndex"];
        return convertedOption;
      }
    }, {
      key: "getTransformVal_",
      value: function getTransformVal_(percentage) {
        var mappedVal = Math.max(percentage - 50, MIN_HORIZONTAL_TRANSFORM);
        if (document.dir === "rtl") {
          mappedVal *= -1;
        }
        return mappedVal;
      }
    }, {
      key: "displayOptionsData",
      value: function displayOptionsData(responseData) {
        var _this3 = this;
        if (!responseData) {
          return;
        }
        var percentages = this.preprocessPercentages_(responseData);
        this.getOptionElements().forEach(function(el, index) {
          var percentage = percentages[index];
          var percentageEl = el.querySelector(".i-amphtml-story-interactive-option-percentage-text");
          percentageEl.textContent = percentage + "%";
          percentageEl.removeAttribute("aria-hidden");
          setStyle(el.querySelector(".i-amphtml-story-interactive-option-percent-bar"), "transform", "scaleX(" + percentage * 0.01 * 2 + ")");
          var textContainer = el.querySelector(".i-amphtml-story-interactive-option-text-container");
          textContainer.setAttribute("style", "transform: translateX(" + _this3.getTransformVal_(percentage) * (index === 0 ? 1 : -1) + "%) !important");
          if (responseData[index].selected) {
            textContainer.setAttribute("aria-label", "selected " + textContainer.textContent);
          }
          if (percentage === 0) {
            setStyle(textContainer, "opacity", "0");
          }
        });
      }
    }]);
    return AmpStoryInteractiveBinaryPoll2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-poll-0.1.css.js
  var CSS4 = '.i-amphtml-story-interactive-option-container{background-color:var(--i-amphtml-interactive-options-chip-background-color)!important;border-radius:1em!important;color:var(--i-amphtml-interactive-strong-text-color)!important;font-weight:700!important;padding:.5em!important}.i-amphtml-story-interactive-option{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:justify!important;justify-content:space-between!important;height:3.5em!important;overflow:hidden!important;padding:0px .75em!important;position:relative!important;box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-webkit-box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-moz-box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;border-radius:.5em!important;background-color:var(--i-amphtml-interactive-option-background-color);border:none!important;font:inherit!important;color:inherit!important;width:100%!important;outline:none!important;text-align:start!important}.i-amphtml-story-interactive-option:not(:first-child){margin-top:.5em!important}.i-amphtml-story-interactive-option.i-amphtml-story-interactive-option-selected{background-color:var(--i-amphtml-interactive-theme-shading-base);box-shadow:var(--i-amphtml-interactive-chip-shadow-inset),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-webkit-box-shadow:var(--i-amphtml-interactive-chip-shadow-inset),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-moz-box-shadow:var(--i-amphtml-interactive-chip-shadow-inset),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;animation:i-amphtml-interactive-animation-flash-background-color forwards var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-option:after{content:""!important;background-color:var(--i-amphtml-interactive-theme-shading)!important;position:absolute!important;height:100%!important;width:100%!important;left:0!important;top:0!important;transform:translateX(-100%)!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:focus:before{opacity:1!important;background-color:var(--i-amphtml-interactive-theme-shading)!important}.i-amphtml-story-interactive-poll-container[dir=rtl] .i-amphtml-story-interactive-option:after{transform:translateX(100%)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option:after{transform:translateX(calc(var(--option-percentage) - 100%))!important}.i-amphtml-story-interactive-poll-container.i-amphtml-story-interactive-post-selection[dir=rtl] .i-amphtml-story-interactive-option:after{transform:translateX(calc(100% - var(--option-percentage)))!important}.i-amphtml-story-interactive-poll-container:not(.i-amphtml-story-interactive-has-data) .i-amphtml-story-interactive-option:after{visibility:hidden!important}.i-amphtml-story-interactive-option-text{font-size:1.375em!important;margin:0!important;z-index:1!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;transform-origin:left!important;line-height:1.3em!important;word-wrap:break-word!important;overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;max-height:2.6em!important}.i-amphtml-story-interactive-poll-two-lines .i-amphtml-story-interactive-option-text{font-size:1.125em!important}.i-amphtml-story-interactive-poll-container[dir=rtl] .i-amphtml-story-interactive-option-text{transform-origin:right!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-text{transform:scale(0.72)!important}.i-amphtml-story-interactive-option-percentage{font-weight:700!important;font-size:1.75em!important;margin:0!important;opacity:0!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important;transform:translateX(2em)!important;-ms-flex-negative:0!important;flex-shrink:0!important;direction:ltr!important}.i-amphtml-story-interactive-poll-container[dir=rtl] .i-amphtml-story-interactive-option-percentage{transform:translateX(-2em)!important}.i-amphtml-story-interactive-has-data.i-amphtml-story-interactive-post-selection:not([dir=rtl]) .i-amphtml-story-interactive-option-percentage,.i-amphtml-story-interactive-has-data.i-amphtml-story-interactive-post-selection[dir=rtl] .i-amphtml-story-interactive-option-percentage{opacity:1!important;transform:translateX(0px)!important}.i-amphtml-story-interactive-option-percentage-sign{font-size:.6em!important;margin-left:-.25em!important;display:inline-block!important}.i-amphtml-story-interactive-poll-container:not(.i-amphtml-story-interactive-has-data) .i-amphtml-story-interactive-option-percentage{visibility:hidden!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:before{background-color:var(--i-amphtml-interactive-theme-shading-flash)!important;content:""!important;position:absolute!important;width:100%!important;height:100%!important;left:0!important;opacity:0!important;animation:i-amphtml-interactive-animation-landing-animation-flash-background var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2):before{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(3):before{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el3)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(4):before{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el4)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option .i-amphtml-story-interactive-option-text{transform-origin:center!important;animation:i-amphtml-story-interactive-option-text-landing-text var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2) .i-amphtml-story-interactive-option-text{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(3) .i-amphtml-story-interactive-option-text{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el3)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(4) .i-amphtml-story-interactive-option-text{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el4)!important}@keyframes i-amphtml-story-interactive-option-text-landing-text{33%{transform:translateY(.2em)}}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-poll.css*/';

  // extensions/amp-story-interactive/0.1/amp-story-interactive-poll.js
  var _templateObject4;
  var _templateObject24;
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
  function _get2(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get2 = Reflect.get;
    } else {
      _get2 = function _get5(target2, property2, receiver2) {
        var base = _superPropBase2(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get2(target, property, receiver || target);
  }
  function _superPropBase2(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf3(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf3(o, p);
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  function _taggedTemplateLiteralLoose4(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildPollTemplate = function buildPollTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose4(['\n    <div class="i-amphtml-story-interactive-poll-container">\n      <div class="i-amphtml-story-interactive-prompt-container"></div>\n      <div class="i-amphtml-story-interactive-option-container"></div>\n    </div>\n  '])));
  };
  var buildOptionTemplate3 = function buildOptionTemplate4(option) {
    var html2 = htmlFor(option);
    return html2(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose4(['\n    <button class="i-amphtml-story-interactive-option" aria-live="polite">\n      <span class="i-amphtml-story-interactive-option-text"></span>\n      <span class="i-amphtml-story-interactive-option-percentage">\n        <span class="i-amphtml-story-interactive-option-percentage-text"></span>\n        <span class="i-amphtml-story-interactive-option-percentage-sign"\n          >%</span\n        >\n      </span>\n    </button>\n  '])));
  };
  var AmpStoryInteractivePoll = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits3(AmpStoryInteractivePoll2, _AmpStoryInteractive);
    var _super = _createSuper3(AmpStoryInteractivePoll2);
    function AmpStoryInteractivePoll2(element) {
      _classCallCheck6(this, AmpStoryInteractivePoll2);
      return _super.call(this, element, InteractiveType.POLL, [2, 4]);
    }
    _createClass5(AmpStoryInteractivePoll2, [{
      key: "buildCallback",
      value: function buildCallback() {
        return _get2(_getPrototypeOf3(AmpStoryInteractivePoll2.prototype), "buildCallback", this).call(this, CSS4);
      }
    }, {
      key: "buildComponent",
      value: function buildComponent() {
        this.rootEl_ = buildPollTemplate(this.element);
        this.attachContent_(this.rootEl_);
        return this.rootEl_;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this = this;
        return this.adaptFontSize_(dev().assertElement(this.rootEl_)).then(function() {
          return _get2(_getPrototypeOf3(AmpStoryInteractivePoll2.prototype), "layoutCallback", _this).call(_this);
        });
      }
    }, {
      key: "attachContent_",
      value: function attachContent_(root) {
        var _this2 = this;
        this.attachPrompt_(root);
        this.options_.forEach(function(option, index) {
          return _this2.configureOption_(option, index);
        });
      }
    }, {
      key: "configureOption_",
      value: function configureOption_(option, index) {
        var convertedOption = buildOptionTemplate3(this.element);
        convertedOption.optionIndex_ = index;
        convertedOption.querySelector(".i-amphtml-story-interactive-option-text").textContent = option.text;
        this.rootEl_.querySelector(".i-amphtml-story-interactive-option-container").appendChild(convertedOption);
      }
    }, {
      key: "displayOptionsData",
      value: function displayOptionsData(optionsData) {
        if (!optionsData) {
          return;
        }
        var percentages = this.preprocessPercentages_(optionsData);
        this.getOptionElements().forEach(function(el, index) {
          if (optionsData[index].selected) {
            var textEl = el.querySelector(".i-amphtml-story-interactive-option-text");
            textEl.setAttribute("aria-label", "selected " + textEl.textContent);
          }
          el.querySelector(".i-amphtml-story-interactive-option-percentage-text").textContent = percentages[index];
          setStyle(el, "--option-percentage", percentages[index] + "%");
        });
      }
    }, {
      key: "adaptFontSize_",
      value: function adaptFontSize_(root) {
        var _this3 = this;
        var hasTwoLines = false;
        var allOptionTexts = toArray(root.querySelectorAll(".i-amphtml-story-interactive-option-text"));
        return this.measureMutateElement(function() {
          hasTwoLines = allOptionTexts.some(function(e) {
            var lines = Math.round(e.clientHeight / parseFloat(computedStyle(_this3.win, e)["line-height"].replace("px", "")));
            return lines >= 2;
          });
        }, function() {
          _this3.rootEl_.classList.toggle("i-amphtml-story-interactive-poll-two-lines", hasTwoLines);
        }, root);
      }
    }]);
    return AmpStoryInteractivePoll2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-quiz-0.1.css.js
  var CSS5 = `.i-amphtml-story-interactive-quiz-container{--correct-color:#5bba74!important;--correct-color-shaded:#00600f!important;--incorrect-color:#f34e4e!important;--incorrect-color-shaded:#b71c1c!important}.i-amphtml-story-interactive-quiz-option-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column;flex-direction:column;background-color:var(
    --i-amphtml-interactive-options-chip-background-color
  )!important;border-radius:2em!important;padding:0.5em 0.5em 0!important;box-shadow:var(--i-amphtml-interactive-component-shadow)!important}.i-amphtml-story-interactive-quiz-option{font-family:inherit!important;position:relative!important;display:-ms-flexbox!important;display:flex!important;justify-items:start!important;-ms-flex-align:center!important;align-items:center!important;border-radius:1.649em!important;padding:0.5em 1em 0.5em 0.5em!important;background-color:var(
    --i-amphtml-interactive-option-background-color
  )!important;margin-bottom:0.5em!important;color:var(--i-amphtml-interactive-option-text-color)!important;box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-webkit-box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;-moz-box-shadow:var(--i-amphtml-interactive-chip-shadow),inset 0px 0px 0px 1px var(--i-amphtml-interactive-theme-border)!important;font-size:1em!important;line-height:1.25em!important;overflow:hidden!important;z-index:0!important;border:none!important;outline:none!important;text-align:start!important}[dir=rtl] .i-amphtml-story-interactive-quiz-option{padding:0.5em 0.5em 0.5em 1em!important}.i-amphtml-story-interactive-quiz-option-text{max-height:2.5em!important;overflow:hidden!important;text-overflow:ellipsis!important;display:-webkit-box!important;-webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;visibility:visible!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected{color:#fff!important;border:1px solid transparent!important}.i-amphtml-story-interactive-quiz-answer-choice{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;height:1.5em!important;width:1.5em!important;min-width:1.5em!important;border-radius:50%!important;padding:.31em!important;margin-right:1em!important;color:var(--interactive-accent-color)!important;border:0.125em solid!important;border-color:var(--i-amphtml-interactive-answer-choice-border)!important;font-size:1em!important;line-height:1em!important;font-weight:700!important;background-repeat:no-repeat!important;background-position:50%!important;background-size:1.5em!important}[dir=rtl] .i-amphtml-story-interactive-quiz-answer-choice{margin-left:16px!important;margin-right:0px!important}.i-amphtml-story-interactive-quiz-percentage-text{display:-ms-flexbox!important;display:flex!important;padding-left:1em!important;margin-left:auto!important;visibility:hidden!important;-ms-flex-negative:0!important;flex-shrink:0!important}.i-amphtml-story-interactive-quiz-option:not(.i-amphtml-story-interactive-option-selected) .i-amphtml-story-interactive-quiz-percentage-text{opacity:0.5!important}[dir=rtl] .i-amphtml-story-interactive-quiz-percentage-text{padding-left:0px!important;padding-right:1em!important;margin-right:auto!important;margin-left:0px!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-quiz-percentage-text{visibility:visible!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected>.i-amphtml-story-interactive-quiz-percentage-text{color:#fff!important}.i-amphtml-story-interactive-post-selection :not([correct])>.i-amphtml-story-interactive-quiz-answer-choice{color:var(--incorrect-color)!important;border-color:var(--incorrect-color)!important}.i-amphtml-story-interactive-post-selection [correct]>.i-amphtml-story-interactive-quiz-answer-choice{color:var(--correct-color)!important;border-color:var(--correct-color)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected>.i-amphtml-story-interactive-quiz-answer-choice{border-color:transparent!important;animation:answer-choice-bounce 600ms linear forwards;background-color:var(
    --i-amphtml-interactive-answer-choice-background
  )!important}.i-amphtml-story-interactive-post-selection [correct]>.i-amphtml-story-interactive-quiz-answer-choice{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%235BBA74'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E")!important;color:transparent!important}.i-amphtml-story-interactive-post-selection :not([correct])>.i-amphtml-story-interactive-quiz-answer-choice{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23F34E4E'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important;color:transparent!important}.i-amphtml-story-interactive-quiz-option>*{position:relative!important}.i-amphtml-story-interactive-quiz-option:before{content:""!important;position:absolute!important;left:0px!important;width:100%!important;height:100%!important;border-radius:var(--i-amphtml-interactive-chip-radius)!important;line-height:1.25em!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-quiz-option:focus:before{background:var(--i-amphtml-interactive-theme-shading)!important}.i-amphtml-story-interactive-post-selection:not(.i-amphtml-story-interactive-has-data) .i-amphtml-story-interactive-quiz-option-selected[correct].i-amphtml-story-interactive-quiz-option:before{animation:option-select-correct 150ms cubic-bezier(0,0,0.2,1) forwards!important}.i-amphtml-story-interactive-post-selection:not(.i-amphtml-story-interactive-has-data) .i-amphtml-story-interactive-quiz-option-selected:not([correct]).i-amphtml-story-interactive-quiz-option:before{animation:option-select-incorrect 150ms cubic-bezier(0,0,0.2,1) forwards!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-quiz-option:before{transform:translateX(var(--option-percentage,0%))!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data[dir=rtl] .i-amphtml-story-interactive-quiz-option:before{transform:translateX(calc(var(--option-percentage, 0%)*-1))!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-quiz-option:before{left:-100%!important;width:100%!important;height:100%!important;border-radius:0px!important;background:var(--i-amphtml-interactive-theme-shading)!important;color:var(--i-amphtml-interactive-theme-shading)!important;transition:transform var(--i-amphtml-interactive-animation-time) var(--i-amphtml-interactive-ease-out-curve)!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data[dir=rtl] .i-amphtml-story-interactive-quiz-option:before{left:101%!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected[correct].i-amphtml-story-interactive-quiz-option{background:var(--correct-color)!important;box-shadow:var(--i-amphtml-interactive-chip-shadow-inset)!important}.i-amphtml-story-interactive-post-selection .i-amphtml-story-interactive-option-selected:not([correct]).i-amphtml-story-interactive-quiz-option{background:var(--incorrect-color)!important;box-shadow:var(--i-amphtml-interactive-chip-shadow-inset)!important}.i-amphtml-story-interactive-option-selected.i-amphtml-story-interactive-quiz-option{border:none!important;box-shadow:var(--i-amphtml-interactive-chip-shadow-inset)!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-option-selected[correct].i-amphtml-story-interactive-quiz-option:before{background:var(--correct-color-shaded)!important;color:var(--correct-color-shaded)!important}.i-amphtml-story-interactive-post-selection.i-amphtml-story-interactive-has-data .i-amphtml-story-interactive-option-selected:not([correct]).i-amphtml-story-interactive-quiz-option:before{background:var(--incorrect-color-shaded)!important;color:var(--incorrect-color-shaded)!important}@keyframes answer-choice-bounce{0%{border:2px solid var(--i-amphtml-interactive-answer-choice-background);transform:scale(0);visibility:hidden}21%{visibility:visible;transform:scale(.01);animation-timing-function:cubic-bezier(.3,.5,.7,1)}43%{transform:scale(1.203);animation-timing-function:ease-in-out}62%{transform:scale(0.956)}83%{transform:scale(1.008)}96%{transform:scale(1)}99%{transform:scale(.998)}to{transform:scale(1)}}@keyframes option-select-incorrect{0%{border-color:var(--incorrect-color);background:var(--incorrect-color);opacity:0.2;transform:scale(0.1);color:var(--incorrect-color)}50%{opacity:1;color:var(--incorrect-color)}to{border-color:var(--incorrect-color);background:var(--incorrect-color);transform:scale(1);color:#fff}}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option .i-amphtml-story-interactive-quiz-answer-choice{animation:i-amphtml-story-interactive-quiz-answer-choice-landing-animation var(--i-amphtml-interactive-animation-time)!important;animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el1)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(2) .i-amphtml-story-interactive-quiz-answer-choice{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el2)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(3) .i-amphtml-story-interactive-quiz-answer-choice{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el3)!important}.i-amphtml-story-interactive-active:not(.i-amphtml-story-interactive-post-selection) .i-amphtml-story-interactive-option:nth-of-type(4) .i-amphtml-story-interactive-quiz-answer-choice{animation-delay:var(--i-amphtml-interactive-landing-animation-delay-offset-el4)!important}@keyframes i-amphtml-story-interactive-quiz-answer-choice-landing-animation{33%{transform:scale(.8)}}
/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-quiz.css*/`;

  // node_modules/obj-str/dist/obj-str.mjs
  function obj_str_default(obj) {
    var k, cls = "";
    for (k in obj) {
      if (obj[k]) {
        cls && (cls += " ");
        cls += k;
      }
    }
    return cls;
  }

  // extensions/amp-story-interactive/0.1/amp-story-interactive-quiz.js
  var _templateObject5;
  var _templateObject25;
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
  function _get3(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get3 = Reflect.get;
    } else {
      _get3 = function _get5(target2, property2, receiver2) {
        var base = _superPropBase3(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get3(target, property, receiver || target);
  }
  function _superPropBase3(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf4(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf4(o, p);
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
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  function _taggedTemplateLiteralLoose5(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildQuizTemplate = function buildQuizTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose5(['\n    <div class="i-amphtml-story-interactive-quiz-container">\n      <div class="i-amphtml-story-interactive-prompt-container"></div>\n      <div class="i-amphtml-story-interactive-quiz-option-container"></div>\n    </div>\n  '])));
  };
  var buildOptionTemplate5 = function buildOptionTemplate6(option) {
    var html2 = htmlFor(option);
    return html2(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose5(['\n    <button\n      class="i-amphtml-story-interactive-quiz-option i-amphtml-story-interactive-option"\n      aria-live="polite"\n    >\n      <span\n        class="i-amphtml-story-interactive-quiz-answer-choice notranslate"\n      ></span>\n    </button>\n  '])));
  };
  var AmpStoryInteractiveQuiz = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits4(AmpStoryInteractiveQuiz2, _AmpStoryInteractive);
    var _super = _createSuper4(AmpStoryInteractiveQuiz2);
    function AmpStoryInteractiveQuiz2(element) {
      var _this;
      _classCallCheck7(this, AmpStoryInteractiveQuiz2);
      _this = _super.call(this, element, InteractiveType.QUIZ);
      _this.localizedAnswerChoices_ = [];
      return _this;
    }
    _createClass6(AmpStoryInteractiveQuiz2, [{
      key: "buildCallback",
      value: function buildCallback() {
        return _get3(_getPrototypeOf4(AmpStoryInteractiveQuiz2.prototype), "buildCallback", this).call(this, CSS5);
      }
    }, {
      key: "buildComponent",
      value: function buildComponent() {
        this.rootEl_ = buildQuizTemplate(this.element);
        this.attachContent_(this.rootEl_);
        return this.rootEl_;
      }
    }, {
      key: "attachContent_",
      value: function attachContent_(root) {
        var _this2 = this;
        this.attachPrompt_(root);
        this.localizedAnswerChoices_ = [LocalizedStringId.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_A, LocalizedStringId.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_B, LocalizedStringId.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_C, LocalizedStringId.AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_D].map(function(choice) {
          return _this2.localizationService.getLocalizedString(choice);
        });
        var optionContainer = this.rootEl_.querySelector(".i-amphtml-story-interactive-quiz-option-container");
        this.options_.forEach(function(option, index) {
          return optionContainer.appendChild(_this2.configureOption_(option, index));
        });
      }
    }, {
      key: "configureOption_",
      value: function configureOption_(option, index) {
        var convertedOption = buildOptionTemplate5(this.element);
        var answerChoiceEl = convertedOption.querySelector(".i-amphtml-story-interactive-quiz-answer-choice");
        answerChoiceEl.textContent = this.localizedAnswerChoices_[index];
        convertedOption.optionIndex_ = option["optionIndex"];
        var optionText = document.createElement("span");
        optionText.classList.add("i-amphtml-story-interactive-quiz-option-text");
        optionText.textContent = option["text"];
        convertedOption.appendChild(optionText);
        var percentageText = document.createElement("span");
        percentageText.classList.add("i-amphtml-story-interactive-quiz-percentage-text");
        convertedOption.appendChild(percentageText);
        if ("correct" in option) {
          convertedOption.setAttribute("correct", "correct");
        }
        return convertedOption;
      }
    }, {
      key: "displayOptionsData",
      value: function displayOptionsData(optionsData) {
        if (!optionsData) {
          return;
        }
        var percentages = this.preprocessPercentages_(optionsData);
        this.getOptionElements().forEach(function(el, index) {
          var ariaDescription = obj_str_default({
            selected: optionsData[index].selected,
            correct: el.hasAttribute("correct"),
            incorrect: !el.hasAttribute("correct")
          });
          el.querySelector(".i-amphtml-story-interactive-quiz-answer-choice").setAttribute("aria-hidden", true);
          var optionText = el.querySelector(".i-amphtml-story-interactive-quiz-option-text");
          optionText.setAttribute("aria-label", ariaDescription + " " + optionText.textContent);
          el.querySelector(".i-amphtml-story-interactive-quiz-percentage-text").textContent = percentages[index] + "%";
          setStyle(el, "--option-percentage", percentages[index] + "%");
        });
      }
    }]);
    return AmpStoryInteractiveQuiz2;
  }(AmpStoryInteractive);

  // build/amp-story-interactive-results-0.1.css.js
  var CSS6 = ".i-amphtml-story-interactive-results-container{font-family:Poppins,sans-serif!important;background:var(--i-amphtml-interactive-options-chip-background-color)!important;border-radius:var(--i-amphtml-interactive-chip-radius)!important;color:var(--i-amphtml-interactive-strong-text-color)!important;text-align:center!important;box-shadow:var(--i-amphtml-interactive-component-shadow)!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important;padding-bottom:1.25em!important}.i-amphtml-story-interactive-results-container.i-amphtml-story-interactive-has-image:not(.i-amphtml-story-interactive-has-score){padding-top:2.5em!important}.i-amphtml-story-interactive-has-score .i-amphtml-story-interactive-results-top{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:justify!important;justify-content:space-between!important;padding:1em 1.5em!important;box-sizing:border-box!important;color:var(--interactive-prompt-text-color)!important}.i-amphtml-story-interactive-results-top{width:100%!important;border-top-left-radius:var(--i-amphtml-interactive-chip-radius)!important;border-top-right-radius:var(--i-amphtml-interactive-chip-radius)!important;display:none!important}.i-amphtml-story-interactive-has-score:not(.i-amphtml-story-interactive-has-image) .i-amphtml-story-interactive-results-top{background:var(--interactive-prompt-background)!important}.i-amphtml-story-interactive-results-top-score{font-weight:700!important;font-size:.75em!important;line-height:1em!important;letter-spacing:.15em!important;text-transform:uppercase!important}[dir=rtl] .i-amphtml-story-interactive-results-top-score{left:auto!important;right:1.25em!important}.i-amphtml-story-interactive-results-top-value{font-weight:700!important;font-size:1.75em!important;line-height:1!important}.i-amphtml-story-interactive-results-top-value>span:nth-child(2){font-size:.5em!important}[dir=rtl] .i-amphtml-story-interactive-results-top-value{left:.7em!important;right:auto!important}.i-amphtml-story-interactive-results-container:not(.i-amphtml-story-interactive-has-score){--i-amphtml-story-interactive-score-display:none!important}.i-amphtml-story-interactive-results-container:not(.i-amphtml-story-interactive-has-image) .i-amphtml-story-interactive-results-image-border{display:none!important}.i-amphtml-story-interactive-results-image{width:8.75em!important;height:8.75em!important;background-size:cover!important;background-position:50%!important;border-radius:50%!important}.i-amphtml-story-interactive-results-image-border{margin:0px 10px!important;padding:8px!important;border-radius:50%!important;border:2px solid var(--interactive-accent-color)!important}.i-amphtml-story-interactive-results-prompt{text-transform:uppercase!important;font-size:.75em!important;margin-top:1.75em!important;font-weight:700!important;letter-spacing:.2em!important}.i-amphtml-story-interactive-results-top-transparent.i-amphtml-story-interactive-has-score:not(.i-amphtml-story-interactive-has-image) .i-amphtml-story-interactive-results-prompt{margin-top:0px!important}.i-amphtml-story-interactive-results-title{font-size:1.75em!important;font-weight:700!important}.i-amphtml-story-interactive-results-description{font-size:.875em!important;text-align:center!important;color:var(--i-amphtml-interactive-option-text-color)!important;margin-top:.5em!important;padding:0px 1.4em!important}\n/*# sourceURL=/extensions/amp-story-interactive/0.1/amp-story-interactive-results.css*/";

  // extensions/amp-story-interactive/0.1/amp-story-interactive-results.js
  var _templateObject6;
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
  function _get4(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get4 = Reflect.get;
    } else {
      _get4 = function _get5(target2, property2, receiver2) {
        var base = _superPropBase4(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get4(target, property, receiver || target);
  }
  function _superPropBase4(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf5(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf5(o, p);
  }
  function _createSuper5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct5();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf5(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf5(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn5(this, result);
    };
  }
  function _possibleConstructorReturn5(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized5(self2);
  }
  function _assertThisInitialized5(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct5() {
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
  function _getPrototypeOf5(o) {
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  function _taggedTemplateLiteralLoose6(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var buildResultsTemplate = function buildResultsTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose6(['\n    <div class="i-amphtml-story-interactive-results-container">\n      <div class="i-amphtml-story-interactive-results-top">\n        <div class="i-amphtml-story-interactive-results-top-score">SCORE:</div>\n        <div class="i-amphtml-story-interactive-results-top-value">\n          <span class="i-amphtml-story-interactive-results-top-value-number"\n            >100</span\n          ><span>%</span>\n        </div>\n      </div>\n      <div class="i-amphtml-story-interactive-results-image-border">\n        <div class="i-amphtml-story-interactive-results-image"></div>\n      </div>\n      <div class="i-amphtml-story-interactive-results-prompt"></div>\n      <div class="i-amphtml-story-interactive-results-title"></div>\n      <div class="i-amphtml-story-interactive-results-description"></div>\n    </div>\n  '])));
  };
  var HAS_IMAGE_CLASS = "i-amphtml-story-interactive-has-image";
  var HAS_SCORE_CLASS = "i-amphtml-story-interactive-has-score";
  var processResults = function processResults2(interactiveState, options) {
    var processStrategy = decideStrategy(options) === "category" ? processResultsCategory : processResultsPercentage;
    return processStrategy(interactiveState, options);
  };
  var processResultsCategory = function processResultsCategory2(interactiveState, options) {
    var result = {
      category: null,
      percentage: null
    };
    var categories = {};
    options.forEach(function(option) {
      if (option.resultscategory) {
        categories[option.resultscategory] = 0;
      }
    });
    Object.values(interactiveState).forEach(function(e) {
      if (e.type == InteractiveType.POLL) {
        if (e.option && e.option.resultscategory && categories[e.option.resultscategory] != null) {
          categories[e.option.resultscategory] += 1;
        }
      }
    });
    result.category = Object.keys(categories).reduce(function(a2, b) {
      return categories[a2] >= categories[b] ? a2 : b;
    });
    return result;
  };
  var processResultsPercentage = function processResultsPercentage2(interactiveState, options) {
    var result = {
      category: null,
      percentage: null
    };
    var quizCount = 0;
    var quizCorrect = 0;
    Object.values(interactiveState).forEach(function(e) {
      if (e.type == InteractiveType.QUIZ) {
        quizCount += 1;
        if (e.option && e.option.correct != null) {
          quizCorrect += 1;
        }
      }
    });
    result.percentage = quizCount == 0 ? 0 : 100 * (quizCorrect / quizCount);
    var minThresholdDiff = -100;
    options.forEach(function(option) {
      var currThresholdDiff = result.percentage - parseFloat(option.resultsthreshold);
      if (currThresholdDiff >= 0 && (minThresholdDiff > currThresholdDiff || minThresholdDiff < 0) || currThresholdDiff < 0 && minThresholdDiff < 0 && currThresholdDiff > minThresholdDiff) {
        result.category = option.resultscategory;
        minThresholdDiff = currThresholdDiff;
      }
    });
    return result;
  };
  var decideStrategy = function decideStrategy2(options) {
    return options.some(function(o) {
      return o.resultsthreshold != void 0;
    }) ? "percentage" : "category";
  };
  var AmpStoryInteractiveResults = /* @__PURE__ */ function(_AmpStoryInteractive) {
    _inherits5(AmpStoryInteractiveResults2, _AmpStoryInteractive);
    var _super = _createSuper5(AmpStoryInteractiveResults2);
    function AmpStoryInteractiveResults2(element) {
      _classCallCheck8(this, AmpStoryInteractiveResults2);
      return _super.call(this, element, InteractiveType.RESULTS, [2, 4]);
    }
    _createClass7(AmpStoryInteractiveResults2, [{
      key: "buildCallback",
      value: function buildCallback() {
        return _get4(_getPrototypeOf5(AmpStoryInteractiveResults2.prototype), "buildCallback", this).call(this, CSS6);
      }
    }, {
      key: "buildComponent",
      value: function buildComponent() {
        this.rootEl_ = buildResultsTemplate(this.element);
        return this.rootEl_;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this = this;
        if (this.element.hasAttribute("prompt-text")) {
          this.rootEl_.querySelector(".i-amphtml-story-interactive-results-prompt").textContent = this.element.getAttribute("prompt-text");
        }
        this.storeService_.subscribe(StateProperty.INTERACTIVE_REACT_STATE, function(data) {
          return _this.onInteractiveReactStateUpdate_(data);
        }, true);
      }
    }, {
      key: "onInteractiveReactStateUpdate_",
      value: function onInteractiveReactStateUpdate_(interactiveState) {
        var _this2 = this;
        var results = processResults(interactiveState, this.options_);
        this.rootEl_.classList.toggle(HAS_SCORE_CLASS, results.percentage != null);
        this.rootEl_.querySelector(".i-amphtml-story-interactive-results-top-value-number").textContent = (results.percentage || 0).toFixed(0);
        this.options_.forEach(function(e) {
          if (e.resultscategory === results.category) {
            _this2.mutateElement(function() {
              _this2.updateCategory_(e);
              _this2.updateToPostSelectionState_(null);
            });
          }
        });
      }
    }, {
      key: "updateCategory_",
      value: function updateCategory_(categorySelected) {
        this.rootEl_.classList.toggle(HAS_IMAGE_CLASS, categorySelected.image != null);
        if (categorySelected.image) {
          setStyle(this.rootEl_.querySelector(".i-amphtml-story-interactive-results-image"), "background", "url(" + categorySelected.image + ")");
        }
        this.rootEl_.querySelector(".i-amphtml-story-interactive-results-title").textContent = categorySelected.resultscategory;
        this.rootEl_.querySelector(".i-amphtml-story-interactive-results-description").textContent = categorySelected.text || "";
        this.rootEl_.classList.toggle("i-amphtml-story-interactive-results-top-transparent", this.scoreBackgroundIsTransparent_());
      }
    }, {
      key: "handleTap_",
      value: function handleTap_(unusedEvent) {
      }
    }, {
      key: "displayOptionsData",
      value: function displayOptionsData(unusedOptionsData) {
      }
    }, {
      key: "updateStoryStoreState_",
      value: function updateStoryStoreState_(unusedOption) {
      }
    }, {
      key: "scoreBackgroundIsTransparent_",
      value: function scoreBackgroundIsTransparent_() {
        var bgColor = computedStyle(this.win, dev().assertElement(this.rootEl_.querySelector(".i-amphtml-story-interactive-results-top")))["background"];
        if (bgColor.startsWith("rgba") && bgColor.lastIndexOf("rgb") == 0) {
          return parseFloat(bgColor.split(", ")[3].split(")")[0]) == 0;
        }
        return false;
      }
    }]);
    return AmpStoryInteractiveResults2;
  }(AmpStoryInteractive);

  // extensions/amp-story-interactive/0.1/amp-story-interactive.js
  AMP.extension("amp-story-interactive", "0.1", function(AMP2) {
    AMP2.registerElement("amp-story-interactive-binary-poll", AmpStoryInteractiveBinaryPoll);
    AMP2.registerElement("amp-story-interactive-poll", AmpStoryInteractivePoll);
    AMP2.registerElement("amp-story-interactive-quiz", AmpStoryInteractiveQuiz);
    AMP2.registerElement("amp-story-interactive-results", AmpStoryInteractiveResults);
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
//# sourceMappingURL=amp-story-interactive-0.1.max.js.map
