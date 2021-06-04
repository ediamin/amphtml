(self.AMP=self.AMP||[]).push({n:"amp-next-page",ev:"0.1",l:false,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };

  // build/amp-next-page-0.1.css.js
  var CSS2 = ".amp-next-page-default-separator{border-bottom:1px solid rgba(0,0,0,0.12)}.amp-next-page-links{border-top:1px solid rgba(0,0,0,0.12)}.amp-next-page-link{border-bottom:1px solid rgba(0,0,0,0.12)}.amp-next-page-text{color:#3c4043;font-size:17px}.i-amphtml-next-page-document{overflow-y:hidden}.i-amphtml-next-page-document>[i-amphtml-fixedid]{display:none}.i-amphtml-next-page-hidden{display:none!important}.i-amphtml-next-page{background:#fff}.i-amphtml-next-page>[separator]{display:none}.i-amphtml-reco-holder-article{display:block;overflow:auto;padding:10px 0;text-decoration:none}.i-amphtml-next-article-image{width:72px;height:72px;float:left;margin:0 10px;background-size:cover;background-position:50%}.i-amphtml-next-article-title{position:relative;margin:5px 30px 5px 0}\n/*# sourceURL=/extensions/amp-next-page/0.1/amp-next-page.css*/";

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
  function fromIterator(iterator) {
    var array = [];
    for (var e = iterator.next(); !e.done; e = iterator.next()) {
      array.push(e.value);
    }
    return array;
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
  function getValueForExpr(obj, expr) {
    if (expr == ".") {
      return obj;
    }
    var parts = expr.split(".");
    var value = obj;
    for (var _iterator = _createForOfIteratorHelperLoose(parts), _step; !(_step = _iterator()).done; ) {
      var part = _step.value;
      if (part && value && value[part] !== void 0 && typeof value == "object" && hasOwn(value, part)) {
        value = value[part];
        continue;
      }
      value = void 0;
      break;
    }
    return value;
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
  function isDisposable(service) {
    return typeof service.dispose == "function";
  }
  function assertDisposable(service) {
    devAssert(isDisposable(service), "required to implement Disposable");
    return service;
  }
  function disposeServicesForDoc(ampdoc) {
    disposeServicesInternal(ampdoc);
  }
  function disposeServicesInternal(holder) {
    var services = getServices(holder);
    var _loop = function _loop2(id2) {
      if (!Object.prototype.hasOwnProperty.call(services, id2)) {
        return "continue";
      }
      var serviceHolder = services[id2];
      if (serviceHolder.sharedInstance) {
        return "continue";
      }
      if (serviceHolder.obj) {
        disposeServiceInternal(id2, serviceHolder.obj);
      } else if (serviceHolder.promise) {
        serviceHolder.promise.then(function(instance) {
          return disposeServiceInternal(id2, instance);
        });
      }
    };
    for (var id in services) {
      var _ret = _loop(id);
      if (_ret === "continue")
        continue;
    }
  }
  function disposeServiceInternal(id, service) {
    if (!isDisposable(service)) {
      return;
    }
    try {
      assertDisposable(service).dispose();
    } catch (e) {
      dev().error("SERVICE", "failed to dispose service", id, e);
    }
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

  // src/experiments/index.js
  function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
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
        for (var _iterator = _createForOfIteratorHelperLoose2(optedInExperiments), _step; !(_step = _iterator()).done; ) {
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
      for (var _iterator2 = _createForOfIteratorHelperLoose2(allowedUrlOptIn), _step2; !(_step2 = _iterator2()).done; ) {
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
    for (var _iterator3 = _createForOfIteratorHelperLoose2(tokens), _step3; !(_step3 = _iterator3()).done; ) {
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
  function setInitialDisplay(el, value) {
    var style = el.style;
    devAssert(value !== "" && value !== "none", 'Initial display value must not be "none". Use toggle instead.');
    devAssert(!style["display"], "setInitialDisplay MUST NOT be used for resetting the display style. If you are looking for display:none toggling, use toggle instead.");
    style["display"] = value;
  }
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

  // src/core/assert/user.js
  function userAssert2(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return assert(USER_ERROR_SENTINEL, shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
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
  function escapeCssSelectorIdent(ident) {
    if (false) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
  }

  // src/core/dom/query.js
  function assertIsName(name) {
    devAssert2(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function scopedQuerySelectionFallback(root, selector) {
    var unique = "i-amphtml-scoped";
    root.classList.add(unique);
    var scopedSelector = prependSelectorsWith(selector, "." + unique);
    var elements = root.querySelectorAll(scopedSelector);
    root.classList.remove(unique);
    return elements;
  }
  function scopedQuerySelectorAll(root, selector) {
    if (isScopeSelectorSupported(root)) {
      return root.querySelectorAll(prependSelectorsWith(selector, ":scope"));
    }
    return scopedQuerySelectionFallback(root, selector);
  }
  function childElementsByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelectorAll(parent, "> [" + attr + "]");
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
  }
  function elementByTag(element, tagName) {
    assertIsName(tagName);
    return element.querySelector(tagName);
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
  function removeElement(element) {
    if (element.parentElement) {
      element.parentElement.removeChild(element);
    }
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function isJsonScriptTag(element) {
    return element.tagName == "SCRIPT" && element.hasAttribute("type") && element.getAttribute("type").toUpperCase() == "APPLICATION/JSON";
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
      value: function nextPageServiceForDoc2(elementOrAmpDoc) {
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

  // src/core/constants/visibility-state.js
  var VisibilityState = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/utils/dom-writer.js
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
  var DomWriterStreamer = /* @__PURE__ */ function() {
    function DomWriterStreamer2(win) {
      _classCallCheck3(this, DomWriterStreamer2);
      this.parser_ = win.document.implementation.createHTMLDocument("");
      this.parser_.open();
      this.vsync_ = Services.vsyncFor(win);
      this.boundMerge_ = this.merge_.bind(this);
      this.onBody_ = null;
      this.onBodyChunk_ = null;
      this.onEnd_ = null;
      this.mergeScheduled_ = false;
      this.success_ = resolvedPromise();
      this.eof_ = false;
      this.targetBody_ = null;
    }
    _createClass2(DomWriterStreamer2, [{
      key: "onBody",
      value: function onBody(callback) {
        this.onBody_ = callback;
      }
    }, {
      key: "onBodyChunk",
      value: function onBodyChunk(callback) {
        this.onBodyChunk_ = callback;
      }
    }, {
      key: "onEnd",
      value: function onEnd(callback) {
        this.onEnd_ = callback;
      }
    }, {
      key: "write",
      value: function write(chunk) {
        if (this.eof_) {
          throw new Error("closed already");
        }
        if (chunk) {
          this.parser_.write(chunk);
        }
        this.schedule_();
        return this.success_;
      }
    }, {
      key: "close",
      value: function close() {
        this.parser_.close();
        this.eof_ = true;
        this.schedule_();
        return this.success_;
      }
    }, {
      key: "abort",
      value: function abort(unusedReason) {
        throw new Error("Not implemented");
      }
    }, {
      key: "releaseLock",
      value: function releaseLock() {
        throw new Error("Not implemented");
      }
    }, {
      key: "closed",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "desiredSize",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "ready",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "schedule_",
      value: function schedule_() {
        devAssert2(this.onBody_ && this.onBodyChunk_ && this.onEnd_);
        if (!this.mergeScheduled_) {
          this.mergeScheduled_ = true;
          this.vsync_.mutate(this.boundMerge_);
        }
      }
    }, {
      key: "merge_",
      value: function merge_() {
        this.mergeScheduled_ = false;
        if (!this.targetBody_ && this.parser_.body) {
          this.targetBody_ = this.onBody_(this.parser_);
        }
        if (this.targetBody_) {
          var inputBody = dev().assertElement(this.parser_.body);
          var targetBody = devAssert2(this.targetBody_);
          var transferCount = 0;
          removeNoScriptElements(inputBody);
          while (inputBody.firstChild) {
            transferCount++;
            targetBody.appendChild(inputBody.firstChild);
          }
          if (transferCount > 0) {
            this.onBodyChunk_();
          }
        }
        if (this.eof_) {
          this.onEnd_();
        }
      }
    }]);
    return DomWriterStreamer2;
  }();
  var DomWriterBulk = /* @__PURE__ */ function() {
    function DomWriterBulk2(win) {
      _classCallCheck3(this, DomWriterBulk2);
      this.fullHtml_ = [];
      this.vsync_ = Services.vsyncFor(win);
      this.onBody_ = null;
      this.onBodyChunk_ = null;
      this.onEnd_ = null;
      this.success_ = resolvedPromise();
      this.eof_ = false;
    }
    _createClass2(DomWriterBulk2, [{
      key: "onBody",
      value: function onBody(callback) {
        this.onBody_ = callback;
      }
    }, {
      key: "onBodyChunk",
      value: function onBodyChunk(callback) {
        this.onBodyChunk_ = callback;
      }
    }, {
      key: "onEnd",
      value: function onEnd(callback) {
        this.onEnd_ = callback;
      }
    }, {
      key: "write",
      value: function write(chunk) {
        devAssert2(this.onBody_ && this.onBodyChunk_ && this.onEnd_);
        if (this.eof_) {
          throw new Error("closed already");
        }
        if (chunk) {
          this.fullHtml_.push(dev().assertString(chunk));
        }
        return this.success_;
      }
    }, {
      key: "close",
      value: function close() {
        var _this = this;
        devAssert2(this.onBody_ && this.onBodyChunk_ && this.onEnd_);
        this.eof_ = true;
        this.vsync_.mutate(function() {
          return _this.complete_();
        });
        return this.success_;
      }
    }, {
      key: "abort",
      value: function abort(unusedReason) {
        throw new Error("Not implemented");
      }
    }, {
      key: "releaseLock",
      value: function releaseLock() {
        throw new Error("Not implemented");
      }
    }, {
      key: "closed",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "desiredSize",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "ready",
      get: function get() {
        throw new Error("Not implemented");
      }
    }, {
      key: "complete_",
      value: function complete_() {
        var fullHtml = this.fullHtml_.join("");
        var doc = new DOMParser().parseFromString(fullHtml, "text/html");
        if (doc.body) {
          var inputBody = doc.body;
          var targetBody = this.onBody_(doc);
          var transferCount = 0;
          removeNoScriptElements(inputBody);
          while (inputBody.firstChild) {
            transferCount++;
            targetBody.appendChild(inputBody.firstChild);
          }
          if (transferCount > 0) {
            this.onBodyChunk_();
          }
        }
        this.onEnd_();
      }
    }]);
    return DomWriterBulk2;
  }();
  function removeNoScriptElements(parent) {
    var noscriptElements = childElementsByTag(parent, "noscript");
    iterateCursor(noscriptElements, function(element) {
      removeElement(element);
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
  function installCssTransformer(cssRoot, transformer) {
    cssRoot[TRANSFORMER_PROP] = transformer;
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

  // src/shadow-embed.js
  var CSS_SELECTOR_BEG_REGEX = /[^\.\-\_0-9a-zA-Z]/;
  var CSS_SELECTOR_END_REGEX = /[^\-\_0-9a-zA-Z]/;
  var shadowDomStreamingSupported;
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
  function importShadowBody(shadowRoot, body, deep) {
    var doc = shadowRoot.ownerDocument;
    var resultBody;
    if (isShadowCssSupported()) {
      resultBody = dev().assertElement(doc.importNode(body, deep));
    } else {
      resultBody = doc.createElement("amp-body");
      setInitialDisplay(resultBody, "block");
      for (var i = 0; i < body.attributes.length; i++) {
        resultBody.setAttribute(body.attributes[0].name, body.attributes[0].value);
      }
      if (deep) {
        for (var n = body.firstChild; !!n; n = n.nextSibling) {
          resultBody.appendChild(doc.importNode(n, true));
        }
      }
    }
    setStyle(resultBody, "position", "relative");
    var oldBody = shadowRoot["body"];
    if (oldBody) {
      shadowRoot.removeChild(oldBody);
    }
    shadowRoot.appendChild(resultBody);
    Object.defineProperty(shadowRoot, "body", {
      configurable: true,
      value: resultBody
    });
    return resultBody;
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
  function isShadowDomStreamingSupported(win) {
    if (shadowDomStreamingSupported === void 0) {
      shadowDomStreamingSupported = calcShadowDomStreamingSupported(win);
    }
    return shadowDomStreamingSupported;
  }
  function calcShadowDomStreamingSupported(win) {
    if (!win.document.implementation || typeof win.document.implementation.createHTMLDocument != "function") {
      return false;
    }
    if (Services.platformFor(win).isFirefox()) {
      return false;
    }
    return true;
  }
  function createShadowDomWriter(win) {
    if (isShadowDomStreamingSupported(win)) {
      return new DomWriterStreamer(win);
    }
    return new DomWriterBulk(win);
  }

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck4(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass3(LruCache2, [{
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
  var SOURCE_ORIGIN_PARAM = "__amp_source_origin";
  function getWinOrigin(win) {
    return win.origin || parseUrlDeprecated(win.location.href).origin;
  }
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
  function addParamToUrl(url, key, value, opt_addToFront) {
    var field = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    return appendEncodedParamStringToUrl(url, field, opt_addToFront);
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
  function resolveRelativeUrl(relativeUrlString, baseUrl) {
    if (typeof baseUrl == "string") {
      baseUrl = parseUrlDeprecated(baseUrl);
    }
    if (typeof URL == "function") {
      return new URL(relativeUrlString, baseUrl.href).toString();
    }
    return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
  }
  function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
    if (typeof baseUrl == "string") {
      baseUrl = parseUrlDeprecated(baseUrl);
    }
    relativeUrlString = relativeUrlString.replace(/\\/g, "/");
    var relativeUrl = parseUrlDeprecated(relativeUrlString);
    if (relativeUrlString.toLowerCase().startsWith(relativeUrl.protocol)) {
      return relativeUrl.href;
    }
    if (relativeUrlString.startsWith("//")) {
      return baseUrl.protocol + relativeUrlString;
    }
    if (relativeUrlString.startsWith("/")) {
      return baseUrl.origin + relativeUrlString;
    }
    return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, "/") + relativeUrlString;
  }
  function getCorsUrl(win, url) {
    checkCorsUrl(url);
    var sourceOrigin = getSourceOrigin(win.location.href);
    return addParamToUrl(url, SOURCE_ORIGIN_PARAM, sourceOrigin);
  }
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query = parseQueryString(parsedUrl.search);
    userAssert(!(SOURCE_ORIGIN_PARAM in query), "Source origin is not allowed in %s", url);
  }

  // src/multidoc-manager.js
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
  var TAG2 = "multidoc-manager";
  var MultidocManager = /* @__PURE__ */ function() {
    function MultidocManager2(win, ampdocService, extensions, timer) {
      _classCallCheck5(this, MultidocManager2);
      this.win = win;
      this.ampdocService_ = ampdocService;
      this.extensions_ = extensions;
      this.timer_ = timer;
      this.shadowRoots_ = [];
    }
    _createClass4(MultidocManager2, [{
      key: "attachShadowDoc_",
      value: function attachShadowDoc_(hostElement, url, params, builder) {
        var _this = this;
        params = params || Object.create(null);
        this.purgeShadowRoots_();
        setStyle(hostElement, "visibility", "hidden");
        var shadowRoot = createShadowRoot(hostElement);
        if (shadowRoot.AMP) {
          user().warn(TAG2, "Shadow doc wasn't previously closed");
          this.closeShadowRoot_(shadowRoot);
        }
        var amp = {};
        shadowRoot.AMP = amp;
        amp.url = url;
        var _parseUrlDeprecated = parseUrlDeprecated(url), origin = _parseUrlDeprecated.origin;
        var ampdoc = this.ampdocService_.installShadowDoc(url, shadowRoot, {
          params
        });
        amp.ampdoc = ampdoc;
        dev().fine(TAG2, "Attach to shadow root:", shadowRoot, ampdoc);
        installStylesForDoc(ampdoc, AMP.combinedCss, null, true);
        AMP.installAmpdocServices(ampdoc);
        var viewer = Services.viewerForDoc(ampdoc);
        amp["setVisibilityState"] = function(state) {
          ampdoc.overrideVisibilityState(state);
        };
        amp["postMessage"] = viewer.receiveMessage.bind(viewer);
        var onMessage;
        amp["onMessage"] = function(callback) {
          onMessage = callback;
        };
        viewer.setMessageDeliverer(function(eventType, data, awaitResponse) {
          if (eventType == "broadcast") {
            _this.broadcast_(data, shadowRoot);
            return awaitResponse ? resolvedPromise() : void 0;
          }
          if (onMessage) {
            return onMessage(eventType, data, awaitResponse);
          }
        }, origin);
        amp["close"] = function() {
          return _this.closeShadowRoot_(shadowRoot);
        };
        if (getMode().development) {
          amp.toggleRuntime = viewer.toggleRuntime.bind(viewer);
          amp.resources = Services.resourcesForDoc(ampdoc);
        }
        amp["getState"] = function(name) {
          return Services.bindForDocOrNull(shadowRoot).then(function(bind) {
            if (!bind) {
              return Promise.reject("amp-bind is not available in this document");
            }
            return bind.getState(name);
          });
        };
        amp["setState"] = function(state) {
          return Services.bindForDocOrNull(shadowRoot).then(function(bind) {
            if (!bind) {
              return Promise.reject("amp-bind is not available in this document");
            }
            if (typeof state === "string") {
              return bind.setStateWithExpression(state, {});
            } else if (isObject(state) || isArray(state)) {
              return bind.setStateWithObject(state);
            }
            return Promise.reject("Invalid state");
          });
        };
        builder(amp, shadowRoot, ampdoc).then(function() {
          ampdoc.setReady();
          ampdoc.signals().signal(CommonSignals.RENDER_START);
          setStyle(hostElement, "visibility", "visible");
        });
        if (!this.shadowRoots_.includes(shadowRoot)) {
          this.shadowRoots_.push(shadowRoot);
        }
        dev().fine(TAG2, "Shadow root initialization is done:", shadowRoot, ampdoc);
        return amp;
      }
    }, {
      key: "attachShadowDoc",
      value: function attachShadowDoc(hostElement, doc, url, opt_initParams) {
        var _this2 = this;
        user().assertString(url);
        dev().fine(TAG2, "Attach shadow doc:", doc);
        return this.attachShadowDoc_(hostElement, url, opt_initParams, function(amp, shadowRoot, ampdoc) {
          _this2.mergeShadowHead_(ampdoc, shadowRoot, doc);
          if (doc.body) {
            var body = importShadowBody(shadowRoot, doc.body, true);
            body.classList.add("amp-shadow");
            ampdoc.setBody(body);
          }
          setTimeout(function() {
            ampdoc.signals().signal(CommonSignals.RENDER_START);
            setStyle(hostElement, "visibility", "visible");
          }, 50);
          return resolvedPromise();
        });
      }
    }, {
      key: "attachShadowDocAsStream",
      value: function attachShadowDocAsStream(hostElement, url, opt_initParams) {
        var _this3 = this;
        user().assertString(url);
        dev().fine(TAG2, "Attach shadow doc as stream");
        return this.attachShadowDoc_(hostElement, url, opt_initParams, function(amp, shadowRoot, ampdoc) {
          var renderStarted = false;
          var writer = createShadowDomWriter(_this3.win);
          amp["writer"] = writer;
          writer.onBody(function(doc) {
            _this3.mergeShadowHead_(ampdoc, shadowRoot, doc);
            var body = importShadowBody(shadowRoot, dev().assertElement(doc.body), false);
            body.classList.add("amp-shadow");
            ampdoc.setBody(body);
            return body;
          });
          writer.onBodyChunk(function() {
            if (!renderStarted) {
              renderStarted = true;
              setTimeout(function() {
                ampdoc.signals().signal(CommonSignals.RENDER_START);
                setStyle(hostElement, "visibility", "visible");
              }, 50);
            }
          });
          return new Promise(function(resolve) {
            writer.onEnd(function() {
              resolve();
              amp.writer = null;
            });
          });
        });
      }
    }, {
      key: "mergeShadowHead_",
      value: function mergeShadowHead_(ampdoc, shadowRoot, doc) {
        if (doc.head) {
          shadowRoot.AMP.head = doc.head;
          var parentLinks = {};
          var links = childElementsByTag(dev().assertElement(this.win.document.head), "link");
          for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute("href");
            if (href) {
              parentLinks[href] = true;
            }
          }
          for (var n = doc.head.firstElementChild; n; n = n.nextElementSibling) {
            var _n = n, tagName = _n.tagName;
            var name = n.getAttribute("name");
            var rel = n.getAttribute("rel");
            switch (tagName) {
              case "TITLE":
                shadowRoot.AMP.title = n.textContent;
                dev().fine(TAG2, "- set title: ", shadowRoot.AMP.title);
                break;
              case "META":
                if (n.hasAttribute("charset")) {
                } else if (name == "viewport") {
                } else if (name) {
                  ampdoc.setMetaByName(name, n.getAttribute("content") || "");
                } else {
                  dev().warn(TAG2, "meta ignored: ", n);
                }
                break;
              case "LINK":
                var _href = n.getAttribute("href");
                if (rel == "canonical") {
                  shadowRoot.AMP.canonicalUrl = _href;
                  dev().fine(TAG2, "- set canonical: ", shadowRoot.AMP.canonicalUrl);
                } else if (rel == "stylesheet") {
                  if (parentLinks[_href]) {
                    dev().fine(TAG2, "- stylesheet already included: ", _href);
                    installStylesForDoc(ampdoc, '@import "' + _href + '"', null, false);
                  } else {
                    parentLinks[_href] = true;
                    var el = this.win.document.createElement("link");
                    el.setAttribute("rel", "stylesheet");
                    el.setAttribute("type", "text/css");
                    el.setAttribute("href", _href);
                    this.win.document.head.appendChild(el);
                    dev().fine(TAG2, "- import font to parent: ", _href, el);
                  }
                } else {
                  dev().fine(TAG2, "- ignore link rel=", rel);
                }
                break;
              case "STYLE":
                if (n.hasAttribute("amp-boilerplate")) {
                  dev().fine(TAG2, "- ignore boilerplate style: ", n);
                } else if (n.hasAttribute("amp-custom")) {
                  installStylesForDoc(ampdoc, n.textContent, null, false, "amp-custom");
                  dev().fine(TAG2, "- import style: ", n);
                } else if (n.hasAttribute("amp-keyframes")) {
                  installStylesForDoc(ampdoc, n.textContent, null, false, "amp-keyframes");
                  dev().fine(TAG2, "- import style: ", n);
                }
                break;
              case "SCRIPT":
                if (n.hasAttribute("src")) {
                  dev().fine(TAG2, "- src script: ", n);
                  var src = n.getAttribute("src");
                  var urlParts = parseExtensionUrl(src);
                  var customElement = n.getAttribute("custom-element");
                  var customTemplate = n.getAttribute("custom-template");
                  var extensionId = customElement || customTemplate;
                  if (!urlParts) {
                    dev().fine(TAG2, "- ignore runtime script: ", src);
                  } else if (extensionId) {
                    this.extensions_.installExtensionForDoc(ampdoc, extensionId, urlParts.extensionVersion);
                  } else if (!n.hasAttribute("data-amp-report-test")) {
                    user().error(TAG2, "- unknown script: ", n, src);
                  }
                } else {
                  var type = n.getAttribute("type") || "application/javascript";
                  if (type.indexOf("javascript") == -1) {
                    shadowRoot.appendChild(this.win.document.importNode(n, true));
                    dev().fine(TAG2, "- non-src script: ", n);
                  } else if (!n.hasAttribute("amp-onerror")) {
                    user().error(TAG2, "- unallowed inline javascript: ", n);
                  }
                }
                break;
              case "NOSCRIPT":
                break;
              default:
                user().error(TAG2, "- UNKNOWN head element:", n);
                break;
            }
          }
        }
        ampdoc.setExtensionsKnown();
      }
    }, {
      key: "broadcast_",
      value: function broadcast_(data, sender) {
        var _this4 = this;
        this.purgeShadowRoots_();
        this.shadowRoots_.forEach(function(shadowRoot) {
          if (shadowRoot == sender) {
            return;
          }
          var viewer = Services.viewerForDoc(shadowRoot.AMP.ampdoc);
          _this4.timer_.delay(function() {
            viewer.receiveMessage("broadcast", data, false);
          }, 0);
        });
      }
    }, {
      key: "closeShadowRoot_",
      value: function closeShadowRoot_(shadowRoot) {
        this.removeShadowRoot_(shadowRoot);
        var amp = shadowRoot.AMP;
        delete shadowRoot.AMP;
        var ampdoc = amp.ampdoc;
        ampdoc.overrideVisibilityState(VisibilityState.INACTIVE);
        disposeServicesForDoc(ampdoc);
        return this.timer_.timeoutPromise(15, new this.win.Promise(function(resolve) {
          getServicePromiseOrNullForDoc(ampdoc, "resources").then(function(resources) {
            if (resources) {
              resources.onNextPass(resolve);
            } else {
              resolve();
            }
          });
        }), "Timeout reached waiting for visibility state change callback").catch(function(error) {
          user().info(TAG2, error);
        });
      }
    }, {
      key: "removeShadowRoot_",
      value: function removeShadowRoot_(shadowRoot) {
        var index = this.shadowRoots_.indexOf(shadowRoot);
        if (index != -1) {
          this.shadowRoots_.splice(index, 1);
        }
      }
    }, {
      key: "closeShadowRootAsync_",
      value: function closeShadowRootAsync_(shadowRoot) {
        var _this5 = this;
        this.timer_.delay(function() {
          _this5.closeShadowRoot_(shadowRoot);
        }, 0);
      }
    }, {
      key: "purgeShadowRoots_",
      value: function purgeShadowRoots_() {
        var _this6 = this;
        this.shadowRoots_.forEach(function(shadowRoot) {
          if (!shadowRoot.host || !isConnectedNode(shadowRoot.host)) {
            user().warn(TAG2, "Shadow doc wasn't previously closed");
            _this6.removeShadowRoot_(shadowRoot);
            _this6.closeShadowRootAsync_(shadowRoot);
          }
        });
      }
    }]);
    return MultidocManager2;
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
  var PositionObserverFidelity = {
    HIGH: 1,
    LOW: 0
  };
  var LOW_FIDELITY_FRAME_COUNT = 4;
  var PositionObserverWorker = /* @__PURE__ */ function() {
    function PositionObserverWorker2(ampdoc, element, fidelity, handler) {
      _classCallCheck6(this, PositionObserverWorker2);
      this.element = element;
      this.handler_ = handler;
      this.fidelity = fidelity;
      this.turn = fidelity == PositionObserverFidelity.LOW ? Math.floor(Math.random() * LOW_FIDELITY_FRAME_COUNT) : 0;
      this.prevPosition_ = null;
      this.viewport_ = Services.viewportForDoc(ampdoc);
    }
    _createClass5(PositionObserverWorker2, [{
      key: "trigger_",
      value: function trigger_(position) {
        var prevPos = this.prevPosition_;
        if (prevPos && layoutRectEquals(prevPos.positionRect, position.positionRect) && layoutRectEquals(prevPos.viewportRect, position.viewportRect)) {
          return;
        }
        devAssert(position.positionRect, "PositionObserver should always trigger entry with clientRect");
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

  // src/service/position-observer/position-observer-impl.js
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
  var TAG3 = "POSITION_OBSERVER";
  var SCROLL_TIMEOUT = 500;
  var PositionObserver = /* @__PURE__ */ function() {
    function PositionObserver2(ampdoc) {
      var _this = this;
      _classCallCheck7(this, PositionObserver2);
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
    _createClass6(PositionObserver2, [{
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
        dev().error(TAG3, "cannot unobserve unobserved element");
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

  // extensions/amp-next-page/0.1/next-page-service.js
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
  var SEPARATOR_RECOS = 3;
  var MAX_ARTICLES = 2;
  var PRERENDER_VIEWPORT_COUNT = 3;
  var TAG4 = "amp-next-page";
  var NextPageService = /* @__PURE__ */ function() {
    function NextPageService2() {
      _classCallCheck8(this, NextPageService2);
      this.win_ = null;
      this.element_ = null;
      this.xhr_ = null;
      this.config_ = null;
      this.hideSelector_;
      this.separator_ = null;
      this.mutator_ = null;
      this.multidocManager_ = null;
      this.nextArticle_ = 0;
      this.documentQueued_ = false;
      this.navigation_ = null;
      this.viewport_ = null;
      this.positionObserver_ = null;
      this.documentRefs_ = [];
      this.activeDocumentRef_ = null;
      this.appendPageHandler_ = function() {
      };
      this.urlService_ = null;
      this.origin_ = "";
      this.history_ = null;
    }
    _createClass7(NextPageService2, [{
      key: "isActive",
      value: function isActive() {
        return this.config_ !== null;
      }
    }, {
      key: "register",
      value: function register(element, config, separator) {
        var _this = this;
        if (this.isActive()) {
          return;
        }
        var ampDoc = getAmpdoc(element);
        var win = ampDoc.win;
        this.config_ = config;
        this.win_ = win;
        this.separator_ = separator || this.createDefaultSeparator_();
        this.element_ = element;
        this.xhr_ = Services.xhrFor(win);
        if (this.config_.hideSelectors) {
          this.hideSelector_ = this.config_.hideSelectors.join(",");
        }
        this.navigation_ = Services.navigationForDoc(ampDoc);
        this.viewport_ = Services.viewportForDoc(ampDoc);
        this.mutator_ = Services.mutatorForDoc(ampDoc);
        this.multidocManager_ = new MultidocManager(win, Services.ampdocServiceFor(win), Services.extensionsFor(win), Services.timerFor(win));
        this.urlService_ = Services.urlForDoc(dev().assertElement(this.element_));
        this.origin_ = this.urlService_.parse(ampDoc.getUrl()).origin;
        this.history_ = Services.historyForDoc(ampDoc);
        installPositionObserverServiceForDoc(ampDoc);
        this.positionObserver_ = Services.positionObserverForDoc(element);
        var _Services$documentInf = Services.documentInfoForDoc(ampDoc), canonicalUrl = _Services$documentInf.canonicalUrl;
        var documentRef = createDocumentRef(win.document.location.href, win.document.title, canonicalUrl);
        var amp = {
          ampdoc: ampDoc,
          url: win.document.location.href,
          title: win.document.title,
          canonicalUrl
        };
        documentRef.amp = amp;
        this.documentRefs_.push(documentRef);
        this.activeDocumentRef_ = this.documentRefs_[0];
        this.viewport_.onScroll(function() {
          return _this.scrollHandler_();
        });
        this.viewport_.onResize(function() {
          return _this.scrollHandler_();
        });
        this.scrollHandler_();
      }
    }, {
      key: "setAppendPageHandler",
      value: function setAppendPageHandler(handler) {
        this.appendPageHandler_ = handler;
      }
    }, {
      key: "attachShadowDoc_",
      value: function attachShadowDoc_(shadowRoot, doc) {
        if (this.hideSelector_) {
          var elements = doc.querySelectorAll(this.hideSelector_);
          for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("i-amphtml-next-page-hidden");
          }
        }
        var analytics = doc.querySelectorAll("amp-analytics");
        for (var _i = 0; _i < analytics.length; _i++) {
          var item = analytics[_i];
          removeElement(item);
        }
        var amp = this.multidocManager_.attachShadowDoc(shadowRoot, doc, "", {
          visibilityState: VisibilityState.PRERENDER
        });
        var ampdoc = devAssert(amp.ampdoc);
        installStylesForDoc(ampdoc, CSS2, null, false, TAG4);
        var body = ampdoc.getBody();
        body.classList.add("i-amphtml-next-page-document");
        return amp;
      }
    }, {
      key: "createMeasurer_",
      value: function createMeasurer_() {
        var measurer = this.win_.document.createElement("div");
        measurer.classList.add("i-amphtml-next-page-measurer");
        return measurer;
      }
    }, {
      key: "createDefaultSeparator_",
      value: function createDefaultSeparator_() {
        var separator = this.win_.document.createElement("div");
        separator.classList.add("amp-next-page-default-separator");
        return separator;
      }
    }, {
      key: "appendNextArticle_",
      value: function appendNextArticle_() {
        var _this2 = this;
        if (this.nextArticle_ < this.config_.pages.length) {
          var next = this.config_.pages[this.nextArticle_];
          var documentRef = createDocumentRef(next.ampUrl);
          this.documentRefs_.push(documentRef);
          var container = this.win_.document.createElement("div");
          var measurer = this.createMeasurer_();
          container.appendChild(measurer);
          var separator = this.separator_.cloneNode(true);
          separator.removeAttribute("separator");
          container.appendChild(separator);
          var articleLinks = this.createArticleLinks_(this.nextArticle_);
          container.appendChild(articleLinks);
          documentRef.recUnit.el = articleLinks;
          var shadowRoot = this.win_.document.createElement("div");
          container.appendChild(shadowRoot);
          var page = this.nextArticle_;
          this.appendPageHandler_(container).then(function() {
            _this2.positionObserver_.observe(measurer, PositionObserverFidelity.LOW, function(position) {
              return _this2.positionUpdate_(page, position);
            });
            _this2.positionObserver_.observe(articleLinks, PositionObserverFidelity.LOW, function(unused) {
              return _this2.articleLinksPositionUpdate_(documentRef);
            });
          });
          if (this.nextArticle_ >= MAX_ARTICLES) {
            return;
          }
          this.nextArticle_++;
          this.xhr_.fetch(next.ampUrl, {
            ampCors: false
          }).then(function(response) {
            documentRef.ampUrl = response.url;
            var url = _this2.urlService_.parse(response.url);
            userAssert(url.origin === _this2.origin_, "ampUrl resolved to a different origin from the origin of the current document");
            return response.text();
          }).then(function(html) {
            var doc = _this2.win_.document.implementation.createHTMLDocument("");
            doc.open();
            doc.write(html);
            doc.close();
            return doc;
          }).then(function(doc) {
            return new Promise(function(resolve, reject) {
              if (documentRef.cancelled) {
                resolve();
                return;
              }
              if (documentRef.recUnit.isObserving) {
                _this2.positionObserver_.unobserve(articleLinks);
                documentRef.recUnit.isObserving = true;
              }
              _this2.mutator_.mutateElement(container, function() {
                try {
                  documentRef.amp = _this2.attachShadowDoc_(shadowRoot, doc);
                  toggle(dev().assertElement(documentRef.recUnit.el), false);
                  _this2.documentQueued_ = false;
                  resolve();
                } catch (e) {
                  reject(e);
                }
              });
            });
          }, function(e) {
            return user().error(TAG4, "failed to fetch %s", next.ampUrl, e);
          }).catch(function(e) {
            return dev().error(TAG4, "failed to attach shadow document for %s", next.ampUrl, e);
          }).then(function() {
            return _this2.scrollHandler_();
          });
        }
      }
    }, {
      key: "createArticleLinks_",
      value: function createArticleLinks_(nextPage) {
        var _this3 = this;
        var doc = this.win_.document;
        var currentArticle = nextPage - 1;
        var article = nextPage;
        var currentAmpUrl = "";
        if (nextPage > 0) {
          currentAmpUrl = this.documentRefs_[currentArticle].ampUrl;
        }
        var element = doc.createElement("div");
        element.classList.add("amp-next-page-links");
        var _loop = function _loop2() {
          var next = _this3.config_.pages[article];
          article++;
          var articleHolder = doc.createElement("a");
          articleHolder.href = next.ampUrl;
          articleHolder.classList.add("i-amphtml-reco-holder-article", "amp-next-page-link");
          articleHolder.addEventListener("click", function(e) {
            _this3.triggerAnalyticsEvent_("amp-next-page-click", next.ampUrl, currentAmpUrl);
            var a2a = _this3.navigation_.navigateToAmpUrl(next.ampUrl, "content-discovery");
            if (a2a) {
              e.preventDefault();
            }
          });
          var imageElement = doc.createElement("div");
          imageElement.classList.add("i-amphtml-next-article-image", "amp-next-page-image");
          setStyle(imageElement, "background-image", "url(" + next.image + ")");
          articleHolder.appendChild(imageElement);
          var titleElement = doc.createElement("div");
          titleElement.classList.add("i-amphtml-next-article-title", "amp-next-page-text");
          titleElement.textContent = next.title;
          articleHolder.appendChild(titleElement);
          element.appendChild(articleHolder);
        };
        while (article < this.config_.pages.length && article - nextPage < SEPARATOR_RECOS) {
          _loop();
        }
        return element;
      }
    }, {
      key: "scrollHandler_",
      value: function scrollHandler_() {
        var _this4 = this;
        if (this.documentQueued_) {
          return;
        }
        var viewportSize = this.viewport_.getSize();
        var viewportBox = layoutRectLtwh(0, 0, viewportSize.width, viewportSize.height);
        this.viewport_.getClientRectAsync(dev().assertElement(this.element_)).then(function(elementBox) {
          if (_this4.documentQueued_) {
            return;
          }
          var prerenderHeight = PRERENDER_VIEWPORT_COUNT * viewportSize.height;
          if (elementBox.bottom - viewportBox.bottom < prerenderHeight) {
            _this4.documentQueued_ = true;
            _this4.appendNextArticle_();
          }
        });
      }
    }, {
      key: "positionUpdate_",
      value: function positionUpdate_(i, position) {
        if (!position || position.positionRect !== null) {
          return;
        }
        var ref = this.documentRefs_[i];
        var analyticsEvent = "";
        switch (position.relativePos) {
          case "top":
            ref = this.documentRefs_[i + 1];
            analyticsEvent = "amp-next-page-scroll";
            break;
          case "bottom":
            analyticsEvent = "amp-next-page-scroll-back";
            break;
          default:
            break;
        }
        if (ref && ref.amp) {
          this.triggerAnalyticsEvent_(analyticsEvent, ref.ampUrl, this.activeDocumentRef_.ampUrl);
          this.setActiveDocument_(ref);
        }
      }
    }, {
      key: "articleLinksPositionUpdate_",
      value: function articleLinksPositionUpdate_(documentRef) {
        documentRef.cancelled = true;
        if (documentRef.recUnit.isObserving) {
          this.positionObserver_.unobserve(dev().assertElement(documentRef.recUnit.el));
          documentRef.recUnit.isObserving = false;
        }
      }
    }, {
      key: "setActiveDocument_",
      value: function setActiveDocument_(ref) {
        var _this5 = this;
        this.documentRefs_.forEach(function(docRef) {
          var amp = docRef.amp;
          if (docRef === ref) {
            _this5.win_.document.title = amp.title || "";
            _this5.activeDocumentRef_ = docRef;
            _this5.setActiveDocumentInHistory_(docRef);
            _this5.setDocumentVisibility_(docRef, VisibilityState.VISIBLE);
          } else {
            _this5.setDocumentVisibility_(docRef, VisibilityState.HIDDEN);
          }
        });
      }
    }, {
      key: "setDocumentVisibility_",
      value: function setDocumentVisibility_(ref, visibilityState) {
        if (ref === this.documentRefs_[0]) {
          return;
        }
        var ampDoc = ref.amp && ref.amp.ampdoc;
        if (!ampDoc) {
          return;
        }
        if (!ampDoc.hasBeenVisible() && visibilityState == VisibilityState.HIDDEN) {
          return;
        }
        ref.amp.setVisibilityState(visibilityState);
      }
    }, {
      key: "setActiveDocumentInHistory_",
      value: function setActiveDocumentInHistory_(documentRef) {
        var _documentRef$amp = documentRef.amp, canonicalUrl = _documentRef$amp.canonicalUrl, title = _documentRef$amp.title;
        var _this$urlService_$par = this.urlService_.parse(documentRef.ampUrl), pathname = _this$urlService_$par.pathname, search = _this$urlService_$par.search;
        this.history_.replace({
          title,
          url: pathname + search,
          canonicalUrl
        });
      }
    }, {
      key: "triggerAnalyticsEvent_",
      value: function triggerAnalyticsEvent_(eventType, toURL, fromURL) {
        fromURL = fromURL || "";
        var vars = dict({
          "toURL": toURL,
          "fromURL": fromURL
        });
        triggerAnalyticsEvent(dev().assertElement(this.element_), eventType, vars);
      }
    }]);
    return NextPageService2;
  }();
  function createDocumentRef(ampUrl, title, canonicalUrl) {
    var amp = title || canonicalUrl ? {
      title,
      canonicalUrl
    } : null;
    return {
      ampUrl,
      amp,
      recUnit: {
        el: null,
        isObserving: false
      },
      cancelled: false
    };
  }

  // src/batched-json.js
  var UrlReplacementPolicy = {
    NONE: 0,
    OPT_IN: 1,
    ALL: 2
  };
  function batchFetchJsonFor(ampdoc, element, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$expr = _options.expr, expr = _options$expr === void 0 ? "." : _options$expr, _options$urlReplaceme = _options.urlReplacement, urlReplacement = _options$urlReplaceme === void 0 ? UrlReplacementPolicy.NONE : _options$urlReplaceme, _options$refresh = _options.refresh, refresh = _options$refresh === void 0 ? false : _options$refresh, _options$xssiPrefix = _options.xssiPrefix, xssiPrefix = _options$xssiPrefix === void 0 ? void 0 : _options$xssiPrefix;
    assertHttpsUrl(element.getAttribute("src"), element);
    var xhr = Services.batchedXhrFor(ampdoc.win);
    return requestForBatchFetch(element, urlReplacement, refresh).then(function(data) {
      return xhr.fetchJson(data.xhrUrl, data.fetchOpt);
    }).then(function(res) {
      return Services.xhrFor(ampdoc.win).xssiJson(res, xssiPrefix);
    }).then(function(data) {
      if (data == null) {
        throw new Error("Response is undefined.");
      }
      return getValueForExpr(data, expr || ".");
    }).catch(function(err) {
      throw user().createError("failed fetching JSON data", err);
    });
  }
  function requestForBatchFetch(element, replacement, refresh) {
    var url = element.getAttribute("src");
    var urlReplacements = Services.urlReplacementsForDoc(element);
    var promise = replacement >= UrlReplacementPolicy.OPT_IN ? urlReplacements.expandUrlAsync(url) : Promise.resolve(url);
    return promise.then(function(xhrUrl) {
      if (replacement == UrlReplacementPolicy.OPT_IN) {
        var invalid = urlReplacements.collectDisallowedVarsSync(element);
        if (invalid.length > 0) {
          throw user().createError("URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. " + ('Please add data-amp-replace="' + invalid.join(" ") + '" to the ') + ("<" + element.tagName + "> element. See https://bit.ly/amp-var-subs."));
        }
      }
      var fetchOpt = {};
      if (element.hasAttribute("credentials")) {
        fetchOpt.credentials = element.getAttribute("credentials");
      }
      if (refresh) {
        fetchOpt.cache = "reload";
      }
      return {
        "xhrUrl": xhrUrl,
        "fetchOpt": fetchOpt
      };
    });
  }

  // extensions/amp-next-page/0.1/config.js
  var ADSENSE_REC_ORIGIN = "https://googleads.g.doubleclick.net";
  function assertConfig(context, config, documentUrl) {
    userAssert(config, "amp-next-page config must be specified");
    userAssert(isArray(config.pages), "pages must be an array");
    assertRecos(context, config.pages, documentUrl);
    if ("hideSelectors" in config) {
      userAssert(isArray(config["hideSelectors"]), "amp-next-page hideSelectors should be an array");
      assertSelectors(config["hideSelectors"]);
    }
    return config;
  }
  function assertRecos(context, recos, documentUrl) {
    recos.forEach(function(reco) {
      return assertReco(context, reco, documentUrl);
    });
  }
  var BANNED_SELECTOR_PATTERNS = [/(^|\W)i-amphtml-/];
  function assertSelectors(selectors) {
    selectors.forEach(function(selector) {
      BANNED_SELECTOR_PATTERNS.forEach(function(pattern) {
        user().assertString(selector, "amp-next-page hideSelector value should be a string");
        userAssert(!pattern.test(selector), "amp-next-page hideSelector %s not allowed", selector);
      });
    });
  }
  function assertReco(context, reco, documentUrl) {
    user().assertString(reco.ampUrl, "ampUrl must be a string");
    var base = getSourceUrl(documentUrl);
    reco.ampUrl = resolveRelativeUrl(reco.ampUrl, base);
    var urlService = Services.urlForDoc(context);
    var url = urlService.parse(reco.ampUrl);
    var _urlService$parse = urlService.parse(documentUrl), origin = _urlService$parse.origin;
    var sourceOrigin = getSourceOrigin(documentUrl);
    userAssert(url.origin === origin || url.origin === sourceOrigin || isValidAdSenseURL(context, url, origin), "pages must be from the same origin as the current document");
    user().assertString(reco.image, "image must be a string");
    user().assertString(reco.title, "title must be a string");
    if (sourceOrigin !== origin && url.origin === sourceOrigin) {
      reco.ampUrl = origin + "/c/" + (url.protocol === "https:" ? "s/" : "") + encodeURIComponent(url.host) + url.pathname + (url.search || "") + (url.hash || "");
    }
  }
  function isValidAdSenseURL(context, url, origin) {
    var matches2 = url.search.match(/adurl=(.*)(?:&|$)/);
    if (!matches2) {
      return false;
    }
    var urlService = Services.urlForDoc(context);
    var targetUrl = urlService.parse(matches2[1]);
    return url.origin === ADSENSE_REC_ORIGIN && targetUrl.origin === origin;
  }

  // src/form-data-wrapper.js
  function isFormDataWrapper(o) {
    return !!o && typeof o.getFormData == "function";
  }

  // src/utils/xhr-utils.js
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
  var allowedMethods_ = ["GET", "POST"];
  function toStructuredCloneable(input, init) {
    var newInit = _extends({}, init);
    if (isFormDataWrapper(init.body)) {
      var wrapper = init.body;
      newInit.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
      newInit.body = fromIterator(wrapper.entries());
    }
    return {
      input,
      init: newInit
    };
  }
  function fromStructuredCloneable(response, responseType) {
    userAssert2(isObject(response), "Object expected: %s", response);
    var isDocumentType = responseType == "document";
    if (!isDocumentType) {
      return new Response(response["body"], response["init"]);
    }
    var lowercasedHeaders = map();
    var data = {
      status: 200,
      statusText: "OK",
      getResponseHeader: function getResponseHeader(name) {
        return lowercasedHeaders[String(name).toLowerCase()] || null;
      }
    };
    if (response["init"]) {
      var init = response["init"];
      if (isArray(init.headers)) {
        init.headers.forEach(function(entry) {
          var headerName = entry[0];
          var headerValue = entry[1];
          lowercasedHeaders[String(headerName).toLowerCase()] = String(headerValue);
        });
      }
      if (init.status) {
        data.status = parseInt(init.status, 10);
      }
      if (init.statusText) {
        data.statusText = String(init.statusText);
      }
    }
    return new Response(response["body"] ? String(response["body"]) : "", data);
  }
  function getViewerInterceptResponse(win, ampdocSingle, input, init) {
    if (!ampdocSingle) {
      return resolvedPromise();
    }
    var whenUnblocked = init.prerenderSafe ? resolvedPromise() : ampdocSingle.whenFirstVisible();
    var viewer = Services.viewerForDoc(ampdocSingle);
    var urlIsProxy = isProxyOrigin(input);
    var viewerCanIntercept = viewer.hasCapability("xhrInterceptor");
    var interceptorDisabledForLocalDev = init.bypassInterceptorForDev && getMode(win).localDev;
    if (urlIsProxy || !viewerCanIntercept || interceptorDisabledForLocalDev) {
      return whenUnblocked;
    }
    var htmlElement = ampdocSingle.getRootNode().documentElement;
    var docOptedIn = htmlElement.hasAttribute("allow-xhr-interception");
    if (!docOptedIn) {
      return whenUnblocked;
    }
    return whenUnblocked.then(function() {
      return viewer.isTrustedViewer();
    }).then(function(viewerTrusted) {
      if (!(viewerTrusted || getMode(win).localDev || isExperimentOn(win, "untrusted-xhr-interception"))) {
        return;
      }
      var messagePayload = dict({
        "originalRequest": toStructuredCloneable(input, init)
      });
      return viewer.sendMessageAwaitResponse("xhr", messagePayload).then(function(response) {
        return fromStructuredCloneable(response, init.responseType);
      });
    });
  }
  function setupInput(win, input, init) {
    devAssert2(typeof input == "string", "Only URL supported: %s", input);
    if (init.ampCors !== false) {
      input = getCorsUrl(win, input);
    }
    return input;
  }
  function setupInit(opt_init, opt_accept) {
    var init = opt_init || {};
    var creds = init.credentials;
    devAssert2(creds === void 0 || creds == "include" || creds == "omit", "Only credentials=include|omit support: %s", creds);
    init.method = normalizeMethod_(init.method);
    init.headers = init.headers || dict({});
    if (opt_accept) {
      init.headers["Accept"] = opt_accept;
    }
    devAssert2(init.body !== null, "fetch `body` can not be `null`");
    return init;
  }
  function setupAMPCors(win, input, init) {
    init = init || {};
    var currentOrigin = getWinOrigin(win);
    var targetOrigin = parseUrlDeprecated(input).origin;
    if (currentOrigin == targetOrigin) {
      init["headers"] = init["headers"] || {};
      init["headers"]["AMP-Same-Origin"] = "true";
    }
    return init;
  }
  function normalizeMethod_(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    devAssert2(allowedMethods_.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods_.join(", "), method);
    return method;
  }
  function isRetriable(status) {
    return status == 415 || status >= 500 && status < 600;
  }
  function assertSuccess(response) {
    return new Promise(function(resolve) {
      if (response.ok) {
        return resolve(response);
      }
      var status = response.status;
      var err = user().createError("HTTP error " + status);
      err["retriable"] = isRetriable(status);
      err["response"] = response;
      throw err;
    });
  }

  // src/document-fetcher.js
  function fetchDocument(win, input, opt_init) {
    var init = setupInit(opt_init, "text/html");
    init = setupAMPCors(win, input, init);
    input = setupInput(win, input, init);
    var ampdocService = Services.ampdocServiceFor(win);
    var ampdocSingle = ampdocService.isSingleDoc() ? ampdocService.getSingleDoc() : null;
    init.responseType = "document";
    return getViewerInterceptResponse(win, ampdocSingle, input, init).then(function(interceptorResponse) {
      if (interceptorResponse) {
        return interceptorResponse.text().then(function(body) {
          return new DOMParser().parseFromString(body, "text/html");
        });
      }
      return xhrRequest(input, init).then(function(resp) {
        var xhr = resp.xhr;
        return xhr.responseXML;
      });
    });
  }
  function xhrRequest(input, init) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(init.method || "GET", input, true);
      xhr.withCredentials = init.credentials == "include";
      xhr.responseType = "document";
      for (var header in init.headers) {
        xhr.setRequestHeader(header, init.headers[header]);
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState < 2) {
          return;
        }
        if (xhr.status < 100 || xhr.status > 599) {
          xhr.onreadystatechange = null;
          reject(user().createExpectedError("Unknown HTTP status " + xhr.status));
          return;
        }
        if (xhr.readyState == 4) {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders())
          };
          var response = new Response("", options);
          var promise = assertSuccess(response).then(function(response2) {
            return {
              response: response2,
              xhr
            };
          });
          resolve(promise);
        }
      };
      xhr.onerror = function() {
        reject(user().createExpectedError("Request failure"));
      };
      xhr.onabort = function() {
        reject(user().createExpectedError("Request aborted"));
      };
      if (init.method == "POST") {
        xhr.send(init.body);
      } else {
        xhr.send();
      }
    });
  }
  function parseHeaders(rawHeaders) {
    var headers = dict({});
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(":");
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(":").trim();
        headers[key] = value;
      }
    });
    return headers;
  }

  // src/consent.js
  function getConsentPolicyState(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.whenPolicyResolved(policyId);
    });
  }

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

  // extensions/amp-next-page/0.1/amp-next-page.js
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
  var TAG5 = "amp-next-page";
  var SERVICE_ID = "next-page";
  var ADSENSE_BASE_URL = "https://googleads.g.doubleclick.net/pagead/ads";
  var AmpNextPage = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpNextPage2, _AMP$BaseElement);
    var _super = _createSuper(AmpNextPage2);
    function AmpNextPage2() {
      _classCallCheck9(this, AmpNextPage2);
      return _super.apply(this, arguments);
    }
    _createClass8(AmpNextPage2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.CONTAINER;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this = this;
        userAssert(isExperimentOn(this.win, "amp-next-page"), "Experiment amp-next-page disabled");
        var separatorElements = childElementsByAttr(this.element, "separator");
        userAssert(separatorElements.length <= 1, "%s should contain at most one <div separator> child", TAG5);
        var separator = null;
        if (separatorElements.length === 1) {
          separator = separatorElements[0];
          removeElement(separator);
        }
        return nextPageServiceForDoc(this.getAmpDoc()).then(function(service) {
          if (service.isActive()) {
            return;
          }
          var element = _this.element;
          element.classList.add("i-amphtml-next-page");
          var prohibitedAttribute = element.hasAttribute("deep-parsing") ? "deep-parsing" : element.hasAttribute("xssi-prefix") ? "xssi-prefix" : element.hasAttribute("max-pages") ? "max-pages" : null;
          if (prohibitedAttribute) {
            _this.unsupportedFeatureWarn_(prohibitedAttribute);
          }
          var src = element.getAttribute("src");
          var configPromise;
          var pagesPromise = Promise.resolve([]);
          var type = element.getAttribute("type");
          if (type) {
            userAssert(type === "adsense", TAG5 + " only supports type=adsense");
            var client = element.getAttribute("data-client");
            var slot = element.getAttribute("data-slot");
            userAssert(/^ca-pub-\d+$/.test(client), TAG5 + " AdSense client should be of the format 'ca-pub-123456'");
            userAssert(/^\d+$/.test(slot), TAG5 + " AdSense slot should be a number");
            var consentPolicyId = _this.getConsentPolicy();
            var consent = consentPolicyId ? getConsentPolicyState(element, consentPolicyId).catch(function(err) {
              user().error(TAG5, "Error determining consent state", err);
              return CONSENT_POLICY_STATE.UNKNOWN;
            }) : Promise.resolve(CONSENT_POLICY_STATE.SUFFICIENT);
            pagesPromise = consent.then(function(state) {
              return _this.fetchAdSensePages_(client, slot, state === CONSENT_POLICY_STATE.SUFFICIENT || state === CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED);
            }).catch(function(error) {
              user().warn(TAG5, "error fetching recommendations from AdSense", error);
              return [];
            });
          }
          var inlineConfig = _this.getInlineConfig_();
          if (src) {
            configPromise = _this.fetchConfig_().catch(function(error) {
              return user().error(TAG5, "error fetching config", error);
            });
          } else {
            configPromise = Promise.resolve(inlineConfig);
          }
          if (inlineConfig && (src || type)) {
            _this.unsupportedFeatureWarn_("mixing configuration types");
          }
          userAssert(inlineConfig || src || type, "%s should contain a <script> child, a URL specified in [src], or a [type]", TAG5);
          return Promise.all([configPromise, pagesPromise]).then(function(values) {
            var config = values[0] || {};
            var pages = values[1] || [];
            config.pages = pages.concat(config.pages || []);
            _this.register_(service, config, separator);
          });
        });
      }
    }, {
      key: "getInlineConfig_",
      value: function getInlineConfig_() {
        var scriptElements = childElementsByTag(this.element, "SCRIPT");
        if (!scriptElements.length) {
          return null;
        }
        userAssert(scriptElements.length === 1, TAG5 + " should contain at most one <script> child");
        var scriptElement = scriptElements[0];
        userAssert(isJsonScriptTag(scriptElement), TAG5 + ' config should be inside a <script> tag with type="application/json"');
        return tryParseJson(scriptElement.textContent, function(error) {
          user().error(TAG5, "failed to parse config", error);
        });
      }
    }, {
      key: "fetchAdSensePages_",
      value: function fetchAdSensePages_(client, slot, personalized) {
        var _this2 = this;
        var adUrl = ADSENSE_BASE_URL + "?client=" + client + "&slotname=" + slot + ("&url=" + encodeURIComponent(this.getAmpDoc().getUrl())) + "&ecr=1&crui=title&is_amp=3&output=xml";
        return fetchDocument(this.win, adUrl, {
          credentials: personalized ? "include" : "omit"
        }).then(function(doc) {
          var urlService = Services.urlForDoc(dev().assertElement(_this2.element));
          var _urlService$parse = urlService.parse(_this2.getAmpDoc().getUrl()), origin = _urlService$parse.origin;
          var recs = [];
          var ads = doc.getElementsByTagName("AD");
          for (var i = 0; i < ads.length; i++) {
            var ad = ads[i];
            var titleEl = elementByTag(ad, "LINE1");
            var mediaEl = elementByTag(ad, "MEDIA_TEMPLATE_DATA");
            var visibleUrl = ad.getAttribute("visible_url");
            var url = ad.getAttribute("url");
            var title = extractAdSenseTextContent(titleEl);
            var image = extractAdSenseImageUrl(mediaEl);
            var isValidOrigin = urlService.parse(visibleUrl).origin === origin;
            if (isValidOrigin && url && title && image) {
              recs.push({
                title,
                image,
                ampUrl: url
              });
            }
          }
          return recs;
        });
      }
    }, {
      key: "register_",
      value: function register_(service, configJson, separator) {
        var _this3 = this;
        var element = this.element;
        var config = assertConfig(element, configJson, this.getAmpDoc().getUrl());
        service.register(element, config, separator);
        service.setAppendPageHandler(function(element2) {
          return _this3.appendPage_(element2);
        });
      }
    }, {
      key: "appendPage_",
      value: function appendPage_(element) {
        var _this4 = this;
        return this.mutateElement(function() {
          return _this4.element.appendChild(element);
        });
      }
    }, {
      key: "fetchConfig_",
      value: function fetchConfig_() {
        var ampdoc = this.getAmpDoc();
        var policy = UrlReplacementPolicy.ALL;
        return batchFetchJsonFor(ampdoc, this.element, {
          urlReplacement: policy
        });
      }
    }, {
      key: "unsupportedFeatureWarn_",
      value: function unsupportedFeatureWarn_(feature) {
        user().warn(TAG5, feature + " is a feature of " + TAG5 + " 1.0, please update your version to use it");
      }
    }]);
    return AmpNextPage2;
  }(AMP.BaseElement);
  function nextPageServiceForDoc(elementOrAmpDoc) {
    return getServicePromiseForDoc(elementOrAmpDoc, SERVICE_ID);
  }
  function extractAdSenseImageUrl(el) {
    try {
      var media = parseJson(el.textContent.trim().slice(0, -1))[0];
      return media["core_image_url"];
    } catch (e) {
      return "";
    }
  }
  function extractAdSenseTextContent(el) {
    var content = el && el.textContent || "";
    return content.trim();
  }
  AMP.extension(TAG5, "0.1", function(AMP2) {
    var service = new NextPageService();
    AMP2.registerServiceForDoc(SERVICE_ID, function() {
      return service;
    });
    AMP2.registerElement(TAG5, AmpNextPage, CSS2);
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
//# sourceMappingURL=amp-next-page-0.1.max.js.map
