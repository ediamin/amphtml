(self.AMP=self.AMP||[]).push({n:"amp-story-auto-ads",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
  function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  }
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
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
  function registerServiceBuilder(win, id, constructor, opt_instantiate) {
    win = getTopWindow(win);
    registerServiceInternal(win, win, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(win, id);
    }
  }
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
  function slowButAccuratePrng() {
    return Math.random();
  }
  var RANDOM_NUMBER_GENERATORS = {
    accuratePrng: slowButAccuratePrng
  };
  function selectRandomItem(arr) {
    var rn = RANDOM_NUMBER_GENERATORS.accuratePrng();
    return dev().assertString(arr[Math.floor(rn * arr.length)]) || null;
  }
  function randomlySelectUnsetExperiments(win, experiments) {
    win.__AMP_EXPERIMENT_BRANCHES = win.__AMP_EXPERIMENT_BRANCHES || {};
    var selectedExperiments = {};
    for (var _iterator4 = _createForOfIteratorHelperLoose(experiments), _step4; !(_step4 = _iterator4()).done; ) {
      var experiment = _step4.value;
      var experimentName = experiment.experimentId;
      if (hasOwn(win.__AMP_EXPERIMENT_BRANCHES, experimentName)) {
        selectedExperiments[experimentName] = win.__AMP_EXPERIMENT_BRANCHES[experimentName];
        continue;
      }
      if (!(experiment.isTrafficEligible != null && experiment.isTrafficEligible(win))) {
        win.__AMP_EXPERIMENT_BRANCHES[experimentName] = null;
        continue;
      }
      if (!win.__AMP_EXPERIMENT_BRANCHES[experimentName] && isExperimentOn(win, experimentName)) {
        win.__AMP_EXPERIMENT_BRANCHES[experimentName] = selectRandomItem(experiment.branches);
        selectedExperiments[experimentName] = win.__AMP_EXPERIMENT_BRANCHES[experimentName];
      }
    }
    return selectedExperiments;
  }
  function getExperimentBranch(win, experimentName) {
    return win.__AMP_EXPERIMENT_BRANCHES ? win.__AMP_EXPERIMENT_BRANCHES[experimentName] : null;
  }

  // src/experiments/story-ad-auto-advance.js
  var AdvanceExpToTime = {
    "31060905": "6s",
    "31060906": "8s",
    "31060907": "10s"
  };
  var StoryAdAutoAdvance = {
    ID: "story-ad-auto-advance",
    CONTROL: "31060904",
    SIX_SECONDS: "31060905",
    EIGHT_SECONDS: "31060906",
    TEN_SECONDS: "31060907"
  };
  function divertStoryAdAutoAdvance(win) {
    var experimentInfo = {
      experimentId: StoryAdAutoAdvance.ID,
      isTrafficEligible: function isTrafficEligible() {
        return true;
      },
      branches: [StoryAdAutoAdvance.CONTROL, StoryAdAutoAdvance.SIX_SECONDS, StoryAdAutoAdvance.EIGHT_SECONDS, StoryAdAutoAdvance.TEN_SECONDS]
    };
    randomlySelectUnsetExperiments(win, [experimentInfo]);
  }

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }
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
  function cloneLocalizedStringBundle(localizedStringBundle) {
    return parseJson(JSON.stringify(localizedStringBundle));
  }
  function createPseudoLocale(localizedStringBundle, localizationFn) {
    var pseudoLocaleStringBundle = cloneLocalizedStringBundle(localizedStringBundle);
    Object.keys(pseudoLocaleStringBundle).forEach(function(localizedStringIdAsStr) {
      var localizedStringId = localizedStringIdAsStr;
      pseudoLocaleStringBundle[localizedStringId].string = localizationFn(localizedStringBundle[localizedStringId].string);
      pseudoLocaleStringBundle[localizedStringId].fallback = localizationFn(localizedStringBundle[localizedStringId].fallback);
    });
    return pseudoLocaleStringBundle;
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
  function assertIsName(name) {
    devAssert2(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
  }
  function closest(element, callback, opt_stopAt) {
    for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
      if (callback(el)) {
        return el;
      }
    }
    return null;
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
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
  function isJsonScriptTag(element) {
    return element.tagName == "SCRIPT" && element.hasAttribute("type") && element.getAttribute("type").toUpperCase() == "APPLICATION/JSON";
  }
  function toggleAttribute(element, name, forced) {
    var hasAttribute = element.hasAttribute(name);
    var enabled = forced !== void 0 ? forced : !hasAttribute;
    if (enabled !== hasAttribute) {
      if (enabled) {
        element.setAttribute(name, "");
      } else {
        element.removeAttribute(name);
      }
    }
    return enabled;
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

  // src/service/localization.js
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
  var FALLBACK_LANGUAGE_CODE = "default";
  var LANGUAGE_CODE_CHUNK_REGEX = /\w+/gi;
  function findLocalizedString(localizedStringBundles, languageCodes, localizedStringId) {
    var localizedString = null;
    languageCodes.some(function(languageCode) {
      var localizedStringBundle = localizedStringBundles[languageCode];
      if (localizedStringBundle && localizedStringBundle[localizedStringId]) {
        localizedString = localizedStringBundle[localizedStringId].string || localizedStringBundle[localizedStringId].fallback;
        return !!localizedString;
      }
      return false;
    });
    return localizedString;
  }
  function getLanguageCodesFromString(languageCode) {
    if (!languageCode) {
      return ["en", FALLBACK_LANGUAGE_CODE];
    }
    var matches2 = languageCode.match(LANGUAGE_CODE_CHUNK_REGEX) || [];
    return matches2.reduce(function(fallbackLanguageCodeList, chunk, index) {
      var fallbackLanguageCode = matches2.slice(0, index + 1).join("-").toLowerCase();
      fallbackLanguageCodeList.unshift(fallbackLanguageCode);
      return fallbackLanguageCodeList;
    }, [FALLBACK_LANGUAGE_CODE]);
  }
  var LocalizationService = /* @__PURE__ */ function() {
    function LocalizationService2(element) {
      _classCallCheck3(this, LocalizationService2);
      this.element_ = element;
      this.viewerLanguageCode_ = Services.viewerForDoc(element).getParam("lang");
      this.localizedStringBundles_ = {};
    }
    _createClass2(LocalizationService2, [{
      key: "getLanguageCodesForElement_",
      value: function getLanguageCodesForElement_(element) {
        var languageEl = closest(element, function(el) {
          return el.hasAttribute("lang");
        });
        var languageCode = languageEl ? languageEl.getAttribute("lang") : null;
        var languageCodesToUse = getLanguageCodesFromString(languageCode || "");
        if (this.viewerLanguageCode_) {
          languageCodesToUse.unshift(this.viewerLanguageCode_);
        }
        return languageCodesToUse;
      }
    }, {
      key: "registerLocalizedStringBundle",
      value: function registerLocalizedStringBundle(languageCode, localizedStringBundle) {
        var normalizedLangCode = languageCode.toLowerCase();
        if (!this.localizedStringBundles_[normalizedLangCode]) {
          this.localizedStringBundles_[normalizedLangCode] = {};
        }
        Object.assign(this.localizedStringBundles_[normalizedLangCode], localizedStringBundle);
        return this;
      }
    }, {
      key: "getLocalizedString",
      value: function getLocalizedString(localizedStringId, elementToUse) {
        if (elementToUse === void 0) {
          elementToUse = this.element_;
        }
        var languageCodes = this.getLanguageCodesForElement_(elementToUse);
        return findLocalizedString(this.localizedStringBundles_, languageCodes, localizedStringId);
      }
    }]);
    return LocalizationService2;
  }();

  // extensions/amp-story-auto-ads/0.1/story-ad-localization.js
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
  var LocalizedStringsAr = JSON.parse('{"39":{"string":"\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0627\u0644\u0622\u0646"},"40":{"string":"\u062D\u062C\u0632"},"41":{"string":"\u0634\u0631\u0627\u0621 \u0627\u0644\u062A\u0630\u0627\u0643\u0631"},"42":{"string":"\u062A\u0646\u0632\u064A\u0644"},"43":{"string":"\u0627\u0633\u062A\u0643\u0634\u0627\u0641"},"44":{"string":"\u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0622\u0646"},"45":{"string":"\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0622\u0646"},"46":{"string":"\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A"},"47":{"string":"\u0627\u0633\u062A\u0645\u0627\u0639"},"48":{"string":"\u0627\u0644\u0645\u0632\u064A\u062F"},"49":{"string":"\u0641\u062A\u062D \u0627\u0644\u062A\u0637\u0628\u064A\u0642"},"50":{"string":"\u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0627\u0644\u0622\u0646"},"51":{"string":"\u062A\u0634\u063A\u064A\u0644"},"52":{"string":"\u0642\u0631\u0627\u0621\u0629"},"53":{"string":"\u062A\u0633\u0648\u0642"},"54":{"string":"\u0639\u0631\u0636"},"55":{"string":"\u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u0639\u0631\u0636"},"56":{"string":"\u0627\u0634\u062A\u0631\u0627\u0643"},"57":{"string":"\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0627\u0644\u0622\u0646"},"58":{"string":"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062A\u0637\u0628\u064A\u0642"},"59":{"string":"\u0639\u0631\u0636"},"60":{"string":"\u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629"},"61":{"string":"\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u062D\u0644\u0642\u0629"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsDe = JSON.parse('{"39":{"string":"Jetzt bewerben"},"40":{"string":"Reservieren"},"41":{"string":"Tickets kaufen"},"42":{"string":"Herunterladen"},"43":{"string":"Erkunden"},"44":{"string":"Jetzt herunterladen"},"45":{"string":"Jetzt installieren"},"46":{"string":"Weitere Informationen"},"47":{"string":"Anh\xF6ren"},"48":{"string":"Mehr"},"49":{"string":"App \xF6ffnen"},"50":{"string":"Jetzt bestellen"},"51":{"string":"Abspielen"},"52":{"string":"Lesen"},"53":{"string":"Einkaufen"},"54":{"string":"Anzeigen"},"55":{"string":"Vorf\xFChrungszeiten"},"56":{"string":"Anmelden"},"57":{"string":"Jetzt abonnieren"},"58":{"string":"Zur App"},"59":{"string":"Ansehen"},"60":{"string":"Ansehen"},"61":{"string":"Folge ansehen"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsEn = JSON.parse('{"39":{"string":"Apply Now","description":"Button label for an ad call to action button that asks users to apply for something."},"40":{"string":"Book","description":"Button label for an ad call to action button that asks users to book transaction."},"41":{"string":"Buy Tickets","description":"Button label for an ad call to action button that asks users to purchase tickets."},"42":{"string":"Download","description":"Button label for an ad call to action button that asks users to download content."},"43":{"string":"Explore","description":"Button label for an ad call to action button that asks users to explore content."},"44":{"string":"Get Now","description":"Button label for an ad call to action button that asks users to obtain content."},"45":{"string":"Install Now","description":"Button label for an ad call to action button that asks users to install content."},"46":{"string":"Learn More","description":"Button label for an ad call to action button that asks users to learn more about some content."},"47":{"string":"Listen","description":"Button label for an ad call to action button that asks users to listen to content."},"48":{"string":"More","description":"Button label for an ad call to action button that asks users to see more content."},"49":{"string":"Open App","description":"Button label for an ad call to action button that asks users to open an application."},"50":{"string":"Order Now","description":"Button label for an ad call to action button that asks users to place an order."},"51":{"string":"Play","description":"Button label for an ad call to action button that asks users to play content."},"52":{"string":"Read","description":"Button label for an ad call to action button that asks users to read content."},"53":{"string":"Shop Now","description":"Button label for an ad call to action button that asks users to shop for something."},"54":{"string":"Show","description":"Button label for an ad call to action button that asks users to show content."},"55":{"string":"Showtimes","description":"Button label for an ad call to action button that asks users to see showtimes."},"56":{"string":"Sign Up","description":"Button label for an ad call to action button that asks users to sign up for something."},"57":{"string":"Subscribe Now","description":"Button label for an ad call to action button that asks users to subscribe to something."},"58":{"string":"Use App","description":"Button label for an ad call to action button that asks users to use an application."},"59":{"string":"View","description":"Button label for an ad call to action button that asks users to view content."},"60":{"string":"Watch","description":"Button label for an ad call to action button that asks users to watch content."},"61":{"string":"Watch Episode","description":"Button label for an ad call to action button that asks users to watch an episode of something."}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsEnGb = JSON.parse('{"39":{"string":"Apply Now"},"40":{"string":"Book"},"41":{"string":"Buy Tickets"},"42":{"string":"Download"},"43":{"string":"Explore"},"44":{"string":"Get Now"},"45":{"string":"Install Now"},"46":{"string":"Learn More"},"47":{"string":"Listen"},"48":{"string":"More"},"49":{"string":"Open App"},"50":{"string":"Order Now"},"51":{"string":"Play"},"52":{"string":"Read"},"53":{"string":"Shop Now"},"54":{"string":"Show"},"55":{"string":"Performance times"},"56":{"string":"Sign Up"},"57":{"string":"Subscribe Now"},"58":{"string":"Use App"},"59":{"string":"View"},"60":{"string":"Watch"},"61":{"string":"Watch Episode"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsEs = JSON.parse('{"39":{"string":"Solic\xEDtalo ahora"},"40":{"string":"Reserva"},"41":{"string":"Compra entradas"},"42":{"string":"Descargar"},"43":{"string":"Consultar"},"44":{"string":"Descargar ahora"},"45":{"string":"Instalar ahora"},"46":{"string":"Consulta m\xE1s informaci\xF3n"},"47":{"string":"Escuchar"},"48":{"string":"M\xE1s"},"49":{"string":"Abrir la aplicaci\xF3n"},"50":{"string":"Haz el pedido ahora"},"51":{"string":"Reproducir"},"52":{"string":"Leer"},"53":{"string":"Comprar"},"54":{"string":"Mostrar"},"55":{"string":"Consulta los horarios"},"56":{"string":"Reg\xEDstrate"},"57":{"string":"Suscr\xEDbete ahora"},"58":{"string":"Usa la aplicaci\xF3n"},"59":{"string":"Ver"},"60":{"string":"Visual\xEDzalo"},"61":{"string":"Ver episodio"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsEs419 = JSON.parse('{"39":{"string":"Enviar solicitud ahora"},"40":{"string":"Reservar"},"41":{"string":"Comprar entradas"},"42":{"string":"Descargar"},"43":{"string":"Explorar"},"44":{"string":"Obtener ahora"},"45":{"string":"Instalar ahora"},"46":{"string":"M\xE1s informaci\xF3n"},"47":{"string":"Escuchar"},"48":{"string":"M\xE1s"},"49":{"string":"Abrir app"},"50":{"string":"Pedir ahora"},"51":{"string":"Reproducir"},"52":{"string":"Leer"},"53":{"string":"Comprar"},"54":{"string":"Mostrar"},"55":{"string":"Horarios"},"56":{"string":"Registrarse"},"57":{"string":"Suscribirse ahora"},"58":{"string":"Usar app"},"59":{"string":"Ver"},"60":{"string":"Mirar"},"61":{"string":"Mirar episodio"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsFr = JSON.parse(`{"39":{"string":"Inscrivez-vous d\xE8s maintenant"},"40":{"string":"R\xE9server"},"41":{"string":"Acheter des billets"},"42":{"string":"T\xE9l\xE9charger"},"43":{"string":"D\xE9couvrir"},"44":{"string":"Obtenir"},"45":{"string":"Installer"},"46":{"string":"En savoir plus"},"47":{"string":"\xC9couter"},"48":{"string":"Plus"},"49":{"string":"Ouvrir l'application"},"50":{"string":"Commander"},"51":{"string":"Lire"},"52":{"string":"Lire"},"53":{"string":"Acheter"},"54":{"string":"Afficher"},"55":{"string":"Horaires des s\xE9ances"},"56":{"string":"S'inscrire"},"57":{"string":"S'abonner"},"58":{"string":"Utiliser l'application"},"59":{"string":"Afficher"},"60":{"string":"Regarder"},"61":{"string":"Regarder l'\xE9pisode"}}`, function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsHi = JSON.parse('{"39":{"string":"\u0905\u092D\u0940 \u0906\u0935\u0947\u0926\u0928 \u0915\u0930\u0947\u0902"},"40":{"string":"\u092C\u0941\u0915 \u0915\u0930\u0947\u0902"},"41":{"string":"\u091F\u093F\u0915\u091F \u0916\u0930\u0940\u0926\u0947\u0902"},"42":{"string":"\u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902"},"43":{"string":"\u0914\u0930 \u091C\u093E\u0928\u0947\u0902"},"44":{"string":"\u0905\u092D\u0940 \u092A\u093E\u090F\u0902"},"45":{"string":"\u0905\u092D\u0940 \u0907\u0902\u0938\u094D\u091F\u0949\u0932 \u0915\u0930\u0947\u0902"},"46":{"string":"\u091C\u093C\u094D\u092F\u093E\u0926\u093E \u091C\u093E\u0928\u0947\u0902"},"47":{"string":"\u0938\u0941\u0928\u0947\u0902"},"48":{"string":"\u0926\u0942\u0938\u0930\u0940 \u0938\u093E\u092E\u0917\u094D\u0930\u0940"},"49":{"string":"\u0910\u092A\u094D\u0932\u093F\u0915\u0947\u0936\u0928 \u0916\u094B\u0932\u0947\u0902"},"50":{"string":"\u0905\u092D\u0940 \u0911\u0930\u094D\u0921\u0930 \u0915\u0930\u0947\u0902"},"51":{"string":"\u091A\u0932\u093E\u090F\u0902"},"52":{"string":"\u092A\u0922\u093C\u0947\u0902"},"53":{"string":"\u0916\u0930\u0940\u0926\u093E\u0930\u0940 \u0915\u0930\u0947\u0902"},"54":{"string":"\u0926\u093F\u0916\u093E\u090F\u0902"},"55":{"string":"\u0936\u094B \u0915\u093E \u0938\u092E\u092F"},"56":{"string":"\u0938\u093E\u0907\u0928 \u0905\u092A \u0915\u0930\u0947\u0902"},"57":{"string":"\u0905\u092D\u0940 \u0938\u0926\u0938\u094D\u092F \u092C\u0928\u0947\u0902"},"58":{"string":"\u0910\u092A\u094D\u0932\u093F\u0915\u0947\u0936\u0928 \u0907\u0938\u094D\u0924\u0947\u092E\u093E\u0932 \u0915\u0930\u0947\u0902"},"59":{"string":"\u0926\u0947\u0916\u0947\u0902"},"60":{"string":"\u0926\u0947\u0916\u0947\u0902"},"61":{"string":"\u090F\u092A\u093F\u0938\u094B\u0921 \u0926\u0947\u0916\u0947\u0902"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsId = JSON.parse('{"39":{"string":"Daftarkan Sekarang"},"40":{"string":"Reservasi"},"41":{"string":"Beli Tiket"},"42":{"string":"Download"},"43":{"string":"Jelajahi"},"44":{"string":"Dapatkan Sekarang"},"45":{"string":"Instal Sekarang"},"46":{"string":"Pelajari Lebih Lanjut"},"47":{"string":"Dengarkan"},"48":{"string":"Lainnya"},"49":{"string":"Buka Aplikasi"},"50":{"string":"Pesan Sekarang"},"51":{"string":"Putar"},"52":{"string":"Baca"},"53":{"string":"Beli"},"54":{"string":"Tampilkan"},"55":{"string":"Jam Tayang"},"56":{"string":"Daftar"},"57":{"string":"Berlangganan Sekarang"},"58":{"string":"Gunakan Aplikasi"},"59":{"string":"Lihat"},"60":{"string":"Tonton"},"61":{"string":"Tonton Episode"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsIt = JSON.parse('{"39":{"string":"Richiedi ora"},"40":{"string":"Prenota"},"41":{"string":"Acquista biglietti"},"42":{"string":"Scarica"},"43":{"string":"Esplora"},"44":{"string":"Scarica ora"},"45":{"string":"Installa ora"},"46":{"string":"Ulteriori informazioni"},"47":{"string":"Ascolta"},"48":{"string":"Altro"},"49":{"string":"Apri app"},"50":{"string":"Ordina ora"},"51":{"string":"Riproduci"},"52":{"string":"Leggi"},"53":{"string":"Acquista"},"54":{"string":"Mostra"},"55":{"string":"Orari di programmazione"},"56":{"string":"Registrati"},"57":{"string":"Abbonati ora"},"58":{"string":"Usa app"},"59":{"string":"Visualizza"},"60":{"string":"Guarda"},"61":{"string":"Guarda la puntata"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsJa = JSON.parse('{"39":{"string":"\u4ECA\u3059\u3050\u304A\u7533\u3057\u8FBC\u307F"},"40":{"string":"\u4E88\u7D04"},"41":{"string":"\u30C1\u30B1\u30C3\u30C8\u3092\u8CFC\u5165"},"42":{"string":"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"},"43":{"string":"\u63A2\u3059"},"44":{"string":"\u4ECA\u3059\u3050\u5165\u624B"},"45":{"string":"\u4ECA\u3059\u3050\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"},"46":{"string":"\u8A73\u7D30"},"47":{"string":"\u8074\u304F"},"48":{"string":"\u3082\u3063\u3068\u898B\u308B"},"49":{"string":"\u30A2\u30D7\u30EA\u3092\u958B\u304F"},"50":{"string":"\u4ECA\u3059\u3050\u6CE8\u6587"},"51":{"string":"\u518D\u751F"},"52":{"string":"\u8AAD\u3080"},"53":{"string":"\u8CFC\u5165"},"54":{"string":"\u8868\u793A"},"55":{"string":"\u4E0A\u6620\u6642\u9593"},"56":{"string":"\u767B\u9332"},"57":{"string":"\u4ECA\u3059\u3050\u767B\u9332"},"58":{"string":"\u30A2\u30D7\u30EA\u3092\u4F7F\u7528"},"59":{"string":"\u8868\u793A"},"60":{"string":"\u898B\u308B"},"61":{"string":"\u30A8\u30D4\u30BD\u30FC\u30C9\u3092\u898B\u308B"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsKo = JSON.parse('{"39":{"string":"\uC2E0\uCCAD\uD558\uAE30"},"40":{"string":"\uC608\uC57D"},"41":{"string":"\uD2F0\uCF13 \uAD6C\uB9E4"},"42":{"string":"\uB2E4\uC6B4\uB85C\uB4DC"},"43":{"string":"\uD0D0\uC0C9"},"44":{"string":"\uBC1B\uAE30"},"45":{"string":"\uC9C0\uAE08 \uC124\uCE58"},"46":{"string":"\uC790\uC138\uD788 \uC54C\uC544\uBCF4\uAE30"},"47":{"string":"\uB4E3\uAE30"},"48":{"string":"\uB354\uBCF4\uAE30"},"49":{"string":"\uC571 \uC5F4\uAE30"},"50":{"string":"\uC9C0\uAE08 \uC8FC\uBB38"},"51":{"string":"\uC7AC\uC0DD"},"52":{"string":"\uC77D\uAE30"},"53":{"string":"\uC1FC\uD551\uD558\uAE30"},"54":{"string":"\uD45C\uC2DC"},"55":{"string":"\uC0C1\uC601\uC77C\uC815"},"56":{"string":"\uAC00\uC785"},"57":{"string":"\uC9C0\uAE08 \uAD6C\uB3C5"},"58":{"string":"\uC571 \uC0AC\uC6A9"},"59":{"string":"\uBCF4\uAE30"},"60":{"string":"\uBCF4\uAE30"},"61":{"string":"\uC5D0\uD53C\uC18C\uB4DC \uBCF4\uAE30"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsNl = JSON.parse('{"39":{"string":"Nu toepassen"},"40":{"string":"Boeken"},"41":{"string":"Kaartjes kopen"},"42":{"string":"Downloaden"},"43":{"string":"Verkennen"},"44":{"string":"Nu ophalen"},"45":{"string":"Nu installeren"},"46":{"string":"Meer informatie"},"47":{"string":"Luisteren"},"48":{"string":"Meer"},"49":{"string":"App openen"},"50":{"string":"Nu bestellen"},"51":{"string":"Afspelen"},"52":{"string":"Lezen"},"53":{"string":"Winkelen"},"54":{"string":"Weergeven"},"55":{"string":"Aanvangstijden"},"56":{"string":"Aanmelden"},"57":{"string":"Nu abonneren"},"58":{"string":"App gebruiken"},"59":{"string":"Bekijken"},"60":{"string":"Bekijken"},"61":{"string":"Aflevering bekijken"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsNo = JSON.parse('{"39":{"string":"S\xF8k n\xE5"},"40":{"string":"Bestill"},"41":{"string":"Kj\xF8p billetter"},"42":{"string":"Last ned"},"43":{"string":"Utforsk"},"44":{"string":"Skaff deg n\xE5"},"45":{"string":"Installer n\xE5"},"46":{"string":"Finn ut mer"},"47":{"string":"Lytt"},"48":{"string":"Mer"},"49":{"string":"\xC5pne appen"},"50":{"string":"Bestill n\xE5"},"51":{"string":"Spill av"},"52":{"string":"Les"},"53":{"string":"Kj\xF8p"},"54":{"string":"Vis"},"55":{"string":"Kinotider"},"56":{"string":"Registrer deg"},"57":{"string":"Abonner n\xE5"},"58":{"string":"Bruk app"},"59":{"string":"Se"},"60":{"string":"Se"},"61":{"string":"Se episoden"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsPtBr = JSON.parse('{"39":{"string":"Inscreva-se agora"},"40":{"string":"Agendar"},"41":{"string":"Comprar ingressos"},"42":{"string":"Download"},"43":{"string":"Descobrir"},"44":{"string":"Adquirir agora"},"45":{"string":"Instalar agora"},"46":{"string":"Saiba mais"},"47":{"string":"Ouvir"},"48":{"string":"Mais"},"49":{"string":"Abrir app"},"50":{"string":"Comprar agora"},"51":{"string":"Reproduzir"},"52":{"string":"Ler"},"53":{"string":"Comprar"},"54":{"string":"Mostrar"},"55":{"string":"Hor\xE1rios de exibi\xE7\xE3o"},"56":{"string":"Inscreva-se"},"57":{"string":"Assinar"},"58":{"string":"Usar app"},"59":{"string":"Ver"},"60":{"string":"Assistir"},"61":{"string":"Assistir epis\xF3dio"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsPtPt = JSON.parse('{"39":{"string":"Candidate-se agora"},"40":{"string":"Reservar"},"41":{"string":"Comprar bilhetes"},"42":{"string":"Transferir"},"43":{"string":"Explorar"},"44":{"string":"Obter agora"},"45":{"string":"Instalar agora"},"46":{"string":"Saiba mais"},"47":{"string":"Ouvir"},"48":{"string":"Mais"},"49":{"string":"Abrir aplica\xE7\xE3o"},"50":{"string":"Encomendar agora"},"51":{"string":"Reproduzir"},"52":{"string":"Ler"},"53":{"string":"Comprar"},"54":{"string":"Mostrar"},"55":{"string":"Sess\xF5es"},"56":{"string":"Inscrever-se"},"57":{"string":"Subscrever agora"},"58":{"string":"Utilizar aplica\xE7\xE3o"},"59":{"string":"Ver"},"60":{"string":"Ver"},"61":{"string":"Ver epis\xF3dio"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsRu = JSON.parse('{"39":{"string":"\u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"},"40":{"string":"\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"},"41":{"string":"\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442\u044B"},"42":{"string":"\u0421\u043A\u0430\u0447\u0430\u0442\u044C"},"43":{"string":"\u0418\u0437\u0443\u0447\u0438\u0442\u044C"},"44":{"string":"\u0421\u043A\u0430\u0447\u0430\u0442\u044C"},"45":{"string":"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"},"46":{"string":"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"},"47":{"string":"\u0421\u043B\u0443\u0448\u0430\u0442\u044C"},"48":{"string":"\u0415\u0449\u0451"},"49":{"string":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435"},"50":{"string":"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"},"51":{"string":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438"},"52":{"string":"\u0427\u0438\u0442\u0430\u0442\u044C"},"53":{"string":"\u041A\u0443\u043F\u0438\u0442\u044C"},"54":{"string":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"},"55":{"string":"\u0412\u0440\u0435\u043C\u044F \u0441\u0435\u0430\u043D\u0441\u043E\u0432"},"56":{"string":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"},"57":{"string":"\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"},"58":{"string":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435"},"59":{"string":"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C"},"60":{"string":"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C"},"61":{"string":"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u0435\u0440\u0438\u044E"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsTr = JSON.parse('{"39":{"string":"Hemen Ba\u015Fvur"},"40":{"string":"Kitap"},"41":{"string":"Bilet Sat\u0131n Al"},"42":{"string":"\u0130ndir"},"43":{"string":"Ke\u015Ffet"},"44":{"string":"Hemen Al"},"45":{"string":"\u015Eimdi Y\xFCkle"},"46":{"string":"Daha Fazla Bilgi"},"47":{"string":"Dinle"},"48":{"string":"Di\u011Fer"},"49":{"string":"Uygulamay\u0131 A\xE7"},"50":{"string":"\u015Eimdi Sipari\u015F Et"},"51":{"string":"Oynat"},"52":{"string":"Oku"},"53":{"string":"Sat\u0131n al"},"54":{"string":"G\xF6ster"},"55":{"string":"G\xF6sterim zamanlar\u0131"},"56":{"string":"Kaydol"},"57":{"string":"\u015Eimdi Abone Ol"},"58":{"string":"Uygulama Kullan"},"59":{"string":"G\xF6ster"},"60":{"string":"\u0130zle"},"61":{"string":"B\xF6l\xFCm\xFC \u0130zle"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsVi = JSON.parse('{"39":{"string":"\u0110\u0103ng k\xFD ngay b\xE2y gi\u1EDD"},"40":{"string":"S\xE1ch"},"41":{"string":"Mua V\xE9"},"42":{"string":"T\u1EA3i xu\u1ED1ng"},"43":{"string":"Kh\xE1m ph\xE1"},"44":{"string":"Nh\u1EADn ngay"},"45":{"string":"C\xE0i \u0111\u1EB7t ngay"},"46":{"string":"T\xECm hi\u1EC3u th\xEAm"},"47":{"string":"Nghe"},"48":{"string":"Th\xEAm"},"49":{"string":"M\u1EDF \u1EE9ng d\u1EE5ng"},"50":{"string":"\u0110\u1EB7t h\xE0ng ngay b\xE2y gi\u1EDD"},"51":{"string":"Ph\xE1t"},"52":{"string":"\u0110\u1ECDc"},"53":{"string":"Mua s\u1EAFm"},"54":{"string":"Hi\u1EC3n th\u1ECB"},"55":{"string":"Th\u1EDDi gian chi\u1EBFu"},"56":{"string":"\u0110\u0103ng k\xFD"},"57":{"string":"\u0110\u0103ng k\xFD ngay"},"58":{"string":"S\u1EED d\u1EE5ng \u1EE9ng d\u1EE5ng"},"59":{"string":"Xem"},"60":{"string":"Xem"},"61":{"string":"Xem t\u1EADp"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsZhCn = JSON.parse('{"39":{"string":"\u7ACB\u5373\u7533\u8BF7"},"40":{"string":"\u9884\u8BA2"},"41":{"string":"\u4E70\u7968"},"42":{"string":"\u4E0B\u8F7D"},"43":{"string":"\u63A2\u7D22"},"44":{"string":"\u7ACB\u5373\u83B7\u53D6"},"45":{"string":"\u7ACB\u5373\u5B89\u88C5"},"46":{"string":"\u4E86\u89E3\u8BE6\u60C5"},"47":{"string":"\u6536\u542C"},"48":{"string":"\u66F4\u591A"},"49":{"string":"\u6253\u5F00\u5E94\u7528"},"50":{"string":"\u7ACB\u5373\u8BA2\u8D2D"},"51":{"string":"\u64AD\u653E"},"52":{"string":"\u9605\u8BFB"},"53":{"string":"\u9009\u8D2D"},"54":{"string":"\u663E\u793A"},"55":{"string":"\u653E\u6620\u65F6\u95F4"},"56":{"string":"\u6CE8\u518C"},"57":{"string":"\u7ACB\u5373\u8BA2\u9605"},"58":{"string":"\u4F7F\u7528\u5E94\u7528"},"59":{"string":"\u67E5\u770B"},"60":{"string":"\u89C2\u770B"},"61":{"string":"\u89C2\u770B\u5267\u96C6"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsZhTw = JSON.parse('{"39":{"string":"\u7ACB\u5373\u7533\u8ACB"},"40":{"string":"\u9810\u8A02"},"41":{"string":"\u8CB7\u7968"},"42":{"string":"\u4E0B\u8F09"},"43":{"string":"\u63A2\u7D22"},"44":{"string":"\u7ACB\u5373\u53D6\u5F97"},"45":{"string":"\u7ACB\u5373\u5B89\u88DD"},"46":{"string":"\u77AD\u89E3\u8A73\u60C5"},"47":{"string":"\u8046\u807D"},"48":{"string":"\u986F\u793A\u66F4\u591A"},"49":{"string":"\u958B\u555F\u61C9\u7528\u7A0B\u5F0F"},"50":{"string":"\u7ACB\u523B\u8A02\u8CFC"},"51":{"string":"\u64AD\u653E"},"52":{"string":"\u95B1\u8B80"},"53":{"string":"\u8CFC\u7269"},"54":{"string":"\u986F\u793A"},"55":{"string":"\u653E\u6620\u6642\u9593"},"56":{"string":"\u8A3B\u518A"},"57":{"string":"\u7ACB\u5373\u8A02\u95B1"},"58":{"string":"\u4F7F\u7528\u61C9\u7528\u7A0B\u5F0F"},"59":{"string":"\u67E5\u770B"},"60":{"string":"\u89C0\u770B"},"61":{"string":"\u89C0\u770B\u5287\u96C6"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var CtaTypes = {
    APPLY_NOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_APPLY_NOW,
    BOOK_NOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_BOOK_NOW,
    BUY_TICKETS: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_BUY_TICKETS,
    DOWNLOAD: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_DOWNLOAD,
    EXPLORE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_EXPLORE,
    GET_NOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_GET_NOW,
    INSTALL: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_INSTALL,
    LEARN_MORE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_LEARN_MORE,
    LISTEN: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_LISTEN,
    MORE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_MORE,
    OPEN_APP: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_OPEN_APP,
    ORDER_NOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_ORDER_NOW,
    PLAY: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_PLAY,
    READ: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_READ,
    SHOP: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOP,
    SHOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOW,
    SHOWTIMES: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOWTIMES,
    SIGN_UP: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SIGN_UP,
    SUBSCRIBE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SUBSCRIBE,
    USE_APP: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_USE_APP,
    VIEW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_VIEW,
    WATCH: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH,
    WATCH_EPISODE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH_EPISODE
  };
  var getLocalizationService = function getLocalizationService2(element) {
    var localizationService = Services.localizationForDoc(element);
    if (!localizationService) {
      localizationService = new LocalizationService(element);
      registerServiceBuilderForDoc(element, "localization", function() {
        return localizationService;
      });
    }
    return localizationService;
  };
  var StoryAdLocalization = /* @__PURE__ */ function() {
    function StoryAdLocalization2(storyAutoAdsEl) {
      _classCallCheck4(this, StoryAdLocalization2);
      this.storyAutoAdsEl_ = storyAutoAdsEl;
      this.localizationService_ = null;
    }
    _createClass3(StoryAdLocalization2, [{
      key: "getLocalizedString",
      value: function getLocalizedString(id) {
        if (!this.localizationService_) {
          this.init_();
        }
        return this.localizationService_.getLocalizedString(id);
      }
    }, {
      key: "init_",
      value: function init_() {
        this.localizationService_ = getLocalizationService(this.storyAutoAdsEl_);
        var enXaPseudoLocaleBundle = createPseudoLocale(LocalizedStringsEn, function(s) {
          return "[" + s + " one two]";
        });
        this.localizationService_.registerLocalizedStringBundle("default", LocalizedStringsEn).registerLocalizedStringBundle("ar", LocalizedStringsAr).registerLocalizedStringBundle("de", LocalizedStringsDe).registerLocalizedStringBundle("en", LocalizedStringsEn).registerLocalizedStringBundle("en-GB", LocalizedStringsEnGb).registerLocalizedStringBundle("es", LocalizedStringsEs).registerLocalizedStringBundle("es-419", LocalizedStringsEs419).registerLocalizedStringBundle("fr", LocalizedStringsFr).registerLocalizedStringBundle("hi", LocalizedStringsHi).registerLocalizedStringBundle("id", LocalizedStringsId).registerLocalizedStringBundle("it", LocalizedStringsIt).registerLocalizedStringBundle("ja", LocalizedStringsJa).registerLocalizedStringBundle("ko", LocalizedStringsKo).registerLocalizedStringBundle("nl", LocalizedStringsNl).registerLocalizedStringBundle("no", LocalizedStringsNo).registerLocalizedStringBundle("pt-PT", LocalizedStringsPtPt).registerLocalizedStringBundle("pt-BR", LocalizedStringsPtBr).registerLocalizedStringBundle("ru", LocalizedStringsRu).registerLocalizedStringBundle("tr", LocalizedStringsTr).registerLocalizedStringBundle("vi", LocalizedStringsVi).registerLocalizedStringBundle("zh-cn", LocalizedStringsZhCn).registerLocalizedStringBundle("zh-TW", LocalizedStringsZhTw).registerLocalizedStringBundle("en-xa", enXaPseudoLocaleBundle);
      }
    }]);
    return StoryAdLocalization2;
  }();

  // src/core/types/string/bytes.js
  function getCryptoRandomBytesArray(win, length) {
    var crypto = win.crypto;
    if (true) {
      crypto = crypto || win.msCrypto;
      if (!crypto || !crypto.getRandomValues) {
        return null;
      }
    }
    var uint8array = new Uint8Array(length);
    crypto.getRandomValues(uint8array);
    return uint8array;
  }

  // extensions/amp-story-auto-ads/0.1/utils.js
  function getUniqueId(win) {
    var uint8array = getCryptoRandomBytesArray(win, 16);
    if (uint8array) {
      return uint8array.join("");
    }
    return String(win.location.href + Date.now() + win.Math.random() + win.screen.width + win.screen.height);
  }
  function localizeCtaText(ctaType, localizationService) {
    if (CtaTypes[ctaType]) {
      var ctaLocalizedStringId = CtaTypes[ctaType];
      return localizationService.getLocalizedString(ctaLocalizedStringId);
    }
    return ctaType;
  }
  function getFrameDoc(iframe) {
    return iframe.contentDocument || iframe.contentWindow.document;
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

  // extensions/amp-story-auto-ads/0.1/story-ad-analytics.js
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
  var STORY_AD_ANALYTICS = "story-ad-analytics";
  var AnalyticsEvents = {
    AD_REQUESTED: "story-ad-request",
    AD_LOADED: "story-ad-load",
    AD_INSERTED: "story-ad-insert",
    AD_VIEWED: "story-ad-view",
    AD_SWIPED: "story-ad-swipe",
    AD_CLICKED: "story-ad-click",
    AD_EXITED: "story-ad-exit",
    AD_DISCARDED: "story-ad-discard"
  };
  var AnalyticsVars = {
    AD_REQUESTED: "requestTime",
    AD_LOADED: "loadTime",
    AD_INSERTED: "insertTime",
    AD_VIEWED: "viewTime",
    AD_SWIPED: "swipeTime",
    AD_CLICKED: "clickTime",
    AD_EXITED: "exitTime",
    AD_DISCARDED: "discardTime",
    AD_INDEX: "adIndex",
    AD_UNIQUE_ID: "adUniqueId",
    POSITION: "position",
    CTA_TYPE: "ctaType"
  };
  var StoryAdAnalytics = /* @__PURE__ */ function() {
    function StoryAdAnalytics2(ampdoc) {
      _classCallCheck5(this, StoryAdAnalytics2);
      this.win_ = ampdoc.win;
      this.data_ = {};
    }
    _createClass4(StoryAdAnalytics2, [{
      key: "fireEvent",
      value: function fireEvent(element, adIndex, eventType, vars) {
        this.ensurePageTrackingInitialized_(adIndex);
        Object.assign(this.data_[adIndex], vars);
        triggerAnalyticsEvent(element, eventType, this.data_[adIndex]);
      }
    }, {
      key: "setVar",
      value: function setVar(adIndex, varName, value) {
        this.ensurePageTrackingInitialized_(adIndex);
        this.data_[adIndex][varName] = value;
      }
    }, {
      key: "ensurePageTrackingInitialized_",
      value: function ensurePageTrackingInitialized_(adIndex) {
        if (!this.data_[adIndex]) {
          var _dict;
          this.data_[adIndex] = dict((_dict = {}, _dict[AnalyticsVars.AD_INDEX] = adIndex, _dict[AnalyticsVars.AD_UNIQUE_ID] = getUniqueId(this.win_), _dict));
        }
      }
    }]);
    return StoryAdAnalytics2;
  }();

  // build/amp-story-auto-ads-0.1.css.js
  var CSS2 = ".i-amphtml-story-desktop-panels amp-story-page[i-amphtml-loading][ad]{transform:scale(1) translateX(-100%) translateY(200%)!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-cta-container{bottom:12.5vh!important;top:67.5%!important}.i-amphtml-glass-pane{height:100%!important;width:100%!important;z-index:1!important}amp-story-page[xdomain-ad] .i-amphtml-glass-pane{height:80%!important}amp-story-page amp-ad iframe{width:100%;height:100%}amp-story-page amp-ad[data-a4a-upgrade-type=amp-ad-network-doubleclick-impl],amp-story-page amp-ad[type=adsense]{top:0!important;left:0!important;transform:translate(0)!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-grid-template-fill>amp-ad{left:50%!important;right:auto!important;margin:auto!important;min-height:75vh!important;max-height:75vh!important;min-width:45vh!important;max-width:45vh!important;transform:translateX(-50%)!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads.css*/";

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

  // src/core/dom/event-helper-listen.js
  var optsSupported;
  var passiveSupported;
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
  function supportsPassiveEventListener(win) {
    if (passiveSupported !== void 0) {
      return passiveSupported;
    }
    passiveSupported = false;
    try {
      var options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      win.addEventListener("test-options", null, options);
      win.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return passiveSupported;
  }

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
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }

  // extensions/amp-story/1.0/events.js
  var EventType = {
    MUTE: "ampstory:mute",
    UNMUTE: "ampstory:unmute",
    SWITCH_PAGE: "ampstory:switchpage",
    PREVIOUS_PAGE: "ampstory:previouspage",
    NEXT_PAGE: "ampstory:nextpage",
    PAGE_PROGRESS: "ampstory:pageprogress",
    REPLAY: "ampstory:replay",
    DEV_LOG_ENTRIES_AVAILABLE: "ampstory:devlogentriesavailable",
    NO_NEXT_PAGE: "ampstory:nonextpage",
    NO_PREVIOUS_PAGE: "ampstory:nopreviouspage",
    STORY_LOADED: "ampstory:load",
    PAGE_LOADED: "ampstory:pageload",
    DISPATCH_ACTION: "ampstory:dispatchaction"
  };
  function dispatch(win, source, eventName, payload, eventInit) {
    if (payload === void 0) {
      payload = void 0;
    }
    if (eventInit === void 0) {
      eventInit = void 0;
    }
    var event = createCustomEvent(win, eventName, payload, eventInit);
    source.dispatchEvent(event);
  }

  // extensions/amp-story/1.0/embed-mode.js
  var EmbedMode = {
    NOT_EMBEDDED: 0,
    NAME_TBD: 1,
    NO_SHARING: 2,
    PREVIEW: 3,
    NO_SHARING_NOR_AUDIO_UI: 4
  };
  var EmbedModeParam = "embedMode";
  function parseEmbedMode(str) {
    var params = parseQueryString(str);
    var unsanitizedEmbedMode = params[EmbedModeParam];
    var embedModeIndex = parseInt(unsanitizedEmbedMode, 10);
    return isEnumValue(EmbedMode, embedModeIndex) ? embedModeIndex : EmbedMode.NOT_EMBEDDED;
  }

  // src/core/data-structures/observable.js
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
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck6(this, Observable2);
      this.handlers_ = null;
    }
    _createClass5(Observable2, [{
      key: "add",
      value: function add(handler) {
        var _this = this;
        if (!this.handlers_) {
          this.handlers_ = [];
        }
        this.handlers_.push(handler);
        return function() {
          _this.remove(handler);
        };
      }
    }, {
      key: "remove",
      value: function remove2(handler) {
        if (!this.handlers_) {
          return;
        }
        removeItem(this.handlers_, handler);
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        if (!this.handlers_) {
          return;
        }
        this.handlers_.length = 0;
      }
    }, {
      key: "fire",
      value: function fire(opt_event) {
        if (!this.handlers_) {
          return;
        }
        for (var _iterator = _createForOfIteratorHelperLoose2(this.handlers_), _step; !(_step = _iterator()).done; ) {
          var handler = _step.value;
          handler(opt_event);
        }
      }
    }, {
      key: "getHandlerCount",
      value: function getHandlerCount() {
        var _this$handlers_$lengt, _this$handlers_;
        return (_this$handlers_$lengt = (_this$handlers_ = this.handlers_) == null ? void 0 : _this$handlers_.length) != null ? _this$handlers_$lengt : 0;
      }
    }]);
    return Observable2;
  }();

  // extensions/amp-story/1.0/amp-story-store-service.js
  var _stateComparisonFunct;
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
  var TAG2 = "amp-story";
  var getStoreService = function getStoreService2(win) {
    var service = Services.storyStoreService(win);
    if (!service) {
      service = new AmpStoryStoreService(win);
      registerServiceBuilder(win, "story-store", function() {
        return service;
      });
    }
    return service;
  };
  var UIType = {
    MOBILE: 0,
    DESKTOP_PANELS: 1,
    DESKTOP_FULLBLEED: 2,
    VERTICAL: 3
  };
  var EmbeddedComponentState = {
    HIDDEN: 0,
    FOCUSED: 1,
    EXPANDED: 2
  };
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
  var actions = function actions2(state, action, data) {
    var _extends22, _extends32, _extends4, _extends5, _extends6, _extends7, _extends8, _extends9, _extends10, _extends11, _extends12, _extends13, _extends14, _extends15, _extends16, _extends17, _extends18, _extends19, _extends20, _extends21, _extends222, _extends23, _extends24, _extends25, _extends26, _extends27, _extends28, _extends29, _extends30, _extends31, _extends322, _extends33, _extends34, _extends35, _extends36, _extends37;
    switch (action) {
      case Action.ADD_INTERACTIVE_REACT:
        return _extends({}, state, (_extends32 = {}, _extends32[StateProperty.INTERACTIVE_REACT_STATE] = _extends({}, state[StateProperty.INTERACTIVE_REACT_STATE], (_extends22 = {}, _extends22[data["interactiveId"]] = data, _extends22)), _extends32));
      case Action.ADD_NEW_PAGE_ID:
        return _extends({}, state, (_extends4 = {}, _extends4[StateProperty.NEW_PAGE_AVAILABLE_ID] = data, _extends4));
      case Action.ADD_PANNING_MEDIA_STATE:
        var updatedState = _extends({}, state[StateProperty.PANNING_MEDIA_STATE], data);
        return _extends({}, state, (_extends5 = {}, _extends5[StateProperty.PANNING_MEDIA_STATE] = updatedState, _extends5));
      case Action.ADD_TO_ACTIONS_ALLOWLIST:
        var newActionsAllowlist = [].concat(state[StateProperty.ACTIONS_ALLOWLIST], data);
        return _extends({}, state, (_extends6 = {}, _extends6[StateProperty.ACTIONS_ALLOWLIST] = newActionsAllowlist, _extends6));
      case Action.TOGGLE_ACCESS:
        if (state[StateProperty.ACCESS_STATE] === data) {
          return state;
        }
        return _extends({}, state, (_extends7 = {}, _extends7[StateProperty.ACCESS_STATE] = !!data, _extends7[StateProperty.PAUSED_STATE] = !!data, _extends7));
      case Action.TOGGLE_PAGE_ATTACHMENT_STATE:
        return _extends({}, state, (_extends8 = {}, _extends8[StateProperty.PAGE_ATTACHMENT_STATE] = !!data, _extends8));
      case Action.TOGGLE_AD:
        return _extends({}, state, (_extends9 = {}, _extends9[StateProperty.AD_STATE] = !!data, _extends9));
      case Action.TOGGLE_AFFILIATE_LINK:
        return _extends({}, state, (_extends10 = {}, _extends10[StateProperty.AFFILIATE_LINK_STATE] = data, _extends10));
      case Action.TOGGLE_EDUCATION:
        return _extends({}, state, (_extends11 = {}, _extends11[StateProperty.EDUCATION_STATE] = !!data, _extends11));
      case Action.TOGGLE_INTERACTIVE_COMPONENT:
        data = data;
        return _extends({}, state, (_extends12 = {}, _extends12[StateProperty.PAUSED_STATE] = data.state === EmbeddedComponentState.EXPANDED || data.state === EmbeddedComponentState.FOCUSED, _extends12[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = data.state !== EmbeddedComponentState.EXPANDED || state.uiState === UIType.DESKTOP_PANELS, _extends12[StateProperty.INTERACTIVE_COMPONENT_STATE] = data, _extends12));
      case Action.TOGGLE_INFO_DIALOG:
        return _extends({}, state, (_extends13 = {}, _extends13[StateProperty.INFO_DIALOG_STATE] = !!data, _extends13[StateProperty.PAUSED_STATE] = !!data, _extends13));
      case Action.TOGGLE_STORY_HAS_AUDIO:
        return _extends({}, state, (_extends14 = {}, _extends14[StateProperty.STORY_HAS_AUDIO_STATE] = !!data, _extends14));
      case Action.TOGGLE_STORY_HAS_BACKGROUND_AUDIO:
        return _extends({}, state, (_extends15 = {}, _extends15[StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE] = !!data, _extends15));
      case Action.TOGGLE_STORY_HAS_PLAYBACK_UI:
        return _extends({}, state, (_extends16 = {}, _extends16[StateProperty.STORY_HAS_PLAYBACK_UI_STATE] = !!data, _extends16));
      case Action.TOGGLE_MUTED:
        return _extends({}, state, (_extends17 = {}, _extends17[StateProperty.MUTED_STATE] = !!data, _extends17));
      case Action.TOGGLE_PAGE_HAS_AUDIO:
        return _extends({}, state, (_extends18 = {}, _extends18[StateProperty.PAGE_HAS_AUDIO_STATE] = !!data, _extends18));
      case Action.TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK:
        return _extends({}, state, (_extends19 = {}, _extends19[StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE] = !!data, _extends19));
      case Action.TOGGLE_PAUSED:
        return _extends({}, state, (_extends20 = {}, _extends20[StateProperty.PAUSED_STATE] = !!data, _extends20));
      case Action.TOGGLE_RTL:
        return _extends({}, state, (_extends21 = {}, _extends21[StateProperty.RTL_STATE] = !!data, _extends21));
      case Action.TOGGLE_KEYBOARD_ACTIVE_STATE:
        return _extends({}, state, (_extends222 = {}, _extends222[StateProperty.KEYBOARD_ACTIVE_STATE] = !!data, _extends222));
      case Action.TOGGLE_SIDEBAR:
        if (state[StateProperty.SIDEBAR_STATE] === data) {
          return state;
        }
        return _extends({}, state, (_extends23 = {}, _extends23[StateProperty.PAUSED_STATE] = !!data, _extends23[StateProperty.SIDEBAR_STATE] = !!data, _extends23));
      case Action.TOGGLE_HAS_SIDEBAR:
        return _extends({}, state, (_extends24 = {}, _extends24[StateProperty.HAS_SIDEBAR_STATE] = !!data, _extends24));
      case Action.TOGGLE_SUPPORTED_BROWSER:
        return _extends({}, state, (_extends25 = {}, _extends25[StateProperty.SUPPORTED_BROWSER_STATE] = !!data, _extends25));
      case Action.TOGGLE_SHARE_MENU:
        return _extends({}, state, (_extends26 = {}, _extends26[StateProperty.PAUSED_STATE] = !!data, _extends26[StateProperty.SHARE_MENU_STATE] = !!data, _extends26));
      case Action.TOGGLE_SYSTEM_UI_IS_VISIBLE:
        return _extends({}, state, (_extends27 = {}, _extends27[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = !!data, _extends27));
      case Action.TOGGLE_UI:
        if (state[StateProperty.UI_STATE] === UIType.VERTICAL && data !== UIType.VERTICAL) {
          dev().error(TAG2, "Cannot switch away from UIType.VERTICAL");
          return state;
        }
        return _extends({}, state, (_extends28 = {}, _extends28[StateProperty.DESKTOP_STATE] = data === UIType.DESKTOP_PANELS, _extends28[StateProperty.UI_STATE] = data, _extends28));
      case Action.SET_GYROSCOPE_PERMISSION:
        return _extends({}, state, (_extends29 = {}, _extends29[StateProperty.GYROSCOPE_PERMISSION_STATE] = data, _extends29));
      case Action.TOGGLE_VIEWPORT_WARNING:
        return _extends({}, state, (_extends30 = {}, _extends30[StateProperty.VIEWPORT_WARNING_STATE] = !!data, _extends30));
      case Action.SET_CONSENT_ID:
        return _extends({}, state, (_extends31 = {}, _extends31[StateProperty.CONSENT_ID] = data, _extends31));
      case Action.CHANGE_PAGE:
        return _extends({}, state, (_extends322 = {}, _extends322[StateProperty.CURRENT_PAGE_ID] = data.id, _extends322[StateProperty.CURRENT_PAGE_INDEX] = data.index, _extends322));
      case Action.SET_ADVANCEMENT_MODE:
        return _extends({}, state, (_extends33 = {}, _extends33[StateProperty.ADVANCEMENT_MODE] = data, _extends33));
      case Action.SET_NAVIGATION_PATH:
        return _extends({}, state, (_extends34 = {}, _extends34[StateProperty.NAVIGATION_PATH] = data, _extends34));
      case Action.SET_PAGE_IDS:
        return _extends({}, state, (_extends35 = {}, _extends35[StateProperty.PAGE_IDS] = data, _extends35));
      case Action.SET_PAGE_SIZE:
        return _extends({}, state, (_extends36 = {}, _extends36[StateProperty.PAGE_SIZE] = data, _extends36));
      case Action.SET_VIEWER_CUSTOM_CONTROLS:
        return _extends({}, state, (_extends37 = {}, _extends37[StateProperty.VIEWER_CUSTOM_CONTROLS] = data, _extends37));
      default:
        dev().error(TAG2, "Unknown action %s.", action);
        return state;
    }
  };
  var AmpStoryStoreService = /* @__PURE__ */ function() {
    function AmpStoryStoreService2(win) {
      _classCallCheck7(this, AmpStoryStoreService2);
      this.win_ = win;
      this.listeners_ = {};
      this.state_ = _extends({}, this.getDefaultState_(), this.getEmbedOverrides_());
    }
    _createClass6(AmpStoryStoreService2, [{
      key: "get",
      value: function get(key) {
        if (!hasOwn(this.state_, key)) {
          dev().error(TAG2, "Unknown state %s.", key);
          return;
        }
        return this.state_[key];
      }
    }, {
      key: "subscribe",
      value: function subscribe(key, listener, callToInitialize) {
        if (callToInitialize === void 0) {
          callToInitialize = false;
        }
        if (!hasOwn(this.state_, key)) {
          dev().error(TAG2, "Can't subscribe to unknown state %s.", key);
          return;
        }
        if (!this.listeners_[key]) {
          this.listeners_[key] = new Observable();
        }
        this.listeners_[key].add(listener);
        if (callToInitialize) {
          listener(this.get(key));
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch2(action, data) {
        var _this = this;
        var oldState = _extends({}, this.state_);
        this.state_ = actions(this.state_, action, data);
        var comparisonFn;
        Object.keys(this.listeners_).forEach(function(key) {
          comparisonFn = stateComparisonFunctions[key];
          if (comparisonFn ? comparisonFn(oldState[key], _this.state_[key]) : oldState[key] !== _this.state_[key]) {
            _this.listeners_[key].fire(_this.state_[key]);
          }
        });
      }
    }, {
      key: "getDefaultState_",
      value: function getDefaultState_() {
        var _ref;
        return _ref = {}, _ref[StateProperty.CAN_INSERT_AUTOMATIC_AD] = true, _ref[StateProperty.CAN_SHOW_AUDIO_UI] = true, _ref[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = true, _ref[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = true, _ref[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = true, _ref[StateProperty.CAN_SHOW_SHARING_UIS] = true, _ref[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = true, _ref[StateProperty.VIEWER_CUSTOM_CONTROLS] = [], _ref[StateProperty.ACCESS_STATE] = false, _ref[StateProperty.AD_STATE] = false, _ref[StateProperty.AFFILIATE_LINK_STATE] = null, _ref[StateProperty.DESKTOP_STATE] = false, _ref[StateProperty.EDUCATION_STATE] = false, _ref[StateProperty.GYROSCOPE_PERMISSION_STATE] = "", _ref[StateProperty.HAS_SIDEBAR_STATE] = false, _ref[StateProperty.INFO_DIALOG_STATE] = false, _ref[StateProperty.INTERACTIVE_COMPONENT_STATE] = {
          state: EmbeddedComponentState.HIDDEN
        }, _ref[StateProperty.INTERACTIVE_REACT_STATE] = {}, _ref[StateProperty.KEYBOARD_ACTIVE_STATE] = false, _ref[StateProperty.MUTED_STATE] = true, _ref[StateProperty.PAGE_ATTACHMENT_STATE] = false, _ref[StateProperty.PAGE_HAS_AUDIO_STATE] = false, _ref[StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE] = false, _ref[StateProperty.PANNING_MEDIA_STATE] = {}, _ref[StateProperty.PAUSED_STATE] = false, _ref[StateProperty.RTL_STATE] = false, _ref[StateProperty.SHARE_MENU_STATE] = false, _ref[StateProperty.SIDEBAR_STATE] = false, _ref[StateProperty.SUPPORTED_BROWSER_STATE] = true, _ref[StateProperty.STORY_HAS_AUDIO_STATE] = false, _ref[StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE] = false, _ref[StateProperty.STORY_HAS_PLAYBACK_UI_STATE] = false, _ref[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = true, _ref[StateProperty.UI_STATE] = UIType.MOBILE, _ref[StateProperty.VIEWPORT_WARNING_STATE] = false, _ref[StateProperty.ACTIONS_ALLOWLIST] = [], _ref[StateProperty.CONSENT_ID] = null, _ref[StateProperty.CURRENT_PAGE_ID] = "", _ref[StateProperty.CURRENT_PAGE_INDEX] = 0, _ref[StateProperty.ADVANCEMENT_MODE] = "", _ref[StateProperty.NEW_PAGE_AVAILABLE_ID] = "", _ref[StateProperty.NAVIGATION_PATH] = [], _ref[StateProperty.PAGE_IDS] = [], _ref[StateProperty.PAGE_SIZE] = null, _ref[StateProperty.PREVIEW_STATE] = false, _ref;
      }
    }, {
      key: "getEmbedOverrides_",
      value: function getEmbedOverrides_() {
        var _ref2, _ref3, _ref4, _ref5;
        var embedMode = parseEmbedMode(this.win_.location.hash);
        switch (embedMode) {
          case EmbedMode.NAME_TBD:
            return _ref2 = {}, _ref2[StateProperty.CAN_INSERT_AUTOMATIC_AD] = false, _ref2[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = false, _ref2[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = false, _ref2[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = true, _ref2[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = false, _ref2[StateProperty.MUTED_STATE] = false, _ref2;
          case EmbedMode.NO_SHARING:
            return _ref3 = {}, _ref3[StateProperty.CAN_SHOW_SHARING_UIS] = false, _ref3;
          case EmbedMode.PREVIEW:
            return _ref4 = {}, _ref4[StateProperty.PREVIEW_STATE] = true, _ref4[StateProperty.CAN_INSERT_AUTOMATIC_AD] = false, _ref4[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = false, _ref4[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = false, _ref4[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = false, _ref4[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = false, _ref4;
          case EmbedMode.NO_SHARING_NOR_AUDIO_UI:
            return _ref5 = {}, _ref5[StateProperty.CAN_SHOW_AUDIO_UI] = false, _ref5[StateProperty.CAN_SHOW_SHARING_UIS] = false, _ref5;
          default:
            return {};
        }
      }
    }]);
    return AmpStoryStoreService2;
  }();

  // extensions/amp-story-auto-ads/0.1/story-ad-config.js
  function _extends2() {
    _extends2 = Object.assign || function(target) {
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
    return _extends2.apply(this, arguments);
  }
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
  var TAG3 = "amp-story-auto-ads:config";
  var DisallowedAdAttributes = {
    "height": true,
    "layout": true,
    "width": true
  };
  var AllowedAdTypes = {
    "adsense": true,
    "custom": true,
    "doubleclick": true,
    "fake": true,
    "nws": true
  };
  var StoryAdConfig = /* @__PURE__ */ function() {
    function StoryAdConfig2(element) {
      _classCallCheck8(this, StoryAdConfig2);
      this.element_ = element;
    }
    _createClass7(StoryAdConfig2, [{
      key: "getConfig",
      value: function getConfig() {
        var child = this.element_.firstElementChild;
        userAssert(child && isJsonScriptTag(child), "The " + TAG3 + ' should be inside a <script> tag with type="application/json"');
        var jsonConfig = parseJson(child.textContent);
        var requiredAttrs = {
          class: "i-amphtml-story-ad",
          layout: "fill",
          "amp-story": ""
        };
        var adAttributes = jsonConfig["ad-attributes"];
        userAssert(adAttributes, TAG3 + ' Error reading config. Top level JSON should have an "ad-attributes" key');
        this.validateType_(adAttributes["type"]);
        for (var attr in adAttributes) {
          var value = adAttributes[attr];
          if (isObject(value)) {
            adAttributes[attr] = JSON.stringify(value);
          }
          if (DisallowedAdAttributes[attr]) {
            user().warn(TAG3, 'ad-attribute "%s" is not allowed', attr);
            delete adAttributes[attr];
          }
        }
        return _extends2({}, adAttributes, requiredAttrs);
      }
    }, {
      key: "validateType_",
      value: function validateType_(type) {
        userAssert(!!AllowedAdTypes[type], TAG3 + ' "' + type + '" ad type is missing or not supported');
        if (type === "fake") {
          var id = this.element_.id;
          userAssert(id && id.startsWith("i-amphtml-demo-"), TAG3 + " id must start with i-amphtml-demo- to use fake ads");
        }
      }
    }]);
    return StoryAdConfig2;
  }();

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
  function px(value) {
    return value + "px";
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // extensions/amp-story-auto-ads/0.1/story-ad-button-text-fitter.js
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
  var MAX_HEIGHT = 32;
  var FontSizes = {
    MIN: 12,
    MAX: 14
  };
  var ButtonTextFitter = /* @__PURE__ */ function() {
    function ButtonTextFitter2(ampdoc) {
      var _this = this;
      _classCallCheck9(this, ButtonTextFitter2);
      this.mutator_ = Services.mutatorForDoc(ampdoc);
      this.doc_ = ampdoc.win.document;
      this.measurer_ = this.doc_.createElement("div");
      this.mutator_.mutateElement(this.measurer_, function() {
        _this.doc_.body.appendChild(_this.measurer_);
        setStyles(_this.measurer_, {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          visibility: "hidden",
          "font-weight": "bold",
          "letter-spacing": "0.2px"
        });
      });
    }
    _createClass8(ButtonTextFitter2, [{
      key: "fit",
      value: function fit(pageElement, container, content) {
        var _this2 = this;
        var success = false;
        return this.mutator_.mutateElement(container, function() {
          _this2.measurer_.textContent = content;
          var fontSize = calculateFontSize(_this2.measurer_, MAX_HEIGHT, _this2.getMaxWidth_(pageElement), FontSizes.MIN, FontSizes.MAX);
          if (fontSize >= FontSizes.MIN) {
            _this2.updateFontSize_(container, fontSize);
            success = true;
          }
        }).then(function() {
          return success;
        });
      }
    }, {
      key: "getMaxWidth_",
      value: function getMaxWidth_(pageElement) {
        return pageElement.offsetWidth - 84;
      }
    }, {
      key: "updateFontSize_",
      value: function updateFontSize_(container, fontSize) {
        setStyle(container, "fontSize", px(fontSize));
      }
    }]);
    return ButtonTextFitter2;
  }();
  function calculateFontSize(measurer, expectedHeight, expectedWidth, minFontSize, maxFontSize) {
    for (var fontSize = maxFontSize; fontSize >= minFontSize; fontSize--) {
      setStyle(measurer, "fontSize", px(fontSize));
      var height = measurer.offsetHeight;
      var width = measurer.offsetWidth;
      if (height < expectedHeight && width < expectedWidth) {
        return fontSize;
      }
    }
    return minFontSize - 1;
  }

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck10(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass9(LruCache2, [{
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

  // build/amp-story-auto-ads-attribution-0.1.css.js
  var CSS3 = ".i-amphtml-story-ad-attribution{position:absolute;bottom:0!important;left:0!important;max-height:15px!important;z-index:4!important}.i-amphtml-story-ad-fullbleed.i-amphtml-story-ad-attribution{bottom:12.5vh!important;left:50%!important;transform:translateX(-22.5vh)!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-attribution.css*/";

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

  // build/amp-story-auto-ads-cta-button-0.1.css.js
  var CSS4 = ".i-amphtml-story-ad-link{background-color:#fff!important;border-radius:20px!important;box-sizing:border-box!important;bottom:32px!important;box-shadow:0px 2px 12px rgba(0,0,0,0.16)!important;color:#4285f4!important;font-family:Roboto,sans-serif!important;font-weight:700!important;height:36px!important;letter-spacing:0.2px!important;line-height:36px!important;overflow:hidden!important;opacity:0;padding:0 10px!important;position:absolute!important;text-align:center!important;text-decoration:none!important;min-width:120px!important;max-width:calc(100vw - 64px)}[cta-active].i-amphtml-story-ad-link{animation-delay:100ms!important;animation-duration:300ms!important;animation-timing-function:cubic-bezier(0.4,0,0.2,1)!important;animation-fill-mode:forwards!important;animation-name:ad-cta!important}@keyframes ad-cta{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-cta-button.css*/";

  // extensions/amp-story-auto-ads/0.1/story-ad-ui.js
  var TAG4 = "amp-story-auto-ads:ui";
  var CTA_META_PREFIX = "amp-cta-";
  var A4A_VARS_META_PREFIX = "amp4ads-vars-";
  var START_CTA_ANIMATION_ATTR = "cta-active";
  var A4AVarNames = {
    ATTRIBUTION_ICON: "attribution-icon",
    ATTRIBUTION_URL: "attribution-url",
    CTA_TYPE: "cta-type",
    CTA_URL: "cta-url"
  };
  var DataAttrs = {
    CTA_TYPE: "data-vars-ctatype",
    CTA_URL: "data-vars-ctaurl"
  };
  function getStoryAdMetaTags(doc) {
    var selector = "meta[name^=amp4ads-vars-],meta[name^=amp-cta-]";
    return doc.querySelectorAll(selector);
  }
  function getStoryAdMetadataFromDoc(doc) {
    var storyMetaTags = getStoryAdMetaTags(doc);
    var vars = map();
    iterateCursor(storyMetaTags, function(tag) {
      var content = tag.content, name = tag.name;
      if (name.startsWith(CTA_META_PREFIX)) {
        var key = name.split("amp-")[1];
        vars[key] = content;
      } else if (name.startsWith(A4A_VARS_META_PREFIX)) {
        var _key = name.split(A4A_VARS_META_PREFIX)[1];
        vars[_key] = content;
      }
    });
    return vars;
  }
  function getStoryAdMetadataFromElement(adElement) {
    var _ref;
    var ctaUrl = adElement.getAttribute(DataAttrs.CTA_URL);
    var ctaType = adElement.getAttribute(DataAttrs.CTA_TYPE);
    return _ref = {}, _ref[A4AVarNames.CTA_TYPE] = ctaType, _ref[A4AVarNames.CTA_URL] = ctaUrl, _ref;
  }
  function validateCtaMetadata(metadata, opt_inabox) {
    if (!metadata[A4AVarNames.CTA_TYPE] || !metadata[A4AVarNames.CTA_URL]) {
      !opt_inabox && user().error(TAG4, "Both CTA Type & CTA Url are required in ad response.");
      return false;
    }
    return true;
  }
  function maybeCreateAttribution(win, metadata, container) {
    var doc = win.document;
    try {
      var href = metadata[A4AVarNames.ATTRIBUTION_URL];
      var src = metadata[A4AVarNames.ATTRIBUTION_ICON];
      if (!href || !src) {
        return null;
      }
      assertHttpsUrl(href, dev().assertElement(container), "amp-story-auto-ads attribution url");
      assertHttpsUrl(src, dev().assertElement(container), "amp-story-auto-ads attribution icon");
      var root = createElementWithAttributes(doc, "div", dict({
        "role": "button",
        "class": "i-amphtml-attribution-host"
      }));
      var adChoicesIcon = createElementWithAttributes(doc, "img", dict({
        "class": "i-amphtml-story-ad-attribution",
        "src": src
      }));
      adChoicesIcon.addEventListener("click", function(unusedEvent) {
        return handleAttributionClick(win, href);
      });
      createShadowRootWithStyle(root, adChoicesIcon, CSS3);
      container.appendChild(root);
      return adChoicesIcon;
    } catch (e) {
      return null;
    }
  }
  function handleAttributionClick(win, href) {
    openWindowDialog(win, href, "_blank");
  }
  function createCta(doc, buttonFitter, container, uiMetadata) {
    var ctaUrl = uiMetadata[A4AVarNames.CTA_URL];
    var ctaText = uiMetadata[A4AVarNames.CTA_TYPE];
    var a2 = createElementWithAttributes(doc, "a", dict({
      "class": "i-amphtml-story-ad-link",
      "target": "_blank",
      "href": ctaUrl
    }));
    var fitPromise = buttonFitter.fit(dev().assertElement(container), a2, ctaText);
    return fitPromise.then(function(success) {
      if (!success) {
        user().warn(TAG4, "CTA button text is too long. Ad was discarded.");
        return null;
      }
      a2.href = ctaUrl;
      a2.textContent = ctaText;
      if (a2.protocol !== "https:" && a2.protocol !== "http:") {
        user().warn(TAG4, "CTA url is not valid. Ad was discarded");
        return null;
      }
      var ctaLayer = doc.createElement("amp-story-cta-layer");
      ctaLayer.className = "i-amphtml-cta-container";
      var linkRoot = createElementWithAttributes(doc, "div", dict({
        "class": "i-amphtml-story-ad-link-root",
        "role": "button"
      }));
      createShadowRootWithStyle(linkRoot, a2, CSS4);
      ctaLayer.appendChild(linkRoot);
      container.appendChild(ctaLayer);
      return a2;
    });
  }

  // src/pass.js
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
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      _classCallCheck11(this, Pass2);
      this.timer_ = Services.timerFor(win);
      this.handler_ = handler;
      this.defaultDelay_ = opt_defaultDelay || 0;
      this.scheduled_ = -1;
      this.nextTime_ = 0;
      this.running_ = false;
      this.boundPass_ = function() {
        _this.pass_();
      };
    }
    _createClass10(Pass2, [{
      key: "isPending",
      value: function isPending() {
        return this.scheduled_ != -1;
      }
    }, {
      key: "schedule",
      value: function schedule(opt_delay) {
        var delay = opt_delay || this.defaultDelay_;
        if (this.running_ && delay < 10) {
          delay = 10;
        }
        var nextTime = Date.now() + delay;
        if (!this.isPending() || nextTime - this.nextTime_ < -10) {
          this.cancel();
          this.nextTime_ = nextTime;
          this.scheduled_ = this.timer_.delay(this.boundPass_, delay);
          return true;
        }
        return false;
      }
    }, {
      key: "pass_",
      value: function pass_() {
        this.scheduled_ = -1;
        this.nextTime_ = 0;
        this.running_ = true;
        this.handler_();
        this.running_ = false;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (this.isPending()) {
          this.timer_.cancel(this.scheduled_);
          this.scheduled_ = -1;
        }
      }
    }]);
    return Pass2;
  }();

  // src/gesture.js
  function _defineProperties11(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass11(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties11(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties11(Constructor, staticProps);
    return Constructor;
  }
  function _classCallCheck12(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var PROP_ = "__AMP_Gestures";
  var Gesture = function Gesture2(type, data, time, event) {
    _classCallCheck12(this, Gesture2);
    this.type = type;
    this.data = data;
    this.time = time;
    this.event = event;
  };
  var Gestures = /* @__PURE__ */ function() {
    function Gestures2(element, shouldNotPreventDefault, shouldStopPropagation) {
      _classCallCheck12(this, Gestures2);
      this.element_ = element;
      this.recognizers_ = [];
      this.tracking_ = [];
      this.ready_ = [];
      this.pending_ = [];
      this.eventing_ = null;
      this.shouldNotPreventDefault_ = shouldNotPreventDefault;
      this.shouldStopPropagation_ = shouldStopPropagation;
      this.wasEventing_ = false;
      this.pass_ = new Pass(toWin(element.ownerDocument.defaultView), this.doPass_.bind(this));
      this.pointerDownObservable_ = new Observable();
      this.overservers_ = Object.create(null);
      this.boundOnTouchStart_ = this.onTouchStart_.bind(this);
      this.boundOnTouchEnd_ = this.onTouchEnd_.bind(this);
      this.boundOnTouchMove_ = this.onTouchMove_.bind(this);
      this.boundOnTouchCancel_ = this.onTouchCancel_.bind(this);
      var win = element.ownerDocument.defaultView;
      var passiveSupported2 = supportsPassiveEventListener(toWin(win));
      this.element_.addEventListener("touchstart", this.boundOnTouchStart_, passiveSupported2 ? {
        passive: true
      } : false);
      this.element_.addEventListener("touchend", this.boundOnTouchEnd_);
      this.element_.addEventListener("touchmove", this.boundOnTouchMove_, passiveSupported2 ? {
        passive: true
      } : false);
      this.element_.addEventListener("touchcancel", this.boundOnTouchCancel_);
      this.passAfterEvent_ = false;
    }
    _createClass11(Gestures2, [{
      key: "cleanup",
      value: function cleanup() {
        this.element_.removeEventListener("touchstart", this.boundOnTouchStart_);
        this.element_.removeEventListener("touchend", this.boundOnTouchEnd_);
        this.element_.removeEventListener("touchmove", this.boundOnTouchMove_);
        this.element_.removeEventListener("touchcancel", this.boundOnTouchCancel_);
        delete this.element_[PROP_];
        this.pass_.cancel();
      }
    }, {
      key: "onGesture",
      value: function onGesture(recognizerConstr, handler) {
        var recognizer = new recognizerConstr(this);
        var type = recognizer.getType();
        var overserver = this.overservers_[type];
        if (!overserver) {
          this.recognizers_.push(recognizer);
          overserver = new Observable();
          this.overservers_[type] = overserver;
        }
        return overserver.add(handler);
      }
    }, {
      key: "removeGesture",
      value: function removeGesture(recognizerConstr) {
        var type = new recognizerConstr(this).getType();
        var overserver = this.overservers_[type];
        if (overserver) {
          overserver.removeAll();
          var index = findIndex(this.recognizers_, function(e) {
            return e.getType() == type;
          });
          if (index < 0) {
            return false;
          }
          this.recognizers_.splice(index, 1);
          this.ready_.splice(index, 1);
          this.pending_.splice(index, 1);
          this.tracking_.splice(index, 1);
          delete this.overservers_[type];
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onPointerDown",
      value: function onPointerDown(handler) {
        return this.pointerDownObservable_.add(handler);
      }
    }, {
      key: "onTouchStart_",
      value: function onTouchStart_(event) {
        var now = Date.now();
        this.wasEventing_ = false;
        this.pointerDownObservable_.fire(event);
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.ready_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
          }
          if (this.recognizers_[i].onTouchStart(event)) {
            this.startTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchMove_",
      value: function onTouchMove_(event) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.tracking_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
            continue;
          }
          if (!this.recognizers_[i].onTouchMove(event)) {
            this.stopTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchEnd_",
      value: function onTouchEnd_(event) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.tracking_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
            continue;
          }
          this.recognizers_[i].onTouchEnd(event);
          var isReady = !this.pending_[i];
          var isExpired = this.pending_[i] < now;
          var isEventing = this.eventing_ == this.recognizers_[i];
          if (!isEventing && (isReady || isExpired)) {
            this.stopTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchCancel_",
      value: function onTouchCancel_(event) {
        for (var i = 0; i < this.recognizers_.length; i++) {
          this.cancelEventing_(i);
        }
        this.afterEvent_(event);
      }
    }, {
      key: "signalReady_",
      value: function signalReady_(recognizer, offset) {
        if (this.eventing_) {
          recognizer.acceptCancel();
          return;
        }
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.recognizers_[i] == recognizer) {
            this.ready_[i] = now + offset;
            this.pending_[i] = 0;
          }
        }
        this.passAfterEvent_ = true;
      }
    }, {
      key: "signalPending_",
      value: function signalPending_(recognizer, timeLeft) {
        if (this.eventing_) {
          recognizer.acceptCancel();
          return;
        }
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.recognizers_[i] == recognizer) {
            this.pending_[i] = now + timeLeft;
          }
        }
      }
    }, {
      key: "signalEnd_",
      value: function signalEnd_(recognizer) {
        if (this.eventing_ == recognizer) {
          this.eventing_ = null;
          this.wasEventing_ = true;
        }
      }
    }, {
      key: "signalEmit_",
      value: function signalEmit_(recognizer, data, event) {
        devAssert(this.eventing_ == recognizer, "Recognizer is not currently allowed: %s", recognizer.getType());
        var overserver = this.overservers_[recognizer.getType()];
        if (overserver) {
          overserver.fire(new Gesture(recognizer.getType(), data, Date.now(), event));
        }
      }
    }, {
      key: "afterEvent_",
      value: function afterEvent_(event) {
        var cancelEvent = !!this.eventing_ || this.wasEventing_;
        this.wasEventing_ = false;
        if (!cancelEvent) {
          var now = Date.now();
          for (var i = 0; i < this.recognizers_.length; i++) {
            if (this.ready_[i] || this.pending_[i] && this.pending_[i] >= now) {
              cancelEvent = true;
              break;
            }
          }
        }
        if (cancelEvent) {
          event.stopPropagation();
          if (!this.shouldNotPreventDefault_) {
            event.preventDefault();
          }
        } else if (this.shouldStopPropagation_) {
          event.stopPropagation();
        }
        if (this.passAfterEvent_) {
          this.passAfterEvent_ = false;
          this.doPass_();
        }
      }
    }, {
      key: "doPass_",
      value: function doPass_() {
        var now = Date.now();
        var readyIndex = -1;
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.ready_[i]) {
            if (this.pending_[i] && this.pending_[i] < now) {
              this.stopTracking_(i);
            }
            continue;
          }
          if (readyIndex == -1 || this.ready_[i] > this.ready_[readyIndex]) {
            readyIndex = i;
          }
        }
        if (readyIndex == -1) {
          return;
        }
        var waitTime = 0;
        for (var _i = 0; _i < this.recognizers_.length; _i++) {
          if (this.ready_[_i] || !this.tracking_[_i]) {
            continue;
          }
          waitTime = Math.max(waitTime, this.pending_[_i] - now);
        }
        if (waitTime < 2) {
          this.startEventing_(readyIndex);
          return;
        }
        this.pass_.schedule(waitTime);
      }
    }, {
      key: "startEventing_",
      value: function startEventing_(index) {
        var recognizer = this.recognizers_[index];
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (i != index) {
            this.cancelEventing_(i);
          }
        }
        this.ready_[index] = 0;
        this.pending_[index] = 0;
        this.eventing_ = recognizer;
        recognizer.acceptStart();
      }
    }, {
      key: "startTracking_",
      value: function startTracking_(index) {
        this.tracking_[index] = true;
        this.pending_[index] = 0;
      }
    }, {
      key: "stopTracking_",
      value: function stopTracking_(index) {
        this.tracking_[index] = false;
        this.pending_[index] = 0;
        if (!this.ready_[index]) {
          this.recognizers_[index].acceptCancel();
        }
      }
    }, {
      key: "cancelEventing_",
      value: function cancelEventing_(index) {
        this.ready_[index] = 0;
        this.stopTracking_(index);
      }
    }], [{
      key: "get",
      value: function get(element, opt_shouldNotPreventDefault, opt_shouldStopPropagation) {
        if (opt_shouldNotPreventDefault === void 0) {
          opt_shouldNotPreventDefault = false;
        }
        if (opt_shouldStopPropagation === void 0) {
          opt_shouldStopPropagation = false;
        }
        var res = element[PROP_];
        if (!res) {
          res = new Gestures2(element, opt_shouldNotPreventDefault, opt_shouldStopPropagation);
          element[PROP_] = res;
        }
        return res;
      }
    }]);
    return Gestures2;
  }();
  var GestureRecognizer = /* @__PURE__ */ function() {
    function GestureRecognizer2(type, manager) {
      _classCallCheck12(this, GestureRecognizer2);
      this.type_ = type;
      this.manager_ = manager;
    }
    _createClass11(GestureRecognizer2, [{
      key: "getType",
      value: function getType() {
        return this.type_;
      }
    }, {
      key: "signalReady",
      value: function signalReady(offset) {
        this.manager_.signalReady_(this, offset);
      }
    }, {
      key: "signalPending",
      value: function signalPending(timeLeft) {
        this.manager_.signalPending_(this, timeLeft);
      }
    }, {
      key: "signalEnd",
      value: function signalEnd() {
        this.manager_.signalEnd_(this);
      }
    }, {
      key: "signalEmit",
      value: function signalEmit(data, event) {
        this.manager_.signalEmit_(this, data, event);
      }
    }, {
      key: "acceptStart",
      value: function acceptStart() {
      }
    }, {
      key: "acceptCancel",
      value: function acceptCancel() {
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(unusedEvent) {
        return false;
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(unusedEvent) {
        return false;
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(unusedEvent) {
      }
    }]);
    return GestureRecognizer2;
  }();

  // src/motion.js
  var FRAME_CONST_ = 16.67;
  var EXP_FRAME_CONST_ = Math.round(-FRAME_CONST_ / Math.log(0.95));
  var VELOCITY_DEPR_FACTOR_ = FRAME_CONST_ * 2;
  function calcVelocity(deltaV, deltaTime, prevVelocity) {
    if (deltaTime < 1) {
      deltaTime = 1;
    }
    var speed = deltaV / deltaTime;
    var depr = 0.5 + Math.min(deltaTime / VELOCITY_DEPR_FACTOR_, 0.5);
    return speed * depr + prevVelocity * (1 - depr);
  }

  // src/gesture-recognizers.js
  function _classCallCheck13(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties12(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass12(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties12(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties12(Constructor, staticProps);
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
  var SwipeRecognizer = /* @__PURE__ */ function(_GestureRecognizer3) {
    _inherits(SwipeRecognizer2, _GestureRecognizer3);
    var _super3 = _createSuper(SwipeRecognizer2);
    function SwipeRecognizer2(type, manager, horiz, vert) {
      var _this3;
      _classCallCheck13(this, SwipeRecognizer2);
      _this3 = _super3.call(this, type, manager);
      _this3.horiz_ = horiz;
      _this3.vert_ = vert;
      _this3.eventing_ = false;
      _this3.startX_ = 0;
      _this3.startY_ = 0;
      _this3.lastX_ = 0;
      _this3.lastY_ = 0;
      _this3.prevX_ = 0;
      _this3.prevY_ = 0;
      _this3.startTime_ = 0;
      _this3.lastTime_ = 0;
      _this3.prevTime_ = 0;
      _this3.velocityX_ = 0;
      _this3.velocityY_ = 0;
      return _this3;
    }
    _createClass12(SwipeRecognizer2, [{
      key: "onTouchStart",
      value: function onTouchStart(e) {
        var touches = e.touches;
        if (this.eventing_ && touches && touches.length > 1) {
          return true;
        }
        if (touches && touches.length == 1) {
          this.startTime_ = Date.now();
          this.startX_ = touches[0].clientX;
          this.startY_ = touches[0].clientY;
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(e) {
        var touches = e.touches;
        if (touches && touches.length >= 1) {
          var _touches$ = touches[0], x = _touches$.clientX, y = _touches$.clientY;
          this.lastX_ = x;
          this.lastY_ = y;
          if (this.eventing_) {
            this.emit_(false, false, e);
          } else {
            var dx = Math.abs(x - this.startX_);
            var dy = Math.abs(y - this.startY_);
            if (this.horiz_ && this.vert_) {
              if (dx >= 8 || dy >= 8) {
                this.signalReady(-10);
              }
            } else if (this.horiz_) {
              if (dx >= 8 && dx > dy) {
                this.signalReady(-10);
              } else if (dy >= 8) {
                return false;
              }
            } else if (this.vert_) {
              if (dy >= 8 && dy > dx) {
                this.signalReady(-10);
              } else if (dx >= 8) {
                return false;
              }
            } else {
              return false;
            }
          }
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(e) {
        var touches = e.touches;
        if (touches && touches.length == 0) {
          this.end_(e);
        }
      }
    }, {
      key: "acceptStart",
      value: function acceptStart() {
        this.eventing_ = true;
        this.prevX_ = this.startX_;
        this.prevY_ = this.startY_;
        this.prevTime_ = this.startTime_;
        this.startX_ = this.lastX_;
        this.startY_ = this.lastY_;
        this.emit_(true, false, null);
      }
    }, {
      key: "acceptCancel",
      value: function acceptCancel() {
        this.eventing_ = false;
      }
    }, {
      key: "emit_",
      value: function emit_(first, last, event) {
        this.lastTime_ = Date.now();
        var deltaTime = this.lastTime_ - this.prevTime_;
        if (!last && deltaTime > 4 || last && deltaTime > 16) {
          var velocityX = calcVelocity(this.lastX_ - this.prevX_, deltaTime, this.velocityX_);
          var velocityY = calcVelocity(this.lastY_ - this.prevY_, deltaTime, this.velocityY_);
          if (!last || deltaTime > 32 || velocityX != 0 || velocityY != 0) {
            this.velocityX_ = Math.abs(velocityX) > 1e-4 ? velocityX : 0;
            this.velocityY_ = Math.abs(velocityY) > 1e-4 ? velocityY : 0;
          }
          this.prevX_ = this.lastX_;
          this.prevY_ = this.lastY_;
          this.prevTime_ = this.lastTime_;
        }
        this.signalEmit({
          first,
          last,
          time: this.lastTime_,
          deltaX: this.lastX_ - this.startX_,
          deltaY: this.lastY_ - this.startY_,
          startX: this.startX_,
          startY: this.startY_,
          lastX: this.lastX_,
          lastY: this.lastY_,
          velocityX: this.velocityX_,
          velocityY: this.velocityY_
        }, event);
      }
    }, {
      key: "end_",
      value: function end_(event) {
        if (this.eventing_) {
          this.eventing_ = false;
          this.emit_(false, true, event);
          this.signalEnd();
        }
      }
    }]);
    return SwipeRecognizer2;
  }(GestureRecognizer);
  var SwipeXRecognizer = /* @__PURE__ */ function(_SwipeRecognizer2) {
    _inherits(SwipeXRecognizer2, _SwipeRecognizer2);
    var _super5 = _createSuper(SwipeXRecognizer2);
    function SwipeXRecognizer2(manager) {
      _classCallCheck13(this, SwipeXRecognizer2);
      return _super5.call(this, "swipe-x", manager, true, false);
    }
    return SwipeXRecognizer2;
  }(SwipeRecognizer);

  // extensions/amp-ad-exit/0.1/filters/filter.js
  var FilterType = {
    CLICK_DELAY: "clickDelay",
    CLICK_LOCATION: "clickLocation",
    INACTIVE_ELEMENT: "inactiveElement"
  };

  // extensions/amp-analytics/0.1/iframe-transport-vendors.js
  function _extends3() {
    _extends3 = Object.assign || function(target) {
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
    return _extends3.apply(this, arguments);
  }
  var prodConfig = {
    "bg": "https://tpc.googlesyndication.com/b4a/b4a-runner.html",
    "moat": "https://z.moatads.com/ampanalytics093284/iframe.html"
  };
  var canaryConfig = _extends3({}, prodConfig, {
    "bg": "https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"
  });

  // extensions/amp-ad-exit/0.1/config.js
  var TransportMode = {
    BEACON: "beacon",
    IMAGE: "image"
  };
  function assertConfig(config) {
    userAssert(typeof config == "object");
    if (config["filters"]) {
      assertFilters(config["filters"]);
    } else {
      config["filters"] = {};
    }
    if (config["transport"]) {
      assertTransport(config["transport"]);
    } else {
      config["transport"] = {};
    }
    assertTargets(config["targets"], config);
    return config;
  }
  function assertTransport(transport) {
    for (var t in transport) {
      userAssert(t == TransportMode.BEACON || t == TransportMode.IMAGE, "Unknown transport option: '" + t + "'");
      userAssert(typeof transport[t] == "boolean");
    }
  }
  function assertFilters(filters) {
    var validFilters = [FilterType.CLICK_DELAY, FilterType.CLICK_LOCATION, FilterType.INACTIVE_ELEMENT];
    for (var name in filters) {
      userAssert(typeof filters[name] == "object", "Filter specification '%s' is malformed", name);
      userAssert(validFilters.indexOf(filters[name].type) != -1, "Supported filters: " + validFilters.join(", "));
    }
  }
  function assertTargets(targets, config) {
    userAssert(typeof targets == "object", "'targets' must be an object");
    for (var target in targets) {
      assertTarget(target, targets[target], config);
    }
  }
  function assertTarget(name, target, config) {
    userAssert(typeof target["finalUrl"] == "string", "finalUrl of target '%s' must be a string", name);
    if (target["filters"]) {
      target["filters"].forEach(function(filter) {
        userAssert(config["filters"][filter], "filter '%s' not defined", filter);
      });
    }
    if (target["vars"]) {
      var pattern = /^_[a-zA-Z0-9_-]+$/;
      for (var variable in target["vars"]) {
        userAssert(pattern.test(variable), "'%s' must match the pattern '%s'", variable, pattern);
      }
    }
  }

  // extensions/amp-story-auto-ads/0.1/story-ad-page.js
  function _classCallCheck14(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties13(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass13(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties13(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties13(Constructor, staticProps);
    return Constructor;
  }
  var TAG5 = "amp-story-auto-ads:page";
  var TIMEOUT_LIMIT = 1e4;
  var GLASS_PANE_CLASS = "i-amphtml-glass-pane";
  var DESKTOP_FULLBLEED_CLASS = "i-amphtml-story-ad-fullbleed";
  var PageAttributes = {
    LOADING: "i-amphtml-loading",
    IFRAME_BODY_VISIBLE: "amp-story-visible"
  };
  var StoryAdPage = /* @__PURE__ */ function() {
    function StoryAdPage2(ampdoc, config, index, localization, buttonFitter, storeService) {
      _classCallCheck14(this, StoryAdPage2);
      this.config_ = config;
      this.index_ = index;
      this.localizationService_ = localization;
      this.id_ = "i-amphtml-ad-page-" + this.index_;
      this.win_ = ampdoc.win;
      this.doc_ = this.win_.document;
      this.analytics_ = getServicePromiseForDoc(ampdoc, STORY_AD_ANALYTICS);
      this.timeCreated_ = null;
      this.pageElement_ = null;
      this.adElement_ = null;
      this.adFrame_ = null;
      this.adChoicesIcon_ = null;
      this.ctaAnchor_ = null;
      this.adDoc_ = null;
      this.loaded_ = false;
      this.loadCallbacks_ = [];
      this.buttonFitter_ = buttonFitter;
      this.viewed_ = false;
      this.storeService_ = storeService;
      this.is3pAdFrame_ = false;
    }
    _createClass13(StoryAdPage2, [{
      key: "getAdDoc",
      value: function getAdDoc() {
        return this.adDoc_;
      }
    }, {
      key: "getId",
      value: function getId() {
        return this.id_;
      }
    }, {
      key: "hasTimedOut",
      value: function hasTimedOut() {
        return !!this.timeCreated_ && Date.now() - this.timeCreated_ > TIMEOUT_LIMIT;
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return this.loaded_;
      }
    }, {
      key: "hasBeenViewed",
      value: function hasBeenViewed() {
        return this.viewed_;
      }
    }, {
      key: "getPageElement",
      value: function getPageElement() {
        return this.pageElement_;
      }
    }, {
      key: "registerLoadCallback",
      value: function registerLoadCallback(cb) {
        this.loadCallbacks_.push(cb);
      }
    }, {
      key: "toggleVisibility",
      value: function toggleVisibility() {
        this.viewed_ = true;
        this.ctaAnchor_ && toggleAttribute(this.ctaAnchor_, START_CTA_ANIMATION_ATTR);
        if (this.adDoc_) {
          toggleAttribute(dev().assertElement(this.adDoc_.body), PageAttributes.IFRAME_BODY_VISIBLE);
          var alternateBody = this.adDoc_.querySelector("#x-a4a-former-body");
          alternateBody && toggleAttribute(alternateBody, PageAttributes.IFRAME_BODY_VISIBLE);
        }
      }
    }, {
      key: "build",
      value: function build() {
        var _this$analyticsEvent_;
        this.timeCreated_ = Date.now();
        this.pageElement_ = this.createPageElement_();
        this.adElement_ = this.createAdElement_();
        var glassPane = this.doc_.createElement("div");
        glassPane.classList.add(GLASS_PANE_CLASS);
        var gridLayer = this.doc_.createElement("amp-story-grid-layer");
        gridLayer.setAttribute("template", "fill");
        var paneGridLayer = gridLayer.cloneNode(false);
        gridLayer.appendChild(this.adElement_);
        paneGridLayer.appendChild(glassPane);
        this.pageElement_.appendChild(gridLayer);
        this.pageElement_.appendChild(paneGridLayer);
        this.listenForAdLoadSignals_();
        this.listenForSwipes_();
        this.analyticsEvent_(AnalyticsEvents.AD_REQUESTED, (_this$analyticsEvent_ = {}, _this$analyticsEvent_[AnalyticsVars.AD_REQUESTED] = Date.now(), _this$analyticsEvent_));
        return this.pageElement_;
      }
    }, {
      key: "maybeCreateCta",
      value: function maybeCreateCta() {
        var _this = this;
        return resolvedPromise().then(function() {
          if (_this.is3pAdFrame_) {
            return true;
          }
          var uiMetadata = map();
          if (!_this.adDoc_) {
            Object.assign(uiMetadata, getStoryAdMetadataFromElement(devAssert(_this.adElement_)));
          } else {
            Object.assign(uiMetadata, getStoryAdMetadataFromDoc(_this.adDoc_), _this.readAmpAdExit_());
          }
          if (!validateCtaMetadata(uiMetadata)) {
            return false;
          }
          uiMetadata[A4AVarNames.CTA_TYPE] = localizeCtaText(uiMetadata[A4AVarNames.CTA_TYPE], _this.localizationService_) || uiMetadata[A4AVarNames.CTA_TYPE];
          _this.analytics_.then(function(analytics) {
            return analytics.setVar(_this.index_, AnalyticsVars.CTA_TYPE, uiMetadata[A4AVarNames.CTA_TYPE]);
          });
          if (_this.adChoicesIcon_ = maybeCreateAttribution(_this.win_, uiMetadata, devAssert(_this.pageElement_))) {
            _this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
              _this.onUIStateUpdate_(uiState);
            }, true);
          }
          return _this.createCtaLayer_(uiMetadata);
        });
      }
    }, {
      key: "createPageElement_",
      value: function createPageElement_() {
        var attributes = dict({
          "ad": "",
          "distance": "2",
          "i-amphtml-loading": "",
          "id": this.id_
        });
        var autoAdvanceExpBranch = getExperimentBranch(this.win_, StoryAdAutoAdvance.ID);
        if (autoAdvanceExpBranch && autoAdvanceExpBranch !== StoryAdAutoAdvance.CONTROL) {
          attributes["auto-advance-after"] = AdvanceExpToTime[autoAdvanceExpBranch];
        }
        var page = createElementWithAttributes(this.doc_, "amp-story-page", attributes);
        setStyle(page, "background-color", "#212125");
        return page;
      }
    }, {
      key: "createAdElement_",
      value: function createAdElement_() {
        if (this.config_["type"] === "fake") {
          this.config_["id"] = "i-amphtml-demo-" + this.index_;
        }
        return createElementWithAttributes(this.doc_, "amp-ad", this.config_);
      }
    }, {
      key: "listenForAdLoadSignals_",
      value: function listenForAdLoadSignals_() {
        var _this2 = this;
        this.adElement_.signals().whenSignal(CommonSignals.INI_LOAD).then(function() {
          return _this2.onAdLoaded_();
        });
        var removeListener = listen(this.win_, "message", function(e) {
          if (getData(e) !== "amp-story-ad-load") {
            return;
          }
          if (_this2.getAdFrame_() && e.source === _this2.adFrame_.contentWindow) {
            _this2.is3pAdFrame_ = true;
            _this2.pageElement_.setAttribute("xdomain-ad", "");
            _this2.onAdLoaded_();
            removeListener();
          }
        });
      }
    }, {
      key: "listenForSwipes_",
      value: function listenForSwipes_() {
        var _this3 = this;
        var gestures = Gestures.get(this.pageElement_, true, false);
        gestures.onGesture(SwipeXRecognizer, function() {
          var _this3$analyticsEvent;
          _this3.analyticsEvent_(AnalyticsEvents.AD_SWIPED, (_this3$analyticsEvent = {}, _this3$analyticsEvent[AnalyticsVars.AD_SWIPED] = Date.now(), _this3$analyticsEvent));
          gestures.cleanup();
        });
      }
    }, {
      key: "getAdFrame_",
      value: function getAdFrame_() {
        if (this.adFrame_) {
          return this.adFrame_;
        }
        return this.adFrame_ = elementByTag(devAssert(this.pageElement_), "iframe");
      }
    }, {
      key: "onAdLoaded_",
      value: function onAdLoaded_() {
        var _this$analyticsEvent_2;
        this.pageElement_.getImpl().then(function(impl) {
          return impl.delegateVideoAutoplay();
        });
        this.pageElement_.removeAttribute(PageAttributes.LOADING);
        this.analyticsEvent_(AnalyticsEvents.AD_LOADED, (_this$analyticsEvent_2 = {}, _this$analyticsEvent_2[AnalyticsVars.AD_LOADED] = Date.now(), _this$analyticsEvent_2));
        if (this.getAdFrame_() && !this.is3pAdFrame_) {
          this.adDoc_ = getFrameDoc(this.adFrame_);
        }
        this.loaded_ = true;
        this.loadCallbacks_.forEach(function(cb) {
          return cb();
        });
      }
    }, {
      key: "createCtaLayer_",
      value: function createCtaLayer_(uiMetadata) {
        var _this4 = this;
        return createCta(this.doc_, devAssert(this.buttonFitter_), dev().assertElement(this.pageElement_), uiMetadata).then(function(anchor) {
          if (anchor) {
            _this4.ctaAnchor_ = anchor;
            anchor.addEventListener("click", function() {
              var _vars;
              var vars = (_vars = {}, _vars[AnalyticsVars.AD_CLICKED] = Date.now(), _vars);
              _this4.analyticsEvent_(AnalyticsEvents.AD_CLICKED, vars);
            });
            return true;
          }
          return false;
        });
      }
    }, {
      key: "readAmpAdExit_",
      value: function readAmpAdExit_() {
        var ampAdExit = elementByTag(dev().assertElement(this.adDoc_.body), "amp-ad-exit");
        if (ampAdExit) {
          try {
            var _ref;
            var children = ampAdExit.children;
            userAssert(children.length == 1, "The tag should contain exactly one <script> child.");
            var child = children[0];
            userAssert(isJsonScriptTag(child), 'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
            var config = assertConfig(parseJson(child.textContent));
            var target = config["targets"] && Object.keys(config["targets"]) && config["targets"][Object.keys(config["targets"])[0]];
            var finalUrl = target && target["finalUrl"];
            return target ? (_ref = {}, _ref[A4AVarNames.CTA_URL] = finalUrl, _ref) : {};
          } catch (e) {
            dev().error(TAG5, e);
            return {};
          }
        }
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        if (!this.adChoicesIcon_) {
          return;
        }
        this.adChoicesIcon_.classList.toggle(DESKTOP_FULLBLEED_CLASS, uiState === UIType.DESKTOP_FULLBLEED);
      }
    }, {
      key: "analyticsEvent_",
      value: function analyticsEvent_(eventType, vars) {
        var _this5 = this;
        this.analytics_.then(function(analytics) {
          return analytics.fireEvent(_this5.pageElement_, _this5.index_, eventType, vars);
        });
      }
    }]);
    return StoryAdPage2;
  }();

  // extensions/amp-story-auto-ads/0.1/story-ad-page-manager.js
  function _classCallCheck15(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties14(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass14(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties14(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties14(Constructor, staticProps);
    return Constructor;
  }
  var TAG6 = "amp-story-auto-ads:page-manager";
  var InsertionState = {
    DELAYED: 0,
    FAILURE: 1,
    SUCCESS: 2
  };
  var NEXT_PAGE_NO_AD_ATTR = "next-page-no-ad";
  var StoryAdPageManager = /* @__PURE__ */ function() {
    function StoryAdPageManager2(ampStory, config) {
      _classCallCheck15(this, StoryAdPageManager2);
      this.ampStory_ = ampStory;
      this.config_ = config;
      this.ampdoc_ = ampStory.getAmpDoc();
      this.analytics_ = getServicePromiseForDoc(this.ampdoc_, STORY_AD_ANALYTICS);
      this.localizationService_ = new StoryAdLocalization(this.ampStory_.element);
      this.buttonFitter_ = new ButtonTextFitter(this.ampdoc_);
      this.pages_ = {};
      this.storeService_ = getStoreService(this.ampdoc_.win);
      this.adsConsumed_ = 0;
      this.createdPageIds_ = [];
    }
    _createClass14(StoryAdPageManager2, [{
      key: "hasUnusedAdPage",
      value: function hasUnusedAdPage() {
        return this.adsConsumed_ < this.createdPageIds_.length;
      }
    }, {
      key: "getUnusedAdPage",
      value: function getUnusedAdPage() {
        var pageId = this.createdPageIds_[this.adsConsumed_];
        devAssert(pageId, TAG6 + " all created ads consumed.");
        return this.pages_[pageId];
      }
    }, {
      key: "discardCurrentAd",
      value: function discardCurrentAd() {
        var _this$analyticsEvent_;
        this.analyticsEvent_(AnalyticsEvents.AD_DISCARDED, (_this$analyticsEvent_ = {}, _this$analyticsEvent_[AnalyticsVars.AD_INDEX] = this.adsConsumed_, _this$analyticsEvent_[AnalyticsVars.AD_DISCARDED] = Date.now(), _this$analyticsEvent_));
        this.adsConsumed_++;
      }
    }, {
      key: "numberOfAdsCreated",
      value: function numberOfAdsCreated() {
        return this.createdPageIds_.length;
      }
    }, {
      key: "createAdPage",
      value: function createAdPage() {
        var _this = this;
        var index = this.createdPageIds_.length + 1;
        var page = new StoryAdPage(this.ampdoc_, this.config_, index, this.localizationService_, devAssert(this.buttonFitter_), devAssert(this.storeService_));
        var pageElement = page.build();
        var pageId = page.getId();
        this.pages_[pageId] = page;
        this.createdPageIds_.push(pageId);
        this.ampStory_.element.appendChild(pageElement);
        pageElement.getImpl().then(function(impl) {
          _this.ampStory_.addPage(impl);
        });
        return page;
      }
    }, {
      key: "hasId",
      value: function hasId(pageId) {
        return !!this.pages_[pageId];
      }
    }, {
      key: "getAdPageById",
      value: function getAdPageById(pageId) {
        return this.pages_[pageId];
      }
    }, {
      key: "getIndexById",
      value: function getIndexById(pageId) {
        return findIndex(this.createdPageIds_, function(id) {
          return id === pageId;
        }) + 1;
      }
    }, {
      key: "maybeInsertPageAfter",
      value: function maybeInsertPageAfter(pageBeforeAdId, nextAdPage) {
        var _this2 = this;
        var pageBeforeAd = this.ampStory_.getPageById(pageBeforeAdId);
        var pageAfterAd = this.ampStory_.getNextPage(pageBeforeAd);
        if (!pageAfterAd) {
          return Promise.resolve(InsertionState.DELAYED);
        }
        if (this.isDesktopView_()) {
          pageBeforeAdId = pageAfterAd.element.id;
          pageBeforeAd = pageAfterAd;
          pageAfterAd = this.ampStory_.getNextPage(pageAfterAd);
        }
        if (!pageAfterAd) {
          return Promise.resolve(InsertionState.DELAYED);
        }
        if (this.nextPageNoAd_(pageBeforeAd) || pageBeforeAd.isAd() || pageAfterAd.isAd()) {
          return Promise.resolve(InsertionState.DELAYED);
        }
        return nextAdPage.maybeCreateCta().then(function(ctaCreated) {
          if (!ctaCreated) {
            _this2.discardCurrentAd();
            return InsertionState.FAILURE;
          }
          return _this2.insertIntoParentStory_(nextAdPage, pageBeforeAdId);
        });
      }
    }, {
      key: "insertIntoParentStory_",
      value: function insertIntoParentStory_(nextAdPage, pageBeforeAdId) {
        var nextAdPageId = nextAdPage.getId();
        this.ampStory_.insertPage(pageBeforeAdId, nextAdPageId);
        var adIndex = this.getIndexById(nextAdPageId);
        var pageNumber = this.ampStory_.getPageIndexById(pageBeforeAdId);
        this.analytics_.then(function(analytics) {
          return analytics.setVar(adIndex, AnalyticsVars.POSITION, pageNumber + 1);
        });
        this.currentAdInserted_();
        return InsertionState.SUCCESS;
      }
    }, {
      key: "currentAdInserted_",
      value: function currentAdInserted_() {
        var _this$analyticsEvent_2;
        this.analyticsEvent_(AnalyticsEvents.AD_INSERTED, (_this$analyticsEvent_2 = {}, _this$analyticsEvent_2[AnalyticsVars.AD_INDEX] = this.adsConsumed_, _this$analyticsEvent_2[AnalyticsVars.AD_INSERTED] = Date.now(), _this$analyticsEvent_2));
        this.adsConsumed_++;
      }
    }, {
      key: "isDesktopView_",
      value: function isDesktopView_() {
        return !!this.storeService_.get(StateProperty.DESKTOP_STATE);
      }
    }, {
      key: "nextPageNoAd_",
      value: function nextPageNoAd_(page) {
        return page.element.hasAttribute(NEXT_PAGE_NO_AD_ATTR);
      }
    }, {
      key: "analyticsEvent_",
      value: function analyticsEvent_(eventType, vars) {
        var _this3 = this;
        this.analytics_.then(function(analytics) {
          return analytics.fireEvent(_this3.ampStory_.element, vars["adIndex"], eventType, vars);
        });
      }
    }]);
    return StoryAdPageManager2;
  }();

  // build/amp-story-auto-ads-ad-badge-0.1.css.js
  var CSS5 = `.i-amphtml-ad-overlay-container{-ms-flex-align:center!important;align-items:center!important;display:-ms-flexbox!important;display:flex!important;height:48px!important;left:0!important;-ms-flex-pack:center!important;justify-content:center!important;pointer-events:none!important;position:absolute!important;top:0!important;width:48px!important;z-index:100001!important}.i-amphtml-ad-overlay-container[dir=rtl]{left:auto!important;right:0!important}.i-amphtml-ad-overlay-container[desktop-panels]{left:calc(50vw - 22.5vh)!important;top:12.5vh!important}.i-amphtml-story-ad-badge{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='39' height='31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23a)' fill='%23fff'%3E%3Cpath d='M17.367 19.363h-4.623L11.865 22H9.062l4.763-12.797h2.444L21.059 22h-2.804l-.888-2.637zm-3.91-2.136h3.198l-1.608-4.79-1.59 4.79zm8.734-.052c0-1.483.332-2.663.994-3.542.668-.88 1.579-1.318 2.733-1.318.926 0 1.69.345 2.294 1.037V8.5h2.549V22h-2.294l-.123-1.01c-.633.79-1.448 1.186-2.444 1.186-1.119 0-2.018-.44-2.698-1.319-.674-.884-1.01-2.112-1.01-3.682zm2.54.184c0 .891.156 1.574.466 2.048.31.475.762.712 1.354.712.785 0 1.339-.33 1.66-.993v-3.753c-.316-.662-.863-.993-1.643-.993-1.224 0-1.837.993-1.837 2.98z'/%3E%3Cpath d='m17.367 19.363.119-.04-.029-.085h-.09v.125zm-4.623 0v-.125h-.09l-.028.086.118.04zM11.865 22v.125h.09l.029-.085-.119-.04zm-2.803 0-.118-.044-.062.169h.18V22zm4.763-12.797v-.125h-.087l-.03.082.117.043zm2.444 0 .117-.044-.03-.08h-.087v.124zM21.059 22v.125h.18l-.063-.169-.117.044zm-2.804 0-.119.04.03.085h.089V22zm-4.799-4.773-.119-.039-.054.165h.173v-.126zm3.2 0v.125h.173l-.055-.164-.119.04zm-1.61-4.79.12-.04-.12-.354-.118.355.119.04zm2.321 6.801h-4.623v.25h4.623v-.25zm-4.741.086-.88 2.636.238.08.879-2.637-.237-.08zm-.76 2.551H9.061v.25h2.803v-.25zm-2.687.169 4.763-12.797-.234-.087-4.764 12.796.235.088zm4.646-12.716h2.444v-.25h-2.444v.25zm2.326-.081 4.79 12.797.235-.088-4.79-12.797-.235.088zm4.908 12.628h-2.804v.25h2.804v-.25zm-2.686.085-.887-2.637-.237.08.887 2.637.237-.08zm-4.917-4.608h3.2v-.25h-3.2v.25zm3.318-.164-1.609-4.79-.237.08 1.609 4.79.237-.08zm-1.846-4.79-1.59 4.79.237.079 1.59-4.79-.237-.079zm8.257 1.235-.1-.076.1.076zm5.027-.281-.094.082.219.25v-.332h-.125zm0-4.852v-.125h-.125V8.5h.125zm2.549 0h.125v-.125h-.125V8.5zm0 13.5v.125h.125V22h-.125zm-2.294 0-.124.015.013.11h.11V22zm-.123-1.01.124-.016-.036-.295-.186.232.098.078zm-5.142-.133-.1.076h.001l.1-.076zm5.01-1.731.112.055.013-.026v-.029h-.125zm0-3.753h.125v-.028l-.012-.026-.113.054zm-5.896 1.802c0-1.465.328-2.616.968-3.467l-.2-.15c-.683.907-1.018 2.117-1.018 3.617h.25zm.968-3.467c.643-.846 1.517-1.268 2.634-1.268v-.25c-1.191 0-2.14.456-2.833 1.367l.2.151zm2.634-1.268c.89 0 1.62.33 2.2.994l.188-.165c-.627-.719-1.427-1.08-2.388-1.08v.25zm2.419.912V8.5h-.25v4.852h.25zm-.125-4.727h2.549v-.25h-2.55v.25zm2.424-.125V22h.25V8.5h-.25zm.125 13.375h-2.294v.25h2.294v-.25zm-2.17.11-.123-1.01-.248.03.123 1.01.248-.03zm-.345-1.074c-.61.762-1.388 1.14-2.346 1.14v.25c1.035 0 1.885-.414 2.541-1.234l-.195-.156zm-2.346 1.14c-1.08 0-1.943-.422-2.599-1.27l-.198.153c.704.91 1.64 1.367 2.797 1.367v-.25zm-2.598-1.27c-.652-.855-.986-2.052-.986-3.606h-.25c0 1.587.34 2.844 1.037 3.758l.199-.151zm1.304-3.422c0 .903.157 1.613.487 2.117l.209-.137c-.292-.446-.446-1.1-.446-1.98h-.25zm.487 2.117c.334.511.826.768 1.458.768v-.25c-.552 0-.963-.218-1.25-.655l-.208.137zm1.458.768c.41 0 .768-.087 1.068-.266.3-.18.535-.448.705-.797l-.225-.11c-.151.313-.355.541-.608.693-.254.151-.565.23-.94.23v.25zm1.786-1.118v-3.753h-.25v3.753h.25zm-.012-3.807a1.817 1.817 0 0 0-.697-.798c-.297-.18-.652-.266-1.06-.266v.25c.372 0 .68.079.931.23.25.151.45.38.6.692l.226-.108zm-1.757-1.064c-.653 0-1.154.268-1.484.804-.324.526-.478 1.298-.478 2.3h.25c0-.984.153-1.701.441-2.169.282-.457.7-.685 1.271-.685v-.25z'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='a' x='.882' y='.375' width='38.004' height='29.926' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")!important;background-position:50%!important;height:24px!important;margin:0!important;opacity:0!important;padding:0!important;width:24px!important;visibility:hidden!important}[dir=rtl] .i-amphtml-story-ad-badge{margin-left:0px!important;margin-right:16px!important}[ad-showing][desktop-panels] .i-amphtml-story-ad-badge{transition:opacity 0.1s linear 0.3s}[ad-showing] .i-amphtml-story-ad-badge{visibility:visible!important;opacity:1!important}
/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-ad-badge.css*/`;

  // src/experiments/story-ad-placements.js
  var StoryAdPlacements = {
    ID: "story-ad-placements",
    CONTROL: "31060567",
    PREDETERMINED_EIGHT: "31060568",
    PREDETERMINED_TEN: "31060817",
    PREDETERMINED_TWELVE: "31060569"
  };
  function divertStoryAdPlacements(win) {
    var experimentInfo = {
      experimentId: StoryAdPlacements.ID,
      isTrafficEligible: function isTrafficEligible() {
        return true;
      },
      branches: [StoryAdPlacements.CONTROL, StoryAdPlacements.PREDETERMINED_EIGHT, StoryAdPlacements.PREDETERMINED_TEN, StoryAdPlacements.PREDETERMINED_TWELVE]
    };
    randomlySelectUnsetExperiments(win, [experimentInfo]);
  }

  // extensions/amp-story-auto-ads/0.1/algorithm-count-pages.js
  function _classCallCheck16(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties15(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass15(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties15(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties15(Constructor, staticProps);
    return Constructor;
  }
  var INTERVAL = 7;
  var CountPagesAlgorithm = /* @__PURE__ */ function() {
    function CountPagesAlgorithm2(storeService, pageManager) {
      _classCallCheck16(this, CountPagesAlgorithm2);
      this.storeService_ = storeService;
      this.pageManager_ = pageManager;
      this.uniquePageIds_ = map();
      this.newPagesSinceLastAd_ = 1;
      this.pendingAdView_ = false;
      this.tryingToInsert_ = false;
    }
    _createClass15(CountPagesAlgorithm2, [{
      key: "isStoryEligible",
      value: function isStoryEligible() {
        var numPages = this.storeService_.get(StateProperty.PAGE_IDS).length;
        return numPages > INTERVAL;
      }
    }, {
      key: "initializePages",
      value: function initializePages() {
        return [this.pageManager_.createAdPage()];
      }
    }, {
      key: "onPageChange",
      value: function onPageChange(pageId) {
        if (!hasOwn(this.uniquePageIds_, pageId)) {
          this.uniquePageIds_[pageId] = true;
          this.newPagesSinceLastAd_++;
        }
        if (this.pendingAdView_ || this.tryingToInsert_ || !this.readyToPlaceAd_() || !this.pageManager_.hasUnusedAdPage()) {
          return;
        }
        this.tryingToInsert_ = true;
        this.tryToPlaceAdAfterPage_(pageId);
      }
    }, {
      key: "onNewAdView",
      value: function onNewAdView(pageIndex) {
        this.pendingAdView_ = false;
        this.newPagesSinceLastAd_ = 0;
        if (this.shouldCreateNextAd_(pageIndex)) {
          this.pageManager_.createAdPage();
        }
      }
    }, {
      key: "shouldCreateNextAd_",
      value: function shouldCreateNextAd_(pageIndex) {
        var numPages = this.storeService_.get(StateProperty.PAGE_IDS).length;
        return numPages - pageIndex > INTERVAL;
      }
    }, {
      key: "readyToPlaceAd_",
      value: function readyToPlaceAd_() {
        return this.newPagesSinceLastAd_ >= INTERVAL;
      }
    }, {
      key: "tryToPlaceAdAfterPage_",
      value: function tryToPlaceAdAfterPage_(pageBeforeAdId) {
        var _this = this;
        var nextAdPage = this.pageManager_.getUnusedAdPage();
        if (!nextAdPage.isLoaded() && nextAdPage.hasTimedOut()) {
          this.pageManager_.discardCurrentAd();
          return;
        }
        if (!nextAdPage.isLoaded()) {
          return;
        }
        this.pageManager_.maybeInsertPageAfter(pageBeforeAdId, nextAdPage).then(function(insertionState) {
          _this.tryingToInsert_ = false;
          if (insertionState === InsertionState.SUCCESS) {
            _this.pendingAdView_ = true;
          }
        });
      }
    }]);
    return CountPagesAlgorithm2;
  }();

  // extensions/amp-story-auto-ads/0.1/algorithm-predetermined.js
  function _classCallCheck17(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties16(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass16(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties16(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties16(Constructor, staticProps);
    return Constructor;
  }
  var BEGINNING_OF_STORY_BUFFER = 3;
  var END_OF_STORY_BUFFER = 1;
  var MAX_ADS_PER_STORY = 4;
  function getAdPositions(storyLength, numberOfAds) {
    if (!numberOfAds) {
      return [];
    }
    var firstPosition = Math.ceil(storyLength / (numberOfAds + 1));
    var pagesLeft = storyLength - firstPosition;
    var positions = [firstPosition];
    var interval = Math.ceil(pagesLeft / numberOfAds);
    for (var i = 1; i < numberOfAds; i++) {
      var position = firstPosition + interval * i;
      positions.push(position);
    }
    return positions;
  }
  function getNumberOfAds(pageCount, targetInterval) {
    var fullSegments = Math.floor(pageCount / targetInterval);
    var addExtraAd = Math.random() < pageCount % targetInterval / targetInterval;
    var remainderAds = addExtraAd ? 1 : 0;
    return Math.min(fullSegments + remainderAds, MAX_ADS_PER_STORY);
  }
  var PredeterminedPositionAlgorithm = /* @__PURE__ */ function() {
    function PredeterminedPositionAlgorithm2(storeService, pageManager, placementsExpBranch) {
      _classCallCheck17(this, PredeterminedPositionAlgorithm2);
      this.pageManager_ = pageManager;
      this.targetInterval_ = this.getIntervalFromExpId_(placementsExpBranch);
      this.storyPageIds_ = storeService.get(StateProperty.PAGE_IDS);
      this.adPositions_ = [];
      this.pagesCreated_ = 0;
    }
    _createClass16(PredeterminedPositionAlgorithm2, [{
      key: "isStoryEligible",
      value: function isStoryEligible() {
        var storyLength = this.storyPageIds_.length;
        return storyLength > BEGINNING_OF_STORY_BUFFER + END_OF_STORY_BUFFER;
      }
    }, {
      key: "initializePages",
      value: function initializePages() {
        var storyLength = this.storyPageIds_.length;
        var numberOfAds = getNumberOfAds(storyLength, this.targetInterval_);
        this.adPositions_ = getAdPositions(storyLength, numberOfAds);
        if (numberOfAds) {
          return [this.createNextPage_()];
        }
        return [];
      }
    }, {
      key: "createNextPage_",
      value: function createNextPage_() {
        var _this = this;
        var position = this.adPositions_[this.pagesCreated_];
        var adPage = this.pageManager_.createAdPage();
        adPage.registerLoadCallback(function() {
          _this.pageManager_.maybeInsertPageAfter(_this.storyPageIds_[position - 1], adPage);
        });
        this.pagesCreated_++;
        return adPage;
      }
    }, {
      key: "onPageChange",
      value: function onPageChange(unusedPageId) {
      }
    }, {
      key: "onNewAdView",
      value: function onNewAdView(unusedPageIndex) {
        if (this.pagesCreated_ < this.adPositions_.length) {
          this.createNextPage_();
        }
      }
    }, {
      key: "getIntervalFromExpId_",
      value: function getIntervalFromExpId_(branchId) {
        if (branchId === StoryAdPlacements.PREDETERMINED_EIGHT) {
          return 8;
        } else if (branchId === StoryAdPlacements.PREDETERMINED_TEN) {
          return 10;
        } else if (branchId === StoryAdPlacements.PREDETERMINED_TWELVE) {
          return 12;
        }
      }
    }]);
    return PredeterminedPositionAlgorithm2;
  }();

  // extensions/amp-story-auto-ads/0.1/algorithm-utils.js
  function getPlacementAlgo(win, storeService, pageManager) {
    var placementsExpBranch = getExperimentBranch(win, StoryAdPlacements.ID);
    if (placementsExpBranch && placementsExpBranch !== StoryAdPlacements.CONTROL) {
      return new PredeterminedPositionAlgorithm(storeService, pageManager, placementsExpBranch);
    }
    return new CountPagesAlgorithm(storeService, pageManager);
  }

  // build/amp-story-auto-ads-progress-bar-0.1.css.js
  var CSS6 = ".i-amphtml-story-ad-progress-background{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:2px!important;left:4px!important;margin:4px auto!important;opacity:0!important;position:absolute!important;width:calc(100% - 8px)!important;visibility:hidden!important;z-index:100001!important}.i-amphtml-story-ad-progress-background[ad-showing]{opacity:1!important;visibility:visible!important}.i-amphtml-story-ad-progress-background[desktop-panels]{left:calc(50vw - 22.5vh + 4px)!important;top:12.5vh!important;width:calc(45vh - 8px)!important;transition:opacity 0.1s linear 0.3s}.i-amphtml-story-ad-progress-bar{background:#fff!important;height:2px!important}[ad-showing] .i-amphtml-story-ad-progress-bar{animation:grow linear}[paused] .i-amphtml-story-ad-progress-bar{animation-play-state:paused}@keyframes grow{0%{width:0%}to{width:100%}}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-progress-bar.css*/";

  // build/amp-story-auto-ads-shared-0.1.css.js
  var CSS7 = ".i-amphtml-story-ad-link-root{all:initial!important;color:initial!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important}\n/*# sourceURL=/extensions/amp-story-auto-ads/0.1/amp-story-auto-ads-shared.css*/";

  // extensions/amp-story-auto-ads/0.1/amp-story-auto-ads.js
  function _classCallCheck18(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties17(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass17(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties17(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties17(Constructor, staticProps);
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
  var TAG7 = "amp-story-auto-ads";
  var AD_TAG = "amp-ad";
  var MUSTACHE_TAG = "amp-mustache";
  var Attributes = {
    AD_SHOWING: "ad-showing",
    DESKTOP_PANELS: "desktop-panels",
    DIR: "dir",
    PAUSED: "paused"
  };
  var AmpStoryAutoAds = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpStoryAutoAds2, _AMP$BaseElement);
    var _super = _createSuper2(AmpStoryAutoAds2);
    function AmpStoryAutoAds2(element) {
      var _this;
      _classCallCheck18(this, AmpStoryAutoAds2);
      _this = _super.call(this, element);
      _this.doc_ = _this.win.document;
      _this.ampStory_ = null;
      _this.visibleAdPage_ = null;
      _this.config_ = dict();
      _this.analytics_ = null;
      _this.adBadgeContainer_ = null;
      _this.progressBarBackground_ = null;
      _this.storeService_ = null;
      _this.placementAlgorithm_ = null;
      _this.adPageManager_ = null;
      return _this;
    }
    _createClass17(AmpStoryAutoAds2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        return Services.storyStoreServiceForOrNull(this.win).then(function(storeService) {
          devAssert(storeService, "Could not retrieve AmpStoryStoreService");
          _this2.storeService_ = storeService;
          if (!_this2.isAutomaticAdInsertionAllowed_()) {
            return;
          }
          var ampStoryElement = _this2.element.parentElement;
          userAssert(ampStoryElement.tagName === "AMP-STORY", "<" + TAG7 + "> should be child of <amp-story>");
          var ampdoc = _this2.getAmpDoc();
          var extensionService = Services.extensionsFor(_this2.win);
          extensionService.installExtensionForDoc(ampdoc, AD_TAG);
          return ampStoryElement.getImpl().then(function(impl) {
            _this2.ampStory_ = impl;
          });
        });
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported() {
        return true;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this3 = this;
        if (!this.isAutomaticAdInsertionAllowed_()) {
          return resolvedPromise();
        }
        return this.ampStory_.signals().whenSignal(CommonSignals.INI_LOAD).then(function() {
          _this3.handleConfig_();
          _this3.adPageManager_ = new StoryAdPageManager(_this3.ampStory_, _this3.config_);
          divertStoryAdPlacements(_this3.win);
          divertStoryAdAutoAdvance(_this3.win);
          _this3.placementAlgorithm_ = getPlacementAlgo(_this3.win, _this3.storeService_, _this3.adPageManager_);
          if (!_this3.placementAlgorithm_.isStoryEligible()) {
            return;
          }
          _this3.analytics_ = getServicePromiseForDoc(_this3.element, STORY_AD_ANALYTICS);
          _this3.createAdOverlay_();
          _this3.maybeCreateProgressBar_();
          _this3.initializeListeners_();
          _this3.initializePages_();
        });
      }
    }, {
      key: "forcePlaceAdAfterPage_",
      value: function forcePlaceAdAfterPage_(adPage) {
        var _this4 = this;
        var pageBeforeAdId = this.storeService_.get(StateProperty.CURRENT_PAGE_ID);
        adPage.registerLoadCallback(function() {
          return _this4.adPageManager_.maybeInsertPageAfter(pageBeforeAdId, adPage).then(function() {
            return _this4.navigateToFirstAdPage_(adPage);
          });
        });
      }
    }, {
      key: "navigateToFirstAdPage_",
      value: function navigateToFirstAdPage_(adPage) {
        var firstAdPageElement = adPage.getPageElement();
        firstAdPageElement.setAttribute("distance", "1");
        var payload = dict({
          "targetPageId": "i-amphtml-ad-page-1",
          "direction": "next"
        });
        var eventInit = {
          bubbles: true
        };
        dispatch(this.win, firstAdPageElement, EventType.SWITCH_PAGE, payload, eventInit);
      }
    }, {
      key: "handleConfig_",
      value: function handleConfig_() {
        this.config_ = new StoryAdConfig(this.element).getConfig();
        if (this.config_["type"] === "custom") {
          Services.extensionsFor(this.win).installExtensionForDoc(this.element.getAmpDoc(), MUSTACHE_TAG, "latest");
        }
      }
    }, {
      key: "isAutomaticAdInsertionAllowed_",
      value: function isAutomaticAdInsertionAllowed_() {
        return !!this.storeService_.get(StateProperty.CAN_INSERT_AUTOMATIC_AD);
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this5 = this;
        this.storeService_.subscribe(StateProperty.AD_STATE, function(isAd) {
          _this5.onAdStateUpdate_(isAd);
        });
        this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
          _this5.onRtlStateUpdate_(rtlState);
        }, true);
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this5.onUIStateUpdate_(uiState);
        }, true);
        this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(pageId) {
          var pageIndex = _this5.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
          _this5.handleActivePageChange_(dev().assertNumber(pageIndex), dev().assertString(pageId));
        });
      }
    }, {
      key: "onAdStateUpdate_",
      value: function onAdStateUpdate_(isAd) {
        var _this6 = this;
        this.mutateElement(function() {
          if (isAd) {
            _this6.adBadgeContainer_.setAttribute(Attributes.AD_SHOWING, "");
            _this6.progressBarBackground_ && _this6.progressBarBackground_.setAttribute(Attributes.AD_SHOWING, "");
          } else {
            _this6.adBadgeContainer_.removeAttribute(Attributes.AD_SHOWING);
            _this6.progressBarBackground_ && _this6.progressBarBackground_.removeAttribute(Attributes.AD_SHOWING);
          }
        });
      }
    }, {
      key: "onRtlStateUpdate_",
      value: function onRtlStateUpdate_(rtlState) {
        var _this7 = this;
        this.mutateElement(function() {
          rtlState ? _this7.adBadgeContainer_.setAttribute(Attributes.DIR, "rtl") : _this7.adBadgeContainer_.removeAttribute(Attributes.DIR);
        });
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        var _this8 = this;
        this.mutateElement(function() {
          var _this8$progressBarBac;
          var DESKTOP_PANELS = Attributes.DESKTOP_PANELS;
          _this8.adBadgeContainer_.removeAttribute(DESKTOP_PANELS);
          (_this8$progressBarBac = _this8.progressBarBackground_) == null ? void 0 : _this8$progressBarBac.removeAttribute(DESKTOP_PANELS);
          if (uiState === UIType.DESKTOP_PANELS) {
            var _this8$progressBarBac2;
            _this8.adBadgeContainer_.setAttribute(DESKTOP_PANELS, "");
            (_this8$progressBarBac2 = _this8.progressBarBackground_) == null ? void 0 : _this8$progressBarBac2.setAttribute(DESKTOP_PANELS, "");
          }
        });
      }
    }, {
      key: "createAdOverlay_",
      value: function createAdOverlay_() {
        var root = this.doc_.createElement("div");
        root.className = "i-amphtml-ad-overlay-host";
        this.adBadgeContainer_ = this.doc_.createElement("aside");
        this.adBadgeContainer_.className = "i-amphtml-ad-overlay-container";
        var badge = this.doc_.createElement("div");
        badge.className = "i-amphtml-story-ad-badge";
        this.adBadgeContainer_.appendChild(badge);
        createShadowRootWithStyle(root, this.adBadgeContainer_, CSS5);
        this.ampStory_.element.appendChild(root);
      }
    }, {
      key: "maybeCreateProgressBar_",
      value: function maybeCreateProgressBar_() {
        var autoAdvanceExpBranch = getExperimentBranch(this.win, StoryAdAutoAdvance.ID);
        var storyNextUpParam = Services.viewerForDoc(this.element).getParam("storyNextUp");
        if (autoAdvanceExpBranch && autoAdvanceExpBranch !== StoryAdAutoAdvance.CONTROL) {
          this.createProgressBar_(AdvanceExpToTime[autoAdvanceExpBranch]);
        } else if (storyNextUpParam) {
          this.createProgressBar_(storyNextUpParam);
        }
      }
    }, {
      key: "createProgressBar_",
      value: function createProgressBar_(time) {
        var _this9 = this;
        var progressBar = this.doc_.createElement("div");
        progressBar.className = "i-amphtml-story-ad-progress-bar";
        setStyle(progressBar, "animationDuration", time);
        this.progressBarBackground_ = this.doc_.createElement("div");
        this.progressBarBackground_.className = "i-amphtml-story-ad-progress-background";
        var host = this.doc_.createElement("div");
        host.className = "i-amphtml-story-ad-progress-bar-host";
        this.progressBarBackground_.appendChild(progressBar);
        createShadowRootWithStyle(host, this.progressBarBackground_, CSS6);
        this.ampStory_.element.appendChild(host);
        this.storeService_.subscribe(StateProperty.PAUSED_STATE, function(isPaused) {
          _this9.onPauseStateUpdate_(isPaused);
        });
      }
    }, {
      key: "onPauseStateUpdate_",
      value: function onPauseStateUpdate_(isPaused) {
        var adShowing = this.storeService_.get(StateProperty.AD_STATE);
        if (!adShowing) {
          return;
        }
        toggleAttribute(this.progressBarBackground_, Attributes.PAUSED, isPaused);
      }
    }, {
      key: "initializePages_",
      value: function initializePages_() {
        var pages = this.placementAlgorithm_.initializePages();
        this.maybeForceAdPlacement_(devAssert(pages[0]));
      }
    }, {
      key: "maybeForceAdPlacement_",
      value: function maybeForceAdPlacement_(adPage) {
        if (this.element.hasAttribute("development") && this.config_["type"] === "fake") {
          this.forcePlaceAdAfterPage_(adPage);
        }
      }
    }, {
      key: "handleActivePageChange_",
      value: function handleActivePageChange_(pageIndex, pageId) {
        if (this.adPageManager_.numberOfAdsCreated() === 0) {
          return;
        }
        this.placementAlgorithm_.onPageChange(pageId);
        if (this.visibleAdPage_) {
          this.transitionFromAdShowing_();
        }
        if (this.adPageManager_.hasId(pageId)) {
          this.transitionToAdShowing_(pageIndex, pageId);
        }
      }
    }, {
      key: "transitionFromAdShowing_",
      value: function transitionFromAdShowing_() {
        var _this$analyticsEvent_;
        var adPageId = this.visibleAdPage_.getId();
        var adIndex = this.adPageManager_.getIndexById(adPageId);
        this.removeVisibleAttribute_();
        this.analyticsEvent_(AnalyticsEvents.AD_EXITED, (_this$analyticsEvent_ = {}, _this$analyticsEvent_[AnalyticsVars.AD_EXITED] = Date.now(), _this$analyticsEvent_[AnalyticsVars.AD_INDEX] = adIndex, _this$analyticsEvent_));
      }
    }, {
      key: "transitionToAdShowing_",
      value: function transitionToAdShowing_(pageIndex, adPageId) {
        var _this$analyticsEvent_2;
        var adPage = this.adPageManager_.getAdPageById(adPageId);
        var adIndex = this.adPageManager_.getIndexById(adPageId);
        if (!adPage.hasBeenViewed()) {
          this.placementAlgorithm_.onNewAdView(pageIndex);
        }
        this.setVisibleAttribute_(adPage);
        this.analyticsEvent_(AnalyticsEvents.AD_VIEWED, (_this$analyticsEvent_2 = {}, _this$analyticsEvent_2[AnalyticsVars.AD_VIEWED] = Date.now(), _this$analyticsEvent_2[AnalyticsVars.AD_INDEX] = adIndex, _this$analyticsEvent_2));
      }
    }, {
      key: "setVisibleAttribute_",
      value: function setVisibleAttribute_(adPage) {
        var _this10 = this;
        this.mutateElement(function() {
          adPage.toggleVisibility();
          _this10.visibleAdPage_ = adPage;
        });
      }
    }, {
      key: "removeVisibleAttribute_",
      value: function removeVisibleAttribute_() {
        var _this11 = this;
        this.mutateElement(function() {
          if (_this11.visibleAdPage_) {
            _this11.visibleAdPage_.toggleVisibility();
            _this11.visibleAdPage_ = null;
          }
        });
      }
    }, {
      key: "analyticsEvent_",
      value: function analyticsEvent_(eventType, vars) {
        var _this12 = this;
        this.analytics_.then(function(analytics) {
          return analytics.fireEvent(_this12.element, vars["adIndex"], eventType, vars);
        });
      }
    }]);
    return AmpStoryAutoAds2;
  }(AMP.BaseElement);
  AMP.extension("amp-story-auto-ads", "0.1", function(AMP2) {
    AMP2.registerElement("amp-story-auto-ads", AmpStoryAutoAds, CSS2 + CSS7);
    AMP2.registerServiceForDoc(STORY_AD_ANALYTICS, StoryAdAnalytics);
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
//# sourceMappingURL=amp-story-auto-ads-0.1.max.js.map
