(self.AMP=self.AMP||[]).push({n:"amp-ad",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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

  // ads/google/a4a/shared/content-recommendation.js
  var _LAYOUT_ASPECT_RATIO_;
  var _LAYOUT_TEXT_HEIGHT_M;
  var _LAYOUT_AD_WIDTH_MAP;
  var LayoutType = {
    IMAGE_STACKED: "image_stacked",
    IMAGE_SIDEBYSIDE: "image_sidebyside",
    MOBILE_BANNER_IMAGE_SIDEBYSIDE: "mobile_banner_image_sidebyside",
    PUB_CONTROL_IMAGE_STACKED: "pub_control_image_stacked",
    PUB_CONTROL_IMAGE_SIDEBYSIDE: "pub_control_image_sidebyside",
    PUB_CONTROL_IMAGE_CARD_STACKED: "pub_control_image_card_stacked",
    PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE: "pub_control_image_card_sidebyside",
    PUB_CONTROL_TEXT: "pub_control_text",
    PUB_CONTROL_TEXT_CARD: "pub_control_text_card",
    PEDESTAL: "pedestal"
  };
  var ExternalCorePubVars = {
    UI_TYPE: "data-matched-content-ui-type",
    COLUMNS_NUM: "data-matched-content-columns-num",
    ROWS_NUM: "data-matched-content-rows-num"
  };
  var MIN_PUB_CONTROL_WIDTH_OF_DESKTOP = 468;
  var PADDING = 8;
  var MAX_PUB_CONTROL_DIMENSION = 1500;
  var LAYOUT_ASPECT_RATIO_MAP = (_LAYOUT_ASPECT_RATIO_ = {}, _LAYOUT_ASPECT_RATIO_[LayoutType.IMAGE_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.MOBILE_BANNER_IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 1 / 3.82, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 1 / 1.91, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 1 / 3.74, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_TEXT] = 0, _LAYOUT_ASPECT_RATIO_[LayoutType.PUB_CONTROL_TEXT_CARD] = 0, _LAYOUT_ASPECT_RATIO_);
  var LAYOUT_TEXT_HEIGHT_MAP = (_LAYOUT_TEXT_HEIGHT_M = {}, _LAYOUT_TEXT_HEIGHT_M[LayoutType.IMAGE_STACKED] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.MOBILE_BANNER_IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 85, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 0, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_TEXT] = 80, _LAYOUT_TEXT_HEIGHT_M[LayoutType.PUB_CONTROL_TEXT_CARD] = 80, _LAYOUT_TEXT_HEIGHT_M);
  var LAYOUT_AD_WIDTH_MAP = (_LAYOUT_AD_WIDTH_MAP = {}, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_STACKED] = 100, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_SIDEBYSIDE] = 200, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_CARD_STACKED] = 150, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_IMAGE_CARD_SIDEBYSIDE] = 250, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_TEXT] = 100, _LAYOUT_AD_WIDTH_MAP[LayoutType.PUB_CONTROL_TEXT_CARD] = 150, _LAYOUT_AD_WIDTH_MAP);
  var PUB_CONTROL_LAYOUT_PREFIX = "pub_control_";
  var PUB_CONTROL_EXAMPLE = '\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"';
  function getAutoConfig(availableWidth, isMobile) {
    if (availableWidth < MIN_PUB_CONTROL_WIDTH_OF_DESKTOP) {
      if (isMobile) {
        var layoutType = LayoutType.MOBILE_BANNER_IMAGE_SIDEBYSIDE;
        var numColumns = 1;
        var numRows = 12;
        var slotSize = getLargerAdOneColumnSidebysideSize(availableWidth, layoutType, numColumns, numRows);
        return {
          slotWidth: slotSize.width,
          slotHeight: slotSize.height,
          numberOfColumns: numColumns,
          numberOfRows: numRows,
          layoutType
        };
      } else {
        var _slotSize = getAutoSlotSize(availableWidth);
        return {
          slotWidth: _slotSize.width,
          slotHeight: _slotSize.height,
          numberOfColumns: 1,
          numberOfRows: 13,
          layoutType: LayoutType.IMAGE_SIDEBYSIDE
        };
      }
    } else {
      var _slotSize2 = getAutoSlotSize(availableWidth);
      return {
        slotWidth: _slotSize2.width,
        slotHeight: _slotSize2.height,
        numberOfColumns: 4,
        numberOfRows: 2,
        layoutType: LayoutType.IMAGE_STACKED
      };
    }
  }
  function getPubControlConfig(availableWidth, rawPubControlParams) {
    var pubParams = validateAndParsePubControlParams(rawPubControlParams);
    if (pubParams.validationError) {
      return {
        slotWidth: 0,
        slotHeight: 0,
        numberOfColumns: 0,
        numberOfRows: 0,
        layoutType: LayoutType.IMAGE_STACKED,
        validationError: pubParams.validationError
      };
    }
    var index;
    if (pubParams.layoutTypes.length === 2 && availableWidth >= MIN_PUB_CONTROL_WIDTH_OF_DESKTOP) {
      index = 1;
    } else {
      index = 0;
    }
    var layout = convertToPubControlLayoutType(pubParams.layoutTypes[index]);
    var numColumns = getOptimizedNumColumns(availableWidth, pubParams.numberOfColumns[index], layout);
    var numRows = pubParams.numberOfRows[index];
    var slotSize = getPubControlSlotSize(availableWidth, numColumns, numRows, layout);
    if (slotSize.sizeError) {
      return {
        slotWidth: 0,
        slotHeight: 0,
        numberOfColumns: 0,
        numberOfRows: 0,
        layoutType: layout,
        validationError: slotSize.sizeError
      };
    }
    return {
      slotWidth: slotSize.width,
      slotHeight: slotSize.height,
      numberOfColumns: numColumns,
      numberOfRows: numRows,
      layoutType: layout
    };
  }
  function validateAndParsePubControlParams(params) {
    var numberOfPubControlParams = 0;
    if (params.layoutType) {
      numberOfPubControlParams++;
    }
    if (params.numberOfColumns) {
      numberOfPubControlParams++;
    }
    if (params.numberOfRows) {
      numberOfPubControlParams++;
    }
    if (numberOfPubControlParams < 3) {
      return {
        validationError: "Tags " + ExternalCorePubVars.UI_TYPE + ", " + ExternalCorePubVars.COLUMNS_NUM + " and " + ExternalCorePubVars.ROWS_NUM + " should be set together."
      };
    }
    var layoutTypes = params.layoutType.split(",");
    var numberOfRows = params.numberOfRows.split(",");
    var numberOfColumns = params.numberOfColumns.split(",");
    if (layoutTypes.length !== numberOfRows.length || layoutTypes.length !== numberOfColumns.length) {
      return {
        validationError: "Lengths of parameters " + ExternalCorePubVars.UI_TYPE + ", " + ExternalCorePubVars.COLUMNS_NUM + " and " + ExternalCorePubVars.ROWS_NUM + " must match. Example: " + PUB_CONTROL_EXAMPLE
      };
    }
    if (layoutTypes.length > 2) {
      return {
        validationError: "The parameter length of attribute " + ExternalCorePubVars.UI_TYPE + ", " + ExternalCorePubVars.COLUMNS_NUM + " and " + ExternalCorePubVars.ROWS_NUM + " is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + ("you are providing " + layoutTypes.length + " parameters. Example: " + PUB_CONTROL_EXAMPLE + ".")
      };
    }
    var numberOfRowsAsNumbers = [];
    var numberOfColumnsAsNumbers = [];
    for (var i = 0; i < layoutTypes.length; i++) {
      var row = Number(numberOfRows[i]);
      if (isNaN(row) || row === 0) {
        return {
          validationError: "Wrong value '" + numberOfRows[i] + "' for " + ExternalCorePubVars.ROWS_NUM + "."
        };
      }
      numberOfRowsAsNumbers.push(row);
      var col = Number(numberOfColumns[i]);
      if (isNaN(col) || col === 0) {
        return {
          validationError: "Wrong value '" + numberOfColumns[i] + "' for " + ExternalCorePubVars.COLUMNS_NUM + "."
        };
      }
      numberOfColumnsAsNumbers.push(col);
    }
    return {
      numberOfRows: numberOfRowsAsNumbers,
      numberOfColumns: numberOfColumnsAsNumbers,
      layoutTypes
    };
  }
  function getAutoSlotSize(availableWidth) {
    if (availableWidth >= 1200) {
      return {
        width: 1200,
        height: 600
      };
    } else if (availableWidth >= 850) {
      return {
        width: availableWidth,
        height: Math.floor(availableWidth * 0.5)
      };
    } else if (availableWidth >= 550) {
      return {
        width: availableWidth,
        height: Math.floor(availableWidth * 0.6)
      };
    } else if (availableWidth >= 468) {
      return {
        width: availableWidth,
        height: Math.floor(availableWidth * 0.7)
      };
    } else {
      return {
        width: availableWidth,
        height: Math.floor(availableWidth * 3.44)
      };
    }
  }
  function getAdHeight(adWidth, layout) {
    return adWidth * LAYOUT_ASPECT_RATIO_MAP[layout] + LAYOUT_TEXT_HEIGHT_MAP[layout];
  }
  function getAdWidth(slotWidth, numColumns) {
    return (slotWidth - PADDING * numColumns - PADDING) / numColumns;
  }
  function getSlotHeight(adHeight, numRows) {
    return Math.floor(adHeight * numRows + PADDING * numRows + PADDING);
  }
  function getPubControlSlotSize(slotWidth, numColumns, numRows, layout) {
    var adWidth = getAdWidth(slotWidth, numColumns);
    var adHeight = getAdHeight(adWidth, layout);
    var slotHeight = getSlotHeight(adHeight, numRows);
    if (slotWidth > MAX_PUB_CONTROL_DIMENSION) {
      return {
        width: 0,
        height: 0,
        sizeError: "Calculated slot width is too large: " + slotWidth
      };
    }
    if (slotHeight > MAX_PUB_CONTROL_DIMENSION) {
      return {
        width: 0,
        height: 0,
        sizeError: "Calculated slot height is too large: " + slotHeight
      };
    }
    return {
      width: slotWidth,
      height: slotHeight
    };
  }
  function getLargerAdOneColumnSidebysideSize(availableWidth, layoutType, numColumns, numRows) {
    var adWidth = getAdWidth(availableWidth, numColumns);
    var firstAdHeight = Math.floor(adWidth / 1.91 + 70);
    var restAdHeight = getAdHeight(adWidth, layoutType);
    var slotHeight = firstAdHeight + getSlotHeight(restAdHeight, numRows - 1);
    return {
      width: availableWidth,
      height: slotHeight
    };
  }
  function convertToPubControlLayoutType(layout) {
    return layout.indexOf(PUB_CONTROL_LAYOUT_PREFIX) === 0 ? layout : PUB_CONTROL_LAYOUT_PREFIX + layout;
  }
  function getOptimizedNumColumns(availableWidth, numColumns, layout) {
    var minWidth = LAYOUT_AD_WIDTH_MAP[layout];
    var optimizedNumColumns = numColumns;
    while (availableWidth / optimizedNumColumns < minWidth && optimizedNumColumns > 1) {
      optimizedNumColumns--;
    }
    return optimizedNumColumns;
  }

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
  function stringHash32(str) {
    var length = str.length;
    var hash = 5381;
    for (var i = 0; i < length; i++) {
      hash = hash * 33 ^ str.charCodeAt(i);
    }
    return String(hash >>> 0);
  }
  function isString(s) {
    return typeof s == "string";
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

  // ads/google/utils.js
  var ADSENSE_MCRSPV_TAG = "mcrspv";
  function getMatchedContentResponsiveHeightAndUpdatePubParams(availableWidth, element) {
    var pubControlParams = {
      numberOfRows: element.getAttribute(ExternalCorePubVars.ROWS_NUM),
      numberOfColumns: element.getAttribute(ExternalCorePubVars.COLUMNS_NUM),
      layoutType: element.getAttribute(ExternalCorePubVars.UI_TYPE)
    };
    var config;
    if (pubControlParams.numberOfRows || pubControlParams.numberOfColumns || pubControlParams.layoutType) {
      config = getPubControlConfig(availableWidth, pubControlParams);
    } else {
      config = getAutoConfig(availableWidth, availableWidth <= MIN_PUB_CONTROL_WIDTH_OF_DESKTOP);
    }
    if (config.validationError) {
      user().error("AMP-AD", config.validationError);
      return 0;
    }
    element.setAttribute(ExternalCorePubVars.ROWS_NUM, config.numberOfRows);
    element.setAttribute(ExternalCorePubVars.COLUMNS_NUM, config.numberOfColumns);
    element.setAttribute(ExternalCorePubVars.UI_TYPE, config.layoutType);
    return config.slotHeight;
  }

  // src/experiments/ads-initial-intersection-exp.js
  var ADS_INITIAL_INTERSECTION_EXP = {
    id: "ads-initialIntersection",
    control: "31060065",
    experiment: "31060066"
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
  function ancestorElements(child, predicate) {
    var ancestors = [];
    for (var ancestor = child.parentElement; ancestor; ancestor = ancestor.parentElement) {
      if (predicate(ancestor)) {
        ancestors.push(ancestor);
      }
    }
    return ancestors;
  }
  function ancestorElementsByTag(child, tagName) {
    assertIsName(tagName);
    tagName = tagName.toUpperCase();
    return ancestorElements(child, function(el) {
      return el.tagName == tagName;
    });
  }
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
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
  function isIframed(win) {
    return win.parent && win.parent != win;
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

  // src/style.js
  var propertyNameCache;
  var vendorPrefixes = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // src/ad-helper.js
  var AD_CONTAINER_PROP = "__AMP__AD_CONTAINER";
  var CONTAINERS = {
    "AMP-FX-FLYING-CARPET": true,
    "AMP-LIGHTBOX": true,
    "AMP-STICKY-AD": true,
    "AMP-LIGHTBOX-GALLERY": true
  };
  function isPositionFixed(el, win) {
    var _computedStyle = computedStyle(win, el), position = _computedStyle.position;
    return position == "fixed" || position == "sticky";
  }
  function isAdPositionAllowed(element, win) {
    var hasFixedAncestor = false;
    var containers = 0;
    var el = element;
    do {
      if (CONTAINERS[el.tagName]) {
        containers++;
        hasFixedAncestor = false;
      } else if (isPositionFixed(dev().assertElement(el), win)) {
        hasFixedAncestor = true;
      }
      el = el.parentElement;
    } while (el && el.tagName != "BODY");
    return !hasFixedAncestor && containers <= 1;
  }
  function getAdContainer(element) {
    if (element[AD_CONTAINER_PROP] === void 0) {
      var el = element.parentElement;
      while (el && el.tagName != "BODY") {
        if (CONTAINERS[el.tagName]) {
          return element[AD_CONTAINER_PROP] = el.tagName;
        }
        el = el.parentElement;
      }
      element[AD_CONTAINER_PROP] = null;
    }
    return element[AD_CONTAINER_PROP];
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
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
  }

  // extensions/amp-ad/0.1/amp-ad-ui.js
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
  var STICKY_AD_MAX_SIZE_LIMIT = 0.2;
  var STICKY_AD_MAX_HEIGHT_LIMIT = 0.5;
  var TOP_STICKY_AD_CLOSE_THRESHOLD = 50;
  var TOP_STICKY_AD_TRIGGER_THRESHOLD = 200;
  var StickyAdPositions = {
    TOP: "top",
    BOTTOM: "bottom",
    BOTTOM_RIGHT: "bottom-right"
  };
  var STICKY_AD_PROP = "sticky";
  var AmpAdUIHandler = /* @__PURE__ */ function() {
    function AmpAdUIHandler2(baseInstance) {
      _classCallCheck3(this, AmpAdUIHandler2);
      this.baseInstance_ = baseInstance;
      this.element_ = baseInstance.element;
      this.doc_ = baseInstance.win.document;
      this.containerElement_ = null;
      this.stickyAdPosition_ = null;
      if (this.element_.hasAttribute(STICKY_AD_PROP)) {
        this.stickyAdPosition_ = this.element_.getAttribute(STICKY_AD_PROP) || StickyAdPositions.BOTTOM_RIGHT;
        this.element_.setAttribute(STICKY_AD_PROP, this.stickyAdPosition_);
      }
      this.closeButtonRendered_ = false;
      this.topStickyAdScrollListener_ = void 0;
      this.topStickyAdCloserAcitve_ = false;
      this.unlisteners_ = [];
      if (this.element_.hasAttribute("data-ad-container-id")) {
        var id = this.element_.getAttribute("data-ad-container-id");
        var container = this.doc_.getElementById(id);
        if (container && container.tagName == "AMP-LAYOUT" && container.contains(this.element_)) {
          this.containerElement_ = container;
        }
      }
      if (!baseInstance.getFallback()) {
        var fallback = this.addDefaultUiComponent_("fallback");
        if (fallback) {
          this.baseInstance_.element.appendChild(fallback);
        }
      }
    }
    _createClass2(AmpAdUIHandler2, [{
      key: "applyNoContentUI",
      value: function applyNoContentUI() {
        var _this = this;
        if (getAdContainer(this.element_) === "AMP-STICKY-AD") {
          this.baseInstance_.collapse();
          return;
        }
        if (getAdContainer(this.element_) === "AMP-FX-FLYING-CARPET") {
          var flyingCarpetElements = ancestorElementsByTag(this.element_, "amp-fx-flying-carpet");
          var flyingCarpetElement = flyingCarpetElements[0];
          flyingCarpetElement.getImpl().then(function(implementation) {
            var children = implementation.getChildren();
            if (children.length === 1 && children[0] === _this.element_) {
              _this.baseInstance_.collapse();
            }
          });
          return;
        }
        var attemptCollapsePromise;
        if (this.containerElement_) {
          attemptCollapsePromise = Services.mutatorForDoc(this.element_.getAmpDoc()).attemptCollapse(this.containerElement_);
          attemptCollapsePromise.then(function() {
          });
        } else {
          attemptCollapsePromise = this.baseInstance_.attemptCollapse();
        }
        attemptCollapsePromise.catch(function() {
          _this.baseInstance_.mutateElement(function() {
            _this.baseInstance_.togglePlaceholder(false);
            _this.baseInstance_.toggleFallback(true);
          });
        });
      }
    }, {
      key: "applyUnlayoutUI",
      value: function applyUnlayoutUI() {
        var _this2 = this;
        this.baseInstance_.mutateElement(function() {
          _this2.baseInstance_.toggleFallback(false);
        });
      }
    }, {
      key: "addDefaultUiComponent_",
      value: function addDefaultUiComponent_(name) {
        if (this.element_.tagName == "AMP-EMBED") {
          return null;
        }
        var uiComponent = this.doc_.createElement("div");
        uiComponent.setAttribute(name, "");
        var content = this.doc_.createElement("div");
        content.classList.add("i-amphtml-ad-default-holder");
        content.setAttribute("data-ad-holder-text", "Ad");
        uiComponent.appendChild(content);
        return uiComponent;
      }
    }, {
      key: "isStickyAd",
      value: function isStickyAd() {
        return this.stickyAdPosition_ !== null;
      }
    }, {
      key: "maybeInitStickyAd",
      value: function maybeInitStickyAd() {
        if (this.isStickyAd()) {
          setStyle(this.element_, "visibility", "visible");
          if (this.stickyAdPosition_ == StickyAdPositions.TOP) {
            var paddingTop = Services.viewportForDoc(this.element_.getAmpDoc()).getPaddingTop();
            setStyle(this.element_, "top", paddingTop + "px");
          }
          if (this.stickyAdPosition_ == StickyAdPositions.BOTTOM) {
            var paddingBar = this.doc_.createElement("amp-ad-sticky-padding");
            this.element_.insertBefore(paddingBar, devAssert(this.element_.firstChild, "amp-ad should have been expanded."));
          }
        }
      }
    }, {
      key: "getScrollPromiseForStickyAd",
      value: function getScrollPromiseForStickyAd() {
        var _this3 = this;
        if (this.isStickyAd()) {
          return new Promise(function(resolve) {
            var unlisten = Services.viewportForDoc(_this3.element_.getAmpDoc()).onScroll(function() {
              resolve();
              unlisten();
            });
          });
        }
        return Promise.resolve(null);
      }
    }, {
      key: "onResizeSuccess",
      value: function onResizeSuccess() {
        var _this4 = this;
        if (this.isStickyAd() && !this.closeButtonRendered_) {
          this.addCloseButton_();
          this.closeButtonRendered_ = true;
        }
        if (this.isStickyAd() && !this.topStickyAdScrollListener_) {
          var doc = this.element_.getAmpDoc();
          this.topStickyAdScrollListener_ = Services.viewportForDoc(doc).onScroll(function() {
            var scrollPos = doc.win.scrollY;
            if (scrollPos > TOP_STICKY_AD_TRIGGER_THRESHOLD) {
              _this4.topStickyAdCloserAcitve_ = true;
            }
            if (_this4.topStickyAdCloserAcitve_ && scrollPos < TOP_STICKY_AD_CLOSE_THRESHOLD) {
              _this4.closeStickyAd_();
            }
          });
          this.unlisteners_.push(this.topStickyAdScrollListener_);
        }
      }
    }, {
      key: "closeStickyAd_",
      value: function closeStickyAd_() {
        var _this5 = this;
        Services.vsyncFor(this.baseInstance_.win).mutate(function() {
          var viewport = Services.viewportForDoc(_this5.element_.getAmpDoc());
          viewport.removeFromFixedLayer(_this5.element);
          removeElement(_this5.element_);
          viewport.updatePaddingBottom(0);
        });
        if (this.topStickyAdScrollListener_) {
          this.topStickyAdScrollListener_();
        }
      }
    }, {
      key: "addCloseButton_",
      value: function addCloseButton_() {
        var closeButton = createElementWithAttributes(this.element_.ownerDocument, "button", dict({
          "aria-label": this.element_.getAttribute("data-close-button-aria-label") || "Close this ad"
        }));
        this.unlisteners_.push(listen(closeButton, "click", this.closeStickyAd_.bind(this)));
        closeButton.classList.add("amp-ad-close-button");
        this.element_.appendChild(closeButton);
      }
    }, {
      key: "updateSize",
      value: function updateSize(height, width, iframeHeight, iframeWidth, event) {
        var _this6 = this;
        var newHeight, newWidth;
        height = parseInt(height, 10);
        if (!isNaN(height)) {
          newHeight = Math.max(this.element_.offsetHeight + height - iframeHeight, height);
        }
        width = parseInt(width, 10);
        if (!isNaN(width)) {
          newWidth = Math.max(this.element_.offsetWidth + width - iframeWidth, width);
        }
        var resizeInfo = {
          success: true,
          newWidth,
          newHeight
        };
        if (!newHeight && !newWidth) {
          return Promise.reject(new Error("undefined width and height"));
        }
        if (getAdContainer(this.element_) == "AMP-STICKY-AD") {
          resizeInfo.success = false;
          return Promise.resolve(resizeInfo);
        }
        if (this.isStickyAd()) {
          var viewport = this.baseInstance_.getViewport();
          if (height * width > STICKY_AD_MAX_SIZE_LIMIT * viewport.getHeight() * viewport.getWidth() || newHeight > STICKY_AD_MAX_HEIGHT_LIMIT * viewport.getHeight()) {
            resizeInfo.success = false;
            return Promise.resolve(resizeInfo);
          }
        }
        return this.baseInstance_.attemptChangeSize(newHeight, newWidth, event).then(function() {
          _this6.setSize_(_this6.element_.querySelector("iframe"), height, width);
          return resizeInfo;
        }, function() {
          resizeInfo.success = false;
          return resizeInfo;
        });
      }
    }, {
      key: "setSize_",
      value: function setSize_(element, newHeight, newWidth) {
        setStyles(element, {
          "height": newHeight + "px",
          "width": newWidth + "px"
        });
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.unlisteners_.forEach(function(unlistener) {
          return unlistener();
        });
        this.unlisteners_.length = 0;
      }
    }]);
    return AmpAdUIHandler2;
  }();
  AMP.AmpAdUIHandler = AmpAdUIHandler;

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

  // src/3p-frame-messaging.js
  var AMP_MESSAGE_PREFIX = "amp-";
  var CONSTANTS = {
    responseTypeSuffix: "-result",
    messageIdFieldName: "messageId",
    payloadFieldName: "payload",
    contentFieldName: "content"
  };
  var MessageType = {
    SEND_EMBED_STATE: "send-embed-state",
    EMBED_STATE: "embed-state",
    SEND_EMBED_CONTEXT: "send-embed-context",
    EMBED_CONTEXT: "embed-context",
    SEND_INTERSECTIONS: "send-intersections",
    INTERSECTION: "intersection",
    EMBED_SIZE: "embed-size",
    EMBED_SIZE_CHANGED: "embed-size-changed",
    EMBED_SIZE_DENIED: "embed-size-denied",
    NO_CONTENT: "no-content",
    GET_HTML: "get-html",
    GET_CONSENT_STATE: "get-consent-state",
    SIGNAL_INTERACTIVE: "signal-interactive",
    FULL_OVERLAY_FRAME: "full-overlay-frame",
    FULL_OVERLAY_FRAME_RESPONSE: "full-overlay-frame-response",
    CANCEL_FULL_OVERLAY_FRAME: "cancel-full-overlay-frame",
    CANCEL_FULL_OVERLAY_FRAME_RESPONSE: "cancel-full-overlay-frame-response",
    SEND_POSITIONS: "send-positions",
    POSITION: "position",
    SEND_IFRAME_TRANSPORT_EVENTS: "send-iframe-transport-events",
    IFRAME_TRANSPORT_EVENTS: "iframe-transport-events",
    IFRAME_TRANSPORT_RESPONSE: "iframe-transport-response",
    USER_ERROR_IN_IFRAME: "user-error-in-iframe",
    SEND_CONSENT_DATA: "send-consent-data",
    CONSENT_DATA: "consent-data"
  };
  function deserializeMessage(message) {
    if (!isAmpMessage(message)) {
      return null;
    }
    var startPos = message.indexOf("{");
    devAssert(startPos != -1, "JSON missing in %s", message);
    return tryParseJson(message.substr(startPos), function(e) {
      return dev().error("MESSAGING", "Failed to parse message: " + message, e);
    });
  }
  function isAmpMessage(message) {
    return typeof message == "string" && message.indexOf(AMP_MESSAGE_PREFIX) == 0 && message.indexOf("{") != -1;
  }

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

  // src/iframe-helper.js
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
  var UNLISTEN_SENTINEL = "unlisten";
  function getListenFors(parentWin, opt_create) {
    var listeningFors = parentWin.listeningFors;
    if (!listeningFors && opt_create) {
      listeningFors = parentWin.listeningFors = Object.create(null);
    }
    return listeningFors || null;
  }
  function getListenForSentinel(parentWin, sentinel, opt_create) {
    var listeningFors = getListenFors(parentWin, opt_create);
    if (!listeningFors) {
      return listeningFors;
    }
    var listenSentinel = listeningFors[sentinel];
    if (!listenSentinel && opt_create) {
      listenSentinel = listeningFors[sentinel] = [];
    }
    return listenSentinel || null;
  }
  function getOrCreateListenForEvents(parentWin, iframe, opt_is3P) {
    var sentinel = getSentinel_(iframe, opt_is3P);
    var listenSentinel = getListenForSentinel(parentWin, sentinel, true);
    var windowEvents;
    for (var i = 0; i < listenSentinel.length; i++) {
      var we = listenSentinel[i];
      if (we.frame === iframe) {
        windowEvents = we;
        break;
      }
    }
    if (!windowEvents) {
      windowEvents = {
        frame: iframe,
        events: Object.create(null)
      };
      listenSentinel.push(windowEvents);
    }
    return windowEvents.events;
  }
  function getListenForEvents(parentWin, sentinel, origin, triggerWin) {
    var listenSentinel = getListenForSentinel(parentWin, sentinel);
    if (!listenSentinel) {
      return listenSentinel;
    }
    var windowEvents;
    for (var i = 0; i < listenSentinel.length; i++) {
      var we = listenSentinel[i];
      var contentWindow = we.frame.contentWindow;
      if (!contentWindow) {
        setTimeout(dropListenSentinel, 0, listenSentinel);
      } else if (triggerWin == contentWindow || isDescendantWindow(contentWindow, triggerWin)) {
        windowEvents = we;
        break;
      }
    }
    return windowEvents ? windowEvents.events : null;
  }
  function isDescendantWindow(ancestor, descendant) {
    for (var win = descendant; win && win != win.parent; win = win.parent) {
      if (win == ancestor) {
        return true;
      }
    }
    return false;
  }
  function dropListenSentinel(listenSentinel) {
    var noopData = dict({
      "sentinel": UNLISTEN_SENTINEL
    });
    for (var i = listenSentinel.length - 1; i >= 0; i--) {
      var windowEvents = listenSentinel[i];
      if (!windowEvents.frame.contentWindow) {
        listenSentinel.splice(i, 1);
        var events = windowEvents.events;
        for (var name in events) {
          events[name].splice(0, Infinity).forEach(function(event) {
            event(noopData);
          });
        }
      }
    }
  }
  function registerGlobalListenerIfNeeded(parentWin) {
    if (parentWin.listeningFors) {
      return;
    }
    var listenForListener = function listenForListener2(event) {
      if (!getData(event)) {
        return;
      }
      var data = parseIfNeeded(getData(event));
      if (!data || !data["sentinel"]) {
        return;
      }
      var listenForEvents = getListenForEvents(parentWin, data["sentinel"], event.origin, event.source);
      if (!listenForEvents) {
        return;
      }
      var listeners = listenForEvents[data["type"]];
      if (!listeners) {
        return;
      }
      listeners = listeners.slice();
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener(data, event.source, event.origin, event);
      }
    };
    parentWin.addEventListener("message", listenForListener);
  }
  function listenFor(iframe, typeOfMessage, callback, opt_is3P, opt_includingNestedWindows, opt_allowOpaqueOrigin) {
    devAssert(iframe.src, "only iframes with src supported");
    devAssert(!iframe.parentNode, "cannot register events on an attached iframe. It will cause hair-pulling bugs like #2942");
    devAssert(callback);
    var parentWin = iframe.ownerDocument.defaultView;
    registerGlobalListenerIfNeeded(parentWin);
    var listenForEvents = getOrCreateListenForEvents(parentWin, iframe, opt_is3P);
    var iframeOrigin = parseUrlDeprecated(iframe.src).origin;
    var events = listenForEvents[typeOfMessage] || (listenForEvents[typeOfMessage] = []);
    var unlisten;
    var listener = function listener2(data, source, origin, event) {
      var sentinel = data["sentinel"];
      if (sentinel == "amp") {
        if (source != iframe.contentWindow) {
          return;
        }
        var isOpaqueAndAllowed = origin == "null" && opt_allowOpaqueOrigin;
        if (iframeOrigin != origin && !isOpaqueAndAllowed) {
          return;
        }
      }
      if (!opt_includingNestedWindows && source != iframe.contentWindow) {
        return;
      }
      if (data.sentinel == UNLISTEN_SENTINEL) {
        unlisten();
        return;
      }
      callback(data, source, origin, event);
    };
    events.push(listener);
    return unlisten = function unlisten2() {
      if (listener) {
        var index = events.indexOf(listener);
        if (index > -1) {
          events.splice(index, 1);
        }
        listener = null;
        events = null;
        callback = null;
      }
    };
  }
  function listenForOncePromise(iframe, typeOfMessages, opt_is3P) {
    var unlistenList = [];
    if (typeof typeOfMessages == "string") {
      typeOfMessages = [typeOfMessages];
    }
    return new Promise(function(resolve) {
      for (var i = 0; i < typeOfMessages.length; i++) {
        var message = typeOfMessages[i];
        var unlisten = listenFor(iframe, message, function(data, source, origin, event) {
          for (var _i = 0; _i < unlistenList.length; _i++) {
            unlistenList[_i]();
          }
          resolve({
            data,
            source,
            origin,
            event
          });
        }, opt_is3P);
        unlistenList.push(unlisten);
      }
    });
  }
  function postMessageToWindows(iframe, targets, type, object, opt_is3P) {
    if (!iframe.contentWindow) {
      return;
    }
    object["type"] = type;
    object["sentinel"] = getSentinel_(iframe, opt_is3P);
    var payload = object;
    if (opt_is3P) {
      payload = "amp-" + JSON.stringify(object);
    }
    for (var i = 0; i < targets.length; i++) {
      var target = targets[i];
      target.win.postMessage(payload, target.origin);
    }
  }
  function getSentinel_(iframe, opt_is3P) {
    return opt_is3P ? iframe.getAttribute("data-amp-3p-sentinel") : "amp";
  }
  function parseIfNeeded(data) {
    if (typeof data == "string") {
      if (data.charAt(0) == "{") {
        data = tryParseJson(data, function(e) {
          dev().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", e);
        }) || null;
      } else if (isAmpMessage(data)) {
        data = deserializeMessage(data);
      } else {
        data = null;
      }
    }
    return data;
  }
  var SubscriptionApi = /* @__PURE__ */ function() {
    function SubscriptionApi2(iframe, type, is3p, requestCallback) {
      var _this = this;
      _classCallCheck5(this, SubscriptionApi2);
      this.iframe_ = iframe;
      this.is3p_ = is3p;
      this.clientWindows_ = [];
      this.unlisten_ = listenFor(this.iframe_, type, function(data, source, origin) {
        if (!_this.clientWindows_.some(function(entry) {
          return entry.win == source;
        })) {
          _this.clientWindows_.push({
            win: source,
            origin
          });
        }
        requestCallback(data, source, origin);
      }, this.is3p_, this.is3p_);
    }
    _createClass4(SubscriptionApi2, [{
      key: "send",
      value: function send(type, data) {
        remove(this.clientWindows_, function(client) {
          return !client.win.parent;
        });
        postMessageToWindows(this.iframe_, this.clientWindows_, type, data, this.is3p_);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.unlisten_();
        this.clientWindows_.length = 0;
      }
    }]);
    return SubscriptionApi2;
  }();

  // src/viewport-observer.js
  function createViewportObserver(ioCallback2, win, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, needsRootBounds = _opts.needsRootBounds, threshold = _opts.threshold;
    var root = isIframed(win) && needsRootBounds ? win.document : void 0;
    return new win.IntersectionObserver(ioCallback2, {
      threshold,
      root
    });
  }
  var viewportObservers = new WeakMap();
  var viewportCallbacks = new WeakMap();
  function observeWithSharedInOb(element, viewportCallback) {
    if (getMode().localDev) {
      devAssert(!viewportCallbacks.has(element) || viewportCallbacks.get(element) === viewportCallback);
    }
    var win = toWin(element.ownerDocument.defaultView);
    var viewportObserver = viewportObservers.get(win);
    if (!viewportObserver) {
      viewportObservers.set(win, viewportObserver = createViewportObserver(ioCallback, win));
    }
    viewportCallbacks.set(element, viewportCallback);
    viewportObserver.observe(element);
  }
  function unobserveWithSharedInOb(element) {
    var win = toWin(element.ownerDocument.defaultView);
    var viewportObserver = viewportObservers.get(win);
    if (viewportObserver) {
      viewportObserver.unobserve(element);
    }
    viewportCallbacks.delete(element);
  }
  function ioCallback(entries) {
    for (var i = 0; i < entries.length; i++) {
      var _entries$i = entries[i], isIntersecting = _entries$i.isIntersecting, target = _entries$i.target;
      var viewportCallback = viewportCallbacks.get(target);
      if (viewportCallback) {
        viewportCallback(isIntersecting);
      }
    }
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
  function layoutRectFromDomRect(rect) {
    return layoutRectLtwh(Number(rect.left), Number(rect.top), Number(rect.width), Number(rect.height));
  }
  function moveLayoutRect(rect, dx, dy) {
    if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
      return rect;
    }
    return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
  }

  // src/utils/intersection.js
  var intersectionDeferreds;
  var intersectionObservers;
  function getInOb(win) {
    if (!intersectionDeferreds) {
      intersectionDeferreds = new WeakMap();
      intersectionObservers = new WeakMap();
    }
    var observer = intersectionObservers.get(win);
    if (!observer) {
      observer = createViewportObserver(function(entries) {
        var seen = new Set();
        for (var i = entries.length - 1; i >= 0; i--) {
          var target = entries[i].target;
          if (seen.has(target)) {
            continue;
          }
          seen.add(target);
          observer.unobserve(target);
          intersectionDeferreds.get(target).resolve(entries[i]);
          intersectionDeferreds.delete(target);
        }
      }, win, {
        needsRootBounds: true
      });
      intersectionObservers.set(win, observer);
    }
    return observer;
  }
  function measureIntersection(el) {
    if (intersectionDeferreds && intersectionDeferreds.has(el)) {
      return intersectionDeferreds.get(el).promise;
    }
    var inOb = getInOb(toWin(el.ownerDocument.defaultView));
    inOb.observe(el);
    var deferred = new Deferred();
    intersectionDeferreds.set(el, deferred);
    return deferred.promise;
  }
  function intersectionEntryToJson(entry) {
    return dict({
      "time": entry.time,
      "rootBounds": safeLayoutRectFromDomRect(entry.rootBounds),
      "boundingClientRect": safeLayoutRectFromDomRect(entry.boundingClientRect),
      "intersectionRect": safeLayoutRectFromDomRect(entry.intersectionRect),
      "intersectionRatio": entry.intersectionRatio
    });
  }
  function safeLayoutRectFromDomRect(rect) {
    if (rect === null) {
      return null;
    }
    return layoutRectFromDomRect(rect);
  }

  // extensions/amp-ad/0.1/legacy-ad-intersection-observer-host.js
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
  var LegacyAdIntersectionObserverHost = /* @__PURE__ */ function() {
    function LegacyAdIntersectionObserverHost2(baseElement, adIframe) {
      var _this = this;
      _classCallCheck6(this, LegacyAdIntersectionObserverHost2);
      this.baseElement_ = baseElement;
      this.timer_ = Services.timerFor(baseElement.win);
      this.intersectionObserver_ = null;
      this.fireInOb_ = null;
      this.inViewport_ = false;
      this.pendingChanges_ = [];
      this.flushTimeout_ = 0;
      this.boundFlush_ = this.flush_.bind(this);
      this.postMessageApi_ = new SubscriptionApi(adIframe, MessageType.SEND_INTERSECTIONS, true, function() {
        return _this.startSendingIntersectionChanges_();
      });
      this.unlistenViewportChanges_ = null;
    }
    _createClass5(LegacyAdIntersectionObserverHost2, [{
      key: "fire",
      value: function fire() {
        if (!this.fireInOb_) {
          return;
        }
        this.fireInOb_.unobserve(this.baseElement_.element);
        this.fireInOb_.observe(this.baseElement_.element);
      }
    }, {
      key: "unlistenOnOutViewport_",
      value: function unlistenOnOutViewport_() {
        if (this.unlistenViewportChanges_) {
          this.unlistenViewportChanges_();
          this.unlistenViewportChanges_ = null;
        }
      }
    }, {
      key: "startSendingIntersectionChanges_",
      value: function startSendingIntersectionChanges_() {
        var _this2 = this;
        if (!this.intersectionObserver_) {
          this.intersectionObserver_ = new IntersectionObserver(function(entries) {
            var lastEntry = entries[entries.length - 1];
            _this2.onViewportCallback_(lastEntry);
          });
          this.intersectionObserver_.observe(this.baseElement_.element);
        }
        if (!this.fireInOb_) {
          this.fireInOb_ = new IntersectionObserver(function(entries) {
            var lastEntry = entries[entries.length - 1];
            _this2.sendElementIntersection_(lastEntry);
          });
        }
        this.fire();
      }
    }, {
      key: "onViewportCallback_",
      value: function onViewportCallback_(entry) {
        var inViewport = entry.intersectionRatio != 0;
        if (this.inViewport_ == inViewport) {
          return;
        }
        this.inViewport_ = inViewport;
        this.sendElementIntersection_(entry);
        if (inViewport) {
          var send = this.fire.bind(this);
          var unlistenScroll = this.baseElement_.getViewport().onScroll(send);
          var unlistenChanged = this.baseElement_.getViewport().onChanged(send);
          this.unlistenViewportChanges_ = function() {
            unlistenScroll();
            unlistenChanged();
          };
        } else {
          this.unlistenOnOutViewport_();
        }
      }
    }, {
      key: "sendElementIntersection_",
      value: function sendElementIntersection_(entry) {
        var change = intersectionEntryToJson(entry);
        if (change.rootBounds === null) {
          change.rootBounds = this.baseElement_.getViewport().getRect();
        }
        if (this.pendingChanges_.length > 0 && this.pendingChanges_[this.pendingChanges_.length - 1].time == change.time) {
          return;
        }
        this.pendingChanges_.push(change);
        if (!this.flushTimeout_) {
          this.flush_();
          this.flushTimeout_ = this.timer_.delay(this.boundFlush_, 100);
        }
      }
    }, {
      key: "flush_",
      value: function flush_() {
        this.flushTimeout_ = 0;
        if (!this.pendingChanges_.length) {
          return;
        }
        this.postMessageApi_.send(MessageType.INTERSECTION, dict({
          "changes": this.pendingChanges_
        }));
        this.pendingChanges_.length = 0;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.intersectionObserver_) {
          this.intersectionObserver_.disconnect();
          this.intersectionObserver_ = null;
        }
        if (this.fireInOb_) {
          this.fireInOb_.disconnect();
          this.fireInOb_ = null;
        }
        this.timer_.cancel(this.flushTimeout_);
        this.unlistenOnOutViewport_();
        this.postMessageApi_.destroy();
      }
    }]);
    return LegacyAdIntersectionObserverHost2;
  }();

  // src/core/dom/get-html.js
  var excludedTags = ["script", "style"];
  var allowedAmpTags = ["amp-accordion", "amp-app-banner", "amp-carousel", "amp-fit-text", "amp-form", "amp-selector", "amp-sidebar"];
  var allowedAttributes = ["action", "alt", "class", "disabled", "height", "href", "id", "name", "placeholder", "readonly", "src", "tabindex", "title", "type", "value", "width"];
  function getHtml(win, selector, attrs) {
    var root = win.document.querySelector(selector);
    var result = [];
    if (root) {
      appendToResult(root, attrs, result);
    }
    return result.join("").replace(/\s{2,}/g, " ");
  }
  function appendToResult(node, attrs, result) {
    var stack = [node];
    var allowedAttrs = attrs.filter(function(attr) {
      return allowedAttributes.includes(attr);
    });
    while (stack.length > 0) {
      node = stack.pop();
      if (isString(node)) {
        result.push(node);
      } else if (node.nodeType === Node.TEXT_NODE) {
        result.push(node.textContent);
      } else if (isElement(node) && isApplicableNode(node)) {
        appendOpenTag(node, allowedAttrs, result);
        stack.push("</" + node.tagName.toLowerCase() + ">");
        for (var child = node.lastChild; child; child = child.previousSibling) {
          stack.push(child);
        }
      }
    }
  }
  function isApplicableNode(node) {
    var tagName = node.tagName.toLowerCase();
    if (tagName.startsWith("amp-")) {
      return !!(allowedAmpTags.includes(tagName) && node.textContent);
    } else {
      return !!(!excludedTags.includes(tagName) && node.textContent);
    }
  }
  function appendOpenTag(node, attrs, result) {
    result.push("<" + node.tagName.toLowerCase());
    attrs.forEach(function(attr) {
      if (node.hasAttribute(attr)) {
        result.push(" " + attr + '="' + node.getAttribute(attr) + '"');
      }
    });
    result.push(">");
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
  function isCanary(win) {
    var _win$AMP_CONFIG;
    return !!((_win$AMP_CONFIG = win.AMP_CONFIG) != null && _win$AMP_CONFIG.canary);
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
  function getExperimentBranch(win, experimentName) {
    return win.__AMP_EXPERIMENT_BRANCHES ? win.__AMP_EXPERIMENT_BRANCHES[experimentName] : null;
  }

  // src/core/dom/fingerprint.js
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
  function domFingerprintPlain(element) {
    var ids = [];
    var level = 0;
    while (isElement(element) && level < 25) {
      var id = "";
      if (element.id) {
        id = "/" + element.id;
      }
      var nodeName = element.nodeName.toLowerCase();
      ids.push("" + nodeName + id + indexWithinParent(element));
      level++;
      element = element.parentElement;
    }
    return ids.join();
  }
  var DomFingerprint = /* @__PURE__ */ function() {
    function DomFingerprint2() {
      _classCallCheck7(this, DomFingerprint2);
    }
    _createClass6(DomFingerprint2, null, [{
      key: "generate",
      value: function generate(element) {
        return stringHash32(domFingerprintPlain(element));
      }
    }]);
    return DomFingerprint2;
  }();
  function indexWithinParent(element) {
    var nodeName = element.nodeName;
    var i = 0;
    var count2 = 0;
    var sibling = element.previousElementSibling;
    while (sibling && count2 < 25 && i < 100) {
      if (sibling.nodeName == nodeName) {
        count2++;
      }
      i++;
      sibling = sibling.previousElementSibling;
    }
    return count2 < 25 && i < 100 ? "." + count2 : "";
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
  function getConsentPolicySharedData(element, policyId) {
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getMergedSharedData(policyId);
    });
  }
  function getConsentPolicyInfo(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getConsentStringInfo(policyId);
    });
  }
  function getConsentMetadata(element, policyId) {
    if (policyId === void 0) {
      policyId = "default";
    }
    return Services.consentPolicyServiceForDocOrNull(element).then(function(consentPolicy) {
      if (!consentPolicy) {
        return null;
      }
      return consentPolicy.getConsentMetadataInfo(policyId);
    });
  }

  // ads/_config.js
  var adConfig = JSON.parse('{"_ping_":{"renderStartImplemented":true,"clientIdScope":"_PING_","consentHandlingOverride":true},"1wo":{},"24smi":{"prefetch":"https://jsn.24smi.net/smi.js","preconnect":"https://data.24smi.net"},"a8":{"prefetch":"https://statics.a8.net/amp/ad.js","renderStartImplemented":true},"a9":{"prefetch":"https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"},"accesstrade":{"prefetch":"https://h.accesstrade.net/js/amp/amp.js"},"adagio":{"prefetch":"https://js-ssl.neodatagroup.com/adagio_amp.js","preconnect":["https://ad-aws-it.neodatagroup.com","https://tracker.neodatagroup.com"],"renderStartImplemented":true},"adblade":{"prefetch":"https://web.adblade.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.adblade.com","https://static.adblade.com"],"renderStartImplemented":true},"adbutler":{"prefetch":"https://servedbyadbutler.com/app.js"},"adform":{},"adfox":{"prefetch":"https://yastatic.net/pcode/adfox/loader.js","renderStartImplemented":true},"adgeneration":{"prefetch":"https://i.socdm.com/sdk/js/adg-script-loader.js"},"adglare":{"renderStartImplemented":true},"adhese":{"renderStartImplemented":true},"adincube":{"renderStartImplemented":true},"adition":{},"adman":{},"admanmedia":{"renderStartImplemented":true},"admixer":{"renderStartImplemented":true,"preconnect":["https://inv-nets.admixer.net","https://cdn.admixer.net"]},"adnuntius":{"prefetch":"https://cdn.adnuntius.com/adn.js","renderStartImplemented":true},"adocean":{"consentHandlingOverride":true},"adop":{},"adpicker":{"renderStartImplemented":true},"adplugg":{"prefetch":"https://www.adplugg.com/serve/js/ad.js","renderStartImplemented":true},"adpon":{"prefetch":"https://ad.adpon.jp/amp.js","clientIdScope":"AMP_ECID_ADPON"},"adpushup":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":"https://cdn.adpushup.com"},"adreactor":{},"adsensor":{"prefetch":"https://wfpscripts.webspectator.com/amp/adsensor-amp.js","clientIdScope":"amp_ecid_adensor","renderStartImplemented":true},"adservsolutions":{},"adsloom":{"clientIdScope":"AMP_ECID_ADSLOOM"},"adsnative":{"prefetch":"https://static.adsnative.com/static/js/render.v1.js","preconnect":"https://api.adsnative.com"},"adspeed":{"preconnect":"https://g.adspeed.net","renderStartImplemented":true},"adspirit":{},"adstir":{"prefetch":"https://js.ad-stir.com/js/adstir_async.js","preconnect":"https://ad.ad-stir.com"},"adstyle":{"prefetch":"https://widgets.ad.style/amp.js","preconnect":["https://w.ad.style"]},"adtech":{"prefetch":"https://s.aolcdn.com/os/ads/adsWrapper3.js","preconnect":["https://mads.at.atwola.com","https://aka-cdn.adtechus.com"]},"adtelligent":{"preconnect":["https://s.adtelligent.com"],"renderStartImplemented":true},"adthrive":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js"],"preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"adunity":{"preconnect":["https://content.adunity.com"],"renderStartImplemented":true},"aduptech":{"prefetch":"https://s.d.adup-tech.com/jsapi","preconnect":["https://d.adup-tech.com","https://m.adup-tech.com","https://v.adup-tech.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"adventive":{"preconnect":["https://ads.adventive.com","https://amp.adventivedev.com"],"renderStartImplemented":true},"adverline":{"prefetch":"https://ads.adverline.com/richmedias/amp.js","preconnect":["https://adnext.fr"],"renderStartImplemented":true},"adverticum":{},"advertserve":{"renderStartImplemented":true},"adyoulike":{"consentHandlingOverride":true,"prefetch":"https://fo-static.omnitagjs.com/amp.js","renderStartImplemented":true},"adzerk":{},"affiliateb":{"prefetch":"https://track.affiliate-b.com/amp/a.js","renderStartImplemented":true},"aja":{"prefetch":["https://cdn.as.amanad.adtdp.com/sdk/asot-amp.js","https://cdn.as.amanad.adtdp.com/sdk/asot-v2.js"],"preconnect":["https://ad.as.amanad.adtdp.com"]},"appvador":{"prefetch":["https://cdn.apvdr.com/js/VastAdUnit.min.js","https://cdn.apvdr.com/js/VideoAd.min.js","https://cdn.apvdr.com/js/VideoAd3PAS.min.js","https://cdn.apvdr.com/js/VideoAdAutoPlay.min.js","https://cdn.apvdr.com/js/VideoAdNative.min.js"],"renderStartImplemented":true},"amoad":{"prefetch":["https://j.amoad.com/js/a.js","https://j.amoad.com/js/n.js"],"preconnect":["https://d.amoad.com","https://i.amoad.com","https://m.amoad.com","https://v.amoad.com"]},"aniview":{"renderStartImplemented":true},"anyclip":{"prefetch":"https://player.anyclip.com/anyclip-widget/lre-widget/prod/v1/src/lre.js","preconnect":["https://trafficmanager.anyclip.com","https://lreprx-server.anyclip.com"],"renderStartImplemented":true},"appnexus":{"prefetch":"https://acdn.adnxs.com/ast/ast.js","preconnect":"https://ib.adnxs.com","renderStartImplemented":true},"atomx":{"prefetch":"https://s.ato.mx/p.js"},"beaverads":{"renderStartImplemented":true},"beopinion":{"prefetch":"https://widget.beop.io/sdk.js","preconnect":["https://t.beop.io","https://s.beop.io","https://data.beop.io"],"renderStartImplemented":true},"bidtellect":{},"blade":{"prefetch":"https://sdk.streamrail.com/blade/sr.blade.js","renderStartImplemented":true},"brainy":{},"bringhub":{"renderStartImplemented":true,"preconnect":["https://static.bh-cdn.com","https://core-api.bringhub.io"]},"broadstreetads":{"prefetch":"https://cdn.broadstreetads.com/init-2.min.js","renderStartImplemented":true},"byplay":{},"caajainfeed":{"prefetch":["https://cdn.amanad.adtdp.com/sdk/ajaamp.js"],"preconnect":["https://ad.amanad.adtdp.com"]},"capirs":{"renderStartImplemented":true},"caprofitx":{"prefetch":["https://cdn.caprofitx.com/pfx.min.js","https://cdn.caprofitx.com/tags/amp/profitx_amp.js"],"preconnect":"https://ad.caprofitx.adtdp.com"},"cedato":{"renderStartImplemented":true},"chargeads":{},"colombia":{"prefetch":"https://static.clmbtech.com/ad/commons/js/colombia-amp.js"},"conative":{"renderStartImplemented":true},"connatix":{"renderStartImplemented":true},"contentad":{},"criteo":{"prefetch":"https://static.criteo.net/js/ld/publishertag.js","preconnect":"https://cas.criteo.com"},"csa":{"prefetch":"https://www.google.com/adsense/search/ads.js"},"dable":{"preconnect":["https://static.dable.io","https://api.dable.io","https://images.dable.io"],"renderStartImplemented":true},"digiteka":{"renderStartImplemented":true},"directadvert":{"renderStartImplemented":true},"distroscale":{"preconnect":["https://c.jsrdn.com","https://s.jsrdn.com","https://i.jsrdn.com"],"renderStartImplemented":true},"dotandads":{"prefetch":"https://amp.ad.dotandad.com/dotandadsAmp.js","preconnect":"https://bal.ad.dotandad.com"},"dynad":{"preconnect":["https://t.dynad.net","https://tm.jsuol.com.br"]},"eadv":{"renderStartImplemented":true,"clientIdScope":"AMP_ECID_EADV","prefetch":["https://www.eadv.it/track/esr.min.js","https://www.eadv.it/track/ead.min.js"]},"empower":{"prefetch":"https://cdn.empower.net/sdk/amp-ad.min.js","renderStartImplemented":true},"engageya":{},"epeex":{},"eplanning":{"prefetch":"https://us.img.e-planning.net/layers/epl-amp.js"},"ezoic":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js","https://g.ezoic.net/ezoic/ampad.js"],"clientIdScope":"AMP_ECID_EZOIC","consentHandlingOverride":true},"f1e":{"prefetch":"https://img.ak.impact-ad.jp/util/f1e_amp.min.js"},"f1h":{"preconnect":"https://img.ak.impact-ad.jp","renderStartImplemented":true},"fake":{},"fake-delayed":{"renderStartImplemented":true},"feedad":{"clientIdScope":"__fa_amp","prefetch":"https://web.feedad.com/sdk/feedad-async.js","renderStartImplemented":true,"fullWidthHeightRatio":1.7777777777777777,"consentHandlingOverride":true},"felmat":{"prefetch":"https://t.felmat.net/js/fmamp.js","renderStartImplemented":true},"finative":{},"firstimpression":{"prefetch":"https://ecdn.firstimpression.io/static/js/fiamp.js","preconnect":"https://cdn.firstimpression.io","renderStartImplemented":true,"consentHandlingOverride":true},"flite":{},"fluct":{"prefetch":["https://pdn.adingo.jp/p.js"],"preconnect":["https://cdn-fluct.sh.adingo.jp","https://sh.adingo.jp","https://i.adingo.jp"]},"forkmedia":{"renderStartImplemented":true},"freewheel":{"prefetch":"https://cdn.stickyadstv.com/prime-time/fw-amp.min.js","renderStartImplemented":true},"fusion":{"prefetch":"https://assets.adtomafusion.net/fusion/latest/fusion-amp.min.js"},"genieessp":{"prefetch":"https://js.gsspcln.jp/l/amp.js"},"giraff":{"renderStartImplemented":true},"glomex":{"prefetch":"https://player.glomex.com/integration/1/amp-embed.js"},"gmossp":{"prefetch":"https://cdn.gmossp-sp.jp/ads/amp.js"},"gumgum":{"prefetch":"https://js.gumgum.com/slot.js","renderStartImplemented":true},"holder":{"prefetch":"https://i.holder.com.ua/js2/holder/ajax/ampv1.js","preconnect":"https://h.holder.com.ua","renderStartImplemented":true},"ibillboard":{},"idealmedia":{"renderStartImplemented":true,"preconnect":["https://jsc.idealmedia.io","https://servicer.idealmedia.io","https://s-img.idealmedia.io/"]},"imedia":{"prefetch":"https://i.imedia.cz/js/im3.js","renderStartImplemented":true},"imobile":{"prefetch":"https://spamp.i-mobile.co.jp/script/amp.js","preconnect":"https://spad.i-mobile.co.jp"},"imonomy":{"renderStartImplemented":true},"improvedigital":{},"industrybrains":{"prefetch":"https://web.industrybrains.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.industrybrains.com","https://static.industrybrains.com"],"renderStartImplemented":true},"inmobi":{"prefetch":"https://cf.cdn.inmobi.com/ad/inmobi.secure.js","renderStartImplemented":true},"innity":{"prefetch":"https://cdn.innity.net/admanager.js","preconnect":"https://as.innity.com","renderStartImplemented":true},"insticator":{"preconnect":"https://d3lcz8vpax4lo2.cloudfront.net","renderStartImplemented":true},"invibes":{"prefetch":"https://k.r66net.com/GetAmpLink","renderStartImplemented":true,"consentHandlingOverride":true},"iprom":{"prefetch":"https://cdn.ipromcloud.com/ipromNS.js"},"ix":{"prefetch":["https://js-sec.indexww.com/apl/amp.js"],"preconnect":"https://as-sec.casalemedia.com","renderStartImplemented":true},"jubna":{},"kargo":{},"ketshwa":{},"kiosked":{"renderStartImplemented":true},"kixer":{"prefetch":"https://cdn.kixer.com/ad/load.js","renderStartImplemented":true},"kuadio":{},"lentainform":{"renderStartImplemented":true,"preconnect":["https://jsc.lentainform.com","https://servicer.lentainform.com","https://s-img.lentainform.com"]},"ligatus":{"prefetch":"https://ssl.ligatus.com/render/ligrend.js","renderStartImplemented":true},"lockerdome":{"prefetch":"https://cdn2.lockerdomecdn.com/_js/amp.js","renderStartImplemented":true},"logly":{"preconnect":["https://l.logly.co.jp","https://cdn.logly.co.jp"],"renderStartImplemented":true},"loka":{"prefetch":"https://loka-cdn.akamaized.net/scene/amp.js","preconnect":["https://scene-front.lokaplatform.com","https://loka-materials.akamaized.net"],"renderStartImplemented":true},"luckyads":{"renderStartImplemented":true},"macaw":{"renderStartImplemented":true},"mads":{"prefetch":"https://eu2.madsone.com/js/tags.js"},"mantis-display":{"prefetch":"https://assets.mantisadnetwork.com/mantodea.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://res.cloudinary.com","https://resize.mantisadnetwork.com"]},"marfeel":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":["https://live.mrf.io","https://tpc.googlesyndication.com","https://fastlane.rubiconproject.com","https://htlb.casalemedia.com","https://prg.smartadserver.com","https://ib.adnxs.com","https://bidder.criteo.com","https://marfeel-d.openx.net","https://ice.360yield.com","https://mbid.marfeelrev.com","https://adservice.google.com"],"consentHandlingOverride":true},"mantis-recommend":{"prefetch":"https://assets.mantisadnetwork.com/recommend.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://resize.mantisadnetwork.com"]},"mediaad":{},"medianet":{"preconnect":"https://contextual.media.net","renderStartImplemented":true},"mediavine":{"prefetch":"https://amp.mediavine.com/wrapper.min.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"medyanet":{"renderStartImplemented":true},"meg":{"renderStartImplemented":true},"mgid":{"renderStartImplemented":true,"preconnect":["https://jsc.mgid.com","https://servicer.mgid.com","https://s-img.mgid.com"]},"microad":{"prefetch":"https://j.microad.net/js/camp.js","preconnect":["https://s-rtb.send.microad.jp","https://s-rtb.send.microadinc.com","https://cache.send.microad.jp","https://cache.send.microadinc.com","https://deb.send.microad.jp"]},"miximedia":{"renderStartImplemented":true},"mixpo":{"prefetch":"https://cdn.mixpo.com/js/loader.js","preconnect":["https://player1.mixpo.com","https://player2.mixpo.com"]},"monetizer101":{"renderStartImplemented":true},"mox":{"prefetch":["https://ad.mox.tv/js/amp.min.js","https://ad.mox.tv/mox/mwayss_invocation.min.js"],"renderStartImplemented":true},"my6sense":{"renderStartImplemented":true},"myfinance":{"preconnect":["https://a.myfidevs.io","https://static.myfinance.com","https://www.myfinance.com"],"renderStartImplemented":true,"clientIdScope":"AMP_ECID_GOOGLE"},"myoffrz":{"renderStartImplemented":true},"mytarget":{"prefetch":"https://ad.mail.ru/static/ads-async.js","renderStartImplemented":true},"mywidget":{"preconnect":"https://likemore-fe.go.mail.ru","prefetch":"https://likemore-go.imgsmail.ru/widget_amp.js","renderStartImplemented":true},"nativeroll":{"prefetch":"https://cdn01.nativeroll.tv/js/seedr-player.min.js"},"nativery":{"preconnect":"https://cdn.nativery.com"},"nativo":{"prefetch":"https://s.ntv.io/serve/load.js"},"navegg":{"renderStartImplemented":true},"nend":{"prefetch":"https://js1.nend.net/js/amp.js","preconnect":["https://output.nend.net","https://img1.nend.net"]},"netletix":{"preconnect":["https://call.netzathleten-media.de"],"renderStartImplemented":true},"noddus":{"prefetch":"https://noddus.com/amp_loader.js","renderStartImplemented":true},"nokta":{"prefetch":"https://static.virgul.com/theme/mockups/noktaamp/ampjs.js","renderStartImplemented":true},"nws":{},"oblivki":{"renderStartImplemented":true},"onead":{"prefetch":"https://ad-specs.guoshipartners.com/static/js/onead-amp.min.js","renderStartImplemented":true},"onnetwork":{"renderStartImplemented":true},"openadstream":{},"openx":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"opinary":{"renderStartImplemented":true},"outbrain":{"renderStartImplemented":true,"prefetch":"https://widgets.outbrain.com/widgetAMP/outbrainAMP.min.js","preconnect":["https://odb.outbrain.com"],"consentHandlingOverride":true},"pixels":{"prefetch":"https://cdn.adsfactor.net/amp/pixels-amp.min.js","clientIdCookieName":"__AF","renderStartImplemented":true},"playstream":{"prefetch":"https://app.playstream.media/js/amp.js","renderStartImplemented":true},"plista":{},"polymorphicads":{"prefetch":"https://www.polymorphicads.jp/js/amp.js","preconnect":["https://img.polymorphicads.jp","https://ad.polymorphicads.jp"],"renderStartImplemented":true},"popin":{"renderStartImplemented":true},"postquare":{},"ppstudio":{"renderStartImplemented":true},"pressboard":{"renderStartImplemented":true},"promoteiq":{},"pubexchange":{},"pubguru":{"renderStartImplemented":true},"pubmatic":{"prefetch":"https://ads.pubmatic.com/AdServer/js/amp.js"},"pubmine":{"prefetch":["https://s.pubmine.com/head.js"],"preconnect":"https://delivery.g.switchadhub.com","renderStartImplemented":true},"puffnetwork":{"prefetch":"https://static.puffnetwork.com/amp_ad.js","renderStartImplemented":true},"pulse":{"prefetch":"https://static.pulse.mail.ru/pulse-widget-amp.js","renderStartImplemented":true},"pulsepoint":{"prefetch":"https://ads.contextweb.com/TagPublish/getjs.static.js","preconnect":"https://tag.contextweb.com"},"purch":{"prefetch":"https://ramp.purch.com/serve/creative_amp.js","renderStartImplemented":true},"quoraad":{"prefetch":"https://a.quora.com/amp_ad.js","preconnect":"https://ampad.quora.com","renderStartImplemented":true},"rakutenunifiedads":{"prefetch":"https://s-cdn.rmp.rakuten.co.jp/js/amp.js","renderStartImplemented":true},"rbinfox":{"renderStartImplemented":true},"rcmwidget":{"prefetch":"https://rcmjs.rambler.ru/static/rcmw/rcmw-amp.js","renderStartImplemented":true},"readmo":{"renderStartImplemented":true},"realclick":{"renderStartImplemented":true},"recomad":{"renderStartImplemented":true},"recreativ":{"prefetch":"https://go.rcvlink.com/static/amp.js","renderStartImplemented":true},"relap":{"renderStartImplemented":true},"relappro":{"prefetch":"https://cdn.relappro.com/adservices/amp/relappro.amp.min.js","preconnect":"https://tags.relappro.com","renderStartImplemented":true},"remixd":{"preconnect":"https://tags.remixd.com","renderStartImplemented":true},"revcontent":{"prefetch":"https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js","preconnect":["https://trends.revcontent.com","https://cdn.revcontent.com","https://img.revcontent.com"],"renderStartImplemented":true},"revjet":{"prefetch":"https://cdn.revjet.com/~cdn/JS/03/amp.js","renderStartImplemented":true},"rfp":{"prefetch":"https://js.rfp.fout.jp/rfp-amp.js","preconnect":"https://ad.rfp.fout.jp","renderStartImplemented":true},"rnetplus":{},"rubicon":{},"runative":{"prefetch":"https://cdn.run-syndicate.com/sdk/v1/n.js","renderStartImplemented":true},"sas":{"renderStartImplemented":true},"seedingalliance":{},"sekindo":{"renderStartImplemented":true},"sharethrough":{"renderStartImplemented":true},"shemedia":{"prefetch":["https://securepubads.g.doubleclick.net/tag/js/gpt.js","https://ads.shemedia.com/static/amp.js"],"preconnect":["https://partner.googleadservices.com","https://tpc.googlesyndication.com","https://ads.blogherads.com"],"renderStartImplemented":true},"sklik":{"prefetch":"https://c.imedia.cz/js/amp.js"},"slimcutmedia":{"preconnect":["https://sb.freeskreen.com","https://static.freeskreen.com","https://video.freeskreen.com"],"renderStartImplemented":true},"smartads":{"prefetch":"https://smart-ads.biz/amp.js"},"smartadserver":{"prefetch":"https://ec-ns.sascdn.com/diff/js/amp.v0.js","preconnect":"https://static.sascdn.com","renderStartImplemented":true},"smartclip":{"prefetch":"https://cdn.smartclip.net/amp/amp.v0.js","preconnect":"https://des.smartclip.net","renderStartImplemented":true},"smi2":{"renderStartImplemented":true},"smilewanted":{"prefetch":"https://prebid.smilewanted.com/amp/amp.js","preconnect":"https://static.smilewanted.com","renderStartImplemented":true},"sogouad":{"prefetch":"https://theta.sogoucdn.com/wap/js/aw.js","renderStartImplemented":true},"sortable":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://tags-cdn.deployads.com","https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"sona":{"renderStartImplemented":true},"sovrn":{"prefetch":"https://ap.lijit.com/www/sovrn_amp/sovrn_ads.js"},"speakol":{"renderStartImplemented":true},"spotx":{"preconnect":"https://js.spotx.tv","renderStartImplemented":true},"springAds":{"preconnect":["https://ib.adnxs.com"],"renderStartImplemented":true},"ssp":{"prefetch":"https://ssp.imedia.cz/static/js/ssp.js","renderStartImplemented":true,"consentHandlingOverride":true},"strossle":{"preconnect":["https://amp.spklw.com","https://widgets.sprinklecontent.com","https://images.sprinklecontent.com"]},"sunmedia":{"prefetch":"https://vod.addevweb.com/sunmedia/amp/ads/sunmedia.js","preconnect":"https://static.addevweb.com","renderStartImplemented":true},"svknative":{"renderStartImplemented":true,"prefetch":"https://widget.svk-native.ru/js/embed.js"},"swoop":{"prefetch":"https://www.swoop-amp.com/amp.js","preconnect":["https://www.swpsvc.com","https://client.swpcld.com"],"renderStartImplemented":true},"taboola":{},"tail":{"renderStartImplemented":true},"tcsemotion":{"prefetch":"https://ads.tcsemotion.com/www/delivery/amphb.js","renderStartImplemented":true},"teads":{"prefetch":"https://s8t.teads.tv/media/format/v3/teads-format.min.js","preconnect":["https://cdn2.teads.tv","https://a.teads.tv","https://t.teads.tv","https://r.teads.tv"],"consentHandlingOverride":true},"temedya":{"prefetch":["https://widget.cdn.vidyome.com/builds/loader-amp.js","https://vidyome-com.cdn.vidyome.com/vidyome/builds/widgets.js"],"renderStartImplemented":true},"torimochi":{"renderStartImplemented":true},"tracdelight":{"prefetch":"https://scripts.tracdelight.io/amp.js","renderStartImplemented":true},"triplelift":{},"trugaze":{"clientIdScope":"__tg_amp","renderStartImplemented":true},"uas":{"prefetch":"https://ads.pubmatic.com/AdServer/js/phoenix.js"},"ucfunnel":{"renderStartImplemented":true},"uzou":{"preconnect":["https://speee-ad.akamaized.net"],"renderStartImplemented":true},"unruly":{"prefetch":"https://video.unrulymedia.com/native/native-loader.js","renderStartImplemented":true},"valuecommerce":{"prefetch":"https://amp.valuecommerce.com/amp_bridge.js","preconnect":["https://ad.jp.ap.valuecommerce.com"],"renderStartImplemented":true},"vdoai":{"prefetch":"https://a.vdo.ai/core/dependencies_amp/vdo.min.js","renderStartImplemented":true},"verizonmedia":{"prefetch":"https://jac.yahoosandbox.com/amp/jac.js","preconnect":["https://jill.fc.yahoo.com"],"renderStartImplemented":true},"videointelligence":{"preconnect":"https://s.vi-serve.com","renderStartImplemented":true},"videonow":{"renderStartImplemented":true},"viralize":{"renderStartImplemented":true},"vlyby":{"prefetch":"https://cdn.vlyby.com/amp/qad/qad-outer2.js"},"vmfive":{"prefetch":"https://man.vm5apis.com/dist/adn-web-sdk.js","preconnect":["https://vawpro.vm5apis.com","https://vahfront.vm5apis.com"],"renderStartImplemented":true},"webediads":{"prefetch":"https://eu1.wbdds.com/amp.min.js","preconnect":["https://goutee.top","https://mediaathay.org.uk"],"renderStartImplemented":true},"weborama-display":{"prefetch":["https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js","https://cstatic.weborama.fr/js/advertiserv2/adperf_core_1.0.0_scrambled.js"]},"whopainfeed":{"prefetch":"https://widget.infeed.com.ar/widget/widget-amp.js"},"widespace":{},"wisteria":{"renderStartImplemented":true},"wpmedia":{"prefetch":"https://std.wpcdn.pl/wpjslib/wpjslib-amp.js","preconnect":["https://www.wp.pl","https://v.wpimg.pl"],"renderStartImplemented":true},"xlift":{"prefetch":"https://cdn.x-lift.jp/resources/common/xlift_amp.js","renderStartImplemented":true},"yahoo":{"prefetch":"https://s.yimg.com/aaq/ampad/display.js","preconnect":"https://us.adserver.yahoo.com"},"yahoofedads":{"renderStartImplemented":true},"yahoojp":{"prefetch":["https://s.yimg.jp/images/listing/tool/yads/ydn/amp/amp.js","https://yads.c.yimg.jp/js/yads.js"],"preconnect":"https://yads.yahoo.co.jp"},"yahoonativeads":{"renderStartImplemented":true},"yandex":{"prefetch":"https://an.yandex.ru/system/context_amp.js","renderStartImplemented":true},"yektanet":{"preconnect":["https://cdn.yektanet.com","https://cg-sc.yektanet.com","https://native.yektanet.com","https://nfetch.yektanet.net","https://rfetch.yektanet.net","https://scrapper.yektanet.com","https://ua.yektanet.com","https://bfetch.yektanet.com","https://mostatil.cdn.yektanet.com"],"renderStartImplemented":true},"yengo":{"renderStartImplemented":true},"yieldbot":{"prefetch":["https://cdn.yldbt.com/js/yieldbot.intent.amp.js","https://msg.yldbt.com/js/ybmsg.html"],"preconnect":"https://i.yldbt.com"},"yieldmo":{"prefetch":"https://static.yieldmo.com/ym.1.js","preconnect":["https://s.yieldmo.com","https://ads.yieldmo.com"],"renderStartImplemented":true},"yieldone":{"prefetch":"https://img.ak.impact-ad.jp/ic/pone/commonjs/yone-amp.js"},"yieldpro":{"preconnect":"https://creatives.yieldpro.eu","renderStartImplemented":true},"zedo":{"prefetch":"https://ss3.zedo.com/gecko/tag/Gecko.amp.min.js","renderStartImplemented":true},"zen":{"prefetch":"https://zen.yandex.ru/widget-loader","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"zergnet":{},"zucks":{"preconnect":["https://j.zucks.net.zimg.jp","https://sh.zucks.net","https://k.zucks.net","https://static.zucks.net.zimg.jp"]},"baidu":{"prefetch":"https://dup.baidustatic.com/js/dm.js","renderStartImplemented":true},"sulvo":{}}');

  // src/ad-cid.js
  function getAdCid(adElement) {
    var config = adConfig[adElement.element.getAttribute("type")];
    if (!config || !config["clientIdScope"]) {
      return resolvedPromise();
    }
    return getOrCreateAdCid(adElement.getAmpDoc(), config["clientIdScope"], config["clientIdCookieName"]);
  }
  function getOrCreateAdCid(ampDoc, clientIdScope, opt_clientIdCookieName, opt_timeout) {
    var timeout = isNaN(opt_timeout) || opt_timeout == null ? 1e3 : opt_timeout;
    var cidPromise = Services.cidForDoc(ampDoc).then(function(cidService) {
      if (!cidService) {
        return;
      }
      return cidService.get({
        scope: dev().assertString(clientIdScope),
        createCookieIfNotPresent: true,
        cookieName: opt_clientIdCookieName
      }, Promise.resolve(void 0)).catch(function(error) {
        dev().error("AD-CID", error);
        return void 0;
      });
    });
    return Services.timerFor(ampDoc.win).timeoutPromise(timeout, cidPromise, "cid timeout").catch(function(error) {
      dev().warn("AD-CID", error);
      return void 0;
    });
  }

  // src/core/dom/page-layout-box.js
  function getPageLayoutBoxBlocking(element) {
    var stop = element.ownerDocument.body;
    var left = 0;
    var top = 0;
    for (var n = element; n && n != stop; n = n.offsetParent) {
      left += n.offsetLeft;
      top += n.offsetTop;
    }
    var offsetHeight = element.offsetHeight, offsetWidth = element.offsetWidth;
    return layoutRectLtwh(left, top, offsetWidth, offsetHeight);
  }

  // src/service/variable-source.js
  var WAITFOR_EVENTS = {
    VIEWER_FIRST_VISIBLE: 1,
    DOCUMENT_COMPLETE: 2,
    LOAD: 3,
    LOAD_END: 4
  };
  var NAV_TIMING_WAITFOR_EVENTS = {
    "navigationStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "redirectStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "redirectEnd": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "fetchStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "domainLookupStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "domainLookupEnd": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "connectStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "secureConnectionStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "connectEnd": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "requestStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "responseStart": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "responseEnd": WAITFOR_EVENTS.VIEWER_FIRST_VISIBLE,
    "domLoading": WAITFOR_EVENTS.DOCUMENT_COMPLETE,
    "domInteractive": WAITFOR_EVENTS.DOCUMENT_COMPLETE,
    "domContentLoaded": WAITFOR_EVENTS.DOCUMENT_COMPLETE,
    "domComplete": WAITFOR_EVENTS.DOCUMENT_COMPLETE,
    "loadEventStart": WAITFOR_EVENTS.LOAD,
    "loadEventEnd": WAITFOR_EVENTS.LOAD_END
  };

  // ads/google/a4a/utils.js
  var CDN_PROXY_REGEXP = /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org((\/.*)|($))+/;
  function isGoogleAdsA4AValidEnvironment(win) {
    return supportsNativeCrypto(win) && (!!isCdnProxy(win) || getMode(win).localDev || getMode(win).test);
  }
  function supportsNativeCrypto(win) {
    return win.crypto && (win.crypto.subtle || win.crypto.webkitSubtle);
  }
  function isCdnProxy(win) {
    return CDN_PROXY_REGEXP.test(win.location.origin);
  }
  var Capability = {
    SVG_SUPPORTED: 1 << 0,
    SANDBOXING_ALLOW_TOP_NAVIGATION_BY_USER_ACTIVATION_SUPPORTED: 1 << 1,
    SANDBOXING_ALLOW_POPUPS_TO_ESCAPE_SANDBOX_SUPPORTED: 1 << 2
  };

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
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;
  function reportErrorToAnalytics(error, win) {
    if (Services.ampdocServiceFor(win).isSingleDoc()) {
      var vars = dict({
        "errorName": error.name,
        "errorMessage": error.message
      });
      triggerAnalyticsEvent(getRootElement_(win), "user-error", vars, false);
    }
  }
  function getRootElement_(win) {
    var root = Services.ampdocServiceFor(win).getSingleDoc().getRootNode();
    return dev().assertElement(root.documentElement || root.body || root);
  }

  // extensions/amp-ad/0.1/amp-ad-xorigin-iframe-handler.js
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
  var VISIBILITY_TIMEOUT = 1e4;
  var MIN_INABOX_POSITION_EVENT_INTERVAL = 100;
  var TAG2 = "amp-ad-xorigin-iframe";
  var AmpAdXOriginIframeHandler = /* @__PURE__ */ function() {
    function AmpAdXOriginIframeHandler2(baseInstance) {
      _classCallCheck8(this, AmpAdXOriginIframeHandler2);
      this.win_ = baseInstance.win;
      this.baseInstance_ = baseInstance;
      this.element_ = baseInstance.element;
      this.uiHandler_ = baseInstance.uiHandler;
      this.iframe = null;
      this.legacyIntersectionObserverApiHost_ = null;
      this.embedStateApi_ = null;
      this.inaboxPositionApi_ = null;
      this.isInaboxPositionApiInit_ = false;
      this.unlisteners_ = [];
      this.viewport_ = Services.viewportForDoc(this.baseInstance_.getAmpDoc());
      this.inViewport_ = false;
      this.sendPositionPending_ = false;
    }
    _createClass7(AmpAdXOriginIframeHandler2, [{
      key: "init",
      value: function init(iframe, opt_isA4A, opt_letCreativeTriggerRenderStart) {
        var _this = this;
        devAssert(!this.iframe, "multiple invocations of init without destroy!");
        this.iframe = iframe;
        this.iframe.setAttribute("scrolling", "no");
        if (!this.uiHandler_.isStickyAd()) {
          this.baseInstance_.applyFillContent(this.iframe);
        }
        var timer = Services.timerFor(this.baseInstance_.win);
        this.legacyIntersectionObserverApiHost_ = new LegacyAdIntersectionObserverHost(this.baseInstance_, this.iframe);
        this.embedStateApi_ = new SubscriptionApi(this.iframe, "send-embed-state", true, function() {
          return _this.sendEmbedInfo_(_this.inViewport_);
        });
        if (isExperimentOn(this.win_, "inabox-position-api") || /^adsense$/i.test(this.element_.getAttribute("type")) && !isGoogleAdsA4AValidEnvironment(this.win_)) {
          this.inaboxPositionApi_ = new SubscriptionApi(this.iframe, MessageType.SEND_POSITIONS, true, function() {
            _this.sendPosition_();
            _this.registerPosition_();
          });
        }
        listenForOncePromise(this.iframe, "entity-id", true).then(function(info) {
          _this.element_.creativeId = info.data["id"];
        });
        this.handleOneTimeRequest_(MessageType.GET_HTML, function(payload) {
          var selector = payload["selector"];
          var attributes = payload["attributes"];
          var content = "";
          if (_this.element_.hasAttribute("data-html-access-allowed")) {
            content = getHtml(_this.baseInstance_.win, selector, attributes);
          }
          return Promise.resolve(content);
        });
        this.handleOneTimeRequest_(MessageType.GET_CONSENT_STATE, function() {
          return _this.baseInstance_.getConsentState().then(function(consentState) {
            return {
              consentState
            };
          });
        });
        this.unlisteners_.push(listenFor(this.iframe, "embed-size", function(data, source, origin, event) {
          if (!!data["hasOverflow"]) {
            _this.element_.warnOnMissingOverflow = false;
          }
          _this.handleResize_(data["id"], data["height"], data["width"], source, origin, event);
        }, true, true));
        if (this.uiHandler_.isStickyAd()) {
          setStyle(iframe, "pointer-events", "none");
          this.unlisteners_.push(listenFor(this.iframe, "signal-interactive", function() {
            setStyle(iframe, "pointer-events", "auto");
          }, true, true));
        }
        this.unlisteners_.push(this.baseInstance_.getAmpDoc().onVisibilityChanged(function() {
          _this.sendEmbedInfo_(_this.inViewport_);
        }));
        this.unlisteners_.push(listenFor(this.iframe, MessageType.USER_ERROR_IN_IFRAME, function(data) {
          _this.userErrorForAnalytics_(data["message"], data["expected"] == true);
        }, true, true));
        var iframeLoadPromise = this.baseInstance_.loadPromise(this.iframe).then(function() {
          if (_this.iframe) {
            _this.iframe.readyState = "complete";
          }
          return timer.promise(10);
        });
        var _Deferred = new Deferred(), renderStartPromise = _Deferred.promise, renderStartResolve = _Deferred.resolve;
        var _Deferred2 = new Deferred(), noContentPromise = _Deferred2.promise, noContentResolve = _Deferred2.resolve;
        if (this.baseInstance_.config && this.baseInstance_.config.renderStartImplemented) {
          listenForOncePromise(this.iframe, ["render-start", "no-content"], true).then(function(info) {
            var data = info.data;
            if (data["type"] == "render-start") {
              _this.renderStartMsgHandler_(info);
              renderStartResolve();
            } else {
              _this.noContent_();
              noContentResolve();
            }
          });
        } else {
          listenForOncePromise(this.iframe, "bootstrap-loaded", true).then(function() {
            renderStartResolve();
          });
          listenForOncePromise(this.iframe, "no-content", true).then(function() {
            _this.noContent_();
            noContentResolve();
          });
        }
        listenForOncePromise(this.iframe, CommonSignals.INI_LOAD, true).then(function() {
          _this.baseInstance_.signals().signal(CommonSignals.INI_LOAD);
        });
        this.element_.appendChild(this.iframe);
        if (opt_isA4A && !opt_letCreativeTriggerRenderStart) {
          this.baseInstance_.renderStarted();
          renderStartResolve();
        } else {
          setStyle(this.iframe, "visibility", "hidden");
        }
        var triggerRenderStartPromise = opt_isA4A && opt_letCreativeTriggerRenderStart ? renderStartPromise : Promise.race([renderStartPromise, iframeLoadPromise, timer.promise(VISIBILITY_TIMEOUT)]);
        triggerRenderStartPromise.then(function() {
          _this.baseInstance_.renderStarted();
          if (_this.iframe) {
            setStyle(_this.iframe, "visibility", "");
          }
        });
        return Promise.race([iframeLoadPromise, noContentPromise]);
      }
    }, {
      key: "handleOneTimeRequest_",
      value: function handleOneTimeRequest_(requestType, getter) {
        var _this2 = this;
        this.unlisteners_.push(listenFor(this.iframe, requestType, function(info, source, origin) {
          if (!_this2.iframe) {
            return;
          }
          var messageId = info[CONSTANTS.messageIdFieldName];
          var payload = info[CONSTANTS.payloadFieldName];
          getter(payload).then(function(content) {
            var result = dict();
            result[CONSTANTS.messageIdFieldName] = messageId;
            result[CONSTANTS.contentFieldName] = content;
            postMessageToWindows(dev().assertElement(_this2.iframe), [{
              win: source,
              origin
            }], requestType + CONSTANTS.responseTypeSuffix, result, true);
          });
        }, true, false));
      }
    }, {
      key: "renderStartMsgHandler_",
      value: function renderStartMsgHandler_(info) {
        var data = getData(info);
        this.handleResize_(void 0, data["height"], data["width"], info["source"], info["origin"], info["event"]);
      }
    }, {
      key: "freeXOriginIframe",
      value: function freeXOriginIframe(opt_keep) {
        this.cleanup_();
        if (opt_keep) {
          return;
        }
        if (this.iframe) {
          removeElement(this.iframe);
          this.iframe = null;
        }
      }
    }, {
      key: "noContent_",
      value: function noContent_() {
        if (!this.iframe) {
          return;
        }
        this.freeXOriginIframe(this.iframe.name.indexOf("_master") >= 0);
        this.uiHandler_.applyNoContentUI();
      }
    }, {
      key: "cleanup_",
      value: function cleanup_() {
        this.unlisteners_.forEach(function(unlistener) {
          return unlistener();
        });
        this.unlisteners_.length = 0;
        if (this.embedStateApi_) {
          this.embedStateApi_.destroy();
          this.embedStateApi_ = null;
        }
        if (this.inaboxPositionApi_) {
          this.inaboxPositionApi_.destroy();
          this.inaboxPositionApi_ = null;
        }
        if (this.legacyIntersectionObserverApiHost_) {
          this.legacyIntersectionObserverApiHost_.destroy();
          this.legacyIntersectionObserverApiHost_ = null;
        }
      }
    }, {
      key: "handleResize_",
      value: function handleResize_(id, height, width, source, origin, event) {
        var _this3 = this;
        this.baseInstance_.getVsync().mutate(function() {
          if (!_this3.iframe) {
            return;
          }
          var iframeHeight = _this3.iframe.offsetHeight;
          var iframeWidth = _this3.iframe.offsetWidth;
          _this3.uiHandler_.updateSize(height, width, iframeHeight, iframeWidth, event).then(function(info) {
            _this3.uiHandler_.onResizeSuccess();
            _this3.sendEmbedSizeResponse_(info.success, id, info.newWidth, info.newHeight, source, origin);
          }, function() {
          });
        });
      }
    }, {
      key: "sendEmbedSizeResponse_",
      value: function sendEmbedSizeResponse_(success, id, requestedWidth, requestedHeight, source, origin) {
        if (!this.iframe) {
          return;
        }
        postMessageToWindows(this.iframe, [{
          win: source,
          origin
        }], success ? "embed-size-changed" : "embed-size-denied", dict({
          "id": id,
          "requestedWidth": requestedWidth,
          "requestedHeight": requestedHeight
        }), true);
      }
    }, {
      key: "sendEmbedInfo_",
      value: function sendEmbedInfo_(inViewport) {
        if (!this.embedStateApi_) {
          return;
        }
        this.embedStateApi_.send("embed-state", dict({
          "inViewport": inViewport,
          "pageHidden": !this.baseInstance_.getAmpDoc().isVisible()
        }));
      }
    }, {
      key: "getIframePositionPromise_",
      value: function getIframePositionPromise_() {
        var _this4 = this;
        return this.viewport_.getClientRectAsync(dev().assertElement(this.iframe)).then(function(position) {
          devAssert(position, "element clientRect should intersects with root clientRect");
          var viewport = _this4.viewport_.getRect();
          return dict({
            "targetRect": position,
            "viewportRect": viewport
          });
        });
      }
    }, {
      key: "sendPosition_",
      value: function sendPosition_() {
        var _this5 = this;
        if (this.sendPositionPending_) {
          return;
        }
        this.sendPositionPending_ = true;
        this.getIframePositionPromise_().then(function(position) {
          _this5.sendPositionPending_ = false;
          _this5.inaboxPositionApi_.send(MessageType.POSITION, position);
        });
      }
    }, {
      key: "registerPosition_",
      value: function registerPosition_() {
        var _this6 = this;
        if (this.isInaboxPositionApiInit_) {
          return;
        }
        this.isInaboxPositionApiInit_ = true;
        this.unlisteners_.push(this.viewport_.onScroll(throttle(this.win_, function() {
          _this6.getIframePositionPromise_().then(function(position) {
            _this6.inaboxPositionApi_.send(MessageType.POSITION, position);
          });
        }, MIN_INABOX_POSITION_EVENT_INTERVAL)));
        this.unlisteners_.push(this.viewport_.onResize(function() {
          _this6.getIframePositionPromise_().then(function(position) {
            _this6.inaboxPositionApi_.send(MessageType.POSITION, position);
          });
        }));
      }
    }, {
      key: "viewportCallback",
      value: function viewportCallback(inViewport) {
        this.inViewport_ = inViewport;
        this.sendEmbedInfo_(inViewport);
      }
    }, {
      key: "onLayoutMeasure",
      value: function onLayoutMeasure() {
        if (this.legacyIntersectionObserverApiHost_) {
          this.legacyIntersectionObserverApiHost_.fire();
        }
      }
    }, {
      key: "userErrorForAnalytics_",
      value: function userErrorForAnalytics_(message, expected) {
        if (typeof message != "string") {
          return;
        }
        if (expected) {
          dev().expectedError(TAG2, message);
        } else {
          var e = new Error(message);
          e.name = "3pError";
          reportErrorToAnalytics(e, this.baseInstance_.win);
        }
      }
    }]);
    return AmpAdXOriginIframeHandler2;
  }();
  AMP.AmpAdXOriginIframeHandler = AmpAdXOriginIframeHandler;

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
  var LayoutPriority = {
    CONTENT: 0,
    METADATA: 1,
    ADS: 2,
    BACKGROUND: 3
  };
  function isLayoutSizeDefined(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID || layout == Layout.INTRINSIC;
  }
  function getLengthNumeral(length) {
    var res = parseFloat(length);
    return isFiniteNumber(res) ? res : void 0;
  }

  // src/core/math/index.js
  function clamp(val, min, max) {
    devAssert2(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }

  // extensions/amp-ad/0.1/concurrent-load.js
  var LOADING_ADS_WIN_ID_ = "3pla";
  var throttlePromise_ = null;
  var throttlePromiseResolver_ = null;
  function is3pThrottled(win) {
    return !!win[LOADING_ADS_WIN_ID_];
  }
  function getAmpAdRenderOutsideViewport(element) {
    var rawValue = element.getAttribute("data-loading-strategy");
    if (rawValue == null) {
      return null;
    }
    if (rawValue == "prefer-viewability-over-views" || rawValue == "") {
      return 1.25;
    }
    var errorMessage = "Value of data-loading-strategy should be a float number in range of [0, 3], but got " + rawValue;
    var viewportNumber = user().assertNumber(parseFloat(rawValue), errorMessage);
    userAssert(viewportNumber >= 0 && viewportNumber <= 3, errorMessage);
    return viewportNumber;
  }
  function incrementLoadingAds(win, opt_loadingPromise) {
    if (win[LOADING_ADS_WIN_ID_] === void 0) {
      win[LOADING_ADS_WIN_ID_] = 0;
    }
    win[LOADING_ADS_WIN_ID_]++;
    if (!throttlePromise_) {
      var deferred = new Deferred();
      throttlePromise_ = deferred.promise;
      throttlePromiseResolver_ = deferred.resolve;
    }
    Services.timerFor(win).timeoutPromise(1e3, opt_loadingPromise).catch(function() {
    }).then(function() {
      if (!--win[LOADING_ADS_WIN_ID_]) {
        throttlePromiseResolver_();
        throttlePromise_ = null;
        throttlePromiseResolver_ = null;
      }
    });
  }

  // src/mode-object.js
  function getModeObject(opt_win) {
    return {
      localDev: getMode(opt_win).localDev,
      development: getMode(opt_win).development,
      esm: false,
      minified: getMode(opt_win).minified,
      test: getMode(opt_win).test,
      log: getMode(opt_win).log,
      version: getMode(opt_win).version,
      rtvVersion: getMode(opt_win).rtvVersion
    };
  }

  // src/iframe-attributes.js
  function getContextMetadata(parentWindow, element, sentinel, attributes) {
    var startTime = Date.now();
    var width = element.getAttribute("width");
    var height = element.getAttribute("height");
    attributes = attributes ? attributes : dict();
    attributes["width"] = getLengthNumeral(width);
    attributes["height"] = getLengthNumeral(height);
    if (element.getAttribute("title")) {
      attributes["title"] = element.getAttribute("title");
    }
    var locationHref = parentWindow.location.href;
    if (locationHref == "about:srcdoc") {
      locationHref = parentWindow.parent.location.href;
    }
    var ampdoc = Services.ampdoc(element);
    var docInfo = Services.documentInfoForDoc(element);
    var viewer = Services.viewerForDoc(element);
    var referrer = viewer.getUnconfirmedReferrerUrl();
    var layoutRect = getPageLayoutBoxBlocking(element);
    attributes["_context"] = dict({
      "ampcontextVersion": internalRuntimeVersion(),
      "ampcontextFilepath": urls.thirdParty + "/" + internalRuntimeVersion() + "/ampcontext-v0.js",
      "sourceUrl": docInfo.sourceUrl,
      "referrer": referrer,
      "canonicalUrl": docInfo.canonicalUrl,
      "pageViewId": docInfo.pageViewId,
      "location": {
        "href": locationHref
      },
      "startTime": startTime,
      "tagName": element.tagName,
      "mode": getModeObject(),
      "canary": isCanary(parentWindow),
      "hidden": !ampdoc.isVisible(),
      "initialLayoutRect": layoutRect ? {
        "left": layoutRect.left,
        "top": layoutRect.top,
        "width": layoutRect.width,
        "height": layoutRect.height
      } : null,
      "domFingerprint": DomFingerprint.generate(element),
      "experimentToggles": experimentToggles(parentWindow),
      "sentinel": sentinel
    });
    var adSrc = element.getAttribute("src");
    if (adSrc) {
      attributes["src"] = adSrc;
    }
    return attributes;
  }

  // src/core/3p-frame.js
  var getRequiredSandboxFlags = function getRequiredSandboxFlags2() {
    return [
      "allow-top-navigation-by-user-activation",
      "allow-popups-to-escape-sandbox"
    ];
  };
  var getOptionalSandboxFlags = function getOptionalSandboxFlags2() {
    return [
      "allow-forms",
      "allow-modals",
      "allow-pointer-lock",
      "allow-popups",
      "allow-same-origin",
      "allow-scripts"
    ];
  };

  // src/3p-frame.js
  var count = {};
  var overrideBootstrapBaseUrl;
  var TAG3 = "3p-frame";
  function getFrameAttributes(parentWindow, element, opt_type, opt_context) {
    var type = opt_type || element.getAttribute("type");
    userAssert(type, "Attribute type required for <amp-ad>: %s", element);
    var sentinel = generateSentinel(parentWindow);
    var attributes = dict();
    addDataAndJsonAttributes_(element, attributes);
    attributes = getContextMetadata(parentWindow, element, sentinel, attributes);
    attributes["type"] = type;
    Object.assign(attributes["_context"], opt_context);
    return attributes;
  }
  function getIframe(parentWindow, parentElement, opt_type, opt_context, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$allowFullscr = _options.allowFullscreen, allowFullscreen = _options$allowFullscr === void 0 ? false : _options$allowFullscr, initialIntersection = _options.initialIntersection;
    devAssert(parentElement["isConnected"] === void 0 || parentElement["isConnected"] === true, "Parent element must be in DOM");
    var attributes = getFrameAttributes(parentWindow, parentElement, opt_type, opt_context);
    if (initialIntersection) {
      attributes["_context"]["initialIntersection"] = initialIntersection;
    }
    var iframe = parentWindow.document.createElement("iframe");
    if (!count[attributes["type"]]) {
      count[attributes["type"]] = 0;
    }
    count[attributes["type"]] += 1;
    var ampdoc = parentElement.getAmpDoc();
    var baseUrl = getBootstrapBaseUrl(parentWindow, ampdoc);
    var host = parseUrlDeprecated(baseUrl).hostname;
    var name = JSON.stringify(dict({
      "host": host,
      "bootstrap": getBootstrapUrl(attributes["type"], parentWindow),
      "type": attributes["type"],
      "count": count[attributes["type"]],
      "attributes": attributes
    }));
    iframe.src = baseUrl;
    iframe.ampLocation = parseUrlDeprecated(baseUrl);
    iframe.name = name;
    if (attributes["width"]) {
      iframe.width = attributes["width"];
    }
    if (attributes["height"]) {
      iframe.height = attributes["height"];
    }
    if (attributes["title"]) {
      iframe.title = attributes["title"];
    }
    if (allowFullscreen) {
      iframe.setAttribute("allowfullscreen", "true");
    }
    iframe.setAttribute("scrolling", "no");
    setStyle(iframe, "border", "none");
    iframe.onload = function() {
      this.readyState = "complete";
    };
    iframe.setAttribute("allow", "sync-xhr 'none';");
    var excludeFromSandbox = ["facebook"];
    if (!excludeFromSandbox.includes(opt_type)) {
      applySandbox(iframe);
    }
    iframe.setAttribute("data-amp-3p-sentinel", attributes["_context"]["sentinel"]);
    return iframe;
  }
  function addDataAndJsonAttributes_(element, attributes) {
    var dataset = element.dataset;
    for (var name in dataset) {
      if (!name.startsWith("vars")) {
        attributes[name] = dataset[name];
      }
    }
    var json = element.getAttribute("json");
    if (json) {
      var obj = tryParseJson(json);
      if (obj === void 0) {
        throw user().createError("Error parsing JSON in json attribute in element %s", element);
      }
      for (var key in obj) {
        attributes[key] = obj[key];
      }
    }
  }
  function getBootstrapUrl(type, win) {
    if (getMode().localDev || getMode().test) {
      var filename = getMode().minified ? "./vendor/" + type + "." : "./vendor/" + type + ".max.";
      return false ? filename + "mjs" : filename + "js";
    }
    if (isExperimentOn(win, "3p-vendor-split")) {
      return false ? urls.thirdParty + "/" + internalRuntimeVersion() + "/vendor/" + type + ".mjs" : urls.thirdParty + "/" + internalRuntimeVersion() + "/vendor/" + type + ".js";
    }
    return urls.thirdParty + "/" + internalRuntimeVersion() + "/f.js";
  }
  function preloadBootstrap(win, type, ampdoc, preconnect) {
    var url = getBootstrapBaseUrl(win, ampdoc);
    preconnect.preload(ampdoc, url, "document");
    preconnect.preload(ampdoc, getBootstrapUrl(type, win), "script");
  }
  function getBootstrapBaseUrl(parentWindow, ampdoc, opt_strictForUnitTest) {
    return getCustomBootstrapBaseUrl(parentWindow, ampdoc, opt_strictForUnitTest) || getDefaultBootstrapBaseUrl(parentWindow);
  }
  function getDefaultBootstrapBaseUrl(parentWindow, opt_srcFileBasename) {
    var srcFileBasename = opt_srcFileBasename || "frame";
    if (getMode().localDev || getMode().test) {
      return getDevelopmentBootstrapBaseUrl(parentWindow, srcFileBasename);
    }
    parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN = parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN || getSubDomain(parentWindow);
    return "https://" + parentWindow.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN + ("." + urls.thirdPartyFrameHost + "/" + internalRuntimeVersion() + "/") + (srcFileBasename + ".html");
  }
  function getDevelopmentBootstrapBaseUrl(parentWindow, srcFileBasename) {
    return overrideBootstrapBaseUrl || getAdsLocalhost(parentWindow) + "/dist.3p/" + (getMode().minified ? internalRuntimeVersion() + "/" + srcFileBasename : "current/" + srcFileBasename + ".max") + ".html";
  }
  function getAdsLocalhost(win) {
    var adsUrl = urls.thirdParty;
    if (adsUrl == "https://3p.ampproject.net") {
      adsUrl = "http://ads.localhost";
    }
    return adsUrl + ":" + (win.location.port || win.parent.location.port);
  }
  function getSubDomain(win) {
    return "d-" + getRandom(win);
  }
  function getRandom(win) {
    var rand;
    if (win.crypto && win.crypto.getRandomValues) {
      var uint32array = new Uint32Array(2);
      win.crypto.getRandomValues(uint32array);
      rand = String(uint32array[0]) + uint32array[1];
    } else {
      rand = String(win.Math.random()).substr(2) + "0";
    }
    return rand;
  }
  function getCustomBootstrapBaseUrl(parentWindow, ampdoc, opt_strictForUnitTest) {
    var meta = ampdoc.getMetaByName("amp-3p-iframe-src");
    if (!meta) {
      return null;
    }
    var url = assertHttpsUrl(meta, 'meta[name="amp-3p-iframe-src"]');
    userAssert(url.indexOf("?") == -1, "3p iframe url must not include query string %s in element %s.", url, meta);
    var parsed = parseUrlDeprecated(url);
    userAssert(parsed.hostname == "localhost" && !opt_strictForUnitTest || parsed.origin != parseUrlDeprecated(parentWindow.location.href).origin, "3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.", url, parsed.origin, meta);
    return url + "?" + internalRuntimeVersion();
  }
  function applySandbox(iframe) {
    if (!iframe.sandbox || !iframe.sandbox.supports) {
      return;
    }
    var requiredFlags = getRequiredSandboxFlags();
    for (var i = 0; i < requiredFlags.length; i++) {
      var flag = requiredFlags[i];
      if (!iframe.sandbox.supports(flag)) {
        dev().info(TAG3, "Iframe doesn't support %s", flag);
        return;
      }
    }
    iframe.sandbox = requiredFlags.join(" ") + " " + getOptionalSandboxFlags().join(" ");
  }
  function generateSentinel(parentWindow) {
    var windowDepth = 0;
    for (var win = parentWindow; win && win != win.parent; win = win.parent) {
      windowDepth++;
    }
    return String(windowDepth) + "-" + getRandom(parentWindow);
  }

  // extensions/amp-ad/0.1/amp-ad-3p-impl.js
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
  var TAG_3P_IMPL = "amp-ad-3p-impl";
  var MIN_FULL_WIDTH_HEIGHT = 100;
  var MAX_FULL_WIDTH_HEIGHT = 500;
  var AmpAd3PImpl = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpAd3PImpl2, _AMP$BaseElement);
    var _super = _createSuper(AmpAd3PImpl2);
    function AmpAd3PImpl2(element) {
      var _this;
      _classCallCheck9(this, AmpAd3PImpl2);
      _this = _super.call(this, element);
      _this.iframe_ = null;
      _this.config = null;
      _this.uiHandler = null;
      _this.xOriginIframeHandler_ = null;
      _this.placeholder_ = null;
      _this.fallback_ = null;
      _this.isInFixedContainer_ = false;
      _this.iframeLayoutBox_ = null;
      _this.unlistenViewportChanges_ = null;
      _this.unlisteners_ = [];
      _this.intersectionObserver_ = null;
      _this.container_ = void 0;
      _this.layoutPromise_ = null;
      _this.type_ = void 0;
      _this.isFullWidthAligned_ = false;
      _this.isFullWidthRequested_ = false;
      _this.initialIntersectionPromise_ = null;
      return _this;
    }
    _createClass8(AmpAd3PImpl2, [{
      key: "getLayoutPriority",
      value: function getLayoutPriority() {
        var isPWA = !this.element.getAmpDoc().isSingleDoc();
        return isPWA ? LayoutPriority.METADATA : LayoutPriority.ADS;
      }
    }, {
      key: "renderOutsideViewport",
      value: function renderOutsideViewport() {
        if (is3pThrottled(this.win)) {
          return false;
        }
        var elementCheck = getAmpAdRenderOutsideViewport(this.element);
        return elementCheck !== null ? elementCheck : _get(_getPrototypeOf(AmpAd3PImpl2.prototype), "renderOutsideViewport", this).call(this);
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "getResource",
      value: function getResource() {
        return this.element.getResources().getResourceForElement(this.element);
      }
    }, {
      key: "getConsentPolicy",
      value: function getConsentPolicy() {
        var type = this.element.getAttribute("type");
        var config = adConfig[type];
        if (config && config["consentHandlingOverride"]) {
          return null;
        }
        return _get(_getPrototypeOf(AmpAd3PImpl2.prototype), "getConsentPolicy", this).call(this);
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.type_ = this.element.getAttribute("type");
        var upgradeDelayMs = Math.round(this.getResource().getUpgradeDelayMs());
        dev().info(TAG_3P_IMPL, "upgradeDelay " + this.type_ + ": " + upgradeDelayMs);
        this.placeholder_ = this.getPlaceholder();
        this.fallback_ = this.getFallback();
        this.config = adConfig[this.type_];
        userAssert(this.config, 'Type "' + this.type_ + '" is not supported in amp-ad');
        this.uiHandler = new AmpAdUIHandler(this);
        this.isFullWidthRequested_ = this.shouldRequestFullWidth_();
        if (this.isFullWidthRequested_) {
          return this.attemptFullWidthSizeChange_();
        }
        var asyncIntersection = getExperimentBranch(this.win, ADS_INITIAL_INTERSECTION_EXP.id) === ADS_INITIAL_INTERSECTION_EXP.experiment;
        this.initialIntersectionPromise_ = asyncIntersection ? measureIntersection(this.element) : Promise.resolve(this.element.getIntersectionChangeEntry());
      }
    }, {
      key: "shouldRequestFullWidth_",
      value: function shouldRequestFullWidth_() {
        var hasFullWidth = this.element.hasAttribute("data-full-width");
        if (!hasFullWidth) {
          return false;
        }
        userAssert(this.element.getAttribute("width") == "100vw", 'Ad units with data-full-width must have width="100vw".');
        userAssert(!!this.config.fullWidthHeightRatio, "Ad network does not support full width ads.");
        dev().info(TAG_3P_IMPL, "#${this.getResource().getId()} Full width requested");
        return true;
      }
    }, {
      key: "preconnectCallback",
      value: function preconnectCallback(opt_onLayout) {
        var _this2 = this;
        var preconnect = Services.preconnectFor(this.win);
        preloadBootstrap(this.win, this.type_, this.getAmpDoc(), preconnect);
        if (typeof this.config.prefetch == "string") {
          preconnect.preload(this.getAmpDoc(), this.config.prefetch, "script");
        } else if (this.config.prefetch) {
          this.config.prefetch.forEach(function(p) {
            preconnect.preload(_this2.getAmpDoc(), p, "script");
          });
        }
        if (typeof this.config.preconnect == "string") {
          preconnect.url(this.getAmpDoc(), this.config.preconnect, opt_onLayout);
        } else if (this.config.preconnect) {
          this.config.preconnect.forEach(function(p) {
            preconnect.url(_this2.getAmpDoc(), p, opt_onLayout);
          });
        }
        var src = this.element.getAttribute("src");
        if (src) {
          preconnect.url(this.getAmpDoc(), src);
        }
      }
    }, {
      key: "onLayoutMeasure",
      value: function onLayoutMeasure() {
        var _this3 = this;
        this.isInFixedContainer_ = !isAdPositionAllowed(this.element, this.win);
        if (this.container_ === void 0) {
          this.container_ = getAdContainer(this.element);
        }
        this.measureIframeLayoutBox_();
        if (this.xOriginIframeHandler_) {
          this.xOriginIframeHandler_.onLayoutMeasure();
        }
        if (this.isFullWidthRequested_ && !this.isFullWidthAligned_) {
          this.isFullWidthAligned_ = true;
          var layoutBox = this.getLayoutBox();
          this.getVsync().run({
            measure: function measure(state) {
              state.direction = computedStyle(_this3.win, _this3.element)["direction"];
            },
            mutate: function mutate(state) {
              if (state.direction == "rtl") {
                setStyle(_this3.element, "marginRight", layoutBox.left, "px");
              } else {
                setStyle(_this3.element, "marginLeft", -layoutBox.left, "px");
              }
            }
          }, {
            direction: ""
          });
        }
      }
    }, {
      key: "measureIframeLayoutBox_",
      value: function measureIframeLayoutBox_() {
        if (this.xOriginIframeHandler_ && this.xOriginIframeHandler_.iframe) {
          var iframeBox = this.getViewport().getLayoutRect(this.xOriginIframeHandler_.iframe);
          var box = this.getLayoutBox();
          this.iframeLayoutBox_ = moveLayoutRect(iframeBox, -box.left, -box.top);
        }
      }
    }, {
      key: "getIntersectionElementLayoutBox",
      value: function getIntersectionElementLayoutBox() {
        if (!this.xOriginIframeHandler_ || !this.xOriginIframeHandler_.iframe) {
          return _get(_getPrototypeOf(AmpAd3PImpl2.prototype), "getIntersectionElementLayoutBox", this).call(this);
        }
        var box = this.getLayoutBox();
        if (!this.iframeLayoutBox_) {
          this.measureIframeLayoutBox_();
        }
        var iframe = devAssert(this.iframeLayoutBox_);
        return moveLayoutRect(iframe, box.left, box.top);
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this4 = this;
        if (this.layoutPromise_) {
          return this.layoutPromise_;
        }
        userAssert(!this.isInFixedContainer_ || this.uiHandler.isStickyAd(), "<amp-ad> is not allowed to be placed in elements with position:fixed: %s unless it has sticky attribute", this.element);
        var consentPromise = this.getConsentState();
        var consentPolicyId = _get(_getPrototypeOf(AmpAd3PImpl2.prototype), "getConsentPolicy", this).call(this);
        var consentStringPromise = consentPolicyId ? getConsentPolicyInfo(this.element, consentPolicyId) : Promise.resolve(null);
        var consentMetadataPromise = consentPolicyId ? getConsentMetadata(this.element, consentPolicyId) : Promise.resolve(null);
        var sharedDataPromise = consentPolicyId ? getConsentPolicySharedData(this.element, consentPolicyId) : Promise.resolve(null);
        var scrollPromise = this.uiHandler.getScrollPromiseForStickyAd();
        this.layoutPromise_ = Promise.all([getAdCid(this), consentPromise, sharedDataPromise, consentStringPromise, consentMetadataPromise, scrollPromise]).then(function(consents) {
          _this4.uiHandler.maybeInitStickyAd();
          var opt_context = dict({
            "clientId": consents[0] || null,
            "container": _this4.container_,
            "initialConsentState": consents[1],
            "consentSharedData": consents[2],
            "initialConsentValue": consents[3],
            "initialConsentMetadata": consents[4]
          });
          return _this4.initialIntersectionPromise_.then(function(intersection) {
            var iframe = getIframe(toWin(_this4.element.ownerDocument.defaultView), _this4.element, _this4.type_, opt_context, {
              initialIntersection: intersectionEntryToJson(intersection)
            });
            iframe.title = _this4.element.title || "Advertisement";
            _this4.xOriginIframeHandler_ = new AmpAdXOriginIframeHandler(_this4);
            return _this4.xOriginIframeHandler_.init(iframe);
          });
        }).then(function() {
          observeWithSharedInOb(_this4.element, function(inViewport) {
            return _this4.viewportCallback_(inViewport);
          });
        });
        incrementLoadingAds(this.win, this.layoutPromise_);
        return this.layoutPromise_;
      }
    }, {
      key: "viewportCallback_",
      value: function viewportCallback_(inViewport) {
        if (this.xOriginIframeHandler_) {
          this.xOriginIframeHandler_.viewportCallback(inViewport);
        }
      }
    }, {
      key: "unlayoutOnPause",
      value: function unlayoutOnPause() {
        return true;
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        this.unlisteners_.forEach(function(unlisten) {
          return unlisten();
        });
        this.unlisteners_.length = 0;
        unobserveWithSharedInOb(this.element);
        this.layoutPromise_ = null;
        this.uiHandler.applyUnlayoutUI();
        if (this.xOriginIframeHandler_) {
          this.xOriginIframeHandler_.freeXOriginIframe();
          this.xOriginIframeHandler_ = null;
        }
        if (this.uiHandler) {
          this.uiHandler.cleanup();
        }
        return true;
      }
    }, {
      key: "getConsentState",
      value: function getConsentState() {
        var consentPolicyId = _get(_getPrototypeOf(AmpAd3PImpl2.prototype), "getConsentPolicy", this).call(this);
        return consentPolicyId ? getConsentPolicyState(this.element, consentPolicyId) : Promise.resolve(null);
      }
    }, {
      key: "attemptFullWidthSizeChange_",
      value: function attemptFullWidthSizeChange_() {
        var viewportSize = this.getViewport().getSize();
        var maxHeight = Math.min(MAX_FULL_WIDTH_HEIGHT, viewportSize.height);
        var width = viewportSize.width;
        var height = this.getFullWidthHeight_(width, maxHeight);
        return this.attemptChangeSize(height, width).then(function() {
          dev().info(TAG_3P_IMPL, "Size change accepted: " + width + "x" + height);
        }, function() {
          dev().info(TAG_3P_IMPL, "Size change rejected: " + width + "x" + height);
        });
      }
    }, {
      key: "getFullWidthHeight_",
      value: function getFullWidthHeight_(width, maxHeight) {
        if (this.element.getAttribute("data-auto-format") === ADSENSE_MCRSPV_TAG) {
          return getMatchedContentResponsiveHeightAndUpdatePubParams(width, this.element);
        }
        return clamp(Math.round(width / this.config.fullWidthHeightRatio), MIN_FULL_WIDTH_HEIGHT, maxHeight);
      }
    }]);
    return AmpAd3PImpl2;
  }(AMP.BaseElement);

  // extensions/amp-ad/0.1/amp-ad-custom.js
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
  var TAG_AD_CUSTOM = "amp-ad-custom";
  var ampCustomadXhrPromises = {};
  var ampCustomadFullUrls = null;
  var AmpAdCustom = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpAdCustom2, _AMP$BaseElement);
    var _super = _createSuper2(AmpAdCustom2);
    function AmpAdCustom2(element) {
      var _this;
      _classCallCheck10(this, AmpAdCustom2);
      _this = _super.call(this, element);
      _this.url_ = null;
      _this.slot_ = null;
      _this.uiHandler = null;
      return _this;
    }
    _createClass9(AmpAdCustom2, [{
      key: "getLayoutPriority",
      value: function getLayoutPriority() {
        return LayoutPriority.CONTENT;
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.url_ = this.element.getAttribute("data-url");
        this.slot_ = this.element.getAttribute("data-slot");
        userAssert(this.slot_ === null || this.slot_.match(/^[0-9a-z]+$/), "custom ad slot should be alphanumeric: " + this.slot_);
        var urlService = Services.urlForDoc(this.element);
        userAssert(this.url_ && urlService.isSecure(this.url_), "custom ad url must be an HTTPS URL");
        this.uiHandler = new AmpAdUIHandler(this);
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this2 = this;
        var fullUrl = this.getFullUrl_();
        var responsePromise = ampCustomadXhrPromises[fullUrl] || Services.xhrFor(this.win).fetchJson(fullUrl).then(function(res) {
          return res.json();
        });
        if (this.slot_ !== null) {
          ampCustomadXhrPromises[fullUrl] = responsePromise;
        }
        return responsePromise.then(function(data) {
          var templateData = data;
          if (_this2.slot_ !== null) {
            templateData = hasOwn(data, _this2.slot_) ? data[_this2.slot_] : null;
          }
          if (!templateData || typeof templateData != "object") {
            _this2.uiHandler.applyNoContentUI();
            return;
          }
          templateData = _this2.handleTemplateData_(templateData);
          _this2.renderStarted();
          try {
            Services.templatesForDoc(_this2.element).findAndRenderTemplate(_this2.element, templateData).then(function(renderedElement) {
              removeChildren(_this2.element);
              _this2.element.appendChild(renderedElement);
              _this2.signals().signal(CommonSignals.INI_LOAD);
            });
          } catch (e) {
            _this2.uiHandler.applyNoContentUI();
          }
        });
      }
    }, {
      key: "handleTemplateData_",
      value: function handleTemplateData_(templateData) {
        if (childElementByTag(this.element, "template")) {
          return templateData;
        }
        userAssert(templateData["templateId"], "TemplateId not specified");
        userAssert(templateData["data"] && typeof templateData["data"] == "object", "Template data not specified");
        this.element.setAttribute("template", templateData["templateId"]);
        if (templateData["vars"] && typeof templateData["vars"] == "object") {
          var vars = templateData["vars"];
          var keys = Object.keys(vars);
          for (var i = 0; i < keys.length; i++) {
            var attrName = "data-vars-" + keys[i];
            try {
              this.element.setAttribute(attrName, vars[keys[i]]);
            } catch (e) {
              this.user().error(TAG_AD_CUSTOM, "Fail to set attribute: ", e);
            }
          }
        }
        return templateData["data"];
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        this.uiHandler.applyUnlayoutUI();
        return true;
      }
    }, {
      key: "getFullUrl_",
      value: function getFullUrl_() {
        if (this.slot_ === null) {
          return userAssert(this.url_);
        }
        if (ampCustomadFullUrls === null) {
          ampCustomadFullUrls = {};
          var slots = {};
          var body = closestAncestorElementBySelector(this.element, "BODY");
          var elements = body.querySelectorAll("amp-ad[type=custom]");
          for (var index = 0; index < elements.length; index++) {
            var elem = elements[index];
            var url = elem.getAttribute("data-url");
            var slotId = elem.getAttribute("data-slot");
            if (slotId !== null) {
              if (!(url in slots)) {
                slots[url] = [];
              }
              slots[url].push(encodeURIComponent(slotId));
            }
          }
          for (var baseUrl in slots) {
            ampCustomadFullUrls[baseUrl] = addParamToUrl(baseUrl, "ampslots", slots[baseUrl].join(","));
          }
        }
        return ampCustomadFullUrls[this.url_];
      }
    }]);
    return AmpAdCustom2;
  }(AMP.BaseElement);

  // build/amp-ad-0.1.css.js
  var CSS2 = `amp-ad iframe,amp-embed iframe{border:0!important;margin:0!important;padding:0!important;position:relative}.i-amphtml-ad-default-holder{position:absolute;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:hsla(0,0%,78%,0.05)}.i-amphtml-ad-default-holder:after{content:"Ad";content:attr(data-ad-holder-text);background-color:transparent;border-radius:2px;color:#696969;font-size:10px;line-height:1;font-family:Arial,sans-serif;padding:3px 4px 1px;border:1px solid #696969}amp-ad[sticky]{visibility:hidden;-ms-flex-align:center;align-items:center}amp-ad[type=adsense],amp-ad[type=doubleclick]{direction:ltr}amp-ad[data-a4a-upgrade-type=amp-ad-network-adsense-impl]>iframe,amp-ad[data-a4a-upgrade-type=amp-ad-network-doubleclick-impl]>iframe{min-height:0;min-width:0}amp-ad[data-a4a-upgrade-type=amp-ad-network-doubleclick-impl][height=fluid]>iframe{height:100%!important;width:100%!important;position:relative}amp-ad[data-a4a-upgrade-type=amp-ad-network-doubleclick-impl][height=fluid]{width:100%!important}amp-ad .amp-ad-close-button{position:absolute;visibility:visible;width:28px;height:28px;right:0;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31 352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}amp-ad .amp-ad-close-button:before{position:absolute;content:"";top:-20px;right:0;left:-20px;bottom:0}amp-ad[sticky=bottom-right] .amp-ad-close-button,amp-ad[sticky=bottom] .amp-ad-close-button{top:-28px}amp-ad[sticky=top] .amp-ad-close-button{transform:rotate(270deg);bottom:-28px}[dir=rtl] amp-ad .amp-ad-close-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] amp-ad .amp-ad-close-button:before{right:-20px;left:0}amp-ad-sticky-padding{display:block;width:100%!important;background:#fff;height:4px;max-height:5px!important;overflow-x:hidden;overflow-y:hidden;z-index:12}amp-ad[sticky]{z-index:11;position:fixed;overflow:visible!important;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}amp-ad[sticky=top]{width:100%!important;background:#fff;padding-bottom:5px}amp-ad[sticky=bottom]{width:100%!important;padding-bottom:env(safe-area-inset-bottom,0px);background:#fff;bottom:0;padding-top:5px}amp-ad[sticky=bottom-right]{bottom:0;right:0}
/*# sourceURL=/extensions/amp-ad/0.1/amp-ad.css*/`;

  // ads/_a4a-config.js
  var a4aRegistry;
  function getA4ARegistry() {
    if (!a4aRegistry) {
      a4aRegistry = map({
        "adsense": function adsense() {
          return true;
        },
        "adzerk": function adzerk() {
          return true;
        },
        "doubleclick": function doubleclick() {
          return true;
        },
        "fake": function fake() {
          return true;
        },
        "nws": function nws() {
          return true;
        },
        "valueimpression": function valueimpression() {
          return true;
        }
      });
    }
    return a4aRegistry;
  }

  // extensions/amp-ad/0.1/amp-ad.js
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
  function networkImplementationTag(type) {
    return "amp-ad-network-" + type + "-impl";
  }
  var AmpAd = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits3(AmpAd2, _AMP$BaseElement);
    var _super = _createSuper3(AmpAd2);
    function AmpAd2() {
      _classCallCheck11(this, AmpAd2);
      return _super.apply(this, arguments);
    }
    _createClass10(AmpAd2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(unusedLayout) {
        return true;
      }
    }, {
      key: "upgradeCallback",
      value: function upgradeCallback() {
        var _this = this;
        var a4aRegistry2 = getA4ARegistry();
        var consentId = this.element.getAttribute("data-consent-notification-id");
        var consent = consentId ? Services.userNotificationManagerForDoc(this.element).then(function(service) {
          return service.get(consentId);
        }) : resolvedPromise();
        var type = this.element.getAttribute("type");
        return consent.then(function() {
          var isCustom = type === "custom";
          userAssert(isCustom || hasOwn(adConfig, type) || hasOwn(a4aRegistry2, type), 'Unknown ad type "' + type + '"');
          if (isCustom) {
            return new AmpAdCustom(_this.element);
          }
          _this.win.ampAdSlotIdCounter = _this.win.ampAdSlotIdCounter || 0;
          var slotId = _this.win.ampAdSlotIdCounter++;
          return new Promise(function(resolve) {
            _this.getVsync().mutate(function() {
              _this.element.setAttribute("data-amp-slot-index", slotId);
              var useRemoteHtml = _this.element.getAmpDoc().getMetaByName("amp-3p-iframe-src");
              if (!a4aRegistry2[type] || !a4aRegistry2[type](_this.win, _this.element, useRemoteHtml)) {
                return resolve(new AmpAd3PImpl(_this.element));
              }
              var extensionTagName = networkImplementationTag(type);
              _this.element.setAttribute("data-a4a-upgrade-type", extensionTagName);
              resolve(Services.extensionsFor(_this.win).loadElementClass(extensionTagName).then(function(ctor) {
                return new ctor(_this.element);
              }).catch(function(error) {
                var TAG4 = _this.element.tagName;
                _this.user().error(TAG4, "Unable to load ad implementation for type ", type, ", falling back to 3p, error: ", error);
                return new AmpAd3PImpl(_this.element);
              }));
            });
          });
        });
      }
    }]);
    return AmpAd2;
  }(AMP.BaseElement);
  AMP.extension("amp-ad", "0.1", function(AMP2) {
    AMP2.registerElement("amp-ad", AmpAd, CSS2);
    AMP2.registerElement("amp-embed", AmpAd);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-ad-0.1.max.js.map
