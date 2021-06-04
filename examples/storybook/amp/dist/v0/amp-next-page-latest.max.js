(self.AMP=self.AMP||[]).push({n:"amp-next-page",ev:"1.0",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // build/amp-next-page-1.0.css.js
  var CSS2 = '.i-amphtml-next-page-document{overflow:hidden}.i-amphtml-next-page-document:not(.amp-next-page-visible) [i-amphtml-fixedid]{display:none}.i-amphtml-next-page-document.amp-next-page-visible{opacity:1;overflow:visible}.i-amphtml-next-page-document:after,.i-amphtml-next-page-document:before{content:" ";display:table}.i-amphtml-next-page-placeholder{background:#eee}.amp-next-page-separator{border-bottom:1px solid rgba(0,0,0,0.12)}.amp-next-page-links{border-top:1px solid rgba(0,0,0,0.1);margin-top:16px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.amp-next-page-link{border-bottom:1px solid rgba(0,0,0,0.1);display:block;overflow:auto;padding:10px 0;text-decoration:none}.amp-next-page-image{width:72px;height:72px;float:left;margin:0 10px;background-size:cover;background-position:50%}.amp-next-page-text{position:relative;margin:5px 30px 5px 0;color:#3c4043;font-size:17px}\n/*# sourceURL=/extensions/amp-next-page/1.0/amp-next-page.css*/';

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
  function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
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
  function throttle(win, callback, minInterval) {
    var locker = 0;
    var nextCallArgs = null;
    function fire(args) {
      nextCallArgs = null;
      locker = win.setTimeout(waiter, minInterval);
      callback.apply(null, args);
    }
    function waiter() {
      locker = 0;
      if (nextCallArgs) {
        fire(nextCallArgs);
      }
    }
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (locker) {
        nextCallArgs = args;
      } else {
        fire(args);
      }
    };
  }
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
  function htmlRefs(root) {
    var elements = root.querySelectorAll("[ref]");
    var refs = map();
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var ref = devAssert(element.getAttribute("ref"), "Empty ref attr");
      element.removeAttribute("ref");
      devAssert(refs[ref] === void 0, "Duplicate ref");
      refs[ref] = element;
    }
    return refs;
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
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
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
  function childElementByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelector(parent, "> [" + attr + "]");
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
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
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
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
  var PositionObserverFidelity = {
    HIGH: 1,
    LOW: 0
  };
  var LOW_FIDELITY_FRAME_COUNT = 4;
  var PositionObserverWorker = /* @__PURE__ */ function() {
    function PositionObserverWorker2(ampdoc, element, fidelity, handler) {
      _classCallCheck3(this, PositionObserverWorker2);
      this.element = element;
      this.handler_ = handler;
      this.fidelity = fidelity;
      this.turn = fidelity == PositionObserverFidelity.LOW ? Math.floor(Math.random() * LOW_FIDELITY_FRAME_COUNT) : 0;
      this.prevPosition_ = null;
      this.viewport_ = Services.viewportForDoc(ampdoc);
    }
    _createClass2(PositionObserverWorker2, [{
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
  var TAG = "POSITION_OBSERVER";
  var SCROLL_TIMEOUT = 500;
  var PositionObserver = /* @__PURE__ */ function() {
    function PositionObserver2(ampdoc) {
      var _this = this;
      _classCallCheck4(this, PositionObserver2);
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
    _createClass3(PositionObserver2, [{
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
        dev().error(TAG, "cannot unobserve unobserved element");
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

  // extensions/amp-next-page/1.0/visibility-observer.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
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
  var ViewportRelativePos = {
    INSIDE_VIEWPORT: 1,
    OUTSIDE_VIEWPORT: 2,
    LEAVING_VIEWPORT: 3,
    ENTERING_VIEWPORT: 4,
    CONTAINS_VIEWPORT: 5
  };
  var SCROLL_THROTTLE_THRESHOLD = 20;
  var ScrollDirection = {
    UP: 1,
    DOWN: -1
  };
  var VisibilityObserverEntry = /* @__PURE__ */ function() {
    function VisibilityObserverEntry2(observer, callback) {
      _classCallCheck5(this, VisibilityObserverEntry2);
      this.observer_ = observer;
      this.topSentinelPosition_ = null;
      this.bottomSentinelPosition_ = null;
      this.callback = callback;
    }
    _createClass4(VisibilityObserverEntry2, [{
      key: "top",
      get: function get() {
        return this.topSentinelPosition_;
      }
    }, {
      key: "bottom",
      get: function get() {
        return this.bottomSentinelPosition_;
      }
    }, {
      key: "observe",
      value: function observe(element, parent) {
        var _this = this;
        var top = element.ownerDocument.createElement("div");
        top.classList.add("i-amphtml-next-page-document-top-sentinel");
        var bottom = element.ownerDocument.createElement("div");
        bottom.classList.add("i-amphtml-next-page-document-bottom-sentinel");
        parent.insertBefore(top, element);
        parent.insertBefore(bottom, element.nextSibling);
        this.observer_.getPositionObserver().observe(top, PositionObserverFidelity.LOW, function(position) {
          return _this.topSentinelPositionChanged_(position);
        });
        this.observer_.getPositionObserver().observe(bottom, PositionObserverFidelity.LOW, function(position) {
          return _this.bottomSentinelPositionChanged_(position);
        });
      }
    }, {
      key: "topSentinelPositionChanged_",
      value: function topSentinelPositionChanged_(position) {
        this.topSentinelPosition_ = position.relativePos;
        this.observer_.updateRelativePos(this);
      }
    }, {
      key: "bottomSentinelPositionChanged_",
      value: function bottomSentinelPositionChanged_(position) {
        this.bottomSentinelPosition_ = position.relativePos;
        this.observer_.updateRelativePos(this);
      }
    }, {
      key: "usesSentinel",
      value: function usesSentinel() {
        return true;
      }
    }]);
    return VisibilityObserverEntry2;
  }();
  var VisibilityObserverHostEntry = /* @__PURE__ */ function(_VisibilityObserverEn) {
    _inherits(VisibilityObserverHostEntry2, _VisibilityObserverEn);
    var _super = _createSuper(VisibilityObserverHostEntry2);
    function VisibilityObserverHostEntry2(observer, callback, nextPageEl) {
      var _this2;
      _classCallCheck5(this, VisibilityObserverHostEntry2);
      _this2 = _super.call(this, observer, callback);
      _this2.nextPageEl_ = nextPageEl;
      return _this2;
    }
    _createClass4(VisibilityObserverHostEntry2, [{
      key: "usesSentinel",
      value: function usesSentinel() {
        return false;
      }
    }, {
      key: "nextPageEl",
      get: function get() {
        return this.nextPageEl_;
      }
    }]);
    return VisibilityObserverHostEntry2;
  }(VisibilityObserverEntry);
  var VisibilityObserver = /* @__PURE__ */ function() {
    function VisibilityObserver2(ampdoc) {
      _classCallCheck5(this, VisibilityObserver2);
      this.ampdoc_ = ampdoc;
      this.entries_ = [];
      this.lastScrollTop_ = 0;
      this.scrollDirection_ = ScrollDirection.DOWN;
      this.lastScrollDirection_ = null;
      this.viewport_ = Services.viewportForDoc(ampdoc);
      this.viewportHeight_ = 0;
      this.measuring_ = false;
      this.mutator_ = Services.mutatorForDoc(ampdoc);
      var updateScrollThrottled = throttle(ampdoc.win, this.updateScroll_.bind(this), 200);
      this.viewport_.onScroll(updateScrollThrottled.bind(this));
      this.viewport_.onResize(updateScrollThrottled.bind(this));
      this.updateScroll_();
    }
    _createClass4(VisibilityObserver2, [{
      key: "mutator",
      get: function get() {
        return this.mutator_;
      }
    }, {
      key: "updateScroll_",
      value: function updateScroll_() {
        var _this3 = this;
        if (this.measuring_) {
          return;
        }
        this.measuring_ = true;
        this.mutator_.measureElement(function() {
          _this3.viewportHeight_ = _this3.viewport_.getHeight();
          var scrollTop = _this3.viewport_.getScrollTop();
          var delta = scrollTop - _this3.lastScrollTop_;
          if (Math.abs(delta) < SCROLL_THROTTLE_THRESHOLD) {
            return;
          }
          var scrollDirection = delta > 0 ? ScrollDirection.DOWN : ScrollDirection.UP;
          _this3.entries_.forEach(function(entry) {
            if (!entry.usesSentinel() || _this3.lastScrollDirection_ !== scrollDirection) {
              _this3.updateRelativePos(entry);
            }
          });
          _this3.lastScrollTop_ = scrollTop;
          _this3.lastScrollDirection_ = _this3.scrollDirection_;
          _this3.scrollDirection_ = scrollDirection;
        }).then(function() {
          _this3.measuring_ = false;
        });
      }
    }, {
      key: "isScrollingUp",
      value: function isScrollingUp() {
        return this.scrollDirection_ === ScrollDirection.UP;
      }
    }, {
      key: "isScrollingDown",
      value: function isScrollingDown() {
        return this.scrollDirection_ === ScrollDirection.DOWN;
      }
    }, {
      key: "observe",
      value: function observe(element, parent, callback) {
        var entry = new VisibilityObserverEntry(this, callback);
        this.entries_.push(entry);
        entry.observe(element, parent);
      }
    }, {
      key: "observeHost",
      value: function observeHost(nextPageEl, callback) {
        var entry = new VisibilityObserverHostEntry(this, callback, nextPageEl);
        this.entries_.push(entry);
      }
    }, {
      key: "getPositionObserver",
      value: function getPositionObserver() {
        installPositionObserverServiceForDoc(this.ampdoc_);
        return Services.positionObserverForDoc(this.ampdoc_.getHeadNode());
      }
    }, {
      key: "updateRelativePos",
      value: function updateRelativePos(entry) {
        var relativePos = entry.usesSentinel() ? this.getRelativePosFromSentinel(entry) : this.getRelativePosFromScroll(entry);
        if (!relativePos) {
          return;
        }
        entry.callback(devAssert(relativePos));
      }
    }, {
      key: "getRelativePosFromScroll",
      value: function getRelativePosFromScroll(entry) {
        var scroll = this.lastScrollTop_, vh = this.viewportHeight_;
        var _entry$nextPageEl$get = entry.nextPageEl.getLayoutBox(), height = _entry$nextPageEl$get.top;
        if (scroll < height - vh) {
          return ViewportRelativePos.CONTAINS_VIEWPORT;
        }
        if (scroll < height && height <= vh && scroll <= 0) {
          return ViewportRelativePos.INSIDE_VIEWPORT;
        }
        if (scroll < height) {
          return this.isScrollingDown() ? ViewportRelativePos.LEAVING_VIEWPORT : ViewportRelativePos.ENTERING_VIEWPORT;
        }
        return ViewportRelativePos.OUTSIDE_VIEWPORT;
      }
    }, {
      key: "getRelativePosFromSentinel",
      value: function getRelativePosFromSentinel(entry) {
        var bottom = entry.bottom, top = entry.top;
        var BOTTOM = RelativePositions.BOTTOM, INSIDE = RelativePositions.INSIDE, TOP = RelativePositions.TOP;
        if (!top && !bottom) {
          return null;
        }
        if (top === INSIDE && bottom === INSIDE) {
          return ViewportRelativePos.INSIDE_VIEWPORT;
        }
        if ((!top || top === TOP) && (!bottom || bottom === BOTTOM)) {
          return ViewportRelativePos.CONTAINS_VIEWPORT;
        }
        if ((!top || top === TOP) && bottom === TOP || top === BOTTOM && (!bottom || bottom === BOTTOM)) {
          return ViewportRelativePos.OUTSIDE_VIEWPORT;
        }
        var atBottom = (top === TOP || top === INSIDE) && (!bottom || bottom === BOTTOM);
        var scrollingUp = this.isScrollingUp();
        return !!atBottom === !!scrollingUp ? ViewportRelativePos.LEAVING_VIEWPORT : ViewportRelativePos.ENTERING_VIEWPORT;
      }
    }]);
    return VisibilityObserver2;
  }();

  // src/core/constants/visibility-state.js
  var VisibilityState = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // extensions/amp-next-page/1.0/page.js
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
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
  var PageState = {
    QUEUED: 1,
    FETCHING: 2,
    LOADED: 3,
    FAILED: 4,
    INSERTED: 5,
    PAUSED: 6
  };
  var VISIBLE_DOC_CLASS = "amp-next-page-visible";
  var HIDDEN_DOC_CLASS = "amp-next-page-hidden";
  var Page = /* @__PURE__ */ function() {
    function Page2(manager, meta) {
      _classCallCheck6(this, Page2);
      this.manager_ = manager;
      this.title_ = meta.title;
      this.url_ = meta.url;
      this.initialUrl_ = meta.url;
      this.image_ = meta.image;
      this.shadowDoc_ = null;
      this.container_ = null;
      this.content_ = null;
      this.state_ = PageState.QUEUED;
      this.visibilityState_ = VisibilityState.PRERENDER;
      this.relativePos_ = ViewportRelativePos.OUTSIDE_VIEWPORT;
    }
    _createClass5(Page2, [{
      key: "url",
      get: function get() {
        return this.url_;
      },
      set: function set(url) {
        this.url_ = url;
      }
    }, {
      key: "initialUrl",
      get: function get() {
        return this.initialUrl_;
      }
    }, {
      key: "image",
      get: function get() {
        return this.image_;
      }
    }, {
      key: "title",
      get: function get() {
        return this.title_;
      }
    }, {
      key: "relativePos",
      get: function get() {
        return this.relativePos_;
      },
      set: function set(position) {
        this.relativePos_ = position;
      }
    }, {
      key: "document",
      get: function get() {
        if (!this.shadowDoc_) {
          return;
        }
        return this.shadowDoc_.ampdoc.getRootNode();
      }
    }, {
      key: "container",
      get: function get() {
        return this.container_;
      }
    }, {
      key: "shadowDoc",
      get: function get() {
        return this.shadowDoc_;
      }
    }, {
      key: "is",
      value: function is(state) {
        return this.state_ === state;
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return this.state_ === PageState.LOADED || this.state_ === PageState.INSERTED || this.state_ === PageState.PAUSED;
      }
    }, {
      key: "isVisible",
      value: function isVisible() {
        return this.isLoaded() && this.visibilityState_ === VisibilityState.VISIBLE;
      }
    }, {
      key: "setVisibility",
      value: function setVisibility(visibilityState) {
        if (!this.isLoaded() || visibilityState == this.visibilityState_) {
          return;
        }
        if (this.is(PageState.PAUSED) && visibilityState === VisibilityState.VISIBLE) {
          this.resume();
        }
        this.visibilityState_ = visibilityState;
        if (this.shadowDoc_) {
          this.shadowDoc_.setVisibilityState(visibilityState);
          this.shadowDoc_.ampdoc.getBody().classList.toggle(VISIBLE_DOC_CLASS, this.isVisible());
          this.shadowDoc_.ampdoc.getBody().classList.toggle(HIDDEN_DOC_CLASS, !this.isVisible());
        }
      }
    }, {
      key: "pause",
      value: function pause() {
        var _this = this;
        if (!this.shadowDoc_) {
          return resolvedPromise();
        }
        return this.shadowDoc_.close().then(function() {
          return _this.manager_.closeDocument(_this).then(function() {
            _this.shadowDoc_ = null;
            _this.visibilityState_ = VisibilityState.HIDDEN;
            _this.state_ = PageState.PAUSED;
          });
        });
      }
    }, {
      key: "resume",
      value: function resume() {
        return this.attach_();
      }
    }, {
      key: "fetch",
      value: function fetch() {
        var _this2 = this;
        if (this.state_ === PageState.INSERTED || this.state_ === PageState.FETCHING || this.state_ === PageState.LOADED || this.state_ === PageState.FAILED) {
          return resolvedPromise();
        }
        this.state_ = PageState.FETCHING;
        return this.manager_.fetchPageDocument(this).then(function(content) {
          _this2.state_ = PageState.LOADED;
          _this2.content_ = content;
          _this2.container_ = _this2.manager_.createDocumentContainerForPage(_this2);
          return _this2.attach_();
        }).catch(function() {
          _this2.state_ = PageState.FAILED;
        });
      }
    }, {
      key: "attach_",
      value: function attach_() {
        var _this3 = this;
        return this.manager_.attachDocumentToPage(this, devAssert(this.content_), this.is(PageState.PAUSED)).then(function(shadowDoc) {
          if (!shadowDoc) {
            _this3.state_ = PageState.FAILED;
            return;
          }
          _this3.state_ = PageState.INSERTED;
          _this3.shadowDoc_ = shadowDoc;
          if (!_this3.is(PageState.PAUSED)) {
            _this3.manager_.setLastFetchedPage(_this3);
          }
        });
      }
    }]);
    return Page2;
  }();
  var HostPage = /* @__PURE__ */ function(_Page) {
    _inherits2(HostPage2, _Page);
    var _super = _createSuper2(HostPage2);
    function HostPage2(manager, meta, initState, initVisibility, doc) {
      var _this4;
      _classCallCheck6(this, HostPage2);
      _this4 = _super.call(this, manager, meta);
      _this4.state_ = initState;
      _this4.visibilityState_ = initVisibility;
      _this4.document_ = doc;
      return _this4;
    }
    _createClass5(HostPage2, [{
      key: "document",
      get: function get() {
        return this.document_;
      }
    }]);
    return HostPage2;
  }(Page);

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

  // src/utils/dom-writer.js
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
  var DomWriterStreamer = /* @__PURE__ */ function() {
    function DomWriterStreamer2(win) {
      _classCallCheck7(this, DomWriterStreamer2);
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
    _createClass6(DomWriterStreamer2, [{
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
      _classCallCheck7(this, DomWriterBulk2);
      this.fullHtml_ = [];
      this.vsync_ = Services.vsyncFor(win);
      this.onBody_ = null;
      this.onBodyChunk_ = null;
      this.onEnd_ = null;
      this.success_ = resolvedPromise();
      this.eof_ = false;
    }
    _createClass6(DomWriterBulk2, [{
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck8(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass7(LruCache2, [{
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

  // src/multidoc-manager.js
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
  var TAG2 = "multidoc-manager";
  var MultidocManager = /* @__PURE__ */ function() {
    function MultidocManager2(win, ampdocService, extensions, timer) {
      _classCallCheck9(this, MultidocManager2);
      this.win = win;
      this.ampdocService_ = ampdocService;
      this.extensions_ = extensions;
      this.timer_ = timer;
      this.shadowRoots_ = [];
    }
    _createClass8(MultidocManager2, [{
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

  // extensions/amp-next-page/1.0/utils.js
  function validateUrl(url, hostUrl) {
    var parsedUrl = parseUrlDeprecated(url);
    var _parseUrlDeprecated = parseUrlDeprecated(hostUrl), origin = _parseUrlDeprecated.origin;
    var sourceOrigin = getSourceOrigin(hostUrl);
    userAssert(parsedUrl.origin === origin || parsedUrl.origin === sourceOrigin, "Invalid page URL supplied to amp-next-page, pages must be from the same origin as the current document");
    return parsedUrl;
  }
  function validatePage(page, hostUrl) {
    user().assertString(page.url, "page url must be a string");
    var base = getSourceUrl(hostUrl);
    var _parseUrlDeprecated2 = parseUrlDeprecated(hostUrl), origin = _parseUrlDeprecated2.origin;
    page.url = resolveRelativeUrl(page.url, base);
    var url = validateUrl(page.url, hostUrl);
    user().assertString(page.image, "page image must be a string");
    user().assertString(page.title, "page title must be a string");
    var sourceOrigin = getSourceOrigin(hostUrl);
    if (sourceOrigin !== origin && url.origin === sourceOrigin) {
      page.url = origin + "/c/" + (url.protocol === "https:" ? "s/" : "") + encodeURIComponent(url.host) + url.pathname + (url.search || "") + (url.hash || "");
    }
  }

  // extensions/amp-next-page/1.0/service.js
  var _templateObject;
  var _templateObject2;
  var _templateObject3;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _classCallCheck10(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties9(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass9(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties9(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties9(Constructor, staticProps);
    return Constructor;
  }
  var TAG3 = "amp-next-page";
  var PRERENDER_VIEWPORT_COUNT = 3;
  var NEAR_BOTTOM_VIEWPORT_COUNT = 1;
  var PAUSE_PAGE_COUNT = 5;
  var NEXT_PAGE_CLASS = "i-amphtml-next-page";
  var DOC_CLASS = "i-amphtml-next-page-document";
  var DOC_CONTAINER_CLASS = "i-amphtml-next-page-document-container";
  var SHADOW_ROOT_CLASS = "i-amphtml-next-page-shadow-root";
  var PLACEHOLDER_CLASS = "i-amphtml-next-page-placeholder";
  var ASYNC_NOOP = function ASYNC_NOOP2() {
    return resolvedPromise();
  };
  var NextPageService = /* @__PURE__ */ function() {
    function NextPageService2(ampdoc) {
      var _this = this;
      _classCallCheck10(this, NextPageService2);
      this.ampdoc_ = ampdoc;
      this.win_ = ampdoc.win;
      this.doc_ = this.win_.document;
      this.viewport_ = Services.viewportForDoc(ampdoc);
      this.viewer_ = Services.viewerForDoc(ampdoc);
      this.mutator_ = Services.mutatorForDoc(ampdoc);
      this.templates_ = Services.templatesForDoc(ampdoc);
      this.separator_ = null;
      this.recBox_ = null;
      this.refreshRecBox_ = ASYNC_NOOP;
      this.finished_ = false;
      this.remoteFetchingPromise_ = null;
      this.host_ = null;
      this.visibilityObserver_ = null;
      this.multidocManager_ = null;
      this.history_ = null;
      this.navigation_ = null;
      this.pages_;
      this.lastFetchedPage_ = null;
      this.hostPage_ = null;
      this.currentTitlePage_ = null;
      this.replaceableElements_ = {};
      this.hasDeepParsing_ = false;
      this.maxPages_ = Infinity;
      this.nextSrc_ = null;
      this.readyResolver_ = null;
      this.readyPromise_ = new Promise(function(resolve) {
        _this.readyResolver_ = resolve;
      });
    }
    _createClass9(NextPageService2, [{
      key: "isBuilt",
      value: function isBuilt() {
        return !!this.pages_;
      }
    }, {
      key: "build",
      value: function build(element) {
        var _this2 = this;
        if (this.isBuilt()) {
          return resolvedPromise();
        }
        if (this.ampdoc_.getBody().lastElementChild !== element) {
          user().warn(TAG3, "should be the last element in the body of the document, a footer element can be added as a child of <amp-next-page> if it has the `footer` attribute");
        }
        this.host_ = element;
        this.nextSrc_ = this.getHost_().getAttribute("src");
        this.hasDeepParsing_ = this.getHost_().hasAttribute("deep-parsing") ? this.getHost_().getAttribute("deep-parsing") !== "false" : !this.nextSrc_;
        this.maxPages_ = this.getHost_().hasAttribute("max-pages") ? parseInt(this.getHost_().getAttribute("max-pages"), 10) : Infinity;
        this.separator_ = this.getSeparatorElement_(element);
        this.recBox_ = this.getRecBox_(element);
        this.hostPage_ = this.createHostPage();
        this.currentTitlePage_ = this.hostPage_;
        this.toggleHiddenAndReplaceableElements(this.doc_);
        insertAtStart(this.host_, this.recBox_);
        this.history_ = Services.historyForDoc(this.ampdoc_);
        this.navigation_ = Services.navigationForDoc(this.ampdoc_);
        this.multidocManager_ = new MultidocManager(this.win_, Services.ampdocServiceFor(this.win_), Services.extensionsFor(this.win_), Services.timerFor(this.win_));
        this.visibilityObserver_ = new VisibilityObserver(this.ampdoc_);
        this.readyPromise_.then(function() {
          _this2.visibilityObserver_.observeHost(_this2.getHost_(), function(position) {
            _this2.hostPage_.relativePos = position;
            _this2.updateVisibility();
          });
        });
        if (!this.pages_) {
          this.pages_ = [this.hostPage_];
          this.setLastFetchedPage(this.hostPage_);
        }
        var fin = function fin2() {
          _this2.refreshRecBox_();
          _this2.readyResolver_();
        };
        this.whenFirstScroll_().then(function() {
          return _this2.initializePageQueue_();
        }).then(fin, fin);
        this.getHost_().classList.add(NEXT_PAGE_CLASS);
        return this.readyPromise_;
      }
    }, {
      key: "whenFirstScroll_",
      value: function whenFirstScroll_() {
        var _this3 = this;
        return new Promise(function(resolve) {
          if (_this3.viewport_.getScrollTop() != 0) {
            return resolve();
          }
          var unlisten = _this3.viewport_.onScroll(function() {
            resolve();
            unlisten();
          });
        });
      }
    }, {
      key: "getHost_",
      value: function getHost_() {
        return dev().assertElement(this.host_);
      }
    }, {
      key: "maybeFetchNext",
      value: function maybeFetchNext(force) {
        var _this4 = this;
        if (force === void 0) {
          force = false;
        }
        var exceededMaximum = this.pages_.filter(function(page) {
          return !page.is(PageState.QUEUED);
        }).length > this.maxPages_;
        var isFetching = this.pages_.some(function(page) {
          return page.is(PageState.FETCHING);
        });
        var isTooEarly = this.getViewportsAway_() > PRERENDER_VIEWPORT_COUNT && !force;
        if (this.finished_ || isFetching || isTooEarly || exceededMaximum) {
          return resolvedPromise();
        }
        var pageCount = this.pages_.length;
        var nextPage = this.pages_[this.getPageIndex_(this.lastFetchedPage_) + 1];
        if (nextPage) {
          return nextPage.fetch().then(function() {
            if (nextPage.is(PageState.FAILED)) {
              _this4.setLastFetchedPage(nextPage);
            }
          }).then(function() {
            return _this4.refreshRecBox_();
          }, function(reason) {
            return _this4.refreshRecBox_().then(function() {
              throw reason;
            });
          });
        }
        return this.getRemotePages_().then(function(pages) {
          return _this4.queuePages_(pages);
        }).then(function() {
          if (_this4.pages_.length <= pageCount) {
            _this4.finished_ = true;
            return _this4.refreshRecBox_();
          }
          return _this4.maybeFetchNext(true);
        });
      }
    }, {
      key: "updateVisibility",
      value: function updateVisibility() {
        var _this5 = this;
        this.pages_.forEach(function(page, index) {
          if (page.relativePos === ViewportRelativePos.OUTSIDE_VIEWPORT) {
            if (page.isVisible()) {
              page.setVisibility(VisibilityState.HIDDEN);
            }
          } else if (page.relativePos !== ViewportRelativePos.LEAVING_VIEWPORT) {
            if (!page.isVisible()) {
              page.setVisibility(VisibilityState.VISIBLE);
            }
            _this5.hidePreviousPages_(index);
            _this5.resumePausedPages_(index);
          }
        });
        if (!this.pages_.some(function(page) {
          return page.isVisible();
        })) {
          this.hostPage_.setVisibility(VisibilityState.VISIBLE);
        }
        this.pages_.filter(function(page) {
          return page.isVisible();
        }).forEach(function(page) {
          return _this5.toggleHiddenAndReplaceableElements(devAssert(page.document));
        });
        var visiblePageIndex = findIndex(this.pages_, function(page) {
          return page.isVisible();
        });
        var visiblePage = this.pages_[visiblePageIndex] || null;
        if (visiblePage && this.currentTitlePage_ !== visiblePage) {
          this.setTitlePage(visiblePage);
        }
        this.maybeFetchNext();
      }
    }, {
      key: "hidePreviousPages_",
      value: function hidePreviousPages_(index, pausePageCountForTesting) {
        var pausePageCount = pausePageCountForTesting === void 0 ? PAUSE_PAGE_COUNT : pausePageCountForTesting;
        if (this.visibilityObserver_.isScrollingDown() && this.hostPage_.isVisible()) {
          this.hostPage_.setVisibility(VisibilityState.HIDDEN);
        }
        var previousPages = this.visibilityObserver_.isScrollingDown() ? this.pages_.slice(1, index).reverse() : this.pages_.slice(index + 1);
        return Promise.all(previousPages.filter(function(page) {
          return page.relativePos === ViewportRelativePos.OUTSIDE_VIEWPORT;
        }).map(function(page, away) {
          if (page.isVisible()) {
            page.setVisibility(VisibilityState.HIDDEN);
          }
          if (away >= pausePageCount) {
            return page.pause();
          }
        }));
      }
    }, {
      key: "resumePausedPages_",
      value: function resumePausedPages_(index, pausePageCountForTesting) {
        var pausePageCount = pausePageCountForTesting === void 0 ? PAUSE_PAGE_COUNT : pausePageCountForTesting;
        var nearViewportPages = this.pages_.slice(1).slice(Math.max(0, index - pausePageCount - 1), Math.min(this.pages_.length, index + pausePageCount + 1)).filter(function(page) {
          return page.is(PageState.PAUSED);
        });
        return Promise.all(nearViewportPages.map(function(page) {
          return page.resume();
        }));
      }
    }, {
      key: "setLastFetchedPage",
      value: function setLastFetchedPage(page) {
        this.lastFetchedPage_ = page;
      }
    }, {
      key: "setTitlePage",
      value: function setTitlePage(page) {
        if (page === void 0) {
          page = this.hostPage_;
        }
        if (!page) {
          dev().warn(TAG3, "setTitlePage called before next-page-service is built");
          return;
        }
        var _page = page, title = _page.title, url = _page.url;
        this.doc_.title = title;
        this.history_.replace({
          title,
          url
        });
        this.currentTitlePage_ = page;
        triggerAnalyticsEvent(this.getHost_(), "amp-next-page-scroll", {
          "title": title,
          "url": url
        }, false);
      }
    }, {
      key: "createHostPage",
      value: function createHostPage() {
        var _this$doc_ = this.doc_, location = _this$doc_.location, title = _this$doc_.title;
        var url = location.href;
        var image = parseSchemaImage(this.doc_) || parseOgImage(this.doc_) || parseFavicon(this.doc_) || "";
        return new HostPage(this, {
          url,
          title: title || "",
          image
        }, PageState.INSERTED, VisibilityState.VISIBLE, this.doc_);
      }
    }, {
      key: "createDocumentContainerForPage",
      value: function createDocumentContainerForPage(page) {
        var _this6 = this;
        var container = this.doc_.createElement("div");
        container.classList.add(DOC_CONTAINER_CLASS);
        this.host_.insertBefore(container, dev().assertElement(this.recBox_));
        var shadowRoot = this.doc_.createElement("div");
        shadowRoot.classList.add(SHADOW_ROOT_CLASS);
        container.appendChild(shadowRoot);
        this.visibilityObserver_.observe(shadowRoot, container, function(position) {
          page.relativePos = position;
          _this6.updateVisibility();
        });
        return container;
      }
    }, {
      key: "getCapabilities_",
      value: function getCapabilities_() {
        var hasCidCapabilities = this.viewer_.hasCapability("cid");
        if (hasCidCapabilities) {
          return "cid";
        }
        return null;
      }
    }, {
      key: "attachDocumentToPage",
      value: function attachDocumentToPage(page, content, force) {
        if (force === void 0) {
          force = false;
        }
        if (this.getViewportsAway_() < NEAR_BOTTOM_VIEWPORT_COUNT && !force) {
          return Promise.resolve(null);
        }
        var container = dev().assertElement(page.container);
        var shadowRoot = scopedQuerySelector(container, "> ." + escapeCssSelectorIdent(SHADOW_ROOT_CLASS));
        if (!shadowRoot) {
          devAssert(page.is(PageState.PAUSED));
          var placeholder = dev().assertElement(scopedQuerySelector(container, "> ." + escapeCssSelectorIdent(PLACEHOLDER_CLASS)), "Paused page does not have a placeholder");
          shadowRoot = this.doc_.createElement("div");
          shadowRoot.classList.add(SHADOW_ROOT_CLASS);
          container.replaceChild(shadowRoot, placeholder);
        }
        this.sanitizeDoc(content);
        try {
          var amp = this.multidocManager_.attachShadowDoc(shadowRoot, content, page.url, {
            visibilityState: VisibilityState.PRERENDER,
            cap: this.getCapabilities_()
          });
          var ampdoc = devAssert(amp.ampdoc);
          installStylesForDoc(ampdoc, CSS2, null, false, TAG3);
          var body = ampdoc.getBody();
          body.classList.add(DOC_CLASS);
          var separatorInstance = this.separator_.cloneNode(true);
          insertAtStart(container, separatorInstance);
          var separatorPromise = this.maybeRenderSeparatorTemplate_(separatorInstance, page);
          return separatorPromise.then(function() {
            return amp;
          });
        } catch (e) {
          dev().error(TAG3, "failed to attach shadow document for page", e);
          return Promise.resolve(null);
        }
      }
    }, {
      key: "closeDocument",
      value: function closeDocument(page) {
        if (page.is(PageState.PAUSED)) {
          return resolvedPromise();
        }
        var container = dev().assertElement(page.container);
        var shadowRoot = dev().assertElement(scopedQuerySelector(container, "> ." + escapeCssSelectorIdent(SHADOW_ROOT_CLASS)));
        var placeholder = this.doc_.createElement("div");
        placeholder.classList.add(PLACEHOLDER_CLASS);
        var docHeight = 0;
        var docWidth = 0;
        return this.mutator_.measureMutateElement(shadowRoot, function() {
          docHeight = shadowRoot.offsetHeight;
          docWidth = shadowRoot.offsetWidth;
        }, function() {
          setStyles(placeholder, {
            "height": docHeight + "px",
            "width": docWidth + "px"
          });
          container.replaceChild(placeholder, shadowRoot);
        });
      }
    }, {
      key: "sanitizeDoc",
      value: function sanitizeDoc(doc) {
        var _this7 = this;
        toArray(doc.querySelectorAll("amp-next-page")).forEach(function(el) {
          if (_this7.hasDeepParsing_) {
            var pages = _this7.getInlinePages_(el);
            _this7.fetchAndQueuePages_(pages);
          }
          removeElement(el);
        });
        doc.body.classList.add(HIDDEN_DOC_CLASS);
        this.toggleHiddenAndReplaceableElements(doc, false);
      }
    }, {
      key: "toggleHiddenAndReplaceableElements",
      value: function toggleHiddenAndReplaceableElements(doc, isVisible) {
        var _this8 = this;
        if (isVisible === void 0) {
          isVisible = true;
        }
        if (doc !== this.hostPage_.document) {
          toArray(doc.querySelectorAll("[next-page-hide]")).forEach(function(element) {
            return toggle(element, false);
          });
        }
        if (!isVisible) {
          return;
        }
        toArray(doc.querySelectorAll("*:not(amp-next-page) [next-page-replace]")).forEach(function(element) {
          var uniqueId = element.getAttribute("next-page-replace");
          if (!uniqueId) {
            uniqueId = String(Date.now() + Math.floor(Math.random() * 100));
            element.setAttribute("next-page-replace", uniqueId);
          }
          if (_this8.replaceableElements_[uniqueId] && _this8.replaceableElements_[uniqueId] !== element) {
            toggle(_this8.replaceableElements_[uniqueId], false);
          }
          _this8.replaceableElements_[uniqueId] = element;
          toggle(element, true);
        });
      }
    }, {
      key: "getViewportsAway_",
      value: function getViewportsAway_() {
        return Math.round((this.viewport_.getScrollHeight() - this.viewport_.getScrollTop() - this.viewport_.getHeight()) / this.viewport_.getHeight());
      }
    }, {
      key: "getPageIndex_",
      value: function getPageIndex_(desiredPage) {
        var pages = dev().assertArray(this.pages_);
        return pages.indexOf(desiredPage);
      }
    }, {
      key: "fetchPageDocument",
      value: function fetchPageDocument(page) {
        var _this9 = this;
        return Services.xhrFor(this.win_).fetch(page.url, {
          ampCors: false
        }).then(function(response) {
          validateUrl(response.url, _this9.ampdoc_.getUrl());
          page.url = response.url;
          return response.text();
        }).then(function(html2) {
          var doc = _this9.doc_.implementation.createHTMLDocument("");
          doc.open();
          doc.write(html2);
          doc.close();
          return doc;
        }).catch(function(e) {
          user().error(TAG3, "failed to fetch %s", page.url, e);
          throw e;
        });
      }
    }, {
      key: "initializePageQueue_",
      value: function initializePageQueue_() {
        var _this10 = this;
        var inlinePages = this.getInlinePages_(this.getHost_());
        if (inlinePages.length) {
          return this.fetchAndQueuePages_(inlinePages);
        }
        userAssert(this.nextSrc_, "%s should contain a <script> child or a URL specified in [src]", TAG3);
        return this.getRemotePages_().then(function(remotePages) {
          if (remotePages.length === 0) {
            user().warn(TAG3, "Could not find recommendations");
            return resolvedPromise();
          }
          return _this10.fetchAndQueuePages_(remotePages);
        });
      }
    }, {
      key: "queuePages_",
      value: function queuePages_(pages) {
        var _this11 = this;
        if (!pages.length || this.finished_) {
          return resolvedPromise();
        }
        pages.forEach(function(meta) {
          try {
            validatePage(meta, _this11.ampdoc_.getUrl());
            if (_this11.pages_.some(function(page) {
              return page.initialUrl == meta.url;
            })) {
              return;
            }
            _this11.pages_.push(new Page(_this11, meta));
          } catch (e) {
            user().error(TAG3, "Failed to queue page due to error:", e);
          }
        });
        return resolvedPromise();
      }
    }, {
      key: "fetchAndQueuePages_",
      value: function fetchAndQueuePages_(pages) {
        var _this12 = this;
        return this.queuePages_(pages).then(function() {
          return _this12.maybeFetchNext();
        });
      }
    }, {
      key: "getInlinePages_",
      value: function getInlinePages_(element) {
        var scriptElements = childElementsByTag(element, "SCRIPT");
        if (!scriptElements.length) {
          return [];
        }
        userAssert(scriptElements.length === 1, TAG3 + " should contain at most one <script> child");
        var scriptElement = scriptElements[0];
        userAssert(isJsonScriptTag(scriptElement), TAG3 + ' page list should be inside a <script> tag with type="application/json"');
        var parsed = tryParseJson(scriptElement.textContent, function(error) {
          user().error(TAG3, "failed to parse inline page list", error);
        });
        var pages = user().assertArray(parsed, TAG3 + " Page list expected an array, found: " + typeof parsed);
        removeElement(scriptElement);
        return pages;
      }
    }, {
      key: "getRemotePages_",
      value: function getRemotePages_() {
        var _this13 = this;
        if (!this.nextSrc_) {
          return Promise.resolve([]);
        }
        if (this.remoteFetchingPromise_) {
          return this.remoteFetchingPromise_;
        }
        this.remoteFetchingPromise_ = batchFetchJsonFor(this.ampdoc_, this.getHost_(), {
          urlReplacement: UrlReplacementPolicy.ALL,
          xssiPrefix: this.getHost_().getAttribute("xssi-prefix") || void 0
        }).then(function(result) {
          _this13.nextSrc_ = result["next"] || null;
          if (_this13.nextSrc_) {
            _this13.getHost_().setAttribute("src", _this13.nextSrc_);
          }
          return result["pages"] || [];
        }).catch(function(error) {
          user().error(TAG3, "error fetching page list from remote server", error);
          _this13.nextSrc_ = null;
          return [];
        });
        return this.remoteFetchingPromise_;
      }
    }, {
      key: "getSeparatorElement_",
      value: function getSeparatorElement_(element) {
        var providedSeparator = childElementByAttr(element, "separator");
        if (providedSeparator) {
          removeElement(providedSeparator);
          if (!providedSeparator.hasAttribute("tabindex")) {
            providedSeparator.setAttribute("tabindex", "0");
          }
          return providedSeparator;
        }
        return this.buildDefaultSeparator_();
      }
    }, {
      key: "buildDefaultSeparator_",
      value: function buildDefaultSeparator_() {
        var html2 = htmlFor(this.getHost_());
        return html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n      <div\n        class="amp-next-page-separator"\n        aria-label="Next article separator"\n        tabindex="0"\n      ></div>\n    '])));
      }
    }, {
      key: "maybeRenderSeparatorTemplate_",
      value: function maybeRenderSeparatorTemplate_(separator, page) {
        var _this14 = this;
        if (!this.templates_.hasTemplate(separator)) {
          return resolvedPromise();
        }
        var data = {
          title: page.title,
          url: page.url,
          image: page.image
        };
        return this.templates_.findAndRenderTemplate(separator, data).then(function(rendered) {
          return _this14.mutator_.mutateElement(separator, function() {
            removeChildren(dev().assertElement(separator));
            separator.appendChild(rendered);
          });
        });
      }
    }, {
      key: "getRecBox_",
      value: function getRecBox_(element) {
        var _this15 = this;
        var providedRecBox = childElementByAttr(element, "recommendation-box");
        if (providedRecBox) {
          this.refreshRecBox_ = this.templates_.hasTemplate(providedRecBox) ? function() {
            return _this15.renderRecBoxTemplate_();
          } : ASYNC_NOOP;
          return providedRecBox;
        }
        this.refreshRecBox_ = function() {
          return _this15.refreshDefaultRecBox_();
        };
        return this.buildDefaultRecBox_();
      }
    }, {
      key: "buildDefaultRecBox_",
      value: function buildDefaultRecBox_() {
        var html2 = htmlFor(this.getHost_());
        return html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n      <div class="amp-next-page-links" aria-label="Read more articles"></div>\n    '])));
      }
    }, {
      key: "renderRecBoxTemplate_",
      value: function renderRecBoxTemplate_() {
        var _this16 = this;
        var recBox = dev().assertElement(this.recBox_);
        devAssert(this.templates_.hasTemplate(recBox));
        var templateElement = dev().assertElement(this.templates_.maybeFindTemplate(recBox));
        var data = {
          pages: (this.pages_ || []).filter(function(page) {
            return !page.isLoaded() && !page.is(PageState.FETCHING);
          }).map(function(page) {
            return {
              title: page.title,
              url: page.url,
              image: page.image
            };
          })
        };
        return this.templates_.findAndRenderTemplate(recBox, data).then(function(rendered) {
          return _this16.mutator_.mutateElement(recBox, function() {
            removeChildren(dev().assertElement(recBox));
            recBox.appendChild(templateElement);
            recBox.appendChild(rendered);
          });
        });
      }
    }, {
      key: "refreshDefaultRecBox_",
      value: function refreshDefaultRecBox_() {
        var _this17 = this;
        var recBox = dev().assertElement(this.recBox_);
        var data = {
          pages: (this.pages_ || []).filter(function(page) {
            return !page.isLoaded() && !page.is(PageState.FETCHING);
          }).map(function(page) {
            return {
              title: page.title,
              url: page.url,
              image: page.image
            };
          })
        };
        var html2 = htmlFor(this.getHost_());
        var links = data["pages"].map(function(page) {
          var link = html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(['\n        <a class="amp-next-page-link">\n          <img ref="image" class="amp-next-page-image" />\n          <span ref="title" class="amp-next-page-text"></span>\n        </a>\n      '])));
          var _htmlRefs = htmlRefs(link), image = _htmlRefs.image, title = _htmlRefs.title;
          image.src = page.image;
          title.textContent = page.title;
          link.href = page.url;
          link.addEventListener("click", function(e) {
            triggerAnalyticsEvent(_this17.getHost_(), "amp-next-page-click", {
              "title": page.title,
              "url": page.url
            }, false);
            var a2a = _this17.navigation_.navigateToAmpUrl(page.url, "content-discovery");
            if (a2a) {
              e.preventDefault();
            }
          });
          return link;
        });
        return this.mutator_.mutateElement(recBox, function() {
          removeChildren(dev().assertElement(recBox));
          links.forEach(function(link) {
            return recBox.appendChild(link);
          });
        });
      }
    }]);
    return NextPageService2;
  }();

  // extensions/amp-next-page/1.0/amp-next-page.js
  function _classCallCheck11(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties10(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass10(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties10(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties10(Constructor, staticProps);
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
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf4(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var TAG4 = "amp-next-page";
  var SERVICE = "next-page";
  var AmpNextPage = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits3(AmpNextPage2, _AMP$BaseElement);
    var _super = _createSuper3(AmpNextPage2);
    function AmpNextPage2(element) {
      var _this;
      _classCallCheck11(this, AmpNextPage2);
      _this = _super.call(this, element);
      _this.nextPageService_ = null;
      return _this;
    }
    _createClass10(AmpNextPage2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout === Layout.CONTAINER;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.nextPageService_ = Services.nextPageServiceForDoc(this.element);
        return this.nextPageService_.build(this.element);
      }
    }]);
    return AmpNextPage2;
  }(AMP.BaseElement);
  AMP.extension(TAG4, "1.0", function(AMP2) {
    AMP2.registerServiceForDoc(SERVICE, NextPageService);
    AMP2.registerElement(TAG4, AmpNextPage, CSS2);
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
//# sourceMappingURL=amp-next-page-1.0.max.js.map
