(self.AMP=self.AMP||[]).push({n:"amp-story-player",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
          for (var _iterator = _createForOfIteratorHelperLoose(a2), _step; !(_step = _iterator()).done; ) {
            var f = _step.value;
            128 > f && b.push(y(f));
          }
          var h = f = b.length;
          for (f && b.push("-"); h < d; ) {
            var g = 2147483647;
            for (var _iterator2 = _createForOfIteratorHelperLoose(a2), _step2; !(_step2 = _iterator2()).done; ) {
              var _b2 = _step2.value;
              _b2 >= c && _b2 < g && (g = _b2);
            }
            var _d = h + 1;
            g - c > n((2147483647 - e) / _d) && p("overflow");
            e += (g - c) * _d;
            c = g;
            for (var _iterator3 = _createForOfIteratorHelperLoose(a2), _step3; !(_step3 = _iterator3()).done; ) {
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

  // src/amp-story-player/amp-story-player-impl.js
  var ampToolboxCacheUrl = __toModule(require_amp_toolbox_cache_url_umd());

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

  // src/amp-story-player/amp-story-player-viewport-observer.js
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
  var SCROLL_THROTTLE_MS = 500;
  var AmpStoryPlayerViewportObserver = /* @__PURE__ */ function() {
    function AmpStoryPlayerViewportObserver2(win, element, viewportCb) {
      _classCallCheck2(this, AmpStoryPlayerViewportObserver2);
      this.win_ = win;
      this.element_ = element;
      this.cb_ = viewportCb;
      this.scrollHandler_ = null;
      this.initializeInObOrFallback_();
    }
    _createClass(AmpStoryPlayerViewportObserver2, [{
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
  var TAG = "amp-viewer-messaging";
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
      _classCallCheck3(this, WindowPortEmulator2);
      this.win_ = win;
      this.origin_ = origin;
      this.target_ = target;
    }
    _createClass2(WindowPortEmulator2, [{
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
      _classCallCheck3(this, Messaging2);
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
    _createClass2(Messaging2, [{
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
          this.logError_(TAG + ": handleMessage_ error: ", "invalid token");
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
        this.logError_(TAG + ": sendResponseError_, message name: " + messageName, errString);
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
            this.logError_(TAG + ": handleResponse_ error: ", message.error);
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
  var PageScroller = /* @__PURE__ */ function() {
    function PageScroller2(win) {
      _classCallCheck4(this, PageScroller2);
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
    _createClass3(PageScroller2, [{
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

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck5(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass4(LruCache2, [{
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

  // src/core/types/index.js
  function isElement(value) {
    return (value == null ? void 0 : value.nodeType) == 1;
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

  // src/core/error/message-helpers.js
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

  // src/log.js
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

  // src/dom.js
  function isJsonScriptTag(element) {
    return element.tagName == "SCRIPT" && element.hasAttribute("type") && element.getAttribute("type").toUpperCase() == "APPLICATION/JSON";
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
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
  function resetStyles(element, properties) {
    for (var i = 0; i < properties.length; i++) {
      setStyle(element, properties[i], null);
    }
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
  var TAG2 = "3p-frame";
  function applySandbox(iframe) {
    if (!iframe.sandbox || !iframe.sandbox.supports) {
      return;
    }
    var requiredFlags = getRequiredSandboxFlags();
    for (var i = 0; i < requiredFlags.length; i++) {
      var flag = requiredFlags[i];
      if (!iframe.sandbox.supports(flag)) {
        dev().info(TAG2, "Iframe doesn't support %s", flag);
        return;
      }
    }
    iframe.sandbox = requiredFlags.join(" ") + " " + getOptionalSandboxFlags().join(" ");
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
  var TAG3 = "amp-story-player";
  var LOG_TYPE = {
    DEV: "amp-story-player-dev"
  };
  var AmpStoryPlayer = /* @__PURE__ */ function() {
    function AmpStoryPlayer2(win, element) {
      _classCallCheck6(this, AmpStoryPlayer2);
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
    _createClass5(AmpStoryPlayer2, [{
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
          throw new Error("[" + TAG3 + "] element must be connected to the DOM before calling load().");
        }
        if (!!this.element_.isBuilt_) {
          throw new Error("[" + TAG3 + "] calling load() on an already loaded element.");
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
          console.error("[" + TAG3 + "]", "Unsupported cache specified, use one of following: " + SUPPORTED_CACHES);
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
          console.error("[" + TAG3 + "] ", reason);
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
            console.error("[" + TAG3 + "]", err);
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
          console.error("[" + TAG3 + "]", reason);
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
            console.error("[" + TAG3 + "]", reason);
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
            console.error("[" + TAG3 + "]", err);
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

  // build/amp-story-player.css.js
  var cssText2 = 'amp-story-player{position:relative;display:block}.i-amphtml-story-player-shadow-root-intermediary{width:100%;height:100%}amp-story-player a:first-of-type{width:100%;height:100%;background:var(--story-player-poster,#d3d3d3);background-size:100% 100%;display:block}amp-story-player.i-amphtml-story-player-loaded a{display:none}amp-story-player:after{content:" ";position:absolute;box-sizing:border-box;top:calc(50% - 32px);left:calc(50% - 32px);width:64px;height:64px;border-radius:50%;border-color:#fff transparent;border-style:solid;border-width:6px;filter:drop-shadow(0px 1px 3px rgba(0,0,0,0.25));animation-name:i-amphtml-story-player-spinner;animation-duration:4400ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1);animation-iteration-count:infinite}@keyframes i-amphtml-story-player-spinner{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}.i-amphtml-story-player-loaded:after{visibility:hidden}\n/*# sourceURL=/css/amp-story-player.css*/';

  // extensions/amp-story-player/0.1/amp-story-player.js
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
  var AmpStoryPlayerWrapper = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStoryPlayerWrapper2, _AMP$BaseElement);
    var _super = _createSuper(AmpStoryPlayerWrapper2);
    function AmpStoryPlayerWrapper2(element) {
      var _this;
      _classCallCheck7(this, AmpStoryPlayerWrapper2);
      _this = _super.call(this, element);
      _this.player_ = new AmpStoryPlayer(_this.win, element);
      return _this;
    }
    _createClass6(AmpStoryPlayerWrapper2, [{
      key: "buildCallback",
      value: function buildCallback() {
        this.player_.buildPlayer();
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        this.player_.layoutPlayer();
        return resolvedPromise();
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return isLayoutSizeDefined(layout);
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }]);
    return AmpStoryPlayerWrapper2;
  }(AMP.BaseElement);
  AMP.extension("amp-story-player", "0.1", function(AMP2) {
    AMP2.registerElement("amp-story-player", AmpStoryPlayerWrapper, cssText2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-story-player-0.1.max.js.map
