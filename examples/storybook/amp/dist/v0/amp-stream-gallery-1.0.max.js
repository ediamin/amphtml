(self.AMP=self.AMP||[]).push({n:"amp-stream-gallery",ev:"1.0",l:false,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
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
  function devAssertElement(shouldBeElement, opt_message) {
    if (isMinifiedMode()) {
      return shouldBeElement;
    }
    devAssertDceCheck();
    return assertElement(devAssert, shouldBeElement, opt_message);
  }

  // src/core/constants/action-constants.js
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

  // extensions/amp-base-carousel/1.0/component.jss.js
  var _classes = {
    carousel: "carousel-f3d75e0",
    scrollContainer: "scroll-container-f3d75e0",
    hideScrollbar: "hide-scrollbar-f3d75e0",
    horizontalScroll: "horizontal-scroll-f3d75e0",
    verticalScroll: "vertical-scroll-f3d75e0",
    slideElement: "slide-element-f3d75e0",
    thumbnails: "thumbnails-f3d75e0",
    startAlign: "start-align-f3d75e0",
    centerAlign: "center-align-f3d75e0",
    enableSnap: "enable-snap-f3d75e0",
    disableSnap: "disable-snap-f3d75e0",
    slideSizing: "slide-sizing-f3d75e0",
    arrow: "arrow-f3d75e0",
    ltr: "ltr-f3d75e0",
    rtl: "rtl-f3d75e0",
    arrowPrev: "arrow-prev-f3d75e0",
    arrowNext: "arrow-next-f3d75e0",
    arrowDisabled: "arrow-disabled-f3d75e0",
    insetArrow: "inset-arrow-f3d75e0",
    outsetArrow: "outset-arrow-f3d75e0",
    defaultArrowButton: "default-arrow-button-f3d75e0",
    arrowBaseStyle: "arrow-base-style-f3d75e0",
    arrowFrosting: "arrow-frosting-f3d75e0",
    arrowBackdrop: "arrow-backdrop-f3d75e0",
    arrowBackground: "arrow-background-f3d75e0",
    arrowIcon: "arrow-icon-f3d75e0"
  };
  var $carousel = "carousel-f3d75e0";
  var $scrollContainer = "scroll-container-f3d75e0";
  var $hideScrollbar = "hide-scrollbar-f3d75e0";
  var $horizontalScroll = "horizontal-scroll-f3d75e0";
  var $verticalScroll = "vertical-scroll-f3d75e0";
  var $arrow = "arrow-f3d75e0";
  var $ltr = "ltr-f3d75e0";
  var $rtl = "rtl-f3d75e0";
  var $arrowPrev = "arrow-prev-f3d75e0";
  var $arrowNext = "arrow-next-f3d75e0";
  var $arrowDisabled = "arrow-disabled-f3d75e0";
  var $insetArrow = "inset-arrow-f3d75e0";
  var $outsetArrow = "outset-arrow-f3d75e0";
  var $defaultArrowButton = "default-arrow-button-f3d75e0";
  var $arrowBaseStyle = "arrow-base-style-f3d75e0";
  var $arrowFrosting = "arrow-frosting-f3d75e0";
  var $arrowBackdrop = "arrow-backdrop-f3d75e0";
  var $arrowBackground = "arrow-background-f3d75e0";
  var $arrowIcon = "arrow-icon-f3d75e0";
  var useStyles = function useStyles2() {
    return _classes;
  };
  var CSS2 = ".carousel-f3d75e0{-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-container-f3d75e0{width:100%;height:100%;display:-ms-flexbox;display:flex;outline:none;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:nowrap;flex-wrap:nowrap;box-sizing:content-box!important;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.hide-scrollbar-f3d75e0{scrollbar-width:none}.hide-scrollbar-f3d75e0::-webkit-scrollbar{display:none;box-sizing:content-box!important}.horizontal-scroll-f3d75e0{overflow-x:auto;overflow-y:hidden;-ms-touch-action:pan-x pinch-zoom;touch-action:pan-x pinch-zoom;-ms-flex-direction:row;flex-direction:row;scroll-snap-type:x mandatory;scroll-snap-type-x:mandatory}.horizontal-scroll-f3d75e0.hide-scrollbar-f3d75e0{padding-bottom:20px}.vertical-scroll-f3d75e0{overflow-x:hidden;-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom;-ms-flex-direction:column;flex-direction:column;scroll-snap-type:y mandatory;scroll-snap-type-y:mandatory}.slide-element-f3d75e0{display:-ms-flexbox;display:flex;overflow:hidden;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.enable-snap-f3d75e0{scroll-snap-stop:always}.enable-snap-f3d75e0.start-align-f3d75e0{scroll-snap-align:start}.enable-snap-f3d75e0.center-align-f3d75e0{scroll-snap-align:center}.disable-snap-f3d75e0{scroll-snap-stop:none;scroll-snap-align:none;scroll-snap-coordinate:none}.slide-sizing-f3d75e0>::slotted(*),.slide-sizing-f3d75e0>:first-child{margin:0!important;max-width:100%;box-sizing:border-box!important;max-height:100%;-ms-flex-negative:0!important;flex-shrink:0!important}.slide-sizing-f3d75e0>::slotted(*){width:100%}.slide-sizing-f3d75e0.thumbnails-f3d75e0{padding:0px 4px}.arrow-f3d75e0{top:50%;display:-ms-flexbox;display:flex;z-index:1;-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;pointer-events:auto;-ms-flex-pack:justify;justify-content:space-between}.arrow-f3d75e0.ltr-f3d75e0{transform:translateY(-50%)}.arrow-f3d75e0.rtl-f3d75e0{transform:scaleX(-1) translateY(-50%)}.arrow-f3d75e0.arrow-next-f3d75e0.rtl-f3d75e0,.arrow-f3d75e0.arrow-prev-f3d75e0.ltr-f3d75e0{left:0}.arrow-f3d75e0.arrow-next-f3d75e0.ltr-f3d75e0,.arrow-f3d75e0.arrow-prev-f3d75e0.rtl-f3d75e0{right:0}.arrow-disabled-f3d75e0{pointer-events:none}.arrow-disabled-f3d75e0.inset-arrow-f3d75e0{opacity:0}.arrow-disabled-f3d75e0.outset-arrow-f3d75e0{opacity:0.5}.inset-arrow-f3d75e0{padding:12px;position:absolute}.outset-arrow-f3d75e0{top:50%;height:100%;position:relative;transform:translateY(-50%);-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;border-radius:50%;pointer-events:auto;background-size:24px 24px}.outset-arrow-f3d75e0.arrow-prev-f3d75e0{margin-inline-end:10px;margin-inline-start:4px}.outset-arrow-f3d75e0.arrow-next-f3d75e0{margin-inline-end:4px;margin-inline-start:10px}.default-arrow-button-f3d75e0{color:#fff;width:36px;border:none;height:36px;stroke:currentColor;display:-ms-flexbox;display:flex;outline:none;padding:0;position:relative;transition:stroke 200ms;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:transparent}.default-arrow-button-f3d75e0:hover:not([disabled]){color:#222}.default-arrow-button-f3d75e0:active:not([disabled]){transition-duration:0ms}.default-arrow-button-f3d75e0:hover:not([disabled]) .arrow-background-f3d75e0{background-color:hsla(0,0%,100%,0.8)}.default-arrow-button-f3d75e0:active:not([disabled]) .arrow-background-f3d75e0{background-color:#fff;transition-duration:0ms}.default-arrow-button-f3d75e0:focus{border:1px solid #000;box-shadow:0 0 0 1pt #fff;border-radius:50%}.arrow-base-style-f3d75e0{top:0;left:0;width:100%;height:100%;position:absolute;border-radius:50%}.arrow-frosting-f3d75e0{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.arrow-backdrop-f3d75e0{opacity:0.5;-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8)}.arrow-background-f3d75e0{box-shadow:inset 0 0 0px 1px rgba(0,0,0,0.08),0 1px 4px 1px rgba(0,0,0,0.2);transition:background-color 200ms;background-color:rgba(0,0,0,0.3)}.arrow-icon-f3d75e0{width:24px;height:24px;position:relative}";

  // extensions/amp-stream-gallery/1.0/component.jss.js
  var $arrow2 = "arrow-214fab8";
  var $arrowPrev2 = "arrow-prev-214fab8";
  var $arrowNext2 = "arrow-next-214fab8";
  var $extraSpace = "extra-space-214fab8";
  var $gallery = "gallery-214fab8";
  var $insetArrow2 = "inset-arrow-214fab8";
  var $outsetArrow2 = "outset-arrow-214fab8";
  var CSS3 = ".arrow-214fab8{border:none;outline:none;z-index:1;position:relative;box-shadow:0px 2px 6px 0px rgba(0,0,0,.4);transition:opacity 200ms ease-in;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);background-size:24px 24px;background-color:rgba(255,255,255,0.6);background-repeat:no-repeat;background-position:50%}.gallery-214fab8{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1}.gallery-214fab8.extra-space-214fab8{-ms-flex-pack:center;justify-content:center}.inset-arrow-214fab8{width:40px;height:40px;margin:-12px;padding:8px;-ms-flex-negative:0;flex-shrink:0}.inset-arrow-214fab8.arrow-prev-214fab8{border-radius:0px 4px 4px 0px}.inset-arrow-214fab8.arrow-next-214fab8{border-radius:4px 0px 0px 4px}.outset-arrow-214fab8{width:32px;height:32px;margin:2px;padding:4px;-ms-flex-negative:0;flex-shrink:0;border-radius:50%;pointer-events:auto}";

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
    var h3, p3, _3, k4, b3, m3, w4, A4 = i3 && i3.__k || f, P3 = A4.length;
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
        I(n2, k4, _3 = _3 || r, t3, o3, e3, c3, s3, a3), b3 = k4.__e, (p3 = k4.ref) && _3.ref != p3 && (w4 || (w4 = []), _3.ref && w4.push(_3.ref, null, k4), w4.push(p3, k4.__c || b3, k4)), b3 != null ? (m3 == null && (m3 = b3), typeof k4.type == "function" && k4.__k != null && k4.__k === _3.__k ? k4.__d = s3 = g(k4, s3, n2) : s3 = x(n2, k4, _3, A4, b3, s3), a3 || u3.type !== "option" ? typeof u3.type == "function" && (u3.__d = s3) : n2.value = "") : s3 && _3.__e == s3 && s3.parentNode != n2 && (s3 = d(_3));
      }
    }
    for (u3.__e = m3, h3 = P3; h3--; ) {
      A4[h3] != null && (typeof u3.type == "function" && A4[h3].__e != null && A4[h3].__e == u3.__d && (u3.__d = d(i3, h3 + 1)), L(A4[h3], A4[h3]));
    }
    if (w4)
      for (h3 = 0; h3 < w4.length; h3++) {
        z(w4[h3], w4[++h3], w4[++h3]);
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
    var a3, v3, h3, d3, _3, k4, b3, g3, w4, x4, A4, P3 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (s3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = n.__b) && a3(u3);
    try {
      n:
        if (typeof P3 == "function") {
          if (g3 = u3.props, w4 = (a3 = P3.contextType) && t3[a3.__c], x4 = a3 ? w4 ? w4.props.value : a3.__ : t3, i3.__c ? b3 = (v3 = u3.__c = i3.__c).__ = v3.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = v3 = new P3(g3, x4) : (u3.__c = v3 = new p(g3, x4), v3.constructor = P3, v3.render = M), w4 && w4.sub(v3), v3.props = g3, v3.state || (v3.state = {}), v3.context = x4, v3.__n = t3, h3 = v3.__d = true, v3.__h = []), v3.__s == null && (v3.__s = v3.state), P3.getDerivedStateFromProps != null && (v3.__s == v3.state && (v3.__s = c({}, v3.__s)), c(v3.__s, P3.getDerivedStateFromProps(g3, v3.__s))), d3 = v3.props, _3 = v3.state, h3)
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
  function l3(n2) {
    return o2 = 1, p2(w2, n2);
  }
  function p2(n2, r3, o3) {
    var i3 = m2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
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
  function _2(n2, t3, u3) {
    o2 = 6, h(function() {
      typeof n2 == "function" ? n2(t3()) : n2 && (n2.current = t3());
    }, u3 == null ? u3 : u3.concat(n2));
  }
  function d2(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function A2(n2, t3) {
    return o2 = 8, d2(function() {
      return n2;
    }, t3);
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
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
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
  function Fragment(props) {
    return y(props);
  }
  function createContext(value) {
    return q(value, void 0);
  }
  function useState(initial) {
    return l3(initial);
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
  function useCallback(cb, opt_deps) {
    return A2(cb, opt_deps);
  }
  function useImperativeHandle(ref, create, opt_deps) {
    return _2(ref, create, opt_deps);
  }

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
    devAssert(prop.deps.length == 0 || prop.compute);
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

  // src/core/types/function/index.js
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
    var s3 = services[id];
    if (!s3.obj) {
      devAssert2(s3.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert2(s3.context, "Service " + id + " registered without context.");
      s3.obj = new s3.ctor(s3.context);
      devAssert2(s3.obj, "Service " + id + " constructed to null.");
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
    for (var i3 = 0; i3 < vendorPrefixes.length; i3++) {
      var propertyName = vendorPrefixes[i3] + titleCase;
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
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
  function isLayoutSizeDefined(layout) {
    return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID || layout == Layout.INTRINSIC;
  }

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
        devAssert(setter);
        devAssert(value !== void 0);
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
        devAssert(setter);
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
        devAssert(this.isConnected_());
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
            oldParentContextNode.values.unsubscribe(prop, devAssert(pingParent));
          }
          if (newParentContextNode) {
            newParentContextNode.values.subscribe(prop, devAssert(pingParent));
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
        devAssert(!root || root.isRoot);
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
            removeItem(devAssert(oldParent.children), this);
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
      devAssert(isElement(slot), "Element expected");
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
      devAssert(isElement(slot), "Element expected");
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
    devAssert(/^[\w-]+$/.test(name), 'Expected "' + name + '" to be a CSS name composed of alphanumerics and hyphens.');
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
  function isRTL(doc) {
    var dir = doc.body.getAttribute("dir") || doc.documentElement.getAttribute("dir") || "ltr";
    return dir == "rtl";
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e3) {
    }
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
      _get = function _get3(target2, property2, receiver2) {
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf4(o4, p4) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o4) {
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
        return devAssert(this.currentRef_);
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
            devAssert(!isDetached, 'The AMP element cannot be rendered in detached mode when "props" are configured with "children" property.');
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
          devAssert(hasOwn(api, key), 'Inconsistent Bento API shape: imperative API gained a "%s" key for %s', key, this.element);
        }
        var oldKeys = Object.keys(api);
        for (var _i = 0; _i < oldKeys.length; _i++) {
          var _key2 = oldKeys[_i];
          devAssert(hasOwn(current, _key2), 'Inconsistent Bento API shape: imperative API lost a "%s" key for %s', _key2, this.element);
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
    devAssert(false, "Must provide Component");
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
        devAssert(clone || Ctor["usesShadowDom"]);
        var parsedSlotProps = {};
        parsePropDefs(Ctor, parsedSlotProps, slotProps, childElement, mediaQueryProps);
        if (single) {
          props[name] = createSlot(childElement, childElement.getAttribute("slot") || "i-amphtml-" + name, parsedSlotProps, as);
        } else {
          var list = props[name] || (props[name] = []);
          devAssert(!as);
          list.push(clone ? createShallowVNodeCopy(childElement) : createSlot(childElement, childElement.getAttribute("slot") || "i-amphtml-" + name + "-" + childIdGenerator(), parsedSlotProps));
        }
      }
    }
    for (var _name in propDefs) {
      var _def = propDefs[_name];
      devAssert(!!_def.attr + !!_def.attrs + !!_def.attrPrefix + !!_def.selector + !!_def.passthrough + !!_def.passthroughNonEmpty <= 1, ONE_OF_ERROR_MESSAGE);
      var value = void 0;
      if (_def.passthrough) {
        devAssert(Ctor["usesShadowDom"]);
        value = [createElement(Slot, {
          loading: Loading.LAZY
        })];
      } else if (_def.passthroughNonEmpty) {
        devAssert(Ctor["usesShadowDom"]);
        value = element.getRealChildNodes().every(IS_EMPTY_TEXT_NODE) ? null : [createElement(Slot, {
          loading: Loading.LAZY
        })];
      } else if (_def.attr) {
        value = element.getAttribute(_def.attr);
        if (_def.media && value != null) {
          value = mediaQueryProps.resolveListQuery(String(value));
        }
      } else if (_def.parseAttrs) {
        devAssert(_def.attrs);
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
        if (m3.attributeName == def.attr || def.attrs && def.attrs.includes(devAssert(m3.attributeName)) || matchesAttrPrefix(m3.attributeName, def.attrPrefix)) {
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

  // src/core/math/index.js
  function mod(a3, b3) {
    return a3 > 0 && b3 > 0 ? a3 % b3 : (a3 % b3 + b3) % b3;
  }

  // extensions/amp-base-carousel/1.0/dimensions.js
  var Axis = {
    X: 0,
    Y: 1
  };
  var Alignment = {
    START: "start",
    CENTER: "center"
  };
  var Orientation = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical"
  };
  function getDimension(axis, el) {
    var _el$getBoundingClient = el.getBoundingClientRect(), bottom = _el$getBoundingClient.bottom, height = _el$getBoundingClient.height, left = _el$getBoundingClient.left, right = _el$getBoundingClient.right, top = _el$getBoundingClient.top, width = _el$getBoundingClient.width;
    return {
      start: Math.round(axis == Axis.X ? left : top),
      end: Math.round(axis == Axis.X ? right : bottom),
      length: Math.round(axis == Axis.X ? width : height)
    };
  }
  function getCenter(axis, el) {
    var _getDimension = getDimension(axis, el), end = _getDimension.end, start = _getDimension.start;
    return (start + end) / 2;
  }
  function getStart(axis, el) {
    var _getDimension2 = getDimension(axis, el), start = _getDimension2.start;
    return start;
  }
  function getPosition(axis, alignment, el) {
    return alignment == Alignment.START ? getStart(axis, el) : getCenter(axis, el);
  }
  function overlaps(axis, el, position) {
    var _getDimension3 = getDimension(axis, el), end = _getDimension3.end, start = _getDimension3.start;
    return start <= position && position < end;
  }
  function getPercentageOffsetFromAlignment(axis, alignment, container, el) {
    var elPos = getPosition(axis, alignment, el);
    var containerPos = getPosition(axis, alignment, container);
    var _getDimension4 = getDimension(axis, el), elLength = _getDimension4.length;
    return (elPos - containerPos) / elLength;
  }
  function findOverlappingIndex(axis, alignment, container, children, startIndex) {
    var pos = getPosition(axis, alignment, container);
    if (overlaps(axis, children[startIndex], pos)) {
      return startIndex;
    }
    for (var i3 = 1; i3 <= children.length / 2; i3++) {
      var nextIndex = mod(startIndex + i3, children.length);
      var prevIndex = mod(startIndex - i3, children.length);
      if (overlaps(axis, children[nextIndex], pos)) {
        return nextIndex;
      }
      if (overlaps(axis, children[prevIndex], pos)) {
        return prevIndex;
      }
    }
  }
  function getScrollPosition(axis, el) {
    if (axis == Axis.X) {
      return el.scrollLeft;
    }
    return el.scrollTop;
  }
  function getScrollEnd(axis, el) {
    if (axis == Axis.X) {
      return el.scrollWidth;
    }
    return el.scrollHeight;
  }
  function getOffsetPosition(axis, el) {
    if (axis == Axis.X) {
      return el.offsetLeft;
    }
    return el.offetTop;
  }
  function setScrollPosition(axis, el, position) {
    if (axis == Axis.X) {
      el.scrollLeft = position;
    } else {
      el.scrollTop = position;
    }
  }
  function updateScrollPosition(axis, el, delta) {
    setScrollPosition(axis, el, getScrollPosition(axis, el) + delta);
  }
  function scrollContainerToElement(axis, alignment, container, el, offset) {
    if (offset === void 0) {
      offset = 0;
    }
    var startAligned = alignment == Alignment.START;
    var _getDimension5 = getDimension(axis, el), length = _getDimension5.length;
    var snapOffset = startAligned ? getStart(axis, el) : getCenter(axis, el);
    var scrollOffset = startAligned ? getStart(axis, container) : getCenter(axis, container);
    var delta = Math.round(snapOffset - scrollOffset - offset * length);
    updateScrollPosition(axis, container, delta);
    var _getDimension6 = getDimension(axis, container), containerLength = _getDimension6.length;
    var canScroll = containerLength + getScrollPosition(axis, container) + delta < getScrollEnd(axis, container);
    return !!delta && canScroll;
  }

  // node_modules/obj-str/dist/obj-str.mjs
  function obj_str_default(obj) {
    var k4, cls = "";
    for (k4 in obj) {
      if (obj[k4]) {
        cls && (cls += " ");
        cls += k4;
      }
    }
    return cls;
  }

  // extensions/amp-base-carousel/1.0/arrow.js
  var _excluded = ["advance", "as", "by", "disabled", "outsetArrows", "rtl"];
  var _excluded2 = ["by", "className"];
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
  function Arrow(_ref) {
    var _objstr;
    var advance = _ref.advance, _ref$as = _ref.as, Comp = _ref$as === void 0 ? DefaultArrow : _ref$as, by = _ref.by, disabled = _ref.disabled, outsetArrows = _ref.outsetArrows, rtl = _ref.rtl, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
    var onClick = function onClick2() {
      if (!disabled) {
        advance();
      }
    };
    return createElement(Comp, _extends4({
      "aria-disabled": String(!!disabled),
      by,
      className: obj_str_default((_objstr = {}, _objstr[$arrow] = true, _objstr[$arrowDisabled] = disabled, _objstr[$arrowPrev] = by < 0, _objstr[$arrowNext] = by > 0, _objstr[$outsetArrow] = outsetArrows, _objstr[$insetArrow] = !outsetArrows, _objstr[$rtl] = rtl, _objstr[$ltr] = !rtl, _objstr)),
      disabled,
      onClick,
      outsetArrows,
      rtl
    }, rest));
  }
  function DefaultArrow(_ref2) {
    var by = _ref2.by, className = _ref2.className, rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
    return createElement("div", {
      className
    }, createElement("button", _extends4({
      "aria-label": by < 0 ? "Previous item in carousel" : "Next item in carousel",
      className: $defaultArrowButton
    }, rest), createElement("div", {
      className: $arrowBaseStyle + " " + $arrowFrosting
    }), createElement("div", {
      className: $arrowBaseStyle + " " + $arrowBackdrop
    }), createElement("div", {
      className: $arrowBaseStyle + " " + $arrowBackground
    }), createElement("svg", {
      className: $arrowIcon,
      viewBox: "0 0 24 24"
    }, createElement("path", {
      d: by < 0 ? "M14,7.4 L9.4,12 L14,16.6" : "M10,7.4 L14.6,12 L10,16.6",
      fill: "none",
      "stroke-width": "2px",
      "stroke-linejoin": "round",
      "stroke-linecap": "round"
    }))));
  }

  // extensions/amp-base-carousel/1.0/carousel-context.js
  var CarouselContext = createContext({
    slides: [],
    setSlides: function setSlides(unusedSlides) {
    }
  });

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
  var w3 = n.__b;
  n.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w3 && w3(n2);
  };
  var R = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function x3(n2) {
    function t3(t4, e3) {
      var r3 = C2({}, t4);
      return delete r3.ref, n2(r3, (e3 = t4.ref || e3) && (typeof e3 != "object" || "current" in e3) ? e3 : null);
    }
    return t3.$$typeof = R, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  var N2 = function N3(n2, t3) {
    return n2 == null ? null : w(w(n2).map(t3));
  };
  var k3 = {
    map: N2,
    forEach: N2,
    count: function count(n2) {
      return n2 ? w(n2).length : 0;
    },
    only: function only(n2) {
      var t3 = w(n2);
      if (t3.length !== 1)
        throw "Children.only";
      return t3[0];
    },
    toArray: w
  };
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
  function toChildArray(unusedChildren) {
    return k3.toArray.apply(void 0, arguments);
  }

  // src/preact/component/contain.js
  var _excluded3 = ["as", "children", "className", "contentAs", "contentClassName", "contentProps", "contentRef", "contentStyle", "layout", "paint", "size", "style", "wrapperClassName", "wrapperStyle"];
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
    var _ref$as = _ref.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref.children, className = _ref["className"], _ref$contentAs = _ref.contentAs, ContentComp = _ref$contentAs === void 0 ? "div" : _ref$contentAs, contentClassName = _ref.contentClassName, contentProps = _ref.contentProps, contentRef = _ref.contentRef, contentStyle = _ref.contentStyle, _ref$layout = _ref.layout, layout = _ref$layout === void 0 ? false : _ref$layout, _ref$paint = _ref.paint, paint = _ref$paint === void 0 ? false : _ref$paint, _ref$size = _ref.size, size = _ref$size === void 0 ? false : _ref$size, style = _ref["style"], wrapperClassName = _ref.wrapperClassName, wrapperStyle = _ref.wrapperStyle, rest = _objectWithoutPropertiesLoose2(_ref, _excluded3);
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
  var _excluded4 = ["as", "children", "className", "style", "wrapperClassName", "wrapperStyle"];
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
  function WrapperWithRef(_ref, ref) {
    var _ref$as = _ref.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref.children, className = _ref["className"], style = _ref["style"], wrapperClassName = _ref.wrapperClassName, wrapperStyle = _ref.wrapperStyle, rest = _objectWithoutPropertiesLoose3(_ref, _excluded4);
    return createElement(Comp, _extends6({}, rest, {
      ref,
      className: ((className || "") + " " + (wrapperClassName || "")).trim() || null,
      style: _extends6({}, style, wrapperStyle)
    }), children);
  }
  var Wrapper = forwardRef(WrapperWithRef);

  // src/preact/component/value-ref.js
  function useValueRef(current) {
    var valueRef = useRef(null);
    valueRef.current = current;
    return valueRef;
  }

  // extensions/amp-lightbox-gallery/1.0/context.js
  var LightboxGalleryContext = createContext({
    deregister: function deregister() {
    },
    register: function register() {
    },
    open: function open() {
    }
  });

  // extensions/amp-base-carousel/1.0/scroller.js
  var _excluded5 = ["_thumbnails", "advanceCount", "alignment", "axis", "children", "lightbox", "loop", "mixedLength", "restingIndex", "setRestingIndex", "snap", "snapBy", "visibleCount"];
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
  function _objectWithoutPropertiesLoose4(source, excluded) {
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
  var RESET_SCROLL_REFERENCE_POINT_WAIT_MS = 200;
  function ScrollerWithRef(_ref, ref) {
    var _thumbnails = _ref._thumbnails, advanceCount = _ref.advanceCount, alignment = _ref.alignment, axis = _ref.axis, children = _ref.children, lightbox = _ref.lightbox, loop = _ref.loop, mixedLength = _ref.mixedLength, restingIndex = _ref.restingIndex, setRestingIndex = _ref.setRestingIndex, snap = _ref.snap, _ref$snapBy = _ref.snapBy, snapBy = _ref$snapBy === void 0 ? 1 : _ref$snapBy, visibleCount = _ref.visibleCount, rest = _objectWithoutPropertiesLoose4(_ref, _excluded5);
    var containerRef = useRef(null);
    var pivotIndex = loop ? Math.floor(children.length / 2) : restingIndex;
    var ignoreProgrammaticScrollRef = useRef(false);
    var advance = useCallback(function(by) {
      var container = containerRef.current;
      if (!container) {
        return;
      }
      currentIndex.current = mod(currentIndex.current + by, children.length);
      scrollOffset.current = 0;
      var didScroll = scrollContainerToElement(axis, alignment, container, container.children[mod(pivotIndex + by, container.children.length)], scrollOffset.current);
      if (!didScroll) {
        setRestingIndex(currentIndex.current);
      }
    }, [alignment, axis, children.length, pivotIndex, setRestingIndex]);
    useImperativeHandle(ref, function() {
      return {
        advance,
        next: function next() {
          return advance(advanceCount);
        },
        prev: function prev() {
          return advance(-advanceCount);
        },
        get node() {
          return containerRef.current;
        }
      };
    }, [advance, advanceCount]);
    var classes = useStyles();
    var offsetRef = useRef(restingIndex);
    var scrollOffset = useRef(0);
    var _useContext = useContext(LightboxGalleryContext), openLightbox = _useContext.open;
    var slides = renderSlides({
      alignment,
      children,
      loop,
      mixedLength,
      offsetRef,
      openLightbox: lightbox && openLightbox,
      pivotIndex,
      restingIndex,
      snap,
      snapBy,
      visibleCount,
      _thumbnails
    }, classes);
    var currentIndex = useRef(restingIndex);
    var scrollToActiveSlide = useCallback(function() {
      if (!containerRef.current || !containerRef.current.children.length) {
        return;
      }
      var container = containerRef.current;
      setStyle(container, "scrollBehavior", "auto");
      ignoreProgrammaticScrollRef.current = true;
      scrollContainerToElement(axis, alignment, container, container.children[pivotIndex], scrollOffset.current);
      setStyle(container, "scrollBehavior", "smooth");
    }, [alignment, axis, pivotIndex]);
    useLayoutEffect(function() {
      if (!containerRef.current || !loop) {
        return;
      }
      var container = containerRef.current;
      if (!container.children.length) {
        return;
      }
      scrollToActiveSlide();
    }, [loop, restingIndex, scrollToActiveSlide]);
    useLayoutEffect(function() {
      if (!containerRef.current) {
        return;
      }
      var node = containerRef.current;
      if (!node) {
        return;
      }
      var win = toWin(node.ownerDocument.defaultView);
      if (!win) {
        return void 0;
      }
      var observer = new win.ResizeObserver(scrollToActiveSlide);
      observer.observe(node);
      return function() {
        return observer.disconnect();
      };
    }, [scrollToActiveSlide]);
    var debouncedResetScrollReferencePoint = useMemo(function() {
      var win = containerRef.current ? toWin(containerRef.current.ownerDocument.defaultView) : window;
      return debounce(win, function() {
        if (currentIndex.current === null || currentIndex.current === restingIndex) {
          return;
        }
        setRestingIndex(currentIndex.current);
      }, RESET_SCROLL_REFERENCE_POINT_WAIT_MS);
    }, [restingIndex, setRestingIndex]);
    var updateCurrentIndex = function updateCurrentIndex2() {
      var container = containerRef.current;
      if (!container) {
        return;
      }
      var overlappingIndex = findOverlappingIndex(axis, alignment, container, container.children, pivotIndex);
      if (!snap) {
        scrollOffset.current = getPercentageOffsetFromAlignment(axis, alignment, container, container.children[overlappingIndex]);
      }
      currentIndex.current = mod(overlappingIndex - offsetRef.current, children.length);
    };
    var handleScroll = function handleScroll2() {
      if (ignoreProgrammaticScrollRef.current) {
        ignoreProgrammaticScrollRef.current = false;
        return;
      }
      updateCurrentIndex();
      debouncedResetScrollReferencePoint();
    };
    return createElement("div", _extends7({
      ref: containerRef,
      onScroll: handleScroll,
      class: $scrollContainer + " " + $hideScrollbar + " " + (axis === Axis.X ? $horizontalScroll : $verticalScroll),
      tabindex: 0
    }, rest), slides);
  }
  var Scroller = forwardRef(ScrollerWithRef);
  Scroller.displayName = "Scroller";
  function renderSlides(_ref2, classes) {
    var _thumbnails = _ref2._thumbnails, alignment = _ref2.alignment, children = _ref2.children, loop = _ref2.loop, mixedLength = _ref2.mixedLength, offsetRef = _ref2.offsetRef, openLightbox = _ref2.openLightbox, pivotIndex = _ref2.pivotIndex, restingIndex = _ref2.restingIndex, snap = _ref2.snap, snapBy = _ref2.snapBy, visibleCount = _ref2.visibleCount;
    var length = children.length;
    var lightboxProps = openLightbox && {
      role: "button",
      tabindex: "0",
      onClick: function onClick() {
        return openLightbox();
      }
    };
    var slides = children.map(function(child, index) {
      var key = "slide-" + (child.key || index);
      return createElement("div", _extends7({
        key,
        "data-slide": index,
        class: classes.slideSizing + " " + classes.slideElement + " " + (snap && mod(index, snapBy) === 0 ? classes.enableSnap : classes.disableSnap) + " " + (alignment === Alignment.CENTER ? classes.centerAlign : classes.startAlign) + " " + (_thumbnails ? classes.thumbnails : "") + " ",
        part: "slide",
        style: {
          flex: mixedLength ? "0 0 auto" : "0 0 " + 100 / visibleCount + "%"
        }
      }, lightboxProps), child);
    });
    if (!loop) {
      return slides;
    }
    var before = [];
    var after = [];
    var shift = mod(length - restingIndex + pivotIndex, length);
    if (restingIndex <= pivotIndex) {
      for (var i3 = 0; i3 < shift; i3++) {
        before.unshift(slides.pop());
      }
    } else {
      for (var _i = 0; _i < length - shift; _i++) {
        after.push(slides.shift());
      }
    }
    offsetRef.current = before.length ? before.length : -after.length;
    return createElement(Fragment, null, before, slides, after);
  }

  // extensions/amp-lightbox/1.0/component.jss.js
  var $closeButton = "close-button-88b9dee";
  var $wrapper = "wrapper-88b9dee";
  var $content = "content-88b9dee";

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

  // extensions/amp-lightbox/1.0/component.js
  var _excluded6 = ["animation", "children", "closeButtonAs", "onAfterClose", "onAfterOpen", "onBeforeOpen"];
  function _extends8() {
    _extends8 = Object.assign || function(target) {
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
    return _extends8.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose5(source, excluded) {
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
  var ANIMATION_DURATION = 200;
  var ANIMATION_PRESETS = {
    "fade-in": [{
      opacity: 0,
      visibility: "visible"
    }, {
      opacity: 1,
      visibility: "visible"
    }],
    "fly-in-top": [{
      opacity: 0,
      transform: "translate(0,-100%)",
      visibility: "visible"
    }, {
      opacity: 1,
      transform: "translate(0, 0)",
      visibility: "visible"
    }],
    "fly-in-bottom": [{
      opacity: 0,
      transform: "translate(0, 100%)",
      visibility: "visible"
    }, {
      opacity: 1,
      transform: "translate(0, 0)",
      visibility: "visible"
    }]
  };
  var DEFAULT_CLOSE_LABEL = "Close the modal";
  var CONTENT_PROPS = {
    "part": "scroller"
  };
  function LightboxWithRef(_ref, ref) {
    var _ref$animation = _ref.animation, animation = _ref$animation === void 0 ? "fade-in" : _ref$animation, children = _ref.children, closeButtonAs = _ref.closeButtonAs, onAfterClose = _ref.onAfterClose, onAfterOpen = _ref.onAfterOpen, onBeforeOpen = _ref.onBeforeOpen, rest = _objectWithoutPropertiesLoose5(_ref, _excluded6);
    var _useState = useState(false), mounted = _useState[0], setMounted = _useState[1];
    var _useState2 = useState(false), visible = _useState2[0], setVisible = _useState2[1];
    var lightboxRef = useRef();
    var animationRef = useValueRef(animation);
    var onBeforeOpenRef = useValueRef(onBeforeOpen);
    var onAfterCloseRef = useValueRef(onAfterClose);
    var onAfterOpenRef = useValueRef(onAfterOpen);
    useImperativeHandle(ref, function() {
      return {
        open: function open2() {
          onBeforeOpenRef.current == null ? void 0 : onBeforeOpenRef.current();
          setMounted(true);
          setVisible(true);
        },
        close: function close() {
          return setVisible(false);
        }
      };
    }, [onBeforeOpenRef]);
    useLayoutEffect(function() {
      var element = lightboxRef.current;
      if (!element) {
        return;
      }
      var animation2;
      setStyle(element, "visibility", visible ? "hidden" : "visible");
      if (visible) {
        var postVisibleAnim = function postVisibleAnim2() {
          setStyle(element, "opacity", 1);
          setStyle(element, "visibility", "visible");
          tryFocus(element);
          onAfterOpenRef.current == null ? void 0 : onAfterOpenRef.current();
        };
        if (!element.animate) {
          postVisibleAnim();
          return;
        }
        animation2 = element.animate(ANIMATION_PRESETS[animationRef.current], {
          duration: ANIMATION_DURATION,
          fill: "both",
          easing: "ease-in"
        });
        animation2.onfinish = postVisibleAnim;
      } else {
        var postInvisibleAnim = function postInvisibleAnim2() {
          setStyle(element, "opacity", 0);
          setStyle(element, "visibility", "hidden");
          if (onAfterCloseRef.current) {
            onAfterCloseRef.current();
          }
          animation2 = null;
          setMounted(false);
        };
        if (!element.animate) {
          postInvisibleAnim();
          return;
        }
        animation2 = element.animate(ANIMATION_PRESETS[animationRef.current], {
          duration: ANIMATION_DURATION,
          direction: "reverse",
          fill: "both",
          easing: "ease-in"
        });
        animation2.onfinish = postInvisibleAnim;
      }
      return function() {
        if (animation2) {
          animation2.cancel();
        }
      };
    }, [visible, animationRef, onAfterCloseRef, onAfterOpenRef]);
    return mounted && createElement(ContainWrapper, _extends8({
      ref: lightboxRef,
      size: true,
      layout: true,
      paint: true,
      part: "lightbox",
      contentClassName: $content,
      wrapperClassName: $wrapper,
      contentProps: CONTENT_PROPS,
      role: "dialog",
      tabIndex: "0",
      onKeyDown: function onKeyDown(event) {
        if (event.key === Keys.ESCAPE) {
          setVisible(false);
        }
      }
    }, rest), createElement(CloseButton, {
      as: closeButtonAs,
      onClick: function onClick() {
        return setVisible(false);
      }
    }), children);
  }
  var Lightbox = forwardRef(LightboxWithRef);
  Lightbox.displayName = "Lightbox";
  function CloseButton(_ref2) {
    var onClick = _ref2.onClick, _ref2$as = _ref2.as, Comp = _ref2$as === void 0 ? ScreenReaderCloseButton : _ref2$as;
    return createElement(Comp, {
      "aria-label": DEFAULT_CLOSE_LABEL,
      onClick
    });
  }
  function ScreenReaderCloseButton(props) {
    return createElement("button", _extends8({}, props, {
      tabIndex: -1,
      className: $closeButton
    }));
  }

  // extensions/amp-lightbox-gallery/1.0/consumer.js
  var _excluded7 = ["as", "children", "enableActivation", "onClick", "render"];
  function _extends9() {
    _extends9 = Object.assign || function(target) {
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
    return _extends9.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose6(source, excluded) {
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
  var generateLightboxItemKey = sequentialIdGenerator();
  var DEFAULT_ARIA_LABEL = "Open content in a lightbox view.";
  var DEFAULT_ACTIVATION_PROPS = {
    "aria-label": DEFAULT_ARIA_LABEL,
    role: "button",
    tabIndex: "0"
  };
  function WithLightbox(_ref) {
    var _ref$as = _ref.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref.children, _ref$enableActivation = _ref.enableActivation, enableActivation = _ref$enableActivation === void 0 ? true : _ref$enableActivation, customOnClick = _ref.onClick, _ref$render = _ref.render, render2 = _ref$render === void 0 ? function() {
      return children;
    } : _ref$render, rest = _objectWithoutPropertiesLoose6(_ref, _excluded7);
    var _useState = useState(generateLightboxItemKey), genKey = _useState[0];
    var _useContext = useContext(LightboxGalleryContext), deregister2 = _useContext.deregister, open2 = _useContext.open, register2 = _useContext.register;
    useLayoutEffect(function() {
      register2(genKey, render2);
      return function() {
        return deregister2(genKey);
      };
    }, [genKey, deregister2, register2, render2]);
    var activationProps = useMemo(function() {
      return enableActivation && _extends9({}, DEFAULT_ACTIVATION_PROPS, {
        onClick: function onClick() {
          if (customOnClick) {
            customOnClick();
          }
          open2();
        }
      });
    }, [customOnClick, enableActivation, open2]);
    return createElement(Comp, _extends9({}, activationProps, rest), children);
  }

  // extensions/amp-base-carousel/1.0/component.js
  var _excluded8 = ["advanceCount", "arrowPrevAs", "arrowNextAs", "autoAdvance", "autoAdvanceCount", "autoAdvanceInterval", "autoAdvanceLoops", "children", "controls", "defaultSlide", "dir", "lightbox", "loop", "mixedLength", "onFocus", "onMouseEnter", "onSlideChange", "onTouchStart", "orientation", "outsetArrows", "snap", "snapAlign", "snapBy", "visibleCount", "_thumbnails"];
  function _extends10() {
    _extends10 = Object.assign || function(target) {
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
    return _extends10.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose7(source, excluded) {
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
  var Controls = {
    ALWAYS: "always",
    NEVER: "never",
    AUTO: "auto"
  };
  var Interaction = {
    GENERIC: 0,
    FOCUS: 1,
    MOUSE: 2,
    TOUCH: 3,
    NONE: 4
  };
  var Direction = {
    LTR: "ltr",
    RTL: "rtl",
    AUTO: "auto"
  };
  var MIN_AUTO_ADVANCE_INTERVAL = 1e3;
  function BaseCarouselWithRef(_ref, ref) {
    var _carouselContext$curr, _carouselContext$setC;
    var _ref$advanceCount = _ref.advanceCount, advanceCount = _ref$advanceCount === void 0 ? 1 : _ref$advanceCount, arrowPrevAs = _ref.arrowPrevAs, arrowNextAs = _ref.arrowNextAs, _ref$autoAdvance = _ref.autoAdvance, shouldAutoAdvance = _ref$autoAdvance === void 0 ? false : _ref$autoAdvance, _ref$autoAdvanceCount = _ref.autoAdvanceCount, autoAdvanceCount = _ref$autoAdvanceCount === void 0 ? 1 : _ref$autoAdvanceCount, _ref$autoAdvanceInter = _ref.autoAdvanceInterval, customAutoAdvanceInterval = _ref$autoAdvanceInter === void 0 ? MIN_AUTO_ADVANCE_INTERVAL : _ref$autoAdvanceInter, _ref$autoAdvanceLoops = _ref.autoAdvanceLoops, autoAdvanceLoops = _ref$autoAdvanceLoops === void 0 ? Number.POSITIVE_INFINITY : _ref$autoAdvanceLoops, children = _ref.children, _ref$controls = _ref.controls, controls = _ref$controls === void 0 ? Controls.AUTO : _ref$controls, _ref$defaultSlide = _ref.defaultSlide, defaultSlide = _ref$defaultSlide === void 0 ? 0 : _ref$defaultSlide, _ref$dir = _ref.dir, dir = _ref$dir === void 0 ? Direction.AUTO : _ref$dir, _ref$lightbox = _ref.lightbox, lightbox = _ref$lightbox === void 0 ? false : _ref$lightbox, loop = _ref.loop, _ref$mixedLength = _ref.mixedLength, mixedLength = _ref$mixedLength === void 0 ? false : _ref$mixedLength, _onFocus = _ref.onFocus, _onMouseEnter = _ref.onMouseEnter, onSlideChange = _ref.onSlideChange, _onTouchStart = _ref.onTouchStart, _ref$orientation = _ref.orientation, orientation = _ref$orientation === void 0 ? Orientation.HORIZONTAL : _ref$orientation, _ref$outsetArrows = _ref.outsetArrows, outsetArrows = _ref$outsetArrows === void 0 ? false : _ref$outsetArrows, _ref$snap = _ref.snap, snap = _ref$snap === void 0 ? true : _ref$snap, _ref$snapAlign = _ref.snapAlign, snapAlign = _ref$snapAlign === void 0 ? Alignment.START : _ref$snapAlign, _ref$snapBy = _ref.snapBy, snapBy = _ref$snapBy === void 0 ? 1 : _ref$snapBy, _ref$visibleCount = _ref.visibleCount, visibleCount = _ref$visibleCount === void 0 ? 1 : _ref$visibleCount, _ref$_thumbnails = _ref._thumbnails, _thumbnails = _ref$_thumbnails === void 0 ? false : _ref$_thumbnails, rest = _objectWithoutPropertiesLoose7(_ref, _excluded8);
    var childrenArray = useMemo(function() {
      return toChildArray(children);
    }, [children]);
    var length = childrenArray.length;
    var carouselContext = useContext(CarouselContext);
    var _useState = useState(Math.min(Math.max(defaultSlide, 0), length)), currentSlideState = _useState[0], setCurrentSlideState = _useState[1];
    var globalCurrentSlide = (_carouselContext$curr = carouselContext.currentSlide) != null ? _carouselContext$curr : currentSlideState;
    var setGlobalCurrentSlide = (_carouselContext$setC = carouselContext.setCurrentSlide) != null ? _carouselContext$setC : setCurrentSlideState;
    var currentSlide = _thumbnails ? currentSlideState : globalCurrentSlide;
    var setCurrentSlide = _thumbnails ? setCurrentSlideState : setGlobalCurrentSlide;
    var currentSlideRef = useRef(currentSlide);
    var axis = orientation == Orientation.HORIZONTAL ? Axis.X : Axis.Y;
    useLayoutEffect(function() {
      setCurrentSlide(globalCurrentSlide);
    }, [globalCurrentSlide, setCurrentSlide]);
    var setSlides2 = carouselContext.setSlides, slides = carouselContext.slides;
    var scrollRef = useRef(null);
    var containRef = useRef(null);
    var contentRef = useRef(null);
    var autoAdvanceTimesRef = useRef(0);
    var autoAdvanceInterval = useMemo(function() {
      return Math.max(customAutoAdvanceInterval, MIN_AUTO_ADVANCE_INTERVAL);
    }, [customAutoAdvanceInterval]);
    var autoAdvance = useCallback(function() {
      if (autoAdvanceTimesRef.current + visibleCount / length >= autoAdvanceLoops || interaction.current !== Interaction.NONE) {
        return false;
      }
      if (loop || currentSlideRef.current + visibleCount < length) {
        scrollRef.current.advance(autoAdvanceCount);
        autoAdvanceTimesRef.current += autoAdvanceCount / length;
      } else {
        scrollRef.current.advance(-currentSlideRef.current);
        autoAdvanceTimesRef.current = Math.ceil(autoAdvanceTimesRef.current);
      }
      return true;
    }, [autoAdvanceCount, autoAdvanceLoops, length, loop, visibleCount]);
    var _next = useCallback(function() {
      return scrollRef.current.next();
    }, []);
    var _prev = useCallback(function() {
      return scrollRef.current.prev();
    }, []);
    useEffect(function() {
      if (!shouldAutoAdvance || !containRef.current) {
        return;
      }
      var win = toWin(containRef.current.ownerDocument.defaultView);
      var interval = win.setInterval(function() {
        var autoAdvanced = autoAdvance();
        if (!autoAdvanced) {
          win.clearInterval(interval);
        }
      }, autoAdvanceInterval);
      return function() {
        return win.clearInterval(interval);
      };
    }, [autoAdvance, autoAdvanceInterval, shouldAutoAdvance]);
    var setRestingIndex = useCallback(function(index) {
      if (length <= 0 || isNaN(index)) {
        return;
      }
      index = Math.min(Math.max(index, 0), length - 1);
      setCurrentSlide(index);
      if (currentSlideRef.current !== index) {
        currentSlideRef.current = index;
        if (onSlideChange) {
          onSlideChange(index);
        }
      }
    }, [length, setCurrentSlide, onSlideChange]);
    useImperativeHandle(ref, function() {
      return {
        goToSlide: function goToSlide(index) {
          interaction.current = Interaction.GENERIC;
          setRestingIndex(index);
        },
        next: function next() {
          interaction.current = Interaction.GENERIC;
          _next();
        },
        prev: function prev() {
          interaction.current = Interaction.GENERIC;
          _prev();
        },
        get root() {
          return containRef.current;
        },
        get node() {
          return contentRef.current;
        }
      };
    }, [_next, _prev, setRestingIndex]);
    useEffect(function() {
      if (!_thumbnails && slides && slides.length !== childrenArray.length) {
        setSlides2(childrenArray);
      }
    }, [_thumbnails, childrenArray, setSlides2, slides]);
    var disableForDir = function disableForDir2(dir2) {
      if (loop) {
        return false;
      }
      if (currentSlide + dir2 < 0) {
        return true;
      }
      if (currentSlide + visibleCount + dir2 > length) {
        return true;
      }
      if (mixedLength && dir2 > 0) {
        if (!scrollRef.current) {
          return false;
        }
        var container = scrollRef.current.node;
        if (!container || !container.children.length) {
          return false;
        }
        var scrollEnd = getScrollEnd(axis, container);
        var scrollStart = getOffsetPosition(axis, container.children[currentSlide]);
        var _getDimension = getDimension(axis, container), _length = _getDimension.length;
        if (_length !== scrollEnd && _length + scrollStart >= scrollEnd) {
          return true;
        }
      }
      return false;
    };
    var interaction = useRef(Interaction.NONE);
    var hideControls = useMemo(function() {
      if (controls === Controls.ALWAYS || outsetArrows) {
        return false;
      }
      if (controls === Controls.NEVER) {
        return true;
      }
      return interaction.current === Interaction.TOUCH;
    }, [controls, outsetArrows]);
    var _useState2 = useState(dir === Direction.RTL), rtl = _useState2[0], setRtl = _useState2[1];
    useLayoutEffect(function() {
      if (!containRef.current || dir !== Direction.AUTO) {
        return;
      }
      var doc = containRef.current.ownerDocument;
      if (!doc) {
        return;
      }
      setRtl(isRTL(doc));
    }, [dir, setRtl]);
    return createElement(ContainWrapper, _extends10({
      size: true,
      layout: true,
      paint: true,
      contentStyle: {
        display: "flex",
        direction: rtl ? Direction.RTL : Direction.LTR
      },
      ref: containRef,
      onFocus: function onFocus(e3) {
        if (_onFocus) {
          _onFocus(e3);
        }
        interaction.current = Interaction.FOCUS;
      },
      onMouseEnter: function onMouseEnter(e3) {
        if (_onMouseEnter) {
          _onMouseEnter(e3);
        }
        interaction.current = Interaction.MOUSE;
      },
      onTouchStart: function onTouchStart(e3) {
        if (_onTouchStart) {
          _onTouchStart(e3);
        }
        interaction.current = Interaction.TOUCH;
      },
      tabIndex: "0",
      wrapperClassName: $carousel,
      contentAs: lightbox ? WithLightbox : "div",
      contentRef,
      contentProps: {
        enableActivation: false,
        render: function render2() {
          return children;
        }
      }
    }, rest), !hideControls && createElement(Arrow, {
      advance: _prev,
      as: arrowPrevAs,
      by: -advanceCount,
      disabled: disableForDir(-1),
      outsetArrows,
      rtl
    }), createElement(Scroller, {
      advanceCount,
      alignment: snapAlign,
      axis,
      lightbox,
      loop,
      mixedLength,
      restingIndex: currentSlide,
      setRestingIndex,
      snap,
      snapBy,
      ref: scrollRef,
      visibleCount: mixedLength ? 1 : visibleCount,
      _thumbnails
    }, childrenArray.map(function(child, index) {
      return Math.min(Math.abs(index - currentSlide), loop ? mod(length + currentSlide - index, length) : length) < Math.ceil(visibleCount * 3) || mixedLength ? createElement(WithAmpContext, {
        key: index,
        renderable: index == currentSlide,
        playable: index == currentSlide
      }, child) : createElement(Fragment, null);
    })), !hideControls && createElement(Arrow, {
      advance: _next,
      by: advanceCount,
      as: arrowNextAs,
      disabled: disableForDir(1),
      outsetArrows,
      rtl
    }));
  }
  var BaseCarousel = forwardRef(BaseCarouselWithRef);
  BaseCarousel.displayName = "BaseCarousel";

  // extensions/amp-stream-gallery/1.0/component.js
  var _excluded9 = ["arrowPrevAs", "arrowNextAs", "children", "className", "extraSpace", "maxItemWidth", "minItemWidth", "maxVisibleCount", "minVisibleCount", "outsetArrows", "peek", "slideAlign"];
  var _excluded22 = ["by", "className", "outsetArrows"];
  function _extends11() {
    _extends11 = Object.assign || function(target) {
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
    return _extends11.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose8(source, excluded) {
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
  var DEFAULT_VISIBLE_COUNT = 1;
  var OUTSET_ARROWS_WIDTH = 100;
  function StreamGalleryWithRef(props, ref) {
    var _objstr;
    var _props$arrowPrevAs = props.arrowPrevAs, arrowPrevAs = _props$arrowPrevAs === void 0 ? DefaultArrow2 : _props$arrowPrevAs, _props$arrowNextAs = props.arrowNextAs, arrowNextAs = _props$arrowNextAs === void 0 ? DefaultArrow2 : _props$arrowNextAs, children = props.children, className = props.className, extraSpace = props.extraSpace, _props$maxItemWidth = props.maxItemWidth, maxItemWidth = _props$maxItemWidth === void 0 ? Number.MAX_VALUE : _props$maxItemWidth, _props$minItemWidth = props.minItemWidth, minItemWidth = _props$minItemWidth === void 0 ? 1 : _props$minItemWidth, _props$maxVisibleCoun = props.maxVisibleCount, maxVisibleCount = _props$maxVisibleCoun === void 0 ? Number.MAX_VALUE : _props$maxVisibleCoun, _props$minVisibleCoun = props.minVisibleCount, minVisibleCount = _props$minVisibleCoun === void 0 ? 1 : _props$minVisibleCoun, outsetArrows = props.outsetArrows, _props$peek = props.peek, peek = _props$peek === void 0 ? 0 : _props$peek, _props$slideAlign = props.slideAlign, slideAlign = _props$slideAlign === void 0 ? "start" : _props$slideAlign, rest = _objectWithoutPropertiesLoose8(props, _excluded9);
    var carouselRef = useRef(null);
    var _useState = useState(DEFAULT_VISIBLE_COUNT), visibleCount = _useState[0], setVisibleCount = _useState[1];
    var measure = useCallback(function(containerWidth) {
      return getVisibleCount(maxItemWidth, minItemWidth, maxVisibleCount, minVisibleCount, children.length, outsetArrows, peek, containerWidth, carouselRef.current.node);
    }, [maxItemWidth, minItemWidth, maxVisibleCount, minVisibleCount, children.length, outsetArrows, peek]);
    useImperativeHandle(ref, function() {
      return {
        goToSlide: function goToSlide(index) {
          return carouselRef.current.goToSlide(index);
        },
        next: function next() {
          return carouselRef.current.next();
        },
        prev: function prev() {
          return carouselRef.current.prev();
        }
      };
    }, []);
    useLayoutEffect(function() {
      if (!carouselRef.current) {
        return;
      }
      var node = carouselRef.current.root;
      if (!node) {
        return;
      }
      var win = toWin(node.ownerDocument.defaultView);
      if (!win) {
        return void 0;
      }
      var observer = new win.ResizeObserver(function(entries) {
        var last = entries[entries.length - 1];
        setVisibleCount(measure(last.contentRect.width));
      });
      observer.observe(node);
      return function() {
        return observer.disconnect();
      };
    }, [measure]);
    return createElement(BaseCarousel, _extends11({
      advanceCount: Math.floor(visibleCount),
      arrowPrevAs,
      arrowNextAs,
      className: obj_str_default((_objstr = {}, _objstr[className] = !!className, _objstr[$gallery] = true, _objstr[$extraSpace] = extraSpace === "around", _objstr)),
      outsetArrows,
      snapAlign: slideAlign,
      ref: carouselRef,
      visibleCount
    }, rest), children);
  }
  var StreamGallery = forwardRef(StreamGalleryWithRef);
  StreamGallery.displayName = "StreamGallery";
  function DefaultArrow2(_ref) {
    var _objstr2;
    var by = _ref.by, className = _ref.className, outsetArrows = _ref.outsetArrows, rest = _objectWithoutPropertiesLoose8(_ref, _excluded22);
    return createElement("div", {
      className
    }, createElement("button", _extends11({
      "aria-hidden": "true",
      className: obj_str_default((_objstr2 = {}, _objstr2[$arrow2] = true, _objstr2[$arrowPrev2] = by < 0, _objstr2[$arrowNext2] = by > 0, _objstr2[$outsetArrow2] = outsetArrows, _objstr2[$insetArrow2] = !outsetArrows, _objstr2))
    }, rest), createElement("svg", {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, createElement("path", {
      d: by < 0 ? "M14,7.4 L9.4,12 L14,16.6" : "M10,7.4 L14.6,12 L10,16.6",
      fill: "none",
      stroke: "#000",
      "stroke-width": "2",
      "stroke-linejoin": "round",
      "stroke-linecap": "round"
    }))));
  }
  function getVisibleCount(maxItemWidth, minItemWidth, maxVisibleCount, minVisibleCount, slideCount, outsetArrows, peek, containerWidth, container) {
    if (!containerWidth) {
      return DEFAULT_VISIBLE_COUNT;
    }
    var items = getItemsForWidth(containerWidth, minItemWidth, peek);
    var maxVisibleSlides = Math.min(slideCount, maxVisibleCount);
    var visibleCount = Math.min(Math.max(minVisibleCount, items), maxVisibleSlides);
    var maxContainerWidth = (items > maxVisibleSlides ? maxVisibleSlides * maxItemWidth : items * maxItemWidth) + (outsetArrows ? OUTSET_ARROWS_WIDTH : 0);
    var maxWidthValue = maxContainerWidth < Number.MAX_VALUE ? maxContainerWidth + "px" : "";
    setStyle(container, "max-width", maxWidthValue);
    return visibleCount;
  }
  function getItemsForWidth(containerWidth, itemWidth, peek) {
    var availableWidth = containerWidth - peek * itemWidth;
    var fractionalItems = availableWidth / itemWidth;
    var wholeItems = Math.floor(fractionalItems);
    return Math.max(DEFAULT_VISIBLE_COUNT, wholeItems) + peek;
  }

  // extensions/amp-stream-gallery/1.0/base-element.js
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
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf4(o4, p4) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf2(o3);
  }
  var BaseElement = /* @__PURE__ */ function(_PreactBaseElement) {
    _inherits2(BaseElement2, _PreactBaseElement);
    var _super = _createSuper2(BaseElement2);
    function BaseElement2() {
      _classCallCheck9(this, BaseElement2);
      return _super.apply(this, arguments);
    }
    _createClass8(BaseElement2, [{
      key: "init",
      value: function init() {
        var _this = this;
        var element = this.element;
        return dict({
          "onSlideChange": function onSlideChange(index) {
            _this.triggerEvent(element, "slideChange", dict({
              "index": index
            }));
          }
        });
      }
    }]);
    return BaseElement2;
  }(PreactBaseElement);
  BaseElement["Component"] = StreamGallery;
  BaseElement["layoutSizeDefined"] = true;
  BaseElement["props"] = {
    "arrowPrevAs": {
      selector: '[slot="prev-arrow"]',
      single: true,
      as: true
    },
    "arrowNextAs": {
      selector: '[slot="next-arrow"]',
      single: true,
      as: true
    },
    "controls": {
      attr: "controls",
      type: "string",
      media: true
    },
    "extraSpace": {
      attr: "extra-space",
      type: "string",
      media: true
    },
    "loop": {
      attr: "loop",
      type: "boolean",
      media: true
    },
    "minItemWidth": {
      attr: "min-item-width",
      type: "number",
      media: true
    },
    "maxItemWidth": {
      attr: "max-item-width",
      type: "number",
      media: true
    },
    "maxVisibleCount": {
      attr: "max-visible-count",
      type: "number",
      media: true
    },
    "minVisibleCount": {
      attr: "min-visible-count",
      type: "number",
      media: true
    },
    "outsetArrows": {
      attr: "outset-arrows",
      type: "boolean",
      media: true
    },
    "peek": {
      attr: "peek",
      type: "number",
      media: true
    },
    "slideAlign": {
      attr: "slide-align",
      type: "string",
      media: true
    },
    "snap": {
      attr: "snap",
      type: "boolean",
      media: true
    },
    "children": {
      selector: "*",
      single: false
    }
  };
  BaseElement["usesShadowDom"] = true;
  BaseElement["shadowCss"] = CSS3 + CSS2;

  // build/amp-stream-gallery-1.0.css.js
  var CSS4 = "amp-stream-gallery{display:block;overflow:hidden;position:relative}amp-stream-gallery:not(.i-amphtml-built)>:not([placeholder]):not(.i-amphtml-svc){display:none;content-visibility:hidden}\n/*# sourceURL=/extensions/amp-stream-gallery/1.0/amp-stream-gallery.css*/";

  // src/event-helper.js
  function createCustomEvent(win, type, detail, opt_eventInit) {
    var eventInit = {
      detail
    };
    Object.assign(eventInit, opt_eventInit);
    if (typeof win.CustomEvent == "function") {
      return new win.CustomEvent(type, eventInit);
    } else {
      var e3 = win.document.createEvent("CustomEvent");
      e3.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
      return e3;
    }
  }

  // extensions/amp-stream-gallery/1.0/amp-stream-gallery.js
  function _classCallCheck10(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties9(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
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
  function _get2(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get2 = Reflect.get;
    } else {
      _get2 = function _get3(target2, property2, receiver2) {
        var base = _superPropBase2(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get2(target, property, receiver || target);
  }
  function _superPropBase2(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf3(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o3, p3) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf4(o4, p4) {
      o4.__proto__ = p4;
      return o4;
    };
    return _setPrototypeOf3(o3, p3);
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
    } catch (e3) {
      return false;
    }
  }
  function _getPrototypeOf3(o3) {
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf4(o4) {
      return o4.__proto__ || Object.getPrototypeOf(o4);
    };
    return _getPrototypeOf3(o3);
  }
  var TAG2 = "amp-stream-gallery";
  var AmpStreamGallery = /* @__PURE__ */ function(_BaseElement) {
    _inherits3(AmpStreamGallery2, _BaseElement);
    var _super = _createSuper3(AmpStreamGallery2);
    function AmpStreamGallery2() {
      _classCallCheck10(this, AmpStreamGallery2);
      return _super.apply(this, arguments);
    }
    _createClass9(AmpStreamGallery2, [{
      key: "init",
      value: function init() {
        this.registerApiAction("prev", function(api) {
          return api.prev();
        }, ActionTrust.LOW);
        this.registerApiAction("next", function(api) {
          return api.next();
        }, ActionTrust.LOW);
        this.registerApiAction("goToSlide", function(api, invocation) {
          var args = invocation.args;
          api.goToSlide(args["index"] || -1);
        }, ActionTrust.LOW);
        return _get2(_getPrototypeOf3(AmpStreamGallery2.prototype), "init", this).call(this);
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        userAssert(isExperimentOn(this.win, "bento-stream-gallery") || isExperimentOn(this.win, "bento"), 'expected global "bento" or specific "bento-stream-gallery" experiment to be enabled');
        return _get2(_getPrototypeOf3(AmpStreamGallery2.prototype), "isLayoutSupported", this).call(this, layout);
      }
    }, {
      key: "triggerEvent",
      value: function triggerEvent(element, eventName, detail) {
        var event = createCustomEvent(toWin(element.ownerDocument.defaultView), "amp-stream-gallery." + eventName, detail);
        Services.actionServiceForDoc(element).trigger(element, eventName, event, ActionTrust.HIGH);
        _get2(_getPrototypeOf3(AmpStreamGallery2.prototype), "triggerEvent", this).call(this, element, eventName, detail);
      }
    }]);
    return AmpStreamGallery2;
  }(BaseElement);
  AMP.extension(TAG2, "1.0", function(AMP2) {
    AMP2.registerElement(TAG2, AmpStreamGallery, CSS4);
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
//# sourceMappingURL=amp-stream-gallery-1.0.max.js.map
