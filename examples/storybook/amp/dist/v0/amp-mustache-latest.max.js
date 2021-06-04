(self.AMP=self.AMP||[]).push({n:"amp-mustache",ev:"0.2",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

  // node_modules/dompurify/dist/purify.js
  var require_purify = __commonJS({
    "node_modules/dompurify/dist/purify.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.DOMPurify = factory());
      })(exports, function() {
        "use strict";
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var freeze = Object.freeze, seal = Object.seal, create = Object.create;
        var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
        if (!apply) {
          apply = function apply2(fun, thisValue, args) {
            return fun.apply(thisValue, args);
          };
        }
        if (!freeze) {
          freeze = function freeze2(x) {
            return x;
          };
        }
        if (!seal) {
          seal = function seal2(x) {
            return x;
          };
        }
        if (!construct) {
          construct = function construct2(Func, args) {
            return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
          };
        }
        var arrayForEach = unapply(Array.prototype.forEach);
        var arrayPop = unapply(Array.prototype.pop);
        var arrayPush = unapply(Array.prototype.push);
        var stringToLowerCase = unapply(String.prototype.toLowerCase);
        var stringMatch = unapply(String.prototype.match);
        var stringReplace = unapply(String.prototype.replace);
        var stringIndexOf = unapply(String.prototype.indexOf);
        var stringTrim = unapply(String.prototype.trim);
        var regExpTest = unapply(RegExp.prototype.test);
        var typeErrorCreate = unconstruct(TypeError);
        function unapply(func) {
          return function(thisArg) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            return apply(func, thisArg, args);
          };
        }
        function unconstruct(func) {
          return function() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return construct(func, args);
          };
        }
        function addToSet(set, array) {
          if (setPrototypeOf) {
            setPrototypeOf(set, null);
          }
          var l = array.length;
          while (l--) {
            var element = array[l];
            if (typeof element === "string") {
              var lcElement = stringToLowerCase(element);
              if (lcElement !== element) {
                if (!isFrozen(array)) {
                  array[l] = lcElement;
                }
                element = lcElement;
              }
            }
            set[element] = true;
          }
          return set;
        }
        function clone(object) {
          var newObject = create(null);
          var property = void 0;
          for (property in object) {
            if (apply(hasOwnProperty, object, [property])) {
              newObject[property] = object[property];
            }
          }
          return newObject;
        }
        function lookupGetter(object, prop) {
          while (object !== null) {
            var desc = getOwnPropertyDescriptor(object, prop);
            if (desc) {
              if (desc.get) {
                return unapply(desc.get);
              }
              if (typeof desc.value === "function") {
                return unapply(desc.value);
              }
            }
            object = getPrototypeOf(object);
          }
          function fallbackValue(element) {
            console.warn("fallback value for", element);
            return null;
          }
          return fallbackValue;
        }
        var html = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
        var svg = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
        var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
        var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
        var mathMl = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
        var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
        var text = freeze(["#text"]);
        var html$1 = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
        var svg$1 = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
        var mathMl$1 = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
        var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
        var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm);
        var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
        var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
        var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
        var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
        var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
        var ATTR_WHITESPACE2 = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        function _toConsumableArray$1(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        var getGlobal = function getGlobal2() {
          return typeof window === "undefined" ? null : window;
        };
        var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, document) {
          if ((typeof trustedTypes === "undefined" ? "undefined" : _typeof(trustedTypes)) !== "object" || typeof trustedTypes.createPolicy !== "function") {
            return null;
          }
          var suffix = null;
          var ATTR_NAME = "data-tt-policy-suffix";
          if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
            suffix = document.currentScript.getAttribute(ATTR_NAME);
          }
          var policyName = "dompurify" + (suffix ? "#" + suffix : "");
          try {
            return trustedTypes.createPolicy(policyName, {
              createHTML: function createHTML(html$$1) {
                return html$$1;
              }
            });
          } catch (_) {
            console.warn("TrustedTypes policy " + policyName + " could not be created.");
            return null;
          }
        };
        function createDOMPurify() {
          var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
          var DOMPurify = function DOMPurify2(root) {
            return createDOMPurify(root);
          };
          DOMPurify.version = "2.2.9";
          DOMPurify.removed = [];
          if (!window2 || !window2.document || window2.document.nodeType !== 9) {
            DOMPurify.isSupported = false;
            return DOMPurify;
          }
          var originalDocument = window2.document;
          var document = window2.document;
          var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node2 = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, Text = window2.Text, Comment = window2.Comment, DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
          var ElementPrototype = Element.prototype;
          var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
          var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
          var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
          var getParentNode = lookupGetter(ElementPrototype, "parentNode");
          if (typeof HTMLTemplateElement === "function") {
            var template = document.createElement("template");
            if (template.content && template.content.ownerDocument) {
              document = template.content.ownerDocument;
            }
          }
          var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
          var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML("") : "";
          var _document = document, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment;
          var importNode = originalDocument.importNode;
          var documentMode = {};
          try {
            documentMode = clone(document).documentMode ? document.documentMode : {};
          } catch (_) {
          }
          var hooks = {};
          DOMPurify.isSupported = typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined" && documentMode !== 9;
          var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR, ERB_EXPR$$1 = ERB_EXPR, DATA_ATTR$$1 = DATA_ATTR, ARIA_ATTR$$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$$1 = ATTR_WHITESPACE2;
          var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
          var ALLOWED_TAGS = null;
          var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));
          var ALLOWED_ATTR = null;
          var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));
          var FORBID_TAGS = null;
          var FORBID_ATTR = null;
          var ALLOW_ARIA_ATTR = true;
          var ALLOW_DATA_ATTR = true;
          var ALLOW_UNKNOWN_PROTOCOLS = false;
          var SAFE_FOR_TEMPLATES = false;
          var WHOLE_DOCUMENT = false;
          var SET_CONFIG = false;
          var FORCE_BODY = false;
          var RETURN_DOM = false;
          var RETURN_DOM_FRAGMENT = false;
          var RETURN_DOM_IMPORT = true;
          var RETURN_TRUSTED_TYPE = false;
          var SANITIZE_DOM = true;
          var KEEP_CONTENT = true;
          var IN_PLACE = false;
          var USE_PROFILES = {};
          var FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
          var DATA_URI_TAGS = null;
          var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
          var URI_SAFE_ATTRIBUTES = null;
          var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]);
          var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
          var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
          var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
          var NAMESPACE = HTML_NAMESPACE;
          var IS_EMPTY_INPUT = false;
          var CONFIG = null;
          var formElement = document.createElement("form");
          var _parseConfig = function _parseConfig2(cfg) {
            if (CONFIG && CONFIG === cfg) {
              return;
            }
            if (!cfg || (typeof cfg === "undefined" ? "undefined" : _typeof(cfg)) !== "object") {
              cfg = {};
            }
            cfg = clone(cfg);
            ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
            ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
            URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
            DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
            FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
            FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
            USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
            RETURN_DOM = cfg.RETURN_DOM || false;
            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
            RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false;
            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
            FORCE_BODY = cfg.FORCE_BODY || false;
            SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
            KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
            IN_PLACE = cfg.IN_PLACE || false;
            IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
            NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
            if (SAFE_FOR_TEMPLATES) {
              ALLOW_DATA_ATTR = false;
            }
            if (RETURN_DOM_FRAGMENT) {
              RETURN_DOM = true;
            }
            if (USE_PROFILES) {
              ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
              ALLOWED_ATTR = [];
              if (USE_PROFILES.html === true) {
                addToSet(ALLOWED_TAGS, html);
                addToSet(ALLOWED_ATTR, html$1);
              }
              if (USE_PROFILES.svg === true) {
                addToSet(ALLOWED_TAGS, svg);
                addToSet(ALLOWED_ATTR, svg$1);
                addToSet(ALLOWED_ATTR, xml);
              }
              if (USE_PROFILES.svgFilters === true) {
                addToSet(ALLOWED_TAGS, svgFilters);
                addToSet(ALLOWED_ATTR, svg$1);
                addToSet(ALLOWED_ATTR, xml);
              }
              if (USE_PROFILES.mathMl === true) {
                addToSet(ALLOWED_TAGS, mathMl);
                addToSet(ALLOWED_ATTR, mathMl$1);
                addToSet(ALLOWED_ATTR, xml);
              }
            }
            if (cfg.ADD_TAGS) {
              if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = clone(ALLOWED_TAGS);
              }
              addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
            }
            if (cfg.ADD_ATTR) {
              if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = clone(ALLOWED_ATTR);
              }
              addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
            }
            if (cfg.ADD_URI_SAFE_ATTR) {
              addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
            }
            if (KEEP_CONTENT) {
              ALLOWED_TAGS["#text"] = true;
            }
            if (WHOLE_DOCUMENT) {
              addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
            }
            if (ALLOWED_TAGS.table) {
              addToSet(ALLOWED_TAGS, ["tbody"]);
              delete FORBID_TAGS.tbody;
            }
            if (freeze) {
              freeze(cfg);
            }
            CONFIG = cfg;
          };
          var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
          var HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
          var ALL_SVG_TAGS = addToSet({}, svg);
          addToSet(ALL_SVG_TAGS, svgFilters);
          addToSet(ALL_SVG_TAGS, svgDisallowed);
          var ALL_MATHML_TAGS = addToSet({}, mathMl);
          addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
          var _checkValidNamespace = function _checkValidNamespace2(element) {
            var parent = getParentNode(element);
            if (!parent || !parent.tagName) {
              parent = {
                namespaceURI: HTML_NAMESPACE,
                tagName: "template"
              };
            }
            var tagName = stringToLowerCase(element.tagName);
            var parentTagName = stringToLowerCase(parent.tagName);
            if (element.namespaceURI === SVG_NAMESPACE) {
              if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === "svg";
              }
              if (parent.namespaceURI === MATHML_NAMESPACE) {
                return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
              }
              return Boolean(ALL_SVG_TAGS[tagName]);
            }
            if (element.namespaceURI === MATHML_NAMESPACE) {
              if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === "math";
              }
              if (parent.namespaceURI === SVG_NAMESPACE) {
                return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
              }
              return Boolean(ALL_MATHML_TAGS[tagName]);
            }
            if (element.namespaceURI === HTML_NAMESPACE) {
              if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
                return false;
              }
              if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
                return false;
              }
              var commonSvgAndHTMLElements = addToSet({}, ["title", "style", "font", "a", "script"]);
              return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
            }
            return false;
          };
          var _forceRemove = function _forceRemove2(node) {
            arrayPush(DOMPurify.removed, {
              element: node
            });
            try {
              node.parentNode.removeChild(node);
            } catch (_) {
              try {
                node.outerHTML = emptyHTML;
              } catch (_2) {
                node.remove();
              }
            }
          };
          var _removeAttribute = function _removeAttribute2(name, node) {
            try {
              arrayPush(DOMPurify.removed, {
                attribute: node.getAttributeNode(name),
                from: node
              });
            } catch (_) {
              arrayPush(DOMPurify.removed, {
                attribute: null,
                from: node
              });
            }
            node.removeAttribute(name);
            if (name === "is" && !ALLOWED_ATTR[name]) {
              if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
                try {
                  _forceRemove(node);
                } catch (_) {
                }
              } else {
                try {
                  node.setAttribute(name, "");
                } catch (_) {
                }
              }
            }
          };
          var _initDocument = function _initDocument2(dirty) {
            var doc = void 0;
            var leadingWhitespace = void 0;
            if (FORCE_BODY) {
              dirty = "<remove></remove>" + dirty;
            } else {
              var matches2 = stringMatch(dirty, /^[\r\n\t ]+/);
              leadingWhitespace = matches2 && matches2[0];
            }
            var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
            if (NAMESPACE === HTML_NAMESPACE) {
              try {
                doc = new DOMParser().parseFromString(dirtyPayload, "text/html");
              } catch (_) {
              }
            }
            if (!doc || !doc.documentElement) {
              doc = implementation.createDocument(NAMESPACE, "template", null);
              try {
                doc.documentElement.innerHTML = IS_EMPTY_INPUT ? "" : dirtyPayload;
              } catch (_) {
              }
            }
            var body = doc.body || doc.documentElement;
            if (dirty && leadingWhitespace) {
              body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
            }
            return WHOLE_DOCUMENT ? doc.documentElement : body;
          };
          var _createIterator = function _createIterator2(root) {
            return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
          };
          var _isClobbered = function _isClobbered2(elm) {
            if (elm instanceof Text || elm instanceof Comment) {
              return false;
            }
            if (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function") {
              return true;
            }
            return false;
          };
          var _isNode = function _isNode2(object) {
            return (typeof Node2 === "undefined" ? "undefined" : _typeof(Node2)) === "object" ? object instanceof Node2 : object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
          };
          var _executeHook = function _executeHook2(entryPoint, currentNode, data) {
            if (!hooks[entryPoint]) {
              return;
            }
            arrayForEach(hooks[entryPoint], function(hook) {
              hook.call(DOMPurify, currentNode, data, CONFIG);
            });
          };
          var _sanitizeElements = function _sanitizeElements2(currentNode) {
            var content = void 0;
            _executeHook("beforeSanitizeElements", currentNode, null);
            if (_isClobbered(currentNode)) {
              _forceRemove(currentNode);
              return true;
            }
            if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
              _forceRemove(currentNode);
              return true;
            }
            var tagName = stringToLowerCase(currentNode.nodeName);
            _executeHook("uponSanitizeElement", currentNode, {
              tagName,
              allowedTags: ALLOWED_TAGS
            });
            if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
              _forceRemove(currentNode);
              return true;
            }
            if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
              if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                var parentNode = getParentNode(currentNode) || currentNode.parentNode;
                var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                if (childNodes && parentNode) {
                  var childCount = childNodes.length;
                  for (var i = childCount - 1; i >= 0; --i) {
                    parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
                  }
                }
              }
              _forceRemove(currentNode);
              return true;
            }
            if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
              _forceRemove(currentNode);
              return true;
            }
            if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
              _forceRemove(currentNode);
              return true;
            }
            if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
              content = currentNode.textContent;
              content = stringReplace(content, MUSTACHE_EXPR$$1, " ");
              content = stringReplace(content, ERB_EXPR$$1, " ");
              if (currentNode.textContent !== content) {
                arrayPush(DOMPurify.removed, {
                  element: currentNode.cloneNode()
                });
                currentNode.textContent = content;
              }
            }
            _executeHook("afterSanitizeElements", currentNode, null);
            return false;
          };
          var _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
            if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) {
              return false;
            }
            if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$$1, lcName))
              ;
            else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName))
              ;
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
              return false;
            } else if (URI_SAFE_ATTRIBUTES[lcName])
              ;
            else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, "")))
              ;
            else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
              ;
            else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, "")))
              ;
            else if (!value)
              ;
            else {
              return false;
            }
            return true;
          };
          var _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
            var attr = void 0;
            var value = void 0;
            var lcName = void 0;
            var l = void 0;
            _executeHook("beforeSanitizeAttributes", currentNode, null);
            var attributes = currentNode.attributes;
            if (!attributes) {
              return;
            }
            var hookEvent = {
              attrName: "",
              attrValue: "",
              keepAttr: true,
              allowedAttributes: ALLOWED_ATTR
            };
            l = attributes.length;
            while (l--) {
              attr = attributes[l];
              var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
              value = stringTrim(attr.value);
              lcName = stringToLowerCase(name);
              hookEvent.attrName = lcName;
              hookEvent.attrValue = value;
              hookEvent.keepAttr = true;
              hookEvent.forceKeepAttr = void 0;
              _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
              value = hookEvent.attrValue;
              if (hookEvent.forceKeepAttr) {
                continue;
              }
              _removeAttribute(name, currentNode);
              if (!hookEvent.keepAttr) {
                continue;
              }
              if (regExpTest(/\/>/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
              }
              if (SAFE_FOR_TEMPLATES) {
                value = stringReplace(value, MUSTACHE_EXPR$$1, " ");
                value = stringReplace(value, ERB_EXPR$$1, " ");
              }
              var lcTag = currentNode.nodeName.toLowerCase();
              if (!_isValidAttribute(lcTag, lcName, value)) {
                continue;
              }
              try {
                if (namespaceURI) {
                  currentNode.setAttributeNS(namespaceURI, name, value);
                } else {
                  currentNode.setAttribute(name, value);
                }
                arrayPop(DOMPurify.removed);
              } catch (_) {
              }
            }
            _executeHook("afterSanitizeAttributes", currentNode, null);
          };
          var _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
            var shadowNode = void 0;
            var shadowIterator = _createIterator(fragment);
            _executeHook("beforeSanitizeShadowDOM", fragment, null);
            while (shadowNode = shadowIterator.nextNode()) {
              _executeHook("uponSanitizeShadowNode", shadowNode, null);
              if (_sanitizeElements(shadowNode)) {
                continue;
              }
              if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM2(shadowNode.content);
              }
              _sanitizeAttributes(shadowNode);
            }
            _executeHook("afterSanitizeShadowDOM", fragment, null);
          };
          DOMPurify.sanitize = function(dirty, cfg) {
            var body = void 0;
            var importedNode = void 0;
            var currentNode = void 0;
            var oldNode = void 0;
            var returnNode = void 0;
            IS_EMPTY_INPUT = !dirty;
            if (IS_EMPTY_INPUT) {
              dirty = "<!-->";
            }
            if (typeof dirty !== "string" && !_isNode(dirty)) {
              if (typeof dirty.toString !== "function") {
                throw typeErrorCreate("toString is not a function");
              } else {
                dirty = dirty.toString();
                if (typeof dirty !== "string") {
                  throw typeErrorCreate("dirty is not a string, aborting");
                }
              }
            }
            if (!DOMPurify.isSupported) {
              if (_typeof(window2.toStaticHTML) === "object" || typeof window2.toStaticHTML === "function") {
                if (typeof dirty === "string") {
                  return window2.toStaticHTML(dirty);
                }
                if (_isNode(dirty)) {
                  return window2.toStaticHTML(dirty.outerHTML);
                }
              }
              return dirty;
            }
            if (!SET_CONFIG) {
              _parseConfig(cfg);
            }
            DOMPurify.removed = [];
            if (typeof dirty === "string") {
              IN_PLACE = false;
            }
            if (IN_PLACE)
              ;
            else if (dirty instanceof Node2) {
              body = _initDocument("<!---->");
              importedNode = body.ownerDocument.importNode(dirty, true);
              if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
                body = importedNode;
              } else if (importedNode.nodeName === "HTML") {
                body = importedNode;
              } else {
                body.appendChild(importedNode);
              }
            } else {
              if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) {
                return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
              }
              body = _initDocument(dirty);
              if (!body) {
                return RETURN_DOM ? null : emptyHTML;
              }
            }
            if (body && FORCE_BODY) {
              _forceRemove(body.firstChild);
            }
            var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
            while (currentNode = nodeIterator.nextNode()) {
              if (currentNode.nodeType === 3 && currentNode === oldNode) {
                continue;
              }
              if (_sanitizeElements(currentNode)) {
                continue;
              }
              if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
              }
              _sanitizeAttributes(currentNode);
              oldNode = currentNode;
            }
            oldNode = null;
            if (IN_PLACE) {
              return dirty;
            }
            if (RETURN_DOM) {
              if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);
                while (body.firstChild) {
                  returnNode.appendChild(body.firstChild);
                }
              } else {
                returnNode = body;
              }
              if (RETURN_DOM_IMPORT) {
                returnNode = importNode.call(originalDocument, returnNode, true);
              }
              return returnNode;
            }
            var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
            if (SAFE_FOR_TEMPLATES) {
              serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, " ");
              serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, " ");
            }
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
          };
          DOMPurify.setConfig = function(cfg) {
            _parseConfig(cfg);
            SET_CONFIG = true;
          };
          DOMPurify.clearConfig = function() {
            CONFIG = null;
            SET_CONFIG = false;
          };
          DOMPurify.isValidAttribute = function(tag, attr, value) {
            if (!CONFIG) {
              _parseConfig({});
            }
            var lcTag = stringToLowerCase(tag);
            var lcName = stringToLowerCase(attr);
            return _isValidAttribute(lcTag, lcName, value);
          };
          DOMPurify.addHook = function(entryPoint, hookFunction) {
            if (typeof hookFunction !== "function") {
              return;
            }
            hooks[entryPoint] = hooks[entryPoint] || [];
            arrayPush(hooks[entryPoint], hookFunction);
          };
          DOMPurify.removeHook = function(entryPoint) {
            if (hooks[entryPoint]) {
              arrayPop(hooks[entryPoint]);
            }
          };
          DOMPurify.removeHooks = function(entryPoint) {
            if (hooks[entryPoint]) {
              hooks[entryPoint] = [];
            }
          };
          DOMPurify.removeAllHooks = function() {
            hooks = {};
          };
          return DOMPurify;
        }
        var purify2 = createDOMPurify();
        return purify2;
      });
    }
  });

  // src/core/data-structures/promise.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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
  function devAssertElement(shouldBeElement, opt_message) {
    if (isMinifiedMode()) {
      return shouldBeElement;
    }
    devAssertDceCheck();
    return assertElement(devAssert2, shouldBeElement, opt_message);
  }

  // src/core/assert/user.js
  function userAssert2(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return assert(USER_ERROR_SENTINEL, shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
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
  function copyChildren(from, to) {
    var frag = to.ownerDocument.createDocumentFragment();
    for (var n = from.firstChild; n; n = n.nextSibling) {
      frag.appendChild(n.cloneNode(true));
    }
    to.appendChild(frag);
  }
  function templateContentClone(template) {
    if ("content" in template) {
      return template.content.cloneNode(true);
    } else {
      var content = template.ownerDocument.createDocumentFragment();
      copyChildren(template, content);
      return content;
    }
  }
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
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

  // src/base-template.js
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
  var BaseTemplate = /* @__PURE__ */ function() {
    function BaseTemplate2(element, win) {
      _classCallCheck3(this, BaseTemplate2);
      this.element = element;
      this.win = element.ownerDocument.defaultView || win;
      this.viewer_ = Services.viewerForDoc(this.element);
      this.compileCallback();
    }
    _createClass2(BaseTemplate2, [{
      key: "compileCallback",
      value: function compileCallback() {
      }
    }, {
      key: "setHtml",
      value: function setHtml(unusedData) {
      }
    }, {
      key: "render",
      value: function render(unusedData) {
      }
    }, {
      key: "renderAsString",
      value: function renderAsString(unusedData) {
      }
    }, {
      key: "visitChildren_",
      value: function visitChildren_(root, callback) {
        for (var n = root.firstChild; n != null; n = n.nextSibling) {
          if (n.nodeType == 3) {
            var text = n.textContent.trim();
            if (text) {
              callback(text);
            }
          } else if (n.nodeType == 8) {
          } else if (isElement(n)) {
            callback(dev().assertElement(n));
          }
        }
      }
    }, {
      key: "tryUnwrap",
      value: function tryUnwrap(root) {
        var onlyChild;
        this.visitChildren_(root, function(c) {
          if (onlyChild === void 0 && c.nodeType) {
            onlyChild = c;
          } else {
            onlyChild = null;
          }
        });
        return onlyChild || root;
      }
    }, {
      key: "unwrapChildren",
      value: function unwrapChildren(root) {
        var _this = this;
        var children = [];
        this.visitChildren_(root, function(c) {
          if (typeof c == "string") {
            var element = _this.win.document.createElement("div");
            element.textContent = c;
            children.push(element);
          } else {
            children.push(c);
          }
        });
        return children;
      }
    }, {
      key: "viewerCanRenderTemplates",
      value: function viewerCanRenderTemplates() {
        return this.viewer_.hasCapability("viewerRenderTemplate");
      }
    }]);
    return BaseTemplate2;
  }();

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
  var AMP_JS_PARAMS_REGEX = /[?&]amp_js[^&]*/;
  var AMP_GSA_PARAMS_REGEX = /[?&]amp_gsa[^&]*/;
  var AMP_R_PARAMS_REGEX = /[?&]amp_r[^&]*/;
  var AMP_KIT_PARAMS_REGEX = /[?&]amp_kit[^&]*/;
  var GOOGLE_EXPERIMENT_PARAMS_REGEX = /[?&]usqp[^&]*/;
  var SOURCE_ORIGIN_PARAM = "__amp_source_origin";
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
  function checkCorsUrl(url) {
    var parsedUrl = parseUrlDeprecated(url);
    var query = parseQueryString(parsedUrl.search);
    userAssert(!(SOURCE_ORIGIN_PARAM in query), "Source origin is not allowed in %s", url);
  }

  // src/core/dom/srcset.js
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
  var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
  function parseSrcset(s) {
    var sources = [];
    var match;
    while (match = srcsetRegex.exec(s)) {
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
      _classCallCheck5(this, Srcset2);
      userAssert2(sources.length > 0, "Srcset must have at least one source");
      this.sources_ = sources;
      var hasWidth = false;
      var hasDpr = false;
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        hasWidth = hasWidth || !!source.width;
        hasDpr = hasDpr || !!source.dpr;
      }
      userAssert2(!!(hasWidth ^ hasDpr), "Srcset must have width or dpr sources, but not both");
      sources.sort(hasWidth ? sortByWidth : sortByDpr);
      this.widthBased_ = hasWidth;
    }
    _createClass4(Srcset2, [{
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
        for (var i = 0; i < sources.length; i++) {
          var sWidth = sources[i].width;
          var score = Math.abs(sWidth - width);
          if (score <= minScore * 1.1 || width / minWidth > 1.2) {
            minIndex = i;
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
        for (var i = 0; i < sources.length; i++) {
          var score = Math.abs(sources[i].dpr - dpr);
          if (score <= minScore) {
            minIndex = i;
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
        return this.sources_.map(function(s) {
          return s.url;
        });
      }
    }, {
      key: "stringify",
      value: function stringify(opt_mapper) {
        var res = [];
        var sources = this.sources_;
        for (var i = 0; i < sources.length; i++) {
          var source = sources[i];
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

  // src/url-rewrite.js
  var TAG = "URL-REWRITE";
  function rewriteAttributeValue(tagName, attrName, attrValue) {
    if (isUrlAttribute(attrName)) {
      return resolveUrlAttr(tagName, attrName, attrValue, self.location);
    }
    return attrValue;
  }
  function isUrlAttribute(attrName) {
    return attrName == "src" || attrName == "href" || attrName == "xlink:href" || attrName == "srcset";
  }
  function resolveUrlAttr(tagName, attrName, attrValue, windowLocation) {
    checkCorsUrl(attrValue);
    var isProxyHost = isProxyOrigin(windowLocation);
    var baseUrl = parseUrlDeprecated(getSourceUrl(windowLocation));
    if (attrName == "href" && !attrValue.startsWith("#")) {
      return resolveRelativeUrl(attrValue, baseUrl);
    }
    if (attrName == "src") {
      if (tagName == "amp-img") {
        return resolveImageUrlAttr(attrValue, baseUrl, isProxyHost);
      }
      return resolveRelativeUrl(attrValue, baseUrl);
    }
    if (attrName == "srcset") {
      var srcset;
      try {
        srcset = parseSrcset(attrValue);
      } catch (e) {
        user().error(TAG, "Failed to parse srcset: ", e);
        return attrValue;
      }
      return srcset.stringify(function(url) {
        return resolveImageUrlAttr(url, baseUrl, isProxyHost);
      });
    }
    return attrValue;
  }
  function resolveImageUrlAttr(attrValue, baseUrl, isProxyHost) {
    var src = parseUrlDeprecated(resolveRelativeUrl(attrValue, baseUrl));
    if (src.protocol == "data:" || isProxyOrigin(src) || !isProxyHost) {
      return src.href;
    }
    return urls.cdn + "/i/" + (src.protocol == "https:" ? "s/" : "") + encodeURIComponent(src.host) + src.pathname + (src.search || "") + (src.hash || "");
  }

  // src/purifier/sanitation.js
  var BIND_PREFIX = "data-amp-bind-";
  var DIFF_KEY = "i-amphtml-key";
  var DIFF_IGNORE = "i-amphtml-ignore";
  var DIFFABLE_AMP_ELEMENTS = {
    "AMP-IMG": ["src", "srcset", "layout", "width", "height"]
  };
  function markElementForDiffing(element, generateKey) {
    var isAmpElement = element.tagName.startsWith("AMP-");
    var hasBinding = element.hasAttribute("i-amphtml-binding");
    if (!hasBinding && DIFFABLE_AMP_ELEMENTS[element.tagName]) {
      element.setAttribute(DIFF_IGNORE, "");
    } else if (hasBinding || isAmpElement) {
      if (!element.hasAttribute(DIFF_KEY)) {
        element.setAttribute(DIFF_KEY, generateKey());
      }
    }
  }
  var DENYLISTED_TAGS = {
    "applet": true,
    "audio": true,
    "base": true,
    "embed": true,
    "frame": true,
    "frameset": true,
    "iframe": true,
    "img": true,
    "link": true,
    "meta": true,
    "object": true,
    "style": true,
    "video": true
  };
  var EMAIL_ALLOWLISTED_AMP_TAGS = {
    "amp-accordion": true,
    "amp-anim": true,
    "amp-bind-macro": true,
    "amp-carousel": true,
    "amp-fit-text": true,
    "amp-img": true,
    "amp-layout": true,
    "amp-selector": true,
    "amp-sidebar": true,
    "amp-timeago": true
  };
  var TRIPLE_MUSTACHE_ALLOWLISTED_TAGS = ["a", "amp-img", "article", "aside", "b", "blockquote", "br", "caption", "code", "col", "colgroup", "dd", "del", "details", "div", "dl", "dt", "em", "figcaption", "figure", "footer", "h1", "h2", "h3", "header", "hr", "i", "ins", "li", "main", "mark", "nav", "ol", "p", "pre", "q", "s", "section", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "u", "ul"];
  var ALLOWLISTED_ATTRS = [
    "amp-fx",
    "fallback",
    "heights",
    "layout",
    "min-font-size",
    "max-font-size",
    "on",
    "option",
    "placeholder",
    "submitting",
    "submit-success",
    "submit-error",
    "validation-for",
    "verify-error",
    "visible-when-invalid",
    "href",
    "style",
    "text",
    "subscriptions-action",
    "subscriptions-actions",
    "subscriptions-decorate",
    "subscriptions-dialog",
    "subscriptions-display",
    "subscriptions-section",
    "subscriptions-service",
    "subscriptions-google-rtc",
    "amp-nested-submenu",
    "amp-nested-submenu-open",
    "amp-nested-submenu-close",
    "itemprop"
  ];
  var ALLOWLISTED_ATTRS_BY_TAGS = {
    "a": ["rel", "target"],
    "div": ["template"],
    "form": ["action-xhr", "verify-xhr", "custom-validation-reporting", "target"],
    "input": ["mask-output"],
    "template": ["type"],
    "textarea": ["autoexpand"]
  };
  var ALLOWLISTED_TARGETS = ["_top", "_blank"];
  var DENYLISTED_PROTOCOLS = /^(?:\w+script|data|blob):/i;
  var EXTENDED_DENYLISTED_PROTOCOLS = /^(?:blob):/i;
  var ATTR_WHITESPACE = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;
  var DENYLISTED_TAG_SPECIFIC_ATTR_VALUES = Object.freeze(dict({
    "input": {
      "type": /(?:image|button)/i
    }
  }));
  var EMAIL_DENYLISTED_TAG_SPECIFIC_ATTR_VALUES = Object.freeze(dict({
    "input": {
      "type": /(?:button|file|image|password)/i
    }
  }));
  var DENYLISTED_FIELDS_ATTR = Object.freeze(["form", "formaction", "formmethod", "formtarget", "formnovalidate", "formenctype"]);
  var DENYLISTED_TAG_SPECIFIC_ATTRS = Object.freeze(dict({
    "input": DENYLISTED_FIELDS_ATTR,
    "textarea": DENYLISTED_FIELDS_ATTR,
    "select": DENYLISTED_FIELDS_ATTR
  }));
  var EMAIL_DENYLISTED_TAG_SPECIFIC_ATTRS = Object.freeze(dict({
    "amp-anim": ["controls"],
    "form": ["name"]
  }));
  var INVALID_INLINE_STYLE_REGEX = /!important|position\s*:\s*fixed|position\s*:\s*sticky/i;
  function isValidAttr(tagName, attrName, attrValue, doc, opt_purify) {
    if (opt_purify === void 0) {
      opt_purify = false;
    }
    var attrValueWithoutWhitespace = attrValue ? attrValue.replace(ATTR_WHITESPACE, "") : "";
    if (!opt_purify) {
      if (attrName.startsWith("on") && attrName != "on") {
        return false;
      }
      var normalized = attrValueWithoutWhitespace.toLowerCase();
      if (normalized.indexOf("<script") >= 0 || normalized.indexOf("<\/script") >= 0) {
        return false;
      }
      if (DENYLISTED_PROTOCOLS.test(attrValueWithoutWhitespace)) {
        return false;
      }
    }
    if (EXTENDED_DENYLISTED_PROTOCOLS.test(attrValueWithoutWhitespace)) {
      return false;
    }
    if (attrName == "style") {
      return !INVALID_INLINE_STYLE_REGEX.test(attrValue);
    }
    if (attrName == "class" && attrValue && /(^|\W)i-amphtml-/i.test(attrValue)) {
      return false;
    }
    if (isUrlAttribute(attrName) && /__amp_source_origin/.test(attrValue)) {
      return false;
    }
    var isEmail = isAmp4Email(doc);
    var attrDenylist = Object.assign(map(), DENYLISTED_TAG_SPECIFIC_ATTRS, isEmail ? EMAIL_DENYLISTED_TAG_SPECIFIC_ATTRS : {})[tagName];
    if (attrDenylist && attrDenylist.indexOf(attrName) != -1) {
      return false;
    }
    var attrValueDenylist = Object.assign(map(), DENYLISTED_TAG_SPECIFIC_ATTR_VALUES, isEmail ? EMAIL_DENYLISTED_TAG_SPECIFIC_ATTR_VALUES : {})[tagName];
    if (attrValueDenylist) {
      var denylistedValuesRegex = attrValueDenylist[attrName];
      if (denylistedValuesRegex && attrValue.search(denylistedValuesRegex) != -1) {
        return false;
      }
    }
    return true;
  }

  // src/purifier/purifier.js
  var import_dompurify = __toModule(require_purify());
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
  var TAG2 = "purifier";
  var ALLOWLISTED_TAGS_BY_ATTRS = {
    "script": {
      "attribute": "type",
      "values": ["application/json", "application/ld+json"]
    }
  };
  var PURIFY_PROFILES = {
    USE_PROFILES: {
      html: true,
      svg: true,
      svgFilters: true
    }
  };
  var Purifier = /* @__PURE__ */ function() {
    function Purifier2(doc, opt_config, opt_attrRewrite) {
      _classCallCheck6(this, Purifier2);
      this.doc_ = doc;
      this.keyCounter_ = 1;
      this.domPurify_ = (0, import_dompurify.default)(self);
      this.domPurifyTriple_ = (0, import_dompurify.default)(self);
      var config = Object.assign(opt_config || {}, standardPurifyConfig());
      this.domPurify_.setConfig(config);
      this.addPurifyHooks_(this.domPurify_, opt_attrRewrite);
      this.addPurifyHooksTripleMustache_(this.domPurifyTriple_);
    }
    _createClass5(Purifier2, [{
      key: "purifyHtml",
      value: function purifyHtml(dirty) {
        var body = this.domPurify_.sanitize(dirty);
        return body;
      }
    }, {
      key: "purifyTagsForTripleMustache",
      value: function purifyTagsForTripleMustache(dirty) {
        var fragment = this.domPurifyTriple_.sanitize(dirty, {
          "ALLOWED_TAGS": TRIPLE_MUSTACHE_ALLOWLISTED_TAGS,
          "FORCE_BODY": true,
          "RETURN_DOM_FRAGMENT": true
        });
        var div = this.doc_.createElement("div");
        div.appendChild(fragment);
        return div.innerHTML;
      }
    }, {
      key: "getAllowedTags",
      value: function getAllowedTags() {
        var allowedTags = {};
        this.domPurify_.addHook("uponSanitizeElement", function(node, data) {
          Object.assign(allowedTags, data.allowedTags);
        });
        var p = this.doc_.createElement("p");
        this.domPurify_.sanitize(p);
        Object.keys(DENYLISTED_TAGS).forEach(function(tag) {
          allowedTags[tag] = false;
        });
        this.domPurify_.removeHook("uponSanitizeElement");
        return allowedTags;
      }
    }, {
      key: "validateAttributeChange",
      value: function validateAttributeChange(node, attr, value) {
        var tag = node.nodeName.toLowerCase();
        var allowlist = ALLOWLISTED_TAGS_BY_ATTRS[tag];
        if (allowlist) {
          var attribute = allowlist.attribute, values = allowlist.values;
          if (attribute === attr) {
            if (value == null || !values.includes(value)) {
              return false;
            }
          }
        }
        if (tag === "a" && attr === "target") {
          if (value == null || !ALLOWLISTED_TARGETS.includes(value)) {
            return false;
          }
        }
        if (value == null) {
          return true;
        }
        if (bindingTypeForAttr(attr) !== BindingType.NONE) {
          return false;
        }
        var pure = this.domPurify_.isValidAttribute(tag, attr, value);
        if (!pure) {
          var attrsByTags = ALLOWLISTED_ATTRS_BY_TAGS[tag];
          var allowlistedForTag = attrsByTags && attrsByTags.includes(attr);
          if (!allowlistedForTag && !tag.startsWith("amp-")) {
            return false;
          }
        }
        var doc = node.ownerDocument ? node.ownerDocument : node;
        if (value && !isValidAttr(tag, attr, value, doc, true)) {
          return false;
        }
        return true;
      }
    }, {
      key: "addPurifyHooks_",
      value: function addPurifyHooks_(purifier, attrRewrite) {
        var _this = this;
        var isEmail = isAmp4Email(this.doc_);
        var allowedTags;
        var allowedTagsChanges = [];
        var allowedAttributes;
        var allowedAttributesChanges = [];
        var uponSanitizeElement = function uponSanitizeElement2(node, data) {
          var tagName = data.tagName;
          allowedTags = data.allowedTags;
          if (tagName.startsWith("amp-")) {
            allowedTags[tagName] = !isEmail || EMAIL_ALLOWLISTED_AMP_TAGS[tagName];
          }
          if (tagName === "a") {
            var element = devAssertElement(node);
            if (element.hasAttribute("href") && !element.hasAttribute("target")) {
              element.setAttribute("target", "_top");
            }
          }
          var allowlist = ALLOWLISTED_TAGS_BY_ATTRS[tagName];
          if (allowlist) {
            var attribute = allowlist.attribute, values = allowlist.values;
            var _element = devAssertElement(node);
            if (_element.hasAttribute(attribute) && values.includes(_element.getAttribute(attribute))) {
              allowedTags[tagName] = true;
              allowedTagsChanges.push(tagName);
            }
          }
        };
        var afterSanitizeElements = function afterSanitizeElements2(unusedNode) {
          allowedTagsChanges.forEach(function(tag) {
            delete allowedTags[tag];
          });
          allowedTagsChanges.length = 0;
        };
        var uponSanitizeAttribute = function uponSanitizeAttribute2(element, data) {
          var tagName = element.nodeName.toLowerCase();
          var attrName = data.attrName;
          var attrValue = data.attrValue;
          allowedAttributes = data.allowedAttributes;
          var allowAttribute = function allowAttribute2() {
            if (!allowedAttributes[attrName]) {
              allowedAttributes[attrName] = true;
              allowedAttributesChanges.push(attrName);
            }
          };
          var isAmpElement = tagName.startsWith("amp-");
          if (isAmpElement) {
            allowAttribute();
          } else {
            if (tagName == "a" && attrName == "target") {
              var lowercaseValue = attrValue.toLowerCase();
              if (!ALLOWLISTED_TARGETS.includes(lowercaseValue)) {
                attrValue = "_top";
              } else {
                attrValue = lowercaseValue;
              }
            }
            var attrsByTags = ALLOWLISTED_ATTRS_BY_TAGS[tagName];
            if (attrsByTags && attrsByTags.includes(attrName)) {
              allowAttribute();
            }
          }
          var bindingType = bindingTypeForAttr(attrName);
          if (bindingType === BindingType.CLASSIC) {
            var property = attrName.substring(1, attrName.length - 1);
            element.setAttribute("" + BIND_PREFIX + property, attrValue);
          }
          if (bindingType !== BindingType.NONE) {
            element.setAttribute("i-amphtml-binding", "");
          }
          if (isValidAttr(tagName, attrName, attrValue, _this.doc_, true)) {
            if (attrRewrite && attrValue && !attrName.startsWith(BIND_PREFIX)) {
              attrValue = attrRewrite(tagName, attrName, attrValue);
            }
          } else {
            data.keepAttr = false;
            user().error(TAG2, 'Removed invalid attribute %s[%s="%s"].', tagName, attrName, attrValue);
          }
          data.attrValue = attrValue;
        };
        var afterSanitizeAttributes = function afterSanitizeAttributes2(element) {
          markElementForDiffing(element, function() {
            return String(_this.keyCounter_++);
          });
          allowedAttributesChanges.forEach(function(attr) {
            delete allowedAttributes[attr];
          });
          allowedAttributesChanges.length = 0;
          var tagName = element.nodeName.toLowerCase();
          if (tagName === "use") {
            ["href", "xlink:href"].forEach(function(attr) {
              if (element.hasAttribute(attr) && !element.getAttribute(attr).startsWith("#")) {
                removeElement(element);
                user().error(TAG2, 'Removed invalid <use>. use[href] must start with "#".');
              }
            });
          }
        };
        purifier.addHook("uponSanitizeElement", uponSanitizeElement);
        purifier.addHook("afterSanitizeElements", afterSanitizeElements);
        purifier.addHook("uponSanitizeAttribute", uponSanitizeAttribute);
        purifier.addHook("afterSanitizeAttributes", afterSanitizeAttributes);
      }
    }, {
      key: "addPurifyHooksTripleMustache_",
      value: function addPurifyHooksTripleMustache_(purifier) {
        var allowedTags;
        var uponSanitizeElement = function uponSanitizeElement2(node, data) {
          var tagName = data.tagName;
          allowedTags = data.allowedTags;
          if (tagName === "template") {
            var type = node.getAttribute("type");
            if (type && type.toLowerCase() === "amp-mustache") {
              allowedTags["template"] = true;
            }
          }
        };
        var afterSanitizeElements = function afterSanitizeElements2(unusedNode) {
          allowedTags["template"] = false;
        };
        purifier.addHook("uponSanitizeElement", uponSanitizeElement);
        purifier.addHook("afterSanitizeElements", afterSanitizeElements);
      }
    }]);
    return Purifier2;
  }();
  function standardPurifyConfig() {
    var config = _extends({}, PURIFY_PROFILES, {
      ADD_ATTR: ALLOWLISTED_ATTRS,
      ADD_TAGS: ["use"],
      FORBID_TAGS: Object.keys(DENYLISTED_TAGS),
      FORCE_BODY: true,
      RETURN_DOM: true,
      ALLOW_UNKNOWN_PROTOCOLS: true
    });
    return config;
  }
  var BindingType = {
    NONE: 0,
    CLASSIC: 1,
    ALTERNATIVE: 2
  };
  function bindingTypeForAttr(attrName) {
    if (attrName[0] == "[" && attrName[attrName.length - 1] == "]") {
      return BindingType.CLASSIC;
    }
    if (attrName.startsWith(BIND_PREFIX)) {
      return BindingType.ALTERNATIVE;
    }
    return BindingType.NONE;
  }

  // third_party/mustache/mustache.js
  function mustacheFactory(mustache) {
    var objectToString = Object.prototype.toString;
    var isArray2 = Array.isArray || function isArrayPolyfill(object) {
      return objectToString.call(object) === "[object Array]";
    };
    function isFunction(object) {
      return typeof object === "function";
    }
    function typeStr(obj) {
      return isArray2(obj) ? "array" : typeof obj;
    }
    function escapeRegExp(string) {
      return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    function hasProperty(obj, propName) {
      return obj != null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, propName);
    }
    var regExpTest = RegExp.prototype.test;
    function testRegExp(re, string) {
      return regExpTest.call(re, string);
    }
    var nonSpaceRe = /\S/;
    function isWhitespace(string) {
      return !testRegExp(nonSpaceRe, string);
    }
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    function escapeHtml(string) {
      return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
        return entityMap[s];
      });
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    function parseTemplate(template, tags) {
      if (!template)
        return [];
      var sections = [];
      var tokens = [];
      var spaces = [];
      var hasTag = false;
      var nonSpace = false;
      function stripSpace() {
        if (hasTag && !nonSpace) {
          while (spaces.length) {
            delete tokens[spaces.pop()];
          }
        } else {
          spaces = [];
        }
        hasTag = false;
        nonSpace = false;
      }
      var openingTagRe, closingTagRe, closingCurlyRe;
      function compileTags(tagsToCompile) {
        if (typeof tagsToCompile === "string")
          tagsToCompile = tagsToCompile.split(spaceRe, 2);
        if (!isArray2(tagsToCompile) || tagsToCompile.length !== 2)
          throw new Error("Invalid tags: " + tagsToCompile);
        openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
        closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
        closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
      }
      compileTags(tags || mustache.tags);
      var scanner = new Scanner(template);
      var start, type, value, chr, token, openSection;
      while (!scanner.eos()) {
        start = scanner.pos;
        value = scanner.scanUntil(openingTagRe);
        if (value) {
          for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
            chr = value.charAt(i);
            if (isWhitespace(chr)) {
              spaces.push(tokens.length);
            } else {
              nonSpace = true;
            }
            tokens.push(["text", chr, start, start + 1]);
            start += 1;
            if (chr === "\n")
              stripSpace();
          }
        }
        if (!scanner.scan(openingTagRe))
          break;
        hasTag = true;
        type = scanner.scan(tagRe) || "name";
        scanner.scan(whiteRe);
        if (type === "=") {
          value = scanner.scanUntil(equalsRe);
          scanner.scan(equalsRe);
          scanner.scanUntil(closingTagRe);
        } else if (type === "{") {
          value = scanner.scanUntil(closingCurlyRe);
          scanner.scan(curlyRe);
          scanner.scanUntil(closingTagRe);
          type = "&";
        } else {
          value = scanner.scanUntil(closingTagRe);
        }
        if (!scanner.scan(closingTagRe))
          throw new Error("Unclosed tag at " + scanner.pos);
        token = [type, value, start, scanner.pos];
        tokens.push(token);
        if (type === "#" || type === "^") {
          sections.push(token);
        } else if (type === "/") {
          openSection = sections.pop();
          if (!openSection)
            throw new Error('Unopened section "' + value + '" at ' + start);
          if (openSection[1] !== value)
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
        } else if (type === "name" || type === "{" || type === "&") {
          nonSpace = true;
        }
      }
      openSection = sections.pop();
      if (openSection)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
      return nestTokens(squashTokens(tokens));
    }
    function squashTokens(tokens) {
      var squashedTokens = [];
      var token, lastToken;
      for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        token = tokens[i];
        if (token) {
          if (token[0] === "text" && lastToken && lastToken[0] === "text") {
            lastToken[1] += token[1];
            lastToken[3] = token[3];
          } else {
            squashedTokens.push(token);
            lastToken = token;
          }
        }
      }
      return squashedTokens;
    }
    function nestTokens(tokens) {
      var nestedTokens = [];
      var collector = nestedTokens;
      var sections = [];
      var token, section;
      for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        token = tokens[i];
        switch (token[0]) {
          case "#":
          case "^":
            collector.push(token);
            sections.push(token);
            collector = token[4] = [];
            break;
          case "/":
            section = sections.pop();
            section[5] = token[2];
            collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
            break;
          default:
            collector.push(token);
        }
      }
      return nestedTokens;
    }
    function Scanner(string) {
      this.string = string;
      this.tail = string;
      this.pos = 0;
    }
    Scanner.prototype.eos = function eos() {
      return this.tail === "";
    };
    Scanner.prototype.scan = function scan(re) {
      var match = this.tail.match(re);
      if (!match || match.index !== 0)
        return "";
      var string = match[0];
      this.tail = this.tail.substring(string.length);
      this.pos += string.length;
      return string;
    };
    Scanner.prototype.scanUntil = function scanUntil(re) {
      var index = this.tail.search(re), match;
      switch (index) {
        case -1:
          match = this.tail;
          this.tail = "";
          break;
        case 0:
          match = "";
          break;
        default:
          match = this.tail.substring(0, index);
          this.tail = this.tail.substring(index);
      }
      this.pos += match.length;
      return match;
    };
    function Context(view, parentContext) {
      this.view = view;
      this.cache = {
        ".": this.view
      };
      this.parent = parentContext;
    }
    Context.prototype.push = function push(view) {
      return new Context(view, this);
    };
    Context.prototype.lookup = function lookup(name) {
      var cache2 = this.cache;
      var value;
      if (cache2.hasOwnProperty(name)) {
        value = cache2[name];
      } else {
        var context = this, names, index, lookupHit = false;
        while (context) {
          if (name.indexOf(".") > 0) {
            value = context.view;
            names = name.split(".");
            index = 0;
            while (value != null && index < names.length) {
              if (!hasProperty(value, names[index])) {
                value = null;
                break;
              }
              if (index === names.length - 1)
                lookupHit = true;
              value = value[names[index++]];
            }
          } else {
            if (!hasProperty(context.view, name)) {
              value = null;
            } else {
              value = context.view[name];
              lookupHit = true;
            }
          }
          if (lookupHit)
            break;
          context = context.parent;
        }
        cache2[name] = value;
      }
      if (isFunction(value))
        value = value.call(this.view);
      return value;
    };
    function Writer() {
      this.cache = {};
    }
    Writer.prototype.clearCache = function clearCache() {
      this.cache = {};
    };
    Writer.prototype.parse = function parse(template, tags) {
      var cache2 = this.cache;
      var tokens = cache2[template];
      if (tokens == null)
        tokens = cache2[template] = parseTemplate(template, tags);
      return tokens;
    };
    Writer.prototype.render = function render(template, view, partials) {
      var tokens = this.parse(template);
      var context = view instanceof Context ? view : new Context(view);
      return this.renderTokens(tokens, context, partials, template);
    };
    Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
      var buffer = "";
      var token, symbol, value;
      for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        value = void 0;
        token = tokens[i];
        symbol = token[0];
        if (symbol === "#")
          value = this.renderSection(token, context, partials, originalTemplate);
        else if (symbol === "^")
          value = this.renderInverted(token, context, partials, originalTemplate);
        else if (symbol === ">")
          value = this.renderPartial(token, context, partials, originalTemplate);
        else if (symbol === "&")
          value = this.unescapedValue(token, context);
        else if (symbol === "name")
          value = this.escapedValue(token, context);
        else if (symbol === "text")
          value = this.rawValue(token);
        if (value !== void 0)
          buffer += value;
      }
      return buffer;
    };
    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
      var self2 = this;
      var buffer = "";
      var value = context.lookup(token[1]);
      function subRender(template) {
        return self2.render(template, context, partials);
      }
      if (!value)
        return;
      if (isArray2(value)) {
        for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
          buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
        }
      } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
        buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
      } else if (isFunction(value)) {
        if (typeof originalTemplate !== "string")
          throw new Error("Cannot use higher-order sections without the original template");
        value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
        if (value != null)
          buffer += value;
      } else {
        buffer += this.renderTokens(token[4], context, partials, originalTemplate);
      }
      return buffer;
    };
    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
      var value = context.lookup(token[1]);
      if (!value || isArray2(value) && value.length === 0)
        return this.renderTokens(token[4], context, partials, originalTemplate);
    };
    Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
      if (!partials)
        return;
      var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
      if (value != null)
        return this.renderTokens(this.parse(value), context, partials, value);
    };
    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
      var value = context.lookup(token[1]);
      if (value != null) {
        if (mustache.sanitizeUnescaped) {
          return mustache.sanitizeUnescaped(value);
        }
        return value;
      }
    };
    Writer.prototype.escapedValue = function escapedValue(token, context) {
      var value = context.lookup(token[1]);
      if (value != null)
        return mustache.escape(value);
    };
    Writer.prototype.rawValue = function rawValue(token) {
      return token[1];
    };
    mustache.name = "mustache.js";
    mustache.version = "2.2.0";
    mustache.tags = ["{{", "}}"];
    var defaultWriter = new Writer();
    mustache.clearCache = function clearCache() {
      return defaultWriter.clearCache();
    };
    mustache.parse = function parse(template, tags) {
      return defaultWriter.parse(template, tags);
    };
    mustache.render = function render(template, view, partials) {
      if (typeof template !== "string") {
        throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
      }
      return defaultWriter.render(template, view, partials);
    };
    mustache.to_html = function to_html(template, view, partials, send) {
      var result = mustache.render(template, view, partials);
      if (isFunction(send)) {
        send(result);
      } else {
        return result;
      }
    };
    mustache.escape = escapeHtml;
    mustache.sanitizeUnescaped = null;
    mustache.setUnescapedSanitizer = function setUnescapedSanitizer(sanitizeUnescaped) {
      mustache.sanitizeUnescaped = sanitizeUnescaped;
    };
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
  }
  var Mustache = {};
  mustacheFactory(Mustache);
  var mustache_default = Mustache;

  // extensions/amp-mustache/0.2/amp-mustache.js
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
  var TAG3 = "amp-mustache";
  var AmpMustache = /* @__PURE__ */ function(_BaseTemplate) {
    _inherits(AmpMustache2, _BaseTemplate);
    var _super = _createSuper(AmpMustache2);
    function AmpMustache2(element, win) {
      var _this;
      _classCallCheck7(this, AmpMustache2);
      _this = _super.call(this, element, win);
      registerServiceBuilder(win, "purifier", function() {
        return new Purifier(win.document, dict(), rewriteAttributeValue);
      });
      _this.purifier_ = getService(win, "purifier");
      mustache_default.setUnescapedSanitizer(function(value) {
        return _this.purifier_.purifyTagsForTripleMustache(value);
      });
      return _this;
    }
    _createClass6(AmpMustache2, [{
      key: "compileCallback",
      value: function compileCallback() {
        if (this.viewerCanRenderTemplates()) {
          return;
        }
        this.nestedTemplates_ = dict();
        this.template_ = this.initTemplateString_();
        try {
          mustache_default.parse(this.template_, void 0);
        } catch (err) {
          user().error(TAG3, err.message, this.element);
        }
      }
    }, {
      key: "initTemplateString_",
      value: function initTemplateString_() {
        if (this.element.tagName == "TEMPLATE") {
          var content = templateContentClone(this.element);
          this.processNestedTemplates_(content);
          var container = this.element.ownerDocument.createElement("div");
          container.appendChild(content);
          return container.innerHTML;
        } else if (this.element.tagName == "SCRIPT") {
          return this.element.textContent;
        }
        return "";
      }
    }, {
      key: "processNestedTemplates_",
      value: function processNestedTemplates_(content) {
        var _this2 = this;
        var templates = content.querySelectorAll("template");
        iterateCursor(templates, function(template, index) {
          var key = "__AMP_NESTED_TEMPLATE_" + index;
          _this2.nestedTemplates_[key] = template.outerHTML;
          var pointer = _this2.element.ownerDocument.createTextNode("{{{" + key + "}}}");
          template.parentNode.replaceChild(pointer, template);
        });
      }
    }, {
      key: "setHtml",
      value: function setHtml(html) {
        var wrapped = "<div>" + html + "</div>";
        var purified = this.tryUnwrap(this.purifyAndSetHtml_(wrapped));
        return this.unwrapChildren(purified);
      }
    }, {
      key: "render",
      value: function render(data) {
        return this.tryUnwrap(this.render_(data));
      }
    }, {
      key: "renderAsString",
      value: function renderAsString(data) {
        return this.render_(data).innerHTML;
      }
    }, {
      key: "render_",
      value: function render_(data) {
        var mustacheData = data;
        if (typeof data === "object") {
          mustacheData = _extends2({}, data, this.nestedTemplates_);
        }
        var html = mustache_default.render(this.template_, mustacheData, void 0);
        return this.purifyAndSetHtml_(html);
      }
    }, {
      key: "purifyAndSetHtml_",
      value: function purifyAndSetHtml_(html) {
        var body = this.purifier_.purifyHtml("<div>" + html + "</div>");
        return body.firstElementChild;
      }
    }]);
    return AmpMustache2;
  }(BaseTemplate);
  AMP.extension(TAG3, "0.2", function(AMP2) {
    AMP2.registerTemplate(TAG3, AmpMustache);
  });
})();
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-mustache-0.2.max.js.map
