(self.AMP=self.AMP||[]).push({n:"amp-animation",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
  function toUpperCase(_match, character) {
    return character.toUpperCase();
  }
  function dashToCamelCase(name) {
    return name.replace(/-([a-z])/g, toUpperCase);
  }
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

  // extensions/amp-animation/0.1/parsers/css-expr-ast.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
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
  var FINAL_URL_RE = /^(data|https)\:/i;
  var DEG_TO_RAD = 2 * Math.PI / 360;
  var GRAD_TO_RAD = Math.PI / 200;
  var VAR_CSS_RE = /\b(calc|min|max|clamp|var|url|rand|index|width|height|num|length|x|y)\(/i;
  var NORM_CSS_RE = /\d(%|em|rem|vw|vh|vmin|vmax|s|deg|grad)/i;
  var INFINITY_RE = /^(infinity|infinite)$/i;
  var BOX_DIMENSIONS = ["h", "w", "h", "w"];
  var TUPLE_DIMENSIONS = ["w", "h"];
  function isVarCss(css, normalize) {
    return VAR_CSS_RE.test(css) || normalize && NORM_CSS_RE.test(css);
  }
  var CssNode = /* @__PURE__ */ function() {
    function CssNode2() {
      _classCallCheck2(this, CssNode2);
    }
    _createClass(CssNode2, [{
      key: "css",
      value: function css() {
      }
    }, {
      key: "resolve",
      value: function resolve(context, normalize) {
        if (this.isConst(normalize)) {
          return this;
        }
        return this.calc(context, normalize);
      }
    }, {
      key: "isConst",
      value: function isConst(unusedNormalize) {
        return true;
      }
    }, {
      key: "calc",
      value: function calc(unusedContext, unusedNormalize) {
        return this;
      }
    }]);
    return CssNode2;
  }();
  var CssPassthroughNode = /* @__PURE__ */ function(_CssNode) {
    _inherits(CssPassthroughNode2, _CssNode);
    var _super = _createSuper(CssPassthroughNode2);
    function CssPassthroughNode2(css) {
      var _this;
      _classCallCheck2(this, CssPassthroughNode2);
      _this = _super.call(this);
      _this.css_ = css;
      return _this;
    }
    _createClass(CssPassthroughNode2, [{
      key: "css",
      value: function css() {
        return this.css_;
      }
    }]);
    return CssPassthroughNode2;
  }(CssNode);
  var CssConcatNode = /* @__PURE__ */ function(_CssNode2) {
    _inherits(CssConcatNode2, _CssNode2);
    var _super2 = _createSuper(CssConcatNode2);
    function CssConcatNode2(opt_array, opt_dimensions) {
      var _this2;
      _classCallCheck2(this, CssConcatNode2);
      _this2 = _super2.call(this);
      _this2.array_ = opt_array instanceof CssConcatNode2 ? opt_array.array_ : Array.isArray(opt_array) ? opt_array : opt_array ? [opt_array] : [];
      _this2.dimensions_ = opt_dimensions || null;
      return _this2;
    }
    _createClass(CssConcatNode2, [{
      key: "css",
      value: function css() {
        return this.array_.map(function(node) {
          return node.css();
        }).join(" ");
      }
    }, {
      key: "isConst",
      value: function isConst(normalize) {
        return this.array_.reduce(function(acc, node) {
          return acc && node.isConst(normalize);
        }, true);
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        var resolvedArray = resolveArray(context, normalize, this.array_, this.dimensions_);
        return resolvedArray ? new CssConcatNode2(resolvedArray) : null;
      }
    }], [{
      key: "concat",
      value: function concat(nodeOrSet, otherNodeOrSet) {
        var set;
        if (nodeOrSet instanceof CssConcatNode2) {
          set = nodeOrSet;
        } else {
          set = new CssConcatNode2([nodeOrSet]);
        }
        if (otherNodeOrSet instanceof CssConcatNode2) {
          set.array_ = set.array_.concat(otherNodeOrSet.array_);
        } else {
          set.array_.push(otherNodeOrSet);
        }
        return set;
      }
    }]);
    return CssConcatNode2;
  }(CssNode);
  var CssUrlNode = /* @__PURE__ */ function(_CssNode3) {
    _inherits(CssUrlNode2, _CssNode3);
    var _super3 = _createSuper(CssUrlNode2);
    function CssUrlNode2(url) {
      var _this3;
      _classCallCheck2(this, CssUrlNode2);
      _this3 = _super3.call(this);
      _this3.url_ = url;
      return _this3;
    }
    _createClass(CssUrlNode2, [{
      key: "css",
      value: function css() {
        if (!this.url_) {
          return "";
        }
        return 'url("' + this.url_ + '")';
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return !this.url_ || FINAL_URL_RE.test(this.url_);
      }
    }, {
      key: "calc",
      value: function calc(context) {
        var url = context.resolveUrl(this.url_);
        return new CssPassthroughNode('url("' + url + '")');
      }
    }]);
    return CssUrlNode2;
  }(CssNode);
  var CssNumericNode = /* @__PURE__ */ function(_CssNode4) {
    _inherits(CssNumericNode2, _CssNode4);
    var _super4 = _createSuper(CssNumericNode2);
    function CssNumericNode2(type, num, units) {
      var _this4;
      _classCallCheck2(this, CssNumericNode2);
      _this4 = _super4.call(this);
      _this4.type_ = type;
      _this4.num_ = num;
      _this4.units_ = units.toLowerCase();
      return _this4;
    }
    _createClass(CssNumericNode2, [{
      key: "css",
      value: function css() {
        return "" + this.num_ + this.units_;
      }
    }, {
      key: "createSameUnits",
      value: function createSameUnits(unusedNum) {
      }
    }, {
      key: "isConst",
      value: function isConst(normalize) {
        return normalize ? this.isNorm() : true;
      }
    }, {
      key: "isNorm",
      value: function isNorm() {
        return true;
      }
    }, {
      key: "norm",
      value: function norm(unusedContext) {
        return this;
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        return normalize ? this.norm(context) : this;
      }
    }, {
      key: "calcPercent",
      value: function calcPercent(unusedPercent, unusedContext) {
        throw new Error("cannot calculate percent for " + this.type_);
      }
    }]);
    return CssNumericNode2;
  }(CssNode);
  var CssNumberNode = /* @__PURE__ */ function(_CssNumericNode) {
    _inherits(CssNumberNode2, _CssNumericNode);
    var _super5 = _createSuper(CssNumberNode2);
    function CssNumberNode2(num) {
      _classCallCheck2(this, CssNumberNode2);
      return _super5.call(this, "NUM", num, "");
    }
    _createClass(CssNumberNode2, [{
      key: "createSameUnits",
      value: function createSameUnits(num) {
        return new CssNumberNode2(num);
      }
    }], [{
      key: "num",
      value: function num(node) {
        if (node instanceof CssNumberNode2) {
          return node.num_;
        }
        var css = node.css();
        if (INFINITY_RE.test(css)) {
          return Infinity;
        }
        return void 0;
      }
    }]);
    return CssNumberNode2;
  }(CssNumericNode);
  var CssPercentNode = /* @__PURE__ */ function(_CssNumericNode2) {
    _inherits(CssPercentNode2, _CssNumericNode2);
    var _super6 = _createSuper(CssPercentNode2);
    function CssPercentNode2(num) {
      _classCallCheck2(this, CssPercentNode2);
      return _super6.call(this, "PRC", num, "%");
    }
    _createClass(CssPercentNode2, [{
      key: "createSameUnits",
      value: function createSameUnits(num) {
        return new CssPercentNode2(num);
      }
    }, {
      key: "isNorm",
      value: function isNorm() {
        return false;
      }
    }, {
      key: "norm",
      value: function norm(context) {
        if (context.getDimension()) {
          return new CssLengthNode(0, "px").calcPercent(this.num_, context);
        }
        return this;
      }
    }]);
    return CssPercentNode2;
  }(CssNumericNode);
  var CssLengthNode = /* @__PURE__ */ function(_CssNumericNode3) {
    _inherits(CssLengthNode2, _CssNumericNode3);
    var _super7 = _createSuper(CssLengthNode2);
    function CssLengthNode2(num, units) {
      _classCallCheck2(this, CssLengthNode2);
      return _super7.call(this, "LEN", num, units);
    }
    _createClass(CssLengthNode2, [{
      key: "createSameUnits",
      value: function createSameUnits(num) {
        return new CssLengthNode2(num, this.units_);
      }
    }, {
      key: "isNorm",
      value: function isNorm() {
        return this.units_ == "px";
      }
    }, {
      key: "norm",
      value: function norm(context) {
        if (this.isNorm()) {
          return this;
        }
        if (this.units_ == "em" || this.units_ == "rem") {
          var fontSize = this.units_ == "em" ? context.getCurrentFontSize() : context.getRootFontSize();
          return new CssLengthNode2(this.num_ * fontSize, "px");
        }
        if (this.units_ == "vw" || this.units_ == "vh" || this.units_ == "vmin" || this.units_ == "vmax") {
          var vp = context.getViewportSize();
          var vw = vp.width * this.num_ / 100;
          var vh = vp.height * this.num_ / 100;
          var num = 0;
          if (this.units_ == "vw") {
            num = vw;
          } else if (this.units_ == "vh") {
            num = vh;
          } else if (this.units_ == "vmin") {
            num = Math.min(vw, vh);
          } else if (this.units_ == "vmax") {
            num = Math.max(vw, vh);
          }
          return new CssLengthNode2(num, "px");
        }
        throw unknownUnits(this.units_);
      }
    }, {
      key: "calcPercent",
      value: function calcPercent(percent, context) {
        var dim = context.getDimension();
        var size = context.getCurrentElementRect();
        var side = getRectField(dim, size);
        return new CssLengthNode2(side * percent / 100, "px");
      }
    }]);
    return CssLengthNode2;
  }(CssNumericNode);
  var CssAngleNode = /* @__PURE__ */ function(_CssNumericNode4) {
    _inherits(CssAngleNode2, _CssNumericNode4);
    var _super8 = _createSuper(CssAngleNode2);
    function CssAngleNode2(num, units) {
      _classCallCheck2(this, CssAngleNode2);
      return _super8.call(this, "ANG", num, units);
    }
    _createClass(CssAngleNode2, [{
      key: "createSameUnits",
      value: function createSameUnits(num) {
        return new CssAngleNode2(num, this.units_);
      }
    }, {
      key: "isNorm",
      value: function isNorm() {
        return this.units_ == "rad";
      }
    }, {
      key: "norm",
      value: function norm() {
        if (this.isNorm()) {
          return this;
        }
        if (this.units_ == "deg") {
          return new CssAngleNode2(this.num_ * DEG_TO_RAD, "rad");
        }
        if (this.units_ == "grad") {
          return new CssAngleNode2(this.num_ * GRAD_TO_RAD, "rad");
        }
        throw unknownUnits(this.units_);
      }
    }]);
    return CssAngleNode2;
  }(CssNumericNode);
  var CssTimeNode = /* @__PURE__ */ function(_CssNumericNode5) {
    _inherits(CssTimeNode2, _CssNumericNode5);
    var _super9 = _createSuper(CssTimeNode2);
    function CssTimeNode2(num, units) {
      _classCallCheck2(this, CssTimeNode2);
      return _super9.call(this, "TME", num, units);
    }
    _createClass(CssTimeNode2, [{
      key: "createSameUnits",
      value: function createSameUnits(num) {
        return new CssTimeNode2(num, this.units_);
      }
    }, {
      key: "isNorm",
      value: function isNorm() {
        return this.units_ == "ms";
      }
    }, {
      key: "norm",
      value: function norm() {
        if (this.isNorm()) {
          return this;
        }
        return new CssTimeNode2(this.millis_(), "ms");
      }
    }, {
      key: "millis_",
      value: function millis_() {
        if (this.units_ == "ms") {
          return this.num_;
        }
        if (this.units_ == "s") {
          return this.num_ * 1e3;
        }
        throw unknownUnits(this.units_);
      }
    }], [{
      key: "millis",
      value: function millis(node) {
        if (node instanceof CssTimeNode2) {
          return node.millis_();
        }
        if (node instanceof CssNumberNode) {
          return node.num_;
        }
        return void 0;
      }
    }]);
    return CssTimeNode2;
  }(CssNumericNode);
  var CssFuncNode = /* @__PURE__ */ function(_CssNode5) {
    _inherits(CssFuncNode2, _CssNode5);
    var _super10 = _createSuper(CssFuncNode2);
    function CssFuncNode2(name, args, opt_dimensions) {
      var _this5;
      _classCallCheck2(this, CssFuncNode2);
      _this5 = _super10.call(this);
      _this5.name_ = name.toLowerCase();
      _this5.args_ = args;
      _this5.dimensions_ = opt_dimensions || null;
      return _this5;
    }
    _createClass(CssFuncNode2, [{
      key: "css",
      value: function css() {
        var args = this.args_.map(function(node) {
          return node.css();
        }).join(",");
        return this.name_ + "(" + args + ")";
      }
    }, {
      key: "isConst",
      value: function isConst(normalize) {
        return this.args_.reduce(function(acc, node) {
          return acc && node.isConst(normalize);
        }, true);
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        var resolvedArgs = resolveArray(context, normalize, this.args_, this.dimensions_);
        return resolvedArgs ? new CssFuncNode2(this.name_, resolvedArgs) : null;
      }
    }]);
    return CssFuncNode2;
  }(CssNode);
  function createBoxNode(value, opt_dimensions) {
    var dims = opt_dimensions || BOX_DIMENSIONS;
    var args = value instanceof CssConcatNode ? value.array_ : [value];
    if (args.length < 1 || args.length > 4) {
      throw new Error("box must have between 1 and 4 components");
    }
    if (dims.length > 0) {
      return new CssConcatNode(args.length == 1 ? [args[0], args[0]] : args, dims);
    }
    return new CssConcatNode(args);
  }
  function createBorderRadiusNode(box1, opt_box2) {
    var box1Node = createBoxNode(box1, []);
    if (opt_box2) {
      return new CssConcatNode([box1Node, new CssPassthroughNode("/"), createBoxNode(opt_box2, [])]);
    }
    return box1Node;
  }
  function createPositionNode(value) {
    var args = value instanceof CssConcatNode ? value.array_ : [value];
    if (args.length != 1 && args.length != 2 && args.length != 4) {
      throw new Error("position is either 1, 2, or 4 components");
    }
    var dims = null;
    if (args.length == 1) {
      dims = ["w"];
    } else if (args.length == 2) {
      dims = ["w", "h"];
    } else {
      dims = ["", "", "", ""];
      for (var i = 0; i < args.length; i += 2) {
        var kw = args[i].css().toLowerCase();
        var dim = kw == "left" || kw == "right" ? "w" : kw == "top" || kw == "bottom" ? "h" : "";
        dims[i] = dims[i + 1] = dim;
      }
    }
    return new CssConcatNode(args, dims);
  }
  function createInsetNode(box, opt_round) {
    var boxNode = createBoxNode(box);
    if (opt_round) {
      return new CssFuncNode("inset", [new CssConcatNode([boxNode, new CssPassthroughNode("round"), opt_round])]);
    }
    return new CssFuncNode("inset", [boxNode]);
  }
  function createCircleNode(radius, opt_position) {
    return createEllipseNode(radius, opt_position, "circle");
  }
  function createEllipseNode(radii, opt_position, opt_name) {
    var name = opt_name || "ellipse";
    var position = opt_position ? createPositionNode(opt_position) : null;
    if (!radii && !position) {
      return new CssFuncNode(name, []);
    }
    if (radii && position) {
      return new CssFuncNode(name, [new CssConcatNode([radii, new CssPassthroughNode("at"), position])]);
    }
    if (position) {
      return new CssFuncNode(name, [new CssConcatNode([new CssPassthroughNode("at"), position])]);
    }
    return new CssFuncNode(name, [radii]);
  }
  function createPolygonNode(tuples) {
    var tuplesWithDims = tuples.map(function(tuple) {
      return new CssConcatNode(tuple, TUPLE_DIMENSIONS);
    });
    return new CssFuncNode("polygon", tuplesWithDims);
  }
  var CssTranslateNode = /* @__PURE__ */ function(_CssFuncNode) {
    _inherits(CssTranslateNode2, _CssFuncNode);
    var _super11 = _createSuper(CssTranslateNode2);
    function CssTranslateNode2(suffix, args) {
      var _this6;
      _classCallCheck2(this, CssTranslateNode2);
      _this6 = _super11.call(this, "translate" + suffix.toUpperCase(), args, suffix == "" ? ["w", "h"] : suffix == "x" ? ["w"] : suffix == "y" ? ["h"] : suffix == "z" ? ["z"] : suffix == "3d" ? ["w", "h", "z"] : null);
      _this6.suffix_ = suffix;
      return _this6;
    }
    return CssTranslateNode2;
  }(CssFuncNode);
  var CssRectNode = /* @__PURE__ */ function(_CssNode6) {
    _inherits(CssRectNode2, _CssNode6);
    var _super12 = _createSuper(CssRectNode2);
    function CssRectNode2(field, opt_selector, opt_selectionMethod) {
      var _this7;
      _classCallCheck2(this, CssRectNode2);
      _this7 = _super12.call(this);
      _this7.field_ = field;
      _this7.selector_ = opt_selector || null;
      _this7.selectionMethod_ = opt_selectionMethod || null;
      return _this7;
    }
    _createClass(CssRectNode2, [{
      key: "css",
      value: function css() {
        throw noCss();
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context) {
        var rect = this.selector_ ? context.getElementRect(this.selector_, this.selectionMethod_) : context.getCurrentElementRect();
        return new CssLengthNode(getRectField(this.field_, rect), "px");
      }
    }]);
    return CssRectNode2;
  }(CssNode);
  var CssNumConvertNode = /* @__PURE__ */ function(_CssNode7) {
    _inherits(CssNumConvertNode2, _CssNode7);
    var _super13 = _createSuper(CssNumConvertNode2);
    function CssNumConvertNode2(value) {
      var _this8;
      _classCallCheck2(this, CssNumConvertNode2);
      _this8 = _super13.call(this);
      _this8.value_ = value;
      return _this8;
    }
    _createClass(CssNumConvertNode2, [{
      key: "css",
      value: function css() {
        throw noCss();
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        var value = this.value_.resolve(context, normalize);
        if (value == null) {
          return null;
        }
        var num;
        if (value instanceof CssNumericNode) {
          num = value.num_;
        } else {
          num = parseFloat(value.css());
        }
        if (num == null || isNaN(num)) {
          return null;
        }
        return new CssNumberNode(num);
      }
    }]);
    return CssNumConvertNode2;
  }(CssNode);
  var CssRandNode = /* @__PURE__ */ function(_CssNode8) {
    _inherits(CssRandNode2, _CssNode8);
    var _super14 = _createSuper(CssRandNode2);
    function CssRandNode2(left, right) {
      var _this9;
      if (left === void 0) {
        left = null;
      }
      if (right === void 0) {
        right = null;
      }
      _classCallCheck2(this, CssRandNode2);
      _this9 = _super14.call(this);
      _this9.left_ = left;
      _this9.right_ = right;
      return _this9;
    }
    _createClass(CssRandNode2, [{
      key: "css",
      value: function css() {
        throw noCss();
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        if (this.left_ == null || this.right_ == null) {
          return new CssNumberNode(Math.random());
        }
        var left = this.left_.resolve(context, normalize);
        var right = this.right_.resolve(context, normalize);
        if (left == null || right == null) {
          return null;
        }
        if (!(left instanceof CssNumericNode) || !(right instanceof CssNumericNode)) {
          throw new Error("left and right must be both numerical");
        }
        if (left.type_ != right.type_) {
          throw new Error("left and right must be the same type");
        }
        if (left.units_ != right.units_) {
          left = left.norm(context);
          right = right.norm(context);
        }
        var min = Math.min(left.num_, right.num_);
        var max = Math.max(left.num_, right.num_);
        var rand = Math.random();
        var num = min * (1 - rand) + max * rand;
        return left.createSameUnits(num);
      }
    }]);
    return CssRandNode2;
  }(CssNode);
  var CssIndexNode = /* @__PURE__ */ function(_CssNode9) {
    _inherits(CssIndexNode2, _CssNode9);
    var _super15 = _createSuper(CssIndexNode2);
    function CssIndexNode2() {
      _classCallCheck2(this, CssIndexNode2);
      return _super15.call(this);
    }
    _createClass(CssIndexNode2, [{
      key: "css",
      value: function css() {
        throw noCss();
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context) {
        return new CssNumberNode(context.getCurrentIndex());
      }
    }]);
    return CssIndexNode2;
  }(CssNode);
  var CssLengthFuncNode = /* @__PURE__ */ function(_CssNode10) {
    _inherits(CssLengthFuncNode2, _CssNode10);
    var _super16 = _createSuper(CssLengthFuncNode2);
    function CssLengthFuncNode2() {
      _classCallCheck2(this, CssLengthFuncNode2);
      return _super16.call(this);
    }
    _createClass(CssLengthFuncNode2, [{
      key: "css",
      value: function css() {
        throw noCss();
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context) {
        return new CssNumberNode(context.getTargetLength());
      }
    }]);
    return CssLengthFuncNode2;
  }(CssNode);
  var CssVarNode = /* @__PURE__ */ function(_CssNode11) {
    _inherits(CssVarNode2, _CssNode11);
    var _super17 = _createSuper(CssVarNode2);
    function CssVarNode2(varName, opt_def) {
      var _this10;
      _classCallCheck2(this, CssVarNode2);
      _this10 = _super17.call(this);
      _this10.varName_ = varName;
      _this10.def_ = opt_def || null;
      return _this10;
    }
    _createClass(CssVarNode2, [{
      key: "css",
      value: function css() {
        return "var(" + this.varName_ + (this.def_ ? "," + this.def_.css() : "") + ")";
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        var varNode = context.getVar(this.varName_);
        if (varNode) {
          return varNode.resolve(context, normalize);
        }
        if (this.def_) {
          return this.def_.resolve(context, normalize);
        }
        return null;
      }
    }]);
    return CssVarNode2;
  }(CssNode);
  var CssCalcNode = /* @__PURE__ */ function(_CssNode12) {
    _inherits(CssCalcNode2, _CssNode12);
    var _super18 = _createSuper(CssCalcNode2);
    function CssCalcNode2(expr) {
      var _this11;
      _classCallCheck2(this, CssCalcNode2);
      _this11 = _super18.call(this);
      _this11.expr_ = expr;
      return _this11;
    }
    _createClass(CssCalcNode2, [{
      key: "css",
      value: function css() {
        return "calc(" + this.expr_.css() + ")";
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        return this.expr_.resolve(context, normalize);
      }
    }]);
    return CssCalcNode2;
  }(CssNode);
  var CssCalcSumNode = /* @__PURE__ */ function(_CssNode13) {
    _inherits(CssCalcSumNode2, _CssNode13);
    var _super19 = _createSuper(CssCalcSumNode2);
    function CssCalcSumNode2(left, right, op) {
      var _this12;
      _classCallCheck2(this, CssCalcSumNode2);
      _this12 = _super19.call(this);
      _this12.left_ = left;
      _this12.right_ = right;
      _this12.op_ = op;
      return _this12;
    }
    _createClass(CssCalcSumNode2, [{
      key: "css",
      value: function css() {
        return this.left_.css() + " " + this.op_ + " " + this.right_.css();
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        var left = this.left_.resolve(context, normalize);
        var right = this.right_.resolve(context, normalize);
        if (left == null || right == null) {
          return null;
        }
        if (!(left instanceof CssNumericNode) || !(right instanceof CssNumericNode)) {
          throw new Error("left and right must be both numerical");
        }
        if (left.type_ != right.type_) {
          if (left instanceof CssPercentNode) {
            left = right.calcPercent(left.num_, context);
          } else if (right instanceof CssPercentNode) {
            right = left.calcPercent(right.num_, context);
          } else {
            throw new Error("left and right must be the same type");
          }
        }
        if (left.units_ != right.units_) {
          left = left.norm(context);
          right = right.norm(context);
        }
        var sign = this.op_ == "+" ? 1 : -1;
        return left.createSameUnits(left.num_ + sign * right.num_);
      }
    }]);
    return CssCalcSumNode2;
  }(CssNode);
  var CssCalcProductNode = /* @__PURE__ */ function(_CssNode14) {
    _inherits(CssCalcProductNode2, _CssNode14);
    var _super20 = _createSuper(CssCalcProductNode2);
    function CssCalcProductNode2(left, right, op) {
      var _this13;
      _classCallCheck2(this, CssCalcProductNode2);
      _this13 = _super20.call(this);
      _this13.left_ = left;
      _this13.right_ = right;
      _this13.op_ = op;
      return _this13;
    }
    _createClass(CssCalcProductNode2, [{
      key: "css",
      value: function css() {
        return this.left_.css() + " " + this.op_ + " " + this.right_.css();
      }
    }, {
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        var left = this.left_.resolve(context, normalize);
        var right = this.right_.resolve(context, normalize);
        if (left == null || right == null) {
          return null;
        }
        if (!(left instanceof CssNumericNode) || !(right instanceof CssNumericNode)) {
          throw new Error("left and right must be both numerical");
        }
        var base;
        var multi;
        if (this.op_ == "*") {
          if (left instanceof CssNumberNode) {
            multi = left.num_;
            base = right;
          } else {
            if (!(right instanceof CssNumberNode)) {
              throw new Error("one of sides in multiplication must be a number");
            }
            multi = right.num_;
            base = left;
          }
        } else {
          if (!(right instanceof CssNumberNode)) {
            throw new Error("denominator must be a number");
          }
          base = left;
          multi = 1 / right.num_;
        }
        var num = base.num_ * multi;
        if (!isFinite(num)) {
          return null;
        }
        return base.createSameUnits(num);
      }
    }]);
    return CssCalcProductNode2;
  }(CssNode);
  var CssMinMaxNode = /* @__PURE__ */ function(_CssFuncNode2) {
    _inherits(CssMinMaxNode2, _CssFuncNode2);
    var _super21 = _createSuper(CssMinMaxNode2);
    function CssMinMaxNode2(name, args) {
      _classCallCheck2(this, CssMinMaxNode2);
      return _super21.call(this, name, args);
    }
    _createClass(CssMinMaxNode2, [{
      key: "isConst",
      value: function isConst() {
        return false;
      }
    }, {
      key: "calc",
      value: function calc(context, normalize) {
        var resolvedArgs = resolveArray(context, normalize, this.args_, null);
        if (!resolvedArgs) {
          return null;
        }
        var firstNonPercent = null;
        var hasPercent = false;
        var hasDifferentUnits = false;
        resolvedArgs.forEach(function(arg) {
          if (!(arg instanceof CssNumericNode)) {
            throw new Error("arguments must be numerical");
          }
          if (arg instanceof CssPercentNode) {
            hasPercent = true;
          } else if (firstNonPercent) {
            if (arg.type_ != firstNonPercent.type_) {
              throw new Error("arguments must be the same type");
            }
            if (arg.units_ != firstNonPercent.units_) {
              hasDifferentUnits = true;
            }
          } else {
            firstNonPercent = arg;
          }
        });
        if (firstNonPercent && hasPercent) {
          hasDifferentUnits = true;
        }
        if (firstNonPercent) {
          if (hasDifferentUnits) {
            firstNonPercent = firstNonPercent.norm(context);
          }
          resolvedArgs = resolvedArgs.map(function(arg) {
            if (arg == firstNonPercent) {
              return arg;
            }
            if (arg instanceof CssPercentNode) {
              return firstNonPercent.calcPercent(arg.num_, context);
            }
            if (hasDifferentUnits) {
              return arg.norm(context);
            }
            return arg;
          });
        }
        var nums = resolvedArgs.map(function(arg) {
          return arg.num_;
        });
        var value;
        if (this.name_ == "min") {
          value = Math.min.apply(null, nums);
        } else if (this.name_ == "max") {
          value = Math.max.apply(null, nums);
        } else {
          var min = nums[0];
          var preferred = nums[1];
          var max = nums[2];
          value = Math.max(min, Math.min(max, preferred));
        }
        return resolvedArgs[0].createSameUnits(value);
      }
    }]);
    return CssMinMaxNode2;
  }(CssFuncNode);
  function unknownUnits(units) {
    return new Error("unknown units: " + units);
  }
  function noCss() {
    return new Error("no css");
  }
  function getRectField(field, rect) {
    var _rect$field;
    if (field == "w") {
      return rect.width;
    }
    if (field == "h") {
      return rect.height;
    }
    return (_rect$field = rect[field]) != null ? _rect$field : 0;
  }
  function resolveArray(context, normalize, array, dimensions) {
    var resolvedArray = [];
    var _loop = function _loop2(i2) {
      var node = array[i2];
      var resolved2 = void 0;
      if (dimensions && i2 < dimensions.length) {
        resolved2 = context.withDimension(dimensions[i2], function() {
          return node.resolve(context, normalize);
        });
      } else {
        resolved2 = node.resolve(context, normalize);
      }
      if (resolved2) {
        resolvedArray.push(resolved2);
      } else {
        return {
          v: null
        };
      }
    };
    for (var i = 0; i < array.length; i++) {
      var _ret = _loop(i);
      if (typeof _ret === "object")
        return _ret.v;
    }
    return resolvedArray;
  }

  // extensions/amp-animation/0.1/web-animation-types.js
  var WebAnimationPlayState = {
    IDLE: "idle",
    PENDING: "pending",
    RUNNING: "running",
    PAUSED: "paused",
    FINISHED: "finished"
  };
  var WebAnimationTimingDirection = {
    NORMAL: "normal",
    REVERSE: "reverse",
    ALTERNATE: "alternate",
    ALTERNATE_REVERSE: "alternate-reverse"
  };
  var WebAnimationTimingFill = {
    NONE: "none",
    FORWARDS: "forwards",
    BACKWARDS: "backwards",
    BOTH: "both",
    AUTO: "auto"
  };
  var ALLOWLISTED_PROPS = {
    "opacity": true,
    "transform": true,
    "transform-origin": true,
    "visibility": true,
    "offset-distance": true,
    "offsetDistance": true,
    "clip-path": true,
    "clipPath": true
  };
  function isAllowlistedProp(prop) {
    return ALLOWLISTED_PROPS[prop] || false;
  }

  // extensions/amp-animation/0.1/runners/animation-runner.js
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
  var AnimationRunner = /* @__PURE__ */ function() {
    function AnimationRunner2(requests) {
      _classCallCheck3(this, AnimationRunner2);
      this.requests_ = requests;
    }
    _createClass2(AnimationRunner2, [{
      key: "getPlayState",
      value: function getPlayState() {
      }
    }, {
      key: "onPlayStateChanged",
      value: function onPlayStateChanged(unusedHandler) {
      }
    }, {
      key: "init",
      value: function init() {
      }
    }, {
      key: "start",
      value: function start() {
      }
    }, {
      key: "pause",
      value: function pause() {
      }
    }, {
      key: "resume",
      value: function resume() {
      }
    }, {
      key: "reverse",
      value: function reverse() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(unusedTime) {
      }
    }, {
      key: "seekToPercent",
      value: function seekToPercent(unusedPercent) {
      }
    }, {
      key: "finish",
      value: function finish() {
      }
    }, {
      key: "cancel",
      value: function cancel() {
      }
    }]);
    return AnimationRunner2;
  }();

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
  function assertDoesNotContainDisplay(styles) {
    if ("display" in styles) {
      dev().error("STYLE", "`display` style detected in styles. You must use toggle instead.");
    }
    return styles;
  }
  function setInitialDisplay(el, value) {
    var style = el.style;
    devAssert2(value !== "" && value !== "none", 'Initial display value must not be "none". Use toggle instead.');
    devAssert2(!style["display"], "setInitialDisplay MUST NOT be used for resetting the display style. If you are looking for display:none toggling, use toggle instead.");
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
  function px(value) {
    return value + "px";
  }
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function isVar(property) {
    return property.startsWith("--");
  }

  // extensions/amp-animation/0.1/runners/utils.js
  function getTotalDuration(requests) {
    var maxTotalDuration = 0;
    for (var i = 0; i < requests.length; i++) {
      var timing = requests[i].timing;
      userAssert(isFinite(timing.iterations), 'Animation has infinite timeline, we can not seek to a relative position within an infinite timeline. Use "time" for seekTo or remove infinite iterations');
      var iteration = timing.iterations - timing.iterationStart;
      var totalDuration = timing.duration * iteration + timing.delay + timing.endDelay;
      if (totalDuration > maxTotalDuration) {
        maxTotalDuration = totalDuration;
      }
    }
    return maxTotalDuration;
  }

  // extensions/amp-animation/0.1/runners/native-web-animation-runner.js
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
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var NativeWebAnimationRunner = /* @__PURE__ */ function(_AnimationRunner) {
    _inherits2(NativeWebAnimationRunner2, _AnimationRunner);
    var _super = _createSuper2(NativeWebAnimationRunner2);
    function NativeWebAnimationRunner2(requests) {
      var _this;
      _classCallCheck5(this, NativeWebAnimationRunner2);
      _this = _super.call(this, requests);
      _this.players_ = null;
      _this.runningCount_ = 0;
      _this.playState_ = WebAnimationPlayState.IDLE;
      _this.playStateChangedObservable_ = new Observable();
      return _this;
    }
    _createClass4(NativeWebAnimationRunner2, [{
      key: "getPlayState",
      value: function getPlayState() {
        return this.playState_;
      }
    }, {
      key: "onPlayStateChanged",
      value: function onPlayStateChanged(handler) {
        return this.playStateChangedObservable_.add(handler);
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;
        devAssert2(!this.players_);
        this.players_ = this.requests_.map(function(request) {
          if (request.vars) {
            setStyles(request.target, assertDoesNotContainDisplay(request.vars));
          }
          var player = request.target.animate(request.keyframes, request.timing);
          player.pause();
          return player;
        });
        this.runningCount_ = this.players_.length;
        this.players_.forEach(function(player) {
          player.onfinish = function() {
            _this2.runningCount_--;
            if (_this2.runningCount_ == 0) {
              _this2.setPlayState_(WebAnimationPlayState.FINISHED);
            }
          };
        });
      }
    }, {
      key: "start",
      value: function start() {
        if (!this.players_) {
          this.init();
        }
        this.resume();
      }
    }, {
      key: "pause",
      value: function pause() {
        devAssert2(this.players_);
        this.setPlayState_(WebAnimationPlayState.PAUSED);
        this.players_.forEach(function(player) {
          if (player.playState == WebAnimationPlayState.RUNNING) {
            player.pause();
          }
        });
      }
    }, {
      key: "resume",
      value: function resume() {
        var _this3 = this;
        devAssert2(this.players_);
        var oldRunnerPlayState = this.playState_;
        if (oldRunnerPlayState == WebAnimationPlayState.RUNNING) {
          return;
        }
        this.setPlayState_(WebAnimationPlayState.RUNNING);
        this.runningCount_ = 0;
        this.players_.forEach(function(player) {
          if (oldRunnerPlayState != WebAnimationPlayState.PAUSED || player.playState == WebAnimationPlayState.PAUSED || player.playState == WebAnimationPlayState.PENDING) {
            player.play();
            _this3.runningCount_++;
          }
        });
      }
    }, {
      key: "reverse",
      value: function reverse() {
        devAssert2(this.players_);
        this.players_.forEach(function(player) {
          player.reverse();
        });
      }
    }, {
      key: "seekTo",
      value: function seekTo(time) {
        devAssert2(this.players_);
        this.setPlayState_(WebAnimationPlayState.PAUSED);
        this.players_.forEach(function(player) {
          player.pause();
          player.currentTime = time;
        });
      }
    }, {
      key: "seekToPercent",
      value: function seekToPercent(percent) {
        devAssert2(percent >= 0 && percent <= 1);
        var totalDuration = this.getTotalDuration_();
        var time = totalDuration * percent;
        this.seekTo(time);
      }
    }, {
      key: "finish",
      value: function finish() {
        if (!this.players_) {
          return;
        }
        var players = this.players_;
        this.players_ = null;
        this.setPlayState_(WebAnimationPlayState.FINISHED);
        players.forEach(function(player) {
          player.finish();
        });
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (!this.players_) {
          return;
        }
        this.setPlayState_(WebAnimationPlayState.IDLE);
        this.players_.forEach(function(player) {
          player.cancel();
        });
      }
    }, {
      key: "setPlayState_",
      value: function setPlayState_(playState) {
        if (this.playState_ != playState) {
          this.playState_ = playState;
          this.playStateChangedObservable_.fire(this.playState_);
        }
      }
    }, {
      key: "getTotalDuration_",
      value: function getTotalDuration_() {
        return getTotalDuration(this.requests_);
      }
    }]);
    return NativeWebAnimationRunner2;
  }(AnimationRunner);

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
  var Services = /* @__PURE__ */ function() {
    function Services2() {
      _classCallCheck6(this, Services2);
    }
    _createClass5(Services2, null, [{
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

  // extensions/amp-animation/0.1/runners/scrolltimeline-worklet-runner.js
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
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf3(subClass, superClass);
  }
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var moduleName = "amp-animation-worklet";
  var workletModulePromise;
  var ScrollTimelineWorkletRunner = /* @__PURE__ */ function(_AnimationRunner) {
    _inherits3(ScrollTimelineWorkletRunner2, _AnimationRunner);
    var _super = _createSuper3(ScrollTimelineWorkletRunner2);
    function ScrollTimelineWorkletRunner2(win, requests, viewportData) {
      var _this;
      _classCallCheck7(this, ScrollTimelineWorkletRunner2);
      _this = _super.call(this, requests);
      _this.win_ = win;
      _this.players_ = [];
      _this.startScrollOffset_ = viewportData["start-scroll-offset"];
      _this.endScrollOffset_ = viewportData["end-scroll-offset"];
      _this.initialInViewPercent_ = viewportData["initial-inview-percent"];
      return _this;
    }
    _createClass6(ScrollTimelineWorkletRunner2, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        var documentElement = this.win_.document.documentElement;
        var viewportService = Services.viewportForDoc(documentElement);
        var scrollSource = viewportService.getScrollingElement();
        var timeRange = getTotalDuration(this.requests_);
        var adjustedTimeRange = (1 - this.initialInViewPercent_) * timeRange;
        var initialElementOffset = this.initialInViewPercent_ * timeRange;
        this.requests_.map(function(request) {
          if (request.vars) {
            setStyles(request.target, assertDoesNotContainDisplay(request.vars));
          }
          getOrAddWorkletModule(_this2.win_).then(function() {
            var scrollTimeline = new _this2.win_.ScrollTimeline({
              scrollSource,
              orientation: "block",
              startScrollOffset: "" + px(_this2.startScrollOffset_),
              endScrollOffset: "" + px(_this2.endScrollOffset_),
              timeRange: adjustedTimeRange,
              fill: "both"
            });
            var keyframeEffect = new KeyframeEffect(request.target, request.keyframes, request.timing);
            var player = new _this2.win_.WorkletAnimation("" + moduleName, [keyframeEffect], scrollTimeline, {
              "initial-element-offset": initialElementOffset
            });
            player.play();
            _this2.players_.push(player);
          }, function(e) {
            dev().error("AMP-ANIMATION", e);
          });
        });
      }
    }, {
      key: "start",
      value: function start() {
        if (!this.players_) {
          this.init();
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        if (!this.players_) {
          return;
        }
        this.players_.forEach(function(player) {
          player.cancel();
        });
      }
    }]);
    return ScrollTimelineWorkletRunner2;
  }(AnimationRunner);
  function getOrAddWorkletModule(win) {
    if (workletModulePromise) {
      return workletModulePromise;
    }
    var blob = "registerAnimator('" + moduleName + "', class {\n    constructor(options = {\n      'current-element-offset': 0\n    }) {\n      console/*OK*/.info('Using animationWorklet ScrollTimeline');\n      this.initialElementOffset_ = options['initial-element-offset'];\n    }\n    animate(currentTime, effect) {\n      if (currentTime == NaN) {\n        return;\n      }\n      effect.localTime = currentTime + this.initialElementOffset_;\n    }\n  });\n  ";
    workletModulePromise = win.CSS.animationWorklet.addModule(URL.createObjectURL(new Blob([blob], {
      type: "text/javascript"
    })));
    return workletModulePromise;
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

  // extensions/amp-animation/0.1/parsers/keyframes-extractor.js
  function extractKeyframes(rootNode, name) {
    var styleSheets = rootNode.styleSheets;
    if (!styleSheets) {
      return null;
    }
    var win = toWin((rootNode.ownerDocument || rootNode).defaultView);
    for (var i = styleSheets.length - 1; i >= 0; i--) {
      var keyframes = scanStyle(win, styleSheets[i], name);
      if (keyframes) {
        return keyframes;
      }
    }
    return null;
  }
  function scanStyle(win, styleSheet, name) {
    if (!styleSheet.cssRules) {
      return null;
    }
    var styleNode = styleSheet.ownerNode;
    if (!styleNode) {
      return null;
    }
    if (!styleNode.hasAttribute("amp-custom") && !styleNode.hasAttribute("amp-keyframes")) {
      return null;
    }
    return scanRules(win, styleSheet.cssRules, name);
  }
  function scanRules(win, rules, name) {
    for (var i = rules.length - 1; i >= 0; i--) {
      var rule = rules[i];
      if (rule.type == 7) {
        var keyframesRule = rule;
        if (rule.name == name && isEnabled(win, rule)) {
          return buildKeyframes(keyframesRule);
        }
      } else if (rule.type == 4 || rule.type == 12) {
        var found = scanRules(win, rule.cssRules, name);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
  function isEnabled(win, rule) {
    if (rule.media && rule.media.mediaText) {
      var enabled = win.matchMedia(rule.media.mediaText).matches;
      if (!enabled) {
        return false;
      }
    }
    if (rule.type == 12) {
      if (!win.CSS || !win.CSS.supports || !win.CSS.supports(rule.conditionText)) {
        return false;
      }
    }
    if (rule.parentRule) {
      return isEnabled(win, rule.parentRule);
    }
    return true;
  }
  function buildKeyframes(keyframesRule) {
    var array = [];
    for (var i = 0; i < keyframesRule.cssRules.length; i++) {
      var keyframeRule = keyframesRule.cssRules[i];
      var keyframe = {};
      keyframe["offset"] = keyframeRule.keyText == "from" ? 0 : keyframeRule.keyText == "to" ? 1 : parseFloat(keyframeRule.keyText) / 100;
      var style = keyframeRule.style;
      for (var j = 0; j < style.length; j++) {
        var styleName = style[j];
        var propName = styleName;
        if (endsWith(styleName, "animation-timing-function")) {
          propName = "easing";
        }
        keyframe[propName] = style[styleName];
      }
      array.push(keyframe);
    }
    return array;
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

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getDetail(event) {
    return event.detail;
  }

  // src/iframe-helper.js
  function isInFie(element) {
    return element.classList.contains("i-amphtml-fie") || !!closestAncestorElementBySelector(element, ".i-amphtml-fie");
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

  // build/parsers/css-expr-impl.js
  var parser = function() {
    var o = function o2(k, v, _o, l) {
      for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {
        ;
      }
      return _o;
    }, $V0 = [1, 7], $V1 = [1, 8], $V2 = [1, 9], $V3 = [1, 14], $V4 = [1, 15], $V5 = [1, 32], $V6 = [1, 33], $V7 = [1, 34], $V8 = [1, 35], $V9 = [1, 36], $Va = [1, 37], $Vb = [1, 38], $Vc = [1, 39], $Vd = [1, 40], $Ve = [1, 41], $Vf = [1, 42], $Vg = [1, 43], $Vh = [1, 44], $Vi = [1, 45], $Vj = [1, 46], $Vk = [1, 47], $Vl = [1, 48], $Vm = [1, 49], $Vn = [1, 73], $Vo = [1, 50], $Vp = [1, 53], $Vq = [1, 54], $Vr = [1, 55], $Vs = [1, 56], $Vt = [1, 57], $Vu = [1, 66], $Vv = [1, 67], $Vw = [1, 68], $Vx = [1, 69], $Vy = [1, 58], $Vz = [1, 59], $VA = [1, 60], $VB = [1, 61], $VC = [1, 62], $VD = [1, 63], $VE = [1, 64], $VF = [1, 65], $VG = [1, 51], $VH = [1, 52], $VI = [1, 70], $VJ = [1, 71], $VK = [1, 72], $VL = [5, 9, 10, 11, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 52, 53, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78, 79, 80, 82, 85, 86, 87], $VM = [5, 9, 10, 11, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 52, 53, 55, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78, 79, 80, 82, 85, 86, 87, 89, 90, 91], $VN = [1, 80], $VO = [1, 124], $VP = [1, 123], $VQ = [1, 125], $VR = [1, 126], $VS = [53, 55, 57, 89, 90, 91], $VT = [1, 129], $VU = [53, 55], $VV = [1, 156], $VW = [53, 55, 90, 91];
    var parser2 = {
      trace: function trace() {
      },
      yy: {},
      symbols_: {
        "error": 2,
        "result": 3,
        "value": 4,
        "EOF": 5,
        "literal_or_function": 6,
        "literal": 7,
        "function": 8,
        "STRING": 9,
        "NUMBER": 10,
        "PERCENTAGE": 11,
        "length": 12,
        "angle": 13,
        "time": 14,
        "url": 15,
        "HEXCOLOR": 16,
        "IDENT": 17,
        "LENGTH_PX": 18,
        "LENGTH_EM": 19,
        "LENGTH_REM": 20,
        "LENGTH_VH": 21,
        "LENGTH_VW": 22,
        "LENGTH_VMIN": 23,
        "LENGTH_VMAX": 24,
        "LENGTH_CM": 25,
        "LENGTH_MM": 26,
        "LENGTH_Q": 27,
        "LENGTH_IN": 28,
        "LENGTH_PC": 29,
        "LENGTH_PT": 30,
        "ANGLE_DEG": 31,
        "ANGLE_RAD": 32,
        "ANGLE_GRAD": 33,
        "TIME_MS": 34,
        "TIME_S": 35,
        "var_function": 36,
        "calc_function": 37,
        "translate_function": 38,
        "rect_function": 39,
        "num_function": 40,
        "rand_function": 41,
        "index_function": 42,
        "length_function": 43,
        "inset_function": 44,
        "circle_function": 45,
        "ellipse_function": 46,
        "polygon_function": 47,
        "min_function": 48,
        "max_function": 49,
        "clamp_function": 50,
        "any_function": 51,
        "FUNCTION_START": 52,
        ")": 53,
        "args": 54,
        ",": 55,
        "border_radius": 56,
        "/": 57,
        "tuples": 58,
        "URL_START": 59,
        "TRANSLATE_START": 60,
        "TRANSLATE_X_START": 61,
        "TRANSLATE_Y_START": 62,
        "TRANSLATE_Z_START": 63,
        "TRANSLATE_3D_START": 64,
        "INSET_START": 65,
        "ROUND": 66,
        "CIRCLE_START": 67,
        "AT": 68,
        "ELLIPSE_START": 69,
        "POLYGON_START": 70,
        "WIDTH_START": 71,
        "HEIGHT_START": 72,
        "X_START": 73,
        "Y_START": 74,
        "CLOSEST_START": 75,
        "NUM_START": 76,
        "RAND_START": 77,
        "INDEX_START": 78,
        "LENGTH_START": 79,
        "VAR_START": 80,
        "VAR_NAME": 81,
        "CALC_START": 82,
        "calc_expr": 83,
        "calc_expr_list": 84,
        "MIN_START": 85,
        "MAX_START": 86,
        "CLAMP_START": 87,
        "(": 88,
        "*": 89,
        "+": 90,
        "-": 91,
        "$accept": 0,
        "$end": 1
      },
      terminals_: {
        2: "error",
        5: "EOF",
        9: "STRING",
        10: "NUMBER",
        11: "PERCENTAGE",
        16: "HEXCOLOR",
        17: "IDENT",
        18: "LENGTH_PX",
        19: "LENGTH_EM",
        20: "LENGTH_REM",
        21: "LENGTH_VH",
        22: "LENGTH_VW",
        23: "LENGTH_VMIN",
        24: "LENGTH_VMAX",
        25: "LENGTH_CM",
        26: "LENGTH_MM",
        27: "LENGTH_Q",
        28: "LENGTH_IN",
        29: "LENGTH_PC",
        30: "LENGTH_PT",
        31: "ANGLE_DEG",
        32: "ANGLE_RAD",
        33: "ANGLE_GRAD",
        34: "TIME_MS",
        35: "TIME_S",
        52: "FUNCTION_START",
        53: ")",
        55: ",",
        57: "/",
        59: "URL_START",
        60: "TRANSLATE_START",
        61: "TRANSLATE_X_START",
        62: "TRANSLATE_Y_START",
        63: "TRANSLATE_Z_START",
        64: "TRANSLATE_3D_START",
        65: "INSET_START",
        66: "ROUND",
        67: "CIRCLE_START",
        68: "AT",
        69: "ELLIPSE_START",
        70: "POLYGON_START",
        71: "WIDTH_START",
        72: "HEIGHT_START",
        73: "X_START",
        74: "Y_START",
        75: "CLOSEST_START",
        76: "NUM_START",
        77: "RAND_START",
        78: "INDEX_START",
        79: "LENGTH_START",
        80: "VAR_START",
        81: "VAR_NAME",
        82: "CALC_START",
        85: "MIN_START",
        86: "MAX_START",
        87: "CLAMP_START",
        88: "(",
        89: "*",
        90: "+",
        91: "-"
      },
      productions_: [0, [3, 2], [3, 1], [4, 1], [4, 2], [6, 1], [6, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [13, 1], [13, 1], [13, 1], [14, 1], [14, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [8, 1], [51, 2], [51, 3], [54, 1], [54, 3], [56, 1], [56, 3], [58, 2], [58, 4], [15, 3], [38, 3], [38, 3], [38, 3], [38, 3], [38, 3], [44, 5], [44, 3], [45, 2], [45, 4], [45, 5], [45, 3], [46, 2], [46, 4], [46, 5], [46, 3], [47, 3], [39, 2], [39, 2], [39, 2], [39, 2], [39, 3], [39, 3], [39, 3], [39, 3], [39, 5], [39, 5], [39, 5], [39, 5], [40, 3], [41, 2], [41, 5], [42, 2], [43, 2], [36, 3], [36, 5], [37, 3], [84, 1], [84, 3], [48, 3], [49, 3], [50, 3], [83, 1], [83, 3], [83, 3], [83, 3], [83, 3], [83, 3]],
      performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
        var $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            return $$[$0 - 1];
            break;
          case 2:
            return null;
            break;
          case 3:
          case 5:
          case 6:
          case 10:
          case 11:
          case 12:
          case 13:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
          case 100:
            this.$ = $$[$0];
            break;
          case 4:
            this.$ = CssConcatNode.concat($$[$0 - 1], $$[$0]);
            break;
          case 7:
          case 14:
          case 15:
            this.$ = new CssPassthroughNode($$[$0]);
            break;
          case 8:
            this.$ = new CssNumberNode(parseFloat($$[$0]));
            break;
          case 9:
            this.$ = new CssPercentNode(parseFloat($$[$0]));
            break;
          case 16:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "px");
            break;
          case 17:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "em");
            break;
          case 18:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "rem");
            break;
          case 19:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "vh");
            break;
          case 20:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "vw");
            break;
          case 21:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "vmin");
            break;
          case 22:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "vmax");
            break;
          case 23:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "cm");
            break;
          case 24:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "mm");
            break;
          case 25:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "q");
            break;
          case 26:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "in");
            break;
          case 27:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "pc");
            break;
          case 28:
            this.$ = new CssLengthNode(parseFloat($$[$0]), "pt");
            break;
          case 29:
            this.$ = new CssAngleNode(parseFloat($$[$0]), "deg");
            break;
          case 30:
            this.$ = new CssAngleNode(parseFloat($$[$0]), "rad");
            break;
          case 31:
            this.$ = new CssAngleNode(parseFloat($$[$0]), "grad");
            break;
          case 32:
            this.$ = new CssTimeNode(parseFloat($$[$0]), "ms");
            break;
          case 33:
            this.$ = new CssTimeNode(parseFloat($$[$0]), "s");
            break;
          case 50:
            this.$ = new CssFuncNode($$[$0 - 1].slice(0, -1), []);
            break;
          case 51:
            this.$ = new CssFuncNode($$[$0 - 2].slice(0, -1), $$[$0 - 1]);
            break;
          case 52:
          case 95:
            this.$ = [$$[$0]];
            break;
          case 53:
            var args = $$[$0 - 2];
            args.push($$[$0]);
            this.$ = args;
            break;
          case 54:
            this.$ = createBorderRadiusNode($$[$0]);
            break;
          case 55:
            this.$ = createBorderRadiusNode($$[$0 - 2], $$[$0]);
            break;
          case 56:
            this.$ = [CssConcatNode.concat($$[$0 - 1], $$[$0])];
            break;
          case 57:
            var tuples = $$[$0 - 3];
            tuples.push(CssConcatNode.concat($$[$0 - 1], $$[$0]));
            this.$ = tuples;
            break;
          case 58:
            this.$ = new CssUrlNode($$[$0 - 1].slice(1, -1));
            break;
          case 59:
            this.$ = new CssTranslateNode("", $$[$0 - 1]);
            break;
          case 60:
            this.$ = new CssTranslateNode("x", $$[$0 - 1]);
            break;
          case 61:
            this.$ = new CssTranslateNode("y", $$[$0 - 1]);
            break;
          case 62:
            this.$ = new CssTranslateNode("z", $$[$0 - 1]);
            break;
          case 63:
            this.$ = new CssTranslateNode("3d", $$[$0 - 1]);
            break;
          case 64:
            this.$ = createInsetNode($$[$0 - 3], $$[$0 - 1]);
            break;
          case 65:
            this.$ = createInsetNode($$[$0 - 1]);
            break;
          case 66:
            this.$ = createCircleNode();
            break;
          case 67:
            this.$ = createCircleNode(null, $$[$0 - 1]);
            break;
          case 68:
            this.$ = createCircleNode($$[$0 - 3], $$[$0 - 1]);
            break;
          case 69:
            this.$ = createCircleNode($$[$0 - 1]);
            break;
          case 70:
            this.$ = createEllipseNode();
            break;
          case 71:
            this.$ = createEllipseNode(null, $$[$0 - 1]);
            break;
          case 72:
            this.$ = createEllipseNode($$[$0 - 3], $$[$0 - 1]);
            break;
          case 73:
            this.$ = createEllipseNode($$[$0 - 1]);
            break;
          case 74:
            this.$ = createPolygonNode($$[$0 - 1]);
            break;
          case 75:
            this.$ = new CssRectNode("w");
            break;
          case 76:
            this.$ = new CssRectNode("h");
            break;
          case 77:
            this.$ = new CssRectNode("x");
            break;
          case 78:
            this.$ = new CssRectNode("y");
            break;
          case 79:
            this.$ = new CssRectNode("w", $$[$0 - 1].slice(1, -1));
            break;
          case 80:
            this.$ = new CssRectNode("h", $$[$0 - 1].slice(1, -1));
            break;
          case 81:
            this.$ = new CssRectNode("x", $$[$0 - 1].slice(1, -1));
            break;
          case 82:
            this.$ = new CssRectNode("y", $$[$0 - 1].slice(1, -1));
            break;
          case 83:
            this.$ = new CssRectNode("w", $$[$0 - 2].slice(1, -1), "closest");
            break;
          case 84:
            this.$ = new CssRectNode("h", $$[$0 - 2].slice(1, -1), "closest");
            break;
          case 85:
            this.$ = new CssRectNode("x", $$[$0 - 2].slice(1, -1), "closest");
            break;
          case 86:
            this.$ = new CssRectNode("y", $$[$0 - 2].slice(1, -1), "closest");
            break;
          case 87:
            this.$ = new CssNumConvertNode($$[$0 - 1]);
            break;
          case 88:
            this.$ = new CssRandNode();
            break;
          case 89:
            this.$ = new CssRandNode($$[$0 - 3], $$[$0 - 1]);
            break;
          case 90:
            this.$ = new CssIndexNode();
            break;
          case 91:
            this.$ = new CssLengthFuncNode();
            break;
          case 92:
            this.$ = new CssVarNode($$[$0 - 1]);
            break;
          case 93:
            this.$ = new CssVarNode($$[$0 - 3], $$[$0 - 1]);
            break;
          case 94:
            this.$ = new CssCalcNode($$[$0 - 1]);
            break;
          case 96:
            var calc_expr_list = $$[$0 - 2];
            calc_expr_list.push($$[$0]);
            this.$ = calc_expr_list;
            break;
          case 97:
            this.$ = new CssMinMaxNode("min", $$[$0 - 1]);
            break;
          case 98:
            this.$ = new CssMinMaxNode("max", $$[$0 - 1]);
            break;
          case 99:
            this.$ = new CssMinMaxNode("clamp", $$[$0 - 1]);
            break;
          case 101:
            this.$ = $$[$0 - 1];
            break;
          case 102:
            this.$ = new CssCalcProductNode($$[$0 - 2], $$[$0], "*");
            break;
          case 103:
            this.$ = new CssCalcProductNode($$[$0 - 2], $$[$0], "/");
            break;
          case 104:
            this.$ = new CssCalcSumNode($$[$0 - 2], $$[$0], "+");
            break;
          case 105:
            this.$ = new CssCalcSumNode($$[$0 - 2], $$[$0], "-");
            break;
        }
      },
      table: [{
        3: 1,
        4: 2,
        5: [1, 3],
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        1: [3]
      }, {
        5: [1, 74],
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        1: [2, 2]
      }, o($VL, [2, 3]), o($VM, [2, 5]), o($VM, [2, 6]), o($VM, [2, 7]), o($VM, [2, 8]), o($VM, [2, 9]), o($VM, [2, 10]), o($VM, [2, 11]), o($VM, [2, 12]), o($VM, [2, 13]), o($VM, [2, 14]), o($VM, [2, 15]), o($VM, [2, 34]), o($VM, [2, 35]), o($VM, [2, 36]), o($VM, [2, 37]), o($VM, [2, 38]), o($VM, [2, 39]), o($VM, [2, 40]), o($VM, [2, 41]), o($VM, [2, 42]), o($VM, [2, 43]), o($VM, [2, 44]), o($VM, [2, 45]), o($VM, [2, 46]), o($VM, [2, 47]), o($VM, [2, 48]), o($VM, [2, 49]), o($VM, [2, 16]), o($VM, [2, 17]), o($VM, [2, 18]), o($VM, [2, 19]), o($VM, [2, 20]), o($VM, [2, 21]), o($VM, [2, 22]), o($VM, [2, 23]), o($VM, [2, 24]), o($VM, [2, 25]), o($VM, [2, 26]), o($VM, [2, 27]), o($VM, [2, 28]), o($VM, [2, 29]), o($VM, [2, 30]), o($VM, [2, 31]), o($VM, [2, 32]), o($VM, [2, 33]), {
        9: [1, 76]
      }, {
        81: [1, 77]
      }, {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 78,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        6: 82,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        54: 81,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 82,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        54: 83,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 82,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        54: 84,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 82,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        54: 85,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 82,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        54: 86,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        9: [1, 88],
        53: [1, 87],
        75: [1, 89]
      }, {
        9: [1, 91],
        53: [1, 90],
        75: [1, 92]
      }, {
        9: [1, 94],
        53: [1, 93],
        75: [1, 95]
      }, {
        9: [1, 97],
        53: [1, 96],
        75: [1, 98]
      }, {
        6: 99,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 101,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 100],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        53: [1, 102]
      }, {
        53: [1, 103]
      }, {
        4: 104,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 107,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 105],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        68: [1, 106],
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        4: 110,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 108],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        68: [1, 109],
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 112,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        58: 111,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 114,
        84: 113,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 114,
        84: 115,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 114,
        84: 116,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        6: 82,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 117],
        54: 118,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        1: [2, 1]
      }, o($VL, [2, 4]), {
        53: [1, 119]
      }, {
        53: [1, 120],
        55: [1, 121]
      }, {
        53: [1, 122],
        57: $VO,
        89: $VP,
        90: $VQ,
        91: $VR
      }, o($VS, [2, 100]), {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 127,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        53: [1, 128],
        55: $VT
      }, o($VU, [2, 52]), {
        53: [1, 130],
        55: $VT
      }, {
        53: [1, 131],
        55: $VT
      }, {
        53: [1, 132],
        55: $VT
      }, {
        53: [1, 133],
        55: $VT
      }, o($VM, [2, 75]), {
        53: [1, 134]
      }, {
        9: [1, 135]
      }, o($VM, [2, 76]), {
        53: [1, 136]
      }, {
        9: [1, 137]
      }, o($VM, [2, 77]), {
        53: [1, 138]
      }, {
        9: [1, 139]
      }, o($VM, [2, 78]), {
        53: [1, 140]
      }, {
        9: [1, 141]
      }, {
        53: [1, 142]
      }, o($VM, [2, 88]), {
        55: [1, 143]
      }, o($VM, [2, 90]), o($VM, [2, 91]), {
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 145],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        66: [1, 144],
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 66]), {
        4: 146,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        53: [1, 148],
        68: [1, 147]
      }, o($VM, [2, 70]), {
        4: 149,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 151],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        68: [1, 150],
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        53: [1, 152],
        55: [1, 153]
      }, {
        6: 154,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        53: [1, 155],
        55: $VV
      }, o($VU, [2, 95], {
        57: $VO,
        89: $VP,
        90: $VQ,
        91: $VR
      }), {
        53: [1, 157],
        55: $VV
      }, {
        53: [1, 158],
        55: $VV
      }, o($VM, [2, 50]), {
        53: [1, 159],
        55: $VT
      }, o($VM, [2, 58]), o($VM, [2, 92]), {
        6: 160,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 94]), {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 161,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 162,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 163,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 164,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, {
        53: [1, 165],
        57: $VO,
        89: $VP,
        90: $VQ,
        91: $VR
      }, o($VM, [2, 59]), {
        6: 166,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 60]), o($VM, [2, 61]), o($VM, [2, 62]), o($VM, [2, 63]), o($VM, [2, 79]), {
        53: [1, 167]
      }, o($VM, [2, 80]), {
        53: [1, 168]
      }, o($VM, [2, 81]), {
        53: [1, 169]
      }, o($VM, [2, 82]), {
        53: [1, 170]
      }, o($VM, [2, 87]), {
        6: 171,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        4: 173,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        56: 172,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 65]), {
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 174],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        4: 175,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 69]), {
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 176],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        4: 177,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 73]), o($VM, [2, 74]), {
        6: 178,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VU, [2, 56]), o($VM, [2, 97]), {
        6: 79,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        83: 179,
        85: $VI,
        86: $VJ,
        87: $VK,
        88: $VN
      }, o($VM, [2, 98]), o($VM, [2, 99]), o($VM, [2, 51]), {
        53: [1, 180]
      }, o($VS, [2, 102]), o($VS, [2, 103]), o($VW, [2, 104], {
        57: $VO,
        89: $VP
      }), o($VW, [2, 105], {
        57: $VO,
        89: $VP
      }), o($VS, [2, 101]), o($VU, [2, 53]), {
        53: [1, 181]
      }, {
        53: [1, 182]
      }, {
        53: [1, 183]
      }, {
        53: [1, 184]
      }, {
        53: [1, 185]
      }, {
        53: [1, 186]
      }, {
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [2, 54],
        57: [1, 187],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 67]), {
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 188],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 71]), {
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [1, 189],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, {
        6: 190,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VU, [2, 96], {
        57: $VO,
        89: $VP,
        90: $VQ,
        91: $VR
      }), o($VM, [2, 93]), o($VM, [2, 83]), o($VM, [2, 84]), o($VM, [2, 85]), o($VM, [2, 86]), o($VM, [2, 89]), o($VM, [2, 64]), {
        4: 191,
        6: 4,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }, o($VM, [2, 68]), o($VM, [2, 72]), o($VU, [2, 57]), {
        6: 75,
        7: 5,
        8: 6,
        9: $V0,
        10: $V1,
        11: $V2,
        12: 10,
        13: 11,
        14: 12,
        15: 13,
        16: $V3,
        17: $V4,
        18: $V5,
        19: $V6,
        20: $V7,
        21: $V8,
        22: $V9,
        23: $Va,
        24: $Vb,
        25: $Vc,
        26: $Vd,
        27: $Ve,
        28: $Vf,
        29: $Vg,
        30: $Vh,
        31: $Vi,
        32: $Vj,
        33: $Vk,
        34: $Vl,
        35: $Vm,
        36: 16,
        37: 17,
        38: 18,
        39: 19,
        40: 20,
        41: 21,
        42: 22,
        43: 23,
        44: 24,
        45: 25,
        46: 26,
        47: 27,
        48: 28,
        49: 29,
        50: 30,
        51: 31,
        52: $Vn,
        53: [2, 55],
        59: $Vo,
        60: $Vp,
        61: $Vq,
        62: $Vr,
        63: $Vs,
        64: $Vt,
        65: $Vu,
        67: $Vv,
        69: $Vw,
        70: $Vx,
        71: $Vy,
        72: $Vz,
        73: $VA,
        74: $VB,
        76: $VC,
        77: $VD,
        78: $VE,
        79: $VF,
        80: $VG,
        82: $VH,
        85: $VI,
        86: $VJ,
        87: $VK
      }],
      defaultActions: {
        3: [2, 2],
        74: [2, 1]
      },
      parseError: function parseError(str, hash) {
        if (hash.recoverable) {
          this.trace(str);
        } else {
          var error = new Error(str);
          error.hash = hash;
          throw error;
        }
      },
      parse: function parse(input) {
        var self2 = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
        var args = lstack.slice.call(arguments, 1);
        var lexer2 = Object.create(this.lexer);
        var sharedState = {
          yy: {}
        };
        for (var k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
          }
        }
        lexer2.setInput(input, sharedState.yy);
        sharedState.yy.lexer = lexer2;
        sharedState.yy.parser = this;
        if (typeof lexer2.yylloc == "undefined") {
          lexer2.yylloc = {};
        }
        var yyloc = lexer2.yylloc;
        lstack.push(yyloc);
        var ranges = lexer2.options && lexer2.options.ranges;
        if (typeof sharedState.yy.parseError === "function") {
          this.parseError = sharedState.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
        }
        var lex = function lex2() {
          var token;
          token = lexer2.lex() || EOF;
          if (typeof token !== "number") {
            token = self2.symbols_[token] || token;
          }
          return token;
        };
        var symbol, preErrorSymbol, state, action, a2, r, yyval = {}, p, len, newState, expected;
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            expected = [];
            for (p in table[state]) {
              if (this.terminals_[p] && p > TERROR) {
                expected.push("'" + this.terminals_[p] + "'");
              }
            }
            if (lexer2.showPosition) {
              errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
            } else {
              errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
            }
            this.parseError(errStr, {
              text: lexer2.match,
              token: this.terminals_[symbol] || symbol,
              line: lexer2.yylineno,
              loc: yyloc,
              expected
            });
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(lexer2.yytext);
              lstack.push(lexer2.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                yyleng = lexer2.yyleng;
                yytext = lexer2.yytext;
                yylineno = lexer2.yylineno;
                yyloc = lexer2.yylloc;
                if (recovering > 0) {
                  recovering--;
                }
              } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
              };
              if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }
    };
    var lexer = function() {
      var lexer2 = {
        EOF: 1,
        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
        setInput: function setInput(input, yy) {
          this.yy = yy || this.yy || {};
          this._input = input;
          this._more = this._backtrack = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          };
          if (this.options.ranges) {
            this.yylloc.range = [0, 0];
          }
          this.offset = 0;
          return this;
        },
        input: function input() {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges) {
            this.yylloc.range[1]++;
          }
          this._input = this._input.slice(1);
          return ch;
        },
        unput: function unput(ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len);
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
          }
          var r = this.yylloc.range;
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
          };
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          this.yyleng = this.yytext.length;
          return this;
        },
        more: function more() {
          this._more = true;
          return this;
        },
        reject: function reject() {
          if (this.options.backtrack_lexer) {
            this._backtrack = true;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
          return this;
        },
        less: function less(n) {
          this.unput(this.match.slice(n));
        },
        pastInput: function pastInput() {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function upcomingInput() {
          var next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        showPosition: function showPosition() {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },
        test_match: function test_match(match, indexed_rule) {
          var token, lines, backup;
          if (this.options.backtrack_lexer) {
            backup = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            };
            if (this.options.ranges) {
              backup.yylloc.range = this.yylloc.range.slice(0);
            }
          }
          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno += lines.length;
          }
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
          }
          this._more = false;
          this._backtrack = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) {
            this.done = false;
          }
          if (token) {
            return token;
          } else if (this._backtrack) {
            for (var k in backup) {
              this[k] = backup[k];
            }
            return false;
          }
          return false;
        },
        next: function next() {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input) {
            this.done = true;
          }
          var token, match, tempMatch, index;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
              match = tempMatch;
              index = i;
              if (this.options.backtrack_lexer) {
                token = this.test_match(tempMatch, rules[i]);
                if (token !== false) {
                  return token;
                } else if (this._backtrack) {
                  match = false;
                  continue;
                } else {
                  return false;
                }
              } else if (!this.options.flex) {
                break;
              }
            }
          }
          if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
              return token;
            }
            return false;
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          }
        },
        lex: function lex() {
          var r = this.next();
          if (r) {
            return r;
          } else {
            return this.lex();
          }
        },
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },
        popState: function popState() {
          var n = this.conditionStack.length - 1;
          if (n > 0) {
            return this.conditionStack.pop();
          } else {
            return this.conditionStack[0];
          }
        },
        _currentRules: function _currentRules() {
          if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          } else {
            return this.conditions["INITIAL"].rules;
          }
        },
        topState: function topState(n) {
          n = this.conditionStack.length - 1 - Math.abs(n || 0);
          if (n >= 0) {
            return this.conditionStack[n];
          } else {
            return "INITIAL";
          }
        },
        pushState: function pushState(condition) {
          this.begin(condition);
        },
        stateStackSize: function stateStackSize() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
          var YYSTATE = YY_START;
          switch ($avoiding_name_collisions) {
            case 0:
              break;
            case 1:
              return 18;
              break;
            case 2:
              return 19;
              break;
            case 3:
              return 20;
              break;
            case 4:
              return 21;
              break;
            case 5:
              return 22;
              break;
            case 6:
              return 23;
              break;
            case 7:
              return 24;
              break;
            case 8:
              return 25;
              break;
            case 9:
              return 26;
              break;
            case 10:
              return 27;
              break;
            case 11:
              return 28;
              break;
            case 12:
              return 29;
              break;
            case 13:
              return 30;
              break;
            case 14:
              return 31;
              break;
            case 15:
              return 32;
              break;
            case 16:
              return 33;
              break;
            case 17:
              return 34;
              break;
            case 18:
              return 35;
              break;
            case 19:
              return 11;
              break;
            case 20:
              return 10;
              break;
            case 21:
              return 16;
              break;
            case 22:
              return 68;
              break;
            case 23:
              return 66;
              break;
            case 24:
              return 59;
              break;
            case 25:
              return 82;
              break;
            case 26:
              return 85;
              break;
            case 27:
              return 86;
              break;
            case 28:
              return 87;
              break;
            case 29:
              return 80;
              break;
            case 30:
              return 60;
              break;
            case 31:
              return 61;
              break;
            case 32:
              return 62;
              break;
            case 33:
              return 63;
              break;
            case 34:
              return 64;
              break;
            case 35:
              return 77;
              break;
            case 36:
              return 78;
              break;
            case 37:
              return 79;
              break;
            case 38:
              return 71;
              break;
            case 39:
              return 72;
              break;
            case 40:
              return 75;
              break;
            case 41:
              return 76;
              break;
            case 42:
              return 65;
              break;
            case 43:
              return 67;
              break;
            case 44:
              return 69;
              break;
            case 45:
              return 70;
              break;
            case 46:
              return 73;
              break;
            case 47:
              return 74;
              break;
            case 48:
              return 52;
              break;
            case 49:
              return 17;
              break;
            case 50:
              return 81;
              break;
            case 51:
              return 9;
              break;
            case 52:
              return 90;
              break;
            case 53:
              return 91;
              break;
            case 54:
              return 89;
              break;
            case 55:
              return 57;
              break;
            case 56:
              return 88;
              break;
            case 57:
              return 53;
              break;
            case 58:
              return 55;
              break;
            case 59:
              return "INVALID";
              break;
            case 60:
              return 5;
              break;
          }
        },
        rules: [/^(?:\s+)/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Pp])([Xx]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Ee])([Mm]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Rr])([Ee])([Mm]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Vv])([Hh]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Vv])([Ww]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Vv])([Mm])([Ii])([Nn]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Vv])([Mm])([Aa])([Xx]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Cc])([Mm]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Mm])([Mm]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Qq]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Ii])([Nn]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Pp])([Cc]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Pp])([Tt]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Dd])([Ee])([Gg]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Rr])([Aa])([Dd]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Gg])([Rr])([Aa])([Dd]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Mm])([Ss]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)([Ss]))/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)%)/, /^(?:([+-]?[0-9]+(\.[0-9]+)?([eE][+\-]?[0-9]+)?|[+-]?\.[0-9]+([eE][+\-]?[0-9]+)?)\b)/, /^(?:#([a-fA-F0-9]+))/, /^(?:([Aa])([Tt]))/, /^(?:([Rr])([Oo])([Uu])([Nn])([Dd]))/, /^(?:([Uu])([Rr])([Ll])\()/, /^(?:([Cc])([Aa])([Ll])([Cc])\()/, /^(?:([Mm])([Ii])([Nn])\()/, /^(?:([Mm])([Aa])([Xx])\()/, /^(?:([Cc])([Ll])([Aa])([Mm])([Pp])\()/, /^(?:([Vv])([Aa])([Rr])\()/, /^(?:([Tt])([Rr])([Aa])([Nn])([Ss])([Ll])([Aa])([Tt])([Ee])\()/, /^(?:([Tt])([Rr])([Aa])([Nn])([Ss])([Ll])([Aa])([Tt])([Ee])([Xx])\()/, /^(?:([Tt])([Rr])([Aa])([Nn])([Ss])([Ll])([Aa])([Tt])([Ee])([Yy])\()/, /^(?:([Tt])([Rr])([Aa])([Nn])([Ss])([Ll])([Aa])([Tt])([Ee])([Zz])\()/, /^(?:([Tt])([Rr])([Aa])([Nn])([Ss])([Ll])([Aa])([Tt])([Ee])3([Dd])\()/, /^(?:([Rr])([Aa])([Nn])([Dd])\()/, /^(?:([Ii])([Nn])([Dd])([Ee])([Xx])\()/, /^(?:([Ll])([Ee])([Nn])([Gg])([Tt])([Hh])\()/, /^(?:([Ww])([Ii])([Dd])([Tt])([Hh])\()/, /^(?:([Hh])([Ee])([Ii])([Gg])([Hh])([Tt])\()/, /^(?:([Cc])([Ll])([Oo])([Ss])([Ee])([Ss])([Tt])\()/, /^(?:([Nn])([Uu])([Mm])\()/, /^(?:([Ii])([Nn])([Ss])([Ee])([Tt])\()/, /^(?:([Cc])([Ii])([Rr])([Cc])([Ll])([Ee])\()/, /^(?:([Ee])([Ll])([Ll])([Ii])([Pp])([Ss])([Ee])\()/, /^(?:([Pp])([Oo])([Ll])([Yy])([Gg])([Oo])([Nn])\()/, /^(?:([Xx])\()/, /^(?:([Yy])\()/, /^(?:(-?[a-zA-Z_][\-a-zA-Z0-9_]*)\()/, /^(?:(-?[a-zA-Z_][\-a-zA-Z0-9_]*))/, /^(?:--(-?[a-zA-Z_][\-a-zA-Z0-9_]*))/, /^(?:('[^\']*'|"[^\"]*"))/, /^(?:\+)/, /^(?:-)/, /^(?:\*)/, /^(?:\/)/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:.)/, /^(?:$)/],
        conditions: {
          "INITIAL": {
            "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
            "inclusive": true
          }
        }
      };
      return lexer2;
    }();
    parser2.lexer = lexer;
    function Parser() {
      this.yy = {};
    }
    Parser.prototype = parser2;
    parser2.Parser = Parser;
    return new Parser();
  }();
  var cssParser = parser;

  // extensions/amp-animation/0.1/parsers/css-expr.js
  function parseCss(cssString) {
    return cssParser.parse(cssString);
  }

  // extensions/amp-animation/0.1/web-animations.js
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf4(o, p);
  }
  function _createSuper4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct4();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf4(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf4(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn4(this, result);
    };
  }
  function _possibleConstructorReturn4(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized4(self2);
  }
  function _assertThisInitialized4(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct4() {
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
  function _getPrototypeOf4(o) {
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
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
  var TAG2 = "amp-animation";
  var TARGET_ANIM_ID = "__AMP_ANIM_ID";
  var animIdCounter = 0;
  var SERVICE_PROPS = {
    "offset": true,
    "easing": true
  };
  var ADD_PROPS = {
    "clip-path": "-webkit-clip-path",
    "clipPath": "-webkit-clip-path"
  };
  var Scanner = /* @__PURE__ */ function() {
    function Scanner2() {
      _classCallCheck9(this, Scanner2);
    }
    _createClass8(Scanner2, [{
      key: "scan",
      value: function scan(spec) {
        var _this = this;
        if (isArray(spec)) {
          return spec.reduce(function(acc, comp) {
            return _this.scan(comp) || acc;
          }, false);
        }
        if (!this.isEnabled(spec)) {
          return false;
        }
        if (spec.animations) {
          this.onMultiAnimation(spec);
        } else if (spec.switch) {
          this.onSwitchAnimation(spec);
        } else if (spec.animation) {
          this.onCompAnimation(spec);
        } else if (spec.keyframes) {
          this.onKeyframeAnimation(spec);
        } else {
          this.onUnknownAnimation(spec);
        }
        return true;
      }
    }, {
      key: "isEnabled",
      value: function isEnabled2(unusedSpec) {
        return true;
      }
    }, {
      key: "onMultiAnimation",
      value: function onMultiAnimation(unusedSpec) {
      }
    }, {
      key: "onSwitchAnimation",
      value: function onSwitchAnimation(unusedSpec) {
      }
    }, {
      key: "onCompAnimation",
      value: function onCompAnimation(unusedSpec) {
      }
    }, {
      key: "onKeyframeAnimation",
      value: function onKeyframeAnimation(unusedSpec) {
      }
    }, {
      key: "onUnknownAnimation",
      value: function onUnknownAnimation(unusedSpec) {
        throw dev().createError('unknown animation type: must have "animations" or "keyframes" field');
      }
    }]);
    return Scanner2;
  }();
  var Builder = /* @__PURE__ */ function() {
    function Builder2(win, rootNode, baseUrl, vsync, owners, options) {
      if (options === void 0) {
        options = {};
      }
      _classCallCheck9(this, Builder2);
      this.win_ = win;
      this.css_ = new CssContextImpl(win, rootNode, baseUrl, options);
      this.vsync_ = vsync;
      this.owners_ = owners;
      this.targets_ = [];
      this.loaders_ = [];
    }
    _createClass8(Builder2, [{
      key: "createRunner",
      value: function createRunner(spec, opt_args, opt_positionObserverData) {
        var _this2 = this;
        if (opt_positionObserverData === void 0) {
          opt_positionObserverData = null;
        }
        return this.resolveRequests([], spec, opt_args).then(function(requests) {
          if (getMode().localDev || getMode().development) {
            user().fine(TAG2, "Animation: ", requests);
          }
          return Promise.all(_this2.loaders_).then(function() {
            return _this2.isAnimationWorkletSupported_() && opt_positionObserverData ? new ScrollTimelineWorkletRunner(_this2.win_, requests, opt_positionObserverData) : new NativeWebAnimationRunner(requests);
          });
        });
      }
    }, {
      key: "resolveRequests",
      value: function resolveRequests(path, spec, args, target, index, vars, timing) {
        if (target === void 0) {
          target = null;
        }
        if (index === void 0) {
          index = null;
        }
        if (vars === void 0) {
          vars = null;
        }
        if (timing === void 0) {
          timing = null;
        }
        var scanner = this.createScanner_(path, target, index, vars, timing);
        return this.vsync_.measurePromise(function() {
          return scanner.resolveRequests(spec, args);
        });
      }
    }, {
      key: "requireLayout",
      value: function requireLayout(target) {
        if (!this.targets_.includes(target)) {
          this.targets_.push(target);
          this.loaders_.push(this.owners_.requireLayout(target));
        }
      }
    }, {
      key: "createScanner_",
      value: function createScanner_(path, target, index, vars, timing) {
        return new MeasureScanner(this, this.css_, path, target, index, vars, timing);
      }
    }, {
      key: "isAnimationWorkletSupported_",
      value: function isAnimationWorkletSupported_() {
        return isExperimentOn(this.win_, "chrome-animation-worklet") && "animationWorklet" in CSS && getMode(this.win_).runtime != "inabox" && !isInFie(this.win_.document.documentElement);
      }
    }]);
    return Builder2;
  }();
  var MeasureScanner = /* @__PURE__ */ function(_Scanner) {
    _inherits4(MeasureScanner2, _Scanner);
    var _super = _createSuper4(MeasureScanner2);
    function MeasureScanner2(builder, css, path, target, index, vars, timing) {
      var _this3;
      _classCallCheck9(this, MeasureScanner2);
      _this3 = _super.call(this);
      _this3.builder_ = builder;
      _this3.css_ = css;
      _this3.path_ = path;
      _this3.target_ = target;
      _this3.index_ = index;
      _this3.vars_ = vars || map();
      _this3.timing_ = timing || {
        duration: 0,
        delay: 0,
        endDelay: 0,
        iterations: 1,
        iterationStart: 0,
        easing: "linear",
        direction: WebAnimationTimingDirection.NORMAL,
        fill: WebAnimationTimingFill.NONE
      };
      _this3.requests_ = [];
      _this3.deps_ = [];
      return _this3;
    }
    _createClass8(MeasureScanner2, [{
      key: "resolveRequests",
      value: function resolveRequests(spec, opt_args) {
        var _this4 = this;
        if (opt_args) {
          this.with_(opt_args, function() {
            _this4.scan(spec);
          });
        } else {
          this.css_.withVars(this.vars_, function() {
            _this4.scan(spec);
          });
        }
        return Promise.all(this.deps_).then(function() {
          return _this4.requests_;
        });
      }
    }, {
      key: "isEnabled",
      value: function isEnabled2(spec) {
        if (spec.media && !this.css_.matchMedia(spec.media)) {
          return false;
        }
        if (spec.supports && !this.css_.supports(spec.supports)) {
          return false;
        }
        return true;
      }
    }, {
      key: "onMultiAnimation",
      value: function onMultiAnimation(spec) {
        var _this5 = this;
        this.with_(spec, function() {
          return _this5.scan(spec.animations);
        });
      }
    }, {
      key: "onSwitchAnimation",
      value: function onSwitchAnimation(spec) {
        var _this6 = this;
        this.with_(spec, function() {
          for (var i = 0; i < spec.switch.length; i++) {
            var candidate = spec.switch[i];
            if (_this6.scan(candidate)) {
              break;
            }
          }
        });
      }
    }, {
      key: "onCompAnimation",
      value: function onCompAnimation(spec) {
        var _this7 = this;
        userAssert(this.path_.indexOf(spec.animation) == -1, 'Recursive animations are not allowed: "' + spec.animation + '"');
        var newPath = this.path_.concat(spec.animation);
        var animationElement = user().assertElement(this.css_.getElementById(spec.animation), 'Animation not found: "' + spec.animation + '"');
        userAssert(animationElement.tagName == "AMP-ANIMATION", 'Element is not an animation: "' + spec.animation + '"');
        var otherSpecPromise = animationElement.getImpl().then(function(impl) {
          return impl.getAnimationSpec();
        });
        this.with_(spec, function() {
          var index = _this7.index_, target = _this7.target_, timing = _this7.timing_, vars = _this7.vars_;
          var promise = otherSpecPromise.then(function(otherSpec) {
            if (!otherSpec) {
              return;
            }
            return _this7.builder_.resolveRequests(newPath, otherSpec, null, target, index, vars, timing);
          }).then(function(requests) {
            requests.forEach(function(request) {
              return _this7.requests_.push(request);
            });
          });
          _this7.deps_.push(promise);
        });
      }
    }, {
      key: "onKeyframeAnimation",
      value: function onKeyframeAnimation(spec) {
        var _this8 = this;
        this.with_(spec, function() {
          var target = user().assertElement(_this8.target_, "No target specified");
          var keyframes = _this8.createKeyframes_(target, spec);
          _this8.requests_.push({
            target,
            keyframes,
            vars: _this8.vars_,
            timing: _this8.timing_
          });
        });
      }
    }, {
      key: "createKeyframes_",
      value: function createKeyframes_(target, spec) {
        var _this9 = this;
        var specKeyframes = spec.keyframes;
        if (typeof specKeyframes == "string") {
          var keyframes = extractKeyframes(this.css_.rootNode, specKeyframes);
          userAssert(keyframes, 'Keyframes not found in stylesheet: "' + specKeyframes + '"');
          specKeyframes = keyframes;
        }
        if (isObject(specKeyframes)) {
          var object = specKeyframes;
          var _keyframes = {};
          for (var prop in object) {
            this.validateProperty_(prop);
            var value = object[prop];
            var preparedValue = void 0;
            if (SERVICE_PROPS[prop]) {
              preparedValue = value;
            } else if (!isArray(value) || value.length == 1) {
              var fromValue = this.css_.measure(target, prop);
              var toValue = isArray(value) ? value[0] : value;
              preparedValue = [fromValue, this.css_.resolveCss(toValue)];
            } else {
              preparedValue = value.map(function(v) {
                return _this9.css_.resolveCss(v);
              });
            }
            _keyframes[prop] = preparedValue;
            if (prop in ADD_PROPS) {
              _keyframes[ADD_PROPS[prop]] = preparedValue;
            }
          }
          return _keyframes;
        }
        if (isArray(specKeyframes) && specKeyframes.length > 0) {
          var array = specKeyframes;
          var _keyframes2 = [];
          var addStartFrame = array.length == 1 || array[0].offset > 0;
          var startFrame = addStartFrame ? map() : this.css_.resolveCssMap(array[0]);
          _keyframes2.push(startFrame);
          var start = addStartFrame ? 0 : 1;
          for (var i = start; i < array.length; i++) {
            var frame = array[i];
            for (var _prop in frame) {
              if (SERVICE_PROPS[_prop]) {
                continue;
              }
              this.validateProperty_(_prop);
              if (!startFrame[_prop]) {
                startFrame[_prop] = this.css_.measure(target, _prop);
              }
            }
            _keyframes2.push(this.css_.resolveCssMap(frame));
          }
          for (var _i = 0; _i < _keyframes2.length; _i++) {
            var _frame = _keyframes2[_i];
            for (var k in ADD_PROPS) {
              if (k in _frame) {
                _frame[ADD_PROPS[k]] = _frame[k];
              }
            }
          }
          return _keyframes2;
        }
        throw user().createError("keyframes not found", specKeyframes);
      }
    }, {
      key: "onUnknownAnimation",
      value: function onUnknownAnimation() {
        throw user().createError('unknown animation type: must have "animation", "animations" or "keyframes" field');
      }
    }, {
      key: "validateProperty_",
      value: function validateProperty_(prop) {
        if (SERVICE_PROPS[prop]) {
          return;
        }
        userAssert(isAllowlistedProp(prop), "Property is not allowlisted for animation: %s", prop);
      }
    }, {
      key: "with_",
      value: function with_(spec, callback) {
        var _this10 = this;
        var prevIndex = this.index_, prevTarget = this.target_, prevTiming = this.timing_, prevVars = this.vars_;
        var targets = spec.target || spec.selector ? this.resolveTargets_(spec) : [null];
        this.css_.setTargetLength(targets.length);
        targets.forEach(function(target, index) {
          _this10.target_ = target || prevTarget;
          _this10.index_ = target ? index : prevIndex;
          _this10.css_.withTarget(_this10.target_, _this10.index_, function() {
            var subtargetSpec = _this10.target_ ? _this10.matchSubtargets_(_this10.target_, _this10.index_ || 0, spec) : spec;
            _this10.vars_ = _this10.mergeVars_(subtargetSpec, prevVars);
            _this10.css_.withVars(_this10.vars_, function() {
              _this10.timing_ = _this10.mergeTiming_(subtargetSpec, prevTiming);
              callback();
            });
          });
        });
        this.target_ = prevTarget;
        this.index_ = prevIndex;
        this.vars_ = prevVars;
        this.timing_ = prevTiming;
      }
    }, {
      key: "resolveTargets_",
      value: function resolveTargets_(spec) {
        var _this11 = this;
        var targets;
        if (spec.selector) {
          userAssert(!spec.target, 'Both "selector" and "target" are not allowed');
          targets = this.css_.queryElements(spec.selector);
          if (targets.length == 0) {
            user().warn(TAG2, 'Target not found: "' + spec.selector + '"');
          }
        } else if (spec.target) {
          if (typeof spec.target == "string") {
            user().error(TAG2, "string targets are deprecated");
          }
          var target = user().assertElement(typeof spec.target == "string" ? this.css_.getElementById(spec.target) : spec.target, 'Target not found: "' + spec.target + '"');
          targets = [target];
        } else if (this.target_) {
          targets = [this.target_];
        }
        targets.forEach(function(target2) {
          return _this11.builder_.requireLayout(target2);
        });
        return targets;
      }
    }, {
      key: "matchSubtargets_",
      value: function matchSubtargets_(target, index, spec) {
        var _this12 = this;
        if (!spec.subtargets || spec.subtargets.length == 0) {
          return spec;
        }
        var result = map(spec);
        spec.subtargets.forEach(function(subtargetSpec) {
          var matcher = _this12.getMatcher_(subtargetSpec);
          if (matcher(target, index)) {
            Object.assign(result, subtargetSpec);
          }
        });
        return result;
      }
    }, {
      key: "getMatcher_",
      value: function getMatcher_(spec) {
        if (spec.matcher) {
          return spec.matcher;
        }
        userAssert((spec.index !== void 0 || spec.selector !== void 0) && (spec.index === void 0 || spec.selector === void 0), 'Only one "index" or "selector" must be specified');
        var matcher;
        if (spec.index !== void 0) {
          var specIndex = Number(spec.index);
          matcher = function matcher2(target, index) {
            return index === specIndex;
          };
        } else {
          var specSelector = spec.selector;
          matcher = function matcher2(target) {
            try {
              return matches(target, specSelector);
            } catch (e) {
              throw user().createError('Bad subtarget selector: "' + specSelector + '"', e);
            }
          };
        }
        return spec.matcher = matcher;
      }
    }, {
      key: "mergeVars_",
      value: function mergeVars_(newVars, prevVars) {
        var _this13 = this;
        var result = map(prevVars);
        for (var k in newVars) {
          if (k.startsWith("--")) {
            result[k] = newVars[k];
          }
        }
        this.css_.withVars(result, function() {
          for (var _k in newVars) {
            if (_k.startsWith("--")) {
              result[_k] = _this13.css_.resolveCss(newVars[_k]);
            }
          }
        });
        return result;
      }
    }, {
      key: "mergeTiming_",
      value: function mergeTiming_(newTiming, prevTiming) {
        var duration = this.css_.resolveMillis(newTiming.duration, prevTiming.duration);
        var delay = this.css_.resolveMillis(newTiming.delay, prevTiming.delay);
        var endDelay = this.css_.resolveMillis(newTiming.endDelay, prevTiming.endDelay);
        var iterations = this.css_.resolveNumber(newTiming.iterations, dev().assertNumber(prevTiming.iterations));
        var iterationStart = this.css_.resolveNumber(newTiming.iterationStart, prevTiming.iterationStart);
        var easing = this.css_.resolveIdent(newTiming.easing, prevTiming.easing);
        var direction = this.css_.resolveIdent(newTiming.direction, prevTiming.direction);
        var fill = this.css_.resolveIdent(newTiming.fill, prevTiming.fill);
        this.validateTime_(duration, newTiming.duration, "duration");
        this.validateTime_(delay, newTiming.delay, "delay", true);
        this.validateTime_(endDelay, newTiming.endDelay, "endDelay");
        userAssert(iterations != null && iterations >= 0, '"iterations" is invalid: %s', newTiming.iterations);
        userAssert(iterationStart != null && iterationStart >= 0 && isFinite(iterationStart), '"iterationStart" is invalid: %s', newTiming.iterationStart);
        userAssert(isEnumValue(WebAnimationTimingDirection, direction), "Unknown direction: " + direction);
        userAssert(isEnumValue(WebAnimationTimingFill, fill), "Unknown fill: " + fill);
        return {
          duration,
          delay,
          endDelay,
          iterations,
          iterationStart,
          easing,
          direction,
          fill
        };
      }
    }, {
      key: "validateTime_",
      value: function validateTime_(value, newValue, field, opt_allowNegative) {
        userAssert(value != null && (value >= 0 || value < 0 && opt_allowNegative), '"%s" is invalid: %s', field, newValue);
        if (newValue != null && Math.floor(value) != value && value < 1) {
          user().warn(TAG2, '"' + field + '" is fractional. Note that all times are in milliseconds.');
        }
      }
    }]);
    return MeasureScanner2;
  }(Scanner);
  var CssContextImpl = /* @__PURE__ */ function() {
    function CssContextImpl2(win, rootNode, baseUrl, options) {
      _classCallCheck9(this, CssContextImpl2);
      var _options$scaleByScope = options.scaleByScope, scaleByScope = _options$scaleByScope === void 0 ? false : _options$scaleByScope, _options$scope = options.scope, scope = _options$scope === void 0 ? null : _options$scope;
      this.win_ = win;
      this.rootNode_ = rootNode;
      this.scope_ = scope;
      this.scaleByScope_ = scaleByScope;
      this.baseUrl_ = baseUrl;
      this.computedStyleCache_ = map();
      this.parsedCssCache_ = map();
      this.targetLength_ = null;
      this.currentTarget_ = null;
      this.currentIndex_ = null;
      this.vars_ = null;
      this.varPath_ = [];
      this.dim_ = null;
      this.viewportParams_ = null;
    }
    _createClass8(CssContextImpl2, [{
      key: "rootNode",
      get: function get() {
        return this.rootNode_;
      }
    }, {
      key: "matchMedia",
      value: function matchMedia(mediaQuery) {
        return this.win_.matchMedia(mediaQuery).matches;
      }
    }, {
      key: "supports",
      value: function supports(query) {
        if (this.win_.CSS && this.win_.CSS.supports) {
          return this.win_.CSS.supports(query);
        }
        return false;
      }
    }, {
      key: "getElementById",
      value: function getElementById(id) {
        return this.scopedQuerySelector_("#" + escapeCssSelectorIdent(id));
      }
    }, {
      key: "queryElements",
      value: function queryElements(selector) {
        try {
          return toArray(this.scopedQuerySelectorAll_(selector));
        } catch (e) {
          throw user().createError('Bad query selector: "' + selector + '"', e);
        }
      }
    }, {
      key: "measure",
      value: function measure(target, prop) {
        var targetId = target[TARGET_ANIM_ID];
        if (!targetId) {
          targetId = String(++animIdCounter);
          target[TARGET_ANIM_ID] = targetId;
        }
        var styles = this.computedStyleCache_[targetId];
        if (!styles) {
          styles = computedStyle(this.win_, target);
          this.computedStyleCache_[targetId] = styles;
        }
        return prop.startsWith("--") ? styles.getPropertyValue(prop) : styles[getVendorJsPropertyName(styles, dashToCamelCase(prop))];
      }
    }, {
      key: "setTargetLength",
      value: function setTargetLength(len) {
        this.targetLength_ = len;
      }
    }, {
      key: "withTarget",
      value: function withTarget(target, index, callback) {
        var prevIndex = this.currentIndex_, prev = this.currentTarget_;
        this.currentTarget_ = target;
        this.currentIndex_ = index;
        var result = callback(target);
        this.currentTarget_ = prev;
        this.currentIndex_ = prevIndex;
        return result;
      }
    }, {
      key: "withVars",
      value: function withVars(vars, callback) {
        var prev = this.vars_;
        this.vars_ = vars;
        var result = callback();
        this.vars_ = prev;
        return result;
      }
    }, {
      key: "resolveCss",
      value: function resolveCss(input) {
        return dev().assertString(this.resolveCss_(input, "", true));
      }
    }, {
      key: "resolveCssMap",
      value: function resolveCssMap(input) {
        var result = map();
        for (var k in input) {
          if (k == "offset") {
            result[k] = input[k];
          } else {
            result[k] = this.resolveCss(input[k]);
          }
        }
        return result;
      }
    }, {
      key: "resolveIdent",
      value: function resolveIdent(input, def) {
        return this.resolveCss_(input, def, false);
      }
    }, {
      key: "resolveMillis",
      value: function resolveMillis(input, def) {
        if (input != null && input !== "") {
          if (typeof input == "number") {
            return input;
          }
          var node = this.resolveAsNode_(input, false);
          if (node) {
            return CssTimeNode.millis(node);
          }
        }
        return def;
      }
    }, {
      key: "resolveNumber",
      value: function resolveNumber(input, def) {
        if (input != null && input !== "") {
          if (typeof input == "number") {
            return input;
          }
          var node = this.resolveAsNode_(input, false);
          if (node) {
            return CssNumberNode.num(node);
          }
        }
        return def;
      }
    }, {
      key: "resolveCss_",
      value: function resolveCss_(input, def, normalize) {
        if (input == null || input === "") {
          return def;
        }
        var inputCss = String(input);
        if (typeof input == "number") {
          return inputCss;
        }
        if (!isVarCss(inputCss, normalize)) {
          return inputCss;
        }
        var result = this.resolveAsNode_(inputCss, normalize);
        return result != null ? result.css() : def;
      }
    }, {
      key: "resolveAsNode_",
      value: function resolveAsNode_(input, normalize) {
        if (input == null || input === "") {
          return null;
        }
        if (typeof input == "number") {
          return new CssNumberNode(input);
        }
        var css = String(input);
        var node = this.parsedCssCache_[css];
        if (node === void 0) {
          node = parseCss(css);
          this.parsedCssCache_[css] = node;
        }
        if (!node) {
          return null;
        }
        return node.resolve(this, normalize);
      }
    }, {
      key: "requireTarget_",
      value: function requireTarget_() {
        return user().assertElement(this.currentTarget_, "Only allowed when target is specified");
      }
    }, {
      key: "getVar",
      value: function getVar(varName) {
        userAssert(this.varPath_.indexOf(varName) == -1, 'Recursive variable: "' + varName + '"');
        this.varPath_.push(varName);
        var rawValue = this.vars_ && this.vars_[varName] != void 0 ? this.vars_[varName] : this.currentTarget_ ? this.measure(this.currentTarget_, varName) : null;
        if (rawValue == null || rawValue === "") {
          user().warn(TAG2, 'Variable not found: "' + varName + '"');
        }
        var result = this.resolveAsNode_(rawValue, false);
        this.varPath_.pop();
        return result;
      }
    }, {
      key: "withDimension",
      value: function withDimension(dim, callback) {
        var savedDim = this.dim_;
        this.dim_ = dim;
        var result = callback();
        this.dim_ = savedDim;
        return result;
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        return this.dim_;
      }
    }, {
      key: "getViewportSize",
      value: function getViewportSize() {
        return this.getViewportParams_().size;
      }
    }, {
      key: "getViewportParams_",
      value: function getViewportParams_() {
        if (!this.viewportParams_) {
          if (this.scope_ && this.scaleByScope_) {
            var rect = this.scope_.getBoundingClientRect();
            var _this$scope_ = this.scope_, offsetHeight = _this$scope_.offsetHeight, offsetWidth = _this$scope_.offsetWidth;
            this.viewportParams_ = {
              offset: {
                x: rect.x,
                y: rect.y
              },
              size: {
                width: offsetWidth,
                height: offsetHeight
              },
              scaleFactorX: offsetWidth / (rect.width || 1),
              scaleFactorY: offsetHeight / (rect.height || 1)
            };
          } else {
            var _this$win_ = this.win_, innerHeight = _this$win_.innerHeight, innerWidth = _this$win_.innerWidth;
            this.viewportParams_ = {
              offset: {
                x: 0,
                y: 0
              },
              size: {
                width: innerWidth,
                height: innerHeight
              },
              scaleFactorX: 1,
              scaleFactorY: 1
            };
          }
        }
        return this.viewportParams_;
      }
    }, {
      key: "getCurrentIndex",
      value: function getCurrentIndex() {
        this.requireTarget_();
        return dev().assertNumber(this.currentIndex_);
      }
    }, {
      key: "getTargetLength",
      value: function getTargetLength() {
        this.requireTarget_();
        return dev().assertNumber(this.targetLength_);
      }
    }, {
      key: "getCurrentFontSize",
      value: function getCurrentFontSize() {
        return this.getElementFontSize_(this.requireTarget_());
      }
    }, {
      key: "getRootFontSize",
      value: function getRootFontSize() {
        return this.getElementFontSize_(this.win_.document.documentElement);
      }
    }, {
      key: "getElementFontSize_",
      value: function getElementFontSize_(target) {
        return parseFloat(this.measure(target, "font-size"));
      }
    }, {
      key: "getCurrentElementRect",
      value: function getCurrentElementRect() {
        return this.getElementRect_(this.requireTarget_());
      }
    }, {
      key: "getElementRect",
      value: function getElementRect(selector, selectionMethod) {
        return this.getElementRect_(this.getElement_(selector, selectionMethod));
      }
    }, {
      key: "getElement_",
      value: function getElement_(selector, selectionMethod) {
        devAssert2(selectionMethod == null || selectionMethod == "closest", "Unknown selection method: %s", selectionMethod);
        var element;
        try {
          if (selectionMethod == "closest") {
            var maybeFoundInScope = closestAncestorElementBySelector(this.requireTarget_(), selector);
            if (maybeFoundInScope && (!this.scope_ || this.scope_.contains(maybeFoundInScope))) {
              element = maybeFoundInScope;
            }
          } else {
            element = this.scopedQuerySelector_(selector);
          }
        } catch (e) {
          throw user().createError('Bad query selector: "' + selector + '"', e);
        }
        return user().assertElement(element, "Element not found: " + selector);
      }
    }, {
      key: "getElementRect_",
      value: function getElementRect_(target) {
        var _this$getViewportPara = this.getViewportParams_(), offset = _this$getViewportPara.offset, scaleFactorX = _this$getViewportPara.scaleFactorX, scaleFactorY = _this$getViewportPara.scaleFactorY;
        var _target$getBoundingCl = target.getBoundingClientRect(), height = _target$getBoundingCl.height, width = _target$getBoundingCl.width, x = _target$getBoundingCl.x, y = _target$getBoundingCl.y;
        return layoutRectLtwh((x - offset.x) * scaleFactorX, (y - offset.y) * scaleFactorY, width * scaleFactorX, height * scaleFactorY);
      }
    }, {
      key: "resolveUrl",
      value: function resolveUrl(url) {
        var resolvedUrl = resolveRelativeUrl(url, this.baseUrl_);
        return assertHttpsUrl(resolvedUrl, this.currentTarget_ || "");
      }
    }, {
      key: "scopedQuerySelector_",
      value: function scopedQuerySelector_(selector) {
        if (this.scope_) {
          return scopedQuerySelector(this.scope_, selector);
        }
        return this.rootNode_.querySelector(selector);
      }
    }, {
      key: "scopedQuerySelectorAll_",
      value: function scopedQuerySelectorAll_(selector) {
        if (this.scope_) {
          return scopedQuerySelectorAll(this.scope_, selector);
        }
        return this.rootNode_.querySelectorAll(selector);
      }
    }]);
    return CssContextImpl2;
  }();

  // src/pass.js
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
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      _classCallCheck10(this, Pass2);
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
    _createClass9(Pass2, [{
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

  // extensions/amp-animation/0.1/install-polyfill.js
  var polyfillPromiseMap = new WeakMap();
  function installWebAnimationsIfNecessary(ampdoc) {
    if (polyfillPromiseMap.has(ampdoc)) {
      return polyfillPromiseMap.get(ampdoc);
    }
    var _Deferred = new Deferred(), promise = _Deferred.promise, resolve = _Deferred.resolve;
    polyfillPromiseMap.set(ampdoc, promise);
    var win = ampdoc.win;
    var platform = Services.platformFor(win);
    if (platform.isSafari() && platform.getMajorVersion() < 14) {
      win.Element.prototype["animate"] = null;
    }
    if (win.Element.prototype["animate"]) {
      resolve();
      return promise;
    }
    resolve(Services.extensionsFor(win).installExtensionForDoc(ampdoc, "amp-animation-polyfill"));
    return promise;
  }

  // extensions/amp-animation/0.1/web-animation-service.js
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
  var WebAnimationService = /* @__PURE__ */ function() {
    function WebAnimationService2(ampdoc) {
      _classCallCheck11(this, WebAnimationService2);
      this.ampdoc_ = ampdoc;
      this.vsync_ = Services.vsyncFor(ampdoc.win);
      this.owners_ = Services.ownersForDoc(ampdoc);
    }
    _createClass10(WebAnimationService2, [{
      key: "createBuilder",
      value: function createBuilder(options) {
        var _this = this;
        return installWebAnimationsIfNecessary(this.ampdoc_).then(function() {
          return new Builder(_this.ampdoc_.win, _this.ampdoc_.getRootNode(), _this.ampdoc_.getUrl(), _this.vsync_, _this.owners_, options);
        });
      }
    }]);
    return WebAnimationService2;
  }();

  // src/core/math/index.js
  function clamp(val, min, max) {
    devAssert(min <= max, "Minimum value is greater than the maximum.");
    return Math.min(Math.max(val, min), max);
  }

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

  // extensions/amp-animation/0.1/amp-animation.js
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
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf6(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf5(o, p);
  }
  function _createSuper5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct5();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf5(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf5(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn5(this, result);
    };
  }
  function _possibleConstructorReturn5(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized5(self2);
  }
  function _assertThisInitialized5(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct5() {
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
  function _getPrototypeOf5(o) {
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf6(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  var TAG3 = "amp-animation";
  var AmpAnimation = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits5(AmpAnimation2, _AMP$BaseElement);
    var _super = _createSuper5(AmpAnimation2);
    function AmpAnimation2(element) {
      var _this;
      _classCallCheck12(this, AmpAnimation2);
      _this = _super.call(this, element);
      _this.triggerOnVisibility_ = false;
      _this.isIntersecting_ = false;
      _this.visible_ = false;
      _this.pausedByAction_ = false;
      _this.triggered_ = false;
      _this.cleanups_ = [];
      _this.configJson_ = null;
      _this.runner_ = null;
      _this.runnerPromise_ = null;
      _this.restartPass_ = null;
      return _this;
    }
    _createClass11(AmpAnimation2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        var ampdoc = this.getAmpDoc();
        var trigger = this.element.getAttribute("trigger");
        if (trigger) {
          this.triggerOnVisibility_ = userAssert(trigger == "visibility", 'Only allowed value for "trigger" is "visibility": %s', this.element);
        }
        this.configJson_ = getChildJsonConfig(this.element);
        if (this.triggerOnVisibility_) {
          this.mutateElement(function() {
            setStyles(_this2.element, {
              visibility: "hidden",
              top: "0px",
              left: "0px",
              width: "1px",
              height: "1px",
              position: "fixed"
            });
            toggle(_this2.element, true);
            setInitialDisplay(_this2.element, "block");
          });
        }
        this.restartPass_ = new Pass(this.win, function() {
          if (!_this2.pausedByAction_) {
            _this2.startOrResume_();
          }
        }, 50);
        this.cleanups_.push(ampdoc.onVisibilityChanged(function() {
          _this2.setVisible_(_this2.isIntersecting_ && ampdoc.isVisible());
        }));
        var io = new ampdoc.win.IntersectionObserver(function(records) {
          var isIntersecting = records[records.length - 1].isIntersecting;
          _this2.isIntersecting_ = isIntersecting;
          _this2.setVisible_(_this2.isIntersecting_ && ampdoc.isVisible());
        }, {
          threshold: 1e-3
        });
        io.observe(dev().assertElement(this.element.parentElement));
        this.cleanups_.push(function() {
          return io.disconnect();
        });
        this.cleanups_.push(listen(this.win, "resize", function() {
          return _this2.onResize_();
        }));
        this.registerDefaultAction(this.startAction_.bind(this), "start", ActionTrust.LOW);
        this.registerAction("restart", this.restartAction_.bind(this), ActionTrust.LOW);
        this.registerAction("pause", this.pauseAction_.bind(this), ActionTrust.LOW);
        this.registerAction("resume", this.resumeAction_.bind(this), ActionTrust.LOW);
        this.registerAction("togglePause", this.togglePauseAction_.bind(this), ActionTrust.LOW);
        this.registerAction("seekTo", this.seekToAction_.bind(this), ActionTrust.LOW);
        this.registerAction("reverse", this.reverseAction_.bind(this), ActionTrust.LOW);
        this.registerAction("finish", this.finishAction_.bind(this), ActionTrust.LOW);
        this.registerAction("cancel", this.cancelAction_.bind(this), ActionTrust.LOW);
      }
    }, {
      key: "detachedCallback",
      value: function detachedCallback() {
        var cleanups = this.cleanups_.slice(0);
        this.cleanups_.length = 0;
        cleanups.forEach(function(cleanup) {
          return cleanup();
        });
      }
    }, {
      key: "getAnimationSpec",
      value: function getAnimationSpec() {
        return this.configJson_;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        if (this.triggerOnVisibility_) {
          this.startAction_();
        }
        return resolvedPromise();
      }
    }, {
      key: "pauseCallback",
      value: function pauseCallback() {
        this.setVisible_(false);
      }
    }, {
      key: "startAction_",
      value: function startAction_(opt_invocation) {
        this.triggered_ = true;
        if (this.visible_) {
          return this.startOrResume_(opt_invocation ? opt_invocation.args : null);
        }
        return resolvedPromise();
      }
    }, {
      key: "restartAction_",
      value: function restartAction_(invocation) {
        this.cancel_();
        this.triggered_ = true;
        if (this.visible_) {
          return this.startOrResume_(invocation.args);
        }
        return resolvedPromise();
      }
    }, {
      key: "pauseAction_",
      value: function pauseAction_() {
        var _this3 = this;
        if (!this.triggered_) {
          return resolvedPromise();
        }
        return this.createRunnerIfNeeded_().then(function() {
          _this3.pause_();
          _this3.pausedByAction_ = true;
        });
      }
    }, {
      key: "resumeAction_",
      value: function resumeAction_() {
        var _this4 = this;
        if (!this.triggered_) {
          return resolvedPromise();
        }
        return this.createRunnerIfNeeded_().then(function() {
          if (_this4.visible_) {
            _this4.runner_.resume();
            _this4.pausedByAction_ = false;
          }
        });
      }
    }, {
      key: "togglePauseAction_",
      value: function togglePauseAction_() {
        var _this5 = this;
        if (!this.triggered_) {
          return resolvedPromise();
        }
        return this.createRunnerIfNeeded_().then(function() {
          if (_this5.visible_) {
            if (_this5.runner_.getPlayState() == WebAnimationPlayState.PAUSED) {
              return _this5.startOrResume_();
            } else {
              _this5.pause_();
              _this5.pausedByAction_ = true;
            }
          }
        });
      }
    }, {
      key: "seekToAction_",
      value: function seekToAction_(invocation) {
        var _this6 = this;
        var positionObserverData = null;
        if (invocation.event) {
          var detail = getDetail(invocation.event);
          if (detail) {
            positionObserverData = detail["positionObserverData"] || null;
          }
        }
        return this.createRunnerIfNeeded_(null, positionObserverData).then(function() {
          _this6.triggered_ = true;
          _this6.pause_();
          _this6.pausedByAction_ = true;
          var time = parseFloat(invocation.args && invocation.args["time"]);
          if (isFiniteNumber(time)) {
            _this6.runner_.seekTo(time);
          }
          var percent = parseFloat(invocation.args && invocation.args["percent"]);
          if (isFiniteNumber(percent)) {
            _this6.runner_.seekToPercent(clamp(percent, 0, 1));
          }
        });
      }
    }, {
      key: "reverseAction_",
      value: function reverseAction_() {
        var _this7 = this;
        if (!this.triggered_) {
          return resolvedPromise();
        }
        return this.createRunnerIfNeeded_().then(function() {
          if (_this7.visible_) {
            _this7.runner_.reverse();
          }
        });
      }
    }, {
      key: "finishAction_",
      value: function finishAction_() {
        this.finish_();
        return resolvedPromise();
      }
    }, {
      key: "cancelAction_",
      value: function cancelAction_() {
        this.cancel_();
        return resolvedPromise();
      }
    }, {
      key: "setVisible_",
      value: function setVisible_(visible) {
        if (this.visible_ != visible) {
          this.visible_ = visible;
          if (this.triggered_) {
            if (this.visible_) {
              if (!this.pausedByAction_) {
                this.startOrResume_();
              }
            } else {
              this.pause_();
            }
          }
        }
      }
    }, {
      key: "onResize_",
      value: function onResize_() {
        var pausedByAction = this.pausedByAction_, triggered = this.triggered_;
        if (this.runner_) {
          this.runner_.cancel();
          this.runner_ = null;
          this.runnerPromise_ = null;
        }
        this.triggered_ = triggered;
        this.pausedByAction_ = pausedByAction;
        if (this.triggered_ && this.visible_) {
          this.restartPass_.schedule();
        }
      }
    }, {
      key: "startOrResume_",
      value: function startOrResume_(opt_args) {
        var _this8 = this;
        if (!this.triggered_ || !this.visible_) {
          return null;
        }
        this.pausedByAction_ = false;
        if (this.runner_) {
          this.runner_.resume();
          return null;
        }
        return this.createRunnerIfNeeded_(opt_args).then(function() {
          _this8.runner_.start();
        });
      }
    }, {
      key: "createRunnerIfNeeded_",
      value: function createRunnerIfNeeded_(opt_args, opt_positionObserverData) {
        var _this9 = this;
        if (!this.runnerPromise_) {
          this.runnerPromise_ = this.createRunner_(opt_args, opt_positionObserverData).then(function(runner) {
            _this9.runner_ = runner;
            _this9.runner_.onPlayStateChanged(_this9.playStateChanged_.bind(_this9));
            _this9.runner_.init();
          });
        }
        return this.runnerPromise_;
      }
    }, {
      key: "finish_",
      value: function finish_() {
        this.triggered_ = false;
        this.pausedByAction_ = false;
        if (this.runner_) {
          this.runner_.finish();
          this.runner_ = null;
          this.runnerPromise_ = null;
        }
      }
    }, {
      key: "cancel_",
      value: function cancel_() {
        this.triggered_ = false;
        this.pausedByAction_ = false;
        if (this.runner_) {
          this.runner_.cancel();
          this.runner_ = null;
          this.runnerPromise_ = null;
        }
      }
    }, {
      key: "createRunner_",
      value: function createRunner_(opt_args, opt_positionObserverData) {
        var _this10 = this;
        var configJson = this.configJson_;
        var args = opt_args || null;
        var ampdoc = this.getAmpDoc();
        var polyfillPromise = installWebAnimationsIfNecessary(ampdoc);
        var readyPromise = ampdoc.whenReady();
        var hostWin = this.win;
        var baseUrl = ampdoc.getUrl();
        return Promise.all([polyfillPromise, readyPromise]).then(function() {
          var builder = new Builder(hostWin, _this10.getRootNode_(), baseUrl, _this10.getVsync(), Services.ownersForDoc(_this10.element.getAmpDoc()));
          return builder.createRunner(configJson, args, opt_positionObserverData);
        });
      }
    }, {
      key: "getRootNode_",
      value: function getRootNode_() {
        return this.getAmpDoc().getRootNode();
      }
    }, {
      key: "pause_",
      value: function pause_() {
        if (this.runner_) {
          this.runner_.pause();
        }
      }
    }, {
      key: "playStateChanged_",
      value: function playStateChanged_(playState) {
        if (playState == WebAnimationPlayState.FINISHED) {
          this.finish_();
        }
      }
    }]);
    return AmpAnimation2;
  }(AMP.BaseElement);
  AMP.extension(TAG3, "0.1", function(AMP2) {
    AMP2.registerElement(TAG3, AmpAnimation);
    AMP2.registerServiceForDoc("web-animation", WebAnimationService);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-animation-0.1.max.js.map
