(self.AMP=self.AMP||[]).push({n:"amp-video-docking",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
  function dict(opt_initial) {
    return opt_initial || {};
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";

  // src/core/constants/action-constants.js
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

  // build/amp-video-docking-0.1.css.js
  var CSS2 = `.amp-video-docked-controls{direction:ltr!important;opacity:0;pointer-events:none!important;transition:opacity 0.3s ease;height:120px}.amp-video-docked-main-button-group{height:40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-20px 0 0 -60px}.amp-large>.amp-video-docked-main-button-group{margin-left:-70px}.amp-large>.amp-video-docked-main-button-group>.amp-video-docked-button-group{margin-right:10px}.amp-large>.amp-video-docked-control-set-scroll-back,.amp-small>.amp-video-docked-control-set-scroll-back{margin-left:-32px}.amp-large>.amp-video-docked-control-set-scroll-back>.amp-video-docked-button-group{margin-right:0}.amp-large>.amp-video-docked-button-dismiss-group{margin:6px 0 0 -6px}.amp-small>.amp-video-docked-button-dismiss-group,.amp-small>.amp-video-docked-button-dismiss-group>div[role=button]{min-width:32px;height:32px;border-radius:32px;background-size:20px 20px}.amp-small>.amp-video-docked-button-dismiss-group{margin-left:8px}.amp-video-docked-controls-shown{opacity:1;pointer-events:initial!important}.amp-video-docked-button-group{margin:0}.amp-video-docked-button-dismiss-group,.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group,.amp-video-docked-button-group>div[role=button]{min-width:40px;height:40px;border-radius:40px}.amp-video-docked-button-dismiss-group:active,.amp-video-docked-button-group:active{background-color:hsla(0,0%,100%,0.7)}.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group,.amp-video-docked-button-group>div[role=button],.amp-video-docked-controls,.i-amphtml-video-docked-overlay{-webkit-tap-highlight-color:rgba(0,0,0,0)!important}.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group>div[role=button]{background-repeat:no-repeat;background-position:50%}.amp-video-docked-shadow{box-shadow:0px 0 20px 6px rgba(0,0,0,0.2);transition-property:transform,opacity!important}.amp-video-docked-controls-bg{background:hsla(0,0%,90%,0.6)}.amp-video-docked-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")}.amp-video-docked-unmute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")}.amp-video-docked-pause{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")}.amp-video-docked-play{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")}.amp-video-docked-fullscreen{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/%3E%3C/svg%3E")}.amp-video-docked-dismiss{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")}.amp-video-docked-scroll-back{background-size:50%}.amp-rtl .amp-video-docked-scroll-back,.amp-video-docked-scroll-back{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-4-4h48v48H-4z'/%3E%3Cpath d='M36 0c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h24zM16 11.868l12.618 12.618 2.829-2.828L18.789 9H27V5H12v15h4v-8.132zM4 8H0v28c0 2.2 1.8 4 4 4h28v-4H4V8z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")}.amp-video-docked-control-set-scroll-back>.amp-video-docked-button-group,.amp-video-docked-control-set-scroll-back>.amp-video-docked-button-group>div[role=button]{min-width:64px;height:64px}.amp-video-docked-shadow,.i-amphtml-video-docked,.i-amphtml-video-docked-overlay{margin:0!important}.i-amphtml-video-docked{transition-property:transform!important}.amp-video-docked-controls,.amp-video-docked-shadow,.i-amphtml-video-docked,.i-amphtml-video-docked-overlay{position:fixed!important;top:0!important;left:0!important;right:auto!important;bottom:auto!important;padding:0!important;min-width:0!important;min-height:0!important;max-width:auto!important;max-height:auto!important;transform-origin:left top!important;will-change:width,height,transition,transform,opacity;transition:transform 0.05s}.i-amphtml-video-docked-overlay{opacity:0;transition:opacity 0.3s ease;contain:strict!important}.amp-video-docked-controls-bg{opacity:1}.i-amphtml-video-docked-overlay.amp-video-docked-almost-dismissed{opacity:1;background:hsla(0,0%,39%,0.1)}.i-amphtml-video-docked-shadow.amp-video-docked-almost-dismissed,.i-amphtml-video-docked.amp-video-docked-almost-dismissed{opacity:0.3}.amp-video-docked-button-dismiss-group{position:absolute;top:-40px}.amp-video-docked-placeholder-background{background:hsla(0,0%,78%,0.5);transition-property:opacity;overflow:hidden;pointer-events:none;z-index:0;opacity:0}.amp-video-docked-placeholder-icon{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h48v48H0z'/%3E%3Cpath d='M40 4H16c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM8 12H4v28c0 2.2 1.8 4 4 4h28v-4H8V12zm28 3.868L23.382 28.486l-2.828-2.828L33.212 13H25V9h15v15h-4v-8.132z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h48v48H0z'/%3E%3Cpath d='M40 4H16c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM8 12H4v28c0 2.2 1.8 4 4 4h28v-4H8V12zm28 3.868L23.382 28.486l-2.828-2.828L33.212 13H25V9h15v15h-4v-8.132z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask-size:48px 48px;mask-size:48px 48px;height:48px;width:48px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:bottom left;mask-position:bottom left;background:hsla(0,0%,39%,0.8);transition-property:opacity,transform;will-change:opacity,transform;position:absolute;bottom:40px;left:40px}.amp-video-docked-placeholder-icon.amp-rtl{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-4-4h48v48H-4z'/%3E%3Cpath d='M36 0c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h24zM16 11.868l12.618 12.618 2.829-2.828L18.789 9H27V5H12v15h4v-8.132zM4 8H0v28c0 2.2 1.8 4 4 4h28v-4H4V8z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-4-4h48v48H-4z'/%3E%3Cpath d='M36 0c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h24zM16 11.868l12.618 12.618 2.829-2.828L18.789 9H27V5H12v15h4v-8.132zM4 8H0v28c0 2.2 1.8 4 4 4h28v-4H4V8z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E");left:auto;right:40px}.amp-video-docked-placeholder-icon.amp-small{-webkit-mask-size:32px 32px;mask-size:32px 32px;width:32px;height:32px;bottom:20px;left:20px}.amp-video-docked-placeholder-icon.amp-rtl.amp-small{left:auto;right:20px}.amp-video-docked-placeholder-background-poster{background-size:cover;background-repeat:no-repeat;filter:blur(20px);transform:scale(1.1);opacity:0.3}.amp-video-docked-controls{z-index:2147483646!important}.i-amphtml-video-docked-overlay{z-index:2147483645!important}.i-amphtml-video-docked{z-index:2147483644!important}.amp-video-docked-shadow{z-index:2147483643!important}
/*# sourceURL=/extensions/amp-video-docking/0.1/amp-video-docking.css*/`;

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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function isRTL(doc) {
    var dir = doc.body.getAttribute("dir") || doc.documentElement.getAttribute("dir") || "ltr";
    return dir == "rtl";
  }

  // src/video-interface.js
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
  var VideoInterface = /* @__PURE__ */ function() {
    function VideoInterface2() {
      _classCallCheck2(this, VideoInterface2);
    }
    _createClass(VideoInterface2, [{
      key: "signals",
      value: function signals() {
      }
    }, {
      key: "mutateElementSkipRemeasure",
      value: function mutateElementSkipRemeasure(unusedMutator) {
      }
    }, {
      key: "supportsPlatform",
      value: function supportsPlatform() {
      }
    }, {
      key: "isInteractive",
      value: function isInteractive() {
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
      }
    }, {
      key: "getPlayedRanges",
      value: function getPlayedRanges() {
      }
    }, {
      key: "play",
      value: function play(unusedIsAutoplay) {
      }
    }, {
      key: "pause",
      value: function pause() {
      }
    }, {
      key: "mute",
      value: function mute() {
      }
    }, {
      key: "unmute",
      value: function unmute() {
      }
    }, {
      key: "showControls",
      value: function showControls() {
      }
    }, {
      key: "hideControls",
      value: function hideControls() {
      }
    }, {
      key: "getMetadata",
      value: function getMetadata() {
      }
    }, {
      key: "preimplementsAutoFullscreen",
      value: function preimplementsAutoFullscreen() {
      }
    }, {
      key: "preimplementsMediaSessionAPI",
      value: function preimplementsMediaSessionAPI() {
      }
    }, {
      key: "fullscreenEnter",
      value: function fullscreenEnter() {
      }
    }, {
      key: "fullscreenExit",
      value: function fullscreenExit() {
      }
    }, {
      key: "isFullscreen",
      value: function isFullscreen() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(unusedTimeSeconds) {
      }
    }]);
    return VideoInterface2;
  }();
  VideoInterface.prototype.element;
  VideoInterface.prototype.win;
  var VideoAttributes = {
    AUTOPLAY: "autoplay",
    DOCK: "dock",
    ROTATE_TO_FULLSCREEN: "rotate-to-fullscreen",
    NO_AUDIO: "noaudio"
  };
  var VideoEvents = {
    REGISTERED: "registered",
    LOAD: "load",
    LOADEDMETADATA: "loadedmetadata",
    LOADEDDATA: "loadeddata",
    PLAY: "play",
    PLAYING: "playing",
    PAUSE: "pause",
    ENDED: "ended",
    MUTED: "muted",
    UNMUTED: "unmuted",
    VISIBILITY: "amp:video:visibility",
    RELOAD: "reloaded",
    AD_START: "ad_start",
    AD_END: "ad_end",
    CUSTOM_TICK: "amp:video:tick"
  };
  var PlayingStates = {
    PLAYING_MANUAL: "playing_manual",
    PLAYING_AUTO: "playing_auto",
    PAUSED: "paused"
  };
  function isDockable(element) {
    return element.hasAttribute(VideoAttributes.DOCK);
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
  var Services = /* @__PURE__ */ function() {
    function Services2() {
      _classCallCheck3(this, Services2);
    }
    _createClass2(Services2, null, [{
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

  // extensions/amp-video-docking/0.1/timeout.js
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
  var Timeout = /* @__PURE__ */ function() {
    function Timeout2(win, handler) {
      _classCallCheck4(this, Timeout2);
      this.timer_ = Services.timerFor(win);
      this.handler_ = handler;
      this.id_ = null;
    }
    _createClass3(Timeout2, [{
      key: "trigger",
      value: function trigger(time) {
        var _this = this;
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        this.cancel();
        this.id_ = this.timer_.delay(function() {
          return _this.handler_.apply(null, args);
        }, time);
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (this.id_ !== null) {
          this.timer_.cancel(this.id_);
          this.id_ = null;
        }
      }
    }, {
      key: "isWaiting",
      value: function isWaiting() {
        return this.id_ !== null;
      }
    }]);
    return Timeout2;
  }();

  // extensions/amp-video-docking/0.1/events.js
  var VideoDockingEvents = {
    DISMISS_ON_TAP: "dock-dismiss-on-tap",
    SCROLL_BACK: "dock-scroll-back"
  };
  function pointerCoords(e) {
    var coords = e.touches ? e.touches[0] : e;
    return {
      x: dev().assertNumber("x" in coords ? coords.x : coords.clientX),
      y: dev().assertNumber("y" in coords ? coords.y : coords.clientY)
    };
  }

  // extensions/amp-video-docking/0.1/breakpoints.js
  function applyBreakpointClassname(element, width, breakpoints) {
    breakpoints = breakpoints.sort(function(a, b) {
      return b.minWidth - a.minWidth;
    });
    var maxBreakpoint = -1;
    breakpoints.forEach(function(breakpoint) {
      var className = breakpoint.className, minWidth = breakpoint.minWidth;
      if (minWidth <= width && minWidth > maxBreakpoint) {
        element.classList.add(className);
        maxBreakpoint = minWidth;
      } else {
        element.classList.remove(className);
      }
    });
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
    devAssert2(strings.length === 1, "Improper html template tag usage.");
    container.innerHTML = strings[0];
    var el = container.firstElementChild;
    devAssert2(el, "No elements in template");
    devAssert2(!el.nextElementSibling, "Too many root elements in template");
    container.removeChild(el);
    return el;
  }
  function htmlRefs(root) {
    var elements = root.querySelectorAll("[ref]");
    var refs = map();
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var ref = devAssert2(element.getAttribute("ref"), "Empty ref attr");
      element.removeAttribute("ref");
      devAssert2(refs[ref] === void 0, "Duplicate ref");
      refs[ref] = element;
    }
    return refs;
  }

  // src/core/math/layout-rect.js
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
  function rectIntersection(var_args) {
    var x0 = -Infinity;
    var x1 = Infinity;
    var y0 = -Infinity;
    var y1 = Infinity;
    for (var i = 0; i < arguments.length; i++) {
      var current = arguments[i];
      if (!current) {
        continue;
      }
      x0 = Math.max(x0, current.left);
      x1 = Math.min(x1, current.left + current.width);
      y0 = Math.max(y0, current.top);
      y1 = Math.min(y1, current.top + current.height);
      if (x1 < x0 || y1 < y0) {
        return null;
      }
    }
    if (x1 == Infinity) {
      return null;
    }
    return layoutRectLtwh(x0, y0, x1 - x0, y1 - y0);
  }
  function layoutRectEquals(r1, r2) {
    if (!r1 || !r2) {
      return false;
    }
    return r1.left == r2.left && r1.top == r2.top && r1.width == r2.width && r1.height == r2.height;
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
  function px(value) {
    return value + "px";
  }
  function translate(x, opt_y) {
    if (typeof x == "number") {
      x = px(x);
    }
    if (opt_y === void 0) {
      return "translate(" + x + ")";
    }
    if (typeof opt_y == "number") {
      opt_y = px(opt_y);
    }
    return "translate(" + x + ", " + opt_y + ")";
  }
  function resetStyles(element, properties) {
    for (var i = 0; i < properties.length; i++) {
      setStyle(element, properties[i], null);
    }
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // extensions/amp-video-docking/0.1/controls.js
  var _templateObject;
  var _templateObject2;
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
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var ControlSet = {
    PLAYBACK: "playback",
    SCROLL_BACK: "scroll-back"
  };
  var BREAKPOINTS = [{
    className: "amp-small",
    minWidth: 0
  }, {
    className: "amp-large",
    minWidth: 300
  }];
  var TIMEOUT = 1200;
  var TIMEOUT_AFTER_INTERACTION = 800;
  function swap(a, b) {
    toggle(a, false);
    toggle(b, true);
  }
  var renderDockedOverlay = function renderDockedOverlay2(html2) {
    return html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose([' <div class="i-amphtml-video-docked-overlay" hidden></div> '])));
  };
  var renderControls = function renderControls2(html2) {
    return html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n    <div class="amp-video-docked-controls" hidden>\n      <div\n        class="amp-video-docked-main-button-group\n               amp-video-docked-control-set-playback"\n      >\n        <div class="amp-video-docked-button-group">\n          <div\n            role="button"\n            ref="playButton"\n            class="amp-video-docked-play"\n          ></div>\n          <div\n            role="button"\n            ref="pauseButton"\n            class="amp-video-docked-pause"\n          ></div>\n        </div>\n        <div class="amp-video-docked-button-group">\n          <div\n            role="button"\n            ref="muteButton"\n            class="amp-video-docked-mute"\n          ></div>\n          <div\n            role="button"\n            ref="unmuteButton"\n            class="amp-video-docked-unmute"\n          ></div>\n        </div>\n        <div class="amp-video-docked-button-group">\n          <div\n            role="button"\n            ref="fullscreenButton"\n            class="amp-video-docked-fullscreen"\n          ></div>\n        </div>\n      </div>\n      <div\n        class="amp-video-docked-main-button-group\n               amp-video-docked-control-set-scroll-back"\n        hidden\n      >\n        <div class="amp-video-docked-button-group">\n          <div\n            role="button"\n            ref="scrollBackButton"\n            class="amp-video-docked-scroll-back"\n          ></div>\n        </div>\n      </div>\n      <div class="amp-video-docked-button-dismiss-group" ref="dismissContainer">\n        <div\n          role="button"\n          ref="dismissButton"\n          class="amp-video-docked-dismiss"\n        ></div>\n      </div>\n    </div>\n  '])));
  };
  var Controls = /* @__PURE__ */ function() {
    function Controls2(ampdoc) {
      var _this = this;
      _classCallCheck5(this, Controls2);
      this.ampdoc_ = ampdoc;
      var html2 = htmlFor(dev().assertElement(ampdoc.getBody()));
      this.container = renderControls(html2);
      this.overlay = renderDockedOverlay(html2);
      var refs = htmlRefs(this.container);
      var assertRef = function assertRef2(ref) {
        return dev().assertElement(refs[ref]);
      };
      this.dismissButton_ = assertRef("dismissButton");
      this.playButton_ = assertRef("playButton");
      this.pauseButton_ = assertRef("pauseButton");
      this.muteButton_ = assertRef("muteButton");
      this.unmuteButton_ = assertRef("unmuteButton");
      this.fullscreenButton_ = assertRef("fullscreenButton");
      this.scrollBackButton_ = assertRef("scrollBackButton");
      this.dismissContainer_ = assertRef("dismissContainer");
      this.controlSets_ = this.container.querySelectorAll(".amp-video-docked-main-button-group");
      this.isDisabled_ = false;
      this.isSticky_ = false;
      this.getHideTimeout_ = once(function() {
        return new Timeout(_this.ampdoc_.win, function() {
          _this.hide(true);
        });
      });
      this.videoUnlisteners_ = [];
      this.mouseMoveUnlistener_ = null;
      this.mouseOutUnlistener_ = null;
      this.area_ = null;
      this.video_ = null;
      this.hideOnTapOutside_();
      this.showOnTapOrHover_();
    }
    _createClass4(Controls2, [{
      key: "disable",
      value: function disable() {
        this.isDisabled_ = true;
      }
    }, {
      key: "enable",
      value: function enable() {
        this.isDisabled_ = false;
      }
    }, {
      key: "setVideo",
      value: function setVideo(video, area) {
        this.area_ = area;
        if (this.video_ !== video) {
          this.video_ = video;
          this.listen_(video);
        }
      }
    }, {
      key: "useControlSet_",
      value: function useControlSet_(setName) {
        var activeClassname = "amp-video-docked-control-set-" + setName;
        iterateCursor(this.controlSets_, function(controlSet) {
          toggle(controlSet, controlSet.classList.contains(activeClassname));
        });
      }
    }, {
      key: "listen_",
      value: function listen_(video) {
        var _this2 = this;
        this.unlisten_();
        var click = "click";
        var element = video.element;
        this.videoUnlisteners_.push(this.listenWhenEnabled_(this.dismissButton_, click, function() {
          _this2.dispatch_(VideoDockingEvents.DISMISS_ON_TAP);
        }), this.listenWhenEnabled_(this.playButton_, click, function() {
          video.play(false);
        }), this.listenWhenEnabled_(this.pauseButton_, click, function() {
          video.pause();
        }), this.listenWhenEnabled_(this.muteButton_, click, function() {
          video.mute();
        }), this.listenWhenEnabled_(this.unmuteButton_, click, function() {
          video.unmute();
        }), this.listenWhenEnabled_(this.fullscreenButton_, click, function() {
          video.fullscreenEnter();
        }), this.listenWhenEnabled_(this.scrollBackButton_, click, function() {
          _this2.dispatch_(VideoDockingEvents.SCROLL_BACK);
        }), listen(this.container, "mouseup", function() {
          return _this2.hideOnTimeout(TIMEOUT_AFTER_INTERACTION);
        }), listen(element, VideoEvents.PLAYING, function() {
          return _this2.onPlay_();
        }), listen(element, VideoEvents.PAUSE, function() {
          return _this2.onPause_();
        }), listen(element, VideoEvents.MUTED, function() {
          return _this2.onMute_();
        }), listen(element, VideoEvents.UNMUTED, function() {
          return _this2.onUnmute_();
        }), listen(element, VideoEvents.AD_START, function() {
          return _this2.useControlSet_(ControlSet.SCROLL_BACK);
        }), listen(element, VideoEvents.AD_END, function() {
          return _this2.useControlSet_(ControlSet.PLAYBACK);
        }));
      }
    }, {
      key: "dispatch_",
      value: function dispatch_(event) {
        this.container.dispatchEvent(createCustomEvent(this.ampdoc_.win, event, void 0));
      }
    }, {
      key: "onPlay_",
      value: function onPlay_() {
        var pauseButton_ = this.pauseButton_, playButton_ = this.playButton_;
        this.isSticky_ = false;
        swap(playButton_, pauseButton_);
      }
    }, {
      key: "onPause_",
      value: function onPause_() {
        var pauseButton_ = this.pauseButton_, playButton_ = this.playButton_;
        this.isSticky_ = true;
        swap(pauseButton_, playButton_);
      }
    }, {
      key: "onMute_",
      value: function onMute_() {
        var muteButton_ = this.muteButton_, unmuteButton_ = this.unmuteButton_;
        swap(muteButton_, unmuteButton_);
      }
    }, {
      key: "onUnmute_",
      value: function onUnmute_() {
        var muteButton_ = this.muteButton_, unmuteButton_ = this.unmuteButton_;
        swap(unmuteButton_, muteButton_);
      }
    }, {
      key: "listenWhenEnabled_",
      value: function listenWhenEnabled_(element, eventType, callback) {
        var _this3 = this;
        return listen(element, eventType, function() {
          if (_this3.isDisabled_) {
            return;
          }
          callback();
        });
      }
    }, {
      key: "unlisten_",
      value: function unlisten_() {
        while (this.videoUnlisteners_.length > 0) {
          this.videoUnlisteners_.pop().call();
        }
      }
    }, {
      key: "hideOnTimeout",
      value: function hideOnTimeout(timeout) {
        if (timeout === void 0) {
          timeout = TIMEOUT;
        }
        this.getHideTimeout_().trigger(timeout);
      }
    }, {
      key: "showOnTapOrHover_",
      value: function showOnTapOrHover_() {
        var _this4 = this;
        var overlay = this.overlay;
        var boundShow = function boundShow2() {
          return _this4.show_();
        };
        this.listenWhenEnabled_(overlay, "click", boundShow);
        this.listenWhenEnabled_(overlay, "mouseover", boundShow);
      }
    }, {
      key: "show_",
      value: function show_() {
        var _this5 = this;
        this.ampdoc_.win.requestAnimationFrame(function() {
          _this5.showOnNextAnimationFrame_();
        });
      }
    }, {
      key: "showOnNextAnimationFrame_",
      value: function showOnNextAnimationFrame_() {
        var manager = Services.videoManagerForDoc(this.ampdoc_);
        var video = devAssert2(this.video_);
        var isRollingAd = manager.isRollingAd(video);
        var isMuted = manager.isMuted(video);
        var isPlaying = manager.getPlayingState(video) !== PlayingStates.PAUSED;
        var container = this.container, overlay = this.overlay;
        toggle(container, true);
        container.classList.add("amp-video-docked-controls-shown");
        overlay.classList.add("amp-video-docked-controls-bg");
        this.useControlSet_(isRollingAd ? ControlSet.SCROLL_BACK : ControlSet.PLAYBACK);
        toggle(this.playButton_, !isPlaying);
        toggle(this.pauseButton_, isPlaying);
        toggle(this.muteButton_, !isMuted);
        toggle(this.unmuteButton_, isMuted);
        this.listenToMouseMove_();
        this.hideOnTimeout();
      }
    }, {
      key: "positionOnVsync",
      value: function positionOnVsync(scale, x, y, width, height) {
        this.area_ = layoutRectLtwh(x, y, width * scale, height * scale);
        var container = this.container;
        var halfScale = scale / 2;
        var centerX = x + width * halfScale;
        var centerY = y + height * halfScale;
        applyBreakpointClassname(container, scale * width, BREAKPOINTS);
        setImportantStyles(container, {
          "transform": translate(centerX, centerY)
        });
        var dismissMargin = 4;
        var dismissWidth = 40;
        var dismissX = width * halfScale - dismissMargin - dismissWidth;
        var dismissY = -(height * halfScale - dismissMargin - dismissWidth);
        setImportantStyles(this.dismissContainer_, {
          "transform": translate(dismissX, dismissY)
        });
      }
    }, {
      key: "hideOnTapOutside_",
      value: function hideOnTapOutside_() {
        var _this6 = this;
        listen(this.ampdoc_.getRootNode(), "mousedown", function(e) {
          if (_this6.isControlsTarget_(dev().assertElement(e.target))) {
            return;
          }
          _this6.hide(true);
        });
      }
    }, {
      key: "isControlsTarget_",
      value: function isControlsTarget_(target) {
        return target == this.overlay || !!closestAncestorElementBySelector(target, ".amp-video-docked-controls");
      }
    }, {
      key: "hide",
      value: function hide(opt_respectSticky, opt_immediately) {
        var ampVideoDockedControlsShown = "amp-video-docked-controls-shown";
        var container = this.container, overlay = this.overlay;
        if (!container.classList.contains(ampVideoDockedControlsShown)) {
          return;
        }
        if (opt_respectSticky && this.isSticky_) {
          return;
        }
        if (opt_immediately) {
          toggle(container, false);
          toggle(overlay, false);
        }
        overlay.classList.remove("amp-video-docked-controls-bg");
        container.classList.remove(ampVideoDockedControlsShown);
      }
    }, {
      key: "listenToMouseMove_",
      value: function listenToMouseMove_() {
        var _this7 = this;
        if (this.mouseMoveUnlistener_) {
          return;
        }
        this.mouseMoveUnlistener_ = listen(this.overlay, "mousemove", function() {
          _this7.show_();
        });
        this.mouseOutUnlistener_ = listen(this.overlay, "mouseout", function(e) {
          devAssert2(_this7.area_);
          var _pointerCoords = pointerCoords(e), x = _pointerCoords.x, y = _pointerCoords.y;
          var _this7$area_ = _this7.area_, bottom = _this7$area_.bottom, left = _this7$area_.left, right = _this7$area_.right, top = _this7$area_.top;
          if (!(x < left || x > right || y < top || y > bottom)) {
            return;
          }
          _this7.hide(true);
          _this7.unlistenToMouseMovement_();
        });
      }
    }, {
      key: "unlistenToMouseMovement_",
      value: function unlistenToMouseMovement_() {
        if (this.mouseMoveUnlistener_) {
          this.mouseMoveUnlistener_();
          this.mouseMoveUnlistener_ = null;
        }
        if (this.mouseOutUnlistener_) {
          this.mouseOutUnlistener_();
          this.mouseOutUnlistener_ = null;
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        var container = this.container, overlay = this.overlay;
        var els = [overlay, container];
        toggle(overlay, false);
        this.hide();
        for (var i = 0; i < els.length; i++) {
          var el = els[i];
          resetStyles(el, ["transform", "transition", "width", "height"]);
        }
      }
    }]);
    return Controls2;
  }();

  // extensions/amp-video-docking/0.1/def.js
  var DirectionX = {
    LEFT: "left",
    RIGHT: "right"
  };
  var DirectionY = {
    TOP: "top",
    BOTTOM: "bottom"
  };
  var FLOAT_TOLERANCE = 0.02;

  // src/core/math/index.js
  function mapRange(val, min1, max1, min2, max2) {
    var max1Bound = max1;
    var min1Bound = min1;
    if (min1 > max1) {
      max1Bound = min1;
      min1Bound = max1;
    }
    if (val < min1Bound) {
      val = min1Bound;
    } else if (val > max1Bound) {
      val = max1Bound;
    }
    return (val - min1) * (max2 - min2) / (max1 - min1) + min2;
  }

  // extensions/amp-video-docking/0.1/math.js
  function calculateJustified(containerWidth, itemWidth, itemMargin, directedStep) {
    return directedStep * (containerWidth - itemWidth - itemMargin * 2);
  }
  function calculateRightJustifiedX(containerWidth, itemWidth, itemMargin, step) {
    return calculateJustified(containerWidth, itemWidth, itemMargin, step);
  }
  function calculateLeftJustifiedX(containerWidth, itemWidth, itemMargin, step) {
    return calculateJustified(containerWidth, itemWidth, itemMargin, -step);
  }
  var mapStep = function mapStep2(step, min, max) {
    return mapRange(step, 0, 1, min, max);
  };
  function interpolatedBoxesTransform(from, to, step) {
    if (step === void 0) {
      step = 1;
    }
    var relativeX = to.x < from.x ? DirectionX.LEFT : DirectionX.RIGHT;
    var x = mapStep(step, from.x, to.x);
    var y = mapStep(step, from.y, to.y);
    var width = mapStep(step, from.width, to.width);
    var scale = width / from.width;
    return {
      x,
      y,
      scale,
      relativeX
    };
  }
  function letterboxRect(original, container) {
    var height = original.height, width = original.width;
    var maxHeight = container.height, left = container.left, top = container.top, maxWidth = container.width;
    var containerAspect = maxWidth / maxHeight;
    var originalAspect = width / height;
    var x, y, scale;
    if (originalAspect > containerAspect) {
      scale = maxWidth / width;
      y = top + maxHeight / 2 - height * scale / 2;
      x = left;
    } else {
      scale = maxHeight / height;
      x = left + maxWidth / 2 - width * scale / 2;
      y = top;
    }
    return layoutRectLtwh(x, y, width * scale, height * scale);
  }
  function topCornerRect(original, container, horizontalEdge, widthRatio, widthMin, marginRatio, marginMax) {
    var widthUnit = container.width;
    var margin = Math.min(marginMax, marginRatio * widthUnit);
    var aspect = original.width / original.height;
    var width = Math.max(widthMin, widthUnit * widthRatio);
    var height = width / aspect;
    var x = horizontalEdge == DirectionX.RIGHT ? container.right - margin - width : container.left + margin;
    var y = margin;
    return layoutRectLtwh(x, y, width, height);
  }
  var isVisibleBySize = function isVisibleBySize2(element) {
    return isSizedRect(element.getBoundingClientRect());
  };
  var isSizedRect = function isSizedRect2(rect) {
    return rect.width > 0 && rect.height > 0;
  };

  // extensions/amp-video-docking/0.1/viewport-rect.js
  var readonlyGetterProp = function readonlyGetterProp2(get) {
    return {
      get,
      configurable: false,
      enumerable: true
    };
  };
  function createViewportRect(viewport) {
    var width = readonlyGetterProp(function() {
      return viewport.getSize().width;
    });
    var height = readonlyGetterProp(function() {
      return viewport.getSize().height;
    });
    return Object.defineProperties(layoutRectLtwh(0, 0, 0, 0), {
      width,
      height,
      right: width,
      bottom: height
    });
  }

  // src/utils/video.js
  function getInternalVideoElementFor(element) {
    return dev().assertElement(element.querySelector("video, iframe"));
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

  // extensions/amp-video-docking/0.1/amp-video-docking.js
  var _templateObject3;
  var _templateObject22;
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
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var TAG = "amp-video-docking";
  var CORNER_WIDTH_RATIO = 0.3;
  var CORNER_WIDTH_MIN = 180;
  var CORNER_MARGIN_MAX = 30;
  var CORNER_MARGIN_RATIO = 0.04;
  var MIN_VIEWPORT_WIDTH = 320;
  var REVERT_TO_INLINE_RATIO = 0.85;
  var PLACEHOLDER_ICON_LARGE_WIDTH = 48;
  var PLACEHOLDER_ICON_LARGE_MARGIN = 40;
  var PLACEHOLDER_ICON_SMALL_WIDTH = 32;
  var PLACEHOLDER_ICON_SMALL_MARGIN = 20;
  var PLACEHOLDER_ICON_BREAKPOINTS = [{
    className: "amp-small",
    minWidth: 0
  }, {
    className: "amp-large",
    minWidth: 420
  }];
  var BASE_CLASS_NAME = "i-amphtml-video-docked";
  var Actions = {
    DOCK: "dock",
    UNDOCK: "undock"
  };
  var DockTargetType = {
    CORNER: "corner",
    SLOT: "slot"
  };
  var transform = function transform2(x, y, scale) {
    return "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
  };
  function throttleByAnimationFrame(win, fn) {
    var running = false;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (running) {
        return;
      }
      running = true;
      win.requestAnimationFrame(function() {
        fn.apply(null, args);
        running = false;
      });
    };
  }
  function complainAboutPortrait(element) {
    var TAG2 = element.tagName.toUpperCase();
    user().error(TAG2, "Minimize-to-corner (`dock`) does not support portrait video.", element);
  }
  function getPosterImageSrc(element) {
    var attr = element.getAttribute("poster") || element.getAttribute("data-poster");
    if (attr) {
      return attr;
    }
    var imgEl = scopedQuerySelector(element, "amp-img[placeholder],img[placeholder],[placeholder] amp-img");
    if (imgEl) {
      return imgEl.getAttribute("src");
    }
  }
  var ShadowLayer = function ShadowLayer2(html2) {
    return html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose2([' <div class="amp-video-docked-shadow" hidden></div> '])));
  };
  var PlaceholderBackground = function PlaceholderBackground2(html2) {
    return html2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose2(['\n    <div class="amp-video-docked-placeholder-background">\n      <div\n        class="amp-video-docked-placeholder-background-poster"\n        ref="poster"\n      ></div>\n      <div class="amp-video-docked-placeholder-icon" ref="icon"></div>\n    </div>\n  '])));
  };
  var VideoDocking = /* @__PURE__ */ function() {
    function VideoDocking2(ampdoc) {
      var _this = this;
      _classCallCheck6(this, VideoDocking2);
      this.ampdoc_ = ampdoc;
      this.manager_ = once(function() {
        return Services.videoManagerForDoc(ampdoc);
      });
      this.viewport_ = Services.viewportForDoc(ampdoc);
      this.viewportRect_ = createViewportRect(this.viewport_);
      this.currentlyDocked_ = null;
      this.cornerDirectionX_ = null;
      var html2 = htmlFor(this.getDoc_());
      this.getShadowLayer_ = once(function() {
        return _this.append_(ShadowLayer(html2));
      });
      this.getControls_ = once(function() {
        return _this.installControls_();
      });
      this.getPlaceholderBackground_ = once(function() {
        return _this.append_(PlaceholderBackground(html2));
      });
      this.getPlaceholderRefs_ = once(function() {
        return htmlRefs(_this.getPlaceholderBackground_());
      });
      this.lastDismissed_ = null;
      this.placedAt_ = null;
      this.sizedAt_ = null;
      this.scrollDirection_ = null;
      this.lastScrollTop_ = this.viewport_.getScrollTop();
      this.isDragging_ = false;
      this.dragOffsetX_ = 0;
      this.previousDragOffsetX_ = 0;
      this.dragVelocityX_ = 0;
      this.observed_ = [];
      this.install_ = once(function() {
        var ampdoc2 = _this.ampdoc_;
        _this.viewport_.onScroll(throttleByAnimationFrame(ampdoc2.win, function() {
          return _this.updateScroll_();
        }));
        _this.viewport_.onResize(function() {
          return _this.onViewportResize_();
        });
        installStylesForDoc(ampdoc2, CSS2, null, false, TAG);
      });
      this.findSlotOnce_ = once(function() {
        return _this.findSlot_();
      });
      this.intersectionObserver_ = null;
      this.isTransitioning_ = false;
      this.registerAll_();
    }
    _createClass5(VideoDocking2, [{
      key: "registerAll_",
      value: function registerAll_() {
        var _this2 = this;
        if (!this.isEnabled_()) {
          return;
        }
        var ampdoc = this.ampdoc_;
        var dockableSelector = "[" + escapeCssSelectorIdent(VideoAttributes.DOCK) + "]";
        var dockableElements = ampdoc.getRootNode().querySelectorAll(dockableSelector);
        for (var i = 0; i < dockableElements.length; i++) {
          var element = dockableElements[i];
          if (element.signals && element.signals().get(VideoEvents.REGISTERED)) {
            this.registerElement(element);
          }
        }
        listen(ampdoc.getBody(), VideoEvents.REGISTERED, function(e) {
          var target = dev().assertElement(e.target);
          if (isDockable(target)) {
            _this2.registerElement(target);
          }
        });
      }
    }, {
      key: "isEnabled_",
      value: function isEnabled_() {
        if (Services.platformFor(this.ampdoc_.win).isIos() && Services.viewerForDoc(this.ampdoc_).isEmbedded()) {
          return false;
        }
        return true;
      }
    }, {
      key: "findSlot_",
      value: function findSlot_() {
        var root = this.ampdoc_.getRootNode();
        var video = root.querySelector("[dock]");
        dev().assertElement(video);
        userAssert(video.signals().get(VideoEvents.REGISTERED), "`dock` attribute can only be set on video components.");
        var slotSelector = video.getAttribute("dock").trim();
        if (slotSelector == "") {
          return null;
        }
        var el = root.querySelector(slotSelector);
        if (el) {
          userAssert(el.tagName.toLowerCase() == "amp-layout", "Dock slot must be an <amp-layout> element.");
        }
        return el;
      }
    }, {
      key: "onViewportResize_",
      value: function onViewportResize_() {
        var _this3 = this;
        this.observed_.forEach(function(video) {
          return _this3.updateOnResize_(video);
        });
      }
    }, {
      key: "getTopBoundary_",
      value: function getTopBoundary_() {
        var slot = this.getSlot_();
        if (slot) {
          return slot.getBoundingClientRect().top;
        }
        return 0;
      }
    }, {
      key: "register",
      value: function register(video) {
        var _this4 = this;
        this.install_();
        if (!this.intersectionObserver_) {
          this.intersectionObserver_ = new IntersectionObserver(function(entries) {
            var handled = [];
            var _loop = function _loop2(i2) {
              var _entries$i = entries[i2], boundingClientRect = _entries$i.boundingClientRect, target = _entries$i.target;
              if (handled.indexOf(target) < 0) {
                target.getImpl().then(function(video2) {
                  _this4.updateOnPositionChange_(video2, boundingClientRect);
                });
                handled.push(target);
              }
            };
            for (var i = entries.length - 1; i >= 0; i--) {
              _loop(i);
            }
          }, {
            threshold: [0, 0.1, 0.2, 0.8, 0.9, 1]
          });
        }
        this.intersectionObserver_.observe(video.element);
        this.observed_.push(video);
      }
    }, {
      key: "registerElement",
      value: function registerElement(element) {
        var _this5 = this;
        element.getImpl().then(function(video) {
          return _this5.register(video);
        });
      }
    }, {
      key: "updateScroll_",
      value: function updateScroll_() {
        var scrollTop = this.viewport_.getScrollTop();
        if (Math.abs(scrollTop - this.lastScrollTop_) < 5) {
          return;
        }
        var scrollDirection = scrollTop > this.lastScrollTop_ ? DirectionY.TOP : DirectionY.BOTTOM;
        this.scrollDirection_ = scrollDirection;
        this.lastScrollTop_ = scrollTop;
      }
    }, {
      key: "getDoc_",
      value: function getDoc_() {
        var root = this.ampdoc_.getRootNode();
        return root.ownerDocument || root;
      }
    }, {
      key: "append_",
      value: function append_(element) {
        var root = this.getDoc_().body || this.getDoc_();
        return dev().assertElement(root.appendChild(element));
      }
    }, {
      key: "addDragListeners_",
      value: function addDragListeners_(element) {
        var _this6 = this;
        var handler = function handler2(e) {
          return _this6.drag_(e);
        };
        listen(element, "touchstart", handler);
        listen(element, "mousedown", handler);
        return element;
      }
    }, {
      key: "installControls_",
      value: function installControls_() {
        var _this7 = this;
        var controls = new Controls(this.ampdoc_);
        var container = controls.container, overlay = controls.overlay;
        listen(container, VideoDockingEvents.DISMISS_ON_TAP, function() {
          _this7.dismissOnTap_();
        });
        listen(container, VideoDockingEvents.SCROLL_BACK, function() {
          _this7.scrollBack_();
        });
        this.addDragListeners_(container);
        this.addDragListeners_(overlay);
        this.append_(container);
        this.append_(overlay);
        return controls;
      }
    }, {
      key: "dismissOnTap_",
      value: function dismissOnTap_() {
        this.getControls_().hide(false, true);
        this.undock_(this.getDockedVideo_());
      }
    }, {
      key: "getDockedVideo_",
      value: function getDockedVideo_() {
        return devAssert2(this.currentlyDocked_).video;
      }
    }, {
      key: "getTargetFor_",
      value: function getTargetFor_(video, opt_inlineRect) {
        if (this.isDragging_ || !this.isValidSize_(video, opt_inlineRect) || this.ignoreBecauseAnotherDocked_(video) || this.ignoreDueToNotPlayingManually_(video)) {
          return null;
        }
        var element = video.element;
        var inlineRect = opt_inlineRect || element.getBoundingClientRect();
        var intersectionRect = rectIntersection(inlineRect, this.viewportRect_);
        if (!intersectionRect || !isSizedRect(intersectionRect)) {
          return null;
        }
        if (intersectionRect.top > this.getTopBoundary_()) {
          return null;
        }
        return this.getUsableTarget_(video, opt_inlineRect);
      }
    }, {
      key: "getScrollAdjustedRect_",
      value: function getScrollAdjustedRect_(element) {
        element = element.element || element;
        return element.getBoundingClientRect();
      }
    }, {
      key: "updateOnResize_",
      value: function updateOnResize_(video) {
        var _this8 = this;
        this.raf_(function() {
          var target = _this8.getTargetFor_(video);
          if (target) {
            _this8.dock_(video, target, 1);
            return;
          }
          if (_this8.isCurrentlyDocked_(video)) {
            _this8.undock_(video);
          }
        });
      }
    }, {
      key: "raf_",
      value: function raf_(cb) {
        this.ampdoc_.win.requestAnimationFrame(cb);
      }
    }, {
      key: "updateOnPositionChange_",
      value: function updateOnPositionChange_(video, opt_inlineRect) {
        if (this.isTransitioning_) {
          return;
        }
        if (this.scrollDirection_ == DirectionY.TOP) {
          var target = this.getTargetFor_(video, opt_inlineRect);
          if (target) {
            this.dockOnPositionChange_(video, target, opt_inlineRect);
          }
        } else if (this.scrollDirection_ == DirectionY.BOTTOM) {
          if (!this.currentlyDocked_) {
            return;
          }
          if (video === this.getDockedVideo_()) {
            if (this.isVisible_(video, REVERT_TO_INLINE_RATIO, opt_inlineRect)) {
              this.undock_(video, false, opt_inlineRect);
            }
          }
        }
      }
    }, {
      key: "ignoreDueToNotPlayingManually_",
      value: function ignoreDueToNotPlayingManually_(video) {
        return !this.currentlyDocked_ && !this.isPlaying_(video);
      }
    }, {
      key: "ignoreBecauseAnotherDocked_",
      value: function ignoreBecauseAnotherDocked_(video) {
        return !!this.currentlyDocked_ && !this.isCurrentlyDocked_(video);
      }
    }, {
      key: "isValidSize_",
      value: function isValidSize_(video, opt_inlineRect) {
        var _ref = opt_inlineRect || video.element.getBoundingClientRect(), height = _ref.height, width = _ref.width;
        if (width / height < 1 - FLOAT_TOLERANCE) {
          complainAboutPortrait(video.element);
          return false;
        }
        return this.viewportRect_.width >= MIN_VIEWPORT_WIDTH && this.viewportRect_.height >= height * REVERT_TO_INLINE_RATIO;
      }
    }, {
      key: "isPlaying_",
      value: function isPlaying_(optVideo) {
        if (optVideo === void 0) {
          optVideo = null;
        }
        var video = optVideo || this.getDockedVideo_();
        return this.manager_().getPlayingState(video) == PlayingStates.PLAYING_MANUAL;
      }
    }, {
      key: "dockOnPositionChange_",
      value: function dockOnPositionChange_(video, target, opt_inlineRect) {
        if (this.ignoreDueToDismissal_(video)) {
          return;
        }
        if (this.currentlyDocked_) {
          return;
        }
        this.dockInTransferLayerStep_(video, target, opt_inlineRect);
      }
    }, {
      key: "dockInTransferLayerStep_",
      value: function dockInTransferLayerStep_(video, target, opt_inlineRect) {
        var _this9 = this;
        var isTransferLayerStep = true;
        return this.dock_(video, target, 0.05, opt_inlineRect, isTransferLayerStep).then(function() {
          return new Promise(function(resolve) {
            _this9.raf_(function() {
              _this9.dock_(video, target, 1, opt_inlineRect).then(resolve);
            });
          });
        });
      }
    }, {
      key: "dock_",
      value: function dock_(video, target, step, opt_inlineRect, opt_isTransferLayerStep) {
        var _this10 = this;
        var element = video.element;
        this.removePosterForAndroidBug_(element);
        var _this$getDims_ = this.getDims_(video, target, step, opt_inlineRect), relativeX = _this$getDims_.relativeX, scale = _this$getDims_.scale, x = _this$getDims_.x, y = _this$getDims_.y;
        video.hideControls();
        var transitionDurationMs = this.calculateTransitionDuration_(step);
        this.setCurrentlyDocked_(video, target, step);
        return this.placeAt_(video, x, y, scale, step, transitionDurationMs, relativeX, opt_inlineRect).then(function() {
          if (opt_isTransferLayerStep) {
            return;
          }
          _this10.getControls_().enable();
        });
      }
    }, {
      key: "trigger_",
      value: function trigger_(action, opt_target) {
        var element = dev().assertElement(opt_target && opt_target.slot || this.getSlot_() || this.getDockedVideo_().element);
        var trust = ActionTrust.LOW;
        var event = createCustomEvent(this.ampdoc_.win, action, dict({}));
        var actions = Services.actionServiceForDoc(element);
        actions.trigger(element, action, event, trust);
      }
    }, {
      key: "ignoreDueToDismissal_",
      value: function ignoreDueToDismissal_(video) {
        if (this.lastDismissed_ != video) {
          return false;
        }
        if (this.isVisible_(video.element, FLOAT_TOLERANCE)) {
          this.resetDismissed_();
        }
        return true;
      }
    }, {
      key: "resetDismissed_",
      value: function resetDismissed_() {
        this.lastDismissed_ = null;
      }
    }, {
      key: "calculateTransitionDuration_",
      value: function calculateTransitionDuration_(step) {
        var maxAutoTransitionDurationMs = 300;
        if (!this.currentlyDocked_) {
          return 0;
        }
        var remaining = Math.abs(step - this.currentlyDocked_.step);
        return remaining * maxAutoTransitionDurationMs;
      }
    }, {
      key: "alreadyPlacedAt_",
      value: function alreadyPlacedAt_(x, y, scale) {
        return !!this.placedAt_ && this.placedAt_.x == x && this.placedAt_.y == y && this.placedAt_.scale == scale;
      }
    }, {
      key: "placeAt_",
      value: function placeAt_(video, x, y, scale, step, transitionDurationMs, opt_relativeX, opt_inlineRect, position) {
        var _this11 = this;
        if (position === void 0) {
          position = "fixed";
        }
        if (this.alreadyPlacedAt_(x, y, scale)) {
          return resolvedPromise();
        }
        this.isTransitioning_ = true;
        var element = video.element;
        var inlineRect = opt_inlineRect || video.element.getBoundingClientRect();
        var height = inlineRect.height, width = inlineRect.width;
        this.placedAt_ = {
          x,
          y,
          scale
        };
        var transitionTiming = step > 0 ? "ease-out" : "ease-in";
        var internalElement = getInternalVideoElementFor(element);
        var shadowLayer = this.getShadowLayer_();
        var _this$getControls_ = this.getControls_(), overlay = _this$getControls_.overlay;
        var placeholderBackground = this.getPlaceholderBackground_();
        var placeholderIcon = this.getPlaceholderRefs_()["icon"];
        var hasRelativePlacement = opt_relativeX !== void 0;
        var isPlacementRtl = opt_relativeX == DirectionX.LEFT;
        if (hasRelativePlacement) {
          applyBreakpointClassname(placeholderIcon, width, PLACEHOLDER_ICON_BREAKPOINTS);
          placeholderIcon.classList.toggle("amp-rtl", isPlacementRtl);
          this.getControls_().container.classList.toggle("amp-rtl", isPlacementRtl);
        }
        var boxNeedsSizing = this.boxNeedsSizing_(width, height);
        var maybeSetSizing = function maybeSetSizing2(element2) {
          if (!boxNeedsSizing) {
            return;
          }
          setImportantStyles(element2, {
            "width": px(width),
            "height": px(height),
            "min-width": px(width),
            "min-height": px(height)
          });
        };
        var setOpacity = function setOpacity2(element2) {
          return setImportantStyles(element2, {
            "opacity": step
          });
        };
        var setTransitionTiming = function setTransitionTiming2(element2) {
          return setImportantStyles(element2, {
            "transition-duration": transitionDurationMs + "ms",
            "transition-timing-function": transitionTiming
          });
        };
        var isSmallPlaceholderIcon = placeholderIcon.classList.contains("amp-small");
        var placeholderIconWidth = isSmallPlaceholderIcon ? PLACEHOLDER_ICON_SMALL_WIDTH : PLACEHOLDER_ICON_LARGE_WIDTH;
        var placeholderIconMargin = isSmallPlaceholderIcon ? PLACEHOLDER_ICON_SMALL_MARGIN : PLACEHOLDER_ICON_LARGE_MARGIN;
        var iconPlacementFn = isPlacementRtl ? calculateLeftJustifiedX : calculateRightJustifiedX;
        var placeholderIconX = iconPlacementFn(width, placeholderIconWidth, placeholderIconMargin, step);
        video.mutateElement(function() {
          internalElement.classList.add(BASE_CLASS_NAME);
          setImportantStyles(element, {
            "overflow": "visible"
          });
          toggle(shadowLayer, true);
          toggle(overlay, true);
          video.applyFillContent(_this11.getPlaceholderRefs_()["poster"]);
          video.applyFillContent(placeholderBackground);
          _this11.setPosterImage_(video);
          element.appendChild(placeholderBackground);
          _this11.raf_(function() {
            video.mutateElement(function() {
              setOpacity(placeholderBackground);
              setTransitionTiming(placeholderBackground);
              setTransitionTiming(placeholderIcon);
              if (hasRelativePlacement) {
                var _y = 0;
                var _scale = 1;
                setImportantStyles(placeholderIcon, {
                  "transform": transform(placeholderIconX, _y, _scale)
                });
              }
            });
          });
          var offsetLeft = 0;
          var offsetTop = 0;
          var bodyLevelOffsetLeft = 0;
          var bodyLevelOffsetTop = 0;
          if (position === "absolute") {
            offsetLeft = inlineRect.left;
            offsetTop = inlineRect.top;
            bodyLevelOffsetLeft = element.offsetLeft;
            bodyLevelOffsetTop = element.offsetTop;
          }
          _this11.getElementsOnDockArea_(video).forEach(function(element2) {
            var bodyLevelOffsetFactor = Number(element2 !== internalElement);
            var left = bodyLevelOffsetFactor * bodyLevelOffsetLeft - offsetLeft;
            var top = bodyLevelOffsetFactor * bodyLevelOffsetTop - offsetTop;
            setImportantStyles(element2, {
              "position": position,
              "left": px(left),
              "top": px(top),
              "transform": transform(x, y, scale)
            });
            setTransitionTiming(element2);
            maybeSetSizing(element2);
          });
          setOpacity(shadowLayer);
          _this11.getControls_().positionOnVsync(scale, x, y, width, height);
        });
        return this.getTimer_().promise(transitionDurationMs).then(function() {
          _this11.isTransitioning_ = false;
        });
      }
    }, {
      key: "getTimer_",
      value: function getTimer_() {
        return Services.timerFor(this.ampdoc_.win);
      }
    }, {
      key: "getElementsOnDockArea_",
      value: function getElementsOnDockArea_(video) {
        return [getInternalVideoElementFor(video.element), this.getShadowLayer_(), this.getControls_().overlay];
      }
    }, {
      key: "setPosterImage_",
      value: function setPosterImage_(video) {
        var placeholderPoster = this.getPlaceholderRefs_()["poster"];
        var posterSrc = getPosterImageSrc(video.element);
        if (!posterSrc) {
          toggle(placeholderPoster, false);
          return;
        }
        toggle(placeholderPoster, true);
        setStyles(placeholderPoster, {
          "background-image": "url(" + posterSrc + ")"
        });
      }
    }, {
      key: "boxNeedsSizing_",
      value: function boxNeedsSizing_(width, height) {
        var needsSizing = !this.sizedAt_ || this.sizedAt_.width != width || this.sizedAt_.height != height;
        if (needsSizing) {
          this.sizedAt_ = {
            width,
            height
          };
        }
        return needsSizing;
      }
    }, {
      key: "isCurrentlyDocked_",
      value: function isCurrentlyDocked_(video) {
        return !!this.currentlyDocked_ && this.currentlyDocked_.video == video;
      }
    }, {
      key: "setCurrentlyDocked_",
      value: function setCurrentlyDocked_(video, target, step) {
        var previouslyDocked = this.currentlyDocked_;
        this.currentlyDocked_ = {
          video,
          target,
          step
        };
        if (previouslyDocked && previouslyDocked.video == video && layoutRectEquals(target.rect, previouslyDocked.target.rect)) {
          return;
        }
        this.getControls_().setVideo(video, target.rect);
        this.trigger_(Actions.DOCK, target);
      }
    }, {
      key: "offsetX_",
      value: function offsetX_(offsetX) {
        var video = this.getDockedVideo_();
        var target = this.currentlyDocked_.target;
        var step = 1;
        var transitionDurationMs = 0;
        var _this$getDims_2 = this.getDims_(video, target, step), scale = _this$getDims_2.scale, x = _this$getDims_2.x, y = _this$getDims_2.y;
        var centerX = this.getCenterX_(offsetX);
        var directionX = this.calculateDirectionX_(centerX);
        this.dragVelocityX_ = offsetX - this.previousDragOffsetX_;
        this.previousDragOffsetX_ = offsetX;
        this.placeAt_(video, x + offsetX, y, scale, step, transitionDurationMs, directionX);
      }
    }, {
      key: "isVisible_",
      value: function isVisible_(element, minRatio, opt_inlineRect) {
        if (minRatio === void 0) {
          minRatio = 1;
        }
        var inlineRect = opt_inlineRect || this.getScrollAdjustedRect_(element);
        if (!isSizedRect(inlineRect)) {
          return 0;
        }
        var intersectionHeight = Math.min(inlineRect.bottom, this.viewportRect_.bottom) - Math.max(inlineRect.top, this.viewportRect_.top);
        var intersectionRatio = Math.max(0, intersectionHeight / inlineRect.height);
        return intersectionRatio > minRatio - FLOAT_TOLERANCE;
      }
    }, {
      key: "drag_",
      value: function drag_(e) {
        var _this12 = this;
        if (!this.currentlyDocked_) {
          return;
        }
        if (this.isDockedToType_(DockTargetType.SLOT)) {
          return;
        }
        if (this.isTransitioning_) {
          return;
        }
        this.dragOffsetX_ = 0;
        var _pointerCoords = pointerCoords(e), x = _pointerCoords.x;
        var directionX = this.currentlyDocked_.target.directionX;
        var onDragMove = throttleByAnimationFrame(this.ampdoc_.win, function(e2) {
          return _this12.onDragMove_(e2, directionX, x);
        });
        var onDragEnd = function onDragEnd2() {
          return _this12.onDragEnd_(unlisteners);
        };
        var root = this.ampdoc_.getRootNode();
        var unlisteners = [this.disableScroll_(), this.disableUserSelect_(), this.workaroundWebkitDragAndScrollIssue_(), listen(root, "touchmove", onDragMove), listen(root, "mousemove", onDragMove), listenOnce(root, "touchend", onDragEnd), listenOnce(root, "mouseup", onDragEnd)];
      }
    }, {
      key: "isDockedToType_",
      value: function isDockedToType_(type) {
        return !!this.currentlyDocked_ && this.currentlyDocked_.target.type === type;
      }
    }, {
      key: "disableUserSelect_",
      value: function disableUserSelect_() {
        var docEl = dev().assertElement(this.getDoc_().documentElement);
        var disabledClassName = "i-amphtml-select-disabled";
        docEl.classList.add(disabledClassName);
        return function() {
          return docEl.classList.remove(disabledClassName);
        };
      }
    }, {
      key: "disableScroll_",
      value: function disableScroll_() {
        this.viewport_.disableScroll();
        return this.viewport_.resetScroll.bind(this.viewport_);
      }
    }, {
      key: "onDragMove_",
      value: function onDragMove_(e, directionX, startX) {
        if (this.currentlyDocked_.target.directionX !== directionX) {
          return;
        }
        var offsetX = pointerCoords(e).x - startX;
        this.dragOffsetX_ = offsetX;
        if (offsetX <= 10) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        this.getControls_().hide(false, true);
        this.isDragging_ = true;
        this.getControls_().disable();
        this.offsetX_(offsetX);
      }
    }, {
      key: "workaroundWebkitDragAndScrollIssue_",
      value: function workaroundWebkitDragAndScrollIssue_() {
        var win = this.ampdoc_.win;
        if (!Services.platformFor(win).isIos()) {
          return function() {
          };
        }
        var handler = function handler2(e) {
          return e.preventDefault();
        };
        win.addEventListener("touchmove", handler, {
          passive: false
        });
        return function() {
          return win.removeEventListener("touchmove", handler);
        };
      }
    }, {
      key: "onDragEnd_",
      value: function onDragEnd_(unlisteners) {
        unlisteners.forEach(function(unlisten) {
          return unlisten.call();
        });
        this.isDragging_ = false;
        this.getControls_().enable();
        if (Math.abs(this.dragVelocityX_) < 40) {
          this.snap_(this.dragOffsetX_);
        } else {
          this.flickToDismiss_(this.previousDragOffsetX_, Math.sign(this.dragVelocityX_));
        }
        this.dragVelocityX_ = 0;
        this.previousDragOffsetX_ = 0;
        this.dragOffsetX_ = 0;
      }
    }, {
      key: "flickToDismiss_",
      value: function flickToDismiss_(offsetX, direction) {
        var _this13 = this;
        devAssert2(Math.abs(direction) == 1);
        var video = this.getDockedVideo_();
        video.pause();
        if (this.isVisible_(video, 0.2)) {
          this.bounceToDismiss_(video, offsetX, direction);
          return;
        }
        var step = 1;
        var _devAssert = devAssert2(this.currentlyDocked_), target = _devAssert.target;
        var _target$rect = target.rect, width = _target$rect.width, x = _target$rect.x, y = _target$rect.y;
        var _this$getDims_3 = this.getDims_(video, target, step), scale = _this$getDims_3.scale;
        var currentX = x + offsetX;
        var nextX = direction == 1 ? this.viewportRect_.right : this.viewportRect_.left - width;
        var transitionDurationMs = this.calculateDismissalTransitionDurationMs_(nextX - currentX);
        this.reconcileUndocked_();
        video.showControls();
        this.placeAt_(video, nextX, y, scale, 0, transitionDurationMs).then(function() {
          _this13.resetOnUndock_(video);
        });
      }
    }, {
      key: "bounceToDismiss_",
      value: function bounceToDismiss_(video, offsetX, direction) {
        var _this14 = this;
        devAssert2(Math.abs(direction) == 1);
        var step = 1;
        var _devAssert2 = devAssert2(this.currentlyDocked_), target = _devAssert2.target;
        var _target$rect2 = target.rect, width = _target$rect2.width, x = _target$rect2.x, y = _target$rect2.y;
        var _this$getDims_4 = this.getDims_(video, target, step), scale = _this$getDims_4.scale;
        var outerWidth = this.viewportRect_.width;
        var currentX = x + offsetX;
        var nextX = direction == 1 ? calculateRightJustifiedX(outerWidth, width, 0, step) : calculateLeftJustifiedX(outerWidth, width, 0, step);
        var transitionDurationMs = this.calculateDismissalTransitionDurationMs_(nextX - currentX);
        this.reconcileUndocked_();
        this.placeAt_(video, nextX, y, scale, 0, transitionDurationMs).then(function() {
          _this14.undock_(video, true);
          video.showControls();
        });
      }
    }, {
      key: "calculateDismissalTransitionDurationMs_",
      value: function calculateDismissalTransitionDurationMs_(deltaX) {
        return Math.min(300, Math.abs(deltaX) / 2);
      }
    }, {
      key: "getCenterX_",
      value: function getCenterX_(offsetX) {
        var _this$currentlyDocked = this.currentlyDocked_, step = _this$currentlyDocked.step, target = _this$currentlyDocked.target;
        var video = this.getDockedVideo_();
        var _video$element$getBou = video.element.getBoundingClientRect(), width = _video$element$getBou.width;
        var _this$getDims_5 = this.getDims_(video, target, step), scale = _this$getDims_5.scale, x = _this$getDims_5.x;
        return x + offsetX + width * scale / 2;
      }
    }, {
      key: "snap_",
      value: function snap_(offsetX) {
        var video = this.getDockedVideo_();
        var step = this.currentlyDocked_.step;
        var directionX = this.calculateDirectionX_(offsetX);
        this.cornerDirectionX_ = directionX;
        var target = this.getUsableTarget_(video);
        this.currentlyDocked_.target = target;
        var _this$getDims_6 = this.getDims_(video, target, step), scale = _this$getDims_6.scale, x = _this$getDims_6.x, y = _this$getDims_6.y;
        this.placeAt_(video, x, y, scale, step, 200, directionX);
      }
    }, {
      key: "calculateDirectionX_",
      value: function calculateDirectionX_(offsetX) {
        return this.getCenterX_(offsetX) >= this.viewportRect_.width / 2 ? DirectionX.RIGHT : DirectionX.LEFT;
      }
    }, {
      key: "getDims_",
      value: function getDims_(video, target, step, opt_inlineRect) {
        return interpolatedBoxesTransform(opt_inlineRect || this.getScrollAdjustedRect_(video), target.rect, step);
      }
    }, {
      key: "undock_",
      value: function undock_(video, opt_reconciled, opt_inlineRect) {
        var _this15 = this;
        var isMostlyInView = this.isVisible_(video, REVERT_TO_INLINE_RATIO, opt_inlineRect);
        if (!isMostlyInView) {
          video.pause();
          video.showControls();
        }
        if (!opt_reconciled) {
          this.reconcileUndocked_();
        }
        var step = 0;
        var _devAssert3 = devAssert2(this.currentlyDocked_), target = _devAssert3.target;
        var _this$getDims_7 = this.getDims_(video, target, step), relativeX = _this$getDims_7.relativeX, scale = _this$getDims_7.scale, x = _this$getDims_7.x, y = _this$getDims_7.y;
        var transitionDurationMs = isMostlyInView ? this.calculateTransitionDuration_(step) : 0;
        return this.placeAt_(video, x, y, scale, step, transitionDurationMs, relativeX, opt_inlineRect, "absolute").then(function() {
          video.showControls();
          _this15.resetOnUndock_(video);
        });
      }
    }, {
      key: "reconcileUndocked_",
      value: function reconcileUndocked_() {
        this.getControls_().disable();
        this.getControls_().hide(false, true);
        this.trigger_(Actions.UNDOCK);
      }
    }, {
      key: "resetOnUndock_",
      value: function resetOnUndock_(video) {
        var _this16 = this;
        var element = video.element;
        var internalElement = getInternalVideoElementFor(element);
        return video.mutateElement(function() {
          internalElement.classList.remove(BASE_CLASS_NAME);
          var shadowLayer = _this16.getShadowLayer_();
          var placeholderIcon = _this16.getPlaceholderRefs_()["icon"];
          var placeholderBackground = _this16.getPlaceholderBackground_();
          toggle(shadowLayer, false);
          _this16.getControls_().reset();
          [internalElement, shadowLayer, placeholderBackground, placeholderIcon].forEach(function(el) {
            resetStyles(el, ["transform", "transition", "min-width", "min-height", "width", "height", "opacity", "overflow", "position", "left", "top"]);
          });
          _this16.placedAt_ = null;
          _this16.sizedAt_ = null;
          _this16.currentlyDocked_ = null;
        });
      }
    }, {
      key: "removePosterForAndroidBug_",
      value: function removePosterForAndroidBug_(parent) {
        var el = parent.querySelector(".i-amphtml-android-poster-bug");
        if (!el) {
          return;
        }
        removeElement(el);
      }
    }, {
      key: "scrollBack_",
      value: function scrollBack_() {
        if (!this.currentlyDocked_) {
          return;
        }
        this.viewport_.animateScrollIntoView(this.getDockedVideo_().element, "center");
      }
    }, {
      key: "getUsableTarget_",
      value: function getUsableTarget_(video, opt_inlineRect) {
        var slot = this.getSlot_();
        var inlineRect = opt_inlineRect || video.element.getBoundingClientRect();
        if (slot) {
          return {
            type: DockTargetType.SLOT,
            rect: letterboxRect(inlineRect, slot.getBoundingClientRect()),
            slot
          };
        }
        if (this.cornerDirectionX_ === null) {
          this.cornerDirectionX_ = isRTL(this.getDoc_()) ? DirectionX.LEFT : DirectionX.RIGHT;
        }
        return {
          type: DockTargetType.CORNER,
          rect: topCornerRect(inlineRect, this.viewportRect_, this.cornerDirectionX_, CORNER_WIDTH_RATIO, CORNER_WIDTH_MIN, CORNER_MARGIN_RATIO, CORNER_MARGIN_MAX),
          directionX: this.cornerDirectionX_
        };
      }
    }, {
      key: "getSlot_",
      value: function getSlot_() {
        var slot = this.findSlotOnce_();
        if (slot && isVisibleBySize(slot)) {
          return slot;
        }
        return null;
      }
    }]);
    return VideoDocking2;
  }();
  AMP.extension(TAG, 0.1, function(AMP2) {
    AMP2.registerServiceForDoc("video-docking", VideoDocking);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-video-docking-0.1.max.js.map
