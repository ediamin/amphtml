(self.AMP=self.AMP||[]).push({n:"amp-autocomplete",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[Object.keys(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // third_party/fuzzysearch/index.js
  var require_fuzzysearch = __commonJS({
    "third_party/fuzzysearch/index.js"(exports, module) {
      "use strict";
      function fuzzysearch2(query, text) {
        var tlen = text.length;
        var qlen = query.length;
        if (qlen > tlen) {
          return false;
        }
        if (qlen === tlen && query === text) {
          return true;
        }
        outer:
          for (var i = 0, j = 0; i < qlen; i++) {
            var qch = query.charCodeAt(i);
            while (j < tlen) {
              if (text.charCodeAt(j++) === qch) {
                continue outer;
              }
            }
            return false;
          }
        return true;
      }
      module.exports = fuzzysearch2;
    }
  });

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
  function ownProperty(obj, key) {
    if (hasOwn(obj, key)) {
      return obj[key];
    } else {
      return void 0;
    }
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
  function devAssert(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinifiedMode()) {
      return shouldBeTruthy;
    }
    devAssertDceCheck();
    return assert("", shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/constants/action-constants.js
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
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
  function once(fn) {
    var evaluated = false;
    var retValue = null;
    var callback = fn;
    return function() {
      if (!evaluated) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        retValue = callback.apply(self, args);
        evaluated = true;
        callback = null;
      }
      return retValue;
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
  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }

  // extensions/amp-autocomplete/0.1/autocomplete-binding-inline.js
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
  var TAG = "amp-autocomplete";
  var AutocompleteBindingInline = /* @__PURE__ */ function() {
    function AutocompleteBindingInline2(ampElement) {
      _classCallCheck2(this, AutocompleteBindingInline2);
      var element = ampElement.element;
      this.element_ = element;
      this.trigger_ = this.element_.getAttribute("inline");
      userAssert(this.trigger_ !== "", 'Empty value for the "inline" attr is unsupported, %s. %s', TAG, element);
      userAssert(this.trigger_ !== "", "AutocompleteBindingInline does not support an empty value in the constructor.");
      this.match_ = null;
      var delimiter = this.trigger_.replace(/([()[{*+.$^\\|?])/g, "\\$1");
      var pattern = "((" + delimiter + "|^" + delimiter + ")(\\w+)?)";
      this.regex_ = new RegExp(pattern, "gm");
    }
    _createClass(AutocompleteBindingInline2, [{
      key: "shouldAutocomplete",
      value: function shouldAutocomplete(inputEl) {
        var match = this.getClosestPriorMatch_(this.regex_, inputEl);
        this.match_ = match;
        return !!match;
      }
    }, {
      key: "getClosestPriorMatch_",
      value: function getClosestPriorMatch_(regex, inputEl) {
        if (!regex) {
          return null;
        }
        var cursor = inputEl.selectionStart, value = inputEl.value;
        var match, lastMatch;
        while ((match = regex.exec(value)) !== null) {
          if (match[0].length + ownProperty(match, "index") > cursor) {
            break;
          }
          lastMatch = match;
        }
        if (!lastMatch || lastMatch[0].length + ownProperty(lastMatch, "index") < cursor) {
          return null;
        }
        return lastMatch;
      }
    }, {
      key: "getUserInputForUpdate",
      value: function getUserInputForUpdate(unusedInputEl) {
        if (!this.match_ || !this.match_[0]) {
          return "";
        }
        return this.match_[0].slice(this.trigger_.length);
      }
    }, {
      key: "getUserInputForUpdateWithSelection",
      value: function getUserInputForUpdateWithSelection(selection, inputEl, userInput) {
        if (!this.match_) {
          return inputEl.value;
        }
        var cursor = inputEl.selectionStart;
        var startIndex = Number(ownProperty(this.match_, "index"));
        var userInputLength = userInput.length;
        if (cursor >= startIndex + userInputLength) {
          cursor = cursor - userInputLength;
        }
        tryFocus(inputEl);
        cursor = cursor + selection.length + 1;
        inputEl.setSelectionRange(cursor, cursor);
        this.match_ = null;
        var value = inputEl.value;
        var pre = value.slice(0, startIndex + this.trigger_.length);
        var post = value.slice(startIndex + this.trigger_.length + userInputLength);
        return pre + selection + " " + post;
      }
    }, {
      key: "resetInputOnWrapAround",
      value: function resetInputOnWrapAround(unusedUserInput, unusedInputEl) {
      }
    }, {
      key: "shouldSuggestFirst",
      value: function shouldSuggestFirst() {
        return this.element_.hasAttribute("suggest-first");
      }
    }, {
      key: "shouldShowOnFocus",
      value: function shouldShowOnFocus() {
        return false;
      }
    }, {
      key: "displayActiveItemInInput",
      value: function displayActiveItemInInput(unusedInputEl, unusedNewValue, unusedUserInput) {
      }
    }, {
      key: "removeSelectionHighlighting",
      value: function removeSelectionHighlighting(unusedInputEl) {
      }
    }, {
      key: "shouldPreventDefaultOnEnter",
      value: function shouldPreventDefaultOnEnter(activeElement) {
        return activeElement;
      }
    }]);
    return AutocompleteBindingInline2;
  }();

  // extensions/amp-autocomplete/0.1/autocomplete-binding-single.js
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
  var AutocompleteBindingSingle = /* @__PURE__ */ function() {
    function AutocompleteBindingSingle2(ampElement) {
      _classCallCheck3(this, AutocompleteBindingSingle2);
      var element = ampElement.element;
      this.shouldSuggestFirst_ = element.hasAttribute("suggest-first");
      var filter = element.getAttribute("filter");
      if (this.shouldSuggestFirst_ && filter !== "prefix") {
        this.shouldSuggestFirst_ = false;
        user().warn("AMP-AUTOCOMPLETE", '"suggest-first" expected "filter" type "prefix".');
      }
      this.submitOnEnter_ = element.hasAttribute("submit-on-enter");
    }
    _createClass2(AutocompleteBindingSingle2, [{
      key: "shouldAutocomplete",
      value: function shouldAutocomplete(unusedInputEl) {
        return true;
      }
    }, {
      key: "getUserInputForUpdate",
      value: function getUserInputForUpdate(inputEl) {
        return inputEl.value || "";
      }
    }, {
      key: "getUserInputForUpdateWithSelection",
      value: function getUserInputForUpdateWithSelection(selection, unusedInputEl, unusedInput) {
        return selection;
      }
    }, {
      key: "resetInputOnWrapAround",
      value: function resetInputOnWrapAround(userInput, inputEl) {
        inputEl.value = userInput;
      }
    }, {
      key: "shouldSuggestFirst",
      value: function shouldSuggestFirst() {
        return this.shouldSuggestFirst_;
      }
    }, {
      key: "shouldShowOnFocus",
      value: function shouldShowOnFocus() {
        return true;
      }
    }, {
      key: "displayActiveItemInInput",
      value: function displayActiveItemInInput(inputEl, newValue, userInput) {
        inputEl.value = newValue;
        if (this.shouldSuggestFirst_) {
          inputEl.setSelectionRange(userInput.length, newValue.length);
        }
      }
    }, {
      key: "removeSelectionHighlighting",
      value: function removeSelectionHighlighting(inputEl) {
        var inputLength = inputEl.value.length;
        inputEl.setSelectionRange(inputLength, inputLength);
      }
    }, {
      key: "shouldPreventDefaultOnEnter",
      value: function shouldPreventDefaultOnEnter(unusedActiveElement) {
        return !this.submitOnEnter_;
      }
    }]);
    return AutocompleteBindingSingle2;
  }();

  // build/amp-autocomplete-0.1.css.js
  var CSS2 = "amp-autocomplete,amp-autocomplete>input,amp-autocomplete>textarea{font-family:sans-serif}amp-autocomplete>input,amp-autocomplete>textarea{border-radius:4px;box-sizing:border-box}.i-amphtml-autocomplete-results{position:absolute;top:100%;width:calc(100% + 1rem);min-width:calc(2em + 2rem);max-height:40vh;margin-top:.5rem;margin-left:-.5rem;border-radius:4px;overflow-y:auto;overflow-x:hidden;background-color:#fff;box-shadow:0px 2px 4px 0px rgba(0,0,0,.5);z-index:10}.i-amphtml-autocomplete-results-up{top:auto;bottom:100%;margin-bottom:.5rem}.i-amphtml-autocomplete-item{position:relative;padding:.5rem 1rem;cursor:pointer}.i-amphtml-autocomplete-item:first-child{border-radius:4px 4px 0px 0px}.i-amphtml-autocomplete-item:nth-last-child(2){border-radius:0px 0px 4px 4px}.i-amphtml-autocomplete-item-active:not([data-disabled]),.i-amphtml-autocomplete-item:hover:not([data-disabled]){background-color:rgba(0,0,0,.15)}.i-amphtml-autocomplete-item[data-disabled]{color:rgba(0,0,0,.33)}\n/*# sourceURL=/extensions/amp-autocomplete/0.1/amp-autocomplete.css*/";

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

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck5(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass4(LruCache2, [{
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
  var allowedJsonBodyTypes_ = [isArray, isObject];
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
  function setupInput(win, input, init) {
    devAssert(typeof input == "string", "Only URL supported: %s", input);
    if (init.ampCors !== false) {
      input = getCorsUrl(win, input);
    }
    return input;
  }
  function setupInit(opt_init, opt_accept) {
    var init = opt_init || {};
    var creds = init.credentials;
    devAssert(creds === void 0 || creds == "include" || creds == "omit", "Only credentials=include|omit support: %s", creds);
    init.method = normalizeMethod_(init.method);
    init.headers = init.headers || dict({});
    if (opt_accept) {
      init.headers["Accept"] = opt_accept;
    }
    devAssert(init.body !== null, "fetch `body` can not be `null`");
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
  function setupJsonFetchInit(init) {
    var fetchInit = setupInit(init, "application/json");
    if (fetchInit.method == "POST" && !isFormDataWrapper(fetchInit.body)) {
      devAssert(allowedJsonBodyTypes_.some(function(test) {
        return test(fetchInit.body);
      }), "body must be of type object or array. %s", fetchInit.body);
      fetchInit.headers["Content-Type"] = fetchInit.headers["Content-Type"] || "text/plain;charset=utf-8";
      var headerContentType = fetchInit.headers["Content-Type"];
      if (headerContentType === "application/x-www-form-urlencoded") {
        fetchInit.body = serializeQueryString(fetchInit.body);
      } else {
        fetchInit.body = JSON.stringify(fetchInit.body);
      }
    }
    return fetchInit;
  }
  function normalizeMethod_(method) {
    if (method === void 0) {
      return "GET";
    }
    method = method.toUpperCase();
    devAssert(allowedMethods_.includes(method), "Only one of %s is currently allowed. Got %s", allowedMethods_.join(", "), method);
    return method;
  }

  // src/ssr-template-helper.js
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
  var SsrTemplateHelper = /* @__PURE__ */ function() {
    function SsrTemplateHelper2(sourceComponent, viewer, templates) {
      _classCallCheck6(this, SsrTemplateHelper2);
      this.viewer_ = viewer;
      this.templates_ = templates;
      this.sourceComponent_ = sourceComponent;
    }
    _createClass5(SsrTemplateHelper2, [{
      key: "isEnabled",
      value: function isEnabled() {
        var ampdoc = this.viewer_.getAmpDoc();
        if (ampdoc.isSingleDoc()) {
          var htmlElement = ampdoc.getRootNode().documentElement;
          if (htmlElement.hasAttribute("allow-viewer-render-template")) {
            return this.viewer_.hasCapability("viewerRenderTemplate");
          }
        }
        return false;
      }
    }, {
      key: "assertTrustedViewer",
      value: function assertTrustedViewer(element) {
        return this.viewer_.isTrustedViewer().then(function(trusted) {
          userAssert(trusted, "Refused to attempt SSR in untrusted viewer: ", element);
        });
      }
    }, {
      key: "ssr",
      value: function ssr(element, request, opt_templates, opt_attributes) {
        var _this = this;
        if (opt_templates === void 0) {
          opt_templates = null;
        }
        if (opt_attributes === void 0) {
          opt_attributes = {};
        }
        var mustacheTemplate;
        if (!opt_templates) {
          mustacheTemplate = this.templates_.maybeFindTemplate(element);
        }
        return this.assertTrustedViewer(element).then(function() {
          return _this.viewer_.sendMessageAwaitResponse("viewerRenderTemplate", _this.buildPayload_(request, mustacheTemplate, opt_templates, opt_attributes));
        });
      }
    }, {
      key: "applySsrOrCsrTemplate",
      value: function applySsrOrCsrTemplate(element, data) {
        var _this2 = this;
        var renderTemplatePromise;
        if (this.isEnabled()) {
          userAssert(typeof data["html"] === "string", "Server side html response must be defined");
          renderTemplatePromise = this.assertTrustedViewer(element).then(function() {
            return _this2.templates_.findAndSetHtmlForTemplate(element, data["html"]);
          });
        } else if (isArray(data)) {
          renderTemplatePromise = this.templates_.findAndRenderTemplateArray(element, data);
        } else {
          renderTemplatePromise = this.templates_.findAndRenderTemplate(element, data);
        }
        return renderTemplatePromise;
      }
    }, {
      key: "buildPayload_",
      value: function buildPayload_(request, mustacheTemplate, opt_templates, opt_attributes) {
        if (opt_attributes === void 0) {
          opt_attributes = {};
        }
        var ampComponent = dict({
          "type": this.sourceComponent_
        });
        var successTemplateKey = "successTemplate";
        var successTemplate = opt_templates && opt_templates[successTemplateKey] ? opt_templates[successTemplateKey] : mustacheTemplate;
        if (successTemplate) {
          ampComponent[successTemplateKey] = {
            "type": "amp-mustache",
            "payload": successTemplate.innerHTML
          };
        }
        var errorTemplateKey = "errorTemplate";
        var errorTemplate = opt_templates && opt_templates[errorTemplateKey] ? opt_templates[errorTemplateKey] : null;
        if (errorTemplate) {
          ampComponent[errorTemplateKey] = {
            "type": "amp-mustache",
            "payload": errorTemplate.innerHTML
          };
        }
        if (opt_attributes) {
          Object.assign(ampComponent, opt_attributes);
        }
        var data = dict({
          "originalRequest": toStructuredCloneable(request.xhrUrl, request.fetchOpt),
          "ampComponent": ampComponent
        });
        return data;
      }
    }]);
    return SsrTemplateHelper2;
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

  // src/format.js
  function isAmpFormatType(formats, doc) {
    var html = doc.documentElement;
    var isFormatType = formats.some(function(format) {
      return html.hasAttribute(format);
    });
    return isFormatType;
  }
  function isAmp4Email(doc) {
    return isAmpFormatType(["\u26A14email", "amp4email"], doc);
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

  // src/core/math/index.js
  function mod(a2, b) {
    return a2 > 0 && b > 0 ? a2 % b : (a2 % b + b) % b;
  }

  // extensions/amp-autocomplete/0.1/amp-autocomplete.js
  var import_fuzzysearch = __toModule(require_fuzzysearch());
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
  var TAG2 = "amp-autocomplete";
  var FilterType = {
    SUBSTRING: "substring",
    PREFIX: "prefix",
    TOKEN_PREFIX: "token-prefix",
    FUZZY: "fuzzy",
    CUSTOM: "custom",
    NONE: "none"
  };
  var AmpAutocomplete = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpAutocomplete2, _AMP$BaseElement);
    var _super = _createSuper(AmpAutocomplete2);
    function AmpAutocomplete2(element) {
      var _this;
      _classCallCheck7(this, AmpAutocomplete2);
      _this = _super.call(this, element);
      _this.binding_ = null;
      _this.sourceData_ = null;
      _this.inputElement_ = null;
      _this.userInput_ = "";
      _this.filter_ = "";
      _this.minChars_ = 1;
      _this.maxItems_ = null;
      _this.shouldSuggestFirst_ = false;
      _this.detectBackspace_ = false;
      _this.highlightUserEntry_ = false;
      _this.srcBase_ = "";
      _this.queryKey_ = "";
      _this.activeIndex_ = -1;
      _this.activeElement_ = null;
      _this.prefix_ = element.id ? element.id : Math.floor(Math.random() * 100);
      _this.container_ = null;
      _this.fallbackDisplayed_ = false;
      _this.initialAutocompleteAttr_ = null;
      _this.templates_ = null;
      _this.hasTemplate_ = false;
      _this.getSsrTemplateHelper = once(function() {
        return new SsrTemplateHelper(TAG2, Services.viewerForDoc(_this.element), _this.templates_);
      });
      _this.isSsr_ = false;
      _this.action_ = null;
      _this.viewport_ = null;
      _this.hasFetchedInitialData_ = false;
      _this.containerId_ = element.id ? element.id : Math.floor(Math.random() * 100) + "_AMP_content_";
      return _this;
    }
    _createClass6(AmpAutocomplete2, [{
      key: "buildCallback",
      value: function buildCallback() {
        this.templates_ = Services.templatesForDoc(this.element);
        var doc = this.element.ownerDocument;
        var isEmail = doc && isAmp4Email(doc);
        userAssert(!isEmail || doc.documentElement.hasAttribute("data-amp-autocomplete-opt-in"), "<amp-autocomplete> is not currently available in AMP4Email.");
        this.action_ = Services.actionServiceForDoc(this.element);
        this.viewport_ = Services.viewportForDoc(this.element);
        this.inputElement_ = this.getSingleInputOrTextarea_();
        var inputType = this.inputElement_.getAttribute("type");
        userAssert(!this.inputElement_.hasAttribute("type") || inputType === "text" || inputType === "search", '%s requires the "type" attribute to be "text" or "search" if present on <input>. %s', TAG2, this.element);
        this.binding_ = this.createBinding_();
        this.queryKey_ = this.element.getAttribute("query");
        this.srcBase_ = this.element.getAttribute("src");
        var jsonScript = this.element.querySelector('script[type="application/json"]');
        if (jsonScript) {
          this.sourceData_ = this.getInlineData_(jsonScript);
        } else if (!this.element.hasAttribute("src")) {
          user().warn(TAG2, 'Expected a <script type="application/json"> child or a URL specified in "src".');
        }
        this.inputElement_.setAttribute("dir", "auto");
        this.inputElement_.setAttribute("aria-autocomplete", "both");
        this.inputElement_.setAttribute("role", "textbox");
        this.inputElement_.setAttribute("aria-controls", this.containerId_);
        if (this.inputElement_.tagName === "INPUT") {
          this.element.setAttribute("role", "combobox");
          this.inputElement_.setAttribute("aria-multiline", "false");
        }
        this.element.setAttribute("aria-haspopup", "listbox");
        this.element.setAttribute("aria-expanded", "false");
        this.element.setAttribute("aria-owns", this.containerId_);
        var form = this.getFormOrNull_();
        if (form && form.hasAttribute("autocomplete")) {
          this.initialAutocompleteAttr_ = form.getAttribute("autocomplete");
        }
        this.isSsr_ = this.getSsrTemplateHelper().isEnabled();
        this.hasTemplate_ = this.templates_.hasTemplate(this.element, "template, script[template]");
        if (this.isSsr_) {
          userAssert(this.srcBase_, '%s requires data to be provided via "src" attribute for server-side rendering. %s', TAG2, this.element);
          userAssert(this.hasTemplate_, TAG2 + ' should provide a <template> or <script type="plain/text"> element.');
          userAssert(!this.element.hasAttribute("filter"), TAG2 + " does not support client-side filter when server-side render is required.");
        }
        this.filter_ = this.element.getAttribute("filter") || FilterType.NONE;
        userAssert(isEnumValue(FilterType, this.filter_), "Unexpected filter: %s. %s", this.filter_, this.element);
        this.minChars_ = this.element.hasAttribute("min-characters") ? parseInt(this.element.getAttribute("min-characters"), 10) : 1;
        if (this.element.hasAttribute("max-entries")) {
          user().warn(TAG2, '"max-items" attribute is preferred to "max-entries"');
        }
        var maxItems = this.element.getAttribute("max-items") || this.element.getAttribute("max-entries");
        this.maxItems_ = maxItems ? parseInt(maxItems, 10) : null;
        this.shouldSuggestFirst_ = this.binding_.shouldSuggestFirst();
        this.highlightUserEntry_ = this.element.hasAttribute("highlight-user-entry");
        this.container_ = this.createContainer_();
        this.element.appendChild(this.container_);
        this.initializeListeners_();
        return resolvedPromise();
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.inputElement_.addEventListener("touchstart", function() {
          _this2.checkFirstInteractionAndMaybeFetchData_();
        }, {
          passive: true
        });
        this.inputElement_.addEventListener("input", function() {
          _this2.inputHandler_();
        });
        this.inputElement_.addEventListener("keydown", function(e) {
          _this2.keyDownHandler_(e);
        });
        this.inputElement_.addEventListener("focus", function() {
          _this2.checkFirstInteractionAndMaybeFetchData_().then(function() {
            var display = _this2.binding_.shouldShowOnFocus();
            _this2.toggleResultsHandler_(display);
          });
        });
        this.inputElement_.addEventListener("blur", function() {
          _this2.toggleResultsHandler_(false);
        });
        this.container_.addEventListener("mousedown", function(e) {
          _this2.selectHandler_(e);
        });
      }
    }, {
      key: "getSingleInputOrTextarea_",
      value: function getSingleInputOrTextarea_() {
        var possibleElements = this.element.querySelectorAll("input,textarea");
        userAssert(possibleElements.length == 1, "%s should contain exactly one <input> or <textarea> descendant %s", TAG2, this.element);
        return possibleElements[0];
      }
    }, {
      key: "getFormOrNull_",
      value: function getFormOrNull_() {
        return this.inputElement_.form || null;
      }
    }, {
      key: "createBinding_",
      value: function createBinding_() {
        return this.element.hasAttribute("inline") ? new AutocompleteBindingInline(this) : new AutocompleteBindingSingle(this);
      }
    }, {
      key: "getInlineData_",
      value: function getInlineData_(script) {
        var json = tryParseJson(script.textContent, function(error) {
          throw error;
        });
        var itemsExpr = this.element.getAttribute("items") || "items";
        var items = getValueForExpr(json, itemsExpr);
        if (!items) {
          user().warn(TAG2, 'Expected key "%s" in data but found nothing. Rendering empty results.', itemsExpr);
          return [];
        }
        return user().assertArray(items);
      }
    }, {
      key: "getRemoteData_",
      value: function getRemoteData_() {
        var _this3 = this;
        var ampdoc = this.getAmpDoc();
        var policy = UrlReplacementPolicy.ALL;
        var itemsExpr = this.element.getAttribute("items") || "items";
        this.maybeSetSrcFromInput_();
        if (this.isSsr_) {
          return requestForBatchFetch(this.element, policy, false).then(function(request) {
            request.xhrUrl = setupInput(_this3.win, request.xhrUrl, request.fetchOpt);
            request.fetchOpt = setupAMPCors(_this3.win, request.xhrUrl, request.fetchOpt);
            setupJsonFetchInit(request.fetchOpt);
            var attributes = dict({
              "ampAutocompleteAttributes": {
                "items": itemsExpr,
                "maxItems": _this3.maxItems_
              }
            });
            return _this3.getSsrTemplateHelper().ssr(_this3.element, request, null, attributes);
          });
        } else {
          return batchFetchJsonFor(ampdoc, this.element, {
            expr: itemsExpr,
            urlReplacement: policy
          }).catch(function() {
            user().warn(TAG2, 'Expected key "%s" in data but found nothing. Rendering empty results.', itemsExpr);
            return [];
          });
        }
      }
    }, {
      key: "maybeSetSrcFromInput_",
      value: function maybeSetSrcFromInput_() {
        if (!this.queryKey_) {
          return;
        }
        var src = this.generateSrc_(this.userInput_);
        this.element.setAttribute("src", src);
      }
    }, {
      key: "generateSrc_",
      value: function generateSrc_(opt_query) {
        if (opt_query === void 0) {
          opt_query = "";
        }
        return addParamToUrl(this.srcBase_, this.queryKey_, opt_query);
      }
    }, {
      key: "createContainer_",
      value: function createContainer_() {
        var container = this.element.ownerDocument.createElement("div");
        container.classList.add("i-amphtml-autocomplete-results");
        if (this.shouldRenderAbove_()) {
          container.classList.add("i-amphtml-autocomplete-results-up");
        }
        container.setAttribute("role", "listbox");
        container.setAttribute("id", this.containerId_);
        toggle(container, false);
        return container;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        this.inputElement_.setAttribute("autocomplete", "off");
        if (this.element.hasAttribute("prefetch")) {
          this.checkFirstInteractionAndMaybeFetchData_();
        }
        return this.autocomplete_(this.sourceData_, this.userInput_);
      }
    }, {
      key: "mutatedAttributesCallback",
      value: function mutatedAttributesCallback(mutations) {
        var _this4 = this;
        var src = mutations["src"];
        if (src === void 0 || src === null) {
          return resolvedPromise();
        }
        if (typeof src === "string") {
          this.srcBase_ = src;
          return this.getRemoteData_().then(function(remoteData) {
            _this4.sourceData_ = remoteData || [];
            _this4.autocomplete_(_this4.sourceData_, _this4.userInput_);
          }, function(e) {
            _this4.displayFallback_(e);
          });
        }
        if (typeof src === "object") {
          this.sourceData_ = src["items"] || [];
          return this.autocomplete_(this.sourceData_, this.userInput_);
        }
        user().error(TAG2, 'Unexpected "src" type: ' + src);
      }
    }, {
      key: "createElementFromItem_",
      value: function createElementFromItem_(item, substring) {
        if (substring === void 0) {
          substring = "";
        }
        var element = this.element.ownerDocument.createElement("div");
        element.classList.add("i-amphtml-autocomplete-item");
        element.setAttribute("role", "option");
        element.setAttribute("data-value", item);
        element.setAttribute("dir", "auto");
        element.textContent = item;
        var text = element.childNodes[0];
        var lowerCaseItem = item.toLocaleLowerCase();
        var lowerCaseSubstring = substring.toLocaleLowerCase();
        if (this.highlightUserEntry_ && substring && substring.length <= item.length && includes(lowerCaseItem, lowerCaseSubstring)) {
          var loc = lowerCaseItem.indexOf(lowerCaseSubstring);
          var span = this.element.ownerDocument.createElement("span");
          span.classList.add("autocomplete-partial");
          span.appendChild(this.element.ownerDocument.createTextNode(item.slice(loc, loc + substring.length)));
          var textToRemove = text.splitText(loc);
          textToRemove.splitText(substring.length);
          element.replaceChild(span, textToRemove);
        }
        return element;
      }
    }, {
      key: "inputHandler_",
      value: function inputHandler_() {
        var _this5 = this;
        if (this.binding_.shouldAutocomplete(dev().assertElement(this.inputElement_))) {
          return this.maybeFetchAndAutocomplete_();
        }
        return this.mutateElement(function() {
          _this5.clearAllItems_();
        });
      }
    }, {
      key: "maybeFetchAndAutocomplete_",
      value: function maybeFetchAndAutocomplete_() {
        var _this6 = this;
        var isFirstInteraction = this.userInput_.length === 0 && this.inputElement_.value.length === 1;
        this.userInput_ = this.binding_.getUserInputForUpdate(dev().assertElement(this.inputElement_));
        var maybeFetch = this.isSsr_ || this.queryKey_ ? this.getRemoteData_() : Promise.resolve(this.sourceData_);
        return maybeFetch.then(function(data) {
          _this6.sourceData_ = data;
          return _this6.mutateElement(function() {
            _this6.autocomplete_(_this6.sourceData_, _this6.userInput_).then(function() {
              _this6.displaySuggestions_(isFirstInteraction);
            });
          });
        });
      }
    }, {
      key: "displaySuggestions_",
      value: function displaySuggestions_(isFirstInteraction) {
        this.toggleResults_(true);
        if (this.shouldSuggestFirst_) {
          if (!this.detectBackspace_ || isFirstInteraction) {
            this.updateActiveItem_(1);
          }
          this.detectBackspace_ = false;
        }
      }
    }, {
      key: "selectHandler_",
      value: function selectHandler_(event) {
        var _this7 = this;
        var element = dev().assertElement(event.target);
        var selectedElement = this.getItemElement_(element);
        var _this$updateAndGetEle = this.updateAndGetElementSelections_(selectedElement), selectedObject = _this$updateAndGetEle.selectedObject, selectedText = _this$updateAndGetEle.selectedText;
        return this.mutateElement(function() {
          _this7.selectItem_(selectedText, selectedObject);
        });
      }
    }, {
      key: "autocomplete_",
      value: function autocomplete_(data, opt_input) {
        if (opt_input === void 0) {
          opt_input = "";
        }
        this.clearAllItems_();
        if (!data || opt_input.length < this.minChars_) {
          return resolvedPromise();
        }
        if (this.isSsr_) {
          return hasOwn(data, "html") ? this.renderResults_(data, dev().assertElement(this.container_), opt_input) : resolvedPromise();
        }
        return this.filterDataAndRenderResults_(data, opt_input);
      }
    }, {
      key: "filterDataAndRenderResults_",
      value: function filterDataAndRenderResults_(sourceData, input) {
        if (!sourceData.length) {
          return resolvedPromise();
        }
        var filteredData = this.filterData_(sourceData, input);
        var dataWithConverter = filteredData.map(function(item) {
          var itemWithConverter = item;
          if (typeof item === "object") {
            itemWithConverter = _extends2({}, item, {
              objToJson: function objToJson() {
                return JSON.stringify(item);
              }
            });
          }
          return itemWithConverter;
        });
        return this.renderResults_(dataWithConverter, dev().assertElement(this.container_), input);
      }
    }, {
      key: "renderResults_",
      value: function renderResults_(filteredData, container, input) {
        var _this8 = this;
        var renderPromise = resolvedPromise();
        this.resetActiveElement_();
        if (this.hasTemplate_) {
          renderPromise = this.getSsrTemplateHelper().applySsrOrCsrTemplate(this.element, filteredData).then(function(rendered) {
            var elements = isArray(rendered) ? rendered : [rendered];
            elements.forEach(function(child) {
              if (child.hasAttribute("data-disabled")) {
                child.setAttribute("aria-disabled", "true");
              } else if (!child.hasAttribute("data-value")) {
                user().warn(TAG2, 'Expected a "data-value" or "data-disabled" attribute on the rendered template item. %s', child);
              }
              child.classList.add("i-amphtml-autocomplete-item");
              child.setAttribute("role", "option");
              container.appendChild(child);
            });
          });
        } else {
          filteredData.forEach(function(item) {
            userAssert(typeof item === "string", "%s data must provide template for non-string items. %s", TAG2, _this8.element);
            container.appendChild(_this8.createElementFromItem_(item, input));
          });
        }
        return renderPromise;
      }
    }, {
      key: "filterData_",
      value: function filterData_(data, input) {
        var _this9 = this;
        if (this.filter_ === FilterType.NONE) {
          return this.truncateToMaxItems_(data);
        }
        input = input.toLocaleLowerCase();
        var itemsExpr = this.element.getAttribute("filter-value") || "value";
        var filteredData = data.filter(function(item) {
          if (typeof item === "object") {
            item = getValueForExpr(item, itemsExpr);
          }
          userAssert(typeof item === "string", '%s data property "%s" must map to string type. %s', TAG2, itemsExpr, _this9.element);
          item = item.toLocaleLowerCase();
          switch (_this9.filter_) {
            case FilterType.SUBSTRING:
              return includes(item, input);
            case FilterType.PREFIX:
              return item.startsWith(input);
            case FilterType.TOKEN_PREFIX:
              return _this9.tokenPrefixMatch_(item, input);
            case FilterType.FUZZY:
              return (0, import_fuzzysearch.default)(input, item);
            case FilterType.CUSTOM:
              throw new Error("Filter not yet supported: %s", _this9.filter_, _this9.element);
            default:
              throw new Error("Unexpected filter: %s", _this9.filter_, _this9.element);
          }
        });
        return this.truncateToMaxItems_(filteredData);
      }
    }, {
      key: "tokenPrefixMatch_",
      value: function tokenPrefixMatch_(item, input) {
        if (input === "") {
          return true;
        }
        var itemTokens = this.tokenizeString_(item);
        var inputTokens = this.tokenizeString_(input);
        var itemTokensMap = this.mapFromTokensArray_(itemTokens);
        var lastInputToken = inputTokens[inputTokens.length - 1];
        inputTokens.splice(inputTokens.length - 1, 1);
        var match = true;
        for (var i = 0; i < inputTokens.length; i++) {
          var token = inputTokens[i];
          if (token === "") {
            continue;
          }
          if (!hasOwn(itemTokensMap, token)) {
            match = false;
            break;
          }
          var count = Number(ownProperty(itemTokensMap, token));
          if (count > 1) {
            itemTokensMap[token] = count - 1;
          } else {
            delete itemTokensMap[token];
          }
        }
        var remainingItemTokens = Object.keys(itemTokensMap);
        return match && (lastInputToken === "" || remainingItemTokens.some(function(itemToken) {
          return itemToken.startsWith(lastInputToken);
        }));
      }
    }, {
      key: "tokenizeString_",
      value: function tokenizeString_(inputStr) {
        inputStr = inputStr.replace(/[\.]+/g, "");
        return inputStr.split(/[`~(){}_|+\-;:\'",\[\]\\\/ ]+/g);
      }
    }, {
      key: "mapFromTokensArray_",
      value: function mapFromTokensArray_(tokens) {
        var tokensMap = map();
        tokens.forEach(function(token) {
          var count = hasOwn(tokensMap, token) ? ownProperty(tokensMap, token) + 1 : 1;
          tokensMap[token] = count;
        });
        return tokensMap;
      }
    }, {
      key: "truncateToMaxItems_",
      value: function truncateToMaxItems_(data) {
        if (this.maxItems_ && this.maxItems_ < data.length) {
          data = data.slice(0, this.maxItems_);
        }
        return data;
      }
    }, {
      key: "toggleResults_",
      value: function toggleResults_(display) {
        this.inputElement_.setAttribute("aria-expanded", display);
        toggle(dev().assertElement(this.container_), display);
      }
    }, {
      key: "toggleResultsHandler_",
      value: function toggleResultsHandler_(display) {
        var _this10 = this;
        var form = this.getFormOrNull_();
        if (form) {
          if (display) {
            form.setAttribute("autocomplete", "off");
          } else if (this.initialAutocompleteAttr_) {
            form.setAttribute("autocomplete", this.initialAutocompleteAttr_);
          } else {
            form.removeAttribute("autocomplete");
          }
        }
        var renderAbove = false;
        return this.measureMutateElement(function() {
          renderAbove = _this10.shouldRenderAbove_();
        }, function() {
          if (!display) {
            _this10.userInput_ = _this10.inputElement_.value;
            _this10.autocomplete_(_this10.sourceData_, _this10.userInput_);
            _this10.resetActiveElement_();
          }
          _this10.setResultDisplayDirection_(renderAbove);
          _this10.toggleResults_(display);
        });
      }
    }, {
      key: "checkFirstInteractionAndMaybeFetchData_",
      value: function checkFirstInteractionAndMaybeFetchData_() {
        var _this11 = this;
        if (this.hasFetchedInitialData_ || !this.element.hasAttribute("src")) {
          return resolvedPromise();
        }
        this.hasFetchedInitialData_ = true;
        return this.getRemoteData_().then(function(remoteData) {
          _this11.sourceData_ = remoteData;
          _this11.autocomplete_(_this11.sourceData_);
        }, function(e) {
          _this11.displayFallback_(e);
        });
      }
    }, {
      key: "setResultDisplayDirection_",
      value: function setResultDisplayDirection_(renderAbove) {
        this.container_.classList.toggle("i-amphtml-autocomplete-results-up", renderAbove);
      }
    }, {
      key: "shouldRenderAbove_",
      value: function shouldRenderAbove_() {
        var viewHeight = this.viewport_.getHeight() || 0;
        return this.inputElement_.getBoundingClientRect().top > viewHeight / 2;
      }
    }, {
      key: "areResultsDisplayed_",
      value: function areResultsDisplayed_() {
        return !this.container_.hasAttribute("hidden") && this.container_.children.length > 0;
      }
    }, {
      key: "getItemElement_",
      value: function getItemElement_(element) {
        if (element === null) {
          return null;
        }
        if (element.classList.contains("i-amphtml-autocomplete-item")) {
          return element;
        }
        return this.getItemElement_(element.parentElement);
      }
    }, {
      key: "updateAndGetElementSelections_",
      value: function updateAndGetElementSelections_(element) {
        if (element === null || element.hasAttribute("data-disabled")) {
          return {
            selectedObject: null,
            selectedText: null
          };
        }
        var selectedText = this.getSelectedTextValue_(element);
        this.setInputValue_(selectedText);
        var selectedObject = this.getSelectedObjectValue_(element);
        return {
          selectedObject,
          selectedText
        };
      }
    }, {
      key: "setInputValue_",
      value: function setInputValue_(selectedText) {
        this.inputElement_.value = this.binding_.getUserInputForUpdateWithSelection(selectedText, this.inputElement_, this.userInput_);
        this.userInput_ = this.binding_.getUserInputForUpdate(this.inputElement_);
      }
    }, {
      key: "getSelectedTextValue_",
      value: function getSelectedTextValue_(element) {
        return element.getAttribute("data-value") || element.textContent || "";
      }
    }, {
      key: "getSelectedObjectValue_",
      value: function getSelectedObjectValue_(element) {
        if (!element.hasAttribute("data-json")) {
          return null;
        }
        return tryParseJson(element.getAttribute("data-json"), function(error) {
          throw error;
        });
      }
    }, {
      key: "selectItem_",
      value: function selectItem_(selectedText, selectedObject) {
        if (selectedText === null) {
          return;
        }
        this.fireSelectAndChangeEvents_(selectedText, selectedObject);
        this.clearAllItems_();
        this.toggleResults_(false);
      }
    }, {
      key: "fireSelectAndChangeEvents_",
      value: function fireSelectAndChangeEvents_(selectedText, selectedObject) {
        var selectName = "select";
        var eventValue = _extends2({
          value: selectedText
        }, selectedObject && {
          valueAsObject: selectedObject
        });
        var selectEvent = createCustomEvent(this.win, "amp-autocomplete." + selectName, eventValue);
        this.action_.trigger(this.element, selectName, selectEvent, ActionTrust.HIGH);
        var nativeChangeEvent = createCustomEvent(this.win, "change", eventValue, {
          bubbles: true
        });
        this.inputElement_.dispatchEvent(nativeChangeEvent);
      }
    }, {
      key: "updateActiveItem_",
      value: function updateActiveItem_(delta) {
        var _this12 = this;
        if (delta === 0 || !this.areResultsDisplayed_() || this.fallbackDisplayed_) {
          return resolvedPromise();
        }
        var keyUpWhenNoneActive = this.activeIndex_ === -1 && delta < 0;
        var index = keyUpWhenNoneActive ? delta : this.activeIndex_ + delta;
        var enabledElements = this.getEnabledItems_();
        if (enabledElements.length === 0) {
          return resolvedPromise();
        }
        var activeIndex = mod(index, enabledElements.length);
        var newActiveElement = enabledElements[activeIndex];
        var newValue = newActiveElement.getAttribute("data-value");
        this.binding_.displayActiveItemInInput(dev().assertElement(this.inputElement_), newValue, this.userInput_);
        var shouldScroll, newTop;
        return this.measureMutateElement(function() {
          var itemHeight = newActiveElement.offsetHeight, itemTop = newActiveElement.offsetTop;
          var _this12$container_ = _this12.container_, resultHeight = _this12$container_.offsetHeight, resultTop = _this12$container_.scrollTop;
          shouldScroll = resultTop > itemTop || resultTop + resultHeight < itemTop + itemHeight;
          newTop = delta > 0 ? itemTop + itemHeight - resultHeight : itemTop;
        }, function() {
          if (shouldScroll) {
            _this12.container_.scrollTop = newTop;
          }
          _this12.resetActiveElement_();
          newActiveElement.classList.add("i-amphtml-autocomplete-item-active");
          newActiveElement.setAttribute("aria-selected", "true");
          var elementId = newActiveElement.getAttribute("id");
          if (!elementId) {
            elementId = _this12.prefix_ + "_AMP_content_" + activeIndex;
            newActiveElement.setAttribute("id", elementId);
          }
          _this12.inputElement_.setAttribute("aria-activedescendant", elementId);
          _this12.activeIndex_ = activeIndex;
          _this12.activeElement_ = newActiveElement;
          tryFocus(dev().assertElement(_this12.activeElement_));
        });
      }
    }, {
      key: "getEnabledItems_",
      value: function getEnabledItems_() {
        return this.container_.querySelectorAll(".i-amphtml-autocomplete-item:not([data-disabled])");
      }
    }, {
      key: "displayUserInput_",
      value: function displayUserInput_() {
        this.binding_.resetInputOnWrapAround(this.userInput_, dev().assertElement(this.inputElement_));
        this.resetActiveElement_();
      }
    }, {
      key: "resetActiveElement_",
      value: function resetActiveElement_() {
        if (!this.activeElement_) {
          return;
        }
        this.activeElement_.classList.toggle("i-amphtml-autocomplete-item-active", false);
        this.activeElement_.removeAttribute("aria-selected");
        if (this.activeElement_.getAttribute("id") === "autocomplete-selected") {
          this.activeElement_.removeAttribute("id");
        }
        this.inputElement_.removeAttribute("aria-activedescendent");
        this.activeElement_ = null;
        this.activeIndex_ = -1;
      }
    }, {
      key: "clearAllItems_",
      value: function clearAllItems_() {
        this.fallbackDisplayed_ = false;
        removeChildren(dev().assertElement(this.container_));
      }
    }, {
      key: "keyDownHandler_",
      value: function keyDownHandler_(event) {
        var _this13 = this;
        switch (event.key) {
          case Keys.DOWN_ARROW:
            event.preventDefault();
            if (this.areResultsDisplayed_()) {
              if (this.activeIndex_ === this.getEnabledItems_().length - 1) {
                this.displayUserInput_();
                return resolvedPromise();
              }
              return this.updateActiveItem_(1);
            }
            return this.mutateElement(function() {
              _this13.autocomplete_(_this13.sourceData_, _this13.userInput_);
              _this13.toggleResults_(true);
            });
          case Keys.UP_ARROW:
            event.preventDefault();
            if (this.activeIndex_ === 0) {
              this.displayUserInput_();
              return resolvedPromise();
            }
            return this.updateActiveItem_(-1);
          case Keys.ENTER:
            var shouldPreventDefault = this.binding_.shouldPreventDefaultOnEnter(!!this.activeElement_);
            if (this.areResultsDisplayed_() && shouldPreventDefault) {
              event.preventDefault();
            }
            this.binding_.removeSelectionHighlighting(this.inputElement_);
            if (this.areResultsDisplayed_() && this.activeElement_) {
              var _this$updateAndGetEle2 = this.updateAndGetElementSelections_(this.activeElement_), selectedObject = _this$updateAndGetEle2.selectedObject, selectedText = _this$updateAndGetEle2.selectedText;
              return this.mutateElement(function() {
                _this13.selectItem_(selectedText, selectedObject);
                _this13.resetActiveElement_();
              });
            }
            return this.mutateElement(function() {
              _this13.toggleResults_(false);
            });
          case Keys.ESCAPE:
            return this.mutateElement(function() {
              if (!_this13.fallbackDisplayed_) {
                event.preventDefault();
                _this13.displayUserInput_();
                _this13.toggleResults_(false);
              }
            });
          case Keys.TAB:
            if (this.areResultsDisplayed_() && this.activeElement_) {
              event.preventDefault();
              var _this$updateAndGetEle3 = this.updateAndGetElementSelections_(this.activeElement_), _selectedObject = _this$updateAndGetEle3.selectedObject, _selectedText = _this$updateAndGetEle3.selectedText;
              return this.mutateElement(function() {
                _this13.selectItem_(_selectedText, _selectedObject);
              });
            }
            return resolvedPromise();
          case Keys.BACKSPACE:
            this.detectBackspace_ = this.shouldSuggestFirst_;
            return resolvedPromise();
          default:
            return resolvedPromise();
        }
      }
    }, {
      key: "displayFallback_",
      value: function displayFallback_(error) {
        if (this.fallbackDisplayed_) {
          return;
        }
        this.clearAllItems_();
        var fallback = this.getFallback();
        if (fallback) {
          this.fallbackDisplayed_ = true;
          this.toggleFallback(true);
        } else {
          throw error;
        }
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.CONTAINER;
      }
    }]);
    return AmpAutocomplete2;
  }(AMP.BaseElement);
  AMP.extension(TAG2, "0.1", function(AMP2) {
    AMP2.registerElement(TAG2, AmpAutocomplete, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-autocomplete-0.1.max.js.map
