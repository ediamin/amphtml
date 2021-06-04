(self.AMP=self.AMP||[]).push({n:"amp-consent",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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

  // src/core/constants/consent-state.js
  var CONSENT_POLICY_STATE = {
    SUFFICIENT: 1,
    INSUFFICIENT: 2,
    UNKNOWN_NOT_REQUIRED: 3,
    UNKNOWN: 4
  };
  var CONSENT_STRING_TYPE = {
    TCF_V1: 1,
    TCF_V2: 2,
    US_PRIVACY_STRING: 3
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
  function removeItem(array, item) {
    var index = array.indexOf(item);
    if (index == -1) {
      return false;
    }
    array.splice(index, 1);
    return true;
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
  function deepMerge(target, source, depth) {
    if (depth === void 0) {
      depth = 10;
    }
    var seen = [];
    var queue = [];
    queue.push({
      t: target,
      s: source,
      d: 0
    });
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), d = _queue$shift.d, s = _queue$shift.s, t = _queue$shift.t;
      if (seen.includes(s)) {
        throw new Error("Source object has a circular reference.");
      }
      seen.push(s);
      if (t === s) {
        continue;
      }
      if (d > depth) {
        Object.assign(t, s);
        continue;
      }
      for (var _i = 0, _Object$keys = Object.keys(s); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var newValue = s[key];
        if (hasOwn(t, key)) {
          var oldValue = t[key];
          if (isObject(newValue) && isObject(oldValue)) {
            queue.push({
              t: oldValue,
              s: newValue,
              d: d + 1
            });
            continue;
          }
        }
        t[key] = newValue;
      }
    }
    return target;
  }

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
  }
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
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

  // extensions/amp-consent/0.1/consent-info.js
  var TAG = "amp-consent";
  var STORAGE_KEY = {
    STATE: "s",
    STRING: "r",
    IS_DIRTY: "d",
    METADATA: "m",
    PURPOSE_CONSENTS: "pc"
  };
  var METADATA_STORAGE_KEY = {
    CONSENT_STRING_TYPE: "cst",
    ADDITIONAL_CONSENT: "ac",
    GDPR_APPLIES: "ga",
    PURPOSE_ONE: "po"
  };
  var PURPOSE_CONSENT_STATE = {
    ACCEPTED: 1,
    REJECTED: 2
  };
  var CONSENT_ITEM_STATE = {
    ACCEPTED: 1,
    REJECTED: 2,
    DISMISSED: 3,
    NOT_REQUIRED: 4,
    UNKNOWN: 5
  };
  var TCF_POST_MESSAGE_API_COMMANDS = {
    GET_TC_DATA: "getTCData",
    PING: "ping",
    ADD_EVENT_LISTENER: "addEventListener",
    REMOVE_EVENT_LISTENER: "removeEventListener"
  };
  function getStoredConsentInfo(value) {
    if (value === void 0) {
      return constructConsentInfo(CONSENT_ITEM_STATE.UNKNOWN);
    }
    if (typeof value === "boolean") {
      return getLegacyStoredConsentInfo(value);
    }
    if (!isObject(value)) {
      throw dev().createError("Invalid stored consent value");
    }
    var consentState = convertValueToState(value[STORAGE_KEY.STATE]);
    return constructConsentInfo(consentState, value[STORAGE_KEY.STRING], convertStorageMetadata(value[STORAGE_KEY.METADATA]), value[STORAGE_KEY.PURPOSE_CONSENTS], value[STORAGE_KEY.IS_DIRTY] && value[STORAGE_KEY.IS_DIRTY] === 1);
  }
  function hasDirtyBit(consentInfo) {
    if (!consentInfo) {
      return false;
    }
    if (hasOwn(consentInfo, "isDirty") && consentInfo["isDirty"] == true) {
      return true;
    }
    return false;
  }
  function recalculateConsentStateValue(newState, previousState) {
    if (!isEnumValue(CONSENT_ITEM_STATE, newState)) {
      newState = CONSENT_ITEM_STATE.UNKNOWN;
    }
    if (newState == CONSENT_ITEM_STATE.DISMISSED) {
      return previousState || CONSENT_ITEM_STATE.UNKNOWN;
    }
    if (newState == CONSENT_ITEM_STATE.NOT_REQUIRED) {
      if (previousState && previousState != CONSENT_ITEM_STATE.UNKNOWN) {
        return previousState;
      }
    }
    return newState;
  }
  function composeStoreValue(consentInfo) {
    var obj = map();
    var consentState = consentInfo["consentState"];
    if (consentState == CONSENT_ITEM_STATE.ACCEPTED) {
      obj[STORAGE_KEY.STATE] = 1;
    } else if (consentState == CONSENT_ITEM_STATE.REJECTED) {
      obj[STORAGE_KEY.STATE] = 0;
    } else {
      return null;
    }
    if (consentInfo["consentString"]) {
      obj[STORAGE_KEY.STRING] = consentInfo["consentString"];
    }
    if (consentInfo["isDirty"] === true) {
      obj[STORAGE_KEY.IS_DIRTY] = 1;
    }
    if (consentInfo["consentMetadata"]) {
      obj[STORAGE_KEY.METADATA] = composeMetadataStoreValue(consentInfo["consentMetadata"]);
    }
    if (consentInfo["purposeConsents"]) {
      obj[STORAGE_KEY.PURPOSE_CONSENTS] = consentInfo["purposeConsents"];
    }
    if (Object.keys(obj) == 0) {
      return null;
    }
    return obj;
  }
  function calculateLegacyStateValue(consentState) {
    if (consentState == CONSENT_ITEM_STATE.ACCEPTED) {
      return true;
    }
    if (consentState == CONSENT_ITEM_STATE.REJECTED) {
      return false;
    }
    return null;
  }
  function isConsentInfoStoredValueSame(infoA, infoB, opt_isDirty) {
    if (!infoA && !infoB) {
      return true;
    }
    if (infoA && infoB) {
      var stateEqual = calculateLegacyStateValue(infoA["consentState"]) === calculateLegacyStateValue(infoB["consentState"]);
      var stringEqual = (infoA["consentString"] || "") === (infoB["consentString"] || "");
      var isDirtyEqual;
      if (opt_isDirty) {
        isDirtyEqual = !!infoA["isDirty"] === !!opt_isDirty;
      } else {
        isDirtyEqual = !!infoA["isDirty"] === !!infoB["isDirty"];
      }
      var metadataEqual = deepEquals(infoA["consentMetadata"], infoB["consentMetadata"]);
      var purposeConsentsEqual = deepEquals(infoA["purposeConsents"], infoB["purposeConsents"]);
      return stateEqual && stringEqual && metadataEqual && purposeConsentsEqual && isDirtyEqual;
    }
    return false;
  }
  function getLegacyStoredConsentInfo(value) {
    var state = convertValueToState(value);
    return constructConsentInfo(state);
  }
  function constructConsentInfo(consentState, opt_consentString, opt_consentMetadata, opt_purposeConsents, opt_isDirty) {
    return {
      "consentState": consentState,
      "consentString": opt_consentString,
      "consentMetadata": opt_consentMetadata,
      "purposeConsents": opt_purposeConsents,
      "isDirty": opt_isDirty
    };
  }
  function constructMetadata(opt_consentStringType, opt_additionalConsent, opt_gdprApplies, opt_purposeOne) {
    return {
      "consentStringType": opt_consentStringType,
      "additionalConsent": opt_additionalConsent,
      "gdprApplies": opt_gdprApplies,
      "purposeOne": opt_purposeOne
    };
  }
  function convertValueToState(value) {
    if (value === true || value === 1) {
      return CONSENT_ITEM_STATE.ACCEPTED;
    } else if (value === false || value === 0) {
      return CONSENT_ITEM_STATE.REJECTED;
    }
    return CONSENT_ITEM_STATE.UNKNOWN;
  }
  function convertEnumValueToState(value) {
    if (value === "accepted") {
      return CONSENT_ITEM_STATE.ACCEPTED;
    } else if (value === "rejected") {
      return CONSENT_ITEM_STATE.REJECTED;
    } else if (value === "unknown") {
      return CONSENT_ITEM_STATE.UNKNOWN;
    }
    return null;
  }
  function hasStoredValue(info) {
    if (info["consentString"]) {
      return true;
    }
    return info["consentState"] === CONSENT_ITEM_STATE.ACCEPTED || info["consentState"] === CONSENT_ITEM_STATE.REJECTED;
  }
  function getConsentStateValue(enumState) {
    if (enumState === CONSENT_ITEM_STATE.ACCEPTED) {
      return "accepted";
    }
    if (enumState === CONSENT_ITEM_STATE.REJECTED) {
      return "rejected";
    }
    return "unknown";
  }
  function composeMetadataStoreValue(consentInfoMetadata) {
    var storageMetadata = map();
    if (consentInfoMetadata["consentStringType"]) {
      storageMetadata[METADATA_STORAGE_KEY.CONSENT_STRING_TYPE] = consentInfoMetadata["consentStringType"];
    }
    if (consentInfoMetadata["additionalConsent"]) {
      storageMetadata[METADATA_STORAGE_KEY.ADDITIONAL_CONSENT] = consentInfoMetadata["additionalConsent"];
    }
    if (consentInfoMetadata["gdprApplies"] != void 0) {
      storageMetadata[METADATA_STORAGE_KEY.GDPR_APPLIES] = consentInfoMetadata["gdprApplies"];
    }
    if (consentInfoMetadata["purposeOne"] != void 0) {
      storageMetadata[METADATA_STORAGE_KEY.PURPOSE_ONE] = consentInfoMetadata["purposeOne"];
    }
    return storageMetadata;
  }
  function convertStorageMetadata(storageMetadata) {
    if (!storageMetadata) {
      return constructMetadata();
    }
    return constructMetadata(storageMetadata[METADATA_STORAGE_KEY.CONSENT_STRING_TYPE], storageMetadata[METADATA_STORAGE_KEY.ADDITIONAL_CONSENT], storageMetadata[METADATA_STORAGE_KEY.GDPR_APPLIES], storageMetadata[METADATA_STORAGE_KEY.PURPOSE_ONE]);
  }
  function assertMetadataValues(metadata) {
    var consentStringType = metadata["consentStringType"];
    var additionalConsent = metadata["additionalConsent"];
    var gdprApplies = metadata["gdprApplies"];
    var purposeOne = metadata["purposeOne"];
    var errorFields = [];
    if (consentStringType && !isEnumValue(CONSENT_STRING_TYPE, consentStringType)) {
      delete metadata["consentStringType"];
      errorFields.push("consentStringType");
    }
    if (additionalConsent && typeof additionalConsent != "string") {
      delete metadata["additionalConsent"];
      errorFields.push("additionalConsent");
    }
    if (gdprApplies && typeof gdprApplies != "boolean") {
      delete metadata["gdprApplies"];
      errorFields.push("gdprApplies");
    }
    if (purposeOne && typeof purposeOne != "boolean") {
      delete metadata["purposeOne"];
      errorFields.push("purposeOne");
    }
    for (var i = 0; i < errorFields.length; i++) {
      user().error(TAG, 'Consent metadata value "%s" is invalid.', errorFields[i]);
    }
  }

  // build/amp-consent-0.1.css.js
  var CSS2 = "amp-consent{position:fixed!important;bottom:0;left:0;overflow:hidden!important;background:hsla(0,0%,100%,0.7);width:100%;z-index:2147483645}amp-consent[i-amphtml-notbuilt]>*{display:none!important}amp-consent>*{max-height:100vh!important}amp-consent.amp-active{visibility:visible}amp-consent.amp-hidden{visibility:hidden}@keyframes amp-consent-ui-placeholder-spin{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}.i-amphtml-consent-ui-placeholder{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-consent-ui-placeholder>svg{width:30px;height:30px;fill:none;stroke-width:1.5px;transform-origin:50% 50%;animation:amp-consent-ui-placeholder-spin 1000ms linear infinite}.i-amphtml-consent-alertdialog{overflow:hidden;position:absolute;height:1px;width:1px;top:auto;left:auto}.i-amphtml-consent-ui-fill{position:absolute;top:0;left:0;width:100%}iframe.i-amphtml-consent-ui-fill{border:none}amp-consent.i-amphtml-consent-ui-iframe-active{width:100%!important;height:100%!important;padding:0px!important;margin:0px!important;overflow:auto!important;transform:translate3d(0px,100vh,0px)!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-modal{box-sizing:border-box;top:0;right:0;animation:i-amphtml-modal-appear 0.5s;animation-fill-mode:forwards;height:var(--i-amphtml-modal-height)!important;width:90vw!important;margin:auto!important;max-width:760px}amp-consent.i-amphtml-consent-ui-border-enabled{border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}amp-consent.i-amphtml-consent-ui-modal.i-amphtml-consent-ui-border-enabled{border-radius:8px!important;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-iframe-transform{transform:translate3d(0px,calc(100% - var(--i-amphtml-modal-height)),0px)!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-in{transition:transform 0.5s ease-out!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-in.i-amphtml-consent-ui-iframe-fullscreen{top:0px!important;transform:translateZ(0px)!important;border-top-left-radius:0px!important;border-top-right-radius:0px!important}amp-consent.i-amphtml-consent-ui-in.i-amphtml-consent-ui-iframe-fullscreen>.i-amphtml-consent-ui-fill{height:100%!important}@keyframes i-amphtml-consent-ui-mask{0%{opacity:0.0}to{opacity:0.2}}@keyframes i-amphtml-modal-appear{0%{transform:translateY(100vh);opacity:0}to{transform:translate(0);opacity:1}}.i-amphtml-consent-ui-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;opacity:0.2;animation:i-amphtml-consent-ui-mask 0.25s ease-in;background-image:none!important;background-color:#000;z-index:2147483644}\n/*# sourceURL=/extensions/amp-consent/0.1/amp-consent.css*/";

  // extensions/amp-consent/0.1/cmps.js
  var CMP_CONFIG = {};
  if (getMode().test || getMode().localDev) {
    CMP_CONFIG["_ping_"] = {
      "consentInstanceId": "_ping_",
      "checkConsentHref": "/get-consent-v1?cid=CLIENT_ID&pid=PAGE_VIEW_ID",
      "promptUISrc": "/examples/amp-consent/diy-consent.html?cid=CLIENT_ID&pid=PAGE_VIEW_ID"
    };
  }
  CMP_CONFIG["appconsent"] = {
    "consentInstanceId": "appconsent",
    "checkConsentHref": "https://collector.appconsent.io/amp/check-consent",
    "promptUISrc": "https://cdn.appconsent.io/loader.html"
  };
  CMP_CONFIG["ConsentManager"] = {
    "consentInstanceId": "ConsentManager",
    "checkConsentHref": "https://consentmanager.mgr.consensu.org/delivery/ampcheck.php",
    "promptUISrc": "https://consentmanager.mgr.consensu.org/delivery/ampui.php"
  };
  CMP_CONFIG["didomi"] = {
    "consentInstanceId": "didomi",
    "checkConsentHref": "https://api.privacy-center.org/amp/check-consent",
    "promptUISrc": "https://sdk-amp.privacy-center.org/loader.html"
  };
  CMP_CONFIG["iubenda"] = {
    "consentInstanceId": "iubenda",
    "checkConsentHref": "https://amp.iubenda.com/checkConsent",
    "promptUISrc": "https://www.iubenda.com/en/help/22135-cookie-solution-amp"
  };
  CMP_CONFIG["sirdata"] = {
    "consentInstanceId": "sirdata",
    "checkConsentHref": "https://sddan.mgr.consensu.org/api/v1/public/amp/check",
    "promptUISrc": "https://ui.sddan.mgr.consensu.org/amp.html"
  };
  CMP_CONFIG["Marfeel"] = {
    "consentInstanceId": "Marfeel",
    "checkConsentHref": "https://live.mrf.io/cmp/marfeel/amp/check-consent",
    "promptUISrc": "https://live.mrf.io/cmp/marfeel/amp/index.html"
  };
  CMP_CONFIG["Ogury"] = {
    "consentInstanceId": "Ogury",
    "checkConsentHref": "https://api.ogury.mgr.consensu.org/v1/check-for-consent",
    "promptUISrc": "https://www.ogury.mgr.consensu.org/amp.html"
  };
  CMP_CONFIG["onetrust"] = {
    "consentInstanceId": "onetrust",
    "checkConsentHref": "https://cdn.cookielaw.org/amp/consent/check",
    "promptUISrc": " https://amp.onetrust.mgr.consensu.org/"
  };
  CMP_CONFIG["opencmp"] = {
    "consentInstanceId": "opencmp",
    "checkConsentHref": "https://amp.opencmp.net/consent/check",
    "promptUISrc": "https://cdn.opencmp.net/tcf-v2/amp/cmp.html"
  };
  CMP_CONFIG["pubtech"] = {
    "consentInstanceId": "pubtech",
    "checkConsentHref": "https://amp.pubtech.it/cmp-amp-check-consent",
    "promptUISrc": "https://cdn.pubtech.ai/amp/index.html"
  };
  CMP_CONFIG["quantcast"] = {
    "consentInstanceId": "quantcast",
    "checkConsentHref": "https://apis.quantcast.mgr.consensu.org/amp/check-consent",
    "promptUISrc": "https://quantcast.mgr.consensu.org/tcfv2/amp.html"
  };
  CMP_CONFIG["SourcePoint"] = {
    "consentInstanceId": "SourcePoint",
    "checkConsentHref": "https://sourcepoint.mgr.consensu.org/consent/v2/amp",
    "promptUISrc": "https://amp.pm.sourcepoint.mgr.consensu.org/"
  };
  CMP_CONFIG["UniConsent"] = {
    "consentInstanceId": "UniConsent",
    "checkConsentHref": "https://edge.uniconsent.com/amp/check-consent",
    "promptUISrc": "https://cmp.uniconsent.com/amp/index.html"
  };
  CMP_CONFIG["Usercentrics"] = {
    "consentInstanceId": "Usercentrics",
    "checkConsentHref": "https://consents.usercentrics.eu/amp/checkConsent",
    "promptUISrc": "https://amp.usercentrics.eu/amp.html"
  };
  CMP_CONFIG["LiveRamp"] = {
    "consentInstanceId": "LiveRamp",
    "checkConsentHref": "https://api.privacymanager.io/amp/check-consent",
    "promptUISrc": "https://amp-consent-tool.privacymanager.io/1/index.html"
  };

  // extensions/amp-geo/0.1/amp-geo-in-group.js
  var GEO_IN_GROUP = {
    NOT_DEFINED: 1,
    IN: 2,
    NOT_IN: 3
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
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
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
  var UPGRADE_TO_CUSTOMELEMENT_PROMISE = "__AMP_UPG_PRM";
  var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = "__AMP_UPG_RES";
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
  function insertAtStart(root, element) {
    root.insertBefore(element, root.firstChild);
  }
  function isJsonScriptTag(element) {
    return element.tagName == "SCRIPT" && element.hasAttribute("type") && element.getAttribute("type").toUpperCase() == "APPLICATION/JSON";
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }
  function isAmpElement(element) {
    var tag = element.tagName;
    return tag.startsWith("AMP-") && !(tag == "AMP-STICKY-AD-TOP-PADDING" || tag == "AMP-BODY");
  }
  function whenUpgradedToCustomElement(element) {
    devAssert(isAmpElement(element), "element is not AmpElement");
    if (element.createdCallback) {
      return Promise.resolve(element);
    }
    if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
      var deferred = new Deferred();
      element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = deferred.promise;
      element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = deferred.resolve;
    }
    return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
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

  // src/json.js
  function getChildJsonConfig(element) {
    var scripts = childElementsByTag(element, "script");
    var n = scripts.length;
    if (n !== 1) {
      throw new Error("Found " + scripts.length + " <script> children. Expected 1.");
    }
    var script = scripts[0];
    if (!isJsonScriptTag(script)) {
      throw new Error('<script> child must have type="application/json"');
    }
    try {
      return parseJson(script.textContent);
    } catch (unusedError) {
      throw new Error("Failed to parse <script> contents. Is it valid JSON?");
    }
  }

  // extensions/amp-consent/0.1/consent-config.js
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
  var TAG2 = "amp-consent/consent-config";
  var AMP_STORY_CONSENT_TAG = "amp-story-consent";
  var ALLOWED_DEPR_CONSENTINSTANCE_ATTRS = {
    "promptUI": true,
    "checkConsentHref": true,
    "promptIfUnknownForGeoGroup": true,
    "onUpdateHref": true
  };
  var CONSENT_VARS_ALLOWED_LIST = {
    "CLIENT_ID": true,
    "PAGE_VIEW_ID": true,
    "PAGE_VIEW_ID_64": true
  };
  var CID_SCOPE = "AMP-CONSENT";
  var ConsentConfig = /* @__PURE__ */ function() {
    function ConsentConfig2(element) {
      _classCallCheck3(this, ConsentConfig2);
      this.element_ = element;
      this.matchedGeoGroup_ = null;
      this.configPromise_ = null;
    }
    _createClass2(ConsentConfig2, [{
      key: "getConsentConfigPromise",
      value: function getConsentConfigPromise() {
        if (!this.configPromise_) {
          this.configPromise_ = this.validateAndParseConfig_();
        }
        return this.configPromise_;
      }
    }, {
      key: "getMatchedGeoGroup",
      value: function getMatchedGeoGroup() {
        return this.matchedGeoGroup_;
      }
    }, {
      key: "convertInlineConfigFormat_",
      value: function convertInlineConfigFormat_(config) {
        var consentsConfigDepr = config["consents"];
        if (!config["consents"]) {
          return config;
        }
        var keys = Object.keys(consentsConfigDepr);
        userAssert(keys.length <= 1, "%s: only single consent instance is supported", TAG2);
        if (keys.length > 0) {
          config["consentInstanceId"] = keys[0];
          var consentInstanceConfigDepr = config["consents"][keys[0]];
          var attrs = Object.keys(consentInstanceConfigDepr);
          for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];
            if (!config[attr] && ALLOWED_DEPR_CONSENTINSTANCE_ATTRS[attr]) {
              config[attrs[i]] = consentInstanceConfigDepr[attrs[i]];
            }
          }
        }
        delete config["consents"];
        return config;
      }
    }, {
      key: "validateAndParseConfig_",
      value: function validateAndParseConfig_() {
        var _this = this;
        var inlineConfig = this.convertInlineConfigFormat_(userAssert(this.getInlineConfig_(), "%s: Inline config not found"));
        var cmpConfig = this.getCMPConfig_();
        var config = deepMerge(cmpConfig || {}, inlineConfig || {}, 1);
        userAssert(config["consentInstanceId"], "%s: consentInstanceId to store consent info is required", TAG2);
        if (config["policy"]) {
          var keys = Object.keys(config["policy"]);
          for (var i = 0; i < keys.length; i++) {
            if (keys[i] != "default") {
              user().warn(TAG2, "policy %s is currently not supported and will be ignored", keys[i]);
              delete config["policy"][keys[i]];
            }
          }
        }
        var group = config["promptIfUnknownForGeoGroup"];
        if (typeof group === "string") {
          var _config$geoOverride;
          config["consentRequired"] = false;
          config["geoOverride"] = (_config$geoOverride = {}, _config$geoOverride[group] = {
            "consentRequired": true
          }, _config$geoOverride);
        } else if (config["consentRequired"] === void 0 && config["checkConsentHref"]) {
          config["consentRequired"] = "remote";
        }
        return this.mergeGeoOverride_(config).then(function(mergedConfig) {
          return _this.validateMergedGeoOverride_(mergedConfig);
        }).then(function(validatedConfig) {
          return _this.checkStoryConsent_(validatedConfig);
        });
      }
    }, {
      key: "mergeGeoOverride_",
      value: function mergeGeoOverride_(config) {
        var _this2 = this;
        if (!config["geoOverride"]) {
          return Promise.resolve(config);
        }
        return Services.geoForDocOrNull(this.element_).then(function(geoService) {
          userAssert(geoService, "%s: requires <amp-geo> to use `geoOverride`", TAG2);
          var mergedConfig = map(config);
          var geoGroups = Object.keys(config["geoOverride"]);
          for (var i = 0; i < geoGroups.length; i++) {
            if (geoService.isInCountryGroup(geoGroups[i]) === GEO_IN_GROUP.IN) {
              var geoConfig = config["geoOverride"][geoGroups[i]];
              if (hasOwn(geoConfig, "consentInstanceId")) {
                user().error(TAG2, "consentInstanceId cannot be overriden in geoGroup:", geoGroups[i]);
                delete geoConfig["consentInstanceId"];
              }
              deepMerge(mergedConfig, geoConfig, 1);
              _this2.matchedGeoGroup_ = geoGroups[i];
              break;
            }
          }
          delete mergedConfig["geoOverride"];
          return mergedConfig;
        });
      }
    }, {
      key: "validateMergedGeoOverride_",
      value: function validateMergedGeoOverride_(mergedConfig) {
        var consentRequired = mergedConfig["consentRequired"];
        userAssert(typeof consentRequired === "boolean" || consentRequired === "remote", "`consentRequired` is required", TAG2);
        if (consentRequired === "remote") {
          userAssert(mergedConfig["checkConsentHref"], "%s: `checkConsentHref` must be specified if `consentRequired` is remote", TAG2);
        }
        return mergedConfig;
      }
    }, {
      key: "checkStoryConsent_",
      value: function checkStoryConsent_(config) {
        if (childElementByTag(this.element_, AMP_STORY_CONSENT_TAG)) {
          userAssert(!config["promptUISrc"], "%s: `promptUiSrc` cannot be specified while using %s.", TAG2, AMP_STORY_CONSENT_TAG);
        }
        return config;
      }
    }, {
      key: "getInlineConfig_",
      value: function getInlineConfig_() {
        try {
          return getChildJsonConfig(this.element_);
        } catch (e) {
          throw user(this.element_).createError(TAG2, e);
        }
      }
    }, {
      key: "getCMPConfig_",
      value: function getCMPConfig_() {
        var type = this.element_.getAttribute("type");
        if (!type) {
          return null;
        }
        userAssert(CMP_CONFIG[type], "%s: invalid CMP type %s", TAG2, type);
        var importConfig = CMP_CONFIG[type];
        this.validateCMPConfig_(importConfig);
        return importConfig;
      }
    }, {
      key: "validateCMPConfig_",
      value: function validateCMPConfig_(config) {
        var assertValues = ["consentInstanceId", "checkConsentHref", "promptUISrc"];
        for (var i = 0; i < assertValues.length; i++) {
          var attribute = assertValues[i];
          devAssert(config[attribute], "CMP config must specify %s", attribute);
        }
      }
    }]);
    return ConsentConfig2;
  }();
  function expandConsentEndpointUrl(element, url) {
    return Services.urlReplacementsForDoc(element).expandUrlAsync(url, {
      "CLIENT_ID": getConsentCID(element)
    }, CONSENT_VARS_ALLOWED_LIST);
  }
  function getConsentCID(node) {
    return Services.cidForDoc(node).then(function(cid) {
      return cid.get({
        scope: CID_SCOPE,
        createCookieIfNotPresent: true
      }, resolvedPromise());
    });
  }
  function expandPolicyConfig(policyConfig, consentId) {
    var defaultWaitForItems = {};
    defaultWaitForItems[consentId] = void 0;
    var defaultPolicy = {
      "waitFor": defaultWaitForItems
    };
    var unblockOnAll = [CONSENT_POLICY_STATE.UNKNOWN, CONSENT_POLICY_STATE.SUFFICIENT, CONSENT_POLICY_STATE.INSUFFICIENT, CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED];
    var predefinedNone = {
      "waitFor": defaultWaitForItems,
      "unblockOn": unblockOnAll
    };
    var rejectAllOnZero = {
      "waitFor": defaultWaitForItems,
      "timeout": {
        "seconds": 0,
        "fallbackAction": "reject"
      },
      "unblockOn": unblockOnAll
    };
    policyConfig["_till_responded"] = predefinedNone;
    policyConfig["_till_accepted"] = defaultPolicy;
    policyConfig["_auto_reject"] = rejectAllOnZero;
    if (policyConfig && policyConfig["default"]) {
      return policyConfig;
    }
    policyConfig["default"] = defaultPolicy;
    return policyConfig;
  }

  // src/core/data-structures/observable.js
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
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck4(this, Observable2);
      this.handlers_ = null;
    }
    _createClass3(Observable2, [{
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
        for (var _iterator = _createForOfIteratorHelperLoose(this.handlers_), _step; !(_step = _iterator()).done; ) {
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

  // extensions/amp-consent/0.1/consent-policy-manager.js
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
  var CONSENT_STATE_MANAGER = "consentStateManager";
  var TAG3 = "consent-policy-manager";
  var ALLOWLIST_POLICY = {
    "default": true,
    "_till_responded": true,
    "_till_accepted": true,
    "_auto_reject": true
  };
  var ConsentPolicyManager = /* @__PURE__ */ function() {
    function ConsentPolicyManager2(ampdoc) {
      _classCallCheck5(this, ConsentPolicyManager2);
      this.ampdoc_ = ampdoc;
      this.policyInstancesDeferred_ = map();
      this.instances_ = map();
      this.ConsentStateManagerPromise_ = getServicePromiseForDoc(this.ampdoc_, CONSENT_STATE_MANAGER);
      this.consentPromptInitiated_ = new Deferred();
      var consentValueInitiated = new Deferred();
      this.consentValueInitiatedPromise_ = consentValueInitiated.promise;
      this.consentValueInitiatedResolver_ = consentValueInitiated.resolve;
      this.consentStateChangeObservables_ = new Observable();
      this.consentInstanceIdDepr_ = null;
      this.consentState_ = null;
      this.consentString_ = null;
      this.consentMetadata_ = null;
      this.purposeConsents_ = null;
      this.tcfConsentChangeHandler_ = null;
    }
    _createClass4(ConsentPolicyManager2, [{
      key: "setLegacyConsentInstanceId",
      value: function setLegacyConsentInstanceId(consentInstanceId) {
        this.consentInstanceIdDepr_ = consentInstanceId;
        this.init_();
      }
    }, {
      key: "registerConsentPolicyInstance",
      value: function registerConsentPolicyInstance(policyId, config) {
        var _this = this;
        if (this.instances_[policyId]) {
          return;
        }
        var waitFor = Object.keys(config["waitFor"] || {});
        if (waitFor.length !== 1 || waitFor[0] !== this.consentInstanceIdDepr_) {
          user().error(TAG3, "invalid waitFor value, consent policy will never resolve");
          return;
        }
        var instance = new ConsentPolicyInstance(config);
        this.instances_[policyId] = instance;
        if (this.policyInstancesDeferred_[policyId]) {
          this.policyInstancesDeferred_[policyId].resolve();
          this.policyInstancesDeferred_[policyId] = null;
        }
        this.consentValueInitiatedPromise_.then(function() {
          if (_this.consentState_) {
            instance.evaluate(_this.consentState_);
          }
          _this.consentStateChangeObservables_.add(function(state) {
            instance.evaluate(state);
          });
          _this.consentPromptInitiated_.promise.then(function() {
            instance.startTimeout(_this.ampdoc_.win);
          });
        });
      }
    }, {
      key: "init_",
      value: function init_() {
        var _this2 = this;
        this.ConsentStateManagerPromise_.then(function(manager) {
          manager.whenConsentReady().then(function() {
            manager.onConsentStateChange(function(info) {
              _this2.consentStateChangeHandler_(info);
              if (_this2.consentValueInitiatedResolver_) {
                _this2.consentValueInitiatedResolver_();
                _this2.consentValueInitiatedResolver_ = null;
              }
            });
          });
        });
      }
    }, {
      key: "enableTimeout",
      value: function enableTimeout() {
        this.consentPromptInitiated_.resolve();
      }
    }, {
      key: "consentStateChangeHandler_",
      value: function consentStateChangeHandler_(info) {
        var state = info["consentState"];
        var consentStr = info["consentString"];
        var consentMetadata = info["consentMetadata"];
        var purposeConsents = info["purposeConsents"];
        var prevConsentMetadata = this.consentMetadata_, prevConsentStr = this.consentString_, prevPurposeConsents = this.purposeConsents_;
        this.consentString_ = consentStr;
        this.consentMetadata_ = consentMetadata;
        this.purposeConsents_ = purposeConsents;
        if (state === CONSENT_ITEM_STATE.UNKNOWN) {
          return;
        }
        if (state == CONSENT_ITEM_STATE.NOT_REQUIRED) {
          var shouldOverwrite = this.consentState_ != CONSENT_ITEM_STATE.ACCEPTED && this.consentState_ != CONSENT_ITEM_STATE.REJECTED;
          if (shouldOverwrite) {
            this.consentState_ = CONSENT_ITEM_STATE.NOT_REQUIRED;
          }
        } else if (state == CONSENT_ITEM_STATE.DISMISSED) {
          if (this.consentState_ === null) {
            this.consentState_ = CONSENT_ITEM_STATE.UNKNOWN;
          }
          this.consentString_ = prevConsentStr;
          this.consentMetadata_ = prevConsentMetadata;
          this.purposeConsents_ = prevPurposeConsents;
        } else {
          this.consentState_ = state;
        }
        this.consentStateChangeObservables_.fire(this.consentState_);
        if (this.tcfConsentChangeHandler_) {
          this.tcfConsentChangeHandler_();
        }
      }
    }, {
      key: "setOnPolicyChange",
      value: function setOnPolicyChange(callback) {
        if (!this.tcfConsentChangeHandler_) {
          this.tcfConsentChangeHandler_ = callback;
        }
      }
    }, {
      key: "whenPolicyResolved",
      value: function whenPolicyResolved(policyId) {
        var _this3 = this;
        if (!ALLOWLIST_POLICY[policyId]) {
          user().error(TAG3, "can not find policy %s, only predefined policies are supported", policyId);
          return Promise.resolve(CONSENT_POLICY_STATE.UNKNOWN);
        }
        return this.whenPolicyInstanceRegistered_(policyId).then(function() {
          return _this3.instances_[policyId].getReadyPromise().then(function() {
            return _this3.instances_[policyId].getCurrentPolicyStatus();
          });
        });
      }
    }, {
      key: "whenPolicyUnblock",
      value: function whenPolicyUnblock(policyId) {
        var _this4 = this;
        if (!ALLOWLIST_POLICY[policyId]) {
          user().error(TAG3, "can not find policy %s, only predefined policies are supported", policyId);
          return Promise.resolve(false);
        }
        return this.whenPolicyInstanceRegistered_(policyId).then(function() {
          return _this4.instances_[policyId].getReadyPromise().then(function() {
            return _this4.instances_[policyId].shouldUnblock();
          });
        });
      }
    }, {
      key: "getMergedSharedData",
      value: function getMergedSharedData(policyId) {
        var _this5 = this;
        return this.whenPolicyResolved(policyId).then(function() {
          return _this5.ConsentStateManagerPromise_;
        }).then(function(manager) {
          return manager.getConsentInstanceSharedData();
        });
      }
    }, {
      key: "getConsentStringInfo",
      value: function getConsentStringInfo(policyId) {
        var _this6 = this;
        return this.whenPolicyResolved(policyId).then(function() {
          return _this6.consentString_;
        });
      }
    }, {
      key: "getConsentMetadataInfo",
      value: function getConsentMetadataInfo(policyId) {
        var _this7 = this;
        return this.whenPolicyResolved(policyId).then(function() {
          return _this7.consentMetadata_;
        });
      }
    }, {
      key: "whenPurposesUnblock",
      value: function whenPurposesUnblock(purposes) {
        var _this8 = this;
        return this.ConsentStateManagerPromise_.then(function(manager) {
          return manager.whenHasAllPurposeConsents();
        }).then(function() {
          if (!_this8.purposeConsents_) {
            return false;
          }
          var shouldUnblock = function shouldUnblock2(purpose) {
            return hasOwn(_this8.purposeConsents_, purpose) && _this8.purposeConsents_[purpose] === PURPOSE_CONSENT_STATE.ACCEPTED;
          };
          return purposes.every(shouldUnblock);
        });
      }
    }, {
      key: "whenPolicyInstanceRegistered_",
      value: function whenPolicyInstanceRegistered_(policyId) {
        if (this.instances_[policyId]) {
          return resolvedPromise();
        }
        if (!this.policyInstancesDeferred_[policyId]) {
          this.policyInstancesDeferred_[policyId] = new Deferred();
        }
        return this.policyInstancesDeferred_[policyId].promise;
      }
    }]);
    return ConsentPolicyManager2;
  }();
  var ConsentPolicyInstance = /* @__PURE__ */ function() {
    function ConsentPolicyInstance2(config) {
      _classCallCheck5(this, ConsentPolicyInstance2);
      this.config_ = config;
      var readyDeferred = new Deferred();
      this.readyPromise_ = readyDeferred.promise;
      this.readyResolver_ = readyDeferred.resolve;
      this.status_ = CONSENT_POLICY_STATE.UNKNOWN;
      this.unblockStateLists_ = config["unblockOn"] || [CONSENT_POLICY_STATE.SUFFICIENT, CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED];
    }
    _createClass4(ConsentPolicyInstance2, [{
      key: "startTimeout",
      value: function startTimeout(win) {
        var _this9 = this;
        var timeoutConfig = this.config_["timeout"];
        var timeoutSecond = null;
        var fallbackState;
        if (timeoutConfig != void 0) {
          if (isObject(timeoutConfig)) {
            if (timeoutConfig["fallbackAction"] && timeoutConfig["fallbackAction"] == "reject") {
              fallbackState = CONSENT_ITEM_STATE.REJECTED;
            } else if (timeoutConfig["fallbackAction"] && timeoutConfig["fallbackAction"] != "dismiss") {
              user().error(TAG3, "unsupported fallbackAction %s", timeoutConfig["fallbackAction"]);
            }
            timeoutSecond = timeoutConfig["seconds"];
          } else {
            timeoutSecond = timeoutConfig;
          }
          userAssert(isFiniteNumber(timeoutSecond), "invalid timeout value %s", timeoutSecond);
        }
        if (timeoutSecond != null) {
          win.setTimeout(function() {
            fallbackState = fallbackState || CONSENT_ITEM_STATE.UNKNOWN;
            _this9.evaluate(fallbackState, true);
          }, timeoutSecond * 1e3);
        }
      }
    }, {
      key: "evaluate",
      value: function evaluate(state, isFallback) {
        if (isFallback === void 0) {
          isFallback = false;
        }
        if (!state) {
          return;
        }
        if (isFallback && !this.readyResolver_) {
          return;
        }
        if (state === CONSENT_ITEM_STATE.ACCEPTED) {
          this.status_ = CONSENT_POLICY_STATE.SUFFICIENT;
        } else if (state === CONSENT_ITEM_STATE.REJECTED) {
          this.status_ = CONSENT_POLICY_STATE.INSUFFICIENT;
        } else if (state === CONSENT_ITEM_STATE.NOT_REQUIRED) {
          this.status_ = CONSENT_POLICY_STATE.UNKNOWN_NOT_REQUIRED;
        } else {
          this.status_ = CONSENT_POLICY_STATE.UNKNOWN;
        }
        if (this.readyResolver_) {
          this.readyResolver_();
          this.readyResolver_ = null;
        }
      }
    }, {
      key: "getReadyPromise",
      value: function getReadyPromise() {
        return this.readyPromise_;
      }
    }, {
      key: "getCurrentPolicyStatus",
      value: function getCurrentPolicyStatus() {
        return this.status_;
      }
    }, {
      key: "shouldUnblock",
      value: function shouldUnblock() {
        return this.unblockStateLists_.indexOf(this.status_) > -1;
      }
    }]);
    return ConsentPolicyInstance2;
  }();

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck6(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass5(LruCache2, [{
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

  // extensions/amp-consent/0.1/consent-state-manager.js
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
  var TAG4 = "CONSENT-STATE-MANAGER";
  var ConsentStateManager = /* @__PURE__ */ function() {
    function ConsentStateManager2(ampdoc) {
      _classCallCheck7(this, ConsentStateManager2);
      this.ampdoc_ = ampdoc;
      this.instanceId_ = null;
      this.instance_ = null;
      this.consentChangeHandler_ = null;
      this.consentReadyPromise_ = null;
      this.consentReadyResolver_ = null;
      this.purposeConsents_ = void 0;
      var allPurposeConsentsDeferred = new Deferred();
      this.hasAllPurposeConsentsResolver_ = allPurposeConsentsDeferred.resolve;
      this.hasAllPurposeConsentsPromise_ = allPurposeConsentsDeferred.promise;
    }
    _createClass6(ConsentStateManager2, [{
      key: "registerConsentInstance",
      value: function registerConsentInstance(instanceId, config) {
        if (this.instance_) {
          dev().error(TAG4, "Cannot register consent instance %s, instance %s has already been registered.", instanceId, this.instanceId_);
          return;
        }
        this.instanceId_ = instanceId;
        this.instance_ = new ConsentInstance(this.ampdoc_, instanceId, config);
        if (this.consentReadyResolver_) {
          this.consentReadyResolver_();
          this.consentReadyResolver_ = null;
        }
      }
    }, {
      key: "updateConsentInstanceState",
      value: function updateConsentInstanceState(state, consentStr, opt_consentMetadata) {
        if (!this.instance_) {
          dev().error(TAG4, "instance not registered");
          return;
        }
        this.instance_.update(state, consentStr, this.purposeConsents_, opt_consentMetadata, false);
        if (this.consentChangeHandler_) {
          this.consentChangeHandler_(constructConsentInfo(state, consentStr, opt_consentMetadata, this.purposeConsents_));
          this.hasAllPurposeConsents();
        }
      }
    }, {
      key: "updateConsentInstancePurposes",
      value: function updateConsentInstancePurposes(purposeMap, defaultsOnly) {
        var _this = this;
        if (defaultsOnly === void 0) {
          defaultsOnly = false;
        }
        if (!this.purposeConsents_) {
          this.purposeConsents_ = {};
        }
        var purposes = Object.keys(purposeMap);
        purposes.forEach(function(purpose) {
          if (defaultsOnly && hasOwn(_this.purposeConsents_, purpose)) {
            return;
          }
          var value = !!purposeMap[purpose] ? PURPOSE_CONSENT_STATE.ACCEPTED : PURPOSE_CONSENT_STATE.REJECTED;
          _this.purposeConsents_[purpose] = value;
        });
      }
    }, {
      key: "getLastConsentInstanceInfo",
      value: function getLastConsentInstanceInfo() {
        devAssert(this.instance_, "%s: cannot find the instance", TAG4);
        return this.instance_.get();
      }
    }, {
      key: "getConsentInstanceInfo",
      value: function getConsentInstanceInfo() {
        devAssert(this.instance_, "%s: cannot find the instance", TAG4);
        return this.instance_.get().then(function(info) {
          if (hasDirtyBit(info)) {
            return constructConsentInfo(CONSENT_ITEM_STATE.UNKNOWN);
          }
          return info;
        });
      }
    }, {
      key: "onConsentStateChange",
      value: function onConsentStateChange(handler) {
        devAssert(this.instance_, "%s: cannot find the instance", TAG4);
        devAssert(!this.consentChangeHandler_, "%s: Duplicate consent change handler, will be ignored", TAG4);
        this.consentChangeHandler_ = handler;
        this.getConsentInstanceInfo().then(function(info) {
          handler(info);
        });
      }
    }, {
      key: "setConsentInstanceSharedData",
      value: function setConsentInstanceSharedData(sharedDataPromise) {
        devAssert(this.instance_, "%s: cannot find the instance", TAG4);
        this.instance_.sharedDataPromise = sharedDataPromise;
      }
    }, {
      key: "hasAllPurposeConsents",
      value: function hasAllPurposeConsents() {
        this.hasAllPurposeConsentsResolver_();
      }
    }, {
      key: "whenHasAllPurposeConsents",
      value: function whenHasAllPurposeConsents() {
        return this.hasAllPurposeConsentsPromise_;
      }
    }, {
      key: "setDirtyBit",
      value: function setDirtyBit() {
        this.instance_.setDirtyBit();
      }
    }, {
      key: "getConsentInstanceSharedData",
      value: function getConsentInstanceSharedData() {
        devAssert(this.instance_, "%s: cannot find the instance", TAG4);
        return this.instance_.sharedDataPromise;
      }
    }, {
      key: "whenConsentReady",
      value: function whenConsentReady() {
        if (this.instance_) {
          return resolvedPromise();
        }
        if (!this.consentReadyPromise_) {
          var deferred = new Deferred();
          this.consentReadyPromise_ = deferred.promise;
          this.consentReadyResolver_ = deferred.resolve;
        }
        return this.consentReadyPromise_;
      }
    }, {
      key: "getSavedInstanceForTesting",
      value: function getSavedInstanceForTesting() {
        return this.instance_.savedConsentInfo_;
      }
    }]);
    return ConsentStateManager2;
  }();
  var ConsentInstance = /* @__PURE__ */ function() {
    function ConsentInstance2(ampdoc, id, config) {
      _classCallCheck7(this, ConsentInstance2);
      this.ampdoc_ = ampdoc;
      this.id_ = id;
      this.sharedDataPromise = null;
      this.storagePromise_ = Services.storageForTopLevelDoc(ampdoc);
      this.localConsentInfo_ = null;
      this.savedConsentInfo_ = null;
      this.storageKey_ = "amp-consent:" + id;
      this.onUpdateHref_ = config["onUpdateHref"] || null;
      if (this.onUpdateHref_) {
        assertHttpsUrl(this.onUpdateHref_, "AMP-CONSENT");
      }
      this.hasDirtyBitNext_ = void 0;
    }
    _createClass6(ConsentInstance2, [{
      key: "setDirtyBit",
      value: function setDirtyBit() {
        var _this2 = this;
        this.hasDirtyBitNext_ = true;
        return this.get().then(function(info) {
          if (hasDirtyBit(info)) {
            return;
          }
          _this2.update(info["consentState"], info["consentString"], info["purposeConsents"], info["consentMetadata"], true);
        });
      }
    }, {
      key: "update",
      value: function update(state, consentString, purposeConsents, opt_consentMetadata, opt_systemUpdate) {
        var localState = this.localConsentInfo_ && this.localConsentInfo_["consentState"];
        var calculatedState = recalculateConsentStateValue(state, localState);
        if (state === CONSENT_ITEM_STATE.DISMISSED) {
          var _this$localConsentInf, _this$localConsentInf2, _this$localConsentInf3;
          this.localConsentInfo_ = constructConsentInfo(calculatedState, (_this$localConsentInf = this.localConsentInfo_) == null ? void 0 : _this$localConsentInf.consentString, (_this$localConsentInf2 = this.localConsentInfo_) == null ? void 0 : _this$localConsentInf2.consentMetadata, (_this$localConsentInf3 = this.localConsentInfo_) == null ? void 0 : _this$localConsentInf3.purposeConsents);
          return;
        }
        var oldValue = this.localConsentInfo_;
        if (opt_systemUpdate && hasDirtyBit(oldValue)) {
          this.localConsentInfo_ = constructConsentInfo(calculatedState, consentString, opt_consentMetadata, purposeConsents, true);
        } else {
          this.localConsentInfo_ = constructConsentInfo(calculatedState, consentString, opt_consentMetadata, purposeConsents);
        }
        var newConsentInfo = constructConsentInfo(calculatedState, consentString, opt_consentMetadata, purposeConsents, this.hasDirtyBitNext_);
        if (isConsentInfoStoredValueSame(newConsentInfo, this.savedConsentInfo_)) {
          return;
        }
        this.updateStoredValue_(newConsentInfo);
      }
    }, {
      key: "updateStoredValue_",
      value: function updateStoredValue_(consentInfo) {
        var _this3 = this;
        this.storagePromise_.then(function(storage) {
          if (!isConsentInfoStoredValueSame(consentInfo, _this3.localConsentInfo_, _this3.hasDirtyBitNext_)) {
            return;
          }
          if (consentInfo["consentState"] === CONSENT_ITEM_STATE.UNKNOWN) {
            storage.remove(_this3.storageKey_);
            return;
          }
          var value = composeStoreValue(consentInfo);
          if (value == null) {
            return;
          }
          _this3.savedConsentInfo_ = consentInfo;
          storage.setNonBoolean(_this3.storageKey_, value);
          _this3.sendUpdateHrefRequest_(consentInfo);
        });
      }
    }, {
      key: "get",
      value: function get() {
        var _this4 = this;
        if (this.localConsentInfo_) {
          return Promise.resolve(this.localConsentInfo_);
        }
        var storage;
        return this.storagePromise_.then(function(s) {
          storage = s;
          return storage.get(_this4.storageKey_);
        }).then(function(storedValue) {
          if (_this4.localConsentInfo_) {
            return _this4.localConsentInfo_;
          }
          var consentInfo = getStoredConsentInfo(storedValue);
          _this4.savedConsentInfo_ = consentInfo;
          if (hasDirtyBit(consentInfo)) {
            _this4.sendUpdateHrefRequest_(constructConsentInfo(CONSENT_ITEM_STATE.UNKNOWN));
            storage.remove(_this4.storageKey_);
            _this4.savedConsentInfo_ = null;
          }
          _this4.localConsentInfo_ = consentInfo;
          return _this4.localConsentInfo_;
        }).catch(function(e) {
          dev().error(TAG4, "Failed to read storage", e);
          return constructConsentInfo(CONSENT_ITEM_STATE.UNKNOWN);
        });
      }
    }, {
      key: "sendUpdateHrefRequest_",
      value: function sendUpdateHrefRequest_(consentInfo) {
        var _this5 = this;
        if (!this.onUpdateHref_) {
          return;
        }
        if (hasDirtyBit(consentInfo)) {
          return;
        }
        var legacyConsentState = calculateLegacyStateValue(consentInfo["consentState"]);
        getConsentCID(this.ampdoc_).then(function(userId) {
          var request = {
            "consentInstanceId": _this5.id_,
            "ampUserId": userId
          };
          if (legacyConsentState != null) {
            request["consentState"] = legacyConsentState;
          }
          request["consentStateValue"] = getConsentStateValue(consentInfo["consentState"]);
          if (consentInfo["consentString"]) {
            request["consentString"] = consentInfo["consentString"];
          }
          if (consentInfo["consentMetadata"]) {
            request["consentMetadata"] = consentInfo["consentMetadata"];
          }
          if (consentInfo["purposeConsents"]) {
            request["purposeConsents"] = consentInfo["purposeConsents"];
          }
          var init = {
            credentials: "include",
            method: "POST",
            body: request,
            ampCors: false
          };
          _this5.ampdoc_.whenFirstVisible().then(function() {
            expandConsentEndpointUrl(_this5.ampdoc_.getHeadNode(), _this5.onUpdateHref_).then(function(expandedUpdateHref) {
              Services.xhrFor(_this5.ampdoc_.win).fetchJson(expandedUpdateHref, init);
            });
          });
        });
      }
    }]);
    return ConsentInstance2;
  }();

  // src/event-helper.js
  function getData(event) {
    return event.data;
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
  var TAG5 = "EXPERIMENTS";
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
      dev().warn(TAG5, "Failed to retrieve experiments from localStorage.");
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
  function setStyles(element, styles) {
    for (var k in styles) {
      setStyle(element, k, styles[k]);
    }
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

  // extensions/amp-consent/0.1/consent-ui.js
  var _templateObject;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
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
  var TAG6 = "amp-consent-ui";
  var CONSENT_STATE_MANAGER2 = "consentStateManager";
  var MINIMUM_INITIAL_HEIGHT = 10;
  var DEFAULT_INITIAL_HEIGHT = 30;
  var MODAL_HEIGHT_ENABLED = 60;
  var MAX_INITIAL_HEIGHT = 80;
  var DEFAULT_ENABLE_BORDER = true;
  var FULLSCREEN_SUCCESS = "Entering fullscreen.";
  var FULLSCREEN_ERROR = "Could not enter fullscreen. Fullscreen is only supported when the iframe is visible as a bottom sheet and after user interaction.";
  var CONSENT_PROMPT_CAPTION = "User Consent Prompt";
  var BUTTON_ACTION_CAPTION = "Focus Prompt";
  var CANCEL_OVERLAY = "cancelFullOverlay";
  var REQUEST_OVERLAY = "requestFullOverlay";
  var IFRAME_RUNNING_TIMEOUT = 1e3;
  var actionState = {
    error: "error",
    success: "success"
  };
  var ampConsentMessageType = {
    response: "amp-consent-response"
  };
  var consentUiClasses = {
    iframeFullscreen: "i-amphtml-consent-ui-iframe-fullscreen",
    iframeActive: "i-amphtml-consent-ui-iframe-active",
    modal: "i-amphtml-consent-ui-modal",
    in: "i-amphtml-consent-ui-in",
    loading: "i-amphtml-consent-ui-loading",
    fill: "i-amphtml-consent-ui-fill",
    placeholder: "i-amphtml-consent-ui-placeholder",
    mask: "i-amphtml-consent-ui-mask",
    borderEnabled: "i-amphtml-consent-ui-border-enabled",
    screenReaderDialog: "i-amphtml-consent-alertdialog",
    iframeTransform: "i-amphtml-consent-ui-iframe-transform"
  };
  var ConsentUI = /* @__PURE__ */ function() {
    function ConsentUI2(baseInstance, config, opt_postPromptUI) {
      _classCallCheck8(this, ConsentUI2);
      this.baseInstance_ = baseInstance;
      this.isCreatedIframe_ = false;
      this.isPostPrompt_ = false;
      this.isVisible_ = false;
      this.isIframeVisible_ = false;
      this.isFullscreen_ = false;
      this.ui_ = null;
      this.overlayEnabled_ = config["uiConfig"] && config["uiConfig"]["overlay"] === true;
      this.consentPromptCaption_ = config["captions"] && config["captions"]["consentPromptCaption"] || CONSENT_PROMPT_CAPTION;
      this.buttonActionCaption_ = config["captions"] && config["captions"]["buttonActionCaption"] || BUTTON_ACTION_CAPTION;
      this.srAlertShown_ = false;
      this.scrollEnabled_ = true;
      this.maskElement_ = null;
      this.srAlert_ = null;
      this.elementWithFocusBeforeShowing_ = null;
      this.ampdoc_ = baseInstance.getAmpDoc();
      this.viewport_ = Services.viewportForDoc(this.ampdoc_);
      this.viewer_ = Services.viewerForDoc(this.ampdoc_);
      this.parent_ = baseInstance.element;
      this.win_ = baseInstance.win;
      this.document_ = this.win_.document;
      this.iframeReady_ = null;
      this.removeIframe_ = false;
      this.clientConfig_ = null;
      this.placeholder_ = null;
      this.initialHeight_ = DEFAULT_INITIAL_HEIGHT + "vh";
      this.borderEnabled_ = DEFAULT_ENABLE_BORDER;
      this.modalEnabled_ = false;
      this.isActionPromptTrigger_ = false;
      this.boundHandleIframeMessages_ = this.handleIframeMessages_.bind(this);
      this.promptUISrcPromise_ = null;
      this.isGranularConsentExperimentOn_ = isExperimentOn(this.win_, "amp-consent-granular-consent");
      this.init_(config, opt_postPromptUI);
    }
    _createClass7(ConsentUI2, [{
      key: "init_",
      value: function init_(config, opt_postPromptUI) {
        if (opt_postPromptUI) {
          var postPromptUI = this.ampdoc_.getElementById(opt_postPromptUI);
          if (!postPromptUI) {
            user().error(TAG6, "postPromptUI element with id=%s not found", opt_postPromptUI);
          }
          this.ui_ = dev().assertElement(postPromptUI);
          this.isPostPrompt_ = true;
          return;
        }
        var promptUI = config["promptUI"];
        var promptUISrc = config["promptUISrc"];
        if (promptUI) {
          var promptElement = this.ampdoc_.getElementById(promptUI);
          if (!promptElement || !this.parent_.contains(promptElement)) {
            user().error(TAG6, "child element of <amp-consent> with promptUI id %s not found", promptUI);
          }
          this.ui_ = dev().assertElement(promptElement);
        } else if (promptUISrc) {
          this.isCreatedIframe_ = true;
          assertHttpsUrl(promptUISrc, this.parent_);
          this.promptUISrcPromise_ = expandConsentEndpointUrl(this.parent_, promptUISrc);
          this.ui_ = this.createPromptIframe_(promptUISrc);
          this.placeholder_ = this.createPlaceholder_();
          this.clientConfig_ = config["clientConfig"] || null;
        }
      }
    }, {
      key: "show",
      value: function show(isActionPromptTrigger) {
        var _this = this;
        if (!this.ui_) {
          return;
        }
        if (this.isPostPrompt_ && !this.parent_.contains(this.ui_)) {
          toggle(this.ui_, true);
          return;
        }
        toggle(dev().assertElement(this.parent_), true);
        var classList = this.parent_.classList;
        classList.add("amp-active");
        classList.remove("amp-hidden");
        this.baseInstance_.getViewport().addToFixedLayer(this.parent_);
        if (this.isCreatedIframe_ && this.promptUISrcPromise_) {
          this.isActionPromptTrigger_ = isActionPromptTrigger;
          this.loadIframe_().then(function() {
            _this.baseInstance_.mutateElement(function() {
              if (!_this.isPostPrompt_) {
                _this.elementWithFocusBeforeShowing_ = _this.document_.activeElement;
              }
              _this.maybeShowOverlay_();
              _this.maybeShowSrAlert_();
              _this.showIframe_();
            });
          });
        } else {
          var show2 = function show3() {
            if (!_this.ui_) {
              return;
            }
            toggle(_this.ui_, true);
            if (!_this.isPostPrompt_) {
              _this.elementWithFocusBeforeShowing_ = _this.document_.activeElement;
              _this.maybeShowOverlay_();
              _this.resume();
              _this.ui_.focus();
            }
          };
          if (isAmpElement(this.ui_)) {
            whenUpgradedToCustomElement(this.ui_).then(function() {
              return _this.ui_.build();
            }).then(function() {
              return show2();
            });
          } else {
            show2();
          }
        }
        this.isVisible_ = true;
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this2 = this;
        if (!this.ui_) {
          return;
        }
        this.pause();
        this.baseInstance_.mutateElement(function() {
          if (_this2.isCreatedIframe_) {
            _this2.resetIframe_();
          }
          if (!_this2.isPostPrompt_) {
            var classList = _this2.parent_.classList;
            classList.remove("amp-active");
            classList.add("amp-hidden");
          }
          _this2.maybeHideOverlay_();
          _this2.maybeRemoveSrAlert_();
          _this2.enableScroll_();
          _this2.resetAnimationStyles_();
          _this2.baseInstance_.getViewport().removeFromFixedLayer(_this2.parent_);
          toggle(dev().assertElement(_this2.ui_), false);
          _this2.isVisible_ = false;
          if (_this2.elementWithFocusBeforeShowing_) {
            _this2.elementWithFocusBeforeShowing_.focus();
            _this2.elementWithFocusBeforeShowing_ = null;
          } else if (_this2.win_.document.body.children.length > 0) {
            _this2.win_.document.body.children[0].focus();
          }
        });
      }
    }, {
      key: "pause",
      value: function pause() {
        if (this.ui_) {
          Services.ownersForDoc(this.baseInstance_.element).schedulePause(this.baseInstance_.element, this.ui_);
        }
      }
    }, {
      key: "resume",
      value: function resume() {
        if (this.ui_) {
          Services.ownersForDoc(this.baseInstance_.element).scheduleLayout(this.baseInstance_.element, this.ui_);
          Services.ownersForDoc(this.baseInstance_.element).scheduleResume(this.baseInstance_.element, this.ui_);
        }
      }
    }, {
      key: "handleReady_",
      value: function handleReady_(data) {
        this.initialHeight_ = DEFAULT_INITIAL_HEIGHT + "vh";
        this.borderEnabled_ = DEFAULT_ENABLE_BORDER;
        this.modalEnabled_ = false;
        if (data["initialHeight"]) {
          if (typeof data["initialHeight"] === "string" && data["initialHeight"].indexOf("vh") >= 0) {
            var dataHeight = parseInt(data["initialHeight"], 10);
            this.initialHeight_ = dataHeight >= MAX_INITIAL_HEIGHT ? MAX_INITIAL_HEIGHT + "vh" : this.initialHeight_;
            if (dataHeight >= MINIMUM_INITIAL_HEIGHT && dataHeight <= MAX_INITIAL_HEIGHT) {
              this.initialHeight_ = dataHeight + "vh";
              this.modalEnabled_ = dataHeight > MODAL_HEIGHT_ENABLED;
              this.overlayEnabled_ = this.modalEnabled_ || this.overlayEnabled_;
            } else {
              user().error(TAG6, "Inavlid initial height: " + data["initialHeight"] + "." + ("Minimum: " + MINIMUM_INITIAL_HEIGHT + "vh. Maximum: " + MAX_INITIAL_HEIGHT + "vh."));
            }
          } else {
            user().error(TAG6, "Inavlid initial height: " + data["initialHeight"] + '.Must be a string in "vh" units.');
          }
        }
        if (data["border"] === false && !this.modalEnabled_) {
          this.borderEnabled_ = false;
        }
        this.iframeReady_.resolve();
      }
    }, {
      key: "enterFullscreen_",
      value: function enterFullscreen_() {
        if (!this.ui_ || !this.isVisible_ || this.isFullscreen_) {
          return;
        }
        this.resetAnimationStyles_();
        this.sendViewerEvent_(REQUEST_OVERLAY);
        var classList = this.parent_.classList;
        classList.add(consentUiClasses.iframeFullscreen);
        this.disableScroll_();
        this.isFullscreen_ = true;
      }
    }, {
      key: "sendViewerEvent_",
      value: function sendViewerEvent_(event) {
        this.viewer_.sendMessage(event, dict(), true);
      }
    }, {
      key: "createPromptIframe_",
      value: function createPromptIframe_(promptUISrc) {
        var iframe = this.parent_.ownerDocument.createElement("iframe");
        var sandbox = ["allow-scripts", "allow-popups"];
        var allowSameOrigin = this.allowSameOrigin_(promptUISrc);
        if (allowSameOrigin) {
          sandbox.push("allow-same-origin");
        }
        iframe.setAttribute("sandbox", sandbox.join(" "));
        var classList = iframe.classList;
        classList.add(consentUiClasses.fill);
        return iframe;
      }
    }, {
      key: "allowSameOrigin_",
      value: function allowSameOrigin_(src) {
        var urlService = Services.urlForDoc(this.parent_);
        var srcUrl = urlService.parse(src);
        var containerUrl = urlService.parse(this.ampdoc_.getUrl());
        return srcUrl.origin != containerUrl.origin;
      }
    }, {
      key: "createPlaceholder_",
      value: function createPlaceholder_() {
        var placeholder = this.parent_.ownerDocument.createElement("placeholder");
        toggle(placeholder, false);
        placeholder.classList.add(consentUiClasses.placeholder);
        var loadingSpinner = htmlFor(placeholder)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n      <svg viewBox="0 0 40 40">\n        <defs>\n          <linearGradient id="grad">\n            <stop stop-color="rgb(105, 105, 105)"></stop>\n            <stop offset="100%"\n            stop-color="rgb(105, 105, 105)"\n            stop-opacity="0"></stop>\n          </linearGradient>\n        </defs>\n        <path d="M11,4.4 A18,18, 0,1,0, 38,20" stroke="url(#grad)"></path>\n      </svg>'])));
        placeholder.appendChild(loadingSpinner);
        return placeholder;
      }
    }, {
      key: "getClientInfoPromise_",
      value: function getClientInfoPromise_() {
        var _this3 = this;
        var consentStatePromise = getServicePromiseForDoc(this.ampdoc_, CONSENT_STATE_MANAGER2);
        return consentStatePromise.then(function(consentStateManager) {
          return consentStateManager.getLastConsentInstanceInfo().then(function(consentInfo) {
            var returnValue = dict({
              "clientConfig": _this3.clientConfig_,
              "consentState": getConsentStateValue(consentInfo["consentState"]),
              "consentStateValue": getConsentStateValue(consentInfo["consentState"]),
              "consentMetadata": consentInfo["consentMetadata"],
              "consentString": consentInfo["consentString"],
              "promptTrigger": _this3.isActionPromptTrigger_ ? "action" : "load",
              "isDirty": !!consentInfo["isDirty"]
            });
            if (_this3.isGranularConsentExperimentOn_) {
              returnValue["purposeConsents"] = consentInfo["purposeConsents"];
            }
            return returnValue;
          });
        });
      }
    }, {
      key: "loadIframe_",
      value: function loadIframe_() {
        var _this4 = this;
        this.iframeReady_ = new Deferred();
        var classList = this.parent_.classList;
        if (!elementByTag(this.parent_, "placeholder")) {
          insertAtStart(this.parent_, dev().assertElement(this.placeholder_));
        }
        classList.add(consentUiClasses.loading);
        toggle(dev().assertElement(this.ui_), false);
        var iframePromise = this.promptUISrcPromise_.then(function(expandedSrc) {
          _this4.removeIframe_ = false;
          _this4.ui_.src = expandedSrc;
          return _this4.getClientInfoPromise_().then(function(clientInfo) {
            _this4.ui_.setAttribute("name", JSON.stringify(clientInfo));
            _this4.win_.addEventListener("message", _this4.boundHandleIframeMessages_);
            insertAtStart(_this4.parent_, dev().assertElement(_this4.ui_));
          });
        });
        return Promise.all([iframePromise, this.iframeReady_.promise, this.baseInstance_.mutateElement(function() {
          toggle(dev().assertElement(_this4.placeholder_), true);
        })]);
      }
    }, {
      key: "showIframe_",
      value: function showIframe_() {
        var _this5 = this;
        var classList = this.parent_.classList;
        classList.add(consentUiClasses.iframeActive);
        toggle(dev().assertElement(this.placeholder_), false);
        toggle(dev().assertElement(this.ui_), true);
        if (this.modalEnabled_) {
          classList.add(consentUiClasses.modal);
          tryFocus(dev().assertElement(this.ui_));
        }
        this.resetAnimationStyles_();
        this.baseInstance_.mutateElement(function() {
          classList.remove(consentUiClasses.loading);
          _this5.baseInstance_.mutateElement(function() {
            classList.add(consentUiClasses.in);
            _this5.isIframeVisible_ = true;
            _this5.applyInitialStyles_();
          });
        });
      }
    }, {
      key: "resetIframe_",
      value: function resetIframe_() {
        var _this6 = this;
        var classList = this.parent_.classList;
        classList.remove(consentUiClasses.iframeActive);
        classList.remove(consentUiClasses.modal);
        classList.remove(consentUiClasses.borderEnabled);
        this.win_.removeEventListener("message", this.boundHandleIframeMessages_);
        classList.remove(consentUiClasses.iframeFullscreen);
        if (this.isFullscreen_) {
          this.sendViewerEvent_(CANCEL_OVERLAY);
        } else if (this.modalEnabled_) {
          this.viewport_.leaveLightboxMode();
        }
        this.isFullscreen_ = false;
        classList.remove(consentUiClasses.in);
        this.isIframeVisible_ = false;
        this.ui_.removeAttribute("name");
        toggle(dev().assertElement(this.placeholder_), false);
        this.removeIframe_ = true;
        this.win_.setTimeout(function() {
          if (_this6.removeIframe_) {
            removeElement(dev().assertElement(_this6.ui_));
          }
        }, IFRAME_RUNNING_TIMEOUT);
      }
    }, {
      key: "maybeShowSrAlert_",
      value: function maybeShowSrAlert_() {
        var _this7 = this;
        if (this.srAlertShown_ || this.modalEnabled_) {
          return;
        }
        var alertDialog = this.document_.createElement("div");
        var button = this.document_.createElement("button");
        var titleDiv = this.document_.createElement("div");
        alertDialog.setAttribute("role", "alertdialog");
        titleDiv.textContent = this.consentPromptCaption_;
        button.textContent = this.buttonActionCaption_;
        button.onclick = function() {
          tryFocus(dev().assertElement(_this7.ui_));
        };
        alertDialog.appendChild(titleDiv);
        alertDialog.appendChild(button);
        var classList = alertDialog.classList;
        classList.add(consentUiClasses.screenReaderDialog);
        this.baseInstance_.element.appendChild(alertDialog);
        tryFocus(button);
        this.srAlertShown_ = true;
        this.srAlert_ = alertDialog;
      }
    }, {
      key: "maybeRemoveSrAlert_",
      value: function maybeRemoveSrAlert_() {
        if (this.srAlert_) {
          removeElement(this.srAlert_);
          delete this.srAlert_;
        }
      }
    }, {
      key: "resetAnimationStyles_",
      value: function resetAnimationStyles_() {
        setStyles(this.parent_, {
          transform: "",
          transition: ""
        });
      }
    }, {
      key: "applyInitialStyles_",
      value: function applyInitialStyles_() {
        var classList = this.parent_.classList;
        if (this.ui_) {
          setStyles(this.ui_, {
            height: this.initialHeight_
          });
        }
        setImportantStyles(this.parent_, {
          "--i-amphtml-modal-height": "" + this.initialHeight_
        });
        classList.add(consentUiClasses.iframeTransform);
        if (this.borderEnabled_ || this.modalEnabled_) {
          classList.add(consentUiClasses.borderEnabled);
        }
        if (this.modalEnabled_) {
          this.viewport_.enterLightboxMode();
        }
      }
    }, {
      key: "maybeShowOverlay_",
      value: function maybeShowOverlay_() {
        if (!this.overlayEnabled_) {
          return;
        }
        if (!this.maskElement_) {
          var mask = this.win_.document.createElement("div");
          mask.classList.add(consentUiClasses.mask);
          this.parent_.ownerDocument.body.appendChild(mask);
          this.maskElement_ = mask;
        }
        toggle(this.maskElement_, true);
        this.disableScroll_();
      }
    }, {
      key: "maybeHideOverlay_",
      value: function maybeHideOverlay_() {
        if (!this.overlayEnabled_) {
          return;
        }
        if (this.maskElement_) {
          toggle(this.maskElement_, false);
        }
        this.enableScroll_();
      }
    }, {
      key: "disableScroll_",
      value: function disableScroll_() {
        if (this.scrollEnabled_) {
          this.viewport_.enterOverlayMode();
          this.scrollEnabled_ = false;
        }
      }
    }, {
      key: "enableScroll_",
      value: function enableScroll_() {
        if (!this.scrollEnabled_) {
          this.viewport_.leaveOverlayMode();
          this.scrollEnabled_ = true;
        }
      }
    }, {
      key: "handleIframeMessages_",
      value: function handleIframeMessages_(event) {
        var _this8 = this;
        if (this.ui_.contentWindow !== event.source) {
          return;
        }
        var data = getData(event);
        if (!data || data["type"] != "consent-ui") {
          return;
        }
        var requestAction = data["action"];
        var requestType = data["type"];
        if (requestAction === "ready") {
          this.handleReady_(data);
        }
        if (requestAction === "enter-fullscreen") {
          if (!this.isIframeVisible_ || this.modalEnabled_ || this.document_.activeElement !== this.ui_ && !this.isActionPromptTrigger_) {
            user().warn(TAG6, FULLSCREEN_ERROR);
            this.sendEnterFullscreenResponse_(requestType, requestAction, true);
            return;
          }
          this.sendEnterFullscreenResponse_(requestType, requestAction);
          this.baseInstance_.mutateElement(function() {
            _this8.enterFullscreen_();
          });
        }
      }
    }, {
      key: "sendEnterFullscreenResponse_",
      value: function sendEnterFullscreenResponse_(requestType, requestAction, isError) {
        if (isError === void 0) {
          isError = false;
        }
        this.sendIframeMessage_(ampConsentMessageType.response, requestType, requestAction, isError ? actionState.error : actionState.success, isError ? FULLSCREEN_ERROR : FULLSCREEN_SUCCESS);
      }
    }, {
      key: "sendIframeMessage_",
      value: function sendIframeMessage_(type, requestType, requestAction, state, info) {
        var iframeWindow = this.ui_.contentWindow;
        if (iframeWindow) {
          iframeWindow.postMessage({
            type,
            requestType,
            requestAction,
            state,
            info
          }, "*");
        }
      }
    }]);
    return ConsentUI2;
  }();

  // src/core/window/interface.js
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
  var WindowInterface = /* @__PURE__ */ function() {
    function WindowInterface2() {
      _classCallCheck9(this, WindowInterface2);
    }
    _createClass8(WindowInterface2, null, [{
      key: "getTop",
      value: function getTop(win) {
        return win.top;
      }
    }, {
      key: "getLocation",
      value: function getLocation(win) {
        return win.location;
      }
    }, {
      key: "getDocumentReferrer",
      value: function getDocumentReferrer(win) {
        return win.document.referrer;
      }
    }, {
      key: "getHostname",
      value: function getHostname(win) {
        return win.location.hostname;
      }
    }, {
      key: "getUserAgent",
      value: function getUserAgent(win) {
        return win.navigator.userAgent;
      }
    }, {
      key: "getUserLanguage",
      value: function getUserLanguage(win) {
        return win.navigator["userLanguage"] || win.navigator.language;
      }
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return self.devicePixelRatio || 1;
      }
    }, {
      key: "getSendBeacon",
      value: function getSendBeacon(win) {
        if (!win.navigator.sendBeacon) {
          return void 0;
        }
        return win.navigator.sendBeacon.bind(win.navigator);
      }
    }, {
      key: "getXMLHttpRequest",
      value: function getXMLHttpRequest(win) {
        return win.XMLHttpRequest;
      }
    }, {
      key: "getImage",
      value: function getImage(win) {
        return win.Image;
      }
    }]);
    return WindowInterface2;
  }();

  // src/cookies.js
  var TEST_COOKIE_NAME = "-test-amp-cookie-tmp";
  function getCookie(win, name) {
    var cookieString = tryGetDocumentCookie_(win);
    if (!cookieString) {
      return null;
    }
    var cookies = cookieString.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var eq = cookie.indexOf("=");
      if (eq == -1) {
        continue;
      }
      if (tryDecodeUriComponent(cookie.substring(0, eq).trim()) == name) {
        var value = cookie.substring(eq + 1).trim();
        return tryDecodeUriComponent(value, value);
      }
    }
    return null;
  }
  function tryGetDocumentCookie_(win) {
    try {
      return win.document.cookie;
    } catch (e) {
      return "";
    }
  }
  function setCookie(win, name, value, expirationTime, options) {
    if (options === void 0) {
      options = {};
    }
    checkOriginForSettingCookie(win, options, name);
    var domain = void 0;
    if (options.domain) {
      domain = options.domain;
    } else if (options.highestAvailableDomain) {
      domain = getHighestAvailableDomain(win);
    }
    trySetCookie(win, name, value, expirationTime, domain, options.sameSite, options.secure);
  }
  function getHighestAvailableDomain(win) {
    var metaTag = win.document.head && win.document.head.querySelector("meta[name='amp-cookie-scope']");
    if (metaTag) {
      var cookieScope = metaTag.getAttribute("content") || "";
      var sourceOrigin = getSourceOrigin(win.location.href);
      if (endsWith(sourceOrigin, "." + cookieScope)) {
        return cookieScope;
      } else {
        return sourceOrigin.split("://")[1];
      }
    }
    if (!isProxyOrigin(win.location.href)) {
      var parts = win.location.hostname.split(".");
      var domain = parts[parts.length - 1];
      var testCookieName = getTempCookieName(win);
      for (var i = parts.length - 2; i >= 0; i--) {
        domain = parts[i] + "." + domain;
        trySetCookie(win, testCookieName, "delete", Date.now() + 1e3, domain);
        if (getCookie(win, testCookieName) == "delete") {
          trySetCookie(win, testCookieName, "delete", Date.now() - 1e3, domain);
          return domain;
        }
      }
    }
    return null;
  }
  function trySetCookie(win, name, value, expirationTime, domain, sameSite, secure) {
    if (domain == "ampproject.org") {
      value = "delete";
      expirationTime = 0;
    }
    var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/" + (domain ? "; domain=" + domain : "") + "; expires=" + new Date(expirationTime).toUTCString() + getSameSiteString(win, sameSite) + (secure ? "; Secure" : "");
    try {
      win.document.cookie = cookie;
    } catch (ignore) {
    }
  }
  function getSameSiteString(win, sameSite) {
    if (!sameSite) {
      return "";
    }
    return "; SameSite=" + sameSite;
  }
  function checkOriginForSettingCookie(win, options, name) {
    if (options.allowOnProxyOrigin) {
      userAssert(!options.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
      return;
    }
    userAssert(!isProxyOrigin(win.location.href), "Should never attempt to set cookie on proxy origin: " + name);
    var current = parseUrlDeprecated(win.location.href).hostname.toLowerCase();
    var proxy = parseUrlDeprecated(urls.cdn).hostname.toLowerCase();
    userAssert(!(current == proxy || endsWith(current, "." + proxy)), "Should never attempt to set cookie on proxy origin. (in depth check): " + name);
  }
  function getTempCookieName(win) {
    var testCookieName = TEST_COOKIE_NAME;
    var counter = 0;
    while (getCookie(win, testCookieName)) {
      testCookieName = TEST_COOKIE_NAME + counter;
    }
    return testCookieName;
  }

  // src/service/cid-api.js
  var HOUR = 60 * 60 * 1e3;
  var DAY = 24 * HOUR;
  var YEAR = 365 * DAY;

  // src/core/types/string/bytes.js
  function utf8Decode(bytes) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(bytes);
    }
    var asciiString = bytesToString(new Uint8Array(bytes.buffer || bytes));
    return decodeURIComponent(escape(asciiString));
  }
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
  var base64UrlDecodeSubs = {
    "-": "+",
    "_": "/",
    ".": "="
  };
  function base64UrlDecodeToBytes(str) {
    var encoded = atob(str.replace(/[-_.]/g, function(ch) {
      return base64UrlDecodeSubs[ch];
    }));
    return stringToBytes(encoded);
  }
  function base64UrlDecodeFromString(str) {
    var bytes = base64UrlDecodeToBytes(str);
    return utf8Decode(bytes);
  }

  // src/service/cid-impl.js
  var ONE_DAY_MILLIS = 24 * 3600 * 1e3;
  var BASE_CID_MAX_AGE_MILLIS = 365 * ONE_DAY_MILLIS;

  // extensions/amp-consent/0.1/crc32.js
  var CRC32_KEY = 3988292384;
  var crcTable = null;
  function crc32(str) {
    if (!crcTable) {
      crcTable = makeCrcTable();
    }
    var bytes = utf8Encode(str);
    var crc = -1 >>> 0;
    for (var i = 0; i < bytes.length; i++) {
      var lookupIndex = (crc ^ bytes[i]) & 255;
      crc = crc >>> 8 ^ crcTable[lookupIndex];
    }
    return (crc ^ -1) >>> 0;
  }
  function makeCrcTable() {
    var crcTable2 = new Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var j = 0; j < 8; j++) {
        if (c & 1) {
          c = c >>> 1 ^ CRC32_KEY;
        } else {
          c = c >>> 1;
        }
      }
      crcTable2[i] = c;
    }
    return crcTable2;
  }

  // extensions/amp-consent/0.1/linker.js
  var DELIMITER = "*";
  var KEY_VALIDATOR = /^[a-zA-Z0-9\-_.]+$/;
  var CHECKSUM_OFFSET_MAX_MIN = 1;
  var VALID_VERSION = 1;
  var TAG7 = "amp-analytics/linker";
  function parseLinker(value) {
    var linkerObj = parseLinkerParamValue(value);
    if (!linkerObj) {
      return null;
    }
    var checksum = linkerObj.checksum, serializedIds = linkerObj.serializedIds;
    if (!isCheckSumValid(serializedIds, checksum)) {
      user().error(TAG7, "LINKER_PARAM value checksum not valid");
      return null;
    }
    return deserialize(serializedIds);
  }
  function parseLinkerParamValue(value) {
    var parts = value.split(DELIMITER);
    var isEven = parts.length % 2 == 0;
    if (parts.length < 4 || !isEven) {
      user().error(TAG7, "Invalid linker_param value " + value);
      return null;
    }
    var version = Number(parts.shift());
    if (version !== VALID_VERSION) {
      user().error(TAG7, "Invalid version number " + version);
      return null;
    }
    var checksum = parts.shift();
    var serializedIds = parts.join(DELIMITER);
    return {
      checksum,
      serializedIds
    };
  }
  function isCheckSumValid(serializedIds, checksum) {
    for (var i = 0; i <= CHECKSUM_OFFSET_MAX_MIN; i++) {
      var calculateCheckSum = getCheckSum(serializedIds, i);
      if (calculateCheckSum == checksum) {
        return true;
      }
    }
    return false;
  }
  function getCheckSum(serializedIds, opt_offsetMin) {
    var fingerprint = getFingerprint();
    var offset = opt_offsetMin || 0;
    var timestamp = getMinSinceEpoch() - offset;
    var crc = crc32([fingerprint, timestamp, serializedIds].join(DELIMITER));
    return crc.toString(36);
  }
  function getFingerprint() {
    var date = new Date();
    var timezone = date.getTimezoneOffset();
    var language = WindowInterface.getUserLanguage(window);
    return [WindowInterface.getUserAgent(window), timezone, language].join(DELIMITER);
  }
  function deserialize(serializedIds) {
    var keyValuePairs = {};
    var params = serializedIds.split(DELIMITER);
    for (var i = 0; i < params.length; i += 2) {
      var key = params[i];
      var valid = KEY_VALIDATOR.test(key);
      if (!valid) {
        user().error(TAG7, "Invalid linker key " + key + ", value ignored");
        continue;
      }
      var value = decode(params[i + 1]);
      keyValuePairs[key] = value;
    }
    return keyValuePairs;
  }
  function getMinSinceEpoch() {
    return Math.floor(Date.now() / 6e4);
  }
  function decode(value) {
    return base64UrlDecodeFromString(String(value));
  }

  // extensions/amp-consent/0.1/linker-reader.js
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
  var TAG8 = "amp-consent/linker-reader";
  var ConsentLinkerReader = /* @__PURE__ */ function() {
    function ConsentLinkerReader2(win) {
      _classCallCheck10(this, ConsentLinkerReader2);
      this.win_ = win;
      this.linkerParams_ = {};
    }
    _createClass9(ConsentLinkerReader2, [{
      key: "get",
      value: function get(name, id) {
        if (!name || !id) {
          user().error(TAG8, "LINKER_PARAM requires two params, name and id");
          return null;
        }
        if (!hasOwn(this.linkerParams_, name)) {
          this.linkerParams_[name] = this.maybeParseQueryString_(name);
        }
        if (this.linkerParams_[name] && this.linkerParams_[name][id]) {
          return this.linkerParams_[name][id];
        }
        return null;
      }
    }, {
      key: "maybeParseQueryString_",
      value: function maybeParseQueryString_(name) {
        var params = parseQueryString(this.win_.location.search);
        if (!hasOwn(params, name)) {
          return null;
        }
        var value = params[name];
        return parseLinker(value);
      }
    }]);
    return ConsentLinkerReader2;
  }();

  // src/iframe-helper.js
  function isInFie(element) {
    return element.classList.contains("i-amphtml-fie") || !!closestAncestorElementBySelector(element, ".i-amphtml-fie");
  }

  // extensions/amp-consent/0.1/cookie-writer.js
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
  var TAG9 = "amp-consent/cookie-writer";
  var RESERVED_KEYS = {
    "referrerDomains": true,
    "enabled": true,
    "cookiePath": true,
    "cookieMaxAge": true,
    "cookieSecure": true,
    "cookieDomain": true
  };
  var CONSENT_COOKIE_WRITE_VARS_ALLOWED_LIST = {
    "LINKER_PARAM": true
  };
  var CookieWriter = /* @__PURE__ */ function() {
    function CookieWriter2(win, element, config) {
      _classCallCheck11(this, CookieWriter2);
      this.win_ = win;
      this.element_ = element;
      this.writePromise_ = null;
      this.config_ = config;
      this.linkerReader_ = new ConsentLinkerReader(win);
    }
    _createClass10(CookieWriter2, [{
      key: "write",
      value: function write() {
        if (!this.writePromise_) {
          this.writePromise_ = this.init_();
        }
        return this.writePromise_;
      }
    }, {
      key: "init_",
      value: function init_() {
        if (!this.isCookieAllowed_(this.win_, this.element_)) {
          return resolvedPromise();
        }
        if (!hasOwn(this.config_, "cookies")) {
          return resolvedPromise();
        }
        if (!isObject(this.config_["cookies"])) {
          user().error(TAG9, "cookies config must be an object");
          return resolvedPromise();
        }
        var inputConfig = this.config_["cookies"];
        if (inputConfig["enabled"] === false) {
          return resolvedPromise();
        }
        var cookieExpireDateMs = this.getCookieMaxAgeMs_(inputConfig);
        var ids = Object.keys(inputConfig);
        var promises = [];
        for (var i = 0; i < ids.length; i++) {
          var cookieName = ids[i];
          var cookieObj = inputConfig[cookieName];
          if (this.isValidCookieConfig_(cookieName, cookieObj)) {
            promises.push(this.expandAndWrite_(cookieName, cookieObj["value"], cookieExpireDateMs));
          }
        }
        return Promise.all(promises);
      }
    }, {
      key: "getCookieMaxAgeMs_",
      value: function getCookieMaxAgeMs_(inputConfig) {
        if (!hasOwn(inputConfig, "cookieMaxAge")) {
          return BASE_CID_MAX_AGE_MILLIS;
        }
        var cookieMaxAge = Number(inputConfig["cookieMaxAge"]);
        if (!cookieMaxAge && cookieMaxAge !== 0) {
          user().error(TAG9, "invalid cookieMaxAge %s, falling back to default value (1 year)", inputConfig["cookieMaxAge"]);
          return BASE_CID_MAX_AGE_MILLIS;
        }
        if (cookieMaxAge <= 0) {
          user().warn(TAG9, "cookieMaxAge %s less than or equal to 0, cookie will immediately expire", inputConfig["cookieMaxAge"]);
        }
        return cookieMaxAge * 1e3;
      }
    }, {
      key: "isValidCookieConfig_",
      value: function isValidCookieConfig_(cookieName, cookieConfig) {
        if (RESERVED_KEYS[cookieName]) {
          return false;
        }
        if (!isObject(cookieConfig)) {
          user().error(TAG9, "cookieValue must be configured in an object");
          return false;
        }
        if (!hasOwn(cookieConfig, "value")) {
          user().error(TAG9, "value is required in the cookieValue object");
          return false;
        }
        return true;
      }
    }, {
      key: "expandAndWrite_",
      value: function expandAndWrite_(cookieName, cookieValue, cookieExpireDateMs) {
        var _this = this;
        return Services.urlReplacementsForDoc(this.element_).expandStringAsync(cookieValue, {
          "LINKER_PARAM": function LINKER_PARAM(name, id) {
            return _this.linkerReader_.get(name, id);
          }
        }, CONSENT_COOKIE_WRITE_VARS_ALLOWED_LIST).then(function(value) {
          if (value) {
            var expireDate = Date.now() + cookieExpireDateMs;
            setCookie(_this.win_, cookieName, value, expireDate, {
              highestAvailableDomain: true
            });
          }
        }).catch(function(e) {
          user().error(TAG9, "Error expanding cookie string", e);
        });
      }
    }, {
      key: "isCookieAllowed_",
      value: function isCookieAllowed_() {
        return !isInFie(this.element_) && !isProxyOrigin(this.win_.location) && !(getMode(this.win_).runtime == "inabox");
      }
    }]);
    return CookieWriter2;
  }();

  // src/service/notification-ui-manager.js
  function _classCallCheck12(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
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
  var NOTIFICATION_UI_MANAGER = "notificationUIManager";
  var NotificationUiManager = /* @__PURE__ */ function() {
    function NotificationUiManager2() {
      _classCallCheck12(this, NotificationUiManager2);
      this.queueSize_ = 0;
      this.queuePromise_ = resolvedPromise();
      this.queueEmptyHandler_ = function() {
      };
      this.queueNotEmptyHandler_ = function() {
      };
    }
    _createClass11(NotificationUiManager2, [{
      key: "onQueueEmpty",
      value: function onQueueEmpty(handler) {
        this.queueEmptyHandler_ = handler;
        if (this.queueSize_ == 0) {
          handler();
        }
      }
    }, {
      key: "onQueueNotEmpty",
      value: function onQueueNotEmpty(handler) {
        this.queueNotEmptyHandler_ = handler;
        if (this.queueSize_ > 0) {
          handler();
        }
      }
    }, {
      key: "registerUI",
      value: function registerUI(show) {
        var _this = this;
        if (this.queueSize_ == 0) {
          this.queueNotEmptyHandler_();
        }
        this.queueSize_++;
        var promise = this.queuePromise_.then(function() {
          return show().then(function() {
            _this.queueSize_--;
            if (_this.queueSize_ == 0) {
              _this.queueEmptyHandler_();
            }
          });
        });
        this.queuePromise_ = promise;
        return promise;
      }
    }]);
    return NotificationUiManager2;
  }();

  // extensions/amp-consent/0.1/tcf-api-command-manager.js
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
  var TAG10 = "amp-consent";
  var TCF_POLICY_VERSION = 2;
  var CMP_STATUS = "loaded";
  var CMP_LOADED = true;
  var EVENT_STATUS = "tcloaded";
  var TcfApiCommandManager = /* @__PURE__ */ function() {
    function TcfApiCommandManager2(policyManager) {
      var _this = this;
      _classCallCheck13(this, TcfApiCommandManager2);
      this.policyManager_ = policyManager;
      this.changeListeners_ = map();
      this.currentTcString_ = null;
      this.listenerId_ = 0;
      policyManager.setOnPolicyChange(function() {
        _this.handleTcDataChange_();
      });
    }
    _createClass12(TcfApiCommandManager2, [{
      key: "handleTcfCommand",
      value: function handleTcfCommand(data, win) {
        if (!this.isValidTcfApiCall_(data["__tcfapiCall"])) {
          return;
        }
        var payload = data["__tcfapiCall"];
        var command = payload.command;
        switch (command) {
          case TCF_POST_MESSAGE_API_COMMANDS.PING:
            this.handlePingEvent_(payload, win);
            break;
          case TCF_POST_MESSAGE_API_COMMANDS.GET_TC_DATA:
            this.handleGetTcData_(payload, win);
            break;
          case TCF_POST_MESSAGE_API_COMMANDS.ADD_EVENT_LISTENER:
            this.handleAddEventListner_(payload, win);
            break;
          case TCF_POST_MESSAGE_API_COMMANDS.REMOVE_EVENT_LISTENER:
            this.handleRemoveEventListner_(payload, win);
            break;
          default:
            return;
        }
      }
    }, {
      key: "handleAddEventListner_",
      value: function handleAddEventListner_(payload, win) {
        if (this.changeListeners_[this.listenerId_]) {
          return;
        }
        this.changeListeners_[this.listenerId_] = {
          payload,
          win
        };
        this.listenerId_++;
      }
    }, {
      key: "handleRemoveEventListner_",
      value: function handleRemoveEventListner_(payload, win) {
        var callId = payload.callId, parameter = payload.parameter;
        var success = !!this.changeListeners_[parameter];
        if (success) {
          delete this.changeListeners_[parameter];
        }
        this.sendTcfApiReturn_(win, void 0, callId, success);
      }
    }, {
      key: "handleTcDataChange_",
      value: function handleTcDataChange_() {
        var _this2 = this;
        if (!Object.keys(this.changeListeners_).length) {
          return;
        }
        this.getTcDataPromises_().then(function(consentPromises) {
          var newTcString = consentPromises[2];
          if (!newTcString || newTcString === _this2.currentTcString_) {
            return;
          }
          _this2.currentTcString_ = newTcString;
          var listenerIds = Object.keys(_this2.changeListeners_);
          for (var i = 0; i < listenerIds.length; i++) {
            var listenerId = Number(listenerIds[i]);
            if (!hasOwn(_this2.changeListeners_, listenerId)) {
              continue;
            }
            var _this2$changeListener = _this2.changeListeners_[listenerId], payload = _this2$changeListener.payload, win = _this2$changeListener.win;
            var callId = payload.callId;
            var returnValue = _this2.getMinimalTcData_(consentPromises[0], consentPromises[1], newTcString, listenerId);
            _this2.sendTcfApiReturn_(win, returnValue, callId, true);
          }
        });
      }
    }, {
      key: "getTcDataPromises_",
      value: function getTcDataPromises_() {
        var consentStringInfoPromise = this.policyManager_.getConsentStringInfo("default");
        var metadataPromise = this.policyManager_.getConsentMetadataInfo("default");
        var sharedDataPromise = this.policyManager_.getMergedSharedData("default");
        return Promise.all([metadataPromise, sharedDataPromise, consentStringInfoPromise]);
      }
    }, {
      key: "handleGetTcData_",
      value: function handleGetTcData_(payload, win) {
        var _this3 = this;
        this.getTcDataPromises_().then(function(arr) {
          var returnValue = _this3.getMinimalTcData_(arr[0], arr[1], arr[2]);
          var callId = payload.callId;
          _this3.sendTcfApiReturn_(win, returnValue, callId, true);
        });
      }
    }, {
      key: "getMinimalTcData_",
      value: function getMinimalTcData_(metadata, sharedData, tcString, opt_listenerId) {
        var purposeOneTreatment = metadata ? metadata["purposeOne"] : void 0;
        var gdprApplies = metadata ? metadata["gdprApplies"] : void 0;
        var additionalConsent = metadata ? metadata["additionalConsent"] : void 0;
        var additionalData = _extends({}, sharedData, {
          additionalConsent
        });
        return {
          tcfPolicyVersion: TCF_POLICY_VERSION,
          gdprApplies,
          tcString,
          listenerId: opt_listenerId,
          cmpStatus: CMP_STATUS,
          eventStatus: EVENT_STATUS,
          purposeOneTreatment,
          additionalData
        };
      }
    }, {
      key: "handlePingEvent_",
      value: function handlePingEvent_(payload, win) {
        var _this4 = this;
        this.policyManager_.getConsentMetadataInfo("default").then(function(metadata) {
          var returnValue = _this4.getMinimalPingReturn_(metadata);
          var callId = payload.callId;
          _this4.sendTcfApiReturn_(win, returnValue, callId);
        });
      }
    }, {
      key: "getMinimalPingReturn_",
      value: function getMinimalPingReturn_(metadata) {
        var gdprApplies = metadata ? metadata["gdprApplies"] : void 0;
        return {
          gdprApplies,
          cmpLoaded: CMP_LOADED,
          cmpStatus: CMP_STATUS,
          tcfPolicyVersion: TCF_POLICY_VERSION
        };
      }
    }, {
      key: "sendTcfApiReturn_",
      value: function sendTcfApiReturn_(win, returnValue, callId, opt_success) {
        if (!win) {
          return;
        }
        var __tcfapiReturn = {
          returnValue,
          callId,
          success: opt_success
        };
        win.postMessage({
          __tcfapiReturn
        }, "*");
      }
    }, {
      key: "isValidTcfApiCall_",
      value: function isValidTcfApiCall_(payload) {
        if (!isObject(payload)) {
          user().error(TAG10, '"tcfapiCall" is not an object: ' + payload);
          return false;
        }
        var command = payload.command, parameter = payload.parameter, version = payload.version;
        if (!isEnumValue(TCF_POST_MESSAGE_API_COMMANDS, command)) {
          user().error(TAG10, 'Unsupported command found in "tcfapiCall": ' + command);
          return false;
        }
        if (parameter && command != TCF_POST_MESSAGE_API_COMMANDS.REMOVE_EVENT_LISTENER) {
          user().error(TAG10, 'Unsupported parameter found in "tcfapiCall": ' + parameter);
          return false;
        }
        if (version !== 2) {
          user().error(TAG10, 'Found incorrect version in "tcfapiCall": ' + version);
          return false;
        }
        return true;
      }
    }, {
      key: "getMinimalPingReturnForTesting",
      value: function getMinimalPingReturnForTesting(metadata) {
        return this.getMinimalPingReturn_(metadata);
      }
    }, {
      key: "getMinimalTcDataForTesting",
      value: function getMinimalTcDataForTesting(metadata, sharedData, tcString, listenerId) {
        return this.getMinimalTcData_(metadata, sharedData, tcString, listenerId);
      }
    }]);
    return TcfApiCommandManager2;
  }();

  // extensions/amp-consent/0.1/amp-consent.js
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
  var CONSENT_STATE_MANAGER3 = "consentStateManager";
  var CONSENT_POLICY_MANAGER = "consentPolicyManager";
  var TCF_API_LOCATOR = "__tcfapiLocator";
  var TAG11 = "amp-consent";
  var ACTION_TYPE = {
    ACCEPT: "accept",
    REJECT: "reject",
    DISMISS: "dismiss"
  };
  var AmpConsent = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpConsent2, _AMP$BaseElement);
    var _super = _createSuper(AmpConsent2);
    function AmpConsent2(element) {
      var _this;
      _classCallCheck14(this, AmpConsent2);
      _this = _super.call(this, element);
      _this.consentStateManager_ = null;
      _this.consentPolicyManager_ = null;
      _this.tcfApiCommandManager_ = null;
      _this.notificationUiManager_ = null;
      _this.consentUI_ = null;
      _this.consentConfig_ = null;
      _this.policyConfig_ = null;
      _this.postPromptUI_ = null;
      _this.dialogResolver_ = null;
      _this.isPromptUiOn_ = false;
      _this.consentStateChangedViaPromptUI_ = false;
      _this.consentUIPending_ = false;
      _this.vsync_ = _this.getVsync();
      _this.remoteConfigPromise_ = null;
      _this.consentId_ = null;
      _this.matchedGeoGroup_ = null;
      _this.isTcfPostMessageProxyExperimentOn_ = isExperimentOn(_this.win, "tcf-post-message-proxy-api");
      _this.isGranularConsentExperimentOn_ = isExperimentOn(_this.win, "amp-consent-granular-consent");
      _this.purposeConsentRequired_ = _this.isGranularConsentExperimentOn_ ? null : resolvedPromise();
      _this.boundHandleIframeMessages_ = _this.isTcfPostMessageProxyExperimentOn_ ? _this.handleIframeMessages_.bind(_assertThisInitialized(_this)) : null;
      return _this;
    }
    _createClass13(AmpConsent2, [{
      key: "getConsentPolicy",
      value: function getConsentPolicy() {
        return null;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        userAssert(this.element.getAttribute("id"), "amp-consent should have an id");
        var configManager = new ConsentConfig(this.element);
        return configManager.getConsentConfigPromise().then(function(validatedConfig) {
          _this2.matchedGeoGroup_ = configManager.getMatchedGeoGroup();
          _this2.initialize_(validatedConfig);
        });
      }
    }, {
      key: "pauseCallback",
      value: function pauseCallback() {
        if (this.consentUI_) {
          this.consentUI_.pause();
        }
      }
    }, {
      key: "resumeCallback",
      value: function resumeCallback() {
        if (this.consentUI_) {
          this.consentUI_.resume();
        }
      }
    }, {
      key: "initialize_",
      value: function initialize_(validatedConfig) {
        var _this3 = this;
        this.consentConfig_ = validatedConfig;
        this.consentId_ = this.consentConfig_["consentInstanceId"];
        if (this.consentConfig_["postPromptUI"]) {
          this.postPromptUI_ = new ConsentUI(this, dict({}), this.consentConfig_["postPromptUI"]);
        }
        var policyConfig = this.consentConfig_["policy"] || dict({});
        this.policyConfig_ = expandPolicyConfig(policyConfig, this.consentId_);
        var children = this.getRealChildren();
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          toggle(child, false);
          Services.ownersForDoc(this.element).setOwner(child, this.element);
        }
        var consentPolicyManagerPromise = getServicePromiseForDoc(this.getAmpDoc(), CONSENT_POLICY_MANAGER).then(function(manager) {
          _this3.consentPolicyManager_ = manager;
          _this3.consentPolicyManager_.setLegacyConsentInstanceId(_this3.consentId_);
          var policyKeys = Object.keys(_this3.policyConfig_);
          for (var _i = 0; _i < policyKeys.length; _i++) {
            _this3.consentPolicyManager_.registerConsentPolicyInstance(policyKeys[_i], _this3.policyConfig_[policyKeys[_i]]);
          }
        });
        var consentStateManagerPromise = getServicePromiseForDoc(this.getAmpDoc(), CONSENT_STATE_MANAGER3).then(function(manager) {
          manager.registerConsentInstance(_this3.consentId_, _this3.consentConfig_);
          _this3.consentStateManager_ = manager;
        });
        var notificationUiManagerPromise = getServicePromiseForDoc(this.getAmpDoc(), NOTIFICATION_UI_MANAGER).then(function(manager) {
          _this3.notificationUiManager_ = manager;
        });
        var cookieWriterPromise = this.consentConfig_["cookies"] ? new CookieWriter(this.win, this.element, this.consentConfig_).write() : resolvedPromise();
        Promise.all([consentStateManagerPromise, notificationUiManagerPromise, consentPolicyManagerPromise, cookieWriterPromise]).then(function() {
          _this3.init_();
        });
      }
    }, {
      key: "enableInteractions_",
      value: function enableInteractions_() {
        var _this4 = this;
        this.registerAction("accept", function(invocation) {
          _this4.handleClosingUiAction_(ACTION_TYPE.ACCEPT, invocation);
        });
        this.registerAction("reject", function(invocation) {
          _this4.handleClosingUiAction_(ACTION_TYPE.REJECT, invocation);
        });
        this.registerAction("dismiss", function() {
          _this4.handleClosingUiAction_(ACTION_TYPE.DISMISS);
        });
        if (this.isGranularConsentExperimentOn_) {
          this.registerAction("setPurpose", function(invocation) {
            _this4.handleSetPurpose_(invocation);
          });
        }
        this.registerAction("prompt", function(invocation) {
          return _this4.handleReprompt_(invocation);
        });
        this.enableExternalInteractions_();
      }
    }, {
      key: "handleClosingUiAction_",
      value: function handleClosingUiAction_(action, opt_invocation) {
        var _this5 = this;
        if (!this.isReadyToHandleAction_()) {
          return;
        }
        this.maybeSetConsentPurposeDefaults_(action, opt_invocation).then(function() {
          _this5.handleAction_(action);
        });
      }
    }, {
      key: "enableExternalInteractions_",
      value: function enableExternalInteractions_() {
        var _this6 = this;
        this.win.addEventListener("message", function(event) {
          if (!_this6.isPromptUiOn_) {
            return;
          }
          var consentString;
          var metadata;
          var data = getData(event);
          if (!data || data["type"] != "consent-response") {
            return;
          }
          if (!data["action"]) {
            user().error(TAG11, "consent-response message missing required info");
            return;
          }
          if (data["info"] !== void 0) {
            if (typeof data["info"] != "string") {
              user().error(TAG11, "consent-response info only supports string, %s, treated as undefined", data["info"]);
              data["info"] = void 0;
            }
            if (data["action"] === ACTION_TYPE.DISMISS) {
              if (data["info"]) {
                _this6.user().error(TAG11, "Consent string value %s not applicable on user dismiss, stored value will be kept and used", data["info"]);
              }
              data["info"] = void 0;
            }
            consentString = data["info"];
            metadata = _this6.validateMetadata_(data["consentMetadata"]);
          }
          var iframes = _this6.element.querySelectorAll("iframe");
          for (var i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow === event.source) {
              var action = data.action, purposeConsents = data.purposeConsents;
              if (!isEnumValue(ACTION_TYPE, action) || !_this6.isReadyToHandleAction_()) {
                continue;
              }
              if (purposeConsents && Object.keys(purposeConsents).length && action !== ACTION_TYPE.DISMISS) {
                _this6.validatePurposeConsents_(purposeConsents);
                _this6.consentStateManager_.updateConsentInstancePurposes(purposeConsents);
              }
              _this6.handleAction_(action, consentString, metadata);
            }
          }
        });
      }
    }, {
      key: "scheduleDisplay_",
      value: function scheduleDisplay_(isActionPromptTrigger) {
        if (!this.notificationUiManager_) {
          dev().error(TAG11, "notification ui manager not found");
        }
        if (this.consentUIPending_) {
          return;
        }
        if (!this.consentUI_) {
          return;
        }
        this.consentUIPending_ = true;
        this.notificationUiManager_.registerUI(this.show_.bind(this, isActionPromptTrigger));
      }
    }, {
      key: "show_",
      value: function show_(isActionPromptTrigger) {
        var _this7 = this;
        if (this.isPromptUiOn_) {
          dev().error(TAG11, "Attempt to show an already displayed prompt UI");
        }
        this.vsync_.mutate(function() {
          _this7.consentUI_.show(isActionPromptTrigger);
          _this7.isPromptUiOn_ = true;
        });
        var deferred = new Deferred();
        this.dialogResolver_ = deferred.resolve;
        return deferred.promise;
      }
    }, {
      key: "hide_",
      value: function hide_() {
        if (!this.isPromptUiOn_) {
          dev().error(TAG11, "%s no consent ui to hide");
        }
        this.consentUI_.hide();
        this.isPromptUiOn_ = false;
        if (this.dialogResolver_) {
          this.dialogResolver_();
          this.dialogResolver_ = null;
        }
        this.consentUIPending_ = false;
      }
    }, {
      key: "isReadyToHandleAction_",
      value: function isReadyToHandleAction_() {
        if (!this.consentStateManager_) {
          dev().error(TAG11, "No consent state manager");
          return false;
        }
        return this.isPromptUiOn_;
      }
    }, {
      key: "handleAction_",
      value: function handleAction_(action, consentString, opt_consentMetadata) {
        this.consentStateChangedViaPromptUI_ = true;
        if (action == ACTION_TYPE.ACCEPT) {
          this.consentStateManager_.updateConsentInstanceState(CONSENT_ITEM_STATE.ACCEPTED, consentString, opt_consentMetadata);
        } else if (action == ACTION_TYPE.REJECT) {
          this.consentStateManager_.updateConsentInstanceState(CONSENT_ITEM_STATE.REJECTED, consentString, opt_consentMetadata);
        } else if (action == ACTION_TYPE.DISMISS) {
          this.consentStateManager_.updateConsentInstanceState(CONSENT_ITEM_STATE.DISMISSED);
        }
        this.hide_();
      }
    }, {
      key: "maybeSetConsentPurposeDefaults_",
      value: function maybeSetConsentPurposeDefaults_(action, opt_invocation) {
        var _opt_invocation$args, _this8 = this;
        if (!this.isGranularConsentExperimentOn_ || typeof (opt_invocation == null ? void 0 : (_opt_invocation$args = opt_invocation.args) == null ? void 0 : _opt_invocation$args.purposeConsentDefault) !== "boolean") {
          return resolvedPromise();
        }
        if (action === ACTION_TYPE.DISMISS) {
          dev.warn(TAG11, "Dismiss cannot have a `purposeConsentDefault` parameter.");
          return resolvedPromise();
        }
        return this.getPurposeConsentRequired_().then(function(purposeConsentRequired) {
          if (!purposeConsentRequired || !purposeConsentRequired.length) {
            return;
          }
          var defaultPurposes = {};
          var purposeValue = opt_invocation["args"]["purposeConsentDefault"];
          purposeConsentRequired.forEach(function(purpose) {
            defaultPurposes[purpose] = purposeValue;
          });
          _this8.consentStateManager_.updateConsentInstancePurposes(defaultPurposes, true);
        });
      }
    }, {
      key: "handleReprompt_",
      value: function handleReprompt_(invocation) {
        var args = invocation.args;
        if (args && args["expireCache"] === true) {
          this.consentStateManager_.setDirtyBit();
        }
        this.scheduleDisplay_(true);
      }
    }, {
      key: "handleSetPurpose_",
      value: function handleSetPurpose_(invocation) {
        if (!invocation || !invocation["args"] || !Object.keys(invocation["args"]).length) {
          dev().error(TAG11, "Must have arugments for `setPurpose`.");
          return;
        }
        var args = invocation.args;
        if (this.isReadyToHandleAction_()) {
          this.validatePurposeConsents_(args);
          this.consentStateManager_.updateConsentInstancePurposes(args);
        }
      }
    }, {
      key: "init_",
      value: function init_() {
        var _this9 = this;
        this.passSharedData_();
        this.syncRemoteConsentState_();
        this.maybeSetUpTcfPostMessageProxy_();
        this.getConsentRequiredPromise_().then(function(isConsentRequired) {
          return _this9.initPromptUI_(isConsentRequired);
        }).then(function(isPostPromptUIRequired) {
          if (isPostPromptUIRequired) {
            _this9.handlePostPromptUI_();
          }
          _this9.consentPolicyManager_.enableTimeout();
        }).catch(function(unusedError) {
        });
        this.enableInteractions_();
      }
    }, {
      key: "getConsentRequiredPromise_",
      value: function getConsentRequiredPromise_() {
        var _this10 = this;
        return this.consentStateManager_.getConsentInstanceInfo().then(function(storedInfo) {
          if (hasStoredValue(storedInfo)) {
            return Promise.resolve(true);
          }
          var consentRequired = _this10.consentConfig_["consentRequired"];
          if (typeof consentRequired === "boolean") {
            return Promise.resolve(consentRequired);
          }
          return _this10.getConsentRemote_().then(function(consentResponse) {
            if (!consentResponse) {
              return false;
            }
            return consentResponse["consentRequired"] !== void 0 ? !!consentResponse["consentRequired"] : !!consentResponse["promptIfUnknown"];
          });
        });
      }
    }, {
      key: "passSharedData_",
      value: function passSharedData_() {
        var responsePromise = this.getConsentRemote_();
        var sharedDataPromise = responsePromise.then(function(response) {
          if (!response || response["sharedData"] === void 0) {
            return null;
          }
          return response["sharedData"];
        });
        this.consentStateManager_.setConsentInstanceSharedData(sharedDataPromise);
      }
    }, {
      key: "syncRemoteConsentState_",
      value: function syncRemoteConsentState_() {
        var _this11 = this;
        this.getConsentRemote_().then(function(response) {
          if (!response) {
            return;
          }
          var expireCache = response["expireCache"] || response["forcePromptOnNext"];
          if (expireCache) {
            _this11.consentStateManager_.setDirtyBit();
          }
          if (!!response["consentRequired"] && !_this11.consentStateChangedViaPromptUI_) {
            _this11.updateCacheIfNotNull_(response["consentStateValue"], response["consentString"] || void 0, response["consentMetadata"], response["purposeConsents"]);
          }
        });
      }
    }, {
      key: "updateCacheIfNotNull_",
      value: function updateCacheIfNotNull_(responseStateValue, responseConsentString, responseMetadata, responsePurposeConsents) {
        var consentStateValue = convertEnumValueToState(responseStateValue);
        if (consentStateValue !== null) {
          if (this.isGranularConsentExperimentOn_ && responsePurposeConsents && isObject(responsePurposeConsents) && Object.keys(responsePurposeConsents).length) {
            this.validatePurposeConsents_(responsePurposeConsents);
            this.consentStateManager_.updateConsentInstancePurposes(responsePurposeConsents);
          }
          this.consentStateManager_.updateConsentInstanceState(consentStateValue, responseConsentString, this.validateMetadata_(responseMetadata));
        }
      }
    }, {
      key: "getConsentRemote_",
      value: function getConsentRemote_() {
        var _this12 = this;
        if (this.remoteConfigPromise_) {
          return this.remoteConfigPromise_;
        }
        if (!this.consentConfig_["checkConsentHref"]) {
          this.remoteConfigPromise_ = Promise.resolve(null);
        } else {
          var storeConsentPromise = this.consentStateManager_.getLastConsentInstanceInfo();
          this.remoteConfigPromise_ = storeConsentPromise.then(function(storedInfo) {
            var request = {
              "consentInstanceId": _this12.consentId_,
              "consentStateValue": getConsentStateValue(storedInfo["consentState"]),
              "consentMetadata": storedInfo["consentMetadata"],
              "consentString": storedInfo["consentString"],
              "isDirty": !!storedInfo["isDirty"],
              "matchedGeoGroup": _this12.matchedGeoGroup_
            };
            if (_this12.isGranularConsentExperimentOn_) {
              request["purposeConsents"] = storedInfo["purposeConsents"];
            }
            if (_this12.consentConfig_["clientConfig"]) {
              request["clientConfig"] = _this12.consentConfig_["clientConfig"];
            }
            var init = {
              credentials: "include",
              method: "POST",
              body: request
            };
            var href = _this12.consentConfig_["checkConsentHref"];
            assertHttpsUrl(href, _this12.element);
            var ampdoc = _this12.getAmpDoc();
            var sourceBase = getSourceUrl(ampdoc.getUrl());
            var resolvedHref = resolveRelativeUrl(href, sourceBase);
            var xhrService = Services.xhrFor(_this12.win);
            return ampdoc.whenFirstVisible().then(function() {
              return expandConsentEndpointUrl(_this12.element, resolvedHref).then(function(expandedHref) {
                return xhrService.fetchJson(expandedHref, init).then(function(res) {
                  return xhrService.xssiJson(res, _this12.consentConfig_["xssiPrefix"]).catch(function(e) {
                    user().error(TAG11, "Could not parse the `checkConsentHref` response.", e);
                  });
                });
              });
            });
          });
        }
        return this.remoteConfigPromise_;
      }
    }, {
      key: "checkGranularConsentRequired_",
      value: function checkGranularConsentRequired_(consentInfo) {
        var _this13 = this;
        if (!this.isGranularConsentExperimentOn_) {
          return Promise.resolve(true);
        }
        return this.getPurposeConsentRequired_().then(function(purposeConsentRequired) {
          if (!(purposeConsentRequired != null && purposeConsentRequired.length)) {
            _this13.consentStateManager_.hasAllPurposeConsents();
            return true;
          }
          var storedPurposeConsents = consentInfo["purposeConsents"];
          if (!storedPurposeConsents || Object.keys(storedPurposeConsents).length < purposeConsentRequired.length) {
            return false;
          }
          for (var i = 0; i < purposeConsentRequired.length; i++) {
            var purpose = purposeConsentRequired[i];
            if (!hasOwn(storedPurposeConsents, purpose)) {
              return false;
            }
          }
          _this13.consentStateManager_.hasAllPurposeConsents();
          return true;
        });
      }
    }, {
      key: "getPurposeConsentRequired_",
      value: function getPurposeConsentRequired_() {
        if (this.purposeConsentRequired_) {
          return this.purposeConsentRequired_;
        }
        var inlinePurposes = this.consentConfig_["purposeConsentRequired"];
        if (isArray(inlinePurposes)) {
          this.purposeConsentRequired_ = Promise.resolve(inlinePurposes);
        } else {
          this.purposeConsentRequired_ = this.getConsentRemote_().then(function(response) {
            if (!response || !isArray(response["purposeConsentRequired"])) {
              return null;
            }
            return response["purposeConsentRequired"];
          });
        }
        return this.purposeConsentRequired_;
      }
    }, {
      key: "hasRequiredConsents_",
      value: function hasRequiredConsents_() {
        var _this14 = this;
        return this.consentStateManager_.getConsentInstanceInfo().then(function(info) {
          if (hasStoredValue(info)) {
            return _this14.checkGranularConsentRequired_(info);
          }
          return Promise.resolve(false);
        });
      }
    }, {
      key: "initPromptUI_",
      value: function initPromptUI_(isConsentRequired) {
        var _this15 = this;
        this.consentUI_ = new ConsentUI(this, devAssert(this.consentConfig_, "consent config not found"));
        return this.hasRequiredConsents_().then(function(hasConsents) {
          if (hasConsents) {
            return true;
          }
          if (!isConsentRequired) {
            _this15.consentStateManager_.updateConsentInstanceState(CONSENT_ITEM_STATE.NOT_REQUIRED);
            return false;
          }
          _this15.scheduleDisplay_(false);
          return true;
        });
      }
    }, {
      key: "handlePostPromptUI_",
      value: function handlePostPromptUI_() {
        var _this16 = this;
        if (!this.postPromptUI_) {
          return;
        }
        this.notificationUiManager_.onQueueEmpty(function() {
          _this16.vsync_.mutate(function() {
            _this16.postPromptUI_.show(false);
          });
        });
        this.notificationUiManager_.onQueueNotEmpty(function() {
          _this16.vsync_.mutate(function() {
            _this16.postPromptUI_.hide();
          });
        });
      }
    }, {
      key: "getConsentStateManagerForTesting",
      value: function getConsentStateManagerForTesting() {
        return this.consentStateManager_;
      }
    }, {
      key: "getConsentRequiredPromiseForTesting",
      value: function getConsentRequiredPromiseForTesting() {
        return this.getConsentRequiredPromise_();
      }
    }, {
      key: "getIsPromptUiOnForTesting",
      value: function getIsPromptUiOnForTesting() {
        return this.isPromptUiOn_;
      }
    }, {
      key: "validatePurposeConsents_",
      value: function validatePurposeConsents_(purposeObj) {
        var purposeKeys = Object.keys(purposeObj);
        purposeKeys.forEach(function(purposeKey) {
          dev().assertBoolean(purposeObj[purposeKey], "`setPurpose` values must be booleans.");
        });
      }
    }, {
      key: "validateMetadata_",
      value: function validateMetadata_(opt_metadata) {
        if (!opt_metadata) {
          return;
        }
        if (!isObject(opt_metadata)) {
          user().error(TAG11, "CMP metadata is not an object.");
          return;
        }
        assertMetadataValues(opt_metadata);
        return constructMetadata(opt_metadata["consentStringType"], opt_metadata["additionalConsent"], opt_metadata["gdprApplies"], opt_metadata["purposeOne"]);
      }
    }, {
      key: "maybeSetUpTcfPostMessageProxy_",
      value: function maybeSetUpTcfPostMessageProxy_() {
        if (!this.isTcfPostMessageProxyExperimentOn_ || !this.consentConfig_["exposesTcfApi"]) {
          return;
        }
        if (!this.win.frames[TCF_API_LOCATOR]) {
          this.tcfApiCommandManager_ = new TcfApiCommandManager(this.consentPolicyManager_);
          this.win.addEventListener("message", this.boundHandleIframeMessages_);
          var iframe = this.element.ownerDocument.createElement("iframe");
          iframe.setAttribute("name", TCF_API_LOCATOR);
          toggle(iframe, false);
          iframe.setAttribute("aria-hidden", true);
          this.element.appendChild(dev().assertElement(iframe));
        }
      }
    }, {
      key: "handleIframeMessages_",
      value: function handleIframeMessages_(event) {
        var data = getData(event);
        if (!data || !data["__tcfapiCall"]) {
          return;
        }
        this.tcfApiCommandManager_.handleTcfCommand(data, event.source);
      }
    }]);
    return AmpConsent2;
  }(AMP.BaseElement);
  AMP.extension("amp-consent", "0.1", function(AMP2) {
    AMP2.registerElement("amp-consent", AmpConsent, CSS2);
    AMP2.registerServiceForDoc(NOTIFICATION_UI_MANAGER, NotificationUiManager);
    AMP2.registerServiceForDoc(CONSENT_STATE_MANAGER3, ConsentStateManager);
    AMP2.registerServiceForDoc(CONSENT_POLICY_MANAGER, ConsentPolicyManager);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-consent-0.1.max.js.map
