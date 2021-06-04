(self.AMP=self.AMP||[]).push({n:"amp-web-push",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // extensions/amp-web-push/0.1/vars.js
  var TAG = "amp-web-push";
  var CONFIG_TAG = TAG;
  var SERVICE_TAG = TAG + "-service";
  var WIDGET_TAG = TAG + "-widget";
  var StorageKeys = {
    NOTIFICATION_PERMISSION: "amp-web-push-notification-permission"
  };
  var NotificationPermission = {
    GRANTED: "granted",
    DENIED: "denied",
    DEFAULT: "default"
  };

  // build/amp-web-push-0.1.css.js
  var CSS2 = "amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/";

  // src/core/types/array.js
  var isArray = Array.isArray;

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

  // src/core/data-structures/lru-cache.js
  function _classCallCheck(instance, Constructor) {
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass(LruCache2, [{
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

  // src/core/dom/query.js
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }

  // src/event-helper.js
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__AMP_MEDIA_LOAD_FAILURE_SRC";
  function getData(event) {
    return event.data;
  }
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
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function loadPromise(eleOrWindow) {
    var unlistenLoad;
    var unlistenError;
    if (isLoaded(eleOrWindow)) {
      return Promise.resolve(eleOrWindow);
    }
    var isMediaElement = isHTMLMediaElement(eleOrWindow);
    if (isMediaElement && eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] === eleOrWindow.currentSrc) {
      return Promise.reject(eleOrWindow);
    }
    var loadingPromise = new Promise(function(resolve, reject) {
      if (isMediaElement) {
        unlistenLoad = listenOnce(eleOrWindow, "loadedmetadata", resolve, {
          capture: true
        });
      } else {
        unlistenLoad = listenOnce(eleOrWindow, "load", resolve);
      }
      if (!eleOrWindow.tagName) {
        return;
      }
      var errorTarget = eleOrWindow;
      if (isMediaElement && !eleOrWindow.hasAttribute("src")) {
        errorTarget = lastChildElement(eleOrWindow, function(child) {
          return child.tagName === "SOURCE";
        });
        if (!errorTarget) {
          return reject(new Error("Media has no source."));
        }
      }
      unlistenError = listenOnce(errorTarget, "error", reject);
    });
    return loadingPromise.then(function() {
      if (unlistenError) {
        unlistenError();
      }
      return eleOrWindow;
    }, function() {
      if (unlistenLoad) {
        unlistenLoad();
      }
      failedToLoad(eleOrWindow);
    });
  }
  function failedToLoad(eleOrWindow) {
    if (isHTMLMediaElement(eleOrWindow)) {
      eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] = eleOrWindow.currentSrc || true;
    }
    var target = eleOrWindow;
    if (target && target.src) {
      target = target.src;
    }
    throw user().createError(LOAD_FAILURE_PREFIX, target);
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }

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

  // extensions/amp-web-push/0.1/iframehost.js
  function _classCallCheck2(instance, Constructor) {
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
  var IFrameHost = /* @__PURE__ */ function() {
    function IFrameHost2(ampdoc, url) {
      _classCallCheck2(this, IFrameHost2);
      this.ampdoc_ = ampdoc;
      this.url_ = url;
      this.domElement_ = null;
      this.loadPromise_ = new Promise(function() {
      });
    }
    _createClass2(IFrameHost2, [{
      key: "load",
      value: function load() {
        var _this = this;
        return this.ampdoc_.whenReady().then(function() {
          _this.domElement_ = _this.ampdoc_.win.document.createElement("iframe");
          toggle(_this.domElement_, false);
          _this.domElement_.sandbox = "allow-same-origin allow-scripts";
          _this.domElement_.src = _this.url_;
          _this.ampdoc_.getBody().appendChild(_this.domElement_);
          _this.loadPromise_ = loadPromise(_this.domElement_);
          return _this.whenReady();
        });
      }
    }, {
      key: "getDomElement",
      value: function getDomElement() {
        return this.domElement_;
      }
    }, {
      key: "whenReady",
      value: function whenReady() {
        return this.loadPromise_;
      }
    }]);
    return IFrameHost2;
  }();

  // src/core/data-structures/promise.js
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Deferred = function Deferred2() {
    var _this = this;
    _classCallCheck3(this, Deferred2);
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };

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
  function openWindowDialog(win, url, target, opt_features) {
    var res;
    try {
      res = win.open(url, target, opt_features);
    } catch (e) {
      dev().error("DOM", "Failed to open url on target: ", target, e);
    }
    if (!res && target != "_top" && !includes(opt_features || "", "noopener")) {
      res = win.open(url, "_top");
    }
    return res;
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
  var Services = /* @__PURE__ */ function() {
    function Services2() {
      _classCallCheck4(this, Services2);
    }
    _createClass3(Services2, null, [{
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

  // extensions/amp-web-push/0.1/amp-web-push-widget.js
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
  var WebPushWidget = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(WebPushWidget2, _AMP$BaseElement);
    var _super = _createSuper(WebPushWidget2);
    function WebPushWidget2(element) {
      _classCallCheck5(this, WebPushWidget2);
      return _super.call(this, element);
    }
    _createClass4(WebPushWidget2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.FIXED;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.element.classList.add("amp-invisible");
      }
    }]);
    return WebPushWidget2;
  }(AMP.BaseElement);
  var WebPushWidgetVisibilities = {
    SUBSCRIBED: "subscribed",
    UNSUBSCRIBED: "unsubscribed",
    BLOCKED: "blocked"
  };

  // extensions/amp-web-push/0.1/window-messenger.js
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
  var WindowMessenger = /* @__PURE__ */ function() {
    function WindowMessenger2(options) {
      _classCallCheck6(this, WindowMessenger2);
      if (!options) {
        options = {
          debug: false,
          windowContext: window
        };
      }
      this.messages_ = {};
      this.listeners_ = {};
      this.debug_ = options.debug;
      this.listening_ = false;
      this.connecting_ = false;
      this.connected_ = false;
      this.channel_ = null;
      this.messagePort_ = null;
      this.onListenConnectionMessageReceivedProc_ = null;
      this.onConnectConnectionMessageReceivedProc_ = null;
      this.onChannelMessageReceivedProc_ = null;
      this.window_ = options.windowContext || window;
    }
    _createClass5(WindowMessenger2, [{
      key: "listen",
      value: function listen(allowedOrigins) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          if (_this.connected_) {
            reject(new Error("Already connected."));
            return;
          }
          if (_this.listening_) {
            reject(new Error("Already listening for connections."));
            return;
          }
          if (!Array.isArray(allowedOrigins)) {
            reject(new Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:", allowedOrigins));
            return;
          }
          _this.onListenConnectionMessageReceivedProc_ = _this.onListenConnectionMessageReceived_.bind(_this, allowedOrigins, resolve, reject);
          _this.window_.addEventListener("message", _this.onListenConnectionMessageReceivedProc_);
          if (_this.debug_) {
            dev().fine(TAG, "Listening for a connection message...");
          }
        }).then(function() {
          _this.send(WindowMessenger2.Topics.CONNECT_HANDSHAKE, null);
          _this.connected_ = true;
        });
      }
    }, {
      key: "isAllowedOrigin_",
      value: function isAllowedOrigin_(origin, allowedOrigins) {
        var normalizedOrigin = parseUrlDeprecated(origin).origin;
        for (var i = 0; i < allowedOrigins.length; i++) {
          var allowedOrigin = allowedOrigins[i];
          if (parseUrlDeprecated(allowedOrigin).origin === normalizedOrigin) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "onListenConnectionMessageReceived_",
      value: function onListenConnectionMessageReceived_(allowedOrigins, resolvePromise, rejectPromise, messageChannelEvent) {
        var message = getData(messageChannelEvent);
        var origin = messageChannelEvent.origin, messagePorts = messageChannelEvent.ports;
        if (this.debug_) {
          dev().fine(TAG, "Window message for listen() connection received:", message);
        }
        if (!this.isAllowedOrigin_(origin, allowedOrigins)) {
          dev().fine(TAG, "Discarding connection message from " + origin + " because it isn't an allowed origin:", message, " (allowed  origins are)", allowedOrigins);
          return;
        }
        if (!message || message["topic"] !== WindowMessenger2.Topics.CONNECT_HANDSHAKE) {
          dev().fine(TAG, "Discarding connection message because it did not contain our expected handshake:", message);
          return;
        }
        dev().fine(TAG, "Received expected connection handshake message:", message);
        this.window_.removeEventListener("message", this.onListenConnectionMessageReceivedProc_);
        this.messagePort_ = messagePorts[0];
        this.onChannelMessageReceivedProc_ = this.onChannelMessageReceived_.bind(this);
        this.messagePort_.addEventListener("message", this.onChannelMessageReceivedProc_, false);
        this.messagePort_.start();
        resolvePromise();
      }
    }, {
      key: "connect",
      value: function connect(remoteWindowContext, expectedRemoteOrigin) {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          if (!remoteWindowContext) {
            reject(new Error("Provide a valid Window context to connect to."));
          }
          if (!expectedRemoteOrigin) {
            reject(new Error("Provide an expected origin for the remote Window or provide the wildcard *."));
          }
          if (_this2.connected_) {
            reject(new Error("Already connected."));
            return;
          }
          if (_this2.connecting_) {
            reject(new Error("Already connecting."));
            return;
          }
          _this2.channel_ = new MessageChannel();
          _this2.messagePort_ = _this2.channel_.port1;
          _this2.onConnectConnectionMessageReceivedProc_ = _this2.onConnectConnectionMessageReceived_.bind(_this2, _this2.messagePort_, expectedRemoteOrigin, resolve);
          _this2.messagePort_.addEventListener("message", _this2.onConnectConnectionMessageReceivedProc_);
          _this2.messagePort_.start();
          remoteWindowContext.postMessage({
            topic: WindowMessenger2.Topics.CONNECT_HANDSHAKE
          }, expectedRemoteOrigin === "*" ? "*" : parseUrlDeprecated(expectedRemoteOrigin).origin, [_this2.channel_.port2]);
          dev().fine(TAG, "Opening channel to " + expectedRemoteOrigin + "...");
        });
      }
    }, {
      key: "onConnectConnectionMessageReceived_",
      value: function onConnectConnectionMessageReceived_(messagePort, expectedRemoteOrigin, resolvePromise) {
        this.connected_ = true;
        if (this.debug_) {
          dev().fine(TAG, "Messenger channel to " + expectedRemoteOrigin + " established.");
        }
        messagePort.removeEventListener("message", this.onConnectConnectionMessageReceivedProc_);
        this.onChannelMessageReceivedProc_ = this.onChannelMessageReceived_.bind(this);
        messagePort.addEventListener("message", this.onChannelMessageReceivedProc_, false);
        resolvePromise();
      }
    }, {
      key: "onChannelMessageReceived_",
      value: function onChannelMessageReceived_(event) {
        var message = getData(event);
        if (this.messages_[message["id"]] && message["isReply"]) {
          var existingMessage = this.messages_[message["id"]];
          delete this.messages_[message["id"]];
          var promiseResolver = existingMessage.promiseResolver;
          existingMessage.message = message["data"];
          if (this.debug_) {
            dev().fine(TAG, "Received reply for topic '%s': %s", message["topic"], message["data"]);
          }
          promiseResolver([message["data"], this.sendReply_.bind(this, message["id"], existingMessage["topic"])]);
        } else {
          var listeners = this.listeners_[message["topic"]];
          if (!listeners) {
            return;
          }
          if (this.debug_) {
            dev().fine(TAG, "Received new message for " + ("topic '" + message["topic"] + "': " + message["data"]));
          }
          for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            listener(message["data"], this.sendReply_.bind(this, message["id"], message["topic"]));
          }
        }
      }
    }, {
      key: "on",
      value: function on(topic, callback) {
        if (this.listeners_[topic]) {
          this.listeners_[topic].push(callback);
        } else {
          this.listeners_[topic] = [callback];
        }
      }
    }, {
      key: "off",
      value: function off(topic, callback) {
        if (callback) {
          var callbackIndex = this.listeners_[topic].indexOf(callback);
          if (callbackIndex !== -1) {
            this.listeners_[topic].splice(callbackIndex, 1);
          }
        } else {
          if (this.listeners_[topic]) {
            delete this.listeners_[topic];
          }
        }
      }
    }, {
      key: "sendReply_",
      value: function sendReply_(id, topic, data) {
        var _this3 = this;
        var payload = {
          id,
          topic,
          data,
          isReply: true
        };
        this.messagePort_.postMessage(payload);
        return new Promise(function(resolve) {
          _this3.messages_[payload.id] = {
            message: data,
            topic,
            promiseResolver: resolve
          };
        });
      }
    }, {
      key: "send",
      value: function send(topic, data) {
        var _this4 = this;
        var payload = {
          id: crypto.getRandomValues(new Uint8Array(10)).join(""),
          topic,
          data
        };
        if (this.debug_) {
          dev().fine(TAG, "Sending %s: %s", topic, data);
        }
        this.messagePort_.postMessage(payload);
        return new Promise(function(resolve) {
          _this4.messages_[payload.id] = {
            message: data,
            topic,
            promiseResolver: resolve
          };
        });
      }
    }], [{
      key: "Topics",
      get: function get() {
        return {
          CONNECT_HANDSHAKE: "topic-connect-handshake",
          NOTIFICATION_PERMISSION_STATE: "topic-notification-permission-state",
          SERVICE_WORKER_STATE: "topic-service-worker-state",
          SERVICE_WORKER_REGISTRATION: "topic-service-worker-registration",
          SERVICE_WORKER_QUERY: "topic-service-worker-query",
          STORAGE_GET: "topic-storage-get"
        };
      }
    }]);
    return WindowMessenger2;
  }();

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

  // extensions/amp-web-push/0.1/web-push-service.js
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
  function webPushServiceForDoc(element) {
    return getServicePromiseForDoc(element, SERVICE_TAG);
  }
  var WebPushService = /* @__PURE__ */ function() {
    function WebPushService2(ampdoc) {
      _classCallCheck7(this, WebPushService2);
      this.ampdoc = ampdoc;
      installStylesForDoc(ampdoc, CSS2, function() {
      }, false, TAG);
      this.config_ = {
        "helper-iframe-url": null,
        "permission-dialog-url": null,
        "service-worker-url": null,
        debug: null
      };
      this.debug_ = getMode().development;
      this.iframe_ = null;
      this.lastKnownPermission_ = null;
      this.frameMessenger_ = new WindowMessenger({
        debug: this.debug_
      });
      this.popupMessenger_ = null;
    }
    _createClass6(WebPushService2, [{
      key: "start",
      value: function start(configJson) {
        var _this = this;
        dev().fine(TAG, "amp-web-push extension starting up.");
        if (!this.environmentSupportsWebPush()) {
          user().warn(TAG, "Web push is not supported.");
          return Promise.reject("Web push is not supported");
        }
        this.initializeConfig(configJson);
        var iframeLoadPromise = this.installHelperFrame();
        iframeLoadPromise.then(function() {
          dev().fine(TAG, "Helper frame " + _this.config_["helper-iframe-url"] + " DOM loaded. Connecting to the frame via postMessage()...");
          return _this.frameMessenger_.connect(_this.iframe_.getDomElement().contentWindow, parseUrlDeprecated(_this.config_["helper-iframe-url"]).origin);
        }).then(function() {
          if (_this.isContinuingSubscriptionFromRedirect()) {
            _this.resumeSubscribingForPushNotifications_();
          } else {
            return _this.updateWidgetVisibilities();
          }
        });
        return iframeLoadPromise;
      }
    }, {
      key: "initializeConfig",
      value: function initializeConfig(configJson) {
        this.config_ = configJson;
        if (!this.config_) {
          return;
        }
      }
    }, {
      key: "installHelperFrame",
      value: function installHelperFrame() {
        var helperUrlHasQueryParams = this.config_["helper-iframe-url"].indexOf("?") !== -1;
        var helperUrlQueryParamPrefix = helperUrlHasQueryParams ? "&" : "?";
        var finalIframeUrl = "" + this.config_["helper-iframe-url"] + helperUrlQueryParamPrefix + ("parentOrigin=" + this.ampdoc.win.location.origin);
        this.iframe_ = new IFrameHost(this.ampdoc, finalIframeUrl);
        return this.iframe_.load();
      }
    }, {
      key: "isContinuingSubscriptionFromRedirect",
      value: function isContinuingSubscriptionFromRedirect() {
        var location = this.ampdoc.win.testLocation || this.ampdoc.win.location;
        return location.search.indexOf(WebPushService2.PERMISSION_POPUP_URL_FRAGMENT) !== -1;
      }
    }, {
      key: "removePermissionPopupUrlFragmentFromUrl",
      value: function removePermissionPopupUrlFragmentFromUrl(url) {
        var urlWithoutFragment = url.replace("?" + WebPushService2.PERMISSION_POPUP_URL_FRAGMENT, "");
        urlWithoutFragment = urlWithoutFragment.replace("&" + WebPushService2.PERMISSION_POPUP_URL_FRAGMENT, "");
        return urlWithoutFragment;
      }
    }, {
      key: "queryHelperFrame_",
      value: function queryHelperFrame_(messageTopic, message) {
        var _this2 = this;
        return this.iframe_.whenReady().then(function() {
          return _this2.frameMessenger_.send(messageTopic, message);
        }).then(function(result) {
          var replyPayload = result[0];
          if (replyPayload.success) {
            return replyPayload.result;
          } else {
            throw new Error("AMP page helper iframe query topic " + messageTopic + " " + ("and message " + message + " failed with: " + replyPayload.error));
          }
        });
      }
    }, {
      key: "queryServiceWorker_",
      value: function queryServiceWorker_(messageTopic, message) {
        return this.queryHelperFrame_(WindowMessenger.Topics.SERVICE_WORKER_QUERY, {
          topic: messageTopic,
          payload: message
        });
      }
    }, {
      key: "queryNotificationPermission",
      value: function queryNotificationPermission() {
        return this.queryHelperFrame_(WindowMessenger.Topics.NOTIFICATION_PERMISSION_STATE, null);
      }
    }, {
      key: "queryServiceWorkerState_",
      value: function queryServiceWorkerState_() {
        return this.queryHelperFrame_(WindowMessenger.Topics.SERVICE_WORKER_STATE, null);
      }
    }, {
      key: "registerServiceWorker",
      value: function registerServiceWorker() {
        var swUrl = this.config_["service-worker-url"];
        var swScope = this.config_["service-worker-scope"];
        return this.queryHelperFrame_(WindowMessenger.Topics.SERVICE_WORKER_REGISTRATION, {
          workerUrl: swUrl,
          registrationOptions: swScope ? {
            scope: swScope
          } : {}
        });
      }
    }, {
      key: "querySubscriptionStateRemotely",
      value: function querySubscriptionStateRemotely() {
        return this.queryServiceWorker_("amp-web-push-subscription-state", null);
      }
    }, {
      key: "subscribeForPushRemotely",
      value: function subscribeForPushRemotely() {
        return this.queryServiceWorker_("amp-web-push-subscribe", null);
      }
    }, {
      key: "unsubscribeFromPushRemotely",
      value: function unsubscribeFromPushRemotely() {
        return this.queryServiceWorker_("amp-web-push-unsubscribe", null);
      }
    }, {
      key: "isServiceWorkerActivated",
      value: function isServiceWorkerActivated() {
        var _this3 = this;
        var self2 = this;
        return this.queryServiceWorkerState_().then(function(serviceWorkerState) {
          var isControllingFrame = serviceWorkerState.isControllingFrame === true;
          var serviceWorkerHasCorrectUrl = _this3.isUrlSimilarForQueryParams(serviceWorkerState.url, self2.config_["service-worker-url"]);
          var serviceWorkerActivated = serviceWorkerState.state === "activated";
          return isControllingFrame && serviceWorkerHasCorrectUrl && serviceWorkerActivated;
        });
      }
    }, {
      key: "isUrlSimilarForQueryParams",
      value: function isUrlSimilarForQueryParams(originalUrlString, urlToTestString) {
        var originalUrl = parseUrlDeprecated(originalUrlString);
        var originalUrlQueryParams = parseQueryString(originalUrl.search);
        var urlToTest = parseUrlDeprecated(urlToTestString);
        var urlToTestQueryParams = parseQueryString(urlToTest.search);
        for (var originalKey in originalUrlQueryParams) {
          if (urlToTestQueryParams[originalKey] !== originalUrlQueryParams[originalKey]) {
            return false;
          }
        }
        return originalUrl.origin === urlToTest.origin && originalUrl.pathname === urlToTest.pathname;
      }
    }, {
      key: "setWidgetVisibilities",
      value: function setWidgetVisibilities(widgetCategoryName, isVisible) {
        var widgetDomElements = this.ampdoc.getRootNode().querySelectorAll(escapeCssSelectorIdent(WIDGET_TAG) + "[visibility=" + escapeCssSelectorIdent(widgetCategoryName) + "]");
        var invisibilityCssClassName = "amp-invisible";
        for (var i = 0; i < widgetDomElements.length; i++) {
          var widgetDomElement = widgetDomElements[i];
          if (isVisible) {
            widgetDomElement.classList.remove(invisibilityCssClassName);
          } else {
            widgetDomElement.classList.add(invisibilityCssClassName);
          }
        }
      }
    }, {
      key: "doesWidgetCategoryMarkupExist_",
      value: function doesWidgetCategoryMarkupExist_(widgetCategoryName) {
        var widgetDomElements = this.ampdoc.getRootNode().querySelectorAll(escapeCssSelectorIdent(WIDGET_TAG) + "[visibility=" + escapeCssSelectorIdent(widgetCategoryName) + "]");
        return widgetDomElements.length > 0;
      }
    }, {
      key: "getSubscriptionStateReplyVersion_",
      value: function getSubscriptionStateReplyVersion_(subscriptionStateReply) {
        if (typeof subscriptionStateReply === "boolean") {
          return 1;
        }
      }
    }, {
      key: "storeLastKnownPermission_",
      value: function storeLastKnownPermission_() {
        var _this4 = this;
        return this.queryNotificationPermission().then(function(permission) {
          _this4.lastKnownPermission_ = permission;
        });
      }
    }, {
      key: "updateWidgetVisibilities",
      value: function updateWidgetVisibilities() {
        var _this5 = this;
        return this.storeLastKnownPermission_().then(function() {
          return _this5.isQuerySupported_(WindowMessenger.Topics.STORAGE_GET);
        }).then(function(response) {
          var isSupported = response === true;
          if (isSupported) {
            return _this5.getCanonicalFrameStorageValue_(StorageKeys.NOTIFICATION_PERMISSION);
          } else {
            return Promise.resolve(NotificationPermission.DEFAULT);
          }
        }).then(function(canonicalNotificationPermission) {
          if (canonicalNotificationPermission === NotificationPermission.DENIED) {
            if (_this5.doesWidgetCategoryMarkupExist_(WebPushWidgetVisibilities.BLOCKED)) {
              _this5.updateWidgetVisibilitiesBlocked_();
            } else {
              _this5.updateWidgetVisibilitiesUnsubscribed_();
            }
          } else {
            return _this5.isServiceWorkerActivated().then(function(isServiceWorkerActivated) {
              if (isServiceWorkerActivated) {
                _this5.updateWidgetVisibilitiesServiceWorkerActivated_();
              } else {
                _this5.updateWidgetVisibilitiesUnsubscribed_();
              }
            });
          }
        });
      }
    }, {
      key: "updateWidgetVisibilitiesServiceWorkerActivated_",
      value: function updateWidgetVisibilitiesServiceWorkerActivated_() {
        var _this6 = this;
        return Services.timerFor(this.ampdoc.win).timeoutPromise(5e3, this.querySubscriptionStateRemotely().then(function(reply) {
          switch (_this6.getSubscriptionStateReplyVersion_(reply)) {
            case WebPushService2.AMP_VERSION_INITIAL:
              var isSubscribed = reply;
              if (isSubscribed) {
                _this6.setWidgetVisibilities(WebPushWidgetVisibilities.UNSUBSCRIBED, false);
                _this6.setWidgetVisibilities(WebPushWidgetVisibilities.SUBSCRIBED, true);
                _this6.setWidgetVisibilities(WebPushWidgetVisibilities.BLOCKED, false);
              } else {
                _this6.updateWidgetVisibilitiesUnsubscribed_();
              }
              break;
            default:
              throw user().createError("The controlling service worker replied to amp-web-push with an unexpected value.");
          }
        }), "The controlling service worker does not support amp-web-push.");
      }
    }, {
      key: "updateWidgetVisibilitiesUnsubscribed_",
      value: function updateWidgetVisibilitiesUnsubscribed_() {
        this.setWidgetVisibilities(WebPushWidgetVisibilities.UNSUBSCRIBED, true);
        this.setWidgetVisibilities(WebPushWidgetVisibilities.SUBSCRIBED, false);
        this.setWidgetVisibilities(WebPushWidgetVisibilities.BLOCKED, false);
      }
    }, {
      key: "updateWidgetVisibilitiesBlocked_",
      value: function updateWidgetVisibilitiesBlocked_() {
        this.setWidgetVisibilities(WebPushWidgetVisibilities.UNSUBSCRIBED, false);
        this.setWidgetVisibilities(WebPushWidgetVisibilities.SUBSCRIBED, false);
        this.setWidgetVisibilities(WebPushWidgetVisibilities.BLOCKED, true);
      }
    }, {
      key: "subscribe",
      value: function subscribe(onPopupClosed) {
        var _this7 = this;
        var promises = [];
        promises.push(this.registerServiceWorker());
        promises.push(new Promise(function(resolve) {
          switch (_this7.lastKnownPermission_) {
            case NotificationPermission.GRANTED:
              return _this7.onPermissionGrantedSubscribe_().then(function() {
                resolve();
              });
            default:
              var permissionDialogWindow = _this7.openPopupOrRedirect();
              _this7.checkPermissionDialogClosedInterval_(permissionDialogWindow, onPopupClosed);
              _this7.popupMessenger_ = new WindowMessenger({
                debug: _this7.debug_
              });
              _this7.popupMessenger_.listen([_this7.config_["permission-dialog-url"]]);
              _this7.onPermissionDialogInteracted().then(function(result) {
                return _this7.handlePermissionDialogInteraction(result);
              }).then(function() {
                resolve();
              });
          }
        }));
        return Promise.all(promises);
      }
    }, {
      key: "checkPermissionDialogClosedInterval_",
      value: function checkPermissionDialogClosedInterval_(permissionDialogWindow, onPopupClosed) {
        var _this8 = this;
        if (permissionDialogWindow && !permissionDialogWindow.closed) {
          var interval = this.ampdoc.win.setInterval(function() {
            if (permissionDialogWindow.closed) {
              onPopupClosed();
              _this8.ampdoc.win.clearInterval(interval);
            }
          }, 500);
        }
      }
    }, {
      key: "handlePermissionDialogInteraction",
      value: function handlePermissionDialogInteraction(result) {
        var permission = result[0];
        var reply = result[1];
        switch (permission) {
          case NotificationPermission.DENIED:
          case NotificationPermission.DEFAULT:
            reply({
              closeFrame: true
            });
            return this.updateWidgetVisibilities();
          case NotificationPermission.GRANTED:
            reply({
              closeFrame: true
            });
            this.onPermissionGrantedSubscribe_();
            break;
          default:
            throw new Error("Unexpected permission value:", permission);
        }
      }
    }, {
      key: "onPermissionGrantedSubscribe_",
      value: function onPermissionGrantedSubscribe_() {
        var _this9 = this;
        return this.subscribeForPushRemotely().then(function() {
          return _this9.updateWidgetVisibilities();
        });
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe() {
        var _this10 = this;
        return this.unsubscribeFromPushRemotely().then(function() {
          return _this10.updateWidgetVisibilities();
        });
      }
    }, {
      key: "isQuerySupported_",
      value: function isQuerySupported_(queryType) {
        return this.queryHelperFrame_(WindowMessenger.Topics.NOTIFICATION_PERMISSION_STATE, {
          isQueryTopicSupported: queryType
        });
      }
    }, {
      key: "getCanonicalFrameStorageValue_",
      value: function getCanonicalFrameStorageValue_(storageKey) {
        return this.queryHelperFrame_(WindowMessenger.Topics.STORAGE_GET, {
          key: storageKey
        });
      }
    }, {
      key: "onPermissionDialogInteracted",
      value: function onPermissionDialogInteracted() {
        var _this11 = this;
        return new Promise(function(resolve) {
          _this11.popupMessenger_.on(WindowMessenger.Topics.NOTIFICATION_PERMISSION_STATE, function(message, replyToFrame) {
            resolve([message, replyToFrame]);
          });
        });
      }
    }, {
      key: "openPopupOrRedirect",
      value: function openPopupOrRedirect() {
        var pageUrlHasQueryParams = this.ampdoc.win.location.href.indexOf("?") !== -1;
        var pageUrlQueryParamPrefix = pageUrlHasQueryParams ? "&" : "?";
        var returningPopupUrl = this.ampdoc.win.location.href + pageUrlQueryParamPrefix + WebPushService2.PERMISSION_POPUP_URL_FRAGMENT;
        var permissionDialogUrlHasQueryParams = this.config_["permission-dialog-url"].indexOf("?") !== -1;
        var permissionDialogUrlQueryParamPrefix = permissionDialogUrlHasQueryParams ? "&" : "?";
        var openingPopupUrl = this.config_["permission-dialog-url"] + permissionDialogUrlQueryParamPrefix + ("return=" + encodeURIComponent(returningPopupUrl));
        var d = WebPushService2.getPopupDimensions_();
        var sizing = "height=" + d.h + ",width=" + d.w + ",left=" + d.x + ",top=" + d.y;
        var options = sizing + ",resizable=yes,scrollbars=yes";
        return openWindowDialog(this.ampdoc.win, openingPopupUrl, "_blank", options);
      }
    }, {
      key: "resumeSubscribingForPushNotifications_",
      value: function resumeSubscribingForPushNotifications_() {
        var _this12 = this;
        this.ampdoc.win.history.replaceState(null, "", this.removePermissionPopupUrlFragmentFromUrl(this.ampdoc.win.location.href));
        this.queryNotificationPermission().then(function(permission) {
          switch (permission) {
            case NotificationPermission.DENIED:
            case NotificationPermission.DEFAULT:
              return _this12.updateWidgetVisibilities();
            case NotificationPermission.GRANTED:
              _this12.onPermissionGrantedSubscribe_();
              break;
            default:
              throw new Error("Unexpected permission value", permission);
          }
        });
      }
    }, {
      key: "environmentSupportsWebPush",
      value: function environmentSupportsWebPush() {
        return this.arePushRelatedApisSupported_() && this.isAmpPageHttps_();
      }
    }, {
      key: "arePushRelatedApisSupported_",
      value: function arePushRelatedApisSupported_() {
        return this.ampdoc.win.Notification !== void 0 && this.ampdoc.win.navigator.serviceWorker !== void 0 && this.ampdoc.win.PushManager !== void 0;
      }
    }, {
      key: "isAmpPageHttps_",
      value: function isAmpPageHttps_() {
        return this.ampdoc.win.location.protocol === "https:" || this.ampdoc.win.location.hostname === "localhost" || this.ampdoc.win.location.hostname === "127.0.0.1" || getMode().development || getMode().test;
      }
    }], [{
      key: "PERMISSION_POPUP_URL_FRAGMENT",
      get: function get() {
        return "amp-web-push-subscribing=yes";
      }
    }, {
      key: "AMP_VERSION_INITIAL",
      get: function get() {
        return 1;
      }
    }, {
      key: "getPopupDimensions_",
      value: function getPopupDimensions_() {
        var w = Math.floor(Math.min(700, screen.width * 0.9));
        var h = Math.floor(Math.min(450, screen.height * 0.9));
        var x = Math.floor((screen.width - w) / 2);
        var y = Math.floor((screen.height - h) / 2);
        return {
          w,
          h,
          x,
          y
        };
      }
    }]);
    return WebPushService2;
  }();

  // extensions/amp-web-push/0.1/amp-web-push-config.js
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
  var WebPushConfigAttributes = {
    HELPER_FRAME_URL: "helper-iframe-url",
    PERMISSION_DIALOG_URL: "permission-dialog-url",
    SERVICE_WORKER_URL: "service-worker-url",
    SERVICE_WORKER_SCOPE: "service-worker-scope"
  };
  var WebPushWidgetActions = {
    SUBSCRIBE: "subscribe",
    UNSUBSCRIBE: "unsubscribe"
  };
  var WebPushConfig = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(WebPushConfig2, _AMP$BaseElement);
    var _super = _createSuper2(WebPushConfig2);
    function WebPushConfig2(element) {
      _classCallCheck8(this, WebPushConfig2);
      return _super.call(this, element);
    }
    _createClass7(WebPushConfig2, [{
      key: "validate",
      value: function validate() {
        this.ensureSpecificElementId_();
        this.ensureUniqueElement_();
        var config = {
          "helper-iframe-url": null,
          "permission-dialog-url": null,
          "service-worker-url": null,
          "service-worker-scope": null
        };
        for (var attribute in WebPushConfigAttributes) {
          var value = WebPushConfigAttributes[attribute];
          userAssert(this.element.getAttribute(value) || value === "service-worker-scope", "The " + value + " attribute is required for <" + CONFIG_TAG + ">");
          config[value] = this.element.getAttribute(value);
        }
        if (!this.isValidHelperOrPermissionDialogUrl_(config["helper-iframe-url"])) {
          throw user().createError("<" + CONFIG_TAG + "> must have a valid helper-iframe-url attribute. It should begin with the https:// protocol and point to the provided lightweight template page provided for AMP messaging.");
        }
        if (!this.isValidHelperOrPermissionDialogUrl_(config["permission-dialog-url"])) {
          throw user().createError("<" + CONFIG_TAG + "> must have a valid permission-dialog-url attribute. It should begin with the https:// protocol and point to the provided template page for showing the permission prompt.");
        }
        if (parseUrlDeprecated(config["service-worker-url"]).protocol !== "https:") {
          throw user().createError("<" + CONFIG_TAG + "> must have a valid service-worker-url attribute. It should begin with the https:// protocol and point to the service worker JavaScript file to be installed.");
        }
        if (parseUrlDeprecated(config["service-worker-url"]).origin !== parseUrlDeprecated(config["permission-dialog-url"]).origin || parseUrlDeprecated(config["permission-dialog-url"]).origin !== parseUrlDeprecated(config["helper-iframe-url"]).origin) {
          throw user().createError("<" + CONFIG_TAG + "> URL attributes service-worker-url, permission-dialog-url, and helper-iframe-url must all share the same origin.");
        }
      }
    }, {
      key: "parseConfig",
      value: function parseConfig() {
        var config = {};
        for (var attribute in WebPushConfigAttributes) {
          var value = WebPushConfigAttributes[attribute];
          config[value] = this.element.getAttribute(value);
        }
        return config;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.validate();
        var config = this.parseConfig();
        webPushServiceForDoc(this.element).then(function(service) {
          service.start(config).catch(function() {
          });
        });
        this.registerAction(WebPushWidgetActions.SUBSCRIBE, this.onSubscribe_.bind(this));
        this.registerAction(WebPushWidgetActions.UNSUBSCRIBE, this.onUnsubscribe_.bind(this));
      }
    }, {
      key: "ensureSpecificElementId_",
      value: function ensureSpecificElementId_() {
        if (this.element.getAttribute("id") !== TAG) {
          throw user().createError("<" + CONFIG_TAG + "> must have an id attribute with value '" + TAG + "'.");
        }
      }
    }, {
      key: "ensureUniqueElement_",
      value: function ensureUniqueElement_() {
        var webPushConfigElements = this.getAmpDoc().getRootNode().querySelectorAll("#" + escapeCssSelectorIdent(CONFIG_TAG));
        if (webPushConfigElements.length > 1) {
          throw user().createError("Only one <" + CONFIG_TAG + "> element may exist on a page.");
        }
      }
    }, {
      key: "onSubscribe_",
      value: function onSubscribe_(invocation) {
        var _this = this;
        var widget = dev().assertElement(invocation.event.target);
        this.setWidgetDisabled_(widget, true);
        webPushServiceForDoc(this.element).then(function(service) {
          service.subscribe(function() {
            _this.setWidgetDisabled_(widget, false);
          }).then(function() {
            _this.setWidgetDisabled_(widget, false);
          });
        });
      }
    }, {
      key: "setWidgetDisabled_",
      value: function setWidgetDisabled_(widget, isDisabled) {
        widget.disabled = isDisabled;
      }
    }, {
      key: "onUnsubscribe_",
      value: function onUnsubscribe_(invocation) {
        var _this2 = this;
        var widget = dev().assertElement(invocation.event.target);
        this.setWidgetDisabled_(widget, true);
        webPushServiceForDoc(this.element).then(function(service) {
          service.unsubscribe().then(function() {
            _this2.setWidgetDisabled_(widget, false);
          });
        });
      }
    }, {
      key: "isValidHelperOrPermissionDialogUrl_",
      value: function isValidHelperOrPermissionDialogUrl_(url) {
        try {
          var parsedUrl = parseUrlDeprecated(url);
          var isNotRootUrl = parsedUrl.pathname.length > 1;
          var isSecureUrl = parsedUrl.protocol === "https:";
          return isSecureUrl && isNotRootUrl;
        } catch (e) {
          return false;
        }
      }
    }]);
    return WebPushConfig2;
  }(AMP.BaseElement);

  // extensions/amp-web-push/0.1/amp-web-push.js
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerServiceForDoc(SERVICE_TAG, WebPushService);
    AMP2.registerElement(CONFIG_TAG, WebPushConfig);
    AMP2.registerElement(WIDGET_TAG, WebPushWidget, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-web-push-0.1.max.js.map
