(self.AMP=self.AMP||[]).push({n:"amp-social-share",ev:"1.0",l:false,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // build/amp-social-share-1.0.css.js
  var CSS2 = "amp-social-share{display:inline-block;overflow:hidden;position:relative;box-sizing:border-box;width:60px;height:44px}amp-social-share:not(.i-amphtml-built)>:not([placeholder]):not(.i-amphtml-svc){display:none;content-visibility:hidden}amp-social-share:focus{outline:2px solid #0389ff;outline-offset:2px}amp-social-share::part(button):focus{outline:none!important;outline-offset:0!important}.amp-social-share-twitter{color:#fff;background-color:#1da1f2}.amp-social-share-facebook{color:#1877f2;background-color:#fff}.amp-social-share-pinterest{color:#e60023;background-color:#fff}.amp-social-share-linkedin{color:#fff;background-color:#0a66c2}.amp-social-share-tumblr{color:#fff;background-color:#001935}.amp-social-share-email{color:#fff;background-color:#000}.amp-social-share-whatsapp{color:#fff;background-color:#25d366}.amp-social-share-line{color:#fff;background-color:#00b900}.amp-social-share-sms,.amp-social-share-system{color:#fff;background-color:#000}\n/*# sourceURL=/extensions/amp-social-share/1.0/amp-social-share.css*/";

  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;
  function arrayOrSingleItemToArray(arrayOrSingleItem) {
    return isArray(arrayOrSingleItem) ? arrayOrSingleItem : [
      arrayOrSingleItem
    ];
  }
  function remove(array, shouldRemove) {
    var removed = [];
    var index = 0;
    for (var i3 = 0; i3 < array.length; i3++) {
      var item = array[i3];
      if (shouldRemove(item, i3, array)) {
        removed.push(item);
      } else {
        if (index < i3) {
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
  function pushIfNotExist(array, item) {
    if (array.indexOf(item) < 0) {
      array.push(item);
      return true;
    }
    return false;
  }
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
  }

  // src/core/types/string/index.js
  function toUpperCase(_match, character) {
    return character.toUpperCase();
  }
  function dashToCamelCase(name) {
    return name.replace(/-([a-z])/g, toUpperCase);
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
  function isString(s3) {
    return typeof s3 == "string";
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
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
  }
  function objectsEqualShallow(o1, o22) {
    if (o1 == null || o22 == null) {
      return o1 === o22;
    }
    for (var k4 in o1) {
      if (o1[k4] !== o22[k4]) {
        return false;
      }
    }
    for (var _k in o22) {
      if (o22[_k] !== o1[_k]) {
        return false;
      }
    }
    return true;
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
    var i3 = 3;
    var splitMessage = opt_message.split("%s");
    var message = splitMessage.shift();
    var messageArray = [message];
    while (splitMessage.length) {
      var subValue = arguments[i3++];
      var nextConstant = splitMessage.shift();
      message += elementStringOrPassThru(subValue) + nextConstant;
      messageArray.push(subValue, nextConstant.trim());
    }
    var error = new Error(message);
    error.messageArray = remove(messageArray, function(x4) {
      return x4 !== "";
    });
    self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(error);
    throw error;
  }
  function assertType_(assertFn, subject, shouldBeTruthy, defaultMessage, opt_message) {
    if (isArray(opt_message)) {
      assertFn(shouldBeTruthy, opt_message.concat([subject]));
    } else {
      assertFn(shouldBeTruthy, (opt_message || defaultMessage) + ": %s", subject);
    }
    return subject;
  }
  function assertElement(assertFn, shouldBeElement, opt_message) {
    return assertType_(assertFn, shouldBeElement, isElement(shouldBeElement), "Element expected", opt_message);
  }

  // src/core/error/index.js
  function _createForOfIteratorHelperLoose(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i3 = 0;
      return function() {
        if (i3 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i3++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o3, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
      arr2[i3] = arr[i3];
    }
    return arr2;
  }
  function duplicateErrorIfNecessary(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty != null && messageProperty.writable) {
      return error;
    }
    var message = error.message, stack = error.stack;
    var e3 = new Error(message);
    for (var prop in error) {
      e3[prop] = error[prop];
    }
    e3.stack = stack;
    return e3;
  }
  function createErrorVargs(var_args) {
    var error = null;
    var message = "";
    for (var _iterator = _createForOfIteratorHelperLoose(arguments), _step; !(_step = _iterator()).done; ) {
      var arg = _step.value;
      if (arg instanceof Error && !error) {
        error = duplicateErrorIfNecessary(arg);
      } else {
        if (message) {
          message += " ";
        }
        message += arg;
      }
    }
    if (!error) {
      error = new Error(message);
    } else if (message) {
      error.message = message + ": " + error.message;
    }
    return error;
  }
  function rethrowAsync(var_args) {
    var error = createErrorVargs.apply(null, arguments);
    setTimeout(function() {
      self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(error);
      throw error;
    });
  }
  function tryCallback(callback) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return callback.apply(null, args);
    } catch (e3) {
      rethrowAsync(e3);
    }
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
    } catch (e3) {
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
    var s3 = services[id];
    if (!s3.obj) {
      devAssert(s3.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert(s3.context, "Service " + id + " registered without context.");
      s3.obj = new s3.ctor(s3.context);
      devAssert(s3.obj, "Service " + id + " constructed to null.");
      s3.context = null;
      if (s3.resolve) {
        s3.resolve(s3.obj);
      }
    }
    return s3.obj;
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
    var s3 = services[id];
    if (s3) {
      if (s3.promise) {
        return s3.promise;
      } else {
        getServiceInternal(holder, id);
        return s3.promise = Promise.resolve(s3.obj);
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

  // src/experiments/index.js
  function _createForOfIteratorHelperLoose2(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray2(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i3 = 0;
      return function() {
        if (i3 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i3++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray2(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray2(o3, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
      arr2[i3] = arr[i3];
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
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
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

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r = {};
  var f = [];
  var e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function c(n2, l4) {
    for (var u3 in l4) {
      n2[u3] = l4[u3];
    }
    return n2;
  }
  function s(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function a(n2, l4, u3) {
    var i3, t3, o3, r3 = arguments, f3 = {};
    for (o3 in l4) {
      o3 == "key" ? i3 = l4[o3] : o3 == "ref" ? t3 = l4[o3] : f3[o3] = l4[o3];
    }
    if (arguments.length > 3)
      for (u3 = [u3], o3 = 3; o3 < arguments.length; o3++) {
        u3.push(r3[o3]);
      }
    if (u3 != null && (f3.children = u3), typeof n2 == "function" && n2.defaultProps != null)
      for (o3 in n2.defaultProps) {
        f3[o3] === void 0 && (f3[o3] = n2.defaultProps[o3]);
      }
    return v(n2, f3, i3, t3, null);
  }
  function v(l4, u3, i3, t3, o3) {
    var r3 = {
      type: l4,
      props: u3,
      key: i3,
      ref: t3,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: o3 == null ? ++n.__v : o3
    };
    return n.vnode != null && n.vnode(r3), r3;
  }
  function y(n2) {
    return n2.children;
  }
  function p(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function d(n2, l4) {
    if (l4 == null)
      return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l4 < n2.__k.length; l4++) {
      if ((u3 = n2.__k[l4]) != null && u3.__e != null)
        return u3.__e;
    }
    return typeof n2.type == "function" ? d(n2) : null;
  }
  function _(n2) {
    var l4, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++) {
        if ((u3 = n2.__k[l4]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      }
      return _(n2);
    }
  }
  function k(l4) {
    (!l4.__d && (l4.__d = true) && u.push(l4) && !b.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(b);
  }
  function b() {
    for (var n2; b.__r = u.length; ) {
      n2 = u.sort(function(n3, l4) {
        return n3.__v.__b - l4.__v.__b;
      }), u = [], n2.some(function(n3) {
        var l4, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l4 = n3).__v).__e, (r3 = l4.__P) && (u3 = [], (i3 = c({}, t3)).__v = t3.__v + 1, I(r3, t3, i3, l4.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? d(t3) : o3, t3.__h), T(u3, t3), t3.__e != o3 && _(t3)));
      });
    }
  }
  function m(n2, l4, u3, i3, t3, o3, e3, c3, s3, a3) {
    var h3, p3, _3, k4, b3, m3, w3, A4 = i3 && i3.__k || f, P3 = A4.length;
    for (u3.__k = [], h3 = 0; h3 < l4.length; h3++) {
      if ((k4 = u3.__k[h3] = (k4 = l4[h3]) == null || typeof k4 == "boolean" ? null : typeof k4 == "string" || typeof k4 == "number" || typeof k4 == "bigint" ? v(null, k4, null, null, k4) : Array.isArray(k4) ? v(y, {
        children: k4
      }, null, null, null) : k4.__b > 0 ? v(k4.type, k4.props, k4.key, null, k4.__v) : k4) != null) {
        if (k4.__ = u3, k4.__b = u3.__b + 1, (_3 = A4[h3]) === null || _3 && k4.key == _3.key && k4.type === _3.type)
          A4[h3] = void 0;
        else
          for (p3 = 0; p3 < P3; p3++) {
            if ((_3 = A4[p3]) && k4.key == _3.key && k4.type === _3.type) {
              A4[p3] = void 0;
              break;
            }
            _3 = null;
          }
        I(n2, k4, _3 = _3 || r, t3, o3, e3, c3, s3, a3), b3 = k4.__e, (p3 = k4.ref) && _3.ref != p3 && (w3 || (w3 = []), _3.ref && w3.push(_3.ref, null, k4), w3.push(p3, k4.__c || b3, k4)), b3 != null ? (m3 == null && (m3 = b3), typeof k4.type == "function" && k4.__k != null && k4.__k === _3.__k ? k4.__d = s3 = g(k4, s3, n2) : s3 = x(n2, k4, _3, A4, b3, s3), a3 || u3.type !== "option" ? typeof u3.type == "function" && (u3.__d = s3) : n2.value = "") : s3 && _3.__e == s3 && s3.parentNode != n2 && (s3 = d(_3));
      }
    }
    for (u3.__e = m3, h3 = P3; h3--; ) {
      A4[h3] != null && (typeof u3.type == "function" && A4[h3].__e != null && A4[h3].__e == u3.__d && (u3.__d = d(i3, h3 + 1)), L(A4[h3], A4[h3]));
    }
    if (w3)
      for (h3 = 0; h3 < w3.length; h3++) {
        z(w3[h3], w3[++h3], w3[++h3]);
      }
  }
  function g(n2, l4, u3) {
    var i3, t3;
    for (i3 = 0; i3 < n2.__k.length; i3++) {
      (t3 = n2.__k[i3]) && (t3.__ = n2, l4 = typeof t3.type == "function" ? g(t3, l4, u3) : x(u3, t3, t3, n2.__k, t3.__e, l4));
    }
    return l4;
  }
  function w(n2, l4) {
    return l4 = l4 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
      w(n3, l4);
    }) : l4.push(n2)), l4;
  }
  function x(n2, l4, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (l4.__d !== void 0)
      r3 = l4.__d, l4.__d = void 0;
    else if (u3 == null || t3 != o3 || t3.parentNode == null)
      n:
        if (o3 == null || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2) {
            if (f3 == t3)
              break n;
          }
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return r3 !== void 0 ? r3 : t3.nextSibling;
  }
  function A(n2, l4, u3, i3, t3) {
    var o3;
    for (o3 in u3) {
      o3 === "children" || o3 === "key" || o3 in l4 || C(n2, o3, null, u3[o3], i3);
    }
    for (o3 in l4) {
      t3 && typeof l4[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l4[o3] || C(n2, o3, l4[o3], u3[o3], i3);
    }
  }
  function P(n2, l4, u3) {
    l4[0] === "-" ? n2.setProperty(l4, u3) : n2[l4] = u3 == null ? "" : typeof u3 != "number" || e.test(l4) ? u3 : u3 + "px";
  }
  function C(n2, l4, u3, i3, t3) {
    var o3;
    n:
      if (l4 === "style") {
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l4 in i3) {
              u3 && l4 in u3 || P(n2.style, l4, "");
            }
          if (u3)
            for (l4 in u3) {
              i3 && u3[l4] === i3[l4] || P(n2.style, l4, u3[l4]);
            }
        }
      } else if (l4[0] === "o" && l4[1] === "n")
        o3 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o3] = u3, u3 ? i3 || n2.addEventListener(l4, o3 ? H : $, o3) : n2.removeEventListener(l4, o3 ? H : $, o3);
      else if (l4 !== "dangerouslySetInnerHTML") {
        if (t3)
          l4 = l4.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l4 !== "href" && l4 !== "list" && l4 !== "form" && l4 !== "tabIndex" && l4 !== "download" && l4 in n2)
          try {
            n2[l4] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l4[0] === "a" && l4[1] === "r") ? n2.setAttribute(l4, u3) : n2.removeAttribute(l4));
      }
  }
  function $(l4) {
    this.l[l4.type + false](n.event ? n.event(l4) : l4);
  }
  function H(l4) {
    this.l[l4.type + true](n.event ? n.event(l4) : l4);
  }
  function I(l4, u3, i3, t3, o3, r3, f3, e3, s3) {
    var a3, v3, h3, d3, _3, k4, b3, g3, w3, x4, A4, P3 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (s3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = n.__b) && a3(u3);
    try {
      n:
        if (typeof P3 == "function") {
          if (g3 = u3.props, w3 = (a3 = P3.contextType) && t3[a3.__c], x4 = a3 ? w3 ? w3.props.value : a3.__ : t3, i3.__c ? b3 = (v3 = u3.__c = i3.__c).__ = v3.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = v3 = new P3(g3, x4) : (u3.__c = v3 = new p(g3, x4), v3.constructor = P3, v3.render = M), w3 && w3.sub(v3), v3.props = g3, v3.state || (v3.state = {}), v3.context = x4, v3.__n = t3, h3 = v3.__d = true, v3.__h = []), v3.__s == null && (v3.__s = v3.state), P3.getDerivedStateFromProps != null && (v3.__s == v3.state && (v3.__s = c({}, v3.__s)), c(v3.__s, P3.getDerivedStateFromProps(g3, v3.__s))), d3 = v3.props, _3 = v3.state, h3)
            P3.getDerivedStateFromProps == null && v3.componentWillMount != null && v3.componentWillMount(), v3.componentDidMount != null && v3.__h.push(v3.componentDidMount);
          else {
            if (P3.getDerivedStateFromProps == null && g3 !== d3 && v3.componentWillReceiveProps != null && v3.componentWillReceiveProps(g3, x4), !v3.__e && v3.shouldComponentUpdate != null && v3.shouldComponentUpdate(g3, v3.__s, x4) === false || u3.__v === i3.__v) {
              v3.props = g3, v3.state = v3.__s, u3.__v !== i3.__v && (v3.__d = false), v3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n2) {
                n2 && (n2.__ = u3);
              }), v3.__h.length && f3.push(v3);
              break n;
            }
            v3.componentWillUpdate != null && v3.componentWillUpdate(g3, v3.__s, x4), v3.componentDidUpdate != null && v3.__h.push(function() {
              v3.componentDidUpdate(d3, _3, k4);
            });
          }
          v3.context = x4, v3.props = g3, v3.state = v3.__s, (a3 = n.__r) && a3(u3), v3.__d = false, v3.__v = u3, v3.__P = l4, a3 = v3.render(v3.props, v3.state, v3.context), v3.state = v3.__s, v3.getChildContext != null && (t3 = c(c({}, t3), v3.getChildContext())), h3 || v3.getSnapshotBeforeUpdate == null || (k4 = v3.getSnapshotBeforeUpdate(d3, _3)), A4 = a3 != null && a3.type === y && a3.key == null ? a3.props.children : a3, m(l4, Array.isArray(A4) ? A4 : [A4], u3, i3, t3, o3, r3, f3, e3, s3), v3.base = u3.__e, u3.__h = null, v3.__h.length && f3.push(v3), b3 && (v3.__E = v3.__ = null), v3.__e = false;
        } else
          r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = j(i3.__e, u3, i3, t3, o3, r3, f3, s3);
      (a3 = n.diffed) && a3(u3);
    } catch (l5) {
      u3.__v = null, (s3 || r3 != null) && (u3.__e = e3, u3.__h = !!s3, r3[r3.indexOf(e3)] = null), n.__e(l5, u3, i3);
    }
  }
  function T(l4, u3) {
    n.__c && n.__c(u3, l4), l4.some(function(u4) {
      try {
        l4 = u4.__h, u4.__h = [], l4.some(function(n2) {
          n2.call(u4);
        });
      } catch (l5) {
        n.__e(l5, u4.__v);
      }
    });
  }
  function j(n2, l4, u3, i3, t3, o3, e3, c3) {
    var a3, v3, h3, y3, p3 = u3.props, d3 = l4.props, _3 = l4.type, k4 = 0;
    if (_3 === "svg" && (t3 = true), o3 != null)
      for (; k4 < o3.length; k4++) {
        if ((a3 = o3[k4]) && (a3 === n2 || (_3 ? a3.localName == _3 : a3.nodeType == 3))) {
          n2 = a3, o3[k4] = null;
          break;
        }
      }
    if (n2 == null) {
      if (_3 === null)
        return document.createTextNode(d3);
      n2 = t3 ? document.createElementNS("http://www.w3.org/2000/svg", _3) : document.createElement(_3, d3.is && d3), o3 = null, c3 = false;
    }
    if (_3 === null)
      p3 === d3 || c3 && n2.data === d3 || (n2.data = d3);
    else {
      if (o3 = o3 && f.slice.call(n2.childNodes), v3 = (p3 = u3.props || r).dangerouslySetInnerHTML, h3 = d3.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (p3 = {}, y3 = 0; y3 < n2.attributes.length; y3++) {
            p3[n2.attributes[y3].name] = n2.attributes[y3].value;
          }
        (h3 || v3) && (h3 && (v3 && h3.__html == v3.__html || h3.__html === n2.innerHTML) || (n2.innerHTML = h3 && h3.__html || ""));
      }
      if (A(n2, d3, p3, t3, c3), h3)
        l4.__k = [];
      else if (k4 = l4.props.children, m(n2, Array.isArray(k4) ? k4 : [k4], l4, u3, i3, t3 && _3 !== "foreignObject", o3, e3, n2.firstChild, c3), o3 != null)
        for (k4 = o3.length; k4--; ) {
          o3[k4] != null && s(o3[k4]);
        }
      c3 || ("value" in d3 && (k4 = d3.value) !== void 0 && (k4 !== n2.value || _3 === "progress" && !k4) && C(n2, "value", k4, p3.value, false), "checked" in d3 && (k4 = d3.checked) !== void 0 && k4 !== n2.checked && C(n2, "checked", k4, p3.checked, false));
    }
    return n2;
  }
  function z(l4, u3, i3) {
    try {
      typeof l4 == "function" ? l4(u3) : l4.current = u3;
    } catch (l5) {
      n.__e(l5, i3);
    }
  }
  function L(l4, u3, i3) {
    var t3, o3, r3;
    if (n.unmount && n.unmount(l4), (t3 = l4.ref) && (t3.current && t3.current !== l4.__e || z(t3, null, u3)), i3 || typeof l4.type == "function" || (i3 = (o3 = l4.__e) != null), l4.__e = l4.__d = void 0, (t3 = l4.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (l5) {
          n.__e(l5, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = l4.__k)
      for (r3 = 0; r3 < t3.length; r3++) {
        t3[r3] && L(t3[r3], u3, i3);
      }
    o3 != null && s(o3);
  }
  function M(n2, l4, u3) {
    return this.constructor(n2, u3);
  }
  function N(l4, u3, i3) {
    var t3, o3, e3;
    n.__ && n.__(l4, u3), o3 = (t3 = typeof i3 == "function") ? null : i3 && i3.__k || u3.__k, e3 = [], I(u3, l4 = (!t3 && i3 || u3).__k = a(y, null, [l4]), o3 || r, r, u3.ownerSVGElement !== void 0, !t3 && i3 ? [i3] : o3 ? null : u3.firstChild ? f.slice.call(u3.childNodes) : null, e3, !t3 && i3 ? i3 : o3 ? o3.__e : u3.firstChild, t3), T(e3, l4);
  }
  function O(n2, l4) {
    N(n2, l4, O);
  }
  function q(n2, l4) {
    var u3 = {
      __c: l4 = "__cC" + o++,
      __: n2,
      Consumer: function Consumer(n3, l5) {
        return n3.children(l5);
      },
      Provider: function Provider(n3) {
        var u4, i3;
        return this.getChildContext || (u4 = [], (i3 = {})[l4] = this, this.getChildContext = function() {
          return i3;
        }, this.shouldComponentUpdate = function(n4) {
          this.props.value !== n4.value && u4.some(k);
        }, this.sub = function(n4) {
          u4.push(n4);
          var l5 = n4.componentWillUnmount;
          n4.componentWillUnmount = function() {
            u4.splice(u4.indexOf(n4), 1), l5 && l5.call(n4);
          };
        }), n3.children;
      }
    };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = {
    __e: function __e(n2, l4) {
      for (var u3, i3, t3; l4 = l4.__; ) {
        if ((u3 = l4.__c) && !u3.__)
          try {
            if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
              return u3.__E = u3;
          } catch (l5) {
            n2 = l5;
          }
      }
      throw n2;
    },
    __v: 0
  }, l = function l2(n2) {
    return n2 != null && n2.constructor === void 0;
  }, p.prototype.setState = function(n2, l4) {
    var u3;
    u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), typeof n2 == "function" && (n2 = n2(c({}, u3), this.props)), n2 && c(u3, n2), n2 != null && this.__v && (l4 && this.__h.push(l4), k(this));
  }, p.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
  }, p.prototype.render = y, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(resolvedPromise()) : setTimeout, b.__r = 0, o = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u2;
  var r2;
  var o2 = 0;
  var i2 = [];
  var c2 = n.__b;
  var f2 = n.__r;
  var e2 = n.diffed;
  var a2 = n.__c;
  var v2 = n.unmount;
  function m2(t3, r3) {
    n.__h && n.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = {
      __: [],
      __h: []
    });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function y2(r3, o3) {
    var i3 = m2(t2++, 3);
    !n.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function h(r3, o3) {
    var i3 = m2(t2++, 4);
    !n.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__h.push(i3));
  }
  function s2(n2) {
    return o2 = 5, d2(function() {
      return {
        current: n2
      };
    }, []);
  }
  function d2(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function F(n2) {
    var r3 = u2.context[n2.__c], o3 = m2(t2++, 9);
    return o3.__c = n2, r3 ? (o3.__ == null && (o3.__ = true, r3.sub(u2)), r3.props.value) : n2.__;
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], n.__e(u3, t3.__v);
        }
    }), i2 = [];
  }
  n.__b = function(n2) {
    u2 = null, c2 && c2(n2);
  }, n.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r3 = (u2 = n2.__c).__H;
    r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
  }, n.diffed = function(t3) {
    e2 && e2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === n.requestAnimationFrame || ((r2 = n.requestAnimationFrame) || function(n2) {
      var t4, u3 = function u4() {
        clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r3 = setTimeout(u3, 100);
      b2 && (t4 = requestAnimationFrame(u3));
    })(x2)), u2 = void 0;
  }, n.__c = function(t3, u3) {
    u3.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r3) {
        u3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u3 = [], n.__e(r3, t4.__v);
      }
    }), a2 && a2(t3, u3);
  }, n.unmount = function(t3) {
    v2 && v2(t3);
    var u3 = t3.__c;
    if (u3 && u3.__H)
      try {
        u3.__H.__.forEach(g2);
      } catch (t4) {
        n.__e(t4, u3.__v);
      }
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }

  // src/preact/index.js
  function createElement(unusedType, unusedProps, var_args) {
    return a.apply(void 0, arguments);
  }
  function render(vnode, container, opt_replaceNode) {
    N(vnode, container, opt_replaceNode);
  }
  function hydrate(vnode, container) {
    O(vnode, container);
  }
  function createContext(value) {
    return q(value, void 0);
  }
  function useRef(initial) {
    return s2(initial);
  }
  function useEffect(effect, opt_deps) {
    y2(effect, opt_deps);
  }
  function useLayoutEffect(effect, opt_deps) {
    h(effect, opt_deps);
  }
  function useContext(context2) {
    return F(context2);
  }
  function useMemo(cb, opt_deps) {
    return d2(cb, opt_deps);
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
  function devAssertElement(shouldBeElement, opt_message) {
    if (isMinifiedMode()) {
      return shouldBeElement;
    }
    devAssertDceCheck();
    return assertElement(devAssert2, shouldBeElement, opt_message);
  }

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

  // src/core/loading-instructions.js
  var _MAP;
  var Loading = {
    AUTO: "auto",
    LAZY: "lazy",
    EAGER: "eager",
    UNLOAD: "unload"
  };
  var ORDER = [Loading.AUTO, Loading.LAZY, Loading.EAGER, Loading.UNLOAD];
  var MAP = (_MAP = {}, _MAP[Loading.AUTO] = 0, _MAP[Loading.LAZY] = 1, _MAP[Loading.EAGER] = 2, _MAP[Loading.UNLOAD] = 3, _MAP);
  function reducer(v1, v22) {
    var ordinal1 = MAP[v1] || 0;
    var ordinal2 = MAP[v22] || 0;
    var ordinal = Math.max(ordinal1, ordinal2);
    return ORDER[ordinal];
  }

  // src/context/prop.type.js
  function ContextPropDef() {
  }
  ContextPropDef.prototype.key;
  ContextPropDef.prototype.type;
  ContextPropDef.prototype.deps;
  ContextPropDef.prototype.recursive;
  ContextPropDef.prototype.compute;
  ContextPropDef.prototype.defaultValue;

  // src/context/prop.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
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
  var EMPTY_DEPS = [];
  function contextProp(key, opt_spec) {
    var prop = _extends({
      key,
      type: null,
      deps: EMPTY_DEPS,
      recursive: false,
      compute: null,
      defaultValue: void 0
    }, opt_spec);
    devAssert2(prop.deps.length == 0 || prop.compute);
    return prop;
  }

  // src/context/contextprops.js
  var CanRender = contextProp("CanRender", {
    defaultValue: true,
    recursive: function recursive(inputs) {
      return inputs.reduce(andReducer);
    },
    compute: function compute(contextNode, inputs, parentValue) {
      return parentValue && inputs.reduce(andReducer, true) || false;
    }
  });
  var CanPlay = contextProp("CanPlay", {
    defaultValue: true,
    recursive: function recursive2(inputs) {
      return inputs.reduce(andReducer);
    },
    deps: [CanRender],
    compute: function compute2(contextNode, inputs, parentValue, canRender) {
      return canRender && parentValue && inputs.reduce(andReducer, true) || false;
    }
  });
  var LoadingProp = contextProp("Loading", {
    defaultValue: Loading.AUTO,
    recursive: true,
    deps: [CanRender],
    compute: function compute3(contextNode, inputs, parentValue, canRender) {
      return reducer(canRender ? Loading.AUTO : Loading.LAZY, reducer(parentValue || Loading.AUTO, inputs.reduce(reducer, Loading.AUTO)));
    }
  });
  var andReducer = function andReducer2(acc, value) {
    return acc && value;
  };

  // src/core/dom/media-query-props.js
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  var TRUE_VALUE = "1";
  var MediaQueryProps = /* @__PURE__ */ function() {
    function MediaQueryProps2(win, callback) {
      _classCallCheck2(this, MediaQueryProps2);
      this.win_ = win;
      this.callback_ = callback;
      this.exprMap_ = {};
      this.prevExprMap_ = null;
    }
    _createClass(MediaQueryProps2, [{
      key: "start",
      value: function start() {
        this.prevExprMap_ = this.exprMap_;
        this.exprMap_ = {};
      }
    }, {
      key: "resolveMatchQuery",
      value: function resolveMatchQuery(queryString) {
        return this.resolve_(queryString, parseMediaQueryMatchExpr, TRUE_VALUE) === TRUE_VALUE;
      }
    }, {
      key: "resolveListQuery",
      value: function resolveListQuery(exprString) {
        return this.resolve_(exprString, parseMediaQueryListExpr, "");
      }
    }, {
      key: "complete",
      value: function complete() {
        for (var k4 in this.prevExprMap_) {
          if (!(k4 in this.exprMap_)) {
            toggleOnChange(this.prevExprMap_[k4], this.callback_, false);
          }
        }
        this.prevExprMap_ = null;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        for (var k4 in this.exprMap_) {
          toggleOnChange(this.exprMap_[k4], this.callback_, false);
        }
        this.exprMap_ = {};
      }
    }, {
      key: "resolve_",
      value: function resolve_(exprString, parser, emptyExprValue) {
        if (!exprString.trim()) {
          return emptyExprValue;
        }
        var expr = this.exprMap_[exprString] || this.prevExprMap_[exprString];
        if (!expr) {
          expr = parser(this.win_, exprString);
          toggleOnChange(expr, this.callback_, true);
        }
        this.exprMap_[exprString] = expr;
        return resolveMediaQueryListExpr(expr);
      }
    }]);
    return MediaQueryProps2;
  }();
  function parseMediaQueryMatchExpr(win, queryString) {
    var query = win.matchMedia(queryString);
    return [{
      query,
      value: TRUE_VALUE
    }, {
      query: null,
      value: ""
    }];
  }
  function parseMediaQueryListExpr(win, exprString) {
    return exprString.split(",").map(function(part) {
      part = part.replace(/\s+/g, " ").trim();
      if (part.length == 0) {
        return;
      }
      var queryString;
      var value;
      var lastChar = part.charAt(part.length - 1);
      var div;
      if (lastChar == ")") {
        var parens = 1;
        div = part.length - 2;
        for (; div >= 0; div--) {
          var c3 = part.charAt(div);
          if (c3 == "(") {
            parens--;
          } else if (c3 == ")") {
            parens++;
          }
          if (parens == 0) {
            break;
          }
        }
        var funcEnd = div - 1;
        if (div > 0) {
          div--;
          for (; div >= 0; div--) {
            var _c = part.charAt(div);
            if (!(_c == "%" || _c == "-" || _c == "_" || _c >= "a" && _c <= "z" || _c >= "A" && _c <= "Z" || _c >= "0" && _c <= "9")) {
              break;
            }
          }
        }
        if (div >= funcEnd) {
          return null;
        }
      } else {
        div = part.length - 2;
        for (; div >= 0; div--) {
          var _c2 = part.charAt(div);
          if (!(_c2 == "%" || _c2 == "." || _c2 >= "a" && _c2 <= "z" || _c2 >= "A" && _c2 <= "Z" || _c2 >= "0" && _c2 <= "9")) {
            break;
          }
        }
      }
      if (div >= 0) {
        queryString = part.substring(0, div + 1).trim();
        value = part.substring(div + 1).trim();
      } else {
        value = part;
        queryString = void 0;
      }
      if (!value) {
        return null;
      }
      var query = queryString ? win.matchMedia(queryString) : null;
      return {
        query,
        value
      };
    }).filter(Boolean);
  }
  function resolveMediaQueryListExpr(expr) {
    for (var i3 = 0; i3 < expr.length; i3++) {
      var _expr$i = expr[i3], query = _expr$i.query, value = _expr$i.value;
      if (!query || query.matches) {
        return value;
      }
    }
    return "";
  }
  function toggleOnChange(expr, callback, on2) {
    for (var i3 = 0; i3 < expr.length; i3++) {
      var query = expr[i3].query;
      if (query) {
        if (query.onchange !== void 0) {
          query.onchange = on2 ? callback : null;
        } else {
          if (on2) {
            query.addListener(callback);
          } else {
            query.removeListener(callback);
          }
        }
      }
    }
  }

  // src/utils/size-observer.js
  var Type = {
    CONTENT: 0,
    BORDER_BOX: 1
  };
  var VERTICAL_RE = /vertical/;
  var observers = new WeakMap();
  var targetObserverMultimap = new WeakMap();
  var targetEntryMap = new WeakMap();
  function observeBorderBoxSize(element, callback) {
    observeSize(element, Type.BORDER_BOX, callback);
  }
  function unobserveBorderBoxSize(element, callback) {
    unobserveSize(element, Type.BORDER_BOX, callback);
  }
  function observeSize(element, type, callback) {
    var win = element.ownerDocument.defaultView;
    if (!win) {
      return;
    }
    var callbacks = targetObserverMultimap.get(element);
    if (!callbacks) {
      callbacks = [];
      targetObserverMultimap.set(element, callbacks);
      getObserver(win).observe(element);
    }
    var exists = callbacks.some(function(cb) {
      return cb.callback === callback && cb.type === type;
    });
    if (!exists) {
      callbacks.push({
        type,
        callback
      });
      var entry = targetEntryMap.get(element);
      if (entry) {
        setTimeout(function() {
          return computeAndCall(type, callback, entry);
        });
      }
    }
  }
  function unobserveSize(element, type, callback) {
    var callbacks = targetObserverMultimap.get(element);
    if (!callbacks) {
      return;
    }
    remove(callbacks, function(cb) {
      return cb.callback === callback && cb.type === type;
    });
    if (callbacks.length == 0) {
      targetObserverMultimap.delete(element);
      targetEntryMap.delete(element);
      var win = element.ownerDocument.defaultView;
      if (win) {
        getObserver(win).unobserve(element);
      }
    }
  }
  function getObserver(win) {
    var observer = observers.get(win);
    if (!observer) {
      observer = new win.ResizeObserver(processEntries);
      observers.set(win, observer);
    }
    return observer;
  }
  function processEntries(entries) {
    var seen = new Set();
    for (var i3 = entries.length - 1; i3 >= 0; i3--) {
      var entry = entries[i3];
      var target = entry.target;
      if (seen.has(target)) {
        continue;
      }
      seen.add(target);
      var callbacks = targetObserverMultimap.get(target);
      if (!callbacks) {
        continue;
      }
      targetEntryMap.set(target, entry);
      for (var k4 = 0; k4 < callbacks.length; k4++) {
        var _callbacks$k = callbacks[k4], callback = _callbacks$k.callback, type = _callbacks$k.type;
        computeAndCall(type, callback, entry);
      }
    }
  }
  function computeAndCall(type, callback, entry) {
    if (type == Type.CONTENT) {
      var contentRect = entry.contentRect;
      var height = contentRect.height, width = contentRect.width;
      var size = {
        width,
        height
      };
      tryCallback(callback, size);
    } else if (type == Type.BORDER_BOX) {
      var borderBoxSizeArray = entry.borderBoxSize;
      var borderBoxSize;
      if (borderBoxSizeArray) {
        if (borderBoxSizeArray.length > 0) {
          borderBoxSize = borderBoxSizeArray[0];
        } else {
          borderBoxSize = {
            inlineSize: 0,
            blockSize: 0
          };
        }
      } else {
        var target = entry.target;
        var win = toWin(target.ownerDocument.defaultView);
        var isVertical = VERTICAL_RE.test(computedStyle(win, target)["writing-mode"]);
        var offsetHeight = target.offsetHeight, offsetWidth = target.offsetWidth;
        var inlineSize, blockSize;
        if (isVertical) {
          blockSize = offsetWidth;
          inlineSize = offsetHeight;
        } else {
          inlineSize = offsetWidth;
          blockSize = offsetHeight;
        }
        borderBoxSize = {
          inlineSize,
          blockSize
        };
      }
      tryCallback(callback, borderBoxSize);
    }
  }

  // src/utils/pause-helper.js
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  var PauseHelper = /* @__PURE__ */ function() {
    function PauseHelper2(element) {
      _classCallCheck3(this, PauseHelper2);
      this.element_ = element;
      this.isPlaying_ = false;
      this.hasSize_ = false;
      this.pauseWhenNoSize_ = this.pauseWhenNoSize_.bind(this);
    }
    _createClass2(PauseHelper2, [{
      key: "updatePlaying",
      value: function updatePlaying(isPlaying) {
        if (isPlaying === this.isPlaying_) {
          return;
        }
        this.isPlaying_ = isPlaying;
        if (isPlaying) {
          this.hasSize_ = false;
          observeBorderBoxSize(this.element_, this.pauseWhenNoSize_);
        } else {
          unobserveBorderBoxSize(this.element_, this.pauseWhenNoSize_);
        }
      }
    }, {
      key: "pauseWhenNoSize_",
      value: function pauseWhenNoSize_(_ref) {
        var blockSize = _ref.blockSize, inlineSize = _ref.inlineSize;
        var hasSize = inlineSize > 0 && blockSize > 0;
        if (hasSize === this.hasSize_) {
          return;
        }
        this.hasSize_ = hasSize;
        if (!hasSize) {
          this.element_.pause();
        }
      }
    }]);
    return PauseHelper2;
  }();

  // src/core/constants/ready-state.js
  var ReadyState = {
    UPGRADING: "upgrading",
    BUILDING: "building",
    MOUNTING: "mounting",
    LOADING: "loading",
    COMPLETE: "complete",
    ERROR: "error"
  };

  // src/utils/resource-container-helper.js
  var AMP_CLASS = "i-amphtml-element";
  var DEEP = true;
  var ensureLoaded = function ensureLoaded2(element) {
    return element.ensureLoaded();
  };
  var pause = function pause2(element) {
    return element.pause();
  };
  var unmount = function unmount2(element) {
    return element.unmount();
  };
  function loadAll(containerOrContainers, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    forAllWithin(containerOrContainers, includeSelf, !DEEP, ensureLoaded);
  }
  function pauseAll(containerOrContainers, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    forAllWithin(containerOrContainers, includeSelf, DEEP, pause);
  }
  function unmountAll(containerOrContainers, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    forAllWithin(containerOrContainers, includeSelf, DEEP, unmount);
  }
  function forAllWithin(containerOrContainers, includeSelf, deep, callback) {
    if (Array.isArray(containerOrContainers)) {
      for (var i3 = 0; i3 < containerOrContainers.length; i3++) {
        forAllWithinInternal(containerOrContainers[i3], includeSelf, deep, callback);
      }
    } else {
      forAllWithinInternal(containerOrContainers, includeSelf, deep, callback);
    }
  }
  function forAllWithinInternal(container, includeSelf, deep, callback) {
    if (includeSelf && container.classList.contains(AMP_CLASS)) {
      var ampContainer = container;
      tryCallback(callback, ampContainer);
      if (!deep) {
        var placeholder = ampContainer.getPlaceholder();
        if (placeholder) {
          forAllWithinInternal(placeholder, true, !DEEP, callback);
        }
        return;
      }
    }
    var descendants = container.getElementsByClassName(AMP_CLASS);
    var seen = null;
    for (var i3 = 0; i3 < descendants.length; i3++) {
      var descendant = descendants[i3];
      if (deep) {
        tryCallback(callback, descendant);
      } else {
        seen = seen || [];
        var covered = false;
        for (var j3 = 0; j3 < seen.length; j3++) {
          if (seen[j3].contains(descendant)) {
            covered = true;
            break;
          }
        }
        if (!covered) {
          seen.push(descendant);
          tryCallback(callback, descendant);
        }
      }
    }
  }

  // src/context/scan.js
  function _createForOfIteratorHelperLoose3(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray3(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i3 = 0;
      return function() {
        if (i3 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i3++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray3(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray3(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray3(o3, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
      arr2[i3] = arr[i3];
    }
    return arr2;
  }
  function findParent(startNode, predicate, arg, includeSelf) {
    if (arg === void 0) {
      arg = void 0;
    }
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    for (var n2 = includeSelf ? startNode : startNode.parent; n2; n2 = n2.parent) {
      if (predicate(n2, arg)) {
        return n2;
      }
    }
    return null;
  }
  function deepScan(startNode, callback, arg, state, includeSelf) {
    if (arg === void 0) {
      arg = void 0;
    }
    if (state === void 0) {
      state = true;
    }
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    if (includeSelf) {
      var newState = callback(startNode, arg, state);
      if (newState) {
        deepScan(startNode, callback, arg, newState, false);
      }
    } else if (startNode.children) {
      for (var _iterator = _createForOfIteratorHelperLoose3(startNode.children), _step; !(_step = _iterator()).done; ) {
        var node = _step.value;
        deepScan(node, callback, arg, state, true);
      }
    }
  }

  // src/context/scheduler.js
  function throttleTail(handler, defaultScheduler) {
    if (defaultScheduler === void 0) {
      defaultScheduler = null;
    }
    var scheduled = false;
    var handleAndUnschedule = function handleAndUnschedule2() {
      scheduled = false;
      handler();
    };
    var scheduleIfNotScheduled = function scheduleIfNotScheduled2(opt_scheduler) {
      if (!scheduled) {
        scheduled = true;
        var scheduler = opt_scheduler || defaultScheduler;
        scheduler(handleAndUnschedule);
      }
    };
    return scheduleIfNotScheduled;
  }

  // src/context/values.js
  function _createForOfIteratorHelperLoose4(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray4(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i3 = 0;
      return function() {
        if (i3 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i3++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray4(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray4(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray4(o3, minLen);
  }
  function _arrayLikeToArray4(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
      arr2[i3] = arr[i3];
    }
    return arr2;
  }
  function _classCallCheck4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  var EMPTY_ARRAY = [];
  var EMPTY_FUNC = function EMPTY_FUNC2() {
  };
  var Pending = {
    NOT_PENDING: 0,
    PENDING: 1,
    PENDING_REFRESH_PARENT: 2
  };
  function InputDef() {
  }
  InputDef.prototype.values;
  InputDef.prototype.setters;
  function UsedDef() {
  }
  UsedDef.prototype.prop;
  UsedDef.prototype.subscribers;
  UsedDef.prototype.value;
  UsedDef.prototype.pending;
  UsedDef.prototype.counter;
  UsedDef.prototype.depValues;
  UsedDef.prototype.parentValue;
  UsedDef.prototype.parentContextNode;
  UsedDef.prototype.ping;
  UsedDef.prototype.pingDep;
  UsedDef.prototype.pingParent;
  var Values = /* @__PURE__ */ function() {
    function Values2(contextNode) {
      _classCallCheck4(this, Values2);
      this.contextNode_ = contextNode;
      this.inputsByKey_ = null;
      this.usedByKey_ = null;
      this.checkUpdates_ = throttleTail(this.checkUpdates_.bind(this), setTimeout);
    }
    _createClass3(Values2, [{
      key: "set",
      value: function set(prop, setter, value) {
        devAssert2(setter);
        devAssert2(value !== void 0);
        var key = prop.key;
        var inputsByKey = this.inputsByKey_ || (this.inputsByKey_ = new Map());
        var inputs = inputsByKey.get(key);
        if (!inputs) {
          inputs = {
            values: [],
            setters: []
          };
          inputsByKey.set(key, inputs);
        }
        var index = inputs.setters.indexOf(setter);
        var changed = index == -1 || inputs.values[index] !== value;
        if (index == -1) {
          inputs.setters.push(setter);
          inputs.values.push(value);
        } else if (changed) {
          inputs.values[index] = value;
        }
        if (changed) {
          this.ping(prop, false);
          if (isRecursive(prop)) {
            deepScan(this.contextNode_, scan, prop, true, false);
          }
        }
      }
    }, {
      key: "remove",
      value: function remove2(prop, setter) {
        devAssert2(setter);
        var key = prop.key;
        var inputsByKey = this.inputsByKey_;
        var inputs = inputsByKey == null ? void 0 : inputsByKey.get(key);
        if (inputs) {
          var index = inputs.setters.indexOf(setter);
          if (index != -1) {
            inputs.setters.splice(index, 1);
            inputs.values.splice(index, 1);
            if (inputs.setters.length == 0) {
              inputsByKey.delete(key);
            }
            deepScan(this.contextNode_, scan, prop);
          }
        }
      }
    }, {
      key: "has",
      value: function has(prop) {
        var _this$inputsByKey_;
        return !!((_this$inputsByKey_ = this.inputsByKey_) != null && _this$inputsByKey_.has(prop.key));
      }
    }, {
      key: "subscribe",
      value: function subscribe2(prop, handler) {
        var used = this.startUsed_(prop);
        if (!pushIfNotExist(used.subscribers, handler)) {
          return;
        }
        var existingValue = used.value;
        if (isDefined(existingValue) && this.isConnected_()) {
          handler(existingValue);
        }
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe2(prop, handler) {
        var _this$usedByKey_;
        var used = (_this$usedByKey_ = this.usedByKey_) == null ? void 0 : _this$usedByKey_.get(prop.key);
        if (!used || !removeItem(used.subscribers, handler)) {
          return;
        }
        this.stopUsed_(used);
      }
    }, {
      key: "ping",
      value: function ping(prop, refreshParent) {
        var _this$usedByKey_2, _this$usedByKey_2$get;
        (_this$usedByKey_2 = this.usedByKey_) == null ? void 0 : (_this$usedByKey_2$get = _this$usedByKey_2.get(prop.key)) == null ? void 0 : _this$usedByKey_2$get.ping(refreshParent);
      }
    }, {
      key: "parentUpdated",
      value: function parentUpdated() {
        if (this.isConnected_()) {
          deepScan(this.contextNode_, scanAll, void 0, EMPTY_ARRAY);
        }
      }
    }, {
      key: "rootUpdated",
      value: function rootUpdated() {
        var _this = this;
        var usedByKey = this.usedByKey_;
        if (!usedByKey) {
          return;
        }
        if (this.isConnected_()) {
          usedByKey.forEach(function(used) {
            var prop = used.prop;
            _this.ping(prop, true);
          });
        } else {
          usedByKey.forEach(function(used) {
            var prop = used.prop;
            if (isRecursive(prop)) {
              _this.updateParentContextNode_(used, null);
            }
          });
        }
      }
    }, {
      key: "scan",
      value: function scan2(prop) {
        this.ping(prop, true);
        if (!isRecursive(prop)) {
          return false;
        }
        if (this.has(prop)) {
          return false;
        }
        return true;
      }
    }, {
      key: "scanAll",
      value: function scanAll2(scheduled) {
        var _this2 = this;
        var newScheduled = null;
        var usedByKey = this.usedByKey_;
        if (usedByKey) {
          usedByKey.forEach(function(used) {
            var prop = used.prop;
            var key = prop.key;
            if ((newScheduled || scheduled).indexOf(key) == -1) {
              _this2.ping(prop, true);
              if (_this2.contextNode_.children && _this2.has(prop)) {
                if (!newScheduled) {
                  newScheduled = scheduled.slice(0);
                }
                newScheduled.push(key);
              }
            }
          });
        }
        return newScheduled || scheduled;
      }
    }, {
      key: "isConnected_",
      value: function isConnected_() {
        return !!this.contextNode_.root;
      }
    }, {
      key: "startUsed_",
      value: function startUsed_(prop) {
        var _this3 = this;
        var deps = prop.deps, key = prop.key;
        var usedByKey = this.usedByKey_ || (this.usedByKey_ = new Map());
        var used = usedByKey.get(key);
        if (!used) {
          used = {
            prop,
            subscribers: [],
            value: void 0,
            pending: Pending.NOT_PENDING,
            counter: 0,
            depValues: deps.length > 0 ? deps.map(EMPTY_FUNC) : EMPTY_ARRAY,
            parentValue: void 0,
            parentContextNode: null,
            ping: function ping(refreshParent) {
              if (_this3.isConnected_()) {
                var pending = refreshParent ? Pending.PENDING_REFRESH_PARENT : Pending.PENDING;
                used.pending = Math.max(used.pending, pending);
                _this3.checkUpdates_();
              }
            },
            pingDep: deps.length > 0 ? deps.map(function(dep, index) {
              return function(value) {
                used.depValues[index] = value;
                used.ping();
              };
            }) : EMPTY_ARRAY,
            pingParent: isRecursive(prop) ? function(parentValue) {
              used.parentValue = parentValue;
              used.ping();
            } : null
          };
          usedByKey.set(key, used);
          deps.forEach(function(dep, index) {
            return _this3.subscribe(dep, used.pingDep[index]);
          });
          used.ping(false);
        }
        return used;
      }
    }, {
      key: "stopUsed_",
      value: function stopUsed_(used) {
        var _this4 = this;
        if (used.subscribers.length > 0) {
          return;
        }
        var pingDep = used.pingDep, prop = used.prop;
        var deps = prop.deps, key = prop.key;
        this.usedByKey_.delete(key);
        this.updateParentContextNode_(used, null);
        if (deps.length > 0) {
          deps.forEach(function(dep, index) {
            _this4.unsubscribe(dep, pingDep[index]);
          });
        }
      }
    }, {
      key: "checkUpdates_",
      value: function checkUpdates_() {
        var _this5 = this;
        if (!this.isConnected_()) {
          return;
        }
        var usedByKey = this.usedByKey_;
        if (!usedByKey) {
          return;
        }
        usedByKey.forEach(function(used) {
          used.counter = 0;
        });
        var updated;
        do {
          updated = 0;
          usedByKey.forEach(function(used) {
            if (used.pending != Pending.NOT_PENDING) {
              var key = used.prop.key;
              used.counter++;
              if (used.counter > 5) {
                rethrowAsync("cyclical prop: " + key);
                used.pending = Pending.NOT_PENDING;
                return;
              }
              updated++;
              _this5.tryUpdate_(used);
            }
          });
        } while (updated > 0);
      }
    }, {
      key: "tryUpdate_",
      value: function tryUpdate_(used) {
        var refreshParent = used.pending == Pending.PENDING_REFRESH_PARENT;
        var newValue;
        try {
          newValue = this.calc_(used, refreshParent);
        } catch (e3) {
          rethrowAsync(e3);
        }
        used.pending = Pending.NOT_PENDING;
        this.maybeUpdated_(used, newValue);
      }
    }, {
      key: "maybeUpdated_",
      value: function maybeUpdated_(used, value) {
        var prop = used.prop, oldValue = used.value;
        var key = prop.key;
        var usedByKey = this.usedByKey_;
        if (oldValue === value || used !== (usedByKey == null ? void 0 : usedByKey.get(key)) || !this.isConnected_()) {
          return;
        }
        used.value = value;
        var subscribers = used.subscribers;
        for (var _iterator = _createForOfIteratorHelperLoose4(subscribers), _step; !(_step = _iterator()).done; ) {
          var handler = _step.value;
          handler(value);
        }
      }
    }, {
      key: "calc_",
      value: function calc_(used, refreshParent) {
        var _this$inputsByKey_2, _this$inputsByKey_2$g;
        devAssert2(this.isConnected_());
        var depValues = used.depValues, prop = used.prop;
        var compute4 = prop.compute, defaultValue = prop.defaultValue, key = prop.key;
        var inputValues = (_this$inputsByKey_2 = this.inputsByKey_) == null ? void 0 : (_this$inputsByKey_2$g = _this$inputsByKey_2.get(key)) == null ? void 0 : _this$inputsByKey_2$g.values;
        var recursive3 = calcRecursive(prop, inputValues);
        if (refreshParent || recursive3 != Boolean(used.parentContextNode)) {
          var newParentContextNode = recursive3 ? findParent(this.contextNode_, hasInput, prop, false) : null;
          this.updateParentContextNode_(used, newParentContextNode);
        }
        var parentValue = isDefined(used.parentValue) ? used.parentValue : recursive3 && !used.parentContextNode ? defaultValue : void 0;
        var newValue = void 0;
        var ready = depValues.every(isDefined) && (!recursive3 || isDefined(parentValue));
        if (ready) {
          var node = this.contextNode_.node;
          if (inputValues && !compute4) {
            newValue = inputValues[0];
          } else if (isRecursive(prop)) {
            if (inputValues || depValues.length > 0) {
              newValue = callRecursiveCompute(compute4, node, inputValues || EMPTY_ARRAY, parentValue, depValues);
            } else if (isDefined(parentValue)) {
              newValue = parentValue;
            }
          } else if (compute4) {
            newValue = callCompute(compute4, node, inputValues || EMPTY_ARRAY, depValues);
          }
        }
        return newValue;
      }
    }, {
      key: "updateParentContextNode_",
      value: function updateParentContextNode_(used, newParentContextNode) {
        var oldParentContextNode = used.parentContextNode, pingParent = used.pingParent, prop = used.prop;
        if (newParentContextNode != oldParentContextNode) {
          used.parentContextNode = newParentContextNode;
          used.parentValue = void 0;
          if (oldParentContextNode) {
            oldParentContextNode.values.unsubscribe(prop, devAssert2(pingParent));
          }
          if (newParentContextNode) {
            newParentContextNode.values.subscribe(prop, devAssert2(pingParent));
          }
        }
      }
    }]);
    return Values2;
  }();
  function scan(contextNode, prop) {
    return contextNode.values.scan(prop);
  }
  function scanAll(contextNode, unusedArg, state) {
    return contextNode.values.scanAll(state);
  }
  function hasInput(contextNode, prop) {
    return contextNode.values.has(prop);
  }
  function isRecursive(prop) {
    return !!prop.recursive;
  }
  function calcRecursive(prop, inputs) {
    var compute4 = prop.compute, recursive3 = prop.recursive;
    if (typeof recursive3 == "function") {
      return inputs ? recursive3(inputs) : true;
    }
    if (recursive3 && inputs && !compute4) {
      return false;
    }
    return recursive3;
  }
  function callCompute(compute4, node, inputValues, deps) {
    switch (deps.length) {
      case 0:
        return compute4(node, inputValues);
      case 1:
        return compute4(node, inputValues, deps[0]);
      case 2:
        return compute4(node, inputValues, deps[0], deps[1]);
      case 3:
        return compute4(node, inputValues, deps[0], deps[1], deps[2]);
      default:
        return compute4.apply(null, [node, inputValues].concat(deps));
    }
  }
  function callRecursiveCompute(compute4, node, inputValues, parentValue, deps) {
    switch (deps.length) {
      case 0:
        return compute4(node, inputValues, parentValue);
      case 1:
        return compute4(node, inputValues, parentValue, deps[0]);
      case 2:
        return compute4(node, inputValues, parentValue, deps[0], deps[1]);
      case 3:
        return compute4(node, inputValues, parentValue, deps[0], deps[1], deps[2]);
      default:
        return compute4.apply(null, [node, inputValues, parentValue].concat(deps));
    }
  }
  function isDefined(v3) {
    return v3 !== void 0;
  }

  // src/context/node.js
  function _createForOfIteratorHelperLoose5(o3, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
    if (it)
      return (it = it.call(o3)).next.bind(it);
    if (Array.isArray(o3) || (it = _unsupportedIterableToArray5(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
      if (it)
        o3 = it;
      var i3 = 0;
      return function() {
        if (i3 >= o3.length)
          return { done: true };
        return { done: false, value: o3[i3++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray5(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray5(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray5(o3, minLen);
  }
  function _arrayLikeToArray5(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
      arr2[i3] = arr[i3];
    }
    return arr2;
  }
  function _classCallCheck5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties4(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  var NODE_PROP = "__AMP_NODE";
  var ASSIGNED_SLOT_PROP = "__AMP_ASSIGNED_SLOT";
  var AMP_PREFIX = "AMP-";
  var ELEMENT_NODE = 1;
  var DOCUMENT_NODE = 9;
  var FRAGMENT_NODE = 11;
  var ContextNode = /* @__PURE__ */ function() {
    function ContextNode2(node, name) {
      _classCallCheck5(this, ContextNode2);
      this.node = node;
      this.name = name;
      this.isRoot = node.nodeType == DOCUMENT_NODE;
      this.root = this.isRoot ? this : null;
      this.parent = null;
      this.children = null;
      this.groups = null;
      this.values = new Values(this);
      this.subscribers_ = null;
      this.parentOverridden_ = false;
      this.scheduleDiscover_ = throttleTail(this.discover_.bind(this), setTimeout);
      if (node.nodeType == FRAGMENT_NODE) {
        node.addEventListener("slotchange", function(e3) {
          var _ContextNode$closest, _ContextNode$closest$;
          var slot = e3.target;
          slot.assignedNodes().forEach(discoverContained);
          (_ContextNode$closest = ContextNode2.closest(slot)) == null ? void 0 : (_ContextNode$closest$ = _ContextNode$closest.children) == null ? void 0 : _ContextNode$closest$.forEach(discoverContextNode);
        });
      }
      this.discover();
    }
    _createClass4(ContextNode2, [{
      key: "discover",
      value: function discover2() {
        if (this.isDiscoverable()) {
          this.scheduleDiscover_();
        } else if (this.name && this.children) {
          this.children.forEach(discoverContextNode);
        }
      }
    }, {
      key: "isDiscoverable",
      value: function isDiscoverable() {
        return !this.isRoot && !this.parentOverridden_;
      }
    }, {
      key: "setParent",
      value: function setParent2(parent) {
        var parentContext = parent != null && parent.nodeType ? ContextNode2.get(parent) : parent;
        this.updateTree_(parentContext, parent != null);
      }
    }, {
      key: "setIsRoot",
      value: function setIsRoot(isRoot) {
        var _this$parent$root, _this$parent;
        this.isRoot = isRoot;
        var newRoot = isRoot ? this : (_this$parent$root = (_this$parent = this.parent) == null ? void 0 : _this$parent.root) != null ? _this$parent$root : null;
        this.updateRoot(newRoot);
      }
    }, {
      key: "updateRoot",
      value: function updateRoot(root) {
        devAssert2(!root || root.isRoot);
        var oldRoot = this.root;
        if (root != oldRoot) {
          var _this$subscribers_, _this$children;
          this.root = root;
          this.values.rootUpdated();
          (_this$subscribers_ = this.subscribers_) == null ? void 0 : _this$subscribers_.forEach(function(comp) {
            return comp.rootUpdated();
          });
          (_this$children = this.children) == null ? void 0 : _this$children.forEach(function(child) {
            return child.updateRoot(root);
          });
        }
      }
    }, {
      key: "addGroup",
      value: function addGroup2(name, match, weight) {
        var groups = this.groups || (this.groups = new Map());
        var children = this.children, node = this.node;
        var cn = new ContextNode2(node, name);
        groups.set(name, {
          cn,
          match,
          weight
        });
        cn.setParent(this);
        children == null ? void 0 : children.forEach(discoverContextNode);
        return cn;
      }
    }, {
      key: "group",
      value: function group(name) {
        var _this$groups, _this$groups$get;
        return ((_this$groups = this.groups) == null ? void 0 : (_this$groups$get = _this$groups.get(name)) == null ? void 0 : _this$groups$get.cn) || null;
      }
    }, {
      key: "findGroup",
      value: function findGroup(node) {
        var _this = this;
        var groups = this.groups;
        if (!groups) {
          return null;
        }
        var found = null;
        var maxWeight = Number.NEGATIVE_INFINITY;
        groups.forEach(function(_ref) {
          var cn = _ref.cn, match = _ref.match, weight = _ref.weight;
          if (match(node, _this.node) && weight > maxWeight) {
            found = cn;
            maxWeight = weight;
          }
        });
        return found;
      }
    }, {
      key: "subscribe",
      value: function subscribe2(id, Ctor, func, deps) {
        var subscribers = this.subscribers_ || (this.subscribers_ = new Map());
        var subscriber = subscribers.get(id);
        if (!subscriber) {
          subscriber = new Ctor(this, func, deps);
          subscribers.set(id, subscriber);
        }
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe2(id) {
        var subscribers = this.subscribers_;
        var subscriber = subscribers == null ? void 0 : subscribers.get(id);
        if (subscriber) {
          subscriber.dispose();
          subscribers.delete(id);
        }
      }
    }, {
      key: "discover_",
      value: function discover_() {
        if (!this.isDiscoverable()) {
          return;
        }
        var closestNode = ContextNode2.closest(this.node, false);
        var parent = (closestNode == null ? void 0 : closestNode.findGroup(this.node)) || closestNode;
        this.updateTree_(parent, false);
      }
    }, {
      key: "updateTree_",
      value: function updateTree_(parent, parentOverridden) {
        var _parent$root;
        this.parentOverridden_ = parentOverridden;
        var oldParent = this.parent;
        if (parent != oldParent) {
          this.parent = parent;
          if (oldParent != null && oldParent.children) {
            removeItem(devAssert2(oldParent.children), this);
          }
          if (parent) {
            var parentChildren = parent.children || (parent.children = []);
            pushIfNotExist(parentChildren, this);
            for (var _iterator = _createForOfIteratorHelperLoose5(parentChildren), _step; !(_step = _iterator()).done; ) {
              var child = _step.value;
              if (child != this && child.isDiscoverable()) {
                child.discover();
              }
            }
          }
          this.values.parentUpdated();
        }
        this.updateRoot((_parent$root = parent == null ? void 0 : parent.root) != null ? _parent$root : null);
      }
    }], [{
      key: "get",
      value: function get2(node) {
        var contextNode = node[NODE_PROP];
        if (!contextNode) {
          contextNode = new ContextNode2(node, null);
          if (getMode().localDev || getMode().test) {
            Object.defineProperty(node, NODE_PROP, {
              value: contextNode,
              writable: false,
              enumerable: false,
              configurable: false
            });
          } else {
            node[NODE_PROP] = contextNode;
          }
        }
        return contextNode;
      }
    }, {
      key: "closest",
      value: function closest(node, includeSelf) {
        if (includeSelf === void 0) {
          includeSelf = true;
        }
        var n2 = node;
        while (n2) {
          if (n2 != node || includeSelf) {
            if (n2[NODE_PROP]) {
              return n2[NODE_PROP];
            }
            var _n = n2, nodeType = _n.nodeType;
            if (nodeType == DOCUMENT_NODE || nodeType == FRAGMENT_NODE || nodeType == ELEMENT_NODE && devAssertElement(n2).tagName.startsWith(AMP_PREFIX)) {
              return ContextNode2.get(n2);
            }
          }
          var assignedSlot = n2[ASSIGNED_SLOT_PROP] || n2.assignedSlot;
          if (assignedSlot) {
            n2 = assignedSlot;
          } else {
            n2 = n2.parentNode;
          }
        }
        return null;
      }
    }, {
      key: "assignSlot",
      value: function assignSlot(node, slot) {
        if (node[ASSIGNED_SLOT_PROP] == slot) {
          return;
        }
        node[ASSIGNED_SLOT_PROP] = slot;
        discoverContained(node);
      }
    }, {
      key: "unassignSlot",
      value: function unassignSlot(node, slot) {
        if (node[ASSIGNED_SLOT_PROP] != slot) {
          return;
        }
        node[ASSIGNED_SLOT_PROP] = void 0;
        discoverContained(node);
      }
    }, {
      key: "rediscoverChildren",
      value: function rediscoverChildren2(node) {
        var _contextNode$children;
        var contextNode = node[NODE_PROP];
        contextNode == null ? void 0 : (_contextNode$children = contextNode.children) == null ? void 0 : _contextNode$children.forEach(discoverContextNode);
      }
    }]);
    return ContextNode2;
  }();
  function forEachContained(node, callback, includeSelf) {
    if (includeSelf === void 0) {
      includeSelf = true;
    }
    var closest = ContextNode.closest(node, includeSelf);
    if (!closest) {
      return;
    }
    if (closest.node == node) {
      callback(closest);
    } else if (closest.children) {
      for (var _iterator2 = _createForOfIteratorHelperLoose5(closest.children), _step2; !(_step2 = _iterator2()).done; ) {
        var child = _step2.value;
        if (node.contains(child.node)) {
          callback(child);
        }
      }
    }
  }
  function discoverContained(node) {
    forEachContained(node, discoverContextNode);
  }
  function discoverContextNode(cn) {
    cn.discover();
  }

  // src/context/subscriber.js
  function _classCallCheck6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties5(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  var EMPTY_ARRAY2 = [];
  var EMPTY_FUNC3 = function EMPTY_FUNC4() {
  };
  function subscribe(node, deps, callback) {
    deps = arrayOrSingleItemToArray(deps);
    var id = callback;
    var contextNode = ContextNode.get(node);
    contextNode.subscribe(id, Subscriber, callback, deps);
  }
  var Subscriber = /* @__PURE__ */ function() {
    function Subscriber2(contextNode, func, deps) {
      var _this = this;
      _classCallCheck6(this, Subscriber2);
      this.contextNode = contextNode;
      this.func_ = func;
      this.deps_ = deps;
      this.depValues_ = deps.length > 0 ? deps.map(EMPTY_FUNC3) : EMPTY_ARRAY2;
      this.depSubscribers_ = deps.length > 0 ? deps.map(function(unusedDep, index) {
        return function(value) {
          _this.depValues_[index] = value;
          _this.update_();
        };
      }) : EMPTY_ARRAY2;
      this.running_ = false;
      this.runCleanup_ = null;
      this.update_ = throttleTail(this.update_.bind(this), setTimeout);
      if (deps.length > 0) {
        var values = this.contextNode.values;
        deps.forEach(function(dep, index) {
          return values.subscribe(dep, _this.depSubscribers_[index]);
        });
      }
      if (this.isConnected_()) {
        this.update_();
      }
    }
    _createClass5(Subscriber2, [{
      key: "dispose",
      value: function dispose() {
        var _this2 = this;
        if (this.deps_.length > 0) {
          var values = this.contextNode.values;
          this.deps_.forEach(function(dep, index) {
            return values.unsubscribe(dep, _this2.depSubscribers_[index]);
          });
        }
        this.cleanup_();
      }
    }, {
      key: "rootUpdated",
      value: function rootUpdated() {
        var isConnected = this.isConnected_();
        this.cleanup_();
        if (isConnected) {
          this.update_();
        }
      }
    }, {
      key: "isConnected_",
      value: function isConnected_() {
        return !!this.contextNode.root;
      }
    }, {
      key: "update_",
      value: function update_() {
        if (!this.isConnected_()) {
          return;
        }
        var running = this.depValues_.every(isDefined2);
        if (running) {
          this.running_ = true;
          this.run_();
        } else if (this.running_) {
          this.running_ = false;
          this.cleanup_();
        }
      }
    }, {
      key: "run_",
      value: function run_() {
        if (this.runCleanup_) {
          tryCallback(this.runCleanup_);
          this.runCleanup_ = null;
        }
        var func = this.func_;
        this.runCleanup_ = callHandler(func, this.depValues_);
      }
    }, {
      key: "cleanup_",
      value: function cleanup_() {
        if (this.runCleanup_) {
          tryCallback(this.runCleanup_);
          this.runCleanup_ = null;
        }
      }
    }]);
    return Subscriber2;
  }();
  function isDefined2(v3) {
    return v3 !== void 0;
  }
  function callHandler(callback, deps) {
    switch (deps.length) {
      case 0:
        return callback();
      case 1:
        return callback(deps[0]);
      case 2:
        return callback(deps[0], deps[1]);
      case 3:
        return callback(deps[0], deps[1], deps[2]);
      default:
        return callback.apply(null, deps);
    }
  }

  // src/context/index.js
  function setParent(node, parent) {
    ContextNode.get(node).setParent(parent);
  }
  function discover(node) {
    ContextNode.get(node).discover();
  }
  function rediscoverChildren(node) {
    ContextNode.rediscoverChildren(node);
  }
  function setProp(node, prop, setter, value) {
    ContextNode.get(node).values.set(prop, setter, value);
  }
  function removeProp(node, prop, setter) {
    ContextNode.get(node).values.remove(prop, setter);
  }
  function addGroup(node, name, match, weight) {
    if (weight === void 0) {
      weight = 0;
    }
    ContextNode.get(node).addGroup(name, match, weight);
  }
  function setGroupProp(node, groupName, prop, setter, value) {
    ContextNode.get(node).group(groupName).values.set(prop, setter, value);
  }

  // src/preact/context.js
  var context;
  function getAmpContext() {
    return context || (context = createContext({
      renderable: true,
      playable: true,
      loading: Loading.AUTO
    }));
  }
  function WithAmpContext(_ref) {
    var children = _ref.children, _ref$loading = _ref.loading, loadingProp = _ref$loading === void 0 ? "auto" : _ref$loading, notifyProp = _ref.notify, _ref$playable = _ref.playable, playableProp = _ref$playable === void 0 ? true : _ref$playable, _ref$renderable = _ref.renderable, renderableProp = _ref$renderable === void 0 ? true : _ref$renderable;
    var parent = useAmpContext();
    var renderable = renderableProp && parent.renderable;
    var playable = renderable && playableProp && parent.playable;
    var loading = reducer(renderable ? Loading.AUTO : Loading.LAZY, reducer(loadingProp, parent.loading));
    var notify = notifyProp || parent.notify;
    var current = useMemo(function() {
      return {
        renderable,
        playable,
        loading,
        notify
      };
    }, [renderable, playable, loading, notify]);
    var AmpContext = getAmpContext();
    return createElement(AmpContext.Provider, {
      children,
      value: current
    });
  }
  function useAmpContext() {
    var AmpContext = getAmpContext();
    return useContext(AmpContext);
  }

  // src/preact/slot.js
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  var EMPTY = {};
  var cache = new WeakMap();
  function createSlot(element, name, defaultProps, as) {
    if (as === void 0) {
      as = false;
    }
    element.setAttribute("slot", name);
    if (!as) {
      return createElement(Slot, _extends2({}, defaultProps || EMPTY, {
        name
      }));
    }
    var cached = cache.get(element);
    if (cached && objectsEqualShallow(cached.oldProps, defaultProps)) {
      return cached.component;
    }
    function SlotWithProps(props) {
      return createElement(Slot, _extends2({}, defaultProps || EMPTY, {
        name
      }, props));
    }
    cache.set(element, {
      oldProps: defaultProps,
      component: SlotWithProps
    });
    return SlotWithProps;
  }
  function Slot(props) {
    var ref = useRef(null);
    useSlotContext(ref, props);
    useEffect(function() {
      if (props["postRender"]) {
        props["postRender"]();
      }
    });
    return createElement("slot", _extends2({}, props, {
      ref
    }));
  }
  function useSlotContext(ref, opt_props) {
    var _ref = opt_props || EMPTY, loading = _ref["loading"];
    var context2 = useAmpContext();
    useLayoutEffect(function() {
      var slot = ref.current;
      devAssert2(isElement(slot), "Element expected");
      setProp(slot, CanRender, Slot, context2.renderable);
      setProp(slot, CanPlay, Slot, context2.playable);
      setProp(slot, LoadingProp, Slot, context2.loading);
      if (!context2.playable) {
        execute(slot, pauseAll);
      }
      return function() {
        removeProp(slot, CanRender, Slot);
        removeProp(slot, CanPlay, Slot);
        removeProp(slot, LoadingProp, Slot);
        rediscoverChildren(slot);
      };
    }, [ref, context2]);
    useLayoutEffect(function() {
      var slot = ref.current;
      devAssert2(isElement(slot), "Element expected");
      if (loading != Loading.LAZY) {
        execute(slot, loadAll);
      }
      return function() {
        execute(slot, unmountAll);
      };
    }, [ref, loading]);
  }
  function execute(slot, action) {
    var assignedElements = slot.assignedElements ? slot.assignedElements() : slot;
    if (Array.isArray(assignedElements) && assignedElements.length == 0) {
      return;
    }
    var win = slot.ownerDocument.defaultView;
    if (!win) {
      return;
    }
    var scheduler = win.requestIdleCallback || win.setTimeout;
    scheduler(function() {
      return action(assignedElements);
    });
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
    } catch (e3) {
      return false;
    }
  }
  function prependSelectorsWith(selector, distribute) {
    return selector.replace(/^|,/g, "$&" + distribute + " ");
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
  function scopedQuerySelector(root, selector) {
    if (isScopeSelectorSupported(root)) {
      return root.querySelector(prependSelectorsWith(selector, ":scope"));
    }
    var fallbackResult = scopedQuerySelectionFallback(root, selector);
    return fallbackResult[0] === void 0 ? null : fallbackResult[0];
  }
  function matches(el, selector) {
    var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
    if (matcher) {
      return matcher.call(el, selector);
    }
    return false;
  }
  function childElementByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelector(parent, "> [" + attr + "]");
  }
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
  }

  // src/dom.js
  var DEFAULT_CUSTOM_EVENT_OPTIONS = {
    bubbles: true,
    cancelable: true
  };
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
  function createElementWithAttributes(doc, tagName, attributes) {
    var element = doc.createElement(tagName);
    return addAttributesToElement(element, attributes);
  }
  function getDataParamsFromAttributes(element, opt_computeParamNameFunc, opt_paramPattern) {
    var computeParamNameFunc = opt_computeParamNameFunc || function(key2) {
      return key2;
    };
    var dataset = element.dataset;
    var params = dict();
    var paramPattern = opt_paramPattern ? opt_paramPattern : /^param(.+)/;
    for (var key in dataset) {
      var _matches = key.match(paramPattern);
      if (_matches) {
        var param = _matches[1][0].toLowerCase() + _matches[1].substr(1);
        params[computeParamNameFunc(param)] = dataset[key];
      }
    }
    return params;
  }
  function openWindowDialog(win, url, target, opt_features) {
    var res;
    try {
      res = win.open(url, target, opt_features);
    } catch (e3) {
      dev().error("DOM", "Failed to open url on target: ", target, e3);
    }
    if (!res && target != "_top" && !includes(opt_features || "", "noopener")) {
      res = win.open(url, "_top");
    }
    return res;
  }
  function parseBooleanAttribute(s3) {
    return s3 == null ? void 0 : s3 !== "false";
  }
  function dispatchCustomEvent(node, name, opt_data, opt_options) {
    var data = opt_data || {};
    var event = node.ownerDocument.createEvent("Event");
    event.data = data;
    var _ref = opt_options || DEFAULT_CUSTOM_EVENT_OPTIONS, bubbles = _ref.bubbles, cancelable = _ref.cancelable;
    event.initEvent(name, bubbles, cancelable);
    node.dispatchEvent(event);
  }

  // src/core/types/date.js
  function parseDate(s3) {
    if (!s3) {
      return null;
    }
    if (s3.toLowerCase() === "now") {
      return Date.now();
    }
    var parsed = Date.parse(s3);
    return isNaN(parsed) ? null : parsed;
  }
  function getDate(value) {
    if (!value) {
      return null;
    }
    if (typeof value == "number") {
      return value;
    }
    if (isString(value)) {
      return parseDate(value);
    }
    value = value;
    return value.getTime();
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
    for (var i3 = 0; i3 < list.length; i3++) {
      var script = list[i3];
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
    var s3 = getServicePromiseOrNull(win, id);
    if (s3) {
      return s3;
    }
    return getElementServicePromiseOrNull(win, id, extension, version, opt_element);
  }
  function getElementServiceForDoc(element, id, extension, opt_element) {
    return getElementServiceIfAvailableForDoc(element, id, extension, opt_element).then(function(service) {
      return assertService(service, id, extension);
    });
  }
  function getElementServiceIfAvailableForDoc(element, id, extension, opt_element) {
    var s3 = getServicePromiseOrNullForDoc(element, id);
    if (s3) {
      return s3;
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
    var s3 = getServiceForDocOrNull(element, id);
    if (s3) {
      return Promise.resolve(s3);
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
  function _classCallCheck7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties6(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  var Services = /* @__PURE__ */ function() {
    function Services2() {
      _classCallCheck7(this, Services2);
    }
    _createClass6(Services2, null, [{
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

  // third_party/webcomponentsjs/ShadowCSS.js
  var polyfillHost = "-shadowcsshost";
  var polyfillHostContext = "-shadowcsscontext";
  var parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim");
  var cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim");
  var polyfillHostNoCombinator = polyfillHost + "-no-combinator";
  var polyfillHostRe = new RegExp(polyfillHost, "gim");
  var polyfillHostContextRe = new RegExp(polyfillHostContext, "gim");

  // src/shadow-embed.js
  var SHADOW_CSS_CACHE = "__AMP_SHADOW_CSS";
  function installShadowStyle(shadowRoot, name, cssText) {
    var doc = shadowRoot.ownerDocument;
    var win = toWin(doc.defaultView);
    if (shadowRoot.adoptedStyleSheets !== void 0 && win.CSSStyleSheet.prototype.replaceSync !== void 0) {
      var cache2 = win[SHADOW_CSS_CACHE] || (win[SHADOW_CSS_CACHE] = {});
      var styleSheet = cache2[name];
      if (!styleSheet) {
        styleSheet = new win.CSSStyleSheet();
        styleSheet.replaceSync(cssText);
        cache2[name] = styleSheet;
      }
      shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.concat(styleSheet);
    } else {
      var styleEl = doc.createElement("style");
      styleEl.setAttribute("data-name", name);
      styleEl.textContent = cssText;
      shadowRoot.appendChild(styleEl);
    }
  }

  // src/core/math/id-generator.js
  function sequentialIdGenerator() {
    var counter = 0;
    return function() {
      return String(++counter);
    };
  }

  // src/preact/base-element.js
  function _extends3() {
    _extends3 = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  function _classCallCheck8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties7(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target2, property2, receiver2) {
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
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o3, p3) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o4, p4) {
      o4.__proto__ = p4;
      return o4;
    };
    return _setPrototypeOf(o3, p3);
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
    } catch (e3) {
      return false;
    }
  }
  function _getPrototypeOf(o3) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf(o3);
  }
  var CHILDREN_MUTATION_INIT = {
    childList: true
  };
  var PASSTHROUGH_MUTATION_INIT = {
    childList: true,
    characterData: true
  };
  var TEMPLATES_MUTATION_INIT = {
    childList: true
  };
  var SHADOW_CONTAINER_ATTRS = dict({
    "style": "display: contents; background: inherit;",
    "part": "c"
  });
  var SERVICE_SLOT_NAME = "i-amphtml-svc";
  var SERVICE_SLOT_ATTRS = dict({
    "name": SERVICE_SLOT_NAME
  });
  var RENDERED_ATTR = "i-amphtml-rendered";
  var RENDERED_ATTRS = dict({
    "i-amphtml-rendered": ""
  });
  var SIZE_DEFINED_STYLE = {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%"
  };
  var RENDERED_PROP = "__AMP_RENDERED";
  var UNSLOTTED_GROUP = "unslotted";
  var MATCH_ANY = function MATCH_ANY2() {
    return true;
  };
  var childIdGenerator = sequentialIdGenerator();
  var ONE_OF_ERROR_MESSAGE = 'Only one of "attr", "attrs", "attrPrefix", "passthrough", "passthroughNonEmpty", or "selector" must be given';
  function checkPropsFor(propDefs, cb) {
    return Object.values(propDefs).some(cb);
  }
  var HAS_MEDIA = function HAS_MEDIA2(def) {
    return !!def.media;
  };
  var HAS_SELECTOR = function HAS_SELECTOR2(def) {
    return typeof def === "string" || !!def.selector;
  };
  var HAS_PASSTHROUGH = function HAS_PASSTHROUGH2(def) {
    return !!(def.passthrough || def.passthroughNonEmpty);
  };
  var IS_EMPTY_TEXT_NODE = function IS_EMPTY_TEXT_NODE2(node) {
    return node.nodeType === 3 && node.nodeValue.trim().length === 0;
  };
  var PreactBaseElement = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(PreactBaseElement2, _AMP$BaseElement);
    var _super = _createSuper(PreactBaseElement2);
    function PreactBaseElement2(element) {
      var _this;
      _classCallCheck8(this, PreactBaseElement2);
      _this = _super.call(this, element);
      _this.defaultProps_ = dict({
        "loading": Loading.AUTO,
        "onReadyState": _this.onReadyState_.bind(_assertThisInitialized(_this)),
        "onPlayingState": _this.updateIsPlaying_.bind(_assertThisInitialized(_this))
      });
      _this.context_ = {
        renderable: false,
        playable: true,
        loading: Loading.AUTO,
        notify: function notify() {
          return _this.mutateElement(function() {
          });
        }
      };
      _this.resetLoading_ = false;
      _this.apiWrapper_ = null;
      _this.currentRef_ = null;
      _this.refSetter_ = function(current) {
        if (current !== null) {
          if (_this.apiWrapper_) {
            _this.checkApiWrapper_(current);
          } else {
            _this.initApiWrapper_(current);
          }
        }
        _this.currentRef_ = current;
        _this.maybeUpdateReadyState_();
      };
      _this.deferredApi_ = null;
      _this.contextValues_ = null;
      _this.container_ = null;
      _this.scheduledRender_ = false;
      _this.renderDeferred_ = null;
      _this.boundRerender_ = function() {
        _this.scheduledRender_ = false;
        _this.rerender_();
      };
      _this.hydrationPending_ = false;
      _this.mounted_ = false;
      _this.observer = null;
      _this.pauseHelper_ = new PauseHelper(element);
      _this.mediaQueryProps_ = null;
      return _this;
    }
    _createClass7(PreactBaseElement2, [{
      key: "init",
      value: function init() {
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        var Ctor = this.constructor;
        if (Ctor["layoutSizeDefined"]) {
          return isLayoutSizeDefined(layout) || layout == Layout.CONTAINER;
        }
        return _get(_getPrototypeOf(PreactBaseElement2.prototype), "isLayoutSupported", this).call(this, layout);
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        var Ctor = this.constructor;
        this.observer = new MutationObserver(this.checkMutations_.bind(this));
        var props = Ctor["props"];
        var childrenInit = checkPropsFor(props, HAS_SELECTOR) ? CHILDREN_MUTATION_INIT : null;
        var passthroughInit = checkPropsFor(props, HAS_PASSTHROUGH) ? PASSTHROUGH_MUTATION_INIT : null;
        var templatesInit = Ctor["usesTemplate"] ? TEMPLATES_MUTATION_INIT : null;
        this.observer.observe(this.element, _extends3({
          attributes: true
        }, childrenInit, passthroughInit, templatesInit));
        this.mediaQueryProps_ = checkPropsFor(props, HAS_MEDIA) ? new MediaQueryProps(this.win, function() {
          return _this2.scheduleRender_();
        }) : null;
        var staticProps = Ctor["staticProps"];
        var initProps = this.init();
        Object.assign(this.defaultProps_, staticProps, initProps);
        this.checkPropsPostMutations();
        subscribe(this.element, [], function() {
          return function() {
            _this2.mounted_ = false;
            if (_this2.container_) {
              render(null, _this2.container_);
            }
          };
        });
        subscribe(this.element, [CanRender, CanPlay, LoadingProp], function(canRender, canPlay, loading) {
          _this2.context_.renderable = canRender;
          _this2.context_.playable = canPlay;
          _this2.context_.loading = loading;
          _this2.mounted_ = true;
          _this2.scheduleRender_();
        });
        var useContexts = Ctor["useContexts"];
        if (useContexts.length != 0) {
          subscribe(this.element, useContexts, function() {
            for (var _len = arguments.length, contexts = new Array(_len), _key = 0; _key < _len; _key++) {
              contexts[_key] = arguments[_key];
            }
            _this2.contextValues_ = contexts;
            _this2.scheduleRender_();
          });
        }
        this.renderDeferred_ = new Deferred();
        this.scheduleRender_();
        if (Ctor["loadable"]) {
          this.setReadyState(ReadyState.LOADING);
        }
        this.maybeUpdateReadyState_();
        return this.renderDeferred_.promise;
      }
    }, {
      key: "ensureLoaded",
      value: function ensureLoaded3() {
        var Ctor = this.constructor;
        if (!Ctor["loadable"]) {
          return;
        }
        this.mutateProps(dict({
          "loading": Loading.EAGER
        }));
        this.resetLoading_ = true;
      }
    }, {
      key: "mountCallback",
      value: function mountCallback() {
        discover(this.element);
        var Ctor = this.constructor;
        if (Ctor["loadable"] && this.getProp("loading") != Loading.AUTO) {
          this.mutateProps({
            "loading": Loading.AUTO
          });
          this.resetLoading_ = false;
        }
      }
    }, {
      key: "unmountCallback",
      value: function unmountCallback() {
        var _this$mediaQueryProps;
        discover(this.element);
        var Ctor = this.constructor;
        if (Ctor["loadable"]) {
          this.mutateProps({
            "loading": Loading.UNLOAD
          });
        }
        this.updateIsPlaying_(false);
        (_this$mediaQueryProps = this.mediaQueryProps_) == null ? void 0 : _this$mediaQueryProps.dispose();
      }
    }, {
      key: "mutatedAttributesCallback",
      value: function mutatedAttributesCallback() {
        if (this.container_) {
          this.scheduleRender_();
        }
      }
    }, {
      key: "mutateProps",
      value: function mutateProps(props) {
        Object.assign(this.defaultProps_, props);
        this.scheduleRender_();
      }
    }, {
      key: "api",
      value: function api() {
        return devAssert2(this.currentRef_);
      }
    }, {
      key: "registerApiAction",
      value: function registerApiAction(alias, handler, minTrust) {
        var _this3 = this;
        if (minTrust === void 0) {
          minTrust = ActionTrust.DEFAULT;
        }
        this.registerAction(alias, function(invocation) {
          return handler(_this3.api(), invocation);
        }, minTrust);
      }
    }, {
      key: "mutationObserverCallback",
      value: function mutationObserverCallback(unusedRecords) {
      }
    }, {
      key: "checkPropsPostMutations",
      value: function checkPropsPostMutations() {
      }
    }, {
      key: "updatePropsForRendering",
      value: function updatePropsForRendering(unusedProps) {
      }
    }, {
      key: "isReady",
      value: function isReady(unusedProps) {
        return true;
      }
    }, {
      key: "checkMutations_",
      value: function checkMutations_(records) {
        var Ctor = this.constructor;
        this.mutationObserverCallback(records);
        var rerender = records.some(function(m3) {
          return shouldMutationBeRerendered(Ctor, m3);
        });
        if (rerender) {
          this.checkPropsPostMutations();
          this.scheduleRender_();
        }
      }
    }, {
      key: "scheduleRender_",
      value: function scheduleRender_() {
        if (!this.scheduledRender_) {
          this.scheduledRender_ = true;
          this.mutateElement(this.boundRerender_);
        }
      }
    }, {
      key: "maybeUpdateReadyState_",
      value: function maybeUpdateReadyState_() {
        var api = this.currentRef_;
        var apiReadyState = api == null ? void 0 : api["readyState"];
        if (apiReadyState && apiReadyState !== this.element.readyState) {
          this.onReadyState_(apiReadyState);
        }
      }
    }, {
      key: "onReadyState_",
      value: function onReadyState_(state, opt_failure) {
        this.setReadyState(state, opt_failure);
        var Ctor = this.constructor;
        if (Ctor["unloadOnPause"]) {
          this.updateIsPlaying_(state == ReadyState.COMPLETE);
        }
        if (this.resetLoading_) {
          this.resetLoading_ = false;
          this.mutateProps({
            "loading": Loading.AUTO
          });
        }
      }
    }, {
      key: "rerender_",
      value: function rerender_() {
        var _this4 = this;
        if (!this.mounted_) {
          return;
        }
        var Ctor = this.constructor;
        var isShadow = Ctor["usesShadowDom"];
        var lightDomTag = isShadow ? null : Ctor["lightDomTag"];
        var isDetached = Ctor["detached"];
        if (!this.container_) {
          var doc = this.win.document;
          if (isShadow) {
            devAssert2(!isDetached, 'The AMP element cannot be rendered in detached mode when "props" are configured with "children" property.');
            var shadowRoot = this.element.shadowRoot;
            var container = shadowRoot && childElementByTag(shadowRoot, "c");
            if (container) {
              this.hydrationPending_ = true;
            } else {
              var _this$getPlaceholder, _this$getFallback;
              shadowRoot = this.element.attachShadow({
                mode: "open",
                delegatesFocus: Ctor["delegatesFocus"]
              });
              var shadowCss = Ctor["shadowCss"];
              if (shadowCss) {
                installShadowStyle(shadowRoot, this.element.tagName, shadowCss);
              }
              container = createElementWithAttributes(doc, "c", SHADOW_CONTAINER_ATTRS);
              shadowRoot.appendChild(container);
              var serviceSlot = createElementWithAttributes(doc, "slot", SERVICE_SLOT_ATTRS);
              shadowRoot.appendChild(serviceSlot);
              (_this$getPlaceholder = this.getPlaceholder()) == null ? void 0 : _this$getPlaceholder.setAttribute("slot", SERVICE_SLOT_NAME);
              (_this$getFallback = this.getFallback()) == null ? void 0 : _this$getFallback.setAttribute("slot", SERVICE_SLOT_NAME);
            }
            this.container_ = container;
            setParent(shadowRoot, this.element);
            addGroup(this.element, UNSLOTTED_GROUP, MATCH_ANY, -1);
            setGroupProp(this.element, UNSLOTTED_GROUP, CanRender, this, false);
          } else if (lightDomTag) {
            this.container_ = this.element;
            var replacement = childElementByAttr(this.container_, RENDERED_ATTR) || createElementWithAttributes(doc, lightDomTag, RENDERED_ATTRS);
            replacement[RENDERED_PROP] = true;
            if (Ctor["layoutSizeDefined"]) {
              replacement.classList.add("i-amphtml-fill-content");
            }
            this.container_.appendChild(replacement);
          } else {
            var _container = doc.createElement("i-amphtml-c");
            this.container_ = _container;
            this.applyFillContent(_container);
            if (!isDetached) {
              this.element.appendChild(_container);
            }
          }
        }
        var useContexts = Ctor["useContexts"];
        var contextValues = this.contextValues_;
        var isContextReady = useContexts.length == 0 || contextValues != null;
        if (!isContextReady) {
          return;
        }
        var props = collectProps(Ctor, this.element, this.refSetter_, this.defaultProps_, this.mediaQueryProps_);
        this.updatePropsForRendering(props);
        if (!this.isReady(props)) {
          return;
        }
        var comp = createElement(Ctor["Component"], props);
        for (var i3 = 0; i3 < useContexts.length; i3++) {
          var Context = useContexts[i3].type;
          var value = contextValues[i3];
          if (value) {
            comp = createElement(Context.Provider, {
              value
            }, comp);
          }
        }
        var v3 = createElement(WithAmpContext, _extends3({}, this.context_), comp);
        if (this.hydrationPending_) {
          this.hydrationPending_ = false;
          hydrate(v3, this.container_);
        } else {
          var _replacement = lightDomTag ? childElementByAttr(this.container_, RENDERED_ATTR) : null;
          if (_replacement) {
            _replacement[RENDERED_PROP] = true;
          }
          render(v3, this.container_, _replacement);
        }
        if (!isShadow && !isDetached) {
          this.mutateElement(function() {
            return dispatchCustomEvent(_this4.element, AmpEvents.DOM_UPDATE, null);
          });
        }
        if (this.renderDeferred_) {
          this.renderDeferred_.resolve();
          this.renderDeferred_ = null;
        }
      }
    }, {
      key: "getProp",
      value: function getProp(prop, opt_fallback) {
        if (!hasOwn(this.defaultProps_, prop)) {
          return opt_fallback;
        }
        return this.defaultProps_[prop];
      }
    }, {
      key: "getApi",
      value: function getApi() {
        var api = this.apiWrapper_;
        if (api) {
          return Promise.resolve(api);
        }
        if (!this.deferredApi_) {
          this.deferredApi_ = new Deferred();
        }
        return this.deferredApi_.promise;
      }
    }, {
      key: "initApiWrapper_",
      value: function initApiWrapper_(current) {
        var api = map();
        var keys = Object.keys(current);
        for (var i3 = 0; i3 < keys.length; i3++) {
          var key = keys[i3];
          wrapRefProperty(this, api, key);
        }
        this.apiWrapper_ = api;
        if (this.deferredApi_) {
          this.deferredApi_.resolve(api);
          this.deferredApi_ = null;
        }
      }
    }, {
      key: "checkApiWrapper_",
      value: function checkApiWrapper_(current) {
        if (!getMode().localDev) {
          return;
        }
        if (current.constructor && current.constructor.name !== "Object") {
          return;
        }
        var api = this.apiWrapper_;
        var newKeys = Object.keys(current);
        for (var i3 = 0; i3 < newKeys.length; i3++) {
          var key = newKeys[i3];
          devAssert2(hasOwn(api, key), 'Inconsistent Bento API shape: imperative API gained a "%s" key for %s', key, this.element);
        }
        var oldKeys = Object.keys(api);
        for (var _i = 0; _i < oldKeys.length; _i++) {
          var _key2 = oldKeys[_i];
          devAssert2(hasOwn(current, _key2), 'Inconsistent Bento API shape: imperative API lost a "%s" key for %s', _key2, this.element);
        }
      }
    }, {
      key: "triggerEvent",
      value: function triggerEvent(element, eventName, detail) {
        dispatchCustomEvent(element, eventName, detail);
      }
    }, {
      key: "pauseCallback",
      value: function pauseCallback() {
        var Ctor = this.constructor;
        if (Ctor["unloadOnPause"]) {
          this.mutateProps(dict({
            "loading": Loading.UNLOAD
          }));
          this.resetLoading_ = true;
        } else {
          var _api$pause;
          var api = this.currentRef_;
          api == null ? void 0 : (_api$pause = api["pause"]) == null ? void 0 : _api$pause.call(api);
        }
      }
    }, {
      key: "updateIsPlaying_",
      value: function updateIsPlaying_(isPlaying) {
        this.pauseHelper_.updatePlaying(isPlaying);
      }
    }], [{
      key: "R1",
      value: function R1() {
        return true;
      }
    }, {
      key: "requiresShadowDom",
      value: function requiresShadowDom() {
        return this["usesShadowDom"];
      }
    }, {
      key: "usesLoading",
      value: function usesLoading() {
        var Ctor = this;
        return Ctor["loadable"];
      }
    }, {
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        var Ctor = this;
        return !Ctor.usesLoading();
      }
    }]);
    return PreactBaseElement2;
  }(AMP.BaseElement);
  function wrapRefProperty(baseElement, api, key) {
    Object.defineProperty(api, key, {
      configurable: true,
      get: function get2() {
        return baseElement.currentRef_[key];
      },
      set: function set(v3) {
        baseElement.currentRef_[key] = v3;
      }
    });
  }
  PreactBaseElement["Component"] = function() {
    devAssert2(false, "Must provide Component");
  };
  PreactBaseElement["staticProps"] = void 0;
  PreactBaseElement["useContexts"] = getMode().localDev ? Object.freeze([]) : [];
  PreactBaseElement["loadable"] = false;
  PreactBaseElement["unloadOnPause"] = false;
  PreactBaseElement["layoutSizeDefined"] = false;
  PreactBaseElement["lightDomTag"] = "";
  PreactBaseElement["className"] = "";
  PreactBaseElement["usesTemplate"] = false;
  PreactBaseElement["shadowCss"] = null;
  PreactBaseElement["usesShadowDom"] = false;
  PreactBaseElement["detached"] = false;
  PreactBaseElement["delegatesFocus"] = false;
  PreactBaseElement["props"] = {};
  function matchesAttrPrefix(attributeName, attributePrefix) {
    return attributeName !== null && attributePrefix !== void 0 && attributeName.startsWith(attributePrefix) && attributeName !== attributePrefix;
  }
  function collectProps(Ctor, element, ref, defaultProps, mediaQueryProps) {
    var className = Ctor["className"], layoutSizeDefined = Ctor["layoutSizeDefined"], lightDomTag = Ctor["lightDomTag"], propDefs = Ctor["props"];
    if (mediaQueryProps) {
      mediaQueryProps.start();
    }
    var props = _extends3({}, defaultProps, {
      ref
    });
    if (lightDomTag) {
      props[RENDERED_ATTR] = true;
      props[RENDERED_PROP] = true;
      props["as"] = lightDomTag;
    }
    if (className) {
      props["className"] = className;
    }
    if (layoutSizeDefined) {
      if (Ctor["usesShadowDom"]) {
        props["style"] = SIZE_DEFINED_STYLE;
      } else {
        props["className"] = ("i-amphtml-fill-content " + (className || "")).trim() || null;
      }
    }
    parsePropDefs(Ctor, props, propDefs, element, mediaQueryProps);
    if (mediaQueryProps) {
      mediaQueryProps.complete();
    }
    return props;
  }
  function parsePropDefs(Ctor, props, propDefs, element, mediaQueryProps) {
    if (checkPropsFor(propDefs, HAS_SELECTOR)) {
      var nodes = element.getRealChildNodes ? element.getRealChildNodes() : toArray(element.childNodes);
      for (var i3 = 0; i3 < nodes.length; i3++) {
        var childElement = nodes[i3];
        var match = matchChild(childElement, propDefs);
        if (!match) {
          continue;
        }
        var def = propDefs[match];
        var _def$as = def.as, as = _def$as === void 0 ? false : _def$as, single = def.single, _def$name = def.name, name = _def$name === void 0 ? match : _def$name, clone = def.clone, _def$props = def.props, slotProps = _def$props === void 0 ? {} : _def$props;
        devAssert2(clone || Ctor["usesShadowDom"]);
        var parsedSlotProps = {};
        parsePropDefs(Ctor, parsedSlotProps, slotProps, childElement, mediaQueryProps);
        if (single) {
          props[name] = createSlot(childElement, childElement.getAttribute("slot") || "i-amphtml-" + name, parsedSlotProps, as);
        } else {
          var list = props[name] || (props[name] = []);
          devAssert2(!as);
          list.push(clone ? createShallowVNodeCopy(childElement) : createSlot(childElement, childElement.getAttribute("slot") || "i-amphtml-" + name + "-" + childIdGenerator(), parsedSlotProps));
        }
      }
    }
    for (var _name in propDefs) {
      var _def = propDefs[_name];
      devAssert2(!!_def.attr + !!_def.attrs + !!_def.attrPrefix + !!_def.selector + !!_def.passthrough + !!_def.passthroughNonEmpty <= 1, ONE_OF_ERROR_MESSAGE);
      var value = void 0;
      if (_def.passthrough) {
        devAssert2(Ctor["usesShadowDom"]);
        value = [createElement(Slot, {
          loading: Loading.LAZY
        })];
      } else if (_def.passthroughNonEmpty) {
        devAssert2(Ctor["usesShadowDom"]);
        value = element.getRealChildNodes().every(IS_EMPTY_TEXT_NODE) ? null : [createElement(Slot, {
          loading: Loading.LAZY
        })];
      } else if (_def.attr) {
        value = element.getAttribute(_def.attr);
        if (_def.media && value != null) {
          value = mediaQueryProps.resolveListQuery(String(value));
        }
      } else if (_def.parseAttrs) {
        devAssert2(_def.attrs);
        value = _def.parseAttrs(element);
      } else if (_def.attrPrefix) {
        var currObj = {};
        var objContains = false;
        var attrs = element.attributes;
        for (var _i2 = 0; _i2 < attrs.length; _i2++) {
          var attrib = attrs[_i2];
          if (matchesAttrPrefix(attrib.name, _def.attrPrefix)) {
            currObj[dashToCamelCase(attrib.name.slice(_def.attrPrefix.length))] = attrib.value;
            objContains = true;
          }
        }
        if (objContains) {
          value = currObj;
        }
      }
      if (value == null) {
        if (_def.default != null) {
          props[_name] = _def.default;
        }
      } else {
        var v3 = _def.type == "number" ? parseFloat(value) : _def.type == "boolean" ? parseBooleanAttribute(value) : _def.type == "date" ? getDate(value) : value;
        props[_name] = v3;
      }
    }
  }
  function createShallowVNodeCopy(element) {
    var props = {
      "key": element
    };
    var attributes = element.attributes, localName = element.localName;
    var length = attributes.length;
    for (var i3 = 0; i3 < length; i3++) {
      var _attributes$i = attributes[i3], name = _attributes$i.name, value = _attributes$i.value;
      props[name] = value;
    }
    return createElement(localName, props);
  }
  function matchChild(element, defs) {
    for (var match in defs) {
      var def = defs[match];
      var selector = typeof def == "string" ? def : def.selector;
      if (matches(element, selector)) {
        return match;
      }
    }
    return null;
  }
  function shouldMutationForNodeListBeRerendered(nodeList) {
    for (var i3 = 0; i3 < nodeList.length; i3++) {
      var node = nodeList[i3];
      if (isElement(node)) {
        if (node[RENDERED_PROP] || node.tagName.startsWith("I-") || node.getAttribute("slot") == "i-amphtml-svc") {
          continue;
        }
        return true;
      }
      if (node.nodeType == 3) {
        return true;
      }
    }
    return false;
  }
  function shouldMutationBeRerendered(Ctor, m3) {
    var type = m3.type;
    if (type == "attributes") {
      if (Ctor["usesTemplate"] && m3.attributeName == "template") {
        return true;
      }
      var props = Ctor["props"];
      for (var name in props) {
        var def = props[name];
        if (m3.attributeName == def.attr || def.attrs && def.attrs.includes(devAssert2(m3.attributeName)) || matchesAttrPrefix(m3.attributeName, def.attrPrefix)) {
          return true;
        }
      }
      return false;
    }
    if (type == "childList") {
      return shouldMutationForNodeListBeRerendered(m3.addedNodes) || shouldMutationForNodeListBeRerendered(m3.removedNodes);
    }
    return false;
  }

  // extensions/amp-social-share/1.0/social-share.jss.js
  var $button = "button-73e3102";

  // extensions/amp-social-share/1.0/social-share.css.js
  var BASE_STYLE = {
    "textDecoration": "none",
    "cursor": "pointer",
    "position": "relative"
  };

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

  // extensions/amp-social-share/1.0/social-share-svgs.js
  var _path;
  var _path2;
  var _path3;
  var _path4;
  var _path5;
  var _path6;
  var _path7;
  var _path8;
  var _path9;
  var _path10;
  function _extends4() {
    _extends4 = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends4.apply(this, arguments);
  }
  function SocialShareIcon(props) {
    switch (props["type"]) {
      case "FACEBOOK":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path || (_path = createElement("path", {
          fill: "currentColor",
          d: "M44 22.134C44 9.90843 34.1516 0 22 0C9.84844 0 0 9.90843 0 22.134C0 33.1837 8.04375 42.34 18.5625 44V28.5321H12.9766V22.134H18.5625V17.2576C18.5625 11.7111 21.8453 8.6461 26.8727 8.6461C29.2789 8.6461 31.7969 9.0784 31.7969 9.0784V14.5254H29.0211C26.2883 14.5254 25.4375 16.2331 25.4375 17.9839V22.134H31.5391L30.5637 28.5321H25.4375V44C35.9562 42.34 44 33.1837 44 22.134Z"
        })));
      case "PINTEREST":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path2 || (_path2 = createElement("path", {
          fill: "currentColor",
          d: "M22.0181 0C9.8583 0 0 9.8421 0 21.9819C0 31.2993 5.799 39.2599 13.9901 42.4622C13.7907 40.7253 13.6276 38.0477 14.0626 36.148C14.4613 34.4293 16.6359 25.2204 16.6359 25.2204C16.6359 25.2204 15.9835 23.8997 15.9835 21.9638C15.9835 18.9062 17.7594 16.6266 19.9703 16.6266C21.855 16.6266 22.7611 18.0378 22.7611 19.7204C22.7611 21.602 21.565 24.4243 20.9308 27.0477C20.4052 29.2368 22.0362 31.028 24.1927 31.028C28.107 31.028 31.1153 26.903 31.1153 20.9688C31.1153 15.7039 27.3278 12.0312 21.9093 12.0312C15.6392 12.0313 11.9604 16.7171 11.9604 21.5658C11.9604 23.4474 12.6853 25.4737 13.5914 26.5773C13.7726 26.7944 13.7907 26.9934 13.7364 27.2105C13.5733 27.898 13.1927 29.3997 13.1202 29.7072C13.0296 30.1053 12.794 30.1957 12.3772 29.9967C9.62271 28.7122 7.90114 24.7138 7.90114 21.4753C7.90114 14.5461 12.939 8.17763 22.453 8.17763C30.0823 8.17763 36.0263 13.6053 36.0263 20.8783C36.0263 28.4589 31.2421 34.5559 24.6095 34.5559C22.3805 34.5559 20.2784 33.398 19.5716 32.023C19.5716 32.023 18.4662 36.2204 18.1944 37.2516C17.7051 39.1694 16.364 41.5576 15.458 43.023C17.5238 43.6562 19.6985 44 21.9818 44C34.1416 44 43.9999 34.1579 43.9999 22.0181C44.0361 9.8421 34.1778 0 22.0181 0Z"
        })));
      case "LINKEDIN":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path3 || (_path3 = createElement("path", {
          fill: "currentColor",
          d: "M15.1765 33H10.4706V15.7044H15.1765V33ZM12.8235 13.6604C11.2549 13.6604 10 12.4025 10 10.8302C10 9.25786 11.2549 8 12.8235 8C14.3922 8 15.4902 9.41509 15.4902 10.9874C15.4902 12.5597 14.3922 13.6604 12.8235 13.6604ZM34 33H29.2941V24.195C29.2941 18.8491 23.0196 19.3208 23.0196 24.195V33H18.3137V15.7044H23.0196V18.5346C25.2157 14.4465 34 14.1321 34 22.4654V33Z"
        })));
      case "EMAIL":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path4 || (_path4 = createElement("path", {
          fill: "currentColor",
          d: "M31.6 12H12.4C11.08 12 10 13.08 10 14.4V28.8C10 30.12 11.08 31.2 12.4 31.2H31.6C32.92 31.2 34 30.12 34 28.8V14.4C34 13.08 32.92 12 31.6 12ZM30.64 14.4L22 20.16L13.36 14.4H30.64ZM12.4 28.8V16.644L22 23.04L31.6 16.644V28.8H12.4Z"
        })));
      case "TWITTER":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path5 || (_path5 = createElement("path", {
          fill: "currentColor",
          d: "M16.974 32.605C26.731 32.605 32.066 24.52 32.066 17.513C32.066 17.282 32.066 17.051 32.055 16.831C33.089 16.083 33.991 15.148 34.706 14.081C33.76 14.499 32.737 14.785 31.659 14.917C32.759 14.257 33.595 13.223 33.991 11.98C32.968 12.585 31.835 13.025 30.625 13.267C29.657 12.233 28.282 11.595 26.753 11.595C23.827 11.595 21.451 13.971 21.451 16.897C21.451 17.315 21.495 17.722 21.594 18.107C17.183 17.887 13.278 15.775 10.66 12.563C10.209 13.344 9.945 14.257 9.945 15.225C9.945 17.062 10.88 18.69 12.31 19.636C11.441 19.614 10.627 19.372 9.912 18.976C9.912 18.998 9.912 19.02 9.912 19.042C9.912 21.616 11.738 23.75 14.169 24.245C13.729 24.366 13.256 24.432 12.772 24.432C12.431 24.432 12.101 24.399 11.771 24.333C12.442 26.445 14.4 27.974 16.721 28.018C14.906 29.437 12.618 30.284 10.132 30.284C9.703 30.284 9.285 30.262 8.867 30.207C11.188 31.725 13.982 32.605 16.974 32.605Z"
        })));
      case "TUMBLR":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path6 || (_path6 = createElement("path", {
          fill: "currentColor",
          d: "M23.7527 26.9388C23.7527 28.9311 24.7623 29.6046 26.3327 29.6046H28.6042V34.6556H24.3136C20.4716 34.6556 17.5832 32.6632 17.5832 27.9209V20.3163H14.0778V16.2194C17.9477 15.2092 19.5462 11.8979 19.7425 9.00763H23.7527V15.5459H28.4079V20.3163H23.7527V26.9388Z"
        })));
      case "WHATSAPP":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path7 || (_path7 = createElement("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M31.9103 12.0713C29.284 9.44357 25.7823 8 22.0535 8C14.3752 8 8.12029 14.2267 8.1136 21.8703C8.1136 24.3184 8.75513 26.6999 9.97136 28.8087L8 36L15.3909 34.0708C17.4291 35.1751 19.7212 35.7605 22.0535 35.7605H22.0601C29.7384 35.7605 35.9933 29.5339 36 21.8836C35.9933 18.1782 34.5432 14.6923 31.9103 12.0713ZM22.0535 33.4122C19.9685 33.4122 17.9303 32.8534 16.1527 31.8023L15.7317 31.5495L11.348 32.6938L12.5174 28.4362L12.2434 27.9972C11.0807 26.1611 10.4726 24.039 10.4726 21.8636C10.4726 15.5172 15.6716 10.3416 22.0601 10.3416C25.1542 10.3416 28.0611 11.5457 30.253 13.7211C32.4382 15.9031 33.6411 18.7969 33.6411 21.8769C33.6344 28.2433 28.4353 33.4122 22.0535 33.4122ZM28.4086 24.7774C28.0611 24.6044 26.3504 23.7662 26.0296 23.6465C25.7088 23.5334 25.4749 23.4735 25.2477 23.8194C25.0138 24.1654 24.3456 24.9503 24.1451 25.1765C23.9446 25.4094 23.7375 25.436 23.39 25.263C23.0425 25.09 21.9198 24.7242 20.59 23.54C19.5542 22.622 18.8592 21.4844 18.652 21.1385C18.4516 20.7926 18.632 20.6063 18.8057 20.4334C18.9594 20.2804 19.1532 20.0276 19.327 19.828C19.5007 19.6284 19.5609 19.4821 19.6745 19.2492C19.7881 19.0164 19.7346 18.8168 19.6477 18.6439C19.5609 18.4709 18.8659 16.7612 18.5718 16.0694C18.2912 15.3908 18.0038 15.484 17.79 15.4773C17.5895 15.464 17.3556 15.464 17.1217 15.464C16.8878 15.464 16.5136 15.5505 16.1928 15.8964C15.8721 16.2423 14.9766 17.0805 14.9766 18.7902C14.9766 20.4999 16.2263 22.143 16.4 22.3759C16.5737 22.6087 18.8525 26.1079 22.3475 27.6113C23.1761 27.9705 23.8243 28.1834 24.3322 28.3431C25.1675 28.6092 25.9227 28.5693 26.5241 28.4828C27.1924 28.383 28.5823 27.6446 28.8764 26.833C29.1637 26.0214 29.1637 25.3295 29.0768 25.1832C28.99 25.0368 28.7561 24.9503 28.4086 24.7774Z",
          fill: "currentColor"
        })));
      case "LINE":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path8 || (_path8 = createElement("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M22.0233 7C30.86 7 38.0467 12.83 38.0467 20.0167C38.0467 22.8767 36.9467 25.48 34.5633 28.0467C31.2267 31.9333 23.71 36.6267 21.9867 37.36C20.3059 38.0395 20.5085 36.9401 20.5876 36.5112C20.5896 36.5004 20.5915 36.49 20.5933 36.48C20.63 36.26 20.8133 35.1233 20.8133 35.1233C20.8867 34.6833 20.9233 34.06 20.7767 33.6567C20.63 33.18 19.8967 32.96 19.3833 32.85C11.6833 31.8233 6 26.4333 6 20.0167C6 12.83 13.1867 7 22.0233 7ZM32.5967 18.3333C32.78 18.3333 32.89 18.1867 32.89 18.0033V16.8667C32.89 16.6833 32.7433 16.5367 32.5967 16.5367H28.1233C28.05 16.5367 27.9767 16.5733 27.9033 16.61C27.8667 16.6833 27.83 16.7567 27.83 16.83V23.7967C27.83 23.87 27.8667 23.9433 27.9033 24.0167C27.9767 24.0533 28.05 24.09 28.1233 24.09H32.5967C32.78 24.09 32.89 23.9433 32.89 23.76V22.6233C32.89 22.44 32.7433 22.2933 32.5967 22.2933H29.5533V21.2667H32.5967C32.78 21.2667 32.89 21.12 32.89 20.9367V19.8C32.89 19.6167 32.7433 19.47 32.5967 19.47H29.5533V18.3333H32.5967ZM12.9067 22.44H15.95C16.1333 22.44 16.28 22.5867 16.17 22.6967V23.8333C16.17 24.0167 16.06 24.1633 15.8767 24.1633H11.4033C11.33 24.1633 11.2567 24.1267 11.1834 24.09L11.1833 24.09C11.1467 24.0167 11.11 23.9433 11.11 23.87V16.9033C11.11 16.72 11.2567 16.5733 11.44 16.5733H12.5767C12.76 16.5733 12.9067 16.72 12.9067 16.9033V22.44ZM18.6633 16.61H17.5267C17.3433 16.61 17.1967 16.7567 17.1967 16.9033V23.87C17.1967 24.0533 17.3433 24.1633 17.5267 24.1633H18.6633C18.8467 24.1633 18.9933 24.0166 18.9933 23.87V16.9033C18.9933 16.7567 18.8467 16.61 18.6633 16.61ZM26.4 16.61H25.3C25.1167 16.61 24.97 16.7567 24.97 16.9033V21.0467L21.78 16.72C21.78 16.72 21.78 16.6833 21.7433 16.6833L21.7067 16.6467H21.67H20.5333C20.35 16.6467 20.2033 16.7933 20.2033 16.94V23.9067C20.2033 24.09 20.35 24.2 20.5333 24.2H21.67C21.8533 24.2 22 24.0533 22 23.9067V19.7633L25.19 24.09C25.204 24.104 25.2127 24.118 25.2201 24.13C25.232 24.1493 25.2407 24.1633 25.2633 24.1633H25.3H25.3367H25.41H26.4C26.5833 24.1633 26.73 24.0167 26.73 23.87V16.9033C26.73 16.7567 26.5833 16.61 26.4 16.61Z",
          fill: "currentColor"
        })));
      case "SMS":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path9 || (_path9 = createElement("path", {
          fill: "currentColor",
          d: "M30.8 12H13.2C11.99 12 11 12.99 11 14.2V34L15.4 29.6H30.8C32.01 29.6 33 28.61 33 27.4V14.2C33 12.99 32.01 12 30.8 12ZM30.8 27.4H13.2V14.2H30.8V27.4Z"
        })));
      case "SYSTEM":
        return createElement("svg", _extends4({}, props, {
          viewBox: "0 0 44 44"
        }), _path10 || (_path10 = createElement("path", {
          fill: "currentColor",
          d: "M27.6667 26.5556C26.7889 26.5556 26 26.9 25.4111 27.4556L17.5667 22.8889C17.6222 22.6333 17.6667 22.3778 17.6667 22.1111C17.6667 21.8444 17.6222 21.5889 17.5667 21.3333L25.4 16.7667C25.9889 17.3222 26.7889 17.6667 27.6667 17.6667C29.5111 17.6667 31 16.1778 31 14.3333C31 12.4889 29.5111 11 27.6667 11C25.8222 11 24.3333 12.4889 24.3333 14.3333C24.3333 14.6 24.3778 14.8667 24.4333 15.1111L16.6 19.6778C16 19.1222 15.2111 18.7778 14.3333 18.7778C12.4889 18.7778 11 20.2667 11 22.1111C11 23.9556 12.4889 25.4444 14.3333 25.4444C15.2111 25.4444 16 25.1 16.6 24.5444L24.4333 29.1222C24.3778 29.3667 24.3333 29.6222 24.3333 29.8889C24.3333 31.7333 25.8222 33.2222 27.6667 33.2222C29.5111 33.2222 31 31.7333 31 29.8889C31 28.0444 29.5111 26.5556 27.6667 26.5556ZM27.6667 13.2222C28.2778 13.2222 28.7778 13.7222 28.7778 14.3333C28.7778 14.9444 28.2778 15.4444 27.6667 15.4444C27.0556 15.4444 26.5556 14.9444 26.5556 14.3333C26.5556 13.7222 27.0556 13.2222 27.6667 13.2222ZM14.3333 23.2222C13.7222 23.2222 13.2222 22.7222 13.2222 22.1111C13.2222 21.5 13.7222 21 14.3333 21C14.9444 21 15.4444 21.5 15.4444 22.1111C15.4444 22.7222 14.9444 23.2222 14.3333 23.2222ZM27.6667 31C27.0556 31 26.5556 30.5 26.5556 29.8889C26.5556 29.2778 27.0556 28.7778 27.6667 28.7778C28.2778 28.7778 28.7778 29.2778 28.7778 29.8889C28.7778 30.5 28.2778 31 27.6667 31Z"
        })));
      default:
        return createElement("svg", _extends4({}, props));
    }
  }

  // node_modules/preact/compat/dist/compat.module.js
  function C2(n2, t3) {
    for (var e3 in t3) {
      n2[e3] = t3[e3];
    }
    return n2;
  }
  function S2(n2, t3) {
    for (var e3 in n2) {
      if (e3 !== "__source" && !(e3 in t3))
        return true;
    }
    for (var r3 in t3) {
      if (r3 !== "__source" && n2[r3] !== t3[r3])
        return true;
    }
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  (E.prototype = new p()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t3) {
    return S2(this.props, n2) || S2(this.state, t3);
  };
  var w2 = n.__b;
  n.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w2 && w2(n2);
  };
  var R = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function x3(n2) {
    function t3(t4, e3) {
      var r3 = C2({}, t4);
      return delete r3.ref, n2(r3, (e3 = t4.ref || e3) && (typeof e3 != "object" || "current" in e3) ? e3 : null);
    }
    return t3.$$typeof = R, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  var A3 = n.__e;
  n.__e = function(n2, t3, e3) {
    if (n2.then)
      for (var r3, u3 = t3; u3 = u3.__; ) {
        if ((r3 = u3.__c) && r3.__c)
          return t3.__e == null && (t3.__e = e3.__e, t3.__k = e3.__k), r3.__c(n2, t3);
      }
    A3(n2, t3, e3);
  };
  var O2 = n.unmount;
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__e && t3.__e(n2);
  }
  function F2() {
    this.u = null, this.o = null;
  }
  n.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && n2.__h === true && (n2.type = null), O2 && O2(n2);
  }, (L2.prototype = new p()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    r3.t == null && (r3.t = []), r3.t.push(e3);
    var u3 = U(r3.__v), o3 = false, i3 = function i4() {
      o3 || (o3 = true, e3.__R = null, u3 ? u3(l4) : l4());
    };
    e3.__R = i3;
    var l4 = function l5() {
      if (!--r3.__u) {
        if (r3.state.__e) {
          var n3 = r3.state.__e;
          r3.__v.__k[0] = function n4(t5, e4, r4) {
            return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
              return n4(t6, e4, r4);
            }), t5.__c && t5.__c.__P === e4 && (t5.__e && r4.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r4)), t5;
          }(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({
          __e: r3.__b = null
        }); t4 = r3.t.pop(); ) {
          t4.forceUpdate();
        }
      }
    }, f3 = t3.__h === true;
    r3.__u++ || f3 || r3.setState({
      __e: r3.__b = r3.__v.__k[0]
    }), n2.then(i3, i3);
  }, L2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, L2.prototype.render = function(n2, t3) {
    if (this.__b) {
      if (this.__v.__k) {
        var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
        this.__v.__k[0] = function n3(t4, e4, r4) {
          return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
            typeof n4.__c == "function" && n4.__c();
          }), t4.__c.__H = null), (t4 = C2({}, t4)).__c != null && (t4.__c.__P === r4 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
            return n3(t5, e4, r4);
          })), t4;
        }(this.__b, e3, r3.__O = r3.__P);
      }
      this.__b = null;
    }
    var u3 = t3.__e && a(y, null, n2.fallback);
    return u3 && (u3.__h = null), [a(y, null, t3.__e ? null : n2.children), u3];
  };
  var M2 = function M3(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; ) {
          e3.pop()();
        }
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  (F2.prototype = new p()).__e = function(n2) {
    var t3 = this, e3 = U(t3.__v), r3 = t3.o.get(n2);
    return r3[0]++, function(u3) {
      var o3 = function o4() {
        t3.props.revealOrder ? (r3.push(u3), M2(t3, n2, r3)) : u3();
      };
      e3 ? e3(o3) : o3();
    };
  }, F2.prototype.render = function(n2) {
    this.u = null, this.o = new Map();
    var t3 = w(n2.children);
    n2.revealOrder && n2.revealOrder[0] === "b" && t3.reverse();
    for (var e3 = t3.length; e3--; ) {
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    }
    return n2.children;
  }, F2.prototype.componentDidUpdate = F2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      M2(n2, e3, t3);
    });
  };
  var W = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
  var P2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var V = function V2(n2) {
    return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
  };
  p.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
    Object.defineProperty(p.prototype, n2, {
      configurable: true,
      get: function get2() {
        return this["UNSAFE_" + n2];
      },
      set: function set(t3) {
        Object.defineProperty(this, n2, {
          configurable: true,
          writable: true,
          value: t3
        });
      }
    });
  });
  var H2 = n.event;
  function Z() {
  }
  function Y() {
    return this.cancelBubble;
  }
  function $2() {
    return this.defaultPrevented;
  }
  n.event = function(n2) {
    return H2 && (n2 = H2(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = $2, n2.nativeEvent = n2;
  };
  var q2;
  var G = {
    configurable: true,
    get: function get() {
      return this.class;
    }
  };
  var J = n.vnode;
  n.vnode = function(n2) {
    var t3 = n2.type, e3 = n2.props, r3 = e3;
    if (typeof t3 == "string") {
      for (var u3 in r3 = {}, e3) {
        var o3 = e3[u3];
        u3 === "value" && "defaultValue" in e3 && o3 == null || (u3 === "defaultValue" && "value" in e3 && e3.value == null ? u3 = "value" : u3 === "download" && o3 === true ? o3 = "" : /ondoubleclick/i.test(u3) ? u3 = "ondblclick" : /^onchange(textarea|input)/i.test(u3 + t3) && !V(e3.type) ? u3 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(u3) ? u3 = u3.toLowerCase() : P2.test(u3) ? u3 = u3.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o3 === null && (o3 = void 0), r3[u3] = o3);
      }
      t3 == "select" && r3.multiple && Array.isArray(r3.value) && (r3.value = w(e3.children).forEach(function(n3) {
        n3.props.selected = r3.value.indexOf(n3.props.value) != -1;
      })), t3 == "select" && r3.defaultValue != null && (r3.value = w(e3.children).forEach(function(n3) {
        n3.props.selected = r3.multiple ? r3.defaultValue.indexOf(n3.props.value) != -1 : r3.defaultValue == n3.props.value;
      })), n2.props = r3;
    }
    t3 && e3.class != e3.className && (G.enumerable = "className" in e3, e3.className != null && (r3.class = e3.className), Object.defineProperty(r3, "className", G)), n2.$$typeof = W, J && J(n2);
  };
  var K = n.__r;
  n.__r = function(n2) {
    K && K(n2), q2 = n2.__c;
  };
  var on = typeof performance == "object" && typeof performance.now == "function" ? performance.now.bind(performance) : function() {
    return Date.now();
  };

  // src/preact/compat.js
  function forwardRef(fn) {
    return x3(fn);
  }

  // src/preact/component/contain.js
  var _excluded = ["as", "children", "className", "contentAs", "contentClassName", "contentProps", "contentRef", "contentStyle", "layout", "paint", "size", "style", "wrapperClassName", "wrapperStyle"];
  function _extends5() {
    _extends5 = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends5.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i3;
    for (i3 = 0; i3 < sourceKeys.length; i3++) {
      key = sourceKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var CONTAIN = [
    null,
    "paint",
    "layout",
    "content",
    "size",
    "size paint",
    "size layout",
    "strict"
  ];
  var SIZE_CONTENT_STYLE = {
    "position": "relative",
    "width": "100%",
    "height": "100%"
  };
  function ContainWrapperWithRef(_ref, ref) {
    var _ref$as = _ref.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref.children, className = _ref["className"], _ref$contentAs = _ref.contentAs, ContentComp = _ref$contentAs === void 0 ? "div" : _ref$contentAs, contentClassName = _ref.contentClassName, contentProps = _ref.contentProps, contentRef = _ref.contentRef, contentStyle = _ref.contentStyle, _ref$layout = _ref.layout, layout = _ref$layout === void 0 ? false : _ref$layout, _ref$paint = _ref.paint, paint = _ref$paint === void 0 ? false : _ref$paint, _ref$size = _ref.size, size = _ref$size === void 0 ? false : _ref$size, style = _ref["style"], wrapperClassName = _ref.wrapperClassName, wrapperStyle = _ref.wrapperStyle, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
    var containIndex = (size ? 4 : 0) + (layout ? 2 : 0) + (paint ? 1 : 0);
    return createElement(Comp, _extends5({}, rest, {
      ref,
      className: ((className || "") + " " + (wrapperClassName || "")).trim() || null,
      style: _extends5({}, style, wrapperStyle, {
        contain: CONTAIN[containIndex]
      })
    }), createElement(ContentComp, _extends5({}, contentProps, {
      ref: contentRef,
      className: contentClassName,
      style: _extends5({}, size && SIZE_CONTENT_STYLE, {
        "overflow": paint ? "hidden" : "visible"
      }, contentStyle)
    }), children));
  }
  var ContainWrapper = forwardRef(ContainWrapperWithRef);

  // src/preact/component/wrapper.js
  var _excluded2 = ["as", "children", "className", "style", "wrapperClassName", "wrapperStyle"];
  function _extends6() {
    _extends6 = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends6.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i3;
    for (i3 = 0; i3 < sourceKeys.length; i3++) {
      key = sourceKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function WrapperWithRef(_ref, ref) {
    var _ref$as = _ref.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref.children, className = _ref["className"], style = _ref["style"], wrapperClassName = _ref.wrapperClassName, wrapperStyle = _ref.wrapperStyle, rest = _objectWithoutPropertiesLoose2(_ref, _excluded2);
    return createElement(Comp, _extends6({}, rest, {
      ref,
      className: ((className || "") + " " + (wrapperClassName || "")).trim() || null,
      style: _extends6({}, style, wrapperStyle)
    }), children);
  }
  var Wrapper = forwardRef(WrapperWithRef);

  // src/url.js
  var SERVING_TYPE_PREFIX = dict({
    "c": true,
    "v": true,
    "a": true,
    "ad": true
  });
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
    var s3 = [];
    for (var k4 in params) {
      var v3 = params[k4];
      if (v3 == null) {
        continue;
      } else if (isArray(v3)) {
        for (var i3 = 0; i3 < v3.length; i3++) {
          var sv = v3[i3];
          s3.push(encodeURIComponent(k4) + "=" + encodeURIComponent(sv));
        }
      } else {
        var _sv = v3;
        s3.push(encodeURIComponent(k4) + "=" + encodeURIComponent(_sv));
      }
    }
    return s3.join("&");
  }

  // extensions/amp-social-share/1.0/social-share-config.js
  function getSocialConfig(type) {
    return BUILTINS[type];
  }
  var BUILTINS = {
    "twitter": {
      shareEndpoint: "https://twitter.com/intent/tweet",
      defaultParams: dict({
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "1da1f2"
    },
    "facebook": {
      shareEndpoint: "https://www.facebook.com/dialog/share",
      defaultParams: dict({
        "href": "CANONICAL_URL"
      }),
      defaultColor: "1877f2",
      defaultBackgroundColor: "ffffff"
    },
    "pinterest": {
      shareEndpoint: "https://www.pinterest.com/pin/create/button/",
      defaultParams: dict({
        "url": "CANONICAL_URL",
        "description": "TITLE"
      }),
      defaultColor: "e60023",
      defaultBackgroundColor: "ffffff"
    },
    "linkedin": {
      shareEndpoint: "https://www.linkedin.com/shareArticle",
      defaultParams: dict({
        "url": "CANONICAL_URL",
        "mini": "true"
      }),
      "defaultColor": "ffffff",
      "defaultBackgroundColor": "0a66c2"
    },
    "email": {
      shareEndpoint: "mailto:RECIPIENT",
      defaultParams: dict({
        "subject": "TITLE",
        "body": "CANONICAL_URL",
        "recipient": ""
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "000000",
      bindings: ["recipient"]
    },
    "tumblr": {
      shareEndpoint: "https://www.tumblr.com/share/link",
      defaultParams: dict({
        "name": "TITLE",
        "url": "CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "001935"
    },
    "whatsapp": {
      shareEndpoint: "https://api.whatsapp.com/send",
      defaultParams: dict({
        "text": "TITLE - CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "25d366"
    },
    "line": {
      shareEndpoint: "https://social-plugins.line.me/lineit/share",
      defaultParams: dict({
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "00b900"
    },
    "sms": {
      shareEndpoint: "sms:",
      defaultParams: dict({
        "body": "TITLE - CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "000000"
    },
    "system": {
      shareEndpoint: "navigator-share:",
      defaultParams: dict({
        "text": "TITLE",
        "url": "CANONICAL_URL"
      }),
      defaultColor: "ffffff",
      defaultBackgroundColor: "000000"
    }
  };

  // src/preact/utils.js
  function useResourcesNotify() {
    var _useAmpContext = useAmpContext(), notify = _useAmpContext.notify;
    useLayoutEffect(function() {
      if (notify) {
        notify();
      }
    });
  }

  // extensions/amp-social-share/1.0/social-share.js
  var _excluded3 = ["background", "children", "color", "endpoint", "height", "params", "style", "tabIndex", "target", "type", "width"];
  function _extends7() {
    _extends7 = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends7.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose3(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i3;
    for (i3 = 0; i3 < sourceKeys.length; i3++) {
      key = sourceKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var NAME = "SocialShare";
  var DEFAULT_WIDTH = 60;
  var DEFAULT_HEIGHT = 44;
  var DEFAULT_TARGET = "_blank";
  var WINDOW_FEATURES = "resizable,scrollbars,width=640,height=480";
  function SocialShare(_ref) {
    var background = _ref.background, children = _ref.children, color = _ref.color, endpoint = _ref.endpoint, height = _ref.height, params = _ref.params, style = _ref.style, _ref$tabIndex = _ref.tabIndex, tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex, target = _ref.target, type = _ref.type, width = _ref.width, rest = _objectWithoutPropertiesLoose3(_ref, _excluded3);
    useResourcesNotify();
    var checkPropsReturnValue = checkProps(type, endpoint, target, width, height, params);
    if (!checkPropsReturnValue) {
      return null;
    }
    var checkedHeight = checkPropsReturnValue.checkedHeight, checkedTarget = checkPropsReturnValue.checkedTarget, checkedWidth = checkPropsReturnValue.checkedWidth, finalEndpoint = checkPropsReturnValue.finalEndpoint;
    return createElement(Wrapper, _extends7({}, rest, {
      role: "button",
      tabindex: tabIndex,
      onKeyDown: function onKeyDown(e3) {
        return handleKeyPress(e3, finalEndpoint, checkedTarget);
      },
      onClick: function onClick() {
        return handleActivation(finalEndpoint, checkedTarget);
      },
      wrapperStyle: _extends7({
        width: checkedWidth,
        height: checkedHeight
      }, style),
      part: "button",
      wrapperClassName: $button
    }), processChildren(type, children, color, background));
  }
  function processChildren(type, children, color, background) {
    if (children) {
      return children;
    } else {
      var typeConfig = getSocialConfig(type) || {};
      var baseStyle = BASE_STYLE;
      var iconStyle = dict({
        "color": color || typeConfig.defaultColor,
        "backgroundColor": background || typeConfig.defaultBackgroundColor
      });
      return createElement(SocialShareIcon, {
        style: _extends7({}, iconStyle, baseStyle, {
          width: "100%",
          height: "100%"
        }),
        type: type.toUpperCase()
      });
    }
  }
  function checkProps(type, endpoint, target, width, height, params) {
    var typeConfig = getSocialConfig(type) || {};
    var baseEndpoint = endpoint || typeConfig.shareEndpoint;
    if (baseEndpoint === void 0) {
      displayWarning("An endpoint is required if not using a pre-configured type. " + NAME);
      return null;
    }
    if (type === "email" && !endpoint) {
      baseEndpoint = "mailto:" + (params && params["recipient"] || "");
    }
    var finalEndpoint = addParamsToUrl(baseEndpoint, params);
    var checkedWidth = width || DEFAULT_WIDTH;
    var checkedHeight = height || DEFAULT_HEIGHT;
    var checkedTarget = target || DEFAULT_TARGET;
    return {
      finalEndpoint,
      checkedWidth,
      checkedHeight,
      checkedTarget
    };
  }
  function displayWarning(message) {
    console.warn(message);
  }
  function handleActivation(finalEndpoint, target) {
    var protocol = finalEndpoint.split(":", 1)[0];
    if (protocol === "navigator-share") {
      if (window && window.navigator && window.navigator.share) {
        var data = parseQueryString(getQueryString(finalEndpoint));
        window.navigator.share(data).catch(function(e3) {
          displayWarning(e3.message + ". " + NAME);
        });
      } else {
        displayWarning("Could not complete system share.  Navigator unavailable. " + NAME);
      }
    } else if (protocol === "sms" || protocol === "mailto") {
      openWindowDialog(window, protocol === "sms" ? finalEndpoint.replace("?", "?&") : finalEndpoint, isIos() ? "_top" : target, WINDOW_FEATURES);
    } else {
      openWindowDialog(window, finalEndpoint, target, WINDOW_FEATURES);
    }
  }
  function getQueryString(endpoint) {
    var q3 = endpoint.indexOf("?");
    var h3 = endpoint.indexOf("#");
    q3 = q3 === -1 ? endpoint.length : q3;
    h3 = h3 === -1 ? endpoint.length : h3;
    return endpoint.slice(q3, h3);
  }
  function isIos() {
    return window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.search(/iPhone|iPad|iPod/i) >= 0;
  }
  function handleKeyPress(event, finalEndpoint, target) {
    var key = event.key;
    if (key == Keys.SPACE || key == Keys.ENTER) {
      event.preventDefault();
      handleActivation(finalEndpoint, target);
    }
  }

  // extensions/amp-social-share/1.0/amp-social-share.js
  function _classCallCheck9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties8(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o3, p3) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o4, p4) {
      o4.__proto__ = p4;
      return o4;
    };
    return _setPrototypeOf2(o3, p3);
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
    } catch (e3) {
      return false;
    }
  }
  function _getPrototypeOf2(o3) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf2(o3);
  }
  var TAG2 = "amp-social-share";
  var getTypeConfigOrUndefined = function getTypeConfigOrUndefined2(element) {
    var viewer = Services.viewerForDoc(element);
    var platform = Services.platformFor(toWin(element.ownerDocument.defaultView));
    var type = userAssert(element.getAttribute("type"), "The type attribute is required. %s", element);
    if (type === "system") {
      if (!systemShareSupported(viewer, platform)) {
        return;
      }
    } else {
      var systemOnly = systemShareSupported(viewer, platform) && !!window.document.querySelector("amp-social-share[type=system][data-mode=replace]");
      if (systemOnly) {
        return;
      }
    }
    return getSocialConfig(type) || dict();
  };
  var systemShareSupported = function systemShareSupported2(viewer, platform) {
    var isChromeWebview = viewer.isWebviewEmbedded() && platform.isChrome();
    return "share" in navigator && !isChromeWebview;
  };
  var updateTypeConfig = function updateTypeConfig2(element, mutations, prevTypeValue) {
    var typeUpdated;
    var mutatedEligibleAttribute;
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "type" || mutation.attributeName === "data-target" || mutation.attributeName === "data-share-endpoint" || mutation.attributeName && mutation.attributeName.includes("data-param-")) {
        mutatedEligibleAttribute = true;
        typeUpdated = typeUpdated || mutation.attributeName === "type";
      }
    });
    if (!mutatedEligibleAttribute) {
      return;
    }
    if (typeUpdated) {
      element.classList.remove("amp-social-share-" + prevTypeValue);
    }
    var typeConfig = getTypeConfigOrUndefined(element);
    if (!typeConfig) {
      toggle(element, false);
      return;
    }
    element.classList.add("amp-social-share-" + element.getAttribute("type"));
    return typeConfig;
  };
  var AmpSocialShare = /* @__PURE__ */ function(_PreactBaseElement) {
    _inherits2(AmpSocialShare2, _PreactBaseElement);
    var _super = _createSuper2(AmpSocialShare2);
    function AmpSocialShare2(element) {
      var _this;
      _classCallCheck9(this, AmpSocialShare2);
      _this = _super.call(this, element);
      _this.ampSocialShareType_ = null;
      return _this;
    }
    _createClass8(AmpSocialShare2, [{
      key: "init",
      value: function init() {
        var typeConfig = getTypeConfigOrUndefined(this.element);
        if (!typeConfig) {
          toggle(this.element, false);
          return;
        }
        this.ampSocialShareType_ = this.element.getAttribute("type");
        this.element.classList.add("amp-social-share-" + this.ampSocialShareType_);
        this.renderWithHrefAndTarget_(typeConfig);
        var responsive = this.element.getAttribute("layout") === Layout.RESPONSIVE && "100%";
        return dict({
          "width": responsive || this.element.getAttribute("width"),
          "height": responsive || this.element.getAttribute("height"),
          "color": "currentColor",
          "background": "inherit"
        });
      }
    }, {
      key: "mutationObserverCallback",
      value: function mutationObserverCallback(mutations) {
        var typeConfig = updateTypeConfig(this.element, mutations, this.ampSocialShareType_);
        if (typeConfig) {
          this.ampSocialShareType_ = this.element.getAttribute("type");
          this.renderWithHrefAndTarget_(typeConfig);
        }
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported() {
        userAssert(isExperimentOn(this.win, "bento") || isExperimentOn(this.win, "bento-social-share"), 'expected global "bento" or specific "bento-social-share" experiment to be enabled');
        return true;
      }
    }, {
      key: "renderWithHrefAndTarget_",
      value: function renderWithHrefAndTarget_(typeConfig) {
        var _this2 = this;
        var customEndpoint = this.element.getAttribute("data-share-endpoint");
        var shareEndpoint = customEndpoint || typeConfig["shareEndpoint"] || "";
        var urlParams = typeConfig["defaultParams"] || dict();
        Object.assign(urlParams, getDataParamsFromAttributes(this.element));
        var hrefWithVars = addParamsToUrl(shareEndpoint, urlParams);
        var urlReplacements = Services.urlReplacementsForDoc(this.element);
        var bindingVars = typeConfig["bindings"];
        var bindings = {};
        if (bindingVars) {
          bindingVars.forEach(function(name) {
            var bindingName = name.toUpperCase();
            bindings[bindingName] = urlParams[name];
          });
        }
        urlReplacements.expandUrlAsync(hrefWithVars, bindings).then(function(expandedUrl) {
          var _Services$urlForDoc$p = Services.urlForDoc(_this2.element).parse(expandedUrl), search = _Services$urlForDoc$p.search;
          var target = _this2.element.getAttribute("data-target") || "_blank";
          if (customEndpoint) {
            _this2.mutateProps(dict({
              "endpoint": expandedUrl,
              "params": null,
              "target": target
            }));
          } else {
            _this2.mutateProps(dict({
              "endpoint": null,
              "params": parseQueryString(search),
              "target": target
            }));
          }
        });
      }
    }]);
    return AmpSocialShare2;
  }(PreactBaseElement);
  AmpSocialShare["Component"] = SocialShare;
  AmpSocialShare["layoutSizeDefined"] = true;
  AmpSocialShare["delegatesFocus"] = true;
  AmpSocialShare["props"] = {
    "children": {
      passthroughNonEmpty: true
    },
    "tabIndex": {
      attr: "tabindex"
    },
    "type": {
      attr: "type"
    }
  };
  AmpSocialShare["usesShadowDom"] = true;
  AMP.extension(TAG2, "1.0", function(AMP2) {
    AMP2.registerElement(TAG2, AmpSocialShare, CSS2);
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
//# sourceMappingURL=amp-social-share-1.0.max.js.map
