(self.AMP=self.AMP||[]).push({n:"amp-loader",ev:"0.1",l:true,v:"2106040012001",m:0,f:(function(AMP,_){

(() => {
  // build/amp-loader-0.1.css.js
  var CSS2 = ".i-amphtml-loader-background{position:absolute;top:0;left:0;bottom:0;right:0;background-color:#f8f8f8}.i-amphtml-new-loader{display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;color:#aaa}.i-amphtml-new-loader-size-default,.i-amphtml-new-loader-size-small{width:72px;height:72px}.i-amphtml-new-loader-logo{transform-origin:center;opacity:0;animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-logo{display:none}.i-amphtml-new-loader-logo-default{fill:currentColor;animation:i-amphtml-new-loader-fade-out 0.8s ease-out forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-has-shim{color:#fff!important}.i-amphtml-new-loader-shim{width:72px;height:72px;border-radius:50%;display:none;transform-origin:center;opacity:0;background-color:rgba(0,0,0,0.6);animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-shim{width:48px;height:48px;margin:12px}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-shim{display:initial}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-logo-default{display:none}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-transparent-on-shim{fill:transparent!important}.i-amphtml-new-loader-logo,.i-amphtml-new-loader-shim,.i-amphtml-new-loader-spinner-wrapper{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-new-loader-spinner-wrapper{margin:12px}.i-amphtml-new-loader-spinner{stroke:currentColor;stroke-width:1.5px;opacity:0;animation:i-amphtml-new-loader-fade-in 0.8s ease-in forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-spinner-path{animation:frame-position-first-spin 0.6s steps(30),frame-position-infinite-spin 1.2s steps(59) infinite;animation-delay:2.8s,3.4s;animation-delay:calc(2.8s - var(--loader-delay-offset)),calc(3.4s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner{transform:scale(0.54545);stroke-width:2.75px}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner-path{animation-delay:1.4s,2s;animation-delay:calc(1.4s - var(--loader-delay-offset)),calc(2s - var(--loader-delay-offset))}.i-amphtml-new-loader *{animation-play-state:paused}.amp-active>.i-amphtml-new-loader *{animation-play-state:running}.i-amphtml-new-loader-ad-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.i-amphtml-new-loader-ad-label{all:initial!important;display:inline-block!important;padding:0 0.4ch!important;border:1px solid!important;border-radius:2px!important;color:currentColor!important;font-size:11px!important;font-family:sans-serif!important;line-height:1.1!important;visibility:inherit!important}@keyframes i-amphtml-new-loader-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-new-loader-fade-out{0%{opacity:1}to{opacity:0}}@keyframes i-amphtml-new-loader-scale-and-fade-in{0%{opacity:0;transform:scale(0)}50%{transform:scale(1)}to{opacity:1}}@keyframes frame-position-first-spin{0%{transform:translateX(0)}to{transform:translateX(-1440px)}}@keyframes frame-position-infinite-spin{0%{transform:translateX(-1440px)}to{transform:translateX(-4272px)}}\n/*# sourceURL=/extensions/amp-loader/0.1/amp-loader.css*/";

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
  function insertAfterOrAtStart(root, element, after) {
    if (after === void 0) {
      after = null;
    }
    if (!after) {
      insertAtStart(root, element);
      return;
    }
    var before = after.nextSibling;
    root.insertBefore(element, before);
  }
  function insertAtStart(root, element) {
    root.insertBefore(element, root.firstChild);
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
  function setImportantStyles(element, styles) {
    var style = element.style;
    for (var k in styles) {
      style.setProperty(getVendorJsPropertyName(style, k), String(styles[k]), "important");
    }
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
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  var STYLE_MAP_PROP = "__AMP_CSS_SM";
  function installStylesForDoc(ampdoc, cssText, cb, opt_isRuntimeCss, opt_ext) {
    var cssRoot = ampdoc.getHeadNode();
    var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText), opt_isRuntimeCss || false, opt_ext || null);
    if (cb) {
      var rootNode = ampdoc.getRootNode();
      if (styleLoaded(rootNode, style)) {
        cb(style);
        return style;
      }
      var interval = setInterval(function() {
        if (styleLoaded(rootNode, style)) {
          clearInterval(interval);
          cb(style);
        }
      }, 4);
    }
    return style;
  }
  function insertStyleElement(cssRoot, cssText, isRuntimeCss, ext) {
    var styleMap = cssRoot[STYLE_MAP_PROP];
    if (!styleMap) {
      styleMap = cssRoot[STYLE_MAP_PROP] = map();
    }
    var isExtCss = !isRuntimeCss && ext && ext != "amp-custom" && ext != "amp-keyframes";
    var key = isRuntimeCss ? "amp-runtime" : isExtCss ? "amp-extension=" + ext : null;
    if (key) {
      var existing = getExistingStyleElement(cssRoot, styleMap, key);
      if (existing) {
        if (existing.textContent !== cssText) {
          existing.textContent = cssText;
        }
        return existing;
      }
    }
    var doc = cssRoot.ownerDocument || cssRoot;
    var style = doc.createElement("style");
    style.textContent = cssText;
    var afterElement = null;
    if (isRuntimeCss) {
      style.setAttribute("amp-runtime", "");
    } else if (isExtCss) {
      style.setAttribute("amp-extension", ext || "");
      afterElement = dev().assertElement(getExistingStyleElement(cssRoot, styleMap, "amp-runtime"));
    } else {
      if (ext) {
        style.setAttribute(ext, "");
      }
      afterElement = cssRoot.lastChild;
    }
    insertAfterOrAtStart(cssRoot, style, afterElement);
    if (key) {
      styleMap[key] = style;
    }
    return style;
  }
  function getExistingStyleElement(cssRoot, styleMap, key) {
    if (styleMap[key]) {
      return styleMap[key];
    }
    var existing = cssRoot.querySelector("style[" + key + "]");
    if (existing) {
      styleMap[key] = existing;
      return existing;
    }
    return null;
  }
  function maybeTransform(cssRoot, cssText) {
    var transformer = cssRoot[TRANSFORMER_PROP];
    return transformer ? transformer(cssText) : cssText;
  }
  function styleLoaded(doc, style) {
    var sheets = doc.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.ownerNode == style) {
        return true;
      }
    }
    return false;
  }

  // src/layout.js
  var videoPlayerTagNameRe = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
  function isIframeVideoPlayerComponent(tagName) {
    if (tagName == "AMP-VIDEO") {
      return false;
    }
    return videoPlayerTagNameRe.test(tagName);
  }

  // extensions/amp-loader/0.1/amp-loader.js
  var _templateObject;
  var _templateObject2;
  var _templateObject3;
  var _templateObject4;
  var _templateObject5;
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
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var LOADER_APPEAR_TIME = 600;
  var LOADER_BACKGROUND_TAGS = {
    "AMP-IMG": true,
    "AMP-ANIM": true,
    "AMP-PINTEREST": true,
    "AMP-INSTAGRAM": true,
    "AMP-GOOGLE-DOCUMENT-EMBED": true
  };
  var loaderDom = null;
  function createSpinnerDom(html2) {
    var content = html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n    <div class="i-amphtml-new-loader-spinner-wrapper">\n      <svg class="i-amphtml-new-loader-spinner" viewBox="0 0 48 48">\n        <path\n          class="i-amphtml-new-loader-spinner-path"\n          fill="none"\n          d="M24 2a22 22 0 10.01 0m33.27 5.65a22 22 0 102.74-2.1m46.13 1.35a22 22 0 105.96-3.44m42.96 2.74a22 22 0 109.49-3.93m39.46 3.28a22 22 0 1013.13-3.52M253 4.95a22 22 0 1016.69-2.2m32.32 1.65a22 22 0 1019.98 0m29.06-.5a22 22 0 1022.79 3m26.28-3.44a22 22 0 1024.98 6.69m24.1-7.07a22 22 0 1026.4 10.94m22.71-11.27a22 22 0 1026.94 15.56m22.18-15.83a22 22 0 1026.54 20.37m22.59-20.58a22 22 0 1025.17 25.17M645.7 2.12a22 22 0 1022.84 29.76m26.31-29.85a22 22 0 1019.6 33.95M744 2a22 22 0 1015.56 37.56m33.59-37.53a22 22 0 1010.83 40.42M842.3 2.12a22 22 0 105.58 42.42m43.56-42.27a22 22 0 100 43.46m49.13-43.25a22 22 0 10-5.73 43.49m54.85-43.22a22 22 0 10-11.39 42.5m60.5-42.17a22 22 0 00-16.79 40.53m65.87-40.15a22 22 0 00-21.73 37.64m70.8-37.2a22 22 0 00-26.05 33.94m75.09-33.44a22 22 0 00-29.59 29.59M1235 4.95a22 22 0 00-32.25 24.75m81.23-24.15a22 22 0 00-33.95 19.6m82.9-18.95a22 22 0 00-34.66 14.36m83.58-13.66a22 22 0 00-34.38 9.21m83.25-8.46a22 22 0 00-33.17 4.37m82.01-3.58a22 22 0 00-31.11 0m81.35 2.63a22 22 0 00-32.52-3.42m82.32 6.36a22 22 0 00-33.45-7.11m82.77 10.3a22 22 0 00-33.85-11m82.66 14.36a22 22 0 00-33.71-15.01M1726 24a22 22 0 00-33-19.05m80.73 22.49a22 22 0 00-31.72-23.04m78.91 26.4a22 22 0 00-29.87-26.9m76.55 30.09a22 22 0 00-27.49-30.53m73.69 33.47a22 22 0 00-24.6-33.85m70.36 36.48a22 22 0 00-21.25-36.81m66.62 39.05a22 22 0 00-17.51-39.32m62.57 41.12a22 22 0 00-13.43-41.33m58.24 42.65a22 22 0 00-9.1-42.8m53.74 43.61a22 22 0 00-4.59-43.7M2184 46a22 22 0 100-44m44.56 43.73a22 22 0 104.59-43.7m40.05 42.89a22 22 0 109.1-42.8m35.71 41.48a22 22 0 1013.43-41.33m31.63 39.53a22 22 0 1017.51-39.32m27.86 37.08a22 22 0 1021.25-36.81m24.51 34.18a22 22 0 1024.6-33.85m21.6 30.91a22 22 0 1027.49-30.53m19.19 27.34a22 22 0 1029.87-26.9m17.32 23.54a22 22 0 1031.72-23.04M2642 24a22 22 0 1033-19.05m15.27 15.61a22 22 0 1033.71-15.01m15.1 11.65a22 22 0 1033.85-11m15.47 7.81a22 22 0 1033.45-7.11m16.35 4.17a22 22 0 1032.52-3.42m17.72.79a22 22 0 1031.11 0m17.73-.79a22 22 0 1032.52 3.42m16.35-4.17a22 22 0 1033.45 7.11m15.47-7.81a22 22 0 1033.85 11m15.1-11.65a22 22 0 1033.71 15.01M3133 4.95A22 22 0 103166 24m16.01-19.6a22 22 0 1031.72 23.04m17.32-23.54a22 22 0 1029.87 26.9m19.2-27.34a22 22 0 1027.49 30.53m21.59-30.91a22 22 0 1024.6 33.85m24.51-34.18a22 22 0 1021.25 36.81m27.87-37.08a22 22 0 1017.51 39.32m31.62-39.53a22 22 0 1013.43 41.33m35.71-41.48a22 22 0 109.1 42.8m40.05-42.89a22 22 0 104.59 43.7M3624 2a22 22 0 100 44m49.15-43.97a22 22 0 00-4.59 43.7m53.74-43.61a22 22 0 00-9.1 42.8m58.24-42.65a22 22 0 00-13.43 41.33m62.56-41.12a22 22 0 00-17.51 39.32m66.63-39.05a22 22 0 00-21.25 36.81m70.36-36.48a22 22 0 00-24.6 33.85m73.68-33.47a22 22 0 00-27.49 30.53m76.56-30.09a22 22 0 00-29.87 26.9m78.91-26.4a22 22 0 00-31.72 23.04M4115 4.95A22 22 0 004082 24m81.98-18.45a22 22 0 00-33.71 15.01m82.66-14.36a22 22 0 00-33.85 11m82.77-10.3a22 22 0 00-33.45 7.11m82.32-6.36a22 22 0 00-32.52 3.42"\n        ></path>\n      </svg>\n    </div>\n  '])));
    return content;
  }
  function getLoaderDom(element) {
    if (!loaderDom) {
      var html2 = htmlFor(element);
      loaderDom = html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-new-loader">\n        <div class="i-amphtml-new-loader-shim"></div>\n        <div class="i-amphtml-new-loader-logo"></div>\n      </div>\n    '])));
      loaderDom.appendChild(createSpinnerDom(html2));
    }
    return loaderDom.cloneNode(true);
  }
  var LoaderBuilder = /* @__PURE__ */ function() {
    function LoaderBuilder2(element, domRoot, elementWidth, elementHeight) {
      _classCallCheck3(this, LoaderBuilder2);
      this.element_ = element;
      this.domRoot_ = domRoot;
      this.layoutWidth_ = elementWidth;
      this.layoutHeight_ = elementHeight;
      this.loaderRoot_ = null;
    }
    _createClass2(LoaderBuilder2, [{
      key: "build",
      value: function build() {
        this.loaderRoot_ = getLoaderDom(this.element_);
        this.domRoot_.appendChild(this.loaderRoot_);
        this.maybeAddLoadingBackground_();
        this.maybeAddLoaderAnimation_();
      }
    }, {
      key: "maybeAddLoaderAnimation_",
      value: function maybeAddLoaderAnimation_() {
        if (this.isTiny_() || this.hasBlurryImagePlaceholder_()) {
          return;
        }
        this.setSize_();
        if (this.requiresBackgroundShim_()) {
          this.loaderRoot_.classList.add("i-amphtml-new-loader-has-shim");
        }
        this.addLogo_();
      }
    }, {
      key: "setSize_",
      value: function setSize_() {
        var sizeClassDefault = "i-amphtml-new-loader-size-default";
        var sizeClassSmall = "i-amphtml-new-loader-size-small";
        var sizeClassLarge = "i-amphtml-new-loader-size-large";
        if (this.isAd_()) {
          return this.loaderRoot_.classList.add(sizeClassDefault);
        }
        if (this.isSmall_()) {
          return this.loaderRoot_.classList.add(sizeClassSmall);
        }
        if (this.requiresLargeSpinner_()) {
          return this.loaderRoot_.classList.add(sizeClassLarge);
        }
        return this.loaderRoot_.classList.add(sizeClassDefault);
      }
    }, {
      key: "addLogo_",
      value: function addLogo_() {
        var _this$getCustomLogo_ = this.getCustomLogo_(), color = _this$getCustomLogo_.color, _this$getCustomLogo_$ = _this$getCustomLogo_.content, content = _this$getCustomLogo_$ === void 0 ? this.getDefaultLogo_() : _this$getCustomLogo_$;
        this.loaderRoot_.querySelector(".i-amphtml-new-loader-logo").appendChild(content);
        if (color) {
          setStyle(this.loaderRoot_, "color", color);
        }
      }
    }, {
      key: "hasBackgroundContent_",
      value: function hasBackgroundContent_() {
        var hasPlaceholder = !!this.element_.getPlaceholder();
        var hasPoster = this.element_.hasAttribute("poster");
        return hasPlaceholder || hasPoster;
      }
    }, {
      key: "tagNeedsBackground_",
      value: function tagNeedsBackground_() {
        var tagName = this.element_.tagName;
        return LOADER_BACKGROUND_TAGS[tagName] || isIframeVideoPlayerComponent(tagName);
      }
    }, {
      key: "maybeAddLoadingBackground_",
      value: function maybeAddLoadingBackground_() {
        if (!this.hasBackgroundContent_() && this.tagNeedsBackground_()) {
          this.domRoot_.classList.add("i-amphtml-loader-background");
        }
      }
    }, {
      key: "getCustomLogo_",
      value: function getCustomLogo_() {
        if (this.isAd_()) {
          return {
            content: this.getAdsLogo_()
          };
        }
        if (isIframeVideoPlayerComponent(this.element_.tagName)) {
          return {
            content: this.getVideoPlayerLogo_()
          };
        }
        return this.element_.createLoaderLogo();
      }
    }, {
      key: "getVideoPlayerLogo_",
      value: function getVideoPlayerLogo_() {
        var html2 = htmlFor(this.element_);
        return html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(['\n      <svg viewBox="0 0 72 72">\n        <path\n          class="i-amphtml-new-loader-white-on-shim"\n          fill="currentColor"\n          d="M41,34.5V31c0-0.5-0.4-1-1-1H27c-0.5,0-1,0.5-1,1v10c0,0.6,0.5,1,1,1h13c0.6,0,1-0.4,1-1v-3.5l5,4v-11L41,34.5z"\n        />\n      </svg>\n    '])));
      }
    }, {
      key: "getDefaultLogo_",
      value: function getDefaultLogo_() {
        var html2 = htmlFor(this.element_);
        return html2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(['\n      <svg class="i-amphtml-new-loader-logo-default" viewBox="0 0 72 72">\n        <circle cx="36" cy="36" r="12"></circle>\n      </svg>\n    '])));
      }
    }, {
      key: "getAdsLogo_",
      value: function getAdsLogo_() {
        var html2 = htmlFor(this.element_);
        return html2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-new-loader-ad-logo">\n        <span class="i-amphtml-new-loader-ad-label"> Ad </span>\n      </div>\n    '])));
      }
    }, {
      key: "isAd_",
      value: function isAd_() {
        return this.element_.tagName == "AMP-AD";
      }
    }, {
      key: "isSmall_",
      value: function isSmall_() {
        return !this.isTiny_() && (this.layoutWidth_ <= 100 || this.layoutHeight_ <= 100);
      }
    }, {
      key: "isTiny_",
      value: function isTiny_() {
        return this.layoutWidth_ < 50 || this.layoutHeight_ < 50;
      }
    }, {
      key: "hasBlurryImagePlaceholder_",
      value: function hasBlurryImagePlaceholder_() {
        var placeholder = this.element_.getPlaceholder();
        return placeholder && placeholder.classList.contains("i-amphtml-blurry-placeholder");
      }
    }, {
      key: "requiresBackgroundShim_",
      value: function requiresBackgroundShim_() {
        if (this.element_.hasAttribute("poster")) {
          return true;
        }
        var placeholder = this.element_.getPlaceholder();
        if (!placeholder) {
          return false;
        }
        if (placeholder.tagName == "AMP-IMG" || placeholder.tagName == "IMG") {
          return true;
        }
        return false;
      }
    }, {
      key: "requiresLargeSpinner_",
      value: function requiresLargeSpinner_() {
        return false;
      }
    }]);
    return LoaderBuilder2;
  }();
  var LoaderService = /* @__PURE__ */ function() {
    function LoaderService2() {
      _classCallCheck3(this, LoaderService2);
    }
    _createClass2(LoaderService2, [{
      key: "initializeLoader",
      value: function initializeLoader(element, loaderRoot, initDelay, elementWidth, elementHeight) {
        var loaderDelay = Math.min(initDelay, LOADER_APPEAR_TIME);
        var lb = new LoaderBuilder(element, loaderRoot, elementWidth, elementHeight);
        lb.build();
        setImportantStyles(element, {
          "--loader-delay-offset": loaderDelay + "ms"
        });
      }
    }]);
    return LoaderService2;
  }();
  AMP.extension("amp-loader", "0.1", function(AMP2) {
    AMP2.registerServiceForDoc("loader", LoaderService);
    Services.extensionsFor(AMP2.win).addDocFactory(function(ampDoc) {
      installStylesForDoc(ampDoc, CSS2, function() {
      }, false, "amp-loader");
    });
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-loader-0.1.max.js.map
