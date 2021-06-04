(self.AMP=self.AMP||[]).push({n:"amp-story-dev-tools",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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

  // node_modules/@ampproject/toolbox-cache-url/dist/amp-toolbox-cache-url.umd.js
  var require_amp_toolbox_cache_url_umd = __commonJS({
    "node_modules/@ampproject/toolbox-cache-url/dist/amp-toolbox-cache-url.umd.js"(exports, module) {
      "use strict";
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
      (function(m, q) {
        typeof exports === "object" && typeof module !== "undefined" ? q(exports) : typeof define === "function" && define.amd ? define(["exports"], q) : (m = typeof globalThis !== "undefined" ? globalThis : m || self, q(m.AmpToolboxCacheUrl = {}));
      })(exports, function(m) {
        function q(a2) {
          try {
            return decodeURIComponent(a2.replace(/\+/g, " "));
          } catch (b) {
            return null;
          }
        }
        function t(a2) {
          return (a2 ? a2 : "").toString().replace(N, "");
        }
        function z(a2) {
          var b = (typeof window !== "undefined" ? window : typeof A !== "undefined" ? A : typeof self !== "undefined" ? self : {}).location || {};
          a2 = a2 || b;
          b = {};
          var d = typeof a2, c;
          if (a2.protocol === "blob:")
            b = new k(unescape(a2.pathname), {});
          else if (d === "string")
            for (c in b = new k(a2, {}), B) {
              delete b[c];
            }
          else if (d === "object") {
            for (c in a2) {
              c in B || (b[c] = a2[c]);
            }
            b.slashes === void 0 && (b.slashes = O.test(a2.href));
          }
          return b;
        }
        function C(a2) {
          a2 = t(a2);
          a2 = P.exec(a2);
          return {
            protocol: a2[1] ? a2[1].toLowerCase() : "",
            slashes: !!(a2[2] && 2 <= a2[2].length),
            rest: a2[2] && a2[2].length === 1 ? "/" + a2[3] : a2[3]
          };
        }
        function k(a2, b, d) {
          a2 = t(a2);
          if (!(this instanceof k))
            return new k(a2, b, d);
          var c = u.slice();
          var e = typeof b;
          var l = 0;
          e !== "object" && e !== "string" && (d = b, b = null);
          d && typeof d !== "function" && (d = r.parse);
          b = z(b);
          var f = C(a2 || "");
          e = !f.protocol && !f.slashes;
          this.slashes = f.slashes || e && b.slashes;
          this.protocol = f.protocol || b.protocol || "";
          a2 = f.rest;
          for (f.slashes || (c[3] = [/(.*)/, "pathname"]); l < c.length; l++) {
            if (f = c[l], typeof f === "function")
              a2 = f(a2);
            else {
              var h = f[0];
              var g = f[1];
              if (h !== h)
                this[g] = a2;
              else if (typeof h === "string")
                ~(h = a2.indexOf(h)) && (typeof f[2] === "number" ? (this[g] = a2.slice(0, h), a2 = a2.slice(h + f[2])) : (this[g] = a2.slice(h), a2 = a2.slice(0, h)));
              else if (h = h.exec(a2))
                this[g] = h[1], a2 = a2.slice(0, h.index);
              this[g] = this[g] || (e && f[3] ? b[g] || "" : "");
              f[4] && (this[g] = this[g].toLowerCase());
            }
          }
          d && (this.query = d(this.query));
          if (e && b.slashes && this.pathname.charAt(0) !== "/" && (this.pathname !== "" || b.pathname !== "")) {
            a2 = this.pathname;
            b = b.pathname;
            if (a2 !== "") {
              b = (b || "/").split("/").slice(0, -1).concat(a2.split("/"));
              a2 = b.length;
              d = b[a2 - 1];
              c = false;
              for (l = 0; a2--; ) {
                b[a2] === "." ? b.splice(a2, 1) : b[a2] === ".." ? (b.splice(a2, 1), l++) : l && (a2 === 0 && (c = true), b.splice(a2, 1), l--);
              }
              c && b.unshift("");
              d !== "." && d !== ".." || b.push("");
              b = b.join("/");
            }
            this.pathname = b;
          }
          this.pathname.charAt(0) !== "/" && this.hostname && (this.pathname = "/" + this.pathname);
          D(this.port, this.protocol) || (this.host = this.hostname, this.port = "");
          this.username = this.password = "";
          this.auth && (f = this.auth.split(":"), this.username = f[0] || "", this.password = f[1] || "");
          this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
          this.href = this.toString();
        }
        function p(a2) {
          throw new RangeError(Q[a2]);
        }
        function E(a2, b) {
          var d = a2.split("@");
          var c = "";
          1 < d.length && (c = d[0] + "@", a2 = d[1]);
          a2 = a2.replace(R, ".");
          {
            a2 = a2.split(".");
            d = [];
            var _c = a2.length;
            for (; _c--; ) {
              d[_c] = b(a2[_c]);
            }
            b = d;
          }
          b = b.join(".");
          return c + b;
        }
        function F(a2) {
          var b = [], d = 0, c = a2.length;
          for (; d < c; ) {
            var e = a2.charCodeAt(d++);
            if (55296 <= e && 56319 >= e && d < c) {
              var _c2 = a2.charCodeAt(d++);
              (_c2 & 64512) == 56320 ? b.push(((e & 1023) << 10) + (_c2 & 1023) + 65536) : (b.push(e), d--);
            } else
              b.push(e);
          }
          return b;
        }
        function S(a2) {
          a2 = new TextEncoder("utf-8").encode(a2);
          return window.crypto.subtle.digest("SHA-256", a2).then(function(a3) {
            var b = [];
            a3 = new DataView(a3);
            for (var c = 0; c < a3.byteLength; c += 4) {
              var d = ("00000000" + a3.getUint32(c).toString(16)).slice(-8);
              b.push(d);
            }
            return b = b.join("");
          });
        }
        function v(a2) {
          a2 = new w(a2).hostname;
          if (G(a2))
            var b = false;
          else
            b = x.toUnicode(a2), b = 63 >= a2.length && !(T.test(b) && U.test(b)) && a2.indexOf(".") != -1;
          if (b) {
            b = x.toUnicode(a2);
            b = b.split("-").join("--");
            b = b.split(".").join("-");
            b = x.toASCII(b).toLowerCase();
            if (63 < b.length)
              return H(a2);
            G(b) && (b = "0-".concat(b, "-0"));
            return Promise.resolve(b);
          }
          return H(a2);
        }
        function H(a2) {
          a2 = typeof window !== "undefined" ? S(a2) : void 0;
          return a2.then(function(a3) {
            return V("ffffffffff" + a3 + "000000").substr(8, Math.ceil(4 * a3.length / 5));
          });
        }
        function V(a2) {
          var b = [];
          a2.match(/.{1,2}/g).forEach(function(a3, c2) {
            b[c2] = parseInt(a3, 16);
          });
          var d = b.length % 5, c = Math.floor(b.length / 5);
          a2 = [];
          if (d != 0) {
            for (var e = 0; e < 5 - d; e++) {
              b += "\0";
            }
            c += 1;
          }
          for (e = 0; e < c; e++) {
            a2.push("abcdefghijklmnopqrstuvwxyz234567".charAt(b[5 * e] >> 3)), a2.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e] & 7) << 2 | b[5 * e + 1] >> 6)), a2.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 1] & 63) >> 1)), a2.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 1] & 1) << 4 | b[5 * e + 2] >> 4)), a2.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 2] & 15) << 1 | b[5 * e + 3] >> 7)), a2.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 3] & 127) >> 2)), a2.push("abcdefghijklmnopqrstuvwxyz234567".charAt((b[5 * e + 3] & 3) << 3 | b[5 * e + 4] >> 5)), a2.push("abcdefghijklmnopqrstuvwxyz234567".charAt(b[5 * e + 4] & 31));
          }
          c = 0;
          d == 1 ? c = 6 : d == 2 ? c = 4 : d == 3 ? c = 3 : d == 4 && (c = 1);
          for (d = 0; d < c; d++) {
            a2.pop();
          }
          for (d = 0; d < c; d++) {
            a2.push("=");
          }
          return a2.join("");
        }
        function G(a2) {
          return a2.slice(2, 4) == "--" && a2.slice(0, 2) != "xn";
        }
        function I(a2, b, d) {
          if (d === void 0) {
            d = null;
          }
          var c = new w(b), e = W(c.pathname, d);
          e += c.protocol === "https:" ? "/s/" : "/";
          b.endsWith("/") || (c.pathname = c.pathname.replace(/\/$/, ""));
          return v(c.toString()).then(function(d2) {
            var f = new w(b);
            f.protocol = "https";
            d2 = d2 + "." + a2;
            f.host = d2;
            f.hostname = d2;
            f.pathname = e + c.hostname + c.pathname;
            return f.toString();
          });
        }
        function W(a2, b) {
          if (b === void 0) {
            b = null;
          }
          return X.isPathNameAnImage(a2) ? "/i" : Y.isPathNameAFont(a2) ? "/r" : b === Z.VIEWER ? "/v" : "/c";
        }
        var aa = "ase art bmp blp cd5 cit cpt cr2 cut dds dib djvu egt exif gif gpl grf icns ico iff jng jpeg jpg jfif jp2 jps lbm max miff mng msp nitf ota pbm pc1 pc2 pc3 pcf pcx pdn pgm PI1 PI2 PI3 pict pct pnm pns ppm psb psd pdd psp px pxm pxr qfx raw rle sct sgi rgb int bw tga tiff tif vtf xbm xcf xpm 3dv amf ai awg cgm cdr cmx dxf e2d egt eps fs gbr odg svg stl vrml x3d sxd v2d vnd wmf emf art xar png webp jxr hdp wdp cur ecw iff lbm liff nrrd pam pcx pgf sgi rgb rgba bw int inta sid ras sun tga".split(" "), X = {
          isPathNameAnImage: function isPathNameAnImage(a2) {
            return aa.some(function(b) {
              return a2.endsWith("." + b) ? true : false;
            });
          }
        }, ba = "### #gf $on $tf 0b 8m 8u 12u 15u 64c 075 75 085 85 91 091 096 96 abf acfm acs afm afn afs all amfm apf asf aspf atm auf b30 bco bdf bepf bez bfn bmap bmf bx bzr cbtf cct cef cff cfn cga ch4 cha chm chr chx claf collection compositefont dfont dus dzk eft eot etx euf f00 f06 f08 f09 f3f f10 f11 f12 f13 f16 fd fdb ff ffil flf fli fn3 fnb fnn fnt fnta fo1 fo2 fog fon font fonts fot frf frs ftm fxr fyi gdr gf gft glf glif glyphs gsf gxf hbf ice intellifont lepf lft lwfn mcf mcf mfd mfm mft mgf mmm mrf mtf mvec nlq ntf odttf ofm okf otf pcf pcf pfa pfb pfm pft phf pk pkt prs pss qbf qfn r8? scr sfd sff sfi sfl sfn sfo sfp sfs sif snf spd spritefont sui suit svg sxs t1c t2 tb1 tb2 tdf tfm tmf tpf ttc tte ttf type ufm ufo usl usp us? vf vf1 vf3 vfb vfm vfont vlw vmf vnf w30 wfn wnf woff woff2 xfc xfn xfr xft zfi zsu _v".split(" "), Y = {
          isPathNameAFont: function isPathNameAFont(a2) {
            return ba.some(function(b) {
              return a2.endsWith("." + b) ? true : false;
            });
          }
        };
        var A = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {}, D = function D2(a2, b) {
          b = b.split(":")[0];
          a2 = +a2;
          if (!a2)
            return false;
          switch (b) {
            case "http":
            case "ws":
              return a2 !== 80;
            case "https":
            case "wss":
              return a2 !== 443;
            case "ftp":
              return a2 !== 21;
            case "gopher":
              return a2 !== 70;
            case "file":
              return false;
          }
          return a2 !== 0;
        }, ca = Object.prototype.hasOwnProperty, r = {
          stringify: function stringify(a2, b) {
            b = b || "";
            var d = [], c;
            typeof b !== "string" && (b = "?");
            for (e in a2) {
              if (ca.call(a2, e)) {
                (c = a2[e]) || c !== null && c !== void 0 && !isNaN(c) || (c = "");
                var e = encodeURIComponent(e);
                c = encodeURIComponent(c);
                e !== null && c !== null && d.push(e + "=" + c);
              }
            }
            return d.length ? b + d.join("&") : "";
          },
          parse: function parse(a2) {
            for (var b = /([^=?&]+)=?([^&]*)/g, d = {}, c; c = b.exec(a2); ) {
              var e = q(c[1]);
              c = q(c[2]);
              e === null || c === null || e in d || (d[e] = c);
            }
            return d;
          }
        }, O = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/, P = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i, N = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/, u = [["#", "hash"], ["?", "query"], function(a2) {
          return a2.replace("\\", "/");
        }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], B = {
          hash: 1,
          query: 1
        };
        k.prototype = {
          set: function set(a2, b, d) {
            switch (a2) {
              case "query":
                typeof b === "string" && b.length && (b = (d || r.parse)(b));
                this[a2] = b;
                break;
              case "port":
                this[a2] = b;
                D(b, this.protocol) ? b && (this.host = this.hostname + ":" + b) : (this.host = this.hostname, this[a2] = "");
                break;
              case "hostname":
                this[a2] = b;
                this.port && (b += ":" + this.port);
                this.host = b;
                break;
              case "host":
                this[a2] = b;
                /:\d+$/.test(b) ? (b = b.split(":"), this.port = b.pop(), this.hostname = b.join(":")) : (this.hostname = b, this.port = "");
                break;
              case "protocol":
                this.protocol = b.toLowerCase();
                this.slashes = !d;
                break;
              case "pathname":
              case "hash":
                b ? (d = a2 === "pathname" ? "/" : "#", this[a2] = b.charAt(0) !== d ? d + b : b) : this[a2] = b;
                break;
              default:
                this[a2] = b;
            }
            for (a2 = 0; a2 < u.length; a2++) {
              b = u[a2], b[4] && (this[b[1]] = this[b[1]].toLowerCase());
            }
            this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
            this.href = this.toString();
            return this;
          },
          toString: function toString(a2) {
            a2 && typeof a2 === "function" || (a2 = r.stringify);
            var b = this.protocol;
            b && b.charAt(b.length - 1) !== ":" && (b += ":");
            b += this.slashes ? "//" : "";
            this.username && (b += this.username, this.password && (b += ":" + this.password), b += "@");
            b += this.host + this.pathname;
            (a2 = typeof this.query === "object" ? a2(this.query) : this.query) && (b += a2.charAt(0) !== "?" ? "?" + a2 : a2);
            this.hash && (b += this.hash);
            return b;
          }
        };
        k.extractProtocol = C;
        k.location = z;
        k.trimLeft = t;
        k.qs = r;
        var w = k;
        var da = /^xn--/, ea = /[^\0-\x7E]/, R = /[\x2E\u3002\uFF0E\uFF61]/g, Q = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        }, n = Math.floor, y = String.fromCharCode, J = function J2(a2, b) {
          return a2 + 22 + 75 * (26 > a2) - ((b != 0) << 5);
        }, K = function K2(a2, b, d) {
          var c = 0;
          a2 = d ? n(a2 / 700) : a2 >> 1;
          for (a2 += n(a2 / b); 455 < a2; c += 36) {
            a2 = n(a2 / 35);
          }
          return n(c + 36 * a2 / (a2 + 38));
        }, L = function L2(a2) {
          var b = [], d = a2.length;
          var c = 0, e = 128, l = 72;
          var f = a2.lastIndexOf("-");
          0 > f && (f = 0);
          for (var h = 0; h < f; ++h) {
            128 <= a2.charCodeAt(h) && p("not-basic"), b.push(a2.charCodeAt(h));
          }
          for (f = 0 < f ? f + 1 : 0; f < d; ) {
            h = c;
            for (var _b = 1, _e = 36; ; _e += 36) {
              f >= d && p("invalid-input");
              var g = a2.charCodeAt(f++);
              g = 10 > g - 48 ? g - 22 : 26 > g - 65 ? g - 65 : 26 > g - 97 ? g - 97 : 36;
              (36 <= g || g > n((2147483647 - c) / _b)) && p("overflow");
              c += g * _b;
              var _h = _e <= l ? 1 : _e >= l + 26 ? 26 : _e - l;
              if (g < _h)
                break;
              g = 36 - _h;
              _b > n(2147483647 / g) && p("overflow");
              _b *= g;
            }
            g = b.length + 1;
            l = K(c - h, g, h == 0);
            n(c / g) > 2147483647 - e && p("overflow");
            e += n(c / g);
            c %= g;
            b.splice(c++, 0, e);
          }
          return String.fromCodePoint.apply(String, b);
        }, M = function M2(a2) {
          var b = [];
          a2 = F(a2);
          var d = a2.length, c = 128, e = 0, l = 72;
          for (var _iterator = _createForOfIteratorHelperLoose2(a2), _step; !(_step = _iterator()).done; ) {
            var f = _step.value;
            128 > f && b.push(y(f));
          }
          var h = f = b.length;
          for (f && b.push("-"); h < d; ) {
            var g = 2147483647;
            for (var _iterator2 = _createForOfIteratorHelperLoose2(a2), _step2; !(_step2 = _iterator2()).done; ) {
              var _b2 = _step2.value;
              _b2 >= c && _b2 < g && (g = _b2);
            }
            var _d = h + 1;
            g - c > n((2147483647 - e) / _d) && p("overflow");
            e += (g - c) * _d;
            c = g;
            for (var _iterator3 = _createForOfIteratorHelperLoose2(a2), _step3; !(_step3 = _iterator3()).done; ) {
              var _m = _step3.value;
              if (_m < c && 2147483647 < ++e && p("overflow"), _m == c) {
                var k2 = e;
                for (g = 36; ; g += 36) {
                  var _a = g <= l ? 1 : g >= l + 26 ? 26 : g - l;
                  if (k2 < _a)
                    break;
                  k2 -= _a;
                  var _c3 = 36 - _a;
                  b.push(y(J(_a + k2 % _c3, 0)));
                  k2 = n(k2 / _c3);
                }
                b.push(y(J(k2, 0)));
                l = K(e, _d, h == f);
                e = 0;
                ++h;
              }
            }
            ++e;
            ++c;
          }
          return b.join("");
        }, x = {
          version: "2.1.0",
          ucs2: {
            decode: F,
            encode: function encode(a2) {
              return String.fromCodePoint.apply(String, a2);
            }
          },
          decode: L,
          encode: M,
          toASCII: function toASCII(a2) {
            return E(a2, function(a3) {
              return ea.test(a3) ? "xn--" + M(a3) : a3;
            });
          },
          toUnicode: function toUnicode(a2) {
            return E(a2, function(a3) {
              return da.test(a3) ? L(a3.slice(4).toLowerCase()) : a3;
            });
          }
        }, T = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, U = /[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/, Z = {
          CONTENT: "content",
          VIEWER: "viewer",
          WEB_PACKAGE: "web_package",
          CERTIFICATE: "certificate",
          IMAGE: "image"
        }, fa = {
          createCacheUrl: I,
          createCurlsSubdomain: v
        };
        m.createCacheUrl = I;
        m.createCurlsSubdomain = v;
        m.default = fa;
        Object.defineProperty(m, "__esModule", {
          value: true
        });
      });
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
  function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
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

  // src/core/error/index.js
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
  function duplicateErrorIfNecessary(error) {
    var messageProperty = Object.getOwnPropertyDescriptor(error, "message");
    if (messageProperty != null && messageProperty.writable) {
      return error;
    }
    var message = error.message, stack = error.stack;
    var e = new Error(message);
    for (var prop in error) {
      e[prop] = error[prop];
    }
    e.stack = stack;
    return e;
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
    } catch (e) {
      rethrowAsync(e);
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
  function devAssertElement(shouldBeElement, opt_message) {
    if (isMinifiedMode()) {
      return shouldBeElement;
    }
    devAssertDceCheck();
    return assertElement(devAssert2, shouldBeElement, opt_message);
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
  function escapeCssSelectorIdent(ident) {
    if (false) {
      return CSS.escape(ident);
    }
    return cssEscape(ident);
  }

  // src/core/dom/query.js
  function closest(element, callback, opt_stopAt) {
    for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
      if (callback(el)) {
        return el;
      }
    }
    return null;
  }
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
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
  function isJsonScriptTag(element) {
    return element.tagName == "SCRIPT" && element.hasAttribute("type") && element.getAttribute("type").toUpperCase() == "APPLICATION/JSON";
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
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
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__AMP_MEDIA_LOAD_FAILURE_SRC";
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
  function isLoaded(eleOrWindow) {
    return !!(eleOrWindow.complete || eleOrWindow.readyState == "complete" || isHTMLMediaElement(eleOrWindow) && eleOrWindow.readyState > 0 || eleOrWindow.document && eleOrWindow.document.readyState == "complete");
  }
  function loadPromise(eleOrWindow) {
    var unlistenLoad;
    var unlistenError;
    if (isLoaded(eleOrWindow)) {
      return Promise.resolve(eleOrWindow);
    }
    var isMediaElement = isHTMLMediaElement(eleOrWindow);
    if (isMediaElement && eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] === eleOrWindow.currentSrc) {
      return Promise.reject(eleOrWindow);
    }
    var loadingPromise = new Promise(function(resolve, reject) {
      if (isMediaElement) {
        unlistenLoad = listenOnce(eleOrWindow, "loadedmetadata", resolve, {
          capture: true
        });
      } else {
        unlistenLoad = listenOnce(eleOrWindow, "load", resolve);
      }
      if (!eleOrWindow.tagName) {
        return;
      }
      var errorTarget = eleOrWindow;
      if (isMediaElement && !eleOrWindow.hasAttribute("src")) {
        errorTarget = lastChildElement(eleOrWindow, function(child) {
          return child.tagName === "SOURCE";
        });
        if (!errorTarget) {
          return reject(new Error("Media has no source."));
        }
      }
      unlistenError = listenOnce(errorTarget, "error", reject);
    });
    return loadingPromise.then(function() {
      if (unlistenError) {
        unlistenError();
      }
      return eleOrWindow;
    }, function() {
      if (unlistenLoad) {
        unlistenLoad();
      }
      failedToLoad(eleOrWindow);
    });
  }
  function failedToLoad(eleOrWindow) {
    if (isHTMLMediaElement(eleOrWindow)) {
      eleOrWindow[MEDIA_LOAD_FAILURE_SRC_PROPERTY] = eleOrWindow.currentSrc || true;
    }
    var target = eleOrWindow;
    if (target && target.src) {
      target = target.src;
    }
    throw user().createError(LOAD_FAILURE_PREFIX, target);
  }
  function isHTMLMediaElement(eleOrWindow) {
    return eleOrWindow.tagName === "AUDIO" || eleOrWindow.tagName === "VIDEO";
  }

  // src/validator-integration.js
  function loadScript(doc, url) {
    var script = doc.createElement("script");
    script.src = url;
    var currentScript = doc.head.querySelector("script[nonce]");
    if (currentScript) {
      script.setAttribute("nonce", currentScript.getAttribute("nonce"));
    }
    var promise = loadPromise(script).then(function() {
      doc.head.removeChild(script);
    }, function() {
    });
    doc.head.appendChild(script);
    return promise;
  }

  // extensions/amp-story-dev-tools/0.1/amp-story-dev-tools-tab-debug.js
  var _templateObject;
  var _templateObject2;
  var _templateObject3;
  var _templateObject4;
  var _templateObject5;
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
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function createTabDebugElement(win, storyUrl) {
    var element = win.document.createElement("amp-story-dev-tools-tab-debug");
    element.setAttribute("data-story-url", storyUrl);
    return element;
  }
  var buildSuccessMessageTemplate = function buildSuccessMessageTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['<div class="i-amphtml-story-dev-tools-debug-success">\n    <div class="i-amphtml-story-dev-tools-debug-success-image"></div>\n    <h1 class="i-amphtml-story-dev-tools-debug-success-message">\n      Great Job!<br />No issues found\n    </h1>\n  </div>'])));
  };
  function buildStatusIcon(element, statusPassed) {
    var html2 = htmlFor(element);
    var iconEl = html2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['<div\n    class="i-amphtml-story-dev-tools-log-status-icon"\n  ></div>'])));
    iconEl.classList.add("i-amphtml-story-dev-tools-log-status-icon-" + (statusPassed ? "passed" : "failed"));
    return iconEl;
  }
  var buildLogMessageTemplate = function buildLogMessageTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(['<div class="i-amphtml-story-dev-tools-log-message">\n    <div>\n      <span class="i-amphtml-story-dev-tools-log-type"></span>\n      <span> at </span>\n      <span class="i-amphtml-story-dev-tools-log-position"></span>\n    </div>\n    <span class="i-amphtml-story-dev-tools-log-description"></span>\n    <a class="i-amphtml-story-dev-tools-log-spec" target="_blank">Learn more</a>\n    <pre class="i-amphtml-story-dev-tools-log-code"></pre>\n  </div>'])));
  };
  var TAG = "AMP_STORY_DEV_TOOLS_DEBUG";
  var AmpStoryDevToolsTabDebug = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStoryDevToolsTabDebug2, _AMP$BaseElement);
    var _super = _createSuper(AmpStoryDevToolsTabDebug2);
    function AmpStoryDevToolsTabDebug2(element) {
      var _this;
      _classCallCheck3(this, AmpStoryDevToolsTabDebug2);
      _this = _super.call(this, element);
      _this.storyUrl_ = "";
      _this.errorList_ = [];
      return _this;
    }
    _createClass2(AmpStoryDevToolsTabDebug2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported() {
        return true;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.storyUrl_ = this.element.getAttribute("data-story-url");
        this.element.classList.add("i-amphtml-story-dev-tools-tab");
        return loadScript(this.element.ownerDocument, urls.cdn + "/v0/validator.js").then(function() {
          return _this2.validateUrl_(amp.validator, _this2.storyUrl_);
        }).then(function(errorList) {
          _this2.errorList_ = errorList;
          _this2.updateDebugTabIcon(errorList);
        });
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        return this.buildDebugContent_();
      }
    }, {
      key: "validateUrl_",
      value: function validateUrl_(validator, url) {
        return Services.xhrFor(this.win).fetchText(url).then(function(response) {
          userAssert(response.ok, "Invalid story url");
          return response.text();
        }).then(function(html2) {
          var htmlLines = html2.split("\n");
          var validationResult = validator.validateString(html2);
          return validationResult.errors.map(function(error) {
            error.htmlLines = htmlLines.slice(error.line - 2, error.line + 3);
            error.message = validator.renderErrorMessage(error);
            return error;
          });
        }).catch(function(error) {
          user().error(TAG, error);
        });
      }
    }, {
      key: "buildDebugContent_",
      value: function buildDebugContent_() {
        var _this3 = this;
        var debugContainer = this.errorList_.length ? this.createErrorsList_() : buildSuccessMessageTemplate(this.element);
        debugContainer.prepend(this.buildDebugTitle_(this.errorList_.length));
        this.mutateElement(function() {
          _this3.element.textContent = "";
          _this3.element.appendChild(debugContainer);
        });
      }
    }, {
      key: "buildDebugTitle_",
      value: function buildDebugTitle_(errorCount) {
        var statusIcon = buildStatusIcon(this.element, errorCount == 0);
        statusIcon.classList.add("i-amphtml-story-dev-tools-log-status-icon");
        var title = htmlFor(this.element)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(['<div class="i-amphtml-story-dev-tools-log-status-title"></div>'])));
        var statusText = htmlFor(this.element)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["<span></span>"])));
        statusText.textContent = errorCount ? "Failed - " + errorCount + " errors" : "Passed";
        title.appendChild(statusIcon);
        title.appendChild(statusText);
        return title;
      }
    }, {
      key: "updateDebugTabIcon",
      value: function updateDebugTabIcon(errorList) {
        var debugTabSelector = this.win.document.querySelector('[data-tab="Debug"]');
        if (!debugTabSelector) {
          return;
        }
        var statusIcon;
        if (errorList.length) {
          statusIcon = createElementWithAttributes(this.element.ownerDocument, "span", {
            "class": "i-amphtml-story-dev-tools-log-status-number-failed"
          });
          statusIcon.textContent = errorList.length;
        } else {
          statusIcon = buildStatusIcon(this.element, true);
        }
        this.mutateElement(function() {
          return debugTabSelector.appendChild(statusIcon);
        });
      }
    }, {
      key: "createErrorsList_",
      value: function createErrorsList_() {
        var _this4 = this;
        var debugContainer = this.element.ownerDocument.createElement("div");
        this.errorList_.forEach(function(content) {
          var logEl = buildLogMessageTemplate(_this4.element);
          logEl.querySelector(".i-amphtml-story-dev-tools-log-type").textContent = content.code;
          var codeEl = logEl.querySelector(".i-amphtml-story-dev-tools-log-code");
          content.htmlLines.forEach(function(l, i) {
            var lineEl = _this4.element.ownerDocument.createElement("span");
            lineEl.classList.add("i-amphtml-story-dev-tools-log-code-line");
            lineEl.textContent = (i + content.line - 1).toString() + "|" + l;
            codeEl.appendChild(lineEl);
          });
          logEl.querySelector(".i-amphtml-story-dev-tools-log-position").textContent = content.line + ":" + content.col;
          logEl.querySelector(".i-amphtml-story-dev-tools-log-description").textContent = content.message;
          var specUrlElement = logEl.querySelector(".i-amphtml-story-dev-tools-log-spec");
          if (content.specUrl) {
            specUrlElement.href = content.specUrl;
          } else {
            specUrlElement.remove();
          }
          debugContainer.appendChild(logEl);
        });
        return debugContainer;
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return false;
      }
    }]);
    return AmpStoryDevToolsTabDebug2;
  }(AMP.BaseElement);

  // src/amp-story-player/amp-story-player-impl.js
  var ampToolboxCacheUrl = __toModule(require_amp_toolbox_cache_url_umd());

  // src/amp-story-player/amp-story-player-viewport-observer.js
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
  var SCROLL_THROTTLE_MS = 500;
  var AmpStoryPlayerViewportObserver = /* @__PURE__ */ function() {
    function AmpStoryPlayerViewportObserver2(win, element, viewportCb) {
      _classCallCheck4(this, AmpStoryPlayerViewportObserver2);
      this.win_ = win;
      this.element_ = element;
      this.cb_ = viewportCb;
      this.scrollHandler_ = null;
      this.initializeInObOrFallback_();
    }
    _createClass3(AmpStoryPlayerViewportObserver2, [{
      key: "initializeInObOrFallback_",
      value: function initializeInObOrFallback_() {
        if (!this.win_.IntersectionObserver || this.win_ !== this.win_.parent) {
          this.createInObFallback_();
          return;
        }
        this.createInOb_();
      }
    }, {
      key: "createInOb_",
      value: function createInOb_() {
        var _this = this;
        var inObCallback = function inObCallback2(entries) {
          entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
              return;
            }
            _this.cb_();
            observer.unobserve(_this.element_);
          });
        };
        var observer = new this.win_.IntersectionObserver(inObCallback);
        observer.observe(this.element_);
      }
    }, {
      key: "createInObFallback_",
      value: function createInObFallback_() {
        this.scrollHandler_ = throttle(this.win_, this.checkIfVisibleFallback_.bind(this), SCROLL_THROTTLE_MS);
        this.win_.addEventListener("scroll", this.scrollHandler_);
        this.checkIfVisibleFallback_(this.element_);
      }
    }, {
      key: "checkIfVisibleFallback_",
      value: function checkIfVisibleFallback_() {
        var elTop = this.element_.getBoundingClientRect().top;
        var winInnerHeight = this.win_.innerHeight;
        if (winInnerHeight > elTop) {
          this.cb_();
          this.win_.removeEventListener("scroll", this.scrollHandler_);
        }
      }
    }]);
    return AmpStoryPlayerViewportObserver2;
  }();

  // node_modules/@ampproject/viewer-messaging/messaging.js
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
  var TAG2 = "amp-viewer-messaging";
  var CHANNEL_OPEN_MSG = "channelOpen";
  var HANDSHAKE_POLL_MSG = "handshake-poll";
  var APP = "__AMPHTML__";
  var MessageType = {
    REQUEST: "q",
    RESPONSE: "s"
  };
  function parseMessage(message) {
    if (typeof message != "string") {
      return message;
    }
    if (message.charAt(0) != "{") {
      return null;
    }
    try {
      return JSON.parse(message);
    } catch (e) {
      return null;
    }
  }
  var WindowPortEmulator = /* @__PURE__ */ function() {
    function WindowPortEmulator2(win, origin, target) {
      _classCallCheck5(this, WindowPortEmulator2);
      this.win_ = win;
      this.origin_ = origin;
      this.target_ = target;
    }
    _createClass4(WindowPortEmulator2, [{
      key: "addEventListener",
      value: function addEventListener(eventType, handler) {
        var _this = this;
        this.win_.addEventListener("message", function(event) {
          if (event.origin == _this.origin_ && event.source == _this.target_) {
            handler(event);
          }
        });
      }
    }, {
      key: "postMessage",
      value: function postMessage(data) {
        var targetOrigin = this.origin_ === "null" ? "*" : this.origin_;
        this.target_.postMessage(data, targetOrigin);
      }
    }, {
      key: "start",
      value: function start() {
      }
    }]);
    return WindowPortEmulator2;
  }();
  var Messaging = /* @__PURE__ */ function() {
    function Messaging2(win, port, opt_isWebview, opt_token, opt_verifyToken) {
      _classCallCheck5(this, Messaging2);
      this.win_ = win;
      this.port_ = port;
      this.isWebview_ = !!opt_isWebview;
      this.token_ = opt_token || null;
      this.verifyToken_ = !!opt_verifyToken;
      this.requestIdCounter_ = 0;
      this.waitingForResponse_ = {};
      this.messageHandlers_ = {};
      this.defaultHandler_ = null;
      this.port_.addEventListener("message", this.handleMessage_.bind(this));
      this.port_.start();
    }
    _createClass4(Messaging2, [{
      key: "registerHandler",
      value: function registerHandler(messageName, requestHandler) {
        this.messageHandlers_[messageName] = requestHandler;
      }
    }, {
      key: "unregisterHandler",
      value: function unregisterHandler(messageName) {
        delete this.messageHandlers_[messageName];
      }
    }, {
      key: "setDefaultHandler",
      value: function setDefaultHandler(requestHandler) {
        this.defaultHandler_ = requestHandler;
      }
    }, {
      key: "handleMessage_",
      value: function handleMessage_(event) {
        var message = parseMessage(event.data);
        if (!message || message.app !== APP) {
          return;
        }
        if (this.token_ && this.verifyToken_ && message.messagingToken !== this.token_) {
          this.logError_(TAG2 + ": handleMessage_ error: ", "invalid token");
          return;
        }
        if (message.type === MessageType.REQUEST) {
          this.handleRequest_(message);
        } else if (message.type === MessageType.RESPONSE) {
          this.handleResponse_(message);
        }
      }
    }, {
      key: "sendRequest",
      value: function sendRequest(messageName, messageData, awaitResponse) {
        var _this2 = this;
        var requestId = ++this.requestIdCounter_;
        var promise = void 0;
        if (awaitResponse) {
          promise = new Promise(function(resolve, reject) {
            _this2.waitingForResponse_[requestId] = {
              resolve,
              reject
            };
          });
        }
        this.sendMessage_({
          app: APP,
          requestid: requestId,
          type: MessageType.REQUEST,
          name: messageName,
          data: messageData,
          rsvp: awaitResponse
        });
        return promise;
      }
    }, {
      key: "sendResponse_",
      value: function sendResponse_(requestId, messageName, messageData) {
        this.sendMessage_({
          app: APP,
          requestid: requestId,
          type: MessageType.RESPONSE,
          name: messageName,
          data: messageData
        });
      }
    }, {
      key: "sendResponseError_",
      value: function sendResponseError_(requestId, messageName, reason) {
        var errString = this.errorToString_(reason);
        this.logError_(TAG2 + ": sendResponseError_, message name: " + messageName, errString);
        this.sendMessage_({
          app: APP,
          requestid: requestId,
          type: MessageType.RESPONSE,
          name: messageName,
          data: null,
          error: errString
        });
      }
    }, {
      key: "sendMessage_",
      value: function sendMessage_(message) {
        var finalMessage = Object.assign(message, {});
        if (this.token_ && !this.verifyToken_) {
          finalMessage.messagingToken = this.token_;
        }
        this.port_.postMessage(this.isWebview_ ? JSON.stringify(finalMessage) : finalMessage);
      }
    }, {
      key: "handleRequest_",
      value: function handleRequest_(message) {
        var _this3 = this;
        var handler = this.messageHandlers_[message.name];
        if (!handler) {
          handler = this.defaultHandler_;
        }
        if (!handler) {
          var error = new Error("Cannot handle request because no default handler is set!");
          error.args = message.name;
          throw error;
        }
        var promise = handler(message.name, message.data, !!message.rsvp);
        if (message.rsvp) {
          var requestId = message.requestid;
          if (!promise) {
            this.sendResponseError_(requestId, message.name, new Error("no response"));
            throw new Error("expected response but none given: " + message.name);
          }
          promise.then(function(data) {
            _this3.sendResponse_(requestId, message.name, data);
          }, function(reason) {
            _this3.sendResponseError_(requestId, message.name, reason);
          });
        }
      }
    }, {
      key: "handleResponse_",
      value: function handleResponse_(message) {
        var requestId = message.requestid;
        var pending = this.waitingForResponse_[requestId];
        if (pending) {
          delete this.waitingForResponse_[requestId];
          if (message.error) {
            this.logError_(TAG2 + ": handleResponse_ error: ", message.error);
            pending.reject(new Error("Request " + message.name + " failed: " + message.error));
          } else {
            pending.resolve(message.data);
          }
        }
      }
    }, {
      key: "logError_",
      value: function logError_(state, opt_data) {
        if (!this.win_) {
          return;
        }
        var stateStr = "amp-messaging-error-logger: " + state;
        var dataStr = " data: " + this.errorToString_(opt_data);
        stateStr += dataStr;
        this.win_["viewerState"] = stateStr;
      }
    }, {
      key: "errorToString_",
      value: function errorToString_(err) {
        return err ? err.message ? err.message : String(err) : "unknown error";
      }
    }], [{
      key: "initiateHandshakeWithDocument",
      value: function initiateHandshakeWithDocument(target, opt_token) {
        return new Promise(function(resolve) {
          var intervalRef = setInterval(function() {
            var channel = new MessageChannel();
            var pollMessage = {
              app: APP,
              name: HANDSHAKE_POLL_MSG
            };
            target.postMessage(pollMessage, "*", [channel.port2]);
            var port = channel.port1;
            var listener = function listener2(event) {
              var message = parseMessage(event.data);
              if (!message) {
                return;
              }
              if (message.app === APP && message.name === CHANNEL_OPEN_MSG) {
                clearInterval(intervalRef);
                port.removeEventListener("message", listener2);
                var messaging = new Messaging2(null, port, false, opt_token, true);
                messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
                resolve(messaging);
              }
            };
            port.addEventListener("message", listener);
            port.start();
          }, 1e3);
        });
      }
    }, {
      key: "waitForHandshakeFromDocument",
      value: function waitForHandshakeFromDocument(source, target, origin, opt_token, opt_cdnProxyRegex) {
        return new Promise(function(resolve) {
          var listener = function listener2(event) {
            var message = parseMessage(event.data);
            if (!message) {
              return;
            }
            if ((event.origin == origin || opt_cdnProxyRegex && opt_cdnProxyRegex.test(event.origin)) && (!event.source || event.source == target) && message.app === APP && message.name === CHANNEL_OPEN_MSG) {
              source.removeEventListener("message", listener2);
              var port = new WindowPortEmulator(source, event.origin, target);
              var messaging = new Messaging2(null, port, false, opt_token, true);
              messaging.sendResponse_(message.requestid, CHANNEL_OPEN_MSG, null);
              resolve(messaging);
            }
          };
          source.addEventListener("message", listener);
        });
      }
    }]);
    return Messaging2;
  }();

  // src/amp-story-player/page-scroller.js
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
  var PageScroller = /* @__PURE__ */ function() {
    function PageScroller2(win) {
      _classCallCheck6(this, PageScroller2);
      this.win_ = win;
      this.touchEventState_ = {
        startY: 0,
        lastDelta: 0,
        touchStartTimeMs: null,
        touchEndTimeMs: null,
        touchMoveTimeMs: null
      };
      this.scrollState_ = {
        startY: 0,
        isRunning: false,
        acceleration: 1,
        speedLimit: 0.3,
        startTimeMs: null,
        maxTimeBetweenSwipesMs: 250,
        moveTimeThresholdMs: 100,
        durationMs: null,
        meetsDeltaYThreshold: false,
        deltaYThresholdPx: 5,
        deltaY: null,
        offsetThresholdPx: 30,
        offsetPx: null,
        multiplier: 1
      };
    }
    _createClass5(PageScroller2, [{
      key: "onTouchStart",
      value: function onTouchStart(timeStamp, startY) {
        this.touchEventState_.startY = startY;
        this.touchEventState_.touchStartTimeMs = timeStamp;
        this.scrollState_.startY = this.win_.scrollY;
        if (this.scrollState_.isRunning && this.touchEventState_.touchEndTimeMs - this.touchEventState_.touchStartTimeMs < this.scrollState_.maxTimeBetweenSwipesMs) {
          this.scrollState_.multiplier += this.scrollState_.acceleration;
        } else {
          this.scrollState_.multiplier = 1;
        }
        this.scrollState_.isRunning = false;
      }
    }, {
      key: "onTouchMove",
      value: function onTouchMove(timeStamp, currentY) {
        this.scrollState_.acceleration = Math.abs(this.scrollState_.deltaY / (timeStamp - this.touchEventState_.touchMoveTimeMs));
        this.touchEventState_.touchMoveTimeMs = timeStamp;
        throttle(this.win_, this.thottledScroll_.bind(this, currentY), 50)();
      }
    }, {
      key: "thottledScroll_",
      value: function thottledScroll_(currentY) {
        this.scrollState_.deltaY = currentY - this.touchEventState_.startY;
        this.scrollState_.meetsDeltaYThreshold = Math.abs(this.scrollState_.deltaY) > this.scrollState_.deltaYThresholdPx;
        if (!this.scrollState_.meetsDeltaYThreshold) {
          return;
        }
        this.win_.scrollBy(0, -this.scrollState_.deltaY);
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(timeStamp) {
        var _this = this;
        this.touchEventState_.touchEndTimeMs = timeStamp;
        if (!this.scrollState_.meetsDeltaYThreshold) {
          return;
        }
        var timeFromLastTouchMove = this.touchEventState_.touchEndTimeMs - this.touchEventState_.touchMoveTimeMs;
        this.scrollState_.offsetPx = this.calculateOffset_();
        if (timeFromLastTouchMove < this.scrollState_.moveTimeThresholdMs && Math.abs(this.scrollState_.offsetPx) > this.scrollState_.offsetThresholdPx) {
          this.scrollState_.durationMs = this.win_.innerHeight * 1.2;
          this.scrollState_.isRunning = true;
          requestAnimationFrame(function(timestamp) {
            _this.scrollState_.startTimeMs = timestamp;
            _this.scrollState_.startY = _this.win_.scrollY;
            _this.scrollOnNextTick_(timestamp);
          });
        }
        this.scrollState_.multiplier = 1;
        this.touchEventState_.startY = 0;
        this.scrollState_.deltaY = 0;
      }
    }, {
      key: "calculateOffset_",
      value: function calculateOffset_() {
        var maxOffset = this.win_.innerHeight * this.scrollState_.speedLimit;
        var offset = Math.pow(this.scrollState_.acceleration, 2) * this.win_.innerHeight;
        offset = Math.min(maxOffset, offset);
        offset *= this.scrollState_.deltaY > 0 ? -this.scrollState_.multiplier : this.scrollState_.multiplier;
        return offset;
      }
    }, {
      key: "scrollOnNextTick_",
      value: function scrollOnNextTick_(timeStamp) {
        var runTime = timeStamp - this.scrollState_.startTimeMs;
        if (runTime > this.scrollState_.durationMs) {
          return;
        }
        var progress = this.easeOutQuartFn_(runTime / this.scrollState_.durationMs);
        var scrollDelta = progress * this.scrollState_.offsetPx;
        var scrollForThisTick = this.scrollState_.startY + scrollDelta;
        if (!this.scrollState_.isRunning) {
          cancelAnimationFrame(requestAnimationFrame(this.scrollOnNextTick_.bind(this)));
        } else {
          this.win_.scroll(0, scrollForThisTick);
          requestAnimationFrame(this.scrollOnNextTick_.bind(this));
        }
      }
    }, {
      key: "easeOutQuartFn_",
      value: function easeOutQuartFn_(pTimeElapsed) {
        return 1 - --pTimeElapsed * pTimeElapsed * pTimeElapsed * pTimeElapsed;
      }
    }]);
    return PageScroller2;
  }();

  // src/core/constants/visibility-state.js
  var VisibilityState = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck7(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass6(LruCache2, [{
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
  function removeFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return url;
    }
    return url.substring(0, index);
  }
  function getFragment(url) {
    var index = url.indexOf("#");
    if (index == -1) {
      return "";
    }
    return url.substring(index);
  }
  function isProxyOrigin(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return urls.cdnProxyRegex.test(url.origin);
  }
  function removeSearch(url) {
    var index = url.indexOf("?");
    if (index == -1) {
      return url;
    }
    var fragment = getFragment(url);
    return url.substring(0, index) + fragment;
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
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
  }
  function resetStyles(element, properties) {
    for (var i = 0; i < properties.length; i++) {
      setStyle(element, properties[i], null);
    }
  }
  function isVar(property) {
    return property.startsWith("--");
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

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }

  // src/3p-frame.js
  var TAG3 = "3p-frame";
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

  // build/amp-story-player-iframe.css.js
  var cssText = `:host{all:initial;color:initial}.story-player-iframe{height:100%;width:100%;-ms-flex:0 0 100%;flex:0 0 100%;border:0;opacity:0;transition:opacity 500ms ease;position:absolute}.i-amphtml-story-player-main-container{height:100%;position:relative;overflow:hidden;transform-style:preserve-3d}.i-amphtml-story-player-loaded .story-player-iframe{opacity:1;transition:transform 200ms cubic-bezier(0.4,0,0.2,1)}.i-amphtml-story-player-no-navigation-transition .story-player-iframe{transition-duration:0.01s}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position="0"],.i-amphtml-story-player-main-container iframe:first-of-type{transform:translateZ(1px)}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position="1"],.i-amphtml-story-player-main-container iframe:nth-of-type(2),.i-amphtml-story-player-main-container iframe:nth-of-type(3){transform:translate3d(100%,0,0)}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position="-1"]{transform:translate3d(-100%,0,0)}.amp-story-player-exit-control-button{position:absolute;height:48px;width:48px;background-repeat:no-repeat;background-position:50%;margin-top:7px;background-size:28px;border:0px;background-color:transparent;outline:transparent;cursor:pointer;z-index:1}.amp-story-player-close-button{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E")}.amp-story-player-back-button{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'/%3E%3C/svg%3E")}.amp-story-player-hide-button{display:none}
/*# sourceURL=/css/amp-story-player-iframe.css*/`;

  // src/amp-story-player/amp-story-player-impl.js
  var _DEPRECATED_BUTTON_CL;
  var _DEPRECATED_EVENT_NAM;
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
  var LoadStateClass = {
    LOADING: "i-amphtml-story-player-loading",
    LOADED: "i-amphtml-story-player-loaded",
    ERROR: "i-amphtml-story-player-error"
  };
  var StoryPosition = {
    PREVIOUS: -1,
    CURRENT: 0,
    NEXT: 1
  };
  var SUPPORTED_CACHES = ["cdn.ampproject.org", "www.bing-amp.com"];
  var SANDBOX_MIN_LIST = ["allow-top-navigation"];
  var SwipingState = {
    NOT_SWIPING: 0,
    SWIPING_TO_LEFT: 1,
    SWIPING_TO_RIGHT: 2
  };
  var TOGGLE_THRESHOLD_PX = 50;
  var FETCH_STORIES_THRESHOLD = 2;
  var DEPRECATED_BUTTON_TYPES = {
    BACK: "back-button",
    CLOSE: "close-button"
  };
  var DEPRECATED_BUTTON_CLASSES = (_DEPRECATED_BUTTON_CL = {
    BASE: "amp-story-player-exit-control-button",
    HIDDEN: "amp-story-player-hide-button"
  }, _DEPRECATED_BUTTON_CL[DEPRECATED_BUTTON_TYPES.BACK] = "amp-story-player-back-button", _DEPRECATED_BUTTON_CL[DEPRECATED_BUTTON_TYPES.CLOSE] = "amp-story-player-close-button", _DEPRECATED_BUTTON_CL);
  var DEPRECATED_EVENT_NAMES = (_DEPRECATED_EVENT_NAM = {}, _DEPRECATED_EVENT_NAM[DEPRECATED_BUTTON_TYPES.BACK] = "amp-story-player-back", _DEPRECATED_EVENT_NAM[DEPRECATED_BUTTON_TYPES.CLOSE] = "amp-story-player-close", _DEPRECATED_EVENT_NAM);
  var STORY_STATE_TYPE = {
    PAGE_ATTACHMENT_STATE: "page-attachment"
  };
  var STORY_MESSAGE_STATE_TYPE = {
    PAGE_ATTACHMENT_STATE: "PAGE_ATTACHMENT_STATE",
    MUTED_STATE: "MUTED_STATE",
    CURRENT_PAGE_ID: "CURRENT_PAGE_ID",
    STORY_PROGRESS: "STORY_PROGRESS"
  };
  var AMP_STORY_PLAYER_EVENT = "AMP_STORY_PLAYER_EVENT";
  var CLASS_NO_NAVIGATION_TRANSITION = "i-amphtml-story-player-no-navigation-transition";
  var TAG4 = "amp-story-player";
  var LOG_TYPE = {
    DEV: "amp-story-player-dev"
  };
  var AmpStoryPlayer = /* @__PURE__ */ function() {
    function AmpStoryPlayer2(win, element) {
      _classCallCheck8(this, AmpStoryPlayer2);
      this.win_ = win;
      this.element_ = element;
      this.doc_ = win.document;
      this.cachedA_ = this.doc_.createElement("a");
      this.stories_ = [];
      this.rootEl_ = null;
      this.currentIdx_ = 0;
      this.swipingState_ = SwipingState.NOT_SWIPING;
      this.playerConfig_ = null;
      this.isFetchingStoriesEnabled_ = null;
      this.isCircularWrappingEnabled_ = null;
      this.touchEventState_ = {
        startX: 0,
        startY: 0,
        lastX: 0,
        isSwipeX: null
      };
      this.currentStoryLoadDeferred_ = null;
      this.visibleDeferred_ = new Deferred();
      this.attachCallbacksToElement_();
      this.pageScroller_ = new PageScroller(win);
      this.playing_ = true;
      this.attribution_ = null;
      return this.element_;
    }
    _createClass7(AmpStoryPlayer2, [{
      key: "attachCallbacksToElement_",
      value: function attachCallbacksToElement_() {
        this.element_.buildPlayer = this.buildPlayer.bind(this);
        this.element_.layoutPlayer = this.layoutPlayer.bind(this);
        this.element_.getElement = this.getElement.bind(this);
        this.element_.getStories = this.getStories.bind(this);
        this.element_.load = this.load.bind(this);
        this.element_.show = this.show.bind(this);
        this.element_.add = this.add.bind(this);
        this.element_.play = this.play.bind(this);
        this.element_.pause = this.pause.bind(this);
        this.element_.go = this.go.bind(this);
        this.element_.mute = this.mute.bind(this);
        this.element_.unmute = this.unmute.bind(this);
        this.element_.getStoryState = this.getStoryState.bind(this);
        this.element_.rewind = this.rewind.bind(this);
      }
    }, {
      key: "load",
      value: function load() {
        if (!this.element_.isConnected) {
          throw new Error("[" + TAG4 + "] element must be connected to the DOM before calling load().");
        }
        if (!!this.element_.isBuilt_) {
          throw new Error("[" + TAG4 + "] calling load() on an already loaded element.");
        }
        this.buildPlayer();
        this.layoutPlayer();
      }
    }, {
      key: "initializeAndAddStory_",
      value: function initializeAndAddStory_(story) {
        story.idx = this.stories_.length;
        story.distance = story.idx - this.currentIdx_;
        story.connectedDeferred = new Deferred();
        this.stories_.push(story);
      }
    }, {
      key: "add",
      value: function add(newStories) {
        if (newStories.length <= 0) {
          return;
        }
        var isStoryDef = function isStoryDef2(story2) {
          return story2 && story2.href;
        };
        if (!Array.isArray(newStories) || !newStories.every(isStoryDef)) {
          throw new Error('"stories" parameter has the wrong structure');
        }
        var renderStartingIdx = this.stories_.length;
        for (var i = 0; i < newStories.length; i++) {
          var story = newStories[i];
          this.initializeAndAddStory_(story);
          this.buildIframeFor_(story);
        }
        this.render_(renderStartingIdx);
      }
    }, {
      key: "play",
      value: function play() {
        if (!this.element_.isLaidOut_) {
          this.layoutPlayer();
        }
        this.togglePaused_(false);
      }
    }, {
      key: "pause",
      value: function pause() {
        this.togglePaused_(true);
      }
    }, {
      key: "togglePaused_",
      value: function togglePaused_(paused) {
        this.playing_ = !paused;
        var currentStory = this.stories_[this.currentIdx_];
        this.updateVisibilityState_(currentStory, paused ? VisibilityState.PAUSED : VisibilityState.VISIBLE);
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this.element_;
      }
    }, {
      key: "getStories",
      value: function getStories() {
        return this.stories_;
      }
    }, {
      key: "buildPlayer",
      value: function buildPlayer() {
        if (!!this.element_.isBuilt_) {
          return;
        }
        this.initializeAnchorElStories_();
        this.initializeShadowRoot_();
        this.buildStories_();
        this.initializeButton_();
        this.readPlayerConfig_();
        this.maybeFetchMoreStories_(this.stories_.length - this.currentIdx_ - 1);
        this.initializeAutoplay_();
        this.initializeAttribution_();
        this.initializePageScroll_();
        this.initializeCircularWrapping_();
        this.signalReady_();
        this.element_.isBuilt_ = true;
      }
    }, {
      key: "initializeAnchorElStories_",
      value: function initializeAnchorElStories_() {
        var _this = this;
        var anchorEls = toArray(this.element_.querySelectorAll("a"));
        anchorEls.forEach(function(element) {
          var posterImgEl = element.querySelector("img[data-amp-story-player-poster-img]");
          var posterImgSrc = posterImgEl && posterImgEl.getAttribute("src");
          var story = {
            href: element.href,
            title: element.textContent && element.textContent.trim() || null,
            posterImage: element.getAttribute("data-poster-portrait-src") || posterImgSrc
          };
          _this.initializeAndAddStory_(story);
        });
      }
    }, {
      key: "signalReady_",
      value: function signalReady_() {
        this.element_.dispatchEvent(createCustomEvent(this.win_, "ready", dict({})));
        this.element_.isReady = true;
      }
    }, {
      key: "buildStories_",
      value: function buildStories_() {
        var _this2 = this;
        this.stories_.forEach(function(story) {
          _this2.buildIframeFor_(story);
        });
      }
    }, {
      key: "initializeShadowRoot_",
      value: function initializeShadowRoot_() {
        this.rootEl_ = this.doc_.createElement("div");
        this.rootEl_.classList.add("i-amphtml-story-player-main-container");
        var shadowContainer = this.doc_.createElement("div");
        shadowContainer.classList.add("i-amphtml-fill-content", "i-amphtml-story-player-shadow-root-intermediary");
        this.element_.appendChild(shadowContainer);
        var containerToUse = getMode().test || !this.element_.attachShadow ? shadowContainer : shadowContainer.attachShadow({
          mode: "open"
        });
        var styleEl = this.doc_.createElement("style");
        styleEl.textContent = cssText;
        containerToUse.appendChild(styleEl);
        containerToUse.insertBefore(this.rootEl_, containerToUse.firstElementChild);
      }
    }, {
      key: "initializeButton_",
      value: function initializeButton_() {
        var _this3 = this;
        var option = this.element_.getAttribute("exit-control");
        if (!Object.values(DEPRECATED_BUTTON_TYPES).includes(option)) {
          return;
        }
        var button = this.doc_.createElement("button");
        this.rootEl_.appendChild(button);
        button.classList.add(DEPRECATED_BUTTON_CLASSES[option]);
        button.classList.add(DEPRECATED_BUTTON_CLASSES.BASE);
        button.addEventListener("click", function() {
          _this3.element_.dispatchEvent(createCustomEvent(_this3.win_, DEPRECATED_EVENT_NAMES[option], dict({})));
        });
      }
    }, {
      key: "readPlayerConfig_",
      value: function readPlayerConfig_() {
        if (this.playerConfig_) {
          return this.playerConfig_;
        }
        var ampCache = this.element_.getAttribute("amp-cache");
        if (ampCache && !SUPPORTED_CACHES.includes(ampCache)) {
          console.error("[" + TAG4 + "]", "Unsupported cache specified, use one of following: " + SUPPORTED_CACHES);
        }
        var scriptTag = this.element_.querySelector("script");
        if (!scriptTag) {
          return null;
        }
        if (!isJsonScriptTag(scriptTag)) {
          throw new Error('<script> child must have type="application/json"');
        }
        try {
          this.playerConfig_ = parseJson(scriptTag.textContent);
        } catch (reason) {
          console.error("[" + TAG4 + "] ", reason);
        }
        return this.playerConfig_;
      }
    }, {
      key: "buildIframeFor_",
      value: function buildIframeFor_(story) {
        var iframeEl = this.doc_.createElement("iframe");
        if (story.posterImage) {
          setStyle(iframeEl, "backgroundImage", story.posterImage);
        }
        iframeEl.classList.add("story-player-iframe");
        iframeEl.setAttribute("allow", "autoplay");
        applySandbox(iframeEl);
        this.addSandboxFlags_(iframeEl);
        this.initializeLoadingListeners_(iframeEl);
        story.iframe = iframeEl;
      }
    }, {
      key: "addSandboxFlags_",
      value: function addSandboxFlags_(iframe) {
        if (!iframe.sandbox || !iframe.sandbox.supports || iframe.sandbox.length <= 0) {
          return;
        }
        for (var i = 0; i < SANDBOX_MIN_LIST.length; i++) {
          var flag = SANDBOX_MIN_LIST[i];
          if (!iframe.sandbox.supports(flag)) {
            throw new Error("Iframe doesn't support: " + flag);
          }
          iframe.sandbox.add(flag);
        }
      }
    }, {
      key: "setUpMessagingForStory_",
      value: function setUpMessagingForStory_(story) {
        var _this4 = this;
        var iframe = story.iframe;
        story.messagingPromise = new Promise(function(resolve) {
          _this4.initializeHandshake_(story, iframe).then(function(messaging) {
            messaging.setDefaultHandler(function() {
              return resolvedPromise();
            });
            messaging.registerHandler("touchstart", function(event, data) {
              _this4.onTouchStart_(data);
            });
            messaging.registerHandler("touchmove", function(event, data) {
              _this4.onTouchMove_(data);
            });
            messaging.registerHandler("touchend", function(event, data) {
              _this4.onTouchEnd_(data);
            });
            messaging.registerHandler("selectDocument", function(event, data) {
              _this4.onSelectDocument_(data);
            });
            messaging.sendRequest("onDocumentState", dict({
              "state": STORY_MESSAGE_STATE_TYPE.PAGE_ATTACHMENT_STATE
            }), false);
            messaging.sendRequest("onDocumentState", dict({
              "state": STORY_MESSAGE_STATE_TYPE.CURRENT_PAGE_ID
            }), false);
            messaging.sendRequest("onDocumentState", dict({
              "state": STORY_MESSAGE_STATE_TYPE.MUTED_STATE
            }));
            messaging.registerHandler("documentStateUpdate", function(event, data) {
              _this4.onDocumentStateUpdate_(data, messaging);
            });
            if (_this4.playerConfig_ && _this4.playerConfig_.controls) {
              _this4.updateControlsStateForAllStories_(story.idx);
              messaging.sendRequest("customDocumentUI", dict({
                "controls": _this4.playerConfig_.controls
              }), false);
            }
            resolve(messaging);
          }, function(err) {
            console.error("[" + TAG4 + "]", err);
          });
        });
      }
    }, {
      key: "updateControlsStateForAllStories_",
      value: function updateControlsStateForAllStories_(storyIdx) {
        if (storyIdx === this.stories_.length - 1) {
          var skipButtonIdx = findIndex(this.playerConfig_.controls, function(control) {
            return control.name === "skip-next" || control.name === "skip-to-next";
          });
          if (skipButtonIdx >= 0) {
            this.playerConfig_.controls[skipButtonIdx].state = "disabled";
          }
        }
      }
    }, {
      key: "initializeHandshake_",
      value: function initializeHandshake_(story, iframeEl) {
        var _this5 = this;
        return this.maybeGetCacheUrl_(story.href).then(function(url) {
          return Messaging.waitForHandshakeFromDocument(_this5.win_, iframeEl.contentWindow, _this5.getEncodedLocation_(url).origin, null, urls.cdnProxyRegex);
        });
      }
    }, {
      key: "initializeLoadingListeners_",
      value: function initializeLoadingListeners_(iframeEl) {
        var _this6 = this;
        this.rootEl_.classList.add(LoadStateClass.LOADING);
        iframeEl.onload = function() {
          _this6.rootEl_.classList.remove(LoadStateClass.LOADING);
          _this6.rootEl_.classList.add(LoadStateClass.LOADED);
          _this6.element_.classList.add(LoadStateClass.LOADED);
        };
        iframeEl.onerror = function() {
          _this6.rootEl_.classList.remove(LoadStateClass.LOADING);
          _this6.rootEl_.classList.add(LoadStateClass.ERROR);
          _this6.element_.classList.add(LoadStateClass.ERROR);
        };
      }
    }, {
      key: "layoutPlayer",
      value: function layoutPlayer() {
        var _this7 = this;
        if (!!this.element_.isLaidOut_) {
          return;
        }
        new AmpStoryPlayerViewportObserver(this.win_, this.element_, function() {
          return _this7.visibleDeferred_.resolve();
        });
        this.render_();
        this.element_.isLaidOut_ = true;
      }
    }, {
      key: "fetchStories_",
      value: function fetchStories_() {
        var endpoint = this.playerConfig_.behavior.endpoint;
        if (!endpoint) {
          this.isFetchingStoriesEnabled_ = false;
          return resolvedPromise();
        }
        var init = {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        };
        endpoint = endpoint.replace(/\${offset}/, this.stories_.length.toString());
        return fetch(endpoint, init).then(function(response) {
          return response.json();
        }).catch(function(reason) {
          console.error("[" + TAG4 + "]", reason);
        });
      }
    }, {
      key: "initStoryContentLoadedPromise_",
      value: function initStoryContentLoadedPromise_(story) {
        var _this8 = this;
        this.currentStoryLoadDeferred_ = new Deferred();
        story.messagingPromise.then(function(messaging) {
          return messaging.registerHandler("storyContentLoaded", function() {
            story.storyContentLoaded = true;
            _this8.currentStoryLoadDeferred_.resolve();
          });
        });
      }
    }, {
      key: "show",
      value: function show(storyUrl, pageId, options) {
        var _this9 = this;
        if (pageId === void 0) {
          pageId = null;
        }
        if (options === void 0) {
          options = {};
        }
        var story = this.getStoryFromUrl_(storyUrl);
        var renderPromise = resolvedPromise();
        if (story.idx !== this.currentIdx_) {
          this.currentIdx_ = story.idx;
          renderPromise = this.render_();
          if (options.animate === false) {
            this.rootEl_.classList.toggle(CLASS_NO_NAVIGATION_TRANSITION, true);
            listenOnce(story.iframe, "transitionend", function() {
              _this9.rootEl_.classList.remove(CLASS_NO_NAVIGATION_TRANSITION);
            });
          }
          this.onNavigation_();
        }
        if (pageId != null) {
          return renderPromise.then(function() {
            return _this9.goToPageId_(pageId);
          });
        }
        return renderPromise;
      }
    }, {
      key: "mute",
      value: function mute() {
        var story = this.stories_[this.currentIdx_];
        this.updateMutedState_(story, true);
      }
    }, {
      key: "unmute",
      value: function unmute() {
        var story = this.stories_[this.currentIdx_];
        this.updateMutedState_(story, false);
      }
    }, {
      key: "getStoryState",
      value: function getStoryState(storyStateType) {
        switch (storyStateType) {
          case STORY_STATE_TYPE.PAGE_ATTACHMENT_STATE:
            this.getPageAttachmentState_();
            break;
          default:
            break;
        }
      }
    }, {
      key: "signalNavigation_",
      value: function signalNavigation_(data) {
        var event = createCustomEvent(this.win_, "navigation", data);
        this.element_.dispatchEvent(event);
      }
    }, {
      key: "onNavigation_",
      value: function onNavigation_() {
        var index = this.currentIdx_;
        var remaining = this.stories_.length - this.currentIdx_ - 1;
        var navigation = {
          "index": index,
          "remaining": remaining
        };
        this.signalNavigation_(navigation);
        this.maybeFetchMoreStories_(remaining);
      }
    }, {
      key: "maybeFetchMoreStories_",
      value: function maybeFetchMoreStories_(remaining) {
        var _this10 = this;
        if (this.playerConfig_ && this.playerConfig_.behavior && this.shouldFetchMoreStories_() && remaining <= FETCH_STORIES_THRESHOLD) {
          this.fetchStories_().then(function(stories) {
            if (!stories) {
              return;
            }
            _this10.add(stories);
          }).catch(function(reason) {
            console.error("[" + TAG4 + "]", reason);
          });
        }
      }
    }, {
      key: "validateBehaviorDef_",
      value: function validateBehaviorDef_(behavior) {
        return behavior && behavior.on && behavior.action;
      }
    }, {
      key: "shouldFetchMoreStories_",
      value: function shouldFetchMoreStories_() {
        if (this.isFetchingStoriesEnabled_ !== null) {
          return this.isFetchingStoriesEnabled_;
        }
        var behavior = this.playerConfig_.behavior;
        var hasEndFetchBehavior = function hasEndFetchBehavior2(behavior2) {
          return behavior2.on === "end" && behavior2.action === "fetch" && behavior2.endpoint;
        };
        this.isFetchingStoriesEnabled_ = this.validateBehaviorDef_(behavior) && hasEndFetchBehavior(behavior);
        return this.isFetchingStoriesEnabled_;
      }
    }, {
      key: "next_",
      value: function next_() {
        if (!this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ + 1)) {
          return;
        }
        if (this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ + 1)) {
          this.go(1);
          return;
        }
        this.currentIdx_++;
        this.render_();
        this.onNavigation_();
      }
    }, {
      key: "previous_",
      value: function previous_() {
        if (!this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ - 1)) {
          return;
        }
        if (this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ - 1)) {
          this.go(-1);
          return;
        }
        this.currentIdx_--;
        this.render_();
        this.onNavigation_();
      }
    }, {
      key: "go",
      value: function go(storyDelta, pageDelta, options) {
        var _this11 = this;
        if (pageDelta === void 0) {
          pageDelta = 0;
        }
        if (options === void 0) {
          options = {};
        }
        if (storyDelta === 0 && pageDelta === 0) {
          return;
        }
        if (!this.isCircularWrappingEnabled_ && this.isIndexOutofBounds_(this.currentIdx_ + storyDelta)) {
          throw new Error("Out of Story range.");
        }
        var newStoryIdx = this.currentIdx_ + storyDelta;
        var newStory = storyDelta > 0 ? this.stories_[newStoryIdx % this.stories_.length] : this.stories_[(newStoryIdx % this.stories_.length + this.stories_.length) % this.stories_.length];
        var showPromise = resolvedPromise();
        if (this.currentIdx_ !== newStory.idx) {
          showPromise = this.show(newStory.href, null, options);
        }
        showPromise.then(function() {
          _this11.selectPage_(pageDelta);
        });
      }
    }, {
      key: "updatePosition_",
      value: function updatePosition_(story) {
        var position = story.distance === 0 ? StoryPosition.CURRENT : story.idx > this.currentIdx_ ? StoryPosition.NEXT : StoryPosition.PREVIOUS;
        requestAnimationFrame(function() {
          var iframe = story.iframe;
          resetStyles(iframe, ["transform", "transition"]);
          iframe.setAttribute("i-amphtml-iframe-position", position);
        });
      }
    }, {
      key: "currentStoryPromise_",
      value: function currentStoryPromise_(story) {
        if (this.stories_[this.currentIdx_].storyContentLoaded) {
          return resolvedPromise();
        }
        if (story.distance !== 0) {
          return this.currentStoryLoadDeferred_.promise;
        }
        if (this.currentStoryLoadDeferred_) {
          this.currentStoryLoadDeferred_.reject("[" + LOG_TYPE.DEV + "] Cancelling previous story load promise.");
        }
        this.initStoryContentLoadedPromise_(story);
        return resolvedPromise();
      }
    }, {
      key: "render_",
      value: function render_(startingIdx) {
        var _this12 = this;
        if (startingIdx === void 0) {
          startingIdx = this.currentIdx_;
        }
        var renderPromises = [];
        var _loop = function _loop2(i2) {
          var story = _this12.stories_[(i2 + startingIdx) % _this12.stories_.length];
          var oldDistance = story.distance;
          story.distance = Math.abs(_this12.currentIdx_ - story.idx);
          if (oldDistance <= 1 && story.distance > 1) {
            _this12.removeFromDom_(story);
          }
          if (story.distance <= 1 && !story.iframe.isConnected) {
            _this12.appendToDom_(story);
          }
          if (story.distance > 1) {
            return "continue";
          }
          renderPromises.push(_this12.currentStoryPromise_(story).then(function() {
            return _this12.maybeGetCacheUrl_(story.href);
          }).then(function(storyUrl) {
            if (!_this12.sanitizedUrlsAreEquals_(storyUrl, story.iframe.src)) {
              _this12.setSrc_(story, storyUrl);
            }
          }).then(function() {
            return _this12.visibleDeferred_.promise;
          }).then(function() {
            if (story.distance === 0 && _this12.playing_) {
              _this12.updateVisibilityState_(story, VisibilityState.VISIBLE);
            }
            if (oldDistance === 0 && story.distance === 1) {
              _this12.updateVisibilityState_(story, VisibilityState.INACTIVE);
            }
          }).then(function() {
            _this12.updatePosition_(story);
            if (story.distance === 0) {
              tryFocus(story.iframe);
            }
          }).catch(function(err) {
            if (err.includes(LOG_TYPE.DEV)) {
              return;
            }
            console.error("[" + TAG4 + "]", err);
          }));
        };
        for (var i = 0; i < this.stories_.length; i++) {
          var _ret = _loop(i);
          if (_ret === "continue")
            continue;
        }
        return Promise.all(renderPromises);
      }
    }, {
      key: "appendToDom_",
      value: function appendToDom_(story) {
        this.rootEl_.appendChild(story.iframe);
        this.setUpMessagingForStory_(story);
        story.connectedDeferred.resolve();
      }
    }, {
      key: "removeFromDom_",
      value: function removeFromDom_(story) {
        story.storyContentLoaded = false;
        story.connectedDeferred = new Deferred();
        story.iframe.setAttribute("src", "");
        story.iframe.remove();
      }
    }, {
      key: "setSrc_",
      value: function setSrc_(story, url) {
        var iframe = story.iframe;
        var _this$getEncodedLocat = this.getEncodedLocation_(url, VisibilityState.PRERENDER), href = _this$getEncodedLocat.href;
        iframe.setAttribute("src", href);
        if (story.title) {
          iframe.setAttribute("title", story.title);
        }
      }
    }, {
      key: "sanitizedUrlsAreEquals_",
      value: function sanitizedUrlsAreEquals_(storyHref, iframeHref) {
        if (iframeHref.length <= 0) {
          return false;
        }
        var sanitizedIframeHref = removeFragment(removeSearch(iframeHref));
        var sanitizedStoryHref = removeFragment(removeSearch(storyHref));
        return sanitizedIframeHref === sanitizedStoryHref;
      }
    }, {
      key: "maybeGetCacheUrl_",
      value: function maybeGetCacheUrl_(url) {
        var ampCache = this.element_.getAttribute("amp-cache");
        if (!ampCache || isProxyOrigin(url) || !SUPPORTED_CACHES.includes(ampCache)) {
          return Promise.resolve(url);
        }
        return ampToolboxCacheUrl.createCacheUrl(ampCache, url, "viewer").then(function(cacheUrl) {
          return cacheUrl;
        });
      }
    }, {
      key: "getEncodedLocation_",
      value: function getEncodedLocation_(href, visibilityState) {
        if (visibilityState === void 0) {
          visibilityState = VisibilityState.INACTIVE;
        }
        var playerFragmentParams = {
          "visibilityState": visibilityState,
          "origin": this.win_.origin,
          "showStoryUrlInfo": "0",
          "storyPlayer": "v0",
          "cap": "swipe"
        };
        if (this.attribution_ === "auto") {
          playerFragmentParams["attribution"] = "auto";
        }
        var originalFragmentString = getFragment(href);
        var originalFragments = parseQueryString(originalFragmentString);
        var fragmentParams = _extends({}, originalFragments, playerFragmentParams);
        var noFragmentUrl = removeFragment(href);
        if (isProxyOrigin(href)) {
          var ampJsQueryParam = dict({
            "amp_js_v": "0.1"
          });
          noFragmentUrl = addParamsToUrl(noFragmentUrl, ampJsQueryParam);
        }
        var inputUrl = noFragmentUrl + "#" + serializeQueryString(fragmentParams);
        return parseUrlWithA(this.cachedA_, inputUrl);
      }
    }, {
      key: "updateVisibilityState_",
      value: function updateVisibilityState_(story, visibilityState) {
        story.messagingPromise.then(function(messaging) {
          return messaging.sendRequest("visibilitychange", {
            state: visibilityState
          }, true);
        });
      }
    }, {
      key: "updateStoryState_",
      value: function updateStoryState_(story, state, value) {
        story.messagingPromise.then(function(messaging) {
          messaging.sendRequest("setDocumentState", {
            state,
            value
          });
        });
      }
    }, {
      key: "updateMutedState_",
      value: function updateMutedState_(story, mutedValue) {
        this.updateStoryState_(story, STORY_MESSAGE_STATE_TYPE.MUTED_STATE, mutedValue);
      }
    }, {
      key: "getPageAttachmentState_",
      value: function getPageAttachmentState_() {
        var _this13 = this;
        var story = this.stories_[this.currentIdx_];
        story.messagingPromise.then(function(messaging) {
          messaging.sendRequest("getDocumentState", {
            state: STORY_MESSAGE_STATE_TYPE.PAGE_ATTACHMENT_STATE
          }, true).then(function(event) {
            return _this13.dispatchPageAttachmentEvent_(event.value);
          });
        });
      }
    }, {
      key: "goToPageId_",
      value: function goToPageId_(pageId) {
        var story = this.stories_[this.currentIdx_];
        story.messagingPromise.then(function(messaging) {
          return messaging.sendRequest("selectPage", {
            "id": pageId
          });
        });
      }
    }, {
      key: "getStoryFromUrl_",
      value: function getStoryFromUrl_(storyUrl) {
        var storyIdx = storyUrl ? findIndex(this.stories_, function(_ref) {
          var href = _ref.href;
          return href === storyUrl;
        }) : this.currentIdx_;
        if (!this.stories_[storyIdx]) {
          throw new Error("Story URL not found in the player: " + storyUrl);
        }
        return this.stories_[storyIdx];
      }
    }, {
      key: "rewind",
      value: function rewind(storyUrl) {
        var story = this.getStoryFromUrl_(storyUrl);
        this.whenConnected_(story).then(function() {
          return story.messagingPromise;
        }).then(function(messaging) {
          return messaging.sendRequest("rewind", {});
        });
      }
    }, {
      key: "whenConnected_",
      value: function whenConnected_(story) {
        if (story.iframe.isConnected) {
          return resolvedPromise();
        }
        return story.connectedDeferred.promise;
      }
    }, {
      key: "selectPage_",
      value: function selectPage_(delta) {
        if (delta === 0) {
          return;
        }
        this.sendSelectPageDelta_(delta);
      }
    }, {
      key: "sendSelectPageDelta_",
      value: function sendSelectPageDelta_(delta) {
        var story = this.stories_[this.currentIdx_];
        story.messagingPromise.then(function(messaging) {
          return messaging.sendRequest("selectPage", {
            delta
          });
        });
      }
    }, {
      key: "onDocumentStateUpdate_",
      value: function onDocumentStateUpdate_(data, messaging) {
        switch (data.state) {
          case STORY_MESSAGE_STATE_TYPE.PAGE_ATTACHMENT_STATE:
            this.onPageAttachmentStateUpdate_(data.value);
            break;
          case STORY_MESSAGE_STATE_TYPE.CURRENT_PAGE_ID:
            this.onCurrentPageIdUpdate_(data.value, messaging);
            break;
          case STORY_MESSAGE_STATE_TYPE.MUTED_STATE:
            this.onMutedStateUpdate_(data.value);
            break;
          case AMP_STORY_PLAYER_EVENT:
            this.onPlayerEvent_(data.value);
            break;
          default:
            break;
        }
      }
    }, {
      key: "onPlayerEvent_",
      value: function onPlayerEvent_(value) {
        switch (value) {
          case "amp-story-player-skip-next":
          case "amp-story-player-skip-to-next":
            this.next_();
            break;
          default:
            this.element_.dispatchEvent(createCustomEvent(this.win_, value, dict({})));
            break;
        }
      }
    }, {
      key: "onMutedStateUpdate_",
      value: function onMutedStateUpdate_(muted) {
        this.element_.dispatchEvent(createCustomEvent(this.win_, "amp-story-muted-state", {
          muted
        }));
      }
    }, {
      key: "onCurrentPageIdUpdate_",
      value: function onCurrentPageIdUpdate_(pageId, messaging) {
        var _this14 = this;
        messaging.sendRequest("getDocumentState", dict({
          "state": STORY_MESSAGE_STATE_TYPE.STORY_PROGRESS
        }), true).then(function(progress) {
          _this14.element_.dispatchEvent(createCustomEvent(_this14.win_, "storyNavigation", dict({
            "pageId": pageId,
            "progress": progress.value
          })));
        });
      }
    }, {
      key: "onPageAttachmentStateUpdate_",
      value: function onPageAttachmentStateUpdate_(pageAttachmentOpen) {
        this.updateButtonVisibility_(!pageAttachmentOpen);
        this.dispatchPageAttachmentEvent_(pageAttachmentOpen);
      }
    }, {
      key: "updateButtonVisibility_",
      value: function updateButtonVisibility_(isVisible) {
        var button = this.rootEl_.querySelector("button.amp-story-player-exit-control-button");
        if (!button) {
          return;
        }
        isVisible ? button.classList.remove(DEPRECATED_BUTTON_CLASSES.HIDDEN) : button.classList.add(DEPRECATED_BUTTON_CLASSES.HIDDEN);
      }
    }, {
      key: "dispatchPageAttachmentEvent_",
      value: function dispatchPageAttachmentEvent_(isPageAttachmentOpen) {
        this.element_.dispatchEvent(createCustomEvent(this.win_, isPageAttachmentOpen ? "page-attachment-open" : "page-attachment-close", dict({})));
      }
    }, {
      key: "onSelectDocument_",
      value: function onSelectDocument_(data) {
        this.dispatchEndOfStoriesEvent_(data);
        if (data.next) {
          this.next_();
        } else if (data.previous) {
          this.previous_();
        }
      }
    }, {
      key: "dispatchEndOfStoriesEvent_",
      value: function dispatchEndOfStoriesEvent_(data) {
        if (this.isCircularWrappingEnabled_ || !data.next && !data.previous) {
          return;
        }
        var endOfStories, name;
        if (data.next) {
          endOfStories = this.currentIdx_ + 1 === this.stories_.length;
          name = "noNextStory";
        } else {
          endOfStories = this.currentIdx_ === 0;
          name = "noPreviousStory";
        }
        if (endOfStories) {
          this.element_.dispatchEvent(createCustomEvent(this.win_, name, dict({})));
        }
      }
    }, {
      key: "onTouchStart_",
      value: function onTouchStart_(event) {
        var coordinates = this.getClientTouchCoordinates_(event);
        if (!coordinates) {
          return;
        }
        this.touchEventState_.startX = coordinates.screenX;
        this.touchEventState_.startY = coordinates.screenY;
        this.pageScroller_ && this.pageScroller_.onTouchStart(event.timeStamp, coordinates.clientY);
        this.element_.dispatchEvent(createCustomEvent(this.win_, "amp-story-player-touchstart", dict({
          "touches": event.touches
        })));
      }
    }, {
      key: "onTouchMove_",
      value: function onTouchMove_(event) {
        var coordinates = this.getClientTouchCoordinates_(event);
        if (!coordinates) {
          return;
        }
        this.element_.dispatchEvent(createCustomEvent(this.win_, "amp-story-player-touchmove", dict({
          "touches": event.touches,
          "isNavigationalSwipe": this.touchEventState_.isSwipeX
        })));
        if (this.touchEventState_.isSwipeX === false) {
          this.pageScroller_ && this.pageScroller_.onTouchMove(event.timeStamp, coordinates.clientY);
          return;
        }
        var screenX = coordinates.screenX, screenY = coordinates.screenY;
        this.touchEventState_.lastX = screenX;
        if (this.touchEventState_.isSwipeX === null) {
          this.touchEventState_.isSwipeX = Math.abs(this.touchEventState_.startX - screenX) > Math.abs(this.touchEventState_.startY - screenY);
          if (!this.touchEventState_.isSwipeX) {
            return;
          }
        }
        this.onSwipeX_({
          deltaX: screenX - this.touchEventState_.startX,
          last: false
        });
      }
    }, {
      key: "onTouchEnd_",
      value: function onTouchEnd_(event) {
        this.element_.dispatchEvent(createCustomEvent(this.win_, "amp-story-player-touchend", dict({
          "touches": event.touches,
          "isNavigationalSwipe": this.touchEventState_.isSwipeX
        })));
        if (this.touchEventState_.isSwipeX === true) {
          this.onSwipeX_({
            deltaX: this.touchEventState_.lastX - this.touchEventState_.startX,
            last: true
          });
        } else {
          this.pageScroller_ && this.pageScroller_.onTouchEnd(event.timeStamp);
        }
        this.touchEventState_.startX = 0;
        this.touchEventState_.startY = 0;
        this.touchEventState_.lastX = 0;
        this.touchEventState_.isSwipeX = null;
        this.swipingState_ = SwipingState.NOT_SWIPING;
      }
    }, {
      key: "onSwipeX_",
      value: function onSwipeX_(gesture) {
        if (this.stories_.length <= 1) {
          return;
        }
        var deltaX = gesture.deltaX;
        if (gesture.last === true) {
          var delta = Math.abs(deltaX);
          if (this.swipingState_ === SwipingState.SWIPING_TO_LEFT) {
            delta > TOGGLE_THRESHOLD_PX && (this.getSecondaryStory_() || this.isCircularWrappingEnabled_) ? this.next_() : this.resetStoryStyles_();
          }
          if (this.swipingState_ === SwipingState.SWIPING_TO_RIGHT) {
            delta > TOGGLE_THRESHOLD_PX && (this.getSecondaryStory_() || this.isCircularWrappingEnabled_) ? this.previous_() : this.resetStoryStyles_();
          }
          return;
        }
        this.drag_(deltaX);
      }
    }, {
      key: "resetStoryStyles_",
      value: function resetStoryStyles_() {
        var currentIframe = this.stories_[this.currentIdx_].iframe;
        requestAnimationFrame(function() {
          resetStyles(devAssertElement(currentIframe), ["transform", "transition"]);
        });
        var secondaryStory = this.getSecondaryStory_();
        if (secondaryStory) {
          requestAnimationFrame(function() {
            resetStyles(devAssertElement(secondaryStory.iframe), ["transform", "transition"]);
          });
        }
      }
    }, {
      key: "getSecondaryStory_",
      value: function getSecondaryStory_() {
        var nextStoryIdx = this.swipingState_ === SwipingState.SWIPING_TO_LEFT ? this.currentIdx_ + 1 : this.currentIdx_ - 1;
        if (this.isIndexOutofBounds_(nextStoryIdx)) {
          return null;
        }
        return this.stories_[nextStoryIdx];
      }
    }, {
      key: "isIndexOutofBounds_",
      value: function isIndexOutofBounds_(index) {
        return index >= this.stories_.length || index < 0;
      }
    }, {
      key: "initializeAutoplay_",
      value: function initializeAutoplay_() {
        if (!this.playerConfig_) {
          return;
        }
        var behavior = this.playerConfig_.behavior;
        if (behavior && typeof behavior.autoplay === "boolean") {
          this.playing_ = behavior.autoplay;
        }
      }
    }, {
      key: "initializeAttribution_",
      value: function initializeAttribution_() {
        if (!this.playerConfig_) {
          return;
        }
        var display = this.playerConfig_.display;
        if (display && display.attribution === "auto") {
          this.attribution_ = "auto";
        }
      }
    }, {
      key: "initializePageScroll_",
      value: function initializePageScroll_() {
        if (!this.playerConfig_) {
          return;
        }
        var behavior = this.playerConfig_.behavior;
        if (behavior && behavior.pageScroll === false) {
          this.pageScroller_ = null;
        }
      }
    }, {
      key: "initializeCircularWrapping_",
      value: function initializeCircularWrapping_() {
        if (this.isCircularWrappingEnabled_ !== null) {
          return this.isCircularWrappingEnabled_;
        }
        if (!this.playerConfig_) {
          this.isCircularWrappingEnabled_ = false;
          return false;
        }
        var behavior = this.playerConfig_.behavior;
        var hasCircularWrappingEnabled = function hasCircularWrappingEnabled2(behavior2) {
          return behavior2.on === "end" && behavior2.action === "circular-wrapping";
        };
        this.isCircularWrappingEnabled_ = this.validateBehaviorDef_(behavior) && hasCircularWrappingEnabled(behavior);
        return this.isCircularWrappingEnabled_;
      }
    }, {
      key: "drag_",
      value: function drag_(deltaX) {
        var secondaryTranslate;
        if (deltaX < 0) {
          this.swipingState_ = SwipingState.SWIPING_TO_LEFT;
          secondaryTranslate = "translate3d(calc(100% + " + deltaX + "px), 0, 0)";
        } else {
          this.swipingState_ = SwipingState.SWIPING_TO_RIGHT;
          secondaryTranslate = "translate3d(calc(" + deltaX + "px - 100%), 0, 0)";
        }
        var story = this.stories_[this.currentIdx_];
        var iframe = story.iframe;
        var translate = "translate3d(" + deltaX + "px, 0, 0)";
        requestAnimationFrame(function() {
          setStyles(devAssertElement(iframe), {
            transform: translate,
            transition: "none"
          });
        });
        var secondaryStory = this.getSecondaryStory_();
        if (!secondaryStory) {
          return;
        }
        requestAnimationFrame(function() {
          setStyles(devAssertElement(secondaryStory.iframe), {
            transform: secondaryTranslate,
            transition: "none"
          });
        });
      }
    }, {
      key: "getClientTouchCoordinates_",
      value: function getClientTouchCoordinates_(event) {
        var touches = event.touches;
        if (!touches || touches.length < 1) {
          return null;
        }
        var _touches$ = touches[0], clientX = _touches$.clientX, clientY = _touches$.clientY, screenX = _touches$.screenX, screenY = _touches$.screenY;
        return {
          screenX,
          screenY,
          clientX,
          clientY
        };
      }
    }]);
    return AmpStoryPlayer2;
  }();

  // extensions/amp-story-dev-tools/0.1/utils.js
  function updateHash(updates, win) {
    var queryHash = parseQueryString(win.location.hash);
    queryHash = Object.assign(queryHash, updates);
    win.location.hash = Object.entries(queryHash).filter(function(keyValue) {
      return keyValue[1] != void 0;
    }).map(function(keyValue) {
      return keyValue[0] + "=" + keyValue[1];
    }).join("&");
  }
  function removeAfterTimeout(context, element, timeout) {
    setTimeout(function() {
      return context.mutateElement(function() {
        return element.remove();
      });
    }, timeout);
  }
  function addAttributeAfterTimeout(context, element, timeout, attributeName, attributeValue) {
    if (attributeValue === void 0) {
      attributeValue = "";
    }
    setTimeout(function() {
      return context.mutateElement(function() {
        return element.setAttribute(attributeName, attributeValue);
      });
    }, timeout);
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
  function observeContentSize(element, callback) {
    observeSize(element, Type.CONTENT, callback);
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
    for (var i = entries.length - 1; i >= 0; i--) {
      var entry = entries[i];
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
      for (var k = 0; k < callbacks.length; k++) {
        var _callbacks$k = callbacks[k], callback = _callbacks$k.callback, type = _callbacks$k.type;
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

  // extensions/amp-story-dev-tools/0.1/amp-story-dev-tools-tab-preview.js
  var _templateObject6;
  var _templateObject22;
  var _templateObject32;
  var _templateObject42;
  var _templateObject52;
  var _templateObject62;
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
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function createTabPreviewElement(win, storyUrl, devices) {
    var element = win.document.createElement("amp-story-dev-tools-tab-preview");
    element.setAttribute("data-story-url", storyUrl);
    devices ? element.setAttribute("data-devices", devices) : null;
    return element;
  }
  var buildDeviceTemplate = function buildDeviceTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose2(['\n    <div class="i-amphtml-story-dev-tools-device">\n      <div class="i-amphtml-story-dev-tools-device-screen">\n        <div class="i-amphtml-story-dev-tools-device-statusbar">\n          <div class="i-amphtml-story-dev-tools-device-statusbar-clock"></div>\n          <div class="i-amphtml-story-dev-tools-device-statusbar-icons"></div>\n        </div>\n        <div class="i-amphtml-story-dev-tools-device-appbar">\n          <div class="i-amphtml-story-dev-tools-device-appbar-icon"></div>\n          <div class="i-amphtml-story-dev-tools-device-appbar-urlbar"></div>\n          <div class="i-amphtml-story-dev-tools-device-appbar-icon"></div>\n          <div class="i-amphtml-story-dev-tools-device-appbar-icon"></div>\n        </div>\n        <amp-story-player width="1" height="1" layout="container">\n          <a></a>\n        </amp-story-player>\n        <div class="i-amphtml-story-dev-tools-device-bottombar">\n          <div class="i-amphtml-story-dev-tools-device-appbar-icon"></div>\n          <div class="i-amphtml-story-dev-tools-device-appbar-icon"></div>\n          <div class="i-amphtml-story-dev-tools-device-appbar-icon"></div>\n          <div class="i-amphtml-story-dev-tools-device-appbar-icon"></div>\n          <div class="i-amphtml-story-dev-tools-device-appbar-icon"></div>\n        </div>\n        <div class="i-amphtml-story-dev-tools-device-navigation"></div>\n      </div>\n    </div>\n  '])));
  };
  var buildDeviceChipTemplate = function buildDeviceChipTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose2(['\n    <button\n      class="i-amphtml-story-dev-tools-device-chip"\n      data-action="toggleDeviceChip"\n    >\n      <span class="i-amphtml-story-dev-tools-device-chip-name">Name</span>\n      <svg\n        title="cross"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="white"\n        width="18px"\n        height="18px"\n      >\n        <rect width="20" height="3" x="2" y="10.5"></rect>\n        <rect\n          width="3"\n          height="20"\n          x="10.5"\n          y="2"\n          class="i-amphtml-story-dev-tools-device-chip-add-stick"\n        ></rect>\n      </svg>\n    </button>\n  '])));
  };
  var buildHelpButtonTemplate = function buildHelpButtonTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject32 || (_templateObject32 = _taggedTemplateLiteralLoose2(['\n    <button\n      class="i-amphtml-story-dev-tools-button i-amphtml-story-dev-tools-button-help"\n    >\n      <span>HELP</span>\n      <div\n        class="i-amphtml-story-dev-tools-button-icon i-amphtml-story-dev-tools-button-help-icon"\n      ></div>\n    </button>\n  '])));
  };
  var buildHelpDialogTemplate = function buildHelpDialogTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject42 || (_templateObject42 = _taggedTemplateLiteralLoose2(['\n    <div\n      class="i-amphtml-story-dev-tools-device-dialog-bg"\n      data-action="closeDialog"\n    >\n      <div\n        class="i-amphtml-story-dev-tools-device-dialog-container"\n        data-action="ignore"\n      >\n        <h1>Quick tip</h1>\n        <div class="i-amphtml-story-dev-tools-device-dialog-help-tips">\n          <p>\n            You can simply add #development=1 to the end of your Web Story URL\n            to access the Web Stories Dev-Tools.\n          </p>\n          <span class="i-amphtml-story-dev-tools-device-dialog-help-hint"\n            >https://yourstory.com<b>#development=1</b></span\n          >\n        </div>\n        <h1>Helpful links</h1>\n        <a\n          class="i-amphtml-story-dev-tools-device-dialog-link i-amphtml-story-dev-tools-help-page-experience-link"\n          target="_blank"\n          href="https://amp.dev/page-experience/"\n          ><span>Analyze the Page Experience</span>\n          <div class="i-amphtml-story-dev-tools-device-dialog-arrow"></div\n        ></a>\n        <a\n          class="i-amphtml-story-dev-tools-device-dialog-link"\n          target="_blank"\n          href="https://amp.dev/documentation/guides-and-tutorials/start/create_successful_stories/"\n          ><span>Best practices for creating a successful Web Story</span>\n          <div class="i-amphtml-story-dev-tools-device-dialog-arrow"></div\n        ></a>\n        <a\n          class="i-amphtml-story-dev-tools-device-dialog-link"\n          target="_blank"\n          href="https://amp.dev/about/stories/"\n          ><span>Learn more about Web Stories</span>\n          <div class="i-amphtml-story-dev-tools-device-dialog-arrow"></div\n        ></a>\n        <a\n          class="i-amphtml-story-dev-tools-device-dialog-link i-amphtml-story-dev-tools-help-search-preview-link"\n          target="_blank"\n          href="https://search.google.com/test/amp?url="\n          ><span>Web Stories Google Search Preview Tool</span>\n          <div class="i-amphtml-story-dev-tools-device-dialog-arrow"></div\n        ></a>\n        <button\n          data-action="closeDialog"\n          class="i-amphtml-story-dev-tools-device-dialog-close"\n        ></button>\n      </div>\n    </div>\n  '])));
  };
  var buildAddDeviceDialogTemplate = function buildAddDeviceDialogTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject52 || (_templateObject52 = _taggedTemplateLiteralLoose2(['\n    <div\n      class="i-amphtml-story-dev-tools-device-dialog-bg"\n      data-action="closeDialog"\n    >\n      <div\n        class="i-amphtml-story-dev-tools-device-dialog-container i-amphtml-story-dev-tools-device-dialog-add-devices"\n        data-action="ignore"\n      >\n        <h1>Mobile</h1>\n        <div class="i-amphtml-story-dev-tools-device-dialog-mobile"></div>\n        <h1>Tablet</h1>\n        <div class="i-amphtml-story-dev-tools-device-dialog-tablet"></div>\n        <h1>Desktop</h1>\n        <div class="i-amphtml-story-dev-tools-device-dialog-desktop"></div>\n        <button\n          data-action="closeDialog"\n          class="i-amphtml-story-dev-tools-device-dialog-close"\n        ></button>\n      </div>\n    </div>\n  '])));
  };
  var MAX_DEVICE_SPACES = 4;
  var DEFAULT_DEVICES = "iphone11native;oneplus5t;pixel2";
  var ALL_DEVICES = [{
    "name": "Pixel 2",
    "width": 411,
    "height": 605,
    "deviceHeight": 731,
    "deviceSpaces": 1,
    "details": ["pixel2", "browser", "android"]
  }, {
    "name": "Pixel 3",
    "width": 411,
    "height": 686,
    "deviceHeight": 823,
    "deviceSpaces": 1,
    "details": ["pixel3", "browser", "android"]
  }, {
    "name": "iPhone 8 (Browser)",
    "width": 375,
    "height": 554,
    "deviceHeight": 667,
    "deviceSpaces": 1,
    "details": ["iphone8", "browser", "ios"]
  }, {
    "name": "iPhone 8 (Native)",
    "width": 375,
    "height": 596,
    "deviceHeight": 667,
    "deviceSpaces": 1,
    "details": ["iphone8", "native", "ios"]
  }, {
    "name": "iPhone 11 (Browser)",
    "width": 414,
    "height": 724,
    "deviceHeight": 896,
    "deviceSpaces": 1,
    "details": ["iphone11", "browser", "ios"]
  }, {
    "name": "iPhone 11 (Native)",
    "width": 414,
    "height": 795,
    "deviceHeight": 896,
    "deviceSpaces": 1,
    "details": ["iphone11", "native", "ios"]
  }, {
    "name": "iPhone 11 Pro (Browser)",
    "width": 375,
    "height": 635,
    "deviceHeight": 812,
    "deviceSpaces": 1,
    "details": ["iphone11pro", "browser", "ios"]
  }, {
    "name": "iPhone 11 Pro (Native)",
    "width": 375,
    "height": 713,
    "deviceHeight": 812,
    "deviceSpaces": 1,
    "details": ["iphone11pro", "native", "ios"]
  }, {
    "name": "iPad (Browser)",
    "width": 810,
    "height": 1010,
    "deviceHeight": 1080,
    "deviceSpaces": 2,
    "details": ["ipad", "browser", "ios"]
  }, {
    "name": "OnePlus 5T",
    "width": 455,
    "height": 820,
    "deviceHeight": 910,
    "deviceSpaces": 1,
    "details": ["oneplus5t", "browser", "android"]
  }, {
    "name": "OnePlus 7 Pro",
    "width": 412,
    "height": 782,
    "deviceHeight": 892,
    "deviceSpaces": 1,
    "details": ["oneplus7pro", "browser", "android"]
  }, {
    "name": "Desktop 1080p",
    "width": 1920,
    "height": 1e3,
    "deviceHeight": 1080,
    "deviceSpaces": 2,
    "details": ["desktop1080", "browser", "desktop"]
  }];
  function simplifyDeviceName(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/gi, "");
  }
  function parseDevices(queryHash) {
    var screenSizes = [];
    queryHash.split(";").forEach(function(deviceName) {
      var currSpecs = null;
      currSpecs = ALL_DEVICES.find(function(el) {
        var currDeviceName = simplifyDeviceName(el.name);
        var specDeviceName = simplifyDeviceName(deviceName);
        return currDeviceName.substring(0, specDeviceName.length) === specDeviceName;
      });
      if (currSpecs) {
        screenSizes.push(currSpecs);
      }
    });
    return screenSizes;
  }
  var PREVIEW_ACTIONS = {
    SHOW_HELP_DIALOG: "showHelpDialog",
    SHOW_ADD_DEVICE_DIALIG: "showAddDeviceDialog",
    CLOSE_DIALOG: "closeDialog",
    REMOVE_DEVICE: "removeDevice",
    TOGGLE_DEVICE_CHIP: "toggleDeviceChip"
  };
  var AmpStoryDevToolsTabPreview = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits2(AmpStoryDevToolsTabPreview2, _AMP$BaseElement);
    var _super = _createSuper2(AmpStoryDevToolsTabPreview2);
    function AmpStoryDevToolsTabPreview2(element) {
      var _this;
      _classCallCheck9(this, AmpStoryDevToolsTabPreview2);
      _this = _super.call(this, element);
      _this.storyUrl_ = null;
      _this.devices_ = [];
      _this.currentDialog_ = null;
      _this.devicesContainer_ = null;
      _this.onResize_ = _this.onResize_.bind(_assertThisInitialized2(_this));
      _this.expectedNavigationEvents_ = {};
      return _this;
    }
    _createClass8(AmpStoryDevToolsTabPreview2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported() {
        return true;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.storyUrl_ = this.element.getAttribute("data-story-url");
        this.element.classList.add("i-amphtml-story-dev-tools-tab");
        this.devicesContainer_ = htmlFor(this.element)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteralLoose2(['<div class="i-amphtml-story-dev-tools-devices-container"></div>'])));
        this.element.appendChild(this.devicesContainer_);
        var chipListContainer = this.element.ownerDocument.createElement("div");
        chipListContainer.classList.add("i-amphtml-story-dev-tools-device-chips-container");
        this.element.appendChild(chipListContainer);
        var chipList = this.element.ownerDocument.createElement("span");
        chipList.classList.add("i-amphtml-story-dev-tools-device-chips");
        chipListContainer.appendChild(chipList);
        chipListContainer.appendChild(this.buildAddDeviceButton_());
        chipListContainer.appendChild(this.buildHelpButton_());
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this2 = this;
        parseDevices(this.element.getAttribute("data-devices") || DEFAULT_DEVICES).forEach(function(device) {
          _this2.addDevice_(device.name);
        });
        this.repositionDevices_();
        this.element.addEventListener("click", function(e) {
          return _this2.handleTap_(e.target);
        });
        observeContentSize(this.element, this.onResize_);
      }
    }, {
      key: "buildAddDeviceButton_",
      value: function buildAddDeviceButton_() {
        var addDeviceButton = buildDeviceChipTemplate(this.element);
        addDeviceButton.classList.add("i-amphtml-story-dev-tools-add-device");
        addDeviceButton.classList.add("i-amphtml-story-dev-tools-button");
        addDeviceButton.setAttribute("data-action", PREVIEW_ACTIONS.SHOW_ADD_DEVICE_DIALIG);
        addDeviceButton.querySelector(".i-amphtml-story-dev-tools-device-chip-name").textContent = "ADD DEVICE";
        return addDeviceButton;
      }
    }, {
      key: "buildHelpButton_",
      value: function buildHelpButton_() {
        var addHelpButton = buildHelpButtonTemplate(this.element);
        addHelpButton.setAttribute("data-action", PREVIEW_ACTIONS.SHOW_HELP_DIALOG);
        return addHelpButton;
      }
    }, {
      key: "buildDeviceLayout_",
      value: function buildDeviceLayout_(device) {
        var deviceLayout = buildDeviceTemplate(this.element);
        device.details.forEach(function(detail) {
          return deviceLayout.setAttribute(detail, "");
        });
        var devicePlayer = deviceLayout.querySelector("amp-story-player");
        devicePlayer.setAttribute("width", device.width);
        devicePlayer.setAttribute("height", device.height);
        var storyA = devicePlayer.querySelector("a");
        storyA.textContent = "Story 1";
        storyA.href = this.storyUrl_;
        setStyles(devicePlayer, {
          width: device.width + "px",
          height: device.height + "px"
        });
        setStyles(deviceLayout.querySelector(".i-amphtml-story-dev-tools-device-screen"), {
          height: device.deviceHeight ? device.deviceHeight + "px" : "fit-content"
        });
        device.player = new AmpStoryPlayer(this.win, devicePlayer);
        return deviceLayout;
      }
    }, {
      key: "handleTap_",
      value: function handleTap_(targetElement) {
        var actionElement = closest(targetElement, function(el) {
          return el.hasAttribute("data-action");
        }, this.element);
        if (!actionElement || actionElement.hasAttribute("disabled")) {
          return;
        }
        switch (actionElement.getAttribute("data-action")) {
          case PREVIEW_ACTIONS.SHOW_HELP_DIALOG:
            this.showHelpDialog_();
            break;
          case PREVIEW_ACTIONS.SHOW_ADD_DEVICE_DIALIG:
            this.showAddDeviceDialog_();
            break;
          case PREVIEW_ACTIONS.CLOSE_DIALOG:
            this.hideCurrentDialog_();
            break;
          case PREVIEW_ACTIONS.REMOVE_DEVICE:
          case PREVIEW_ACTIONS.TOGGLE_DEVICE_CHIP:
            this.onDeviceChipToggled_(actionElement);
            break;
        }
      }
    }, {
      key: "addDevice_",
      value: function addDevice_(deviceName) {
        var _this3 = this;
        var deviceSpecs = ALL_DEVICES.find(function(d) {
          return d.name === deviceName;
        });
        if (!deviceSpecs) {
          return;
        }
        var deviceLayout = this.buildDeviceLayout_(deviceSpecs, this.storyUrl_);
        deviceSpecs.element = deviceLayout;
        deviceSpecs.chip = this.buildDeviceChip_(deviceSpecs.name);
        this.mutateElement(function() {
          _this3.devicesContainer_.appendChild(deviceLayout);
          _this3.element.querySelector(".i-amphtml-story-dev-tools-device-chips").appendChild(deviceSpecs.chip);
        }).then(function() {
          deviceSpecs.player.getElement().addEventListener("storyNavigation", function(event) {
            return _this3.onPlayerNavigation_(event, deviceSpecs);
          });
          deviceSpecs.player.load();
        });
        this.expectedNavigationEvents_[deviceSpecs.name] = [];
        this.devices_.push(deviceSpecs);
        this.updateDevicesInHash_();
      }
    }, {
      key: "onPlayerNavigation_",
      value: function onPlayerNavigation_(event, deviceSpecs) {
        var _this4 = this;
        var pageId = event.detail.pageId;
        var pageIndexInExpectedList = this.expectedNavigationEvents_[deviceSpecs.name].lastIndexOf(pageId);
        if (pageIndexInExpectedList > -1) {
          this.expectedNavigationEvents_[deviceSpecs.name].splice(0, pageIndexInExpectedList + 1);
          return;
        }
        this.devices_.forEach(function(d) {
          if (d != deviceSpecs) {
            d.player.show(null, event.detail.pageId);
            _this4.expectedNavigationEvents_[d.name].push(pageId);
          }
        });
      }
    }, {
      key: "removeDevice_",
      value: function removeDevice_(deviceName) {
        var device = this.devices_.find(function(d) {
          return d.name === deviceName;
        });
        if (device) {
          this.mutateElement(function() {
            device.chip.remove();
            device.element.remove();
          });
          this.devices_ = this.devices_.filter(function(d) {
            return d != device;
          });
          delete this.expectedNavigationEvents_[device.name];
          this.updateDevicesInHash_();
          return true;
        }
        return false;
      }
    }, {
      key: "buildDeviceChip_",
      value: function buildDeviceChip_(deviceName) {
        var deviceChip = buildDeviceChipTemplate(this.element);
        deviceChip.querySelector(".i-amphtml-story-dev-tools-device-chip-name").textContent = deviceName;
        deviceChip.setAttribute("data-action", PREVIEW_ACTIONS.REMOVE_DEVICE);
        deviceChip.setAttribute("data-device", deviceName);
        return deviceChip;
      }
    }, {
      key: "onDeviceChipToggled_",
      value: function onDeviceChipToggled_(chipElement) {
        var _this5 = this;
        var deviceName = chipElement.getAttribute("data-device");
        if (this.removeDevice_(deviceName)) {
          this.mutateElement(function() {
            chipElement.setAttribute("inactive", "");
            _this5.toggleDeviceChipsWithSpaceAvailable_();
          });
        } else {
          this.mutateElement(function() {
            chipElement.removeAttribute("inactive");
            _this5.toggleDeviceChipsWithSpaceAvailable_();
          });
          this.addDevice_(deviceName);
        }
        this.repositionDevices_();
      }
    }, {
      key: "updateDevicesInHash_",
      value: function updateDevicesInHash_() {
        var devicesStringRepresentation = this.devices_.map(function(device) {
          return simplifyDeviceName(device.name);
        }).join(";");
        this.element.setAttribute("data-devices", devicesStringRepresentation);
        updateHash({
          "devices": devicesStringRepresentation != DEFAULT_DEVICES ? devicesStringRepresentation : null
        }, this.win);
      }
    }, {
      key: "repositionDevices_",
      value: function repositionDevices_() {
        var _this6 = this;
        var _this$element$querySe = this.element.querySelector(".i-amphtml-story-dev-tools-devices-container"), height = _this$element$querySe.offsetHeight, width = _this$element$querySe.offsetWidth;
        var sumDeviceWidths = 0;
        var maxDeviceHeights = 0;
        this.devices_.forEach(function(deviceSpecs) {
          sumDeviceWidths += deviceSpecs.width;
          maxDeviceHeights = Math.max(maxDeviceHeights, deviceSpecs.deviceHeight || deviceSpecs.height + 100);
        });
        var scale = Math.min(width / sumDeviceWidths * 0.9, height / maxDeviceHeights * 0.8);
        var paddingSize = (width - sumDeviceWidths * scale) / (this.devices_.length + 1);
        var cumWidthSum = paddingSize;
        this.mutateElement(function() {
          _this6.devices_.forEach(function(deviceSpecs) {
            var scaleWidthChange = deviceSpecs.width * (1 - scale) * 0.5 + 10;
            setStyles(deviceSpecs.element, {
              "transform": "perspective(100px) translate3d(" + (cumWidthSum - scaleWidthChange) / scale + "px, 0px, " + 100 * (scale - 1) / scale + "px)"
            });
            cumWidthSum += deviceSpecs.width * scale + paddingSize;
          });
        });
      }
    }, {
      key: "onResize_",
      value: function onResize_() {
        this.repositionDevices_();
      }
    }, {
      key: "showAddDeviceDialog_",
      value: function showAddDeviceDialog_() {
        var _this7 = this;
        var dialog = buildAddDeviceDialogTemplate(this.element);
        var sections = ["mobile", "tablet", "desktop"].reduce(function(obj, section) {
          obj[section] = dialog.querySelector(".i-amphtml-story-dev-tools-device-dialog-" + escapeCssSelectorIdent(section));
          return obj;
        }, {});
        var currentDeviceSpaces = this.getCurrentSpacesSum_();
        ALL_DEVICES.forEach(function(device) {
          var chip = _this7.buildDeviceChip_(device.name);
          chip.setAttribute("data-action", PREVIEW_ACTIONS.TOGGLE_DEVICE_CHIP);
          chip.setAttribute("data-spaces", device.deviceSpaces);
          if (!_this7.devices_.find(function(d) {
            return d.name == device.name;
          })) {
            chip.setAttribute("inactive", "");
            if (currentDeviceSpaces + device.deviceSpaces > MAX_DEVICE_SPACES) {
              chip.setAttribute("disabled", "");
            }
          }
          if (device.width / device.height > 1) {
            sections["desktop"].appendChild(chip);
          } else if (device.width / device.height > 0.75) {
            sections["tablet"].appendChild(chip);
          } else {
            sections["mobile"].appendChild(chip);
          }
        });
        this.mutateElement(function() {
          return _this7.element.appendChild(dialog);
        });
        addAttributeAfterTimeout(this, dialog, 1, "active");
        this.currentDialog_ = dialog;
      }
    }, {
      key: "showHelpDialog_",
      value: function showHelpDialog_() {
        var _this8 = this;
        var dialog = buildHelpDialogTemplate(this.element);
        dialog.querySelector(".i-amphtml-story-dev-tools-help-search-preview-link").href += this.storyUrl_;
        dialog.querySelector(".i-amphtml-story-dev-tools-help-page-experience-link").href = "https://amp.dev/page-experience/?url=" + encodeURIComponent(this.storyUrl_);
        this.mutateElement(function() {
          return _this8.element.appendChild(dialog);
        });
        addAttributeAfterTimeout(this, dialog, 1, "active");
        this.currentDialog_ = dialog;
      }
    }, {
      key: "hideCurrentDialog_",
      value: function hideCurrentDialog_() {
        if (this.currentDialog_) {
          this.currentDialog_.removeAttribute("active");
          removeAfterTimeout(this, this.currentDialog_, 200);
          this.currentDialog_ = null;
        }
      }
    }, {
      key: "getCurrentSpacesSum_",
      value: function getCurrentSpacesSum_() {
        return this.devices_.reduce(function(prev, device) {
          return prev + device.deviceSpaces;
        }, 0);
      }
    }, {
      key: "toggleDeviceChipsWithSpaceAvailable_",
      value: function toggleDeviceChipsWithSpaceAvailable_() {
        var allChips = this.currentDialog_.querySelectorAll(".i-amphtml-story-dev-tools-device-chip");
        var currentDeviceSpaces = this.getCurrentSpacesSum_();
        allChips.forEach(function(chipEl) {
          var spaces = parseInt(chipEl.getAttribute("data-spaces"), 10);
          var isEnabled = currentDeviceSpaces + spaces <= MAX_DEVICE_SPACES | !chipEl.hasAttribute("inactive");
          chipEl.toggleAttribute("disabled", !isEnabled);
        });
      }
    }]);
    return AmpStoryDevToolsTabPreview2;
  }(AMP.BaseElement);

  // build/amp-story-dev-tools-0.1.css.js
  var CSS2 = `amp-story-dev-tools-tab-debug{overflow-y:auto!important;padding:var(--i-amphtml-story-dev-tools-vertical-spacing) 10%!important}amp-story-dev-tools-tab-debug::-webkit-scrollbar{width:8px!important}amp-story-dev-tools-tab-debug::-webkit-scrollbar-thumb{background-color:var(--i-amphtml-story-dev-tools-white-transparent-1)!important;border-radius:3px!important}amp-story-dev-tools-tab-debug::-webkit-scrollbar-thumb:hover{background-color:var(--i-amphtml-story-dev-tools-white-transparent-2)!important}.i-amphtml-story-dev-tools-log-status-title{font-size:16px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;line-height:16px!important;margin-bottom:10px!important}.i-amphtml-story-dev-tools-log-status-title .i-amphtml-story-dev-tools-log-status-icon{margin-inline-end:10px!important}.i-amphtml-story-dev-tools-log-message{margin-bottom:16px!important;background:var(--i-amphtml-story-dev-tools-white-transparent-1)!important;color:#fff!important;position:relative!important;padding:16px!important;border-radius:16px!important}.i-amphtml-story-dev-tools-log-type{margin:0!important;font-weight:700!important;font-size:16px!important}.i-amphtml-story-dev-tools-log-position{font-family:monospace!important}.i-amphtml-story-dev-tools-log-spec{color:#fff!important;text-decoration:none!important;position:absolute!important;right:10px!important;top:10px!important;border-radius:20px!important;border:2px solid var(--i-amphtml-story-dev-tools-white-transparent-1)!important;padding:5px 10px!important;font-size:12px!important}.i-amphtml-story-dev-tools-log-spec:hover{background:var(--i-amphtml-story-dev-tools-white-transparent-1)!important}.i-amphtml-story-dev-tools-log-code{margin-bottom:0px!important;line-height:24px!important}.i-amphtml-story-dev-tools-log-code-line{text-overflow:ellipsis!important;overflow-x:hidden!important;display:block!important}.i-amphtml-story-dev-tools-log-code-line:nth-child(2){color:var(--i-amphtml-story-dev-tools-error-color)!important}.i-amphtml-story-dev-tools-log-status-icon{width:20px!important;height:20px!important;background-size:contain!important;display:inherit!important}.i-amphtml-story-dev-tools-log-status-icon-passed{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM8 15l-4-4 1.4-1.4L8 12.2l6.6-6.6L16 7l-8 8z' fill='%232DE561'/%3E%3C/svg%3E")!important}.i-amphtml-story-dev-tools-log-status-icon-failed{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM11 10c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v4zm0 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z' fill='%23FF5252'/%3E%3C/svg%3E")!important}.i-amphtml-story-dev-tools-tab-selector .i-amphtml-story-dev-tools-log-status-icon{width:16px!important;height:16px!important;margin-inline-start:5px!important}.i-amphtml-story-dev-tools-tab-selector .i-amphtml-story-dev-tools-log-status-number-failed{font-size:10px!important;background:var(--i-amphtml-story-dev-tools-error-color)!important;color:#000!important;border-radius:10px!important;height:16px!important;width:16px!important;display:inherit!important;margin-inline-start:5px!important;font-weight:700!important;display:initial!important;padding:1px!important}.i-amphtml-story-dev-tools-debug-success-image{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='295' height='308' fill='none'%3E%3Crect width='233.8' height='165.73' x='34' y='92.5' fill='%23161725' rx='6'/%3E%3Cpath fill='%23fff' d='M262.07 261.03H39.67a9 9 0 0 1-8.98-8.99V96.84a9 9 0 0 1 8.99-8.98h222.4a9 9 0 0 1 8.98 8.99v155.18c.02 4.96-4.02 9-8.99 9zM39.67 91.16A5.68 5.68 0 0 0 34 96.85v155.18a5.69 5.69 0 0 0 5.68 5.68h222.4a5.69 5.69 0 0 0 5.68-5.68V96.85a5.69 5.69 0 0 0-5.69-5.69H39.67z'/%3E%3Cpath fill='%23fff' d='M269.42 107H32.33V96.85a7.34 7.34 0 0 1 7.35-7.35h222.4a7.34 7.34 0 0 1 7.34 7.35V107z'/%3E%3Cpath fill='%23161725' d='M46.83 97.51a3.3 3.3 0 1 1-6.6.01 3.3 3.3 0 0 1 6.6 0zm9.91 0a3.3 3.3 0 1 1-6.6.01 3.3 3.3 0 0 1 6.6 0zm9.9 0a3.3 3.3 0 1 1-6.6.01 3.3 3.3 0 0 1 6.6 0z'/%3E%3Cpath fill='%23fff' d='M0 228.89c3.97-1.15 7.5-3.4 10.44-6.68a21.51 21.51 0 0 0 3.18-4.43l7.56 3.66c-.22.47-5.79 11.73-18.85 15.5L0 228.9z'/%3E%3Cg filter='url(%23a)'%3E%3Cpath fill='%23FCF75A' d='M149.13 250.34c1.15 3.97 3.4 7.49 6.68 10.44a21.52 21.52 0 0 0 4.43 3.18l-3.66 7.56c-.48-.22-11.73-5.8-15.5-18.86l8.05-2.32z'/%3E%3C/g%3E%3Cg filter='url(%23b)'%3E%3Cpath fill='%23FCF75A' d='M177.87 72.46a22.36 22.36 0 0 0 8.17 9.32 21.4 21.4 0 0 0 4.85 2.47l-2.48 8.01c-.5-.15-12.46-3.95-18.16-16.29l7.62-3.51z'/%3E%3C/g%3E%3Cpath fill='%23FCF75A' d='M216.8 119.93c1.65 1.72 2.81 3.4 3.53 5.13a9.9 9.9 0 0 1 .59 6.35c-1.64 6.52-9.68 8.91-10.59 9.16l-2.23-8.1h-.02c1.77-.52 4.43-1.94 4.7-3.13.15-.62-.46-2.14-2.72-4.3l5.79-6.07.96.96z'/%3E%3Cpath fill='%239F9AEE' d='M47.88 268.2c5.34.43 10-1.54 13.49-5.71 2.43-2.92 3.41-5.92 3.52-6.26l-7.7-2.4v-.03c0 .02-.65 1.94-2.17 3.69a7.25 7.25 0 0 1-6.45 2.66l-.69 8.04zm36.1-120.92c.08-.22.63-1.58 4.1-5.85 1.9-2.36 3.73-4.4 3.75-4.41l-3.5-3.14c-.07.09-1.9 2.13-3.88 4.58-3.77 4.64-4.62 6.43-4.93 7.38l4.46 1.44z'/%3E%3Cpath fill='%2379B3FF' d='M281.1 169.84c-.42 0-2.93-.14-11.81-3.44-4.89-1.8-9.22-3.66-9.26-3.69l-3.18 7.43c.18.08 4.53 1.93 9.6 3.82 9.65 3.57 13.03 3.96 14.74 3.95l-.1-8.07z'/%3E%3Cpath fill='%234E5EAF' d='M123.9 289.63c-.27.3-2.07 2.06-10.51 6.35-4.63 2.36-8.94 4.3-8.98 4.31l3.32 7.38c.19-.09 4.5-2.01 9.31-4.48 9.17-4.67 11.75-6.9 12.9-8.17l-6.03-5.4zm57.62-47.93c-.2-.04-1.41-.33-5.42-2.65a97.79 97.79 0 0 1-4.16-2.52l-2.26 3.12c.08.05 2.02 1.3 4.31 2.61 4.36 2.52 5.97 3 6.8 3.15l.73-3.72z'/%3E%3Cg filter='url(%23c)'%3E%3Cpath fill='%2379B3FF' d='M40.56 142.84c-.25.33-1.95 2.16-10.14 6.95-4.5 2.62-8.68 4.8-8.71 4.82l3.72 7.18c.19-.1 4.37-2.27 9.04-5 8.9-5.17 11.35-7.56 12.42-8.89l-6.33-5.06z'/%3E%3C/g%3E%3Cpath fill='%23FCF75A' d='M294.97 287.33c0-5.16-2.44-9.36-5.45-9.36-.8 0-13.27 4.82-13.27 4.82l1.38 18.54 12.9-4.82c2.48-.77 4.44-4.59 4.44-9.18z'/%3E%3Cpath fill='%234E5EAF' d='M258 279.02a8.02 8.02 0 0 1 5.35-3.2c-11.7-7.93-28.4-19.3-35.62-24.65a4.25 4.25 0 0 0-5.92.86 4.25 4.25 0 0 0 .86 5.92c6.4 4.73 21.54 17.25 33.9 27.52-.47-2.2 0-4.54 1.44-6.45z'/%3E%3Cpath fill='%23FCF75A' d='M275.1 291.63c1.38-1.86 3.82-5.4.76-7.35 0 0-5.3-3.54-12.5-8.46a8.13 8.13 0 0 0-6.78 9.65l18.38 15.38c3.05 2.01-1.24-7.35.14-9.22z'/%3E%3Cpath fill='%23AE9D00' d='M276.82 301.48c3 0 5.44-4.2 5.44-9.37 0-5.17-2.44-9.36-5.44-9.36-3 0-5.44 4.19-5.44 9.36 0 5.17 2.43 9.37 5.44 9.37z'/%3E%3Cpath fill='%23FCF75A' d='M279.88 291.35c0-3.25-1.3-5.69-3.01-5.69-1.72 0-3.01 2.44-3.01 5.69 0 2.1.57 3.96 1.48 4.96l.96-.9c-.67-.72-1.15-2.34-1.15-4.06 0-1.25.24-2.44.62-3.3.33-.67.72-1.1 1.1-1.1.38 0 .76.43 1.1 1.1.38.86.62 2.06.62 3.3 0 3.96-1.39 8.02-3.78 9.4.43.3.91.53 1.34.63 2.25-1.82 3.73-5.54 3.73-10.03z'/%3E%3Cg filter='url(%23d)'%3E%3Cpath fill='%234E5EAF' d='M139.32 73.67c2.15 5.05-7.08 13.8-20.57 19.46-13.5 5.72-26.16 6.22-28.27 1.16C88.38 89.24 82.87 8 82.87 8s54.34 60.62 56.45 65.67z'/%3E%3Cpath fill='%239F9AEE' d='M117.55 58.14a52.33 52.33 0 0 1-30.71 3.28c.46 5.42.91 10.6 1.37 15.2 11.17 3.68 24.17 3.39 36.42-1.79 4.01-1.7 7.7-3.8 11.05-6.25a572.66 572.66 0 0 0-11.55-13.75 48.89 48.89 0 0 1-6.58 3.31zm-17.51-30.8a51.1 51.1 0 0 1-15.73 1.49c.38 4.93.79 10.43 1.2 16.06a52.16 52.16 0 0 0 27.57-2.73c-4.39-5.05-8.9-10.18-13.04-14.82z'/%3E%3C/g%3E%3Cpath fill='%23fff' d='M151.5 159.58a22.93 22.93 0 1 0 .02 45.85 22.93 22.93 0 0 0-.02-45.85zm-4.58 34.38-9.17-9.17 3.2-3.2 5.97 5.95 15.12-15.12 3.21 3.2-18.33 18.34z'/%3E%3Cdefs%3E%3Cfilter id='a' width='51.16' height='53.19' x='125.07' y='240.34' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='6'/%3E%3CfeGaussianBlur stdDeviation='8'/%3E%3CfeColorMatrix values='0 0 0 0 0.0375 0 0 0 0 0.045 0 0 0 0 0.1125 0 0 0 0.56 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='b' width='54.84' height='57.72' x='153.89' y='59.99' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='6'/%3E%3CfeGaussianBlur stdDeviation='8'/%3E%3CfeColorMatrix values='0 0 0 0 0.0375 0 0 0 0 0.045 0 0 0 0 0.1125 0 0 0 0.56 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='c' width='60.08' height='61.82' x='3.62' y='125.72' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='8'/%3E%3CfeColorMatrix values='0 0 0 0 0.0375 0 0 0 0 0.045 0 0 0 0 0.1125 0 0 0 1 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='d' width='80.77' height='113.78' x='66.87' y='0' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dx='-4' dy='4'/%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")!important;width:295px!important;height:308px!important}.i-amphtml-story-dev-tools-debug-success{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-direction:column!important;flex-direction:column!important;height:100%!important;position:relative!important}.i-amphtml-story-dev-tools-debug-success .i-amphtml-story-dev-tools-log-status-title{position:absolute!important;left:0!important;top:0!important}.i-amphtml-story-dev-tools-debug-success-message{font-size:28px!important;font-weight:600!important;text-align:center!important;-webkit-font-smoothing:antialiased!important}amp-story-dev-tools-tab-preview{--i-amphtml-story-dev-tools-device-shadow:0px 11.0046px 27.5114px rgba(0,0,0,0.34),inset 0px 2.20091px 3.30137px rgba(44,46,52,0.6)!important;padding:var(--i-amphtml-story-dev-tools-vertical-spacing) 10%!important;padding-bottom:calc(var(--i-amphtml-story-dev-tools-vertical-spacing) + 64px)!important}.i-amphtml-story-dev-tools-devices-container{width:100%!important;height:100%!important;position:relative}.i-amphtml-story-dev-tools-device{background:var(--i-amphtml-story-dev-tools-gray-1)!important;border-radius:40px!important;box-shadow:var(--i-amphtml-story-dev-tools-device-shadow)!important;overflow:hidden!important;position:absolute!important;margin:auto!important;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important;top:0!important;bottom:var(--i-amphtml-story-dev-tools-vertical-spacing)!important;padding:10px 8px!important;transition:transform var(--i-amphtml-story-dev-tools-material-easing-standard) 0.15s!important;animation:i-amphtml-story-dev-tools-fade-in 0.3s var(--i-amphtml-story-dev-tools-material-easing-decelerated)!important}@keyframes i-amphtml-story-dev-tools-fade-in{0%{opacity:0}50%{opacity:0}to{opacity:1}}.i-amphtml-story-dev-tools-device-screen{border-radius:30px!important;background:var(--i-amphtml-story-dev-tools-gray-2)!important;overflow:hidden!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important}amp-story-player a{display:none!important}.i-amphtml-story-dev-tools-device-chips-container{position:absolute!important;bottom:var(--i-amphtml-story-dev-tools-vertical-spacing)!important;width:80%!important;text-align:center!important}.i-amphtml-story-dev-tools-device-chip{--i-amphtml-story-dev-tools-device-chip-background:var(--i-amphtml-story-dev-tools-gray-3)!important;--i-amphtml-story-dev-tools-device-chip-background-hover:var(--i-amphtml-story-dev-tools-gray-4)!important;--i-amphtml-story-dev-tools-device-chip-icon-background:#000!important;color:#fff!important;border-radius:16px!important;background:var(--i-amphtml-story-dev-tools-device-chip-background)!important;border:1px solid var(--i-amphtml-story-dev-tools-device-chip-background)!important;height:32px!important;font-size:13px!important;display:-ms-inline-flexbox!important;display:inline-flex!important;-ms-flex-align:center!important;align-items:center!important;padding-inline-start:10px!important;padding-inline-end:6px!important;margin:0 5px!important;white-space:nowrap!important;cursor:pointer!important;outline:none!important}.i-amphtml-story-dev-tools-device-chip:focus,.i-amphtml-story-dev-tools-device-chip:hover{background:var(--i-amphtml-story-dev-tools-device-chip-background-hover)!important}.i-amphtml-story-dev-tools-device-chip svg{background:var(--i-amphtml-story-dev-tools-device-chip-icon-background)!important;border-radius:50%!important;padding:2px!important;margin-inline-start:10px!important;transition:transform 0.2s var(--i-amphtml-story-dev-tools-material-easing-standard)!important}.i-amphtml-story-dev-tools-device-chip[inactive]{--i-amphtml-story-dev-tools-device-chip-background:transparent!important;--i-amphtml-story-dev-tools-device-chip-background-hover:var(--i-amphtml-story-dev-tools-gray-1)!important;--i-amphtml-story-dev-tools-device-chip-icon-background:var(--i-amphtml-story-dev-tools-white-transparent-1)!important;border:1px solid var(--i-amphtml-story-dev-tools-device-chip-icon-background)!important}.i-amphtml-story-dev-tools-device-chip[disabled]{cursor:initial!important;--i-amphtml-story-dev-tools-device-chip-background-hover:var(--i-amphtml-story-dev-tools-device-chip-background)!important;opacity:0.2!important}.i-amphtml-story-dev-tools-device-chip[inactive] svg{transform:rotate(90deg)!important}.i-amphtml-story-dev-tools-device-chip:not([inactive]):not(.i-amphtml-story-dev-tools-add-device) .i-amphtml-story-dev-tools-device-chip-add-stick{fill:transparent!important}.i-amphtml-story-dev-tools-device-chip.i-amphtml-story-dev-tools-add-device{background:var(--i-amphtml-story-dev-tools-accent)!important;color:#000!important}.i-amphtml-story-dev-tools-device-chip.i-amphtml-story-dev-tools-add-device svg{fill:var(--i-amphtml-story-dev-tools-accent)!important;background:#000!important}.i-amphtml-story-dev-tools-device-chip.i-amphtml-story-dev-tools-add-device:focus,.i-amphtml-story-dev-tools-device-chip.i-amphtml-story-dev-tools-add-device:hover{background:var(--i-amphtml-story-dev-tools-accent-light)!important}.i-amphtml-story-dev-tools-device-dialog-bg{position:fixed!important;left:0!important;top:0!important;height:100%!important;width:100%!important;background:transparent!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:1!important;transition:background 0.2s var(--i-amphtml-story-dev-tools-material-easing-standard)!important}.i-amphtml-story-dev-tools-device-dialog-container{background:#000!important;width:min(650px,90%)!important;border-radius:30px!important;padding:40px!important;position:relative!important;transition:transform 0.2s var(--i-amphtml-story-dev-tools-material-easing-accelerated),opacity 0.2s var(--i-amphtml-story-dev-tools-material-easing-accelerated)!important;transform:translateY(5vh)!important;opacity:0!important}.i-amphtml-story-dev-tools-device-dialog-bg[active]{background:var(--i-amphtml-story-dev-tools-gray-transparent-1)!important}.i-amphtml-story-dev-tools-device-dialog-bg[active] .i-amphtml-story-dev-tools-device-dialog-container{transform:translateY(0)!important;opacity:1!important;transition:transform 0.2s var(--i-amphtml-story-dev-tools-material-easing-decelerated),opacity 0.2s var(--i-amphtml-story-dev-tools-material-easing-decelerated)!important}.i-amphtml-story-dev-tools-device-dialog-container h1{font-size:12px!important;text-transform:uppercase!important;opacity:.4!important;letter-spacing:1px!important;font-weight:400!important;margin:0px 0px 5px!important}.i-amphtml-story-dev-tools-device-dialog-container h1:not(:first-child){margin-top:25px!important}.i-amphtml-story-dev-tools-device-dialog-container.i-amphtml-story-dev-tools-device-dialog-add-devices h1{margin-inline-start:15px!important}.i-amphtml-story-dev-tools-device-dialog-link{color:var(--i-amphtml-story-dev-tools-white-transparent-4)!important;text-decoration:none!important;display:block!important;padding:10px 0!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.i-amphtml-story-dev-tools-device-dialog-link:hover{color:#fff!important}.i-amphtml-story-dev-tools-device-dialog-link:not(:last-child){border-bottom:1px solid var(--i-amphtml-story-dev-tools-white-transparent-1)!important}.i-amphtml-story-dev-tools-device-dialog-arrow{background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath d='m16 10.667-.94.94 3.72 3.726h-8.114v1.334h8.114l-3.72 3.726.94.94L21.333 16 16 10.667z' fill='%23fff'/%3E%3C/svg%3E")!important;width:32px!important;height:32px!important;opacity:0.6!important}.i-amphtml-story-dev-tools-device-dialog-link:hover .i-amphtml-story-dev-tools-device-dialog-arrow{opacity:1!important}.i-amphtml-story-dev-tools-device-dialog-container .i-amphtml-story-dev-tools-device-chip{margin:4px!important}.i-amphtml-story-dev-tools-device-dialog-close{cursor:pointer!important;width:40px!important;height:40px!important;position:absolute!important;top:6px!important;right:6px!important;opacity:.6!important;background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff' width='18' height='18'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E")!important;background-repeat:no-repeat!important;background-position:50%!important;border:none!important;outline:none!important}.i-amphtml-story-dev-tools-device-dialog-close:focus,.i-amphtml-story-dev-tools-device-dialog-close:hover{opacity:1!important}.i-amphtml-story-dev-tools-button-help{position:absolute!important;right:0!important}.i-amphtml-story-dev-tools-button-icon{background:var(--i-amphtml-story-dev-tools-accent)!important;width:20px!important;height:20px!important;margin-inline-start:10px!important;position:relative!important;border-radius:50%!important}.i-amphtml-story-dev-tools-button-icon:after{content:""!important;background-repeat:no-repeat!important;background-position:50%!important;width:100%!important;height:100%!important;position:absolute!important;left:0!important}.i-amphtml-story-dev-tools-button-help-icon:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 8 14'%3E%3Cpath d='M2.974 9.561v-.778c0-.632.128-1.163.383-1.593.256-.443.697-.936 1.324-1.48.384-.341.69-.658.92-.948.231-.304.346-.677.346-1.12 0-.48-.172-.885-.518-1.214-.332-.329-.806-.493-1.42-.493-.613 0-1.093.183-1.438.55a3.05 3.05 0 0 0-.73 1.157L0 2.883c.14-.43.377-.866.71-1.308A3.864 3.864 0 0 1 2.014.455C2.564.152 3.223 0 3.99 0c.793 0 1.49.158 2.092.474.613.316 1.087.746 1.42 1.29.332.531.498 1.138.498 1.821 0 .506-.096.955-.288 1.347-.179.392-.409.74-.69 1.044-.269.303-.531.575-.787.815-.422.38-.723.728-.902 1.044-.179.316-.268.708-.268 1.176v.55H2.974zM4.01 14c-.41 0-.755-.14-1.036-.417a1.396 1.396 0 0 1-.403-1.006c0-.392.134-.727.403-1.005a1.417 1.417 0 0 1 1.036-.417c.396 0 .729.139.997.417.282.278.422.613.422 1.005 0 .392-.14.727-.422 1.006A1.331 1.331 0 0 1 4.01 14z'/%3E%3C/svg%3E")!important}.i-amphtml-story-dev-tools-device-dialog-help-tips{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:row!important;flex-direction:row!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-dev-tools-device-dialog-help-tips p{font-size:14px!important}.i-amphtml-story-dev-tools-device-dialog-help-tips .i-amphtml-story-dev-tools-device-dialog-help-hint{color:var(--i-amphtml-story-dev-tools-white-transparent-3)!important;border:1px solid var(--i-amphtml-story-dev-tools-white-transparent-1)!important;font-size:12px!important;padding:10px 20px!important;border-radius:20px!important;margin-inline-start:20px!important}.i-amphtml-story-dev-tools-device-dialog-help-tips .i-amphtml-story-dev-tools-device-dialog-help-hint b{color:var(--i-amphtml-story-dev-tools-accent-light)!important}.i-amphtml-story-dev-tools-device[native] .i-amphtml-story-dev-tools-device-screen{background:#000!important}.i-amphtml-story-dev-tools-device[oneplus7pro]{padding:12px 5px!important}.i-amphtml-story-dev-tools-device[oneplus5t]{padding-top:45px!important;padding-bottom:45px!important}.i-amphtml-story-dev-tools-device[pixel2]{padding-top:82px!important;padding-bottom:82px!important}.i-amphtml-story-dev-tools-device[pixel3]{padding-top:50px!important;padding-bottom:50px!important}.i-amphtml-story-dev-tools-device[desktop]{border-radius:10px!important}.i-amphtml-story-dev-tools-device[desktop] .i-amphtml-story-dev-tools-device-screen,.i-amphtml-story-dev-tools-device[iphone8] .i-amphtml-story-dev-tools-device-screen,.i-amphtml-story-dev-tools-device[oneplus5t] .i-amphtml-story-dev-tools-device-screen,.i-amphtml-story-dev-tools-device[pixel2] .i-amphtml-story-dev-tools-device-screen,.i-amphtml-story-dev-tools-device[pixel3] .i-amphtml-story-dev-tools-device-screen{border-radius:5px!important}.i-amphtml-story-dev-tools-device[pixel2]:after,.i-amphtml-story-dev-tools-device[pixel2]:before{content:"";width:157px;height:8px;border-radius:4px;position:absolute;left:0;right:0;margin:auto;top:40px;background:var(--i-amphtml-story-dev-tools-gray-2)!important}.i-amphtml-story-dev-tools-device[pixel2]:before{top:auto;bottom:40px}.i-amphtml-story-dev-tools-device[iphone11],.i-amphtml-story-dev-tools-device[iphone11pro]{border-radius:59px!important;padding:12px!important}.i-amphtml-story-dev-tools-device[iphone8]{padding:90px 12px!important}.i-amphtml-story-dev-tools-device[iphone11] .i-amphtml-story-dev-tools-device-screen,.i-amphtml-story-dev-tools-device[iphone11pro] .i-amphtml-story-dev-tools-device-screen{border-radius:47px!important}.i-amphtml-story-dev-tools-device[iphone11]:after,.i-amphtml-story-dev-tools-device[iphone11pro]:after{content:"";width:50%;height:30px;border-radius:0 0 22px 22px;position:absolute;left:0;right:0;margin:auto;top:10px;background:var(--i-amphtml-story-dev-tools-gray-1)!important}.i-amphtml-story-dev-tools-device[iphone8]:after{content:"";width:54px;height:54px;border-radius:30px;position:absolute;bottom:18px;border:2px solid var(--i-amphtml-story-dev-tools-gray-3)!important;left:168px}.i-amphtml-story-dev-tools-device-statusbar{-ms-flex:1!important;flex:1!important;width:100%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important;-ms-flex-align:center!important;align-items:center!important;padding:0px 20px!important;position:relative!important}.i-amphtml-story-dev-tools-device[desktop] .i-amphtml-story-dev-tools-device-statusbar{background:#000!important}.i-amphtml-story-dev-tools-device[desktop] .i-amphtml-story-dev-tools-device-statusbar:after{content:""!important;width:300px!important;height:24px!important;position:absolute!important;left:20px!important;bottom:0px!important;background:var(--i-amphtml-story-dev-tools-gray-2)!important;border-radius:5px 5px 0 0!important}.i-amphtml-story-dev-tools-device-statusbar-clock,.i-amphtml-story-dev-tools-device-statusbar-icons{opacity:0.21!important}.i-amphtml-story-dev-tools-device[android] .i-amphtml-story-dev-tools-device-statusbar-icons{width:83px!important;height:15px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='16' fill='none'%3E%3Cpath fill='%23fff' d='M56.44 12.2h-1.47V5.07l-2.18.74V4.56l3.46-1.28h.2v8.92zm9.07 0h-5.98v-1.02l2.96-3.23c.43-.47.73-.87.91-1.19.18-.32.28-.64.28-.96 0-.43-.12-.77-.36-1.03s-.56-.39-.96-.39c-.48 0-.85.15-1.12.44-.26.3-.4.7-.4 1.2h-1.48c0-.54.12-1.02.37-1.46.25-.43.6-.77 1.05-1 .46-.25 1-.37 1.59-.37.86 0 1.54.22 2.04.65.5.44.75 1.03.75 1.8 0 .44-.13.9-.38 1.4a7.87 7.87 0 0 1-1.23 1.65l-2.17 2.33h4.13v1.18zm2.11-1.56c.28 0 .5.08.65.24a.8.8 0 0 1 .22.58.8.8 0 0 1-.22.58c-.15.15-.37.23-.65.23a.86.86 0 0 1-.62-.23.77.77 0 0 1-.24-.58.8.8 0 0 1 .23-.58.83.83 0 0 1 .63-.24zm0-5.18c.28 0 .5.08.65.23a.8.8 0 0 1 .22.59.8.8 0 0 1-.22.58c-.15.15-.37.23-.65.23a.86.86 0 0 1-.62-.23.77.77 0 0 1-.24-.58.8.8 0 0 1 .23-.59.83.83 0 0 1 .63-.23zm4.05 1.62h.9c.46 0 .82-.12 1.09-.35.26-.24.4-.57.4-1.01 0-.42-.11-.75-.34-.98-.22-.24-.56-.36-1.01-.36-.4 0-.73.12-.98.35-.26.23-.39.53-.39.9h-1.48c0-.46.12-.87.36-1.25.24-.37.58-.66 1.01-.87a3.3 3.3 0 0 1 1.46-.32c.89 0 1.58.23 2.09.67.5.45.76 1.06.76 1.86 0 .4-.13.77-.38 1.13-.26.35-.58.61-.99.8.5.16.86.42 1.11.78.26.36.39.78.39 1.28 0 .8-.28 1.43-.82 1.9-.55.48-1.27.71-2.16.71-.85 0-1.55-.23-2.1-.68a2.25 2.25 0 0 1-.82-1.82h1.49c0 .39.13.7.39.95s.62.37 1.06.37c.46 0 .82-.12 1.09-.37.26-.24.4-.6.4-1.06 0-.47-.15-.83-.42-1.08-.28-.25-.7-.38-1.24-.38h-.87V7.08zm11.18 1.38c0 1.28-.24 2.24-.72 2.9-.47.64-1.2.96-2.18.96-.96 0-1.68-.31-2.17-.94a4.67 4.67 0 0 1-.74-2.82V7.02c0-1.27.23-2.23.71-2.87.48-.64 1.21-.96 2.2-.96.96 0 1.69.31 2.16.94.48.62.73 1.55.74 2.8v1.53zM81.37 6.8c0-.84-.11-1.45-.34-1.83-.23-.4-.6-.59-1.09-.59-.48 0-.84.19-1.07.56-.22.36-.34.94-.36 1.72v2.01c0 .83.12 1.45.35 1.86.23.4.6.6 1.1.6.47 0 .82-.18 1.05-.55.23-.38.35-.97.36-1.77V6.8z'/%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M43.05 2.14v-.77H39.6v.77h-2.2v11.48h7.88V2.14h-2.23zM18 13.34h11.99V1.36L18 13.34zM.8 3.71l8 9.62 8-9.62c-2.23-1.65-5-2.63-8-2.63s-5.77.98-8 2.63z' clip-rule='evenodd'/%3E%3C/svg%3E")!important}.i-amphtml-story-dev-tools-device[desktop] .i-amphtml-story-dev-tools-device-statusbar-icons{width:69px!important;height:26px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='69' height='26' fill='none'%3E%3Cmask id='a' width='26.87' height='26.87' x='42.17' y='.04' fill='%23000' maskUnits='userSpaceOnUse'%3E%3Cpath fill='%23fff' d='M42.17.04h26.87v26.87H42.17z'/%3E%3Cpath d='m49.82 7.24 6.23 6.22 6.24-6.22-6.23 6.23 6.23 6.24-6.24-6.23-6.23 6.23 6.23-6.24-6.23-6.23z'/%3E%3C/mask%3E%3Cpath fill='%23C4C4C4' d='m49.82 7.24 6.23 6.22 6.24-6.22-6.23 6.23 6.23 6.24-6.24-6.23-6.23 6.23 6.23-6.24-6.23-6.23z'/%3E%3Cpath fill='%23fff' d='m49.82 7.24 1.06-1.07-2.12 2.13 1.06-1.06zm6.23 6.22L55 14.52l1.06 1.06 1.06-1.06-1.06-1.06zm6.24-6.22 1.06 1.06-2.12-2.13 1.06 1.07zm-6.23 6.23L55 12.41l-1.06 1.06L55 14.53l1.06-1.06zm6.23 6.24-1.06 1.06 2.12-2.12-1.06 1.06zm-6.24-6.23 1.06-1.06-1.06-1.06L55 12.42l1.06 1.06zm-6.23 6.23-1.06-1.06 2.12 2.12-1.06-1.06zm6.23-6.24 1.06 1.06 1.06-1.06-1.06-1.06-1.06 1.06zm-7.3-5.17L55 14.52l2.12-2.12-6.23-6.23-2.12 2.13zm8.36 6.22 6.24-6.22-2.12-2.13-6.24 6.23 2.12 2.12zm4.12-8.34L55 12.4l2.12 2.12 6.23-6.23-2.12-2.12zM55 14.53l6.23 6.24 2.12-2.12-6.23-6.24L55 14.53zm8.35 4.12-6.24-6.23L55 14.54l6.24 6.23 2.12-2.12zm-8.36-6.23-6.23 6.23 2.12 2.12 6.23-6.23L55 12.42zm-4.11 8.35 6.23-6.24-2.13-2.12-6.22 6.24 2.12 2.12zm6.23-8.36-6.23-6.23-2.12 2.12 6.22 6.23 2.13-2.12z' mask='url(%23a)'/%3E%3Cpath stroke='%23fff' stroke-width='3' d='M25.97 8.62h10.68v9.73H25.97zm-11.88 9.9H.89'/%3E%3C/svg%3E")!important}.i-amphtml-story-dev-tools-device[ios] .i-amphtml-story-dev-tools-device-statusbar-icons{width:66.7px!important;height:12px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='67' height='12' fill='none'%3E%3Crect width='21' height='10.33' x='42.83' y='.5' stroke='%23fff' opacity='.35' rx='2.17'/%3E%3Cpath fill='%23fff' d='M65.33 3.67v4a2.17 2.17 0 0 0 0-4' opacity='.4'/%3E%3Crect width='18' height='7.33' x='44.33' y='2' fill='%23fff' rx='1.33'/%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M29.66 3.28c2.22 0 4.35.85 5.96 2.38a.3.3 0 0 0 .43 0l1.16-1.17a.32.32 0 0 0 0-.46 10.9 10.9 0 0 0-15.09 0 .32.32 0 0 0 0 .46l1.16 1.16a.3.3 0 0 0 .43 0 8.64 8.64 0 0 1 5.95-2.37zm0 3.8c1.22 0 2.4.45 3.3 1.26.12.12.31.12.43 0l1.16-1.17a.32.32 0 0 0 0-.46 7.16 7.16 0 0 0-9.76 0 .32.32 0 0 0 0 .46l1.15 1.17c.12.12.31.12.43 0a4.9 4.9 0 0 1 3.3-1.27zm2.32 2.55c0 .08-.04.17-.1.23l-2 2.01a.31.31 0 0 1-.44 0l-2-2.01a.31.31 0 0 1 .01-.46 3.42 3.42 0 0 1 4.42 0c.07.06.1.14.1.23zM16 1h-1a1 1 0 0 0-1 1v8.67a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-5.67 2.33h1a1 1 0 0 1 1 1v6.34a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4.33a1 1 0 0 1 1-1zM6.67 5.67h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM2 7.67H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z' clip-rule='evenodd'/%3E%3C/svg%3E")!important}.i-amphtml-story-dev-tools-device[ios][iphone11] .i-amphtml-story-dev-tools-device-statusbar-clock,.i-amphtml-story-dev-tools-device[ios][iphone11pro] .i-amphtml-story-dev-tools-device-statusbar-clock{margin-left:15px!important}.i-amphtml-story-dev-tools-device[ios] .i-amphtml-story-dev-tools-device-statusbar-clock{width:40px!important;height:12px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='12' fill='none'%3E%3Cpath fill='%23fff' d='M3.5 11h1.89V.43H3.5L.74 2.37v1.78L3.37 2.3h.13V11zm4.49-7.44h1.77c0-1.11.73-1.88 1.88-1.88 1.1 0 1.77.74 1.77 1.7 0 .8-.32 1.31-1.66 2.66L8.1 9.73V11h7.34V9.43h-4.78v-.12l2.27-2.24c1.82-1.78 2.36-2.63 2.36-3.86 0-1.76-1.43-3.04-3.53-3.04C9.56.17 8 1.56 8 3.56zm10.61.6c.7 0 1.17-.48 1.17-1.14 0-.65-.47-1.13-1.17-1.13-.69 0-1.17.48-1.17 1.13 0 .66.48 1.14 1.17 1.14zm0 5.38c.7 0 1.17-.5 1.17-1.14 0-.65-.47-1.14-1.17-1.14-.69 0-1.17.49-1.17 1.14 0 .64.48 1.14 1.17 1.14zm5.65-3.26h1.32c1.3 0 2.1.66 2.1 1.72 0 1.02-.86 1.71-2.07 1.71-1.23 0-2.05-.63-2.14-1.61h-1.8c.08 1.91 1.66 3.16 3.96 3.16 2.28 0 3.98-1.31 3.98-3.13 0-1.44-.9-2.37-2.33-2.6v-.12c1.12-.3 1.91-1.14 1.92-2.42 0-1.51-1.26-2.82-3.5-2.82-2.3 0-3.73 1.3-3.83 3.15h1.77c.08-1.06.8-1.64 1.95-1.64 1.12 0 1.79.68 1.79 1.56 0 .96-.75 1.63-1.83 1.63h-1.3v1.41zm10.92 4.98c2.53 0 4.03-2.04 4.03-5.54S37.67.17 35.17.17c-2.51 0-4.04 2.04-4.04 5.53 0 3.51 1.5 5.56 4.04 5.56zm0-1.53c-1.34 0-2.13-1.39-2.13-4.03 0-2.61.8-4 2.13-4 1.32 0 2.12 1.38 2.12 4 0 2.65-.78 4.03-2.12 4.03z'/%3E%3C/svg%3E")!important}.i-amphtml-story-dev-tools-device-appbar{height:48px!important;position:relative!important;-ms-flex-align:center!important;align-items:center!important;display:-ms-flexbox!important;display:flex!important;padding:0px 15px!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.i-amphtml-story-dev-tools-device[ios] .i-amphtml-story-dev-tools-device-appbar{height:40px!important}.i-amphtml-story-dev-tools-device[ios][browser] .i-amphtml-story-dev-tools-device-appbar-urlbar{height:28px!important;background:var(--i-amphtml-story-dev-tools-white-transparent-1)!important}.i-amphtml-story-dev-tools-device .i-amphtml-story-dev-tools-device-appbar-icon{background:var(--i-amphtml-story-dev-tools-white-transparent-2)!important;width:24px!important;height:24px!important;border-radius:12px!important;margin:5px!important}.i-amphtml-story-dev-tools-device[ios][browser] .i-amphtml-story-dev-tools-device-appbar>.i-amphtml-story-dev-tools-device-appbar-icon,.i-amphtml-story-dev-tools-device[ios][native] .i-amphtml-story-dev-tools-device-appbar>.i-amphtml-story-dev-tools-device-appbar-icon:last-child{display:none!important}.i-amphtml-story-dev-tools-device[browser] .i-amphtml-story-dev-tools-device-appbar-urlbar{background:var(--i-amphtml-story-dev-tools-black-transparent-1)!important;-ms-flex:1!important;flex:1!important;height:40px!important;border-radius:20px!important;margin:5px!important}.i-amphtml-story-dev-tools-device[desktop][browser] .i-amphtml-story-dev-tools-device-appbar-urlbar{height:34px!important;border-radius:17px!important}.i-amphtml-story-dev-tools-device[ios][browser] .i-amphtml-story-dev-tools-device-bottombar{height:42px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:distribute!important;justify-content:space-around!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-dev-tools-device[ios][browser] .i-amphtml-story-dev-tools-device-bottombar>div{background:var(--i-amphtml-story-dev-tools-gray-5)!important;width:30px!important;height:30px!important;border-radius:15px!important}.i-amphtml-story-dev-tools-device-navigation{height:15px!important;position:relative!important}.i-amphtml-story-dev-tools-device[ios][native] .i-amphtml-story-dev-tools-device-navigation{height:0px!important}.i-amphtml-story-dev-tools-device[ios][browser] .i-amphtml-story-dev-tools-device-navigation{height:36px!important}.i-amphtml-story-dev-tools-device-navigation:after{content:""!important;width:36%!important;height:5px!important;background:#fff!important;border-radius:5px!important;position:absolute!important;bottom:5px!important;left:32%!important}.i-amphtml-story-dev-tools-device[oneplus5t] .i-amphtml-story-dev-tools-device-navigation:after,.i-amphtml-story-dev-tools-device[oneplus7pro] .i-amphtml-story-dev-tools-device-navigation:after{width:26%!important;left:37%!important;height:4px!important}.i-amphtml-story-dev-tools-device[oneplus5t] .i-amphtml-story-dev-tools-device-navigation,.i-amphtml-story-dev-tools-device[oneplus7pro] .i-amphtml-story-dev-tools-device-navigation{background:#000!important}.i-amphtml-story-dev-tools-device[pixel2] .i-amphtml-story-dev-tools-device-navigation,.i-amphtml-story-dev-tools-device[pixel3] .i-amphtml-story-dev-tools-device-navigation{background:#000!important;height:48px!important;-ms-flex:none!important;flex:none!important}.i-amphtml-story-dev-tools-device[pixel2] .i-amphtml-story-dev-tools-device-navigation:after,.i-amphtml-story-dev-tools-device[pixel3] .i-amphtml-story-dev-tools-device-navigation:after{width:8%!important;left:46%!important;bottom:0!important;top:0!important;margin:auto!important;height:10px!important}.i-amphtml-story-dev-tools-device[pixel2] .i-amphtml-story-dev-tools-device-navigation:before,.i-amphtml-story-dev-tools-device[pixel3] .i-amphtml-story-dev-tools-device-navigation:before{content:""!important;position:absolute!important;left:20%!important;top:0!important;bottom:0!important;margin:auto!important;width:7px!important;height:11px!important;background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='12' fill='none'%3E%3Cpath d='M6.94 1.607 6 .667.667 6 6 11.333l.94-.94L2.553 6' fill='%23fff'/%3E%3C/svg%3E")!important}.i-amphtml-story-dev-tools-device[android][browser] .i-amphtml-story-dev-tools-device-bottombar,.i-amphtml-story-dev-tools-device[desktop] .i-amphtml-story-dev-tools-device-navigation,.i-amphtml-story-dev-tools-device[desktop][browser] .i-amphtml-story-dev-tools-device-bottombar,.i-amphtml-story-dev-tools-device[ios][browser][ipad] .i-amphtml-story-dev-tools-device-bottombar,.i-amphtml-story-dev-tools-device[ios][native] .i-amphtml-story-dev-tools-device-bottombar,.i-amphtml-story-dev-tools-device[ipad] .i-amphtml-story-dev-tools-device-navigation,.i-amphtml-story-dev-tools-device[iphone8] .i-amphtml-story-dev-tools-device-navigation{display:none!important}amp-story-dev-tools{width:100%!important;height:100%!important;background-color:#000!important;font-size:16px!important;font-family:Poppins,sans-serif!important;color:#fff!important;--i-amphtml-story-dev-tools-vertical-spacing:30px!important;--i-amphtml-story-dev-tools-accent:#79b3ff!important;--i-amphtml-story-dev-tools-accent-light:#92c1ff!important;--i-amphtml-story-dev-tools-accent-translucent:#79b3ff55!important;--i-amphtml-story-dev-tools-error-color:#ff5252!important;--i-amphtml-story-dev-tools-gray-1:#101010!important;--i-amphtml-story-dev-tools-gray-2:#2e3137!important;--i-amphtml-story-dev-tools-gray-3:#2e2e2e!important;--i-amphtml-story-dev-tools-gray-4:#3d3d3d!important;--i-amphtml-story-dev-tools-gray-5:#525358!important;--i-amphtml-story-dev-tools-gray-transparent-1:#111111cc!important;--i-amphtml-story-dev-tools-white-transparent-1:#ffffff22!important;--i-amphtml-story-dev-tools-white-transparent-2:#ffffff35!important;--i-amphtml-story-dev-tools-white-transparent-3:#ffffff77!important;--i-amphtml-story-dev-tools-white-transparent-4:#ffffffcc!important;--i-amphtml-story-dev-tools-black-transparent-1:#00000077!important;--i-amphtml-story-dev-tools-material-easing-standard:cubic-bezier(0.4,0.0,0.2,1)!important;--i-amphtml-story-dev-tools-material-easing-accelerated:cubic-bezier(0.4,0.0,1,1)!important;--i-amphtml-story-dev-tools-material-easing-decelerated:cubic-bezier(0.0,0.0,0.2,1)!important}amp-story-dev-tools,amp-story-dev-tools *{box-sizing:border-box!important}.i-amphtml-story-dev-tools-header{-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:justify!important;justify-content:space-between!important;margin-top:15px!important;padding:15px 10%!important}.i-amphtml-story-dev-tools-brand,.i-amphtml-story-dev-tools-header{display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-dev-tools-brand-text>span{display:block!important;letter-spacing:0.1em!important;line-height:1.2em!important;padding-inline-start:10px!important}.i-amphtml-story-dev-tools-brand-text>span:nth-child(2){color:var(--i-amphtml-story-dev-tools-accent)!important;font-size:10px!important}.i-amphtml-story-dev-tools-container{height:100%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important}.i-amphtml-story-dev-tools-button{cursor:pointer!important;font-size:13px!important;display:-ms-inline-flexbox!important;display:inline-flex!important;-ms-flex-align:center!important;align-items:center!important;border:1px solid var(--i-amphtml-story-dev-tools-accent-translucent)!important;border-radius:20px!important;padding-inline-start:10px!important;padding-inline-end:6px!important;height:32px!important;color:var(--i-amphtml-story-dev-tools-accent)!important;text-decoration:none!important;background:transparent!important;font-family:inherit!important;outline:none!important}.i-amphtml-story-dev-tools-button:focus,.i-amphtml-story-dev-tools-button:hover{background:var(--i-amphtml-story-dev-tools-accent-translucent)!important}.i-amphtml-story-dev-tools-button svg{background:var(--i-amphtml-story-dev-tools-accent)!important;padding:3px!important;width:20px!important;height:20px!important;border-radius:50%!important;margin-inline-start:10px!important}.i-amphtml-story-dev-tools-tab-selector{padding-bottom:0.2em!important;margin:0 16px!important;cursor:pointer!important;opacity:0.4!important;font-size:inherit!important;background:none!important;border:none!important;color:inherit!important;outline:none!important;box-shadow:none!important;font-family:inherit!important;display:-ms-inline-flexbox!important;display:inline-flex!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-dev-tools-tab-selector:not([active]):hover,.i-amphtml-story-dev-tools-tabs>button:not([active]):focus{opacity:0.9!important}.i-amphtml-story-dev-tools-tab-selector[active]{opacity:1!important;cursor:initial!important;border-bottom:2px solid #fff!important}.i-amphtml-story-dev-tools-tab{-ms-flex:1!important;flex:1!important}
/*# sourceURL=/extensions/amp-story-dev-tools/0.1/amp-story-dev-tools.css*/`;

  // extensions/amp-story-dev-tools/0.1/amp-story-dev-tools.js
  var _templateObject7;
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
  function _taggedTemplateLiteralLoose3(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var fontsToLoad = [{
    family: "Poppins",
    weight: "400",
    src: "url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2')"
  }, {
    family: "Poppins",
    weight: "600",
    src: "url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format('woff2')"
  }];
  var buildContainerTemplate = function buildContainerTemplate2(element) {
    var html2 = htmlFor(element);
    return html2(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose3(['\n    <div class="i-amphtml-story-dev-tools-container">\n      <div class="i-amphtml-story-dev-tools-header">\n        <span class="i-amphtml-story-dev-tools-brand">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="30"\n            height="30"\n            viewBox="0 0 30 30"\n            fill="none"\n          >\n            <circle cx="15" cy="15" r="15" fill="white"></circle>\n            <path\n              fill="#202125"\n              d="M19.5 9a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5V9zM8.25 9a1.5 1.5 0 011.5-1.5h6.75A1.5 1.5 0 0118 9v12a1.5 1.5 0 01-1.5 1.5H9.75a1.5 1.5 0 01-1.5-1.5V9zM22.5 10.5c.621 0 1.125.504 1.125 1.125v6.75c0 .622-.504 1.125-1.125 1.125v-9z"\n            />\n          </svg>\n          <span class="i-amphtml-story-dev-tools-brand-text">\n            <span>WEB STORIES</span>\n            <span>DEV - TOOLS</span>\n          </span>\n        </span>\n        <div class="i-amphtml-story-dev-tools-tabs"></div>\n        <a\n          class="i-amphtml-story-dev-tools-button i-amphtml-story-dev-tools-close"\n        >\n          <span>OPEN STORY</span>\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="14"\n            height="14"\n            viewBox="0 0 14 14"\n            fill="none"\n          >\n            <path\n              d="M9.9165 4.08333L9.094 4.90583L10.599 6.41667H4.6665V7.58333H10.599L9.094 9.08833L9.9165 9.91667L12.8332 7L9.9165 4.08333ZM2.33317 2.91667H6.99984V1.75H2.33317C1.6915 1.75 1.1665 2.275 1.1665 2.91667V11.0833C1.1665 11.725 1.6915 12.25 2.33317 12.25H6.99984V11.0833H2.33317V2.91667Z"\n              fill="black"\n            />\n          </svg>\n        </a>\n      </div>\n    </div>\n  '])));
  };
  var DevToolsTab = {
    PREVIEW: "Preview",
    DEBUG: "Debug"
  };
  var AmpStoryDevTools = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits3(AmpStoryDevTools2, _AMP$BaseElement);
    var _super = _createSuper3(AmpStoryDevTools2);
    function AmpStoryDevTools2(element) {
      var _this;
      _classCallCheck10(this, AmpStoryDevTools2);
      _this = _super.call(this, element);
      _this.hashParams_ = parseQueryString(_this.win.location.hash);
      _this.win.document.title = "Story Dev-Tools (" + _this.win.document.title + ")";
      _this.storyUrl_ = _this.hashParams_["url"] || _this.win.location.href.split("#")[0];
      _this.currentTab_ = (_this.hashParams_["tab"] ? Object.values(DevToolsTab).find(function(tab) {
        return tab.toLowerCase().replace(" ", "-") === _this.hashParams_["tab"];
      }) : null) || DevToolsTab.PREVIEW;
      _this.tabContents_ = {};
      _this.tabSelectors_ = [];
      return _this;
    }
    _createClass9(AmpStoryDevTools2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported() {
        return true;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.loadFonts_();
        this.removeCustomCSS_();
        this.buildLayout_();
        this.initializeListeners_();
        this.buildTabs_();
        this.switchTab_(this.currentTab_);
      }
    }, {
      key: "buildLayout_",
      value: function buildLayout_() {
        var _this2 = this;
        var container = buildContainerTemplate(this.element);
        this.element.appendChild(container);
        this.element.querySelector(".i-amphtml-story-dev-tools-close").href = this.storyUrl_;
        var tabsContainer = container.querySelector(".i-amphtml-story-dev-tools-tabs");
        Object.values(DevToolsTab).forEach(function(tabTitle) {
          var tabSelector = _this2.win.document.createElement("button");
          tabSelector.classList.add("i-amphtml-story-dev-tools-tab-selector");
          tabSelector.setAttribute("data-tab", tabTitle);
          tabSelector.textContent = tabTitle;
          _this2.tabSelectors_.push(tabSelector);
          tabsContainer.appendChild(tabSelector);
        });
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this3 = this;
        var tabsContainer = this.element.querySelector(".i-amphtml-story-dev-tools-tabs");
        tabsContainer.addEventListener("click", function(event) {
          var tab = event.target.getAttribute("data-tab");
          if (Object.values(DevToolsTab).find(function(t) {
            return t == tab;
          }) && _this3.currentTab_ != tab) {
            _this3.switchTab_(tab);
            updateHash({
              "tab": tab == DevToolsTab.PREVIEW ? null : tab.toLowerCase().replace(" ", "-")
            }, _this3.win);
          }
        });
      }
    }, {
      key: "buildTabs_",
      value: function buildTabs_() {
        var container = this.element.querySelector(".i-amphtml-story-dev-tools-container");
        this.tabContents_[DevToolsTab.PREVIEW] = createTabPreviewElement(this.win, this.storyUrl_, this.hashParams_["devices"]);
        this.tabContents_[DevToolsTab.DEBUG] = createTabDebugElement(this.win, this.storyUrl_);
        Object.values(this.tabContents_).forEach(function(tabContent) {
          tabContent.setAttribute("layout", "container");
          toggle(tabContent, false);
          container.appendChild(tabContent);
        });
      }
    }, {
      key: "switchTab_",
      value: function switchTab_(tab) {
        var _this4 = this;
        this.mutateElement(function() {
          toggle(_this4.tabContents_[_this4.currentTab_], false);
          toggle(_this4.tabContents_[tab], true);
          _this4.tabSelectors_.forEach(function(tabSelector) {
            return tabSelector.toggleAttribute("active", tabSelector.getAttribute("data-tab") === tab);
          });
          _this4.currentTab_ = tab;
        });
      }
    }, {
      key: "loadFonts_",
      value: function loadFonts_() {
        var _this5 = this;
        if (this.win.document.fonts && FontFace) {
          fontsToLoad.forEach(function(fontProperties) {
            var font = new FontFace(fontProperties.family, fontProperties.src, {
              weight: fontProperties.weight,
              style: "normal"
            });
            font.load().then(function() {
              _this5.win.document.fonts.add(font);
            });
          });
        }
      }
    }, {
      key: "removeCustomCSS_",
      value: function removeCustomCSS_() {
        this.element.ownerDocument.querySelectorAll("style[amp-custom]").forEach(function(e) {
          return e.remove();
        });
      }
    }]);
    return AmpStoryDevTools2;
  }(AMP.BaseElement);
  AMP.extension("amp-story-dev-tools", "0.1", function(AMP2) {
    AMP2.registerElement("amp-story-dev-tools", AmpStoryDevTools, CSS2);
    AMP2.registerElement("amp-story-dev-tools-tab-debug", AmpStoryDevToolsTabDebug);
    AMP2.registerElement("amp-story-dev-tools-tab-preview", AmpStoryDevToolsTabPreview);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-story-dev-tools-0.1.max.js.map
