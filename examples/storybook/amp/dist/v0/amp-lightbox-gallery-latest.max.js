(self.AMP=self.AMP||[]).push({n:"amp-lightbox-gallery",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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

  // build/amp-lightbox-gallery-0.1.css.js
  var CSS2 = `.i-amphtml-lbg-caption-scroll{position:absolute!important;left:0!important;right:0!important;bottom:0!important;z-index:1;padding-top:40px!important;box-sizing:border-box!important;color:#fff;text-shadow:1px 0 5px rgba(0,0,0,0.4)!important;overflow:hidden!important;max-height:calc(80px + 3rem)!important;transition:max-height 0.3s ease-out!important;pointer-events:none!important}.i-amphtml-lbg-caption-text{padding:20px!important;pointer-events:all!important}.i-amphtml-lbg-caption-text:empty{display:none!important}[i-amphtml-lbg-caption-state=clip]{-webkit-mask-image:linear-gradient(0deg,transparent 0rem,rgba(0,0,0,0.2) 1rem,rgba(0,0,0,0.55) 2rem,#000 3rem);mask-image:linear-gradient(0deg,transparent 0rem,rgba(0,0,0,0.2) 1rem,rgba(0,0,0,0.55) 2rem,#000 3rem)}[i-amphtml-lbg-caption-state=expand]{overflow-y:auto!important;-webkit-overflow-scrolling:touch!important;max-height:100%!important;transition:max-height 0.7s ease-out!important;-webkit-mask-image:linear-gradient(transparent,rgba(0,0,0,0.2) 20px,rgba(0,0,0,0.55) 40px,#000 60px);mask-image:linear-gradient(transparent,rgba(0,0,0,0.2) 20px,rgba(0,0,0,0.55) 40px,#000 60px)}.i-amphtml-lbg-caption-mask{min-height:1rem;width:100%!important;position:fixed!important;bottom:0!important;pointer-events:all!important}[i-amphtml-lbg-caption-state=clip]+.i-amphtml-lbg-caption-mask{z-index:1!important;background:transparent!important;transition:background-color 0.5s ease-out!important}[i-amphtml-lbg-caption-state=expand]+.i-amphtml-lbg-caption-mask{background-color:rgba(0,0,0,0.4)!important;top:0!important;z-index:0!important;transition:background-color 0.4s ease-in!important}.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-caption{display:none}.i-amphtml-lbg-top-bar{position:absolute!important;left:0!important;right:0!important;top:0!important;height:56px!important;z-index:1!important;background:linear-gradient(rgba(0,0,0,0.3),transparent)}@media (min-width:1024px){.i-amphtml-lbg-top-bar{height:80px!important}}.i-amphtml-lbg-button{position:absolute!important;cursor:pointer!important;width:24px;height:24px;padding:16px;box-sizing:content-box}@media (min-width:1024px){.i-amphtml-lbg-button{width:40px;height:40px;padding:20px}}.i-amphtml-lbg-button:after{content:""!important;width:100%!important;height:100%!important;display:block!important;background-repeat:no-repeat!important;background-position:50%!important}.i-amphtml-lbg-button[data-action=close]{top:0!important;right:0!important}.i-amphtml-lbg-button[data-action=close]:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m6.4 6.4 11.2 11.2zm11.2 0L6.4 17.6z' stroke='%23fff' stroke-width='2' stroke-linejoin='round'/%3E%3C/svg%3E")}.i-amphtml-lbg-button[data-action=gallery]{top:0!important;left:0!important}.i-amphtml-lbg-button[data-action=gallery]:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff'%3E%3Crect x='3' y='3' width='6' height='8' rx='1' ry='1'/%3E%3Crect x='15' y='13' width='6' height='8' rx='1' ry='1'/%3E%3Crect x='11' y='3' width='10' height='8' rx='1' ry='1'/%3E%3Crect x='3' y='13' width='10' height='8' rx='1' ry='1'/%3E%3C/g%3E%3C/svg%3E")}.i-amphtml-lbg-button[data-action=slides]{top:0!important;left:0!important;display:none}.i-amphtml-lbg-button[data-action=slides]:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='4' width='16' height='16' rx='1' stroke-width='2' stroke='%23fff' fill='none'/%3E%3Ccircle fill='%23fff' cx='15.5' cy='8.5' r='1.5'/%3E%3Cpath fill='%23fff' d='M5 19v-6l3-3 5 5 3-3 3 3v4z'/%3E%3C/svg%3E")}.i-amphtml-lbg-button[data-action=next],.i-amphtml-lbg-button[data-action=prev]{top:0!important;bottom:0!important;margin:auto!important;filter:drop-shadow(0 0 1px black)!important;width:40px;height:40px;padding:20px}.i-amphtml-lbg-button[data-action=next]{right:0!important;left:auto!important}.i-amphtml-lbg-button[data-action=next]:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m10 7.4 4.6 4.6-4.6 4.6' fill='none' stroke='%23fff' stroke-width='2' stroke-linejoin='round' stroke-linecap='round'/%3E%3C/svg%3E")}.i-amphtml-lbg-button[data-action=prev]{right:auto!important;left:0!important}.i-amphtml-lbg-button[data-action=prev]:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 7.4 9.4 12l4.6 4.6' fill='none' stroke='%23fff' stroke-width='2' stroke-linejoin='round' stroke-linecap='round'/%3E%3C/svg%3E")}[i-amphtml-lbg-single-item] .i-amphtml-lbg-button[data-action=gallery],[i-amphtml-lbg-single-item] .i-amphtml-lbg-button[data-action=next],[i-amphtml-lbg-single-item] .i-amphtml-lbg-button[data-action=prev]{visibility:hidden!important}.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-button[data-action=gallery],.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-button[data-action=next],.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-button[data-action=prev]{display:none!important}.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-button[data-action=slides]{display:block!important}[i-amphtml-lbg-fade]{animation-fill-mode:forwards;animation-duration:400ms}[i-amphtml-lbg-fade=in]{animation-name:fadeIn}[i-amphtml-lbg-fade=out]{animation-name:fadeOut}amp-lightbox-gallery[i-amphtml-lbg-fade]{position:relative;z-index:2147483642;animation-timing-function:cubic-bezier(0.8,0,0.2,1)}amp-lightbox-gallery .amp-carousel-button{display:none}amp-lightbox-gallery amp-carousel{background:transparent!important}.i-amphtml-lbg{position:fixed!important;z-index:2147483642}.i-amphtml-lbg,.i-amphtml-lbg-gallery,.i-amphtml-lbg-mask{top:0!important;left:0!important;right:0!important;bottom:0!important}.i-amphtml-lbg-gallery,.i-amphtml-lbg-mask{background-color:#000!important;position:absolute!important}.i-amphtml-lbg-gallery{display:none;top:56px!important;overflow:auto!important}@media (min-width:1024px){.i-amphtml-lbg-gallery{top:80px!important}}.i-amphtml-lbg-overlay:not([i-amphtml-lbg-fade]){opacity:0;visibility:hidden}.i-amphtml-lbg-overlay[i-amphtml-lbg-fade=in]{animation-timing-function:ease-in}.i-amphtml-lbg-overlay[i-amphtml-lbg-fade=out]{animation-timing-function:linear}.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-gallery{display:grid!important;-ms-flex-pack:center!important;justify-content:center!important;grid-gap:5px!important;grid-template-columns:repeat(3,1fr);grid-auto-rows:-webkit-min-content!important;grid-auto-rows:min-content!important;padding:5px}@media (min-width:1024px){.i-amphtml-lbg[gallery-view] .i-amphtml-lbg-gallery{grid-template-columns:repeat(4,249.75px)}}.i-amphtml-lbg-gallery-thumbnail{position:relative!important;padding-top:100%!important}.i-amphtml-lbg-gallery-thumbnail-img{width:100%!important;height:100%!important;position:absolute!important;top:0!important;-o-object-fit:cover!important;object-fit:cover!important;cursor:pointer!important}.i-amphtml-lbg-thumbnail-timestamp-container{background-color:#292d33;color:#fff;position:absolute;bottom:10px;left:10px;height:20px;border-radius:2px;opacity:0.8;width:20px}.i-amphtml-lbg-thumbnail-timestamp-container.i-amphtml-lbg-has-timestamp{font-size:12px;padding:0 5px 0 18px;line-height:1.3rem;width:auto}.i-amphtml-lbg-thumbnail-play-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");height:16px;width:16px;position:absolute;left:2px;bottom:2px}amp-lightbox-gallery .i-amphtml-slide-item>*{height:auto}@keyframes fadeIn{0%{opacity:0}to{opacity:1;visibility:visible}}@keyframes fadeOut{0%{opacity:1}to{opacity:0;visibility:hidden}}
/*# sourceURL=/extensions/amp-lightbox-gallery/0.1/amp-lightbox-gallery.css*/`;

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

  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;
  function remove(array, shouldRemove) {
    var removed = [];
    var index = 0;
    for (var i2 = 0; i2 < array.length; i2++) {
      var item = array[i2];
      if (shouldRemove(item, i2, array)) {
        removed.push(item);
      } else {
        if (index < i2) {
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
    for (var i2 = 0; i2 < array.length; i2++) {
      if (predicate(array[i2], i2, array)) {
        return i2;
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
  function padStart(s2, targetLength, padString) {
    if (s2.length >= targetLength) {
      return s2;
    }
    targetLength = targetLength - s2.length;
    var padding = padString;
    while (targetLength > padding.length) {
      padding += padString;
    }
    return padding.slice(0, targetLength) + s2;
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
  function isUserErrorMessage(message) {
    return message.indexOf(USER_ERROR_SENTINEL) >= 0;
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
    var i2 = 3;
    var splitMessage = opt_message.split("%s");
    var message = splitMessage.shift();
    var messageArray = [message];
    while (splitMessage.length) {
      var subValue = arguments[i2++];
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

  // src/core/error/index.js
  function duplicateErrorIfNecessary(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty != null && messageProperty.writable) {
      return error;
    }
    var message = error.message, stack = error.stack;
    var e2 = new Error(message);
    for (var prop in error) {
      e2[prop] = error[prop];
    }
    e2.stack = stack;
    return e2;
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
    } catch (e2) {
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
    var s2 = services[id];
    if (!s2.obj) {
      devAssert(s2.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert(s2.context, "Service " + id + " registered without context.");
      s2.obj = new s2.ctor(s2.context);
      devAssert(s2.obj, "Service " + id + " constructed to null.");
      s2.context = null;
      if (s2.resolve) {
        s2.resolve(s2.obj);
      }
    }
    return s2.obj;
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
    var s2 = services[id];
    if (s2) {
      if (s2.promise) {
        return s2.promise;
      } else {
        getServiceInternal(holder, id);
        return s2.promise = Promise.resolve(s2.obj);
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
    } catch (e2) {
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
  function childElement(parent, callback) {
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function childElementByAttr(parent, attr) {
    assertIsName(attr);
    return scopedQuerySelector(parent, "> [" + attr + "]");
  }
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
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
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i2 = 0; i2 < length; i2++) {
      cb(iterable[i2], i2);
    }
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
  function getVerticalScrollbarWidth(win) {
    var documentElement = win.document.documentElement;
    var windowWidth = win.innerWidth;
    var documentWidth = documentElement.clientWidth;
    return windowWidth - documentWidth;
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
    for (var i2 = 0; i2 < list.length; i2++) {
      var script = list[i2];
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
    var s2 = getServicePromiseOrNull(win, id);
    if (s2) {
      return s2;
    }
    return getElementServicePromiseOrNull(win, id, extension, version, opt_element);
  }
  function getElementServiceForDoc(element, id, extension, opt_element) {
    return getElementServiceIfAvailableForDoc(element, id, extension, opt_element).then(function(service) {
      return assertService(service, id, extension);
    });
  }
  function getElementServiceIfAvailableForDoc(element, id, extension, opt_element) {
    var s2 = getServicePromiseOrNullForDoc(element, id);
    if (s2) {
      return s2;
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
    var s2 = getServiceForDocOrNull(element, id);
    if (s2) {
      return Promise.resolve(s2);
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
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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

  // src/core/dom/event-helper-listen.js
  var optsSupported;
  var passiveSupported;
  function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
    var localElement = element;
    var localListener = listener;
    var wrapped = function wrapped2(event) {
      try {
        return localListener(event);
      } catch (e2) {
        self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(e2);
        throw e2;
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
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  function createCustomEvent(win, type, detail, opt_eventInit) {
    var eventInit = {
      detail
    };
    Object.assign(eventInit, opt_eventInit);
    if (typeof win.CustomEvent == "function") {
      return new win.CustomEvent(type, eventInit);
    } else {
      var e2 = win.document.createEvent("CustomEvent");
      e2.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
      return e2;
    }
  }
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }
  function getDetail(event) {
    return event.detail;
  }
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }
  function isLoadErrorMessage(message) {
    return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
  }

  // src/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  function camelCaseToTitleCase(camelCase) {
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  }
  function getVendorJsPropertyName_(style, titleCase) {
    for (var i2 = 0; i2 < vendorPrefixes.length; i2++) {
      var propertyName = vendorPrefixes[i2] + titleCase;
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

  // src/style-installer.js
  var bodyMadeVisible = false;
  function makeBodyVisibleRecovery(doc) {
    devAssert(doc.defaultView, "Passed in document must have a defaultView");
    if (bodyMadeVisible) {
      return;
    }
    bodyMadeVisible = true;
    setBodyVisibleStyles(doc);
  }
  function setBodyVisibleStyles(doc) {
    setStyles(dev().assertElement(doc.body), {
      opacity: 1,
      visibility: "visible",
      "animation": "none"
    });
  }

  // src/chunk.js
  var deactivated = /nochunking=1/.test(self.location.hash);
  var resolved2 = resolvedPromise();

  // src/auto-lightbox.js
  var AutoLightboxEvents = {
    NEWLY_SET: "amp-auto-lightbox:newly-set"
  };
  function isActionableByTap(element) {
    if (element.tagName.toLowerCase() == "a" && element.hasAttribute("href")) {
      return true;
    }
    if (element.querySelector("a[href]")) {
      return true;
    }
    var action = Services.actionServiceForDoc(element);
    var hasTapAction = action.hasResolvableAction(element, "tap", dev().assertElement(element.parentElement));
    if (hasTapAction) {
      return true;
    }
    var actionables = element.querySelectorAll("[on]");
    for (var i2 = 0; i2 < actionables.length; i2++) {
      var actionable = actionables[i2];
      var _hasTapAction = action.hasResolvableAction(actionable, "tap", dev().assertElement(actionable.parentElement));
      if (_hasTapAction) {
        return true;
      }
    }
    return false;
  }

  // extensions/amp-lightbox-gallery/0.1/service/lightbox-placeholders.js
  var LIGHTBOX_THUMBNAIL_UNKNOWN = 'data:image/svg+xml;charset=utf-8,<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M9 20.5a1.5 1.5 0 0 1-3 0c0-6.488 5-8.53 5-13.5a4 4 0 1 0-8 0 1.5 1.5 0 0 1-3 0 7 7 0 1 1 14 0c0 5.483-5 7.485-5 13.5z" id="a"/><circle id="b" cx="7.5" cy="29.5" r="1.5"/></defs><g fill="none" fill-rule="evenodd"><path fill="#1E3B63" d="M0 0h128v128H0z"/><path d="M33 24.5h62a4 4 0 0 1 4 4v54.952L78.081 104.5H33a4 4 0 0 1-4-4v-72a4 4 0 0 1 4-4z" fill="#D1E5FF"/><g transform="translate(57 48)"><use fill="#225CAC" xlink:href="#a"/><path stroke="#225CAC" d="M9.5 20.5a2 2 0 1 1-4 0c0-2.85.756-4.755 2.58-7.59l.385-.595c.152-.236.265-.412.373-.584C10.006 9.873 10.5 8.601 10.5 7a3.5 3.5 0 1 0-7 0 2 2 0 1 1-4 0 7.5 7.5 0 0 1 15 0c0 2.273-.642 3.81-2.314 6.409l-.266.412C10.133 16.592 9.5 18.103 9.5 20.5z"/></g><g transform="translate(57 48)"><use fill="#225CAC" xlink:href="#b"/><circle stroke="#225CAC" cx="7.5" cy="29.5" r="2"/></g><path d="M82 83.5h17l-21 21v-17a4 4 0 0 1 4-4z" fill="#ACC8F0"/></g></svg>';
  var LIGHTBOX_THUMBNAIL_AD = 'data:image/svg+xml;charset=utf-8,<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#1E3B63" d="M0 0h128v128H0z"/><rect fill="#2B6AC0" x="34" y="74" width="8" height="30" rx="2"/><rect fill="#2B6AC0" x="87" y="74" width="8" height="30" rx="2"/><rect fill="#ACC8F0" x="24" y="30" width="81" height="54" rx="4"/><path fill="#D1E5FF" d="M29 35h71v44H29z"/><path d="M64 53.5V66a3 3 0 0 1-6 0v-4h-5v4a3 3 0 0 1-6 0V53.5a8.5 8.5 0 0 1 17 0zm-6 0a2.5 2.5 0 0 0-5 0V56h5v-2.5zM71 45h3v.041C80.16 45.55 85 50.71 85 57s-4.84 11.45-11 11.959V69h-3a3 3 0 0 1-3-3V48a3 3 0 0 1 3-3zm3 6.083v11.834a6.002 6.002 0 0 0 0-11.834z" fill="#225CAC"/></g></svg>';
  var LIGHTBOX_THUMBNAIL_VIDEO = 'data:image/svg+xml;charset=utf-8,<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#1E3B63" d="M0 0h128v128H0z"/><path d="M24 51h80v46a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V51z" fill="#225CAC"/><path fill="#1B519B" d="M24 49h80v12H24z"/><path fill="#D1E5FF" d="M56 49l-8 12h-9l8-12zm16 0l-8 12h-8l8-12zm32 0l-8 12h-8l8-12zm-16 0l-8 12h-8l8-12z"/><path d="M26.916 49.148l77.274-20.705-2.07-7.728a4 4 0 0 0-4.9-2.828L27.674 36.522a4 4 0 0 0-2.829 4.899l2.07 7.727z" fill="#1B519B"/><path fill="#D1E5FF" d="M57.826 40.866l-10.834-9.52-8.693 2.329 10.833 9.52zm15.454-4.141l-10.833-9.52-7.727 2.07 10.833 9.52zm30.91-8.282l-10.833-9.52-7.728 2.07 10.834 9.52zm-15.455 4.141l-10.833-9.52-7.728 2.07 10.834 9.52z"/><path d="M28 37h9.86a4 4 0 0 1 3.327 1.781L48 49l-8 12H24V41a4 4 0 0 1 4-4z" fill="#2B6AC0"/><circle fill="#D1E5FF" cx="29.5" cy="44.5" r="1.5"/><circle fill="#D1E5FF" cx="29.5" cy="55.5" r="1.5"/></g></svg>';

  // src/core/dom/srcset.js
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
  function srcsetFromElement(element) {
    var srcsetAttr = element.getAttribute("srcset");
    if (srcsetAttr) {
      return parseSrcset(srcsetAttr);
    }
    var srcAttr = userAssert2(element.getAttribute("src"), 'Either non-empty "srcset" or "src" attribute must be specified: %s', element);
    return srcsetFromSrc(srcAttr);
  }
  function srcsetFromSrc(src) {
    return new Srcset([{
      url: src,
      width: void 0,
      dpr: 1
    }]);
  }
  function parseSrcset(s2) {
    var sources = [];
    var match;
    while (match = srcsetRegex.exec(s2)) {
      var url = match[1];
      var width = void 0, dpr = void 0;
      if (match[2]) {
        var type = match[3].toLowerCase();
        if (type == "w") {
          width = parseInt(match[2], 10);
        } else if (type == "x") {
          dpr = parseFloat(match[2]);
        } else {
          continue;
        }
      } else {
        dpr = 1;
      }
      sources.push({
        url,
        width,
        dpr
      });
    }
    return new Srcset(sources);
  }
  var Srcset = /* @__PURE__ */ function() {
    function Srcset2(sources) {
      _classCallCheck3(this, Srcset2);
      userAssert2(sources.length > 0, "Srcset must have at least one source");
      this.sources_ = sources;
      var hasWidth = false;
      var hasDpr = false;
      for (var i2 = 0; i2 < sources.length; i2++) {
        var source = sources[i2];
        hasWidth = hasWidth || !!source.width;
        hasDpr = hasDpr || !!source.dpr;
      }
      userAssert2(!!(hasWidth ^ hasDpr), "Srcset must have width or dpr sources, but not both");
      sources.sort(hasWidth ? sortByWidth : sortByDpr);
      this.widthBased_ = hasWidth;
    }
    _createClass2(Srcset2, [{
      key: "select",
      value: function select(width, dpr) {
        devAssert2(width, "width=%s", width);
        devAssert2(dpr, "dpr=%s", dpr);
        var index = 0;
        if (this.widthBased_) {
          index = this.selectByWidth_(width * dpr);
        } else {
          index = this.selectByDpr_(dpr);
        }
        return this.sources_[index].url;
      }
    }, {
      key: "selectByWidth_",
      value: function selectByWidth_(width) {
        var sources = this.sources_;
        var minIndex = 0;
        var minScore = Infinity;
        var minWidth = Infinity;
        for (var i2 = 0; i2 < sources.length; i2++) {
          var sWidth = sources[i2].width;
          var score = Math.abs(sWidth - width);
          if (score <= minScore * 1.1 || width / minWidth > 1.2) {
            minIndex = i2;
            minScore = score;
            minWidth = sWidth;
          } else {
            break;
          }
        }
        return minIndex;
      }
    }, {
      key: "selectByDpr_",
      value: function selectByDpr_(dpr) {
        var sources = this.sources_;
        var minIndex = 0;
        var minScore = Infinity;
        for (var i2 = 0; i2 < sources.length; i2++) {
          var score = Math.abs(sources[i2].dpr - dpr);
          if (score <= minScore) {
            minIndex = i2;
            minScore = score;
          } else {
            break;
          }
        }
        return minIndex;
      }
    }, {
      key: "getUrls",
      value: function getUrls() {
        return this.sources_.map(function(s2) {
          return s2.url;
        });
      }
    }, {
      key: "stringify",
      value: function stringify(opt_mapper) {
        var res = [];
        var sources = this.sources_;
        for (var i2 = 0; i2 < sources.length; i2++) {
          var source = sources[i2];
          var src = source.url;
          if (opt_mapper) {
            src = opt_mapper(src);
          }
          if (this.widthBased_) {
            src += " " + source.width + "w";
          } else {
            src += " " + source.dpr + "x";
          }
          res.push(src);
        }
        return res.join(", ");
      }
    }]);
    return Srcset2;
  }();
  function sortByWidth(s1, s2) {
    userAssert2(s1.width != s2.width, "Duplicate width: %s", s1.width);
    return s1.width - s2.width;
  }
  function sortByDpr(s1, s2) {
    userAssert2(s1.dpr != s2.dpr, "Duplicate dpr: %s", s1.dpr);
    return s1.dpr - s2.dpr;
  }

  // extensions/amp-lightbox-gallery/0.1/service/lightbox-manager-impl.js
  function _classCallCheck4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var LIGHTBOX_ELIGIBLE_TAGS = {
    "AMP-IMG": true
  };
  var ELIGIBLE_TAP_TAGS = {
    "AMP-IMG": true
  };
  var VIDEO_TAGS = {
    "AMP-YOUTUBE": true,
    "AMP-VIDEO": true
  };
  var GALLERY_TAG = "amp-lightbox-gallery";
  var CAROUSEL_TAGS = ["AMP-CAROUSEL", "AMP-BASE-CAROUSEL"];
  var FIGURE_TAG = "FIGURE";
  var SLIDE_SELECTOR = ".amp-carousel-slide, .i-amphtml-carousel-slotted";
  function getBaseElementForSlide(slide) {
    var tagName = slide.tagName.toUpperCase();
    if (tagName == "AMP-IMG" || tagName == "FIGURE") {
      return slide;
    }
    var figure = slide.querySelector("figure");
    if (figure) {
      return figure;
    }
    var allImages = slide.querySelectorAll("amp-img");
    userAssert(allImages.length == 1, "Found more than one images or none in slide!");
    return dev().assertElement(allImages[0]);
  }
  var LightboxManager = /* @__PURE__ */ function() {
    function LightboxManager2(ampdoc) {
      _classCallCheck4(this, LightboxManager2);
      this.ampdoc_ = ampdoc;
      this.scanPromise_ = null;
      this.lightboxGroups_ = map({
        default: []
      });
      this.counter_ = 0;
      this.seen_ = [];
    }
    _createClass3(LightboxManager2, [{
      key: "maybeInit",
      value: function maybeInit() {
        var _this = this;
        if (this.scanPromise_) {
          return this.scanPromise_;
        }
        this.scanPromise_ = this.scanLightboxables_();
        var root = this.ampdoc_.getRootNode();
        root.addEventListener(AmpEvents.DOM_UPDATE, function() {
          _this.scanPromise_ = _this.scanLightboxables_();
        });
        root.addEventListener(AutoLightboxEvents.NEWLY_SET, function(e2) {
          var target = e2.target;
          _this.processLightboxElement_(dev().assertElement(target));
        });
        return this.scanPromise_;
      }
    }, {
      key: "scanLightboxables_",
      value: function scanLightboxables_() {
        var _this2 = this;
        return this.ampdoc_.whenReady().then(function() {
          var matches2 = _this2.ampdoc_.getRootNode().querySelectorAll("[lightbox]");
          var processLightboxElement = _this2.processLightboxElement_.bind(_this2);
          iterateCursor(matches2, processLightboxElement);
        });
      }
    }, {
      key: "baseElementIsSupported_",
      value: function baseElementIsSupported_(element) {
        return LIGHTBOX_ELIGIBLE_TAGS[element.tagName];
      }
    }, {
      key: "processLightboxCarousel_",
      value: function processLightboxCarousel_(carousel) {
        var _this3 = this;
        var lightboxGroupId = carousel.getAttribute("lightbox") || "carousel" + (carousel.getAttribute("id") || this.counter_++);
        this.getSlidesFromCarousel_(carousel).then(function(slides) {
          slides.forEach(function(slide) {
            var shouldExcludeSlide = slide.hasAttribute("lightbox-exclude") || slide.hasAttribute("lightbox") && slide.getAttribute("lightbox") !== lightboxGroupId;
            if (shouldExcludeSlide) {
              return;
            }
            var baseElement = getBaseElementForSlide(slide);
            if (_this3.seen_.includes(baseElement)) {
              return;
            }
            baseElement.setAttribute("lightbox", lightboxGroupId);
            _this3.seen_.push(baseElement);
            _this3.processBaseLightboxElement_(baseElement, lightboxGroupId);
          });
        });
      }
    }, {
      key: "processLightboxElement_",
      value: function processLightboxElement_(element) {
        if (this.seen_.includes(element)) {
          return;
        }
        this.seen_.push(element);
        if (CAROUSEL_TAGS.includes(element.tagName)) {
          this.processLightboxCarousel_(element);
        } else {
          var lightboxGroupId = element.getAttribute("lightbox") || "default";
          this.processBaseLightboxElement_(element, lightboxGroupId);
        }
      }
    }, {
      key: "unwrapLightboxedFigure_",
      value: function unwrapLightboxedFigure_(figure, lightboxGroupId) {
        var element = childElement(figure, function(child) {
          return child.tagName !== "FIGCAPTION";
        });
        var isGallerySlide = element.classList.contains("i-amphtml-inline-gallery-slide-content-slot");
        var unwrappedElement = isGallerySlide ? isGallerySlide.firstChild : element;
        if (unwrappedElement) {
          unwrappedElement.setAttribute("lightbox", lightboxGroupId);
        }
        return unwrappedElement;
      }
    }, {
      key: "processBaseLightboxElement_",
      value: function processBaseLightboxElement_(element, lightboxGroupId) {
        if (element.tagName == FIGURE_TAG) {
          var unwrappedFigureElement = this.unwrapLightboxedFigure_(element, lightboxGroupId);
          if (!unwrappedFigureElement) {
            return;
          }
          element = unwrappedFigureElement;
        }
        userAssert(this.baseElementIsSupported_(element), "The element %s isn't supported in lightbox yet.", element.tagName);
        if (!this.lightboxGroups_[lightboxGroupId]) {
          this.lightboxGroups_[lightboxGroupId] = [];
        }
        this.lightboxGroups_[lightboxGroupId].push(dev().assertElement(element));
        if (isActionableByTap(element)) {
          return;
        }
        var gallery = elementByTag(this.ampdoc_.getRootNode(), GALLERY_TAG);
        var actions = Services.actionServiceForDoc(element);
        actions.setActions(element, "tap:" + gallery.id + ".activate");
      }
    }, {
      key: "getSlidesFromCarousel_",
      value: function getSlidesFromCarousel_(element) {
        return element.signals().whenSignal(CommonSignals.LOAD_END).then(function() {
          return toArray(element.querySelectorAll(SLIDE_SELECTOR));
        });
      }
    }, {
      key: "getElementsForLightboxGroup",
      value: function getElementsForLightboxGroup(lightboxGroupId) {
        var _this4 = this;
        return this.maybeInit().then(function() {
          return devAssert(_this4.lightboxGroups_[lightboxGroupId]);
        });
      }
    }, {
      key: "getDescription",
      value: function getDescription(element) {
        var figureParent = closestAncestorElementBySelector(element, "figure");
        if (figureParent) {
          var figCaption = elementByTag(figureParent, "figcaption");
          if (figCaption) {
            return figCaption.innerText;
          }
        }
        var ariaDescribedBy = element.getAttribute("aria-describedby");
        if (ariaDescribedBy) {
          var descriptionElement = this.ampdoc_.getElementById(ariaDescribedBy);
          if (descriptionElement) {
            return descriptionElement.innerText;
          }
        }
        return "";
      }
    }, {
      key: "getVideoTimestamp_",
      value: function getVideoTimestamp_(element) {
        return VIDEO_TAGS[element.tagName] ? element.getImpl().then(function(videoPlayer) {
          return videoPlayer.getDuration();
        }) : resolvedPromise();
      }
    }, {
      key: "getThumbnails",
      value: function getThumbnails(lightboxGroupId) {
        var _this5 = this;
        return this.lightboxGroups_[lightboxGroupId].map(function(element) {
          return {
            srcset: _this5.getThumbnailSrcset_(dev().assertElement(element)),
            placeholderSrc: _this5.getPlaceholderForElementType_(element),
            element,
            timestampPromise: _this5.getVideoTimestamp_(element)
          };
        });
      }
    }, {
      key: "getPlaceholderForElementType_",
      value: function getPlaceholderForElementType_(element) {
        var type = element.tagName;
        switch (type) {
          case "AMP-AD":
            return LIGHTBOX_THUMBNAIL_AD;
          case "AMP-VIDEO":
          case "AMP-YOUTUBE":
            return LIGHTBOX_THUMBNAIL_VIDEO;
          default:
            return LIGHTBOX_THUMBNAIL_UNKNOWN;
        }
      }
    }, {
      key: "getThumbnailSrcset_",
      value: function getThumbnailSrcset_(element) {
        if (element.hasAttribute("lightbox-thumbnail-id")) {
          var thumbnailId = element.getAttribute("lightbox-thumbnail-id");
          var thumbnailImage = this.ampdoc_.getElementById(thumbnailId);
          if (thumbnailImage && thumbnailImage.tagName == "AMP-IMG") {
            return srcsetFromElement(thumbnailImage);
          }
        }
        return this.getUserPlaceholderSrcset_(element);
      }
    }, {
      key: "getUserPlaceholderSrcset_",
      value: function getUserPlaceholderSrcset_(element) {
        if (element.tagName == "AMP-IMG") {
          return srcsetFromElement(element);
        }
        if (element.tagName == "AMP-VIDEO") {
          return this.getThumbnailSrcsetForVideo_(element);
        }
        var placeholder = childElementByAttr(element, "placeholder");
        if (placeholder) {
          return this.getUserPlaceholderSrcset_(placeholder);
        }
        return null;
      }
    }, {
      key: "getThumbnailSrcsetForVideo_",
      value: function getThumbnailSrcsetForVideo_(ampVideo) {
        var poster = ampVideo.getAttribute("poster");
        return poster ? srcsetFromSrc(poster) : null;
      }
    }]);
    return LightboxManager2;
  }();

  // src/core/data-structures/observable.js
  function _createForOfIteratorHelperLoose(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (it)
      return (it = it.call(o2)).next.bind(it);
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it)
        o2 = it;
      var i2 = 0;
      return function() {
        if (i2 >= o2.length)
          return { done: true };
        return { done: false, value: o2[i2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  function _classCallCheck5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties4(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var Observable = /* @__PURE__ */ function() {
    function Observable2() {
      _classCallCheck5(this, Observable2);
      this.handlers_ = null;
    }
    _createClass4(Observable2, [{
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

  // src/pass.js
  function _classCallCheck6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties5(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      _classCallCheck6(this, Pass2);
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
    _createClass5(Pass2, [{
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
  function _defineProperties6(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  function _classCallCheck7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var PROP_ = "__AMP_Gestures";
  var Gesture = function Gesture2(type, data, time, event) {
    _classCallCheck7(this, Gesture2);
    this.type = type;
    this.data = data;
    this.time = time;
    this.event = event;
  };
  var Gestures = /* @__PURE__ */ function() {
    function Gestures2(element, shouldNotPreventDefault, shouldStopPropagation) {
      _classCallCheck7(this, Gestures2);
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
    _createClass6(Gestures2, [{
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
          var index = findIndex(this.recognizers_, function(e2) {
            return e2.getType() == type;
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
        for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
          if (this.ready_[i2]) {
            continue;
          }
          if (this.pending_[i2] && this.pending_[i2] < now) {
            this.stopTracking_(i2);
          }
          if (this.recognizers_[i2].onTouchStart(event)) {
            this.startTracking_(i2);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchMove_",
      value: function onTouchMove_(event) {
        var now = Date.now();
        for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
          if (!this.tracking_[i2]) {
            continue;
          }
          if (this.pending_[i2] && this.pending_[i2] < now) {
            this.stopTracking_(i2);
            continue;
          }
          if (!this.recognizers_[i2].onTouchMove(event)) {
            this.stopTracking_(i2);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchEnd_",
      value: function onTouchEnd_(event) {
        var now = Date.now();
        for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
          if (!this.tracking_[i2]) {
            continue;
          }
          if (this.pending_[i2] && this.pending_[i2] < now) {
            this.stopTracking_(i2);
            continue;
          }
          this.recognizers_[i2].onTouchEnd(event);
          var isReady = !this.pending_[i2];
          var isExpired = this.pending_[i2] < now;
          var isEventing = this.eventing_ == this.recognizers_[i2];
          if (!isEventing && (isReady || isExpired)) {
            this.stopTracking_(i2);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchCancel_",
      value: function onTouchCancel_(event) {
        for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
          this.cancelEventing_(i2);
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
        for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
          if (this.recognizers_[i2] == recognizer) {
            this.ready_[i2] = now + offset;
            this.pending_[i2] = 0;
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
        for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
          if (this.recognizers_[i2] == recognizer) {
            this.pending_[i2] = now + timeLeft;
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
          for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
            if (this.ready_[i2] || this.pending_[i2] && this.pending_[i2] >= now) {
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
        for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
          if (!this.ready_[i2]) {
            if (this.pending_[i2] && this.pending_[i2] < now) {
              this.stopTracking_(i2);
            }
            continue;
          }
          if (readyIndex == -1 || this.ready_[i2] > this.ready_[readyIndex]) {
            readyIndex = i2;
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
        for (var i2 = 0; i2 < this.recognizers_.length; i2++) {
          if (i2 != index) {
            this.cancelEventing_(i2);
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
      _classCallCheck7(this, GestureRecognizer2);
      this.type_ = type;
      this.manager_ = manager;
    }
    _createClass6(GestureRecognizer2, [{
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

  // extensions/amp-lightbox-gallery/0.1/lightbox-caption.js
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
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var OverflowState = {
    NONE: "none",
    CLIP: "clip",
    EXPAND: "expand"
  };
  var LightboxCaption = /* @__PURE__ */ function() {
    function LightboxCaption2(element, scrollContainer, textContainer, overflowMask, measureMutateElement) {
      _classCallCheck8(this, LightboxCaption2);
      this.element_ = element;
      this.scrollContainer_ = scrollContainer;
      this.textContainer_ = textContainer;
      this.overflowMask_ = overflowMask;
      this.measureMutateElement_ = measureMutateElement;
    }
    _createClass7(LightboxCaption2, [{
      key: "getElement",
      value: function getElement() {
        return this.element_;
      }
    }, {
      key: "setContent",
      value: function setContent(content) {
        this.textContainer_.innerText = content;
      }
    }, {
      key: "setOverflowState",
      value: function setOverflowState(state) {
        this.scrollContainer_.setAttribute("i-amphtml-lbg-caption-state", state);
      }
    }, {
      key: "getOverflowState",
      value: function getOverflowState() {
        return this.scrollContainer_.getAttribute("i-amphtml-lbg-caption-state");
      }
    }, {
      key: "nextOverflowState_",
      value: function nextOverflowState_(overflowState, overflows, requestExpansion) {
        var isExpanded = overflowState == OverflowState.EXPAND;
        var expand = requestExpansion !== void 0 ? requestExpansion : !isExpanded;
        var hasOverflow = isExpanded || overflows;
        if (!hasOverflow) {
          return OverflowState.NONE;
        }
        return expand ? OverflowState.EXPAND : OverflowState.CLIP;
      }
    }, {
      key: "toggleOverflow",
      value: function toggleOverflow(requestExpansion) {
        var _this = this;
        var overflowMask_ = this.overflowMask_, scrollContainer_ = this.scrollContainer_;
        var descriptionOverflows;
        var measureOverflowState = function measureOverflowState2() {
          descriptionOverflows = scrollContainer_.scrollHeight - scrollContainer_.clientHeight >= overflowMask_.clientHeight;
        };
        var mutateOverflowState = function mutateOverflowState2() {
          var overflowState = _this.getOverflowState();
          var newState = _this.nextOverflowState_(overflowState, descriptionOverflows, requestExpansion);
          _this.setOverflowState(newState);
          if (newState != OverflowState.EXPAND) {
            scrollContainer_.scrollTop = 0;
          }
        };
        this.measureMutateElement_(measureOverflowState, mutateOverflowState);
      }
    }], [{
      key: "build",
      value: function build(doc, measureMutateElement) {
        var el = htmlFor(doc)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-lbg-caption">\n        <div class="i-amphtml-lbg-caption-scroll">\n          <div class="i-amphtml-lbg-caption-text amp-lightbox-gallery-caption"></div>\n        </div>\n        <div class="i-amphtml-lbg-caption-mask"></div>\n      </div>'])));
        return new LightboxCaption2(el, dev().assertElement(el.querySelector(".i-amphtml-lbg-caption-scroll")), dev().assertElement(el.querySelector(".amp-lightbox-gallery-caption")), dev().assertElement(el.querySelector(".i-amphtml-lbg-caption-mask")), measureMutateElement);
      }
    }]);
    return LightboxCaption2;
  }();

  // extensions/amp-lightbox-gallery/0.1/lightbox-controls.js
  var _templateObject2;
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _classCallCheck9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties8(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var LightboxControlsAction = {
    CLOSE: "close",
    GALLERY: "gallery",
    SLIDES: "slides",
    PREV: "prev",
    NEXT: "next"
  };
  var LightboxControls = /* @__PURE__ */ function() {
    function LightboxControls2(win, element, measureMutateElement) {
      var _this = this;
      _classCallCheck9(this, LightboxControls2);
      this.win_ = win;
      this.element_ = element;
      this.measureMutateElement_ = measureMutateElement;
      this.element_.addEventListener("click", function(event) {
        _this.handleClick_(event);
      });
    }
    _createClass8(LightboxControls2, [{
      key: "getElement",
      value: function getElement() {
        return this.element_;
      }
    }, {
      key: "handleClick_",
      value: function handleClick_(event) {
        var action = event.target.getAttribute("data-action");
        if (!action) {
          return;
        }
        this.element_.dispatchEvent(createCustomEvent(this.win_, "action", dict({
          "action": action
        })));
        event.stopPropagation();
        event.preventDefault();
      }
    }], [{
      key: "build",
      value: function build(win, doc, measureMutateElement) {
        var el = htmlFor(doc)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose2(['\n      <div class="i-amphtml-lbg-controls">\n        <div class="i-amphtml-lbg-top-bar">\n          <div role="button"\n              class="i-amphtml-lbg-button "\n              data-action="close"\n              aria-label="Close">\n          </div>\n          <div role="button"\n              class="i-amphtml-lbg-button"\n              data-action="gallery"\n              aria-label="Gallery">\n          </div>\n          <div role="button"\n              class="i-amphtml-lbg-button"\n              data-action="slides"\n              aria-label="Content">\n          </div>\n        </div>\n        <div role="button"\n            class="i-amphtml-lbg-button"\n            data-action="prev"\n            aria-label="Content">\n        </div>\n        <div role="button"\n            class="i-amphtml-lbg-button"\n            data-action="next"\n            aria-label="Content">\n        </div>\n      </div>'])));
        var input = Services.inputFor(win);
        if (!input.isMouseDetected()) {
          el.querySelector('[data-action="prev"]').classList.add("i-amphtml-screen-reader");
          el.querySelector('[data-action="next"]').classList.add("i-amphtml-screen-reader");
        }
        var actionStrings = Object.values(LightboxControlsAction);
        devAssert(toArray(el.querySelectorAll("[data-action]")).map(function(div) {
          return div.getAttribute("data-action");
        }).every(function(action) {
          return actionStrings.includes(action);
        }), "Action for a button does not map to enum.");
        return new LightboxControls2(win, el, measureMutateElement);
      }
    }]);
    return LightboxControls2;
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
  function _classCallCheck10(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties9(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o2, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o3, p2) {
      o3.__proto__ = p2;
      return o3;
    };
    return _setPrototypeOf(o2, p);
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
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
  }
  var SwipeRecognizer = /* @__PURE__ */ function(_GestureRecognizer3) {
    _inherits(SwipeRecognizer2, _GestureRecognizer3);
    var _super3 = _createSuper(SwipeRecognizer2);
    function SwipeRecognizer2(type, manager, horiz, vert) {
      var _this3;
      _classCallCheck10(this, SwipeRecognizer2);
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
    _createClass9(SwipeRecognizer2, [{
      key: "onTouchStart",
      value: function onTouchStart(e2) {
        var touches = e2.touches;
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
      value: function onTouchMove(e2) {
        var touches = e2.touches;
        if (touches && touches.length >= 1) {
          var _touches$ = touches[0], x = _touches$.clientX, y = _touches$.clientY;
          this.lastX_ = x;
          this.lastY_ = y;
          if (this.eventing_) {
            this.emit_(false, false, e2);
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
      value: function onTouchEnd(e2) {
        var touches = e2.touches;
        if (touches && touches.length == 0) {
          this.end_(e2);
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
  var SwipeYRecognizer = /* @__PURE__ */ function(_SwipeRecognizer3) {
    _inherits(SwipeYRecognizer2, _SwipeRecognizer3);
    var _super6 = _createSuper(SwipeYRecognizer2);
    function SwipeYRecognizer2(manager) {
      _classCallCheck10(this, SwipeYRecognizer2);
      return _super6.call(this, "swipe-y", manager, false, true);
    }
    return SwipeYRecognizer2;
  }(SwipeRecognizer);

  // extensions/amp-lightbox-gallery/0.1/utils.js
  function delayAfterDeferringToEventLoop(win, duration) {
    var timer = Services.timerFor(win);
    var eventLoopDelay = 1;
    return timer.promise(eventLoopDelay).then(function() {
      return timer.promise(duration);
    });
  }
  function secondsToTimestampString(seconds) {
    var h = Math.floor(seconds / 3600);
    var m = Math.floor(seconds / 60);
    var s2 = Math.floor(seconds % 60);
    var hh = padStart(h.toString(), 2, "0");
    var mm = padStart(m.toString(), 2, "0");
    var ss = padStart(s2.toString(), 2, "0");
    return hh + ":" + mm + ":" + ss;
  }

  // extensions/amp-lightbox-gallery/0.1/swipe-to-dismiss.js
  function _classCallCheck11(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties10(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var SWIPE_TO_CLOSE_DISTANCE = 200;
  var SWIPE_TO_CLOSE_DISTANCE_THRESHOLD = SWIPE_TO_CLOSE_DISTANCE / 4;
  var SWIPE_TO_HIDE_OVERLAY_DISTANCE = SWIPE_TO_CLOSE_DISTANCE / 4;
  var SWIPE_TO_CLOSE_VELOCITY_THRESHOLD = 0.65;
  var SWIPE_TO_CLOSE_MIN_OPACITY = 0.2;
  var SWIPE_TO_CLOSE_MIN_SCALE = 0.85;
  var SWIPE_TO_CLOSE_VELOCITY_TO_DISTANCE_FACTOR = 22.5;
  var SWIPE_TO_CLOSE_DISTANCE_TO_TIME_FACTOR = 1;
  var SWIPE_TO_CLOSE_SNAP_BACK_TIME_FACTOR = 5;
  var SWIPE_TO_CLOSE_MOMENTUM_TIMING = "cubic-bezier(0.15, .55, .3, 0.95)";
  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }
  function lerp(start, end, percentage) {
    return start + (end - start) * percentage;
  }
  var SwipeToDismiss = /* @__PURE__ */ function() {
    function SwipeToDismiss2(win, element, mutateElement, onclose) {
      _classCallCheck11(this, SwipeToDismiss2);
      this.win_ = win;
      this.element_ = element;
      this.mutateElement_ = mutateElement;
      this.onclose_ = onclose;
      this.swipeElement_ = null;
      this.hiddenElement_ = null;
      this.mask_ = null;
      this.overlay_ = null;
      this.preventScrollUnlistener_ = null;
      this.isSwiping_ = false;
    }
    _createClass10(SwipeToDismiss2, [{
      key: "startSwipe",
      value: function startSwipe(config) {
        var _this = this;
        var hiddenElement = config.hiddenElement, mask = config.mask, overlay = config.overlay, swipeElement = config.swipeElement;
        this.swipeElement_ = swipeElement;
        this.hiddenElement_ = hiddenElement;
        this.mask_ = mask;
        this.overlay_ = overlay;
        this.isSwiping_ = true;
        this.mutateElement_(function() {
          _this.startSwipeToDismiss_();
        });
      }
    }, {
      key: "carrySwipeMomentum_",
      value: function carrySwipeMomentum_(scale, deltaX, deltaY, velocity) {
        var duration = velocity * SWIPE_TO_CLOSE_DISTANCE_TO_TIME_FACTOR;
        setStyles(dev().assertElement(this.swipeElement_), {
          transform: "scale(" + scale + ") translate(" + deltaX + "px, " + deltaY + "px)",
          transition: duration + "ms transform " + SWIPE_TO_CLOSE_MOMENTUM_TIMING
        });
        return delayAfterDeferringToEventLoop(this.win_, duration);
      }
    }, {
      key: "snapBackFromSwipe_",
      value: function snapBackFromSwipe_(finalDistance) {
        var _this2 = this;
        var duration = finalDistance * SWIPE_TO_CLOSE_SNAP_BACK_TIME_FACTOR;
        return this.mutateElement_(function() {
          setStyles(dev().assertElement(_this2.swipeElement_), {
            transform: "",
            transition: duration + "ms transform ease-out"
          });
          setStyles(dev().assertElement(_this2.mask_), {
            opacity: "",
            transition: duration + "ms opacity ease-out"
          });
          setStyles(dev().assertElement(_this2.overlay_), {
            opacity: "",
            transition: duration + "ms opacity ease-out"
          });
        }).then(function() {
          return delayAfterDeferringToEventLoop(_this2.win_, duration);
        });
      }
    }, {
      key: "adjustForSwipePosition_",
      value: function adjustForSwipePosition_(swipeElementTransform, maskOpacity, overlayOpacity) {
        if (swipeElementTransform === void 0) {
          swipeElementTransform = "";
        }
        if (maskOpacity === void 0) {
          maskOpacity = "";
        }
        if (overlayOpacity === void 0) {
          overlayOpacity = "";
        }
        setStyles(dev().assertElement(this.swipeElement_), {
          transform: swipeElementTransform,
          transition: ""
        });
        setStyles(dev().assertElement(this.mask_), {
          opacity: maskOpacity,
          transition: ""
        });
        setStyles(dev().assertElement(this.overlay_), {
          opacity: overlayOpacity,
          transition: ""
        });
      }
    }, {
      key: "releaseSwipe_",
      value: function releaseSwipe_(scale, velocityX, velocityY, deltaX, deltaY) {
        var _this3 = this;
        var velocity = calculateDistance(0, 0, velocityX, velocityY);
        var distanceX = velocityX * SWIPE_TO_CLOSE_VELOCITY_TO_DISTANCE_FACTOR;
        var distanceY = velocityY * SWIPE_TO_CLOSE_VELOCITY_TO_DISTANCE_FACTOR;
        var finalDeltaX = distanceX + deltaX;
        var finalDeltaY = distanceY + deltaY;
        var finalDistance = calculateDistance(0, 0, finalDeltaX, finalDeltaY);
        return this.carrySwipeMomentum_(scale, finalDeltaX, finalDeltaY, velocity).then(function() {
          if (finalDistance < SWIPE_TO_CLOSE_DISTANCE_THRESHOLD && velocity < SWIPE_TO_CLOSE_VELOCITY_THRESHOLD) {
            return _this3.snapBackFromSwipe_(finalDistance);
          }
          return _this3.onclose_();
        });
      }
    }, {
      key: "startSwipeToDismiss_",
      value: function startSwipeToDismiss_() {
        this.hiddenElement_.classList.add("i-amphtml-ghost");
        this.preventScrollUnlistener_ = listen(dev().assertElement(this.swipeElement_), "scroll", function(event) {
          event.stopPropagation();
        }, {
          capture: true
        });
        this.element_.setAttribute("i-amphtml-scale-animation", "");
        setStyle(this.overlay_, "animationFillMode", "none");
      }
    }, {
      key: "endSwipeToDismiss_",
      value: function endSwipeToDismiss_() {
        this.hiddenElement_.classList.remove("i-amphtml-ghost");
        this.preventScrollUnlistener_();
        this.element_.removeAttribute("i-amphtml-scale-animation");
        setStyle(this.overlay_, "animationFillMode", "");
      }
    }, {
      key: "swipeMove",
      value: function swipeMove(data) {
        var _this4 = this;
        var deltaX = data.deltaX, deltaY = data.deltaY, last = data.last, velocityX = data.velocityX, velocityY = data.velocityY;
        var wasSwiping = this.isSwiping_;
        if (last) {
          this.isSwiping_ = false;
        }
        var distance = calculateDistance(0, 0, deltaX, deltaY);
        var releasePercentage = Math.min(distance / SWIPE_TO_CLOSE_DISTANCE, 1);
        var hideOverlayPercentage = Math.min(distance / SWIPE_TO_HIDE_OVERLAY_DISTANCE, 1);
        var scale = lerp(1, SWIPE_TO_CLOSE_MIN_SCALE, releasePercentage);
        var maskOpacity = lerp(1, SWIPE_TO_CLOSE_MIN_OPACITY, releasePercentage);
        var overlayOpacity = lerp(1, 0, hideOverlayPercentage);
        this.mutateElement_(function() {
          if (data.last && wasSwiping) {
            _this4.releaseSwipe_(scale, velocityX, velocityY, deltaX, deltaY).then(function() {
              _this4.adjustForSwipePosition_();
              _this4.endSwipeToDismiss_();
            });
            return;
          }
          if (_this4.isSwiping_) {
            _this4.adjustForSwipePosition_("scale(" + scale + ") translate(" + deltaX + "px, " + deltaY + "px)", maskOpacity, overlayOpacity);
          }
        });
      }
    }]);
    return SwipeToDismiss2;
  }();

  // src/core/math/index.js
  function clamp(val, min, max) {
    devAssert2(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }

  // src/experiments/index.js
  function _createForOfIteratorHelperLoose2(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (it)
      return (it = it.call(o2)).next.bind(it);
    if (Array.isArray(o2) || (it = _unsupportedIterableToArray2(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
      if (it)
        o2 = it;
      var i2 = 0;
      return function() {
        if (i2 >= o2.length)
          return { done: true };
        return { done: false, value: o2[i2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray2(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray2(o2, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  var TAG = "EXPERIMENTS";
  var LOCAL_STORAGE_KEY = "amp-experiment-toggles";
  var TOGGLES_WINDOW_PROPERTY = "__AMP__EXPERIMENT_TOGGLES";
  function isCanary(win) {
    var _win$AMP_CONFIG;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.canary);
  }
  function getBinaryType(win) {
    var _win$AMP_CONFIG2;
    return ((_win$AMP_CONFIG2 = win.AMP_CONFIG) == null ? void 0 : _win$AMP_CONFIG2.type) || "unknown";
  }
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
  function experimentTogglesOrNull(win) {
    return win[TOGGLES_WINDOW_PROPERTY] || null;
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

  // node_modules/@ampproject/animations/dist/animations.mjs
  function t(t2, e2, n2) {
    return (t2 = t2.width / t2.height) > e2.width / e2.height !== n2 ? {
      width: e2.height * t2,
      height: e2.height
    } : {
      width: e2.width,
      height: e2.width / t2
    };
  }
  function e(e2, n2, i2) {
    if (i2 === void 0) {
      i2 = getComputedStyle(e2).getPropertyValue("object-fit");
    }
    switch (e2 = {
      width: e2.naturalWidth,
      height: e2.naturalHeight
    }, i2) {
      case "cover":
        return t(e2, n2, false);
      case "contain":
        return t(e2, n2, true);
      case "fill":
        return n2;
      case "none":
        return e2;
      case "scale-down":
        return n2 = t(e2, n2, true), {
          width: Math.min(e2.width, n2.width),
          height: Math.min(e2.height, n2.height)
        };
      case "":
      case null:
        return n2;
      default:
        throw Error("object-fit: " + i2 + " not supported");
    }
  }
  function n(t2, e2) {
    return t2 = (t2.match(new RegExp("-?\\s*\\d+" + e2)) || ["0"])[0].replace(" ", ""), parseFloat(t2);
  }
  function i(t2, e2, i2) {
    var r2 = t2 || "50% 50%", a3 = r2.lastIndexOf("calc", 0) === 0 ? r2.indexOf(")") + 1 : r2.indexOf(" ");
    t2 = r2.slice(0, a3) || "", r2 = r2.slice(a3) || "", a3 = n(t2, "px");
    var o2 = n(r2, "px");
    return t2 = n(t2, "%") / 100, {
      top: n(r2, "%") / 100 * (e2.height - i2.height) + o2,
      left: t2 * (e2.width - i2.width) + a3
    };
  }
  function r(t2) {
    return "cubic-bezier(" + t2.x1 + "," + t2.y1 + "," + t2.x2 + "," + t2.y2 + ")";
  }
  function a(t2, e2, n2) {
    var i2 = n2 * n2, r2 = i2 * n2;
    return 3 * (n2 - 2 * i2 + r2) * t2 + 3 * (i2 - r2) * e2 + r2;
  }
  function o(_ref) {
    var t2 = _ref.m, e2 = _ref.i, n2 = _ref.f, i2 = _ref.g, r2 = _ref.curve, o2 = _ref.styles, l2 = _ref.a, s2 = _ref.b;
    var c2 = l2 + "-crop";
    l2 = l2 + "-counterScale", i2 = {
      x: i2.width / n2.width,
      y: i2.height / n2.height
    };
    var m = {
      x: 1,
      y: 1
    };
    return n2 = s2 ? i2 : m, s2 = s2 ? m : i2, Object.assign(t2.style, o2, {
      willChange: "transform",
      transformOrigin: "top left",
      animationName: c2,
      animationTimingFunction: "linear",
      animationFillMode: "forwards"
    }), Object.assign(e2.style, o2, {
      willChange: "transform",
      transformOrigin: "top left",
      animationName: l2,
      animationTimingFunction: "linear",
      animationFillMode: "forwards"
    }), function(_ref2) {
      var t3 = _ref2.I, e3 = _ref2.w, n3 = _ref2.curve, i3 = _ref2.F, r3 = _ref2.u;
      var o3 = "", l3 = "";
      for (var _i = 0; 20 >= _i; _i++) {
        var s3 = 0.05 * _i, c3 = a(n3.y1, n3.y2, s3);
        s3 = 100 * a(n3.x1, n3.x2, s3);
        var m2 = t3.x;
        m2 += c3 * (e3.x - m2);
        var f = t3.y;
        o3 += s3 + "% {transform: scale(" + m2 + "," + (c3 = f + c3 * (e3.y - f)) + ");}", l3 += s3 + "% {transform: scale(" + (f = 1 / m2) + "," + 1 / c3 + ");}";
      }
      return "@keyframes " + i3 + " {" + o3 + "}@keyframes " + r3 + " {" + l3 + "}";
    }({
      I: n2,
      w: s2,
      curve: r2,
      F: c2,
      u: l2
    });
  }
  var l = {
    x1: 0.42,
    y1: 0,
    x2: 0.58,
    y2: 1
  };
  var s = 0;
  function c(t2, n2, i2) {
    var r2 = getComputedStyle(t2);
    var a3 = r2.getPropertyValue("object-fit");
    return {
      objectFit: a3,
      objectPosition: r2 = r2.getPropertyValue("object-position"),
      rect: n2,
      c: i2,
      j: t2,
      h: e(t2, n2, a3),
      s: n2.width * n2.height
    };
  }
  function prepareImageAnimation(_ref3) {
    var _ref3$transitionConta = _ref3.transitionContainer, t2 = _ref3$transitionConta === void 0 ? document.body : _ref3$transitionConta, _ref3$styleContainer = _ref3.styleContainer, n2 = _ref3$styleContainer === void 0 ? document.head : _ref3$styleContainer, a3 = _ref3.srcImg, m = _ref3.targetImg, _ref3$srcImgRect = _ref3.srcImgRect, f = _ref3$srcImgRect === void 0 ? a3.getBoundingClientRect() : _ref3$srcImgRect, _ref3$srcCropRect = _ref3.srcCropRect, h = _ref3$srcCropRect === void 0 ? f : _ref3$srcCropRect, _ref3$targetImgRect = _ref3.targetImgRect, u = _ref3$targetImgRect === void 0 ? m.getBoundingClientRect() : _ref3$targetImgRect, _ref3$targetCropRect = _ref3.targetCropRect, p = _ref3$targetCropRect === void 0 ? u : _ref3$targetCropRect, _ref3$curve = _ref3.curve, d = _ref3$curve === void 0 ? l : _ref3$curve, g = _ref3.styles, _ref3$keyframesNamesp = _ref3.keyframesNamespace, y = _ref3$keyframesNamesp === void 0 ? "img-transform" : _ref3$keyframesNamesp;
    a3 = c(a3, f, h), u = (m = (p = c(m, u, p)).s > a3.s) ? a3 : p, p = m ? p : a3, a3 = function(t3) {
      return s += 1, t3 + "-" + s + "-";
    }(y);
    var _ref4 = function(t3, n3, r2, a4, o2) {
      if (n3 === void 0) {
        n3 = t3.getBoundingClientRect();
      }
      if (r2 === void 0) {
        r2 = n3;
      }
      if (a4 === void 0) {
        a4 = getComputedStyle(t3).getPropertyValue("object-position");
      }
      if (o2 === void 0) {
        o2 = e(t3, n3);
      }
      n3 = i(a4, n3, o2), a4 = document.createElement("div");
      var l2 = document.createElement("div"), s2 = document.createElement("div"), c2 = document.createElement("div"), m2 = document.createElement("div");
      return (t3 = t3.cloneNode(true)).className = "", t3.style.cssText = "", m2.appendChild(t3), c2.appendChild(m2), s2.appendChild(c2), l2.appendChild(s2), a4.appendChild(l2), Object.assign(l2.style, {
        overflow: "hidden",
        width: r2.width + "px",
        height: r2.height + "px"
      }), Object.assign(m2.style, {
        transform: "translate(" + n3.left + "px," + n3.top + "px)"
      }), Object.assign(t3.style, {
        display: "block",
        width: o2.width + "px",
        height: o2.height + "px"
      }), {
        J: a4,
        m: l2,
        i: s2,
        v: c2,
        A: m2,
        j: t3
      };
    }(p.j, p.rect, p.c, p.objectPosition, p.h), $ = _ref4.J, x = _ref4.m, w = _ref4.i, b = _ref4.v, v = _ref4.A, C = _ref4.j;
    f = function t3(e2) {
      var _getComputedStyle = getComputedStyle(e2), n3 = _getComputedStyle.position;
      return n3 != "static" ? e2 : (n3 = e2.offsetParent || e2.parentElement) ? t3(n3) : e2;
    }(t2).getBoundingClientRect(), y = o({
      m: x,
      i: w,
      f: p.c,
      g: u.c,
      curve: d,
      styles: g,
      a: a3,
      b: m
    }), f = function(_ref5) {
      var t3 = _ref5.element, e2 = _ref5.D, n3 = _ref5.f, i2 = _ref5.g, a4 = _ref5.curve, o2 = _ref5.styles, l2 = _ref5.a, s2 = _ref5.b;
      l2 = l2 + "-translation";
      var c2 = s2 ? i2 : n3;
      return n3 = s2 ? n3 : i2, i2 = c2.left - n3.left, c2 = c2.top - n3.top, Object.assign(t3.style, o2, {
        position: "absolute",
        top: n3.top - e2.top + "px",
        left: n3.left - e2.left + "px",
        willChange: "transform",
        animationName: l2,
        animationTimingFunction: r(a4),
        animationFillMode: "forwards"
      }), "@keyframes " + l2 + " {from {transform: translate(" + i2 + "px," + c2 + "px);}to {transform: translate(0,0);}}";
    }({
      element: $,
      D: f,
      f: p.c,
      g: u.c,
      curve: d,
      styles: g,
      a: a3,
      b: m
    }), h = function(_ref6) {
      var t3 = _ref6.element, e2 = _ref6.f, n3 = _ref6.g, a4 = _ref6.l, o2 = _ref6.o, l2 = _ref6.C, s2 = _ref6.H, c2 = _ref6.curve, m2 = _ref6.styles, f2 = _ref6.a, h2 = _ref6.b;
      return c2 = r(c2), f2 = f2 + "-object-position", e2 = i(l2, e2, a4), o2 = i(s2, n3, o2), n3 = h2 ? o2 : e2, h2 = h2 ? e2 : o2, Object.assign(t3.style, m2, {
        willChange: "transform",
        animationName: f2,
        animationTimingFunction: c2,
        animationFillMode: "forwards"
      }), "@keyframes " + f2 + " {from {transform: translate(" + n3.left + "px," + n3.top + "px);}to {transform: translate(" + h2.left + "px," + h2.top + "px);}}";
    }({
      element: v,
      f: p.rect,
      g: u.rect,
      l: p.h,
      o: u.h,
      C: p.objectPosition,
      H: u.objectPosition,
      curve: d,
      styles: g,
      a: a3,
      b: m
    });
    var j = function(_ref7) {
      var t3 = _ref7.element, e2 = _ref7.f, n3 = _ref7.B, i2 = _ref7.g, a4 = _ref7.G, o2 = _ref7.curve, l2 = _ref7.styles, s2 = _ref7.a, c2 = _ref7.b;
      return s2 = s2 + "-crop-position", e2 = {
        top: e2.top - n3.top,
        left: e2.left - n3.left
      }, a4 = {
        top: i2.top - a4.top,
        left: i2.left - a4.left
      }, i2 = c2 ? a4 : e2, c2 = c2 ? e2 : a4, Object.assign(t3.style, l2, {
        willChange: "transform",
        animationName: s2,
        animationTimingFunction: r(o2),
        animationFillMode: "forwards"
      }), "@keyframes " + s2 + " {from {transform: translate(" + i2.left + "px," + i2.top + "px);}to {transform: translate(" + c2.left + "px," + c2.top + "px);}}";
    }({
      element: b,
      f: p.rect,
      B: p.c,
      g: u.rect,
      G: u.c,
      curve: d,
      styles: g,
      a: a3,
      b: m
    });
    d = function(_ref8) {
      var t3 = _ref8.element, e2 = _ref8.l, n3 = _ref8.o, i2 = _ref8.curve, a4 = _ref8.styles, o2 = _ref8.a, l2 = _ref8.b;
      o2 = o2 + "-scale";
      var s2 = {
        x: 1,
        y: 1
      };
      return n3 = {
        x: n3.width / e2.width,
        y: n3.height / e2.height
      }, e2 = l2 ? n3 : s2, l2 = l2 ? s2 : n3, Object.assign(t3.style, a4, {
        willChange: "transform",
        transformOrigin: "top left",
        animationName: o2,
        animationTimingFunction: r(i2),
        animationFillMode: "forwards"
      }), "@keyframes " + o2 + " {from {transform: scale(" + e2.x + "," + e2.y + ");}to {transform: scale(" + l2.x + "," + l2.y + ");}}";
    }({
      element: C,
      l: p.h,
      o: u.h,
      curve: d,
      styles: g,
      a: a3,
      b: m
    });
    var F = document.createElement("style");
    return F.textContent = y + f + h + j + d, {
      applyAnimation: function applyAnimation() {
        n2.appendChild(F), t2.appendChild($);
      },
      cleanupAnimation: function cleanupAnimation() {
        t2.removeChild($), n2.removeChild(F);
      }
    };
  }

  // src/core/types/function/exponential-backoff.js
  function exponentialBackoff(opt_base) {
    var getTimeout = exponentialBackoffClock(opt_base);
    return function(work) {
      return setTimeout(work, getTimeout());
    };
  }
  function exponentialBackoffClock(opt_base) {
    var base = opt_base || 2;
    var count = 0;
    return function() {
      var wait = Math.pow(base, count++);
      wait += getJitter(wait);
      return wait * 1e3;
    };
  }
  function getJitter(wait, opt_perc) {
    opt_perc = opt_perc || 0.3;
    var jitter = wait * opt_perc * Math.random();
    if (Math.random() > 0.5) {
      jitter *= -1;
    }
    return jitter;
  }

  // src/core/data-structures/lru-cache.js
  function _classCallCheck12(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties11(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck12(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass11(LruCache2, [{
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
  var a2;
  var cache;
  function parseUrlDeprecated(url, opt_nocache) {
    if (!a2) {
      a2 = self.document.createElement("a");
      cache = false ? null : self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new LruCache(100));
    }
    return parseUrlWithA(a2, url, opt_nocache ? null : cache);
  }
  function parseUrlWithA(a3, url, opt_cache) {
    if (false) {
      a3.href = "";
      return new URL(url, a3.href);
    }
    if (opt_cache && opt_cache.has(url)) {
      return opt_cache.get(url);
    }
    a3.href = url;
    if (!a3.protocol) {
      a3.href = a3.href;
    }
    var info = {
      href: a3.href,
      protocol: a3.protocol,
      host: a3.host,
      hostname: a3.hostname,
      port: a3.port == "0" ? "" : a3.port,
      pathname: a3.pathname,
      search: a3.search,
      hash: a3.hash,
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
    if (a3.origin && a3.origin != "null") {
      origin = a3.origin;
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
  function isProxyOrigin(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return urls.cdnProxyRegex.test(url.origin);
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

  // src/error-reporting.js
  var CANCELLED = "CANCELLED";
  var NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD = 1e-3;
  var USER_ERROR_THROTTLE_THRESHOLD = 0.1;
  var BETA_ERROR_REPORT_URL_FREQ = 0.1;
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;
  function pushLimit(array, element, limit) {
    if (array.length >= limit) {
      array.splice(0, array.length - limit + 1);
    }
    array.push(element);
  }
  var _reportingBackoff = function reportingBackoff(work) {
    _reportingBackoff = exponentialBackoff(1.5);
    return _reportingBackoff(work);
  };
  function tryJsonStringify(value) {
    try {
      return JSON.stringify(value);
    } catch (e2) {
      return String(value);
    }
  }
  function reportError(error, opt_associatedElement) {
    try {
      var isValidError;
      if (error) {
        if (error.message !== void 0) {
          error = duplicateErrorIfNecessary(error);
          isValidError = true;
        } else {
          var origError = error;
          error = new Error(tryJsonStringify(origError));
          error.origError = origError;
        }
      } else {
        error = new Error("Unknown error");
      }
      if (!isValidError && getMode().localDev && !getMode().test) {
        setTimeout(function() {
          var rethrow = new Error("_reported_ Error reported incorrectly: " + error);
          throw rethrow;
        });
      }
      if (error.reported) {
        return error;
      }
      error.reported = true;
      if (error.messageArray) {
        var elIndex = findIndex(error.messageArray, function(item) {
          return item == null ? void 0 : item.tagName;
        });
        if (elIndex > -1) {
          error.associatedElement = error.messageArray[elIndex];
        }
      }
      var element = opt_associatedElement || error.associatedElement;
      if (element && element.classList) {
        element.classList.add("i-amphtml-error");
        if (getMode().development) {
          element.classList.add("i-amphtml-element-error");
          element.setAttribute("error-message", error.message);
        }
      }
      if (self.console && (isUserErrorMessage(error.message) || !error.expected || getMode().localDev)) {
        var output = console.error || console.log;
        if (error.messageArray) {
          output.apply(console, error.messageArray);
        } else {
          if (element) {
            output.call(console, error.message, element);
          } else if (!getMode().minified) {
            output.call(console, error.stack);
          } else {
            output.call(console, error.message);
          }
        }
      }
      if (element && element.dispatchCustomEventForTesting) {
        element.dispatchCustomEventForTesting(AmpEvents.ERROR, error.message);
      }
      onError["call"](self, void 0, void 0, void 0, void 0, error);
    } catch (errorReportingError) {
      setTimeout(function() {
        throw errorReportingError;
      });
    }
    return error;
  }
  function onError(message, filename, line, col, error) {
    var _this = this;
    if (this && this.document && (!error || !error.expected)) {
      makeBodyVisibleRecovery(this.document);
    }
    if (getMode().localDev || getMode().development || getMode().test) {
      return;
    }
    var hasNonAmpJs = false;
    try {
      hasNonAmpJs = detectNonAmpJs(self);
    } catch (ignore) {
    }
    if (hasNonAmpJs && Math.random() > 0.01) {
      return;
    }
    var data = getErrorReportData(message, filename, line, col, error, hasNonAmpJs);
    if (data) {
      _reportingBackoff(function() {
        try {
          return reportErrorToServerOrViewer(_this, data).catch(function() {
          });
        } catch (e2) {
        }
      });
    }
  }
  function chooseReportingUrl_() {
    return Math.random() < BETA_ERROR_REPORT_URL_FREQ ? urls.betaErrorReporting : urls.errorReporting;
  }
  function reportErrorToServerOrViewer(win, data) {
    if (data["pt"] && Math.random() < 0.9) {
      return resolvedPromise();
    }
    return maybeReportErrorToViewer(win, data).then(function(reportedErrorToViewer) {
      if (!reportedErrorToViewer) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", chooseReportingUrl_(), true);
        xhr.send(JSON.stringify(data));
      }
    });
  }
  function maybeReportErrorToViewer(win, data) {
    var ampdocService = Services.ampdocServiceFor(win);
    if (!ampdocService.isSingleDoc()) {
      return Promise.resolve(false);
    }
    var ampdocSingle = ampdocService.getSingleDoc();
    var htmlElement = ampdocSingle.getRootNode().documentElement;
    var docOptedIn = htmlElement.hasAttribute("report-errors-to-viewer");
    if (!docOptedIn) {
      return Promise.resolve(false);
    }
    var viewer = Services.viewerForDoc(ampdocSingle);
    if (!viewer.hasCapability("errorReporter")) {
      return Promise.resolve(false);
    }
    return viewer.isTrustedViewer().then(function(viewerTrusted) {
      if (!viewerTrusted) {
        return false;
      }
      viewer.sendMessage("error", errorReportingDataForViewer(data));
      return true;
    });
  }
  function errorReportingDataForViewer(errorReportData) {
    return dict({
      "m": errorReportData["m"],
      "a": errorReportData["a"],
      "s": errorReportData["s"],
      "el": errorReportData["el"],
      "ex": errorReportData["ex"],
      "v": errorReportData["v"],
      "pt": errorReportData["pt"]
    });
  }
  function buildErrorMessage_(message, error) {
    if (error) {
      if (error.message) {
        message = error.message;
      } else {
        message = String(error);
      }
    }
    if (!message) {
      message = "Unknown error";
    }
    return message;
  }
  function getErrorReportData(message, filename, line, col, error, hasNonAmpJs) {
    message = buildErrorMessage_(message, error);
    var expected = !!(error && error.expected);
    if (/_reported_/.test(message)) {
      return;
    }
    if (message == CANCELLED) {
      return;
    }
    var detachedWindow = !(self && self.window);
    var throttleBase = Math.random();
    if (isLoadErrorMessage(message) || message == "Script error." || detachedWindow) {
      expected = true;
      if (throttleBase > NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD) {
        return;
      }
    }
    var isUserError = isUserErrorMessage(message);
    if (isUserError && throttleBase > USER_ERROR_THROTTLE_THRESHOLD) {
      return;
    }
    var data = Object.create(null);
    data["v"] = getMode().rtvVersion;
    data["noAmp"] = hasNonAmpJs ? "1" : "0";
    data["m"] = message.replace(USER_ERROR_SENTINEL, "");
    data["a"] = isUserError ? "1" : "0";
    data["ex"] = expected ? "1" : "0";
    data["dw"] = detachedWindow ? "1" : "0";
    var runtime = "1p";
    if (false) {
      runtime = "sxg";
      data["sxg"] = "1";
    } else if (false) {
      runtime = "esm";
      data["esm"] = "1";
    } else if (self.context && self.context.location) {
      data["3p"] = "1";
      runtime = "3p";
    } else if (getMode().runtime) {
      runtime = getMode().runtime;
    }
    data["rt"] = runtime;
    if (runtime === "inabox") {
      data["adid"] = getMode().a4aId;
    }
    data["ca"] = isCanary(self) ? "1" : "0";
    data["bt"] = getBinaryType(self);
    if (self.location.ancestorOrigins && self.location.ancestorOrigins[0]) {
      data["or"] = self.location.ancestorOrigins[0];
    }
    if (self.viewerState) {
      data["vs"] = self.viewerState;
    }
    if (self.parent && self.parent != self) {
      data["iem"] = "1";
    }
    if (self.AMP && self.AMP.viewer) {
      var resolvedViewerUrl = self.AMP.viewer.getResolvedViewerUrl();
      var messagingOrigin = self.AMP.viewer.maybeGetMessagingOrigin();
      if (resolvedViewerUrl) {
        data["rvu"] = resolvedViewerUrl;
      }
      if (messagingOrigin) {
        data["mso"] = messagingOrigin;
      }
    }
    var exps = [];
    var experiments = experimentTogglesOrNull(self);
    for (var exp in experiments) {
      var on = experiments[exp];
      exps.push(exp + "=" + (on ? "1" : "0"));
    }
    data["exps"] = exps.join(",");
    if (error) {
      var _error$associatedElem;
      data["el"] = ((_error$associatedElem = error.associatedElement) == null ? void 0 : _error$associatedElem.tagName) || "u";
      if (error.args) {
        data["args"] = JSON.stringify(error.args);
      }
      if (!isUserError && !error.ignoreStack && error.stack) {
        data["s"] = error.stack;
      }
      if (error.message) {
        error.message += " _reported_";
      }
    } else {
      data["f"] = filename || "";
      data["l"] = line || "";
      data["c"] = col || "";
    }
    data["r"] = self.document ? self.document.referrer : "";
    data["ae"] = accumulatedErrorMessages.join(",");
    data["fr"] = self.location["originalHash"] || self.location.hash;
    if (data["bt"] === "production") {
      data["pt"] = "1";
    }
    pushLimit(accumulatedErrorMessages, message, 25);
    return data;
  }
  function detectNonAmpJs(win) {
    if (!win.document) {
      return false;
    }
    var scripts = win.document.querySelectorAll("script[src]");
    for (var i2 = 0; i2 < scripts.length; i2++) {
      if (!isProxyOrigin(scripts[i2].src.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  // extensions/amp-lightbox-gallery/0.1/amp-lightbox-gallery.js
  var _templateObject3;
  var _templateObject22;
  var _templateObject32;
  var _templateObject4;
  var _templateObject5;
  var _templateObject6;
  var _templateObject7;
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
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
  function _taggedTemplateLiteralLoose3(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _classCallCheck13(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties12(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
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
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o2, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o3, p2) {
      o3.__proto__ = p2;
      return o3;
    };
    return _setPrototypeOf2(o2, p);
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
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf2(o2) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf2(o2);
  }
  var TAG2 = "amp-lightbox-gallery";
  var AMP_CAROUSEL_TAG = "amp-carousel";
  var DEFAULT_GALLERY_ID = "amp-lightbox-gallery";
  var SLIDE_ITEM_SELECTOR = ".i-amphtml-slide-item, .i-amphtml-carousel-slotted";
  var LightboxControlsModes = {
    CONTROLS_DISPLAYED: 1,
    CONTROLS_HIDDEN: 0
  };
  var TRANSITION_CURVE = {
    x1: 0.8,
    y1: 0,
    x2: 0.2,
    y2: 1
  };
  var FADE_DURATION = 400;
  var MAX_TRANSITION_DURATION = 700;
  var MIN_TRANSITION_DURATION = 500;
  var MAX_DISTANCE_APPROXIMATION = 250;
  var MOTION_DURATION_RATIO = 0.8;
  var AmpLightboxGallery = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpLightboxGallery2, _AMP$BaseElement);
    var _super = _createSuper2(AmpLightboxGallery2);
    function AmpLightboxGallery2(element) {
      var _this;
      _classCallCheck13(this, AmpLightboxGallery2);
      _this = _super.call(this, element);
      _this.doc_ = _this.win.document;
      _this.isActive_ = false;
      _this.historyId_ = -1;
      _this.currentElemId_ = -1;
      _this.boundOnKeyDown_ = _this.onKeyDown_.bind(_assertThisInitialized2(_this));
      _this.boundSlideChangeHandler_ = _this.slideChangeHandler_.bind(_assertThisInitialized2(_this));
      _this.manager_ = null;
      _this.history_ = null;
      _this.action_ = null;
      _this.elementsMetadata_ = {
        default: []
      };
      _this.container_ = null;
      _this.carouselContainer_ = null;
      _this.overlay_ = null;
      _this.mask_ = null;
      _this.navControls_ = null;
      _this.carousel_ = null;
      _this.lightboxCaption_ = null;
      _this.lightboxControls_ = null;
      _this.gallery_ = null;
      _this.topBar_ = null;
      _this.controlsMode_ = LightboxControlsModes.CONTROLS_DISPLAYED;
      _this.unlistenClick_ = null;
      _this.currentLightboxGroupId_ = "default";
      _this.hasVerticalScrollbarWidth_ = false;
      _this.boundMeasureMutate_ = _this.measureMutateElement.bind(_assertThisInitialized2(_this));
      _this.swipeToDismiss_ = new SwipeToDismiss(_this.win, _this.element, function(cb) {
        return _this.mutateElement(cb);
      }, function() {
        return _this.close_();
      });
      return _this;
    }
    _createClass12(AmpLightboxGallery2, [{
      key: "renderOutsideViewport",
      value: function renderOutsideViewport() {
        return true;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        return lightboxManagerForDoc(this.element).then(function(manager) {
          _this2.manager_ = manager;
          _this2.history_ = Services.historyForDoc(_this2.getAmpDoc());
          _this2.action_ = Services.actionServiceForDoc(_this2.element);
          return _this2.getAmpDoc().whenFirstVisible();
        }).then(function() {
          _this2.container_ = htmlFor(_this2.doc_)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose3(['\n        <div class="i-amphtml-lbg">\n          <div class="i-amphtml-lbg-mask"></div>\n        </div>'])));
          _this2.mask_ = _this2.container_.querySelector(".i-amphtml-lbg-mask");
          _this2.element.appendChild(_this2.container_);
          _this2.manager_.maybeInit();
          _this2.registerDefaultAction(function(invocation) {
            return _this2.openAction_(invocation);
          }, "open");
        });
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        return resolvedPromise();
      }
    }, {
      key: "buildOverlay_",
      value: function buildOverlay_() {
        var _this3 = this;
        this.overlay_ = htmlFor(this.doc_)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose3(['\n      <div class="i-amphtml-lbg-overlay"></div>'])));
        var descriptionBoxElement = this.buildDescriptionBox_();
        var controlsElement = this.buildControls_();
        this.mutateElement(function() {
          _this3.overlay_.appendChild(descriptionBoxElement);
          _this3.overlay_.appendChild(controlsElement);
          _this3.container_.appendChild(_this3.overlay_);
        });
      }
    }, {
      key: "findOrInitializeLightbox_",
      value: function findOrInitializeLightbox_(lightboxGroupId) {
        if (!this.carouselContainer_) {
          this.carouselContainer_ = this.doc_.createElement("div");
          this.container_.appendChild(this.carouselContainer_);
        }
        if (!this.overlay_) {
          this.buildOverlay_();
        }
        return this.findOrBuildCarousel_(lightboxGroupId);
      }
    }, {
      key: "cloneLightboxableElement_",
      value: function cloneLightboxableElement_(element) {
        var fallback = element.getFallback();
        var shouldCloneFallback = element.classList.contains("amp-notsupported") && !!fallback;
        if (shouldCloneFallback) {
          element = fallback;
        }
        var deepClone = !element.classList.contains("i-amphtml-element");
        var clonedNode = element.cloneNode(deepClone);
        clonedNode.removeAttribute("on");
        clonedNode.removeAttribute("id");
        clonedNode.removeAttribute("i-amphtml-layout");
        clonedNode.removeAttribute("fallback");
        return clonedNode;
      }
    }, {
      key: "buildCarouselSlides_",
      value: function buildCarouselSlides_(lightboxableElements) {
        var _this4 = this;
        var index = 0;
        this.elementsMetadata_[this.currentLightboxGroupId_] = [];
        lightboxableElements.forEach(function(element) {
          element.lightboxItemId = index++;
          var clonedNode = _this4.cloneLightboxableElement_(element);
          var descText = _this4.manager_.getDescription(element);
          var metadata = {
            descriptionText: descText,
            tagName: clonedNode.tagName,
            sourceElement: element,
            element: dev().assertElement(clonedNode)
          };
          var slide = clonedNode;
          if (ELIGIBLE_TAP_TAGS[clonedNode.tagName]) {
            var container = _this4.doc_.createElement("div");
            var imageViewer = htmlFor(_this4.doc_)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteralLoose3(['\n          <amp-image-viewer layout="fill"></amp-image-viewer>'])));
            for (var name in clonedNode.dataset) {
              container.dataset[name] = clonedNode.dataset[name];
            }
            clonedNode.removeAttribute("class");
            imageViewer.appendChild(clonedNode);
            container.appendChild(imageViewer);
            slide = container;
            metadata.imageViewer = imageViewer;
          }
          _this4.carousel_.appendChild(slide);
          _this4.elementsMetadata_[_this4.currentLightboxGroupId_].push(metadata);
        });
      }
    }, {
      key: "findOrBuildCarousel_",
      value: function findOrBuildCarousel_(lightboxGroupId) {
        devAssert(this.container_);
        var existingCarousel = this.element.querySelector("amp-carousel[amp-lightbox-group=" + escapeCssSelectorIdent(lightboxGroupId) + "]");
        if (existingCarousel) {
          this.carousel_ = existingCarousel;
          return this.showCarousel_(lightboxGroupId);
        } else {
          return this.buildCarousel_(lightboxGroupId);
        }
      }
    }, {
      key: "showCarousel_",
      value: function showCarousel_(lightboxGroupId) {
        var _this5 = this;
        return this.mutateElement(function() {
          var length = _this5.elementsMetadata_[lightboxGroupId].length;
          _this5.maybeEnableMultipleItemControls_(length);
          _this5.carousel_.getImpl().then(function(implementation) {
            implementation.unlayoutCallback();
            toggle(_this5.carousel_, true);
          });
        });
      }
    }, {
      key: "buildCarousel_",
      value: function buildCarousel_(lightboxGroupId) {
        var _this6 = this;
        var extensionVersion = this.getAmpDoc().getExtensionVersion(AMP_CAROUSEL_TAG);
        var experimentVersion = isExperimentOn(this.win, "amp-lightbox-gallery-carousel-0-2") ? "0.2" : "0.1";
        var carouselVersion = extensionVersion != null ? extensionVersion : experimentVersion;
        return Promise.all([Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), AMP_CAROUSEL_TAG, carouselVersion), Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), "amp-image-viewer")]).then(function() {
          return _this6.manager_.getElementsForLightboxGroup(lightboxGroupId);
        }).then(function(list) {
          _this6.carousel_ = htmlFor(_this6.doc_)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose3(['\n          <amp-carousel type="slides" layout="fill" loop="true"></amp-carousel>\n        '])));
          _this6.carousel_.setAttribute("amp-lightbox-group", lightboxGroupId);
          _this6.buildCarouselSlides_(list);
          return _this6.mutateElement(function() {
            _this6.carouselContainer_.appendChild(_this6.carousel_);
            _this6.maybeEnableMultipleItemControls_(list.length);
          });
        });
      }
    }, {
      key: "maybeEnableMultipleItemControls_",
      value: function maybeEnableMultipleItemControls_(itemLength) {
        toggleAttribute(this.element, "i-amphtml-lbg-single-item", itemLength <= 1);
      }
    }, {
      key: "slideChangeHandler_",
      value: function slideChangeHandler_(event) {
        var index = getData(event)["index"];
        if (index == this.currentElemId_) {
          return;
        }
        this.currentElemId_ = index;
        this.updateDescriptionBox_();
      }
    }, {
      key: "buildDescriptionBox_",
      value: function buildDescriptionBox_() {
        var _this7 = this;
        this.lightboxCaption_ = LightboxCaption.build(this.doc_, this.boundMeasureMutate_);
        var el = this.lightboxCaption_.getElement();
        el.addEventListener("click", function(event) {
          triggerAnalyticsEvent(_this7.element, "descriptionOverflowToggled", dict({}));
          _this7.lightboxCaption_.toggleOverflow();
          event.stopPropagation();
          event.preventDefault();
        });
        return el;
      }
    }, {
      key: "buildControls_",
      value: function buildControls_() {
        var _this8 = this;
        this.lightboxControls_ = LightboxControls.build(this.win, this.doc_, this.boundMeasureMutate_);
        var el = this.lightboxControls_.getElement();
        el.addEventListener("action", function(event) {
          switch (getDetail(event)["action"]) {
            case LightboxControlsAction.CLOSE:
              _this8.close_();
              break;
            case LightboxControlsAction.GALLERY:
              _this8.openGallery_();
              break;
            case LightboxControlsAction.SLIDES:
              _this8.closeGallery_();
              break;
            case LightboxControlsAction.NEXT:
              _this8.nextSlide_();
              break;
            case LightboxControlsAction.PREV:
              _this8.prevSlide_();
              break;
            default:
              break;
          }
        });
        return el;
      }
    }, {
      key: "updateDescriptionBox_",
      value: function updateDescriptionBox_(expandDescription) {
        var _this9 = this;
        if (expandDescription === void 0) {
          expandDescription = false;
        }
        var descText = this.getCurrentElement_().descriptionText;
        this.mutateElement(function() {
          _this9.lightboxCaption_.setContent(descText);
          _this9.lightboxCaption_.setOverflowState(OverflowState.CLIP);
          _this9.lightboxCaption_.toggleOverflow(expandDescription);
        });
      }
    }, {
      key: "nextSlide_",
      value: function nextSlide_() {
        devAssert(this.carousel_).getImpl().then(function(carousel) {
          carousel.interactionNext();
        });
      }
    }, {
      key: "prevSlide_",
      value: function prevSlide_() {
        devAssert(this.carousel_).getImpl().then(function(carousel) {
          carousel.interactionPrev();
        });
      }
    }, {
      key: "shouldHandleClick_",
      value: function shouldHandleClick_(e2) {
        var target = dev().assertElement(e2.target);
        var consumingElement = closest(target, function(element) {
          return element.tagName == "BUTTON" || element.tagName == "A" || element.getAttribute("role") == "button";
        }, this.container_);
        var clickConsumed = consumingElement !== null;
        var hasTap = this.action_.hasAction(target, "tap", dev().assertElement(this.container_));
        return !(clickConsumed || hasTap);
      }
    }, {
      key: "onToggleOverlay_",
      value: function onToggleOverlay_(e2) {
        if (this.shouldHandleClick_(e2)) {
          if (this.controlsMode_ == LightboxControlsModes.CONTROLS_HIDDEN) {
            this.showOverlay_();
          } else if (!this.container_.hasAttribute("gallery-view")) {
            this.hideControls_();
          }
        }
        triggerAnalyticsEvent(this.element, "controlsToggled", dict({}));
      }
    }, {
      key: "showOverlay_",
      value: function showOverlay_() {
        this.overlay_.setAttribute("i-amphtml-lbg-fade", "in");
        this.controlsMode_ = LightboxControlsModes.CONTROLS_DISPLAYED;
      }
    }, {
      key: "hideControls_",
      value: function hideControls_() {
        this.overlay_.setAttribute("i-amphtml-lbg-fade", "out");
        this.controlsMode_ = LightboxControlsModes.CONTROLS_HIDDEN;
      }
    }, {
      key: "setupEventListeners_",
      value: function setupEventListeners_() {
        devAssert(this.container_);
        var onToggleControls = this.onToggleOverlay_.bind(this);
        this.unlistenClick_ = listen(dev().assertElement(this.container_), "click", onToggleControls);
      }
    }, {
      key: "cleanupEventListeners_",
      value: function cleanupEventListeners_() {
        if (this.unlistenClick_) {
          this.unlistenClick_();
          this.unlistenClick_ = null;
        }
      }
    }, {
      key: "setupGestures_",
      value: function setupGestures_() {
        var _this10 = this;
        var gestures = Gestures.get(dev().assertElement(this.carousel_));
        gestures.onGesture(SwipeYRecognizer, function(e2) {
          var data = e2.data;
          _this10.swipeGesture_(data);
        });
      }
    }, {
      key: "swipeGesture_",
      value: function swipeGesture_(data) {
        if (data.first) {
          var _this$getCurrentEleme = this.getCurrentElement_(), sourceElement = _this$getCurrentEleme.sourceElement;
          var parentCarousel = this.getSourceElementParentCarousel_(sourceElement);
          this.swipeToDismiss_.startSwipe({
            swipeElement: dev().assertElement(this.carousel_),
            hiddenElement: parentCarousel || sourceElement,
            mask: dev().assertElement(this.mask_),
            overlay: dev().assertElement(this.overlay_)
          });
          return;
        }
        this.swipeToDismiss_.swipeMove(data);
      }
    }, {
      key: "pauseLightboxChildren_",
      value: function pauseLightboxChildren_() {
        var lbgId = this.currentLightboxGroupId_;
        var slides = this.elementsMetadata_[lbgId].map(function(elemMetadata) {
          return elemMetadata.element;
        });
        Services.ownersForDoc(this.element).schedulePause(this.element, slides);
      }
    }, {
      key: "getCurrentElement_",
      value: function getCurrentElement_() {
        var lbgId = this.currentLightboxGroupId_;
        var currentElement = devAssert(this.elementsMetadata_[lbgId][this.currentElemId_]);
        return currentElement;
      }
    }, {
      key: "open",
      value: function open(element, expandDescription) {
        var _this11 = this;
        if (expandDescription === void 0) {
          expandDescription = false;
        }
        return this.openLightboxGallery_(dev().assertElement(element), expandDescription).then(function() {
          return _this11.history_.push(_this11.close_.bind(_this11));
        }).then(function(historyId) {
          _this11.historyId_ = historyId;
        });
      }
    }, {
      key: "openAction_",
      value: function openAction_(invocation) {
        var args = invocation.args || {};
        var id = args["id"];
        var expandDescription = args["expandDescription"];
        var target = id ? this.getAmpDoc().getElementById(id) : invocation.caller;
        userAssert(target, "amp-lightbox-gallery.open: element with id: %s not found", id);
        this.open(dev().assertElement(target), expandDescription);
      }
    }, {
      key: "openLightboxGallery_",
      value: function openLightboxGallery_(element, expandDescription) {
        var _this12 = this;
        var lightboxGroupId = element.getAttribute("lightbox") || "default";
        this.currentLightboxGroupId_ = lightboxGroupId;
        this.hasVerticalScrollbarWidth_ = getVerticalScrollbarWidth(this.win) > 0;
        return this.findOrInitializeLightbox_(lightboxGroupId).then(function() {
          return _this12.getViewport().enterLightboxMode();
        }).then(function() {
          return _this12.mutateElement(function() {
            toggle(_this12.element, true);
            setStyle(_this12.element, "opacity", 0);
            _this12.overlay_.removeAttribute("i-amphtml-lbg-fade");
          });
        }).then(function() {
          _this12.isActive_ = true;
          var owners = Services.ownersForDoc(_this12.element);
          owners.scheduleLayout(_this12.element, dev().assertElement(_this12.container_));
          _this12.doc_.documentElement.addEventListener("keydown", _this12.boundOnKeyDown_);
          _this12.carousel_.addEventListener("slideChange", _this12.boundSlideChangeHandler_);
          _this12.setupGestures_();
          _this12.setupEventListeners_();
          return _this12.carousel_.signals().whenSignal(CommonSignals.LOAD_END);
        }).then(function() {
          return _this12.openLightboxForElement_(element, expandDescription);
        }).then(function() {
          setStyle(_this12.element, "opacity", "");
          _this12.showOverlay_();
          triggerAnalyticsEvent(_this12.element, "lightboxOpened", dict({}));
        });
      }
    }, {
      key: "openLightboxForElement_",
      value: function openLightboxForElement_(element, expandDescription) {
        var _this13 = this;
        this.currentElemId_ = element.lightboxItemId;
        devAssert(this.carousel_).getImpl().then(function(carousel) {
          return carousel.goToSlide(_this13.currentElemId_);
        });
        this.updateDescriptionBox_(expandDescription);
        return this.enter_();
      }
    }, {
      key: "elementTypeCanBeAnimated_",
      value: function elementTypeCanBeAnimated_(element) {
        if (!element || !isLoaded(element)) {
          return false;
        }
        if (!ELIGIBLE_TAP_TAGS[element.tagName]) {
          return false;
        }
        var img = elementByTag(dev().assertElement(element), "img");
        if (!img) {
          return false;
        }
        return true;
      }
    }, {
      key: "shouldAnimateOut_",
      value: function shouldAnimateOut_() {
        var target = this.getCurrentElement_().sourceElement;
        return this.elementTypeCanBeAnimated_(target);
      }
    }, {
      key: "transitionImg_",
      value: function transitionImg_(sourceElement, enter) {
        var _this14 = this;
        return this.getCurrentElement_().imageViewer.getImpl().then(function(imageViewer) {
          var _ref = imageViewer.getImageBoxWithOffset() || {}, height = _ref.height, width = _ref.width;
          if (!width || !height) {
            return _this14.fade_(enter);
          }
          var lightboxImg = imageViewer.getImage();
          var sourceImg = childElementByTag(sourceElement, "img");
          return _this14.runImgTransition_(enter ? sourceImg : lightboxImg, enter ? lightboxImg : sourceImg, enter);
        });
      }
    }, {
      key: "getTransitionDurationFromElements_",
      value: function getTransitionDurationFromElements_(srcImg, targetImg) {
        var srcRect = srcImg.getBoundingClientRect();
        var destRect = targetImg.getBoundingClientRect();
        var viewportHeight = this.getViewport().getSize().height;
        var dy = Math.abs(destRect.top - srcRect.top);
        return this.getTransitionDuration_(Math.abs(dy), viewportHeight);
      }
    }, {
      key: "runImgTransition_",
      value: function runImgTransition_(srcImg, targetImg, enter) {
        var _this15 = this;
        var carousel = dev().assertElement(this.carousel_);
        var container = dev().assertElement(this.container_);
        var duration;
        var motionDuration;
        var imageAnimation;
        var measure = function measure2() {
          var srcCropEl = closestAncestorElementBySelector(srcImg, "amp-img") || srcImg;
          var targetCropEl = closestAncestorElementBySelector(targetImg, "amp-img") || targetImg;
          duration = _this15.getTransitionDurationFromElements_(srcImg, targetImg);
          motionDuration = MOTION_DURATION_RATIO * duration;
          try {
            imageAnimation = prepareImageAnimation({
              styleContainer: _this15.getAmpDoc().getHeadNode(),
              transitionContainer: _this15.getAmpDoc().getBody(),
              srcImg,
              srcCropRect: srcCropEl.getBoundingClientRect(),
              targetImg,
              targetCropRect: targetCropEl.getBoundingClientRect(),
              styles: {
                "animationDuration": motionDuration + "ms",
                "zIndex": 2147483642
              },
              keyframesNamespace: void 0,
              curve: TRANSITION_CURVE
            });
          } catch (e2) {
            reportError(e2);
          }
        };
        var mutate = function mutate2() {
          toggle(carousel, enter);
          setStyle(_this15.element, "opacity", "");
          setStyles(container, {
            animationName: enter ? "fadeIn" : "fadeOut",
            animationTimingFunction: "cubic-bezier(0.8, 0, 0.2, 1)",
            animationDuration: motionDuration + "ms",
            animationFillMode: "forwards"
          });
          setStyles(carousel, {
            animationName: "fadeIn",
            animationDelay: motionDuration - 0.01 + "ms",
            animationDuration: "0.01ms",
            animationFillMode: "forwards"
          });
          srcImg.classList.add("i-amphtml-ghost");
          targetImg.classList.add("i-amphtml-ghost");
          if (imageAnimation) {
            imageAnimation.applyAnimation();
          }
        };
        var cleanup = function cleanup2() {
          toggle(_this15.element, enter);
          setStyle(container, "animationName", "");
          setStyle(carousel, "animationName", "");
          srcImg.classList.remove("i-amphtml-ghost");
          targetImg.classList.remove("i-amphtml-ghost");
          if (imageAnimation) {
            imageAnimation.cleanupAnimation();
          }
        };
        return this.measureMutateElement(measure, mutate).then(function() {
          return delayAfterDeferringToEventLoop(_this15.win, duration);
        }).then(function() {
          return _this15.mutateElement(cleanup);
        });
      }
    }, {
      key: "transitionImgIn_",
      value: function transitionImgIn_(sourceElement) {
        return this.transitionImg_(sourceElement, true);
      }
    }, {
      key: "transitionImgOut_",
      value: function transitionImgOut_(sourceElement) {
        return this.transitionImg_(sourceElement, false);
      }
    }, {
      key: "fade_",
      value: function fade_(fadeIn) {
        var _this16 = this;
        return this.mutateElement(function() {
          if (fadeIn) {
            toggle(dev().assertElement(_this16.carousel_), true);
            toggle(_this16.element, true);
          }
          _this16.element.setAttribute("i-amphtml-lbg-fade", fadeIn ? "in" : "out");
        }).then(function() {
          return delayAfterDeferringToEventLoop(_this16.win, FADE_DURATION);
        }).then(function() {
          _this16.element.removeAttribute("i-amphtml-lbg-fade");
          if (!fadeIn) {
            toggle(dev().assertElement(_this16.carousel_), false);
            toggle(_this16.element, false);
          }
        });
      }
    }, {
      key: "enter_",
      value: function enter_() {
        var _this17 = this;
        var _this$getCurrentEleme2 = this.getCurrentElement_(), sourceElement = _this$getCurrentEleme2.sourceElement;
        if (!this.elementTypeCanBeAnimated_(sourceElement)) {
          return this.fade_(true);
        }
        return this.getCurrentElement_().imageViewer.signals().whenSignal(CommonSignals.LOAD_END).then(function() {
          return _this17.transitionImgIn_(sourceElement);
        });
      }
    }, {
      key: "exit_",
      value: function exit_() {
        var _this$getCurrentEleme3 = this.getCurrentElement_(), sourceElement = _this$getCurrentEleme3.sourceElement;
        if (!this.shouldAnimateOut_()) {
          return this.fade_(false);
        }
        return this.transitionImgOut_(sourceElement);
      }
    }, {
      key: "getTransitionDuration_",
      value: function getTransitionDuration_(dy, maxY, minDur, maxDur) {
        if (maxY === void 0) {
          maxY = MAX_DISTANCE_APPROXIMATION;
        }
        if (minDur === void 0) {
          minDur = MIN_TRANSITION_DURATION;
        }
        if (maxDur === void 0) {
          maxDur = MAX_TRANSITION_DURATION;
        }
        var distanceAdjustedDuration = Math.abs(dy) / maxY * maxDur;
        return clamp(distanceAdjustedDuration, minDur, maxDur);
      }
    }, {
      key: "getSourceElementParentCarousel_",
      value: function getSourceElementParentCarousel_(sourceElement) {
        return closestAncestorElementBySelector(sourceElement, 'amp-carousel[type="slides"], amp-base-carousel');
      }
    }, {
      key: "maybeSyncSourceCarousel_",
      value: function maybeSyncSourceCarousel_() {
        var target = this.getCurrentElement_().sourceElement;
        var parentCarousel = this.getSourceElementParentCarousel_(target);
        if (parentCarousel) {
          var allSlides = toArray(scopedQuerySelectorAll(parentCarousel, SLIDE_ITEM_SELECTOR));
          var targetSlide = dev().assertElement(closestAncestorElementBySelector(target, SLIDE_ITEM_SELECTOR));
          var targetSlideIndex = allSlides.indexOf(targetSlide);
          devAssert(parentCarousel).getImpl().then(function(carousel) {
            return carousel.goToSlide(targetSlideIndex);
          });
        }
      }
    }, {
      key: "close_",
      value: function close_() {
        var _this18 = this;
        if (!this.isActive_) {
          return resolvedPromise();
        }
        this.maybeSyncSourceCarousel_();
        this.isActive_ = false;
        this.cleanupEventListeners_();
        this.doc_.documentElement.removeEventListener("keydown", this.boundOnKeyDown_);
        this.carousel_.removeEventListener("slideChange", this.boundSlideChangeHandler_);
        var gestures = Gestures.get(dev().assertElement(this.carousel_));
        gestures.cleanup();
        this.lightboxCaption_.toggleOverflow(false);
        return this.mutateElement(function() {
          if (!_this18.hasVerticalScrollbarWidth_) {
            _this18.getViewport().leaveLightboxMode();
          }
          _this18.container_.removeAttribute("gallery-view");
          if (_this18.gallery_) {
            _this18.gallery_.classList.add("i-amphtml-ghost");
            _this18.gallery_ = null;
          }
        }).then(function() {
          return _this18.exit_();
        }).then(function() {
          if (_this18.hasVerticalScrollbarWidth_) {
            _this18.getViewport().leaveLightboxMode();
          }
          Services.ownersForDoc(_this18.element).schedulePause(_this18.element, dev().assertElement(_this18.container_));
          _this18.pauseLightboxChildren_();
          _this18.carousel_ = null;
          if (_this18.historyId_ != -1) {
            _this18.history_.pop(_this18.historyId_);
          }
        });
      }
    }, {
      key: "onKeyDown_",
      value: function onKeyDown_(event) {
        if (!this.isActive_) {
          return;
        }
        var key = event.key;
        switch (key) {
          case Keys.ESCAPE:
            this.close_();
            break;
          case Keys.LEFT_ARROW:
            this.maybeSlideCarousel_(-1);
            break;
          case Keys.RIGHT_ARROW:
            this.maybeSlideCarousel_(1);
            break;
          default:
        }
      }
    }, {
      key: "maybeSlideCarousel_",
      value: function maybeSlideCarousel_(direction) {
        var isGalleryView = this.container_.hasAttribute("gallery-view");
        if (isGalleryView) {
          return;
        }
        devAssert(this.carousel_).getImpl().then(function(carousel) {
          carousel.goCallback(direction, true, false);
        });
      }
    }, {
      key: "openGallery_",
      value: function openGallery_() {
        var _this19 = this;
        if (!this.gallery_) {
          this.findOrBuildGallery_();
        }
        this.lightboxCaption_.toggleOverflow(false);
        this.mutateElement(function() {
          _this19.container_.setAttribute("gallery-view", "");
          toggle(dev().assertElement(_this19.carousel_), false);
        });
        triggerAnalyticsEvent(this.element, "thumbnailsViewToggled", dict({}));
      }
    }, {
      key: "closeGallery_",
      value: function closeGallery_() {
        var _this20 = this;
        return this.mutateElement(function() {
          _this20.container_.removeAttribute("gallery-view");
          toggle(dev().assertElement(_this20.carousel_), true);
          _this20.updateDescriptionBox_();
        });
      }
    }, {
      key: "findOrBuildGallery_",
      value: function findOrBuildGallery_() {
        var _this21 = this;
        var group = this.currentLightboxGroupId_;
        this.gallery_ = this.element.querySelector(".i-amphtml-lbg-gallery[amp-lightbox-group=" + escapeCssSelectorIdent(group) + "]");
        if (this.gallery_) {
          this.gallery_.classList.remove("i-amphtml-ghost");
          this.updateVideoThumbnails_();
        } else {
          this.gallery_ = htmlFor(this.doc_)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose3(['\n      <div class="i-amphtml-lbg-gallery"></div>'])));
          this.gallery_.setAttribute("amp-lightbox-group", this.currentLightboxGroupId_);
          this.initializeThumbnails_();
          this.mutateElement(function() {
            _this21.container_.appendChild(_this21.gallery_);
          });
        }
      }
    }, {
      key: "updateVideoThumbnails_",
      value: function updateVideoThumbnails_() {
        var _this22 = this;
        var thumbnails = this.manager_.getThumbnails(this.currentLightboxGroupId_).map(function(thumbnail, index) {
          return _extends({
            index
          }, thumbnail);
        }).filter(function(thumbnail) {
          return VIDEO_TAGS[thumbnail.element.tagName];
        });
        this.mutateElement(function() {
          thumbnails.forEach(function(thumbnail) {
            thumbnail.timestampPromise.then(function(ts) {
              if (!ts || isNaN(ts)) {
                return;
              }
              var timestamp = secondsToTimestampString(ts);
              var thumbnailContainer = dev().assertElement(_this22.gallery_.childNodes[thumbnail.index]);
              var timestampDiv = childElementByTag(thumbnailContainer, "div");
              if (timestampDiv.childNodes.length > 1) {
                timestampDiv.removeChild(timestampDiv.childNodes[1]);
              }
              timestampDiv.appendChild(_this22.doc_.createTextNode(timestamp));
              timestampDiv.classList.add("i-amphtml-lbg-has-timestamp");
            });
          });
        });
      }
    }, {
      key: "initializeThumbnails_",
      value: function initializeThumbnails_() {
        var _this23 = this;
        var thumbnails = [];
        this.manager_.getThumbnails(this.currentLightboxGroupId_).forEach(function(thumbnail) {
          if (thumbnail.element.tagName == "AMP-AD") {
            return;
          }
          var thumbnailElement = _this23.createThumbnailElement_(thumbnail);
          thumbnails.push(thumbnailElement);
        });
        this.mutateElement(function() {
          thumbnails.forEach(function(thumbnailElement) {
            _this23.gallery_.appendChild(thumbnailElement);
          });
        });
      }
    }, {
      key: "handleThumbnailClick_",
      value: function handleThumbnailClick_(event, id) {
        var _this24 = this;
        event.stopPropagation();
        Promise.all([this.closeGallery_(), devAssert(this.carousel_).getImpl()]).then(function(values) {
          _this24.currentElemId_ = id;
          values[1].goToSlide(_this24.currentElemId_);
          _this24.updateDescriptionBox_();
        });
      }
    }, {
      key: "createThumbnailElement_",
      value: function createThumbnailElement_(thumbnailObj) {
        var _this25 = this;
        var element = htmlFor(this.doc_)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose3(['\n    <div class="i-amphtml-lbg-gallery-thumbnail">\n      <img class="i-amphtml-lbg-gallery-thumbnail-img"></img>\n    </div>'])));
        var imgElement = childElementByTag(element, "img");
        if (thumbnailObj.srcset) {
          imgElement.setAttribute("srcset", thumbnailObj.srcset.stringify());
        } else {
          imgElement.setAttribute("src", thumbnailObj.placeholderSrc);
        }
        element.appendChild(imgElement);
        if (VIDEO_TAGS[thumbnailObj.element.tagName]) {
          var timestampDiv = htmlFor(this.doc_)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose3(['\n      <div class="i-amphtml-lbg-thumbnail-timestamp-container">\n        <span class="i-amphtml-lbg-thumbnail-play-icon"></span>\n      <div>'])));
          thumbnailObj.timestampPromise.then(function(ts) {
            if (!ts || isNaN(ts)) {
              return;
            }
            var timestamp = secondsToTimestampString(ts);
            timestampDiv.appendChild(_this25.doc_.createTextNode(timestamp));
            timestampDiv.classList.add("i-amphtml-lbg-has-timestamp");
          });
          element.appendChild(timestampDiv);
        }
        element.addEventListener("click", function(e2) {
          _this25.handleThumbnailClick_(e2, thumbnailObj.element.lightboxItemId);
        });
        return element;
      }
    }]);
    return AmpLightboxGallery2;
  }(AMP.BaseElement);
  function installLightboxGallery(ampdoc) {
    return ampdoc.whenReady().then(function() {
      return ampdoc.getBody();
    }).then(function(body) {
      var existingGallery = elementByTag(ampdoc.getRootNode(), TAG2);
      if (!existingGallery) {
        var gallery = ampdoc.win.document.createElement(TAG2);
        gallery.setAttribute("layout", "nodisplay");
        gallery.setAttribute("id", DEFAULT_GALLERY_ID);
        body.appendChild(gallery);
      }
    });
  }
  function lightboxManagerForDoc(element) {
    return getElementServiceForDoc(element, "amp-lightbox-manager", "amp-lightbox-gallery");
  }
  AMP.extension(TAG2, "0.1", function(AMP2) {
    AMP2.registerElement(TAG2, AmpLightboxGallery, CSS2);
    AMP2.registerServiceForDoc("amp-lightbox-manager", LightboxManager);
    Services.extensionsFor(AMP2.win).addDocFactory(installLightboxGallery);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-lightbox-gallery-0.1.max.js.map
