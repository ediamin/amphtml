(() => {
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
  var isArray = Array.isArray;

  // src/core/types/index.js
  function isFiniteNumber(value) {
    return typeof value === "number" && isFinite(value);
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
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;

  // src/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getData(event) {
    return event.data;
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

  // src/core/data-structures/promise.js
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
    });
  }

  // src/video-iframe-integration.js
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
  var TAG = "<amp-video-iframe>";
  var DOCS_URL = "https://go.amp.dev/c/amp-video-iframe";
  var __AMP__ = "__AMP__VIDEO_IFRAME__";
  function userAssert(shouldBeTrueish) {
    if (!shouldBeTrueish) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      throw new Error("[" + TAG + "] " + args.join(" ") + " " + DOCS_URL);
    }
    return shouldBeTrueish;
  }
  var validMethods = ["pause", "play", "mute", "unmute", "fullscreenenter", "fullscreenexit", "showcontrols", "hidecontrols"];
  function getVideoJs(win, opt_initializer) {
    return userAssert(opt_initializer || win.videojs, "Video.JS not imported or initializer undefined.");
  }
  var AmpVideoIntegration = /* @__PURE__ */ function() {
    function AmpVideoIntegration2(win) {
      var _this = this;
      _classCallCheck(this, AmpVideoIntegration2);
      this.isAmpVideoIntegration_ = true;
      this.callCounter_ = 0;
      this.callbacks_ = {};
      this.win_ = win;
      this.methods_ = {};
      this.listenToOnce_ = once(function() {
        listenTo(_this.win_, function(e) {
          return _this.onMessage_(e);
        });
      });
      this.muted_ = false;
      this.usedListenToHelper_ = false;
      this.getMetadataOnce_ = once(function() {
        return tryParseJson(_this.win_.name);
      });
    }
    _createClass(AmpVideoIntegration2, [{
      key: "getMetadata",
      value: function getMetadata() {
        return this.getMetadataOnce_();
      }
    }, {
      key: "method",
      value: function method(name, callback) {
        userAssert(validMethods.indexOf(name) > -1, "Invalid method " + name + ".");
        var wrappedCallback = name == "play" || name == "pause" ? this.safePlayOrPause_(callback) : callback;
        this.methods_[name] = wrappedCallback;
        this.listenToOnce_();
      }
    }, {
      key: "onMessage_",
      value: function onMessage_(data) {
        var id = data["id"];
        if (isFiniteNumber(id) && this.callbacks_[id]) {
          this.handleResponse_(id, data["args"]);
          return;
        }
        if (data["event"] == "method") {
          this.maybeExecute_(data["method"]);
        }
      }
    }, {
      key: "handleResponse_",
      value: function handleResponse_(id, args) {
        var callback = this.callbacks_[id];
        callback(args);
        delete this.callbacks_[id];
      }
    }, {
      key: "maybeExecute_",
      value: function maybeExecute_(method) {
        if (!(method in this.methods_)) {
          return;
        }
        this.methods_[method]();
      }
    }, {
      key: "listenTo",
      value: function listenTo2(type, opt_obj, opt_initializer) {
        var _this2 = this;
        userAssert(!this.usedListenToHelper_, "`listenTo` is meant to be used once per page.");
        var types = {
          "jwplayer": function jwplayer() {
            userAssert(!opt_initializer, "listenTo('jwplayer', opt_instance) does not take an initializer.");
            _this2.listenToJwPlayer_(_this2.getJwplayer_(opt_obj));
          },
          "videojs": function videojs() {
            _this2.listenToVideoJs_(userAssert(opt_obj, "listenTo('videojs', element) expects a second argument"), opt_initializer);
          }
        };
        userAssert(types[type.toLowerCase()], "Invalid listener type [" + type + "].", "Valid types are [" + Object.keys(types).join(", ") + "]")();
        this.usedListenToHelper_ = true;
      }
    }, {
      key: "getJwplayer_",
      value: function getJwplayer_(opt_player) {
        if (opt_player) {
          userAssert(opt_player.on, "listenTo('jwplayer', myjwplayer) takes a jwplayer instance as ", "second argument");
          return opt_player;
        }
        return userAssert(this.win_.jwplayer, "listenTo('jwplayer') expects a global jwplayer() in window.")();
      }
    }, {
      key: "listenToJwPlayer_",
      value: function listenToJwPlayer_(player) {
        var _arguments = arguments, _this3 = this;
        ["error", "setupError"].forEach(function(e) {
          player.on(e, function() {
            userAssert.apply(null, [false].concat(_arguments));
            _this3.postEvent("error");
          });
        });
        ["adSkipped", "adComplete", "adError"].forEach(function(e) {
          player.on(e, function() {
            return _this3.postEvent("ad_end");
          });
        });
        player.on("adStarted", function() {
          return _this3.postEvent("ad_start");
        });
        var redispatchAs = {
          "play": "playing",
          "ready": "canplay",
          "pause": "pause"
        };
        Object.keys(redispatchAs).forEach(function(e) {
          player.on(e, function() {
            return _this3.postEvent(redispatchAs[e]);
          });
        });
        player.on("volume", function(e) {
          return _this3.onVolumeChange_(e.volume);
        });
        this.method("play", function() {
          return player.play();
        });
        this.method("pause", function() {
          return player.pause();
        });
        this.method("mute", function() {
          return player.setMute(true);
        });
        this.method("unmute", function() {
          return player.setMute(false);
        });
        this.method("showcontrols", function() {
          return player.setControls(true);
        });
        this.method("hidecontrols", function() {
          return player.setControls(false);
        });
        this.method("fullscreenenter", function() {
          return player.setFullscreen(true);
        });
        this.method("fullscreenexit", function() {
          return player.setFullscreen(false);
        });
      }
    }, {
      key: "listenToVideoJs_",
      value: function listenToVideoJs_(element, opt_initializer) {
        var _this4 = this;
        var initializer = getVideoJs(this.win_, opt_initializer);
        var player = initializer(element);
        player.ready(function() {
          var canplay = "canplay";
          ["playing", "pause", "ended"].forEach(function(e) {
            player.on(e, function() {
              return _this4.postEvent(e);
            });
          });
          if (player.readyState() >= 3) {
            _this4.postEvent(canplay);
          } else {
            player.on(canplay, function() {
              return _this4.postEvent(canplay);
            });
          }
          listen(element, "volumechange", function() {
            return _this4.onVolumeChange_(player.volume());
          });
          _this4.method("play", function() {
            return player.play();
          });
          _this4.method("pause", function() {
            return player.pause();
          });
          _this4.method("mute", function() {
            return player.muted(true);
          });
          _this4.method("unmute", function() {
            return player.muted(false);
          });
          _this4.method("showcontrols", function() {
            return player.controls(true);
          });
          _this4.method("hidecontrols", function() {
            return player.controls(false);
          });
          _this4.method("fullscreenenter", function() {
            return player.requestFullscreen();
          });
          _this4.method("fullscreenexit", function() {
            return player.exitFullscreen();
          });
        });
      }
    }, {
      key: "onVolumeChange_",
      value: function onVolumeChange_(newVolume) {
        if (newVolume < 0.01) {
          this.muted_ = true;
          this.postEvent("muted");
          return;
        }
        if (this.muted_) {
          this.muted_ = false;
          this.postEvent("unmuted");
        }
      }
    }, {
      key: "safePlayOrPause_",
      value: function safePlayOrPause_(callback) {
        return function() {
          try {
            tryResolve(function() {
              return callback();
            });
          } catch (e) {
          }
        };
      }
    }, {
      key: "postEvent",
      value: function postEvent(event) {
        this.postToParent_(dict({
          "event": event
        }));
      }
    }, {
      key: "postAnalyticsEvent",
      value: function postAnalyticsEvent(eventType, opt_vars) {
        this.postToParent_(dict({
          "event": "analytics",
          "analytics": {
            "eventType": eventType,
            "vars": opt_vars
          }
        }));
      }
    }, {
      key: "postToParent_",
      value: function postToParent_(data, opt_callback) {
        var id = this.callCounter_++;
        var completeData = _extends({
          id
        }, data);
        if (!getMode(this.win_).test && this.win_.parent) {
          this.win_.parent.postMessage(completeData, "*");
        }
        if (opt_callback) {
          this.callbacks_[id] = opt_callback;
        }
        return id;
      }
    }, {
      key: "getIntersection",
      value: function getIntersection(callback) {
        this.getFromHostForTesting_("getIntersection", callback);
      }
    }, {
      key: "getConsentData",
      value: function getConsentData(callback) {
        this.getFromHostForTesting_("getConsentData", callback);
      }
    }, {
      key: "getFromHostForTesting_",
      value: function getFromHostForTesting_(method, callback) {
        this.listenToOnce_();
        return this.postToParent_(dict({
          "method": method
        }), callback);
      }
    }]);
    return AmpVideoIntegration2;
  }();
  function listenTo(win, onMessage) {
    listen(win, "message", function(e) {
      var message = tryParseJson(getData(e));
      if (!message) {
        return;
      }
      onMessage(message);
    });
  }
  function adopt(global) {
    userAssert(!global[__AMP__], "video-iframe-integration-v0.js should only be included once.");
    global[__AMP__] = true;
    global.__AMP_REPORT_ERROR = console.error.bind(console);
    var integration = new AmpVideoIntegration(global);
    var callbacks = global.AmpVideoIframe = global.AmpVideoIframe || [];
    callbacks.push = function(callback) {
      return callback(integration);
    };
    callbacks.forEach(callbacks.push);
  }
  if (!getMode(self).test) {
    adopt(self);
  }
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=video-iframe-integration.js.map
