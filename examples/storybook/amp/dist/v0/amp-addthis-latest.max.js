(self.AMP=self.AMP||[]).push({n:"amp-addthis",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // extensions/amp-addthis/0.1/constants.js
  var CONFIGURATION_EVENT = "addthis.amp.configuration";
  var SHARE_EVENT = "addthis.share";
  var ORIGIN = "https://s7.addthis.com";
  var API_SERVER = "https://m.addthis.com";
  var COOKIELESS_API_SERVER = "https://m.addthisedge.com";
  var SHARECOUNTER_SERVER = "https://api-public.addthis.com";
  var ICON_SIZE = "32";
  var ALT_TEXT = "AddThis Website Tools";
  var SHARE_CONFIG_KEYS = ["url", "title", "media", "description", "email_template", "email_vars", "passthrough", "url_transforms"];
  var AT_CONFIG_KEYS = ["services_exclude", "services_compact", "services_expanded", "services_custom", "ui_click", "ui_disable", "ui_delay", "ui_hover_direction", "ui_language", "ui_offset_top", "ui_offset_left", "ui_tabindex", "track_addressbar", "track_clickback", "ga_property", "ga_social"];
  var RE_ALPHA = /[A-Z]/gi;
  var RE_NONALPHA = /[^a-zA-Z]/g;
  var RE_WHITESPACE = /\s/g;

  // extensions/amp-addthis/0.1/addthis-utils/monitors/active-tools-monitor.js
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
  var RE_NUMDASH = /[0-9\-].*/;
  var ActiveToolsMonitor = /* @__PURE__ */ function() {
    function ActiveToolsMonitor2() {
      _classCallCheck(this, ActiveToolsMonitor2);
      this.activePcos_ = {};
    }
    _createClass(ActiveToolsMonitor2, [{
      key: "record",
      value: function record(widget) {
        var pco = (widget.id || widget.pco || "").replace(RE_NUMDASH, "");
        if (!pco || this.activePcos_[pco] || !RE_ALPHA.test(pco)) {
          return;
        }
        this.activePcos_[pco] = pco;
      }
    }, {
      key: "recordProductCode",
      value: function recordProductCode(productCode) {
        var pco = productCode;
        if (!pco || this.activePcos_[pco] || !RE_ALPHA.test(pco)) {
          return;
        }
        this.activePcos_[pco] = pco;
      }
    }, {
      key: "getActivePcos",
      value: function getActivePcos() {
        return Object.keys(this.activePcos_);
      }
    }]);
    return ActiveToolsMonitor2;
  }();

  // build/amp-addthis-0.1.css.js
  var CSS2 = 'amp-addthis[data-widget-type=messages]{position:fixed!important;width:100%!important;top:0}amp-addthis .i-amphtml-addthis-close{right:10px!important;top:10px!important;width:32px!important;height:32px!important;opacity:0.5!important;float:right!important;cursor:pointer!important;position:relative!important;z-index:1!important;background-color:transparent!important;border:none!important}amp-addthis .i-amphtml-addthis-close:hover{opacity:1!important}.i-amphtml-addthis-close:after,amp-addthis .i-amphtml-addthis-close:before{position:absolute;content:" ";height:20px;width:2px;background-color:#fff}amp-addthis .i-amphtml-addthis-close:before{transform:rotate(45deg)}amp-addthis .i-amphtml-addthis-close:after{transform:rotate(-45deg)}@media only screen and (max-width:979px){amp-addthis[data-widget-type=floating]{position:fixed!important;width:100%!important;height:50px;bottom:0}}@media only screen and (min-width:979px){amp-addthis[data-widget-type=floating]{position:fixed!important;width:70px!important;height:320px!important;top:200px}}\n/*# sourceURL=/extensions/amp-addthis/0.1/amp-addthis.css*/';

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

  // src/core/types/array.js
  function toArray(arrayLike) {
    return arrayLike ? Array.prototype.slice.call(arrayLike) : [];
  }
  var isArray = Array.isArray;

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

  // src/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }

  // extensions/amp-addthis/0.1/addthis-utils/monitors/click-monitor.js
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
  var ClickMonitor = /* @__PURE__ */ function() {
    function ClickMonitor2() {
      _classCallCheck2(this, ClickMonitor2);
      this.iframeClickMap_ = {};
      this.pageClicks_ = 0;
      this.lastSelection_ = null;
      this.win_ = null;
    }
    _createClass2(ClickMonitor2, [{
      key: "startForDoc",
      value: function startForDoc(ampDoc) {
        this.win_ = ampDoc.win;
        this.lastSelection_ = this.win_.document.activeElement;
        listen(this.win_, "blur", this.checkSelection_.bind(this));
        listen(this.win_, "click", this.onPageClick_.bind(this));
      }
    }, {
      key: "checkSelection_",
      value: function checkSelection_() {
        var activeElement = this.win_.document.activeElement;
        if (!activeElement) {
          return;
        }
        var changeOccurred = activeElement !== this.lastSelection_;
        if (activeElement.tagName === "IFRAME" && changeOccurred) {
          this.incrementFrameClick_(activeElement);
        }
        this.lastSelection_ = activeElement;
      }
    }, {
      key: "onPageClick_",
      value: function onPageClick_() {
        this.pageClicks_++;
        this.lastSelection_ = this.win_.document.activeElement;
      }
    }, {
      key: "incrementFrameClick_",
      value: function incrementFrameClick_(activeElement) {
        var trimSrc = activeElement.src.split("://").pop();
        if (!this.iframeClickMap_[trimSrc]) {
          this.iframeClickMap_[trimSrc] = 1;
        } else {
          this.iframeClickMap_[trimSrc]++;
        }
      }
    }, {
      key: "getPageClicks",
      value: function getPageClicks() {
        return this.pageClicks_;
      }
    }, {
      key: "getIframeClickString",
      value: function getIframeClickString() {
        var _this = this;
        return Object.keys(this.iframeClickMap_).map(function(key) {
          return key + "|" + _this.iframeClickMap_[key];
        }).join(",");
      }
    }]);
    return ClickMonitor2;
  }();

  // extensions/amp-addthis/0.1/addthis-utils/mode.js
  function getAddThisMode(_) {
    var _getAddThisModeObject = getAddThisModeObject(_), hasProductCode = _getAddThisModeObject.hasProductCode, hasPubId = _getAddThisModeObject.hasPubId, hasWidgetId = _getAddThisModeObject.hasWidgetId;
    if (hasPubId) {
      if (hasWidgetId && !hasProductCode) {
        return 1;
      } else if (!hasWidgetId && hasProductCode) {
        return 2;
      }
    } else if (!hasWidgetId && hasProductCode) {
      return 3;
    }
    return -1;
  }
  function getAddThisModeObject(mode) {
    var productCode = mode.productCode, pubId = mode.pubId, widgetId = mode.widgetId;
    var hasPubId = isPubId(pubId);
    var hasWidgetId = isWidgetId(widgetId);
    var hasProductCode = typeof productCode === "string" && (productCode === "shin" || productCode === "shfs");
    return {
      hasPubId,
      hasWidgetId,
      hasProductCode
    };
  }
  function isPubId(candidate) {
    return typeof candidate === "string" && candidate.length > 0;
  }
  function isWidgetId(candidate) {
    return typeof candidate === "string" && candidate.length === 4;
  }
  function isProductCode(candidate) {
    return candidate === "shin" || candidate === "shfs";
  }

  // extensions/amp-addthis/0.1/config-manager.js
  function _classCallCheck3(instance, Constructor) {
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
  var RequestStatus = {
    NOT_REQUESTED: 0,
    REQUESTED: 1,
    COMPLETED: 2
  };
  var ConfigManager = /* @__PURE__ */ function() {
    function ConfigManager2() {
      _classCallCheck3(this, ConfigManager2);
      this.dataForPubId_ = {};
      this.configProviderIframes_ = [];
      this.activeToolsMonitor_ = null;
    }
    _createClass3(ConfigManager2, [{
      key: "receiveConfiguration",
      value: function receiveConfiguration(data) {
        var _this = this;
        var config = data["config"];
        var pubId = data["pubId"];
        var source = data["source"];
        var isProviderIframe = this.configProviderIframes_.some(function(iframe) {
          return iframe.contentWindow === source;
        });
        if (!isProviderIframe) {
          return;
        }
        var pubData = this.dataForPubId_[pubId];
        pubData.config = config;
        pubData.requestStatus = RequestStatus.COMPLETED;
        var iframeData = pubData.iframeData;
        iframeData.forEach(function(iframeDatum) {
          var atConfig = iframeDatum.atConfig, containerClassName = iframeDatum.containerClassName, iframe = iframeDatum.iframe, productCode = iframeDatum.productCode, shareConfig = iframeDatum.shareConfig, widgetId = iframeDatum.widgetId;
          _this.sendConfiguration_({
            iframe,
            widgetId,
            pubId,
            shareConfig,
            atConfig,
            productCode,
            containerClassName
          });
        });
      }
    }, {
      key: "sendConfiguration_",
      value: function sendConfiguration_(input) {
        var atConfig = input.atConfig, containerClassName = input.containerClassName, iframe = input.iframe, productCode = input.productCode, pubId = input.pubId, shareConfig = input.shareConfig, widgetId = input.widgetId;
        var pubData = this.dataForPubId_[pubId];
        var dashboardConfig = pubData.config, configRequestStatus = pubData.requestStatus;
        var jsonToSend = dict({
          "event": CONFIGURATION_EVENT,
          "shareConfig": shareConfig,
          "atConfig": atConfig,
          "pubId": pubId,
          "widgetId": widgetId,
          "productCode": productCode,
          "containerClassName": containerClassName,
          "configRequestStatus": configRequestStatus,
          "dashboardConfig": dashboardConfig
        });
        if (dashboardConfig && dashboardConfig.widgets && Object.keys(dashboardConfig.widgets).length > 0) {
          var mode = getAddThisMode({
            pubId,
            widgetId,
            productCode
          });
          switch (mode) {
            case 1:
              if (widgetId && dashboardConfig.widgets[widgetId]) {
                this.activeToolsMonitor_.record(dashboardConfig.widgets[widgetId]);
              }
              break;
            case 2:
              if (productCode) {
                this.activeToolsMonitor_.recordProductCode(productCode);
              }
              break;
            case 3:
              if (productCode) {
                this.activeToolsMonitor_.recordProductCode(productCode);
              }
              return;
            default:
              return;
          }
        }
        iframe.contentWindow.postMessage(JSON.stringify(jsonToSend), ORIGIN);
        if (configRequestStatus === RequestStatus.NOT_REQUESTED) {
          this.configProviderIframes_.push(iframe);
          pubData.requestStatus = RequestStatus.REQUESTED;
        }
      }
    }, {
      key: "register",
      value: function register(config) {
        var _this2 = this;
        var activeToolsMonitor2 = config.activeToolsMonitor, atConfig = config.atConfig, containerClassName = config.containerClassName, iframe = config.iframe, iframeLoadPromise = config.iframeLoadPromise, productCode = config.productCode, pubId = config.pubId, shareConfig = config.shareConfig, widgetId = config.widgetId;
        if (!this.activeToolsMonitor_) {
          this.activeToolsMonitor_ = activeToolsMonitor2;
        }
        if (!this.dataForPubId_[pubId]) {
          this.dataForPubId_[pubId] = {};
        }
        var pubData = this.dataForPubId_[pubId];
        if (!pubData.requestStatus) {
          pubData.requestStatus = RequestStatus.NOT_REQUESTED;
        }
        if (!pubData.iframeData) {
          pubData.iframeData = [];
        }
        pubData.iframeData.push({
          iframe,
          shareConfig,
          atConfig,
          widgetId,
          productCode,
          containerClassName
        });
        iframeLoadPromise.then(function() {
          return _this2.sendConfiguration_({
            iframe,
            pubId,
            widgetId,
            shareConfig,
            atConfig,
            productCode,
            containerClassName
          });
        });
      }
    }, {
      key: "unregister",
      value: function unregister(param) {
        var iframe = param.iframe, pubId = param.pubId;
        this.configProviderIframes_ = this.configProviderIframes_.filter(function(providerFrame) {
          return providerFrame !== iframe;
        });
        var pubData = this.dataForPubId_[pubId] || {};
        if (pubData.iframeData) {
          pubData.iframeData = pubData.iframeData.filter(function(iframeDatum) {
            return iframeDatum.iframe !== iframe;
          });
        }
      }
    }]);
    return ConfigManager2;
  }();
  ConfigManager.PubIdData;
  ConfigManager.IframeDatum;

  // extensions/amp-addthis/0.1/addthis-utils/monitors/dwell-monitor.js
  function _classCallCheck4(instance, Constructor) {
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
  var DwellMonitor = /* @__PURE__ */ function() {
    function DwellMonitor2() {
      _classCallCheck4(this, DwellMonitor2);
      this.dwellTime_ = 0;
      this.ampdoc_ = null;
    }
    _createClass4(DwellMonitor2, [{
      key: "startForDoc",
      value: function startForDoc(ampDoc) {
        this.ampdoc_ = ampDoc;
        this.ampdoc_.onVisibilityChanged(this.listener.bind(this));
      }
    }, {
      key: "listener",
      value: function listener() {
        if (!this.ampdoc_.isVisible()) {
          var lastVisibleTime = this.ampdoc_.getLastVisibleTime() || 0;
          this.dwellTime_ += Date.now() - lastVisibleTime;
        }
      }
    }, {
      key: "getDwellTime",
      value: function getDwellTime() {
        return this.dwellTime_;
      }
    }]);
    return DwellMonitor2;
  }();

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

  // extensions/amp-addthis/0.1/post-message-dispatcher.js
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
  function _classCallCheck5(instance, Constructor) {
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
  var PostMessageDispatcher = /* @__PURE__ */ function() {
    function PostMessageDispatcher2() {
      _classCallCheck5(this, PostMessageDispatcher2);
      this.listeners_ = {};
    }
    _createClass5(PostMessageDispatcher2, [{
      key: "on",
      value: function on(eventType, listener) {
        if (!this.listeners_[eventType]) {
          this.listeners_[eventType] = [];
        }
        this.listeners_[eventType].push(listener);
      }
    }, {
      key: "emit_",
      value: function emit_(eventType, eventData) {
        if (!this.listeners_[eventType]) {
          return;
        }
        this.listeners_[eventType].forEach(function(listener) {
          return listener(eventData);
        });
      }
    }, {
      key: "getMessageData_",
      value: function getMessageData_(event) {
        var data = getData(event);
        if (isObject(data)) {
          return data;
        }
        if (typeof data === "string" && data.startsWith("{")) {
          return tryParseJson(data);
        }
        return void 0;
      }
    }, {
      key: "handleAddThisMessage",
      value: function handleAddThisMessage(event) {
        if (event.origin !== ORIGIN || !getData(event)) {
          return;
        }
        var data = this.getMessageData_(event) || {};
        switch (data["event"]) {
          case CONFIGURATION_EVENT: {
            this.emit_(CONFIGURATION_EVENT, _extends({}, data, {
              "source": event.source
            }));
            break;
          }
          case SHARE_EVENT: {
            this.emit_(SHARE_EVENT, data);
            break;
          }
        }
      }
    }]);
    return PostMessageDispatcher2;
  }();

  // src/core/data-structures/promise.js
  function _classCallCheck6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Deferred = function Deferred2() {
    var _this = this;
    _classCallCheck6(this, Deferred2);
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

  // extensions/amp-addthis/0.1/addthis-utils/monitors/scroll-monitor.js
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
  var ScrollMonitor = /* @__PURE__ */ function() {
    function ScrollMonitor2() {
      _classCallCheck8(this, ScrollMonitor2);
      this.viewport_ = null;
      this.initialViewHeight_ = 0;
      this.maxScrollTop_ = 0;
      this.maxScrollPlusHeight_ = 0;
    }
    _createClass7(ScrollMonitor2, [{
      key: "startForDoc",
      value: function startForDoc(ampDoc) {
        this.viewport_ = Services.viewportForDoc(ampDoc);
        this.initialViewHeight_ = this.viewport_.getHeight() || 0;
        this.maxScrollTop_ = this.viewport_.getScrollTop() || 0;
        this.maxScrollPlusHeight_ = this.maxScrollTop_ + this.initialViewHeight_;
        this.viewport_.onScroll(this.listener.bind(this));
      }
    }, {
      key: "listener",
      value: function listener() {
        var scrollTop = this.viewport_.getScrollTop() || 0;
        this.maxScrollTop_ = Math.max(this.maxScrollTop_, scrollTop);
        this.maxScrollPlusHeight_ = Math.max(this.maxScrollPlusHeight_, (this.viewport_.getHeight() || 0) + scrollTop);
      }
    }, {
      key: "getInitialViewHeight",
      value: function getInitialViewHeight() {
        return this.initialViewHeight_;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.maxScrollPlusHeight_ - this.maxScrollTop_;
      }
    }]);
    return ScrollMonitor2;
  }();

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck9(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass8(LruCache2, [{
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

  // extensions/amp-addthis/0.1/addthis-utils/cuid.js
  var RE_CUID = /^[0-9a-f]{16}$/;
  var MAX_HEX = 4294967295;
  var CUID_SESSION_TIME = Date.now();
  var getDateFromCuid = function getDateFromCuid2(cuid) {
    var date = new Date();
    try {
      date = new Date(parseInt(cuid.substr(0, 8), 16) * 1e3);
    } catch (e) {
    }
    return date;
  };
  var isCuidInFuture = function isCuidInFuture2(cuid) {
    var date = getDateFromCuid(cuid);
    date.setDate(date.getDate() - 1);
    return isDateInFuture(date);
  };
  var isDateInFuture = function isDateInFuture2(date) {
    var now = new Date();
    if (date.getFullYear() < now.getFullYear()) {
      return false;
    }
    var yearIsLater = date.getFullYear() > now.getFullYear();
    var yearIsSame = date.getFullYear() === now.getFullYear();
    var monthIsLater = date.getMonth() > now.getMonth();
    var monthIsSame = date.getMonth() === now.getMonth();
    var dateIsLater = date.getDate() > now.getDate();
    return yearIsLater || yearIsSame && monthIsLater || yearIsSame && monthIsSame && dateIsLater;
  };
  var isValidCUID = function isValidCUID2(cuid) {
    return Boolean(cuid && cuid.match(RE_CUID) && !isCuidInFuture(cuid));
  };
  var createCUID = function createCUID2() {
    return (CUID_SESSION_TIME / 1e3 & MAX_HEX).toString(16) + ("00000000" + Math.floor(Math.random() * (MAX_HEX + 1)).toString(16)).slice(-8);
  };

  // extensions/amp-addthis/0.1/addthis-utils/session.js
  var sessionId = createCUID();
  var getSessionId = function getSessionId2() {
    return sessionId;
  };

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

  // extensions/amp-addthis/0.1/addthis-utils/pixel.js
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
  var RE_IFRAME = /#iframe$/;
  var pixelatorFrameTitle = "Pxltr Frame";
  var groupPixelsByTime = function groupPixelsByTime2(pixelList) {
    var cleanedPixels = pixelList.map(function(pixel) {
      var delay = pixel.delay;
      return _extends2({}, pixel, {
        delay: Array.isArray(delay) && delay.length ? delay : [0]
      });
    });
    var delayMap = cleanedPixels.map(function(pixel) {
      var delays = pixel.delay;
      return delays.map(function(delay) {
        return {
          delay,
          pixels: [pixel]
        };
      });
    }).reduce(function(a2, b) {
      return a2.concat(b);
    }, []).reduce(function(currentDelayMap, curDelay) {
      var delay = curDelay.delay, pixels = curDelay.pixels;
      if (!currentDelayMap[delay]) {
        currentDelayMap[delay] = [];
      }
      currentDelayMap[delay] = currentDelayMap[delay].concat(pixels);
      return currentDelayMap;
    }, {});
    return Object.keys(delayMap).map(function(delay) {
      return {
        delay: Number(delay),
        pixels: delayMap[delay]
      };
    });
  };
  var pixelDrop = function pixelDrop2(url, ampDoc) {
    var doc = ampDoc.win.document;
    var ampPixel = createElementWithAttributes(doc, "amp-pixel", dict({
      "layout": "nodisplay",
      "referrerpolicy": "no-referrer",
      "src": url
    }));
    doc.body.appendChild(ampPixel);
  };
  var getIframeName = function getIframeName2(url) {
    return parseUrlDeprecated(url).host.split(".").concat(pixelatorFrameTitle.toLowerCase().replace(/\s/, "_"));
  };
  var iframeDrop = function iframeDrop2(url, ampDoc, data) {
    var name = data.name, title = data.title;
    var doc = ampDoc.win.document;
    var iframe = createElementWithAttributes(doc, "iframe", dict({
      "frameborder": 0,
      "width": 0,
      "height": 0,
      "name": name,
      "title": title,
      "src": url
    }));
    toggle(iframe, false);
    setStyles(iframe, {
      position: "absolute",
      clip: "rect(0px 0px 0px 0px)"
    });
    doc.body.appendChild(iframe);
  };
  var dropPixelatorPixel = function dropPixelatorPixel2(url, ampDoc) {
    var requiresIframe = RE_IFRAME.test(url);
    if (url.indexOf("//") === -1) {
      return;
    }
    if (requiresIframe) {
      var name = getIframeName(url);
      return iframeDrop(url, ampDoc, {
        name,
        title: pixelatorFrameTitle
      });
    }
    return pixelDrop(url, ampDoc);
  };
  var dropPixelGroups = function dropPixelGroups2(pixels, options) {
    var ampDoc = options.ampDoc, sid = options.sid;
    var pixelGroups = groupPixelsByTime(pixels);
    pixelGroups.forEach(function(pixelGroup) {
      var delay = pixelGroup.delay, pixels2 = pixelGroup.pixels;
      setTimeout(function() {
        var pids = pixels2.map(function(pixel) {
          dropPixelatorPixel(pixel.url, ampDoc);
          return pixel.id;
        });
        var data = dict({
          "delay": "" + delay,
          "ids": pids.join("-"),
          "sid": sid
        });
        var url = addParamsToUrl(COOKIELESS_API_SERVER + "/live/prender", data);
        if (ampDoc.win.navigator.sendBeacon) {
          ampDoc.win.navigator.sendBeacon(url, "{}");
        } else {
          pixelDrop(url, ampDoc);
        }
      }, delay * 1e3);
    });
  };
  function getJsonObject_(object) {
    var params = dict();
    if (object === void 0 || object === null) {
      return params;
    }
    var stringifiedObject = typeof object === "string" ? object : JSON.stringify(object);
    try {
      var parsedObject = parseJson(stringifiedObject);
      if (isObject(parsedObject)) {
        for (var key in parsedObject) {
          params[key] = parsedObject[key];
        }
      }
    } catch (error) {
    }
    return params;
  }
  var callPixelEndpoint = function callPixelEndpoint2(event) {
    var ampDoc = event.ampDoc, endpoint = event.endpoint;
    var eventData = getJsonObject_(getData(event));
    var url = addParamsToUrl(endpoint, eventData);
    Services.xhrFor(ampDoc.win).fetchJson(url, {
      mode: "cors",
      method: "GET",
      ampCors: false,
      credentials: "include"
    }).then(function(res) {
      return res.json();
    }).then(function(json) {
      var _json$pixels = json.pixels, pixels = _json$pixels === void 0 ? [] : _json$pixels;
      if (pixels.length > 0) {
        dropPixelGroups(pixels, {
          sid: eventData["sid"],
          ampDoc
        });
      }
    }, function() {
    });
  };

  // extensions/amp-addthis/0.1/addthis-utils/eng.js
  var getEngData = function getEngData2(params) {
    var ampDoc = params.ampDoc, loc = params.loc, monitors = params.monitors, pubId = params.pubId;
    var activeToolsMonitor2 = monitors.activeToolsMonitor, clickMonitor2 = monitors.clickMonitor, dwellMonitor2 = monitors.dwellMonitor, scrollMonitor2 = monitors.scrollMonitor;
    var hash = loc.hash, host = loc.host, pathname = loc.pathname;
    var viewport = Services.viewportForDoc(ampDoc);
    return {
      al: activeToolsMonitor2.getActivePcos().join(",") || void 0,
      amp: 1,
      dc: 1,
      dp: host,
      dt: dwellMonitor2.getDwellTime(),
      fp: pathname.replace(hash, ""),
      ict: clickMonitor2.getIframeClickString(),
      ivh: scrollMonitor2.getInitialViewHeight(),
      pct: clickMonitor2.getPageClicks(),
      pfm: ampDoc.win.navigator.sendBeacon ? 0 : 1,
      ph: viewport.getHeight(),
      pub: pubId,
      sh: scrollMonitor2.getScrollHeight(),
      sid: getSessionId()
    };
  };
  var callEng = function callEng2(props) {
    var object = getEngData(props);
    var data = dict({
      "al": object.al,
      "amp": object.amp,
      "dc": object.dc,
      "dp": object.dp,
      "dt": object.dt,
      "fp": object.fp,
      "ict": object.ict,
      "ivh": object.ivh,
      "pct": object.pct,
      "pfm": object.pfm,
      "ph": object.ph,
      "pub": object.pub,
      "sh": object.sh,
      "sid": object.sid
    });
    var url = addParamsToUrl(API_SERVER + "/live/red_lojson/100eng.json", data);
    var ampDoc = props.ampDoc;
    if (ampDoc.win.navigator.sendBeacon) {
      ampDoc.win.navigator.sendBeacon(url, "{}");
    } else {
      pixelDrop(url, ampDoc);
    }
  };

  // extensions/amp-addthis/0.1/addthis-utils/meta.js
  var getMetaElements = function getMetaElements2(doc) {
    return doc.head.querySelectorAll("meta");
  };
  var getDetailsForMeta = function getDetailsForMeta2(meta) {
    var name = meta.getAttribute("property") || meta.name || "";
    var lowerName = name.toLowerCase();
    var content = meta.content || "";
    return {
      name: lowerName,
      content
    };
  };
  var getOgImage = function getOgImage2(doc) {
    var ogImage = doc.head.querySelector('meta[property="og:image"]');
    if (ogImage) {
      return ogImage.content;
    }
    return "";
  };

  // extensions/amp-addthis/0.1/addthis-utils/rot13.js
  var CHAR_Z_LOWER = 122;
  var CHAR_Z_UPPER = 90;
  var rot13 = function rot132(input) {
    return input.replace(RE_ALPHA, function(match) {
      var code = match.charCodeAt(0);
      var zChar = code <= CHAR_Z_UPPER ? CHAR_Z_UPPER : CHAR_Z_LOWER;
      return String.fromCharCode(zChar >= code + 13 ? code + 13 : code - 13);
    });
  };
  var rot13Array = function rot13Array2(input) {
    return input.reduce(function(rot13Map, str) {
      rot13Map[rot13(str)] = 1;
      return rot13Map;
    }, {});
  };

  // extensions/amp-addthis/0.1/addthis-utils/classify.js
  var MAX_KEYWORD_LENGTH = 200;
  var PORN_BIT = 1;
  var REFERRER_BITS = {
    DIRECT: 0,
    SEARCH: 1,
    ON_DOMAIN: 2,
    OFF_DOMAIN: 4
  };
  var RE_SEARCH_TERMS = /^(?:q|search|bs|wd|p|kw|keyword|query|qry|querytext|text|searchcriteria|searchstring|searchtext|sp_q)=(.*)/i;
  var RE_SEARCH_REFERRER = /ws\/results\/(web|images|video|news)/;
  var RE_SEARCH_GOOGLE = /google.*\/(search|url|aclk|m\?)/;
  var RE_SEARCH_AOL = /aol.*\/aol/;
  var com = ".com/";
  var org = ".org/";
  var pornHash = rot13Array(["cbea", "cbeab", "kkk", "zvys", "gvgf", "shpxf", "chfflyvcf", "pernzcvr", "svfgvat", "wvmm", "fcybbtr", "flovna"]);
  var strictPornHash = rot13Array(["phz"]);
  var classifyString = function classifyString2(keywordString, nonStrictMatch) {
    if (keywordString === void 0) {
      keywordString = "";
    }
    if (nonStrictMatch === void 0) {
      nonStrictMatch = false;
    }
    var classification = 0;
    var keywords = keywordString.toLowerCase().split(RE_NONALPHA);
    for (var i = 0; i < keywords.length; i++) {
      var keyword = keywords[i];
      if (pornHash[keyword] || !nonStrictMatch && strictPornHash[keyword]) {
        classification |= PORN_BIT;
        break;
      }
    }
    return classification;
  };
  var classifyRating = function classifyRating2(rating) {
    if (rating === void 0) {
      rating = "";
    }
    var classification = 0;
    rating = rating.toLowerCase().replace(RE_WHITESPACE, "");
    if (rating === "mature" || rating === "adult" || rating === "rta-5042-1996-1400-1577-rta") {
      classification |= PORN_BIT;
    }
    return classification;
  };
  var extractKeywordsFromContent = function extractKeywordsFromContent2(content) {
    var keywords = [];
    var contentSplit = content.split(",");
    var keywordsSize = 0;
    for (var i = 0; i < contentSplit.length; i++) {
      var keyword = (contentSplit[i] || "").trim();
      if (!keyword) {
        continue;
      }
      if (keyword.length + keywordsSize + 1 >= MAX_KEYWORD_LENGTH) {
        break;
      }
      keywords.push(keyword);
      keywordsSize += keyword.length + 1;
    }
    return keywords;
  };
  var getSearchString = function getSearchString2(url) {
    var terms = url.split("?").pop().toLowerCase().split("&");
    var matches2;
    for (var i = 0; i < terms.length; i++) {
      matches2 = RE_SEARCH_TERMS.exec(terms[i]);
      if (matches2) {
        return matches2[1];
      }
    }
    return void 0;
  };
  var isSearchUrl = function isSearchUrl2(url) {
    if (url === void 0) {
      url = "";
    }
    var lowerUrl = url.toLowerCase();
    if (lowerUrl.match(RE_SEARCH_REFERRER)) {
      return true;
    }
    if (getSearchString(url) === void 0) {
      return false;
    }
    return lowerUrl.indexOf("addthis") === -1 && (RE_SEARCH_GOOGLE.test(lowerUrl) || RE_SEARCH_AOL.test(lowerUrl) || lowerUrl.indexOf("/pagead/aclk?") > -1 || lowerUrl.indexOf(com + "url") > -1 || lowerUrl.indexOf(com + "l.php") > -1 || lowerUrl.indexOf("/search?") > -1 || lowerUrl.indexOf("/search/?") > -1 || lowerUrl.indexOf("search?") > -1 || lowerUrl.indexOf("yandex.ru/clck/jsredir?") > -1 || lowerUrl.indexOf(com + "search") > -1 || lowerUrl.indexOf(org + "search") > -1 || lowerUrl.indexOf("/search.html?") > -1 || lowerUrl.indexOf("search/results.") > -1 || lowerUrl.indexOf(com + "s?bs") > -1 || lowerUrl.indexOf(com + "s?wd") > -1 || lowerUrl.indexOf(com + "mb?search") > -1 || lowerUrl.indexOf(com + "mvc/search") > -1 || lowerUrl.indexOf(com + "web") > -1 || lowerUrl.indexOf("hotbot" + com) > -1);
  };
  var classifyPage = function classifyPage2(pageInfo, metaElements) {
    var bitmask = classifyString(pageInfo.title) | classifyString(pageInfo.hostname, true);
    metaElements.forEach(function(metaElement) {
      var _getDetailsForMeta = getDetailsForMeta(metaElement), content = _getDetailsForMeta.content, name = _getDetailsForMeta.name;
      if (name === "description" || name === "keywords") {
        bitmask |= classifyString(content);
      }
      if (name === "rating") {
        bitmask |= classifyRating(content);
      }
    });
    return bitmask;
  };
  var classifyReferrer = function classifyReferrer2(referrerString, parsedReferrer, parsedHref) {
    var bitmask = REFERRER_BITS.DIRECT;
    if (referrerString && parsedReferrer) {
      if (parsedReferrer.host === parsedHref.host) {
        bitmask |= REFERRER_BITS.ON_DOMAIN;
      } else {
        bitmask |= REFERRER_BITS.OFF_DOMAIN;
      }
      if (isSearchUrl(referrerString)) {
        bitmask |= REFERRER_BITS.SEARCH;
      }
    }
    return bitmask;
  };
  var isProductPage = function isProductPage2(doc, metaElements) {
    if (doc.getElementById("product") || (doc.getElementsByClassName("product") || []).length > 0 || doc.getElementById("productDescription") || doc.getElementById("page-product") || doc.getElementById("vm_cart_products") || window["Virtuemart"]) {
      return true;
    }
    var ogTags = metaElements.reduce(function(tags, metaElement) {
      var _getDetailsForMeta2 = getDetailsForMeta(metaElement), content = _getDetailsForMeta2.content, name = _getDetailsForMeta2.name;
      if (name.startsWith("og:")) {
        var ogProperty = name.split(":").pop();
        tags[ogProperty] = content;
      }
      return tags;
    }, {});
    return ogTags.type === "product";
  };
  var getKeywordsString = function getKeywordsString2(metaElements) {
    var keywords = metaElements.filter(function(meta) {
      return getDetailsForMeta(meta).name.toLowerCase() === "keywords";
    }).map(function(meta) {
      return extractKeywordsFromContent(getDetailsForMeta(meta).content);
    }).reduce(function(kws, subKeywords) {
      return kws.concat(subKeywords);
    }, []);
    return keywords.join(",");
  };

  // extensions/amp-addthis/0.1/addthis-utils/fragment.js
  var RE_ADDTHIS_FRAGMENT = /^\.[a-z0-9\-_]{11}(\.[a-z0-9_]+)?$/i;
  var getModernFragment = function getModernFragment2(url) {
    var frag = url.split("#").pop();
    frag = frag.split(";").shift();
    if (RE_ADDTHIS_FRAGMENT.test(frag)) {
      return frag;
    } else {
      return void 0;
    }
  };
  var isAddthisFragment = function isAddthisFragment2(url) {
    if (getModernFragment(url)) {
      return true;
    } else {
      var frag = url.split("#").pop();
      if (isValidCUID(frag) || url.indexOf("#at_pco=") > -1) {
        return true;
      }
    }
    return false;
  };
  var clearOurFragment = function clearOurFragment2(url) {
    if (isAddthisFragment(url)) {
      return url.split("#").shift();
    }
    return url;
  };
  var getFragmentId = function getFragmentId2(url) {
    var fragment = getModernFragment(url);
    if (fragment) {
      return fragment.split(".").slice(1).shift();
    } else {
      return void 0;
    }
  };
  var getServiceFromUrlFragment = function getServiceFromUrlFragment2(url) {
    var fragment = getModernFragment(url);
    if (fragment) {
      return fragment.split(".").slice(2).shift();
    } else {
      return void 0;
    }
  };

  // extensions/amp-addthis/0.1/addthis-utils/lojson.js
  var VIEW_EVENT_CHANNEL = 100;
  var nonTrackedDomainMatcher = /\.gov|\.mil/;
  function getLojsonData(jsonData) {
    var ampDoc = jsonData.ampDoc, atConfig = jsonData.atConfig, loc = jsonData.loc, pubId = jsonData.pubId, referrer = jsonData.referrer, title = jsonData.title;
    var hash = loc.hash, host = loc.host, hostname = loc.hostname, href = loc.href, pathname = loc.pathname, port = loc.port, protocol = loc.protocol, search = loc.search;
    var pageInfo = {
      du: href.split("#").shift(),
      hostname,
      href,
      referrer,
      search,
      pathname,
      title,
      hash,
      protocol,
      port
    };
    var parsedReferrer = referrer ? parseUrlDeprecated(referrer) : {};
    var langParts = atConfig["ui_language"].split("-");
    var langWithoutLocale = langParts[0];
    var locale = langParts.slice(1);
    var service = getServiceFromUrlFragment(pageInfo.du);
    var win = ampDoc.win;
    var metaElements = toArray(getMetaElements(win.document));
    var isDNTEnabled = win.navigator.doNotTrack && win.navigator.doNotTrack !== "unspecified" && win.navigator.doNotTrack !== "no" && win.navigator.doNotTrack !== "0";
    return dict({
      "amp": 1,
      "bl": 0 | (atConfig["use_cookies"] !== false ? 1 : 0) | (atConfig["track_textcopy"] === true ? 2 : 0) | (atConfig["track_addressbar"] === true ? 4 : 0),
      "cb": classifyPage(pageInfo, metaElements),
      "colc": Date.now(),
      "ct": atConfig["track_clickback"] !== false && atConfig["track_linkback"] !== false ? 1 : 0,
      "dc": 1,
      "dp": host,
      "dr": host === parsedReferrer.host ? void 0 : parsedReferrer.host,
      "fcu": service ? "" : getFragmentId(pageInfo.du),
      "fp": parseUrlDeprecated(clearOurFragment(pageInfo.du)).pathname,
      "fr": parsedReferrer.pathname || "",
      "gen": VIEW_EVENT_CHANNEL,
      "ln": langWithoutLocale,
      "lnlc": locale,
      "mk": getKeywordsString(metaElements),
      "of": isDNTEnabled ? 4 : nonTrackedDomainMatcher.test(hostname) ? 1 : 0,
      "pd": isProductPage(win.document, metaElements) ? 1 : 0,
      "pub": pubId,
      "rb": classifyReferrer(referrer, parsedReferrer, parseUrlDeprecated(pageInfo.du)),
      "sid": getSessionId(),
      "skipb": 1,
      "sr": service
    });
  }
  function callLojson(props) {
    var data = getLojsonData(props);
    var endpoint = API_SERVER + "/live/red_lojson/300lo.json";
    callPixelEndpoint({
      ampDoc: props.ampDoc,
      endpoint,
      data
    });
  }

  // extensions/amp-addthis/0.1/addthis-utils/pjson.js
  var SHARE = 300;
  var getPjsonData = function getPjsonData2(pjson) {
    var ampDoc = pjson.ampDoc, data = pjson.data, loc = pjson.loc, pubId = pjson.pubId, referrer = pjson.referrer, title = pjson.title;
    var hash = loc.hash, hostname = loc.hostname, href = loc.href, pathname = loc.pathname, port = loc.port, protocol = loc.protocol, search = loc.search;
    var pageInfo = {
      du: href.split("#").shift(),
      hostname,
      href,
      referrer,
      search,
      pathname,
      title,
      hash,
      protocol,
      port
    };
    var parsedReferrer = referrer ? parseUrlDeprecated(referrer) : {};
    var win = ampDoc.win;
    var metaElements = toArray(getMetaElements(win.document));
    return {
      amp: 1,
      cb: classifyPage(pageInfo, metaElements),
      dc: 1,
      dest: data.service,
      gen: SHARE,
      mk: getKeywordsString(metaElements),
      pub: pubId,
      rb: classifyReferrer(referrer, parsedReferrer, parseUrlDeprecated(pageInfo.du)),
      sid: getSessionId(),
      url: data.url
    };
  };
  var callPjson = function callPjson2(props) {
    var data = getPjsonData(props);
    var endpoint = API_SERVER + "/live/red_pjson";
    callPixelEndpoint({
      ampDoc: props.ampDoc,
      endpoint,
      data
    });
  };

  // extensions/amp-addthis/0.1/addthis-utils/get-widget-id-overloaded-with-json-for-anonymous-mode.js
  var overrideKeys = ["backgroundColor", "borderRadius", "counterColor", "counts", "countsFontSize", "desktopPosition", "elements", "hideDevice", "hideEmailSharingConfirmation", "hideLabel", "iconColor", "label", "mobilePosition", "numPreferredServices", "offset", "originalServices", "postShareFollowMsg", "postShareRecommendedMsg", "postShareTitle", "responsive", "shareCountThreshold", "size", "style", "textColor", "thankyou", "titleFontSize", "__hideOnHomepage", "originalServices", "services"];
  function getWidgetOverload(self2) {
    var override = dict({});
    overrideKeys.forEach(function(item) {
      var data = self2.element.getAttribute("data-attr-" + item);
      if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
        override[String(item)] = data;
      }
    });
    var overrideString = JSON.stringify(override);
    return overrideString === "{}" ? "" : overrideString;
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

  // extensions/amp-addthis/0.1/amp-addthis.js
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
  var configManager = new ConfigManager();
  var scrollMonitor = new ScrollMonitor();
  var dwellMonitor = new DwellMonitor();
  var clickMonitor = new ClickMonitor();
  var activeToolsMonitor = new ActiveToolsMonitor();
  var shouldRegisterView = true;
  function getConfigManager() {
    return configManager;
  }
  var AmpAddThis = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpAddThis2, _AMP$BaseElement);
    var _super = _createSuper(AmpAddThis2);
    function AmpAddThis2(element) {
      var _this;
      _classCallCheck10(this, AmpAddThis2);
      _this = _super.call(this, element);
      _this.iframe_ = null;
      _this.pubId_ = "";
      _this.widgetId_ = "";
      _this.productCode_ = "";
      _this.canonicalUrl_ = "";
      _this.canonicalTitle_ = "";
      _this.referrer_ = "";
      _this.shareConfig_ = null;
      _this.atConfig_ = null;
      _this.widgetType_ = "";
      _this.mode_ = -1;
      _this.containerClassName_ = "";
      return _this;
    }
    _createClass9(AmpAddThis2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        var pubId = this.element.getAttribute("data-pub-id") || "";
        var widgetId = this.element.getAttribute("data-widget-id") || "";
        var productCode = this.element.getAttribute("data-product-code") || "";
        this.mode_ = getAddThisMode({
          pubId,
          widgetId,
          productCode
        });
        if (this.mode_ === -1) {
          if (isPubId(pubId)) {
            if (!isProductCode(productCode) && !isWidgetId(widgetId)) {
              userAssert(widgetId, "Widget id or product code is required for <amp-addthis> %s", this.element);
            } else if (isProductCode(productCode) && isWidgetId(widgetId)) {
              userAssert(productCode, "Only widget id or product code is required <amp-addthis> %s", this.element);
            }
          } else {
            userAssert(pubId, "The data-pub-id attribute is required for <amp-addthis> %s", this.element);
          }
        }
        this.containerClassName_ = this.element.getAttribute("data-class-name") || "";
        this.pubId_ = pubId;
        this.widgetId_ = this.mode_ === 3 ? getWidgetOverload(this) : widgetId;
        this.productCode_ = productCode;
        if (this.productCode_ === "shfs") {
          this.element.setAttribute("data-widget-type", "floating");
        }
        var ampDoc = this.getAmpDoc();
        this.canonicalUrl_ = this.element.getAttribute("data-canonical-url") || Services.documentInfoForDoc(this.element).canonicalUrl || ampDoc.getUrl();
        this.canonicalTitle_ = this.element.getAttribute("data-canonical-title") || ampDoc.win.document.title;
        this.widgetType_ = this.element.getAttribute("data-widget-type");
        this.shareConfig_ = this.getShareConfigAsJsonObject_();
        this.atConfig_ = this.getATConfig_(ampDoc);
        if (shouldRegisterView) {
          shouldRegisterView = false;
          var viewer = Services.viewerForDoc(ampDoc);
          var loc = parseUrlDeprecated(this.canonicalUrl_);
          ampDoc.whenFirstVisible().then(function() {
            return viewer.getReferrerUrl();
          }).then(function(referrer) {
            _this2.referrer_ = referrer;
            callLojson({
              loc,
              title: _this2.canonicalTitle_,
              pubId: _this2.pubId_,
              atConfig: _this2.atConfig_,
              referrer,
              ampDoc
            });
            dwellMonitor.startForDoc(ampDoc);
            scrollMonitor.startForDoc(ampDoc);
            clickMonitor.startForDoc(ampDoc);
          });
          this.setupListeners_({
            ampDoc,
            loc,
            pubId: this.pubId_
          });
          if (this.element.getAttribute("data-widget-type") === "messages") {
            var closeButton = createElementWithAttributes(this.win.document, "button", dict({
              "class": "i-amphtml-addthis-close"
            }));
            closeButton.onclick = function() {
              return removeElement(_this2.element);
            };
            this.element.appendChild(closeButton);
          }
        }
      }
    }, {
      key: "preconnectCallback",
      value: function preconnectCallback(opt_onLayout) {
        var preconnect = Services.preconnectFor(this.win);
        var ampdoc = this.getAmpDoc();
        preconnect.url(ampdoc, ORIGIN, opt_onLayout);
        preconnect.url(ampdoc, API_SERVER, opt_onLayout);
        preconnect.url(ampdoc, COOKIELESS_API_SERVER, opt_onLayout);
        preconnect.url(ampdoc, SHARECOUNTER_SERVER, opt_onLayout);
        preconnect.url(ampdoc, "https://cache.addthiscdn.com", opt_onLayout);
        preconnect.url(ampdoc, "https://su.addthis.com", opt_onLayout);
      }
    }, {
      key: "isAlwaysFixed",
      value: function isAlwaysFixed() {
        return this.widgetType_ === "floating";
      }
    }, {
      key: "createPlaceholderCallback",
      value: function createPlaceholderCallback() {
        var placeholder = createElementWithAttributes(this.win.document, "div", dict({
          "placeholder": ""
        }));
        setStyle(placeholder, "background-color", "#fff");
        var image = createElementWithAttributes(this.win.document, "amp-img", dict({
          "src": "https://cache.addthiscdn.com/icons/v3/thumbs/" + ICON_SIZE + "x" + ICON_SIZE + "/addthis.png",
          "layout": "fixed",
          "width": ICON_SIZE,
          "height": ICON_SIZE,
          "referrerpolicy": "origin",
          "alt": ALT_TEXT
        }));
        placeholder.appendChild(image);
        return placeholder;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var iframe = createElementWithAttributes(this.element.ownerDocument, "iframe", dict({
          "frameborder": 0,
          "title": ALT_TEXT,
          "src": ORIGIN + "/dc/amp-addthis.html?_amp_=" + internalRuntimeVersion(),
          "id": this.widgetId_,
          "pco": this.productCode_,
          "containerClassName": this.containerClassName_
        }));
        var iframeLoadPromise = this.loadPromise(iframe);
        this.applyFillContent(iframe);
        this.element.appendChild(iframe);
        this.iframe_ = iframe;
        configManager.register({
          pubId: this.pubId_,
          widgetId: this.widgetId_,
          productCode: this.productCode_,
          shareConfig: this.shareConfig_,
          atConfig: this.atConfig_,
          containerClassName: this.containerClassName_,
          iframe,
          iframeLoadPromise,
          activeToolsMonitor
        });
        return iframeLoadPromise;
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        if (this.iframe_) {
          removeElement(this.iframe_);
          configManager.unregister({
            pubId: this.pubId_,
            iframe: this.iframe_
          });
          this.iframe_ = null;
        }
        return true;
      }
    }, {
      key: "getShareConfigAsJsonObject_",
      value: function getShareConfigAsJsonObject_() {
        var _this3 = this;
        var params = dict();
        SHARE_CONFIG_KEYS.map(function(key) {
          var value = _this3.element.getAttribute("data-" + key);
          if (value) {
            params[key] = value;
          } else {
            if (key === "url") {
              params[key] = _this3.getAmpDoc().getUrl();
            } else if (key === "title") {
              params[key] = _this3.getAmpDoc().win.document.title;
            } else if (key === "media") {
              params[key] = getOgImage(_this3.getAmpDoc().win.document);
            }
          }
        });
        return params;
      }
    }, {
      key: "getATConfig_",
      value: function getATConfig_(ampDoc) {
        var _this4 = this;
        return AT_CONFIG_KEYS.reduce(function(config, key) {
          var value = _this4.element.getAttribute("data-" + key);
          if (value) {
            config[key] = value;
          } else {
            var win = ampDoc.win;
            if (key === "ui_language") {
              config[key] = win.document.documentElement.lang || win.navigator.language || win.navigator.userLanguage || "en";
            }
          }
          return config;
        }, {});
      }
    }, {
      key: "setupListeners_",
      value: function setupListeners_(input) {
        var _this5 = this;
        var ampDoc = input.ampDoc, loc = input.loc, pubId = input.pubId;
        listen(ampDoc.win, "pagehide", function() {
          return callEng({
            monitors: {
              dwellMonitor,
              scrollMonitor,
              clickMonitor,
              activeToolsMonitor
            },
            ampDoc,
            loc,
            pubId
          });
        });
        var postMessageDispatcher = new PostMessageDispatcher();
        var pmHandler = postMessageDispatcher.handleAddThisMessage.bind(postMessageDispatcher);
        listen(ampDoc.win, "message", pmHandler);
        postMessageDispatcher.on(SHARE_EVENT, function(data) {
          return callPjson({
            data,
            loc,
            pubId,
            ampDoc,
            title: _this5.canonicalTitle_,
            atConfig: _this5.atConfig_,
            referrer: _this5.referrer_
          });
        });
        postMessageDispatcher.on(CONFIGURATION_EVENT, configManager.receiveConfiguration.bind(configManager));
      }
    }]);
    return AmpAddThis2;
  }(AMP.BaseElement);
  AMP.extension("amp-addthis", "0.1", function(AMP2) {
    AMP2.registerElement("amp-addthis", AmpAddThis, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-addthis-0.1.max.js.map
